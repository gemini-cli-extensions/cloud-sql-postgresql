#!/usr/bin/env node

// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const { spawn, execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const toolName = "postgres_upgrade_precheck";
const configArgs = ["--prebuilt", "cloud-sql-postgres"];

function getToolboxPath() {
    if (process.env.GEMINI_CLI === '1') {
        const localPath = path.resolve(__dirname, '../../../toolbox');
        if (fs.existsSync(localPath)) {
            return localPath;
        }
    }
    try {
        const checkCommand = process.platform === 'win32' ? 'where toolbox' : 'which toolbox';
        const globalPath = execSync(checkCommand, { stdio: 'pipe', encoding: 'utf-8' }).trim();
        if (globalPath) {
            return globalPath.split('\n')[0].trim();
        }
        throw new Error("Toolbox binary not found");
    } catch (e) {
        throw new Error("Toolbox binary not found");
    }
}

let toolboxBinary;
try {
    toolboxBinary = getToolboxPath();
} catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
}

function getEnv() {
    const envPath = path.resolve(__dirname, '../../../.env');
    const env = { ...process.env };
    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf-8');
        envContent.split('\n').forEach(line => {
            const trimmed = line.trim();
            if (trimmed && !trimmed.startsWith('#')) {
                const splitIdx = trimmed.indexOf('=');
                if (splitIdx !== -1) {
                    const key = trimmed.slice(0, splitIdx).trim();
                    let value = trimmed.slice(splitIdx + 1).trim();
                    value = value.replace(/(^['"]|['"]$)/g, '');
                    if (env[key] === undefined) {
                        env[key] = value;
                    }
                }
            }
        });
    }
    return env;
}

let env = process.env;
let userAgent = "skills";
if (process.env.GEMINI_CLI === '1') {
    env = getEnv();
    userAgent = "skills-geminicli";
}

const args = process.argv.slice(2);

const toolboxArgs = ["--log-level", "error", ...configArgs, "invoke", toolName, "--user-agent-metadata", userAgent, ...args];

const child = spawn(toolboxBinary, toolboxArgs, { stdio: 'inherit', env });

child.on('close', (code) => {
  process.exit(code);
});

child.on('error', (err) => {
  console.error("Error executing toolbox:", err);
  process.exit(1);
});

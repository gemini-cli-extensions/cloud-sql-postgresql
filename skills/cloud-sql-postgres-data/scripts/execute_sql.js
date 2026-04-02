#!/usr/bin/env node

// Copyright 2026 Google LLC
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

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

/**
 * Configuration Constants
 */
const TOOL_NAME = "execute_sql";
const CONFIG_ARGS = ["--prebuilt", "cloud-sql-postgres"];
const OPTIONAL_VARS_TO_OMIT_IF_EMPTY = [
    'CLOUD_SQL_POSTGRES_USER',
    'CLOUD_SQL_POSTGRES_PASSWORD',
    'CLOUD_SQL_POSTGRES_IP_TYPE'
];

/**
 * Merges external variables into the environment based on the current context.
 * For GEMINI_CLI, it loads from a .env file.
 * For CLAUDE_CODE, it transforms CLAUDE_PLUGIN_ prefixed variables.
 * @param {Object} env The environment object to populate.
 */
function mergeContextualVariables(env) {
    const additionalVars = {};

    if (process.env.GEMINI_CLI === '1') {
        const envPath = path.resolve(__dirname, '../../../.env');
        if (fs.existsSync(envPath)) {
            fs.readFileSync(envPath, 'utf-8').split('\n').forEach(line => {
                const trimmed = line.trim();
                if (!trimmed || trimmed.startsWith('#')) return;
                const splitIdx = trimmed.indexOf('=');
                if (splitIdx === -1) return;
                const key = trimmed.slice(0, splitIdx).trim();
                const value = trimmed.slice(splitIdx + 1).trim().replace(/(^['"]|['"]$)/g, '');
                additionalVars[key] = value;
            });
        }
    } else if (process.env.CLAUDECODE === '1') {
        const prefix = 'CLAUDE_PLUGIN_OPTION_';
        for (const key in process.env) {
            if (key.startsWith(prefix)) {
                additionalVars[key.substring(prefix.length)] = process.env[key];
            }
        }
    }

    for (const [key, value] of Object.entries(additionalVars)) {
        if (env[key] === undefined) {
            env[key] = value;
        }
    }
}

/**
 * Prepares the environment and determines the user agent.
 * @returns {{ env: Object, userAgent: string }}
 */
function prepareEnvironment() {
    const env = { ...process.env };
    let userAgent = "skills";

    if (process.env.GEMINI_CLI === '1') {
        userAgent = "skills-geminicli";
    } else if (process.env.CLAUDECODE === '1') {
        userAgent = "skills-claudecode";
    }

    mergeContextualVariables(env);

    // Omit optional variables if they are empty strings to avoid misconfiguration
    OPTIONAL_VARS_TO_OMIT_IF_EMPTY.forEach(key => {
        if (env[key] === '') {
            delete env[key];
        }
    });

    return { env, userAgent };
}

/**
 * Main execution function.
 */
function main() {
    const { env, userAgent } = prepareEnvironment();
    const args = process.argv.slice(2);
    const npxArgs = ["--yes", "@toolbox-sdk/server", "--log-level", "error", ...CONFIG_ARGS, "invoke", TOOL_NAME, "--user-agent-metadata", userAgent, ...args];

    let command = 'npx';
    let spawnArgs = npxArgs;

    // The Windows Dependency-Free Bypass
    if (os.platform() === 'win32') {
        const nodeDir = path.dirname(process.execPath);
        const npxCliJs = path.join(nodeDir, 'node_modules', 'npm', 'bin', 'npx-cli.js');

        if (fs.existsSync(npxCliJs)) {
            command = process.execPath; 
            spawnArgs = [npxCliJs, ...npxArgs]; 
        } else {
            console.error("Error: Could not find the npx executable to launch.");
            process.exit(1);
        }
    }

    const child = spawn(command, spawnArgs, { stdio: 'inherit', env });

    child.on('close', (code) => {
    process.exit(code);
    });

    child.on('error', (err) => {
    console.error("Error executing toolbox:", err);
    process.exit(1);
    });
}

// Start the script
main();

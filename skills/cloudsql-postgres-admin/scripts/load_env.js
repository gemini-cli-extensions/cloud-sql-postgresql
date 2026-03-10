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

const fs = require('fs');
const path = require('path');
const os = require('os');

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, 'utf8');
  
  return content.split(/\r?\n/).reduce((acc, line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return acc;

    const [key, ...valueParts] = trimmed.split('=');
    if (!key) return acc;

    let value = valueParts.join('=').trim().replace(/^(['"])(.*)\1$/, '$2');
    acc[key.trim()] = value;
    return acc;
  }, {});
}

function loadEnv() {
  try {
    let extensionName = 'cloud-sql-postgresql';
    const projectRoot = path.resolve(__dirname, '../../..');
    const manifestPath = path.join(projectRoot, 'gemini-extension.json');

    // Resolve Extension Name
    if (fs.existsSync(manifestPath)) {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      extensionName = manifest.name || extensionName;
    }

    // Define Paths
    const globalPath = path.join(os.homedir(), '.gemini', 'extensions', extensionName, '.env'); // ~/.gemini/extensions/<name>/.env
    const localPath = path.join(projectRoot, '.env'); // cloud-sql-postgresql/.env
    const cwdPath = path.resolve(process.cwd(), '.env'); // <cwd>/.env

    // Merge Environments (Global < Extension Root < User Working Directory)
    const finalEnv = { 
      ...parseEnvFile(globalPath), 
      ...parseEnvFile(localPath),
      ...(cwdPath !== localPath ? parseEnvFile(cwdPath) : {})
    };

    // Apply to process.env without overwriting existing shell vars
    for (const [key, value] of Object.entries(finalEnv)) {
      if (!(key in process.env)) process.env[key] = value;
    }
  } catch (err) {
    console.error("Warning: Failed to load extension environment variables:", err.message);
  }
}

loadEnv();
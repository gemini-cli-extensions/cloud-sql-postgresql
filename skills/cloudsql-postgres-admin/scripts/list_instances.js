#!/usr/bin/env node

const { spawn, execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const toolName = "list_instances";
const toolsFileName = "list_instances.yaml";

function getToolboxPath() {
    try {
        const checkCommand = process.platform === 'win32' ? 'where toolbox' : 'which toolbox';
        const globalPath = execSync(checkCommand, { stdio: 'pipe', encoding: 'utf-8' }).trim();
        if (globalPath) {
            return globalPath.split('\n')[0].trim();
        }
    } catch (e) {
        // Ignore error;
    }
    const localPath = path.resolve(__dirname, '../../../toolbox');
    if (fs.existsSync(localPath)) {
        return localPath;
    }
    throw new Error("Toolbox binary not found");
}

let toolboxBinary;
try {
    toolboxBinary = getToolboxPath();
} catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
}

let configArgs = [];
if (toolsFileName) {
  configArgs.push("--tools-file", path.join(__dirname, "..", "assets", toolsFileName));
}

const args = process.argv.slice(2);
const toolboxArgs = [...configArgs, "invoke", toolName, ...args];

const child = spawn(toolboxBinary, toolboxArgs, { stdio: 'inherit' });

child.on('close', (code) => {
  process.exit(code);
});

child.on('error', (err) => {
  console.error("Error executing toolbox:", err);
  process.exit(1);
});

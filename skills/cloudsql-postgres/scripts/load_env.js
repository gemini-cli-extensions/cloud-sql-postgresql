const fs = require('fs');
const path = require('path');
const os = require('os');

function loadEnv() {
  try {
    // Check if a local .env exists in the current working directory of the project
    const localEnvPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(localEnvPath)) {
      parseAndSetEnv(localEnvPath);
    }

    // Resolve the extension name from gemini-extension.json
    // Fallback to 'cloud-sql-postgresql' if we can't find it
    let extensionName = 'cloud-sql-postgresql';
    try {
      const projectRoot = path.resolve(__dirname, '../../..');
      const manifestPath = path.join(projectRoot, 'gemini-extension.json');
      if (fs.existsSync(manifestPath)) {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        if (manifest.name) {
          extensionName = manifest.name;
        }
      }
    } catch (e) {
      // Ignore parsing errors, fallback is fine
    }

    // Load from ~/.gemini/extensions/<name>/.env
    const homeDir = os.homedir();
    const geminiEnvPath = path.join(homeDir, '.gemini', 'extensions', extensionName, '.env');
    if (fs.existsSync(geminiEnvPath)) {
      parseAndSetEnv(geminiEnvPath);
    }
  } catch (err) {
    console.error("Warning: Failed to load extension environment variables:", err.message);
  }
}

function parseAndSetEnv(envPath) {
  const envFileContent = fs.readFileSync(envPath, 'utf8');
  const lines = envFileContent.split(/\r?\n/);
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    // Ignore empty lines and comments
    if (!trimmedLine || trimmedLine.startsWith('#')) {
      continue;
    }
    
    // Parse KEY=VALUE
    const equalSignIndex = trimmedLine.indexOf('=');
    if (equalSignIndex === -1) {
      continue;
    }
    
    const key = trimmedLine.substring(0, equalSignIndex).trim();
    let value = trimmedLine.substring(equalSignIndex + 1).trim();
    
    // Remove surrounding quotes if present
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.substring(1, value.length - 1);
    } else if (value.startsWith("'") && value.endsWith("'")) {
      value = value.substring(1, value.length - 1);
    }
    
    // Set if not already defined in process.env
    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

// Execute immediately when required
loadEnv();

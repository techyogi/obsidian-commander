// Script to increment the version number in package.json and manifest.json
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read package.json
const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Read manifest.json
const manifestJsonPath = path.join(__dirname, '../manifest.json');
const manifestJson = JSON.parse(fs.readFileSync(manifestJsonPath, 'utf8'));

// Parse current version
const currentVersion = packageJson.version;
console.log(`Current version: ${currentVersion}`);

// Split version into parts
const versionParts = currentVersion.split('.');
const major = parseInt(versionParts[0], 10);
const minor = parseInt(versionParts[1], 10);
const patch = parseInt(versionParts[2], 10);

// Increment patch version
const newPatch = patch + 1;
const newVersion = `${major}.${minor}.${newPatch}`;
console.log(`New version: ${newVersion}`);

// Update package.json
packageJson.version = newVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
console.log(`Updated package.json to version ${newVersion}`);

// Update manifest.json
manifestJson.version = newVersion;
fs.writeFileSync(manifestJsonPath, JSON.stringify(manifestJson, null, 2) + '\n');
console.log(`Updated manifest.json to version ${newVersion}`);

console.log('Version increment complete!');

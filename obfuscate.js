/**
 * Code Obfuscator & Encryption Tool for Al Khashab Gaming Portal
 * Run with: node obfuscate.js
 */
const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

console.log('🐺 Starting Al Khashab Code Encryption & Obfuscation...');

const obfuscationOptions = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.75,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 0.25,
  debugProtection: false, // We handle DevTools gracefully with our own lockout UI & sound
  disableConsoleOutput: false,
  identifierNamesGenerator: 'hexadecimal',
  log: false,
  numbersToExpressions: true,
  renameGlobals: false,
  selfDefending: true,
  simplify: true,
  splitStrings: true,
  splitStringsChunkLength: 8,
  stringArray: true,
  stringArrayCallsTransform: true,
  stringArrayEncoding: ['base64'],
  stringArrayIndexShift: true,
  stringArrayRotate: true,
  stringArrayShuffle: true,
  stringArrayWrappersCount: 2,
  stringArrayWrappersChainedCalls: true,
  stringArrayWrappersParametersMaxCount: 4,
  stringArrayWrappersType: 'function',
  stringArrayThreshold: 0.8,
  transformObjectKeys: true,
  unicodeEscapeSequence: false
};

try {
  // 1. Obfuscate security.js -> security.min.js
  const securityCode = fs.readFileSync(path.join(__dirname, 'security.js'), 'utf8');
  console.log('🔒 Encrypting security.js...');
  const obfuscatedSecurity = JavaScriptObfuscator.obfuscate(securityCode, {
    ...obfuscationOptions,
    stringArrayThreshold: 0.95
  });
  fs.writeFileSync(path.join(__dirname, 'security.min.js'), obfuscatedSecurity.getObfuscatedCode(), 'utf8');
  console.log('✅ security.min.js generated successfully!');

  // 2. Read app.source.js and obfuscate into app.js
  const sourceFile = fs.existsSync(path.join(__dirname, 'app.source.js')) 
    ? path.join(__dirname, 'app.source.js') 
    : path.join(__dirname, 'app.js');

  const appSourceCode = fs.readFileSync(sourceFile, 'utf8');
  console.log('🔒 Encrypting app.source.js into app.js...');
  const obfuscatedApp = JavaScriptObfuscator.obfuscate(appSourceCode, obfuscationOptions);
  fs.writeFileSync(path.join(__dirname, 'app.js'), obfuscatedApp.getObfuscatedCode(), 'utf8');
  console.log('✅ app.js encrypted & obfuscated successfully!');

  console.log('🎉 Done! Website scripts are now fully protected and encrypted.');
} catch (error) {
  console.error('❌ Error during obfuscation:', error);
  process.exit(1);
}

// fix-errors.ts
const { execSync } = require('child_process');
const { resolve } = require('path');
const fs = require('fs');

const rootDir = __dirname;

const run = cmd => {
  try {
    console.log(`🔧 Running: ${cmd}`);
    execSync(cmd, { stdio: 'inherit', cwd: rootDir });
  } catch (error) {
    console.error(`❌ Error running: ${cmd}\n`, error.message);
    process.exit(1);
  }
};

function checkFilesExist() {
  const required = [
    './tsconfig.json',
    './.eslintrc.js',
    './packages/bootstrap/webpack/webpack.base.conf.js',
  ];
  for (const file of required) {
    const fullPath = resolve(rootDir, file);
    if (!fs.existsSync(fullPath)) {
      console.warn(`⚠️ Missing file: ${file}`);
    }
  }
}

function main() {
  console.log('🛠 Auto-fix process started...');
  checkFilesExist();

  // Format code using Prettier
  run('npx prettier "**/*.{ts,tsx}" --write');

  // Auto-fix ESLint issues
  run('npx eslint "**/*.{ts,tsx}" --fix');

  // TypeScript type check
  run('npx tsc --noEmit --project tsconfig.json');

  console.log('✅ Done. Fixes applied.');
}

main();

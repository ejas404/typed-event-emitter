#!/usr/bin/env node

// Simple CLI to copy code files from this repo into a user's project
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const FILES = [
  'src/typed-event-emitter.service.ts',
  'src/typed-event-emitter.module.ts',
  'src/decorators/on-typed-event.decorator.ts',
];

function ask(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) =>
    rl.question(question, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
}

(async () => {
  console.log('nestjs-typed-event-emitter code export CLI 🔥🔥🔥');
  const dest = await ask('Destination folder (default: ./typed-event-emitter): ');
  const destDir = dest && dest.trim() ? dest.trim() : 'typed-event-emitter';
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  for (const file of FILES) {
    const srcPath = path.resolve(__dirname, '..', file);
    const destPath = path.join(destDir, path.basename(file));
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file} -> ${destPath}`);
    } else {
      console.warn(`File not found: ${srcPath}`);
    }
  }
  console.log('Done!');
})();

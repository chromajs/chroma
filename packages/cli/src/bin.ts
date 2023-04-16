#!/usr/bin/env node

import chroma from '@chromajs/compiler';
import { promises as fs } from 'fs';
import path from 'path';

if (process.argv[2] === '-h') {
  console.log(`
      chroma cli :: help

      COMMANDS
    > @chromajs/cli -h                            logs this help menu
    > @chromajs/cli <srcdir> <outdir> <theme>     compiles <srcdir> to <outdir> with <theme>
  `);
  process.exit(0);
}

const srcDir = process.argv[2];
const outDir = process.argv[3];
const theme = process.argv[4];

if (
  typeof srcDir !== 'string' ||
  typeof outDir !== 'string' ||
  (theme !== 'dark' && theme !== 'light' && theme !== 'dim')
) {
  throw new Error('invalid <srcdir>, <outdir>, or <theme> was given');
}

(async () => {
  const files = await fs.readdir(srcDir, 'utf-8');
  const exts = new Set<string>();

  for (const file of files) {
    const ext = path.parse(file).ext;

    if (ext === '.chromarc') {
      const data = await fs.readFile(path.join(srcDir, file), 'utf-8');

      for (const line of data.split(/[\n\r]/)) {
        exts.add(line.trim());
      }
    } else if (exts.size === 0 || exts.has(ext)) {
      const data = await fs.readFile(path.join(srcDir, file), 'utf-8');
      const result = chroma(data, { theme });

      await fs.writeFile(path.join(outDir, file), result);
    }
  }
})();

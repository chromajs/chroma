#!/usr/bin/env node

import { compiler } from '@chromajs/compiler';
import { promises as fs } from 'node:fs';
import { join, parse } from 'node:path';

(async () => {
  const args = process.argv.slice(2);

  if (args[0] === '-h') {
    console.log(`
      chroma cli :: help

      COMMANDS
    > @chromajs/cli -h                            logs this help menu
    > @chromajs/cli <srcdir> <outdir> <theme>     compiles <srcdir> to <outdir> with <theme>
  `);
    return;
  }

  const [srcDir, outDir, theme] = args;

  if (
    typeof srcDir !== 'string' ||
    typeof outDir !== 'string' ||
    !['dark', 'light', 'dim'].includes(theme)
  ) {
    throw new Error('invalid <srcdir>, <outdir>, or <theme> was given');
  }

  const files = await fs.readdir(srcDir, 'utf-8');
  const exts = new Set<string>();
  const copyFiles: string[] = [];

  for (const file of files) {
    const ext = parse(file).ext;

    if (ext === '.chromarc') {
      const data = await fs.readFile(join(srcDir, file), 'utf-8');

      for (const line of data.split(/[\n\r]/)) {
        exts.add(line.trim());
      }
    } else {
      copyFiles.push(file);
    }
  }

  for (const file of files) {
    const ext = parse(file).ext;

    if (exts.size > 0 && !exts.has(ext)) {
      continue;
    }

    const data = await fs.readFile(join(srcDir, file), 'utf-8');
    const result = compiler(data, { theme });

    await fs.writeFile(join(outDir, file), result);
  }

  for (const file of copyFiles) {
    await fs.copyFile(join(srcDir, file), join(outDir, file));
  }
})();

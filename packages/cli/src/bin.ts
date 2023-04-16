#!/usr/bin/env node

import { compiler } from '@chromajs/compiler';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from 'fs';
import { join, parse } from 'path';

const [src, dist, theme] = process.argv.slice(2);

if (src === '-h' || src === '--help') {
  console.log(`
    chroma cli

  > @chromajs/cli -h --help                   displays this help menu
  > @chromajs/cli <srcdir> <outdir> <theme>   compiles <srcdir> to <outdir> with <theme>
  `);
  process.exit(0);
}

const exts = [...JSON.parse(readFileSync('.chromarc.json', 'utf-8')).exts];

if (!existsSync(dist)) {
  mkdirSync(dist);
}

const files = readdirSync(src, { withFileTypes: true }).map(file => file.name);

for (const file of files) {
  const content = readFileSync(join(src, file), 'utf-8');

  if (exts.includes(parse(file).ext)) {
    writeFileSync(join(dist, file), compiler(content, { theme }));
  } else {
    writeFileSync(join(dist, file), content);
  }
}

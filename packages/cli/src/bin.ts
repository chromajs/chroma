#!/usr/bin/env node

import { compiler } from '@chromajs/compiler';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmdirSync,
  writeFileSync,
} from 'fs';
import { join, parse, relative } from 'path';

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

existsSync(dist) ? rmdirSync(dist, { recursive: true }) : null;
mkdirSync(dist);

const processDir = (dir: string) => {
  const files = readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    if (file.isDirectory()) {
      processDir(join(dir, file.name));
    } else {
      const content = readFileSync(join(dir, file.name), 'utf-8');

      if (exts.includes(parse(file.name).ext)) {
        mkdirSync(join(dist, relative(src, dir)), { recursive: true });

        writeFileSync(
          join(join(dist, relative(src, dir)), file.name),
          compiler(content, { theme })
        );
      } else {
        mkdirSync(join(dist, relative(src, dir)), { recursive: true });

        writeFileSync(join(join(dist, relative(src, dir)), file.name), content);
      }
    }
  }
};

processDir(src);

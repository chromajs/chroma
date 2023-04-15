import compile from '@chromajs/compiler';
import path from 'node:path';

export default function chroma(opts: {
  theme: 'light' | 'dark' | 'black',
  exts: string[]
}) {
  return {
    name: 'chroma',

    transform(src: string, id: string) {
      if (opts.exts.includes(path.parse(id).ext)) {
        return {
          code: compile(src, {
            theme: opts.theme
          })
        }
      }
    }
  }
}
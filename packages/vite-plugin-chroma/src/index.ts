import { compiler } from '@chromajs/compiler';
import path from 'node:path';

export function chroma(opts: { theme: string; exts: string[] }) {
  return {
    name: 'chroma',

    transform(src: string, id: string) {
      if (opts.exts.includes(path.parse(id).ext)) {
        return {
          code: compiler(src, {
            theme: opts.theme,
          }),
        };
      }
    },
  };
}

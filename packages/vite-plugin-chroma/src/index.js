import compile from '@chromajs/compiler';
import path from 'node:path';

export default function chroma(opts) {
  return {
    name: 'chroma',

    transform(src, id) {
      if (opts.exts.includes(path.parse(id).ext)) {
        return {
          code: compile(src, {
            theme: opts.theme,
          }),
        };
      }
    },
  };
}

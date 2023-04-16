import parse from './utils/parse';
import clean from './utils/clean';
import style from './utils/style';

export function compiler(raw: string, opts: {
  theme: string | number
}) {
  let theme: number;

  if (opts.theme === 'light') theme = 0;
  if (opts.theme === 'dark') theme = 1;
  if (opts.theme === 'dim') theme = 2;

  [...raw.matchAll(/\(chroma\)(.*)\(\/chroma\)/gims)].forEach(chroma => {
    raw = raw.replace(chroma[0], style(parse(clean(chroma[1])), theme));
  });

  return raw;
}
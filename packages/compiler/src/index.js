import parse from './utils/parse';
import clean from './utils/clean';
import style from './utils/style';

export default function compiler(raw, opts) {
  [...raw.matchAll(/\(chroma\)(.*)\(\/chroma\)/gims)].forEach(chroma => {
    raw = raw.replace(chroma[0], style(parse(clean(chroma[1])), opts.theme));
  });

  return raw;
}

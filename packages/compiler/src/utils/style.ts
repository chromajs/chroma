import inline from 'juice';
import { readFileSync } from 'fs';

export default function style(raw: string, theme: 'light' | 'dark' | 'black') {
  raw = inline(
    `<style>${readFileSync(`./themes/${theme}.min.css`)}</style>${raw}`,
    {
      removeStyleTags: true,
    }
  );

  return raw;
}

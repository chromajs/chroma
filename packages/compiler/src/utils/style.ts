import inline from 'juice';

const styles = [
  '.hljs{display:block;overflow-x:auto;padding:.5em;color:#24292e;background:#fff}.hljs-comment,.hljs-punctuation{color:#6a737d}.hljs-attr,.hljs-attribute,.hljs-meta,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id{color:#005cc5}.hljs-variable,.hljs-literal,.hljs-number,.hljs-doctag{color:#e36209}.hljs-params{color:#24292e}.hljs-function{color:#6f42c1}.hljs-class,.hljs-tag,.hljs-title,.hljs-built_in{color:#22863a}.hljs-keyword,.hljs-type,.hljs-builtin-name,.hljs-meta-keyword,.hljs-template-tag,.hljs-template-variable{color:#d73a49}.hljs-string,.hljs-undefined{color:#032f62}.hljs-regexp{color:#032f62}.hljs-symbol{color:#005cc5}.hljs-bullet{color:#e36209}.hljs-section{color:#005cc5;font-weight:700}.hljs-quote,.hljs-name,.hljs-selector-tag,.hljs-selector-pseudo{color:#22863a}.hljs-emphasis{color:#e36209;font-style:italic}.hljs-strong{color:#e36209;font-weight:700}.hljs-deletion{color:#b31d28;background-color:#ffeef0}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-link{color:#032f62;font-style:underline}',
  '.hljs{display:block;overflow-x:auto;padding:.5em;color:#c9d1d9;background:#0d1117}.hljs-comment,.hljs-punctuation{color:#8b949e}.hljs-attr,.hljs-attribute,.hljs-meta,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id{color:#79c0ff}.hljs-variable,.hljs-literal,.hljs-number,.hljs-doctag{color:#ffa657}.hljs-params{color:#c9d1d9}.hljs-function{color:#d2a8ff}.hljs-class,.hljs-tag,.hljs-title,.hljs-built_in{color:#7ee787}.hljs-keyword,.hljs-type,.hljs-builtin-name,.hljs-meta-keyword,.hljs-template-tag,.hljs-template-variable{color:#ff7b72}.hljs-string,.hljs-undefined{color:#a5d6ff}.hljs-regexp{color:#a5d6ff}.hljs-symbol{color:#79c0ff}.hljs-bullet{color:#ffa657}.hljs-section{color:#79c0ff;font-weight:700}.hljs-quote,.hljs-name,.hljs-selector-tag,.hljs-selector-pseudo{color:#7ee787}.hljs-emphasis{color:#ffa657;font-style:italic}.hljs-strong{color:#ffa657;font-weight:700}.hljs-deletion{color:#ffa198;background-color:#490202}.hljs-addition{color:#7ee787;background-color:#04260f}.hljs-link{color:#a5d6ff;font-style:underline}',
  '.hljs{display:block;overflow-x:auto;padding:.5em;color:#cdd9e5;background:#22272e}.hljs-comment,.hljs-punctuation{color:#768390}.hljs-attr,.hljs-attribute,.hljs-meta,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id{color:#6cb6ff}.hljs-variable,.hljs-literal,.hljs-number,.hljs-doctag{color:#f69d50}.hljs-params{color:#cdd9e5}.hljs-function{color:#dcbdfb}.hljs-class,.hljs-tag,.hljs-title,.hljs-built_in{color:#8ddb8c}.hljs-keyword,.hljs-type,.hljs-builtin-name,.hljs-meta-keyword,.hljs-template-tag,.hljs-template-variable{color:#f47067}.hljs-string,.hljs-undefined{color:#96d0ff}.hljs-regexp{color:#96d0ff}.hljs-symbol{color:#6cb6ff}.hljs-bullet{color:#f69d50}.hljs-section{color:#6cb6ff;font-weight:700}.hljs-quote,.hljs-name,.hljs-selector-tag,.hljs-selector-pseudo{color:#8ddb8c}.hljs-emphasis{color:#f69d50;font-style:italic}.hljs-strong{color:#f69d50;font-weight:700}.hljs-deletion{color:#ff938a;background-color:#78191b}.hljs-addition{color:#8ddb8c;background-color:#113417}.hljs-link{color:#96d0ff;font-style:underline}',
];

export default function style(raw: string, theme: number) {
  raw = inline(`<style>${styles[theme]}</style>${raw}`, {
    removeStyleTags: true,
  });

  return raw;
}

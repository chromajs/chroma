import Markdown from 'markdown-it';
import hljs from 'highlight.js';

const md = new Markdown({
  html: true,
  linkify: true,
  typographer: true,
  highlight: (code, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value;
      } catch (__) {}
    }

    return '';
  },
});

export default function parse(raw: string) {
  return md.render(raw);
}

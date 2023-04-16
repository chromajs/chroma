export default function clean(raw: string) {
  let tabs: number | undefined = 0;

  raw = raw
    .split(/[\n\r]/)
    .map((line, i) => {
      if (i === 0 && line.length > 0) {
        tabs = line.search(/\S|$/);
      } else if (i === 0 && !(line.length > 0)) {
        tabs = undefined;
      }

      if (i === 1 && tabs === undefined) {
        tabs = line.search(/\S|$/);
      }

      return line.slice(tabs);
    })
    .join('\n');

  return raw;
}
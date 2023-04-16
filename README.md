# Chroma

The ridiculously simple library for integrating markdown everywhere. This monorepo contains all the source code for our compiler, CLI tool, & Vite plugin. If you're looking to create a Chroma project, read on.

## Demo

https://user-images.githubusercontent.com/120335722/232350651-dde66478-5d6c-4973-a22f-2b26df1fd47d.mp4

## Installation

To use Chroma, you can either use the Vite plugin or the CLI tool.

### Vite Plugin

First, create a base Vite project:

```shell
npm create vite@latest
pnpm create vite
yarn create vite
```

Then, install `@chromajs/vite-plugin-chroma`:

```shell
npm install @chromajs/vite-plugin-chroma@latest
pnpm add @chromajs/vite-plugin-chroma
yarn add @chromajs/vite-plugin-chroma
```

After that, simply import the plugin to `vite.config.js` in the root directory:

```js
// vite.config.js
import { defineConfig } from 'vite'
import { compiler as chroma } from '@chromajs/vite-plugin-chroma'

export default defineConfig({
  plugins: [
    {
      ...compiler({
        theme: 'light', // light or dark or dim
        exts: [".svelte", ".ts"] // which file types Chroma should parse
      }),
      enforce: 'pre'
    }
  ],
})
```

Make sure you specify a <theme> of either light, dark, or dim (used for syntax highlighting).

### CLI Tool

To use the CLI tool, first write all your code under a directory (e.g. `src`). Then, in the root directory of your project, create a file called `.chromarc.json` and enter the following information:

**File Tree**
```
.chromarc.json
src
-| (your files)
```

**.chromarc.json**
```jsonc
{
  "exts": [".svelte", ".ts"] // which file types Chroma should parse
}
```

Then, run the following command:

```shell
npx @chromajs/cli@latest <srcdir> <outdir> <theme>
pnpm dlx @chromajs/cli <srcdir> <outdir> <theme>
```

Chroma will parse all your files in the `<srcdir>` and will output them in `<outdir>`. Make sure you specify a `<theme>` of either light, dark, or dim (used for syntax highlighting).

import { defineConfig } from 'tsup'

import { dependencies } from './package.json'

export default defineConfig({
  clean: true,
  entry: [
    './src/index.ts',
  ],
  external: Object.keys(dependencies),
  dts: true,
  minify: true,
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: true,
})

import terser from '@rollup/plugin-terser'
import treeShakeable from 'rollup-plugin-tree-shakeable'
import { defineConfig } from 'tsdown/config'

export default defineConfig([
  {
    entry: `src/index.ts`,
    platform: `neutral`,
    sourcemap: `inline`,
    dts: false,
    publint: true,
    minify: false,
    plugins: [
      terser({
        // Assume modern JavaScript
        ecma: 2020,
        module: true,
        toplevel: true,
        // Run multiple times
        compress: {
          passes: 3,
        },
        // Mangle underscore prefixed properties
        mangle: {
          properties: {
            regex: `^_[^_]+`,
          },
        },
      }),
      treeShakeable(),
    ],
  },
  {
    entry: `src/index.ts`,
    dts: { emitDtsOnly: true },
  },
])

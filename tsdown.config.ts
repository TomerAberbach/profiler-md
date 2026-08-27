import terser from '@rollup/plugin-terser'
import treeShakeable from 'rollup-plugin-tree-shakeable'
import { defineConfig } from 'tsdown/config'
import type { UserConfig } from 'tsdown/config'

/**
 * The library bundle's settings, shared by its two platforms.
 *
 * A platform selects the `#compression` implementation in `package.json`'s
 * `imports`: the `node` build decodes with `node:zlib`, and the `neutral` build
 * with `DecompressionStream`.
 */
const library = {
  entry: `src/index.ts`,
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
} satisfies UserConfig

export default defineConfig([
  { ...library, platform: `neutral` },
  { ...library, platform: `node`, outDir: `dist/node` },
  {
    entry: `src/index.ts`,
    dts: { emitDtsOnly: true },
  },
  {
    entry: `src/cli/index.ts`,
    outDir: `dist/cli`,
    platform: `node`,
    dts: false,
    minify: false,
    banner: { js: `#!/usr/bin/env node` },
  },
])

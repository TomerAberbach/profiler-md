import terser from '@rollup/plugin-terser'
import treeShakeable from 'rollup-plugin-tree-shakeable'
import { defineConfig } from 'tsdown/config'
import type { UserConfig } from 'tsdown/config'

const libraryConfig = {
  entry: `src/index.ts`,
  sourcemap: `inline`,
  dts: false,
  publint: true,
  minify: false,
  plugins: [
    terser({
      ecma: 2020,
      module: true,
      toplevel: true,
      compress: {
        passes: 3,
      },
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
  { ...libraryConfig, platform: `neutral` },
  { ...libraryConfig, platform: `node`, outDir: `dist/node` },
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

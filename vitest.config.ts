import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: `jsdom`,
    setupFiles: [`vitest.setup.ts`],
    coverage: {
      include: [`src`],
      exclude: [`src/fixtures`, `src/testing`, `*.bench.ts`],
    },
    testTimeout: 10_000,
  },
})

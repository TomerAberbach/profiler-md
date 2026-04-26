import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: `jsdom`,
    coverage: {
      include: [`src`],
      exclude: [`src/fixtures`, `src/testing`, `*.bench.ts`],
    },
    testTimeout: 20_000,
  },
})

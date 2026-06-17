import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: `jsdom`,
    exclude: [...configDefaults.exclude, `.claude/worktrees/**`],
    coverage: {
      include: [`src`],
      exclude: [`src/fixtures`, `src/testing`, `*.bench.ts`],
    },
    // Generous so end-to-end conversions of the intentionally large fixtures
    // (e.g. the ~70 MB .NET speedscope and multi-MB Julia profiles kept for
    // performance testing) don't flake under load.
    testTimeout: 120_000,
  },
})

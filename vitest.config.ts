import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: `jsdom`,
    exclude: [...configDefaults.exclude, `.claude/worktrees/**`],
    coverage: {
      include: [`src`],
      exclude: [`src/fixtures`, `src/testing`, `*.bench.ts`],
    },
    testTimeout: 40_000,
  },
})

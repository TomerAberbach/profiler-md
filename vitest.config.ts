import { configDefaults, defineConfig } from 'vitest/config'
import { formats } from './src/formats/registry.ts'

// For tests that run over all inputs, each format runs them in its own project
// so the conversions spread across workers instead of serializing in one.
const inputProcessingFiles = [
  `src/formats/index.test.ts`,
  `src/origins/index.test.ts`,
]

export default defineConfig({
  test: {
    environment: `jsdom`,
    exclude: [...configDefaults.exclude, `.claude/worktrees/**`],
    projects: [
      { extends: true, test: { name: `unit` } },
      ...formats.map(format => ({
        extends: true as const,
        test: {
          name: format,
          include: inputProcessingFiles,
          provide: { format },
        },
      })),
    ],
    coverage: {
      include: [`src`],
      exclude: [`**/testing.ts`, `*.bench.ts`],
    },
  },
})

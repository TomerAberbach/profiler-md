import config from '@tomer/eslint-config'

export default [
  ...config,
  // Fixture-generation workload inputs run under foreign runtimes and pull in
  // uninstalled, pinned deps; they aren't part of the published package.
  {
    ignores: [
      `skills/**/*`,
      `.claude/worktrees/**/*`,
      `scripts/fixtures/assets/**/*`,
    ],
  },
]

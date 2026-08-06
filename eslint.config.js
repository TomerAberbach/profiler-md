import config from '@tomer/eslint-config'

export default [
  ...config,
  { ignores: [`skills/**/*`, `.claude/worktrees/**/*`] },
  {
    rules: {
      // The parsing and aggregation hot paths preallocate arrays with
      // `new Array(length)`. `Array.from({ length })`, the replacement this
      // rule suggests, runs the iteration protocol per element.
      'unicorn/no-new-array': `off`,
    },
  },
]

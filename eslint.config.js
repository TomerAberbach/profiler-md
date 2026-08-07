import config from '@tomer/eslint-config'
import { errorMessage } from './eslint-rules/error-message.js'

export default [
  ...config,
  { ignores: [`skills/**/*`, `.claude/worktrees/**/*`] },
  {
    plugins: { local: { rules: { 'error-message': errorMessage } } },
    rules: {
      'local/error-message': `error`,
    },
  },
  {
    rules: {
      // The parsing and aggregation hot paths preallocate arrays with
      // `new Array(length)`. `Array.from({ length })`, the replacement this
      // rule suggests, runs the iteration protocol per element.
      'unicorn/no-new-array': `off`,
    },
  },
]

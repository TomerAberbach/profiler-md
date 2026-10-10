import config from '@tomer/eslint-config'
import { errorMessage } from './eslint-rules/error-message.js'
import { noStandardStreamWrite } from './eslint-rules/no-standard-stream-write.js'

export default [
  ...config,
  { ignores: [`skills/**/*`] },
  {
    plugins: {
      local: {
        rules: {
          'error-message': errorMessage,
          'no-standard-stream-write': noStandardStreamWrite,
        },
      },
    },
    rules: {
      'local/error-message': `error`,
    },
  },
  {
    files: [`src/**/*.ts`],
    ignores: [`src/**/*.test.ts`],
    rules: {
      'local/no-standard-stream-write': `error`,
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

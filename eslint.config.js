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
      // V8 fast-paths spreading a `Map`'s keys or values or a `Set`, which runs
      // 5–12× faster than `Iterator#toArray()`, and spreading before an array
      // method runs about 5× faster than the iterator helper.
      'unicorn/prefer-iterator-to-array': `off`,
      'unicorn/prefer-iterator-helpers': `off`,
      // The project has no DOM. The rule misreads mdast `children` as DOM
      // children.
      'unicorn/better-dom-traversing': `off`,
      // Regexes passed to helpers such as `packedLocationNormalizer` have their
      // named groups read in another function, which the rule cannot see.
      'regexp/no-unused-capturing-group': `off`,
      'import/no-extraneous-dependencies': [
        `error`,
        {
          devDependencies: [
            `test/**`,
            `**/*.{test,spec}.*`,
            `**/testing{,/**}`,
            `**/testing.*`,
            `bench/**`,
            `scripts/**`,
            `*.config.*`,
            `*.setup.*`,
            `src/test-setup.ts`,
            // Only the man page build and its test import it.
            `src/cli/man.ts`,
          ],
        },
      ],
    },
  },
  {
    files: [`**/*.test.ts`],
    rules: {
      'vitest/expect-expect': [
        `error`,
        {
          assertFunctionNames: [
            `expect`,
            `expect*`,
            `expectTypeOf`,
            `assert`,
            `assertType`,
          ],
        },
      ],
    },
  },
  {
    // Workloads and the docs on generating inputs use profiling APIs Node marks
    // experimental, and keep objects on `globalThis` so a heap snapshot
    // retains them.
    files: [`docs/**`, `scripts/inputs/assets/**`],
    rules: {
      'node/no-unsupported-features/node-builtins': `off`,
      'unicorn/no-global-object-property-assignment': `off`,
    },
  },
]

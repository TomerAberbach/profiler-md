# Wall time profile diff

Took 16.89s → 18.29s (+1.398s, +8.3%) over 13,495 samples → 14,612 samples (1.3ms per sample).

| Category    | Change |     Delta |             % |            Time |         Samples |
| ----------- | -----: | --------: | ------------: | --------------: | --------------: |
| third-party | +10.6% |   +1.554s | 86.7% → 88.6% | 14.64s → 16.20s | 11,699 → 12,941 |
| stdlib      |  -7.0% | -157.75ms | 13.3% → 11.4% |   2.24s → 2.09s |   1,796 → 1,670 |
| ours        |    new |   +1.25ms |  0.0% → <0.1% |     0ms → 1.3ms |           0 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in wall time spent directly in the function body, excluding callees.

| Change |   Delta |            % |        Time | Samples | Function           | Location                                                                                                                                     |
| -----: | ------: | -----------: | ----------: | ------: | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +5.01ms | 0.0% → <0.1% | 0ms → 5.0ms |   0 → 4 | `noop`             | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +2.50ms | 0.0% → <0.1% | 0ms → 2.5ms |   0 → 2 | `createProgram`    | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +1.25ms | 0.0% → <0.1% | 0ms → 1.3ms |   0 → 1 | `typeCheckProject` | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs`                                                              |

#### Improvements

Functions with the largest decrease in wall time spent directly in the function body, excluding callees.

|  Change |   Delta |            % |        Time | Samples | Function        | Location                                                                                                 |
| ------: | ------: | -----------: | ----------: | ------: | --------------- | -------------------------------------------------------------------------------------------------------- |
| removed | -3.76ms | <0.1% → 0.0% | 3.8ms → 0ms |   3 → 0 | `createProgram` | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js` |
| removed | -1.25ms | <0.1% → 0.0% | 1.3ms → 0ms |   1 → 0 | `createRequire` | `node:internal/modules/cjs/loader`                                                                       |

### Total time

#### Regressions

Functions with the largest increase in total wall time spent in the function and all its callees.

| Change |    Delta |             % |            Time |         Samples | Function                           | Location                                                                                                                                     |
| -----: | -------: | ------------: | --------------: | --------------: | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +14.188s |  0.0% → 77.6% |    0ms → 14.18s |      0 → 11,333 | `getSemanticDiagnostics`           | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new |  +2.043s |  0.0% → 11.2% |     0ms → 2.04s |       0 → 1,632 | `createProgram`                    | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| +10.7% |  +1.585s | 87.4% → 89.4% | 14.76s → 16.35s | 11,797 → 13,063 | `typeCheckProject`                 | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs`                                                              |
| +10.7% |  +1.585s | 87.4% → 89.4% | 14.76s → 16.35s | 11,797 → 13,063 | `(anonymous)`                      | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs`                                                             |
|    new | +26.29ms |   0.0% → 0.1% |    0ms → 26.3ms |          0 → 21 | `getParsedCommandLineOfConfigFile` | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new |  +5.01ms |  0.0% → <0.1% |     0ms → 5.0ms |           0 → 4 | `noop`                             | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new |  +1.25ms |  0.0% → <0.1% |     0ms → 1.3ms |           0 → 1 | `getSyntacticDiagnostics`          | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new |  +1.25ms |  0.0% → <0.1% |     0ms → 1.3ms |           0 → 1 | `findConfigFile`                   | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

#### Improvements

Functions with the largest decrease in total wall time spent in the function and all its callees.

|  Change |    Delta |            % |             Time |    Samples | Function                           | Location                                                                                                            |
| ------: | -------: | -----------: | ---------------: | ---------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| removed | -12.809s | 75.8% → 0.0% |     12.80s → 0ms | 10,231 → 0 | `getSemanticDiagnostics`           | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js`            |
| removed |  -1.819s | 10.8% → 0.0% |      1.81s → 0ms |  1,453 → 0 | `createProgram`                    | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js`            |
| removed | -27.54ms |  0.2% → 0.0% |     27.5ms → 0ms |     22 → 0 | `getParsedCommandLineOfConfigFile` | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js`            |
|  -13.3% | -15.02ms |  0.7% → 0.5% | 112.7ms → 97.7ms |    90 → 78 | `require`                          | `node:internal/modules/helpers`                                                                                     |
| removed |  -1.25ms | <0.1% → 0.0% |      1.3ms → 0ms |      1 → 0 | `stop`                             | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/@datadog/pprof/out/src/time-profiler.js` |
| removed |  -1.25ms | <0.1% → 0.0% |      1.3ms → 0ms |      1 → 0 | `createRequire`                    | `node:internal/modules/cjs/loader`                                                                                  |
| removed |  -1.25ms | <0.1% → 0.0% |      1.3ms → 0ms |      1 → 0 | `getSyntacticDiagnostics`          | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js`            |

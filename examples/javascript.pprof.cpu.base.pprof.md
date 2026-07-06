# Wall time profile

Took 16.89s over 13,495 samples (1.3ms per sample).

| Category    |     % |   Time | Samples |
| ----------- | ----: | -----: | ------: |
| third-party | 86.7% | 14.64s |  11,699 |
| stdlib      | 13.3% |  2.24s |   1,796 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |  Time | Samples | Function        | Location                                                                                                 |
| ----: | ----: | ------: | --------------- | -------------------------------------------------------------------------------------------------------- |
| <0.1% | 3.8ms |       3 | `createProgram` | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js` |
| <0.1% | 1.3ms |       1 | `createRequire` | `node:internal/modules/cjs/loader`                                                                       |

#### Lines

Lines ranked by contribution to each function's self time.

##### `createProgram` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js`)

|      % |  Time | Samples | Location                                                                                                        |
| -----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------- |
| 100.0% | 3.8ms |       3 | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js:120478` |

##### `createRequire` (`node:internal/modules/cjs/loader`)

|      % |  Time | Samples | Location                                |
| -----: | ----: | ------: | --------------------------------------- |
| 100.0% | 1.3ms |       1 | `node:internal/modules/cjs/loader:1976` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `createProgram` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js`)

|      % |  Time | Samples | Caller             | Location                                                                        |
| -----: | ----: | ------: | ------------------ | ------------------------------------------------------------------------------- |
| 100.0% | 3.8ms |       3 | `typeCheckProject` | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs` |

##### `createRequire` (`node:internal/modules/cjs/loader`)

|      % |  Time | Samples | Caller             | Location                                                                        |
| -----: | ----: | ------: | ------------------ | ------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `typeCheckProject` | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |    Time | Samples | Function                           | Location                                                                                                            |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| 87.4% |  14.76s |  11,797 | `typeCheckProject`                 | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs`                                     |
| 87.4% |  14.76s |  11,797 | `(anonymous)`                      | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs`                                    |
| 75.8% |  12.80s |  10,231 | `getSemanticDiagnostics`           | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js`            |
| 10.8% |   1.81s |   1,453 | `createProgram`                    | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js`            |
|  0.7% | 112.7ms |      90 | `require`                          | `node:internal/modules/helpers`                                                                                     |
|  0.2% |  27.5ms |      22 | `getParsedCommandLineOfConfigFile` | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js`            |
| <0.1% |   1.3ms |       1 | `stop`                             | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/@datadog/pprof/out/src/time-profiler.js` |
| <0.1% |   1.3ms |       1 | `createRequire`                    | `node:internal/modules/cjs/loader`                                                                                  |
| <0.1% |   1.3ms |       1 | `getSyntacticDiagnostics`          | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js`            |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs`)

|     % |    Time | Samples | Callee                             | Location                                                                                                 |
| ----: | ------: | ------: | ---------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 86.7% |  12.80s |  10,230 | `getSemanticDiagnostics`           | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js` |
| 12.3% |   1.81s |   1,453 | `createProgram`                    | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js` |
|  0.8% | 112.7ms |      90 | `require`                          | `node:internal/modules/helpers`                                                                          |
|  0.2% |  27.5ms |      22 | `getParsedCommandLineOfConfigFile` | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `createRequire`                    | `node:internal/modules/cjs/loader`                                                                       |

##### `(anonymous)` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs`)

|      % |   Time | Samples | Callee             | Location                                                                                                            |
| -----: | -----: | ------: | ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 14.76s |  11,796 | `typeCheckProject` | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs`                                     |
|  <0.1% |  1.3ms |       1 | `stop`             | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/@datadog/pprof/out/src/time-profiler.js` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 75.8% |  12.80s |  10,229 | `getSemanticDiagnostics` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs`) ← `(anonymous)` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs`)           |
| 10.8% |   1.81s |   1,453 | `createProgram` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs`) ← `(anonymous)` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs`)                    |
|  0.7% | 111.4ms |      89 | `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs`) ← `(anonymous)` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs`)                                                                                                   |
|  0.2% |  27.5ms |      22 | `getParsedCommandLineOfConfigFile` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs`) ← `(anonymous)` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs`) |
| <0.1% |   1.3ms |       1 | `getSemanticDiagnostics` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs`)                                                                                                              |
| <0.1% |   1.3ms |       1 | `stop` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/@datadog/pprof/out/src/time-profiler.js`) ← `(anonymous)` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs`)                                                                                                                         |
| <0.1% |   1.3ms |       1 | `createRequire` (`node:internal/modules/cjs/loader`) ← `typeCheckProject` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs`) ← `(anonymous)` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs`)                                                                                          |
| <0.1% |   1.3ms |       1 | `getSyntacticDiagnostics` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs`) ← `(anonymous)` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs`)          |
| <0.1% |   1.3ms |       1 | `require` (`node:internal/modules/helpers`) ← `require` ← `typeCheckProject` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs`) ← `(anonymous)` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs`)                                                                                       |

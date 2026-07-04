# CPU profile

Took 2.49s over 2,659 samples (939.9µs per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| third-party       | 87.4% |   2.18s |   2,410 |
| garbage collector |  7.6% | 191.0ms |     156 |
| stdlib            |  4.8% | 119.5ms |      88 |
| regexp            |  0.1% |   2.5ms |       2 |
| ours              |  0.1% |   1.3ms |       1 |
| program           | <0.1% |   0.1ms |       2 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                        | Location                                                                                                         |
| ----: | ------: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
|  7.6% | 191.0ms |     156 | `(garbage collector)`                           | `<unknown>`                                                                                                      |
|  0.4% |  10.1ms |       1 | `post`                                          | node:inspector:118:7                                                                                             |
|  0.1% |   1.3ms |       1 | `typeCheckProject`                              | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33                               |
|  0.1% |   1.3ms |       1 | `createProgram`                                 | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js:120478:25 |
|  0.1% |   1.3ms |       1 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)`     | `<unknown>`                                                                                                      |
| <0.1% |   1.2ms |       1 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+` | `<unknown>`                                                                                                      |
| <0.1% |   0.1ms |       2 | `(program)`                                     | `<unknown>`                                                                                                      |

#### Lines

Lines ranked by contribution to each function's self time.

##### `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)

|      % |  Time | Samples | Location                                                                        |
| -----: | ----: | ------: | ------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:9 |

##### `createProgram` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js:120478:25)

|      % |  Time | Samples | Location                                                                                                      |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js:120581 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `post` (node:inspector:118:7)

|      % |   Time | Samples | Caller        | Location                                                                              |
| -----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 10.1ms |       1 | `(anonymous)` | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15 |

##### `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)

|      % |  Time | Samples | Caller        | Location                                                                        |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs |

##### `createProgram` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js:120478:25)

|      % |  Time | Samples | Caller             | Location                                                                           |
| -----: | ----: | ------: | ------------------ | ---------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `typeCheckProject` | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33 |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                                        | Location                                                                                                         |
| ----: | ------: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 90.9% |   2.27s |   2,459 | `(anonymous)`                                   | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs                                  |
| 90.5% |   2.26s |   2,458 | `typeCheckProject`                              | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33                               |
| 70.9% |   1.77s |   2,003 | `getSemanticDiagnostics`                        | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js:121549:36 |
| 15.0% | 374.2ms |     362 | `createProgram`                                 | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js:120478:25 |
|  7.6% | 191.0ms |     156 | `(garbage collector)`                           | `<unknown>`                                                                                                      |
|  4.2% | 104.0ms |      83 | `require`                                       | node:internal/modules/helpers:146:19                                                                             |
|  0.4% |  11.2ms |       9 | `getParsedCommandLineOfConfigFile`              | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js:36594:44  |
|  0.4% |  10.1ms |       1 | `post`                                          | node:inspector:118:7                                                                                             |
|  0.4% |  10.1ms |       1 | `(anonymous)`                                   | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15                            |
|  0.4% |  10.1ms |       1 | `post`                                          | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14                            |
|  0.1% |   1.3ms |       1 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)`     | `<unknown>`                                                                                                      |
| <0.1% |   1.2ms |       1 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+` | `<unknown>`                                                                                                      |
| <0.1% |   0.1ms |       2 | `(program)`                                     | `<unknown>`                                                                                                      |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `(anonymous)` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs)

|     % |   Time | Samples | Callee             | Location                                                                              |
| ----: | -----: | ------: | ------------------ | ------------------------------------------------------------------------------------- |
| 99.6% |  2.26s |   2,458 | `typeCheckProject` | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33    |
|  0.4% | 10.1ms |       1 | `post`             | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14 |

##### `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)

|     % |    Time | Samples | Callee                             | Location                                                                                                         |
| ----: | ------: | ------: | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 78.3% |   1.77s |   2,003 | `getSemanticDiagnostics`           | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js:121549:36 |
| 16.5% | 374.2ms |     362 | `createProgram`                    | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js:120478:25 |
|  4.6% | 104.0ms |      83 | `require`                          | node:internal/modules/helpers:146:19                                                                             |
|  0.5% |  11.2ms |       9 | `getParsedCommandLineOfConfigFile` | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js:36594:44  |

##### `(anonymous)` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15)

|      % |   Time | Samples | Callee | Location             |
| -----: | -----: | ------: | ------ | -------------------- |
| 100.0% | 10.1ms |       1 | `post` | node:inspector:118:7 |

##### `post` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14)

|      % |   Time | Samples | Callee        | Location                                                                              |
| -----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 10.1ms |       1 | `(anonymous)` | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15 |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(anonymous)` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                     |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 70.9% |   1.77s |   2,003 | `getSemanticDiagnostics` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js:121549:36) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                          |
| 14.9% | 371.7ms |     360 | `createProgram` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js:120478:25) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                   |
|  4.1% | 102.8ms |      82 | `require` (node:internal/modules/helpers:146:19) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                     |
|  0.4% |  11.2ms |       9 | `getParsedCommandLineOfConfigFile` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js:36594:44) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                 |
|  0.4% |  10.1ms |       1 | `post` (node:inspector:118:7) ← `(anonymous)` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15) ← `post` (15:14)                                                                                                                                         |
|  0.1% |   1.3ms |       1 | `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                        |
|  0.1% |   1.3ms |       1 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)` ← `createProgram` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js:120478:25) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)     |
| <0.1% |   1.2ms |       1 | `require` (node:internal/modules/helpers:146:19) ← `require` (146:19) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                |
| <0.1% |   1.2ms |       1 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+` ← `createProgram` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/typescript/lib/typescript.js:120478:25) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |

# CPU profile

Took 2.69s over 3,134 samples (858.4µs per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| third-party       | 88.6% |   2.38s |   2,890 |
| garbage collector |  6.6% | 177.0ms |     144 |
| stdlib            |  4.7% | 125.5ms |      94 |
| regexp            |  0.1% |   3.3ms |       3 |
| program           | <0.1% |  42.0µs |       3 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                    | Location                                                                                                                                             |
| ----: | ------: | ------: | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
|  6.6% | 177.0ms |     144 | `(garbage collector)`                       | `<unknown>`                                                                                                                                          |
|  0.4% |   9.8ms |       1 | `post`                                      | node:inspector:118:7                                                                                                                                 |
|  0.1% |   3.3ms |       3 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)` | `<unknown>`                                                                                                                                          |
| <0.1% |   1.3ms |       1 | `createProgram`                             | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27 |
| <0.1% |  42.0µs |       3 | `(program)`                                 | `<unknown>`                                                                                                                                          |

#### Lines

Lines ranked by contribution to each function's self time.

##### `createProgram` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27)

|      % |  Time | Samples | Location                                                                                                                                          |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114042 |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `post` (node:inspector:118:7)

|      % |  Time | Samples | Caller        | Location                                                                              |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 9.8ms |       1 | `(anonymous)` | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15 |

##### `createProgram` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27)

|      % |  Time | Samples | Caller             | Location                                                                           |
| -----: | ----: | ------: | ------------------ | ---------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `typeCheckProject` | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33 |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                                    | Location                                                                                                                                             |
| ----: | ------: | ------: | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 91.7% |   2.46s |   2,935 | `(anonymous)`                               | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs                                                                      |
| 91.3% |   2.45s |   2,933 | `typeCheckProject`                          | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33                                                                   |
| 73.2% |   1.96s |   2,479 | `getSemanticDiagnostics`                    | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40 |
| 14.0% | 377.8ms |     366 | `createProgram`                             | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27 |
|  6.6% | 177.0ms |     144 | `(garbage collector)`                       | `<unknown>`                                                                                                                                          |
|  3.7% | 100.3ms |      80 | `require`                                   | node:internal/modules/helpers:146:19                                                                                                                 |
|  0.4% |  11.3ms |       9 | `getParsedCommandLineOfConfigFile`          | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46  |
|  0.4% |  10.3ms |       2 | `post`                                      | node:inspector:118:7                                                                                                                                 |
|  0.4% |  10.3ms |       2 | `(anonymous)`                               | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15                                                                |
|  0.4% |  10.3ms |       2 | `post`                                      | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14                                                                |
|  0.1% |   3.3ms |       3 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)` | `<unknown>`                                                                                                                                          |
| <0.1% |  42.0µs |       3 | `(program)`                                 | `<unknown>`                                                                                                                                          |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs)

|     % |   Time | Samples | Callee             | Location                                                                              |
| ----: | -----: | ------: | ------------------ | ------------------------------------------------------------------------------------- |
| 99.6% |  2.45s |   2,933 | `typeCheckProject` | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33    |
|  0.4% | 10.3ms |       2 | `post`             | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14 |

##### `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)

|     % |    Time | Samples | Callee                             | Location                                                                                                                                             |
| ----: | ------: | ------: | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 80.1% |   1.96s |   2,478 | `getSemanticDiagnostics`           | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40 |
| 15.4% | 377.8ms |     366 | `createProgram`                    | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27 |
|  4.1% | 100.3ms |      80 | `require`                          | node:internal/modules/helpers:146:19                                                                                                                 |
|  0.5% |  11.3ms |       9 | `getParsedCommandLineOfConfigFile` | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46  |

##### `(anonymous)` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15)

|      % |   Time | Samples | Callee | Location             |
| -----: | -----: | ------: | ------ | -------------------- |
| 100.0% | 10.3ms |       2 | `post` | node:inspector:118:7 |

##### `post` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14)

|      % |   Time | Samples | Callee        | Location                                                                              |
| -----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 10.3ms |       2 | `(anonymous)` | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15 |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(anonymous)` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                              |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 73.1% |   1.96s |   2,477 | `getSemanticDiagnostics` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                               |
| 14.0% | 375.8ms |     364 | `createProgram` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                        |
|  3.6% |  97.8ms |      78 | `require` (node:internal/modules/helpers:146:19) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                              |
|  0.4% |  11.3ms |       9 | `getParsedCommandLineOfConfigFile` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                      |
|  0.4% |  10.3ms |       2 | `post` (node:inspector:118:7) ← `(anonymous)` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15) ← `post` (15:14)                                                                                                                                                                                  |
|  0.1% |   2.5ms |       2 | `require` (node:internal/modules/helpers:146:19) ← `require` (146:19) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                         |
|  0.1% |   2.0ms |       2 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)` ← `createProgram` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)          |
| <0.1% |   1.3ms |       1 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)` ← `getSemanticDiagnostics` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |

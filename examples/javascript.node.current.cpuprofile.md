# CPU profile

Took 2.69s over 3,134 samples (858.4µs per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| third-party       | 88.6% |   2.38s |   2,890 |
| garbage collector |  6.6% | 177.0ms |     144 |
| stdlib            |  4.7% | 125.5ms |      94 |
| regexp            |  0.1% |   3.3ms |       3 |
| program           |  0.0% |     0ms |       3 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                                 | Location                                                                                                                                                               |
| ---: | ------: | ------: | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.6% | 177.0ms |     144 | `(garbage collector)`                    | `<unknown>`                                                                                                                                                            |
| 0.4% |   9.8ms |       1 | `post`                                   | node:inspector:118:7                                                                                                                                                   |
| 0.1% |   3.3ms |       3 | `RegExp: (?:\/\/)|(?:^|\/)\.\.?(?:$|\/)` | `<unknown>`                                                                                                                                                            |
| 0.0% |   1.3ms |       1 | `createProgram`                          | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27 |
| 0.0% |     0ms |       3 | `(program)`                              | `<unknown>`                                                                                                                                                            |

#### Lines

Lines ranked by contribution to each function's self time.

##### `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27)

|      % |  Time | Samples | Location                                                                                                                                                            |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114042 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `post` (node:inspector:118:7)

|      % |  Time | Samples | Caller        | Location                                                                                                |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 9.8ms |       1 | `(anonymous)` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15 |

##### `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27)

|      % |  Time | Samples | Caller             | Location                                                                                             |
| -----: | ----: | ------: | ------------------ | ---------------------------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `typeCheckProject` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33 |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                                 | Location                                                                                                                                                               |
| ----: | ------: | ------: | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 91.7% |   2.46s |   2,935 | `(anonymous)`                            | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs                                                                      |
| 91.3% |   2.45s |   2,933 | `typeCheckProject`                       | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33                                                                   |
| 14.0% | 377.8ms |     366 | `createProgram`                          | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27 |
|  6.6% | 177.0ms |     144 | `(garbage collector)`                    | `<unknown>`                                                                                                                                                            |
|  0.4% |  10.3ms |       2 | `post`                                   | node:inspector:118:7                                                                                                                                                   |
|  0.4% |  10.3ms |       2 | `(anonymous)`                            | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15                                                                |
|  0.4% |  10.3ms |       2 | `post`                                   | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14                                                                |
|  0.1% |   3.3ms |       3 | `RegExp: (?:\/\/)|(?:^|\/)\.\.?(?:$|\/)` | `<unknown>`                                                                                                                                                            |
|  0.0% |     0ms |       3 | `(program)`                              | `<unknown>`                                                                                                                                                            |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `(anonymous)` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs)

|     % |   Time | Samples | Callee             | Location                                                                                                |
| ----: | -----: | ------: | ------------------ | ------------------------------------------------------------------------------------------------------- |
| 99.6% |  2.45s |   2,933 | `typeCheckProject` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33    |
|  0.4% | 10.3ms |       2 | `post`             | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14 |

##### `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)

|     % |    Time | Samples | Callee          | Location                                                                                                                                                               |
| ----: | ------: | ------: | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15.4% | 377.8ms |     366 | `createProgram` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27 |

##### `(anonymous)` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15)

|      % |   Time | Samples | Callee | Location             |
| -----: | -----: | ------: | ------ | -------------------- |
| 100.0% | 10.3ms |       2 | `post` | node:inspector:118:7 |

##### `post` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14)

|      % |   Time | Samples | Callee        | Location                                                                                                |
| -----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 10.3ms |       2 | `(anonymous)` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15 |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(anonymous)` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                           |
| ---: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.7% | 71.5ms |      57 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                            |
| 0.5% | 13.9ms |      11 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                            |
| 0.5% | 13.7ms |      11 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                            |
| 0.4% |  9.8ms |       1 | `post` (node:inspector:118:7) ← `(anonymous)` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15) ← `post` (15:14)                                                                                                                                             |
| 0.3% |  8.7ms |       7 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                            |
| 0.3% |  7.1ms |       7 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                            |
| 0.2% |  6.3ms |       5 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                            |
| 0.2% |  6.1ms |       5 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                            |
| 0.2% |  5.0ms |       4 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                            |
| 0.1% |  3.9ms |       3 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                            |
| 0.1% |  3.8ms |       3 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                            |
| 0.1% |  3.8ms |       3 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                            |
| 0.1% |  3.8ms |       3 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                            |
| 0.1% |  3.8ms |       3 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                            |
| 0.1% |  3.8ms |       3 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
| 0.1% |  3.8ms |       3 | `createProgram` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33) |
| 0.1% |  3.8ms |       3 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                            |
| 0.1% |  3.8ms |       3 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                            |
| 0.1% |  3.7ms |       3 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                            |
| 0.1% |  3.7ms |       3 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33)                                                                                                                                                                                            |

# Heap profile

Allocated 972 MB over 1,419 samples (685 kB per sample).

| Category    |     % |    Size | Samples |
| ----------- | ----: | ------: | ------: |
| third-party | 76.8% |  747 MB |   1,103 |
| stdlib      | 23.0% |  223 MB |     315 |
| external    |  0.2% | 2.07 MB |       1 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|    % |    Size | Samples | Function        | Location                                                                                                                 |
| ---: | ------: | ------: | --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 0.2% | 2.07 MB |       1 | `(external)`    | `<unknown>`                                                                                                              |
| 0.1% |  524 kB |       1 | `createProgram` | ../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js |

#### Lines

Lines ranked by contribution to each function's self size.

##### `(external)` (`<unknown>`)

|      % |    Size | Samples | Location |
| -----: | ------: | ------: | -------- |
| 100.0% | 2.07 MB |       1 | 0        |

##### `createProgram` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js)

|      % |   Size | Samples | Location                                                                                                                        |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 524 kB |       1 | ../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js:120478 |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `createProgram` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js)

|      % |   Size | Samples | Caller             | Location                                                                                        |
| -----: | -----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% | 524 kB |       1 | `typeCheckProject` | ../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function              | Location                                                                                                                 |
| ----: | ------: | ------: | --------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 77.9% |  758 MB |   1,056 | `typeCheckProject`    | ../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs                          |
| 77.5% |  753 MB |   1,046 | `(anonymous:L#1:C#1)` | ../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs                    |
| 29.1% |  283 MB |     376 | `createProgram`       | ../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js |
|  0.2% | 2.07 MB |       1 | `(external)`          | `<unknown>`                                                                                                              |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)

|     % |   Size | Samples | Callee          | Location                                                                                                                 |
| ----: | -----: | ------: | --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 36.9% | 280 MB |     371 | `createProgram` | ../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js |

##### `(anonymous:L#1:C#1)` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs)

|     % |   Size | Samples | Callee             | Location                                                                                        |
| ----: | -----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------- |
| 99.8% | 752 MB |   1,045 | `typeCheckProject` | ../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `(anonymous:L#1:C#1)` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs)

|    % |    Size | Samples | Call stack                                                                                                                                                                                                                                                        |
| ---: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.3% | 13.1 MB |       2 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)                                                                                                                                              |
| 1.2% | 11.8 MB |       3 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)                                                                                                                                              |
| 1.0% | 9.46 MB |       2 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.9% | 9.14 MB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.7% | 6.82 MB |       1 | `createProgram` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.7% | 6.82 MB |       1 | `createProgram` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.7% | 6.82 MB |       1 | `createProgram` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.6% | 5.51 MB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.5% | 5.28 MB |       1 | `createProgram` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.5% | 5.28 MB |       1 | `createProgram` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.5% | 5.24 MB |      10 | `createProgram` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.5% | 4.73 MB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.5% | 4.72 MB |       2 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.5% | 4.72 MB |       2 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.5% | 4.72 MB |       3 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.5% | 4.72 MB |       1 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.4% | 4.19 MB |       3 | `createProgram` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |
| 0.4% | 3.67 MB |       2 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.4% | 3.67 MB |       2 | `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)                                                                                                                                              |
| 0.3% | 3.15 MB |       1 | `createProgram` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (../../../../../../private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) |

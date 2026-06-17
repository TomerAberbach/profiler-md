# Heap profile

Allocated 972 MB over 1,419 samples (685 kB per sample).

| Category    |     % |   Size | Samples |
| ----------- | ----: | -----: | ------: |
| third-party | 76.8% | 747 MB |   1,103 |
| stdlib      | 23.2% | 226 MB |     316 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|    % |   Size | Samples | Function        | Location                                                                                               |
| ---: | -----: | ------: | --------------- | ------------------------------------------------------------------------------------------------------ |
| 0.1% | 524 kB |       1 | `createProgram` | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js |

#### Lines

Lines ranked by contribution to each function's self size.

##### `createProgram` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js)

|      % |   Size | Samples | Location                                                                                                      |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------- |
| 100.0% | 524 kB |       1 | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js:120478 |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `createProgram` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js)

|      % |   Size | Samples | Caller             | Location                                                                      |
| -----: | -----: | ------: | ------------------ | ----------------------------------------------------------------------------- |
| 100.0% | 524 kB |       1 | `typeCheckProject` | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                           | Location                                                                                                          |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 77.9% |  758 MB |   1,056 | `typeCheckProject`                 | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs                                     |
| 77.5% |  753 MB |   1,046 | `(anonymous:L#1:C#1)`              | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs                               |
| 48.4% |  470 MB |     687 | `getSemanticDiagnostics`           | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js            |
| 29.1% |  283 MB |     376 | `createProgram`                    | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js            |
|  1.4% | 13.9 MB |      10 | `require`                          | node:internal/modules/helpers                                                                                     |
|  0.2% | 1.53 MB |       1 | `profile`                          | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/@datadog/pprof/out/src/heap-profiler.js |
|  0.1% |  527 kB |       1 | `getParsedCommandLineOfConfigFile` | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js            |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `typeCheckProject` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)

|     % |    Size | Samples | Callee                             | Location                                                                                               |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 61.2% |  464 MB |     674 | `getSemanticDiagnostics`           | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js |
| 36.9% |  280 MB |     371 | `createProgram`                    | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js |
|  1.8% | 13.9 MB |      10 | `require`                          | node:internal/modules/helpers                                                                          |
|  0.1% |  527 kB |       1 | `getParsedCommandLineOfConfigFile` | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js |

##### `(anonymous:L#1:C#1)` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs)

|     % |    Size | Samples | Callee             | Location                                                                                                          |
| ----: | ------: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 99.8% |  752 MB |   1,045 | `typeCheckProject` | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs                                     |
|  0.2% | 1.53 MB |       1 | `profile`          | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/@datadog/pprof/out/src/heap-profiler.js |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                     |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 47.1% |  458 MB |     664 | `getSemanticDiagnostics` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) ← `(anonymous:L#1:C#1)` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs)           |
| 28.7% |  279 MB |     370 | `createProgram` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) ← `(anonymous:L#1:C#1)` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs)                    |
|  1.4% | 13.9 MB |      10 | `require` (node:internal/modules/helpers) ← `typeCheckProject` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) ← `(anonymous:L#1:C#1)` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs)                                                                                                   |
|  0.5% | 5.24 MB |      10 | `getSemanticDiagnostics` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)                                                                                                                         |
|  0.2% | 1.53 MB |       1 | `profile` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/@datadog/pprof/out/src/heap-profiler.js) ← `(anonymous:L#1:C#1)` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs)                                                                                                                    |
|  0.1% |  527 kB |       1 | `getParsedCommandLineOfConfigFile` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) ← `(anonymous:L#1:C#1)` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs) |
|  0.1% |  524 kB |       1 | `createProgram` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)                                                                                                                                  |

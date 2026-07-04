# Heap profile

Allocated 768 MB over 7,784,774 samples (98.6 B per sample).

| Category    |     % |   Size |   Samples |
| ----------- | ----: | -----: | --------: |
| third-party | 78.8% | 605 MB | 6,943,710 |
| stdlib      | 21.2% | 162 MB |   841,064 |

## Hottest functions

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size |   Samples | Function                           | Location                                                                                                          |
| ----: | ------: | --------: | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 77.5% |  595 MB | 5,868,039 | `typeCheckProject`                 | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs                                     |
| 77.0% |  591 MB | 5,802,917 | `(anonymous)`                      | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs:1:1                           |
| 47.5% |  365 MB | 3,593,223 | `getSemanticDiagnostics`           | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js            |
| 29.2% |  224 MB | 2,243,751 | `createProgram`                    | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js            |
|  2.0% | 15.6 MB |    88,994 | `require`                          | node:internal/modules/helpers                                                                                     |
|  0.2% | 1.53 MB |         1 | `profile`                          | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/@datadog/pprof/out/src/heap-profiler.js |
|  0.1% |  524 kB |    16,385 | `getParsedCommandLineOfConfigFile` | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js            |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `typeCheckProject` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)

|     % |    Size |   Samples | Callee                             | Location                                                                                               |
| ----: | ------: | --------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 59.8% |  356 MB | 3,529,104 | `getSemanticDiagnostics`           | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js |
| 37.5% |  223 MB | 2,233,556 | `createProgram`                    | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js |
|  2.6% | 15.6 MB |    88,994 | `require`                          | node:internal/modules/helpers                                                                          |
|  0.1% |  524 kB |    16,385 | `getParsedCommandLineOfConfigFile` | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js |

##### `(anonymous)` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs:1:1)

|     % |    Size |   Samples | Callee             | Location                                                                                                          |
| ----: | ------: | --------: | ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 99.7% |  590 MB | 5,802,916 | `typeCheckProject` | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs                                     |
|  0.3% | 1.53 MB |         1 | `profile`          | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/@datadog/pprof/out/src/heap-profiler.js |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |    Size |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 45.7% |  351 MB | 3,463,981 | `getSemanticDiagnostics` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) ← `(anonymous)` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs:1:1)           |
| 29.0% |  223 MB | 2,233,556 | `createProgram` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) ← `(anonymous)` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs:1:1)                    |
|  2.0% | 15.6 MB |    88,994 | `require` (node:internal/modules/helpers) ← `typeCheckProject` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) ← `(anonymous)` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs:1:1)                                                                                                   |
|  0.7% | 5.25 MB |    65,123 | `getSemanticDiagnostics` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)                                                                                                                     |
|  0.2% | 1.53 MB |         1 | `profile` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/@datadog/pprof/out/src/heap-profiler.js) ← `(anonymous)` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs:1:1)                                                                                                                    |
|  0.1% |  524 kB |    16,385 | `getParsedCommandLineOfConfigFile` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) ← `(anonymous)` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs:1:1) |

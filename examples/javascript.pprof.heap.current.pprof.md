# Heap profile

Allocated 768 MB over 1,102 samples (697 kB per sample).

| Category    |     % |   Size | Samples |
| ----------- | ----: | -----: | ------: |
| third-party | 78.8% | 605 MB |     882 |
| stdlib      | 21.2% | 162 MB |     220 |

## Hottest functions

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                           | Location                                                                                                          |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 77.5% |  595 MB |     830 | `typeCheckProject`                 | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs                                     |
| 77.0% |  591 MB |     821 | `(anonymous:L#1:C#1)`              | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs                               |
| 47.5% |  365 MB |     526 | `getSemanticDiagnostics`           | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js            |
| 29.2% |  224 MB |     307 | `createProgram`                    | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js            |
|  2.0% | 15.6 MB |      12 | `require`                          | node:internal/modules/helpers                                                                                     |
|  0.2% | 1.53 MB |       1 | `profile`                          | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/@datadog/pprof/out/src/heap-profiler.js |
|  0.1% |  524 kB |       1 | `getParsedCommandLineOfConfigFile` | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js            |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `typeCheckProject` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)

|     % |    Size | Samples | Callee                             | Location                                                                                               |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 59.8% |  356 MB |     512 | `getSemanticDiagnostics`           | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js |
| 37.5% |  223 MB |     305 | `createProgram`                    | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js |
|  2.6% | 15.6 MB |      12 | `require`                          | node:internal/modules/helpers                                                                          |
|  0.1% |  524 kB |       1 | `getParsedCommandLineOfConfigFile` | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js |

##### `(anonymous:L#1:C#1)` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs)

|     % |    Size | Samples | Callee             | Location                                                                                                          |
| ----: | ------: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 99.7% |  590 MB |     820 | `typeCheckProject` | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs                                     |
|  0.3% | 1.53 MB |       1 | `profile`          | private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/@datadog/pprof/out/src/heap-profiler.js |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                     |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 45.7% |  351 MB |     502 | `getSemanticDiagnostics` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) ← `(anonymous:L#1:C#1)` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs)           |
| 29.0% |  223 MB |     305 | `createProgram` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) ← `(anonymous:L#1:C#1)` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs)                    |
|  2.0% | 15.6 MB |      12 | `require` (node:internal/modules/helpers) ← `typeCheckProject` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) ← `(anonymous:L#1:C#1)` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs)                                                                                                   |
|  0.7% | 5.25 MB |      10 | `getSemanticDiagnostics` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs)                                                                                                                         |
|  0.2% | 1.53 MB |       1 | `profile` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/@datadog/pprof/out/src/heap-profiler.js) ← `(anonymous:L#1:C#1)` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs)                                                                                                                    |
|  0.1% |  524 kB |       1 | `getParsedCommandLineOfConfigFile` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/tsc-workload.mjs) ← `(anonymous:L#1:C#1)` (private/tmp/nix-shell.s3uqql/profiler-md-fixtures.pYM2jp/zod/datadog-pprof-heap.mjs) |

# Wall time profile

Took 18.29s over 14,612 samples (1.3ms per sample).

| Category    |     % |   Time | Samples |
| ----------- | ----: | -----: | ------: |
| third-party | 88.6% | 16.20s |  12,941 |
| stdlib      | 11.4% |  2.09s |   1,670 |
| ours        | <0.1% |  1.3ms |       1 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |  Time | Samples | Function           | Location                                                                                                                                   |
| ----: | ----: | ------: | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| <0.1% | 5.0ms |       4 | `noop`             | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |
| <0.1% | 2.5ms |       2 | `createProgram`    | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |
| <0.1% | 1.3ms |       1 | `typeCheckProject` | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs                                                              |

#### Lines

Lines ranked by contribution to each function's self time.

##### `noop` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js)

|      % |  Time | Samples | Location                                                                                                                                        |
| -----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 5.0ms |       4 | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1705 |

##### `createProgram` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js)

|      % |  Time | Samples | Location                                                                                                                                          |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.5ms |       2 | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744 |

##### `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)

|      % |  Time | Samples | Location                                                                        |
| -----: | ----: | ------: | ------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `noop` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js)

|     % |  Time | Samples | Caller             | Location                                                                      |
| ----: | ----: | ------: | ------------------ | ----------------------------------------------------------------------------- |
| 25.0% | 1.3ms |       1 | `typeCheckProject` | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs |

##### `createProgram` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js)

|      % |  Time | Samples | Caller             | Location                                                                      |
| -----: | ----: | ------: | ------------------ | ----------------------------------------------------------------------------- |
| 100.0% | 2.5ms |       2 | `typeCheckProject` | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs |

##### `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)

|      % |  Time | Samples | Caller        | Location                                                                       |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------ |
| 100.0% | 1.3ms |       1 | `(anonymous)` | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |   Time | Samples | Function                           | Location                                                                                                                                   |
| ----: | -----: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 89.4% | 16.35s |  13,063 | `typeCheckProject`                 | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs                                                              |
| 89.4% | 16.35s |  13,063 | `(anonymous)`                      | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs                                                             |
| 77.6% | 14.18s |  11,333 | `getSemanticDiagnostics`           | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |
| 11.2% |  2.04s |   1,632 | `createProgram`                    | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |
|  0.5% | 97.7ms |      78 | `require`                          | node:internal/modules/helpers                                                                                                              |
|  0.1% | 26.3ms |      21 | `getParsedCommandLineOfConfigFile` | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |
| <0.1% |  5.0ms |       4 | `noop`                             | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |
| <0.1% |  1.3ms |       1 | `getSyntacticDiagnostics`          | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |
| <0.1% |  1.3ms |       1 | `findConfigFile`                   | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)

|     % |   Time | Samples | Callee                             | Location                                                                                                                                   |
| ----: | -----: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 86.7% | 14.18s |  11,328 | `getSemanticDiagnostics`           | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |
| 12.5% |  2.04s |   1,632 | `createProgram`                    | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |
|  0.6% | 97.7ms |      78 | `require`                          | node:internal/modules/helpers                                                                                                              |
|  0.2% | 26.3ms |      21 | `getParsedCommandLineOfConfigFile` | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |
| <0.1% |  1.3ms |       1 | `getSyntacticDiagnostics`          | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js |

##### `(anonymous)` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs)

|      % |   Time | Samples | Callee             | Location                                                                      |
| -----: | -----: | ------: | ------------------ | ----------------------------------------------------------------------------- |
| 100.0% | 16.35s |  13,063 | `typeCheckProject` | private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `(anonymous)` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/datadog-pprof.mjs)

|     % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                           |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 77.5% | 14.18s |  11,328 | `getSemanticDiagnostics` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)           |
| 11.1% |  2.03s |   1,629 | `createProgram` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                    |
|  0.5% | 96.4ms |      77 | `require` (node:internal/modules/helpers) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                       |
|  0.1% | 26.3ms |      21 | `getParsedCommandLineOfConfigFile` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs) |
| <0.1% |  3.8ms |       3 | `noop` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js) ← `createProgram` ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)           |
| <0.1% |  1.3ms |       1 | `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                                                                                   |
| <0.1% |  1.3ms |       1 | `getSyntacticDiagnostics` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)          |
| <0.1% |  1.3ms |       1 | `noop` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                             |
| <0.1% |  1.3ms |       1 | `findConfigFile` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js) ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                   |
| <0.1% |  1.3ms |       1 | `require` (node:internal/modules/helpers) ← `require` ← `typeCheckProject` (private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs)                                                                                                                           |

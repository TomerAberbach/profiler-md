# CPU profile

Took 2.31s over 3,159 samples (734.2µs per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| Third-party       | 87.1% |   2.02s |   2,930 |
| Garbage collector |  5.8% | 134.3ms |     110 |
| Standard library  |  4.2% |  98.4ms |      59 |
| Native            |  2.7% |  63.1ms |      58 |
| Unknown           |  0.1% |   2.5ms |       2 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function              | Location                                                                                                                                                |
| ---: | ------: | ------: | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.8% | 134.3ms |     110 | `(garbage collector)` | `<unknown>`                                                                                                                                             |
| 1.2% |  28.1ms |       1 | `post`                | `ext:deno_node/inspector.js:179:7`                                                                                                                      |
| 0.1% |   1.2ms |       1 | `createProgram`       | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `createProgram` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`)

|      % |  Time | Samples | Location                                                                                                                                             |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.2ms |       1 | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113864` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `post` (`ext:deno_node/inspector.js:179:7`)

|      % |   Time | Samples | Caller        | Location                   |
| -----: | -----: | ------: | ------------- | -------------------------- |
| 100.0% | 28.1ms |       1 | `(anonymous)` | `cpuprofile-run.mjs:16:15` |

##### `createProgram` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`)

|      % |  Time | Samples | Caller             | Location                |
| -----: | ----: | ------: | ------------------ | ----------------------- |
| 100.0% | 1.2ms |       1 | `typeCheckProject` | `tsc-workload.mjs:3:33` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                           | Location                                                                                                                                                |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 91.2% |   2.11s |   2,927 | `(anonymous)`                      | `cpuprofile-run.mjs`                                                                                                                                    |
| 90.0% |   2.08s |   2,925 | `typeCheckProject`                 | `tsc-workload.mjs:3:33`                                                                                                                                 |
| 70.9% |   1.64s |   2,439 | `getSemanticDiagnostics`           | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 16.8% | 390.5ms |     444 | `createProgram`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  5.8% | 134.3ms |     110 | `(garbage collector)`              | `<unknown>`                                                                                                                                             |
|  1.8% |  41.7ms |      33 | `require`                          | `node:module:1752:35`                                                                                                                                   |
|  1.2% |  28.9ms |       2 | `post`                             | `ext:deno_node/inspector.js:179:7`                                                                                                                      |
|  1.2% |  28.9ms |       2 | `(anonymous)`                      | `cpuprofile-run.mjs:16:15`                                                                                                                              |
|  1.2% |  28.9ms |       2 | `post`                             | `cpuprofile-run.mjs:15:14`                                                                                                                              |
|  0.4% |  10.0ms |       9 | `getParsedCommandLineOfConfigFile` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`cpuprofile-run.mjs`)

|     % |   Time | Samples | Callee             | Location                   |
| ----: | -----: | ------: | ------------------ | -------------------------- |
| 98.6% |  2.08s |   2,925 | `typeCheckProject` | `tsc-workload.mjs:3:33`    |
|  1.4% | 28.9ms |       2 | `post`             | `cpuprofile-run.mjs:15:14` |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                                                                                                                |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 78.8% |   1.64s |   2,439 | `getSemanticDiagnostics`           | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 18.7% | 390.5ms |     444 | `createProgram`                    | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  2.0% |  41.7ms |      33 | `require`                          | `node:module:1752:35`                                                                                                                                   |
|  0.5% |  10.0ms |       9 | `getParsedCommandLineOfConfigFile` | `/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |

##### `(anonymous)` (`cpuprofile-run.mjs:16:15`)

|      % |   Time | Samples | Callee | Location                           |
| -----: | -----: | ------: | ------ | ---------------------------------- |
| 100.0% | 28.9ms |       2 | `post` | `ext:deno_node/inspector.js:179:7` |

##### `post` (`cpuprofile-run.mjs:15:14`)

|      % |   Time | Samples | Callee        | Location                   |
| -----: | -----: | ------: | ------------- | -------------------------- |
| 100.0% | 28.9ms |       2 | `(anonymous)` | `cpuprofile-run.mjs:16:15` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame. `…` stands for frames the entry filter hides.

Common call stack: `(anonymous)` (`cpuprofile-run.mjs`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                 |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 70.9% |   1.64s |   2,439 | `getSemanticDiagnostics` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)          |
| 16.8% | 390.5ms |     444 | `createProgram` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                   |
|  1.7% |  40.4ms |      32 | `require` (`node:module:1752:35`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                           |
|  1.2% |  28.9ms |       2 | `post` (`ext:deno_node/inspector.js:179:7`) ← `(anonymous)` (`cpuprofile-run.mjs:16:15`) ← `post` (15:14)                                                                                                                                  |
|  0.4% |  10.0ms |       9 | `getParsedCommandLineOfConfigFile` (`/private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) |
|  0.1% |   1.3ms |       1 | `require` (`node:module:1752:35`) ← … ← `require` (1752:35) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                 |

# CPU profile

Took 3.32s over 3,926 samples (845.9µs per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| third-party       | 88.4% |   2.93s |   3,628 |
| stdlib            |  7.1% | 235.8ms |     169 |
| garbage collector |  3.5% | 117.0ms |      96 |
| program           |  0.9% |  29.2ms |      30 |
| regexp            | <0.1% |   1.3ms |       2 |
| ours              | <0.1% |   1.3ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                         | Location                                                                     |
| ----: | ------: | ------: | ------------------------------------------------ | ---------------------------------------------------------------------------- |
|  3.5% | 117.0ms |      96 | `(garbage collector)`                            | `<unknown>`                                                                  |
|  0.9% |  29.2ms |      30 | `(program)`                                      | `<unknown>`                                                                  |
|  0.8% |  28.2ms |       1 | `post`                                           | `ext:deno_node/inspector.js:179:7`                                           |
| <0.1% |   1.3ms |       1 | `typeCheckProject`                               | `tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33` |
| <0.1% |   1.2ms |       1 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)`      | `<unknown>`                                                                  |
| <0.1% |   0.1ms |       1 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+` | `<unknown>`                                                                  |

#### Lines

Lines ranked by contribution to each function's self time.

##### `typeCheckProject` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33`)

|      % |  Time | Samples | Location                                                                   |
| -----: | ----: | ------: | -------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:25` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `post` (`ext:deno_node/inspector.js:179:7`)

|      % |   Time | Samples | Caller        | Location                                                                        |
| -----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------- |
| 100.0% | 28.2ms |       1 | `(anonymous)` | `tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15` |

##### `typeCheckProject` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33`)

|      % |  Time | Samples | Caller        | Location                                                                  |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                                         | Location                                                                                                                                               |
| ----: | ------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 93.6% |   3.10s |   3,683 | `(anonymous)`                                    | `tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs`                                                                              |
| 92.7% |   3.07s |   3,683 | `typeCheckProject`                               | `tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33`                                                                           |
| 73.1% |   2.42s |   3,022 | `getSemanticDiagnostics`                         | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 15.5% | 514.6ms |     551 | `createProgram`                                  | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  3.8% | 126.7ms |     100 | `require`                                        | `node:module:1752:35`                                                                                                                                  |
|  3.5% | 117.0ms |      96 | `(garbage collector)`                            | `<unknown>`                                                                                                                                            |
|  0.9% |  29.2ms |      30 | `(program)`                                      | `<unknown>`                                                                                                                                            |
|  0.8% |  28.2ms |       1 | `post`                                           | `ext:deno_node/inspector.js:179:7`                                                                                                                     |
|  0.8% |  28.2ms |       1 | `(anonymous)`                                    | `tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15`                                                                        |
|  0.8% |  28.2ms |       1 | `post`                                           | `tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14`                                                                        |
|  0.3% |  10.0ms |       9 | `getParsedCommandLineOfConfigFile`               | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |
| <0.1% |   1.2ms |       1 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)`      | `<unknown>`                                                                                                                                            |
| <0.1% |   0.1ms |       1 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+` | `<unknown>`                                                                                                                                            |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs`)

|     % |   Time | Samples | Callee             | Location                                                                        |
| ----: | -----: | ------: | ------------------ | ------------------------------------------------------------------------------- |
| 99.1% |  3.07s |   3,682 | `typeCheckProject` | `tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33`    |
|  0.9% | 28.2ms |       1 | `post`             | `tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14` |

##### `typeCheckProject` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                                                                                                               |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 78.8% |   2.42s |   3,022 | `getSemanticDiagnostics`           | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 16.7% | 514.6ms |     551 | `createProgram`                    | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  4.1% | 126.7ms |     100 | `require`                          | `node:module:1752:35`                                                                                                                                  |
|  0.3% |  10.0ms |       9 | `getParsedCommandLineOfConfigFile` | `private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |

##### `(anonymous)` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15`)

|      % |   Time | Samples | Callee | Location                           |
| -----: | -----: | ------: | ------ | ---------------------------------- |
| 100.0% | 28.2ms |       1 | `post` | `ext:deno_node/inspector.js:179:7` |

##### `post` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:15:14`)

|      % |   Time | Samples | Callee        | Location                                                                        |
| -----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------- |
| 100.0% | 28.2ms |       1 | `(anonymous)` | `tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 73.0% |   2.42s |   3,020 | `getSemanticDiagnostics` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40`) ← `typeCheckProject` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33`) ← `(anonymous)` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs`)                                               |
| 15.5% | 514.5ms |     550 | `createProgram` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`) ← `typeCheckProject` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33`) ← `(anonymous)` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs`)                                                        |
|  3.8% | 125.5ms |      99 | `require` (`node:module:1752:35`) ← `typeCheckProject` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33`) ← `(anonymous)` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs`)                                                                                                                                                                                               |
|  0.8% |  28.2ms |       1 | `post` (`ext:deno_node/inspector.js:179:7`) ← `(anonymous)` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs:16:15`) ← `post` (15:14) ← `(anonymous)`                                                                                                                                                                                                                                                  |
|  0.3% |  10.0ms |       9 | `getParsedCommandLineOfConfigFile` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`) ← `typeCheckProject` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33`) ← `(anonymous)` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs`)                                      |
| <0.1% |   1.3ms |       1 | `require` (`node:module:1752:35`) ← `require` (1752:35) ← `typeCheckProject` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33`) ← `(anonymous)` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs`)                                                                                                                                                                         |
| <0.1% |   1.3ms |       1 | `typeCheckProject` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33`) ← `(anonymous)` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs`)                                                                                                                                                                                                                                   |
| <0.1% |   1.2ms |       1 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)` ← `getSemanticDiagnostics` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40`) ← `typeCheckProject` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33`) ← `(anonymous)` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs`) |
| <0.1% |   1.2ms |       1 | `getSemanticDiagnostics` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40`) ← `typeCheckProject` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33`)                                                                                                                                           |
| <0.1% |   0.1ms |       1 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+` ← `createProgram` (`private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`) ← `typeCheckProject` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33`) ← `(anonymous)` (`tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/cpuprofile-run.mjs`)     |

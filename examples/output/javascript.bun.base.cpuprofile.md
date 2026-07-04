# CPU profile

Took 5.58s over 4,237 samples (1.3ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| third-party | 92.7% |   5.17s |   3,933 |
| stdlib      |  7.3% | 406.3ms |     304 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |  Time | Samples | Function                           | Location                                                                                 |
| ----: | ----: | ------: | ---------------------------------- | ---------------------------------------------------------------------------------------- |
| <0.1% | 1.2ms |       1 | `parseJsonConfigFileContentWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `parseJsonConfigFileContentWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46`)

|      % |  Time | Samples | Caller             | Location                |
| -----: | ----: | ------: | ------------------ | ----------------------- |
| 100.0% | 1.2ms |       1 | `typeCheckProject` | `tsc-workload.mjs:3:33` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                           | Location                                                                                  |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| 99.8% |   5.57s |   4,230 | `typeCheckProject`                 | `tsc-workload.mjs:3:33`                                                                   |
| 84.4% |   4.71s |   3,609 | `getDiagnosticsHelper`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 13.3% | 744.9ms |     529 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  1.4% |  76.5ms |      59 | `bound require`                    | `<unknown>`                                                                               |
|  0.9% |  47.7ms |      37 | `forEachAncestorDirectory`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6613:38`   |
|  0.7% |  37.9ms |      30 | `parseJsonConfigFileContentWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46`  |
| <0.1% |   1.4ms |       1 | `getParsedCommandLineOfConfigFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                                                  |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| 84.5% |   4.71s |   3,609 | `getDiagnosticsHelper`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 13.4% | 744.9ms |     529 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  1.4% |  76.5ms |      59 | `bound require`                    | `<unknown>`                                                                               |
|  0.7% |  37.9ms |      30 | `parseJsonConfigFileContentWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46`  |
| <0.1% |   2.5ms |       2 | `forEachAncestorDirectory`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6613:38`   |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Call stack                                                                                                                                         |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 84.4% |   4.71s |   3,609 | `getDiagnosticsHelper` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38`)                                 |
| 12.5% | 699.7ms |     494 | `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`)                                        |
|  1.3% |  73.7ms |      57 | `bound require`                                                                                                                                    |
|  0.8% |  45.1ms |      35 | `forEachAncestorDirectory` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6613:38`) ← `createProgram` (113744:27) |
|  0.7% |  37.9ms |      30 | `parseJsonConfigFileContentWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46`)                      |
| <0.1% |   2.8ms |       2 | `bound require` ← `bound require`                                                                                                                  |
| <0.1% |   2.5ms |       2 | `forEachAncestorDirectory` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6613:38`)                               |
| <0.1% |   1.4ms |       1 | `getParsedCommandLineOfConfigFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`)                      |

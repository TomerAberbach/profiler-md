# CPU profile

Took 5.58s over 4,226 samples (1.3ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| third-party | 91.7% |   5.11s |   3,906 |
| stdlib      |  8.3% | 463.5ms |     319 |
| unknown     | <0.1% |   1.2ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |  Time | Samples | Function        | Location                                                                                  |
| ----: | ----: | ------: | --------------- | ----------------------------------------------------------------------------------------- |
| <0.1% | 1.2ms |       1 | `(unknown)`     | `<unknown>`                                                                               |
| <0.1% | 1.1ms |       1 | `createProgram` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`)

|      % |  Time | Samples | Caller             | Location                |
| -----: | ----: | ------: | ------------------ | ----------------------- |
| 100.0% | 1.1ms |       1 | `typeCheckProject` | `tsc-workload.mjs:3:33` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                           | Location                                                                                  |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| 99.7% |   5.57s |   4,215 | `typeCheckProject`                 | `tsc-workload.mjs:3:33`                                                                   |
| 84.1% |   4.69s |   3,587 | `getDiagnosticsHelper`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 13.5% | 753.2ms |     535 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  1.4% |  77.3ms |      59 | `bound require`                    | `<unknown>`                                                                               |
|  0.7% |  38.6ms |      31 | `parseJsonConfigFileContentWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46`  |
|  0.1% |   3.6ms |       3 | `getParsedCommandLineOfConfigFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |
| <0.1% |   2.5ms |       2 | `(unknown)`                        | `<unknown>`                                                                               |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                                                  |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| 84.3% |   4.69s |   3,587 | `getDiagnosticsHelper`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 13.5% | 753.2ms |     535 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  1.4% |  77.3ms |      59 | `bound require`                    | `<unknown>`                                                                               |
|  0.7% |  38.6ms |      31 | `parseJsonConfigFileContentWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46`  |
|  0.1% |   3.6ms |       3 | `getParsedCommandLineOfConfigFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame. `…` stands for frames the entry filter hides.

Common call stack: `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Call stack                                                                                                                    |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------- |
| 84.1% |   4.69s |   3,587 | `getDiagnosticsHelper` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38`)            |
| 13.5% | 753.2ms |     535 | `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`)                   |
|  1.4% |  75.9ms |      58 | `bound require`                                                                                                               |
|  0.7% |  38.6ms |      31 | `parseJsonConfigFileContentWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46`) |
|  0.1% |   3.6ms |       3 | `getParsedCommandLineOfConfigFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`) |
| <0.1% |   1.4ms |       1 | `bound require` ← … ← `bound require`                                                                                         |

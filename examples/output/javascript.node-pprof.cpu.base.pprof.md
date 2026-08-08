# Wall time profile

Took 16.89s over 13,495 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 86.7% |  14.64s |  11,699 |
| Garbage collector  | 11.4% |   1.93s |   1,542 |
| Native             |  0.9% | 151.5ms |     121 |
| Standard library   |  0.9% | 149.0ms |     119 |
| Regular expression |  0.1% |  17.5ms |      14 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |  Time | Samples | Function                                               | Location                                    |
| ----: | ----: | ------: | ------------------------------------------------------ | ------------------------------------------- |
| 11.4% | 1.93s |   1,542 | `(garbage collector)`                                  | `<unknown>`                                 |
| <0.1% | 7.5ms |       6 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+`        | `<unknown>`                                 |
| <0.1% | 3.8ms |       3 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)`            | `<unknown>`                                 |
| <0.1% | 3.8ms |       3 | `createProgram`                                        | `node_modules/typescript/lib/typescript.js` |
| <0.1% | 3.8ms |       3 | `RegExp: ^\/\/\/?\s*@(ts-expect-error\|ts-ignore)`     | `<unknown>`                                 |
| <0.1% | 1.3ms |       1 | `createRequire`                                        | `node:internal/modules/cjs/loader`          |
| <0.1% | 1.3ms |       1 | `RegExp: ^\.\.?($\|[\\/])`                             | `<unknown>`                                 |
| <0.1% | 1.3ms |       1 | `RegExp: ^(?:\/\|\*)*\s*@(ts-expect-error\|ts-ignore)` | `<unknown>`                                 |

#### Categories

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 11.4% | 1.93s |   1,542 | `(garbage collector)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `createProgram` (`node_modules/typescript/lib/typescript.js`)

|      % |  Time | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 3.8ms |       3 | `node_modules/typescript/lib/typescript.js:120478` |

##### `createRequire` (`node:internal/modules/cjs/loader`)

|      % |  Time | Samples | Location                                |
| -----: | ----: | ------: | --------------------------------------- |
| 100.0% | 1.3ms |       1 | `node:internal/modules/cjs/loader:1976` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `createProgram` (`node_modules/typescript/lib/typescript.js`)

|      % |  Time | Samples | Caller             | Location           |
| -----: | ----: | ------: | ------------------ | ------------------ |
| 100.0% | 3.8ms |       3 | `typeCheckProject` | `tsc-workload.mjs` |

##### `createRequire` (`node:internal/modules/cjs/loader`)

|      % |  Time | Samples | Caller             | Location           |
| -----: | ----: | ------: | ------------------ | ------------------ |
| 100.0% | 1.3ms |       1 | `typeCheckProject` | `tsc-workload.mjs` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |    Time | Samples | Function                                               | Location                                               |
| ----: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------ |
| 87.4% |  14.76s |  11,797 | `typeCheckProject`                                     | `tsc-workload.mjs`                                     |
| 87.4% |  14.76s |  11,797 | `(anonymous)`                                          | `datadog-pprof.mjs`                                    |
| 75.8% |  12.80s |  10,231 | `getSemanticDiagnostics`                               | `node_modules/typescript/lib/typescript.js`            |
| 11.4% |   1.93s |   1,542 | `(garbage collector)`                                  | `<unknown>`                                            |
| 10.8% |   1.81s |   1,453 | `createProgram`                                        | `node_modules/typescript/lib/typescript.js`            |
|  0.7% | 112.7ms |      90 | `require`                                              | `node:internal/modules/helpers`                        |
|  0.2% |  27.5ms |      22 | `getParsedCommandLineOfConfigFile`                     | `node_modules/typescript/lib/typescript.js`            |
| <0.1% |   7.5ms |       6 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+`        | `<unknown>`                                            |
| <0.1% |   3.8ms |       3 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)`            | `<unknown>`                                            |
| <0.1% |   3.8ms |       3 | `RegExp: ^\/\/\/?\s*@(ts-expect-error\|ts-ignore)`     | `<unknown>`                                            |
| <0.1% |   1.3ms |       1 | `stop`                                                 | `node_modules/@datadog/pprof/out/src/time-profiler.js` |
| <0.1% |   1.3ms |       1 | `createRequire`                                        | `node:internal/modules/cjs/loader`                     |
| <0.1% |   1.3ms |       1 | `getSyntacticDiagnostics`                              | `node_modules/typescript/lib/typescript.js`            |
| <0.1% |   1.3ms |       1 | `RegExp: ^\.\.?($\|[\\/])`                             | `<unknown>`                                            |
| <0.1% |   1.3ms |       1 | `RegExp: ^(?:\/\|\*)*\s*@(ts-expect-error\|ts-ignore)` | `<unknown>`                                            |

#### Categories

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 11.4% | 1.93s |   1,542 | `(garbage collector)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |    Time | Samples | Callee                             | Location                                    |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------- |
| 86.7% |  12.80s |  10,230 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| 12.3% |   1.81s |   1,453 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 112.7ms |      90 | `require`                          | `node:internal/modules/helpers`             |
|  0.2% |  27.5ms |      22 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `createRequire`                    | `node:internal/modules/cjs/loader`          |

##### `(anonymous)` (`datadog-pprof.mjs`)

|      % |   Time | Samples | Callee             | Location                                               |
| -----: | -----: | ------: | ------------------ | ------------------------------------------------------ |
| 100.0% | 14.76s |  11,796 | `typeCheckProject` | `tsc-workload.mjs`                                     |
|  <0.1% |  1.3ms |       1 | `stop`             | `node_modules/@datadog/pprof/out/src/time-profiler.js` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame. `…` stands for frames the entry filter hides.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                   |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 75.8% |  12.80s |  10,225 | `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`)                                                       |
| 10.7% |   1.80s |   1,443 | `createProgram` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`)                                                                |
|  0.7% | 111.4ms |      89 | `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`)                                                                                  |
|  0.2% |  27.5ms |      22 | `getParsedCommandLineOfConfigFile` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`)                                             |
| <0.1% |   5.0ms |       4 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+` ← … ← `createProgram` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`)          |
| <0.1% |   3.8ms |       3 | `RegExp: ^\/\/\/?\s*@(ts-expect-error\|ts-ignore)` ← … ← `createProgram` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`)       |
| <0.1% |   2.5ms |       2 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+` ← … ← `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`) |
| <0.1% |   2.5ms |       2 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)` ← … ← `createProgram` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`)              |
| <0.1% |   1.3ms |       1 | `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`)                                                                                             |
| <0.1% |   1.3ms |       1 | `stop` (`node_modules/@datadog/pprof/out/src/time-profiler.js`) ← `(anonymous)` (`datadog-pprof.mjs`)                                                                                                        |
| <0.1% |   1.3ms |       1 | `createRequire` (`node:internal/modules/cjs/loader`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`)                                                                         |
| <0.1% |   1.3ms |       1 | `getSyntacticDiagnostics` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`)                                                      |
| <0.1% |   1.3ms |       1 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)` ← … ← `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`)     |
| <0.1% |   1.3ms |       1 | `RegExp: ^\.\.?($\|[\\/])` ← … ← `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`)                      |
| <0.1% |   1.3ms |       1 | `RegExp: ^(?:\/\|\*)*\s*@(ts-expect-error\|ts-ignore)` ← … ← `createProgram` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`)   |
| <0.1% |   1.3ms |       1 | `require` (`node:internal/modules/helpers`) ← … ← `require` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`)                                                                  |

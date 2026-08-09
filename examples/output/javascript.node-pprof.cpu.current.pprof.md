# Wall time profile

Took 18.29s over 14,612 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 88.6% |  16.20s |  12,941 |
| Garbage collector  |  9.6% |   1.75s |   1,403 |
| Native             |  1.0% | 174.0ms |     139 |
| Standard library   |  0.7% | 134.0ms |     107 |
| Regular expression |  0.1% |  26.3ms |      21 |
| Ours               | <0.1% |   1.3ms |       1 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |   Time | Samples | Function                                               | Location                                                                        |
| ----: | -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------- |
|  9.6% |  1.75s |   1,403 | `(garbage collector)`                                  | `<unknown>`                                                                     |
|  0.1% | 11.3ms |       9 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+`       | `<unknown>`                                                                     |
|  0.1% | 10.0ms |       8 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)`            | `<unknown>`                                                                     |
| <0.1% |  5.0ms |       4 | `noop`                                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% |  2.5ms |       2 | `createProgram`                                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% |  1.3ms |       1 | `typeCheckProject`                                     | `tsc-workload.mjs`                                                              |
| <0.1% |  1.3ms |       1 | `RegExp: {(\d+)}`                                      | `<unknown>`                                                                     |
| <0.1% |  1.3ms |       1 | `RegExp: ^\.\.?($\|[\\/])`                             | `<unknown>`                                                                     |
| <0.1% |  1.3ms |       1 | `RegExp: import\|require`                              | `<unknown>`                                                                     |
| <0.1% |  1.3ms |       1 | `RegExp: ^(?:\/\|\*)*\s*@(ts-expect-error\|ts-ignore)` | `<unknown>`                                                                     |

#### Lines

Lines ranked by contribution to each function's self time.

##### `noop` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |  Time | Samples | Location                                                                             |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------ |
| 100.0% | 5.0ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1705` |

##### `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |  Time | Samples | Location                                                                               |
| -----: | ----: | ------: | -------------------------------------------------------------------------------------- |
| 100.0% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744` |

##### `typeCheckProject` (`tsc-workload.mjs`)

|      % |  Time | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 1.3ms |       1 | `tsc-workload.mjs:3` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `noop` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Caller             | Location           |
| ----: | ----: | ------: | ------------------ | ------------------ |
| 25.0% | 1.3ms |       1 | `typeCheckProject` | `tsc-workload.mjs` |

##### `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |  Time | Samples | Caller             | Location           |
| -----: | ----: | ------: | ------------------ | ------------------ |
| 100.0% | 2.5ms |       2 | `typeCheckProject` | `tsc-workload.mjs` |

##### `typeCheckProject` (`tsc-workload.mjs`)

|      % |  Time | Samples | Caller        | Location            |
| -----: | ----: | ------: | ------------- | ------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `datadog-pprof.mjs` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |   Time | Samples | Function                                               | Location                                                                        |
| ----: | -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------- |
| 89.4% | 16.35s |  13,063 | `typeCheckProject`                                     | `tsc-workload.mjs`                                                              |
| 89.4% | 16.35s |  13,063 | `(anonymous)`                                          | `datadog-pprof.mjs`                                                             |
| 77.6% | 14.18s |  11,333 | `getSemanticDiagnostics`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 11.2% |  2.04s |   1,632 | `createProgram`                                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  9.6% |  1.75s |   1,403 | `(garbage collector)`                                  | `<unknown>`                                                                     |
|  0.5% | 97.7ms |      78 | `require`                                              | `node:internal/modules/helpers`                                                 |
|  0.1% | 26.3ms |      21 | `getParsedCommandLineOfConfigFile`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.1% | 11.3ms |       9 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+`       | `<unknown>`                                                                     |
|  0.1% | 10.0ms |       8 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)`            | `<unknown>`                                                                     |
| <0.1% |  5.0ms |       4 | `noop`                                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% |  1.3ms |       1 | `getSyntacticDiagnostics`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% |  1.3ms |       1 | `findConfigFile`                                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% |  1.3ms |       1 | `RegExp: {(\d+)}`                                      | `<unknown>`                                                                     |
| <0.1% |  1.3ms |       1 | `RegExp: ^\.\.?($\|[\\/])`                             | `<unknown>`                                                                     |
| <0.1% |  1.3ms |       1 | `RegExp: import\|require`                              | `<unknown>`                                                                     |
| <0.1% |  1.3ms |       1 | `RegExp: ^(?:\/\|\*)*\s*@(ts-expect-error\|ts-ignore)` | `<unknown>`                                                                     |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |   Time | Samples | Callee                             | Location                                                                        |
| ----: | -----: | ------: | ---------------------------------- | ------------------------------------------------------------------------------- |
| 86.7% | 14.18s |  11,328 | `getSemanticDiagnostics`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 12.5% |  2.04s |   1,632 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.6% | 97.7ms |      78 | `require`                          | `node:internal/modules/helpers`                                                 |
|  0.2% | 26.3ms |      21 | `getParsedCommandLineOfConfigFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% |  1.3ms |       1 | `getSyntacticDiagnostics`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof.mjs`)

|      % |   Time | Samples | Callee             | Location           |
| -----: | -----: | ------: | ------------------ | ------------------ |
| 100.0% | 16.35s |  13,063 | `typeCheckProject` | `tsc-workload.mjs` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame. `…` stands for frames the entry filter hides.

Common call stack: `(anonymous)` (`datadog-pprof.mjs`)

|     % |   Time | Samples | Call stack                                                                                                                                                                                                  |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 77.5% | 14.17s |  11,323 | `getSemanticDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`)                                                        |
| 11.0% |  2.01s |   1,613 | `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`)                                                                 |
|  0.5% | 96.4ms |      77 | `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`tsc-workload.mjs`)                                                                                                                       |
|  0.1% | 26.3ms |      21 | `getParsedCommandLineOfConfigFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`)                                              |
|  0.1% | 10.0ms |       8 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+` ← … ← `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`)          |
| <0.1% |  7.5ms |       6 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)` ← … ← `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`)               |
| <0.1% |  3.8ms |       3 | `noop` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← … ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`)                                                    |
| <0.1% |  2.5ms |       2 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)` ← … ← `getSemanticDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`)      |
| <0.1% |  1.3ms |       1 | `typeCheckProject` (`tsc-workload.mjs`)                                                                                                                                                                     |
| <0.1% |  1.3ms |       1 | `getSyntacticDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`)                                                       |
| <0.1% |  1.3ms |       1 | `noop` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`)                                                                          |
| <0.1% |  1.3ms |       1 | `findConfigFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`)                                                                |
| <0.1% |  1.3ms |       1 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+` ← … ← `getSemanticDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) |
| <0.1% |  1.3ms |       1 | `RegExp: {(\d+)}` ← … ← `getSemanticDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`)                                |
| <0.1% |  1.3ms |       1 | `RegExp: ^\.\.?($\|[\\/])` ← … ← `getSemanticDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`)                       |
| <0.1% |  1.3ms |       1 | `RegExp: import\|require` ← … ← `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`)                                 |
| <0.1% |  1.3ms |       1 | `RegExp: ^(?:\/\|\*)*\s*@(ts-expect-error\|ts-ignore)` ← … ← `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`)    |
| <0.1% |  1.3ms |       1 | `require` (`node:internal/modules/helpers`) ← … ← `require` ← `typeCheckProject` (`tsc-workload.mjs`)                                                                                                       |

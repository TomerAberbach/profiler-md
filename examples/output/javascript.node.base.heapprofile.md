# Heap profile

Allocated 34.6 MB over 49 samples (706 kB per sample).

| Category    |     % |    Size | Samples |
| ----------- | ----: | ------: | ------: |
| third-party | 51.8% | 17.9 MB |      34 |
| stdlib      | 48.2% | 16.7 MB |      15 |

## Hottest functions

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                           | Location                                              |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 95.5% |   33 MB |      46 | `typeCheckProject`                 | `tsc-workload.mjs:3:33`                               |
| 95.5% |   33 MB |      46 | `(anonymous)`                      | `tsc-run.mjs:1:1`                                     |
| 54.4% | 18.8 MB |      19 | `require`                          | `node:internal/modules/helpers:146:19`                |
| 28.8% | 9.97 MB |      19 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:121549:36` |
| 10.7% | 3.69 MB |       7 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:120478:25` |
|  1.5% |  524 kB |       1 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:36594:44`  |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Size | Samples | Callee                             | Location                                              |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 57.0% | 18.8 MB |      19 | `require`                          | `node:internal/modules/helpers:146:19`                |
| 30.2% | 9.97 MB |      19 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:121549:36` |
| 11.2% | 3.69 MB |       7 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:120478:25` |
|  1.6% |  524 kB |       1 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:36594:44`  |

##### `(anonymous)` (`tsc-run.mjs:1:1`)

|      % |  Size | Samples | Callee             | Location                |
| -----: | ----: | ------: | ------------------ | ----------------------- |
| 100.0% | 33 MB |      46 | `typeCheckProject` | `tsc-workload.mjs:3:33` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`)

|     % |    Size | Samples | Call stack                                                                                |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------- |
| 52.9% | 18.3 MB |      18 | `require` (`node:internal/modules/helpers:146:19`)                                        |
| 28.8% | 9.97 MB |      19 | `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js:121549:36`)          |
| 10.7% | 3.69 MB |       7 | `createProgram` (`node_modules/typescript/lib/typescript.js:120478:25`)                   |
|  1.5% |  524 kB |       1 | `getParsedCommandLineOfConfigFile` (`node_modules/typescript/lib/typescript.js:36594:44`) |
|  1.5% |  524 kB |       1 | `require` (`node:internal/modules/helpers:146:19`) ← `require` (146:19)                   |

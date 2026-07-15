# Heap profile

Allocated 33 MiB over 49 samples (689 KiB per sample).

| Category    |     % |     Size | Samples |
| ----------- | ----: | -------: | ------: |
| third-party | 51.8% | 17.1 MiB |      34 |
| stdlib      | 48.2% | 15.9 MiB |      15 |

## Hottest functions

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                           | Location                                              |
| ----: | -------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 95.5% | 31.5 MiB |      46 | `typeCheckProject`                 | `tsc-workload.mjs:3:33`                               |
| 95.5% | 31.5 MiB |      46 | `(anonymous)`                      | `tsc-run.mjs:1:1`                                     |
| 54.4% |   18 MiB |      19 | `require`                          | `node:internal/modules/helpers:146:19`                |
| 28.8% | 9.51 MiB |      19 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:121549:36` |
| 10.7% | 3.52 MiB |       7 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:120478:25` |
|  1.5% |  512 KiB |       1 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:36594:44`  |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |     Size | Samples | Callee                             | Location                                              |
| ----: | -------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 57.0% |   18 MiB |      19 | `require`                          | `node:internal/modules/helpers:146:19`                |
| 30.2% | 9.51 MiB |      19 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:121549:36` |
| 11.2% | 3.52 MiB |       7 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:120478:25` |
|  1.6% |  512 KiB |       1 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:36594:44`  |

##### `(anonymous)` (`tsc-run.mjs:1:1`)

|      % |     Size | Samples | Callee             | Location                |
| -----: | -------: | ------: | ------------------ | ----------------------- |
| 100.0% | 31.5 MiB |      46 | `typeCheckProject` | `tsc-workload.mjs:3:33` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`)

|     % |     Size | Samples | Call stack                                                                                |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------- |
| 52.9% | 17.5 MiB |      18 | `require` (`node:internal/modules/helpers:146:19`)                                        |
| 28.8% | 9.51 MiB |      19 | `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js:121549:36`)          |
| 10.7% | 3.52 MiB |       7 | `createProgram` (`node_modules/typescript/lib/typescript.js:120478:25`)                   |
|  1.5% |  512 KiB |       1 | `getParsedCommandLineOfConfigFile` (`node_modules/typescript/lib/typescript.js:36594:44`) |
|  1.5% |  512 KiB |       1 | `require` (`node:internal/modules/helpers:146:19`) ← `require` (146:19)                   |

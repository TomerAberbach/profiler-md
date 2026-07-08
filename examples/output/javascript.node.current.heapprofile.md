# Heap profile

Allocated 33.1 MB over 26 samples (1.27 MB per sample).

| Category    |     % |    Size | Samples |
| ----------- | ----: | ------: | ------: |
| stdlib      | 66.5% |   22 MB |       5 |
| third-party | 33.5% | 11.1 MB |      21 |

## Hottest functions

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                 | Location                                                                                  |
| ----: | ------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
| 96.8% | 32.1 MB |      24 | `typeCheckProject`       | `tsc-workload.mjs:3:33`                                                                   |
| 96.8% | 32.1 MB |      24 | `(anonymous)`            | `tsc-run.mjs:1:1`                                                                         |
| 71.5% | 23.7 MB |       8 | `require`                | `node:internal/modules/helpers:146:19`                                                    |
| 17.4% | 5.78 MB |      11 | `getSemanticDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
|  7.9% | 2.62 MB |       5 | `createProgram`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Size | Samples | Callee                   | Location                                                                                  |
| ----: | ------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
| 73.8% | 23.7 MB |       8 | `require`                | `node:internal/modules/helpers:146:19`                                                    |
| 18.0% | 5.78 MB |      11 | `getSemanticDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
|  8.2% | 2.62 MB |       5 | `createProgram`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |

##### `(anonymous)` (`tsc-run.mjs:1:1`)

|      % |    Size | Samples | Callee             | Location                |
| -----: | ------: | ------: | ------------------ | ----------------------- |
| 100.0% | 32.1 MB |      24 | `typeCheckProject` | `tsc-workload.mjs:3:33` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`)

|     % |    Size | Samples | Call stack                                                                                                           |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------- |
| 71.5% | 23.7 MB |       8 | `require` (`node:internal/modules/helpers:146:19`)                                                                   |
| 17.4% | 5.78 MB |      11 | `getSemanticDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40`) |
|  7.9% | 2.62 MB |       5 | `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`)          |

# Heap profile

Allocated 31.6 MiB over 26 samples (1.21 MiB per sample).

| Category    |     % |     Size | Samples |
| ----------- | ----: | -------: | ------: |
| stdlib      | 66.5% |   21 MiB |       5 |
| third-party | 33.5% | 10.6 MiB |      21 |

## Hottest functions

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                 | Location                                                                                  |
| ----: | -------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
| 96.8% | 30.6 MiB |      24 | `typeCheckProject`       | `tsc-workload.mjs:3:33`                                                                   |
| 96.8% | 30.6 MiB |      24 | `(anonymous)`            | `tsc-run.mjs:1:1`                                                                         |
| 71.5% | 22.6 MiB |       8 | `require`                | `node:internal/modules/helpers:146:19`                                                    |
| 17.4% | 5.51 MiB |      11 | `getSemanticDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
|  7.9% |  2.5 MiB |       5 | `createProgram`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |     Size | Samples | Callee                   | Location                                                                                  |
| ----: | -------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
| 73.8% | 22.6 MiB |       8 | `require`                | `node:internal/modules/helpers:146:19`                                                    |
| 18.0% | 5.51 MiB |      11 | `getSemanticDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
|  8.2% |  2.5 MiB |       5 | `createProgram`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |

##### `(anonymous)` (`tsc-run.mjs:1:1`)

|      % |     Size | Samples | Callee             | Location                |
| -----: | -------: | ------: | ------------------ | ----------------------- |
| 100.0% | 30.6 MiB |      24 | `typeCheckProject` | `tsc-workload.mjs:3:33` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`)

|     % |     Size | Samples | Call stack                                                                                                           |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------- |
| 71.5% | 22.6 MiB |       8 | `require` (`node:internal/modules/helpers:146:19`)                                                                   |
| 17.4% | 5.51 MiB |      11 | `getSemanticDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40`) |
|  7.9% |  2.5 MiB |       5 | `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`)          |

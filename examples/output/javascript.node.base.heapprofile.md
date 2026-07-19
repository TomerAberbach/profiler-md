# Heap profile

Allocated 33 MiB over 49 samples (689 KiB per sample).

| Category    |     % |     Size | Samples |
| ----------- | ----: | -------: | ------: |
| third-party | 51.8% | 17.1 MiB |      34 |
| stdlib      | 48.2% | 15.9 MiB |      15 |

Hidden functions account for 100.0% of bytes allocated, so the hottest are also shown.

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                   | Location                                             |
| ----: | -------: | ------: | -------------------------- | ---------------------------------------------------- |
| 26.4% | 8.72 MiB |       1 | `readFileSync`             | `node:fs:433:22`                                     |
|  9.5% | 3.13 MiB |       6 | `wrapSafe`                 | `node:internal/modules/cjs/loader:1671:18`           |
|  4.5% |  1.5 MiB |       3 | `__init`                   | `node_modules/typescript/lib/typescript.js:21:43`    |
|  3.1% | 1.01 MiB |       2 | `charCodeAt`               | `<unknown>`                                          |
|  3.0% |    1 MiB |       2 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27`               |
|  1.7% |  576 KiB |       1 | `__export`                 | `node_modules/typescript/lib/typescript.js:27:18`    |
|  1.7% |  560 KiB |       1 | `set`                      | `<unknown>`                                          |
|  1.5% |  517 KiB |       1 | `nextToken`                | `node_modules/typescript/lib/typescript.js:29792:27` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `readFileSync` (`node:fs:433:22`)

|      % |     Size | Samples | Caller            | Location                                   |
| -----: | -------: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 8.72 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |     Size | Samples | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 3.13 MiB |       6 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `__init` (`node_modules/typescript/lib/typescript.js:21:43`)

|      % |    Size | Samples | Caller                           | Location                                              |
| -----: | ------: | ------: | -------------------------------- | ----------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `src/compiler/_namespaces/ts.ts` | `node_modules/typescript/lib/typescript.js:130200:37` |

##### `charCodeAt` (`<unknown>`)

|      % |     Size | Samples | Caller                 | Location                                            |
| -----: | -------: | ------: | ---------------------- | --------------------------------------------------- |
| 100.0% | 1.01 MiB |       2 | `iterateCommentRanges` | `node_modules/typescript/lib/typescript.js:9478:32` |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm:385:27`)

|      % |  Size | Samples | Caller           | Location                               |
| -----: | ----: | ------: | ---------------- | -------------------------------------- |
| 100.0% | 1 MiB |       2 | `requireBuiltin` | `node:internal/bootstrap/realm:422:24` |

##### `__export` (`node_modules/typescript/lib/typescript.js:27:18`)

|      % |    Size | Samples | Caller        | Location                                          |
| -----: | ------: | ------: | ------------- | ------------------------------------------------- |
| 100.0% | 576 KiB |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:18:11` |

##### `set` (`<unknown>`)

|      % |    Size | Samples | Caller        | Location                                           |
| -----: | ------: | ------: | ------------- | -------------------------------------------------- |
| 100.0% | 560 KiB |       1 | `multiMapAdd` | `node_modules/typescript/lib/typescript.js:984:23` |

##### `nextToken` (`node_modules/typescript/lib/typescript.js:29792:27`)

|      % |    Size | Samples | Caller           | Location                                             |
| -----: | ------: | ------: | ---------------- | ---------------------------------------------------- |
| 100.0% | 517 KiB |       1 | `parseModifiers` | `node_modules/typescript/lib/typescript.js:34330:32` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                           | Location                                              |
| ----: | -------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 95.5% | 31.5 MiB |      46 | `typeCheckProject`                 | `tsc-workload.mjs:3:33`                               |
| 95.5% | 31.5 MiB |      46 | `(anonymous)`                      | `tsc-run.mjs:1:1`                                     |
| 54.4% |   18 MiB |      19 | `require`                          | `node:internal/modules/helpers:146:19`                |
| 28.8% | 9.51 MiB |      19 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:121549:36` |
| 26.4% | 8.72 MiB |       1 | `readFileSync`                     | `node:fs:433:22`                                      |
| 15.3% | 5.05 MiB |      10 | `__init`                           | `node_modules/typescript/lib/typescript.js:21:43`     |
| 10.7% | 3.52 MiB |       7 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:120478:25` |
|  9.5% | 3.13 MiB |       6 | `wrapSafe`                         | `node:internal/modules/cjs/loader:1671:18`            |
|  4.5% |  1.5 MiB |       3 | `compileForInternalLoader`         | `node:internal/bootstrap/realm:385:27`                |
|  3.1% | 1.01 MiB |       2 | `charCodeAt`                       | `<unknown>`                                           |
|  1.7% |  576 KiB |       1 | `__export`                         | `node_modules/typescript/lib/typescript.js:27:18`     |
|  1.7% |  560 KiB |       1 | `set`                              | `<unknown>`                                           |
|  1.5% |  517 KiB |       1 | `nextToken`                        | `node_modules/typescript/lib/typescript.js:29792:27`  |
|  1.5% |  512 KiB |       1 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:36594:44`  |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

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

##### `require` (`node:internal/modules/helpers:146:19`)

|      % |   Size | Samples | Callee        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 18 MiB |      19 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js:121549:36`)

|      % |     Size | Samples | Callee                 | Location                                              |
| -----: | -------: | ------: | ---------------------- | ----------------------------------------------------- |
| 100.0% | 9.51 MiB |      19 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js:121535:34` |

##### `__init` (`node_modules/typescript/lib/typescript.js:21:43`)

|      % |     Size | Samples | Callee                             | Location                                              |
| -----: | -------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 100.0% | 5.05 MiB |      10 | `src/typescript/_namespaces/ts.ts` | `node_modules/typescript/lib/typescript.js:190817:39` |
|  79.3% |    4 MiB |       8 | `src/compiler/_namespaces/ts.ts`   | `node_modules/typescript/lib/typescript.js:130200:37` |

##### `createProgram` (`node_modules/typescript/lib/typescript.js:120478:25`)

|     % |  Size | Samples | Callee    | Location                                          |
| ----: | ----: | ------: | --------- | ------------------------------------------------- |
| 57.0% | 2 MiB |       4 | `forEach` | `node_modules/typescript/lib/typescript.js:52:19` |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm:385:27`)

|     % |    Size | Samples | Callee        | Location                                 |
| ----: | ------: | ------: | ------------- | ---------------------------------------- |
| 33.3% | 512 KiB |       1 | `(anonymous)` | `node:stream:1:1`                        |
| 33.3% | 512 KiB |       1 | `(anonymous)` | `node:internal/fs/sync_write_stream:1:1` |

##### `getParsedCommandLineOfConfigFile` (`node_modules/typescript/lib/typescript.js:36594:44`)

|      % |    Size | Samples | Callee                                 | Location                                             |
| -----: | ------: | ------: | -------------------------------------- | ---------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `parseJsonSourceFileConfigFileContent` | `node_modules/typescript/lib/typescript.js:37152:48` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                            |
| ----: | -------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28.8% | 9.51 MiB |      19 | `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js:121549:36`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`)                                                                                                                                                                                                   |
| 26.4% | 8.72 MiB |       1 | `readFileSync` (`node:fs:433:22`) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`)                                                                                                                                                                                             |
| 10.6% |  3.5 MiB |       7 | `__init` (`node_modules/typescript/lib/typescript.js:21:43`) ← `__init` (21:43) ← `__init` (21:43) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`)                                                                                                                            |
|  9.5% | 3.13 MiB |       6 | `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`)                                                                                                                                                                       |
|  6.1% |    2 MiB |       4 | `createProgram` (`node_modules/typescript/lib/typescript.js:120478:25`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`)                                                                                                                                                                                                            |
|  3.1% | 1.01 MiB |       2 | `charCodeAt` ← `createProgram` (`node_modules/typescript/lib/typescript.js:120478:25`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`)                                                                                                                                                                                             |
|  1.7% |  576 KiB |       1 | `__export` (`node_modules/typescript/lib/typescript.js:27:18`) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`)                                                                                                                                                                |
|  1.7% |  560 KiB |       1 | `set` ← `__init` (`node_modules/typescript/lib/typescript.js:21:43`) ← `__init` (21:43) ← `__init` (21:43) ← `__init` (21:43) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`)                                                                                                 |
|  1.5% |  517 KiB |       1 | `nextToken` (`node_modules/typescript/lib/typescript.js:29792:27`) ← `createProgram` (120478:25) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`)                                                                                                                                                                                   |
|  1.5% |  512 KiB |       1 | `compileForInternalLoader` (`node:internal/bootstrap/realm:385:27`) ← `compileForInternalLoader` (385:27) ← `compileForInternalLoader` (385:27)                                                                                                                                                                                                                       |
|  1.5% |  512 KiB |       1 | `getParsedCommandLineOfConfigFile` (`node_modules/typescript/lib/typescript.js:36594:44`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`)                                                                                                                                                                                          |
|  1.5% |  512 KiB |       1 | `__init` (`node_modules/typescript/lib/typescript.js:21:43`) ← `__init` (21:43) ← `__init` (21:43) ← `__init` (21:43) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`)                                                                                                         |
|  1.5% |  512 KiB |       1 | `compileForInternalLoader` (`node:internal/bootstrap/realm:385:27`) ← `require` (`node:internal/modules/helpers:146:19`) ← `__init` (`node_modules/typescript/lib/typescript.js:21:43`) ← `__init` (21:43) ← `__init` (21:43) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) |
|  1.5% |  512 KiB |       1 | `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`)                                                                                                                                                                                                                                 |

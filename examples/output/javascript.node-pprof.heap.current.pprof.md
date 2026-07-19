# Heap profile

Allocated 732 MiB over 7,784,774 samples (98.6 B per sample).

| Category    |     % |    Size |   Samples |
| ----------- | ----: | ------: | --------: |
| third-party | 78.8% | 577 MiB | 6,943,710 |
| stdlib      | 21.2% | 155 MiB |   841,064 |

Hidden functions account for 100.0% of bytes allocated, so the hottest are also shown.

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size |   Samples | Function                     | Location                                    |
| ----: | -------: | --------: | ---------------------------- | ------------------------------------------- |
| 13.1% |   96 MiB | 1,720,054 | `instantiateSymbol`          | `node_modules/typescript/lib/typescript.js` |
|  9.3% | 68.1 MiB |    30,875 | `set`                        | `<unknown>`                                 |
|  5.9% | 43.5 MiB |   571,780 | `Map`                        | `<unknown>`                                 |
|  4.0% |   29 MiB |   187,880 | `instantiateSignature`       | `node_modules/typescript/lib/typescript.js` |
|  3.9% | 28.5 MiB |   427,885 | `declareSymbol`              | `node_modules/typescript/lib/typescript.js` |
|  3.2% | 23.5 MiB |   220,047 | `parseIdentifierName`        | `node_modules/typescript/lib/typescript.js` |
|  3.0% |   22 MiB |   166,631 | `instantiateAnonymousType`   | `node_modules/typescript/lib/typescript.js` |
|  2.9% | 21.5 MiB |   515,589 | `createNodeArray`            | `node_modules/typescript/lib/typescript.js` |
|  2.5% |   18 MiB |   168,546 | `createIdentifier`           | `node_modules/typescript/lib/typescript.js` |
|  2.3% | 16.5 MiB |   167,497 | `createParameterDeclaration` | `node_modules/typescript/lib/typescript.js` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size |   Samples | Location                                          |
| -----: | -----: | --------: | ------------------------------------------------- |
| 100.0% | 96 MiB | 1,720,054 | `node_modules/typescript/lib/typescript.js:62092` |

##### `instantiateSignature` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Samples | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 29 MiB | 187,880 | `node_modules/typescript/lib/typescript.js:62067` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Samples | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 28.5 MiB | 427,885 | `node_modules/typescript/lib/typescript.js:42491` |

##### `parseIdentifierName` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Samples | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 23.5 MiB | 220,047 | `node_modules/typescript/lib/typescript.js:30156` |

##### `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Samples | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 22 MiB | 166,631 | `node_modules/typescript/lib/typescript.js:62289` |

##### `createNodeArray` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Samples | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 21.5 MiB | 515,589 | `node_modules/typescript/lib/typescript.js:30064` |

##### `createIdentifier` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Samples | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 18 MiB | 168,546 | `node_modules/typescript/lib/typescript.js:30115` |

##### `createParameterDeclaration` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Samples | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 16.5 MiB | 167,497 | `node_modules/typescript/lib/typescript.js:21445` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Samples | Caller                     | Location                                    |
| ----: | -------: | --------: | -------------------------- | ------------------------------------------- |
| 81.8% | 78.5 MiB | 1,379,244 | `resolveObjectTypeMembers` | `node_modules/typescript/lib/typescript.js` |
| 10.4% |   10 MiB |   169,471 | `instantiateSignature`     | `node_modules/typescript/lib/typescript.js` |

##### `set` (`<unknown>`)

|     % |     Size | Samples | Caller                     | Location                                    |
| ----: | -------: | ------: | -------------------------- | ------------------------------------------- |
| 25.0% |   17 MiB |  10,025 | `resolveObjectTypeMembers` | `node_modules/typescript/lib/typescript.js` |
| 18.4% | 12.5 MiB |   6,955 | `addInheritedMembers`      | `node_modules/typescript/lib/typescript.js` |
|  3.7% |  2.5 MiB |   7,594 | `declareSymbol`            | `node_modules/typescript/lib/typescript.js` |
|  3.3% | 2.25 MiB |     569 | `parseIdentifierName`      | `node_modules/typescript/lib/typescript.js` |
|  0.8% |  560 KiB |      10 | `Map`                      | `<unknown>`                                 |

##### `Map` (`<unknown>`)

|     % |     Size | Samples | Caller              | Location                                    |
| ----: | -------: | ------: | ------------------- | ------------------------------------------- |
| 70.1% | 30.5 MiB | 404,471 | `createSymbolTable` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateSignature` (`node_modules/typescript/lib/typescript.js`)

|     % |   Size | Samples | Caller            | Location                                    |
| ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| 93.1% | 27 MiB | 177,796 | `instantiateList` | `node_modules/typescript/lib/typescript.js` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |   Size | Samples | Caller                             | Location                                    |
| ----: | -----: | ------: | ---------------------------------- | ------------------------------------------- |
| 73.7% | 21 MiB | 329,575 | `declareSymbolAndAddToSymbolTable` | `node_modules/typescript/lib/typescript.js` |

##### `parseIdentifierName` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Samples | Caller                           | Location                                    |
| ----: | ------: | ------: | -------------------------------- | ------------------------------------------- |
| 40.4% | 9.5 MiB |  88,957 | `parseTypeReference`             | `node_modules/typescript/lib/typescript.js` |
| 34.0% |   8 MiB |  74,907 | `parsePropertyOrMethodSignature` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Samples | Caller                       | Location                                    |
| ----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 88.6% | 19.5 MiB | 148,954 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js` |

##### `createNodeArray` (`node_modules/typescript/lib/typescript.js`)

|     % |   Size | Samples | Caller               | Location                                    |
| ----: | -----: | ------: | -------------------- | ------------------------------------------- |
| 51.2% | 11 MiB | 256,158 | `parseDelimitedList` | `node_modules/typescript/lib/typescript.js` |

##### `createIdentifier` (`node_modules/typescript/lib/typescript.js`)

|     % |   Size | Samples | Caller                 | Location                                    |
| ----: | -----: | ------: | ---------------------- | ------------------------------------------- |
| 55.6% | 10 MiB |  93,634 | `parseNameOfParameter` | `node_modules/typescript/lib/typescript.js` |

##### `createParameterDeclaration` (`node_modules/typescript/lib/typescript.js`)

|     % |   Size | Samples | Caller           | Location                                    |
| ----: | -----: | ------: | ---------------- | ------------------------------------------- |
| 97.0% | 16 MiB | 163,856 | `parseParameter` | `node_modules/typescript/lib/typescript.js` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size |   Samples | Function                           | Location                                               |
| ----: | -------: | --------: | ---------------------------------- | ------------------------------------------------------ |
| 77.5% |  567 MiB | 5,868,039 | `typeCheckProject`                 | `tsc-workload.mjs`                                     |
| 77.0% |  564 MiB | 5,802,917 | `(anonymous)`                      | `datadog-pprof-heap.mjs:1:1`                           |
| 47.5% |  348 MiB | 3,593,223 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js`            |
| 29.2% |  214 MiB | 2,243,751 | `createProgram`                    | `node_modules/typescript/lib/typescript.js`            |
| 13.3% |   97 MiB | 1,741,900 | `instantiateSymbol`                | `node_modules/typescript/lib/typescript.js`            |
|  9.3% | 68.1 MiB |    30,875 | `set`                              | `<unknown>`                                            |
|  6.1% |   45 MiB |   596,421 | `declareSymbol`                    | `node_modules/typescript/lib/typescript.js`            |
|  6.0% | 44.1 MiB |   571,790 | `Map`                              | `<unknown>`                                            |
|  5.9% | 43.5 MiB |   438,701 | `instantiateSignature`             | `node_modules/typescript/lib/typescript.js`            |
|  3.5% | 25.8 MiB |   220,616 | `parseIdentifierName`              | `node_modules/typescript/lib/typescript.js`            |
|  3.1% | 22.5 MiB |   168,192 | `instantiateAnonymousType`         | `node_modules/typescript/lib/typescript.js`            |
|  2.9% | 21.5 MiB |   515,589 | `createNodeArray`                  | `node_modules/typescript/lib/typescript.js`            |
|  2.5% | 18.5 MiB |   168,556 | `createIdentifier`                 | `node_modules/typescript/lib/typescript.js`            |
|  2.3% | 16.5 MiB |   167,497 | `createParameterDeclaration`       | `node_modules/typescript/lib/typescript.js`            |
|  2.0% | 14.9 MiB |    88,994 | `require`                          | `node:internal/modules/helpers`                        |
|  0.2% | 1.46 MiB |         1 | `profile`                          | `node_modules/@datadog/pprof/out/src/heap-profiler.js` |
|  0.1% |  512 KiB |    16,385 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js`            |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |     Size |   Samples | Callee                             | Location                                    |
| ----: | -------: | --------: | ---------------------------------- | ------------------------------------------- |
| 59.8% |  339 MiB | 3,529,104 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| 37.5% |  213 MiB | 2,233,556 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  2.6% | 14.9 MiB |    88,994 | `require`                          | `node:internal/modules/helpers`             |
|  0.1% |  512 KiB |    16,385 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)

|     % |     Size |   Samples | Callee             | Location                                               |
| ----: | -------: | --------: | ------------------ | ------------------------------------------------------ |
| 99.7% |  562 MiB | 5,802,916 | `typeCheckProject` | `tsc-workload.mjs`                                     |
|  0.3% | 1.46 MiB |         1 | `profile`          | `node_modules/@datadog/pprof/out/src/heap-profiler.js` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Samples | Callee                 | Location                                    |
| -----: | ------: | --------: | ---------------------- | ------------------------------------------- |
| 100.0% | 348 MiB | 3,593,223 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js` |

##### `createProgram` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size |   Samples | Callee    | Location                                    |
| ----: | ------: | --------: | --------- | ------------------------------------------- |
| 75.7% | 162 MiB | 1,690,894 | `forEach` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`)

|    % |  Size | Samples | Callee               | Location                                    |
| ---: | ----: | ------: | -------------------- | ------------------------------------------- |
| 1.0% | 1 MiB |  21,846 | `combineTypeMappers` | `node_modules/typescript/lib/typescript.js` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Samples | Callee              | Location                                    |
| ----: | -------: | ------: | ------------------- | ------------------------------------------- |
| 30.0% | 13.5 MiB | 157,821 | `createSymbolTable` | `node_modules/typescript/lib/typescript.js` |
|  5.6% |  2.5 MiB |   7,594 | `set`               | `<unknown>`                                 |

##### `Map` (`<unknown>`)

|    % |    Size | Samples | Callee | Location    |
| ---: | ------: | ------: | ------ | ----------- |
| 1.2% | 560 KiB |      10 | `set`  | `<unknown>` |

##### `instantiateSignature` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Samples | Callee              | Location                                    |
| ----: | -------: | ------: | ------------------- | ------------------------------------------- |
| 24.1% | 10.5 MiB | 180,394 | `instantiateSymbol` | `node_modules/typescript/lib/typescript.js` |

##### `parseIdentifierName` (`node_modules/typescript/lib/typescript.js`)

|    % |     Size | Samples | Callee | Location    |
| ---: | -------: | ------: | ------ | ----------- |
| 8.7% | 2.25 MiB |     569 | `set`  | `<unknown>` |

##### `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js`)

|    % |    Size | Samples | Callee                    | Location                                    |
| ---: | ------: | ------: | ------------------------- | ------------------------------------------- |
| 2.2% | 512 KiB |   1,561 | `makeCompositeTypeMapper` | `node_modules/typescript/lib/typescript.js` |

##### `createIdentifier` (`node_modules/typescript/lib/typescript.js`)

|    % |    Size | Samples | Callee | Location    |
| ---: | ------: | ------: | ------ | ----------- |
| 3.0% | 560 KiB |      10 | `set`  | `<unknown>` |

##### `require` (`node:internal/modules/helpers`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 14.9 MiB |  88,994 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `profile` (`node_modules/@datadog/pprof/out/src/heap-profiler.js`)

|      % |     Size | Samples | Callee      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 1.46 MiB |       1 | `v8Profile` | `node_modules/@datadog/pprof/out/src/heap-profiler.js` |

##### `getParsedCommandLineOfConfigFile` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Samples | Callee                                 | Location                                    |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------------------- |
| 100.0% | 512 KiB |  16,385 | `parseJsonSourceFileConfigFileContent` | `node_modules/typescript/lib/typescript.js` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |     Size |   Samples | Call stack                                                                                                                                                                                                     |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18.9% |  138 MiB | 1,401,333 | `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                                |
| 18.5% |  135 MiB | 1,220,677 | `createProgram` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                                         |
|  6.6% |   48 MiB |   834,867 | `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`) ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                          |
|  5.7% |   42 MiB |    15,621 | `set` ← `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                        |
|  4.0% |   29 MiB |   431,006 | `declareSymbol` (`node_modules/typescript/lib/typescript.js`) ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                              |
|  2.9% | 21.5 MiB |   201,319 | `parseIdentifierName` (`node_modules/typescript/lib/typescript.js`) ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                 |
|  2.9% |   21 MiB |   274,249 | `Map` ← `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                        |
|  2.7% |   20 MiB |   486,095 | `createNodeArray` (`node_modules/typescript/lib/typescript.js`) ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                     |
|  2.7% | 19.5 MiB |   141,992 | `instantiateSignature` (`node_modules/typescript/lib/typescript.js`) ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                       |
|  2.3% | 16.5 MiB |   154,500 | `createIdentifier` (`node_modules/typescript/lib/typescript.js`) ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                    |
|  2.3% | 16.5 MiB |   167,497 | `createParameterDeclaration` (`node_modules/typescript/lib/typescript.js`) ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                          |
|  2.0% |   15 MiB |   110,029 | `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js`) ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                   |
|  2.0% | 14.4 MiB |    88,984 | `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                                                           |
|  1.8% | 13.5 MiB |   157,821 | `Map` ← `declareSymbol` (`node_modules/typescript/lib/typescript.js`) ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                      |
|  0.8% |  5.5 MiB |    91,445 | `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`) ← `instantiateSignature` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) |
|  0.7% |    5 MiB |    88,949 | `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`) ← `instantiateSignature`                                                                                                                     |
|  0.3% |  2.5 MiB |    12,605 | `instantiateSignature` (`node_modules/typescript/lib/typescript.js`) ← `getSemanticDiagnostics`                                                                                                                |
|  0.3% |    2 MiB |     5,608 | `set` ← `declareSymbol` (`node_modules/typescript/lib/typescript.js`) ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                      |
|  0.3% |    2 MiB |    27,967 | `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`)                                                                                               |
|  0.2% | 1.75 MiB |         8 | `set` ← `parseIdentifierName` (`node_modules/typescript/lib/typescript.js`) ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                         |

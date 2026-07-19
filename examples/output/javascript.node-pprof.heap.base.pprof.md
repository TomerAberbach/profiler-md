# Heap profile

Allocated 927 MiB over 10,093,789 samples (96.3 B per sample).

| Category    |     % |    Size |   Samples |
| ----------- | ----: | ------: | --------: |
| third-party | 76.8% | 712 MiB | 8,842,365 |
| stdlib      | 23.2% | 215 MiB | 1,251,424 |

Hidden functions account for 99.9% of bytes allocated, so the hottest are also shown.

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size |   Samples | Function                   | Location                                    |
| ----: | -------: | --------: | -------------------------- | ------------------------------------------- |
| 12.9% |  120 MiB | 1,999,948 | `instantiateSymbol`        | `node_modules/typescript/lib/typescript.js` |
|  9.3% | 86.4 MiB |    46,472 | `set`                      | `<unknown>`                                 |
|  7.3% | 67.5 MiB |   763,246 | `Map`                      | `<unknown>`                                 |
|  5.0% | 46.5 MiB |   435,406 | `createBaseIdentifierNode` | `node_modules/typescript/lib/typescript.js` |
|  3.7% | 34.5 MiB |   573,008 | `declareSymbol`            | `node_modules/typescript/lib/typescript.js` |
|  3.0% | 27.5 MiB |   660,864 | `createNodeArray`          | `node_modules/typescript/lib/typescript.js` |
|  2.8% |   26 MiB |   169,039 | `instantiateSignature`     | `node_modules/typescript/lib/typescript.js` |
|  2.7% |   25 MiB |   203,768 | `instantiateAnonymousType` | `node_modules/typescript/lib/typescript.js` |
|  2.5% | 23.5 MiB |   171,131 | `createBaseNode`           | `node_modules/typescript/lib/typescript.js` |
|  2.2% | 20.5 MiB |   217,085 | `instantiateTypes`         | `node_modules/typescript/lib/typescript.js` |
|  0.1% |  512 KiB |     5,958 | `createProgram`            | `node_modules/typescript/lib/typescript.js` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Samples | Location                                          |
| -----: | ------: | --------: | ------------------------------------------------- |
| 100.0% | 120 MiB | 1,999,948 | `node_modules/typescript/lib/typescript.js:62092` |

##### `createBaseIdentifierNode` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Samples | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 46.5 MiB | 435,406 | `node_modules/typescript/lib/typescript.js:29227` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Samples | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 34.5 MiB | 573,008 | `node_modules/typescript/lib/typescript.js:42491` |

##### `createNodeArray` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Samples | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 27.5 MiB | 660,864 | `node_modules/typescript/lib/typescript.js:30064` |

##### `instantiateSignature` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Samples | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 26 MiB | 169,039 | `node_modules/typescript/lib/typescript.js:62067` |

##### `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Samples | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 25 MiB | 203,768 | `node_modules/typescript/lib/typescript.js:62289` |

##### `createBaseNode` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Samples | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 23.5 MiB | 171,131 | `node_modules/typescript/lib/typescript.js:29248` |

##### `instantiateTypes` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Samples | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 20.5 MiB | 217,085 | `node_modules/typescript/lib/typescript.js:61974` |

##### `createProgram` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Samples | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 512 KiB |   5,958 | `node_modules/typescript/lib/typescript.js:120478` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size |   Samples | Caller                     | Location                                    |
| ----: | ------: | --------: | -------------------------- | ------------------------------------------- |
| 84.6% | 102 MiB | 1,717,179 | `resolveObjectTypeMembers` | `node_modules/typescript/lib/typescript.js` |
|  7.9% | 9.5 MiB |   131,087 | `instantiateSignature`     | `node_modules/typescript/lib/typescript.js` |

##### `set` (`<unknown>`)

|     % |     Size | Samples | Caller                     | Location                                    |
| ----: | -------: | ------: | -------------------------- | ------------------------------------------- |
| 25.5% | 22.1 MiB |  13,413 | `resolveObjectTypeMembers` | `node_modules/typescript/lib/typescript.js` |
| 21.5% | 18.6 MiB |  10,373 | `addInheritedMembers`      | `node_modules/typescript/lib/typescript.js` |
|  4.6% |    4 MiB |   8,067 | `declareSymbol`            | `node_modules/typescript/lib/typescript.js` |

##### `Map` (`<unknown>`)

|     % |     Size | Samples | Caller              | Location                                    |
| ----: | -------: | ------: | ------------------- | ------------------------------------------- |
| 80.7% | 54.5 MiB | 608,871 | `createSymbolTable` | `node_modules/typescript/lib/typescript.js` |

##### `createBaseIdentifierNode` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Samples | Caller             | Location                                    |
| ----: | -------: | ------: | ------------------ | ------------------------------------------- |
| 74.2% | 34.5 MiB | 323,043 | `createIdentifier` | `node_modules/typescript/lib/typescript.js` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |   Size | Samples | Caller                             | Location                                    |
| ----: | -----: | ------: | ---------------------------------- | ------------------------------------------- |
| 72.5% | 25 MiB | 422,265 | `declareSymbolAndAddToSymbolTable` | `node_modules/typescript/lib/typescript.js` |

##### `createNodeArray` (`node_modules/typescript/lib/typescript.js`)

|     % |   Size | Samples | Caller               | Location                                    |
| ----: | -----: | ------: | -------------------- | ------------------------------------------- |
| 50.9% | 14 MiB | 365,930 | `parseDelimitedList` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateSignature` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Samples | Caller            | Location                                    |
| ----: | -------: | ------: | ----------------- | ------------------------------------------- |
| 90.4% | 23.5 MiB | 155,505 | `instantiateList` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Size | Samples | Caller                       | Location                                    |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| 92.0% | 23 MiB | 187,679 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js` |

##### `createBaseNode` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Samples | Caller                  | Location                                    |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 40.4% | 9.5 MiB |  69,181 | `createBaseDeclaration` | `node_modules/typescript/lib/typescript.js` |
| 19.1% | 4.5 MiB |  32,770 | `createUnionTypeNode`   | `node_modules/typescript/lib/typescript.js` |
|  6.4% | 1.5 MiB |  10,923 | `createBaseNode`        | `node_modules/typescript/lib/typescript.js` |

##### `instantiateTypes` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Samples | Caller                  | Location                                    |
| -----: | -------: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 20.5 MiB | 217,085 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js` |

##### `createProgram` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Samples | Caller             | Location           |
| -----: | ------: | ------: | ------------------ | ------------------ |
| 100.0% | 512 KiB |   5,958 | `typeCheckProject` | `tsc-workload.mjs` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size |   Samples | Function                           | Location                                               |
| ----: | -------: | --------: | ---------------------------------- | ------------------------------------------------------ |
| 77.9% |  723 MiB | 7,813,936 | `typeCheckProject`                 | `tsc-workload.mjs`                                     |
| 77.5% |  718 MiB | 7,728,122 | `(anonymous)`                      | `datadog-pprof-heap.mjs:1:1`                           |
| 48.4% |  449 MiB | 4,946,952 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js`            |
| 29.1% |  270 MiB | 2,922,784 | `createProgram`                    | `node_modules/typescript/lib/typescript.js`            |
| 13.0% |  121 MiB | 2,021,794 | `instantiateSymbol`                | `node_modules/typescript/lib/typescript.js`            |
| 11.0% |  102 MiB | 1,134,151 | `instantiateTypes`                 | `node_modules/typescript/lib/typescript.js`            |
|  9.3% | 86.4 MiB |    46,472 | `set`                              | `<unknown>`                                            |
|  7.3% |   68 MiB |   892,692 | `declareSymbol`                    | `node_modules/typescript/lib/typescript.js`            |
|  7.3% | 67.5 MiB |   763,246 | `Map`                              | `<unknown>`                                            |
|  5.0% | 46.5 MiB |   435,406 | `createBaseIdentifierNode`         | `node_modules/typescript/lib/typescript.js`            |
|  4.7% |   44 MiB |   448,585 | `instantiateSignature`             | `node_modules/typescript/lib/typescript.js`            |
|  3.0% | 27.5 MiB |   660,864 | `createNodeArray`                  | `node_modules/typescript/lib/typescript.js`            |
|  2.9% | 26.5 MiB |   232,896 | `instantiateAnonymousType`         | `node_modules/typescript/lib/typescript.js`            |
|  2.5% | 23.5 MiB |   171,131 | `createBaseNode`                   | `node_modules/typescript/lib/typescript.js`            |
|  1.4% | 13.2 MiB |    92,999 | `require`                          | `node:internal/modules/helpers`                        |
|  0.2% | 1.46 MiB |         1 | `profile`                          | `node_modules/@datadog/pprof/out/src/heap-profiler.js` |
|  0.1% |  514 KiB |       163 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js`            |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |     Size |   Samples | Callee                             | Location                                    |
| ----: | -------: | --------: | ---------------------------------- | ------------------------------------------- |
| 61.2% |  442 MiB | 4,830,657 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| 36.9% |  267 MiB | 2,890,117 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  1.8% | 13.2 MiB |    92,999 | `require`                          | `node:internal/modules/helpers`             |
|  0.1% |  514 KiB |       163 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)

|     % |     Size |   Samples | Callee             | Location                                               |
| ----: | -------: | --------: | ------------------ | ------------------------------------------------------ |
| 99.8% |  717 MiB | 7,728,121 | `typeCheckProject` | `tsc-workload.mjs`                                     |
|  0.2% | 1.46 MiB |         1 | `profile`          | `node_modules/@datadog/pprof/out/src/heap-profiler.js` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Samples | Callee                 | Location                                    |
| -----: | ------: | --------: | ---------------------- | ------------------------------------------- |
| 100.0% | 449 MiB | 4,946,952 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js` |

##### `createProgram` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size |   Samples | Callee    | Location                                    |
| ----: | ------: | --------: | --------- | ------------------------------------------- |
| 72.8% | 196 MiB | 2,156,038 | `forEach` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`)

|    % |  Size | Samples | Callee               | Location                                    |
| ---: | ----: | ------: | -------------------- | ------------------------------------------- |
| 0.8% | 1 MiB |  21,846 | `combineTypeMappers` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateTypes` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Samples | Callee            | Location                                    |
| ----: | -------: | ------: | ----------------- | ------------------------------------------- |
| 84.3% | 85.8 MiB | 969,496 | `instantiateType` | `node_modules/typescript/lib/typescript.js` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |   Size | Samples | Callee              | Location                                    |
| ----: | -----: | ------: | ------------------- | ------------------------------------------- |
| 36.8% | 25 MiB | 275,972 | `createSymbolTable` | `node_modules/typescript/lib/typescript.js` |
|  5.9% |  4 MiB |   8,067 | `set`               | `<unknown>`                                 |

##### `instantiateSignature` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Samples | Callee              | Location                                    |
| ----: | ------: | ------: | ------------------- | ------------------------------------------- |
| 21.6% | 9.5 MiB | 131,087 | `instantiateSymbol` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js`)

|    % |  Size | Samples | Callee                    | Location                                    |
| ---: | ----: | ------: | ------------------------- | ------------------------------------------- |
| 3.8% | 1 MiB |  21,846 | `makeCompositeTypeMapper` | `node_modules/typescript/lib/typescript.js` |

##### `createBaseNode` (`node_modules/typescript/lib/typescript.js`)

|    % |    Size | Samples | Callee           | Location                                    |
| ---: | ------: | ------: | ---------------- | ------------------------------------------- |
| 6.4% | 1.5 MiB |  10,923 | `createBaseNode` | `node_modules/typescript/lib/typescript.js` |

##### `require` (`node:internal/modules/helpers`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 13.2 MiB |  92,999 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `profile` (`node_modules/@datadog/pprof/out/src/heap-profiler.js`)

|      % |     Size | Samples | Callee      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 1.46 MiB |       1 | `v8Profile` | `node_modules/@datadog/pprof/out/src/heap-profiler.js` |

##### `getParsedCommandLineOfConfigFile` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Samples | Callee                                 | Location                                    |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------------------- |
| 100.0% | 514 KiB |     163 | `parseJsonSourceFileConfigFileContent` | `node_modules/typescript/lib/typescript.js` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |     Size |   Samples | Call stack                                                                                                                                                                                                        |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18.8% |  174 MiB | 1,689,181 | `createProgram` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                                            |
| 15.0% |  139 MiB | 1,480,208 | `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                                   |
|  7.8% |   72 MiB | 1,188,170 | `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`) ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                             |
|  4.7% | 43.9 MiB |    23,230 | `set` ← `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                           |
|  4.6% |   43 MiB |   402,632 | `createBaseIdentifierNode` (`node_modules/typescript/lib/typescript.js`) ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                               |
|  3.9% | 36.5 MiB |   566,347 | `declareSymbol` (`node_modules/typescript/lib/typescript.js`) ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                 |
|  3.1% |   29 MiB |   323,416 | `instantiateTypes` (`node_modules/typescript/lib/typescript.js`) ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                              |
|  2.8% | 25.5 MiB |   279,429 | `Map` ← `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                           |
|  2.7% |   25 MiB |   619,900 | `createNodeArray` (`node_modules/typescript/lib/typescript.js`) ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                        |
|  2.6% | 24.5 MiB |   285,457 | `Map` ← `declareSymbol` (`node_modules/typescript/lib/typescript.js`) ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                         |
|  2.1% | 19.5 MiB |   150,358 | `instantiateSignature` (`node_modules/typescript/lib/typescript.js`) ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                          |
|  2.1% | 19.5 MiB |   142,003 | `createBaseNode` (`node_modules/typescript/lib/typescript.js`) ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                         |
|  1.4% | 12.7 MiB |    89,549 | `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                                                              |
|  1.3% |   12 MiB |   176,600 | `instantiateTypes` (`node_modules/typescript/lib/typescript.js`) ← `instantiateTypes` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)         |
|  1.2% | 11.5 MiB |    89,371 | `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js`) ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                      |
|  0.8% |    7 MiB |    78,872 | `instantiateTypes` (`node_modules/typescript/lib/typescript.js`) ← `instantiateTypes`                                                                                                                             |
|  0.6% |  5.5 MiB |    76,779 | `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`) ← `instantiateSignature` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)    |
|  0.6% |  5.1 MiB |     2,315 | `set` ← `instantiateTypes` (`node_modules/typescript/lib/typescript.js`)                                                                                                                                          |
|  0.5% |  4.5 MiB |    58,990 | `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`) ← `instantiateSignature`                                                                                                                        |
|  0.5% |  4.5 MiB |    40,119 | `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js`) ← `instantiateTypes` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) |

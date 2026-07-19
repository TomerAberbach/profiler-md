# Wall time profile

Took 16.89s over 13,495 samples (1.3ms per sample).

| Category    |     % |   Time | Samples |
| ----------- | ----: | -----: | ------: |
| third-party | 86.7% | 14.64s |  11,699 |
| stdlib      | 13.3% |  2.24s |   1,796 |

Hidden functions account for 100.0% of wall time spent, so the hottest are also shown.

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                        | Location                                    |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------- |
| 11.4% |   1.93s |   1,542 | `(garbage collector)`           | `<unknown>`                                 |
|  2.9% | 497.0ms |     397 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js` |
|  2.7% | 452.0ms |     361 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js` |
|  2.1% | 359.3ms |     287 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js` |
|  2.1% | 350.6ms |     280 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
|  1.8% | 305.5ms |     244 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js` |
|  1.7% | 291.7ms |     233 | `scan`                          | `node_modules/typescript/lib/typescript.js` |
|  1.3% | 226.6ms |     181 | `some`                          | `node_modules/typescript/lib/typescript.js` |
|  1.1% | 190.3ms |     152 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js` |
|  0.9% | 155.2ms |     124 | `getNodeLinks`                  | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 137.7ms |     110 | `createTypeReference`           | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 130.2ms |     104 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 120.2ms |      96 | `invokeOnce`                    | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 118.9ms |      95 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 117.7ms |      94 | `getSymbolLinks`                | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 115.2ms |      92 | `getPropertyOfType`             | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 110.2ms |      88 | `instantiateType`               | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 108.9ms |      87 | `bind`                          | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 103.9ms |      83 | `getIntersectionType`           | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 102.7ms |      82 | `getReducedApparentType`        | `node_modules/typescript/lib/typescript.js` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 497.0ms |     397 | `node_modules/typescript/lib/typescript.js:64383` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 452.0ms |     361 | `node_modules/typescript/lib/typescript.js:63505` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 359.3ms |     287 | `node_modules/typescript/lib/typescript.js:62119` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 350.6ms |     280 | `node_modules/typescript/lib/typescript.js:63813` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 305.5ms |     244 | `node_modules/typescript/lib/typescript.js:62354` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 291.7ms |     233 | `node_modules/typescript/lib/typescript.js:10327` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                        |
| -----: | ------: | ------: | ----------------------------------------------- |
| 100.0% | 226.6ms |     181 | `node_modules/typescript/lib/typescript.js:468` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 190.3ms |     152 | `node_modules/typescript/lib/typescript.js:56402` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 155.2ms |     124 | `node_modules/typescript/lib/typescript.js:47543` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 137.7ms |     110 | `node_modules/typescript/lib/typescript.js:58882` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 130.2ms |     104 | `node_modules/typescript/lib/typescript.js:64597` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 120.2ms |      96 | `node_modules/typescript/lib/typescript.js:67401` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 118.9ms |      95 | `node_modules/typescript/lib/typescript.js:67214` |

##### `getSymbolLinks` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 117.7ms |      94 | `node_modules/typescript/lib/typescript.js:47537` |

##### `getPropertyOfType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 115.2ms |      92 | `node_modules/typescript/lib/typescript.js:58110` |

##### `instantiateType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 110.2ms |      88 | `node_modules/typescript/lib/typescript.js:62327` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 108.9ms |      87 | `node_modules/typescript/lib/typescript.js:44000` |

##### `getIntersectionType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 103.9ms |      83 | `node_modules/typescript/lib/typescript.js:60458` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 102.7ms |      82 | `node_modules/typescript/lib/typescript.js:57866` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller               | Location                                    |
| ----: | ------: | ------: | -------------------- | ------------------------------------------- |
| 99.0% | 492.0ms |     393 | `isRelatedTo`        | `node_modules/typescript/lib/typescript.js` |
|  0.5% |   2.5ms |       2 | `checkTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller            | Location                                    |
| ----: | ------: | ------: | ----------------- | ------------------------------------------- |
| 97.5% | 440.7ms |     352 | `isTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                  | Location                                    |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 99.7% | 358.1ms |     286 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                          | Location                                    |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------- |
| 55.0% | 192.8ms |     154 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js` |
|  2.1% |   7.5ms |       6 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                       | Location                                    |
| ----: | ------: | ------: | ---------------------------- | ------------------------------------------- |
| 99.2% | 303.0ms |     242 | `instantiateTypeWithAlias`   | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                  | Location                                    |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 99.1% | 289.2ms |     231 | `nextTokenWithoutCheck` | `node_modules/typescript/lib/typescript.js` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                                 | Location                                    |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------------------- |
| 47.0% | 106.4ms |      85 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
|  7.2% |  16.3ms |      13 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js` |
|  0.6% |   1.3ms |       1 | `some`                                 | `node_modules/typescript/lib/typescript.js` |
|  0.6% |   1.3ms |       1 | `instantiateTypeWorker`                | `node_modules/typescript/lib/typescript.js` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                     | Location                                    |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------- |
| 98.7% | 187.8ms |     150 | `resolveObjectTypeMembers` | `node_modules/typescript/lib/typescript.js` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                       | Location                                    |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| 29.8% | 46.3ms |      37 | `hasSkipDirectInferenceFlag` | `node_modules/typescript/lib/typescript.js` |
| 21.8% | 33.8ms |      27 | `getResolvedSymbol`          | `node_modules/typescript/lib/typescript.js` |
| 15.3% | 23.8ms |      19 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                          | Location                                    |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------- |
| 61.8% | 85.1ms |      68 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js` |
|  0.9% |  1.3ms |       1 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                    | Location                                    |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------- |
| 99.0% | 129.0ms |     103 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |
|  1.0% |   1.3ms |       1 | `recursiveTypeRelatedTo`  | `node_modules/typescript/lib/typescript.js` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Caller           | Location                                    |
| -----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 100.0% | 120.2ms |      96 | `inferFromTypes` | `node_modules/typescript/lib/typescript.js` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                    |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| 22.1% | 26.3ms |      21 | `inferFromContravariantTypes` | `node_modules/typescript/lib/typescript.js` |
| 16.8% | 20.0ms |      16 | `inferFromTypeArguments`      | `node_modules/typescript/lib/typescript.js` |
| 12.6% | 15.0ms |      12 | `applyToReturnTypes`          | `node_modules/typescript/lib/typescript.js` |
|  8.4% | 10.0ms |       8 | `inferFromTypes`              | `node_modules/typescript/lib/typescript.js` |

##### `getSymbolLinks` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                   | Location                                    |
| ----: | -----: | ------: | ---------------------------------------- | ------------------------------------------- |
| 23.4% | 27.5ms |      22 | `getTypeOfVariableOrParameterOrProperty` | `node_modules/typescript/lib/typescript.js` |
| 19.1% | 22.5ms |      18 | `getResolvedMembersOrExportsOfSymbol`    | `node_modules/typescript/lib/typescript.js` |
| 16.0% | 18.8ms |      15 | `instantiateSymbol`                      | `node_modules/typescript/lib/typescript.js` |
|  1.1% |  1.3ms |       1 | `structuredTypeRelatedToWorker`          | `node_modules/typescript/lib/typescript.js` |
|  1.1% |  1.3ms |       1 | `inferFromTypes`                         | `node_modules/typescript/lib/typescript.js` |

##### `getPropertyOfType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                         | Location                                    |
| ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------- |
| 25.0% | 28.8ms |      23 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |
| 22.8% | 26.3ms |      21 | `getUnmatchedProperties`                       | `node_modules/typescript/lib/typescript.js` |
| 18.5% | 21.3ms |      17 | `createUnionOrIntersectionProperty`            | `node_modules/typescript/lib/typescript.js` |

##### `instantiateType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                  | Location                                    |
| ----: | -----: | ------: | ----------------------- | ------------------------------------------- |
| 48.9% | 53.8ms |      43 | `instantiateList`       | `node_modules/typescript/lib/typescript.js` |
| 11.4% | 12.5ms |      10 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller       | Location                                    |
| ----: | -----: | ------: | ------------ | ------------------------------------------- |
| 36.8% | 40.1ms |      32 | `visitNode2` | `node_modules/typescript/lib/typescript.js` |
| 35.6% | 38.8ms |      31 | `forEach`    | `node_modules/typescript/lib/typescript.js` |

##### `getIntersectionType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                  | Location                                    |
| ----: | -----: | ------: | ----------------------- | ------------------------------------------- |
| 75.9% | 78.9ms |      63 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js` |
|  2.4% |  2.5ms |       2 | `inferFromTypes`        | `node_modules/typescript/lib/typescript.js` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                | Location                                    |
| ----: | -----: | ------: | --------------------- | ------------------------------------------- |
| 50.0% | 51.3ms |      41 | `getSignaturesOfType` | `node_modules/typescript/lib/typescript.js` |
| 43.9% | 45.1ms |      36 | `getPropertyOfType`   | `node_modules/typescript/lib/typescript.js` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |    Time | Samples | Function                        | Location                                    |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------- |
| 87.4% |  14.76s |  11,797 | `typeCheckProject`              | `tsc-workload.mjs`                          |
| 87.4% |  14.76s |  11,797 | `(anonymous)`                   | `datadog-pprof.mjs`                         |
| 75.8% |  12.80s |  10,231 | `getSemanticDiagnostics`        | `node_modules/typescript/lib/typescript.js` |
| 34.8% |   5.87s |   4,694 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js` |
| 32.2% |   5.43s |   4,345 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
| 27.8% |   4.69s |   3,753 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js` |
| 26.2% |   4.42s |   3,538 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js` |
| 19.1% |   3.23s |   2,581 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js` |
| 19.1% |   3.21s |   2,571 | `instantiateType`               | `node_modules/typescript/lib/typescript.js` |
| 15.9% |   2.69s |   2,151 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js` |
| 14.6% |   2.45s |   1,964 | `invokeOnce`                    | `node_modules/typescript/lib/typescript.js` |
| 11.4% |   1.93s |   1,542 | `(garbage collector)`           | `<unknown>`                                 |
| 10.8% |   1.81s |   1,453 | `createProgram`                 | `node_modules/typescript/lib/typescript.js` |
| 10.2% |   1.72s |   1,374 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js` |
|  4.6% | 783.8ms |     626 | `bind`                          | `node_modules/typescript/lib/typescript.js` |
|  4.4% | 749.9ms |     599 | `getPropertyOfType`             | `node_modules/typescript/lib/typescript.js` |
|  3.6% | 612.2ms |     489 | `some`                          | `node_modules/typescript/lib/typescript.js` |
|  2.8% | 468.2ms |     374 | `getReducedApparentType`        | `node_modules/typescript/lib/typescript.js` |
|  2.2% | 378.1ms |     302 | `scan`                          | `node_modules/typescript/lib/typescript.js` |
|  1.7% | 295.5ms |     236 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

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

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                    |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 12.80s |  10,231 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                   | Location                                    |
| ----: | ----: | ------: | ------------------------ | ------------------------------------------- |
| 92.5% | 5.43s |   4,344 | `isRelatedTo`            | `node_modules/typescript/lib/typescript.js` |
| <0.1% | 2.5ms |       2 | `recursiveTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                   | Location                                    |
| ----: | ----: | ------: | ------------------------ | ------------------------------------------- |
| 86.3% | 4.69s |   3,751 | `recursiveTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |
| <0.1% | 1.3ms |       1 | `isRelatedTo`            | `node_modules/typescript/lib/typescript.js` |
| <0.1% | 1.3ms |       1 | `createTypeReference`    | `node_modules/typescript/lib/typescript.js` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                          | Location                                    |
| ----: | ----: | ------: | ------------------------------- | ------------------------------------------- |
| 95.0% | 4.46s |   3,566 | `structuredTypeRelatedTo`       | `node_modules/typescript/lib/typescript.js` |
| <0.1% | 1.3ms |       1 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                | Location                                    |
| ----: | ------: | ------: | --------------------- | ------------------------------------------- |
| 82.6% |   3.66s |   2,924 | `propertiesRelatedTo` | `node_modules/typescript/lib/typescript.js` |
| 73.1% |   3.23s |   2,585 | `signaturesRelatedTo` | `node_modules/typescript/lib/typescript.js` |
| 16.4% | 727.4ms |     581 | `isRelatedTo`         | `node_modules/typescript/lib/typescript.js` |
|  0.1% |   2.5ms |       2 | `instantiateType`     | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `getSymbolLinks`      | `node_modules/typescript/lib/typescript.js` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                       | Location                                    |
| ----: | ------: | ------: | ---------------------------- | ------------------------------------------- |
| 67.8% |   2.18s |   1,749 | `instantiateTypes`           | `node_modules/typescript/lib/typescript.js` |
| 52.5% |   1.69s |   1,354 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js` |
|  8.2% | 264.2ms |     211 | `instantiateType`            | `node_modules/typescript/lib/typescript.js` |
|  3.6% | 115.2ms |      92 | `getIntersectionType`        | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `some`                       | `node_modules/typescript/lib/typescript.js` |

##### `instantiateType` (`node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                     | Location                                    |
| ----: | ----: | ------: | -------------------------- | ------------------------------------------- |
| 99.6% | 3.20s |   2,561 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                | Location                                    |
| ----: | ------: | ------: | --------------------- | ------------------------------------------- |
| 91.3% |   2.45s |   1,964 | `invokeOnce`          | `node_modules/typescript/lib/typescript.js` |
|  4.8% | 129.0ms |     103 | `inferFromTypes`      | `node_modules/typescript/lib/typescript.js` |
|  0.1% |   2.5ms |       2 | `getIntersectionType` | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `getSymbolLinks`      | `node_modules/typescript/lib/typescript.js` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                 | Location                                    |
| ----: | ----: | ------: | ---------------------- | ------------------------------------------- |
| 96.9% | 2.38s |   1,903 | `inferFromObjectTypes` | `node_modules/typescript/lib/typescript.js` |

##### `createProgram` (`node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee    | Location                                    |
| ----: | ----: | ------: | --------- | ------------------------------------------- |
| 81.1% | 1.47s |   1,179 | `forEach` | `node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                  | Location                                    |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 54.1% | 930.2ms |     743 | `map`                   | `node_modules/typescript/lib/typescript.js` |
| 47.5% | 816.3ms |     652 | `instantiateMappedType` | `node_modules/typescript/lib/typescript.js` |
|  1.5% |  25.0ms |      20 | `some`                  | `node_modules/typescript/lib/typescript.js` |
|  1.5% |  25.0ms |      20 | `getNodeLinks`          | `node_modules/typescript/lib/typescript.js` |
|  0.1% |   1.3ms |       1 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee          | Location                                    |
| ----: | ------: | ------: | --------------- | ------------------------------------------- |
| 98.1% | 768.7ms |     614 | `bindContainer` | `node_modules/typescript/lib/typescript.js` |
| 55.6% | 435.7ms |     348 | `bindChildren`  | `node_modules/typescript/lib/typescript.js` |

##### `getPropertyOfType` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                         | Location                                    |
| ----: | ------: | ------: | ------------------------------ | ------------------------------------------- |
| 46.2% | 346.8ms |     277 | `getReducedApparentType`       | `node_modules/typescript/lib/typescript.js` |
| 35.4% | 265.4ms |     212 | `resolveStructuredTypeMembers` | `node_modules/typescript/lib/typescript.js` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                       | Location                                              |
| ----: | ------: | ------: | ---------------------------- | ----------------------------------------------------- |
| 34.2% | 209.1ms |     167 | `isEmptyAnonymousObjectType` | `node_modules/typescript/lib/typescript.js`           |
|  8.2% |  50.1ms |      40 | `(anonymous)`                | `node_modules/typescript/lib/typescript.js:62136:289` |
|  0.2% |   1.3ms |       1 | `some`                       | `node_modules/typescript/lib/typescript.js`           |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee           | Location                                    |
| ----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 72.2% | 338.0ms |     270 | `getReducedType` | `node_modules/typescript/lib/typescript.js` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee           | Location                                    |
| ----: | -----: | ------: | ---------------- | ------------------------------------------- |
| 10.6% | 40.1ms |      32 | `scanIdentifier` | `node_modules/typescript/lib/typescript.js` |
|  3.3% | 12.5ms |      10 | `scanString`     | `node_modules/typescript/lib/typescript.js` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee              | Location                                    |
| ----: | -----: | ------: | ------------------- | ------------------------------------------- |
| 33.1% | 97.7ms |      78 | `instantiateSymbol` | `node_modules/typescript/lib/typescript.js` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                           |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 20.3% |   3.42s |   2,733 | `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`)                                                                                                                                                                                                                                                               |
|  8.6% |   1.44s |   1,154 | `createProgram` (`node_modules/typescript/lib/typescript.js`)                                                                                                                                                                                                                                                                        |
|  2.3% | 394.4ms |     315 | `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`) ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `structuredTypeRelatedToWorker` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `getSemanticDiagnostics`                                                                              |
|  2.2% | 374.3ms |     299 | `scan` (`node_modules/typescript/lib/typescript.js`) ← `createProgram`                                                                                                                                                                                                                                                               |
|  2.0% | 339.3ms |     271 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `inferFromTypes` ← `invokeOnce` ← `inferFromTypes` ← `invokeOnce` ← `inferFromTypes` ← `getSemanticDiagnostics`                                                                                                                                                 |
|  1.7% | 291.7ms |     233 | `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`) ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `structuredTypeRelatedToWorker` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `structuredTypeRelatedToWorker` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `getSemanticDiagnostics` |
|  1.5% | 261.7ms |     209 | `some` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `inferFromTypes` ← `invokeOnce` ← `inferFromTypes` ← `invokeOnce` ← `inferFromTypes` ← `getSemanticDiagnostics`                                                                                                                        |
|  1.5% | 249.1ms |     199 | `inferFromTypes` (`node_modules/typescript/lib/typescript.js`) ← `invokeOnce` ← `inferFromTypes` ← `invokeOnce` ← `inferFromTypes` ← `getSemanticDiagnostics`                                                                                                                                                                        |
|  1.4% | 232.9ms |     186 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `inferFromTypes` ← `invokeOnce` ← `inferFromTypes` ← `invokeOnce` ← `inferFromTypes` ← `getSemanticDiagnostics`                                                                                                                                 |
|  1.3% | 221.6ms |     177 | `invokeOnce` (`node_modules/typescript/lib/typescript.js`) ← `inferFromTypes` ← `invokeOnce` ← `inferFromTypes` ← `getSemanticDiagnostics`                                                                                                                                                                                           |
|  1.3% | 214.1ms |     171 | `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`) ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `getSemanticDiagnostics`                                                                                                                                                           |
|  1.0% | 171.5ms |     137 | `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `getSemanticDiagnostics`                                                                                                                                                                                                              |
|  0.9% | 157.8ms |     126 | `bind` (`node_modules/typescript/lib/typescript.js`) ← `bind` ← `bind` ← `bind` ← `getSemanticDiagnostics`                                                                                                                                                                                                                           |
|  0.8% | 139.0ms |     111 | `getPropertyOfType` (`node_modules/typescript/lib/typescript.js`) ← `getSemanticDiagnostics`                                                                                                                                                                                                                                         |
|  0.8% | 139.0ms |     111 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `inferFromTypes` ← `invokeOnce` ← `inferFromTypes` ← `invokeOnce` ← `inferFromTypes` ← `getSemanticDiagnostics`                                                                                                      |
|  0.7% | 122.7ms |      98 | `getNodeLinks` (`node_modules/typescript/lib/typescript.js`) ← `getSemanticDiagnostics`                                                                                                                                                                                                                                              |
|  0.7% | 118.9ms |      95 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `structuredTypeRelatedToWorker` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `structuredTypeRelatedToWorker` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `getSemanticDiagnostics`                                   |
|  0.7% | 111.4ms |      89 | `require` (`node:internal/modules/helpers`)                                                                                                                                                                                                                                                                                          |
|  0.7% | 110.2ms |      88 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `getSemanticDiagnostics`                                                                                                                                                                                                                        |
|  0.7% | 110.2ms |      88 | `invokeOnce` (`node_modules/typescript/lib/typescript.js`) ← `inferFromTypes` ← `invokeOnce` ← `inferFromTypes` ← `invokeOnce` ← `inferFromTypes` ← `getSemanticDiagnostics`                                                                                                                                                         |

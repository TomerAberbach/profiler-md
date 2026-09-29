# Wall time profile

Took 16.05s over 12,800 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 85.3% |  13.69s |  10,924 |
| Garbage collector  | 12.6% |   2.02s |   1,614 |
| Native             |  0.9% | 151.7ms |     121 |
| Standard library   |  0.9% | 139.2ms |     111 |
| Regular expression |  0.2% |  36.4ms |      29 |
| Ours               | <0.1% |   1.3ms |       1 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                               | Location                                    |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------------------- |
| 12.6% |   2.02s |   1,614 | `(garbage collector)`                  | `<unknown>`                                 |
|  3.1% | 497.8ms |     397 | `recursiveTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js` |
|  2.6% | 423.9ms |     338 | `checkTypeRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
|  2.2% | 354.9ms |     283 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js` |
|  2.0% | 314.8ms |     251 | `instantiateTypeWorker`                | `node_modules/typescript/lib/typescript.js` |
|  1.8% | 290.9ms |     232 | `isRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
|  1.7% | 269.6ms |     215 | `scan`                                 | `node_modules/typescript/lib/typescript.js` |
|  1.0% | 164.3ms |     131 | `getNodeLinks`                         | `node_modules/typescript/lib/typescript.js` |
|  0.9% | 137.9ms |     110 | `createTypeReference`                  | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 135.4ms |     108 | `getNormalizedType`                    | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 135.4ms |     108 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 122.9ms |      98 | `createInstantiatedSymbolTable`        | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 119.1ms |      95 | `inferFromTypes`                       | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 116.6ms |      93 | `bind`                                 | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 112.9ms |      90 | `structuredTypeRelatedToWorker`        | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 112.9ms |      90 | `invokeOnce`                           | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 107.8ms |      86 | `getReducedApparentType`               | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 102.8ms |      82 | `getSymbolLinks`                       | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 102.8ms |      82 | `bindWorker`                           | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 101.6ms |      81 | `instantiateType`                      | `node_modules/typescript/lib/typescript.js` |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                               | Location                                    |
| ---: | ------: | ------: | -------------------------------------- | ------------------------------------------- |
| 3.1% | 497.8ms |     397 | `recursiveTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js` |
| 2.6% | 423.9ms |     338 | `checkTypeRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
| 2.2% | 354.9ms |     283 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js` |
| 2.0% | 314.8ms |     251 | `instantiateTypeWorker`                | `node_modules/typescript/lib/typescript.js` |
| 1.8% | 290.9ms |     232 | `isRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
| 1.7% | 269.6ms |     215 | `scan`                                 | `node_modules/typescript/lib/typescript.js` |
| 1.0% | 164.3ms |     131 | `getNodeLinks`                         | `node_modules/typescript/lib/typescript.js` |
| 0.9% | 137.9ms |     110 | `createTypeReference`                  | `node_modules/typescript/lib/typescript.js` |
| 0.8% | 135.4ms |     108 | `getNormalizedType`                    | `node_modules/typescript/lib/typescript.js` |
| 0.8% | 135.4ms |     108 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
| 0.8% | 122.9ms |      98 | `createInstantiatedSymbolTable`        | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 119.1ms |      95 | `inferFromTypes`                       | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 116.6ms |      93 | `bind`                                 | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 112.9ms |      90 | `structuredTypeRelatedToWorker`        | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 112.9ms |      90 | `invokeOnce`                           | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 107.8ms |      86 | `getReducedApparentType`               | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 102.8ms |      82 | `getSymbolLinks`                       | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 102.8ms |      82 | `bindWorker`                           | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 101.6ms |      81 | `instantiateType`                      | `node_modules/typescript/lib/typescript.js` |
| 0.6% |  90.3ms |      72 | `instantiateList`                      | `node_modules/typescript/lib/typescript.js` |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 12.6% | 2.02s |   1,614 | `(garbage collector)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 57.7% | 287.2ms |     229 | `node_modules/typescript/lib/typescript.js:68336` |
|  8.1% |  40.1ms |      32 | `node_modules/typescript/lib/typescript.js:68383` |
|  7.8% |  38.9ms |      31 | `node_modules/typescript/lib/typescript.js:68389` |
|  3.8% |  18.8ms |      15 | `node_modules/typescript/lib/typescript.js:68362` |
|  3.3% |  16.3ms |      13 | `node_modules/typescript/lib/typescript.js:68365` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 63.9% | 270.9ms |     216 | `node_modules/typescript/lib/typescript.js:67445` |
| 26.3% | 111.6ms |      89 | `node_modules/typescript/lib/typescript.js:67464` |
|  6.2% |  26.3ms |      21 | `node_modules/typescript/lib/typescript.js:67528` |
|  0.6% |   2.5ms |       2 | `node_modules/typescript/lib/typescript.js:67525` |
|  0.6% |   2.5ms |       2 | `node_modules/typescript/lib/typescript.js:67463` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 32.9% | 116.6ms |      93 | `node_modules/typescript/lib/typescript.js:66070` |
|  9.2% |  32.6ms |      26 | `node_modules/typescript/lib/typescript.js:66079` |
|  8.1% |  28.8ms |      23 | `node_modules/typescript/lib/typescript.js:66078` |
|  3.9% |  13.8ms |      11 | `node_modules/typescript/lib/typescript.js:2585`  |
|  3.2% |  11.3ms |       9 | `node_modules/typescript/lib/typescript.js:65952` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 53.4% | 168.0ms |     134 | `node_modules/typescript/lib/typescript.js:66299` |
|  6.8% |  21.3ms |      17 | `node_modules/typescript/lib/typescript.js:66294` |
|  6.0% |  18.8ms |      15 | `node_modules/typescript/lib/typescript.js:66312` |
|  4.4% |  13.8ms |      11 | `node_modules/typescript/lib/typescript.js:66293` |
|  4.0% |  12.5ms |      10 | `node_modules/typescript/lib/typescript.js:66283` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 19.4% | 56.4ms |      45 | `node_modules/typescript/lib/typescript.js:67850` |
| 17.7% | 51.4ms |      41 | `node_modules/typescript/lib/typescript.js:67783` |
| 11.6% | 33.9ms |      27 | `node_modules/typescript/lib/typescript.js:67753` |
|  8.2% | 23.8ms |      19 | `node_modules/typescript/lib/typescript.js:67410` |
|  5.6% | 16.3ms |      13 | `node_modules/typescript/lib/typescript.js:21226` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 13.0% | 35.1ms |      28 | `node_modules/typescript/lib/typescript.js:14635` |
| 12.6% | 33.9ms |      27 | `node_modules/typescript/lib/typescript.js:12915` |
|  8.8% | 23.8ms |      19 | `node_modules/typescript/lib/typescript.js:13387` |
|  5.6% | 15.0ms |      12 | `node_modules/typescript/lib/typescript.js:13077` |
|  4.2% | 11.3ms |       9 | `node_modules/typescript/lib/typescript.js:12895` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 96.9% | 159.3ms |     127 | `node_modules/typescript/lib/typescript.js:51501` |
|  2.3% |   3.8ms |       3 | `node_modules/typescript/lib/typescript.js:51499` |
|  0.8% |   1.3ms |       1 | `node_modules/typescript/lib/typescript.js:50055` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 69.1% | 95.3ms |      76 | `node_modules/typescript/lib/typescript.js:62796` |
| 29.1% | 40.1ms |      32 | `node_modules/typescript/lib/typescript.js:62799` |
|  1.8% |  2.5ms |       2 | `node_modules/typescript/lib/typescript.js:62794` |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 96.3% | 130.4ms |     104 | `node_modules/typescript/lib/typescript.js:67410` |
|  2.8% |   3.8ms |       3 | `node_modules/typescript/lib/typescript.js:67408` |
|  0.9% |   1.3ms |       1 | `node_modules/typescript/lib/typescript.js:65664` |

##### `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 49.1% | 66.5ms |      53 | `node_modules/typescript/lib/typescript.js:67421` |
| 14.8% | 20.1ms |      16 | `node_modules/typescript/lib/typescript.js:67417` |
|  5.6% |  7.5ms |       6 | `node_modules/typescript/lib/typescript.js:67228` |
|  4.6% |  6.3ms |       5 | `node_modules/typescript/lib/typescript.js:67432` |
|  4.6% |  6.3ms |       5 | `node_modules/typescript/lib/typescript.js:67416` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 99.0% | 121.6ms |      97 | `node_modules/typescript/lib/typescript.js:60278` |
|  1.0% |   1.3ms |       1 | `node_modules/typescript/lib/typescript.js:66030` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 14.7% | 17.6ms |      14 | `node_modules/typescript/lib/typescript.js:71352` |
|  9.5% | 11.3ms |       9 | `node_modules/typescript/lib/typescript.js:71207` |
|  6.3% |  7.5ms |       6 | `node_modules/typescript/lib/typescript.js:21226` |
|  6.3% |  7.5ms |       6 | `node_modules/typescript/lib/typescript.js:71312` |
|  5.3% |  6.3ms |       5 | `node_modules/typescript/lib/typescript.js:71225` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 28.0% | 32.6ms |      26 | `node_modules/typescript/lib/typescript.js:47801` |
| 18.3% | 21.3ms |      17 | `node_modules/typescript/lib/typescript.js:47807` |
|  8.6% | 10.0ms |       8 | `node_modules/typescript/lib/typescript.js:48751` |
|  8.6% | 10.0ms |       8 | `node_modules/typescript/lib/typescript.js:47809` |
|  6.5% |  7.5ms |       6 | `node_modules/typescript/lib/typescript.js:47793` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 12.2% | 13.8ms |      11 | `node_modules/typescript/lib/typescript.js:69013` |
| 11.1% | 12.5ms |      10 | `node_modules/typescript/lib/typescript.js:69024` |
| 10.0% | 11.3ms |       9 | `node_modules/typescript/lib/typescript.js:68639` |
|  8.9% | 10.0ms |       8 | `node_modules/typescript/lib/typescript.js:68980` |
|  8.9% | 10.0ms |       8 | `node_modules/typescript/lib/typescript.js:69026` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 21.1% | 23.8ms |      19 | `node_modules/typescript/lib/typescript.js:71376` |
| 15.6% | 17.6ms |      14 | `node_modules/typescript/lib/typescript.js:71387` |
| 15.6% | 17.6ms |      14 | `node_modules/typescript/lib/typescript.js:71381` |
| 14.4% | 16.3ms |      13 | `node_modules/typescript/lib/typescript.js:71375` |
| 11.1% | 12.5ms |      10 | `node_modules/typescript/lib/typescript.js:71392` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 79.1% | 85.3ms |      68 | `node_modules/typescript/lib/typescript.js:61751` |
|  7.0% |  7.5ms |       6 | `node_modules/typescript/lib/typescript.js:61748` |
|  3.5% |  3.8ms |       3 | `node_modules/typescript/lib/typescript.js:61750` |
|  3.5% |  3.8ms |       3 | `node_modules/typescript/lib/typescript.js:61934` |
|  2.3% |  2.5ms |       2 | `node_modules/typescript/lib/typescript.js:61936` |

##### `getSymbolLinks` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 92.7% | 95.3ms |      76 | `node_modules/typescript/lib/typescript.js:51497` |
|  6.1% |  6.3ms |       5 | `node_modules/typescript/lib/typescript.js:51493` |
|  1.2% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:50064` |

##### `bindWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 63.4% | 65.2ms |      52 | `node_modules/typescript/lib/typescript.js:47857` |
| 11.0% | 11.3ms |       9 | `node_modules/typescript/lib/typescript.js:47868` |
|  4.9% |  5.0ms |       4 | `node_modules/typescript/lib/typescript.js:47978` |
|  2.4% |  2.5ms |       2 | `node_modules/typescript/lib/typescript.js:47956` |
|  2.4% |  2.5ms |       2 | `node_modules/typescript/lib/typescript.js:48048` |

##### `instantiateType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 21.0% | 21.3ms |      17 | `node_modules/typescript/lib/typescript.js:66256` |
| 19.8% | 20.1ms |      16 | `node_modules/typescript/lib/typescript.js:70865` |
| 12.3% | 12.5ms |      10 | `node_modules/typescript/lib/typescript.js:70867` |
|  8.6% |  8.8ms |       7 | `node_modules/typescript/lib/typescript.js:21226` |
|  7.4% |  7.5ms |       6 | `node_modules/typescript/lib/typescript.js:66279` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 61.1% | 55.2ms |      44 | `node_modules/typescript/lib/typescript.js:65882` |
| 19.4% | 17.6ms |      14 | `node_modules/typescript/lib/typescript.js:65884` |
| 11.1% | 10.0ms |       8 | `node_modules/typescript/lib/typescript.js:65887` |
|  4.2% |  3.8ms |       3 | `node_modules/typescript/lib/typescript.js:65878` |
|  1.4% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:65880` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Caller        | Location                                    |
| -----: | ------: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 497.8ms |     397 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                    | Location                                             |
| ----: | ------: | ------: | ------------------------- | ---------------------------------------------------- |
| 98.5% | 417.6ms |     333 | `isTypeRelatedTo`         | `node_modules/typescript/lib/typescript.js`          |
|  0.6% |   2.5ms |       2 | `checkTypeAssignableTo`   | `node_modules/typescript/lib/typescript.js`          |
|  0.3% |   1.3ms |       1 | `(anonymous)`             | `node_modules/typescript/lib/typescript.js:83625:30` |
|  0.3% |   1.3ms |       1 | `inferFromMatchingTypes`  | `node_modules/typescript/lib/typescript.js`          |
|  0.3% |   1.3ms |       1 | `checkTemplateExpression` | `node_modules/typescript/lib/typescript.js`          |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                     | Location                                    |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------- |
| 98.9% | 351.1ms |     280 | `instantiateTypeWorker`    | `node_modules/typescript/lib/typescript.js` |
|  1.1% |   3.8ms |       3 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Caller                     | Location                                    |
| -----: | ------: | ------: | -------------------------- | ------------------------------------------- |
| 100.0% | 314.8ms |     251 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                          | Location                                    |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------- |
| 65.9% | 191.9ms |     153 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js` |
| 12.5% |  36.4ms |      29 | `isRelatedToWorker2`            | `node_modules/typescript/lib/typescript.js` |
|  9.9% |  28.8ms |      23 | `isPropertySymbolTypeRelated`   | `node_modules/typescript/lib/typescript.js` |
|  4.7% |  13.8ms |      11 | `eachTypeRelatedToType`         | `node_modules/typescript/lib/typescript.js` |
|  1.7% |   5.0ms |       4 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                  | Location                                    |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 99.1% | 267.1ms |     213 | `nextTokenWithoutCheck` | `node_modules/typescript/lib/typescript.js` |
|  0.5% |   1.3ms |       1 | `scanTokenAtPosition`   | `node_modules/typescript/lib/typescript.js` |
|  0.5% |   1.3ms |       1 | `parseTypeAnnotation`   | `node_modules/typescript/lib/typescript.js` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                         | Location                                    |
| ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------- |
| 22.9% | 37.6ms |      30 | `getResolvedSignature`                         | `node_modules/typescript/lib/typescript.js` |
| 22.1% | 36.4ms |      29 | `getResolvedSymbol`                            | `node_modules/typescript/lib/typescript.js` |
| 20.6% | 33.9ms |      27 | `getObjectTypeInstantiation`                   | `node_modules/typescript/lib/typescript.js` |
| 13.0% | 21.3ms |      17 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |
|  6.1% | 10.0ms |       8 | `hasSkipDirectInferenceFlag`                   | `node_modules/typescript/lib/typescript.js` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                          | Location                                    |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------- |
| 69.1% | 95.3ms |      76 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js` |
| 17.3% | 23.8ms |      19 | `getTypeWithThisArgument`       | `node_modules/typescript/lib/typescript.js` |
|  6.4% |  8.8ms |       7 | `createNormalizedTupleType`     | `node_modules/typescript/lib/typescript.js` |
|  3.6% |  5.0ms |       4 | `getNormalizedType`             | `node_modules/typescript/lib/typescript.js` |
|  0.9% |  1.3ms |       1 | `createPromiseType`             | `node_modules/typescript/lib/typescript.js` |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Caller        | Location                                    |
| -----: | ------: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 135.4ms |     108 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js` |

##### `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller               | Location                                    |
| ----: | ------: | ------: | -------------------- | ------------------------------------------- |
| 97.2% | 131.7ms |     105 | `getNormalizedType`  | `node_modules/typescript/lib/typescript.js` |
|  2.8% |   3.8ms |       3 | `checkTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 96.9% | 119.1ms |      95 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js` |
|  3.1% |   3.8ms |       3 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                    |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| 17.9% | 21.3ms |      17 | `inferFromContravariantTypes` | `node_modules/typescript/lib/typescript.js` |
| 15.8% | 18.8ms |      15 | `inferFromTypes`              | `node_modules/typescript/lib/typescript.js` |
| 15.8% | 18.8ms |      15 | `applyToReturnTypes`          | `node_modules/typescript/lib/typescript.js` |
| 13.7% | 16.3ms |      13 | `inferFromMatchingTypes`      | `node_modules/typescript/lib/typescript.js` |
|  9.5% | 11.3ms |       9 | `inferFromTypeArguments`      | `node_modules/typescript/lib/typescript.js` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                    | Location                                             |
| ----: | -----: | ------: | ------------------------- | ---------------------------------------------------- |
| 44.1% | 51.4ms |      41 | `visitNode2`              | `node_modules/typescript/lib/typescript.js`          |
| 39.8% | 46.4ms |      37 | `forEach`                 | `node_modules/typescript/lib/typescript.js`          |
|  8.6% | 10.0ms |       8 | `bindParameterFlow`       | `node_modules/typescript/lib/typescript.js`          |
|  2.2% |  2.5ms |       2 | `(anonymous)`             | `node_modules/typescript/lib/typescript.js:46416:16` |
|  2.2% |  2.5ms |       2 | `bindExpressionStatement` | `node_modules/typescript/lib/typescript.js`          |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                    | Location                                    |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------- |
| 97.8% | 110.4ms |      88 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |
|  2.2% |   2.5ms |       2 | `recursiveTypeRelatedTo`  | `node_modules/typescript/lib/typescript.js` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Caller           | Location                                    |
| -----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 100.0% | 112.9ms |      90 | `inferFromTypes` | `node_modules/typescript/lib/typescript.js` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                 | Location                                    |
| ----: | -----: | ------: | ---------------------- | ------------------------------------------- |
| 47.7% | 51.4ms |      41 | `getPropertyOfType`    | `node_modules/typescript/lib/typescript.js` |
| 36.0% | 38.9ms |      31 | `getSignaturesOfType`  | `node_modules/typescript/lib/typescript.js` |
|  9.3% | 10.0ms |       8 | `getIndexInfosOfType`  | `node_modules/typescript/lib/typescript.js` |
|  3.5% |  3.8ms |       3 | `getPropertiesOfType`  | `node_modules/typescript/lib/typescript.js` |
|  2.3% |  2.5ms |       2 | `getIndexedAccessType` | `node_modules/typescript/lib/typescript.js` |

##### `getSymbolLinks` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                     | Location                                    |
| ----: | -----: | ------: | ------------------------------------------ | ------------------------------------------- |
| 30.5% | 31.3ms |      25 | `getTypeOfVariableOrParameterOrProperty`   | `node_modules/typescript/lib/typescript.js` |
| 25.6% | 26.3ms |      21 | `getResolvedMembersOrExportsOfSymbol`      | `node_modules/typescript/lib/typescript.js` |
| 20.7% | 21.3ms |      17 | `instantiateSymbol`                        | `node_modules/typescript/lib/typescript.js` |
|  3.7% |  3.8ms |       3 | `getTypeOfFuncClassEnumModule`             | `node_modules/typescript/lib/typescript.js` |
|  3.7% |  3.8ms |       3 | `getContextualTypeForObjectLiteralElement` | `node_modules/typescript/lib/typescript.js` |

##### `bindWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller    | Location                                    |
| ----: | ------: | ------: | --------- | ------------------------------------------- |
| 98.8% | 101.6ms |      81 | `bind`    | `node_modules/typescript/lib/typescript.js` |
|  1.2% |   1.3ms |       1 | `forEach` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                    |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| 37.0% | 37.6ms |      30 | `instantiateList`             | `node_modules/typescript/lib/typescript.js` |
| 27.2% | 27.6ms |      22 | `getMappedType`               | `node_modules/typescript/lib/typescript.js` |
| 14.8% | 15.0ms |      12 | `instantiateTypeWorker`       | `node_modules/typescript/lib/typescript.js` |
|  3.7% |  3.8ms |       3 | `getTypeOfInstantiatedSymbol` | `node_modules/typescript/lib/typescript.js` |
|  2.5% |  2.5ms |       2 | `getConditionalType`          | `node_modules/typescript/lib/typescript.js` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                    |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| 55.6% | 50.2ms |      40 | `instantiateTypes`            | `node_modules/typescript/lib/typescript.js` |
| 25.0% | 22.6ms |      18 | `instantiateSignature`        | `node_modules/typescript/lib/typescript.js` |
| 12.5% | 11.3ms |       9 | `instantiateSignatures`       | `node_modules/typescript/lib/typescript.js` |
|  4.2% |  3.8ms |       3 | `instantiateIndexInfos`       | `node_modules/typescript/lib/typescript.js` |
|  1.4% |  1.3ms |       1 | `resolveTypeReferenceMembers` | `node_modules/typescript/lib/typescript.js` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |   Time | Samples | Function                                   | Location                                              |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 86.4% | 13.86s |  11,057 | `typeCheckProject`                         | `tsc-workload.mjs`                                    |
| 86.4% | 13.86s |  11,057 | `(anonymous)`                              | `datadog-pprof.mjs:3:33`                              |
| 86.4% | 13.86s |  11,057 | `run`                                      | `node:internal/modules/esm/module_job`                |
| 82.1% | 13.18s |  10,514 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 73.7% | 11.83s |   9,439 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 73.7% | 11.83s |   9,437 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 73.7% | 11.83s |   9,437 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 73.7% | 11.83s |   9,436 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 73.7% | 11.83s |   9,435 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 73.7% | 11.83s |   9,435 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124903:41` |
| 73.7% | 11.82s |   9,433 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 73.7% | 11.82s |   9,432 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 73.7% | 11.82s |   9,430 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 69.1% | 11.08s |   8,840 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 69.0% | 11.08s |   8,837 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 69.0% | 11.07s |   8,834 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 69.0% | 11.07s |   8,830 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 69.0% | 11.07s |   8,828 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 69.0% | 11.06s |   8,827 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124979:27` |
| 68.0% | 10.90s |   8,698 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |

#### Categories

##### Third-party

|     % |   Time | Samples | Function                                   | Location                                              |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 82.1% | 13.18s |  10,514 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 73.7% | 11.83s |   9,439 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 73.7% | 11.83s |   9,437 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 73.7% | 11.83s |   9,437 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 73.7% | 11.83s |   9,436 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 73.7% | 11.83s |   9,435 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 73.7% | 11.83s |   9,435 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124903:41` |
| 73.7% | 11.82s |   9,433 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 73.7% | 11.82s |   9,432 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 73.7% | 11.82s |   9,430 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 69.1% | 11.08s |   8,840 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 69.0% | 11.08s |   8,837 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 69.0% | 11.07s |   8,834 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 69.0% | 11.07s |   8,830 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 69.0% | 11.07s |   8,828 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 69.0% | 11.06s |   8,827 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124979:27` |
| 68.0% | 10.90s |   8,698 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| 67.9% | 10.89s |   8,691 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| 52.6% |  8.44s |   6,731 | `checkExpression`                          | `node_modules/typescript/lib/typescript.js`           |
| 52.6% |  8.43s |   6,727 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 12.6% | 2.02s |   1,614 | `(garbage collector)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |   Time | Samples | Callee                             | Location                                    |
| ----: | -----: | ------: | ---------------------------------- | ------------------------------------------- |
| 85.3% | 11.82s |   9,430 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| 13.8% |  1.91s |   1,528 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 96.6ms |      77 | `require`                          | `node:internal/modules/helpers`             |
|  0.2% | 25.1ms |      20 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  1.3ms |       1 | `getSyntacticDiagnostics`          | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof.mjs:3:33`)

|      % |   Time | Samples | Callee             | Location           |
| -----: | -----: | ------: | ------------------ | ------------------ |
| 100.0% | 13.86s |  11,057 | `typeCheckProject` | `tsc-workload.mjs` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |   Time | Samples | Callee        | Location                  |
| -----: | -----: | ------: | ------------- | ------------------------- |
| 100.0% | 13.86s |  11,056 | `(anonymous)` | `datadog-pprof.mjs:3:33`  |
|  <0.1% |  1.3ms |       1 | `(anonymous)` | `datadog-pprof.mjs:72:14` |

##### `forEach` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee               | Location                                              |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------- |
| 82.6% |  10.88s |   8,683 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js`           |
|  6.8% | 894.1ms |     713 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:124028:27` |
|  5.3% | 694.7ms |     554 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:46417:16`  |
|  4.3% | 563.0ms |     449 | `bind`               | `node_modules/typescript/lib/typescript.js`           |
|  2.5% | 324.8ms |     259 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:124078:27` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                     | Location                                    |
| -----: | -----: | ------: | ------------------------------------------ | ------------------------------------------- |
| 100.0% | 11.83s |   9,436 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                     | Location                                    |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------- |
| 100.0% | 11.83s |   9,436 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                              | Location                                    |
| -----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 11.83s |   9,435 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `getAndCacheDiagnostics`            | `node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                 | Location                                              |
| ----: | ------: | ------: | ---------------------- | ----------------------------------------------------- |
| 93.5% |  11.06s |   8,824 | `(anonymous)`          | `node_modules/typescript/lib/typescript.js:124979:27` |
|  6.4% | 758.7ms |     605 | `(anonymous)`          | `node_modules/typescript/lib/typescript.js:124971:26` |
|  0.1% |   7.5ms |       6 | `(anonymous)`          | `node_modules/typescript/lib/typescript.js:124984:44` |
| <0.1% |   1.3ms |       1 | `(anonymous:L#124984)` | `node_modules/typescript/lib/typescript.js`           |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                   | Location                                    |
| -----: | -----: | ------: | ------------------------ | ------------------------------------------- |
| 100.0% | 11.83s |   9,435 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:124903:41`)

|      % |   Time | Samples | Callee                          | Location                                    |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------- |
| 100.0% | 11.83s |   9,435 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee        | Location                                              |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 11.82s |   9,431 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:124903:41` |
|  <0.1% |  1.3ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:124903:42` |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee    | Location                                    |
| -----: | -----: | ------: | --------- | ------------------------------------------- |
| 100.0% | 11.82s |   9,432 | `flatMap` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                    |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 11.82s |   9,430 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee                       | Location                                    |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| 57.5% |  6.37s |   5,085 | `checkDeferredNodes`         | `node_modules/typescript/lib/typescript.js` |
| 42.2% |  4.68s |   3,734 | `forEach`                    | `node_modules/typescript/lib/typescript.js` |
|  0.2% | 18.8ms |      15 | `addLazyDiagnostic`          | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  2.5ms |       2 | `checkSourceElement`         | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  2.5ms |       2 | `checkExternalModuleExports` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                  | Location                                    |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 11.08s |   8,837 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee            | Location                                    |
| -----: | -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 11.07s |   8,834 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                | Location                                    |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------------- |
| 100.0% | 11.07s |   8,830 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                | Location                                    |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------------- |
| 100.0% | 11.06s |   8,827 | `getDiagnosticsWorker`                | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `ensurePendingDiagnosticWorkComplete` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:124979:27`)

|      % |   Time | Samples | Callee            | Location                                    |
| -----: | -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 11.06s |   8,827 | `getDiagnostics2` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee                      | Location                                    |
| ----: | -----: | ------: | --------------------------- | ------------------------------------------- |
| 99.9% | 10.89s |   8,691 | `checkSourceElementWorker`  | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  2.5ms |       2 | `isReachableFlowNodeWorker` | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  2.5ms |       2 | `checkImportDeclaration`    | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  1.3ms |       1 | `forEach`                   | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  1.3ms |       1 | `checkTypeQuery`            | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                     | Location                                    |
| ----: | ----: | ------: | -------------------------- | ------------------------------------------- |
| 75.6% | 8.24s |   6,571 | `checkBlock`               | `node_modules/typescript/lib/typescript.js` |
| 43.9% | 4.78s |   3,818 | `checkVariableDeclaration` | `node_modules/typescript/lib/typescript.js` |
| 43.9% | 4.78s |   3,813 | `checkVariableStatement`   | `node_modules/typescript/lib/typescript.js` |
| 25.8% | 2.81s |   2,241 | `checkExpressionStatement` | `node_modules/typescript/lib/typescript.js` |
| 18.8% | 2.04s |   1,631 | `checkTypeReferenceNode`   | `node_modules/typescript/lib/typescript.js` |

##### `checkExpression` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                                          | Location                                    |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------- |
| 99.9% |   8.43s |   6,725 | `checkExpressionWorker`                         | `node_modules/typescript/lib/typescript.js` |
|  1.3% | 110.4ms |      88 | `instantiateTypeWithSingleGenericCallSignature` | `node_modules/typescript/lib/typescript.js` |
|  0.3% |  25.1ms |      20 | `checkIfStatement`                              | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   2.5ms |       2 | `checkIdentifier`                               | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `checkPropertyAccessExpressionOrQualifiedName`  | `node_modules/typescript/lib/typescript.js` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                          | Location                                    |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------- |
| 92.4% |   7.79s |   6,213 | `checkCallExpression`           | `node_modules/typescript/lib/typescript.js` |
| 32.2% |   2.71s |   2,168 | `checkPropertyAccessExpression` | `node_modules/typescript/lib/typescript.js` |
| 28.9% |   2.43s |   1,943 | `checkObjectLiteral`            | `node_modules/typescript/lib/typescript.js` |
| 16.4% |   1.38s |   1,104 | `checkArrayLiteral`             | `node_modules/typescript/lib/typescript.js` |
| 10.5% | 887.8ms |     708 | `checkIdentifier`               | `node_modules/typescript/lib/typescript.js` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs:3:33`) ← `run` (`node:internal/modules/esm/module_job`)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.5% | 79.0ms |      63 | `wrapSafe` (`node:internal/modules/cjs/loader`) ← `(anonymous)` (1755:18) ← `(anonymous)` (1913:37) ← `(anonymous)` (1505:37) ← `(anonymous)` (1309:33) ← `wrapModuleLoad` ← `(anonymous)` (1527:24) ← `require` (`node:internal/modules/helpers`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.4% | 65.2ms |      52 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124979:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124903:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                |
| 0.3% | 45.1ms |      36 | `createUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`) ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124979:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124903:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.3% | 43.9ms |      35 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124979:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124903:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.2% | 37.6ms |      30 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124979:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124903:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.2% | 35.1ms |      28 | `getNodeLinks` (`node_modules/typescript/lib/typescript.js`) ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `getReturnTypeFromBody` ← `getReturnTypeOfSignature` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124979:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124903:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% | 35.1ms |      28 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124979:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124903:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                     |
| 0.2% | 30.1ms |      24 | `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124979:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124903:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% | 26.3ms |      21 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124979:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124903:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                |
| 0.2% | 25.1ms |      20 | `getPropertyOfType` (`node_modules/typescript/lib/typescript.js`) ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124979:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124903:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% | 25.1ms |      20 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124979:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124903:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.1% | 21.3ms |      17 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124979:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124903:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.1% | 21.3ms |      17 | `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`) ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124979:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124903:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.1% | 20.1ms |      16 | `getUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124979:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124903:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.1% | 20.1ms |      16 | `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`) ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124979:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124903:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` |
| 0.1% | 20.1ms |      16 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124979:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124903:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.1% | 18.8ms |      15 | `getNormalizedType` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124979:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124903:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                          |
| 0.1% | 17.6ms |      14 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124979:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124903:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.1% | 17.6ms |      14 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124979:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124903:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.1% | 16.3ms |      13 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isPropertySymbolTypeRelated` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `checkTypeAssignableTo` ← `checkTypeArgumentConstraints` ← `(anonymous)` (83536:40) ← `addLazyDiagnostic` ← `checkTypeReferenceOrImport` ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkTypeAliasDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124979:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124903:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

# Wall time profile

Took 16.90s over 13,480 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 87.7% |  14.82s |  11,823 |
| Garbage collector  | 10.6% |   1.78s |   1,425 |
| Native             |  0.8% | 143.0ms |     114 |
| Standard library   |  0.8% | 131.7ms |     105 |
| Regular expression |  0.1% |  16.3ms |      13 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                        | Location                                    |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------- |
| 10.6% |   1.78s |   1,425 | `(garbage collector)`           | `<unknown>`                                 |
|  2.8% | 476.5ms |     380 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js` |
|  2.8% | 469.0ms |     374 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js` |
|  2.0% | 344.8ms |     275 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js` |
|  2.0% | 333.6ms |     266 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
|  1.6% | 278.4ms |     222 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js` |
|  1.6% | 274.6ms |     219 | `scan`                          | `node_modules/typescript/lib/typescript.js` |
|  1.3% | 215.7ms |     172 | `some`                          | `node_modules/typescript/lib/typescript.js` |
|  1.0% | 166.8ms |     133 | `getNodeLinks`                  | `node_modules/typescript/lib/typescript.js` |
|  0.9% | 156.8ms |     125 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js` |
|  0.9% | 154.2ms |     123 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 140.4ms |     112 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 130.4ms |     104 | `createTypeReference`           | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 125.4ms |     100 | `invokeOnce`                    | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 122.9ms |      98 | `instantiateType`               | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 120.4ms |      96 | `getMembersOfSymbol`            | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 119.1ms |      95 | `resolveStructuredTypeMembers`  | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 119.1ms |      95 | `getReducedApparentType`        | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 111.6ms |      89 | `isTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 106.6ms |      85 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js` |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                        | Location                                    |
| ---: | ------: | ------: | ------------------------------- | ------------------------------------------- |
| 2.8% | 476.5ms |     380 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js` |
| 2.8% | 469.0ms |     374 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js` |
| 2.0% | 344.8ms |     275 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js` |
| 2.0% | 333.6ms |     266 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
| 1.6% | 278.4ms |     222 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js` |
| 1.6% | 274.6ms |     219 | `scan`                          | `node_modules/typescript/lib/typescript.js` |
| 1.3% | 215.7ms |     172 | `some`                          | `node_modules/typescript/lib/typescript.js` |
| 1.0% | 166.8ms |     133 | `getNodeLinks`                  | `node_modules/typescript/lib/typescript.js` |
| 0.9% | 156.8ms |     125 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js` |
| 0.9% | 154.2ms |     123 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js` |
| 0.8% | 140.4ms |     112 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js` |
| 0.8% | 130.4ms |     104 | `createTypeReference`           | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 125.4ms |     100 | `invokeOnce`                    | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 122.9ms |      98 | `instantiateType`               | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 120.4ms |      96 | `getMembersOfSymbol`            | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 119.1ms |      95 | `resolveStructuredTypeMembers`  | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 119.1ms |      95 | `getReducedApparentType`        | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 111.6ms |      89 | `isTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 106.6ms |      85 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 100.3ms |      80 | `bind`                          | `node_modules/typescript/lib/typescript.js` |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 10.6% | 1.78s |   1,425 | `(garbage collector)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 65.3% | 311.0ms |     248 | `node_modules/typescript/lib/typescript.js:63505` |
| 20.5% |  97.8ms |      78 | `node_modules/typescript/lib/typescript.js:63524` |
|  7.1% |  33.9ms |      27 | `node_modules/typescript/lib/typescript.js:63588` |
|  1.6% |   7.5ms |       6 | `node_modules/typescript/lib/typescript.js:63522` |
|  1.6% |   7.5ms |       6 | `node_modules/typescript/lib/typescript.js:63523` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 54.8% | 257.1ms |     205 | `node_modules/typescript/lib/typescript.js:64396` |
|  7.8% |  36.4ms |      29 | `node_modules/typescript/lib/typescript.js:64449` |
|  6.7% |  31.3ms |      25 | `node_modules/typescript/lib/typescript.js:64443` |
|  4.0% |  18.8ms |      15 | `node_modules/typescript/lib/typescript.js:64508` |
|  3.7% |  17.6ms |      14 | `node_modules/typescript/lib/typescript.js:64383` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 37.1% | 127.9ms |     102 | `node_modules/typescript/lib/typescript.js:62149` |
| 11.6% |  40.1ms |      32 | `node_modules/typescript/lib/typescript.js:62152` |
|  4.7% |  16.3ms |      13 | `node_modules/typescript/lib/typescript.js:62153` |
|  3.6% |  12.5ms |      10 | `node_modules/typescript/lib/typescript.js:62140` |
|  3.3% |  11.3ms |       9 | `node_modules/typescript/lib/typescript.js:62120` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 19.5% | 65.2ms |      52 | `node_modules/typescript/lib/typescript.js:63910` |
| 13.5% | 45.1ms |      36 | `node_modules/typescript/lib/typescript.js:63843` |
| 12.0% | 40.1ms |      32 | `node_modules/typescript/lib/typescript.js:63813` |
|  6.0% | 20.1ms |      16 | `node_modules/typescript/lib/typescript.js:63868` |
|  5.6% | 18.8ms |      15 | `node_modules/typescript/lib/typescript.js:63481` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 51.4% | 143.0ms |     114 | `node_modules/typescript/lib/typescript.js:62370` |
|  7.2% |  20.1ms |      16 | `node_modules/typescript/lib/typescript.js:62354` |
|  6.3% |  17.6ms |      14 | `node_modules/typescript/lib/typescript.js:62365` |
|  4.5% |  12.5ms |      10 | `node_modules/typescript/lib/typescript.js:62383` |
|  3.6% |  10.0ms |       8 | `node_modules/typescript/lib/typescript.js:62362` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 17.4% | 47.7ms |      38 | `node_modules/typescript/lib/typescript.js:10352` |
| 12.3% | 33.9ms |      27 | `node_modules/typescript/lib/typescript.js:11234` |
|  9.1% | 25.1ms |      20 | `node_modules/typescript/lib/typescript.js:10816` |
|  5.5% | 15.0ms |      12 | `node_modules/typescript/lib/typescript.js:10514` |
|  5.0% | 13.8ms |      11 | `node_modules/typescript/lib/typescript.js:10327` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                        |
| ----: | ------: | ------: | ----------------------------------------------- |
| 72.7% | 156.8ms |     125 | `node_modules/typescript/lib/typescript.js:472` |
| 14.5% |  31.3ms |      25 | `node_modules/typescript/lib/typescript.js:468` |
|  9.3% |  20.1ms |      16 | `node_modules/typescript/lib/typescript.js:471` |
|  1.2% |   2.5ms |       2 | `node_modules/typescript/lib/typescript.js:470` |
|  1.2% |   2.5ms |       2 | `node_modules/typescript/lib/typescript.js:473` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 88.7% | 148.0ms |     118 | `node_modules/typescript/lib/typescript.js:47545` |
|  6.8% |  11.3ms |       9 | `node_modules/typescript/lib/typescript.js:47544` |
|  3.8% |   6.3ms |       5 | `node_modules/typescript/lib/typescript.js:47543` |
|  0.8% |   1.3ms |       1 | `node_modules/typescript/lib/typescript.js:46122` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 18.4% | 28.8ms |      23 | `node_modules/typescript/lib/typescript.js:67379` |
| 11.2% | 17.6ms |      14 | `node_modules/typescript/lib/typescript.js:67237` |
|  6.4% | 10.0ms |       8 | `node_modules/typescript/lib/typescript.js:67339` |
|  5.6% |  8.8ms |       7 | `node_modules/typescript/lib/typescript.js:67338` |
|  3.2% |  5.0ms |       4 | `node_modules/typescript/lib/typescript.js:67242` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 97.6% | 150.5ms |     120 | `node_modules/typescript/lib/typescript.js:56405` |
|  0.8% |   1.3ms |       1 | `node_modules/typescript/lib/typescript.js:62108` |
|  0.8% |   1.3ms |       1 | `node_modules/typescript/lib/typescript.js:13005` |
|  0.8% |   1.3ms |       1 | `node_modules/typescript/lib/typescript.js:56402` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 17.9% | 25.1ms |      20 | `node_modules/typescript/lib/typescript.js:65073` |
| 12.5% | 17.6ms |      14 | `node_modules/typescript/lib/typescript.js:65086` |
|  9.8% | 13.8ms |      11 | `node_modules/typescript/lib/typescript.js:65084` |
|  7.1% | 10.0ms |       8 | `node_modules/typescript/lib/typescript.js:64699` |
|  5.4% |  7.5ms |       6 | `node_modules/typescript/lib/typescript.js:65040` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 68.3% | 89.0ms |      71 | `node_modules/typescript/lib/typescript.js:58884` |
| 28.8% | 37.6ms |      30 | `node_modules/typescript/lib/typescript.js:58887` |
|  1.0% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:58886` |
|  1.0% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:50067` |
|  1.0% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:58888` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 23.0% | 28.8ms |      23 | `node_modules/typescript/lib/typescript.js:67403` |
| 15.0% | 18.8ms |      15 | `node_modules/typescript/lib/typescript.js:67414` |
| 13.0% | 16.3ms |      13 | `node_modules/typescript/lib/typescript.js:67408` |
| 12.0% | 15.0ms |      12 | `node_modules/typescript/lib/typescript.js:67402` |
|  7.0% |  8.8ms |       7 | `node_modules/typescript/lib/typescript.js:67419` |

##### `instantiateType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 33.7% | 41.4ms |      33 | `node_modules/typescript/lib/typescript.js:62327` |
| 13.3% | 16.3ms |      13 | `node_modules/typescript/lib/typescript.js:66923` |
|  7.1% |  8.8ms |       7 | `node_modules/typescript/lib/typescript.js:62347` |
|  7.1% |  8.8ms |       7 | `node_modules/typescript/lib/typescript.js:17465` |
|  7.1% |  8.8ms |       7 | `node_modules/typescript/lib/typescript.js:62339` |

##### `getMembersOfSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 92.7% | 111.6ms |      89 | `node_modules/typescript/lib/typescript.js:56564` |
|  7.3% |   8.8ms |       7 | `node_modules/typescript/lib/typescript.js:56563` |

##### `resolveStructuredTypeMembers` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 40.0% | 47.7ms |      38 | `node_modules/typescript/lib/typescript.js:57461` |
| 21.1% | 25.1ms |      20 | `node_modules/typescript/lib/typescript.js:57471` |
|  9.5% | 11.3ms |       9 | `node_modules/typescript/lib/typescript.js:57473` |
|  6.3% |  7.5ms |       6 | `node_modules/typescript/lib/typescript.js:57462` |
|  6.3% |  7.5ms |       6 | `node_modules/typescript/lib/typescript.js:57465` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 76.8% | 91.5ms |      73 | `node_modules/typescript/lib/typescript.js:57867` |
|  8.4% | 10.0ms |       8 | `node_modules/typescript/lib/typescript.js:57866` |
|  5.3% |  6.3ms |       5 | `node_modules/typescript/lib/typescript.js:57864` |
|  4.2% |  5.0ms |       4 | `node_modules/typescript/lib/typescript.js:57862` |
|  2.1% |  2.5ms |       2 | `node_modules/typescript/lib/typescript.js:58053` |

##### `isTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 51.7% | 57.7ms |      46 | `node_modules/typescript/lib/typescript.js:63466` |
| 25.8% | 28.8ms |      23 | `node_modules/typescript/lib/typescript.js:63453` |
| 11.2% | 12.5ms |      10 | `node_modules/typescript/lib/typescript.js:63443` |
|  5.6% |  6.3ms |       5 | `node_modules/typescript/lib/typescript.js:63432` |
|  2.2% |  2.5ms |       2 | `node_modules/typescript/lib/typescript.js:63433` |

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 25.9% | 27.6ms |      22 | `node_modules/typescript/lib/typescript.js:62092` |
| 12.9% | 13.8ms |      11 | `node_modules/typescript/lib/typescript.js:62094` |
| 11.8% | 12.5ms |      10 | `node_modules/typescript/lib/typescript.js:47281` |
|  7.1% |  7.5ms |       6 | `node_modules/typescript/lib/typescript.js:62114` |
|  4.7% |  5.0ms |       4 | `node_modules/typescript/lib/typescript.js:17465` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 18.8% | 18.8ms |      15 | `node_modules/typescript/lib/typescript.js:44008` |
| 16.3% | 16.3ms |      13 | `node_modules/typescript/lib/typescript.js:44014` |
| 15.0% | 15.0ms |      12 | `node_modules/typescript/lib/typescript.js:44016` |
|  7.5% |  7.5ms |       6 | `node_modules/typescript/lib/typescript.js:44009` |
|  6.3% |  6.3ms |       5 | `node_modules/typescript/lib/typescript.js:44956` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                                     | Location                                    |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------------------------- |
| 97.1% | 462.7ms |     369 | `isTypeRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
|  1.6% |   7.5ms |       6 | `checkTypeAssignableTo`                    | `node_modules/typescript/lib/typescript.js` |
|  0.5% |   2.5ms |       2 | `checkTypeRelatedToAndOptionallyElaborate` | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `checkTypeArgumentConstraints`             | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `isTypeAssignableTo`                       | `node_modules/typescript/lib/typescript.js` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                  | Location                                    |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 98.9% | 464.0ms |     370 | `isRelatedTo`           | `node_modules/typescript/lib/typescript.js` |
|  0.5% |   2.5ms |       2 | `isRelatedToWorker2`    | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `checkTypeRelatedTo`    | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `typeRelatedToSomeType` | `node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                     | Location                                    |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------- |
| 99.3% | 342.3ms |     273 | `instantiateTypeWorker`    | `node_modules/typescript/lib/typescript.js` |
|  0.7% |   2.5ms |       2 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 58.3% | 194.4ms |     155 | `checkTypeRelatedTo`          | `node_modules/typescript/lib/typescript.js` |
| 13.2% |  43.9ms |      35 | `isRelatedToWorker2`          | `node_modules/typescript/lib/typescript.js` |
|  7.9% |  26.3ms |      21 | `isPropertySymbolTypeRelated` | `node_modules/typescript/lib/typescript.js` |
|  5.3% |  17.6ms |      14 | `eachTypeRelatedToType`       | `node_modules/typescript/lib/typescript.js` |
|  4.5% |  15.0ms |      12 | `typeArgumentsRelatedTo`      | `node_modules/typescript/lib/typescript.js` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                     | Location                                    |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------- |
| 99.1% | 275.9ms |     220 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js` |
|  0.5% |   1.3ms |       1 | `getTypeOfSymbol`          | `node_modules/typescript/lib/typescript.js` |
|  0.5% |   1.3ms |       1 | `getMappedType`            | `node_modules/typescript/lib/typescript.js` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                   | Location                                    |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------- |
| 96.3% | 264.6ms |     211 | `nextTokenWithoutCheck`  | `node_modules/typescript/lib/typescript.js` |
|  2.7% |   7.5ms |       6 | `scanTokenAtPosition`    | `node_modules/typescript/lib/typescript.js` |
|  0.5% |   1.3ms |       1 | `checkTypeReferenceNode` | `node_modules/typescript/lib/typescript.js` |
|  0.5% |   1.3ms |       1 | `parseEntityName`        | `node_modules/typescript/lib/typescript.js` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                                 | Location                                    |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------------------- |
| 51.2% | 110.4ms |      88 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
|  9.3% |  20.1ms |      16 | `hasMatchingRecursionIdentity`         | `node_modules/typescript/lib/typescript.js` |
|  7.6% |  16.3ms |      13 | `isTypeReferenceWithGenericArguments`  | `node_modules/typescript/lib/typescript.js` |
|  4.1% |   8.8ms |       7 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js` |
|  3.5% |   7.5ms |       6 | `resolveCall`                          | `node_modules/typescript/lib/typescript.js` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                         | Location                                    |
| ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------- |
| 29.3% | 48.9ms |      39 | `hasSkipDirectInferenceFlag`                   | `node_modules/typescript/lib/typescript.js` |
| 17.3% | 28.8ms |      23 | `getResolvedSymbol`                            | `node_modules/typescript/lib/typescript.js` |
| 12.8% | 21.3ms |      17 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |
|  9.8% | 16.3ms |      13 | `getObjectTypeInstantiation`                   | `node_modules/typescript/lib/typescript.js` |
|  7.5% | 12.5ms |      10 | `getResolvedSignature`                         | `node_modules/typescript/lib/typescript.js` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                    |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| 20.8% | 32.6ms |      26 | `applyToReturnTypes`          | `node_modules/typescript/lib/typescript.js` |
| 18.4% | 28.8ms |      23 | `inferFromContravariantTypes` | `node_modules/typescript/lib/typescript.js` |
| 14.4% | 22.6ms |      18 | `inferFromTypeArguments`      | `node_modules/typescript/lib/typescript.js` |
| 14.4% | 22.6ms |      18 | `inferFromMatchingTypes`      | `node_modules/typescript/lib/typescript.js` |
| 10.4% | 16.3ms |      13 | `inferFromTypes`              | `node_modules/typescript/lib/typescript.js` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 95.9% | 148.0ms |     118 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js` |
|  3.3% |   5.0ms |       4 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js` |
|  0.8% |   1.3ms |       1 | `resolveTypeReferenceMembers` | `node_modules/typescript/lib/typescript.js` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                    | Location                                    |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------- |
| 98.2% | 137.9ms |     110 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |
|  1.8% |   2.5ms |       2 | `recursiveTypeRelatedTo`  | `node_modules/typescript/lib/typescript.js` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                 | Location                                    |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------------- |
| 74.0% | 96.6ms |      77 | `createNormalizedTypeReference`        | `node_modules/typescript/lib/typescript.js` |
| 16.3% | 21.3ms |      17 | `getTypeWithThisArgument`              | `node_modules/typescript/lib/typescript.js` |
|  3.8% |  5.0ms |       4 | `createNormalizedTupleType`            | `node_modules/typescript/lib/typescript.js` |
|  3.8% |  5.0ms |       4 | `getNormalizedType`                    | `node_modules/typescript/lib/typescript.js` |
|  1.0% |  1.3ms |       1 | `getTypeFromClassOrInterfaceReference` | `node_modules/typescript/lib/typescript.js` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller           | Location                                    |
| ----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 97.0% | 121.6ms |      97 | `inferFromTypes` | `node_modules/typescript/lib/typescript.js` |
|  3.0% |   3.8ms |       3 | `inferTypes`     | `node_modules/typescript/lib/typescript.js` |

##### `instantiateType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                           | Location                                    |
| ----: | -----: | ------: | -------------------------------- | ------------------------------------------- |
| 43.9% | 53.9ms |      43 | `instantiateList`                | `node_modules/typescript/lib/typescript.js` |
| 17.3% | 21.3ms |      17 | `getMappedType`                  | `node_modules/typescript/lib/typescript.js` |
| 11.2% | 13.8ms |      11 | `getConditionalType`             | `node_modules/typescript/lib/typescript.js` |
| 10.2% | 12.5ms |      10 | `instantiateTypeWorker`          | `node_modules/typescript/lib/typescript.js` |
|  4.1% |  5.0ms |       4 | `getModifiersTypeFromMappedType` | `node_modules/typescript/lib/typescript.js` |

##### `getMembersOfSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                 | Location                                    |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------------- |
| 81.3% | 97.8ms |      78 | `isEmptyAnonymousObjectType`           | `node_modules/typescript/lib/typescript.js` |
|  9.4% | 11.3ms |       9 | `getSingleBaseForNonAugmentingSubtype` | `node_modules/typescript/lib/typescript.js` |
|  5.2% |  6.3ms |       5 | `some`                                 | `node_modules/typescript/lib/typescript.js` |
|  2.1% |  2.5ms |       2 | `resolveObjectTypeMembers`             | `node_modules/typescript/lib/typescript.js` |
|  1.0% |  1.3ms |       1 | `resolveDeclaredMembers`               | `node_modules/typescript/lib/typescript.js` |

##### `resolveStructuredTypeMembers` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                          | Location                                    |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------- |
| 30.5% | 36.4ms |      29 | `getSignaturesOfStructuredType` | `node_modules/typescript/lib/typescript.js` |
| 22.1% | 26.3ms |      21 | `getPropertyOfType`             | `node_modules/typescript/lib/typescript.js` |
| 20.0% | 23.8ms |      19 | `getPropertiesOfObjectType`     | `node_modules/typescript/lib/typescript.js` |
|  9.5% | 11.3ms |       9 | `getIndexInfosOfStructuredType` | `node_modules/typescript/lib/typescript.js` |
|  5.3% |  6.3ms |       5 | `isEmptyObjectType`             | `node_modules/typescript/lib/typescript.js` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                         | Location                                    |
| ----: | -----: | ------: | ------------------------------ | ------------------------------------------- |
| 45.3% | 53.9ms |      43 | `getPropertyOfType`            | `node_modules/typescript/lib/typescript.js` |
| 36.8% | 43.9ms |      35 | `getSignaturesOfType`          | `node_modules/typescript/lib/typescript.js` |
|  4.2% |  5.0ms |       4 | `getPropertiesOfType`          | `node_modules/typescript/lib/typescript.js` |
|  4.2% |  5.0ms |       4 | `resolveStructuredTypeMembers` | `node_modules/typescript/lib/typescript.js` |
|  4.2% |  5.0ms |       4 | `getIndexInfosOfType`          | `node_modules/typescript/lib/typescript.js` |

##### `isTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                     | Location                                    |
| ----: | -----: | ------: | ------------------------------------------ | ------------------------------------------- |
| 44.9% | 50.2ms |      40 | `isTypeIdenticalTo`                        | `node_modules/typescript/lib/typescript.js` |
| 24.7% | 27.6ms |      22 | `isTypeAssignableTo`                       | `node_modules/typescript/lib/typescript.js` |
| 12.4% | 13.8ms |      11 | `checkTypeRelatedToAndOptionallyElaborate` | `node_modules/typescript/lib/typescript.js` |
| 11.2% | 12.5ms |      10 | `isTypeComparableTo`                       | `node_modules/typescript/lib/typescript.js` |
|  2.2% |  2.5ms |       2 | `compareTypesAssignable`                   | `node_modules/typescript/lib/typescript.js` |

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                          | Location                                    |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------- |
| 72.9% | 77.7ms |      62 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js` |
| 24.7% | 26.3ms |      21 | `instantiateList`               | `node_modules/typescript/lib/typescript.js` |
|  1.2% |  1.3ms |       1 | `resolveStructuredTypeMembers`  | `node_modules/typescript/lib/typescript.js` |
|  1.2% |  1.3ms |       1 | `resolveTypeReferenceMembers`   | `node_modules/typescript/lib/typescript.js` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller              | Location                                             |
| ----: | -----: | ------: | ------------------- | ---------------------------------------------------- |
| 45.0% | 45.1ms |      36 | `forEach`           | `node_modules/typescript/lib/typescript.js`          |
| 36.3% | 36.4ms |      29 | `visitNode2`        | `node_modules/typescript/lib/typescript.js`          |
| 12.5% | 12.5ms |      10 | `bindParameterFlow` | `node_modules/typescript/lib/typescript.js`          |
|  2.5% |  2.5ms |       2 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:42711:18` |
|  1.3% |  1.3ms |       1 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:42712:18` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |   Time | Samples | Function                                   | Location                                              |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 87.9% | 14.86s |  11,855 | `typeCheckProject`                         | `tsc-workload.mjs`                                    |
| 87.9% | 14.86s |  11,855 | `(anonymous)`                              | `datadog-pprof.mjs:3:33`                              |
| 87.9% | 14.86s |  11,853 | `run`                                      | `node:internal/modules/esm/module_job`                |
| 84.3% | 14.24s |  11,358 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 76.7% | 12.96s |  10,337 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 76.7% | 12.95s |  10,334 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 76.6% | 12.95s |  10,332 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 76.6% | 12.95s |  10,328 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 76.6% | 12.95s |  10,327 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 76.6% | 12.94s |  10,325 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121543:43` |
| 76.6% | 12.94s |  10,325 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 76.6% | 12.94s |  10,324 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 76.6% | 12.94s |  10,320 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 72.0% | 12.16s |   9,702 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 72.0% | 12.16s |   9,701 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 72.0% | 12.16s |   9,699 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 72.0% | 12.16s |   9,699 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 71.9% | 12.16s |   9,698 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 71.9% | 12.15s |   9,695 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121619:29` |
| 71.3% | 12.05s |   9,612 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |

#### Categories

##### Third-party

|     % |   Time | Samples | Function                                   | Location                                              |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 84.3% | 14.24s |  11,358 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 76.7% | 12.96s |  10,337 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 76.7% | 12.95s |  10,334 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 76.6% | 12.95s |  10,332 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 76.6% | 12.95s |  10,328 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 76.6% | 12.95s |  10,327 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 76.6% | 12.94s |  10,325 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121543:43` |
| 76.6% | 12.94s |  10,325 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 76.6% | 12.94s |  10,324 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 76.6% | 12.94s |  10,320 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 72.0% | 12.16s |   9,702 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 72.0% | 12.16s |   9,701 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 72.0% | 12.16s |   9,699 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 72.0% | 12.16s |   9,699 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 71.9% | 12.16s |   9,698 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 71.9% | 12.15s |   9,695 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121619:29` |
| 71.3% | 12.05s |   9,612 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| 71.3% | 12.05s |   9,611 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| 54.4% |  9.19s |   7,331 | `checkExpression`                          | `node_modules/typescript/lib/typescript.js`           |
| 54.3% |  9.18s |   7,325 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 10.6% | 1.78s |   1,425 | `(garbage collector)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |    Time | Samples | Callee                             | Location                                    |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------- |
| 87.0% |  12.93s |  10,315 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| 12.1% |   1.79s |   1,434 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 105.3ms |      84 | `require`                          | `node:internal/modules/helpers`             |
|  0.2% |  26.3ms |      21 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `findConfigFile`                   | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof.mjs:3:33`)

|      % |   Time | Samples | Callee             | Location           |
| -----: | -----: | ------: | ------------------ | ------------------ |
| 100.0% | 14.86s |  11,855 | `typeCheckProject` | `tsc-workload.mjs` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |   Time | Samples | Callee        | Location                  |
| -----: | -----: | ------: | ------------- | ------------------------- |
| 100.0% | 14.86s |  11,852 | `(anonymous)` | `datadog-pprof.mjs:3:33`  |
|  <0.1% |  1.3ms |       1 | `(anonymous)` | `datadog-pprof.mjs:72:14` |

##### `forEach` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee               | Location                                              |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------- |
| 84.4% |  12.02s |   9,587 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js`           |
|  5.9% | 840.2ms |     670 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120665:29` |
|  5.1% | 723.6ms |     577 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:42712:18`  |
|  4.2% | 601.9ms |     480 | `bind`               | `node_modules/typescript/lib/typescript.js`           |
|  2.2% | 317.3ms |     253 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122413:31` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                 | Location                                              |
| ----: | ------: | ------: | ---------------------- | ----------------------------------------------------- |
| 93.8% |  12.15s |   9,693 | `(anonymous)`          | `node_modules/typescript/lib/typescript.js:121619:29` |
|  6.2% | 798.8ms |     637 | `(anonymous)`          | `node_modules/typescript/lib/typescript.js:121611:28` |
| <0.1% |   5.0ms |       4 | `(anonymous)`          | `node_modules/typescript/lib/typescript.js:121624:46` |
| <0.1% |   1.3ms |       1 | `(anonymous)`          | `node_modules/typescript/lib/typescript.js:121608:28` |
| <0.1% |   1.3ms |       1 | `(anonymous:L#121615)` | `node_modules/typescript/lib/typescript.js`           |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                     | Location                                    |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------- |
| 100.0% | 12.95s |  10,334 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                     | Location                                    |
| -----: | -----: | ------: | ------------------------------------------ | ------------------------------------------- |
| 100.0% | 12.95s |  10,332 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                   | Location                                    |
| -----: | -----: | ------: | ------------------------ | ------------------------------------------- |
| 100.0% | 12.95s |  10,328 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                              | Location                                    |
| -----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 12.94s |  10,325 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `getProgramDiagnostics`             | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121543:43`)

|      % |   Time | Samples | Callee                          | Location                                    |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------- |
| 100.0% | 12.94s |  10,325 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee        | Location                                              |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 12.94s |  10,324 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121543:43` |
|  <0.1% |  1.3ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:18056:33`  |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee    | Location                                    |
| -----: | -----: | ------: | --------- | ------------------------------------------- |
| 100.0% | 12.94s |  10,324 | `flatMap` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                    |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 12.94s |  10,320 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                  | Location                                    |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 12.16s |   9,701 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee                              | Location                                    |
| ----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 55.4% |  6.73s |   5,371 | `checkDeferredNodes`                | `node_modules/typescript/lib/typescript.js` |
| 44.4% |  5.39s |   4,306 | `forEach`                           | `node_modules/typescript/lib/typescript.js` |
|  0.1% | 13.8ms |      11 | `addLazyDiagnostic`                 | `node_modules/typescript/lib/typescript.js` |
|  0.1% | 10.0ms |       8 | `checkExternalModuleExports`        | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  1.3ms |       1 | `registerForUnusedIdentifiersCheck` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee            | Location                                    |
| -----: | -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 12.16s |   9,699 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                | Location                                    |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------------- |
| 100.0% | 12.16s |   9,698 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                    |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 12.16s |   9,697 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `getGlobalDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121619:29`)

|      % |   Time | Samples | Callee            | Location                                    |
| -----: | -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 12.15s |   9,695 | `getDiagnostics2` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                  | Location                                    |
| -----: | -----: | ------: | --------------------------------------- | ------------------------------------------- |
| 100.0% | 12.04s |   9,608 | `checkSourceElementWorker`              | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkTypeAliasDeclaration`             | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkExpressionStatement`              | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkGrammarForAtLeastOneTypeArgument` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `getSourceFileOfNode`                   | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                     | Location                                    |
| ----: | ----: | ------: | -------------------------- | ------------------------------------------- |
| 75.8% | 9.13s |   7,284 | `checkBlock`               | `node_modules/typescript/lib/typescript.js` |
| 42.0% | 5.05s |   4,033 | `checkVariableDeclaration` | `node_modules/typescript/lib/typescript.js` |
| 41.9% | 5.05s |   4,028 | `checkVariableStatement`   | `node_modules/typescript/lib/typescript.js` |
| 25.0% | 3.01s |   2,407 | `checkExpressionStatement` | `node_modules/typescript/lib/typescript.js` |
| 20.7% | 2.49s |   1,989 | `checkTypeReferenceNode`   | `node_modules/typescript/lib/typescript.js` |

##### `checkExpression` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                                          | Location                                    |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------- |
| 99.9% |   9.18s |   7,325 | `checkExpressionWorker`                         | `node_modules/typescript/lib/typescript.js` |
|  1.1% | 104.1ms |      83 | `instantiateTypeWithSingleGenericCallSignature` | `node_modules/typescript/lib/typescript.js` |
|  0.2% |  22.6ms |      18 | `checkIfStatement`                              | `node_modules/typescript/lib/typescript.js` |
|  0.1% |   8.8ms |       7 | `isConstEnumObjectType`                         | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   2.5ms |       2 | `checkFunctionExpressionOrObjectLiteralMethod`  | `node_modules/typescript/lib/typescript.js` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                          | Location                                    |
| ----: | ----: | ------: | ------------------------------- | ------------------------------------------- |
| 90.4% | 8.30s |   6,625 | `checkCallExpression`           | `node_modules/typescript/lib/typescript.js` |
| 32.6% | 2.99s |   2,386 | `checkPropertyAccessExpression` | `node_modules/typescript/lib/typescript.js` |
| 28.5% | 2.61s |   2,088 | `checkObjectLiteral`            | `node_modules/typescript/lib/typescript.js` |
| 16.1% | 1.48s |   1,182 | `checkArrayLiteral`             | `node_modules/typescript/lib/typescript.js` |
| 11.7% | 1.07s |     859 | `checkIdentifier`               | `node_modules/typescript/lib/typescript.js` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs:3:33`) ← `run` (`node:internal/modules/esm/module_job`)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0.4% | 70.2ms |      56 | `wrapSafe` (`node:internal/modules/cjs/loader`) ← `(anonymous)` (1755:18) ← `(anonymous)` (1913:37) ← `(anonymous)` (1505:37) ← `(anonymous)` (1309:33) ← `wrapModuleLoad` ← `(anonymous)` (1527:24) ← `require` (`node:internal/modules/helpers`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.3% | 55.2ms |      44 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                         |
| 0.3% | 53.9ms |      43 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.3% | 42.6ms |      34 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% | 41.4ms |      33 | `getUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% | 37.6ms |      30 | `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.2% | 36.4ms |      29 | `createUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`) ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.2% | 35.1ms |      28 | `getNodeLinks` (`node_modules/typescript/lib/typescript.js`) ← `hasSkipDirectInferenceFlag` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveNewExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkAwaitExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% | 30.1ms |      24 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                              |
| 0.1% | 23.8ms |      19 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.1% | 22.6ms |      18 | `some` (`node_modules/typescript/lib/typescript.js`) ← `getNormalizedUnionOrIntersectionType` ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` |
| 0.1% | 21.3ms |      17 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                         |
| 0.1% | 21.3ms |      17 | `scan` (`node_modules/typescript/lib/typescript.js`) ← `nextTokenWithoutCheck` ← `nextToken` ← `tryParseSemicolon` ← `parseSemicolon` ← `parseTypeMemberSemicolon` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119847:28) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:28) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120715:29) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.1% | 20.1ms |      16 | `getPropertyOfType` (`node_modules/typescript/lib/typescript.js`) ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.1% | 18.8ms |      15 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.1% | 17.6ms |      14 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.1% | 17.6ms |      14 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.1% | 16.3ms |      13 | `getPropertiesOfUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`) ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.1% | 16.3ms |      13 | `doJSDocScan` (`node_modules/typescript/lib/typescript.js`) ← `scanRange` ← `parseJSDocCommentWorker` ← `(anonymous)` (35026:43) ← `doInsideOfContext` ← `parseJSDocComment` ← `(anonymous)` (29528:37) ← `mapDefined` ← `withJSDoc` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119847:28) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:28) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120715:29) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.1% | 15.0ms |      12 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

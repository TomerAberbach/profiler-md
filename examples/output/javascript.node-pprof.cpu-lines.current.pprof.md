# Wall time profile

Took 22.13s over 16,030 samples (1.4ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 86.5% |  19.15s |  13,869 |
| Garbage collector  | 11.9% |   2.62s |   1,900 |
| Native             |  0.8% | 179.5ms |     130 |
| Standard library   |  0.7% | 149.1ms |     108 |
| Regular expression |  0.1% |  29.0ms |      21 |
| Ours               | <0.1% |   2.8ms |       2 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                        | Location                                    |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------- |
| 11.9% |   2.62s |   1,900 | `(garbage collector)`           | `<unknown>`                                 |
|  3.0% | 653.2ms |     473 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js` |
|  2.3% | 506.8ms |     367 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js` |
|  2.1% | 462.6ms |     335 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
|  1.9% | 429.5ms |     311 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js` |
|  1.9% | 411.5ms |     298 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js` |
|  1.6% | 350.8ms |     254 | `scan`                          | `node_modules/typescript/lib/typescript.js` |
|  1.3% | 279.0ms |     202 | `some`                          | `node_modules/typescript/lib/typescript.js` |
|  1.1% | 240.3ms |     174 | `getNodeLinks`                  | `node_modules/typescript/lib/typescript.js` |
|  1.0% | 214.1ms |     155 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js` |
|  0.9% | 200.2ms |     145 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js` |
|  0.9% | 193.3ms |     140 | `createTypeReference`           | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 172.6ms |     125 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 161.6ms |     117 | `getReducedApparentType`        | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 151.9ms |     110 | `invokeOnce`                    | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 143.6ms |     104 | `bind`                          | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 134.0ms |      97 | `instantiateList`               | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 128.4ms |      93 | `instantiateType`               | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 127.1ms |      92 | `resolveStructuredTypeMembers`  | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 127.1ms |      92 | `getMembersOfSymbol`            | `node_modules/typescript/lib/typescript.js` |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                        | Location                                    |
| ---: | ------: | ------: | ------------------------------- | ------------------------------------------- |
| 3.0% | 653.2ms |     473 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js` |
| 2.3% | 506.8ms |     367 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js` |
| 2.1% | 462.6ms |     335 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
| 1.9% | 429.5ms |     311 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js` |
| 1.9% | 411.5ms |     298 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js` |
| 1.6% | 350.8ms |     254 | `scan`                          | `node_modules/typescript/lib/typescript.js` |
| 1.3% | 279.0ms |     202 | `some`                          | `node_modules/typescript/lib/typescript.js` |
| 1.1% | 240.3ms |     174 | `getNodeLinks`                  | `node_modules/typescript/lib/typescript.js` |
| 1.0% | 214.1ms |     155 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js` |
| 0.9% | 200.2ms |     145 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js` |
| 0.9% | 193.3ms |     140 | `createTypeReference`           | `node_modules/typescript/lib/typescript.js` |
| 0.8% | 172.6ms |     125 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 161.6ms |     117 | `getReducedApparentType`        | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 151.9ms |     110 | `invokeOnce`                    | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 143.6ms |     104 | `bind`                          | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 134.0ms |      97 | `instantiateList`               | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 128.4ms |      93 | `instantiateType`               | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 127.1ms |      92 | `resolveStructuredTypeMembers`  | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 127.1ms |      92 | `getMembersOfSymbol`            | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 124.3ms |      90 | `isTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js` |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 11.9% | 2.62s |   1,900 | `(garbage collector)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 51.2% | 334.2ms |     242 | `node_modules/typescript/lib/typescript.js:64396` |
|  6.8% |  44.2ms |      32 | `node_modules/typescript/lib/typescript.js:64443` |
|  5.3% |  34.5ms |      25 | `node_modules/typescript/lib/typescript.js:64449` |
|  4.4% |  29.0ms |      21 | `node_modules/typescript/lib/typescript.js:64383` |
|  4.2% |  27.6ms |      20 | `node_modules/typescript/lib/typescript.js:64422` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 56.9% | 288.6ms |     209 | `node_modules/typescript/lib/typescript.js:63505` |
| 29.4% | 149.1ms |     108 | `node_modules/typescript/lib/typescript.js:63524` |
|  6.5% |  33.1ms |      24 | `node_modules/typescript/lib/typescript.js:63588` |
|  2.2% |  11.0ms |       8 | `node_modules/typescript/lib/typescript.js:63523` |
|  1.1% |   5.5ms |       4 | `node_modules/typescript/lib/typescript.js:63521` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 22.7% | 105.0ms |      76 | `node_modules/typescript/lib/typescript.js:63910` |
| 13.7% |  63.5ms |      46 | `node_modules/typescript/lib/typescript.js:63843` |
| 11.6% |  53.9ms |      39 | `node_modules/typescript/lib/typescript.js:63813` |
|  8.4% |  38.7ms |      28 | `node_modules/typescript/lib/typescript.js:63481` |
|  7.5% |  34.5ms |      25 | `node_modules/typescript/lib/typescript.js:63830` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 37.6% | 161.6ms |     117 | `node_modules/typescript/lib/typescript.js:62149` |
| 10.0% |  42.8ms |      31 | `node_modules/typescript/lib/typescript.js:62153` |
|  7.4% |  31.8ms |      23 | `node_modules/typescript/lib/typescript.js:62152` |
|  3.2% |  13.8ms |      10 | `node_modules/typescript/lib/typescript.js:61987` |
|  2.3% |   9.7ms |       7 | `node_modules/typescript/lib/typescript.js:62141` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 48.0% | 197.5ms |     143 | `node_modules/typescript/lib/typescript.js:62370` |
| 10.4% |  42.8ms |      31 | `node_modules/typescript/lib/typescript.js:62383` |
|  9.4% |  38.7ms |      28 | `node_modules/typescript/lib/typescript.js:62354` |
|  6.7% |  27.6ms |      20 | `node_modules/typescript/lib/typescript.js:62365` |
|  2.3% |   9.7ms |       7 | `node_modules/typescript/lib/typescript.js:62386` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 15.0% | 52.5ms |      38 | `node_modules/typescript/lib/typescript.js:10352` |
| 15.0% | 52.5ms |      38 | `node_modules/typescript/lib/typescript.js:11234` |
|  7.5% | 26.2ms |      19 | `node_modules/typescript/lib/typescript.js:10816` |
|  5.9% | 20.7ms |      15 | `node_modules/typescript/lib/typescript.js:10514` |
|  4.3% | 15.2ms |      11 | `node_modules/typescript/lib/typescript.js:10327` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                        |
| ----: | ------: | ------: | ----------------------------------------------- |
| 74.8% | 208.5ms |     151 | `node_modules/typescript/lib/typescript.js:472` |
| 13.9% |  38.7ms |      28 | `node_modules/typescript/lib/typescript.js:471` |
|  8.9% |  24.9ms |      18 | `node_modules/typescript/lib/typescript.js:468` |
|  1.5% |   4.1ms |       3 | `node_modules/typescript/lib/typescript.js:469` |
|  0.5% |   1.4ms |       1 | `node_modules/typescript/lib/typescript.js:477` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 96.6% | 232.0ms |     168 | `node_modules/typescript/lib/typescript.js:47545` |
|  1.7% |   4.1ms |       3 | `node_modules/typescript/lib/typescript.js:47543` |
|  1.1% |   2.8ms |       2 | `node_modules/typescript/lib/typescript.js:47544` |
|  0.6% |   1.4ms |       1 | `node_modules/typescript/lib/typescript.js:46122` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 99.4% | 212.7ms |     154 | `node_modules/typescript/lib/typescript.js:56405` |
|  0.6% |   1.4ms |       1 | `node_modules/typescript/lib/typescript.js:56403` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 20.7% | 41.4ms |      30 | `node_modules/typescript/lib/typescript.js:67379` |
|  9.7% | 19.3ms |      14 | `node_modules/typescript/lib/typescript.js:67237` |
|  5.5% | 11.0ms |       8 | `node_modules/typescript/lib/typescript.js:67215` |
|  4.8% |  9.7ms |       7 | `node_modules/typescript/lib/typescript.js:67339` |
|  4.1% |  8.3ms |       6 | `node_modules/typescript/lib/typescript.js:67225` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 65.7% | 127.1ms |      92 | `node_modules/typescript/lib/typescript.js:58884` |
| 25.0% |  48.3ms |      35 | `node_modules/typescript/lib/typescript.js:58887` |
|  4.3% |   8.3ms |       6 | `node_modules/typescript/lib/typescript.js:58882` |
|  1.4% |   2.8ms |       2 | `node_modules/typescript/lib/typescript.js:58886` |
|  0.7% |   1.4ms |       1 | `node_modules/typescript/lib/typescript.js:58888` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 14.4% | 24.9ms |      18 | `node_modules/typescript/lib/typescript.js:65073` |
|  9.6% | 16.6ms |      12 | `node_modules/typescript/lib/typescript.js:65088` |
|  9.6% | 16.6ms |      12 | `node_modules/typescript/lib/typescript.js:64699` |
|  8.8% | 15.2ms |      11 | `node_modules/typescript/lib/typescript.js:65040` |
|  8.8% | 15.2ms |      11 | `node_modules/typescript/lib/typescript.js:65086` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 82.1% | 132.6ms |      96 | `node_modules/typescript/lib/typescript.js:57867` |
|  8.5% |  13.8ms |      10 | `node_modules/typescript/lib/typescript.js:57866` |
|  1.7% |   2.8ms |       2 | `node_modules/typescript/lib/typescript.js:57862` |
|  1.7% |   2.8ms |       2 | `node_modules/typescript/lib/typescript.js:58051` |
|  1.7% |   2.8ms |       2 | `node_modules/typescript/lib/typescript.js:17465` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 20.0% | 30.4ms |      22 | `node_modules/typescript/lib/typescript.js:67402` |
| 20.0% | 30.4ms |      22 | `node_modules/typescript/lib/typescript.js:67403` |
| 17.3% | 26.2ms |      19 | `node_modules/typescript/lib/typescript.js:67414` |
| 14.5% | 22.1ms |      16 | `node_modules/typescript/lib/typescript.js:67419` |
|  9.1% | 13.8ms |      10 | `node_modules/typescript/lib/typescript.js:67408` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 30.8% | 44.2ms |      32 | `node_modules/typescript/lib/typescript.js:44008` |
| 25.0% | 35.9ms |      26 | `node_modules/typescript/lib/typescript.js:44014` |
|  5.8% |  8.3ms |       6 | `node_modules/typescript/lib/typescript.js:44035` |
|  4.8% |  6.9ms |       5 | `node_modules/typescript/lib/typescript.js:44956` |
|  4.8% |  6.9ms |       5 | `node_modules/typescript/lib/typescript.js:44016` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 57.7% | 77.3ms |      56 | `node_modules/typescript/lib/typescript.js:61961` |
| 18.6% | 24.9ms |      18 | `node_modules/typescript/lib/typescript.js:61963` |
| 13.4% | 18.0ms |      13 | `node_modules/typescript/lib/typescript.js:61966` |
|  4.1% |  5.5ms |       4 | `node_modules/typescript/lib/typescript.js:61957` |
|  3.1% |  4.1ms |       3 | `node_modules/typescript/lib/typescript.js:61965` |

##### `instantiateType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 43.0% | 55.2ms |      40 | `node_modules/typescript/lib/typescript.js:62327` |
| 11.8% | 15.2ms |      11 | `node_modules/typescript/lib/typescript.js:66923` |
| 10.8% | 13.8ms |      10 | `node_modules/typescript/lib/typescript.js:66925` |
|  7.5% |  9.7ms |       7 | `node_modules/typescript/lib/typescript.js:17465` |
|  5.4% |  6.9ms |       5 | `node_modules/typescript/lib/typescript.js:62339` |

##### `resolveStructuredTypeMembers` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 38.0% | 48.3ms |      35 | `node_modules/typescript/lib/typescript.js:57461` |
| 20.7% | 26.2ms |      19 | `node_modules/typescript/lib/typescript.js:57471` |
| 13.0% | 16.6ms |      12 | `node_modules/typescript/lib/typescript.js:57465` |
|  7.6% |  9.7ms |       7 | `node_modules/typescript/lib/typescript.js:57473` |
|  7.6% |  9.7ms |       7 | `node_modules/typescript/lib/typescript.js:57462` |

##### `getMembersOfSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 83.7% | 106.3ms |      77 | `node_modules/typescript/lib/typescript.js:56564` |
| 16.3% |  20.7ms |      15 | `node_modules/typescript/lib/typescript.js:56563` |

##### `isTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 53.3% | 66.3ms |      48 | `node_modules/typescript/lib/typescript.js:63466` |
| 26.7% | 33.1ms |      24 | `node_modules/typescript/lib/typescript.js:63453` |
| 10.0% | 12.4ms |       9 | `node_modules/typescript/lib/typescript.js:63432` |
|  8.9% | 11.0ms |       8 | `node_modules/typescript/lib/typescript.js:63443` |
|  1.1% |  1.4ms |       1 | `node_modules/typescript/lib/typescript.js:63462` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller               | Location                                    |
| ----: | ------: | ------: | -------------------- | ------------------------------------------- |
| 98.9% | 646.3ms |     468 | `isRelatedTo`        | `node_modules/typescript/lib/typescript.js` |
|  1.1% |   6.9ms |       5 | `checkTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                                     | Location                                    |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------------------------- |
| 98.4% | 498.5ms |     361 | `isTypeRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
|  0.8% |   4.1ms |       3 | `checkTypeAssignableTo`                    | `node_modules/typescript/lib/typescript.js` |
|  0.8% |   4.1ms |       3 | `checkTypeRelatedToAndOptionallyElaborate` | `node_modules/typescript/lib/typescript.js` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 54.3% | 251.3ms |     182 | `checkTypeRelatedTo`          | `node_modules/typescript/lib/typescript.js` |
| 15.8% |  73.2ms |      53 | `isRelatedToWorker2`          | `node_modules/typescript/lib/typescript.js` |
| 11.0% |  51.1ms |      37 | `isPropertySymbolTypeRelated` | `node_modules/typescript/lib/typescript.js` |
|  5.7% |  26.2ms |      19 | `eachTypeRelatedToType`       | `node_modules/typescript/lib/typescript.js` |
|  3.9% |  18.0ms |      13 | `typeArgumentsRelatedTo`      | `node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                     | Location                                    |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------- |
| 99.7% | 428.1ms |     310 | `instantiateTypeWorker`    | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.4ms |       1 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                         | Location                                    |
| ----: | ------: | ------: | ------------------------------ | ------------------------------------------- |
| 99.0% | 407.4ms |     295 | `instantiateTypeWithAlias`     | `node_modules/typescript/lib/typescript.js` |
|  0.7% |   2.8ms |       2 | `instantiateList`              | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.4ms |       1 | `instantiateInstantiableTypes` | `node_modules/typescript/lib/typescript.js` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                   | Location                                    |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------- |
| 97.6% | 342.5ms |     248 | `nextTokenWithoutCheck`  | `node_modules/typescript/lib/typescript.js` |
|  0.8% |   2.8ms |       2 | `scanTokenAtPosition`    | `node_modules/typescript/lib/typescript.js` |
|  0.8% |   2.8ms |       2 | `checkTypeReferenceNode` | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.4ms |       1 | `parsePrimaryExpression` | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.4ms |       1 | `parseOptional`          | `node_modules/typescript/lib/typescript.js` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                                 | Location                                    |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------------------- |
| 56.9% | 158.8ms |     115 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
|  6.9% |  19.3ms |      14 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js` |
|  6.4% |  18.0ms |      13 | `hasMatchingRecursionIdentity`         | `node_modules/typescript/lib/typescript.js` |
|  5.9% |  16.6ms |      12 | `isTypeReferenceWithGenericArguments`  | `node_modules/typescript/lib/typescript.js` |
|  4.0% |  11.0ms |       8 | `inferFromProperties`                  | `node_modules/typescript/lib/typescript.js` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                         | Location                                    |
| ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------- |
| 31.6% | 76.0ms |      55 | `hasSkipDirectInferenceFlag`                   | `node_modules/typescript/lib/typescript.js` |
| 16.7% | 40.0ms |      29 | `getResolvedSymbol`                            | `node_modules/typescript/lib/typescript.js` |
| 14.9% | 35.9ms |      26 | `getObjectTypeInstantiation`                   | `node_modules/typescript/lib/typescript.js` |
|  8.6% | 20.7ms |      15 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |
|  6.3% | 15.2ms |      11 | `getTypeFromTypeReference`                     | `node_modules/typescript/lib/typescript.js` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 96.8% | 207.1ms |     150 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js` |
|  3.2% |   6.9ms |       5 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                    |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| 19.3% | 38.7ms |      28 | `inferFromProperties`         | `node_modules/typescript/lib/typescript.js` |
| 13.8% | 27.6ms |      20 | `inferFromContravariantTypes` | `node_modules/typescript/lib/typescript.js` |
| 13.8% | 27.6ms |      20 | `inferFromMatchingTypes`      | `node_modules/typescript/lib/typescript.js` |
| 13.1% | 26.2ms |      19 | `inferFromTypeArguments`      | `node_modules/typescript/lib/typescript.js` |
| 13.1% | 26.2ms |      19 | `applyToReturnTypes`          | `node_modules/typescript/lib/typescript.js` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                            | Location                                    |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------- |
| 63.6% | 122.9ms |      89 | `createNormalizedTypeReference`   | `node_modules/typescript/lib/typescript.js` |
| 15.7% |  30.4ms |      22 | `getTypeWithThisArgument`         | `node_modules/typescript/lib/typescript.js` |
| 12.1% |  23.5ms |      17 | `getNormalizedType`               | `node_modules/typescript/lib/typescript.js` |
|  5.0% |   9.7ms |       7 | `createNormalizedTupleType`       | `node_modules/typescript/lib/typescript.js` |
|  1.4% |   2.8ms |       2 | `createTypeFromGenericGlobalType` | `node_modules/typescript/lib/typescript.js` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                    | Location                                    |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------- |
| 97.6% | 168.5ms |     122 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |
|  2.4% |   4.1ms |       3 | `recursiveTypeRelatedTo`  | `node_modules/typescript/lib/typescript.js` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                         | Location                                    |
| ----: | -----: | ------: | ------------------------------ | ------------------------------------------- |
| 45.3% | 73.2ms |      53 | `getPropertyOfType`            | `node_modules/typescript/lib/typescript.js` |
| 44.4% | 71.8ms |      52 | `getSignaturesOfType`          | `node_modules/typescript/lib/typescript.js` |
|  3.4% |  5.5ms |       4 | `getIndexInfosOfType`          | `node_modules/typescript/lib/typescript.js` |
|  2.6% |  4.1ms |       3 | `getPropertiesOfType`          | `node_modules/typescript/lib/typescript.js` |
|  1.7% |  2.8ms |       2 | `resolveStructuredTypeMembers` | `node_modules/typescript/lib/typescript.js` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                   | Location                                    |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------- |
| 99.1% | 150.5ms |     109 | `inferFromTypes`         | `node_modules/typescript/lib/typescript.js` |
|  0.9% |   1.4ms |       1 | `inferFromTypeArguments` | `node_modules/typescript/lib/typescript.js` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller              | Location                                             |
| ----: | -----: | ------: | ------------------- | ---------------------------------------------------- |
| 37.5% | 53.9ms |      39 | `visitNode2`        | `node_modules/typescript/lib/typescript.js`          |
| 26.9% | 38.7ms |      28 | `forEach`           | `node_modules/typescript/lib/typescript.js`          |
| 22.1% | 31.8ms |      23 | `bindParameterFlow` | `node_modules/typescript/lib/typescript.js`          |
|  6.7% |  9.7ms |       7 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:42712:18` |
|  1.9% |  2.8ms |       2 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:42711:18` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                         | Location                                    |
| ----: | -----: | ------: | ------------------------------ | ------------------------------------------- |
| 51.5% | 69.0ms |      50 | `instantiateTypes`             | `node_modules/typescript/lib/typescript.js` |
| 27.8% | 37.3ms |      27 | `instantiateSignatures`        | `node_modules/typescript/lib/typescript.js` |
| 18.6% | 24.9ms |      18 | `instantiateSignature`         | `node_modules/typescript/lib/typescript.js` |
|  1.0% |  1.4ms |       1 | `resolveStructuredTypeMembers` | `node_modules/typescript/lib/typescript.js` |
|  1.0% |  1.4ms |       1 | `resolveTypeReferenceMembers`  | `node_modules/typescript/lib/typescript.js` |

##### `instantiateType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                    |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| 37.6% | 48.3ms |      35 | `instantiateList`             | `node_modules/typescript/lib/typescript.js` |
| 17.2% | 22.1ms |      16 | `getMappedType`               | `node_modules/typescript/lib/typescript.js` |
| 11.8% | 15.2ms |      11 | `getTypeOfInstantiatedSymbol` | `node_modules/typescript/lib/typescript.js` |
|  9.7% | 12.4ms |       9 | `instantiateTypeWorker`       | `node_modules/typescript/lib/typescript.js` |
|  8.6% | 11.0ms |       8 | `getConditionalType`          | `node_modules/typescript/lib/typescript.js` |

##### `resolveStructuredTypeMembers` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                          | Location                                    |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------- |
| 34.8% | 44.2ms |      32 | `getPropertyOfType`             | `node_modules/typescript/lib/typescript.js` |
| 21.7% | 27.6ms |      20 | `getSignaturesOfStructuredType` | `node_modules/typescript/lib/typescript.js` |
| 17.4% | 22.1ms |      16 | `getPropertiesOfObjectType`     | `node_modules/typescript/lib/typescript.js` |
|  6.5% |  8.3ms |       6 | `isWeakType`                    | `node_modules/typescript/lib/typescript.js` |
|  6.5% |  8.3ms |       6 | `getIndexInfosOfStructuredType` | `node_modules/typescript/lib/typescript.js` |

##### `getMembersOfSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                                                  | Location                                    |
| ----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------- |
| 80.4% | 102.2ms |      74 | `isEmptyAnonymousObjectType`                            | `node_modules/typescript/lib/typescript.js` |
|  9.8% |  12.4ms |       9 | `getSingleBaseForNonAugmentingSubtype`                  | `node_modules/typescript/lib/typescript.js` |
|  3.3% |   4.1ms |       3 | `resolveObjectTypeMembers`                              | `node_modules/typescript/lib/typescript.js` |
|  2.2% |   2.8ms |       2 | `some`                                                  | `node_modules/typescript/lib/typescript.js` |
|  1.1% |   1.4ms |       1 | `getTypeFromTypeLiteralOrFunctionOrConstructorTypeNode` | `node_modules/typescript/lib/typescript.js` |

##### `isTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                     | Location                                    |
| ----: | -----: | ------: | ------------------------------------------ | ------------------------------------------- |
| 46.7% | 58.0ms |      42 | `isTypeIdenticalTo`                        | `node_modules/typescript/lib/typescript.js` |
| 26.7% | 33.1ms |      24 | `isTypeAssignableTo`                       | `node_modules/typescript/lib/typescript.js` |
| 12.2% | 15.2ms |      11 | `checkTypeRelatedToAndOptionallyElaborate` | `node_modules/typescript/lib/typescript.js` |
|  6.7% |  8.3ms |       6 | `isTypeComparableTo`                       | `node_modules/typescript/lib/typescript.js` |
|  4.4% |  5.5ms |       4 | `compareTypesAssignable`                   | `node_modules/typescript/lib/typescript.js` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |   Time | Samples | Function                                   | Location                                              |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 86.9% | 19.24s |  13,936 | `typeCheckProject`                         | `tsc-workload.mjs`                                    |
| 86.9% | 19.24s |  13,934 | `(anonymous)`                              | `datadog-pprof.mjs:3:33`                              |
| 86.9% | 19.23s |  13,930 | `run`                                      | `node:internal/modules/esm/module_job`                |
| 83.2% | 18.40s |  13,329 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 76.1% | 16.85s |  12,203 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 76.1% | 16.85s |  12,203 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 76.1% | 16.85s |  12,203 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 76.1% | 16.85s |  12,202 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 76.1% | 16.84s |  12,201 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 76.1% | 16.84s |  12,197 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 76.1% | 16.84s |  12,196 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 76.1% | 16.84s |  12,195 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121543:43` |
| 76.1% | 16.83s |  12,192 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 71.5% | 15.82s |  11,456 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 71.5% | 15.82s |  11,456 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 71.5% | 15.81s |  11,455 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 71.4% | 15.81s |  11,451 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 71.4% | 15.80s |  11,448 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 71.4% | 15.80s |  11,444 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121619:29` |
| 70.6% | 15.63s |  11,319 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |

#### Categories

##### Third-party

|     % |   Time | Samples | Function                                   | Location                                              |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 83.2% | 18.40s |  13,329 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 76.1% | 16.85s |  12,203 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 76.1% | 16.85s |  12,203 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 76.1% | 16.85s |  12,203 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 76.1% | 16.85s |  12,202 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 76.1% | 16.84s |  12,201 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 76.1% | 16.84s |  12,197 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 76.1% | 16.84s |  12,196 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 76.1% | 16.84s |  12,195 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121543:43` |
| 76.1% | 16.83s |  12,192 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 71.5% | 15.82s |  11,456 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 71.5% | 15.82s |  11,456 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 71.5% | 15.81s |  11,455 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 71.4% | 15.81s |  11,451 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 71.4% | 15.80s |  11,448 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 71.4% | 15.80s |  11,444 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121619:29` |
| 70.6% | 15.63s |  11,319 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| 70.6% | 15.62s |  11,317 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| 54.0% | 11.94s |   8,652 | `checkExpression`                          | `node_modules/typescript/lib/typescript.js`           |
| 53.9% | 11.93s |   8,639 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 11.9% | 2.62s |   1,900 | `(garbage collector)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |    Time | Samples | Callee                             | Location                                    |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------- |
| 87.5% |  16.83s |  12,191 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| 11.7% |   2.24s |   1,629 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 122.9ms |      89 | `require`                          | `node:internal/modules/helpers`             |
|  0.2% |  31.8ms |      23 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.4ms |       1 | `getSyntacticDiagnostics`          | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof.mjs:3:33`)

|      % |   Time | Samples | Callee             | Location           |
| -----: | -----: | ------: | ------------------ | ------------------ |
| 100.0% | 19.24s |  13,934 | `typeCheckProject` | `tsc-workload.mjs` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |   Time | Samples | Callee        | Location                 |
| -----: | -----: | ------: | ------------- | ------------------------ |
| 100.0% | 19.23s |  13,930 | `(anonymous)` | `datadog-pprof.mjs:3:33` |

##### `forEach` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee               | Location                                              |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------- |
| 84.7% |  15.59s |  11,292 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js`           |
|  5.6% |   1.02s |     741 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120665:29` |
|  5.2% | 948.7ms |     687 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:42712:18`  |
|  4.2% | 770.6ms |     558 | `bind`               | `node_modules/typescript/lib/typescript.js`           |
|  2.0% | 370.1ms |     268 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122413:31` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee        | Location                                              |
| ----: | -----: | ------: | ------------- | ----------------------------------------------------- |
| 93.8% | 15.80s |  11,443 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121619:29` |
|  6.2% |  1.04s |     754 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121611:28` |
| <0.1% |  2.8ms |       2 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121624:46` |
| <0.1% |  1.4ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121624:19` |
| <0.1% |  1.4ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121612:24` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                     | Location                                    |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------- |
| 100.0% | 16.85s |  12,203 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                     | Location                                    |
| -----: | -----: | ------: | ------------------------------------------ | ------------------------------------------- |
| 100.0% | 16.84s |  12,201 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                   | Location                                    |
| -----: | -----: | ------: | ------------------------ | ------------------------------------------- |
| 100.0% | 16.84s |  12,201 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                              | Location                                    |
| -----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 16.84s |  12,198 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  2.8ms |       2 | `getProgramDiagnostics`             | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.4ms |       1 | `getDiagnostics2`                   | `node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee        | Location                                              |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 16.83s |  12,194 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121543:43` |
|  <0.1% |  1.4ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121543:44` |
|  <0.1% |  1.4ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121543:35` |
|  <0.1% |  1.4ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:18056:33`  |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee    | Location                                    |
| -----: | -----: | ------: | --------- | ------------------------------------------- |
| 100.0% | 16.84s |  12,196 | `flatMap` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121543:43`)

|      % |   Time | Samples | Callee                          | Location                                    |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------- |
| 100.0% | 16.84s |  12,195 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                    |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 16.83s |  12,192 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee                       | Location                                    |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| 56.5% |  8.93s |   6,468 | `checkDeferredNodes`         | `node_modules/typescript/lib/typescript.js` |
| 43.3% |  6.84s |   4,958 | `forEach`                    | `node_modules/typescript/lib/typescript.js` |
|  0.1% | 22.1ms |      16 | `addLazyDiagnostic`          | `node_modules/typescript/lib/typescript.js` |
|  0.1% | 13.8ms |      10 | `checkExternalModuleExports` | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  1.4ms |       1 | `getExportsOfModule`         | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                       | Location                                    |
| -----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 15.81s |  11,454 | `checkSourceFileWorker`      | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.4ms |       1 | `checkDeferredNodes`         | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.4ms |       1 | `isExternalOrCommonJsModule` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                  | Location                                    |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 15.81s |  11,453 | `checkSourceFile`       | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.4ms |       1 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.4ms |       1 | `measure`               | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                | Location                                    |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------------- |
| 100.0% | 15.81s |  11,450 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                    |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 15.80s |  11,447 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121619:29`)

|      % |   Time | Samples | Callee            | Location                                    |
| -----: | -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 15.80s |  11,444 | `getDiagnostics2` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee                     | Location                                    |
| ----: | -----: | ------: | -------------------------- | ------------------------------------------- |
| 75.7% | 11.83s |   8,573 | `checkBlock`               | `node_modules/typescript/lib/typescript.js` |
| 42.7% |  6.67s |   4,830 | `checkVariableDeclaration` | `node_modules/typescript/lib/typescript.js` |
| 42.6% |  6.65s |   4,822 | `checkVariableStatement`   | `node_modules/typescript/lib/typescript.js` |
| 25.5% |  3.98s |   2,888 | `checkExpressionStatement` | `node_modules/typescript/lib/typescript.js` |
| 20.0% |  3.11s |   2,259 | `checkTypeReferenceNode`   | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                  | Location                                    |
| -----: | -----: | ------: | --------------------------------------- | ------------------------------------------- |
| 100.0% | 15.62s |  11,316 | `checkSourceElementWorker`              | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  2.8ms |       2 | `checkVariableStatement`                | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  2.8ms |       2 | `checkTypeReferenceOrImport`            | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.4ms |       1 | `checkGrammarForAtLeastOneTypeArgument` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.4ms |       1 | `checkTypeOperator`                     | `node_modules/typescript/lib/typescript.js` |

##### `checkExpression` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                                          | Location                                    |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------- |
| 99.8% |  11.92s |   8,638 | `checkExpressionWorker`                         | `node_modules/typescript/lib/typescript.js` |
|  1.3% | 150.5ms |     109 | `instantiateTypeWithSingleGenericCallSignature` | `node_modules/typescript/lib/typescript.js` |
|  0.3% |  34.5ms |      25 | `checkIfStatement`                              | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   5.5ms |       4 | `isConstEnumObjectType`                         | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   4.1ms |       3 | `checkObjectLiteral`                            | `node_modules/typescript/lib/typescript.js` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee                          | Location                                    |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------- |
| 91.0% | 10.85s |   7,858 | `checkCallExpression`           | `node_modules/typescript/lib/typescript.js` |
| 32.5% |  3.87s |   2,806 | `checkPropertyAccessExpression` | `node_modules/typescript/lib/typescript.js` |
| 29.3% |  3.49s |   2,529 | `checkObjectLiteral`            | `node_modules/typescript/lib/typescript.js` |
| 16.6% |  1.97s |   1,433 | `checkArrayLiteral`             | `node_modules/typescript/lib/typescript.js` |
| 10.9% |  1.30s |     943 | `checkIdentifier`               | `node_modules/typescript/lib/typescript.js` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs:3:33`) ← `run` (`node:internal/modules/esm/module_job`)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0.4% | 84.2ms |      61 | `wrapSafe` (`node:internal/modules/cjs/loader`) ← `(anonymous)` (1755:18) ← `(anonymous)` (1913:37) ← `(anonymous)` (1505:37) ← `(anonymous)` (1309:33) ← `wrapModuleLoad` ← `(anonymous)` (1527:24) ← `require` (`node:internal/modules/helpers`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.3% | 58.0ms |      42 | `getNodeLinks` (`node_modules/typescript/lib/typescript.js`) ← `hasSkipDirectInferenceFlag` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveNewExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkAwaitExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.3% | 56.6ms |      41 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                               |
| 0.2% | 53.9ms |      39 | `getUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% | 48.3ms |      35 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.2% | 44.2ms |      32 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% | 41.4ms |      30 | `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.2% | 40.0ms |      29 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                    |
| 0.2% | 34.5ms |      25 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% | 34.5ms |      25 | `scan` (`node_modules/typescript/lib/typescript.js`) ← `nextTokenWithoutCheck` ← `nextToken` ← `tryParseSemicolon` ← `parseSemicolon` ← `parseTypeMemberSemicolon` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119847:28) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:28) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120715:29) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.1% | 31.8ms |      23 | `some` (`node_modules/typescript/lib/typescript.js`) ← `getNormalizedUnionOrIntersectionType` ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                       |
| 0.1% | 30.4ms |      22 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                               |
| 0.1% | 26.2ms |      19 | `createUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`) ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.1% | 24.9ms |      18 | `doJSDocScan` (`node_modules/typescript/lib/typescript.js`) ← `scanRange` ← `parseJSDocCommentWorker` ← `(anonymous)` (35026:43) ← `doInsideOfContext` ← `parseJSDocComment` ← `(anonymous)` (29528:37) ← `mapDefined` ← `withJSDoc` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119847:28) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:28) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120715:29) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.1% | 23.5ms |      17 | `getMembersOfSymbol` (`node_modules/typescript/lib/typescript.js`) ← `isEmptyAnonymousObjectType` ← `some` ← `getNormalizedUnionOrIntersectionType` ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` |
| 0.1% | 20.7ms |      15 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.1% | 19.3ms |      14 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isPropertySymbolTypeRelated` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `checkTypeAssignableTo` ← `checkTypeArgumentConstraints` ← `(anonymous)` (79471:42) ← `addLazyDiagnostic` ← `checkTypeReferenceOrImport` ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkTypeAliasDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.1% | 19.3ms |      14 | `getPropertyOfType` (`node_modules/typescript/lib/typescript.js`) ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.1% | 19.3ms |      14 | `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfObjectType` ← `getPropertiesOfType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.1% | 19.3ms |      14 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

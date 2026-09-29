# Wall time profile

Took 16.28s over 12,969 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 86.3% |  14.06s |  11,197 |
| Garbage collector  | 11.7% |   1.90s |   1,513 |
| Native             |  0.9% | 150.7ms |     120 |
| Standard library   |  0.8% | 138.2ms |     110 |
| Regular expression |  0.2% |  35.2ms |      28 |
| Ours               | <0.1% |   1.3ms |       1 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                               | Location                                    |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------------------- |
| 11.7% |   1.90s |   1,513 | `(garbage collector)`                  | `<unknown>`                                 |
|  3.1% | 498.6ms |     397 | `recursiveTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js` |
|  2.8% | 463.5ms |     369 | `checkTypeRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
|  2.1% | 346.7ms |     276 | `isRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
|  2.0% | 331.6ms |     264 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js` |
|  1.8% | 288.9ms |     230 | `instantiateTypeWorker`                | `node_modules/typescript/lib/typescript.js` |
|  1.6% | 266.3ms |     212 | `scan`                                 | `node_modules/typescript/lib/typescript.js` |
|  1.0% | 165.8ms |     132 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
|  1.0% | 155.7ms |     124 | `inferFromTypes`                       | `node_modules/typescript/lib/typescript.js` |
|  0.9% | 152.0ms |     121 | `getNodeLinks`                         | `node_modules/typescript/lib/typescript.js` |
|  0.9% | 143.2ms |     114 | `createTypeReference`                  | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 128.1ms |     102 | `createInstantiatedSymbolTable`        | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 126.9ms |     101 | `structuredTypeRelatedToWorker`        | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 121.8ms |      97 | `resolveStructuredTypeMembers`         | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 119.3ms |      95 | `getNormalizedType`                    | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 106.8ms |      85 | `bind`                                 | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 105.5ms |      84 | `instantiateType`                      | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 105.5ms |      84 | `instantiateList`                      | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 103.0ms |      82 | `some`                                 | `node_modules/typescript/lib/typescript.js` |
|  0.6% |  98.0ms |      78 | `getUnionTypeFromSortedList`           | `node_modules/typescript/lib/typescript.js` |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                               | Location                                    |
| ---: | ------: | ------: | -------------------------------------- | ------------------------------------------- |
| 3.1% | 498.6ms |     397 | `recursiveTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js` |
| 2.8% | 463.5ms |     369 | `checkTypeRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
| 2.1% | 346.7ms |     276 | `isRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
| 2.0% | 331.6ms |     264 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js` |
| 1.8% | 288.9ms |     230 | `instantiateTypeWorker`                | `node_modules/typescript/lib/typescript.js` |
| 1.6% | 266.3ms |     212 | `scan`                                 | `node_modules/typescript/lib/typescript.js` |
| 1.0% | 165.8ms |     132 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
| 1.0% | 155.7ms |     124 | `inferFromTypes`                       | `node_modules/typescript/lib/typescript.js` |
| 0.9% | 152.0ms |     121 | `getNodeLinks`                         | `node_modules/typescript/lib/typescript.js` |
| 0.9% | 143.2ms |     114 | `createTypeReference`                  | `node_modules/typescript/lib/typescript.js` |
| 0.8% | 128.1ms |     102 | `createInstantiatedSymbolTable`        | `node_modules/typescript/lib/typescript.js` |
| 0.8% | 126.9ms |     101 | `structuredTypeRelatedToWorker`        | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 121.8ms |      97 | `resolveStructuredTypeMembers`         | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 119.3ms |      95 | `getNormalizedType`                    | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 106.8ms |      85 | `bind`                                 | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 105.5ms |      84 | `instantiateType`                      | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 105.5ms |      84 | `instantiateList`                      | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 103.0ms |      82 | `some`                                 | `node_modules/typescript/lib/typescript.js` |
| 0.6% |  98.0ms |      78 | `getUnionTypeFromSortedList`           | `node_modules/typescript/lib/typescript.js` |
| 0.6% |  96.7ms |      77 | `invokeOnce`                           | `node_modules/typescript/lib/typescript.js` |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 11.7% | 1.90s |   1,513 | `(garbage collector)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 54.4% | 271.3ms |     216 | `node_modules/typescript/lib/typescript.js:67076` |
|  8.1% |  40.2ms |      32 | `node_modules/typescript/lib/typescript.js:67123` |
|  7.1% |  35.2ms |      28 | `node_modules/typescript/lib/typescript.js:67129` |
|  5.0% |  25.1ms |      20 | `node_modules/typescript/lib/typescript.js:67102` |
|  4.0% |  20.1ms |      16 | `node_modules/typescript/lib/typescript.js:67063` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 60.7% | 281.3ms |     224 | `node_modules/typescript/lib/typescript.js:66185` |
| 24.9% | 115.6ms |      92 | `node_modules/typescript/lib/typescript.js:66204` |
|  6.8% |  31.4ms |      25 | `node_modules/typescript/lib/typescript.js:66268` |
|  2.4% |  11.3ms |       9 | `node_modules/typescript/lib/typescript.js:66203` |
|  1.1% |   5.0ms |       4 | `node_modules/typescript/lib/typescript.js:66232` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 21.0% | 72.8ms |      58 | `node_modules/typescript/lib/typescript.js:66493` |
| 17.8% | 61.5ms |      49 | `node_modules/typescript/lib/typescript.js:66590` |
| 12.0% | 41.4ms |      33 | `node_modules/typescript/lib/typescript.js:66523` |
|  9.4% | 32.7ms |      26 | `node_modules/typescript/lib/typescript.js:66150` |
|  6.5% | 22.6ms |      18 | `node_modules/typescript/lib/typescript.js:66548` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 38.6% | 128.1ms |     102 | `node_modules/typescript/lib/typescript.js:64815` |
| 12.1% |  40.2ms |      32 | `node_modules/typescript/lib/typescript.js:64819` |
|  9.5% |  31.4ms |      25 | `node_modules/typescript/lib/typescript.js:64818` |
|  3.0% |  10.0ms |       8 | `node_modules/typescript/lib/typescript.js:64788` |
|  3.0% |  10.0ms |       8 | `node_modules/typescript/lib/typescript.js:2572`  |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 44.8% | 129.4ms |     103 | `node_modules/typescript/lib/typescript.js:65039` |
|  8.3% |  23.9ms |      19 | `node_modules/typescript/lib/typescript.js:65052` |
|  7.8% |  22.6ms |      18 | `node_modules/typescript/lib/typescript.js:65023` |
|  5.7% |  16.3ms |      13 | `node_modules/typescript/lib/typescript.js:65034` |
|  4.3% |  12.6ms |      10 | `node_modules/typescript/lib/typescript.js:65077` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 14.6% | 38.9ms |      31 | `node_modules/typescript/lib/typescript.js:12790` |
| 11.3% | 30.1ms |      24 | `node_modules/typescript/lib/typescript.js:13676` |
|  7.1% | 18.8ms |      15 | `node_modules/typescript/lib/typescript.js:13254` |
|  5.7% | 15.1ms |      12 | `node_modules/typescript/lib/typescript.js:13114` |
|  4.7% | 12.6ms |      10 | `node_modules/typescript/lib/typescript.js:12959` |

##### `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 37.9% | 62.8ms |      50 | `node_modules/typescript/lib/typescript.js:66161` |
| 15.2% | 25.1ms |      20 | `node_modules/typescript/lib/typescript.js:66157` |
| 12.9% | 21.4ms |      17 | `node_modules/typescript/lib/typescript.js:66156` |
|  9.1% | 15.1ms |      12 | `node_modules/typescript/lib/typescript.js:65968` |
|  6.1% | 10.0ms |       8 | `node_modules/typescript/lib/typescript.js:66174` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 15.3% | 23.9ms |      19 | `node_modules/typescript/lib/typescript.js:70069` |
|  9.7% | 15.1ms |      12 | `node_modules/typescript/lib/typescript.js:69924` |
|  5.6% |  8.8ms |       7 | `node_modules/typescript/lib/typescript.js:69901` |
|  5.6% |  8.8ms |       7 | `node_modules/typescript/lib/typescript.js:70029` |
|  4.8% |  7.5ms |       6 | `node_modules/typescript/lib/typescript.js:70057` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 94.2% | 143.2ms |     114 | `node_modules/typescript/lib/typescript.js:50260` |
|  5.0% |   7.5ms |       6 | `node_modules/typescript/lib/typescript.js:50258` |
|  0.8% |   1.3ms |       1 | `node_modules/typescript/lib/typescript.js:48827` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 64.0% | 91.7ms |      73 | `node_modules/typescript/lib/typescript.js:61541` |
| 24.6% | 35.2ms |      28 | `node_modules/typescript/lib/typescript.js:61544` |
|  4.4% |  6.3ms |       5 | `node_modules/typescript/lib/typescript.js:61539` |
|  1.8% |  2.5ms |       2 | `node_modules/typescript/lib/typescript.js:61504` |
|  1.8% |  2.5ms |       2 | `node_modules/typescript/lib/typescript.js:61512` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 97.1% | 124.3ms |      99 | `node_modules/typescript/lib/typescript.js:59023` |
|  1.0% |   1.3ms |       1 | `node_modules/typescript/lib/typescript.js:59020` |
|  1.0% |   1.3ms |       1 | `node_modules/typescript/lib/typescript.js:59021` |
|  1.0% |   1.3ms |       1 | `node_modules/typescript/lib/typescript.js:15265` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 16.8% | 21.4ms |      17 | `node_modules/typescript/lib/typescript.js:67753` |
| 13.9% | 17.6ms |      14 | `node_modules/typescript/lib/typescript.js:67764` |
|  8.9% | 11.3ms |       9 | `node_modules/typescript/lib/typescript.js:67277` |
|  6.9% |  8.8ms |       7 | `node_modules/typescript/lib/typescript.js:67768` |
|  5.9% |  7.5ms |       6 | `node_modules/typescript/lib/typescript.js:67379` |

##### `resolveStructuredTypeMembers` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 32.0% | 38.9ms |      31 | `node_modules/typescript/lib/typescript.js:60090` |
| 24.7% | 30.1ms |      24 | `node_modules/typescript/lib/typescript.js:60100` |
|  9.3% | 11.3ms |       9 | `node_modules/typescript/lib/typescript.js:60091` |
|  6.2% |  7.5ms |       6 | `node_modules/typescript/lib/typescript.js:60102` |
|  5.2% |  6.3ms |       5 | `node_modules/typescript/lib/typescript.js:60095` |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 92.6% | 110.5ms |      88 | `node_modules/typescript/lib/typescript.js:66150` |
|  6.3% |   7.5ms |       6 | `node_modules/typescript/lib/typescript.js:66148` |
|  1.1% |   1.3ms |       1 | `node_modules/typescript/lib/typescript.js:65968` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 24.7% | 26.4ms |      21 | `node_modules/typescript/lib/typescript.js:46608` |
| 15.3% | 16.3ms |      13 | `node_modules/typescript/lib/typescript.js:46614` |
| 10.6% | 11.3ms |       9 | `node_modules/typescript/lib/typescript.js:46616` |
|  7.1% |  7.5ms |       6 | `node_modules/typescript/lib/typescript.js:47558` |
|  7.1% |  7.5ms |       6 | `node_modules/typescript/lib/typescript.js:46635` |

##### `instantiateType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 38.1% | 40.2ms |      32 | `node_modules/typescript/lib/typescript.js:64996` |
| 13.1% | 13.8ms |      11 | `node_modules/typescript/lib/typescript.js:69605` |
| 11.9% | 12.6ms |      10 | `node_modules/typescript/lib/typescript.js:64997` |
|  8.3% |  8.8ms |       7 | `node_modules/typescript/lib/typescript.js:65011` |
|  6.0% |  6.3ms |       5 | `node_modules/typescript/lib/typescript.js:69607` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 64.3% | 67.8ms |      54 | `node_modules/typescript/lib/typescript.js:64627` |
| 13.1% | 13.8ms |      11 | `node_modules/typescript/lib/typescript.js:64629` |
| 11.9% | 12.6ms |      10 | `node_modules/typescript/lib/typescript.js:64632` |
|  4.8% |  5.0ms |       4 | `node_modules/typescript/lib/typescript.js:64630` |
|  4.8% |  5.0ms |       4 | `node_modules/typescript/lib/typescript.js:64623` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                         |
| ----: | -----: | ------: | ------------------------------------------------ |
| 57.3% | 59.0ms |      47 | `node_modules/typescript/lib/typescript.js:2785` |
| 19.5% | 20.1ms |      16 | `node_modules/typescript/lib/typescript.js:2781` |
| 19.5% | 20.1ms |      16 | `node_modules/typescript/lib/typescript.js:2784` |
|  2.4% |  2.5ms |       2 | `node_modules/typescript/lib/typescript.js:2786` |
|  1.2% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:2783` |

##### `getUnionTypeFromSortedList` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 65.4% | 64.1ms |      51 | `node_modules/typescript/lib/typescript.js:62957` |
| 14.1% | 13.8ms |      11 | `node_modules/typescript/lib/typescript.js:62973` |
|  6.4% |  6.3ms |       5 | `node_modules/typescript/lib/typescript.js:62955` |
|  3.8% |  3.8ms |       3 | `node_modules/typescript/lib/typescript.js:61526` |
|  2.6% |  2.5ms |       2 | `node_modules/typescript/lib/typescript.js:62948` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 28.6% | 27.6ms |      22 | `node_modules/typescript/lib/typescript.js:70093` |
| 16.9% | 16.3ms |      13 | `node_modules/typescript/lib/typescript.js:70092` |
| 11.7% | 11.3ms |       9 | `node_modules/typescript/lib/typescript.js:70109` |
| 10.4% | 10.0ms |       8 | `node_modules/typescript/lib/typescript.js:70104` |
|  9.1% |  8.8ms |       7 | `node_modules/typescript/lib/typescript.js:70098` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller               | Location                                    |
| ----: | ------: | ------: | -------------------- | ------------------------------------------- |
| 99.7% | 497.4ms |     396 | `isRelatedTo`        | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `checkTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                          | Location                                    |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------- |
| 97.6% | 452.2ms |     360 | `isTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js` |
|  1.6% |   7.5ms |       6 | `checkTypeAssignableTo`         | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `inferFromMatchingTypes`        | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 56.5% | 195.9ms |     156 | `checkTypeRelatedTo`          | `node_modules/typescript/lib/typescript.js` |
| 15.2% |  52.8ms |      42 | `isRelatedToWorker2`          | `node_modules/typescript/lib/typescript.js` |
| 12.7% |  44.0ms |      35 | `isPropertySymbolTypeRelated` | `node_modules/typescript/lib/typescript.js` |
|  4.3% |  15.1ms |      12 | `eachTypeRelatedToType`       | `node_modules/typescript/lib/typescript.js` |
|  2.9% |  10.0ms |       8 | `typeRelatedToSomeType`       | `node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                     | Location                                    |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------- |
| 99.2% | 329.1ms |     262 | `instantiateTypeWorker`    | `node_modules/typescript/lib/typescript.js` |
|  0.8% |   2.5ms |       2 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                     | Location                                    |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------- |
| 99.1% | 286.4ms |     228 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `instantiateType`          | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `getConditionalType`       | `node_modules/typescript/lib/typescript.js` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                  | Location                                    |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 98.1% | 261.2ms |     208 | `nextTokenWithoutCheck` | `node_modules/typescript/lib/typescript.js` |
|  1.9% |   5.0ms |       4 | `scanTokenAtPosition`   | `node_modules/typescript/lib/typescript.js` |

##### `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller               | Location                                    |
| ----: | ------: | ------: | -------------------- | ------------------------------------------- |
| 99.2% | 164.5ms |     131 | `getNormalizedType`  | `node_modules/typescript/lib/typescript.js` |
|  0.8% |   1.3ms |       1 | `checkTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                   | Location                                    |
| ----: | -----: | ------: | ------------------------ | ------------------------------------------- |
| 21.0% | 32.7ms |      26 | `inferFromTypeArguments` | `node_modules/typescript/lib/typescript.js` |
| 15.3% | 23.9ms |      19 | `inferFromProperties`    | `node_modules/typescript/lib/typescript.js` |
| 14.5% | 22.6ms |      18 | `applyToReturnTypes`     | `node_modules/typescript/lib/typescript.js` |
| 11.3% | 17.6ms |      14 | `inferFromMatchingTypes` | `node_modules/typescript/lib/typescript.js` |
| 10.5% | 16.3ms |      13 | `inferFromTypes`         | `node_modules/typescript/lib/typescript.js` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                         | Location                                    |
| ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------- |
| 24.8% | 37.7ms |      30 | `getResolvedSymbol`                            | `node_modules/typescript/lib/typescript.js` |
| 24.0% | 36.4ms |      29 | `getResolvedSignature`                         | `node_modules/typescript/lib/typescript.js` |
| 20.7% | 31.4ms |      25 | `getObjectTypeInstantiation`                   | `node_modules/typescript/lib/typescript.js` |
|  7.4% | 11.3ms |       9 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |
|  4.1% |  6.3ms |       5 | `checkExpressionCached`                        | `node_modules/typescript/lib/typescript.js` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                            | Location                                    |
| ----: | -----: | ------: | --------------------------------- | ------------------------------------------- |
| 66.7% | 95.5ms |      76 | `createNormalizedTypeReference`   | `node_modules/typescript/lib/typescript.js` |
| 16.7% | 23.9ms |      19 | `getTypeWithThisArgument`         | `node_modules/typescript/lib/typescript.js` |
|  5.3% |  7.5ms |       6 | `createNormalizedTupleType`       | `node_modules/typescript/lib/typescript.js` |
|  3.5% |  5.0ms |       4 | `getNormalizedType`               | `node_modules/typescript/lib/typescript.js` |
|  1.8% |  2.5ms |       2 | `createTypeFromGenericGlobalType` | `node_modules/typescript/lib/typescript.js` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                         | Location                                    |
| ----: | ------: | ------: | ------------------------------ | ------------------------------------------- |
| 94.1% | 120.6ms |      96 | `resolveObjectTypeMembers`     | `node_modules/typescript/lib/typescript.js` |
|  4.9% |   6.3ms |       5 | `resolveAnonymousTypeMembers`  | `node_modules/typescript/lib/typescript.js` |
|  1.0% |   1.3ms |       1 | `resolveStructuredTypeMembers` | `node_modules/typescript/lib/typescript.js` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                    | Location                                    |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------- |
| 97.0% | 123.1ms |      98 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |
|  3.0% |   3.8ms |       3 | `recursiveTypeRelatedTo`  | `node_modules/typescript/lib/typescript.js` |

##### `resolveStructuredTypeMembers` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                          | Location                                    |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------- |
| 28.9% | 35.2ms |      28 | `getSignaturesOfStructuredType` | `node_modules/typescript/lib/typescript.js` |
| 25.8% | 31.4ms |      25 | `getPropertyOfType`             | `node_modules/typescript/lib/typescript.js` |
| 20.6% | 25.1ms |      20 | `getPropertiesOfObjectType`     | `node_modules/typescript/lib/typescript.js` |
|  8.2% | 10.0ms |       8 | `getIndexInfosOfStructuredType` | `node_modules/typescript/lib/typescript.js` |
|  6.2% |  7.5ms |       6 | `isWeakType`                    | `node_modules/typescript/lib/typescript.js` |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Caller        | Location                                    |
| -----: | ------: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 119.3ms |      95 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller              | Location                                             |
| ----: | -----: | ------: | ------------------- | ---------------------------------------------------- |
| 43.5% | 46.5ms |      37 | `visitNode2`        | `node_modules/typescript/lib/typescript.js`          |
| 37.6% | 40.2ms |      32 | `forEach`           | `node_modules/typescript/lib/typescript.js`          |
|  8.2% |  8.8ms |       7 | `bindParameterFlow` | `node_modules/typescript/lib/typescript.js`          |
|  4.7% |  5.0ms |       4 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:45224:16` |
|  2.4% |  2.5ms |       2 | `bindSourceFile2`   | `node_modules/typescript/lib/typescript.js`          |

##### `instantiateType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                    |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| 48.8% | 51.5ms |      41 | `instantiateList`             | `node_modules/typescript/lib/typescript.js` |
| 13.1% | 13.8ms |      11 | `getMappedType`               | `node_modules/typescript/lib/typescript.js` |
|  7.1% |  7.5ms |       6 | `instantiateTypeWorker`       | `node_modules/typescript/lib/typescript.js` |
|  6.0% |  6.3ms |       5 | `getTypeOfInstantiatedSymbol` | `node_modules/typescript/lib/typescript.js` |
|  3.6% |  3.8ms |       3 | `getConditionalType`          | `node_modules/typescript/lib/typescript.js` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                         | Location                                    |
| ----: | -----: | ------: | ------------------------------ | ------------------------------------------- |
| 47.6% | 50.2ms |      40 | `instantiateTypes`             | `node_modules/typescript/lib/typescript.js` |
| 23.8% | 25.1ms |      20 | `instantiateSignature`         | `node_modules/typescript/lib/typescript.js` |
| 23.8% | 25.1ms |      20 | `instantiateSignatures`        | `node_modules/typescript/lib/typescript.js` |
|  2.4% |  2.5ms |       2 | `instantiateIndexInfos`        | `node_modules/typescript/lib/typescript.js` |
|  1.2% |  1.3ms |       1 | `resolveStructuredTypeMembers` | `node_modules/typescript/lib/typescript.js` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                | Location                                    |
| ----: | -----: | ------: | ------------------------------------- | ------------------------------------------- |
| 18.3% | 18.8ms |      15 | `getObjectTypeInstantiation`          | `node_modules/typescript/lib/typescript.js` |
| 17.1% | 17.6ms |      14 | `isTypeReferenceWithGenericArguments` | `node_modules/typescript/lib/typescript.js` |
| 13.4% | 13.8ms |      11 | `hasMatchingRecursionIdentity`        | `node_modules/typescript/lib/typescript.js` |
|  8.5% |  8.8ms |       7 | `resolveCall`                         | `node_modules/typescript/lib/typescript.js` |
|  6.1% |  6.3ms |       5 | `getReducedType`                      | `node_modules/typescript/lib/typescript.js` |

##### `getUnionTypeFromSortedList` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller               | Location                                    |
| ----: | -----: | ------: | -------------------- | ------------------------------------------- |
| 85.9% | 84.2ms |      67 | `getUnionTypeWorker` | `node_modules/typescript/lib/typescript.js` |
| 12.8% | 12.6ms |      10 | `filterType`         | `node_modules/typescript/lib/typescript.js` |
|  1.3% |  1.3ms |       1 | `getUnionType`       | `node_modules/typescript/lib/typescript.js` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller           | Location                                    |
| ----: | -----: | ------: | ---------------- | ------------------------------------------- |
| 97.4% | 94.2ms |      75 | `inferFromTypes` | `node_modules/typescript/lib/typescript.js` |
|  2.6% |  2.5ms |       2 | `inferTypes`     | `node_modules/typescript/lib/typescript.js` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |   Time | Samples | Function                                   | Location                                              |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 87.1% | 14.18s |  11,293 | `typeCheckProject`                         | `tsc-workload.mjs`                                    |
| 87.1% | 14.18s |  11,291 | `(anonymous)`                              | `datadog-pprof.mjs:3:33`                              |
| 87.0% | 14.17s |  11,286 | `run`                                      | `node:internal/modules/esm/module_job`                |
| 82.7% | 13.47s |  10,726 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 75.1% | 12.23s |   9,738 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 75.1% | 12.23s |   9,738 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 75.1% | 12.22s |   9,736 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 75.1% | 12.22s |   9,736 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 75.1% | 12.22s |   9,735 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 75.0% | 12.22s |   9,733 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123321:41` |
| 75.0% | 12.22s |   9,730 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 75.0% | 12.21s |   9,728 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 75.0% | 12.21s |   9,727 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 70.4% | 11.46s |   9,131 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 70.4% | 11.46s |   9,128 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 70.4% | 11.46s |   9,128 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 70.4% | 11.46s |   9,127 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 70.4% | 11.46s |   9,126 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 70.4% | 11.45s |   9,124 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123397:27` |
| 69.4% | 11.30s |   8,997 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |

#### Categories

##### Third-party

|     % |   Time | Samples | Function                                   | Location                                              |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 82.7% | 13.47s |  10,726 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 75.1% | 12.23s |   9,738 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 75.1% | 12.23s |   9,738 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 75.1% | 12.22s |   9,736 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 75.1% | 12.22s |   9,736 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 75.1% | 12.22s |   9,735 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 75.0% | 12.22s |   9,733 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123321:41` |
| 75.0% | 12.22s |   9,730 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 75.0% | 12.21s |   9,728 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 75.0% | 12.21s |   9,727 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 70.4% | 11.46s |   9,131 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 70.4% | 11.46s |   9,128 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 70.4% | 11.46s |   9,128 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 70.4% | 11.46s |   9,127 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 70.4% | 11.46s |   9,126 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 70.4% | 11.45s |   9,124 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123397:27` |
| 69.4% | 11.30s |   8,997 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| 69.4% | 11.29s |   8,995 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| 52.5% |  8.55s |   6,814 | `checkExpression`                          | `node_modules/typescript/lib/typescript.js`           |
| 52.5% |  8.55s |   6,808 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 11.7% | 1.90s |   1,513 | `(garbage collector)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |    Time | Samples | Callee                             | Location                                    |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------- |
| 86.1% |  12.21s |   9,725 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| 13.0% |   1.83s |   1,463 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 101.7ms |      81 | `require`                          | `node:internal/modules/helpers`             |
|  0.2% |  26.4ms |      21 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `getSyntacticDiagnostics`          | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof.mjs:3:33`)

|      % |   Time | Samples | Callee             | Location           |
| -----: | -----: | ------: | ------------------ | ------------------ |
| 100.0% | 14.18s |  11,291 | `typeCheckProject` | `tsc-workload.mjs` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |   Time | Samples | Callee        | Location                 |
| -----: | -----: | ------: | ------------- | ------------------------ |
| 100.0% | 14.17s |  11,286 | `(anonymous)` | `datadog-pprof.mjs:3:33` |

##### `forEach` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee               | Location                                              |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------- |
| 83.6% |  11.26s |   8,969 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js`           |
|  6.4% | 857.8ms |     683 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122449:27` |
|  5.1% | 689.5ms |     549 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:45224:16`  |
|  4.2% | 562.7ms |     448 | `bind`               | `node_modules/typescript/lib/typescript.js`           |
|  2.2% | 300.2ms |     239 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:124201:29` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                   | Location                                    |
| -----: | -----: | ------: | ------------------------ | ------------------------------------------- |
| 100.0% | 12.22s |   9,736 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                              | Location                                    |
| -----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 12.22s |   9,737 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `concatenate`                       | `node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                     | Location                                    |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------- |
| 100.0% | 12.22s |   9,735 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                     | Location                                    |
| -----: | -----: | ------: | ------------------------------------------ | ------------------------------------------- |
| 100.0% | 12.22s |   9,733 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                 | Location                                              |
| ----: | ------: | ------: | ---------------------- | ----------------------------------------------------- |
| 93.7% |  11.45s |   9,122 | `(anonymous)`          | `node_modules/typescript/lib/typescript.js:123397:27` |
|  6.2% | 756.1ms |     602 | `(anonymous)`          | `node_modules/typescript/lib/typescript.js:123389:26` |
|  0.1% |  11.3ms |       9 | `(anonymous)`          | `node_modules/typescript/lib/typescript.js:123402:44` |
| <0.1% |   1.3ms |       1 | `(anonymous:L#123389)` | `node_modules/typescript/lib/typescript.js`           |
| <0.1% |   1.3ms |       1 | `(anonymous)`          | `node_modules/typescript/lib/typescript.js:123386:26` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:123321:41`)

|      % |   Time | Samples | Callee                          | Location                                    |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------- |
| 100.0% | 12.22s |   9,733 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                | Location                                              |
| -----: | -----: | ------: | --------------------- | ----------------------------------------------------- |
| 100.0% | 12.21s |   9,727 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:123321:41` |
|  <0.1% |  1.3ms |       1 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:123321:42` |
|  <0.1% |  1.3ms |       1 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:123321:33` |
|  <0.1% |  1.3ms |       1 | `(anonymous:L#21101)` | `node_modules/typescript/lib/typescript.js`           |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee    | Location                                    |
| -----: | -----: | ------: | --------- | ------------------------------------------- |
| 100.0% | 12.21s |   9,728 | `flatMap` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                    |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 12.21s |   9,727 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee                       | Location                                    |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| 55.4% |  6.35s |   5,061 | `checkDeferredNodes`         | `node_modules/typescript/lib/typescript.js` |
| 44.3% |  5.08s |   4,047 | `forEach`                    | `node_modules/typescript/lib/typescript.js` |
|  0.1% | 15.1ms |      12 | `addLazyDiagnostic`          | `node_modules/typescript/lib/typescript.js` |
|  0.1% | 10.0ms |       8 | `checkExternalModuleExports` | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  1.3ms |       1 | `getExportsOfModule`         | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                  | Location                                    |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 11.46s |   9,128 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee            | Location                                    |
| -----: | -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 11.46s |   9,128 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                | Location                                    |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------------- |
| 100.0% | 11.46s |   9,126 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `ensurePendingDiagnosticWorkComplete` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                    |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 11.46s |   9,125 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:123397:27`)

|      % |   Time | Samples | Callee            | Location                                    |
| -----: | -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 11.45s |   9,124 | `getDiagnostics2` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                     | Location                                    |
| ----: | ----: | ------: | -------------------------- | ------------------------------------------- |
| 75.0% | 8.47s |   6,751 | `checkBlock`               | `node_modules/typescript/lib/typescript.js` |
| 42.7% | 4.82s |   3,838 | `checkVariableStatement`   | `node_modules/typescript/lib/typescript.js` |
| 42.6% | 4.81s |   3,834 | `checkVariableDeclaration` | `node_modules/typescript/lib/typescript.js` |
| 24.8% | 2.80s |   2,235 | `checkExpressionStatement` | `node_modules/typescript/lib/typescript.js` |
| 20.7% | 2.34s |   1,864 | `checkTypeReferenceNode`   | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                  | Location                                    |
| -----: | -----: | ------: | --------------------------------------- | ------------------------------------------- |
| 100.0% | 11.29s |   8,995 | `checkSourceElementWorker`              | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  2.5ms |       2 | `checkExpressionStatement`              | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkReturnStatement`                  | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkGrammarForAtLeastOneTypeArgument` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkUnionOrIntersectionType`          | `node_modules/typescript/lib/typescript.js` |

##### `checkExpression` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee                                          | Location                                    |
| ----: | -----: | ------: | ----------------------------------------------- | ------------------------------------------- |
| 99.9% |  8.54s |   6,807 | `checkExpressionWorker`                         | `node_modules/typescript/lib/typescript.js` |
|  1.0% | 85.4ms |      68 | `instantiateTypeWithSingleGenericCallSignature` | `node_modules/typescript/lib/typescript.js` |
|  0.3% | 25.1ms |      20 | `checkIfStatement`                              | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  3.8ms |       3 | `isConstEnumObjectType`                         | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  2.5ms |       2 | `getTypeFactsWorker`                            | `node_modules/typescript/lib/typescript.js` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                          | Location                                    |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------- |
| 91.0% |   7.78s |   6,195 | `checkCallExpression`           | `node_modules/typescript/lib/typescript.js` |
| 31.7% |   2.71s |   2,160 | `checkPropertyAccessExpression` | `node_modules/typescript/lib/typescript.js` |
| 29.0% |   2.48s |   1,976 | `checkObjectLiteral`            | `node_modules/typescript/lib/typescript.js` |
| 16.0% |   1.36s |   1,089 | `checkArrayLiteral`             | `node_modules/typescript/lib/typescript.js` |
| 10.7% | 918.1ms |     731 | `checkIdentifier`               | `node_modules/typescript/lib/typescript.js` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs:3:33`) ← `run` (`node:internal/modules/esm/module_job`)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.5% | 81.6ms |      65 | `wrapSafe` (`node:internal/modules/cjs/loader`) ← `(anonymous)` (1755:18) ← `(anonymous)` (1913:37) ← `(anonymous)` (1505:37) ← `(anonymous)` (1309:33) ← `wrapModuleLoad` ← `(anonymous)` (1527:24) ← `require` (`node:internal/modules/helpers`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.3% | 54.0ms |      43 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123397:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123321:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.3% | 52.8ms |      42 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123397:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123321:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.3% | 46.5ms |      37 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123397:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123321:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                |
| 0.2% | 33.9ms |      27 | `getUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123397:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123321:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2% | 33.9ms |      27 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123397:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123321:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                     |
| 0.2% | 32.7ms |      26 | `getNodeLinks` (`node_modules/typescript/lib/typescript.js`) ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `getReturnTypeFromBody` ← `getReturnTypeOfSignature` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123397:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123321:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% | 31.4ms |      25 | `createUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`) ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123397:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123321:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.1% | 23.9ms |      19 | `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`) ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123397:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123321:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.1% | 22.6ms |      18 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123397:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123321:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                |
| 0.1% | 21.4ms |      17 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123397:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123321:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.1% | 18.8ms |      15 | `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`) ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123397:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123321:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` |
| 0.1% | 17.6ms |      14 | `getPropertyOfType` (`node_modules/typescript/lib/typescript.js`) ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123397:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123321:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.1% | 17.6ms |      14 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123397:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123321:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.1% | 17.6ms |      14 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123397:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123321:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.1% | 15.1ms |      12 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isPropertySymbolTypeRelated` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `checkTypeAssignableTo` ← `checkTypeArgumentConstraints` ← `(anonymous)` (82241:40) ← `addLazyDiagnostic` ← `checkTypeReferenceOrImport` ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkTypeAliasDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123397:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123321:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.1% | 15.1ms |      12 | `resetMaybeStack` (`node_modules/typescript/lib/typescript.js`) ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `checkTypeAssignableTo` ← `checkTypeArgumentConstraints` ← `(anonymous)` (82241:40) ← `addLazyDiagnostic` ← `checkTypeReferenceOrImport` ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123397:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123321:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.1% | 15.1ms |      12 | `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`) ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123397:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123321:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                         |
| 0.1% | 15.1ms |      12 | `getNormalizedType` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123397:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123321:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.1% | 15.1ms |      12 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123397:27) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123321:41) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

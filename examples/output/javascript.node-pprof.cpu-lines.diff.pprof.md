# Wall time profile diff

Took 16.28s → 16.05s (-237.86ms, -1.5%) over 12,969 samples → 12,800 samples (1.3ms per sample).

| Category           | Change |     Delta |             % |              Time |         Samples |
| ------------------ | -----: | --------: | ------------: | ----------------: | --------------: |
| Third-party        |  -2.6% | -364.74ms | 86.3% → 85.3% |   14.06s → 13.69s | 11,197 → 10,924 |
| Garbage collector  |  +6.5% | +123.63ms | 11.7% → 12.6% |     1.90s → 2.02s |   1,513 → 1,614 |
| Native             |  +0.7% |   +1.01ms |          0.9% | 150.7ms → 151.7ms |       120 → 121 |
| Standard library   |  +0.7% |   +1.03ms |   0.8% → 0.9% | 138.2ms → 139.2ms |       110 → 111 |
| Regular expression |  +3.4% |   +1.20ms |          0.2% |   35.2ms → 36.4ms |         28 → 29 |
| Ours               |  -0.2% |   -2.00µs |         <0.1% |             1.3ms |               1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in wall time spent directly in the function body, excluding callees.

|  Change |     Delta |             % |              Time |       Samples | Function                            | Location                                    |
| ------: | --------: | ------------: | ----------------: | ------------: | ----------------------------------- | ------------------------------------------- |
|   +6.5% | +123.63ms | 11.7% → 12.6% |     1.90s → 2.02s | 1,513 → 1,614 | `(garbage collector)`               | `<unknown>`                                 |
| +130.1% |  +37.57ms |   0.2% → 0.4% |   28.9ms → 66.5ms |       23 → 53 | `getApparentType`                   | `node_modules/typescript/lib/typescript.js` |
|  +46.4% |  +26.24ms |   0.3% → 0.5% |   56.5ms → 82.8ms |       45 → 66 | `createUnionOrIntersectionProperty` | `node_modules/typescript/lib/typescript.js` |
|  +32.1% |  +26.20ms |   0.5% → 0.7% |  81.6ms → 107.8ms |       65 → 86 | `getReducedApparentType`            | `node_modules/typescript/lib/typescript.js` |
|   +9.0% |  +25.87ms |   1.8% → 2.0% | 288.9ms → 314.8ms |     230 → 251 | `instantiateTypeWorker`             | `node_modules/typescript/lib/typescript.js` |
|   +7.0% |  +23.30ms |   2.0% → 2.2% | 331.6ms → 354.9ms |     264 → 283 | `getObjectTypeInstantiation`        | `node_modules/typescript/lib/typescript.js` |
|  +40.8% |  +19.99ms |   0.3% → 0.4% |   49.0ms → 69.0ms |       39 → 55 | `getTypeListId`                     | `node_modules/typescript/lib/typescript.js` |
|  +55.3% |  +18.76ms |   0.2% → 0.3% |   33.9ms → 52.7ms |       27 → 42 | `getResolvedSymbol`                 | `node_modules/typescript/lib/typescript.js` |
|  +58.1% |  +17.51ms |   0.2% → 0.3% |   30.1ms → 47.7ms |       24 → 38 | `inferFromSignatures`               | `node_modules/typescript/lib/typescript.js` |
|  +46.4% |  +17.50ms |   0.2% → 0.3% |   37.7ms → 55.2ms |       30 → 44 | `getUnionTypeWorker`                | `node_modules/typescript/lib/typescript.js` |
|  +35.7% |  +17.48ms |   0.3% → 0.4% |   49.0ms → 66.5ms |       39 → 53 | `getMembersOfSymbol`                | `node_modules/typescript/lib/typescript.js` |
|  +33.9% |  +17.47ms |   0.3% → 0.4% |   51.5ms → 69.0ms |       41 → 55 | `checkIdentifier`                   | `node_modules/typescript/lib/typescript.js` |
|  +33.1% |  +17.47ms |   0.3% → 0.4% |   52.8ms → 70.2ms |       42 → 56 | `getIndexedAccessTypeOrUndefined`   | `node_modules/typescript/lib/typescript.js` |
|     new |  +16.30ms |   0.0% → 0.1% |      0ms → 16.3ms |        0 → 13 | `(anonymous:L#53728)`               | `node_modules/typescript/lib/typescript.js` |
|  +64.7% |  +16.26ms |   0.2% → 0.3% |   25.1ms → 41.4ms |       20 → 33 | `scanJsDocToken`                    | `node_modules/typescript/lib/typescript.js` |
|  +53.9% |  +16.25ms |   0.2% → 0.3% |   30.1ms → 46.4ms |       24 → 37 | `resolveObjectTypeMembers`          | `node_modules/typescript/lib/typescript.js` |
|  +29.3% |  +16.21ms |   0.3% → 0.4% |   55.3ms → 71.5ms |       44 → 57 | `inferFromMatchingTypes`            | `node_modules/typescript/lib/typescript.js` |
|  +22.6% |  +16.19ms |   0.4% → 0.5% |   71.6ms → 87.8ms |       57 → 70 | `isTypeRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
|  +16.7% |  +16.15ms |   0.6% → 0.7% |  96.7ms → 112.9ms |       77 → 90 | `invokeOnce`                        | `node_modules/typescript/lib/typescript.js` |
|  +13.5% |  +16.11ms |   0.7% → 0.8% | 119.3ms → 135.4ms |      95 → 108 | `getNormalizedType`                 | `node_modules/typescript/lib/typescript.js` |

##### Third-party

|  Change |    Delta |           % |              Time |   Samples | Function                            | Location                                    |
| ------: | -------: | ----------: | ----------------: | --------: | ----------------------------------- | ------------------------------------------- |
| +130.1% | +37.57ms | 0.2% → 0.4% |   28.9ms → 66.5ms |   23 → 53 | `getApparentType`                   | `node_modules/typescript/lib/typescript.js` |
|  +46.4% | +26.24ms | 0.3% → 0.5% |   56.5ms → 82.8ms |   45 → 66 | `createUnionOrIntersectionProperty` | `node_modules/typescript/lib/typescript.js` |
|  +32.1% | +26.20ms | 0.5% → 0.7% |  81.6ms → 107.8ms |   65 → 86 | `getReducedApparentType`            | `node_modules/typescript/lib/typescript.js` |
|   +9.0% | +25.87ms | 1.8% → 2.0% | 288.9ms → 314.8ms | 230 → 251 | `instantiateTypeWorker`             | `node_modules/typescript/lib/typescript.js` |
|   +7.0% | +23.30ms | 2.0% → 2.2% | 331.6ms → 354.9ms | 264 → 283 | `getObjectTypeInstantiation`        | `node_modules/typescript/lib/typescript.js` |
|  +40.8% | +19.99ms | 0.3% → 0.4% |   49.0ms → 69.0ms |   39 → 55 | `getTypeListId`                     | `node_modules/typescript/lib/typescript.js` |
|  +55.3% | +18.76ms | 0.2% → 0.3% |   33.9ms → 52.7ms |   27 → 42 | `getResolvedSymbol`                 | `node_modules/typescript/lib/typescript.js` |
|  +58.1% | +17.51ms | 0.2% → 0.3% |   30.1ms → 47.7ms |   24 → 38 | `inferFromSignatures`               | `node_modules/typescript/lib/typescript.js` |
|  +46.4% | +17.50ms | 0.2% → 0.3% |   37.7ms → 55.2ms |   30 → 44 | `getUnionTypeWorker`                | `node_modules/typescript/lib/typescript.js` |
|  +35.7% | +17.48ms | 0.3% → 0.4% |   49.0ms → 66.5ms |   39 → 53 | `getMembersOfSymbol`                | `node_modules/typescript/lib/typescript.js` |
|  +33.9% | +17.47ms | 0.3% → 0.4% |   51.5ms → 69.0ms |   41 → 55 | `checkIdentifier`                   | `node_modules/typescript/lib/typescript.js` |
|  +33.1% | +17.47ms | 0.3% → 0.4% |   52.8ms → 70.2ms |   42 → 56 | `getIndexedAccessTypeOrUndefined`   | `node_modules/typescript/lib/typescript.js` |
|     new | +16.30ms | 0.0% → 0.1% |      0ms → 16.3ms |    0 → 13 | `(anonymous:L#53728)`               | `node_modules/typescript/lib/typescript.js` |
|  +64.7% | +16.26ms | 0.2% → 0.3% |   25.1ms → 41.4ms |   20 → 33 | `scanJsDocToken`                    | `node_modules/typescript/lib/typescript.js` |
|  +53.9% | +16.25ms | 0.2% → 0.3% |   30.1ms → 46.4ms |   24 → 37 | `resolveObjectTypeMembers`          | `node_modules/typescript/lib/typescript.js` |
|  +29.3% | +16.21ms | 0.3% → 0.4% |   55.3ms → 71.5ms |   44 → 57 | `inferFromMatchingTypes`            | `node_modules/typescript/lib/typescript.js` |
|  +22.6% | +16.19ms | 0.4% → 0.5% |   71.6ms → 87.8ms |   57 → 70 | `isTypeRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
|  +16.7% | +16.15ms | 0.6% → 0.7% |  96.7ms → 112.9ms |   77 → 90 | `invokeOnce`                        | `node_modules/typescript/lib/typescript.js` |
|  +13.5% | +16.11ms | 0.7% → 0.8% | 119.3ms → 135.4ms |  95 → 108 | `getNormalizedType`                 | `node_modules/typescript/lib/typescript.js` |
| +133.0% | +15.03ms | 0.1% → 0.2% |   11.3ms → 26.3ms |    9 → 21 | `parseTagComments`                  | `node_modules/typescript/lib/typescript.js` |

##### Garbage collector

| Change |     Delta |             % |          Time |       Samples | Function              | Location    |
| -----: | --------: | ------------: | ------------: | ------------: | --------------------- | ----------- |
|  +6.5% | +123.63ms | 11.7% → 12.6% | 1.90s → 2.02s | 1,513 → 1,614 | `(garbage collector)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in wall time spent directly in the function body, excluding callees.

##### Third-party

|  Change |    Delta |           % |              Time |   Samples | Function                               | Location                                    |
| ------: | -------: | ----------: | ----------------: | --------: | -------------------------------------- | ------------------------------------------- |
|  -16.1% | -55.73ms | 2.1% → 1.8% | 346.7ms → 290.9ms | 276 → 232 | `isRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
|   -8.5% | -39.61ms | 2.8% → 2.6% | 463.5ms → 423.9ms | 369 → 338 | `checkTypeRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
|  -23.5% | -36.61ms | 1.0% → 0.7% | 155.7ms → 119.1ms |  124 → 95 | `inferFromTypes`                       | `node_modules/typescript/lib/typescript.js` |
|  -30.0% | -36.56ms | 0.7% → 0.5% |  121.8ms → 85.3ms |   97 → 68 | `resolveStructuredTypeMembers`         | `node_modules/typescript/lib/typescript.js` |
|  -37.3% | -36.52ms | 0.6% → 0.4% |   98.0ms → 61.4ms |   78 → 49 | `getUnionTypeFromSortedList`           | `node_modules/typescript/lib/typescript.js` |
|  -18.3% | -30.36ms | 1.0% → 0.8% | 165.8ms → 135.4ms | 132 → 108 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
|  -31.7% | -30.25ms | 0.6% → 0.4% |   95.5ms → 65.2ms |   76 → 52 | `getMappedType`                        | `node_modules/typescript/lib/typescript.js` |
|  -36.9% | -26.45ms | 0.4% → 0.3% |   71.6ms → 45.1ms |   57 → 36 | `getTypeOfSymbol`                      | `node_modules/typescript/lib/typescript.js` |
|  -42.9% | -26.43ms | 0.4% → 0.2% |   61.5ms → 35.1ms |   49 → 28 | `getReducedType`                       | `node_modules/typescript/lib/typescript.js` |
|  -31.8% | -23.95ms | 0.5% → 0.3% |   75.4ms → 51.4ms |   60 → 41 | `getTypeFactsWorker`                   | `node_modules/typescript/lib/typescript.js` |
|  -36.6% | -23.93ms | 0.4% → 0.3% |   65.3ms → 41.4ms |   52 → 33 | `getUnionOrIntersectionProperty`       | `node_modules/typescript/lib/typescript.js` |
|  -56.0% | -23.89ms | 0.3% → 0.1% |   42.7ms → 18.8ms |   34 → 15 | `addTypeToUnion`                       | `node_modules/typescript/lib/typescript.js` |
|  -18.4% | -18.97ms | 0.6% → 0.5% |  103.0ms → 84.0ms |   82 → 67 | `some`                                 | `node_modules/typescript/lib/typescript.js` |
|  -24.7% | -17.67ms | 0.4% → 0.3% |   71.6ms → 53.9ms |   57 → 43 | `getSignaturesOfType`                  | `node_modules/typescript/lib/typescript.js` |
|  -53.9% | -17.61ms | 0.2% → 0.1% |   32.7ms → 15.0ms |   26 → 12 | `nextTokenWithoutCheck`                | `node_modules/typescript/lib/typescript.js` |
|  -23.3% | -16.41ms | 0.4% → 0.3% |   70.3ms → 53.9ms |   56 → 43 | `resetMaybeStack`                      | `node_modules/typescript/lib/typescript.js` |
|  -23.8% | -16.41ms | 0.4% → 0.3% |   69.1ms → 52.7ms |   55 → 42 | `isDeeplyNestedType`                   | `node_modules/typescript/lib/typescript.js` |
|  -39.5% | -16.37ms | 0.3% → 0.2% |   41.4ms → 25.1ms |   33 → 20 | `isSimpleTypeRelatedTo`                | `node_modules/typescript/lib/typescript.js` |
| removed | -16.33ms | 0.1% → 0.0% |      16.3ms → 0ms |    13 → 0 | `(anonymous:L#52483)`                  | `node_modules/typescript/lib/typescript.js` |
|  -14.4% | -15.22ms |        0.6% |  105.5ms → 90.3ms |   84 → 72 | `instantiateList`                      | `node_modules/typescript/lib/typescript.js` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `getApparentType` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Location                                                  |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
| +126.3% | +23.80ms | 65.2% → 64.2% | 18.8ms → 42.6ms | 15 → 34 | `node_modules/typescript/lib/typescript.js:60493 → 61748` |
|     new | +11.29ms |  0.0% → 17.0% |    0ms → 11.3ms |   0 → 9 | `node_modules/typescript/lib/typescript.js:21226`         |
|  +74.7% |  +3.75ms | 17.4% → 13.2% |   5.0ms → 8.8ms |   4 → 7 | `node_modules/typescript/lib/typescript.js:60490 → 61745` |
| removed |  -2.51ms |   8.7% → 0.0% |     2.5ms → 0ms |   2 → 0 | `node_modules/typescript/lib/typescript.js:20243`         |
|  +49.8% |  +1.25ms |   8.7% → 5.7% |   2.5ms → 3.8ms |   2 → 3 | `node_modules/typescript/lib/typescript.js:60491 → 61746` |

##### `createUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`)

|   Change |    Delta |            % |           Time | Samples | Location                                                  |
| -------: | -------: | -----------: | -------------: | ------: | --------------------------------------------------------- |
| +1048.2% | +26.33ms | 4.4% → 34.8% | 2.5ms → 28.8ms |  2 → 23 | `node_modules/typescript/lib/typescript.js:60509 → 61764` |
|  removed | -12.56ms | 22.2% → 0.0% |   12.6ms → 0ms |  10 → 0 | `node_modules/typescript/lib/typescript.js:60493`         |
|  removed | -12.56ms | 22.2% → 0.0% |   12.6ms → 0ms |  10 → 0 | `node_modules/typescript/lib/typescript.js:60508`         |
|      new |  +3.76ms |  0.0% → 4.5% |    0ms → 3.8ms |   0 → 3 | `node_modules/typescript/lib/typescript.js:61853`         |
|      new |  +3.76ms |  0.0% → 4.5% |    0ms → 3.8ms |   0 → 3 | `node_modules/typescript/lib/typescript.js:61860`         |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |            Time | Samples | Location                                                  |
| -----: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
| +28.1% | +18.70ms | 81.5% → 79.1% | 66.6ms → 85.3ms | 53 → 68 | `node_modules/typescript/lib/typescript.js:60496 → 61751` |
|    new |  +3.76ms |   0.0% → 3.5% |     0ms → 3.8ms |   0 → 3 | `node_modules/typescript/lib/typescript.js:61934`         |
| -40.1% |  -2.52ms |   7.7% → 3.5% |   6.3ms → 3.8ms |   5 → 3 | `node_modules/typescript/lib/typescript.js:60495 → 61750` |
|    new |  +2.51ms |   0.0% → 2.3% |     0ms → 2.5ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:61747`         |
|    new |  +2.51ms |   0.0% → 2.3% |     0ms → 2.5ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:61936`         |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |              Time |   Samples | Location                                                  |
| ------: | -------: | ------------: | ----------------: | --------: | --------------------------------------------------------- |
|  +29.9% | +38.67ms | 44.8% → 53.4% | 129.4ms → 168.0ms | 103 → 134 | `node_modules/typescript/lib/typescript.js:65039 → 66299` |
|  -44.5% | -10.07ms |   7.8% → 4.0% |   22.6ms → 12.5ms |   18 → 10 | `node_modules/typescript/lib/typescript.js:65023 → 66283` |
|  -70.0% |  -8.80ms |   4.3% → 1.2% |    12.6ms → 3.8ms |    10 → 3 | `node_modules/typescript/lib/typescript.js:65077 → 66337` |
| +174.6% |  +8.77ms |   1.7% → 4.4% |    5.0ms → 13.8ms |    4 → 11 | `node_modules/typescript/lib/typescript.js:65033 → 66293` |
|  -21.2% |  -5.05ms |   8.3% → 6.0% |   23.9ms → 18.8ms |   19 → 15 | `node_modules/typescript/lib/typescript.js:65052 → 66312` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |            % |         Time | Samples | Location                                          |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------------------- |
| removed | -40.19ms | 12.1% → 0.0% | 40.2ms → 0ms |  32 → 0 | `node_modules/typescript/lib/typescript.js:64819` |
|     new | +32.60ms |  0.0% → 9.2% | 0ms → 32.6ms |  0 → 26 | `node_modules/typescript/lib/typescript.js:66079` |
| removed | -31.40ms |  9.5% → 0.0% | 31.4ms → 0ms |  25 → 0 | `node_modules/typescript/lib/typescript.js:64818` |
|     new | +28.84ms |  0.0% → 8.1% | 0ms → 28.8ms |  0 → 23 | `node_modules/typescript/lib/typescript.js:66078` |
|     new | +13.79ms |  0.0% → 3.9% | 0ms → 13.8ms |  0 → 11 | `node_modules/typescript/lib/typescript.js:2585`  |

##### `getTypeListId` (`node_modules/typescript/lib/typescript.js`)

|  Change |   Delta |             % |            Time | Samples | Location                                                  |
| ------: | ------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  +15.9% | +6.21ms | 79.5% → 65.5% | 38.9ms → 45.1ms | 31 → 36 | `node_modules/typescript/lib/typescript.js:61512 → 62767` |
|     new | +5.02ms |   0.0% → 7.3% |     0ms → 5.0ms |   0 → 4 | `node_modules/typescript/lib/typescript.js:62753`         |
|     new | +3.76ms |   0.0% → 5.5% |     0ms → 3.8ms |   0 → 3 | `node_modules/typescript/lib/typescript.js:62761`         |
| removed | -2.51ms |   5.1% → 0.0% |     2.5ms → 0ms |   2 → 0 | `node_modules/typescript/lib/typescript.js:61510`         |
|  +99.7% | +2.50ms |   5.1% → 7.3% |   2.5ms → 5.0ms |   2 → 4 | `node_modules/typescript/lib/typescript.js:61501 → 62756` |

##### `getResolvedSymbol` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |            % |         Time | Samples | Location                                          |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------------------- |
|     new | +40.13ms | 0.0% → 76.2% | 0ms → 40.1ms |  0 → 32 | `node_modules/typescript/lib/typescript.js:71913` |
| removed | -25.12ms | 74.1% → 0.0% | 25.1ms → 0ms |  20 → 0 | `node_modules/typescript/lib/typescript.js:70630` |
|     new |  +5.02ms |  0.0% → 9.5% |  0ms → 5.0ms |   0 → 4 | `node_modules/typescript/lib/typescript.js:71917` |
| removed |  -2.51ms |  7.4% → 0.0% |  2.5ms → 0ms |   2 → 0 | `node_modules/typescript/lib/typescript.js:70635` |
| removed |  -2.51ms |  7.4% → 0.0% |  2.5ms → 0ms |   2 → 0 | `node_modules/typescript/lib/typescript.js:70640` |

##### `inferFromSignatures` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Location                                                  |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
| +365.9% | +13.79ms | 12.5% → 36.8% |  3.8ms → 17.6ms |  3 → 14 | `node_modules/typescript/lib/typescript.js:70452 → 71735` |
| +349.3% |  +8.77ms |  8.3% → 23.7% |  2.5ms → 11.3ms |   2 → 9 | `node_modules/typescript/lib/typescript.js:70448 → 71731` |
|  -33.4% |  -5.04ms | 50.0% → 21.1% | 15.1ms → 10.0ms |  12 → 8 | `node_modules/typescript/lib/typescript.js:70445 → 71728` |
|     new |  +2.51ms |   0.0% → 5.3% |     0ms → 2.5ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:61746`         |
| removed |  -1.26ms |   4.2% → 0.0% |     1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:2363`          |

##### `getUnionTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|  Change |   Delta |             % |            Time | Samples | Location                                                  |
| ------: | ------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  +66.4% | +7.51ms | 30.0% → 34.1% | 11.3ms → 18.8ms |  9 → 15 | `node_modules/typescript/lib/typescript.js:62919 → 64174` |
| removed | -2.51ms |   6.7% → 0.0% |     2.5ms → 0ms |   2 → 0 | `node_modules/typescript/lib/typescript.js:62677`         |
| removed | -2.51ms |   6.7% → 0.0% |     2.5ms → 0ms |   2 → 0 | `node_modules/typescript/lib/typescript.js:62880`         |
|     new | +2.51ms |   0.0% → 4.5% |     0ms → 2.5ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:63928`         |
|     new | +2.51ms |   0.0% → 4.5% |     0ms → 2.5ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:63950`         |

##### `getMembersOfSymbol` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
|     new | +62.70ms |  0.0% → 94.3% | 0ms → 62.7ms |  0 → 50 | `node_modules/typescript/lib/typescript.js:60437` |
| removed | -48.98ms | 100.0% → 0.0% | 49.0ms → 0ms |  39 → 0 | `node_modules/typescript/lib/typescript.js:59182` |
|     new |  +3.76ms |   0.0% → 5.7% |  0ms → 3.8ms |   0 → 3 | `node_modules/typescript/lib/typescript.js:60436` |

##### `checkIdentifier` (`node_modules/typescript/lib/typescript.js`)

|  Change |   Delta |             % |           Time | Samples | Location                                                  |
| ------: | ------: | ------------: | -------------: | ------: | --------------------------------------------------------- |
| +124.6% | +6.26ms |  9.8% → 16.4% | 5.0ms → 11.3ms |   4 → 9 | `node_modules/typescript/lib/typescript.js:73070 → 74353` |
|  +66.4% | +5.00ms | 14.6% → 18.2% | 7.5ms → 12.5ms |  6 → 10 | `node_modules/typescript/lib/typescript.js:73068 → 74351` |
| +299.4% | +3.76ms |   2.4% → 7.3% |  1.3ms → 5.0ms |   1 → 4 | `node_modules/typescript/lib/typescript.js:72963 → 74246` |
|  +74.7% | +3.75ms |  9.8% → 12.7% |  5.0ms → 8.8ms |   4 → 7 | `node_modules/typescript/lib/typescript.js:72991 → 74274` |
|  -50.1% | -2.52ms |   9.8% → 3.6% |  5.0ms → 2.5ms |   4 → 2 | `node_modules/typescript/lib/typescript.js:73069 → 74352` |

##### `getIndexedAccessTypeOrUndefined` (`node_modules/typescript/lib/typescript.js`)

|  Change |   Delta |             % |            Time | Samples | Location                                                  |
| ------: | ------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  +55.3% | +6.25ms | 21.4% → 25.0% | 11.3ms → 17.6ms |  9 → 14 | `node_modules/typescript/lib/typescript.js:63910 → 65165` |
|  +99.7% | +5.01ms |  9.5% → 14.3% |  5.0ms → 10.0ms |   4 → 8 | `node_modules/typescript/lib/typescript.js:63916 → 65171` |
| +149.6% | +3.76ms |   4.8% → 8.9% |   2.5ms → 6.3ms |   2 → 5 | `node_modules/typescript/lib/typescript.js:63909 → 65164` |
|  -25.1% | -2.52ms | 19.0% → 10.7% |  10.0ms → 7.5ms |   8 → 6 | `node_modules/typescript/lib/typescript.js:63935 → 65190` |
|  -28.7% | -2.52ms |  16.7% → 8.9% |   8.8ms → 6.3ms |   7 → 5 | `node_modules/typescript/lib/typescript.js:63904 → 65159` |

##### `(anonymous:L#53728)` (`node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |         Time | Samples | Location                                          |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
|    new | +16.30ms | 0.0% → 100.0% | 0ms → 16.3ms |  0 → 13 | `node_modules/typescript/lib/typescript.js:53728` |

##### `scanJsDocToken` (`node_modules/typescript/lib/typescript.js`)

| Change |   Delta |             % |           Time | Samples | Location                                                  |
| -----: | ------: | ------------: | -------------: | ------: | --------------------------------------------------------- |
| +59.7% | +3.75ms | 25.0% → 24.2% | 6.3ms → 10.0ms |   5 → 8 | `node_modules/typescript/lib/typescript.js:13497 → 14455` |
|    new | +2.51ms |   0.0% → 6.1% |    0ms → 2.5ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:14456`         |
|    new | +2.51ms |   0.0% → 6.1% |    0ms → 2.5ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:14537`         |
| +99.7% | +2.50ms | 10.0% → 12.1% |  2.5ms → 5.0ms |   2 → 4 | `node_modules/typescript/lib/typescript.js:13676 → 14635` |
| +39.8% | +2.50ms | 25.0% → 21.2% |  6.3ms → 8.8ms |   5 → 7 | `node_modules/typescript/lib/typescript.js:13572 → 14531` |

##### `resolveObjectTypeMembers` (`node_modules/typescript/lib/typescript.js`)

| Change |   Delta |             % |           Time | Samples | Location                                                  |
| -----: | ------: | ------------: | -------------: | ------: | --------------------------------------------------------- |
|    new | +3.76ms |   0.0% → 8.1% |    0ms → 3.8ms |   0 → 3 | `node_modules/typescript/lib/typescript.js:53747`         |
| +59.7% | +3.75ms | 20.8% → 21.6% | 6.3ms → 10.0ms |   5 → 8 | `node_modules/typescript/lib/typescript.js:59247 → 60502` |
| -66.7% | -2.51ms |  12.5% → 2.7% |  3.8ms → 1.3ms |   3 → 1 | `node_modules/typescript/lib/typescript.js:59230 → 60485` |
|    new | +2.51ms |   0.0% → 5.4% |    0ms → 2.5ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:60500`         |
|    new | +2.51ms |   0.0% → 5.4% |    0ms → 2.5ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:60505`         |

##### `inferFromMatchingTypes` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Location                                                  |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  +42.6% | +14.99ms | 63.6% → 70.2% | 35.2ms → 50.2ms | 28 → 40 | `node_modules/typescript/lib/typescript.js:70124 → 71407` |
| +299.4% |  +3.76ms |   2.3% → 7.0% |   1.3ms → 5.0ms |   1 → 4 | `node_modules/typescript/lib/typescript.js:70127 → 71410` |
|  -66.7% |  -2.51ms |   6.8% → 1.8% |   3.8ms → 1.3ms |   3 → 1 | `node_modules/typescript/lib/typescript.js:70122 → 71405` |
| removed |  -1.26ms |   2.3% → 0.0% |     1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:2537`          |
| removed |  -1.26ms |   2.3% → 0.0% |     1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:2545`          |

##### `isTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Location                                                  |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  +56.9% | +20.01ms | 49.1% → 62.9% | 35.2ms → 55.2ms | 28 → 44 | `node_modules/typescript/lib/typescript.js:66135 → 67395` |
|  -10.1% |  -2.55ms | 35.1% → 25.7% | 25.1ms → 22.6ms | 20 → 18 | `node_modules/typescript/lib/typescript.js:66122 → 67382` |
| removed |  -1.26ms |   1.8% → 0.0% |     1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:64409`         |
| removed |  -1.26ms |   1.8% → 0.0% |     1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:66118`         |
|     new |  +1.25ms |   0.0% → 1.4% |     0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:65664`         |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

| Change |   Delta |             % |            Time | Samples | Location                                                  |
| -----: | ------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
| +99.7% | +8.76ms |  9.1% → 15.6% |  8.8ms → 17.6ms |  7 → 14 | `node_modules/typescript/lib/typescript.js:70098 → 71381` |
| +74.7% | +7.51ms | 10.4% → 15.6% | 10.0ms → 17.6ms |  8 → 14 | `node_modules/typescript/lib/typescript.js:70104 → 71387` |
| -57.2% | -5.03ms |   9.1% → 3.3% |   8.8ms → 3.8ms |   7 → 3 | `node_modules/typescript/lib/typescript.js:70106 → 71389` |
| -13.8% | -3.81ms | 28.6% → 21.1% | 27.6ms → 23.8ms | 22 → 19 | `node_modules/typescript/lib/typescript.js:70093 → 71376` |
|    new | +3.76ms |   0.0% → 3.3% |     0ms → 3.8ms |   0 → 3 | `node_modules/typescript/lib/typescript.js:21226`         |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |            % |          Time | Samples | Location                                          |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------------- |
|     new | +130.42ms | 0.0% → 96.3% | 0ms → 130.4ms | 0 → 104 | `node_modules/typescript/lib/typescript.js:67410` |
| removed | -110.53ms | 92.6% → 0.0% | 110.5ms → 0ms |  88 → 0 | `node_modules/typescript/lib/typescript.js:66150` |
| removed |   -7.54ms |  6.3% → 0.0% |   7.5ms → 0ms |   6 → 0 | `node_modules/typescript/lib/typescript.js:66148` |
|     new |   +3.76ms |  0.0% → 2.8% |   0ms → 3.8ms |   0 → 3 | `node_modules/typescript/lib/typescript.js:67408` |
| removed |   -1.26ms |  1.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:65968` |

##### `parseTagComments` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |            % |         Time | Samples | Location                                          |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------------------- |
|     new | +12.54ms | 0.0% → 47.6% | 0ms → 12.5ms |  0 → 10 | `node_modules/typescript/lib/typescript.js:38655` |
|     new |  +5.02ms | 0.0% → 19.0% |  0ms → 5.0ms |   0 → 4 | `node_modules/typescript/lib/typescript.js:14440` |
| removed |  -3.77ms | 33.3% → 0.0% |  3.8ms → 0ms |   3 → 0 | `node_modules/typescript/lib/typescript.js:13482` |
| removed |  -2.51ms | 22.2% → 0.0% |  2.5ms → 0ms |   2 → 0 | `node_modules/typescript/lib/typescript.js:37600` |
|     new |  +2.51ms |  0.0% → 9.5% |  0ms → 2.5ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:38590` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Location                                                  |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  -53.5% | -38.99ms | 21.0% → 11.6% | 72.8ms → 33.9ms | 58 → 27 | `node_modules/typescript/lib/typescript.js:66493 → 67753` |
| removed | -32.66ms |   9.4% → 0.0% |    32.7ms → 0ms |  26 → 0 | `node_modules/typescript/lib/typescript.js:66150`         |
|     new | +23.83ms |   0.0% → 8.2% |    0ms → 23.8ms |  0 → 19 | `node_modules/typescript/lib/typescript.js:67410`         |
| removed | -16.33ms |   4.7% → 0.0% |    16.3ms → 0ms |  13 → 0 | `node_modules/typescript/lib/typescript.js:20243`         |
|     new | +16.30ms |   0.0% → 5.6% |    0ms → 16.3ms |  0 → 13 | `node_modules/typescript/lib/typescript.js:21226`         |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |              Time |   Samples | Location                                                  |
| -----: | -------: | ------------: | ----------------: | --------: | --------------------------------------------------------- |
|  -3.7% | -10.48ms | 60.7% → 63.9% | 281.3ms → 270.9ms | 224 → 216 | `node_modules/typescript/lib/typescript.js:66185 → 67445` |
| -77.8% |  -8.80ms |   2.4% → 0.6% |    11.3ms → 2.5ms |     9 → 2 | `node_modules/typescript/lib/typescript.js:66203 → 67463` |
| -16.1% |  -5.07ms |   6.8% → 6.2% |   31.4ms → 26.3ms |   25 → 21 | `node_modules/typescript/lib/typescript.js:66268 → 67528` |
|  -3.4% |  -3.95ms | 24.9% → 26.3% | 115.6ms → 111.6ms |   92 → 89 | `node_modules/typescript/lib/typescript.js:66204 → 67464` |
| -75.0% |  -3.77ms |   1.1% → 0.3% |     5.0ms → 1.3ms |     4 → 1 | `node_modules/typescript/lib/typescript.js:66232 → 67492` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |            % |           Time | Samples | Location                                                  |
| ------: | -------: | -----------: | -------------: | ------: | --------------------------------------------------------- |
|  -89.5% | -21.36ms | 15.3% → 2.1% | 23.9ms → 2.5ms |  19 → 2 | `node_modules/typescript/lib/typescript.js:70069 → 71351` |
|     new | +17.56ms | 0.0% → 14.7% |   0ms → 17.6ms |  0 → 14 | `node_modules/typescript/lib/typescript.js:71352`         |
| removed |  -7.54ms |  4.8% → 0.0% |    7.5ms → 0ms |   6 → 0 | `node_modules/typescript/lib/typescript.js:70028`         |
| removed |  -7.54ms |  4.8% → 0.0% |    7.5ms → 0ms |   6 → 0 | `node_modules/typescript/lib/typescript.js:70057`         |
|     new |  +7.52ms |  0.0% → 6.3% |    0ms → 7.5ms |   0 → 6 | `node_modules/typescript/lib/typescript.js:21226`         |

##### `resolveStructuredTypeMembers` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Location                                                  |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  -35.6% | -13.86ms | 32.0% → 29.4% | 38.9ms → 25.1ms | 31 → 20 | `node_modules/typescript/lib/typescript.js:60090 → 61345` |
|  -77.8% |  -8.80ms |   9.3% → 2.9% |  11.3ms → 2.5ms |   9 → 2 | `node_modules/typescript/lib/typescript.js:60091 → 61346` |
|  -60.1% |  -3.77ms |   5.2% → 2.9% |   6.3ms → 2.5ms |   5 → 2 | `node_modules/typescript/lib/typescript.js:60095 → 61350` |
| removed |  -3.77ms |   3.1% → 0.0% |     3.8ms → 0ms |   3 → 0 | `node_modules/typescript/lib/typescript.js:60092`         |
| removed |  -3.77ms |   3.1% → 0.0% |     3.8ms → 0ms |   3 → 0 | `node_modules/typescript/lib/typescript.js:60093`         |

##### `getUnionTypeFromSortedList` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Location                                                  |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  -47.1% | -30.20ms | 65.4% → 55.1% | 64.1ms → 33.9ms | 51 → 27 | `node_modules/typescript/lib/typescript.js:62957 → 64212` |
|  -36.5% |  -5.04ms | 14.1% → 14.3% |  13.8ms → 8.8ms |  11 → 7 | `node_modules/typescript/lib/typescript.js:62973 → 64228` |
|  -66.7% |  -2.51ms |   3.8% → 2.0% |   3.8ms → 1.3ms |   3 → 1 | `node_modules/typescript/lib/typescript.js:61526 → 62781` |
| removed |  -2.51ms |   2.6% → 0.0% |     2.5ms → 0ms |   2 → 0 | `node_modules/typescript/lib/typescript.js:62948`         |
| +199.5% |  +2.51ms |   1.3% → 6.1% |   1.3ms → 3.8ms |   1 → 3 | `node_modules/typescript/lib/typescript.js:62949 → 64204` |

##### `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |            Time | Samples | Location                                                  |
| -----: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
| -70.6% | -15.08ms |  12.9% → 4.6% |  21.4ms → 6.3ms |  17 → 5 | `node_modules/typescript/lib/typescript.js:66156 → 67416` |
| -50.1% |  -7.55ms |   9.1% → 5.6% |  15.1ms → 7.5ms |  12 → 6 | `node_modules/typescript/lib/typescript.js:65968 → 67228` |
| -83.4% |  -6.28ms |   4.5% → 0.9% |   7.5ms → 1.3ms |   6 → 1 | `node_modules/typescript/lib/typescript.js:66173 → 67433` |
| -20.1% |  -5.06ms | 15.2% → 14.8% | 25.1ms → 20.1ms | 20 → 16 | `node_modules/typescript/lib/typescript.js:66157 → 67417` |
| -50.1% |  -5.03ms |   6.1% → 3.7% |  10.0ms → 5.0ms |   8 → 4 | `node_modules/typescript/lib/typescript.js:66174 → 67434` |

##### `getMappedType` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Location                                                  |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|     new | +20.06ms |  0.0% → 30.8% |    0ms → 20.1ms |  0 → 16 | `node_modules/typescript/lib/typescript.js:65936`         |
| removed | -16.33ms |  17.1% → 0.0% |    16.3ms → 0ms |  13 → 0 | `node_modules/typescript/lib/typescript.js:64681`         |
|  -32.3% | -11.34ms | 36.8% → 36.5% | 35.2ms → 23.8ms | 28 → 19 | `node_modules/typescript/lib/typescript.js:64653 → 65908` |
|  -46.8% |  -8.81ms | 19.7% → 15.4% | 18.8ms → 10.0ms |  15 → 8 | `node_modules/typescript/lib/typescript.js:64652 → 65907` |
| removed |  -6.28ms |   6.6% → 0.0% |     6.3ms → 0ms |   5 → 0 | `node_modules/typescript/lib/typescript.js:64677`         |

##### `getTypeOfSymbol` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Location                                                  |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  -50.1% | -11.32ms | 31.6% → 25.0% | 22.6ms → 11.3ms |  18 → 9 | `node_modules/typescript/lib/typescript.js:58408 → 59663` |
|  -60.1% |  -3.77ms |   8.8% → 5.6% |   6.3ms → 2.5ms |   5 → 2 | `node_modules/typescript/lib/typescript.js:58353 → 59608` |
|  -75.0% |  -3.77ms |   7.0% → 2.8% |   5.0ms → 1.3ms |   4 → 1 | `node_modules/typescript/lib/typescript.js:58419 → 59674` |
|  -50.1% |  -2.52ms |   7.0% → 5.6% |   5.0ms → 2.5ms |   4 → 2 | `node_modules/typescript/lib/typescript.js:58409 → 59664` |
| removed |  -2.51ms |   3.5% → 0.0% |     2.5ms → 0ms |   2 → 0 | `node_modules/typescript/lib/typescript.js:58088`         |

##### `getReducedType` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Location                                                  |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  -64.1% | -20.11ms | 51.0% → 32.1% | 31.4ms → 11.3ms |  25 → 9 | `node_modules/typescript/lib/typescript.js:60678 → 61933` |
|  -46.2% |  -7.55ms | 26.5% → 25.0% |  16.3ms → 8.8ms |  13 → 7 | `node_modules/typescript/lib/typescript.js:60683 → 61938` |
|  +49.8% |  +2.50ms |  8.2% → 21.4% |   5.0ms → 7.5ms |   4 → 6 | `node_modules/typescript/lib/typescript.js:60681 → 61936` |
| removed |  -1.26ms |   2.0% → 0.0% |     1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:60680`         |
| removed |  -1.26ms |   2.0% → 0.0% |     1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:60685`         |

##### `getTypeFactsWorker` (`node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |           Time | Samples | Location                                                  |
| -----: | -------: | ------------: | -------------: | ------: | --------------------------------------------------------- |
| -57.2% | -10.06ms | 23.3% → 14.6% | 17.6ms → 7.5ms |  14 → 6 | `node_modules/typescript/lib/typescript.js:70941 → 72224` |
| -85.7% |  -7.54ms |  11.7% → 2.4% |  8.8ms → 1.3ms |   7 → 1 | `node_modules/typescript/lib/typescript.js:71010 → 72293` |
|    new |  +5.02ms |   0.0% → 9.8% |    0ms → 5.0ms |   0 → 4 | `node_modules/typescript/lib/typescript.js:61356`         |
|    new |  +5.02ms |   0.0% → 9.8% |    0ms → 5.0ms |   0 → 4 | `node_modules/typescript/lib/typescript.js:81469`         |
| -37.6% |  -3.78ms | 13.3% → 12.2% | 10.0ms → 6.3ms |   8 → 5 | `node_modules/typescript/lib/typescript.js:70978 → 72261` |

##### `getUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Location                                                  |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  -54.9% | -21.38ms | 59.6% → 42.4% | 38.9ms → 17.6ms | 31 → 14 | `node_modules/typescript/lib/typescript.js:60641 → 61896` |
|  -62.6% |  -6.29ms |  15.4% → 9.1% |  10.0ms → 3.8ms |   8 → 3 | `node_modules/typescript/lib/typescript.js:60644 → 61899` |
| +199.5% |  +2.51ms |   1.9% → 9.1% |   1.3ms → 3.8ms |   1 → 3 | `node_modules/typescript/lib/typescript.js:60645 → 61900` |
|  +39.8% |  +2.50ms |  9.6% → 21.2% |   6.3ms → 8.8ms |   5 → 7 | `node_modules/typescript/lib/typescript.js:60639 → 61894` |
| removed |  -1.26ms |   1.9% → 0.0% |     1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:60637`         |

##### `addTypeToUnion` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |            % |         Time | Samples | Location                                          |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------------------- |
| removed | -41.45ms | 97.1% → 0.0% | 41.4ms → 0ms |  33 → 0 | `node_modules/typescript/lib/typescript.js:62687` |
|     new | +16.30ms | 0.0% → 86.7% | 0ms → 16.3ms |  0 → 13 | `node_modules/typescript/lib/typescript.js:63942` |
| removed |  -1.26ms |  2.9% → 0.0% |  1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:62685` |
|     new |  +1.25ms |  0.0% → 6.7% |  0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:63927` |
|     new |  +1.25ms |  0.0% → 6.7% |  0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:63940` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|  Change |   Delta |             % |            Time | Samples | Location                                                |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------------------------- |
|  -43.8% | -8.81ms | 19.5% → 13.4% | 20.1ms → 11.3ms |  16 → 9 | `node_modules/typescript/lib/typescript.js:2781 → 2794` |
|   -8.7% | -5.11ms | 57.3% → 64.2% | 59.0ms → 53.9ms | 47 → 43 | `node_modules/typescript/lib/typescript.js:2785 → 2798` |
|  -12.6% | -2.54ms | 19.5% → 20.9% | 20.1ms → 17.6ms | 16 → 14 | `node_modules/typescript/lib/typescript.js:2784 → 2797` |
|  -50.1% | -1.26ms |   2.4% → 1.5% |   2.5ms → 1.3ms |   2 → 1 | `node_modules/typescript/lib/typescript.js:2786 → 2799` |
| removed | -1.26ms |   1.2% → 0.0% |     1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:2783`        |

##### `getSignaturesOfType` (`node_modules/typescript/lib/typescript.js`)

|  Change |   Delta |             % |            Time | Samples | Location                                                  |
| ------: | ------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  -25.1% | -7.57ms | 42.1% → 41.9% | 30.1ms → 22.6ms | 24 → 18 | `node_modules/typescript/lib/typescript.js:60790 → 62045` |
|  -57.2% | -5.03ms |  12.3% → 7.0% |   8.8ms → 3.8ms |   7 → 3 | `node_modules/typescript/lib/typescript.js:60493 → 61748` |
|  -33.4% | -3.78ms | 15.8% → 14.0% |  11.3ms → 7.5ms |   9 → 6 | `node_modules/typescript/lib/typescript.js:60789 → 62044` |
|  -60.1% | -3.77ms |   8.8% → 4.7% |   6.3ms → 2.5ms |   5 → 2 | `node_modules/typescript/lib/typescript.js:60679 → 61934` |
| removed | -2.51ms |   3.5% → 0.0% |     2.5ms → 0ms |   2 → 0 | `node_modules/typescript/lib/typescript.js:60783`         |

##### `nextTokenWithoutCheck` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
| removed | -32.66ms | 100.0% → 0.0% | 32.7ms → 0ms |  26 → 0 | `node_modules/typescript/lib/typescript.js:31954` |
|     new | +15.05ms | 0.0% → 100.0% | 0ms → 15.0ms |  0 → 12 | `node_modules/typescript/lib/typescript.js:33009` |

##### `resetMaybeStack` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Location                                                  |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  -60.9% | -17.60ms | 41.1% → 20.9% | 28.9ms → 11.3ms |  23 → 9 | `node_modules/typescript/lib/typescript.js:67198 → 68458` |
|  +29.0% |  +8.73ms | 42.9% → 72.1% | 30.1ms → 38.9ms | 24 → 31 | `node_modules/typescript/lib/typescript.js:67200 → 68460` |
|  -62.6% |  -6.29ms |  14.3% → 7.0% |  10.0ms → 3.8ms |   8 → 3 | `node_modules/typescript/lib/typescript.js:67196 → 68456` |
| removed |  -1.26ms |   1.8% → 0.0% |     1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:67197`         |

##### `isDeeplyNestedType` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |            % |          Time | Samples | Location                                                  |
| ------: | -------: | -----------: | ------------: | ------: | --------------------------------------------------------- |
| removed | -15.07ms | 21.8% → 0.0% |  15.1ms → 0ms |  12 → 0 | `node_modules/typescript/lib/typescript.js:20243`         |
|     new |  +7.52ms | 0.0% → 14.3% |   0ms → 7.5ms |   0 → 6 | `node_modules/typescript/lib/typescript.js:21226`         |
|  -75.0% |  -3.77ms |  7.3% → 2.4% | 5.0ms → 1.3ms |   4 → 1 | `node_modules/typescript/lib/typescript.js:68774 → 70034` |
| removed |  -3.77ms |  5.5% → 0.0% |   3.8ms → 0ms |   3 → 0 | `node_modules/typescript/lib/typescript.js:68822`         |
|  -66.7% |  -2.51ms |  5.5% → 2.4% | 3.8ms → 1.3ms |   3 → 1 | `node_modules/typescript/lib/typescript.js:68814 → 70074` |

##### `isSimpleTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|  Change |   Delta |             % |            Time | Samples | Location                                                  |
| ------: | ------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  -42.9% | -7.55ms | 42.4% → 40.0% | 17.6ms → 10.0ms |  14 → 8 | `node_modules/typescript/lib/typescript.js:66052 → 67312` |
| removed | -3.77ms |   9.1% → 0.0% |     3.8ms → 0ms |   3 → 0 | `node_modules/typescript/lib/typescript.js:66096`         |
| removed | -2.51ms |   6.1% → 0.0% |     2.5ms → 0ms |   2 → 0 | `node_modules/typescript/lib/typescript.js:66093`         |
|  -50.1% | -1.26ms |   6.1% → 5.0% |   2.5ms → 1.3ms |   2 → 1 | `node_modules/typescript/lib/typescript.js:66085 → 67345` |
| removed | -1.26ms |   3.0% → 0.0% |     1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:66059`         |

##### `(anonymous:L#52483)` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
| removed | -16.33ms | 100.0% → 0.0% | 16.3ms → 0ms |  13 → 0 | `node_modules/typescript/lib/typescript.js:52483` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |            Time | Samples | Location                                                  |
| -----: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
| -18.6% | -12.65ms | 64.3% → 61.1% | 67.8ms → 55.2ms | 54 → 44 | `node_modules/typescript/lib/typescript.js:64627 → 65882` |
| -75.0% |  -3.77ms |   4.8% → 1.4% |   5.0ms → 1.3ms |   4 → 1 | `node_modules/typescript/lib/typescript.js:64630 → 65885` |
| +27.1% |  +3.74ms | 13.1% → 19.4% | 13.8ms → 17.6ms | 11 → 14 | `node_modules/typescript/lib/typescript.js:64629 → 65884` |
| -20.1% |  -2.53ms | 11.9% → 11.1% | 12.6ms → 10.0ms |  10 → 8 | `node_modules/typescript/lib/typescript.js:64632 → 65887` |
| -25.1% |  -1.26ms |   4.8% → 4.2% |   5.0ms → 3.8ms |   4 → 3 | `node_modules/typescript/lib/typescript.js:64623 → 65878` |

### Total time

#### Regressions

Functions with the largest increase in total wall time spent in the function and all its callees.

| Change |     Delta |             % |              Time |       Samples | Function                           | Location                                                          |
| -----: | --------: | ------------: | ----------------: | ------------: | ---------------------------------- | ----------------------------------------------------------------- |
|  +6.5% | +123.63ms | 11.7% → 12.6% |     1.90s → 2.02s | 1,513 → 1,614 | `(garbage collector)`              | `<unknown>`                                                       |
|    new |  +97.81ms |   0.0% → 0.6% |      0ms → 97.8ms |        0 → 78 | `expressionOrTypeToTypeNodeHelper` | `node_modules/typescript/lib/typescript.js`                       |
| +15.2% |  +89.35ms |   3.6% → 4.2% | 587.8ms → 677.2ms |     468 → 540 | `doInsideOfContext`                | `node_modules/typescript/lib/typescript.js`                       |
|  +1.2% |  +85.53ms | 42.5% → 43.7% |     6.92s → 7.01s | 5,516 → 5,593 | `resolveCallExpression`            | `node_modules/typescript/lib/typescript.js`                       |
|  +4.7% |  +83.71ms | 10.9% → 11.5% |     1.76s → 1.85s | 1,409 → 1,478 | `processSourceFile`                | `node_modules/typescript/lib/typescript.js`                       |
|  +4.7% |  +82.45ms | 10.9% → 11.5% |     1.77s → 1.85s | 1,410 → 1,478 | `getSourceFileFromReferenceWorker` | `node_modules/typescript/lib/typescript.js`                       |
|  +4.6% |  +81.20ms | 10.9% → 11.5% |     1.76s → 1.85s | 1,409 → 1,476 | `findSourceFile`                   | `node_modules/typescript/lib/typescript.js`                       |
|  +6.0% |  +80.62ms |   8.3% → 8.9% |     1.34s → 1.42s | 1,071 → 1,137 | `parseListElement`                 | `node_modules/typescript/lib/typescript.js`                       |
|  +5.9% |  +80.58ms |   8.4% → 9.0% |     1.37s → 1.45s | 1,091 → 1,157 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:121506:26 → 123084:26` |
|  +5.9% |  +80.58ms |   8.4% → 9.0% |     1.37s → 1.45s | 1,091 → 1,157 | `createSourceFile`                 | `node_modules/typescript/lib/typescript.js`                       |
|  +4.5% |  +79.95ms | 10.9% → 11.5% |     1.76s → 1.84s | 1,409 → 1,475 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:123923:26 → 125505:26` |
|  +4.5% |  +79.95ms | 10.9% → 11.5% |     1.76s → 1.84s | 1,409 → 1,475 | `findSourceFileWorker`             | `node_modules/typescript/lib/typescript.js`                       |
|  +4.3% |  +78.58ms | 11.3% → 11.9% |     1.83s → 1.91s | 1,463 → 1,528 | `createProgram`                    | `node_modules/typescript/lib/typescript.js`                       |
|  +6.6% |  +78.37ms |   7.3% → 7.9% |     1.18s → 1.26s |   941 → 1,005 | `parseDeclarationWorker`           | `node_modules/typescript/lib/typescript.js`                       |
|  +5.7% |  +78.07ms |   8.4% → 9.0% |     1.37s → 1.44s | 1,091 → 1,155 | `parseSourceFile`                  | `node_modules/typescript/lib/typescript.js`                       |
|  +5.8% |  +76.89ms |   8.1% → 8.7% |     1.32s → 1.40s | 1,055 → 1,118 | `parseList`                        | `node_modules/typescript/lib/typescript.js`                       |
|  +5.5% |  +75.57ms |   8.4% → 9.0% |     1.36s → 1.44s | 1,088 → 1,150 | `parseSourceFileWorker`            | `node_modules/typescript/lib/typescript.js`                       |
|  +1.6% |  +75.33ms | 28.7% → 29.6% |     4.67s → 4.74s | 3,719 → 3,785 | `inferTypeArguments`               | `node_modules/typescript/lib/typescript.js`                       |
|  +6.2% |  +74.58ms |   7.4% → 7.9% |     1.19s → 1.27s |   955 → 1,016 | `parseDeclaration`                 | `node_modules/typescript/lib/typescript.js`                       |
|  +5.7% |  +74.41ms |   8.0% → 8.6% |     1.31s → 1.38s | 1,044 → 1,105 | `parseStatement`                   | `node_modules/typescript/lib/typescript.js`                       |

##### Third-party

| Change |    Delta |             % |              Time |       Samples | Function                           | Location                                                          |
| -----: | -------: | ------------: | ----------------: | ------------: | ---------------------------------- | ----------------------------------------------------------------- |
|    new | +97.81ms |   0.0% → 0.6% |      0ms → 97.8ms |        0 → 78 | `expressionOrTypeToTypeNodeHelper` | `node_modules/typescript/lib/typescript.js`                       |
| +15.2% | +89.35ms |   3.6% → 4.2% | 587.8ms → 677.2ms |     468 → 540 | `doInsideOfContext`                | `node_modules/typescript/lib/typescript.js`                       |
|  +1.2% | +85.53ms | 42.5% → 43.7% |     6.92s → 7.01s | 5,516 → 5,593 | `resolveCallExpression`            | `node_modules/typescript/lib/typescript.js`                       |
|  +4.7% | +83.71ms | 10.9% → 11.5% |     1.76s → 1.85s | 1,409 → 1,478 | `processSourceFile`                | `node_modules/typescript/lib/typescript.js`                       |
|  +4.7% | +82.45ms | 10.9% → 11.5% |     1.77s → 1.85s | 1,410 → 1,478 | `getSourceFileFromReferenceWorker` | `node_modules/typescript/lib/typescript.js`                       |
|  +4.6% | +81.20ms | 10.9% → 11.5% |     1.76s → 1.85s | 1,409 → 1,476 | `findSourceFile`                   | `node_modules/typescript/lib/typescript.js`                       |
|  +6.0% | +80.62ms |   8.3% → 8.9% |     1.34s → 1.42s | 1,071 → 1,137 | `parseListElement`                 | `node_modules/typescript/lib/typescript.js`                       |
|  +5.9% | +80.58ms |   8.4% → 9.0% |     1.37s → 1.45s | 1,091 → 1,157 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:121506:26 → 123084:26` |
|  +5.9% | +80.58ms |   8.4% → 9.0% |     1.37s → 1.45s | 1,091 → 1,157 | `createSourceFile`                 | `node_modules/typescript/lib/typescript.js`                       |
|  +4.5% | +79.95ms | 10.9% → 11.5% |     1.76s → 1.84s | 1,409 → 1,475 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:123923:26 → 125505:26` |
|  +4.5% | +79.95ms | 10.9% → 11.5% |     1.76s → 1.84s | 1,409 → 1,475 | `findSourceFileWorker`             | `node_modules/typescript/lib/typescript.js`                       |
|  +4.3% | +78.58ms | 11.3% → 11.9% |     1.83s → 1.91s | 1,463 → 1,528 | `createProgram`                    | `node_modules/typescript/lib/typescript.js`                       |
|  +6.6% | +78.37ms |   7.3% → 7.9% |     1.18s → 1.26s |   941 → 1,005 | `parseDeclarationWorker`           | `node_modules/typescript/lib/typescript.js`                       |
|  +5.7% | +78.07ms |   8.4% → 9.0% |     1.37s → 1.44s | 1,091 → 1,155 | `parseSourceFile`                  | `node_modules/typescript/lib/typescript.js`                       |
|  +5.8% | +76.89ms |   8.1% → 8.7% |     1.32s → 1.40s | 1,055 → 1,118 | `parseList`                        | `node_modules/typescript/lib/typescript.js`                       |
|  +5.5% | +75.57ms |   8.4% → 9.0% |     1.36s → 1.44s | 1,088 → 1,150 | `parseSourceFileWorker`            | `node_modules/typescript/lib/typescript.js`                       |
|  +1.6% | +75.33ms | 28.7% → 29.6% |     4.67s → 4.74s | 3,719 → 3,785 | `inferTypeArguments`               | `node_modules/typescript/lib/typescript.js`                       |
|  +6.2% | +74.58ms |   7.4% → 7.9% |     1.19s → 1.27s |   955 → 1,016 | `parseDeclaration`                 | `node_modules/typescript/lib/typescript.js`                       |
|  +5.7% | +74.41ms |   8.0% → 8.6% |     1.31s → 1.38s | 1,044 → 1,105 | `parseStatement`                   | `node_modules/typescript/lib/typescript.js`                       |
|  +5.0% | +74.14ms |   9.1% → 9.7% |     1.47s → 1.55s | 1,176 → 1,237 | `processRootFile`                  | `node_modules/typescript/lib/typescript.js`                       |

##### Garbage collector

| Change |     Delta |             % |          Time |       Samples | Function              | Location    |
| -----: | --------: | ------------: | ------------: | ------------: | --------------------- | ----------- |
|  +6.5% | +123.63ms | 11.7% → 12.6% | 1.90s → 2.02s | 1,513 → 1,614 | `(garbage collector)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total wall time spent in the function and all its callees.

| Change |     Delta |             % |            Time |         Samples | Function                                   | Location                                                          |
| -----: | --------: | ------------: | --------------: | --------------: | ------------------------------------------ | ----------------------------------------------------------------- |
|  -3.6% | -401.72ms | 69.4% → 67.9% | 11.30s → 10.89s |   8,997 → 8,691 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`                       |
|  -3.3% | -399.44ms | 75.1% → 73.7% | 12.23s → 11.83s |   9,738 → 9,435 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -396.93ms | 75.1% → 73.7% | 12.23s → 11.83s |   9,738 → 9,437 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -394.42ms | 75.1% → 73.7% | 12.22s → 11.83s |   9,736 → 9,437 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -394.42ms | 75.1% → 73.7% | 12.22s → 11.83s |   9,735 → 9,436 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -393.16ms | 75.0% → 73.7% | 12.22s → 11.83s |   9,733 → 9,435 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123321:41 → 124903:41` |
|  -3.4% | -391.94ms | 70.4% → 69.0% | 11.46s → 11.07s |   9,126 → 8,828 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -391.91ms | 75.1% → 73.7% | 12.22s → 11.83s |   9,736 → 9,439 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -391.90ms | 75.0% → 73.7% | 12.22s → 11.82s |   9,730 → 9,433 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -391.89ms | 75.0% → 73.7% | 12.21s → 11.82s |   9,727 → 9,430 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`                       |
|  -3.4% | -390.69ms | 70.4% → 69.0% | 11.46s → 11.07s |   9,127 → 8,830 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`                       |
|  -3.4% | -390.69ms | 70.4% → 69.0% | 11.45s → 11.06s |   9,124 → 8,827 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123397:27 → 124979:27` |
|  -3.2% | -390.64ms | 75.0% → 73.7% | 12.21s → 11.82s |   9,728 → 9,432 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`                       |
|  -3.5% | -390.43ms | 69.4% → 68.0% | 11.29s → 10.90s |   8,995 → 8,698 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`                       |
|  -3.4% | -386.93ms | 70.4% → 69.0% | 11.46s → 11.07s |   9,128 → 8,834 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`                       |
|  -3.3% | -383.18ms | 70.4% → 69.1% | 11.46s → 11.08s |   9,131 → 8,840 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`                       |
|  -3.3% | -383.17ms | 70.4% → 69.0% | 11.46s → 11.08s |   9,128 → 8,837 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`                       |
| -12.7% | -320.03ms | 15.5% → 13.8% |   2.52s → 2.20s |   2,012 → 1,760 | `addLazyDiagnostic`                        | `node_modules/typescript/lib/typescript.js`                       |
|  -2.2% | -318.53ms | 87.1% → 86.4% | 14.18s → 13.86s | 11,293 → 11,057 | `typeCheckProject`                         | `tsc-workload.mjs`                                                |
|  -2.2% | -316.02ms | 87.1% → 86.4% | 14.18s → 13.86s | 11,291 → 11,057 | `(anonymous)`                              | `datadog-pprof.mjs:3:33`                                          |

##### Third-party

| Change |     Delta |             % |            Time |       Samples | Function                                   | Location                                                          |
| -----: | --------: | ------------: | --------------: | ------------: | ------------------------------------------ | ----------------------------------------------------------------- |
|  -3.6% | -401.72ms | 69.4% → 67.9% | 11.30s → 10.89s | 8,997 → 8,691 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`                       |
|  -3.3% | -399.44ms | 75.1% → 73.7% | 12.23s → 11.83s | 9,738 → 9,435 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -396.93ms | 75.1% → 73.7% | 12.23s → 11.83s | 9,738 → 9,437 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -394.42ms | 75.1% → 73.7% | 12.22s → 11.83s | 9,736 → 9,437 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -394.42ms | 75.1% → 73.7% | 12.22s → 11.83s | 9,735 → 9,436 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -393.16ms | 75.0% → 73.7% | 12.22s → 11.83s | 9,733 → 9,435 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123321:41 → 124903:41` |
|  -3.4% | -391.94ms | 70.4% → 69.0% | 11.46s → 11.07s | 9,126 → 8,828 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -391.91ms | 75.1% → 73.7% | 12.22s → 11.83s | 9,736 → 9,439 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -391.90ms | 75.0% → 73.7% | 12.22s → 11.82s | 9,730 → 9,433 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -391.89ms | 75.0% → 73.7% | 12.21s → 11.82s | 9,727 → 9,430 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`                       |
|  -3.4% | -390.69ms | 70.4% → 69.0% | 11.46s → 11.07s | 9,127 → 8,830 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`                       |
|  -3.4% | -390.69ms | 70.4% → 69.0% | 11.45s → 11.06s | 9,124 → 8,827 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123397:27 → 124979:27` |
|  -3.2% | -390.64ms | 75.0% → 73.7% | 12.21s → 11.82s | 9,728 → 9,432 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`                       |
|  -3.5% | -390.43ms | 69.4% → 68.0% | 11.29s → 10.90s | 8,995 → 8,698 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`                       |
|  -3.4% | -386.93ms | 70.4% → 69.0% | 11.46s → 11.07s | 9,128 → 8,834 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`                       |
|  -3.3% | -383.18ms | 70.4% → 69.1% | 11.46s → 11.08s | 9,131 → 8,840 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`                       |
|  -3.3% | -383.17ms | 70.4% → 69.0% | 11.46s → 11.08s | 9,128 → 8,837 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`                       |
| -12.7% | -320.03ms | 15.5% → 13.8% |   2.52s → 2.20s | 2,012 → 1,760 | `addLazyDiagnostic`                        | `node_modules/typescript/lib/typescript.js`                       |
|  -5.5% | -306.09ms | 34.3% → 32.9% |   5.58s → 5.27s | 4,447 → 4,210 | `checkTypeRelatedTo`                       | `node_modules/typescript/lib/typescript.js`                       |
| -12.7% | -298.42ms | 14.4% → 12.7% |   2.34s → 2.04s | 1,866 → 1,631 | `checkTypeReferenceNode`                   | `node_modules/typescript/lib/typescript.js`                       |

# Wall time profile

Took 19.08s over 15,012 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 86.9% |  16.57s |  13,038 |
| Garbage collector  | 11.3% |   2.14s |   1,690 |
| Native             |  1.0% | 197.0ms |     155 |
| Standard library   |  0.7% | 136.0ms |     107 |
| Regular expression |  0.1% |  28.0ms |      22 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                        | Location                                    |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------- |
| 11.3% |   2.14s |   1,690 | `(garbage collector)`           | `<unknown>`                                 |
|  3.1% | 583.4ms |     459 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js` |
|  2.5% | 485.5ms |     382 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js` |
|  2.1% | 399.1ms |     314 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js` |
|  2.0% | 377.5ms |     297 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
|  1.7% | 316.5ms |     249 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js` |
|  1.6% | 312.7ms |     246 | `scan`                          | `node_modules/typescript/lib/typescript.js` |
|  1.4% | 266.9ms |     210 | `some`                          | `node_modules/typescript/lib/typescript.js` |
|  1.1% | 202.1ms |     159 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js` |
|  0.9% | 180.5ms |     142 | `createTypeReference`           | `node_modules/typescript/lib/typescript.js` |
|  0.9% | 171.6ms |     135 | `getNodeLinks`                  | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 152.5ms |     120 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 134.7ms |     106 | `getMembersOfSymbol`            | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 132.2ms |     104 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 128.4ms |     101 | `bind`                          | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 125.8ms |      99 | `instantiateType`               | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 122.0ms |      96 | `resolveStructuredTypeMembers`  | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 118.2ms |      93 | `invokeOnce`                    | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 115.7ms |      91 | `isTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 106.8ms |      84 | `getReducedApparentType`        | `node_modules/typescript/lib/typescript.js` |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                        | Location                                    |
| ---: | ------: | ------: | ------------------------------- | ------------------------------------------- |
| 3.1% | 583.4ms |     459 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js` |
| 2.5% | 485.5ms |     382 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js` |
| 2.1% | 399.1ms |     314 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js` |
| 2.0% | 377.5ms |     297 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
| 1.7% | 316.5ms |     249 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js` |
| 1.6% | 312.7ms |     246 | `scan`                          | `node_modules/typescript/lib/typescript.js` |
| 1.4% | 266.9ms |     210 | `some`                          | `node_modules/typescript/lib/typescript.js` |
| 1.1% | 202.1ms |     159 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js` |
| 0.9% | 180.5ms |     142 | `createTypeReference`           | `node_modules/typescript/lib/typescript.js` |
| 0.9% | 171.6ms |     135 | `getNodeLinks`                  | `node_modules/typescript/lib/typescript.js` |
| 0.8% | 152.5ms |     120 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 134.7ms |     106 | `getMembersOfSymbol`            | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 132.2ms |     104 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 128.4ms |     101 | `bind`                          | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 125.8ms |      99 | `instantiateType`               | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 122.0ms |      96 | `resolveStructuredTypeMembers`  | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 118.2ms |      93 | `invokeOnce`                    | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 115.7ms |      91 | `isTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 106.8ms |      84 | `getReducedApparentType`        | `node_modules/typescript/lib/typescript.js` |
| 0.5% | 104.2ms |      82 | `getPropertyOfType`             | `node_modules/typescript/lib/typescript.js` |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 11.3% | 2.14s |   1,690 | `(garbage collector)` | `<unknown>` |

##### Native

|     % |   Time | Samples | Function       | Location    |
| ----: | -----: | ------: | -------------- | ----------- |
|  0.3% | 53.4ms |      42 | `open`         | `<unknown>` |
|  0.3% | 53.4ms |      42 | `stat`         | `<unknown>` |
|  0.3% | 53.4ms |      42 | `read`         | `<unknown>` |
|  0.1% | 20.3ms |      16 | `realpath`     | `<unknown>` |
| <0.1% |  6.4ms |       5 | `fstat`        | `<unknown>` |
| <0.1% |  5.1ms |       4 | `readFileUtf8` | `<unknown>` |
| <0.1% |  2.5ms |       2 | `close`        | `<unknown>` |
| <0.1% |  2.5ms |       2 | `readdir`      | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 52.9% | 308.9ms |     243 | `node_modules/typescript/lib/typescript.js:64396` |
|  9.6% |  55.9ms |      44 | `node_modules/typescript/lib/typescript.js:64449` |
|  7.8% |  45.8ms |      36 | `node_modules/typescript/lib/typescript.js:64443` |
|  3.9% |  22.9ms |      18 | `node_modules/typescript/lib/typescript.js:66053` |
|  3.7% |  21.6ms |      17 | `node_modules/typescript/lib/typescript.js:64422` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 71.2% | 345.7ms |     272 | `node_modules/typescript/lib/typescript.js:63505` |
| 19.4% |  94.1ms |      74 | `node_modules/typescript/lib/typescript.js:63524` |
|  1.8% |   8.9ms |       7 | `node_modules/typescript/lib/typescript.js:63523` |
|  1.8% |   8.9ms |       7 | `node_modules/typescript/lib/typescript.js:63588` |
|  1.6% |   7.6ms |       6 | `node_modules/typescript/lib/typescript.js:63521` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 39.5% | 157.6ms |     124 | `node_modules/typescript/lib/typescript.js:62149` |
| 12.1% |  48.3ms |      38 | `node_modules/typescript/lib/typescript.js:62152` |
|  8.3% |  33.0ms |      26 | `node_modules/typescript/lib/typescript.js:62153` |
|  3.5% |  14.0ms |      11 | `node_modules/typescript/lib/typescript.js:259`   |
|  2.5% |  10.2ms |       8 | `node_modules/typescript/lib/typescript.js:62120` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 17.5% | 66.1ms |      52 | `node_modules/typescript/lib/typescript.js:63910` |
| 14.8% | 55.9ms |      44 | `node_modules/typescript/lib/typescript.js:63813` |
| 13.8% | 52.1ms |      41 | `node_modules/typescript/lib/typescript.js:63843` |
|  7.7% | 29.2ms |      23 | `node_modules/typescript/lib/typescript.js:63880` |
|  6.7% | 25.4ms |      20 | `node_modules/typescript/lib/typescript.js:63481` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 47.4% | 150.0ms |     118 | `node_modules/typescript/lib/typescript.js:62370` |
|  9.2% |  29.2ms |      23 | `node_modules/typescript/lib/typescript.js:62383` |
|  8.8% |  28.0ms |      22 | `node_modules/typescript/lib/typescript.js:62365` |
|  5.6% |  17.8ms |      14 | `node_modules/typescript/lib/typescript.js:62354` |
|  3.6% |  11.4ms |       9 | `node_modules/typescript/lib/typescript.js:62386` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 14.6% | 45.8ms |      36 | `node_modules/typescript/lib/typescript.js:11234` |
| 10.6% | 33.0ms |      26 | `node_modules/typescript/lib/typescript.js:10352` |
|  8.1% | 25.4ms |      20 | `node_modules/typescript/lib/typescript.js:10816` |
|  6.9% | 21.6ms |      17 | `node_modules/typescript/lib/typescript.js:10676` |
|  4.5% | 14.0ms |      11 | `node_modules/typescript/lib/typescript.js:10327` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                        |
| ----: | ------: | ------: | ----------------------------------------------- |
| 67.6% | 180.5ms |     142 | `node_modules/typescript/lib/typescript.js:472` |
| 18.1% |  48.3ms |      38 | `node_modules/typescript/lib/typescript.js:468` |
| 13.8% |  36.9ms |      29 | `node_modules/typescript/lib/typescript.js:471` |
|  0.5% |   1.3ms |       1 | `node_modules/typescript/lib/typescript.js:473` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 94.3% | 190.6ms |     150 | `node_modules/typescript/lib/typescript.js:56405` |
|  1.3% |   2.5ms |       2 | `node_modules/typescript/lib/typescript.js:56402` |
|  1.3% |   2.5ms |       2 | `node_modules/typescript/lib/typescript.js:17465` |
|  1.3% |   2.5ms |       2 | `node_modules/typescript/lib/typescript.js:62111` |
|  0.6% |   1.3ms |       1 | `node_modules/typescript/lib/typescript.js:62093` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 62.7% | 113.1ms |      89 | `node_modules/typescript/lib/typescript.js:58884` |
| 33.8% |  61.0ms |      48 | `node_modules/typescript/lib/typescript.js:58887` |
|  1.4% |   2.5ms |       2 | `node_modules/typescript/lib/typescript.js:58882` |
|  0.7% |   1.3ms |       1 | `node_modules/typescript/lib/typescript.js:58883` |
|  0.7% |   1.3ms |       1 | `node_modules/typescript/lib/typescript.js:50070` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 95.6% | 164.0ms |     129 | `node_modules/typescript/lib/typescript.js:47545` |
|  3.7% |   6.4ms |       5 | `node_modules/typescript/lib/typescript.js:47543` |
|  0.7% |   1.3ms |       1 | `node_modules/typescript/lib/typescript.js:47544` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 15.0% | 22.9ms |      18 | `node_modules/typescript/lib/typescript.js:65073` |
| 13.3% | 20.3ms |      16 | `node_modules/typescript/lib/typescript.js:65084` |
|  8.3% | 12.7ms |      10 | `node_modules/typescript/lib/typescript.js:65086` |
|  7.5% | 11.4ms |       9 | `node_modules/typescript/lib/typescript.js:64699` |
|  4.2% |  6.4ms |       5 | `node_modules/typescript/lib/typescript.js:65088` |

##### `getMembersOfSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 84.9% | 114.4ms |      90 | `node_modules/typescript/lib/typescript.js:56564` |
| 15.1% |  20.3ms |      16 | `node_modules/typescript/lib/typescript.js:56563` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 18.3% | 24.1ms |      19 | `node_modules/typescript/lib/typescript.js:67379` |
|  6.7% |  8.9ms |       7 | `node_modules/typescript/lib/typescript.js:67367` |
|  5.8% |  7.6ms |       6 | `node_modules/typescript/lib/typescript.js:67214` |
|  5.8% |  7.6ms |       6 | `node_modules/typescript/lib/typescript.js:67237` |
|  5.8% |  7.6ms |       6 | `node_modules/typescript/lib/typescript.js:67225` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 23.8% | 30.5ms |      24 | `node_modules/typescript/lib/typescript.js:44008` |
| 19.8% | 25.4ms |      20 | `node_modules/typescript/lib/typescript.js:44014` |
| 11.9% | 15.3ms |      12 | `node_modules/typescript/lib/typescript.js:44016` |
|  5.9% |  7.6ms |       6 | `node_modules/typescript/lib/typescript.js:44000` |
|  5.9% |  7.6ms |       6 | `node_modules/typescript/lib/typescript.js:44009` |

##### `instantiateType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 42.4% | 53.4ms |      42 | `node_modules/typescript/lib/typescript.js:62327` |
| 18.2% | 22.9ms |      18 | `node_modules/typescript/lib/typescript.js:66923` |
|  8.1% | 10.2ms |       8 | `node_modules/typescript/lib/typescript.js:62350` |
|  6.1% |  7.6ms |       6 | `node_modules/typescript/lib/typescript.js:62342` |
|  6.1% |  7.6ms |       6 | `node_modules/typescript/lib/typescript.js:62328` |

##### `resolveStructuredTypeMembers` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 39.6% | 48.3ms |      38 | `node_modules/typescript/lib/typescript.js:57461` |
| 15.6% | 19.1ms |      15 | `node_modules/typescript/lib/typescript.js:57471` |
| 11.5% | 14.0ms |      11 | `node_modules/typescript/lib/typescript.js:57473` |
| 10.4% | 12.7ms |      10 | `node_modules/typescript/lib/typescript.js:57465` |
|  8.3% | 10.2ms |       8 | `node_modules/typescript/lib/typescript.js:57462` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 22.6% | 26.7ms |      21 | `node_modules/typescript/lib/typescript.js:67403` |
| 18.3% | 21.6ms |      17 | `node_modules/typescript/lib/typescript.js:67402` |
| 10.8% | 12.7ms |      10 | `node_modules/typescript/lib/typescript.js:67419` |
| 10.8% | 12.7ms |      10 | `node_modules/typescript/lib/typescript.js:67416` |
|  5.4% |  6.4ms |       5 | `node_modules/typescript/lib/typescript.js:67408` |

##### `isTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 59.3% | 68.6ms |      54 | `node_modules/typescript/lib/typescript.js:63466` |
| 26.4% | 30.5ms |      24 | `node_modules/typescript/lib/typescript.js:63453` |
|  5.5% |  6.4ms |       5 | `node_modules/typescript/lib/typescript.js:63443` |
|  3.3% |  3.8ms |       3 | `node_modules/typescript/lib/typescript.js:63432` |
|  3.3% |  3.8ms |       3 | `node_modules/typescript/lib/typescript.js:63433` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 72.6% | 77.5ms |      61 | `node_modules/typescript/lib/typescript.js:57867` |
| 10.7% | 11.4ms |       9 | `node_modules/typescript/lib/typescript.js:57864` |
|  8.3% |  8.9ms |       7 | `node_modules/typescript/lib/typescript.js:57866` |
|  4.8% |  5.1ms |       4 | `node_modules/typescript/lib/typescript.js:58052` |
|  3.6% |  3.8ms |       3 | `node_modules/typescript/lib/typescript.js:17465` |

##### `getPropertyOfType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 56.1% | 58.5ms |      46 | `node_modules/typescript/lib/typescript.js:58115` |
|  8.5% |  8.9ms |       7 | `node_modules/typescript/lib/typescript.js:58114` |
|  7.3% |  7.6ms |       6 | `node_modules/typescript/lib/typescript.js:58116` |
|  4.9% |  5.1ms |       4 | `node_modules/typescript/lib/typescript.js:58110` |
|  4.9% |  5.1ms |       4 | `node_modules/typescript/lib/typescript.js:58134` |

##### `open` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 53.4ms |      42 | 560      |

##### `stat` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 53.4ms |      42 | 1746     |

##### `read` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 53.4ms |      42 | 736      |

##### `realpath` (`<unknown>`)

|     % |   Time | Samples | Location |
| ----: | -----: | ------: | -------- |
| 93.8% | 19.1ms |      15 | 2853     |
|  6.3% |  1.3ms |       1 | 2855     |

##### `fstat` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 6.4ms |       5 | 390      |

##### `readFileUtf8` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 5.1ms |       4 | 440      |

##### `close` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.5ms |       2 | 517      |

##### `readdir` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.5ms |       2 | 1590     |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 99.1% | 578.3ms |     455 | `isRelatedTo`                 | `node_modules/typescript/lib/typescript.js` |
|  0.7% |   3.8ms |       3 | `checkTypeRelatedTo`          | `node_modules/typescript/lib/typescript.js` |
|  0.2% |   1.3ms |       1 | `isPropertySymbolTypeRelated` | `node_modules/typescript/lib/typescript.js` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                  | Location                                    |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 99.0% | 480.4ms |     378 | `isTypeRelatedTo`       | `node_modules/typescript/lib/typescript.js` |
|  1.0% |   5.1ms |       4 | `checkTypeAssignableTo` | `node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                     | Location                                    |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------- |
| 99.7% | 397.8ms |     313 | `instantiateTypeWorker`    | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 63.3% | 238.9ms |     188 | `checkTypeRelatedTo`          | `node_modules/typescript/lib/typescript.js` |
| 13.5% |  50.8ms |      40 | `isRelatedToWorker2`          | `node_modules/typescript/lib/typescript.js` |
|  7.1% |  26.7ms |      21 | `isPropertySymbolTypeRelated` | `node_modules/typescript/lib/typescript.js` |
|  5.4% |  20.3ms |      16 | `eachTypeRelatedToType`       | `node_modules/typescript/lib/typescript.js` |
|  3.0% |  11.4ms |       9 | `typeArgumentsRelatedTo`      | `node_modules/typescript/lib/typescript.js` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                     | Location                                    |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------- |
| 99.6% | 315.2ms |     248 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `getMappedType`            | `node_modules/typescript/lib/typescript.js` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                                         | Location                                    |
| ----: | ------: | ------: | ---------------------------------------------- | ------------------------------------------- |
| 97.6% | 305.0ms |     240 | `nextTokenWithoutCheck`                        | `node_modules/typescript/lib/typescript.js` |
|  0.8% |   2.5ms |       2 | `checkTypeReferenceNode`                       | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `speculationHelper`                            | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `parseJsonText2`                               | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `tryParseParenthesizedArrowFunctionExpression` | `node_modules/typescript/lib/typescript.js` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                                 | Location                                    |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------------------- |
| 48.6% | 129.6ms |     102 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
|  8.1% |  21.6ms |      17 | `isConstTypeVariable`                  | `node_modules/typescript/lib/typescript.js` |
|  6.7% |  17.8ms |      14 | `hasMatchingRecursionIdentity`         | `node_modules/typescript/lib/typescript.js` |
|  5.7% |  15.3ms |      12 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js` |
|  5.7% |  15.3ms |      12 | `isTypeReferenceWithGenericArguments`  | `node_modules/typescript/lib/typescript.js` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 96.9% | 195.7ms |     154 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js` |
|  3.1% |   6.4ms |       5 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                            | Location                                    |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------- |
| 69.0% | 124.6ms |      98 | `createNormalizedTypeReference`   | `node_modules/typescript/lib/typescript.js` |
| 16.9% |  30.5ms |      24 | `getTypeWithThisArgument`         | `node_modules/typescript/lib/typescript.js` |
|  6.3% |  11.4ms |       9 | `getNormalizedType`               | `node_modules/typescript/lib/typescript.js` |
|  4.9% |   8.9ms |       7 | `createNormalizedTupleType`       | `node_modules/typescript/lib/typescript.js` |
|  0.7% |   1.3ms |       1 | `createTypeFromGenericGlobalType` | `node_modules/typescript/lib/typescript.js` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                       | Location                                    |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| 26.7% | 45.8ms |      36 | `hasSkipDirectInferenceFlag` | `node_modules/typescript/lib/typescript.js` |
| 18.5% | 31.8ms |      25 | `getResolvedSymbol`          | `node_modules/typescript/lib/typescript.js` |
| 11.1% | 19.1ms |      15 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js` |
| 10.4% | 17.8ms |      14 | `getResolvedSignature`       | `node_modules/typescript/lib/typescript.js` |
|  8.9% | 15.3ms |      12 | `getTypeFromTypeReference`   | `node_modules/typescript/lib/typescript.js` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                    | Location                                    |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------- |
| 99.2% | 151.2ms |     119 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |
|  0.8% |   1.3ms |       1 | `recursiveTypeRelatedTo`  | `node_modules/typescript/lib/typescript.js` |

##### `getMembersOfSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                                                  | Location                                    |
| ----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------- |
| 80.2% | 108.0ms |      85 | `isEmptyAnonymousObjectType`                            | `node_modules/typescript/lib/typescript.js` |
| 11.3% |  15.3ms |      12 | `getSingleBaseForNonAugmentingSubtype`                  | `node_modules/typescript/lib/typescript.js` |
|  3.8% |   5.1ms |       4 | `resolveObjectTypeMembers`                              | `node_modules/typescript/lib/typescript.js` |
|  0.9% |   1.3ms |       1 | `resolveDeclaredMembers`                                | `node_modules/typescript/lib/typescript.js` |
|  0.9% |   1.3ms |       1 | `getTypeFromTypeLiteralOrFunctionOrConstructorTypeNode` | `node_modules/typescript/lib/typescript.js` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                   | Location                                    |
| ----: | -----: | ------: | ------------------------ | ------------------------------------------- |
| 17.3% | 22.9ms |      18 | `applyToReturnTypes`     | `node_modules/typescript/lib/typescript.js` |
| 14.4% | 19.1ms |      15 | `inferFromMatchingTypes` | `node_modules/typescript/lib/typescript.js` |
| 14.4% | 19.1ms |      15 | `inferFromTypeArguments` | `node_modules/typescript/lib/typescript.js` |
| 12.5% | 16.5ms |      13 | `inferFromTypes`         | `node_modules/typescript/lib/typescript.js` |
| 12.5% | 16.5ms |      13 | `inferFromProperties`    | `node_modules/typescript/lib/typescript.js` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller              | Location                                             |
| ----: | -----: | ------: | ------------------- | ---------------------------------------------------- |
| 40.6% | 52.1ms |      41 | `visitNode2`        | `node_modules/typescript/lib/typescript.js`          |
| 36.6% | 47.0ms |      37 | `forEach`           | `node_modules/typescript/lib/typescript.js`          |
|  9.9% | 12.7ms |      10 | `bindParameterFlow` | `node_modules/typescript/lib/typescript.js`          |
|  5.0% |  6.4ms |       5 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:42711:18` |
|  5.0% |  6.4ms |       5 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:42712:18` |

##### `instantiateType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                    |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| 45.5% | 57.2ms |      45 | `instantiateList`             | `node_modules/typescript/lib/typescript.js` |
| 18.2% | 22.9ms |      18 | `getMappedType`               | `node_modules/typescript/lib/typescript.js` |
| 13.1% | 16.5ms |      13 | `instantiateTypeWorker`       | `node_modules/typescript/lib/typescript.js` |
|  6.1% |  7.6ms |       6 | `getTypeOfInstantiatedSymbol` | `node_modules/typescript/lib/typescript.js` |
|  4.0% |  5.1ms |       4 | `getConditionalType`          | `node_modules/typescript/lib/typescript.js` |

##### `resolveStructuredTypeMembers` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                          | Location                                    |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------- |
| 35.4% | 43.2ms |      34 | `getPropertiesOfObjectType`     | `node_modules/typescript/lib/typescript.js` |
| 26.0% | 31.8ms |      25 | `getPropertyOfType`             | `node_modules/typescript/lib/typescript.js` |
| 17.7% | 21.6ms |      17 | `getSignaturesOfStructuredType` | `node_modules/typescript/lib/typescript.js` |
|  7.3% |  8.9ms |       7 | `isWeakType`                    | `node_modules/typescript/lib/typescript.js` |
|  5.2% |  6.4ms |       5 | `getIndexInfosOfStructuredType` | `node_modules/typescript/lib/typescript.js` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                 | Location                                    |
| ----: | ------: | ------: | ---------------------- | ------------------------------------------- |
| 97.8% | 115.7ms |      91 | `inferFromTypes`       | `node_modules/typescript/lib/typescript.js` |
|  1.1% |   1.3ms |       1 | `inferTypes`           | `node_modules/typescript/lib/typescript.js` |
|  1.1% |   1.3ms |       1 | `inferToMultipleTypes` | `node_modules/typescript/lib/typescript.js` |

##### `isTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                     | Location                                    |
| ----: | -----: | ------: | ------------------------------------------ | ------------------------------------------- |
| 56.0% | 64.8ms |      51 | `isTypeIdenticalTo`                        | `node_modules/typescript/lib/typescript.js` |
| 18.7% | 21.6ms |      17 | `isTypeAssignableTo`                       | `node_modules/typescript/lib/typescript.js` |
| 12.1% | 14.0ms |      11 | `checkTypeRelatedToAndOptionallyElaborate` | `node_modules/typescript/lib/typescript.js` |
|  3.3% |  3.8ms |       3 | `compareTypesAssignable`                   | `node_modules/typescript/lib/typescript.js` |
|  2.2% |  2.5ms |       2 | `chooseOverload`                           | `node_modules/typescript/lib/typescript.js` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                            | Location                                    |
| ----: | -----: | ------: | --------------------------------- | ------------------------------------------- |
| 40.5% | 43.2ms |      34 | `getPropertyOfType`               | `node_modules/typescript/lib/typescript.js` |
| 34.5% | 36.9ms |      29 | `getSignaturesOfType`             | `node_modules/typescript/lib/typescript.js` |
| 14.3% | 15.3ms |      12 | `getIndexInfosOfType`             | `node_modules/typescript/lib/typescript.js` |
|  3.6% |  3.8ms |       3 | `getPropertiesOfType`             | `node_modules/typescript/lib/typescript.js` |
|  3.6% |  3.8ms |       3 | `getIndexedAccessTypeOrUndefined` | `node_modules/typescript/lib/typescript.js` |

##### `getPropertyOfType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                         | Location                                    |
| ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------- |
| 26.8% | 28.0ms |      22 | `createUnionOrIntersectionProperty`            | `node_modules/typescript/lib/typescript.js` |
| 22.0% | 22.9ms |      18 | `getUnmatchedProperties`                       | `node_modules/typescript/lib/typescript.js` |
| 12.2% | 12.7ms |      10 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |
|  9.8% | 10.2ms |       8 | `inferFromProperties`                          | `node_modules/typescript/lib/typescript.js` |
|  7.3% |  7.6ms |       6 | `getPropertyTypeForIndexType`                  | `node_modules/typescript/lib/typescript.js` |

##### `open` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location  |
| -----: | -----: | ------: | ---------- | --------- |
| 100.0% | 53.4ms |      42 | `openSync` | `node:fs` |

##### `stat` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location  |
| -----: | -----: | ------: | ---------- | --------- |
| 100.0% | 53.4ms |      42 | `statSync` | `node:fs` |

##### `read` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location  |
| -----: | -----: | ------: | ---------- | --------- |
| 100.0% | 53.4ms |      42 | `readSync` | `node:fs` |

##### `realpath` (`<unknown>`)

|     % |   Time | Samples | Caller               | Location  |
| ----: | -----: | ------: | -------------------- | --------- |
| 93.8% | 19.1ms |      15 | `(anonymous:L#2853)` | `node:fs` |
|  6.3% |  1.3ms |       1 | `(anonymous:L#2855)` | `node:fs` |

##### `fstat` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location  |
| -----: | ----: | ------: | ------------- | --------- |
| 100.0% | 6.4ms |       5 | `tryStatSync` | `node:fs` |

##### `readFileUtf8` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location  |
| -----: | ----: | ------: | -------------- | --------- |
| 100.0% | 5.1ms |       4 | `readFileSync` | `node:fs` |

##### `close` (`<unknown>`)

|      % |  Time | Samples | Caller      | Location  |
| -----: | ----: | ------: | ----------- | --------- |
| 100.0% | 2.5ms |       2 | `closeSync` | `node:fs` |

##### `readdir` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location  |
| -----: | ----: | ------: | ------------- | --------- |
| 100.0% | 2.5ms |       2 | `readdirSync` | `node:fs` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |   Time | Samples | Function                                   | Location                                              |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 87.2% | 16.63s |  13,092 | `typeCheckProject`                         | `tsc-workload.mjs`                                    |
| 87.2% | 16.63s |  13,091 | `(anonymous)`                              | `datadog-pprof.mjs:3:33`                              |
| 87.2% | 16.63s |  13,086 | `run`                                      | `node:internal/modules/esm/module_job`                |
| 83.3% | 15.88s |  12,499 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 76.3% | 14.55s |  11,454 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 76.3% | 14.55s |  11,453 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 76.3% | 14.55s |  11,450 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 76.3% | 14.55s |  11,448 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 76.2% | 14.54s |  11,446 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 76.2% | 14.54s |  11,446 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121543:43` |
| 76.2% | 14.54s |  11,446 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 76.2% | 14.54s |  11,440 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 76.2% | 14.53s |  11,437 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 71.7% | 13.67s |  10,762 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 71.7% | 13.67s |  10,760 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 71.7% | 13.67s |  10,759 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 71.7% | 13.67s |  10,759 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 71.7% | 13.67s |  10,759 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121619:29` |
| 71.7% | 13.67s |  10,758 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 70.7% | 13.49s |  10,615 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |

#### Categories

##### Third-party

|     % |   Time | Samples | Function                                   | Location                                              |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 83.3% | 15.88s |  12,499 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 76.3% | 14.55s |  11,454 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 76.3% | 14.55s |  11,453 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 76.3% | 14.55s |  11,450 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 76.3% | 14.55s |  11,448 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 76.2% | 14.54s |  11,446 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 76.2% | 14.54s |  11,446 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121543:43` |
| 76.2% | 14.54s |  11,446 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 76.2% | 14.54s |  11,440 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 76.2% | 14.53s |  11,437 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 71.7% | 13.67s |  10,762 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 71.7% | 13.67s |  10,760 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 71.7% | 13.67s |  10,759 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 71.7% | 13.67s |  10,759 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 71.7% | 13.67s |  10,759 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121619:29` |
| 71.7% | 13.67s |  10,758 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 70.7% | 13.49s |  10,615 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| 70.7% | 13.49s |  10,614 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| 53.7% | 10.23s |   8,056 | `checkExpression`                          | `node_modules/typescript/lib/typescript.js`           |
| 53.6% | 10.23s |   8,052 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 11.3% | 2.14s |   1,690 | `(garbage collector)` | `<unknown>` |

##### Native

|     % |   Time | Samples | Function       | Location    |
| ----: | -----: | ------: | -------------- | ----------- |
|  0.3% | 53.4ms |      42 | `open`         | `<unknown>` |
|  0.3% | 53.4ms |      42 | `stat`         | `<unknown>` |
|  0.3% | 53.4ms |      42 | `read`         | `<unknown>` |
|  0.1% | 20.3ms |      16 | `realpath`     | `<unknown>` |
| <0.1% |  6.4ms |       5 | `fstat`        | `<unknown>` |
| <0.1% |  5.1ms |       4 | `readFileUtf8` | `<unknown>` |
| <0.1% |  2.5ms |       2 | `close`        | `<unknown>` |
| <0.1% |  2.5ms |       2 | `readdir`      | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |    Time | Samples | Callee                             | Location                                    |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------- |
| 87.3% |  14.53s |  11,435 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| 11.8% |   1.96s |   1,546 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 109.3ms |      86 | `require`                          | `node:internal/modules/helpers`             |
|  0.2% |  30.5ms |      24 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `getSyntacticDiagnostics`          | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof.mjs:3:33`)

|      % |   Time | Samples | Callee             | Location           |
| -----: | -----: | ------: | ------------------ | ------------------ |
| 100.0% | 16.63s |  13,091 | `typeCheckProject` | `tsc-workload.mjs` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |   Time | Samples | Callee        | Location                 |
| -----: | -----: | ------: | ------------- | ------------------------ |
| 100.0% | 16.63s |  13,086 | `(anonymous)` | `datadog-pprof.mjs:3:33` |

##### `forEach` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee               | Location                                              |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------- |
| 84.8% |  13.46s |  10,594 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js`           |
|  5.6% | 897.3ms |     706 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120665:29` |
|  5.0% | 794.4ms |     625 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:42712:18`  |
|  4.0% | 640.6ms |     504 | `bind`               | `node_modules/typescript/lib/typescript.js`           |
|  2.1% | 330.5ms |     260 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122413:31` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee        | Location                                              |
| ----: | ------: | ------: | ------------- | ----------------------------------------------------- |
| 93.9% |  13.67s |  10,757 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121619:29` |
|  6.0% | 874.4ms |     688 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121611:28` |
|  0.1% |  11.4ms |       9 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121624:46` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                     | Location                                    |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------- |
| 100.0% | 14.55s |  11,453 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                     | Location                                    |
| -----: | -----: | ------: | ------------------------------------------ | ------------------------------------------- |
| 100.0% | 14.55s |  11,450 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                              | Location                                    |
| -----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 14.54s |  11,446 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `getProgramDiagnostics`             | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `filter`                            | `node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                   | Location                                    |
| -----: | -----: | ------: | ------------------------ | ------------------------------------------- |
| 100.0% | 14.54s |  11,446 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121543:43`)

|      % |   Time | Samples | Callee                          | Location                                    |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------- |
| 100.0% | 14.54s |  11,446 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee        | Location                                              |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 14.54s |  11,445 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121543:43` |
|  <0.1% |  1.3ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121543:44` |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee    | Location                                    |
| -----: | -----: | ------: | --------- | ------------------------------------------- |
| 100.0% | 14.54s |  11,440 | `flatMap` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                    |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 14.53s |  11,437 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee                       | Location                                    |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| 54.9% |  7.50s |   5,908 | `checkDeferredNodes`         | `node_modules/typescript/lib/typescript.js` |
| 44.8% |  6.12s |   4,818 | `forEach`                    | `node_modules/typescript/lib/typescript.js` |
|  0.1% | 20.3ms |      16 | `addLazyDiagnostic`          | `node_modules/typescript/lib/typescript.js` |
|  0.1% | 16.5ms |      13 | `checkExternalModuleExports` | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  3.8ms |       3 | `clear`                      | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                  | Location                                    |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 13.67s |  10,760 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                | Location                                    |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------------- |
| 100.0% | 13.67s |  10,756 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  2.5ms |       2 | `getDiagnostics2`                     | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `ensurePendingDiagnosticWorkComplete` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                    |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 13.67s |  10,759 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121619:29`)

|      % |   Time | Samples | Callee            | Location                                    |
| -----: | -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 13.67s |  10,759 | `getDiagnostics2` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee            | Location                                    |
| -----: | -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 13.67s |  10,758 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                      | Location                                    |
| -----: | -----: | ------: | --------------------------- | ------------------------------------------- |
| 100.0% | 13.48s |  10,610 | `checkSourceElementWorker`  | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  2.5ms |       2 | `checkBlock`                | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  2.5ms |       2 | `canHaveJSDoc`              | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  2.5ms |       2 | `checkTryStatement`         | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  2.5ms |       2 | `isReachableFlowNodeWorker` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee                     | Location                                    |
| ----: | -----: | ------: | -------------------------- | ------------------------------------------- |
| 75.5% | 10.18s |   8,016 | `checkBlock`               | `node_modules/typescript/lib/typescript.js` |
| 40.8% |  5.50s |   4,331 | `checkVariableDeclaration` | `node_modules/typescript/lib/typescript.js` |
| 40.8% |  5.49s |   4,327 | `checkVariableStatement`   | `node_modules/typescript/lib/typescript.js` |
| 25.7% |  3.47s |   2,732 | `checkExpressionStatement` | `node_modules/typescript/lib/typescript.js` |
| 20.6% |  2.78s |   2,190 | `checkTypeReferenceNode`   | `node_modules/typescript/lib/typescript.js` |

##### `checkExpression` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Callee                                          | Location                                    |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------- |
| 100.0% |  10.23s |   8,052 | `checkExpressionWorker`                         | `node_modules/typescript/lib/typescript.js` |
|   1.2% | 123.3ms |      97 | `instantiateTypeWithSingleGenericCallSignature` | `node_modules/typescript/lib/typescript.js` |
|   0.3% |  29.2ms |      23 | `checkIfStatement`                              | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |   3.8ms |       3 | `isConstEnumObjectType`                         | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |   1.3ms |       1 | `checkCallExpression`                           | `node_modules/typescript/lib/typescript.js` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                          | Location                                    |
| ----: | ----: | ------: | ------------------------------- | ------------------------------------------- |
| 90.6% | 9.27s |   7,299 | `checkCallExpression`           | `node_modules/typescript/lib/typescript.js` |
| 32.5% | 3.32s |   2,617 | `checkPropertyAccessExpression` | `node_modules/typescript/lib/typescript.js` |
| 28.7% | 2.94s |   2,314 | `checkObjectLiteral`            | `node_modules/typescript/lib/typescript.js` |
| 16.5% | 1.68s |   1,329 | `checkArrayLiteral`             | `node_modules/typescript/lib/typescript.js` |
| 11.6% | 1.18s |     933 | `checkIdentifier`               | `node_modules/typescript/lib/typescript.js` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs:3:33`) ← `run` (`node:internal/modules/esm/module_job`)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0.4% | 72.4ms |      57 | `wrapSafe` (`node:internal/modules/cjs/loader`) ← `(anonymous)` (1755:18) ← `(anonymous)` (1913:37) ← `(anonymous)` (1505:37) ← `(anonymous)` (1309:33) ← `wrapModuleLoad` ← `(anonymous)` (1527:24) ← `require` (`node:internal/modules/helpers`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.4% | 71.2ms |      56 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                         |
| 0.3% | 54.7ms |      43 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% | 41.9ms |      33 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.2% | 38.1ms |      30 | `getNodeLinks` (`node_modules/typescript/lib/typescript.js`) ← `hasSkipDirectInferenceFlag` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveNewExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkAwaitExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% | 36.9ms |      29 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                              |
| 0.2% | 35.6ms |      28 | `getUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% | 30.5ms |      24 | `createUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`) ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.1% | 28.0ms |      22 | `doJSDocScan` (`node_modules/typescript/lib/typescript.js`) ← `scanRange` ← `parseJSDocCommentWorker` ← `(anonymous)` (35026:43) ← `doInsideOfContext` ← `parseJSDocComment` ← `(anonymous)` (29528:37) ← `mapDefined` ← `withJSDoc` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119847:28) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:28) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120715:29) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.1% | 25.4ms |      20 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.1% | 24.1ms |      19 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isPropertySymbolTypeRelated` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `checkTypeAssignableTo` ← `checkTypeArgumentConstraints` ← `(anonymous)` (79471:42) ← `addLazyDiagnostic` ← `checkTypeReferenceOrImport` ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkTypeAliasDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.1% | 24.1ms |      19 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.1% | 22.9ms |      18 | `some` (`node_modules/typescript/lib/typescript.js`) ← `getNormalizedUnionOrIntersectionType` ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` |
| 0.1% | 21.6ms |      17 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                         |
| 0.1% | 21.6ms |      17 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.1% | 20.3ms |      16 | `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.1% | 19.1ms |      15 | `getMembersOfSymbol` (`node_modules/typescript/lib/typescript.js`) ← `isEmptyAnonymousObjectType` ← `some` ← `getNormalizedUnionOrIntersectionType` ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.1% | 19.1ms |      15 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.1% | 19.1ms |      15 | `scan` (`node_modules/typescript/lib/typescript.js`) ← `nextTokenWithoutCheck` ← `nextToken` ← `tryParseSemicolon` ← `parseSemicolon` ← `parseTypeMemberSemicolon` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119847:28) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:28) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120715:29) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.1% | 17.8ms |      14 | `getPropertiesOfUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`) ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121619:29) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121543:43) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

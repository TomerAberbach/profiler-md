# CPU profile

Took 2.52s over 2,680 samples (943.9µs per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 88.3% |   2.23s |   2,443 |
| Garbage collector  |  7.1% | 179.5ms |     148 |
| Standard library   |  3.9% |  98.8ms |      72 |
| Native             |  0.6% |  15.0ms |      15 |
| Ours               | <0.1% |   1.3ms |       1 |
| Regular expression | <0.1% |   1.3ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                        | Location                                             |
| ---: | ------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 7.1% | 179.5ms |     148 | `(garbage collector)`           | `<unknown>`                                          |
| 2.8% |  71.5ms |      72 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js:63813:27` |
| 2.7% |  69.2ms |      55 | `wrapSafe`                      | `node:internal/modules/cjs/loader:1671:18`           |
| 2.7% |  68.8ms |      64 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:64383:38` |
| 1.7% |  43.5ms |      45 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js:62354:35` |
| 1.5% |  37.2ms |      34 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:63505:32` |
| 1.3% |  34.0ms |      38 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js:62119:40` |
| 1.3% |  33.9ms |      32 | `scan`                          | `node_modules/typescript/lib/typescript.js:10327:18` |
| 1.1% |  28.2ms |      26 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:56402:43` |
| 1.0% |  24.7ms |      33 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:64597:45` |
| 1.0% |  24.6ms |      39 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js:67214:30` |
| 0.9% |  23.0ms |      25 | `bindWorker`                    | `node_modules/typescript/lib/typescript.js:44063:24` |
| 0.8% |  20.2ms |      21 | `getNormalizedType`             | `node_modules/typescript/lib/typescript.js:63479:31` |
| 0.8% |  19.2ms |      24 | `bind`                          | `node_modules/typescript/lib/typescript.js:44000:18` |
| 0.7% |  18.6ms |      20 | `getPropertyOfType`             | `node_modules/typescript/lib/typescript.js:58110:31` |
| 0.7% |  18.4ms |      18 | `nextTokenWithoutCheck`         | `node_modules/typescript/lib/typescript.js:29785:39` |
| 0.7% |  16.8ms |      14 | `createTypeReference`           | `node_modules/typescript/lib/typescript.js:58882:33` |
| 0.6% |  15.5ms |      13 | `invokeOnce`                    | `node_modules/typescript/lib/typescript.js:67401:26` |
| 0.6% |  15.4ms |      15 | `compareSignaturesRelated`      | `node_modules/typescript/lib/typescript.js:63135:38` |
| 0.6% |  15.4ms |      12 | `inferFromMatchingTypes`        | `node_modules/typescript/lib/typescript.js:67429:38` |

#### Categories

##### Third-party

|    % |   Time | Samples | Function                         | Location                                             |
| ---: | -----: | ------: | -------------------------------- | ---------------------------------------------------- |
| 2.8% | 71.5ms |      72 | `isRelatedTo`                    | `node_modules/typescript/lib/typescript.js:63813:27` |
| 2.7% | 68.8ms |      64 | `recursiveTypeRelatedTo`         | `node_modules/typescript/lib/typescript.js:64383:38` |
| 1.7% | 43.5ms |      45 | `instantiateTypeWorker`          | `node_modules/typescript/lib/typescript.js:62354:35` |
| 1.5% | 37.2ms |      34 | `checkTypeRelatedTo`             | `node_modules/typescript/lib/typescript.js:63505:32` |
| 1.3% | 34.0ms |      38 | `getObjectTypeInstantiation`     | `node_modules/typescript/lib/typescript.js:62119:40` |
| 1.3% | 33.9ms |      32 | `scan`                           | `node_modules/typescript/lib/typescript.js:10327:18` |
| 1.1% | 28.2ms |      26 | `createInstantiatedSymbolTable`  | `node_modules/typescript/lib/typescript.js:56402:43` |
| 1.0% | 24.7ms |      33 | `structuredTypeRelatedToWorker`  | `node_modules/typescript/lib/typescript.js:64597:45` |
| 1.0% | 24.6ms |      39 | `inferFromTypes`                 | `node_modules/typescript/lib/typescript.js:67214:30` |
| 0.9% | 23.0ms |      25 | `bindWorker`                     | `node_modules/typescript/lib/typescript.js:44063:24` |
| 0.8% | 20.2ms |      21 | `getNormalizedType`              | `node_modules/typescript/lib/typescript.js:63479:31` |
| 0.8% | 19.2ms |      24 | `bind`                           | `node_modules/typescript/lib/typescript.js:44000:18` |
| 0.7% | 18.6ms |      20 | `getPropertyOfType`              | `node_modules/typescript/lib/typescript.js:58110:31` |
| 0.7% | 18.4ms |      18 | `nextTokenWithoutCheck`          | `node_modules/typescript/lib/typescript.js:29785:39` |
| 0.7% | 16.8ms |      14 | `createTypeReference`            | `node_modules/typescript/lib/typescript.js:58882:33` |
| 0.6% | 15.5ms |      13 | `invokeOnce`                     | `node_modules/typescript/lib/typescript.js:67401:26` |
| 0.6% | 15.4ms |      15 | `compareSignaturesRelated`       | `node_modules/typescript/lib/typescript.js:63135:38` |
| 0.6% | 15.4ms |      12 | `inferFromMatchingTypes`         | `node_modules/typescript/lib/typescript.js:67429:38` |
| 0.6% | 15.1ms |      12 | `getUnionOrIntersectionProperty` | `node_modules/typescript/lib/typescript.js:58008:44` |
| 0.6% | 15.1ms |      14 | `resolveStructuredTypeMembers`   | `node_modules/typescript/lib/typescript.js:57461:42` |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 7.1% | 179.5ms |     148 | `(garbage collector)` | `<unknown>` |

##### Standard library

|     % |   Time | Samples | Function              | Location                                           |
| ----: | -----: | ------: | --------------------- | -------------------------------------------------- |
|  2.7% | 69.2ms |      55 | `wrapSafe`            | `node:internal/modules/cjs/loader:1671:18`         |
|  0.4% |  9.3ms |       1 | `post`                | `node:inspector:118:7`                             |
|  0.2% |  3.9ms |       3 | `getStatsFromBinding` | `node:internal/fs/utils:552:29`                    |
|  0.1% |  3.8ms |       3 | `slice`               | `node:buffer:640:12`                               |
|  0.1% |  2.5ms |       2 | `closeSync`           | `node:fs:516:19`                                   |
|  0.1% |  1.3ms |       1 | `(anonymous)`         | `node:internal/fs/utils:708:38`                    |
|  0.1% |  1.3ms |       1 | `(anonymous)`         | `node:internal/perf/performance:1:1`               |
|  0.1% |  1.3ms |       1 | `createUnsafeBuffer`  | `node:internal/buffer:1082:28`                     |
| <0.1% |  1.3ms |       1 | `readFileSync`        | `node:fs:433:22`                                   |
| <0.1% |  1.3ms |       1 | `maybeCacheSourceMap` | `node:internal/source_map/source_map_cache:157:29` |
| <0.1% |  1.3ms |       1 | `(anonymous)`         | `node:internal/crypto/keys:1:1`                    |
| <0.1% |  1.3ms |       1 | `wrappedFn`           | `node:internal/errors:535:21`                      |
| <0.1% |  1.3ms |       1 | `allocate`            | `node:buffer:436:18`                               |

#### Lines

Lines ranked by contribution to each function's self time.

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js:63813:27`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 32.9% | 23.5ms |      20 | `node_modules/typescript/lib/typescript.js:63830` |
| 17.4% | 12.5ms |      10 | `node_modules/typescript/lib/typescript.js:63825` |
|  8.5% |  6.1ms |       5 | `node_modules/typescript/lib/typescript.js:63813` |
|  8.2% |  5.9ms |       5 | `node_modules/typescript/lib/typescript.js:63910` |
|  7.7% |  5.5ms |       5 | `node_modules/typescript/lib/typescript.js:63843` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |   Time | Samples | Location                                |
| -----: | -----: | ------: | --------------------------------------- |
| 100.0% | 69.2ms |      55 | `node:internal/modules/cjs/loader:1713` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:64383:38`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 37.3% | 25.6ms |      21 | `node_modules/typescript/lib/typescript.js:64396` |
| 12.6% |  8.7ms |       7 | `node_modules/typescript/lib/typescript.js:64455` |
|  7.3% |  5.0ms |       4 | `node_modules/typescript/lib/typescript.js:64449` |
|  5.6% |  3.8ms |       3 | `node_modules/typescript/lib/typescript.js:64443` |
|  5.5% |  3.8ms |       3 | `node_modules/typescript/lib/typescript.js:64422` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js:62354:35`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 33.4% | 14.5ms |      13 | `node_modules/typescript/lib/typescript.js:62370` |
| 14.9% |  6.5ms |       6 | `node_modules/typescript/lib/typescript.js:62383` |
| 11.7% |  5.1ms |       4 | `node_modules/typescript/lib/typescript.js:62365` |
| 11.5% |  5.0ms |       4 | `node_modules/typescript/lib/typescript.js:62354` |
|  3.0% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:62015` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 48.0% | 17.9ms |      15 | `node_modules/typescript/lib/typescript.js:63505` |
| 21.9% |  8.2ms |       7 | `node_modules/typescript/lib/typescript.js:63588` |
| 19.5% |  7.3ms |       6 | `node_modules/typescript/lib/typescript.js:63524` |
|  6.9% |  2.6ms |       2 | `node_modules/typescript/lib/typescript.js:63522` |
|  0.4% |  0.2ms |       1 | `node_modules/typescript/lib/typescript.js:63511` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js:62119:40`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 22.2% | 7.5ms |       6 | `node_modules/typescript/lib/typescript.js:62149` |
| 18.8% | 6.4ms |       5 | `node_modules/typescript/lib/typescript.js:62153` |
|  6.5% | 2.2ms |       2 | `node_modules/typescript/lib/typescript.js:471`   |
|  6.4% | 2.2ms |       2 | `node_modules/typescript/lib/typescript.js:62139` |
|  3.8% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:62045` |

##### `scan` (`node_modules/typescript/lib/typescript.js:10327:18`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 14.9% | 5.0ms |       4 | `node_modules/typescript/lib/typescript.js:10514` |
|  8.7% | 3.0ms |       3 | `node_modules/typescript/lib/typescript.js:10521` |
|  5.2% | 1.8ms |       2 | `node_modules/typescript/lib/typescript.js:10475` |
|  3.8% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:10513` |
|  3.8% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:10352` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js:56402:43`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 93.9% | 26.5ms |      24 | `node_modules/typescript/lib/typescript.js:56405` |
|  4.4% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:56402` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js:64597:45`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 20.6% | 5.1ms |       4 | `node_modules/typescript/lib/typescript.js:65073` |
| 15.3% | 3.8ms |       3 | `node_modules/typescript/lib/typescript.js:64597` |
| 14.3% | 3.5ms |       3 | `node_modules/typescript/lib/typescript.js:65084` |
| 10.1% | 2.5ms |       2 | `node_modules/typescript/lib/typescript.js:64720` |
|  9.2% | 2.3ms |       2 | `node_modules/typescript/lib/typescript.js:65086` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js:67214:30`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 10.3% | 2.5ms |       2 | `node_modules/typescript/lib/typescript.js:67237` |
|  6.6% | 1.6ms |       1 | `node_modules/typescript/lib/typescript.js:67358` |
|  5.2% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:67338` |
|  5.2% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:67242` |
|  5.2% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:67214` |

##### `bindWorker` (`node_modules/typescript/lib/typescript.js:44063:24`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 35.0% | 8.0ms |       7 | `node_modules/typescript/lib/typescript.js:44064` |
| 10.7% | 2.5ms |       1 | `node_modules/typescript/lib/typescript.js:44255` |
|  5.6% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:44173` |
|  5.4% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:44165` |
|  5.4% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:44163` |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js:63479:31`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 28.9% | 5.8ms |       5 | `node_modules/typescript/lib/typescript.js:63299` |
| 18.6% | 3.8ms |       3 | `node_modules/typescript/lib/typescript.js:63479` |
| 18.6% | 3.8ms |       3 | `node_modules/typescript/lib/typescript.js:61743` |
| 12.0% | 2.4ms |       2 | `node_modules/typescript/lib/typescript.js:63494` |
|  6.3% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:58053` |

##### `bind` (`node_modules/typescript/lib/typescript.js:44000:18`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 56.0% | 10.8ms |       9 | `node_modules/typescript/lib/typescript.js:44008` |
| 12.4% |  2.4ms |       2 | `node_modules/typescript/lib/typescript.js:44014` |
|  6.7% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:44956` |
|  6.5% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:18628` |
|  6.5% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:44016` |

##### `getPropertyOfType` (`node_modules/typescript/lib/typescript.js:58110:31`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 37.0% | 6.9ms |       6 | `node_modules/typescript/lib/typescript.js:58112` |
| 17.9% | 3.3ms |       4 | `node_modules/typescript/lib/typescript.js:58115` |
|  7.0% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:58110` |
|  7.0% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:57864` |
|  7.0% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:58114` |

##### `nextTokenWithoutCheck` (`node_modules/typescript/lib/typescript.js:29785:39`)

|      % |   Time | Samples | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 18.4ms |      18 | `node_modules/typescript/lib/typescript.js:29786` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js:58882:33`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 77.9% | 13.0ms |      11 | `node_modules/typescript/lib/typescript.js:58884` |
|  7.5% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:58849` |
|  7.5% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:58887` |
|  7.2% |  1.2ms |       1 | `node_modules/typescript/lib/typescript.js:58882` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js:67401:26`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 40.5% | 6.3ms |       5 | `node_modules/typescript/lib/typescript.js:67403` |
| 23.1% | 3.6ms |       3 | `node_modules/typescript/lib/typescript.js:67416` |
| 21.2% | 3.3ms |       3 | `node_modules/typescript/lib/typescript.js:67414` |
| 15.3% | 2.4ms |       2 | `node_modules/typescript/lib/typescript.js:67419` |

##### `compareSignaturesRelated` (`node_modules/typescript/lib/typescript.js:63135:38`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 24.4% | 3.8ms |       3 | `node_modules/typescript/lib/typescript.js:63197` |
|  8.4% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:63229` |
|  8.4% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:63146` |
|  8.1% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:63200` |
|  8.1% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:63252` |

##### `inferFromMatchingTypes` (`node_modules/typescript/lib/typescript.js:67429:38`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 58.1% | 8.9ms |       7 | `node_modules/typescript/lib/typescript.js:67434` |
| 41.9% | 6.4ms |       5 | `node_modules/typescript/lib/typescript.js:67435` |

##### `getUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js:58008:44`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 83.5% | 12.6ms |      10 | `node_modules/typescript/lib/typescript.js:58012` |
|  8.3% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:58010` |
|  8.3% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:58018` |

##### `resolveStructuredTypeMembers` (`node_modules/typescript/lib/typescript.js:57461:42`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 51.7% | 7.8ms |       7 | `node_modules/typescript/lib/typescript.js:57461` |
| 33.1% | 5.0ms |       4 | `node_modules/typescript/lib/typescript.js:57471` |
|  8.6% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:57475` |
|  3.9% | 0.6ms |       1 | `node_modules/typescript/lib/typescript.js:57465` |

##### `getStatsFromBinding` (`node:internal/fs/utils:552:29`)

|      % |  Time | Samples | Location                     |
| -----: | ----: | ------: | ---------------------------- |
| 100.0% | 3.9ms |       3 | `node:internal/fs/utils:553` |

##### `slice` (`node:buffer:640:12`)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 3.8ms |       3 | `node:buffer:640` |

##### `closeSync` (`node:fs:516:19`)

|      % |  Time | Samples | Location      |
| -----: | ----: | ------: | ------------- |
| 100.0% | 2.5ms |       2 | `node:fs:517` |

##### `(anonymous)` (`node:internal/fs/utils:708:38`)

|      % |  Time | Samples | Location                     |
| -----: | ----: | ------: | ---------------------------- |
| 100.0% | 1.3ms |       1 | `node:internal/fs/utils:709` |

##### `(anonymous)` (`node:internal/perf/performance:1:1`)

|      % |  Time | Samples | Location                             |
| -----: | ----: | ------: | ------------------------------------ |
| 100.0% | 1.3ms |       1 | `node:internal/perf/performance:173` |

##### `createUnsafeBuffer` (`node:internal/buffer:1082:28`)

|      % |  Time | Samples | Location                    |
| -----: | ----: | ------: | --------------------------- |
| 100.0% | 1.3ms |       1 | `node:internal/buffer:1089` |

##### `readFileSync` (`node:fs:433:22`)

|      % |  Time | Samples | Location      |
| -----: | ----: | ------: | ------------- |
| 100.0% | 1.3ms |       1 | `node:fs:440` |

##### `maybeCacheSourceMap` (`node:internal/source_map/source_map_cache:157:29`)

|      % |  Time | Samples | Location                                        |
| -----: | ----: | ------: | ----------------------------------------------- |
| 100.0% | 1.3ms |       1 | `node:internal/source_map/source_map_cache:159` |

##### `(anonymous)` (`node:internal/crypto/keys:1:1`)

|      % |  Time | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 1.3ms |       1 | `node:internal/crypto/keys:103` |

##### `wrappedFn` (`node:internal/errors:535:21`)

|      % |  Time | Samples | Location                   |
| -----: | ----: | ------: | -------------------------- |
| 100.0% | 1.3ms |       1 | `node:internal/errors:535` |

##### `allocate` (`node:buffer:436:18`)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 1.3ms |       1 | `node:buffer:448` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js:63813:27`)

|     % |   Time | Samples | Caller                        | Location                                             |
| ----: | -----: | ------: | ----------------------------- | ---------------------------------------------------- |
| 67.5% | 48.3ms |      45 | `checkTypeRelatedTo`          | `node_modules/typescript/lib/typescript.js:63505:32` |
|  7.9% |  5.6ms |       7 | `isRelatedToWorker2`          | `node_modules/typescript/lib/typescript.js:65698:36` |
|  5.9% |  4.2ms |       4 | `typeRelatedToSomeType`       | `node_modules/typescript/lib/typescript.js:64147:37` |
|  5.7% |  4.0ms |       6 | `isPropertySymbolTypeRelated` | `node_modules/typescript/lib/typescript.js:65271:43` |
|  5.2% |  3.7ms |       4 | `eachTypeRelatedToType`       | `node_modules/typescript/lib/typescript.js:64255:37` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |   Time | Samples | Caller        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 69.2ms |      55 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:64383:38`)

|      % |   Time | Samples | Caller        | Location                                             |
| -----: | -----: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 68.8ms |      64 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js:63813:27` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js:62354:35`)

|      % |   Time | Samples | Caller                     | Location                                             |
| -----: | -----: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 43.5ms |      45 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js:62337:38` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`)

|     % |   Time | Samples | Caller                                     | Location                                             |
| ----: | -----: | ------: | ------------------------------------------ | ---------------------------------------------------- |
| 96.3% | 35.9ms |      30 | `isTypeRelatedTo`                          | `node_modules/typescript/lib/typescript.js:63432:29` |
|  2.5% |  0.9ms |       2 | `checkTypeRelatedToAndOptionallyElaborate` | `node_modules/typescript/lib/typescript.js:62580:54` |
|  1.2% |  0.5ms |       2 | `checkTypeAssignableTo`                    | `node_modules/typescript/lib/typescript.js:62564:35` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js:62119:40`)

|      % |   Time | Samples | Caller                  | Location                                             |
| -----: | -----: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 34.0ms |      38 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js:62354:35` |

##### `scan` (`node_modules/typescript/lib/typescript.js:10327:18`)

|      % |   Time | Samples | Caller                  | Location                                             |
| -----: | -----: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 33.9ms |      32 | `nextTokenWithoutCheck` | `node_modules/typescript/lib/typescript.js:29785:39` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js:56402:43`)

|     % |   Time | Samples | Caller                        | Location                                             |
| ----: | -----: | ------: | ----------------------------- | ---------------------------------------------------- |
| 91.1% | 25.7ms |      24 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js:56592:38` |
|  4.4% |  1.3ms |       1 | `resolveTypeReferenceMembers` | `node_modules/typescript/lib/typescript.js:56646:41` |
|  4.4% |  1.3ms |       1 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js:57105:41` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js:64597:45`)

|     % |   Time | Samples | Caller                    | Location                                             |
| ----: | -----: | ------: | ------------------------- | ---------------------------------------------------- |
| 94.9% | 23.5ms |      32 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:64527:39` |
|  5.1% |  1.3ms |       1 | `recursiveTypeRelatedTo`  | `node_modules/typescript/lib/typescript.js:64383:38` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js:67214:30`)

|     % |  Time | Samples | Caller                        | Location                                             |
| ----: | ----: | ------: | ----------------------------- | ---------------------------------------------------- |
| 26.9% | 6.6ms |      11 | `inferTypes`                  | `node_modules/typescript/lib/typescript.js:67205:24` |
| 18.3% | 4.5ms |       5 | `inferFromTypeArguments`      | `node_modules/typescript/lib/typescript.js:67446:38` |
| 15.4% | 3.8ms |       3 | `inferFromMatchingTypes`      | `node_modules/typescript/lib/typescript.js:67429:38` |
| 10.5% | 2.6ms |       3 | `inferFromContravariantTypes` | `node_modules/typescript/lib/typescript.js:67456:43` |
|  8.0% | 2.0ms |       4 | `inferToMultipleTypes`        | `node_modules/typescript/lib/typescript.js:67489:36` |

##### `bindWorker` (`node_modules/typescript/lib/typescript.js:44063:24`)

|      % |   Time | Samples | Caller | Location                                             |
| -----: | -----: | ------: | ------ | ---------------------------------------------------- |
| 100.0% | 23.0ms |      25 | `bind` | `node_modules/typescript/lib/typescript.js:44000:18` |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js:63479:31`)

|      % |   Time | Samples | Caller        | Location                                             |
| -----: | -----: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 20.2ms |      21 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js:63813:27` |

##### `bind` (`node_modules/typescript/lib/typescript.js:44000:18`)

|     % |  Time | Samples | Caller              | Location                                             |
| ----: | ----: | ------: | ------------------- | ---------------------------------------------------- |
| 38.6% | 7.4ms |       8 | `visitNode2`        | `node_modules/typescript/lib/typescript.js:28312:22` |
| 26.7% | 5.1ms |       4 | `bindParameterFlow` | `node_modules/typescript/lib/typescript.js:43505:31` |
| 21.7% | 4.2ms |       6 | `forEach`           | `node_modules/typescript/lib/typescript.js:52:19`    |
|  9.1% | 1.8ms |       3 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:42712:23` |
|  3.9% | 0.8ms |       2 | `bindSourceFile2`   | `node_modules/typescript/lib/typescript.js:42348:29` |

##### `getPropertyOfType` (`node_modules/typescript/lib/typescript.js:58110:31`)

|     % |  Time | Samples | Caller                                         | Location                                             |
| ----: | ----: | ------: | ---------------------------------------------- | ---------------------------------------------------- |
| 41.0% | 7.6ms |       7 | `createUnionOrIntersectionProperty`            | `node_modules/typescript/lib/typescript.js:57869:47` |
| 16.8% | 3.1ms |       3 | `getTypeOfPropertyOfType`                      | `node_modules/typescript/lib/typescript.js:54646:37` |
| 13.9% | 2.6ms |       2 | `propertiesRelatedTo`                          | `node_modules/typescript/lib/typescript.js:65393:35` |
| 13.7% | 2.5ms |       2 | `getPropertyTypeForIndexType`                  | `node_modules/typescript/lib/typescript.js:60893:41` |
|  6.9% | 1.3ms |       4 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js:73206:58` |

##### `nextTokenWithoutCheck` (`node_modules/typescript/lib/typescript.js:29785:39`)

|     % |   Time | Samples | Caller             | Location                                             |
| ----: | -----: | ------: | ------------------ | ---------------------------------------------------- |
| 89.8% | 16.5ms |      16 | `nextToken`        | `node_modules/typescript/lib/typescript.js:29792:27` |
| 10.2% |  1.9ms |       2 | `createIdentifier` | `node_modules/typescript/lib/typescript.js:30115:34` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js:58882:33`)

|     % |   Time | Samples | Caller                          | Location                                             |
| ----: | -----: | ------: | ------------------------------- | ---------------------------------------------------- |
| 70.4% | 11.8ms |      10 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js:59887:43` |
| 14.7% |  2.5ms |       2 | `getTypeWithThisArgument`       | `node_modules/typescript/lib/typescript.js:56581:37` |
|  7.5% |  1.3ms |       1 | `getNormalizedType`             | `node_modules/typescript/lib/typescript.js:63479:31` |
|  7.5% |  1.3ms |       1 | `createNormalizedTupleType`     | `node_modules/typescript/lib/typescript.js:59890:39` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js:67401:26`)

|      % |   Time | Samples | Caller           | Location                                             |
| -----: | -----: | ------: | ---------------- | ---------------------------------------------------- |
| 100.0% | 15.5ms |      13 | `inferFromTypes` | `node_modules/typescript/lib/typescript.js:67214:30` |

##### `compareSignaturesRelated` (`node_modules/typescript/lib/typescript.js:63135:38`)

|      % |   Time | Samples | Caller               | Location                                             |
| -----: | -----: | ------: | -------------------- | ---------------------------------------------------- |
| 100.0% | 15.4ms |      15 | `signatureRelatedTo` | `node_modules/typescript/lib/typescript.js:65695:34` |

##### `inferFromMatchingTypes` (`node_modules/typescript/lib/typescript.js:67429:38`)

|      % |   Time | Samples | Caller           | Location                                             |
| -----: | -----: | ------: | ---------------- | ---------------------------------------------------- |
| 100.0% | 15.4ms |      12 | `inferFromTypes` | `node_modules/typescript/lib/typescript.js:67214:30` |

##### `getUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js:58008:44`)

|     % |   Time | Samples | Caller                                 | Location                                             |
| ----: | -----: | ------: | -------------------------------------- | ---------------------------------------------------- |
| 83.5% | 12.6ms |      10 | `getPropertyOfUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js:58045:50` |
| 16.5% |  2.5ms |       2 | `isDiscriminantProperty`               | `node_modules/typescript/lib/typescript.js:68090:36` |

##### `resolveStructuredTypeMembers` (`node_modules/typescript/lib/typescript.js:57461:42`)

|     % |  Time | Samples | Caller                          | Location                                             |
| ----: | ----: | ------: | ------------------------------- | ---------------------------------------------------- |
| 45.0% | 6.8ms |       6 | `getPropertyOfType`             | `node_modules/typescript/lib/typescript.js:58110:31` |
| 28.2% | 4.3ms |       4 | `getIndexInfosOfStructuredType` | `node_modules/typescript/lib/typescript.js:58219:43` |
| 18.2% | 2.8ms |       3 | `getSignaturesOfStructuredType` | `node_modules/typescript/lib/typescript.js:58153:43` |
|  8.6% | 1.3ms |       1 | `isEmptyObjectType`             | `node_modules/typescript/lib/typescript.js:63295:31` |

##### `post` (`node:inspector:118:7`)

|      % |  Time | Samples | Caller        | Location                   |
| -----: | ----: | ------: | ------------- | -------------------------- |
| 100.0% | 9.3ms |       1 | `(anonymous)` | `cpuprofile-run.mjs:15:15` |

##### `getStatsFromBinding` (`node:internal/fs/utils:552:29`)

|      % |  Time | Samples | Caller     | Location          |
| -----: | ----: | ------: | ---------- | ----------------- |
| 100.0% | 3.9ms |       3 | `statSync` | `node:fs:1745:18` |

##### `slice` (`node:buffer:640:12`)

|      % |  Time | Samples | Caller     | Location             |
| -----: | ----: | ------: | ---------- | -------------------- |
| 100.0% | 3.8ms |       3 | `toString` | `node:buffer:839:46` |

##### `closeSync` (`node:fs:516:19`)

|      % |  Time | Samples | Caller         | Location         |
| -----: | ----: | ------: | -------------- | ---------------- |
| 100.0% | 2.5ms |       2 | `readFileSync` | `node:fs:433:22` |

##### `(anonymous)` (`node:internal/fs/utils:708:38`)

|      % |  Time | Samples | Caller        | Location                        |
| -----: | ----: | ------: | ------------- | ------------------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | `node:internal/fs/utils:730:42` |

##### `(anonymous)` (`node:internal/perf/performance:1:1`)

|      % |  Time | Samples | Caller                     | Location                               |
| -----: | ----: | ------: | -------------------------- | -------------------------------------- |
| 100.0% | 1.3ms |       1 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27` |

##### `createUnsafeBuffer` (`node:internal/buffer:1082:28`)

|      % |  Time | Samples | Caller       | Location             |
| -----: | ----: | ------: | ------------ | -------------------- |
| 100.0% | 1.3ms |       1 | `createPool` | `node:buffer:155:20` |

##### `readFileSync` (`node:fs:433:22`)

|      % |  Time | Samples | Caller            | Location                                   |
| -----: | ----: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 1.3ms |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `maybeCacheSourceMap` (`node:internal/source_map/source_map_cache:157:29`)

|      % |  Time | Samples | Caller     | Location                                   |
| -----: | ----: | ------: | ---------- | ------------------------------------------ |
| 100.0% | 1.3ms |       1 | `wrapSafe` | `node:internal/modules/cjs/loader:1671:18` |

##### `(anonymous)` (`node:internal/crypto/keys:1:1`)

|      % |  Time | Samples | Caller                     | Location                               |
| -----: | ----: | ------: | -------------------------- | -------------------------------------- |
| 100.0% | 1.3ms |       1 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27` |

##### `wrappedFn` (`node:internal/errors:535:21`)

|      % |  Time | Samples | Caller         | Location         |
| -----: | ----: | ------: | -------------- | ---------------- |
| 100.0% | 1.3ms |       1 | `readFileSync` | `node:fs:433:22` |

##### `allocate` (`node:buffer:436:18`)

|      % |  Time | Samples | Caller        | Location             |
| -----: | ----: | ------: | ------------- | -------------------- |
| 100.0% | 1.3ms |       1 | `allocUnsafe` | `node:buffer:411:42` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |  Time | Samples | Function                                   | Location                                              |
| ----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 91.6% | 2.31s |   2,490 | `(anonymous)`                              | `cpuprofile-run.mjs`                                  |
| 91.2% | 2.30s |   2,489 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                               |
| 82.8% | 2.09s |   2,283 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:52:19`     |
| 71.8% | 1.81s |   2,031 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 71.8% | 1.81s |   2,031 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:121587:38` |
| 71.8% | 1.81s |   2,031 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |
| 71.8% | 1.81s |   2,031 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:121597:43` |
| 71.8% | 1.81s |   2,031 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 71.8% | 1.81s |   2,031 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:299:19`    |
| 71.8% | 1.81s |   2,031 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:121535:34` |
| 71.8% | 1.81s |   2,031 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121549:36` |
| 71.8% | 1.81s |   2,030 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121892:36` |
| 71.8% | 1.81s |   2,030 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:121603:47` |
| 64.5% | 1.63s |   1,760 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:84520:35`  |
| 64.5% | 1.63s |   1,760 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:84489:29`  |
| 64.5% | 1.63s |   1,760 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:84589:49`  |
| 64.5% | 1.63s |   1,760 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:84596:34`  |
| 64.5% | 1.63s |   1,760 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:84575:29`  |
| 63.8% | 1.61s |   1,740 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:84147:38`  |
| 63.8% | 1.61s |   1,739 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:84138:32`  |

#### Categories

##### Third-party

|     % |  Time | Samples | Function                                   | Location                                              |
| ----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 82.8% | 2.09s |   2,283 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:52:19`     |
| 71.8% | 1.81s |   2,031 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 71.8% | 1.81s |   2,031 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:121587:38` |
| 71.8% | 1.81s |   2,031 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |
| 71.8% | 1.81s |   2,031 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:121597:43` |
| 71.8% | 1.81s |   2,031 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 71.8% | 1.81s |   2,031 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:299:19`    |
| 71.8% | 1.81s |   2,031 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:121535:34` |
| 71.8% | 1.81s |   2,031 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121549:36` |
| 71.8% | 1.81s |   2,030 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121892:36` |
| 71.8% | 1.81s |   2,030 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:121603:47` |
| 64.5% | 1.63s |   1,760 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:84520:35`  |
| 64.5% | 1.63s |   1,760 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:84489:29`  |
| 64.5% | 1.63s |   1,760 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:84589:49`  |
| 64.5% | 1.63s |   1,760 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:84596:34`  |
| 64.5% | 1.63s |   1,760 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:84575:29`  |
| 63.8% | 1.61s |   1,740 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:84147:38`  |
| 63.8% | 1.61s |   1,739 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:84138:32`  |
| 47.6% | 1.20s |   1,293 | `checkBlock`                               | `node_modules/typescript/lib/typescript.js:80896:24`  |
| 47.2% | 1.19s |   1,261 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js:78748:35`  |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 7.1% | 179.5ms |     148 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % |    Time | Samples | Function                   | Location                                   |
| ---: | ------: | ------: | -------------------------- | ------------------------------------------ |
| 4.1% | 103.3ms |      82 | `(anonymous)`              | `node:internal/modules/cjs/loader:1878:37` |
| 4.1% | 103.3ms |      82 | `(anonymous)`              | `node:internal/modules/cjs/loader:1490:33` |
| 4.1% | 103.3ms |      82 | `(anonymous)`              | `node:internal/modules/cjs/loader:1193:24` |
| 4.1% | 103.3ms |      82 | `wrapModuleLoad`           | `node:internal/modules/cjs/loader:237:24`  |
| 4.1% | 103.3ms |      82 | `(anonymous)`              | `node:internal/modules/cjs/loader:1519:36` |
| 4.1% | 103.3ms |      82 | `require`                  | `node:internal/modules/helpers:146:19`     |
| 3.9% |  98.2ms |      78 | `(anonymous)`              | `node:internal/modules/cjs/loader:1731:37` |
| 2.8% |  70.5ms |      56 | `wrapSafe`                 | `node:internal/modules/cjs/loader:1671:18` |
| 0.9% |  22.6ms |      19 | `readFileSync`             | `node:fs:433:22`                           |
| 0.4% |   9.3ms |       1 | `post`                     | `node:inspector:118:7`                     |
| 0.4% |   9.2ms |       8 | `openSync`                 | `node:fs:559:18`                           |
| 0.2% |   5.2ms |       4 | `defaultLoadImpl`          | `node:internal/modules/cjs/loader:1112:25` |
| 0.2% |   5.2ms |       4 | `loadSource`               | `node:internal/modules/cjs/loader:1797:20` |
| 0.2% |   5.1ms |       4 | `statSync`                 | `node:fs:1745:18`                          |
| 0.2% |   3.9ms |       3 | `getStatsFromBinding`      | `node:internal/fs/utils:552:29`            |
| 0.1% |   3.8ms |       3 | `slice`                    | `node:buffer:640:12`                       |
| 0.1% |   3.8ms |       3 | `toString`                 | `node:buffer:839:46`                       |
| 0.1% |   2.6ms |       2 | `wrappedFn`                | `node:internal/errors:535:21`              |
| 0.1% |   2.5ms |       2 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27`     |
| 0.1% |   2.5ms |       2 | `requireBuiltin`           | `node:internal/bootstrap/realm:422:24`     |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`cpuprofile-run.mjs`)

|     % |  Time | Samples | Callee             | Location                   |
| ----: | ----: | ------: | ------------------ | -------------------------- |
| 99.6% | 2.30s |   2,489 | `typeCheckProject` | `tsc-workload.mjs:3:33`    |
|  0.4% | 9.3ms |       1 | `post`             | `cpuprofile-run.mjs:14:14` |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                              |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 78.7% |   1.81s |   2,031 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:121549:36` |
| 16.3% | 376.0ms |     366 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:120478:25` |
|  4.5% | 103.3ms |      82 | `require`                          | `node:internal/modules/helpers:146:19`                |
|  0.5% |  11.3ms |       9 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:36594:44`  |

##### `forEach` (`node_modules/typescript/lib/typescript.js:52:19`)

|     % |    Time | Samples | Callee               | Location                                              |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------- |
| 76.8% |   1.60s |   1,732 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js:84138:32`  |
| 12.2% | 255.0ms |     250 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120665:26` |
|  7.7% | 161.9ms |     242 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:42712:23`  |
|  6.1% | 128.8ms |     177 | `bind`               | `node_modules/typescript/lib/typescript.js:44000:18`  |
|  3.5% |  72.3ms |      66 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122412:37` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121607:39`)

|     % |    Time | Samples | Callee                             | Location                                              |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 89.9% |   1.63s |   1,760 | `getDiagnostics2`                  | `node_modules/typescript/lib/typescript.js:84575:29`  |
| 10.0% | 182.5ms |     269 | `getTypeChecker`                   | `node_modules/typescript/lib/typescript.js:121488:28` |
|  0.1% |   1.7ms |       2 | `getMergedBindAndCheckDiagnostics` | `node_modules/typescript/lib/typescript.js:121627:46` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js:121587:38`)

|      % |  Time | Samples | Callee        | Location                                              |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 1.81s |   2,031 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121607:39` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js:121606:54`)

|      % |  Time | Samples | Callee                     | Location                                              |
| -----: | ----: | ------: | -------------------------- | ----------------------------------------------------- |
| 100.0% | 1.81s |   2,031 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js:121587:38` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:121597:43`)

|      % |  Time | Samples | Callee                              | Location                                              |
| -----: | ----: | ------: | ----------------------------------- | ----------------------------------------------------- |
| 100.0% | 1.81s |   2,030 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:121603:47` |
|  <0.1% | 0.6ms |       1 | `concatenate`                       | `node_modules/typescript/lib/typescript.js:497:23`    |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121539:78`)

|      % |  Time | Samples | Callee                          | Location                                              |
| -----: | ----: | ------: | ------------------------------- | ----------------------------------------------------- |
| 100.0% | 1.81s |   2,031 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:121597:43` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js:299:19`)

|      % |  Time | Samples | Callee        | Location                                              |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 1.81s |   2,031 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121539:78` |
|  <0.1% | 0.6ms |       1 | `addRange`    | `node_modules/typescript/lib/typescript.js:683:20`    |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js:121535:34`)

|      % |  Time | Samples | Callee    | Location                                           |
| -----: | ----: | ------: | --------- | -------------------------------------------------- |
| 100.0% | 1.81s |   2,031 | `flatMap` | `node_modules/typescript/lib/typescript.js:299:19` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js:121549:36`)

|      % |  Time | Samples | Callee                 | Location                                              |
| -----: | ----: | ------: | ---------------------- | ----------------------------------------------------- |
| 100.0% | 1.81s |   2,031 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js:121535:34` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js:121892:36`)

|      % |  Time | Samples | Callee                                     | Location                                              |
| -----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 100.0% | 1.81s |   2,030 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:121603:47`)

|      % |  Time | Samples | Callee                   | Location                                              |
| -----: | ----: | ------: | ------------------------ | ----------------------------------------------------- |
| 100.0% | 1.81s |   2,030 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js:121892:36` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js:84520:35`)

|     % |    Time | Samples | Callee               | Location                                             |
| ----: | ------: | ------: | -------------------- | ---------------------------------------------------- |
| 51.5% | 840.8ms |     835 | `checkDeferredNodes` | `node_modules/typescript/lib/typescript.js:84429:32` |
| 48.3% | 788.4ms |     921 | `forEach`            | `node_modules/typescript/lib/typescript.js:52:19`    |
|  0.2% |   3.0ms |       4 | `addLazyDiagnostic`  | `node_modules/typescript/lib/typescript.js:84592:27` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js:84489:29`)

|      % |  Time | Samples | Callee                  | Location                                             |
| -----: | ----: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 1.63s |   1,760 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js:84520:35` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js:84589:49`)

|      % |  Time | Samples | Callee            | Location                                             |
| -----: | ----: | ------: | ----------------- | ---------------------------------------------------- |
| 100.0% | 1.63s |   1,760 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js:84489:29` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js:84596:34`)

|      % |  Time | Samples | Callee                                | Location                                             |
| -----: | ----: | ------: | ------------------------------------- | ---------------------------------------------------- |
| 100.0% | 1.63s |   1,760 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js:84589:49` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js:84575:29`)

|      % |  Time | Samples | Callee                 | Location                                             |
| -----: | ----: | ------: | ---------------------- | ---------------------------------------------------- |
| 100.0% | 1.63s |   1,760 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js:84596:34` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js:84147:38`)

|     % |    Time | Samples | Callee                     | Location                                             |
| ----: | ------: | ------: | -------------------------- | ---------------------------------------------------- |
| 74.6% |   1.20s |   1,291 | `checkBlock`               | `node_modules/typescript/lib/typescript.js:80896:24` |
| 40.5% | 653.9ms |     630 | `checkVariableDeclaration` | `node_modules/typescript/lib/typescript.js:81283:38` |
| 40.2% | 649.1ms |     625 | `checkVariableStatement`   | `node_modules/typescript/lib/typescript.js:81301:36` |
| 24.7% | 398.7ms |     417 | `checkExpressionStatement` | `node_modules/typescript/lib/typescript.js:81306:38` |
| 21.2% | 343.0ms |     380 | `checkTypeReferenceNode`   | `node_modules/typescript/lib/typescript.js:79453:36` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js:84138:32`)

|     % |  Time | Samples | Callee                     | Location                                             |
| ----: | ----: | ------: | -------------------------- | ---------------------------------------------------- |
| 99.9% | 1.61s |   1,738 | `checkSourceElementWorker` | `node_modules/typescript/lib/typescript.js:84147:38` |
|  0.1% | 1.3ms |       1 | `checkVariableStatement`   | `node_modules/typescript/lib/typescript.js:81301:36` |

##### `checkBlock` (`node_modules/typescript/lib/typescript.js:80896:24`)

|     % |  Time | Samples | Callee    | Location                                          |
| ----: | ----: | ------: | --------- | ------------------------------------------------- |
| 99.9% | 1.20s |   1,292 | `forEach` | `node_modules/typescript/lib/typescript.js:52:19` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js:78748:35`)

|     % |    Time | Samples | Callee                          | Location                                             |
| ----: | ------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 88.5% |   1.05s |   1,066 | `checkCallExpression`           | `node_modules/typescript/lib/typescript.js:75579:33` |
| 33.9% | 405.1ms |     438 | `checkPropertyAccessExpression` | `node_modules/typescript/lib/typescript.js:73074:43` |
| 29.0% | 346.6ms |     339 | `checkObjectLiteral`            | `node_modules/typescript/lib/typescript.js:72103:32` |
| 15.3% | 183.0ms |     166 | `checkArrayLiteral`             | `node_modules/typescript/lib/typescript.js:71940:31` |
| 11.9% | 142.6ms |     179 | `checkIdentifier`               | `node_modules/typescript/lib/typescript.js:70240:29` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |   Time | Samples | Callee        | Location                                   |
| ----: | -----: | ------: | ------------- | ------------------------------------------ |
| 95.0% | 98.2ms |      78 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |
|  5.0% |  5.2ms |       4 | `loadSource`  | `node:internal/modules/cjs/loader:1797:20` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |    Time | Samples | Callee        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 103.3ms |      82 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |    Time | Samples | Callee                 | Location                                   |
| -----: | ------: | ------: | ---------------------- | ------------------------------------------ |
| 100.0% | 103.3ms |      82 | `(anonymous)`          | `node:internal/modules/cjs/loader:1490:33` |
|   1.2% |   1.3ms |       1 | `loadBuiltinWithHooks` | `node:internal/modules/cjs/loader:1159:30` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader:237:24`)

|      % |    Time | Samples | Callee        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 103.3ms |      82 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |    Time | Samples | Callee           | Location                                  |
| -----: | ------: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 103.3ms |      82 | `wrapModuleLoad` | `node:internal/modules/cjs/loader:237:24` |

##### `require` (`node:internal/modules/helpers:146:19`)

|      % |    Time | Samples | Callee        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 103.3ms |      82 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|     % |   Time | Samples | Callee        | Location                                        |
| ----: | -----: | ------: | ------------- | ----------------------------------------------- |
| 71.8% | 70.5ms |      56 | `wrapSafe`    | `node:internal/modules/cjs/loader:1671:18`      |
| 28.2% | 27.7ms |      22 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:1:1` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|    % |  Time | Samples | Callee                | Location                                           |
| ---: | ----: | ------: | --------------------- | -------------------------------------------------- |
| 1.8% | 1.3ms |       1 | `maybeCacheSourceMap` | `node:internal/source_map/source_map_cache:157:29` |

##### `readFileSync` (`node:fs:433:22`)

|     % |  Time | Samples | Callee            | Location         |
| ----: | ----: | ------: | ----------------- | ---------------- |
| 40.5% | 9.2ms |       8 | `openSync`        | `node:fs:559:18` |
| 17.3% | 3.9ms |       3 | `readFileUtf8`    | `<unknown>`      |
| 11.2% | 2.5ms |       2 | `tryCreateBuffer` | `node:fs:397:25` |
| 11.1% | 2.5ms |       2 | `closeSync`       | `node:fs:516:19` |
|  8.8% | 2.0ms |       2 | `tryReadSync`     | `node:fs:412:21` |

##### `openSync` (`node:fs:559:18`)

|     % |  Time | Samples | Callee      | Location                      |
| ----: | ----: | ------: | ----------- | ----------------------------- |
| 85.5% | 7.8ms |       7 | `open`      | `<unknown>`                   |
| 14.5% | 1.3ms |       1 | `wrappedFn` | `node:internal/errors:535:21` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`)

|      % |  Time | Samples | Callee         | Location         |
| -----: | ----: | ------: | -------------- | ---------------- |
| 100.0% | 5.2ms |       4 | `readFileSync` | `node:fs:433:22` |

##### `loadSource` (`node:internal/modules/cjs/loader:1797:20`)

|      % |  Time | Samples | Callee            | Location                                   |
| -----: | ----: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 5.2ms |       4 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `statSync` (`node:fs:1745:18`)

|     % |  Time | Samples | Callee                | Location                        |
| ----: | ----: | ------: | --------------------- | ------------------------------- |
| 75.6% | 3.9ms |       3 | `getStatsFromBinding` | `node:internal/fs/utils:552:29` |
| 24.4% | 1.3ms |       1 | `stat`                | `<unknown>`                     |

##### `toString` (`node:buffer:839:46`)

|      % |  Time | Samples | Callee  | Location             |
| -----: | ----: | ------: | ------- | -------------------- |
| 100.0% | 3.8ms |       3 | `slice` | `node:buffer:640:12` |

##### `wrappedFn` (`node:internal/errors:535:21`)

|     % |  Time | Samples | Callee        | Location                        |
| ----: | ----: | ------: | ------------- | ------------------------------- |
| 51.6% | 1.3ms |       1 | `(anonymous)` | `node:internal/fs/utils:730:42` |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm:385:27`)

|     % |  Time | Samples | Callee        | Location                             |
| ----: | ----: | ------: | ------------- | ------------------------------------ |
| 50.8% | 1.3ms |       1 | `(anonymous)` | `node:internal/perf/performance:1:1` |
| 50.8% | 1.3ms |       1 | `(anonymous)` | `node:perf_hooks:1:1`                |
| 49.2% | 1.3ms |       1 | `(anonymous)` | `node:internal/crypto/keys:1:1`      |
| 49.2% | 1.3ms |       1 | `(anonymous)` | `node:internal/crypto/hkdf:1:1`      |
| 49.2% | 1.3ms |       1 | `(anonymous)` | `node:crypto:1:1`                    |

##### `requireBuiltin` (`node:internal/bootstrap/realm:422:24`)

|      % |  Time | Samples | Callee                     | Location                               |
| -----: | ----: | ------: | -------------------------- | -------------------------------------- |
| 100.0% | 2.5ms |       2 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(anonymous)` (`cpuprofile-run.mjs`)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.7% | 69.2ms |      55 | `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`) ← `(anonymous)` (1731:37) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.5% | 12.5ms |      10 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeRelatedTo` (63432:29) ← `isTypeIdenticalTo` (62534:31) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypes` (67456:43) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfVariableOrParameterOrProperty` (55470:52) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `checkDeferredNodes` (84429:32) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                   |
| 0.4% |  9.3ms |       1 | `post` (`node:inspector:118:7`) ← `(anonymous)` (`cpuprofile-run.mjs:15:15`) ← `post` (14:14)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.3% |  8.1ms |       7 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js:63813:27`) ← `checkTypeRelatedTo` (63505:32) ← `isTypeRelatedTo` (63432:29) ← `isTypeIdenticalTo` (62534:31) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypes` (67456:43) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfVariableOrParameterOrProperty` (55470:52) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `checkDeferredNodes` (84429:32) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                        |
| 0.3% |  7.6ms |       6 | `getUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js:58008:44`) ← `getPropertyOfUnionOrIntersectionType` (58045:50) ← `getPropertiesOfUnionOrIntersectionType` (57502:52) ← `getReducedType` (58049:28) ← `getReducedApparentType` (57866:36) ← `getPropertyOfType` (58110:31) ← `checkPropertyAccessExpressionOrQualifiedName` (73206:58) ← `checkPropertyAccessExpression` (73074:43) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionStatement` (81306:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `checkDeferredNodes` (84429:32) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.3% |  7.5ms |       6 | `__init` (`node_modules/typescript/lib/typescript.js:21:43`) ← `src/compiler/_namespaces/ts.ts` (130200:37) ← `__init` (21:43) ← `src/typescript/_namespaces/ts.ts` (190817:39) ← `__init` (21:43) ← `src/typescript/typescript.ts` (190829:35) ← `__require` (24:51) ← `(anonymous)` (18:11) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.3% |  7.2ms |       6 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js:63813:27`) ← `checkTypeRelatedTo` (63505:32) ← `isTypeRelatedTo` (63432:29) ← `isTypeIdenticalTo` (62534:31) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypes` (67456:43) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfVariableOrParameterOrProperty` (55470:52) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `checkDeferredNodes` (84429:32) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% |  5.2ms |       4 | `doJSDocScan` (`node_modules/typescript/lib/typescript.js:35075:33`) ← `scanRange` (11159:23) ← `parseJSDocCommentWorker` (35053:43) ← `(anonymous)` (35026:69) ← `doInsideOfContext` (29688:35) ← `parseJSDocComment` (35022:37) ← `(anonymous)` (29528:77) ← `mapDefined` (370:22) ← `withJSDoc` (29523:27) ← `parsePropertyOrMethodSignature` (31325:48) ← `parseTypeMember` (31368:33) ← `parseListElement` (30471:34) ← `parseList` (30450:27) ← `parseObjectTypeMembers` (31412:40) ← `parseInterfaceDeclaration` (34524:43) ← `parseDeclarationWorker` (33901:40) ← `parseDeclaration` (33872:34) ← `parseStatement` (33756:32) ← `parseListElement` (30471:34) ← `parseList` (30450:27) ← `parseSourceFileWorker` (29491:39) ← `parseSourceFile` (29303:33) ← `createSourceFile` (28457:28) ← `(anonymous)` (119834:12) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `processRootFile` (121930:29) ← `(anonymous)` (120714:32) ← `forEach` (52:19) ← `createProgram` (120478:25) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.2% |  5.1ms |       4 | `inferFromMatchingTypes` (`node_modules/typescript/lib/typescript.js:67429:38`) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypes` (67456:43) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfVariableOrParameterOrProperty` (55470:52) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `checkDeferredNodes` (84429:32) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                            |
| 0.2% |  5.0ms |       4 | `setYieldContext` (`node_modules/typescript/lib/typescript.js:29661:33`) ← `parseParametersWorker` (31243:39) ← `parseParameters` (31253:33) ← `parseFunctionDeclaration` (34102:42) ← `parseStatement` (33756:32) ← `parseListElement` (30471:34) ← `parseList` (30450:27) ← `parseModuleBlock` (34566:34) ← `parseModuleOrNamespaceDeclaration` (34577:51) ← `parseModuleDeclaration` (34610:40) ← `parseDeclarationWorker` (33901:40) ← `parseDeclaration` (33872:34) ← `parseStatement` (33756:32) ← `parseListElement` (30471:34) ← `parseList` (30450:27) ← `parseModuleBlock` (34566:34) ← `parseAmbientExternalModuleDeclaration` (34591:55) ← `parseModuleDeclaration` (34610:40) ← `parseDeclarationWorker` (33901:40) ← `(anonymous)` (33888:62) ← `doInsideOfContext` (29688:35) ← `parseDeclaration` (33872:34) ← `parseStatement` (33756:32) ← `parseListElement` (30471:34) ← `parseList` (30450:27) ← `parseSourceFileWorker` (29491:39) ← `parseSourceFile` (29303:33) ← `createSourceFile` (28457:28) ← `(anonymous)` (119834:12) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `(anonymous)` (122412:37) ← `forEach` (52:19) ← `processReferencedFiles` (122411:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `processTypeReferenceDirectiveWorker` (122446:49) ← `processTypeReferenceDirective` (122440:43) ← `processTypeReferenceDirectives` (122424:44) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `processImportedModules` (122586:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `processImportedModules` (122586:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `processRootFile` (121930:29) ← `(anonymous)` (120665:26) ← `forEach` (52:19) ← `createProgram` (120478:25) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.2% |  5.0ms |       4 | `__export` (`node_modules/typescript/lib/typescript.js:27:18`) ← `(anonymous)` (18:11) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2% |  5.0ms |       4 | `scan` (`node_modules/typescript/lib/typescript.js:10327:18`) ← `nextTokenWithoutCheck` (29785:39) ← `nextToken` (29792:27) ← `tryParseSemicolon` (30052:35) ← `parseSemicolon` (30061:32) ← `parseTypeMemberSemicolon` (31265:42) ← `parsePropertyOrMethodSignature` (31325:48) ← `parseTypeMember` (31368:33) ← `parseListElement` (30471:34) ← `parseList` (30450:27) ← `parseObjectTypeMembers` (31412:40) ← `parseInterfaceDeclaration` (34524:43) ← `parseDeclarationWorker` (33901:40) ← `parseDeclaration` (33872:34) ← `parseStatement` (33756:32) ← `parseListElement` (30471:34) ← `parseList` (30450:27) ← `parseSourceFileWorker` (29491:39) ← `parseSourceFile` (29303:33) ← `createSourceFile` (28457:28) ← `(anonymous)` (119834:12) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `processRootFile` (121930:29) ← `(anonymous)` (120714:32) ← `forEach` (52:19) ← `createProgram` (120478:25) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.2% |  5.0ms |       4 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js:63813:27`) ← `checkTypeRelatedTo` (63505:32) ← `isTypeRelatedTo` (63432:29) ← `isTypeIdenticalTo` (62534:31) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypes` (67456:43) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfVariableOrParameterOrProperty` (55470:52) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.2% |  4.8ms |       4 | `createUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js:57869:47`) ← `getUnionOrIntersectionProperty` (58008:44) ← `getPropertyOfUnionOrIntersectionType` (58045:50) ← `getPropertiesOfUnionOrIntersectionType` (57502:52) ← `getReducedType` (58049:28) ← `getReducedApparentType` (57866:36) ← `getPropertyOfType` (58110:31) ← `checkPropertyAccessExpressionOrQualifiedName` (73206:58) ← `checkPropertyAccessExpression` (73074:43) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionStatement` (81306:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `checkDeferredNodes` (84429:32) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% |  3.9ms |       3 | `readFileUtf8` ← `readFileSync` (`node:fs:433:22`) ← `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`) ← `loadSource` (1797:20) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.2% |  3.8ms |       3 | `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js:56402:43`) ← `resolveObjectTypeMembers` (56592:38) ← `resolveTypeReferenceMembers` (56646:41) ← `resolveStructuredTypeMembers` (57461:42) ← `getPropertiesOfObjectType` (57487:39) ← `getPropertiesOfType` (57527:33) ← `resolveObjectTypeMembers` (56592:38) ← `resolveTypeReferenceMembers` (56646:41) ← `resolveStructuredTypeMembers` (57461:42) ← `getSignaturesOfStructuredType` (58153:43) ← `getSignaturesOfType` (58160:33) ← `signaturesRelatedTo` (65565:35) ← `structuredTypeRelatedToWorker` (64597:45) ← `structuredTypeRelatedTo` (64527:39) ← `recursiveTypeRelatedTo` (64383:38) ← `isRelatedTo` (63813:27) ← `typeArgumentsRelatedTo` (64293:38) ← `relateVariances` (65114:33) ← `structuredTypeRelatedToWorker` (64597:45) ← `structuredTypeRelatedTo` (64527:39) ← `recursiveTypeRelatedTo` (64383:38) ← `isRelatedTo` (63813:27) ← `isRelatedToWorker2` (65698:36) ← `compareSignaturesRelated` (63135:38) ← `signatureRelatedTo` (65695:34) ← `signaturesRelatedTo` (65565:35) ← `structuredTypeRelatedToWorker` (64597:45) ← `structuredTypeRelatedTo` (64527:39) ← `recursiveTypeRelatedTo` (64383:38) ← `isRelatedTo` (63813:27) ← `isPropertySymbolTypeRelated` (65271:43) ← `propertyRelatedTo` (65290:33) ← `propertiesRelatedTo` (65393:35) ← `structuredTypeRelatedToWorker` (64597:45) ← `structuredTypeRelatedTo` (64527:39) ← `recursiveTypeRelatedTo` (64383:38) ← `isRelatedTo` (63813:27) ← `checkTypeRelatedTo` (63505:32) ← `checkTypeAssignableTo` (62564:35) ← `checkTypeArgumentConstraints` (79416:42) ← `(anonymous)` (79468:29) ← `addLazyDiagnostic` (84592:27) ← `checkTypeReferenceOrImport` (79464:40) ← `checkTypeReferenceNode` (79453:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkTypeAliasDeclaration` (83177:39) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `checkDeferredNodes` (84429:32) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% |  3.8ms |       3 | `open` ← `openSync` (`node:fs:559:18`) ← `readFileSync` (433:22) ← `readFileWorker` (`node_modules/typescript/lib/typescript.js:6434:34`) ← `readFile` (6459:28) ← `readFile` (119903:17) ← `compilerHost.getSourceFile` (119890:42) ← `(anonymous)` (119834:12) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `(anonymous)` (122412:37) ← `forEach` (52:19) ← `processReferencedFiles` (122411:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `processTypeReferenceDirectiveWorker` (122446:49) ← `processTypeReferenceDirective` (122440:43) ← `processTypeReferenceDirectives` (122424:44) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `processImportedModules` (122586:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `processImportedModules` (122586:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `processRootFile` (121930:29) ← `(anonymous)` (120665:26) ← `forEach` (52:19) ← `createProgram` (120478:25) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2% |  3.8ms |       4 | `getPropertyOfType` (`node_modules/typescript/lib/typescript.js:58110:31`) ← `createUnionOrIntersectionProperty` (57869:47) ← `getUnionOrIntersectionProperty` (58008:44) ← `getPropertyOfUnionOrIntersectionType` (58045:50) ← `getPropertiesOfUnionOrIntersectionType` (57502:52) ← `getReducedType` (58049:28) ← `getReducedApparentType` (57866:36) ← `getPropertyOfType` (58110:31) ← `checkPropertyAccessExpressionOrQualifiedName` (73206:58) ← `checkPropertyAccessExpression` (73074:43) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionStatement` (81306:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `checkDeferredNodes` (84429:32) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2% |  3.8ms |       3 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeRelatedTo` (63432:29) ← `isTypeIdenticalTo` (62534:31) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypes` (67456:43) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfVariableOrParameterOrProperty` (55470:52) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.2% |  3.8ms |       3 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeRelatedTo` (63432:29) ← `isTypeIdenticalTo` (62534:31) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypes` (67456:43) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkNonNullExpression` (72995:36) ← `checkPropertyAccessExpression` (73074:43) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkAwaitExpression` (77296:34) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionStatement` (81306:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkTryStatement` (82289:31) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `checkDeferredNodes` (84429:32) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) |

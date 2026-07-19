# CPU profile

Took 2.49s over 2,659 samples (939.9µs per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| third-party       | 87.4% |   2.18s |   2,410 |
| garbage collector |  7.6% | 191.0ms |     156 |
| stdlib            |  4.8% | 119.5ms |      88 |
| regexp            |  0.1% |   2.5ms |       2 |
| ours              |  0.1% |   1.3ms |       1 |
| program           | <0.1% |   0.1ms |       2 |

Hidden functions account for 91.8% of time spent, so the hottest are also shown.

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                        | Location                                             |
| ---: | ------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 7.6% | 191.0ms |     156 | `(garbage collector)`           | `<unknown>`                                          |
| 2.9% |  71.5ms |      57 | `wrapSafe`                      | `node:internal/modules/cjs/loader:1671:18`           |
| 2.8% |  69.0ms |      66 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:64383:38` |
| 2.5% |  63.0ms |      66 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js:63813:27` |
| 2.1% |  51.7ms |      43 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:63505:32` |
| 1.7% |  42.5ms |      39 | `scan`                          | `node_modules/typescript/lib/typescript.js:10327:18` |
| 1.4% |  35.1ms |      35 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js:62119:40` |
| 1.1% |  28.3ms |      32 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js:62354:35` |
| 1.0% |  25.9ms |      30 | `bind`                          | `node_modules/typescript/lib/typescript.js:44000:18` |
| 0.9% |  21.5ms |      23 | `getNormalizedType`             | `node_modules/typescript/lib/typescript.js:63479:31` |
| 0.8% |  19.2ms |      17 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:56402:43` |
| 0.7% |  18.6ms |      28 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:64597:45` |
| 0.7% |  18.0ms |      17 | `getPropertyOfType`             | `node_modules/typescript/lib/typescript.js:58110:31` |
| 0.7% |  17.6ms |      15 | `invokeOnce`                    | `node_modules/typescript/lib/typescript.js:67401:26` |
| 0.7% |  17.3ms |      20 | `bindWorker`                    | `node_modules/typescript/lib/typescript.js:44063:24` |
| 0.7% |  16.9ms |      31 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js:67214:30` |
| 0.6% |  16.2ms |      14 | `structuredTypeRelatedTo`       | `node_modules/typescript/lib/typescript.js:64527:39` |
| 0.6% |  16.2ms |      13 | `__init`                        | `node_modules/typescript/lib/typescript.js:21:43`    |
| 0.6% |  15.6ms |      13 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js:62092:31` |
| 0.6% |  15.5ms |      13 | `instantiateTypes`              | `node_modules/typescript/lib/typescript.js:61974:30` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |   Time | Samples | Location                                |
| -----: | -----: | ------: | --------------------------------------- |
| 100.0% | 71.5ms |      57 | `node:internal/modules/cjs/loader:1713` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:64383:38`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 38.8% | 26.7ms |      23 | `node_modules/typescript/lib/typescript.js:64396` |
|  9.1% |  6.3ms |       5 | `node_modules/typescript/lib/typescript.js:64443` |
|  9.1% |  6.3ms |       5 | `node_modules/typescript/lib/typescript.js:64455` |
|  7.6% |  5.2ms |       5 | `node_modules/typescript/lib/typescript.js:64422` |
|  6.1% |  4.2ms |       4 | `node_modules/typescript/lib/typescript.js:64383` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js:63813:27`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 15.8% | 10.0ms |       8 | `node_modules/typescript/lib/typescript.js:63813` |
| 14.9% |  9.4ms |       8 | `node_modules/typescript/lib/typescript.js:63910` |
| 10.1% |  6.4ms |       6 | `node_modules/typescript/lib/typescript.js:63825` |
|  9.9% |  6.2ms |       5 | `node_modules/typescript/lib/typescript.js:63830` |
|  9.7% |  6.1ms |       5 | `node_modules/typescript/lib/typescript.js:63868` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 70.6% | 36.5ms |      29 | `node_modules/typescript/lib/typescript.js:63505` |
| 19.5% | 10.1ms |       8 | `node_modules/typescript/lib/typescript.js:63524` |
|  4.9% |  2.5ms |       2 | `node_modules/typescript/lib/typescript.js:63522` |
|  2.5% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:63552` |

##### `scan` (`node_modules/typescript/lib/typescript.js:10327:18`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 17.6% | 7.5ms |       6 | `node_modules/typescript/lib/typescript.js:10327` |
| 14.4% | 6.1ms |       5 | `node_modules/typescript/lib/typescript.js:10352` |
|  8.6% | 3.6ms |       4 | `node_modules/typescript/lib/typescript.js:10514` |
|  4.9% | 2.1ms |       2 | `node_modules/typescript/lib/typescript.js:10816` |
|  3.0% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:10781` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js:62119:40`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 38.8% | 13.6ms |      11 | `node_modules/typescript/lib/typescript.js:62149` |
| 10.5% |  3.7ms |       3 | `node_modules/typescript/lib/typescript.js:62152` |
|  6.9% |  2.4ms |       2 | `node_modules/typescript/lib/typescript.js:62153` |
|  3.7% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:62120` |
|  3.7% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:62123` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js:62354:35`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 62.8% | 17.8ms |      15 | `node_modules/typescript/lib/typescript.js:62370` |
|  9.0% |  2.5ms |       2 | `node_modules/typescript/lib/typescript.js:61989` |
|  4.6% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:62355` |
|  4.4% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:62362` |
|  4.4% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:62364` |

##### `bind` (`node_modules/typescript/lib/typescript.js:44000:18`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 32.9% | 8.5ms |       8 | `node_modules/typescript/lib/typescript.js:44008` |
| 18.2% | 4.7ms |       5 | `node_modules/typescript/lib/typescript.js:44014` |
| 14.7% | 3.8ms |       3 | `node_modules/typescript/lib/typescript.js:44956` |
|  8.2% | 2.1ms |       2 | `node_modules/typescript/lib/typescript.js:44000` |
|  5.0% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:44006` |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js:63479:31`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 34.3% | 7.4ms |       6 | `node_modules/typescript/lib/typescript.js:63481` |
| 22.6% | 4.8ms |       4 | `node_modules/typescript/lib/typescript.js:63299` |
|  8.0% | 1.7ms |       2 | `node_modules/typescript/lib/typescript.js:63479` |
|  7.7% | 1.6ms |       2 | `node_modules/typescript/lib/typescript.js:17465` |
|  5.8% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:63492` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js:56402:43`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 93.3% | 17.9ms |      15 | `node_modules/typescript/lib/typescript.js:56405` |
|  6.5% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:56404` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js:64597:45`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 13.6% | 2.5ms |       2 | `node_modules/typescript/lib/typescript.js:65073` |
| 13.4% | 2.5ms |       2 | `node_modules/typescript/lib/typescript.js:65084` |
| 13.4% | 2.5ms |       2 | `node_modules/typescript/lib/typescript.js:66411` |
|  6.7% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:64706` |
|  6.7% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:65108` |

##### `getPropertyOfType` (`node_modules/typescript/lib/typescript.js:58110:31`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 33.1% | 6.0ms |       5 | `node_modules/typescript/lib/typescript.js:58115` |
| 14.1% | 2.5ms |       2 | `node_modules/typescript/lib/typescript.js:58112` |
| 12.7% | 2.3ms |       2 | `node_modules/typescript/lib/typescript.js:58110` |
| 11.6% | 2.1ms |       2 | `node_modules/typescript/lib/typescript.js:58114` |
|  7.2% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:58116` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js:67401:26`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 21.6% | 3.8ms |       3 | `node_modules/typescript/lib/typescript.js:67414` |
| 20.9% | 3.7ms |       3 | `node_modules/typescript/lib/typescript.js:67403` |
| 16.1% | 2.8ms |       3 | `node_modules/typescript/lib/typescript.js:67402` |
| 14.4% | 2.5ms |       2 | `node_modules/typescript/lib/typescript.js:67408` |
| 12.8% | 2.3ms |       2 | `node_modules/typescript/lib/typescript.js:67401` |

##### `bindWorker` (`node_modules/typescript/lib/typescript.js:44063:24`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 27.6% | 4.8ms |       4 | `node_modules/typescript/lib/typescript.js:44064` |
| 24.0% | 4.2ms |       2 | `node_modules/typescript/lib/typescript.js:44255` |
|  9.4% | 1.6ms |       1 | `node_modules/typescript/lib/typescript.js:44173` |
|  7.2% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:44165` |
|  7.2% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:44185` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js:67214:30`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 21.9% | 3.7ms |       3 | `node_modules/typescript/lib/typescript.js:67237` |
|  8.1% | 1.4ms |       2 | `node_modules/typescript/lib/typescript.js:67225` |
|  7.9% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:67242` |
|  7.6% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:67372` |
|  7.4% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:67305` |

##### `structuredTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:64527:39`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 77.4% | 12.5ms |      11 | `node_modules/typescript/lib/typescript.js:64529` |
|  8.0% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:63604` |
|  7.5% |  1.2ms |       1 | `node_modules/typescript/lib/typescript.js:64527` |

##### `__init` (`node_modules/typescript/lib/typescript.js:21:43`)

|      % |   Time | Samples | Location                                       |
| -----: | -----: | ------: | ---------------------------------------------- |
| 100.0% | 16.2ms |      13 | `node_modules/typescript/lib/typescript.js:22` |

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js:62092:31`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 15.5% | 2.4ms |       2 | `node_modules/typescript/lib/typescript.js:62092` |
| 13.1% | 2.0ms |       2 | `node_modules/typescript/lib/typescript.js:62114` |
|  8.3% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:47282` |
|  8.3% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:47541` |
|  8.0% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:62106` |

##### `instantiateTypes` (`node_modules/typescript/lib/typescript.js:61974:30`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 51.5% | 8.0ms |       7 | `node_modules/typescript/lib/typescript.js:61974` |
| 15.8% | 2.5ms |       2 | `node_modules/typescript/lib/typescript.js:61966` |
|  8.3% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:61975` |
|  8.3% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:62348` |
|  8.0% | 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:62328` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `(garbage collector)` (`<unknown>`)

|      % |    Time | Samples | Caller   | Location    |
| -----: | ------: | ------: | -------- | ----------- |
| 100.0% | 191.0ms |     156 | `(root)` | `<unknown>` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |   Time | Samples | Caller        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 71.5ms |      57 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:64383:38`)

|      % |   Time | Samples | Caller        | Location                                             |
| -----: | -----: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 69.0ms |      66 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js:63813:27` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js:63813:27`)

|     % |   Time | Samples | Caller                          | Location                                             |
| ----: | -----: | ------: | ------------------------------- | ---------------------------------------------------- |
| 55.1% | 34.7ms |      34 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:63505:32` |
|  5.0% |  3.2ms |       4 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:64597:45` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`)

|     % |   Time | Samples | Caller            | Location                                             |
| ----: | -----: | ------: | ----------------- | ---------------------------------------------------- |
| 97.5% | 50.4ms |      40 | `isTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:63432:29` |

##### `scan` (`node_modules/typescript/lib/typescript.js:10327:18`)

|     % |   Time | Samples | Caller                  | Location                                             |
| ----: | -----: | ------: | ----------------------- | ---------------------------------------------------- |
| 94.3% | 40.1ms |      37 | `nextTokenWithoutCheck` | `node_modules/typescript/lib/typescript.js:29785:39` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js:62119:40`)

|      % |   Time | Samples | Caller                  | Location                                             |
| -----: | -----: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 35.1ms |      35 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js:62354:35` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js:62354:35`)

|      % |   Time | Samples | Caller                     | Location                                             |
| -----: | -----: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 28.3ms |      32 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js:62337:38` |

##### `bind` (`node_modules/typescript/lib/typescript.js:44000:18`)

|     % |   Time | Samples | Caller       | Location                                             |
| ----: | -----: | ------: | ------------ | ---------------------------------------------------- |
| 44.3% | 11.5ms |      12 | `visitNode2` | `node_modules/typescript/lib/typescript.js:28312:22` |
| 24.3% |  6.3ms |       6 | `forEach`    | `node_modules/typescript/lib/typescript.js:52:19`    |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js:63479:31`)

|      % |   Time | Samples | Caller        | Location                                             |
| -----: | -----: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 21.5ms |      23 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js:63813:27` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js:56402:43`)

|     % |   Time | Samples | Caller                     | Location                                             |
| ----: | -----: | ------: | -------------------------- | ---------------------------------------------------- |
| 93.3% | 17.9ms |      16 | `resolveObjectTypeMembers` | `node_modules/typescript/lib/typescript.js:56592:38` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js:64597:45`)

|      % |   Time | Samples | Caller                    | Location                                             |
| -----: | -----: | ------: | ------------------------- | ---------------------------------------------------- |
| 100.0% | 18.6ms |      28 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:64527:39` |

##### `getPropertyOfType` (`node_modules/typescript/lib/typescript.js:58110:31`)

|     % |  Time | Samples | Caller                                         | Location                                             |
| ----: | ----: | ------: | ---------------------------------------------- | ---------------------------------------------------- |
| 53.5% | 9.6ms |      10 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js:73206:58` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js:67401:26`)

|     % |   Time | Samples | Caller           | Location                                             |
| ----: | -----: | ------: | ---------------- | ---------------------------------------------------- |
| 94.1% | 16.6ms |      14 | `inferFromTypes` | `node_modules/typescript/lib/typescript.js:67214:30` |

##### `bindWorker` (`node_modules/typescript/lib/typescript.js:44063:24`)

|      % |   Time | Samples | Caller | Location                                             |
| -----: | -----: | ------: | ------ | ---------------------------------------------------- |
| 100.0% | 17.3ms |      20 | `bind` | `node_modules/typescript/lib/typescript.js:44000:18` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js:67214:30`)

|     % |  Time | Samples | Caller                   | Location                                             |
| ----: | ----: | ------: | ------------------------ | ---------------------------------------------------- |
| 21.9% | 3.7ms |       3 | `inferFromMatchingTypes` | `node_modules/typescript/lib/typescript.js:67429:38` |
| 20.4% | 3.5ms |       4 | `inferFromTypeArguments` | `node_modules/typescript/lib/typescript.js:67446:38` |
| 15.8% | 2.7ms |       4 | `inferFromTypes`         | `node_modules/typescript/lib/typescript.js:67214:30` |

##### `structuredTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:64527:39`)

|     % |   Time | Samples | Caller                   | Location                                             |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------- |
| 92.5% | 15.0ms |      13 | `recursiveTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:64383:38` |
|  7.5% |  1.2ms |       1 | `isRelatedTo`            | `node_modules/typescript/lib/typescript.js:63813:27` |

##### `__init` (`node_modules/typescript/lib/typescript.js:21:43`)

|     % |  Time | Samples | Caller                           | Location                                              |
| ----: | ----: | ------: | -------------------------------- | ----------------------------------------------------- |
| 61.3% | 9.9ms |       8 | `src/compiler/_namespaces/ts.ts` | `node_modules/typescript/lib/typescript.js:130200:37` |

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js:62092:31`)

|     % |   Time | Samples | Caller                          | Location                                             |
| ----: | -----: | ------: | ------------------------------- | ---------------------------------------------------- |
| 91.7% | 14.3ms |      12 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:56402:43` |

##### `instantiateTypes` (`node_modules/typescript/lib/typescript.js:61974:30`)

|     % |   Time | Samples | Caller                       | Location                                             |
| ----: | -----: | ------: | ---------------------------- | ---------------------------------------------------- |
| 64.6% | 10.0ms |       8 | `instantiateTypeWorker`      | `node_modules/typescript/lib/typescript.js:62354:35` |
| 27.3% |  4.3ms |       4 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js:62119:40` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                        | Location                                              |
| ----: | ------: | ------: | ------------------------------- | ----------------------------------------------------- |
| 90.9% |   2.27s |   2,459 | `(anonymous)`                   | `cpuprofile-run.mjs`                                  |
| 90.5% |   2.26s |   2,458 | `typeCheckProject`              | `tsc-workload.mjs:3:33`                               |
| 70.9% |   1.77s |   2,003 | `getSemanticDiagnostics`        | `node_modules/typescript/lib/typescript.js:121549:36` |
| 29.5% | 736.1ms |     769 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:63505:32`  |
| 27.6% | 689.1ms |     729 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js:63813:27`  |
| 23.8% | 595.8ms |     638 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:64383:38`  |
| 23.1% | 578.4ms |     622 | `structuredTypeRelatedTo`       | `node_modules/typescript/lib/typescript.js:64527:39`  |
| 22.8% | 570.2ms |     614 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:64597:45`  |
| 16.3% | 406.9ms |     442 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js:62354:35`  |
| 15.0% | 374.2ms |     362 | `createProgram`                 | `node_modules/typescript/lib/typescript.js:120478:25` |
| 12.4% | 310.4ms |     330 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js:67214:30`  |
| 11.4% | 284.2ms |     290 | `instantiateTypes`              | `node_modules/typescript/lib/typescript.js:61974:30`  |
| 11.1% | 277.9ms |     283 | `invokeOnce`                    | `node_modules/typescript/lib/typescript.js:67401:26`  |
|  8.7% | 217.0ms |     248 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js:62119:40`  |
|  7.6% | 191.0ms |     156 | `(garbage collector)`           | `<unknown>`                                           |
|  6.5% | 163.5ms |     250 | `bind`                          | `node_modules/typescript/lib/typescript.js:44000:18`  |
|  4.6% | 113.9ms |     121 | `getNormalizedType`             | `node_modules/typescript/lib/typescript.js:63479:31`  |
|  4.2% | 104.0ms |      83 | `require`                       | `node:internal/modules/helpers:146:19`                |
|  3.6% |  90.8ms |     123 | `bindWorker`                    | `node_modules/typescript/lib/typescript.js:44063:24`  |
|  3.2% |  80.2ms |      79 | `getPropertyOfType`             | `node_modules/typescript/lib/typescript.js:58110:31`  |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `(anonymous)` (`cpuprofile-run.mjs`)

|     % |   Time | Samples | Callee             | Location                   |
| ----: | -----: | ------: | ------------------ | -------------------------- |
| 99.6% |  2.26s |   2,458 | `typeCheckProject` | `tsc-workload.mjs:3:33`    |
|  0.4% | 10.1ms |       1 | `post`             | `cpuprofile-run.mjs:15:14` |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                              |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 78.3% |   1.77s |   2,003 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:121549:36` |
| 16.5% | 374.2ms |     362 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:120478:25` |
|  4.6% | 104.0ms |      83 | `require`                          | `node:internal/modules/helpers:146:19`                |
|  0.5% |  11.2ms |       9 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:36594:44`  |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js:121549:36`)

|      % |  Time | Samples | Callee                 | Location                                              |
| -----: | ----: | ------: | ---------------------- | ----------------------------------------------------- |
| 100.0% | 1.77s |   2,003 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js:121535:34` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`)

|     % |    Time | Samples | Callee        | Location                                             |
| ----: | ------: | ------: | ------------- | ---------------------------------------------------- |
| 93.1% | 685.3ms |     726 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js:63813:27` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js:63813:27`)

|     % |    Time | Samples | Callee                    | Location                                             |
| ----: | ------: | ------: | ------------------------- | ---------------------------------------------------- |
| 86.5% | 595.8ms |     638 | `recursiveTypeRelatedTo`  | `node_modules/typescript/lib/typescript.js:64383:38` |
| 16.3% | 112.0ms |     119 | `getNormalizedType`       | `node_modules/typescript/lib/typescript.js:63479:31` |
|  0.2% |   1.2ms |       1 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:64527:39` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:64383:38`)

|     % |    Time | Samples | Callee                    | Location                                             |
| ----: | ------: | ------: | ------------------------- | ---------------------------------------------------- |
| 96.9% | 577.2ms |     621 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:64527:39` |

##### `structuredTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:64527:39`)

|     % |    Time | Samples | Callee                          | Location                                             |
| ----: | ------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 98.6% | 570.2ms |     614 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:64597:45` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js:64597:45`)

|     % |    Time | Samples | Callee                | Location                                             |
| ----: | ------: | ------: | --------------------- | ---------------------------------------------------- |
| 78.3% | 446.8ms |     434 | `propertiesRelatedTo` | `node_modules/typescript/lib/typescript.js:65393:35` |
| 66.9% | 381.4ms |     374 | `signaturesRelatedTo` | `node_modules/typescript/lib/typescript.js:65565:35` |
| 22.5% | 128.0ms |     174 | `isRelatedTo`         | `node_modules/typescript/lib/typescript.js:63813:27` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js:62354:35`)

|     % |    Time | Samples | Callee                       | Location                                             |
| ----: | ------: | ------: | ---------------------------- | ---------------------------------------------------- |
| 67.6% | 275.0ms |     281 | `instantiateTypes`           | `node_modules/typescript/lib/typescript.js:61974:30` |
| 49.5% | 201.4ms |     218 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js:62119:40` |

##### `createProgram` (`node_modules/typescript/lib/typescript.js:120478:25`)

|     % |    Time | Samples | Callee    | Location                                          |
| ----: | ------: | ------: | --------- | ------------------------------------------------- |
| 84.2% | 315.2ms |     304 | `forEach` | `node_modules/typescript/lib/typescript.js:52:19` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js:67214:30`)

|     % |    Time | Samples | Callee           | Location                                             |
| ----: | ------: | ------: | ---------------- | ---------------------------------------------------- |
| 89.5% | 277.9ms |     283 | `invokeOnce`     | `node_modules/typescript/lib/typescript.js:67401:26` |
|  4.3% |  13.5ms |      19 | `inferFromTypes` | `node_modules/typescript/lib/typescript.js:67214:30` |

##### `instantiateTypes` (`node_modules/typescript/lib/typescript.js:61974:30`)

|     % |    Time | Samples | Callee            | Location                                             |
| ----: | ------: | ------: | ----------------- | ---------------------------------------------------- |
| 97.1% | 275.9ms |     283 | `instantiateList` | `node_modules/typescript/lib/typescript.js:61957:29` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js:67401:26`)

|     % |    Time | Samples | Callee                 | Location                                             |
| ----: | ------: | ------: | ---------------------- | ---------------------------------------------------- |
| 96.7% | 268.6ms |     269 | `inferFromObjectTypes` | `node_modules/typescript/lib/typescript.js:67642:36` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js:62119:40`)

|     % |    Time | Samples | Callee                  | Location                                             |
| ----: | ------: | ------: | ----------------------- | ---------------------------------------------------- |
| 52.7% | 114.3ms |     147 | `instantiateMappedType` | `node_modules/typescript/lib/typescript.js:62225:35` |
| 51.6% | 112.0ms |     112 | `map`                   | `node_modules/typescript/lib/typescript.js:254:15`   |
|  6.4% |  13.8ms |      13 | `instantiateTypes`      | `node_modules/typescript/lib/typescript.js:61974:30` |

##### `bind` (`node_modules/typescript/lib/typescript.js:44000:18`)

|     % |    Time | Samples | Callee          | Location                                             |
| ----: | ------: | ------: | --------------- | ---------------------------------------------------- |
| 96.6% | 157.9ms |     233 | `bindContainer` | `node_modules/typescript/lib/typescript.js:42630:27` |
| 55.5% |  90.8ms |     123 | `bindWorker`    | `node_modules/typescript/lib/typescript.js:44063:24` |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js:63479:31`)

|     % |   Time | Samples | Callee                                 | Location                                             |
| ----: | -----: | ------: | -------------------------------------- | ---------------------------------------------------- |
| 36.3% | 41.4ms |      41 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js:63487:50` |
| 25.3% | 28.8ms |      31 | `getSimplifiedType`                    | `node_modules/typescript/lib/typescript.js:61133:31` |

##### `require` (`node:internal/modules/helpers:146:19`)

|      % |    Time | Samples | Callee        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 104.0ms |      83 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `bindWorker` (`node_modules/typescript/lib/typescript.js:44063:24`)

|     % |   Time | Samples | Callee                           | Location                                             |
| ----: | -----: | ------: | -------------------------------- | ---------------------------------------------------- |
| 14.0% | 12.7ms |      17 | `bindPropertyOrMethodOrAccessor` | `node_modules/typescript/lib/typescript.js:44826:44` |
| 13.9% | 12.6ms |      13 | `bindParameter`                  | `node_modules/typescript/lib/typescript.js:44782:27` |
|  9.1% |  8.3ms |      12 | `bindPropertyWorker`             | `node_modules/typescript/lib/typescript.js:44290:32` |
|  9.0% |  8.2ms |      11 | `bindModuleDeclaration`          | `node_modules/typescript/lib/typescript.js:43707:35` |

##### `getPropertyOfType` (`node_modules/typescript/lib/typescript.js:58110:31`)

|     % |   Time | Samples | Callee                         | Location                                             |
| ----: | -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 39.2% | 31.4ms |      33 | `resolveStructuredTypeMembers` | `node_modules/typescript/lib/typescript.js:57461:42` |
| 37.8% | 30.3ms |      28 | `getReducedApparentType`       | `node_modules/typescript/lib/typescript.js:57866:36` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`cpuprofile-run.mjs`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.0% | 598.6ms |     689 | `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js:121549:36`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 12.4% | 308.8ms |     303 | `createProgram` (`node_modules/typescript/lib/typescript.js:120478:25`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.9% |  71.5ms |      57 | `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.5% |  62.9ms |      57 | `scan` (`node_modules/typescript/lib/typescript.js:10327:18`) ← `createProgram` (120478:25)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.8% |  44.1ms |      35 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `inferFromTypes` (67214:30) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.7% |  41.7ms |      40 | `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js:64597:45`) ← `structuredTypeRelatedTo` (64527:39) ← `recursiveTypeRelatedTo` (64383:38) ← `isRelatedTo` (63813:27) ← `structuredTypeRelatedToWorker` (64597:45) ← `structuredTypeRelatedTo` (64527:39) ← `recursiveTypeRelatedTo` (64383:38) ← `isRelatedTo` (63813:27) ← `checkTypeRelatedTo` (63505:32) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                           |
|  1.6% |  39.0ms |      41 | `getPropertyOfType` (`node_modules/typescript/lib/typescript.js:58110:31`) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.4% |  34.3ms |      28 | `getNormalizedType` (`node_modules/typescript/lib/typescript.js:63479:31`) ← `isRelatedTo` (63813:27) ← `checkTypeRelatedTo` (63505:32) ← `inferFromTypes` (67214:30) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.1% |  26.5ms |      26 | `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js:64597:45`) ← `structuredTypeRelatedTo` (64527:39) ← `recursiveTypeRelatedTo` (64383:38) ← `isRelatedTo` (63813:27) ← `structuredTypeRelatedToWorker` (64597:45) ← `structuredTypeRelatedTo` (64527:39) ← `recursiveTypeRelatedTo` (64383:38) ← `isRelatedTo` (63813:27) ← `structuredTypeRelatedToWorker` (64597:45) ← `structuredTypeRelatedTo` (64527:39) ← `recursiveTypeRelatedTo` (64383:38) ← `isRelatedTo` (63813:27) ← `checkTypeRelatedTo` (63505:32) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                      |
|  1.0% |  25.5ms |      22 | `invokeOnce` (`node_modules/typescript/lib/typescript.js:67401:26`) ← `inferFromTypes` (67214:30) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.9% |  23.1ms |      20 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:64383:38`) ← `isRelatedTo` (63813:27) ← `structuredTypeRelatedToWorker` (64597:45) ← `structuredTypeRelatedTo` (64527:39) ← `recursiveTypeRelatedTo` (64383:38) ← `isRelatedTo` (63813:27) ← `structuredTypeRelatedToWorker` (64597:45) ← `structuredTypeRelatedTo` (64527:39) ← `recursiveTypeRelatedTo` (64383:38) ← `isRelatedTo` (63813:27) ← `checkTypeRelatedTo` (63505:32) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                          |
|  0.9% |  22.4ms |      23 | `inferFromTypes` (`node_modules/typescript/lib/typescript.js:67214:30`) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.9% |  21.3ms |      27 | `bindWorker` (`node_modules/typescript/lib/typescript.js:44063:24`) ← `bind` (44000:18) ← `bind` (44000:18) ← `bind` (44000:18) ← `bind` (44000:18) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.8% |  21.2ms |      26 | `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js:64597:45`) ← `structuredTypeRelatedTo` (64527:39) ← `recursiveTypeRelatedTo` (64383:38) ← `isRelatedTo` (63813:27) ← `checkTypeRelatedTo` (63505:32) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.8% |  21.0ms |      32 | `bindWorker` (`node_modules/typescript/lib/typescript.js:44063:24`) ← `bind` (44000:18) ← `bind` (44000:18) ← `bind` (44000:18) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.8% |  18.8ms |      15 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js:63813:27`) ← `checkTypeRelatedTo` (63505:32) ← `inferFromTypes` (67214:30) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.7% |  17.4ms |      14 | `__init` (`node_modules/typescript/lib/typescript.js:21:43`) ← `__init` (21:43) ← `__init` (21:43) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.7% |  17.1ms |      17 | `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js:64597:45`) ← `structuredTypeRelatedTo` (64527:39) ← `recursiveTypeRelatedTo` (64383:38) ← `isRelatedTo` (63813:27) ← `structuredTypeRelatedToWorker` (64597:45) ← `structuredTypeRelatedTo` (64527:39) ← `recursiveTypeRelatedTo` (64383:38) ← `isRelatedTo` (63813:27) ← `structuredTypeRelatedToWorker` (64597:45) ← `structuredTypeRelatedTo` (64527:39) ← `recursiveTypeRelatedTo` (64383:38) ← `isRelatedTo` (63813:27) ← `structuredTypeRelatedToWorker` (64597:45) ← `structuredTypeRelatedTo` (64527:39) ← `recursiveTypeRelatedTo` (64383:38) ← `isRelatedTo` (63813:27) ← `checkTypeRelatedTo` (63505:32) ← `getSemanticDiagnostics` (121549:36) |
|  0.6% |  14.7ms |      13 | `invokeOnce` (`node_modules/typescript/lib/typescript.js:67401:26`) ← `inferFromTypes` (67214:30) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.6% |  14.2ms |      17 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js:63813:27`) ← `checkTypeRelatedTo` (63505:32) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

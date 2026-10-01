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

### Total time

#### Regressions

Functions with the largest increase in total wall time spent in the function and all its callees.

|     Change |     Delta |             % |             Time |       Samples | Function              | Location                                                          |
| ---------: | --------: | ------------: | ---------------: | ------------: | --------------------- | ----------------------------------------------------------------- |
| +470898.8% |  +11.828s | <0.1% → 73.7% |   2.5ms → 11.83s |     2 → 9,435 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:121498:14 → 124903:41` |
| +881194.4% |  +11.067s | <0.1% → 69.0% |   1.3ms → 11.06s |     1 → 8,827 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:122305:28 → 124979:27` |
|  +32922.3% |   +1.654s | <0.1% → 10.3% |    5.0ms → 1.65s |     4 → 1,323 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:79699:45 → 83536:40`   |
|    +727.3% |   +1.626s |  1.4% → 11.5% |  223.6ms → 1.84s |   178 → 1,475 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:122455:27 → 125505:26` |
|  +57657.9% |   +1.448s |  <0.1% → 9.0% |    2.5ms → 1.45s |     2 → 1,157 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:86173:38 → 123084:26`  |
|  +23628.8% | +890.33ms |  <0.1% → 5.6% |  3.8ms → 894.1ms |       3 → 713 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:86898:35 → 124028:27`  |
|  +66993.0% | +841.43ms |  <0.1% → 5.3% |  1.3ms → 842.7ms |       1 → 672 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:64311:25 → 66062:25`   |
|   +9118.6% | +687.18ms |  <0.1% → 4.3% |  7.5ms → 694.7ms |       6 → 554 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:50186:23 → 46417:16`   |
|    +664.6% | +659.45ms |   0.6% → 4.7% | 99.2ms → 758.7ms |      79 → 605 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:121549:15 → 124971:26` |
|  +44229.3% | +555.52ms |  <0.1% → 3.5% |  1.3ms → 556.8ms |       1 → 444 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:36056:29 → 37111:34`   |
|  +14876.1% | +373.69ms |  <0.1% → 2.3% |  2.5ms → 376.2ms |       2 → 300 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:79608:25 → 81758:22`   |
|  +25758.8% | +323.53ms |  <0.1% → 2.0% |  1.3ms → 324.8ms |       1 → 259 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:121450:24 → 124078:27` |
|   +2483.4% | +249.53ms |   0.1% → 1.6% | 10.0ms → 259.6ms |       8 → 207 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:76634:22 → 80919:33`   |
|  +18071.0% | +226.97ms |  <0.1% → 1.4% |  1.3ms → 228.2ms |       1 → 182 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:31424:27 → 32748:31`   |
|   +1747.1% | +219.43ms |   0.1% → 1.4% | 12.6ms → 232.0ms |      10 → 185 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:87290:34 → 124034:27`  |
|  +17172.5% | +215.69ms |  <0.1% → 1.4% |  1.3ms → 216.9ms |       1 → 173 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:38166:2 → 38259:37`    |
|      +6.5% | +123.63ms | 11.7% → 12.6% |    1.90s → 2.02s | 1,513 → 1,614 | `(garbage collector)` | `<unknown>`                                                       |
|   +2346.1% | +117.87ms |  <0.1% → 0.8% |  5.0ms → 122.9ms |        4 → 98 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:71534:37 → 72303:24`   |
|    +825.8% | +114.09ms |   0.1% → 0.8% | 13.8ms → 127.9ms |      11 → 102 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:44716:38 → 45507:53`   |
|   +7887.3% |  +99.06ms |  <0.1% → 0.6% |  1.3ms → 100.3ms |        1 → 80 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:74492:50 → 77933:22`   |

##### Third-party

|     Change |     Delta |             % |             Time |     Samples | Function                           | Location                                                          |
| ---------: | --------: | ------------: | ---------------: | ----------: | ---------------------------------- | ----------------------------------------------------------------- |
| +470898.8% |  +11.828s | <0.1% → 73.7% |   2.5ms → 11.83s |   2 → 9,435 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:121498:14 → 124903:41` |
| +881194.4% |  +11.067s | <0.1% → 69.0% |   1.3ms → 11.06s |   1 → 8,827 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:122305:28 → 124979:27` |
|  +32922.3% |   +1.654s | <0.1% → 10.3% |    5.0ms → 1.65s |   4 → 1,323 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:79699:45 → 83536:40`   |
|    +727.3% |   +1.626s |  1.4% → 11.5% |  223.6ms → 1.84s | 178 → 1,475 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:122455:27 → 125505:26` |
|  +57657.9% |   +1.448s |  <0.1% → 9.0% |    2.5ms → 1.45s |   2 → 1,157 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:86173:38 → 123084:26`  |
|  +23628.8% | +890.33ms |  <0.1% → 5.6% |  3.8ms → 894.1ms |     3 → 713 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:86898:35 → 124028:27`  |
|  +66993.0% | +841.43ms |  <0.1% → 5.3% |  1.3ms → 842.7ms |     1 → 672 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:64311:25 → 66062:25`   |
|   +9118.6% | +687.18ms |  <0.1% → 4.3% |  7.5ms → 694.7ms |     6 → 554 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:50186:23 → 46417:16`   |
|    +664.6% | +659.45ms |   0.6% → 4.7% | 99.2ms → 758.7ms |    79 → 605 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:121549:15 → 124971:26` |
|  +44229.3% | +555.52ms |  <0.1% → 3.5% |  1.3ms → 556.8ms |     1 → 444 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:36056:29 → 37111:34`   |
|  +14876.1% | +373.69ms |  <0.1% → 2.3% |  2.5ms → 376.2ms |     2 → 300 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:79608:25 → 81758:22`   |
|  +25758.8% | +323.53ms |  <0.1% → 2.0% |  1.3ms → 324.8ms |     1 → 259 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:121450:24 → 124078:27` |
|   +2483.4% | +249.53ms |   0.1% → 1.6% | 10.0ms → 259.6ms |     8 → 207 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:76634:22 → 80919:33`   |
|  +18071.0% | +226.97ms |  <0.1% → 1.4% |  1.3ms → 228.2ms |     1 → 182 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:31424:27 → 32748:31`   |
|   +1747.1% | +219.43ms |   0.1% → 1.4% | 12.6ms → 232.0ms |    10 → 185 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:87290:34 → 124034:27`  |
|  +17172.5% | +215.69ms |  <0.1% → 1.4% |  1.3ms → 216.9ms |     1 → 173 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:38166:2 → 38259:37`    |
|   +2346.1% | +117.87ms |  <0.1% → 0.8% |  5.0ms → 122.9ms |      4 → 98 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:71534:37 → 72303:24`   |
|    +825.8% | +114.09ms |   0.1% → 0.8% | 13.8ms → 127.9ms |    11 → 102 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:44716:38 → 45507:53`   |
|   +7887.3% |  +99.06ms |  <0.1% → 0.6% |  1.3ms → 100.3ms |      1 → 80 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:74492:50 → 77933:22`   |
|        new |  +97.81ms |   0.0% → 0.6% |     0ms → 97.8ms |      0 → 78 | `expressionOrTypeToTypeNodeHelper` | `node_modules/typescript/lib/typescript.js`                       |

##### Garbage collector

| Change |     Delta |             % |          Time |       Samples | Function              | Location    |
| -----: | --------: | ------------: | ------------: | ------------: | --------------------- | ----------- |
|  +6.5% | +123.63ms | 11.7% → 12.6% | 1.90s → 2.02s | 1,513 → 1,614 | `(garbage collector)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total wall time spent in the function and all its callees.

##### Third-party

|  Change |     Delta |             % |              Time |       Samples | Function                                   | Location                                                          |
| ------: | --------: | ------------: | ----------------: | ------------: | ------------------------------------------ | ----------------------------------------------------------------- |
|  -98.2% |  -12.006s |  75.0% → 1.4% |  12.22s → 218.2ms |   9,733 → 174 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123321:41 → 125935:27` |
| -100.0% |  -11.458s | 70.4% → <0.1% |    11.45s → 1.3ms |     9,124 → 1 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123397:27 → 137030:30` |
|  -99.9% |   -1.894s | 11.6% → <0.1% |     1.89s → 2.5ms |     1,510 → 2 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:82241:40 → 85340:24`   |
| removed |   -1.769s |  10.9% → 0.0% |       1.76s → 0ms |     1,409 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123923:26`             |
|  -99.9% |   -1.369s |  8.4% → <0.1% |     1.37s → 1.3ms |     1,091 → 1 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121506:26 → 124903:42` |
|  -99.1% | -850.32ms |  5.3% → <0.1% |   857.8ms → 7.5ms |       683 → 6 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:122449:27 → 124984:44` |
|  -87.2% | -758.80ms |   5.3% → 0.7% | 870.4ms → 111.6ms |      693 → 89 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:64807:25 → 66242:25`   |
|  -99.8% | -754.86ms |  4.6% → <0.1% |   756.1ms → 1.3ms |       602 → 1 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123389:26 → 126227:26` |
|  -88.5% | -610.54ms |   4.2% → 0.5% |  689.5ms → 79.0ms |      549 → 63 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:45224:16 → 46416:16`   |
|  -99.7% | -488.59ms |  3.0% → <0.1% |   489.8ms → 1.3ms |       390 → 1 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:36056:34 → 37111:41`   |
|  -99.7% | -428.30ms |  2.6% → <0.1% |   429.6ms → 1.3ms |       342 → 1 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:80463:22 → 83934:40`   |
|   -3.6% | -401.72ms | 69.4% → 67.9% |   11.30s → 10.89s | 8,997 → 8,691 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`                       |
|   -3.3% | -399.44ms | 75.1% → 73.7% |   12.23s → 11.83s | 9,738 → 9,435 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`                       |
|   -3.2% | -396.93ms | 75.1% → 73.7% |   12.23s → 11.83s | 9,738 → 9,437 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`                       |
|   -3.2% | -394.42ms | 75.1% → 73.7% |   12.22s → 11.83s | 9,736 → 9,437 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`                       |
|   -3.2% | -394.42ms | 75.1% → 73.7% |   12.22s → 11.83s | 9,735 → 9,436 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`                       |
|   -3.4% | -391.94ms | 70.4% → 69.0% |   11.46s → 11.07s | 9,126 → 8,828 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`                       |
|   -3.2% | -391.91ms | 75.1% → 73.7% |   12.22s → 11.83s | 9,736 → 9,439 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`                       |
|   -3.2% | -391.90ms | 75.0% → 73.7% |   12.22s → 11.82s | 9,730 → 9,433 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`                       |
|   -3.2% | -391.89ms | 75.0% → 73.7% |   12.21s → 11.82s | 9,727 → 9,430 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`                       |

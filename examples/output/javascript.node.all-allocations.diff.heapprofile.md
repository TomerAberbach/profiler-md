# Heap profile diff

Allocated 4.78 GiB → 4.74 GiB (-42.898 MiB, -0.9%) over 9,747 samples → 9,665 samples (514 KiB per sample).

| Category         |  Change |       Delta |             % |                Size |       Samples |
| ---------------- | ------: | ----------: | ------------: | ------------------: | ------------: |
| Third-party      |   -1.0% | -45.406 MiB | 91.3% → 91.2% | 4.36 GiB → 4.32 GiB | 8,915 → 8,825 |
| Standard library |   +1.0% |  +4.043 MiB |   8.7% → 8.8% |   423 MiB → 427 MiB |     829 → 840 |
| Native           | removed |  -1.535 MiB |  <0.1% → 0.0% |      1.54 MiB → 0 B |         3 → 0 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |            % |                Size |   Samples | Function                        | Location                                             |
| ------: | ----------: | -----------: | ------------------: | --------: | ------------------------------- | ---------------------------------------------------- |
|  +60.4% | +16.001 MiB |  0.5% → 0.9% | 26.5 MiB → 42.5 MiB |   53 → 85 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:56402:43` |
|  +31.5% | +14.505 MiB |  0.9% → 1.2% |   46 MiB → 60.5 MiB |  92 → 121 | `getTypeFactsWorker`            | `node_modules/typescript/lib/typescript.js:68231:32` |
|  +10.7% | +14.001 MiB |  2.7% → 3.0% |   131 MiB → 145 MiB | 262 → 290 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:64383:38` |
|   +6.2% | +10.548 MiB |  3.5% → 3.7% |   170 MiB → 180 MiB | 339 → 360 | `getFlowTypeOfReference`        | `node_modules/typescript/lib/typescript.js:68915:36` |
|  +65.6% | +10.496 MiB |  0.3% → 0.5% |   16 MiB → 26.5 MiB |   32 → 53 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js:63813:27` |
|  +52.6% |  +9.993 MiB |  0.4% → 0.6% |     19 MiB → 29 MiB |   38 → 58 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js:62289:38` |
| +360.0% |  +9.002 MiB |  0.1% → 0.2% |  2.5 MiB → 11.5 MiB |    5 → 23 | `setParentRecursive`            | `node_modules/typescript/lib/typescript.js:18640:30` |
| +180.0% |      +9 MiB |  0.1% → 0.3% |      5 MiB → 14 MiB |   10 → 28 | `addDeclarationToSymbol`        | `node_modules/typescript/lib/typescript.js:42406:36` |
| +113.3% |  +8.501 MiB |  0.2% → 0.3% |    7.5 MiB → 16 MiB |   15 → 32 | `instantiateSignature`          | `node_modules/typescript/lib/typescript.js:62067:34` |
|  +10.9% |  +7.001 MiB |  1.3% → 1.5% | 64.5 MiB → 71.5 MiB | 129 → 143 | `Map`                           | `<unknown>`                                          |
|  +23.3% |      +7 MiB |  0.6% → 0.8% |     30 MiB → 37 MiB |   60 → 74 | `getUnmatchedProperties`        | `node_modules/typescript/lib/typescript.js:67027:37` |
|  +37.1% |    +6.5 MiB |  0.4% → 0.5% |   17.5 MiB → 24 MiB |   35 → 48 | `isDeeplyNestedType`            | `node_modules/typescript/lib/typescript.js:66088:32` |
|  +33.3% |    +5.5 MiB |  0.3% → 0.5% |   16.5 MiB → 22 MiB |   33 → 44 | `inferTypes`                    | `node_modules/typescript/lib/typescript.js:67205:24` |
|  +58.8% |  +5.001 MiB |  0.2% → 0.3% |  8.5 MiB → 13.5 MiB |   17 → 27 | `getConstraintOfTypeParameter`  | `node_modules/typescript/lib/typescript.js:57570:42` |
|  +23.8% |      +5 MiB |  0.4% → 0.5% |     21 MiB → 26 MiB |   42 → 52 | `splice`                        | `<unknown>`                                          |
| +166.7% |      +5 MiB |  0.1% → 0.2% |       3 MiB → 8 MiB |    6 → 16 | `checkSourceElementWorker`      | `node_modules/typescript/lib/typescript.js:84147:38` |
|  +11.4% |  +4.522 MiB |  0.8% → 0.9% |   39.5 MiB → 44 MiB |   79 → 88 | `push`                          | `<unknown>`                                          |
|  +25.0% |  +4.504 MiB |  0.4% → 0.5% |   18 MiB → 22.5 MiB |   36 → 45 | `getResolvedBaseConstraint`     | `node_modules/typescript/lib/typescript.js:57698:39` |
| +900.0% |    +4.5 MiB | <0.1% → 0.1% |     512 KiB → 5 MiB |    1 → 10 | `isWeakType`                    | `node_modules/typescript/lib/typescript.js:65912:24` |
|  +29.0% |    +4.5 MiB |  0.3% → 0.4% |   15.5 MiB → 20 MiB |   31 → 40 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js:42491:27` |

##### Third-party

|  Change |       Delta |            % |                Size |   Samples | Function                        | Location                                             |
| ------: | ----------: | -----------: | ------------------: | --------: | ------------------------------- | ---------------------------------------------------- |
|  +60.4% | +16.001 MiB |  0.5% → 0.9% | 26.5 MiB → 42.5 MiB |   53 → 85 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:56402:43` |
|  +31.5% | +14.505 MiB |  0.9% → 1.2% |   46 MiB → 60.5 MiB |  92 → 121 | `getTypeFactsWorker`            | `node_modules/typescript/lib/typescript.js:68231:32` |
|  +10.7% | +14.001 MiB |  2.7% → 3.0% |   131 MiB → 145 MiB | 262 → 290 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:64383:38` |
|   +6.2% | +10.548 MiB |  3.5% → 3.7% |   170 MiB → 180 MiB | 339 → 360 | `getFlowTypeOfReference`        | `node_modules/typescript/lib/typescript.js:68915:36` |
|  +65.6% | +10.496 MiB |  0.3% → 0.5% |   16 MiB → 26.5 MiB |   32 → 53 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js:63813:27` |
|  +52.6% |  +9.993 MiB |  0.4% → 0.6% |     19 MiB → 29 MiB |   38 → 58 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js:62289:38` |
| +360.0% |  +9.002 MiB |  0.1% → 0.2% |  2.5 MiB → 11.5 MiB |    5 → 23 | `setParentRecursive`            | `node_modules/typescript/lib/typescript.js:18640:30` |
| +180.0% |      +9 MiB |  0.1% → 0.3% |      5 MiB → 14 MiB |   10 → 28 | `addDeclarationToSymbol`        | `node_modules/typescript/lib/typescript.js:42406:36` |
| +113.3% |  +8.501 MiB |  0.2% → 0.3% |    7.5 MiB → 16 MiB |   15 → 32 | `instantiateSignature`          | `node_modules/typescript/lib/typescript.js:62067:34` |
|  +23.3% |      +7 MiB |  0.6% → 0.8% |     30 MiB → 37 MiB |   60 → 74 | `getUnmatchedProperties`        | `node_modules/typescript/lib/typescript.js:67027:37` |
|  +37.1% |    +6.5 MiB |  0.4% → 0.5% |   17.5 MiB → 24 MiB |   35 → 48 | `isDeeplyNestedType`            | `node_modules/typescript/lib/typescript.js:66088:32` |
|  +33.3% |    +5.5 MiB |  0.3% → 0.5% |   16.5 MiB → 22 MiB |   33 → 44 | `inferTypes`                    | `node_modules/typescript/lib/typescript.js:67205:24` |
|  +58.8% |  +5.001 MiB |  0.2% → 0.3% |  8.5 MiB → 13.5 MiB |   17 → 27 | `getConstraintOfTypeParameter`  | `node_modules/typescript/lib/typescript.js:57570:42` |
| +166.7% |      +5 MiB |  0.1% → 0.2% |       3 MiB → 8 MiB |    6 → 16 | `checkSourceElementWorker`      | `node_modules/typescript/lib/typescript.js:84147:38` |
|  +25.0% |  +4.504 MiB |  0.4% → 0.5% |   18 MiB → 22.5 MiB |   36 → 45 | `getResolvedBaseConstraint`     | `node_modules/typescript/lib/typescript.js:57698:39` |
| +900.0% |    +4.5 MiB | <0.1% → 0.1% |     512 KiB → 5 MiB |    1 → 10 | `isWeakType`                    | `node_modules/typescript/lib/typescript.js:65912:24` |
|  +29.0% |    +4.5 MiB |  0.3% → 0.4% |   15.5 MiB → 20 MiB |   31 → 40 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js:42491:27` |
| +700.0% |    +3.5 MiB | <0.1% → 0.1% |     512 KiB → 4 MiB |     1 → 8 | `getNonNullableType`            | `node_modules/typescript/lib/typescript.js:66487:32` |
|  +87.5% |    +3.5 MiB |  0.1% → 0.2% |     4 MiB → 7.5 MiB |    8 → 15 | `createInferenceContextWorker`  | `node_modules/typescript/lib/typescript.js:66831:42` |
|  +31.8% |    +3.5 MiB |  0.2% → 0.3% |   11 MiB → 14.5 MiB |   22 → 29 | `invokeOnce`                    | `node_modules/typescript/lib/typescript.js:67401:26` |

##### Standard library

|  Change |        Delta |            % |                Size |   Samples | Function              | Location                        |
| ------: | -----------: | -----------: | ------------------: | --------: | --------------------- | ------------------------------- |
|  +10.9% |   +7.001 MiB |  1.3% → 1.5% | 64.5 MiB → 71.5 MiB | 129 → 143 | `Map`                 | `<unknown>`                     |
|  +23.8% |       +5 MiB |  0.4% → 0.5% |     21 MiB → 26 MiB |   42 → 52 | `splice`              | `<unknown>`                     |
|  +11.4% |   +4.522 MiB |  0.8% → 0.9% |   39.5 MiB → 44 MiB |   79 → 88 | `push`                | `<unknown>`                     |
|  +66.7% |       +4 MiB |  0.1% → 0.2% |      6 MiB → 10 MiB |   12 → 20 | `join`                | `<unknown>`                     |
|   +2.7% |   +3.113 MiB |  2.3% → 2.4% |   114 MiB → 117 MiB | 213 → 223 | `set`                 | `<unknown>`                     |
|  +85.7% |       +3 MiB |         0.1% |   3.5 MiB → 6.5 MiB |    7 → 13 | `replace`             | `<unknown>`                     |
| +100.0% |     +2.5 MiB |         0.1% |     2.5 MiB → 5 MiB |    5 → 10 | `delete`              | `<unknown>`                     |
|  +31.4% |    +2.46 MiB |         0.2% | 7.85 MiB → 10.3 MiB |   15 → 19 | `toString`            | `node:buffer:903:46`            |
|     new |     +1.5 MiB | 0.0% → <0.1% |       0 B → 1.5 MiB |     0 → 3 | `getStatsFromBinding` | `node:internal/fs/utils:682:29` |
|     new | +512.015 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `wrappedFn`           | `node:internal/errors:542:21`   |
|     new | +512.015 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `toLowerCase`         | `<unknown>`                     |
|  +12.4% | +508.062 KiB |         0.1% |     4 MiB → 4.5 MiB |     8 → 9 | `Set`                 | `<unknown>`                     |
|   +0.7% |   +3.531 KiB |        <0.1% |   512 KiB → 516 KiB |         1 | `exec`                | `<unknown>`                     |
|     ~0% |        +32 B |        <0.1% |             1.5 MiB |         3 | `substring`           | `<unknown>`                     |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

| Change |       Delta |             % |                Size |       Samples | Function                       | Location                                             |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------ | ---------------------------------------------------- |
| -40.4% | -29.503 MiB |   1.5% → 0.9% |   73 MiB → 43.5 MiB |      146 → 87 | `instantiateSymbol`            | `node_modules/typescript/lib/typescript.js:62092:31` |
| -56.3% | -20.001 MiB |   0.7% → 0.3% | 35.5 MiB → 15.5 MiB |       71 → 31 | `getRelationKey`               | `node_modules/typescript/lib/typescript.js:66046:28` |
| -49.3% | -18.501 MiB |   0.8% → 0.4% |   37.5 MiB → 19 MiB |       75 → 38 | `getNormalizedType`            | `node_modules/typescript/lib/typescript.js:63479:31` |
|  -0.7% |  -16.04 MiB | 49.9% → 50.0% | 2.39 GiB → 2.37 GiB | 4,870 → 4,838 | `checkTypeRelatedTo`           | `node_modules/typescript/lib/typescript.js:63505:32` |
| -52.5% | -16.008 MiB |   0.6% → 0.3% | 30.5 MiB → 14.5 MiB |       61 → 29 | `getBaseConstraintOfType`      | `node_modules/typescript/lib/typescript.js:57685:37` |
| -64.0% | -16.002 MiB |   0.5% → 0.2% |      25 MiB → 9 MiB |       50 → 18 | `instantiateList`              | `node_modules/typescript/lib/typescript.js:61957:29` |
| -54.0% |   -13.5 MiB |   0.5% → 0.2% |   25 MiB → 11.5 MiB |       50 → 23 | `hasMatchingRecursionIdentity` | `node_modules/typescript/lib/typescript.js:66121:42` |
| -11.0% |  -11.52 MiB |   2.1% → 1.9% |  105 MiB → 93.5 MiB |     210 → 187 | `next`                         | `<unknown>`                                          |
| -26.8% | -11.001 MiB |   0.8% → 0.6% |     41 MiB → 30 MiB |       82 → 60 | `parseDelimitedList`           | `node_modules/typescript/lib/typescript.js:30707:36` |
| -80.0% | -10.003 MiB |   0.3% → 0.1% |  12.5 MiB → 2.5 MiB |        25 → 5 | `bindJSDoc`                    | `node_modules/typescript/lib/typescript.js:44028:23` |
| -41.0% |      -8 MiB |   0.4% → 0.2% | 19.5 MiB → 11.5 MiB |       39 → 23 | `scan`                         | `node_modules/typescript/lib/typescript.js:10327:18` |
| -26.3% |    -7.5 MiB |   0.6% → 0.4% |   28.5 MiB → 21 MiB |       57 → 42 | `createBaseNode`               | `node_modules/typescript/lib/typescript.js:29248:27` |
| -43.4% |   -6.51 MiB |   0.3% → 0.2% |    15 MiB → 8.5 MiB |       30 → 17 | `createObjectType`             | `node_modules/typescript/lib/typescript.js:50096:30` |
| -61.1% |    -5.5 MiB |   0.2% → 0.1% |     9 MiB → 3.5 MiB |        18 → 7 | `isConstTypeVariable`          | `node_modules/typescript/lib/typescript.js:57577:33` |
|  -4.3% |  -5.499 MiB |   2.6% → 2.5% |   127 MiB → 121 MiB |     253 → 242 | `getObjectTypeInstantiation`   | `node_modules/typescript/lib/typescript.js:62119:40` |
| -32.3% |  -5.001 MiB |   0.3% → 0.2% | 15.5 MiB → 10.5 MiB |       31 → 21 | `addWorkItem`                  | `node_modules/typescript/lib/typescript.js:28450:25` |
| -28.1% |    -4.5 MiB |   0.3% → 0.2% |   16 MiB → 11.5 MiB |       32 → 23 | `getAdjustedTypeWithFacts`     | `node_modules/typescript/lib/typescript.js:68312:38` |
| -40.0% |      -4 MiB |   0.2% → 0.1% |      10 MiB → 6 MiB |       20 → 12 | `inferFromMatchingTypes`       | `node_modules/typescript/lib/typescript.js:67429:38` |
| -43.8% |  -3.501 MiB |   0.2% → 0.1% |     8 MiB → 4.5 MiB |        16 → 9 | `get`                          | `<unknown>`                                          |
| -36.8% |    -3.5 MiB |   0.2% → 0.1% |     9.5 MiB → 6 MiB |       19 → 12 | `createSymbol`                 | `node_modules/typescript/lib/typescript.js:47280:26` |

##### Third-party

| Change |       Delta |             % |                Size |       Samples | Function                         | Location                                             |
| -----: | ----------: | ------------: | ------------------: | ------------: | -------------------------------- | ---------------------------------------------------- |
| -40.4% | -29.503 MiB |   1.5% → 0.9% |   73 MiB → 43.5 MiB |      146 → 87 | `instantiateSymbol`              | `node_modules/typescript/lib/typescript.js:62092:31` |
| -56.3% | -20.001 MiB |   0.7% → 0.3% | 35.5 MiB → 15.5 MiB |       71 → 31 | `getRelationKey`                 | `node_modules/typescript/lib/typescript.js:66046:28` |
| -49.3% | -18.501 MiB |   0.8% → 0.4% |   37.5 MiB → 19 MiB |       75 → 38 | `getNormalizedType`              | `node_modules/typescript/lib/typescript.js:63479:31` |
|  -0.7% |  -16.04 MiB | 49.9% → 50.0% | 2.39 GiB → 2.37 GiB | 4,870 → 4,838 | `checkTypeRelatedTo`             | `node_modules/typescript/lib/typescript.js:63505:32` |
| -52.5% | -16.008 MiB |   0.6% → 0.3% | 30.5 MiB → 14.5 MiB |       61 → 29 | `getBaseConstraintOfType`        | `node_modules/typescript/lib/typescript.js:57685:37` |
| -64.0% | -16.002 MiB |   0.5% → 0.2% |      25 MiB → 9 MiB |       50 → 18 | `instantiateList`                | `node_modules/typescript/lib/typescript.js:61957:29` |
| -54.0% |   -13.5 MiB |   0.5% → 0.2% |   25 MiB → 11.5 MiB |       50 → 23 | `hasMatchingRecursionIdentity`   | `node_modules/typescript/lib/typescript.js:66121:42` |
| -26.8% | -11.001 MiB |   0.8% → 0.6% |     41 MiB → 30 MiB |       82 → 60 | `parseDelimitedList`             | `node_modules/typescript/lib/typescript.js:30707:36` |
| -80.0% | -10.003 MiB |   0.3% → 0.1% |  12.5 MiB → 2.5 MiB |        25 → 5 | `bindJSDoc`                      | `node_modules/typescript/lib/typescript.js:44028:23` |
| -41.0% |      -8 MiB |   0.4% → 0.2% | 19.5 MiB → 11.5 MiB |       39 → 23 | `scan`                           | `node_modules/typescript/lib/typescript.js:10327:18` |
| -26.3% |    -7.5 MiB |   0.6% → 0.4% |   28.5 MiB → 21 MiB |       57 → 42 | `createBaseNode`                 | `node_modules/typescript/lib/typescript.js:29248:27` |
| -43.4% |   -6.51 MiB |   0.3% → 0.2% |    15 MiB → 8.5 MiB |       30 → 17 | `createObjectType`               | `node_modules/typescript/lib/typescript.js:50096:30` |
| -61.1% |    -5.5 MiB |   0.2% → 0.1% |     9 MiB → 3.5 MiB |        18 → 7 | `isConstTypeVariable`            | `node_modules/typescript/lib/typescript.js:57577:33` |
|  -4.3% |  -5.499 MiB |   2.6% → 2.5% |   127 MiB → 121 MiB |     253 → 242 | `getObjectTypeInstantiation`     | `node_modules/typescript/lib/typescript.js:62119:40` |
| -32.3% |  -5.001 MiB |   0.3% → 0.2% | 15.5 MiB → 10.5 MiB |       31 → 21 | `addWorkItem`                    | `node_modules/typescript/lib/typescript.js:28450:25` |
| -28.1% |    -4.5 MiB |   0.3% → 0.2% |   16 MiB → 11.5 MiB |       32 → 23 | `getAdjustedTypeWithFacts`       | `node_modules/typescript/lib/typescript.js:68312:38` |
| -40.0% |      -4 MiB |   0.2% → 0.1% |      10 MiB → 6 MiB |       20 → 12 | `inferFromMatchingTypes`         | `node_modules/typescript/lib/typescript.js:67429:38` |
| -36.8% |    -3.5 MiB |   0.2% → 0.1% |     9.5 MiB → 6 MiB |       19 → 12 | `createSymbol`                   | `node_modules/typescript/lib/typescript.js:47280:26` |
| -30.4% |    -3.5 MiB |          0.2% |    11.5 MiB → 8 MiB |       23 → 16 | `createTypeReference`            | `node_modules/typescript/lib/typescript.js:58882:33` |
| -70.0% |    -3.5 MiB |  0.1% → <0.1% |     5 MiB → 1.5 MiB |        10 → 3 | `getConstraintFromTypeParameter` | `node_modules/typescript/lib/typescript.js:58816:44` |

##### Standard library

|  Change |        Delta |            % |                Size |   Samples | Function                   | Location                                   |
| ------: | -----------: | -----------: | ------------------: | --------: | -------------------------- | ------------------------------------------ |
|  -11.0% |   -11.52 MiB |  2.1% → 1.9% |  105 MiB → 93.5 MiB | 210 → 187 | `next`                     | `<unknown>`                                |
|  -43.8% |   -3.501 MiB |  0.2% → 0.1% |     8 MiB → 4.5 MiB |    16 → 9 | `get`                      | `<unknown>`                                |
|  -27.8% |     -2.5 MiB |  0.2% → 0.1% |     9 MiB → 6.5 MiB |   18 → 13 | `values`                   | `<unknown>`                                |
|  -57.1% |       -2 MiB | 0.1% → <0.1% |   3.5 MiB → 1.5 MiB |     7 → 3 | `split`                    | `<unknown>`                                |
|  -21.4% |     -1.5 MiB |         0.1% |     7 MiB → 5.5 MiB |   14 → 11 | `slice`                    | `<unknown>`                                |
| removed |     -1.5 MiB | <0.1% → 0.0% |       1.5 MiB → 0 B |     3 → 0 | `Stats`                    | `node:internal/fs/utils:649:15`            |
|  -17.5% |   -1.491 MiB |  0.2% → 0.1% | 8.53 MiB → 7.04 MiB |   17 → 14 | `add`                      | `<unknown>`                                |
|  -39.7% |   -1.042 MiB | 0.1% → <0.1% | 2.62 MiB → 1.58 MiB |     5 → 3 | `wrapSafe`                 | `node:internal/modules/cjs/loader:1824:18` |
|  -22.2% |       -1 MiB |         0.1% |   4.5 MiB → 3.5 MiB |     9 → 7 | `includes`                 | `<unknown>`                                |
|  -66.7% |       -1 MiB |        <0.1% |   1.5 MiB → 512 KiB |     3 → 1 | `filter`                   | `<unknown>`                                |
|  -66.7% |       -1 MiB |        <0.1% |   1.5 MiB → 512 KiB |     3 → 1 | `compileForInternalLoader` | `node:internal/bootstrap/realm:392:27`     |
|  -50.0% | -512.046 KiB |        <0.1% |     1 MiB → 512 KiB |     2 → 1 | `map`                      | `<unknown>`                                |
| removed | -512.015 KiB | <0.1% → 0.0% |       512 KiB → 0 B |     1 → 0 | `StatsBase`                | `node:internal/fs/utils:388:19`            |
| removed | -512.015 KiB | <0.1% → 0.0% |       512 KiB → 0 B |     1 → 0 | `trimStart`                | `<unknown>`                                |
| removed | -512.015 KiB | <0.1% → 0.0% |       512 KiB → 0 B |     1 → 0 | `fromCharCode`             | `<unknown>`                                |
| removed | -512.015 KiB | <0.1% → 0.0% |       512 KiB → 0 B |     1 → 0 | `has`                      | `<unknown>`                                |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Third-party

| Change |        Delta |             % |                Size |       Samples | Function                     | Location                                              |
| -----: | -----------: | ------------: | ------------------: | ------------: | ---------------------------- | ----------------------------------------------------- |
| +28.8% | +490.827 MiB | 34.8% → 45.2% | 1.66 GiB → 2.14 GiB | 3,392 → 4,370 | `applyToParameterTypes`      | `node_modules/typescript/lib/typescript.js:66790:35`  |
| +39.7% |  +179.98 MiB |  9.3% → 13.1% |   453 MiB → 633 MiB |   902 → 1,262 | `checkPropertyAssignment`    | `node_modules/typescript/lib/typescript.js:78485:37`  |
| +14.1% | +164.558 MiB | 23.9% → 27.5% |  1.14 GiB → 1.3 GiB | 2,332 → 2,660 | `inferFromSignature`         | `node_modules/typescript/lib/typescript.js:67763:34`  |
| +48.8% |  +90.633 MiB |   3.8% → 5.7% |   186 MiB → 276 MiB |     371 → 552 | `instantiateList`            | `node_modules/typescript/lib/typescript.js:61957:29`  |
| +47.3% |  +44.034 MiB |   1.9% → 2.8% |    93 MiB → 137 MiB |     186 → 274 | `parseJSDocComment`          | `node_modules/typescript/lib/typescript.js:35022:37`  |
| +12.8% |  +27.631 MiB |   4.4% → 5.0% |   216 MiB → 244 MiB |     431 → 486 | `instantiateMappedType`      | `node_modules/typescript/lib/typescript.js:62225:35`  |
| +11.5% |   +25.78 MiB |   4.6% → 5.2% |   225 MiB → 251 MiB |     446 → 495 | `instantiateTypeWithAlias`   | `node_modules/typescript/lib/typescript.js:62337:38`  |
| +17.9% |  +25.184 MiB |   2.9% → 3.4% |   141 MiB → 166 MiB |     280 → 331 | `checkReturnStatement`       | `node_modules/typescript/lib/typescript.js:82167:34`  |
| +20.9% |  +25.159 MiB |   2.5% → 3.0% |   120 MiB → 146 MiB |     239 → 290 | `visitNodes`                 | `node_modules/typescript/lib/typescript.js:28315:22`  |
|  +5.6% |  +23.699 MiB |   8.6% → 9.2% |   421 MiB → 445 MiB |     840 → 886 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js:62119:40`  |
| +26.5% |  +22.029 MiB |   1.7% → 2.2% |    83 MiB → 105 MiB |     166 → 210 | `bindWorker`                 | `node_modules/typescript/lib/typescript.js:44063:24`  |
|  +1.2% |  +21.994 MiB | 38.7% → 39.5% | 1.85 GiB → 1.87 GiB | 3,771 → 3,816 | `checkObjectLiteral`         | `node_modules/typescript/lib/typescript.js:72103:32`  |
|  +1.2% |  +20.531 MiB | 35.2% → 35.9% |  1.68 GiB → 1.7 GiB | 3,433 → 3,477 | `runWithCancellationToken`   | `node_modules/typescript/lib/typescript.js:121587:38` |
| +44.0% |   +20.03 MiB |   0.9% → 1.4% | 45.5 MiB → 65.6 MiB |      91 → 131 | `declareSymbol`              | `node_modules/typescript/lib/typescript.js:42491:27`  |
| +17.6% |   +20.03 MiB |   2.3% → 2.8% |   114 MiB → 134 MiB |     228 → 268 | `(anonymous)`                | `node_modules/typescript/lib/typescript.js:42712:23`  |
| +16.8% |  +20.029 MiB |   2.4% → 2.9% |   119 MiB → 139 MiB |     238 → 278 | `bindSourceFile2`            | `node_modules/typescript/lib/typescript.js:42348:29`  |
| +16.8% |  +20.029 MiB |   2.4% → 2.9% |   119 MiB → 139 MiB |     238 → 278 | `bindSourceFile`             | `node_modules/typescript/lib/typescript.js:42305:26`  |
| +17.0% |  +20.029 MiB |   2.4% → 2.8% |   118 MiB → 138 MiB |     236 → 276 | `bindEach`                   | `node_modules/typescript/lib/typescript.js:42714:22`  |
| +17.0% |  +20.029 MiB |   2.4% → 2.8% |   118 MiB → 138 MiB |     236 → 276 | `bindEachFunctionsFirst`     | `node_modules/typescript/lib/typescript.js:42710:36`  |
| +17.0% |  +20.029 MiB |   2.4% → 2.8% |   118 MiB → 138 MiB |     236 → 276 | `bindChildren`               | `node_modules/typescript/lib/typescript.js:42723:26`  |

##### Standard library

|  Change |        Delta |            % |                Size |   Samples | Function          | Location                      |
| ------: | -----------: | -----------: | ------------------: | --------: | ----------------- | ----------------------------- |
|  +13.4% |   +9.565 MiB |  1.5% → 1.7% | 71.5 MiB → 81.1 MiB | 143 → 162 | `Map`             | `<unknown>`                   |
|  +23.8% |       +5 MiB |  0.4% → 0.5% |     21 MiB → 26 MiB |   42 → 52 | `splice`          | `<unknown>`                   |
|  +11.4% |   +4.522 MiB |  0.8% → 0.9% |   39.5 MiB → 44 MiB |   79 → 88 | `push`            | `<unknown>`                   |
|  +66.7% |       +4 MiB |  0.1% → 0.2% |      6 MiB → 10 MiB |   12 → 20 | `join`            | `<unknown>`                   |
|   +2.7% |   +3.113 MiB |  2.3% → 2.4% |   114 MiB → 117 MiB | 213 → 223 | `set`             | `<unknown>`                   |
| +100.0% |     +2.5 MiB |         0.1% |     2.5 MiB → 5 MiB |    5 → 10 | `delete`          | `<unknown>`                   |
| +166.6% |   +2.499 MiB | <0.1% → 0.1% |     1.5 MiB → 4 MiB |     3 → 8 | `some`            | `<unknown>`                   |
|  +31.4% |    +2.46 MiB |         0.2% | 7.85 MiB → 10.3 MiB |   15 → 19 | `toString`        | `node:buffer:903:46`          |
|  +30.8% |       +2 MiB |  0.1% → 0.2% |   6.5 MiB → 8.5 MiB |   13 → 17 | `replace`         | `<unknown>`                   |
|  +80.0% |       +2 MiB |         0.1% |   2.5 MiB → 4.5 MiB |     5 → 9 | `sort`            | `<unknown>`                   |
|     new | +512.015 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `toLowerCase`     | `<unknown>`                   |
|     new | +512.015 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `allocUnsafe`     | `node:buffer:449:42`          |
|     new | +512.015 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `tryCreateBuffer` | `node:fs:446:25`              |
|     new | +512.015 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `readFileSync`    | `node:fs:524:22`              |
|  +33.3% | +511.937 KiB |        <0.1% |     1.5 MiB → 2 MiB |     3 → 4 | `wrappedFn`       | `node:internal/errors:542:21` |
|  +12.4% | +508.062 KiB |         0.1% |     4 MiB → 4.5 MiB |     8 → 9 | `Set`             | `<unknown>`                   |
|   +0.7% |   +3.531 KiB |        <0.1% |   512 KiB → 516 KiB |         1 | `exec`            | `<unknown>`                   |
|     ~0% |        +32 B |        <0.1% |             1.5 MiB |         3 | `substring`       | `<unknown>`                   |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |       Samples | Function                                               | Location                                             |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------ | ---------------------------------------------------- |
| -19.0% | -468.406 MiB | 50.3% → 41.1% |  2.4 GiB → 1.95 GiB | 4,904 → 3,971 | `inferFromSignatures`                                  | `node_modules/typescript/lib/typescript.js:67751:35` |
| -26.9% | -135.762 MiB |  10.3% → 7.6% |   504 MiB → 369 MiB |     996 → 729 | `signatureRelatedTo`                                   | `node_modules/typescript/lib/typescript.js:65695:34` |
| -12.5% | -109.046 MiB | 17.8% → 15.7% |   869 MiB → 760 MiB | 1,733 → 1,517 | `isTypeRelatedTo`                                      | `node_modules/typescript/lib/typescript.js:63432:29` |
| -35.0% |  -71.529 MiB |   4.2% → 2.7% |   204 MiB → 133 MiB |     408 → 265 | `getVariances`                                         | `node_modules/typescript/lib/typescript.js:65930:26` |
| -37.1% |  -61.741 MiB |   3.4% → 2.2% |   167 MiB → 105 MiB |     332 → 208 | `getMappedType`                                        | `node_modules/typescript/lib/typescript.js:61986:27` |
| -42.9% |  -59.922 MiB |   2.9% → 1.6% |  140 MiB → 79.7 MiB |     278 → 158 | `getNormalizedType`                                    | `node_modules/typescript/lib/typescript.js:63479:31` |
|  -4.4% |  -49.556 MiB | 23.1% → 22.3% | 1.11 GiB → 1.06 GiB | 2,248 → 2,153 | `isRelatedTo`                                          | `node_modules/typescript/lib/typescript.js:63813:27` |
|  -1.4% |   -48.74 MiB | 70.1% → 69.7% |  3.35 GiB → 3.3 GiB | 6,832 → 6,739 | `checkTypeRelatedTo`                                   | `node_modules/typescript/lib/typescript.js:63505:32` |
|  -1.6% |   -43.77 MiB | 54.9% → 54.5% | 2.62 GiB → 2.58 GiB | 5,351 → 5,267 | `forEach`                                              | `<unknown>`                                          |
|  -1.7% |  -43.717 MiB | 51.7% → 51.3% | 2.47 GiB → 2.43 GiB | 5,046 → 4,959 | `inferFromObjectTypes`                                 | `node_modules/typescript/lib/typescript.js:67642:36` |
|  -1.7% |  -43.217 MiB | 52.3% → 51.9% |  2.5 GiB → 2.46 GiB | 5,102 → 5,016 | `invokeOnce`                                           | `node_modules/typescript/lib/typescript.js:67401:26` |
|  -1.6% |  -42.213 MiB | 53.1% → 52.7% |  2.54 GiB → 2.5 GiB | 5,184 → 5,100 | `inferFromTypes`                                       | `node_modules/typescript/lib/typescript.js:67214:30` |
|  -1.5% |  -39.229 MiB | 54.6% → 54.3% | 2.61 GiB → 2.57 GiB | 5,318 → 5,243 | `checkDeferredNodes`                                   | `node_modules/typescript/lib/typescript.js:84429:32` |
|  -1.5% |  -39.227 MiB | 54.6% → 54.3% | 2.61 GiB → 2.57 GiB | 5,319 → 5,244 | `checkDeferredNode`                                    | `node_modules/typescript/lib/typescript.js:84436:31` |
| -10.5% |  -39.198 MiB |   7.6% → 6.9% |   374 MiB → 335 MiB |     740 → 664 | `isTypeAssignableTo`                                   | `node_modules/typescript/lib/typescript.js:62552:32` |
|  -4.5% |  -38.917 MiB | 17.7% → 17.0% |   866 MiB → 827 MiB | 1,719 → 1,644 | `checkExpressionStatement`                             | `node_modules/typescript/lib/typescript.js:81306:38` |
|  -1.5% |  -38.715 MiB | 51.3% → 51.0% | 2.45 GiB → 2.42 GiB | 5,007 → 4,930 | `inferFromProperties`                                  | `node_modules/typescript/lib/typescript.js:67742:35` |
|  -1.5% |  -37.116 MiB | 49.1% → 48.8% | 2.35 GiB → 2.31 GiB | 4,793 → 4,719 | `inferFromContravariantTypesIfStrictFunctionTypes`     | `node_modules/typescript/lib/typescript.js:67461:64` |
|  -1.4% |  -36.713 MiB | 53.5% → 53.2% | 2.56 GiB → 2.52 GiB | 5,217 → 5,144 | `inferTypes`                                           | `node_modules/typescript/lib/typescript.js:67205:24` |
|  -1.4% |  -36.222 MiB | 54.5% → 54.2% | 2.61 GiB → 2.57 GiB | 5,311 → 5,242 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `node_modules/typescript/lib/typescript.js:77074:66` |

##### Third-party

| Change |        Delta |             % |                Size |       Samples | Function                                               | Location                                             |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------ | ---------------------------------------------------- |
| -19.0% | -468.406 MiB | 50.3% → 41.1% |  2.4 GiB → 1.95 GiB | 4,904 → 3,971 | `inferFromSignatures`                                  | `node_modules/typescript/lib/typescript.js:67751:35` |
| -26.9% | -135.762 MiB |  10.3% → 7.6% |   504 MiB → 369 MiB |     996 → 729 | `signatureRelatedTo`                                   | `node_modules/typescript/lib/typescript.js:65695:34` |
| -12.5% | -109.046 MiB | 17.8% → 15.7% |   869 MiB → 760 MiB | 1,733 → 1,517 | `isTypeRelatedTo`                                      | `node_modules/typescript/lib/typescript.js:63432:29` |
| -35.0% |  -71.529 MiB |   4.2% → 2.7% |   204 MiB → 133 MiB |     408 → 265 | `getVariances`                                         | `node_modules/typescript/lib/typescript.js:65930:26` |
| -37.1% |  -61.741 MiB |   3.4% → 2.2% |   167 MiB → 105 MiB |     332 → 208 | `getMappedType`                                        | `node_modules/typescript/lib/typescript.js:61986:27` |
| -42.9% |  -59.922 MiB |   2.9% → 1.6% |  140 MiB → 79.7 MiB |     278 → 158 | `getNormalizedType`                                    | `node_modules/typescript/lib/typescript.js:63479:31` |
|  -4.4% |  -49.556 MiB | 23.1% → 22.3% | 1.11 GiB → 1.06 GiB | 2,248 → 2,153 | `isRelatedTo`                                          | `node_modules/typescript/lib/typescript.js:63813:27` |
|  -1.4% |   -48.74 MiB | 70.1% → 69.7% |  3.35 GiB → 3.3 GiB | 6,832 → 6,739 | `checkTypeRelatedTo`                                   | `node_modules/typescript/lib/typescript.js:63505:32` |
|  -1.7% |  -43.717 MiB | 51.7% → 51.3% | 2.47 GiB → 2.43 GiB | 5,046 → 4,959 | `inferFromObjectTypes`                                 | `node_modules/typescript/lib/typescript.js:67642:36` |
|  -1.7% |  -43.217 MiB | 52.3% → 51.9% |  2.5 GiB → 2.46 GiB | 5,102 → 5,016 | `invokeOnce`                                           | `node_modules/typescript/lib/typescript.js:67401:26` |
|  -1.6% |  -42.213 MiB | 53.1% → 52.7% |  2.54 GiB → 2.5 GiB | 5,184 → 5,100 | `inferFromTypes`                                       | `node_modules/typescript/lib/typescript.js:67214:30` |
|  -1.5% |  -39.229 MiB | 54.6% → 54.3% | 2.61 GiB → 2.57 GiB | 5,318 → 5,243 | `checkDeferredNodes`                                   | `node_modules/typescript/lib/typescript.js:84429:32` |
|  -1.5% |  -39.227 MiB | 54.6% → 54.3% | 2.61 GiB → 2.57 GiB | 5,319 → 5,244 | `checkDeferredNode`                                    | `node_modules/typescript/lib/typescript.js:84436:31` |
| -10.5% |  -39.198 MiB |   7.6% → 6.9% |   374 MiB → 335 MiB |     740 → 664 | `isTypeAssignableTo`                                   | `node_modules/typescript/lib/typescript.js:62552:32` |
|  -4.5% |  -38.917 MiB | 17.7% → 17.0% |   866 MiB → 827 MiB | 1,719 → 1,644 | `checkExpressionStatement`                             | `node_modules/typescript/lib/typescript.js:81306:38` |
|  -1.5% |  -38.715 MiB | 51.3% → 51.0% | 2.45 GiB → 2.42 GiB | 5,007 → 4,930 | `inferFromProperties`                                  | `node_modules/typescript/lib/typescript.js:67742:35` |
|  -1.5% |  -37.116 MiB | 49.1% → 48.8% | 2.35 GiB → 2.31 GiB | 4,793 → 4,719 | `inferFromContravariantTypesIfStrictFunctionTypes`     | `node_modules/typescript/lib/typescript.js:67461:64` |
|  -1.4% |  -36.713 MiB | 53.5% → 53.2% | 2.56 GiB → 2.52 GiB | 5,217 → 5,144 | `inferTypes`                                           | `node_modules/typescript/lib/typescript.js:67205:24` |
|  -1.4% |  -36.222 MiB | 54.5% → 54.2% | 2.61 GiB → 2.57 GiB | 5,311 → 5,242 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `node_modules/typescript/lib/typescript.js:77074:66` |
|  -5.1% |  -35.925 MiB | 14.3% → 13.7% |   699 MiB → 663 MiB | 1,394 → 1,322 | `checkPropertyAccessExpression`                        | `node_modules/typescript/lib/typescript.js:73074:43` |

##### Standard library

|  Change |       Delta |             % |                Size |       Samples | Function                    | Location                                   |
| ------: | ----------: | ------------: | ------------------: | ------------: | --------------------------- | ------------------------------------------ |
|   -1.6% |  -43.77 MiB | 54.9% → 54.5% | 2.62 GiB → 2.58 GiB | 5,351 → 5,267 | `forEach`                   | `<unknown>`                                |
|   -0.4% | -19.774 MiB | 97.1% → 97.6% | 4.64 GiB → 4.62 GiB | 9,464 → 9,428 | `processTicksAndRejections` | `node:internal/process/task_queues:72:35`  |
|  -10.6% | -14.023 MiB |   2.7% → 2.4% |   132 MiB → 118 MiB |     264 → 236 | `next`                      | `<unknown>`                                |
|  -38.3% |  -5.062 MiB |   0.3% → 0.2% | 13.2 MiB → 8.17 MiB |       26 → 16 | `(anonymous)`               | `node:internal/modules/cjs/loader:1885:37` |
|  -38.3% |  -5.062 MiB |   0.3% → 0.2% | 13.2 MiB → 8.17 MiB |       26 → 16 | `(anonymous)`               | `node:internal/modules/cjs/loader:2030:37` |
|  -38.3% |  -5.062 MiB |   0.3% → 0.2% | 13.2 MiB → 8.17 MiB |       26 → 16 | `(anonymous)`               | `node:internal/modules/cjs/loader:1641:33` |
|  -38.3% |  -5.062 MiB |   0.3% → 0.2% | 13.2 MiB → 8.17 MiB |       26 → 16 | `(anonymous)`               | `node:internal/modules/cjs/loader:1319:24` |
|  -38.3% |  -5.062 MiB |   0.3% → 0.2% | 13.2 MiB → 8.17 MiB |       26 → 16 | `(anonymous)`               | `node:internal/modules/cjs/loader:1671:36` |
|  -38.3% |  -5.062 MiB |   0.3% → 0.2% | 13.2 MiB → 8.17 MiB |       26 → 16 | `wrapModuleLoad`            | `node:internal/modules/cjs/loader:244:24`  |
|  -38.3% |  -5.062 MiB |   0.3% → 0.2% | 13.2 MiB → 8.17 MiB |       26 → 16 | `require`                   | `node:internal/modules/helpers:195:19`     |
|  -43.8% |  -3.501 MiB |   0.2% → 0.1% |     8 MiB → 4.5 MiB |        16 → 9 | `get`                       | `<unknown>`                                |
|  -27.8% |    -2.5 MiB |   0.2% → 0.1% |     9 MiB → 6.5 MiB |       18 → 13 | `values`                    | `<unknown>`                                |
|  -57.1% |      -2 MiB |  0.1% → <0.1% |   3.5 MiB → 1.5 MiB |         7 → 3 | `split`                     | `<unknown>`                                |
| removed |      -2 MiB |  <0.1% → 0.0% |         2 MiB → 0 B |         4 → 0 | `Stats`                     | `node:internal/fs/utils:649:15`            |
|  -75.0% |    -1.5 MiB |         <0.1% |     2 MiB → 512 KiB |         4 → 1 | `filter`                    | `<unknown>`                                |
|  -21.4% |    -1.5 MiB |          0.1% |     7 MiB → 5.5 MiB |       14 → 11 | `slice`                     | `<unknown>`                                |
|  -17.5% |  -1.491 MiB |   0.2% → 0.1% | 8.53 MiB → 7.04 MiB |       17 → 14 | `add`                       | `<unknown>`                                |
|  -39.7% |  -1.042 MiB |  0.1% → <0.1% | 2.62 MiB → 1.58 MiB |         5 → 3 | `wrapSafe`                  | `node:internal/modules/cjs/loader:1824:18` |
|  -22.2% |      -1 MiB |          0.1% |   4.5 MiB → 3.5 MiB |         9 → 7 | `includes`                  | `<unknown>`                                |
|  -66.7% |      -1 MiB |         <0.1% |   1.5 MiB → 512 KiB |         3 → 1 | `compileForInternalLoader`  | `node:internal/bootstrap/realm:392:27`     |

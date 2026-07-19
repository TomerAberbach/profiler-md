# CPU profile diff

Took 5.58s (-1.76ms, ~0%) over 4,237 samples → 4,226 samples (1.3ms per sample).

| Category    | Change |    Delta |             % |              Time |       Samples |
| ----------- | -----: | -------: | ------------: | ----------------: | ------------: |
| third-party |  -1.2% | -60.10ms | 92.7% → 91.7% |     5.17s → 5.11s | 3,933 → 3,906 |
| stdlib      | +14.1% | +57.18ms |   7.3% → 8.3% | 406.3ms → 463.5ms |     304 → 319 |
| unknown     |    new |  +1.16ms |  0.0% → <0.1% |       0ms → 1.2ms |         0 → 1 |

Hidden functions account for 100.0% of time spent, so the hottest are also shown.

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|   Change |    Delta |            % |              Time |   Samples | Function                     | Location                                                                                  |
| -------: | -------: | -----------: | ----------------: | --------: | ---------------------------- | ----------------------------------------------------------------------------------------- |
| +4221.9% | +62.15ms | <0.1% → 1.1% |    1.5ms → 63.6ms |    1 → 10 | `toString`                   | `<unknown>`                                                                               |
|    +8.2% | +18.22ms |  4.0% → 4.3% | 222.4ms → 240.6ms | 160 → 173 | `checkTypeRelatedTo`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
|   +52.7% | +15.77ms |  0.5% → 0.8% |   29.9ms → 45.7ms |   23 → 34 | `isFreshLiteralType`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61377:36`  |
|   +13.3% | +15.42ms |  2.1% → 2.3% | 115.5ms → 131.0ms |  88 → 104 | `getObjectTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`  |
|   +36.9% | +15.14ms |  0.7% → 1.0% |   41.0ms → 56.2ms |   32 → 43 | `getIdentifierToken`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36`  |
|   +13.2% |  +7.70ms |  1.0% → 1.2% |   58.5ms → 66.2ms |   44 → 49 | `getReducedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`  |
|    +5.9% |  +6.89ms |  2.1% → 2.2% | 117.7ms → 124.6ms |   92 → 97 | `concat`                     | `<unknown>`                                                                               |
|    +4.9% |  +2.71ms |         1.0% |   55.8ms → 58.5ms |   44 → 46 | `getNormalizedType`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`  |
|      new |  +1.16ms | 0.0% → <0.1% |       0ms → 1.2ms |     0 → 1 | `(unknown)`                  | `<unknown>`                                                                               |
|      new |  +1.06ms | 0.0% → <0.1% |       0ms → 1.1ms |     0 → 1 | `createProgram`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |              Time |   Samples | Function                           | Location                                                                                  |
| ------: | -------: | -----------: | ----------------: | --------: | ---------------------------------- | ----------------------------------------------------------------------------------------- |
|  -83.1% | -48.24ms |  1.0% → 0.2% |    58.0ms → 9.8ms |     8 → 7 | `NodeObject`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:159367:28` |
|  -24.0% | -17.70ms |  1.3% → 1.0% |   73.9ms → 56.2ms |   56 → 45 | `structuredTypeRelatedToWorker`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`  |
|  -32.5% | -16.17ms |  0.9% → 0.6% |   49.8ms → 33.6ms |   37 → 20 | `map`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`    |
|  -13.8% | -11.98ms |  1.6% → 1.3% |   86.8ms → 74.8ms |   66 → 57 | `getTypeListId`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`  |
|   -5.1% |  -9.39ms |  3.3% → 3.1% | 184.7ms → 175.3ms | 142 → 135 | `recursiveTypeRelatedTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
|  -14.5% |  -8.96ms |  1.1% → 0.9% |   61.7ms → 52.8ms |   47 → 41 | `getRelationKey`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`  |
|  -16.2% |  -7.79ms |  0.9% → 0.7% |   48.1ms → 40.4ms |   36 → 31 | `couldContainTypeVariables`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43`  |
|   -4.2% |  -5.92ms |  2.5% → 2.4% | 140.0ms → 134.1ms | 108 → 104 | `getObjectFlags`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28`  |
|   -9.5% |  -4.83ms |  0.9% → 0.8% |   50.8ms → 45.9ms |   39 → 36 | `step`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`     |
|   -5.5% |  -3.77ms |         1.2% |   68.8ms → 65.1ms |   52 → 51 | `getApparentType`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33`  |
|   -2.2% |  -2.38ms |         1.9% | 107.5ms → 105.1ms |   84 → 83 | `isRelatedTo`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
|   -3.4% |  -1.96ms |         1.0% |   58.4ms → 56.4ms |   45 → 43 | `anonymous`                        | `<unknown>`                                                                               |
| removed |  -1.24ms | <0.1% → 0.0% |       1.2ms → 0ms |     1 → 0 | `parseJsonConfigFileContentWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46`  |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|   Change |    Delta |             % |              Time |       Samples | Function                           | Location                                                                                  |
| -------: | -------: | ------------: | ----------------: | ------------: | ---------------------------------- | ----------------------------------------------------------------------------------------- |
|    +3.3% | +82.63ms | 44.9% → 46.4% |     2.50s → 2.59s | 1,916 → 1,965 | `checkTypeRelatedTo`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
|    +3.3% | +66.11ms | 36.2% → 37.4% |     2.02s → 2.08s | 1,561 → 1,583 | `recursiveTypeRelatedTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
|    +3.0% | +62.44ms | 37.7% → 38.8% |     2.10s → 2.16s | 1,614 → 1,645 | `isRelatedTo`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
| +4221.9% | +62.15ms |  <0.1% → 1.1% |    1.5ms → 63.6ms |        1 → 10 | `toString`                         | `<unknown>`                                                                               |
|    +3.2% | +57.83ms | 32.3% → 33.3% |     1.80s → 1.86s | 1,392 → 1,411 | `structuredTypeRelatedToWorker`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`  |
|   +18.1% | +53.81ms |   5.3% → 6.3% | 297.0ms → 350.8ms |     218 → 257 | `getNormalizedType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`  |
|   +10.2% | +33.48ms |   5.9% → 6.5% | 329.1ms → 362.6ms |     240 → 263 | `getReducedType`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`  |
|   +11.7% | +21.59ms |   3.3% → 3.7% | 184.9ms → 206.5ms |     143 → 159 | `getRelationKey`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`  |
|   +52.7% | +15.77ms |   0.5% → 0.8% |   29.9ms → 45.7ms |       23 → 34 | `isFreshLiteralType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61377:36`  |
|   +36.9% | +15.14ms |   0.7% → 1.0% |   41.0ms → 56.2ms |       32 → 43 | `getIdentifierToken`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36`  |
|    +8.5% | +10.53ms |   2.2% → 2.4% | 123.3ms → 133.8ms |      95 → 104 | `step`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`     |
|    +4.4% |  +8.77ms |   3.6% → 3.8% | 201.2ms → 210.0ms |     156 → 162 | `getApparentType`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33`  |
|    +1.1% |  +8.32ms | 13.3% → 13.5% | 744.9ms → 753.2ms |     529 → 535 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|    +5.9% |  +6.89ms |   2.1% → 2.2% | 117.7ms → 124.6ms |       92 → 97 | `concat`                           | `<unknown>`                                                                               |
|   +11.3% |  +5.38ms |          0.9% |   47.7ms → 53.0ms |       37 → 40 | `forEachAncestorDirectory`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6613:38`   |
|      new |  +2.50ms |  0.0% → <0.1% |       0ms → 2.5ms |         0 → 2 | `(unknown)`                        | `<unknown>`                                                                               |
|  +146.7% |  +2.12ms |  <0.1% → 0.1% |     1.4ms → 3.6ms |         1 → 3 | `getParsedCommandLineOfConfigFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |
|    +1.0% |  +0.74ms |          1.4% |   76.5ms → 77.3ms |            59 | `bound require`                    | `<unknown>`                                                                               |
|    +1.9% |  +0.71ms |          0.7% |   37.9ms → 38.6ms |       30 → 31 | `parseJsonConfigFileContentWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46`  |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |    Delta |             % |              Time |       Samples | Function                     | Location                                                                                  |
| -----: | -------: | ------------: | ----------------: | ------------: | ---------------------------- | ----------------------------------------------------------------------------------------- |
| -83.1% | -48.24ms |   1.0% → 0.2% |    58.0ms → 9.8ms |         8 → 7 | `NodeObject`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:159367:28` |
|  -6.8% | -33.33ms |   8.8% → 8.2% | 490.4ms → 457.1ms |     376 → 344 | `map`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`    |
|  -0.3% | -16.03ms | 84.4% → 84.1% |     4.71s → 4.69s | 3,609 → 3,587 | `getDiagnosticsHelper`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
|  -2.1% | -14.09ms | 12.0% → 11.7% | 670.0ms → 655.9ms |     516 → 496 | `getObjectTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`  |
| -13.8% | -11.98ms |   1.6% → 1.3% |   86.8ms → 74.8ms |       66 → 57 | `getTypeListId`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`  |
| -15.9% | -11.75ms |   1.3% → 1.1% |   73.9ms → 62.1ms |       57 → 48 | `couldContainTypeVariables`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43`  |
|  -0.1% |  -6.66ms | 99.8% → 99.7% |             5.57s | 4,230 → 4,215 | `typeCheckProject`           | `tsc-workload.mjs:3:33`                                                                   |
|  -4.2% |  -5.92ms |   2.5% → 2.4% | 140.0ms → 134.1ms |     108 → 104 | `getObjectFlags`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28`  |
|  -0.8% |  -0.67ms |          1.5% |   81.9ms → 81.2ms |       63 → 62 | `anonymous`                  | `<unknown>`                                                                               |

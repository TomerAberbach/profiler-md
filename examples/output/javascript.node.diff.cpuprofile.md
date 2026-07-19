# CPU profile diff

Took 2.49s → 2.69s (+191.17ms, +7.6%) over 2,659 samples → 3,134 samples (939.9µs → 858.4µs per sample).

| Category          |  Change |     Delta |             % |              Time |       Samples |
| ----------------- | ------: | --------: | ------------: | ----------------: | ------------: |
| third-party       |   +9.1% | +199.54ms | 87.4% → 88.6% |     2.18s → 2.38s | 2,410 → 2,890 |
| garbage collector |   -7.3% |  -13.91ms |   7.6% → 6.6% | 191.0ms → 177.0ms |     156 → 144 |
| stdlib            |   +5.1% |   +6.04ms |   4.8% → 4.7% | 119.5ms → 125.5ms |       88 → 94 |
| regexp            |  +32.2% |   +0.79ms |          0.1% |     2.5ms → 3.3ms |         2 → 3 |
| program           |  -49.4% |   -0.04ms |         <0.1% |    0.1ms → 42.0µs |         2 → 3 |
| ours              | removed |   -1.25ms |   0.1% → 0.0% |       1.3ms → 0ms |         1 → 0 |

Hidden functions account for 92.9% of time spent, so the hottest are also shown.

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |          Time | Samples | Function                                    | Location                                                                                  |
| ------: | -------: | -----------: | ------------: | ------: | ------------------------------------------- | ----------------------------------------------------------------------------------------- |
|     new | +80.58ms |  0.0% → 3.0% |  0ms → 80.6ms | 0 → 106 | `isRelatedTo`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
|     new | +78.71ms |  0.0% → 2.9% |  0ms → 78.7ms |  0 → 83 | `recursiveTypeRelatedTo`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
|     new | +59.00ms |  0.0% → 2.2% |  0ms → 59.0ms |  0 → 51 | `checkTypeRelatedTo`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
|     new | +44.25ms |  0.0% → 1.6% |  0ms → 44.3ms |  0 → 48 | `instantiateTypeWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`  |
|     new | +42.42ms |  0.0% → 1.6% |  0ms → 42.4ms |  0 → 39 | `getObjectTypeInstantiation`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`  |
|     new | +37.12ms |  0.0% → 1.4% |  0ms → 37.1ms |  0 → 36 | `getNormalizedType`                         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`  |
|     new | +28.37ms |  0.0% → 1.1% |  0ms → 28.4ms |  0 → 27 | `scan`                                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`  |
|     new | +28.29ms |  0.0% → 1.1% |  0ms → 28.3ms |  0 → 23 | `getRelationKey`                            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`  |
|     new | +26.17ms |  0.0% → 1.0% |  0ms → 26.2ms |  0 → 26 | `createUnionOrIntersectionProperty`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`  |
|     new | +22.79ms |  0.0% → 0.8% |  0ms → 22.8ms |  0 → 21 | `isTypeRelatedTo`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`  |
|     new | +22.08ms |  0.0% → 0.8% |  0ms → 22.1ms |  0 → 22 | `compareSignaturesRelated`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42`  |
| +160.0% |  +2.00ms |         0.1% | 1.3ms → 3.3ms |   1 → 3 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)` | `<unknown>`                                                                               |
|     new |  +1.29ms | 0.0% → <0.1% |   0ms → 1.3ms |   0 → 1 | `createProgram`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |              Time |   Samples | Function                                        | Location                                              |
| ------: | -------: | -----------: | ----------------: | --------: | ----------------------------------------------- | ----------------------------------------------------- |
| removed | -68.96ms |  2.8% → 0.0% |      69.0ms → 0ms |    66 → 0 | `recursiveTypeRelatedTo`                        | `node_modules/typescript/lib/typescript.js:64383:38`  |
| removed | -63.00ms |  2.5% → 0.0% |      63.0ms → 0ms |    66 → 0 | `isRelatedTo`                                   | `node_modules/typescript/lib/typescript.js:63813:27`  |
| removed | -51.71ms |  2.1% → 0.0% |      51.7ms → 0ms |    43 → 0 | `checkTypeRelatedTo`                            | `node_modules/typescript/lib/typescript.js:63505:32`  |
| removed | -42.54ms |  1.7% → 0.0% |      42.5ms → 0ms |    39 → 0 | `scan`                                          | `node_modules/typescript/lib/typescript.js:10327:18`  |
| removed | -35.08ms |  1.4% → 0.0% |      35.1ms → 0ms |    35 → 0 | `getObjectTypeInstantiation`                    | `node_modules/typescript/lib/typescript.js:62119:40`  |
| removed | -28.33ms |  1.1% → 0.0% |      28.3ms → 0ms |    32 → 0 | `instantiateTypeWorker`                         | `node_modules/typescript/lib/typescript.js:62354:35`  |
| removed | -25.87ms |  1.0% → 0.0% |      25.9ms → 0ms |    30 → 0 | `bind`                                          | `node_modules/typescript/lib/typescript.js:44000:18`  |
| removed | -21.46ms |  0.9% → 0.0% |      21.5ms → 0ms |    23 → 0 | `getNormalizedType`                             | `node_modules/typescript/lib/typescript.js:63479:31`  |
|   -7.3% | -13.91ms |  7.6% → 6.6% | 191.0ms → 177.0ms | 156 → 144 | `(garbage collector)`                           | `<unknown>`                                           |
| removed |  -1.25ms |  0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `typeCheckProject`                              | `tsc-workload.mjs:3:33`                               |
| removed |  -1.25ms |  0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `createProgram`                                 | `node_modules/typescript/lib/typescript.js:120478:25` |
| removed |  -1.21ms | <0.1% → 0.0% |       1.2ms → 0ms |     1 → 0 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+` | `<unknown>`                                           |
|   -3.3% |  -0.33ms |         0.4% |    10.1ms → 9.8ms |         1 | `post`                                          | `node:inspector:118:7`                                |
|   -0.1% |  -0.04ms |  2.9% → 2.7% |            71.5ms |        57 | `wrapSafe`                                      | `node:internal/modules/cjs/loader:1671:18`            |
|  -49.4% |  -0.04ms |        <0.1% |    0.1ms → 42.0µs |     2 → 3 | `(program)`                                     | `<unknown>`                                           |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |     Delta |             % |            Time |       Samples | Function                                    | Location                                                                                  |
| ------: | --------: | ------------: | --------------: | ------------: | ------------------------------------------- | ----------------------------------------------------------------------------------------- |
|     new |   +1.969s |  0.0% → 73.2% |     0ms → 1.96s |     0 → 2,479 | `getSemanticDiagnostics`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
|     new | +969.41ms |  0.0% → 36.0% |   0ms → 969.4ms |     0 → 1,277 | `checkTypeRelatedTo`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
|     new | +912.75ms |  0.0% → 33.9% |   0ms → 912.7ms |     0 → 1,227 | `isRelatedTo`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
|     new | +795.87ms |  0.0% → 29.6% |   0ms → 795.9ms |       0 → 809 | `isTypeRelatedTo`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`  |
|     new | +785.21ms |  0.0% → 29.2% |   0ms → 785.2ms |     0 → 1,068 | `recursiveTypeRelatedTo`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
|     new | +521.75ms |  0.0% → 19.4% |   0ms → 521.7ms |       0 → 549 | `compareSignaturesRelated`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42`  |
|     new | +509.30ms |  0.0% → 18.9% |   0ms → 509.3ms |       0 → 525 | `instantiateTypeWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`  |
|     new | +377.75ms |  0.0% → 14.0% |   0ms → 377.8ms |       0 → 366 | `createProgram`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|     new | +225.92ms |   0.0% → 8.4% |   0ms → 225.9ms |       0 → 225 | `getObjectTypeInstantiation`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`  |
|   +8.6% | +195.58ms | 90.9% → 91.7% |   2.27s → 2.46s | 2,459 → 2,935 | `(anonymous)`                               | `cpuprofile-run.mjs`                                                                      |
|   +8.6% | +195.41ms | 90.5% → 91.3% |   2.26s → 2.45s | 2,458 → 2,933 | `typeCheckProject`                          | `tsc-workload.mjs:3:33`                                                                   |
|     new | +113.79ms |   0.0% → 4.2% |   0ms → 113.8ms |       0 → 124 | `getNormalizedType`                         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`  |
|     new |  +75.08ms |   0.0% → 2.8% |    0ms → 75.1ms |        0 → 81 | `createUnionOrIntersectionProperty`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`  |
|     new |  +41.58ms |   0.0% → 1.5% |    0ms → 41.6ms |        0 → 39 | `scan`                                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`  |
|     new |  +37.58ms |   0.0% → 1.4% |    0ms → 37.6ms |        0 → 31 | `getRelationKey`                            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`  |
|     new |  +11.25ms |   0.0% → 0.4% |    0ms → 11.3ms |         0 → 9 | `getParsedCommandLineOfConfigFile`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |
| +160.0% |   +2.00ms |          0.1% |   1.3ms → 3.3ms |         1 → 3 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)` | `<unknown>`                                                                               |
|   +1.6% |   +0.17ms |          0.4% | 10.1ms → 10.3ms |         1 → 2 | `post`                                      | `node:inspector:118:7`                                                                    |
|   +1.6% |   +0.17ms |          0.4% | 10.1ms → 10.3ms |         1 → 2 | `(anonymous)`                               | `cpuprofile-run.mjs:16:15`                                                                |
|   +1.6% |   +0.17ms |          0.4% | 10.1ms → 10.3ms |         1 → 2 | `post`                                      | `cpuprofile-run.mjs:15:14`                                                                |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |     Delta |            % |              Time |   Samples | Function                                        | Location                                              |
| ------: | --------: | -----------: | ----------------: | --------: | ----------------------------------------------- | ----------------------------------------------------- |
| removed |   -1.771s | 70.9% → 0.0% |       1.77s → 0ms | 2,003 → 0 | `getSemanticDiagnostics`                        | `node_modules/typescript/lib/typescript.js:121549:36` |
| removed | -736.08ms | 29.5% → 0.0% |     736.1ms → 0ms |   769 → 0 | `checkTypeRelatedTo`                            | `node_modules/typescript/lib/typescript.js:63505:32`  |
| removed | -689.08ms | 27.6% → 0.0% |     689.1ms → 0ms |   729 → 0 | `isRelatedTo`                                   | `node_modules/typescript/lib/typescript.js:63813:27`  |
| removed | -595.84ms | 23.8% → 0.0% |     595.8ms → 0ms |   638 → 0 | `recursiveTypeRelatedTo`                        | `node_modules/typescript/lib/typescript.js:64383:38`  |
| removed | -406.92ms | 16.3% → 0.0% |     406.9ms → 0ms |   442 → 0 | `instantiateTypeWorker`                         | `node_modules/typescript/lib/typescript.js:62354:35`  |
| removed | -374.17ms | 15.0% → 0.0% |     374.2ms → 0ms |   362 → 0 | `createProgram`                                 | `node_modules/typescript/lib/typescript.js:120478:25` |
| removed | -217.00ms |  8.7% → 0.0% |     217.0ms → 0ms |   248 → 0 | `getObjectTypeInstantiation`                    | `node_modules/typescript/lib/typescript.js:62119:40`  |
| removed | -163.46ms |  6.5% → 0.0% |     163.5ms → 0ms |   250 → 0 | `bind`                                          | `node_modules/typescript/lib/typescript.js:44000:18`  |
| removed | -113.92ms |  4.6% → 0.0% |     113.9ms → 0ms |   121 → 0 | `getNormalizedType`                             | `node_modules/typescript/lib/typescript.js:63479:31`  |
| removed |  -66.63ms |  2.7% → 0.0% |      66.6ms → 0ms |    60 → 0 | `scan`                                          | `node_modules/typescript/lib/typescript.js:10327:18`  |
|   -7.3% |  -13.91ms |  7.6% → 6.6% | 191.0ms → 177.0ms | 156 → 144 | `(garbage collector)`                           | `<unknown>`                                           |
| removed |  -11.17ms |  0.4% → 0.0% |      11.2ms → 0ms |     9 → 0 | `getParsedCommandLineOfConfigFile`              | `node_modules/typescript/lib/typescript.js:36594:44`  |
|   -3.6% |   -3.75ms |  4.2% → 3.7% | 104.0ms → 100.3ms |   83 → 80 | `require`                                       | `node:internal/modules/helpers:146:19`                |
| removed |   -1.21ms | <0.1% → 0.0% |       1.2ms → 0ms |     1 → 0 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+` | `<unknown>`                                           |
|   -0.1% |   -0.04ms |  2.9% → 2.7% |            71.5ms |        57 | `wrapSafe`                                      | `node:internal/modules/cjs/loader:1671:18`            |
|  -49.4% |   -0.04ms |        <0.1% |    0.1ms → 42.0µs |     2 → 3 | `(program)`                                     | `<unknown>`                                           |

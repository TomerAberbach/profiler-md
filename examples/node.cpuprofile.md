# CPU profile

Took 6.17s over 47,806 samples (129.2µs per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| ours              | 91.0% |   5.62s |  43,522 |
| regexp            |  2.1% | 127.4ms |     987 |
| native            |  2.0% | 124.6ms |     961 |
| garbage collector |  1.7% | 106.3ms |     814 |
| program           |  1.7% | 104.4ms |     816 |
| third-party       |  1.5% |  90.2ms |     691 |
| idle              |  0.0% |   3.0ms |      15 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                         | Location                                                                                                 |
| ----: | ------: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 15.6% | 966.3ms |   7,479 | `traverseObject`                                 | uneval/src/index.ts:204:26                                                                               |
| 15.0% | 926.9ms |   7,175 | `unevalObjectLike`                               | uneval/src/internal/object.ts:103:26                                                                     |
|  8.5% | 527.0ms |   4,083 | `unevalObjectInternal`                           | uneval/src/internal/object.ts:68:30                                                                      |
|  8.5% | 524.1ms |   4,059 | `unevalWithoutCustom`                            | uneval/src/internal/index.ts:14:37                                                                       |
|  8.4% | 517.7ms |   4,010 | `unevalLiteral`                                  | uneval/src/internal/primitive.ts:139:23                                                                  |
|  6.6% | 404.6ms |   3,129 | `unevalNumber`                                   | uneval/src/internal/primitive.ts:12:29                                                                   |
|  6.0% | 372.6ms |   2,887 | `traverse`                                       | uneval/src/index.ts:164:20                                                                               |
|  5.8% | 359.6ms |   2,784 | `unevalArray`                                    | uneval/src/internal/collection.ts:7:47                                                                   |
|  4.3% | 266.6ms |   2,064 | `unevalInternal`                                 | uneval/src/internal/index.ts:25:32                                                                       |
|  3.5% | 217.0ms |   1,681 | `getType`                                        | uneval/src/internal/type.ts:4:24                                                                         |
|  2.7% | 165.8ms |   1,288 | `unevalObjectLiteralKey`                         | uneval/src/internal/object.ts:384:32                                                                     |
|  2.5% | 154.6ms |   1,196 | `createState`                                    | uneval/src/index.ts:144:21                                                                               |
|  2.1% | 127.4ms |     987 | `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` | `<native>`                                                                                               |
|  1.7% | 106.3ms |     814 | `(garbage collector)`                            | `<native>`                                                                                               |
|  1.7% | 104.4ms |     816 | `(program)`                                      | `<native>`                                                                                               |
|  0.9% |  53.3ms |     411 | `unevalString`                                   | uneval/src/internal/primitive.ts:133:29                                                                  |
|  0.7% |  44.8ms |     348 | `unevalObject`                                   | uneval/src/internal/object.ts:20:29                                                                      |
|  0.7% |  40.9ms |     317 | `uneval`                                         | uneval/src/index.ts:75:16                                                                                |
|  0.6% |  39.5ms |     306 | `isObject`                                       | uneval/src/internal/object.ts:434:25                                                                     |
|  0.3% |  20.5ms |     157 | `uniformIntInternal`                             | uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:7:28 |

#### Lines

Lines ranked by contribution to each function's self time.

##### `traverseObject` (uneval/src/index.ts:204:26)

|     % |    Time | Samples | Location                |
| ----: | ------: | ------: | ----------------------- |
| 44.8% | 433.1ms |   3,352 | uneval/src/index.ts:210 |
| 21.4% | 206.3ms |   1,597 | uneval/src/index.ts:219 |
| 11.2% | 108.1ms |     837 | uneval/src/index.ts:245 |
|  8.2% |  78.9ms |     611 | uneval/src/index.ts:208 |
|  3.5% |  33.5ms |     259 | uneval/src/index.ts:248 |

##### `unevalObjectLike` (uneval/src/internal/object.ts:103:26)

|     % |    Time | Samples | Location                          |
| ----: | ------: | ------: | --------------------------------- |
| 42.3% | 392.4ms |   3,037 | uneval/src/internal/object.ts:201 |
| 29.3% | 271.6ms |   2,102 | uneval/src/internal/object.ts:128 |
|  8.9% |  82.1ms |     635 | uneval/src/internal/object.ts:138 |
|  5.4% |  49.7ms |     385 | uneval/src/internal/object.ts:142 |
|  3.3% |  30.4ms |     235 | uneval/src/internal/object.ts:112 |

##### `unevalObjectInternal` (uneval/src/internal/object.ts:68:30)

|     % |    Time | Samples | Location                         |
| ----: | ------: | ------: | -------------------------------- |
| 50.8% | 267.7ms |   2,074 | uneval/src/internal/object.ts:78 |
| 38.5% | 202.9ms |   1,572 | uneval/src/internal/object.ts:77 |
|  5.5% |  29.1ms |     225 | uneval/src/internal/object.ts:74 |
|  2.4% |  12.8ms |      99 | uneval/src/internal/object.ts:69 |
|  1.6% |   8.4ms |      65 | uneval/src/internal/object.ts:75 |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37)

|      % |    Time | Samples | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 524.1ms |   4,059 | uneval/src/internal/index.ts:17 |

##### `unevalLiteral` (uneval/src/internal/primitive.ts:139:23)

|     % |    Time | Samples | Location                             |
| ----: | ------: | ------: | ------------------------------------ |
| 27.7% | 143.6ms |   1,112 | uneval/src/internal/primitive.ts:146 |
| 20.6% | 106.5ms |     825 | uneval/src/internal/primitive.ts:148 |
| 14.0% |  72.7ms |     563 | uneval/src/internal/primitive.ts:149 |
| 12.5% |  64.6ms |     500 | uneval/src/internal/primitive.ts:147 |
| 11.3% |  58.4ms |     452 | uneval/src/internal/primitive.ts:155 |

##### `unevalNumber` (uneval/src/internal/primitive.ts:12:29)

|     % |    Time | Samples | Location                            |
| ----: | ------: | ------: | ----------------------------------- |
| 94.9% | 384.0ms |   2,969 | uneval/src/internal/primitive.ts:22 |
|  3.0% |  12.2ms |      94 | uneval/src/internal/primitive.ts:27 |
|  1.0% |   3.9ms |      30 | uneval/src/internal/primitive.ts:13 |
|  0.5% |   2.1ms |      16 | uneval/src/internal/primitive.ts:17 |
|  0.5% |   1.9ms |      15 | uneval/src/internal/primitive.ts:15 |

##### `traverse` (uneval/src/index.ts:164:20)

|     % |    Time | Samples | Location                |
| ----: | ------: | ------: | ----------------------- |
| 30.7% | 114.5ms |     888 | uneval/src/index.ts:178 |
| 21.0% |  78.3ms |     607 | uneval/src/index.ts:201 |
| 13.5% |  50.4ms |     390 | uneval/src/index.ts:200 |
| 11.6% |  43.3ms |     336 | uneval/src/index.ts:165 |
| 11.3% |  42.0ms |     325 | uneval/src/index.ts:184 |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

|     % |    Time | Samples | Location                             |
| ----: | ------: | ------: | ------------------------------------ |
| 74.0% | 265.9ms |   2,059 | uneval/src/internal/collection.ts:86 |
|  7.2% |  26.0ms |     201 | uneval/src/internal/collection.ts:52 |
|  5.7% |  20.5ms |     159 | uneval/src/internal/collection.ts:10 |
|  4.6% |  16.5ms |     128 | uneval/src/internal/collection.ts:62 |
|  3.4% |  12.3ms |      95 | uneval/src/internal/collection.ts:63 |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

|     % |    Time | Samples | Location                        |
| ----: | ------: | ------: | ------------------------------- |
| 51.2% | 136.5ms |   1,056 | uneval/src/internal/index.ts:33 |
| 10.1% |  27.0ms |     210 | uneval/src/internal/index.ts:40 |
|  8.4% |  22.4ms |     173 | uneval/src/internal/index.ts:32 |
|  8.2% |  22.0ms |     170 | uneval/src/internal/index.ts:44 |
|  5.1% |  13.5ms |     104 | uneval/src/internal/index.ts:25 |

##### `getType` (uneval/src/internal/type.ts:4:24)

|     % |    Time | Samples | Location                       |
| ----: | ------: | ------: | ------------------------------ |
| 76.4% | 165.9ms |   1,285 | uneval/src/internal/type.ts:17 |
| 20.8% |  45.0ms |     349 | uneval/src/internal/type.ts:7  |
|  1.8% |   4.0ms |      31 | uneval/src/internal/type.ts:18 |
|  1.0% |   2.1ms |      16 | uneval/src/internal/type.ts:9  |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 34.6% | 57.3ms |     445 | uneval/src/internal/object.ts:406 |
| 22.0% | 36.5ms |     283 | uneval/src/internal/object.ts:422 |
| 17.8% | 29.5ms |     229 | uneval/src/internal/object.ts:407 |
|  9.2% | 15.2ms |     118 | uneval/src/internal/object.ts:392 |
|  7.7% | 12.8ms |      99 | uneval/src/internal/object.ts:426 |

##### `createState` (uneval/src/index.ts:144:21)

|     % |   Time | Samples | Location                |
| ----: | -----: | ------: | ----------------------- |
| 17.6% | 27.2ms |     210 | uneval/src/index.ts:332 |
| 16.2% | 25.1ms |     194 | uneval/src/index.ts:149 |
| 15.1% | 23.4ms |     181 | uneval/src/index.ts:162 |
| 14.6% | 22.6ms |     175 | uneval/src/index.ts:150 |
| 13.6% | 21.1ms |     163 | uneval/src/index.ts:148 |

##### `unevalString` (uneval/src/internal/primitive.ts:133:29)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 53.3ms |     411 | uneval/src/internal/primitive.ts:134 |

##### `unevalObject` (uneval/src/internal/object.ts:20:29)

|     % |   Time | Samples | Location                         |
| ----: | -----: | ------: | -------------------------------- |
| 44.0% | 19.7ms |     153 | uneval/src/internal/object.ts:25 |
| 28.2% | 12.6ms |      98 | uneval/src/internal/object.ts:33 |
| 23.6% | 10.5ms |      82 | uneval/src/internal/object.ts:30 |
|  4.3% |  1.9ms |      15 | uneval/src/internal/object.ts:31 |

##### `uneval` (uneval/src/index.ts:75:16)

|     % |   Time | Samples | Location               |
| ----: | -----: | ------: | ---------------------- |
| 73.5% | 30.1ms |     233 | uneval/src/index.ts:77 |
| 13.6% |  5.6ms |      43 | uneval/src/index.ts:75 |
|  7.6% |  3.1ms |      24 | uneval/src/index.ts:82 |
|  2.8% |  1.2ms |       9 | uneval/src/index.ts:85 |
|  2.5% |  1.0ms |       8 | uneval/src/index.ts:76 |

##### `isObject` (uneval/src/internal/object.ts:434:25)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 72.9% | 28.8ms |     223 | uneval/src/internal/object.ts:436 |
| 27.1% | 10.7ms |      83 | uneval/src/internal/object.ts:435 |

##### `uniformIntInternal` (uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:7:28)

|     % |   Time | Samples | Location                                                                                               |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------ |
| 98.0% | 20.1ms |     154 | uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:11 |
|  1.3% |  0.3ms |       2 | uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:8  |
|  0.7% |  0.1ms |       1 | uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:10 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `traverseObject` (uneval/src/index.ts:204:26)

|     % |    Time | Samples | Caller           | Location                      |
| ----: | ------: | ------: | ---------------- | ----------------------------- |
| 99.7% | 963.3ms |   7,456 | `traverse`       | uneval/src/index.ts:164:20    |
|  0.1% |   1.2ms |       9 | `traverseObject` | uneval/src/index.ts:204:26    |
|  0.1% |   0.6ms |       5 | `(anonymous)`    | uneval/scripts/profile.ts:1:1 |
|  0.0% |   0.1ms |       1 | `uneval`         | uneval/src/index.ts:75:16     |

##### `unevalObjectLike` (uneval/src/internal/object.ts:103:26)

|     % |    Time | Samples | Caller                 | Location                            |
| ----: | ------: | ------: | ---------------------- | ----------------------------------- |
| 99.8% | 925.3ms |   7,163 | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30 |
|  0.1% |   0.8ms |       6 | `unevalObject`         | uneval/src/internal/object.ts:20:29 |

##### `unevalObjectInternal` (uneval/src/internal/object.ts:68:30)

|     % |    Time | Samples | Caller                 | Location                             |
| ----: | ------: | ------: | ---------------------- | ------------------------------------ |
| 99.4% | 524.1ms |   4,060 | `unevalObject`         | uneval/src/internal/object.ts:20:29  |
|  0.1% |   0.5ms |       4 | `uneval`               | uneval/src/index.ts:75:16            |
|  0.1% |   0.4ms |       3 | `unevalObjectLike`     | uneval/src/internal/object.ts:103:26 |
|  0.0% |   0.3ms |       2 | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30  |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37)

|      % |    Time | Samples | Caller                   | Location                             |
| -----: | ------: | ------: | ------------------------ | ------------------------------------ |
| 100.0% | 524.1ms |   4,059 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:384:32 |

##### `unevalLiteral` (uneval/src/internal/primitive.ts:139:23)

|      % |    Time | Samples | Caller         | Location                                |
| -----: | ------: | ------: | -------------- | --------------------------------------- |
| 100.0% | 517.7ms |   4,010 | `unevalString` | uneval/src/internal/primitive.ts:133:29 |

##### `unevalNumber` (uneval/src/internal/primitive.ts:12:29)

|      % |    Time | Samples | Caller           | Location                           |
| -----: | ------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 404.6ms |   3,129 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `traverse` (uneval/src/index.ts:164:20)

|     % |    Time | Samples | Caller           | Location                   |
| ----: | ------: | ------: | ---------------- | -------------------------- |
| 75.3% | 280.4ms |   2,174 | `traverseObject` | uneval/src/index.ts:204:26 |
| 24.7% |  92.2ms |     713 | `createState`    | uneval/src/index.ts:144:21 |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

|     % |    Time | Samples | Caller                 | Location                            |
| ----: | ------: | ------: | ---------------------- | ----------------------------------- |
| 99.6% | 358.1ms |   2,773 | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30 |
|  0.3% |   0.9ms |       7 | `unevalObject`         | uneval/src/internal/object.ts:20:29 |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

|     % |    Time | Samples | Caller                 | Location                               |
| ----: | ------: | ------: | ---------------------- | -------------------------------------- |
| 40.3% | 107.6ms |     832 | `unevalObjectLike`     | uneval/src/internal/object.ts:103:26   |
| 33.3% |  88.9ms |     688 | `unevalArray`          | uneval/src/internal/collection.ts:7:47 |
|  8.9% |  23.8ms |     184 | `uneval`               | uneval/src/index.ts:75:16              |
|  7.3% |  19.5ms |     151 | `unevalWithoutCustom`  | uneval/src/internal/index.ts:14:37     |
|  6.9% |  18.4ms |     143 | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30    |

##### `getType` (uneval/src/internal/type.ts:4:24)

|     % |    Time | Samples | Caller           | Location                   |
| ----: | ------: | ------: | ---------------- | -------------------------- |
| 99.9% | 216.8ms |   1,680 | `traverseObject` | uneval/src/index.ts:204:26 |
|  0.1% |   0.1ms |       1 | `traverse`       | uneval/src/index.ts:164:20 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32)

|      % |    Time | Samples | Caller             | Location                             |
| -----: | ------: | ------: | ------------------ | ------------------------------------ |
| 100.0% | 165.8ms |   1,288 | `unevalObjectLike` | uneval/src/internal/object.ts:103:26 |

##### `createState` (uneval/src/index.ts:144:21)

|      % |    Time | Samples | Caller   | Location                  |
| -----: | ------: | ------: | -------- | ------------------------- |
| 100.0% | 154.6ms |   1,196 | `uneval` | uneval/src/index.ts:75:16 |

##### `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` (`<native>`)

|      % |    Time | Samples | Caller                   | Location                             |
| -----: | ------: | ------: | ------------------------ | ------------------------------------ |
| 100.0% | 127.4ms |     987 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:384:32 |

##### `unevalString` (uneval/src/internal/primitive.ts:133:29)

|      % |   Time | Samples | Caller           | Location                           |
| -----: | -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 53.3ms |     411 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `unevalObject` (uneval/src/internal/object.ts:20:29)

|      % |   Time | Samples | Caller           | Location                           |
| -----: | -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 44.8ms |     348 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `uneval` (uneval/src/index.ts:75:16)

|     % |   Time | Samples | Caller        | Location                      |
| ----: | -----: | ------: | ------------- | ----------------------------- |
| 97.5% | 39.9ms |     309 | `(anonymous)` | uneval/scripts/profile.ts:1:1 |

##### `isObject` (uneval/src/internal/object.ts:434:25)

|      % |   Time | Samples | Caller           | Location                           |
| -----: | -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 39.5ms |     306 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `uniformIntInternal` (uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:7:28)

|     % |   Time | Samples | Caller                    | Location                                                                                                   |
| ----: | -----: | ------: | ------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 96.7% | 19.8ms |     152 | `uniformInt`              | uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:127:20 |
|  3.3% |  0.7ms |       5 | `uniformArrayIntInternal` | uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:83:33  |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                                         | Location                                                                                     |
| ----: | ------: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| 94.3% |   5.82s |  45,097 | `(anonymous)`                                    | uneval/scripts/profile.ts:1:1                                                                |
| 92.6% |   5.72s |  44,294 | `uneval`                                         | uneval/src/index.ts:75:16                                                                    |
| 64.4% |   3.97s |  30,805 | `unevalInternal`                                 | uneval/src/internal/index.ts:25:32                                                           |
| 63.3% |   3.91s |  30,296 | `unevalObject`                                   | uneval/src/internal/object.ts:20:29                                                          |
| 63.0% |   3.89s |  30,145 | `unevalObjectInternal`                           | uneval/src/internal/object.ts:68:30                                                          |
| 48.6% |      3s |  23,240 | `unevalObjectLike`                               | uneval/src/internal/object.ts:103:26                                                         |
| 28.0% |   1.73s |  13,398 | `unevalArray`                                    | uneval/src/internal/collection.ts:7:47                                                       |
| 27.7% |   1.70s |  13,233 | `createState`                                    | uneval/src/index.ts:144:21                                                                   |
| 25.2% |   1.55s |  12,037 | `traverse`                                       | uneval/src/index.ts:164:20                                                                   |
| 23.7% |   1.46s |  11,338 | `traverseObject`                                 | uneval/src/index.ts:204:26                                                                   |
| 19.4% |   1.20s |   9,304 | `unevalObjectLiteralKey`                         | uneval/src/internal/object.ts:384:32                                                         |
| 14.7% | 907.7ms |   7,029 | `unevalWithoutCustom`                            | uneval/src/internal/index.ts:14:37                                                           |
|  9.2% | 571.0ms |   4,421 | `unevalString`                                   | uneval/src/internal/primitive.ts:133:29                                                      |
|  8.4% | 517.7ms |   4,010 | `unevalLiteral`                                  | uneval/src/internal/primitive.ts:139:23                                                      |
|  6.6% | 404.6ms |   3,129 | `unevalNumber`                                   | uneval/src/internal/primitive.ts:12:29                                                       |
|  3.5% | 217.0ms |   1,681 | `getType`                                        | uneval/src/internal/type.ts:4:24                                                             |
|  2.1% | 127.4ms |     987 | `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` | `<native>`                                                                                   |
|  1.7% | 106.3ms |     814 | `(garbage collector)`                            | `<native>`                                                                                   |
|  1.7% | 104.4ms |     816 | `(program)`                                      | `<native>`                                                                                   |
|  1.4% |  87.1ms |     667 | `sample`                                         | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16 |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `(anonymous)` (uneval/scripts/profile.ts:1:1)

|     % |   Time | Samples | Callee           | Location                                                                                     |
| ----: | -----: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
| 98.2% |  5.71s |  44,286 | `uneval`         | uneval/src/index.ts:75:16                                                                    |
|  1.5% | 87.1ms |     667 | `sample`         | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16 |
|  0.0% |  2.1ms |      16 | `anything`       | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:8168:18 |
|  0.0% |  1.7ms |      13 | `unevalInternal` | uneval/src/internal/index.ts:25:32                                                           |
|  0.0% |  0.6ms |       5 | `traverseObject` | uneval/src/index.ts:204:26                                                                   |

##### `uneval` (uneval/src/index.ts:75:16)

|     % |  Time | Samples | Callee                 | Location                            |
| ----: | ----: | ------: | ---------------------- | ----------------------------------- |
| 69.4% | 3.96s |  30,739 | `unevalInternal`       | uneval/src/internal/index.ts:25:32  |
| 29.9% | 1.70s |  13,233 | `createState`          | uneval/src/index.ts:144:21          |
|  0.0% | 0.5ms |       4 | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30 |
|  0.0% | 0.1ms |       1 | `traverseObject`       | uneval/src/index.ts:204:26          |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

|     % |    Time | Samples | Callee          | Location                                |
| ----: | ------: | ------: | --------------- | --------------------------------------- |
| 98.4% |   3.91s |  30,296 | `unevalObject`  | uneval/src/internal/object.ts:20:29     |
| 14.4% | 571.0ms |   4,421 | `unevalString`  | uneval/src/internal/primitive.ts:133:29 |
| 10.2% | 404.6ms |   3,129 | `unevalNumber`  | uneval/src/internal/primitive.ts:12:29  |
|  1.0% |  39.5ms |     306 | `isObject`      | uneval/src/internal/object.ts:434:25    |
|  0.1% |   5.5ms |      42 | `unevalBoolean` | uneval/src/internal/primitive.ts:8:30   |

##### `unevalObject` (uneval/src/internal/object.ts:20:29)

|     % |  Time | Samples | Callee                 | Location                               |
| ----: | ----: | ------: | ---------------------- | -------------------------------------- |
| 99.4% | 3.89s |  30,127 | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30    |
|  0.0% | 0.9ms |       7 | `unevalArray`          | uneval/src/internal/collection.ts:7:47 |
|  0.0% | 0.8ms |       6 | `unevalObjectLike`     | uneval/src/internal/object.ts:103:26   |

##### `unevalObjectInternal` (uneval/src/internal/object.ts:68:30)

|     % |   Time | Samples | Callee                 | Location                               |
| ----: | -----: | ------: | ---------------------- | -------------------------------------- |
| 77.1% |     3s |  23,229 | `unevalObjectLike`     | uneval/src/internal/object.ts:103:26   |
| 44.4% |  1.72s |  13,390 | `unevalArray`          | uneval/src/internal/collection.ts:7:47 |
|  0.5% | 18.4ms |     143 | `unevalInternal`       | uneval/src/internal/index.ts:25:32     |
|  0.0% |  0.3ms |       2 | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30    |

##### `unevalObjectLike` (uneval/src/internal/object.ts:103:26)

|     % |   Time | Samples | Callee                     | Location                             |
| ----: | -----: | ------: | -------------------------- | ------------------------------------ |
| 50.4% |  1.51s |  11,710 | `unevalInternal`           | uneval/src/internal/index.ts:25:32   |
| 40.0% |  1.20s |   9,304 | `unevalObjectLiteralKey`   | uneval/src/internal/object.ts:384:32 |
|  0.4% | 13.3ms |     103 | `isRegularDataDescriptor`  | uneval/src/internal/object.ts:287:33 |
|  0.1% |  2.2ms |      17 | `(anonymous)`              | uneval/src/internal/object.ts:201:30 |
|  0.0% |  0.9ms |       7 | `isDefaultObjectPrototype` | uneval/src/internal/object.ts:429:41 |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

|     % |  Time | Samples | Callee               | Location                                |
| ----: | ----: | ------: | -------------------- | --------------------------------------- |
| 85.2% | 1.47s |  11,413 | `unevalInternal`     | uneval/src/internal/index.ts:25:32      |
|  0.1% | 2.6ms |      20 | `unevalObjectAssign` | uneval/src/internal/collection.ts:89:28 |

##### `createState` (uneval/src/index.ts:144:21)

|     % |  Time | Samples | Callee     | Location                   |
| ----: | ----: | ------: | ---------- | -------------------------- |
| 91.0% | 1.55s |  12,037 | `traverse` | uneval/src/index.ts:164:20 |

##### `traverse` (uneval/src/index.ts:164:20)

|     % |  Time | Samples | Callee           | Location                         |
| ----: | ----: | ------: | ---------------- | -------------------------------- |
| 94.1% | 1.46s |  11,324 | `traverseObject` | uneval/src/index.ts:204:26       |
|  0.0% | 0.1ms |       1 | `getType`        | uneval/src/internal/type.ts:4:24 |

##### `traverseObject` (uneval/src/index.ts:204:26)

|     % |    Time | Samples | Callee                     | Location                             |
| ----: | ------: | ------: | -------------------------- | ------------------------------------ |
| 60.5% | 886.0ms |   6,865 | `traverse`                 | uneval/src/index.ts:164:20           |
| 14.8% | 216.8ms |   1,680 | `getType`                  | uneval/src/internal/type.ts:4:24     |
|  0.1% |   1.2ms |       9 | `traverseObject`           | uneval/src/index.ts:204:26           |
|  0.0% |   0.5ms |       4 | `isDefaultObjectPrototype` | uneval/src/internal/object.ts:429:41 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32)

|     % |    Time | Samples | Callee                                           | Location                           |
| ----: | ------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 75.6% | 907.7ms |   7,029 | `unevalWithoutCustom`                            | uneval/src/internal/index.ts:14:37 |
| 10.6% | 127.4ms |     987 | `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` | `<native>`                         |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37)

|     % |    Time | Samples | Callee           | Location                           |
| ----: | ------: | ------: | ---------------- | ---------------------------------- |
| 42.3% | 383.7ms |   2,970 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `unevalString` (uneval/src/internal/primitive.ts:133:29)

|     % |    Time | Samples | Callee          | Location                                |
| ----: | ------: | ------: | --------------- | --------------------------------------- |
| 90.7% | 517.7ms |   4,010 | `unevalLiteral` | uneval/src/internal/primitive.ts:139:23 |

##### `sample` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16)

|     % |   Time | Samples | Callee         | Location                                                                                     |
| ----: | -----: | ------: | -------------- | -------------------------------------------------------------------------------------------- |
| 99.7% | 86.8ms |     665 | `mapHelper`    | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20   |
|  0.3% |  0.3ms |       2 | `streamSample` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2524:22 |

## Hottest call stacks

Call stacks ranked by time spent in their top frame.

Common call stack: `uneval` (uneval/src/index.ts:75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1)

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.5% | 465.0ms |   3,596 | `traverseObject` (uneval/src/index.ts:204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                                                                          |
| 7.0% | 434.9ms |   3,365 | `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                                                                                                                                                                                           |
| 5.9% | 365.8ms |   2,835 | `traverseObject` (uneval/src/index.ts:204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                        |
| 4.0% | 245.3ms |   1,900 | `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                                                                                          |
| 3.9% | 239.1ms |   1,855 | `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                                                                                                                                                                                                                         |
| 3.0% | 185.6ms |   1,439 | `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                             |
| 2.9% | 177.4ms |   1,374 | `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                  |
| 2.8% | 170.3ms |   1,320 | `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                                                                                                                                                                |
| 2.5% | 155.0ms |   1,201 | `traverse` (uneval/src/index.ts:164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                                                    |
| 2.5% | 154.6ms |   1,196 | `createState` (uneval/src/index.ts:144:21)                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.5% | 152.7ms |   1,183 | `unevalLiteral` (uneval/src/internal/primitive.ts:139:23) ← `unevalString` (133:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalWithoutCustom` (14:37) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                         |
| 1.8% | 113.0ms |     875 | `traverseObject` (uneval/src/index.ts:204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                      |
| 1.8% | 110.9ms |     859 | `getType` (uneval/src/internal/type.ts:4:24) ← `traverseObject` (uneval/src/index.ts:204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                           |
| 1.8% | 110.8ms |     856 | `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                                           |
| 1.7% | 106.6ms |     826 | `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) |
| 1.6% | 100.6ms |     780 | `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                |
| 1.6% |  99.4ms |     769 | `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                            |
| 1.6% |  96.8ms |     750 | `traverse` (uneval/src/index.ts:164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                  |
| 1.5% |  92.2ms |     713 | `traverse` (uneval/src/index.ts:164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.4% |  83.4ms |     645 | `unevalNumber` (uneval/src/internal/primitive.ts:12:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                                                                         |

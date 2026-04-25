# CPU profile

Took 2.44s over 15,182 samples (161.2µs per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| ours        | 73.0% |   1.78s |  11,143 |
| native      | 23.6% | 578.7ms |   3,551 |
| third-party |  3.0% |  72.7ms |     425 |
| module      |  0.4% |  10.1ms |      62 |
| unknown     |  0.0% |   0.2ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                    | Location                                |
| ----: | ------: | ------: | ------------------------------------------- | --------------------------------------- |
| 28.7% | 701.2ms |   4,402 | `unevalLiteral`                             | uneval/src/internal/primitive.ts:139:23 |
| 11.5% | 281.3ms |   1,768 | `join`                                      | `<native>`                              |
| 10.9% | 267.6ms |   1,667 | `traverseObject`                            | uneval/src/index.ts:204:26              |
|  9.5% | 232.9ms |   1,454 | `unevalNumber`                              | uneval/src/internal/primitive.ts:12:29  |
|  7.2% | 176.8ms |   1,111 | `getOwnPropertyDescriptor`                  | `<native>`                              |
|  4.8% | 116.4ms |     728 | `unevalObjectLiteralKey`                    | uneval/src/internal/object.ts:384:32    |
|  4.5% | 109.6ms |     691 | `getType`                                   | uneval/src/internal/type.ts:4:24        |
|  3.0% |  72.5ms |     451 | `unevalArray`                               | uneval/src/internal/collection.ts:7:47  |
|  2.9% |  70.6ms |     435 | `traverse`                                  | uneval/src/index.ts:164:20              |
|  2.8% |  68.3ms |     420 | `unevalObjectLike`                          | uneval/src/internal/object.ts:103:26    |
|  2.2% |  54.8ms |     341 | `/^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u` | `<native>`                              |
|  1.4% |  33.1ms |     204 | `unevalString`                              | uneval/src/internal/primitive.ts:133:29 |
|  1.3% |  32.4ms |     183 | `createState`                               | uneval/src/index.ts:144:21              |
|  1.3% |  32.1ms |     200 | `uneval`                                    | uneval/src/index.ts:75:16               |
|  1.2% |  28.3ms |     178 | `unevalBoolean`                             | uneval/src/internal/primitive.ts:8:30   |
|  0.5% |  13.0ms |      80 | `push`                                      | `<native>`                              |
|  0.4% |  11.0ms |       7 | `(anonymous)`                               | `<native>`                              |
|  0.3% |   8.2ms |      46 | `map`                                       | `<native>`                              |
|  0.3% |   7.5ms |      38 | `parseModule`                               | `<native>`                              |
|  0.3% |   7.3ms |      47 | `unevalInternal`                            | uneval/src/internal/index.ts:25:32      |

#### Lines

Lines ranked by contribution to each function's self time.

##### `unevalLiteral` (uneval/src/internal/primitive.ts:139:23)

|     % |    Time | Samples | Location                             |
| ----: | ------: | ------: | ------------------------------------ |
| 91.8% | 643.5ms |   4,040 | uneval/src/internal/primitive.ts:148 |
|  2.9% |  20.1ms |     126 | uneval/src/internal/primitive.ts:150 |
|  2.7% |  19.3ms |     121 | uneval/src/internal/primitive.ts:199 |
|  2.1% |  15.0ms |      94 | uneval/src/internal/primitive.ts:147 |
|  0.4% |   2.7ms |      17 | uneval/src/internal/primitive.ts:187 |

##### `traverseObject` (uneval/src/index.ts:204:26)

|     % |   Time | Samples | Location                |
| ----: | -----: | ------: | ----------------------- |
| 32.8% | 87.8ms |     547 | uneval/src/index.ts:245 |
| 24.0% | 64.3ms |     401 | uneval/src/index.ts:248 |
| 16.6% | 44.5ms |     277 | uneval/src/index.ts:219 |
| 15.6% | 41.6ms |     259 | uneval/src/index.ts:208 |
|  7.9% | 21.0ms |     131 | uneval/src/index.ts:210 |

##### `unevalNumber` (uneval/src/internal/primitive.ts:12:29)

|     % |    Time | Samples | Location                            |
| ----: | ------: | ------: | ----------------------------------- |
| 65.1% | 151.6ms |     946 | uneval/src/internal/primitive.ts:22 |
| 22.7% |  52.9ms |     331 | uneval/src/internal/primitive.ts:25 |
|  4.1% |   9.6ms |      60 | uneval/src/internal/primitive.ts:15 |
|  3.4% |   8.0ms |      50 | uneval/src/internal/primitive.ts:13 |
|  2.9% |   6.7ms |      42 | uneval/src/internal/primitive.ts:17 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 33.0% | 38.4ms |     240 | uneval/src/internal/object.ts:406 |
| 26.6% | 31.0ms |     194 | uneval/src/internal/object.ts:422 |
| 25.3% | 29.5ms |     184 | uneval/src/internal/object.ts:426 |
|  8.1% |  9.4ms |      59 | uneval/src/internal/object.ts:407 |
|  3.6% |  4.2ms |      26 | uneval/src/internal/object.ts:418 |

##### `getType` (uneval/src/internal/type.ts:4:24)

|     % |   Time | Samples | Location                       |
| ----: | -----: | ------: | ------------------------------ |
| 66.0% | 72.3ms |     456 | uneval/src/internal/type.ts:17 |
| 22.1% | 24.2ms |     153 | uneval/src/internal/type.ts:7  |
|  7.8% |  8.6ms |      54 | uneval/src/internal/type.ts:9  |
|  3.9% |  4.3ms |      27 | uneval/src/internal/type.ts:18 |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

|     % |   Time | Samples | Location                             |
| ----: | -----: | ------: | ------------------------------------ |
| 31.6% | 22.9ms |     143 | uneval/src/internal/collection.ts:61 |
| 19.5% | 14.2ms |      88 | uneval/src/internal/collection.ts:8  |
| 12.7% |  9.2ms |      57 | uneval/src/internal/collection.ts:47 |
| 12.5% |  9.0ms |      56 | uneval/src/internal/collection.ts:86 |
|  7.5% |  5.5ms |      34 | uneval/src/internal/collection.ts:63 |

##### `traverse` (uneval/src/index.ts:164:20)

|     % |   Time | Samples | Location                |
| ----: | -----: | ------: | ----------------------- |
| 46.0% | 32.5ms |     200 | uneval/src/index.ts:199 |
| 27.7% | 19.6ms |     121 | uneval/src/index.ts:201 |
| 24.9% | 17.6ms |     108 | uneval/src/index.ts:200 |
|  1.4% |  1.0ms |       6 | uneval/src/index.ts:184 |

##### `unevalObjectLike` (uneval/src/internal/object.ts:103:26)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 35.6% | 24.3ms |     149 | uneval/src/internal/object.ts:142 |
| 14.4% |  9.9ms |      61 | uneval/src/internal/object.ts:201 |
| 13.7% |  9.4ms |      58 | uneval/src/internal/object.ts:104 |
|  8.5% |  5.8ms |      36 | uneval/src/internal/object.ts:128 |
|  7.3% |  5.0ms |      31 | uneval/src/internal/object.ts:140 |

##### `unevalString` (uneval/src/internal/primitive.ts:133:29)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 33.1ms |     204 | uneval/src/internal/primitive.ts:134 |

##### `createState` (uneval/src/index.ts:144:21)

|     % |   Time | Samples | Location                |
| ----: | -----: | ------: | ----------------------- |
| 32.2% | 10.4ms |      59 | uneval/src/index.ts:148 |
| 24.0% |  7.8ms |      44 | uneval/src/index.ts:332 |
| 10.4% |  3.4ms |      19 | uneval/src/index.ts:150 |
|  8.7% |  2.8ms |      16 | uneval/src/index.ts:327 |
|  8.2% |  2.7ms |      15 | uneval/src/index.ts:152 |

##### `uneval` (uneval/src/index.ts:75:16)

|     % |   Time | Samples | Location               |
| ----: | -----: | ------: | ---------------------- |
| 91.0% | 29.2ms |     182 | uneval/src/index.ts:77 |
|  8.0% |  2.6ms |      16 | uneval/src/index.ts:76 |
|  0.5% |  0.2ms |       1 | uneval/src/index.ts:85 |

##### `unevalBoolean` (uneval/src/internal/primitive.ts:8:30)

|      % |   Time | Samples | Location                            |
| -----: | -----: | ------: | ----------------------------------- |
| 100.0% | 28.3ms |     178 | uneval/src/internal/primitive.ts:10 |

##### `(anonymous)` (`<native>`)

|     % |   Time | Samples | Location |
| ----: | -----: | ------: | -------- |
| 96.2% | 10.5ms |       4 | 11       |

##### `map` (`<native>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 8.2ms |      46 | 1        |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

|     % |  Time | Samples | Location                        |
| ----: | ----: | ------: | ------------------------------- |
| 63.6% | 4.7ms |      30 | uneval/src/internal/index.ts:32 |
| 16.9% | 1.2ms |       8 | uneval/src/internal/index.ts:33 |
|  2.2% | 0.2ms |       1 | uneval/src/internal/index.ts:53 |
|  2.2% | 0.2ms |       1 | uneval/src/internal/index.ts:54 |
|  2.1% | 0.2ms |       1 | uneval/src/internal/index.ts:44 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `unevalLiteral` (uneval/src/internal/primitive.ts:139:23)

|      % |    Time | Samples | Caller         | Location                                |
| -----: | ------: | ------: | -------------- | --------------------------------------- |
| 100.0% | 701.2ms |   4,402 | `unevalString` | uneval/src/internal/primitive.ts:133:29 |

##### `join` (`<native>`)

|     % |    Time | Samples | Caller                    | Location                                                                                    |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------- |
| 61.8% | 173.9ms |   1,091 | `unevalObjectLike`        | uneval/src/internal/object.ts:103:26                                                        |
| 37.6% | 105.9ms |     668 | `unevalArray`             | uneval/src/internal/collection.ts:7:47                                                      |
|  0.5% |   1.5ms |       9 | `mapperWithCloneIfNeeded` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:468:25 |

##### `traverseObject` (uneval/src/index.ts:204:26)

|      % |    Time | Samples | Caller     | Location                   |
| -----: | ------: | ------: | ---------- | -------------------------- |
| 100.0% | 267.6ms |   1,667 | `traverse` | uneval/src/index.ts:164:20 |

##### `unevalNumber` (uneval/src/internal/primitive.ts:12:29)

|     % |    Time | Samples | Caller             | Location                               |
| ----: | ------: | ------: | ------------------ | -------------------------------------- |
| 98.7% | 229.7ms |   1,435 | `unevalInternal`   | uneval/src/internal/index.ts:25:32     |
|  0.7% |   1.6ms |      10 | `unevalArray`      | uneval/src/internal/collection.ts:7:47 |
|  0.6% |   1.3ms |       8 | `unevalObjectLike` | uneval/src/internal/object.ts:103:26   |
|  0.1% |   0.2ms |       1 | `traverse`         | uneval/src/index.ts:164:20             |

##### `getOwnPropertyDescriptor` (`<native>`)

|     % |    Time | Samples | Caller           | Location                   |
| ----: | ------: | ------: | ---------------- | -------------------------- |
| 99.7% | 176.4ms |   1,108 | `traverseObject` | uneval/src/index.ts:204:26 |
|  0.3% |   0.5ms |       3 | `traverse`       | uneval/src/index.ts:164:20 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32)

|      % |    Time | Samples | Caller             | Location                             |
| -----: | ------: | ------: | ------------------ | ------------------------------------ |
| 100.0% | 116.4ms |     728 | `unevalObjectLike` | uneval/src/internal/object.ts:103:26 |

##### `getType` (uneval/src/internal/type.ts:4:24)

|      % |    Time | Samples | Caller           | Location                   |
| -----: | ------: | ------: | ---------------- | -------------------------- |
| 100.0% | 109.6ms |     691 | `traverseObject` | uneval/src/index.ts:204:26 |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

|     % |   Time | Samples | Caller             | Location                               |
| ----: | -----: | ------: | ------------------ | -------------------------------------- |
| 45.2% | 32.8ms |     207 | `uneval`           | uneval/src/index.ts:75:16              |
| 28.2% | 20.4ms |     126 | `unevalObjectLike` | uneval/src/internal/object.ts:103:26   |
| 26.6% | 19.3ms |     118 | `unevalArray`      | uneval/src/internal/collection.ts:7:47 |

##### `traverse` (uneval/src/index.ts:164:20)

|     % |   Time | Samples | Caller           | Location                   |
| ----: | -----: | ------: | ---------------- | -------------------------- |
| 60.4% | 42.7ms |     260 | `createState`    | uneval/src/index.ts:144:21 |
| 39.6% | 27.9ms |     175 | `traverseObject` | uneval/src/index.ts:204:26 |

##### `unevalObjectLike` (uneval/src/internal/object.ts:103:26)

|     % |   Time | Samples | Caller             | Location                               |
| ----: | -----: | ------: | ------------------ | -------------------------------------- |
| 40.7% | 27.8ms |     173 | `uneval`           | uneval/src/index.ts:75:16              |
| 29.9% | 20.4ms |     122 | `unevalObjectLike` | uneval/src/internal/object.ts:103:26   |
| 29.4% | 20.1ms |     125 | `unevalArray`      | uneval/src/internal/collection.ts:7:47 |

##### `/^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u` (`<native>`)

|      % |   Time | Samples | Caller                   | Location                             |
| -----: | -----: | ------: | ------------------------ | ------------------------------------ |
| 100.0% | 54.8ms |     341 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:384:32 |

##### `unevalString` (uneval/src/internal/primitive.ts:133:29)

|     % |   Time | Samples | Caller           | Location                               |
| ----: | -----: | ------: | ---------------- | -------------------------------------- |
| 99.5% | 33.0ms |     203 | `unevalInternal` | uneval/src/internal/index.ts:25:32     |
|  0.5% |  0.2ms |       1 | `unevalArray`    | uneval/src/internal/collection.ts:7:47 |

##### `createState` (uneval/src/index.ts:144:21)

|      % |   Time | Samples | Caller   | Location                  |
| -----: | -----: | ------: | -------- | ------------------------- |
| 100.0% | 32.4ms |     183 | `uneval` | uneval/src/index.ts:75:16 |

##### `unevalBoolean` (uneval/src/internal/primitive.ts:8:30)

|      % |   Time | Samples | Caller           | Location                           |
| -----: | -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 28.3ms |     178 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `push` (`<native>`)

|     % |  Time | Samples | Caller           | Location                                                                                     |
| ----: | ----: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
| 45.3% | 5.9ms |      36 | `unevalArray`    | uneval/src/internal/collection.ts:7:47                                                       |
| 28.8% | 3.7ms |      23 | `wrapper`        | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3113:9  |
| 11.2% | 1.5ms |       9 | `generateNItems` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3097:16 |
| 10.8% | 1.4ms |       9 | `tupleWrapper`   | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1023:22 |
|  2.6% | 0.3ms |       2 | `traverseObject` | uneval/src/index.ts:204:26                                                                   |

##### `(anonymous)` (`<native>`)

|    % |  Time | Samples | Caller        | Location   |
| ---: | ----: | ------: | ------------- | ---------- |
| 6.2% | 0.7ms |       5 | `(anonymous)` | `<native>` |

##### `map` (`<native>`)

|      % |  Time | Samples | Caller             | Location                             |
| -----: | ----: | ------: | ------------------ | ------------------------------------ |
| 100.0% | 8.2ms |      46 | `unevalObjectLike` | uneval/src/internal/object.ts:103:26 |

##### `parseModule` (`<native>`)

|      % |  Time | Samples | Caller        | Location   |
| -----: | ----: | ------: | ------------- | ---------- |
| 100.0% | 7.5ms |      38 | `(anonymous)` | `<native>` |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

|     % |  Time | Samples | Caller                   | Location                               |
| ----: | ----: | ------: | ------------------------ | -------------------------------------- |
| 80.5% | 5.9ms |      38 | `unevalObjectLike`       | uneval/src/internal/object.ts:103:26   |
| 12.9% | 0.9ms |       6 | `unevalArray`            | uneval/src/internal/collection.ts:7:47 |
|  4.4% | 0.3ms |       2 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:384:32   |
|  2.2% | 0.2ms |       1 | `uneval`                 | uneval/src/index.ts:75:16              |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                   | Location                                                                                     |
| ----: | ------: | ------: | -------------------------- | -------------------------------------------------------------------------------------------- |
| 98.9% |   2.42s |  15,097 | `loadAndEvaluateModule`    | `<native>`                                                                                   |
| 98.7% |   2.41s |  15,063 | `moduleEvaluation`         | `<native>`                                                                                   |
| 98.7% |   2.41s |  15,062 | `evaluate`                 | `<native>`                                                                                   |
| 94.7% |   2.31s |  14,473 | `uneval`                   | uneval/src/index.ts:75:16                                                                    |
| 52.5% |   1.28s |   8,030 | `unevalObjectLike`         | uneval/src/internal/object.ts:103:26                                                         |
| 41.2% |      1s |   6,318 | `unevalInternal`           | uneval/src/internal/index.ts:25:32                                                           |
| 33.1% | 809.8ms |   5,072 | `unevalArray`              | uneval/src/internal/collection.ts:7:47                                                       |
| 30.0% | 734.8ms |   4,609 | `unevalString`             | uneval/src/internal/primitive.ts:133:29                                                      |
| 28.7% | 701.7ms |   4,405 | `unevalLiteral`            | uneval/src/internal/primitive.ts:139:23                                                      |
| 26.9% | 658.3ms |   4,095 | `createState`              | uneval/src/index.ts:144:21                                                                   |
| 25.6% | 625.9ms |   3,912 | `traverse`                 | uneval/src/index.ts:164:20                                                                   |
| 25.5% | 623.7ms |   3,908 | `unevalObjectLiteralKey`   | uneval/src/internal/object.ts:384:32                                                         |
| 23.8% | 582.9ms |   3,650 | `traverseObject`           | uneval/src/index.ts:204:26                                                                   |
| 11.5% | 281.3ms |   1,768 | `join`                     | `<native>`                                                                                   |
|  9.5% | 232.9ms |   1,454 | `unevalNumber`             | uneval/src/internal/primitive.ts:12:29                                                       |
|  7.2% | 176.8ms |   1,111 | `getOwnPropertyDescriptor` | `<native>`                                                                                   |
|  4.5% | 110.1ms |     694 | `getType`                  | uneval/src/internal/type.ts:4:24                                                             |
|  3.5% |  84.5ms |     496 | `sample`                   | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16 |
|  3.4% |  84.2ms |     494 | `performIteration`         | `<native>`                                                                                   |
|  3.4% |  84.1ms |     493 | `mapHelper`                | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:27   |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `loadAndEvaluateModule` (`<native>`)

|     % |  Time | Samples | Callee                  | Location   |
| ----: | ----: | ------: | ----------------------- | ---------- |
| 99.8% | 2.41s |  15,063 | `moduleEvaluation`      | `<native>` |
|  0.1% | 3.0ms |      22 | `linkAndEvaluateModule` | `<native>` |
|  0.1% | 1.3ms |       9 | `loadModule`            | `<native>` |

##### `moduleEvaluation` (`<native>`)

|      % |  Time | Samples | Callee             | Location   |
| -----: | ----: | ------: | ------------------ | ---------- |
| 100.0% | 2.41s |  15,062 | `evaluate`         | `<native>` |
| 100.0% | 2.41s |  15,061 | `moduleEvaluation` | `<native>` |

##### `uneval` (uneval/src/index.ts:75:16)

|     % |    Time | Samples | Callee             | Location                               |
| ----: | ------: | ------: | ------------------ | -------------------------------------- |
| 42.2% | 978.0ms |   6,110 | `unevalObjectLike` | uneval/src/internal/object.ts:103:26   |
| 28.4% | 658.3ms |   4,095 | `createState`      | uneval/src/index.ts:144:21             |
| 26.6% | 615.1ms |   3,860 | `unevalArray`      | uneval/src/internal/collection.ts:7:47 |
|  1.4% |  32.7ms |     205 | `unevalInternal`   | uneval/src/internal/index.ts:25:32     |
|  0.0% |   0.5ms |       3 | `unevalObject`     | uneval/src/internal/object.ts:20:29    |

##### `unevalObjectLike` (uneval/src/internal/object.ts:103:26)

|     % |    Time | Samples | Callee                   | Location                               |
| ----: | ------: | ------: | ------------------------ | -------------------------------------- |
| 48.6% | 623.7ms |   3,908 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:384:32   |
| 25.1% | 322.7ms |   2,008 | `unevalObjectLike`       | uneval/src/internal/object.ts:103:26   |
| 19.8% | 254.1ms |   1,590 | `unevalInternal`         | uneval/src/internal/index.ts:25:32     |
| 16.7% | 214.8ms |   1,337 | `unevalArray`            | uneval/src/internal/collection.ts:7:47 |
| 13.5% | 173.9ms |   1,091 | `join`                   | `<native>`                             |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

|     % |    Time | Samples | Callee          | Location                                |
| ----: | ------: | ------: | --------------- | --------------------------------------- |
| 72.9% | 734.5ms |   4,607 | `unevalString`  | uneval/src/internal/primitive.ts:133:29 |
| 22.8% | 229.7ms |   1,435 | `unevalNumber`  | uneval/src/internal/primitive.ts:12:29  |
|  2.8% |  28.3ms |     178 | `unevalBoolean` | uneval/src/internal/primitive.ts:8:30   |
|  0.8% |   7.9ms |      51 | `unevalObject`  | uneval/src/internal/object.ts:20:29     |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

|     % |    Time | Samples | Callee             | Location                               |
| ----: | ------: | ------: | ------------------ | -------------------------------------- |
| 45.4% | 367.7ms |   2,300 | `unevalObjectLike` | uneval/src/internal/object.ts:103:26   |
| 33.2% | 268.5ms |   1,684 | `unevalInternal`   | uneval/src/internal/index.ts:25:32     |
| 19.9% | 161.4ms |   1,006 | `unevalArray`      | uneval/src/internal/collection.ts:7:47 |
| 13.1% | 105.9ms |     668 | `join`             | `<native>`                             |
|  0.7% |   5.9ms |      36 | `push`             | `<native>`                             |

##### `unevalString` (uneval/src/internal/primitive.ts:133:29)

|     % |    Time | Samples | Callee          | Location                                |
| ----: | ------: | ------: | --------------- | --------------------------------------- |
| 95.5% | 701.7ms |   4,405 | `unevalLiteral` | uneval/src/internal/primitive.ts:139:23 |

##### `unevalLiteral` (uneval/src/internal/primitive.ts:139:23)

|    % |  Time | Samples | Callee        | Location   |
| ---: | ----: | ------: | ------------- | ---------- |
| 0.0% | 0.2ms |       1 | `charCodeAt`  | `<native>` |
| 0.0% | 0.2ms |       1 | `(unknown)`   | `<native>` |
| 0.0% | 0.1ms |       1 | `toLowerCase` | `<native>` |

##### `createState` (uneval/src/index.ts:144:21)

|     % |    Time | Samples | Callee     | Location                   |
| ----: | ------: | ------: | ---------- | -------------------------- |
| 95.1% | 625.9ms |   3,912 | `traverse` | uneval/src/index.ts:164:20 |

##### `traverse` (uneval/src/index.ts:164:20)

|     % |    Time | Samples | Callee                     | Location                               |
| ----: | ------: | ------: | -------------------------- | -------------------------------------- |
| 93.1% | 582.9ms |   3,650 | `traverseObject`           | uneval/src/index.ts:204:26             |
|  0.1% |   0.5ms |       3 | `getOwnPropertyDescriptor` | `<native>`                             |
|  0.0% |   0.2ms |       1 | `unevalNumber`             | uneval/src/internal/primitive.ts:12:29 |
|  0.0% |   0.2ms |       1 | `unevalInternal`           | uneval/src/internal/index.ts:25:32     |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32)

|     % |    Time | Samples | Callee                                      | Location                                |
| ----: | ------: | ------: | ------------------------------------------- | --------------------------------------- |
| 72.5% | 452.4ms |   2,838 | `unevalInternal`                            | uneval/src/internal/index.ts:25:32      |
|  8.8% |  54.8ms |     341 | `/^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u` | `<native>`                              |
|  0.0% |   0.1ms |       1 | `unevalString`                              | uneval/src/internal/primitive.ts:133:29 |

##### `traverseObject` (uneval/src/index.ts:204:26)

|     % |    Time | Samples | Callee                     | Location                         |
| ----: | ------: | ------: | -------------------------- | -------------------------------- |
| 50.3% | 293.4ms |   1,842 | `traverse`                 | uneval/src/index.ts:164:20       |
| 30.3% | 176.4ms |   1,108 | `getOwnPropertyDescriptor` | `<native>`                       |
| 18.9% | 110.1ms |     694 | `getType`                  | uneval/src/internal/type.ts:4:24 |
|  0.1% |   0.3ms |       2 | `push`                     | `<native>`                       |
|  0.0% |   0.1ms |       1 | `ownKeys`                  | `<native>`                       |

##### `getType` (uneval/src/internal/type.ts:4:24)

|    % |  Time | Samples | Callee     | Location   |
| ---: | ----: | ------: | ---------- | ---------- |
| 0.4% | 0.5ms |       3 | `toString` | `<native>` |

##### `sample` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16)

|     % |   Time | Samples | Callee             | Location                                                                                     |
| ----: | -----: | ------: | ------------------ | -------------------------------------------------------------------------------------------- |
| 99.7% | 84.2ms |     494 | `performIteration` | `<native>`                                                                                   |
|  0.3% |  0.3ms |       2 | `streamSample`     | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2524:22 |

##### `performIteration` (`<native>`)

|     % |   Time | Samples | Callee            | Location   |
| ----: | -----: | ------: | ----------------- | ---------- |
| 99.8% | 84.1ms |     493 | `generatorResume` | `<native>` |

##### `mapHelper` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:27)

|     % |   Time | Samples | Callee            | Location   |
| ----: | -----: | ------: | ----------------- | ---------- |
| 99.8% | 83.9ms |     492 | `generatorResume` | `<native>` |

## Hottest call stacks

Call stacks ranked by time spent in their top frame.

Common call stack: `uneval` (uneval/src/index.ts:75:16) ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule`

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                           |
| ---: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.0% | 196.8ms |   1,237 | `unevalLiteral` (uneval/src/internal/primitive.ts:139:23) ← `unevalString` (133:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26)                                                          |
| 5.8% | 141.0ms |     873 | `traverseObject` (uneval/src/index.ts:204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                         |
| 3.7% |  89.6ms |     559 | `unevalLiteral` (uneval/src/internal/primitive.ts:139:23) ← `unevalString` (133:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectLike` (103:26)                            |
| 3.6% |  88.9ms |     557 | `traverseObject` (uneval/src/index.ts:204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                       |
| 3.6% |  87.9ms |     552 | `getOwnPropertyDescriptor` ← `traverseObject` (uneval/src/index.ts:204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                            |
| 3.4% |  83.6ms |     527 | `join` ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26)                                                                                                                                                                                                                                   |
| 3.3% |  79.8ms |     502 | `unevalLiteral` (uneval/src/internal/primitive.ts:139:23) ← `unevalString` (133:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) |
| 2.6% |  63.7ms |     400 | `unevalLiteral` (uneval/src/internal/primitive.ts:139:23) ← `unevalString` (133:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26)                                                                                              |
| 2.5% |  61.2ms |     386 | `getOwnPropertyDescriptor` ← `traverseObject` (uneval/src/index.ts:204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                          |
| 2.5% |  60.4ms |     382 | `getType` (uneval/src/internal/type.ts:4:24) ← `traverseObject` (uneval/src/index.ts:204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                          |
| 2.2% |  53.9ms |     341 | `join` ← `unevalArray` (uneval/src/internal/collection.ts:7:47)                                                                                                                                                                                                                                      |
| 2.2% |  53.9ms |     341 | `unevalLiteral` (uneval/src/internal/primitive.ts:139:23) ← `unevalString` (133:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47)                                                                                                 |
| 2.2% |  52.8ms |     330 | `unevalNumber` (uneval/src/internal/primitive.ts:12:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47)                                                                                                                             |
| 2.1% |  52.4ms |     327 | `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26)                                                                                                                                                                                                        |
| 1.7% |  42.7ms |     260 | `traverse` (uneval/src/index.ts:164:20) ← `createState` (144:21)                                                                                                                                                                                                                                     |
| 1.5% |  37.7ms |     237 | `unevalNumber` (uneval/src/internal/primitive.ts:12:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26)                                                                                                                          |
| 1.5% |  36.6ms |     229 | `getType` (uneval/src/internal/type.ts:4:24) ← `traverseObject` (uneval/src/index.ts:204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                        |
| 1.5% |  35.7ms |     221 | `join` ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectLike` (103:26)                                                                                                                                                                                                     |
| 1.3% |  32.8ms |     207 | `unevalArray` (uneval/src/internal/collection.ts:7:47)                                                                                                                                                                                                                                               |
| 1.3% |  32.4ms |     183 | `createState` (uneval/src/index.ts:144:21)                                                                                                                                                                                                                                                           |

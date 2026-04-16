# CPU profile

Took 6.08s over 46,255 samples (131.6µs per sample).

| Category          | %     | Time    | Samples |
| ----------------- | ----- | ------- | ------- |
| ours              | 91.8% | 5.58s   | 42,819  |
| garbage collector | 2.3%  | 139.7ms | 1,060   |
| regexp            | 2.1%  | 128.6ms | 983     |
| program           | 1.7%  | 106.1ms | 817     |
| third-party       | 1.2%  | 71.1ms  | 536     |
| idle              | 0.8%  | 50.1ms  | 38      |
| native            | 0.0%  | 0.3ms   | 2       |

## Hottest functions

### Self time

Functions ranked by time in the function body, excluding callees.

|     % |    Time | Samples | Function                                         | Location                                |
| ----: | ------: | ------: | ------------------------------------------------ | --------------------------------------- |
| 15.4% | 936.4ms |   7,170 | `unevalObjectLike`                               | uneval/src/internal/object.ts:103:26    |
| 14.8% | 899.9ms |   6,884 | `traverseObject`                                 | uneval/src/index.ts:204:26              |
|  8.8% | 535.2ms |   4,099 | `unevalObjectInternal`                           | uneval/src/internal/object.ts:68:30     |
|  8.7% | 529.6ms |   4,060 | `unevalLiteral`                                  | uneval/src/internal/primitive.ts:139:23 |
|  8.6% | 520.5ms |   3,990 | `unevalWithoutCustom`                            | uneval/src/internal/index.ts:14:37      |
|  6.9% | 420.6ms |   3,214 | `unevalNumber`                                   | uneval/src/internal/primitive.ts:12:29  |
|  6.2% | 376.4ms |   2,887 | `traverse`                                       | uneval/src/index.ts:164:20              |
|  6.0% | 365.8ms |   2,805 | `unevalArray`                                    | uneval/src/internal/collection.ts:7:47  |
|  4.5% | 276.4ms |   2,120 | `unevalInternal`                                 | uneval/src/internal/index.ts:25:32      |
|  3.4% | 205.2ms |   1,575 | `getType`                                        | uneval/src/internal/type.ts:4:24        |
|  2.9% | 175.5ms |   1,345 | `unevalObjectLiteralKey`                         | uneval/src/internal/object.ts:384:32    |
|  2.5% | 151.0ms |   1,151 | `createState`                                    | uneval/src/index.ts:144:21              |
|  2.3% | 139.7ms |   1,060 | `(garbage collector)`                            | `<native>`                              |
|  2.1% | 128.6ms |     983 | `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` | `<native>`                              |
|  1.7% | 106.1ms |     817 | `(program)`                                      | `<native>`                              |
|  0.8% |  50.1ms |      37 | `(idle)`                                         | `<native>`                              |
|  0.7% |  44.0ms |     338 | `unevalObject`                                   | uneval/src/internal/object.ts:20:29     |
|  0.7% |  40.3ms |     309 | `isObject`                                       | uneval/src/internal/object.ts:434:25    |
|  0.7% |  40.3ms |     308 | `unevalString`                                   | uneval/src/internal/primitive.ts:133:29 |
|  0.6% |  38.0ms |     291 | `uneval`                                         | uneval/src/index.ts:75:16               |

#### Lines

Lines ranked by contribution to each function's self time.

##### `unevalObjectLike` (uneval/src/internal/object.ts:103:26)

|     % |    Time | Samples | Location                          |
| ----: | ------: | ------: | --------------------------------- |
| 42.1% | 394.6ms |   3,022 | uneval/src/internal/object.ts:144 |
| 30.5% | 285.9ms |   2,189 | uneval/src/internal/object.ts:93  |
|  8.0% |  74.8ms |     573 | uneval/src/internal/object.ts:99  |
|  5.7% |  53.7ms |     411 | uneval/src/internal/object.ts:100 |
|  4.1% |  38.7ms |     296 | uneval/src/internal/object.ts:83  |

##### `traverseObject` (uneval/src/index.ts:204:26)

|     % |    Time | Samples | Location                |
| ----: | ------: | ------: | ----------------------- |
| 43.0% | 387.0ms |   2,960 | uneval/src/index.ts:152 |
| 21.9% | 197.3ms |   1,509 | uneval/src/index.ts:160 |
| 12.7% | 114.3ms |     874 | uneval/src/index.ts:184 |
|  6.9% |  62.5ms |     478 | uneval/src/index.ts:150 |
|  3.6% |  32.1ms |     246 | uneval/src/index.ts:187 |

##### `unevalObjectInternal` (uneval/src/internal/object.ts:68:30)

|     % |    Time | Samples | Location                         |
| ----: | ------: | ------: | -------------------------------- |
| 89.3% | 477.7ms |   3,659 | uneval/src/internal/object.ts:54 |
|  5.9% |  31.7ms |     243 | uneval/src/internal/object.ts:52 |
|  2.5% |  13.4ms |     103 | uneval/src/internal/object.ts:48 |
|  1.4% |   7.3ms |      56 | uneval/src/internal/object.ts:53 |
|  0.7% |   3.8ms |      29 | uneval/src/internal/object.ts:50 |

##### `unevalLiteral` (uneval/src/internal/primitive.ts:139:23)

|     % |    Time | Samples | Location                             |
| ----: | ------: | ------: | ------------------------------------ |
| 27.0% | 143.2ms |   1,097 | uneval/src/internal/primitive.ts:105 |
| 24.9% | 132.1ms |   1,013 | uneval/src/internal/primitive.ts:103 |
| 12.6% |  66.9ms |     513 | uneval/src/internal/primitive.ts:104 |
| 11.9% |  63.1ms |     484 | uneval/src/internal/primitive.ts:111 |
|  9.5% |  50.3ms |     386 | uneval/src/internal/primitive.ts:136 |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37)

|      % |    Time | Samples | Location                       |
| -----: | ------: | ------: | ------------------------------ |
| 100.0% | 520.5ms |   3,990 | uneval/src/internal/index.ts:4 |

##### `unevalNumber` (uneval/src/internal/primitive.ts:12:29)

|     % |    Time | Samples | Location                            |
| ----: | ------: | ------: | ----------------------------------- |
| 93.7% | 393.9ms |   3,010 | uneval/src/internal/primitive.ts:15 |
|  3.8% |  16.1ms |     123 | uneval/src/internal/primitive.ts:19 |
|  1.3% |   5.6ms |      43 | uneval/src/internal/primitive.ts:7  |
|  0.5% |   2.2ms |      17 | uneval/src/internal/primitive.ts:9  |
|  0.5% |   2.0ms |      15 | uneval/src/internal/primitive.ts:11 |

##### `traverse` (uneval/src/index.ts:164:20)

|     % |    Time | Samples | Location                |
| ----: | ------: | ------: | ----------------------- |
| 28.8% | 108.3ms |     831 | uneval/src/index.ts:122 |
| 24.5% |  92.0ms |     706 | uneval/src/index.ts:142 |
| 15.4% |  58.1ms |     445 | uneval/src/index.ts:141 |
| 11.0% |  41.3ms |     317 | uneval/src/index.ts:127 |
| 10.0% |  37.8ms |     290 | uneval/src/index.ts:108 |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

|     % |    Time | Samples | Location                             |
| ----: | ------: | ------: | ------------------------------------ |
| 72.6% | 265.4ms |   2,035 | uneval/src/internal/collection.ts:69 |
|  7.4% |  27.1ms |     208 | uneval/src/internal/collection.ts:37 |
|  5.3% |  19.3ms |     148 | uneval/src/internal/collection.ts:46 |
|  5.1% |  18.6ms |     143 | uneval/src/internal/collection.ts:6  |
|  4.1% |  15.0ms |     115 | uneval/src/internal/collection.ts:47 |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

|     % |    Time | Samples | Location                        |
| ----: | ------: | ------: | ------------------------------- |
| 44.3% | 122.4ms |     938 | uneval/src/internal/index.ts:9  |
|  9.9% |  27.3ms |     209 | uneval/src/internal/index.ts:16 |
|  9.7% |  26.9ms |     206 | uneval/src/internal/index.ts:8  |
|  7.0% |  19.4ms |     149 | uneval/src/internal/index.ts:19 |
|  6.9% |  19.1ms |     147 | uneval/src/internal/index.ts:5  |

##### `getType` (uneval/src/internal/type.ts:4:24)

|     % |    Time | Samples | Location                       |
| ----: | ------: | ------: | ------------------------------ |
| 74.3% | 152.6ms |   1,171 | uneval/src/internal/type.ts:11 |
| 23.0% |  47.3ms |     363 | uneval/src/internal/type.ts:3  |
|  2.0% |   4.2ms |      32 | uneval/src/internal/type.ts:4  |
|  0.3% |   0.7ms |       5 | uneval/src/internal/type.ts:12 |
|  0.3% |   0.5ms |       4 | uneval/src/internal/type.ts:13 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 33.3% | 58.5ms |     448 | uneval/src/internal/object.ts:284 |
| 23.0% | 40.4ms |     310 | uneval/src/internal/object.ts:296 |
| 15.7% | 27.5ms |     211 | uneval/src/internal/object.ts:285 |
|  9.3% | 16.3ms |     125 | uneval/src/internal/object.ts:275 |
|  8.2% | 14.4ms |     110 | uneval/src/internal/object.ts:283 |

##### `createState` (uneval/src/index.ts:144:21)

|     % |   Time | Samples | Location                |
| ----: | -----: | ------: | ----------------------- |
| 20.9% | 31.5ms |     240 | uneval/src/index.ts:249 |
| 18.2% | 27.5ms |     210 | uneval/src/index.ts:93  |
| 16.2% | 24.4ms |     186 | uneval/src/index.ts:106 |
| 14.5% | 21.9ms |     167 | uneval/src/index.ts:92  |
| 13.6% | 20.5ms |     156 | uneval/src/index.ts:94  |

##### `unevalObject` (uneval/src/internal/object.ts:20:29)

|     % |   Time | Samples | Location                         |
| ----: | -----: | ------: | -------------------------------- |
| 40.3% | 17.7ms |     136 | uneval/src/internal/object.ts:12 |
| 29.9% | 13.2ms |     101 | uneval/src/internal/object.ts:16 |
| 19.5% |  8.6ms |      66 | uneval/src/internal/object.ts:19 |
|  5.6% |  2.5ms |      19 | uneval/src/internal/object.ts:17 |
|  4.1% |  1.8ms |      14 | uneval/src/internal/object.ts:14 |

##### `isObject` (uneval/src/internal/object.ts:434:25)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 73.1% | 29.5ms |     226 | uneval/src/internal/object.ts:309 |
| 26.9% | 10.8ms |      83 | uneval/src/internal/object.ts:308 |

##### `unevalString` (uneval/src/internal/primitive.ts:133:29)

|      % |   Time | Samples | Location                            |
| -----: | -----: | ------: | ----------------------------------- |
| 100.0% | 40.3ms |     308 | uneval/src/internal/primitive.ts:97 |

##### `uneval` (uneval/src/index.ts:75:16)

|     % |   Time | Samples | Location               |
| ----: | -----: | ------: | ---------------------- |
| 80.1% | 30.5ms |     233 | uneval/src/index.ts:36 |
| 13.1% |  5.0ms |      38 | uneval/src/index.ts:34 |
|  3.4% |  1.3ms |      10 | uneval/src/index.ts:40 |
|  2.0% |  0.8ms |       6 | uneval/src/index.ts:43 |
|  1.4% |  0.5ms |       4 | uneval/src/index.ts:35 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to V8 JIT inlining.

##### `unevalObjectLike` (uneval/src/internal/object.ts:103:26)

|     % |    Time | Samples | Caller                 | Location                            |
| ----: | ------: | ------: | ---------------------- | ----------------------------------- |
| 99.9% | 935.2ms |   7,163 | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30 |
|  0.0% |   0.5ms |       3 | `unevalObject`         | uneval/src/internal/object.ts:20:29 |
|  0.0% |   0.3ms |       2 | `unevalInternal`       | uneval/src/internal/index.ts:25:32  |

##### `traverseObject` (uneval/src/index.ts:204:26)

|     % |    Time | Samples | Caller           | Location                      |
| ----: | ------: | ------: | ---------------- | ----------------------------- |
| 99.6% | 896.7ms |   6,859 | `traverse`       | uneval/src/index.ts:164:20    |
|  0.2% |   1.7ms |      13 | `traverseObject` | uneval/src/index.ts:204:26    |
|  0.1% |   0.8ms |       6 | `(anonymous)`    | uneval/scripts/profile.ts:1:1 |

##### `unevalObjectInternal` (uneval/src/internal/object.ts:68:30)

|     % |    Time | Samples | Caller             | Location                             |
| ----: | ------: | ------: | ------------------ | ------------------------------------ |
| 99.4% | 532.2ms |   4,076 | `unevalObject`     | uneval/src/internal/object.ts:20:29  |
|  0.2% |   0.9ms |       7 | `uneval`           | uneval/src/index.ts:75:16            |
|  0.1% |   0.4ms |       3 | `unevalObjectLike` | uneval/src/internal/object.ts:103:26 |

##### `unevalLiteral` (uneval/src/internal/primitive.ts:139:23)

|      % |    Time | Samples | Caller         | Location                                |
| -----: | ------: | ------: | -------------- | --------------------------------------- |
| 100.0% | 529.6ms |   4,061 | `unevalString` | uneval/src/internal/primitive.ts:133:29 |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37)

|      % |    Time | Samples | Caller                   | Location                             |
| -----: | ------: | ------: | ------------------------ | ------------------------------------ |
| 100.0% | 520.5ms |   3,990 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:384:32 |

##### `unevalNumber` (uneval/src/internal/primitive.ts:12:29)

|      % |    Time | Samples | Caller           | Location                           |
| -----: | ------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 420.6ms |   3,215 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `traverse` (uneval/src/index.ts:164:20)

|     % |    Time | Samples | Caller           | Location                   |
| ----: | ------: | ------: | ---------------- | -------------------------- |
| 73.7% | 277.3ms |   2,128 | `traverseObject` | uneval/src/index.ts:204:26 |
| 26.3% |  98.8ms |     757 | `createState`    | uneval/src/index.ts:144:21 |
|  0.0% |   0.1ms |       1 | `uneval`         | uneval/src/index.ts:75:16  |
|  0.0% |   0.1ms |       1 | `traverse`       | uneval/src/index.ts:164:20 |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

|     % |    Time | Samples | Caller                 | Location                            |
| ----: | ------: | ------: | ---------------------- | ----------------------------------- |
| 99.6% | 364.3ms |   2,793 | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30 |
|  0.2% |   0.8ms |       6 | `unevalObject`         | uneval/src/internal/object.ts:20:29 |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

|     % |    Time | Samples | Caller                 | Location                               |
| ----: | ------: | ------: | ---------------------- | -------------------------------------- |
| 38.2% | 105.6ms |     808 | `unevalObjectLike`     | uneval/src/internal/object.ts:103:26   |
| 33.0% |  91.3ms |     701 | `unevalArray`          | uneval/src/internal/collection.ts:7:47 |
| 11.2% |  31.1ms |     239 | `unevalWithoutCustom`  | uneval/src/internal/index.ts:14:37     |
|  7.1% |  19.8ms |     153 | `uneval`               | uneval/src/index.ts:75:16              |
|  6.4% |  17.7ms |     135 | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30    |

##### `getType` (uneval/src/internal/type.ts:4:24)

|      % |    Time | Samples | Caller           | Location                   |
| -----: | ------: | ------: | ---------------- | -------------------------- |
| 100.0% | 205.2ms |   1,575 | `traverseObject` | uneval/src/index.ts:204:26 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32)

|     % |    Time | Samples | Caller             | Location                             |
| ----: | ------: | ------: | ------------------ | ------------------------------------ |
| 99.9% | 175.4ms |   1,345 | `unevalObjectLike` | uneval/src/internal/object.ts:103:26 |

##### `createState` (uneval/src/index.ts:144:21)

|      % |    Time | Samples | Caller   | Location                  |
| -----: | ------: | ------: | -------- | ------------------------- |
| 100.0% | 151.0ms |   1,151 | `uneval` | uneval/src/index.ts:75:16 |

##### `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` (`<native>`)

|      % |    Time | Samples | Caller                   | Location                             |
| -----: | ------: | ------: | ------------------------ | ------------------------------------ |
| 100.0% | 128.6ms |     983 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:384:32 |

##### `unevalObject` (uneval/src/internal/object.ts:20:29)

|     % |   Time | Samples | Caller                 | Location                            |
| ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| 97.4% | 42.8ms |     329 | `unevalInternal`       | uneval/src/internal/index.ts:25:32  |
|  0.3% |  0.1ms |       1 | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30 |

##### `isObject` (uneval/src/internal/object.ts:434:25)

|      % |   Time | Samples | Caller           | Location                           |
| -----: | -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 40.3ms |     309 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `unevalString` (uneval/src/internal/primitive.ts:133:29)

|      % |   Time | Samples | Caller           | Location                           |
| -----: | -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 40.3ms |     308 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `uneval` (uneval/src/index.ts:75:16)

|     % |   Time | Samples | Caller        | Location                      |
| ----: | -----: | ------: | ------------- | ----------------------------- |
| 97.6% | 37.1ms |     284 | `(anonymous)` | uneval/scripts/profile.ts:1:1 |

### Total time

Functions ranked by total time in the function and all its callees.

|     % |    Time | Samples | Function                                         | Location                                                                                     |
| ----: | ------: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| 94.9% |   5.77s |  44,215 | `(anonymous)`                                    | uneval/scripts/profile.ts:1:1                                                                |
| 93.5% |   5.68s |  43,581 | `uneval`                                         | uneval/src/index.ts:75:16                                                                    |
| 66.2% |   4.02s |  30,873 | `unevalInternal`                                 | uneval/src/internal/index.ts:25:32                                                           |
| 65.2% |   3.96s |  30,378 | `unevalObject`                                   | uneval/src/internal/object.ts:20:29                                                          |
| 64.9% |   3.94s |  30,243 | `unevalObjectInternal`                           | uneval/src/internal/object.ts:68:30                                                          |
| 50.0% |   3.04s |  23,298 | `unevalObjectLike`                               | uneval/src/internal/object.ts:103:26                                                         |
| 28.9% |   1.75s |  13,450 | `unevalArray`                                    | uneval/src/internal/collection.ts:7:47                                                       |
| 26.8% |   1.63s |  12,493 | `createState`                                    | uneval/src/index.ts:144:21                                                                   |
| 24.3% |   1.48s |  11,343 | `traverse`                                       | uneval/src/index.ts:164:20                                                                   |
| 22.7% |   1.38s |  10,597 | `traverseObject`                                 | uneval/src/index.ts:204:26                                                                   |
| 20.1% |   1.22s |   9,394 | `unevalObjectLiteralKey`                         | uneval/src/internal/object.ts:384:32                                                         |
| 15.1% | 921.4ms |   7,064 | `unevalWithoutCustom`                            | uneval/src/internal/index.ts:14:37                                                           |
|  9.4% | 569.8ms |   4,369 | `unevalString`                                   | uneval/src/internal/primitive.ts:133:29                                                      |
|  8.7% | 529.6ms |   4,061 | `unevalLiteral`                                  | uneval/src/internal/primitive.ts:139:23                                                      |
|  6.9% | 420.6ms |   3,215 | `unevalNumber`                                   | uneval/src/internal/primitive.ts:12:29                                                       |
|  3.4% | 205.2ms |   1,575 | `getType`                                        | uneval/src/internal/type.ts:4:24                                                             |
|  2.3% | 139.7ms |   1,060 | `(garbage collector)`                            | `<native>`                                                                                   |
|  2.1% | 128.6ms |     983 | `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` | `<native>`                                                                                   |
|  1.7% | 106.1ms |     817 | `(program)`                                      | `<native>`                                                                                   |
|  1.1% |  68.4ms |     515 | `sample`                                         | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16 |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to V8 JIT inlining.

##### `(anonymous)` (uneval/scripts/profile.ts:1:1)

|     % |   Time | Samples | Callee           | Location                                                                                     |
| ----: | -----: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
| 98.5% |  5.68s |  43,574 | `uneval`         | uneval/src/index.ts:75:16                                                                    |
|  1.2% | 68.4ms |     515 | `sample`         | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16 |
|  0.0% |  2.2ms |      17 | `unevalInternal` | uneval/src/internal/index.ts:25:32                                                           |
|  0.0% |  1.9ms |      15 | `anything`       | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:8168:18 |
|  0.0% |  0.8ms |       6 | `traverseObject` | uneval/src/index.ts:204:26                                                                   |

##### `uneval` (uneval/src/index.ts:75:16)

|     % |  Time | Samples | Callee                 | Location                            |
| ----: | ----: | ------: | ---------------------- | ----------------------------------- |
| 70.6% | 4.01s |  30,789 | `unevalInternal`       | uneval/src/internal/index.ts:25:32  |
| 28.7% | 1.63s |  12,493 | `createState`          | uneval/src/index.ts:144:21          |
|  0.0% | 0.9ms |       7 | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30 |
|  0.0% | 0.1ms |       1 | `traverse`             | uneval/src/index.ts:164:20          |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

|     % |    Time | Samples | Callee          | Location                                |
| ----: | ------: | ------: | --------------- | --------------------------------------- |
| 98.4% |   3.96s |  30,370 | `unevalObject`  | uneval/src/internal/object.ts:20:29     |
| 14.1% | 569.8ms |   4,369 | `unevalString`  | uneval/src/internal/primitive.ts:133:29 |
| 10.4% | 420.6ms |   3,215 | `unevalNumber`  | uneval/src/internal/primitive.ts:12:29  |
|  1.0% |  40.3ms |     309 | `isObject`      | uneval/src/internal/object.ts:434:25    |
|  0.1% |   6.0ms |      46 | `unevalBoolean` | uneval/src/internal/primitive.ts:8:30   |

##### `unevalObject` (uneval/src/internal/object.ts:20:29)

|     % |  Time | Samples | Callee                 | Location                               |
| ----: | ----: | ------: | ---------------------- | -------------------------------------- |
| 99.5% | 3.94s |  30,223 | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30    |
|  0.0% | 0.8ms |       6 | `unevalArray`          | uneval/src/internal/collection.ts:7:47 |
|  0.0% | 0.5ms |       3 | `unevalObjectLike`     | uneval/src/internal/object.ts:103:26   |

##### `unevalObjectInternal` (uneval/src/internal/object.ts:68:30)

|     % |   Time | Samples | Callee             | Location                               |
| ----: | -----: | ------: | ------------------ | -------------------------------------- |
| 77.0% |  3.04s |  23,291 | `unevalObjectLike` | uneval/src/internal/object.ts:103:26   |
| 44.4% |  1.75s |  13,438 | `unevalArray`      | uneval/src/internal/collection.ts:7:47 |
|  0.4% | 17.7ms |     135 | `unevalInternal`   | uneval/src/internal/index.ts:25:32     |
|  0.0% |  0.1ms |       1 | `unevalObject`     | uneval/src/internal/object.ts:20:29    |

##### `unevalObjectLike` (uneval/src/internal/object.ts:103:26)

|     % |   Time | Samples | Callee                     | Location                             |
| ----: | -----: | ------: | -------------------------- | ------------------------------------ |
| 49.8% |  1.51s |  11,590 | `unevalInternal`           | uneval/src/internal/index.ts:25:32   |
| 40.3% |  1.22s |   9,393 | `unevalObjectLiteralKey`   | uneval/src/internal/object.ts:384:32 |
|  0.3% | 10.6ms |      82 | `isRegularDataDescriptor`  | uneval/src/internal/object.ts:287:33 |
|  0.0% |  1.3ms |      10 | `(anonymous)`              | uneval/src/internal/object.ts:201:30 |
|  0.0% |  0.8ms |       6 | `isDefaultObjectPrototype` | uneval/src/internal/object.ts:429:41 |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

|     % |  Time | Samples | Callee               | Location                                |
| ----: | ----: | ------: | -------------------- | --------------------------------------- |
| 85.2% | 1.49s |  11,459 | `unevalInternal`     | uneval/src/internal/index.ts:25:32      |
|  0.2% | 2.7ms |      21 | `unevalObjectAssign` | uneval/src/internal/collection.ts:89:28 |

##### `createState` (uneval/src/index.ts:144:21)

|     % |  Time | Samples | Callee     | Location                   |
| ----: | ----: | ------: | ---------- | -------------------------- |
| 90.7% | 1.48s |  11,342 | `traverse` | uneval/src/index.ts:164:20 |

##### `traverse` (uneval/src/index.ts:164:20)

|     % |  Time | Samples | Callee           | Location                   |
| ----: | ----: | ------: | ---------------- | -------------------------- |
| 93.3% | 1.38s |  10,585 | `traverseObject` | uneval/src/index.ts:204:26 |
|  0.0% | 0.1ms |       1 | `traverse`       | uneval/src/index.ts:164:20 |

##### `traverseObject` (uneval/src/index.ts:204:26)

|     % |    Time | Samples | Callee                     | Location                             |
| ----: | ------: | ------: | -------------------------- | ------------------------------------ |
| 60.5% | 837.7ms |   6,422 | `traverse`                 | uneval/src/index.ts:164:20           |
| 14.8% | 205.2ms |   1,575 | `getType`                  | uneval/src/internal/type.ts:4:24     |
|  0.1% |   1.7ms |      13 | `traverseObject`           | uneval/src/index.ts:204:26           |
|  0.1% |   1.2ms |       9 | `isDefaultObjectPrototype` | uneval/src/internal/object.ts:429:41 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32)

|     % |    Time | Samples | Callee                                           | Location                           |
| ----: | ------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 75.2% | 921.4ms |   7,064 | `unevalWithoutCustom`                            | uneval/src/internal/index.ts:14:37 |
| 10.5% | 128.6ms |     983 | `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` | `<native>`                         |
|  0.0% |   0.1ms |       1 | `unevalInternal`                                 | uneval/src/internal/index.ts:25:32 |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37)

|     % |    Time | Samples | Callee           | Location                           |
| ----: | ------: | ------: | ---------------- | ---------------------------------- |
| 43.5% | 400.9ms |   3,074 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `unevalString` (uneval/src/internal/primitive.ts:133:29)

|     % |    Time | Samples | Callee          | Location                                |
| ----: | ------: | ------: | --------------- | --------------------------------------- |
| 92.9% | 529.6ms |   4,061 | `unevalLiteral` | uneval/src/internal/primitive.ts:139:23 |

##### `sample` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16)

|     % |   Time | Samples | Callee         | Location                                                                                     |
| ----: | -----: | ------: | -------------- | -------------------------------------------------------------------------------------------- |
| 97.5% | 66.7ms |     502 | `mapHelper`    | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20   |
|  0.4% |  0.3ms |       2 | `streamSample` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2524:22 |

## Hottest call stacks

Call stacks ranked by time spent in their top frame.

Common call stack: `uneval` (uneval/src/index.ts:75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1)

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.2% | 438.5ms |   3,351 | `traverseObject` (uneval/src/index.ts:204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                                                                          |
| 7.2% | 437.0ms |   3,349 | `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                                                                                                                                                                                           |
| 5.5% | 335.8ms |   2,571 | `traverseObject` (uneval/src/index.ts:204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                        |
| 4.1% | 250.8ms |   1,924 | `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                                                                                          |
| 4.0% | 240.5ms |   1,841 | `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                                                                                                                                                                                                                         |
| 3.0% | 184.9ms |   1,412 | `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                  |
| 3.0% | 182.8ms |   1,402 | `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                             |
| 2.8% | 169.0ms |   1,296 | `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                                                                                                                                                                |
| 2.7% | 162.3ms |   1,247 | `unevalLiteral` (uneval/src/internal/primitive.ts:139:23) ← `unevalString` (133:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalWithoutCustom` (14:37) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                         |
| 2.5% | 153.3ms |   1,175 | `traverse` (uneval/src/index.ts:164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                                                    |
| 2.5% | 151.0ms |   1,151 | `createState` (uneval/src/index.ts:144:21)                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.9% | 113.1ms |     866 | `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                                           |
| 1.7% | 105.4ms |     807 | `traverseObject` (uneval/src/index.ts:204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                      |
| 1.7% | 105.2ms |     806 | `getType` (uneval/src/internal/type.ts:4:24) ← `traverseObject` (uneval/src/index.ts:204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                           |
| 1.7% | 104.9ms |     803 | `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                |
| 1.6% |  99.9ms |     766 | `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) |
| 1.6% |  98.8ms |     757 | `traverse` (uneval/src/index.ts:164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.6% |  97.9ms |     751 | `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                            |
| 1.5% |  92.9ms |     713 | `traverse` (uneval/src/index.ts:164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                  |
| 1.4% |  87.0ms |     665 | `unevalNumber` (uneval/src/internal/primitive.ts:12:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                                                                         |

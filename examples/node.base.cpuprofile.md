# CPU profile

Took 11.47s over 9,111 samples (1.3ms per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| ours              | 96.5% |  11.07s |   8,816 |
| garbage collector |  1.7% | 192.7ms |     153 |
| program           |  1.5% | 176.9ms |     141 |
| stdlib            |  0.3% |  29.1ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                 | Location                                |
| ----: | ------: | ------: | ------------------------ | --------------------------------------- |
| 22.8% |   2.61s |   2,084 | `unevalObjectLike`       | uneval/src/internal/object.ts:105:26    |
| 19.7% |   2.26s |   1,800 | `traverseObject`         | uneval/src/index.ts:205:26              |
| 10.2% |   1.16s |     931 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:386:32    |
| 10.2% |   1.16s |     927 | `unevalNumber`           | uneval/src/internal/primitive.ts:12:29  |
|  8.4% | 967.5ms |     771 | `unevalArray`            | uneval/src/internal/collection.ts:7:47  |
|  7.0% | 808.2ms |     642 | `unevalObjectInternal`   | uneval/src/internal/object.ts:69:30     |
|  5.3% | 603.1ms |     480 | `unevalInternal`         | uneval/src/internal/index.ts:25:32      |
|  2.9% | 335.0ms |     267 | `getType`                | uneval/src/internal/type.ts:4:24        |
|  2.2% | 257.7ms |     205 | `traverse`               | uneval/src/index.ts:165:20              |
|  2.0% | 227.2ms |     181 | `uneval`                 | uneval/src/index.ts:76:16               |
|  1.8% | 205.9ms |     164 | `unevalLiteral`          | uneval/src/internal/primitive.ts:139:23 |
|  1.7% | 199.8ms |     159 | `createState`            | uneval/src/index.ts:145:21              |
|  1.7% | 192.7ms |     153 | `(garbage collector)`    | `<unknown>`                             |
|  1.5% | 176.9ms |     141 | `(program)`              | `<unknown>`                             |
|  1.1% | 125.7ms |     100 | `unevalObject`           | uneval/src/internal/object.ts:21:29     |
|  0.5% |  61.7ms |      49 | `unevalWithoutCustom`    | uneval/src/internal/index.ts:14:37      |
|  0.3% |  35.1ms |      28 | `unevalString`           | uneval/src/internal/primitive.ts:133:29 |
|  0.2% |  19.8ms |      18 | `(anonymous)`            | uneval/scripts/profile.ts               |
|  0.1% |  12.5ms |      10 | `unevalBoolean`          | uneval/src/internal/primitive.ts:8:30   |

#### Lines

Lines ranked by contribution to each function's self time.

##### `unevalObjectLike` (uneval/src/internal/object.ts:105:26)

|     % |    Time | Samples | Location                          |
| ----: | ------: | ------: | --------------------------------- |
| 37.2% | 973.3ms |     775 | uneval/src/internal/object.ts:137 |
| 27.7% | 725.9ms |     578 | uneval/src/internal/object.ts:203 |
| 19.5% | 511.1ms |     407 | uneval/src/internal/object.ts:130 |
|  5.3% | 138.1ms |     110 | uneval/src/internal/object.ts:140 |
|  2.7% |  71.6ms |      57 | uneval/src/internal/object.ts:144 |

##### `traverseObject` (uneval/src/index.ts:205:26)

|     % |    Time | Samples | Location                |
| ----: | ------: | ------: | ----------------------- |
| 33.6% | 759.0ms |     604 | uneval/src/index.ts:211 |
| 17.9% | 404.6ms |     322 | uneval/src/index.ts:220 |
| 10.7% | 241.2ms |     192 | uneval/src/index.ts:179 |
|  9.8% | 222.4ms |     177 | uneval/src/index.ts:246 |
|  5.8% | 132.0ms |     105 | uneval/src/index.ts:209 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:386:32)

|     % |    Time | Samples | Location                          |
| ----: | ------: | ------: | --------------------------------- |
| 26.2% | 306.5ms |     244 | uneval/src/internal/object.ts:424 |
|  9.7% | 113.1ms |      90 | uneval/src/internal/object.ts:420 |
|  8.7% | 101.7ms |      81 | uneval/src/internal/object.ts:408 |
|  7.7% |  90.5ms |      72 | uneval/src/internal/object.ts:146 |
|  6.5% |  76.6ms |      61 | uneval/src/internal/object.ts:149 |

##### `unevalNumber` (uneval/src/internal/primitive.ts:12:29)

|      % |  Time | Samples | Location                            |
| -----: | ----: | ------: | ----------------------------------- |
| 100.0% | 1.16s |     927 | uneval/src/internal/primitive.ts:22 |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

|     % |    Time | Samples | Location                              |
| ----: | ------: | ------: | ------------------------------------- |
| 52.0% | 503.2ms |     401 | uneval/src/internal/collection.ts:86  |
|  5.3% |  51.5ms |      41 | uneval/src/internal/collection.ts:10  |
|  4.5% |  43.9ms |      35 | uneval/src/internal/collection.ts:146 |
|  4.2% |  40.2ms |      32 | uneval/src/internal/collection.ts:62  |
|  3.5% |  33.9ms |      27 | uneval/src/internal/collection.ts:52  |

##### `unevalObjectInternal` (uneval/src/internal/object.ts:69:30)

|     % |    Time | Samples | Location                         |
| ----: | ------: | ------: | -------------------------------- |
| 57.8% | 467.0ms |     371 | uneval/src/internal/object.ts:79 |
| 35.2% | 284.5ms |     226 | uneval/src/internal/object.ts:78 |
|  5.1% |  41.5ms |      33 | uneval/src/internal/object.ts:75 |
|  1.9% |  15.1ms |      12 | uneval/src/internal/object.ts:70 |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

|     % |    Time | Samples | Location                         |
| ----: | ------: | ------: | -------------------------------- |
| 33.5% | 202.2ms |     161 | uneval/src/internal/index.ts:33  |
|  8.5% |  51.5ms |      41 | uneval/src/internal/index.ts:146 |
|  7.1% |  42.7ms |      34 | uneval/src/internal/index.ts:149 |
|  4.8% |  28.9ms |      23 | uneval/src/internal/index.ts:48  |
|  4.8% |  28.9ms |      23 | uneval/src/internal/index.ts:155 |

##### `getType` (uneval/src/internal/type.ts:4:24)

|     % |    Time | Samples | Location                       |
| ----: | ------: | ------: | ------------------------------ |
| 81.7% | 273.5ms |     218 | uneval/src/internal/type.ts:17 |
| 18.3% |  61.5ms |      49 | uneval/src/internal/type.ts:7  |

##### `traverse` (uneval/src/index.ts:165:20)

|     % |   Time | Samples | Location                |
| ----: | -----: | ------: | ----------------------- |
| 26.8% | 69.1ms |      55 | uneval/src/index.ts:201 |
| 26.3% | 67.9ms |      54 | uneval/src/index.ts:185 |
| 23.9% | 61.6ms |      49 | uneval/src/index.ts:200 |
| 22.9% | 59.1ms |      47 | uneval/src/index.ts:202 |

##### `uneval` (uneval/src/index.ts:76:16)

|     % |   Time | Samples | Location                |
| ----: | -----: | ------: | ----------------------- |
| 22.1% | 50.2ms |      40 | uneval/src/index.ts:78  |
|  9.9% | 22.6ms |      18 | uneval/src/index.ts:179 |
|  9.4% | 21.3ms |      17 | uneval/src/index.ts:165 |
|  8.3% | 18.8ms |      15 | uneval/src/index.ts:153 |
|  6.1% | 13.8ms |      11 | uneval/src/index.ts:163 |

##### `unevalLiteral` (uneval/src/internal/primitive.ts:139:23)

|      % |    Time | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 205.9ms |     164 | uneval/src/internal/primitive.ts:148 |

##### `createState` (uneval/src/index.ts:145:21)

|     % |   Time | Samples | Location                |
| ----: | -----: | ------: | ----------------------- |
| 21.4% | 42.7ms |      34 | uneval/src/index.ts:338 |
| 21.4% | 42.7ms |      34 | uneval/src/index.ts:151 |
| 20.1% | 40.2ms |      32 | uneval/src/index.ts:150 |
| 18.9% | 37.7ms |      30 | uneval/src/index.ts:163 |
| 18.2% | 36.4ms |      29 | uneval/src/index.ts:149 |

##### `unevalObject` (uneval/src/internal/object.ts:21:29)

|     % |   Time | Samples | Location                         |
| ----: | -----: | ------: | -------------------------------- |
| 34.0% | 42.7ms |      34 | uneval/src/internal/object.ts:26 |
| 17.0% | 21.4ms |      17 | uneval/src/internal/object.ts:31 |
| 10.0% | 12.6ms |      10 | uneval/src/internal/object.ts:75 |
| 10.0% | 12.6ms |      10 | uneval/src/internal/object.ts:28 |
|  8.0% | 10.0ms |       8 | uneval/src/internal/object.ts:79 |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37)

|     % |   Time | Samples | Location                         |
| ----: | -----: | ------: | -------------------------------- |
| 26.5% | 16.4ms |      13 | uneval/src/internal/index.ts:146 |
| 20.4% | 12.6ms |      10 | uneval/src/internal/index.ts:149 |
| 10.2% |  6.3ms |       5 | uneval/src/internal/index.ts:155 |
|  8.2% |  5.0ms |       4 | uneval/src/internal/index.ts:184 |
|  8.1% |  5.0ms |       4 | uneval/src/internal/index.ts:147 |

##### `unevalString` (uneval/src/internal/primitive.ts:133:29)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 35.1ms |      28 | uneval/src/internal/primitive.ts:134 |

##### `(anonymous)` (uneval/scripts/profile.ts)

|     % |   Time | Samples | Location                     |
| ----: | -----: | ------: | ---------------------------- |
| 80.0% | 15.8ms |      12 | uneval/scripts/profile.ts:23 |
| 20.0% |  4.0ms |       3 | uneval/scripts/profile.ts:22 |

##### `unevalBoolean` (uneval/src/internal/primitive.ts:8:30)

|      % |   Time | Samples | Location                            |
| -----: | -----: | ------: | ----------------------------------- |
| 100.0% | 12.5ms |      10 | uneval/src/internal/primitive.ts:10 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `unevalObjectLike` (uneval/src/internal/object.ts:105:26)

|      % |  Time | Samples | Caller                 | Location                            |
| -----: | ----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 2.61s |   2,083 | `unevalObjectInternal` | uneval/src/internal/object.ts:69:30 |

##### `traverseObject` (uneval/src/index.ts:205:26)

|     % |  Time | Samples | Caller        | Location                   |
| ----: | ----: | ------: | ------------- | -------------------------- |
| 99.8% | 2.25s |   1,797 | `traverse`    | uneval/src/index.ts:165:20 |
|  0.1% | 1.3ms |       1 | `(anonymous)` | uneval/scripts/profile.ts  |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:386:32)

|     % |  Time | Samples | Caller                 | Location                             |
| ----: | ----: | ------: | ---------------------- | ------------------------------------ |
| 99.3% | 1.16s |     924 | `unevalObjectLike`     | uneval/src/internal/object.ts:105:26 |
|  0.4% | 5.0ms |       4 | `unevalObjectInternal` | uneval/src/internal/object.ts:69:30  |

##### `unevalNumber` (uneval/src/internal/primitive.ts:12:29)

|      % |  Time | Samples | Caller           | Location                           |
| -----: | ----: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 1.16s |     927 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

|     % |    Time | Samples | Caller                 | Location                            |
| ----: | ------: | ------: | ---------------------- | ----------------------------------- |
| 99.7% | 965.0ms |     769 | `unevalObjectInternal` | uneval/src/internal/object.ts:69:30 |
|  0.3% |   2.5ms |       2 | `unevalInternal`       | uneval/src/internal/index.ts:25:32  |

##### `unevalObjectInternal` (uneval/src/internal/object.ts:69:30)

|      % |    Time | Samples | Caller         | Location                            |
| -----: | ------: | ------: | -------------- | ----------------------------------- |
| 100.0% | 808.2ms |     642 | `unevalObject` | uneval/src/internal/object.ts:21:29 |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

|     % |    Time | Samples | Caller                 | Location                               |
| ----: | ------: | ------: | ---------------------- | -------------------------------------- |
| 67.5% | 407.0ms |     324 | `unevalObjectLike`     | uneval/src/internal/object.ts:105:26   |
| 15.6% |  94.2ms |      75 | `unevalArray`          | uneval/src/internal/collection.ts:7:47 |
| 13.8% |  83.0ms |      66 | `uneval`               | uneval/src/index.ts:76:16              |
|  1.1% |   6.3ms |       5 | `unevalObjectInternal` | uneval/src/internal/object.ts:69:30    |
|  0.2% |   1.3ms |       1 | `(anonymous)`          | uneval/scripts/profile.ts              |

##### `getType` (uneval/src/internal/type.ts:4:24)

|      % |    Time | Samples | Caller           | Location                   |
| -----: | ------: | ------: | ---------------- | -------------------------- |
| 100.0% | 335.0ms |     267 | `traverseObject` | uneval/src/index.ts:205:26 |

##### `traverse` (uneval/src/index.ts:165:20)

|     % |    Time | Samples | Caller           | Location                   |
| ----: | ------: | ------: | ---------------- | -------------------------- |
| 56.6% | 145.8ms |     116 | `traverseObject` | uneval/src/index.ts:205:26 |
| 43.4% | 111.9ms |      89 | `createState`    | uneval/src/index.ts:145:21 |

##### `uneval` (uneval/src/index.ts:76:16)

|     % |    Time | Samples | Caller        | Location                  |
| ----: | ------: | ------: | ------------- | ------------------------- |
| 98.3% | 223.5ms |     178 | `(anonymous)` | uneval/scripts/profile.ts |

##### `unevalLiteral` (uneval/src/internal/primitive.ts:139:23)

|      % |    Time | Samples | Caller         | Location                                |
| -----: | ------: | ------: | -------------- | --------------------------------------- |
| 100.0% | 205.9ms |     164 | `unevalString` | uneval/src/internal/primitive.ts:133:29 |

##### `createState` (uneval/src/index.ts:145:21)

|      % |    Time | Samples | Caller   | Location                  |
| -----: | ------: | ------: | -------- | ------------------------- |
| 100.0% | 199.8ms |     159 | `uneval` | uneval/src/index.ts:76:16 |

##### `unevalObject` (uneval/src/internal/object.ts:21:29)

|     % |    Time | Samples | Caller                 | Location                             |
| ----: | ------: | ------: | ---------------------- | ------------------------------------ |
| 90.0% | 113.1ms |      90 | `unevalInternal`       | uneval/src/internal/index.ts:25:32   |
|  2.0% |   2.5ms |       2 | `unevalObjectLike`     | uneval/src/internal/object.ts:105:26 |
|  1.0% |   1.3ms |       1 | `uneval`               | uneval/src/index.ts:76:16            |
|  1.0% |   1.3ms |       1 | `unevalObjectInternal` | uneval/src/internal/object.ts:69:30  |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37)

|     % |   Time | Samples | Caller                   | Location                             |
| ----: | -----: | ------: | ------------------------ | ------------------------------------ |
| 95.9% | 59.1ms |      47 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:386:32 |

##### `unevalString` (uneval/src/internal/primitive.ts:133:29)

|      % |   Time | Samples | Caller           | Location                           |
| -----: | -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 35.1ms |      28 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `unevalBoolean` (uneval/src/internal/primitive.ts:8:30)

|      % |   Time | Samples | Caller           | Location                           |
| -----: | -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 12.5ms |      10 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                 | Location                                |
| ----: | ------: | ------: | ------------------------ | --------------------------------------- |
| 96.5% |  11.06s |   8,791 | `(anonymous)`            | uneval/scripts/profile.ts               |
| 96.1% |  11.02s |   8,773 | `uneval`                 | uneval/src/index.ts:76:16               |
| 67.6% |   7.75s |   6,173 | `unevalInternal`         | uneval/src/internal/index.ts:25:32      |
| 66.4% |   7.61s |   6,059 | `unevalObject`           | uneval/src/internal/object.ts:21:29     |
| 65.9% |   7.56s |   6,020 | `unevalObjectInternal`   | uneval/src/internal/object.ts:69:30     |
| 51.1% |   5.86s |   4,668 | `unevalObjectLike`       | uneval/src/internal/object.ts:105:26    |
| 29.9% |   3.42s |   2,727 | `unevalArray`            | uneval/src/internal/collection.ts:7:47  |
| 26.6% |   3.05s |   2,428 | `createState`            | uneval/src/index.ts:145:21              |
| 24.9% |   2.85s |   2,269 | `traverse`               | uneval/src/index.ts:165:20              |
| 23.9% |   2.74s |   2,183 | `traverseObject`         | uneval/src/index.ts:205:26              |
| 12.1% |   1.38s |   1,104 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:386:32    |
| 10.2% |   1.16s |     927 | `unevalNumber`           | uneval/src/internal/primitive.ts:12:29  |
|  2.9% | 335.0ms |     267 | `getType`                | uneval/src/internal/type.ts:4:24        |
|  2.1% | 241.0ms |     192 | `unevalString`           | uneval/src/internal/primitive.ts:133:29 |
|  1.9% | 219.8ms |     175 | `unevalWithoutCustom`    | uneval/src/internal/index.ts:14:37      |
|  1.8% | 205.9ms |     164 | `unevalLiteral`          | uneval/src/internal/primitive.ts:139:23 |
|  1.7% | 192.7ms |     153 | `(garbage collector)`    | `<unknown>`                             |
|  1.5% | 176.9ms |     141 | `(program)`              | `<unknown>`                             |
|  0.1% |  12.5ms |      10 | `unevalBoolean`          | uneval/src/internal/primitive.ts:8:30   |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `(anonymous)` (uneval/scripts/profile.ts)

|     % |   Time | Samples | Callee           | Location                           |
| ----: | -----: | ------: | ---------------- | ---------------------------------- |
| 99.5% | 11.01s |   8,770 | `uneval`         | uneval/src/index.ts:76:16          |
| <0.1% |  1.3ms |       1 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |
| <0.1% |  1.3ms |       1 | `traverseObject` | uneval/src/index.ts:205:26         |

##### `uneval` (uneval/src/index.ts:76:16)

|     % |  Time | Samples | Callee           | Location                            |
| ----: | ----: | ------: | ---------------- | ----------------------------------- |
| 70.2% | 7.74s |   6,163 | `unevalInternal` | uneval/src/internal/index.ts:25:32  |
| 27.7% | 3.05s |   2,428 | `createState`    | uneval/src/index.ts:145:21          |
| <0.1% | 1.3ms |       1 | `unevalObject`   | uneval/src/internal/object.ts:21:29 |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

|     % |    Time | Samples | Callee          | Location                                |
| ----: | ------: | ------: | --------------- | --------------------------------------- |
| 98.0% |   7.60s |   6,052 | `unevalObject`  | uneval/src/internal/object.ts:21:29     |
| 15.0% |   1.16s |     927 | `unevalNumber`  | uneval/src/internal/primitive.ts:12:29  |
|  3.1% | 241.0ms |     192 | `unevalString`  | uneval/src/internal/primitive.ts:133:29 |
|  0.2% |  12.5ms |      10 | `unevalBoolean` | uneval/src/internal/primitive.ts:8:30   |
| <0.1% |   2.5ms |       2 | `unevalArray`   | uneval/src/internal/collection.ts:7:47  |

##### `unevalObject` (uneval/src/internal/object.ts:21:29)

|     % |  Time | Samples | Callee                 | Location                            |
| ----: | ----: | ------: | ---------------------- | ----------------------------------- |
| 99.4% | 7.56s |   6,020 | `unevalObjectInternal` | uneval/src/internal/object.ts:69:30 |

##### `unevalObjectInternal` (uneval/src/internal/object.ts:69:30)

|     % |  Time | Samples | Callee                   | Location                               |
| ----: | ----: | ------: | ------------------------ | -------------------------------------- |
| 77.5% | 5.86s |   4,667 | `unevalObjectLike`       | uneval/src/internal/object.ts:105:26   |
| 45.3% | 3.42s |   2,726 | `unevalArray`            | uneval/src/internal/collection.ts:7:47 |
|  0.1% | 6.3ms |       5 | `unevalInternal`         | uneval/src/internal/index.ts:25:32     |
|  0.1% | 5.0ms |       4 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:386:32   |
| <0.1% | 1.3ms |       1 | `unevalObject`           | uneval/src/internal/object.ts:21:29    |

##### `unevalObjectLike` (uneval/src/internal/object.ts:105:26)

|     % |  Time | Samples | Callee                   | Location                             |
| ----: | ----: | ------: | ------------------------ | ------------------------------------ |
| 52.0% | 3.04s |   2,425 | `unevalInternal`         | uneval/src/internal/index.ts:25:32   |
| 23.5% | 1.37s |   1,097 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:386:32 |
| <0.1% | 2.5ms |       2 | `unevalObject`           | uneval/src/internal/object.ts:21:29  |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

|     % |  Time | Samples | Callee           | Location                           |
| ----: | ----: | ------: | ---------------- | ---------------------------------- |
| 80.2% | 2.74s |   2,186 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `createState` (uneval/src/index.ts:145:21)

|     % |  Time | Samples | Callee     | Location                   |
| ----: | ----: | ------: | ---------- | -------------------------- |
| 93.4% | 2.85s |   2,269 | `traverse` | uneval/src/index.ts:165:20 |

##### `traverse` (uneval/src/index.ts:165:20)

|     % |  Time | Samples | Callee           | Location                   |
| ----: | ----: | ------: | ---------------- | -------------------------- |
| 96.1% | 2.73s |   2,180 | `traverseObject` | uneval/src/index.ts:205:26 |

##### `traverseObject` (uneval/src/index.ts:205:26)

|     % |    Time | Samples | Callee     | Location                         |
| ----: | ------: | ------: | ---------- | -------------------------------- |
| 55.7% |   1.52s |   1,215 | `traverse` | uneval/src/index.ts:165:20       |
| 12.2% | 335.0ms |     267 | `getType`  | uneval/src/internal/type.ts:4:24 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:386:32)

|     % |    Time | Samples | Callee                | Location                           |
| ----: | ------: | ------: | --------------------- | ---------------------------------- |
| 15.7% | 217.3ms |     173 | `unevalWithoutCustom` | uneval/src/internal/index.ts:14:37 |

##### `unevalString` (uneval/src/internal/primitive.ts:133:29)

|     % |    Time | Samples | Callee          | Location                                |
| ----: | ------: | ------: | --------------- | --------------------------------------- |
| 85.4% | 205.9ms |     164 | `unevalLiteral` | uneval/src/internal/primitive.ts:139:23 |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37)

|     % |    Time | Samples | Callee           | Location                           |
| ----: | ------: | ------: | ---------------- | ---------------------------------- |
| 71.9% | 158.1ms |     126 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(anonymous)` (uneval/scripts/profile.ts)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11.2% |   1.28s |   1,024 | `unevalObjectLike` (uneval/src/internal/object.ts:105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                                                                                                                                                                                                                              |
|  9.1% |   1.04s |     832 | `traverseObject` (uneval/src/index.ts:205:26) ← `traverse` (165:20) ← `createState` (145:21) ← `uneval` (76:16)                                                                                                                                                                                                                                                                                                                                                 |
|  7.7% | 878.8ms |     699 | `traverseObject` (uneval/src/index.ts:205:26) ← `traverse` (165:20) ← `traverseObject` (205:26) ← `traverse` (165:20) ← `createState` (145:21) ← `uneval` (76:16)                                                                                                                                                                                                                                                                                               |
|  4.9% | 567.4ms |     452 | `unevalObjectLiteralKey` (uneval/src/internal/object.ts:386:32) ← `unevalObjectLike` (105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                                                                                                                                                                                          |
|  4.2% | 483.0ms |     384 | `unevalObjectLike` (uneval/src/internal/object.ts:105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                                                |
|  4.1% | 474.8ms |     378 | `unevalObjectLike` (uneval/src/internal/object.ts:105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                     |
|  3.8% | 439.6ms |     350 | `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                                                                                                                                                                                                   |
|  3.2% | 371.1ms |     295 | `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                                                                                                                                                                                                                                                            |
|  2.5% | 289.8ms |     230 | `traverseObject` (uneval/src/index.ts:205:26) ← `traverse` (165:20) ← `traverseObject` (205:26) ← `traverse` (165:20) ← `traverseObject` (205:26) ← `traverse` (165:20) ← `createState` (145:21) ← `uneval` (76:16)                                                                                                                                                                                                                                             |
|  2.3% | 264.9ms |     211 | `unevalNumber` (uneval/src/internal/primitive.ts:12:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                                                                                                            |
|  2.1% | 238.0ms |     189 | `unevalNumber` (uneval/src/internal/primitive.ts:12:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                                                                                 |
|  2.0% | 225.2ms |     179 | `unevalObjectLiteralKey` (uneval/src/internal/object.ts:386:32) ← `unevalObjectLike` (105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                            |
|  1.9% | 223.5ms |     178 | `uneval` (uneval/src/index.ts:76:16)                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.9% | 213.1ms |     170 | `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                     |
|  1.8% | 211.5ms |     168 | `unevalObjectLiteralKey` (uneval/src/internal/object.ts:386:32) ← `unevalObjectLike` (105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16) |
|  1.7% | 199.8ms |     159 | `createState` (uneval/src/index.ts:145:21) ← `uneval` (76:16)                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.7% | 198.3ms |     158 | `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                                                                                                                                                                      |
|  1.6% | 189.2ms |     151 | `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)          |
|  1.5% | 172.5ms |     137 | `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                                                                              |
|  1.5% | 166.6ms |     133 | `getType` (uneval/src/internal/type.ts:4:24) ← `traverseObject` (uneval/src/index.ts:205:26) ← `traverse` (165:20) ← `createState` (145:21) ← `uneval` (76:16)                                                                                                                                                                                                                                                                                                  |

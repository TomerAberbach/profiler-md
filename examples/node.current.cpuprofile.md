# CPU profile

Took 11.41s over 9,057 samples (1.3ms per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| ours              | 96.7% |  11.03s |   8,782 |
| garbage collector |  1.6% | 182.2ms |     145 |
| program           |  1.4% | 162.2ms |     129 |
| stdlib            |  0.3% |  34.3ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                 | Location                                |
| ----: | ------: | ------: | ------------------------ | --------------------------------------- |
| 22.9% |   2.61s |   2,081 | `unevalObjectLike`       | uneval/src/internal/object.ts:105:26    |
| 19.6% |   2.23s |   1,783 | `traverseObject`         | uneval/src/index.ts:205:26              |
| 10.7% |   1.22s |     976 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:386:32    |
|  9.7% |   1.10s |     881 | `unevalNumber`           | uneval/src/internal/primitive.ts:12:29  |
|  8.2% | 938.5ms |     746 | `unevalArray`            | uneval/src/internal/collection.ts:7:47  |
|  7.3% | 830.5ms |     661 | `unevalObjectInternal`   | uneval/src/internal/object.ts:69:30     |
|  5.5% | 633.0ms |     504 | `unevalInternal`         | uneval/src/internal/index.ts:25:32      |
|  2.9% | 335.7ms |     267 | `getType`                | uneval/src/internal/type.ts:4:24        |
|  2.3% | 264.9ms |     211 | `traverse`               | uneval/src/index.ts:165:20              |
|  1.9% | 215.0ms |     171 | `uneval`                 | uneval/src/index.ts:76:16               |
|  1.6% | 184.5ms |     147 | `unevalLiteral`          | uneval/src/internal/primitive.ts:139:23 |
|  1.6% | 182.2ms |     145 | `(garbage collector)`    | `<unknown>`                             |
|  1.5% | 171.8ms |     137 | `createState`            | uneval/src/index.ts:145:21              |
|  1.4% | 162.2ms |     129 | `(program)`              | `<unknown>`                             |
|  1.3% | 149.4ms |     119 | `unevalObject`           | uneval/src/internal/object.ts:21:29     |
|  0.6% |  67.7ms |      54 | `unevalWithoutCustom`    | uneval/src/internal/index.ts:14:37      |
|  0.2% |  23.6ms |      20 | `(anonymous)`            | uneval/scripts/profile.ts               |
|  0.1% |  15.1ms |      12 | `unevalBoolean`          | uneval/src/internal/primitive.ts:8:30   |
|  0.1% |  15.1ms |      12 | `unevalString`           | uneval/src/internal/primitive.ts:133:29 |

#### Lines

Lines ranked by contribution to each function's self time.

##### `unevalObjectLike` (uneval/src/internal/object.ts:105:26)

|     % |    Time | Samples | Location                          |
| ----: | ------: | ------: | --------------------------------- |
| 36.9% | 965.0ms |     768 | uneval/src/internal/object.ts:137 |
| 25.2% | 659.6ms |     525 | uneval/src/internal/object.ts:203 |
| 19.5% | 508.8ms |     405 | uneval/src/internal/object.ts:130 |
|  5.2% | 136.9ms |     109 | uneval/src/internal/object.ts:140 |
|  3.3% |  85.4ms |      68 | uneval/src/internal/object.ts:144 |

##### `traverseObject` (uneval/src/index.ts:205:26)

|     % |    Time | Samples | Location                |
| ----: | ------: | ------: | ----------------------- |
| 32.0% | 717.2ms |     571 | uneval/src/index.ts:211 |
| 17.3% | 386.8ms |     308 | uneval/src/index.ts:220 |
| 11.4% | 256.2ms |     204 | uneval/src/index.ts:246 |
|  9.3% | 208.5ms |     166 | uneval/src/index.ts:179 |
|  6.5% | 145.7ms |     116 | uneval/src/index.ts:209 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:386:32)

|     % |    Time | Samples | Location                          |
| ----: | ------: | ------: | --------------------------------- |
| 25.2% | 309.0ms |     246 | uneval/src/internal/object.ts:424 |
| 10.0% | 123.1ms |      98 | uneval/src/internal/object.ts:408 |
|  9.2% | 113.0ms |      90 | uneval/src/internal/object.ts:420 |
|  9.0% | 110.5ms |      88 | uneval/src/internal/object.ts:146 |
|  6.1% |  75.4ms |      60 | uneval/src/internal/object.ts:149 |

##### `unevalNumber` (uneval/src/internal/primitive.ts:12:29)

|      % |  Time | Samples | Location                            |
| -----: | ----: | ------: | ----------------------------------- |
| 100.0% | 1.10s |     881 | uneval/src/internal/primitive.ts:22 |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

|     % |    Time | Samples | Location                              |
| ----: | ------: | ------: | ------------------------------------- |
| 49.1% | 460.4ms |     366 | uneval/src/internal/collection.ts:86  |
|  6.6% |  61.7ms |      49 | uneval/src/internal/collection.ts:10  |
|  6.0% |  56.6ms |      45 | uneval/src/internal/collection.ts:52  |
|  5.1% |  47.8ms |      38 | uneval/src/internal/collection.ts:146 |
|  2.8% |  26.4ms |      21 | uneval/src/internal/collection.ts:149 |

##### `unevalObjectInternal` (uneval/src/internal/object.ts:69:30)

|     % |    Time | Samples | Location                         |
| ----: | ------: | ------: | -------------------------------- |
| 61.9% | 513.9ms |     409 | uneval/src/internal/object.ts:79 |
| 30.1% | 250.0ms |     199 | uneval/src/internal/object.ts:78 |
|  5.3% |  44.0ms |      35 | uneval/src/internal/object.ts:75 |
|  2.7% |  22.6ms |      18 | uneval/src/internal/object.ts:70 |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

|     % |    Time | Samples | Location                         |
| ----: | ------: | ------: | -------------------------------- |
| 31.8% | 201.1ms |     160 | uneval/src/internal/index.ts:33  |
|  8.1% |  51.5ms |      41 | uneval/src/internal/index.ts:146 |
|  5.6% |  35.2ms |      28 | uneval/src/internal/index.ts:44  |
|  5.6% |  35.2ms |      28 | uneval/src/internal/index.ts:48  |
|  5.2% |  32.7ms |      26 | uneval/src/internal/index.ts:58  |

##### `getType` (uneval/src/internal/type.ts:4:24)

|     % |    Time | Samples | Location                       |
| ----: | ------: | ------: | ------------------------------ |
| 79.8% | 267.8ms |     213 | uneval/src/internal/type.ts:17 |
| 19.5% |  65.3ms |      52 | uneval/src/internal/type.ts:7  |
|  0.7% |   2.5ms |       2 | uneval/src/internal/type.ts:18 |

##### `traverse` (uneval/src/index.ts:165:20)

|     % |   Time | Samples | Location                |
| ----: | -----: | ------: | ----------------------- |
| 34.1% | 90.4ms |      72 | uneval/src/index.ts:201 |
| 23.7% | 62.8ms |      50 | uneval/src/index.ts:202 |
| 22.3% | 59.0ms |      47 | uneval/src/index.ts:185 |
| 19.9% | 52.7ms |      42 | uneval/src/index.ts:200 |

##### `uneval` (uneval/src/index.ts:76:16)

|     % |   Time | Samples | Location                |
| ----: | -----: | ------: | ----------------------- |
| 26.9% | 57.8ms |      46 | uneval/src/index.ts:78  |
| 10.5% | 22.6ms |      18 | uneval/src/index.ts:179 |
|  8.2% | 17.6ms |      14 | uneval/src/index.ts:205 |
|  5.8% | 12.6ms |      10 | uneval/src/index.ts:76  |
|  5.8% | 12.6ms |      10 | uneval/src/index.ts:153 |

##### `unevalLiteral` (uneval/src/internal/primitive.ts:139:23)

|      % |    Time | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 184.5ms |     147 | uneval/src/internal/primitive.ts:148 |

##### `createState` (uneval/src/index.ts:145:21)

|     % |   Time | Samples | Location                |
| ----: | -----: | ------: | ----------------------- |
| 27.0% | 46.4ms |      37 | uneval/src/index.ts:338 |
| 24.1% | 41.4ms |      33 | uneval/src/index.ts:150 |
| 18.2% | 31.4ms |      25 | uneval/src/index.ts:151 |
| 16.1% | 27.6ms |      22 | uneval/src/index.ts:149 |
| 13.9% | 23.8ms |      19 | uneval/src/index.ts:163 |

##### `unevalObject` (uneval/src/internal/object.ts:21:29)

|     % |   Time | Samples | Location                         |
| ----: | -----: | ------: | -------------------------------- |
| 30.2% | 45.2ms |      36 | uneval/src/internal/object.ts:26 |
| 24.4% | 36.4ms |      29 | uneval/src/internal/object.ts:31 |
| 11.8% | 17.6ms |      14 | uneval/src/internal/object.ts:76 |
| 10.1% | 15.0ms |      12 | uneval/src/internal/object.ts:28 |
|  5.9% |  8.8ms |       7 | uneval/src/internal/object.ts:34 |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37)

|     % |   Time | Samples | Location                         |
| ----: | -----: | ------: | -------------------------------- |
| 20.4% | 13.8ms |      11 | uneval/src/internal/index.ts:149 |
| 20.4% | 13.8ms |      11 | uneval/src/internal/index.ts:146 |
| 11.1% |  7.5ms |       6 | uneval/src/internal/index.ts:155 |
| 11.0% |  7.5ms |       6 | uneval/src/internal/index.ts:147 |
|  9.2% |  6.2ms |       5 | uneval/src/internal/index.ts:184 |

##### `(anonymous)` (uneval/scripts/profile.ts)

|     % |   Time | Samples | Location                     |
| ----: | -----: | ------: | ---------------------------- |
| 94.1% | 22.2ms |      16 | uneval/scripts/profile.ts:23 |
|  5.9% |  1.4ms |       1 | uneval/scripts/profile.ts:22 |

##### `unevalBoolean` (uneval/src/internal/primitive.ts:8:30)

|     % |   Time | Samples | Location                            |
| ----: | -----: | ------: | ----------------------------------- |
| 91.7% | 13.9ms |      11 | uneval/src/internal/primitive.ts:10 |
|  8.3% |  1.3ms |       1 | uneval/src/internal/primitive.ts:8  |

##### `unevalString` (uneval/src/internal/primitive.ts:133:29)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 15.1ms |      12 | uneval/src/internal/primitive.ts:134 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `unevalObjectLike` (uneval/src/internal/object.ts:105:26)

|      % |  Time | Samples | Caller                 | Location                            |
| -----: | ----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 2.61s |   2,081 | `unevalObjectInternal` | uneval/src/internal/object.ts:69:30 |

##### `traverseObject` (uneval/src/index.ts:205:26)

|     % |  Time | Samples | Caller     | Location                   |
| ----: | ----: | ------: | ---------- | -------------------------- |
| 99.9% | 2.23s |   1,781 | `traverse` | uneval/src/index.ts:165:20 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:386:32)

|     % |  Time | Samples | Caller                 | Location                             |
| ----: | ----: | ------: | ---------------------- | ------------------------------------ |
| 98.7% | 1.20s |     963 | `unevalObjectLike`     | uneval/src/internal/object.ts:105:26 |
|  0.6% | 7.6ms |       6 | `unevalObjectInternal` | uneval/src/internal/object.ts:69:30  |

##### `unevalNumber` (uneval/src/internal/primitive.ts:12:29)

|      % |  Time | Samples | Caller           | Location                           |
| -----: | ----: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 1.10s |     881 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

|     % |    Time | Samples | Caller                 | Location                            |
| ----: | ------: | ------: | ---------------------- | ----------------------------------- |
| 99.9% | 937.3ms |     745 | `unevalObjectInternal` | uneval/src/internal/object.ts:69:30 |

##### `unevalObjectInternal` (uneval/src/internal/object.ts:69:30)

|      % |    Time | Samples | Caller         | Location                            |
| -----: | ------: | ------: | -------------- | ----------------------------------- |
| 100.0% | 830.5ms |     661 | `unevalObject` | uneval/src/internal/object.ts:21:29 |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

|     % |    Time | Samples | Caller                 | Location                               |
| ----: | ------: | ------: | ---------------------- | -------------------------------------- |
| 66.8% | 422.9ms |     337 | `unevalObjectLike`     | uneval/src/internal/object.ts:105:26   |
| 14.8% |  93.4ms |      74 | `uneval`               | uneval/src/index.ts:76:16              |
| 14.7% |  93.1ms |      74 | `unevalArray`          | uneval/src/internal/collection.ts:7:47 |
|  1.3% |   8.5ms |       7 | `unevalObjectInternal` | uneval/src/internal/object.ts:69:30    |

##### `getType` (uneval/src/internal/type.ts:4:24)

|      % |    Time | Samples | Caller           | Location                   |
| -----: | ------: | ------: | ---------------- | -------------------------- |
| 100.0% | 335.7ms |     267 | `traverseObject` | uneval/src/index.ts:205:26 |

##### `traverse` (uneval/src/index.ts:165:20)

|     % |    Time | Samples | Caller           | Location                   |
| ----: | ------: | ------: | ---------------- | -------------------------- |
| 56.3% | 149.2ms |     119 | `traverseObject` | uneval/src/index.ts:205:26 |
| 43.7% | 115.7ms |      92 | `createState`    | uneval/src/index.ts:145:21 |

##### `uneval` (uneval/src/index.ts:76:16)

|     % |    Time | Samples | Caller        | Location                  |
| ----: | ------: | ------: | ------------- | ------------------------- |
| 98.2% | 211.2ms |     168 | `(anonymous)` | uneval/scripts/profile.ts |

##### `unevalLiteral` (uneval/src/internal/primitive.ts:139:23)

|      % |    Time | Samples | Caller         | Location                                |
| -----: | ------: | ------: | -------------- | --------------------------------------- |
| 100.0% | 184.5ms |     147 | `unevalString` | uneval/src/internal/primitive.ts:133:29 |

##### `createState` (uneval/src/index.ts:145:21)

|      % |    Time | Samples | Caller   | Location                  |
| -----: | ------: | ------: | -------- | ------------------------- |
| 100.0% | 171.8ms |     137 | `uneval` | uneval/src/index.ts:76:16 |

##### `unevalObject` (uneval/src/internal/object.ts:21:29)

|     % |    Time | Samples | Caller                 | Location                             |
| ----: | ------: | ------: | ---------------------- | ------------------------------------ |
| 90.8% | 135.6ms |     108 | `unevalInternal`       | uneval/src/internal/index.ts:25:32   |
|  5.0% |   7.4ms |       6 | `uneval`               | uneval/src/index.ts:76:16            |
|  0.9% |   1.3ms |       1 | `unevalObjectLike`     | uneval/src/internal/object.ts:105:26 |
|  0.9% |   1.3ms |       1 | `unevalObjectInternal` | uneval/src/internal/object.ts:69:30  |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37)

|     % |   Time | Samples | Caller                   | Location                             |
| ----: | -----: | ------: | ------------------------ | ------------------------------------ |
| 98.1% | 66.4ms |      53 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:386:32 |
|  1.9% |  1.3ms |       1 | `unevalObjectLike`       | uneval/src/internal/object.ts:105:26 |

##### `unevalBoolean` (uneval/src/internal/primitive.ts:8:30)

|     % |   Time | Samples | Caller           | Location                           |
| ----: | -----: | ------: | ---------------- | ---------------------------------- |
| 91.7% | 13.9ms |      11 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `unevalString` (uneval/src/internal/primitive.ts:133:29)

|      % |   Time | Samples | Caller           | Location                           |
| -----: | -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 15.1ms |      12 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                 | Location                                |
| ----: | ------: | ------: | ------------------------ | --------------------------------------- |
| 96.7% |  11.02s |   8,754 | `(anonymous)`            | uneval/scripts/profile.ts               |
| 96.2% |  10.97s |   8,736 | `uneval`                 | uneval/src/index.ts:76:16               |
| 68.0% |   7.75s |   6,175 | `unevalInternal`         | uneval/src/internal/index.ts:25:32      |
| 66.7% |   7.60s |   6,054 | `unevalObject`           | uneval/src/internal/object.ts:21:29     |
| 66.2% |   7.55s |   6,009 | `unevalObjectInternal`   | uneval/src/internal/object.ts:69:30     |
| 51.8% |   5.91s |   4,707 | `unevalObjectLike`       | uneval/src/internal/object.ts:105:26    |
| 30.0% |   3.42s |   2,724 | `unevalArray`            | uneval/src/internal/collection.ts:7:47  |
| 26.4% |      3s |   2,396 | `createState`            | uneval/src/index.ts:145:21              |
| 24.9% |   2.83s |   2,259 | `traverse`               | uneval/src/index.ts:165:20              |
| 23.9% |   2.72s |   2,169 | `traverseObject`         | uneval/src/index.ts:205:26              |
| 12.5% |   1.42s |   1,138 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:386:32    |
|  9.7% |   1.10s |     881 | `unevalNumber`           | uneval/src/internal/primitive.ts:12:29  |
|  2.9% | 335.7ms |     267 | `getType`                | uneval/src/internal/type.ts:4:24        |
|  1.8% | 204.2ms |     163 | `unevalWithoutCustom`    | uneval/src/internal/index.ts:14:37      |
|  1.7% | 199.5ms |     159 | `unevalString`           | uneval/src/internal/primitive.ts:133:29 |
|  1.6% | 184.5ms |     147 | `unevalLiteral`          | uneval/src/internal/primitive.ts:139:23 |
|  1.6% | 182.2ms |     145 | `(garbage collector)`    | `<unknown>`                             |
|  1.4% | 162.2ms |     129 | `(program)`              | `<unknown>`                             |
|  0.3% |  34.3ms |       1 | `fn`                     | node:internal/util:498:14               |
|  0.1% |  15.1ms |      12 | `unevalBoolean`          | uneval/src/internal/primitive.ts:8:30   |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `(anonymous)` (uneval/scripts/profile.ts)

|     % |   Time | Samples | Callee   | Location                  |
| ----: | -----: | ------: | -------- | ------------------------- |
| 99.5% | 10.97s |   8,733 | `uneval` | uneval/src/index.ts:76:16 |
|  0.3% | 34.3ms |       1 | `fn`     | node:internal/util:498:14 |

##### `uneval` (uneval/src/index.ts:76:16)

|     % |  Time | Samples | Callee           | Location                            |
| ----: | ----: | ------: | ---------------- | ----------------------------------- |
| 70.6% | 7.74s |   6,163 | `unevalInternal` | uneval/src/internal/index.ts:25:32  |
| 27.4% |    3s |   2,396 | `createState`    | uneval/src/index.ts:145:21          |
|  0.1% | 7.4ms |       6 | `unevalObject`   | uneval/src/internal/object.ts:21:29 |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

|     % |    Time | Samples | Callee          | Location                                |
| ----: | ------: | ------: | --------------- | --------------------------------------- |
| 97.9% |   7.59s |   6,045 | `unevalObject`  | uneval/src/internal/object.ts:21:29     |
| 14.3% |   1.10s |     881 | `unevalNumber`  | uneval/src/internal/primitive.ts:12:29  |
|  2.6% | 199.5ms |     159 | `unevalString`  | uneval/src/internal/primitive.ts:133:29 |
|  0.2% |  13.9ms |      11 | `unevalBoolean` | uneval/src/internal/primitive.ts:8:30   |

##### `unevalObject` (uneval/src/internal/object.ts:21:29)

|     % |  Time | Samples | Callee                 | Location                            |
| ----: | ----: | ------: | ---------------------- | ----------------------------------- |
| 99.3% | 7.55s |   6,009 | `unevalObjectInternal` | uneval/src/internal/object.ts:69:30 |

##### `unevalObjectInternal` (uneval/src/internal/object.ts:69:30)

|     % |  Time | Samples | Callee                   | Location                               |
| ----: | ----: | ------: | ------------------------ | -------------------------------------- |
| 78.3% | 5.91s |   4,707 | `unevalObjectLike`       | uneval/src/internal/object.ts:105:26   |
| 45.3% | 3.42s |   2,723 | `unevalArray`            | uneval/src/internal/collection.ts:7:47 |
|  0.1% | 8.5ms |       7 | `unevalInternal`         | uneval/src/internal/index.ts:25:32     |
|  0.1% | 7.6ms |       6 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:386:32   |
| <0.1% | 1.3ms |       1 | `unevalObject`           | uneval/src/internal/object.ts:21:29    |

##### `unevalObjectLike` (uneval/src/internal/object.ts:105:26)

|     % |  Time | Samples | Callee                   | Location                             |
| ----: | ----: | ------: | ------------------------ | ------------------------------------ |
| 52.5% | 3.10s |   2,473 | `unevalInternal`         | uneval/src/internal/index.ts:25:32   |
| 23.9% | 1.41s |   1,125 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:386:32 |
| <0.1% | 1.3ms |       1 | `unevalObject`           | uneval/src/internal/object.ts:21:29  |
| <0.1% | 1.3ms |       1 | `unevalWithoutCustom`    | uneval/src/internal/index.ts:14:37   |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

|     % |  Time | Samples | Callee           | Location                           |
| ----: | ----: | ------: | ---------------- | ---------------------------------- |
| 80.1% | 2.74s |   2,183 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `createState` (uneval/src/index.ts:145:21)

|     % |  Time | Samples | Callee     | Location                   |
| ----: | ----: | ------: | ---------- | -------------------------- |
| 94.3% | 2.83s |   2,259 | `traverse` | uneval/src/index.ts:165:20 |

##### `traverse` (uneval/src/index.ts:165:20)

|     % |  Time | Samples | Callee           | Location                   |
| ----: | ----: | ------: | ---------------- | -------------------------- |
| 95.9% | 2.72s |   2,167 | `traverseObject` | uneval/src/index.ts:205:26 |

##### `traverseObject` (uneval/src/index.ts:205:26)

|     % |    Time | Samples | Callee     | Location                         |
| ----: | ------: | ------: | ---------- | -------------------------------- |
| 54.3% |   1.47s |   1,178 | `traverse` | uneval/src/index.ts:165:20       |
| 12.3% | 335.7ms |     267 | `getType`  | uneval/src/internal/type.ts:4:24 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:386:32)

|     % |    Time | Samples | Callee                | Location                           |
| ----: | ------: | ------: | --------------------- | ---------------------------------- |
| 14.2% | 203.0ms |     162 | `unevalWithoutCustom` | uneval/src/internal/index.ts:14:37 |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37)

|     % |    Time | Samples | Callee           | Location                           |
| ----: | ------: | ------: | ---------------- | ---------------------------------- |
| 66.9% | 136.5ms |     109 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `unevalString` (uneval/src/internal/primitive.ts:133:29)

|     % |    Time | Samples | Callee          | Location                                |
| ----: | ------: | ------: | --------------- | --------------------------------------- |
| 92.4% | 184.5ms |     147 | `unevalLiteral` | uneval/src/internal/primitive.ts:139:23 |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(anonymous)` (uneval/scripts/profile.ts)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10.9% |   1.23s |     986 | `unevalObjectLike` (uneval/src/internal/object.ts:105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                                                                                                                                                                                                                              |
|  9.4% |   1.07s |     857 | `traverseObject` (uneval/src/index.ts:205:26) ← `traverse` (165:20) ← `createState` (145:21) ← `uneval` (76:16)                                                                                                                                                                                                                                                                                                                                                 |
|  7.2% | 823.8ms |     656 | `traverseObject` (uneval/src/index.ts:205:26) ← `traverse` (165:20) ← `traverseObject` (205:26) ← `traverse` (165:20) ← `createState` (145:21) ← `uneval` (76:16)                                                                                                                                                                                                                                                                                               |
|  4.8% | 545.0ms |     434 | `unevalObjectLiteralKey` (uneval/src/internal/object.ts:386:32) ← `unevalObjectLike` (105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                                                                                                                                                                                          |
|  4.6% | 523.5ms |     417 | `unevalObjectLike` (uneval/src/internal/object.ts:105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                                                |
|  4.4% | 506.6ms |     403 | `unevalObjectLike` (uneval/src/internal/object.ts:105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                     |
|  4.0% | 461.4ms |     367 | `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                                                                                                                                                                                                   |
|  3.3% | 377.1ms |     300 | `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                                                                                                                                                                                                                                                            |
|  2.5% | 283.0ms |     225 | `traverseObject` (uneval/src/index.ts:205:26) ← `traverse` (165:20) ← `traverseObject` (205:26) ← `traverse` (165:20) ← `traverseObject` (205:26) ← `traverse` (165:20) ← `createState` (145:21) ← `uneval` (76:16)                                                                                                                                                                                                                                             |
|  2.3% | 263.6ms |     210 | `unevalNumber` (uneval/src/internal/primitive.ts:12:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                                                                                                            |
|  2.3% | 258.0ms |     205 | `unevalObjectLiteralKey` (uneval/src/internal/object.ts:386:32) ← `unevalObjectLike` (105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16) |
|  2.3% | 256.8ms |     205 | `unevalObjectLiteralKey` (uneval/src/internal/object.ts:386:32) ← `unevalObjectLike` (105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                            |
|  1.9% | 211.2ms |     168 | `uneval` (uneval/src/index.ts:76:16)                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.7% | 193.7ms |     154 | `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                     |
|  1.7% | 192.8ms |     154 | `unevalNumber` (uneval/src/internal/primitive.ts:12:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                                                                                 |
|  1.6% | 177.1ms |     141 | `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                                                                              |
|  1.5% | 171.8ms |     137 | `createState` (uneval/src/index.ts:145:21) ← `uneval` (76:16)                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.5% | 171.7ms |     137 | `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:105:26) ← `unevalObjectInternal` (69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                                                                                                                                                                      |
|  1.5% | 168.8ms |     134 | `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)                                                                   |
|  1.5% | 168.6ms |     134 | `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:69:30) ← `unevalObject` (21:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:76:16)          |

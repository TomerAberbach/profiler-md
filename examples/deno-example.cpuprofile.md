# CPU profile

Took 6085.1ms over 46,255 samples (131.6µs per sample).

| Category          | Total % | Total    |
| ----------------- | ------- | -------- |
| ours              | 91.8%   | 5589.1ms |
| garbage collector | 2.3%    | 139.7ms  |
| regexp            | 2.1%    | 128.6ms  |
| program           | 1.7%    | 106.1ms  |
| third-party       | 1.2%    | 71.1ms   |
| idle              | 0.8%    | 50.1ms   |
| native            | 0.0%    | 0.3ms    |

## Hottest functions

### Self time

Functions ranked by time in the function body, excluding callees.

| Self % |    Self | Total % |    Total | Function                                         | Location                         |
| -----: | ------: | ------: | -------: | ------------------------------------------------ | -------------------------------- |
|  15.4% | 936.4ms |   50.0% | 3041.8ms | `unevalObjectLike`                               | src/internal/object.ts:103:26    |
|  14.8% | 899.9ms |   22.7% | 1383.7ms | `traverseObject`                                 | src/index.ts:204:26              |
|   8.8% | 535.2ms |   64.9% | 3947.9ms | `unevalObjectInternal`                           | src/internal/object.ts:68:30     |
|   8.7% | 529.6ms |    8.7% |  529.6ms | `unevalLiteral`                                  | src/internal/primitive.ts:139:23 |
|   8.6% | 520.5ms |   15.1% |  921.4ms | `unevalWithoutCustom`                            | src/internal/index.ts:14:37      |
|   6.9% | 420.6ms |    6.9% |  420.6ms | `unevalNumber`                                   | src/internal/primitive.ts:12:29  |
|   6.2% | 376.4ms |   24.3% | 1481.1ms | `traverse`                                       | src/index.ts:164:20              |
|   6.0% | 365.8ms |   28.9% | 1756.3ms | `unevalArray`                                    | src/internal/collection.ts:7:47  |
|   4.5% | 276.4ms |   66.2% | 4029.5ms | `unevalInternal`                                 | src/internal/index.ts:25:32      |
|   3.4% | 205.2ms |    3.4% |  205.2ms | `getType`                                        | src/internal/type.ts:4:24        |
|   2.9% | 175.5ms |   20.1% | 1225.7ms | `unevalObjectLiteralKey`                         | src/internal/object.ts:384:32    |
|   2.5% | 151.0ms |   26.8% | 1632.0ms | `createState`                                    | src/index.ts:144:21              |
|   2.3% | 139.7ms |    2.3% |  139.7ms | `(garbage collector)`                            | [unknown]                        |
|   2.1% | 128.6ms |    2.1% |  128.6ms | `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` | [unknown]                        |
|   1.7% | 106.1ms |    1.7% |  106.1ms | `(program)`                                      | [unknown]                        |
|   0.8% |  50.1ms |    0.8% |   50.1ms | `(idle)`                                         | [unknown]                        |
|   0.7% |  44.0ms |   65.2% | 3965.4ms | `unevalObject`                                   | src/internal/object.ts:20:29     |
|   0.7% |  40.3ms |    0.7% |   40.3ms | `isObject`                                       | src/internal/object.ts:434:25    |
|   0.7% |  40.3ms |    9.4% |  569.8ms | `unevalString`                                   | src/internal/primitive.ts:133:29 |
|   0.6% |  38.0ms |   93.5% | 5689.7ms | `uneval`                                         | src/index.ts:75:16               |

#### Lines

Lines ranked by contribution to each function's sample count.

##### `unevalObjectLike` (src/internal/object.ts:103:26)

| Count % | Count | Location                     |
| ------: | ----: | ---------------------------- |
|   42.1% | 3,022 | src/internal/object.ts:144:1 |
|   30.5% | 2,189 | src/internal/object.ts:93:1  |
|    8.0% |   573 | src/internal/object.ts:99:1  |
|    5.7% |   411 | src/internal/object.ts:100:1 |
|    4.1% |   296 | src/internal/object.ts:83:1  |

##### `traverseObject` (src/index.ts:204:26)

| Count % | Count | Location           |
| ------: | ----: | ------------------ |
|   43.0% | 2,960 | src/index.ts:152:1 |
|   21.9% | 1,509 | src/index.ts:160:1 |
|   12.7% |   874 | src/index.ts:184:1 |
|    6.9% |   478 | src/index.ts:150:1 |
|    3.6% |   246 | src/index.ts:187:1 |

##### `unevalObjectInternal` (src/internal/object.ts:68:30)

| Count % | Count | Location                    |
| ------: | ----: | --------------------------- |
|   89.3% | 3,659 | src/internal/object.ts:54:1 |
|    5.9% |   243 | src/internal/object.ts:52:1 |
|    2.5% |   103 | src/internal/object.ts:48:1 |
|    1.4% |    56 | src/internal/object.ts:53:1 |
|    0.7% |    29 | src/internal/object.ts:50:1 |

##### `unevalLiteral` (src/internal/primitive.ts:139:23)

| Count % | Count | Location                        |
| ------: | ----: | ------------------------------- |
|   27.0% | 1,097 | src/internal/primitive.ts:105:1 |
|   25.0% | 1,013 | src/internal/primitive.ts:103:1 |
|   12.6% |   513 | src/internal/primitive.ts:104:1 |
|   11.9% |   484 | src/internal/primitive.ts:111:1 |
|    9.5% |   386 | src/internal/primitive.ts:136:1 |

##### `unevalWithoutCustom` (src/internal/index.ts:14:37)

| Count % | Count | Location                  |
| ------: | ----: | ------------------------- |
|  100.0% | 3,990 | src/internal/index.ts:4:1 |

##### `unevalNumber` (src/internal/primitive.ts:12:29)

| Count % | Count | Location                       |
| ------: | ----: | ------------------------------ |
|   93.7% | 3,010 | src/internal/primitive.ts:15:1 |
|    3.8% |   123 | src/internal/primitive.ts:19:1 |
|    1.3% |    43 | src/internal/primitive.ts:7:1  |
|    0.5% |    17 | src/internal/primitive.ts:9:1  |
|    0.5% |    15 | src/internal/primitive.ts:11:1 |

##### `traverse` (src/index.ts:164:20)

| Count % | Count | Location           |
| ------: | ----: | ------------------ |
|   28.8% |   831 | src/index.ts:122:1 |
|   24.5% |   706 | src/index.ts:142:1 |
|   15.4% |   445 | src/index.ts:141:1 |
|   11.0% |   317 | src/index.ts:127:1 |
|   10.0% |   290 | src/index.ts:108:1 |

##### `unevalArray` (src/internal/collection.ts:7:47)

| Count % | Count | Location                        |
| ------: | ----: | ------------------------------- |
|   72.5% | 2,035 | src/internal/collection.ts:69:1 |
|    7.4% |   208 | src/internal/collection.ts:37:1 |
|    5.3% |   148 | src/internal/collection.ts:46:1 |
|    5.1% |   143 | src/internal/collection.ts:6:1  |
|    4.1% |   115 | src/internal/collection.ts:47:1 |

##### `unevalInternal` (src/internal/index.ts:25:32)

| Count % | Count | Location                   |
| ------: | ----: | -------------------------- |
|   44.2% |   938 | src/internal/index.ts:9:1  |
|    9.9% |   209 | src/internal/index.ts:16:1 |
|    9.7% |   206 | src/internal/index.ts:8:1  |
|    7.0% |   149 | src/internal/index.ts:19:1 |
|    6.9% |   147 | src/internal/index.ts:5:1  |

##### `getType` (src/internal/type.ts:4:24)

| Count % | Count | Location                  |
| ------: | ----: | ------------------------- |
|   74.3% | 1,171 | src/internal/type.ts:11:1 |
|   23.0% |   363 | src/internal/type.ts:3:1  |
|    2.0% |    32 | src/internal/type.ts:4:1  |
|    0.3% |     5 | src/internal/type.ts:12:1 |
|    0.3% |     4 | src/internal/type.ts:13:1 |

##### `unevalObjectLiteralKey` (src/internal/object.ts:384:32)

| Count % | Count | Location                     |
| ------: | ----: | ---------------------------- |
|   33.3% |   448 | src/internal/object.ts:284:1 |
|   23.0% |   310 | src/internal/object.ts:296:1 |
|   15.7% |   211 | src/internal/object.ts:285:1 |
|    9.3% |   125 | src/internal/object.ts:275:1 |
|    8.2% |   110 | src/internal/object.ts:283:1 |

##### `createState` (src/index.ts:144:21)

| Count % | Count | Location           |
| ------: | ----: | ------------------ |
|   20.9% |   240 | src/index.ts:249:1 |
|   18.2% |   210 | src/index.ts:93:1  |
|   16.2% |   186 | src/index.ts:106:1 |
|   14.5% |   167 | src/index.ts:92:1  |
|   13.6% |   156 | src/index.ts:94:1  |

##### `unevalObject` (src/internal/object.ts:20:29)

| Count % | Count | Location                    |
| ------: | ----: | --------------------------- |
|   40.2% |   136 | src/internal/object.ts:12:1 |
|   29.9% |   101 | src/internal/object.ts:16:1 |
|   19.5% |    66 | src/internal/object.ts:19:1 |
|    5.6% |    19 | src/internal/object.ts:17:1 |
|    4.1% |    14 | src/internal/object.ts:14:1 |

##### `isObject` (src/internal/object.ts:434:25)

| Count % | Count | Location                     |
| ------: | ----: | ---------------------------- |
|   73.1% |   226 | src/internal/object.ts:309:1 |
|   26.9% |    83 | src/internal/object.ts:308:1 |

##### `unevalString` (src/internal/primitive.ts:133:29)

| Count % | Count | Location                       |
| ------: | ----: | ------------------------------ |
|  100.0% |   308 | src/internal/primitive.ts:97:1 |

##### `uneval` (src/index.ts:75:16)

| Count % | Count | Location          |
| ------: | ----: | ----------------- |
|   80.1% |   233 | src/index.ts:36:1 |
|   13.1% |    38 | src/index.ts:34:1 |
|    3.4% |    10 | src/index.ts:40:1 |
|    2.1% |     6 | src/index.ts:43:1 |
|    1.4% |     4 | src/index.ts:35:1 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to V8 JIT inlining.

##### `unevalObjectLike` (src/internal/object.ts:103:26)

| Self % |    Self | Caller                 | Location                     |
| -----: | ------: | ---------------------- | ---------------------------- |
|  99.9% | 935.2ms | `unevalObjectInternal` | src/internal/object.ts:68:30 |
|   0.0% |   0.5ms | `unevalObject`         | src/internal/object.ts:20:29 |
|   0.0% |   0.3ms | `unevalInternal`       | src/internal/index.ts:25:32  |

##### `traverseObject` (src/index.ts:204:26)

| Self % |    Self | Caller           | Location               |
| -----: | ------: | ---------------- | ---------------------- |
|  99.6% | 896.7ms | `traverse`       | src/index.ts:164:20    |
|   0.2% |   1.7ms | `traverseObject` | src/index.ts:204:26    |
|   0.1% |   0.8ms | `(anonymous)`    | scripts/profile.ts:1:1 |

##### `unevalObjectInternal` (src/internal/object.ts:68:30)

| Self % |    Self | Caller             | Location                      |
| -----: | ------: | ------------------ | ----------------------------- |
|  99.4% | 532.2ms | `unevalObject`     | src/internal/object.ts:20:29  |
|   0.2% |   0.9ms | `uneval`           | src/index.ts:75:16            |
|   0.1% |   0.4ms | `unevalObjectLike` | src/internal/object.ts:103:26 |

##### `unevalLiteral` (src/internal/primitive.ts:139:23)

| Self % |    Self | Caller         | Location                         |
| -----: | ------: | -------------- | -------------------------------- |
| 100.0% | 529.6ms | `unevalString` | src/internal/primitive.ts:133:29 |

##### `unevalWithoutCustom` (src/internal/index.ts:14:37)

| Self % |    Self | Caller                   | Location                      |
| -----: | ------: | ------------------------ | ----------------------------- |
| 100.0% | 520.5ms | `unevalObjectLiteralKey` | src/internal/object.ts:384:32 |

##### `unevalNumber` (src/internal/primitive.ts:12:29)

| Self % |    Self | Caller           | Location                    |
| -----: | ------: | ---------------- | --------------------------- |
| 100.0% | 420.6ms | `unevalInternal` | src/internal/index.ts:25:32 |

##### `traverse` (src/index.ts:164:20)

| Self % |    Self | Caller           | Location            |
| -----: | ------: | ---------------- | ------------------- |
|  73.7% | 277.3ms | `traverseObject` | src/index.ts:204:26 |
|  26.3% |  98.8ms | `createState`    | src/index.ts:144:21 |
|   0.0% |   0.1ms | `uneval`         | src/index.ts:75:16  |
|   0.0% |   0.1ms | `traverse`       | src/index.ts:164:20 |

##### `unevalArray` (src/internal/collection.ts:7:47)

| Self % |    Self | Caller                 | Location                     |
| -----: | ------: | ---------------------- | ---------------------------- |
|  99.6% | 364.3ms | `unevalObjectInternal` | src/internal/object.ts:68:30 |
|   0.2% |   0.8ms | `unevalObject`         | src/internal/object.ts:20:29 |

##### `unevalInternal` (src/internal/index.ts:25:32)

| Self % |    Self | Caller                 | Location                        |
| -----: | ------: | ---------------------- | ------------------------------- |
|  38.2% | 105.6ms | `unevalObjectLike`     | src/internal/object.ts:103:26   |
|  33.0% |  91.3ms | `unevalArray`          | src/internal/collection.ts:7:47 |
|  11.2% |  31.1ms | `unevalWithoutCustom`  | src/internal/index.ts:14:37     |
|   7.1% |  19.8ms | `uneval`               | src/index.ts:75:16              |
|   6.4% |  17.7ms | `unevalObjectInternal` | src/internal/object.ts:68:30    |

##### `getType` (src/internal/type.ts:4:24)

| Self % |    Self | Caller           | Location            |
| -----: | ------: | ---------------- | ------------------- |
| 100.0% | 205.2ms | `traverseObject` | src/index.ts:204:26 |

##### `unevalObjectLiteralKey` (src/internal/object.ts:384:32)

| Self % |    Self | Caller             | Location                      |
| -----: | ------: | ------------------ | ----------------------------- |
|  99.9% | 175.4ms | `unevalObjectLike` | src/internal/object.ts:103:26 |

##### `createState` (src/index.ts:144:21)

| Self % |    Self | Caller   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% | 151.0ms | `uneval` | src/index.ts:75:16 |

##### `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` ([unknown])

| Self % |    Self | Caller                   | Location                      |
| -----: | ------: | ------------------------ | ----------------------------- |
| 100.0% | 128.6ms | `unevalObjectLiteralKey` | src/internal/object.ts:384:32 |

##### `unevalObject` (src/internal/object.ts:20:29)

| Self % |   Self | Caller                 | Location                     |
| -----: | -----: | ---------------------- | ---------------------------- |
|  97.4% | 42.8ms | `unevalInternal`       | src/internal/index.ts:25:32  |
|   0.3% |  0.1ms | `unevalObjectInternal` | src/internal/object.ts:68:30 |

##### `isObject` (src/internal/object.ts:434:25)

| Self % |   Self | Caller           | Location                    |
| -----: | -----: | ---------------- | --------------------------- |
| 100.0% | 40.3ms | `unevalInternal` | src/internal/index.ts:25:32 |

##### `unevalString` (src/internal/primitive.ts:133:29)

| Self % |   Self | Caller           | Location                    |
| -----: | -----: | ---------------- | --------------------------- |
| 100.0% | 40.3ms | `unevalInternal` | src/internal/index.ts:25:32 |

##### `uneval` (src/index.ts:75:16)

| Self % |   Self | Caller        | Location               |
| -----: | -----: | ------------- | ---------------------- |
|  97.6% | 37.1ms | `(anonymous)` | scripts/profile.ts:1:1 |

### Total time

Functions ranked by total time in the function and all its callees.

| Total % |    Total | Self % |    Self | Function                                         | Location                                                                              |
| ------: | -------: | -----: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
|   94.9% | 5773.0ms |   0.2% |  10.9ms | `(anonymous)`                                    | scripts/profile.ts:1:1                                                                |
|   93.5% | 5689.7ms |   0.6% |  38.0ms | `uneval`                                         | src/index.ts:75:16                                                                    |
|   66.2% | 4029.5ms |   4.5% | 276.4ms | `unevalInternal`                                 | src/internal/index.ts:25:32                                                           |
|   65.2% | 3965.4ms |   0.7% |  44.0ms | `unevalObject`                                   | src/internal/object.ts:20:29                                                          |
|   64.9% | 3947.9ms |   8.8% | 535.2ms | `unevalObjectInternal`                           | src/internal/object.ts:68:30                                                          |
|   50.0% | 3041.8ms |  15.4% | 936.4ms | `unevalObjectLike`                               | src/internal/object.ts:103:26                                                         |
|   28.9% | 1756.3ms |   6.0% | 365.8ms | `unevalArray`                                    | src/internal/collection.ts:7:47                                                       |
|   26.8% | 1632.0ms |   2.5% | 151.0ms | `createState`                                    | src/index.ts:144:21                                                                   |
|   24.3% | 1481.1ms |   6.2% | 376.4ms | `traverse`                                       | src/index.ts:164:20                                                                   |
|   22.7% | 1383.7ms |  14.8% | 899.9ms | `traverseObject`                                 | src/index.ts:204:26                                                                   |
|   20.1% | 1225.7ms |   2.9% | 175.5ms | `unevalObjectLiteralKey`                         | src/internal/object.ts:384:32                                                         |
|   15.1% |  921.4ms |   8.6% | 520.5ms | `unevalWithoutCustom`                            | src/internal/index.ts:14:37                                                           |
|    9.4% |  569.8ms |   0.7% |  40.3ms | `unevalString`                                   | src/internal/primitive.ts:133:29                                                      |
|    8.7% |  529.6ms |   8.7% | 529.6ms | `unevalLiteral`                                  | src/internal/primitive.ts:139:23                                                      |
|    6.9% |  420.6ms |   6.9% | 420.6ms | `unevalNumber`                                   | src/internal/primitive.ts:12:29                                                       |
|    3.4% |  205.2ms |   3.4% | 205.2ms | `getType`                                        | src/internal/type.ts:4:24                                                             |
|    2.3% |  139.7ms |   2.3% | 139.7ms | `(garbage collector)`                            | [unknown]                                                                             |
|    2.1% |  128.6ms |   2.1% | 128.6ms | `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` | [unknown]                                                                             |
|    1.7% |  106.1ms |   1.7% | 106.1ms | `(program)`                                      | [unknown]                                                                             |
|    1.1% |   68.4ms |   0.0% |   1.4ms | `sample`                                         | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16 |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to V8 JIT inlining.

##### `(anonymous)` (scripts/profile.ts:1:1)

| Total % |    Total | Callee           | Location                                                                              |
| ------: | -------: | ---------------- | ------------------------------------------------------------------------------------- |
|   98.5% | 5688.8ms | `uneval`         | src/index.ts:75:16                                                                    |
|    1.2% |   68.4ms | `sample`         | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16 |
|    0.0% |    2.2ms | `unevalInternal` | src/internal/index.ts:25:32                                                           |
|    0.0% |    1.9ms | `anything`       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:8168:18 |
|    0.0% |    0.8ms | `traverseObject` | src/index.ts:204:26                                                                   |

##### `uneval` (src/index.ts:75:16)

| Total % |    Total | Callee                 | Location                     |
| ------: | -------: | ---------------------- | ---------------------------- |
|   70.6% | 4018.6ms | `unevalInternal`       | src/internal/index.ts:25:32  |
|   28.7% | 1632.0ms | `createState`          | src/index.ts:144:21          |
|    0.0% |    0.9ms | `unevalObjectInternal` | src/internal/object.ts:68:30 |
|    0.0% |    0.1ms | `traverse`             | src/index.ts:164:20          |

##### `unevalInternal` (src/internal/index.ts:25:32)

| Total % |    Total | Callee          | Location                         |
| ------: | -------: | --------------- | -------------------------------- |
|   98.4% | 3964.4ms | `unevalObject`  | src/internal/object.ts:20:29     |
|   14.1% |  569.8ms | `unevalString`  | src/internal/primitive.ts:133:29 |
|   10.4% |  420.6ms | `unevalNumber`  | src/internal/primitive.ts:12:29  |
|    1.0% |   40.3ms | `isObject`      | src/internal/object.ts:434:25    |
|    0.1% |    6.0ms | `unevalBoolean` | src/internal/primitive.ts:8:30   |

##### `unevalObject` (src/internal/object.ts:20:29)

| Total % |    Total | Callee                 | Location                        |
| ------: | -------: | ---------------------- | ------------------------------- |
|   99.5% | 3945.3ms | `unevalObjectInternal` | src/internal/object.ts:68:30    |
|    0.0% |    0.8ms | `unevalArray`          | src/internal/collection.ts:7:47 |
|    0.0% |    0.5ms | `unevalObjectLike`     | src/internal/object.ts:103:26   |

##### `unevalObjectInternal` (src/internal/object.ts:68:30)

| Total % |    Total | Callee             | Location                        |
| ------: | -------: | ------------------ | ------------------------------- |
|   77.0% | 3040.8ms | `unevalObjectLike` | src/internal/object.ts:103:26   |
|   44.4% | 1754.8ms | `unevalArray`      | src/internal/collection.ts:7:47 |
|    0.4% |   17.7ms | `unevalInternal`   | src/internal/index.ts:25:32     |
|    0.0% |    0.1ms | `unevalObject`     | src/internal/object.ts:20:29    |

##### `unevalObjectLike` (src/internal/object.ts:103:26)

| Total % |    Total | Callee                     | Location                      |
| ------: | -------: | -------------------------- | ----------------------------- |
|   49.8% | 1514.0ms | `unevalInternal`           | src/internal/index.ts:25:32   |
|   40.3% | 1225.5ms | `unevalObjectLiteralKey`   | src/internal/object.ts:384:32 |
|    0.3% |   10.6ms | `isRegularDataDescriptor`  | src/internal/object.ts:287:33 |
|    0.0% |    1.3ms | `(anonymous)`              | src/internal/object.ts:201:30 |
|    0.0% |    0.8ms | `isDefaultObjectPrototype` | src/internal/object.ts:429:41 |

##### `unevalArray` (src/internal/collection.ts:7:47)

| Total % |    Total | Callee               | Location                         |
| ------: | -------: | -------------------- | -------------------------------- |
|   85.2% | 1496.6ms | `unevalInternal`     | src/internal/index.ts:25:32      |
|    0.2% |    2.7ms | `unevalObjectAssign` | src/internal/collection.ts:89:28 |

##### `createState` (src/index.ts:144:21)

| Total % |    Total | Callee     | Location            |
| ------: | -------: | ---------- | ------------------- |
|   90.7% | 1481.0ms | `traverse` | src/index.ts:164:20 |

##### `traverse` (src/index.ts:164:20)

| Total % |    Total | Callee           | Location            |
| ------: | -------: | ---------------- | ------------------- |
|   93.3% | 1382.2ms | `traverseObject` | src/index.ts:204:26 |
|    0.0% |    0.1ms | `traverse`       | src/index.ts:164:20 |

##### `traverseObject` (src/index.ts:204:26)

| Total % |   Total | Callee                     | Location                      |
| ------: | ------: | -------------------------- | ----------------------------- |
|   60.5% | 837.7ms | `traverse`                 | src/index.ts:164:20           |
|   14.8% | 205.2ms | `getType`                  | src/internal/type.ts:4:24     |
|    0.1% |   1.7ms | `traverseObject`           | src/index.ts:204:26           |
|    0.1% |   1.2ms | `isDefaultObjectPrototype` | src/internal/object.ts:429:41 |

##### `unevalObjectLiteralKey` (src/internal/object.ts:384:32)

| Total % |   Total | Callee                                           | Location                    |
| ------: | ------: | ------------------------------------------------ | --------------------------- |
|   75.2% | 921.4ms | `unevalWithoutCustom`                            | src/internal/index.ts:14:37 |
|   10.5% | 128.6ms | `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` | [unknown]                   |
|    0.0% |   0.1ms | `unevalInternal`                                 | src/internal/index.ts:25:32 |

##### `unevalWithoutCustom` (src/internal/index.ts:14:37)

| Total % |   Total | Callee           | Location                    |
| ------: | ------: | ---------------- | --------------------------- |
|   43.5% | 400.9ms | `unevalInternal` | src/internal/index.ts:25:32 |

##### `unevalString` (src/internal/primitive.ts:133:29)

| Total % |   Total | Callee          | Location                         |
| ------: | ------: | --------------- | -------------------------------- |
|   92.9% | 529.6ms | `unevalLiteral` | src/internal/primitive.ts:139:23 |

##### `sample` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16)

| Total % |  Total | Callee         | Location                                                                              |
| ------: | -----: | -------------- | ------------------------------------------------------------------------------------- |
|   97.5% | 66.7ms | `mapHelper`    | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20   |
|    0.4% |  0.3ms | `streamSample` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2524:22 |

## Hottest call stacks

Call stacks ranked by time spent in their top frame.

Common call stack: `uneval` (src/index.ts:75:16) ← `(anonymous)` (scripts/profile.ts:1:1)

| Self % |    Self | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   7.2% | 438.5ms | `traverseObject` (src/index.ts:204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                                       |
|   7.2% | 437.0ms | `unevalObjectLike` (src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                                                                                                                                                                                                                               |
|   5.5% | 335.8ms | `traverseObject` (src/index.ts:204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                     |
|   4.1% | 250.8ms | `unevalWithoutCustom` (src/internal/index.ts:14:37) ← `unevalObjectLiteralKey` (src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                                                                                                                                     |
|   4.0% | 240.5ms | `unevalObjectInternal` (src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                                                                                                                                                                                                                                                             |
|   3.0% | 184.9ms | `unevalObjectLike` (src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `unevalArray` (src/internal/collection.ts:7:47) ← `unevalObjectInternal` (src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                                           |
|   3.0% | 182.8ms | `unevalObjectLike` (src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `unevalObjectLike` (src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                                                               |
|   2.8% | 169.0ms | `unevalArray` (src/internal/collection.ts:7:47) ← `unevalObjectInternal` (src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                                                                                                                                                                                                           |
|   2.7% | 162.3ms | `unevalLiteral` (src/internal/primitive.ts:139:23) ← `unevalString` (133:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `unevalWithoutCustom` (14:37) ← `unevalObjectLiteralKey` (src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                           |
|   2.5% | 153.3ms | `traverse` (src/index.ts:164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                 |
|   2.5% | 151.0ms | `createState` (src/index.ts:144:21)                                                                                                                                                                                                                                                                                                                                                                                                         |
|   1.9% | 113.1ms | `unevalObjectInternal` (src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `unevalObjectLike` (src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                                                                                             |
|   1.7% | 105.4ms | `traverseObject` (src/index.ts:204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                   |
|   1.7% | 105.2ms | `getType` (src/internal/type.ts:4:24) ← `traverseObject` (src/index.ts:204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                               |
|   1.7% | 104.9ms | `unevalObjectInternal` (src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `unevalArray` (src/internal/collection.ts:7:47) ← `unevalObjectInternal` (src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                                                                         |
|   1.6% |  99.9ms | `unevalWithoutCustom` (src/internal/index.ts:14:37) ← `unevalObjectLiteralKey` (src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `unevalArray` (src/internal/collection.ts:7:47) ← `unevalObjectInternal` (src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32) |
|   1.6% |  98.8ms | `traverse` (src/index.ts:164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                                                                   |
|   1.6% |  97.9ms | `unevalWithoutCustom` (src/internal/index.ts:14:37) ← `unevalObjectLiteralKey` (src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `unevalObjectLike` (src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                     |
|   1.5% |  92.9ms | `traverse` (src/index.ts:164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                               |
|   1.4% |  87.0ms | `unevalNumber` (src/internal/primitive.ts:12:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `unevalObjectLike` (src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                                                                                                                           |

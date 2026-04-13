# CPU profile

Took 6176.3ms over 47,806 samples (129.2µs per sample).

| Category          | Self % | Self     |
| ----------------- | ------ | -------- |
| ours              | 91.0%  | 5620.4ms |
| regexp            | 2.1%   | 127.4ms  |
| native            | 2.0%   | 124.6ms  |
| garbage collector | 1.7%   | 106.3ms  |
| program           | 1.7%   | 104.4ms  |
| third-party       | 1.5%   | 90.2ms   |
| idle              | 0.0%   | 3.0ms    |

## Hottest functions

### Self time

Functions ranked by time in the function body, excluding callees.

| Self % |    Self | Total % |    Total | Function                                         | Location                                                                                                 |
| -----: | ------: | ------: | -------: | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
|  15.6% | 966.3ms |   23.7% | 1464.1ms | `traverseObject`                                 | uneval/src/index.ts:204:26                                                                               |
|  15.0% | 926.9ms |   48.6% | 3001.9ms | `unevalObjectLike`                               | uneval/src/internal/object.ts:103:26                                                                     |
|   8.5% | 527.0ms |   63.0% | 3893.0ms | `unevalObjectInternal`                           | uneval/src/internal/object.ts:68:30                                                                      |
|   8.5% | 524.1ms |   14.7% |  907.7ms | `unevalWithoutCustom`                            | uneval/src/internal/index.ts:14:37                                                                       |
|   8.4% | 517.7ms |    8.4% |  517.7ms | `unevalLiteral`                                  | uneval/src/internal/primitive.ts:139:23                                                                  |
|   6.6% | 404.6ms |    6.6% |  404.6ms | `unevalNumber`                                   | uneval/src/internal/primitive.ts:12:29                                                                   |
|   6.0% | 372.6ms |   25.2% | 1554.5ms | `traverse`                                       | uneval/src/index.ts:164:20                                                                               |
|   5.8% | 359.6ms |   28.0% | 1730.2ms | `unevalArray`                                    | uneval/src/internal/collection.ts:7:47                                                                   |
|   4.3% | 266.6ms |   64.4% | 3978.1ms | `unevalInternal`                                 | uneval/src/internal/index.ts:25:32                                                                       |
|   3.5% | 217.0ms |    3.5% |  217.0ms | `getType`                                        | uneval/src/internal/type.ts:4:24                                                                         |
|   2.7% | 165.8ms |   19.4% | 1200.9ms | `unevalObjectLiteralKey`                         | uneval/src/internal/object.ts:384:32                                                                     |
|   2.5% | 154.6ms |   27.7% | 1709.1ms | `createState`                                    | uneval/src/index.ts:144:21                                                                               |
|   2.1% | 127.4ms |    2.1% |  127.4ms | `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` | [unknown]                                                                                                |
|   1.7% | 106.3ms |    1.7% |  106.3ms | `(garbage collector)`                            | [unknown]                                                                                                |
|   1.7% | 104.4ms |    1.7% |  104.4ms | `(program)`                                      | [unknown]                                                                                                |
|   0.9% |  53.3ms |    9.2% |  571.0ms | `unevalString`                                   | uneval/src/internal/primitive.ts:133:29                                                                  |
|   0.7% |  44.8ms |   63.3% | 3912.5ms | `unevalObject`                                   | uneval/src/internal/object.ts:20:29                                                                      |
|   0.7% |  40.9ms |   92.6% | 5720.4ms | `uneval`                                         | uneval/src/index.ts:75:16                                                                                |
|   0.6% |  39.5ms |    0.6% |   39.5ms | `isObject`                                       | uneval/src/internal/object.ts:434:25                                                                     |
|   0.3% |  20.5ms |    0.3% |   20.8ms | `uniformIntInternal`                             | uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:7:28 |

#### Lines

Lines ranked by contribution to each function's sample count.

##### `traverseObject` (uneval/src/index.ts:204:26)

| Count % | Count | Location                |
| ------: | ----: | ----------------------- |
|   44.8% | 3,352 | uneval/src/index.ts:210 |
|   21.4% | 1,597 | uneval/src/index.ts:219 |
|   11.2% |   837 | uneval/src/index.ts:245 |
|    8.2% |   611 | uneval/src/index.ts:208 |
|    3.5% |   259 | uneval/src/index.ts:248 |

##### `unevalObjectLike` (uneval/src/internal/object.ts:103:26)

| Count % | Count | Location                          |
| ------: | ----: | --------------------------------- |
|   42.3% | 3,037 | uneval/src/internal/object.ts:201 |
|   29.3% | 2,102 | uneval/src/internal/object.ts:128 |
|    8.9% |   635 | uneval/src/internal/object.ts:138 |
|    5.4% |   385 | uneval/src/internal/object.ts:142 |
|    3.3% |   235 | uneval/src/internal/object.ts:112 |

##### `unevalObjectInternal` (uneval/src/internal/object.ts:68:30)

| Count % | Count | Location                         |
| ------: | ----: | -------------------------------- |
|   50.8% | 2,074 | uneval/src/internal/object.ts:78 |
|   38.5% | 1,572 | uneval/src/internal/object.ts:77 |
|    5.5% |   225 | uneval/src/internal/object.ts:74 |
|    2.4% |    99 | uneval/src/internal/object.ts:69 |
|    1.6% |    65 | uneval/src/internal/object.ts:75 |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37)

| Count % | Count | Location                        |
| ------: | ----: | ------------------------------- |
|  100.0% | 4,059 | uneval/src/internal/index.ts:17 |

##### `unevalLiteral` (uneval/src/internal/primitive.ts:139:23)

| Count % | Count | Location                             |
| ------: | ----: | ------------------------------------ |
|   27.7% | 1,112 | uneval/src/internal/primitive.ts:146 |
|   20.6% |   825 | uneval/src/internal/primitive.ts:148 |
|   14.0% |   563 | uneval/src/internal/primitive.ts:149 |
|   12.5% |   500 | uneval/src/internal/primitive.ts:147 |
|   11.3% |   452 | uneval/src/internal/primitive.ts:155 |

##### `unevalNumber` (uneval/src/internal/primitive.ts:12:29)

| Count % | Count | Location                            |
| ------: | ----: | ----------------------------------- |
|   94.9% | 2,969 | uneval/src/internal/primitive.ts:22 |
|    3.0% |    94 | uneval/src/internal/primitive.ts:27 |
|    1.0% |    30 | uneval/src/internal/primitive.ts:13 |
|    0.5% |    16 | uneval/src/internal/primitive.ts:17 |
|    0.5% |    15 | uneval/src/internal/primitive.ts:15 |

##### `traverse` (uneval/src/index.ts:164:20)

| Count % | Count | Location                |
| ------: | ----: | ----------------------- |
|   30.8% |   888 | uneval/src/index.ts:178 |
|   21.0% |   607 | uneval/src/index.ts:201 |
|   13.5% |   390 | uneval/src/index.ts:200 |
|   11.6% |   336 | uneval/src/index.ts:165 |
|   11.3% |   325 | uneval/src/index.ts:184 |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

| Count % | Count | Location                             |
| ------: | ----: | ------------------------------------ |
|   74.0% | 2,059 | uneval/src/internal/collection.ts:86 |
|    7.2% |   201 | uneval/src/internal/collection.ts:52 |
|    5.7% |   159 | uneval/src/internal/collection.ts:10 |
|    4.6% |   128 | uneval/src/internal/collection.ts:62 |
|    3.4% |    95 | uneval/src/internal/collection.ts:63 |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

| Count % | Count | Location                        |
| ------: | ----: | ------------------------------- |
|   51.2% | 1,056 | uneval/src/internal/index.ts:33 |
|   10.2% |   210 | uneval/src/internal/index.ts:40 |
|    8.4% |   173 | uneval/src/internal/index.ts:32 |
|    8.2% |   170 | uneval/src/internal/index.ts:44 |
|    5.0% |   104 | uneval/src/internal/index.ts:25 |

##### `getType` (uneval/src/internal/type.ts:4:24)

| Count % | Count | Location                       |
| ------: | ----: | ------------------------------ |
|   76.4% | 1,285 | uneval/src/internal/type.ts:17 |
|   20.8% |   349 | uneval/src/internal/type.ts:7  |
|    1.8% |    31 | uneval/src/internal/type.ts:18 |
|    1.0% |    16 | uneval/src/internal/type.ts:9  |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32)

| Count % | Count | Location                          |
| ------: | ----: | --------------------------------- |
|   34.6% |   445 | uneval/src/internal/object.ts:406 |
|   22.0% |   283 | uneval/src/internal/object.ts:422 |
|   17.8% |   229 | uneval/src/internal/object.ts:407 |
|    9.2% |   118 | uneval/src/internal/object.ts:392 |
|    7.7% |    99 | uneval/src/internal/object.ts:426 |

##### `createState` (uneval/src/index.ts:144:21)

| Count % | Count | Location                |
| ------: | ----: | ----------------------- |
|   17.6% |   210 | uneval/src/index.ts:332 |
|   16.2% |   194 | uneval/src/index.ts:149 |
|   15.1% |   181 | uneval/src/index.ts:162 |
|   14.6% |   175 | uneval/src/index.ts:150 |
|   13.6% |   163 | uneval/src/index.ts:148 |

##### `unevalString` (uneval/src/internal/primitive.ts:133:29)

| Count % | Count | Location                             |
| ------: | ----: | ------------------------------------ |
|  100.0% |   411 | uneval/src/internal/primitive.ts:134 |

##### `unevalObject` (uneval/src/internal/object.ts:20:29)

| Count % | Count | Location                         |
| ------: | ----: | -------------------------------- |
|   44.0% |   153 | uneval/src/internal/object.ts:25 |
|   28.2% |    98 | uneval/src/internal/object.ts:33 |
|   23.6% |    82 | uneval/src/internal/object.ts:30 |
|    4.3% |    15 | uneval/src/internal/object.ts:31 |

##### `uneval` (uneval/src/index.ts:75:16)

| Count % | Count | Location               |
| ------: | ----: | ---------------------- |
|   73.5% |   233 | uneval/src/index.ts:77 |
|   13.6% |    43 | uneval/src/index.ts:75 |
|    7.6% |    24 | uneval/src/index.ts:82 |
|    2.8% |     9 | uneval/src/index.ts:85 |
|    2.5% |     8 | uneval/src/index.ts:76 |

##### `isObject` (uneval/src/internal/object.ts:434:25)

| Count % | Count | Location                          |
| ------: | ----: | --------------------------------- |
|   72.9% |   223 | uneval/src/internal/object.ts:436 |
|   27.1% |    83 | uneval/src/internal/object.ts:435 |

##### `uniformIntInternal` (uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:7:28)

| Count % | Count | Location                                                                                               |
| ------: | ----: | ------------------------------------------------------------------------------------------------------ |
|   98.1% |   154 | uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:11 |
|    1.3% |     2 | uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:8  |
|    0.6% |     1 | uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:10 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to V8 JIT inlining.

##### `traverseObject` (uneval/src/index.ts:204:26)

| Self % |    Self | Caller           | Location                      |
| -----: | ------: | ---------------- | ----------------------------- |
|  99.7% | 963.3ms | `traverse`       | uneval/src/index.ts:164:20    |
|   0.1% |   1.2ms | `traverseObject` | uneval/src/index.ts:204:26    |
|   0.1% |   0.6ms | `(anonymous)`    | uneval/scripts/profile.ts:1:1 |
|   0.0% |   0.1ms | `uneval`         | uneval/src/index.ts:75:16     |

##### `unevalObjectLike` (uneval/src/internal/object.ts:103:26)

| Self % |    Self | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
|  99.8% | 925.3ms | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30 |
|   0.1% |   0.8ms | `unevalObject`         | uneval/src/internal/object.ts:20:29 |

##### `unevalObjectInternal` (uneval/src/internal/object.ts:68:30)

| Self % |    Self | Caller                 | Location                             |
| -----: | ------: | ---------------------- | ------------------------------------ |
|  99.4% | 524.1ms | `unevalObject`         | uneval/src/internal/object.ts:20:29  |
|   0.1% |   0.5ms | `uneval`               | uneval/src/index.ts:75:16            |
|   0.1% |   0.4ms | `unevalObjectLike`     | uneval/src/internal/object.ts:103:26 |
|   0.0% |   0.3ms | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30  |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37)

| Self % |    Self | Caller                   | Location                             |
| -----: | ------: | ------------------------ | ------------------------------------ |
| 100.0% | 524.1ms | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:384:32 |

##### `unevalLiteral` (uneval/src/internal/primitive.ts:139:23)

| Self % |    Self | Caller         | Location                                |
| -----: | ------: | -------------- | --------------------------------------- |
| 100.0% | 517.7ms | `unevalString` | uneval/src/internal/primitive.ts:133:29 |

##### `unevalNumber` (uneval/src/internal/primitive.ts:12:29)

| Self % |    Self | Caller           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 404.6ms | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `traverse` (uneval/src/index.ts:164:20)

| Self % |    Self | Caller           | Location                   |
| -----: | ------: | ---------------- | -------------------------- |
|  75.3% | 280.4ms | `traverseObject` | uneval/src/index.ts:204:26 |
|  24.7% |  92.2ms | `createState`    | uneval/src/index.ts:144:21 |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

| Self % |    Self | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
|  99.6% | 358.1ms | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30 |
|   0.3% |   0.9ms | `unevalObject`         | uneval/src/internal/object.ts:20:29 |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

| Self % |    Self | Caller                 | Location                               |
| -----: | ------: | ---------------------- | -------------------------------------- |
|  40.3% | 107.6ms | `unevalObjectLike`     | uneval/src/internal/object.ts:103:26   |
|  33.3% |  88.9ms | `unevalArray`          | uneval/src/internal/collection.ts:7:47 |
|   8.9% |  23.8ms | `uneval`               | uneval/src/index.ts:75:16              |
|   7.3% |  19.5ms | `unevalWithoutCustom`  | uneval/src/internal/index.ts:14:37     |
|   6.9% |  18.4ms | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30    |

##### `getType` (uneval/src/internal/type.ts:4:24)

| Self % |    Self | Caller           | Location                   |
| -----: | ------: | ---------------- | -------------------------- |
|  99.9% | 216.8ms | `traverseObject` | uneval/src/index.ts:204:26 |
|   0.1% |   0.1ms | `traverse`       | uneval/src/index.ts:164:20 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32)

| Self % |    Self | Caller             | Location                             |
| -----: | ------: | ------------------ | ------------------------------------ |
| 100.0% | 165.8ms | `unevalObjectLike` | uneval/src/internal/object.ts:103:26 |

##### `createState` (uneval/src/index.ts:144:21)

| Self % |    Self | Caller   | Location                  |
| -----: | ------: | -------- | ------------------------- |
| 100.0% | 154.6ms | `uneval` | uneval/src/index.ts:75:16 |

##### `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` ([unknown])

| Self % |    Self | Caller                   | Location                             |
| -----: | ------: | ------------------------ | ------------------------------------ |
| 100.0% | 127.4ms | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:384:32 |

##### `unevalString` (uneval/src/internal/primitive.ts:133:29)

| Self % |   Self | Caller           | Location                           |
| -----: | -----: | ---------------- | ---------------------------------- |
| 100.0% | 53.3ms | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `unevalObject` (uneval/src/internal/object.ts:20:29)

| Self % |   Self | Caller           | Location                           |
| -----: | -----: | ---------------- | ---------------------------------- |
| 100.0% | 44.8ms | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `uneval` (uneval/src/index.ts:75:16)

| Self % |   Self | Caller        | Location                      |
| -----: | -----: | ------------- | ----------------------------- |
|  97.5% | 39.9ms | `(anonymous)` | uneval/scripts/profile.ts:1:1 |

##### `isObject` (uneval/src/internal/object.ts:434:25)

| Self % |   Self | Caller           | Location                           |
| -----: | -----: | ---------------- | ---------------------------------- |
| 100.0% | 39.5ms | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `uniformIntInternal` (uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:7:28)

| Self % |   Self | Caller                    | Location                                                                                                   |
| -----: | -----: | ------------------------- | ---------------------------------------------------------------------------------------------------------- |
|  96.7% | 19.8ms | `uniformInt`              | uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:127:20 |
|   3.3% |  0.7ms | `uniformArrayIntInternal` | uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:83:33  |

### Total time

Functions ranked by total time in the function and all its callees.

| Total % |    Total | Self % |    Self | Function                                         | Location                                                                                     |
| ------: | -------: | -----: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------------------------- |
|   94.3% | 5824.7ms |   0.2% |  13.9ms | `(anonymous)`                                    | uneval/scripts/profile.ts:1:1                                                                |
|   92.6% | 5720.4ms |   0.7% |  40.9ms | `uneval`                                         | uneval/src/index.ts:75:16                                                                    |
|   64.4% | 3978.1ms |   4.3% | 266.6ms | `unevalInternal`                                 | uneval/src/internal/index.ts:25:32                                                           |
|   63.3% | 3912.5ms |   0.7% |  44.8ms | `unevalObject`                                   | uneval/src/internal/object.ts:20:29                                                          |
|   63.0% | 3893.0ms |   8.5% | 527.0ms | `unevalObjectInternal`                           | uneval/src/internal/object.ts:68:30                                                          |
|   48.6% | 3001.9ms |  15.0% | 926.9ms | `unevalObjectLike`                               | uneval/src/internal/object.ts:103:26                                                         |
|   28.0% | 1730.2ms |   5.8% | 359.6ms | `unevalArray`                                    | uneval/src/internal/collection.ts:7:47                                                       |
|   27.7% | 1709.1ms |   2.5% | 154.6ms | `createState`                                    | uneval/src/index.ts:144:21                                                                   |
|   25.2% | 1554.5ms |   6.0% | 372.6ms | `traverse`                                       | uneval/src/index.ts:164:20                                                                   |
|   23.7% | 1464.1ms |  15.6% | 966.3ms | `traverseObject`                                 | uneval/src/index.ts:204:26                                                                   |
|   19.4% | 1200.9ms |   2.7% | 165.8ms | `unevalObjectLiteralKey`                         | uneval/src/internal/object.ts:384:32                                                         |
|   14.7% |  907.7ms |   8.5% | 524.1ms | `unevalWithoutCustom`                            | uneval/src/internal/index.ts:14:37                                                           |
|    9.2% |  571.0ms |   0.9% |  53.3ms | `unevalString`                                   | uneval/src/internal/primitive.ts:133:29                                                      |
|    8.4% |  517.7ms |   8.4% | 517.7ms | `unevalLiteral`                                  | uneval/src/internal/primitive.ts:139:23                                                      |
|    6.6% |  404.6ms |   6.6% | 404.6ms | `unevalNumber`                                   | uneval/src/internal/primitive.ts:12:29                                                       |
|    3.5% |  217.0ms |   3.5% | 217.0ms | `getType`                                        | uneval/src/internal/type.ts:4:24                                                             |
|    2.1% |  127.4ms |   2.1% | 127.4ms | `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` | [unknown]                                                                                    |
|    1.7% |  106.3ms |   1.7% | 106.3ms | `(garbage collector)`                            | [unknown]                                                                                    |
|    1.7% |  104.4ms |   1.7% | 104.4ms | `(program)`                                      | [unknown]                                                                                    |
|    1.4% |   87.1ms |   0.0% |   0.0ms | `sample`                                         | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16 |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to V8 JIT inlining.

##### `(anonymous)` (uneval/scripts/profile.ts:1:1)

| Total % |    Total | Callee           | Location                                                                                     |
| ------: | -------: | ---------------- | -------------------------------------------------------------------------------------------- |
|   98.2% | 5719.3ms | `uneval`         | uneval/src/index.ts:75:16                                                                    |
|    1.5% |   87.1ms | `sample`         | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16 |
|    0.0% |    2.1ms | `anything`       | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:8168:18 |
|    0.0% |    1.7ms | `unevalInternal` | uneval/src/internal/index.ts:25:32                                                           |
|    0.0% |    0.6ms | `traverseObject` | uneval/src/index.ts:204:26                                                                   |

##### `uneval` (uneval/src/index.ts:75:16)

| Total % |    Total | Callee                 | Location                            |
| ------: | -------: | ---------------------- | ----------------------------------- |
|   69.4% | 3969.6ms | `unevalInternal`       | uneval/src/internal/index.ts:25:32  |
|   29.9% | 1709.1ms | `createState`          | uneval/src/index.ts:144:21          |
|    0.0% |    0.5ms | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30 |
|    0.0% |    0.1ms | `traverseObject`       | uneval/src/index.ts:204:26          |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

| Total % |    Total | Callee          | Location                                |
| ------: | -------: | --------------- | --------------------------------------- |
|   98.4% | 3912.5ms | `unevalObject`  | uneval/src/internal/object.ts:20:29     |
|   14.4% |  571.0ms | `unevalString`  | uneval/src/internal/primitive.ts:133:29 |
|   10.2% |  404.6ms | `unevalNumber`  | uneval/src/internal/primitive.ts:12:29  |
|    1.0% |   39.5ms | `isObject`      | uneval/src/internal/object.ts:434:25    |
|    0.1% |    5.5ms | `unevalBoolean` | uneval/src/internal/primitive.ts:8:30   |

##### `unevalObject` (uneval/src/internal/object.ts:20:29)

| Total % |    Total | Callee                 | Location                               |
| ------: | -------: | ---------------------- | -------------------------------------- |
|   99.4% | 3890.7ms | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30    |
|    0.0% |    0.9ms | `unevalArray`          | uneval/src/internal/collection.ts:7:47 |
|    0.0% |    0.8ms | `unevalObjectLike`     | uneval/src/internal/object.ts:103:26   |

##### `unevalObjectInternal` (uneval/src/internal/object.ts:68:30)

| Total % |    Total | Callee                 | Location                               |
| ------: | -------: | ---------------------- | -------------------------------------- |
|   77.1% | 3000.5ms | `unevalObjectLike`     | uneval/src/internal/object.ts:103:26   |
|   44.4% | 1729.2ms | `unevalArray`          | uneval/src/internal/collection.ts:7:47 |
|    0.5% |   18.4ms | `unevalInternal`       | uneval/src/internal/index.ts:25:32     |
|    0.0% |    0.3ms | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30    |

##### `unevalObjectLike` (uneval/src/internal/object.ts:103:26)

| Total % |    Total | Callee                     | Location                             |
| ------: | -------: | -------------------------- | ------------------------------------ |
|   50.4% | 1513.1ms | `unevalInternal`           | uneval/src/internal/index.ts:25:32   |
|   40.0% | 1200.9ms | `unevalObjectLiteralKey`   | uneval/src/internal/object.ts:384:32 |
|    0.4% |   13.3ms | `isRegularDataDescriptor`  | uneval/src/internal/object.ts:287:33 |
|    0.1% |    2.2ms | `(anonymous)`              | uneval/src/internal/object.ts:201:30 |
|    0.0% |    0.9ms | `isDefaultObjectPrototype` | uneval/src/internal/object.ts:429:41 |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

| Total % |    Total | Callee               | Location                                |
| ------: | -------: | -------------------- | --------------------------------------- |
|   85.2% | 1474.1ms | `unevalInternal`     | uneval/src/internal/index.ts:25:32      |
|    0.1% |    2.6ms | `unevalObjectAssign` | uneval/src/internal/collection.ts:89:28 |

##### `createState` (uneval/src/index.ts:144:21)

| Total % |    Total | Callee     | Location                   |
| ------: | -------: | ---------- | -------------------------- |
|   91.0% | 1554.5ms | `traverse` | uneval/src/index.ts:164:20 |

##### `traverse` (uneval/src/index.ts:164:20)

| Total % |    Total | Callee           | Location                         |
| ------: | -------: | ---------------- | -------------------------------- |
|   94.1% | 1462.3ms | `traverseObject` | uneval/src/index.ts:204:26       |
|    0.0% |    0.1ms | `getType`        | uneval/src/internal/type.ts:4:24 |

##### `traverseObject` (uneval/src/index.ts:204:26)

| Total % |   Total | Callee                     | Location                             |
| ------: | ------: | -------------------------- | ------------------------------------ |
|   60.5% | 886.0ms | `traverse`                 | uneval/src/index.ts:164:20           |
|   14.8% | 216.8ms | `getType`                  | uneval/src/internal/type.ts:4:24     |
|    0.1% |   1.2ms | `traverseObject`           | uneval/src/index.ts:204:26           |
|    0.0% |   0.5ms | `isDefaultObjectPrototype` | uneval/src/internal/object.ts:429:41 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32)

| Total % |   Total | Callee                                           | Location                           |
| ------: | ------: | ------------------------------------------------ | ---------------------------------- |
|   75.6% | 907.7ms | `unevalWithoutCustom`                            | uneval/src/internal/index.ts:14:37 |
|   10.6% | 127.4ms | `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` | [unknown]                          |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37)

| Total % |   Total | Callee           | Location                           |
| ------: | ------: | ---------------- | ---------------------------------- |
|   42.3% | 383.7ms | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `unevalString` (uneval/src/internal/primitive.ts:133:29)

| Total % |   Total | Callee          | Location                                |
| ------: | ------: | --------------- | --------------------------------------- |
|   90.7% | 517.7ms | `unevalLiteral` | uneval/src/internal/primitive.ts:139:23 |

##### `sample` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16)

| Total % |  Total | Callee         | Location                                                                                     |
| ------: | -----: | -------------- | -------------------------------------------------------------------------------------------- |
|   99.7% | 86.8ms | `mapHelper`    | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20   |
|    0.3% |  0.3ms | `streamSample` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2524:22 |

## Hottest call stacks

Call stacks ranked by time spent in their top frame.

Common call stack: `uneval` (uneval/src/index.ts:75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1)

| Self % |    Self | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   7.5% | 465.0ms | `traverseObject` (uneval/src/index.ts:204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                                                                          |
|   7.0% | 434.9ms | `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                                                                                                                                                                                           |
|   5.9% | 365.8ms | `traverseObject` (uneval/src/index.ts:204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                        |
|   4.0% | 245.3ms | `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                                                                                          |
|   3.9% | 239.1ms | `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                                                                                                                                                                                                                         |
|   3.0% | 185.6ms | `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                             |
|   2.9% | 177.4ms | `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                  |
|   2.8% | 170.3ms | `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                                                                                                                                                                |
|   2.5% | 155.0ms | `traverse` (uneval/src/index.ts:164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                                                    |
|   2.5% | 154.6ms | `createState` (uneval/src/index.ts:144:21)                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|   2.5% | 152.7ms | `unevalLiteral` (uneval/src/internal/primitive.ts:139:23) ← `unevalString` (133:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalWithoutCustom` (14:37) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                         |
|   1.8% | 113.0ms | `traverseObject` (uneval/src/index.ts:204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                      |
|   1.8% | 110.9ms | `getType` (uneval/src/internal/type.ts:4:24) ← `traverseObject` (uneval/src/index.ts:204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                           |
|   1.8% | 110.8ms | `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                                           |
|   1.7% | 106.6ms | `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) |
|   1.6% | 100.6ms | `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                |
|   1.6% |  99.4ms | `unevalWithoutCustom` (uneval/src/internal/index.ts:14:37) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                            |
|   1.6% |  96.8ms | `traverse` (uneval/src/index.ts:164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                  |
|   1.5% |  92.2ms | `traverse` (uneval/src/index.ts:164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                                                                                                      |
|   1.4% |  83.4ms | `unevalNumber` (uneval/src/internal/primitive.ts:12:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32)                                                                                                                                                                                         |

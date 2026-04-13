# CPU profile

Took 6176.2ms over 47806 samples (129.2µs per sample).

| Category          | Total % | Total    |
| ----------------- | ------- | -------- |
| ours              | 91.0%   | 5620.4ms |
| regexp            | 2.1%    | 127.4ms  |
| native            | 2.0%    | 124.6ms  |
| garbage collector | 1.7%    | 106.3ms  |
| program           | 1.7%    | 104.4ms  |
| third-party       | 1.5%    | 90.2ms   |
| idle              | 0.0%    | 3.0ms    |

## Hottest functions

### Self time

Functions ranked by time in the function body, excluding callees.

| Self % |    Self | Total % |    Total | Function                                         | Location                                                                                          |
| -----: | ------: | ------: | -------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
|  15.6% | 966.3ms |   23.7% | 1464.1ms | `traverseObject`                                 | src/index.ts:204:26                                                                               |
|  15.0% | 926.9ms |   48.6% | 3001.9ms | `unevalObjectLike`                               | src/internal/object.ts:103:26                                                                     |
|   8.5% | 527.0ms |   63.0% | 3893.0ms | `unevalObjectInternal`                           | src/internal/object.ts:68:30                                                                      |
|   8.5% | 524.1ms |   14.7% |  907.7ms | `unevalWithoutCustom`                            | src/internal/index.ts:14:37                                                                       |
|   8.4% | 517.7ms |    8.4% |  517.7ms | `unevalLiteral`                                  | src/internal/primitive.ts:139:23                                                                  |
|   6.6% | 404.6ms |    6.6% |  404.6ms | `unevalNumber`                                   | src/internal/primitive.ts:12:29                                                                   |
|   6.0% | 372.6ms |   25.2% | 1554.5ms | `traverse`                                       | src/index.ts:164:20                                                                               |
|   5.8% | 359.6ms |   28.0% | 1730.2ms | `unevalArray`                                    | src/internal/collection.ts:7:47                                                                   |
|   4.3% | 266.6ms |   64.4% | 3978.1ms | `unevalInternal`                                 | src/internal/index.ts:25:32                                                                       |
|   3.5% | 217.0ms |    3.5% |  217.0ms | `getType`                                        | src/internal/type.ts:4:24                                                                         |
|   2.7% | 165.8ms |   19.4% | 1200.9ms | `unevalObjectLiteralKey`                         | src/internal/object.ts:384:32                                                                     |
|   2.5% | 154.6ms |   27.7% | 1709.1ms | `createState`                                    | src/index.ts:144:21                                                                               |
|   2.1% | 127.4ms |    2.1% |  127.4ms | `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` | [unknown]                                                                                         |
|   1.7% | 106.3ms |    1.7% |  106.3ms | `(garbage collector)`                            | [unknown]                                                                                         |
|   1.7% | 104.4ms |    1.7% |  104.4ms | `(program)`                                      | [unknown]                                                                                         |
|   0.9% |  53.3ms |    9.2% |  571.0ms | `unevalString`                                   | src/internal/primitive.ts:133:29                                                                  |
|   0.7% |  44.8ms |   63.3% | 3912.5ms | `unevalObject`                                   | src/internal/object.ts:20:29                                                                      |
|   0.7% |  40.9ms |   92.6% | 5720.4ms | `uneval`                                         | src/index.ts:75:16                                                                                |
|   0.6% |  39.5ms |    0.6% |   39.5ms | `isObject`                                       | src/internal/object.ts:434:25                                                                     |
|   0.3% |  20.5ms |    0.3% |   20.8ms | `uniformIntInternal`                             | node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:7:28 |

#### Lines

Lines ranked by contribution to each function's sample count.

##### `traverseObject` (src/index.ts:204:26)

| Count % | Count | Location           |
| ------: | ----: | ------------------ |
|   44.8% |  3352 | src/index.ts:211:1 |
|   21.4% |  1597 | src/index.ts:220:1 |
|   11.2% |   837 | src/index.ts:246:1 |
|    8.2% |   611 | src/index.ts:209:1 |
|    3.5% |   259 | src/index.ts:249:1 |

##### `unevalObjectLike` (src/internal/object.ts:103:26)

| Count % | Count | Location                     |
| ------: | ----: | ---------------------------- |
|   42.3% |  3037 | src/internal/object.ts:202:1 |
|   29.3% |  2102 | src/internal/object.ts:129:1 |
|    8.9% |   635 | src/internal/object.ts:139:1 |
|    5.4% |   385 | src/internal/object.ts:143:1 |
|    3.3% |   235 | src/internal/object.ts:113:1 |

##### `unevalObjectInternal` (src/internal/object.ts:68:30)

| Count % | Count | Location                    |
| ------: | ----: | --------------------------- |
|   50.8% |  2074 | src/internal/object.ts:79:1 |
|   38.5% |  1572 | src/internal/object.ts:78:1 |
|    5.5% |   225 | src/internal/object.ts:75:1 |
|    2.4% |    99 | src/internal/object.ts:70:1 |
|    1.6% |    65 | src/internal/object.ts:76:1 |

##### `unevalWithoutCustom` (src/internal/index.ts:14:37)

| Count % | Count | Location                   |
| ------: | ----: | -------------------------- |
|  100.0% |  4059 | src/internal/index.ts:18:1 |

##### `unevalLiteral` (src/internal/primitive.ts:139:23)

| Count % | Count | Location                        |
| ------: | ----: | ------------------------------- |
|   27.7% |  1112 | src/internal/primitive.ts:147:1 |
|   20.6% |   825 | src/internal/primitive.ts:149:1 |
|   14.0% |   563 | src/internal/primitive.ts:150:1 |
|   12.5% |   500 | src/internal/primitive.ts:148:1 |
|   11.3% |   452 | src/internal/primitive.ts:156:1 |

##### `unevalNumber` (src/internal/primitive.ts:12:29)

| Count % | Count | Location                       |
| ------: | ----: | ------------------------------ |
|   94.9% |  2969 | src/internal/primitive.ts:23:1 |
|    3.0% |    94 | src/internal/primitive.ts:28:1 |
|    1.0% |    30 | src/internal/primitive.ts:14:1 |
|    0.5% |    16 | src/internal/primitive.ts:18:1 |
|    0.5% |    15 | src/internal/primitive.ts:16:1 |

##### `traverse` (src/index.ts:164:20)

| Count % | Count | Location           |
| ------: | ----: | ------------------ |
|   30.8% |   888 | src/index.ts:179:1 |
|   21.0% |   607 | src/index.ts:202:1 |
|   13.5% |   390 | src/index.ts:201:1 |
|   11.6% |   336 | src/index.ts:166:1 |
|   11.3% |   325 | src/index.ts:185:1 |

##### `unevalArray` (src/internal/collection.ts:7:47)

| Count % | Count | Location                        |
| ------: | ----: | ------------------------------- |
|   74.0% |  2059 | src/internal/collection.ts:87:1 |
|    7.2% |   201 | src/internal/collection.ts:53:1 |
|    5.7% |   159 | src/internal/collection.ts:11:1 |
|    4.6% |   128 | src/internal/collection.ts:63:1 |
|    3.4% |    95 | src/internal/collection.ts:64:1 |

##### `unevalInternal` (src/internal/index.ts:25:32)

| Count % | Count | Location                   |
| ------: | ----: | -------------------------- |
|   51.2% |  1056 | src/internal/index.ts:34:1 |
|   10.2% |   210 | src/internal/index.ts:41:1 |
|    8.4% |   173 | src/internal/index.ts:33:1 |
|    8.2% |   170 | src/internal/index.ts:45:1 |
|    5.0% |   104 | src/internal/index.ts:26:1 |

##### `getType` (src/internal/type.ts:4:24)

| Count % | Count | Location                  |
| ------: | ----: | ------------------------- |
|   76.4% |  1285 | src/internal/type.ts:18:1 |
|   20.8% |   349 | src/internal/type.ts:8:1  |
|    1.8% |    31 | src/internal/type.ts:19:1 |
|    1.0% |    16 | src/internal/type.ts:10:1 |

##### `unevalObjectLiteralKey` (src/internal/object.ts:384:32)

| Count % | Count | Location                     |
| ------: | ----: | ---------------------------- |
|   34.6% |   445 | src/internal/object.ts:407:1 |
|   22.0% |   283 | src/internal/object.ts:423:1 |
|   17.8% |   229 | src/internal/object.ts:408:1 |
|    9.2% |   118 | src/internal/object.ts:393:1 |
|    7.7% |    99 | src/internal/object.ts:427:1 |

##### `createState` (src/index.ts:144:21)

| Count % | Count | Location           |
| ------: | ----: | ------------------ |
|   17.6% |   210 | src/index.ts:333:1 |
|   16.2% |   194 | src/index.ts:150:1 |
|   15.1% |   181 | src/index.ts:163:1 |
|   14.6% |   175 | src/index.ts:151:1 |
|   13.6% |   163 | src/index.ts:149:1 |

##### `unevalString` (src/internal/primitive.ts:133:29)

| Count % | Count | Location                        |
| ------: | ----: | ------------------------------- |
|  100.0% |   411 | src/internal/primitive.ts:135:1 |

##### `unevalObject` (src/internal/object.ts:20:29)

| Count % | Count | Location                    |
| ------: | ----: | --------------------------- |
|   44.0% |   153 | src/internal/object.ts:26:1 |
|   28.2% |    98 | src/internal/object.ts:34:1 |
|   23.6% |    82 | src/internal/object.ts:31:1 |
|    4.3% |    15 | src/internal/object.ts:32:1 |

##### `uneval` (src/index.ts:75:16)

| Count % | Count | Location          |
| ------: | ----: | ----------------- |
|   73.5% |   233 | src/index.ts:78:1 |
|   13.6% |    43 | src/index.ts:76:1 |
|    7.6% |    24 | src/index.ts:83:1 |
|    2.8% |     9 | src/index.ts:86:1 |
|    2.5% |     8 | src/index.ts:77:1 |

##### `isObject` (src/internal/object.ts:434:25)

| Count % | Count | Location                     |
| ------: | ----: | ---------------------------- |
|   72.9% |   223 | src/internal/object.ts:437:1 |
|   27.1% |    83 | src/internal/object.ts:436:1 |

##### `uniformIntInternal` (node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:7:28)

| Count % | Count | Location                                                                                          |
| ------: | ----: | ------------------------------------------------------------------------------------------------- |
|   98.1% |   154 | node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:12:1 |
|    1.3% |     2 | node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:9:1  |
|    0.6% |     1 | node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:11:1 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to V8 JIT inlining.

##### `traverseObject` (src/index.ts:204:26)

| Self % |    Self | Caller           | Location               |
| -----: | ------: | ---------------- | ---------------------- |
|  99.7% | 963.3ms | `traverse`       | src/index.ts:164:20    |
|   0.1% |   1.2ms | `traverseObject` | src/index.ts:204:26    |
|   0.1% |   0.6ms | `(anonymous)`    | scripts/profile.ts:1:1 |
|   0.0% |   0.1ms | `uneval`         | src/index.ts:75:16     |

##### `unevalObjectLike` (src/internal/object.ts:103:26)

| Self % |    Self | Caller                 | Location                     |
| -----: | ------: | ---------------------- | ---------------------------- |
|  99.8% | 925.3ms | `unevalObjectInternal` | src/internal/object.ts:68:30 |
|   0.1% |   0.8ms | `unevalObject`         | src/internal/object.ts:20:29 |

##### `unevalObjectInternal` (src/internal/object.ts:68:30)

| Self % |    Self | Caller                 | Location                      |
| -----: | ------: | ---------------------- | ----------------------------- |
|  99.4% | 524.1ms | `unevalObject`         | src/internal/object.ts:20:29  |
|   0.1% |   0.5ms | `uneval`               | src/index.ts:75:16            |
|   0.1% |   0.4ms | `unevalObjectLike`     | src/internal/object.ts:103:26 |
|   0.0% |   0.3ms | `unevalObjectInternal` | src/internal/object.ts:68:30  |

##### `unevalWithoutCustom` (src/internal/index.ts:14:37)

| Self % |    Self | Caller                   | Location                      |
| -----: | ------: | ------------------------ | ----------------------------- |
| 100.0% | 524.1ms | `unevalObjectLiteralKey` | src/internal/object.ts:384:32 |

##### `unevalLiteral` (src/internal/primitive.ts:139:23)

| Self % |    Self | Caller         | Location                         |
| -----: | ------: | -------------- | -------------------------------- |
| 100.0% | 517.7ms | `unevalString` | src/internal/primitive.ts:133:29 |

##### `unevalNumber` (src/internal/primitive.ts:12:29)

| Self % |    Self | Caller           | Location                    |
| -----: | ------: | ---------------- | --------------------------- |
| 100.0% | 404.6ms | `unevalInternal` | src/internal/index.ts:25:32 |

##### `traverse` (src/index.ts:164:20)

| Self % |    Self | Caller           | Location            |
| -----: | ------: | ---------------- | ------------------- |
|  75.3% | 280.4ms | `traverseObject` | src/index.ts:204:26 |
|  24.7% |  92.2ms | `createState`    | src/index.ts:144:21 |

##### `unevalArray` (src/internal/collection.ts:7:47)

| Self % |    Self | Caller                 | Location                     |
| -----: | ------: | ---------------------- | ---------------------------- |
|  99.6% | 358.1ms | `unevalObjectInternal` | src/internal/object.ts:68:30 |
|   0.3% |   0.9ms | `unevalObject`         | src/internal/object.ts:20:29 |

##### `unevalInternal` (src/internal/index.ts:25:32)

| Self % |    Self | Caller                 | Location                        |
| -----: | ------: | ---------------------- | ------------------------------- |
|  40.3% | 107.6ms | `unevalObjectLike`     | src/internal/object.ts:103:26   |
|  33.3% |  88.9ms | `unevalArray`          | src/internal/collection.ts:7:47 |
|   8.9% |  23.8ms | `uneval`               | src/index.ts:75:16              |
|   7.3% |  19.5ms | `unevalWithoutCustom`  | src/internal/index.ts:14:37     |
|   6.9% |  18.4ms | `unevalObjectInternal` | src/internal/object.ts:68:30    |

##### `getType` (src/internal/type.ts:4:24)

| Self % |    Self | Caller           | Location            |
| -----: | ------: | ---------------- | ------------------- |
|  99.9% | 216.8ms | `traverseObject` | src/index.ts:204:26 |
|   0.1% |   0.1ms | `traverse`       | src/index.ts:164:20 |

##### `unevalObjectLiteralKey` (src/internal/object.ts:384:32)

| Self % |    Self | Caller             | Location                      |
| -----: | ------: | ------------------ | ----------------------------- |
| 100.0% | 165.8ms | `unevalObjectLike` | src/internal/object.ts:103:26 |

##### `createState` (src/index.ts:144:21)

| Self % |    Self | Caller   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% | 154.6ms | `uneval` | src/index.ts:75:16 |

##### `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` ([unknown])

| Self % |    Self | Caller                   | Location                      |
| -----: | ------: | ------------------------ | ----------------------------- |
| 100.0% | 127.4ms | `unevalObjectLiteralKey` | src/internal/object.ts:384:32 |

##### `unevalString` (src/internal/primitive.ts:133:29)

| Self % |   Self | Caller           | Location                    |
| -----: | -----: | ---------------- | --------------------------- |
| 100.0% | 53.3ms | `unevalInternal` | src/internal/index.ts:25:32 |

##### `unevalObject` (src/internal/object.ts:20:29)

| Self % |   Self | Caller           | Location                    |
| -----: | -----: | ---------------- | --------------------------- |
| 100.0% | 44.8ms | `unevalInternal` | src/internal/index.ts:25:32 |

##### `uneval` (src/index.ts:75:16)

| Self % |   Self | Caller        | Location               |
| -----: | -----: | ------------- | ---------------------- |
|  97.5% | 39.9ms | `(anonymous)` | scripts/profile.ts:1:1 |

##### `isObject` (src/internal/object.ts:434:25)

| Self % |   Self | Caller           | Location                    |
| -----: | -----: | ---------------- | --------------------------- |
| 100.0% | 39.5ms | `unevalInternal` | src/internal/index.ts:25:32 |

##### `uniformIntInternal` (node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:7:28)

| Self % |   Self | Caller                    | Location                                                                                            |
| -----: | -----: | ------------------------- | --------------------------------------------------------------------------------------------------- |
|  96.7% | 19.8ms | `uniformInt`              | node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:127:20 |
|   3.3% |  0.7ms | `uniformArrayIntInternal` | node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:83:33  |

### Total time

Functions ranked by total time in the function and all its callees.

| Total % |    Total | Self % |    Self | Function                                         | Location                                                                              |
| ------: | -------: | -----: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
|   94.3% | 5824.7ms |   0.2% |  13.9ms | `(anonymous)`                                    | scripts/profile.ts:1:1                                                                |
|   92.6% | 5720.4ms |   0.7% |  40.9ms | `uneval`                                         | src/index.ts:75:16                                                                    |
|   64.4% | 3978.1ms |   4.3% | 266.6ms | `unevalInternal`                                 | src/internal/index.ts:25:32                                                           |
|   63.3% | 3912.5ms |   0.7% |  44.8ms | `unevalObject`                                   | src/internal/object.ts:20:29                                                          |
|   63.0% | 3893.0ms |   8.5% | 527.0ms | `unevalObjectInternal`                           | src/internal/object.ts:68:30                                                          |
|   48.6% | 3001.9ms |  15.0% | 926.9ms | `unevalObjectLike`                               | src/internal/object.ts:103:26                                                         |
|   28.0% | 1730.2ms |   5.8% | 359.6ms | `unevalArray`                                    | src/internal/collection.ts:7:47                                                       |
|   27.7% | 1709.1ms |   2.5% | 154.6ms | `createState`                                    | src/index.ts:144:21                                                                   |
|   25.2% | 1554.5ms |   6.0% | 372.6ms | `traverse`                                       | src/index.ts:164:20                                                                   |
|   23.7% | 1464.1ms |  15.6% | 966.3ms | `traverseObject`                                 | src/index.ts:204:26                                                                   |
|   19.4% | 1200.9ms |   2.7% | 165.8ms | `unevalObjectLiteralKey`                         | src/internal/object.ts:384:32                                                         |
|   14.7% |  907.7ms |   8.5% | 524.1ms | `unevalWithoutCustom`                            | src/internal/index.ts:14:37                                                           |
|    9.2% |  571.0ms |   0.9% |  53.3ms | `unevalString`                                   | src/internal/primitive.ts:133:29                                                      |
|    8.4% |  517.7ms |   8.4% | 517.7ms | `unevalLiteral`                                  | src/internal/primitive.ts:139:23                                                      |
|    6.6% |  404.6ms |   6.6% | 404.6ms | `unevalNumber`                                   | src/internal/primitive.ts:12:29                                                       |
|    3.5% |  217.0ms |   3.5% | 217.0ms | `getType`                                        | src/internal/type.ts:4:24                                                             |
|    2.1% |  127.4ms |   2.1% | 127.4ms | `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` | [unknown]                                                                             |
|    1.7% |  106.3ms |   1.7% | 106.3ms | `(garbage collector)`                            | [unknown]                                                                             |
|    1.7% |  104.4ms |   1.7% | 104.4ms | `(program)`                                      | [unknown]                                                                             |
|    1.4% |   87.1ms |   0.0% |   0.0ms | `sample`                                         | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16 |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to V8 JIT inlining.

##### `(anonymous)` (scripts/profile.ts:1:1)

| Total % |    Total | Callee           | Location                                                                              |
| ------: | -------: | ---------------- | ------------------------------------------------------------------------------------- |
|   98.2% | 5719.3ms | `uneval`         | src/index.ts:75:16                                                                    |
|    1.5% |   87.1ms | `sample`         | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16 |
|    0.0% |    2.1ms | `anything`       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:8168:18 |
|    0.0% |    1.7ms | `unevalInternal` | src/internal/index.ts:25:32                                                           |
|    0.0% |    0.6ms | `traverseObject` | src/index.ts:204:26                                                                   |

##### `uneval` (src/index.ts:75:16)

| Total % |    Total | Callee                 | Location                     |
| ------: | -------: | ---------------------- | ---------------------------- |
|   69.4% | 3969.6ms | `unevalInternal`       | src/internal/index.ts:25:32  |
|   29.9% | 1709.1ms | `createState`          | src/index.ts:144:21          |
|    0.0% |    0.5ms | `unevalObjectInternal` | src/internal/object.ts:68:30 |
|    0.0% |    0.1ms | `traverseObject`       | src/index.ts:204:26          |

##### `unevalInternal` (src/internal/index.ts:25:32)

| Total % |    Total | Callee          | Location                         |
| ------: | -------: | --------------- | -------------------------------- |
|   98.4% | 3912.5ms | `unevalObject`  | src/internal/object.ts:20:29     |
|   14.4% |  571.0ms | `unevalString`  | src/internal/primitive.ts:133:29 |
|   10.2% |  404.6ms | `unevalNumber`  | src/internal/primitive.ts:12:29  |
|    1.0% |   39.5ms | `isObject`      | src/internal/object.ts:434:25    |
|    0.1% |    5.5ms | `unevalBoolean` | src/internal/primitive.ts:8:30   |

##### `unevalObject` (src/internal/object.ts:20:29)

| Total % |    Total | Callee                 | Location                        |
| ------: | -------: | ---------------------- | ------------------------------- |
|   99.4% | 3890.7ms | `unevalObjectInternal` | src/internal/object.ts:68:30    |
|    0.0% |    0.9ms | `unevalArray`          | src/internal/collection.ts:7:47 |
|    0.0% |    0.8ms | `unevalObjectLike`     | src/internal/object.ts:103:26   |

##### `unevalObjectInternal` (src/internal/object.ts:68:30)

| Total % |    Total | Callee                 | Location                        |
| ------: | -------: | ---------------------- | ------------------------------- |
|   77.1% | 3000.5ms | `unevalObjectLike`     | src/internal/object.ts:103:26   |
|   44.4% | 1729.2ms | `unevalArray`          | src/internal/collection.ts:7:47 |
|    0.5% |   18.4ms | `unevalInternal`       | src/internal/index.ts:25:32     |
|    0.0% |    0.3ms | `unevalObjectInternal` | src/internal/object.ts:68:30    |

##### `unevalObjectLike` (src/internal/object.ts:103:26)

| Total % |    Total | Callee                     | Location                      |
| ------: | -------: | -------------------------- | ----------------------------- |
|   50.4% | 1513.1ms | `unevalInternal`           | src/internal/index.ts:25:32   |
|   40.0% | 1200.9ms | `unevalObjectLiteralKey`   | src/internal/object.ts:384:32 |
|    0.4% |   13.3ms | `isRegularDataDescriptor`  | src/internal/object.ts:287:33 |
|    0.1% |    2.2ms | `(anonymous)`              | src/internal/object.ts:201:30 |
|    0.0% |    0.9ms | `isDefaultObjectPrototype` | src/internal/object.ts:429:41 |

##### `unevalArray` (src/internal/collection.ts:7:47)

| Total % |    Total | Callee               | Location                         |
| ------: | -------: | -------------------- | -------------------------------- |
|   85.2% | 1474.1ms | `unevalInternal`     | src/internal/index.ts:25:32      |
|    0.1% |    2.6ms | `unevalObjectAssign` | src/internal/collection.ts:89:28 |

##### `createState` (src/index.ts:144:21)

| Total % |    Total | Callee     | Location            |
| ------: | -------: | ---------- | ------------------- |
|   91.0% | 1554.5ms | `traverse` | src/index.ts:164:20 |

##### `traverse` (src/index.ts:164:20)

| Total % |    Total | Callee           | Location                  |
| ------: | -------: | ---------------- | ------------------------- |
|   94.1% | 1462.3ms | `traverseObject` | src/index.ts:204:26       |
|    0.0% |    0.1ms | `getType`        | src/internal/type.ts:4:24 |

##### `traverseObject` (src/index.ts:204:26)

| Total % |   Total | Callee                     | Location                      |
| ------: | ------: | -------------------------- | ----------------------------- |
|   60.5% | 886.0ms | `traverse`                 | src/index.ts:164:20           |
|   14.8% | 216.8ms | `getType`                  | src/internal/type.ts:4:24     |
|    0.1% |   1.2ms | `traverseObject`           | src/index.ts:204:26           |
|    0.0% |   0.5ms | `isDefaultObjectPrototype` | src/internal/object.ts:429:41 |

##### `unevalObjectLiteralKey` (src/internal/object.ts:384:32)

| Total % |   Total | Callee                                           | Location                    |
| ------: | ------: | ------------------------------------------------ | --------------------------- |
|   75.6% | 907.7ms | `unevalWithoutCustom`                            | src/internal/index.ts:14:37 |
|   10.6% | 127.4ms | `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` | [unknown]                   |

##### `unevalWithoutCustom` (src/internal/index.ts:14:37)

| Total % |   Total | Callee           | Location                    |
| ------: | ------: | ---------------- | --------------------------- |
|   42.3% | 383.7ms | `unevalInternal` | src/internal/index.ts:25:32 |

##### `unevalString` (src/internal/primitive.ts:133:29)

| Total % |   Total | Callee          | Location                         |
| ------: | ------: | --------------- | -------------------------------- |
|   90.7% | 517.7ms | `unevalLiteral` | src/internal/primitive.ts:139:23 |

##### `sample` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16)

| Total % |  Total | Callee         | Location                                                                              |
| ------: | -----: | -------------- | ------------------------------------------------------------------------------------- |
|   99.7% | 86.8ms | `mapHelper`    | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20   |
|    0.3% |  0.3ms | `streamSample` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2524:22 |

## Hottest call stacks

Call stacks ranked by time spent in their top frame.

Common call stack: `uneval` (src/index.ts:75:16) ← `(anonymous)` (scripts/profile.ts:1:1)

| Self % |    Self | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   7.5% | 465.0ms | `traverseObject` (src/index.ts:204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                                       |
|   7.0% | 434.9ms | `unevalObjectLike` (src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                                                                                                                                                                                                                               |
|   5.9% | 365.8ms | `traverseObject` (src/index.ts:204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                     |
|   4.0% | 245.3ms | `unevalWithoutCustom` (src/internal/index.ts:14:37) ← `unevalObjectLiteralKey` (src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                                                                                                                                     |
|   3.9% | 239.1ms | `unevalObjectInternal` (src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                                                                                                                                                                                                                                                             |
|   3.0% | 185.6ms | `unevalObjectLike` (src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `unevalObjectLike` (src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                                                               |
|   2.9% | 177.4ms | `unevalObjectLike` (src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `unevalArray` (src/internal/collection.ts:7:47) ← `unevalObjectInternal` (src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                                           |
|   2.8% | 170.3ms | `unevalArray` (src/internal/collection.ts:7:47) ← `unevalObjectInternal` (src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                                                                                                                                                                                                           |
|   2.5% | 155.0ms | `traverse` (src/index.ts:164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                 |
|   2.5% | 154.6ms | `createState` (src/index.ts:144:21)                                                                                                                                                                                                                                                                                                                                                                                                         |
|   2.5% | 152.7ms | `unevalLiteral` (src/internal/primitive.ts:139:23) ← `unevalString` (133:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `unevalWithoutCustom` (14:37) ← `unevalObjectLiteralKey` (src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                           |
|   1.8% | 113.0ms | `traverseObject` (src/index.ts:204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                   |
|   1.8% | 110.9ms | `getType` (src/internal/type.ts:4:24) ← `traverseObject` (src/index.ts:204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                               |
|   1.8% | 110.8ms | `unevalObjectInternal` (src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `unevalObjectLike` (src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                                                                                             |
|   1.7% | 106.6ms | `unevalWithoutCustom` (src/internal/index.ts:14:37) ← `unevalObjectLiteralKey` (src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `unevalArray` (src/internal/collection.ts:7:47) ← `unevalObjectInternal` (src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32) |
|   1.6% | 100.6ms | `unevalObjectInternal` (src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `unevalArray` (src/internal/collection.ts:7:47) ← `unevalObjectInternal` (src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                                                                         |
|   1.6% |  99.4ms | `unevalWithoutCustom` (src/internal/index.ts:14:37) ← `unevalObjectLiteralKey` (src/internal/object.ts:384:32) ← `unevalObjectLike` (103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `unevalObjectLike` (src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                     |
|   1.6% |  96.8ms | `traverse` (src/index.ts:164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                               |
|   1.5% |  92.2ms | `traverse` (src/index.ts:164:20) ← `createState` (144:21)                                                                                                                                                                                                                                                                                                                                                                                   |
|   1.4% |  83.4ms | `unevalNumber` (src/internal/primitive.ts:12:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `unevalObjectLike` (src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32)                                                                                                                                                                           |

# CPU profile

Took 6085.1ms over 46255 samples (131.6µs per sample).

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

| Self % |    Self | Total % |    Total | Function                                         | Location                         | Hottest line |
| -----: | ------: | ------: | -------: | ------------------------------------------------ | -------------------------------- | ------------ |
|  15.4% | 936.4ms |   50.0% | 3041.8ms | `unevalObjectLike`                               | src/internal/object.ts:103:26    | 93           |
|  14.8% | 899.9ms |   22.7% | 1383.7ms | `traverseObject`                                 | src/index.ts:204:26              | 152          |
|   8.8% | 535.2ms |   64.9% | 3947.9ms | `unevalObjectInternal`                           | src/internal/object.ts:68:30     | 54           |
|   8.7% | 529.6ms |    8.7% |  529.6ms | `unevalLiteral`                                  | src/internal/primitive.ts:139:23 | 105          |
|   8.6% | 520.5ms |   15.1% |  921.4ms | `unevalWithoutCustom`                            | src/internal/index.ts:14:37      | 4            |
|   6.9% | 420.6ms |    6.9% |  420.6ms | `unevalNumber`                                   | src/internal/primitive.ts:12:29  | 15           |
|   6.2% | 376.4ms |   24.3% | 1481.1ms | `traverse`                                       | src/index.ts:164:20              | 122          |
|   6.0% | 365.8ms |   28.9% | 1756.3ms | `unevalArray`                                    | src/internal/collection.ts:7:47  | 69           |
|   4.5% | 276.4ms |   66.2% | 4029.5ms | `unevalInternal`                                 | src/internal/index.ts:25:32      | 9            |
|   3.4% | 205.2ms |    3.4% |  205.2ms | `getType`                                        | src/internal/type.ts:4:24        | 11           |
|   2.9% | 175.5ms |   20.1% | 1225.7ms | `unevalObjectLiteralKey`                         | src/internal/object.ts:384:32    | 284          |
|   2.5% | 151.0ms |   26.8% | 1632.0ms | `createState`                                    | src/index.ts:144:21              | 249          |
|   2.3% | 139.7ms |    2.3% |  139.7ms | `(garbage collector)`                            | [unknown]                        | [unknown]    |
|   2.1% | 128.6ms |    2.1% |  128.6ms | `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` | [unknown]                        | [unknown]    |
|   1.7% | 106.1ms |    1.7% |  106.1ms | `(program)`                                      | [unknown]                        | [unknown]    |
|   0.8% |  50.1ms |    0.8% |   50.1ms | `(idle)`                                         | [unknown]                        | [unknown]    |
|   0.7% |  44.0ms |   65.2% | 3965.4ms | `unevalObject`                                   | src/internal/object.ts:20:29     | 12           |
|   0.7% |  40.3ms |    0.7% |   40.3ms | `isObject`                                       | src/internal/object.ts:434:25    | 309          |
|   0.7% |  40.3ms |    9.4% |  569.8ms | `unevalString`                                   | src/internal/primitive.ts:133:29 | 97           |
|   0.6% |  38.0ms |   93.5% | 5689.7ms | `uneval`                                         | src/index.ts:75:16               | 36           |

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

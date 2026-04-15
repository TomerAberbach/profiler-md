# CPU profile

Took 10362.4ms over 64,273 samples (161.2µs per sample).

| Category    | Total % | Total    |
| ----------- | ------- | -------- |
| ours        | 74.3%   | 7700.5ms |
| native      | 24.6%   | 2552.4ms |
| third-party | 0.8%    | 85.5ms   |

## Hottest functions

### Self time

Functions ranked by time in the function body, excluding callees.

| Self % |     Self | Total % |    Total | Function                                    | Location                         |
| -----: | -------: | ------: | -------: | ------------------------------------------- | -------------------------------- |
|  24.2% | 2505.2ms |   24.2% | 2505.2ms | `unevalLiteral`                             | src/internal/primitive.ts:149:22 |
|  12.8% | 1323.0ms |   12.8% | 1323.0ms | `join`                                      | [unknown]                        |
|   8.2% |  851.5ms |    8.2% |  851.5ms | `getOwnPropertyDescriptor`                  | [unknown]                        |
|   6.6% |  685.1ms |    6.6% |  685.1ms | `unevalNumber`                              | src/internal/primitive.ts:23:22  |
|   3.8% |  398.2ms |    3.8% |  398.2ms | `traverseObject`                            | src/index.ts:246:28              |
|   3.0% |  308.3ms |    3.0% |  308.3ms | `traverseObject`                            | src/index.ts:249:20              |
|   2.9% |  299.9ms |    2.9% |  299.9ms | `getType`                                   | src/internal/type.ts:18:18       |
|   2.6% |  265.9ms |    2.6% |  265.9ms | `/^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u` | [unknown]                        |
|   2.2% |  232.5ms |    2.2% |  232.5ms | `unevalNumber`                              | src/internal/primitive.ts:26:24  |
|   1.9% |  201.4ms |    1.9% |  201.4ms | `traverseObject`                            | src/index.ts:209:12              |
|   1.8% |  186.5ms |   10.0% | 1037.2ms | `traverseObject`                            | src/index.ts:220:36              |
|   1.6% |  163.3ms |    1.6% |  168.4ms | `unevalObjectLiteralKey`                    | src/internal/object.ts:407:8     |
|   1.5% |  155.2ms |    1.5% |  156.0ms | `traverse`                                  | src/index.ts:200:19              |
|   1.5% |  150.9ms |   28.5% | 2949.9ms | `unevalString`                              | src/internal/primitive.ts:135:8  |
|   1.4% |  148.5ms |   16.7% | 1732.9ms | `unevalObjectLiteralKey`                    | src/internal/object.ts:427:22    |
|   1.3% |  137.5ms |   68.7% | 7116.1ms | `uneval`                                    | src/index.ts:78:19               |
|   1.2% |  124.3ms |    3.8% |  390.1ms | `unevalObjectLiteralKey`                    | src/internal/object.ts:423:25    |
|   1.1% |  118.7ms |    1.1% |  118.7ms | `unevalBoolean`                             | src/internal/primitive.ts:11:8   |
|   1.1% |  111.2ms |    1.1% |  111.2ms | `unevalObjectLike`                          | src/internal/object.ts:143:32    |
|   1.0% |  107.2ms |    1.0% |  107.6ms | `traverseObject`                            | src/index.ts:211:29              |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to V8 JIT inlining.

##### `unevalLiteral` (src/internal/primitive.ts:149:22)

| Self % |     Self | Caller         | Location                        |
| -----: | -------: | -------------- | ------------------------------- |
| 100.0% | 2505.2ms | `unevalString` | src/internal/primitive.ts:135:8 |

##### `join` ([unknown])

| Self % |    Self | Caller                    | Location                                                                             |
| -----: | ------: | ------------------------- | ------------------------------------------------------------------------------------ |
|  63.7% | 842.5ms | `unevalObjectLike`        | src/internal/object.ts:202:55                                                        |
|  36.2% | 478.8ms | `unevalArray`             | src/internal/collection.ts:87:27                                                     |
|   0.1% |   1.7ms | `mapperWithCloneIfNeeded` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:471:29 |

##### `getOwnPropertyDescriptor` ([unknown])

| Self % |    Self | Caller           | Location            |
| -----: | ------: | ---------------- | ------------------- |
|  99.9% | 850.7ms | `traverseObject` | src/index.ts:220:36 |
|   0.1% |   0.8ms | `traverse`       | src/index.ts:200:19 |

##### `unevalNumber` (src/internal/primitive.ts:23:22)

| Self % |    Self | Caller             | Location                         |
| -----: | ------: | ------------------ | -------------------------------- |
|  99.6% | 682.1ms | `unevalInternal`   | src/internal/index.ts:51:13      |
|   0.2% |   1.6ms | `unevalObjectLike` | src/internal/object.ts:129:26    |
|   0.1% |   0.9ms | `unevalArray`      | src/internal/collection.ts:62:21 |
|   0.1% |   0.5ms | `uneval`           | src/index.ts:78:19               |

##### `traverseObject` (src/index.ts:246:28)

| Self % |    Self | Caller     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% | 398.0ms | `traverse` | src/index.ts:201:6  |
|   0.0% |   0.1ms | `traverse` | src/index.ts:202:19 |

##### `traverseObject` (src/index.ts:249:20)

| Self % |    Self | Caller     | Location            |
| -----: | ------: | ---------- | ------------------- |
|  99.8% | 307.8ms | `traverse` | src/index.ts:201:6  |
|   0.2% |   0.5ms | `traverse` | src/index.ts:202:19 |

##### `getType` (src/internal/type.ts:18:18)

| Self % |    Self | Caller           | Location            |
| -----: | ------: | ---------------- | ------------------- |
| 100.0% | 299.9ms | `traverseObject` | src/index.ts:206:23 |

##### `/^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u` ([unknown])

| Self % |    Self | Caller                   | Location                      |
| -----: | ------: | ------------------------ | ----------------------------- |
| 100.0% | 265.9ms | `unevalObjectLiteralKey` | src/internal/object.ts:423:25 |

##### `unevalNumber` (src/internal/primitive.ts:26:24)

| Self % |    Self | Caller           | Location                    |
| -----: | ------: | ---------------- | --------------------------- |
| 100.0% | 232.5ms | `unevalInternal` | src/internal/index.ts:51:13 |

##### `traverseObject` (src/index.ts:209:12)

| Self % |    Self | Caller     | Location            |
| -----: | ------: | ---------- | ------------------- |
|  98.9% | 199.2ms | `traverse` | src/index.ts:201:6  |
|   1.1% |   2.2ms | `traverse` | src/index.ts:202:19 |

##### `traverseObject` (src/index.ts:220:36)

| Self % |    Self | Caller     | Location           |
| -----: | ------: | ---------- | ------------------ |
| 100.0% | 186.5ms | `traverse` | src/index.ts:201:6 |

##### `unevalObjectLiteralKey` (src/internal/object.ts:407:8)

| Self % |    Self | Caller             | Location                     |
| -----: | ------: | ------------------ | ---------------------------- |
| 100.0% | 163.3ms | `unevalObjectLike` | src/internal/object.ts:136:8 |

##### `traverse` (src/index.ts:200:19)

| Self % |   Self | Caller           | Location            |
| -----: | -----: | ---------------- | ------------------- |
|  63.1% | 97.9ms | `createState`    | src/index.ts:328:4  |
|  20.6% | 31.9ms | `traverseObject` | src/index.ts:223:10 |
|  16.4% | 25.4ms | `traverseObject` | src/index.ts:249:10 |

##### `unevalString` (src/internal/primitive.ts:135:8)

| Self % |    Self | Caller           | Location                    |
| -----: | ------: | ---------------- | --------------------------- |
| 100.0% | 150.9ms | `unevalInternal` | src/internal/index.ts:55:13 |

##### `unevalObjectLiteralKey` (src/internal/object.ts:427:22)

| Self % |    Self | Caller             | Location                     |
| -----: | ------: | ------------------ | ---------------------------- |
| 100.0% | 148.5ms | `unevalObjectLike` | src/internal/object.ts:136:8 |

##### `uneval` (src/index.ts:78:19)

| Self % |    Self | Caller     | Location                |
| -----: | ------: | ---------- | ----------------------- |
|  96.7% | 133.0ms | `(module)` | scripts/profile.ts:17:6 |
|   3.3% |   4.5ms | `(module)` | scripts/profile.ts:10:6 |

##### `unevalObjectLiteralKey` (src/internal/object.ts:423:25)

| Self % |    Self | Caller             | Location                     |
| -----: | ------: | ------------------ | ---------------------------- |
| 100.0% | 124.3ms | `unevalObjectLike` | src/internal/object.ts:136:8 |

##### `unevalBoolean` (src/internal/primitive.ts:11:8)

| Self % |    Self | Caller           | Location                    |
| -----: | ------: | ---------------- | --------------------------- |
| 100.0% | 118.7ms | `unevalInternal` | src/internal/index.ts:49:13 |

##### `unevalObjectLike` (src/internal/object.ts:143:32)

| Self % |   Self | Caller             | Location                         |
| -----: | -----: | ------------------ | -------------------------------- |
|  42.3% | 47.0ms | `uneval`           | src/index.ts:78:19               |
|  29.3% | 32.6ms | `unevalObjectLike` | src/internal/object.ts:129:26    |
|  28.4% | 31.6ms | `unevalArray`      | src/internal/collection.ts:62:21 |

##### `traverseObject` (src/index.ts:211:29)

| Self % |    Self | Caller     | Location           |
| -----: | ------: | ---------- | ------------------ |
| 100.0% | 107.2ms | `traverse` | src/index.ts:201:6 |

### Total time

Functions ranked by total time in the function and all its callees.

| Total % |     Total | Self % |     Self | Function                   | Location                         |
| ------: | --------: | -----: | -------: | -------------------------- | -------------------------------- |
|   99.6% | 10316.9ms |   0.0% |    0.0ms | `loadAndEvaluateModule`    | [unknown]                        |
|   99.5% | 10310.3ms |   0.0% |    0.0ms | `moduleEvaluation`         | [unknown]                        |
|   99.5% | 10310.3ms |   0.0% |    1.1ms | `evaluate`                 | [unknown]                        |
|   94.5% |  9790.0ms |   0.1% |    9.2ms | `(module)`                 | scripts/profile.ts:17:6          |
|   68.7% |  7116.1ms |   1.3% |  137.5ms | `uneval`                   | src/index.ts:78:19               |
|   29.5% |  3052.7ms |   0.2% |   22.6ms | `uneval`                   | src/index.ts:77:18               |
|   28.5% |  2949.9ms |   1.5% |  150.9ms | `unevalString`             | src/internal/primitive.ts:135:8  |
|   28.5% |  2949.4ms |   0.0% |    0.0ms | `unevalInternal`           | src/internal/index.ts:55:13      |
|   28.2% |  2923.2ms |   0.7% |   77.0ms | `unevalArray`              | src/internal/collection.ts:62:21 |
|   27.9% |  2888.5ms |   0.3% |   31.7ms | `unevalObjectLike`         | src/internal/object.ts:129:26    |
|   27.6% |  2863.8ms |   0.3% |   26.5ms | `createState`              | src/index.ts:328:4               |
|   26.0% |  2696.3ms |   0.6% |   61.9ms | `traverse`                 | src/index.ts:201:6               |
|   25.0% |  2586.0ms |   0.1% |    5.4ms | `unevalObjectLike`         | src/internal/object.ts:136:8     |
|   24.2% |  2505.2ms |  24.2% | 2505.2ms | `unevalLiteral`            | src/internal/primitive.ts:149:22 |
|   16.7% |  1732.9ms |   1.4% |  148.5ms | `unevalObjectLiteralKey`   | src/internal/object.ts:427:22    |
|   12.8% |  1323.0ms |  12.8% | 1323.0ms | `join`                     | [unknown]                        |
|   10.1% |  1043.1ms |   0.0% |    0.0ms | `unevalInternal`           | src/internal/index.ts:51:13      |
|   10.0% |  1037.2ms |   1.8% |  186.5ms | `traverseObject`           | src/index.ts:220:36              |
|    8.4% |   874.7ms |   0.3% |   32.3ms | `unevalObjectLike`         | src/internal/object.ts:202:55    |
|    8.2% |   851.5ms |   8.2% |  851.5ms | `getOwnPropertyDescriptor` | [unknown]                        |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to V8 JIT inlining.

##### `loadAndEvaluateModule` ([unknown])

| Total % |     Total | Callee                  | Location  |
| ------: | --------: | ----------------------- | --------- |
|   99.9% | 10310.3ms | `moduleEvaluation`      | [unknown] |
|    0.0% |     4.7ms | `linkAndEvaluateModule` | [unknown] |
|    0.0% |     1.8ms | `loadModule`            | [unknown] |
|    0.0% |     0.2ms | `resolve`               | [unknown] |

##### `moduleEvaluation` ([unknown])

| Total % |     Total | Callee             | Location  |
| ------: | --------: | ------------------ | --------- |
|  100.0% | 10310.3ms | `evaluate`         | [unknown] |
|  100.0% | 10310.2ms | `moduleEvaluation` | [unknown] |

##### `evaluate` ([unknown])

| Total % |    Total | Callee     | Location                 |
| ------: | -------: | ---------- | ------------------------ |
|   95.0% | 9790.0ms | `(module)` | scripts/profile.ts:17:6  |
|    3.8% |  387.2ms | `(module)` | scripts/profile.ts:10:6  |
|    0.9% |   97.6ms | `(module)` | scripts/profile.ts:5:20  |
|    0.3% |   29.4ms | `(module)` | scripts/profile.ts:16:15 |
|    0.0% |    3.1ms | `(module)` | scripts/profile.ts:5:30  |

##### `(module)` (scripts/profile.ts:17:6)

| Total % |    Total | Callee   | Location           |
| ------: | -------: | -------- | ------------------ |
|   69.9% | 6847.5ms | `uneval` | src/index.ts:78:19 |
|   30.0% | 2933.3ms | `uneval` | src/index.ts:77:18 |

##### `uneval` (src/index.ts:78:19)

| Total % |    Total | Callee             | Location                         |
| ------: | -------: | ------------------ | -------------------------------- |
|   33.5% | 2383.1ms | `unevalObjectLike` | src/internal/object.ts:129:26    |
|   32.4% | 2307.7ms | `unevalArray`      | src/internal/collection.ts:62:21 |
|   17.1% | 1214.0ms | `unevalObjectLike` | src/internal/object.ts:136:8     |
|    6.0% |  427.4ms | `unevalObjectLike` | src/internal/object.ts:202:55    |
|    3.7% |  260.4ms | `unevalArray`      | src/internal/collection.ts:87:27 |

##### `uneval` (src/index.ts:77:18)

| Total % |    Total | Callee        | Location            |
| ------: | -------: | ------------- | ------------------- |
|   93.8% | 2863.8ms | `createState` | src/index.ts:328:4  |
|    1.9% |   56.5ms | `createState` | src/index.ts:149:10 |
|    1.2% |   36.2ms | `createState` | src/index.ts:333:23 |
|    0.4% |   13.0ms | `createState` | src/index.ts:165:10 |
|    0.4% |   12.3ms | `createState` | src/index.ts:163:25 |

##### `unevalString` (src/internal/primitive.ts:135:8)

| Total % |    Total | Callee          | Location                         |
| ------: | -------: | --------------- | -------------------------------- |
|   84.9% | 2505.2ms | `unevalLiteral` | src/internal/primitive.ts:149:22 |
|    3.2% |   95.0ms | `unevalLiteral` | src/internal/primitive.ts:200:22 |
|    2.5% |   74.9ms | `unevalLiteral` | src/internal/primitive.ts:148:23 |
|    1.9% |   56.2ms | `unevalLiteral` | src/internal/primitive.ts:151:18 |
|    1.7% |   50.8ms | `unevalLiteral` | src/internal/primitive.ts:151:26 |

##### `unevalInternal` (src/internal/index.ts:55:13)

| Total % |    Total | Callee         | Location                        |
| ------: | -------: | -------------- | ------------------------------- |
|  100.0% | 2949.4ms | `unevalString` | src/internal/primitive.ts:135:8 |

##### `unevalArray` (src/internal/collection.ts:62:21)

| Total % |   Total | Callee             | Location                         |
| ------: | ------: | ------------------ | -------------------------------- |
|   23.9% | 697.8ms | `unevalObjectLike` | src/internal/object.ts:136:8     |
|   19.6% | 572.7ms | `unevalObjectLike` | src/internal/object.ts:129:26    |
|   18.3% | 536.2ms | `unevalInternal`   | src/internal/index.ts:51:13      |
|   18.1% | 530.5ms | `unevalInternal`   | src/internal/index.ts:55:13      |
|   18.1% | 529.4ms | `unevalArray`      | src/internal/collection.ts:62:21 |

##### `unevalObjectLike` (src/internal/object.ts:129:26)

| Total % |   Total | Callee             | Location                         |
| ------: | ------: | ------------------ | -------------------------------- |
|   23.4% | 676.7ms | `unevalArray`      | src/internal/collection.ts:62:21 |
|   23.3% | 674.2ms | `unevalObjectLike` | src/internal/object.ts:136:8     |
|   20.3% | 586.1ms | `unevalInternal`   | src/internal/index.ts:55:13      |
|   17.1% | 494.9ms | `unevalObjectLike` | src/internal/object.ts:129:26    |
|   14.7% | 423.5ms | `unevalInternal`   | src/internal/index.ts:51:13      |

##### `createState` (src/index.ts:328:4)

| Total % |    Total | Callee     | Location            |
| ------: | -------: | ---------- | ------------------- |
|   94.2% | 2696.3ms | `traverse` | src/index.ts:201:6  |
|    3.4% |   97.9ms | `traverse` | src/index.ts:200:19 |
|    1.5% |   42.8ms | `traverse` | src/index.ts:202:19 |
|    0.0% |    0.3ms | `traverse` | src/index.ts:185:36 |

##### `traverse` (src/index.ts:201:6)

| Total % |    Total | Callee           | Location            |
| ------: | -------: | ---------------- | ------------------- |
|   38.3% | 1033.5ms | `traverseObject` | src/index.ts:220:36 |
|   28.5% |  769.6ms | `traverseObject` | src/index.ts:223:10 |
|   28.5% |  769.4ms | `traverseObject` | src/index.ts:249:10 |
|   17.3% |  466.9ms | `traverseObject` | src/index.ts:206:23 |
|   14.8% |  398.0ms | `traverseObject` | src/index.ts:246:28 |

##### `unevalObjectLike` (src/internal/object.ts:136:8)

| Total % |    Total | Callee                   | Location                      |
| ------: | -------: | ------------------------ | ----------------------------- |
|   67.0% | 1732.9ms | `unevalObjectLiteralKey` | src/internal/object.ts:427:22 |
|   15.1% |  390.1ms | `unevalObjectLiteralKey` | src/internal/object.ts:423:25 |
|    8.9% |  230.3ms | `unevalObjectLiteralKey` | src/internal/object.ts:419:38 |
|    6.5% |  168.4ms | `unevalObjectLiteralKey` | src/internal/object.ts:407:8  |
|    1.6% |   42.3ms | `unevalObjectLiteralKey` | src/internal/object.ts:408:21 |

##### `unevalObjectLiteralKey` (src/internal/object.ts:427:22)

| Total % |    Total | Callee           | Location                    |
| ------: | -------: | ---------------- | --------------------------- |
|   89.4% | 1548.3ms | `unevalInternal` | src/internal/index.ts:55:13 |
|    1.5% |   26.8ms | `unevalInternal` | src/internal/index.ts:51:13 |
|    0.3% |    5.5ms | `unevalInternal` | src/internal/index.ts:49:13 |
|    0.1% |    2.1ms | `unevalInternal` | src/internal/index.ts:33:8  |
|    0.0% |    0.8ms | `unevalInternal` | src/internal/index.ts:59:38 |

##### `unevalInternal` (src/internal/index.ts:51:13)

| Total % |   Total | Callee         | Location                        |
| ------: | ------: | -------------- | ------------------------------- |
|   65.4% | 682.1ms | `unevalNumber` | src/internal/primitive.ts:23:22 |
|   22.3% | 232.5ms | `unevalNumber` | src/internal/primitive.ts:26:24 |
|    4.4% |  45.4ms | `unevalNumber` | src/internal/primitive.ts:16:15 |
|    3.4% |  35.1ms | `unevalNumber` | src/internal/primitive.ts:14:8  |
|    3.3% |  34.2ms | `unevalNumber` | src/internal/primitive.ts:18:22 |

##### `traverseObject` (src/index.ts:220:36)

| Total % |   Total | Callee                     | Location  |
| ------: | ------: | -------------------------- | --------- |
|   82.0% | 850.7ms | `getOwnPropertyDescriptor` | [unknown] |

##### `unevalObjectLike` (src/internal/object.ts:202:55)

| Total % |   Total | Callee | Location  |
| ------: | ------: | ------ | --------- |
|   96.3% | 842.5ms | `join` | [unknown] |

## Hottest call stacks

Call stacks ranked by time spent in their top frame.

Common call stack: `(module)` (scripts/profile.ts:17:6) ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule`

| Self % |    Self | Call stack                                                                                                                                                                                                                                                                                              |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   5.8% | 597.1ms | `unevalLiteral` (src/internal/primitive.ts:149:22) ← `unevalString` (135:8) ← `unevalInternal` (src/internal/index.ts:55:13) ← `unevalObjectLiteralKey` (src/internal/object.ts:427:22) ← `unevalObjectLike` (136:8) ← `uneval` (src/index.ts:78:19)                                                    |
|   3.9% | 406.6ms | `getOwnPropertyDescriptor` ← `traverseObject` (src/index.ts:220:36) ← `traverse` (201:6) ← `createState` (328:4) ← `uneval` (77:18)                                                                                                                                                                     |
|   3.8% | 397.3ms | `join` ← `unevalObjectLike` (src/internal/object.ts:202:55) ← `uneval` (src/index.ts:78:19)                                                                                                                                                                                                             |
|   2.5% | 255.2ms | `unevalLiteral` (src/internal/primitive.ts:149:22) ← `unevalString` (135:8) ← `unevalInternal` (src/internal/index.ts:55:13) ← `unevalObjectLiteralKey` (src/internal/object.ts:427:22) ← `unevalObjectLike` (136:8) ← `unevalObjectLike` (129:26) ← `uneval` (src/index.ts:78:19)                      |
|   2.3% | 237.0ms | `unevalLiteral` (src/internal/primitive.ts:149:22) ← `unevalString` (135:8) ← `unevalInternal` (src/internal/index.ts:55:13) ← `unevalObjectLiteralKey` (src/internal/object.ts:427:22) ← `unevalObjectLike` (136:8) ← `unevalArray` (src/internal/collection.ts:62:21) ← `uneval` (src/index.ts:78:19) |
|   2.2% | 230.9ms | `join` ← `unevalArray` (src/internal/collection.ts:87:27) ← `uneval` (src/index.ts:78:19)                                                                                                                                                                                                               |
|   2.0% | 208.0ms | `unevalLiteral` (src/internal/primitive.ts:149:22) ← `unevalString` (135:8) ← `unevalInternal` (src/internal/index.ts:55:13) ← `unevalObjectLike` (src/internal/object.ts:129:26) ← `uneval` (src/index.ts:78:19)                                                                                       |
|   1.9% | 193.7ms | `unevalLiteral` (src/internal/primitive.ts:149:22) ← `unevalString` (135:8) ← `unevalInternal` (src/internal/index.ts:55:13) ← `unevalArray` (src/internal/collection.ts:62:21) ← `uneval` (src/index.ts:78:19)                                                                                         |
|   1.8% | 190.8ms | `traverseObject` (src/index.ts:246:28) ← `traverse` (201:6) ← `createState` (328:4) ← `uneval` (77:18)                                                                                                                                                                                                  |
|   1.5% | 156.8ms | `getOwnPropertyDescriptor` ← `traverseObject` (src/index.ts:220:36) ← `traverse` (201:6) ← `traverseObject` (223:10) ← `traverse` (201:6) ← `createState` (328:4) ← `uneval` (77:18)                                                                                                                    |
|   1.5% | 156.8ms | `join` ← `unevalObjectLike` (src/internal/object.ts:202:55) ← `unevalArray` (src/internal/collection.ts:62:21) ← `uneval` (src/index.ts:78:19)                                                                                                                                                          |
|   1.5% | 154.5ms | `join` ← `unevalObjectLike` (src/internal/object.ts:202:55) ← `unevalObjectLike` (129:26) ← `uneval` (src/index.ts:78:19)                                                                                                                                                                               |
|   1.5% | 153.3ms | `getOwnPropertyDescriptor` ← `traverseObject` (src/index.ts:220:36) ← `traverse` (201:6) ← `traverseObject` (249:10) ← `traverse` (201:6) ← `createState` (328:4) ← `uneval` (77:18)                                                                                                                    |
|   1.4% | 147.3ms | `getType` (src/internal/type.ts:18:18) ← `traverseObject` (src/index.ts:206:23) ← `traverse` (201:6) ← `createState` (328:4) ← `uneval` (77:18)                                                                                                                                                         |
|   1.4% | 140.2ms | `traverseObject` (src/index.ts:249:20) ← `traverse` (201:6) ← `createState` (328:4) ← `uneval` (77:18)                                                                                                                                                                                                  |
|   1.3% | 138.6ms | `unevalNumber` (src/internal/primitive.ts:23:22) ← `unevalInternal` (src/internal/index.ts:51:13) ← `unevalArray` (src/internal/collection.ts:62:21) ← `uneval` (src/index.ts:78:19)                                                                                                                    |
|   1.3% | 135.9ms | `unevalNumber` (src/internal/primitive.ts:23:22) ← `unevalInternal` (src/internal/index.ts:51:13) ← `unevalObjectLike` (src/internal/object.ts:129:26) ← `uneval` (src/index.ts:78:19)                                                                                                                  |
|   1.3% | 133.0ms | `uneval` (src/index.ts:78:19)                                                                                                                                                                                                                                                                           |
|   1.2% | 126.6ms | `traverseObject` (src/index.ts:209:12) ← `traverse` (201:6) ← `createState` (328:4) ← `uneval` (77:18)                                                                                                                                                                                                  |
|   1.1% | 117.5ms | `/^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u` ← `unevalObjectLiteralKey` (src/internal/object.ts:423:25) ← `unevalObjectLike` (136:8) ← `uneval` (src/index.ts:78:19)                                                                                                                                     |

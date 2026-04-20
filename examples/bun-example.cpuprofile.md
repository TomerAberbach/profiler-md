# CPU profile

Took 10.33s over 64,273 samples (160.0µs per sample).

| Category    |     % |   Time | Samples |
| ----------- | ----: | -----: | ------: |
| ours        | 74.5% |  7.70s |  47,848 |
| native      | 24.7% |  2.55s |  15,937 |
| third-party |  0.8% | 85.5ms |     488 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                    | Location                                |
| ----: | ------: | ------: | ------------------------------------------- | --------------------------------------- |
| 24.2% |   2.50s |  15,687 | `unevalLiteral`                             | uneval/src/internal/primitive.ts:149:22 |
| 12.8% |   1.32s |   8,273 | `join`                                      | `<native>`                              |
|  8.2% | 851.5ms |   5,313 | `getOwnPropertyDescriptor`                  | `<native>`                              |
|  6.6% | 685.1ms |   4,284 | `unevalNumber`                              | uneval/src/internal/primitive.ts:23:22  |
|  3.9% | 398.2ms |   2,487 | `traverseObject`                            | uneval/src/index.ts:246:28              |
|  3.0% | 308.3ms |   1,932 | `traverseObject`                            | uneval/src/index.ts:249:20              |
|  2.9% | 299.9ms |   1,873 | `getType`                                   | uneval/src/internal/type.ts:18:18       |
|  2.6% | 265.9ms |   1,675 | `/^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u` | `<native>`                              |
|  2.2% | 232.5ms |   1,456 | `unevalNumber`                              | uneval/src/internal/primitive.ts:26:24  |
|  1.9% | 201.4ms |   1,223 | `traverseObject`                            | uneval/src/index.ts:209:12              |
|  1.8% | 186.5ms |   1,167 | `traverseObject`                            | uneval/src/index.ts:220:36              |
|  1.6% | 163.3ms |   1,022 | `unevalObjectLiteralKey`                    | uneval/src/internal/object.ts:407:8     |
|  1.5% | 155.2ms |     925 | `traverse`                                  | uneval/src/index.ts:200:19              |
|  1.5% | 150.9ms |     923 | `unevalString`                              | uneval/src/internal/primitive.ts:135:8  |
|  1.4% | 148.5ms |     929 | `unevalObjectLiteralKey`                    | uneval/src/internal/object.ts:427:22    |
|  1.3% | 137.5ms |     865 | `uneval`                                    | uneval/src/index.ts:78:19               |
|  1.2% | 124.3ms |     772 | `unevalObjectLiteralKey`                    | uneval/src/internal/object.ts:423:25    |
|  1.1% | 118.7ms |     742 | `unevalBoolean`                             | uneval/src/internal/primitive.ts:11:8   |
|  1.1% | 111.2ms |     682 | `unevalObjectLike`                          | uneval/src/internal/object.ts:143:32    |
|  1.0% | 107.2ms |     660 | `traverseObject`                            | uneval/src/index.ts:211:29              |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `unevalLiteral` (uneval/src/internal/primitive.ts:149:22)

|      % |  Time | Samples | Caller         | Location                               |
| -----: | ----: | ------: | -------------- | -------------------------------------- |
| 100.0% | 2.50s |  15,687 | `unevalString` | uneval/src/internal/primitive.ts:135:8 |

##### `join` (`<native>`)

|     % |    Time | Samples | Caller                    | Location                                                                                    |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------- |
| 63.7% | 842.5ms |   5,269 | `unevalObjectLike`        | uneval/src/internal/object.ts:202:55                                                        |
| 36.2% | 478.8ms |   2,993 | `unevalArray`             | uneval/src/internal/collection.ts:87:27                                                     |
|  0.1% |   1.7ms |      11 | `mapperWithCloneIfNeeded` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:471:29 |

##### `getOwnPropertyDescriptor` (`<native>`)

|     % |    Time | Samples | Caller           | Location                   |
| ----: | ------: | ------: | ---------------- | -------------------------- |
| 99.9% | 850.7ms |   5,308 | `traverseObject` | uneval/src/index.ts:220:36 |
|  0.1% |   0.8ms |       5 | `traverse`       | uneval/src/index.ts:200:19 |

##### `unevalNumber` (uneval/src/internal/primitive.ts:23:22)

|     % |    Time | Samples | Caller             | Location                                |
| ----: | ------: | ------: | ------------------ | --------------------------------------- |
| 99.6% | 682.1ms |   4,266 | `unevalInternal`   | uneval/src/internal/index.ts:51:13      |
|  0.2% |   1.6ms |       9 | `unevalObjectLike` | uneval/src/internal/object.ts:129:26    |
|  0.1% |   0.9ms |       6 | `unevalArray`      | uneval/src/internal/collection.ts:62:21 |
|  0.1% |   0.5ms |       3 | `uneval`           | uneval/src/index.ts:78:19               |

##### `traverseObject` (uneval/src/index.ts:246:28)

|      % |    Time | Samples | Caller     | Location                   |
| -----: | ------: | ------: | ---------- | -------------------------- |
| 100.0% | 398.0ms |   2,486 | `traverse` | uneval/src/index.ts:201:6  |
|   0.0% |   0.1ms |       1 | `traverse` | uneval/src/index.ts:202:19 |

##### `traverseObject` (uneval/src/index.ts:249:20)

|     % |    Time | Samples | Caller     | Location                   |
| ----: | ------: | ------: | ---------- | -------------------------- |
| 99.8% | 307.8ms |   1,929 | `traverse` | uneval/src/index.ts:201:6  |
|  0.2% |   0.5ms |       3 | `traverse` | uneval/src/index.ts:202:19 |

##### `getType` (uneval/src/internal/type.ts:18:18)

|      % |    Time | Samples | Caller           | Location                   |
| -----: | ------: | ------: | ---------------- | -------------------------- |
| 100.0% | 299.9ms |   1,873 | `traverseObject` | uneval/src/index.ts:206:23 |

##### `/^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u` (`<native>`)

|      % |    Time | Samples | Caller                   | Location                             |
| -----: | ------: | ------: | ------------------------ | ------------------------------------ |
| 100.0% | 265.9ms |   1,675 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:423:25 |

##### `unevalNumber` (uneval/src/internal/primitive.ts:26:24)

|      % |    Time | Samples | Caller           | Location                           |
| -----: | ------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 232.5ms |   1,456 | `unevalInternal` | uneval/src/internal/index.ts:51:13 |

##### `traverseObject` (uneval/src/index.ts:209:12)

|     % |    Time | Samples | Caller     | Location                   |
| ----: | ------: | ------: | ---------- | -------------------------- |
| 98.9% | 199.2ms |   1,210 | `traverse` | uneval/src/index.ts:201:6  |
|  1.1% |   2.2ms |      13 | `traverse` | uneval/src/index.ts:202:19 |

##### `traverseObject` (uneval/src/index.ts:220:36)

|      % |    Time | Samples | Caller     | Location                  |
| -----: | ------: | ------: | ---------- | ------------------------- |
| 100.0% | 186.5ms |   1,167 | `traverse` | uneval/src/index.ts:201:6 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:407:8)

|      % |    Time | Samples | Caller             | Location                            |
| -----: | ------: | ------: | ------------------ | ----------------------------------- |
| 100.0% | 163.3ms |   1,022 | `unevalObjectLike` | uneval/src/internal/object.ts:136:8 |

##### `traverse` (uneval/src/index.ts:200:19)

|     % |   Time | Samples | Caller           | Location                   |
| ----: | -----: | ------: | ---------------- | -------------------------- |
| 63.1% | 97.9ms |     570 | `createState`    | uneval/src/index.ts:328:4  |
| 20.6% | 31.9ms |     198 | `traverseObject` | uneval/src/index.ts:223:10 |
| 16.4% | 25.4ms |     157 | `traverseObject` | uneval/src/index.ts:249:10 |

##### `unevalString` (uneval/src/internal/primitive.ts:135:8)

|      % |    Time | Samples | Caller           | Location                           |
| -----: | ------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 150.9ms |     923 | `unevalInternal` | uneval/src/internal/index.ts:55:13 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:427:22)

|      % |    Time | Samples | Caller             | Location                            |
| -----: | ------: | ------: | ------------------ | ----------------------------------- |
| 100.0% | 148.5ms |     929 | `unevalObjectLike` | uneval/src/internal/object.ts:136:8 |

##### `uneval` (uneval/src/index.ts:78:19)

|     % |    Time | Samples | Caller     | Location                       |
| ----: | ------: | ------: | ---------- | ------------------------------ |
| 96.7% | 133.0ms |     837 | `(module)` | uneval/scripts/profile.ts:17:6 |
|  3.3% |   4.5ms |      28 | `(module)` | uneval/scripts/profile.ts:10:6 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:423:25)

|      % |    Time | Samples | Caller             | Location                            |
| -----: | ------: | ------: | ------------------ | ----------------------------------- |
| 100.0% | 124.3ms |     772 | `unevalObjectLike` | uneval/src/internal/object.ts:136:8 |

##### `unevalBoolean` (uneval/src/internal/primitive.ts:11:8)

|      % |    Time | Samples | Caller           | Location                           |
| -----: | ------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 118.7ms |     742 | `unevalInternal` | uneval/src/internal/index.ts:49:13 |

##### `unevalObjectLike` (uneval/src/internal/object.ts:143:32)

|     % |   Time | Samples | Caller             | Location                                |
| ----: | -----: | ------: | ------------------ | --------------------------------------- |
| 42.3% | 47.0ms |     290 | `uneval`           | uneval/src/index.ts:78:19               |
| 29.3% | 32.6ms |     202 | `unevalObjectLike` | uneval/src/internal/object.ts:129:26    |
| 28.4% | 31.6ms |     190 | `unevalArray`      | uneval/src/internal/collection.ts:62:21 |

##### `traverseObject` (uneval/src/index.ts:211:29)

|      % |    Time | Samples | Caller     | Location                  |
| -----: | ------: | ------: | ---------- | ------------------------- |
| 100.0% | 107.2ms |     660 | `traverse` | uneval/src/index.ts:201:6 |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                   | Location                                |
| ----: | ------: | ------: | -------------------------- | --------------------------------------- |
| 99.8% |  10.31s |  64,147 | `loadAndEvaluateModule`    | `<native>`                              |
| 99.7% |  10.31s |  64,102 | `evaluate`                 | `<native>`                              |
| 99.7% |  10.31s |  64,102 | `moduleEvaluation`         | `<native>`                              |
| 94.7% |   9.78s |  60,901 | `(module)`                 | uneval/scripts/profile.ts:17:6          |
| 68.8% |   7.11s |  44,408 | `uneval`                   | uneval/src/index.ts:78:19               |
| 29.5% |   3.05s |  18,857 | `uneval`                   | uneval/src/index.ts:77:18               |
| 28.5% |   2.94s |  18,445 | `unevalString`             | uneval/src/internal/primitive.ts:135:8  |
| 28.5% |   2.94s |  18,442 | `unevalInternal`           | uneval/src/internal/index.ts:55:13      |
| 28.3% |   2.92s |  18,244 | `unevalArray`              | uneval/src/internal/collection.ts:62:21 |
| 27.9% |   2.88s |  18,046 | `unevalObjectLike`         | uneval/src/internal/object.ts:129:26    |
| 27.7% |   2.86s |  17,773 | `createState`              | uneval/src/index.ts:328:4               |
| 26.1% |   2.69s |  16,789 | `traverse`                 | uneval/src/index.ts:201:6               |
| 25.0% |   2.58s |  16,166 | `unevalObjectLike`         | uneval/src/internal/object.ts:136:8     |
| 24.2% |   2.50s |  15,687 | `unevalLiteral`            | uneval/src/internal/primitive.ts:149:22 |
| 16.8% |   1.73s |  10,837 | `unevalObjectLiteralKey`   | uneval/src/internal/object.ts:427:22    |
| 12.8% |   1.32s |   8,273 | `join`                     | `<native>`                              |
| 10.1% |   1.04s |   6,521 | `unevalInternal`           | uneval/src/internal/index.ts:51:13      |
| 10.0% |   1.03s |   6,475 | `traverseObject`           | uneval/src/index.ts:220:36              |
|  8.5% | 874.7ms |   5,467 | `unevalObjectLike`         | uneval/src/internal/object.ts:202:55    |
|  8.2% | 851.5ms |   5,313 | `getOwnPropertyDescriptor` | `<native>`                              |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `loadAndEvaluateModule` (`<native>`)

|     % |   Time | Samples | Callee                  | Location   |
| ----: | -----: | ------: | ----------------------- | ---------- |
| 99.9% | 10.31s |  64,102 | `moduleEvaluation`      | `<native>` |
|  0.0% |  4.7ms |      33 | `linkAndEvaluateModule` | `<native>` |
|  0.0% |  1.8ms |      11 | `loadModule`            | `<native>` |
|  0.0% |  0.2ms |       1 | `resolve`               | `<native>` |

##### `evaluate` (`<native>`)

|     % |    Time | Samples | Callee     | Location                        |
| ----: | ------: | ------: | ---------- | ------------------------------- |
| 95.0% |   9.78s |  60,901 | `(module)` | uneval/scripts/profile.ts:17:6  |
|  3.8% | 387.2ms |   2,416 | `(module)` | uneval/scripts/profile.ts:10:6  |
|  0.9% |  97.6ms |     555 | `(module)` | uneval/scripts/profile.ts:5:20  |
|  0.3% |  29.4ms |     187 | `(module)` | uneval/scripts/profile.ts:16:15 |
|  0.0% |   3.1ms |      22 | `(module)` | uneval/scripts/profile.ts:5:30  |

##### `moduleEvaluation` (`<native>`)

|      % |   Time | Samples | Callee             | Location   |
| -----: | -----: | ------: | ------------------ | ---------- |
| 100.0% | 10.31s |  64,102 | `evaluate`         | `<native>` |
| 100.0% | 10.31s |  64,101 | `moduleEvaluation` | `<native>` |

##### `(module)` (uneval/scripts/profile.ts:17:6)

|     % |  Time | Samples | Callee   | Location                  |
| ----: | ----: | ------: | -------- | ------------------------- |
| 69.9% | 6.84s |  42,727 | `uneval` | uneval/src/index.ts:78:19 |
| 30.0% | 2.93s |  18,117 | `uneval` | uneval/src/index.ts:77:18 |

##### `uneval` (uneval/src/index.ts:78:19)

|     % |    Time | Samples | Callee             | Location                                |
| ----: | ------: | ------: | ------------------ | --------------------------------------- |
| 33.5% |   2.38s |  14,883 | `unevalObjectLike` | uneval/src/internal/object.ts:129:26    |
| 32.4% |   2.30s |  14,403 | `unevalArray`      | uneval/src/internal/collection.ts:62:21 |
| 17.1% |   1.21s |   7,577 | `unevalObjectLike` | uneval/src/internal/object.ts:136:8     |
|  6.0% | 427.4ms |   2,669 | `unevalObjectLike` | uneval/src/internal/object.ts:202:55    |
|  3.7% | 260.4ms |   1,635 | `unevalArray`      | uneval/src/internal/collection.ts:87:27 |

##### `uneval` (uneval/src/index.ts:77:18)

|     % |   Time | Samples | Callee        | Location                   |
| ----: | -----: | ------: | ------------- | -------------------------- |
| 93.8% |  2.86s |  17,773 | `createState` | uneval/src/index.ts:328:4  |
|  1.9% | 56.5ms |     318 | `createState` | uneval/src/index.ts:149:10 |
|  1.2% | 36.2ms |     214 | `createState` | uneval/src/index.ts:333:23 |
|  0.4% | 13.0ms |      71 | `createState` | uneval/src/index.ts:165:10 |
|  0.4% | 12.3ms |      75 | `createState` | uneval/src/index.ts:163:25 |

##### `unevalString` (uneval/src/internal/primitive.ts:135:8)

|     % |   Time | Samples | Callee          | Location                                |
| ----: | -----: | ------: | --------------- | --------------------------------------- |
| 84.9% |  2.50s |  15,687 | `unevalLiteral` | uneval/src/internal/primitive.ts:149:22 |
|  3.2% | 95.0ms |     597 | `unevalLiteral` | uneval/src/internal/primitive.ts:200:22 |
|  2.5% | 74.9ms |     469 | `unevalLiteral` | uneval/src/internal/primitive.ts:148:23 |
|  1.9% | 56.2ms |     350 | `unevalLiteral` | uneval/src/internal/primitive.ts:151:18 |
|  1.7% | 50.8ms |     313 | `unevalLiteral` | uneval/src/internal/primitive.ts:151:26 |

##### `unevalInternal` (uneval/src/internal/index.ts:55:13)

|      % |  Time | Samples | Callee         | Location                               |
| -----: | ----: | ------: | -------------- | -------------------------------------- |
| 100.0% | 2.94s |  18,442 | `unevalString` | uneval/src/internal/primitive.ts:135:8 |

##### `unevalArray` (uneval/src/internal/collection.ts:62:21)

|     % |    Time | Samples | Callee             | Location                                |
| ----: | ------: | ------: | ------------------ | --------------------------------------- |
| 23.9% | 697.8ms |   4,363 | `unevalObjectLike` | uneval/src/internal/object.ts:136:8     |
| 19.6% | 572.7ms |   3,581 | `unevalObjectLike` | uneval/src/internal/object.ts:129:26    |
| 18.3% | 536.2ms |   3,355 | `unevalInternal`   | uneval/src/internal/index.ts:51:13      |
| 18.1% | 530.5ms |   3,314 | `unevalInternal`   | uneval/src/internal/index.ts:55:13      |
| 18.1% | 529.4ms |   3,310 | `unevalArray`      | uneval/src/internal/collection.ts:62:21 |

##### `unevalObjectLike` (uneval/src/internal/object.ts:129:26)

|     % |    Time | Samples | Callee             | Location                                |
| ----: | ------: | ------: | ------------------ | --------------------------------------- |
| 23.4% | 676.7ms |   4,228 | `unevalArray`      | uneval/src/internal/collection.ts:62:21 |
| 23.3% | 674.2ms |   4,226 | `unevalObjectLike` | uneval/src/internal/object.ts:136:8     |
| 20.3% | 586.1ms |   3,662 | `unevalInternal`   | uneval/src/internal/index.ts:55:13      |
| 17.1% | 494.9ms |   3,089 | `unevalObjectLike` | uneval/src/internal/object.ts:129:26    |
| 14.7% | 423.5ms |   2,646 | `unevalInternal`   | uneval/src/internal/index.ts:51:13      |

##### `createState` (uneval/src/index.ts:328:4)

|     % |   Time | Samples | Callee     | Location                   |
| ----: | -----: | ------: | ---------- | -------------------------- |
| 94.2% |  2.69s |  16,789 | `traverse` | uneval/src/index.ts:201:6  |
|  3.4% | 97.9ms |     570 | `traverse` | uneval/src/index.ts:200:19 |
|  1.5% | 42.8ms |     266 | `traverse` | uneval/src/index.ts:202:19 |
|  0.0% |  0.3ms |       2 | `traverse` | uneval/src/index.ts:185:36 |

##### `traverse` (uneval/src/index.ts:201:6)

|     % |    Time | Samples | Callee           | Location                   |
| ----: | ------: | ------: | ---------------- | -------------------------- |
| 38.3% |   1.03s |   6,451 | `traverseObject` | uneval/src/index.ts:220:36 |
| 28.5% | 769.6ms |   4,807 | `traverseObject` | uneval/src/index.ts:223:10 |
| 28.5% | 769.4ms |   4,808 | `traverseObject` | uneval/src/index.ts:249:10 |
| 17.3% | 466.9ms |   2,911 | `traverseObject` | uneval/src/index.ts:206:23 |
| 14.8% | 398.0ms |   2,486 | `traverseObject` | uneval/src/index.ts:246:28 |

##### `unevalObjectLike` (uneval/src/internal/object.ts:136:8)

|     % |    Time | Samples | Callee                   | Location                             |
| ----: | ------: | ------: | ------------------------ | ------------------------------------ |
| 67.0% |   1.73s |  10,837 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:427:22 |
| 15.1% | 390.1ms |   2,447 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:423:25 |
|  8.9% | 230.3ms |   1,444 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:419:38 |
|  6.5% | 168.4ms |   1,055 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:407:8  |
|  1.6% |  42.3ms |     254 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:408:21 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:427:22)

|     % |   Time | Samples | Callee           | Location                           |
| ----: | -----: | ------: | ---------------- | ---------------------------------- |
| 89.4% |  1.54s |   9,683 | `unevalInternal` | uneval/src/internal/index.ts:55:13 |
|  1.5% | 26.8ms |     167 | `unevalInternal` | uneval/src/internal/index.ts:51:13 |
|  0.3% |  5.5ms |      34 | `unevalInternal` | uneval/src/internal/index.ts:49:13 |
|  0.1% |  2.1ms |      13 | `unevalInternal` | uneval/src/internal/index.ts:33:8  |
|  0.0% |  0.8ms |       5 | `unevalInternal` | uneval/src/internal/index.ts:59:38 |

##### `unevalInternal` (uneval/src/internal/index.ts:51:13)

|     % |    Time | Samples | Callee         | Location                               |
| ----: | ------: | ------: | -------------- | -------------------------------------- |
| 65.4% | 682.1ms |   4,266 | `unevalNumber` | uneval/src/internal/primitive.ts:23:22 |
| 22.3% | 232.5ms |   1,456 | `unevalNumber` | uneval/src/internal/primitive.ts:26:24 |
|  4.4% |  45.4ms |     285 | `unevalNumber` | uneval/src/internal/primitive.ts:16:15 |
|  3.4% |  35.1ms |     216 | `unevalNumber` | uneval/src/internal/primitive.ts:14:8  |
|  3.3% |  34.2ms |     214 | `unevalNumber` | uneval/src/internal/primitive.ts:18:22 |

##### `traverseObject` (uneval/src/index.ts:220:36)

|     % |    Time | Samples | Callee                     | Location   |
| ----: | ------: | ------: | -------------------------- | ---------- |
| 82.0% | 850.7ms |   5,308 | `getOwnPropertyDescriptor` | `<native>` |

##### `unevalObjectLike` (uneval/src/internal/object.ts:202:55)

|     % |    Time | Samples | Callee | Location   |
| ----: | ------: | ------: | ------ | ---------- |
| 96.3% | 842.5ms |   5,269 | `join` | `<native>` |

## Hottest call stacks

Call stacks ranked by time spent in their top frame.

Common call stack: `(module)` (uneval/scripts/profile.ts:17:6) ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule`

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 5.8% | 597.1ms |   3,731 | `unevalLiteral` (uneval/src/internal/primitive.ts:149:22) ← `unevalString` (135:8) ← `unevalInternal` (uneval/src/internal/index.ts:55:13) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:427:22) ← `unevalObjectLike` (136:8) ← `uneval` (uneval/src/index.ts:78:19)                                                           |
| 3.9% | 406.6ms |   2,537 | `getOwnPropertyDescriptor` ← `traverseObject` (uneval/src/index.ts:220:36) ← `traverse` (201:6) ← `createState` (328:4) ← `uneval` (77:18)                                                                                                                                                                                                 |
| 3.8% | 397.3ms |   2,486 | `join` ← `unevalObjectLike` (uneval/src/internal/object.ts:202:55) ← `uneval` (uneval/src/index.ts:78:19)                                                                                                                                                                                                                                  |
| 2.5% | 255.2ms |   1,604 | `unevalLiteral` (uneval/src/internal/primitive.ts:149:22) ← `unevalString` (135:8) ← `unevalInternal` (uneval/src/internal/index.ts:55:13) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:427:22) ← `unevalObjectLike` (136:8) ← `unevalObjectLike` (129:26) ← `uneval` (uneval/src/index.ts:78:19)                             |
| 2.3% | 237.0ms |   1,490 | `unevalLiteral` (uneval/src/internal/primitive.ts:149:22) ← `unevalString` (135:8) ← `unevalInternal` (uneval/src/internal/index.ts:55:13) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:427:22) ← `unevalObjectLike` (136:8) ← `unevalArray` (uneval/src/internal/collection.ts:62:21) ← `uneval` (uneval/src/index.ts:78:19) |
| 2.2% | 230.9ms |   1,449 | `join` ← `unevalArray` (uneval/src/internal/collection.ts:87:27) ← `uneval` (uneval/src/index.ts:78:19)                                                                                                                                                                                                                                    |
| 2.0% | 208.0ms |   1,300 | `unevalLiteral` (uneval/src/internal/primitive.ts:149:22) ← `unevalString` (135:8) ← `unevalInternal` (uneval/src/internal/index.ts:55:13) ← `unevalObjectLike` (uneval/src/internal/object.ts:129:26) ← `uneval` (uneval/src/index.ts:78:19)                                                                                              |
| 1.9% | 193.7ms |   1,212 | `unevalLiteral` (uneval/src/internal/primitive.ts:149:22) ← `unevalString` (135:8) ← `unevalInternal` (uneval/src/internal/index.ts:55:13) ← `unevalArray` (uneval/src/internal/collection.ts:62:21) ← `uneval` (uneval/src/index.ts:78:19)                                                                                                |
| 1.8% | 190.8ms |   1,189 | `traverseObject` (uneval/src/index.ts:246:28) ← `traverse` (201:6) ← `createState` (328:4) ← `uneval` (77:18)                                                                                                                                                                                                                              |
| 1.5% | 156.8ms |     975 | `getOwnPropertyDescriptor` ← `traverseObject` (uneval/src/index.ts:220:36) ← `traverse` (201:6) ← `traverseObject` (223:10) ← `traverse` (201:6) ← `createState` (328:4) ← `uneval` (77:18)                                                                                                                                                |
| 1.5% | 156.8ms |     980 | `join` ← `unevalObjectLike` (uneval/src/internal/object.ts:202:55) ← `unevalArray` (uneval/src/internal/collection.ts:62:21) ← `uneval` (uneval/src/index.ts:78:19)                                                                                                                                                                        |
| 1.5% | 154.5ms |     965 | `join` ← `unevalObjectLike` (uneval/src/internal/object.ts:202:55) ← `unevalObjectLike` (129:26) ← `uneval` (uneval/src/index.ts:78:19)                                                                                                                                                                                                    |
| 1.5% | 153.3ms |     954 | `getOwnPropertyDescriptor` ← `traverseObject` (uneval/src/index.ts:220:36) ← `traverse` (201:6) ← `traverseObject` (249:10) ← `traverse` (201:6) ← `createState` (328:4) ← `uneval` (77:18)                                                                                                                                                |
| 1.4% | 147.3ms |     921 | `getType` (uneval/src/internal/type.ts:18:18) ← `traverseObject` (uneval/src/index.ts:206:23) ← `traverse` (201:6) ← `createState` (328:4) ← `uneval` (77:18)                                                                                                                                                                              |
| 1.4% | 140.2ms |     876 | `traverseObject` (uneval/src/index.ts:249:20) ← `traverse` (201:6) ← `createState` (328:4) ← `uneval` (77:18)                                                                                                                                                                                                                              |
| 1.3% | 138.6ms |     860 | `unevalNumber` (uneval/src/internal/primitive.ts:23:22) ← `unevalInternal` (uneval/src/internal/index.ts:51:13) ← `unevalArray` (uneval/src/internal/collection.ts:62:21) ← `uneval` (uneval/src/index.ts:78:19)                                                                                                                           |
| 1.3% | 135.9ms |     852 | `unevalNumber` (uneval/src/internal/primitive.ts:23:22) ← `unevalInternal` (uneval/src/internal/index.ts:51:13) ← `unevalObjectLike` (uneval/src/internal/object.ts:129:26) ← `uneval` (uneval/src/index.ts:78:19)                                                                                                                         |
| 1.3% | 133.0ms |     837 | `uneval` (uneval/src/index.ts:78:19)                                                                                                                                                                                                                                                                                                       |
| 1.2% | 126.6ms |     756 | `traverseObject` (uneval/src/index.ts:209:12) ← `traverse` (201:6) ← `createState` (328:4) ← `uneval` (77:18)                                                                                                                                                                                                                              |
| 1.1% | 117.5ms |     738 | `/^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u` ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:423:25) ← `unevalObjectLike` (136:8) ← `uneval` (uneval/src/index.ts:78:19)                                                                                                                                                          |

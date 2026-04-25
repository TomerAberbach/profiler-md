# CPU profile

Took 6.17s over 45,704 samples (135.1µs per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| ours        | 91.0% |   5.61s |  42,252 |
| native      |  7.5% | 464.2ms |   2,819 |
| third-party |  1.5% |  89.9ms |     633 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                         | Location                                                                                              |
| ----: | ------: | ------: | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| 15.7% | 967.0ms |   7,019 | `traverseObject`                                 | uneval/src/index.ts:204                                                                               |
| 15.0% | 925.5ms |   6,795 | `unevalObjectLike`                               | uneval/src/internal/object.ts:103                                                                     |
|  8.5% | 527.5ms |   4,000 | `unevalObjectInternal`                           | uneval/src/internal/object.ts:68                                                                      |
|  8.5% | 523.6ms |   3,976 | `unevalWithoutCustom`                            | uneval/src/internal/index.ts:14                                                                       |
|  8.4% | 517.1ms |   3,968 | `unevalLiteral`                                  | uneval/src/internal/primitive.ts:139                                                                  |
|  6.5% | 403.8ms |   3,110 | `unevalNumber`                                   | uneval/src/internal/primitive.ts:12                                                                   |
|  6.0% | 373.3ms |   2,819 | `traverse`                                       | uneval/src/index.ts:164                                                                               |
|  5.8% | 359.2ms |   2,741 | `unevalArray`                                    | uneval/src/internal/collection.ts:7                                                                   |
|  4.3% | 266.4ms |   2,057 | `unevalInternal`                                 | uneval/src/internal/index.ts:25                                                                       |
|  3.5% | 217.0ms |   1,649 | `getType`                                        | uneval/src/internal/type.ts:4                                                                         |
|  2.7% | 166.1ms |   1,279 | `unevalObjectLiteralKey`                         | uneval/src/internal/object.ts:384                                                                     |
|  2.5% | 154.4ms |   1,161 | `createState`                                    | uneval/src/index.ts:144                                                                               |
|  2.1% | 127.6ms |     974 | `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` | `<native>`                                                                                            |
|  1.7% | 106.3ms |     674 | `(garbage collector)`                            | `<native>`                                                                                            |
|  1.7% | 106.0ms |     789 | `(program)`                                      | `<native>`                                                                                            |
|  0.9% |  53.2ms |     411 | `unevalString`                                   | uneval/src/internal/primitive.ts:133                                                                  |
|  0.7% |  44.9ms |     346 | `unevalObject`                                   | uneval/src/internal/object.ts:20                                                                      |
|  0.7% |  40.9ms |     315 | `uneval`                                         | uneval/src/index.ts:75                                                                                |
|  0.6% |  39.3ms |     306 | `isObject`                                       | uneval/src/internal/object.ts:434                                                                     |
|  0.3% |  20.2ms |     155 | `uniformIntInternal`                             | uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:7 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `traverseObject` (uneval/src/index.ts:204)

|     % |    Time | Samples | Caller                     | Location                    |
| ----: | ------: | ------: | -------------------------- | --------------------------- |
| 99.7% | 964.0ms |   6,996 | `traverse`                 | uneval/src/index.ts:164     |
|  0.1% |   1.2ms |       9 | `traverseObject`           | uneval/src/index.ts:204     |
|  0.1% |   0.6ms |       5 | `(anonymous profile.ts:1)` | uneval/scripts/profile.ts:1 |
|  0.0% |   0.1ms |       1 | `uneval`                   | uneval/src/index.ts:75      |

##### `unevalObjectLike` (uneval/src/internal/object.ts:103)

|     % |    Time | Samples | Caller                 | Location                         |
| ----: | ------: | ------: | ---------------------- | -------------------------------- |
| 99.8% | 924.0ms |   6,783 | `unevalObjectInternal` | uneval/src/internal/object.ts:68 |
|  0.1% |   0.8ms |       6 | `unevalObject`         | uneval/src/internal/object.ts:20 |

##### `unevalObjectInternal` (uneval/src/internal/object.ts:68)

|     % |    Time | Samples | Caller                 | Location                          |
| ----: | ------: | ------: | ---------------------- | --------------------------------- |
| 99.4% | 524.4ms |   3,977 | `unevalObject`         | uneval/src/internal/object.ts:20  |
|  0.1% |   0.5ms |       4 | `uneval`               | uneval/src/index.ts:75            |
|  0.1% |   0.4ms |       3 | `unevalObjectLike`     | uneval/src/internal/object.ts:103 |
|  0.0% |   0.3ms |       2 | `unevalObjectInternal` | uneval/src/internal/object.ts:68  |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts:14)

|      % |    Time | Samples | Caller                   | Location                          |
| -----: | ------: | ------: | ------------------------ | --------------------------------- |
| 100.0% | 523.6ms |   3,976 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:384 |

##### `unevalLiteral` (uneval/src/internal/primitive.ts:139)

|      % |    Time | Samples | Caller         | Location                             |
| -----: | ------: | ------: | -------------- | ------------------------------------ |
| 100.0% | 517.1ms |   3,968 | `unevalString` | uneval/src/internal/primitive.ts:133 |

##### `unevalNumber` (uneval/src/internal/primitive.ts:12)

|      % |    Time | Samples | Caller           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 403.8ms |   3,110 | `unevalInternal` | uneval/src/internal/index.ts:25 |

##### `traverse` (uneval/src/index.ts:164)

|     % |    Time | Samples | Caller           | Location                |
| ----: | ------: | ------: | ---------------- | ----------------------- |
| 75.3% | 281.0ms |   2,115 | `traverseObject` | uneval/src/index.ts:204 |
| 24.7% |  92.3ms |     704 | `createState`    | uneval/src/index.ts:144 |

##### `unevalArray` (uneval/src/internal/collection.ts:7)

|     % |    Time | Samples | Caller                 | Location                         |
| ----: | ------: | ------: | ---------------------- | -------------------------------- |
| 99.6% | 357.8ms |   2,730 | `unevalObjectInternal` | uneval/src/internal/object.ts:68 |
|  0.3% |   0.9ms |       7 | `unevalObject`         | uneval/src/internal/object.ts:20 |

##### `unevalInternal` (uneval/src/internal/index.ts:25)

|     % |    Time | Samples | Caller                 | Location                            |
| ----: | ------: | ------: | ---------------------- | ----------------------------------- |
| 40.4% | 107.5ms |     829 | `unevalObjectLike`     | uneval/src/internal/object.ts:103   |
| 33.3% |  88.8ms |     684 | `unevalArray`          | uneval/src/internal/collection.ts:7 |
|  8.9% |  23.6ms |     184 | `uneval`               | uneval/src/index.ts:75              |
|  7.3% |  19.4ms |     151 | `unevalWithoutCustom`  | uneval/src/internal/index.ts:14     |
|  7.0% |  18.5ms |     143 | `unevalObjectInternal` | uneval/src/internal/object.ts:68    |

##### `getType` (uneval/src/internal/type.ts:4)

|     % |    Time | Samples | Caller           | Location                |
| ----: | ------: | ------: | ---------------- | ----------------------- |
| 99.9% | 216.9ms |   1,648 | `traverseObject` | uneval/src/index.ts:204 |
|  0.1% |   0.1ms |       1 | `traverse`       | uneval/src/index.ts:164 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384)

|      % |    Time | Samples | Caller             | Location                          |
| -----: | ------: | ------: | ------------------ | --------------------------------- |
| 100.0% | 166.1ms |   1,279 | `unevalObjectLike` | uneval/src/internal/object.ts:103 |

##### `createState` (uneval/src/index.ts:144)

|      % |    Time | Samples | Caller   | Location               |
| -----: | ------: | ------: | -------- | ---------------------- |
| 100.0% | 154.4ms |   1,161 | `uneval` | uneval/src/index.ts:75 |

##### `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` (`<native>`)

|      % |    Time | Samples | Caller                   | Location                          |
| -----: | ------: | ------: | ------------------------ | --------------------------------- |
| 100.0% | 127.6ms |     974 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:384 |

##### `(garbage collector)` (`<native>`)

|     % |   Time | Samples | Caller                 | Location                             |
| ----: | -----: | ------: | ---------------------- | ------------------------------------ |
| 15.9% | 16.9ms |     109 | `unevalObjectLike`     | uneval/src/internal/object.ts:103    |
| 12.9% | 13.7ms |     106 | `traverseObject`       | uneval/src/index.ts:204              |
| 10.0% | 10.6ms |      50 | `unevalNumber`         | uneval/src/internal/primitive.ts:12  |
|  7.8% |  8.3ms |      62 | `unevalLiteral`        | uneval/src/internal/primitive.ts:139 |
|  7.3% |  7.7ms |      60 | `unevalObjectInternal` | uneval/src/internal/object.ts:68     |

##### `(program)` (`<native>`)

|     % |   Time | Samples | Caller                 | Location                             |
| ----: | -----: | ------: | ---------------------- | ------------------------------------ |
| 18.1% | 19.2ms |     143 | `unevalObjectLike`     | uneval/src/internal/object.ts:103    |
| 15.1% | 16.0ms |     120 | `traverseObject`       | uneval/src/index.ts:204              |
| 10.2% | 10.8ms |      80 | `unevalLiteral`        | uneval/src/internal/primitive.ts:139 |
|  9.7% | 10.2ms |      75 | `unevalObjectInternal` | uneval/src/internal/object.ts:68     |
|  8.5% |  9.0ms |      68 | `unevalWithoutCustom`  | uneval/src/internal/index.ts:14      |

##### `unevalString` (uneval/src/internal/primitive.ts:133)

|      % |   Time | Samples | Caller           | Location                        |
| -----: | -----: | ------: | ---------------- | ------------------------------- |
| 100.0% | 53.2ms |     411 | `unevalInternal` | uneval/src/internal/index.ts:25 |

##### `unevalObject` (uneval/src/internal/object.ts:20)

|      % |   Time | Samples | Caller           | Location                        |
| -----: | -----: | ------: | ---------------- | ------------------------------- |
| 100.0% | 44.9ms |     346 | `unevalInternal` | uneval/src/internal/index.ts:25 |

##### `uneval` (uneval/src/index.ts:75)

|     % |   Time | Samples | Caller                     | Location                    |
| ----: | -----: | ------: | -------------------------- | --------------------------- |
| 97.5% | 39.9ms |     307 | `(anonymous profile.ts:1)` | uneval/scripts/profile.ts:1 |

##### `isObject` (uneval/src/internal/object.ts:434)

|      % |   Time | Samples | Caller           | Location                        |
| -----: | -----: | ------: | ---------------- | ------------------------------- |
| 100.0% | 39.3ms |     306 | `unevalInternal` | uneval/src/internal/index.ts:25 |

##### `uniformIntInternal` (uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:7)

|     % |   Time | Samples | Caller                    | Location                                                                                                |
| ----: | -----: | ------: | ------------------------- | ------------------------------------------------------------------------------------------------------- |
| 96.8% | 19.6ms |     150 | `uniformInt`              | uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:127 |
|  3.2% |  0.7ms |       5 | `uniformArrayIntInternal` | uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:83  |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                                         | Location                                                                                  |
| ----: | ------: | ------: | ------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 97.7% |   6.02s |  45,204 | `(anonymous profile.ts:1)`                       | uneval/scripts/profile.ts:1                                                               |
| 95.8% |   5.91s |  44,409 | `uneval`                                         | uneval/src/index.ts:75                                                                    |
| 66.7% |   4.12s |  31,132 | `unevalInternal`                                 | uneval/src/internal/index.ts:25                                                           |
| 65.6% |   4.05s |  30,604 | `unevalObject`                                   | uneval/src/internal/object.ts:20                                                          |
| 65.3% |   4.03s |  30,450 | `unevalObjectInternal`                           | uneval/src/internal/object.ts:68                                                          |
| 50.3% |   3.10s |  23,455 | `unevalObjectLike`                               | uneval/src/internal/object.ts:103                                                         |
| 29.0% |   1.78s |  13,684 | `unevalArray`                                    | uneval/src/internal/collection.ts:7                                                       |
| 28.5% |   1.76s |  13,019 | `createState`                                    | uneval/src/index.ts:144                                                                   |
| 26.0% |   1.60s |  11,830 | `traverse`                                       | uneval/src/index.ts:164                                                                   |
| 24.4% |   1.50s |  11,116 | `traverseObject`                                 | uneval/src/index.ts:204                                                                   |
| 20.1% |   1.23s |   9,443 | `unevalObjectLiteralKey`                         | uneval/src/internal/object.ts:384                                                         |
| 15.1% | 934.0ms |   7,113 | `unevalWithoutCustom`                            | uneval/src/internal/index.ts:14                                                           |
|  9.6% | 590.7ms |   4,530 | `unevalString`                                   | uneval/src/internal/primitive.ts:133                                                      |
|  8.7% | 536.3ms |   4,111 | `unevalLiteral`                                  | uneval/src/internal/primitive.ts:139                                                      |
|  6.8% | 421.5ms |   3,214 | `unevalNumber`                                   | uneval/src/internal/primitive.ts:12                                                       |
|  3.6% | 222.7ms |   1,691 | `getType`                                        | uneval/src/internal/type.ts:4                                                             |
|  2.1% | 131.8ms |   1,006 | `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` | `<native>`                                                                                |
|  1.7% | 108.0ms |     684 | `(garbage collector)`                            | `<native>`                                                                                |
|  1.7% | 106.9ms |     796 | `(program)`                                      | `<native>`                                                                                |
|  1.6% |  96.4ms |     657 | `sample`                                         | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551 |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `(anonymous profile.ts:1)` (uneval/scripts/profile.ts:1)

|     % |   Time | Samples | Callee           | Location                                                                                  |
| ----: | -----: | ------: | ---------------- | ----------------------------------------------------------------------------------------- |
| 98.1% |  5.91s |  44,401 | `uneval`         | uneval/src/index.ts:75                                                                    |
|  1.6% | 96.4ms |     657 | `sample`         | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551 |
|  0.0% |  2.1ms |      16 | `anything`       | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:8168 |
|  0.0% |  1.8ms |      14 | `unevalInternal` | uneval/src/internal/index.ts:25                                                           |
|  0.0% |  0.6ms |       5 | `traverseObject` | uneval/src/index.ts:204                                                                   |

##### `uneval` (uneval/src/index.ts:75)

|     % |  Time | Samples | Callee                 | Location                         |
| ----: | ----: | ------: | ---------------------- | -------------------------------- |
| 69.5% | 4.11s |  31,064 | `unevalInternal`       | uneval/src/internal/index.ts:25  |
| 29.8% | 1.76s |  13,019 | `createState`          | uneval/src/index.ts:144          |
|  0.0% | 0.5ms |       4 | `unevalObjectInternal` | uneval/src/internal/object.ts:68 |
|  0.0% | 0.5ms |       4 | `(program)`            | `<native>`                       |
|  0.0% | 0.4ms |       2 | `(garbage collector)`  | `<native>`                       |

##### `unevalInternal` (uneval/src/internal/index.ts:25)

|     % |    Time | Samples | Callee                | Location                             |
| ----: | ------: | ------: | --------------------- | ------------------------------------ |
| 98.3% |   4.05s |  30,604 | `unevalObject`        | uneval/src/internal/object.ts:20     |
| 14.3% | 590.7ms |   4,530 | `unevalString`        | uneval/src/internal/primitive.ts:133 |
| 10.2% | 421.5ms |   3,214 | `unevalNumber`        | uneval/src/internal/primitive.ts:12  |
|  1.0% |  40.3ms |     314 | `isObject`            | uneval/src/internal/object.ts:434    |
|  0.2% |   6.3ms |      30 | `(garbage collector)` | `<native>`                           |

##### `unevalObject` (uneval/src/internal/object.ts:20)

|     % |  Time | Samples | Callee                 | Location                            |
| ----: | ----: | ------: | ---------------------- | ----------------------------------- |
| 99.4% | 4.02s |  30,432 | `unevalObjectInternal` | uneval/src/internal/object.ts:68    |
|  0.0% | 1.0ms |       8 | `(program)`            | `<native>`                          |
|  0.0% | 0.9ms |       7 | `unevalArray`          | uneval/src/internal/collection.ts:7 |
|  0.0% | 0.8ms |       6 | `unevalObjectLike`     | uneval/src/internal/object.ts:103   |
|  0.0% | 0.4ms |       3 | `(garbage collector)`  | `<native>`                          |

##### `unevalObjectInternal` (uneval/src/internal/object.ts:68)

|     % |   Time | Samples | Callee                | Location                            |
| ----: | -----: | ------: | --------------------- | ----------------------------------- |
| 77.0% |  3.10s |  23,444 | `unevalObjectLike`    | uneval/src/internal/object.ts:103   |
| 44.4% |  1.78s |  13,676 | `unevalArray`         | uneval/src/internal/collection.ts:7 |
|  0.5% | 18.9ms |     146 | `unevalInternal`      | uneval/src/internal/index.ts:25     |
|  0.3% | 10.2ms |      75 | `(program)`           | `<native>`                          |
|  0.2% |  7.9ms |      61 | `(garbage collector)` | `<native>`                          |

##### `unevalObjectLike` (uneval/src/internal/object.ts:103)

|     % |   Time | Samples | Callee                    | Location                          |
| ----: | -----: | ------: | ------------------------- | --------------------------------- |
| 50.4% |  1.56s |  12,001 | `unevalInternal`          | uneval/src/internal/index.ts:25   |
| 39.9% |  1.23s |   9,443 | `unevalObjectLiteralKey`  | uneval/src/internal/object.ts:384 |
|  0.6% | 19.4ms |     145 | `(program)`               | `<native>`                        |
|  0.6% | 17.3ms |     112 | `(garbage collector)`     | `<native>`                        |
|  0.5% | 14.1ms |     108 | `isRegularDataDescriptor` | uneval/src/internal/object.ts:287 |

##### `unevalArray` (uneval/src/internal/collection.ts:7)

|     % |  Time | Samples | Callee                | Location                             |
| ----: | ----: | ------: | --------------------- | ------------------------------------ |
| 85.2% | 1.52s |  11,666 | `unevalInternal`      | uneval/src/internal/index.ts:25      |
|  0.4% | 7.8ms |      45 | `(garbage collector)` | `<native>`                           |
|  0.4% | 6.5ms |      49 | `(program)`           | `<native>`                           |
|  0.2% | 2.7ms |      21 | `unevalObjectAssign`  | uneval/src/internal/collection.ts:89 |

##### `createState` (uneval/src/index.ts:144)

|     % |  Time | Samples | Callee                | Location                |
| ----: | ----: | ------: | --------------------- | ----------------------- |
| 91.0% | 1.60s |  11,830 | `traverse`            | uneval/src/index.ts:164 |
|  0.1% | 2.1ms |      16 | `(program)`           | `<native>`              |
|  0.1% | 1.6ms |      12 | `(garbage collector)` | `<native>`              |

##### `traverse` (uneval/src/index.ts:164)

|     % |  Time | Samples | Callee                | Location                      |
| ----: | ----: | ------: | --------------------- | ----------------------------- |
| 94.0% | 1.50s |  11,102 | `traverseObject`      | uneval/src/index.ts:204       |
|  0.3% | 5.6ms |      43 | `(program)`           | `<native>`                    |
|  0.3% | 4.8ms |      37 | `(garbage collector)` | `<native>`                    |
|  0.0% | 0.1ms |       1 | `getType`             | uneval/src/internal/type.ts:4 |

##### `traverseObject` (uneval/src/index.ts:204)

|     % |    Time | Samples | Callee                | Location                      |
| ----: | ------: | ------: | --------------------- | ----------------------------- |
| 60.4% | 911.9ms |   6,785 | `traverse`            | uneval/src/index.ts:164       |
| 14.8% | 222.6ms |   1,690 | `getType`             | uneval/src/internal/type.ts:4 |
|  1.1% |  16.4ms |     123 | `(program)`           | `<native>`                    |
|  0.9% |  14.0ms |     108 | `(garbage collector)` | `<native>`                    |
|  0.1% |   1.2ms |       9 | `traverseObject`      | uneval/src/index.ts:204       |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384)

|     % |    Time | Samples | Callee                                           | Location                        |
| ----: | ------: | ------: | ------------------------------------------------ | ------------------------------- |
| 75.4% | 934.0ms |   7,113 | `unevalWithoutCustom`                            | uneval/src/internal/index.ts:14 |
| 10.7% | 131.8ms |   1,006 | `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` | `<native>`                      |
|  0.3% |   3.3ms |      25 | `(program)`                                      | `<native>`                      |
|  0.2% |   2.7ms |      20 | `(garbage collector)`                            | `<native>`                      |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts:14)

|     % |    Time | Samples | Callee                | Location                        |
| ----: | ------: | ------: | --------------------- | ------------------------------- |
| 42.4% | 395.6ms |   3,025 | `unevalInternal`      | uneval/src/internal/index.ts:25 |
|  1.0% |   9.0ms |      68 | `(program)`           | `<native>`                      |
|  0.6% |   5.8ms |      44 | `(garbage collector)` | `<native>`                      |

##### `unevalString` (uneval/src/internal/primitive.ts:133)

|     % |    Time | Samples | Callee                | Location                             |
| ----: | ------: | ------: | --------------------- | ------------------------------------ |
| 90.8% | 536.3ms |   4,111 | `unevalLiteral`       | uneval/src/internal/primitive.ts:139 |
|  0.1% |   0.8ms |       5 | `(garbage collector)` | `<native>`                           |
|  0.1% |   0.4ms |       3 | `(program)`           | `<native>`                           |

##### `unevalLiteral` (uneval/src/internal/primitive.ts:139)

|    % |   Time | Samples | Callee                | Location   |
| ---: | -----: | ------: | --------------------- | ---------- |
| 2.0% | 10.9ms |      81 | `(program)`           | `<native>` |
| 1.5% |  8.3ms |      62 | `(garbage collector)` | `<native>` |

##### `unevalNumber` (uneval/src/internal/primitive.ts:12)

|    % |   Time | Samples | Callee                | Location   |
| ---: | -----: | ------: | --------------------- | ---------- |
| 2.5% | 10.6ms |      50 | `(garbage collector)` | `<native>` |
| 1.7% |  7.0ms |      54 | `(program)`           | `<native>` |

##### `getType` (uneval/src/internal/type.ts:4)

|    % |  Time | Samples | Callee                | Location   |
| ---: | ----: | ------: | --------------------- | ---------- |
| 1.4% | 3.2ms |      24 | `(program)`           | `<native>` |
| 1.1% | 2.4ms |      18 | `(garbage collector)` | `<native>` |

##### `RegExp: ^[$_\p{ID_Start}][$_\p{ID_Continue}]*$` (`<native>`)

|    % |  Time | Samples | Callee                | Location   |
| ---: | ----: | ------: | --------------------- | ---------- |
| 2.6% | 3.4ms |      25 | `(program)`           | `<native>` |
| 0.7% | 0.9ms |       7 | `(garbage collector)` | `<native>` |

##### `(garbage collector)` (`<native>`)

|    % |  Time | Samples | Callee      | Location   |
| ---: | ----: | ------: | ----------- | ---------- |
| 1.6% | 1.7ms |      10 | `(program)` | `<native>` |

##### `(program)` (`<native>`)

|    % |  Time | Samples | Callee                | Location   |
| ---: | ----: | ------: | --------------------- | ---------- |
| 0.8% | 0.9ms |       7 | `(garbage collector)` | `<native>` |

##### `sample` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551)

|     % |   Time | Samples | Callee         | Location                                                                                  |
| ----: | -----: | ------: | -------------- | ----------------------------------------------------------------------------------------- |
| 99.7% | 96.2ms |     655 | `mapHelper`    | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58   |
|  0.3% |  0.3ms |       2 | `streamSample` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2524 |

## Hottest call stacks

Call stacks ranked by time spent in their top frame.

Common call stack: `uneval` (uneval/src/index.ts:75) ← `(anonymous profile.ts:1)` (uneval/scripts/profile.ts:1)

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.5% | 465.4ms |   3,336 | `traverseObject` (uneval/src/index.ts:204) ← `traverse` (164) ← `createState` (144)                                                                                                                                                                                                                                                                                                                                                                     |
| 7.0% | 434.4ms |   3,084 | `unevalObjectLike` (uneval/src/internal/object.ts:103) ← `unevalObjectInternal` (68) ← `unevalObject` (20) ← `unevalInternal` (uneval/src/internal/index.ts:25)                                                                                                                                                                                                                                                                                         |
| 5.9% | 366.2ms |   2,657 | `traverseObject` (uneval/src/index.ts:204) ← `traverse` (164) ← `traverseObject` (204) ← `traverse` (164) ← `createState` (144)                                                                                                                                                                                                                                                                                                                         |
| 4.0% | 245.0ms |   1,838 | `unevalWithoutCustom` (uneval/src/internal/index.ts:14) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384) ← `unevalObjectLike` (103) ← `unevalObjectInternal` (68) ← `unevalObject` (20) ← `unevalInternal` (uneval/src/internal/index.ts:25)                                                                                                                                                                                              |
| 3.9% | 239.8ms |   1,797 | `unevalObjectInternal` (uneval/src/internal/object.ts:68) ← `unevalObject` (20) ← `unevalInternal` (uneval/src/internal/index.ts:25)                                                                                                                                                                                                                                                                                                                    |
| 3.0% | 185.4ms |   1,383 | `unevalObjectLike` (uneval/src/internal/object.ts:103) ← `unevalObjectInternal` (68) ← `unevalObject` (20) ← `unevalInternal` (uneval/src/internal/index.ts:25) ← `unevalObjectLike` (uneval/src/internal/object.ts:103) ← `unevalObjectInternal` (68) ← `unevalObject` (20) ← `unevalInternal` (uneval/src/internal/index.ts:25)                                                                                                                       |
| 2.9% | 177.3ms |   1,336 | `unevalObjectLike` (uneval/src/internal/object.ts:103) ← `unevalObjectInternal` (68) ← `unevalObject` (20) ← `unevalInternal` (uneval/src/internal/index.ts:25) ← `unevalArray` (uneval/src/internal/collection.ts:7) ← `unevalObjectInternal` (uneval/src/internal/object.ts:68) ← `unevalObject` (20) ← `unevalInternal` (uneval/src/internal/index.ts:25)                                                                                            |
| 2.8% | 170.6ms |   1,290 | `unevalArray` (uneval/src/internal/collection.ts:7) ← `unevalObjectInternal` (uneval/src/internal/object.ts:68) ← `unevalObject` (20) ← `unevalInternal` (uneval/src/internal/index.ts:25)                                                                                                                                                                                                                                                              |
| 2.5% | 155.2ms |   1,160 | `traverse` (uneval/src/index.ts:164) ← `traverseObject` (204) ← `traverse` (164) ← `createState` (144)                                                                                                                                                                                                                                                                                                                                                  |
| 2.5% | 154.4ms |   1,161 | `createState` (uneval/src/index.ts:144)                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.5% | 152.7ms |   1,155 | `unevalLiteral` (uneval/src/internal/primitive.ts:139) ← `unevalString` (133) ← `unevalInternal` (uneval/src/internal/index.ts:25) ← `unevalWithoutCustom` (14) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384) ← `unevalObjectLike` (103) ← `unevalObjectInternal` (68) ← `unevalObject` (20) ← `unevalInternal` (uneval/src/internal/index.ts:25)                                                                                      |
| 1.8% | 113.0ms |     855 | `traverseObject` (uneval/src/index.ts:204) ← `traverse` (164) ← `traverseObject` (204) ← `traverse` (164) ← `traverseObject` (204) ← `traverse` (164) ← `createState` (144)                                                                                                                                                                                                                                                                             |
| 1.8% | 111.0ms |     838 | `getType` (uneval/src/internal/type.ts:4) ← `traverseObject` (uneval/src/index.ts:204) ← `traverse` (164) ← `createState` (144)                                                                                                                                                                                                                                                                                                                         |
| 1.8% | 110.3ms |     844 | `unevalObjectInternal` (uneval/src/internal/object.ts:68) ← `unevalObject` (20) ← `unevalInternal` (uneval/src/internal/index.ts:25) ← `unevalObjectLike` (uneval/src/internal/object.ts:103) ← `unevalObjectInternal` (68) ← `unevalObject` (20) ← `unevalInternal` (uneval/src/internal/index.ts:25)                                                                                                                                                  |
| 1.7% | 106.4ms |     816 | `unevalWithoutCustom` (uneval/src/internal/index.ts:14) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384) ← `unevalObjectLike` (103) ← `unevalObjectInternal` (68) ← `unevalObject` (20) ← `unevalInternal` (uneval/src/internal/index.ts:25) ← `unevalArray` (uneval/src/internal/collection.ts:7) ← `unevalObjectInternal` (uneval/src/internal/object.ts:68) ← `unevalObject` (20) ← `unevalInternal` (uneval/src/internal/index.ts:25) |
| 1.6% | 100.8ms |     768 | `unevalObjectInternal` (uneval/src/internal/object.ts:68) ← `unevalObject` (20) ← `unevalInternal` (uneval/src/internal/index.ts:25) ← `unevalArray` (uneval/src/internal/collection.ts:7) ← `unevalObjectInternal` (uneval/src/internal/object.ts:68) ← `unevalObject` (20) ← `unevalInternal` (uneval/src/internal/index.ts:25)                                                                                                                       |
| 1.6% |  99.5ms |     758 | `unevalWithoutCustom` (uneval/src/internal/index.ts:14) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts:384) ← `unevalObjectLike` (103) ← `unevalObjectInternal` (68) ← `unevalObject` (20) ← `unevalInternal` (uneval/src/internal/index.ts:25) ← `unevalObjectLike` (uneval/src/internal/object.ts:103) ← `unevalObjectInternal` (68) ← `unevalObject` (20) ← `unevalInternal` (uneval/src/internal/index.ts:25)                            |
| 1.6% |  96.9ms |     732 | `traverse` (uneval/src/index.ts:164) ← `traverseObject` (204) ← `traverse` (164) ← `traverseObject` (204) ← `traverse` (164) ← `createState` (144)                                                                                                                                                                                                                                                                                                      |
| 1.5% |  92.3ms |     704 | `traverse` (uneval/src/index.ts:164) ← `createState` (144)                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.3% |  83.2ms |     641 | `unevalNumber` (uneval/src/internal/primitive.ts:12) ← `unevalInternal` (uneval/src/internal/index.ts:25) ← `unevalObjectLike` (uneval/src/internal/object.ts:103) ← `unevalObjectInternal` (68) ← `unevalObject` (20) ← `unevalInternal` (uneval/src/internal/index.ts:25)                                                                                                                                                                             |

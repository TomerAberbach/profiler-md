# CPU profile

Took 1.19s over 254 samples (4723.8µs per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| ours     | 97.7% |  1.17s |     252 |
| native   |  2.3% | 28.1ms |       2 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                  | Location                          |
| ----: | ------: | ------: | ------------------------- | --------------------------------- |
| 16.9% | 203.0ms |       8 | `traverseObject`          | uneval/src/index.ts               |
| 15.5% | 185.7ms |      17 | `unevalObjectLike`        | uneval/src/internal/object.ts     |
|  9.0% | 108.1ms |      18 | `unevalObjectInternal`    | uneval/src/internal/object.ts     |
|  8.7% | 104.3ms |      32 | `unevalLiteral`           | uneval/src/internal/primitive.ts  |
|  8.2% |  98.6ms |      15 | `unevalWithoutCustom`     | uneval/src/internal/index.ts      |
|  7.0% |  84.2ms |      24 | `unevalNumber`            | uneval/src/internal/primitive.ts  |
|  6.4% |  77.0ms |       5 | `traverse`                | uneval/src/index.ts               |
|  5.8% |  69.5ms |      14 | `unevalArray`             | uneval/src/internal/collection.ts |
|  4.9% |  59.4ms |      12 | `unevalObjectLiteralKey`  | uneval/src/internal/object.ts     |
|  4.6% |  55.5ms |      37 | `unevalInternal`          | uneval/src/internal/index.ts      |
|  4.0% |  47.6ms |       4 | `getType`                 | uneval/src/internal/type.ts       |
|  2.6% |  31.6ms |       2 | `createState`             | uneval/src/index.ts               |
|  2.3% |  28.0ms |       1 | `Garbage Collection`      | `<native>`                        |
|  1.0% |  11.8ms |      21 | `unevalString`            | uneval/src/internal/primitive.ts  |
|  0.9% |  10.5ms |       3 | `uneval`                  | uneval/src/index.ts               |
|  0.8% |   9.4ms |       7 | `unevalObject`            | uneval/src/internal/object.ts     |
|  0.6% |   7.5ms |      12 | `isObject`                | uneval/src/internal/object.ts     |
|  0.2% |   2.8ms |       1 | `(anonymous)`             | uneval/scripts/profile-pprof.ts   |
|  0.2% |   2.8ms |       7 | `isRegularDataDescriptor` | uneval/src/internal/object.ts     |
|  0.1% |   1.6ms |       7 | `unevalBoolean`           | uneval/src/internal/primitive.ts  |

#### Lines

Lines ranked by contribution to each function's self time.

##### `traverseObject` (uneval/src/index.ts)

|      % |    Time | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 203.0ms |       8 | uneval/src/index.ts:204 |

##### `unevalObjectLike` (uneval/src/internal/object.ts)

|      % |    Time | Samples | Location                          |
| -----: | ------: | ------: | --------------------------------- |
| 100.0% | 185.7ms |      17 | uneval/src/internal/object.ts:103 |

##### `unevalObjectInternal` (uneval/src/internal/object.ts)

|      % |    Time | Samples | Location                         |
| -----: | ------: | ------: | -------------------------------- |
| 100.0% | 108.1ms |      18 | uneval/src/internal/object.ts:68 |

##### `unevalLiteral` (uneval/src/internal/primitive.ts)

|      % |    Time | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 104.3ms |      32 | uneval/src/internal/primitive.ts:139 |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts)

|      % |   Time | Samples | Location                        |
| -----: | -----: | ------: | ------------------------------- |
| 100.0% | 98.6ms |      15 | uneval/src/internal/index.ts:14 |

##### `unevalNumber` (uneval/src/internal/primitive.ts)

|      % |   Time | Samples | Location                            |
| -----: | -----: | ------: | ----------------------------------- |
| 100.0% | 84.2ms |      24 | uneval/src/internal/primitive.ts:12 |

##### `traverse` (uneval/src/index.ts)

|      % |   Time | Samples | Location                |
| -----: | -----: | ------: | ----------------------- |
| 100.0% | 77.0ms |       5 | uneval/src/index.ts:164 |

##### `unevalArray` (uneval/src/internal/collection.ts)

|      % |   Time | Samples | Location                            |
| -----: | -----: | ------: | ----------------------------------- |
| 100.0% | 69.5ms |      14 | uneval/src/internal/collection.ts:7 |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts)

|      % |   Time | Samples | Location                          |
| -----: | -----: | ------: | --------------------------------- |
| 100.0% | 59.4ms |      12 | uneval/src/internal/object.ts:384 |

##### `unevalInternal` (uneval/src/internal/index.ts)

|      % |   Time | Samples | Location                        |
| -----: | -----: | ------: | ------------------------------- |
| 100.0% | 55.5ms |      37 | uneval/src/internal/index.ts:25 |

##### `getType` (uneval/src/internal/type.ts)

|      % |   Time | Samples | Location                      |
| -----: | -----: | ------: | ----------------------------- |
| 100.0% | 47.6ms |       4 | uneval/src/internal/type.ts:4 |

##### `createState` (uneval/src/index.ts)

|      % |   Time | Samples | Location                |
| -----: | -----: | ------: | ----------------------- |
| 100.0% | 31.6ms |       2 | uneval/src/index.ts:144 |

##### `Garbage Collection` (`<native>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 28.0ms |       1 | 0        |

##### `unevalString` (uneval/src/internal/primitive.ts)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 11.8ms |      21 | uneval/src/internal/primitive.ts:133 |

##### `uneval` (uneval/src/index.ts)

|      % |   Time | Samples | Location               |
| -----: | -----: | ------: | ---------------------- |
| 100.0% | 10.5ms |       3 | uneval/src/index.ts:75 |

##### `unevalObject` (uneval/src/internal/object.ts)

|      % |  Time | Samples | Location                         |
| -----: | ----: | ------: | -------------------------------- |
| 100.0% | 9.4ms |       7 | uneval/src/internal/object.ts:20 |

##### `isObject` (uneval/src/internal/object.ts)

|      % |  Time | Samples | Location                          |
| -----: | ----: | ------: | --------------------------------- |
| 100.0% | 7.5ms |      12 | uneval/src/internal/object.ts:434 |

##### `(anonymous)` (uneval/scripts/profile-pprof.ts)

|      % |  Time | Samples | Location                          |
| -----: | ----: | ------: | --------------------------------- |
| 100.0% | 2.8ms |       1 | uneval/scripts/profile-pprof.ts:0 |

##### `isRegularDataDescriptor` (uneval/src/internal/object.ts)

|      % |  Time | Samples | Location                          |
| -----: | ----: | ------: | --------------------------------- |
| 100.0% | 2.8ms |       7 | uneval/src/internal/object.ts:287 |

##### `unevalBoolean` (uneval/src/internal/primitive.ts)

|      % |  Time | Samples | Location                           |
| -----: | ----: | ------: | ---------------------------------- |
| 100.0% | 1.6ms |       7 | uneval/src/internal/primitive.ts:8 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `traverseObject` (uneval/src/index.ts)

|     % |    Time | Samples | Caller           | Location                        |
| ----: | ------: | ------: | ---------------- | ------------------------------- |
| 99.8% | 202.6ms |       5 | `traverse`       | uneval/src/index.ts             |
|  0.1% |   0.1ms |       1 | `(anonymous)`    | uneval/scripts/profile-pprof.ts |
|  0.1% |   0.1ms |       1 | `traverseObject` | uneval/src/index.ts             |

##### `unevalObjectLike` (uneval/src/internal/object.ts)

|     % |    Time | Samples | Caller                 | Location                      |
| ----: | ------: | ------: | ---------------------- | ----------------------------- |
| 99.9% | 185.6ms |      16 | `unevalObjectInternal` | uneval/src/internal/object.ts |

##### `unevalObjectInternal` (uneval/src/internal/object.ts)

|     % |    Time | Samples | Caller         | Location                      |
| ----: | ------: | ------: | -------------- | ----------------------------- |
| 99.4% | 107.5ms |      16 | `unevalObject` | uneval/src/internal/object.ts |
|  0.1% |   0.1ms |       1 | `uneval`       | uneval/src/index.ts           |

##### `unevalLiteral` (uneval/src/internal/primitive.ts)

|      % |    Time | Samples | Caller         | Location                         |
| -----: | ------: | ------: | -------------- | -------------------------------- |
| 100.0% | 104.3ms |      32 | `unevalString` | uneval/src/internal/primitive.ts |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts)

|      % |   Time | Samples | Caller                   | Location                      |
| -----: | -----: | ------: | ------------------------ | ----------------------------- |
| 100.0% | 98.6ms |      15 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts |

##### `unevalNumber` (uneval/src/internal/primitive.ts)

|      % |   Time | Samples | Caller           | Location                     |
| -----: | -----: | ------: | ---------------- | ---------------------------- |
| 100.0% | 84.2ms |      24 | `unevalInternal` | uneval/src/internal/index.ts |

##### `traverse` (uneval/src/index.ts)

|     % |   Time | Samples | Caller           | Location            |
| ----: | -----: | ------: | ---------------- | ------------------- |
| 74.4% | 57.4ms |       4 | `traverseObject` | uneval/src/index.ts |
| 25.6% | 19.7ms |       1 | `createState`    | uneval/src/index.ts |

##### `unevalArray` (uneval/src/internal/collection.ts)

|     % |   Time | Samples | Caller                 | Location                      |
| ----: | -----: | ------: | ---------------------- | ----------------------------- |
| 99.6% | 69.3ms |      12 | `unevalObjectInternal` | uneval/src/internal/object.ts |
|  0.2% |  0.1ms |       1 | `unevalObject`         | uneval/src/internal/object.ts |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts)

|      % |   Time | Samples | Caller             | Location                      |
| -----: | -----: | ------: | ------------------ | ----------------------------- |
| 100.0% | 59.4ms |      12 | `unevalObjectLike` | uneval/src/internal/object.ts |

##### `unevalInternal` (uneval/src/internal/index.ts)

|     % |   Time | Samples | Caller                 | Location                          |
| ----: | -----: | ------: | ---------------------- | --------------------------------- |
| 40.8% | 22.6ms |      11 | `unevalObjectLike`     | uneval/src/internal/object.ts     |
| 34.1% | 18.9ms |      10 | `unevalArray`          | uneval/src/internal/collection.ts |
|  8.0% |  4.4ms |       1 | `uneval`               | uneval/src/index.ts               |
|  8.0% |  4.4ms |       7 | `unevalWithoutCustom`  | uneval/src/internal/index.ts      |
|  6.3% |  3.5ms |       6 | `unevalObjectInternal` | uneval/src/internal/object.ts     |

##### `getType` (uneval/src/internal/type.ts)

|      % |   Time | Samples | Caller           | Location            |
| -----: | -----: | ------: | ---------------- | ------------------- |
| 100.0% | 47.6ms |       4 | `traverseObject` | uneval/src/index.ts |

##### `createState` (uneval/src/index.ts)

|     % |   Time | Samples | Caller        | Location                        |
| ----: | -----: | ------: | ------------- | ------------------------------- |
| 99.6% | 31.5ms |       1 | `uneval`      | uneval/src/index.ts             |
|  0.4% |  0.1ms |       1 | `(anonymous)` | uneval/scripts/profile-pprof.ts |

##### `Garbage Collection` (`<native>`)

|      % |   Time | Samples | Caller    | Location   |
| -----: | -----: | ------: | --------- | ---------- |
| 100.0% | 28.0ms |       1 | `Node.js` | `<native>` |

##### `unevalString` (uneval/src/internal/primitive.ts)

|      % |   Time | Samples | Caller           | Location                     |
| -----: | -----: | ------: | ---------------- | ---------------------------- |
| 100.0% | 11.8ms |      21 | `unevalInternal` | uneval/src/internal/index.ts |

##### `uneval` (uneval/src/index.ts)

|     % |  Time | Samples | Caller        | Location                        |
| ----: | ----: | ------: | ------------- | ------------------------------- |
| 94.9% | 9.9ms |       1 | `(anonymous)` | uneval/scripts/profile-pprof.ts |

##### `unevalObject` (uneval/src/internal/object.ts)

|      % |  Time | Samples | Caller           | Location                     |
| -----: | ----: | ------: | ---------------- | ---------------------------- |
| 100.0% | 9.4ms |       7 | `unevalInternal` | uneval/src/internal/index.ts |

##### `isObject` (uneval/src/internal/object.ts)

|      % |  Time | Samples | Caller           | Location                     |
| -----: | ----: | ------: | ---------------- | ---------------------------- |
| 100.0% | 7.5ms |      12 | `unevalInternal` | uneval/src/internal/index.ts |

##### `isRegularDataDescriptor` (uneval/src/internal/object.ts)

|      % |  Time | Samples | Caller             | Location                      |
| -----: | ----: | ------: | ------------------ | ----------------------------- |
| 100.0% | 2.8ms |       7 | `unevalObjectLike` | uneval/src/internal/object.ts |

##### `unevalBoolean` (uneval/src/internal/primitive.ts)

|      % |  Time | Samples | Caller           | Location                     |
| -----: | ----: | ------: | ---------------- | ---------------------------- |
| 100.0% | 1.6ms |       7 | `unevalInternal` | uneval/src/internal/index.ts |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                  | Location                          |
| ----: | ------: | ------: | ------------------------- | --------------------------------- |
| 97.4% |   1.16s |     245 | `(anonymous)`             | uneval/scripts/profile-pprof.ts   |
| 97.2% |   1.16s |     243 | `uneval`                  | uneval/src/index.ts               |
| 66.5% | 798.1ms |     224 | `unevalInternal`          | uneval/src/internal/index.ts      |
| 65.4% | 784.8ms |     217 | `unevalObject`            | uneval/src/internal/object.ts     |
| 65.2% | 782.3ms |     217 | `unevalObjectInternal`    | uneval/src/internal/object.ts     |
| 50.4% | 605.1ms |     185 | `unevalObjectLike`        | uneval/src/internal/object.ts     |
| 29.9% | 359.1ms |      18 | `createState`             | uneval/src/index.ts               |
| 29.5% | 354.0ms |     166 | `unevalArray`             | uneval/src/internal/collection.ts |
| 27.3% | 327.5ms |      16 | `traverse`                | uneval/src/index.ts               |
| 25.7% | 308.1ms |      17 | `traverseObject`          | uneval/src/index.ts               |
| 19.6% | 234.6ms |      52 | `unevalObjectLiteralKey`  | uneval/src/internal/object.ts     |
| 14.6% | 175.3ms |      40 | `unevalWithoutCustom`     | uneval/src/internal/index.ts      |
|  9.7% | 116.0ms |      53 | `unevalString`            | uneval/src/internal/primitive.ts  |
|  8.7% | 104.3ms |      32 | `unevalLiteral`           | uneval/src/internal/primitive.ts  |
|  7.0% |  84.2ms |      24 | `unevalNumber`            | uneval/src/internal/primitive.ts  |
|  4.0% |  47.6ms |       4 | `getType`                 | uneval/src/internal/type.ts       |
|  2.3% |  28.0ms |       1 | `Garbage Collection`      | `<native>`                        |
|  2.3% |  28.0ms |       1 | `Node.js`                 | `<native>`                        |
|  0.6% |   7.5ms |      12 | `isObject`                | uneval/src/internal/object.ts     |
|  0.2% |   2.8ms |       7 | `isRegularDataDescriptor` | uneval/src/internal/object.ts     |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `(anonymous)` (uneval/scripts/profile-pprof.ts)

|     % |  Time | Samples | Callee           | Location                     |
| ----: | ----: | ------: | ---------------- | ---------------------------- |
| 99.7% | 1.16s |     241 | `uneval`         | uneval/src/index.ts          |
|  0.0% | 0.1ms |       1 | `unevalInternal` | uneval/src/internal/index.ts |
|  0.0% | 0.1ms |       1 | `traverseObject` | uneval/src/index.ts          |
|  0.0% | 0.1ms |       1 | `createState`    | uneval/src/index.ts          |

##### `uneval` (uneval/src/index.ts)

|     % |    Time | Samples | Callee                 | Location                      |
| ----: | ------: | ------: | ---------------------- | ----------------------------- |
| 68.3% | 796.5ms |     222 | `unevalInternal`       | uneval/src/internal/index.ts  |
| 30.8% | 359.0ms |      17 | `createState`          | uneval/src/index.ts           |
|  0.0% |   0.1ms |       1 | `unevalObjectInternal` | uneval/src/internal/object.ts |

##### `unevalInternal` (uneval/src/internal/index.ts)

|     % |    Time | Samples | Callee          | Location                         |
| ----: | ------: | ------: | --------------- | -------------------------------- |
| 98.3% | 784.8ms |     217 | `unevalObject`  | uneval/src/internal/object.ts    |
| 14.5% | 116.0ms |      53 | `unevalString`  | uneval/src/internal/primitive.ts |
| 10.5% |  84.2ms |      24 | `unevalNumber`  | uneval/src/internal/primitive.ts |
|  0.9% |   7.5ms |      12 | `isObject`      | uneval/src/internal/object.ts    |
|  0.2% |   1.6ms |       7 | `unevalBoolean` | uneval/src/internal/primitive.ts |

##### `unevalObject` (uneval/src/internal/object.ts)

|     % |    Time | Samples | Callee                 | Location                          |
| ----: | ------: | ------: | ---------------------- | --------------------------------- |
| 99.6% | 781.6ms |     215 | `unevalObjectInternal` | uneval/src/internal/object.ts     |
|  0.0% |   0.1ms |       1 | `unevalArray`          | uneval/src/internal/collection.ts |

##### `unevalObjectInternal` (uneval/src/internal/object.ts)

|     % |    Time | Samples | Callee             | Location                          |
| ----: | ------: | ------: | ------------------ | --------------------------------- |
| 77.3% | 605.0ms |     184 | `unevalObjectLike` | uneval/src/internal/object.ts     |
| 45.2% | 353.8ms |     164 | `unevalArray`      | uneval/src/internal/collection.ts |
|  0.4% |   3.5ms |       6 | `unevalInternal`   | uneval/src/internal/index.ts      |

##### `unevalObjectLike` (uneval/src/internal/object.ts)

|     % |    Time | Samples | Callee                    | Location                      |
| ----: | ------: | ------: | ------------------------- | ----------------------------- |
| 51.6% | 312.0ms |     160 | `unevalInternal`          | uneval/src/internal/index.ts  |
| 38.8% | 234.6ms |      52 | `unevalObjectLiteralKey`  | uneval/src/internal/object.ts |
|  0.5% |   2.8ms |       7 | `isRegularDataDescriptor` | uneval/src/internal/object.ts |
|  0.0% |   0.1ms |       1 | `(anonymous:L#201:C#30)`  | uneval/src/internal/object.ts |

##### `createState` (uneval/src/index.ts)

|     % |    Time | Samples | Callee     | Location            |
| ----: | ------: | ------: | ---------- | ------------------- |
| 91.2% | 327.5ms |      16 | `traverse` | uneval/src/index.ts |

##### `unevalArray` (uneval/src/internal/collection.ts)

|     % |    Time | Samples | Callee               | Location                          |
| ----: | ------: | ------: | -------------------- | --------------------------------- |
| 85.6% | 303.0ms |     158 | `unevalInternal`     | uneval/src/internal/index.ts      |
|  0.2% |   0.5ms |       4 | `unevalObjectAssign` | uneval/src/internal/collection.ts |

##### `traverse` (uneval/src/index.ts)

|     % |    Time | Samples | Callee           | Location            |
| ----: | ------: | ------: | ---------------- | ------------------- |
| 94.0% | 307.8ms |      15 | `traverseObject` | uneval/src/index.ts |

##### `traverseObject` (uneval/src/index.ts)

|     % |    Time | Samples | Callee                     | Location                      |
| ----: | ------: | ------: | -------------------------- | ----------------------------- |
| 59.1% | 182.0ms |      12 | `traverse`                 | uneval/src/index.ts           |
| 15.4% |  47.6ms |       4 | `getType`                  | uneval/src/internal/type.ts   |
|  0.0% |   0.1ms |       1 | `traverseObject`           | uneval/src/index.ts           |
|  0.0% |   0.1ms |       1 | `isDefaultObjectPrototype` | uneval/src/internal/object.ts |

##### `unevalObjectLiteralKey` (uneval/src/internal/object.ts)

|     % |    Time | Samples | Callee                | Location                     |
| ----: | ------: | ------: | --------------------- | ---------------------------- |
| 74.7% | 175.3ms |      40 | `unevalWithoutCustom` | uneval/src/internal/index.ts |

##### `unevalWithoutCustom` (uneval/src/internal/index.ts)

|     % |   Time | Samples | Callee           | Location                     |
| ----: | -----: | ------: | ---------------- | ---------------------------- |
| 43.7% | 76.6ms |      25 | `unevalInternal` | uneval/src/internal/index.ts |

##### `unevalString` (uneval/src/internal/primitive.ts)

|     % |    Time | Samples | Callee          | Location                         |
| ----: | ------: | ------: | --------------- | -------------------------------- |
| 89.8% | 104.3ms |      32 | `unevalLiteral` | uneval/src/internal/primitive.ts |

##### `Node.js` (`<native>`)

|      % |   Time | Samples | Callee               | Location   |
| -----: | -----: | ------: | -------------------- | ---------- |
| 100.0% | 28.0ms |       1 | `Garbage Collection` | `<native>` |

## Hottest call stacks

Call stacks ranked by time spent in their top frame.

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.4% | 100.6ms |       1 | `traverseObject` (uneval/src/index.ts) ← `traverse` ← `createState` ← `uneval` ← `(anonymous)` (uneval/scripts/profile-pprof.ts)                                                                                                                                                                                                                                                                                                                                     |
| 7.2% |  86.4ms |       1 | `unevalObjectLike` (uneval/src/internal/object.ts) ← `unevalObjectInternal` ← `unevalObject` ← `unevalInternal` (uneval/src/internal/index.ts) ← `uneval` (uneval/src/index.ts) ← `(anonymous)` (uneval/scripts/profile-pprof.ts)                                                                                                                                                                                                                                    |
| 6.1% |  73.2ms |       1 | `traverseObject` (uneval/src/index.ts) ← `traverse` ← `traverseObject` ← `traverse` ← `createState` ← `uneval` ← `(anonymous)` (uneval/scripts/profile-pprof.ts)                                                                                                                                                                                                                                                                                                     |
| 3.9% |  46.2ms |       1 | `unevalObjectInternal` (uneval/src/internal/object.ts) ← `unevalObject` ← `unevalInternal` (uneval/src/internal/index.ts) ← `uneval` (uneval/src/index.ts) ← `(anonymous)` (uneval/scripts/profile-pprof.ts)                                                                                                                                                                                                                                                         |
| 3.7% |  44.6ms |       1 | `unevalWithoutCustom` (uneval/src/internal/index.ts) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts) ← `unevalObjectLike` ← `unevalObjectInternal` ← `unevalObject` ← `unevalInternal` (uneval/src/internal/index.ts) ← `uneval` (uneval/src/index.ts) ← `(anonymous)` (uneval/scripts/profile-pprof.ts)                                                                                                                                                  |
| 3.0% |  36.6ms |       1 | `unevalObjectLike` (uneval/src/internal/object.ts) ← `unevalObjectInternal` ← `unevalObject` ← `unevalInternal` (uneval/src/internal/index.ts) ← `unevalArray` (uneval/src/internal/collection.ts) ← `unevalObjectInternal` (uneval/src/internal/object.ts) ← `unevalObject` ← `unevalInternal` (uneval/src/internal/index.ts) ← `uneval` (uneval/src/index.ts) ← `(anonymous)` (uneval/scripts/profile-pprof.ts)                                                    |
| 2.8% |  33.4ms |       1 | `unevalObjectLike` (uneval/src/internal/object.ts) ← `unevalObjectInternal` ← `unevalObject` ← `unevalInternal` (uneval/src/internal/index.ts) ← `unevalObjectLike` (uneval/src/internal/object.ts) ← `unevalObjectInternal` ← `unevalObject` ← `unevalInternal` (uneval/src/internal/index.ts) ← `uneval` (uneval/src/index.ts) ← `(anonymous)` (uneval/scripts/profile-pprof.ts)                                                                                   |
| 2.8% |  33.1ms |       1 | `unevalArray` (uneval/src/internal/collection.ts) ← `unevalObjectInternal` (uneval/src/internal/object.ts) ← `unevalObject` ← `unevalInternal` (uneval/src/internal/index.ts) ← `uneval` (uneval/src/index.ts) ← `(anonymous)` (uneval/scripts/profile-pprof.ts)                                                                                                                                                                                                     |
| 2.6% |  31.5ms |       1 | `createState` (uneval/src/index.ts) ← `uneval` ← `(anonymous)` (uneval/scripts/profile-pprof.ts)                                                                                                                                                                                                                                                                                                                                                                     |
| 2.6% |  30.8ms |       1 | `traverse` (uneval/src/index.ts) ← `traverseObject` ← `traverse` ← `createState` ← `uneval` ← `(anonymous)` (uneval/scripts/profile-pprof.ts)                                                                                                                                                                                                                                                                                                                        |
| 2.4% |  29.3ms |       1 | `unevalLiteral` (uneval/src/internal/primitive.ts) ← `unevalString` ← `unevalInternal` (uneval/src/internal/index.ts) ← `unevalWithoutCustom` ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts) ← `unevalObjectLike` ← `unevalObjectInternal` ← `unevalObject` ← `unevalInternal` (uneval/src/internal/index.ts) ← `uneval` (uneval/src/index.ts) ← `(anonymous)` (uneval/scripts/profile-pprof.ts)                                                         |
| 2.3% |  28.0ms |       1 | `Garbage Collection` ← `Node.js`                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.3% |  27.9ms |       1 | `unevalObjectLiteralKey` (uneval/src/internal/object.ts) ← `unevalObjectLike` ← `unevalObjectInternal` ← `unevalObject` ← `unevalInternal` (uneval/src/internal/index.ts) ← `uneval` (uneval/src/index.ts) ← `(anonymous)` (uneval/scripts/profile-pprof.ts)                                                                                                                                                                                                         |
| 2.1% |  25.7ms |       1 | `traverseObject` (uneval/src/index.ts) ← `traverse` ← `traverseObject` ← `traverse` ← `traverseObject` ← `traverse` ← `createState` ← `uneval` ← `(anonymous)` (uneval/scripts/profile-pprof.ts)                                                                                                                                                                                                                                                                     |
| 2.1% |  25.1ms |       1 | `getType` (uneval/src/internal/type.ts) ← `traverseObject` (uneval/src/index.ts) ← `traverse` ← `createState` ← `uneval` ← `(anonymous)` (uneval/scripts/profile-pprof.ts)                                                                                                                                                                                                                                                                                           |
| 1.9% |  22.8ms |       1 | `unevalObjectInternal` (uneval/src/internal/object.ts) ← `unevalObject` ← `unevalInternal` (uneval/src/internal/index.ts) ← `unevalObjectLike` (uneval/src/internal/object.ts) ← `unevalObjectInternal` ← `unevalObject` ← `unevalInternal` (uneval/src/internal/index.ts) ← `uneval` (uneval/src/index.ts) ← `(anonymous)` (uneval/scripts/profile-pprof.ts)                                                                                                        |
| 1.8% |  21.3ms |       1 | `unevalObjectInternal` (uneval/src/internal/object.ts) ← `unevalObject` ← `unevalInternal` (uneval/src/internal/index.ts) ← `unevalArray` (uneval/src/internal/collection.ts) ← `unevalObjectInternal` (uneval/src/internal/object.ts) ← `unevalObject` ← `unevalInternal` (uneval/src/internal/index.ts) ← `uneval` (uneval/src/index.ts) ← `(anonymous)` (uneval/scripts/profile-pprof.ts)                                                                         |
| 1.7% |  20.5ms |       1 | `unevalWithoutCustom` (uneval/src/internal/index.ts) ← `unevalObjectLiteralKey` (uneval/src/internal/object.ts) ← `unevalObjectLike` ← `unevalObjectInternal` ← `unevalObject` ← `unevalInternal` (uneval/src/internal/index.ts) ← `unevalObjectLike` (uneval/src/internal/object.ts) ← `unevalObjectInternal` ← `unevalObject` ← `unevalInternal` (uneval/src/internal/index.ts) ← `uneval` (uneval/src/index.ts) ← `(anonymous)` (uneval/scripts/profile-pprof.ts) |
| 1.6% |  19.7ms |       1 | `traverse` (uneval/src/index.ts) ← `createState` ← `uneval` ← `(anonymous)` (uneval/scripts/profile-pprof.ts)                                                                                                                                                                                                                                                                                                                                                        |
| 1.6% |  19.6ms |       1 | `traverse` (uneval/src/index.ts) ← `traverseObject` ← `traverse` ← `traverseObject` ← `traverse` ← `createState` ← `uneval` ← `(anonymous)` (uneval/scripts/profile-pprof.ts)                                                                                                                                                                                                                                                                                        |

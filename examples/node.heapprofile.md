# Heap profile

Allocated 4.91 MB over 2,844 samples (1.73 kB per sample).

| Category          |     % |    Size | Samples |
| ----------------- | ----: | ------: | ------: |
| stdlib            | 76.6% | 3.77 MB |   2,263 |
| IDLE              |  9.3% |  458 kB |      80 |
| third-party       |  8.1% |  400 kB |     322 |
| ours              |  5.4% |  265 kB |     154 |
| BYTECODE_COMPILER |  0.2% | 12.2 kB |      11 |
| PARSER            |  0.2% | 10.2 kB |      10 |
| V8 API            |  0.1% | 4.27 kB |       4 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                   | Location                               |
| ----: | ------: | ------: | -------------------------- | -------------------------------------- |
|  9.3% |  458 kB |      80 | `(IDLE)`                   | `<unknown>`                            |
|  2.3% |  113 kB |      74 | `js-to-wasm:iii:`          | wasm://wasm/009f676a:1:2029168         |
|  1.5% | 73.1 kB |      38 | `push`                     | `<unknown>`                            |
|  1.3% | 65.6 kB |       1 | `unevalNumber`             | uneval/src/internal/primitive.ts:12:29 |
|  1.1% | 56.5 kB |      13 | `set`                      | `<unknown>`                            |
|  0.9% | 45.6 kB |      44 | `traverseObject`           | uneval/src/index.ts:204:26             |
|  0.8% | 37.1 kB |      19 | `getOwnPropertyDescriptor` | `<unknown>`                            |
|  0.3% | 15.8 kB |       9 | `Map`                      | `<unknown>`                            |
|  0.2% | 12.2 kB |      11 | `(BYTECODE_COMPILER)`      | `<unknown>`                            |
|  0.2% | 10.2 kB |      10 | `(PARSER)`                 | `<unknown>`                            |
|  0.1% | 7.14 kB |       6 | `unevalObjectInternal`     | uneval/src/internal/object.ts:68:30    |
|  0.1% | 6.18 kB |       5 | `(anonymous)`              | uneval/src/internal/type.ts:1:1        |
|  0.1% | 4.27 kB |       4 | `(V8 API)`                 | `<unknown>`                            |
|  0.1% | 3.44 kB |       3 | `unevalArray`              | uneval/src/internal/collection.ts:7:47 |
|  0.1% | 3.06 kB |       3 | `unevalInternal`           | uneval/src/internal/index.ts:25:32     |
|  0.1% | 3.02 kB |       2 | `traverse`                 | uneval/src/index.ts:164:20             |
|  0.1% | 2.73 kB |       2 | `unevalObjectLike`         | uneval/src/internal/object.ts:103:26   |
|  0.1% | 2.54 kB |       2 | `(anonymous)`              | uneval/scripts/profile.ts:1:1          |
| <0.1% | 2.29 kB |       2 | `test`                     | `<unknown>`                            |
| <0.1% | 2.03 kB |       2 | `createState`              | uneval/src/index.ts:144:21             |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `push` (`<unknown>`)

|     % |    Size | Samples | Caller             | Location                             |
| ----: | ------: | ------: | ------------------ | ------------------------------------ |
| 38.6% | 28.2 kB |      13 | `unevalObjectLike` | uneval/src/internal/object.ts:103:26 |

##### `unevalNumber` (uneval/src/internal/primitive.ts:12:29)

|      % |    Size | Samples | Caller           | Location                           |
| -----: | ------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 65.6 kB |       1 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `set` (`<unknown>`)

|     % |    Size | Samples | Caller           | Location                   |
| ----: | ------: | ------: | ---------------- | -------------------------- |
| 40.8% |   23 kB |       3 | `Map`            | `<unknown>`                |
| 15.5% | 8.78 kB |       4 | `traverseObject` | uneval/src/index.ts:204:26 |

##### `traverseObject` (uneval/src/index.ts:204:26)

|     % |    Size | Samples | Caller           | Location                   |
| ----: | ------: | ------: | ---------------- | -------------------------- |
| 53.1% | 24.2 kB |      24 | `traverseObject` | uneval/src/index.ts:204:26 |
| 39.8% | 18.1 kB |      18 | `uneval`         | uneval/src/index.ts:75:16  |
|  7.1% | 3.22 kB |       2 | `traverse`       | uneval/src/index.ts:164:20 |

##### `getOwnPropertyDescriptor` (`<unknown>`)

|      % |    Size | Samples | Caller           | Location                   |
| -----: | ------: | ------: | ---------------- | -------------------------- |
| 100.0% | 37.1 kB |      19 | `traverseObject` | uneval/src/index.ts:204:26 |

##### `Map` (`<unknown>`)

|     % |    Size | Samples | Caller        | Location                             |
| ----: | ------: | ------: | ------------- | ------------------------------------ |
| 87.1% | 13.7 kB |       7 | `createState` | uneval/src/index.ts:144:21           |
|  6.5% | 1.02 kB |       1 | `(anonymous)` | uneval/src/internal/primitive.ts:1:1 |

##### `unevalObjectInternal` (uneval/src/internal/object.ts:68:30)

|      % |    Size | Samples | Caller         | Location                            |
| -----: | ------: | ------: | -------------- | ----------------------------------- |
| 100.0% | 7.14 kB |       6 | `unevalObject` | uneval/src/internal/object.ts:20:29 |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

|      % |    Size | Samples | Caller                 | Location                            |
| -----: | ------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 3.44 kB |       3 | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30 |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

|     % |    Size | Samples | Caller             | Location                               |
| ----: | ------: | ------: | ------------------ | -------------------------------------- |
| 33.5% | 1.02 kB |       1 | `unevalObjectLike` | uneval/src/internal/object.ts:103:26   |
| 33.5% | 1.02 kB |       1 | `unevalArray`      | uneval/src/internal/collection.ts:7:47 |
| 33.0% | 1.01 kB |       1 | `uneval`           | uneval/src/index.ts:75:16              |

##### `traverse` (uneval/src/index.ts:164:20)

|      % |    Size | Samples | Caller        | Location                   |
| -----: | ------: | ------: | ------------- | -------------------------- |
| 100.0% | 3.02 kB |       2 | `createState` | uneval/src/index.ts:144:21 |

##### `unevalObjectLike` (uneval/src/internal/object.ts:103:26)

|      % |    Size | Samples | Caller                 | Location                            |
| -----: | ------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 2.73 kB |       2 | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30 |

##### `test` (`<unknown>`)

|      % |    Size | Samples | Caller        | Location                               |
| -----: | ------: | ------: | ------------- | -------------------------------------- |
| 100.0% | 2.29 kB |       2 | `(anonymous)` | uneval/src/internal/primitive.ts:51:35 |

##### `createState` (uneval/src/index.ts:144:21)

|      % |    Size | Samples | Caller   | Location                  |
| -----: | ------: | ------: | -------- | ------------------------- |
| 100.0% | 2.03 kB |       2 | `uneval` | uneval/src/index.ts:75:16 |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                   | Location                               |
| ----: | ------: | ------: | -------------------------- | -------------------------------------- |
| 10.3% |  507 kB |     304 | `(anonymous)`              | uneval/scripts/profile.ts:1:1          |
|  9.3% |  458 kB |      80 | `(IDLE)`                   | `<unknown>`                            |
|  4.6% |  226 kB |     111 | `uneval`                   | uneval/src/index.ts:75:16              |
|  2.4% |  116 kB |      77 | `js-to-wasm:iii:`          | wasm://wasm/009f676a:1:2029168         |
|  2.4% |  116 kB |      33 | `unevalInternal`           | uneval/src/internal/index.ts:25:32     |
|  2.3% |  113 kB |      31 | `unevalObjectInternal`     | uneval/src/internal/object.ts:68:30    |
|  2.1% |  104 kB |      23 | `unevalObjectLike`         | uneval/src/internal/object.ts:103:26   |
|  2.1% |  102 kB |      25 | `unevalObject`             | uneval/src/internal/object.ts:20:29    |
|  1.9% | 91.4 kB |      67 | `traverseObject`           | uneval/src/index.ts:204:26             |
|  1.5% | 73.1 kB |      38 | `push`                     | `<unknown>`                            |
|  1.4% | 67.9 kB |      36 | `createState`              | uneval/src/index.ts:144:21             |
|  1.3% | 65.6 kB |       1 | `unevalNumber`             | uneval/src/internal/primitive.ts:12:29 |
|  1.2% | 57.5 kB |      56 | `map`                      | `<unknown>`                            |
|  1.1% | 56.5 kB |      13 | `set`                      | `<unknown>`                            |
|  0.8% | 38.8 kB |      12 | `Map`                      | `<unknown>`                            |
|  0.8% | 37.1 kB |      19 | `getOwnPropertyDescriptor` | `<unknown>`                            |
|  0.4% | 20.3 kB |      14 | `unevalArray`              | uneval/src/internal/collection.ts:7:47 |
|  0.3% | 16.5 kB |      10 | `traverse`                 | uneval/src/index.ts:164:20             |
|  0.2% | 12.2 kB |      11 | `(BYTECODE_COMPILER)`      | `<unknown>`                            |
|  0.2% | 10.2 kB |      10 | `(PARSER)`                 | `<unknown>`                            |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `(anonymous)` (uneval/scripts/profile.ts:1:1)

|     % |   Size | Samples | Callee   | Location                  |
| ----: | -----: | ------: | -------- | ------------------------- |
| 44.5% | 226 kB |     111 | `uneval` | uneval/src/index.ts:75:16 |

##### `uneval` (uneval/src/index.ts:75:16)

|     % |    Size | Samples | Callee           | Location                           |
| ----: | ------: | ------: | ---------------- | ---------------------------------- |
| 51.2% |  116 kB |      33 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |
| 30.1% | 67.9 kB |      36 | `createState`    | uneval/src/index.ts:144:21         |
| 18.7% | 42.3 kB |      42 | `traverseObject` | uneval/src/index.ts:204:26         |

##### `js-to-wasm:iii:` (wasm://wasm/009f676a:1:2029168)

|    % |    Size | Samples | Callee                                       | Location                                   |
| ---: | ------: | ------: | -------------------------------------------- | ------------------------------------------ |
| 0.9% | 1.06 kB |       1 | `module2.exports.__wbindgen_object_drop_ref` | node:internal/deps/amaro/dist/index:529:58 |
| 0.9% | 1.04 kB |       1 | `module2.exports.__wbindgen_string_get`      | node:internal/deps/amaro/dist/index:532:53 |

##### `unevalInternal` (uneval/src/internal/index.ts:25:32)

|     % |    Size | Samples | Callee                 | Location                                |
| ----: | ------: | ------: | ---------------------- | --------------------------------------- |
| 88.0% |  102 kB |      25 | `unevalObject`         | uneval/src/internal/object.ts:20:29     |
| 56.7% | 65.6 kB |       1 | `unevalNumber`         | uneval/src/internal/primitive.ts:12:29  |
| 11.1% | 12.8 kB |       7 | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30     |
|  0.9% | 1.01 kB |       1 | `unevalString`         | uneval/src/internal/primitive.ts:133:29 |

##### `unevalObjectInternal` (uneval/src/internal/object.ts:68:30)

|     % |    Size | Samples | Callee             | Location                               |
| ----: | ------: | ------: | ------------------ | -------------------------------------- |
| 91.6% |  104 kB |      23 | `unevalObjectLike` | uneval/src/internal/object.ts:103:26   |
| 17.9% | 20.3 kB |      14 | `unevalArray`      | uneval/src/internal/collection.ts:7:47 |

##### `unevalObjectLike` (uneval/src/internal/object.ts:103:26)

|     % |    Size | Samples | Callee                   | Location                             |
| ----: | ------: | ------: | ------------------------ | ------------------------------------ |
| 81.1% | 84.1 kB |      10 | `unevalInternal`         | uneval/src/internal/index.ts:25:32   |
| 27.2% | 28.2 kB |      13 | `push`                   | `<unknown>`                          |
|  2.0% | 2.09 kB |       2 | `unevalObjectLiteralKey` | uneval/src/internal/object.ts:384:32 |
|  2.0% | 2.06 kB |       2 | `map`                    | `<unknown>`                          |

##### `unevalObject` (uneval/src/internal/object.ts:20:29)

|     % |   Size | Samples | Callee                 | Location                            |
| ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| 98.7% | 100 kB |      24 | `unevalObjectInternal` | uneval/src/internal/object.ts:68:30 |

##### `traverseObject` (uneval/src/index.ts:204:26)

|     % |    Size | Samples | Callee                     | Location                   |
| ----: | ------: | ------: | -------------------------- | -------------------------- |
| 54.8% | 50.1 kB |      36 | `traverseObject`           | uneval/src/index.ts:204:26 |
| 40.6% | 37.1 kB |      19 | `getOwnPropertyDescriptor` | `<unknown>`                |
| 11.2% | 10.2 kB |       6 | `traverse`                 | uneval/src/index.ts:164:20 |
|  9.6% | 8.78 kB |       4 | `set`                      | `<unknown>`                |

##### `createState` (uneval/src/index.ts:144:21)

|     % |    Size | Samples | Callee           | Location                   |
| ----: | ------: | ------: | ---------------- | -------------------------- |
| 52.5% | 35.6 kB |      17 | `traverseObject` | uneval/src/index.ts:204:26 |
| 24.3% | 16.5 kB |      10 | `traverse`       | uneval/src/index.ts:164:20 |
| 20.2% | 13.7 kB |       7 | `Map`            | `<unknown>`                |

##### `map` (`<unknown>`)

|    % |    Size | Samples | Callee        | Location                             |
| ---: | ------: | ------: | ------------- | ------------------------------------ |
| 1.8% | 1.02 kB |       1 | `(anonymous)` | uneval/src/internal/object.ts:201:30 |

##### `Map` (`<unknown>`)

|     % |  Size | Samples | Callee | Location    |
| ----: | ----: | ------: | ------ | ----------- |
| 59.4% | 23 kB |       3 | `set`  | `<unknown>` |

##### `unevalArray` (uneval/src/internal/collection.ts:7:47)

|     % |    Size | Samples | Callee           | Location                           |
| ----: | ------: | ------: | ---------------- | ---------------------------------- |
| 83.0% | 16.8 kB |      11 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `traverse` (uneval/src/index.ts:164:20)

|     % |    Size | Samples | Callee           | Location                   |
| ----: | ------: | ------: | ---------------- | -------------------------- |
| 81.7% | 13.5 kB |       8 | `traverseObject` | uneval/src/index.ts:204:26 |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|    % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.3% | 65.6 kB |       1 | `unevalNumber` (uneval/src/internal/primitive.ts:12:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1)                                                                                                                                                                                                                               |
| 0.5% | 24.8 kB |      11 | `getOwnPropertyDescriptor` ← `traverseObject` (uneval/src/index.ts:204:26) ← `traverseObject` (204:26) ← `createState` (144:21) ← `uneval` (75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1)                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.4% | 20.2 kB |      20 | `traverseObject` (uneval/src/index.ts:204:26) ← `traverseObject` (204:26) ← `uneval` (75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.4% | 18.1 kB |      18 | `traverseObject` (uneval/src/index.ts:204:26) ← `uneval` (75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.3% | 15.3 kB |       5 | `push` ← `(anonymous)` (uneval/scripts/profile.ts:1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.3% | 14.4 kB |       5 | `push` ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1)                                                                                                                                                          |
| 0.3% | 14.4 kB |       1 | `set` ← `Map`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.3% | 13.7 kB |       7 | `Map` ← `createState` (uneval/src/index.ts:144:21) ← `uneval` (75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.2% | 9.98 kB |       5 | `push` ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalArray` (uneval/src/internal/collection.ts:7:47) ← `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1) |
| 0.2% | 9.85 kB |       5 | `push` ← `(anonymous)` (uneval/scripts/profile.ts:1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.2% | 9.18 kB |       5 | `getOwnPropertyDescriptor` ← `traverseObject` (uneval/src/index.ts:204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `traverseObject` (204:26) ← `traverse` (164:20) ← `createState` (144:21) ← `uneval` (75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1)                                                                                                                                                                                                                                                                                                                   |
| 0.2% | 8.78 kB |       4 | `set` ← `traverseObject` (uneval/src/index.ts:204:26) ← `createState` (144:21) ← `uneval` (75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.2% | 7.78 kB |       4 | `push` ← `(anonymous)` (uneval/scripts/profile.ts:1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.1% | 7.21 kB |       1 | `set` ← `Map`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.1% | 7.14 kB |       6 | `unevalObjectInternal` (uneval/src/internal/object.ts:68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1)                                                                                                                                                                                                                                                                                                                                                                               |
| 0.1% | 4.03 kB |       4 | `traverseObject` (uneval/src/index.ts:204:26) ← `traverseObject` (204:26) ← `traverseObject` (204:26) ← `uneval` (75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.1% | 3.62 kB |       1 | `set` ← `(anonymous)` (uneval/scripts/profile.ts:1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.1% | 3.14 kB |       3 | `push` ← `(anonymous)` (uneval/scripts/profile.ts:1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.1% | 3.02 kB |       2 | `traverse` (uneval/src/index.ts:164:20) ← `createState` (144:21) ← `uneval` (75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.1% | 2.83 kB |       2 | `push` ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1)                                                                                                                                                                                                                                                                                                                                                                 |

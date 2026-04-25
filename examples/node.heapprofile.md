# Heap profile

Allocated 4.91 MB over 2,844 samples (1.73 kB per sample).

| Category          |     % |    Size | Samples |
| ----------------- | ----: | ------: | ------: |
| native            | 76.6% | 3.77 MB |   2,263 |
| IDLE              |  9.3% |  458 kB |      80 |
| third-party       |  8.1% |  400 kB |     322 |
| ours              |  5.4% |  265 kB |     154 |
| BYTECODE_COMPILER |  0.2% | 12.2 kB |      11 |
| PARSER            |  0.2% | 10.2 kB |      10 |
| V8 API            |  0.1% | 4.27 kB |       4 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|    % |    Size | Samples | Function                      | Location                                                                                                     |
| ---: | ------: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 9.3% |  458 kB |      80 | `(IDLE)`                      | `<native>`                                                                                                   |
| 3.0% |  148 kB |     138 | `(anonymous)`                 | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1                     |
| 2.3% |  113 kB |      74 | `js-to-wasm:iii:`             | wasm://wasm/009f676a:1:2029168                                                                               |
| 1.5% | 73.1 kB |      38 | `push`                        | `<native>`                                                                                                   |
| 1.3% | 65.6 kB |       1 | `unevalNumber`                | uneval/src/internal/primitive.ts:12:29                                                                       |
| 1.3% | 61.5 kB |       2 | `exec`                        | `<native>`                                                                                                   |
| 1.1% | 56.5 kB |      13 | `set`                         | `<native>`                                                                                                   |
| 0.9% | 45.6 kB |      44 | `traverseObject`              | uneval/src/index.ts:204:26                                                                                   |
| 0.8% | 37.1 kB |      19 | `getOwnPropertyDescriptor`    | `<native>`                                                                                                   |
| 0.5% | 26.9 kB |       3 | `keyValuePairsToObjectMapper` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3928:37                 |
| 0.5% | 23.3 kB |      16 | `(anonymous)`                 | node:fs:1:1                                                                                                  |
| 0.4% | 18.9 kB |       6 | `uniformBigInt`               | uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformBigInt.js:13:23 |
| 0.4% | 18.2 kB |      16 | `(anonymous)`                 | node:buffer:1:1                                                                                              |
| 0.3% | 15.8 kB |       9 | `Map`                         | `<native>`                                                                                                   |
| 0.3% |   14 kB |       6 | `generate`                    | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3551:10                 |
| 0.3% | 13.4 kB |      12 | `tokenizeString`              | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4239:24                 |
| 0.3% | 12.6 kB |      11 | `realpathSync`                | node:fs:2683:22                                                                                              |
| 0.2% | 12.2 kB |      11 | `(BYTECODE_COMPILER)`         | `<native>`                                                                                                   |
| 0.2% |   11 kB |       8 | `valueMapper`                 | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:474:13                  |
| 0.2% | 10.2 kB |      10 | `(PARSER)`                    | `<native>`                                                                                                   |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `(anonymous)` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1)

|     % |   Size | Samples | Caller | Location   |
| ----: | -----: | ------: | ------ | ---------- |
| 74.4% | 110 kB |     101 | `next` | `<native>` |

##### `push` (`<native>`)

|     % |    Size | Samples | Caller               | Location                                                                                     |
| ----: | ------: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 38.6% | 28.2 kB |      13 | `unevalObjectLike`   | uneval/src/internal/object.ts:103:26                                                         |
| 34.4% | 25.2 kB |      10 | `wrapper`            | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3113:9  |
| 10.6% | 7.78 kB |       4 | `generate`           | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1060:10 |
|  9.0% | 6.55 kB |       6 | `safeGenerateNItems` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3104:20 |
|  1.5% | 1.08 kB |       1 | `safePush`           | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:707:18  |

##### `unevalNumber` (uneval/src/internal/primitive.ts:12:29)

|      % |    Size | Samples | Caller           | Location                           |
| -----: | ------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 65.6 kB |       1 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |

##### `set` (`<native>`)

|     % |    Size | Samples | Caller           | Location                                                                                    |
| ----: | ------: | ------: | ---------------- | ------------------------------------------------------------------------------------------- |
| 40.8% |   23 kB |       3 | `Map`            | `<native>`                                                                                  |
| 15.5% | 8.78 kB |       4 | `traverseObject` | uneval/src/index.ts:204:26                                                                  |
|  6.4% | 3.62 kB |       1 | `safeMapSet`     | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:827:20 |
|  3.2% | 1.83 kB |       1 | `realpathSync`   | node:fs:2683:22                                                                             |

##### `traverseObject` (uneval/src/index.ts:204:26)

|     % |    Size | Samples | Caller           | Location                   |
| ----: | ------: | ------: | ---------------- | -------------------------- |
| 53.1% | 24.2 kB |      24 | `traverseObject` | uneval/src/index.ts:204:26 |
| 39.8% | 18.1 kB |      18 | `uneval`         | uneval/src/index.ts:75:16  |
|  7.1% | 3.22 kB |       2 | `traverse`       | uneval/src/index.ts:164:20 |

##### `getOwnPropertyDescriptor` (`<native>`)

|      % |    Size | Samples | Caller           | Location                   |
| -----: | ------: | ------: | ---------------- | -------------------------- |
| 100.0% | 37.1 kB |      19 | `traverseObject` | uneval/src/index.ts:204:26 |

##### `keyValuePairsToObjectMapper` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3928:37)

|     % |    Size | Samples | Caller                    | Location                                                                                    |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------- |
| 91.7% | 24.6 kB |       1 | `generate`                | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:447:10 |
|  8.3% | 2.24 kB |       2 | `mapperWithCloneIfNeeded` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:468:25 |

##### `uniformBigInt` (uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformBigInt.js:13:23)

|     % |    Size | Samples | Caller       | Location                                                                                     |
| ----: | ------: | ------: | ------------ | -------------------------------------------------------------------------------------------- |
| 94.1% | 17.8 kB |       5 | `generate`   | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3390:10 |
|  5.9% | 1.12 kB |       1 | `nextBigInt` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2245:12 |

##### `Map` (`<native>`)

|     % |    Size | Samples | Caller        | Location                             |
| ----: | ------: | ------: | ------------- | ------------------------------------ |
| 87.1% | 13.7 kB |       7 | `createState` | uneval/src/index.ts:144:21           |
|  6.5% | 1.02 kB |       1 | `(anonymous)` | uneval/src/internal/primitive.ts:1:1 |

##### `generate` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3551:10)

|      % |  Size | Samples | Caller     | Location                                                                                     |
| -----: | ----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 14 kB |       6 | `generate` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1060:10 |

##### `tokenizeString` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4239:24)

|      % |    Size | Samples | Caller                               | Location                                                                                     |
| -----: | ------: | ------: | ------------------------------------ | -------------------------------------------------------------------------------------------- |
| 100.0% | 13.4 kB |      12 | `createSlicesForStringNoConstraints` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4351:44 |

##### `valueMapper` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:474:13)

|      % |  Size | Samples | Caller     | Location                                                                                    |
| -----: | ----: | ------: | ---------- | ------------------------------------------------------------------------------------------- |
| 100.0% | 11 kB |       8 | `generate` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:447:10 |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                         | Location                                                                                     |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------------------------------------------------------------- |
| 55.8% | 2.74 MB |   1,386 | `(anonymous)`                    | `<native>`                                                                                   |
| 36.1% | 1.77 MB |     683 | `tracePromise`                   | node:diagnostics_channel:348:15                                                              |
| 13.1% |  643 kB |     427 | `next`                           | `<native>`                                                                                   |
| 10.3% |  507 kB |     304 | `(anonymous)`                    | uneval/scripts/profile.ts:1:1                                                                |
|  9.3% |  458 kB |      80 | `(IDLE)`                         | `<native>`                                                                                   |
|  4.6% |  226 kB |     111 | `uneval`                         | uneval/src/index.ts:75:16                                                                    |
|  4.2% |  208 kB |     126 | `sample`                         | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16 |
|  4.2% |  205 kB |     124 | `takeNHelper`                    | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:70:22   |
|  4.2% |  204 kB |     123 | `mapHelper`                      | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20   |
|  4.1% |  203 kB |     122 | `toss`                           | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2274:15 |
|  3.8% |  186 kB |     107 | `generate`                       | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4008:10 |
|  3.8% |  184 kB |     105 | `generate`                       | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:6919:10 |
|  3.4% |  166 kB |      89 | `generate`                       | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:447:10  |
|  3.3% |  160 kB |      84 | `generate`                       | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1060:10 |
|  3.2% |  157 kB |     145 | `(anonymous)`                    | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1     |
|  3.0% |  149 kB |     115 | `(anonymous)`                    | node:fs:1:1                                                                                  |
|  2.9% |  145 kB |      97 | `generate`                       | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3132:10 |
|  2.9% |  144 kB |      76 | `safeGenerateNItemsNoDuplicates` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3088:32 |
|  2.9% |  143 kB |      75 | `generateNItemsNoDuplicates`     | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3077:28 |
|  2.6% |  126 kB |     100 | `tossNext`                       | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2269:18 |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `(anonymous)` (`<native>`)

|    % |    Size | Samples | Callee                | Location   |
| ---: | ------: | ------: | --------------------- | ---------- |
| 1.8% | 49.9 kB |      44 | `createGlobalConsole` | `<native>` |

##### `next` (`<native>`)

|     % |   Size | Samples | Callee        | Location                                                                                     |
| ----: | -----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 78.7% | 506 kB |     303 | `(anonymous)` | uneval/scripts/profile.ts:1:1                                                                |
| 31.7% | 204 kB |     123 | `takeNHelper` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:70:22   |
| 31.7% | 204 kB |     123 | `mapHelper`   | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20   |
| 31.6% | 203 kB |     122 | `toss`        | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2274:15 |
| 18.5% | 119 kB |     108 | `(anonymous)` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1     |

##### `(anonymous)` (uneval/scripts/profile.ts:1:1)

|     % |    Size | Samples | Callee     | Location                                                                                     |
| ----: | ------: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 44.5% |  226 kB |     111 | `uneval`   | uneval/src/index.ts:75:16                                                                    |
| 40.9% |  208 kB |     126 | `sample`   | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16 |
| 14.1% | 71.5 kB |      65 | `anything` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:8168:18 |

##### `uneval` (uneval/src/index.ts:75:16)

|     % |    Size | Samples | Callee           | Location                           |
| ----: | ------: | ------: | ---------------- | ---------------------------------- |
| 51.2% |  116 kB |      33 | `unevalInternal` | uneval/src/internal/index.ts:25:32 |
| 30.1% | 67.9 kB |      36 | `createState`    | uneval/src/index.ts:144:21         |
| 18.7% | 42.3 kB |      42 | `traverseObject` | uneval/src/index.ts:204:26         |

##### `sample` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16)

|     % |    Size | Samples | Callee         | Location                                                                                     |
| ----: | ------: | ------: | -------------- | -------------------------------------------------------------------------------------------- |
| 98.4% |  204 kB |     123 | `next`         | `<native>`                                                                                   |
|  1.6% | 3.25 kB |       3 | `streamSample` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2524:22 |

##### `takeNHelper` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:70:22)

|     % |   Size | Samples | Callee | Location   |
| ----: | -----: | ------: | ------ | ---------- |
| 99.0% | 203 kB |     122 | `next` | `<native>` |

##### `mapHelper` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20)

|      % |   Size | Samples | Callee | Location   |
| -----: | -----: | ------: | ------ | ---------- |
| 100.0% | 204 kB |     123 | `next` | `<native>` |

##### `toss` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2274:15)

|     % |   Size | Samples | Callee     | Location                                                                                     |
| ----: | -----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 62.1% | 126 kB |     100 | `tossNext` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2269:18 |
| 37.9% |  77 kB |      22 | `generate` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4008:10 |

##### `generate` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4008:10)

|     % |    Size | Samples | Callee                 | Location                                                                                                 |
| ----: | ------: | ------: | ---------------------- | -------------------------------------------------------------------------------------------------------- |
| 52.9% | 98.6 kB |      78 | `safeGenerateForIndex` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4070:22             |
| 46.0% | 85.7 kB |      27 | `generate`             | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:6919:10             |
| 10.1% | 18.8 kB |       6 | `generate`             | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:447:10              |
| 10.1% | 18.8 kB |       6 | `generate`             | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4008:10             |
|  2.4% | 4.46 kB |       3 | `uniformIntInternal`   | uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:7:28 |

##### `generate` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:6919:10)

|     % |   Size | Samples | Callee     | Location                                                                                     |
| ----: | -----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 88.3% | 163 kB |      86 | `generate` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:447:10  |
| 60.2% | 111 kB |      70 | `generate` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4008:10 |
| 54.6% | 101 kB |      65 | `generate` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3132:10 |

##### `generate` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:447:10)

|     % |    Size | Samples | Callee                        | Location                                                                                     |
| ----: | ------: | ------: | ----------------------------- | -------------------------------------------------------------------------------------------- |
| 96.6% |  160 kB |      84 | `generate`                    | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1060:10 |
| 43.4% | 72.2 kB |      46 | `generate`                    | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3132:10 |
| 17.4% | 28.9 kB |      24 | `valueMapper`                 | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:474:13  |
| 15.5% | 25.7 kB |       2 | `keyValuePairsToObjectMapper` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3928:37 |
| 12.2% | 20.2 kB |       7 | `generate`                    | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3390:10 |

##### `generate` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1060:10)

|     % |    Size | Samples | Callee                           | Location                                                                                     |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------------------------------------------------------------- |
| 54.0% | 86.7 kB |      65 | `generate`                       | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3132:10 |
| 50.7% | 81.4 kB |      60 | `generate`                       | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:6919:10 |
| 36.6% | 58.8 kB |      12 | `safeGenerateNItemsNoDuplicates` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3088:32 |
| 36.0% | 57.7 kB |      11 | `generate`                       | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4008:10 |
| 10.2% | 16.3 kB |       6 | `generate`                       | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:447:10  |

##### `(anonymous)` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1)

|    % |    Size | Samples | Callee        | Location                                                                                      |
| ---: | ------: | ------: | ------------- | --------------------------------------------------------------------------------------------- |
| 5.1% | 7.98 kB |       6 | `__exportAll` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/chunk-pbuEa-1d.js:3:19 |
| 0.6% | 1.01 kB |       1 | `(anonymous)` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1995:47  |

##### `generate` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3132:10)

|     % |    Size | Samples | Callee                           | Location                                                                                     |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------------------------------------------------------------- |
| 82.7% |  120 kB |      77 | `safeGenerateNItems`             | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3104:20 |
| 59.2% | 85.6 kB |      64 | `safeGenerateNItemsNoDuplicates` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3088:32 |
| 18.1% | 26.2 kB |      11 | `wrapper`                        | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3113:9  |
|  2.2% | 3.13 kB |       3 | `applyBias`                      | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3138:11 |

##### `safeGenerateNItemsNoDuplicates` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3088:32)

|     % |   Size | Samples | Callee                       | Location                                                                                     |
| ----: | -----: | ------: | ---------------------------- | -------------------------------------------------------------------------------------------- |
| 99.3% | 143 kB |      75 | `generateNItemsNoDuplicates` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3077:28 |

##### `generateNItemsNoDuplicates` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3077:28)

|     % |    Size | Samples | Callee     | Location                                                                                     |
| ----: | ------: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 73.3% |  105 kB |      40 | `generate` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1060:10 |
| 24.5% | 35.1 kB |      32 | `next`     | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2973:6  |
|  1.4% | 2.03 kB |       2 | `tryAdd`   | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3830:8  |

##### `tossNext` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2269:18)

|     % |    Size | Samples | Callee                     | Location                                                                                                   |
| ----: | ------: | ------: | -------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 66.5% |   84 kB |      71 | `generate`                 | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1282:10               |
| 21.8% | 27.6 kB |      16 | `generate`                 | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4008:10               |
|  4.8% | 6.11 kB |       6 | `Random`                   | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2214:13               |
|  4.4% | 5.51 kB |       4 | `adaptRandomGeneratorTo8x` | uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1374:34               |
|  1.6% | 2.05 kB |       2 | `jump`                     | uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/generator/xorshift128plus.js:24:6 |

## Hottest call stacks

Call stacks ranked by bytes allocated in their top frame.

Common call stack: `(anonymous)`

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14.2% |  699 kB |       1 | `tracePromise` (node:diagnostics_channel:348:15)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  6.5% |  321 kB |     229 | `tracePromise` (node:diagnostics_channel:348:15)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  3.9% |  194 kB |      79 | `tracePromise` (node:diagnostics_channel:348:15)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.2% |  110 kB |     101 | `(anonymous)` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1) ← `next`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.8% | 88.3 kB |      55 | `js-to-wasm:iii:` (wasm://wasm/009f676a:1:2029168) ← `tracePromise` (node:diagnostics_channel:348:15)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.3% | 65.6 kB |       1 | `unevalNumber` (uneval/src/internal/primitive.ts:12:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `unevalObjectLike` (uneval/src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (uneval/src/internal/index.ts:25:32) ← `uneval` (uneval/src/index.ts:75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1) ← `next`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.2% | 60.2 kB |       1 | `exec` ← `tracePromise` (node:diagnostics_channel:348:15)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.9% | 45.2 kB |      25 | `tracePromise` (node:diagnostics_channel:348:15)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.8% | 37.9 kB |      37 | `(anonymous)` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.6% | 28.3 kB |      25 | `tracePromise` (node:diagnostics_channel:348:15)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.5% | 24.8 kB |      11 | `getOwnPropertyDescriptor` ← `traverseObject` (uneval/src/index.ts:204:26) ← `traverseObject` (204:26) ← `createState` (144:21) ← `uneval` (75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1) ← `next`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.5% | 24.6 kB |       1 | `keyValuePairsToObjectMapper` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3928:37) ← `generate` (447:10) ← `generate` (6919:10) ← `generate` (4008:10) ← `generate` (1060:10) ← `generateNItemsNoDuplicates` (3077:28) ← `safeGenerateNItemsNoDuplicates` (3088:32) ← `generate` (1060:10) ← `generate` (447:10) ← `generate` (6919:10) ← `generate` (4008:10) ← `toss` (2274:15) ← `next` ← `takeNHelper` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:70:22) ← `next` ← `mapHelper` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20) ← `next` ← `sample` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1) ← `next`                                                                                                                                                                                                                                                                                                                     |
|  0.4% |   21 kB |      16 | `js-to-wasm:iii:` (wasm://wasm/009f676a:1:2029168) ← `tracePromise` (node:diagnostics_channel:348:15)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.4% | 20.2 kB |       6 | `tracePromise` (node:diagnostics_channel:348:15)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.4% | 20.2 kB |      20 | `traverseObject` (uneval/src/index.ts:204:26) ← `traverseObject` (204:26) ← `uneval` (75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1) ← `next`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.4% | 18.1 kB |      18 | `traverseObject` (uneval/src/index.ts:204:26) ← `uneval` (75:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1) ← `next`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.4% | 18.1 kB |      17 | `tracePromise` (node:diagnostics_channel:348:15)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.4% | 17.8 kB |       5 | `uniformBigInt` (uneval/node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformBigInt.js:13:23) ← `generate` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3390:10) ← `generate` (447:10) ← `generate` (4008:10) ← `generate` (4008:10) ← `generate` (1060:10) ← `generateNItemsNoDuplicates` (3077:28) ← `safeGenerateNItemsNoDuplicates` (3088:32) ← `generate` (1060:10) ← `generate` (447:10) ← `generate` (6919:10) ← `generate` (4008:10) ← `generate` (6919:10) ← `next` (2973:6) ← `safeGenerateNItems` (3104:20) ← `generate` (3132:10) ← `generate` (6919:10) ← `generate` (4008:10) ← `toss` (2274:15) ← `next` ← `takeNHelper` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:70:22) ← `next` ← `mapHelper` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20) ← `next` ← `sample` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1) ← `next`                                                        |
|  0.3% | 16.2 kB |      16 | `tracePromise` (node:diagnostics_channel:348:15)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.3% | 15.3 kB |       5 | `push` ← `wrapper` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3113:9) ← `generate` (3132:10) ← `generate` (447:10) ← `generate` (1060:10) ← `generateNItemsNoDuplicates` (3077:28) ← `safeGenerateNItemsNoDuplicates` (3088:32) ← `generate` (1060:10) ← `generate` (447:10) ← `generate` (6919:10) ← `generate` (4008:10) ← `generate` (1060:10) ← `generateNItemsNoDuplicates` (3077:28) ← `safeGenerateNItemsNoDuplicates` (3088:32) ← `generate` (1060:10) ← `generate` (447:10) ← `generate` (6919:10) ← `generate` (4008:10) ← `generate` (6919:10) ← `next` (2973:6) ← `safeGenerateNItems` (3104:20) ← `generate` (3132:10) ← `generate` (6919:10) ← `generate` (4008:10) ← `toss` (2274:15) ← `next` ← `takeNHelper` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:70:22) ← `next` ← `mapHelper` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20) ← `next` ← `sample` (uneval/node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16) ← `(anonymous)` (uneval/scripts/profile.ts:1:1) ← `next` |

# Heap profile

Allocated 4.91 MB over 2844 samples (1.73 kB per sample).

| Category          | Total % | Total   |
| ----------------- | ------- | ------- |
| native            | 78.9%   | 3.88 MB |
| IDLE              | 9.3%    | 458 kB  |
| third-party       | 8.1%    | 400 kB  |
| ours              | 3.1%    | 152 kB  |
| BYTECODE_COMPILER | 0.2%    | 12.2 kB |
| PARSER            | 0.2%    | 10.2 kB |
| V8 API            | 0.1%    | 4.27 kB |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

| Self % |    Self | Total % |   Total | Function                      | Location                                                                                              |
| -----: | ------: | ------: | ------: | ----------------------------- | ----------------------------------------------------------------------------------------------------- |
|   9.3% |  458 kB |    9.3% |  458 kB | `(IDLE)`                      | [unknown]                                                                                             |
|   3.0% |  148 kB |    3.2% |  157 kB | `(anonymous)`                 | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1                     |
|   2.3% |  113 kB |    2.4% |  116 kB | `js-to-wasm:iii:`             | wasm://wasm/009f676a                                                                                  |
|   1.5% | 73.1 kB |    1.5% | 73.1 kB | `push`                        | [unknown]                                                                                             |
|   1.3% | 65.6 kB |    1.3% | 65.6 kB | `unevalNumber`                | src/internal/primitive.ts:12:29                                                                       |
|   1.3% | 61.5 kB |    1.3% | 61.5 kB | `exec`                        | [unknown]                                                                                             |
|   1.1% | 56.5 kB |    1.1% | 56.5 kB | `set`                         | [unknown]                                                                                             |
|   0.9% | 45.6 kB |    1.9% | 91.4 kB | `traverseObject`              | src/index.ts:204:26                                                                                   |
|   0.8% | 37.1 kB |    0.8% | 37.1 kB | `getOwnPropertyDescriptor`    | [unknown]                                                                                             |
|   0.5% | 26.9 kB |    0.6% |   28 kB | `keyValuePairsToObjectMapper` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3928:37                 |
|   0.5% | 23.3 kB |    3.0% |  149 kB | `(anonymous)`                 | node:fs                                                                                               |
|   0.4% | 18.9 kB |    0.4% | 18.9 kB | `uniformBigInt`               | node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformBigInt.js:13:23 |
|   0.4% | 18.2 kB |    1.3% | 65.5 kB | `(anonymous)`                 | node:buffer                                                                                           |
|   0.3% | 15.8 kB |    0.8% | 38.8 kB | `Map`                         | [unknown]                                                                                             |
|   0.3% |   14 kB |    0.3% |   14 kB | `generate`                    | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3551:10                 |
|   0.3% | 13.4 kB |    0.6% | 27.3 kB | `tokenizeString`              | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4239:24                 |
|   0.3% | 12.6 kB |    0.5% | 24.8 kB | `realpathSync`                | node:fs                                                                                               |
|   0.2% | 12.2 kB |    0.2% | 12.2 kB | `(BYTECODE_COMPILER)`         | [unknown]                                                                                             |
|   0.2% |   11 kB |    0.6% | 28.9 kB | `valueMapper`                 | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:474:13                  |
|   0.2% | 10.2 kB |    0.2% | 10.2 kB | `(PARSER)`                    | [unknown]                                                                                             |

#### Callers

Callers ranked by contribution to each function's self size.

##### `(anonymous)` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1)

| Self % |   Self | Caller | Location  |
| -----: | -----: | ------ | --------- |
|  74.4% | 110 kB | `next` | [unknown] |

##### `push` ([unknown])

| Self % |    Self | Caller               | Location                                                                              |
| -----: | ------: | -------------------- | ------------------------------------------------------------------------------------- |
|  38.6% | 28.2 kB | `unevalObjectLike`   | src/internal/object.ts:103:26                                                         |
|  34.4% | 25.2 kB | `wrapper`            | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3113:9  |
|  10.6% | 7.78 kB | `generate`           | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1060:10 |
|   9.0% | 6.55 kB | `safeGenerateNItems` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3104:20 |
|   1.5% | 1.08 kB | `safePush`           | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:707:18  |

##### `unevalNumber` (src/internal/primitive.ts:12:29)

| Self % |    Self | Caller           | Location                    |
| -----: | ------: | ---------------- | --------------------------- |
| 100.0% | 65.6 kB | `unevalInternal` | src/internal/index.ts:25:32 |

##### `set` ([unknown])

| Self % |    Self | Caller           | Location                                                                             |
| -----: | ------: | ---------------- | ------------------------------------------------------------------------------------ |
|  40.8% |   23 kB | `Map`            | [unknown]                                                                            |
|  15.5% | 8.78 kB | `traverseObject` | src/index.ts:204:26                                                                  |
|   6.4% | 3.62 kB | `safeMapSet`     | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:827:20 |
|   3.2% | 1.83 kB | `realpathSync`   | node:fs                                                                              |

##### `traverseObject` (src/index.ts:204:26)

| Self % |    Self | Caller           | Location            |
| -----: | ------: | ---------------- | ------------------- |
|  53.1% | 24.2 kB | `traverseObject` | src/index.ts:204:26 |
|  39.8% | 18.1 kB | `uneval`         | src/index.ts:75:16  |
|   7.1% | 3.22 kB | `traverse`       | src/index.ts:164:20 |

##### `getOwnPropertyDescriptor` ([unknown])

| Self % |    Self | Caller           | Location            |
| -----: | ------: | ---------------- | ------------------- |
| 100.0% | 37.1 kB | `traverseObject` | src/index.ts:204:26 |

##### `keyValuePairsToObjectMapper` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3928:37)

| Self % |    Self | Caller                    | Location                                                                             |
| -----: | ------: | ------------------------- | ------------------------------------------------------------------------------------ |
|  91.7% | 24.6 kB | `generate`                | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:447:10 |
|   8.3% | 2.24 kB | `mapperWithCloneIfNeeded` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:468:25 |

##### `uniformBigInt` (node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformBigInt.js:13:23)

| Self % |    Self | Caller       | Location                                                                              |
| -----: | ------: | ------------ | ------------------------------------------------------------------------------------- |
|  94.1% | 17.8 kB | `generate`   | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3390:10 |
|   5.9% | 1.12 kB | `nextBigInt` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2245:12 |

##### `Map` ([unknown])

| Self % |    Self | Caller        | Location                      |
| -----: | ------: | ------------- | ----------------------------- |
|  87.1% | 13.7 kB | `createState` | src/index.ts:144:21           |
|   6.5% | 1.02 kB | `(anonymous)` | src/internal/primitive.ts:1:1 |

##### `generate` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3551:10)

| Self % |  Self | Caller     | Location                                                                              |
| -----: | ----: | ---------- | ------------------------------------------------------------------------------------- |
| 100.0% | 14 kB | `generate` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1060:10 |

##### `tokenizeString` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4239:24)

| Self % |    Self | Caller                               | Location                                                                              |
| -----: | ------: | ------------------------------------ | ------------------------------------------------------------------------------------- |
| 100.0% | 13.4 kB | `createSlicesForStringNoConstraints` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4351:44 |

##### `valueMapper` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:474:13)

| Self % |  Self | Caller     | Location                                                                             |
| -----: | ----: | ---------- | ------------------------------------------------------------------------------------ |
| 100.0% | 11 kB | `generate` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:447:10 |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

| Total % |   Total | Self % |    Self | Function                         | Location                                                                              |
| ------: | ------: | -----: | ------: | -------------------------------- | ------------------------------------------------------------------------------------- |
|   55.8% | 2.74 MB |   0.1% |  6.3 kB | `(anonymous)`                    | [unknown]                                                                             |
|   36.1% | 1.77 MB |   0.0% | 1.01 kB | `tracePromise`                   | node:diagnostics_channel                                                              |
|   13.1% |  643 kB |   0.0% | 1.08 kB | `next`                           | [unknown]                                                                             |
|   10.3% |  507 kB |   0.1% | 2.54 kB | `(anonymous)`                    | scripts/profile.ts:1:1                                                                |
|    9.3% |  458 kB |   9.3% |  458 kB | `(IDLE)`                         | [unknown]                                                                             |
|    4.6% |  226 kB |   0.0% |     0 B | `uneval`                         | src/index.ts:75:16                                                                    |
|    4.2% |  208 kB |   0.0% |     0 B | `sample`                         | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16 |
|    4.2% |  205 kB |   0.0% | 2.07 kB | `takeNHelper`                    | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:70:22   |
|    4.2% |  204 kB |   0.0% |     0 B | `mapHelper`                      | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20   |
|    4.1% |  203 kB |   0.0% |     0 B | `toss`                           | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2274:15 |
|    3.8% |  186 kB |   0.0% | 2.08 kB | `generate`                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4008:10 |
|    3.8% |  184 kB |   0.0% | 1.04 kB | `generate`                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:6919:10 |
|    3.4% |  166 kB |   0.0% | 2.08 kB | `generate`                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:447:10  |
|    3.3% |  160 kB |   0.0% | 1.02 kB | `generate`                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1060:10 |
|    3.2% |  157 kB |   3.0% |  148 kB | `(anonymous)`                    | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1     |
|    3.0% |  149 kB |   0.5% | 23.3 kB | `(anonymous)`                    | node:fs                                                                               |
|    2.9% |  145 kB |   0.1% | 4.33 kB | `generate`                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3132:10 |
|    2.9% |  144 kB |   0.0% | 1.06 kB | `safeGenerateNItemsNoDuplicates` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3088:32 |
|    2.9% |  143 kB |   0.0% | 1.15 kB | `generateNItemsNoDuplicates`     | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3077:28 |
|    2.6% |  126 kB |   0.0% | 1.04 kB | `tossNext`                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2269:18 |

#### Callees

Callees ranked by contribution to each function's total size.

##### `(anonymous)` ([unknown])

| Total % |   Total | Callee                | Location  |
| ------: | ------: | --------------------- | --------- |
|    1.8% | 49.9 kB | `createGlobalConsole` | [unknown] |

##### `next` ([unknown])

| Total % |  Total | Callee        | Location                                                                              |
| ------: | -----: | ------------- | ------------------------------------------------------------------------------------- |
|   78.7% | 506 kB | `(anonymous)` | scripts/profile.ts:1:1                                                                |
|   31.7% | 204 kB | `takeNHelper` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:70:22   |
|   31.7% | 204 kB | `mapHelper`   | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20   |
|   31.6% | 203 kB | `toss`        | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2274:15 |
|   18.5% | 119 kB | `(anonymous)` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1     |

##### `(anonymous)` (scripts/profile.ts:1:1)

| Total % |   Total | Callee     | Location                                                                              |
| ------: | ------: | ---------- | ------------------------------------------------------------------------------------- |
|   44.5% |  226 kB | `uneval`   | src/index.ts:75:16                                                                    |
|   40.9% |  208 kB | `sample`   | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16 |
|   14.1% | 71.5 kB | `anything` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:8168:18 |

##### `uneval` (src/index.ts:75:16)

| Total % |   Total | Callee           | Location                    |
| ------: | ------: | ---------------- | --------------------------- |
|   51.2% |  116 kB | `unevalInternal` | src/internal/index.ts:25:32 |
|   30.1% | 67.9 kB | `createState`    | src/index.ts:144:21         |
|   18.7% | 42.3 kB | `traverseObject` | src/index.ts:204:26         |

##### `sample` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16)

| Total % |   Total | Callee         | Location                                                                              |
| ------: | ------: | -------------- | ------------------------------------------------------------------------------------- |
|   98.4% |  204 kB | `next`         | [unknown]                                                                             |
|    1.6% | 3.25 kB | `streamSample` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2524:22 |

##### `takeNHelper` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:70:22)

| Total % |  Total | Callee | Location  |
| ------: | -----: | ------ | --------- |
|   99.0% | 203 kB | `next` | [unknown] |

##### `mapHelper` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20)

| Total % |  Total | Callee | Location  |
| ------: | -----: | ------ | --------- |
|  100.0% | 204 kB | `next` | [unknown] |

##### `toss` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2274:15)

| Total % |  Total | Callee     | Location                                                                              |
| ------: | -----: | ---------- | ------------------------------------------------------------------------------------- |
|   62.1% | 126 kB | `tossNext` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2269:18 |
|   37.9% |  77 kB | `generate` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4008:10 |

##### `generate` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4008:10)

| Total % |   Total | Callee                 | Location                                                                                          |
| ------: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------- |
|   52.9% | 98.6 kB | `safeGenerateForIndex` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4070:22             |
|   46.0% | 85.7 kB | `generate`             | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:6919:10             |
|   10.1% | 18.8 kB | `generate`             | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:447:10              |
|   10.1% | 18.8 kB | `generate`             | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4008:10             |
|    2.4% | 4.46 kB | `uniformIntInternal`   | node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformInt.js:7:28 |

##### `generate` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:6919:10)

| Total % |  Total | Callee     | Location                                                                              |
| ------: | -----: | ---------- | ------------------------------------------------------------------------------------- |
|   88.3% | 163 kB | `generate` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:447:10  |
|   60.2% | 111 kB | `generate` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4008:10 |
|   54.6% | 101 kB | `generate` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3132:10 |

##### `generate` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:447:10)

| Total % |   Total | Callee                        | Location                                                                              |
| ------: | ------: | ----------------------------- | ------------------------------------------------------------------------------------- |
|   96.6% |  160 kB | `generate`                    | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1060:10 |
|   43.4% | 72.2 kB | `generate`                    | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3132:10 |
|   17.4% | 28.9 kB | `valueMapper`                 | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:474:13  |
|   15.5% | 25.7 kB | `keyValuePairsToObjectMapper` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3928:37 |
|   12.2% | 20.2 kB | `generate`                    | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3390:10 |

##### `generate` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1060:10)

| Total % |   Total | Callee                           | Location                                                                              |
| ------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------- |
|   54.0% | 86.7 kB | `generate`                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3132:10 |
|   50.7% | 81.4 kB | `generate`                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:6919:10 |
|   36.6% | 58.8 kB | `safeGenerateNItemsNoDuplicates` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3088:32 |
|   36.0% | 57.7 kB | `generate`                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4008:10 |
|   10.2% | 16.3 kB | `generate`                       | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:447:10  |

##### `(anonymous)` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1)

| Total % |   Total | Callee        | Location                                                                               |
| ------: | ------: | ------------- | -------------------------------------------------------------------------------------- |
|    5.1% | 7.98 kB | `__exportAll` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/chunk-pbuEa-1d.js:3:19 |
|    0.6% | 1.01 kB | `(anonymous)` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1995:47  |

##### `generate` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3132:10)

| Total % |   Total | Callee                           | Location                                                                              |
| ------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------- |
|   82.7% |  120 kB | `safeGenerateNItems`             | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3104:20 |
|   59.2% | 85.6 kB | `safeGenerateNItemsNoDuplicates` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3088:32 |
|   18.1% | 26.2 kB | `wrapper`                        | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3113:9  |
|    2.2% | 3.13 kB | `applyBias`                      | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3138:11 |

##### `safeGenerateNItemsNoDuplicates` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3088:32)

| Total % |  Total | Callee                       | Location                                                                              |
| ------: | -----: | ---------------------------- | ------------------------------------------------------------------------------------- |
|   99.3% | 143 kB | `generateNItemsNoDuplicates` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3077:28 |

##### `generateNItemsNoDuplicates` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3077:28)

| Total % |   Total | Callee     | Location                                                                              |
| ------: | ------: | ---------- | ------------------------------------------------------------------------------------- |
|   73.3% |  105 kB | `generate` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1060:10 |
|   24.5% | 35.1 kB | `next`     | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2973:6  |
|    1.4% | 2.03 kB | `tryAdd`   | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3830:8  |

##### `tossNext` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2269:18)

| Total % |   Total | Callee                     | Location                                                                                            |
| ------: | ------: | -------------------------- | --------------------------------------------------------------------------------------------------- |
|   66.5% |   84 kB | `generate`                 | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1282:10               |
|   21.8% | 27.6 kB | `generate`                 | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4008:10               |
|    4.8% | 6.11 kB | `Random`                   | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2214:13               |
|    4.4% | 5.51 kB | `adaptRandomGeneratorTo8x` | node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1374:34               |
|    1.6% | 2.05 kB | `jump`                     | node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/generator/xorshift128plus.js:24:6 |

## Hottest call stacks

Call stacks ranked by bytes allocated in their top frame.

| Self % |    Self | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  31.7% | 1.56 MB | `tracePromise` (node:diagnostics_channel) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|   2.4% |  116 kB | `js-to-wasm:iii:` (wasm://wasm/009f676a) ← `tracePromise` (node:diagnostics_channel) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|   2.2% |  110 kB | `(anonymous)` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1) ← `next` ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|   1.3% | 65.6 kB | `unevalNumber` (src/internal/primitive.ts:12:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `unevalObjectLike` (src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `uneval` (src/index.ts:75:16) ← `(anonymous)` (scripts/profile.ts:1:1) ← `next` ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|   1.3% | 61.5 kB | `exec` ← `tracePromise` (node:diagnostics_channel) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|   0.9% | 44.7 kB | `createGlobalConsole` ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|   0.8% | 37.9 kB | `(anonymous)` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:1:1) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|   0.5% | 24.8 kB | `getOwnPropertyDescriptor` ← `traverseObject` (src/index.ts:204:26) ← `traverseObject` (204:26) ← `createState` (144:21) ← `uneval` (75:16) ← `(anonymous)` (scripts/profile.ts:1:1) ← `next` ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|   0.5% | 24.6 kB | `keyValuePairsToObjectMapper` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3928:37) ← `generate` (447:10) ← `generate` (6919:10) ← `generate` (4008:10) ← `generate` (1060:10) ← `generateNItemsNoDuplicates` (3077:28) ← `safeGenerateNItemsNoDuplicates` (3088:32) ← `generate` (1060:10) ← `generate` (447:10) ← `generate` (6919:10) ← `generate` (4008:10) ← `toss` (2274:15) ← `next` ← `takeNHelper` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:70:22) ← `next` ← `mapHelper` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20) ← `next` ← `sample` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16) ← `(anonymous)` (scripts/profile.ts:1:1) ← `next` ← `(anonymous)`                                                                                                                                                                                                                                                                                                                     |
|   0.4% | 20.2 kB | `traverseObject` (src/index.ts:204:26) ← `traverseObject` (204:26) ← `uneval` (75:16) ← `(anonymous)` (scripts/profile.ts:1:1) ← `next` ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|   0.4% |   19 kB | `(anonymous)` (node:util) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|   0.4% | 18.1 kB | `traverseObject` (src/index.ts:204:26) ← `uneval` (75:16) ← `(anonymous)` (scripts/profile.ts:1:1) ← `next` ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|   0.4% | 17.8 kB | `uniformBigInt` (node_modules/.pnpm/pure-rand@8.4.0/node_modules/pure-rand/lib/esm/distribution/uniformBigInt.js:13:23) ← `generate` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3390:10) ← `generate` (447:10) ← `generate` (4008:10) ← `generate` (4008:10) ← `generate` (1060:10) ← `generateNItemsNoDuplicates` (3077:28) ← `safeGenerateNItemsNoDuplicates` (3088:32) ← `generate` (1060:10) ← `generate` (447:10) ← `generate` (6919:10) ← `generate` (4008:10) ← `generate` (6919:10) ← `next` (2973:6) ← `safeGenerateNItems` (3104:20) ← `generate` (3132:10) ← `generate` (6919:10) ← `generate` (4008:10) ← `toss` (2274:15) ← `next` ← `takeNHelper` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:70:22) ← `next` ← `mapHelper` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20) ← `next` ← `sample` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16) ← `(anonymous)` (scripts/profile.ts:1:1) ← `next` ← `(anonymous)`                                                               |
|   0.3% | 15.3 kB | `push` ← `wrapper` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3113:9) ← `generate` (3132:10) ← `generate` (447:10) ← `generate` (1060:10) ← `generateNItemsNoDuplicates` (3077:28) ← `safeGenerateNItemsNoDuplicates` (3088:32) ← `generate` (1060:10) ← `generate` (447:10) ← `generate` (6919:10) ← `generate` (4008:10) ← `generate` (1060:10) ← `generateNItemsNoDuplicates` (3077:28) ← `safeGenerateNItemsNoDuplicates` (3088:32) ← `generate` (1060:10) ← `generate` (447:10) ← `generate` (6919:10) ← `generate` (4008:10) ← `generate` (6919:10) ← `next` (2973:6) ← `safeGenerateNItems` (3104:20) ← `generate` (3132:10) ← `generate` (6919:10) ← `generate` (4008:10) ← `toss` (2274:15) ← `next` ← `takeNHelper` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:70:22) ← `next` ← `mapHelper` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20) ← `next` ← `sample` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16) ← `(anonymous)` (scripts/profile.ts:1:1) ← `next` ← `(anonymous)` |
|   0.3% | 14.4 kB | `push` ← `unevalObjectLike` (src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `unevalObjectLike` (src/internal/object.ts:103:26) ← `unevalObjectInternal` (68:30) ← `unevalObject` (20:29) ← `unevalInternal` (src/internal/index.ts:25:32) ← `uneval` (src/index.ts:75:16) ← `(anonymous)` (scripts/profile.ts:1:1) ← `next` ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|   0.3% | 14.4 kB | `set` ← `Map`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|   0.3% |   14 kB | `generate` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:3551:10) ← `generate` (1060:10) ← `generate` (447:10) ← `generate` (6919:10) ← `generate` (4008:10) ← `toss` (2274:15) ← `next` ← `takeNHelper` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:70:22) ← `next` ← `mapHelper` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20) ← `next` ← `sample` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16) ← `(anonymous)` (scripts/profile.ts:1:1) ← `next` ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|   0.3% | 13.7 kB | `Map` ← `createState` (src/index.ts:144:21) ← `uneval` (75:16) ← `(anonymous)` (scripts/profile.ts:1:1) ← `next` ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|   0.3% | 13.4 kB | `tokenizeString` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:4239:24) ← `createSlicesForStringNoConstraints` (4351:44) ← `createSlicesForString` (4360:31) ← `string` (5491:16) ← `toQualifiedObjectConstraints` (8108:38) ← `anything` (8168:18) ← `(anonymous)` (scripts/profile.ts:1:1) ← `next` ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|   0.2% | 10.2 kB | `next` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2973:6) ← `safeGenerateNItems` (3104:20) ← `generate` (3132:10) ← `generate` (447:10) ← `generate` (6919:10) ← `generate` (1060:10) ← `generateNItemsNoDuplicates` (3077:28) ← `safeGenerateNItemsNoDuplicates` (3088:32) ← `generate` (3132:10) ← `generate` (1060:10) ← `generate` (447:10) ← `generate` (6919:10) ← `safeGenerateForIndex` (4070:22) ← `generate` (4008:10) ← `generate` (1282:10) ← `tossNext` (2269:18) ← `toss` (2274:15) ← `next` ← `takeNHelper` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:70:22) ← `next` ← `mapHelper` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:58:20) ← `next` ← `sample` (node_modules/.pnpm/fast-check@4.6.0/node_modules/fast-check/lib/fast-check.js:2551:16) ← `(anonymous)` (scripts/profile.ts:1:1) ← `next` ← `(anonymous)`                                                                                                                                                                                                    |

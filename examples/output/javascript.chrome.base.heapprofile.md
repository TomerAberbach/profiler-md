# Heap profile

Allocated 5.18 MiB over 221 samples (24 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Ours             | 61.6% | 3.19 MiB |     197 |
| Standard library | 17.2% |  913 KiB |       2 |
| Native           | 14.9% |  788 KiB |       1 |
| Compiler         |  4.5% |  241 KiB |      15 |
| Unknown          |  1.8% | 96.2 KiB |       6 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                       | Location            |
| ----: | -------: | ------: | ------------------------------ | ------------------- |
| 61.6% | 3.19 MiB |     197 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |
| 16.9% |  896 KiB |       1 | `set`                          | `<unknown>`         |
| 14.9% |  788 KiB |       1 | `(v8 api)`                     | `<unknown>`         |
|  4.5% |  241 KiB |      15 | `(compiler)`                   | `<unknown>`         |
|  1.8% | 96.2 KiB |       6 | `(anonymous)`                  | `<unknown>`         |
|  0.3% | 16.9 KiB |       1 | `split`                        | `<unknown>`         |

#### Categories

##### Ours

|     % |     Size | Samples | Function                       | Location            |
| ----: | -------: | ------: | ------------------------------ | ------------------- |
| 61.6% | 3.19 MiB |     197 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### Standard library

|     % |     Size | Samples | Function | Location    |
| ----: | -------: | ------: | -------- | ----------- |
| 16.9% |  896 KiB |       1 | `set`    | `<unknown>` |
|  0.3% | 16.9 KiB |       1 | `split`  | `<unknown>` |

##### Native

|     % |    Size | Samples | Function   | Location    |
| ----: | ------: | ------: | ---------- | ----------- |
| 14.9% | 788 KiB |       1 | `(v8 api)` | `<unknown>` |

##### Compiler

|    % |    Size | Samples | Function     | Location    |
| ---: | ------: | ------: | ------------ | ----------- |
| 4.5% | 241 KiB |      15 | `(compiler)` | `<unknown>` |

##### Unknown

|    % |     Size | Samples | Function      | Location    |
| ---: | -------: | ------: | ------------- | ----------- |
| 1.8% | 96.2 KiB |       6 | `(anonymous)` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|      % |     Size | Samples | Caller        | Location    |
| -----: | -------: | ------: | ------------- | ----------- |
| 100.0% | 3.19 MiB |     197 | `(anonymous)` | `<unknown>` |

##### `set` (`<unknown>`)

|      % |    Size | Samples | Caller                         | Location            |
| -----: | ------: | ------: | ------------------------------ | ------------------- |
| 100.0% | 896 KiB |       1 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `split` (`<unknown>`)

|      % |     Size | Samples | Caller     | Location             |
| -----: | -------: | ------: | ---------- | -------------------- |
| 100.0% | 16.9 KiB |       1 | `tokenize` | `workload.mjs:10:20` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                       | Location             |
| ----: | -------: | ------: | ------------------------------ | -------------------- |
| 80.6% | 4.17 MiB |     205 | `(anonymous)`                  | `<unknown>`          |
| 78.8% | 4.08 MiB |     199 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
| 16.9% |  896 KiB |       1 | `set`                          | `<unknown>`          |
| 14.9% |  788 KiB |       1 | `(v8 api)`                     | `<unknown>`          |
|  4.5% |  241 KiB |      15 | `(compiler)`                   | `<unknown>`          |
|  0.3% | 16.9 KiB |       1 | `split`                        | `<unknown>`          |
|  0.3% | 16.9 KiB |       1 | `tokenize`                     | `workload.mjs:10:20` |
|  0.3% | 16.9 KiB |       1 | `scoreStatus`                  | `workload.mjs:11:23` |

#### Categories

##### Ours

|     % |     Size | Samples | Function                       | Location             |
| ----: | -------: | ------: | ------------------------------ | -------------------- |
| 78.8% | 4.08 MiB |     199 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
|  0.3% | 16.9 KiB |       1 | `tokenize`                     | `workload.mjs:10:20` |
|  0.3% | 16.9 KiB |       1 | `scoreStatus`                  | `workload.mjs:11:23` |

##### Standard library

|     % |     Size | Samples | Function | Location    |
| ----: | -------: | ------: | -------- | ----------- |
| 16.9% |  896 KiB |       1 | `set`    | `<unknown>` |
|  0.3% | 16.9 KiB |       1 | `split`  | `<unknown>` |

##### Native

|     % |    Size | Samples | Function   | Location    |
| ----: | ------: | ------: | ---------- | ----------- |
| 14.9% | 788 KiB |       1 | `(v8 api)` | `<unknown>` |

##### Compiler

|    % |    Size | Samples | Function     | Location    |
| ---: | ------: | ------: | ------------ | ----------- |
| 4.5% | 241 KiB |      15 | `(compiler)` | `<unknown>` |

##### Unknown

|     % |     Size | Samples | Function      | Location    |
| ----: | -------: | ------: | ------------- | ----------- |
| 80.6% | 4.17 MiB |     205 | `(anonymous)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`<unknown>`)

|     % |     Size | Samples | Callee                         | Location            |
| ----: | -------: | ------: | ------------------------------ | ------------------- |
| 97.7% | 4.08 MiB |     199 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|     % |     Size | Samples | Callee        | Location             |
| ----: | -------: | ------: | ------------- | -------------------- |
| 21.4% |  896 KiB |       1 | `set`         | `<unknown>`          |
|  0.4% | 16.9 KiB |       1 | `scoreStatus` | `workload.mjs:11:23` |

##### `tokenize` (`workload.mjs:10:20`)

|      % |     Size | Samples | Callee  | Location    |
| -----: | -------: | ------: | ------- | ----------- |
| 100.0% | 16.9 KiB |       1 | `split` | `<unknown>` |

##### `scoreStatus` (`workload.mjs:11:23`)

|      % |     Size | Samples | Callee     | Location             |
| -----: | -------: | ------: | ---------- | -------------------- |
| 100.0% | 16.9 KiB |       1 | `tokenize` | `workload.mjs:10:20` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `(anonymous)`

|     % |     Size | Samples | Call stack                                                                                                  |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------------------- |
| 61.6% | 3.19 MiB |     197 | `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)                                                        |
| 16.9% |  896 KiB |       1 | `set` ← `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)                                                |
|  0.3% | 16.9 KiB |       1 | `split` ← `tokenize` (`workload.mjs:10:20`) ← `scoreStatus` (11:23) ← `globalThis.buildAndRetainDom` (1:32) |

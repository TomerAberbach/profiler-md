# Heap profile

Allocated 5.15 MiB over 219 samples (24.1 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Ours             | 62.3% |  3.2 MiB |     198 |
| Standard library | 17.3% |  912 KiB |       2 |
| Native           | 15.0% |  788 KiB |       1 |
| Compiler         |  4.6% |  241 KiB |      15 |
| Unknown          |  0.9% | 48.3 KiB |       3 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                       | Location            |
| ----: | -------: | ------: | ------------------------------ | ------------------- |
| 62.3% |  3.2 MiB |     198 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |
| 17.0% |  896 KiB |       1 | `set`                          | `<unknown>`         |
| 15.0% |  788 KiB |       1 | `(v8 api)`                     | `<unknown>`         |
|  4.6% |  241 KiB |      15 | `(compiler)`                   | `<unknown>`         |
|  0.9% | 48.3 KiB |       3 | `(anonymous)`                  | `<unknown>`         |
|  0.3% |   16 KiB |       1 | `values`                       | `<unknown>`         |

#### Categories

##### Ours

|     % |    Size | Samples | Function                       | Location            |
| ----: | ------: | ------: | ------------------------------ | ------------------- |
| 62.3% | 3.2 MiB |     198 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### Standard library

|     % |    Size | Samples | Function | Location    |
| ----: | ------: | ------: | -------- | ----------- |
| 17.0% | 896 KiB |       1 | `set`    | `<unknown>` |
|  0.3% |  16 KiB |       1 | `values` | `<unknown>` |

##### Native

|     % |    Size | Samples | Function   | Location    |
| ----: | ------: | ------: | ---------- | ----------- |
| 15.0% | 788 KiB |       1 | `(v8 api)` | `<unknown>` |

##### Compiler

|    % |    Size | Samples | Function     | Location    |
| ---: | ------: | ------: | ------------ | ----------- |
| 4.6% | 241 KiB |      15 | `(compiler)` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|      % |    Size | Samples | Caller        | Location    |
| -----: | ------: | ------: | ------------- | ----------- |
| 100.0% | 3.2 MiB |     198 | `(anonymous)` | `<unknown>` |

##### `set` (`<unknown>`)

|      % |    Size | Samples | Caller                         | Location            |
| -----: | ------: | ------: | ------------------------------ | ------------------- |
| 100.0% | 896 KiB |       1 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `values` (`<unknown>`)

|      % |   Size | Samples | Caller                         | Location            |
| -----: | -----: | ------: | ------------------------------ | ------------------- |
| 100.0% | 16 KiB |       1 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                       | Location            |
| ----: | -------: | ------: | ------------------------------ | ------------------- |
| 80.5% | 4.14 MiB |     203 | `(anonymous)`                  | `<unknown>`         |
| 79.6% | 4.09 MiB |     200 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |
| 17.0% |  896 KiB |       1 | `set`                          | `<unknown>`         |
| 15.0% |  788 KiB |       1 | `(v8 api)`                     | `<unknown>`         |
|  4.6% |  241 KiB |      15 | `(compiler)`                   | `<unknown>`         |
|  0.3% |   16 KiB |       1 | `values`                       | `<unknown>`         |

#### Categories

##### Ours

|     % |     Size | Samples | Function                       | Location            |
| ----: | -------: | ------: | ------------------------------ | ------------------- |
| 79.6% | 4.09 MiB |     200 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### Standard library

|     % |    Size | Samples | Function | Location    |
| ----: | ------: | ------: | -------- | ----------- |
| 17.0% | 896 KiB |       1 | `set`    | `<unknown>` |
|  0.3% |  16 KiB |       1 | `values` | `<unknown>` |

##### Native

|     % |    Size | Samples | Function   | Location    |
| ----: | ------: | ------: | ---------- | ----------- |
| 15.0% | 788 KiB |       1 | `(v8 api)` | `<unknown>` |

##### Compiler

|    % |    Size | Samples | Function     | Location    |
| ---: | ------: | ------: | ------------ | ----------- |
| 4.6% | 241 KiB |      15 | `(compiler)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`<unknown>`)

|     % |     Size | Samples | Callee                         | Location            |
| ----: | -------: | ------: | ------------------------------ | ------------------- |
| 98.9% | 4.09 MiB |     200 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|     % |    Size | Samples | Callee   | Location    |
| ----: | ------: | ------: | -------- | ----------- |
| 21.4% | 896 KiB |       1 | `set`    | `<unknown>` |
|  0.4% |  16 KiB |       1 | `values` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `(anonymous)`

|     % |    Size | Samples | Call stack                                                      |
| ----: | ------: | ------: | --------------------------------------------------------------- |
| 62.3% | 3.2 MiB |     198 | `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)            |
| 17.0% | 896 KiB |       1 | `set` ← `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)    |
|  0.3% |  16 KiB |       1 | `values` ← `globalThis.buildAndRetainDom` (`workload.mjs:1:32`) |

# Heap profile

Allocated 5.21 MiB over 223 samples (23.9 KiB per sample).

| Category          |     % |     Size | Samples |
| ----------------- | ----: | -------: | ------: |
| ours              | 61.8% | 3.22 MiB |     199 |
| stdlib            | 19.8% | 1.03 MiB |      11 |
| v8 api            | 14.8% |  788 KiB |       1 |
| bytecode compiler |  2.4% |  128 KiB |       8 |
| parser            |  1.2% | 64.3 KiB |       4 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                       | Location            |
| ----: | -------: | ------: | ------------------------------ | ------------------- |
| 61.8% | 3.22 MiB |     199 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |
| 16.8% |  896 KiB |       1 | `set`                          | `<unknown>`         |
| 14.8% |  788 KiB |       1 | `(v8 api)`                     | `<unknown>`         |
|  2.4% |  128 KiB |       8 | `(bytecode compiler)`          | `<unknown>`         |
|  1.2% | 64.3 KiB |       4 | `(parser)`                     | `<unknown>`         |
|  0.3% |   16 KiB |       1 | `split`                        | `<unknown>`         |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|      % |     Size | Samples | Caller        | Location    |
| -----: | -------: | ------: | ------------- | ----------- |
| 100.0% | 3.22 MiB |     199 | `(anonymous)` | `<unknown>` |

##### `set` (`<unknown>`)

|      % |    Size | Samples | Caller                         | Location            |
| -----: | ------: | ------: | ------------------------------ | ------------------- |
| 100.0% | 896 KiB |       1 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `(v8 api)` (`<unknown>`)

|      % |    Size | Samples | Caller   | Location    |
| -----: | ------: | ------: | -------- | ----------- |
| 100.0% | 788 KiB |       1 | `(root)` | `<unknown>` |

##### `(bytecode compiler)` (`<unknown>`)

|      % |    Size | Samples | Caller   | Location    |
| -----: | ------: | ------: | -------- | ----------- |
| 100.0% | 128 KiB |       8 | `(root)` | `<unknown>` |

##### `(parser)` (`<unknown>`)

|      % |     Size | Samples | Caller   | Location    |
| -----: | -------: | ------: | -------- | ----------- |
| 100.0% | 64.3 KiB |       4 | `(root)` | `<unknown>` |

##### `split` (`<unknown>`)

|      % |   Size | Samples | Caller     | Location             |
| -----: | -----: | ------: | ---------- | -------------------- |
| 100.0% | 16 KiB |       1 | `tokenize` | `workload.mjs:10:20` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                       | Location             |
| ----: | -------: | ------: | ------------------------------ | -------------------- |
| 78.9% | 4.11 MiB |     201 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
| 16.8% |  896 KiB |       1 | `set`                          | `<unknown>`          |
| 14.8% |  788 KiB |       1 | `(v8 api)`                     | `<unknown>`          |
|  2.4% |  128 KiB |       8 | `(bytecode compiler)`          | `<unknown>`          |
|  1.2% | 64.3 KiB |       4 | `(parser)`                     | `<unknown>`          |
|  0.3% |   16 KiB |       1 | `split`                        | `<unknown>`          |
|  0.3% |   16 KiB |       1 | `tokenize`                     | `workload.mjs:10:20` |
|  0.3% |   16 KiB |       1 | `scoreStatus`                  | `workload.mjs:11:23` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|     % |    Size | Samples | Callee        | Location             |
| ----: | ------: | ------: | ------------- | -------------------- |
| 21.3% | 896 KiB |       1 | `set`         | `<unknown>`          |
|  0.4% |  16 KiB |       1 | `scoreStatus` | `workload.mjs:11:23` |

##### `tokenize` (`workload.mjs:10:20`)

|      % |   Size | Samples | Callee  | Location    |
| -----: | -----: | ------: | ------- | ----------- |
| 100.0% | 16 KiB |       1 | `split` | `<unknown>` |

##### `scoreStatus` (`workload.mjs:11:23`)

|      % |   Size | Samples | Callee     | Location             |
| -----: | -----: | ------: | ---------- | -------------------- |
| 100.0% | 16 KiB |       1 | `tokenize` | `workload.mjs:10:20` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Hidden call stacks account for 82.4% of bytes allocated, so the hottest are also shown.

|     % |     Size | Samples | Call stack                                                                                                  |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------------------- |
| 61.8% | 3.22 MiB |     199 | `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)                                                        |
| 16.8% |  896 KiB |       1 | `set` ← `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)                                                |
|  0.3% |   16 KiB |       1 | `split` ← `tokenize` (`workload.mjs:10:20`) ← `scoreStatus` (11:23) ← `globalThis.buildAndRetainDom` (1:32) |

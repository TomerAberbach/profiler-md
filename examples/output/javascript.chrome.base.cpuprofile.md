# CPU profile

Took 415.8ms over 281 samples (1.5ms per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| ours              | 54.2% | 225.5ms |     154 |
| native            | 27.8% | 115.5ms |      77 |
| regexp            | 10.7% |  44.7ms |      30 |
| garbage collector |  5.0% |  20.9ms |      14 |
| idle              |  2.2% |   9.2ms |       6 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                       | Location             |
| ----: | ------: | ------: | ------------------------------ | -------------------- |
| 48.1% | 200.0ms |     137 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
| 11.0% |  45.9ms |      31 | `createElement`                | `<unknown>`          |
| 10.7% |  44.7ms |      30 | `RegExp: \s+`                  | `<unknown>`          |
|  5.0% |  20.9ms |      14 | `(garbage collector)`          | `<unknown>`          |
|  3.6% |  15.0ms |      10 | `tokenize`                     | `workload.mjs:10:20` |
|  2.2% |   9.2ms |       6 | `(idle)`                       | `<unknown>`          |
|  2.2% |   9.1ms |       6 | `(anonymous)`                  | `run.mjs:1:1`        |
|  0.4% |   1.5ms |       1 | `scoreStatus`                  | `workload.mjs:11:23` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|     % |   Time | Samples | Location          |
| ----: | -----: | ------: | ----------------- |
| 14.8% | 29.6ms |      20 | `workload.mjs:52` |
| 13.3% | 26.7ms |      18 | `workload.mjs:42` |
| 12.6% | 25.2ms |      17 | `workload.mjs:39` |
| 12.6% | 25.2ms |      17 | `workload.mjs:53` |
|  9.6% | 19.3ms |      13 | `workload.mjs:36` |

##### `createElement` (`<unknown>`)

|     % |   Time | Samples | Location |
| ----: | -----: | ------: | -------- |
| 45.2% | 20.7ms |      14 | 40       |
| 29.0% | 13.3ms |       9 | 35       |
| 25.8% | 11.8ms |       8 | 38       |

##### `tokenize` (`workload.mjs:10:20`)

|      % |   Time | Samples | Location          |
| -----: | -----: | ------: | ----------------- |
| 100.0% | 15.0ms |      10 | `workload.mjs:10` |

##### `(anonymous)` (`run.mjs:1:1`)

|      % |  Time | Samples | Location    |
| -----: | ----: | ------: | ----------- |
| 100.0% | 9.1ms |       6 | `run.mjs:1` |

##### `scoreStatus` (`workload.mjs:11:23`)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 1.5ms |       1 | `workload.mjs:11` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|      % |    Time | Samples | Caller        | Location      |
| -----: | ------: | ------: | ------------- | ------------- |
| 100.0% | 200.0ms |     137 | `(anonymous)` | `run.mjs:1:1` |

##### `createElement` (`<unknown>`)

|      % |   Time | Samples | Caller                         | Location            |
| -----: | -----: | ------: | ------------------------------ | ------------------- |
| 100.0% | 45.9ms |      31 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `RegExp: \s+` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location             |
| -----: | -----: | ------: | ---------- | -------------------- |
| 100.0% | 44.7ms |      30 | `tokenize` | `workload.mjs:10:20` |

##### `tokenize` (`workload.mjs:10:20`)

|      % |   Time | Samples | Caller        | Location             |
| -----: | -----: | ------: | ------------- | -------------------- |
| 100.0% | 15.0ms |      10 | `scoreStatus` | `workload.mjs:11:23` |

##### `scoreStatus` (`workload.mjs:11:23`)

|      % |  Time | Samples | Caller                         | Location            |
| -----: | ----: | ------: | ------------------------------ | ------------------- |
| 100.0% | 1.5ms |       1 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                       | Location             |
| ----: | ------: | ------: | ------------------------------ | -------------------- |
| 76.0% | 316.1ms |     215 | `(anonymous)`                  | `run.mjs:1:1`        |
| 73.9% | 307.0ms |     209 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
| 14.7% |  61.1ms |      41 | `scoreStatus`                  | `workload.mjs:11:23` |
| 14.3% |  59.6ms |      40 | `tokenize`                     | `workload.mjs:10:20` |
| 11.0% |  45.9ms |      31 | `createElement`                | `<unknown>`          |
| 10.7% |  44.7ms |      30 | `RegExp: \s+`                  | `<unknown>`          |
|  5.0% |  20.9ms |      14 | `(garbage collector)`          | `<unknown>`          |
|  2.2% |   9.2ms |       6 | `(idle)`                       | `<unknown>`          |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`run.mjs:1:1`)

|     % |    Time | Samples | Callee                         | Location            |
| ----: | ------: | ------: | ------------------------------ | ------------------- |
| 97.1% | 307.0ms |     209 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|     % |   Time | Samples | Callee          | Location             |
| ----: | -----: | ------: | --------------- | -------------------- |
| 19.9% | 61.1ms |      41 | `scoreStatus`   | `workload.mjs:11:23` |
| 15.0% | 45.9ms |      31 | `createElement` | `<unknown>`          |

##### `scoreStatus` (`workload.mjs:11:23`)

|     % |   Time | Samples | Callee     | Location             |
| ----: | -----: | ------: | ---------- | -------------------- |
| 97.5% | 59.6ms |      40 | `tokenize` | `workload.mjs:10:20` |

##### `tokenize` (`workload.mjs:10:20`)

|     % |   Time | Samples | Callee        | Location    |
| ----: | -----: | ------: | ------------- | ----------- |
| 74.9% | 44.7ms |      30 | `RegExp: \s+` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(anonymous)` (`run.mjs:1:1`)

|     % |    Time | Samples | Call stack                                                                                                        |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------- |
| 48.1% | 200.0ms |     137 | `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)                                                              |
| 11.0% |  45.9ms |      31 | `createElement` ← `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)                                            |
| 10.7% |  44.7ms |      30 | `RegExp: \s+` ← `tokenize` (`workload.mjs:10:20`) ← `scoreStatus` (11:23) ← `globalThis.buildAndRetainDom` (1:32) |
|  3.6% |  15.0ms |      10 | `tokenize` (`workload.mjs:10:20`) ← `scoreStatus` (11:23) ← `globalThis.buildAndRetainDom` (1:32)                 |
|  0.4% |   1.5ms |       1 | `scoreStatus` (`workload.mjs:11:23`) ← `globalThis.buildAndRetainDom` (1:32)                                      |

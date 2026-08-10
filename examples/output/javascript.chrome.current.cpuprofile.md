# CPU profile

Took 420.7ms over 282 samples (1.5ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Ours               | 53.7% | 225.7ms |     152 |
| Native             | 26.6% | 111.7ms |      75 |
| Regular expression | 11.8% |  49.5ms |      33 |
| Garbage collector  |  5.5% |  23.2ms |      15 |
| Idle               |  2.5% |  10.5ms |       7 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                       | Location             |
| ----: | ------: | ------: | ------------------------------ | -------------------- |
| 47.6% | 200.1ms |     135 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
| 11.8% |  49.5ms |      33 | `RegExp: \s+`                  | `<unknown>`          |
| 10.1% |  42.3ms |      29 | `createElement`                | `<unknown>`          |
|  5.5% |  23.2ms |      15 | `(garbage collector)`          | `<unknown>`          |
|  4.0% |  16.8ms |      11 | `tokenize`                     | `workload.mjs:10:20` |
|  2.5% |  10.5ms |       7 | `(idle)`                       | `<unknown>`          |
|  2.1% |   8.8ms |       6 | `(anonymous)`                  | `run.mjs:1:1`        |

#### Categories

##### Ours

|     % |    Time | Samples | Function                       | Location             |
| ----: | ------: | ------: | ------------------------------ | -------------------- |
| 47.6% | 200.1ms |     135 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
|  4.0% |  16.8ms |      11 | `tokenize`                     | `workload.mjs:10:20` |
|  2.1% |   8.8ms |       6 | `(anonymous)`                  | `run.mjs:1:1`        |

##### Regular expression

|     % |   Time | Samples | Function      | Location    |
| ----: | -----: | ------: | ------------- | ----------- |
| 11.8% | 49.5ms |      33 | `RegExp: \s+` | `<unknown>` |

##### Native

|     % |   Time | Samples | Function        | Location    |
| ----: | -----: | ------: | --------------- | ----------- |
| 10.1% | 42.3ms |      29 | `createElement` | `<unknown>` |

##### Garbage collector

|    % |   Time | Samples | Function              | Location    |
| ---: | -----: | ------: | --------------------- | ----------- |
| 5.5% | 23.2ms |      15 | `(garbage collector)` | `<unknown>` |

##### Idle

|    % |   Time | Samples | Function | Location    |
| ---: | -----: | ------: | -------- | ----------- |
| 2.5% | 10.5ms |       7 | `(idle)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|     % |   Time | Samples | Location          |
| ----: | -----: | ------: | ----------------- |
| 17.3% | 34.6ms |      23 | `workload.mjs:52` |
| 13.5% | 27.1ms |      18 | `workload.mjs:53` |
| 12.8% | 25.6ms |      17 | `workload.mjs:36` |
| 12.0% | 24.1ms |      16 | `workload.mjs:39` |
| 12.0% | 24.1ms |      16 | `workload.mjs:42` |

##### `createElement` (`<unknown>`)

|     % |   Time | Samples | Location |
| ----: | -----: | ------: | -------- |
| 37.9% | 16.0ms |      11 | 40       |
| 31.0% | 13.1ms |       9 | 35       |
| 27.6% | 11.7ms |       8 | 38       |
|  3.4% |  1.5ms |       1 | 45       |

##### `tokenize` (`workload.mjs:10:20`)

|      % |   Time | Samples | Location          |
| -----: | -----: | ------: | ----------------- |
| 100.0% | 16.8ms |      11 | `workload.mjs:10` |

##### `(anonymous)` (`run.mjs:1:1`)

|      % |  Time | Samples | Location    |
| -----: | ----: | ------: | ----------- |
| 100.0% | 8.8ms |       6 | `run.mjs:1` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|      % |    Time | Samples | Caller        | Location      |
| -----: | ------: | ------: | ------------- | ------------- |
| 100.0% | 200.1ms |     135 | `(anonymous)` | `run.mjs:1:1` |

##### `RegExp: \s+` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location             |
| -----: | -----: | ------: | ---------- | -------------------- |
| 100.0% | 49.5ms |      33 | `tokenize` | `workload.mjs:10:20` |

##### `createElement` (`<unknown>`)

|      % |   Time | Samples | Caller                         | Location            |
| -----: | -----: | ------: | ------------------------------ | ------------------- |
| 100.0% | 42.3ms |      29 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `tokenize` (`workload.mjs:10:20`)

|      % |   Time | Samples | Caller        | Location             |
| -----: | -----: | ------: | ------------- | -------------------- |
| 100.0% | 16.8ms |      11 | `scoreStatus` | `workload.mjs:11:23` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                       | Location             |
| ----: | ------: | ------: | ------------------------------ | -------------------- |
| 75.5% | 317.5ms |     214 | `(anonymous)`                  | `run.mjs:1:1`        |
| 73.4% | 308.7ms |     208 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
| 15.8% |  66.3ms |      44 | `tokenize`                     | `workload.mjs:10:20` |
| 15.8% |  66.3ms |      44 | `scoreStatus`                  | `workload.mjs:11:23` |
| 11.8% |  49.5ms |      33 | `RegExp: \s+`                  | `<unknown>`          |
| 10.1% |  42.3ms |      29 | `createElement`                | `<unknown>`          |
|  5.5% |  23.2ms |      15 | `(garbage collector)`          | `<unknown>`          |
|  2.5% |  10.5ms |       7 | `(idle)`                       | `<unknown>`          |

#### Categories

##### Ours

|     % |    Time | Samples | Function                       | Location             |
| ----: | ------: | ------: | ------------------------------ | -------------------- |
| 75.5% | 317.5ms |     214 | `(anonymous)`                  | `run.mjs:1:1`        |
| 73.4% | 308.7ms |     208 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
| 15.8% |  66.3ms |      44 | `tokenize`                     | `workload.mjs:10:20` |
| 15.8% |  66.3ms |      44 | `scoreStatus`                  | `workload.mjs:11:23` |

##### Regular expression

|     % |   Time | Samples | Function      | Location    |
| ----: | -----: | ------: | ------------- | ----------- |
| 11.8% | 49.5ms |      33 | `RegExp: \s+` | `<unknown>` |

##### Native

|     % |   Time | Samples | Function        | Location    |
| ----: | -----: | ------: | --------------- | ----------- |
| 10.1% | 42.3ms |      29 | `createElement` | `<unknown>` |

##### Garbage collector

|    % |   Time | Samples | Function              | Location    |
| ---: | -----: | ------: | --------------------- | ----------- |
| 5.5% | 23.2ms |      15 | `(garbage collector)` | `<unknown>` |

##### Idle

|    % |   Time | Samples | Function | Location    |
| ---: | -----: | ------: | -------- | ----------- |
| 2.5% | 10.5ms |       7 | `(idle)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`run.mjs:1:1`)

|     % |    Time | Samples | Callee                         | Location            |
| ----: | ------: | ------: | ------------------------------ | ------------------- |
| 97.2% | 308.7ms |     208 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|     % |   Time | Samples | Callee          | Location             |
| ----: | -----: | ------: | --------------- | -------------------- |
| 21.5% | 66.3ms |      44 | `scoreStatus`   | `workload.mjs:11:23` |
| 13.7% | 42.3ms |      29 | `createElement` | `<unknown>`          |

##### `tokenize` (`workload.mjs:10:20`)

|     % |   Time | Samples | Callee        | Location    |
| ----: | -----: | ------: | ------------- | ----------- |
| 74.7% | 49.5ms |      33 | `RegExp: \s+` | `<unknown>` |

##### `scoreStatus` (`workload.mjs:11:23`)

|      % |   Time | Samples | Callee     | Location             |
| -----: | -----: | ------: | ---------- | -------------------- |
| 100.0% | 66.3ms |      44 | `tokenize` | `workload.mjs:10:20` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(anonymous)` (`run.mjs:1:1`)

|     % |    Time | Samples | Call stack                                                                                                        |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------- |
| 47.6% | 200.1ms |     135 | `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)                                                              |
| 11.8% |  49.5ms |      33 | `RegExp: \s+` ← `tokenize` (`workload.mjs:10:20`) ← `scoreStatus` (11:23) ← `globalThis.buildAndRetainDom` (1:32) |
| 10.1% |  42.3ms |      29 | `createElement` ← `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)                                            |
|  4.0% |  16.8ms |      11 | `tokenize` (`workload.mjs:10:20`) ← `scoreStatus` (11:23) ← `globalThis.buildAndRetainDom` (1:32)                 |

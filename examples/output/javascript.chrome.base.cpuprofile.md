# CPU profile

Took 461.2ms over 368 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Ours               | 50.2% | 231.3ms |     185 |
| Native             | 34.7% | 160.0ms |     128 |
| Regular expression |  9.3% |  42.9ms |      34 |
| Garbage collector  |  3.9% |  18.0ms |      14 |
| Idle               |  1.9% |   8.9ms |       7 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                       | Location             |
| ----: | ------: | ------: | ------------------------------ | -------------------- |
| 42.3% | 195.1ms |     156 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
| 25.7% | 118.4ms |      95 | `(program)`                    | `<unknown>`          |
|  9.3% |  42.9ms |      34 | `RegExp: \s+`                  | `<unknown>`          |
|  9.0% |  41.7ms |      33 | `createElement`                | `<unknown>`          |
|  4.6% |  21.3ms |      17 | `tokenize`                     | `workload.mjs:10:20` |
|  3.9% |  18.0ms |      14 | `(garbage collector)`          | `<unknown>`          |
|  2.2% |  10.1ms |       8 | `(anonymous)`                  | `run.mjs:1:1`        |
|  1.9% |   8.9ms |       7 | `(idle)`                       | `<unknown>`          |
|  1.0% |   4.8ms |       4 | `scoreStatus`                  | `workload.mjs:11:23` |

#### Categories

##### Ours

|     % |    Time | Samples | Function                       | Location             |
| ----: | ------: | ------: | ------------------------------ | -------------------- |
| 42.3% | 195.1ms |     156 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
|  4.6% |  21.3ms |      17 | `tokenize`                     | `workload.mjs:10:20` |
|  2.2% |  10.1ms |       8 | `(anonymous)`                  | `run.mjs:1:1`        |
|  1.0% |   4.8ms |       4 | `scoreStatus`                  | `workload.mjs:11:23` |

##### Native

|     % |    Time | Samples | Function        | Location    |
| ----: | ------: | ------: | --------------- | ----------- |
| 25.7% | 118.4ms |      95 | `(program)`     | `<unknown>` |
|  9.0% |  41.7ms |      33 | `createElement` | `<unknown>` |

##### Regular expression

|    % |   Time | Samples | Function      | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 9.3% | 42.9ms |      34 | `RegExp: \s+` | `<unknown>` |

##### Garbage collector

|    % |   Time | Samples | Function              | Location    |
| ---: | -----: | ------: | --------------------- | ----------- |
| 3.9% | 18.0ms |      14 | `(garbage collector)` | `<unknown>` |

##### Idle

|    % |  Time | Samples | Function | Location    |
| ---: | ----: | ------: | -------- | ----------- |
| 1.9% | 8.9ms |       7 | `(idle)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|     % |   Time | Samples | Location          |
| ----: | -----: | ------: | ----------------- |
| 16.2% | 31.7ms |      25 | `workload.mjs:42` |
| 15.6% | 30.4ms |      24 | `workload.mjs:39` |
| 13.6% | 26.6ms |      21 | `workload.mjs:52` |
|  9.1% | 17.7ms |      14 | `workload.mjs:36` |
|  8.4% | 16.5ms |      13 | `workload.mjs:27` |

##### `createElement` (`<unknown>`)

|     % |   Time | Samples | Location |
| ----: | -----: | ------: | -------- |
| 33.3% | 13.9ms |      11 | 38       |
| 33.3% | 13.9ms |      11 | 35       |
| 27.3% | 11.4ms |       9 | 40       |
|  3.0% |  1.3ms |       1 | 45       |
|  3.0% |  1.3ms |       1 | 1        |

##### `tokenize` (`workload.mjs:10:20`)

|      % |   Time | Samples | Location          |
| -----: | -----: | ------: | ----------------- |
| 100.0% | 21.3ms |      17 | `workload.mjs:10` |

##### `(anonymous)` (`run.mjs:1:1`)

|      % |   Time | Samples | Location    |
| -----: | -----: | ------: | ----------- |
| 100.0% | 10.1ms |       8 | `run.mjs:1` |

##### `scoreStatus` (`workload.mjs:11:23`)

|     % |  Time | Samples | Location          |
| ----: | ----: | ------: | ----------------- |
| 75.0% | 3.6ms |       3 | `workload.mjs:11` |
| 25.0% | 1.2ms |       1 | `workload.mjs:12` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|      % |    Time | Samples | Caller        | Location      |
| -----: | ------: | ------: | ------------- | ------------- |
| 100.0% | 195.1ms |     156 | `(anonymous)` | `run.mjs:1:1` |

##### `RegExp: \s+` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location             |
| -----: | -----: | ------: | ---------- | -------------------- |
| 100.0% | 42.9ms |      34 | `tokenize` | `workload.mjs:10:20` |

##### `createElement` (`<unknown>`)

|      % |   Time | Samples | Caller                         | Location            |
| -----: | -----: | ------: | ------------------------------ | ------------------- |
| 100.0% | 41.7ms |      33 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `tokenize` (`workload.mjs:10:20`)

|      % |   Time | Samples | Caller        | Location             |
| -----: | -----: | ------: | ------------- | -------------------- |
| 100.0% | 21.3ms |      17 | `scoreStatus` | `workload.mjs:11:23` |

##### `scoreStatus` (`workload.mjs:11:23`)

|      % |  Time | Samples | Caller                         | Location            |
| -----: | ----: | ------: | ------------------------------ | ------------------- |
| 100.0% | 4.8ms |       4 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                       | Location             |
| ----: | ------: | ------: | ------------------------------ | -------------------- |
| 68.5% | 315.9ms |     252 | `(anonymous)`                  | `run.mjs:1:1`        |
| 66.3% | 305.8ms |     244 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
| 25.7% | 118.4ms |      95 | `(program)`                    | `<unknown>`          |
| 15.0% |  69.0ms |      55 | `scoreStatus`                  | `workload.mjs:11:23` |
| 13.9% |  64.3ms |      51 | `tokenize`                     | `workload.mjs:10:20` |
|  9.3% |  42.9ms |      34 | `RegExp: \s+`                  | `<unknown>`          |
|  9.0% |  41.7ms |      33 | `createElement`                | `<unknown>`          |
|  3.9% |  18.0ms |      14 | `(garbage collector)`          | `<unknown>`          |
|  1.9% |   8.9ms |       7 | `(idle)`                       | `<unknown>`          |

#### Categories

##### Ours

|     % |    Time | Samples | Function                       | Location             |
| ----: | ------: | ------: | ------------------------------ | -------------------- |
| 68.5% | 315.9ms |     252 | `(anonymous)`                  | `run.mjs:1:1`        |
| 66.3% | 305.8ms |     244 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
| 15.0% |  69.0ms |      55 | `scoreStatus`                  | `workload.mjs:11:23` |
| 13.9% |  64.3ms |      51 | `tokenize`                     | `workload.mjs:10:20` |

##### Native

|     % |    Time | Samples | Function        | Location    |
| ----: | ------: | ------: | --------------- | ----------- |
| 25.7% | 118.4ms |      95 | `(program)`     | `<unknown>` |
|  9.0% |  41.7ms |      33 | `createElement` | `<unknown>` |

##### Regular expression

|    % |   Time | Samples | Function      | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 9.3% | 42.9ms |      34 | `RegExp: \s+` | `<unknown>` |

##### Garbage collector

|    % |   Time | Samples | Function              | Location    |
| ---: | -----: | ------: | --------------------- | ----------- |
| 3.9% | 18.0ms |      14 | `(garbage collector)` | `<unknown>` |

##### Idle

|    % |  Time | Samples | Function | Location    |
| ---: | ----: | ------: | -------- | ----------- |
| 1.9% | 8.9ms |       7 | `(idle)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`run.mjs:1:1`)

|     % |    Time | Samples | Callee                         | Location            |
| ----: | ------: | ------: | ------------------------------ | ------------------- |
| 96.8% | 305.8ms |     244 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|     % |   Time | Samples | Callee          | Location             |
| ----: | -----: | ------: | --------------- | -------------------- |
| 22.6% | 69.0ms |      55 | `scoreStatus`   | `workload.mjs:11:23` |
| 13.6% | 41.7ms |      33 | `createElement` | `<unknown>`          |

##### `scoreStatus` (`workload.mjs:11:23`)

|     % |   Time | Samples | Callee     | Location             |
| ----: | -----: | ------: | ---------- | -------------------- |
| 93.1% | 64.3ms |      51 | `tokenize` | `workload.mjs:10:20` |

##### `tokenize` (`workload.mjs:10:20`)

|     % |   Time | Samples | Callee        | Location    |
| ----: | -----: | ------: | ------------- | ----------- |
| 66.8% | 42.9ms |      34 | `RegExp: \s+` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(anonymous)` (`run.mjs:1:1`)

|     % |    Time | Samples | Call stack                                                                                                        |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------- |
| 42.3% | 195.1ms |     156 | `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)                                                              |
|  9.3% |  42.9ms |      34 | `RegExp: \s+` ← `tokenize` (`workload.mjs:10:20`) ← `scoreStatus` (11:23) ← `globalThis.buildAndRetainDom` (1:32) |
|  9.0% |  41.7ms |      33 | `createElement` ← `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)                                            |
|  4.6% |  21.3ms |      17 | `tokenize` (`workload.mjs:10:20`) ← `scoreStatus` (11:23) ← `globalThis.buildAndRetainDom` (1:32)                 |
|  1.0% |   4.8ms |       4 | `scoreStatus` (`workload.mjs:11:23`) ← `globalThis.buildAndRetainDom` (1:32)                                      |

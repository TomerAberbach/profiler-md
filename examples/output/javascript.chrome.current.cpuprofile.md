# CPU profile

Took 415.7ms over 332 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Ours               | 55.2% | 229.5ms |     184 |
| Native             | 29.8% | 123.9ms |      98 |
| Regular expression |  8.1% |  33.9ms |      27 |
| Garbage collector  |  4.6% |  19.0ms |      15 |
| Idle               |  2.3% |   9.5ms |       8 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                       | Location             |
| ----: | ------: | ------: | ------------------------------ | -------------------- |
| 50.1% | 208.5ms |     167 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
| 16.4% |  68.0ms |      53 | `(program)`                    | `<unknown>`          |
| 13.4% |  55.9ms |      45 | `createElement`                | `<unknown>`          |
|  8.1% |  33.9ms |      27 | `RegExp: \s+`                  | `<unknown>`          |
|  4.6% |  19.0ms |      15 | `(garbage collector)`          | `<unknown>`          |
|  2.7% |  11.0ms |       9 | `(anonymous)`                  | `run.mjs:1:1`        |
|  2.3% |   9.5ms |       8 | `(idle)`                       | `<unknown>`          |
|  1.8% |   7.5ms |       6 | `tokenize`                     | `workload.mjs:10:20` |
|  0.6% |   2.5ms |       2 | `scoreStatus`                  | `workload.mjs:11:23` |

#### Categories

##### Ours

|     % |    Time | Samples | Function                       | Location             |
| ----: | ------: | ------: | ------------------------------ | -------------------- |
| 50.1% | 208.5ms |     167 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
|  2.7% |  11.0ms |       9 | `(anonymous)`                  | `run.mjs:1:1`        |
|  1.8% |   7.5ms |       6 | `tokenize`                     | `workload.mjs:10:20` |
|  0.6% |   2.5ms |       2 | `scoreStatus`                  | `workload.mjs:11:23` |

##### Native

|     % |   Time | Samples | Function        | Location    |
| ----: | -----: | ------: | --------------- | ----------- |
| 16.4% | 68.0ms |      53 | `(program)`     | `<unknown>` |
| 13.4% | 55.9ms |      45 | `createElement` | `<unknown>` |

##### Regular expression

|    % |   Time | Samples | Function      | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 8.1% | 33.9ms |      27 | `RegExp: \s+` | `<unknown>` |

##### Garbage collector

|    % |   Time | Samples | Function              | Location    |
| ---: | -----: | ------: | --------------------- | ----------- |
| 4.6% | 19.0ms |      15 | `(garbage collector)` | `<unknown>` |

##### Idle

|    % |  Time | Samples | Function | Location    |
| ---: | ----: | ------: | -------- | ----------- |
| 2.3% | 9.5ms |       8 | `(idle)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|     % |   Time | Samples | Location          |
| ----: | -----: | ------: | ----------------- |
| 17.6% | 36.6ms |      29 | `workload.mjs:42` |
| 14.5% | 30.3ms |      24 | `workload.mjs:27` |
| 13.9% | 29.1ms |      23 | `workload.mjs:53` |
| 10.3% | 21.5ms |      17 | `workload.mjs:52` |
|  8.5% | 17.7ms |      14 | `workload.mjs:39` |

##### `createElement` (`<unknown>`)

|     % |   Time | Samples | Location |
| ----: | -----: | ------: | -------- |
| 37.8% | 21.1ms |      17 | 38       |
| 35.6% | 19.9ms |      16 | 35       |
| 24.4% | 13.7ms |      11 | 40       |
|  2.2% |  1.2ms |       1 | 45       |

##### `(anonymous)` (`run.mjs:1:1`)

|      % |   Time | Samples | Location    |
| -----: | -----: | ------: | ----------- |
| 100.0% | 11.0ms |       9 | `run.mjs:1` |

##### `tokenize` (`workload.mjs:10:20`)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 7.5ms |       6 | `workload.mjs:10` |

##### `scoreStatus` (`workload.mjs:11:23`)

|     % |  Time | Samples | Location          |
| ----: | ----: | ------: | ----------------- |
| 50.0% | 1.2ms |       1 | `workload.mjs:15` |
| 50.0% | 1.2ms |       1 | `workload.mjs:11` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|      % |    Time | Samples | Caller        | Location      |
| -----: | ------: | ------: | ------------- | ------------- |
| 100.0% | 208.5ms |     167 | `(anonymous)` | `run.mjs:1:1` |

##### `createElement` (`<unknown>`)

|      % |   Time | Samples | Caller                         | Location            |
| -----: | -----: | ------: | ------------------------------ | ------------------- |
| 100.0% | 55.9ms |      45 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `RegExp: \s+` (`<unknown>`)

|     % |   Time | Samples | Caller        | Location             |
| ----: | -----: | ------: | ------------- | -------------------- |
| 92.6% | 31.4ms |      25 | `tokenize`    | `workload.mjs:10:20` |
|  7.4% |  2.5ms |       2 | `scoreStatus` | `workload.mjs:11:23` |

##### `tokenize` (`workload.mjs:10:20`)

|      % |  Time | Samples | Caller        | Location             |
| -----: | ----: | ------: | ------------- | -------------------- |
| 100.0% | 7.5ms |       6 | `scoreStatus` | `workload.mjs:11:23` |

##### `scoreStatus` (`workload.mjs:11:23`)

|      % |  Time | Samples | Caller                         | Location            |
| -----: | ----: | ------: | ------------------------------ | ------------------- |
| 100.0% | 2.5ms |       2 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                       | Location             |
| ----: | ------: | ------: | ------------------------------ | -------------------- |
| 76.8% | 319.3ms |     256 | `(anonymous)`                  | `run.mjs:1:1`        |
| 74.1% | 308.2ms |     247 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
| 16.4% |  68.0ms |      53 | `(program)`                    | `<unknown>`          |
| 13.4% |  55.9ms |      45 | `createElement`                | `<unknown>`          |
| 10.6% |  43.9ms |      35 | `scoreStatus`                  | `workload.mjs:11:23` |
|  9.4% |  38.9ms |      31 | `tokenize`                     | `workload.mjs:10:20` |
|  8.1% |  33.9ms |      27 | `RegExp: \s+`                  | `<unknown>`          |
|  4.6% |  19.0ms |      15 | `(garbage collector)`          | `<unknown>`          |
|  2.3% |   9.5ms |       8 | `(idle)`                       | `<unknown>`          |

#### Categories

##### Ours

|     % |    Time | Samples | Function                       | Location             |
| ----: | ------: | ------: | ------------------------------ | -------------------- |
| 76.8% | 319.3ms |     256 | `(anonymous)`                  | `run.mjs:1:1`        |
| 74.1% | 308.2ms |     247 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
| 10.6% |  43.9ms |      35 | `scoreStatus`                  | `workload.mjs:11:23` |
|  9.4% |  38.9ms |      31 | `tokenize`                     | `workload.mjs:10:20` |

##### Native

|     % |   Time | Samples | Function        | Location    |
| ----: | -----: | ------: | --------------- | ----------- |
| 16.4% | 68.0ms |      53 | `(program)`     | `<unknown>` |
| 13.4% | 55.9ms |      45 | `createElement` | `<unknown>` |

##### Regular expression

|    % |   Time | Samples | Function      | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 8.1% | 33.9ms |      27 | `RegExp: \s+` | `<unknown>` |

##### Garbage collector

|    % |   Time | Samples | Function              | Location    |
| ---: | -----: | ------: | --------------------- | ----------- |
| 4.6% | 19.0ms |      15 | `(garbage collector)` | `<unknown>` |

##### Idle

|    % |  Time | Samples | Function | Location    |
| ---: | ----: | ------: | -------- | ----------- |
| 2.3% | 9.5ms |       8 | `(idle)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`run.mjs:1:1`)

|     % |    Time | Samples | Callee                         | Location            |
| ----: | ------: | ------: | ------------------------------ | ------------------- |
| 96.5% | 308.2ms |     247 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|     % |   Time | Samples | Callee          | Location             |
| ----: | -----: | ------: | --------------- | -------------------- |
| 18.1% | 55.9ms |      45 | `createElement` | `<unknown>`          |
| 14.2% | 43.9ms |      35 | `scoreStatus`   | `workload.mjs:11:23` |

##### `scoreStatus` (`workload.mjs:11:23`)

|     % |   Time | Samples | Callee        | Location             |
| ----: | -----: | ------: | ------------- | -------------------- |
| 88.7% | 38.9ms |      31 | `tokenize`    | `workload.mjs:10:20` |
|  5.7% |  2.5ms |       2 | `RegExp: \s+` | `<unknown>`          |

##### `tokenize` (`workload.mjs:10:20`)

|     % |   Time | Samples | Callee        | Location    |
| ----: | -----: | ------: | ------------- | ----------- |
| 80.6% | 31.4ms |      25 | `RegExp: \s+` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(anonymous)` (`run.mjs:1:1`)

|     % |    Time | Samples | Call stack                                                                                                        |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------- |
| 50.1% | 208.5ms |     167 | `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)                                                              |
| 13.4% |  55.9ms |      45 | `createElement` ← `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)                                            |
|  7.5% |  31.4ms |      25 | `RegExp: \s+` ← `tokenize` (`workload.mjs:10:20`) ← `scoreStatus` (11:23) ← `globalThis.buildAndRetainDom` (1:32) |
|  1.8% |   7.5ms |       6 | `tokenize` (`workload.mjs:10:20`) ← `scoreStatus` (11:23) ← `globalThis.buildAndRetainDom` (1:32)                 |
|  0.6% |   2.5ms |       2 | `RegExp: \s+` ← `scoreStatus` (`workload.mjs:11:23`) ← `globalThis.buildAndRetainDom` (1:32)                      |
|  0.6% |   2.5ms |       2 | `scoreStatus` (`workload.mjs:11:23`) ← `globalThis.buildAndRetainDom` (1:32)                                      |

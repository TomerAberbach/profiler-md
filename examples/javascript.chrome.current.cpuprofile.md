# CPU profile

Took 422.0ms over 337 samples (1.3ms per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| ours              | 50.1% | 211.2ms |     169 |
| program           | 16.5% |  69.7ms |      56 |
| stdlib            | 15.5% |  65.5ms |      52 |
| regexp            | 10.4% |  43.7ms |      35 |
| garbage collector |  4.8% |  20.4ms |      16 |
| idle              |  2.7% |  11.5ms |       9 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function              | Location                 |
| ----: | ------: | ------: | --------------------- | ------------------------ |
| 47.4% | 199.8ms |     160 | `(anonymous)`         | chrome-workload.mjs:1:2  |
| 16.5% |  69.7ms |      56 | `(program)`           | `<unknown>`              |
| 12.5% |  52.7ms |      42 | `createElement`       | `<unknown>`              |
| 10.4% |  43.7ms |      35 | `RegExp: \s+`         | `<unknown>`              |
|  4.8% |  20.4ms |      16 | `(garbage collector)` | `<unknown>`              |
|  3.0% |  12.7ms |      10 | `tokenize`            | `<unknown>`              |
|  2.7% |  11.5ms |       9 | `(idle)`              | `<unknown>`              |
|  2.1% |   8.9ms |       7 | `(anonymous)`         | chrome-workload.mjs:1:1  |
|  0.6% |   2.5ms |       2 | `scoreStatus`         | chrome-workload.mjs:7:23 |

#### Lines

Lines ranked by contribution to each function's self time.

##### `(anonymous)` (chrome-workload.mjs:1:2)

|     % |   Time | Samples | Location               |
| ----: | -----: | ------: | ---------------------- |
| 19.0% | 37.9ms |      30 | chrome-workload.mjs:49 |
| 12.7% | 25.3ms |      20 | chrome-workload.mjs:50 |
| 12.7% | 25.3ms |      20 | chrome-workload.mjs:39 |
|  9.5% | 19.0ms |      15 | chrome-workload.mjs:38 |
|  8.9% | 17.7ms |      14 | chrome-workload.mjs:33 |

##### `createElement` (`<unknown>`)

|     % |   Time | Samples | Location |
| ----: | -----: | ------: | -------- |
| 42.9% | 22.6ms |      18 | 32       |
| 35.7% | 18.8ms |      15 | 35       |
| 16.7% |  8.8ms |       7 | 37       |
|  4.8% |  2.5ms |       2 | 42       |

##### `tokenize` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 12.7ms |      10 | 6        |

##### `(anonymous)` (chrome-workload.mjs:1:1)

|      % |  Time | Samples | Location              |
| -----: | ----: | ------: | --------------------- |
| 100.0% | 8.9ms |       7 | chrome-workload.mjs:1 |

##### `scoreStatus` (chrome-workload.mjs:7:23)

|     % |  Time | Samples | Location               |
| ----: | ----: | ------: | ---------------------- |
| 50.0% | 1.3ms |       1 | chrome-workload.mjs:11 |
| 50.0% | 1.3ms |       1 | chrome-workload.mjs:7  |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `(anonymous)` (chrome-workload.mjs:1:2)

|      % |    Time | Samples | Caller        | Location                |
| -----: | ------: | ------: | ------------- | ----------------------- |
| 100.0% | 199.8ms |     160 | `(anonymous)` | chrome-workload.mjs:1:1 |

##### `createElement` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location                |
| -----: | -----: | ------: | ------------- | ----------------------- |
| 100.0% | 52.7ms |      42 | `(anonymous)` | chrome-workload.mjs:1:2 |

##### `RegExp: \s+` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location    |
| -----: | -----: | ------: | ---------- | ----------- |
| 100.0% | 43.7ms |      35 | `tokenize` | `<unknown>` |

##### `tokenize` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location                 |
| -----: | -----: | ------: | ------------- | ------------------------ |
| 100.0% | 12.7ms |      10 | `scoreStatus` | chrome-workload.mjs:7:23 |

##### `scoreStatus` (chrome-workload.mjs:7:23)

|      % |  Time | Samples | Caller        | Location                |
| -----: | ----: | ------: | ------------- | ----------------------- |
| 100.0% | 2.5ms |       2 | `(anonymous)` | chrome-workload.mjs:1:2 |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function              | Location                 |
| ----: | ------: | ------: | --------------------- | ------------------------ |
| 75.9% | 320.5ms |     256 | `(anonymous)`         | chrome-workload.mjs:1:1  |
| 73.8% | 311.6ms |     249 | `(anonymous)`         | chrome-workload.mjs:1:2  |
| 16.5% |  69.7ms |      56 | `(program)`           | `<unknown>`              |
| 14.0% |  59.0ms |      47 | `scoreStatus`         | chrome-workload.mjs:7:23 |
| 13.4% |  56.5ms |      45 | `tokenize`            | `<unknown>`              |
| 12.5% |  52.7ms |      42 | `createElement`       | `<unknown>`              |
| 10.4% |  43.7ms |      35 | `RegExp: \s+`         | `<unknown>`              |
|  4.8% |  20.4ms |      16 | `(garbage collector)` | `<unknown>`              |
|  2.7% |  11.5ms |       9 | `(idle)`              | `<unknown>`              |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `(anonymous)` (chrome-workload.mjs:1:1)

|     % |    Time | Samples | Callee        | Location                |
| ----: | ------: | ------: | ------------- | ----------------------- |
| 97.2% | 311.6ms |     249 | `(anonymous)` | chrome-workload.mjs:1:2 |

##### `(anonymous)` (chrome-workload.mjs:1:2)

|     % |   Time | Samples | Callee          | Location                 |
| ----: | -----: | ------: | --------------- | ------------------------ |
| 18.9% | 59.0ms |      47 | `scoreStatus`   | chrome-workload.mjs:7:23 |
| 16.9% | 52.7ms |      42 | `createElement` | `<unknown>`              |

##### `scoreStatus` (chrome-workload.mjs:7:23)

|     % |   Time | Samples | Callee     | Location    |
| ----: | -----: | ------: | ---------- | ----------- |
| 95.8% | 56.5ms |      45 | `tokenize` | `<unknown>` |

##### `tokenize` (`<unknown>`)

|     % |   Time | Samples | Callee        | Location    |
| ----: | -----: | ------: | ------------- | ----------- |
| 77.4% | 43.7ms |      35 | `RegExp: \s+` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(anonymous)` (chrome-workload.mjs:1:1)

|     % |    Time | Samples | Call stack                                                                                  |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------- |
| 47.4% | 199.8ms |     160 | `(anonymous)` (chrome-workload.mjs:1:2)                                                     |
| 12.5% |  52.7ms |      42 | `createElement` ← `(anonymous)` (chrome-workload.mjs:1:2)                                   |
| 10.4% |  43.7ms |      35 | `RegExp: \s+` ← `tokenize` ← `scoreStatus` (chrome-workload.mjs:7:23) ← `(anonymous)` (1:2) |
|  3.0% |  12.7ms |      10 | `tokenize` ← `scoreStatus` (chrome-workload.mjs:7:23) ← `(anonymous)` (1:2)                 |
|  0.6% |   2.5ms |       2 | `scoreStatus` (chrome-workload.mjs:7:23) ← `(anonymous)` (1:2)                              |

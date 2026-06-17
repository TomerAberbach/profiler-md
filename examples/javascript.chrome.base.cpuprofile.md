# CPU profile

Took 428.0ms over 342 samples (1.3ms per sample).

| Category          |     % |    Time | Samples |
| ----------------- | ----: | ------: | ------: |
| ours              | 53.5% | 229.0ms |     183 |
| program           | 18.2% |  77.9ms |      62 |
| regexp            | 11.2% |  47.8ms |      38 |
| stdlib            | 10.6% |  45.3ms |      37 |
| garbage collector |  4.4% |  19.0ms |      15 |
| idle              |  2.1% |   9.0ms |       7 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function              | Location                 |
| ----: | ------: | ------: | --------------------- | ------------------------ |
| 46.7% | 199.8ms |     159 | `(anonymous)`         | chrome-workload.mjs:1:2  |
| 18.2% |  77.9ms |      62 | `(program)`           | `<unknown>`              |
| 11.2% |  47.8ms |      38 | `RegExp: \s+`         | `<unknown>`              |
| 10.6% |  45.3ms |      37 | `createElement`       | `<unknown>`              |
|  5.4% |  23.0ms |      18 | `tokenize`            | chrome-workload.mjs:6:20 |
|  4.4% |  19.0ms |      15 | `(garbage collector)` | `<unknown>`              |
|  2.1% |   9.0ms |       7 | `(idle)`              | `<unknown>`              |
|  1.2% |   5.0ms |       5 | `(anonymous)`         | chrome-workload.mjs:1:1  |
|  0.3% |   1.3ms |       1 | `scoreStatus`         | chrome-workload.mjs:7:23 |

#### Lines

Lines ranked by contribution to each function's self time.

##### `(anonymous)` (chrome-workload.mjs:1:2)

|     % |   Time | Samples | Location               |
| ----: | -----: | ------: | ---------------------- |
| 24.2% | 48.4ms |      38 | chrome-workload.mjs:49 |
| 15.3% | 30.5ms |      24 | chrome-workload.mjs:39 |
| 10.8% | 21.6ms |      17 | chrome-workload.mjs:33 |
| 10.2% | 20.4ms |      16 | chrome-workload.mjs:50 |
|  9.6% | 19.1ms |      15 | chrome-workload.mjs:36 |

##### `createElement` (`<unknown>`)

|     % |   Time | Samples | Location |
| ----: | -----: | ------: | -------- |
| 40.5% | 18.4ms |      15 | 32       |
| 29.7% | 13.5ms |      11 | 35       |
| 27.0% | 12.2ms |      10 | 37       |
|  2.7% |  1.2ms |       1 | 42       |

##### `tokenize` (chrome-workload.mjs:6:20)

|      % |   Time | Samples | Location              |
| -----: | -----: | ------: | --------------------- |
| 100.0% | 23.0ms |      18 | chrome-workload.mjs:6 |

##### `(anonymous)` (chrome-workload.mjs:1:1)

|      % |  Time | Samples | Location              |
| -----: | ----: | ------: | --------------------- |
| 100.0% | 5.0ms |       5 | chrome-workload.mjs:1 |

##### `scoreStatus` (chrome-workload.mjs:7:23)

|      % |  Time | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 1.3ms |       1 | chrome-workload.mjs:11 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `(anonymous)` (chrome-workload.mjs:1:2)

|      % |    Time | Samples | Caller        | Location                |
| -----: | ------: | ------: | ------------- | ----------------------- |
| 100.0% | 199.8ms |     159 | `(anonymous)` | chrome-workload.mjs:1:1 |

##### `RegExp: \s+` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                 |
| -----: | -----: | ------: | ---------- | ------------------------ |
| 100.0% | 47.8ms |      38 | `tokenize` | chrome-workload.mjs:6:20 |

##### `createElement` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location                |
| -----: | -----: | ------: | ------------- | ----------------------- |
| 100.0% | 45.3ms |      37 | `(anonymous)` | chrome-workload.mjs:1:2 |

##### `tokenize` (chrome-workload.mjs:6:20)

|      % |   Time | Samples | Caller        | Location                 |
| -----: | -----: | ------: | ------------- | ------------------------ |
| 100.0% | 23.0ms |      18 | `scoreStatus` | chrome-workload.mjs:7:23 |

##### `scoreStatus` (chrome-workload.mjs:7:23)

|      % |  Time | Samples | Caller        | Location                |
| -----: | ----: | ------: | ------------- | ----------------------- |
| 100.0% | 1.3ms |       1 | `(anonymous)` | chrome-workload.mjs:1:2 |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function              | Location                 |
| ----: | ------: | ------: | --------------------- | ------------------------ |
| 75.3% | 322.1ms |     258 | `(anonymous)`         | chrome-workload.mjs:1:1  |
| 74.1% | 317.1ms |     253 | `(anonymous)`         | chrome-workload.mjs:1:2  |
| 18.2% |  77.9ms |      62 | `(program)`           | `<unknown>`              |
| 16.8% |  72.0ms |      57 | `scoreStatus`         | chrome-workload.mjs:7:23 |
| 16.5% |  70.7ms |      56 | `tokenize`            | chrome-workload.mjs:6:20 |
| 11.2% |  47.8ms |      38 | `RegExp: \s+`         | `<unknown>`              |
| 10.6% |  45.3ms |      37 | `createElement`       | `<unknown>`              |
|  4.4% |  19.0ms |      15 | `(garbage collector)` | `<unknown>`              |
|  2.1% |   9.0ms |       7 | `(idle)`              | `<unknown>`              |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `(anonymous)` (chrome-workload.mjs:1:1)

|     % |    Time | Samples | Callee        | Location                |
| ----: | ------: | ------: | ------------- | ----------------------- |
| 98.4% | 317.1ms |     253 | `(anonymous)` | chrome-workload.mjs:1:2 |

##### `(anonymous)` (chrome-workload.mjs:1:2)

|     % |   Time | Samples | Callee          | Location                 |
| ----: | -----: | ------: | --------------- | ------------------------ |
| 22.7% | 72.0ms |      57 | `scoreStatus`   | chrome-workload.mjs:7:23 |
| 14.3% | 45.3ms |      37 | `createElement` | `<unknown>`              |

##### `scoreStatus` (chrome-workload.mjs:7:23)

|     % |   Time | Samples | Callee     | Location                 |
| ----: | -----: | ------: | ---------- | ------------------------ |
| 98.2% | 70.7ms |      56 | `tokenize` | chrome-workload.mjs:6:20 |

##### `tokenize` (chrome-workload.mjs:6:20)

|     % |   Time | Samples | Callee        | Location    |
| ----: | -----: | ------: | ------------- | ----------- |
| 67.5% | 47.8ms |      38 | `RegExp: \s+` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(anonymous)` (chrome-workload.mjs:1:1)

|     % |    Time | Samples | Call stack                                                                                         |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------- |
| 46.7% | 199.8ms |     159 | `(anonymous)` (chrome-workload.mjs:1:2)                                                            |
| 11.2% |  47.8ms |      38 | `RegExp: \s+` ← `tokenize` (chrome-workload.mjs:6:20) ← `scoreStatus` (7:23) ← `(anonymous)` (1:2) |
| 10.6% |  45.3ms |      37 | `createElement` ← `(anonymous)` (chrome-workload.mjs:1:2)                                          |
|  5.4% |  23.0ms |      18 | `tokenize` (chrome-workload.mjs:6:20) ← `scoreStatus` (7:23) ← `(anonymous)` (1:2)                 |
|  0.3% |   1.3ms |       1 | `scoreStatus` (chrome-workload.mjs:7:23) ← `(anonymous)` (1:2)                                     |

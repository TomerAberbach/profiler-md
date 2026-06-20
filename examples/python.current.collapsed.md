# Sampling profile

Collected 13,009 samples.

| Category |      % | Samples |
| -------- | -----: | ------: |
| ours     | 100.0% |  13,009 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function | Location     |
| ----: | ------: | -------- | ------------ |
| 89.7% |  11,666 | `fib`    | script.py:4  |
| 10.3% |   1,342 | `crunch` | script.py:10 |
|  0.0% |       1 | `work`   | script.py:17 |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `fib` (script.py:4)

|      % | Samples | Caller | Location    |
| -----: | ------: | ------ | ----------- |
| 100.0% |  11,666 | `fib`  | script.py:4 |

##### `crunch` (script.py:10)

|      % | Samples | Caller | Location     |
| -----: | ------: | ------ | ------------ |
| 100.0% |   1,342 | `work` | script.py:17 |

##### `work` (script.py:17)

|      % | Samples | Caller | Location     |
| -----: | ------: | ------ | ------------ |
| 100.0% |       1 | `main` | script.py:23 |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function   | Location     |
| -----: | ------: | ---------- | ------------ |
| 100.0% |  13,009 | `work`     | script.py:17 |
| 100.0% |  13,009 | `main`     | script.py:23 |
| 100.0% |  13,009 | `<module>` | script.py:27 |
|  89.7% |  11,666 | `fib`      | script.py:4  |
|  10.3% |   1,342 | `crunch`   | script.py:10 |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `work` (script.py:17)

|     % | Samples | Callee   | Location     |
| ----: | ------: | -------- | ------------ |
| 89.7% |  11,666 | `fib`    | script.py:4  |
| 10.3% |   1,342 | `crunch` | script.py:10 |

##### `main` (script.py:23)

|      % | Samples | Callee | Location     |
| -----: | ------: | ------ | ------------ |
| 100.0% |  13,009 | `work` | script.py:17 |

##### `<module>` (script.py:27)

|      % | Samples | Callee | Location     |
| -----: | ------: | ------ | ------------ |
| 100.0% |  13,009 | `main` | script.py:23 |

##### `fib` (script.py:4)

|      % | Samples | Callee | Location    |
| -----: | ------: | ------ | ----------- |
| 100.0% |  11,666 | `fib`  | script.py:4 |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `work` (script.py:17) ← `main` (23) ← `<module>` (27)

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.2% |   2,497 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                     |
| 16.4% |   2,134 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                 |
| 15.7% |   2,041 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                         |
| 10.6% |   1,378 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                             |
| 10.3% |   1,342 | `crunch` (script.py:10)                                                                                                                                                                                                                                                                                                                     |
|  9.9% |   1,285 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                             |
|  6.2% |     806 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                                         |
|  3.8% |     490 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                 |
|  3.1% |     403 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                                                     |
|  1.6% |     208 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                                                                 |
|  1.2% |     157 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                     |
|  0.7% |      97 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                                                                             |
|  0.4% |      55 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                                                                                         |
|  0.4% |      47 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                         |
|  0.2% |      22 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                                                                                                     |
|  0.1% |      16 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                                                                                                                 |
|  0.1% |      13 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) |
|  0.0% |       6 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)             |
|  0.0% |       3 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                                                                                                                                                                                         |
|  0.0% |       2 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                                                                                                                                                                 |

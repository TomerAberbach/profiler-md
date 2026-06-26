# Sampling profile

Collected 13,009 samples.

| Category |      % | Samples |
| -------- | -----: | ------: |
| ours     | 100.0% |  13,009 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function | Location  |
| ----: | ------: | -------- | --------- |
| 89.7% |  11,666 | `fib`    | script.py |
| 10.3% |   1,342 | `crunch` | script.py |
|  0.0% |       1 | `work`   | script.py |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `fib` (script.py)

|     % | Samples | Location    |
| ----: | ------: | ----------- |
| 84.3% |   9,833 | script.py:4 |
| 11.0% |   1,288 | script.py:2 |
|  2.5% |     295 | script.py:1 |
|  2.1% |     250 | script.py:3 |

##### `crunch` (script.py)

|     % | Samples | Location     |
| ----: | ------: | ------------ |
| 86.0% |   1,154 | script.py:10 |
| 14.0% |     188 | script.py:9  |

##### `work` (script.py)

|      % | Samples | Location     |
| -----: | ------: | ------------ |
| 100.0% |       1 | script.py:17 |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `fib` (script.py)

|      % | Samples | Caller | Location  |
| -----: | ------: | ------ | --------- |
| 100.0% |  11,666 | `fib`  | script.py |

##### `crunch` (script.py)

|      % | Samples | Caller | Location  |
| -----: | ------: | ------ | --------- |
| 100.0% |   1,342 | `work` | script.py |

##### `work` (script.py)

|      % | Samples | Caller | Location  |
| -----: | ------: | ------ | --------- |
| 100.0% |       1 | `main` | script.py |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function   | Location  |
| -----: | ------: | ---------- | --------- |
| 100.0% |  13,009 | `work`     | script.py |
| 100.0% |  13,009 | `main`     | script.py |
| 100.0% |  13,009 | `<module>` | script.py |
|  89.7% |  11,666 | `fib`      | script.py |
|  10.3% |   1,342 | `crunch`   | script.py |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `work` (script.py)

|     % | Samples | Callee   | Location  |
| ----: | ------: | -------- | --------- |
| 89.7% |  11,666 | `fib`    | script.py |
| 10.3% |   1,342 | `crunch` | script.py |

##### `main` (script.py)

|      % | Samples | Callee | Location  |
| -----: | ------: | ------ | --------- |
| 100.0% |  13,009 | `work` | script.py |

##### `<module>` (script.py)

|      % | Samples | Callee | Location  |
| -----: | ------: | ------ | --------- |
| 100.0% |  13,009 | `main` | script.py |

##### `fib` (script.py)

|      % | Samples | Callee | Location  |
| -----: | ------: | ------ | --------- |
| 100.0% |  11,666 | `fib`  | script.py |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `work` (script.py) ← `main` ← `<module>`

|     % | Samples | Call stack                                                                                                                                                                                                                        |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.2% |   2,497 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                         |
| 16.4% |   2,134 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                                 |
| 15.7% |   2,041 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                 |
| 10.6% |   1,378 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                                         |
| 10.3% |   1,342 | `crunch` (script.py)                                                                                                                                                                                                              |
|  9.9% |   1,285 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                         |
|  6.2% |     806 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                                                 |
|  3.8% |     490 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                 |
|  3.1% |     403 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                                                         |
|  1.6% |     208 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                                                                 |
|  1.2% |     157 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                         |
|  0.7% |      97 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                                                                         |
|  0.4% |      55 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                                                                                 |
|  0.4% |      47 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                 |
|  0.2% |      22 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                                                                                         |
|  0.1% |      16 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                                                                                                 |
|  0.1% |      13 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` |
|  0.0% |       6 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`         |
|  0.0% |       3 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib`                                                                                                                                                                                 |
|  0.0% |       2 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                                                                                                                                 |

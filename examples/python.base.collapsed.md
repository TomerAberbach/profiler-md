# Sampling profile

Collected 6,627 samples.

| Category |      % | Samples |
| -------- | -----: | ------: |
| ours     | 100.0% |   6,627 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function | Location  |
| ----: | ------: | -------- | --------- |
| 65.1% |   4,314 | `fib`    | script.py |
| 34.9% |   2,313 | `crunch` | script.py |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `fib` (script.py)

|     % | Samples | Location    |
| ----: | ------: | ----------- |
| 84.0% |   3,623 | script.py:4 |
| 11.1% |     477 | script.py:2 |
|  3.0% |     130 | script.py:1 |
|  1.9% |      84 | script.py:3 |

##### `crunch` (script.py)

|     % | Samples | Location     |
| ----: | ------: | ------------ |
| 86.7% |   2,006 | script.py:10 |
| 13.3% |     307 | script.py:9  |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `fib` (script.py)

|      % | Samples | Caller | Location  |
| -----: | ------: | ------ | --------- |
| 100.0% |   4,314 | `fib`  | script.py |

##### `crunch` (script.py)

|      % | Samples | Caller | Location  |
| -----: | ------: | ------ | --------- |
| 100.0% |   2,313 | `work` | script.py |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function   | Location  |
| -----: | ------: | ---------- | --------- |
| 100.0% |   6,627 | `work`     | script.py |
| 100.0% |   6,627 | `main`     | script.py |
| 100.0% |   6,627 | `<module>` | script.py |
|  65.1% |   4,314 | `fib`      | script.py |
|  34.9% |   2,313 | `crunch`   | script.py |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `work` (script.py)

|     % | Samples | Callee   | Location  |
| ----: | ------: | -------- | --------- |
| 65.1% |   4,314 | `fib`    | script.py |
| 34.9% |   2,313 | `crunch` | script.py |

##### `main` (script.py)

|      % | Samples | Callee | Location  |
| -----: | ------: | ------ | --------- |
| 100.0% |   6,627 | `work` | script.py |

##### `<module>` (script.py)

|      % | Samples | Callee | Location  |
| -----: | ------: | ------ | --------- |
| 100.0% |   6,627 | `main` | script.py |

##### `fib` (script.py)

|      % | Samples | Callee | Location  |
| -----: | ------: | ------ | --------- |
| 100.0% |   4,314 | `fib`  | script.py |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `work` (script.py) ← `main` ← `<module>`

|     % | Samples | Call stack                                                                                                                                                                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 34.9% |   2,313 | `crunch` (script.py)                                                                                                                                                                                      |
| 13.5% |     897 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                         |
| 13.1% |     870 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                 |
|  9.8% |     651 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                         |
|  9.6% |     637 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                 |
|  5.8% |     387 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                                 |
|  5.0% |     329 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                         |
|  2.9% |     192 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                                         |
|  1.8% |     118 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                 |
|  1.6% |     105 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                                                 |
|  0.7% |      49 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                                                         |
|  0.4% |      26 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                                                                 |
|  0.3% |      21 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`         |
|  0.3% |      18 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                                                                         |
|  0.1% |       8 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                                                                                 |
| <0.1% |       3 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` |
| <0.1% |       2 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                                                                                         |
| <0.1% |       1 | `fib` (script.py) ← `fib` ← `fib` ← `fib` ← `fib` ← `fib` ← `fib`                                                                                                                                         |

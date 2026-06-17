# Sampling profile

Collected 6,627 samples.

| Category |      % | Samples |
| -------- | -----: | ------: |
| ours     | 100.0% |   6,627 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function | Location     |
| ----: | ------: | -------- | ------------ |
| 65.1% |   4,314 | `fib`    | script.py:4  |
| 34.9% |   2,313 | `crunch` | script.py:10 |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `fib` (script.py:4)

|      % | Samples | Caller | Location    |
| -----: | ------: | ------ | ----------- |
| 100.0% |   4,314 | `fib`  | script.py:4 |

##### `crunch` (script.py:10)

|      % | Samples | Caller | Location     |
| -----: | ------: | ------ | ------------ |
| 100.0% |   2,313 | `work` | script.py:18 |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function              | Location           |
| -----: | ------: | --------------------- | ------------------ |
| 100.0% |   6,627 | `work`                | script.py:18       |
| 100.0% |   6,627 | `main`                | script.py:23       |
| 100.0% |   6,627 | `<module>`            | script.py:27       |
| 100.0% |   6,627 | `_run_code`           | <frozen runpy>:87  |
| 100.0% |   6,627 | `_run_module_as_main` | <frozen runpy>:201 |
|  65.1% |   4,314 | `fib`                 | script.py:4        |
|  34.9% |   2,313 | `crunch`              | script.py:10       |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `work` (script.py:18)

|     % | Samples | Callee   | Location     |
| ----: | ------: | -------- | ------------ |
| 65.1% |   4,314 | `fib`    | script.py:4  |
| 34.9% |   2,313 | `crunch` | script.py:10 |

##### `main` (script.py:23)

|      % | Samples | Callee | Location     |
| -----: | ------: | ------ | ------------ |
| 100.0% |   6,627 | `work` | script.py:18 |

##### `<module>` (script.py:27)

|      % | Samples | Callee | Location     |
| -----: | ------: | ------ | ------------ |
| 100.0% |   6,627 | `main` | script.py:23 |

##### `_run_code` (<frozen runpy>:87)

|      % | Samples | Callee     | Location     |
| -----: | ------: | ---------- | ------------ |
| 100.0% |   6,627 | `<module>` | script.py:27 |

##### `_run_module_as_main` (<frozen runpy>:201)

|      % | Samples | Callee      | Location          |
| -----: | ------: | ----------- | ----------------- |
| 100.0% |   6,627 | `_run_code` | <frozen runpy>:87 |

##### `fib` (script.py:4)

|      % | Samples | Callee | Location    |
| -----: | ------: | ------ | ----------- |
| 100.0% |   4,314 | `fib`  | script.py:4 |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `work` (script.py:18) ← `main` (23) ← `<module>` (27) ← `_run_code` (<frozen runpy>:87) ← `_run_module_as_main` (201)

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                              |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 34.9% |   2,313 | `crunch` (script.py:10)                                                                                                                                                                                                                                                                                 |
| 13.5% |     897 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                             |
| 13.1% |     870 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                         |
|  9.8% |     651 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                     |
|  9.6% |     637 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                 |
|  5.8% |     387 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                 |
|  5.0% |     329 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                     |
|  2.9% |     192 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                             |
|  1.8% |     118 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                         |
|  1.6% |     105 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                                         |
|  0.7% |      49 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                                                     |
|  0.4% |      26 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                                                                 |
|  0.3% |      21 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)             |
|  0.3% |      18 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                                                                             |
|  0.1% |       8 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                                                                                         |
|  0.0% |       3 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) |
|  0.0% |       2 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                                                                                                     |
|  0.0% |       1 | `fib` (script.py:4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4) ← `fib` (4)                                                                                                                                                                                                             |

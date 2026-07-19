# Sampling profile

Took 1.90s over 190 samples (10.0ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| third-party | 89.5% |   1.70s |     170 |
| stdlib      |  7.9% | 150.0ms |      15 |
| ours        |  2.6% |  50.0ms |       5 |

Hidden functions account for 97.4% of time spent, so the hottest are also shown.

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function            | Location                                                        |
| ---: | ------: | ------: | ------------------- | --------------------------------------------------------------- |
| 7.9% | 150.0ms |      15 | `generate_tokens`   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| 6.8% | 130.0ms |      13 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| 6.3% | 120.0ms |      12 | `_addtoken`         | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 4.7% |  90.0ms |       9 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| 4.2% |  80.0ms |       8 | `visit`             | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| 3.7% |  70.0ms |       7 | `__init__`          | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 3.7% |  70.0ms |       7 | `mark`              | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| 3.7% |  70.0ms |       7 | `parse`             | `/usr/lib/python3.11/ast.py`                                    |
| 3.7% |  70.0ms |       7 | `(anonymous)`       | `<unknown>`                                                     |
| 3.2% |  60.0ms |       6 | `push`              | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 2.6% |  50.0ms |       5 | `__init__`          | `<string>`                                                      |

#### Lines

Lines ranked by contribution to each function's self time.

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|     % |   Time | Samples | Location                                                            |
| ----: | -----: | ------: | ------------------------------------------------------------------- |
| 60.0% | 90.0ms |       9 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:875` |
| 20.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:624` |
|  6.7% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:748` |
|  6.7% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:749` |
|  6.7% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:719` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|     % |   Time | Samples | Location                                                  |
| ----: | -----: | ------: | --------------------------------------------------------- |
| 61.5% | 80.0ms |       8 | `/venv/lib/python3.11/site-packages/black/comments.py:72` |
| 23.1% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/comments.py:76` |
| 15.4% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/comments.py:52` |

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|     % |   Time | Samples | Location                                                         |
| ----: | -----: | ------: | ---------------------------------------------------------------- |
| 16.7% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:328` |
| 16.7% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:303` |
| 16.7% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:297` |
| 16.7% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:301` |
| 16.7% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:298` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|     % |   Time | Samples | Location                                                  |
| ----: | -----: | ------: | --------------------------------------------------------- |
| 66.7% | 60.0ms |       6 | `/venv/lib/python3.11/site-packages/black/linegen.py:158` |
| 22.2% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/linegen.py:157` |
| 11.1% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/linegen.py:134` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|     % |   Time | Samples | Location                                                |
| ----: | -----: | ------: | ------------------------------------------------------- |
| 50.0% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/black/nodes.py:181` |
| 25.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/nodes.py:185` |
| 25.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/nodes.py:163` |

##### `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 71.4% | 50.0ms |       5 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:266` |
| 14.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:424` |
| 14.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:417` |

##### `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|     % |   Time | Samples | Location                                                   |
| ----: | -----: | ------: | ---------------------------------------------------------- |
| 42.9% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/brackets.py:112` |
| 28.6% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/brackets.py:128` |
| 14.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/brackets.py:122` |
| 14.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/brackets.py:92`  |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |   Time | Samples | Location                        |
| -----: | -----: | ------: | ------------------------------- |
| 100.0% | 70.0ms |       7 | `/usr/lib/python3.11/ast.py:50` |

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|     % |   Time | Samples | Location                                                         |
| ----: | -----: | ------: | ---------------------------------------------------------------- |
| 33.3% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:395` |
| 33.3% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:393` |
| 16.7% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:388` |
| 16.7% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:394` |

##### `__init__` (`<string>`)

|      % |   Time | Samples | Location     |
| -----: | -----: | ------: | ------------ |
| 100.0% | 50.0ms |       5 | `<string>:7` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|     % |    Time | Samples | Caller     | Location                                                      |
| ----: | ------: | ------: | ---------- | ------------------------------------------------------------- |
| 93.3% | 140.0ms |      14 | `__next__` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|      % |    Time | Samples | Caller          | Location                                              |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 130.0ms |      13 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |    Time | Samples | Caller     | Location                                                     |
| -----: | ------: | ------: | ---------- | ------------------------------------------------------------ |
| 100.0% | 120.0ms |      12 | `addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|     % |   Time | Samples | Caller  | Location                                            |
| ----: | -----: | ------: | ------- | --------------------------------------------------- |
| 77.8% | 70.0ms |       7 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |   Time | Samples | Caller          | Location                                            |
| -----: | -----: | ------: | --------------- | --------------------------------------------------- |
| 100.0% | 80.0ms |       8 | `visit_default` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Caller    | Location                                                |
| -----: | -----: | ------: | --------- | ------------------------------------------------------- |
| 100.0% | 70.0ms |       7 | `convert` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|      % |   Time | Samples | Caller   | Location                                            |
| -----: | -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 70.0ms |       7 | `append` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |   Time | Samples | Caller                  | Location                                              |
| -----: | -----: | ------: | ----------------------- | ----------------------------------------------------- |
| 100.0% | 70.0ms |       7 | `_parse_single_version` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Caller      | Location                                                     |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 60.0ms |       6 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `__init__` (`<string>`)

|     % |   Time | Samples | Caller              | Location                                            |
| ----: | -----: | ------: | ------------------- | --------------------------------------------------- |
| 60.0% | 30.0ms |       3 | `maybe_empty_lines` | `/venv/lib/python3.11/site-packages/black/lines.py` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function            | Location                                                        |
| ----: | ------: | ------: | ------------------- | --------------------------------------------------------------- |
| 40.5% | 770.0ms |      77 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| 40.5% | 770.0ms |      77 | `visit`             | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| 20.0% | 380.0ms |      38 | `_addtoken`         | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 11.1% | 210.0ms |      21 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|  8.9% | 170.0ms |      17 | `generate_tokens`   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|  4.2% |  80.0ms |       8 | `mark`              | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
|  3.7% |  70.0ms |       7 | `__init__`          | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  3.7% |  70.0ms |       7 | `parse`             | `/usr/lib/python3.11/ast.py`                                    |
|  3.7% |  70.0ms |       7 | `(anonymous)`       | `<unknown>`                                                     |
|  3.2% |  60.0ms |       6 | `push`              | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  2.6% |  50.0ms |       5 | `__init__`          | `<string>`                                                      |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee              | Location                                               |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 770.0ms |      77 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/nodes.py`    |
|  27.3% | 210.0ms |      21 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |    Time | Samples | Callee          | Location                                              |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 770.0ms |      77 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  96.1% | 740.0ms |      74 | `visit_stmt`    | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  93.5% | 720.0ms |      72 | `visit_funcdef` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|     % |    Time | Samples | Callee | Location                                                     |
| ----: | ------: | ------: | ------ | ------------------------------------------------------------ |
| 36.8% | 140.0ms |      14 | `pop`  | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
| 15.8% |  60.0ms |       6 | `push` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|     % |   Time | Samples | Callee                      | Location                                               |
| ----: | -----: | ------: | --------------------------- | ------------------------------------------------------ |
| 33.3% | 70.0ms |       7 | `normalize_trailing_prefix` | `/venv/lib/python3.11/site-packages/black/comments.py` |

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|    % |   Time | Samples | Callee    | Location                                                        |
| ---: | -----: | ------: | --------- | --------------------------------------------------------------- |
| 5.9% | 10.0ms |       1 | `current` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |

##### `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|     % |   Time | Samples | Callee                              | Location                                               |
| ----: | -----: | ------: | ----------------------------------- | ------------------------------------------------------ |
| 12.5% | 10.0ms |       1 | `maybe_increment_for_loop_variable` | `/venv/lib/python3.11/site-packages/black/brackets.py` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.7% | 70.0ms |       7 | `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.2% | 60.0ms |       6 | `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3.2% | 60.0ms |       6 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.1% | 40.0ms |       4 | `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.1% | 40.0ms |       4 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) |
| 1.6% | 30.0ms |       3 | `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.6% | 30.0ms |       3 | `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.6% | 30.0ms |       3 | `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.6% | 30.0ms |       3 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.1% | 20.0ms |       2 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.1% | 20.0ms |       2 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                 |
| 1.1% | 20.0ms |       2 | `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                             |
| 1.1% | 20.0ms |       2 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.1% | 20.0ms |       2 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.1% | 20.0ms |       2 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                |
| 1.1% | 20.0ms |       2 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                           |
| 1.1% | 20.0ms |       2 | `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.1% | 20.0ms |       2 | `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                               |
| 1.1% | 20.0ms |       2 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                     |
| 1.1% | 20.0ms |       2 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

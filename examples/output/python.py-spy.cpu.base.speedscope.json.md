# Sampling profile

Took 1.79s over 179 samples (10.0ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| third-party | 92.2% |   1.65s |     165 |
| stdlib      |  7.3% | 130.0ms |      13 |
| ours        |  0.6% |  10.0ms |       1 |

Hidden functions account for 99.4% of time spent, so the hottest are also shown.

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function              | Location                                                        |
| ----: | ------: | ------: | --------------------- | --------------------------------------------------------------- |
| 10.6% | 190.0ms |      19 | `_addtoken`           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  7.3% | 130.0ms |      13 | `generate_tokens`     | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|  6.1% | 110.0ms |      11 | `visit_default`       | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  5.0% |  90.0ms |       9 | `parse`               | `/usr/lib/python3.11/ast.py`                                    |
|  4.5% |  80.0ms |       8 | `pop`                 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  4.5% |  80.0ms |       8 | `<genexpr>`           | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  3.9% |  70.0ms |       7 | `generate_comments`   | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|  3.4% |  60.0ms |       6 | `visit`               | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  3.4% |  60.0ms |       6 | `__str__`             | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  3.4% |  60.0ms |       6 | `update_sibling_maps` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  0.6% |  10.0ms |       1 | `__init__`            | `<string>`                                                      |

#### Lines

Lines ranked by contribution to each function's self time.

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|     % |   Time | Samples | Location                                                         |
| ----: | -----: | ------: | ---------------------------------------------------------------- |
| 21.1% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:298` |
| 21.1% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:297` |
| 15.8% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:314` |
| 10.5% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:303` |
| 10.5% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:292` |

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|     % |    Time | Samples | Location                                                            |
| ----: | ------: | ------: | ------------------------------------------------------------------- |
| 76.9% | 100.0ms |      10 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:875` |
|  7.7% |  10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:878` |
|  7.7% |  10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:610` |
|  7.7% |  10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:781` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|     % |   Time | Samples | Location                                                  |
| ----: | -----: | ------: | --------------------------------------------------------- |
| 72.7% | 80.0ms |       8 | `/venv/lib/python3.11/site-packages/black/linegen.py:158` |
| 18.2% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/linegen.py:134` |
|  9.1% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/linegen.py:136` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |   Time | Samples | Location                        |
| -----: | -----: | ------: | ------------------------------- |
| 100.0% | 90.0ms |       9 | `/usr/lib/python3.11/ast.py:50` |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|     % |   Time | Samples | Location                                                         |
| ----: | -----: | ------: | ---------------------------------------------------------------- |
| 25.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:405` |
| 12.5% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:403` |
| 12.5% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:407` |
| 12.5% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:398` |
| 12.5% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:404` |

##### `<genexpr>` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 80.0ms |       8 | `/venv/lib/python3.11/site-packages/black/lines.py:456` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|     % |   Time | Samples | Location                                                  |
| ----: | -----: | ------: | --------------------------------------------------------- |
| 71.4% | 50.0ms |       5 | `/venv/lib/python3.11/site-packages/black/comments.py:72` |
| 28.6% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/comments.py:75` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|     % |   Time | Samples | Location                                                |
| ----: | -----: | ------: | ------------------------------------------------------- |
| 50.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/nodes.py:181` |
| 33.3% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/nodes.py:176` |
| 16.7% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/nodes.py:183` |

##### `__str__` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|     % |   Time | Samples | Location                                                |
| ----: | -----: | ------: | ------------------------------------------------------- |
| 50.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/lines.py:500` |
| 50.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/lines.py:501` |

##### `update_sibling_maps` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 66.7% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:379` |
| 33.3% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:376` |

##### `__init__` (`<string>`)

|      % |   Time | Samples | Location     |
| -----: | -----: | ------: | ------------ |
| 100.0% | 10.0ms |       1 | `<string>:7` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |    Time | Samples | Caller     | Location                                                     |
| -----: | ------: | ------: | ---------- | ------------------------------------------------------------ |
| 100.0% | 190.0ms |      19 | `addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|      % |    Time | Samples | Caller     | Location                                                      |
| -----: | ------: | ------: | ---------- | ------------------------------------------------------------- |
| 100.0% | 130.0ms |      13 | `__next__` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Caller  | Location                                            |
| -----: | ------: | ------: | ------- | --------------------------------------------------- |
| 100.0% | 110.0ms |      11 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |   Time | Samples | Caller                  | Location                                              |
| -----: | -----: | ------: | ----------------------- | ----------------------------------------------------- |
| 100.0% | 90.0ms |       9 | `_parse_single_version` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Caller      | Location                                                     |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 80.0ms |       8 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `<genexpr>` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Caller                 | Location                                            |
| -----: | -----: | ------: | ---------------------- | --------------------------------------------------- |
| 100.0% | 80.0ms |       8 | `is_complex_subscript` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|      % |   Time | Samples | Caller          | Location                                              |
| -----: | -----: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 70.0ms |       7 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|     % |   Time | Samples | Caller          | Location                                            |
| ----: | -----: | ------: | --------------- | --------------------------------------------------- |
| 83.3% | 50.0ms |       5 | `visit_default` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `__str__` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|     % |   Time | Samples | Caller           | Location                                            |
| ----: | -----: | ------: | ---------------- | --------------------------------------------------- |
| 50.0% | 30.0ms |       3 | `line_to_string` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `update_sibling_maps` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Caller         | Location                                                |
| -----: | -----: | ------: | -------------- | ------------------------------------------------------- |
| 100.0% | 60.0ms |       6 | `prev_sibling` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `__init__` (`<string>`)

|      % |   Time | Samples | Caller                     | Location                                              |
| -----: | -----: | ------: | -------------------------- | ----------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `bracket_split_build_line` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function              | Location                                                        |
| ----: | ------: | ------: | --------------------- | --------------------------------------------------------------- |
| 40.2% | 720.0ms |      72 | `visit_default`       | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| 40.2% | 720.0ms |      72 | `visit`               | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| 24.0% | 430.0ms |      43 | `_addtoken`           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  8.4% | 150.0ms |      15 | `generate_comments`   | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|  8.4% | 150.0ms |      15 | `generate_tokens`     | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|  6.7% | 120.0ms |      12 | `pop`                 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  5.0% |  90.0ms |       9 | `parse`               | `/usr/lib/python3.11/ast.py`                                    |
|  4.5% |  80.0ms |       8 | `<genexpr>`           | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  3.4% |  60.0ms |       6 | `__str__`             | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  3.4% |  60.0ms |       6 | `update_sibling_maps` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  0.6% |  10.0ms |       1 | `__init__`            | `<string>`                                                      |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee              | Location                                               |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 720.0ms |      72 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/nodes.py`    |
|  20.8% | 150.0ms |      15 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |    Time | Samples | Callee          | Location                                              |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 720.0ms |      72 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| 100.0% | 720.0ms |      72 | `visit_stmt`    | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| 100.0% | 720.0ms |      72 | `visit_suite`   | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|     % |    Time | Samples | Callee | Location                                                     |
| ----: | ------: | ------: | ------ | ------------------------------------------------------------ |
| 27.9% | 120.0ms |      12 | `pop`  | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|     % |   Time | Samples | Callee                      | Location                                               |
| ----: | -----: | ------: | --------------------------- | ------------------------------------------------------ |
| 53.3% | 80.0ms |       8 | `normalize_trailing_prefix` | `/venv/lib/python3.11/site-packages/black/comments.py` |

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|     % |   Time | Samples | Callee             | Location                                                        |
| ----: | -----: | ------: | ------------------ | --------------------------------------------------------------- |
| 13.3% | 20.0ms |       2 | `is_fstring_start` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|     % |   Time | Samples | Callee    | Location                                                |
| ----: | -----: | ------: | --------- | ------------------------------------------------------- |
| 33.3% | 40.0ms |       4 | `convert` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.7% | 120.0ms |      12 | `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 4.5% |  80.0ms |       8 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 4.5% |  80.0ms |       8 | `<genexpr>` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                           |
| 2.8% |  50.0ms |       5 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.7% |  30.0ms |       3 | `update_sibling_maps` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.7% |  30.0ms |       3 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.1% |  20.0ms |       2 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) |
| 1.1% |  20.0ms |       2 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.1% |  20.0ms |       2 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.1% |  20.0ms |       2 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.1% |  20.0ms |       2 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                         |
| 1.1% |  20.0ms |       2 | `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.1% |  20.0ms |       2 | `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.1% |  20.0ms |       2 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.1% |  20.0ms |       2 | `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.1% |  20.0ms |       2 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.1% |  20.0ms |       2 | `update_sibling_maps` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                             |
| 0.6% |  10.0ms |       1 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                |
| 0.6% |  10.0ms |       1 | `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                         |
| 0.6% |  10.0ms |       1 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)                                                                                                                                                                                                                                                                                                                                                                                                                               |

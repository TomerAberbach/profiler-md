# Sampling profile

Took 1.79s over 179 samples (10.0ms per sample).

| Category         |     % |   Time | Samples |
| ---------------- | ----: | -----: | ------: |
| Third-party      | 92.2% |  1.65s |     165 |
| Standard library |  5.0% | 90.0ms |       9 |
| Unknown          |  2.2% | 40.0ms |       4 |
| Ours             |  0.6% | 10.0ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                    | Location                                                        |
| ----: | ------: | ------: | --------------------------- | --------------------------------------------------------------- |
| 10.6% | 190.0ms |      19 | `_addtoken`                 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  7.3% | 130.0ms |      13 | `generate_tokens`           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|  6.1% | 110.0ms |      11 | `visit_default`             | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  5.0% |  90.0ms |       9 | `parse`                     | `/usr/lib/python3.11/ast.py`                                    |
|  4.5% |  80.0ms |       8 | `pop`                       | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  4.5% |  80.0ms |       8 | `<genexpr>`                 | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  3.9% |  70.0ms |       7 | `generate_comments`         | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|  3.4% |  60.0ms |       6 | `visit`                     | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  3.4% |  60.0ms |       6 | `__str__`                   | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  3.4% |  60.0ms |       6 | `update_sibling_maps`       | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  2.8% |  50.0ms |       5 | `push`                      | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  2.2% |  40.0ms |       4 | `__new__`                   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  2.2% |  40.0ms |       4 | `get_features_used`         | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
|  2.2% |  40.0ms |       4 | `mark`                      | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
|  2.2% |  40.0ms |       4 | `maybe_empty_lines`         | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  2.2% |  40.0ms |       4 | `changed`                   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  2.2% |  40.0ms |       4 | `normalize_trailing_prefix` | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|  2.2% |  40.0ms |       4 | `(anonymous)`               | `<unknown>`                                                     |
|  1.7% |  30.0ms |       3 | `__init__`                  | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  1.7% |  30.0ms |       3 | `convert`                   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |

#### Categories

##### Third-party

|     % |    Time | Samples | Function                    | Location                                                        |
| ----: | ------: | ------: | --------------------------- | --------------------------------------------------------------- |
| 10.6% | 190.0ms |      19 | `_addtoken`                 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  7.3% | 130.0ms |      13 | `generate_tokens`           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|  6.1% | 110.0ms |      11 | `visit_default`             | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  4.5% |  80.0ms |       8 | `pop`                       | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  4.5% |  80.0ms |       8 | `<genexpr>`                 | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  3.9% |  70.0ms |       7 | `generate_comments`         | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|  3.4% |  60.0ms |       6 | `visit`                     | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  3.4% |  60.0ms |       6 | `__str__`                   | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  3.4% |  60.0ms |       6 | `update_sibling_maps`       | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  2.8% |  50.0ms |       5 | `push`                      | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  2.2% |  40.0ms |       4 | `__new__`                   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  2.2% |  40.0ms |       4 | `get_features_used`         | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
|  2.2% |  40.0ms |       4 | `mark`                      | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
|  2.2% |  40.0ms |       4 | `maybe_empty_lines`         | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  2.2% |  40.0ms |       4 | `changed`                   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  2.2% |  40.0ms |       4 | `normalize_trailing_prefix` | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|  1.7% |  30.0ms |       3 | `__init__`                  | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  1.7% |  30.0ms |       3 | `convert`                   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  1.7% |  30.0ms |       3 | `prefix`                    | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  1.7% |  30.0ms |       3 | `whitespace`                | `/venv/lib/python3.11/site-packages/black/nodes.py`             |

##### Standard library

|    % |   Time | Samples | Function | Location                     |
| ---: | -----: | ------: | -------- | ---------------------------- |
| 5.0% | 90.0ms |       9 | `parse`  | `/usr/lib/python3.11/ast.py` |

##### Unknown

|    % |   Time | Samples | Function      | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 2.2% | 40.0ms |       4 | `(anonymous)` | `<unknown>` |

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

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|     % |   Time | Samples | Location                                                         |
| ----: | -----: | ------: | ---------------------------------------------------------------- |
| 60.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:394` |
| 40.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:395` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                   |
| ----: | -----: | ------: | ---------------------------------------------------------- |
| 75.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:84` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:83` |

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 50.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/__init__.py:1386` |
| 50.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/__init__.py:1424` |

##### `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|     % |   Time | Samples | Location                                                   |
| ----: | -----: | ------: | ---------------------------------------------------------- |
| 75.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/brackets.py:112` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/brackets.py:103` |

##### `maybe_empty_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|     % |   Time | Samples | Location                                                |
| ----: | -----: | ------: | ------------------------------------------------------- |
| 75.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/lines.py:584` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/lines.py:560` |

##### `changed` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:175` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:176` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:172` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:171` |

##### `normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|     % |   Time | Samples | Location                                                   |
| ----: | -----: | ------: | ---------------------------------------------------------- |
| 75.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/comments.py:132` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/comments.py:134` |

##### `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 66.7% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:266` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:424` |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:494` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:500` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:503` |

##### `prefix` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:483` |

##### `whitespace` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|     % |   Time | Samples | Location                                                |
| ----: | -----: | ------: | ------------------------------------------------------- |
| 66.7% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/nodes.py:287` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/nodes.py:358` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

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

|     % |   Time | Samples | Caller          | Location                                              |
| ----: | -----: | ------: | --------------- | ----------------------------------------------------- |
| 83.3% | 50.0ms |       5 | `visit_default` | `/venv/lib/python3.11/site-packages/black/nodes.py`   |
| 16.7% | 10.0ms |       1 | `visit_funcdef` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `__str__` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|     % |   Time | Samples | Caller             | Location                                               |
| ----: | -----: | ------: | ------------------ | ------------------------------------------------------ |
| 50.0% | 30.0ms |       3 | `line_to_string`   | `/venv/lib/python3.11/site-packages/black/lines.py`    |
| 50.0% | 30.0ms |       3 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `update_sibling_maps` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Caller         | Location                                                |
| -----: | -----: | ------: | -------------- | ------------------------------------------------------- |
| 100.0% | 60.0ms |       6 | `prev_sibling` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Caller      | Location                                                     |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 50.0ms |       5 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller                | Location                                                |
| ----: | -----: | ------: | --------------------- | ------------------------------------------------------- |
| 75.0% | 30.0ms |       3 | `convert`             | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
| 25.0% | 10.0ms |       1 | `wrap_in_parentheses` | `/venv/lib/python3.11/site-packages/black/nodes.py`     |

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |   Time | Samples | Caller                   | Location                                               |
| -----: | -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% | 40.0ms |       4 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|      % |   Time | Samples | Caller   | Location                                            |
| -----: | -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `append` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `maybe_empty_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Caller             | Location                                               |
| -----: | -----: | ------: | ------------------ | ------------------------------------------------------ |
| 100.0% | 40.0ms |       4 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `changed` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Caller   | Location                                                |
| -----: | -----: | ------: | -------- | ------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `prefix` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|      % |   Time | Samples | Caller              | Location                                               |
| -----: | -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 40.0ms |       4 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py` |

##### `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Caller    | Location                                                |
| -----: | -----: | ------: | --------- | ------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `convert` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller  | Location                                                     |
| ----: | -----: | ------: | ------- | ------------------------------------------------------------ |
| 66.7% | 20.0ms |       2 | `pop`   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
| 33.3% | 10.0ms |       1 | `shift` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `prefix` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller                      | Location                                               |
| ----: | -----: | ------: | --------------------------- | ------------------------------------------------------ |
| 66.7% | 20.0ms |       2 | `visit_default`             | `/venv/lib/python3.11/site-packages/black/linegen.py`  |
| 33.3% | 10.0ms |       1 | `normalize_trailing_prefix` | `/venv/lib/python3.11/site-packages/black/comments.py` |

##### `whitespace` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |   Time | Samples | Caller   | Location                                            |
| -----: | -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `append` | `/venv/lib/python3.11/site-packages/black/lines.py` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function               | Location                                                 |
| ----: | ------: | ------: | ---------------------- | -------------------------------------------------------- |
| 97.8% |   1.75s |     175 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 97.8% |   1.75s |     175 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 97.8% |   1.75s |     175 | `reformat_one`         | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 97.8% |   1.75s |     175 | `main`                 | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 97.8% |   1.75s |     175 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py` |
| 97.8% |   1.75s |     175 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py`       |
| 97.8% |   1.75s |     175 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py`       |
| 97.8% |   1.75s |     175 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py`       |
| 97.8% |   1.75s |     175 | `patched_main`         | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 97.8% |   1.75s |     175 | `<module>`             | `/venv/lib/python3.11/site-packages/black/__main__.py`   |
| 97.8% |   1.75s |     175 | `_run_code`            | `<frozen runpy>`                                         |
| 97.8% |   1.75s |     175 | `_run_module_as_main`  | `<frozen runpy>`                                         |
| 89.9% |   1.61s |     161 | `_format_str_once`     | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 64.8% |   1.16s |     116 | `format_str`           | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 40.2% | 720.0ms |      72 | `visit_default`        | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
| 40.2% | 720.0ms |      72 | `visit`                | `/venv/lib/python3.11/site-packages/black/nodes.py`      |
| 40.2% | 720.0ms |      72 | `visit_default`        | `/venv/lib/python3.11/site-packages/black/nodes.py`      |
| 40.2% | 720.0ms |      72 | `visit_stmt`           | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
| 40.2% | 720.0ms |      72 | `visit_suite`          | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
| 40.2% | 720.0ms |      72 | `visit_funcdef`        | `/venv/lib/python3.11/site-packages/black/linegen.py`    |

#### Categories

##### Third-party

|     % |    Time | Samples | Function               | Location                                                      |
| ----: | ------: | ------: | ---------------------- | ------------------------------------------------------------- |
| 97.8% |   1.75s |     175 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 97.8% |   1.75s |     175 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 97.8% |   1.75s |     175 | `reformat_one`         | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 97.8% |   1.75s |     175 | `main`                 | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 97.8% |   1.75s |     175 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py`      |
| 97.8% |   1.75s |     175 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 97.8% |   1.75s |     175 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 97.8% |   1.75s |     175 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 97.8% |   1.75s |     175 | `patched_main`         | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 97.8% |   1.75s |     175 | `<module>`             | `/venv/lib/python3.11/site-packages/black/__main__.py`        |
| 89.9% |   1.61s |     161 | `_format_str_once`     | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 64.8% |   1.16s |     116 | `format_str`           | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 40.2% | 720.0ms |      72 | `visit_default`        | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 40.2% | 720.0ms |      72 | `visit`                | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| 40.2% | 720.0ms |      72 | `visit_default`        | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| 40.2% | 720.0ms |      72 | `visit_stmt`           | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 40.2% | 720.0ms |      72 | `visit_suite`          | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 40.2% | 720.0ms |      72 | `visit_funcdef`        | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 34.1% | 610.0ms |      61 | `parse_tokens`         | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| 34.1% | 610.0ms |      61 | `parse_string`         | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### Standard library

|     % |   Time | Samples | Function              | Location                     |
| ----: | -----: | ------: | --------------------- | ---------------------------- |
| 97.8% |  1.75s |     175 | `_run_code`           | `<frozen runpy>`             |
| 97.8% |  1.75s |     175 | `_run_module_as_main` | `<frozen runpy>`             |
|  5.0% | 90.0ms |       9 | `parse`               | `/usr/lib/python3.11/ast.py` |

##### Unknown

|    % |   Time | Samples | Function      | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 2.2% | 40.0ms |       4 | `(anonymous)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee                            | Location                                               |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------------------ |
| 66.3% |   1.16s |     116 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| 33.7% | 590.0ms |      59 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `format_file_in_place` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.75s |     175 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `reformat_one` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.75s |     175 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 1.75s |     175 | `reformat_one` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`)

|      % |  Time | Samples | Callee | Location                                               |
| -----: | ----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% | 1.75s |     175 | `main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee     | Location                                                 |
| -----: | ----: | ------: | ---------- | -------------------------------------------------------- |
| 100.0% | 1.75s |     175 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py` |
| 100.0% | 1.75s |     175 | `invoke`   | `/venv/lib/python3.11/site-packages/click/core.py`       |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee   | Location                                           |
| -----: | ----: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 1.75s |     175 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee | Location                                           |
| -----: | ----: | ------: | ------ | -------------------------------------------------- |
| 100.0% | 1.75s |     175 | `main` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee     | Location                                           |
| -----: | ----: | ------: | ---------- | -------------------------------------------------- |
| 100.0% | 1.75s |     175 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`)

|      % |  Time | Samples | Callee         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 1.75s |     175 | `patched_main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `_run_code` (`<frozen runpy>`)

|      % |  Time | Samples | Callee     | Location                                               |
| -----: | ----: | ------: | ---------- | ------------------------------------------------------ |
| 100.0% | 1.75s |     175 | `<module>` | `/venv/lib/python3.11/site-packages/black/__main__.py` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % |  Time | Samples | Callee      | Location         |
| -----: | ----: | ------: | ----------- | ---------------- |
| 100.0% | 1.75s |     175 | `_run_code` | `<frozen runpy>` |

##### `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee                   | Location                                               |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------ |
| 44.7% | 720.0ms |      72 | `visit`                  | `/venv/lib/python3.11/site-packages/black/nodes.py`    |
| 37.9% | 610.0ms |      61 | `lib2to3_parse`          | `/venv/lib/python3.11/site-packages/black/parsing.py`  |
|  5.6% |  90.0ms |       9 | `transform_line`         | `/venv/lib/python3.11/site-packages/black/linegen.py`  |
|  4.3% |  70.0ms |       7 | `maybe_empty_lines`      | `/venv/lib/python3.11/site-packages/black/lines.py`    |
|  4.3% |  70.0ms |       7 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `format_str` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee             | Location                                               |
| -----: | ----: | ------: | ------------------ | ------------------------------------------------------ |
| 100.0% | 1.16s |     116 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee              | Location                                                |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% | 720.0ms |      72 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/nodes.py`     |
|  37.5% | 270.0ms |      27 | `append`            | `/venv/lib/python3.11/site-packages/black/lines.py`     |
|  20.8% | 150.0ms |      15 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py`  |
|   2.8% |  20.0ms |       2 | `prefix`            | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
|   1.4% |  10.0ms |       1 | `any_open_brackets` | `/venv/lib/python3.11/site-packages/black/brackets.py`  |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |    Time | Samples | Callee              | Location                                              |
| -----: | ------: | ------: | ------------------- | ----------------------------------------------------- |
| 100.0% | 720.0ms |      72 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| 100.0% | 720.0ms |      72 | `visit_stmt`        | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| 100.0% | 720.0ms |      72 | `visit_suite`       | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| 100.0% | 720.0ms |      72 | `visit_funcdef`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  51.4% | 370.0ms |      37 | `visit_simple_stmt` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |    Time | Samples | Callee  | Location                                            |
| -----: | ------: | ------: | ------- | --------------------------------------------------- |
| 100.0% | 720.0ms |      72 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|     % |    Time | Samples | Callee                       | Location                                              |
| ----: | ------: | ------: | ---------------------------- | ----------------------------------------------------- |
| 98.6% | 710.0ms |      71 | `visit`                      | `/venv/lib/python3.11/site-packages/black/nodes.py`   |
|  2.8% |  20.0ms |       2 | `normalize_invisible_parens` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_suite` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee          | Location                                              |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 720.0ms |      72 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee  | Location                                            |
| -----: | ------: | ------: | ------- | --------------------------------------------------- |
| 100.0% | 720.0ms |      72 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|     % |    Time | Samples | Callee     | Location                                                      |
| ----: | ------: | ------: | ---------- | ------------------------------------------------------------- |
| 73.8% | 450.0ms |      45 | `addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`  |
| 24.6% | 150.0ms |      15 | `__next__` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `parse_string` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|      % |    Time | Samples | Callee         | Location                                                      |
| -----: | ------: | ------: | -------------- | ------------------------------------------------------------- |
| 100.0% | 610.0ms |      61 | `parse_tokens` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.9% | 160.0ms |      16 | `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 5.6% | 100.0ms |      10 | `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`) ← `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 5.0% |  90.0ms |       9 | `parse` (`/usr/lib/python3.11/ast.py`) ← `_parse_single_version` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4.5% |  80.0ms |       8 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 4.5% |  80.0ms |       8 | `<genexpr>` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `is_complex_subscript` ← `append` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_NUMBER` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3.4% |  60.0ms |       6 | `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.2% |  40.0ms |       4 | `maybe_empty_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2.2% |  40.0ms |       4 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.2% |  40.0ms |       4 | `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.7% |  30.0ms |       3 | `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `shift` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.7% |  30.0ms |       3 | `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.7% |  30.0ms |       3 | `update_sibling_maps` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `prev_sibling` ← `whitespace` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `append` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.7% |  30.0ms |       3 | `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.7% |  30.0ms |       3 | `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`) ← `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.1% |  20.0ms |       2 | `shift` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.1% |  20.0ms |       2 | `classify` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.1% |  20.0ms |       2 | `prefix` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str` |
| 1.1% |  20.0ms |       2 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.1% |  20.0ms |       2 | `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.1% |  20.0ms |       2 | `__str__` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `line_to_string` ← `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

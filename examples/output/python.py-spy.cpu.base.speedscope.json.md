# Sampling profile

Took 1.84s over 184 samples (10.0ms per sample).

| Category         |     % |   Time | Samples |
| ---------------- | ----: | -----: | ------: |
| Third-party      | 89.7% |  1.65s |     165 |
| Standard library |  4.9% | 90.0ms |       9 |
| Ours             |  2.7% | 50.0ms |       5 |
| Unknown          |  2.7% | 50.0ms |       5 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                         | Location                                                        |
| ---: | ------: | ------: | -------------------------------- | --------------------------------------------------------------- |
| 9.2% | 170.0ms |      17 | `generate_tokens`                | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| 7.6% | 140.0ms |      14 | `_addtoken`                      | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 7.1% | 130.0ms |      13 | `generate_comments`              | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| 5.4% | 100.0ms |      10 | `__new__`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 4.3% |  80.0ms |       8 | `parse`                          | `/usr/lib/python3.11/ast.py`                                    |
| 3.8% |  70.0ms |       7 | `convert`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 3.3% |  60.0ms |       6 | `mark`                           | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| 3.3% |  60.0ms |       6 | `__init__`                       | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 3.3% |  60.0ms |       6 | `normalize_trailing_prefix`      | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| 2.7% |  50.0ms |       5 | `is_split_before_delimiter`      | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| 2.7% |  50.0ms |       5 | `__init__`                       | `<string>`                                                      |
| 2.7% |  50.0ms |       5 | `_stringify_ast`                 | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
| 2.7% |  50.0ms |       5 | `(anonymous)`                    | `<unknown>`                                                     |
| 2.2% |  40.0ms |       4 | `_format_str_once`               | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
| 2.2% |  40.0ms |       4 | `push`                           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 2.2% |  40.0ms |       4 | `visit`                          | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| 2.2% |  40.0ms |       4 | `hug_power_op`                   | `/venv/lib/python3.11/site-packages/black/trans.py`             |
| 2.2% |  40.0ms |       4 | `_stringify_ast_with_new_parent` | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
| 1.6% |  30.0ms |       3 | `pop`                            | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 1.6% |  30.0ms |       3 | `get_features_used`              | `/venv/lib/python3.11/site-packages/black/__init__.py`          |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                         | Location                                                        |
| ---: | ------: | ------: | -------------------------------- | --------------------------------------------------------------- |
| 9.2% | 170.0ms |      17 | `generate_tokens`                | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| 7.6% | 140.0ms |      14 | `_addtoken`                      | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 7.1% | 130.0ms |      13 | `generate_comments`              | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| 5.4% | 100.0ms |      10 | `__new__`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 3.8% |  70.0ms |       7 | `convert`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 3.3% |  60.0ms |       6 | `mark`                           | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| 3.3% |  60.0ms |       6 | `__init__`                       | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 3.3% |  60.0ms |       6 | `normalize_trailing_prefix`      | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| 2.7% |  50.0ms |       5 | `is_split_before_delimiter`      | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| 2.7% |  50.0ms |       5 | `_stringify_ast`                 | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
| 2.2% |  40.0ms |       4 | `_format_str_once`               | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
| 2.2% |  40.0ms |       4 | `push`                           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 2.2% |  40.0ms |       4 | `visit`                          | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| 2.2% |  40.0ms |       4 | `hug_power_op`                   | `/venv/lib/python3.11/site-packages/black/trans.py`             |
| 2.2% |  40.0ms |       4 | `_stringify_ast_with_new_parent` | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
| 1.6% |  30.0ms |       3 | `pop`                            | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 1.6% |  30.0ms |       3 | `get_features_used`              | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
| 1.6% |  30.0ms |       3 | `run_transformer`                | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| 1.6% |  30.0ms |       3 | `transform_line`                 | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| 1.6% |  30.0ms |       3 | `visit_default`                  | `/venv/lib/python3.11/site-packages/black/linegen.py`           |

##### Standard library

|    % |   Time | Samples | Function    | Location                        |
| ---: | -----: | ------: | ----------- | ------------------------------- |
| 4.3% | 80.0ms |       8 | `parse`     | `/usr/lib/python3.11/ast.py`    |
| 0.5% | 10.0ms |       1 | `__enter__` | `<frozen importlib._bootstrap>` |

##### Ours

|    % |   Time | Samples | Function   | Location   |
| ---: | -----: | ------: | ---------- | ---------- |
| 2.7% | 50.0ms |       5 | `__init__` | `<string>` |

##### Unknown

|    % |   Time | Samples | Function      | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 2.7% | 50.0ms |       5 | `(anonymous)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|     % |   Time | Samples | Location                                                             |
| ----: | -----: | ------: | -------------------------------------------------------------------- |
| 23.5% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:875`  |
| 11.8% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:1103` |
| 11.8% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:624`  |
|  5.9% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:781`  |
|  5.9% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:826`  |

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|     % |   Time | Samples | Location                                                         |
| ----: | -----: | ------: | ---------------------------------------------------------------- |
| 21.4% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:293` |
| 21.4% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:314` |
| 14.3% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:301` |
| 14.3% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:297` |
|  7.1% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:302` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|      % |    Time | Samples | Location                                                  |
| -----: | ------: | ------: | --------------------------------------------------------- |
| 100.0% | 130.0ms |      13 | `/venv/lib/python3.11/site-packages/black/comments.py:72` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |    Time | Samples | Location                                                   |
| -----: | ------: | ------: | ---------------------------------------------------------- |
| 100.0% | 100.0ms |      10 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:84` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |   Time | Samples | Location                        |
| -----: | -----: | ------: | ------------------------------- |
| 100.0% | 80.0ms |       8 | `/usr/lib/python3.11/ast.py:50` |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 42.9% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:503` |
| 42.9% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:501` |
| 14.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:494` |

##### `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|     % |   Time | Samples | Location                                                   |
| ----: | -----: | ------: | ---------------------------------------------------------- |
| 66.7% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/black/brackets.py:112` |
| 16.7% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/brackets.py:128` |
| 16.7% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/brackets.py:93`  |

##### `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 60.0ms |       6 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:424` |

##### `normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|     % |   Time | Samples | Location                                                   |
| ----: | -----: | ------: | ---------------------------------------------------------- |
| 50.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/comments.py:134` |
| 33.3% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/comments.py:133` |
| 16.7% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/comments.py:132` |

##### `is_split_before_delimiter` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|     % |   Time | Samples | Location                                                   |
| ----: | -----: | ------: | ---------------------------------------------------------- |
| 80.0% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/black/brackets.py:240` |
| 20.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/brackets.py:270` |

##### `__init__` (`<string>`)

|     % |   Time | Samples | Location     |
| ----: | -----: | ------: | ------------ |
| 40.0% | 20.0ms |       2 | `<string>:4` |
| 40.0% | 20.0ms |       2 | `<string>:7` |
| 20.0% | 10.0ms |       1 | `<string>:6` |

##### `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|     % |   Time | Samples | Location                                                  |
| ----: | -----: | ------: | --------------------------------------------------------- |
| 60.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/parsing.py:244` |
| 20.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/parsing.py:214` |
| 20.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/parsing.py:197` |

##### `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |   Time | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/black/__init__.py:1271` |

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|     % |   Time | Samples | Location                                                         |
| ----: | -----: | ------: | ---------------------------------------------------------------- |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:394` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:393` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:396` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:388` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|     % |   Time | Samples | Location                                                |
| ----: | -----: | ------: | ------------------------------------------------------- |
| 50.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/nodes.py:163` |
| 50.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/nodes.py:181` |

##### `hug_power_op` (`/venv/lib/python3.11/site-packages/black/trans.py`)

|     % |   Time | Samples | Location                                               |
| ----: | -----: | ------: | ------------------------------------------------------ |
| 75.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/trans.py:95` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/trans.py:91` |

##### `_stringify_ast_with_new_parent` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|     % |   Time | Samples | Location                                                  |
| ----: | -----: | ------: | --------------------------------------------------------- |
| 75.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/parsing.py:170` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/parsing.py:169` |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|     % |   Time | Samples | Location                                                         |
| ----: | -----: | ------: | ---------------------------------------------------------------- |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:408` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:406` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:404` |

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/__init__.py:1367` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/__init__.py:1436` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/__init__.py:1335` |

##### `run_transformer` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |   Time | Samples | Location                                                   |
| -----: | -----: | ------: | ---------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/linegen.py:1766` |

##### `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|     % |   Time | Samples | Location                                                  |
| ----: | -----: | ------: | --------------------------------------------------------- |
| 66.7% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/linegen.py:679` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/linegen.py:714` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|     % |   Time | Samples | Location                                                  |
| ----: | -----: | ------: | --------------------------------------------------------- |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/linegen.py:138` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/linegen.py:134` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/linegen.py:158` |

##### `__enter__` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Location                            |
| -----: | -----: | ------: | ----------------------------------- |
| 100.0% | 10.0ms |       1 | `<frozen importlib._bootstrap>:171` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|      % |    Time | Samples | Caller     | Location                                                      |
| -----: | ------: | ------: | ---------- | ------------------------------------------------------------- |
| 100.0% | 170.0ms |      17 | `__next__` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |    Time | Samples | Caller     | Location                                                     |
| -----: | ------: | ------: | ---------- | ------------------------------------------------------------ |
| 100.0% | 140.0ms |      14 | `addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|      % |    Time | Samples | Caller          | Location                                              |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 130.0ms |      13 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |    Time | Samples | Caller    | Location                                                |
| -----: | ------: | ------: | --------- | ------------------------------------------------------- |
| 100.0% | 100.0ms |      10 | `convert` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |   Time | Samples | Caller                  | Location                                              |
| -----: | -----: | ------: | ----------------------- | ----------------------------------------------------- |
| 100.0% | 80.0ms |       8 | `_parse_single_version` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller  | Location                                                     |
| ----: | -----: | ------: | ------- | ------------------------------------------------------------ |
| 57.1% | 40.0ms |       4 | `pop`   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
| 42.9% | 30.0ms |       3 | `shift` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|      % |   Time | Samples | Caller   | Location                                            |
| -----: | -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 60.0ms |       6 | `append` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller    | Location                                                |
| ----: | -----: | ------: | --------- | ------------------------------------------------------- |
| 66.7% | 40.0ms |       4 | `clone`   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
| 33.3% | 20.0ms |       2 | `convert` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|      % |   Time | Samples | Caller              | Location                                               |
| -----: | -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 60.0ms |       6 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py` |

##### `is_split_before_delimiter` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|      % |   Time | Samples | Caller | Location                                               |
| -----: | -----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% | 50.0ms |       5 | `mark` | `/venv/lib/python3.11/site-packages/black/brackets.py` |

##### `__init__` (`<string>`)

|     % |   Time | Samples | Caller              | Location                                            |
| ----: | -----: | ------: | ------------------- | --------------------------------------------------- |
| 60.0% | 30.0ms |       3 | `__init__`          | `<string>`                                          |
| 20.0% | 10.0ms |       1 | `all_lines`         | `/venv/lib/python3.11/site-packages/black/lines.py` |
| 20.0% | 10.0ms |       1 | `maybe_empty_lines` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|      % |   Time | Samples | Caller                           | Location                                              |
| -----: | -----: | ------: | -------------------------------- | ----------------------------------------------------- |
| 100.0% | 50.0ms |       5 | `_stringify_ast_with_new_parent` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |   Time | Samples | Caller          | Location                                               |
| -----: | -----: | ------: | --------------- | ------------------------------------------------------ |
| 100.0% | 40.0ms |       4 | `assert_stable` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Caller      | Location                                                     |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 40.0ms |       4 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |   Time | Samples | Caller          | Location                                            |
| -----: | -----: | ------: | --------------- | --------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `visit_default` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `hug_power_op` (`/venv/lib/python3.11/site-packages/black/trans.py`)

|     % |   Time | Samples | Caller                              | Location                                              |
| ----: | -----: | ------: | ----------------------------------- | ----------------------------------------------------- |
| 75.0% | 30.0ms |       3 | `run_transformer`                   | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| 25.0% | 10.0ms |       1 | `_hugging_power_ops_line_to_string` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `_stringify_ast_with_new_parent` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|      % |   Time | Samples | Caller           | Location                                              |
| -----: | -----: | ------: | ---------------- | ----------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `_stringify_ast` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Caller      | Location                                                     |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 30.0ms |       3 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |   Time | Samples | Caller                   | Location                                               |
| -----: | -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% | 30.0ms |       3 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `run_transformer` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |   Time | Samples | Caller           | Location                                              |
| -----: | -----: | ------: | ---------------- | ----------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `transform_line` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|     % |   Time | Samples | Caller             | Location                                               |
| ----: | -----: | ------: | ------------------ | ------------------------------------------------------ |
| 66.7% | 20.0ms |       2 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| 33.3% | 10.0ms |       1 | `run_transformer`  | `/venv/lib/python3.11/site-packages/black/linegen.py`  |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|     % |   Time | Samples | Caller        | Location                                              |
| ----: | -----: | ------: | ------------- | ----------------------------------------------------- |
| 66.7% | 20.0ms |       2 | `visit`       | `/venv/lib/python3.11/site-packages/black/nodes.py`   |
| 33.3% | 10.0ms |       1 | `visit_suite` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `__enter__` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Caller           | Location                        |
| -----: | -----: | ------: | ---------------- | ------------------------------- |
| 100.0% | 10.0ms |       1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                          | Location                                                      |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------------------------- |
| 97.3% |   1.79s |     179 | `_run_module_as_main`             | `<frozen runpy>`                                              |
| 96.7% |   1.78s |     178 | `format_file_contents`            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.7% |   1.78s |     178 | `format_file_in_place`            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.7% |   1.78s |     178 | `reformat_one`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.7% |   1.78s |     178 | `main`                            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.7% |   1.78s |     178 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py`      |
| 96.7% |   1.78s |     178 | `invoke`                          | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 96.7% |   1.78s |     178 | `main`                            | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 96.7% |   1.78s |     178 | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 96.7% |   1.78s |     178 | `patched_main`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.7% |   1.78s |     178 | `<module>`                        | `/venv/lib/python3.11/site-packages/black/__main__.py`        |
| 96.7% |   1.78s |     178 | `_run_code`                       | `<frozen runpy>`                                              |
| 86.4% |   1.59s |     159 | `_format_str_once`                | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 59.2% |   1.09s |     109 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 37.5% | 690.0ms |      69 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 34.2% | 630.0ms |      63 | `parse_tokens`                    | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| 34.2% | 630.0ms |      63 | `parse_string`                    | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| 34.2% | 630.0ms |      63 | `lib2to3_parse`                   | `/venv/lib/python3.11/site-packages/black/parsing.py`         |
| 30.4% | 560.0ms |      56 | `visit_default`                   | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 30.4% | 560.0ms |      56 | `visit`                           | `/venv/lib/python3.11/site-packages/black/nodes.py`           |

#### Categories

##### Third-party

|     % |    Time | Samples | Function                          | Location                                                      |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------------------------- |
| 96.7% |   1.78s |     178 | `format_file_contents`            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.7% |   1.78s |     178 | `format_file_in_place`            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.7% |   1.78s |     178 | `reformat_one`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.7% |   1.78s |     178 | `main`                            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.7% |   1.78s |     178 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py`      |
| 96.7% |   1.78s |     178 | `invoke`                          | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 96.7% |   1.78s |     178 | `main`                            | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 96.7% |   1.78s |     178 | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 96.7% |   1.78s |     178 | `patched_main`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.7% |   1.78s |     178 | `<module>`                        | `/venv/lib/python3.11/site-packages/black/__main__.py`        |
| 86.4% |   1.59s |     159 | `_format_str_once`                | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 59.2% |   1.09s |     109 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 37.5% | 690.0ms |      69 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 34.2% | 630.0ms |      63 | `parse_tokens`                    | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| 34.2% | 630.0ms |      63 | `parse_string`                    | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| 34.2% | 630.0ms |      63 | `lib2to3_parse`                   | `/venv/lib/python3.11/site-packages/black/parsing.py`         |
| 30.4% | 560.0ms |      56 | `visit_default`                   | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 30.4% | 560.0ms |      56 | `visit`                           | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| 30.4% | 560.0ms |      56 | `visit_default`                   | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| 29.3% | 540.0ms |      54 | `visit_stmt`                      | `/venv/lib/python3.11/site-packages/black/linegen.py`         |

##### Standard library

|     % |   Time | Samples | Function                    | Location                                 |
| ----: | -----: | ------: | --------------------------- | ---------------------------------------- |
| 97.3% |  1.79s |     179 | `_run_module_as_main`       | `<frozen runpy>`                         |
| 96.7% |  1.78s |     178 | `_run_code`                 | `<frozen runpy>`                         |
|  4.3% | 80.0ms |       8 | `parse`                     | `/usr/lib/python3.11/ast.py`             |
|  0.5% | 10.0ms |       1 | `__enter__`                 | `<frozen importlib._bootstrap>`          |
|  0.5% | 10.0ms |       1 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
|  0.5% | 10.0ms |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  0.5% | 10.0ms |       1 | `exec_module`               | `<frozen importlib._bootstrap_external>` |
|  0.5% | 10.0ms |       1 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|  0.5% | 10.0ms |       1 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
|  0.5% | 10.0ms |       1 | `_get_module_details`       | `<frozen runpy>`                         |

##### Ours

|    % |   Time | Samples | Function   | Location   |
| ---: | -----: | ------: | ---------- | ---------- |
| 2.7% | 50.0ms |       5 | `__init__` | `<string>` |

##### Unknown

|    % |   Time | Samples | Function      | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 2.7% | 50.0ms |       5 | `(anonymous)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_module_as_main` (`<frozen runpy>`)

|     % |   Time | Samples | Callee                | Location         |
| ----: | -----: | ------: | --------------------- | ---------------- |
| 99.4% |  1.78s |     178 | `_run_code`           | `<frozen runpy>` |
|  0.6% | 10.0ms |       1 | `_get_module_details` | `<frozen runpy>` |

##### `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee                            | Location                                               |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------------------ |
| 61.2% |   1.09s |     109 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| 38.8% | 690.0ms |      69 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `format_file_in_place` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.78s |     178 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `reformat_one` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.78s |     178 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 1.78s |     178 | `reformat_one` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`)

|      % |  Time | Samples | Callee | Location                                               |
| -----: | ----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% | 1.78s |     178 | `main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee     | Location                                                 |
| -----: | ----: | ------: | ---------- | -------------------------------------------------------- |
| 100.0% | 1.78s |     178 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py` |
| 100.0% | 1.78s |     178 | `invoke`   | `/venv/lib/python3.11/site-packages/click/core.py`       |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee   | Location                                           |
| -----: | ----: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 1.78s |     178 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee | Location                                           |
| -----: | ----: | ------: | ------ | -------------------------------------------------- |
| 100.0% | 1.78s |     178 | `main` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee     | Location                                           |
| -----: | ----: | ------: | ---------- | -------------------------------------------------- |
| 100.0% | 1.78s |     178 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`)

|      % |  Time | Samples | Callee         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 1.78s |     178 | `patched_main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `_run_code` (`<frozen runpy>`)

|      % |  Time | Samples | Callee     | Location                                               |
| -----: | ----: | ------: | ---------- | ------------------------------------------------------ |
| 100.0% | 1.78s |     178 | `<module>` | `/venv/lib/python3.11/site-packages/black/__main__.py` |

##### `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee                   | Location                                               |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------ |
| 39.6% | 630.0ms |      63 | `lib2to3_parse`          | `/venv/lib/python3.11/site-packages/black/parsing.py`  |
| 35.2% | 560.0ms |      56 | `visit`                  | `/venv/lib/python3.11/site-packages/black/nodes.py`    |
| 14.5% | 230.0ms |      23 | `transform_line`         | `/venv/lib/python3.11/site-packages/black/linegen.py`  |
|  2.5% |  40.0ms |       4 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |
|  2.5% |  40.0ms |       4 | `all_lines`              | `/venv/lib/python3.11/site-packages/black/lines.py`    |

##### `format_str` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee             | Location                                               |
| -----: | ----: | ------: | ------------------ | ------------------------------------------------------ |
| 100.0% | 1.09s |     109 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `check_stability_and_equivalence` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee              | Location                                               |
| ----: | ------: | ------: | ------------------- | ------------------------------------------------------ |
| 72.5% | 500.0ms |      50 | `assert_stable`     | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| 27.5% | 190.0ms |      19 | `assert_equivalent` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|     % |    Time | Samples | Callee     | Location                                                      |
| ----: | ------: | ------: | ---------- | ------------------------------------------------------------- |
| 65.1% | 410.0ms |      41 | `addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`  |
| 31.7% | 200.0ms |      20 | `__next__` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `parse_string` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|      % |    Time | Samples | Callee         | Location                                                      |
| -----: | ------: | ------: | -------------- | ------------------------------------------------------------- |
| 100.0% | 630.0ms |      63 | `parse_tokens` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|      % |    Time | Samples | Callee         | Location                                                      |
| -----: | ------: | ------: | -------------- | ------------------------------------------------------------- |
| 100.0% | 630.0ms |      63 | `parse_string` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee              | Location                                               |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 560.0ms |      56 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/nodes.py`    |
|  35.7% | 200.0ms |      20 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py` |
|  33.9% | 190.0ms |      19 | `append`            | `/venv/lib/python3.11/site-packages/black/lines.py`    |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |    Time | Samples | Callee              | Location                                              |
| -----: | ------: | ------: | ------------------- | ----------------------------------------------------- |
| 100.0% | 560.0ms |      56 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  96.4% | 540.0ms |      54 | `visit_stmt`        | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  92.9% | 520.0ms |      52 | `visit_suite`       | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  92.9% | 520.0ms |      52 | `visit_funcdef`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  69.6% | 390.0ms |      39 | `visit_simple_stmt` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |    Time | Samples | Callee  | Location                                            |
| -----: | ------: | ------: | ------- | --------------------------------------------------- |
| 100.0% | 560.0ms |      56 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee  | Location                                              |
| -----: | ------: | ------: | ------- | ----------------------------------------------------- |
| 100.0% | 540.0ms |      54 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py`   |
|   3.7% |  20.0ms |       2 | `line`  | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `__init__` (`<string>`)

|     % |   Time | Samples | Callee     | Location   |
| ----: | -----: | ------: | ---------- | ---------- |
| 60.0% | 30.0ms |       3 | `__init__` | `<string>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee                    | Location                        |
| -----: | -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% | 10.0ms |       1 | `__enter__`               | `<frozen importlib._bootstrap>` |
| 100.0% | 10.0ms |       1 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee     | Location                                                      |
| -----: | -----: | ------: | ---------- | ------------------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `<module>` | `/venv/lib/python3.11/site-packages/platformdirs/__init__.py` |
| 100.0% | 10.0ms |       1 | `<module>` | `/venv/lib/python3.11/site-packages/black/cache.py`           |
| 100.0% | 10.0ms |       1 | `<module>` | `/venv/lib/python3.11/site-packages/black/__init__.py`        |

##### `exec_module` (`<frozen importlib._bootstrap_external>`)

|      % |   Time | Samples | Callee                      | Location                        |
| -----: | -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% | 10.0ms |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee        | Location                                 |
| -----: | -----: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 10.0ms |       1 | `exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee           | Location                        |
| -----: | -----: | ------: | ---------------- | ------------------------------- |
| 100.0% | 10.0ms |       1 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % |   Time | Samples | Callee                | Location                        |
| -----: | -----: | ------: | --------------------- | ------------------------------- |
| 100.0% | 10.0ms |       1 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% | 10.0ms |       1 | `_get_module_details` | `<frozen runpy>`                |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.4% | 100.0ms |      10 | `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 5.4% | 100.0ms |      10 | `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`) ← `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4.9% |  90.0ms |       9 | `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 4.3% |  80.0ms |       8 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str` |
| 4.3% |  80.0ms |       8 | `parse` (`/usr/lib/python3.11/ast.py`) ← `_parse_single_version` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.8% |  70.0ms |       7 | `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`) ← `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.2% |  40.0ms |       4 | `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `clone` ← `hug_power_op` (`/venv/lib/python3.11/site-packages/black/trans.py`) ← `_hugging_power_ops_line_to_string` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `transform_line` ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.2% |  40.0ms |       4 | `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.2% |  40.0ms |       4 | `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.6% |  30.0ms |       3 | `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.6% |  30.0ms |       3 | `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.6% |  30.0ms |       3 | `run_transformer` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `transform_line` ← `run_transformer` ← `transform_line` ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.6% |  30.0ms |       3 | `is_split_before_delimiter` (`/venv/lib/python3.11/site-packages/black/brackets.py`) ← `mark` ← `append` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.6% |  30.0ms |       3 | `normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `generate_comments` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_NUMBER` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.6% |  30.0ms |       3 | `hug_power_op` (`/venv/lib/python3.11/site-packages/black/trans.py`) ← `run_transformer` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `transform_line` ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.6% |  30.0ms |       3 | `__str__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `__str__` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `line_to_string` ← `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.6% |  30.0ms |       3 | `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.6% |  30.0ms |       3 | `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.1% |  20.0ms |       2 | `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `shift` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.1% |  20.0ms |       2 | `<genexpr>` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`) ← `is_fstring_start` ← `generate_tokens` ← `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

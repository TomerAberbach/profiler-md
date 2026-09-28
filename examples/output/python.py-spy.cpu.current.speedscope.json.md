# Sampling profile

Took 2s over 200 samples (10.0ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Third-party      | 87.5% |   1.75s |     175 |
| Standard library |  8.5% | 170.0ms |      17 |
| Unknown          |  3.5% |  70.0ms |       7 |
| Ours             |  0.5% |  10.0ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function              | Location                                                        |
| ---: | ------: | ------: | --------------------- | --------------------------------------------------------------- |
| 9.0% | 180.0ms |      18 | `_addtoken`           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 5.5% | 110.0ms |      11 | `generate_tokens`     | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| 5.5% | 110.0ms |      11 | `generate_comments`   | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| 5.0% | 100.0ms |      10 | `push`                | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 5.0% | 100.0ms |      10 | `parse`               | `/usr/lib/python3.11/ast.py`                                    |
| 4.0% |  80.0ms |       8 | `__new__`             | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 3.5% |  70.0ms |       7 | `parse_tokens`        | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`   |
| 3.5% |  70.0ms |       7 | `get_features_used`   | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
| 3.5% |  70.0ms |       7 | `_stringify_ast`      | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
| 3.5% |  70.0ms |       7 | `(anonymous)`         | `<unknown>`                                                     |
| 3.0% |  60.0ms |       6 | `mark`                | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| 2.5% |  50.0ms |       5 | `visit_default`       | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| 2.5% |  50.0ms |       5 | `update_sibling_maps` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 2.0% |  40.0ms |       4 | `convert`             | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 2.0% |  40.0ms |       4 | `pop`                 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 2.0% |  40.0ms |       4 | `changed`             | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 1.5% |  30.0ms |       3 | `__init__`            | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 1.5% |  30.0ms |       3 | `_compile`            | `/usr/lib/python3.11/re/__init__.py`                            |
| 1.5% |  30.0ms |       3 | `visit`               | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| 1.5% |  30.0ms |       3 | `transform_line`      | `/venv/lib/python3.11/site-packages/black/linegen.py`           |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                    | Location                                                        |
| ---: | ------: | ------: | --------------------------- | --------------------------------------------------------------- |
| 9.0% | 180.0ms |      18 | `_addtoken`                 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 5.5% | 110.0ms |      11 | `generate_tokens`           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| 5.5% | 110.0ms |      11 | `generate_comments`         | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| 5.0% | 100.0ms |      10 | `push`                      | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 4.0% |  80.0ms |       8 | `__new__`                   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 3.5% |  70.0ms |       7 | `parse_tokens`              | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`   |
| 3.5% |  70.0ms |       7 | `get_features_used`         | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
| 3.5% |  70.0ms |       7 | `_stringify_ast`            | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
| 3.0% |  60.0ms |       6 | `mark`                      | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| 2.5% |  50.0ms |       5 | `visit_default`             | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| 2.5% |  50.0ms |       5 | `update_sibling_maps`       | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 2.0% |  40.0ms |       4 | `convert`                   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 2.0% |  40.0ms |       4 | `pop`                       | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 2.0% |  40.0ms |       4 | `changed`                   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 1.5% |  30.0ms |       3 | `__init__`                  | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 1.5% |  30.0ms |       3 | `visit`                     | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| 1.5% |  30.0ms |       3 | `transform_line`            | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| 1.5% |  30.0ms |       3 | `prefix`                    | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 1.5% |  30.0ms |       3 | `append`                    | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| 1.5% |  30.0ms |       3 | `normalize_trailing_prefix` | `/venv/lib/python3.11/site-packages/black/comments.py`          |

##### Standard library

|    % |    Time | Samples | Function                  | Location                                 |
| ---: | ------: | ------: | ------------------------- | ---------------------------------------- |
| 5.0% | 100.0ms |      10 | `parse`                   | `/usr/lib/python3.11/ast.py`             |
| 1.5% |  30.0ms |       3 | `_compile`                | `/usr/lib/python3.11/re/__init__.py`     |
| 0.5% |  10.0ms |       1 | `get_data`                | `<frozen importlib._bootstrap_external>` |
| 0.5% |  10.0ms |       1 | `_signature_bound_method` | `/usr/lib/python3.11/inspect.py`         |
| 0.5% |  10.0ms |       1 | `_parse`                  | `/usr/lib/python3.11/re/_parser.py`      |
| 0.5% |  10.0ms |       1 | `_subx`                   | `/usr/lib/python3.11/re/__init__.py`     |

##### Unknown

|    % |   Time | Samples | Function      | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 3.5% | 70.0ms |       7 | `(anonymous)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|     % |   Time | Samples | Location                                                         |
| ----: | -----: | ------: | ---------------------------------------------------------------- |
| 16.7% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:285` |
| 16.7% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:287` |
| 16.7% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:314` |
| 11.1% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:302` |
| 11.1% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:293` |

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|     % |   Time | Samples | Location                                                             |
| ----: | -----: | ------: | -------------------------------------------------------------------- |
| 54.5% | 60.0ms |       6 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:864`  |
| 18.2% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:707`  |
|  9.1% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:870`  |
|  9.1% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:961`  |
|  9.1% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:1033` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|      % |    Time | Samples | Location                                                  |
| -----: | ------: | ------: | --------------------------------------------------------- |
| 100.0% | 110.0ms |      11 | `/venv/lib/python3.11/site-packages/black/comments.py:72` |

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |    Time | Samples | Location                                                         |
| -----: | ------: | ------: | ---------------------------------------------------------------- |
| 100.0% | 100.0ms |      10 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:382` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |    Time | Samples | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 100.0ms |      10 | `/usr/lib/python3.11/ast.py:50` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                   |
| ----: | -----: | ------: | ---------------------------------------------------------- |
| 75.0% | 60.0ms |       6 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:73` |
| 25.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:72` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|     % |   Time | Samples | Location                                                          |
| ----: | -----: | ------: | ----------------------------------------------------------------- |
| 57.1% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py:172` |
| 28.6% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py:145` |
| 14.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py:151` |

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 42.9% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/__init__.py:1365` |
| 28.6% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/__init__.py:1339` |
| 14.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/__init__.py:1373` |
| 14.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/__init__.py:1315` |

##### `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|     % |   Time | Samples | Location                                                  |
| ----: | -----: | ------: | --------------------------------------------------------- |
| 28.6% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/parsing.py:225` |
| 28.6% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/parsing.py:252` |
| 28.6% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/parsing.py:195` |
| 14.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/parsing.py:205` |

##### `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|     % |   Time | Samples | Location                                                   |
| ----: | -----: | ------: | ---------------------------------------------------------- |
| 66.7% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/black/brackets.py:112` |
| 16.7% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/brackets.py:100` |
| 16.7% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/brackets.py:121` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|     % |   Time | Samples | Location                                                  |
| ----: | -----: | ------: | --------------------------------------------------------- |
| 40.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/linegen.py:138` |
| 40.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/linegen.py:158` |
| 20.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/linegen.py:137` |

##### `update_sibling_maps` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 60.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:366` |
| 20.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:368` |
| 20.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:365` |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 50.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:492` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:488` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:490` |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|     % |   Time | Samples | Location                                                         |
| ----: | -----: | ------: | ---------------------------------------------------------------- |
| 75.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:391` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:392` |

##### `changed` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 50.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:165` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:164` |
| 25.0% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:161` |

##### `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 66.7% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:413` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:255` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py`)

|      % |   Time | Samples | Location                                 |
| -----: | -----: | ------: | ---------------------------------------- |
| 100.0% | 30.0ms |       3 | `/usr/lib/python3.11/re/__init__.py:274` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|     % |   Time | Samples | Location                                                |
| ----: | -----: | ------: | ------------------------------------------------------- |
| 66.7% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/nodes.py:152` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/nodes.py:174` |

##### `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|     % |   Time | Samples | Location                                                  |
| ----: | -----: | ------: | --------------------------------------------------------- |
| 66.7% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/linegen.py:714` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/linegen.py:619` |

##### `prefix` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 66.7% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:471` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:462` |

##### `append` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|     % |   Time | Samples | Location                                               |
| ----: | -----: | ------: | ------------------------------------------------------ |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/lines.py:86` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/lines.py:65` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/lines.py:78` |

##### `normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|     % |   Time | Samples | Location                                                   |
| ----: | -----: | ------: | ---------------------------------------------------------- |
| 66.7% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/comments.py:132` |
| 33.3% | 10.0ms |       1 | `/venv/lib/python3.11/site-packages/black/comments.py:127` |

##### `get_data` (`<frozen importlib._bootstrap_external>`)

|      % |   Time | Samples | Location                                      |
| -----: | -----: | ------: | --------------------------------------------- |
| 100.0% | 10.0ms |       1 | `<frozen importlib._bootstrap_external>:1131` |

##### `_signature_bound_method` (`/usr/lib/python3.11/inspect.py`)

|      % |   Time | Samples | Location                              |
| -----: | -----: | ------: | ------------------------------------- |
| 100.0% | 10.0ms |       1 | `/usr/lib/python3.11/inspect.py:2051` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py`)

|      % |   Time | Samples | Location                                |
| -----: | -----: | ------: | --------------------------------------- |
| 100.0% | 10.0ms |       1 | `/usr/lib/python3.11/re/_parser.py:512` |

##### `_subx` (`/usr/lib/python3.11/re/__init__.py`)

|      % |   Time | Samples | Location                                 |
| -----: | -----: | ------: | ---------------------------------------- |
| 100.0% | 10.0ms |       1 | `/usr/lib/python3.11/re/__init__.py:317` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |    Time | Samples | Caller     | Location                                                     |
| -----: | ------: | ------: | ---------- | ------------------------------------------------------------ |
| 100.0% | 180.0ms |      18 | `addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|      % |    Time | Samples | Caller     | Location                                                      |
| -----: | ------: | ------: | ---------- | ------------------------------------------------------------- |
| 100.0% | 110.0ms |      11 | `__next__` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|      % |    Time | Samples | Caller          | Location                                              |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 110.0ms |      11 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |    Time | Samples | Caller      | Location                                                     |
| -----: | ------: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 100.0ms |      10 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |    Time | Samples | Caller                  | Location                                              |
| -----: | ------: | ------: | ----------------------- | ----------------------------------------------------- |
| 100.0% | 100.0ms |      10 | `_parse_single_version` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Caller    | Location                                                |
| -----: | -----: | ------: | --------- | ------------------------------------------------------- |
| 100.0% | 80.0ms |       8 | `convert` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|      % |   Time | Samples | Caller         | Location                                                      |
| -----: | -----: | ------: | -------------- | ------------------------------------------------------------- |
| 100.0% | 70.0ms |       7 | `parse_string` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |   Time | Samples | Caller                   | Location                                               |
| -----: | -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% | 70.0ms |       7 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|      % |   Time | Samples | Caller                           | Location                                              |
| -----: | -----: | ------: | -------------------------------- | ----------------------------------------------------- |
| 100.0% | 70.0ms |       7 | `_stringify_ast_with_new_parent` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|      % |   Time | Samples | Caller   | Location                                            |
| -----: | -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 60.0ms |       6 | `append` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |   Time | Samples | Caller  | Location                                            |
| -----: | -----: | ------: | ------- | --------------------------------------------------- |
| 100.0% | 50.0ms |       5 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `update_sibling_maps` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Caller         | Location                                                |
| -----: | -----: | ------: | -------------- | ------------------------------------------------------- |
| 100.0% | 50.0ms |       5 | `prev_sibling` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller  | Location                                                     |
| ----: | -----: | ------: | ------- | ------------------------------------------------------------ |
| 50.0% | 20.0ms |       2 | `shift` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
| 50.0% | 20.0ms |       2 | `pop`   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Caller      | Location                                                     |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 40.0ms |       4 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `changed` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller    | Location                                                |
| ----: | -----: | ------: | --------- | ------------------------------------------------------- |
| 50.0% | 20.0ms |       2 | `changed` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
| 50.0% | 20.0ms |       2 | `prefix`  | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller    | Location                                                |
| ----: | -----: | ------: | --------- | ------------------------------------------------------- |
| 66.7% | 20.0ms |       2 | `convert` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
| 33.3% | 10.0ms |       1 | `clone`   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py`)

|      % |   Time | Samples | Caller   | Location                             |
| -----: | -----: | ------: | -------- | ------------------------------------ |
| 100.0% | 30.0ms |       3 | `search` | `/usr/lib/python3.11/re/__init__.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |   Time | Samples | Caller          | Location                                            |
| -----: | -----: | ------: | --------------- | --------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `visit_default` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|     % |   Time | Samples | Caller             | Location                                               |
| ----: | -----: | ------: | ------------------ | ------------------------------------------------------ |
| 66.7% | 20.0ms |       2 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| 33.3% | 10.0ms |       1 | `run_transformer`  | `/venv/lib/python3.11/site-packages/black/linegen.py`  |

##### `prefix` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller                      | Location                                               |
| ----: | -----: | ------: | --------------------------- | ------------------------------------------------------ |
| 33.3% | 10.0ms |       1 | `_maybe_empty_lines`        | `/venv/lib/python3.11/site-packages/black/lines.py`    |
| 33.3% | 10.0ms |       1 | `generate_comments`         | `/venv/lib/python3.11/site-packages/black/comments.py` |
| 33.3% | 10.0ms |       1 | `normalize_trailing_prefix` | `/venv/lib/python3.11/site-packages/black/comments.py` |

##### `append` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Caller          | Location                                              |
| -----: | -----: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|      % |   Time | Samples | Caller              | Location                                               |
| -----: | -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 30.0ms |       3 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py` |

##### `get_data` (`<frozen importlib._bootstrap_external>`)

|      % |   Time | Samples | Caller     | Location                                 |
| -----: | -----: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 10.0ms |       1 | `get_code` | `<frozen importlib._bootstrap_external>` |

##### `_signature_bound_method` (`/usr/lib/python3.11/inspect.py`)

|      % |   Time | Samples | Caller                     | Location                         |
| -----: | -----: | ------: | -------------------------- | -------------------------------- |
| 100.0% | 10.0ms |       1 | `_signature_from_callable` | `/usr/lib/python3.11/inspect.py` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py`)

|      % |   Time | Samples | Caller       | Location                            |
| -----: | -----: | ------: | ------------ | ----------------------------------- |
| 100.0% | 10.0ms |       1 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py` |

##### `_subx` (`/usr/lib/python3.11/re/__init__.py`)

|      % |   Time | Samples | Caller      | Location                                              |
| -----: | -----: | ------: | ----------- | ----------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `sub_twice` | `/venv/lib/python3.11/site-packages/black/strings.py` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function               | Location                                                 |
| ----: | ------: | ------: | ---------------------- | -------------------------------------------------------- |
| 96.5% |   1.93s |     193 | `_run_module_as_main`  | `<frozen runpy>`                                         |
| 95.5% |   1.91s |     191 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 95.5% |   1.91s |     191 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 95.5% |   1.91s |     191 | `reformat_one`         | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 95.5% |   1.91s |     191 | `main`                 | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 95.5% |   1.91s |     191 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py` |
| 95.5% |   1.91s |     191 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py`       |
| 95.5% |   1.91s |     191 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py`       |
| 95.5% |   1.91s |     191 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py`       |
| 95.5% |   1.91s |     191 | `patched_main`         | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 95.5% |   1.91s |     191 | `<module>`             | `/venv/lib/python3.11/site-packages/black/__main__.py`   |
| 95.5% |   1.91s |     191 | `_run_code`            | `<frozen runpy>`                                         |
| 86.0% |   1.72s |     172 | `_format_str_once`     | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 61.0% |   1.22s |     122 | `format_str`           | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 36.5% | 730.0ms |      73 | `visit_default`        | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
| 36.5% | 730.0ms |      73 | `visit`                | `/venv/lib/python3.11/site-packages/black/nodes.py`      |
| 36.5% | 730.0ms |      73 | `visit_default`        | `/venv/lib/python3.11/site-packages/black/nodes.py`      |
| 36.5% | 730.0ms |      73 | `visit_suite`          | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
| 36.0% | 720.0ms |      72 | `visit_stmt`           | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
| 36.0% | 720.0ms |      72 | `visit_funcdef`        | `/venv/lib/python3.11/site-packages/black/linegen.py`    |

#### Categories

##### Third-party

|     % |    Time | Samples | Function                          | Location                                                      |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------------------------- |
| 95.5% |   1.91s |     191 | `format_file_contents`            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 95.5% |   1.91s |     191 | `format_file_in_place`            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 95.5% |   1.91s |     191 | `reformat_one`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 95.5% |   1.91s |     191 | `main`                            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 95.5% |   1.91s |     191 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py`      |
| 95.5% |   1.91s |     191 | `invoke`                          | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 95.5% |   1.91s |     191 | `main`                            | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 95.5% |   1.91s |     191 | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 95.5% |   1.91s |     191 | `patched_main`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 95.5% |   1.91s |     191 | `<module>`                        | `/venv/lib/python3.11/site-packages/black/__main__.py`        |
| 86.0% |   1.72s |     172 | `_format_str_once`                | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 61.0% |   1.22s |     122 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 36.5% | 730.0ms |      73 | `visit_default`                   | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 36.5% | 730.0ms |      73 | `visit`                           | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| 36.5% | 730.0ms |      73 | `visit_default`                   | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| 36.5% | 730.0ms |      73 | `visit_suite`                     | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 36.0% | 720.0ms |      72 | `visit_stmt`                      | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 36.0% | 720.0ms |      72 | `visit_funcdef`                   | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 34.5% | 690.0ms |      69 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 33.0% | 660.0ms |      66 | `parse_tokens`                    | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### Standard library

|     % |    Time | Samples | Function                    | Location                                 |
| ----: | ------: | ------: | --------------------------- | ---------------------------------------- |
| 96.5% |   1.93s |     193 | `_run_module_as_main`       | `<frozen runpy>`                         |
| 95.5% |   1.91s |     191 | `_run_code`                 | `<frozen runpy>`                         |
|  5.0% | 100.0ms |      10 | `parse`                     | `/usr/lib/python3.11/ast.py`             |
|  2.0% |  40.0ms |       4 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py`     |
|  1.5% |  30.0ms |       3 | `search`                    | `/usr/lib/python3.11/re/__init__.py`     |
|  1.0% |  20.0ms |       2 | `exec_module`               | `<frozen importlib._bootstrap_external>` |
|  1.0% |  20.0ms |       2 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|  1.0% |  20.0ms |       2 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
|  1.0% |  20.0ms |       2 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
|  1.0% |  20.0ms |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  1.0% |  20.0ms |       2 | `_get_module_details`       | `<frozen runpy>`                         |
|  0.5% |  10.0ms |       1 | `get_data`                  | `<frozen importlib._bootstrap_external>` |
|  0.5% |  10.0ms |       1 | `get_code`                  | `<frozen importlib._bootstrap_external>` |
|  0.5% |  10.0ms |       1 | `_signature_bound_method`   | `/usr/lib/python3.11/inspect.py`         |
|  0.5% |  10.0ms |       1 | `_signature_from_callable`  | `/usr/lib/python3.11/inspect.py`         |
|  0.5% |  10.0ms |       1 | `from_callable`             | `/usr/lib/python3.11/inspect.py`         |
|  0.5% |  10.0ms |       1 | `signature`                 | `/usr/lib/python3.11/inspect.py`         |
|  0.5% |  10.0ms |       1 | `_process_class`            | `/usr/lib/python3.11/dataclasses.py`     |
|  0.5% |  10.0ms |       1 | `wrap`                      | `/usr/lib/python3.11/dataclasses.py`     |
|  0.5% |  10.0ms |       1 | `dataclass`                 | `/usr/lib/python3.11/dataclasses.py`     |

##### Unknown

|    % |   Time | Samples | Function      | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 3.5% | 70.0ms |       7 | `(anonymous)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_module_as_main` (`<frozen runpy>`)

|     % |   Time | Samples | Callee                | Location         |
| ----: | -----: | ------: | --------------------- | ---------------- |
| 99.0% |  1.91s |     191 | `_run_code`           | `<frozen runpy>` |
|  1.0% | 20.0ms |       2 | `_get_module_details` | `<frozen runpy>` |

##### `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee                            | Location                                               |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------------------ |
| 63.9% |   1.22s |     122 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| 36.1% | 690.0ms |      69 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `format_file_in_place` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.91s |     191 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `reformat_one` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.91s |     191 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 1.91s |     191 | `reformat_one` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`)

|      % |  Time | Samples | Callee | Location                                               |
| -----: | ----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% | 1.91s |     191 | `main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee     | Location                                                 |
| -----: | ----: | ------: | ---------- | -------------------------------------------------------- |
| 100.0% | 1.91s |     191 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py` |
| 100.0% | 1.91s |     191 | `invoke`   | `/venv/lib/python3.11/site-packages/click/core.py`       |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee   | Location                                           |
| -----: | ----: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 1.91s |     191 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee | Location                                           |
| -----: | ----: | ------: | ------ | -------------------------------------------------- |
| 100.0% | 1.91s |     191 | `main` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee     | Location                                           |
| -----: | ----: | ------: | ---------- | -------------------------------------------------- |
| 100.0% | 1.91s |     191 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`)

|      % |  Time | Samples | Callee         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 1.91s |     191 | `patched_main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `_run_code` (`<frozen runpy>`)

|      % |  Time | Samples | Callee     | Location                                               |
| -----: | ----: | ------: | ---------- | ------------------------------------------------------ |
| 100.0% | 1.91s |     191 | `<module>` | `/venv/lib/python3.11/site-packages/black/__main__.py` |

##### `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee                   | Location                                               |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------ |
| 42.4% | 730.0ms |      73 | `visit`                  | `/venv/lib/python3.11/site-packages/black/nodes.py`    |
| 38.4% | 660.0ms |      66 | `lib2to3_parse`          | `/venv/lib/python3.11/site-packages/black/parsing.py`  |
|  8.7% | 150.0ms |      15 | `transform_line`         | `/venv/lib/python3.11/site-packages/black/linegen.py`  |
|  5.2% |  90.0ms |       9 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |
|  3.5% |  60.0ms |       6 | `maybe_empty_lines`      | `/venv/lib/python3.11/site-packages/black/lines.py`    |

##### `format_str` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee             | Location                                               |
| -----: | ----: | ------: | ------------------ | ------------------------------------------------------ |
| 100.0% | 1.22s |     122 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee              | Location                                                |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% | 730.0ms |      73 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/nodes.py`     |
|  35.6% | 260.0ms |      26 | `append`            | `/venv/lib/python3.11/site-packages/black/lines.py`     |
|  24.7% | 180.0ms |      18 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py`  |
|   1.4% |  10.0ms |       1 | `prefix`            | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |    Time | Samples | Callee              | Location                                              |
| -----: | ------: | ------: | ------------------- | ----------------------------------------------------- |
| 100.0% | 730.0ms |      73 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| 100.0% | 730.0ms |      73 | `visit_suite`       | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  98.6% | 720.0ms |      72 | `visit_stmt`        | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  98.6% | 720.0ms |      72 | `visit_funcdef`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  63.0% | 460.0ms |      46 | `visit_simple_stmt` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |    Time | Samples | Callee  | Location                                            |
| -----: | ------: | ------: | ------- | --------------------------------------------------- |
| 100.0% | 730.0ms |      73 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `visit_suite` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee          | Location                                              |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 730.0ms |      73 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|   1.4% |  10.0ms |       1 | `is_stub_suite` | `/venv/lib/python3.11/site-packages/black/nodes.py`   |

##### `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|     % |    Time | Samples | Callee                       | Location                                              |
| ----: | ------: | ------: | ---------------------------- | ----------------------------------------------------- |
| 98.6% | 710.0ms |      71 | `visit`                      | `/venv/lib/python3.11/site-packages/black/nodes.py`   |
|  5.6% |  40.0ms |       4 | `normalize_invisible_parens` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee  | Location                                            |
| -----: | ------: | ------: | ------- | --------------------------------------------------- |
| 100.0% | 720.0ms |      72 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `check_stability_and_equivalence` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee              | Location                                               |
| ----: | ------: | ------: | ------------------- | ------------------------------------------------------ |
| 72.5% | 500.0ms |      50 | `assert_stable`     | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| 27.5% | 190.0ms |      19 | `assert_equivalent` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|     % |    Time | Samples | Callee     | Location                                                      |
| ----: | ------: | ------: | ---------- | ------------------------------------------------------------- |
| 72.7% | 480.0ms |      48 | `addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`  |
| 16.7% | 110.0ms |      11 | `__next__` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py`)

|     % |   Time | Samples | Callee    | Location                              |
| ----: | -----: | ------: | --------- | ------------------------------------- |
| 25.0% | 10.0ms |       1 | `compile` | `/usr/lib/python3.11/re/_compiler.py` |

##### `search` (`/usr/lib/python3.11/re/__init__.py`)

|      % |   Time | Samples | Callee     | Location                             |
| -----: | -----: | ------: | ---------- | ------------------------------------ |
| 100.0% | 30.0ms |       3 | `_compile` | `/usr/lib/python3.11/re/__init__.py` |

##### `exec_module` (`<frozen importlib._bootstrap_external>`)

|      % |   Time | Samples | Callee                      | Location                                 |
| -----: | -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% | 20.0ms |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  50.0% | 10.0ms |       1 | `get_code`                  | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee        | Location                                 |
| -----: | -----: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 20.0ms |       2 | `exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee           | Location                        |
| -----: | -----: | ------: | ---------------- | ------------------------------- |
| 100.0% | 20.0ms |       2 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee                    | Location                        |
| -----: | -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% | 20.0ms |       2 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee     | Location                                               |
| -----: | -----: | ------: | ---------- | ------------------------------------------------------ |
| 100.0% | 20.0ms |       2 | `<module>` | `/venv/lib/python3.11/site-packages/black/__init__.py` |
|  50.0% | 10.0ms |       1 | `<module>` | `/venv/lib/python3.11/site-packages/black/mode.py`     |
|  50.0% | 10.0ms |       1 | `<module>` | `/venv/lib/python3.11/site-packages/black/cache.py`    |

##### `_get_module_details` (`<frozen runpy>`)

|      % |   Time | Samples | Callee                | Location                        |
| -----: | -----: | ------: | --------------------- | ------------------------------- |
| 100.0% | 20.0ms |       2 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% | 20.0ms |       2 | `_get_module_details` | `<frozen runpy>`                |

##### `get_code` (`<frozen importlib._bootstrap_external>`)

|      % |   Time | Samples | Callee     | Location                                 |
| -----: | -----: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 10.0ms |       1 | `get_data` | `<frozen importlib._bootstrap_external>` |

##### `_signature_from_callable` (`/usr/lib/python3.11/inspect.py`)

|      % |   Time | Samples | Callee                    | Location                         |
| -----: | -----: | ------: | ------------------------- | -------------------------------- |
| 100.0% | 10.0ms |       1 | `_signature_bound_method` | `/usr/lib/python3.11/inspect.py` |

##### `from_callable` (`/usr/lib/python3.11/inspect.py`)

|      % |   Time | Samples | Callee                     | Location                         |
| -----: | -----: | ------: | -------------------------- | -------------------------------- |
| 100.0% | 10.0ms |       1 | `_signature_from_callable` | `/usr/lib/python3.11/inspect.py` |

##### `signature` (`/usr/lib/python3.11/inspect.py`)

|      % |   Time | Samples | Callee          | Location                         |
| -----: | -----: | ------: | --------------- | -------------------------------- |
| 100.0% | 10.0ms |       1 | `from_callable` | `/usr/lib/python3.11/inspect.py` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py`)

|      % |   Time | Samples | Callee      | Location                         |
| -----: | -----: | ------: | ----------- | -------------------------------- |
| 100.0% | 10.0ms |       1 | `signature` | `/usr/lib/python3.11/inspect.py` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py`)

|      % |   Time | Samples | Callee           | Location                             |
| -----: | -----: | ------: | ---------------- | ------------------------------------ |
| 100.0% | 10.0ms |       1 | `_process_class` | `/usr/lib/python3.11/dataclasses.py` |

##### `dataclass` (`/usr/lib/python3.11/dataclasses.py`)

|      % |   Time | Samples | Callee | Location                             |
| -----: | -----: | ------: | ------ | ------------------------------------ |
| 100.0% | 10.0ms |       1 | `wrap` | `/usr/lib/python3.11/dataclasses.py` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.0% | 100.0ms |      10 | `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 5.0% | 100.0ms |      10 | `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 5.0% | 100.0ms |      10 | `parse` (`/usr/lib/python3.11/ast.py`) ← `_parse_single_version` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4.0% |  80.0ms |       8 | `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3.0% |  60.0ms |       6 | `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`) ← `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.0% |  60.0ms |       6 | `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.5% |  50.0ms |       5 | `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2.5% |  50.0ms |       5 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str` |
| 2.5% |  50.0ms |       5 | `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`) ← `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.0% |  40.0ms |       4 | `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.5% |  30.0ms |       3 | `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `shift` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.5% |  30.0ms |       3 | `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.5% |  30.0ms |       3 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.5% |  30.0ms |       3 | `_compile` (`/usr/lib/python3.11/re/__init__.py`) ← `search` ← `visit_STRING` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.5% |  30.0ms |       3 | `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.0% |  20.0ms |       2 | `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `shift` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.0% |  20.0ms |       2 | `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.0% |  20.0ms |       2 | `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.0% |  20.0ms |       2 | `__str__` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `line_to_string` ← `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.0% |  20.0ms |       2 | `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

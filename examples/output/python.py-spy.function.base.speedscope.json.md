# Sampling profile

Took 2.28s over 228 samples (10.0ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Third-party      | 86.0% |   1.96s |     196 |
| Standard library |  8.8% | 200.0ms |      20 |
| Unknown          |  3.1% |  70.0ms |       7 |
| Ours             |  2.2% |  50.0ms |       5 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function            | Location                                                        |
| ----: | ------: | ------: | ------------------- | --------------------------------------------------------------- |
| 13.6% | 310.0ms |      31 | `_addtoken`         | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  8.8% | 200.0ms |      20 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|  7.0% | 160.0ms |      16 | `parse`             | `/usr/lib/python3.11/ast.py`                                    |
|  3.9% |  90.0ms |       9 | `parse_tokens`      | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`   |
|  3.9% |  90.0ms |       9 | `generate_tokens`   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|  3.9% |  90.0ms |       9 | `__new__`           | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  3.9% |  90.0ms |       9 | `mark`              | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
|  3.5% |  80.0ms |       8 | `_stringify_ast`    | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
|  3.5% |  80.0ms |       8 | `__init__`          | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  3.1% |  70.0ms |       7 | `(anonymous)`       | `<unknown>`                                                     |
|  2.6% |  60.0ms |       6 | `changed`           | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  2.6% |  60.0ms |       6 | `push`              | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  2.2% |  50.0ms |       5 | `__init__`          | `<string>`                                                      |
|  1.8% |  40.0ms |       4 | `pre_order`         | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  1.8% |  40.0ms |       4 | `visit`             | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  1.8% |  40.0ms |       4 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  1.3% |  30.0ms |       3 | `convert`           | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  1.3% |  30.0ms |       3 | `pop`               | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  1.3% |  30.0ms |       3 | `get_features_used` | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
|  1.3% |  30.0ms |       3 | `__str__`           | `/venv/lib/python3.11/site-packages/black/lines.py`             |

#### Categories

##### Third-party

|     % |    Time | Samples | Function            | Location                                                        |
| ----: | ------: | ------: | ------------------- | --------------------------------------------------------------- |
| 13.6% | 310.0ms |      31 | `_addtoken`         | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  8.8% | 200.0ms |      20 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|  3.9% |  90.0ms |       9 | `parse_tokens`      | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`   |
|  3.9% |  90.0ms |       9 | `generate_tokens`   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|  3.9% |  90.0ms |       9 | `__new__`           | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  3.9% |  90.0ms |       9 | `mark`              | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
|  3.5% |  80.0ms |       8 | `_stringify_ast`    | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
|  3.5% |  80.0ms |       8 | `__init__`          | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  2.6% |  60.0ms |       6 | `changed`           | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  2.6% |  60.0ms |       6 | `push`              | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  1.8% |  40.0ms |       4 | `pre_order`         | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  1.8% |  40.0ms |       4 | `visit`             | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  1.8% |  40.0ms |       4 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  1.3% |  30.0ms |       3 | `convert`           | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  1.3% |  30.0ms |       3 | `pop`               | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  1.3% |  30.0ms |       3 | `get_features_used` | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
|  1.3% |  30.0ms |       3 | `__str__`           | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  1.3% |  30.0ms |       3 | `maybe_empty_lines` | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  1.3% |  30.0ms |       3 | `hug_power_op`      | `/venv/lib/python3.11/site-packages/black/trans.py`             |
|  1.3% |  30.0ms |       3 | `__init__`          | `/venv/lib/python3.11/site-packages/black/trans.py`             |

##### Standard library

|    % |    Time | Samples | Function                    | Location                                  |
| ---: | ------: | ------: | --------------------------- | ----------------------------------------- |
| 7.0% | 160.0ms |      16 | `parse`                     | `/usr/lib/python3.11/ast.py`              |
| 0.4% |  10.0ms |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`           |
| 0.4% |  10.0ms |       1 | `isEnabledFor`              | `/usr/lib/python3.11/logging/__init__.py` |
| 0.4% |  10.0ms |       1 | `__eq__`                    | `/usr/lib/python3.11/typing.py`           |
| 0.4% |  10.0ms |       1 | `_subx`                     | `/usr/lib/python3.11/re/__init__.py`      |

##### Unknown

|    % |   Time | Samples | Function      | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 3.1% | 70.0ms |       7 | `(anonymous)` | `<unknown>` |

##### Ours

|    % |   Time | Samples | Function   | Location   |
| ---: | -----: | ------: | ---------- | ---------- |
| 2.2% | 50.0ms |       5 | `__init__` | `<string>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |    Time | Samples | Location                                                         |
| -----: | ------: | ------: | ---------------------------------------------------------------- |
| 100.0% | 310.0ms |      31 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:290` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|      % |    Time | Samples | Location                                                  |
| -----: | ------: | ------: | --------------------------------------------------------- |
| 100.0% | 200.0ms |      20 | `/venv/lib/python3.11/site-packages/black/comments.py:52` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |    Time | Samples | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 160.0ms |      16 | `/usr/lib/python3.11/ast.py:33` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|      % |   Time | Samples | Location                                                          |
| -----: | -----: | ------: | ----------------------------------------------------------------- |
| 100.0% | 90.0ms |       9 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py:114` |

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|      % |   Time | Samples | Location                                                            |
| -----: | -----: | ------: | ------------------------------------------------------------------- |
| 100.0% | 90.0ms |       9 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:565` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Location                                                   |
| -----: | -----: | ------: | ---------------------------------------------------------- |
| 100.0% | 90.0ms |       9 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:81` |

##### `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|      % |   Time | Samples | Location                                                  |
| -----: | -----: | ------: | --------------------------------------------------------- |
| 100.0% | 90.0ms |       9 | `/venv/lib/python3.11/site-packages/black/brackets.py:70` |

##### `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|      % |   Time | Samples | Location                                                  |
| -----: | -----: | ------: | --------------------------------------------------------- |
| 100.0% | 80.0ms |       8 | `/venv/lib/python3.11/site-packages/black/parsing.py:174` |

##### `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Location                                                    |
| ----: | -----: | ------: | ----------------------------------------------------------- |
| 75.0% | 60.0ms |       6 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:400` |
| 25.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:248` |

##### `changed` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 60.0ms |       6 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:171` |

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Location                                                         |
| -----: | -----: | ------: | ---------------------------------------------------------------- |
| 100.0% | 60.0ms |       6 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:386` |

##### `__init__` (`<string>`)

|      % |   Time | Samples | Location     |
| -----: | -----: | ------: | ------------ |
| 100.0% | 50.0ms |       5 | `<string>:2` |

##### `pre_order` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:314` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |   Time | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/black/nodes.py:163` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |   Time | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/black/nodes.py:187` |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:486` |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Location                                                         |
| -----: | -----: | ------: | ---------------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:398` |

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |   Time | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/__init__.py:1307` |

##### `__str__` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/lines.py:490` |

##### `maybe_empty_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/lines.py:560` |

##### `hug_power_op` (`/venv/lib/python3.11/site-packages/black/trans.py`)

|      % |   Time | Samples | Location                                               |
| -----: | -----: | ------: | ------------------------------------------------------ |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/trans.py:85` |

##### `__init__` (`/venv/lib/python3.11/site-packages/black/trans.py`)

|      % |   Time | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/trans.py:282` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Location                            |
| -----: | -----: | ------: | ----------------------------------- |
| 100.0% | 10.0ms |       1 | `<frozen importlib._bootstrap>:233` |

##### `isEnabledFor` (`/usr/lib/python3.11/logging/__init__.py`)

|      % |   Time | Samples | Location                                       |
| -----: | -----: | ------: | ---------------------------------------------- |
| 100.0% | 10.0ms |       1 | `/usr/lib/python3.11/logging/__init__.py:1734` |

##### `__eq__` (`/usr/lib/python3.11/typing.py`)

|      % |   Time | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 10.0ms |       1 | `/usr/lib/python3.11/typing.py:1345` |

##### `_subx` (`/usr/lib/python3.11/re/__init__.py`)

|      % |   Time | Samples | Location                                 |
| -----: | -----: | ------: | ---------------------------------------- |
| 100.0% | 10.0ms |       1 | `/usr/lib/python3.11/re/__init__.py:315` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |    Time | Samples | Caller     | Location                                                     |
| -----: | ------: | ------: | ---------- | ------------------------------------------------------------ |
| 100.0% | 310.0ms |      31 | `addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|      % |    Time | Samples | Caller          | Location                                              |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 200.0ms |      20 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |    Time | Samples | Caller                  | Location                                              |
| -----: | ------: | ------: | ----------------------- | ----------------------------------------------------- |
| 100.0% | 160.0ms |      16 | `_parse_single_version` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|      % |   Time | Samples | Caller         | Location                                                      |
| -----: | -----: | ------: | -------------- | ------------------------------------------------------------- |
| 100.0% | 90.0ms |       9 | `parse_string` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|      % |   Time | Samples | Caller     | Location                                                      |
| -----: | -----: | ------: | ---------- | ------------------------------------------------------------- |
| 100.0% | 90.0ms |       9 | `__next__` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Caller    | Location                                                |
| -----: | -----: | ------: | --------- | ------------------------------------------------------- |
| 100.0% | 90.0ms |       9 | `convert` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|      % |   Time | Samples | Caller   | Location                                            |
| -----: | -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 90.0ms |       9 | `append` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|      % |   Time | Samples | Caller                           | Location                                              |
| -----: | -----: | ------: | -------------------------------- | ----------------------------------------------------- |
| 100.0% | 80.0ms |       8 | `_stringify_ast_with_new_parent` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller                | Location                                                |
| ----: | -----: | ------: | --------------------- | ------------------------------------------------------- |
| 87.5% | 70.0ms |       7 | `convert`             | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
| 12.5% | 10.0ms |       1 | `wrap_in_parentheses` | `/venv/lib/python3.11/site-packages/black/nodes.py`     |

##### `changed` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller    | Location                                                |
| ----: | -----: | ------: | --------- | ------------------------------------------------------- |
| 66.7% | 40.0ms |       4 | `prefix`  | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
| 33.3% | 20.0ms |       2 | `changed` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Caller      | Location                                                     |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 60.0ms |       6 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `__init__` (`<string>`)

|     % |   Time | Samples | Caller     | Location                                              |
| ----: | -----: | ------: | ---------- | ----------------------------------------------------- |
| 80.0% | 40.0ms |       4 | `__init__` | `<string>`                                            |
| 20.0% | 10.0ms |       1 | `line`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `pre_order` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Caller      | Location                                                |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `pre_order` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |   Time | Samples | Caller          | Location                                            |
| -----: | -----: | ------: | --------------- | --------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `visit_default` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |   Time | Samples | Caller          | Location                                              |
| -----: | -----: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller  | Location                                                     |
| ----: | -----: | ------: | ------- | ------------------------------------------------------------ |
| 66.7% | 20.0ms |       2 | `pop`   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
| 33.3% | 10.0ms |       1 | `shift` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Caller      | Location                                                     |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 30.0ms |       3 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |   Time | Samples | Caller                   | Location                                               |
| -----: | -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% | 30.0ms |       3 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `__str__` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|     % |   Time | Samples | Caller             | Location                                               |
| ----: | -----: | ------: | ------------------ | ------------------------------------------------------ |
| 66.7% | 20.0ms |       2 | `line_to_string`   | `/venv/lib/python3.11/site-packages/black/lines.py`    |
| 33.3% | 10.0ms |       1 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `maybe_empty_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Caller             | Location                                               |
| -----: | -----: | ------: | ------------------ | ------------------------------------------------------ |
| 100.0% | 30.0ms |       3 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `hug_power_op` (`/venv/lib/python3.11/site-packages/black/trans.py`)

|     % |   Time | Samples | Caller                              | Location                                              |
| ----: | -----: | ------: | ----------------------------------- | ----------------------------------------------------- |
| 66.7% | 20.0ms |       2 | `_hugging_power_ops_line_to_string` | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| 33.3% | 10.0ms |       1 | `run_transformer`                   | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `__init__` (`/venv/lib/python3.11/site-packages/black/trans.py`)

|      % |   Time | Samples | Caller           | Location                                              |
| -----: | -----: | ------: | ---------------- | ----------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `transform_line` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Caller        | Location                                 |
| -----: | -----: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 10.0ms |       1 | `exec_module` | `<frozen importlib._bootstrap_external>` |

##### `isEnabledFor` (`/usr/lib/python3.11/logging/__init__.py`)

|      % |   Time | Samples | Caller  | Location                                  |
| -----: | -----: | ------: | ------- | ----------------------------------------- |
| 100.0% | 10.0ms |       1 | `debug` | `/usr/lib/python3.11/logging/__init__.py` |

##### `__eq__` (`/usr/lib/python3.11/typing.py`)

|      % |   Time | Samples | Caller        | Location                        |
| -----: | -----: | ------: | ------------- | ------------------------------- |
| 100.0% | 10.0ms |       1 | `_type_check` | `/usr/lib/python3.11/typing.py` |

##### `_subx` (`/usr/lib/python3.11/re/__init__.py`)

|      % |   Time | Samples | Caller      | Location                                              |
| -----: | -----: | ------: | ----------- | ----------------------------------------------------- |
| 100.0% | 10.0ms |       1 | `sub_twice` | `/venv/lib/python3.11/site-packages/black/strings.py` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                          | Location                                                      |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------------------------- |
| 96.9% |   2.21s |     221 | `_run_module_as_main`             | `<frozen runpy>`                                              |
| 96.5% |   2.20s |     220 | `format_file_contents`            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.5% |   2.20s |     220 | `format_file_in_place`            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.5% |   2.20s |     220 | `reformat_one`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.5% |   2.20s |     220 | `main`                            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.5% |   2.20s |     220 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py`      |
| 96.5% |   2.20s |     220 | `invoke`                          | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 96.5% |   2.20s |     220 | `main`                            | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 96.5% |   2.20s |     220 | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 96.5% |   2.20s |     220 | `patched_main`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.5% |   2.20s |     220 | `<module>`                        | `/venv/lib/python3.11/site-packages/black/__main__.py`        |
| 96.5% |   2.20s |     220 | `_run_code`                       | `<frozen runpy>`                                              |
| 84.6% |   1.93s |     193 | `_format_str_once`                | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 60.1% |   1.37s |     137 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 36.8% | 840.0ms |      84 | `parse_tokens`                    | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| 36.8% | 840.0ms |      84 | `parse_string`                    | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| 36.8% | 840.0ms |      84 | `lib2to3_parse`                   | `/venv/lib/python3.11/site-packages/black/parsing.py`         |
| 36.4% | 830.0ms |      83 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 32.0% | 730.0ms |      73 | `visit_default`                   | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 32.0% | 730.0ms |      73 | `visit`                           | `/venv/lib/python3.11/site-packages/black/nodes.py`           |

#### Categories

##### Third-party

|     % |    Time | Samples | Function                          | Location                                                      |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------------------------- |
| 96.5% |   2.20s |     220 | `format_file_contents`            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.5% |   2.20s |     220 | `format_file_in_place`            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.5% |   2.20s |     220 | `reformat_one`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.5% |   2.20s |     220 | `main`                            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.5% |   2.20s |     220 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py`      |
| 96.5% |   2.20s |     220 | `invoke`                          | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 96.5% |   2.20s |     220 | `main`                            | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 96.5% |   2.20s |     220 | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 96.5% |   2.20s |     220 | `patched_main`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 96.5% |   2.20s |     220 | `<module>`                        | `/venv/lib/python3.11/site-packages/black/__main__.py`        |
| 84.6% |   1.93s |     193 | `_format_str_once`                | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 60.1% |   1.37s |     137 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 36.8% | 840.0ms |      84 | `parse_tokens`                    | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| 36.8% | 840.0ms |      84 | `parse_string`                    | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| 36.8% | 840.0ms |      84 | `lib2to3_parse`                   | `/venv/lib/python3.11/site-packages/black/parsing.py`         |
| 36.4% | 830.0ms |      83 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 32.0% | 730.0ms |      73 | `visit_default`                   | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 32.0% | 730.0ms |      73 | `visit`                           | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| 32.0% | 730.0ms |      73 | `visit_default`                   | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| 31.6% | 720.0ms |      72 | `visit_stmt`                      | `/venv/lib/python3.11/site-packages/black/linegen.py`         |

##### Standard library

|     % |    Time | Samples | Function                    | Location                                  |
| ----: | ------: | ------: | --------------------------- | ----------------------------------------- |
| 96.9% |   2.21s |     221 | `_run_module_as_main`       | `<frozen runpy>`                          |
| 96.5% |   2.20s |     220 | `_run_code`                 | `<frozen runpy>`                          |
|  7.0% | 160.0ms |      16 | `parse`                     | `/usr/lib/python3.11/ast.py`              |
|  0.4% |  10.0ms |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`           |
|  0.4% |  10.0ms |       1 | `exec_module`               | `<frozen importlib._bootstrap_external>`  |
|  0.4% |  10.0ms |       1 | `_load_unlocked`            | `<frozen importlib._bootstrap>`           |
|  0.4% |  10.0ms |       1 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`           |
|  0.4% |  10.0ms |       1 | `_find_and_load`            | `<frozen importlib._bootstrap>`           |
|  0.4% |  10.0ms |       1 | `<module>`                  | `/usr/lib/python3.11/hashlib.py`          |
|  0.4% |  10.0ms |       1 | `_get_module_details`       | `<frozen runpy>`                          |
|  0.4% |  10.0ms |       1 | `isEnabledFor`              | `/usr/lib/python3.11/logging/__init__.py` |
|  0.4% |  10.0ms |       1 | `debug`                     | `/usr/lib/python3.11/logging/__init__.py` |
|  0.4% |  10.0ms |       1 | `__eq__`                    | `/usr/lib/python3.11/typing.py`           |
|  0.4% |  10.0ms |       1 | `_type_check`               | `/usr/lib/python3.11/typing.py`           |
|  0.4% |  10.0ms |       1 | `<genexpr>`                 | `/usr/lib/python3.11/typing.py`           |
|  0.4% |  10.0ms |       1 | `__getitem__`               | `/usr/lib/python3.11/typing.py`           |
|  0.4% |  10.0ms |       1 | `inner`                     | `/usr/lib/python3.11/typing.py`           |
|  0.4% |  10.0ms |       1 | `_subx`                     | `/usr/lib/python3.11/re/__init__.py`      |

##### Unknown

|    % |   Time | Samples | Function      | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 3.1% | 70.0ms |       7 | `(anonymous)` | `<unknown>` |

##### Ours

|    % |   Time | Samples | Function   | Location   |
| ---: | -----: | ------: | ---------- | ---------- |
| 2.2% | 50.0ms |       5 | `__init__` | `<string>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_module_as_main` (`<frozen runpy>`)

|     % |   Time | Samples | Callee                | Location         |
| ----: | -----: | ------: | --------------------- | ---------------- |
| 99.5% |  2.20s |     220 | `_run_code`           | `<frozen runpy>` |
|  0.5% | 10.0ms |       1 | `_get_module_details` | `<frozen runpy>` |

##### `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee                            | Location                                               |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------------------ |
| 62.3% |   1.37s |     137 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| 37.7% | 830.0ms |      83 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `format_file_in_place` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 2.20s |     220 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `reformat_one` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 2.20s |     220 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 2.20s |     220 | `reformat_one` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`)

|      % |  Time | Samples | Callee | Location                                               |
| -----: | ----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% | 2.20s |     220 | `main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee     | Location                                                 |
| -----: | ----: | ------: | ---------- | -------------------------------------------------------- |
| 100.0% | 2.20s |     220 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py` |
| 100.0% | 2.20s |     220 | `invoke`   | `/venv/lib/python3.11/site-packages/click/core.py`       |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee   | Location                                           |
| -----: | ----: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 2.20s |     220 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee | Location                                           |
| -----: | ----: | ------: | ------ | -------------------------------------------------- |
| 100.0% | 2.20s |     220 | `main` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee     | Location                                           |
| -----: | ----: | ------: | ---------- | -------------------------------------------------- |
| 100.0% | 2.20s |     220 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`)

|      % |  Time | Samples | Callee         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 2.20s |     220 | `patched_main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `_run_code` (`<frozen runpy>`)

|      % |  Time | Samples | Callee     | Location                                               |
| -----: | ----: | ------: | ---------- | ------------------------------------------------------ |
| 100.0% | 2.20s |     220 | `<module>` | `/venv/lib/python3.11/site-packages/black/__main__.py` |

##### `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee                   | Location                                               |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------ |
| 43.5% | 840.0ms |      84 | `lib2to3_parse`          | `/venv/lib/python3.11/site-packages/black/parsing.py`  |
| 37.8% | 730.0ms |      73 | `visit`                  | `/venv/lib/python3.11/site-packages/black/nodes.py`    |
|  7.8% | 150.0ms |      15 | `transform_line`         | `/venv/lib/python3.11/site-packages/black/linegen.py`  |
|  4.1% |  80.0ms |       8 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |
|  4.1% |  80.0ms |       8 | `maybe_empty_lines`      | `/venv/lib/python3.11/site-packages/black/lines.py`    |

##### `format_str` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee             | Location                                               |
| -----: | ----: | ------: | ------------------ | ------------------------------------------------------ |
| 100.0% | 1.37s |     137 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|     % |    Time | Samples | Callee                      | Location                                                      |
| ----: | ------: | ------: | --------------------------- | ------------------------------------------------------------- |
| 72.6% | 610.0ms |      61 | `addtoken`                  | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`  |
| 13.1% | 110.0ms |      11 | `__next__`                  | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
|  2.4% |  20.0ms |       2 | `_partially_consume_prefix` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
|  1.2% |  10.0ms |       1 | `debug`                     | `/usr/lib/python3.11/logging/__init__.py`                     |

##### `parse_string` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|      % |    Time | Samples | Callee         | Location                                                      |
| -----: | ------: | ------: | -------------- | ------------------------------------------------------------- |
| 100.0% | 840.0ms |      84 | `parse_tokens` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|      % |    Time | Samples | Callee         | Location                                                      |
| -----: | ------: | ------: | -------------- | ------------------------------------------------------------- |
| 100.0% | 840.0ms |      84 | `parse_string` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `check_stability_and_equivalence` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee              | Location                                               |
| ----: | ------: | ------: | ------------------- | ------------------------------------------------------ |
| 68.7% | 570.0ms |      57 | `assert_stable`     | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| 31.3% | 260.0ms |      26 | `assert_equivalent` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee              | Location                                                |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% | 730.0ms |      73 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/nodes.py`     |
|  35.6% | 260.0ms |      26 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py`  |
|  20.5% | 150.0ms |      15 | `append`            | `/venv/lib/python3.11/site-packages/black/lines.py`     |
|   1.4% |  10.0ms |       1 | `line`              | `/venv/lib/python3.11/site-packages/black/linegen.py`   |
|   1.4% |  10.0ms |       1 | `prefix`            | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |    Time | Samples | Callee              | Location                                              |
| -----: | ------: | ------: | ------------------- | ----------------------------------------------------- |
| 100.0% | 730.0ms |      73 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  98.6% | 720.0ms |      72 | `visit_stmt`        | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  89.0% | 650.0ms |      65 | `visit_suite`       | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  89.0% | 650.0ms |      65 | `visit_funcdef`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  72.6% | 530.0ms |      53 | `visit_simple_stmt` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |    Time | Samples | Callee  | Location                                            |
| -----: | ------: | ------: | ------- | --------------------------------------------------- |
| 100.0% | 730.0ms |      73 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee                       | Location                                              |
| -----: | ------: | ------: | ---------------------------- | ----------------------------------------------------- |
| 100.0% | 720.0ms |      72 | `visit`                      | `/venv/lib/python3.11/site-packages/black/nodes.py`   |
|   4.2% |  30.0ms |       3 | `normalize_invisible_parens` | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|   2.8% |  20.0ms |       2 | `line`                       | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `__init__` (`<string>`)

|     % |   Time | Samples | Callee     | Location   |
| ----: | -----: | ------: | ---------- | ---------- |
| 80.0% | 40.0ms |       4 | `__init__` | `<string>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee     | Location                                               |
| -----: | -----: | ------: | ---------- | ------------------------------------------------------ |
| 100.0% | 10.0ms |       1 | `<module>` | `/usr/lib/python3.11/hashlib.py`                       |
| 100.0% | 10.0ms |       1 | `<module>` | `/venv/lib/python3.11/site-packages/black/cache.py`    |
| 100.0% | 10.0ms |       1 | `<module>` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

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

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % |   Time | Samples | Callee                    | Location                        |
| -----: | -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% | 10.0ms |       1 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/usr/lib/python3.11/hashlib.py`)

|      % |   Time | Samples | Callee           | Location                        |
| -----: | -----: | ------: | ---------------- | ------------------------------- |
| 100.0% | 10.0ms |       1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % |   Time | Samples | Callee                | Location                        |
| -----: | -----: | ------: | --------------------- | ------------------------------- |
| 100.0% | 10.0ms |       1 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% | 10.0ms |       1 | `_get_module_details` | `<frozen runpy>`                |

##### `debug` (`/usr/lib/python3.11/logging/__init__.py`)

|      % |   Time | Samples | Callee         | Location                                  |
| -----: | -----: | ------: | -------------- | ----------------------------------------- |
| 100.0% | 10.0ms |       1 | `isEnabledFor` | `/usr/lib/python3.11/logging/__init__.py` |

##### `_type_check` (`/usr/lib/python3.11/typing.py`)

|      % |   Time | Samples | Callee   | Location                        |
| -----: | -----: | ------: | -------- | ------------------------------- |
| 100.0% | 10.0ms |       1 | `__eq__` | `/usr/lib/python3.11/typing.py` |

##### `<genexpr>` (`/usr/lib/python3.11/typing.py`)

|      % |   Time | Samples | Callee        | Location                        |
| -----: | -----: | ------: | ------------- | ------------------------------- |
| 100.0% | 10.0ms |       1 | `_type_check` | `/usr/lib/python3.11/typing.py` |

##### `__getitem__` (`/usr/lib/python3.11/typing.py`)

|      % |   Time | Samples | Callee      | Location                        |
| -----: | -----: | ------: | ----------- | ------------------------------- |
| 100.0% | 10.0ms |       1 | `<genexpr>` | `/usr/lib/python3.11/typing.py` |

##### `inner` (`/usr/lib/python3.11/typing.py`)

|      % |   Time | Samples | Callee        | Location                        |
| -----: | -----: | ------: | ------------- | ------------------------------- |
| 100.0% | 10.0ms |       1 | `__getitem__` | `/usr/lib/python3.11/typing.py` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.6% | 220.0ms |      22 | `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 7.0% | 160.0ms |      16 | `parse` (`/usr/lib/python3.11/ast.py`) ← `_parse_single_version` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 5.7% | 130.0ms |      13 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                      |
| 3.9% |  90.0ms |       9 | `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.6% |  60.0ms |       6 | `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`) ← `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.6% |  60.0ms |       6 | `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.6% |  60.0ms |       6 | `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.8% |  40.0ms |       4 | `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `shift` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.3% |  30.0ms |       3 | `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.3% |  30.0ms |       3 | `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `shift` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.3% |  30.0ms |       3 | `maybe_empty_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.3% |  30.0ms |       3 | `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`) ← `append` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.3% |  30.0ms |       3 | `__init__` (`/venv/lib/python3.11/site-packages/black/trans.py`) ← `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.3% |  30.0ms |       3 | `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.3% |  30.0ms |       3 | `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.3% |  30.0ms |       3 | `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`) ← `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.3% |  30.0ms |       3 | `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.3% |  30.0ms |       3 | `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.3% |  30.0ms |       3 | `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.3% |  30.0ms |       3 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` |

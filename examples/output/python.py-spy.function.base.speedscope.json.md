# Sampling profile

Took 1.90s over 190 samples (10.0ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Third-party      | 83.7% |   1.59s |     159 |
| Standard library |  7.9% | 150.0ms |      15 |
| Unknown          |  5.3% | 100.0ms |      10 |
| Ours             |  3.2% |  60.0ms |       6 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function            | Location                                                        |
| ---: | ------: | ------: | ------------------- | --------------------------------------------------------------- |
| 9.5% | 180.0ms |      18 | `_addtoken`         | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 7.4% | 140.0ms |      14 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| 6.8% | 130.0ms |      13 | `parse`             | `/usr/lib/python3.11/ast.py`                                    |
| 6.3% | 120.0ms |      12 | `__new__`           | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 5.8% | 110.0ms |      11 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| 5.3% | 100.0ms |      10 | `(anonymous)`       | `<unknown>`                                                     |
| 3.7% |  70.0ms |       7 | `generate_tokens`   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| 3.7% |  70.0ms |       7 | `get_features_used` | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
| 3.7% |  70.0ms |       7 | `visit`             | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| 3.2% |  60.0ms |       6 | `__init__`          | `<string>`                                                      |
| 3.2% |  60.0ms |       6 | `mark`              | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| 2.6% |  50.0ms |       5 | `push`              | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 2.1% |  40.0ms |       4 | `parse_tokens`      | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`   |
| 2.1% |  40.0ms |       4 | `maybe_empty_lines` | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| 2.1% |  40.0ms |       4 | `__str__`           | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| 2.1% |  40.0ms |       4 | `leaves`            | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 2.1% |  40.0ms |       4 | `_stringify_ast`    | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
| 1.6% |  30.0ms |       3 | `prefix`            | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 1.6% |  30.0ms |       3 | `__bool__`          | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| 1.1% |  20.0ms |       2 | `format_str`        | `/venv/lib/python3.11/site-packages/black/__init__.py`          |

#### Categories

##### Third-party

|    % |    Time | Samples | Function              | Location                                                        |
| ---: | ------: | ------: | --------------------- | --------------------------------------------------------------- |
| 9.5% | 180.0ms |      18 | `_addtoken`           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 7.4% | 140.0ms |      14 | `generate_comments`   | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| 6.3% | 120.0ms |      12 | `__new__`             | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 5.8% | 110.0ms |      11 | `visit_default`       | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| 3.7% |  70.0ms |       7 | `generate_tokens`     | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| 3.7% |  70.0ms |       7 | `get_features_used`   | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
| 3.7% |  70.0ms |       7 | `visit`               | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| 3.2% |  60.0ms |       6 | `mark`                | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| 2.6% |  50.0ms |       5 | `push`                | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| 2.1% |  40.0ms |       4 | `parse_tokens`        | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`   |
| 2.1% |  40.0ms |       4 | `maybe_empty_lines`   | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| 2.1% |  40.0ms |       4 | `__str__`             | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| 2.1% |  40.0ms |       4 | `leaves`              | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 2.1% |  40.0ms |       4 | `_stringify_ast`      | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
| 1.6% |  30.0ms |       3 | `prefix`              | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 1.6% |  30.0ms |       3 | `__bool__`            | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| 1.1% |  20.0ms |       2 | `format_str`          | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
| 1.1% |  20.0ms |       2 | `convert`             | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| 1.1% |  20.0ms |       2 | `_maybe_empty_lines`  | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| 1.1% |  20.0ms |       2 | `update_sibling_maps` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |

##### Standard library

|    % |    Time | Samples | Function | Location                             |
| ---: | ------: | ------: | -------- | ------------------------------------ |
| 6.8% | 130.0ms |      13 | `parse`  | `/usr/lib/python3.11/ast.py`         |
| 1.1% |  20.0ms |       2 | `_subx`  | `/usr/lib/python3.11/re/__init__.py` |

##### Unknown

|    % |    Time | Samples | Function      | Location    |
| ---: | ------: | ------: | ------------- | ----------- |
| 5.3% | 100.0ms |      10 | `(anonymous)` | `<unknown>` |

##### Ours

|    % |   Time | Samples | Function   | Location   |
| ---: | -----: | ------: | ---------- | ---------- |
| 3.2% | 60.0ms |       6 | `__init__` | `<string>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |    Time | Samples | Location                                                         |
| -----: | ------: | ------: | ---------------------------------------------------------------- |
| 100.0% | 180.0ms |      18 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:290` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|      % |    Time | Samples | Location                                                  |
| -----: | ------: | ------: | --------------------------------------------------------- |
| 100.0% | 140.0ms |      14 | `/venv/lib/python3.11/site-packages/black/comments.py:52` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |    Time | Samples | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 130.0ms |      13 | `/usr/lib/python3.11/ast.py:33` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |    Time | Samples | Location                                                   |
| -----: | ------: | ------: | ---------------------------------------------------------- |
| 100.0% | 120.0ms |      12 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:81` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Location                                                  |
| -----: | ------: | ------: | --------------------------------------------------------- |
| 100.0% | 110.0ms |      11 | `/venv/lib/python3.11/site-packages/black/linegen.py:134` |

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|      % |   Time | Samples | Location                                                            |
| -----: | -----: | ------: | ------------------------------------------------------------------- |
| 100.0% | 70.0ms |       7 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:565` |

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |   Time | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 70.0ms |       7 | `/venv/lib/python3.11/site-packages/black/__init__.py:1307` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |   Time | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 70.0ms |       7 | `/venv/lib/python3.11/site-packages/black/nodes.py:163` |

##### `__init__` (`<string>`)

|      % |   Time | Samples | Location     |
| -----: | -----: | ------: | ------------ |
| 100.0% | 60.0ms |       6 | `<string>:2` |

##### `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|      % |   Time | Samples | Location                                                  |
| -----: | -----: | ------: | --------------------------------------------------------- |
| 100.0% | 60.0ms |       6 | `/venv/lib/python3.11/site-packages/black/brackets.py:70` |

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Location                                                         |
| -----: | -----: | ------: | ---------------------------------------------------------------- |
| 100.0% | 50.0ms |       5 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:386` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|      % |   Time | Samples | Location                                                          |
| -----: | -----: | ------: | ----------------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py:114` |

##### `maybe_empty_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/black/lines.py:560` |

##### `__str__` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/black/lines.py:490` |

##### `leaves` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:221` |

##### `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|      % |   Time | Samples | Location                                                  |
| -----: | -----: | ------: | --------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/black/parsing.py:174` |

##### `prefix` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:480` |

##### `__bool__` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/lines.py:506` |

##### `format_str` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |   Time | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/__init__.py:1189` |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:486` |

##### `_maybe_empty_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/black/lines.py:610` |

##### `update_sibling_maps` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:369` |

##### `_subx` (`/usr/lib/python3.11/re/__init__.py`)

|      % |   Time | Samples | Location                                 |
| -----: | -----: | ------: | ---------------------------------------- |
| 100.0% | 20.0ms |       2 | `/usr/lib/python3.11/re/__init__.py:315` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |    Time | Samples | Caller     | Location                                                     |
| -----: | ------: | ------: | ---------- | ------------------------------------------------------------ |
| 100.0% | 180.0ms |      18 | `addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|      % |    Time | Samples | Caller          | Location                                              |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 140.0ms |      14 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |    Time | Samples | Caller                  | Location                                              |
| -----: | ------: | ------: | ----------------------- | ----------------------------------------------------- |
| 100.0% | 130.0ms |      13 | `_parse_single_version` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |    Time | Samples | Caller    | Location                                                |
| -----: | ------: | ------: | --------- | ------------------------------------------------------- |
| 100.0% | 120.0ms |      12 | `convert` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|     % |   Time | Samples | Caller        | Location                                              |
| ----: | -----: | ------: | ------------- | ----------------------------------------------------- |
| 81.8% | 90.0ms |       9 | `visit`       | `/venv/lib/python3.11/site-packages/black/nodes.py`   |
| 18.2% | 20.0ms |       2 | `visit_suite` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|      % |   Time | Samples | Caller     | Location                                                      |
| -----: | -----: | ------: | ---------- | ------------------------------------------------------------- |
| 100.0% | 70.0ms |       7 | `__next__` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |   Time | Samples | Caller                   | Location                                               |
| -----: | -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% | 70.0ms |       7 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |   Time | Samples | Caller          | Location                                            |
| -----: | -----: | ------: | --------------- | --------------------------------------------------- |
| 100.0% | 70.0ms |       7 | `visit_default` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `__init__` (`<string>`)

|     % |   Time | Samples | Caller     | Location                                              |
| ----: | -----: | ------: | ---------- | ----------------------------------------------------- |
| 83.3% | 50.0ms |       5 | `__init__` | `<string>`                                            |
| 16.7% | 10.0ms |       1 | `line`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|      % |   Time | Samples | Caller   | Location                                            |
| -----: | -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 60.0ms |       6 | `append` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Caller      | Location                                                     |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 50.0ms |       5 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|      % |   Time | Samples | Caller         | Location                                                      |
| -----: | -----: | ------: | -------------- | ------------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `parse_string` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `maybe_empty_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Caller             | Location                                               |
| -----: | -----: | ------: | ------------------ | ------------------------------------------------------ |
| 100.0% | 40.0ms |       4 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `__str__` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Caller           | Location                                            |
| -----: | -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `line_to_string` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `leaves` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Caller   | Location                                                |
| -----: | -----: | ------: | -------- | ------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `leaves` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|      % |   Time | Samples | Caller                           | Location                                              |
| -----: | -----: | ------: | -------------------------------- | ----------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `_stringify_ast_with_new_parent` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `prefix` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller                      | Location                                               |
| ----: | -----: | ------: | --------------------------- | ------------------------------------------------------ |
| 66.7% | 20.0ms |       2 | `append`                    | `/venv/lib/python3.11/site-packages/black/lines.py`    |
| 33.3% | 10.0ms |       1 | `normalize_trailing_prefix` | `/venv/lib/python3.11/site-packages/black/comments.py` |

##### `__bool__` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Caller | Location                                              |
| -----: | -----: | ------: | ------ | ----------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `line` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `format_str` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |   Time | Samples | Caller                 | Location                                               |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 20.0ms |       2 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller  | Location                                                     |
| ----: | -----: | ------: | ------- | ------------------------------------------------------------ |
| 50.0% | 10.0ms |       1 | `shift` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
| 50.0% | 10.0ms |       1 | `pop`   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `_maybe_empty_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Caller              | Location                                            |
| -----: | -----: | ------: | ------------------- | --------------------------------------------------- |
| 100.0% | 20.0ms |       2 | `maybe_empty_lines` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `update_sibling_maps` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Caller         | Location                                                |
| -----: | -----: | ------: | -------------- | ------------------------------------------------------- |
| 100.0% | 20.0ms |       2 | `prev_sibling` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `_subx` (`/usr/lib/python3.11/re/__init__.py`)

|      % |   Time | Samples | Caller      | Location                                              |
| -----: | -----: | ------: | ----------- | ----------------------------------------------------- |
| 100.0% | 20.0ms |       2 | `sub_twice` | `/venv/lib/python3.11/site-packages/black/strings.py` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                          | Location                                                 |
| ----: | ------: | ------: | --------------------------------- | -------------------------------------------------------- |
| 94.7% |   1.80s |     180 | `format_file_contents`            | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 94.7% |   1.80s |     180 | `format_file_in_place`            | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 94.7% |   1.80s |     180 | `reformat_one`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 94.7% |   1.80s |     180 | `main`                            | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 94.7% |   1.80s |     180 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py` |
| 94.7% |   1.80s |     180 | `invoke`                          | `/venv/lib/python3.11/site-packages/click/core.py`       |
| 94.7% |   1.80s |     180 | `main`                            | `/venv/lib/python3.11/site-packages/click/core.py`       |
| 94.7% |   1.80s |     180 | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py`       |
| 94.7% |   1.80s |     180 | `patched_main`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 94.7% |   1.80s |     180 | `<module>`                        | `/venv/lib/python3.11/site-packages/black/__main__.py`   |
| 94.7% |   1.80s |     180 | `_run_code`                       | `<frozen runpy>`                                         |
| 94.7% |   1.80s |     180 | `_run_module_as_main`             | `<frozen runpy>`                                         |
| 83.7% |   1.59s |     159 | `_format_str_once`                | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 58.9% |   1.12s |     112 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 37.4% | 710.0ms |      71 | `visit_default`                   | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
| 37.4% | 710.0ms |      71 | `visit`                           | `/venv/lib/python3.11/site-packages/black/nodes.py`      |
| 37.4% | 710.0ms |      71 | `visit_default`                   | `/venv/lib/python3.11/site-packages/black/nodes.py`      |
| 35.8% | 680.0ms |      68 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| 34.7% | 660.0ms |      66 | `visit_suite`                     | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
| 34.2% | 650.0ms |      65 | `visit_funcdef`                   | `/venv/lib/python3.11/site-packages/black/linegen.py`    |

#### Categories

##### Third-party

|     % |    Time | Samples | Function                          | Location                                                      |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------------------------- |
| 94.7% |   1.80s |     180 | `format_file_contents`            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.7% |   1.80s |     180 | `format_file_in_place`            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.7% |   1.80s |     180 | `reformat_one`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.7% |   1.80s |     180 | `main`                            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.7% |   1.80s |     180 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py`      |
| 94.7% |   1.80s |     180 | `invoke`                          | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 94.7% |   1.80s |     180 | `main`                            | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 94.7% |   1.80s |     180 | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 94.7% |   1.80s |     180 | `patched_main`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.7% |   1.80s |     180 | `<module>`                        | `/venv/lib/python3.11/site-packages/black/__main__.py`        |
| 83.7% |   1.59s |     159 | `_format_str_once`                | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 58.9% |   1.12s |     112 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 37.4% | 710.0ms |      71 | `visit_default`                   | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 37.4% | 710.0ms |      71 | `visit`                           | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| 37.4% | 710.0ms |      71 | `visit_default`                   | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| 35.8% | 680.0ms |      68 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 34.7% | 660.0ms |      66 | `visit_suite`                     | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 34.2% | 650.0ms |      65 | `visit_funcdef`                   | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 33.7% | 640.0ms |      64 | `visit_stmt`                      | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| 29.5% | 560.0ms |      56 | `parse_string`                    | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### Standard library

|     % |    Time | Samples | Function              | Location                             |
| ----: | ------: | ------: | --------------------- | ------------------------------------ |
| 94.7% |   1.80s |     180 | `_run_code`           | `<frozen runpy>`                     |
| 94.7% |   1.80s |     180 | `_run_module_as_main` | `<frozen runpy>`                     |
|  6.8% | 130.0ms |      13 | `parse`               | `/usr/lib/python3.11/ast.py`         |
|  1.1% |  20.0ms |       2 | `_subx`               | `/usr/lib/python3.11/re/__init__.py` |

##### Unknown

|    % |    Time | Samples | Function      | Location    |
| ---: | ------: | ------: | ------------- | ----------- |
| 5.3% | 100.0ms |      10 | `(anonymous)` | `<unknown>` |

##### Ours

|    % |   Time | Samples | Function   | Location   |
| ---: | -----: | ------: | ---------- | ---------- |
| 3.2% | 60.0ms |       6 | `__init__` | `<string>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee                            | Location                                               |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------------------ |
| 62.2% |   1.12s |     112 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| 37.8% | 680.0ms |      68 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `format_file_in_place` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.80s |     180 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `reformat_one` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.80s |     180 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 1.80s |     180 | `reformat_one` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`)

|      % |  Time | Samples | Callee | Location                                               |
| -----: | ----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% | 1.80s |     180 | `main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee     | Location                                                 |
| -----: | ----: | ------: | ---------- | -------------------------------------------------------- |
| 100.0% | 1.80s |     180 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py` |
| 100.0% | 1.80s |     180 | `invoke`   | `/venv/lib/python3.11/site-packages/click/core.py`       |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee   | Location                                           |
| -----: | ----: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 1.80s |     180 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee | Location                                           |
| -----: | ----: | ------: | ------ | -------------------------------------------------- |
| 100.0% | 1.80s |     180 | `main` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee     | Location                                           |
| -----: | ----: | ------: | ---------- | -------------------------------------------------- |
| 100.0% | 1.80s |     180 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`)

|      % |  Time | Samples | Callee         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 1.80s |     180 | `patched_main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `_run_code` (`<frozen runpy>`)

|      % |  Time | Samples | Callee     | Location                                               |
| -----: | ----: | ------: | ---------- | ------------------------------------------------------ |
| 100.0% | 1.80s |     180 | `<module>` | `/venv/lib/python3.11/site-packages/black/__main__.py` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % |  Time | Samples | Callee      | Location         |
| -----: | ----: | ------: | ----------- | ---------------- |
| 100.0% | 1.80s |     180 | `_run_code` | `<frozen runpy>` |

##### `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee                   | Location                                               |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------ |
| 44.7% | 710.0ms |      71 | `visit`                  | `/venv/lib/python3.11/site-packages/black/nodes.py`    |
| 35.2% | 560.0ms |      56 | `lib2to3_parse`          | `/venv/lib/python3.11/site-packages/black/parsing.py`  |
|  9.4% | 150.0ms |      15 | `transform_line`         | `/venv/lib/python3.11/site-packages/black/linegen.py`  |
|  4.4% |  70.0ms |       7 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |
|  3.8% |  60.0ms |       6 | `maybe_empty_lines`      | `/venv/lib/python3.11/site-packages/black/lines.py`    |

##### `format_str` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |  Time | Samples | Callee             | Location                                               |
| ----: | ----: | ------: | ------------------ | ------------------------------------------------------ |
| 98.2% | 1.10s |     110 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee              | Location                                               |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 710.0ms |      71 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/nodes.py`    |
|  23.9% | 170.0ms |      17 | `append`            | `/venv/lib/python3.11/site-packages/black/lines.py`    |
|  23.9% | 170.0ms |      17 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py` |
|   2.8% |  20.0ms |       2 | `line`              | `/venv/lib/python3.11/site-packages/black/linegen.py`  |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |    Time | Samples | Callee              | Location                                              |
| -----: | ------: | ------: | ------------------- | ----------------------------------------------------- |
| 100.0% | 710.0ms |      71 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  93.0% | 660.0ms |      66 | `visit_suite`       | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  91.5% | 650.0ms |      65 | `visit_funcdef`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  90.1% | 640.0ms |      64 | `visit_stmt`        | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  69.0% | 490.0ms |      49 | `visit_simple_stmt` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |    Time | Samples | Callee  | Location                                            |
| -----: | ------: | ------: | ------- | --------------------------------------------------- |
| 100.0% | 710.0ms |      71 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `check_stability_and_equivalence` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee              | Location                                               |
| ----: | ------: | ------: | ------------------- | ------------------------------------------------------ |
| 72.1% | 490.0ms |      49 | `assert_stable`     | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| 27.9% | 190.0ms |      19 | `assert_equivalent` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `visit_suite` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee          | Location                                              |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 660.0ms |      66 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee  | Location                                            |
| -----: | ------: | ------: | ------- | --------------------------------------------------- |
| 100.0% | 650.0ms |      65 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |    Time | Samples | Callee  | Location                                              |
| -----: | ------: | ------: | ------- | ----------------------------------------------------- |
| 100.0% | 640.0ms |      64 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py`   |
|   7.8% |  50.0ms |       5 | `line`  | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `parse_string` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|     % |    Time | Samples | Callee         | Location                                                      |
| ----: | ------: | ------: | -------------- | ------------------------------------------------------------- |
| 98.2% | 550.0ms |      55 | `parse_tokens` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `__init__` (`<string>`)

|     % |   Time | Samples | Callee     | Location   |
| ----: | -----: | ------: | ---------- | ---------- |
| 83.3% | 50.0ms |       5 | `__init__` | `<string>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.8% | 130.0ms |      13 | `parse` (`/usr/lib/python3.11/ast.py`) ← `_parse_single_version` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 6.3% | 120.0ms |      12 | `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 4.2% |  80.0ms |       8 | `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3.2% |  60.0ms |       6 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.2% |  60.0ms |       6 | `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2.6% |  50.0ms |       5 | `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`) ← `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.1% |  40.0ms |       4 | `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.1% |  40.0ms |       4 | `__init__` (`<string>`) ← `__init__` ← `line` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.1% |  40.0ms |       4 | `maybe_empty_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.6% |  30.0ms |       3 | `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.6% |  30.0ms |       3 | `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.6% |  30.0ms |       3 | `__str__` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `line_to_string` ← `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.6% |  30.0ms |       3 | `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.6% |  30.0ms |       3 | `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`) ← `append` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` |
| 1.6% |  30.0ms |       3 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                     |
| 1.1% |  20.0ms |       2 | `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `shift` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.1% |  20.0ms |       2 | `_maybe_empty_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `maybe_empty_lines` ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.1% |  20.0ms |       2 | `format_str` (`/venv/lib/python3.11/site-packages/black/__init__.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.1% |  20.0ms |       2 | `leaves` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `leaves` ← `leaves` ← `convert_one_fmt_off_pair` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.1% |  20.0ms |       2 | `_subx` (`/usr/lib/python3.11/re/__init__.py`) ← `sub_twice` (`/venv/lib/python3.11/site-packages/black/strings.py`) ← `normalize_string_quotes` ← `visit_STRING` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                    |

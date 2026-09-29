# Sampling profile

Took 1.88s over 188 samples (10.0ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Third-party      | 84.6% |   1.59s |     159 |
| Standard library | 10.1% | 190.0ms |      19 |
| Unknown          |  4.8% |  90.0ms |       9 |
| Ours             |  0.5% |  10.0ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                         | Location                                                        |
| ----: | ------: | ------: | -------------------------------- | --------------------------------------------------------------- |
| 15.4% | 290.0ms |      29 | `_addtoken`                      | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  9.0% | 170.0ms |      17 | `parse`                          | `/usr/lib/python3.11/ast.py`                                    |
|  6.9% | 130.0ms |      13 | `generate_comments`              | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|  6.4% | 120.0ms |      12 | `get_features_used`              | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
|  4.8% |  90.0ms |       9 | `pop`                            | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  4.8% |  90.0ms |       9 | `(anonymous)`                    | `<unknown>`                                                     |
|  4.3% |  80.0ms |       8 | `generate_tokens`                | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|  4.3% |  80.0ms |       8 | `push`                           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  2.7% |  50.0ms |       5 | `changed`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  2.7% |  50.0ms |       5 | `mark`                           | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
|  2.1% |  40.0ms |       4 | `_stringify_ast`                 | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
|  1.6% |  30.0ms |       3 | `addtoken`                       | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  1.6% |  30.0ms |       3 | `parse_tokens`                   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`   |
|  1.6% |  30.0ms |       3 | `visit_default`                  | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  1.6% |  30.0ms |       3 | `whitespace`                     | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  1.6% |  30.0ms |       3 | `append`                         | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  1.6% |  30.0ms |       3 | `is_multiline_string`            | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  1.6% |  30.0ms |       3 | `transform_line`                 | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  1.6% |  30.0ms |       3 | `hug_power_op`                   | `/venv/lib/python3.11/site-packages/black/trans.py`             |
|  1.6% |  30.0ms |       3 | `_stringify_ast_with_new_parent` | `/venv/lib/python3.11/site-packages/black/parsing.py`           |

#### Categories

##### Third-party

|     % |    Time | Samples | Function                         | Location                                                        |
| ----: | ------: | ------: | -------------------------------- | --------------------------------------------------------------- |
| 15.4% | 290.0ms |      29 | `_addtoken`                      | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  6.9% | 130.0ms |      13 | `generate_comments`              | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|  6.4% | 120.0ms |      12 | `get_features_used`              | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
|  4.8% |  90.0ms |       9 | `pop`                            | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  4.3% |  80.0ms |       8 | `generate_tokens`                | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|  4.3% |  80.0ms |       8 | `push`                           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  2.7% |  50.0ms |       5 | `changed`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  2.7% |  50.0ms |       5 | `mark`                           | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
|  2.1% |  40.0ms |       4 | `_stringify_ast`                 | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
|  1.6% |  30.0ms |       3 | `addtoken`                       | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  1.6% |  30.0ms |       3 | `parse_tokens`                   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`   |
|  1.6% |  30.0ms |       3 | `visit_default`                  | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  1.6% |  30.0ms |       3 | `whitespace`                     | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  1.6% |  30.0ms |       3 | `append`                         | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  1.6% |  30.0ms |       3 | `is_multiline_string`            | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  1.6% |  30.0ms |       3 | `transform_line`                 | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  1.6% |  30.0ms |       3 | `hug_power_op`                   | `/venv/lib/python3.11/site-packages/black/trans.py`             |
|  1.6% |  30.0ms |       3 | `_stringify_ast_with_new_parent` | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
|  1.1% |  20.0ms |       2 | `__new__`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  1.1% |  20.0ms |       2 | `shift`                          | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |

##### Standard library

|    % |    Time | Samples | Function            | Location                                 |
| ---: | ------: | ------: | ------------------- | ---------------------------------------- |
| 9.0% | 170.0ms |      17 | `parse`             | `/usr/lib/python3.11/ast.py`             |
| 0.5% |  10.0ms |       1 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |
| 0.5% |  10.0ms |       1 | `__new__`           | `<frozen abc>`                           |

##### Unknown

|    % |   Time | Samples | Function      | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 4.8% | 90.0ms |       9 | `(anonymous)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |    Time | Samples | Location                                                         |
| -----: | ------: | ------: | ---------------------------------------------------------------- |
| 100.0% | 290.0ms |      29 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:278` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |    Time | Samples | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 170.0ms |      17 | `/usr/lib/python3.11/ast.py:33` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|      % |    Time | Samples | Location                                                  |
| -----: | ------: | ------: | --------------------------------------------------------- |
| 100.0% | 130.0ms |      13 | `/venv/lib/python3.11/site-packages/black/comments.py:52` |

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |    Time | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 120.0ms |      12 | `/venv/lib/python3.11/site-packages/black/__init__.py:1286` |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Location                                                         |
| -----: | -----: | ------: | ---------------------------------------------------------------- |
| 100.0% | 90.0ms |       9 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:386` |

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|      % |   Time | Samples | Location                                                            |
| -----: | -----: | ------: | ------------------------------------------------------------------- |
| 100.0% | 80.0ms |       8 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:554` |

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Location                                                         |
| -----: | -----: | ------: | ---------------------------------------------------------------- |
| 100.0% | 80.0ms |       8 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:374` |

##### `changed` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Location                                                    |
| -----: | -----: | ------: | ----------------------------------------------------------- |
| 100.0% | 50.0ms |       5 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:160` |

##### `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|      % |   Time | Samples | Location                                                  |
| -----: | -----: | ------: | --------------------------------------------------------- |
| 100.0% | 50.0ms |       5 | `/venv/lib/python3.11/site-packages/black/brackets.py:70` |

##### `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|      % |   Time | Samples | Location                                                  |
| -----: | -----: | ------: | --------------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `/venv/lib/python3.11/site-packages/black/parsing.py:182` |

##### `addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Location                                                         |
| -----: | -----: | ------: | ---------------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:230` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|      % |   Time | Samples | Location                                                          |
| -----: | -----: | ------: | ----------------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py:114` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |   Time | Samples | Location                                                  |
| -----: | -----: | ------: | --------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/linegen.py:134` |

##### `whitespace` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |   Time | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/nodes.py:183` |

##### `append` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Location                                               |
| -----: | -----: | ------: | ------------------------------------------------------ |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/lines.py:52` |

##### `is_multiline_string` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |   Time | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/nodes.py:773` |

##### `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |   Time | Samples | Location                                                  |
| -----: | -----: | ------: | --------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/linegen.py:601` |

##### `hug_power_op` (`/venv/lib/python3.11/site-packages/black/trans.py`)

|      % |   Time | Samples | Location                                               |
| -----: | -----: | ------: | ------------------------------------------------------ |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/trans.py:81` |

##### `_stringify_ast_with_new_parent` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|      % |   Time | Samples | Location                                                  |
| -----: | -----: | ------: | --------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `/venv/lib/python3.11/site-packages/black/parsing.py:174` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Location                                                   |
| -----: | -----: | ------: | ---------------------------------------------------------- |
| 100.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:70` |

##### `shift` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Location                                                         |
| -----: | -----: | ------: | ---------------------------------------------------------------- |
| 100.0% | 20.0ms |       2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:361` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % |   Time | Samples | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- |
| 100.0% | 10.0ms |       1 | `<frozen importlib._bootstrap_external>:727` |

##### `__new__` (`<frozen abc>`)

|      % |   Time | Samples | Location           |
| -----: | -----: | ------: | ------------------ |
| 100.0% | 10.0ms |       1 | `<frozen abc>:105` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |    Time | Samples | Caller     | Location                                                     |
| -----: | ------: | ------: | ---------- | ------------------------------------------------------------ |
| 100.0% | 290.0ms |      29 | `addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |    Time | Samples | Caller                  | Location                                              |
| -----: | ------: | ------: | ----------------------- | ----------------------------------------------------- |
| 100.0% | 170.0ms |      17 | `_parse_single_version` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|      % |    Time | Samples | Caller          | Location                                              |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 130.0ms |      13 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |    Time | Samples | Caller                   | Location                                               |
| -----: | ------: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% | 120.0ms |      12 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Caller      | Location                                                     |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 90.0ms |       9 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|      % |   Time | Samples | Caller     | Location                                                      |
| -----: | -----: | ------: | ---------- | ------------------------------------------------------------- |
| 100.0% | 80.0ms |       8 | `__next__` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Caller      | Location                                                     |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 80.0ms |       8 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `changed` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|     % |   Time | Samples | Caller    | Location                                                |
| ----: | -----: | ------: | --------- | ------------------------------------------------------- |
| 60.0% | 30.0ms |       3 | `prefix`  | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
| 40.0% | 20.0ms |       2 | `changed` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|      % |   Time | Samples | Caller   | Location                                            |
| -----: | -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 50.0ms |       5 | `append` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|      % |   Time | Samples | Caller                           | Location                                              |
| -----: | -----: | ------: | -------------------------------- | ----------------------------------------------------- |
| 100.0% | 40.0ms |       4 | `_stringify_ast_with_new_parent` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Caller         | Location                                                      |
| -----: | -----: | ------: | -------------- | ------------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `parse_tokens` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|      % |   Time | Samples | Caller         | Location                                                      |
| -----: | -----: | ------: | -------------- | ------------------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `parse_string` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |   Time | Samples | Caller  | Location                                            |
| -----: | -----: | ------: | ------- | --------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `whitespace` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |   Time | Samples | Caller   | Location                                            |
| -----: | -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `append` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `append` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|      % |   Time | Samples | Caller          | Location                                              |
| -----: | -----: | ------: | --------------- | ----------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `is_multiline_string` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |   Time | Samples | Caller                       | Location                                              |
| -----: | -----: | ------: | ---------------------------- | ----------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `normalize_invisible_parens` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|      % |   Time | Samples | Caller             | Location                                               |
| -----: | -----: | ------: | ------------------ | ------------------------------------------------------ |
| 100.0% | 30.0ms |       3 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `hug_power_op` (`/venv/lib/python3.11/site-packages/black/trans.py`)

|     % |   Time | Samples | Caller                              | Location                                              |
| ----: | -----: | ------: | ----------------------------------- | ----------------------------------------------------- |
| 66.7% | 20.0ms |       2 | `run_transformer`                   | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| 33.3% | 10.0ms |       1 | `_hugging_power_ops_line_to_string` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `_stringify_ast_with_new_parent` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|      % |   Time | Samples | Caller           | Location                                              |
| -----: | -----: | ------: | ---------------- | ----------------------------------------------------- |
| 100.0% | 30.0ms |       3 | `_stringify_ast` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|      % |   Time | Samples | Caller    | Location                                                |
| -----: | -----: | ------: | --------- | ------------------------------------------------------- |
| 100.0% | 20.0ms |       2 | `convert` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `shift` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|      % |   Time | Samples | Caller      | Location                                                     |
| -----: | -----: | ------: | ----------- | ------------------------------------------------------------ |
| 100.0% | 20.0ms |       2 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % |   Time | Samples | Caller     | Location                                 |
| -----: | -----: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 10.0ms |       1 | `get_code` | `<frozen importlib._bootstrap_external>` |

##### `__new__` (`<frozen abc>`)

|      % |   Time | Samples | Caller     | Location                           |
| -----: | -----: | ------: | ---------- | ---------------------------------- |
| 100.0% | 10.0ms |       1 | `<module>` | `/usr/lib/python3.11/selectors.py` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                          | Location                                                      |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------------------------- |
| 95.2% |   1.79s |     179 | `_run_module_as_main`             | `<frozen runpy>`                                              |
| 94.1% |   1.77s |     177 | `format_file_contents`            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.1% |   1.77s |     177 | `format_file_in_place`            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.1% |   1.77s |     177 | `reformat_one`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.1% |   1.77s |     177 | `main`                            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.1% |   1.77s |     177 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py`      |
| 94.1% |   1.77s |     177 | `invoke`                          | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 94.1% |   1.77s |     177 | `main`                            | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 94.1% |   1.77s |     177 | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 94.1% |   1.77s |     177 | `patched_main`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.1% |   1.77s |     177 | `<module>`                        | `/venv/lib/python3.11/site-packages/black/__main__.py`        |
| 94.1% |   1.77s |     177 | `_run_code`                       | `<frozen runpy>`                                              |
| 80.9% |   1.52s |     152 | `_format_str_once`                | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 49.5% | 930.0ms |      93 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 44.7% | 840.0ms |      84 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 36.2% | 680.0ms |      68 | `parse_tokens`                    | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| 36.2% | 680.0ms |      68 | `parse_string`                    | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| 36.2% | 680.0ms |      68 | `lib2to3_parse`                   | `/venv/lib/python3.11/site-packages/black/parsing.py`         |
| 31.4% | 590.0ms |      59 | `assert_stable`                   | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 29.8% | 560.0ms |      56 | `addtoken`                        | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`  |

#### Categories

##### Third-party

|     % |    Time | Samples | Function                          | Location                                                      |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------------------------- |
| 94.1% |   1.77s |     177 | `format_file_contents`            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.1% |   1.77s |     177 | `format_file_in_place`            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.1% |   1.77s |     177 | `reformat_one`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.1% |   1.77s |     177 | `main`                            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.1% |   1.77s |     177 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py`      |
| 94.1% |   1.77s |     177 | `invoke`                          | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 94.1% |   1.77s |     177 | `main`                            | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 94.1% |   1.77s |     177 | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py`            |
| 94.1% |   1.77s |     177 | `patched_main`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 94.1% |   1.77s |     177 | `<module>`                        | `/venv/lib/python3.11/site-packages/black/__main__.py`        |
| 80.9% |   1.52s |     152 | `_format_str_once`                | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 49.5% | 930.0ms |      93 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 44.7% | 840.0ms |      84 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 36.2% | 680.0ms |      68 | `parse_tokens`                    | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| 36.2% | 680.0ms |      68 | `parse_string`                    | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| 36.2% | 680.0ms |      68 | `lib2to3_parse`                   | `/venv/lib/python3.11/site-packages/black/parsing.py`         |
| 31.4% | 590.0ms |      59 | `assert_stable`                   | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| 29.8% | 560.0ms |      56 | `addtoken`                        | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`  |
| 27.7% | 520.0ms |      52 | `visit`                           | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| 27.7% | 520.0ms |      52 | `visit_default`                   | `/venv/lib/python3.11/site-packages/black/nodes.py`           |

##### Standard library

|     % |    Time | Samples | Function                    | Location                                 |
| ----: | ------: | ------: | --------------------------- | ---------------------------------------- |
| 95.2% |   1.79s |     179 | `_run_module_as_main`       | `<frozen runpy>`                         |
| 94.1% |   1.77s |     177 | `_run_code`                 | `<frozen runpy>`                         |
|  9.0% | 170.0ms |      17 | `parse`                     | `/usr/lib/python3.11/ast.py`             |
|  1.1% |  20.0ms |       2 | `exec_module`               | `<frozen importlib._bootstrap_external>` |
|  1.1% |  20.0ms |       2 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|  1.1% |  20.0ms |       2 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
|  1.1% |  20.0ms |       2 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
|  1.1% |  20.0ms |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  1.1% |  20.0ms |       2 | `_get_module_details`       | `<frozen runpy>`                         |
|  0.5% |  10.0ms |       1 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
|  0.5% |  10.0ms |       1 | `get_code`                  | `<frozen importlib._bootstrap_external>` |
|  0.5% |  10.0ms |       1 | `__new__`                   | `<frozen abc>`                           |
|  0.5% |  10.0ms |       1 | `<module>`                  | `/usr/lib/python3.11/selectors.py`       |
|  0.5% |  10.0ms |       1 | `<module>`                  | `/usr/lib/python3.11/subprocess.py`      |

##### Unknown

|    % |   Time | Samples | Function      | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 4.8% | 90.0ms |       9 | `(anonymous)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_module_as_main` (`<frozen runpy>`)

|     % |   Time | Samples | Callee                | Location         |
| ----: | -----: | ------: | --------------------- | ---------------- |
| 98.9% |  1.77s |     177 | `_run_code`           | `<frozen runpy>` |
|  1.1% | 20.0ms |       2 | `_get_module_details` | `<frozen runpy>` |

##### `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee                            | Location                                               |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------------------ |
| 52.5% | 930.0ms |      93 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| 47.5% | 840.0ms |      84 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `format_file_in_place` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.77s |     177 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `reformat_one` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee                 | Location                                               |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------------------ |
| 100.0% | 1.77s |     177 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 1.77s |     177 | `reformat_one` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`)

|      % |  Time | Samples | Callee | Location                                               |
| -----: | ----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% | 1.77s |     177 | `main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee     | Location                                                 |
| -----: | ----: | ------: | ---------- | -------------------------------------------------------- |
| 100.0% | 1.77s |     177 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py` |
| 100.0% | 1.77s |     177 | `invoke`   | `/venv/lib/python3.11/site-packages/click/core.py`       |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee   | Location                                           |
| -----: | ----: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 1.77s |     177 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |  Time | Samples | Callee | Location                                           |
| -----: | ----: | ------: | ------ | -------------------------------------------------- |
| 100.0% | 1.77s |     177 | `main` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |  Time | Samples | Callee     | Location                                           |
| -----: | ----: | ------: | ---------- | -------------------------------------------------- |
| 100.0% | 1.77s |     177 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`)

|      % |  Time | Samples | Callee         | Location                                               |
| -----: | ----: | ------: | -------------- | ------------------------------------------------------ |
| 100.0% | 1.77s |     177 | `patched_main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `_run_code` (`<frozen runpy>`)

|      % |  Time | Samples | Callee     | Location                                               |
| -----: | ----: | ------: | ---------- | ------------------------------------------------------ |
| 100.0% | 1.77s |     177 | `<module>` | `/venv/lib/python3.11/site-packages/black/__main__.py` |

##### `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee                   | Location                                               |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------ |
| 44.7% | 680.0ms |      68 | `lib2to3_parse`          | `/venv/lib/python3.11/site-packages/black/parsing.py`  |
| 34.2% | 520.0ms |      52 | `visit`                  | `/venv/lib/python3.11/site-packages/black/nodes.py`    |
|  9.2% | 140.0ms |      14 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |
|  5.9% |  90.0ms |       9 | `transform_line`         | `/venv/lib/python3.11/site-packages/black/linegen.py`  |
|  2.6% |  40.0ms |       4 | `maybe_empty_lines`      | `/venv/lib/python3.11/site-packages/black/lines.py`    |

##### `format_str` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |    Time | Samples | Callee             | Location                                               |
| -----: | ------: | ------: | ------------------ | ------------------------------------------------------ |
| 100.0% | 930.0ms |      93 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `check_stability_and_equivalence` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|     % |    Time | Samples | Callee              | Location                                               |
| ----: | ------: | ------: | ------------------- | ------------------------------------------------------ |
| 70.2% | 590.0ms |      59 | `assert_stable`     | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| 28.6% | 240.0ms |      24 | `assert_equivalent` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|     % |    Time | Samples | Callee     | Location                                                      |
| ----: | ------: | ------: | ---------- | ------------------------------------------------------------- |
| 82.4% | 560.0ms |      56 | `addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`  |
| 13.2% |  90.0ms |       9 | `__next__` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `parse_string` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|      % |    Time | Samples | Callee         | Location                                                      |
| -----: | ------: | ------: | -------------- | ------------------------------------------------------------- |
| 100.0% | 680.0ms |      68 | `parse_tokens` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|      % |    Time | Samples | Callee         | Location                                                      |
| -----: | ------: | ------: | -------------- | ------------------------------------------------------------- |
| 100.0% | 680.0ms |      68 | `parse_string` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `assert_stable` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|      % |    Time | Samples | Callee             | Location                                               |
| -----: | ------: | ------: | ------------------ | ------------------------------------------------------ |
| 100.0% | 590.0ms |      59 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|     % |    Time | Samples | Callee      | Location                                                     |
| ----: | ------: | ------: | ----------- | ------------------------------------------------------------ |
| 92.9% | 520.0ms |      52 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
|  1.8% |  10.0ms |       1 | `classify`  | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |    Time | Samples | Callee              | Location                                              |
| -----: | ------: | ------: | ------------------- | ----------------------------------------------------- |
| 100.0% | 520.0ms |      52 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  98.1% | 510.0ms |      51 | `visit_suite`       | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  98.1% | 510.0ms |      51 | `visit_stmt`        | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  96.2% | 500.0ms |      50 | `visit_funcdef`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  78.8% | 410.0ms |      41 | `visit_simple_stmt` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|      % |    Time | Samples | Callee  | Location                                            |
| -----: | ------: | ------: | ------- | --------------------------------------------------- |
| 100.0% | 520.0ms |      52 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

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

|      % |   Time | Samples | Callee     | Location                                                     |
| -----: | -----: | ------: | ---------- | ------------------------------------------------------------ |
| 100.0% | 20.0ms |       2 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/specifiers.py` |
| 100.0% | 20.0ms |       2 | `<module>` | `/venv/lib/python3.11/site-packages/black/files.py`          |
| 100.0% | 20.0ms |       2 | `<module>` | `/venv/lib/python3.11/site-packages/black/__init__.py`       |
|  50.0% | 10.0ms |       1 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/_ranges.py`    |
|  50.0% | 10.0ms |       1 | `<module>` | `/usr/lib/python3.11/selectors.py`                           |

##### `_get_module_details` (`<frozen runpy>`)

|      % |   Time | Samples | Callee                | Location                        |
| -----: | -----: | ------: | --------------------- | ------------------------------- |
| 100.0% | 20.0ms |       2 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% | 20.0ms |       2 | `_get_module_details` | `<frozen runpy>`                |

##### `get_code` (`<frozen importlib._bootstrap_external>`)

|      % |   Time | Samples | Callee              | Location                                 |
| -----: | -----: | ------: | ------------------- | ---------------------------------------- |
| 100.0% | 10.0ms |       1 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |

##### `<module>` (`/usr/lib/python3.11/selectors.py`)

|      % |   Time | Samples | Callee    | Location       |
| -----: | -----: | ------: | --------- | -------------- |
| 100.0% | 10.0ms |       1 | `__new__` | `<frozen abc>` |

##### `<module>` (`/usr/lib/python3.11/subprocess.py`)

|      % |   Time | Samples | Callee           | Location                        |
| -----: | -----: | ------: | ---------------- | ------------------------------- |
| 100.0% | 10.0ms |       1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.0% | 170.0ms |      17 | `parse` (`/usr/lib/python3.11/ast.py`) ← `_parse_single_version` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 9.0% | 170.0ms |      17 | `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 6.4% | 120.0ms |      12 | `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 4.8% |  90.0ms |       9 | `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 4.3% |  80.0ms |       8 | `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 4.3% |  80.0ms |       8 | `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3.7% |  70.0ms |       7 | `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`) ← `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.7% |  70.0ms |       7 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.7% |  50.0ms |       5 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                 |
| 2.1% |  40.0ms |       4 | `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.6% |  30.0ms |       3 | `addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.6% |  30.0ms |       3 | `is_multiline_string` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `normalize_invisible_parens` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.6% |  30.0ms |       3 | `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.6% |  30.0ms |       3 | `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.1% |  20.0ms |       2 | `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.1% |  20.0ms |       2 | `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.1% |  20.0ms |       2 | `changed` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `prefix` ← `normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `generate_comments` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                           |
| 1.1% |  20.0ms |       2 | `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`) ← `append` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.1% |  20.0ms |       2 | `normalize_string_prefix` (`/venv/lib/python3.11/site-packages/black/strings.py`) ← `visit_STRING` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` |
| 1.1% |  20.0ms |       2 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                       |

# Sampling profile

Collected 186 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| Ours     | 95.2% |     177 |
| Unknown  |  4.8% |       9 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                         | Location                     |
| ----: | ------: | -------------------------------- | ---------------------------- |
| 12.4% |      23 | `_addtoken`                      | `blib2to3/pgen2/parse.py`    |
|  6.5% |      12 | `__new__`                        | `blib2to3/pytree.py`         |
|  4.8% |       9 | `push`                           | `blib2to3/pgen2/parse.py`    |
|  4.8% |       9 | `(anonymous)`                    | `<unknown>`                  |
|  3.8% |       7 | `get_features_used`              | `black/__init__.py`          |
|  3.8% |       7 | `normalize_trailing_prefix`      | `black/comments.py`          |
|  3.8% |       7 | `generate_comments`              | `black/comments.py`          |
|  3.8% |       7 | `parse`                          | `ast.py`                     |
|  3.2% |       6 | `_stringify_ast`                 | `black/parsing.py`           |
|  2.7% |       5 | `_stringify_ast_with_new_parent` | `black/parsing.py`           |
|  2.7% |       5 | `visit_default`                  | `black/linegen.py`           |
|  2.7% |       5 | `parse_tokens`                   | `blib2to3/pgen2/driver.py`   |
|  2.7% |       5 | `whitespace`                     | `black/nodes.py`             |
|  2.7% |       5 | `generate_tokens`                | `blib2to3/pgen2/tokenize.py` |
|  2.7% |       5 | `__init__`                       | `<string>`                   |
|  2.2% |       4 | `__init__`                       | `blib2to3/pytree.py`         |
|  1.6% |       3 | `maybe_empty_lines`              | `black/lines.py`             |
|  1.6% |       3 | `visit`                          | `black/nodes.py`             |
|  1.6% |       3 | `hug_power_op`                   | `black/trans.py`             |
|  1.1% |       2 | `_maybe_empty_lines`             | `black/lines.py`             |

#### Categories

##### Ours

|     % | Samples | Function                         | Location                     |
| ----: | ------: | -------------------------------- | ---------------------------- |
| 12.4% |      23 | `_addtoken`                      | `blib2to3/pgen2/parse.py`    |
|  6.5% |      12 | `__new__`                        | `blib2to3/pytree.py`         |
|  4.8% |       9 | `push`                           | `blib2to3/pgen2/parse.py`    |
|  3.8% |       7 | `get_features_used`              | `black/__init__.py`          |
|  3.8% |       7 | `normalize_trailing_prefix`      | `black/comments.py`          |
|  3.8% |       7 | `generate_comments`              | `black/comments.py`          |
|  3.8% |       7 | `parse`                          | `ast.py`                     |
|  3.2% |       6 | `_stringify_ast`                 | `black/parsing.py`           |
|  2.7% |       5 | `_stringify_ast_with_new_parent` | `black/parsing.py`           |
|  2.7% |       5 | `visit_default`                  | `black/linegen.py`           |
|  2.7% |       5 | `parse_tokens`                   | `blib2to3/pgen2/driver.py`   |
|  2.7% |       5 | `whitespace`                     | `black/nodes.py`             |
|  2.7% |       5 | `generate_tokens`                | `blib2to3/pgen2/tokenize.py` |
|  2.7% |       5 | `__init__`                       | `<string>`                   |
|  2.2% |       4 | `__init__`                       | `blib2to3/pytree.py`         |
|  1.6% |       3 | `maybe_empty_lines`              | `black/lines.py`             |
|  1.6% |       3 | `visit`                          | `black/nodes.py`             |
|  1.6% |       3 | `hug_power_op`                   | `black/trans.py`             |
|  1.1% |       2 | `_maybe_empty_lines`             | `black/lines.py`             |
|  1.1% |       2 | `addtoken`                       | `blib2to3/pgen2/parse.py`    |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 4.8% |       9 | `(anonymous)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |      23 | `blib2to3/pgen2/parse.py:290` |

##### `__new__` (`blib2to3/pytree.py`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      12 | `blib2to3/pytree.py:81` |

##### `push` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |       9 | `blib2to3/pgen2/parse.py:386` |

##### `get_features_used` (`black/__init__.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       7 | `black/__init__.py:1307` |

##### `normalize_trailing_prefix` (`black/comments.py`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       7 | `black/comments.py:127` |

##### `generate_comments` (`black/comments.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       7 | `black/comments.py:52` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |       7 | `ast.py:33` |

##### `_stringify_ast` (`black/parsing.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       6 | `black/parsing.py:174` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       5 | `black/parsing.py:166` |

##### `visit_default` (`black/linegen.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       5 | `black/linegen.py:134` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Location                       |
| -----: | ------: | ------------------------------ |
| 100.0% |       5 | `blib2to3/pgen2/driver.py:114` |

##### `whitespace` (`black/nodes.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       5 | `black/nodes.py:194` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|      % | Samples | Location                         |
| -----: | ------: | -------------------------------- |
| 100.0% |       5 | `blib2to3/pgen2/tokenize.py:565` |

##### `__init__` (`<string>`)

|      % | Samples | Location     |
| -----: | ------: | ------------ |
| 100.0% |       5 | `<string>:2` |

##### `__init__` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 50.0% |       2 | `blib2to3/pytree.py:248` |
| 50.0% |       2 | `blib2to3/pytree.py:400` |

##### `maybe_empty_lines` (`black/lines.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       3 | `black/lines.py:560` |

##### `visit` (`black/nodes.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       3 | `black/nodes.py:163` |

##### `hug_power_op` (`black/trans.py`)

|      % | Samples | Location            |
| -----: | ------: | ------------------- |
| 100.0% |       3 | `black/trans.py:85` |

##### `_maybe_empty_lines` (`black/lines.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       2 | `black/lines.py:610` |

##### `addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |       2 | `blib2to3/pgen2/parse.py:242` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller     | Location                  |
| -----: | ------: | ---------- | ------------------------- |
| 100.0% |      23 | `addtoken` | `blib2to3/pgen2/parse.py` |

##### `__new__` (`blib2to3/pytree.py`)

|      % | Samples | Caller    | Location             |
| -----: | ------: | --------- | -------------------- |
| 100.0% |      12 | `convert` | `blib2to3/pytree.py` |

##### `push` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |       9 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `get_features_used` (`black/__init__.py`)

|      % | Samples | Caller                   | Location            |
| -----: | ------: | ------------------------ | ------------------- |
| 100.0% |       7 | `detect_target_versions` | `black/__init__.py` |

##### `normalize_trailing_prefix` (`black/comments.py`)

|      % | Samples | Caller              | Location            |
| -----: | ------: | ------------------- | ------------------- |
| 100.0% |       7 | `generate_comments` | `black/comments.py` |

##### `generate_comments` (`black/comments.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |       7 | `visit_default` | `black/linegen.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |       7 | `_parse_single_version` | `black/parsing.py` |

##### `_stringify_ast` (`black/parsing.py`)

|      % | Samples | Caller                           | Location           |
| -----: | ------: | -------------------------------- | ------------------ |
| 100.0% |       6 | `_stringify_ast_with_new_parent` | `black/parsing.py` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py`)

|      % | Samples | Caller           | Location           |
| -----: | ------: | ---------------- | ------------------ |
| 100.0% |       5 | `_stringify_ast` | `black/parsing.py` |

##### `visit_default` (`black/linegen.py`)

|     % | Samples | Caller         | Location           |
| ----: | ------: | -------------- | ------------------ |
| 40.0% |       2 | `visit`        | `black/nodes.py`   |
| 20.0% |       1 | `visit_NUMBER` | `black/linegen.py` |
| 20.0% |       1 | `visit_INDENT` | `black/linegen.py` |
| 20.0% |       1 | `visit_DEDENT` | `black/linegen.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Caller         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |       5 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `whitespace` (`black/nodes.py`)

|      % | Samples | Caller   | Location         |
| -----: | ------: | -------- | ---------------- |
| 100.0% |       5 | `append` | `black/lines.py` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|      % | Samples | Caller     | Location                   |
| -----: | ------: | ---------- | -------------------------- |
| 100.0% |       5 | `__next__` | `blib2to3/pgen2/driver.py` |

##### `__init__` (`<string>`)

|     % | Samples | Caller              | Location           |
| ----: | ------: | ------------------- | ------------------ |
| 60.0% |       3 | `__init__`          | `<string>`         |
| 20.0% |       1 | `line`              | `black/linegen.py` |
| 20.0% |       1 | `maybe_empty_lines` | `black/lines.py`   |

##### `__init__` (`blib2to3/pytree.py`)

|      % | Samples | Caller    | Location             |
| -----: | ------: | --------- | -------------------- |
| 100.0% |       4 | `convert` | `blib2to3/pytree.py` |

##### `maybe_empty_lines` (`black/lines.py`)

|      % | Samples | Caller             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |       3 | `_format_str_once` | `black/__init__.py` |

##### `visit` (`black/nodes.py`)

|     % | Samples | Caller          | Location           |
| ----: | ------: | --------------- | ------------------ |
| 66.7% |       2 | `visit_stmt`    | `black/linegen.py` |
| 33.3% |       1 | `visit_default` | `black/nodes.py`   |

##### `hug_power_op` (`black/trans.py`)

|     % | Samples | Caller                              | Location           |
| ----: | ------: | ----------------------------------- | ------------------ |
| 66.7% |       2 | `_hugging_power_ops_line_to_string` | `black/linegen.py` |
| 33.3% |       1 | `run_transformer`                   | `black/linegen.py` |

##### `_maybe_empty_lines` (`black/lines.py`)

|      % | Samples | Caller              | Location         |
| -----: | ------: | ------------------- | ---------------- |
| 100.0% |       2 | `maybe_empty_lines` | `black/lines.py` |

##### `addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |       2 | `parse_tokens` | `blib2to3/pgen2/driver.py` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                          | Location                   |
| ----: | ------: | --------------------------------- | -------------------------- |
| 95.2% |     177 | `format_file_contents`            | `black/__init__.py`        |
| 95.2% |     177 | `format_file_in_place`            | `black/__init__.py`        |
| 95.2% |     177 | `reformat_one`                    | `black/__init__.py`        |
| 95.2% |     177 | `main`                            | `black/__init__.py`        |
| 95.2% |     177 | `new_func`                        | `click/decorators.py`      |
| 95.2% |     177 | `invoke`                          | `click/core.py`            |
| 95.2% |     177 | `main`                            | `click/core.py`            |
| 95.2% |     177 | `__call__`                        | `click/core.py`            |
| 95.2% |     177 | `patched_main`                    | `black/__init__.py`        |
| 95.2% |     177 | `<module>`                        | `black/__main__.py`        |
| 95.2% |     177 | `_run_code`                       | `<frozen runpy>`           |
| 95.2% |     177 | `_run_module_as_main`             | `<frozen runpy>`           |
| 84.9% |     158 | `_format_str_once`                | `black/__init__.py`        |
| 56.5% |     105 | `format_str`                      | `black/__init__.py`        |
| 38.7% |      72 | `check_stability_and_equivalence` | `black/__init__.py`        |
| 38.2% |      71 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |
| 38.2% |      71 | `parse_string`                    | `blib2to3/pgen2/driver.py` |
| 38.2% |      71 | `lib2to3_parse`                   | `black/parsing.py`         |
| 30.6% |      57 | `addtoken`                        | `blib2to3/pgen2/parse.py`  |
| 29.0% |      54 | `assert_stable`                   | `black/__init__.py`        |

#### Categories

##### Ours

|     % | Samples | Function                          | Location                   |
| ----: | ------: | --------------------------------- | -------------------------- |
| 95.2% |     177 | `format_file_contents`            | `black/__init__.py`        |
| 95.2% |     177 | `format_file_in_place`            | `black/__init__.py`        |
| 95.2% |     177 | `reformat_one`                    | `black/__init__.py`        |
| 95.2% |     177 | `main`                            | `black/__init__.py`        |
| 95.2% |     177 | `new_func`                        | `click/decorators.py`      |
| 95.2% |     177 | `invoke`                          | `click/core.py`            |
| 95.2% |     177 | `main`                            | `click/core.py`            |
| 95.2% |     177 | `__call__`                        | `click/core.py`            |
| 95.2% |     177 | `patched_main`                    | `black/__init__.py`        |
| 95.2% |     177 | `<module>`                        | `black/__main__.py`        |
| 84.9% |     158 | `_format_str_once`                | `black/__init__.py`        |
| 56.5% |     105 | `format_str`                      | `black/__init__.py`        |
| 38.7% |      72 | `check_stability_and_equivalence` | `black/__init__.py`        |
| 38.2% |      71 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |
| 38.2% |      71 | `parse_string`                    | `blib2to3/pgen2/driver.py` |
| 38.2% |      71 | `lib2to3_parse`                   | `black/parsing.py`         |
| 30.6% |      57 | `addtoken`                        | `blib2to3/pgen2/parse.py`  |
| 29.0% |      54 | `assert_stable`                   | `black/__init__.py`        |
| 28.5% |      53 | `_addtoken`                       | `blib2to3/pgen2/parse.py`  |
| 27.4% |      51 | `visit_default`                   | `black/linegen.py`         |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 4.8% |       9 | `(anonymous)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `format_file_contents` (`black/__init__.py`)

|     % | Samples | Callee                            | Location            |
| ----: | ------: | --------------------------------- | ------------------- |
| 59.3% |     105 | `format_str`                      | `black/__init__.py` |
| 40.7% |      72 | `check_stability_and_equivalence` | `black/__init__.py` |

##### `format_file_in_place` (`black/__init__.py`)

|      % | Samples | Callee                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     177 | `format_file_contents` | `black/__init__.py` |

##### `reformat_one` (`black/__init__.py`)

|      % | Samples | Callee                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     177 | `format_file_in_place` | `black/__init__.py` |

##### `main` (`black/__init__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     177 | `reformat_one` | `black/__init__.py` |

##### `new_func` (`click/decorators.py`)

|      % | Samples | Callee | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |     177 | `main` | `black/__init__.py` |

##### `invoke` (`click/core.py`)

|      % | Samples | Callee     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     177 | `new_func` | `click/decorators.py` |
| 100.0% |     177 | `invoke`   | `click/core.py`       |

##### `main` (`click/core.py`)

|      % | Samples | Callee   | Location        |
| -----: | ------: | -------- | --------------- |
| 100.0% |     177 | `invoke` | `click/core.py` |

##### `__call__` (`click/core.py`)

|      % | Samples | Callee | Location        |
| -----: | ------: | ------ | --------------- |
| 100.0% |     177 | `main` | `click/core.py` |

##### `patched_main` (`black/__init__.py`)

|      % | Samples | Callee     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |     177 | `__call__` | `click/core.py` |

##### `<module>` (`black/__main__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     177 | `patched_main` | `black/__init__.py` |

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |     177 | `<module>` | `black/__main__.py` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     177 | `_run_code` | `<frozen runpy>` |

##### `_format_str_once` (`black/__init__.py`)

|     % | Samples | Callee                   | Location            |
| ----: | ------: | ------------------------ | ------------------- |
| 44.9% |      71 | `lib2to3_parse`          | `black/parsing.py`  |
| 32.3% |      51 | `visit`                  | `black/nodes.py`    |
|  8.2% |      13 | `transform_line`         | `black/linegen.py`  |
|  5.7% |       9 | `detect_target_versions` | `black/__init__.py` |
|  5.1% |       8 | `maybe_empty_lines`      | `black/lines.py`    |

##### `format_str` (`black/__init__.py`)

|     % | Samples | Callee             | Location            |
| ----: | ------: | ------------------ | ------------------- |
| 99.0% |     104 | `_format_str_once` | `black/__init__.py` |

##### `check_stability_and_equivalence` (`black/__init__.py`)

|     % | Samples | Callee              | Location            |
| ----: | ------: | ------------------- | ------------------- |
| 75.0% |      54 | `assert_stable`     | `black/__init__.py` |
| 25.0% |      18 | `assert_equivalent` | `black/__init__.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|     % | Samples | Callee                      | Location                   |
| ----: | ------: | --------------------------- | -------------------------- |
| 80.3% |      57 | `addtoken`                  | `blib2to3/pgen2/parse.py`  |
| 11.3% |       8 | `__next__`                  | `blib2to3/pgen2/driver.py` |
|  1.4% |       1 | `_partially_consume_prefix` | `blib2to3/pgen2/driver.py` |

##### `parse_string` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Callee         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      71 | `parse_tokens` | `blib2to3/pgen2/driver.py` |

##### `lib2to3_parse` (`black/parsing.py`)

|      % | Samples | Callee         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      71 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `addtoken` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Callee      | Location                  |
| ----: | ------: | ----------- | ------------------------- |
| 93.0% |      53 | `_addtoken` | `blib2to3/pgen2/parse.py` |
|  3.5% |       2 | `classify`  | `blib2to3/pgen2/parse.py` |

##### `assert_stable` (`black/__init__.py`)

|      % | Samples | Callee             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |      54 | `_format_str_once` | `black/__init__.py` |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Callee  | Location                  |
| ----: | ------: | ------- | ------------------------- |
| 20.8% |      11 | `shift` | `blib2to3/pgen2/parse.py` |
| 18.9% |      10 | `pop`   | `blib2to3/pgen2/parse.py` |
| 17.0% |       9 | `push`  | `blib2to3/pgen2/parse.py` |

##### `visit_default` (`black/linegen.py`)

|      % | Samples | Callee              | Location             |
| -----: | ------: | ------------------- | -------------------- |
| 100.0% |      51 | `visit_default`     | `black/nodes.py`     |
|  31.4% |      16 | `generate_comments` | `black/comments.py`  |
|  19.6% |      10 | `append`            | `black/lines.py`     |
|   2.0% |       1 | `any_open_brackets` | `black/brackets.py`  |
|   2.0% |       1 | `prefix`            | `blib2to3/pytree.py` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.0% |      13 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 5.4% |      10 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 3.8% |       7 | `push` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.8% |       7 | `parse` (`ast.py`) ← `_parse_single_version` (`black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3.2% |       6 | `get_features_used` (`black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2.7% |       5 | `__new__` (`blib2to3/pytree.py`) ← `convert` ← `shift` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.7% |       5 | `normalize_trailing_prefix` (`black/comments.py`) ← `generate_comments` ← `visit_default` (`black/linegen.py`) ← `visit_NUMBER` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                              |
| 2.7% |       5 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.2% |       4 | `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.2% |       4 | `_stringify_ast` (`black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.6% |       3 | `__new__` (`blib2to3/pytree.py`) ← `convert` ← `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.6% |       3 | `generate_comments` (`black/comments.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.6% |       3 | `_stringify_ast_with_new_parent` (`black/parsing.py`) ← `_stringify_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.1% |       2 | `_maybe_empty_lines` (`black/lines.py`) ← `maybe_empty_lines` ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.1% |       2 | `push` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.1% |       2 | `_maybe_split_omitting_optional_parens` (`black/linegen.py`) ← `right_hand_split` ← `_rhs` ← `run_transformer` ← `transform_line` ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.1% |       2 | `_subx` (`re/__init__.py`) ← `sub_twice` (`black/strings.py`) ← `normalize_string_quotes` ← `visit_STRING` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` |
| 1.1% |       2 | `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.1% |       2 | `__new__` (`blib2to3/pytree.py`) ← `convert` ← `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.1% |       2 | `visit_DEDENT` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

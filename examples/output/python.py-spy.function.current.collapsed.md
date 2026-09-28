# Sampling profile

Collected 221 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 95.9% |     212 |
| Unknown          |  3.6% |       8 |
| Standard library |  0.5% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function            | Location                     |
| ----: | ------: | ------------------- | ---------------------------- |
| 10.0% |      22 | `_addtoken`         | `blib2to3/pgen2/parse.py`    |
|  9.0% |      20 | `parse`             | `ast.py`                     |
|  8.6% |      19 | `push`              | `blib2to3/pgen2/parse.py`    |
|  4.5% |      10 | `generate_comments` | `black/comments.py`          |
|  4.1% |       9 | `generate_tokens`   | `blib2to3/pgen2/tokenize.py` |
|  3.6% |       8 | `__new__`           | `blib2to3/pytree.py`         |
|  3.6% |       8 | `(anonymous)`       | `<unknown>`                  |
|  2.7% |       6 | `visit_default`     | `black/linegen.py`           |
|  2.7% |       6 | `parse_tokens`      | `blib2to3/pgen2/driver.py`   |
|  2.7% |       6 | `mark`              | `black/brackets.py`          |
|  2.3% |       5 | `visit`             | `black/nodes.py`             |
|  2.3% |       5 | `append`            | `black/lines.py`             |
|  2.3% |       5 | `_stringify_ast`    | `black/parsing.py`           |
|  2.3% |       5 | `__str__`           | `blib2to3/pytree.py`         |
|  2.3% |       5 | `__init__`          | `blib2to3/pytree.py`         |
|  1.8% |       4 | `visit_default`     | `black/nodes.py`             |
|  1.8% |       4 | `convert`           | `blib2to3/pytree.py`         |
|  1.8% |       4 | `<genexpr>`         | `blib2to3/pgen2/tokenize.py` |
|  1.4% |       3 | `__str__`           | `black/lines.py`             |
|  1.4% |       3 | `get_features_used` | `black/__init__.py`          |

#### Categories

##### Ours

|     % | Samples | Function            | Location                     |
| ----: | ------: | ------------------- | ---------------------------- |
| 10.0% |      22 | `_addtoken`         | `blib2to3/pgen2/parse.py`    |
|  9.0% |      20 | `parse`             | `ast.py`                     |
|  8.6% |      19 | `push`              | `blib2to3/pgen2/parse.py`    |
|  4.5% |      10 | `generate_comments` | `black/comments.py`          |
|  4.1% |       9 | `generate_tokens`   | `blib2to3/pgen2/tokenize.py` |
|  3.6% |       8 | `__new__`           | `blib2to3/pytree.py`         |
|  2.7% |       6 | `visit_default`     | `black/linegen.py`           |
|  2.7% |       6 | `parse_tokens`      | `blib2to3/pgen2/driver.py`   |
|  2.7% |       6 | `mark`              | `black/brackets.py`          |
|  2.3% |       5 | `visit`             | `black/nodes.py`             |
|  2.3% |       5 | `append`            | `black/lines.py`             |
|  2.3% |       5 | `_stringify_ast`    | `black/parsing.py`           |
|  2.3% |       5 | `__str__`           | `blib2to3/pytree.py`         |
|  2.3% |       5 | `__init__`          | `blib2to3/pytree.py`         |
|  1.8% |       4 | `visit_default`     | `black/nodes.py`             |
|  1.8% |       4 | `convert`           | `blib2to3/pytree.py`         |
|  1.8% |       4 | `<genexpr>`         | `blib2to3/pgen2/tokenize.py` |
|  1.4% |       3 | `__str__`           | `black/lines.py`             |
|  1.4% |       3 | `get_features_used` | `black/__init__.py`          |
|  1.4% |       3 | `visit_power`       | `black/linegen.py`           |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 3.6% |       8 | `(anonymous)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |      22 | `blib2to3/pgen2/parse.py:278` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      20 | `ast.py:33` |

##### `push` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |      19 | `blib2to3/pgen2/parse.py:374` |

##### `generate_comments` (`black/comments.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |      10 | `black/comments.py:52` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|      % | Samples | Location                         |
| -----: | ------: | -------------------------------- |
| 100.0% |       9 | `blib2to3/pgen2/tokenize.py:554` |

##### `__new__` (`blib2to3/pytree.py`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       8 | `blib2to3/pytree.py:70` |

##### `visit_default` (`black/linegen.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       6 | `black/linegen.py:134` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Location                       |
| -----: | ------: | ------------------------------ |
| 100.0% |       6 | `blib2to3/pgen2/driver.py:114` |

##### `mark` (`black/brackets.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       6 | `black/brackets.py:70` |

##### `visit` (`black/nodes.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       5 | `black/nodes.py:152` |

##### `append` (`black/lines.py`)

|      % | Samples | Location            |
| -----: | ------: | ------------------- |
| 100.0% |       5 | `black/lines.py:52` |

##### `_stringify_ast` (`black/parsing.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       5 | `black/parsing.py:182` |

##### `__str__` (`blib2to3/pytree.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       5 | `blib2to3/pytree.py:429` |

##### `__init__` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 80.0% |       4 | `blib2to3/pytree.py:389` |
| 20.0% |       1 | `blib2to3/pytree.py:237` |

##### `visit_default` (`black/nodes.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       4 | `black/nodes.py:176` |

##### `convert` (`blib2to3/pytree.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       4 | `blib2to3/pytree.py:475` |

##### `<genexpr>` (`blib2to3/pgen2/tokenize.py`)

|      % | Samples | Location                         |
| -----: | ------: | -------------------------------- |
| 100.0% |       4 | `blib2to3/pgen2/tokenize.py:460` |

##### `__str__` (`black/lines.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       3 | `black/lines.py:479` |

##### `get_features_used` (`black/__init__.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       3 | `black/__init__.py:1286` |

##### `visit_power` (`black/linegen.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       3 | `black/linegen.py:341` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller     | Location                  |
| -----: | ------: | ---------- | ------------------------- |
| 100.0% |      22 | `addtoken` | `blib2to3/pgen2/parse.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |      20 | `_parse_single_version` | `black/parsing.py` |

##### `push` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |      19 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `generate_comments` (`black/comments.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |      10 | `visit_default` | `black/linegen.py` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|      % | Samples | Caller     | Location                   |
| -----: | ------: | ---------- | -------------------------- |
| 100.0% |       9 | `__next__` | `blib2to3/pgen2/driver.py` |

##### `__new__` (`blib2to3/pytree.py`)

|     % | Samples | Caller                | Location             |
| ----: | ------: | --------------------- | -------------------- |
| 87.5% |       7 | `convert`             | `blib2to3/pytree.py` |
| 12.5% |       1 | `wrap_in_parentheses` | `black/nodes.py`     |

##### `visit_default` (`black/linegen.py`)

|     % | Samples | Caller        | Location           |
| ----: | ------: | ------------- | ------------------ |
| 66.7% |       4 | `visit`       | `black/nodes.py`   |
| 33.3% |       2 | `visit_power` | `black/linegen.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Caller         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |       6 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `mark` (`black/brackets.py`)

|      % | Samples | Caller   | Location         |
| -----: | ------: | -------- | ---------------- |
| 100.0% |       6 | `append` | `black/lines.py` |

##### `visit` (`black/nodes.py`)

|     % | Samples | Caller          | Location           |
| ----: | ------: | --------------- | ------------------ |
| 80.0% |       4 | `visit_default` | `black/nodes.py`   |
| 20.0% |       1 | `visit_stmt`    | `black/linegen.py` |

##### `append` (`black/lines.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |       5 | `visit_default` | `black/linegen.py` |

##### `_stringify_ast` (`black/parsing.py`)

|      % | Samples | Caller                           | Location           |
| -----: | ------: | -------------------------------- | ------------------ |
| 100.0% |       5 | `_stringify_ast_with_new_parent` | `black/parsing.py` |

##### `__str__` (`blib2to3/pytree.py`)

|      % | Samples | Caller    | Location         |
| -----: | ------: | --------- | ---------------- |
| 100.0% |       5 | `__str__` | `black/lines.py` |

##### `__init__` (`blib2to3/pytree.py`)

|      % | Samples | Caller    | Location             |
| -----: | ------: | --------- | -------------------- |
| 100.0% |       5 | `convert` | `blib2to3/pytree.py` |

##### `visit_default` (`black/nodes.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |       4 | `visit_default` | `black/linegen.py` |

##### `convert` (`blib2to3/pytree.py`)

|     % | Samples | Caller  | Location                  |
| ----: | ------: | ------- | ------------------------- |
| 75.0% |       3 | `pop`   | `blib2to3/pgen2/parse.py` |
| 25.0% |       1 | `shift` | `blib2to3/pgen2/parse.py` |

##### `<genexpr>` (`blib2to3/pgen2/tokenize.py`)

|      % | Samples | Caller             | Location                     |
| -----: | ------: | ------------------ | ---------------------------- |
| 100.0% |       4 | `is_fstring_start` | `blib2to3/pgen2/tokenize.py` |

##### `__str__` (`black/lines.py`)

|     % | Samples | Caller             | Location            |
| ----: | ------: | ------------------ | ------------------- |
| 66.7% |       2 | `line_to_string`   | `black/lines.py`    |
| 33.3% |       1 | `_format_str_once` | `black/__init__.py` |

##### `get_features_used` (`black/__init__.py`)

|      % | Samples | Caller                   | Location            |
| -----: | ------: | ------------------------ | ------------------- |
| 100.0% |       3 | `detect_target_versions` | `black/__init__.py` |

##### `visit_power` (`black/linegen.py`)

|      % | Samples | Caller  | Location         |
| -----: | ------: | ------- | ---------------- |
| 100.0% |       3 | `visit` | `black/nodes.py` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                          | Location                   |
| ----: | ------: | --------------------------------- | -------------------------- |
| 96.4% |     213 | `_run_module_as_main`             | `<frozen runpy>`           |
| 95.0% |     210 | `reformat_one`                    | `black/__init__.py`        |
| 95.0% |     210 | `main`                            | `black/__init__.py`        |
| 95.0% |     210 | `new_func`                        | `click/decorators.py`      |
| 95.0% |     210 | `invoke`                          | `click/core.py`            |
| 95.0% |     210 | `main`                            | `click/core.py`            |
| 95.0% |     210 | `__call__`                        | `click/core.py`            |
| 95.0% |     210 | `patched_main`                    | `black/__init__.py`        |
| 95.0% |     210 | `<module>`                        | `black/__main__.py`        |
| 95.0% |     210 | `_run_code`                       | `<frozen runpy>`           |
| 93.7% |     207 | `format_file_contents`            | `black/__init__.py`        |
| 93.7% |     207 | `format_file_in_place`            | `black/__init__.py`        |
| 80.1% |     177 | `_format_str_once`                | `black/__init__.py`        |
| 59.7% |     132 | `format_str`                      | `black/__init__.py`        |
| 37.1% |      82 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |
| 37.1% |      82 | `parse_string`                    | `blib2to3/pgen2/driver.py` |
| 37.1% |      82 | `lib2to3_parse`                   | `black/parsing.py`         |
| 33.9% |      75 | `check_stability_and_equivalence` | `black/__init__.py`        |
| 27.6% |      61 | `_addtoken`                       | `blib2to3/pgen2/parse.py`  |
| 27.6% |      61 | `addtoken`                        | `blib2to3/pgen2/parse.py`  |

#### Categories

##### Ours

|     % | Samples | Function                          | Location                   |
| ----: | ------: | --------------------------------- | -------------------------- |
| 95.0% |     210 | `reformat_one`                    | `black/__init__.py`        |
| 95.0% |     210 | `main`                            | `black/__init__.py`        |
| 95.0% |     210 | `new_func`                        | `click/decorators.py`      |
| 95.0% |     210 | `invoke`                          | `click/core.py`            |
| 95.0% |     210 | `main`                            | `click/core.py`            |
| 95.0% |     210 | `__call__`                        | `click/core.py`            |
| 95.0% |     210 | `patched_main`                    | `black/__init__.py`        |
| 95.0% |     210 | `<module>`                        | `black/__main__.py`        |
| 93.7% |     207 | `format_file_contents`            | `black/__init__.py`        |
| 93.7% |     207 | `format_file_in_place`            | `black/__init__.py`        |
| 80.1% |     177 | `_format_str_once`                | `black/__init__.py`        |
| 59.7% |     132 | `format_str`                      | `black/__init__.py`        |
| 37.1% |      82 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |
| 37.1% |      82 | `parse_string`                    | `blib2to3/pgen2/driver.py` |
| 37.1% |      82 | `lib2to3_parse`                   | `black/parsing.py`         |
| 33.9% |      75 | `check_stability_and_equivalence` | `black/__init__.py`        |
| 27.6% |      61 | `_addtoken`                       | `blib2to3/pgen2/parse.py`  |
| 27.6% |      61 | `addtoken`                        | `blib2to3/pgen2/parse.py`  |
| 27.1% |      60 | `visit`                           | `black/nodes.py`           |
| 27.1% |      60 | `visit_default`                   | `black/nodes.py`           |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 3.6% |       8 | `(anonymous)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_module_as_main` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 98.6% |     210 | `_run_code`           | `<frozen runpy>` |
|  1.4% |       3 | `_get_module_details` | `<frozen runpy>` |

##### `reformat_one` (`black/__init__.py`)

|     % | Samples | Callee                 | Location            |
| ----: | ------: | ---------------------- | ------------------- |
| 98.6% |     207 | `format_file_in_place` | `black/__init__.py` |
|  1.4% |       3 | `write`                | `black/cache.py`    |

##### `main` (`black/__init__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     210 | `reformat_one` | `black/__init__.py` |

##### `new_func` (`click/decorators.py`)

|      % | Samples | Callee | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |     210 | `main` | `black/__init__.py` |

##### `invoke` (`click/core.py`)

|      % | Samples | Callee     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     210 | `new_func` | `click/decorators.py` |
| 100.0% |     210 | `invoke`   | `click/core.py`       |

##### `main` (`click/core.py`)

|      % | Samples | Callee   | Location        |
| -----: | ------: | -------- | --------------- |
| 100.0% |     210 | `invoke` | `click/core.py` |

##### `__call__` (`click/core.py`)

|      % | Samples | Callee | Location        |
| -----: | ------: | ------ | --------------- |
| 100.0% |     210 | `main` | `click/core.py` |

##### `patched_main` (`black/__init__.py`)

|      % | Samples | Callee     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |     210 | `__call__` | `click/core.py` |

##### `<module>` (`black/__main__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     210 | `patched_main` | `black/__init__.py` |

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |     210 | `<module>` | `black/__main__.py` |

##### `format_file_contents` (`black/__init__.py`)

|     % | Samples | Callee                            | Location            |
| ----: | ------: | --------------------------------- | ------------------- |
| 63.8% |     132 | `format_str`                      | `black/__init__.py` |
| 36.2% |      75 | `check_stability_and_equivalence` | `black/__init__.py` |

##### `format_file_in_place` (`black/__init__.py`)

|      % | Samples | Callee                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     207 | `format_file_contents` | `black/__init__.py` |

##### `_format_str_once` (`black/__init__.py`)

|     % | Samples | Callee                   | Location            |
| ----: | ------: | ------------------------ | ------------------- |
| 46.3% |      82 | `lib2to3_parse`          | `black/parsing.py`  |
| 33.9% |      60 | `visit`                  | `black/nodes.py`    |
|  9.0% |      16 | `transform_line`         | `black/linegen.py`  |
|  3.4% |       6 | `detect_target_versions` | `black/__init__.py` |
|  2.8% |       5 | `normalize_fmt_off`      | `black/comments.py` |

##### `format_str` (`black/__init__.py`)

|     % | Samples | Callee             | Location            |
| ----: | ------: | ------------------ | ------------------- |
| 98.5% |     130 | `_format_str_once` | `black/__init__.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|     % | Samples | Callee                      | Location                   |
| ----: | ------: | --------------------------- | -------------------------- |
| 74.4% |      61 | `addtoken`                  | `blib2to3/pgen2/parse.py`  |
| 17.1% |      14 | `__next__`                  | `blib2to3/pgen2/driver.py` |
|  1.2% |       1 | `_partially_consume_prefix` | `blib2to3/pgen2/driver.py` |

##### `parse_string` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Callee         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      82 | `parse_tokens` | `blib2to3/pgen2/driver.py` |

##### `lib2to3_parse` (`black/parsing.py`)

|      % | Samples | Callee         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      82 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `check_stability_and_equivalence` (`black/__init__.py`)

|     % | Samples | Callee              | Location            |
| ----: | ------: | ------------------- | ------------------- |
| 62.7% |      47 | `assert_stable`     | `black/__init__.py` |
| 36.0% |      27 | `assert_equivalent` | `black/__init__.py` |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Callee  | Location                  |
| ----: | ------: | ------- | ------------------------- |
| 31.1% |      19 | `push`  | `blib2to3/pgen2/parse.py` |
| 21.3% |      13 | `shift` | `blib2to3/pgen2/parse.py` |
| 11.5% |       7 | `pop`   | `blib2to3/pgen2/parse.py` |

##### `addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Callee      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |      61 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `visit` (`black/nodes.py`)

|      % | Samples | Callee              | Location           |
| -----: | ------: | ------------------- | ------------------ |
| 100.0% |      60 | `visit_default`     | `black/linegen.py` |
|  98.3% |      59 | `visit_stmt`        | `black/linegen.py` |
|  93.3% |      56 | `visit_suite`       | `black/linegen.py` |
|  91.7% |      55 | `visit_funcdef`     | `black/linegen.py` |
|  61.7% |      37 | `visit_simple_stmt` | `black/linegen.py` |

##### `visit_default` (`black/nodes.py`)

|      % | Samples | Callee  | Location         |
| -----: | ------: | ------- | ---------------- |
| 100.0% |      60 | `visit` | `black/nodes.py` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.0% |      20 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 9.0% |      20 | `parse` (`ast.py`) ← `_parse_single_version` (`black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 6.8% |      15 | `push` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.7% |       6 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.3% |       5 | `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.3% |       5 | `generate_comments` (`black/comments.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` |
| 1.8% |       4 | `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                     |
| 1.8% |       4 | `push` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.8% |       4 | `__new__` (`blib2to3/pytree.py`) ← `convert` ← `shift` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.4% |       3 | `__new__` (`blib2to3/pytree.py`) ← `convert` ← `shift` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.4% |       3 | `<genexpr>` (`blib2to3/pgen2/tokenize.py`) ← `is_fstring_start` ← `generate_tokens` ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.4% |       3 | `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.4% |       3 | `__str__` (`blib2to3/pytree.py`) ← `__str__` (`black/lines.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.4% |       3 | `__init__` (`blib2to3/pytree.py`) ← `convert` ← `shift` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.4% |       3 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.4% |       3 | `run_transformer` (`black/linegen.py`) ← `transform_line` ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.9% |       2 | `__str__` (`black/lines.py`) ← `line_to_string` ← `transform_line` (`black/linegen.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.9% |       2 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.9% |       2 | `transform_line` (`black/linegen.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.9% |       2 | `_stringify_ast` (`black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

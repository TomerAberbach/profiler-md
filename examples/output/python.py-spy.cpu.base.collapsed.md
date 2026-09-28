# Sampling profile

Collected 255 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 95.3% |     243 |
| Unknown          |  4.3% |      11 |
| Standard library |  0.4% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function              | Location                     |
| ---: | ------: | --------------------- | ---------------------------- |
| 7.5% |      19 | `generate_tokens`     | `blib2to3/pgen2/tokenize.py` |
| 7.5% |      19 | `_addtoken`           | `blib2to3/pgen2/parse.py`    |
| 5.9% |      15 | `__init__`            | `blib2to3/pytree.py`         |
| 5.9% |      15 | `__str__`             | `black/lines.py`             |
| 5.9% |      15 | `parse`               | `ast.py`                     |
| 4.3% |      11 | `(anonymous)`         | `<unknown>`                  |
| 3.5% |       9 | `parse_tokens`        | `blib2to3/pgen2/driver.py`   |
| 3.5% |       9 | `generate_comments`   | `black/comments.py`          |
| 2.7% |       7 | `_stringify_ast`      | `black/parsing.py`           |
| 2.7% |       7 | `visit_default`       | `black/linegen.py`           |
| 2.7% |       7 | `transform_line`      | `black/linegen.py`           |
| 2.4% |       6 | `get_features_used`   | `black/__init__.py`          |
| 2.4% |       6 | `append`              | `black/lines.py`             |
| 2.4% |       6 | `convert`             | `blib2to3/pytree.py`         |
| 2.0% |       5 | `whitespace`          | `black/nodes.py`             |
| 2.0% |       5 | `<genexpr>`           | `black/lines.py`             |
| 1.6% |       4 | `visit`               | `black/nodes.py`             |
| 1.6% |       4 | `update_sibling_maps` | `blib2to3/pytree.py`         |
| 1.6% |       4 | `prefix`              | `blib2to3/pytree.py`         |
| 1.6% |       4 | `mark`                | `black/brackets.py`          |

#### Categories

##### Ours

|    % | Samples | Function              | Location                     |
| ---: | ------: | --------------------- | ---------------------------- |
| 7.5% |      19 | `generate_tokens`     | `blib2to3/pgen2/tokenize.py` |
| 7.5% |      19 | `_addtoken`           | `blib2to3/pgen2/parse.py`    |
| 5.9% |      15 | `__init__`            | `blib2to3/pytree.py`         |
| 5.9% |      15 | `__str__`             | `black/lines.py`             |
| 5.9% |      15 | `parse`               | `ast.py`                     |
| 3.5% |       9 | `parse_tokens`        | `blib2to3/pgen2/driver.py`   |
| 3.5% |       9 | `generate_comments`   | `black/comments.py`          |
| 2.7% |       7 | `_stringify_ast`      | `black/parsing.py`           |
| 2.7% |       7 | `visit_default`       | `black/linegen.py`           |
| 2.7% |       7 | `transform_line`      | `black/linegen.py`           |
| 2.4% |       6 | `get_features_used`   | `black/__init__.py`          |
| 2.4% |       6 | `append`              | `black/lines.py`             |
| 2.4% |       6 | `convert`             | `blib2to3/pytree.py`         |
| 2.0% |       5 | `whitespace`          | `black/nodes.py`             |
| 2.0% |       5 | `<genexpr>`           | `black/lines.py`             |
| 1.6% |       4 | `visit`               | `black/nodes.py`             |
| 1.6% |       4 | `update_sibling_maps` | `blib2to3/pytree.py`         |
| 1.6% |       4 | `prefix`              | `blib2to3/pytree.py`         |
| 1.6% |       4 | `mark`                | `black/brackets.py`          |
| 1.6% |       4 | `__new__`             | `blib2to3/pytree.py`         |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 4.3% |      11 | `(anonymous)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|     % | Samples | Location                         |
| ----: | ------: | -------------------------------- |
| 36.8% |       7 | `blib2to3/pgen2/tokenize.py:875` |
| 15.8% |       3 | `blib2to3/pgen2/tokenize.py:610` |
| 10.5% |       2 | `blib2to3/pgen2/tokenize.py:624` |
| 10.5% |       2 | `blib2to3/pgen2/tokenize.py:878` |
|  5.3% |       1 | `blib2to3/pgen2/tokenize.py:879` |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Location                      |
| ----: | ------: | ----------------------------- |
| 15.8% |       3 | `blib2to3/pgen2/parse.py:299` |
| 15.8% |       3 | `blib2to3/pgen2/parse.py:328` |
| 10.5% |       2 | `blib2to3/pgen2/parse.py:297` |
| 10.5% |       2 | `blib2to3/pgen2/parse.py:295` |
| 10.5% |       2 | `blib2to3/pgen2/parse.py:305` |

##### `__init__` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 46.7% |       7 | `blib2to3/pytree.py:266` |
| 13.3% |       2 | `blib2to3/pytree.py:276` |
| 13.3% |       2 | `blib2to3/pytree.py:267` |
|  6.7% |       1 | `blib2to3/pytree.py:424` |
|  6.7% |       1 | `blib2to3/pytree.py:270` |

##### `__str__` (`black/lines.py`)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 80.0% |      12 | `black/lines.py:501` |
|  6.7% |       1 | `black/lines.py:504` |
|  6.7% |       1 | `black/lines.py:500` |
|  6.7% |       1 | `black/lines.py:496` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      15 | `ast.py:50` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|     % | Samples | Location                       |
| ----: | ------: | ------------------------------ |
| 22.2% |       2 | `blib2to3/pgen2/driver.py:162` |
| 22.2% |       2 | `blib2to3/pgen2/driver.py:167` |
| 22.2% |       2 | `blib2to3/pgen2/driver.py:130` |
| 11.1% |       1 | `blib2to3/pgen2/driver.py:140` |
| 11.1% |       1 | `blib2to3/pgen2/driver.py:129` |

##### `generate_comments` (`black/comments.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 66.7% |       6 | `black/comments.py:72` |
| 33.3% |       3 | `black/comments.py:52` |

##### `_stringify_ast` (`black/parsing.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 28.6% |       2 | `black/parsing.py:240` |
| 14.3% |       1 | `black/parsing.py:214` |
| 14.3% |       1 | `black/parsing.py:197` |
| 14.3% |       1 | `black/parsing.py:187` |
| 14.3% |       1 | `black/parsing.py:174` |

##### `visit_default` (`black/linegen.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 85.7% |       6 | `black/linegen.py:158` |
| 14.3% |       1 | `black/linegen.py:156` |

##### `transform_line` (`black/linegen.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 42.9% |       3 | `black/linegen.py:714` |
| 28.6% |       2 | `black/linegen.py:679` |
| 14.3% |       1 | `black/linegen.py:625` |
| 14.3% |       1 | `black/linegen.py:614` |

##### `get_features_used` (`black/__init__.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 33.3% |       2 | `black/__init__.py:1367` |
| 16.7% |       1 | `black/__init__.py:1394` |
| 16.7% |       1 | `black/__init__.py:1424` |
| 16.7% |       1 | `black/__init__.py:1427` |
| 16.7% |       1 | `black/__init__.py:1386` |

##### `append` (`black/lines.py`)

|     % | Samples | Location            |
| ----: | ------: | ------------------- |
| 50.0% |       3 | `black/lines.py:89` |
| 16.7% |       1 | `black/lines.py:94` |
| 16.7% |       1 | `black/lines.py:76` |
| 16.7% |       1 | `black/lines.py:63` |

##### `convert` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 33.3% |       2 | `blib2to3/pytree.py:501` |
| 16.7% |       1 | `blib2to3/pytree.py:498` |
| 16.7% |       1 | `blib2to3/pytree.py:499` |
| 16.7% |       1 | `blib2to3/pytree.py:503` |
| 16.7% |       1 | `blib2to3/pytree.py:495` |

##### `whitespace` (`black/nodes.py`)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 40.0% |       2 | `black/nodes.py:409` |
| 20.0% |       1 | `black/nodes.py:226` |
| 20.0% |       1 | `black/nodes.py:287` |
| 20.0% |       1 | `black/nodes.py:223` |

##### `<genexpr>` (`black/lines.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       5 | `black/lines.py:456` |

##### `visit` (`black/nodes.py`)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 75.0% |       3 | `black/nodes.py:181` |
| 25.0% |       1 | `black/nodes.py:174` |

##### `update_sibling_maps` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 75.0% |       3 | `blib2to3/pytree.py:377` |
| 25.0% |       1 | `blib2to3/pytree.py:375` |

##### `prefix` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 50.0% |       2 | `blib2to3/pytree.py:480` |
| 25.0% |       1 | `blib2to3/pytree.py:482` |
| 25.0% |       1 | `blib2to3/pytree.py:327` |

##### `mark` (`black/brackets.py`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 50.0% |       2 | `black/brackets.py:112` |
| 25.0% |       1 | `black/brackets.py:99`  |
| 25.0% |       1 | `black/brackets.py:88`  |

##### `__new__` (`blib2to3/pytree.py`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       4 | `blib2to3/pytree.py:84` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|      % | Samples | Caller     | Location                   |
| -----: | ------: | ---------- | -------------------------- |
| 100.0% |      19 | `__next__` | `blib2to3/pgen2/driver.py` |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller     | Location                  |
| -----: | ------: | ---------- | ------------------------- |
| 100.0% |      19 | `addtoken` | `blib2to3/pgen2/parse.py` |

##### `__init__` (`blib2to3/pytree.py`)

|     % | Samples | Caller                | Location             |
| ----: | ------: | --------------------- | -------------------- |
| 80.0% |      12 | `convert`             | `blib2to3/pytree.py` |
| 20.0% |       3 | `wrap_in_parentheses` | `black/nodes.py`     |

##### `__str__` (`black/lines.py`)

|     % | Samples | Caller             | Location            |
| ----: | ------: | ------------------ | ------------------- |
| 80.0% |      12 | `_format_str_once` | `black/__init__.py` |
| 13.3% |       2 | `line_to_string`   | `black/lines.py`    |
|  6.7% |       1 | `run_transformer`  | `black/linegen.py`  |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |      15 | `_parse_single_version` | `black/parsing.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Caller         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |       9 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `generate_comments` (`black/comments.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |       9 | `visit_default` | `black/linegen.py` |

##### `_stringify_ast` (`black/parsing.py`)

|     % | Samples | Caller                           | Location            |
| ----: | ------: | -------------------------------- | ------------------- |
| 85.7% |       6 | `_stringify_ast_with_new_parent` | `black/parsing.py`  |
| 14.3% |       1 | `assert_equivalent`              | `black/__init__.py` |

##### `visit_default` (`black/linegen.py`)

|     % | Samples | Caller        | Location           |
| ----: | ------: | ------------- | ------------------ |
| 71.4% |       5 | `visit`       | `black/nodes.py`   |
| 28.6% |       2 | `visit_power` | `black/linegen.py` |

##### `transform_line` (`black/linegen.py`)

|     % | Samples | Caller             | Location            |
| ----: | ------: | ------------------ | ------------------- |
| 85.7% |       6 | `_format_str_once` | `black/__init__.py` |
| 14.3% |       1 | `run_transformer`  | `black/linegen.py`  |

##### `get_features_used` (`black/__init__.py`)

|      % | Samples | Caller                   | Location            |
| -----: | ------: | ------------------------ | ------------------- |
| 100.0% |       6 | `detect_target_versions` | `black/__init__.py` |

##### `append` (`black/lines.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |       6 | `visit_default` | `black/linegen.py` |

##### `convert` (`blib2to3/pytree.py`)

|     % | Samples | Caller  | Location                  |
| ----: | ------: | ------- | ------------------------- |
| 66.7% |       4 | `pop`   | `blib2to3/pgen2/parse.py` |
| 33.3% |       2 | `shift` | `blib2to3/pgen2/parse.py` |

##### `whitespace` (`black/nodes.py`)

|      % | Samples | Caller   | Location         |
| -----: | ------: | -------- | ---------------- |
| 100.0% |       5 | `append` | `black/lines.py` |

##### `<genexpr>` (`black/lines.py`)

|      % | Samples | Caller                 | Location         |
| -----: | ------: | ---------------------- | ---------------- |
| 100.0% |       5 | `is_complex_subscript` | `black/lines.py` |

##### `visit` (`black/nodes.py`)

|     % | Samples | Caller          | Location           |
| ----: | ------: | --------------- | ------------------ |
| 75.0% |       3 | `visit_default` | `black/nodes.py`   |
| 25.0% |       1 | `visit_funcdef` | `black/linegen.py` |

##### `update_sibling_maps` (`blib2to3/pytree.py`)

|      % | Samples | Caller         | Location             |
| -----: | ------: | -------------- | -------------------- |
| 100.0% |       4 | `prev_sibling` | `blib2to3/pytree.py` |

##### `prefix` (`blib2to3/pytree.py`)

|     % | Samples | Caller                       | Location             |
| ----: | ------: | ---------------------------- | -------------------- |
| 25.0% |       1 | `prefix`                     | `blib2to3/pytree.py` |
| 25.0% |       1 | `visit_default`              | `black/linegen.py`   |
| 25.0% |       1 | `normalize_trailing_prefix`  | `black/comments.py`  |
| 25.0% |       1 | `normalize_invisible_parens` | `black/linegen.py`   |

##### `mark` (`black/brackets.py`)

|      % | Samples | Caller   | Location         |
| -----: | ------: | -------- | ---------------- |
| 100.0% |       4 | `append` | `black/lines.py` |

##### `__new__` (`blib2to3/pytree.py`)

|      % | Samples | Caller    | Location             |
| -----: | ------: | --------- | -------------------- |
| 100.0% |       4 | `convert` | `blib2to3/pytree.py` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                          | Location                   |
| ----: | ------: | --------------------------------- | -------------------------- |
| 95.7% |     244 | `_run_module_as_main`             | `<frozen runpy>`           |
| 93.7% |     239 | `format_file_contents`            | `black/__init__.py`        |
| 93.7% |     239 | `format_file_in_place`            | `black/__init__.py`        |
| 93.7% |     239 | `reformat_one`                    | `black/__init__.py`        |
| 93.7% |     239 | `main`                            | `black/__init__.py`        |
| 93.7% |     239 | `new_func`                        | `click/decorators.py`      |
| 93.7% |     239 | `invoke`                          | `click/core.py`            |
| 93.7% |     239 | `main`                            | `click/core.py`            |
| 93.7% |     239 | `__call__`                        | `click/core.py`            |
| 93.7% |     239 | `patched_main`                    | `black/__init__.py`        |
| 93.7% |     239 | `<module>`                        | `black/__main__.py`        |
| 93.7% |     239 | `_run_code`                       | `<frozen runpy>`           |
| 83.5% |     213 | `_format_str_once`                | `black/__init__.py`        |
| 54.9% |     140 | `format_str`                      | `black/__init__.py`        |
| 38.8% |      99 | `check_stability_and_equivalence` | `black/__init__.py`        |
| 32.9% |      84 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |
| 32.9% |      84 | `parse_string`                    | `blib2to3/pgen2/driver.py` |
| 32.9% |      84 | `lib2to3_parse`                   | `black/parsing.py`         |
| 29.4% |      75 | `assert_stable`                   | `black/__init__.py`        |
| 28.6% |      73 | `visit_default`                   | `black/linegen.py`         |

#### Categories

##### Ours

|     % | Samples | Function                          | Location                   |
| ----: | ------: | --------------------------------- | -------------------------- |
| 93.7% |     239 | `format_file_contents`            | `black/__init__.py`        |
| 93.7% |     239 | `format_file_in_place`            | `black/__init__.py`        |
| 93.7% |     239 | `reformat_one`                    | `black/__init__.py`        |
| 93.7% |     239 | `main`                            | `black/__init__.py`        |
| 93.7% |     239 | `new_func`                        | `click/decorators.py`      |
| 93.7% |     239 | `invoke`                          | `click/core.py`            |
| 93.7% |     239 | `main`                            | `click/core.py`            |
| 93.7% |     239 | `__call__`                        | `click/core.py`            |
| 93.7% |     239 | `patched_main`                    | `black/__init__.py`        |
| 93.7% |     239 | `<module>`                        | `black/__main__.py`        |
| 83.5% |     213 | `_format_str_once`                | `black/__init__.py`        |
| 54.9% |     140 | `format_str`                      | `black/__init__.py`        |
| 38.8% |      99 | `check_stability_and_equivalence` | `black/__init__.py`        |
| 32.9% |      84 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |
| 32.9% |      84 | `parse_string`                    | `blib2to3/pgen2/driver.py` |
| 32.9% |      84 | `lib2to3_parse`                   | `black/parsing.py`         |
| 29.4% |      75 | `assert_stable`                   | `black/__init__.py`        |
| 28.6% |      73 | `visit_default`                   | `black/linegen.py`         |
| 28.6% |      73 | `visit`                           | `black/nodes.py`           |
| 28.6% |      73 | `visit_default`                   | `black/nodes.py`           |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 4.3% |      11 | `(anonymous)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_module_as_main` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 98.0% |     239 | `_run_code`           | `<frozen runpy>` |
|  2.0% |       5 | `_get_module_details` | `<frozen runpy>` |

##### `format_file_contents` (`black/__init__.py`)

|     % | Samples | Callee                            | Location            |
| ----: | ------: | --------------------------------- | ------------------- |
| 58.6% |     140 | `format_str`                      | `black/__init__.py` |
| 41.4% |      99 | `check_stability_and_equivalence` | `black/__init__.py` |

##### `format_file_in_place` (`black/__init__.py`)

|      % | Samples | Callee                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     239 | `format_file_contents` | `black/__init__.py` |

##### `reformat_one` (`black/__init__.py`)

|      % | Samples | Callee                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     239 | `format_file_in_place` | `black/__init__.py` |

##### `main` (`black/__init__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     239 | `reformat_one` | `black/__init__.py` |

##### `new_func` (`click/decorators.py`)

|      % | Samples | Callee | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |     239 | `main` | `black/__init__.py` |

##### `invoke` (`click/core.py`)

|      % | Samples | Callee     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     239 | `new_func` | `click/decorators.py` |
| 100.0% |     239 | `invoke`   | `click/core.py`       |

##### `main` (`click/core.py`)

|      % | Samples | Callee   | Location        |
| -----: | ------: | -------- | --------------- |
| 100.0% |     239 | `invoke` | `click/core.py` |

##### `__call__` (`click/core.py`)

|      % | Samples | Callee | Location        |
| -----: | ------: | ------ | --------------- |
| 100.0% |     239 | `main` | `click/core.py` |

##### `patched_main` (`black/__init__.py`)

|      % | Samples | Callee     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |     239 | `__call__` | `click/core.py` |

##### `<module>` (`black/__main__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     239 | `patched_main` | `black/__init__.py` |

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |     239 | `<module>` | `black/__main__.py` |

##### `_format_str_once` (`black/__init__.py`)

|     % | Samples | Callee                   | Location            |
| ----: | ------: | ------------------------ | ------------------- |
| 39.4% |      84 | `lib2to3_parse`          | `black/parsing.py`  |
| 34.3% |      73 | `visit`                  | `black/nodes.py`    |
|  9.4% |      20 | `transform_line`         | `black/linegen.py`  |
|  6.1% |      13 | `__str__`                | `black/lines.py`    |
|  3.8% |       8 | `detect_target_versions` | `black/__init__.py` |

##### `format_str` (`black/__init__.py`)

|     % | Samples | Callee             | Location            |
| ----: | ------: | ------------------ | ------------------- |
| 98.6% |     138 | `_format_str_once` | `black/__init__.py` |

##### `check_stability_and_equivalence` (`black/__init__.py`)

|     % | Samples | Callee              | Location            |
| ----: | ------: | ------------------- | ------------------- |
| 75.8% |      75 | `assert_stable`     | `black/__init__.py` |
| 24.2% |      24 | `assert_equivalent` | `black/__init__.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|     % | Samples | Callee     | Location                   |
| ----: | ------: | ---------- | -------------------------- |
| 60.7% |      51 | `addtoken` | `blib2to3/pgen2/parse.py`  |
| 27.4% |      23 | `__next__` | `blib2to3/pgen2/driver.py` |
|  1.2% |       1 | `debug`    | `logging/__init__.py`      |

##### `parse_string` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Callee         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      84 | `parse_tokens` | `blib2to3/pgen2/driver.py` |

##### `lib2to3_parse` (`black/parsing.py`)

|      % | Samples | Callee         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      84 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `assert_stable` (`black/__init__.py`)

|      % | Samples | Callee             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |      75 | `_format_str_once` | `black/__init__.py` |

##### `visit_default` (`black/linegen.py`)

|      % | Samples | Callee              | Location             |
| -----: | ------: | ------------------- | -------------------- |
| 100.0% |      73 | `visit_default`     | `black/nodes.py`     |
|  34.2% |      25 | `append`            | `black/lines.py`     |
|  16.4% |      12 | `generate_comments` | `black/comments.py`  |
|   1.4% |       1 | `prefix`            | `blib2to3/pytree.py` |

##### `visit` (`black/nodes.py`)

|      % | Samples | Callee              | Location           |
| -----: | ------: | ------------------- | ------------------ |
| 100.0% |      73 | `visit_default`     | `black/linegen.py` |
|  98.6% |      72 | `visit_funcdef`     | `black/linegen.py` |
|  97.3% |      71 | `visit_stmt`        | `black/linegen.py` |
|  97.3% |      71 | `visit_suite`       | `black/linegen.py` |
|  64.4% |      47 | `visit_simple_stmt` | `black/linegen.py` |

##### `visit_default` (`black/nodes.py`)

|      % | Samples | Callee  | Location         |
| -----: | ------: | ------- | ---------------- |
| 100.0% |      73 | `visit` | `black/nodes.py` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `_run_module_as_main` (`<frozen runpy>`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.9% |      15 | `parse` (`ast.py`) ← `_parse_single_version` (`black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 4.3% |      11 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3.9% |      10 | `__init__` (`blib2to3/pytree.py`) ← `convert` ← `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3.9% |      10 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.5% |       9 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 3.5% |       9 | `__str__` (`black/lines.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3.1% |       8 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.7% |       7 | `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.4% |       6 | `get_features_used` (`black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.0% |       5 | `transform_line` (`black/linegen.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2.0% |       5 | `<genexpr>` (`black/lines.py`) ← `is_complex_subscript` ← `append` ← `visit_default` (`black/linegen.py`) ← `visit_NUMBER` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`) |
| 1.6% |       4 | `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.2% |       3 | `__str__` (`black/lines.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.2% |       3 | `push` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.2% |       3 | `dump` (`blib2to3/pgen2/grammar.py`) ← `load_grammar` (`blib2to3/pgen2/driver.py`) ← `load_packaged_grammar` ← `initialize` (`blib2to3/pygram.py`) ← `<module>` (`black/nodes.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`black/comments.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`black/__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.2% |       3 | `visit_power` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.2% |       3 | `_maybe_empty_lines` (`black/lines.py`) ← `maybe_empty_lines` ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.8% |       2 | `is_docstring` (`black/lines.py`) ← `_maybe_empty_lines` ← `maybe_empty_lines` ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.8% |       2 | `_stringify_ast` (`black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.8% |       2 | `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

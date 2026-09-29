# Sampling profile

Collected 208 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 93.8% |     195 |
| Unknown          |  5.8% |      12 |
| Standard library |  0.5% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                         | Location                     |
| ---: | ------: | -------------------------------- | ---------------------------- |
| 9.1% |      19 | `_addtoken`                      | `blib2to3/pgen2/parse.py`    |
| 6.7% |      14 | `parse`                          | `ast.py`                     |
| 6.3% |      13 | `push`                           | `blib2to3/pgen2/parse.py`    |
| 5.8% |      12 | `(anonymous)`                    | `<unknown>`                  |
| 4.8% |      10 | `generate_comments`              | `black/comments.py`          |
| 4.3% |       9 | `pop`                            | `blib2to3/pgen2/parse.py`    |
| 4.3% |       9 | `generate_tokens`                | `blib2to3/pgen2/tokenize.py` |
| 3.8% |       8 | `visit`                          | `black/nodes.py`             |
| 3.4% |       7 | `mark`                           | `black/brackets.py`          |
| 2.9% |       6 | `visit_default`                  | `black/linegen.py`           |
| 2.9% |       6 | `_stringify_ast`                 | `black/parsing.py`           |
| 2.9% |       6 | `__new__`                        | `blib2to3/pytree.py`         |
| 2.4% |       5 | `append`                         | `black/lines.py`             |
| 2.4% |       5 | `_stringify_ast_with_new_parent` | `black/parsing.py`           |
| 2.4% |       5 | `__str__`                        | `black/lines.py`             |
| 2.4% |       5 | `convert_one_fmt_off_pair`       | `black/comments.py`          |
| 1.9% |       4 | `__init__`                       | `blib2to3/pytree.py`         |
| 1.9% |       4 | `parse_tokens`                   | `blib2to3/pgen2/driver.py`   |
| 1.4% |       3 | `get_features_used`              | `black/__init__.py`          |
| 1.4% |       3 | `hug_power_op`                   | `black/trans.py`             |

#### Categories

##### Ours

|    % | Samples | Function                         | Location                     |
| ---: | ------: | -------------------------------- | ---------------------------- |
| 9.1% |      19 | `_addtoken`                      | `blib2to3/pgen2/parse.py`    |
| 6.7% |      14 | `parse`                          | `ast.py`                     |
| 6.3% |      13 | `push`                           | `blib2to3/pgen2/parse.py`    |
| 4.8% |      10 | `generate_comments`              | `black/comments.py`          |
| 4.3% |       9 | `pop`                            | `blib2to3/pgen2/parse.py`    |
| 4.3% |       9 | `generate_tokens`                | `blib2to3/pgen2/tokenize.py` |
| 3.8% |       8 | `visit`                          | `black/nodes.py`             |
| 3.4% |       7 | `mark`                           | `black/brackets.py`          |
| 2.9% |       6 | `visit_default`                  | `black/linegen.py`           |
| 2.9% |       6 | `_stringify_ast`                 | `black/parsing.py`           |
| 2.9% |       6 | `__new__`                        | `blib2to3/pytree.py`         |
| 2.4% |       5 | `append`                         | `black/lines.py`             |
| 2.4% |       5 | `_stringify_ast_with_new_parent` | `black/parsing.py`           |
| 2.4% |       5 | `__str__`                        | `black/lines.py`             |
| 2.4% |       5 | `convert_one_fmt_off_pair`       | `black/comments.py`          |
| 1.9% |       4 | `__init__`                       | `blib2to3/pytree.py`         |
| 1.9% |       4 | `parse_tokens`                   | `blib2to3/pgen2/driver.py`   |
| 1.4% |       3 | `get_features_used`              | `black/__init__.py`          |
| 1.4% |       3 | `hug_power_op`                   | `black/trans.py`             |
| 1.4% |       3 | `update_sibling_maps`            | `blib2to3/pytree.py`         |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 5.8% |      12 | `(anonymous)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Location                      |
| ----: | ------: | ----------------------------- |
| 31.6% |       6 | `blib2to3/pgen2/parse.py:285` |
| 15.8% |       3 | `blib2to3/pgen2/parse.py:316` |
| 10.5% |       2 | `blib2to3/pgen2/parse.py:289` |
| 10.5% |       2 | `blib2to3/pgen2/parse.py:286` |
| 10.5% |       2 | `blib2to3/pgen2/parse.py:314` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      14 | `ast.py:50` |

##### `push` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Location                      |
| ----: | ------: | ----------------------------- |
| 69.2% |       9 | `blib2to3/pgen2/parse.py:382` |
| 15.4% |       2 | `blib2to3/pgen2/parse.py:383` |
|  7.7% |       1 | `blib2to3/pgen2/parse.py:381` |
|  7.7% |       1 | `blib2to3/pgen2/parse.py:384` |

##### `generate_comments` (`black/comments.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 90.0% |       9 | `black/comments.py:72` |
| 10.0% |       1 | `black/comments.py:76` |

##### `pop` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Location                      |
| ----: | ------: | ----------------------------- |
| 44.4% |       4 | `blib2to3/pgen2/parse.py:392` |
| 33.3% |       3 | `blib2to3/pgen2/parse.py:391` |
| 11.1% |       1 | `blib2to3/pgen2/parse.py:396` |
| 11.1% |       1 | `blib2to3/pgen2/parse.py:393` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|     % | Samples | Location                         |
| ----: | ------: | -------------------------------- |
| 44.4% |       4 | `blib2to3/pgen2/tokenize.py:864` |
| 11.1% |       1 | `blib2to3/pgen2/tokenize.py:961` |
| 11.1% |       1 | `blib2to3/pgen2/tokenize.py:867` |
| 11.1% |       1 | `blib2to3/pgen2/tokenize.py:874` |
| 11.1% |       1 | `blib2to3/pgen2/tokenize.py:962` |

##### `visit` (`black/nodes.py`)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 50.0% |       4 | `black/nodes.py:152` |
| 25.0% |       2 | `black/nodes.py:172` |
| 12.5% |       1 | `black/nodes.py:170` |
| 12.5% |       1 | `black/nodes.py:174` |

##### `mark` (`black/brackets.py`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 71.4% |       5 | `black/brackets.py:112` |
| 28.6% |       2 | `black/brackets.py:124` |

##### `visit_default` (`black/linegen.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 50.0% |       3 | `black/linegen.py:158` |
| 33.3% |       2 | `black/linegen.py:157` |
| 16.7% |       1 | `black/linegen.py:138` |

##### `_stringify_ast` (`black/parsing.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 33.3% |       2 | `black/parsing.py:195` |
| 33.3% |       2 | `black/parsing.py:201` |
| 16.7% |       1 | `black/parsing.py:225` |
| 16.7% |       1 | `black/parsing.py:248` |

##### `__new__` (`blib2to3/pytree.py`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       6 | `blib2to3/pytree.py:73` |

##### `append` (`black/lines.py`)

|     % | Samples | Location            |
| ----: | ------: | ------------------- |
| 40.0% |       2 | `black/lines.py:78` |
| 40.0% |       2 | `black/lines.py:80` |
| 20.0% |       1 | `black/lines.py:68` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       5 | `black/parsing.py:178` |

##### `__str__` (`black/lines.py`)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 80.0% |       4 | `black/lines.py:489` |
| 20.0% |       1 | `black/lines.py:490` |

##### `convert_one_fmt_off_pair` (`black/comments.py`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       5 | `black/comments.py:186` |

##### `__init__` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 50.0% |       2 | `blib2to3/pytree.py:258` |
| 25.0% |       1 | `blib2to3/pytree.py:255` |
| 25.0% |       1 | `blib2to3/pytree.py:259` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|     % | Samples | Location                       |
| ----: | ------: | ------------------------------ |
| 25.0% |       1 | `blib2to3/pgen2/driver.py:174` |
| 25.0% |       1 | `blib2to3/pgen2/driver.py:167` |
| 25.0% |       1 | `blib2to3/pgen2/driver.py:152` |
| 25.0% |       1 | `blib2to3/pgen2/driver.py:131` |

##### `get_features_used` (`black/__init__.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 33.3% |       1 | `black/__init__.py:1409` |
| 33.3% |       1 | `black/__init__.py:1324` |
| 33.3% |       1 | `black/__init__.py:1415` |

##### `hug_power_op` (`black/trans.py`)

|     % | Samples | Location            |
| ----: | ------: | ------------------- |
| 66.7% |       2 | `black/trans.py:88` |
| 33.3% |       1 | `black/trans.py:91` |

##### `update_sibling_maps` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 33.3% |       1 | `blib2to3/pytree.py:365` |
| 33.3% |       1 | `blib2to3/pytree.py:367` |
| 33.3% |       1 | `blib2to3/pytree.py:364` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller     | Location                  |
| -----: | ------: | ---------- | ------------------------- |
| 100.0% |      19 | `addtoken` | `blib2to3/pgen2/parse.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |      14 | `_parse_single_version` | `black/parsing.py` |

##### `push` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |      13 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `generate_comments` (`black/comments.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |      10 | `visit_default` | `black/linegen.py` |

##### `pop` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |       9 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|      % | Samples | Caller     | Location                   |
| -----: | ------: | ---------- | -------------------------- |
| 100.0% |       9 | `__next__` | `blib2to3/pgen2/driver.py` |

##### `visit` (`black/nodes.py`)

|     % | Samples | Caller          | Location           |
| ----: | ------: | --------------- | ------------------ |
| 75.0% |       6 | `visit_default` | `black/nodes.py`   |
| 25.0% |       2 | `visit_stmt`    | `black/linegen.py` |

##### `mark` (`black/brackets.py`)

|      % | Samples | Caller   | Location         |
| -----: | ------: | -------- | ---------------- |
| 100.0% |       7 | `append` | `black/lines.py` |

##### `visit_default` (`black/linegen.py`)

|      % | Samples | Caller  | Location         |
| -----: | ------: | ------- | ---------------- |
| 100.0% |       6 | `visit` | `black/nodes.py` |

##### `_stringify_ast` (`black/parsing.py`)

|      % | Samples | Caller                           | Location           |
| -----: | ------: | -------------------------------- | ------------------ |
| 100.0% |       6 | `_stringify_ast_with_new_parent` | `black/parsing.py` |

##### `__new__` (`blib2to3/pytree.py`)

|      % | Samples | Caller    | Location             |
| -----: | ------: | --------- | -------------------- |
| 100.0% |       6 | `convert` | `blib2to3/pytree.py` |

##### `append` (`black/lines.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |       5 | `visit_default` | `black/linegen.py` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py`)

|      % | Samples | Caller           | Location           |
| -----: | ------: | ---------------- | ------------------ |
| 100.0% |       5 | `_stringify_ast` | `black/parsing.py` |

##### `__str__` (`black/lines.py`)

|     % | Samples | Caller             | Location            |
| ----: | ------: | ------------------ | ------------------- |
| 80.0% |       4 | `line_to_string`   | `black/lines.py`    |
| 20.0% |       1 | `_format_str_once` | `black/__init__.py` |

##### `convert_one_fmt_off_pair` (`black/comments.py`)

|      % | Samples | Caller              | Location            |
| -----: | ------: | ------------------- | ------------------- |
| 100.0% |       5 | `normalize_fmt_off` | `black/comments.py` |

##### `__init__` (`blib2to3/pytree.py`)

|     % | Samples | Caller                | Location             |
| ----: | ------: | --------------------- | -------------------- |
| 50.0% |       2 | `convert`             | `blib2to3/pytree.py` |
| 50.0% |       2 | `wrap_in_parentheses` | `black/nodes.py`     |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Caller         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |       4 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `get_features_used` (`black/__init__.py`)

|      % | Samples | Caller                   | Location            |
| -----: | ------: | ------------------------ | ------------------- |
| 100.0% |       3 | `detect_target_versions` | `black/__init__.py` |

##### `hug_power_op` (`black/trans.py`)

|     % | Samples | Caller                              | Location           |
| ----: | ------: | ----------------------------------- | ------------------ |
| 66.7% |       2 | `run_transformer`                   | `black/linegen.py` |
| 33.3% |       1 | `_hugging_power_ops_line_to_string` | `black/linegen.py` |

##### `update_sibling_maps` (`blib2to3/pytree.py`)

|      % | Samples | Caller         | Location             |
| -----: | ------: | -------------- | -------------------- |
| 100.0% |       3 | `prev_sibling` | `blib2to3/pytree.py` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                          | Location                   |
| ----: | ------: | --------------------------------- | -------------------------- |
| 94.2% |     196 | `_run_module_as_main`             | `<frozen runpy>`           |
| 92.3% |     192 | `format_file_contents`            | `black/__init__.py`        |
| 92.3% |     192 | `format_file_in_place`            | `black/__init__.py`        |
| 92.3% |     192 | `reformat_one`                    | `black/__init__.py`        |
| 92.3% |     192 | `main`                            | `black/__init__.py`        |
| 92.3% |     192 | `new_func`                        | `click/decorators.py`      |
| 92.3% |     192 | `invoke`                          | `click/core.py`            |
| 92.3% |     192 | `main`                            | `click/core.py`            |
| 92.3% |     192 | `__call__`                        | `click/core.py`            |
| 92.3% |     192 | `patched_main`                    | `black/__init__.py`        |
| 92.3% |     192 | `<module>`                        | `black/__main__.py`        |
| 92.3% |     192 | `_run_code`                       | `<frozen runpy>`           |
| 79.8% |     166 | `_format_str_once`                | `black/__init__.py`        |
| 55.3% |     115 | `format_str`                      | `black/__init__.py`        |
| 37.0% |      77 | `check_stability_and_equivalence` | `black/__init__.py`        |
| 33.7% |      70 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |
| 33.7% |      70 | `parse_string`                    | `blib2to3/pgen2/driver.py` |
| 33.7% |      70 | `lib2to3_parse`                   | `black/parsing.py`         |
| 31.3% |      65 | `visit_default`                   | `black/linegen.py`         |
| 31.3% |      65 | `visit`                           | `black/nodes.py`           |

#### Categories

##### Ours

|     % | Samples | Function                          | Location                   |
| ----: | ------: | --------------------------------- | -------------------------- |
| 92.3% |     192 | `format_file_contents`            | `black/__init__.py`        |
| 92.3% |     192 | `format_file_in_place`            | `black/__init__.py`        |
| 92.3% |     192 | `reformat_one`                    | `black/__init__.py`        |
| 92.3% |     192 | `main`                            | `black/__init__.py`        |
| 92.3% |     192 | `new_func`                        | `click/decorators.py`      |
| 92.3% |     192 | `invoke`                          | `click/core.py`            |
| 92.3% |     192 | `main`                            | `click/core.py`            |
| 92.3% |     192 | `__call__`                        | `click/core.py`            |
| 92.3% |     192 | `patched_main`                    | `black/__init__.py`        |
| 92.3% |     192 | `<module>`                        | `black/__main__.py`        |
| 79.8% |     166 | `_format_str_once`                | `black/__init__.py`        |
| 55.3% |     115 | `format_str`                      | `black/__init__.py`        |
| 37.0% |      77 | `check_stability_and_equivalence` | `black/__init__.py`        |
| 33.7% |      70 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |
| 33.7% |      70 | `parse_string`                    | `blib2to3/pgen2/driver.py` |
| 33.7% |      70 | `lib2to3_parse`                   | `black/parsing.py`         |
| 31.3% |      65 | `visit_default`                   | `black/linegen.py`         |
| 31.3% |      65 | `visit`                           | `black/nodes.py`           |
| 31.3% |      65 | `visit_stmt`                      | `black/linegen.py`         |
| 31.3% |      65 | `visit_default`                   | `black/nodes.py`           |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 5.8% |      12 | `(anonymous)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_module_as_main` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 98.0% |     192 | `_run_code`           | `<frozen runpy>` |
|  2.0% |       4 | `_get_module_details` | `<frozen runpy>` |

##### `format_file_contents` (`black/__init__.py`)

|     % | Samples | Callee                            | Location            |
| ----: | ------: | --------------------------------- | ------------------- |
| 59.9% |     115 | `format_str`                      | `black/__init__.py` |
| 40.1% |      77 | `check_stability_and_equivalence` | `black/__init__.py` |

##### `format_file_in_place` (`black/__init__.py`)

|      % | Samples | Callee                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     192 | `format_file_contents` | `black/__init__.py` |

##### `reformat_one` (`black/__init__.py`)

|      % | Samples | Callee                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     192 | `format_file_in_place` | `black/__init__.py` |

##### `main` (`black/__init__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     192 | `reformat_one` | `black/__init__.py` |

##### `new_func` (`click/decorators.py`)

|      % | Samples | Callee | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |     192 | `main` | `black/__init__.py` |

##### `invoke` (`click/core.py`)

|      % | Samples | Callee     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     192 | `new_func` | `click/decorators.py` |
| 100.0% |     192 | `invoke`   | `click/core.py`       |

##### `main` (`click/core.py`)

|      % | Samples | Callee   | Location        |
| -----: | ------: | -------- | --------------- |
| 100.0% |     192 | `invoke` | `click/core.py` |

##### `__call__` (`click/core.py`)

|      % | Samples | Callee | Location        |
| -----: | ------: | ------ | --------------- |
| 100.0% |     192 | `main` | `click/core.py` |

##### `patched_main` (`black/__init__.py`)

|      % | Samples | Callee     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |     192 | `__call__` | `click/core.py` |

##### `<module>` (`black/__main__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     192 | `patched_main` | `black/__init__.py` |

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |     192 | `<module>` | `black/__main__.py` |

##### `_format_str_once` (`black/__init__.py`)

|     % | Samples | Callee                   | Location            |
| ----: | ------: | ------------------------ | ------------------- |
| 42.2% |      70 | `lib2to3_parse`          | `black/parsing.py`  |
| 39.2% |      65 | `visit`                  | `black/nodes.py`    |
|  8.4% |      14 | `transform_line`         | `black/linegen.py`  |
|  3.6% |       6 | `normalize_fmt_off`      | `black/comments.py` |
|  3.0% |       5 | `detect_target_versions` | `black/__init__.py` |

##### `format_str` (`black/__init__.py`)

|      % | Samples | Callee             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |     115 | `_format_str_once` | `black/__init__.py` |

##### `check_stability_and_equivalence` (`black/__init__.py`)

|     % | Samples | Callee              | Location            |
| ----: | ------: | ------------------- | ------------------- |
| 66.2% |      51 | `assert_stable`     | `black/__init__.py` |
| 33.8% |      26 | `assert_equivalent` | `black/__init__.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|     % | Samples | Callee     | Location                   |
| ----: | ------: | ---------- | -------------------------- |
| 78.6% |      55 | `addtoken` | `blib2to3/pgen2/parse.py`  |
| 14.3% |      10 | `__next__` | `blib2to3/pgen2/driver.py` |
|  1.4% |       1 | `debug`    | `logging/__init__.py`      |

##### `parse_string` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Callee         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      70 | `parse_tokens` | `blib2to3/pgen2/driver.py` |

##### `lib2to3_parse` (`black/parsing.py`)

|      % | Samples | Callee         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      70 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `visit_default` (`black/linegen.py`)

|      % | Samples | Callee              | Location             |
| -----: | ------: | ------------------- | -------------------- |
| 100.0% |      65 | `visit_default`     | `black/nodes.py`     |
|  29.2% |      19 | `append`            | `black/lines.py`     |
|  18.5% |      12 | `generate_comments` | `black/comments.py`  |
|   3.1% |       2 | `prefix`            | `blib2to3/pytree.py` |

##### `visit` (`black/nodes.py`)

|      % | Samples | Callee              | Location           |
| -----: | ------: | ------------------- | ------------------ |
| 100.0% |      65 | `visit_default`     | `black/linegen.py` |
| 100.0% |      65 | `visit_stmt`        | `black/linegen.py` |
|  96.9% |      63 | `visit_suite`       | `black/linegen.py` |
|  92.3% |      60 | `visit_funcdef`     | `black/linegen.py` |
|  72.3% |      47 | `visit_simple_stmt` | `black/linegen.py` |

##### `visit_stmt` (`black/linegen.py`)

|      % | Samples | Callee                       | Location           |
| -----: | ------: | ---------------------------- | ------------------ |
| 100.0% |      65 | `visit`                      | `black/nodes.py`   |
|  10.8% |       7 | `normalize_invisible_parens` | `black/linegen.py` |
|   1.5% |       1 | `is_name_token`              | `black/nodes.py`   |

##### `visit_default` (`black/nodes.py`)

|      % | Samples | Callee  | Location         |
| -----: | ------: | ------- | ---------------- |
| 100.0% |      65 | `visit` | `black/nodes.py` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.7% |      14 | `parse` (`ast.py`) ← `_parse_single_version` (`black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 6.3% |      13 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 6.3% |      13 | `push` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3.8% |       8 | `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 3.4% |       7 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.9% |       6 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.9% |       4 | `generate_comments` (`black/comments.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.9% |       4 | `__str__` (`black/lines.py`) ← `line_to_string` ← `transform_line` (`black/linegen.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.9% |       4 | `generate_comments` (`black/comments.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                        |
| 1.9% |       4 | `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.4% |       3 | `get_features_used` (`black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.4% |       3 | `_stringify_ast` (`black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.4% |       3 | `convert_one_fmt_off_pair` (`black/comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.4% |       3 | `__new__` (`blib2to3/pytree.py`) ← `convert` ← `shift` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.4% |       3 | `__new__` (`blib2to3/pytree.py`) ← `convert` ← `shift` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.0% |       2 | `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.0% |       2 | `sub_twice` (`black/strings.py`) ← `normalize_string_quotes` ← `visit_STRING` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.0% |       2 | `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.0% |       2 | `hug_power_op` (`black/trans.py`) ← `run_transformer` (`black/linegen.py`) ← `transform_line` ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.0% |       2 | `prefix` (`blib2to3/pytree.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` |

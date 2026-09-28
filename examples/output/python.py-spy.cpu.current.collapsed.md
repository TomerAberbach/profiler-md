# Sampling profile

Collected 214 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 93.9% |     201 |
| Unknown          |  5.6% |      12 |
| Standard library |  0.5% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                     | Location                     |
| ---: | ------: | ---------------------------- | ---------------------------- |
| 7.5% |      16 | `__init__`                   | `blib2to3/pytree.py`         |
| 6.5% |      14 | `generate_tokens`            | `blib2to3/pgen2/tokenize.py` |
| 6.5% |      14 | `_stringify_ast`             | `black/parsing.py`           |
| 6.1% |      13 | `parse`                      | `ast.py`                     |
| 5.6% |      12 | `(anonymous)`                | `<unknown>`                  |
| 5.1% |      11 | `_addtoken`                  | `blib2to3/pgen2/parse.py`    |
| 4.7% |      10 | `visit`                      | `black/nodes.py`             |
| 3.7% |       8 | `get_features_used`          | `black/__init__.py`          |
| 3.7% |       8 | `<genexpr>`                  | `black/lines.py`             |
| 3.3% |       7 | `visit_default`              | `black/linegen.py`           |
| 3.3% |       7 | `__str__`                    | `black/lines.py`             |
| 1.9% |       4 | `maybe_empty_lines`          | `black/lines.py`             |
| 1.9% |       4 | `mark`                       | `black/brackets.py`          |
| 1.9% |       4 | `__new__`                    | `blib2to3/pytree.py`         |
| 1.4% |       3 | `visit_default`              | `black/nodes.py`             |
| 1.4% |       3 | `convert`                    | `blib2to3/pytree.py`         |
| 1.4% |       3 | `generate_comments`          | `black/comments.py`          |
| 1.4% |       3 | `pop`                        | `blib2to3/pgen2/parse.py`    |
| 1.4% |       3 | `transform_line`             | `black/linegen.py`           |
| 1.4% |       3 | `normalize_invisible_parens` | `black/linegen.py`           |

#### Categories

##### Ours

|    % | Samples | Function                     | Location                     |
| ---: | ------: | ---------------------------- | ---------------------------- |
| 7.5% |      16 | `__init__`                   | `blib2to3/pytree.py`         |
| 6.5% |      14 | `generate_tokens`            | `blib2to3/pgen2/tokenize.py` |
| 6.5% |      14 | `_stringify_ast`             | `black/parsing.py`           |
| 6.1% |      13 | `parse`                      | `ast.py`                     |
| 5.1% |      11 | `_addtoken`                  | `blib2to3/pgen2/parse.py`    |
| 4.7% |      10 | `visit`                      | `black/nodes.py`             |
| 3.7% |       8 | `get_features_used`          | `black/__init__.py`          |
| 3.7% |       8 | `<genexpr>`                  | `black/lines.py`             |
| 3.3% |       7 | `visit_default`              | `black/linegen.py`           |
| 3.3% |       7 | `__str__`                    | `black/lines.py`             |
| 1.9% |       4 | `maybe_empty_lines`          | `black/lines.py`             |
| 1.9% |       4 | `mark`                       | `black/brackets.py`          |
| 1.9% |       4 | `__new__`                    | `blib2to3/pytree.py`         |
| 1.4% |       3 | `visit_default`              | `black/nodes.py`             |
| 1.4% |       3 | `convert`                    | `blib2to3/pytree.py`         |
| 1.4% |       3 | `generate_comments`          | `black/comments.py`          |
| 1.4% |       3 | `pop`                        | `blib2to3/pgen2/parse.py`    |
| 1.4% |       3 | `transform_line`             | `black/linegen.py`           |
| 1.4% |       3 | `normalize_invisible_parens` | `black/linegen.py`           |
| 1.4% |       3 | `update_sibling_maps`        | `blib2to3/pytree.py`         |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 5.6% |      12 | `(anonymous)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `__init__` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 68.8% |      11 | `blib2to3/pytree.py:255` |
| 12.5% |       2 | `blib2to3/pytree.py:265` |
|  6.3% |       1 | `blib2to3/pytree.py:256` |
|  6.3% |       1 | `blib2to3/pytree.py:413` |
|  6.3% |       1 | `blib2to3/pytree.py:257` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|     % | Samples | Location                          |
| ----: | ------: | --------------------------------- |
| 35.7% |       5 | `blib2to3/pgen2/tokenize.py:864`  |
| 14.3% |       2 | `blib2to3/pgen2/tokenize.py:613`  |
| 14.3% |       2 | `blib2to3/pgen2/tokenize.py:707`  |
|  7.1% |       1 | `blib2to3/pgen2/tokenize.py:1077` |
|  7.1% |       1 | `blib2to3/pgen2/tokenize.py:874`  |

##### `_stringify_ast` (`black/parsing.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 35.7% |       5 | `black/parsing.py:222` |
| 21.4% |       3 | `black/parsing.py:252` |
| 14.3% |       2 | `black/parsing.py:205` |
|  7.1% |       1 | `black/parsing.py:195` |
|  7.1% |       1 | `black/parsing.py:212` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      13 | `ast.py:50` |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Location                      |
| ----: | ------: | ----------------------------- |
| 27.3% |       3 | `blib2to3/pgen2/parse.py:285` |
| 18.2% |       2 | `blib2to3/pgen2/parse.py:287` |
| 18.2% |       2 | `blib2to3/pgen2/parse.py:293` |
|  9.1% |       1 | `blib2to3/pgen2/parse.py:316` |
|  9.1% |       1 | `blib2to3/pgen2/parse.py:302` |

##### `visit` (`black/nodes.py`)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 50.0% |       5 | `black/nodes.py:170` |
| 30.0% |       3 | `black/nodes.py:152` |
| 10.0% |       1 | `black/nodes.py:163` |
| 10.0% |       1 | `black/nodes.py:172` |

##### `get_features_used` (`black/__init__.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 37.5% |       3 | `black/__init__.py:1346` |
| 25.0% |       2 | `black/__init__.py:1403` |
| 12.5% |       1 | `black/__init__.py:1419` |
| 12.5% |       1 | `black/__init__.py:1318` |
| 12.5% |       1 | `black/__init__.py:1373` |

##### `<genexpr>` (`black/lines.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       8 | `black/lines.py:445` |

##### `visit_default` (`black/linegen.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 85.7% |       6 | `black/linegen.py:158` |
| 14.3% |       1 | `black/linegen.py:138` |

##### `__str__` (`black/lines.py`)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 28.6% |       2 | `black/lines.py:487` |
| 28.6% |       2 | `black/lines.py:490` |
| 14.3% |       1 | `black/lines.py:489` |
| 14.3% |       1 | `black/lines.py:485` |
| 14.3% |       1 | `black/lines.py:484` |

##### `maybe_empty_lines` (`black/lines.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       4 | `black/lines.py:573` |

##### `mark` (`black/brackets.py`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       4 | `black/brackets.py:112` |

##### `__new__` (`blib2to3/pytree.py`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       4 | `blib2to3/pytree.py:73` |

##### `visit_default` (`black/nodes.py`)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 33.3% |       1 | `black/nodes.py:178` |
| 33.3% |       1 | `black/nodes.py:180` |
| 33.3% |       1 | `black/nodes.py:176` |

##### `convert` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 33.3% |       1 | `blib2to3/pytree.py:492` |
| 33.3% |       1 | `blib2to3/pytree.py:484` |
| 33.3% |       1 | `blib2to3/pytree.py:490` |

##### `generate_comments` (`black/comments.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 33.3% |       1 | `black/comments.py:72` |
| 33.3% |       1 | `black/comments.py:52` |
| 33.3% |       1 | `black/comments.py:75` |

##### `pop` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Location                      |
| ----: | ------: | ----------------------------- |
| 66.7% |       2 | `blib2to3/pgen2/parse.py:392` |
| 33.3% |       1 | `blib2to3/pgen2/parse.py:396` |

##### `transform_line` (`black/linegen.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 66.7% |       2 | `black/linegen.py:714` |
| 33.3% |       1 | `black/linegen.py:610` |

##### `normalize_invisible_parens` (`black/linegen.py`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 33.3% |       1 | `black/linegen.py:1422` |
| 33.3% |       1 | `black/linegen.py:1355` |
| 33.3% |       1 | `black/linegen.py:1450` |

##### `update_sibling_maps` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 66.7% |       2 | `blib2to3/pytree.py:366` |
| 33.3% |       1 | `blib2to3/pytree.py:362` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__init__` (`blib2to3/pytree.py`)

|      % | Samples | Caller    | Location             |
| -----: | ------: | --------- | -------------------- |
| 100.0% |      16 | `convert` | `blib2to3/pytree.py` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|      % | Samples | Caller     | Location                   |
| -----: | ------: | ---------- | -------------------------- |
| 100.0% |      14 | `__next__` | `blib2to3/pgen2/driver.py` |

##### `_stringify_ast` (`black/parsing.py`)

|     % | Samples | Caller                           | Location            |
| ----: | ------: | -------------------------------- | ------------------- |
| 92.9% |      13 | `_stringify_ast_with_new_parent` | `black/parsing.py`  |
|  7.1% |       1 | `assert_equivalent`              | `black/__init__.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |      13 | `_parse_single_version` | `black/parsing.py` |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller     | Location                  |
| -----: | ------: | ---------- | ------------------------- |
| 100.0% |      11 | `addtoken` | `blib2to3/pgen2/parse.py` |

##### `visit` (`black/nodes.py`)

|     % | Samples | Caller          | Location           |
| ----: | ------: | --------------- | ------------------ |
| 90.0% |       9 | `visit_default` | `black/nodes.py`   |
| 10.0% |       1 | `visit_stmt`    | `black/linegen.py` |

##### `get_features_used` (`black/__init__.py`)

|      % | Samples | Caller                   | Location            |
| -----: | ------: | ------------------------ | ------------------- |
| 100.0% |       8 | `detect_target_versions` | `black/__init__.py` |

##### `<genexpr>` (`black/lines.py`)

|      % | Samples | Caller                 | Location         |
| -----: | ------: | ---------------------- | ---------------- |
| 100.0% |       8 | `is_complex_subscript` | `black/lines.py` |

##### `visit_default` (`black/linegen.py`)

|      % | Samples | Caller  | Location         |
| -----: | ------: | ------- | ---------------- |
| 100.0% |       7 | `visit` | `black/nodes.py` |

##### `__str__` (`black/lines.py`)

|     % | Samples | Caller             | Location            |
| ----: | ------: | ------------------ | ------------------- |
| 57.1% |       4 | `_format_str_once` | `black/__init__.py` |
| 42.9% |       3 | `line_to_string`   | `black/lines.py`    |

##### `maybe_empty_lines` (`black/lines.py`)

|      % | Samples | Caller             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |       4 | `_format_str_once` | `black/__init__.py` |

##### `mark` (`black/brackets.py`)

|      % | Samples | Caller   | Location         |
| -----: | ------: | -------- | ---------------- |
| 100.0% |       4 | `append` | `black/lines.py` |

##### `__new__` (`blib2to3/pytree.py`)

|     % | Samples | Caller              | Location             |
| ----: | ------: | ------------------- | -------------------- |
| 75.0% |       3 | `convert`           | `blib2to3/pytree.py` |
| 25.0% |       1 | `generate_comments` | `black/comments.py`  |

##### `visit_default` (`black/nodes.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |       3 | `visit_default` | `black/linegen.py` |

##### `convert` (`blib2to3/pytree.py`)

|     % | Samples | Caller  | Location                  |
| ----: | ------: | ------- | ------------------------- |
| 66.7% |       2 | `shift` | `blib2to3/pgen2/parse.py` |
| 33.3% |       1 | `pop`   | `blib2to3/pgen2/parse.py` |

##### `generate_comments` (`black/comments.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |       3 | `visit_default` | `black/linegen.py` |

##### `pop` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |       3 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `transform_line` (`black/linegen.py`)

|      % | Samples | Caller             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |       3 | `_format_str_once` | `black/__init__.py` |

##### `normalize_invisible_parens` (`black/linegen.py`)

|      % | Samples | Caller       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |       3 | `visit_stmt` | `black/linegen.py` |

##### `update_sibling_maps` (`blib2to3/pytree.py`)

|      % | Samples | Caller         | Location             |
| -----: | ------: | -------------- | -------------------- |
| 100.0% |       3 | `prev_sibling` | `blib2to3/pytree.py` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                          | Location              |
| ----: | ------: | --------------------------------- | --------------------- |
| 94.4% |     202 | `_run_module_as_main`             | `<frozen runpy>`      |
| 93.5% |     200 | `format_file_contents`            | `black/__init__.py`   |
| 93.5% |     200 | `format_file_in_place`            | `black/__init__.py`   |
| 93.5% |     200 | `reformat_one`                    | `black/__init__.py`   |
| 93.5% |     200 | `main`                            | `black/__init__.py`   |
| 93.5% |     200 | `new_func`                        | `click/decorators.py` |
| 93.5% |     200 | `invoke`                          | `click/core.py`       |
| 93.5% |     200 | `main`                            | `click/core.py`       |
| 93.5% |     200 | `__call__`                        | `click/core.py`       |
| 93.5% |     200 | `patched_main`                    | `black/__init__.py`   |
| 93.5% |     200 | `<module>`                        | `black/__main__.py`   |
| 93.5% |     200 | `_run_code`                       | `<frozen runpy>`      |
| 79.0% |     169 | `_format_str_once`                | `black/__init__.py`   |
| 56.1% |     120 | `format_str`                      | `black/__init__.py`   |
| 37.4% |      80 | `check_stability_and_equivalence` | `black/__init__.py`   |
| 29.0% |      62 | `visit`                           | `black/nodes.py`      |
| 29.0% |      62 | `visit_stmt`                      | `black/linegen.py`    |
| 29.0% |      62 | `visit_default`                   | `black/nodes.py`      |
| 29.0% |      62 | `visit_default`                   | `black/linegen.py`    |
| 28.5% |      61 | `visit_suite`                     | `black/linegen.py`    |

#### Categories

##### Ours

|     % | Samples | Function                          | Location                   |
| ----: | ------: | --------------------------------- | -------------------------- |
| 93.5% |     200 | `format_file_contents`            | `black/__init__.py`        |
| 93.5% |     200 | `format_file_in_place`            | `black/__init__.py`        |
| 93.5% |     200 | `reformat_one`                    | `black/__init__.py`        |
| 93.5% |     200 | `main`                            | `black/__init__.py`        |
| 93.5% |     200 | `new_func`                        | `click/decorators.py`      |
| 93.5% |     200 | `invoke`                          | `click/core.py`            |
| 93.5% |     200 | `main`                            | `click/core.py`            |
| 93.5% |     200 | `__call__`                        | `click/core.py`            |
| 93.5% |     200 | `patched_main`                    | `black/__init__.py`        |
| 93.5% |     200 | `<module>`                        | `black/__main__.py`        |
| 79.0% |     169 | `_format_str_once`                | `black/__init__.py`        |
| 56.1% |     120 | `format_str`                      | `black/__init__.py`        |
| 37.4% |      80 | `check_stability_and_equivalence` | `black/__init__.py`        |
| 29.0% |      62 | `visit`                           | `black/nodes.py`           |
| 29.0% |      62 | `visit_stmt`                      | `black/linegen.py`         |
| 29.0% |      62 | `visit_default`                   | `black/nodes.py`           |
| 29.0% |      62 | `visit_default`                   | `black/linegen.py`         |
| 28.5% |      61 | `visit_suite`                     | `black/linegen.py`         |
| 28.0% |      60 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |
| 28.0% |      60 | `parse_string`                    | `blib2to3/pgen2/driver.py` |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 5.6% |      12 | `(anonymous)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_module_as_main` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 99.0% |     200 | `_run_code`           | `<frozen runpy>` |
|  1.0% |       2 | `_get_module_details` | `<frozen runpy>` |

##### `format_file_contents` (`black/__init__.py`)

|     % | Samples | Callee                            | Location            |
| ----: | ------: | --------------------------------- | ------------------- |
| 60.0% |     120 | `format_str`                      | `black/__init__.py` |
| 40.0% |      80 | `check_stability_and_equivalence` | `black/__init__.py` |

##### `format_file_in_place` (`black/__init__.py`)

|      % | Samples | Callee                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     200 | `format_file_contents` | `black/__init__.py` |

##### `reformat_one` (`black/__init__.py`)

|      % | Samples | Callee                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     200 | `format_file_in_place` | `black/__init__.py` |

##### `main` (`black/__init__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     200 | `reformat_one` | `black/__init__.py` |

##### `new_func` (`click/decorators.py`)

|      % | Samples | Callee | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |     200 | `main` | `black/__init__.py` |

##### `invoke` (`click/core.py`)

|      % | Samples | Callee     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     200 | `new_func` | `click/decorators.py` |
| 100.0% |     200 | `invoke`   | `click/core.py`       |

##### `main` (`click/core.py`)

|      % | Samples | Callee   | Location        |
| -----: | ------: | -------- | --------------- |
| 100.0% |     200 | `invoke` | `click/core.py` |

##### `__call__` (`click/core.py`)

|      % | Samples | Callee | Location        |
| -----: | ------: | ------ | --------------- |
| 100.0% |     200 | `main` | `click/core.py` |

##### `patched_main` (`black/__init__.py`)

|      % | Samples | Callee     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |     200 | `__call__` | `click/core.py` |

##### `<module>` (`black/__main__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     200 | `patched_main` | `black/__init__.py` |

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |     200 | `<module>` | `black/__main__.py` |

##### `_format_str_once` (`black/__init__.py`)

|     % | Samples | Callee                   | Location            |
| ----: | ------: | ------------------------ | ------------------- |
| 36.7% |      62 | `visit`                  | `black/nodes.py`    |
| 35.5% |      60 | `lib2to3_parse`          | `black/parsing.py`  |
| 10.7% |      18 | `transform_line`         | `black/linegen.py`  |
|  6.5% |      11 | `maybe_empty_lines`      | `black/lines.py`    |
|  5.9% |      10 | `detect_target_versions` | `black/__init__.py` |

##### `format_str` (`black/__init__.py`)

|      % | Samples | Callee             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |     120 | `_format_str_once` | `black/__init__.py` |

##### `check_stability_and_equivalence` (`black/__init__.py`)

|     % | Samples | Callee              | Location            |
| ----: | ------: | ------------------- | ------------------- |
| 61.3% |      49 | `assert_stable`     | `black/__init__.py` |
| 36.3% |      29 | `assert_equivalent` | `black/__init__.py` |

##### `visit` (`black/nodes.py`)

|      % | Samples | Callee              | Location           |
| -----: | ------: | ------------------- | ------------------ |
| 100.0% |      62 | `visit_stmt`        | `black/linegen.py` |
| 100.0% |      62 | `visit_default`     | `black/linegen.py` |
|  98.4% |      61 | `visit_suite`       | `black/linegen.py` |
|  95.2% |      59 | `visit_funcdef`     | `black/linegen.py` |
|  61.3% |      38 | `visit_simple_stmt` | `black/linegen.py` |

##### `visit_stmt` (`black/linegen.py`)

|     % | Samples | Callee                       | Location           |
| ----: | ------: | ---------------------------- | ------------------ |
| 98.4% |      61 | `visit`                      | `black/nodes.py`   |
|  8.1% |       5 | `normalize_invisible_parens` | `black/linegen.py` |

##### `visit_default` (`black/nodes.py`)

|      % | Samples | Callee  | Location         |
| -----: | ------: | ------- | ---------------- |
| 100.0% |      62 | `visit` | `black/nodes.py` |

##### `visit_default` (`black/linegen.py`)

|      % | Samples | Callee              | Location            |
| -----: | ------: | ------------------- | ------------------- |
| 100.0% |      62 | `visit_default`     | `black/nodes.py`    |
|  38.7% |      24 | `append`            | `black/lines.py`    |
|  12.9% |       8 | `generate_comments` | `black/comments.py` |

##### `visit_suite` (`black/linegen.py`)

|      % | Samples | Callee          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |      61 | `visit_default` | `black/linegen.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|     % | Samples | Callee     | Location                   |
| ----: | ------: | ---------- | -------------------------- |
| 68.3% |      41 | `addtoken` | `blib2to3/pgen2/parse.py`  |
| 25.0% |      15 | `__next__` | `blib2to3/pgen2/driver.py` |
|  3.3% |       2 | `cast`     | `typing.py`                |

##### `parse_string` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Callee         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      60 | `parse_tokens` | `blib2to3/pgen2/driver.py` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.1% |      13 | `__init__` (`blib2to3/pytree.py`) ← `convert` ← `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 6.1% |      13 | `parse` (`ast.py`) ← `_parse_single_version` (`black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 4.2% |       9 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3.7% |       8 | `<genexpr>` (`black/lines.py`) ← `is_complex_subscript` ← `append` ← `visit_default` (`black/linegen.py`) ← `visit_NUMBER` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` |
| 2.8% |       6 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.8% |       6 | `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2.3% |       5 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.3% |       5 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.9% |       4 | `get_features_used` (`black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.9% |       4 | `maybe_empty_lines` (`black/lines.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.9% |       4 | `get_features_used` (`black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.4% |       3 | `mark` (`black/brackets.py`) ← `append` (`black/lines.py`) ← `visit_default` (`black/linegen.py`) ← `visit_NUMBER` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                              |
| 1.4% |       3 | `transform_line` (`black/linegen.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.4% |       3 | `_stringify_ast` (`black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.4% |       3 | `classify` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.4% |       3 | `_hugging_power_ops_line_to_string` (`black/linegen.py`) ← `transform_line` ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.9% |       2 | `__str__` (`black/lines.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.9% |       2 | `cast` (`typing.py`) ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.9% |       2 | `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.9% |       2 | `check_stability_and_equivalence` (`black/__init__.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

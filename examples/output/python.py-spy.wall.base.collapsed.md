# Sampling profile

Collected 175 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| ours     | 97.7% |     171 |
| unknown  |  1.7% |       3 |
| stdlib   |  0.6% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                    | Location                     |
| ----: | ------: | --------------------------- | ---------------------------- |
| 10.3% |      18 | `_addtoken`                 | `blib2to3/pgen2/parse.py`    |
|  7.4% |      13 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py` |
|  6.9% |      12 | `parse`                     | `ast.py`                     |
|  6.3% |      11 | `mark`                      | `black/brackets.py`          |
|  6.3% |      11 | `__new__`                   | `blib2to3/pytree.py`         |
|  4.6% |       8 | `push`                      | `blib2to3/pgen2/parse.py`    |
|  4.0% |       7 | `visit_default`             | `black/linegen.py`           |
|  4.0% |       7 | `generate_comments`         | `black/comments.py`          |
|  3.4% |       6 | `__init__`                  | `<string>`                   |
|  3.4% |       6 | `_stringify_ast`            | `black/parsing.py`           |
|  2.9% |       5 | `append`                    | `black/lines.py`             |
|  2.9% |       5 | `get_features_used`         | `black/__init__.py`          |
|  2.9% |       5 | `is_split_before_delimiter` | `black/brackets.py`          |
|  1.7% |       3 | `visit`                     | `black/nodes.py`             |
|  1.7% |       3 | `__init__`                  | `blib2to3/pytree.py`         |
|  1.7% |       3 | `convert`                   | `blib2to3/pytree.py`         |
|  1.7% |       3 | `prev_sibling`              | `blib2to3/pytree.py`         |
|  1.7% |       3 | `is_one_sequence_between`   | `black/nodes.py`             |
|  1.1% |       2 | `transform_line`            | `black/linegen.py`           |
|  1.1% |       2 | `_format_str_once`          | `black/__init__.py`          |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Location                      |
| ----: | ------: | ----------------------------- |
| 27.8% |       5 | `blib2to3/pgen2/parse.py:314` |
| 16.7% |       3 | `blib2to3/pgen2/parse.py:297` |
| 11.1% |       2 | `blib2to3/pgen2/parse.py:328` |
| 11.1% |       2 | `blib2to3/pgen2/parse.py:298` |
| 11.1% |       2 | `blib2to3/pgen2/parse.py:303` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|     % | Samples | Location                         |
| ----: | ------: | -------------------------------- |
| 46.2% |       6 | `blib2to3/pgen2/tokenize.py:875` |
| 15.4% |       2 | `blib2to3/pgen2/tokenize.py:624` |
|  7.7% |       1 | `blib2to3/pgen2/tokenize.py:902` |
|  7.7% |       1 | `blib2to3/pgen2/tokenize.py:973` |
|  7.7% |       1 | `blib2to3/pgen2/tokenize.py:717` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      12 | `ast.py:50` |

##### `mark` (`black/brackets.py`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 45.5% |       5 | `black/brackets.py:112` |
| 36.4% |       4 | `black/brackets.py:98`  |
|  9.1% |       1 | `black/brackets.py:99`  |
|  9.1% |       1 | `black/brackets.py:122` |

##### `__new__` (`blib2to3/pytree.py`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      11 | `blib2to3/pytree.py:84` |

##### `push` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Location                      |
| ----: | ------: | ----------------------------- |
| 62.5% |       5 | `blib2to3/pgen2/parse.py:394` |
| 25.0% |       2 | `blib2to3/pgen2/parse.py:395` |
| 12.5% |       1 | `blib2to3/pgen2/parse.py:388` |

##### `visit_default` (`black/linegen.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 71.4% |       5 | `black/linegen.py:158` |
| 14.3% |       1 | `black/linegen.py:134` |
| 14.3% |       1 | `black/linegen.py:155` |

##### `generate_comments` (`black/comments.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       7 | `black/comments.py:72` |

##### `__init__` (`<string>`)

|     % | Samples | Location     |
| ----: | ------: | ------------ |
| 33.3% |       2 | `<string>:8` |
| 33.3% |       2 | `<string>:5` |
| 16.7% |       1 | `<string>:4` |
| 16.7% |       1 | `<string>:6` |

##### `_stringify_ast` (`black/parsing.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 33.3% |       2 | `black/parsing.py:217` |
| 33.3% |       2 | `black/parsing.py:199` |
| 16.7% |       1 | `black/parsing.py:214` |
| 16.7% |       1 | `black/parsing.py:216` |

##### `append` (`black/lines.py`)

|     % | Samples | Location            |
| ----: | ------: | ------------------- |
| 40.0% |       2 | `black/lines.py:96` |
| 20.0% |       1 | `black/lines.py:63` |
| 20.0% |       1 | `black/lines.py:79` |
| 20.0% |       1 | `black/lines.py:78` |

##### `get_features_used` (`black/__init__.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 20.0% |       1 | `black/__init__.py:1430` |
| 20.0% |       1 | `black/__init__.py:1349` |
| 20.0% |       1 | `black/__init__.py:1401` |
| 20.0% |       1 | `black/__init__.py:1424` |
| 20.0% |       1 | `black/__init__.py:1436` |

##### `is_split_before_delimiter` (`black/brackets.py`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 60.0% |       3 | `black/brackets.py:240` |
| 40.0% |       2 | `black/brackets.py:258` |

##### `visit` (`black/nodes.py`)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 33.3% |       1 | `black/nodes.py:173` |
| 33.3% |       1 | `black/nodes.py:185` |
| 33.3% |       1 | `black/nodes.py:181` |

##### `__init__` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 33.3% |       1 | `blib2to3/pytree.py:267` |
| 33.3% |       1 | `blib2to3/pytree.py:266` |
| 33.3% |       1 | `blib2to3/pytree.py:268` |

##### `convert` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 33.3% |       1 | `blib2to3/pytree.py:498` |
| 33.3% |       1 | `blib2to3/pytree.py:495` |
| 33.3% |       1 | `blib2to3/pytree.py:499` |

##### `prev_sibling` (`blib2to3/pytree.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       3 | `blib2to3/pytree.py:219` |

##### `is_one_sequence_between` (`black/nodes.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       3 | `black/nodes.py:635` |

##### `transform_line` (`black/linegen.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 50.0% |       1 | `black/linegen.py:679` |
| 50.0% |       1 | `black/linegen.py:627` |

##### `_format_str_once` (`black/__init__.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       2 | `black/__init__.py:1274` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller     | Location                  |
| -----: | ------: | ---------- | ------------------------- |
| 100.0% |      18 | `addtoken` | `blib2to3/pgen2/parse.py` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|      % | Samples | Caller     | Location                   |
| -----: | ------: | ---------- | -------------------------- |
| 100.0% |      13 | `__next__` | `blib2to3/pgen2/driver.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |      12 | `_parse_single_version` | `black/parsing.py` |

##### `mark` (`black/brackets.py`)

|      % | Samples | Caller   | Location         |
| -----: | ------: | -------- | ---------------- |
| 100.0% |      11 | `append` | `black/lines.py` |

##### `__new__` (`blib2to3/pytree.py`)

|      % | Samples | Caller    | Location             |
| -----: | ------: | --------- | -------------------- |
| 100.0% |      11 | `convert` | `blib2to3/pytree.py` |

##### `push` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |       8 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `visit_default` (`black/linegen.py`)

|     % | Samples | Caller              | Location           |
| ----: | ------: | ------------------- | ------------------ |
| 71.4% |       5 | `visit`             | `black/nodes.py`   |
| 14.3% |       1 | `visit_suite`       | `black/linegen.py` |
| 14.3% |       1 | `visit_simple_stmt` | `black/linegen.py` |

##### `generate_comments` (`black/comments.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |       7 | `visit_default` | `black/linegen.py` |

##### `__init__` (`<string>`)

|     % | Samples | Caller      | Location           |
| ----: | ------: | ----------- | ------------------ |
| 50.0% |       3 | `__init__`  | `<string>`         |
| 33.3% |       2 | `all_lines` | `black/lines.py`   |
| 16.7% |       1 | `line`      | `black/linegen.py` |

##### `_stringify_ast` (`black/parsing.py`)

|     % | Samples | Caller                           | Location            |
| ----: | ------: | -------------------------------- | ------------------- |
| 83.3% |       5 | `_stringify_ast_with_new_parent` | `black/parsing.py`  |
| 16.7% |       1 | `assert_equivalent`              | `black/__init__.py` |

##### `append` (`black/lines.py`)

|     % | Samples | Caller          | Location           |
| ----: | ------: | --------------- | ------------------ |
| 80.0% |       4 | `visit_default` | `black/linegen.py` |
| 20.0% |       1 | `hug_power_op`  | `black/trans.py`   |

##### `get_features_used` (`black/__init__.py`)

|      % | Samples | Caller                   | Location            |
| -----: | ------: | ------------------------ | ------------------- |
| 100.0% |       5 | `detect_target_versions` | `black/__init__.py` |

##### `is_split_before_delimiter` (`black/brackets.py`)

|      % | Samples | Caller | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |       5 | `mark` | `black/brackets.py` |

##### `visit` (`black/nodes.py`)

|      % | Samples | Caller          | Location         |
| -----: | ------: | --------------- | ---------------- |
| 100.0% |       3 | `visit_default` | `black/nodes.py` |

##### `__init__` (`blib2to3/pytree.py`)

|     % | Samples | Caller                | Location             |
| ----: | ------: | --------------------- | -------------------- |
| 66.7% |       2 | `convert`             | `blib2to3/pytree.py` |
| 33.3% |       1 | `wrap_in_parentheses` | `black/nodes.py`     |

##### `convert` (`blib2to3/pytree.py`)

|     % | Samples | Caller  | Location                  |
| ----: | ------: | ------- | ------------------------- |
| 66.7% |       2 | `pop`   | `blib2to3/pgen2/parse.py` |
| 33.3% |       1 | `shift` | `blib2to3/pgen2/parse.py` |

##### `prev_sibling` (`blib2to3/pytree.py`)

|      % | Samples | Caller           | Location         |
| -----: | ------: | ---------------- | ---------------- |
| 100.0% |       3 | `preceding_leaf` | `black/nodes.py` |

##### `is_one_sequence_between` (`black/nodes.py`)

|      % | Samples | Caller                     | Location         |
| -----: | ------: | -------------------------- | ---------------- |
| 100.0% |       3 | `has_magic_trailing_comma` | `black/lines.py` |

##### `transform_line` (`black/linegen.py`)

|      % | Samples | Caller             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |       2 | `_format_str_once` | `black/__init__.py` |

##### `_format_str_once` (`black/__init__.py`)

|      % | Samples | Caller       | Location            |
| -----: | ------: | ------------ | ------------------- |
| 100.0% |       2 | `format_str` | `black/__init__.py` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                          | Location                   |
| ----: | ------: | --------------------------------- | -------------------------- |
| 97.1% |     170 | `reformat_one`                    | `black/__init__.py`        |
| 97.1% |     170 | `main`                            | `black/__init__.py`        |
| 97.1% |     170 | `new_func`                        | `click/decorators.py`      |
| 97.1% |     170 | `invoke`                          | `click/core.py`            |
| 97.1% |     170 | `main`                            | `click/core.py`            |
| 97.1% |     170 | `__call__`                        | `click/core.py`            |
| 97.1% |     170 | `patched_main`                    | `black/__init__.py`        |
| 97.1% |     170 | `<module>`                        | `black/__main__.py`        |
| 96.6% |     169 | `format_file_contents`            | `black/__init__.py`        |
| 96.6% |     169 | `format_file_in_place`            | `black/__init__.py`        |
| 85.7% |     150 | `_format_str_once`                | `black/__init__.py`        |
| 56.6% |      99 | `format_str`                      | `black/__init__.py`        |
| 40.0% |      70 | `check_stability_and_equivalence` | `black/__init__.py`        |
| 36.6% |      64 | `visit`                           | `black/nodes.py`           |
| 36.6% |      64 | `visit_default`                   | `black/nodes.py`           |
| 36.6% |      64 | `visit_default`                   | `black/linegen.py`         |
| 36.6% |      64 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |
| 36.6% |      64 | `parse_string`                    | `blib2to3/pgen2/driver.py` |
| 36.6% |      64 | `lib2to3_parse`                   | `black/parsing.py`         |
| 34.9% |      61 | `visit_suite`                     | `black/linegen.py`         |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `reformat_one` (`black/__init__.py`)

|     % | Samples | Callee                 | Location            |
| ----: | ------: | ---------------------- | ------------------- |
| 99.4% |     169 | `format_file_in_place` | `black/__init__.py` |
|  0.6% |       1 | `write`                | `black/cache.py`    |

##### `main` (`black/__init__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     170 | `reformat_one` | `black/__init__.py` |

##### `new_func` (`click/decorators.py`)

|      % | Samples | Callee | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |     170 | `main` | `black/__init__.py` |

##### `invoke` (`click/core.py`)

|      % | Samples | Callee     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     170 | `new_func` | `click/decorators.py` |
| 100.0% |     170 | `invoke`   | `click/core.py`       |

##### `main` (`click/core.py`)

|      % | Samples | Callee   | Location        |
| -----: | ------: | -------- | --------------- |
| 100.0% |     170 | `invoke` | `click/core.py` |

##### `__call__` (`click/core.py`)

|      % | Samples | Callee | Location        |
| -----: | ------: | ------ | --------------- |
| 100.0% |     170 | `main` | `click/core.py` |

##### `patched_main` (`black/__init__.py`)

|      % | Samples | Callee     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |     170 | `__call__` | `click/core.py` |

##### `<module>` (`black/__main__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     170 | `patched_main` | `black/__init__.py` |

##### `format_file_contents` (`black/__init__.py`)

|     % | Samples | Callee                            | Location            |
| ----: | ------: | --------------------------------- | ------------------- |
| 58.6% |      99 | `format_str`                      | `black/__init__.py` |
| 41.4% |      70 | `check_stability_and_equivalence` | `black/__init__.py` |

##### `format_file_in_place` (`black/__init__.py`)

|      % | Samples | Callee                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     169 | `format_file_contents` | `black/__init__.py` |

##### `_format_str_once` (`black/__init__.py`)

|     % | Samples | Callee                   | Location            |
| ----: | ------: | ------------------------ | ------------------- |
| 42.7% |      64 | `visit`                  | `black/nodes.py`    |
| 42.7% |      64 | `lib2to3_parse`          | `black/parsing.py`  |
|  6.7% |      10 | `transform_line`         | `black/linegen.py`  |
|  4.0% |       6 | `detect_target_versions` | `black/__init__.py` |
|  1.3% |       2 | `all_lines`              | `black/lines.py`    |

##### `format_str` (`black/__init__.py`)

|      % | Samples | Callee             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |      99 | `_format_str_once` | `black/__init__.py` |

##### `check_stability_and_equivalence` (`black/__init__.py`)

|     % | Samples | Callee              | Location            |
| ----: | ------: | ------------------- | ------------------- |
| 72.9% |      51 | `assert_stable`     | `black/__init__.py` |
| 27.1% |      19 | `assert_equivalent` | `black/__init__.py` |

##### `visit` (`black/nodes.py`)

|      % | Samples | Callee              | Location           |
| -----: | ------: | ------------------- | ------------------ |
| 100.0% |      64 | `visit_default`     | `black/linegen.py` |
|  95.3% |      61 | `visit_suite`       | `black/linegen.py` |
|  95.3% |      61 | `visit_stmt`        | `black/linegen.py` |
|  93.8% |      60 | `visit_funcdef`     | `black/linegen.py` |
|  75.0% |      48 | `visit_simple_stmt` | `black/linegen.py` |

##### `visit_default` (`black/nodes.py`)

|      % | Samples | Callee  | Location         |
| -----: | ------: | ------- | ---------------- |
| 100.0% |      64 | `visit` | `black/nodes.py` |

##### `visit_default` (`black/linegen.py`)

|      % | Samples | Callee              | Location            |
| -----: | ------: | ------------------- | ------------------- |
| 100.0% |      64 | `visit_default`     | `black/nodes.py`    |
|  51.6% |      33 | `append`            | `black/lines.py`    |
|  15.6% |      10 | `generate_comments` | `black/comments.py` |
|   3.1% |       2 | `line`              | `black/linegen.py`  |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|     % | Samples | Callee                      | Location                   |
| ----: | ------: | --------------------------- | -------------------------- |
| 73.4% |      47 | `addtoken`                  | `blib2to3/pgen2/parse.py`  |
| 21.9% |      14 | `__next__`                  | `blib2to3/pgen2/driver.py` |
|  1.6% |       1 | `_partially_consume_prefix` | `blib2to3/pgen2/driver.py` |
|  1.6% |       1 | `debug`                     | `logging/__init__.py`      |

##### `parse_string` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Callee         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      64 | `parse_tokens` | `blib2to3/pgen2/driver.py` |

##### `lib2to3_parse` (`black/parsing.py`)

|      % | Samples | Callee         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      64 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `visit_suite` (`black/linegen.py`)

|      % | Samples | Callee          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |      61 | `visit_default` | `black/linegen.py` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.9% |      12 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 6.9% |      12 | `parse` (`ast.py`) ← `_parse_single_version` (`black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 5.1% |       9 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 4.6% |       8 | `__new__` (`blib2to3/pytree.py`) ← `convert` ← `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3.4% |       6 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3.4% |       6 | `push` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.9% |       5 | `generate_comments` (`black/comments.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                             |
| 2.9% |       5 | `_stringify_ast` (`black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.3% |       4 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.7% |       3 | `get_features_used` (`black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.7% |       3 | `prev_sibling` (`blib2to3/pytree.py`) ← `preceding_leaf` (`black/nodes.py`) ← `whitespace` ← `append` (`black/lines.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` |
| 1.7% |       3 | `is_one_sequence_between` (`black/nodes.py`) ← `has_magic_trailing_comma` (`black/lines.py`) ← `append` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.7% |       3 | `__new__` (`blib2to3/pytree.py`) ← `convert` ← `shift` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.7% |       3 | `is_split_before_delimiter` (`black/brackets.py`) ← `mark` ← `append` (`black/lines.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.1% |       2 | `transform_line` (`black/linegen.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.1% |       2 | `__init__` (`<string>`) ← `__init__` ← `line` (`black/linegen.py`) ← `visit_default` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.1% |       2 | `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.1% |       2 | `push` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.1% |       2 | `maybe_decrement_after_lambda_arguments` (`black/brackets.py`) ← `mark` ← `append` (`black/lines.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.1% |       2 | `convert` (`blib2to3/pytree.py`) ← `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

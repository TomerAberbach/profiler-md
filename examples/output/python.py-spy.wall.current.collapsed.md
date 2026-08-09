# Sampling profile

Collected 184 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 94.0% |     173 |
| Unknown          |  4.9% |       9 |
| Standard library |  1.1% |       2 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

#### Categories

##### Ours

|     % | Samples | Function            | Location                     |
| ----: | ------: | ------------------- | ---------------------------- |
| 12.0% |      22 | `_addtoken`         | `blib2to3/pgen2/parse.py`    |
|  8.7% |      16 | `generate_comments` | `black/comments.py`          |
|  6.5% |      12 | `__new__`           | `blib2to3/pytree.py`         |
|  6.5% |      12 | `parse`             | `ast.py`                     |
|  4.3% |       8 | `generate_tokens`   | `blib2to3/pgen2/tokenize.py` |
|  3.8% |       7 | `_stringify_ast`    | `black/parsing.py`           |
|  3.8% |       7 | `visit_default`     | `black/linegen.py`           |
|  3.3% |       6 | `append`            | `black/lines.py`             |
|  2.7% |       5 | `pop`               | `blib2to3/pgen2/parse.py`    |
|  2.7% |       5 | `get_features_used` | `black/__init__.py`          |
|  2.7% |       5 | `<genexpr>`         | `blib2to3/pgen2/tokenize.py` |
|  2.2% |       4 | `__init__`          | `blib2to3/pytree.py`         |
|  1.6% |       3 | `visit_stmt`        | `black/linegen.py`           |
|  1.6% |       3 | `__str__`           | `black/lines.py`             |
|  1.6% |       3 | `transform_line`    | `black/linegen.py`           |
|  1.6% |       3 | `push`              | `blib2to3/pgen2/parse.py`    |
|  1.6% |       3 | `prefix`            | `blib2to3/pytree.py`         |
|  1.1% |       2 | `visit`             | `black/nodes.py`             |
|  1.1% |       2 | `__init__`          | `<string>`                   |
|  1.1% |       2 | `leaves`            | `blib2to3/pytree.py`         |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Location                      |
| ----: | ------: | ----------------------------- |
| 22.7% |       5 | `blib2to3/pgen2/parse.py:314` |
| 13.6% |       3 | `blib2to3/pgen2/parse.py:298` |
| 13.6% |       3 | `blib2to3/pgen2/parse.py:297` |
|  9.1% |       2 | `blib2to3/pgen2/parse.py:328` |
|  9.1% |       2 | `blib2to3/pgen2/parse.py:303` |

##### `generate_comments` (`black/comments.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 87.5% |      14 | `black/comments.py:72` |
|  6.3% |       1 | `black/comments.py:52` |
|  6.3% |       1 | `black/comments.py:75` |

##### `__new__` (`blib2to3/pytree.py`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      12 | `blib2to3/pytree.py:84` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      12 | `ast.py:50` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|     % | Samples | Location                         |
| ----: | ------: | -------------------------------- |
| 50.0% |       4 | `blib2to3/pgen2/tokenize.py:875` |
| 25.0% |       2 | `blib2to3/pgen2/tokenize.py:719` |
| 12.5% |       1 | `blib2to3/pgen2/tokenize.py:877` |
| 12.5% |       1 | `blib2to3/pgen2/tokenize.py:973` |

##### `_stringify_ast` (`black/parsing.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 57.1% |       4 | `black/parsing.py:214` |
| 14.3% |       1 | `black/parsing.py:197` |
| 14.3% |       1 | `black/parsing.py:244` |
| 14.3% |       1 | `black/parsing.py:216` |

##### `visit_default` (`black/linegen.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 57.1% |       4 | `black/linegen.py:134` |
| 28.6% |       2 | `black/linegen.py:156` |
| 14.3% |       1 | `black/linegen.py:138` |

##### `append` (`black/lines.py`)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 33.3% |       2 | `black/lines.py:84`  |
| 16.7% |       1 | `black/lines.py:94`  |
| 16.7% |       1 | `black/lines.py:86`  |
| 16.7% |       1 | `black/lines.py:101` |
| 16.7% |       1 | `black/lines.py:76`  |

##### `pop` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Location                      |
| ----: | ------: | ----------------------------- |
| 40.0% |       2 | `blib2to3/pgen2/parse.py:403` |
| 40.0% |       2 | `blib2to3/pgen2/parse.py:408` |
| 20.0% |       1 | `blib2to3/pgen2/parse.py:398` |

##### `get_features_used` (`black/__init__.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 40.0% |       2 | `black/__init__.py:1440` |
| 20.0% |       1 | `black/__init__.py:1367` |
| 20.0% |       1 | `black/__init__.py:1430` |
| 20.0% |       1 | `black/__init__.py:1335` |

##### `<genexpr>` (`blib2to3/pgen2/tokenize.py`)

|      % | Samples | Location                         |
| -----: | ------: | -------------------------------- |
| 100.0% |       5 | `blib2to3/pgen2/tokenize.py:471` |

##### `__init__` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 25.0% |       1 | `blib2to3/pytree.py:266` |
| 25.0% |       1 | `blib2to3/pytree.py:417` |
| 25.0% |       1 | `blib2to3/pytree.py:426` |
| 25.0% |       1 | `blib2to3/pytree.py:267` |

##### `visit_stmt` (`black/linegen.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 66.7% |       2 | `black/linegen.py:218` |
| 33.3% |       1 | `black/linegen.py:216` |

##### `__str__` (`black/lines.py`)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 33.3% |       1 | `black/lines.py:500` |
| 33.3% |       1 | `black/lines.py:498` |
| 33.3% |       1 | `black/lines.py:501` |

##### `transform_line` (`black/linegen.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 33.3% |       1 | `black/linegen.py:626` |
| 33.3% |       1 | `black/linegen.py:714` |
| 33.3% |       1 | `black/linegen.py:679` |

##### `push` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Location                      |
| ----: | ------: | ----------------------------- |
| 33.3% |       1 | `blib2to3/pgen2/parse.py:395` |
| 33.3% |       1 | `blib2to3/pgen2/parse.py:396` |
| 33.3% |       1 | `blib2to3/pgen2/parse.py:394` |

##### `prefix` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 33.3% |       1 | `blib2to3/pytree.py:480` |
| 33.3% |       1 | `blib2to3/pytree.py:482` |
| 33.3% |       1 | `blib2to3/pytree.py:320` |

##### `visit` (`black/nodes.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       2 | `black/nodes.py:163` |

##### `__init__` (`<string>`)

|      % | Samples | Location     |
| -----: | ------: | ------------ |
| 100.0% |       2 | `<string>:4` |

##### `leaves` (`blib2to3/pytree.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       2 | `blib2to3/pytree.py:223` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller     | Location                  |
| -----: | ------: | ---------- | ------------------------- |
| 100.0% |      22 | `addtoken` | `blib2to3/pgen2/parse.py` |

##### `generate_comments` (`black/comments.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |      16 | `visit_default` | `black/linegen.py` |

##### `__new__` (`blib2to3/pytree.py`)

|      % | Samples | Caller    | Location             |
| -----: | ------: | --------- | -------------------- |
| 100.0% |      12 | `convert` | `blib2to3/pytree.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |      12 | `_parse_single_version` | `black/parsing.py` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|      % | Samples | Caller     | Location                   |
| -----: | ------: | ---------- | -------------------------- |
| 100.0% |       8 | `__next__` | `blib2to3/pgen2/driver.py` |

##### `_stringify_ast` (`black/parsing.py`)

|      % | Samples | Caller                           | Location           |
| -----: | ------: | -------------------------------- | ------------------ |
| 100.0% |       7 | `_stringify_ast_with_new_parent` | `black/parsing.py` |

##### `visit_default` (`black/linegen.py`)

|      % | Samples | Caller  | Location         |
| -----: | ------: | ------- | ---------------- |
| 100.0% |       7 | `visit` | `black/nodes.py` |

##### `append` (`black/lines.py`)

|      % | Samples | Caller          | Location           |
| -----: | ------: | --------------- | ------------------ |
| 100.0% |       6 | `visit_default` | `black/linegen.py` |

##### `pop` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |       5 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `get_features_used` (`black/__init__.py`)

|      % | Samples | Caller                   | Location            |
| -----: | ------: | ------------------------ | ------------------- |
| 100.0% |       5 | `detect_target_versions` | `black/__init__.py` |

##### `<genexpr>` (`blib2to3/pgen2/tokenize.py`)

|      % | Samples | Caller             | Location                     |
| -----: | ------: | ------------------ | ---------------------------- |
| 100.0% |       5 | `is_fstring_start` | `blib2to3/pgen2/tokenize.py` |

##### `__init__` (`blib2to3/pytree.py`)

|     % | Samples | Caller                | Location             |
| ----: | ------: | --------------------- | -------------------- |
| 50.0% |       2 | `convert`             | `blib2to3/pytree.py` |
| 50.0% |       2 | `wrap_in_parentheses` | `black/nodes.py`     |

##### `visit_stmt` (`black/linegen.py`)

|      % | Samples | Caller  | Location         |
| -----: | ------: | ------- | ---------------- |
| 100.0% |       3 | `visit` | `black/nodes.py` |

##### `__str__` (`black/lines.py`)

|     % | Samples | Caller             | Location            |
| ----: | ------: | ------------------ | ------------------- |
| 66.7% |       2 | `line_to_string`   | `black/lines.py`    |
| 33.3% |       1 | `_format_str_once` | `black/__init__.py` |

##### `transform_line` (`black/linegen.py`)

|      % | Samples | Caller             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |       3 | `_format_str_once` | `black/__init__.py` |

##### `push` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |       3 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `prefix` (`blib2to3/pytree.py`)

|     % | Samples | Caller                      | Location            |
| ----: | ------: | --------------------------- | ------------------- |
| 33.3% |       1 | `normalize_trailing_prefix` | `black/comments.py` |
| 33.3% |       1 | `append`                    | `black/lines.py`    |
| 33.3% |       1 | `wrap_in_parentheses`       | `black/nodes.py`    |

##### `visit` (`black/nodes.py`)

|      % | Samples | Caller          | Location         |
| -----: | ------: | --------------- | ---------------- |
| 100.0% |       2 | `visit_default` | `black/nodes.py` |

##### `__init__` (`<string>`)

|      % | Samples | Caller     | Location   |
| -----: | ------: | ---------- | ---------- |
| 100.0% |       2 | `__init__` | `<string>` |

##### `leaves` (`blib2to3/pytree.py`)

|      % | Samples | Caller   | Location             |
| -----: | ------: | -------- | -------------------- |
| 100.0% |       2 | `leaves` | `blib2to3/pytree.py` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

#### Categories

##### Ours

|     % | Samples | Function                          | Location                   |
| ----: | ------: | --------------------------------- | -------------------------- |
| 94.0% |     173 | `format_file_contents`            | `black/__init__.py`        |
| 94.0% |     173 | `format_file_in_place`            | `black/__init__.py`        |
| 94.0% |     173 | `reformat_one`                    | `black/__init__.py`        |
| 94.0% |     173 | `main`                            | `black/__init__.py`        |
| 94.0% |     173 | `new_func`                        | `click/decorators.py`      |
| 94.0% |     173 | `invoke`                          | `click/core.py`            |
| 94.0% |     173 | `main`                            | `click/core.py`            |
| 94.0% |     173 | `__call__`                        | `click/core.py`            |
| 94.0% |     173 | `patched_main`                    | `black/__init__.py`        |
| 94.0% |     173 | `<module>`                        | `black/__main__.py`        |
| 83.2% |     153 | `_format_str_once`                | `black/__init__.py`        |
| 47.3% |      87 | `check_stability_and_equivalence` | `black/__init__.py`        |
| 46.7% |      86 | `format_str`                      | `black/__init__.py`        |
| 36.4% |      67 | `assert_stable`                   | `black/__init__.py`        |
| 33.7% |      62 | `parse_string`                    | `blib2to3/pgen2/driver.py` |
| 33.7% |      62 | `lib2to3_parse`                   | `black/parsing.py`         |
| 33.2% |      61 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |
| 31.0% |      57 | `visit_default`                   | `black/linegen.py`         |
| 31.0% |      57 | `visit`                           | `black/nodes.py`           |
| 31.0% |      57 | `visit_default`                   | `black/nodes.py`           |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `format_file_contents` (`black/__init__.py`)

|     % | Samples | Callee                            | Location            |
| ----: | ------: | --------------------------------- | ------------------- |
| 50.3% |      87 | `check_stability_and_equivalence` | `black/__init__.py` |
| 49.7% |      86 | `format_str`                      | `black/__init__.py` |

##### `format_file_in_place` (`black/__init__.py`)

|      % | Samples | Callee                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     173 | `format_file_contents` | `black/__init__.py` |

##### `reformat_one` (`black/__init__.py`)

|      % | Samples | Callee                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     173 | `format_file_in_place` | `black/__init__.py` |

##### `main` (`black/__init__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     173 | `reformat_one` | `black/__init__.py` |

##### `new_func` (`click/decorators.py`)

|      % | Samples | Callee | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |     173 | `main` | `black/__init__.py` |

##### `invoke` (`click/core.py`)

|      % | Samples | Callee     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     173 | `new_func` | `click/decorators.py` |
| 100.0% |     173 | `invoke`   | `click/core.py`       |

##### `main` (`click/core.py`)

|      % | Samples | Callee   | Location        |
| -----: | ------: | -------- | --------------- |
| 100.0% |     173 | `invoke` | `click/core.py` |

##### `__call__` (`click/core.py`)

|      % | Samples | Callee | Location        |
| -----: | ------: | ------ | --------------- |
| 100.0% |     173 | `main` | `click/core.py` |

##### `patched_main` (`black/__init__.py`)

|      % | Samples | Callee     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |     173 | `__call__` | `click/core.py` |

##### `<module>` (`black/__main__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     173 | `patched_main` | `black/__init__.py` |

##### `_format_str_once` (`black/__init__.py`)

|     % | Samples | Callee                   | Location            |
| ----: | ------: | ------------------------ | ------------------- |
| 40.5% |      62 | `lib2to3_parse`          | `black/parsing.py`  |
| 37.3% |      57 | `visit`                  | `black/nodes.py`    |
|  9.8% |      15 | `transform_line`         | `black/linegen.py`  |
|  4.6% |       7 | `detect_target_versions` | `black/__init__.py` |
|  3.9% |       6 | `maybe_empty_lines`      | `black/lines.py`    |

##### `check_stability_and_equivalence` (`black/__init__.py`)

|     % | Samples | Callee              | Location            |
| ----: | ------: | ------------------- | ------------------- |
| 77.0% |      67 | `assert_stable`     | `black/__init__.py` |
| 23.0% |      20 | `assert_equivalent` | `black/__init__.py` |

##### `format_str` (`black/__init__.py`)

|      % | Samples | Callee             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |      86 | `_format_str_once` | `black/__init__.py` |

##### `assert_stable` (`black/__init__.py`)

|      % | Samples | Callee             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |      67 | `_format_str_once` | `black/__init__.py` |

##### `parse_string` (`blib2to3/pgen2/driver.py`)

|     % | Samples | Callee         | Location                   |
| ----: | ------: | -------------- | -------------------------- |
| 98.4% |      61 | `parse_tokens` | `blib2to3/pgen2/driver.py` |

##### `lib2to3_parse` (`black/parsing.py`)

|      % | Samples | Callee         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      62 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|     % | Samples | Callee     | Location                   |
| ----: | ------: | ---------- | -------------------------- |
| 73.8% |      45 | `addtoken` | `blib2to3/pgen2/parse.py`  |
| 24.6% |      15 | `__next__` | `blib2to3/pgen2/driver.py` |

##### `visit_default` (`black/linegen.py`)

|      % | Samples | Callee              | Location            |
| -----: | ------: | ------------------- | ------------------- |
| 100.0% |      57 | `visit_default`     | `black/nodes.py`    |
|  35.1% |      20 | `generate_comments` | `black/comments.py` |
|  26.3% |      15 | `append`            | `black/lines.py`    |

##### `visit` (`black/nodes.py`)

|      % | Samples | Callee              | Location           |
| -----: | ------: | ------------------- | ------------------ |
| 100.0% |      57 | `visit_default`     | `black/linegen.py` |
|  98.2% |      56 | `visit_stmt`        | `black/linegen.py` |
|  94.7% |      54 | `visit_suite`       | `black/linegen.py` |
|  93.0% |      53 | `visit_funcdef`     | `black/linegen.py` |
|  68.4% |      39 | `visit_simple_stmt` | `black/linegen.py` |

##### `visit_default` (`black/nodes.py`)

|      % | Samples | Callee  | Location         |
| -----: | ------: | ------- | ---------------- |
| 100.0% |      57 | `visit` | `black/nodes.py` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 7.1% |      13 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 6.5% |      12 | `parse` (`ast.py`) ← `_parse_single_version` (`black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 4.9% |       9 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 4.9% |       9 | `__new__` (`blib2to3/pytree.py`) ← `convert` ← `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3.3% |       6 | `generate_comments` (`black/comments.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` |
| 2.7% |       5 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.2% |       4 | `get_features_used` (`black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.2% |       4 | `generate_comments` (`black/comments.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                          |
| 2.2% |       4 | `_stringify_ast` (`black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.6% |       3 | `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.6% |       3 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.6% |       3 | `<genexpr>` (`blib2to3/pgen2/tokenize.py`) ← `is_fstring_start` ← `generate_tokens` ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.1% |       2 | `_stringify_ast` (`black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.1% |       2 | `__init__` (`<string>`) ← `__init__` ← `line` (`black/linegen.py`) ← `visit_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.1% |       2 | `__str__` (`black/lines.py`) ← `line_to_string` ← `transform_line` (`black/linegen.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.1% |       2 | `generate_comments` (`black/comments.py`) ← `visit_default` (`black/linegen.py`) ← `visit_DEDENT` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.1% |       2 | `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.1% |       2 | `push` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.1% |       2 | `__init__` (`blib2to3/pytree.py`) ← `convert` ← `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.1% |       2 | `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                |

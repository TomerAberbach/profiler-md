# Sampling profile

Collected 196 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| ours     | 96.4% |     189 |
| stdlib   |  3.6% |       7 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                           | Location                     |
| ----: | ------: | -------------------------------------------------- | ---------------------------- |
| 10.7% |      21 | `_addtoken`                                        | `blib2to3/pgen2/parse.py`    |
|  7.7% |      15 | `__init__`                                         | `blib2to3/pytree.py`         |
|  7.1% |      14 | `visit_default`                                    | `black/linegen.py`           |
|  6.6% |      13 | `parse`                                            | `ast.py`                     |
|  5.6% |      11 | `generate_tokens`                                  | `blib2to3/pgen2/tokenize.py` |
|  4.6% |       9 | `__str__`                                          | `black/lines.py`             |
|  4.6% |       9 | `push`                                             | `blib2to3/pgen2/parse.py`    |
|  3.1% |       6 | `__str__`                                          | `blib2to3/pytree.py`         |
|  2.6% |       5 | `pop`                                              | `blib2to3/pgen2/parse.py`    |
|  2.6% |       5 | `append_comment`                                   | `black/lines.py`             |
|  2.6% |       5 | `_stringify_ast`                                   | `black/parsing.py`           |
|  2.0% |       4 | `contains_implicit_multiline_string_with_comments` | `black/lines.py`             |
|  2.0% |       4 | `visit`                                            | `black/nodes.py`             |
|  2.0% |       4 | `convert_one_fmt_off_pair`                         | `black/comments.py`          |
|  2.0% |       4 | `mark`                                             | `black/brackets.py`          |
|  1.5% |       3 | `pre_order`                                        | `blib2to3/pytree.py`         |
|  1.5% |       3 | `maybe_empty_lines`                                | `black/lines.py`             |
|  1.5% |       3 | `prev_sibling`                                     | `blib2to3/pytree.py`         |
|  1.5% |       3 | `prefix`                                           | `blib2to3/pytree.py`         |
|  1.5% |       3 | `_stringify_ast_with_new_parent`                   | `black/parsing.py`           |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Location                      |
| ----: | ------: | ----------------------------- |
| 28.6% |       6 | `blib2to3/pgen2/parse.py:297` |
| 14.3% |       3 | `blib2to3/pgen2/parse.py:295` |
| 14.3% |       3 | `blib2to3/pgen2/parse.py:298` |
|  9.5% |       2 | `blib2to3/pgen2/parse.py:314` |
|  9.5% |       2 | `blib2to3/pgen2/parse.py:328` |

##### `__init__` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 80.0% |      12 | `blib2to3/pytree.py:266` |
|  6.7% |       1 | `blib2to3/pytree.py:419` |
|  6.7% |       1 | `blib2to3/pytree.py:424` |
|  6.7% |       1 | `blib2to3/pytree.py:265` |

##### `visit_default` (`black/linegen.py`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |      14 | `black/linegen.py:158` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      13 | `ast.py:50` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|     % | Samples | Location                         |
| ----: | ------: | -------------------------------- |
| 36.4% |       4 | `blib2to3/pgen2/tokenize.py:875` |
| 18.2% |       2 | `blib2to3/pgen2/tokenize.py:624` |
| 18.2% |       2 | `blib2to3/pgen2/tokenize.py:911` |
|  9.1% |       1 | `blib2to3/pgen2/tokenize.py:901` |
|  9.1% |       1 | `blib2to3/pgen2/tokenize.py:907` |

##### `__str__` (`black/lines.py`)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 88.9% |       8 | `black/lines.py:501` |
| 11.1% |       1 | `black/lines.py:500` |

##### `push` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Location                      |
| ----: | ------: | ----------------------------- |
| 88.9% |       8 | `blib2to3/pgen2/parse.py:394` |
| 11.1% |       1 | `blib2to3/pgen2/parse.py:391` |

##### `__str__` (`blib2to3/pytree.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       6 | `blib2to3/pytree.py:446` |

##### `pop` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Location                      |
| ----: | ------: | ----------------------------- |
| 60.0% |       3 | `blib2to3/pgen2/parse.py:407` |
| 20.0% |       1 | `blib2to3/pgen2/parse.py:406` |
| 20.0% |       1 | `blib2to3/pgen2/parse.py:404` |

##### `append_comment` (`black/lines.py`)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 60.0% |       3 | `black/lines.py:395` |
| 40.0% |       2 | `black/lines.py:402` |

##### `_stringify_ast` (`black/parsing.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 60.0% |       3 | `black/parsing.py:217` |
| 20.0% |       1 | `black/parsing.py:197` |
| 20.0% |       1 | `black/parsing.py:187` |

##### `contains_implicit_multiline_string_with_comments` (`black/lines.py`)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 50.0% |       2 | `black/lines.py:263` |
| 50.0% |       2 | `black/lines.py:261` |

##### `visit` (`black/nodes.py`)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 25.0% |       1 | `black/nodes.py:181` |
| 25.0% |       1 | `black/nodes.py:163` |
| 25.0% |       1 | `black/nodes.py:173` |
| 25.0% |       1 | `black/nodes.py:174` |

##### `convert_one_fmt_off_pair` (`black/comments.py`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       4 | `black/comments.py:186` |

##### `mark` (`black/brackets.py`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 25.0% |       1 | `black/brackets.py:128` |
| 25.0% |       1 | `black/brackets.py:112` |
| 25.0% |       1 | `black/brackets.py:121` |
| 25.0% |       1 | `black/brackets.py:98`  |

##### `pre_order` (`blib2to3/pytree.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       3 | `blib2to3/pytree.py:318` |

##### `maybe_empty_lines` (`black/lines.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       3 | `black/lines.py:577` |

##### `prev_sibling` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 66.7% |       2 | `blib2to3/pytree.py:213` |
| 33.3% |       1 | `blib2to3/pytree.py:219` |

##### `prefix` (`blib2to3/pytree.py`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 66.7% |       2 | `blib2to3/pytree.py:320` |
| 33.3% |       1 | `blib2to3/pytree.py:482` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py`)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 66.7% |       2 | `black/parsing.py:170` |
| 33.3% |       1 | `black/parsing.py:169` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller     | Location                  |
| -----: | ------: | ---------- | ------------------------- |
| 100.0% |      21 | `addtoken` | `blib2to3/pgen2/parse.py` |

##### `__init__` (`blib2to3/pytree.py`)

|     % | Samples | Caller    | Location             |
| ----: | ------: | --------- | -------------------- |
| 93.3% |      14 | `convert` | `blib2to3/pytree.py` |
|  6.7% |       1 | `clone`   | `blib2to3/pytree.py` |

##### `visit_default` (`black/linegen.py`)

|     % | Samples | Caller              | Location           |
| ----: | ------: | ------------------- | ------------------ |
| 92.9% |      13 | `visit`             | `black/nodes.py`   |
|  7.1% |       1 | `visit_simple_stmt` | `black/linegen.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |      13 | `_parse_single_version` | `black/parsing.py` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|      % | Samples | Caller     | Location                   |
| -----: | ------: | ---------- | -------------------------- |
| 100.0% |      11 | `__next__` | `blib2to3/pgen2/driver.py` |

##### `__str__` (`black/lines.py`)

|     % | Samples | Caller             | Location            |
| ----: | ------: | ------------------ | ------------------- |
| 66.7% |       6 | `_format_str_once` | `black/__init__.py` |
| 22.2% |       2 | `line_to_string`   | `black/lines.py`    |
| 11.1% |       1 | `run_transformer`  | `black/linegen.py`  |

##### `push` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |       9 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `__str__` (`blib2to3/pytree.py`)

|      % | Samples | Caller    | Location         |
| -----: | ------: | --------- | ---------------- |
| 100.0% |       6 | `__str__` | `black/lines.py` |

##### `pop` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Caller      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |       5 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `append_comment` (`black/lines.py`)

|      % | Samples | Caller   | Location         |
| -----: | ------: | -------- | ---------------- |
| 100.0% |       5 | `append` | `black/lines.py` |

##### `_stringify_ast` (`black/parsing.py`)

|      % | Samples | Caller                           | Location           |
| -----: | ------: | -------------------------------- | ------------------ |
| 100.0% |       5 | `_stringify_ast_with_new_parent` | `black/parsing.py` |

##### `contains_implicit_multiline_string_with_comments` (`black/lines.py`)

|      % | Samples | Caller           | Location           |
| -----: | ------: | ---------------- | ------------------ |
| 100.0% |       4 | `transform_line` | `black/linegen.py` |

##### `visit` (`black/nodes.py`)

|      % | Samples | Caller          | Location         |
| -----: | ------: | --------------- | ---------------- |
| 100.0% |       4 | `visit_default` | `black/nodes.py` |

##### `convert_one_fmt_off_pair` (`black/comments.py`)

|      % | Samples | Caller              | Location            |
| -----: | ------: | ------------------- | ------------------- |
| 100.0% |       4 | `normalize_fmt_off` | `black/comments.py` |

##### `mark` (`black/brackets.py`)

|      % | Samples | Caller   | Location         |
| -----: | ------: | -------- | ---------------- |
| 100.0% |       4 | `append` | `black/lines.py` |

##### `pre_order` (`blib2to3/pytree.py`)

|      % | Samples | Caller      | Location             |
| -----: | ------: | ----------- | -------------------- |
| 100.0% |       3 | `pre_order` | `blib2to3/pytree.py` |

##### `maybe_empty_lines` (`black/lines.py`)

|      % | Samples | Caller             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |       3 | `_format_str_once` | `black/__init__.py` |

##### `prev_sibling` (`blib2to3/pytree.py`)

|     % | Samples | Caller           | Location         |
| ----: | ------: | ---------------- | ---------------- |
| 66.7% |       2 | `preceding_leaf` | `black/nodes.py` |
| 33.3% |       1 | `whitespace`     | `black/nodes.py` |

##### `prefix` (`blib2to3/pytree.py`)

|     % | Samples | Caller                       | Location           |
| ----: | ------: | ---------------------------- | ------------------ |
| 66.7% |       2 | `normalize_invisible_parens` | `black/linegen.py` |
| 33.3% |       1 | `append`                     | `black/lines.py`   |

##### `_stringify_ast_with_new_parent` (`black/parsing.py`)

|      % | Samples | Caller           | Location           |
| -----: | ------: | ---------------- | ------------------ |
| 100.0% |       3 | `_stringify_ast` | `black/parsing.py` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                          | Location                   |
| ----: | ------: | --------------------------------- | -------------------------- |
| 94.4% |     185 | `format_file_contents`            | `black/__init__.py`        |
| 94.4% |     185 | `format_file_in_place`            | `black/__init__.py`        |
| 94.4% |     185 | `reformat_one`                    | `black/__init__.py`        |
| 94.4% |     185 | `main`                            | `black/__init__.py`        |
| 94.4% |     185 | `new_func`                        | `click/decorators.py`      |
| 94.4% |     185 | `invoke`                          | `click/core.py`            |
| 94.4% |     185 | `main`                            | `click/core.py`            |
| 94.4% |     185 | `__call__`                        | `click/core.py`            |
| 94.4% |     185 | `patched_main`                    | `black/__init__.py`        |
| 94.4% |     185 | `<module>`                        | `black/__main__.py`        |
| 83.7% |     164 | `_format_str_once`                | `black/__init__.py`        |
| 51.0% |     100 | `format_str`                      | `black/__init__.py`        |
| 43.4% |      85 | `check_stability_and_equivalence` | `black/__init__.py`        |
| 37.2% |      73 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |
| 37.2% |      73 | `parse_string`                    | `blib2to3/pgen2/driver.py` |
| 37.2% |      73 | `lib2to3_parse`                   | `black/parsing.py`         |
| 32.7% |      64 | `assert_stable`                   | `black/__init__.py`        |
| 27.6% |      54 | `_addtoken`                       | `blib2to3/pgen2/parse.py`  |
| 27.6% |      54 | `addtoken`                        | `blib2to3/pgen2/parse.py`  |
| 22.4% |      44 | `visit`                           | `black/nodes.py`           |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `format_file_contents` (`black/__init__.py`)

|     % | Samples | Callee                            | Location            |
| ----: | ------: | --------------------------------- | ------------------- |
| 54.1% |     100 | `format_str`                      | `black/__init__.py` |
| 45.9% |      85 | `check_stability_and_equivalence` | `black/__init__.py` |

##### `format_file_in_place` (`black/__init__.py`)

|      % | Samples | Callee                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     185 | `format_file_contents` | `black/__init__.py` |

##### `reformat_one` (`black/__init__.py`)

|      % | Samples | Callee                 | Location            |
| -----: | ------: | ---------------------- | ------------------- |
| 100.0% |     185 | `format_file_in_place` | `black/__init__.py` |

##### `main` (`black/__init__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     185 | `reformat_one` | `black/__init__.py` |

##### `new_func` (`click/decorators.py`)

|      % | Samples | Callee | Location            |
| -----: | ------: | ------ | ------------------- |
| 100.0% |     185 | `main` | `black/__init__.py` |

##### `invoke` (`click/core.py`)

|      % | Samples | Callee     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     185 | `new_func` | `click/decorators.py` |
| 100.0% |     185 | `invoke`   | `click/core.py`       |

##### `main` (`click/core.py`)

|      % | Samples | Callee   | Location        |
| -----: | ------: | -------- | --------------- |
| 100.0% |     185 | `invoke` | `click/core.py` |

##### `__call__` (`click/core.py`)

|      % | Samples | Callee | Location        |
| -----: | ------: | ------ | --------------- |
| 100.0% |     185 | `main` | `click/core.py` |

##### `patched_main` (`black/__init__.py`)

|      % | Samples | Callee     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |     185 | `__call__` | `click/core.py` |

##### `<module>` (`black/__main__.py`)

|      % | Samples | Callee         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |     185 | `patched_main` | `black/__init__.py` |

##### `_format_str_once` (`black/__init__.py`)

|     % | Samples | Callee              | Location           |
| ----: | ------: | ------------------- | ------------------ |
| 44.5% |      73 | `lib2to3_parse`     | `black/parsing.py` |
| 26.8% |      44 | `visit`             | `black/nodes.py`   |
| 11.0% |      18 | `transform_line`    | `black/linegen.py` |
|  6.7% |      11 | `__str__`           | `black/lines.py`   |
|  3.7% |       6 | `maybe_empty_lines` | `black/lines.py`   |

##### `format_str` (`black/__init__.py`)

|      % | Samples | Callee             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |     100 | `_format_str_once` | `black/__init__.py` |

##### `check_stability_and_equivalence` (`black/__init__.py`)

|     % | Samples | Callee              | Location            |
| ----: | ------: | ------------------- | ------------------- |
| 75.3% |      64 | `assert_stable`     | `black/__init__.py` |
| 24.7% |      21 | `assert_equivalent` | `black/__init__.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|     % | Samples | Callee                      | Location                   |
| ----: | ------: | --------------------------- | -------------------------- |
| 74.0% |      54 | `addtoken`                  | `blib2to3/pgen2/parse.py`  |
| 20.5% |      15 | `__next__`                  | `blib2to3/pgen2/driver.py` |
|  2.7% |       2 | `_partially_consume_prefix` | `blib2to3/pgen2/driver.py` |

##### `parse_string` (`blib2to3/pgen2/driver.py`)

|      % | Samples | Callee         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      73 | `parse_tokens` | `blib2to3/pgen2/driver.py` |

##### `lib2to3_parse` (`black/parsing.py`)

|      % | Samples | Callee         | Location                   |
| -----: | ------: | -------------- | -------------------------- |
| 100.0% |      73 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `assert_stable` (`black/__init__.py`)

|      % | Samples | Callee             | Location            |
| -----: | ------: | ------------------ | ------------------- |
| 100.0% |      64 | `_format_str_once` | `black/__init__.py` |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|     % | Samples | Callee  | Location                  |
| ----: | ------: | ------- | ------------------------- |
| 35.2% |      19 | `pop`   | `blib2to3/pgen2/parse.py` |
| 16.7% |       9 | `push`  | `blib2to3/pgen2/parse.py` |
|  9.3% |       5 | `shift` | `blib2to3/pgen2/parse.py` |

##### `addtoken` (`blib2to3/pgen2/parse.py`)

|      % | Samples | Callee      | Location                  |
| -----: | ------: | ----------- | ------------------------- |
| 100.0% |      54 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `visit` (`black/nodes.py`)

|      % | Samples | Callee              | Location           |
| -----: | ------: | ------------------- | ------------------ |
| 100.0% |      44 | `visit_default`     | `black/linegen.py` |
|  97.7% |      43 | `visit_stmt`        | `black/linegen.py` |
|  90.9% |      40 | `visit_suite`       | `black/linegen.py` |
|  88.6% |      39 | `visit_funcdef`     | `black/linegen.py` |
|  63.6% |      28 | `visit_simple_stmt` | `black/linegen.py` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.1% |      14 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 6.6% |      13 | `parse` (`ast.py`) ← `_parse_single_version` (`black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 6.6% |      13 | `__init__` (`blib2to3/pytree.py`) ← `convert` ← `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 5.1% |      10 | `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                    |
| 4.1% |       8 | `push` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.6% |       7 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.6% |       7 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 3.1% |       6 | `__str__` (`black/lines.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.6% |       5 | `__str__` (`blib2to3/pytree.py`) ← `__str__` (`black/lines.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.0% |       4 | `contains_implicit_multiline_string_with_comments` (`black/lines.py`) ← `transform_line` (`black/linegen.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.0% |       4 | `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.0% |       4 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.5% |       3 | `maybe_empty_lines` (`black/lines.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.5% |       3 | `append_comment` (`black/lines.py`) ← `append` ← `bracket_split_build_line` (`black/linegen.py`) ← `_first_right_hand_split` ← `_maybe_split_omitting_optional_parens` ← `right_hand_split` ← `_rhs` ← `run_transformer` ← `transform_line` ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.5% |       3 | `convert_one_fmt_off_pair` (`black/comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.0% |       2 | `_partially_consume_prefix` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.0% |       2 | `append_comment` (`black/lines.py`) ← `append` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` |
| 1.0% |       2 | `leaves` (`blib2to3/pytree.py`) ← `leaves` ← `leaves` ← `leaves` ← `leaves` ← `leaves` ← `leaves` ← `leaves` ← `convert_one_fmt_off_pair` (`black/comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.0% |       2 | `shift` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.0% |       2 | `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

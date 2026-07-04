# Sampling profile

Collected 189 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| ours     | 93.7% |     177 |
| stdlib   |  6.3% |      12 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                     | Location                   |
| ----: | ------: | ---------------------------- | -------------------------- |
| 10.1% |      19 | `_addtoken`                  | blib2to3/pgen2/parse.py    |
|  4.8% |       9 | `visit_default`              | black/linegen.py           |
|  4.8% |       9 | `pop`                        | blib2to3/pgen2/parse.py    |
|  4.8% |       9 | `parse`                      | ast.py                     |
|  4.2% |       8 | `mark`                       | black/brackets.py          |
|  4.2% |       8 | `__init__`                   | blib2to3/pytree.py         |
|  3.7% |       7 | `generate_tokens`            | blib2to3/pgen2/tokenize.py |
|  3.2% |       6 | `normalize_trailing_prefix`  | black/comments.py          |
|  2.6% |       5 | `__str__`                    | black/lines.py             |
|  2.6% |       5 | `hug_power_op`               | black/trans.py             |
|  2.1% |       4 | `visit`                      | black/nodes.py             |
|  2.1% |       4 | `prev_sibling`               | blib2to3/pytree.py         |
|  2.1% |       4 | `_stringify_ast`             | black/parsing.py           |
|  2.1% |       4 | `normalize_invisible_parens` | black/linegen.py           |
|  2.1% |       4 | `transform_line`             | black/linegen.py           |
|  2.1% |       4 | `convert`                    | blib2to3/pytree.py         |
|  2.1% |       4 | `get_features_used`          | black/__init__.py          |
|  2.1% |       4 | `current`                    | blib2to3/pgen2/tokenize.py |
|  1.6% |       3 | `generate_comments`          | black/comments.py          |
|  1.6% |       3 | `whitespace`                 | black/nodes.py             |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `_addtoken` (blib2to3/pgen2/parse.py)

|     % | Samples | Location                    |
| ----: | ------: | --------------------------- |
| 21.1% |       4 | blib2to3/pgen2/parse.py:298 |
| 15.8% |       3 | blib2to3/pgen2/parse.py:326 |
| 10.5% |       2 | blib2to3/pgen2/parse.py:295 |
| 10.5% |       2 | blib2to3/pgen2/parse.py:297 |
| 10.5% |       2 | blib2to3/pgen2/parse.py:303 |

##### `visit_default` (black/linegen.py)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 77.8% |       7 | black/linegen.py:158 |
| 22.2% |       2 | black/linegen.py:134 |

##### `pop` (blib2to3/pgen2/parse.py)

|     % | Samples | Location                    |
| ----: | ------: | --------------------------- |
| 44.4% |       4 | blib2to3/pgen2/parse.py:408 |
| 22.2% |       2 | blib2to3/pgen2/parse.py:407 |
| 22.2% |       2 | blib2to3/pgen2/parse.py:400 |
| 11.1% |       1 | blib2to3/pgen2/parse.py:398 |

##### `parse` (ast.py)

|      % | Samples | Location  |
| -----: | ------: | --------- |
| 100.0% |       9 | ast.py:50 |

##### `mark` (black/brackets.py)

|     % | Samples | Location              |
| ----: | ------: | --------------------- |
| 25.0% |       2 | black/brackets.py:99  |
| 25.0% |       2 | black/brackets.py:112 |
| 25.0% |       2 | black/brackets.py:121 |
| 12.5% |       1 | black/brackets.py:70  |
| 12.5% |       1 | black/brackets.py:122 |

##### `__init__` (blib2to3/pytree.py)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 75.0% |       6 | blib2to3/pytree.py:266 |
| 12.5% |       1 | blib2to3/pytree.py:268 |
| 12.5% |       1 | blib2to3/pytree.py:424 |

##### `generate_tokens` (blib2to3/pgen2/tokenize.py)

|     % | Samples | Location                       |
| ----: | ------: | ------------------------------ |
| 57.1% |       4 | blib2to3/pgen2/tokenize.py:875 |
| 14.3% |       1 | blib2to3/pgen2/tokenize.py:624 |
| 14.3% |       1 | blib2to3/pgen2/tokenize.py:635 |
| 14.3% |       1 | blib2to3/pgen2/tokenize.py:781 |

##### `normalize_trailing_prefix` (black/comments.py)

|     % | Samples | Location              |
| ----: | ------: | --------------------- |
| 66.7% |       4 | black/comments.py:134 |
| 33.3% |       2 | black/comments.py:136 |

##### `__str__` (black/lines.py)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 60.0% |       3 | black/lines.py:501 |
| 20.0% |       1 | black/lines.py:500 |
| 20.0% |       1 | black/lines.py:497 |

##### `hug_power_op` (black/trans.py)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 60.0% |       3 | black/trans.py:85 |
| 40.0% |       2 | black/trans.py:95 |

##### `visit` (black/nodes.py)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 75.0% |       3 | black/nodes.py:181 |
| 25.0% |       1 | black/nodes.py:185 |

##### `prev_sibling` (blib2to3/pytree.py)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 50.0% |       2 | blib2to3/pytree.py:219 |
| 25.0% |       1 | blib2to3/pytree.py:216 |
| 25.0% |       1 | blib2to3/pytree.py:207 |

##### `_stringify_ast` (black/parsing.py)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 25.0% |       1 | black/parsing.py:176 |
| 25.0% |       1 | black/parsing.py:187 |
| 25.0% |       1 | black/parsing.py:240 |
| 25.0% |       1 | black/parsing.py:244 |

##### `normalize_invisible_parens` (black/linegen.py)

|     % | Samples | Location              |
| ----: | ------: | --------------------- |
| 50.0% |       2 | black/linegen.py:1351 |
| 25.0% |       1 | black/linegen.py:1354 |
| 25.0% |       1 | black/linegen.py:1412 |

##### `transform_line` (black/linegen.py)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 50.0% |       2 | black/linegen.py:714 |
| 25.0% |       1 | black/linegen.py:601 |
| 25.0% |       1 | black/linegen.py:715 |

##### `convert` (blib2to3/pytree.py)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 75.0% |       3 | blib2to3/pytree.py:486 |
| 25.0% |       1 | blib2to3/pytree.py:503 |

##### `get_features_used` (black/__init__.py)

|     % | Samples | Location               |
| ----: | ------: | ---------------------- |
| 50.0% |       2 | black/__init__.py:1367 |
| 25.0% |       1 | black/__init__.py:1386 |
| 25.0% |       1 | black/__init__.py:1440 |

##### `current` (blib2to3/pgen2/tokenize.py)

|      % | Samples | Location                       |
| -----: | ------: | ------------------------------ |
| 100.0% |       4 | blib2to3/pgen2/tokenize.py:534 |

##### `generate_comments` (black/comments.py)

|     % | Samples | Location             |
| ----: | ------: | -------------------- |
| 66.7% |       2 | black/comments.py:72 |
| 33.3% |       1 | black/comments.py:52 |

##### `whitespace` (black/nodes.py)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 33.3% |       1 | black/nodes.py:201 |
| 33.3% |       1 | black/nodes.py:206 |
| 33.3% |       1 | black/nodes.py:323 |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `_addtoken` (blib2to3/pgen2/parse.py)

|      % | Samples | Caller     | Location                |
| -----: | ------: | ---------- | ----------------------- |
| 100.0% |      19 | `addtoken` | blib2to3/pgen2/parse.py |

##### `visit_default` (black/linegen.py)

|     % | Samples | Caller        | Location         |
| ----: | ------: | ------------- | ---------------- |
| 88.9% |       8 | `visit`       | black/nodes.py   |
| 11.1% |       1 | `visit_power` | black/linegen.py |

##### `pop` (blib2to3/pgen2/parse.py)

|      % | Samples | Caller      | Location                |
| -----: | ------: | ----------- | ----------------------- |
| 100.0% |       9 | `_addtoken` | blib2to3/pgen2/parse.py |

##### `parse` (ast.py)

|      % | Samples | Caller                  | Location         |
| -----: | ------: | ----------------------- | ---------------- |
| 100.0% |       9 | `_parse_single_version` | black/parsing.py |

##### `mark` (black/brackets.py)

|      % | Samples | Caller   | Location       |
| -----: | ------: | -------- | -------------- |
| 100.0% |       8 | `append` | black/lines.py |

##### `__init__` (blib2to3/pytree.py)

|      % | Samples | Caller    | Location           |
| -----: | ------: | --------- | ------------------ |
| 100.0% |       8 | `convert` | blib2to3/pytree.py |

##### `generate_tokens` (blib2to3/pgen2/tokenize.py)

|      % | Samples | Caller     | Location                 |
| -----: | ------: | ---------- | ------------------------ |
| 100.0% |       7 | `__next__` | blib2to3/pgen2/driver.py |

##### `normalize_trailing_prefix` (black/comments.py)

|      % | Samples | Caller              | Location          |
| -----: | ------: | ------------------- | ----------------- |
| 100.0% |       6 | `generate_comments` | black/comments.py |

##### `__str__` (black/lines.py)

|     % | Samples | Caller             | Location          |
| ----: | ------: | ------------------ | ----------------- |
| 60.0% |       3 | `line_to_string`   | black/lines.py    |
| 40.0% |       2 | `_format_str_once` | black/__init__.py |

##### `hug_power_op` (black/trans.py)

|     % | Samples | Caller                              | Location         |
| ----: | ------: | ----------------------------------- | ---------------- |
| 80.0% |       4 | `_hugging_power_ops_line_to_string` | black/linegen.py |
| 20.0% |       1 | `run_transformer`                   | black/linegen.py |

##### `visit` (black/nodes.py)

|      % | Samples | Caller          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |       4 | `visit_default` | black/nodes.py |

##### `prev_sibling` (blib2to3/pytree.py)

|     % | Samples | Caller              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 75.0% |       3 | `preceding_leaf`    | black/nodes.py |
| 25.0% |       1 | `prev_siblings_are` | black/nodes.py |

##### `_stringify_ast` (black/parsing.py)

|      % | Samples | Caller                           | Location         |
| -----: | ------: | -------------------------------- | ---------------- |
| 100.0% |       4 | `_stringify_ast_with_new_parent` | black/parsing.py |

##### `normalize_invisible_parens` (black/linegen.py)

|      % | Samples | Caller       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |       4 | `visit_stmt` | black/linegen.py |

##### `transform_line` (black/linegen.py)

|     % | Samples | Caller             | Location          |
| ----: | ------: | ------------------ | ----------------- |
| 75.0% |       3 | `_format_str_once` | black/__init__.py |
| 25.0% |       1 | `run_transformer`  | black/linegen.py  |

##### `convert` (blib2to3/pytree.py)

|     % | Samples | Caller  | Location                |
| ----: | ------: | ------- | ----------------------- |
| 75.0% |       3 | `pop`   | blib2to3/pgen2/parse.py |
| 25.0% |       1 | `shift` | blib2to3/pgen2/parse.py |

##### `get_features_used` (black/__init__.py)

|      % | Samples | Caller                   | Location          |
| -----: | ------: | ------------------------ | ----------------- |
| 100.0% |       4 | `detect_target_versions` | black/__init__.py |

##### `current` (blib2to3/pgen2/tokenize.py)

|      % | Samples | Caller            | Location                   |
| -----: | ------: | ----------------- | -------------------------- |
| 100.0% |       4 | `generate_tokens` | blib2to3/pgen2/tokenize.py |

##### `generate_comments` (black/comments.py)

|      % | Samples | Caller          | Location         |
| -----: | ------: | --------------- | ---------------- |
| 100.0% |       3 | `visit_default` | black/linegen.py |

##### `whitespace` (black/nodes.py)

|      % | Samples | Caller   | Location       |
| -----: | ------: | -------- | -------------- |
| 100.0% |       3 | `append` | black/lines.py |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                          | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 92.1% |     174 | `format_file_contents`            | black/__init__.py        |
| 92.1% |     174 | `format_file_in_place`            | black/__init__.py        |
| 92.1% |     174 | `reformat_one`                    | black/__init__.py        |
| 92.1% |     174 | `main`                            | black/__init__.py        |
| 92.1% |     174 | `new_func`                        | click/decorators.py      |
| 92.1% |     174 | `invoke`                          | click/core.py            |
| 92.1% |     174 | `main`                            | click/core.py            |
| 92.1% |     174 | `__call__`                        | click/core.py            |
| 92.1% |     174 | `patched_main`                    | black/__init__.py        |
| 92.1% |     174 | `<module>`                        | black/__main__.py        |
| 82.0% |     155 | `_format_str_once`                | black/__init__.py        |
| 59.8% |     113 | `format_str`                      | black/__init__.py        |
| 35.4% |      67 | `visit_default`                   | black/linegen.py         |
| 35.4% |      67 | `visit`                           | black/nodes.py           |
| 35.4% |      67 | `visit_default`                   | black/nodes.py           |
| 34.4% |      65 | `visit_stmt`                      | black/linegen.py         |
| 34.4% |      65 | `visit_funcdef`                   | black/linegen.py         |
| 33.9% |      64 | `visit_suite`                     | black/linegen.py         |
| 32.3% |      61 | `check_stability_and_equivalence` | black/__init__.py        |
| 29.6% |      56 | `parse_tokens`                    | blib2to3/pgen2/driver.py |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `format_file_contents` (black/__init__.py)

|     % | Samples | Callee                            | Location          |
| ----: | ------: | --------------------------------- | ----------------- |
| 64.9% |     113 | `format_str`                      | black/__init__.py |
| 35.1% |      61 | `check_stability_and_equivalence` | black/__init__.py |

##### `format_file_in_place` (black/__init__.py)

|      % | Samples | Callee                 | Location          |
| -----: | ------: | ---------------------- | ----------------- |
| 100.0% |     174 | `format_file_contents` | black/__init__.py |

##### `reformat_one` (black/__init__.py)

|      % | Samples | Callee                 | Location          |
| -----: | ------: | ---------------------- | ----------------- |
| 100.0% |     174 | `format_file_in_place` | black/__init__.py |

##### `main` (black/__init__.py)

|      % | Samples | Callee         | Location          |
| -----: | ------: | -------------- | ----------------- |
| 100.0% |     174 | `reformat_one` | black/__init__.py |

##### `new_func` (click/decorators.py)

|      % | Samples | Callee | Location          |
| -----: | ------: | ------ | ----------------- |
| 100.0% |     174 | `main` | black/__init__.py |

##### `invoke` (click/core.py)

|      % | Samples | Callee     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |     174 | `new_func` | click/decorators.py |
| 100.0% |     174 | `invoke`   | click/core.py       |

##### `main` (click/core.py)

|      % | Samples | Callee   | Location      |
| -----: | ------: | -------- | ------------- |
| 100.0% |     174 | `invoke` | click/core.py |

##### `__call__` (click/core.py)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |     174 | `main` | click/core.py |

##### `patched_main` (black/__init__.py)

|      % | Samples | Callee     | Location      |
| -----: | ------: | ---------- | ------------- |
| 100.0% |     174 | `__call__` | click/core.py |

##### `<module>` (black/__main__.py)

|      % | Samples | Callee         | Location          |
| -----: | ------: | -------------- | ----------------- |
| 100.0% |     174 | `patched_main` | black/__init__.py |

##### `_format_str_once` (black/__init__.py)

|     % | Samples | Callee                   | Location          |
| ----: | ------: | ------------------------ | ----------------- |
| 43.2% |      67 | `visit`                  | black/nodes.py    |
| 36.1% |      56 | `lib2to3_parse`          | black/parsing.py  |
| 10.3% |      16 | `transform_line`         | black/linegen.py  |
|  3.2% |       5 | `normalize_fmt_off`      | black/comments.py |
|  3.2% |       5 | `detect_target_versions` | black/__init__.py |

##### `format_str` (black/__init__.py)

|      % | Samples | Callee             | Location          |
| -----: | ------: | ------------------ | ----------------- |
| 100.0% |     113 | `_format_str_once` | black/__init__.py |

##### `visit_default` (black/linegen.py)

|      % | Samples | Callee              | Location          |
| -----: | ------: | ------------------- | ----------------- |
| 100.0% |      67 | `visit_default`     | black/nodes.py    |
|  37.3% |      25 | `append`            | black/lines.py    |
|  19.4% |      13 | `generate_comments` | black/comments.py |
|   3.0% |       2 | `any_open_brackets` | black/brackets.py |

##### `visit` (black/nodes.py)

|      % | Samples | Callee              | Location         |
| -----: | ------: | ------------------- | ---------------- |
| 100.0% |      67 | `visit_default`     | black/linegen.py |
|  97.0% |      65 | `visit_stmt`        | black/linegen.py |
|  97.0% |      65 | `visit_funcdef`     | black/linegen.py |
|  95.5% |      64 | `visit_suite`       | black/linegen.py |
|  56.7% |      38 | `visit_simple_stmt` | black/linegen.py |

##### `visit_default` (black/nodes.py)

|      % | Samples | Callee  | Location       |
| -----: | ------: | ------- | -------------- |
| 100.0% |      67 | `visit` | black/nodes.py |

##### `visit_stmt` (black/linegen.py)

|      % | Samples | Callee                       | Location         |
| -----: | ------: | ---------------------------- | ---------------- |
| 100.0% |      65 | `visit`                      | black/nodes.py   |
|   9.2% |       6 | `normalize_invisible_parens` | black/linegen.py |
|   1.5% |       1 | `line`                       | black/linegen.py |

##### `visit_funcdef` (black/linegen.py)

|      % | Samples | Callee  | Location       |
| -----: | ------: | ------- | -------------- |
| 100.0% |      65 | `visit` | black/nodes.py |

##### `visit_suite` (black/linegen.py)

|      % | Samples | Callee          | Location         |
| -----: | ------: | --------------- | ---------------- |
| 100.0% |      64 | `visit_default` | black/linegen.py |

##### `check_stability_and_equivalence` (black/__init__.py)

|     % | Samples | Callee              | Location          |
| ----: | ------: | ------------------- | ----------------- |
| 70.5% |      43 | `assert_stable`     | black/__init__.py |
| 29.5% |      18 | `assert_equivalent` | black/__init__.py |

##### `parse_tokens` (blib2to3/pgen2/driver.py)

|     % | Samples | Callee     | Location                 |
| ----: | ------: | ---------- | ------------------------ |
| 76.8% |      43 | `addtoken` | blib2to3/pgen2/parse.py  |
| 19.6% |      11 | `__next__` | blib2to3/pgen2/driver.py |
|  1.8% |       1 | `debug`    | logging/__init__.py      |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (black/__init__.py) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (click/decorators.py) ← `invoke` (click/core.py) ← `invoke` ← `main` ← `__call__` ← `patched_main` (black/__init__.py) ← `<module>` (black/__main__.py)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.3% |      12 | `_addtoken` (blib2to3/pgen2/parse.py) ← `addtoken` ← `parse_tokens` (blib2to3/pgen2/driver.py) ← `parse_string` ← `lib2to3_parse` (black/parsing.py) ← `_format_str_once` (black/__init__.py) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4.8% |       9 | `parse` (ast.py) ← `_parse_single_version` (black/parsing.py) ← `parse_ast` ← `assert_equivalent` (black/__init__.py) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 4.2% |       8 | `pop` (blib2to3/pgen2/parse.py) ← `_addtoken` ← `addtoken` ← `parse_tokens` (blib2to3/pgen2/driver.py) ← `parse_string` ← `lib2to3_parse` (black/parsing.py) ← `_format_str_once` (black/__init__.py) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 3.7% |       7 | `generate_tokens` (blib2to3/pgen2/tokenize.py) ← `__next__` (blib2to3/pgen2/driver.py) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (black/parsing.py) ← `_format_str_once` (black/__init__.py) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3.7% |       7 | `_addtoken` (blib2to3/pgen2/parse.py) ← `addtoken` ← `parse_tokens` (blib2to3/pgen2/driver.py) ← `parse_string` ← `lib2to3_parse` (black/parsing.py) ← `_format_str_once` (black/__init__.py) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.7% |       7 | `__init__` (blib2to3/pytree.py) ← `convert` ← `pop` (blib2to3/pgen2/parse.py) ← `_addtoken` ← `addtoken` ← `parse_tokens` (blib2to3/pgen2/driver.py) ← `parse_string` ← `lib2to3_parse` (black/parsing.py) ← `_format_str_once` (black/__init__.py) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3.2% |       6 | `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit_power` ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_stmt` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit_simple_stmt` ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit_suite` ← `visit` (black/nodes.py) ← `visit_funcdef` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `_format_str_once` (black/__init__.py) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2.1% |       4 | `hug_power_op` (black/trans.py) ← `_hugging_power_ops_line_to_string` (black/linegen.py) ← `transform_line` ← `_format_str_once` (black/__init__.py) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.1% |       4 | `current` (blib2to3/pgen2/tokenize.py) ← `generate_tokens` ← `__next__` (blib2to3/pgen2/driver.py) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (black/parsing.py) ← `_format_str_once` (black/__init__.py) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.6% |       3 | `_stringify_ast` (black/parsing.py) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (black/__init__.py) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.6% |       3 | `transform_line` (black/linegen.py) ← `_format_str_once` (black/__init__.py) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.6% |       3 | `get_features_used` (black/__init__.py) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.6% |       3 | `assert_equivalent` (black/__init__.py) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.6% |       3 | `convert` (blib2to3/pytree.py) ← `pop` (blib2to3/pgen2/parse.py) ← `_addtoken` ← `addtoken` ← `parse_tokens` (blib2to3/pgen2/driver.py) ← `parse_string` ← `lib2to3_parse` (black/parsing.py) ← `_format_str_once` (black/__init__.py) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.6% |       3 | `convert_one_fmt_off_pair` (black/comments.py) ← `normalize_fmt_off` ← `_format_str_once` (black/__init__.py) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.1% |       2 | `prev_sibling` (blib2to3/pytree.py) ← `preceding_leaf` (black/nodes.py) ← `whitespace` ← `append` (black/lines.py) ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit_power` ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_stmt` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit_simple_stmt` ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit_suite` ← `visit` (black/nodes.py) ← `visit_funcdef` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `_format_str_once` (black/__init__.py) ← `format_str`                                                                                                                                                                                                  |
| 1.1% |       2 | `mark` (black/brackets.py) ← `append` (black/lines.py) ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_stmt` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit_suite` ← `visit` (black/nodes.py) ← `visit_funcdef` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `_format_str_once` (black/__init__.py) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.1% |       2 | `normalize_invisible_parens` (black/linegen.py) ← `visit_stmt` ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit_suite` ← `visit` (black/nodes.py) ← `visit_stmt` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit_suite` ← `visit` (black/nodes.py) ← `visit_funcdef` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit_suite` ← `visit` (black/nodes.py) ← `visit_stmt` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `_format_str_once` (black/__init__.py) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.1% |       2 | `append` (black/lines.py) ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_stmt` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit_simple_stmt` ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit_suite` ← `visit` (black/nodes.py) ← `visit_stmt` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit_suite` ← `visit` (black/nodes.py) ← `visit_stmt` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit_suite` ← `visit` (black/nodes.py) ← `visit_funcdef` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_decorators` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit_suite` ← `visit` (black/nodes.py) ← `visit_stmt` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `_format_str_once` (black/__init__.py) ← `format_str` |
| 1.1% |       2 | `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit_power` ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_stmt` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit_simple_stmt` ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit_suite` ← `visit` (black/nodes.py) ← `visit_funcdef` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit_suite` ← `visit` (black/nodes.py) ← `visit_stmt` (black/linegen.py) ← `visit` (black/nodes.py) ← `visit_default` ← `visit_default` (black/linegen.py) ← `visit` (black/nodes.py) ← `_format_str_once` (black/__init__.py) ← `format_str`                                                                                                           |

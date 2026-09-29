# Sampling profile diff

Collected 215 samples → 208 samples (-7 samples, -3.3%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Ours             |  -4.4% |    -9 | 94.9% → 93.8% | 204 → 195 |
| Unknown          | +33.3% |    +3 |   4.2% → 5.8% |    9 → 12 |
| Standard library | -50.0% |    -1 |   0.9% → 0.5% |     2 → 1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                         | Location                  |
| ------: | ----: | ----------: | ------: | -------------------------------- | ------------------------- |
| +333.3% |   +10 | 1.4% → 6.3% |  3 → 13 | `push`                           | `blib2to3/pgen2/parse.py` |
| +350.0% |    +7 | 0.9% → 4.3% |   2 → 9 | `pop`                            | `blib2to3/pgen2/parse.py` |
|     new |    +5 | 0.0% → 2.4% |   0 → 5 | `_stringify_ast_with_new_parent` | `black/parsing.py`        |
| +400.0% |    +4 | 0.5% → 2.4% |   1 → 5 | `append`                         | `black/lines.py`          |
|  +26.7% |    +4 | 7.0% → 9.1% | 15 → 19 | `_addtoken`                      | `blib2to3/pgen2/parse.py` |
| +400.0% |    +4 | 0.5% → 2.4% |   1 → 5 | `convert_one_fmt_off_pair`       | `black/comments.py`       |
|  +75.0% |    +3 | 1.9% → 3.4% |   4 → 7 | `mark`                           | `black/brackets.py`       |
| +300.0% |    +3 | 0.5% → 1.9% |   1 → 4 | `__init__`                       | `blib2to3/pytree.py`      |
|  +33.3% |    +3 | 4.2% → 5.8% |  9 → 12 | `(anonymous)`                    | `<unknown>`               |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `clone`                          | `blib2to3/pytree.py`      |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `remove`                         | `blib2to3/pytree.py`      |
| +100.0% |    +1 | 0.5% → 1.0% |   1 → 2 | `prefix`                         | `blib2to3/pytree.py`      |
|  +14.3% |    +1 | 3.3% → 3.8% |   7 → 8 | `visit`                          | `black/nodes.py`          |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `visit_simple_stmt`              | `black/linegen.py`        |
| +100.0% |    +1 | 0.5% → 1.0% |   1 → 2 | `_format_str_once`               | `black/__init__.py`       |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `addtoken`                       | `blib2to3/pgen2/parse.py` |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `is_split_before_delimiter`      | `black/brackets.py`       |
|  +25.0% |    +1 | 1.9% → 2.4% |   4 → 5 | `__str__`                        | `black/lines.py`          |
| +100.0% |    +1 | 0.5% → 1.0% |   1 → 2 | `transform_line`                 | `black/linegen.py`        |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `is_docstring`                   | `black/nodes.py`          |

##### Ours

|  Change | Delta |           % | Samples | Function                         | Location                  |
| ------: | ----: | ----------: | ------: | -------------------------------- | ------------------------- |
| +333.3% |   +10 | 1.4% → 6.3% |  3 → 13 | `push`                           | `blib2to3/pgen2/parse.py` |
| +350.0% |    +7 | 0.9% → 4.3% |   2 → 9 | `pop`                            | `blib2to3/pgen2/parse.py` |
|     new |    +5 | 0.0% → 2.4% |   0 → 5 | `_stringify_ast_with_new_parent` | `black/parsing.py`        |
| +400.0% |    +4 | 0.5% → 2.4% |   1 → 5 | `append`                         | `black/lines.py`          |
|  +26.7% |    +4 | 7.0% → 9.1% | 15 → 19 | `_addtoken`                      | `blib2to3/pgen2/parse.py` |
| +400.0% |    +4 | 0.5% → 2.4% |   1 → 5 | `convert_one_fmt_off_pair`       | `black/comments.py`       |
|  +75.0% |    +3 | 1.9% → 3.4% |   4 → 7 | `mark`                           | `black/brackets.py`       |
| +300.0% |    +3 | 0.5% → 1.9% |   1 → 4 | `__init__`                       | `blib2to3/pytree.py`      |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `clone`                          | `blib2to3/pytree.py`      |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `remove`                         | `blib2to3/pytree.py`      |
| +100.0% |    +1 | 0.5% → 1.0% |   1 → 2 | `prefix`                         | `blib2to3/pytree.py`      |
|  +14.3% |    +1 | 3.3% → 3.8% |   7 → 8 | `visit`                          | `black/nodes.py`          |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `visit_simple_stmt`              | `black/linegen.py`        |
| +100.0% |    +1 | 0.5% → 1.0% |   1 → 2 | `_format_str_once`               | `black/__init__.py`       |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `addtoken`                       | `blib2to3/pgen2/parse.py` |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `is_split_before_delimiter`      | `black/brackets.py`       |
|  +25.0% |    +1 | 1.9% → 2.4% |   4 → 5 | `__str__`                        | `black/lines.py`          |
| +100.0% |    +1 | 0.5% → 1.0% |   1 → 2 | `transform_line`                 | `black/linegen.py`        |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `is_docstring`                   | `black/nodes.py`          |
| +100.0% |    +1 | 0.5% → 1.0% |   1 → 2 | `sub_twice`                      | `black/strings.py`        |

##### Unknown

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| +33.3% |    +3 | 4.2% → 5.8% |  9 → 12 | `(anonymous)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Ours

|  Change | Delta |           % | Samples | Function                     | Location                     |
| ------: | ----: | ----------: | ------: | ---------------------------- | ---------------------------- |
|  -57.1% |   -12 | 9.8% → 4.3% |  21 → 9 | `generate_tokens`            | `blib2to3/pgen2/tokenize.py` |
|  -81.8% |    -9 | 5.1% → 1.0% |  11 → 2 | `convert`                    | `blib2to3/pytree.py`         |
|  -44.4% |    -8 | 8.4% → 4.8% | 18 → 10 | `generate_comments`          | `black/comments.py`          |
|  -40.0% |    -4 | 4.7% → 2.9% |  10 → 6 | `visit_default`              | `black/linegen.py`           |
| removed |    -4 | 1.9% → 0.0% |   4 → 0 | `all_lines`                  | `black/lines.py`             |
|  -57.1% |    -4 | 3.3% → 1.4% |   7 → 3 | `__init__`                   | `<string>`                   |
| removed |    -3 | 1.4% → 0.0% |   3 → 0 | `append_comment`             | `black/lines.py`             |
|  -66.7% |    -2 | 1.4% → 0.5% |   3 → 1 | `changed`                    | `blib2to3/pytree.py`         |
|  -25.0% |    -2 | 3.7% → 2.9% |   8 → 6 | `_stringify_ast`             | `black/parsing.py`           |
|  -50.0% |    -2 | 1.9% → 1.0% |   4 → 2 | `pre_order`                  | `blib2to3/pytree.py`         |
|  -66.7% |    -2 | 1.4% → 0.5% |   3 → 1 | `shift`                      | `blib2to3/pgen2/parse.py`    |
|  -66.7% |    -2 | 1.4% → 0.5% |   3 → 1 | `whitespace`                 | `black/nodes.py`             |
|  -25.0% |    -2 | 3.7% → 2.9% |   8 → 6 | `__new__`                    | `blib2to3/pytree.py`         |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `_maybe_empty_lines`         | `black/lines.py`             |
|  -33.3% |    -1 | 1.4% → 1.0% |   3 → 2 | `visit_default`              | `black/nodes.py`             |
|  -50.0% |    -1 | 0.9% → 0.5% |   2 → 1 | `assert_equivalent`          | `black/__init__.py`          |
|  -33.3% |    -1 | 1.4% → 1.0% |   3 → 2 | `normalize_invisible_parens` | `black/linegen.py`           |
| removed |    -1 | 0.5% → 0.0% |   1 → 0 | `__getitem__`                | `typing.py`                  |
| removed |    -1 | 0.5% → 0.0% |   1 → 0 | `<module>`                   | `blib2to3/pytree.py`         |
|  -50.0% |    -1 | 0.9% → 0.5% |   2 → 1 | `current`                    | `blib2to3/pgen2/tokenize.py` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % | Samples | Function                         | Location                  |
| ------: | ----: | ------------: | ------: | -------------------------------- | ------------------------- |
|  +25.0% |   +11 | 20.5% → 26.4% | 44 → 55 | `addtoken`                       | `blib2to3/pgen2/parse.py` |
| +333.3% |   +10 |   1.4% → 6.3% |  3 → 13 | `push`                           | `blib2to3/pgen2/parse.py` |
|  +20.9% |    +9 | 20.0% → 25.0% | 43 → 52 | `_addtoken`                      | `blib2to3/pgen2/parse.py` |
| +133.3% |    +8 |   2.8% → 6.7% |  6 → 14 | `transform_line`                 | `black/linegen.py`        |
|     new |    +5 |   0.0% → 2.4% |   0 → 5 | `run_transformer`                | `black/linegen.py`        |
|  +57.1% |    +4 |   3.3% → 5.3% |  7 → 11 | `_stringify_ast_with_new_parent` | `black/parsing.py`        |
|  +80.0% |    +4 |   2.3% → 4.3% |   5 → 9 | `mark`                           | `black/brackets.py`       |
|  +37.5% |    +3 |   3.7% → 5.3% |  8 → 11 | `_stringify_ast`                 | `black/parsing.py`        |
| +300.0% |    +3 |   0.5% → 1.9% |   1 → 4 | `wrap_in_parentheses`            | `black/nodes.py`          |
|  +75.0% |    +3 |   1.9% → 3.4% |   4 → 7 | `normalize_invisible_parens`     | `black/linegen.py`        |
| +300.0% |    +3 |   0.5% → 1.9% |   1 → 4 | `__init__`                       | `blib2to3/pytree.py`      |
| +100.0% |    +3 |   1.4% → 2.9% |   3 → 6 | `convert_one_fmt_off_pair`       | `black/comments.py`       |
| +100.0% |    +3 |   1.4% → 2.9% |   3 → 6 | `normalize_fmt_off`              | `black/comments.py`       |
| +150.0% |    +3 |   0.9% → 2.4% |   2 → 5 | `hug_power_op`                   | `black/trans.py`          |
|  +33.3% |    +3 |   4.2% → 5.8% |  9 → 12 | `(anonymous)`                    | `<unknown>`               |
|   +4.4% |    +2 | 20.9% → 22.6% | 45 → 47 | `visit_simple_stmt`              | `black/linegen.py`        |
|  +11.8% |    +2 |   7.9% → 9.1% | 17 → 19 | `append`                         | `black/lines.py`          |
|     new |    +2 |   0.0% → 1.0% |   0 → 2 | `preceding_leaf`                 | `black/nodes.py`          |
|     new |    +2 |   0.0% → 1.0% |   0 → 2 | `clone`                          | `blib2to3/pytree.py`      |
|     new |    +2 |   0.0% → 1.0% |   0 → 2 | `remove`                         | `blib2to3/pytree.py`      |

##### Ours

|  Change | Delta |             % | Samples | Function                         | Location                  |
| ------: | ----: | ------------: | ------: | -------------------------------- | ------------------------- |
|  +25.0% |   +11 | 20.5% → 26.4% | 44 → 55 | `addtoken`                       | `blib2to3/pgen2/parse.py` |
| +333.3% |   +10 |   1.4% → 6.3% |  3 → 13 | `push`                           | `blib2to3/pgen2/parse.py` |
|  +20.9% |    +9 | 20.0% → 25.0% | 43 → 52 | `_addtoken`                      | `blib2to3/pgen2/parse.py` |
| +133.3% |    +8 |   2.8% → 6.7% |  6 → 14 | `transform_line`                 | `black/linegen.py`        |
|     new |    +5 |   0.0% → 2.4% |   0 → 5 | `run_transformer`                | `black/linegen.py`        |
|  +57.1% |    +4 |   3.3% → 5.3% |  7 → 11 | `_stringify_ast_with_new_parent` | `black/parsing.py`        |
|  +80.0% |    +4 |   2.3% → 4.3% |   5 → 9 | `mark`                           | `black/brackets.py`       |
|  +37.5% |    +3 |   3.7% → 5.3% |  8 → 11 | `_stringify_ast`                 | `black/parsing.py`        |
| +300.0% |    +3 |   0.5% → 1.9% |   1 → 4 | `wrap_in_parentheses`            | `black/nodes.py`          |
|  +75.0% |    +3 |   1.9% → 3.4% |   4 → 7 | `normalize_invisible_parens`     | `black/linegen.py`        |
| +300.0% |    +3 |   0.5% → 1.9% |   1 → 4 | `__init__`                       | `blib2to3/pytree.py`      |
| +100.0% |    +3 |   1.4% → 2.9% |   3 → 6 | `convert_one_fmt_off_pair`       | `black/comments.py`       |
| +100.0% |    +3 |   1.4% → 2.9% |   3 → 6 | `normalize_fmt_off`              | `black/comments.py`       |
| +150.0% |    +3 |   0.9% → 2.4% |   2 → 5 | `hug_power_op`                   | `black/trans.py`          |
|   +4.4% |    +2 | 20.9% → 22.6% | 45 → 47 | `visit_simple_stmt`              | `black/linegen.py`        |
|  +11.8% |    +2 |   7.9% → 9.1% | 17 → 19 | `append`                         | `black/lines.py`          |
|     new |    +2 |   0.0% → 1.0% |   0 → 2 | `preceding_leaf`                 | `black/nodes.py`          |
|     new |    +2 |   0.0% → 1.0% |   0 → 2 | `clone`                          | `blib2to3/pytree.py`      |
|     new |    +2 |   0.0% → 1.0% |   0 → 2 | `remove`                         | `blib2to3/pytree.py`      |
|   +4.0% |    +1 | 11.6% → 12.5% | 25 → 26 | `assert_equivalent`              | `black/__init__.py`       |

##### Unknown

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| +33.3% |    +3 | 4.2% → 5.8% |  9 → 12 | `(anonymous)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function               | Location                     |
| -----: | ----: | ------------: | --------: | ---------------------- | ---------------------------- |
| -58.3% |   -14 |  11.2% → 4.8% |   24 → 10 | `generate_tokens`      | `blib2to3/pgen2/tokenize.py` |
| -58.3% |   -14 |  11.2% → 4.8% |   24 → 10 | `__next__`             | `blib2to3/pgen2/driver.py`   |
| -17.8% |   -13 | 34.0% → 28.8% |   73 → 60 | `visit_funcdef`        | `black/linegen.py`           |
| -14.5% |   -11 | 35.3% → 31.3% |   76 → 65 | `visit_default`        | `black/linegen.py`           |
| -14.5% |   -11 | 35.3% → 31.3% |   76 → 65 | `visit`                | `black/nodes.py`             |
| -14.5% |   -11 | 35.3% → 31.3% |   76 → 65 | `visit_default`        | `black/nodes.py`             |
| -14.9% |   -11 | 34.4% → 30.3% |   74 → 63 | `visit_suite`          | `black/linegen.py`           |
| -14.5% |   -11 | 35.3% → 31.3% |   76 → 65 | `visit_stmt`           | `black/linegen.py`           |
|  -4.9% |   -10 | 95.8% → 94.2% | 206 → 196 | `_run_module_as_main`  | `<frozen runpy>`             |
| -50.0% |   -10 |   9.3% → 4.8% |   20 → 10 | `convert`              | `blib2to3/pytree.py`         |
| -42.9% |    -9 |   9.8% → 5.8% |   21 → 12 | `generate_comments`    | `black/comments.py`          |
| -30.0% |    -9 | 14.0% → 10.1% |   30 → 21 | `visit_power`          | `black/linegen.py`           |
|  -4.6% |    -8 | 80.9% → 79.8% | 174 → 166 | `_format_str_once`     | `black/__init__.py`          |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `format_file_in_place` | `black/__init__.py`          |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `reformat_one`         | `black/__init__.py`          |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `main`                 | `black/__init__.py`          |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `new_func`             | `click/decorators.py`        |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `invoke`               | `click/core.py`              |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `main`                 | `click/core.py`              |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `__call__`             | `click/core.py`              |

##### Ours

| Change | Delta |             % |   Samples | Function               | Location                     |
| -----: | ----: | ------------: | --------: | ---------------------- | ---------------------------- |
| -58.3% |   -14 |  11.2% → 4.8% |   24 → 10 | `generate_tokens`      | `blib2to3/pgen2/tokenize.py` |
| -58.3% |   -14 |  11.2% → 4.8% |   24 → 10 | `__next__`             | `blib2to3/pgen2/driver.py`   |
| -17.8% |   -13 | 34.0% → 28.8% |   73 → 60 | `visit_funcdef`        | `black/linegen.py`           |
| -14.5% |   -11 | 35.3% → 31.3% |   76 → 65 | `visit_default`        | `black/linegen.py`           |
| -14.5% |   -11 | 35.3% → 31.3% |   76 → 65 | `visit`                | `black/nodes.py`             |
| -14.5% |   -11 | 35.3% → 31.3% |   76 → 65 | `visit_default`        | `black/nodes.py`             |
| -14.9% |   -11 | 34.4% → 30.3% |   74 → 63 | `visit_suite`          | `black/linegen.py`           |
| -14.5% |   -11 | 35.3% → 31.3% |   76 → 65 | `visit_stmt`           | `black/linegen.py`           |
| -50.0% |   -10 |   9.3% → 4.8% |   20 → 10 | `convert`              | `blib2to3/pytree.py`         |
| -42.9% |    -9 |   9.8% → 5.8% |   21 → 12 | `generate_comments`    | `black/comments.py`          |
| -30.0% |    -9 | 14.0% → 10.1% |   30 → 21 | `visit_power`          | `black/linegen.py`           |
|  -4.6% |    -8 | 80.9% → 79.8% | 174 → 166 | `_format_str_once`     | `black/__init__.py`          |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `format_file_in_place` | `black/__init__.py`          |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `reformat_one`         | `black/__init__.py`          |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `main`                 | `black/__init__.py`          |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `new_func`             | `click/decorators.py`        |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `invoke`               | `click/core.py`              |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `main`                 | `click/core.py`              |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `__call__`             | `click/core.py`              |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `patched_main`         | `black/__init__.py`          |

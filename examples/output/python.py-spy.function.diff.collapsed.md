# Sampling profile diff

Collected 219 samples → 221 samples (+2 samples, +0.9%).

| Category         | Change | Delta |           % |   Samples |
| ---------------- | -----: | ----: | ----------: | --------: |
| Ours             |  +1.0% |    +2 |       95.9% | 210 → 212 |
| Unknown          |   0.0% |     0 | 3.7% → 3.6% |         8 |
| Standard library |   0.0% |     0 |        0.5% |         1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Ours

|  Change | Delta |           % | Samples | Function                          | Location                     |
| ------: | ----: | ----------: | ------: | --------------------------------- | ---------------------------- |
| +533.3% |   +16 | 1.4% → 8.6% |  3 → 19 | `push`                            | `blib2to3/pgen2/parse.py`    |
| +500.0% |    +5 | 0.5% → 2.7% |   1 → 6 | `visit_default`                   | `black/linegen.py`           |
|  +33.3% |    +5 | 6.8% → 9.0% | 15 → 20 | `parse`                           | `ast.py`                     |
| +200.0% |    +4 | 0.9% → 2.7% |   2 → 6 | `parse_tokens`                    | `blib2to3/pgen2/driver.py`   |
| +200.0% |    +4 | 0.9% → 2.7% |   2 → 6 | `mark`                            | `black/brackets.py`          |
|     new |    +3 | 0.0% → 1.4% |   0 → 3 | `visit_power`                     | `black/linegen.py`           |
| +150.0% |    +3 | 0.9% → 2.3% |   2 → 5 | `append`                          | `black/lines.py`             |
| +300.0% |    +3 | 0.5% → 1.8% |   1 → 4 | `<genexpr>`                       | `blib2to3/pgen2/tokenize.py` |
|     new |    +3 | 0.0% → 1.4% |   0 → 3 | `run_transformer`                 | `black/linegen.py`           |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `format_str`                      | `black/__init__.py`          |
|  +66.7% |    +2 | 1.4% → 2.3% |   3 → 5 | `__init__`                        | `blib2to3/pytree.py`         |
| +100.0% |    +2 | 0.9% → 1.8% |   2 → 4 | `visit_default`                   | `black/nodes.py`             |
| +200.0% |    +2 | 0.5% → 1.4% |   1 → 3 | `hug_power_op`                    | `black/trans.py`             |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `__init_subclass__`               | `typing.py`                  |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `parse_parts`                     | `pathlib.py`                 |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `check_stability_and_equivalence` | `black/__init__.py`          |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `wrap_in_parentheses`             | `black/nodes.py`             |
|  +25.0% |    +1 | 1.8% → 2.3% |   4 → 5 | `visit`                           | `black/nodes.py`             |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `visit_suite`                     | `black/linegen.py`           |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `visit_simple_stmt`               | `black/linegen.py`           |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Ours

|  Change | Delta |             % | Samples | Function                         | Location                     |
| ------: | ----: | ------------: | ------: | -------------------------------- | ---------------------------- |
|  -72.7% |    -8 |   5.0% → 1.4% |  11 → 3 | `get_features_used`              | `black/__init__.py`          |
|  -77.8% |    -7 |   4.1% → 0.9% |   9 → 2 | `normalize_trailing_prefix`      | `black/comments.py`          |
|  -46.7% |    -7 |   6.8% → 3.6% |  15 → 8 | `__new__`                        | `blib2to3/pytree.py`         |
|  -21.4% |    -6 | 12.8% → 10.0% | 28 → 22 | `_addtoken`                      | `blib2to3/pgen2/parse.py`    |
|  -80.0% |    -4 |   2.3% → 0.5% |   5 → 1 | `_stringify_ast_with_new_parent` | `black/parsing.py`           |
|  -66.7% |    -4 |   2.7% → 0.9% |   6 → 2 | `__init__`                       | `<string>`                   |
|  -42.9% |    -3 |   3.2% → 1.8% |   7 → 4 | `convert`                        | `blib2to3/pytree.py`         |
|  -37.5% |    -3 |   3.7% → 2.3% |   8 → 5 | `_stringify_ast`                 | `black/parsing.py`           |
|  -50.0% |    -3 |   2.7% → 1.4% |   6 → 3 | `pop`                            | `blib2to3/pgen2/parse.py`    |
|  -25.0% |    -3 |   5.5% → 4.1% |  12 → 9 | `generate_tokens`                | `blib2to3/pgen2/tokenize.py` |
|  -66.7% |    -2 |   1.4% → 0.5% |   3 → 1 | `shift`                          | `blib2to3/pgen2/parse.py`    |
| removed |    -2 |   0.9% → 0.0% |   2 → 0 | `normalize_invisible_parens`     | `black/linegen.py`           |
|  -66.7% |    -2 |   1.4% → 0.5% |   3 → 1 | `pre_order`                      | `blib2to3/pytree.py`         |
| removed |    -2 |   0.9% → 0.0% |   2 → 0 | `changed`                        | `blib2to3/pytree.py`         |
| removed |    -2 |   0.9% → 0.0% |   2 → 0 | `is_def`                         | `black/lines.py`             |
| removed |    -1 |   0.5% → 0.0% |   1 → 0 | `visit_stmt`                     | `black/linegen.py`           |
|  -25.0% |    -1 |   1.8% → 1.4% |   4 → 3 | `leaves`                         | `blib2to3/pytree.py`         |
| removed |    -1 |   0.5% → 0.0% |   1 → 0 | `is_complex_subscript`           | `black/lines.py`             |
| removed |    -1 |   0.5% → 0.0% |   1 → 0 | `is_import`                      | `black/nodes.py`             |
| removed |    -1 |   0.5% → 0.0% |   1 → 0 | `_maybe_empty_lines`             | `black/lines.py`             |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                            | Location                     |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ---------------------------- |
| +533.3% |   +16 |   1.4% → 8.6% |    3 → 19 | `push`                              | `blib2to3/pgen2/parse.py`    |
|   +5.6% |    +7 | 57.1% → 59.7% | 125 → 132 | `format_str`                        | `black/__init__.py`          |
|  +60.0% |    +6 |   4.6% → 7.2% |   10 → 16 | `transform_line`                    | `black/linegen.py`           |
|  +33.3% |    +5 |   6.8% → 9.0% |   15 → 20 | `parse`                             | `ast.py`                     |
|  +33.3% |    +5 |   6.8% → 9.0% |   15 → 20 | `_parse_single_version`             | `black/parsing.py`           |
|  +33.3% |    +5 |   6.8% → 9.0% |   15 → 20 | `parse_ast`                         | `black/parsing.py`           |
|  +20.0% |    +3 |   6.8% → 8.1% |   15 → 18 | `append`                            | `black/lines.py`             |
| +300.0% |    +3 |   0.5% → 1.8% |     1 → 4 | `<genexpr>`                         | `blib2to3/pgen2/tokenize.py` |
| +300.0% |    +3 |   0.5% → 1.8% |     1 → 4 | `is_fstring_start`                  | `blib2to3/pgen2/tokenize.py` |
| +100.0% |    +3 |   1.4% → 2.7% |     3 → 6 | `run_transformer`                   | `black/linegen.py`           |
|     new |    +3 |   0.0% → 1.4% |     0 → 3 | `_hugging_power_ops_line_to_string` | `black/linegen.py`           |
|     new |    +3 |   0.0% → 1.4% |     0 → 3 | `resolve`                           | `pathlib.py`                 |
|     new |    +3 |   0.0% → 1.4% |     0 → 3 | `<dictcomp>`                        | `black/cache.py`             |
|     new |    +3 |   0.0% → 1.4% |     0 → 3 | `write`                             | `black/cache.py`             |
|   +0.9% |    +2 | 96.3% → 96.4% | 211 → 213 | `_run_module_as_main`               | `<frozen runpy>`             |
|  +66.7% |    +2 |   1.4% → 2.3% |     3 → 5 | `__init__`                          | `blib2to3/pytree.py`         |
| +200.0% |    +2 |   0.5% → 1.4% |     1 → 3 | `wrap_in_parentheses`               | `black/nodes.py`             |
|  +33.3% |    +2 |   2.7% → 3.6% |     6 → 8 | `__str__`                           | `black/lines.py`             |
|  +40.0% |    +2 |   2.3% → 3.2% |     5 → 7 | `visit_STRING`                      | `black/linegen.py`           |
|  +33.3% |    +2 |   2.7% → 3.6% |     6 → 8 | `mark`                              | `black/brackets.py`          |

##### Ours

|  Change | Delta |             % |   Samples | Function                            | Location                     |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ---------------------------- |
| +533.3% |   +16 |   1.4% → 8.6% |    3 → 19 | `push`                              | `blib2to3/pgen2/parse.py`    |
|   +5.6% |    +7 | 57.1% → 59.7% | 125 → 132 | `format_str`                        | `black/__init__.py`          |
|  +60.0% |    +6 |   4.6% → 7.2% |   10 → 16 | `transform_line`                    | `black/linegen.py`           |
|  +33.3% |    +5 |   6.8% → 9.0% |   15 → 20 | `parse`                             | `ast.py`                     |
|  +33.3% |    +5 |   6.8% → 9.0% |   15 → 20 | `_parse_single_version`             | `black/parsing.py`           |
|  +33.3% |    +5 |   6.8% → 9.0% |   15 → 20 | `parse_ast`                         | `black/parsing.py`           |
|  +20.0% |    +3 |   6.8% → 8.1% |   15 → 18 | `append`                            | `black/lines.py`             |
| +300.0% |    +3 |   0.5% → 1.8% |     1 → 4 | `<genexpr>`                         | `blib2to3/pgen2/tokenize.py` |
| +300.0% |    +3 |   0.5% → 1.8% |     1 → 4 | `is_fstring_start`                  | `blib2to3/pgen2/tokenize.py` |
| +100.0% |    +3 |   1.4% → 2.7% |     3 → 6 | `run_transformer`                   | `black/linegen.py`           |
|     new |    +3 |   0.0% → 1.4% |     0 → 3 | `_hugging_power_ops_line_to_string` | `black/linegen.py`           |
|     new |    +3 |   0.0% → 1.4% |     0 → 3 | `resolve`                           | `pathlib.py`                 |
|     new |    +3 |   0.0% → 1.4% |     0 → 3 | `<dictcomp>`                        | `black/cache.py`             |
|     new |    +3 |   0.0% → 1.4% |     0 → 3 | `write`                             | `black/cache.py`             |
|  +66.7% |    +2 |   1.4% → 2.3% |     3 → 5 | `__init__`                          | `blib2to3/pytree.py`         |
| +200.0% |    +2 |   0.5% → 1.4% |     1 → 3 | `wrap_in_parentheses`               | `black/nodes.py`             |
|  +33.3% |    +2 |   2.7% → 3.6% |     6 → 8 | `__str__`                           | `black/lines.py`             |
|  +40.0% |    +2 |   2.3% → 3.2% |     5 → 7 | `visit_STRING`                      | `black/linegen.py`           |
|  +33.3% |    +2 |   2.7% → 3.6% |     6 → 8 | `mark`                              | `black/brackets.py`          |
| +200.0% |    +2 |   0.5% → 1.4% |     1 → 3 | `hug_power_op`                      | `black/trans.py`             |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Ours

|  Change | Delta |             % |   Samples | Function                          | Location                  |
| ------: | ----: | ------------: | --------: | --------------------------------- | ------------------------- |
|  -63.2% |   -12 |   8.7% → 3.2% |    19 → 7 | `pop`                             | `blib2to3/pgen2/parse.py` |
|  -83.3% |   -10 |   5.5% → 0.9% |    12 → 2 | `normalize_trailing_prefix`       | `black/comments.py`       |
|  -45.5% |   -10 |  10.0% → 5.4% |   22 → 12 | `generate_comments`               | `black/comments.py`       |
|  -10.7% |    -9 | 38.4% → 33.9% |   84 → 75 | `check_stability_and_equivalence` | `black/__init__.py`       |
|  -60.0% |    -9 |   6.8% → 2.7% |    15 → 6 | `get_features_used`               | `black/__init__.py`       |
|  -60.0% |    -9 |   6.8% → 2.7% |    15 → 6 | `detect_target_versions`          | `black/__init__.py`       |
|  -14.5% |    -8 | 25.1% → 21.3% |   55 → 47 | `assert_stable`                   | `black/__init__.py`       |
|  -33.3% |    -8 |  11.0% → 7.2% |   24 → 16 | `convert`                         | `blib2to3/pytree.py`      |
|  -53.8% |    -7 |   5.9% → 2.7% |    13 → 6 | `_stringify_ast`                  | `black/parsing.py`        |
|  -53.8% |    -7 |   5.9% → 2.7% |    13 → 6 | `_stringify_ast_with_new_parent`  | `black/parsing.py`        |
|  -25.0% |    -7 |  12.8% → 9.5% |   28 → 21 | `visit_power`                     | `black/linegen.py`        |
|  -46.7% |    -7 |   6.8% → 3.6% |    15 → 8 | `__new__`                         | `blib2to3/pytree.py`      |
|  -85.7% |    -6 |   3.2% → 0.5% |     7 → 1 | `line`                            | `black/linegen.py`        |
|  -80.0% |    -4 |   2.3% → 0.5% |     5 → 1 | `_maybe_empty_lines`              | `black/lines.py`          |
|  -66.7% |    -4 |   2.7% → 0.9% |     6 → 2 | `__init__`                        | `<string>`                |
|   -4.7% |    -3 | 29.2% → 27.6% |   64 → 61 | `_addtoken`                       | `blib2to3/pgen2/parse.py` |
|   -4.7% |    -3 | 29.2% → 27.6% |   64 → 61 | `addtoken`                        | `blib2to3/pgen2/parse.py` |
|   -1.7% |    -3 | 82.2% → 80.1% | 180 → 177 | `_format_str_once`                | `black/__init__.py`       |
|  -50.0% |    -3 |   2.7% → 1.4% |     6 → 3 | `maybe_empty_lines`               | `black/lines.py`          |
| removed |    -3 |   1.4% → 0.0% |     3 → 0 | `prefix`                          | `blib2to3/pytree.py`      |

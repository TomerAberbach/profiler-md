# Sampling profile diff

Collected 175 samples → 184 samples (+9 samples, +5.1%).

| Category         |  Change | Delta |             % |   Samples |
| ---------------- | ------: | ----: | ------------: | --------: |
| Ours             |   +1.2% |    +2 | 97.7% → 94.0% | 171 → 173 |
| Unknown          | +200.0% |    +6 |   1.7% → 4.9% |     3 → 9 |
| Standard library | +100.0% |    +1 |   0.6% → 1.1% |     1 → 2 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Ours

|  Change | Delta |             % | Samples | Function                                           | Location                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ---------------------------- |
| +128.6% |    +9 |   4.0% → 8.7% |  7 → 16 | `generate_comments`                                | `black/comments.py`          |
|  +22.2% |    +4 | 10.3% → 12.0% | 18 → 22 | `_addtoken`                                        | `blib2to3/pgen2/parse.py`    |
| +400.0% |    +4 |   0.6% → 2.7% |   1 → 5 | `pop`                                              | `blib2to3/pgen2/parse.py`    |
| +400.0% |    +4 |   0.6% → 2.7% |   1 → 5 | `<genexpr>`                                        | `blib2to3/pgen2/tokenize.py` |
|     new |    +3 |   0.0% → 1.6% |   0 → 3 | `visit_stmt`                                       | `black/linegen.py`           |
|     new |    +2 |   0.0% → 1.1% |   0 → 2 | `__next__`                                         | `blib2to3/pgen2/driver.py`   |
| +200.0% |    +2 |   0.6% → 1.6% |   1 → 3 | `__str__`                                          | `black/lines.py`             |
| +200.0% |    +2 |   0.6% → 1.6% |   1 → 3 | `prefix`                                           | `blib2to3/pytree.py`         |
|     new |    +2 |   0.0% → 1.1% |   0 → 2 | `convert_one_fmt_off_pair`                         | `black/comments.py`          |
|     new |    +2 |   0.0% → 1.1% |   0 → 2 | `leaves`                                           | `blib2to3/pytree.py`         |
|     new |    +2 |   0.0% → 1.1% |   0 → 2 | `<lambda>`                                         | `black/lines.py`             |
|     new |    +2 |   0.0% → 1.1% |   0 → 2 | `contains_implicit_multiline_string_with_comments` | `black/lines.py`             |
|     new |    +2 |   0.0% → 1.1% |   0 → 2 | `is_vararg`                                        | `black/nodes.py`             |
|     new |    +2 |   0.0% → 1.1% |   0 → 2 | `update_sibling_maps`                              | `blib2to3/pytree.py`         |
|     new |    +2 |   0.0% → 1.1% |   0 → 2 | `remove`                                           | `blib2to3/pytree.py`         |
|  +50.0% |    +1 |   1.1% → 1.6% |   2 → 3 | `transform_line`                                   | `black/linegen.py`           |
|     new |    +1 |   0.0% → 0.5% |   0 → 1 | `visit_suite`                                      | `black/linegen.py`           |
|     new |    +1 |   0.0% → 0.5% |   0 → 1 | `parse_string`                                     | `blib2to3/pgen2/driver.py`   |
|  +20.0% |    +1 |   2.9% → 3.3% |   5 → 6 | `append`                                           | `black/lines.py`             |
|  +33.3% |    +1 |   1.7% → 2.2% |   3 → 4 | `__init__`                                         | `blib2to3/pytree.py`         |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Ours

|  Change | Delta |           % | Samples | Function                                 | Location                     |
| ------: | ----: | ----------: | ------: | ---------------------------------------- | ---------------------------- |
|  -81.8% |    -9 | 6.3% → 1.1% |  11 → 2 | `mark`                                   | `black/brackets.py`          |
|  -38.5% |    -5 | 7.4% → 4.3% |  13 → 8 | `generate_tokens`                        | `blib2to3/pgen2/tokenize.py` |
|  -62.5% |    -5 | 4.6% → 1.6% |   8 → 3 | `push`                                   | `blib2to3/pgen2/parse.py`    |
| removed |    -5 | 2.9% → 0.0% |   5 → 0 | `is_split_before_delimiter`              | `black/brackets.py`          |
|  -66.7% |    -4 | 3.4% → 1.1% |   6 → 2 | `__init__`                               | `<string>`                   |
| removed |    -3 | 1.7% → 0.0% |   3 → 0 | `is_one_sequence_between`                | `black/nodes.py`             |
| removed |    -2 | 1.1% → 0.0% |   2 → 0 | `addtoken`                               | `blib2to3/pgen2/parse.py`    |
| removed |    -2 | 1.1% → 0.0% |   2 → 0 | `line`                                   | `black/linegen.py`           |
| removed |    -2 | 1.1% → 0.0% |   2 → 0 | `whitespace`                             | `black/nodes.py`             |
|  -66.7% |    -2 | 1.7% → 0.5% |   3 → 1 | `convert`                                | `blib2to3/pytree.py`         |
| removed |    -2 | 1.1% → 0.0% |   2 → 0 | `maybe_decrement_after_lambda_arguments` | `black/brackets.py`          |
|  -66.7% |    -2 | 1.7% → 0.5% |   3 → 1 | `prev_sibling`                           | `blib2to3/pytree.py`         |
| removed |    -2 | 1.1% → 0.0% |   2 → 0 | `visit_STRING`                           | `black/linegen.py`           |
| removed |    -2 | 1.1% → 0.0% |   2 → 0 | `has_magic_trailing_comma`               | `black/lines.py`             |
|  -50.0% |    -1 | 1.1% → 0.5% |   2 → 1 | `_format_str_once`                       | `black/__init__.py`          |
|  -33.3% |    -1 | 1.7% → 1.1% |   3 → 2 | `visit`                                  | `black/nodes.py`             |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `hash_digest`                            | `black/cache.py`             |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `assert_equivalent`                      | `black/__init__.py`          |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `wrap_in_parentheses`                    | `black/nodes.py`             |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `_type_check`                            | `typing.py`                  |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Ours

|  Change | Delta |             % |   Samples | Function                                           | Location                     |
| ------: | ----: | ------------: | --------: | -------------------------------------------------- | ---------------------------- |
|  +24.3% |   +17 | 40.0% → 47.3% |   70 → 87 | `check_stability_and_equivalence`                  | `black/__init__.py`          |
|  +31.4% |   +16 | 29.1% → 36.4% |   51 → 67 | `assert_stable`                                    | `black/__init__.py`          |
| +100.0% |   +10 |  5.7% → 10.9% |   10 → 20 | `generate_comments`                                | `black/comments.py`          |
|  +50.0% |    +5 |   5.7% → 8.2% |   10 → 15 | `transform_line`                                   | `black/linegen.py`           |
| +500.0% |    +5 |   0.6% → 3.3% |     1 → 6 | `maybe_empty_lines`                                | `black/lines.py`             |
|   +2.4% |    +4 | 96.6% → 94.0% | 169 → 173 | `format_file_contents`                             | `black/__init__.py`          |
|   +2.4% |    +4 | 96.6% → 94.0% | 169 → 173 | `format_file_in_place`                             | `black/__init__.py`          |
| +200.0% |    +4 |   1.1% → 3.3% |     2 → 6 | `normalize_invisible_parens`                       | `black/linegen.py`           |
| +400.0% |    +4 |   0.6% → 2.7% |     1 → 5 | `<genexpr>`                                        | `blib2to3/pgen2/tokenize.py` |
| +400.0% |    +4 |   0.6% → 2.7% |     1 → 5 | `is_fstring_start`                                 | `blib2to3/pgen2/tokenize.py` |
| +400.0% |    +4 |   0.6% → 2.7% |     1 → 5 | `_maybe_empty_lines`                               | `black/lines.py`             |
|     new |    +4 |   0.0% → 2.2% |     0 → 4 | `contains_implicit_multiline_string_with_comments` | `black/lines.py`             |
|   +2.0% |    +3 | 85.7% → 83.2% | 150 → 153 | `_format_str_once`                                 | `black/__init__.py`          |
|   +1.8% |    +3 | 97.1% → 94.0% | 170 → 173 | `reformat_one`                                     | `black/__init__.py`          |
|   +1.8% |    +3 | 97.1% → 94.0% | 170 → 173 | `main`                                             | `black/__init__.py`          |
|   +1.8% |    +3 | 97.1% → 94.0% | 170 → 173 | `new_func`                                         | `click/decorators.py`        |
|   +1.8% |    +3 | 97.1% → 94.0% | 170 → 173 | `invoke`                                           | `click/core.py`              |
|   +1.8% |    +3 | 97.1% → 94.0% | 170 → 173 | `main`                                             | `click/core.py`              |
|   +1.8% |    +3 | 97.1% → 94.0% | 170 → 173 | `__call__`                                         | `click/core.py`              |
|   +1.8% |    +3 | 97.1% → 94.0% | 170 → 173 | `patched_main`                                     | `black/__init__.py`          |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Ours

|  Change | Delta |             % | Samples | Function                    | Location                   |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------------------- |
|  -57.1% |   -20 |  20.0% → 8.2% | 35 → 15 | `append`                    | `black/lines.py`           |
|  -78.9% |   -15 |  10.9% → 2.2% |  19 → 4 | `mark`                      | `black/brackets.py`        |
|  -13.1% |   -13 | 56.6% → 46.7% | 99 → 86 | `format_str`                | `black/__init__.py`        |
|  -18.8% |    -9 | 27.4% → 21.2% | 48 → 39 | `visit_simple_stmt`         | `black/linegen.py`         |
|  -10.9% |    -7 | 36.6% → 31.0% | 64 → 57 | `visit`                     | `black/nodes.py`           |
|  -10.9% |    -7 | 36.6% → 31.0% | 64 → 57 | `visit_default`             | `black/nodes.py`           |
|  -10.9% |    -7 | 36.6% → 31.0% | 64 → 57 | `visit_default`             | `black/linegen.py`         |
|  -11.7% |    -7 | 34.3% → 28.8% | 60 → 53 | `visit_funcdef`             | `black/linegen.py`         |
|  -11.5% |    -7 | 34.9% → 29.3% | 61 → 54 | `visit_suite`               | `black/linegen.py`         |
|  -20.0% |    -6 | 17.1% → 13.0% | 30 → 24 | `visit_power`               | `black/linegen.py`         |
|   -8.2% |    -5 | 34.9% → 30.4% | 61 → 56 | `visit_stmt`                | `black/linegen.py`         |
|  -62.5% |    -5 |   4.6% → 1.6% |   8 → 3 | `push`                      | `blib2to3/pgen2/parse.py`  |
| removed |    -5 |   2.9% → 0.0% |   5 → 0 | `has_magic_trailing_comma`  | `black/lines.py`           |
|  -66.7% |    -4 |   3.4% → 1.1% |   6 → 2 | `__init__`                  | `<string>`                 |
|  -66.7% |    -4 |   3.4% → 1.1% |   6 → 2 | `line`                      | `black/linegen.py`         |
|   -4.7% |    -3 | 36.6% → 33.2% | 64 → 61 | `parse_tokens`              | `blib2to3/pgen2/driver.py` |
| removed |    -3 |   1.7% → 0.0% |   3 → 0 | `preceding_leaf`            | `black/nodes.py`           |
|  -60.0% |    -3 |   2.9% → 1.1% |   5 → 2 | `is_split_before_delimiter` | `black/brackets.py`        |
| removed |    -3 |   1.7% → 0.0% |   3 → 0 | `is_one_sequence_between`   | `black/nodes.py`           |
|   -4.3% |    -2 | 26.9% → 24.5% | 47 → 45 | `addtoken`                  | `blib2to3/pgen2/parse.py`  |

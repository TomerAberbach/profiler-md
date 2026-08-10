# Profile diff

189 samples → 196 samples (+7 samples, +3.7%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Ours             |  +6.8% |   +12 | 93.7% → 96.4% | 177 → 189 |
| Unknown          | -37.5% |    -3 |   4.2% → 2.6% |     8 → 5 |
| Standard library | -50.0% |    -2 |   2.1% → 1.0% |     4 → 2 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Ours

|  Change | Delta |             % | Samples | Function                                           | Location                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ---------------------------- |
| +800.0% |    +8 |   0.5% → 4.6% |   1 → 9 | `push`                                             | `blib2to3/pgen2/parse.py`    |
|  +87.5% |    +7 |   4.2% → 7.7% |  8 → 15 | `__init__`                                         | `blib2to3/pytree.py`         |
|     new |    +6 |   0.0% → 3.1% |   0 → 6 | `__str__`                                          | `blib2to3/pytree.py`         |
|  +55.6% |    +5 |   4.8% → 7.1% |  9 → 14 | `visit_default`                                    | `black/linegen.py`           |
|     new |    +5 |   0.0% → 2.6% |   0 → 5 | `append_comment`                                   | `black/lines.py`             |
|  +57.1% |    +4 |   3.7% → 5.6% |  7 → 11 | `generate_tokens`                                  | `blib2to3/pgen2/tokenize.py` |
|  +80.0% |    +4 |   2.6% → 4.6% |   5 → 9 | `__str__`                                          | `black/lines.py`             |
|  +44.4% |    +4 |   4.8% → 6.6% |  9 → 13 | `parse`                                            | `ast.py`                     |
|     new |    +4 |   0.0% → 2.0% |   0 → 4 | `contains_implicit_multiline_string_with_comments` | `black/lines.py`             |
|     new |    +3 |   0.0% → 1.5% |   0 → 3 | `sub_twice`                                        | `black/strings.py`           |
|  +10.5% |    +2 | 10.1% → 10.7% | 19 → 21 | `_addtoken`                                        | `blib2to3/pgen2/parse.py`    |
|     new |    +2 |   0.0% → 1.0% |   0 → 2 | `__next__`                                         | `blib2to3/pgen2/driver.py`   |
| +200.0% |    +2 |   0.5% → 1.5% |   1 → 3 | `maybe_empty_lines`                                | `black/lines.py`             |
|     new |    +2 |   0.0% → 1.0% |   0 → 2 | `shift`                                            | `blib2to3/pgen2/parse.py`    |
| +200.0% |    +2 |   0.5% → 1.5% |   1 → 3 | `pre_order`                                        | `blib2to3/pytree.py`         |
|     new |    +2 |   0.0% → 1.0% |   0 → 2 | `_partially_consume_prefix`                        | `blib2to3/pgen2/driver.py`   |
|     new |    +2 |   0.0% → 1.0% |   0 → 2 | `contains_standalone_comments`                     | `black/lines.py`             |
|     new |    +2 |   0.0% → 1.0% |   0 → 2 | `is_class`                                         | `black/lines.py`             |
|     new |    +1 |   0.0% → 0.5% |   0 → 1 | `visit_suite`                                      | `black/linegen.py`           |
|     new |    +1 |   0.0% → 0.5% |   0 → 1 | `_format_str_once`                                 | `black/__init__.py`          |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Ours

|  Change | Delta |           % | Samples | Function                     | Location                     |
| ------: | ----: | ----------: | ------: | ---------------------------- | ---------------------------- |
| removed |    -5 | 2.6% → 0.0% |   5 → 0 | `hug_power_op`               | `black/trans.py`             |
|  -44.4% |    -4 | 4.8% → 2.6% |   9 → 5 | `pop`                        | `blib2to3/pgen2/parse.py`    |
|  -50.0% |    -4 | 4.2% → 2.0% |   8 → 4 | `mark`                       | `black/brackets.py`          |
| removed |    -4 | 2.1% → 0.0% |   4 → 0 | `normalize_invisible_parens` | `black/linegen.py`           |
| removed |    -4 | 2.1% → 0.0% |   4 → 0 | `current`                    | `blib2to3/pgen2/tokenize.py` |
|  -50.0% |    -3 | 3.2% → 1.5% |   6 → 3 | `normalize_trailing_prefix`  | `black/comments.py`          |
| removed |    -3 | 1.6% → 0.0% |   3 → 0 | `generate_comments`          | `black/comments.py`          |
| removed |    -3 | 1.6% → 0.0% |   3 → 0 | `whitespace`                 | `black/nodes.py`             |
| removed |    -3 | 1.6% → 0.0% |   3 → 0 | `assert_equivalent`          | `black/__init__.py`          |
| removed |    -3 | 1.6% → 0.0% |   3 → 0 | `__bool__`                   | `black/lines.py`             |
| removed |    -3 | 1.6% → 0.0% |   3 → 0 | `is_split_before_delimiter`  | `black/brackets.py`          |
|  -75.0% |    -3 | 2.1% → 0.5% |   4 → 1 | `convert`                    | `blib2to3/pytree.py`         |
| removed |    -3 | 1.6% → 0.0% |   3 → 0 | `normalize_string_quotes`    | `black/strings.py`           |
|  -75.0% |    -3 | 2.1% → 0.5% |   4 → 1 | `get_features_used`          | `black/__init__.py`          |
|  -50.0% |    -2 | 2.1% → 1.0% |   4 → 2 | `transform_line`             | `black/linegen.py`           |
| removed |    -2 | 1.1% → 0.0% |   2 → 0 | `any_open_brackets`          | `black/brackets.py`          |
|  -66.7% |    -2 | 1.6% → 0.5% |   3 → 1 | `update_sibling_maps`        | `blib2to3/pytree.py`         |
| removed |    -2 | 1.1% → 0.0% |   2 → 0 | `compile`                    | `re/_compiler.py`            |
| removed |    -2 | 1.1% → 0.0% |   2 → 0 | `<genexpr>`                  | `black/lines.py`             |
| removed |    -1 | 0.5% → 0.0% |   1 → 0 | `visit_stmt`                 | `black/linegen.py`           |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Ours

|  Change | Delta |             % |   Samples | Function                          | Location                   |
| ------: | ----: | ------------: | --------: | --------------------------------- | -------------------------- |
|  +39.3% |   +24 | 32.3% → 43.4% |   61 → 85 | `check_stability_and_equivalence` | `black/__init__.py`        |
|  +48.8% |   +21 | 22.8% → 32.7% |   43 → 64 | `assert_stable`                   | `black/__init__.py`        |
|  +30.4% |   +17 | 29.6% → 37.2% |   56 → 73 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |
|  +30.4% |   +17 | 29.6% → 37.2% |   56 → 73 | `parse_string`                    | `blib2to3/pgen2/driver.py` |
|  +30.4% |   +17 | 29.6% → 37.2% |   56 → 73 | `lib2to3_parse`                   | `black/parsing.py`         |
|  +28.6% |   +12 | 22.2% → 27.6% |   42 → 54 | `_addtoken`                       | `blib2to3/pgen2/parse.py`  |
|   +6.3% |   +11 | 92.1% → 94.4% | 174 → 185 | `format_file_contents`            | `black/__init__.py`        |
|   +6.3% |   +11 | 92.1% → 94.4% | 174 → 185 | `format_file_in_place`            | `black/__init__.py`        |
|   +6.3% |   +11 | 92.1% → 94.4% | 174 → 185 | `reformat_one`                    | `black/__init__.py`        |
|   +6.3% |   +11 | 92.1% → 94.4% | 174 → 185 | `main`                            | `black/__init__.py`        |
|   +6.3% |   +11 | 92.1% → 94.4% | 174 → 185 | `new_func`                        | `click/decorators.py`      |
|   +6.3% |   +11 | 92.1% → 94.4% | 174 → 185 | `invoke`                          | `click/core.py`            |
|   +6.3% |   +11 | 92.1% → 94.4% | 174 → 185 | `main`                            | `click/core.py`            |
|   +6.3% |   +11 | 92.1% → 94.4% | 174 → 185 | `__call__`                        | `click/core.py`            |
|   +6.3% |   +11 | 92.1% → 94.4% | 174 → 185 | `patched_main`                    | `black/__init__.py`        |
|   +6.3% |   +11 | 92.1% → 94.4% | 174 → 185 | `<module>`                        | `black/__main__.py`        |
|  +25.6% |   +11 | 22.8% → 27.6% |   43 → 54 | `addtoken`                        | `blib2to3/pgen2/parse.py`  |
|   +5.8% |    +9 | 82.0% → 83.7% | 155 → 164 | `_format_str_once`                | `black/__init__.py`        |
| +150.0% |    +9 |   3.2% → 7.7% |    6 → 15 | `__str__`                         | `black/lines.py`           |
| +800.0% |    +8 |   0.5% → 4.6% |     1 → 9 | `push`                            | `blib2to3/pgen2/parse.py`  |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Ours

|  Change | Delta |             % |   Samples | Function                            | Location                     |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ---------------------------- |
|  -40.0% |   -26 | 34.4% → 19.9% |   65 → 39 | `visit_funcdef`                     | `black/linegen.py`           |
|  -35.8% |   -24 | 35.4% → 21.9% |   67 → 43 | `visit_default`                     | `black/nodes.py`             |
|  -37.5% |   -24 | 33.9% → 20.4% |   64 → 40 | `visit_suite`                       | `black/linegen.py`           |
|  -34.3% |   -23 | 35.4% → 22.4% |   67 → 44 | `visit_default`                     | `black/linegen.py`           |
|  -34.3% |   -23 | 35.4% → 22.4% |   67 → 44 | `visit`                             | `black/nodes.py`             |
|  -33.8% |   -22 | 34.4% → 21.9% |   65 → 43 | `visit_stmt`                        | `black/linegen.py`           |
|  -11.5% |   -13 | 59.8% → 51.0% | 113 → 100 | `format_str`                        | `black/__init__.py`          |
|  -44.0% |   -11 |  13.2% → 7.1% |   25 → 14 | `append`                            | `black/lines.py`             |
|  -26.3% |   -10 | 20.1% → 14.3% |   38 → 28 | `visit_simple_stmt`                 | `black/linegen.py`           |
|  -53.8% |    -7 |   6.9% → 3.1% |    13 → 6 | `generate_comments`                 | `black/comments.py`          |
|  -26.9% |    -7 |  13.8% → 9.7% |   26 → 19 | `visit_power`                       | `black/linegen.py`           |
|  -63.6% |    -7 |   5.8% → 2.0% |    11 → 4 | `mark`                              | `black/brackets.py`          |
|  -66.7% |    -6 |   4.8% → 1.5% |     9 → 3 | `whitespace`                        | `black/nodes.py`             |
| removed |    -5 |   2.6% → 0.0% |     5 → 0 | `_hugging_power_ops_line_to_string` | `black/linegen.py`           |
|  -40.0% |    -4 |   5.3% → 3.1% |    10 → 6 | `normalize_trailing_prefix`         | `black/comments.py`          |
|  -66.7% |    -4 |   3.2% → 1.0% |     6 → 2 | `preceding_leaf`                    | `black/nodes.py`             |
|  -80.0% |    -4 |   2.6% → 0.5% |     5 → 1 | `hug_power_op`                      | `black/trans.py`             |
| removed |    -4 |   2.1% → 0.0% |     4 → 0 | `current`                           | `blib2to3/pgen2/tokenize.py` |
|  -42.9% |    -3 |   3.7% → 2.0% |     7 → 4 | `prev_sibling`                      | `blib2to3/pytree.py`         |
|  -75.0% |    -3 |   2.1% → 0.5% |     4 → 1 | `<module>`                          | `black/nodes.py`             |

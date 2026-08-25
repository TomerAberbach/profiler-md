# Sampling profile diff

Collected 1,005 samples → 984 samples (-21 samples, -2.1%).

| Category          |  Change | Delta |             % |   Samples |
| ----------------- | ------: | ----: | ------------: | --------: |
| Ours              |  +24.9% |  +170 | 67.9% → 86.6% | 682 → 852 |
| Garbage collector |  -63.5% |  -200 | 31.3% → 11.7% | 315 → 115 |
| Standard library  | +112.5% |    +9 |   0.8% → 1.7% |    8 → 17 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                              | Location                                 |
| ------: | ----: | ------------: | --------: | ------------------------------------- | ---------------------------------------- |
| +364.2% |  +193 |  5.3% → 25.0% |  53 → 246 | `Driver.parse_tokens`                 | `driver.py`                              |
|   +4.6% |    +7 | 15.0% → 16.1% | 151 → 158 | `Parser._addtoken`                    | `parse.py`                               |
| +233.3% |    +7 |   0.3% → 1.0% |    3 → 10 | `wrap_in_parentheses`                 | `nodes.py`                               |
| +200.0% |    +6 |   0.3% → 0.9% |     3 → 9 | `_format_str_once`                    | `__init__.py`                            |
|  +66.7% |    +6 |   0.9% → 1.5% |    9 → 15 | `_stringify_ast`                      | `parsing.py`                             |
| +300.0% |    +6 |   0.2% → 0.8% |     2 → 8 | `Parser.classify`                     | `parse.py`                               |
|  +71.4% |    +5 |   0.7% → 1.2% |    7 → 12 | `Visitor.visit_default`               | `nodes.py`                               |
|     new |    +5 |   0.0% → 0.5% |     0 → 5 | `hug_power_op`                        | `trans.py`                               |
|     new |    +5 |   0.0% → 0.5% |     0 → 5 | `Leaf.__init__`                       | `pytree.py`                              |
| +133.3% |    +4 |   0.3% → 0.7% |     3 → 7 | `Parser.push`                         | `parse.py`                               |
| +400.0% |    +4 |   0.1% → 0.5% |     1 → 5 | `EmptyLineTracker._maybe_empty_lines` | `lines.py`                               |
| +100.0% |    +3 |   0.3% → 0.6% |     3 → 6 | `convert`                             | `pytree.py`                              |
|  +66.7% |    +2 |   0.3% → 0.5% |     3 → 5 | `LineGenerator.visit_stmt`            | `linegen.py`                             |
|  +25.0% |    +2 |   0.8% → 1.0% |    8 → 10 | `assert_equivalent`                   | `__init__.py`                            |
|   +2.1% |    +2 |  9.6% → 10.0% |   96 → 98 | `get_features_used`                   | `__init__.py`                            |
|  +22.2% |    +2 |   0.9% → 1.1% |    9 → 11 | `convert_one_fmt_off_pair`            | `comments.py`                            |
| +100.0% |    +2 |   0.2% → 0.4% |     2 → 4 | `LineGenerator.visit_simple_stmt`     | `linegen.py`                             |
|  +40.0% |    +2 |   0.5% → 0.7% |     5 → 7 | `_compile_bytecode`                   | `<frozen importlib._bootstrap_external>` |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `FileFinder.find_spec`                | `<frozen importlib._bootstrap_external>` |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `Base.leaves`                         | `pytree.py`                              |

##### Ours

|  Change | Delta |             % |   Samples | Function                                                | Location      |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------- | ------------- |
| +364.2% |  +193 |  5.3% → 25.0% |  53 → 246 | `Driver.parse_tokens`                                   | `driver.py`   |
|   +4.6% |    +7 | 15.0% → 16.1% | 151 → 158 | `Parser._addtoken`                                      | `parse.py`    |
| +233.3% |    +7 |   0.3% → 1.0% |    3 → 10 | `wrap_in_parentheses`                                   | `nodes.py`    |
| +200.0% |    +6 |   0.3% → 0.9% |     3 → 9 | `_format_str_once`                                      | `__init__.py` |
|  +66.7% |    +6 |   0.9% → 1.5% |    9 → 15 | `_stringify_ast`                                        | `parsing.py`  |
| +300.0% |    +6 |   0.2% → 0.8% |     2 → 8 | `Parser.classify`                                       | `parse.py`    |
|  +71.4% |    +5 |   0.7% → 1.2% |    7 → 12 | `Visitor.visit_default`                                 | `nodes.py`    |
|     new |    +5 |   0.0% → 0.5% |     0 → 5 | `hug_power_op`                                          | `trans.py`    |
|     new |    +5 |   0.0% → 0.5% |     0 → 5 | `Leaf.__init__`                                         | `pytree.py`   |
| +133.3% |    +4 |   0.3% → 0.7% |     3 → 7 | `Parser.push`                                           | `parse.py`    |
| +400.0% |    +4 |   0.1% → 0.5% |     1 → 5 | `EmptyLineTracker._maybe_empty_lines`                   | `lines.py`    |
| +100.0% |    +3 |   0.3% → 0.6% |     3 → 6 | `convert`                                               | `pytree.py`   |
|  +66.7% |    +2 |   0.3% → 0.5% |     3 → 5 | `LineGenerator.visit_stmt`                              | `linegen.py`  |
|  +25.0% |    +2 |   0.8% → 1.0% |    8 → 10 | `assert_equivalent`                                     | `__init__.py` |
|   +2.1% |    +2 |  9.6% → 10.0% |   96 → 98 | `get_features_used`                                     | `__init__.py` |
|  +22.2% |    +2 |   0.9% → 1.1% |    9 → 11 | `convert_one_fmt_off_pair`                              | `comments.py` |
| +100.0% |    +2 |   0.2% → 0.4% |     2 → 4 | `LineGenerator.visit_simple_stmt`                       | `linegen.py`  |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `Base.leaves`                                           | `pytree.py`   |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `Line.contains_implicit_multiline_string_with_comments` | `lines.py`    |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `is_line_short_enough`                                  | `lines.py`    |

##### Standard library

|  Change | Delta |           % | Samples | Function                            | Location                                 |
| ------: | ----: | ----------: | ------: | ----------------------------------- | ---------------------------------------- |
|  +40.0% |    +2 | 0.5% → 0.7% |   5 → 7 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `FileFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `_call_with_frames_removed`         | `<frozen importlib._bootstrap>`          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `_load_unlocked`                    | `<frozen importlib._bootstrap>`          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `_find_and_load_unlocked`           | `<frozen importlib._bootstrap>`          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `PathFinder._get_spec`              | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `FileFinder._get_spec`              | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `SourceFileLoader.path_stats`       | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `BufferedIncrementalDecoder.decode` | `<frozen codecs>`                        |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                             | Location         |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ---------------- |
|  -63.5% |  -200 | 31.3% → 11.7% | 315 → 115 | `(garbage collector)`                | `<unknown>`      |
|  -55.6% |   -25 |   4.5% → 2.0% |   45 → 20 | `generate_tokens`                    | `tokenize.py`    |
|  -48.4% |   -15 |   3.1% → 1.6% |   31 → 16 | `Visitor.visit`                      | `nodes.py`       |
|  -72.7% |    -8 |   1.1% → 0.3% |    11 → 3 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`       |
|  -70.0% |    -7 |   1.0% → 0.3% |    10 → 3 | `line_to_string`                     | `lines.py`       |
|  -19.2% |    -5 |   2.6% → 2.1% |   26 → 21 | `Parser.pop`                         | `parse.py`       |
| removed |    -3 |   0.3% → 0.0% |     3 → 0 | `run_transformer`                    | `linegen.py`     |
|  -75.0% |    -3 |   0.4% → 0.1% |     4 → 1 | `_FuncBuilder.add_fns_to_class`      | `dataclasses.py` |
| removed |    -3 |   0.3% → 0.0% |     3 → 0 | `is_docstring`                       | `nodes.py`       |
|  -50.0% |    -2 |   0.4% → 0.2% |     4 → 2 | `transform_line`                     | `linegen.py`     |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `_contains_fmt_skip_comment`         | `comments.py`    |
|  -66.7% |    -2 |   0.3% → 0.1% |     3 → 1 | `__create_fn__.<locals>.__init__`    | `<string>`       |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `generate_comments`                  | `comments.py`    |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `type_repr`                          | `pytree.py`      |
|  -66.7% |    -2 |   0.3% → 0.1% |     3 → 1 | `normalize_string_quotes`            | `strings.py`     |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `Base.remove`                        | `pytree.py`      |
|  -20.0% |    -1 |   0.5% → 0.4% |     5 → 4 | `check_stability_and_equivalence`    | `__init__.py`    |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `format_file_in_place`               | `__init__.py`    |
|  -10.0% |    -1 |   1.0% → 0.9% |    10 → 9 | `normalize_invisible_parens`         | `linegen.py`     |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `LineGenerator.visit_funcdef`        | `linegen.py`     |

##### Ours

|  Change | Delta |           % | Samples | Function                             | Location         |
| ------: | ----: | ----------: | ------: | ------------------------------------ | ---------------- |
|  -55.6% |   -25 | 4.5% → 2.0% | 45 → 20 | `generate_tokens`                    | `tokenize.py`    |
|  -48.4% |   -15 | 3.1% → 1.6% | 31 → 16 | `Visitor.visit`                      | `nodes.py`       |
|  -72.7% |    -8 | 1.1% → 0.3% |  11 → 3 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`       |
|  -70.0% |    -7 | 1.0% → 0.3% |  10 → 3 | `line_to_string`                     | `lines.py`       |
|  -19.2% |    -5 | 2.6% → 2.1% | 26 → 21 | `Parser.pop`                         | `parse.py`       |
| removed |    -3 | 0.3% → 0.0% |   3 → 0 | `run_transformer`                    | `linegen.py`     |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `_FuncBuilder.add_fns_to_class`      | `dataclasses.py` |
| removed |    -3 | 0.3% → 0.0% |   3 → 0 | `is_docstring`                       | `nodes.py`       |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `transform_line`                     | `linegen.py`     |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `_contains_fmt_skip_comment`         | `comments.py`    |
|  -66.7% |    -2 | 0.3% → 0.1% |   3 → 1 | `__create_fn__.<locals>.__init__`    | `<string>`       |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `generate_comments`                  | `comments.py`    |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `type_repr`                          | `pytree.py`      |
|  -66.7% |    -2 | 0.3% → 0.1% |   3 → 1 | `normalize_string_quotes`            | `strings.py`     |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `Base.remove`                        | `pytree.py`      |
|  -20.0% |    -1 | 0.5% → 0.4% |   5 → 4 | `check_stability_and_equivalence`    | `__init__.py`    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `format_file_in_place`               | `__init__.py`    |
|  -10.0% |    -1 | 1.0% → 0.9% |  10 → 9 | `normalize_invisible_parens`         | `linegen.py`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `LineGenerator.visit_funcdef`        | `linegen.py`     |
|   -2.6% |    -1 |        3.9% | 39 → 38 | `parse`                              | `ast.py`         |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| -63.5% |  -200 | 31.3% → 11.7% | 315 → 115 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function          | Location                                 |
| ------: | ----: | ----------: | ------: | ----------------- | ---------------------------------------- |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ABCMeta.__new__` | `<frozen abc>`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_path_join`      | `<frozen importlib._bootstrap_external>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                              | Location                                 |
| ------: | ----: | ------------: | --------: | ------------------------------------- | ---------------------------------------- |
|   +3.8% |   +18 | 47.5% → 50.3% | 477 → 495 | `check_stability_and_equivalence`     | `__init__.py`                            |
|   +3.2% |   +13 | 40.6% → 42.8% | 408 → 421 | `assert_stable`                       | `__init__.py`                            |
|  +53.8% |    +7 |   1.3% → 2.0% |   13 → 20 | `_stringify_ast_with_new_parent`      | `parsing.py`                             |
|  +53.8% |    +7 |   1.3% → 2.0% |   13 → 20 | `_stringify_ast`                      | `parsing.py`                             |
|   +9.4% |    +6 |   6.4% → 7.1% |   64 → 70 | `assert_equivalent`                   | `__init__.py`                            |
| +100.0% |    +6 |   0.6% → 1.2% |    6 → 12 | `hug_power_op`                        | `trans.py`                               |
| +300.0% |    +6 |   0.2% → 0.8% |     2 → 8 | `Parser.classify`                     | `parse.py`                               |
|   +2.0% |    +5 | 24.8% → 25.8% | 249 → 254 | `Parser.addtoken`                     | `parse.py`                               |
| +100.0% |    +5 |   0.5% → 1.0% |    5 → 10 | `wrap_in_parentheses`                 | `nodes.py`                               |
|     new |    +5 |   0.0% → 0.5% |     0 → 5 | `Leaf.__init__`                       | `pytree.py`                              |
| +133.3% |    +4 |   0.3% → 0.7% |     3 → 7 | `Parser.push`                         | `parse.py`                               |
|   +1.3% |    +3 | 22.4% → 23.2% | 225 → 228 | `Parser._addtoken`                    | `parse.py`                               |
|  +16.7% |    +3 |   1.8% → 2.1% |   18 → 21 | `convert`                             | `pytree.py`                              |
|  +27.3% |    +3 |   1.1% → 1.4% |   11 → 14 | `convert_one_fmt_off_pair`            | `comments.py`                            |
|  +27.3% |    +3 |   1.1% → 1.4% |   11 → 14 | `normalize_fmt_off`                   | `comments.py`                            |
| +300.0% |    +3 |   0.1% → 0.4% |     1 → 4 | `PathFinder._get_spec`                | `<frozen importlib._bootstrap_external>` |
| +300.0% |    +3 |   0.1% → 0.4% |     1 → 4 | `PathFinder.find_spec`                | `<frozen importlib._bootstrap_external>` |
| +300.0% |    +3 |   0.1% → 0.4% |     1 → 4 | `_find_spec`                          | `<frozen importlib._bootstrap>`          |
|  +75.0% |    +3 |   0.4% → 0.7% |     4 → 7 | `EmptyLineTracker._maybe_empty_lines` | `lines.py`                               |
|   +9.1% |    +2 |   2.2% → 2.4% |   22 → 24 | `run_transformer`                     | `linegen.py`                             |

##### Ours

|  Change | Delta |             % |   Samples | Function                              | Location      |
| ------: | ----: | ------------: | --------: | ------------------------------------- | ------------- |
|   +3.8% |   +18 | 47.5% → 50.3% | 477 → 495 | `check_stability_and_equivalence`     | `__init__.py` |
|   +3.2% |   +13 | 40.6% → 42.8% | 408 → 421 | `assert_stable`                       | `__init__.py` |
|  +53.8% |    +7 |   1.3% → 2.0% |   13 → 20 | `_stringify_ast_with_new_parent`      | `parsing.py`  |
|  +53.8% |    +7 |   1.3% → 2.0% |   13 → 20 | `_stringify_ast`                      | `parsing.py`  |
|   +9.4% |    +6 |   6.4% → 7.1% |   64 → 70 | `assert_equivalent`                   | `__init__.py` |
| +100.0% |    +6 |   0.6% → 1.2% |    6 → 12 | `hug_power_op`                        | `trans.py`    |
| +300.0% |    +6 |   0.2% → 0.8% |     2 → 8 | `Parser.classify`                     | `parse.py`    |
|   +2.0% |    +5 | 24.8% → 25.8% | 249 → 254 | `Parser.addtoken`                     | `parse.py`    |
| +100.0% |    +5 |   0.5% → 1.0% |    5 → 10 | `wrap_in_parentheses`                 | `nodes.py`    |
|     new |    +5 |   0.0% → 0.5% |     0 → 5 | `Leaf.__init__`                       | `pytree.py`   |
| +133.3% |    +4 |   0.3% → 0.7% |     3 → 7 | `Parser.push`                         | `parse.py`    |
|   +1.3% |    +3 | 22.4% → 23.2% | 225 → 228 | `Parser._addtoken`                    | `parse.py`    |
|  +16.7% |    +3 |   1.8% → 2.1% |   18 → 21 | `convert`                             | `pytree.py`   |
|  +27.3% |    +3 |   1.1% → 1.4% |   11 → 14 | `convert_one_fmt_off_pair`            | `comments.py` |
|  +27.3% |    +3 |   1.1% → 1.4% |   11 → 14 | `normalize_fmt_off`                   | `comments.py` |
|  +75.0% |    +3 |   0.4% → 0.7% |     4 → 7 | `EmptyLineTracker._maybe_empty_lines` | `lines.py`    |
|   +9.1% |    +2 |   2.2% → 2.4% |   22 → 24 | `run_transformer`                     | `linegen.py`  |
|   +9.1% |    +2 |   2.2% → 2.4% |   22 → 24 | `<module>`                            | `__init__.py` |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `<module>`                            | `agg.py`      |
|  +66.7% |    +2 |   0.3% → 0.5% |     3 → 5 | `<module>`                            | `cache.py`    |

##### Standard library

|  Change | Delta |           % | Samples | Function                            | Location                                 |
| ------: | ----: | ----------: | ------: | ----------------------------------- | ---------------------------------------- |
| +300.0% |    +3 | 0.1% → 0.4% |   1 → 4 | `PathFinder._get_spec`              | `<frozen importlib._bootstrap_external>` |
| +300.0% |    +3 | 0.1% → 0.4% |   1 → 4 | `PathFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
| +300.0% |    +3 | 0.1% → 0.4% |   1 → 4 | `_find_spec`                        | `<frozen importlib._bootstrap>`          |
|   +9.1% |    +2 | 2.2% → 2.4% | 22 → 24 | `_call_with_frames_removed`         | `<frozen importlib._bootstrap>`          |
|   +9.1% |    +2 | 2.2% → 2.4% | 22 → 24 | `_LoaderBasics.exec_module`         | `<frozen importlib._bootstrap_external>` |
|   +9.1% |    +2 | 2.2% → 2.4% | 22 → 24 | `_load_unlocked`                    | `<frozen importlib._bootstrap>`          |
|   +9.1% |    +2 | 2.2% → 2.4% | 22 → 24 | `_find_and_load_unlocked`           | `<frozen importlib._bootstrap>`          |
|   +9.1% |    +2 | 2.2% → 2.4% | 22 → 24 | `_find_and_load`                    | `<frozen importlib._bootstrap>`          |
|   +9.1% |    +2 | 2.2% → 2.4% | 22 → 24 | `_get_module_details`               | `<frozen runpy>`                         |
|  +33.3% |    +2 | 0.6% → 0.8% |   6 → 8 | `SourceLoader.get_code`             | `<frozen importlib._bootstrap_external>` |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `FileFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
|  +16.7% |    +1 | 0.6% → 0.7% |   6 → 7 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `FileFinder._get_spec`              | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `module_from_spec`                  | `<frozen importlib._bootstrap>`          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `SourceFileLoader.path_stats`       | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `BufferedIncrementalDecoder.decode` | `<frozen codecs>`                        |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                         | Location        |
| -----: | ----: | ------------: | --------: | -------------------------------- | --------------- |
| -63.5% |  -200 | 31.3% → 11.7% | 315 → 115 | `(garbage collector)`            | `<unknown>`     |
|  -8.3% |   -42 | 50.2% → 47.1% | 505 → 463 | `format_str`                     | `__init__.py`   |
|  -3.4% |   -31 | 90.2% → 89.0% | 907 → 876 | `_format_str_once`               | `__init__.py`   |
| -14.4% |   -26 | 18.0% → 15.8% | 181 → 155 | `LineGenerator.visit_stmt`       | `linegen.py`    |
| -14.2% |   -26 | 18.2% → 16.0% | 183 → 157 | `Visitor.visit`                  | `nodes.py`      |
| -14.2% |   -26 | 18.2% → 16.0% | 183 → 157 | `Visitor.visit_default`          | `nodes.py`      |
| -14.2% |   -26 | 18.2% → 16.0% | 183 → 157 | `LineGenerator.visit_default`    | `linegen.py`    |
| -14.7% |   -26 | 17.6% → 15.3% | 177 → 151 | `LineGenerator.visit_suite`      | `linegen.py`    |
| -14.4% |   -25 | 17.3% → 15.1% | 174 → 149 | `LineGenerator.visit_funcdef`    | `linegen.py`    |
|  -2.4% |   -24 | 97.7% → 97.4% | 982 → 958 | `format_file_contents`           | `__init__.py`   |
|  -2.4% |   -24 | 97.8% → 97.5% | 983 → 959 | `format_file_in_place`           | `__init__.py`   |
|  -2.4% |   -24 | 97.8% → 97.5% | 983 → 959 | `reformat_one`                   | `__init__.py`   |
|  -2.4% |   -24 | 97.8% → 97.5% | 983 → 959 | `main`                           | `__init__.py`   |
|  -2.4% |   -24 | 97.8% → 97.5% | 983 → 959 | `pass_context.<locals>.new_func` | `decorators.py` |
|  -2.4% |   -24 | 97.8% → 97.5% | 983 → 959 | `Context.invoke`                 | `core.py`       |
|  -2.4% |   -24 | 97.8% → 97.5% | 983 → 959 | `Command.invoke`                 | `core.py`       |
|  -2.3% |   -23 | 97.8% → 97.6% | 983 → 960 | `Command.main`                   | `core.py`       |
|  -2.3% |   -23 | 97.8% → 97.6% | 983 → 960 | `Command.__call__`               | `core.py`       |
|  -2.3% |   -23 | 97.8% → 97.6% | 983 → 960 | `patched_main`                   | `__init__.py`   |
|  -2.3% |   -23 | 97.8% → 97.6% | 983 → 960 | `<module>`                       | `__main__.py`   |

##### Ours

| Change | Delta |             % |   Samples | Function                         | Location        |
| -----: | ----: | ------------: | --------: | -------------------------------- | --------------- |
|  -8.3% |   -42 | 50.2% → 47.1% | 505 → 463 | `format_str`                     | `__init__.py`   |
|  -3.4% |   -31 | 90.2% → 89.0% | 907 → 876 | `_format_str_once`               | `__init__.py`   |
| -14.4% |   -26 | 18.0% → 15.8% | 181 → 155 | `LineGenerator.visit_stmt`       | `linegen.py`    |
| -14.2% |   -26 | 18.2% → 16.0% | 183 → 157 | `Visitor.visit`                  | `nodes.py`      |
| -14.2% |   -26 | 18.2% → 16.0% | 183 → 157 | `Visitor.visit_default`          | `nodes.py`      |
| -14.2% |   -26 | 18.2% → 16.0% | 183 → 157 | `LineGenerator.visit_default`    | `linegen.py`    |
| -14.7% |   -26 | 17.6% → 15.3% | 177 → 151 | `LineGenerator.visit_suite`      | `linegen.py`    |
| -14.4% |   -25 | 17.3% → 15.1% | 174 → 149 | `LineGenerator.visit_funcdef`    | `linegen.py`    |
|  -2.4% |   -24 | 97.7% → 97.4% | 982 → 958 | `format_file_contents`           | `__init__.py`   |
|  -2.4% |   -24 | 97.8% → 97.5% | 983 → 959 | `format_file_in_place`           | `__init__.py`   |
|  -2.4% |   -24 | 97.8% → 97.5% | 983 → 959 | `reformat_one`                   | `__init__.py`   |
|  -2.4% |   -24 | 97.8% → 97.5% | 983 → 959 | `main`                           | `__init__.py`   |
|  -2.4% |   -24 | 97.8% → 97.5% | 983 → 959 | `pass_context.<locals>.new_func` | `decorators.py` |
|  -2.4% |   -24 | 97.8% → 97.5% | 983 → 959 | `Context.invoke`                 | `core.py`       |
|  -2.4% |   -24 | 97.8% → 97.5% | 983 → 959 | `Command.invoke`                 | `core.py`       |
|  -2.3% |   -23 | 97.8% → 97.6% | 983 → 960 | `Command.main`                   | `core.py`       |
|  -2.3% |   -23 | 97.8% → 97.6% | 983 → 960 | `Command.__call__`               | `core.py`       |
|  -2.3% |   -23 | 97.8% → 97.6% | 983 → 960 | `patched_main`                   | `__init__.py`   |
|  -2.3% |   -23 | 97.8% → 97.6% | 983 → 960 | `<module>`                       | `__main__.py`   |
| -46.9% |   -23 |   4.9% → 2.6% |   49 → 26 | `generate_tokens`                | `tokenize.py`   |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| -63.5% |  -200 | 31.3% → 11.7% | 315 → 115 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |             % |     Samples | Function              | Location                                 |
| ------: | ----: | ------------: | ----------: | --------------------- | ---------------------------------------- |
|   -2.3% |   -23 | 97.8% → 97.6% |   983 → 960 | `_run_module_code`    | `<frozen runpy>`                         |
|   -2.1% |   -21 |        100.0% | 1,005 → 984 | `_run_code`           | `<frozen runpy>`                         |
|   -2.1% |   -21 |        100.0% | 1,005 → 984 | `run_module`          | `<frozen runpy>`                         |
|   -2.1% |   -21 |        100.0% | 1,005 → 984 | `_run_module_as_main` | `<frozen runpy>`                         |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `ABCMeta.__new__`     | `<frozen abc>`                           |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `abstractmethod`      | `<frozen abc>`                           |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `_path_join`          | `<frozen importlib._bootstrap_external>` |

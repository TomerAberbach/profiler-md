# Sampling profile diff

Collected 997 samples → 909 samples (-88 samples, -8.8%).

| Category          | Change | Delta |             % |   Samples |
| ----------------- | -----: | ----: | ------------: | --------: |
| Ours              |  -4.6% |   -30 | 64.9% → 67.9% | 647 → 617 |
| Garbage collector | -17.5% |   -59 | 33.9% → 30.7% | 338 → 279 |
| Standard library  |  +8.3% |    +1 |   1.2% → 1.4% |   12 → 13 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                | Location                                 |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------- | ---------------------------------------- |
|  +10.0% |    +9 |  9.0% → 10.9% |   90 → 99 | `get_features_used`                                     | `__init__.py`                            |
| +800.0% |    +8 |   0.1% → 1.0% |     1 → 9 | `convert`                                               | `pytree.py`                              |
| +116.7% |    +7 |   0.6% → 1.4% |    6 → 13 | `LineGenerator.visit_default`                           | `linegen.py`                             |
|   +3.7% |    +5 | 13.6% → 15.5% | 136 → 141 | `Parser._addtoken`                                      | `parse.py`                               |
|  +13.6% |    +3 |   2.2% → 2.8% |   22 → 25 | `Parser.pop`                                            | `parse.py`                               |
| +300.0% |    +3 |   0.1% → 0.4% |     1 → 4 | `_hugging_power_ops_line_to_string`                     | `linegen.py`                             |
| +100.0% |    +3 |   0.3% → 0.7% |     3 → 6 | `_FuncBuilder.add_fns_to_class`                         | `dataclasses.py`                         |
|  +50.0% |    +2 |   0.4% → 0.7% |     4 → 6 | `Visitor.visit_default`                                 | `nodes.py`                               |
|  +50.0% |    +2 |   0.4% → 0.7% |     4 → 6 | `LineGenerator.visit_power`                             | `linegen.py`                             |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `__create_fn__.<locals>.__init__`                       | `<string>`                               |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `Line.contains_implicit_multiline_string_with_comments` | `lines.py`                               |
| +100.0% |    +2 |   0.2% → 0.4% |     2 → 4 | `BracketTracker.mark`                                   | `brackets.py`                            |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `EmptyLineTracker._maybe_empty_lines`                   | `lines.py`                               |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `_first_right_hand_split`                               | `linegen.py`                             |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `_stringify_ast_with_new_parent`                        | `parsing.py`                             |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `_path_stat`                                            | `<frozen importlib._bootstrap_external>` |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `is_stub_suite`                                         | `nodes.py`                               |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `lib2to3_parse`                                         | `parsing.py`                             |
|  +25.0% |    +1 |   0.4% → 0.6% |     4 → 5 | `check_stability_and_equivalence`                       | `__init__.py`                            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `LineGenerator.visit_funcdef`                           | `linegen.py`                             |

##### Ours

|  Change | Delta |             % |   Samples | Function                                                | Location         |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------- | ---------------- |
|  +10.0% |    +9 |  9.0% → 10.9% |   90 → 99 | `get_features_used`                                     | `__init__.py`    |
| +800.0% |    +8 |   0.1% → 1.0% |     1 → 9 | `convert`                                               | `pytree.py`      |
| +116.7% |    +7 |   0.6% → 1.4% |    6 → 13 | `LineGenerator.visit_default`                           | `linegen.py`     |
|   +3.7% |    +5 | 13.6% → 15.5% | 136 → 141 | `Parser._addtoken`                                      | `parse.py`       |
|  +13.6% |    +3 |   2.2% → 2.8% |   22 → 25 | `Parser.pop`                                            | `parse.py`       |
| +300.0% |    +3 |   0.1% → 0.4% |     1 → 4 | `_hugging_power_ops_line_to_string`                     | `linegen.py`     |
| +100.0% |    +3 |   0.3% → 0.7% |     3 → 6 | `_FuncBuilder.add_fns_to_class`                         | `dataclasses.py` |
|  +50.0% |    +2 |   0.4% → 0.7% |     4 → 6 | `Visitor.visit_default`                                 | `nodes.py`       |
|  +50.0% |    +2 |   0.4% → 0.7% |     4 → 6 | `LineGenerator.visit_power`                             | `linegen.py`     |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `__create_fn__.<locals>.__init__`                       | `<string>`       |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `Line.contains_implicit_multiline_string_with_comments` | `lines.py`       |
| +100.0% |    +2 |   0.2% → 0.4% |     2 → 4 | `BracketTracker.mark`                                   | `brackets.py`    |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `EmptyLineTracker._maybe_empty_lines`                   | `lines.py`       |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `_first_right_hand_split`                               | `linegen.py`     |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `_stringify_ast_with_new_parent`                        | `parsing.py`     |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `is_stub_suite`                                         | `nodes.py`       |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `lib2to3_parse`                                         | `parsing.py`     |
|  +25.0% |    +1 |   0.4% → 0.6% |     4 → 5 | `check_stability_and_equivalence`                       | `__init__.py`    |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `LineGenerator.visit_funcdef`                           | `linegen.py`     |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `Base.__new__`                                          | `pytree.py`      |

##### Standard library

| Change | Delta |           % | Samples | Function                  | Location                                 |
| -----: | ----: | ----------: | ------: | ------------------------- | ---------------------------------------- |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `_path_stat`              | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>`          |
| +14.3% |    +1 | 0.7% → 0.9% |   7 → 8 | `_compile_bytecode`       | `<frozen importlib._bootstrap_external>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                     | Location      |
| ------: | ----: | ------------: | --------: | ---------------------------- | ------------- |
|  -17.5% |   -59 | 33.9% → 30.7% | 338 → 279 | `(garbage collector)`        | `<unknown>`   |
|  -27.8% |   -15 |   5.4% → 4.3% |   54 → 39 | `Driver.parse_tokens`        | `driver.py`   |
|  -42.3% |   -11 |   2.6% → 1.7% |   26 → 15 | `Line.append`                | `lines.py`    |
|  -50.0% |    -9 |   1.8% → 1.0% |    18 → 9 | `normalize_invisible_parens` | `linegen.py`  |
|  -50.0% |    -5 |   1.0% → 0.6% |    10 → 5 | `_format_str_once`           | `__init__.py` |
|  -41.7% |    -5 |   1.2% → 0.8% |    12 → 7 | `convert_one_fmt_off_pair`   | `comments.py` |
|  -30.8% |    -4 |   1.3% → 1.0% |    13 → 9 | `Parser.shift`               | `parse.py`    |
|  -80.0% |    -4 |   0.5% → 0.1% |     5 → 1 | `transform_line`             | `linegen.py`  |
|  -50.0% |    -3 |   0.6% → 0.3% |     6 → 3 | `LinesBlock.all_lines`       | `lines.py`    |
| removed |    -3 |   0.3% → 0.0% |     3 → 0 | `bracket_split_build_line`   | `linegen.py`  |
|  -10.0% |    -2 |          2.0% |   20 → 18 | `Visitor.visit`              | `nodes.py`    |
|   -5.0% |    -2 |   4.0% → 4.2% |   40 → 38 | `parse`                      | `ast.py`      |
|  -22.2% |    -2 |   0.9% → 0.8% |     9 → 7 | `assert_equivalent`          | `__init__.py` |
|  -14.3% |    -2 |   1.4% → 1.3% |   14 → 12 | `Parser.addtoken`            | `parse.py`    |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `run_transformer`            | `linegen.py`  |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `Leaf.clone`                 | `pytree.py`   |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `wrap_in_parentheses`        | `nodes.py`    |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `is_docstring`               | `nodes.py`    |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `generate_comments`          | `comments.py` |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `normalize_trailing_prefix`  | `comments.py` |

##### Ours

|  Change | Delta |           % | Samples | Function                     | Location      |
| ------: | ----: | ----------: | ------: | ---------------------------- | ------------- |
|  -27.8% |   -15 | 5.4% → 4.3% | 54 → 39 | `Driver.parse_tokens`        | `driver.py`   |
|  -42.3% |   -11 | 2.6% → 1.7% | 26 → 15 | `Line.append`                | `lines.py`    |
|  -50.0% |    -9 | 1.8% → 1.0% |  18 → 9 | `normalize_invisible_parens` | `linegen.py`  |
|  -50.0% |    -5 | 1.0% → 0.6% |  10 → 5 | `_format_str_once`           | `__init__.py` |
|  -41.7% |    -5 | 1.2% → 0.8% |  12 → 7 | `convert_one_fmt_off_pair`   | `comments.py` |
|  -30.8% |    -4 | 1.3% → 1.0% |  13 → 9 | `Parser.shift`               | `parse.py`    |
|  -80.0% |    -4 | 0.5% → 0.1% |   5 → 1 | `transform_line`             | `linegen.py`  |
|  -50.0% |    -3 | 0.6% → 0.3% |   6 → 3 | `LinesBlock.all_lines`       | `lines.py`    |
| removed |    -3 | 0.3% → 0.0% |   3 → 0 | `bracket_split_build_line`   | `linegen.py`  |
|  -10.0% |    -2 |        2.0% | 20 → 18 | `Visitor.visit`              | `nodes.py`    |
|   -5.0% |    -2 | 4.0% → 4.2% | 40 → 38 | `parse`                      | `ast.py`      |
|  -22.2% |    -2 | 0.9% → 0.8% |   9 → 7 | `assert_equivalent`          | `__init__.py` |
|  -14.3% |    -2 | 1.4% → 1.3% | 14 → 12 | `Parser.addtoken`            | `parse.py`    |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `run_transformer`            | `linegen.py`  |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `Leaf.clone`                 | `pytree.py`   |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `wrap_in_parentheses`        | `nodes.py`    |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `is_docstring`               | `nodes.py`    |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `generate_comments`          | `comments.py` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `normalize_trailing_prefix`  | `comments.py` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `type_repr`                  | `pytree.py`   |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| -17.5% |   -59 | 33.9% → 30.7% | 338 → 279 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                    | Location                                 |
| ------: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `FileLoader.get_data`       | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ABCMeta.__new__`           | `<frozen abc>`                           |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                             | Location                                 |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ---------------------------------------- |
|  +10.8% |    +9 |  8.3% → 10.1% |   83 → 92 | `LineGenerator.visit_power`          | `linegen.py`                             |
|   +8.8% |    +8 |  9.1% → 10.9% |   91 → 99 | `get_features_used`                  | `__init__.py`                            |
|   +8.8% |    +8 |  9.1% → 10.9% |   91 → 99 | `detect_target_versions`             | `__init__.py`                            |
|  +26.7% |    +8 |   3.0% → 4.2% |   30 → 38 | `TokenProxy.__next__`                | `driver.py`                              |
|  +33.3% |    +7 |   2.1% → 3.1% |   21 → 28 | `convert`                            | `pytree.py`                              |
|   +2.9% |    +6 | 21.0% → 23.7% | 209 → 215 | `Parser._addtoken`                   | `parse.py`                               |
|  +12.5% |    +4 |   3.2% → 4.0% |   32 → 36 | `_call_with_frames_removed`          | `<frozen importlib._bootstrap>`          |
|  +12.5% |    +4 |   3.2% → 4.0% |   32 → 36 | `_LoaderBasics.exec_module`          | `<frozen importlib._bootstrap_external>` |
|  +12.5% |    +4 |   3.2% → 4.0% |   32 → 36 | `_load_unlocked`                     | `<frozen importlib._bootstrap>`          |
|  +12.5% |    +4 |   3.2% → 4.0% |   32 → 36 | `_find_and_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|  +12.5% |    +4 |   3.2% → 4.0% |   32 → 36 | `_find_and_load`                     | `<frozen importlib._bootstrap>`          |
|  +12.5% |    +4 |   3.2% → 4.0% |   32 → 36 | `<module>`                           | `__init__.py`                            |
|  +12.5% |    +4 |   3.2% → 4.0% |   32 → 36 | `_get_module_details`                | `<frozen runpy>`                         |
|  +33.3% |    +4 |   1.2% → 1.8% |   12 → 16 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`                               |
| +133.3% |    +4 |   0.3% → 0.8% |     3 → 7 | `_process_class`                     | `dataclasses.py`                         |
| +133.3% |    +4 |   0.3% → 0.8% |     3 → 7 | `dataclass.<locals>.wrap`            | `dataclasses.py`                         |
|   +7.3% |    +3 |   4.1% → 4.8% |   41 → 44 | `generate_tokens`                    | `tokenize.py`                            |
|   +8.1% |    +3 |   3.7% → 4.4% |   37 → 40 | `Parser.pop`                         | `parse.py`                               |
| +100.0% |    +3 |   0.3% → 0.7% |     3 → 6 | `_FuncBuilder.add_fns_to_class`      | `dataclasses.py`                         |
| +300.0% |    +3 |   0.1% → 0.4% |     1 → 4 | `Logger.debug`                       | `__init__.py`                            |

##### Ours

|  Change | Delta |             % |   Samples | Function                                                | Location         |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------- | ---------------- |
|  +10.8% |    +9 |  8.3% → 10.1% |   83 → 92 | `LineGenerator.visit_power`                             | `linegen.py`     |
|   +8.8% |    +8 |  9.1% → 10.9% |   91 → 99 | `get_features_used`                                     | `__init__.py`    |
|   +8.8% |    +8 |  9.1% → 10.9% |   91 → 99 | `detect_target_versions`                                | `__init__.py`    |
|  +26.7% |    +8 |   3.0% → 4.2% |   30 → 38 | `TokenProxy.__next__`                                   | `driver.py`      |
|  +33.3% |    +7 |   2.1% → 3.1% |   21 → 28 | `convert`                                               | `pytree.py`      |
|   +2.9% |    +6 | 21.0% → 23.7% | 209 → 215 | `Parser._addtoken`                                      | `parse.py`       |
|  +12.5% |    +4 |   3.2% → 4.0% |   32 → 36 | `<module>`                                              | `__init__.py`    |
|  +33.3% |    +4 |   1.2% → 1.8% |   12 → 16 | `EmptyLineTracker.maybe_empty_lines`                    | `lines.py`       |
| +133.3% |    +4 |   0.3% → 0.8% |     3 → 7 | `_process_class`                                        | `dataclasses.py` |
| +133.3% |    +4 |   0.3% → 0.8% |     3 → 7 | `dataclass.<locals>.wrap`                               | `dataclasses.py` |
|   +7.3% |    +3 |   4.1% → 4.8% |   41 → 44 | `generate_tokens`                                       | `tokenize.py`    |
|   +8.1% |    +3 |   3.7% → 4.4% |   37 → 40 | `Parser.pop`                                            | `parse.py`       |
| +100.0% |    +3 |   0.3% → 0.7% |     3 → 6 | `_FuncBuilder.add_fns_to_class`                         | `dataclasses.py` |
| +300.0% |    +3 |   0.1% → 0.4% |     1 → 4 | `Logger.debug`                                          | `__init__.py`    |
|  +75.0% |    +3 |   0.4% → 0.8% |     4 → 7 | `BracketTracker.mark`                                   | `brackets.py`    |
| +300.0% |    +3 |   0.1% → 0.4% |     1 → 4 | `EmptyLineTracker._maybe_empty_lines`                   | `lines.py`       |
|     new |    +3 |   0.0% → 0.3% |     0 → 3 | `LineGenerator.visit_factor`                            | `linegen.py`     |
| +100.0% |    +2 |   0.2% → 0.4% |     2 → 4 | `Line.contains_implicit_multiline_string_with_comments` | `lines.py`       |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `<module>`                                              | `agg.py`         |
|  +66.7% |    +2 |   0.3% → 0.6% |     3 → 5 | `<module>`                                              | `cache.py`       |

##### Standard library

| Change | Delta |           % | Samples | Function                          | Location                                 |
| -----: | ----: | ----------: | ------: | --------------------------------- | ---------------------------------------- |
| +12.5% |    +4 | 3.2% → 4.0% | 32 → 36 | `_call_with_frames_removed`       | `<frozen importlib._bootstrap>`          |
| +12.5% |    +4 | 3.2% → 4.0% | 32 → 36 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
| +12.5% |    +4 | 3.2% → 4.0% | 32 → 36 | `_load_unlocked`                  | `<frozen importlib._bootstrap>`          |
| +12.5% |    +4 | 3.2% → 4.0% | 32 → 36 | `_find_and_load_unlocked`         | `<frozen importlib._bootstrap>`          |
| +12.5% |    +4 | 3.2% → 4.0% | 32 → 36 | `_find_and_load`                  | `<frozen importlib._bootstrap>`          |
| +12.5% |    +4 | 3.2% → 4.0% | 32 → 36 | `_get_module_details`             | `<frozen runpy>`                         |
|    new |    +3 | 0.0% → 0.3% |   0 → 3 | `_path_isfile`                    | `<frozen importlib._bootstrap_external>` |
|    new |    +3 | 0.0% → 0.3% |   0 → 3 | `FileFinder.find_spec`            | `<frozen importlib._bootstrap_external>` |
|    new |    +3 | 0.0% → 0.3% |   0 → 3 | `PathFinder._get_spec`            | `<frozen importlib._bootstrap_external>` |
|    new |    +3 | 0.0% → 0.3% |   0 → 3 | `PathFinder.find_spec`            | `<frozen importlib._bootstrap_external>` |
|    new |    +3 | 0.0% → 0.3% |   0 → 3 | `_find_spec`                      | `<frozen importlib._bootstrap>`          |
| +28.6% |    +2 | 0.7% → 1.0% |   7 → 9 | `_compile_bytecode`               | `<frozen importlib._bootstrap_external>` |
| +50.0% |    +2 | 0.4% → 0.7% |   4 → 6 | `_handle_fromlist`                | `<frozen importlib._bootstrap>`          |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `_path_stat`                      | `<frozen importlib._bootstrap_external>` |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `_path_is_mode_type`              | `<frozen importlib._bootstrap_external>` |
| +12.5% |    +1 | 0.8% → 1.0% |   8 → 9 | `SourceLoader.get_code`           | `<frozen importlib._bootstrap_external>` |
| +50.0% |    +1 | 0.2% → 0.3% |   2 → 3 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                          | Location         |
| -----: | ----: | ------------: | --------: | --------------------------------- | ---------------- |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `format_file_contents`            | `__init__.py`    |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `format_file_in_place`            | `__init__.py`    |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `reformat_one`                    | `__init__.py`    |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `main`                            | `__init__.py`    |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `pass_context.<locals>.new_func`  | `decorators.py`  |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `Context.invoke`                  | `core.py`        |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `Command.invoke`                  | `core.py`        |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `Command.main`                    | `core.py`        |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `Command.__call__`                | `core.py`        |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `patched_main`                    | `__init__.py`    |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `<module>`                        | `__main__.py`    |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `_run_module_code`                | `<frozen runpy>` |
| -10.0% |   -89 | 88.9% → 87.7% | 886 → 797 | `_format_str_once`                | `__init__.py`    |
|  -8.8% |   -88 |        100.0% | 997 → 909 | `_run_code`                       | `<frozen runpy>` |
|  -8.8% |   -88 |        100.0% | 997 → 909 | `run_module`                      | `<frozen runpy>` |
|  -8.8% |   -88 |        100.0% | 997 → 909 | `_run_module_as_main`             | `<frozen runpy>` |
| -14.8% |   -75 | 50.8% → 47.4% | 506 → 431 | `check_stability_and_equivalence` | `__init__.py`    |
| -16.8% |   -73 | 43.5% → 39.7% | 434 → 361 | `assert_stable`                   | `__init__.py`    |
| -11.7% |   -62 | 53.1% → 51.4% | 529 → 467 | `Driver.parse_tokens`             | `driver.py`      |
| -11.7% |   -62 | 53.2% → 51.5% | 530 → 468 | `Driver.parse_string`             | `driver.py`      |

##### Ours

| Change | Delta |             % |   Samples | Function                          | Location        |
| -----: | ----: | ------------: | --------: | --------------------------------- | --------------- |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `format_file_contents`            | `__init__.py`   |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `format_file_in_place`            | `__init__.py`   |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `reformat_one`                    | `__init__.py`   |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `main`                            | `__init__.py`   |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `pass_context.<locals>.new_func`  | `decorators.py` |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `Context.invoke`                  | `core.py`       |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `Command.invoke`                  | `core.py`       |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `Command.main`                    | `core.py`       |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `Command.__call__`                | `core.py`       |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `patched_main`                    | `__init__.py`   |
|  -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `<module>`                        | `__main__.py`   |
| -10.0% |   -89 | 88.9% → 87.7% | 886 → 797 | `_format_str_once`                | `__init__.py`   |
| -14.8% |   -75 | 50.8% → 47.4% | 506 → 431 | `check_stability_and_equivalence` | `__init__.py`   |
| -16.8% |   -73 | 43.5% → 39.7% | 434 → 361 | `assert_stable`                   | `__init__.py`   |
| -11.7% |   -62 | 53.1% → 51.4% | 529 → 467 | `Driver.parse_tokens`             | `driver.py`     |
| -11.7% |   -62 | 53.2% → 51.5% | 530 → 468 | `Driver.parse_string`             | `driver.py`     |
| -11.5% |   -61 | 53.2% → 51.6% | 530 → 469 | `lib2to3_parse`                   | `parsing.py`    |
|  -3.7% |   -17 | 46.0% → 48.6% | 459 → 442 | `format_str`                      | `__init__.py`   |
| -29.2% |   -14 |   4.8% → 3.7% |   48 → 34 | `transform_line`                  | `linegen.py`    |
|  -7.6% |   -13 | 17.3% → 17.5% | 172 → 159 | `Visitor.visit_default`           | `nodes.py`      |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| -17.5% |   -59 | 33.9% → 30.7% | 338 → 279 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |             % |   Samples | Function              | Location                                 |
| ------: | ----: | ------------: | --------: | --------------------- | ---------------------------------------- |
|   -9.5% |   -92 | 96.8% → 96.0% | 965 → 873 | `_run_module_code`    | `<frozen runpy>`                         |
|   -8.8% |   -88 |        100.0% | 997 → 909 | `_run_code`           | `<frozen runpy>`                         |
|   -8.8% |   -88 |        100.0% | 997 → 909 | `run_module`          | `<frozen runpy>`                         |
|   -8.8% |   -88 |        100.0% | 997 → 909 | `_run_module_as_main` | `<frozen runpy>`                         |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `FileLoader.get_data` | `<frozen importlib._bootstrap_external>` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `ABCMeta.__new__`     | `<frozen abc>`                           |

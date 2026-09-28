# Sampling profile diff

Collected 972 samples → 1,136 samples (+164 samples, +16.9%).

| Category          | Change | Delta |             % |   Samples |
| ----------------- | -----: | ----: | ------------: | --------: |
| Ours              |  +9.0% |   +57 | 65.1% → 60.7% | 633 → 690 |
| Garbage collector | +32.5% |  +106 | 33.5% → 38.0% | 326 → 432 |
| Standard library  |  +7.7% |    +1 |   1.3% → 1.2% |   13 → 14 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                             | Location         |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ---------------- |
|  +32.5% |  +106 | 33.5% → 38.0% | 326 → 432 | `(garbage collector)`                | `<unknown>`      |
| +136.4% |   +15 |   1.1% → 2.3% |   11 → 26 | `Parser.pop`                         | `parse.py`       |
|  +33.3% |   +13 |   4.0% → 4.6% |   39 → 52 | `Driver.parse_tokens`                | `driver.py`      |
|   +6.5% |   +10 | 15.7% → 14.3% | 153 → 163 | `Parser._addtoken`                   | `parse.py`       |
|  +23.7% |    +9 |   3.9% → 4.1% |   38 → 47 | `parse`                              | `ast.py`         |
| +300.0% |    +9 |   0.3% → 1.1% |    3 → 12 | `convert`                            | `pytree.py`      |
|     new |    +8 |   0.0% → 0.7% |     0 → 8 | `Leaf.prefix`                        | `pytree.py`      |
| +150.0% |    +6 |   0.4% → 0.9% |    4 → 10 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`       |
|  +20.8% |    +5 |   2.5% → 2.6% |   24 → 29 | `Visitor.visit`                      | `nodes.py`       |
| +125.0% |    +5 |   0.4% → 0.8% |     4 → 9 | `LinesBlock.all_lines`               | `lines.py`       |
| +133.3% |    +4 |   0.3% → 0.6% |     3 → 7 | `whitespace`                         | `nodes.py`       |
|  +50.0% |    +3 |   0.6% → 0.8% |     6 → 9 | `Parser.push`                        | `parse.py`       |
|  +75.0% |    +3 |   0.4% → 0.6% |     4 → 7 | `_FuncBuilder.add_fns_to_class`      | `dataclasses.py` |
|     new |    +3 |   0.0% → 0.3% |     0 → 3 | `Leaf.clone`                         | `pytree.py`      |
|  +13.3% |    +2 |          1.5% |   15 → 17 | `Parser.addtoken`                    | `parse.py`       |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `format_file_in_place`               | `__init__.py`    |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `is_name_token`                      | `nodes.py`       |
|  +20.0% |    +1 |          0.5% |     5 → 6 | `format_str`                         | `__init__.py`    |
|   +1.1% |    +1 |   9.5% → 8.2% |   92 → 93 | `get_features_used`                  | `__init__.py`    |
|   +7.7% |    +1 |   1.3% → 1.2% |   13 → 14 | `Parser.shift`                       | `parse.py`       |

##### Ours

|  Change | Delta |             % |   Samples | Function                             | Location         |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ---------------- |
| +136.4% |   +15 |   1.1% → 2.3% |   11 → 26 | `Parser.pop`                         | `parse.py`       |
|  +33.3% |   +13 |   4.0% → 4.6% |   39 → 52 | `Driver.parse_tokens`                | `driver.py`      |
|   +6.5% |   +10 | 15.7% → 14.3% | 153 → 163 | `Parser._addtoken`                   | `parse.py`       |
|  +23.7% |    +9 |   3.9% → 4.1% |   38 → 47 | `parse`                              | `ast.py`         |
| +300.0% |    +9 |   0.3% → 1.1% |    3 → 12 | `convert`                            | `pytree.py`      |
|     new |    +8 |   0.0% → 0.7% |     0 → 8 | `Leaf.prefix`                        | `pytree.py`      |
| +150.0% |    +6 |   0.4% → 0.9% |    4 → 10 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`       |
|  +20.8% |    +5 |   2.5% → 2.6% |   24 → 29 | `Visitor.visit`                      | `nodes.py`       |
| +125.0% |    +5 |   0.4% → 0.8% |     4 → 9 | `LinesBlock.all_lines`               | `lines.py`       |
| +133.3% |    +4 |   0.3% → 0.6% |     3 → 7 | `whitespace`                         | `nodes.py`       |
|  +50.0% |    +3 |   0.6% → 0.8% |     6 → 9 | `Parser.push`                        | `parse.py`       |
|  +75.0% |    +3 |   0.4% → 0.6% |     4 → 7 | `_FuncBuilder.add_fns_to_class`      | `dataclasses.py` |
|     new |    +3 |   0.0% → 0.3% |     0 → 3 | `Leaf.clone`                         | `pytree.py`      |
|  +13.3% |    +2 |          1.5% |   15 → 17 | `Parser.addtoken`                    | `parse.py`       |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `format_file_in_place`               | `__init__.py`    |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `is_name_token`                      | `nodes.py`       |
|  +20.0% |    +1 |          0.5% |     5 → 6 | `format_str`                         | `__init__.py`    |
|   +1.1% |    +1 |   9.5% → 8.2% |   92 → 93 | `get_features_used`                  | `__init__.py`    |
|   +7.7% |    +1 |   1.3% → 1.2% |   13 → 14 | `Parser.shift`                       | `parse.py`       |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `Base.__new__`                       | `pytree.py`      |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +32.5% |  +106 | 33.5% → 38.0% | 326 → 432 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                            | Location                                 |
| ------: | ----: | ----------: | ------: | ----------------------------------- | ---------------------------------------- |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `FileLoader.get_data`               | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `FileFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `BufferedIncrementalDecoder.decode` | `<frozen codecs>`                        |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Ours

|  Change | Delta |           % | Samples | Function                                                | Location      |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------- | ------------- |
|  -61.1% |   -11 | 1.9% → 0.6% |  18 → 7 | `_stringify_ast`                                        | `parsing.py`  |
|  -38.1% |    -8 | 2.2% → 1.1% | 21 → 13 | `Line.append`                                           | `lines.py`    |
|  -46.2% |    -6 | 1.3% → 0.6% |  13 → 7 | `normalize_invisible_parens`                            | `linegen.py`  |
|  -83.3% |    -5 | 0.6% → 0.1% |   6 → 1 | `_stringify_ast_with_new_parent`                        | `parsing.py`  |
|  -71.4% |    -5 | 0.7% → 0.2% |   7 → 2 | `line_to_string`                                        | `lines.py`    |
|  -57.1% |    -4 | 0.7% → 0.3% |   7 → 3 | `LineGenerator.visit_power`                             | `linegen.py`  |
|  -37.5% |    -3 | 0.8% → 0.4% |   8 → 5 | `_format_str_once`                                      | `__init__.py` |
|  -37.5% |    -3 | 0.8% → 0.4% |   8 → 5 | `wrap_in_parentheses`                                   | `nodes.py`    |
|  -28.6% |    -2 | 0.7% → 0.4% |   7 → 5 | `transform_line`                                        | `linegen.py`  |
|  -66.7% |    -2 | 0.3% → 0.1% |   3 → 1 | `Line.contains_implicit_multiline_string_with_comments` | `lines.py`    |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `Line.comments_after`                                   | `lines.py`    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `lib2to3_parse`                                         | `parsing.py`  |
|  -33.3% |    -1 | 0.3% → 0.2% |   3 → 2 | `assert_stable`                                         | `__init__.py` |
|  -16.7% |    -1 | 0.6% → 0.4% |   6 → 5 | `assert_equivalent`                                     | `__init__.py` |
|   -3.6% |    -1 | 2.9% → 2.4% | 28 → 27 | `generate_tokens`                                       | `tokenize.py` |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `TokenProxy.__next__`                                   | `driver.py`   |
|  -12.5% |    -1 | 0.8% → 0.6% |   8 → 7 | `Visitor.visit_default`                                 | `nodes.py`    |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `_first_right_hand_split`                               | `linegen.py`  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                                              | `__init__.py` |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `_parse`                                                | `_parser.py`  |

##### Standard library

|  Change | Delta |           % | Samples | Function                          | Location                                 |
| ------: | ----: | ----------: | ------: | --------------------------------- | ---------------------------------------- |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `PathFinder.find_spec`            | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `PathFinder._path_importer_cache` | `<frozen importlib._bootstrap_external>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |     Samples | Function                         | Location         |
| -----: | ----: | ------------: | ----------: | -------------------------------- | ---------------- |
| +19.4% |  +167 | 88.7% → 90.6% | 862 → 1,029 | `_format_str_once`               | `__init__.py`    |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `reformat_one`                   | `__init__.py`    |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `main`                           | `__init__.py`    |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `pass_context.<locals>.new_func` | `decorators.py`  |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `Context.invoke`                 | `core.py`        |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `Command.invoke`                 | `core.py`        |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `Command.main`                   | `core.py`        |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `Command.__call__`               | `core.py`        |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `patched_main`                   | `__init__.py`    |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `<module>`                       | `__main__.py`    |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `_run_module_code`               | `<frozen runpy>` |
| +17.5% |  +165 | 97.2% → 97.7% | 945 → 1,110 | `format_file_in_place`           | `__init__.py`    |
| +16.9% |  +164 |        100.0% | 972 → 1,136 | `_run_code`                      | `<frozen runpy>` |
| +16.9% |  +164 |        100.0% | 972 → 1,136 | `run_module`                     | `<frozen runpy>` |
| +16.9% |  +164 |        100.0% | 972 → 1,136 | `_run_module_as_main`            | `<frozen runpy>` |
| +17.1% |  +162 | 97.2% → 97.4% | 945 → 1,107 | `format_file_contents`           | `__init__.py`    |
| +25.2% |  +127 | 51.9% → 55.5% |   504 → 631 | `Driver.parse_tokens`            | `driver.py`      |
| +25.2% |  +127 | 51.9% → 55.5% |   504 → 631 | `Driver.parse_string`            | `driver.py`      |
| +25.0% |  +126 | 52.0% → 55.5% |   505 → 631 | `lib2to3_parse`                  | `parsing.py`     |
| +27.9% |  +119 | 43.9% → 48.1% |   427 → 546 | `Parser.addtoken`                | `parse.py`       |

##### Ours

| Change | Delta |             % |     Samples | Function                          | Location        |
| -----: | ----: | ------------: | ----------: | --------------------------------- | --------------- |
| +19.4% |  +167 | 88.7% → 90.6% | 862 → 1,029 | `_format_str_once`                | `__init__.py`   |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `reformat_one`                    | `__init__.py`   |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `main`                            | `__init__.py`   |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `pass_context.<locals>.new_func`  | `decorators.py` |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `Context.invoke`                  | `core.py`       |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `Command.invoke`                  | `core.py`       |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `Command.main`                    | `core.py`       |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `Command.__call__`                | `core.py`       |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `patched_main`                    | `__init__.py`   |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `<module>`                        | `__main__.py`   |
| +17.5% |  +165 | 97.2% → 97.7% | 945 → 1,110 | `format_file_in_place`            | `__init__.py`   |
| +17.1% |  +162 | 97.2% → 97.4% | 945 → 1,107 | `format_file_contents`            | `__init__.py`   |
| +25.2% |  +127 | 51.9% → 55.5% |   504 → 631 | `Driver.parse_tokens`             | `driver.py`     |
| +25.2% |  +127 | 51.9% → 55.5% |   504 → 631 | `Driver.parse_string`             | `driver.py`     |
| +25.0% |  +126 | 52.0% → 55.5% |   505 → 631 | `lib2to3_parse`                   | `parsing.py`    |
| +27.9% |  +119 | 43.9% → 48.1% |   427 → 546 | `Parser.addtoken`                 | `parse.py`      |
| +28.6% |  +116 | 41.7% → 45.9% |   405 → 521 | `Parser._addtoken`                | `parse.py`      |
| +22.8% |   +94 | 42.4% → 44.5% |   412 → 506 | `assert_stable`                   | `__init__.py`   |
| +18.3% |   +89 | 50.1% → 50.7% |   487 → 576 | `check_stability_and_equivalence` | `__init__.py`   |
| +15.9% |   +73 | 47.1% → 46.7% |   458 → 531 | `format_str`                      | `__init__.py`   |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +32.5% |  +106 | 33.5% → 38.0% | 326 → 432 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |             % |     Samples | Function                            | Location                                 |
| ------: | ----: | ------------: | ----------: | ----------------------------------- | ---------------------------------------- |
|  +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `_run_module_code`                  | `<frozen runpy>`                         |
|  +16.9% |  +164 |        100.0% | 972 → 1,136 | `_run_code`                         | `<frozen runpy>`                         |
|  +16.9% |  +164 |        100.0% | 972 → 1,136 | `run_module`                        | `<frozen runpy>`                         |
|  +16.9% |  +164 |        100.0% | 972 → 1,136 | `_run_module_as_main`               | `<frozen runpy>`                         |
|  +33.3% |    +1 |   0.3% → 0.4% |       3 → 4 | `_handle_fromlist`                  | `<frozen importlib._bootstrap>`          |
| +100.0% |    +1 |   0.1% → 0.2% |       1 → 2 | `FileLoader.get_data`               | `<frozen importlib._bootstrap_external>` |
|     new |    +1 |   0.0% → 0.1% |       0 → 1 | `FileFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
|     new |    +1 |   0.0% → 0.1% |       0 → 1 | `BufferedIncrementalDecoder.decode` | `<frozen codecs>`                        |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |           % | Samples | Function                                                | Location                                 |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------- | ---------------------------------------- |
| -66.7% |   -16 | 2.5% → 0.7% |  24 → 8 | `_stringify_ast`                                        | `parsing.py`                             |
| -65.2% |   -15 | 2.4% → 0.7% |  23 → 8 | `_stringify_ast_with_new_parent`                        | `parsing.py`                             |
| -23.3% |    -7 | 3.1% → 2.0% | 30 → 23 | `TokenProxy.__next__`                                   | `driver.py`                              |
| -31.8% |    -7 | 2.3% → 1.3% | 22 → 15 | `normalize_invisible_parens`                            | `linegen.py`                             |
|  -7.1% |    -5 | 7.2% → 5.7% | 70 → 65 | `assert_equivalent`                                     | `__init__.py`                            |
| -14.3% |    -5 | 3.6% → 2.6% | 35 → 30 | `generate_tokens`                                       | `tokenize.py`                            |
| -11.4% |    -4 | 3.6% → 2.7% | 35 → 31 | `LineGenerator.visit_power`                             | `linegen.py`                             |
| -60.0% |    -3 | 0.5% → 0.2% |   5 → 2 | `_compile`                                              | `__init__.py`                            |
| -60.0% |    -3 | 0.5% → 0.2% |   5 → 2 | `compile`                                               | `__init__.py`                            |
| -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `<module>`                                              | `gitignore.py`                           |
| -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `Line.contains_implicit_multiline_string_with_comments` | `lines.py`                               |
| -25.0% |    -2 | 0.8% → 0.5% |   8 → 6 | `line_to_string`                                        | `lines.py`                               |
|  -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_LoaderBasics.exec_module`                             | `<frozen importlib._bootstrap_external>` |
|  -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_load_unlocked`                                        | `<frozen importlib._bootstrap>`          |
|  -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_find_and_load_unlocked`                               | `<frozen importlib._bootstrap>`          |
|  -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_find_and_load`                                        | `<frozen importlib._bootstrap>`          |
|  -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `<module>`                                              | `__init__.py`                            |
|  -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_call_with_frames_removed`                             | `<frozen importlib._bootstrap>`          |
|  -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_get_module_details`                                   | `<frozen runpy>`                         |
| -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `compile`                                               | `_compiler.py`                           |

##### Ours

|  Change | Delta |           % | Samples | Function                                                | Location       |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------- | -------------- |
|  -66.7% |   -16 | 2.5% → 0.7% |  24 → 8 | `_stringify_ast`                                        | `parsing.py`   |
|  -65.2% |   -15 | 2.4% → 0.7% |  23 → 8 | `_stringify_ast_with_new_parent`                        | `parsing.py`   |
|  -23.3% |    -7 | 3.1% → 2.0% | 30 → 23 | `TokenProxy.__next__`                                   | `driver.py`    |
|  -31.8% |    -7 | 2.3% → 1.3% | 22 → 15 | `normalize_invisible_parens`                            | `linegen.py`   |
|   -7.1% |    -5 | 7.2% → 5.7% | 70 → 65 | `assert_equivalent`                                     | `__init__.py`  |
|  -14.3% |    -5 | 3.6% → 2.6% | 35 → 30 | `generate_tokens`                                       | `tokenize.py`  |
|  -11.4% |    -4 | 3.6% → 2.7% | 35 → 31 | `LineGenerator.visit_power`                             | `linegen.py`   |
|  -60.0% |    -3 | 0.5% → 0.2% |   5 → 2 | `_compile`                                              | `__init__.py`  |
|  -60.0% |    -3 | 0.5% → 0.2% |   5 → 2 | `compile`                                               | `__init__.py`  |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `<module>`                                              | `gitignore.py` |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `Line.contains_implicit_multiline_string_with_comments` | `lines.py`     |
|  -25.0% |    -2 | 0.8% → 0.5% |   8 → 6 | `line_to_string`                                        | `lines.py`     |
|   -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `<module>`                                              | `__init__.py`  |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `compile`                                               | `_compiler.py` |
|  -66.7% |    -2 | 0.3% → 0.1% |   3 → 1 | `<module>`                                              | `agg.py`       |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `<module>`                                              | `nodes.py`     |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `LineGenerator.visit_factor`                            | `linegen.py`   |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `Line.comments_after`                                   | `lines.py`     |
|  -16.7% |    -1 | 0.6% → 0.4% |   6 → 5 | `_first_right_hand_split`                               | `linegen.py`   |
|   -2.6% |    -1 | 3.9% → 3.3% | 38 → 37 | `Line.append`                                           | `lines.py`     |

##### Standard library

|  Change | Delta |           % | Samples | Function                          | Location                                 |
| ------: | ----: | ----------: | ------: | --------------------------------- | ---------------------------------------- |
|   -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_load_unlocked`                  | `<frozen importlib._bootstrap>`          |
|   -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_find_and_load_unlocked`         | `<frozen importlib._bootstrap>`          |
|   -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_find_and_load`                  | `<frozen importlib._bootstrap>`          |
|   -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_call_with_frames_removed`       | `<frozen importlib._bootstrap>`          |
|   -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_get_module_details`             | `<frozen runpy>`                         |
|  -10.0% |    -1 | 1.0% → 0.8% |  10 → 9 | `_compile_bytecode`               | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `PathFinder.find_spec`            | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `_find_spec`                      | `<frozen importlib._bootstrap>`          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `PathFinder._path_importer_cache` | `<frozen importlib._bootstrap_external>` |

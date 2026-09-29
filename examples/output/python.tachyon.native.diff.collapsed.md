# Sampling profile diff

Collected 897 samples → 1,049 samples (+152 samples, +16.9%).

| Category          | Change | Delta |             % |   Samples |
| ----------------- | -----: | ----: | ------------: | --------: |
| Ours              | +12.1% |   +73 | 67.2% → 64.4% | 603 → 676 |
| Garbage collector | +27.0% |   +76 | 31.3% → 34.0% | 281 → 357 |
| Standard library  | +23.1% |    +3 |   1.4% → 1.5% |   13 → 16 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                         | Location                                 |
| ------: | ----: | ------------: | --------: | -------------------------------- | ---------------------------------------- |
|  +27.0% |   +76 | 31.3% → 34.0% | 281 → 357 | `(garbage collector)`            | `<unknown>`                              |
|  +17.8% |   +24 | 15.1% → 15.2% | 135 → 159 | `Parser._addtoken`               | `parse.py`                               |
|  +42.1% |   +16 |   4.2% → 5.1% |   38 → 54 | `Driver.parse_tokens`            | `driver.py`                              |
|  +73.3% |   +11 |   1.7% → 2.5% |   15 → 26 | `_stringify_ast`                 | `parsing.py`                             |
|  +12.0% |   +10 |   9.3% → 8.9% |   83 → 93 | `get_features_used`              | `__init__.py`                            |
|  +87.5% |    +7 |   0.9% → 1.4% |    8 → 15 | `normalize_invisible_parens`     | `linegen.py`                             |
| +350.0% |    +7 |   0.2% → 0.9% |     2 → 9 | `_compile_bytecode`              | `<frozen importlib._bootstrap_external>` |
|  +13.5% |    +5 |   4.1% → 4.0% |   37 → 42 | `parse`                          | `ast.py`                                 |
| +166.7% |    +5 |   0.3% → 0.8% |     3 → 8 | `_stringify_ast_with_new_parent` | `parsing.py`                             |
|  +14.3% |    +4 |          3.1% |   28 → 32 | `Visitor.visit`                  | `nodes.py`                               |
| +400.0% |    +4 |   0.1% → 0.5% |     1 → 5 | `LineGenerator.visit_power`      | `linegen.py`                             |
| +100.0% |    +4 |   0.4% → 0.8% |     4 → 8 | `whitespace`                     | `nodes.py`                               |
|     new |    +4 |   0.0% → 0.4% |     0 → 4 | `Parser.classify`                | `parse.py`                               |
|   +9.7% |    +3 |   3.5% → 3.2% |   31 → 34 | `generate_tokens`                | `tokenize.py`                            |
|  +37.5% |    +3 |   0.9% → 1.0% |    8 → 11 | `Parser.shift`                   | `parse.py`                               |
|  +50.0% |    +3 |   0.7% → 0.9% |     6 → 9 | `Parser.push`                    | `parse.py`                               |
|  +14.3% |    +2 |   1.6% → 1.5% |   14 → 16 | `Parser.addtoken`                | `parse.py`                               |
|  +50.0% |    +2 |   0.4% → 0.6% |     4 → 6 | `convert`                        | `pytree.py`                              |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `LineGenerator.visit_stmt`       | `linegen.py`                             |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `Node.__init__`                  | `pytree.py`                              |

##### Ours

|  Change | Delta |             % |   Samples | Function                         | Location      |
| ------: | ----: | ------------: | --------: | -------------------------------- | ------------- |
|  +17.8% |   +24 | 15.1% → 15.2% | 135 → 159 | `Parser._addtoken`               | `parse.py`    |
|  +42.1% |   +16 |   4.2% → 5.1% |   38 → 54 | `Driver.parse_tokens`            | `driver.py`   |
|  +73.3% |   +11 |   1.7% → 2.5% |   15 → 26 | `_stringify_ast`                 | `parsing.py`  |
|  +12.0% |   +10 |   9.3% → 8.9% |   83 → 93 | `get_features_used`              | `__init__.py` |
|  +87.5% |    +7 |   0.9% → 1.4% |    8 → 15 | `normalize_invisible_parens`     | `linegen.py`  |
|  +13.5% |    +5 |   4.1% → 4.0% |   37 → 42 | `parse`                          | `ast.py`      |
| +166.7% |    +5 |   0.3% → 0.8% |     3 → 8 | `_stringify_ast_with_new_parent` | `parsing.py`  |
|  +14.3% |    +4 |          3.1% |   28 → 32 | `Visitor.visit`                  | `nodes.py`    |
| +400.0% |    +4 |   0.1% → 0.5% |     1 → 5 | `LineGenerator.visit_power`      | `linegen.py`  |
| +100.0% |    +4 |   0.4% → 0.8% |     4 → 8 | `whitespace`                     | `nodes.py`    |
|     new |    +4 |   0.0% → 0.4% |     0 → 4 | `Parser.classify`                | `parse.py`    |
|   +9.7% |    +3 |   3.5% → 3.2% |   31 → 34 | `generate_tokens`                | `tokenize.py` |
|  +37.5% |    +3 |   0.9% → 1.0% |    8 → 11 | `Parser.shift`                   | `parse.py`    |
|  +50.0% |    +3 |   0.7% → 0.9% |     6 → 9 | `Parser.push`                    | `parse.py`    |
|  +14.3% |    +2 |   1.6% → 1.5% |   14 → 16 | `Parser.addtoken`                | `parse.py`    |
|  +50.0% |    +2 |   0.4% → 0.6% |     4 → 6 | `convert`                        | `pytree.py`   |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `LineGenerator.visit_stmt`       | `linegen.py`  |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `Node.__init__`                  | `pytree.py`   |
|  +50.0% |    +2 |   0.4% → 0.6% |     4 → 6 | `BracketTracker.mark`            | `brackets.py` |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `is_split_before_delimiter`      | `brackets.py` |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +27.0% |   +76 | 31.3% → 34.0% | 281 → 357 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                            | Location                                 |
| ------: | ----: | ----------: | ------: | ----------------------------------- | ---------------------------------------- |
| +350.0% |    +7 | 0.2% → 0.9% |   2 → 9 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `_path_isfile`                      | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `_path_stat`                        | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `BufferedIncrementalDecoder.decode` | `<frozen codecs>`                        |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                             | Location                                 |
| ------: | ----: | ----------: | ------: | ------------------------------------ | ---------------------------------------- |
|  -44.4% |    -8 | 2.0% → 1.0% | 18 → 10 | `Parser.pop`                         | `parse.py`                               |
|  -66.7% |    -6 | 1.0% → 0.3% |   9 → 3 | `_format_str_once`                   | `__init__.py`                            |
|  -27.8% |    -5 | 2.0% → 1.2% | 18 → 13 | `Line.append`                        | `lines.py`                               |
|  -80.0% |    -4 | 0.6% → 0.1% |   5 → 1 | `_hugging_power_ops_line_to_string`  | `linegen.py`                             |
|  -44.4% |    -4 | 1.0% → 0.5% |   9 → 5 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`                               |
|  -23.1% |    -3 | 1.4% → 1.0% | 13 → 10 | `convert_one_fmt_off_pair`           | `comments.py`                            |
|  -50.0% |    -3 | 0.7% → 0.3% |   6 → 3 | `line_to_string`                     | `lines.py`                               |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `FileFinder.find_spec`               | `<frozen importlib._bootstrap_external>` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `delimiter_split`                    | `linegen.py`                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Driver.parse_string`                | `driver.py`                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `reformat_one`                       | `__init__.py`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hug_power_op`                       | `trans.py`                               |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `run_transformer`                    | `linegen.py`                             |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `LineGenerator.visit_funcdef`        | `linegen.py`                             |
|  -11.1% |    -1 | 1.0% → 0.8% |   9 → 8 | `LineGenerator.visit_default`        | `linegen.py`                             |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `generate_comments`                  | `comments.py`                            |
|  -33.3% |    -1 | 0.3% → 0.2% |   3 → 2 | `LineGenerator.visit_simple_stmt`    | `linegen.py`                             |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `FileLoader.get_data`                | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `SourceLoader.get_code`              | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_find_and_load_unlocked`            | `<frozen importlib._bootstrap>`          |

##### Ours

|  Change | Delta |           % | Samples | Function                             | Location        |
| ------: | ----: | ----------: | ------: | ------------------------------------ | --------------- |
|  -44.4% |    -8 | 2.0% → 1.0% | 18 → 10 | `Parser.pop`                         | `parse.py`      |
|  -66.7% |    -6 | 1.0% → 0.3% |   9 → 3 | `_format_str_once`                   | `__init__.py`   |
|  -27.8% |    -5 | 2.0% → 1.2% | 18 → 13 | `Line.append`                        | `lines.py`      |
|  -80.0% |    -4 | 0.6% → 0.1% |   5 → 1 | `_hugging_power_ops_line_to_string`  | `linegen.py`    |
|  -44.4% |    -4 | 1.0% → 0.5% |   9 → 5 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`      |
|  -23.1% |    -3 | 1.4% → 1.0% | 13 → 10 | `convert_one_fmt_off_pair`           | `comments.py`   |
|  -50.0% |    -3 | 0.7% → 0.3% |   6 → 3 | `line_to_string`                     | `lines.py`      |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `delimiter_split`                    | `linegen.py`    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Driver.parse_string`                | `driver.py`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `reformat_one`                       | `__init__.py`   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hug_power_op`                       | `trans.py`      |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `run_transformer`                    | `linegen.py`    |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `LineGenerator.visit_funcdef`        | `linegen.py`    |
|  -11.1% |    -1 | 1.0% → 0.8% |   9 → 8 | `LineGenerator.visit_default`        | `linegen.py`    |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `generate_comments`                  | `comments.py`   |
|  -33.3% |    -1 | 0.3% → 0.2% |   3 → 2 | `LineGenerator.visit_simple_stmt`    | `linegen.py`    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                           | `types.py`      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `option.<locals>.decorator`          | `decorators.py` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `NamedTupleMeta.__new__`             | `typing.py`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `__get_openssl_constructor`          | `hashlib.py`    |

##### Standard library

|  Change | Delta |           % | Samples | Function                  | Location                                 |
| ------: | ----: | ----------: | ------: | ------------------------- | ---------------------------------------- |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `FileFinder.find_spec`    | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `FileLoader.get_data`     | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `SourceLoader.get_code`   | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>`          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_path_is_mode_type`      | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_path_join`              | `<frozen importlib._bootstrap_external>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |     Samples | Function                         | Location         |
| -----: | ----: | ------------: | ----------: | -------------------------------- | ---------------- |
| +17.5% |  +152 | 96.7% → 97.1% | 867 → 1,019 | `format_file_in_place`           | `__init__.py`    |
| +16.9% |  +152 |        100.0% | 897 → 1,049 | `(native)`                       | `<unknown>`      |
| +16.9% |  +152 |        100.0% | 897 → 1,049 | `_run_code`                      | `<frozen runpy>` |
| +16.9% |  +152 |        100.0% | 897 → 1,049 | `run_module`                     | `<frozen runpy>` |
| +16.9% |  +152 |        100.0% | 897 → 1,049 | `_run_module_as_main`            | `<frozen runpy>` |
| +17.3% |  +150 | 96.7% → 96.9% | 867 → 1,017 | `format_file_contents`           | `__init__.py`    |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `reformat_one`                   | `__init__.py`    |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `main`                           | `__init__.py`    |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `pass_context.<locals>.new_func` | `decorators.py`  |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Context.invoke`                 | `core.py`        |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Command.invoke`                 | `core.py`        |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Command.main`                   | `core.py`        |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Command.__call__`               | `core.py`        |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `patched_main`                   | `__init__.py`    |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `<module>`                       | `__main__.py`    |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `_run_module_code`               | `<frozen runpy>` |
| +15.9% |  +126 | 88.3% → 87.5% |   792 → 918 | `_format_str_once`               | `__init__.py`    |
| +24.3% |  +112 | 51.3% → 54.5% |   460 → 572 | `Driver.parse_tokens`            | `driver.py`      |
| +24.1% |  +111 | 51.4% → 54.5% |   461 → 572 | `Driver.parse_string`            | `driver.py`      |
| +24.1% |  +111 | 51.4% → 54.5% |   461 → 572 | `lib2to3_parse`                  | `parsing.py`     |

##### Ours

| Change | Delta |             % |     Samples | Function                          | Location        |
| -----: | ----: | ------------: | ----------: | --------------------------------- | --------------- |
| +17.5% |  +152 | 96.7% → 97.1% | 867 → 1,019 | `format_file_in_place`            | `__init__.py`   |
| +17.3% |  +150 | 96.7% → 96.9% | 867 → 1,017 | `format_file_contents`            | `__init__.py`   |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `reformat_one`                    | `__init__.py`   |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `main`                            | `__init__.py`   |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `pass_context.<locals>.new_func`  | `decorators.py` |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Context.invoke`                  | `core.py`       |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Command.invoke`                  | `core.py`       |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Command.main`                    | `core.py`       |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Command.__call__`                | `core.py`       |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `patched_main`                    | `__init__.py`   |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `<module>`                        | `__main__.py`   |
| +15.9% |  +126 | 88.3% → 87.5% |   792 → 918 | `_format_str_once`                | `__init__.py`   |
| +24.3% |  +112 | 51.3% → 54.5% |   460 → 572 | `Driver.parse_tokens`             | `driver.py`     |
| +24.1% |  +111 | 51.4% → 54.5% |   461 → 572 | `Driver.parse_string`             | `driver.py`     |
| +24.1% |  +111 | 51.4% → 54.5% |   461 → 572 | `lib2to3_parse`                   | `parsing.py`    |
| +25.2% |   +96 | 42.5% → 45.5% |   381 → 477 | `Parser.addtoken`                 | `parse.py`      |
| +23.5% |   +86 | 40.8% → 43.1% |   366 → 452 | `Parser._addtoken`                | `parse.py`      |
| +18.2% |   +77 | 47.3% → 47.8% |   424 → 501 | `format_str`                      | `__init__.py`   |
| +16.5% |   +73 | 49.4% → 49.2% |   443 → 516 | `check_stability_and_equivalence` | `__init__.py`   |
| +13.4% |   +50 | 41.7% → 40.4% |   374 → 424 | `assert_stable`                   | `__init__.py`   |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +27.0% |   +76 | 31.3% → 34.0% | 281 → 357 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |             % |     Samples | Function                            | Location                                 |
| ------: | ----: | ------------: | ----------: | ----------------------------------- | ---------------------------------------- |
|  +16.9% |  +152 |        100.0% | 897 → 1,049 | `_run_code`                         | `<frozen runpy>`                         |
|  +16.9% |  +152 |        100.0% | 897 → 1,049 | `run_module`                        | `<frozen runpy>`                         |
|  +16.9% |  +152 |        100.0% | 897 → 1,049 | `_run_module_as_main`               | `<frozen runpy>`                         |
|  +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `_run_module_code`                  | `<frozen runpy>`                         |
| +125.0% |    +5 |   0.4% → 0.9% |       4 → 9 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
|  +42.9% |    +3 |   0.8% → 1.0% |      7 → 10 | `SourceLoader.get_code`             | `<frozen importlib._bootstrap_external>` |
|   +7.1% |    +2 |   3.1% → 2.9% |     28 → 30 | `_LoaderBasics.exec_module`         | `<frozen importlib._bootstrap_external>` |
|   +7.1% |    +2 |   3.1% → 2.9% |     28 → 30 | `_load_unlocked`                    | `<frozen importlib._bootstrap>`          |
|   +7.1% |    +2 |   3.1% → 2.9% |     28 → 30 | `_find_and_load_unlocked`           | `<frozen importlib._bootstrap>`          |
|   +7.1% |    +2 |   3.1% → 2.9% |     28 → 30 | `_find_and_load`                    | `<frozen importlib._bootstrap>`          |
|   +7.1% |    +2 |   3.1% → 2.9% |     28 → 30 | `_call_with_frames_removed`         | `<frozen importlib._bootstrap>`          |
|   +7.1% |    +2 |   3.1% → 2.9% |     28 → 30 | `_get_module_details`               | `<frozen runpy>`                         |
|     new |    +1 |   0.0% → 0.1% |       0 → 1 | `_path_stat`                        | `<frozen importlib._bootstrap_external>` |
|     new |    +1 |   0.0% → 0.1% |       0 → 1 | `BufferedIncrementalDecoder.decode` | `<frozen codecs>`                        |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |           % | Samples | Function                                                | Location                                 |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------- | ---------------------------------------- |
|  -22.9% |    -8 | 3.9% → 2.6% | 35 → 27 | `TokenProxy.__next__`                                   | `driver.py`                              |
|  -26.7% |    -4 | 1.7% → 1.0% | 15 → 11 | `EmptyLineTracker.maybe_empty_lines`                    | `lines.py`                               |
|  -21.4% |    -3 | 1.6% → 1.0% | 14 → 11 | `convert_one_fmt_off_pair`                              | `comments.py`                            |
|  -21.4% |    -3 | 1.6% → 1.0% | 14 → 11 | `normalize_fmt_off`                                     | `comments.py`                            |
|  -12.0% |    -3 | 2.8% → 2.1% | 25 → 22 | `Parser.pop`                                            | `parse.py`                               |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `<module>`                                              | `agg.py`                                 |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `<module>`                                              | `gitignore.py`                           |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `Line.contains_implicit_multiline_string_with_comments` | `lines.py`                               |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `FileFinder.find_spec`                                  | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `PathFinder._get_spec`                                  | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `PathFinder.find_spec`                                  | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `_find_spec`                                            | `<frozen importlib._bootstrap>`          |
|  -16.7% |    -1 | 0.7% → 0.5% |   6 → 5 | `LinesBlock.all_lines`                                  | `lines.py`                               |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `FileLoader.get_data`                                   | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                                              | `formatting.py`                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_path_is_mode_type`                                    | `<frozen importlib._bootstrap_external>` |
|  -16.7% |    -1 | 0.7% → 0.5% |   6 → 5 | `_FuncBuilder.add_fns_to_class`                         | `dataclasses.py`                         |
|  -16.7% |    -1 | 0.7% → 0.5% |   6 → 5 | `_process_class`                                        | `dataclasses.py`                         |
|  -16.7% |    -1 | 0.7% → 0.5% |   6 → 5 | `dataclass.<locals>.wrap`                               | `dataclasses.py`                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                                              | `util.py`                                |

##### Ours

|  Change | Delta |           % | Samples | Function                                                | Location         |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------- | ---------------- |
|  -22.9% |    -8 | 3.9% → 2.6% | 35 → 27 | `TokenProxy.__next__`                                   | `driver.py`      |
|  -26.7% |    -4 | 1.7% → 1.0% | 15 → 11 | `EmptyLineTracker.maybe_empty_lines`                    | `lines.py`       |
|  -21.4% |    -3 | 1.6% → 1.0% | 14 → 11 | `convert_one_fmt_off_pair`                              | `comments.py`    |
|  -21.4% |    -3 | 1.6% → 1.0% | 14 → 11 | `normalize_fmt_off`                                     | `comments.py`    |
|  -12.0% |    -3 | 2.8% → 2.1% | 25 → 22 | `Parser.pop`                                            | `parse.py`       |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `<module>`                                              | `agg.py`         |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `<module>`                                              | `gitignore.py`   |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `Line.contains_implicit_multiline_string_with_comments` | `lines.py`       |
|  -16.7% |    -1 | 0.7% → 0.5% |   6 → 5 | `LinesBlock.all_lines`                                  | `lines.py`       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                                              | `formatting.py`  |
|  -16.7% |    -1 | 0.7% → 0.5% |   6 → 5 | `_FuncBuilder.add_fns_to_class`                         | `dataclasses.py` |
|  -16.7% |    -1 | 0.7% → 0.5% |   6 → 5 | `_process_class`                                        | `dataclasses.py` |
|  -16.7% |    -1 | 0.7% → 0.5% |   6 → 5 | `dataclass.<locals>.wrap`                               | `dataclasses.py` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                                              | `util.py`        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                                              | `basic.py`       |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `<module>`                                              | `_base.py`       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                                              | `base.py`        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `option.<locals>.decorator`                             | `decorators.py`  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `NamedTupleMeta.__new__`                                | `typing.py`      |
|  -33.3% |    -1 | 0.3% → 0.2% |   3 → 2 | `<module>`                                              | `hashlib.py`     |

##### Standard library

|  Change | Delta |           % | Samples | Function               | Location                                 |
| ------: | ----: | ----------: | ------: | ---------------------- | ---------------------------------------- |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `PathFinder.find_spec` | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `_find_spec`           | `<frozen importlib._bootstrap>`          |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `FileLoader.get_data`  | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_path_is_mode_type`   | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_path_join`           | `<frozen importlib._bootstrap_external>` |

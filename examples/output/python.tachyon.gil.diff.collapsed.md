# Sampling profile diff

Collected 935 samples → 1,156 samples (+221 samples, +23.6%).

| Category          | Change | Delta |             % |   Samples |
| ----------------- | -----: | ----: | ------------: | --------: |
| Ours              | +11.5% |   +73 | 67.9% → 61.2% | 635 → 708 |
| Garbage collector | +51.4% |  +148 | 30.8% → 37.7% | 288 → 436 |
| Standard library  |   0.0% |     0 |   1.3% → 1.0% |        12 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                              | Location                        |
| ------: | ----: | ------------: | --------: | ------------------------------------- | ------------------------------- |
|  +51.4% |  +148 | 30.8% → 37.7% | 288 → 436 | `(garbage collector)`                 | `<unknown>`                     |
|  +29.2% |   +40 | 14.7% → 15.3% | 137 → 177 | `Parser._addtoken`                    | `parse.py`                      |
|  +14.8% |   +13 |   9.4% → 8.7% |  88 → 101 | `get_features_used`                   | `__init__.py`                   |
|  +29.7% |   +11 |   4.0% → 4.2% |   37 → 48 | `parse`                               | `ast.py`                        |
|  +10.3% |    +6 |   6.2% → 5.5% |   58 → 64 | `Driver.parse_tokens`                 | `driver.py`                     |
| +100.0% |    +6 |   0.6% → 1.0% |    6 → 12 | `_format_str_once`                    | `__init__.py`                   |
| +400.0% |    +4 |   0.1% → 0.4% |     1 → 5 | `hug_power_op`                        | `trans.py`                      |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `is_fstring_start.<locals>.<genexpr>` | `tokenize.py`                   |
| +150.0% |    +3 |   0.2% → 0.4% |     2 → 5 | `assert_stable`                       | `__init__.py`                   |
| +150.0% |    +3 |   0.2% → 0.4% |     2 → 5 | `convert`                             | `pytree.py`                     |
|     new |    +3 |   0.0% → 0.3% |     0 → 3 | `__create_fn__.<locals>.__init__`     | `<string>`                      |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `Line.__str__`                        | `lines.py`                      |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `whitespace`                          | `nodes.py`                      |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `EmptyLineTracker._maybe_empty_lines` | `lines.py`                      |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `_hugging_power_ops_line_to_string`   | `linegen.py`                    |
|  +22.2% |    +2 |          1.0% |    9 → 11 | `assert_equivalent`                   | `__init__.py`                   |
|   +5.0% |    +2 |   4.3% → 3.6% |   40 → 42 | `generate_tokens`                     | `tokenize.py`                   |
|  +33.3% |    +2 |   0.6% → 0.7% |     6 → 8 | `LinesBlock.all_lines`                | `lines.py`                      |
|  +40.0% |    +2 |   0.5% → 0.6% |     5 → 7 | `Parser.push`                         | `parse.py`                      |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `_call_with_frames_removed`           | `<frozen importlib._bootstrap>` |

##### Ours

|  Change | Delta |             % |   Samples | Function                              | Location      |
| ------: | ----: | ------------: | --------: | ------------------------------------- | ------------- |
|  +29.2% |   +40 | 14.7% → 15.3% | 137 → 177 | `Parser._addtoken`                    | `parse.py`    |
|  +14.8% |   +13 |   9.4% → 8.7% |  88 → 101 | `get_features_used`                   | `__init__.py` |
|  +29.7% |   +11 |   4.0% → 4.2% |   37 → 48 | `parse`                               | `ast.py`      |
|  +10.3% |    +6 |   6.2% → 5.5% |   58 → 64 | `Driver.parse_tokens`                 | `driver.py`   |
| +100.0% |    +6 |   0.6% → 1.0% |    6 → 12 | `_format_str_once`                    | `__init__.py` |
| +400.0% |    +4 |   0.1% → 0.4% |     1 → 5 | `hug_power_op`                        | `trans.py`    |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `is_fstring_start.<locals>.<genexpr>` | `tokenize.py` |
| +150.0% |    +3 |   0.2% → 0.4% |     2 → 5 | `assert_stable`                       | `__init__.py` |
| +150.0% |    +3 |   0.2% → 0.4% |     2 → 5 | `convert`                             | `pytree.py`   |
|     new |    +3 |   0.0% → 0.3% |     0 → 3 | `__create_fn__.<locals>.__init__`     | `<string>`    |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `Line.__str__`                        | `lines.py`    |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `whitespace`                          | `nodes.py`    |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `EmptyLineTracker._maybe_empty_lines` | `lines.py`    |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `_hugging_power_ops_line_to_string`   | `linegen.py`  |
|  +22.2% |    +2 |          1.0% |    9 → 11 | `assert_equivalent`                   | `__init__.py` |
|   +5.0% |    +2 |   4.3% → 3.6% |   40 → 42 | `generate_tokens`                     | `tokenize.py` |
|  +33.3% |    +2 |   0.6% → 0.7% |     6 → 8 | `LinesBlock.all_lines`                | `lines.py`    |
|  +40.0% |    +2 |   0.5% → 0.6% |     5 → 7 | `Parser.push`                         | `parse.py`    |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `Node.update_sibling_maps`            | `pytree.py`   |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `LineGenerator.visit_STRING`          | `linegen.py`  |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +51.4% |  +148 | 30.8% → 37.7% | 288 → 436 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                    | Location                                 |
| ------: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `FileFinder.find_spec`      | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `FileLoader.get_data`       | `<frozen importlib._bootstrap_external>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                             | Location                                 |
| ------: | ----: | ----------: | ------: | ------------------------------------ | ---------------------------------------- |
|  -26.5% |    -9 | 3.6% → 2.2% | 34 → 25 | `Visitor.visit`                      | `nodes.py`                               |
|  -40.9% |    -9 | 2.4% → 1.1% | 22 → 13 | `Line.append`                        | `lines.py`                               |
|  -60.0% |    -6 | 1.1% → 0.3% |  10 → 4 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`                               |
|  -31.6% |    -6 | 2.0% → 1.1% | 19 → 13 | `Parser.pop`                         | `parse.py`                               |
| removed |    -5 | 0.5% → 0.0% |   5 → 0 | `wrap_in_parentheses`                | `nodes.py`                               |
|  -66.7% |    -4 | 0.6% → 0.2% |   6 → 2 | `_FuncBuilder.add_fns_to_class`      | `dataclasses.py`                         |
|  -20.0% |    -3 | 1.6% → 1.0% | 15 → 12 | `convert_one_fmt_off_pair`           | `comments.py`                            |
|  -23.1% |    -3 | 1.4% → 0.9% | 13 → 10 | `LineGenerator.visit_default`        | `linegen.py`                             |
|  -50.0% |    -3 | 0.6% → 0.3% |   6 → 3 | `line_to_string`                     | `lines.py`                               |
|  -21.4% |    -3 | 1.5% → 1.0% | 14 → 11 | `_stringify_ast`                     | `parsing.py`                             |
|  -33.3% |    -3 | 1.0% → 0.5% |   9 → 6 | `_compile_bytecode`                  | `<frozen importlib._bootstrap_external>` |
| removed |    -3 | 0.3% → 0.0% |   3 → 0 | `Base.remove`                        | `pytree.py`                              |
|  -33.3% |    -2 | 0.6% → 0.3% |   6 → 4 | `transform_line`                     | `linegen.py`                             |
|  -15.4% |    -2 | 1.4% → 1.0% | 13 → 11 | `Parser.shift`                       | `parse.py`                               |
|  -10.0% |    -1 | 1.1% → 0.8% |  10 → 9 | `Parser.addtoken`                    | `parse.py`                               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `lib2to3_parse`                      | `parsing.py`                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Node.__init__`                      | `pytree.py`                              |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `LineGenerator.visit_stmt`           | `linegen.py`                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `LineGenerator.visit_funcdef`        | `linegen.py`                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `StringTransformer.__init__`         | `trans.py`                               |

##### Ours

|  Change | Delta |           % | Samples | Function                             | Location         |
| ------: | ----: | ----------: | ------: | ------------------------------------ | ---------------- |
|  -26.5% |    -9 | 3.6% → 2.2% | 34 → 25 | `Visitor.visit`                      | `nodes.py`       |
|  -40.9% |    -9 | 2.4% → 1.1% | 22 → 13 | `Line.append`                        | `lines.py`       |
|  -60.0% |    -6 | 1.1% → 0.3% |  10 → 4 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`       |
|  -31.6% |    -6 | 2.0% → 1.1% | 19 → 13 | `Parser.pop`                         | `parse.py`       |
| removed |    -5 | 0.5% → 0.0% |   5 → 0 | `wrap_in_parentheses`                | `nodes.py`       |
|  -66.7% |    -4 | 0.6% → 0.2% |   6 → 2 | `_FuncBuilder.add_fns_to_class`      | `dataclasses.py` |
|  -20.0% |    -3 | 1.6% → 1.0% | 15 → 12 | `convert_one_fmt_off_pair`           | `comments.py`    |
|  -23.1% |    -3 | 1.4% → 0.9% | 13 → 10 | `LineGenerator.visit_default`        | `linegen.py`     |
|  -50.0% |    -3 | 0.6% → 0.3% |   6 → 3 | `line_to_string`                     | `lines.py`       |
|  -21.4% |    -3 | 1.5% → 1.0% | 14 → 11 | `_stringify_ast`                     | `parsing.py`     |
| removed |    -3 | 0.3% → 0.0% |   3 → 0 | `Base.remove`                        | `pytree.py`      |
|  -33.3% |    -2 | 0.6% → 0.3% |   6 → 4 | `transform_line`                     | `linegen.py`     |
|  -15.4% |    -2 | 1.4% → 1.0% | 13 → 11 | `Parser.shift`                       | `parse.py`       |
|  -10.0% |    -1 | 1.1% → 0.8% |  10 → 9 | `Parser.addtoken`                    | `parse.py`       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `lib2to3_parse`                      | `parsing.py`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Node.__init__`                      | `pytree.py`      |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `LineGenerator.visit_stmt`           | `linegen.py`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `LineGenerator.visit_funcdef`        | `linegen.py`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `StringTransformer.__init__`         | `trans.py`       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                           | `grammar.py`     |

##### Standard library

|  Change | Delta |           % | Samples | Function                    | Location                                 |
| ------: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
|  -33.3% |    -3 | 1.0% → 0.5% |   9 → 6 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `FileFinder._get_spec`      | `<frozen importlib._bootstrap_external>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |     Samples | Function                         | Location         |
| -----: | ----: | ------------: | ----------: | -------------------------------- | ---------------- |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `format_file_contents`           | `__init__.py`    |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `format_file_in_place`           | `__init__.py`    |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `reformat_one`                   | `__init__.py`    |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `main`                           | `__init__.py`    |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `pass_context.<locals>.new_func` | `decorators.py`  |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `Context.invoke`                 | `core.py`        |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `Command.invoke`                 | `core.py`        |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `Command.main`                   | `core.py`        |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `Command.__call__`               | `core.py`        |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `patched_main`                   | `__init__.py`    |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `<module>`                       | `__main__.py`    |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `_run_module_code`               | `<frozen runpy>` |
| +23.6% |  +221 |        100.0% | 935 → 1,156 | `_run_code`                      | `<frozen runpy>` |
| +23.6% |  +221 |        100.0% | 935 → 1,156 | `run_module`                     | `<frozen runpy>` |
| +23.6% |  +221 |        100.0% | 935 → 1,156 | `_run_module_as_main`            | `<frozen runpy>` |
| +24.9% |  +207 | 88.9% → 89.8% | 831 → 1,038 | `_format_str_once`               | `__init__.py`    |
| +33.0% |  +163 | 52.8% → 56.8% |   494 → 657 | `Driver.parse_tokens`            | `driver.py`      |
| +33.0% |  +163 | 52.8% → 56.8% |   494 → 657 | `Driver.parse_string`            | `driver.py`      |
| +32.7% |  +162 | 52.9% → 56.8% |   495 → 657 | `lib2to3_parse`                  | `parsing.py`     |
| +51.4% |  +148 | 30.8% → 37.7% |   288 → 436 | `(garbage collector)`            | `<unknown>`      |

##### Ours

| Change | Delta |             % |     Samples | Function                          | Location        |
| -----: | ----: | ------------: | ----------: | --------------------------------- | --------------- |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `format_file_contents`            | `__init__.py`   |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `format_file_in_place`            | `__init__.py`   |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `reformat_one`                    | `__init__.py`   |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `main`                            | `__init__.py`   |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `pass_context.<locals>.new_func`  | `decorators.py` |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `Context.invoke`                  | `core.py`       |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `Command.invoke`                  | `core.py`       |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `Command.main`                    | `core.py`       |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `Command.__call__`                | `core.py`       |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `patched_main`                    | `__init__.py`   |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `<module>`                        | `__main__.py`   |
| +24.9% |  +207 | 88.9% → 89.8% | 831 → 1,038 | `_format_str_once`                | `__init__.py`   |
| +33.0% |  +163 | 52.8% → 56.8% |   494 → 657 | `Driver.parse_tokens`             | `driver.py`     |
| +33.0% |  +163 | 52.8% → 56.8% |   494 → 657 | `Driver.parse_string`             | `driver.py`     |
| +32.7% |  +162 | 52.9% → 56.8% |   495 → 657 | `lib2to3_parse`                   | `parsing.py`    |
| +38.1% |  +145 | 40.7% → 45.5% |   381 → 526 | `Parser._addtoken`                | `parse.py`      |
| +34.6% |  +138 | 42.7% → 46.5% |   399 → 537 | `Parser.addtoken`                 | `parse.py`      |
| +27.9% |  +122 | 46.8% → 48.4% |   438 → 560 | `format_str`                      | `__init__.py`   |
| +21.7% |  +102 | 50.4% → 49.6% |   471 → 573 | `check_stability_and_equivalence` | `__init__.py`   |
| +22.3% |   +89 | 42.8% → 42.3% |   400 → 489 | `assert_stable`                   | `__init__.py`   |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +51.4% |  +148 | 30.8% → 37.7% | 288 → 436 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |             % |     Samples | Function                            | Location                                 |
| ------: | ----: | ------------: | ----------: | ----------------------------------- | ---------------------------------------- |
|  +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `_run_module_code`                  | `<frozen runpy>`                         |
|  +23.6% |  +221 |        100.0% | 935 → 1,156 | `_run_code`                         | `<frozen runpy>`                         |
|  +23.6% |  +221 |        100.0% | 935 → 1,156 | `run_module`                        | `<frozen runpy>`                         |
|  +23.6% |  +221 |        100.0% | 935 → 1,156 | `_run_module_as_main`               | `<frozen runpy>`                         |
|     new |    +2 |   0.0% → 0.2% |       0 → 2 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
|     new |    +2 |   0.0% → 0.2% |       0 → 2 | `module_from_spec`                  | `<frozen importlib._bootstrap>`          |
| +100.0% |    +1 |   0.1% → 0.2% |       1 → 2 | `FileFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
| +100.0% |    +1 |   0.1% → 0.2% |       1 → 2 | `PathFinder._get_spec`              | `<frozen importlib._bootstrap_external>` |
| +100.0% |    +1 |   0.1% → 0.2% |       1 → 2 | `PathFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
| +100.0% |    +1 |   0.1% → 0.2% |       1 → 2 | `_find_spec`                        | `<frozen importlib._bootstrap>`          |
|     new |    +1 |   0.0% → 0.1% |       0 → 1 | `ABCMeta.__new__`                   | `<frozen abc>`                           |
|     new |    +1 |   0.0% → 0.1% |       0 → 1 | `FileLoader.get_data`               | `<frozen importlib._bootstrap_external>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                             | Location                                 |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ---------------------------------------- |
|  -12.0% |   -15 |  13.4% → 9.5% | 125 → 110 | `LineGenerator.visit_stmt`           | `linegen.py`                             |
|  -10.7% |   -13 |  13.0% → 9.4% | 122 → 109 | `LineGenerator.visit_funcdef`        | `linegen.py`                             |
|   -8.9% |   -11 |  13.2% → 9.7% | 123 → 112 | `LineGenerator.visit_suite`          | `linegen.py`                             |
|   -7.1% |    -9 | 13.5% → 10.1% | 126 → 117 | `Visitor.visit`                      | `nodes.py`                               |
|   -7.1% |    -9 | 13.5% → 10.1% | 126 → 117 | `Visitor.visit_default`              | `nodes.py`                               |
|   -7.1% |    -9 | 13.5% → 10.1% | 126 → 117 | `LineGenerator.visit_default`        | `linegen.py`                             |
|  -77.8% |    -7 |   1.0% → 0.2% |     9 → 2 | `wrap_in_parentheses`                | `nodes.py`                               |
|  -30.0% |    -6 |   2.1% → 1.2% |   20 → 14 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`                               |
|  -33.3% |    -6 |   1.9% → 1.0% |   18 → 12 | `normalize_invisible_parens`         | `linegen.py`                             |
|  -17.2% |    -5 |   3.1% → 2.1% |   29 → 24 | `Parser.pop`                         | `parse.py`                               |
|  -71.4% |    -5 |   0.7% → 0.2% |     7 → 2 | `<module>`                           | `nodes.py`                               |
|  -71.4% |    -5 |   0.7% → 0.2% |     7 → 2 | `<module>`                           | `comments.py`                            |
|  -66.7% |    -4 |   0.6% → 0.2% |     6 → 2 | `_FuncBuilder.add_fns_to_class`      | `dataclasses.py`                         |
|  -66.7% |    -4 |   0.6% → 0.2% |     6 → 2 | `_process_class`                     | `dataclasses.py`                         |
|  -66.7% |    -4 |   0.6% → 0.2% |     6 → 2 | `dataclass.<locals>.wrap`            | `dataclasses.py`                         |
| removed |    -4 |   0.4% → 0.0% |     4 → 0 | `Base.remove`                        | `pytree.py`                              |
|  -18.8% |    -3 |   1.7% → 1.1% |   16 → 13 | `convert_one_fmt_off_pair`           | `comments.py`                            |
|  -18.8% |    -3 |   1.7% → 1.1% |   16 → 13 | `normalize_fmt_off`                  | `comments.py`                            |
|  -11.5% |    -3 |   2.8% → 2.0% |   26 → 23 | `_LoaderBasics.exec_module`          | `<frozen importlib._bootstrap_external>` |
|  -11.5% |    -3 |   2.8% → 2.0% |   26 → 23 | `_load_unlocked`                     | `<frozen importlib._bootstrap>`          |

##### Ours

|  Change | Delta |             % |   Samples | Function                             | Location         |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ---------------- |
|  -12.0% |   -15 |  13.4% → 9.5% | 125 → 110 | `LineGenerator.visit_stmt`           | `linegen.py`     |
|  -10.7% |   -13 |  13.0% → 9.4% | 122 → 109 | `LineGenerator.visit_funcdef`        | `linegen.py`     |
|   -8.9% |   -11 |  13.2% → 9.7% | 123 → 112 | `LineGenerator.visit_suite`          | `linegen.py`     |
|   -7.1% |    -9 | 13.5% → 10.1% | 126 → 117 | `Visitor.visit`                      | `nodes.py`       |
|   -7.1% |    -9 | 13.5% → 10.1% | 126 → 117 | `Visitor.visit_default`              | `nodes.py`       |
|   -7.1% |    -9 | 13.5% → 10.1% | 126 → 117 | `LineGenerator.visit_default`        | `linegen.py`     |
|  -77.8% |    -7 |   1.0% → 0.2% |     9 → 2 | `wrap_in_parentheses`                | `nodes.py`       |
|  -30.0% |    -6 |   2.1% → 1.2% |   20 → 14 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`       |
|  -33.3% |    -6 |   1.9% → 1.0% |   18 → 12 | `normalize_invisible_parens`         | `linegen.py`     |
|  -17.2% |    -5 |   3.1% → 2.1% |   29 → 24 | `Parser.pop`                         | `parse.py`       |
|  -71.4% |    -5 |   0.7% → 0.2% |     7 → 2 | `<module>`                           | `nodes.py`       |
|  -71.4% |    -5 |   0.7% → 0.2% |     7 → 2 | `<module>`                           | `comments.py`    |
|  -66.7% |    -4 |   0.6% → 0.2% |     6 → 2 | `_FuncBuilder.add_fns_to_class`      | `dataclasses.py` |
|  -66.7% |    -4 |   0.6% → 0.2% |     6 → 2 | `_process_class`                     | `dataclasses.py` |
|  -66.7% |    -4 |   0.6% → 0.2% |     6 → 2 | `dataclass.<locals>.wrap`            | `dataclasses.py` |
| removed |    -4 |   0.4% → 0.0% |     4 → 0 | `Base.remove`                        | `pytree.py`      |
|  -18.8% |    -3 |   1.7% → 1.1% |   16 → 13 | `convert_one_fmt_off_pair`           | `comments.py`    |
|  -18.8% |    -3 |   1.7% → 1.1% |   16 → 13 | `normalize_fmt_off`                  | `comments.py`    |
|  -11.5% |    -3 |   2.8% → 2.0% |   26 → 23 | `<module>`                           | `__init__.py`    |
|  -11.1% |    -2 |   1.9% → 1.4% |   18 → 16 | `_stringify_ast`                     | `parsing.py`     |

##### Standard library

|  Change | Delta |           % | Samples | Function                    | Location                                 |
| ------: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
|  -11.5% |    -3 | 2.8% → 2.0% | 26 → 23 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
|  -11.5% |    -3 | 2.8% → 2.0% | 26 → 23 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|  -11.5% |    -3 | 2.8% → 2.0% | 26 → 23 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
|  -11.5% |    -3 | 2.8% → 2.0% | 26 → 23 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
|  -11.5% |    -3 | 2.8% → 2.0% | 26 → 23 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  -11.5% |    -3 | 2.8% → 2.0% | 26 → 23 | `_get_module_details`       | `<frozen runpy>`                         |
|  -22.2% |    -2 | 1.0% → 0.6% |   9 → 7 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
|  -28.6% |    -2 | 0.7% → 0.4% |   7 → 5 | `_handle_fromlist`          | `<frozen importlib._bootstrap>`          |
|  -11.1% |    -1 | 1.0% → 0.7% |   9 → 8 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `FileFinder._get_spec`      | `<frozen importlib._bootstrap_external>` |

# Sampling profile diff

Collected 952 samples → 981 samples (+29 samples, +3.0%).

| Category          | Change | Delta |             % |   Samples |
| ----------------- | -----: | ----: | ------------: | --------: |
| Ours              |  +2.8% |   +18 | 68.2% → 68.0% | 649 → 667 |
| Garbage collector |  +4.1% |   +12 | 30.5% → 30.8% | 290 → 302 |
| Standard library  |  -7.7% |    -1 |   1.4% → 1.2% |   13 → 12 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                             | Location         |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ---------------- |
|   +4.1% |   +12 | 30.5% → 30.8% | 290 → 302 | `(garbage collector)`                | `<unknown>`      |
| +157.1% |   +11 |   0.7% → 1.8% |    7 → 18 | `Parser.shift`                       | `parse.py`       |
| +160.0% |    +8 |   0.5% → 1.3% |    5 → 13 | `Parser.push`                        | `parse.py`       |
| +350.0% |    +7 |   0.2% → 0.9% |     2 → 9 | `_format_str_once`                   | `__init__.py`    |
| +200.0% |    +6 |   0.3% → 0.9% |     3 → 9 | `LineGenerator.visit_stmt`           | `linegen.py`     |
|  +23.1% |    +6 |   2.7% → 3.3% |   26 → 32 | `generate_tokens`                    | `tokenize.py`    |
|  +12.8% |    +5 |   4.1% → 4.5% |   39 → 44 | `parse`                              | `ast.py`         |
|   +3.3% |    +3 |          9.6% |   91 → 94 | `get_features_used`                  | `__init__.py`    |
| +300.0% |    +3 |   0.1% → 0.4% |     1 → 4 | `_stringify_ast_with_new_parent`     | `parsing.py`     |
|  +40.0% |    +2 |   0.5% → 0.7% |     5 → 7 | `BracketTracker.mark`                | `brackets.py`    |
|  +18.2% |    +2 |   1.2% → 1.3% |   11 → 13 | `Parser.addtoken`                    | `parse.py`       |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `Base.__new__`                       | `pytree.py`      |
|  +33.3% |    +2 |   0.6% → 0.8% |     6 → 8 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`       |
|  +20.0% |    +2 |   1.1% → 1.2% |   10 → 12 | `Line.append`                        | `lines.py`       |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `Base.remove`                        | `pytree.py`      |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `Leaf.clone`                         | `pytree.py`      |
|  +12.5% |    +1 |   0.8% → 0.9% |     8 → 9 | `LineGenerator.visit_default`        | `linegen.py`     |
|   +5.9% |    +1 |          1.8% |   17 → 18 | `Parser.pop`                         | `parse.py`       |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `__create_fn__.<locals>.__init__`    | `<string>`       |
|  +50.0% |    +1 |   0.2% → 0.3% |     2 → 3 | `_FuncBuilder.add_fns_to_class`      | `dataclasses.py` |

##### Ours

|  Change | Delta |           % | Samples | Function                             | Location         |
| ------: | ----: | ----------: | ------: | ------------------------------------ | ---------------- |
| +157.1% |   +11 | 0.7% → 1.8% |  7 → 18 | `Parser.shift`                       | `parse.py`       |
| +160.0% |    +8 | 0.5% → 1.3% |  5 → 13 | `Parser.push`                        | `parse.py`       |
| +350.0% |    +7 | 0.2% → 0.9% |   2 → 9 | `_format_str_once`                   | `__init__.py`    |
| +200.0% |    +6 | 0.3% → 0.9% |   3 → 9 | `LineGenerator.visit_stmt`           | `linegen.py`     |
|  +23.1% |    +6 | 2.7% → 3.3% | 26 → 32 | `generate_tokens`                    | `tokenize.py`    |
|  +12.8% |    +5 | 4.1% → 4.5% | 39 → 44 | `parse`                              | `ast.py`         |
|   +3.3% |    +3 |        9.6% | 91 → 94 | `get_features_used`                  | `__init__.py`    |
| +300.0% |    +3 | 0.1% → 0.4% |   1 → 4 | `_stringify_ast_with_new_parent`     | `parsing.py`     |
|  +40.0% |    +2 | 0.5% → 0.7% |   5 → 7 | `BracketTracker.mark`                | `brackets.py`    |
|  +18.2% |    +2 | 1.2% → 1.3% | 11 → 13 | `Parser.addtoken`                    | `parse.py`       |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `Base.__new__`                       | `pytree.py`      |
|  +33.3% |    +2 | 0.6% → 0.8% |   6 → 8 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`       |
|  +20.0% |    +2 | 1.1% → 1.2% | 10 → 12 | `Line.append`                        | `lines.py`       |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `Base.remove`                        | `pytree.py`      |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `Leaf.clone`                         | `pytree.py`      |
|  +12.5% |    +1 | 0.8% → 0.9% |   8 → 9 | `LineGenerator.visit_default`        | `linegen.py`     |
|   +5.9% |    +1 |        1.8% | 17 → 18 | `Parser.pop`                         | `parse.py`       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `__create_fn__.<locals>.__init__`    | `<string>`       |
|  +50.0% |    +1 | 0.2% → 0.3% |   2 → 3 | `_FuncBuilder.add_fns_to_class`      | `dataclasses.py` |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `LineGenerator.visit_STRING`         | `linegen.py`     |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
|  +4.1% |   +12 | 30.5% → 30.8% | 290 → 302 | `(garbage collector)` | `<unknown>` |

##### Standard library

| Change | Delta |           % | Samples | Function                             | Location                                 |
| -----: | ----: | ----------: | ------: | ------------------------------------ | ---------------------------------------- |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `_HierarchicalLockManager.__enter__` | `<frozen importlib._bootstrap>`          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `_verbose_message`                   | `<frozen importlib._bootstrap>`          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `PathFinder._get_spec`               | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `_ModuleLock.acquire`                | `<frozen importlib._bootstrap>`          |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                | Location                                 |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------- | ---------------------------------------- |
|   -4.4% |    -7 | 16.7% → 15.5% | 159 → 152 | `Parser._addtoken`                                      | `parse.py`                               |
|  -85.7% |    -6 |   0.7% → 0.1% |     7 → 1 | `hug_power_op`                                          | `trans.py`                               |
|  -33.3% |    -5 |   1.6% → 1.0% |   15 → 10 | `normalize_invisible_parens`                            | `linegen.py`                             |
|  -50.0% |    -5 |   1.1% → 0.5% |    10 → 5 | `convert`                                               | `pytree.py`                              |
|  -80.0% |    -4 |   0.5% → 0.1% |     5 → 1 | `whitespace`                                            | `nodes.py`                               |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `LineGenerator.visit_suite`                             | `linegen.py`                             |
|  -20.0% |    -2 |   1.1% → 0.8% |    10 → 8 | `assert_equivalent`                                     | `__init__.py`                            |
|  -50.0% |    -2 |   0.4% → 0.2% |     4 → 2 | `TokenProxy.__next__`                                   | `driver.py`                              |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `Parser.classify`                                       | `parse.py`                               |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `_hugging_power_ops_line_to_string`                     | `linegen.py`                             |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `FileLoader.get_data`                                   | `<frozen importlib._bootstrap_external>` |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `Base.leaves`                                           | `pytree.py`                              |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `_contains_fmt_skip_comment`                            | `comments.py`                            |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `Line.contains_implicit_multiline_string_with_comments` | `lines.py`                               |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `max_delimiter_priority_in_atom`                        | `brackets.py`                            |
|   -4.0% |    -1 |   2.6% → 2.4% |   25 → 24 | `Visitor.visit`                                         | `nodes.py`                               |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `LineGenerator.visit_funcdef`                           | `linegen.py`                             |
|  -25.0% |    -1 |   0.4% → 0.3% |     4 → 3 | `LineGenerator.visit_simple_stmt`                       | `linegen.py`                             |
|  -20.0% |    -1 |   0.5% → 0.4% |     5 → 4 | `LineGenerator.visit_power`                             | `linegen.py`                             |
|  -25.0% |    -1 |   0.4% → 0.3% |     4 → 3 | `Line.__str__`                                          | `lines.py`                               |

##### Ours

|  Change | Delta |             % |   Samples | Function                                                | Location          |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------- | ----------------- |
|   -4.4% |    -7 | 16.7% → 15.5% | 159 → 152 | `Parser._addtoken`                                      | `parse.py`        |
|  -85.7% |    -6 |   0.7% → 0.1% |     7 → 1 | `hug_power_op`                                          | `trans.py`        |
|  -33.3% |    -5 |   1.6% → 1.0% |   15 → 10 | `normalize_invisible_parens`                            | `linegen.py`      |
|  -50.0% |    -5 |   1.1% → 0.5% |    10 → 5 | `convert`                                               | `pytree.py`       |
|  -80.0% |    -4 |   0.5% → 0.1% |     5 → 1 | `whitespace`                                            | `nodes.py`        |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `LineGenerator.visit_suite`                             | `linegen.py`      |
|  -20.0% |    -2 |   1.1% → 0.8% |    10 → 8 | `assert_equivalent`                                     | `__init__.py`     |
|  -50.0% |    -2 |   0.4% → 0.2% |     4 → 2 | `TokenProxy.__next__`                                   | `driver.py`       |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `Parser.classify`                                       | `parse.py`        |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `_hugging_power_ops_line_to_string`                     | `linegen.py`      |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `Base.leaves`                                           | `pytree.py`       |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `_contains_fmt_skip_comment`                            | `comments.py`     |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `Line.contains_implicit_multiline_string_with_comments` | `lines.py`        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `max_delimiter_priority_in_atom`                        | `brackets.py`     |
|   -4.0% |    -1 |   2.6% → 2.4% |   25 → 24 | `Visitor.visit`                                         | `nodes.py`        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `LineGenerator.visit_funcdef`                           | `linegen.py`      |
|  -25.0% |    -1 |   0.4% → 0.3% |     4 → 3 | `LineGenerator.visit_simple_stmt`                       | `linegen.py`      |
|  -20.0% |    -1 |   0.5% → 0.4% |     5 → 4 | `LineGenerator.visit_power`                             | `linegen.py`      |
|  -25.0% |    -1 |   0.4% → 0.3% |     4 → 3 | `Line.__str__`                                          | `lines.py`        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `<module>`                                              | `configparser.py` |

##### Standard library

|  Change | Delta |           % | Samples | Function                    | Location                                 |
| ------: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `FileLoader.get_data`       | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  -12.5% |    -1 | 0.8% → 0.7% |   8 → 7 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ABCMeta.__new__`           | `<frozen abc>`                           |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                          | Location         |
| -----: | ----: | ------------: | --------: | --------------------------------- | ---------------- |
|  +9.0% |   +41 | 47.9% → 50.7% | 456 → 497 | `check_stability_and_equivalence` | `__init__.py`    |
|  +8.6% |   +33 | 40.2% → 42.4% | 383 → 416 | `assert_stable`                   | `__init__.py`    |
|  +3.0% |   +29 |        100.0% | 952 → 981 | `(native)`                        | `<unknown>`      |
|  +3.0% |   +29 |        100.0% | 952 → 981 | `_run_code`                       | `<frozen runpy>` |
|  +3.0% |   +29 |        100.0% | 952 → 981 | `run_module`                      | `<frozen runpy>` |
|  +3.0% |   +29 |        100.0% | 952 → 981 | `_run_module_as_main`             | `<frozen runpy>` |
|  +2.9% |   +27 | 97.8% → 97.7% | 931 → 958 | `main`                            | `__init__.py`    |
|  +2.9% |   +27 | 97.8% → 97.7% | 931 → 958 | `pass_context.<locals>.new_func`  | `decorators.py`  |
|  +2.9% |   +27 | 97.8% → 97.7% | 931 → 958 | `Context.invoke`                  | `core.py`        |
|  +2.9% |   +27 | 97.8% → 97.7% | 931 → 958 | `Command.invoke`                  | `core.py`        |
|  +2.9% |   +27 | 97.8% → 97.7% | 931 → 958 | `Command.main`                    | `core.py`        |
|  +2.9% |   +27 | 97.8% → 97.7% | 931 → 958 | `Command.__call__`                | `core.py`        |
|  +2.9% |   +27 | 97.8% → 97.7% | 931 → 958 | `patched_main`                    | `__init__.py`    |
|  +2.9% |   +27 | 97.8% → 97.7% | 931 → 958 | `<module>`                        | `__main__.py`    |
|  +2.9% |   +27 | 97.8% → 97.7% | 931 → 958 | `_run_module_code`                | `<frozen runpy>` |
|  +2.8% |   +26 | 97.7% → 97.5% | 930 → 956 | `format_file_contents`            | `__init__.py`    |
|  +2.8% |   +26 | 97.7% → 97.5% | 930 → 956 | `format_file_in_place`            | `__init__.py`    |
|  +2.8% |   +26 | 97.8% → 97.6% | 931 → 957 | `reformat_one`                    | `__init__.py`    |
|  +4.0% |   +20 | 52.8% → 53.3% | 503 → 523 | `Driver.parse_tokens`             | `driver.py`      |
|  +4.0% |   +20 | 52.8% → 53.3% | 503 → 523 | `Driver.parse_string`             | `driver.py`      |

##### Ours

| Change | Delta |             % |   Samples | Function                          | Location        |
| -----: | ----: | ------------: | --------: | --------------------------------- | --------------- |
|  +9.0% |   +41 | 47.9% → 50.7% | 456 → 497 | `check_stability_and_equivalence` | `__init__.py`   |
|  +8.6% |   +33 | 40.2% → 42.4% | 383 → 416 | `assert_stable`                   | `__init__.py`   |
|  +2.9% |   +27 | 97.8% → 97.7% | 931 → 958 | `main`                            | `__init__.py`   |
|  +2.9% |   +27 | 97.8% → 97.7% | 931 → 958 | `pass_context.<locals>.new_func`  | `decorators.py` |
|  +2.9% |   +27 | 97.8% → 97.7% | 931 → 958 | `Context.invoke`                  | `core.py`       |
|  +2.9% |   +27 | 97.8% → 97.7% | 931 → 958 | `Command.invoke`                  | `core.py`       |
|  +2.9% |   +27 | 97.8% → 97.7% | 931 → 958 | `Command.main`                    | `core.py`       |
|  +2.9% |   +27 | 97.8% → 97.7% | 931 → 958 | `Command.__call__`                | `core.py`       |
|  +2.9% |   +27 | 97.8% → 97.7% | 931 → 958 | `patched_main`                    | `__init__.py`   |
|  +2.9% |   +27 | 97.8% → 97.7% | 931 → 958 | `<module>`                        | `__main__.py`   |
|  +2.8% |   +26 | 97.7% → 97.5% | 930 → 956 | `format_file_contents`            | `__init__.py`   |
|  +2.8% |   +26 | 97.7% → 97.5% | 930 → 956 | `format_file_in_place`            | `__init__.py`   |
|  +2.8% |   +26 | 97.8% → 97.6% | 931 → 957 | `reformat_one`                    | `__init__.py`   |
|  +4.0% |   +20 | 52.8% → 53.3% | 503 → 523 | `Driver.parse_tokens`             | `driver.py`     |
|  +4.0% |   +20 | 52.8% → 53.3% | 503 → 523 | `Driver.parse_string`             | `driver.py`     |
|  +4.0% |   +20 | 52.8% → 53.3% | 503 → 523 | `lib2to3_parse`                   | `parsing.py`    |
|  +2.1% |   +18 | 89.4% → 88.6% | 851 → 869 | `_format_str_once`                | `__init__.py`   |
|  +5.0% |   +12 | 25.1% → 25.6% | 239 → 251 | `Parser.addtoken`                 | `parse.py`      |
| +61.1% |   +11 |   1.9% → 3.0% |   18 → 29 | `Parser.shift`                    | `parse.py`      |
| +11.6% |    +8 |   7.2% → 7.8% |   69 → 77 | `assert_equivalent`               | `__init__.py`   |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
|  +4.1% |   +12 | 30.5% → 30.8% | 290 → 302 | `(garbage collector)` | `<unknown>` |

##### Standard library

| Change | Delta |             % |   Samples | Function                             | Location                                 |
| -----: | ----: | ------------: | --------: | ------------------------------------ | ---------------------------------------- |
|  +3.0% |   +29 |        100.0% | 952 → 981 | `_run_code`                          | `<frozen runpy>`                         |
|  +3.0% |   +29 |        100.0% | 952 → 981 | `run_module`                         | `<frozen runpy>`                         |
|  +3.0% |   +29 |        100.0% | 952 → 981 | `_run_module_as_main`                | `<frozen runpy>`                         |
|  +2.9% |   +27 | 97.8% → 97.7% | 931 → 958 | `_run_module_code`                   | `<frozen runpy>`                         |
|  +9.5% |    +2 |   2.2% → 2.3% |   21 → 23 | `_LoaderBasics.exec_module`          | `<frozen importlib._bootstrap_external>` |
|  +9.5% |    +2 |   2.2% → 2.3% |   21 → 23 | `_load_unlocked`                     | `<frozen importlib._bootstrap>`          |
|  +9.5% |    +2 |   2.2% → 2.3% |   21 → 23 | `_find_and_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|  +9.5% |    +2 |   2.2% → 2.3% |   21 → 23 | `_find_and_load`                     | `<frozen importlib._bootstrap>`          |
|  +9.5% |    +2 |   2.2% → 2.3% |   21 → 23 | `_call_with_frames_removed`          | `<frozen importlib._bootstrap>`          |
|  +9.5% |    +2 |   2.2% → 2.3% |   21 → 23 | `_get_module_details`                | `<frozen runpy>`                         |
|    new |    +2 |   0.0% → 0.2% |     0 → 2 | `_HierarchicalLockManager.__enter__` | `<frozen importlib._bootstrap>`          |
|    new |    +2 |   0.0% → 0.2% |     0 → 2 | `PathFinder._get_spec`               | `<frozen importlib._bootstrap_external>` |
|    new |    +2 |   0.0% → 0.2% |     0 → 2 | `PathFinder.find_spec`               | `<frozen importlib._bootstrap_external>` |
|    new |    +2 |   0.0% → 0.2% |     0 → 2 | `_find_spec`                         | `<frozen importlib._bootstrap>`          |
| +16.7% |    +1 |   0.6% → 0.7% |     6 → 7 | `_handle_fromlist`                   | `<frozen importlib._bootstrap>`          |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `_verbose_message`                   | `<frozen importlib._bootstrap>`          |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `FileFinder.find_spec`               | `<frozen importlib._bootstrap_external>` |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `_ModuleLock.acquire`                | `<frozen importlib._bootstrap>`          |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                             | Location                                 |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ---------------------------------------- |
|   -3.2% |   -15 | 49.8% → 46.8% | 474 → 459 | `format_str`                         | `__init__.py`                            |
|   -4.7% |    -8 | 17.9% → 16.5% | 170 → 162 | `LineGenerator.visit_stmt`           | `linegen.py`                             |
|   -4.7% |    -8 | 17.9% → 16.5% | 170 → 162 | `Visitor.visit`                      | `nodes.py`                               |
|   -4.7% |    -8 | 17.9% → 16.5% | 170 → 162 | `Visitor.visit_default`              | `nodes.py`                               |
|   -4.7% |    -8 | 17.9% → 16.5% | 170 → 162 | `LineGenerator.visit_default`        | `linegen.py`                             |
|   -7.6% |    -7 |   9.7% → 8.7% |   92 → 85 | `LineGenerator.visit_simple_stmt`    | `linegen.py`                             |
|  -17.5% |    -7 |   4.2% → 3.4% |   40 → 33 | `LineGenerator.visit_power`          | `linegen.py`                             |
|   -3.7% |    -6 | 17.2% → 16.1% | 164 → 158 | `LineGenerator.visit_suite`          | `linegen.py`                             |
|   -3.7% |    -6 | 16.9% → 15.8% | 161 → 155 | `LineGenerator.visit_funcdef`        | `linegen.py`                             |
|  -50.0% |    -4 |   0.8% → 0.4% |     8 → 4 | `whitespace`                         | `nodes.py`                               |
|  -42.9% |    -3 |   0.7% → 0.4% |     7 → 4 | `Line.__str__`                       | `lines.py`                               |
|  -12.0% |    -3 |   2.6% → 2.2% |   25 → 22 | `Line.append`                        | `lines.py`                               |
|   -3.4% |    -2 |   6.1% → 5.7% |   58 → 56 | `normalize_invisible_parens`         | `linegen.py`                             |
|  -13.3% |    -2 |   1.6% → 1.3% |   15 → 13 | `convert_one_fmt_off_pair`           | `comments.py`                            |
|  -13.3% |    -2 |   1.6% → 1.3% |   15 → 13 | `normalize_fmt_off`                  | `comments.py`                            |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `Parser.classify`                    | `parse.py`                               |
|  -14.3% |    -2 |   1.5% → 1.2% |   14 → 12 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`                               |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `FileLoader.get_data`                | `<frozen importlib._bootstrap_external>` |
|  -20.0% |    -2 |   1.1% → 0.8% |    10 → 8 | `SourceLoader.get_code`              | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -2 |   0.4% → 0.2% |     4 → 2 | `compile`                            | `_compiler.py`                           |

##### Ours

|  Change | Delta |             % |   Samples | Function                             | Location       |
| ------: | ----: | ------------: | --------: | ------------------------------------ | -------------- |
|   -3.2% |   -15 | 49.8% → 46.8% | 474 → 459 | `format_str`                         | `__init__.py`  |
|   -4.7% |    -8 | 17.9% → 16.5% | 170 → 162 | `LineGenerator.visit_stmt`           | `linegen.py`   |
|   -4.7% |    -8 | 17.9% → 16.5% | 170 → 162 | `Visitor.visit`                      | `nodes.py`     |
|   -4.7% |    -8 | 17.9% → 16.5% | 170 → 162 | `Visitor.visit_default`              | `nodes.py`     |
|   -4.7% |    -8 | 17.9% → 16.5% | 170 → 162 | `LineGenerator.visit_default`        | `linegen.py`   |
|   -7.6% |    -7 |   9.7% → 8.7% |   92 → 85 | `LineGenerator.visit_simple_stmt`    | `linegen.py`   |
|  -17.5% |    -7 |   4.2% → 3.4% |   40 → 33 | `LineGenerator.visit_power`          | `linegen.py`   |
|   -3.7% |    -6 | 17.2% → 16.1% | 164 → 158 | `LineGenerator.visit_suite`          | `linegen.py`   |
|   -3.7% |    -6 | 16.9% → 15.8% | 161 → 155 | `LineGenerator.visit_funcdef`        | `linegen.py`   |
|  -50.0% |    -4 |   0.8% → 0.4% |     8 → 4 | `whitespace`                         | `nodes.py`     |
|  -42.9% |    -3 |   0.7% → 0.4% |     7 → 4 | `Line.__str__`                       | `lines.py`     |
|  -12.0% |    -3 |   2.6% → 2.2% |   25 → 22 | `Line.append`                        | `lines.py`     |
|   -3.4% |    -2 |   6.1% → 5.7% |   58 → 56 | `normalize_invisible_parens`         | `linegen.py`   |
|  -13.3% |    -2 |   1.6% → 1.3% |   15 → 13 | `convert_one_fmt_off_pair`           | `comments.py`  |
|  -13.3% |    -2 |   1.6% → 1.3% |   15 → 13 | `normalize_fmt_off`                  | `comments.py`  |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `Parser.classify`                    | `parse.py`     |
|  -14.3% |    -2 |   1.5% → 1.2% |   14 → 12 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`     |
|  -50.0% |    -2 |   0.4% → 0.2% |     4 → 2 | `compile`                            | `_compiler.py` |
|  -50.0% |    -2 |   0.4% → 0.2% |     4 → 2 | `_compile`                           | `__init__.py`  |
|  -50.0% |    -2 |   0.4% → 0.2% |     4 → 2 | `compile`                            | `__init__.py`  |

##### Standard library

|  Change | Delta |           % | Samples | Function                            | Location                                 |
| ------: | ----: | ----------: | ------: | ----------------------------------- | ---------------------------------------- |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `FileLoader.get_data`               | `<frozen importlib._bootstrap_external>` |
|  -20.0% |    -2 | 1.1% → 0.8% |  10 → 8 | `SourceLoader.get_code`             | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `module_from_spec`                  | `<frozen importlib._bootstrap>`          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ABCMeta.__new__`                   | `<frozen abc>`                           |

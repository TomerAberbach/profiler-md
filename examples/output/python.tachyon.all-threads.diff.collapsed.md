# Sampling profile diff

Collected 981 samples → 975 samples (-6 samples, -0.6%).

| Category          | Change | Delta |             % |   Samples |
| ----------------- | -----: | ----: | ------------: | --------: |
| Ours              |  -1.7% |   -12 | 70.5% → 69.7% | 692 → 680 |
| Garbage collector |  +1.8% |    +5 | 28.1% → 28.8% | 276 → 281 |
| Standard library  |  +7.7% |    +1 |   1.3% → 1.4% |   13 → 14 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                          | Location      |
| ------: | ----: | ------------: | --------: | --------------------------------- | ------------- |
|  +71.4% |   +10 |   1.4% → 2.5% |   14 → 24 | `_stringify_ast`                  | `parsing.py`  |
|  +44.4% |    +8 |   1.8% → 2.7% |   18 → 26 | `Visitor.visit`                   | `nodes.py`    |
| +140.0% |    +7 |   0.5% → 1.2% |    5 → 12 | `Visitor.visit_default`           | `nodes.py`    |
|  +41.2% |    +7 |   1.7% → 2.5% |   17 → 24 | `Parser.shift`                    | `parse.py`    |
| +600.0% |    +6 |   0.1% → 0.7% |     1 → 7 | `Parser.classify`                 | `parse.py`    |
|   +1.8% |    +5 | 28.1% → 28.8% | 276 → 281 | `(garbage collector)`             | `<unknown>`   |
| +125.0% |    +5 |   0.4% → 0.9% |     4 → 9 | `LineGenerator.visit_power`       | `linegen.py`  |
|   +4.4% |    +4 |   9.3% → 9.7% |   91 → 95 | `get_features_used`               | `__init__.py` |
|  +17.4% |    +4 |   2.3% → 2.8% |   23 → 27 | `Parser.pop`                      | `parse.py`    |
|  +80.0% |    +4 |   0.5% → 0.9% |     5 → 9 | `LineGenerator.visit_simple_stmt` | `linegen.py`  |
|  +42.9% |    +3 |   0.7% → 1.0% |    7 → 10 | `Parser.push`                     | `parse.py`    |
|  +75.0% |    +3 |   0.4% → 0.7% |     4 → 7 | `LinesBlock.all_lines`            | `lines.py`    |
| +150.0% |    +3 |   0.2% → 0.5% |     2 → 5 | `whitespace`                      | `nodes.py`    |
|  +50.0% |    +2 |   0.4% → 0.6% |     4 → 6 | `format_str`                      | `__init__.py` |
|  +20.0% |    +2 |   1.0% → 1.2% |   10 → 12 | `Parser.addtoken`                 | `parse.py`    |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `Base.__new__`                    | `pytree.py`   |
|  +40.0% |    +2 |   0.5% → 0.7% |     5 → 7 | `_stringify_ast_with_new_parent`  | `parsing.py`  |
|  +50.0% |    +2 |   0.4% → 0.6% |     4 → 6 | `wrap_in_parentheses`             | `nodes.py`    |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `hug_power_op`                    | `trans.py`    |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `Line.__str__`                    | `lines.py`    |

##### Ours

|  Change | Delta |           % | Samples | Function                          | Location      |
| ------: | ----: | ----------: | ------: | --------------------------------- | ------------- |
|  +71.4% |   +10 | 1.4% → 2.5% | 14 → 24 | `_stringify_ast`                  | `parsing.py`  |
|  +44.4% |    +8 | 1.8% → 2.7% | 18 → 26 | `Visitor.visit`                   | `nodes.py`    |
| +140.0% |    +7 | 0.5% → 1.2% |  5 → 12 | `Visitor.visit_default`           | `nodes.py`    |
|  +41.2% |    +7 | 1.7% → 2.5% | 17 → 24 | `Parser.shift`                    | `parse.py`    |
| +600.0% |    +6 | 0.1% → 0.7% |   1 → 7 | `Parser.classify`                 | `parse.py`    |
| +125.0% |    +5 | 0.4% → 0.9% |   4 → 9 | `LineGenerator.visit_power`       | `linegen.py`  |
|   +4.4% |    +4 | 9.3% → 9.7% | 91 → 95 | `get_features_used`               | `__init__.py` |
|  +17.4% |    +4 | 2.3% → 2.8% | 23 → 27 | `Parser.pop`                      | `parse.py`    |
|  +80.0% |    +4 | 0.5% → 0.9% |   5 → 9 | `LineGenerator.visit_simple_stmt` | `linegen.py`  |
|  +42.9% |    +3 | 0.7% → 1.0% |  7 → 10 | `Parser.push`                     | `parse.py`    |
|  +75.0% |    +3 | 0.4% → 0.7% |   4 → 7 | `LinesBlock.all_lines`            | `lines.py`    |
| +150.0% |    +3 | 0.2% → 0.5% |   2 → 5 | `whitespace`                      | `nodes.py`    |
|  +50.0% |    +2 | 0.4% → 0.6% |   4 → 6 | `format_str`                      | `__init__.py` |
|  +20.0% |    +2 | 1.0% → 1.2% | 10 → 12 | `Parser.addtoken`                 | `parse.py`    |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `Base.__new__`                    | `pytree.py`   |
|  +40.0% |    +2 | 0.5% → 0.7% |   5 → 7 | `_stringify_ast_with_new_parent`  | `parsing.py`  |
|  +50.0% |    +2 | 0.4% → 0.6% |   4 → 6 | `wrap_in_parentheses`             | `nodes.py`    |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `hug_power_op`                    | `trans.py`    |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `Line.__str__`                    | `lines.py`    |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `list_comments`                   | `comments.py` |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
|  +1.8% |    +5 | 28.1% → 28.8% | 276 → 281 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                             | Location                                 |
| ------: | ----: | ----------: | ------: | ------------------------------------ | ---------------------------------------- |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `_call_with_frames_removed`          | `<frozen importlib._bootstrap>`          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `_HierarchicalLockManager.__enter__` | `<frozen importlib._bootstrap>`          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `FileFinder._fill_cache`             | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `ABCMeta.__new__`                    | `<frozen abc>`                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `FileLoader.get_data`                | `<frozen importlib._bootstrap_external>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Ours

|  Change | Delta |             % |   Samples | Function                          | Location         |
| ------: | ----: | ------------: | --------: | --------------------------------- | ---------------- |
|  -21.8% |   -37 | 17.3% → 13.6% | 170 → 133 | `Parser._addtoken`                | `parse.py`       |
|  -23.8% |   -10 |   4.3% → 3.3% |   42 → 32 | `generate_tokens`                 | `tokenize.py`    |
|  -23.1% |    -6 |   2.7% → 2.1% |   26 → 20 | `Line.append`                     | `lines.py`       |
|  -10.4% |    -5 |   4.9% → 4.4% |   48 → 43 | `Driver.parse_tokens`             | `driver.py`      |
|  -55.6% |    -5 |   0.9% → 0.4% |     9 → 4 | `_format_str_once`                | `__init__.py`    |
|   -9.1% |    -4 |   4.5% → 4.1% |   44 → 40 | `parse`                           | `ast.py`         |
|  -33.3% |    -4 |   1.2% → 0.8% |    12 → 8 | `assert_equivalent`               | `__init__.py`    |
|  -50.0% |    -4 |   0.8% → 0.4% |     8 → 4 | `line_to_string`                  | `lines.py`       |
|  -60.0% |    -3 |   0.5% → 0.2% |     5 → 2 | `TokenProxy.__next__`             | `driver.py`      |
|  -50.0% |    -2 |   0.4% → 0.2% |     4 → 2 | `LineGenerator.visit_stmt`        | `linegen.py`     |
|  -22.2% |    -2 |   0.9% → 0.7% |     9 → 7 | `convert_one_fmt_off_pair`        | `comments.py`    |
|  -66.7% |    -2 |   0.3% → 0.1% |     3 → 1 | `generate_comments`               | `comments.py`    |
|  -33.3% |    -2 |   0.6% → 0.4% |     6 → 4 | `_FuncBuilder.add_fns_to_class`   | `dataclasses.py` |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `_compile`                        | `_compiler.py`   |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `Leaf.prefix`                     | `pytree.py`      |
|  -50.0% |    -1 |   0.2% → 0.1% |     2 → 1 | `assert_stable`                   | `__init__.py`    |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `max_delimiter_priority_in_atom`  | `brackets.py`    |
|  -12.5% |    -1 |   0.8% → 0.7% |     8 → 7 | `LineGenerator.visit_default`     | `linegen.py`     |
|  -50.0% |    -1 |   0.2% → 0.1% |     2 → 1 | `__create_fn__.<locals>.__init__` | `<string>`       |
|  -50.0% |    -1 |   0.2% → 0.1% |     2 → 1 | `run_transformer`                 | `linegen.py`     |

##### Standard library

|  Change | Delta |           % | Samples | Function                    | Location                                 |
| ------: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
|  -11.1% |    -1 | 0.9% → 0.8% |   9 → 8 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_find_spec`                | `<frozen importlib._bootstrap>`          |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                          | Location      |
| ------: | ----: | ------------: | --------: | --------------------------------- | ------------- |
|  +48.5% |   +32 |  6.7% → 10.1% |   66 → 98 | `LineGenerator.visit_simple_stmt` | `linegen.py`  |
|   +5.8% |   +27 | 47.5% → 50.6% | 466 → 493 | `format_str`                      | `__init__.py` |
|  +17.1% |   +25 | 14.9% → 17.5% | 146 → 171 | `Visitor.visit`                   | `nodes.py`    |
|  +17.1% |   +25 | 14.9% → 17.5% | 146 → 171 | `LineGenerator.visit_default`     | `linegen.py`  |
|  +16.4% |   +24 | 14.9% → 17.4% | 146 → 170 | `Visitor.visit_default`           | `nodes.py`    |
|  +16.9% |   +24 | 14.5% → 17.0% | 142 → 166 | `LineGenerator.visit_suite`       | `linegen.py`  |
|  +15.2% |   +22 | 14.8% → 17.1% | 145 → 167 | `LineGenerator.visit_stmt`        | `linegen.py`  |
|  +15.8% |   +22 | 14.2% → 16.5% | 139 → 161 | `LineGenerator.visit_funcdef`     | `linegen.py`  |
|  +46.2% |   +12 |   2.7% → 3.9% |   26 → 38 | `Parser.shift`                    | `parse.py`    |
|  +63.2% |   +12 |   1.9% → 3.2% |   19 → 31 | `_stringify_ast`                  | `parsing.py`  |
|  +28.1% |    +9 |   3.3% → 4.2% |   32 → 41 | `LineGenerator.visit_power`       | `linegen.py`  |
|  +47.4% |    +9 |   1.9% → 2.9% |   19 → 28 | `_stringify_ast_with_new_parent`  | `parsing.py`  |
|   +7.8% |    +6 |   7.8% → 8.5% |   77 → 83 | `assert_equivalent`               | `__init__.py` |
|  +46.2% |    +6 |   1.3% → 1.9% |   13 → 19 | `convert`                         | `pytree.py`   |
| +600.0% |    +6 |   0.1% → 0.7% |     1 → 7 | `Parser.classify`                 | `parse.py`    |
|   +1.8% |    +5 | 28.1% → 28.8% | 276 → 281 | `(garbage collector)`             | `<unknown>`   |
|  +11.1% |    +5 |   4.6% → 5.1% |   45 → 50 | `normalize_invisible_parens`      | `linegen.py`  |
|   +5.5% |    +5 |   9.3% → 9.8% |   91 → 96 | `get_features_used`               | `__init__.py` |
|   +5.5% |    +5 |   9.3% → 9.8% |   91 → 96 | `detect_target_versions`          | `__init__.py` |
|  +19.2% |    +5 |   2.7% → 3.2% |   26 → 31 | `Parser.pop`                      | `parse.py`    |

##### Ours

|  Change | Delta |             % |   Samples | Function                          | Location      |
| ------: | ----: | ------------: | --------: | --------------------------------- | ------------- |
|  +48.5% |   +32 |  6.7% → 10.1% |   66 → 98 | `LineGenerator.visit_simple_stmt` | `linegen.py`  |
|   +5.8% |   +27 | 47.5% → 50.6% | 466 → 493 | `format_str`                      | `__init__.py` |
|  +17.1% |   +25 | 14.9% → 17.5% | 146 → 171 | `Visitor.visit`                   | `nodes.py`    |
|  +17.1% |   +25 | 14.9% → 17.5% | 146 → 171 | `LineGenerator.visit_default`     | `linegen.py`  |
|  +16.4% |   +24 | 14.9% → 17.4% | 146 → 170 | `Visitor.visit_default`           | `nodes.py`    |
|  +16.9% |   +24 | 14.5% → 17.0% | 142 → 166 | `LineGenerator.visit_suite`       | `linegen.py`  |
|  +15.2% |   +22 | 14.8% → 17.1% | 145 → 167 | `LineGenerator.visit_stmt`        | `linegen.py`  |
|  +15.8% |   +22 | 14.2% → 16.5% | 139 → 161 | `LineGenerator.visit_funcdef`     | `linegen.py`  |
|  +46.2% |   +12 |   2.7% → 3.9% |   26 → 38 | `Parser.shift`                    | `parse.py`    |
|  +63.2% |   +12 |   1.9% → 3.2% |   19 → 31 | `_stringify_ast`                  | `parsing.py`  |
|  +28.1% |    +9 |   3.3% → 4.2% |   32 → 41 | `LineGenerator.visit_power`       | `linegen.py`  |
|  +47.4% |    +9 |   1.9% → 2.9% |   19 → 28 | `_stringify_ast_with_new_parent`  | `parsing.py`  |
|   +7.8% |    +6 |   7.8% → 8.5% |   77 → 83 | `assert_equivalent`               | `__init__.py` |
|  +46.2% |    +6 |   1.3% → 1.9% |   13 → 19 | `convert`                         | `pytree.py`   |
| +600.0% |    +6 |   0.1% → 0.7% |     1 → 7 | `Parser.classify`                 | `parse.py`    |
|  +11.1% |    +5 |   4.6% → 5.1% |   45 → 50 | `normalize_invisible_parens`      | `linegen.py`  |
|   +5.5% |    +5 |   9.3% → 9.8% |   91 → 96 | `get_features_used`               | `__init__.py` |
|   +5.5% |    +5 |   9.3% → 9.8% |   91 → 96 | `detect_target_versions`          | `__init__.py` |
|  +19.2% |    +5 |   2.7% → 3.2% |   26 → 31 | `Parser.pop`                      | `parse.py`    |
| +166.7% |    +5 |   0.3% → 0.8% |     3 → 8 | `Base.__new__`                    | `pytree.py`   |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
|  +1.8% |    +5 | 28.1% → 28.8% | 276 → 281 | `(garbage collector)` | `<unknown>` |

##### Standard library

| Change | Delta |           % | Samples | Function                             | Location                                 |
| -----: | ----: | ----------: | ------: | ------------------------------------ | ---------------------------------------- |
|  +3.8% |    +1 | 2.7% → 2.8% | 26 → 27 | `_LoaderBasics.exec_module`          | `<frozen importlib._bootstrap_external>` |
|  +3.8% |    +1 | 2.7% → 2.8% | 26 → 27 | `_load_unlocked`                     | `<frozen importlib._bootstrap>`          |
|  +3.8% |    +1 | 2.7% → 2.8% | 26 → 27 | `_find_and_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|  +3.8% |    +1 | 2.7% → 2.8% | 26 → 27 | `_find_and_load`                     | `<frozen importlib._bootstrap>`          |
|  +3.8% |    +1 | 2.7% → 2.8% | 26 → 27 | `_call_with_frames_removed`          | `<frozen importlib._bootstrap>`          |
|  +3.8% |    +1 | 2.7% → 2.8% | 26 → 27 | `_get_module_details`                | `<frozen runpy>`                         |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `_HierarchicalLockManager.__enter__` | `<frozen importlib._bootstrap>`          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `ExtensionFileLoader.exec_module`    | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `FileFinder._fill_cache`             | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `FileFinder.find_spec`               | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `PathFinder._get_spec`               | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `PathFinder.find_spec`               | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `ABCMeta.__new__`                    | `<frozen abc>`                           |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `FileLoader.get_data`                | `<frozen importlib._bootstrap_external>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Ours

| Change | Delta |             % |   Samples | Function                          | Location        |
| -----: | ----: | ------------: | --------: | --------------------------------- | --------------- |
|  -9.9% |   -40 | 41.3% → 37.4% | 405 → 365 | `assert_stable`                   | `__init__.py`   |
|  -7.1% |   -38 | 54.2% → 50.7% | 532 → 494 | `Driver.parse_tokens`             | `driver.py`     |
|  -7.1% |   -38 | 54.2% → 50.7% | 532 → 494 | `Driver.parse_string`             | `driver.py`     |
|  -7.1% |   -38 | 54.2% → 50.7% | 532 → 494 | `lib2to3_parse`                   | `parsing.py`    |
|  -7.0% |   -34 | 49.5% → 46.4% | 486 → 452 | `check_stability_and_equivalence` | `__init__.py`   |
|  -6.3% |   -17 | 27.3% → 25.7% | 268 → 251 | `Parser.addtoken`                 | `parse.py`      |
|  -1.6% |   -14 | 88.2% → 87.3% | 865 → 851 | `_format_str_once`                | `__init__.py`   |
|  -5.9% |   -14 | 24.4% → 23.1% | 239 → 225 | `Parser._addtoken`                | `parse.py`      |
| -23.4% |   -11 |   4.8% → 3.7% |   47 → 36 | `generate_tokens`                 | `tokenize.py`   |
|  -0.7% |    -7 | 97.0% → 96.9% | 952 → 945 | `format_file_contents`            | `__init__.py`   |
|  -0.7% |    -7 | 97.2% → 97.1% | 954 → 947 | `format_file_in_place`            | `__init__.py`   |
|  -0.7% |    -7 | 97.2% → 97.1% | 954 → 947 | `reformat_one`                    | `__init__.py`   |
|  -0.7% |    -7 | 97.2% → 97.1% | 954 → 947 | `main`                            | `__init__.py`   |
|  -0.7% |    -7 | 97.2% → 97.1% | 954 → 947 | `pass_context.<locals>.new_func`  | `decorators.py` |
|  -0.7% |    -7 | 97.2% → 97.1% | 954 → 947 | `Context.invoke`                  | `core.py`       |
|  -0.7% |    -7 | 97.2% → 97.1% | 954 → 947 | `Command.invoke`                  | `core.py`       |
|  -0.7% |    -7 | 97.3% → 97.2% | 955 → 948 | `Command.main`                    | `core.py`       |
|  -0.7% |    -7 | 97.3% → 97.2% | 955 → 948 | `Command.__call__`                | `core.py`       |
|  -0.7% |    -7 | 97.3% → 97.2% | 955 → 948 | `patched_main`                    | `__init__.py`   |
|  -0.7% |    -7 | 97.3% → 97.2% | 955 → 948 | `<module>`                        | `__main__.py`   |

##### Standard library

| Change | Delta |             % |   Samples | Function                | Location                                 |
| -----: | ----: | ------------: | --------: | ----------------------- | ---------------------------------------- |
|  -0.7% |    -7 | 97.3% → 97.2% | 955 → 948 | `_run_module_code`      | `<frozen runpy>`                         |
|  -0.6% |    -6 |        100.0% | 981 → 975 | `_run_code`             | `<frozen runpy>`                         |
|  -0.6% |    -6 |        100.0% | 981 → 975 | `run_module`            | `<frozen runpy>`                         |
|  -0.6% |    -6 |        100.0% | 981 → 975 | `_run_module_as_main`   | `<frozen runpy>`                         |
| -11.1% |    -1 |   0.9% → 0.8% |     9 → 8 | `_compile_bytecode`     | `<frozen importlib._bootstrap_external>` |
| -10.0% |    -1 |   1.0% → 0.9% |    10 → 9 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |
| -14.3% |    -1 |   0.7% → 0.6% |     7 → 6 | `_handle_fromlist`      | `<frozen importlib._bootstrap>`          |

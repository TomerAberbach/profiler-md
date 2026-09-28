# Sampling profile

Collected 1,156 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 61.2% |     708 |
| Garbage collector | 37.7% |     436 |
| Standard library  |  1.0% |      12 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                      | Location      |
| ----: | ------: | ----------------------------- | ------------- |
| 37.7% |     436 | `(garbage collector)`         | `<unknown>`   |
| 15.3% |     177 | `Parser._addtoken`            | `parse.py`    |
|  8.7% |     101 | `get_features_used`           | `__init__.py` |
|  5.5% |      64 | `Driver.parse_tokens`         | `driver.py`   |
|  4.2% |      48 | `parse`                       | `ast.py`      |
|  3.6% |      42 | `generate_tokens`             | `tokenize.py` |
|  2.2% |      25 | `Visitor.visit`               | `nodes.py`    |
|  1.1% |      13 | `Parser.pop`                  | `parse.py`    |
|  1.1% |      13 | `Line.append`                 | `lines.py`    |
|  1.0% |      12 | `_format_str_once`            | `__init__.py` |
|  1.0% |      12 | `convert_one_fmt_off_pair`    | `comments.py` |
|  1.0% |      11 | `assert_equivalent`           | `__init__.py` |
|  1.0% |      11 | `Parser.shift`                | `parse.py`    |
|  1.0% |      11 | `_stringify_ast`              | `parsing.py`  |
|  0.9% |      10 | `LineGenerator.visit_default` | `linegen.py`  |
|  0.8% |       9 | `Parser.addtoken`             | `parse.py`    |
|  0.8% |       9 | `normalize_invisible_parens`  | `linegen.py`  |
|  0.7% |       8 | `LinesBlock.all_lines`        | `lines.py`    |
|  0.6% |       7 | `Parser.push`                 | `parse.py`    |
|  0.5% |       6 | `format_str`                  | `__init__.py` |

#### Categories

##### Ours

|     % | Samples | Function                      | Location      |
| ----: | ------: | ----------------------------- | ------------- |
| 15.3% |     177 | `Parser._addtoken`            | `parse.py`    |
|  8.7% |     101 | `get_features_used`           | `__init__.py` |
|  5.5% |      64 | `Driver.parse_tokens`         | `driver.py`   |
|  4.2% |      48 | `parse`                       | `ast.py`      |
|  3.6% |      42 | `generate_tokens`             | `tokenize.py` |
|  2.2% |      25 | `Visitor.visit`               | `nodes.py`    |
|  1.1% |      13 | `Parser.pop`                  | `parse.py`    |
|  1.1% |      13 | `Line.append`                 | `lines.py`    |
|  1.0% |      12 | `_format_str_once`            | `__init__.py` |
|  1.0% |      12 | `convert_one_fmt_off_pair`    | `comments.py` |
|  1.0% |      11 | `assert_equivalent`           | `__init__.py` |
|  1.0% |      11 | `Parser.shift`                | `parse.py`    |
|  1.0% |      11 | `_stringify_ast`              | `parsing.py`  |
|  0.9% |      10 | `LineGenerator.visit_default` | `linegen.py`  |
|  0.8% |       9 | `Parser.addtoken`             | `parse.py`    |
|  0.8% |       9 | `normalize_invisible_parens`  | `linegen.py`  |
|  0.7% |       8 | `LinesBlock.all_lines`        | `lines.py`    |
|  0.6% |       7 | `Parser.push`                 | `parse.py`    |
|  0.5% |       6 | `format_str`                  | `__init__.py` |
|  0.4% |       5 | `assert_stable`               | `__init__.py` |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 37.7% |     436 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                    | Location                                 |
| ---: | ------: | --------------------------- | ---------------------------------------- |
| 0.5% |       6 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
| 0.3% |       3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| 0.2% |       2 | `FileFinder.find_spec`      | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `FileLoader.get_data`       | `<frozen importlib._bootstrap_external>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 22.6% |      40 | `parse.py:316` |
| 17.5% |      31 | `parse.py:299` |
| 12.4% |      22 | `parse.py:293` |
| 10.7% |      19 | `parse.py:286` |
|  7.3% |      13 | `parse.py:281` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 36.6% |      37 | `__init__.py:1314` |
| 14.9% |      15 | `__init__.py:1419` |
|  9.9% |      10 | `__init__.py:1403` |
|  5.9% |       6 | `__init__.py:1415` |
|  5.0% |       5 | `__init__.py:1324` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 67.2% |      43 | `driver.py:162` |
| 17.2% |      11 | `driver.py:128` |
|  6.3% |       4 | `driver.py:172` |
|  3.1% |       2 | `driver.py:151` |
|  3.1% |       2 | `driver.py:161` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      48 | `ast.py:46` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 38.1% |      16 | `tokenize.py:864` |
| 23.8% |      10 | `tokenize.py:613` |
|  7.1% |       3 | `tokenize.py:693` |
|  4.8% |       2 | `tokenize.py:623` |
|  4.8% |       2 | `tokenize.py:896` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 56.0% |      14 | `nodes.py:174` |
| 28.0% |       7 | `nodes.py:172` |
| 12.0% |       3 | `nodes.py:152` |
|  4.0% |       1 | `nodes.py:170` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 38.5% |       5 | `parse.py:392` |
| 15.4% |       2 | `parse.py:391` |
| 15.4% |       2 | `parse.py:394` |
|  7.7% |       1 | `parse.py:395` |
|  7.7% |       1 | `parse.py:396` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location      |
| ----: | ------: | ------------- |
| 69.2% |       9 | `lines.py:84` |
|  7.7% |       1 | `lines.py:85` |
|  7.7% |       1 | `lines.py:91` |
|  7.7% |       1 | `lines.py:65` |
|  7.7% |       1 | `lines.py:78` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 66.7% |       8 | `__init__.py:1247` |
| 16.7% |       2 | `__init__.py:1248` |
|  8.3% |       1 | `__init__.py:1250` |
|  8.3% |       1 | `__init__.py:1253` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 66.7% |       8 | `comments.py:184` |
| 33.3% |       4 | `comments.py:186` |

##### `assert_equivalent` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 72.7% |       8 | `__init__.py:1532` |
| 27.3% |       3 | `__init__.py:1533` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 72.7% |       8 | `parse.py:369` |
|  9.1% |       1 | `parse.py:371` |
|  9.1% |       1 | `parse.py:370` |
|  9.1% |       1 | `parse.py:363` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 54.5% |       6 | `parsing.py:222` |
| 18.2% |       2 | `parsing.py:225` |
|  9.1% |       1 | `parsing.py:241` |
|  9.1% |       1 | `parsing.py:248` |
|  9.1% |       1 | `parsing.py:184` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 70.0% |       7 | `linegen.py:158` |
| 20.0% |       2 | `linegen.py:157` |
| 10.0% |       1 | `linegen.py:134` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Location       |
| -----: | ------: | -------------- |
| 100.0% |       9 | `parse.py:240` |

##### `normalize_invisible_parens` (`linegen.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 77.8% |       7 | `linegen.py:1448` |
| 11.1% |       1 | `linegen.py:1394` |
| 11.1% |       1 | `linegen.py:1355` |

##### `LinesBlock.all_lines` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 87.5% |       7 | `lines.py:528` |
| 12.5% |       1 | `lines.py:529` |

##### `Parser.push` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 71.4% |       5 | `parse.py:384` |
| 28.6% |       2 | `parse.py:382` |

##### `format_str` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 50.0% |       3 | `__init__.py:1204` |
| 50.0% |       3 | `__init__.py:1211` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       6 | `<frozen importlib._bootstrap_external>:500` |

##### `assert_stable` (`__init__.py`)

|      % | Samples | Location           |
| -----: | ------: | ------------------ |
| 100.0% |       5 | `__init__.py:1557` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       3 | `<frozen importlib._bootstrap>:549` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Location                                      |
| ----: | ------: | --------------------------------------------- |
| 50.0% |       1 | `<frozen importlib._bootstrap_external>:1379` |
| 50.0% |       1 | `<frozen importlib._bootstrap_external>:1394` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:923` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 67.0% |     292 | `Parser._addtoken`                | `parse.py`  |
| 14.2% |      62 | `Line.clone`                      | `lines.py`  |
|  2.5% |      11 | `__create_fn__.<locals>.__init__` | `<string>`  |
|  2.3% |      10 | `Base.__new__`                    | `pytree.py` |
|  1.8% |       8 | `Node.__init__`                   | `pytree.py` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                             | Location      |
| ----: | ------: | ---------------------------------- | ------------- |
| 94.9% |     168 | `Parser.addtoken`                  | `parse.py`    |
|  3.4% |       6 | `TokenProxy.__next__`              | `driver.py`   |
|  0.6% |       1 | `Driver._partially_consume_prefix` | `driver.py`   |
|  0.6% |       1 | `Driver.parse_tokens`              | `driver.py`   |
|  0.6% |       1 | `Logger.debug`                     | `__init__.py` |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |     101 | `detect_target_versions` | `__init__.py` |

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      64 | `Driver.parse_string` | `driver.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      48 | `_parse_single_version` | `parsing.py` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 73.8% |      31 | `TokenProxy.__next__` | `driver.py` |
| 23.8% |      10 | `Parser.addtoken`     | `parse.py`  |
|  2.4% |       1 | `Driver.parse_tokens` | `driver.py` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                     | Location     |
| ----: | ------: | -------------------------- | ------------ |
| 52.0% |      13 | `Visitor.visit_default`    | `nodes.py`   |
| 48.0% |      12 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      13 | `Parser._addtoken` | `parse.py` |

##### `Line.append` (`lines.py`)

|     % | Samples | Caller                                  | Location     |
| ----: | ------: | --------------------------------------- | ------------ |
| 69.2% |       9 | `LineGenerator.visit_default`           | `linegen.py` |
| 23.1% |       3 | `bracket_split_build_line`              | `linegen.py` |
|  7.7% |       1 | `_maybe_split_omitting_optional_parens` | `linegen.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Caller          | Location      |
| ----: | ------: | --------------- | ------------- |
| 83.3% |      10 | `format_str`    | `__init__.py` |
| 16.7% |       2 | `assert_stable` | `__init__.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|      % | Samples | Caller              | Location      |
| -----: | ------: | ------------------- | ------------- |
| 100.0% |      12 | `normalize_fmt_off` | `comments.py` |

##### `assert_equivalent` (`__init__.py`)

|      % | Samples | Caller                            | Location      |
| -----: | ------: | --------------------------------- | ------------- |
| 100.0% |      11 | `check_stability_and_equivalence` | `__init__.py` |

##### `Parser.shift` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      11 | `Parser._addtoken` | `parse.py` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Caller                           | Location      |
| ----: | ------: | -------------------------------- | ------------- |
| 81.8% |       9 | `_stringify_ast_with_new_parent` | `parsing.py`  |
| 18.2% |       2 | `assert_equivalent`              | `__init__.py` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Caller                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 90.0% |       9 | `Visitor.visit`                   | `nodes.py`   |
| 10.0% |       1 | `LineGenerator.visit_simple_stmt` | `linegen.py` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       9 | `Driver.parse_tokens` | `driver.py` |

##### `normalize_invisible_parens` (`linegen.py`)

|      % | Samples | Caller                     | Location     |
| -----: | ------: | -------------------------- | ------------ |
| 100.0% |       9 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `LinesBlock.all_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |       8 | `_format_str_once` | `__init__.py` |

##### `Parser.push` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |       7 | `Parser._addtoken` | `parse.py` |

##### `format_str` (`__init__.py`)

|      % | Samples | Caller                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |       6 | `format_file_contents` | `__init__.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       6 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `assert_stable` (`__init__.py`)

|      % | Samples | Caller                            | Location      |
| -----: | ------: | --------------------------------- | ------------- |
| 100.0% |       5 | `check_stability_and_equivalence` | `__init__.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % | Samples | Caller                              | Location                                 |
| ----: | ------: | ----------------------------------- | ---------------------------------------- |
| 66.7% |       2 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
| 33.3% |       1 | `ExtensionFileLoader.exec_module`   | `<frozen importlib._bootstrap_external>` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       2 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       1 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                          | Location         |
| -----: | ------: | --------------------------------- | ---------------- |
| 100.0% |   1,156 | `_run_code`                       | `<frozen runpy>` |
| 100.0% |   1,156 | `run_module`                      | `<frozen runpy>` |
| 100.0% |   1,156 | `_run_module_as_main`             | `<frozen runpy>` |
|  98.0% |   1,133 | `format_file_contents`            | `__init__.py`    |
|  98.0% |   1,133 | `format_file_in_place`            | `__init__.py`    |
|  98.0% |   1,133 | `reformat_one`                    | `__init__.py`    |
|  98.0% |   1,133 | `main`                            | `__init__.py`    |
|  98.0% |   1,133 | `pass_context.<locals>.new_func`  | `decorators.py`  |
|  98.0% |   1,133 | `Context.invoke`                  | `core.py`        |
|  98.0% |   1,133 | `Command.invoke`                  | `core.py`        |
|  98.0% |   1,133 | `Command.main`                    | `core.py`        |
|  98.0% |   1,133 | `Command.__call__`                | `core.py`        |
|  98.0% |   1,133 | `patched_main`                    | `__init__.py`    |
|  98.0% |   1,133 | `<module>`                        | `__main__.py`    |
|  98.0% |   1,133 | `_run_module_code`                | `<frozen runpy>` |
|  89.8% |   1,038 | `_format_str_once`                | `__init__.py`    |
|  56.8% |     657 | `Driver.parse_tokens`             | `driver.py`      |
|  56.8% |     657 | `Driver.parse_string`             | `driver.py`      |
|  56.8% |     657 | `lib2to3_parse`                   | `parsing.py`     |
|  49.6% |     573 | `check_stability_and_equivalence` | `__init__.py`    |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 98.0% |   1,133 | `format_file_contents`            | `__init__.py`   |
| 98.0% |   1,133 | `format_file_in_place`            | `__init__.py`   |
| 98.0% |   1,133 | `reformat_one`                    | `__init__.py`   |
| 98.0% |   1,133 | `main`                            | `__init__.py`   |
| 98.0% |   1,133 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 98.0% |   1,133 | `Context.invoke`                  | `core.py`       |
| 98.0% |   1,133 | `Command.invoke`                  | `core.py`       |
| 98.0% |   1,133 | `Command.main`                    | `core.py`       |
| 98.0% |   1,133 | `Command.__call__`                | `core.py`       |
| 98.0% |   1,133 | `patched_main`                    | `__init__.py`   |
| 98.0% |   1,133 | `<module>`                        | `__main__.py`   |
| 89.8% |   1,038 | `_format_str_once`                | `__init__.py`   |
| 56.8% |     657 | `Driver.parse_tokens`             | `driver.py`     |
| 56.8% |     657 | `Driver.parse_string`             | `driver.py`     |
| 56.8% |     657 | `lib2to3_parse`                   | `parsing.py`    |
| 49.6% |     573 | `check_stability_and_equivalence` | `__init__.py`   |
| 48.4% |     560 | `format_str`                      | `__init__.py`   |
| 46.5% |     537 | `Parser.addtoken`                 | `parse.py`      |
| 45.5% |     526 | `Parser._addtoken`                | `parse.py`      |
| 42.3% |     489 | `assert_stable`                   | `__init__.py`   |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 37.7% |     436 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                            | Location                                 |
| -----: | ------: | ----------------------------------- | ---------------------------------------- |
| 100.0% |   1,156 | `_run_code`                         | `<frozen runpy>`                         |
| 100.0% |   1,156 | `run_module`                        | `<frozen runpy>`                         |
| 100.0% |   1,156 | `_run_module_as_main`               | `<frozen runpy>`                         |
|  98.0% |   1,133 | `_run_module_code`                  | `<frozen runpy>`                         |
|   2.0% |      23 | `_LoaderBasics.exec_module`         | `<frozen importlib._bootstrap_external>` |
|   2.0% |      23 | `_load_unlocked`                    | `<frozen importlib._bootstrap>`          |
|   2.0% |      23 | `_find_and_load_unlocked`           | `<frozen importlib._bootstrap>`          |
|   2.0% |      23 | `_find_and_load`                    | `<frozen importlib._bootstrap>`          |
|   2.0% |      23 | `_call_with_frames_removed`         | `<frozen importlib._bootstrap>`          |
|   2.0% |      23 | `_get_module_details`               | `<frozen runpy>`                         |
|   0.7% |       8 | `SourceLoader.get_code`             | `<frozen importlib._bootstrap_external>` |
|   0.6% |       7 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
|   0.4% |       5 | `_handle_fromlist`                  | `<frozen importlib._bootstrap>`          |
|   0.2% |       2 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
|   0.2% |       2 | `module_from_spec`                  | `<frozen importlib._bootstrap>`          |
|   0.2% |       2 | `FileFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
|   0.2% |       2 | `PathFinder._get_spec`              | `<frozen importlib._bootstrap_external>` |
|   0.2% |       2 | `PathFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
|   0.2% |       2 | `_find_spec`                        | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `ABCMeta.__new__`                   | `<frozen abc>`                           |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |   1,156 | `run_module` | `<frozen runpy>` |
|  98.0% |   1,133 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 98.0% |   1,133 | `_run_module_code`    | `<frozen runpy>` |
|  2.0% |      23 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,156 | `_run_code` | `<frozen runpy>` |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 50.6% |     573 | `check_stability_and_equivalence` | `__init__.py` |
| 49.4% |     560 | `format_str`                      | `__init__.py` |

##### `format_file_in_place` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |   1,133 | `format_file_contents` | `__init__.py` |

##### `reformat_one` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |   1,133 | `format_file_in_place` | `__init__.py` |

##### `main` (`__init__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |   1,133 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |   1,133 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |   1,133 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |   1,133 | `Context.invoke` | `core.py` |

##### `Command.main` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |   1,133 | `Command.invoke` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |   1,133 | `Command.main` | `core.py` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee             | Location  |
| -----: | ------: | ------------------ | --------- |
| 100.0% |   1,133 | `Command.__call__` | `core.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |   1,133 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,133 | `_run_code` | `<frozen runpy>` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                               | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 63.3% |     657 | `lib2to3_parse`                      | `parsing.py`  |
| 11.3% |     117 | `Visitor.visit`                      | `nodes.py`    |
| 10.9% |     113 | `transform_line`                     | `linegen.py`  |
|  9.7% |     101 | `detect_target_versions`             | `__init__.py` |
|  1.3% |      14 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 81.7% |     537 | `Parser.addtoken`                  | `parse.py`  |
|  6.8% |      45 | `TokenProxy.__next__`              | `driver.py` |
|  1.1% |       7 | `(garbage collector)`              | `<unknown>` |
|  0.2% |       1 | `Driver._partially_consume_prefix` | `driver.py` |
|  0.2% |       1 | `Parser._addtoken`                 | `parse.py`  |

##### `Driver.parse_string` (`driver.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     657 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     657 | `Driver.parse_string` | `driver.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 85.3% |     489 | `assert_stable`     | `__init__.py` |
| 13.8% |      79 | `assert_equivalent` | `__init__.py` |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 98.9% |     554 | `_format_str_once` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 96.3% |     517 | `Parser._addtoken` | `parse.py`    |
|  1.9% |      10 | `generate_tokens`  | `tokenize.py` |
|  0.2% |       1 | `Parser.classify`  | `parse.py`    |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 55.5% |     292 | `(garbage collector)` | `<unknown>` |
|  4.6% |      24 | `Parser.shift`        | `parse.py`  |
|  4.6% |      24 | `Parser.pop`          | `parse.py`  |
|  1.5% |       8 | `Parser.push`         | `parse.py`  |
|  0.2% |       1 | `convert`             | `pytree.py` |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.0% |     484 | `_format_str_once` | `__init__.py` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      23 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  34.8% |       8 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |      23 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   8.7% |       2 | `module_from_spec`                | `<frozen importlib._bootstrap>`          |
|   4.3% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |      23 | `_load_unlocked` | `<frozen importlib._bootstrap>` |
|   8.7% |       2 | `_find_spec`     | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |      23 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |      23 | `<module>`       | `__init__.py`                   |
|  26.1% |       6 | `<module>`       | `files.py`                      |
|  21.7% |       5 | `_find_and_load` | `<frozen importlib._bootstrap>` |
|  17.4% |       4 | `<module>`       | `cache.py`                      |
|  13.0% |       3 | `<module>`       | `core.py`                       |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |      23 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |      23 | `_get_module_details` | `<frozen runpy>`                |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                | Location                                 |
| ----: | ------: | --------------------- | ---------------------------------------- |
| 87.5% |       7 | `_compile_bytecode`   | `<frozen importlib._bootstrap_external>` |
| 12.5% |       1 | `FileLoader.get_data` | `<frozen importlib._bootstrap_external>` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 14.3% |       1 | `(garbage collector)` | `<unknown>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       5 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `ExtensionFileLoader.create_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `module_from_spec` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                              | Location                                 |
| -----: | ------: | ----------------------------------- | ---------------------------------------- |
| 100.0% |       2 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |

##### `PathFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       2 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `PathFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       2 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       2 | `PathFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `ABCMeta.__new__` (`<frozen abc>`)

|      % | Samples | Callee                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `_generic_init_subclass` | `typing.py` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `_run_code` ← `_run_module_as_main`

|     % | Samples | Call stack                                                                                                                                                                                                                                                            |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.4% |     282 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` |
| 10.6% |     123 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                |
|  6.0% |      69 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                    |
|  5.4% |      62 | `(garbage collector)` ← `Line.clone` (`lines.py`) ← `hug_power_op` (`trans.py`) ← `_hugging_power_ops_line_to_string` (`linegen.py`) ← `transform_line` ← `run_transformer` ← `transform_line` ← `_format_str_once` (`__init__.py`) ← `format_str`                    |
|  4.2% |      48 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                   |
|  4.1% |      47 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                      |
|  3.9% |      45 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                         |
|  2.8% |      32 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                             |
|  1.9% |      22 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                          |
|  1.5% |      17 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                               |
|  1.0% |      11 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                               |
|  1.0% |      11 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                 |
|  0.9% |      10 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                        |
|  0.9% |      10 | `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                     |
|  0.8% |       9 | `convert_one_fmt_off_pair` (`comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                  |
|  0.8% |       9 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                   |
|  0.7% |       8 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                               |
|  0.6% |       7 | `(garbage collector)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                              |
|  0.6% |       7 | `LinesBlock.all_lines` (`lines.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                               |
|  0.6% |       7 | `generate_tokens` (`tokenize.py`) ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                 |

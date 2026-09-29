# Sampling profile

Collected 933 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 66.7% |     622 |
| Garbage collector | 31.0% |     289 |
| Standard library  |  2.4% |      22 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                             | Location                                 |
| ----: | ------: | ------------------------------------ | ---------------------------------------- |
| 31.0% |     289 | `(garbage collector)`                | `<unknown>`                              |
| 13.0% |     121 | `Parser._addtoken`                   | `parse.py`                               |
|  9.4% |      88 | `get_features_used`                  | `__init__.py`                            |
|  4.2% |      39 | `parse`                              | `ast.py`                                 |
|  4.2% |      39 | `generate_tokens`                    | `tokenize.py`                            |
|  3.8% |      35 | `Driver.parse_tokens`                | `driver.py`                              |
|  2.0% |      19 | `Parser.pop`                         | `parse.py`                               |
|  1.9% |      18 | `Parser.shift`                       | `parse.py`                               |
|  1.7% |      16 | `Visitor.visit`                      | `nodes.py`                               |
|  1.7% |      16 | `Line.append`                        | `lines.py`                               |
|  1.6% |      15 | `_stringify_ast`                     | `parsing.py`                             |
|  1.3% |      12 | `Parser.push`                        | `parse.py`                               |
|  1.2% |      11 | `Parser.addtoken`                    | `parse.py`                               |
|  1.2% |      11 | `convert_one_fmt_off_pair`           | `comments.py`                            |
|  1.2% |      11 | `LineGenerator.visit_default`        | `linegen.py`                             |
|  1.0% |       9 | `assert_equivalent`                  | `__init__.py`                            |
|  1.0% |       9 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`                               |
|  1.0% |       9 | `LineGenerator.visit_simple_stmt`    | `linegen.py`                             |
|  0.9% |       8 | `_call_with_frames_removed`          | `<frozen importlib._bootstrap>`          |
|  0.9% |       8 | `_compile_bytecode`                  | `<frozen importlib._bootstrap_external>` |

#### Categories

##### Ours

|     % | Samples | Function                             | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 13.0% |     121 | `Parser._addtoken`                   | `parse.py`    |
|  9.4% |      88 | `get_features_used`                  | `__init__.py` |
|  4.2% |      39 | `parse`                              | `ast.py`      |
|  4.2% |      39 | `generate_tokens`                    | `tokenize.py` |
|  3.8% |      35 | `Driver.parse_tokens`                | `driver.py`   |
|  2.0% |      19 | `Parser.pop`                         | `parse.py`    |
|  1.9% |      18 | `Parser.shift`                       | `parse.py`    |
|  1.7% |      16 | `Visitor.visit`                      | `nodes.py`    |
|  1.7% |      16 | `Line.append`                        | `lines.py`    |
|  1.6% |      15 | `_stringify_ast`                     | `parsing.py`  |
|  1.3% |      12 | `Parser.push`                        | `parse.py`    |
|  1.2% |      11 | `Parser.addtoken`                    | `parse.py`    |
|  1.2% |      11 | `convert_one_fmt_off_pair`           | `comments.py` |
|  1.2% |      11 | `LineGenerator.visit_default`        | `linegen.py`  |
|  1.0% |       9 | `assert_equivalent`                  | `__init__.py` |
|  1.0% |       9 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |
|  1.0% |       9 | `LineGenerator.visit_simple_stmt`    | `linegen.py`  |
|  0.8% |       7 | `LineGenerator.visit_power`          | `linegen.py`  |
|  0.8% |       7 | `wrap_in_parentheses`                | `nodes.py`    |
|  0.8% |       7 | `normalize_invisible_parens`         | `linegen.py`  |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 31.0% |     289 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                    | Location                                 |
| ---: | ------: | --------------------------- | ---------------------------------------- |
| 0.9% |       8 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| 0.9% |       8 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
| 0.4% |       4 | `FileLoader.get_data`       | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `ABCMeta.__new__`           | `<frozen abc>`                           |
| 0.1% |       1 | `_path_stat`                | `<frozen importlib._bootstrap_external>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 19.8% |      24 | `parse.py:328` |
| 14.9% |      18 | `parse.py:311` |
| 11.6% |      14 | `parse.py:305` |
|  8.3% |      10 | `parse.py:298` |
|  6.6% |       8 | `parse.py:314` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 22.7% |      20 | `__init__.py:1424` |
| 21.6% |      19 | `__init__.py:1440` |
| 20.5% |      18 | `__init__.py:1335` |
|  6.8% |       6 | `__init__.py:1436` |
|  4.5% |       4 | `__init__.py:1430` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      39 | `ast.py:46` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 35.9% |      14 | `tokenize.py:875` |
| 25.6% |      10 | `tokenize.py:624` |
|  7.7% |       3 | `tokenize.py:858` |
|  5.1% |       2 | `tokenize.py:973` |
|  2.6% |       1 | `tokenize.py:704` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 68.6% |      24 | `driver.py:162` |
| 25.7% |       9 | `driver.py:128` |
|  2.9% |       1 | `driver.py:161` |
|  2.9% |       1 | `driver.py:151` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 52.6% |      10 | `parse.py:404` |
| 21.1% |       4 | `parse.py:406` |
| 15.8% |       3 | `parse.py:408` |
|  5.3% |       1 | `parse.py:400` |
|  5.3% |       1 | `parse.py:403` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 72.2% |      13 | `parse.py:381` |
| 16.7% |       3 | `parse.py:379` |
| 11.1% |       2 | `parse.py:383` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 43.8% |       7 | `nodes.py:183` |
| 37.5% |       6 | `nodes.py:185` |
| 18.8% |       3 | `nodes.py:163` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location      |
| ----: | ------: | ------------- |
| 56.3% |       9 | `lines.py:95` |
| 43.8% |       7 | `lines.py:89` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 53.3% |       8 | `parsing.py:214` |
| 40.0% |       6 | `parsing.py:217` |
|  6.7% |       1 | `parsing.py:185` |

##### `Parser.push` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 33.3% |       4 | `parse.py:395` |
| 25.0% |       3 | `parse.py:394` |
| 25.0% |       3 | `parse.py:396` |
|  8.3% |       1 | `parse.py:386` |
|  8.3% |       1 | `parse.py:393` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 90.9% |      10 | `parse.py:252` |
|  9.1% |       1 | `parse.py:246` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 54.5% |       6 | `comments.py:184` |
| 45.5% |       5 | `comments.py:186` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 81.8% |       9 | `linegen.py:158` |
| 18.2% |       2 | `linegen.py:134` |

##### `assert_equivalent` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 66.7% |       6 | `__init__.py:1546` |
| 22.2% |       2 | `__init__.py:1547` |
| 11.1% |       1 | `__init__.py:1548` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 88.9% |       8 | `lines.py:571` |
| 11.1% |       1 | `lines.py:567` |

##### `LineGenerator.visit_simple_stmt` (`linegen.py`)

|      % | Samples | Location         |
| -----: | ------: | ---------------- |
| 100.0% |       9 | `linegen.py:317` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       8 | `<frozen importlib._bootstrap>:549` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       8 | `<frozen importlib._bootstrap_external>:500` |

##### `LineGenerator.visit_power` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 85.7% |       6 | `linegen.py:363` |
| 14.3% |       1 | `linegen.py:361` |

##### `wrap_in_parentheses` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 42.9% |       3 | `nodes.py:947` |
| 14.3% |       1 | `nodes.py:950` |
| 14.3% |       1 | `nodes.py:949` |
| 14.3% |       1 | `nodes.py:943` |
| 14.3% |       1 | `nodes.py:948` |

##### `normalize_invisible_parens` (`linegen.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 71.4% |       5 | `linegen.py:1432` |
| 14.3% |       1 | `linegen.py:1386` |
| 14.3% |       1 | `linegen.py:1401` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       4 | `<frozen importlib._bootstrap_external>:923` |

##### `ABCMeta.__new__` (`<frozen abc>`)

|      % | Samples | Location           |
| -----: | ------: | ------------------ |
| 100.0% |       1 | `<frozen abc>:106` |

##### `_path_stat` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:152` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                  | Location     |
| ----: | ------: | ----------------------- | ------------ |
| 58.8% |     170 | `convert`               | `pytree.py`  |
| 13.1% |      38 | `transform_line`        | `linegen.py` |
|  3.1% |       9 | `Parser._addtoken`      | `parse.py`   |
|  2.8% |       8 | `Visitor.visit_default` | `nodes.py`   |
|  2.4% |       7 | `Base.__new__`          | `pytree.py`  |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.2% |     120 | `Parser.addtoken`     | `parse.py`  |
|  0.8% |       1 | `Driver.parse_tokens` | `driver.py` |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |      88 | `detect_target_versions` | `__init__.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      39 | `_parse_single_version` | `parsing.py` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 51.3% |      20 | `Parser.addtoken`     | `parse.py`  |
| 48.7% |      19 | `TokenProxy.__next__` | `driver.py` |

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      35 | `Driver.parse_string` | `driver.py` |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      19 | `Parser._addtoken` | `parse.py` |

##### `Parser.shift` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      18 | `Parser._addtoken` | `parse.py` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                     | Location     |
| ----: | ------: | -------------------------- | ------------ |
| 87.5% |      14 | `Visitor.visit_default`    | `nodes.py`   |
| 12.5% |       2 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `Line.append` (`lines.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 93.8% |      15 | `LineGenerator.visit_default` | `linegen.py` |
|  6.3% |       1 | `bracket_split_build_line`    | `linegen.py` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Caller                           | Location      |
| ----: | ------: | -------------------------------- | ------------- |
| 93.3% |      14 | `_stringify_ast_with_new_parent` | `parsing.py`  |
|  6.7% |       1 | `assert_equivalent`              | `__init__.py` |

##### `Parser.push` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      12 | `Parser._addtoken` | `parse.py` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      11 | `Driver.parse_tokens` | `driver.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|      % | Samples | Caller              | Location      |
| -----: | ------: | ------------------- | ------------- |
| 100.0% |      11 | `normalize_fmt_off` | `comments.py` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Caller                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 63.6% |       7 | `Visitor.visit`                   | `nodes.py`   |
| 27.3% |       3 | `LineGenerator.visit_simple_stmt` | `linegen.py` |
|  9.1% |       1 | `LineGenerator.visit_power`       | `linegen.py` |

##### `assert_equivalent` (`__init__.py`)

|      % | Samples | Caller                            | Location      |
| -----: | ------: | --------------------------------- | ------------- |
| 100.0% |       9 | `check_stability_and_equivalence` | `__init__.py` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |       9 | `_format_str_once` | `__init__.py` |

##### `LineGenerator.visit_simple_stmt` (`linegen.py`)

|      % | Samples | Caller          | Location   |
| -----: | ------: | --------------- | ---------- |
| 100.0% |       9 | `Visitor.visit` | `nodes.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % | Samples | Caller                            | Location                                 |
| ----: | ------: | --------------------------------- | ---------------------------------------- |
| 87.5% |       7 | `SourceLoader.source_to_code`     | `<frozen importlib._bootstrap_external>` |
| 12.5% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       8 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `LineGenerator.visit_power` (`linegen.py`)

|      % | Samples | Caller          | Location   |
| -----: | ------: | --------------- | ---------- |
| 100.0% |       7 | `Visitor.visit` | `nodes.py` |

##### `wrap_in_parentheses` (`nodes.py`)

|      % | Samples | Caller                       | Location     |
| -----: | ------: | ---------------------------- | ------------ |
| 100.0% |       7 | `normalize_invisible_parens` | `linegen.py` |

##### `normalize_invisible_parens` (`linegen.py`)

|      % | Samples | Caller                     | Location     |
| -----: | ------: | -------------------------- | ------------ |
| 100.0% |       7 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       4 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `ABCMeta.__new__` (`<frozen abc>`)

|      % | Samples | Caller     | Location   |
| -----: | ------: | ---------- | ---------- |
| 100.0% |       1 | `<module>` | `types.py` |

##### `_path_stat` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller               | Location                                 |
| -----: | ------: | -------------------- | ---------------------------------------- |
| 100.0% |       1 | `_path_is_mode_type` | `<frozen importlib._bootstrap_external>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                          | Location         |
| -----: | ------: | --------------------------------- | ---------------- |
| 100.0% |     933 | `_run_code`                       | `<frozen runpy>` |
| 100.0% |     933 | `run_module`                      | `<frozen runpy>` |
| 100.0% |     933 | `_run_module_as_main`             | `<frozen runpy>` |
|  95.7% |     893 | `Command.main`                    | `core.py`        |
|  95.7% |     893 | `Command.__call__`                | `core.py`        |
|  95.7% |     893 | `patched_main`                    | `__init__.py`    |
|  95.7% |     893 | `<module>`                        | `__main__.py`    |
|  95.7% |     893 | `_run_module_code`                | `<frozen runpy>` |
|  95.6% |     892 | `format_file_in_place`            | `__init__.py`    |
|  95.6% |     892 | `reformat_one`                    | `__init__.py`    |
|  95.6% |     892 | `main`                            | `__init__.py`    |
|  95.6% |     892 | `pass_context.<locals>.new_func`  | `decorators.py`  |
|  95.6% |     892 | `Context.invoke`                  | `core.py`        |
|  95.6% |     892 | `Command.invoke`                  | `core.py`        |
|  95.5% |     891 | `format_file_contents`            | `__init__.py`    |
|  86.7% |     809 | `_format_str_once`                | `__init__.py`    |
|  49.8% |     465 | `Driver.parse_string`             | `driver.py`      |
|  49.8% |     465 | `lib2to3_parse`                   | `parsing.py`     |
|  49.8% |     465 | `check_stability_and_equivalence` | `__init__.py`    |
|  49.6% |     463 | `Driver.parse_tokens`             | `driver.py`      |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 95.7% |     893 | `Command.main`                    | `core.py`       |
| 95.7% |     893 | `Command.__call__`                | `core.py`       |
| 95.7% |     893 | `patched_main`                    | `__init__.py`   |
| 95.7% |     893 | `<module>`                        | `__main__.py`   |
| 95.6% |     892 | `format_file_in_place`            | `__init__.py`   |
| 95.6% |     892 | `reformat_one`                    | `__init__.py`   |
| 95.6% |     892 | `main`                            | `__init__.py`   |
| 95.6% |     892 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 95.6% |     892 | `Context.invoke`                  | `core.py`       |
| 95.6% |     892 | `Command.invoke`                  | `core.py`       |
| 95.5% |     891 | `format_file_contents`            | `__init__.py`   |
| 86.7% |     809 | `_format_str_once`                | `__init__.py`   |
| 49.8% |     465 | `Driver.parse_string`             | `driver.py`     |
| 49.8% |     465 | `lib2to3_parse`                   | `parsing.py`    |
| 49.8% |     465 | `check_stability_and_equivalence` | `__init__.py`   |
| 49.6% |     463 | `Driver.parse_tokens`             | `driver.py`     |
| 45.7% |     426 | `format_str`                      | `__init__.py`   |
| 42.4% |     396 | `Parser.addtoken`                 | `parse.py`      |
| 41.7% |     389 | `assert_stable`                   | `__init__.py`   |
| 39.1% |     365 | `Parser._addtoken`                | `parse.py`      |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 31.0% |     289 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                          | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |     933 | `_run_code`                       | `<frozen runpy>`                         |
| 100.0% |     933 | `run_module`                      | `<frozen runpy>`                         |
| 100.0% |     933 | `_run_module_as_main`             | `<frozen runpy>`                         |
|  95.7% |     893 | `_run_module_code`                | `<frozen runpy>`                         |
|   4.3% |      40 | `_call_with_frames_removed`       | `<frozen importlib._bootstrap>`          |
|   4.3% |      40 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   4.3% |      40 | `_load_unlocked`                  | `<frozen importlib._bootstrap>`          |
|   4.3% |      40 | `_find_and_load_unlocked`         | `<frozen importlib._bootstrap>`          |
|   4.3% |      40 | `_find_and_load`                  | `<frozen importlib._bootstrap>`          |
|   4.3% |      40 | `_get_module_details`             | `<frozen runpy>`                         |
|   2.3% |      21 | `SourceLoader.get_code`           | `<frozen importlib._bootstrap_external>` |
|   1.1% |      10 | `_compile_bytecode`               | `<frozen importlib._bootstrap_external>` |
|   0.8% |       7 | `SourceLoader.source_to_code`     | `<frozen importlib._bootstrap_external>` |
|   0.8% |       7 | `_handle_fromlist`                | `<frozen importlib._bootstrap>`          |
|   0.4% |       4 | `FileLoader.get_data`             | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `ABCMeta.__new__`                 | `<frozen abc>`                           |
|   0.1% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `_path_stat`                      | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `_path_is_mode_type`              | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `_path_isfile`                    | `<frozen importlib._bootstrap_external>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |     933 | `run_module` | `<frozen runpy>` |
|  95.7% |     893 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 95.7% |     893 | `_run_module_code`    | `<frozen runpy>` |
|  4.3% |      40 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     933 | `_run_code` | `<frozen runpy>` |

##### `Command.main` (`core.py`)

|     % | Samples | Callee                 | Location  |
| ----: | ------: | ---------------------- | --------- |
| 99.9% |     892 | `Command.invoke`       | `core.py` |
|  0.1% |       1 | `Command.make_context` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |     893 | `Command.main` | `core.py` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee             | Location  |
| -----: | ------: | ------------------ | --------- |
| 100.0% |     893 | `Command.__call__` | `core.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     893 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     893 | `_run_code` | `<frozen runpy>` |

##### `format_file_in_place` (`__init__.py`)

|     % | Samples | Callee                 | Location      |
| ----: | ------: | ---------------------- | ------------- |
| 99.9% |     891 | `format_file_contents` | `__init__.py` |

##### `reformat_one` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |     892 | `format_file_in_place` | `__init__.py` |

##### `main` (`__init__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     892 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |     892 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |     892 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     892 | `Context.invoke` | `core.py` |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 52.2% |     465 | `check_stability_and_equivalence` | `__init__.py` |
| 47.8% |     426 | `format_str`                      | `__init__.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                               | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 57.5% |     465 | `lib2to3_parse`                      | `parsing.py`  |
| 16.8% |     136 | `Visitor.visit`                      | `nodes.py`    |
| 11.0% |      89 | `detect_target_versions`             | `__init__.py` |
|  9.8% |      79 | `transform_line`                     | `linegen.py`  |
|  1.9% |      15 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |

##### `Driver.parse_string` (`driver.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.6% |     463 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     465 | `Driver.parse_string` | `driver.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 83.7% |     389 | `assert_stable`     | `__init__.py` |
| 15.5% |      72 | `assert_equivalent` | `__init__.py` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 85.5% |     396 | `Parser.addtoken`                  | `parse.py`  |
|  5.0% |      23 | `TokenProxy.__next__`              | `driver.py` |
|  1.3% |       6 | `(garbage collector)`              | `<unknown>` |
|  0.4% |       2 | `Driver._partially_consume_prefix` | `driver.py` |
|  0.2% |       1 | `Parser._addtoken`                 | `parse.py`  |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.1% |     422 | `_format_str_once` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 91.9% |     364 | `Parser._addtoken` | `parse.py`    |
|  5.1% |      20 | `generate_tokens`  | `tokenize.py` |
|  0.3% |       1 | `Parser.classify`  | `parse.py`    |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.5% |     387 | `_format_str_once` | `__init__.py` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 52.6% |     192 | `Parser.shift`        | `parse.py`  |
|  8.5% |      31 | `Parser.pop`          | `parse.py`  |
|  3.3% |      12 | `Parser.push`         | `parse.py`  |
|  2.5% |       9 | `(garbage collector)` | `<unknown>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |      40 | `<module>`       | `__init__.py`                   |
|  22.5% |       9 | `<module>`       | `ranges.py`                     |
|  22.5% |       9 | `<module>`       | `nodes.py`                      |
|  22.5% |       9 | `<module>`       | `comments.py`                   |
|  20.0% |       8 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      40 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  52.5% |      21 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |      40 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   2.5% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |      40 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
|   5.0% |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |
|   2.5% |       1 | `_find_spec`                | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |      40 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |      40 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |      40 | `_get_module_details` | `<frozen runpy>`                |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                        | Location                                 |
| ----: | ------: | ----------------------------- | ---------------------------------------- |
| 47.6% |      10 | `_compile_bytecode`           | `<frozen importlib._bootstrap_external>` |
| 33.3% |       7 | `SourceLoader.source_to_code` | `<frozen importlib._bootstrap_external>` |
| 19.0% |       4 | `FileLoader.get_data`         | `<frozen importlib._bootstrap_external>` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 20.0% |       2 | `(garbage collector)` | `<unknown>` |

##### `SourceLoader.source_to_code` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       7 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       7 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `ExtensionFileLoader.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_path_is_mode_type` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee       | Location                                 |
| -----: | ------: | ------------ | ---------------------------------------- |
| 100.0% |       1 | `_path_stat` | `<frozen importlib._bootstrap_external>` |

##### `_path_isfile` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee               | Location                                 |
| -----: | ------: | -------------------- | ---------------------------------------- |
| 100.0% |       1 | `_path_is_mode_type` | `<frozen importlib._bootstrap_external>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>`) ← `_run_code` ← `_run_module_as_main`

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18.0% |     168 | `(garbage collector)` ← `convert` (`pytree.py`) ← `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                             |
|  7.8% |      73 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                       |
|  5.9% |      55 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  5.0% |      47 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                |
|  4.2% |      39 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  4.1% |      38 | `(garbage collector)` ← `transform_line` (`linegen.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.5% |      33 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.4% |      22 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.5% |      14 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                        |
|  1.4% |      13 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.3% |      12 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                      |
|  1.3% |      12 | `generate_tokens` (`tokenize.py`) ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                        |
|  1.1% |      10 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                 |
|  1.0% |       9 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.0% |       9 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                          |
|  0.9% |       8 | `generate_tokens` (`tokenize.py`) ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                 |
|  0.9% |       8 | `convert_one_fmt_off_pair` (`comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.9% |       8 | `EmptyLineTracker.maybe_empty_lines` (`lines.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.8% |       7 | `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `SourceLoader.source_to_code` (`<frozen importlib._bootstrap_external>`) ← `SourceLoader.get_code` ← `_LoaderBasics.exec_module` ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`ranges.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details` |
|  0.8% |       7 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                               |

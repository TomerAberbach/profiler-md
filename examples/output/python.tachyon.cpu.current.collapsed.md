# Sampling profile

Collected 909 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 67.9% |     617 |
| Garbage collector | 30.7% |     279 |
| Standard library  |  1.4% |      13 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                             | Location                                 |
| ----: | ------: | ------------------------------------ | ---------------------------------------- |
| 30.7% |     279 | `(garbage collector)`                | `<unknown>`                              |
| 15.5% |     141 | `Parser._addtoken`                   | `parse.py`                               |
| 10.9% |      99 | `get_features_used`                  | `__init__.py`                            |
|  4.3% |      39 | `Driver.parse_tokens`                | `driver.py`                              |
|  4.3% |      39 | `generate_tokens`                    | `tokenize.py`                            |
|  4.2% |      38 | `parse`                              | `ast.py`                                 |
|  2.8% |      25 | `Parser.pop`                         | `parse.py`                               |
|  2.0% |      18 | `Visitor.visit`                      | `nodes.py`                               |
|  1.7% |      15 | `Line.append`                        | `lines.py`                               |
|  1.5% |      14 | `_stringify_ast`                     | `parsing.py`                             |
|  1.4% |      13 | `LineGenerator.visit_default`        | `linegen.py`                             |
|  1.3% |      12 | `Parser.addtoken`                    | `parse.py`                               |
|  1.0% |       9 | `Parser.shift`                       | `parse.py`                               |
|  1.0% |       9 | `convert`                            | `pytree.py`                              |
|  1.0% |       9 | `normalize_invisible_parens`         | `linegen.py`                             |
|  0.9% |       8 | `_compile_bytecode`                  | `<frozen importlib._bootstrap_external>` |
|  0.8% |       7 | `assert_equivalent`                  | `__init__.py`                            |
|  0.8% |       7 | `convert_one_fmt_off_pair`           | `comments.py`                            |
|  0.8% |       7 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`                               |
|  0.8% |       7 | `line_to_string`                     | `lines.py`                               |

#### Categories

##### Ours

|     % | Samples | Function                             | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 15.5% |     141 | `Parser._addtoken`                   | `parse.py`    |
| 10.9% |      99 | `get_features_used`                  | `__init__.py` |
|  4.3% |      39 | `Driver.parse_tokens`                | `driver.py`   |
|  4.3% |      39 | `generate_tokens`                    | `tokenize.py` |
|  4.2% |      38 | `parse`                              | `ast.py`      |
|  2.8% |      25 | `Parser.pop`                         | `parse.py`    |
|  2.0% |      18 | `Visitor.visit`                      | `nodes.py`    |
|  1.7% |      15 | `Line.append`                        | `lines.py`    |
|  1.5% |      14 | `_stringify_ast`                     | `parsing.py`  |
|  1.4% |      13 | `LineGenerator.visit_default`        | `linegen.py`  |
|  1.3% |      12 | `Parser.addtoken`                    | `parse.py`    |
|  1.0% |       9 | `Parser.shift`                       | `parse.py`    |
|  1.0% |       9 | `convert`                            | `pytree.py`   |
|  1.0% |       9 | `normalize_invisible_parens`         | `linegen.py`  |
|  0.8% |       7 | `assert_equivalent`                  | `__init__.py` |
|  0.8% |       7 | `convert_one_fmt_off_pair`           | `comments.py` |
|  0.8% |       7 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |
|  0.8% |       7 | `line_to_string`                     | `lines.py`    |
|  0.7% |       6 | `Visitor.visit_default`              | `nodes.py`    |
|  0.7% |       6 | `LineGenerator.visit_power`          | `linegen.py`  |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 30.7% |     279 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                    | Location                                 |
| ---: | ------: | --------------------------- | ---------------------------------------- |
| 0.9% |       8 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
| 0.2% |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| 0.2% |       2 | `_path_stat`                | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 25.5% |      36 | `parse.py:328` |
| 12.8% |      18 | `parse.py:311` |
|  9.9% |      14 | `parse.py:305` |
|  7.8% |      11 | `parse.py:315` |
|  7.1% |      10 | `parse.py:293` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 18.2% |      18 | `__init__.py:1440` |
| 17.2% |      17 | `__init__.py:1335` |
| 17.2% |      17 | `__init__.py:1424` |
|  8.1% |       8 | `__init__.py:1436` |
|  6.1% |       6 | `__init__.py:1394` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 64.1% |      25 | `driver.py:162` |
| 33.3% |      13 | `driver.py:128` |
|  2.6% |       1 | `driver.py:172` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 30.8% |      12 | `tokenize.py:875` |
| 23.1% |       9 | `tokenize.py:624` |
| 12.8% |       5 | `tokenize.py:634` |
|  5.1% |       2 | `tokenize.py:973` |
|  5.1% |       2 | `tokenize.py:995` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      38 | `ast.py:46` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 40.0% |      10 | `parse.py:404` |
| 20.0% |       5 | `parse.py:408` |
| 16.0% |       4 | `parse.py:403` |
| 12.0% |       3 | `parse.py:407` |
|  8.0% |       2 | `parse.py:406` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 38.9% |       7 | `nodes.py:185` |
| 33.3% |       6 | `nodes.py:163` |
| 27.8% |       5 | `nodes.py:183` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location      |
| ----: | ------: | ------------- |
| 40.0% |       6 | `lines.py:95` |
| 40.0% |       6 | `lines.py:89` |
|  6.7% |       1 | `lines.py:91` |
|  6.7% |       1 | `lines.py:79` |
|  6.7% |       1 | `lines.py:97` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 35.7% |       5 | `parsing.py:214` |
| 21.4% |       3 | `parsing.py:217` |
| 14.3% |       2 | `parsing.py:244` |
|  7.1% |       1 | `parsing.py:187` |
|  7.1% |       1 | `parsing.py:197` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 69.2% |       9 | `linegen.py:158` |
| 15.4% |       2 | `linegen.py:157` |
|  7.7% |       1 | `linegen.py:138` |
|  7.7% |       1 | `linegen.py:134` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Location       |
| -----: | ------: | -------------- |
| 100.0% |      12 | `parse.py:252` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 88.9% |       8 | `parse.py:381` |
| 11.1% |       1 | `parse.py:384` |

##### `convert` (`pytree.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 55.6% |       5 | `pytree.py:503` |
| 33.3% |       3 | `pytree.py:501` |
| 11.1% |       1 | `pytree.py:499` |

##### `normalize_invisible_parens` (`linegen.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 66.7% |       6 | `linegen.py:1432` |
| 11.1% |       1 | `linegen.py:1431` |
| 11.1% |       1 | `linegen.py:1386` |
| 11.1% |       1 | `linegen.py:1437` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       8 | `<frozen importlib._bootstrap_external>:500` |

##### `assert_equivalent` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 57.1% |       4 | `__init__.py:1547` |
| 42.9% |       3 | `__init__.py:1546` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 57.1% |       4 | `comments.py:186` |
| 42.9% |       3 | `comments.py:184` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 57.1% |       4 | `lines.py:571` |
| 28.6% |       2 | `lines.py:584` |
| 14.3% |       1 | `lines.py:598` |

##### `line_to_string` (`lines.py`)

|      % | Samples | Location        |
| -----: | ------: | --------------- |
| 100.0% |       7 | `lines.py:1078` |

##### `Visitor.visit_default` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 66.7% |       4 | `nodes.py:191` |
| 33.3% |       2 | `nodes.py:187` |

##### `LineGenerator.visit_power` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 66.7% |       4 | `linegen.py:363` |
| 33.3% |       2 | `linegen.py:341` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       2 | `<frozen importlib._bootstrap>:549` |

##### `_path_stat` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       2 | `<frozen importlib._bootstrap_external>:152` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       1 | `<frozen importlib._bootstrap>:1298` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                  | Location      |
| ----: | ------: | ----------------------- | ------------- |
| 55.2% |     154 | `Driver.parse_tokens`   | `driver.py`   |
| 16.1% |      45 | `Visitor.visit_default` | `nodes.py`    |
|  3.2% |       9 | `Base.__new__`          | `pytree.py`   |
|  2.5% |       7 | `generate_comments`     | `comments.py` |
|  2.2% |       6 | `convert`               | `pytree.py`   |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                             | Location      |
| ----: | ------: | ---------------------------------- | ------------- |
| 89.4% |     126 | `Parser.addtoken`                  | `parse.py`    |
|  5.0% |       7 | `TokenProxy.__next__`              | `driver.py`   |
|  2.1% |       3 | `Driver._partially_consume_prefix` | `driver.py`   |
|  2.1% |       3 | `Logger.debug`                     | `__init__.py` |
|  1.4% |       2 | `Driver.parse_tokens`              | `driver.py`   |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |      99 | `detect_target_versions` | `__init__.py` |

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      39 | `Driver.parse_string` | `driver.py` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Caller                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 64.1% |      25 | `TokenProxy.__next__`      | `driver.py` |
| 33.3% |      13 | `Parser.addtoken`          | `parse.py`  |
|  2.6% |       1 | `ParserGenerator.gettoken` | `pgen.py`   |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      38 | `_parse_single_version` | `parsing.py` |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      25 | `Parser._addtoken` | `parse.py` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 72.2% |      13 | `Visitor.visit_default`       | `nodes.py`   |
| 22.2% |       4 | `LineGenerator.visit_stmt`    | `linegen.py` |
|  5.6% |       1 | `LineGenerator.visit_funcdef` | `linegen.py` |

##### `Line.append` (`lines.py`)

|      % | Samples | Caller                        | Location     |
| -----: | ------: | ----------------------------- | ------------ |
| 100.0% |      15 | `LineGenerator.visit_default` | `linegen.py` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Caller                           | Location      |
| ----: | ------: | -------------------------------- | ------------- |
| 85.7% |      12 | `_stringify_ast_with_new_parent` | `parsing.py`  |
| 14.3% |       2 | `assert_equivalent`              | `__init__.py` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Caller                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 69.2% |       9 | `Visitor.visit`                   | `nodes.py`   |
| 15.4% |       2 | `LineGenerator.visit_power`       | `linegen.py` |
|  7.7% |       1 | `LineGenerator.visit_simple_stmt` | `linegen.py` |
|  7.7% |       1 | `LineGenerator.visit_test`        | `linegen.py` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      12 | `Driver.parse_tokens` | `driver.py` |

##### `Parser.shift` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |       9 | `Parser._addtoken` | `parse.py` |

##### `convert` (`pytree.py`)

|     % | Samples | Caller         | Location   |
| ----: | ------: | -------------- | ---------- |
| 66.7% |       6 | `Parser.pop`   | `parse.py` |
| 33.3% |       3 | `Parser.shift` | `parse.py` |

##### `normalize_invisible_parens` (`linegen.py`)

|      % | Samples | Caller                     | Location     |
| -----: | ------: | -------------------------- | ------------ |
| 100.0% |       9 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       8 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `assert_equivalent` (`__init__.py`)

|      % | Samples | Caller                            | Location      |
| -----: | ------: | --------------------------------- | ------------- |
| 100.0% |       7 | `check_stability_and_equivalence` | `__init__.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|      % | Samples | Caller              | Location      |
| -----: | ------: | ------------------- | ------------- |
| 100.0% |       7 | `normalize_fmt_off` | `comments.py` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |       7 | `_format_str_once` | `__init__.py` |

##### `line_to_string` (`lines.py`)

|     % | Samples | Caller                              | Location     |
| ----: | ------: | ----------------------------------- | ------------ |
| 71.4% |       5 | `transform_line`                    | `linegen.py` |
| 28.6% |       2 | `_hugging_power_ops_line_to_string` | `linegen.py` |

##### `Visitor.visit_default` (`nodes.py`)

|      % | Samples | Caller                        | Location     |
| -----: | ------: | ----------------------------- | ------------ |
| 100.0% |       6 | `LineGenerator.visit_default` | `linegen.py` |

##### `LineGenerator.visit_power` (`linegen.py`)

|      % | Samples | Caller          | Location   |
| -----: | ------: | --------------- | ---------- |
| 100.0% |       6 | `Visitor.visit` | `nodes.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % | Samples | Caller                              | Location                                 |
| ----: | ------: | ----------------------------------- | ---------------------------------------- |
| 50.0% |       1 | `ExtensionFileLoader.exec_module`   | `<frozen importlib._bootstrap_external>` |
| 50.0% |       1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |

##### `_path_stat` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller               | Location                                 |
| -----: | ------: | -------------------- | ---------------------------------------- |
| 100.0% |       2 | `_path_is_mode_type` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                         | Location         |
| -----: | ------: | -------------------------------- | ---------------- |
| 100.0% |     909 | `_run_code`                      | `<frozen runpy>` |
| 100.0% |     909 | `run_module`                     | `<frozen runpy>` |
| 100.0% |     909 | `_run_module_as_main`            | `<frozen runpy>` |
|  96.0% |     873 | `format_file_contents`           | `__init__.py`    |
|  96.0% |     873 | `format_file_in_place`           | `__init__.py`    |
|  96.0% |     873 | `reformat_one`                   | `__init__.py`    |
|  96.0% |     873 | `main`                           | `__init__.py`    |
|  96.0% |     873 | `pass_context.<locals>.new_func` | `decorators.py`  |
|  96.0% |     873 | `Context.invoke`                 | `core.py`        |
|  96.0% |     873 | `Command.invoke`                 | `core.py`        |
|  96.0% |     873 | `Command.main`                   | `core.py`        |
|  96.0% |     873 | `Command.__call__`               | `core.py`        |
|  96.0% |     873 | `patched_main`                   | `__init__.py`    |
|  96.0% |     873 | `<module>`                       | `__main__.py`    |
|  96.0% |     873 | `_run_module_code`               | `<frozen runpy>` |
|  87.7% |     797 | `_format_str_once`               | `__init__.py`    |
|  51.6% |     469 | `lib2to3_parse`                  | `parsing.py`     |
|  51.5% |     468 | `Driver.parse_string`            | `driver.py`      |
|  51.4% |     467 | `Driver.parse_tokens`            | `driver.py`      |
|  48.6% |     442 | `format_str`                     | `__init__.py`    |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 96.0% |     873 | `format_file_contents`            | `__init__.py`   |
| 96.0% |     873 | `format_file_in_place`            | `__init__.py`   |
| 96.0% |     873 | `reformat_one`                    | `__init__.py`   |
| 96.0% |     873 | `main`                            | `__init__.py`   |
| 96.0% |     873 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 96.0% |     873 | `Context.invoke`                  | `core.py`       |
| 96.0% |     873 | `Command.invoke`                  | `core.py`       |
| 96.0% |     873 | `Command.main`                    | `core.py`       |
| 96.0% |     873 | `Command.__call__`                | `core.py`       |
| 96.0% |     873 | `patched_main`                    | `__init__.py`   |
| 96.0% |     873 | `<module>`                        | `__main__.py`   |
| 87.7% |     797 | `_format_str_once`                | `__init__.py`   |
| 51.6% |     469 | `lib2to3_parse`                   | `parsing.py`    |
| 51.5% |     468 | `Driver.parse_string`             | `driver.py`     |
| 51.4% |     467 | `Driver.parse_tokens`             | `driver.py`     |
| 48.6% |     442 | `format_str`                      | `__init__.py`   |
| 47.4% |     431 | `check_stability_and_equivalence` | `__init__.py`   |
| 39.7% |     361 | `assert_stable`                   | `__init__.py`   |
| 25.0% |     227 | `Parser.addtoken`                 | `parse.py`      |
| 23.7% |     215 | `Parser._addtoken`                | `parse.py`      |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 30.7% |     279 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                          | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |     909 | `_run_code`                       | `<frozen runpy>`                         |
| 100.0% |     909 | `run_module`                      | `<frozen runpy>`                         |
| 100.0% |     909 | `_run_module_as_main`             | `<frozen runpy>`                         |
|  96.0% |     873 | `_run_module_code`                | `<frozen runpy>`                         |
|   4.0% |      36 | `_call_with_frames_removed`       | `<frozen importlib._bootstrap>`          |
|   4.0% |      36 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   4.0% |      36 | `_load_unlocked`                  | `<frozen importlib._bootstrap>`          |
|   4.0% |      36 | `_find_and_load_unlocked`         | `<frozen importlib._bootstrap>`          |
|   4.0% |      36 | `_find_and_load`                  | `<frozen importlib._bootstrap>`          |
|   4.0% |      36 | `_get_module_details`             | `<frozen runpy>`                         |
|   1.0% |       9 | `_compile_bytecode`               | `<frozen importlib._bootstrap_external>` |
|   1.0% |       9 | `SourceLoader.get_code`           | `<frozen importlib._bootstrap_external>` |
|   0.7% |       6 | `_handle_fromlist`                | `<frozen importlib._bootstrap>`          |
|   0.3% |       3 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |
|   0.3% |       3 | `_path_isfile`                    | `<frozen importlib._bootstrap_external>` |
|   0.3% |       3 | `FileFinder.find_spec`            | `<frozen importlib._bootstrap_external>` |
|   0.3% |       3 | `PathFinder._get_spec`            | `<frozen importlib._bootstrap_external>` |
|   0.3% |       3 | `PathFinder.find_spec`            | `<frozen importlib._bootstrap_external>` |
|   0.3% |       3 | `_find_spec`                      | `<frozen importlib._bootstrap>`          |
|   0.2% |       2 | `_path_stat`                      | `<frozen importlib._bootstrap_external>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |     909 | `run_module` | `<frozen runpy>` |
|  96.0% |     873 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 96.0% |     873 | `_run_module_code`    | `<frozen runpy>` |
|  4.0% |      36 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     909 | `_run_code` | `<frozen runpy>` |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 50.6% |     442 | `format_str`                      | `__init__.py` |
| 49.4% |     431 | `check_stability_and_equivalence` | `__init__.py` |

##### `format_file_in_place` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |     873 | `format_file_contents` | `__init__.py` |

##### `reformat_one` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |     873 | `format_file_in_place` | `__init__.py` |

##### `main` (`__init__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     873 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |     873 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |     873 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     873 | `Context.invoke` | `core.py` |

##### `Command.main` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     873 | `Command.invoke` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |     873 | `Command.main` | `core.py` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee             | Location  |
| -----: | ------: | ------------------ | --------- |
| 100.0% |     873 | `Command.__call__` | `core.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     873 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     873 | `_run_code` | `<frozen runpy>` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                               | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 58.8% |     469 | `lib2to3_parse`                      | `parsing.py`  |
| 20.1% |     160 | `Visitor.visit`                      | `nodes.py`    |
| 12.4% |      99 | `detect_target_versions`             | `__init__.py` |
|  4.3% |      34 | `transform_line`                     | `linegen.py`  |
|  2.0% |      16 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |

##### `lib2to3_parse` (`parsing.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.8% |     468 | `Driver.parse_string` | `driver.py` |

##### `Driver.parse_string` (`driver.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.8% |     467 | `Driver.parse_tokens` | `driver.py` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                             | Location      |
| ----: | ------: | ---------------------------------- | ------------- |
| 48.6% |     227 | `Parser.addtoken`                  | `parse.py`    |
| 33.0% |     154 | `(garbage collector)`              | `<unknown>`   |
|  8.1% |      38 | `TokenProxy.__next__`              | `driver.py`   |
|  0.9% |       4 | `Logger.debug`                     | `__init__.py` |
|  0.6% |       3 | `Driver._partially_consume_prefix` | `driver.py`   |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.1% |     438 | `_format_str_once` | `__init__.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 83.8% |     361 | `assert_stable`     | `__init__.py` |
| 15.1% |      65 | `assert_equivalent` | `__init__.py` |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.4% |     359 | `_format_str_once` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 88.1% |     200 | `Parser._addtoken` | `parse.py`    |
|  5.7% |      13 | `generate_tokens`  | `tokenize.py` |
|  0.9% |       2 | `Parser.classify`  | `parse.py`    |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 18.6% |      40 | `Parser.pop`          | `parse.py`  |
| 11.6% |      25 | `Parser.shift`        | `parse.py`  |
|  2.3% |       5 | `Parser.push`         | `parse.py`  |
|  1.9% |       4 | `(garbage collector)` | `<unknown>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |      36 | `<module>`       | `__init__.py`                   |
|  33.3% |      12 | `<module>`       | `comments.py`                   |
|  30.6% |      11 | `<module>`       | `nodes.py`                      |
|  22.2% |       8 | `<module>`       | `files.py`                      |
|  16.7% |       6 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      36 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  25.0% |       9 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |      36 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   8.3% |       3 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |
|   2.8% |       1 | `module_from_spec`                | `<frozen importlib._bootstrap>`          |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |      36 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
|   8.3% |       3 | `_find_spec`                | `<frozen importlib._bootstrap>` |
|   2.8% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |      36 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |      36 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |      36 | `_get_module_details` | `<frozen runpy>`                |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 11.1% |       1 | `(garbage collector)` | `<unknown>` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee              | Location                                 |
| -----: | ------: | ------------------- | ---------------------------------------- |
| 100.0% |       9 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `ExtensionFileLoader.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_path_isfile` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee               | Location                                 |
| ----: | ------: | -------------------- | ---------------------------------------- |
| 66.7% |       2 | `_path_is_mode_type` | `<frozen importlib._bootstrap_external>` |
| 33.3% |       1 | `_load_unlocked`     | `<frozen importlib._bootstrap>`          |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee         | Location                                 |
| -----: | ------: | -------------- | ---------------------------------------- |
| 100.0% |       3 | `_path_isfile` | `<frozen importlib._bootstrap_external>` |

##### `PathFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       3 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `PathFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       3 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       3 | `PathFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `_run_code` ← `_run_module_as_main`

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16.9% |     154 | `(garbage collector)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  9.7% |      88 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  7.5% |      68 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  4.5% |      41 | `(garbage collector)` ← `Visitor.visit_default` (`nodes.py`) ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_power` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` |
|  4.2% |      38 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  4.2% |      38 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  3.4% |      31 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.4% |      22 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.9% |      17 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.9% |      17 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.4% |      13 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.3% |      12 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.9% |       8 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.9% |       8 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.9% |       8 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.8% |       7 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.8% |       7 | `generate_tokens` (`tokenize.py`) ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.7% |       6 | `generate_tokens` (`tokenize.py`) ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.7% |       6 | `Parser._addtoken` (`parse.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.6% |       5 | `check_stability_and_equivalence` (`__init__.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

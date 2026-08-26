# Sampling profile

Collected 952 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 68.2% |     649 |
| Garbage collector | 30.5% |     290 |
| Standard library  |  1.4% |      13 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                      | Location                                 |
| ----: | ------: | ----------------------------- | ---------------------------------------- |
| 30.5% |     290 | `(garbage collector)`         | `<unknown>`                              |
| 16.7% |     159 | `Parser._addtoken`            | `parse.py`                               |
|  9.6% |      91 | `get_features_used`           | `__init__.py`                            |
|  5.4% |      51 | `Driver.parse_tokens`         | `driver.py`                              |
|  4.1% |      39 | `parse`                       | `ast.py`                                 |
|  2.7% |      26 | `generate_tokens`             | `tokenize.py`                            |
|  2.6% |      25 | `Visitor.visit`               | `nodes.py`                               |
|  1.8% |      17 | `Parser.pop`                  | `parse.py`                               |
|  1.8% |      17 | `_stringify_ast`              | `parsing.py`                             |
|  1.6% |      15 | `normalize_invisible_parens`  | `linegen.py`                             |
|  1.2% |      11 | `Parser.addtoken`             | `parse.py`                               |
|  1.2% |      11 | `convert_one_fmt_off_pair`    | `comments.py`                            |
|  1.1% |      10 | `assert_equivalent`           | `__init__.py`                            |
|  1.1% |      10 | `convert`                     | `pytree.py`                              |
|  1.1% |      10 | `Line.append`                 | `lines.py`                               |
|  0.9% |       9 | `Visitor.visit_default`       | `nodes.py`                               |
|  0.8% |       8 | `LineGenerator.visit_default` | `linegen.py`                             |
|  0.8% |       8 | `_compile_bytecode`           | `<frozen importlib._bootstrap_external>` |
|  0.7% |       7 | `Parser.shift`                | `parse.py`                               |
|  0.7% |       7 | `hug_power_op`                | `trans.py`                               |

#### Categories

##### Ours

|     % | Samples | Function                             | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 16.7% |     159 | `Parser._addtoken`                   | `parse.py`    |
|  9.6% |      91 | `get_features_used`                  | `__init__.py` |
|  5.4% |      51 | `Driver.parse_tokens`                | `driver.py`   |
|  4.1% |      39 | `parse`                              | `ast.py`      |
|  2.7% |      26 | `generate_tokens`                    | `tokenize.py` |
|  2.6% |      25 | `Visitor.visit`                      | `nodes.py`    |
|  1.8% |      17 | `Parser.pop`                         | `parse.py`    |
|  1.8% |      17 | `_stringify_ast`                     | `parsing.py`  |
|  1.6% |      15 | `normalize_invisible_parens`         | `linegen.py`  |
|  1.2% |      11 | `Parser.addtoken`                    | `parse.py`    |
|  1.2% |      11 | `convert_one_fmt_off_pair`           | `comments.py` |
|  1.1% |      10 | `assert_equivalent`                  | `__init__.py` |
|  1.1% |      10 | `convert`                            | `pytree.py`   |
|  1.1% |      10 | `Line.append`                        | `lines.py`    |
|  0.9% |       9 | `Visitor.visit_default`              | `nodes.py`    |
|  0.8% |       8 | `LineGenerator.visit_default`        | `linegen.py`  |
|  0.7% |       7 | `Parser.shift`                       | `parse.py`    |
|  0.7% |       7 | `hug_power_op`                       | `trans.py`    |
|  0.6% |       6 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |
|  0.6% |       6 | `line_to_string`                     | `lines.py`    |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 30.5% |     290 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                    | Location                                 |
| ---: | ------: | --------------------------- | ---------------------------------------- |
| 0.8% |       8 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
| 0.2% |       2 | `FileLoader.get_data`       | `<frozen importlib._bootstrap_external>` |
| 0.2% |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| 0.1% |       1 | `ABCMeta.__new__`           | `<frozen abc>`                           |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 16.4% |      26 | `parse.py:328` |
| 15.1% |      24 | `parse.py:311` |
| 13.8% |      22 | `parse.py:305` |
| 10.7% |      17 | `parse.py:298` |
|  6.9% |      11 | `parse.py:315` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 24.2% |      22 | `__init__.py:1335` |
| 19.8% |      18 | `__init__.py:1440` |
| 11.0% |      10 | `__init__.py:1424` |
|  9.9% |       9 | `__init__.py:1436` |
|  6.6% |       6 | `__init__.py:1430` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 54.9% |      28 | `driver.py:162` |
| 21.6% |      11 | `driver.py:128` |
|  3.9% |       2 | `driver.py:172` |
|  3.9% |       2 | `driver.py:161` |
|  2.0% |       1 | `driver.py:140` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      39 | `ast.py:46` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 34.6% |       9 | `tokenize.py:624` |
| 30.8% |       8 | `tokenize.py:875` |
|  7.7% |       2 | `tokenize.py:704` |
|  7.7% |       2 | `tokenize.py:634` |
|  3.8% |       1 | `tokenize.py:879` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 68.0% |      17 | `nodes.py:185` |
| 20.0% |       5 | `nodes.py:183` |
|  8.0% |       2 | `nodes.py:163` |
|  4.0% |       1 | `nodes.py:181` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 41.2% |       7 | `parse.py:404` |
| 17.6% |       3 | `parse.py:406` |
| 17.6% |       3 | `parse.py:408` |
| 11.8% |       2 | `parse.py:403` |
| 11.8% |       2 | `parse.py:398` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 35.3% |       6 | `parsing.py:214` |
| 23.5% |       4 | `parsing.py:217` |
| 17.6% |       3 | `parsing.py:197` |
| 11.8% |       2 | `parsing.py:240` |
|  5.9% |       1 | `parsing.py:189` |

##### `normalize_invisible_parens` (`linegen.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 46.7% |       7 | `linegen.py:1432` |
| 20.0% |       3 | `linegen.py:1339` |
|  6.7% |       1 | `linegen.py:1351` |
|  6.7% |       1 | `linegen.py:1431` |
|  6.7% |       1 | `linegen.py:1436` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 90.9% |      10 | `parse.py:252` |
|  9.1% |       1 | `parse.py:245` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 72.7% |       8 | `comments.py:184` |
| 27.3% |       3 | `comments.py:186` |

##### `assert_equivalent` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 60.0% |       6 | `__init__.py:1547` |
| 40.0% |       4 | `__init__.py:1546` |

##### `convert` (`pytree.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 40.0% |       4 | `pytree.py:501` |
| 30.0% |       3 | `pytree.py:503` |
| 20.0% |       2 | `pytree.py:486` |
| 10.0% |       1 | `pytree.py:499` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location      |
| ----: | ------: | ------------- |
| 40.0% |       4 | `lines.py:89` |
| 30.0% |       3 | `lines.py:95` |
| 10.0% |       1 | `lines.py:79` |
| 10.0% |       1 | `lines.py:91` |
| 10.0% |       1 | `lines.py:97` |

##### `Visitor.visit_default` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 55.6% |       5 | `nodes.py:191` |
| 44.4% |       4 | `nodes.py:187` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 50.0% |       4 | `linegen.py:157` |
| 50.0% |       4 | `linegen.py:158` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Location                                     |
| ----: | ------: | -------------------------------------------- |
| 87.5% |       7 | `<frozen importlib._bootstrap_external>:500` |
| 12.5% |       1 | `<frozen importlib._bootstrap_external>:505` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 57.1% |       4 | `parse.py:381` |
| 42.9% |       3 | `parse.py:383` |

##### `hug_power_op` (`trans.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 42.9% |       3 | `trans.py:151` |
| 42.9% |       3 | `trans.py:133` |
| 14.3% |       1 | `trans.py:85`  |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 50.0% |       3 | `lines.py:571` |
| 33.3% |       2 | `lines.py:584` |
| 16.7% |       1 | `lines.py:604` |

##### `line_to_string` (`lines.py`)

|      % | Samples | Location        |
| -----: | ------: | --------------- |
| 100.0% |       6 | `lines.py:1078` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       2 | `<frozen importlib._bootstrap_external>:923` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       2 | `<frozen importlib._bootstrap>:549` |

##### `ABCMeta.__new__` (`<frozen abc>`)

|      % | Samples | Location           |
| -----: | ------: | ------------------ |
| 100.0% |       1 | `<frozen abc>:106` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 63.4% |     184 | `Driver.parse_tokens`        | `driver.py` |
| 12.4% |      36 | `is_vararg`                  | `nodes.py`  |
|  5.2% |      15 | `Parser._addtoken`           | `parse.py`  |
|  2.4% |       7 | `Visitor.visit`              | `nodes.py`  |
|  2.1% |       6 | `StringTransformer.__init__` | `trans.py`  |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 97.5% |     155 | `Parser.addtoken`     | `parse.py`  |
|  1.3% |       2 | `(native)`            | `<unknown>` |
|  1.3% |       2 | `TokenProxy.__next__` | `driver.py` |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |      91 | `detect_target_versions` | `__init__.py` |

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      51 | `Driver.parse_string` | `driver.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      39 | `_parse_single_version` | `parsing.py` |

##### `generate_tokens` (`tokenize.py`)

|      % | Samples | Caller     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |      26 | `(native)` | `<unknown>` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 60.0% |      15 | `Visitor.visit_default`       | `nodes.py`   |
| 36.0% |       9 | `LineGenerator.visit_stmt`    | `linegen.py` |
|  4.0% |       1 | `LineGenerator.visit_funcdef` | `linegen.py` |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      17 | `Parser._addtoken` | `parse.py` |

##### `_stringify_ast` (`parsing.py`)

|      % | Samples | Caller                           | Location     |
| -----: | ------: | -------------------------------- | ------------ |
| 100.0% |      17 | `_stringify_ast_with_new_parent` | `parsing.py` |

##### `normalize_invisible_parens` (`linegen.py`)

|      % | Samples | Caller                     | Location     |
| -----: | ------: | -------------------------- | ------------ |
| 100.0% |      15 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      11 | `Driver.parse_tokens` | `driver.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|      % | Samples | Caller              | Location      |
| -----: | ------: | ------------------- | ------------- |
| 100.0% |      11 | `normalize_fmt_off` | `comments.py` |

##### `assert_equivalent` (`__init__.py`)

|      % | Samples | Caller                            | Location      |
| -----: | ------: | --------------------------------- | ------------- |
| 100.0% |      10 | `check_stability_and_equivalence` | `__init__.py` |

##### `convert` (`pytree.py`)

|     % | Samples | Caller         | Location   |
| ----: | ------: | -------------- | ---------- |
| 70.0% |       7 | `Parser.pop`   | `parse.py` |
| 30.0% |       3 | `Parser.shift` | `parse.py` |

##### `Line.append` (`lines.py`)

|      % | Samples | Caller                        | Location     |
| -----: | ------: | ----------------------------- | ------------ |
| 100.0% |      10 | `LineGenerator.visit_default` | `linegen.py` |

##### `Visitor.visit_default` (`nodes.py`)

|      % | Samples | Caller                        | Location     |
| -----: | ------: | ----------------------------- | ------------ |
| 100.0% |       9 | `LineGenerator.visit_default` | `linegen.py` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Caller                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 75.0% |       6 | `Visitor.visit`                   | `nodes.py`   |
| 12.5% |       1 | `LineGenerator.visit_suite`       | `linegen.py` |
| 12.5% |       1 | `LineGenerator.visit_simple_stmt` | `linegen.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       8 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `Parser.shift` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |       7 | `Parser._addtoken` | `parse.py` |

##### `hug_power_op` (`trans.py`)

|     % | Samples | Caller                              | Location     |
| ----: | ------: | ----------------------------------- | ------------ |
| 42.9% |       3 | `run_transformer`                   | `linegen.py` |
| 42.9% |       3 | `(native)`                          | `<unknown>`  |
| 14.3% |       1 | `_hugging_power_ops_line_to_string` | `linegen.py` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |       6 | `_format_str_once` | `__init__.py` |

##### `line_to_string` (`lines.py`)

|      % | Samples | Caller           | Location     |
| -----: | ------: | ---------------- | ------------ |
| 100.0% |       6 | `transform_line` | `linegen.py` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       2 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % | Samples | Caller                              | Location                                 |
| ----: | ------: | ----------------------------------- | ---------------------------------------- |
| 50.0% |       1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
| 50.0% |       1 | `ExtensionFileLoader.exec_module`   | `<frozen importlib._bootstrap_external>` |

##### `ABCMeta.__new__` (`<frozen abc>`)

|      % | Samples | Caller     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |       1 | `(native)` | `<unknown>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                         | Location         |
| -----: | ------: | -------------------------------- | ---------------- |
| 100.0% |     952 | `(native)`                       | `<unknown>`      |
| 100.0% |     952 | `_run_code`                      | `<frozen runpy>` |
| 100.0% |     952 | `run_module`                     | `<frozen runpy>` |
| 100.0% |     952 | `_run_module_as_main`            | `<frozen runpy>` |
|  97.8% |     931 | `reformat_one`                   | `__init__.py`    |
|  97.8% |     931 | `main`                           | `__init__.py`    |
|  97.8% |     931 | `pass_context.<locals>.new_func` | `decorators.py`  |
|  97.8% |     931 | `Context.invoke`                 | `core.py`        |
|  97.8% |     931 | `Command.invoke`                 | `core.py`        |
|  97.8% |     931 | `Command.main`                   | `core.py`        |
|  97.8% |     931 | `Command.__call__`               | `core.py`        |
|  97.8% |     931 | `patched_main`                   | `__init__.py`    |
|  97.8% |     931 | `<module>`                       | `__main__.py`    |
|  97.8% |     931 | `_run_module_code`               | `<frozen runpy>` |
|  97.7% |     930 | `format_file_contents`           | `__init__.py`    |
|  97.7% |     930 | `format_file_in_place`           | `__init__.py`    |
|  89.4% |     851 | `_format_str_once`               | `__init__.py`    |
|  52.8% |     503 | `Driver.parse_tokens`            | `driver.py`      |
|  52.8% |     503 | `Driver.parse_string`            | `driver.py`      |
|  52.8% |     503 | `lib2to3_parse`                  | `parsing.py`     |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 97.8% |     931 | `reformat_one`                    | `__init__.py`   |
| 97.8% |     931 | `main`                            | `__init__.py`   |
| 97.8% |     931 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 97.8% |     931 | `Context.invoke`                  | `core.py`       |
| 97.8% |     931 | `Command.invoke`                  | `core.py`       |
| 97.8% |     931 | `Command.main`                    | `core.py`       |
| 97.8% |     931 | `Command.__call__`                | `core.py`       |
| 97.8% |     931 | `patched_main`                    | `__init__.py`   |
| 97.8% |     931 | `<module>`                        | `__main__.py`   |
| 97.7% |     930 | `format_file_contents`            | `__init__.py`   |
| 97.7% |     930 | `format_file_in_place`            | `__init__.py`   |
| 89.4% |     851 | `_format_str_once`                | `__init__.py`   |
| 52.8% |     503 | `Driver.parse_tokens`             | `driver.py`     |
| 52.8% |     503 | `Driver.parse_string`             | `driver.py`     |
| 52.8% |     503 | `lib2to3_parse`                   | `parsing.py`    |
| 49.8% |     474 | `format_str`                      | `__init__.py`   |
| 47.9% |     456 | `check_stability_and_equivalence` | `__init__.py`   |
| 40.2% |     383 | `assert_stable`                   | `__init__.py`   |
| 25.1% |     239 | `Parser.addtoken`                 | `parse.py`      |
| 23.4% |     223 | `Parser._addtoken`                | `parse.py`      |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 30.5% |     290 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                            | Location                                 |
| -----: | ------: | ----------------------------------- | ---------------------------------------- |
| 100.0% |     952 | `_run_code`                         | `<frozen runpy>`                         |
| 100.0% |     952 | `run_module`                        | `<frozen runpy>`                         |
| 100.0% |     952 | `_run_module_as_main`               | `<frozen runpy>`                         |
|  97.8% |     931 | `_run_module_code`                  | `<frozen runpy>`                         |
|   2.2% |      21 | `_LoaderBasics.exec_module`         | `<frozen importlib._bootstrap_external>` |
|   2.2% |      21 | `_load_unlocked`                    | `<frozen importlib._bootstrap>`          |
|   2.2% |      21 | `_find_and_load_unlocked`           | `<frozen importlib._bootstrap>`          |
|   2.2% |      21 | `_find_and_load`                    | `<frozen importlib._bootstrap>`          |
|   2.2% |      21 | `_call_with_frames_removed`         | `<frozen importlib._bootstrap>`          |
|   2.2% |      21 | `_get_module_details`               | `<frozen runpy>`                         |
|   1.1% |      10 | `SourceLoader.get_code`             | `<frozen importlib._bootstrap_external>` |
|   0.8% |       8 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
|   0.6% |       6 | `_handle_fromlist`                  | `<frozen importlib._bootstrap>`          |
|   0.2% |       2 | `FileLoader.get_data`               | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `module_from_spec`                  | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `ExtensionFileLoader.exec_module`   | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `ABCMeta.__new__`                   | `<frozen abc>`                           |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(native)` (`<unknown>`)

|      % | Samples | Callee                | Location         |
| -----: | ------: | --------------------- | ---------------- |
| 100.0% |     952 | `run_module`          | `<frozen runpy>` |
| 100.0% |     952 | `_run_module_as_main` | `<frozen runpy>` |
|  97.8% |     931 | `Context.invoke`      | `core.py`        |
|  97.8% |     931 | `Command.main`        | `core.py`        |
|  97.8% |     931 | `Command.__call__`    | `core.py`        |

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |     952 | `(native)` | `<unknown>` |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 97.8% |     931 | `_run_module_code`    | `<frozen runpy>` |
|  2.2% |      21 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     952 | `_run_code` | `<frozen runpy>` |

##### `reformat_one` (`__init__.py`)

|     % | Samples | Callee                 | Location      |
| ----: | ------: | ---------------------- | ------------- |
| 99.9% |     930 | `format_file_in_place` | `__init__.py` |
|  0.1% |       1 | `Cache.write`          | `cache.py`    |

##### `main` (`__init__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     931 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |     931 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |     931 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |     931 | `(native)` | `<unknown>` |

##### `Command.main` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     931 | `Command.invoke` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |     931 | `(native)` | `<unknown>` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |     931 | `(native)` | `<unknown>` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     931 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     931 | `_run_code` | `<frozen runpy>` |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 51.0% |     474 | `format_str`                      | `__init__.py` |
| 49.0% |     456 | `check_stability_and_equivalence` | `__init__.py` |

##### `format_file_in_place` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |     930 | `format_file_contents` | `__init__.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                   | Location      |
| ----: | ------: | ------------------------ | ------------- |
| 59.1% |     503 | `lib2to3_parse`          | `parsing.py`  |
| 20.0% |     170 | `Visitor.visit`          | `nodes.py`    |
| 10.7% |      91 | `detect_target_versions` | `__init__.py` |
|  5.5% |      47 | `transform_line`         | `linegen.py`  |
|  1.8% |      15 | `normalize_fmt_off`      | `comments.py` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 47.5% |     239 | `Parser.addtoken`     | `parse.py`  |
| 36.6% |     184 | `(garbage collector)` | `<unknown>` |
|  5.8% |      29 | `(native)`            | `<unknown>` |

##### `Driver.parse_string` (`driver.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     503 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     503 | `Driver.parse_string` | `driver.py` |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.2% |     470 | `_format_str_once` | `__init__.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 84.0% |     383 | `assert_stable`     | `__init__.py` |
| 15.1% |      69 | `assert_equivalent` | `__init__.py` |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.5% |     381 | `_format_str_once` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location    |
| ----: | ------: | ------------------ | ----------- |
| 91.6% |     219 | `Parser._addtoken` | `parse.py`  |
|  2.9% |       7 | `(native)`         | `<unknown>` |
|  0.8% |       2 | `Parser.classify`  | `parse.py`  |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 11.7% |      26 | `Parser.pop`          | `parse.py`  |
|  8.1% |      18 | `Parser.shift`        | `parse.py`  |
|  6.7% |      15 | `(garbage collector)` | `<unknown>` |
|  2.2% |       5 | `Parser.push`         | `parse.py`  |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      21 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  47.6% |      10 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |      21 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   4.8% |       1 | `module_from_spec`                | `<frozen importlib._bootstrap>`          |
|   4.8% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |      21 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |      21 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |      21 | `(native)` | `<unknown>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location         |
| -----: | ------: | --------------------- | ---------------- |
| 100.0% |      21 | `(native)`            | `<unknown>`      |
| 100.0% |      21 | `_get_module_details` | `<frozen runpy>` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                | Location                                 |
| ----: | ------: | --------------------- | ---------------------------------------- |
| 80.0% |       8 | `_compile_bytecode`   | `<frozen importlib._bootstrap_external>` |
| 20.0% |       2 | `FileLoader.get_data` | `<frozen importlib._bootstrap_external>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `ExtensionFileLoader.create_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `module_from_spec` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                              | Location                                 |
| -----: | ------: | ----------------------------------- | ---------------------------------------- |
| 100.0% |       1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |

##### `ExtensionFileLoader.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `(native)` ← `Command.invoke` (`core.py`) ← `Command.main` ← `(native)` ← `Command.__call__` (`core.py`) ← `(native)` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `(native)` ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `(native)` ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main` ← `(native)`

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.3% |     184 | `(garbage collector)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 10.6% |     101 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  6.7% |      64 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  5.7% |      54 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  4.1% |      39 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  3.8% |      36 | `(garbage collector)` ← `is_vararg` (`nodes.py`) ← `is_split_before_delimiter` (`brackets.py`) ← `BracketTracker.mark` ← `max_delimiter_priority_in_atom` ← `maybe_make_parens_invisible_in_atom` (`linegen.py`) ← `normalize_invisible_parens` ← `LineGenerator.visit_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` |
|  3.2% |      30 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.8% |      27 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.2% |      21 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.3% |      12 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.2% |      11 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.1% |      10 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.9% |       9 | `generate_tokens` (`tokenize.py`) ← `(native)` ← `TokenProxy.__next__` (`driver.py`) ← `(native)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.8% |       8 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.8% |       8 | `convert_one_fmt_off_pair` (`comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.8% |       8 | `generate_tokens` (`tokenize.py`) ← `(native)` ← `TokenProxy.__next__` (`driver.py`) ← `(native)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.8% |       8 | `_stringify_ast` (`parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `(native)` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.6% |       6 | `generate_tokens` (`tokenize.py`) ← `(native)` ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.6% |       6 | `convert` (`pytree.py`) ← `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.6% |       6 | `EmptyLineTracker.maybe_empty_lines` (`lines.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

# Sampling profile

Collected 972 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 65.1% |     633 |
| Garbage collector | 33.5% |     326 |
| Standard library  |  1.3% |      13 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                      | Location                                 |
| ----: | ------: | ----------------------------- | ---------------------------------------- |
| 33.5% |     326 | `(garbage collector)`         | `<unknown>`                              |
| 15.7% |     153 | `Parser._addtoken`            | `parse.py`                               |
|  9.5% |      92 | `get_features_used`           | `__init__.py`                            |
|  4.0% |      39 | `Driver.parse_tokens`         | `driver.py`                              |
|  3.9% |      38 | `parse`                       | `ast.py`                                 |
|  2.9% |      28 | `generate_tokens`             | `tokenize.py`                            |
|  2.5% |      24 | `Visitor.visit`               | `nodes.py`                               |
|  2.2% |      21 | `Line.append`                 | `lines.py`                               |
|  1.9% |      18 | `_stringify_ast`              | `parsing.py`                             |
|  1.5% |      15 | `Parser.addtoken`             | `parse.py`                               |
|  1.3% |      13 | `Parser.shift`                | `parse.py`                               |
|  1.3% |      13 | `normalize_invisible_parens`  | `linegen.py`                             |
|  1.2% |      12 | `convert_one_fmt_off_pair`    | `comments.py`                            |
|  1.1% |      11 | `Parser.pop`                  | `parse.py`                               |
|  0.8% |       8 | `_format_str_once`            | `__init__.py`                            |
|  0.8% |       8 | `Visitor.visit_default`       | `nodes.py`                               |
|  0.8% |       8 | `_compile_bytecode`           | `<frozen importlib._bootstrap_external>` |
|  0.8% |       8 | `wrap_in_parentheses`         | `nodes.py`                               |
|  0.7% |       7 | `transform_line`              | `linegen.py`                             |
|  0.7% |       7 | `LineGenerator.visit_default` | `linegen.py`                             |

#### Categories

##### Ours

|     % | Samples | Function                      | Location      |
| ----: | ------: | ----------------------------- | ------------- |
| 15.7% |     153 | `Parser._addtoken`            | `parse.py`    |
|  9.5% |      92 | `get_features_used`           | `__init__.py` |
|  4.0% |      39 | `Driver.parse_tokens`         | `driver.py`   |
|  3.9% |      38 | `parse`                       | `ast.py`      |
|  2.9% |      28 | `generate_tokens`             | `tokenize.py` |
|  2.5% |      24 | `Visitor.visit`               | `nodes.py`    |
|  2.2% |      21 | `Line.append`                 | `lines.py`    |
|  1.9% |      18 | `_stringify_ast`              | `parsing.py`  |
|  1.5% |      15 | `Parser.addtoken`             | `parse.py`    |
|  1.3% |      13 | `Parser.shift`                | `parse.py`    |
|  1.3% |      13 | `normalize_invisible_parens`  | `linegen.py`  |
|  1.2% |      12 | `convert_one_fmt_off_pair`    | `comments.py` |
|  1.1% |      11 | `Parser.pop`                  | `parse.py`    |
|  0.8% |       8 | `_format_str_once`            | `__init__.py` |
|  0.8% |       8 | `Visitor.visit_default`       | `nodes.py`    |
|  0.8% |       8 | `wrap_in_parentheses`         | `nodes.py`    |
|  0.7% |       7 | `transform_line`              | `linegen.py`  |
|  0.7% |       7 | `LineGenerator.visit_default` | `linegen.py`  |
|  0.7% |       7 | `line_to_string`              | `lines.py`    |
|  0.7% |       7 | `LineGenerator.visit_power`   | `linegen.py`  |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 33.5% |     326 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                          | Location                                 |
| ---: | ------: | --------------------------------- | ---------------------------------------- |
| 0.8% |       8 | `_compile_bytecode`               | `<frozen importlib._bootstrap_external>` |
| 0.2% |       2 | `_call_with_frames_removed`       | `<frozen importlib._bootstrap>`          |
| 0.1% |       1 | `PathFinder.find_spec`            | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `PathFinder._path_importer_cache` | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `FileLoader.get_data`             | `<frozen importlib._bootstrap_external>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 20.9% |      32 | `parse.py:311` |
| 17.6% |      27 | `parse.py:328` |
|  9.2% |      14 | `parse.py:299` |
|  8.5% |      13 | `parse.py:305` |
|  6.5% |      10 | `parse.py:297` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 21.7% |      20 | `__init__.py:1335` |
| 18.5% |      17 | `__init__.py:1424` |
| 18.5% |      17 | `__init__.py:1440` |
|  9.8% |       9 | `__init__.py:1436` |
|  8.7% |       8 | `__init__.py:1386` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 56.4% |      22 | `driver.py:162` |
| 23.1% |       9 | `driver.py:128` |
|  2.6% |       1 | `driver.py:151` |
|  2.6% |       1 | `driver.py:155` |
|  2.6% |       1 | `driver.py:152` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      38 | `ast.py:46` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 28.6% |       8 | `tokenize.py:624` |
| 28.6% |       8 | `tokenize.py:875` |
|  7.1% |       2 | `tokenize.py:972` |
|  3.6% |       1 | `tokenize.py:626` |
|  3.6% |       1 | `tokenize.py:780` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 41.7% |      10 | `nodes.py:183` |
| 37.5% |       9 | `nodes.py:185` |
| 12.5% |       3 | `nodes.py:181` |
|  8.3% |       2 | `nodes.py:163` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 38.1% |       8 | `lines.py:89`  |
| 23.8% |       5 | `lines.py:95`  |
|  9.5% |       2 | `lines.py:86`  |
|  4.8% |       1 | `lines.py:101` |
|  4.8% |       1 | `lines.py:76`  |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 50.0% |       9 | `parsing.py:214` |
| 33.3% |       6 | `parsing.py:217` |
| 11.1% |       2 | `parsing.py:185` |
|  5.6% |       1 | `parsing.py:177` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 86.7% |      13 | `parse.py:252` |
|  6.7% |       1 | `parse.py:245` |
|  6.7% |       1 | `parse.py:246` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 84.6% |      11 | `parse.py:381` |
| 15.4% |       2 | `parse.py:383` |

##### `normalize_invisible_parens` (`linegen.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 46.2% |       6 | `linegen.py:1432` |
| 15.4% |       2 | `linegen.py:1406` |
| 15.4% |       2 | `linegen.py:1431` |
|  7.7% |       1 | `linegen.py:1423` |
|  7.7% |       1 | `linegen.py:1384` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 58.3% |       7 | `comments.py:186` |
| 33.3% |       4 | `comments.py:184` |
|  8.3% |       1 | `comments.py:188` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 45.5% |       5 | `parse.py:404` |
| 18.2% |       2 | `parse.py:407` |
| 18.2% |       2 | `parse.py:408` |
| 18.2% |       2 | `parse.py:406` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 62.5% |       5 | `__init__.py:1268` |
| 12.5% |       1 | `__init__.py:1269` |
| 12.5% |       1 | `__init__.py:1274` |
| 12.5% |       1 | `__init__.py:1271` |

##### `Visitor.visit_default` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 62.5% |       5 | `nodes.py:191` |
| 37.5% |       3 | `nodes.py:187` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       8 | `<frozen importlib._bootstrap_external>:500` |

##### `wrap_in_parentheses` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 25.0% |       2 | `nodes.py:948` |
| 12.5% |       1 | `nodes.py:947` |
| 12.5% |       1 | `nodes.py:943` |
| 12.5% |       1 | `nodes.py:945` |
| 12.5% |       1 | `nodes.py:950` |

##### `transform_line` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 71.4% |       5 | `linegen.py:714` |
| 14.3% |       1 | `linegen.py:601` |
| 14.3% |       1 | `linegen.py:715` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 57.1% |       4 | `linegen.py:158` |
| 28.6% |       2 | `linegen.py:157` |
| 14.3% |       1 | `linegen.py:134` |

##### `line_to_string` (`lines.py`)

|      % | Samples | Location        |
| -----: | ------: | --------------- |
| 100.0% |       7 | `lines.py:1078` |

##### `LineGenerator.visit_power` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 85.7% |       6 | `linegen.py:363` |
| 14.3% |       1 | `linegen.py:342` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       2 | `<frozen importlib._bootstrap>:549` |

##### `PathFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:1270` |

##### `PathFinder._path_importer_cache` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:1229` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:922` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 63.2% |     206 | `Parser._addtoken`                | `parse.py`    |
| 13.8% |      45 | `Line.clone`                      | `lines.py`    |
|  3.1% |      10 | `__create_fn__.<locals>.__init__` | `<string>`    |
|  2.1% |       7 | `generate_tokens`                 | `tokenize.py` |
|  1.8% |       6 | `Base.__new__`                    | `pytree.py`   |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                | Location      |
| ----: | ------: | --------------------- | ------------- |
| 96.7% |     148 | `Parser.addtoken`     | `parse.py`    |
|  2.0% |       3 | `TokenProxy.__next__` | `driver.py`   |
|  0.7% |       1 | `Driver.parse_tokens` | `driver.py`   |
|  0.7% |       1 | `Logger.debug`        | `__init__.py` |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |      92 | `detect_target_versions` | `__init__.py` |

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      39 | `Driver.parse_string` | `driver.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      38 | `_parse_single_version` | `parsing.py` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 60.7% |      17 | `TokenProxy.__next__` | `driver.py` |
| 35.7% |      10 | `Parser.addtoken`     | `parse.py`  |
|  3.6% |       1 | `Driver.parse_tokens` | `driver.py` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                     | Location     |
| ----: | ------: | -------------------------- | ------------ |
| 75.0% |      18 | `Visitor.visit_default`    | `nodes.py`   |
| 25.0% |       6 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `Line.append` (`lines.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 90.5% |      19 | `LineGenerator.visit_default` | `linegen.py` |
|  4.8% |       1 | `bracket_split_build_line`    | `linegen.py` |
|  4.8% |       1 | `hug_power_op`                | `trans.py`   |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Caller                           | Location      |
| ----: | ------: | -------------------------------- | ------------- |
| 94.4% |      17 | `_stringify_ast_with_new_parent` | `parsing.py`  |
|  5.6% |       1 | `assert_equivalent`              | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      15 | `Driver.parse_tokens` | `driver.py` |

##### `Parser.shift` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      13 | `Parser._addtoken` | `parse.py` |

##### `normalize_invisible_parens` (`linegen.py`)

|      % | Samples | Caller                     | Location     |
| -----: | ------: | -------------------------- | ------------ |
| 100.0% |      13 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|      % | Samples | Caller              | Location      |
| -----: | ------: | ------------------- | ------------- |
| 100.0% |      12 | `normalize_fmt_off` | `comments.py` |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      11 | `Parser._addtoken` | `parse.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Caller          | Location      |
| ----: | ------: | --------------- | ------------- |
| 75.0% |       6 | `format_str`    | `__init__.py` |
| 25.0% |       2 | `assert_stable` | `__init__.py` |

##### `Visitor.visit_default` (`nodes.py`)

|      % | Samples | Caller                        | Location     |
| -----: | ------: | ----------------------------- | ------------ |
| 100.0% |       8 | `LineGenerator.visit_default` | `linegen.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       8 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `wrap_in_parentheses` (`nodes.py`)

|      % | Samples | Caller                       | Location     |
| -----: | ------: | ---------------------------- | ------------ |
| 100.0% |       8 | `normalize_invisible_parens` | `linegen.py` |

##### `transform_line` (`linegen.py`)

|     % | Samples | Caller             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 85.7% |       6 | `_format_str_once` | `__init__.py` |
| 14.3% |       1 | `run_transformer`  | `linegen.py`  |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Caller                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 57.1% |       4 | `Visitor.visit`                   | `nodes.py`   |
| 28.6% |       2 | `LineGenerator.visit_simple_stmt` | `linegen.py` |
| 14.3% |       1 | `LineGenerator.visit_power`       | `linegen.py` |

##### `line_to_string` (`lines.py`)

|      % | Samples | Caller           | Location     |
| -----: | ------: | ---------------- | ------------ |
| 100.0% |       7 | `transform_line` | `linegen.py` |

##### `LineGenerator.visit_power` (`linegen.py`)

|      % | Samples | Caller          | Location   |
| -----: | ------: | --------------- | ---------- |
| 100.0% |       7 | `Visitor.visit` | `nodes.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % | Samples | Caller                              | Location                                 |
| ----: | ------: | ----------------------------------- | ---------------------------------------- |
| 50.0% |       1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
| 50.0% |       1 | `ExtensionFileLoader.exec_module`   | `<frozen importlib._bootstrap_external>` |

##### `PathFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller       | Location                        |
| -----: | ------: | ------------ | ------------------------------- |
| 100.0% |       1 | `_find_spec` | `<frozen importlib._bootstrap>` |

##### `PathFinder._path_importer_cache` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       1 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       1 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                          | Location         |
| -----: | ------: | --------------------------------- | ---------------- |
| 100.0% |     972 | `_run_code`                       | `<frozen runpy>` |
| 100.0% |     972 | `run_module`                      | `<frozen runpy>` |
| 100.0% |     972 | `_run_module_as_main`             | `<frozen runpy>` |
|  97.2% |     945 | `format_file_contents`            | `__init__.py`    |
|  97.2% |     945 | `format_file_in_place`            | `__init__.py`    |
|  97.2% |     945 | `reformat_one`                    | `__init__.py`    |
|  97.2% |     945 | `main`                            | `__init__.py`    |
|  97.2% |     945 | `pass_context.<locals>.new_func`  | `decorators.py`  |
|  97.2% |     945 | `Context.invoke`                  | `core.py`        |
|  97.2% |     945 | `Command.invoke`                  | `core.py`        |
|  97.2% |     945 | `Command.main`                    | `core.py`        |
|  97.2% |     945 | `Command.__call__`                | `core.py`        |
|  97.2% |     945 | `patched_main`                    | `__init__.py`    |
|  97.2% |     945 | `<module>`                        | `__main__.py`    |
|  97.2% |     945 | `_run_module_code`                | `<frozen runpy>` |
|  88.7% |     862 | `_format_str_once`                | `__init__.py`    |
|  52.0% |     505 | `lib2to3_parse`                   | `parsing.py`     |
|  51.9% |     504 | `Driver.parse_tokens`             | `driver.py`      |
|  51.9% |     504 | `Driver.parse_string`             | `driver.py`      |
|  50.1% |     487 | `check_stability_and_equivalence` | `__init__.py`    |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 97.2% |     945 | `format_file_contents`            | `__init__.py`   |
| 97.2% |     945 | `format_file_in_place`            | `__init__.py`   |
| 97.2% |     945 | `reformat_one`                    | `__init__.py`   |
| 97.2% |     945 | `main`                            | `__init__.py`   |
| 97.2% |     945 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 97.2% |     945 | `Context.invoke`                  | `core.py`       |
| 97.2% |     945 | `Command.invoke`                  | `core.py`       |
| 97.2% |     945 | `Command.main`                    | `core.py`       |
| 97.2% |     945 | `Command.__call__`                | `core.py`       |
| 97.2% |     945 | `patched_main`                    | `__init__.py`   |
| 97.2% |     945 | `<module>`                        | `__main__.py`   |
| 88.7% |     862 | `_format_str_once`                | `__init__.py`   |
| 52.0% |     505 | `lib2to3_parse`                   | `parsing.py`    |
| 51.9% |     504 | `Driver.parse_tokens`             | `driver.py`     |
| 51.9% |     504 | `Driver.parse_string`             | `driver.py`     |
| 50.1% |     487 | `check_stability_and_equivalence` | `__init__.py`   |
| 47.1% |     458 | `format_str`                      | `__init__.py`   |
| 43.9% |     427 | `Parser.addtoken`                 | `parse.py`      |
| 42.4% |     412 | `assert_stable`                   | `__init__.py`   |
| 41.7% |     405 | `Parser._addtoken`                | `parse.py`      |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 33.5% |     326 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                            | Location                                 |
| -----: | ------: | ----------------------------------- | ---------------------------------------- |
| 100.0% |     972 | `_run_code`                         | `<frozen runpy>`                         |
| 100.0% |     972 | `run_module`                        | `<frozen runpy>`                         |
| 100.0% |     972 | `_run_module_as_main`               | `<frozen runpy>`                         |
|  97.2% |     945 | `_run_module_code`                  | `<frozen runpy>`                         |
|   2.8% |      27 | `_LoaderBasics.exec_module`         | `<frozen importlib._bootstrap_external>` |
|   2.8% |      27 | `_load_unlocked`                    | `<frozen importlib._bootstrap>`          |
|   2.8% |      27 | `_find_and_load_unlocked`           | `<frozen importlib._bootstrap>`          |
|   2.8% |      27 | `_find_and_load`                    | `<frozen importlib._bootstrap>`          |
|   2.8% |      27 | `_call_with_frames_removed`         | `<frozen importlib._bootstrap>`          |
|   2.8% |      27 | `_get_module_details`               | `<frozen runpy>`                         |
|   1.1% |      11 | `SourceLoader.get_code`             | `<frozen importlib._bootstrap_external>` |
|   1.0% |      10 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
|   0.3% |       3 | `_handle_fromlist`                  | `<frozen importlib._bootstrap>`          |
|   0.2% |       2 | `PathFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
|   0.2% |       2 | `_find_spec`                        | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `module_from_spec`                  | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `ExtensionFileLoader.exec_module`   | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `PathFinder._path_importer_cache`   | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `PathFinder._get_spec`              | `<frozen importlib._bootstrap_external>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |     972 | `run_module` | `<frozen runpy>` |
|  97.2% |     945 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 97.2% |     945 | `_run_module_code`    | `<frozen runpy>` |
|  2.8% |      27 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     972 | `_run_code` | `<frozen runpy>` |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 51.5% |     487 | `check_stability_and_equivalence` | `__init__.py` |
| 48.5% |     458 | `format_str`                      | `__init__.py` |

##### `format_file_in_place` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |     945 | `format_file_contents` | `__init__.py` |

##### `reformat_one` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |     945 | `format_file_in_place` | `__init__.py` |

##### `main` (`__init__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     945 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |     945 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |     945 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     945 | `Context.invoke` | `core.py` |

##### `Command.main` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     945 | `Command.invoke` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |     945 | `Command.main` | `core.py` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee             | Location  |
| -----: | ------: | ------------------ | --------- |
| 100.0% |     945 | `Command.__call__` | `core.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     945 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     945 | `_run_code` | `<frozen runpy>` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                   | Location      |
| ----: | ------: | ------------------------ | ------------- |
| 58.6% |     505 | `lib2to3_parse`          | `parsing.py`  |
| 15.5% |     134 | `Visitor.visit`          | `nodes.py`    |
| 10.8% |      93 | `detect_target_versions` | `__init__.py` |
| 10.4% |      90 | `transform_line`         | `linegen.py`  |
|  1.5% |      13 | `normalize_fmt_off`      | `comments.py` |

##### `lib2to3_parse` (`parsing.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.8% |     504 | `Driver.parse_string` | `driver.py` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                | Location      |
| ----: | ------: | --------------------- | ------------- |
| 84.7% |     427 | `Parser.addtoken`     | `parse.py`    |
|  6.0% |      30 | `TokenProxy.__next__` | `driver.py`   |
|  1.0% |       5 | `(garbage collector)` | `<unknown>`   |
|  0.2% |       1 | `Parser._addtoken`    | `parse.py`    |
|  0.2% |       1 | `generate_tokens`     | `tokenize.py` |

##### `Driver.parse_string` (`driver.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     504 | `Driver.parse_tokens` | `driver.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 84.6% |     412 | `assert_stable`     | `__init__.py` |
| 14.4% |      70 | `assert_equivalent` | `__init__.py` |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 98.9% |     453 | `_format_str_once` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 93.7% |     400 | `Parser._addtoken` | `parse.py`    |
|  2.3% |      10 | `generate_tokens`  | `tokenize.py` |
|  0.5% |       2 | `Parser.classify`  | `parse.py`    |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.3% |     409 | `_format_str_once` | `__init__.py` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 50.9% |     206 | `(garbage collector)` | `<unknown>` |
|  5.4% |      22 | `Parser.shift`        | `parse.py`  |
|  4.4% |      18 | `Parser.pop`          | `parse.py`  |
|  1.5% |       6 | `Parser.push`         | `parse.py`  |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      27 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  40.7% |      11 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |      27 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   3.7% |       1 | `module_from_spec`                | `<frozen importlib._bootstrap>`          |
|   3.7% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |      27 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
|   7.4% |       2 | `_find_spec`                | `<frozen importlib._bootstrap>` |
|   3.7% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |      27 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |      27 | `<module>`       | `__init__.py`                   |
|  22.2% |       6 | `<module>`       | `files.py`                      |
|  14.8% |       4 | `_find_and_load` | `<frozen importlib._bootstrap>` |
|  14.8% |       4 | `<module>`       | `gitignore.py`                  |
|  14.8% |       4 | `<module>`       | `cache.py`                      |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |      27 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |      27 | `_get_module_details` | `<frozen runpy>`                |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                | Location                                 |
| ----: | ------: | --------------------- | ---------------------------------------- |
| 90.9% |      10 | `_compile_bytecode`   | `<frozen importlib._bootstrap_external>` |
|  9.1% |       1 | `FileLoader.get_data` | `<frozen importlib._bootstrap_external>` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 20.0% |       2 | `(garbage collector)` | `<unknown>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `PathFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                 | Location                                 |
| ----: | ------: | ---------------------- | ---------------------------------------- |
| 50.0% |       1 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       2 | `PathFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

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

##### `PathFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |       1 | `PathFinder._path_importer_cache` | `<frozen importlib._bootstrap_external>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `_run_code` ← `_run_module_as_main`

|     % | Samples | Call stack                                                                                                                                                                                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.4% |     198 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`       |
| 10.2% |      99 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                      |
|  6.1% |      59 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                          |
|  5.0% |      49 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                               |
|  4.6% |      45 | `(garbage collector)` ← `Line.clone` (`lines.py`) ← `hug_power_op` (`trans.py`) ← `_hugging_power_ops_line_to_string` (`linegen.py`) ← `transform_line` ← `run_transformer` ← `transform_line` ← `_format_str_once` (`__init__.py`) ← `format_str`                          |
|  3.9% |      38 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                         |
|  3.4% |      33 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                   |
|  2.7% |      26 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                            |
|  1.3% |      13 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                     |
|  1.2% |      12 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                     |
|  1.0% |      10 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                         |
|  0.9% |       9 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                           |
|  0.8% |       8 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                              |
|  0.7% |       7 | `convert_one_fmt_off_pair` (`comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                        |
|  0.7% |       7 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                |
|  0.7% |       7 | `line_to_string` (`lines.py`) ← `transform_line` (`linegen.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                         |
|  0.6% |       6 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                    |
|  0.6% |       6 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                     |
|  0.6% |       6 | `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                           |
|  0.6% |       6 | `_stringify_ast` (`parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence` |

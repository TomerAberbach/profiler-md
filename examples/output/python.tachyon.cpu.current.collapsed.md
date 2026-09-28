# Sampling profile

Collected 1,202 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 61.4% |     738 |
| Garbage collector | 37.2% |     447 |
| Standard library  |  1.4% |      17 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                             | Location                                 |
| ----: | ------: | ------------------------------------ | ---------------------------------------- |
| 37.2% |     447 | `(garbage collector)`                | `<unknown>`                              |
| 14.1% |     170 | `Parser._addtoken`                   | `parse.py`                               |
|  9.7% |     116 | `get_features_used`                  | `__init__.py`                            |
|  4.0% |      48 | `parse`                              | `ast.py`                                 |
|  3.2% |      39 | `Driver.parse_tokens`                | `driver.py`                              |
|  2.7% |      33 | `Line.append`                        | `lines.py`                               |
|  2.3% |      28 | `generate_tokens`                    | `tokenize.py`                            |
|  1.7% |      20 | `Visitor.visit`                      | `nodes.py`                               |
|  1.6% |      19 | `Parser.pop`                         | `parse.py`                               |
|  1.3% |      16 | `_stringify_ast`                     | `parsing.py`                             |
|  1.2% |      15 | `Parser.shift`                       | `parse.py`                               |
|  1.2% |      14 | `Parser.addtoken`                    | `parse.py`                               |
|  1.0% |      12 | `LineGenerator.visit_default`        | `linegen.py`                             |
|  1.0% |      12 | `assert_equivalent`                  | `__init__.py`                            |
|  0.9% |      11 | `Parser.push`                        | `parse.py`                               |
|  0.8% |      10 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`                               |
|  0.8% |      10 | `_compile_bytecode`                  | `<frozen importlib._bootstrap_external>` |
|  0.7% |       8 | `_format_str_once`                   | `__init__.py`                            |
|  0.7% |       8 | `convert_one_fmt_off_pair`           | `comments.py`                            |
|  0.7% |       8 | `run_transformer`                    | `linegen.py`                             |

#### Categories

##### Ours

|     % | Samples | Function                             | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 14.1% |     170 | `Parser._addtoken`                   | `parse.py`    |
|  9.7% |     116 | `get_features_used`                  | `__init__.py` |
|  4.0% |      48 | `parse`                              | `ast.py`      |
|  3.2% |      39 | `Driver.parse_tokens`                | `driver.py`   |
|  2.7% |      33 | `Line.append`                        | `lines.py`    |
|  2.3% |      28 | `generate_tokens`                    | `tokenize.py` |
|  1.7% |      20 | `Visitor.visit`                      | `nodes.py`    |
|  1.6% |      19 | `Parser.pop`                         | `parse.py`    |
|  1.3% |      16 | `_stringify_ast`                     | `parsing.py`  |
|  1.2% |      15 | `Parser.shift`                       | `parse.py`    |
|  1.2% |      14 | `Parser.addtoken`                    | `parse.py`    |
|  1.0% |      12 | `LineGenerator.visit_default`        | `linegen.py`  |
|  1.0% |      12 | `assert_equivalent`                  | `__init__.py` |
|  0.9% |      11 | `Parser.push`                        | `parse.py`    |
|  0.8% |      10 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |
|  0.7% |       8 | `_format_str_once`                   | `__init__.py` |
|  0.7% |       8 | `convert_one_fmt_off_pair`           | `comments.py` |
|  0.7% |       8 | `run_transformer`                    | `linegen.py`  |
|  0.6% |       7 | `convert`                            | `pytree.py`   |
|  0.6% |       7 | `Visitor.visit_default`              | `nodes.py`    |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 37.2% |     447 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                    | Location                                 |
| ---: | ------: | --------------------------- | ---------------------------------------- |
| 0.8% |      10 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
| 0.2% |       3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| 0.1% |       1 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
| 0.1% |       1 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `_path_isfile`              | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `_path_stat`                | `<frozen importlib._bootstrap_external>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 19.4% |      33 | `parse.py:299` |
| 18.2% |      31 | `parse.py:316` |
| 15.9% |      27 | `parse.py:293` |
|  8.8% |      15 | `parse.py:286` |
|  7.6% |      13 | `parse.py:281` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 24.1% |      28 | `__init__.py:1314` |
| 14.7% |      17 | `__init__.py:1419` |
| 13.8% |      16 | `__init__.py:1403` |
|  8.6% |      10 | `__init__.py:1415` |
|  6.9% |       8 | `__init__.py:1365` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      48 | `ast.py:46` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 64.1% |      25 | `driver.py:162` |
| 20.5% |       8 | `driver.py:128` |
|  5.1% |       2 | `driver.py:151` |
|  2.6% |       1 | `driver.py:138` |
|  2.6% |       1 | `driver.py:154` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location      |
| ----: | ------: | ------------- |
| 45.5% |      15 | `lines.py:78` |
| 24.2% |       8 | `lines.py:84` |
| 15.2% |       5 | `lines.py:75` |
|  6.1% |       2 | `lines.py:65` |
|  3.0% |       1 | `lines.py:67` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 28.6% |       8 | `tokenize.py:613` |
| 28.6% |       8 | `tokenize.py:864` |
|  7.1% |       2 | `tokenize.py:871` |
|  3.6% |       1 | `tokenize.py:619` |
|  3.6% |       1 | `tokenize.py:874` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 60.0% |      12 | `nodes.py:174` |
| 35.0% |       7 | `nodes.py:172` |
|  5.0% |       1 | `nodes.py:171` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 42.1% |       8 | `parse.py:392` |
| 31.6% |       6 | `parse.py:396` |
| 15.8% |       3 | `parse.py:391` |
|  5.3% |       1 | `parse.py:386` |
|  5.3% |       1 | `parse.py:394` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 43.8% |       7 | `parsing.py:222` |
| 25.0% |       4 | `parsing.py:225` |
| 12.5% |       2 | `parsing.py:207` |
|  6.3% |       1 | `parsing.py:195` |
|  6.3% |       1 | `parsing.py:186` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 73.3% |      11 | `parse.py:369` |
| 20.0% |       3 | `parse.py:371` |
|  6.7% |       1 | `parse.py:372` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Location       |
| -----: | ------: | -------------- |
| 100.0% |      14 | `parse.py:240` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 58.3% |       7 | `linegen.py:158` |
| 25.0% |       3 | `linegen.py:134` |
|  8.3% |       1 | `linegen.py:136` |
|  8.3% |       1 | `linegen.py:157` |

##### `assert_equivalent` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 58.3% |       7 | `__init__.py:1533` |
| 41.7% |       5 | `__init__.py:1532` |

##### `Parser.push` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 45.5% |       5 | `parse.py:382` |
| 36.4% |       4 | `parse.py:384` |
| 18.2% |       2 | `parse.py:383` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 60.0% |       6 | `lines.py:560` |
| 30.0% |       3 | `lines.py:573` |
| 10.0% |       1 | `lines.py:566` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |      10 | `<frozen importlib._bootstrap_external>:500` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 75.0% |       6 | `__init__.py:1247` |
| 25.0% |       2 | `__init__.py:1266` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 62.5% |       5 | `comments.py:184` |
| 37.5% |       3 | `comments.py:186` |

##### `run_transformer` (`linegen.py`)

|      % | Samples | Location          |
| -----: | ------: | ----------------- |
| 100.0% |       8 | `linegen.py:1782` |

##### `convert` (`pytree.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 57.1% |       4 | `pytree.py:492` |
| 28.6% |       2 | `pytree.py:490` |
| 14.3% |       1 | `pytree.py:487` |

##### `Visitor.visit_default` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 85.7% |       6 | `nodes.py:180` |
| 14.3% |       1 | `nodes.py:176` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       3 | `<frozen importlib._bootstrap>:549` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       1 | `<frozen importlib._bootstrap>:1309` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:835` |

##### `_path_isfile` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:166` |

##### `_path_stat` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:152` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller             | Location    |
| ----: | ------: | ------------------ | ----------- |
| 62.0% |     277 | `convert`          | `pytree.py` |
| 13.6% |      61 | `Leaf.prefix`      | `pytree.py` |
|  2.9% |      13 | `Parser._addtoken` | `parse.py`  |
|  2.0% |       9 | `hug_power_op`     | `trans.py`  |
|  1.8% |       8 | `Base.__new__`     | `pytree.py` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                | Location      |
| ----: | ------: | --------------------- | ------------- |
| 91.8% |     156 | `Parser.addtoken`     | `parse.py`    |
|  3.5% |       6 | `TokenProxy.__next__` | `driver.py`   |
|  3.5% |       6 | `Driver.parse_tokens` | `driver.py`   |
|  1.2% |       2 | `Logger.debug`        | `__init__.py` |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |     116 | `detect_target_versions` | `__init__.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      48 | `_parse_single_version` | `parsing.py` |

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      39 | `Driver.parse_string` | `driver.py` |

##### `Line.append` (`lines.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 93.9% |      31 | `LineGenerator.visit_default` | `linegen.py` |
|  6.1% |       2 | `hug_power_op`                | `trans.py`   |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 60.7% |      17 | `TokenProxy.__next__` | `driver.py` |
| 35.7% |      10 | `Parser.addtoken`     | `parse.py`  |
|  3.6% |       1 | `Driver.parse_tokens` | `driver.py` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 55.0% |      11 | `Visitor.visit_default`       | `nodes.py`   |
| 35.0% |       7 | `LineGenerator.visit_stmt`    | `linegen.py` |
| 10.0% |       2 | `LineGenerator.visit_funcdef` | `linegen.py` |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      19 | `Parser._addtoken` | `parse.py` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Caller                           | Location      |
| ----: | ------: | -------------------------------- | ------------- |
| 93.8% |      15 | `_stringify_ast_with_new_parent` | `parsing.py`  |
|  6.3% |       1 | `assert_equivalent`              | `__init__.py` |

##### `Parser.shift` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      15 | `Parser._addtoken` | `parse.py` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      14 | `Driver.parse_tokens` | `driver.py` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Caller                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 83.3% |      10 | `Visitor.visit`                   | `nodes.py`   |
| 16.7% |       2 | `LineGenerator.visit_simple_stmt` | `linegen.py` |

##### `assert_equivalent` (`__init__.py`)

|      % | Samples | Caller                            | Location      |
| -----: | ------: | --------------------------------- | ------------- |
| 100.0% |      12 | `check_stability_and_equivalence` | `__init__.py` |

##### `Parser.push` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      11 | `Parser._addtoken` | `parse.py` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |      10 | `_format_str_once` | `__init__.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |      10 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Caller          | Location      |
| ----: | ------: | --------------- | ------------- |
| 50.0% |       4 | `assert_stable` | `__init__.py` |
| 50.0% |       4 | `format_str`    | `__init__.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|      % | Samples | Caller              | Location      |
| -----: | ------: | ------------------- | ------------- |
| 100.0% |       8 | `normalize_fmt_off` | `comments.py` |

##### `run_transformer` (`linegen.py`)

|      % | Samples | Caller           | Location     |
| -----: | ------: | ---------------- | ------------ |
| 100.0% |       8 | `transform_line` | `linegen.py` |

##### `convert` (`pytree.py`)

|     % | Samples | Caller         | Location   |
| ----: | ------: | -------------- | ---------- |
| 57.1% |       4 | `Parser.shift` | `parse.py` |
| 42.9% |       3 | `Parser.pop`   | `parse.py` |

##### `Visitor.visit_default` (`nodes.py`)

|      % | Samples | Caller                        | Location     |
| -----: | ------: | ----------------------------- | ------------ |
| 100.0% |       7 | `LineGenerator.visit_default` | `linegen.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % | Samples | Caller                              | Location                                 |
| ----: | ------: | ----------------------------------- | ---------------------------------------- |
| 33.3% |       1 | `_LoaderBasics.exec_module`         | `<frozen importlib._bootstrap_external>` |
| 33.3% |       1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
| 33.3% |       1 | `ExtensionFileLoader.exec_module`   | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |       1 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_path_isfile` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       1 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `_path_stat` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       1 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                          | Location         |
| -----: | ------: | --------------------------------- | ---------------- |
| 100.0% |   1,202 | `_run_code`                       | `<frozen runpy>` |
| 100.0% |   1,202 | `run_module`                      | `<frozen runpy>` |
| 100.0% |   1,202 | `_run_module_as_main`             | `<frozen runpy>` |
|  96.6% |   1,161 | `format_file_in_place`            | `__init__.py`    |
|  96.6% |   1,161 | `reformat_one`                    | `__init__.py`    |
|  96.6% |   1,161 | `main`                            | `__init__.py`    |
|  96.6% |   1,161 | `pass_context.<locals>.new_func`  | `decorators.py`  |
|  96.6% |   1,161 | `Context.invoke`                  | `core.py`        |
|  96.6% |   1,161 | `Command.invoke`                  | `core.py`        |
|  96.6% |   1,161 | `Command.main`                    | `core.py`        |
|  96.6% |   1,161 | `Command.__call__`                | `core.py`        |
|  96.6% |   1,161 | `patched_main`                    | `__init__.py`    |
|  96.6% |   1,161 | `<module>`                        | `__main__.py`    |
|  96.6% |   1,161 | `_run_module_code`                | `<frozen runpy>` |
|  96.5% |   1,160 | `format_file_contents`            | `__init__.py`    |
|  88.3% |   1,061 | `_format_str_once`                | `__init__.py`    |
|  52.5% |     631 | `Driver.parse_tokens`             | `driver.py`      |
|  52.5% |     631 | `Driver.parse_string`             | `driver.py`      |
|  52.5% |     631 | `lib2to3_parse`                   | `parsing.py`     |
|  50.8% |     611 | `check_stability_and_equivalence` | `__init__.py`    |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 96.6% |   1,161 | `format_file_in_place`            | `__init__.py`   |
| 96.6% |   1,161 | `reformat_one`                    | `__init__.py`   |
| 96.6% |   1,161 | `main`                            | `__init__.py`   |
| 96.6% |   1,161 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 96.6% |   1,161 | `Context.invoke`                  | `core.py`       |
| 96.6% |   1,161 | `Command.invoke`                  | `core.py`       |
| 96.6% |   1,161 | `Command.main`                    | `core.py`       |
| 96.6% |   1,161 | `Command.__call__`                | `core.py`       |
| 96.6% |   1,161 | `patched_main`                    | `__init__.py`   |
| 96.6% |   1,161 | `<module>`                        | `__main__.py`   |
| 96.5% |   1,160 | `format_file_contents`            | `__init__.py`   |
| 88.3% |   1,061 | `_format_str_once`                | `__init__.py`   |
| 52.5% |     631 | `Driver.parse_tokens`             | `driver.py`     |
| 52.5% |     631 | `Driver.parse_string`             | `driver.py`     |
| 52.5% |     631 | `lib2to3_parse`                   | `parsing.py`    |
| 50.8% |     611 | `check_stability_and_equivalence` | `__init__.py`   |
| 45.7% |     549 | `format_str`                      | `__init__.py`   |
| 45.4% |     546 | `Parser.addtoken`                 | `parse.py`      |
| 43.9% |     528 | `Parser._addtoken`                | `parse.py`      |
| 43.3% |     521 | `assert_stable`                   | `__init__.py`   |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 37.3% |     448 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                             | Location                                 |
| -----: | ------: | ------------------------------------ | ---------------------------------------- |
| 100.0% |   1,202 | `_run_code`                          | `<frozen runpy>`                         |
| 100.0% |   1,202 | `run_module`                         | `<frozen runpy>`                         |
| 100.0% |   1,202 | `_run_module_as_main`                | `<frozen runpy>`                         |
|  96.6% |   1,161 | `_run_module_code`                   | `<frozen runpy>`                         |
|   3.4% |      41 | `_find_and_load`                     | `<frozen importlib._bootstrap>`          |
|   3.4% |      41 | `_call_with_frames_removed`          | `<frozen importlib._bootstrap>`          |
|   3.4% |      41 | `_LoaderBasics.exec_module`          | `<frozen importlib._bootstrap_external>` |
|   3.4% |      41 | `_load_unlocked`                     | `<frozen importlib._bootstrap>`          |
|   3.4% |      41 | `_find_and_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|   3.4% |      41 | `_get_module_details`                | `<frozen runpy>`                         |
|   0.9% |      11 | `SourceLoader.get_code`              | `<frozen importlib._bootstrap_external>` |
|   0.8% |      10 | `_compile_bytecode`                  | `<frozen importlib._bootstrap_external>` |
|   0.5% |       6 | `_handle_fromlist`                   | `<frozen importlib._bootstrap>`          |
|   0.2% |       3 | `_get_module_lock`                   | `<frozen importlib._bootstrap>`          |
|   0.2% |       3 | `_HierarchicalLockManager.__enter__` | `<frozen importlib._bootstrap>`          |
|   0.2% |       2 | `FileFinder.find_spec`               | `<frozen importlib._bootstrap_external>` |
|   0.2% |       2 | `PathFinder._get_spec`               | `<frozen importlib._bootstrap_external>` |
|   0.2% |       2 | `PathFinder.find_spec`               | `<frozen importlib._bootstrap_external>` |
|   0.2% |       2 | `_find_spec`                         | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `_path_isfile`                       | `<frozen importlib._bootstrap_external>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |   1,202 | `run_module` | `<frozen runpy>` |
|  96.6% |   1,161 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 96.6% |   1,161 | `_run_module_code`    | `<frozen runpy>` |
|  3.4% |      41 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,202 | `_run_code` | `<frozen runpy>` |

##### `format_file_in_place` (`__init__.py`)

|     % | Samples | Callee                 | Location      |
| ----: | ------: | ---------------------- | ------------- |
| 99.9% |   1,160 | `format_file_contents` | `__init__.py` |

##### `reformat_one` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |   1,161 | `format_file_in_place` | `__init__.py` |

##### `main` (`__init__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |   1,161 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |   1,161 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |   1,161 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |   1,161 | `Context.invoke` | `core.py` |

##### `Command.main` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |   1,161 | `Command.invoke` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |   1,161 | `Command.main` | `core.py` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee             | Location  |
| -----: | ------: | ------------------ | --------- |
| 100.0% |   1,161 | `Command.__call__` | `core.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |   1,161 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,161 | `_run_code` | `<frozen runpy>` |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 52.7% |     611 | `check_stability_and_equivalence` | `__init__.py` |
| 47.3% |     549 | `format_str`                      | `__init__.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                               | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 59.5% |     631 | `lib2to3_parse`                      | `parsing.py`  |
| 19.6% |     208 | `Visitor.visit`                      | `nodes.py`    |
| 10.9% |     116 | `detect_target_versions`             | `__init__.py` |
|  5.8% |      62 | `transform_line`                     | `linegen.py`  |
|  1.4% |      15 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                | Location      |
| ----: | ------: | --------------------- | ------------- |
| 86.5% |     546 | `Parser.addtoken`     | `parse.py`    |
|  4.6% |      29 | `TokenProxy.__next__` | `driver.py`   |
|  1.1% |       7 | `(garbage collector)` | `<unknown>`   |
|  1.0% |       6 | `Parser._addtoken`    | `parse.py`    |
|  0.5% |       3 | `Logger.debug`        | `__init__.py` |

##### `Driver.parse_string` (`driver.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     631 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     631 | `Driver.parse_string` | `driver.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 85.3% |     521 | `assert_stable`     | `__init__.py` |
| 13.7% |      84 | `assert_equivalent` | `__init__.py` |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 98.9% |     543 | `_format_str_once` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 94.1% |     514 | `Parser._addtoken` | `parse.py`    |
|  2.0% |      11 | `generate_tokens`  | `tokenize.py` |
|  1.3% |       7 | `Parser.classify`  | `parse.py`    |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 57.6% |     304 | `Parser.shift`        | `parse.py`  |
|  5.7% |      30 | `Parser.pop`          | `parse.py`  |
|  2.5% |      13 | `(garbage collector)` | `<unknown>` |
|  2.1% |      11 | `Parser.push`         | `parse.py`  |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.4% |     518 | `_format_str_once` | `__init__.py` |

##### `(garbage collector)` (`<unknown>`)

|    % | Samples | Callee         | Location   |
| ---: | ------: | -------------- | ---------- |
| 0.2% |       1 | `hug_power_op` | `trans.py` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                               | Location                        |
| -----: | ------: | ------------------------------------ | ------------------------------- |
| 100.0% |      41 | `_find_and_load_unlocked`            | `<frozen importlib._bootstrap>` |
|   7.3% |       3 | `_HierarchicalLockManager.__enter__` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee     | Location      |
| -----: | ------: | ---------- | ------------- |
| 100.0% |      41 | `<module>` | `__init__.py` |
|  29.3% |      12 | `<module>` | `nodes.py`    |
|  29.3% |      12 | `<module>` | `comments.py` |
|  17.1% |       7 | `<module>` | `cache.py`    |
|  17.1% |       7 | `<module>` | `files.py`    |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      41 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  26.8% |      11 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |      41 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   2.4% |       1 | `module_from_spec`                | `<frozen importlib._bootstrap>`          |
|   2.4% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |      41 | `_load_unlocked` | `<frozen importlib._bootstrap>` |
|   4.9% |       2 | `_find_spec`     | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |      41 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |      41 | `_get_module_details` | `<frozen runpy>`                |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee              | Location                                 |
| ----: | ------: | ------------------- | ---------------------------------------- |
| 90.9% |      10 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_get_module_lock` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       3 | `(garbage collector)` | `<unknown>` |

##### `_HierarchicalLockManager.__enter__` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee             | Location                        |
| -----: | ------: | ------------------ | ------------------------------- |
| 100.0% |       3 | `_get_module_lock` | `<frozen importlib._bootstrap>` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee         | Location                                 |
| ----: | ------: | -------------- | ---------------------------------------- |
| 50.0% |       1 | `_path_isfile` | `<frozen importlib._bootstrap_external>` |
| 50.0% |       1 | `_path_stat`   | `<frozen importlib._bootstrap_external>` |

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

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `_run_code` ← `_run_module_as_main`

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 22.9% |     275 | `(garbage collector)` ← `convert` (`pytree.py`) ← `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  8.2% |      98 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  6.2% |      74 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  4.9% |      59 | `(garbage collector)` ← `Leaf.prefix` (`pytree.py`) ← `Line.append` (`lines.py`) ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_power` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` |
|  4.8% |      58 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  4.0% |      48 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  3.5% |      42 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.3% |      28 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.1% |      13 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.1% |      13 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.0% |      12 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.9% |      11 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.9% |      11 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.9% |      11 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.7% |       9 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.7% |       8 | `Parser.push` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.6% |       7 | `EmptyLineTracker.maybe_empty_lines` (`lines.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.5% |       6 | `(garbage collector)` ← `Base.__new__` (`pytree.py`) ← `convert` ← `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.5% |       6 | `Line.append` (`lines.py`) ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                    |
|  0.5% |       6 | `check_stability_and_equivalence` (`__init__.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

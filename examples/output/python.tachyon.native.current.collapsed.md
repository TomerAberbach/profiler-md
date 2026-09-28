# Sampling profile

Collected 1,049 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 64.4% |     676 |
| Garbage collector | 34.0% |     357 |
| Standard library  |  1.5% |      16 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                         | Location                                 |
| ----: | ------: | -------------------------------- | ---------------------------------------- |
| 34.0% |     357 | `(garbage collector)`            | `<unknown>`                              |
| 15.2% |     159 | `Parser._addtoken`               | `parse.py`                               |
|  8.9% |      93 | `get_features_used`              | `__init__.py`                            |
|  5.1% |      54 | `Driver.parse_tokens`            | `driver.py`                              |
|  4.0% |      42 | `parse`                          | `ast.py`                                 |
|  3.2% |      34 | `generate_tokens`                | `tokenize.py`                            |
|  3.1% |      32 | `Visitor.visit`                  | `nodes.py`                               |
|  2.5% |      26 | `_stringify_ast`                 | `parsing.py`                             |
|  1.5% |      16 | `Parser.addtoken`                | `parse.py`                               |
|  1.4% |      15 | `normalize_invisible_parens`     | `linegen.py`                             |
|  1.2% |      13 | `Line.append`                    | `lines.py`                               |
|  1.0% |      11 | `Parser.shift`                   | `parse.py`                               |
|  1.0% |      10 | `Parser.pop`                     | `parse.py`                               |
|  1.0% |      10 | `convert_one_fmt_off_pair`       | `comments.py`                            |
|  0.9% |       9 | `Parser.push`                    | `parse.py`                               |
|  0.9% |       9 | `_compile_bytecode`              | `<frozen importlib._bootstrap_external>` |
|  0.8% |       8 | `LineGenerator.visit_default`    | `linegen.py`                             |
|  0.8% |       8 | `_stringify_ast_with_new_parent` | `parsing.py`                             |
|  0.8% |       8 | `whitespace`                     | `nodes.py`                               |
|  0.7% |       7 | `assert_equivalent`              | `__init__.py`                            |

#### Categories

##### Ours

|     % | Samples | Function                         | Location      |
| ----: | ------: | -------------------------------- | ------------- |
| 15.2% |     159 | `Parser._addtoken`               | `parse.py`    |
|  8.9% |      93 | `get_features_used`              | `__init__.py` |
|  5.1% |      54 | `Driver.parse_tokens`            | `driver.py`   |
|  4.0% |      42 | `parse`                          | `ast.py`      |
|  3.2% |      34 | `generate_tokens`                | `tokenize.py` |
|  3.1% |      32 | `Visitor.visit`                  | `nodes.py`    |
|  2.5% |      26 | `_stringify_ast`                 | `parsing.py`  |
|  1.5% |      16 | `Parser.addtoken`                | `parse.py`    |
|  1.4% |      15 | `normalize_invisible_parens`     | `linegen.py`  |
|  1.2% |      13 | `Line.append`                    | `lines.py`    |
|  1.0% |      11 | `Parser.shift`                   | `parse.py`    |
|  1.0% |      10 | `Parser.pop`                     | `parse.py`    |
|  1.0% |      10 | `convert_one_fmt_off_pair`       | `comments.py` |
|  0.9% |       9 | `Parser.push`                    | `parse.py`    |
|  0.8% |       8 | `LineGenerator.visit_default`    | `linegen.py`  |
|  0.8% |       8 | `_stringify_ast_with_new_parent` | `parsing.py`  |
|  0.8% |       8 | `whitespace`                     | `nodes.py`    |
|  0.7% |       7 | `assert_equivalent`              | `__init__.py` |
|  0.6% |       6 | `transform_line`                 | `linegen.py`  |
|  0.6% |       6 | `convert`                        | `pytree.py`   |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 34.0% |     357 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                            | Location                                 |
| ---: | ------: | ----------------------------------- | ---------------------------------------- |
| 0.9% |       9 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
| 0.3% |       3 | `_call_with_frames_removed`         | `<frozen importlib._bootstrap>`          |
| 0.1% |       1 | `_path_isfile`                      | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `_path_stat`                        | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `FileLoader.get_data`               | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `BufferedIncrementalDecoder.decode` | `<frozen codecs>`                        |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 18.9% |      30 | `parse.py:316` |
| 17.0% |      27 | `parse.py:299` |
|  7.5% |      12 | `parse.py:285` |
|  7.5% |      12 | `parse.py:286` |
|  6.9% |      11 | `parse.py:293` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 24.7% |      23 | `__init__.py:1314` |
| 12.9% |      12 | `__init__.py:1403` |
|  9.7% |       9 | `__init__.py:1415` |
|  8.6% |       8 | `__init__.py:1346` |
|  7.5% |       7 | `__init__.py:1419` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 55.6% |      30 | `driver.py:162` |
| 27.8% |      15 | `driver.py:128` |
|  5.6% |       3 | `driver.py:172` |
|  1.9% |       1 | `driver.py:129` |
|  1.9% |       1 | `driver.py:147` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      42 | `ast.py:46` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 26.5% |       9 | `tokenize.py:864` |
| 23.5% |       8 | `tokenize.py:613` |
| 11.8% |       4 | `tokenize.py:900` |
|  5.9% |       2 | `tokenize.py:961` |
|  2.9% |       1 | `tokenize.py:876` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 59.4% |      19 | `nodes.py:174` |
| 25.0% |       8 | `nodes.py:172` |
| 12.5% |       4 | `nodes.py:152` |
|  3.1% |       1 | `nodes.py:170` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 57.7% |      15 | `parsing.py:222` |
| 26.9% |       7 | `parsing.py:225` |
|  7.7% |       2 | `parsing.py:195` |
|  3.8% |       1 | `parsing.py:205` |
|  3.8% |       1 | `parsing.py:248` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 93.8% |      15 | `parse.py:240` |
|  6.3% |       1 | `parse.py:233` |

##### `normalize_invisible_parens` (`linegen.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 53.3% |       8 | `linegen.py:1448` |
|  6.7% |       1 | `linegen.py:1370` |
|  6.7% |       1 | `linegen.py:1439` |
|  6.7% |       1 | `linegen.py:1438` |
|  6.7% |       1 | `linegen.py:1367` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location      |
| ----: | ------: | ------------- |
| 53.8% |       7 | `lines.py:84` |
| 30.8% |       4 | `lines.py:78` |
|  7.7% |       1 | `lines.py:85` |
|  7.7% |       1 | `lines.py:90` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 90.9% |      10 | `parse.py:369` |
|  9.1% |       1 | `parse.py:372` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 50.0% |       5 | `parse.py:392` |
| 30.0% |       3 | `parse.py:396` |
| 10.0% |       1 | `parse.py:394` |
| 10.0% |       1 | `parse.py:395` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 60.0% |       6 | `comments.py:184` |
| 20.0% |       2 | `comments.py:186` |
| 20.0% |       2 | `comments.py:188` |

##### `Parser.push` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 44.4% |       4 | `parse.py:383` |
| 44.4% |       4 | `parse.py:382` |
| 11.1% |       1 | `parse.py:381` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       9 | `<frozen importlib._bootstrap_external>:500` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 50.0% |       4 | `linegen.py:158` |
| 25.0% |       2 | `linegen.py:157` |
| 12.5% |       1 | `linegen.py:151` |
| 12.5% |       1 | `linegen.py:138` |

##### `_stringify_ast_with_new_parent` (`parsing.py`)

|      % | Samples | Location         |
| -----: | ------: | ---------------- |
| 100.0% |       8 | `parsing.py:178` |

##### `whitespace` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 50.0% |       4 | `nodes.py:212` |
| 12.5% |       1 | `nodes.py:202` |
| 12.5% |       1 | `nodes.py:375` |
| 12.5% |       1 | `nodes.py:287` |
| 12.5% |       1 | `nodes.py:192` |

##### `assert_equivalent` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 57.1% |       4 | `__init__.py:1532` |
| 42.9% |       3 | `__init__.py:1533` |

##### `transform_line` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 33.3% |       2 | `linegen.py:601` |
| 16.7% |       1 | `linegen.py:639` |
| 16.7% |       1 | `linegen.py:642` |
| 16.7% |       1 | `linegen.py:704` |
| 16.7% |       1 | `linegen.py:714` |

##### `convert` (`pytree.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 50.0% |       3 | `pytree.py:484` |
| 33.3% |       2 | `pytree.py:492` |
| 16.7% |       1 | `pytree.py:490` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       3 | `<frozen importlib._bootstrap>:549` |

##### `_path_isfile` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:166` |

##### `_path_stat` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:152` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:922` |

##### `BufferedIncrementalDecoder.decode` (`<frozen codecs>`)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       1 | `<frozen codecs>:325` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 65.8% |     235 | `Parser._addtoken`                | `parse.py`  |
| 12.9% |      46 | `Line.clone`                      | `lines.py`  |
|  2.5% |       9 | `Node.__init__`                   | `pytree.py` |
|  2.5% |       9 | `__create_fn__.<locals>.__init__` | `<string>`  |
|  2.0% |       7 | `Driver.parse_tokens`             | `driver.py` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                | Location      |
| ----: | ------: | --------------------- | ------------- |
| 96.2% |     153 | `Parser.addtoken`     | `parse.py`    |
|  2.5% |       4 | `TokenProxy.__next__` | `driver.py`   |
|  0.6% |       1 | `(native)`            | `<unknown>`   |
|  0.6% |       1 | `Logger.debug`        | `__init__.py` |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |      93 | `detect_target_versions` | `__init__.py` |

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      54 | `Driver.parse_string` | `driver.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      42 | `_parse_single_version` | `parsing.py` |

##### `generate_tokens` (`tokenize.py`)

|      % | Samples | Caller     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |      34 | `(native)` | `<unknown>` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 59.4% |      19 | `Visitor.visit_default`       | `nodes.py`   |
| 31.3% |      10 | `LineGenerator.visit_stmt`    | `linegen.py` |
|  9.4% |       3 | `LineGenerator.visit_funcdef` | `linegen.py` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Caller                           | Location     |
| ----: | ------: | -------------------------------- | ------------ |
| 80.8% |      21 | `_stringify_ast_with_new_parent` | `parsing.py` |
| 19.2% |       5 | `(native)`                       | `<unknown>`  |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      16 | `Driver.parse_tokens` | `driver.py` |

##### `normalize_invisible_parens` (`linegen.py`)

|      % | Samples | Caller                     | Location     |
| -----: | ------: | -------------------------- | ------------ |
| 100.0% |      15 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `Line.append` (`lines.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 76.9% |      10 | `LineGenerator.visit_default` | `linegen.py` |
| 15.4% |       2 | `bracket_split_build_line`    | `linegen.py` |
|  7.7% |       1 | `hug_power_op`                | `trans.py`   |

##### `Parser.shift` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      11 | `Parser._addtoken` | `parse.py` |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      10 | `Parser._addtoken` | `parse.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|      % | Samples | Caller              | Location      |
| -----: | ------: | ------------------- | ------------- |
| 100.0% |      10 | `normalize_fmt_off` | `comments.py` |

##### `Parser.push` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |       9 | `Parser._addtoken` | `parse.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       9 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Caller                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 75.0% |       6 | `Visitor.visit`                   | `nodes.py`   |
| 12.5% |       1 | `LineGenerator.visit_simple_stmt` | `linegen.py` |
| 12.5% |       1 | `LineGenerator.visit_power`       | `linegen.py` |

##### `_stringify_ast_with_new_parent` (`parsing.py`)

|      % | Samples | Caller           | Location     |
| -----: | ------: | ---------------- | ------------ |
| 100.0% |       8 | `_stringify_ast` | `parsing.py` |

##### `whitespace` (`nodes.py`)

|     % | Samples | Caller          | Location   |
| ----: | ------: | --------------- | ---------- |
| 87.5% |       7 | `Line.append`   | `lines.py` |
| 12.5% |       1 | `Visitor.visit` | `nodes.py` |

##### `assert_equivalent` (`__init__.py`)

|      % | Samples | Caller                            | Location      |
| -----: | ------: | --------------------------------- | ------------- |
| 100.0% |       7 | `check_stability_and_equivalence` | `__init__.py` |

##### `transform_line` (`linegen.py`)

|     % | Samples | Caller             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 83.3% |       5 | `_format_str_once` | `__init__.py` |
| 16.7% |       1 | `run_transformer`  | `linegen.py`  |

##### `convert` (`pytree.py`)

|     % | Samples | Caller         | Location    |
| ----: | ------: | -------------- | ----------- |
| 66.7% |       4 | `Parser.shift` | `parse.py`  |
| 16.7% |       1 | `Parser.pop`   | `parse.py`  |
| 16.7% |       1 | `(native)`     | `<unknown>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % | Samples | Caller                              | Location                                 |
| ----: | ------: | ----------------------------------- | ---------------------------------------- |
| 66.7% |       2 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
| 33.3% |       1 | `ExtensionFileLoader.exec_module`   | `<frozen importlib._bootstrap_external>` |

##### `_path_isfile` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       1 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `_path_stat` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       1 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       1 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `BufferedIncrementalDecoder.decode` (`<frozen codecs>`)

|      % | Samples | Caller     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |       1 | `(native)` | `<unknown>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                         | Location         |
| -----: | ------: | -------------------------------- | ---------------- |
| 100.0% |   1,049 | `(native)`                       | `<unknown>`      |
| 100.0% |   1,049 | `_run_code`                      | `<frozen runpy>` |
| 100.0% |   1,049 | `run_module`                     | `<frozen runpy>` |
| 100.0% |   1,049 | `_run_module_as_main`            | `<frozen runpy>` |
|  97.1% |   1,019 | `format_file_in_place`           | `__init__.py`    |
|  97.1% |   1,019 | `reformat_one`                   | `__init__.py`    |
|  97.1% |   1,019 | `main`                           | `__init__.py`    |
|  97.1% |   1,019 | `pass_context.<locals>.new_func` | `decorators.py`  |
|  97.1% |   1,019 | `Context.invoke`                 | `core.py`        |
|  97.1% |   1,019 | `Command.invoke`                 | `core.py`        |
|  97.1% |   1,019 | `Command.main`                   | `core.py`        |
|  97.1% |   1,019 | `Command.__call__`               | `core.py`        |
|  97.1% |   1,019 | `patched_main`                   | `__init__.py`    |
|  97.1% |   1,019 | `<module>`                       | `__main__.py`    |
|  97.1% |   1,019 | `_run_module_code`               | `<frozen runpy>` |
|  96.9% |   1,017 | `format_file_contents`           | `__init__.py`    |
|  87.5% |     918 | `_format_str_once`               | `__init__.py`    |
|  54.5% |     572 | `Driver.parse_tokens`            | `driver.py`      |
|  54.5% |     572 | `Driver.parse_string`            | `driver.py`      |
|  54.5% |     572 | `lib2to3_parse`                  | `parsing.py`     |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 97.1% |   1,019 | `format_file_in_place`            | `__init__.py`   |
| 97.1% |   1,019 | `reformat_one`                    | `__init__.py`   |
| 97.1% |   1,019 | `main`                            | `__init__.py`   |
| 97.1% |   1,019 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 97.1% |   1,019 | `Context.invoke`                  | `core.py`       |
| 97.1% |   1,019 | `Command.invoke`                  | `core.py`       |
| 97.1% |   1,019 | `Command.main`                    | `core.py`       |
| 97.1% |   1,019 | `Command.__call__`                | `core.py`       |
| 97.1% |   1,019 | `patched_main`                    | `__init__.py`   |
| 97.1% |   1,019 | `<module>`                        | `__main__.py`   |
| 96.9% |   1,017 | `format_file_contents`            | `__init__.py`   |
| 87.5% |     918 | `_format_str_once`                | `__init__.py`   |
| 54.5% |     572 | `Driver.parse_tokens`             | `driver.py`     |
| 54.5% |     572 | `Driver.parse_string`             | `driver.py`     |
| 54.5% |     572 | `lib2to3_parse`                   | `parsing.py`    |
| 49.2% |     516 | `check_stability_and_equivalence` | `__init__.py`   |
| 47.8% |     501 | `format_str`                      | `__init__.py`   |
| 45.5% |     477 | `Parser.addtoken`                 | `parse.py`      |
| 43.1% |     452 | `Parser._addtoken`                | `parse.py`      |
| 40.4% |     424 | `assert_stable`                   | `__init__.py`   |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 34.0% |     357 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                            | Location                                 |
| -----: | ------: | ----------------------------------- | ---------------------------------------- |
| 100.0% |   1,049 | `_run_code`                         | `<frozen runpy>`                         |
| 100.0% |   1,049 | `run_module`                        | `<frozen runpy>`                         |
| 100.0% |   1,049 | `_run_module_as_main`               | `<frozen runpy>`                         |
|  97.1% |   1,019 | `_run_module_code`                  | `<frozen runpy>`                         |
|   2.9% |      30 | `_LoaderBasics.exec_module`         | `<frozen importlib._bootstrap_external>` |
|   2.9% |      30 | `_load_unlocked`                    | `<frozen importlib._bootstrap>`          |
|   2.9% |      30 | `_find_and_load_unlocked`           | `<frozen importlib._bootstrap>`          |
|   2.9% |      30 | `_find_and_load`                    | `<frozen importlib._bootstrap>`          |
|   2.9% |      30 | `_call_with_frames_removed`         | `<frozen importlib._bootstrap>`          |
|   2.9% |      30 | `_get_module_details`               | `<frozen runpy>`                         |
|   1.0% |      10 | `SourceLoader.get_code`             | `<frozen importlib._bootstrap_external>` |
|   0.9% |       9 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
|   0.6% |       6 | `_handle_fromlist`                  | `<frozen importlib._bootstrap>`          |
|   0.2% |       2 | `FileFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
|   0.2% |       2 | `PathFinder._get_spec`              | `<frozen importlib._bootstrap_external>` |
|   0.2% |       2 | `PathFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
|   0.2% |       2 | `_find_spec`                        | `<frozen importlib._bootstrap>`          |
|   0.2% |       2 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
|   0.2% |       2 | `module_from_spec`                  | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `_path_isfile`                      | `<frozen importlib._bootstrap_external>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(native)` (`<unknown>`)

|      % | Samples | Callee                | Location         |
| -----: | ------: | --------------------- | ---------------- |
| 100.0% |   1,049 | `run_module`          | `<frozen runpy>` |
| 100.0% |   1,049 | `_run_module_as_main` | `<frozen runpy>` |
|  97.1% |   1,019 | `Context.invoke`      | `core.py`        |
|  97.1% |   1,019 | `Command.main`        | `core.py`        |
|  97.1% |   1,019 | `Command.__call__`    | `core.py`        |

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |   1,049 | `(native)` | `<unknown>` |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 97.1% |   1,019 | `_run_module_code`    | `<frozen runpy>` |
|  2.9% |      30 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,049 | `_run_code` | `<frozen runpy>` |

##### `format_file_in_place` (`__init__.py`)

|     % | Samples | Callee                 | Location      |
| ----: | ------: | ---------------------- | ------------- |
| 99.8% |   1,017 | `format_file_contents` | `__init__.py` |
|  0.1% |       1 | `decode_bytes`         | `__init__.py` |

##### `reformat_one` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |   1,019 | `format_file_in_place` | `__init__.py` |

##### `main` (`__init__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |   1,019 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |   1,019 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |   1,019 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |   1,019 | `(native)` | `<unknown>` |

##### `Command.main` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |   1,019 | `Command.invoke` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |   1,019 | `(native)` | `<unknown>` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |   1,019 | `(native)` | `<unknown>` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |   1,019 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,019 | `_run_code` | `<frozen runpy>` |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 50.7% |     516 | `check_stability_and_equivalence` | `__init__.py` |
| 49.3% |     501 | `format_str`                      | `__init__.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                   | Location      |
| ----: | ------: | ------------------------ | ------------- |
| 62.3% |     572 | `lib2to3_parse`          | `parsing.py`  |
| 14.9% |     137 | `Visitor.visit`          | `nodes.py`    |
| 10.1% |      93 | `detect_target_versions` | `__init__.py` |
|  9.4% |      86 | `transform_line`         | `linegen.py`  |
|  1.2% |      11 | `normalize_fmt_off`      | `comments.py` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                | Location      |
| ----: | ------: | --------------------- | ------------- |
| 83.4% |     477 | `Parser.addtoken`     | `parse.py`    |
|  5.8% |      33 | `(native)`            | `<unknown>`   |
|  1.2% |       7 | `(garbage collector)` | `<unknown>`   |
|  0.2% |       1 | `Logger.debug`        | `__init__.py` |

##### `Driver.parse_string` (`driver.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     572 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     572 | `Driver.parse_string` | `driver.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 82.2% |     424 | `assert_stable`     | `__init__.py` |
| 16.9% |      87 | `assert_equivalent` | `__init__.py` |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.0% |     496 | `_format_str_once` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location    |
| ----: | ------: | ------------------ | ----------- |
| 93.5% |     446 | `Parser._addtoken` | `parse.py`  |
|  2.3% |      11 | `(native)`         | `<unknown>` |
|  0.8% |       4 | `Parser.classify`  | `parse.py`  |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 52.0% |     235 | `(garbage collector)` | `<unknown>` |
|  5.8% |      26 | `Parser.shift`        | `parse.py`  |
|  4.9% |      22 | `Parser.pop`          | `parse.py`  |
|  2.0% |       9 | `Parser.push`         | `parse.py`  |
|  0.2% |       1 | `(native)`            | `<unknown>` |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.5% |     422 | `_format_str_once` | `__init__.py` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      30 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  33.3% |      10 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |      30 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   6.7% |       2 | `module_from_spec`                | `<frozen importlib._bootstrap>`          |
|   3.3% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |      30 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
|   6.7% |       2 | `_find_spec`                | `<frozen importlib._bootstrap>` |
|   3.3% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |      30 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |      30 | `(native)` | `<unknown>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location         |
| -----: | ------: | --------------------- | ---------------- |
| 100.0% |      30 | `(native)`            | `<unknown>`      |
| 100.0% |      30 | `_get_module_details` | `<frozen runpy>` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                | Location                                 |
| ----: | ------: | --------------------- | ---------------------------------------- |
| 90.0% |       9 | `_compile_bytecode`   | `<frozen importlib._bootstrap_external>` |
| 10.0% |       1 | `FileLoader.get_data` | `<frozen importlib._bootstrap_external>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

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

##### `ExtensionFileLoader.create_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `module_from_spec` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                              | Location                                 |
| -----: | ------: | ----------------------------------- | ---------------------------------------- |
| 100.0% |       2 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `(native)` ← `Command.invoke` (`core.py`) ← `Command.main` ← `(native)` ← `Command.__call__` (`core.py`) ← `(native)` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `(native)` ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `(native)` ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main` ← `(native)`

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 21.7% |     228 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                       |
| 10.1% |     106 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                      |
|  6.1% |      64 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                          |
|  4.5% |      47 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                               |
|  4.4% |      46 | `(garbage collector)` ← `Line.clone` (`lines.py`) ← `hug_power_op` (`trans.py`) ← `(native)` ← `_hugging_power_ops_line_to_string` (`linegen.py`) ← `transform_line` ← `(native)` ← `run_transformer` (`linegen.py`) ← `transform_line` ← `_format_str_once` (`__init__.py`) ← `format_str` |
|  4.0% |      42 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                         |
|  3.9% |      41 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                            |
|  2.8% |      29 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                   |
|  1.2% |      13 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                     |
|  1.0% |      11 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                           |
|  1.0% |      11 | `generate_tokens` (`tokenize.py`) ← `(native)` ← `TokenProxy.__next__` (`driver.py`) ← `(native)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                        |
|  1.0% |      10 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                     |
|  0.9% |       9 | `generate_tokens` (`tokenize.py`) ← `(native)` ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                          |
|  0.8% |       8 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                       |
|  0.7% |       7 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                              |
|  0.7% |       7 | `(garbage collector)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                    |
|  0.7% |       7 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                     |
|  0.7% |       7 | `_stringify_ast` (`parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `(native)` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`    |
|  0.7% |       7 | `convert_one_fmt_off_pair` (`comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                        |
|  0.7% |       7 | `generate_tokens` (`tokenize.py`) ← `(native)` ← `TokenProxy.__next__` (`driver.py`) ← `(native)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` |

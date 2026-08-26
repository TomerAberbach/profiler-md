# Sampling profile

Collected 981 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 68.0% |     667 |
| Garbage collector | 30.8% |     302 |
| Standard library  |  1.2% |      12 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                      | Location      |
| ----: | ------: | ----------------------------- | ------------- |
| 30.8% |     302 | `(garbage collector)`         | `<unknown>`   |
| 15.5% |     152 | `Parser._addtoken`            | `parse.py`    |
|  9.6% |      94 | `get_features_used`           | `__init__.py` |
|  5.2% |      51 | `Driver.parse_tokens`         | `driver.py`   |
|  4.5% |      44 | `parse`                       | `ast.py`      |
|  3.3% |      32 | `generate_tokens`             | `tokenize.py` |
|  2.4% |      24 | `Visitor.visit`               | `nodes.py`    |
|  1.8% |      18 | `Parser.shift`                | `parse.py`    |
|  1.8% |      18 | `Parser.pop`                  | `parse.py`    |
|  1.7% |      17 | `_stringify_ast`              | `parsing.py`  |
|  1.3% |      13 | `Parser.addtoken`             | `parse.py`    |
|  1.3% |      13 | `Parser.push`                 | `parse.py`    |
|  1.2% |      12 | `Line.append`                 | `lines.py`    |
|  1.1% |      11 | `convert_one_fmt_off_pair`    | `comments.py` |
|  1.0% |      10 | `normalize_invisible_parens`  | `linegen.py`  |
|  0.9% |       9 | `_format_str_once`            | `__init__.py` |
|  0.9% |       9 | `LineGenerator.visit_stmt`    | `linegen.py`  |
|  0.9% |       9 | `Visitor.visit_default`       | `nodes.py`    |
|  0.9% |       9 | `LineGenerator.visit_default` | `linegen.py`  |
|  0.8% |       8 | `assert_equivalent`           | `__init__.py` |

#### Categories

##### Ours

|     % | Samples | Function                             | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 15.5% |     152 | `Parser._addtoken`                   | `parse.py`    |
|  9.6% |      94 | `get_features_used`                  | `__init__.py` |
|  5.2% |      51 | `Driver.parse_tokens`                | `driver.py`   |
|  4.5% |      44 | `parse`                              | `ast.py`      |
|  3.3% |      32 | `generate_tokens`                    | `tokenize.py` |
|  2.4% |      24 | `Visitor.visit`                      | `nodes.py`    |
|  1.8% |      18 | `Parser.shift`                       | `parse.py`    |
|  1.8% |      18 | `Parser.pop`                         | `parse.py`    |
|  1.7% |      17 | `_stringify_ast`                     | `parsing.py`  |
|  1.3% |      13 | `Parser.addtoken`                    | `parse.py`    |
|  1.3% |      13 | `Parser.push`                        | `parse.py`    |
|  1.2% |      12 | `Line.append`                        | `lines.py`    |
|  1.1% |      11 | `convert_one_fmt_off_pair`           | `comments.py` |
|  1.0% |      10 | `normalize_invisible_parens`         | `linegen.py`  |
|  0.9% |       9 | `_format_str_once`                   | `__init__.py` |
|  0.9% |       9 | `LineGenerator.visit_stmt`           | `linegen.py`  |
|  0.9% |       9 | `Visitor.visit_default`              | `nodes.py`    |
|  0.9% |       9 | `LineGenerator.visit_default`        | `linegen.py`  |
|  0.8% |       8 | `assert_equivalent`                  | `__init__.py` |
|  0.8% |       8 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 30.8% |     302 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                             | Location                                 |
| ---: | ------: | ------------------------------------ | ---------------------------------------- |
| 0.7% |       7 | `_compile_bytecode`                  | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `_call_with_frames_removed`          | `<frozen importlib._bootstrap>`          |
| 0.1% |       1 | `_HierarchicalLockManager.__enter__` | `<frozen importlib._bootstrap>`          |
| 0.1% |       1 | `_verbose_message`                   | `<frozen importlib._bootstrap>`          |
| 0.1% |       1 | `PathFinder._get_spec`               | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `_ModuleLock.acquire`                | `<frozen importlib._bootstrap>`          |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 19.7% |      30 | `parse.py:311` |
| 18.4% |      28 | `parse.py:328` |
| 10.5% |      16 | `parse.py:298` |
|  9.2% |      14 | `parse.py:305` |
|  7.9% |      12 | `parse.py:303` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 25.5% |      24 | `__init__.py:1335` |
| 18.1% |      17 | `__init__.py:1424` |
| 13.8% |      13 | `__init__.py:1440` |
|  6.4% |       6 | `__init__.py:1418` |
|  6.4% |       6 | `__init__.py:1414` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 64.7% |      33 | `driver.py:162` |
| 25.5% |      13 | `driver.py:128` |
|  5.9% |       3 | `driver.py:151` |
|  3.9% |       2 | `driver.py:161` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      44 | `ast.py:46` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 43.8% |      14 | `tokenize.py:875`  |
| 21.9% |       7 | `tokenize.py:624`  |
|  6.3% |       2 | `tokenize.py:896`  |
|  6.3% |       2 | `tokenize.py:781`  |
|  3.1% |       1 | `tokenize.py:1080` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 54.2% |      13 | `nodes.py:185` |
| 29.2% |       7 | `nodes.py:183` |
| 12.5% |       3 | `nodes.py:163` |
|  4.2% |       1 | `nodes.py:181` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 72.2% |      13 | `parse.py:381` |
| 11.1% |       2 | `parse.py:383` |
| 11.1% |       2 | `parse.py:379` |
|  5.6% |       1 | `parse.py:384` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 61.1% |      11 | `parse.py:404` |
| 16.7% |       3 | `parse.py:408` |
| 11.1% |       2 | `parse.py:405` |
|  5.6% |       1 | `parse.py:403` |
|  5.6% |       1 | `parse.py:406` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 52.9% |       9 | `parsing.py:214` |
| 11.8% |       2 | `parsing.py:217` |
| 11.8% |       2 | `parsing.py:185` |
|  5.9% |       1 | `parsing.py:233` |
|  5.9% |       1 | `parsing.py:244` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 92.3% |      12 | `parse.py:252` |
|  7.7% |       1 | `parse.py:245` |

##### `Parser.push` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 38.5% |       5 | `parse.py:396` |
| 23.1% |       3 | `parse.py:395` |
| 23.1% |       3 | `parse.py:393` |
| 15.4% |       2 | `parse.py:394` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 50.0% |       6 | `lines.py:89`  |
| 25.0% |       3 | `lines.py:95`  |
|  8.3% |       1 | `lines.py:76`  |
|  8.3% |       1 | `lines.py:91`  |
|  8.3% |       1 | `lines.py:102` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 54.5% |       6 | `comments.py:184` |
| 36.4% |       4 | `comments.py:186` |
|  9.1% |       1 | `comments.py:188` |

##### `normalize_invisible_parens` (`linegen.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 50.0% |       5 | `linegen.py:1432` |
| 10.0% |       1 | `linegen.py:1384` |
| 10.0% |       1 | `linegen.py:1401` |
| 10.0% |       1 | `linegen.py:1406` |
| 10.0% |       1 | `linegen.py:1339` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 66.7% |       6 | `__init__.py:1268` |
| 22.2% |       2 | `__init__.py:1271` |
| 11.1% |       1 | `__init__.py:1274` |

##### `LineGenerator.visit_stmt` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 88.9% |       8 | `linegen.py:220` |
| 11.1% |       1 | `linegen.py:199` |

##### `Visitor.visit_default` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 77.8% |       7 | `nodes.py:191` |
| 22.2% |       2 | `nodes.py:187` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 66.7% |       6 | `linegen.py:158` |
| 22.2% |       2 | `linegen.py:157` |
| 11.1% |       1 | `linegen.py:134` |

##### `assert_equivalent` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 50.0% |       4 | `__init__.py:1546` |
| 50.0% |       4 | `__init__.py:1547` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 62.5% |       5 | `lines.py:571` |
| 12.5% |       1 | `lines.py:584` |
| 12.5% |       1 | `lines.py:603` |
| 12.5% |       1 | `lines.py:606` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       7 | `<frozen importlib._bootstrap_external>:500` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap>:549` |

##### `_HierarchicalLockManager.__enter__` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap>:458` |

##### `_verbose_message` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap>:554` |

##### `PathFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:1244` |

##### `_ModuleLock.acquire` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap>:311` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                | Location      |
| ----: | ------: | --------------------- | ------------- |
| 63.2% |     191 | `Driver.parse_tokens` | `driver.py`   |
| 11.9% |      36 | `is_vararg`           | `nodes.py`    |
|  3.0% |       9 | `Parser._addtoken`    | `parse.py`    |
|  2.6% |       8 | `Base.__new__`        | `pytree.py`   |
|  2.6% |       8 | `generate_comments`   | `comments.py` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 98.7% |     150 | `Parser.addtoken`     | `parse.py`  |
|  0.7% |       1 | `TokenProxy.__next__` | `driver.py` |
|  0.7% |       1 | `(native)`            | `<unknown>` |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |      94 | `detect_target_versions` | `__init__.py` |

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      51 | `Driver.parse_string` | `driver.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      44 | `_parse_single_version` | `parsing.py` |

##### `generate_tokens` (`tokenize.py`)

|      % | Samples | Caller     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |      32 | `(native)` | `<unknown>` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 75.0% |      18 | `Visitor.visit_default`       | `nodes.py`   |
| 20.8% |       5 | `LineGenerator.visit_stmt`    | `linegen.py` |
|  4.2% |       1 | `LineGenerator.visit_funcdef` | `linegen.py` |

##### `Parser.shift` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      18 | `Parser._addtoken` | `parse.py` |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      18 | `Parser._addtoken` | `parse.py` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Caller                           | Location     |
| ----: | ------: | -------------------------------- | ------------ |
| 82.4% |      14 | `_stringify_ast_with_new_parent` | `parsing.py` |
| 17.6% |       3 | `(native)`                       | `<unknown>`  |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      13 | `Driver.parse_tokens` | `driver.py` |

##### `Parser.push` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      13 | `Parser._addtoken` | `parse.py` |

##### `Line.append` (`lines.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 75.0% |       9 | `LineGenerator.visit_default` | `linegen.py` |
| 16.7% |       2 | `bracket_split_build_line`    | `linegen.py` |
|  8.3% |       1 | `hug_power_op`                | `trans.py`   |

##### `convert_one_fmt_off_pair` (`comments.py`)

|      % | Samples | Caller              | Location      |
| -----: | ------: | ------------------- | ------------- |
| 100.0% |      11 | `normalize_fmt_off` | `comments.py` |

##### `normalize_invisible_parens` (`linegen.py`)

|      % | Samples | Caller                     | Location     |
| -----: | ------: | -------------------------- | ------------ |
| 100.0% |      10 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Caller          | Location      |
| ----: | ------: | --------------- | ------------- |
| 55.6% |       5 | `format_str`    | `__init__.py` |
| 44.4% |       4 | `assert_stable` | `__init__.py` |

##### `LineGenerator.visit_stmt` (`linegen.py`)

|     % | Samples | Caller          | Location    |
| ----: | ------: | --------------- | ----------- |
| 88.9% |       8 | `Visitor.visit` | `nodes.py`  |
| 11.1% |       1 | `(native)`      | `<unknown>` |

##### `Visitor.visit_default` (`nodes.py`)

|      % | Samples | Caller                        | Location     |
| -----: | ------: | ----------------------------- | ------------ |
| 100.0% |       9 | `LineGenerator.visit_default` | `linegen.py` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Caller                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 66.7% |       6 | `Visitor.visit`                   | `nodes.py`   |
| 33.3% |       3 | `LineGenerator.visit_simple_stmt` | `linegen.py` |

##### `assert_equivalent` (`__init__.py`)

|      % | Samples | Caller                            | Location      |
| -----: | ------: | --------------------------------- | ------------- |
| 100.0% |       8 | `check_stability_and_equivalence` | `__init__.py` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |       8 | `_format_str_once` | `__init__.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       7 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_HierarchicalLockManager.__enter__` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `_verbose_message` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       1 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `PathFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       1 | `PathFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `_ModuleLock.acquire` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller                               | Location                        |
| -----: | ------: | ------------------------------------ | ------------------------------- |
| 100.0% |       1 | `_HierarchicalLockManager.__enter__` | `<frozen importlib._bootstrap>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                         | Location         |
| -----: | ------: | -------------------------------- | ---------------- |
| 100.0% |     981 | `(native)`                       | `<unknown>`      |
| 100.0% |     981 | `_run_code`                      | `<frozen runpy>` |
| 100.0% |     981 | `run_module`                     | `<frozen runpy>` |
| 100.0% |     981 | `_run_module_as_main`            | `<frozen runpy>` |
|  97.7% |     958 | `main`                           | `__init__.py`    |
|  97.7% |     958 | `pass_context.<locals>.new_func` | `decorators.py`  |
|  97.7% |     958 | `Context.invoke`                 | `core.py`        |
|  97.7% |     958 | `Command.invoke`                 | `core.py`        |
|  97.7% |     958 | `Command.main`                   | `core.py`        |
|  97.7% |     958 | `Command.__call__`               | `core.py`        |
|  97.7% |     958 | `patched_main`                   | `__init__.py`    |
|  97.7% |     958 | `<module>`                       | `__main__.py`    |
|  97.7% |     958 | `_run_module_code`               | `<frozen runpy>` |
|  97.6% |     957 | `reformat_one`                   | `__init__.py`    |
|  97.5% |     956 | `format_file_contents`           | `__init__.py`    |
|  97.5% |     956 | `format_file_in_place`           | `__init__.py`    |
|  88.6% |     869 | `_format_str_once`               | `__init__.py`    |
|  53.3% |     523 | `Driver.parse_tokens`            | `driver.py`      |
|  53.3% |     523 | `Driver.parse_string`            | `driver.py`      |
|  53.3% |     523 | `lib2to3_parse`                  | `parsing.py`     |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 97.7% |     958 | `main`                            | `__init__.py`   |
| 97.7% |     958 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 97.7% |     958 | `Context.invoke`                  | `core.py`       |
| 97.7% |     958 | `Command.invoke`                  | `core.py`       |
| 97.7% |     958 | `Command.main`                    | `core.py`       |
| 97.7% |     958 | `Command.__call__`                | `core.py`       |
| 97.7% |     958 | `patched_main`                    | `__init__.py`   |
| 97.7% |     958 | `<module>`                        | `__main__.py`   |
| 97.6% |     957 | `reformat_one`                    | `__init__.py`   |
| 97.5% |     956 | `format_file_contents`            | `__init__.py`   |
| 97.5% |     956 | `format_file_in_place`            | `__init__.py`   |
| 88.6% |     869 | `_format_str_once`                | `__init__.py`   |
| 53.3% |     523 | `Driver.parse_tokens`             | `driver.py`     |
| 53.3% |     523 | `Driver.parse_string`             | `driver.py`     |
| 53.3% |     523 | `lib2to3_parse`                   | `parsing.py`    |
| 50.7% |     497 | `check_stability_and_equivalence` | `__init__.py`   |
| 46.8% |     459 | `format_str`                      | `__init__.py`   |
| 42.4% |     416 | `assert_stable`                   | `__init__.py`   |
| 25.6% |     251 | `Parser.addtoken`                 | `parse.py`      |
| 23.3% |     229 | `Parser._addtoken`                | `parse.py`      |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 30.8% |     302 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                             | Location                                 |
| -----: | ------: | ------------------------------------ | ---------------------------------------- |
| 100.0% |     981 | `_run_code`                          | `<frozen runpy>`                         |
| 100.0% |     981 | `run_module`                         | `<frozen runpy>`                         |
| 100.0% |     981 | `_run_module_as_main`                | `<frozen runpy>`                         |
|  97.7% |     958 | `_run_module_code`                   | `<frozen runpy>`                         |
|   2.3% |      23 | `_LoaderBasics.exec_module`          | `<frozen importlib._bootstrap_external>` |
|   2.3% |      23 | `_load_unlocked`                     | `<frozen importlib._bootstrap>`          |
|   2.3% |      23 | `_find_and_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|   2.3% |      23 | `_find_and_load`                     | `<frozen importlib._bootstrap>`          |
|   2.3% |      23 | `_call_with_frames_removed`          | `<frozen importlib._bootstrap>`          |
|   2.3% |      23 | `_get_module_details`                | `<frozen runpy>`                         |
|   0.8% |       8 | `_compile_bytecode`                  | `<frozen importlib._bootstrap_external>` |
|   0.8% |       8 | `SourceLoader.get_code`              | `<frozen importlib._bootstrap_external>` |
|   0.7% |       7 | `_handle_fromlist`                   | `<frozen importlib._bootstrap>`          |
|   0.2% |       2 | `_HierarchicalLockManager.__enter__` | `<frozen importlib._bootstrap>`          |
|   0.2% |       2 | `PathFinder._get_spec`               | `<frozen importlib._bootstrap_external>` |
|   0.2% |       2 | `PathFinder.find_spec`               | `<frozen importlib._bootstrap_external>` |
|   0.2% |       2 | `_find_spec`                         | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `ExtensionFileLoader.exec_module`    | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `_verbose_message`                   | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `FileFinder.find_spec`               | `<frozen importlib._bootstrap_external>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(native)` (`<unknown>`)

|      % | Samples | Callee                | Location         |
| -----: | ------: | --------------------- | ---------------- |
| 100.0% |     981 | `run_module`          | `<frozen runpy>` |
| 100.0% |     981 | `_run_module_as_main` | `<frozen runpy>` |
|  97.7% |     958 | `Context.invoke`      | `core.py`        |
|  97.7% |     958 | `Command.main`        | `core.py`        |
|  97.7% |     958 | `Command.__call__`    | `core.py`        |

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |     981 | `(native)` | `<unknown>` |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 97.7% |     958 | `_run_module_code`    | `<frozen runpy>` |
|  2.3% |      23 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     981 | `_run_code` | `<frozen runpy>` |

##### `main` (`__init__.py`)

|     % | Samples | Callee         | Location      |
| ----: | ------: | -------------- | ------------- |
| 99.9% |     957 | `reformat_one` | `__init__.py` |
|  0.1% |       1 | `get_sources`  | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |     958 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |     958 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |     958 | `(native)` | `<unknown>` |

##### `Command.main` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     958 | `Command.invoke` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |     958 | `(native)` | `<unknown>` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |     958 | `(native)` | `<unknown>` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     958 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     958 | `_run_code` | `<frozen runpy>` |

##### `reformat_one` (`__init__.py`)

|     % | Samples | Callee                 | Location      |
| ----: | ------: | ---------------------- | ------------- |
| 99.9% |     956 | `format_file_in_place` | `__init__.py` |
|  0.1% |       1 | `Cache.write`          | `cache.py`    |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 52.0% |     497 | `check_stability_and_equivalence` | `__init__.py` |
| 48.0% |     459 | `format_str`                      | `__init__.py` |

##### `format_file_in_place` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |     956 | `format_file_contents` | `__init__.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                   | Location      |
| ----: | ------: | ------------------------ | ------------- |
| 60.2% |     523 | `lib2to3_parse`          | `parsing.py`  |
| 18.6% |     162 | `Visitor.visit`          | `nodes.py`    |
| 10.8% |      94 | `detect_target_versions` | `__init__.py` |
|  5.6% |      49 | `transform_line`         | `linegen.py`  |
|  1.5% |      13 | `normalize_fmt_off`      | `comments.py` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 48.0% |     251 | `Parser.addtoken`     | `parse.py`  |
| 36.5% |     191 | `(garbage collector)` | `<unknown>` |
|  5.7% |      30 | `(native)`            | `<unknown>` |

##### `Driver.parse_string` (`driver.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     523 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     523 | `Driver.parse_string` | `driver.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 83.7% |     416 | `assert_stable`     | `__init__.py` |
| 15.5% |      77 | `assert_equivalent` | `__init__.py` |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.1% |     455 | `_format_str_once` | `__init__.py` |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.5% |     414 | `_format_str_once` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location    |
| ----: | ------: | ------------------ | ----------- |
| 90.4% |     227 | `Parser._addtoken` | `parse.py`  |
|  4.4% |      11 | `(native)`         | `<unknown>` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 12.7% |      29 | `Parser.shift`        | `parse.py`  |
| 11.4% |      26 | `Parser.pop`          | `parse.py`  |
|  5.7% |      13 | `Parser.push`         | `parse.py`  |
|  3.9% |       9 | `(garbage collector)` | `<unknown>` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      23 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  34.8% |       8 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |      23 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   4.3% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |      23 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
|   8.7% |       2 | `_find_spec`                | `<frozen importlib._bootstrap>` |
|   4.3% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                               | Location                        |
| -----: | ------: | ------------------------------------ | ------------------------------- |
| 100.0% |      23 | `_find_and_load_unlocked`            | `<frozen importlib._bootstrap>` |
|   8.7% |       2 | `_HierarchicalLockManager.__enter__` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |      23 | `(native)` | `<unknown>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location         |
| -----: | ------: | --------------------- | ---------------- |
| 100.0% |      23 | `(native)`            | `<unknown>`      |
| 100.0% |      23 | `_get_module_details` | `<frozen runpy>` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 12.5% |       1 | `(garbage collector)` | `<unknown>` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee              | Location                                 |
| -----: | ------: | ------------------- | ---------------------------------------- |
| 100.0% |       8 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       7 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_HierarchicalLockManager.__enter__` (`<frozen importlib._bootstrap>`)

|     % | Samples | Callee                | Location                        |
| ----: | ------: | --------------------- | ------------------------------- |
| 50.0% |       1 | `_ModuleLock.acquire` | `<frozen importlib._bootstrap>` |

##### `PathFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                 | Location                                 |
| ----: | ------: | ---------------------- | ---------------------------------------- |
| 50.0% |       1 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `PathFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       2 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       2 | `PathFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `ExtensionFileLoader.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee             | Location                        |
| -----: | ------: | ------------------ | ------------------------------- |
| 100.0% |       1 | `_verbose_message` | `<frozen importlib._bootstrap>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `(native)` ← `Command.invoke` (`core.py`) ← `Command.main` ← `(native)` ← `Command.__call__` (`core.py`) ← `(native)` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `(native)` ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `(native)` ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main` ← `(native)`

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.4% |     190 | `(garbage collector)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  9.9% |      97 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  6.3% |      62 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  5.4% |      53 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  4.5% |      44 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  3.9% |      38 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  3.7% |      36 | `(garbage collector)` ← `is_vararg` (`nodes.py`) ← `is_split_before_delimiter` (`brackets.py`) ← `BracketTracker.mark` ← `max_delimiter_priority_in_atom` ← `maybe_make_parens_invisible_in_atom` (`linegen.py`) ← `normalize_invisible_parens` ← `LineGenerator.visit_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` |
|  3.3% |      32 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.4% |      14 | `generate_tokens` (`tokenize.py`) ← `(native)` ← `TokenProxy.__next__` (`driver.py`) ← `(native)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.4% |      14 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.3% |      13 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.1% |      11 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.0% |      10 | `Parser.push` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.9% |       9 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.8% |       8 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.8% |       8 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.7% |       7 | `generate_tokens` (`tokenize.py`) ← `(native)` ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.7% |       7 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.6% |       6 | `EmptyLineTracker.maybe_empty_lines` (`lines.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.6% |       6 | `convert_one_fmt_off_pair` (`comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

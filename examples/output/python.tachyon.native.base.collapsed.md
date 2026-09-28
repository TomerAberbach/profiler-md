# Sampling profile

Collected 897 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 67.2% |     603 |
| Garbage collector | 31.3% |     281 |
| Standard library  |  1.4% |      13 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                             | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 31.3% |     281 | `(garbage collector)`                | `<unknown>`   |
| 15.1% |     135 | `Parser._addtoken`                   | `parse.py`    |
|  9.3% |      83 | `get_features_used`                  | `__init__.py` |
|  4.2% |      38 | `Driver.parse_tokens`                | `driver.py`   |
|  4.1% |      37 | `parse`                              | `ast.py`      |
|  3.5% |      31 | `generate_tokens`                    | `tokenize.py` |
|  3.1% |      28 | `Visitor.visit`                      | `nodes.py`    |
|  2.0% |      18 | `Parser.pop`                         | `parse.py`    |
|  2.0% |      18 | `Line.append`                        | `lines.py`    |
|  1.7% |      15 | `_stringify_ast`                     | `parsing.py`  |
|  1.6% |      14 | `Parser.addtoken`                    | `parse.py`    |
|  1.4% |      13 | `convert_one_fmt_off_pair`           | `comments.py` |
|  1.0% |       9 | `_format_str_once`                   | `__init__.py` |
|  1.0% |       9 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |
|  1.0% |       9 | `LineGenerator.visit_default`        | `linegen.py`  |
|  0.9% |       8 | `Parser.shift`                       | `parse.py`    |
|  0.9% |       8 | `normalize_invisible_parens`         | `linegen.py`  |
|  0.7% |       6 | `transform_line`                     | `linegen.py`  |
|  0.7% |       6 | `assert_equivalent`                  | `__init__.py` |
|  0.7% |       6 | `Parser.push`                        | `parse.py`    |

#### Categories

##### Ours

|     % | Samples | Function                             | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 15.1% |     135 | `Parser._addtoken`                   | `parse.py`    |
|  9.3% |      83 | `get_features_used`                  | `__init__.py` |
|  4.2% |      38 | `Driver.parse_tokens`                | `driver.py`   |
|  4.1% |      37 | `parse`                              | `ast.py`      |
|  3.5% |      31 | `generate_tokens`                    | `tokenize.py` |
|  3.1% |      28 | `Visitor.visit`                      | `nodes.py`    |
|  2.0% |      18 | `Parser.pop`                         | `parse.py`    |
|  2.0% |      18 | `Line.append`                        | `lines.py`    |
|  1.7% |      15 | `_stringify_ast`                     | `parsing.py`  |
|  1.6% |      14 | `Parser.addtoken`                    | `parse.py`    |
|  1.4% |      13 | `convert_one_fmt_off_pair`           | `comments.py` |
|  1.0% |       9 | `_format_str_once`                   | `__init__.py` |
|  1.0% |       9 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |
|  1.0% |       9 | `LineGenerator.visit_default`        | `linegen.py`  |
|  0.9% |       8 | `Parser.shift`                       | `parse.py`    |
|  0.9% |       8 | `normalize_invisible_parens`         | `linegen.py`  |
|  0.7% |       6 | `transform_line`                     | `linegen.py`  |
|  0.7% |       6 | `assert_equivalent`                  | `__init__.py` |
|  0.7% |       6 | `Parser.push`                        | `parse.py`    |
|  0.7% |       6 | `line_to_string`                     | `lines.py`    |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 31.3% |     281 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                    | Location                                 |
| ---: | ------: | --------------------------- | ---------------------------------------- |
| 0.3% |       3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| 0.2% |       2 | `FileLoader.get_data`       | `<frozen importlib._bootstrap_external>` |
| 0.2% |       2 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
| 0.2% |       2 | `FileFinder.find_spec`      | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
| 0.1% |       1 | `_path_is_mode_type`        | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `_path_join`                | `<frozen importlib._bootstrap_external>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 20.7% |      28 | `parse.py:328` |
| 20.0% |      27 | `parse.py:311` |
| 11.9% |      16 | `parse.py:305` |
|  7.4% |      10 | `parse.py:298` |
|  7.4% |      10 | `parse.py:315` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 26.5% |      22 | `__init__.py:1335` |
| 14.5% |      12 | `__init__.py:1424` |
| 10.8% |       9 | `__init__.py:1430` |
|  9.6% |       8 | `__init__.py:1414` |
|  7.2% |       6 | `__init__.py:1440` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 65.8% |      25 | `driver.py:162` |
| 26.3% |      10 | `driver.py:128` |
|  5.3% |       2 | `driver.py:161` |
|  2.6% |       1 | `driver.py:172` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      37 | `ast.py:46` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 58.1% |      18 | `tokenize.py:624` |
| 19.4% |       6 | `tokenize.py:875` |
|  3.2% |       1 | `tokenize.py:995` |
|  3.2% |       1 | `tokenize.py:907` |
|  3.2% |       1 | `tokenize.py:911` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 50.0% |      14 | `nodes.py:185` |
| 39.3% |      11 | `nodes.py:183` |
|  3.6% |       1 | `nodes.py:176` |
|  3.6% |       1 | `nodes.py:163` |
|  3.6% |       1 | `nodes.py:181` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 50.0% |       9 | `parse.py:404` |
| 22.2% |       4 | `parse.py:403` |
| 16.7% |       3 | `parse.py:408` |
| 11.1% |       2 | `parse.py:406` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 55.6% |      10 | `lines.py:95`  |
| 16.7% |       3 | `lines.py:89`  |
| 11.1% |       2 | `lines.py:101` |
|  5.6% |       1 | `lines.py:91`  |
|  5.6% |       1 | `lines.py:94`  |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 60.0% |       9 | `parsing.py:214` |
| 13.3% |       2 | `parsing.py:189` |
| 13.3% |       2 | `parsing.py:217` |
|  6.7% |       1 | `parsing.py:197` |
|  6.7% |       1 | `parsing.py:240` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Location       |
| -----: | ------: | -------------- |
| 100.0% |      14 | `parse.py:252` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 53.8% |       7 | `comments.py:186` |
| 46.2% |       6 | `comments.py:184` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 66.7% |       6 | `__init__.py:1268` |
| 11.1% |       1 | `__init__.py:1269` |
| 11.1% |       1 | `__init__.py:1271` |
| 11.1% |       1 | `__init__.py:1274` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 88.9% |       8 | `lines.py:571` |
| 11.1% |       1 | `lines.py:584` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 88.9% |       8 | `linegen.py:158` |
| 11.1% |       1 | `linegen.py:155` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 62.5% |       5 | `parse.py:381` |
| 25.0% |       2 | `parse.py:383` |
| 12.5% |       1 | `parse.py:384` |

##### `normalize_invisible_parens` (`linegen.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 62.5% |       5 | `linegen.py:1432` |
| 25.0% |       2 | `linegen.py:1431` |
| 12.5% |       1 | `linegen.py:1351` |

##### `transform_line` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 66.7% |       4 | `linegen.py:714` |
| 33.3% |       2 | `linegen.py:639` |

##### `assert_equivalent` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 66.7% |       4 | `__init__.py:1546` |
| 33.3% |       2 | `__init__.py:1547` |

##### `Parser.push` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 50.0% |       3 | `parse.py:396` |
| 16.7% |       1 | `parse.py:386` |
| 16.7% |       1 | `parse.py:394` |
| 16.7% |       1 | `parse.py:395` |

##### `line_to_string` (`lines.py`)

|      % | Samples | Location        |
| -----: | ------: | --------------- |
| 100.0% |       6 | `lines.py:1078` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       3 | `<frozen importlib._bootstrap>:549` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       2 | `<frozen importlib._bootstrap_external>:923` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       2 | `<frozen importlib._bootstrap_external>:500` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       2 | `<frozen importlib._bootstrap_external>:1360` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:872` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       1 | `<frozen importlib._bootstrap>:1298` |

##### `_path_is_mode_type` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:158` |

##### `_path_join` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:133` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 65.1% |     183 | `Parser._addtoken`                | `parse.py`  |
| 13.5% |      38 | `Line.clone`                      | `lines.py`  |
|  2.8% |       8 | `__create_fn__.<locals>.__init__` | `<string>`  |
|  1.8% |       5 | `convert`                         | `pytree.py` |
|  1.8% |       5 | `Base.__new__`                    | `pytree.py` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 97.0% |     131 | `Parser.addtoken`     | `parse.py`  |
|  1.5% |       2 | `(native)`            | `<unknown>` |
|  1.5% |       2 | `TokenProxy.__next__` | `driver.py` |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |      83 | `detect_target_versions` | `__init__.py` |

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      38 | `Driver.parse_string` | `driver.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      37 | `_parse_single_version` | `parsing.py` |

##### `generate_tokens` (`tokenize.py`)

|      % | Samples | Caller     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |      31 | `(native)` | `<unknown>` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 78.6% |      22 | `Visitor.visit_default`       | `nodes.py`   |
| 10.7% |       3 | `LineGenerator.visit_funcdef` | `linegen.py` |
| 10.7% |       3 | `LineGenerator.visit_stmt`    | `linegen.py` |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      18 | `Parser._addtoken` | `parse.py` |

##### `Line.append` (`lines.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 88.9% |      16 | `LineGenerator.visit_default` | `linegen.py` |
|  5.6% |       1 | `bracket_split_build_line`    | `linegen.py` |
|  5.6% |       1 | `hug_power_op`                | `trans.py`   |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Caller                           | Location     |
| ----: | ------: | -------------------------------- | ------------ |
| 93.3% |      14 | `_stringify_ast_with_new_parent` | `parsing.py` |
|  6.7% |       1 | `(native)`                       | `<unknown>`  |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      14 | `Driver.parse_tokens` | `driver.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|      % | Samples | Caller              | Location      |
| -----: | ------: | ------------------- | ------------- |
| 100.0% |      13 | `normalize_fmt_off` | `comments.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Caller          | Location      |
| ----: | ------: | --------------- | ------------- |
| 66.7% |       6 | `format_str`    | `__init__.py` |
| 33.3% |       3 | `assert_stable` | `__init__.py` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |       9 | `_format_str_once` | `__init__.py` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Caller                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 77.8% |       7 | `Visitor.visit`                   | `nodes.py`   |
| 22.2% |       2 | `LineGenerator.visit_simple_stmt` | `linegen.py` |

##### `Parser.shift` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |       8 | `Parser._addtoken` | `parse.py` |

##### `normalize_invisible_parens` (`linegen.py`)

|      % | Samples | Caller                     | Location     |
| -----: | ------: | -------------------------- | ------------ |
| 100.0% |       8 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `transform_line` (`linegen.py`)

|     % | Samples | Caller             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 83.3% |       5 | `_format_str_once` | `__init__.py` |
| 16.7% |       1 | `(native)`         | `<unknown>`   |

##### `assert_equivalent` (`__init__.py`)

|      % | Samples | Caller                            | Location      |
| -----: | ------: | --------------------------------- | ------------- |
| 100.0% |       6 | `check_stability_and_equivalence` | `__init__.py` |

##### `Parser.push` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |       6 | `Parser._addtoken` | `parse.py` |

##### `line_to_string` (`lines.py`)

|     % | Samples | Caller                              | Location     |
| ----: | ------: | ----------------------------------- | ------------ |
| 83.3% |       5 | `transform_line`                    | `linegen.py` |
| 16.7% |       1 | `_hugging_power_ops_line_to_string` | `linegen.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % | Samples | Caller                              | Location                                 |
| ----: | ------: | ----------------------------------- | ---------------------------------------- |
| 66.7% |       2 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
| 33.3% |       1 | `ExtensionFileLoader.exec_module`   | `<frozen importlib._bootstrap_external>` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       2 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       2 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       2 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |       1 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `_path_is_mode_type` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller         | Location                                 |
| -----: | ------: | -------------- | ---------------------------------------- |
| 100.0% |       1 | `_path_isfile` | `<frozen importlib._bootstrap_external>` |

##### `_path_join` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       1 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                         | Location         |
| -----: | ------: | -------------------------------- | ---------------- |
| 100.0% |     897 | `(native)`                       | `<unknown>`      |
| 100.0% |     897 | `_run_code`                      | `<frozen runpy>` |
| 100.0% |     897 | `run_module`                     | `<frozen runpy>` |
| 100.0% |     897 | `_run_module_as_main`            | `<frozen runpy>` |
|  96.9% |     869 | `reformat_one`                   | `__init__.py`    |
|  96.9% |     869 | `main`                           | `__init__.py`    |
|  96.9% |     869 | `pass_context.<locals>.new_func` | `decorators.py`  |
|  96.9% |     869 | `Context.invoke`                 | `core.py`        |
|  96.9% |     869 | `Command.invoke`                 | `core.py`        |
|  96.9% |     869 | `Command.main`                   | `core.py`        |
|  96.9% |     869 | `Command.__call__`               | `core.py`        |
|  96.9% |     869 | `patched_main`                   | `__init__.py`    |
|  96.9% |     869 | `<module>`                       | `__main__.py`    |
|  96.9% |     869 | `_run_module_code`               | `<frozen runpy>` |
|  96.7% |     867 | `format_file_contents`           | `__init__.py`    |
|  96.7% |     867 | `format_file_in_place`           | `__init__.py`    |
|  88.3% |     792 | `_format_str_once`               | `__init__.py`    |
|  51.4% |     461 | `Driver.parse_string`            | `driver.py`      |
|  51.4% |     461 | `lib2to3_parse`                  | `parsing.py`     |
|  51.3% |     460 | `Driver.parse_tokens`            | `driver.py`      |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 96.9% |     869 | `reformat_one`                    | `__init__.py`   |
| 96.9% |     869 | `main`                            | `__init__.py`   |
| 96.9% |     869 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 96.9% |     869 | `Context.invoke`                  | `core.py`       |
| 96.9% |     869 | `Command.invoke`                  | `core.py`       |
| 96.9% |     869 | `Command.main`                    | `core.py`       |
| 96.9% |     869 | `Command.__call__`                | `core.py`       |
| 96.9% |     869 | `patched_main`                    | `__init__.py`   |
| 96.9% |     869 | `<module>`                        | `__main__.py`   |
| 96.7% |     867 | `format_file_contents`            | `__init__.py`   |
| 96.7% |     867 | `format_file_in_place`            | `__init__.py`   |
| 88.3% |     792 | `_format_str_once`                | `__init__.py`   |
| 51.4% |     461 | `Driver.parse_string`             | `driver.py`     |
| 51.4% |     461 | `lib2to3_parse`                   | `parsing.py`    |
| 51.3% |     460 | `Driver.parse_tokens`             | `driver.py`     |
| 49.4% |     443 | `check_stability_and_equivalence` | `__init__.py`   |
| 47.3% |     424 | `format_str`                      | `__init__.py`   |
| 42.5% |     381 | `Parser.addtoken`                 | `parse.py`      |
| 41.7% |     374 | `assert_stable`                   | `__init__.py`   |
| 40.8% |     366 | `Parser._addtoken`                | `parse.py`      |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 31.3% |     281 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                            | Location                                 |
| -----: | ------: | ----------------------------------- | ---------------------------------------- |
| 100.0% |     897 | `_run_code`                         | `<frozen runpy>`                         |
| 100.0% |     897 | `run_module`                        | `<frozen runpy>`                         |
| 100.0% |     897 | `_run_module_as_main`               | `<frozen runpy>`                         |
|  96.9% |     869 | `_run_module_code`                  | `<frozen runpy>`                         |
|   3.1% |      28 | `_LoaderBasics.exec_module`         | `<frozen importlib._bootstrap_external>` |
|   3.1% |      28 | `_load_unlocked`                    | `<frozen importlib._bootstrap>`          |
|   3.1% |      28 | `_find_and_load_unlocked`           | `<frozen importlib._bootstrap>`          |
|   3.1% |      28 | `_find_and_load`                    | `<frozen importlib._bootstrap>`          |
|   3.1% |      28 | `_call_with_frames_removed`         | `<frozen importlib._bootstrap>`          |
|   3.1% |      28 | `_get_module_details`               | `<frozen runpy>`                         |
|   0.8% |       7 | `SourceLoader.get_code`             | `<frozen importlib._bootstrap_external>` |
|   0.7% |       6 | `_handle_fromlist`                  | `<frozen importlib._bootstrap>`          |
|   0.4% |       4 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
|   0.4% |       4 | `FileFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
|   0.4% |       4 | `PathFinder._get_spec`              | `<frozen importlib._bootstrap_external>` |
|   0.4% |       4 | `PathFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
|   0.4% |       4 | `_find_spec`                        | `<frozen importlib._bootstrap>`          |
|   0.2% |       2 | `FileLoader.get_data`               | `<frozen importlib._bootstrap_external>` |
|   0.2% |       2 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
|   0.2% |       2 | `module_from_spec`                  | `<frozen importlib._bootstrap>`          |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(native)` (`<unknown>`)

|      % | Samples | Callee                | Location         |
| -----: | ------: | --------------------- | ---------------- |
| 100.0% |     897 | `run_module`          | `<frozen runpy>` |
| 100.0% |     897 | `_run_module_as_main` | `<frozen runpy>` |
|  96.9% |     869 | `Context.invoke`      | `core.py`        |
|  96.9% |     869 | `Command.main`        | `core.py`        |
|  96.9% |     869 | `Command.__call__`    | `core.py`        |

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |     897 | `(native)` | `<unknown>` |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 96.9% |     869 | `_run_module_code`    | `<frozen runpy>` |
|  3.1% |      28 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     897 | `_run_code` | `<frozen runpy>` |

##### `reformat_one` (`__init__.py`)

|     % | Samples | Callee                 | Location      |
| ----: | ------: | ---------------------- | ------------- |
| 99.8% |     867 | `format_file_in_place` | `__init__.py` |
|  0.1% |       1 | `Cache.is_changed`     | `cache.py`    |

##### `main` (`__init__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     869 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |     869 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |     869 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |     869 | `(native)` | `<unknown>` |

##### `Command.main` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     869 | `Command.invoke` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |     869 | `(native)` | `<unknown>` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |     869 | `(native)` | `<unknown>` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     869 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     869 | `_run_code` | `<frozen runpy>` |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 51.1% |     443 | `check_stability_and_equivalence` | `__init__.py` |
| 48.9% |     424 | `format_str`                      | `__init__.py` |

##### `format_file_in_place` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |     867 | `format_file_contents` | `__init__.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                               | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 58.2% |     461 | `lib2to3_parse`                      | `parsing.py`  |
| 14.9% |     118 | `Visitor.visit`                      | `nodes.py`    |
| 10.7% |      85 | `transform_line`                     | `linegen.py`  |
| 10.5% |      83 | `detect_target_versions`             | `__init__.py` |
|  1.9% |      15 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |

##### `Driver.parse_string` (`driver.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.8% |     460 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     461 | `Driver.parse_string` | `driver.py` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 82.8% |     381 | `Parser.addtoken`     | `parse.py`  |
|  8.0% |      37 | `(native)`            | `<unknown>` |
|  0.9% |       4 | `(garbage collector)` | `<unknown>` |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 84.4% |     374 | `assert_stable`     | `__init__.py` |
| 14.4% |      64 | `assert_equivalent` | `__init__.py` |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.1% |     420 | `_format_str_once` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location    |
| ----: | ------: | ------------------ | ----------- |
| 95.0% |     362 | `Parser._addtoken` | `parse.py`  |
|  1.3% |       5 | `(native)`         | `<unknown>` |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.5% |     372 | `_format_str_once` | `__init__.py` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 50.0% |     183 | `(garbage collector)` | `<unknown>` |
|  6.8% |      25 | `Parser.pop`          | `parse.py`  |
|  4.6% |      17 | `Parser.shift`        | `parse.py`  |
|  1.6% |       6 | `Parser.push`         | `parse.py`  |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      28 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  25.0% |       7 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |      28 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   7.1% |       2 | `module_from_spec`                | `<frozen importlib._bootstrap>`          |
|   3.6% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |      28 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
|  14.3% |       4 | `_find_spec`                | `<frozen importlib._bootstrap>` |
|   7.1% |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |      28 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |      28 | `(native)` | `<unknown>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location         |
| -----: | ------: | --------------------- | ---------------- |
| 100.0% |      28 | `(native)`            | `<unknown>`      |
| 100.0% |      28 | `_get_module_details` | `<frozen runpy>` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                | Location                                 |
| ----: | ------: | --------------------- | ---------------------------------------- |
| 57.1% |       4 | `_compile_bytecode`   | `<frozen importlib._bootstrap_external>` |
| 28.6% |       2 | `FileLoader.get_data` | `<frozen importlib._bootstrap_external>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 50.0% |       2 | `(garbage collector)` | `<unknown>` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee         | Location                                 |
| ----: | ------: | -------------- | ---------------------------------------- |
| 25.0% |       1 | `_path_isfile` | `<frozen importlib._bootstrap_external>` |
| 25.0% |       1 | `_path_join`   | `<frozen importlib._bootstrap_external>` |

##### `PathFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       4 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `PathFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       4 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       4 | `PathFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

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

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.8% |     178 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                            |
|  9.8% |      88 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                           |
|  5.9% |      53 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                               |
|  4.8% |      43 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                    |
|  4.2% |      38 | `(garbage collector)` ← `Line.clone` (`lines.py`) ← `hug_power_op` (`trans.py`) ← `(native)` ← `_hugging_power_ops_line_to_string` (`linegen.py`) ← `transform_line` ← `(native)` ← `run_transformer` (`linegen.py`) ← `transform_line` ← `_format_str_once` (`__init__.py`) ← `format_str`                      |
|  4.1% |      37 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                              |
|  3.3% |      30 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                        |
|  2.9% |      26 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                 |
|  1.6% |      14 | `generate_tokens` (`tokenize.py`) ← `(native)` ← `TokenProxy.__next__` (`driver.py`) ← `(native)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                             |
|  1.4% |      13 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                            |
|  1.3% |      12 | `generate_tokens` (`tokenize.py`) ← `(native)` ← `TokenProxy.__next__` (`driver.py`) ← `(native)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                      |
|  1.3% |      12 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                          |
|  1.3% |      12 | `convert_one_fmt_off_pair` (`comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                             |
|  1.1% |      10 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                |
|  0.8% |       7 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                          |
|  0.7% |       6 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                          |
|  0.7% |       6 | `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                |
|  0.6% |       5 | `check_stability_and_equivalence` (`__init__.py`)                                                                                                                                                                                                                                                                |
|  0.6% |       5 | `(garbage collector)` ← `convert` (`pytree.py`) ← `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` |
|  0.6% |       5 | `EmptyLineTracker.maybe_empty_lines` (`lines.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                     |

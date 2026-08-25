# Sampling profile

Collected 962 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 66.6% |     641 |
| Garbage collector | 30.9% |     297 |
| Standard library  |  2.5% |      24 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                      | Location                                 |
| ----: | ------: | ----------------------------- | ---------------------------------------- |
| 30.9% |     297 | `(garbage collector)`         | `<unknown>`                              |
| 15.8% |     152 | `Parser._addtoken`            | `parse.py`                               |
| 10.0% |      96 | `get_features_used`           | `__init__.py`                            |
|  4.7% |      45 | `Driver.parse_tokens`         | `driver.py`                              |
|  4.0% |      38 | `parse`                       | `ast.py`                                 |
|  2.9% |      28 | `generate_tokens`             | `tokenize.py`                            |
|  1.8% |      17 | `Parser.pop`                  | `parse.py`                               |
|  1.8% |      17 | `_stringify_ast`              | `parsing.py`                             |
|  1.6% |      15 | `Parser.addtoken`             | `parse.py`                               |
|  1.6% |      15 | `Visitor.visit`               | `nodes.py`                               |
|  1.4% |      13 | `Line.append`                 | `lines.py`                               |
|  1.2% |      12 | `convert_one_fmt_off_pair`    | `comments.py`                            |
|  1.1% |      11 | `assert_equivalent`           | `__init__.py`                            |
|  1.1% |      11 | `Parser.shift`                | `parse.py`                               |
|  1.1% |      11 | `LineGenerator.visit_default` | `linegen.py`                             |
|  1.1% |      11 | `_compile_bytecode`           | `<frozen importlib._bootstrap_external>` |
|  1.1% |      11 | `BracketTracker.mark`         | `brackets.py`                            |
|  1.0% |      10 | `_call_with_frames_removed`   | `<frozen importlib._bootstrap>`          |
|  0.9% |       9 | `line_to_string`              | `lines.py`                               |
|  0.8% |       8 | `_format_str_once`            | `__init__.py`                            |

#### Categories

##### Ours

|     % | Samples | Function                             | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 15.8% |     152 | `Parser._addtoken`                   | `parse.py`    |
| 10.0% |      96 | `get_features_used`                  | `__init__.py` |
|  4.7% |      45 | `Driver.parse_tokens`                | `driver.py`   |
|  4.0% |      38 | `parse`                              | `ast.py`      |
|  2.9% |      28 | `generate_tokens`                    | `tokenize.py` |
|  1.8% |      17 | `Parser.pop`                         | `parse.py`    |
|  1.8% |      17 | `_stringify_ast`                     | `parsing.py`  |
|  1.6% |      15 | `Parser.addtoken`                    | `parse.py`    |
|  1.6% |      15 | `Visitor.visit`                      | `nodes.py`    |
|  1.4% |      13 | `Line.append`                        | `lines.py`    |
|  1.2% |      12 | `convert_one_fmt_off_pair`           | `comments.py` |
|  1.1% |      11 | `assert_equivalent`                  | `__init__.py` |
|  1.1% |      11 | `Parser.shift`                       | `parse.py`    |
|  1.1% |      11 | `LineGenerator.visit_default`        | `linegen.py`  |
|  1.1% |      11 | `BracketTracker.mark`                | `brackets.py` |
|  0.9% |       9 | `line_to_string`                     | `lines.py`    |
|  0.8% |       8 | `_format_str_once`                   | `__init__.py` |
|  0.8% |       8 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |
|  0.6% |       6 | `Parser.push`                        | `parse.py`    |
|  0.6% |       6 | `_stringify_ast_with_new_parent`     | `parsing.py`  |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 30.9% |     297 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                    | Location                                 |
| ---: | ------: | --------------------------- | ---------------------------------------- |
| 1.1% |      11 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
| 1.0% |      10 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| 0.2% |       2 | `FileLoader.get_data`       | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 18.4% |      28 | `parse.py:328` |
| 13.2% |      20 | `parse.py:305` |
|  9.9% |      15 | `parse.py:298` |
|  9.2% |      14 | `parse.py:311` |
|  9.2% |      14 | `parse.py:293` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 17.7% |      17 | `__init__.py:1335` |
| 16.7% |      16 | `__init__.py:1424` |
| 12.5% |      12 | `__init__.py:1440` |
| 10.4% |      10 | `__init__.py:1436` |
|  8.3% |       8 | `__init__.py:1414` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 71.1% |      32 | `driver.py:162` |
| 15.6% |       7 | `driver.py:128` |
|  4.4% |       2 | `driver.py:151` |
|  4.4% |       2 | `driver.py:154` |
|  2.2% |       1 | `driver.py:152` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      38 | `ast.py:46` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 32.1% |       9 | `tokenize.py:875` |
| 17.9% |       5 | `tokenize.py:624` |
|  7.1% |       2 | `tokenize.py:634` |
|  7.1% |       2 | `tokenize.py:995` |
|  7.1% |       2 | `tokenize.py:907` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 58.8% |      10 | `parse.py:404` |
| 11.8% |       2 | `parse.py:406` |
| 11.8% |       2 | `parse.py:408` |
| 11.8% |       2 | `parse.py:403` |
|  5.9% |       1 | `parse.py:407` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 52.9% |       9 | `parsing.py:214` |
| 29.4% |       5 | `parsing.py:217` |
|  5.9% |       1 | `parsing.py:197` |
|  5.9% |       1 | `parsing.py:187` |
|  5.9% |       1 | `parsing.py:174` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Location       |
| -----: | ------: | -------------- |
| 100.0% |      15 | `parse.py:252` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 53.3% |       8 | `nodes.py:185` |
| 40.0% |       6 | `nodes.py:183` |
|  6.7% |       1 | `nodes.py:181` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 53.8% |       7 | `lines.py:95`  |
| 15.4% |       2 | `lines.py:89`  |
| 15.4% |       2 | `lines.py:76`  |
|  7.7% |       1 | `lines.py:91`  |
|  7.7% |       1 | `lines.py:102` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 66.7% |       8 | `comments.py:186` |
| 33.3% |       4 | `comments.py:184` |

##### `assert_equivalent` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 54.5% |       6 | `__init__.py:1547` |
| 45.5% |       5 | `__init__.py:1546` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 81.8% |       9 | `parse.py:381` |
| 18.2% |       2 | `parse.py:384` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 54.5% |       6 | `linegen.py:157` |
| 45.5% |       5 | `linegen.py:158` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |      11 | `<frozen importlib._bootstrap_external>:500` |

##### `BracketTracker.mark` (`brackets.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 27.3% |       3 | `brackets.py:112` |
| 18.2% |       2 | `brackets.py:114` |
|  9.1% |       1 | `brackets.py:128` |
|  9.1% |       1 | `brackets.py:126` |
|  9.1% |       1 | `brackets.py:123` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |      10 | `<frozen importlib._bootstrap>:549` |

##### `line_to_string` (`lines.py`)

|      % | Samples | Location        |
| -----: | ------: | --------------- |
| 100.0% |       9 | `lines.py:1078` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 37.5% |       3 | `__init__.py:1271` |
| 25.0% |       2 | `__init__.py:1268` |
| 25.0% |       2 | `__init__.py:1279` |
| 12.5% |       1 | `__init__.py:1287` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 62.5% |       5 | `lines.py:571` |
| 12.5% |       1 | `lines.py:594` |
| 12.5% |       1 | `lines.py:572` |
| 12.5% |       1 | `lines.py:584` |

##### `Parser.push` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 33.3% |       2 | `parse.py:395` |
| 33.3% |       2 | `parse.py:393` |
| 33.3% |       2 | `parse.py:396` |

##### `_stringify_ast_with_new_parent` (`parsing.py`)

|      % | Samples | Location         |
| -----: | ------: | ---------------- |
| 100.0% |       6 | `parsing.py:170` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       2 | `<frozen importlib._bootstrap_external>:922` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:872` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                       | Location      |
| ----: | ------: | ---------------------------- | ------------- |
| 59.3% |     176 | `Driver.parse_tokens`        | `driver.py`   |
| 13.5% |      40 | `StringTransformer.__init__` | `trans.py`    |
|  4.0% |      12 | `Parser._addtoken`           | `parse.py`    |
|  3.4% |      10 | `generate_comments`          | `comments.py` |
|  3.0% |       9 | `Base.__new__`               | `pytree.py`   |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 98.0% |     149 | `Parser.addtoken`     | `parse.py`  |
|  1.3% |       2 | `TokenProxy.__next__` | `driver.py` |
|  0.7% |       1 | `Driver.parse_tokens` | `driver.py` |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |      96 | `detect_target_versions` | `__init__.py` |

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      45 | `Driver.parse_string` | `driver.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      38 | `_parse_single_version` | `parsing.py` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Caller                      | Location    |
| ----: | ------: | --------------------------- | ----------- |
| 57.1% |      16 | `TokenProxy.__next__`       | `driver.py` |
| 39.3% |      11 | `Parser.addtoken`           | `parse.py`  |
|  3.6% |       1 | `ParserGenerator.parse_alt` | `pgen.py`   |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      17 | `Parser._addtoken` | `parse.py` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Caller                           | Location      |
| ----: | ------: | -------------------------------- | ------------- |
| 88.2% |      15 | `_stringify_ast_with_new_parent` | `parsing.py`  |
| 11.8% |       2 | `assert_equivalent`              | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      15 | `Driver.parse_tokens` | `driver.py` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 80.0% |      12 | `Visitor.visit_default`       | `nodes.py`   |
| 13.3% |       2 | `LineGenerator.visit_stmt`    | `linegen.py` |
|  6.7% |       1 | `LineGenerator.visit_funcdef` | `linegen.py` |

##### `Line.append` (`lines.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 76.9% |      10 | `LineGenerator.visit_default` | `linegen.py` |
| 15.4% |       2 | `hug_power_op`                | `trans.py`   |
|  7.7% |       1 | `bracket_split_build_line`    | `linegen.py` |

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

##### `LineGenerator.visit_default` (`linegen.py`)

|      % | Samples | Caller          | Location   |
| -----: | ------: | --------------- | ---------- |
| 100.0% |      11 | `Visitor.visit` | `nodes.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |      11 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `BracketTracker.mark` (`brackets.py`)

|     % | Samples | Caller                           | Location      |
| ----: | ------: | -------------------------------- | ------------- |
| 90.9% |      10 | `Line.append`                    | `lines.py`    |
|  9.1% |       1 | `max_delimiter_priority_in_atom` | `brackets.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % | Samples | Caller                            | Location                                 |
| ----: | ------: | --------------------------------- | ---------------------------------------- |
| 90.0% |       9 | `SourceLoader.source_to_code`     | `<frozen importlib._bootstrap_external>` |
| 10.0% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `line_to_string` (`lines.py`)

|      % | Samples | Caller           | Location     |
| -----: | ------: | ---------------- | ------------ |
| 100.0% |       9 | `transform_line` | `linegen.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Caller          | Location      |
| ----: | ------: | --------------- | ------------- |
| 62.5% |       5 | `format_str`    | `__init__.py` |
| 37.5% |       3 | `assert_stable` | `__init__.py` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |       8 | `_format_str_once` | `__init__.py` |

##### `Parser.push` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |       6 | `Parser._addtoken` | `parse.py` |

##### `_stringify_ast_with_new_parent` (`parsing.py`)

|      % | Samples | Caller           | Location     |
| -----: | ------: | ---------------- | ------------ |
| 100.0% |       6 | `_stringify_ast` | `parsing.py` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       2 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |       1 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                          | Location         |
| -----: | ------: | --------------------------------- | ---------------- |
| 100.0% |     962 | `_run_code`                       | `<frozen runpy>` |
| 100.0% |     962 | `run_module`                      | `<frozen runpy>` |
| 100.0% |     962 | `_run_module_as_main`             | `<frozen runpy>` |
|  95.1% |     915 | `Command.main`                    | `core.py`        |
|  95.1% |     915 | `Command.__call__`                | `core.py`        |
|  95.1% |     915 | `patched_main`                    | `__init__.py`    |
|  95.1% |     915 | `<module>`                        | `__main__.py`    |
|  95.1% |     915 | `_run_module_code`                | `<frozen runpy>` |
|  95.0% |     914 | `format_file_contents`            | `__init__.py`    |
|  95.0% |     914 | `format_file_in_place`            | `__init__.py`    |
|  95.0% |     914 | `reformat_one`                    | `__init__.py`    |
|  95.0% |     914 | `main`                            | `__init__.py`    |
|  95.0% |     914 | `pass_context.<locals>.new_func`  | `decorators.py`  |
|  95.0% |     914 | `Context.invoke`                  | `core.py`        |
|  95.0% |     914 | `Command.invoke`                  | `core.py`        |
|  85.9% |     826 | `_format_str_once`                | `__init__.py`    |
|  50.8% |     489 | `lib2to3_parse`                   | `parsing.py`     |
|  50.7% |     488 | `Driver.parse_tokens`             | `driver.py`      |
|  50.7% |     488 | `Driver.parse_string`             | `driver.py`      |
|  47.8% |     460 | `check_stability_and_equivalence` | `__init__.py`    |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 95.1% |     915 | `Command.main`                    | `core.py`       |
| 95.1% |     915 | `Command.__call__`                | `core.py`       |
| 95.1% |     915 | `patched_main`                    | `__init__.py`   |
| 95.1% |     915 | `<module>`                        | `__main__.py`   |
| 95.0% |     914 | `format_file_contents`            | `__init__.py`   |
| 95.0% |     914 | `format_file_in_place`            | `__init__.py`   |
| 95.0% |     914 | `reformat_one`                    | `__init__.py`   |
| 95.0% |     914 | `main`                            | `__init__.py`   |
| 95.0% |     914 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 95.0% |     914 | `Context.invoke`                  | `core.py`       |
| 95.0% |     914 | `Command.invoke`                  | `core.py`       |
| 85.9% |     826 | `_format_str_once`                | `__init__.py`   |
| 50.8% |     489 | `lib2to3_parse`                   | `parsing.py`    |
| 50.7% |     488 | `Driver.parse_tokens`             | `driver.py`     |
| 50.7% |     488 | `Driver.parse_string`             | `driver.py`     |
| 47.8% |     460 | `check_stability_and_equivalence` | `__init__.py`   |
| 47.2% |     454 | `format_str`                      | `__init__.py`   |
| 39.5% |     380 | `assert_stable`                   | `__init__.py`   |
| 25.6% |     246 | `Parser.addtoken`                 | `parse.py`      |
| 23.1% |     222 | `Parser._addtoken`                | `parse.py`      |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 30.9% |     297 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                          | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |     962 | `_run_code`                       | `<frozen runpy>`                         |
| 100.0% |     962 | `run_module`                      | `<frozen runpy>`                         |
| 100.0% |     962 | `_run_module_as_main`             | `<frozen runpy>`                         |
|  95.1% |     915 | `_run_module_code`                | `<frozen runpy>`                         |
|   4.9% |      47 | `_call_with_frames_removed`       | `<frozen importlib._bootstrap>`          |
|   4.9% |      47 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   4.9% |      47 | `_load_unlocked`                  | `<frozen importlib._bootstrap>`          |
|   4.9% |      47 | `_find_and_load_unlocked`         | `<frozen importlib._bootstrap>`          |
|   4.9% |      47 | `_find_and_load`                  | `<frozen importlib._bootstrap>`          |
|   4.9% |      47 | `_get_module_details`             | `<frozen runpy>`                         |
|   2.4% |      23 | `SourceLoader.get_code`           | `<frozen importlib._bootstrap_external>` |
|   1.1% |      11 | `_compile_bytecode`               | `<frozen importlib._bootstrap_external>` |
|   0.9% |       9 | `SourceLoader.source_to_code`     | `<frozen importlib._bootstrap_external>` |
|   0.3% |       3 | `_handle_fromlist`                | `<frozen importlib._bootstrap>`          |
|   0.2% |       2 | `FileLoader.get_data`             | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `_get_module_lock`                | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `_ModuleLockManager.__enter__`    | `<frozen importlib._bootstrap>`          |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |     962 | `run_module` | `<frozen runpy>` |
|  95.1% |     915 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 95.1% |     915 | `_run_module_code`    | `<frozen runpy>` |
|  4.9% |      47 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     962 | `_run_code` | `<frozen runpy>` |

##### `Command.main` (`core.py`)

|     % | Samples | Callee                 | Location  |
| ----: | ------: | ---------------------- | --------- |
| 99.9% |     914 | `Command.invoke`       | `core.py` |
|  0.1% |       1 | `Command.make_context` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |     915 | `Command.main` | `core.py` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee             | Location  |
| -----: | ------: | ------------------ | --------- |
| 100.0% |     915 | `Command.__call__` | `core.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     915 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     915 | `_run_code` | `<frozen runpy>` |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 50.3% |     460 | `check_stability_and_equivalence` | `__init__.py` |
| 49.7% |     454 | `format_str`                      | `__init__.py` |

##### `format_file_in_place` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |     914 | `format_file_contents` | `__init__.py` |

##### `reformat_one` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |     914 | `format_file_in_place` | `__init__.py` |

##### `main` (`__init__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     914 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |     914 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |     914 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     914 | `Context.invoke` | `core.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                   | Location      |
| ----: | ------: | ------------------------ | ------------- |
| 59.2% |     489 | `lib2to3_parse`          | `parsing.py`  |
| 13.8% |     114 | `Visitor.visit`          | `nodes.py`    |
| 11.6% |      96 | `detect_target_versions` | `__init__.py` |
|  9.9% |      82 | `transform_line`         | `linegen.py`  |
|  1.7% |      14 | `normalize_fmt_off`      | `comments.py` |

##### `lib2to3_parse` (`parsing.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.8% |     488 | `Driver.parse_string` | `driver.py` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 50.4% |     246 | `Parser.addtoken`     | `parse.py`  |
| 36.1% |     176 | `(garbage collector)` | `<unknown>` |
|  4.1% |      20 | `TokenProxy.__next__` | `driver.py` |
|  0.2% |       1 | `Parser._addtoken`    | `parse.py`  |

##### `Driver.parse_string` (`driver.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     488 | `Driver.parse_tokens` | `driver.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 82.6% |     380 | `assert_stable`     | `__init__.py` |
| 16.3% |      75 | `assert_equivalent` | `__init__.py` |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 98.9% |     449 | `_format_str_once` | `__init__.py` |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.2% |     377 | `_format_str_once` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 89.0% |     219 | `Parser._addtoken` | `parse.py`    |
|  4.5% |      11 | `generate_tokens`  | `tokenize.py` |
|  0.4% |       1 | `Parser.classify`  | `parse.py`    |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 13.5% |      30 | `Parser.pop`          | `parse.py`  |
|  9.9% |      22 | `Parser.shift`        | `parse.py`  |
|  5.4% |      12 | `(garbage collector)` | `<unknown>` |
|  2.7% |       6 | `Parser.push`         | `parse.py`  |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee     | Location      |
| -----: | ------: | ---------- | ------------- |
| 100.0% |      47 | `<module>` | `__init__.py` |
|  31.9% |      15 | `<module>` | `comments.py` |
|  29.8% |      14 | `<module>` | `nodes.py`    |
|  19.1% |       9 | `<module>` | `ranges.py`   |
|  14.9% |       7 | `<module>` | `files.py`    |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      47 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  48.9% |      23 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |      47 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   2.1% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |      47 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
|   2.1% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                         | Location                        |
| -----: | ------: | ------------------------------ | ------------------------------- |
| 100.0% |      47 | `_find_and_load_unlocked`      | `<frozen importlib._bootstrap>` |
|   2.1% |       1 | `__init__`                     | `__init__`                      |
|   2.1% |       1 | `_ModuleLockManager.__enter__` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |      47 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |      47 | `_get_module_details` | `<frozen runpy>`                |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                        | Location                                 |
| ----: | ------: | ----------------------------- | ---------------------------------------- |
| 47.8% |      11 | `_compile_bytecode`           | `<frozen importlib._bootstrap_external>` |
| 39.1% |       9 | `SourceLoader.source_to_code` | `<frozen importlib._bootstrap_external>` |
|  8.7% |       2 | `FileLoader.get_data`         | `<frozen importlib._bootstrap_external>` |

##### `SourceLoader.source_to_code` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       9 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `ExtensionFileLoader.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_get_module_lock` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       1 | `(garbage collector)` | `<unknown>` |

##### `_ModuleLockManager.__enter__` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee             | Location                        |
| -----: | ------: | ------------------ | ------------------------------- |
| 100.0% |       1 | `_get_module_lock` | `<frozen importlib._bootstrap>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>`) ← `_run_code` ← `_run_module_as_main`

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18.3% |     176 | `(garbage collector)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                              |
| 10.6% |     102 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                       |
|  6.4% |      62 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  4.9% |      47 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                |
|  4.0% |      38 | `(garbage collector)` ← `StringTransformer.__init__` (`trans.py`) ← `transform_line` (`linegen.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  4.0% |      38 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  3.5% |      34 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  3.1% |      30 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.6% |      15 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.1% |      11 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.0% |      10 | `convert_one_fmt_off_pair` (`comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.0% |      10 | `generate_tokens` (`tokenize.py`) ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                        |
|  1.0% |      10 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                 |
|  1.0% |      10 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                        |
|  0.9% |       9 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                      |
|  0.9% |       9 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.9% |       9 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                               |
|  0.8% |       8 | `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `SourceLoader.source_to_code` (`<frozen importlib._bootstrap_external>`) ← `SourceLoader.get_code` ← `_LoaderBasics.exec_module` ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`ranges.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details` |
|  0.7% |       7 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                 |
|  0.6% |       6 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                     |

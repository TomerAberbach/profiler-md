# Sampling profile

Collected 958 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 67.2% |     644 |
| Garbage collector | 31.5% |     302 |
| Standard library  |  1.3% |      12 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                             | Location                                 |
| ----: | ------: | ------------------------------------ | ---------------------------------------- |
| 31.5% |     302 | `(garbage collector)`                | `<unknown>`                              |
| 17.6% |     169 | `Parser._addtoken`                   | `parse.py`                               |
|  9.3% |      89 | `get_features_used`                  | `__init__.py`                            |
|  5.1% |      49 | `Driver.parse_tokens`                | `driver.py`                              |
|  4.0% |      38 | `parse`                              | `ast.py`                                 |
|  3.2% |      31 | `generate_tokens`                    | `tokenize.py`                            |
|  2.3% |      22 | `Line.append`                        | `lines.py`                               |
|  2.1% |      20 | `Visitor.visit`                      | `nodes.py`                               |
|  2.0% |      19 | `_stringify_ast`                     | `parsing.py`                             |
|  1.5% |      14 | `convert_one_fmt_off_pair`           | `comments.py`                            |
|  1.4% |      13 | `Parser.addtoken`                    | `parse.py`                               |
|  1.4% |      13 | `Parser.pop`                         | `parse.py`                               |
|  1.0% |      10 | `LineGenerator.visit_power`          | `linegen.py`                             |
|  1.0% |      10 | `_compile_bytecode`                  | `<frozen importlib._bootstrap_external>` |
|  1.0% |      10 | `normalize_invisible_parens`         | `linegen.py`                             |
|  0.9% |       9 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`                               |
|  0.8% |       8 | `Parser.shift`                       | `parse.py`                               |
|  0.8% |       8 | `LineGenerator.visit_default`        | `linegen.py`                             |
|  0.8% |       8 | `BracketTracker.mark`                | `brackets.py`                            |
|  0.7% |       7 | `assert_equivalent`                  | `__init__.py`                            |

#### Categories

##### Ours

|     % | Samples | Function                             | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 17.6% |     169 | `Parser._addtoken`                   | `parse.py`    |
|  9.3% |      89 | `get_features_used`                  | `__init__.py` |
|  5.1% |      49 | `Driver.parse_tokens`                | `driver.py`   |
|  4.0% |      38 | `parse`                              | `ast.py`      |
|  3.2% |      31 | `generate_tokens`                    | `tokenize.py` |
|  2.3% |      22 | `Line.append`                        | `lines.py`    |
|  2.1% |      20 | `Visitor.visit`                      | `nodes.py`    |
|  2.0% |      19 | `_stringify_ast`                     | `parsing.py`  |
|  1.5% |      14 | `convert_one_fmt_off_pair`           | `comments.py` |
|  1.4% |      13 | `Parser.addtoken`                    | `parse.py`    |
|  1.4% |      13 | `Parser.pop`                         | `parse.py`    |
|  1.0% |      10 | `LineGenerator.visit_power`          | `linegen.py`  |
|  1.0% |      10 | `normalize_invisible_parens`         | `linegen.py`  |
|  0.9% |       9 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |
|  0.8% |       8 | `Parser.shift`                       | `parse.py`    |
|  0.8% |       8 | `LineGenerator.visit_default`        | `linegen.py`  |
|  0.8% |       8 | `BracketTracker.mark`                | `brackets.py` |
|  0.7% |       7 | `assert_equivalent`                  | `__init__.py` |
|  0.7% |       7 | `Parser.push`                        | `parse.py`    |
|  0.6% |       6 | `_format_str_once`                   | `__init__.py` |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 31.5% |     302 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                    | Location                                 |
| ---: | ------: | --------------------------- | ---------------------------------------- |
| 1.0% |      10 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| 0.1% |       1 | `FileLoader.get_data`       | `<frozen importlib._bootstrap_external>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 26.6% |      45 | `parse.py:328` |
| 15.4% |      26 | `parse.py:311` |
| 11.8% |      20 | `parse.py:305` |
|  6.5% |      11 | `parse.py:297` |
|  5.3% |       9 | `parse.py:293` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 18.0% |      16 | `__init__.py:1335` |
| 16.9% |      15 | `__init__.py:1440` |
| 16.9% |      15 | `__init__.py:1424` |
|  9.0% |       8 | `__init__.py:1386` |
|  6.7% |       6 | `__init__.py:1430` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 49.0% |      24 | `driver.py:162` |
| 38.8% |      19 | `driver.py:128` |
|  4.1% |       2 | `driver.py:148` |
|  4.1% |       2 | `driver.py:167` |
|  2.0% |       1 | `driver.py:151` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      38 | `ast.py:46` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 35.5% |      11 | `tokenize.py:875` |
| 22.6% |       7 | `tokenize.py:624` |
|  6.5% |       2 | `tokenize.py:911` |
|  3.2% |       1 | `tokenize.py:781` |
|  3.2% |       1 | `tokenize.py:962` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 45.5% |      10 | `lines.py:89`  |
| 31.8% |       7 | `lines.py:95`  |
| 13.6% |       3 | `lines.py:97`  |
|  4.5% |       1 | `lines.py:86`  |
|  4.5% |       1 | `lines.py:101` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 65.0% |      13 | `nodes.py:185` |
| 35.0% |       7 | `nodes.py:183` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 52.6% |      10 | `parsing.py:214` |
| 36.8% |       7 | `parsing.py:217` |
|  5.3% |       1 | `parsing.py:174` |
|  5.3% |       1 | `parsing.py:199` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 57.1% |       8 | `comments.py:186` |
| 35.7% |       5 | `comments.py:184` |
|  7.1% |       1 | `comments.py:188` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 92.3% |      12 | `parse.py:252` |
|  7.7% |       1 | `parse.py:245` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 46.2% |       6 | `parse.py:404` |
| 30.8% |       4 | `parse.py:408` |
|  7.7% |       1 | `parse.py:406` |
|  7.7% |       1 | `parse.py:407` |
|  7.7% |       1 | `parse.py:403` |

##### `LineGenerator.visit_power` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 90.0% |       9 | `linegen.py:363` |
| 10.0% |       1 | `linegen.py:341` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |      10 | `<frozen importlib._bootstrap_external>:500` |

##### `normalize_invisible_parens` (`linegen.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 50.0% |       5 | `linegen.py:1432` |
| 10.0% |       1 | `linegen.py:1431` |
| 10.0% |       1 | `linegen.py:1339` |
| 10.0% |       1 | `linegen.py:1351` |
| 10.0% |       1 | `linegen.py:1406` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 33.3% |       3 | `lines.py:584` |
| 33.3% |       3 | `lines.py:571` |
| 11.1% |       1 | `lines.py:603` |
| 11.1% |       1 | `lines.py:573` |
| 11.1% |       1 | `lines.py:588` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 50.0% |       4 | `parse.py:381` |
| 37.5% |       3 | `parse.py:384` |
| 12.5% |       1 | `parse.py:383` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 87.5% |       7 | `linegen.py:158` |
| 12.5% |       1 | `linegen.py:134` |

##### `BracketTracker.mark` (`brackets.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 62.5% |       5 | `brackets.py:112` |
| 12.5% |       1 | `brackets.py:123` |
| 12.5% |       1 | `brackets.py:88`  |
| 12.5% |       1 | `brackets.py:114` |

##### `assert_equivalent` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 57.1% |       4 | `__init__.py:1547` |
| 42.9% |       3 | `__init__.py:1546` |

##### `Parser.push` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 42.9% |       3 | `parse.py:396` |
| 28.6% |       2 | `parse.py:393` |
| 14.3% |       1 | `parse.py:395` |
| 14.3% |       1 | `parse.py:394` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 66.7% |       4 | `__init__.py:1268` |
| 16.7% |       1 | `__init__.py:1274` |
| 16.7% |       1 | `__init__.py:1279` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap>:549` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:923` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                  | Location     |
| ----: | ------: | ----------------------- | ------------ |
| 61.9% |     187 | `convert`               | `pytree.py`  |
| 15.9% |      48 | `transform_line`        | `linegen.py` |
|  2.6% |       8 | `Parser._addtoken`      | `parse.py`   |
|  2.3% |       7 | `Visitor.visit_default` | `nodes.py`   |
|  2.0% |       6 | `Base.__new__`          | `pytree.py`  |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                             | Location      |
| ----: | ------: | ---------------------------------- | ------------- |
| 91.7% |     155 | `Parser.addtoken`                  | `parse.py`    |
|  3.6% |       6 | `TokenProxy.__next__`              | `driver.py`   |
|  2.4% |       4 | `Logger.debug`                     | `__init__.py` |
|  1.8% |       3 | `Driver.parse_tokens`              | `driver.py`   |
|  0.6% |       1 | `Driver._partially_consume_prefix` | `driver.py`   |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |      89 | `detect_target_versions` | `__init__.py` |

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      49 | `Driver.parse_string` | `driver.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      38 | `_parse_single_version` | `parsing.py` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Caller                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 51.6% |      16 | `TokenProxy.__next__`        | `driver.py` |
| 45.2% |      14 | `Parser.addtoken`            | `parse.py`  |
|  3.2% |       1 | `ParserGenerator.parse_atom` | `pgen.py`   |

##### `Line.append` (`lines.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 95.5% |      21 | `LineGenerator.visit_default` | `linegen.py` |
|  4.5% |       1 | `bracket_split_build_line`    | `linegen.py` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 75.0% |      15 | `Visitor.visit_default`       | `nodes.py`   |
| 20.0% |       4 | `LineGenerator.visit_stmt`    | `linegen.py` |
|  5.0% |       1 | `LineGenerator.visit_funcdef` | `linegen.py` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Caller                           | Location      |
| ----: | ------: | -------------------------------- | ------------- |
| 84.2% |      16 | `_stringify_ast_with_new_parent` | `parsing.py`  |
| 15.8% |       3 | `assert_equivalent`              | `__init__.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|      % | Samples | Caller              | Location      |
| -----: | ------: | ------------------- | ------------- |
| 100.0% |      14 | `normalize_fmt_off` | `comments.py` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      13 | `Driver.parse_tokens` | `driver.py` |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      13 | `Parser._addtoken` | `parse.py` |

##### `LineGenerator.visit_power` (`linegen.py`)

|      % | Samples | Caller          | Location   |
| -----: | ------: | --------------- | ---------- |
| 100.0% |      10 | `Visitor.visit` | `nodes.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |      10 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `normalize_invisible_parens` (`linegen.py`)

|      % | Samples | Caller                     | Location     |
| -----: | ------: | -------------------------- | ------------ |
| 100.0% |      10 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |       9 | `_format_str_once` | `__init__.py` |

##### `Parser.shift` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |       8 | `Parser._addtoken` | `parse.py` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Caller                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 62.5% |       5 | `Visitor.visit`                   | `nodes.py`   |
| 25.0% |       2 | `LineGenerator.visit_power`       | `linegen.py` |
| 12.5% |       1 | `LineGenerator.visit_simple_stmt` | `linegen.py` |

##### `BracketTracker.mark` (`brackets.py`)

|      % | Samples | Caller        | Location   |
| -----: | ------: | ------------- | ---------- |
| 100.0% |       8 | `Line.append` | `lines.py` |

##### `assert_equivalent` (`__init__.py`)

|      % | Samples | Caller                            | Location      |
| -----: | ------: | --------------------------------- | ------------- |
| 100.0% |       7 | `check_stability_and_equivalence` | `__init__.py` |

##### `Parser.push` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |       7 | `Parser._addtoken` | `parse.py` |

##### `_format_str_once` (`__init__.py`)

|      % | Samples | Caller       | Location      |
| -----: | ------: | ------------ | ------------- |
| 100.0% |       6 | `format_str` | `__init__.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       1 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                         | Location         |
| -----: | ------: | -------------------------------- | ---------------- |
| 100.0% |     958 | `_run_code`                      | `<frozen runpy>` |
| 100.0% |     958 | `run_module`                     | `<frozen runpy>` |
| 100.0% |     958 | `_run_module_as_main`            | `<frozen runpy>` |
|  96.8% |     927 | `reformat_one`                   | `__init__.py`    |
|  96.8% |     927 | `main`                           | `__init__.py`    |
|  96.8% |     927 | `pass_context.<locals>.new_func` | `decorators.py`  |
|  96.8% |     927 | `Context.invoke`                 | `core.py`        |
|  96.8% |     927 | `Command.invoke`                 | `core.py`        |
|  96.8% |     927 | `Command.main`                   | `core.py`        |
|  96.8% |     927 | `Command.__call__`               | `core.py`        |
|  96.8% |     927 | `patched_main`                   | `__init__.py`    |
|  96.8% |     927 | `<module>`                       | `__main__.py`    |
|  96.8% |     927 | `_run_module_code`               | `<frozen runpy>` |
|  96.7% |     926 | `format_file_in_place`           | `__init__.py`    |
|  96.6% |     925 | `format_file_contents`           | `__init__.py`    |
|  88.0% |     843 | `_format_str_once`               | `__init__.py`    |
|  53.3% |     511 | `Driver.parse_tokens`            | `driver.py`      |
|  53.3% |     511 | `Driver.parse_string`            | `driver.py`      |
|  53.3% |     511 | `lib2to3_parse`                  | `parsing.py`     |
|  49.6% |     475 | `format_str`                     | `__init__.py`    |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 96.8% |     927 | `reformat_one`                    | `__init__.py`   |
| 96.8% |     927 | `main`                            | `__init__.py`   |
| 96.8% |     927 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 96.8% |     927 | `Context.invoke`                  | `core.py`       |
| 96.8% |     927 | `Command.invoke`                  | `core.py`       |
| 96.8% |     927 | `Command.main`                    | `core.py`       |
| 96.8% |     927 | `Command.__call__`                | `core.py`       |
| 96.8% |     927 | `patched_main`                    | `__init__.py`   |
| 96.8% |     927 | `<module>`                        | `__main__.py`   |
| 96.7% |     926 | `format_file_in_place`            | `__init__.py`   |
| 96.6% |     925 | `format_file_contents`            | `__init__.py`   |
| 88.0% |     843 | `_format_str_once`                | `__init__.py`   |
| 53.3% |     511 | `Driver.parse_tokens`             | `driver.py`     |
| 53.3% |     511 | `Driver.parse_string`             | `driver.py`     |
| 53.3% |     511 | `lib2to3_parse`                   | `parsing.py`    |
| 49.6% |     475 | `format_str`                      | `__init__.py`   |
| 47.0% |     450 | `check_stability_and_equivalence` | `__init__.py`   |
| 44.2% |     423 | `Parser.addtoken`                 | `parse.py`      |
| 42.5% |     407 | `Parser._addtoken`                | `parse.py`      |
| 39.0% |     374 | `assert_stable`                   | `__init__.py`   |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 31.5% |     302 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                          | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |     958 | `_run_code`                       | `<frozen runpy>`                         |
| 100.0% |     958 | `run_module`                      | `<frozen runpy>`                         |
| 100.0% |     958 | `_run_module_as_main`             | `<frozen runpy>`                         |
|  96.8% |     927 | `_run_module_code`                | `<frozen runpy>`                         |
|   3.2% |      31 | `_call_with_frames_removed`       | `<frozen importlib._bootstrap>`          |
|   3.2% |      31 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   3.2% |      31 | `_load_unlocked`                  | `<frozen importlib._bootstrap>`          |
|   3.2% |      31 | `_find_and_load_unlocked`         | `<frozen importlib._bootstrap>`          |
|   3.2% |      31 | `_find_and_load`                  | `<frozen importlib._bootstrap>`          |
|   3.2% |      31 | `_get_module_details`             | `<frozen runpy>`                         |
|   1.3% |      12 | `SourceLoader.get_code`           | `<frozen importlib._bootstrap_external>` |
|   1.1% |      11 | `_compile_bytecode`               | `<frozen importlib._bootstrap_external>` |
|   0.5% |       5 | `_handle_fromlist`                | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `FileLoader.get_data`             | `<frozen importlib._bootstrap_external>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |     958 | `run_module` | `<frozen runpy>` |
|  96.8% |     927 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 96.8% |     927 | `_run_module_code`    | `<frozen runpy>` |
|  3.2% |      31 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     958 | `_run_code` | `<frozen runpy>` |

##### `reformat_one` (`__init__.py`)

|     % | Samples | Callee                 | Location      |
| ----: | ------: | ---------------------- | ------------- |
| 99.9% |     926 | `format_file_in_place` | `__init__.py` |

##### `main` (`__init__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     927 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |     927 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |     927 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     927 | `Context.invoke` | `core.py` |

##### `Command.main` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     927 | `Command.invoke` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |     927 | `Command.main` | `core.py` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee             | Location  |
| -----: | ------: | ------------------ | --------- |
| 100.0% |     927 | `Command.__call__` | `core.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     927 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     927 | `_run_code` | `<frozen runpy>` |

##### `format_file_in_place` (`__init__.py`)

|     % | Samples | Callee                 | Location      |
| ----: | ------: | ---------------------- | ------------- |
| 99.9% |     925 | `format_file_contents` | `__init__.py` |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 51.4% |     475 | `format_str`                      | `__init__.py` |
| 48.6% |     450 | `check_stability_and_equivalence` | `__init__.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                   | Location      |
| ----: | ------: | ------------------------ | ------------- |
| 60.6% |     511 | `lib2to3_parse`          | `parsing.py`  |
| 14.0% |     118 | `Visitor.visit`          | `nodes.py`    |
| 10.8% |      91 | `detect_target_versions` | `__init__.py` |
| 10.0% |      84 | `transform_line`         | `linegen.py`  |
|  1.9% |      16 | `normalize_fmt_off`      | `comments.py` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                | Location      |
| ----: | ------: | --------------------- | ------------- |
| 82.8% |     423 | `Parser.addtoken`     | `parse.py`    |
|  5.1% |      26 | `TokenProxy.__next__` | `driver.py`   |
|  1.0% |       5 | `(garbage collector)` | `<unknown>`   |
|  0.8% |       4 | `Logger.debug`        | `__init__.py` |
|  0.6% |       3 | `Parser._addtoken`    | `parse.py`    |

##### `Driver.parse_string` (`driver.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     511 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     511 | `Driver.parse_string` | `driver.py` |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.2% |     471 | `_format_str_once` | `__init__.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 83.1% |     374 | `assert_stable`     | `__init__.py` |
| 15.8% |      71 | `assert_equivalent` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 92.9% |     393 | `Parser._addtoken` | `parse.py`    |
|  3.3% |      14 | `generate_tokens`  | `tokenize.py` |
|  0.7% |       3 | `Parser.classify`  | `parse.py`    |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 49.6% |     202 | `Parser.shift`        | `parse.py`  |
|  5.2% |      21 | `Parser.pop`          | `parse.py`  |
|  2.0% |       8 | `(garbage collector)` | `<unknown>` |
|  1.7% |       7 | `Parser.push`         | `parse.py`  |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.5% |     372 | `_format_str_once` | `__init__.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |      31 | `<module>`       | `__init__.py`                   |
|  41.9% |      13 | `<module>`       | `nodes.py`                      |
|  41.9% |      13 | `<module>`       | `comments.py`                   |
|  16.1% |       5 | `_find_and_load` | `<frozen importlib._bootstrap>` |
|  16.1% |       5 | `<module>`       | `files.py`                      |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      31 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  38.7% |      12 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |      31 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   3.2% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |      31 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
|   3.2% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |      31 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |      31 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |      31 | `_get_module_details` | `<frozen runpy>`                |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                | Location                                 |
| ----: | ------: | --------------------- | ---------------------------------------- |
| 91.7% |      11 | `_compile_bytecode`   | `<frozen importlib._bootstrap_external>` |
|  8.3% |       1 | `FileLoader.get_data` | `<frozen importlib._bootstrap_external>` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|    % | Samples | Callee                | Location    |
| ---: | ------: | --------------------- | ----------- |
| 9.1% |       1 | `(garbage collector)` | `<unknown>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       5 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `ExtensionFileLoader.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `_run_code` ← `_run_module_as_main`

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.3% |     185 | `(garbage collector)` ← `convert` (`pytree.py`) ← `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` |
| 12.1% |     116 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                           |
|  6.5% |      62 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                               |
|  5.0% |      48 | `(garbage collector)` ← `transform_line` (`linegen.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                      |
|  4.1% |      39 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                    |
|  4.0% |      38 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                              |
|  2.9% |      28 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                 |
|  2.8% |      27 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                        |
|  2.2% |      21 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                          |
|  1.1% |      11 | `convert_one_fmt_off_pair` (`comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                             |
|  0.8% |       8 | `generate_tokens` (`tokenize.py`) ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                            |
|  0.8% |       8 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                     |
|  0.8% |       8 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                     |
|  0.8% |       8 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                              |
|  0.7% |       7 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                   |
|  0.7% |       7 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                |
|  0.7% |       7 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                          |
|  0.7% |       7 | `EmptyLineTracker.maybe_empty_lines` (`lines.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                            |
|  0.6% |       6 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                         |
|  0.6% |       6 | `generate_tokens` (`tokenize.py`) ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                     |

# Sampling profile

Collected 997 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 64.9% |     647 |
| Garbage collector | 33.9% |     338 |
| Standard library  |  1.2% |      12 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                             | Location                                 |
| ----: | ------: | ------------------------------------ | ---------------------------------------- |
| 33.9% |     338 | `(garbage collector)`                | `<unknown>`                              |
| 13.6% |     136 | `Parser._addtoken`                   | `parse.py`                               |
|  9.0% |      90 | `get_features_used`                  | `__init__.py`                            |
|  5.4% |      54 | `Driver.parse_tokens`                | `driver.py`                              |
|  4.0% |      40 | `parse`                              | `ast.py`                                 |
|  3.9% |      39 | `generate_tokens`                    | `tokenize.py`                            |
|  2.6% |      26 | `Line.append`                        | `lines.py`                               |
|  2.2% |      22 | `Parser.pop`                         | `parse.py`                               |
|  2.0% |      20 | `Visitor.visit`                      | `nodes.py`                               |
|  1.8% |      18 | `normalize_invisible_parens`         | `linegen.py`                             |
|  1.5% |      15 | `_stringify_ast`                     | `parsing.py`                             |
|  1.4% |      14 | `Parser.addtoken`                    | `parse.py`                               |
|  1.3% |      13 | `Parser.shift`                       | `parse.py`                               |
|  1.2% |      12 | `convert_one_fmt_off_pair`           | `comments.py`                            |
|  1.0% |      10 | `_format_str_once`                   | `__init__.py`                            |
|  0.9% |       9 | `assert_equivalent`                  | `__init__.py`                            |
|  0.8% |       8 | `line_to_string`                     | `lines.py`                               |
|  0.8% |       8 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`                               |
|  0.7% |       7 | `_compile_bytecode`                  | `<frozen importlib._bootstrap_external>` |
|  0.6% |       6 | `LineGenerator.visit_default`        | `linegen.py`                             |

#### Categories

##### Ours

|     % | Samples | Function                             | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 13.6% |     136 | `Parser._addtoken`                   | `parse.py`    |
|  9.0% |      90 | `get_features_used`                  | `__init__.py` |
|  5.4% |      54 | `Driver.parse_tokens`                | `driver.py`   |
|  4.0% |      40 | `parse`                              | `ast.py`      |
|  3.9% |      39 | `generate_tokens`                    | `tokenize.py` |
|  2.6% |      26 | `Line.append`                        | `lines.py`    |
|  2.2% |      22 | `Parser.pop`                         | `parse.py`    |
|  2.0% |      20 | `Visitor.visit`                      | `nodes.py`    |
|  1.8% |      18 | `normalize_invisible_parens`         | `linegen.py`  |
|  1.5% |      15 | `_stringify_ast`                     | `parsing.py`  |
|  1.4% |      14 | `Parser.addtoken`                    | `parse.py`    |
|  1.3% |      13 | `Parser.shift`                       | `parse.py`    |
|  1.2% |      12 | `convert_one_fmt_off_pair`           | `comments.py` |
|  1.0% |      10 | `_format_str_once`                   | `__init__.py` |
|  0.9% |       9 | `assert_equivalent`                  | `__init__.py` |
|  0.8% |       8 | `line_to_string`                     | `lines.py`    |
|  0.8% |       8 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |
|  0.6% |       6 | `LineGenerator.visit_default`        | `linegen.py`  |
|  0.6% |       6 | `LinesBlock.all_lines`               | `lines.py`    |
|  0.5% |       5 | `transform_line`                     | `linegen.py`  |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 33.9% |     338 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                    | Location                                 |
| ---: | ------: | --------------------------- | ---------------------------------------- |
| 0.7% |       7 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
| 0.2% |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| 0.1% |       1 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `FileLoader.get_data`       | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `ABCMeta.__new__`           | `<frozen abc>`                           |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 22.8% |      31 | `parse.py:328` |
| 15.4% |      21 | `parse.py:311` |
|  8.8% |      12 | `parse.py:305` |
|  7.4% |      10 | `parse.py:297` |
|  6.6% |       9 | `parse.py:293` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 28.9% |      26 | `__init__.py:1335` |
| 20.0% |      18 | `__init__.py:1424` |
| 14.4% |      13 | `__init__.py:1440` |
|  7.8% |       7 | `__init__.py:1436` |
|  6.7% |       6 | `__init__.py:1386` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 61.1% |      33 | `driver.py:162` |
| 31.5% |      17 | `driver.py:128` |
|  5.6% |       3 | `driver.py:151` |
|  1.9% |       1 | `driver.py:161` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      40 | `ast.py:46` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 25.6% |      10 | `tokenize.py:624` |
| 17.9% |       7 | `tokenize.py:875` |
|  7.7% |       3 | `tokenize.py:607` |
|  7.7% |       3 | `tokenize.py:705` |
|  5.1% |       2 | `tokenize.py:826` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 50.0% |      13 | `lines.py:95`  |
| 30.8% |       8 | `lines.py:89`  |
| 11.5% |       3 | `lines.py:76`  |
|  3.8% |       1 | `lines.py:94`  |
|  3.8% |       1 | `lines.py:101` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 54.5% |      12 | `parse.py:404` |
| 27.3% |       6 | `parse.py:408` |
|  9.1% |       2 | `parse.py:407` |
|  4.5% |       1 | `parse.py:403` |
|  4.5% |       1 | `parse.py:406` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 60.0% |      12 | `nodes.py:183` |
| 20.0% |       4 | `nodes.py:163` |
| 20.0% |       4 | `nodes.py:185` |

##### `normalize_invisible_parens` (`linegen.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 66.7% |      12 | `linegen.py:1432` |
|  5.6% |       1 | `linegen.py:1437` |
|  5.6% |       1 | `linegen.py:1386` |
|  5.6% |       1 | `linegen.py:1384` |
|  5.6% |       1 | `linegen.py:1401` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 40.0% |       6 | `parsing.py:214` |
| 40.0% |       6 | `parsing.py:217` |
| 13.3% |       2 | `parsing.py:197` |
|  6.7% |       1 | `parsing.py:244` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Location       |
| -----: | ------: | -------------- |
| 100.0% |      14 | `parse.py:252` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 92.3% |      12 | `parse.py:381` |
|  7.7% |       1 | `parse.py:379` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 58.3% |       7 | `comments.py:184` |
| 33.3% |       4 | `comments.py:186` |
|  8.3% |       1 | `comments.py:188` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 50.0% |       5 | `__init__.py:1268` |
| 20.0% |       2 | `__init__.py:1271` |
| 20.0% |       2 | `__init__.py:1274` |
| 10.0% |       1 | `__init__.py:1287` |

##### `assert_equivalent` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 55.6% |       5 | `__init__.py:1547` |
| 33.3% |       3 | `__init__.py:1546` |
| 11.1% |       1 | `__init__.py:1548` |

##### `line_to_string` (`lines.py`)

|      % | Samples | Location        |
| -----: | ------: | --------------- |
| 100.0% |       8 | `lines.py:1078` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 50.0% |       4 | `lines.py:584` |
| 37.5% |       3 | `lines.py:571` |
| 12.5% |       1 | `lines.py:596` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       7 | `<frozen importlib._bootstrap_external>:500` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 50.0% |       3 | `linegen.py:134` |
| 33.3% |       2 | `linegen.py:158` |
| 16.7% |       1 | `linegen.py:157` |

##### `LinesBlock.all_lines` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 50.0% |       3 | `lines.py:539` |
| 33.3% |       2 | `lines.py:541` |
| 16.7% |       1 | `lines.py:538` |

##### `transform_line` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 60.0% |       3 | `linegen.py:714` |
| 20.0% |       1 | `linegen.py:679` |
| 20.0% |       1 | `linegen.py:639` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       2 | `<frozen importlib._bootstrap>:549` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:747` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:923` |

##### `ABCMeta.__new__` (`<frozen abc>`)

|      % | Samples | Location           |
| -----: | ------: | ------------------ |
| 100.0% |       1 | `<frozen abc>:107` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 61.5% |     208 | `Driver.parse_tokens`             | `driver.py` |
| 11.8% |      40 | `Visitor.visit_default`           | `nodes.py`  |
|  3.0% |      10 | `Base.__new__`                    | `pytree.py` |
|  2.7% |       9 | `hug_power_op`                    | `trans.py`  |
|  2.4% |       8 | `__create_fn__.<locals>.__init__` | `<string>`  |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 93.4% |     127 | `Parser.addtoken`                  | `parse.py`  |
|  2.9% |       4 | `TokenProxy.__next__`              | `driver.py` |
|  2.9% |       4 | `Driver.parse_tokens`              | `driver.py` |
|  0.7% |       1 | `Driver._partially_consume_prefix` | `driver.py` |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |      90 | `detect_target_versions` | `__init__.py` |

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      54 | `Driver.parse_string` | `driver.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      40 | `_parse_single_version` | `parsing.py` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Caller                     | Location      |
| ----: | ------: | -------------------------- | ------------- |
| 56.4% |      22 | `TokenProxy.__next__`      | `driver.py`   |
| 35.9% |      14 | `Parser.addtoken`          | `parse.py`    |
|  2.6% |       1 | `ParserGenerator.gettoken` | `pgen.py`     |
|  2.6% |       1 | `Logger.debug`             | `__init__.py` |
|  2.6% |       1 | `Driver.parse_tokens`      | `driver.py`   |

##### `Line.append` (`lines.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 84.6% |      22 | `LineGenerator.visit_default` | `linegen.py` |
| 15.4% |       4 | `bracket_split_build_line`    | `linegen.py` |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      22 | `Parser._addtoken` | `parse.py` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 60.0% |      12 | `Visitor.visit_default`       | `nodes.py`   |
| 30.0% |       6 | `LineGenerator.visit_stmt`    | `linegen.py` |
| 10.0% |       2 | `LineGenerator.visit_funcdef` | `linegen.py` |

##### `normalize_invisible_parens` (`linegen.py`)

|      % | Samples | Caller                     | Location     |
| -----: | ------: | -------------------------- | ------------ |
| 100.0% |      18 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Caller                           | Location      |
| ----: | ------: | -------------------------------- | ------------- |
| 80.0% |      12 | `_stringify_ast_with_new_parent` | `parsing.py`  |
| 20.0% |       3 | `assert_equivalent`              | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      14 | `Driver.parse_tokens` | `driver.py` |

##### `Parser.shift` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      13 | `Parser._addtoken` | `parse.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|      % | Samples | Caller              | Location      |
| -----: | ------: | ------------------- | ------------- |
| 100.0% |      12 | `normalize_fmt_off` | `comments.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Caller          | Location      |
| ----: | ------: | --------------- | ------------- |
| 70.0% |       7 | `format_str`    | `__init__.py` |
| 30.0% |       3 | `assert_stable` | `__init__.py` |

##### `assert_equivalent` (`__init__.py`)

|      % | Samples | Caller                            | Location      |
| -----: | ------: | --------------------------------- | ------------- |
| 100.0% |       9 | `check_stability_and_equivalence` | `__init__.py` |

##### `line_to_string` (`lines.py`)

|     % | Samples | Caller                              | Location     |
| ----: | ------: | ----------------------------------- | ------------ |
| 62.5% |       5 | `transform_line`                    | `linegen.py` |
| 37.5% |       3 | `_hugging_power_ops_line_to_string` | `linegen.py` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |       8 | `_format_str_once` | `__init__.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       7 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Caller                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 66.7% |       4 | `Visitor.visit`                   | `nodes.py`   |
| 33.3% |       2 | `LineGenerator.visit_simple_stmt` | `linegen.py` |

##### `LinesBlock.all_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |       6 | `_format_str_once` | `__init__.py` |

##### `transform_line` (`linegen.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |       5 | `_format_str_once` | `__init__.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % | Samples | Caller                              | Location                                 |
| ----: | ------: | ----------------------------------- | ---------------------------------------- |
| 50.0% |       1 | `ExtensionFileLoader.exec_module`   | `<frozen importlib._bootstrap_external>` |
| 50.0% |       1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       1 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       1 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `ABCMeta.__new__` (`<frozen abc>`)

|      % | Samples | Caller     | Location   |
| -----: | ------: | ---------- | ---------- |
| 100.0% |       1 | `<module>` | `trans.py` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                          | Location         |
| -----: | ------: | --------------------------------- | ---------------- |
| 100.0% |     997 | `_run_code`                       | `<frozen runpy>` |
| 100.0% |     997 | `run_module`                      | `<frozen runpy>` |
| 100.0% |     997 | `_run_module_as_main`             | `<frozen runpy>` |
|  96.8% |     965 | `format_file_contents`            | `__init__.py`    |
|  96.8% |     965 | `format_file_in_place`            | `__init__.py`    |
|  96.8% |     965 | `reformat_one`                    | `__init__.py`    |
|  96.8% |     965 | `main`                            | `__init__.py`    |
|  96.8% |     965 | `pass_context.<locals>.new_func`  | `decorators.py`  |
|  96.8% |     965 | `Context.invoke`                  | `core.py`        |
|  96.8% |     965 | `Command.invoke`                  | `core.py`        |
|  96.8% |     965 | `Command.main`                    | `core.py`        |
|  96.8% |     965 | `Command.__call__`                | `core.py`        |
|  96.8% |     965 | `patched_main`                    | `__init__.py`    |
|  96.8% |     965 | `<module>`                        | `__main__.py`    |
|  96.8% |     965 | `_run_module_code`                | `<frozen runpy>` |
|  88.9% |     886 | `_format_str_once`                | `__init__.py`    |
|  53.2% |     530 | `Driver.parse_string`             | `driver.py`      |
|  53.2% |     530 | `lib2to3_parse`                   | `parsing.py`     |
|  53.1% |     529 | `Driver.parse_tokens`             | `driver.py`      |
|  50.8% |     506 | `check_stability_and_equivalence` | `__init__.py`    |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 96.8% |     965 | `format_file_contents`            | `__init__.py`   |
| 96.8% |     965 | `format_file_in_place`            | `__init__.py`   |
| 96.8% |     965 | `reformat_one`                    | `__init__.py`   |
| 96.8% |     965 | `main`                            | `__init__.py`   |
| 96.8% |     965 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 96.8% |     965 | `Context.invoke`                  | `core.py`       |
| 96.8% |     965 | `Command.invoke`                  | `core.py`       |
| 96.8% |     965 | `Command.main`                    | `core.py`       |
| 96.8% |     965 | `Command.__call__`                | `core.py`       |
| 96.8% |     965 | `patched_main`                    | `__init__.py`   |
| 96.8% |     965 | `<module>`                        | `__main__.py`   |
| 88.9% |     886 | `_format_str_once`                | `__init__.py`   |
| 53.2% |     530 | `Driver.parse_string`             | `driver.py`     |
| 53.2% |     530 | `lib2to3_parse`                   | `parsing.py`    |
| 53.1% |     529 | `Driver.parse_tokens`             | `driver.py`     |
| 50.8% |     506 | `check_stability_and_equivalence` | `__init__.py`   |
| 46.0% |     459 | `format_str`                      | `__init__.py`   |
| 43.5% |     434 | `assert_stable`                   | `__init__.py`   |
| 23.0% |     229 | `Parser.addtoken`                 | `parse.py`      |
| 21.0% |     209 | `Parser._addtoken`                | `parse.py`      |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 33.9% |     338 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                            | Location                                 |
| -----: | ------: | ----------------------------------- | ---------------------------------------- |
| 100.0% |     997 | `_run_code`                         | `<frozen runpy>`                         |
| 100.0% |     997 | `run_module`                        | `<frozen runpy>`                         |
| 100.0% |     997 | `_run_module_as_main`               | `<frozen runpy>`                         |
|  96.8% |     965 | `_run_module_code`                  | `<frozen runpy>`                         |
|   3.2% |      32 | `_call_with_frames_removed`         | `<frozen importlib._bootstrap>`          |
|   3.2% |      32 | `_LoaderBasics.exec_module`         | `<frozen importlib._bootstrap_external>` |
|   3.2% |      32 | `_load_unlocked`                    | `<frozen importlib._bootstrap>`          |
|   3.2% |      32 | `_find_and_load_unlocked`           | `<frozen importlib._bootstrap>`          |
|   3.2% |      32 | `_find_and_load`                    | `<frozen importlib._bootstrap>`          |
|   3.2% |      32 | `_get_module_details`               | `<frozen runpy>`                         |
|   0.8% |       8 | `SourceLoader.get_code`             | `<frozen importlib._bootstrap_external>` |
|   0.7% |       7 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
|   0.4% |       4 | `_handle_fromlist`                  | `<frozen importlib._bootstrap>`          |
|   0.2% |       2 | `ExtensionFileLoader.exec_module`   | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `FileLoader.get_data`               | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `module_from_spec`                  | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `ABCMeta.__new__`                   | `<frozen abc>`                           |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |     997 | `run_module` | `<frozen runpy>` |
|  96.8% |     965 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 96.8% |     965 | `_run_module_code`    | `<frozen runpy>` |
|  3.2% |      32 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     997 | `_run_code` | `<frozen runpy>` |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 52.4% |     506 | `check_stability_and_equivalence` | `__init__.py` |
| 47.6% |     459 | `format_str`                      | `__init__.py` |

##### `format_file_in_place` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |     965 | `format_file_contents` | `__init__.py` |

##### `reformat_one` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |     965 | `format_file_in_place` | `__init__.py` |

##### `main` (`__init__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     965 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |     965 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |     965 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     965 | `Context.invoke` | `core.py` |

##### `Command.main` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     965 | `Command.invoke` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |     965 | `Command.main` | `core.py` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee             | Location  |
| -----: | ------: | ------------------ | --------- |
| 100.0% |     965 | `Command.__call__` | `core.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     965 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     965 | `_run_code` | `<frozen runpy>` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                   | Location      |
| ----: | ------: | ------------------------ | ------------- |
| 59.8% |     530 | `lib2to3_parse`          | `parsing.py`  |
| 19.4% |     172 | `Visitor.visit`          | `nodes.py`    |
| 10.3% |      91 | `detect_target_versions` | `__init__.py` |
|  5.4% |      48 | `transform_line`         | `linegen.py`  |
|  1.6% |      14 | `normalize_fmt_off`      | `comments.py` |

##### `Driver.parse_string` (`driver.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.8% |     529 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     530 | `Driver.parse_string` | `driver.py` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 43.3% |     229 | `Parser.addtoken`                  | `parse.py`  |
| 39.3% |     208 | `(garbage collector)`              | `<unknown>` |
|  5.7% |      30 | `TokenProxy.__next__`              | `driver.py` |
|  0.8% |       4 | `Parser._addtoken`                 | `parse.py`  |
|  0.4% |       2 | `Driver._partially_consume_prefix` | `driver.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 85.8% |     434 | `assert_stable`     | `__init__.py` |
| 13.4% |      68 | `assert_equivalent` | `__init__.py` |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.1% |     455 | `_format_str_once` | `__init__.py` |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.3% |     431 | `_format_str_once` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 87.3% |     200 | `Parser._addtoken` | `parse.py`    |
|  6.1% |      14 | `generate_tokens`  | `tokenize.py` |
|  0.4% |       1 | `Parser.classify`  | `parse.py`    |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 17.7% |      37 | `Parser.pop`          | `parse.py`  |
| 12.4% |      26 | `Parser.shift`        | `parse.py`  |
|  2.4% |       5 | `(garbage collector)` | `<unknown>` |
|  2.4% |       5 | `Parser.push`         | `parse.py`  |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |      32 | `<module>` | `__init__.py`   |
|  37.5% |      12 | `<module>` | `comments.py`   |
|  31.3% |      10 | `<module>` | `nodes.py`      |
|  21.9% |       7 | `<module>` | `files.py`      |
|  18.8% |       6 | `<module>` | `specifiers.py` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      32 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  25.0% |       8 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |      32 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   6.3% |       2 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |
|   3.1% |       1 | `module_from_spec`                | `<frozen importlib._bootstrap>`          |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |      32 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
|   3.1% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |      32 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |      32 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |      32 | `_get_module_details` | `<frozen runpy>`                |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                | Location                                 |
| ----: | ------: | --------------------- | ---------------------------------------- |
| 87.5% |       7 | `_compile_bytecode`   | `<frozen importlib._bootstrap_external>` |
| 12.5% |       1 | `FileLoader.get_data` | `<frozen importlib._bootstrap_external>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `ExtensionFileLoader.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `ExtensionFileLoader.create_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `module_from_spec` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                              | Location                                 |
| -----: | ------: | ----------------------------------- | ---------------------------------------- |
| 100.0% |       1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `_run_code` ← `_run_module_as_main`

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.9% |     208 | `(garbage collector)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  8.2% |      82 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  5.9% |      59 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  4.5% |      45 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  4.0% |      40 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  3.9% |      39 | `(garbage collector)` ← `Visitor.visit_default` (`nodes.py`) ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_power` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` |
|  3.1% |      31 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  3.1% |      31 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.3% |      23 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.5% |      15 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.2% |      12 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.1% |      11 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.0% |      10 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.0% |      10 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.9% |       9 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.9% |       9 | `generate_tokens` (`tokenize.py`) ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.7% |       7 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.7% |       7 | `convert_one_fmt_off_pair` (`comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.7% |       7 | `EmptyLineTracker.maybe_empty_lines` (`lines.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.7% |       7 | `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

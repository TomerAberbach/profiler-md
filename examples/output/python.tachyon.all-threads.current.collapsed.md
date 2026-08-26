# Sampling profile

Collected 975 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 69.7% |     680 |
| Garbage collector | 28.8% |     281 |
| Standard library  |  1.4% |      14 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                             | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 28.8% |     281 | `(garbage collector)`                | `<unknown>`   |
| 13.6% |     133 | `Parser._addtoken`                   | `parse.py`    |
|  9.7% |      95 | `get_features_used`                  | `__init__.py` |
|  4.4% |      43 | `Driver.parse_tokens`                | `driver.py`   |
|  4.1% |      40 | `parse`                              | `ast.py`      |
|  3.3% |      32 | `generate_tokens`                    | `tokenize.py` |
|  2.8% |      27 | `Parser.pop`                         | `parse.py`    |
|  2.7% |      26 | `Visitor.visit`                      | `nodes.py`    |
|  2.5% |      24 | `Parser.shift`                       | `parse.py`    |
|  2.5% |      24 | `_stringify_ast`                     | `parsing.py`  |
|  2.1% |      20 | `Line.append`                        | `lines.py`    |
|  1.2% |      12 | `Visitor.visit_default`              | `nodes.py`    |
|  1.2% |      12 | `Parser.addtoken`                    | `parse.py`    |
|  1.1% |      11 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |
|  1.0% |      10 | `Parser.push`                        | `parse.py`    |
|  0.9% |       9 | `BracketTracker.mark`                | `brackets.py` |
|  0.9% |       9 | `LineGenerator.visit_simple_stmt`    | `linegen.py`  |
|  0.9% |       9 | `LineGenerator.visit_power`          | `linegen.py`  |
|  0.8% |       8 | `assert_equivalent`                  | `__init__.py` |
|  0.8% |       8 | `transform_line`                     | `linegen.py`  |

#### Categories

##### Ours

|     % | Samples | Function                             | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 13.6% |     133 | `Parser._addtoken`                   | `parse.py`    |
|  9.7% |      95 | `get_features_used`                  | `__init__.py` |
|  4.4% |      43 | `Driver.parse_tokens`                | `driver.py`   |
|  4.1% |      40 | `parse`                              | `ast.py`      |
|  3.3% |      32 | `generate_tokens`                    | `tokenize.py` |
|  2.8% |      27 | `Parser.pop`                         | `parse.py`    |
|  2.7% |      26 | `Visitor.visit`                      | `nodes.py`    |
|  2.5% |      24 | `Parser.shift`                       | `parse.py`    |
|  2.5% |      24 | `_stringify_ast`                     | `parsing.py`  |
|  2.1% |      20 | `Line.append`                        | `lines.py`    |
|  1.2% |      12 | `Visitor.visit_default`              | `nodes.py`    |
|  1.2% |      12 | `Parser.addtoken`                    | `parse.py`    |
|  1.1% |      11 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |
|  1.0% |      10 | `Parser.push`                        | `parse.py`    |
|  0.9% |       9 | `BracketTracker.mark`                | `brackets.py` |
|  0.9% |       9 | `LineGenerator.visit_simple_stmt`    | `linegen.py`  |
|  0.9% |       9 | `LineGenerator.visit_power`          | `linegen.py`  |
|  0.8% |       8 | `assert_equivalent`                  | `__init__.py` |
|  0.8% |       8 | `transform_line`                     | `linegen.py`  |
|  0.7% |       7 | `LineGenerator.visit_default`        | `linegen.py`  |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 28.8% |     281 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                             | Location                                 |
| ---: | ------: | ------------------------------------ | ---------------------------------------- |
| 0.8% |       8 | `_compile_bytecode`                  | `<frozen importlib._bootstrap_external>` |
| 0.2% |       2 | `_call_with_frames_removed`          | `<frozen importlib._bootstrap>`          |
| 0.1% |       1 | `_HierarchicalLockManager.__enter__` | `<frozen importlib._bootstrap>`          |
| 0.1% |       1 | `FileFinder._fill_cache`             | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `ABCMeta.__new__`                    | `<frozen abc>`                           |
| 0.1% |       1 | `FileLoader.get_data`                | `<frozen importlib._bootstrap_external>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 25.6% |      34 | `parse.py:328` |
| 20.3% |      27 | `parse.py:311` |
|  8.3% |      11 | `parse.py:305` |
|  7.5% |      10 | `parse.py:297` |
|  6.0% |       8 | `parse.py:315` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 23.2% |      22 | `__init__.py:1335` |
| 16.8% |      16 | `__init__.py:1424` |
| 14.7% |      14 | `__init__.py:1440` |
| 11.6% |      11 | `__init__.py:1386` |
| 11.6% |      11 | `__init__.py:1436` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 69.8% |      30 | `driver.py:162` |
| 23.3% |      10 | `driver.py:128` |
|  4.7% |       2 | `driver.py:151` |
|  2.3% |       1 | `driver.py:167` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      40 | `ast.py:46` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 37.5% |      12 | `tokenize.py:624` |
| 34.4% |      11 | `tokenize.py:875` |
|  6.3% |       2 | `tokenize.py:634` |
|  3.1% |       1 | `tokenize.py:704` |
|  3.1% |       1 | `tokenize.py:907` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 51.9% |      14 | `parse.py:404` |
| 18.5% |       5 | `parse.py:408` |
| 11.1% |       3 | `parse.py:407` |
|  7.4% |       2 | `parse.py:403` |
|  3.7% |       1 | `parse.py:398` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 50.0% |      13 | `nodes.py:183` |
| 38.5% |      10 | `nodes.py:185` |
|  3.8% |       1 | `nodes.py:176` |
|  3.8% |       1 | `nodes.py:181` |
|  3.8% |       1 | `nodes.py:163` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 83.3% |      20 | `parse.py:381` |
|  8.3% |       2 | `parse.py:383` |
|  4.2% |       1 | `parse.py:384` |
|  4.2% |       1 | `parse.py:382` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 41.7% |      10 | `parsing.py:214` |
| 33.3% |       8 | `parsing.py:217` |
|  4.2% |       1 | `parsing.py:177` |
|  4.2% |       1 | `parsing.py:197` |
|  4.2% |       1 | `parsing.py:185` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 60.0% |      12 | `lines.py:89`  |
| 35.0% |       7 | `lines.py:95`  |
|  5.0% |       1 | `lines.py:101` |

##### `Visitor.visit_default` (`nodes.py`)

|      % | Samples | Location       |
| -----: | ------: | -------------- |
| 100.0% |      12 | `nodes.py:191` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 91.7% |      11 | `parse.py:252` |
|  8.3% |       1 | `parse.py:245` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 45.5% |       5 | `lines.py:606` |
| 36.4% |       4 | `lines.py:571` |
| 18.2% |       2 | `lines.py:584` |

##### `Parser.push` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 60.0% |       6 | `parse.py:395` |
| 20.0% |       2 | `parse.py:394` |
| 10.0% |       1 | `parse.py:396` |
| 10.0% |       1 | `parse.py:393` |

##### `BracketTracker.mark` (`brackets.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 44.4% |       4 | `brackets.py:114` |
| 22.2% |       2 | `brackets.py:112` |
| 11.1% |       1 | `brackets.py:126` |
| 11.1% |       1 | `brackets.py:121` |
| 11.1% |       1 | `brackets.py:128` |

##### `LineGenerator.visit_simple_stmt` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 77.8% |       7 | `linegen.py:317` |
| 11.1% |       1 | `linegen.py:295` |
| 11.1% |       1 | `linegen.py:299` |

##### `LineGenerator.visit_power` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 66.7% |       6 | `linegen.py:363` |
| 11.1% |       1 | `linegen.py:348` |
| 11.1% |       1 | `linegen.py:342` |
| 11.1% |       1 | `linegen.py:341` |

##### `assert_equivalent` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 50.0% |       4 | `__init__.py:1546` |
| 50.0% |       4 | `__init__.py:1547` |

##### `transform_line` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 50.0% |       4 | `linegen.py:714` |
| 12.5% |       1 | `linegen.py:631` |
| 12.5% |       1 | `linegen.py:701` |
| 12.5% |       1 | `linegen.py:715` |
| 12.5% |       1 | `linegen.py:716` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       8 | `<frozen importlib._bootstrap_external>:500` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 71.4% |       5 | `linegen.py:158` |
| 14.3% |       1 | `linegen.py:138` |
| 14.3% |       1 | `linegen.py:157` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       2 | `<frozen importlib._bootstrap>:549` |

##### `_HierarchicalLockManager.__enter__` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap>:458` |

##### `FileFinder._fill_cache` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:1407` |

##### `ABCMeta.__new__` (`<frozen abc>`)

|      % | Samples | Location           |
| -----: | ------: | ------------------ |
| 100.0% |       1 | `<frozen abc>:106` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:923` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 60.1% |     169 | `Driver.parse_tokens` | `driver.py` |
| 13.2% |      37 | `is_vararg`           | `nodes.py`  |
|  4.3% |      12 | `Parser._addtoken`    | `parse.py`  |
|  2.5% |       7 | `convert`             | `pytree.py` |
|  2.1% |       6 | `Base.__new__`        | `pytree.py` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 96.2% |     128 | `Parser.addtoken`     | `parse.py`  |
|  3.0% |       4 | `TokenProxy.__next__` | `driver.py` |
|  0.8% |       1 | `Driver.parse_tokens` | `driver.py` |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |      95 | `detect_target_versions` | `__init__.py` |

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      43 | `Driver.parse_string` | `driver.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      40 | `_parse_single_version` | `parsing.py` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 56.3% |      18 | `TokenProxy.__next__` | `driver.py` |
| 40.6% |      13 | `Parser.addtoken`     | `parse.py`  |
|  3.1% |       1 | `Driver.parse_tokens` | `driver.py` |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      27 | `Parser._addtoken` | `parse.py` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 69.2% |      18 | `Visitor.visit_default`       | `nodes.py`   |
| 26.9% |       7 | `LineGenerator.visit_stmt`    | `linegen.py` |
|  3.8% |       1 | `LineGenerator.visit_funcdef` | `linegen.py` |

##### `Parser.shift` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      24 | `Parser._addtoken` | `parse.py` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Caller                           | Location      |
| ----: | ------: | -------------------------------- | ------------- |
| 87.5% |      21 | `_stringify_ast_with_new_parent` | `parsing.py`  |
| 12.5% |       3 | `assert_equivalent`              | `__init__.py` |

##### `Line.append` (`lines.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 80.0% |      16 | `LineGenerator.visit_default` | `linegen.py` |
| 20.0% |       4 | `bracket_split_build_line`    | `linegen.py` |

##### `Visitor.visit_default` (`nodes.py`)

|      % | Samples | Caller                        | Location     |
| -----: | ------: | ----------------------------- | ------------ |
| 100.0% |      12 | `LineGenerator.visit_default` | `linegen.py` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      12 | `Driver.parse_tokens` | `driver.py` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |      11 | `_format_str_once` | `__init__.py` |

##### `Parser.push` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      10 | `Parser._addtoken` | `parse.py` |

##### `BracketTracker.mark` (`brackets.py`)

|     % | Samples | Caller                               | Location     |
| ----: | ------: | ------------------------------------ | ------------ |
| 77.8% |       7 | `Line.append`                        | `lines.py`   |
| 11.1% |       1 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`   |
| 11.1% |       1 | `should_split_line`                  | `linegen.py` |

##### `LineGenerator.visit_simple_stmt` (`linegen.py`)

|      % | Samples | Caller          | Location   |
| -----: | ------: | --------------- | ---------- |
| 100.0% |       9 | `Visitor.visit` | `nodes.py` |

##### `LineGenerator.visit_power` (`linegen.py`)

|      % | Samples | Caller          | Location   |
| -----: | ------: | --------------- | ---------- |
| 100.0% |       9 | `Visitor.visit` | `nodes.py` |

##### `assert_equivalent` (`__init__.py`)

|      % | Samples | Caller                            | Location      |
| -----: | ------: | --------------------------------- | ------------- |
| 100.0% |       8 | `check_stability_and_equivalence` | `__init__.py` |

##### `transform_line` (`linegen.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |       8 | `_format_str_once` | `__init__.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       8 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `LineGenerator.visit_default` (`linegen.py`)

|      % | Samples | Caller          | Location   |
| -----: | ------: | --------------- | ---------- |
| 100.0% |       7 | `Visitor.visit` | `nodes.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % | Samples | Caller                              | Location                                 |
| ----: | ------: | ----------------------------------- | ---------------------------------------- |
| 50.0% |       1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
| 50.0% |       1 | `ExtensionFileLoader.exec_module`   | `<frozen importlib._bootstrap_external>` |

##### `_HierarchicalLockManager.__enter__` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `FileFinder._fill_cache` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       1 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `ABCMeta.__new__` (`<frozen abc>`)

|      % | Samples | Caller     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |       1 | `<module>` | `specifiers.py` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       1 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                         | Location         |
| -----: | ------: | -------------------------------- | ---------------- |
| 100.0% |     975 | `_run_code`                      | `<frozen runpy>` |
| 100.0% |     975 | `run_module`                     | `<frozen runpy>` |
| 100.0% |     975 | `_run_module_as_main`            | `<frozen runpy>` |
|  97.2% |     948 | `Command.main`                   | `core.py`        |
|  97.2% |     948 | `Command.__call__`               | `core.py`        |
|  97.2% |     948 | `patched_main`                   | `__init__.py`    |
|  97.2% |     948 | `<module>`                       | `__main__.py`    |
|  97.2% |     948 | `_run_module_code`               | `<frozen runpy>` |
|  97.1% |     947 | `format_file_in_place`           | `__init__.py`    |
|  97.1% |     947 | `reformat_one`                   | `__init__.py`    |
|  97.1% |     947 | `main`                           | `__init__.py`    |
|  97.1% |     947 | `pass_context.<locals>.new_func` | `decorators.py`  |
|  97.1% |     947 | `Context.invoke`                 | `core.py`        |
|  97.1% |     947 | `Command.invoke`                 | `core.py`        |
|  96.9% |     945 | `format_file_contents`           | `__init__.py`    |
|  87.3% |     851 | `_format_str_once`               | `__init__.py`    |
|  50.7% |     494 | `Driver.parse_tokens`            | `driver.py`      |
|  50.7% |     494 | `Driver.parse_string`            | `driver.py`      |
|  50.7% |     494 | `lib2to3_parse`                  | `parsing.py`     |
|  50.6% |     493 | `format_str`                     | `__init__.py`    |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 97.2% |     948 | `Command.main`                    | `core.py`       |
| 97.2% |     948 | `Command.__call__`                | `core.py`       |
| 97.2% |     948 | `patched_main`                    | `__init__.py`   |
| 97.2% |     948 | `<module>`                        | `__main__.py`   |
| 97.1% |     947 | `format_file_in_place`            | `__init__.py`   |
| 97.1% |     947 | `reformat_one`                    | `__init__.py`   |
| 97.1% |     947 | `main`                            | `__init__.py`   |
| 97.1% |     947 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 97.1% |     947 | `Context.invoke`                  | `core.py`       |
| 97.1% |     947 | `Command.invoke`                  | `core.py`       |
| 96.9% |     945 | `format_file_contents`            | `__init__.py`   |
| 87.3% |     851 | `_format_str_once`                | `__init__.py`   |
| 50.7% |     494 | `Driver.parse_tokens`             | `driver.py`     |
| 50.7% |     494 | `Driver.parse_string`             | `driver.py`     |
| 50.7% |     494 | `lib2to3_parse`                   | `parsing.py`    |
| 50.6% |     493 | `format_str`                      | `__init__.py`   |
| 46.4% |     452 | `check_stability_and_equivalence` | `__init__.py`   |
| 37.4% |     365 | `assert_stable`                   | `__init__.py`   |
| 25.7% |     251 | `Parser.addtoken`                 | `parse.py`      |
| 23.1% |     225 | `Parser._addtoken`                | `parse.py`      |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 28.8% |     281 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                             | Location                                 |
| -----: | ------: | ------------------------------------ | ---------------------------------------- |
| 100.0% |     975 | `_run_code`                          | `<frozen runpy>`                         |
| 100.0% |     975 | `run_module`                         | `<frozen runpy>`                         |
| 100.0% |     975 | `_run_module_as_main`                | `<frozen runpy>`                         |
|  97.2% |     948 | `_run_module_code`                   | `<frozen runpy>`                         |
|   2.8% |      27 | `_LoaderBasics.exec_module`          | `<frozen importlib._bootstrap_external>` |
|   2.8% |      27 | `_load_unlocked`                     | `<frozen importlib._bootstrap>`          |
|   2.8% |      27 | `_find_and_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|   2.8% |      27 | `_find_and_load`                     | `<frozen importlib._bootstrap>`          |
|   2.8% |      27 | `_call_with_frames_removed`          | `<frozen importlib._bootstrap>`          |
|   2.8% |      27 | `_get_module_details`                | `<frozen runpy>`                         |
|   0.9% |       9 | `SourceLoader.get_code`              | `<frozen importlib._bootstrap_external>` |
|   0.8% |       8 | `_compile_bytecode`                  | `<frozen importlib._bootstrap_external>` |
|   0.6% |       6 | `_handle_fromlist`                   | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `_HierarchicalLockManager.__enter__` | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `ExtensionFileLoader.create_module`  | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `module_from_spec`                   | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `ExtensionFileLoader.exec_module`    | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `FileFinder._fill_cache`             | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `FileFinder.find_spec`               | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `PathFinder._get_spec`               | `<frozen importlib._bootstrap_external>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |     975 | `run_module` | `<frozen runpy>` |
|  97.2% |     948 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 97.2% |     948 | `_run_module_code`    | `<frozen runpy>` |
|  2.8% |      27 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     975 | `_run_code` | `<frozen runpy>` |

##### `Command.main` (`core.py`)

|     % | Samples | Callee                 | Location  |
| ----: | ------: | ---------------------- | --------- |
| 99.9% |     947 | `Command.invoke`       | `core.py` |
|  0.1% |       1 | `Command.make_context` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |     948 | `Command.main` | `core.py` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee             | Location  |
| -----: | ------: | ------------------ | --------- |
| 100.0% |     948 | `Command.__call__` | `core.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     948 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     948 | `_run_code` | `<frozen runpy>` |

##### `format_file_in_place` (`__init__.py`)

|     % | Samples | Callee                 | Location      |
| ----: | ------: | ---------------------- | ------------- |
| 99.8% |     945 | `format_file_contents` | `__init__.py` |

##### `reformat_one` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |     947 | `format_file_in_place` | `__init__.py` |

##### `main` (`__init__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     947 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |     947 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |     947 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     947 | `Context.invoke` | `core.py` |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 52.2% |     493 | `format_str`                      | `__init__.py` |
| 47.8% |     452 | `check_stability_and_equivalence` | `__init__.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                               | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 58.0% |     494 | `lib2to3_parse`                      | `parsing.py`  |
| 20.1% |     171 | `Visitor.visit`                      | `nodes.py`    |
| 11.3% |      96 | `detect_target_versions`             | `__init__.py` |
|  6.0% |      51 | `transform_line`                     | `linegen.py`  |
|  1.8% |      15 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                | Location      |
| ----: | ------: | --------------------- | ------------- |
| 50.8% |     251 | `Parser.addtoken`     | `parse.py`    |
| 34.2% |     169 | `(garbage collector)` | `<unknown>`   |
|  5.7% |      28 | `TokenProxy.__next__` | `driver.py`   |
|  0.2% |       1 | `Parser._addtoken`    | `parse.py`    |
|  0.2% |       1 | `generate_tokens`     | `tokenize.py` |

##### `Driver.parse_string` (`driver.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     494 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     494 | `Driver.parse_string` | `driver.py` |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 98.8% |     487 | `_format_str_once` | `__init__.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 80.8% |     365 | `assert_stable`     | `__init__.py` |
| 18.4% |      83 | `assert_equivalent` | `__init__.py` |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.7% |     364 | `_format_str_once` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 87.6% |     220 | `Parser._addtoken` | `parse.py`    |
|  5.2% |      13 | `generate_tokens`  | `tokenize.py` |
|  2.4% |       6 | `Parser.classify`  | `parse.py`    |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 16.9% |      38 | `Parser.shift`        | `parse.py`  |
| 13.8% |      31 | `Parser.pop`          | `parse.py`  |
|  5.3% |      12 | `(garbage collector)` | `<unknown>` |
|  4.4% |      10 | `Parser.push`         | `parse.py`  |
|  0.4% |       1 | `convert`             | `pytree.py` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      27 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  33.3% |       9 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

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
|   3.7% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |
|   3.7% |       1 | `_find_spec`                | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                               | Location                        |
| -----: | ------: | ------------------------------------ | ------------------------------- |
| 100.0% |      27 | `_find_and_load_unlocked`            | `<frozen importlib._bootstrap>` |
|   3.7% |       1 | `_HierarchicalLockManager.__enter__` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |      27 | `<module>`       | `__init__.py`                   |
|  22.2% |       6 | `_find_and_load` | `<frozen importlib._bootstrap>` |
|  22.2% |       6 | `<module>`       | `files.py`                      |
|  18.5% |       5 | `<module>`       | `cache.py`                      |
|  18.5% |       5 | `<module>`       | `nodes.py`                      |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |      27 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |      27 | `_get_module_details` | `<frozen runpy>`                |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                | Location                                 |
| ----: | ------: | --------------------- | ---------------------------------------- |
| 88.9% |       8 | `_compile_bytecode`   | `<frozen importlib._bootstrap_external>` |
| 11.1% |       1 | `_find_and_load`      | `<frozen importlib._bootstrap>`          |
| 11.1% |       1 | `FileLoader.get_data` | `<frozen importlib._bootstrap_external>` |

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

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                   | Location                                 |
| -----: | ------: | ------------------------ | ---------------------------------------- |
| 100.0% |       1 | `FileFinder._fill_cache` | `<frozen importlib._bootstrap_external>` |

##### `PathFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       1 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `_run_code` ← `_run_module_as_main`

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17.3% |     169 | `(garbage collector)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  8.4% |      82 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  7.0% |      68 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  4.7% |      46 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  4.1% |      40 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  3.8% |      37 | `(garbage collector)` ← `is_vararg` (`nodes.py`) ← `is_split_before_delimiter` (`brackets.py`) ← `BracketTracker.mark` ← `max_delimiter_priority_in_atom` ← `maybe_make_parens_invisible_in_atom` (`linegen.py`) ← `normalize_invisible_parens` ← `LineGenerator.visit_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` |
|  2.8% |      27 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.7% |      26 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.2% |      21 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.9% |      19 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.7% |      17 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.2% |      12 | `generate_tokens` (`tokenize.py`) ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.1% |      11 | `EmptyLineTracker.maybe_empty_lines` (`lines.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.0% |      10 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.9% |       9 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.8% |       8 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.8% |       8 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.8% |       8 | `Parser.push` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.8% |       8 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.8% |       8 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                |

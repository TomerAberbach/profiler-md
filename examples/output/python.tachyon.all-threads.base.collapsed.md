# Sampling profile

Collected 981 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 70.5% |     692 |
| Garbage collector | 28.1% |     276 |
| Standard library  |  1.3% |      13 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                             | Location                                 |
| ----: | ------: | ------------------------------------ | ---------------------------------------- |
| 28.1% |     276 | `(garbage collector)`                | `<unknown>`                              |
| 17.3% |     170 | `Parser._addtoken`                   | `parse.py`                               |
|  9.3% |      91 | `get_features_used`                  | `__init__.py`                            |
|  4.9% |      48 | `Driver.parse_tokens`                | `driver.py`                              |
|  4.5% |      44 | `parse`                              | `ast.py`                                 |
|  4.3% |      42 | `generate_tokens`                    | `tokenize.py`                            |
|  2.7% |      26 | `Line.append`                        | `lines.py`                               |
|  2.3% |      23 | `Parser.pop`                         | `parse.py`                               |
|  1.8% |      18 | `Visitor.visit`                      | `nodes.py`                               |
|  1.7% |      17 | `Parser.shift`                       | `parse.py`                               |
|  1.4% |      14 | `_stringify_ast`                     | `parsing.py`                             |
|  1.2% |      12 | `assert_equivalent`                  | `__init__.py`                            |
|  1.0% |      10 | `Parser.addtoken`                    | `parse.py`                               |
|  1.0% |      10 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`                               |
|  0.9% |       9 | `_format_str_once`                   | `__init__.py`                            |
|  0.9% |       9 | `convert_one_fmt_off_pair`           | `comments.py`                            |
|  0.9% |       9 | `_compile_bytecode`                  | `<frozen importlib._bootstrap_external>` |
|  0.8% |       8 | `BracketTracker.mark`                | `brackets.py`                            |
|  0.8% |       8 | `LineGenerator.visit_default`        | `linegen.py`                             |
|  0.8% |       8 | `line_to_string`                     | `lines.py`                               |

#### Categories

##### Ours

|     % | Samples | Function                             | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 17.3% |     170 | `Parser._addtoken`                   | `parse.py`    |
|  9.3% |      91 | `get_features_used`                  | `__init__.py` |
|  4.9% |      48 | `Driver.parse_tokens`                | `driver.py`   |
|  4.5% |      44 | `parse`                              | `ast.py`      |
|  4.3% |      42 | `generate_tokens`                    | `tokenize.py` |
|  2.7% |      26 | `Line.append`                        | `lines.py`    |
|  2.3% |      23 | `Parser.pop`                         | `parse.py`    |
|  1.8% |      18 | `Visitor.visit`                      | `nodes.py`    |
|  1.7% |      17 | `Parser.shift`                       | `parse.py`    |
|  1.4% |      14 | `_stringify_ast`                     | `parsing.py`  |
|  1.2% |      12 | `assert_equivalent`                  | `__init__.py` |
|  1.0% |      10 | `Parser.addtoken`                    | `parse.py`    |
|  1.0% |      10 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |
|  0.9% |       9 | `_format_str_once`                   | `__init__.py` |
|  0.9% |       9 | `convert_one_fmt_off_pair`           | `comments.py` |
|  0.8% |       8 | `BracketTracker.mark`                | `brackets.py` |
|  0.8% |       8 | `LineGenerator.visit_default`        | `linegen.py`  |
|  0.8% |       8 | `line_to_string`                     | `lines.py`    |
|  0.7% |       7 | `Parser.push`                        | `parse.py`    |
|  0.7% |       7 | `transform_line`                     | `linegen.py`  |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 28.1% |     276 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                    | Location                                 |
| ---: | ------: | --------------------------- | ---------------------------------------- |
| 0.9% |       9 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| 0.1% |       1 | `_find_spec`                | `<frozen importlib._bootstrap>`          |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 16.5% |      28 | `parse.py:311` |
| 15.9% |      27 | `parse.py:328` |
| 11.8% |      20 | `parse.py:305` |
|  9.4% |      16 | `parse.py:297` |
|  8.8% |      15 | `parse.py:298` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 16.5% |      15 | `__init__.py:1424` |
| 16.5% |      15 | `__init__.py:1440` |
| 16.5% |      15 | `__init__.py:1335` |
| 13.2% |      12 | `__init__.py:1436` |
|  6.6% |       6 | `__init__.py:1430` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 68.8% |      33 | `driver.py:162` |
| 22.9% |      11 | `driver.py:128` |
|  2.1% |       1 | `driver.py:129` |
|  2.1% |       1 | `driver.py:159` |
|  2.1% |       1 | `driver.py:161` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      44 | `ast.py:46` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 31.0% |      13 | `tokenize.py:875` |
| 21.4% |       9 | `tokenize.py:624` |
|  7.1% |       3 | `tokenize.py:704` |
|  4.8% |       2 | `tokenize.py:962` |
|  2.4% |       1 | `tokenize.py:627` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location      |
| ----: | ------: | ------------- |
| 65.4% |      17 | `lines.py:95` |
| 11.5% |       3 | `lines.py:89` |
|  3.8% |       1 | `lines.py:86` |
|  3.8% |       1 | `lines.py:91` |
|  3.8% |       1 | `lines.py:84` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 60.9% |      14 | `parse.py:404` |
| 17.4% |       4 | `parse.py:406` |
|  8.7% |       2 | `parse.py:408` |
|  4.3% |       1 | `parse.py:403` |
|  4.3% |       1 | `parse.py:407` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 50.0% |       9 | `nodes.py:183` |
| 38.9% |       7 | `nodes.py:185` |
|  5.6% |       1 | `nodes.py:163` |
|  5.6% |       1 | `nodes.py:174` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 70.6% |      12 | `parse.py:381` |
| 11.8% |       2 | `parse.py:383` |
| 11.8% |       2 | `parse.py:384` |
|  5.9% |       1 | `parse.py:382` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 57.1% |       8 | `parsing.py:217` |
| 14.3% |       2 | `parsing.py:214` |
| 14.3% |       2 | `parsing.py:187` |
|  7.1% |       1 | `parsing.py:234` |
|  7.1% |       1 | `parsing.py:174` |

##### `assert_equivalent` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 50.0% |       6 | `__init__.py:1546` |
| 50.0% |       6 | `__init__.py:1547` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 90.0% |       9 | `parse.py:252` |
| 10.0% |       1 | `parse.py:245` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 90.0% |       9 | `lines.py:571` |
| 10.0% |       1 | `lines.py:584` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 55.6% |       5 | `__init__.py:1268` |
| 11.1% |       1 | `__init__.py:1271` |
| 11.1% |       1 | `__init__.py:1279` |
| 11.1% |       1 | `__init__.py:1269` |
| 11.1% |       1 | `__init__.py:1287` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 66.7% |       6 | `comments.py:186` |
| 22.2% |       2 | `comments.py:184` |
| 11.1% |       1 | `comments.py:185` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       9 | `<frozen importlib._bootstrap_external>:500` |

##### `BracketTracker.mark` (`brackets.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 37.5% |       3 | `brackets.py:128` |
| 25.0% |       2 | `brackets.py:112` |
| 12.5% |       1 | `brackets.py:114` |
| 12.5% |       1 | `brackets.py:88`  |
| 12.5% |       1 | `brackets.py:127` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 62.5% |       5 | `linegen.py:158` |
| 25.0% |       2 | `linegen.py:134` |
| 12.5% |       1 | `linegen.py:157` |

##### `line_to_string` (`lines.py`)

|      % | Samples | Location        |
| -----: | ------: | --------------- |
| 100.0% |       8 | `lines.py:1078` |

##### `Parser.push` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 28.6% |       2 | `parse.py:395` |
| 28.6% |       2 | `parse.py:394` |
| 28.6% |       2 | `parse.py:396` |
| 14.3% |       1 | `parse.py:386` |

##### `transform_line` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 71.4% |       5 | `linegen.py:714` |
| 14.3% |       1 | `linegen.py:635` |
| 14.3% |       1 | `linegen.py:716` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:872` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:747` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap>:549` |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       1 | `<frozen importlib._bootstrap>:1222` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 65.6% |     181 | `Driver.parse_tokens`             | `driver.py`   |
| 12.7% |      35 | `is_vararg`                       | `nodes.py`    |
|  3.6% |      10 | `Parser._addtoken`                | `parse.py`    |
|  2.9% |       8 | `__create_fn__.<locals>.__init__` | `<string>`    |
|  2.5% |       7 | `generate_comments`               | `comments.py` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                | Location      |
| ----: | ------: | --------------------- | ------------- |
| 98.2% |     167 | `Parser.addtoken`     | `parse.py`    |
|  1.2% |       2 | `TokenProxy.__next__` | `driver.py`   |
|  0.6% |       1 | `Logger.debug`        | `__init__.py` |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |      91 | `detect_target_versions` | `__init__.py` |

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      48 | `Driver.parse_string` | `driver.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      44 | `_parse_single_version` | `parsing.py` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 50.0% |      21 | `Parser.addtoken`     | `parse.py`  |
| 47.6% |      20 | `TokenProxy.__next__` | `driver.py` |
|  2.4% |       1 | `Driver.parse_tokens` | `driver.py` |

##### `Line.append` (`lines.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 69.2% |      18 | `LineGenerator.visit_default` | `linegen.py` |
| 26.9% |       7 | `bracket_split_build_line`    | `linegen.py` |
|  3.8% |       1 | `hug_power_op`                | `trans.py`   |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      23 | `Parser._addtoken` | `parse.py` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 77.8% |      14 | `Visitor.visit_default`       | `nodes.py`   |
| 16.7% |       3 | `LineGenerator.visit_stmt`    | `linegen.py` |
|  5.6% |       1 | `LineGenerator.visit_funcdef` | `linegen.py` |

##### `Parser.shift` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      17 | `Parser._addtoken` | `parse.py` |

##### `_stringify_ast` (`parsing.py`)

|      % | Samples | Caller                           | Location     |
| -----: | ------: | -------------------------------- | ------------ |
| 100.0% |      14 | `_stringify_ast_with_new_parent` | `parsing.py` |

##### `assert_equivalent` (`__init__.py`)

|      % | Samples | Caller                            | Location      |
| -----: | ------: | --------------------------------- | ------------- |
| 100.0% |      12 | `check_stability_and_equivalence` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      10 | `Driver.parse_tokens` | `driver.py` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |      10 | `_format_str_once` | `__init__.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Caller          | Location      |
| ----: | ------: | --------------- | ------------- |
| 66.7% |       6 | `format_str`    | `__init__.py` |
| 33.3% |       3 | `assert_stable` | `__init__.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|      % | Samples | Caller              | Location      |
| -----: | ------: | ------------------- | ------------- |
| 100.0% |       9 | `normalize_fmt_off` | `comments.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       9 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `BracketTracker.mark` (`brackets.py`)

|     % | Samples | Caller                               | Location   |
| ----: | ------: | ------------------------------------ | ---------- |
| 87.5% |       7 | `Line.append`                        | `lines.py` |
| 12.5% |       1 | `EmptyLineTracker.maybe_empty_lines` | `lines.py` |

##### `LineGenerator.visit_default` (`linegen.py`)

|      % | Samples | Caller          | Location   |
| -----: | ------: | --------------- | ---------- |
| 100.0% |       8 | `Visitor.visit` | `nodes.py` |

##### `line_to_string` (`lines.py`)

|      % | Samples | Caller           | Location     |
| -----: | ------: | ---------------- | ------------ |
| 100.0% |       8 | `transform_line` | `linegen.py` |

##### `Parser.push` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |       7 | `Parser._addtoken` | `parse.py` |

##### `transform_line` (`linegen.py`)

|     % | Samples | Caller             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 71.4% |       5 | `_format_str_once` | `__init__.py` |
| 28.6% |       2 | `run_transformer`  | `linegen.py`  |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |       1 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       1 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller                              | Location                                 |
| -----: | ------: | ----------------------------------- | ---------------------------------------- |
| 100.0% |       1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |       1 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                          | Location         |
| -----: | ------: | --------------------------------- | ---------------- |
| 100.0% |     981 | `_run_code`                       | `<frozen runpy>` |
| 100.0% |     981 | `run_module`                      | `<frozen runpy>` |
| 100.0% |     981 | `_run_module_as_main`             | `<frozen runpy>` |
|  97.3% |     955 | `Command.main`                    | `core.py`        |
|  97.3% |     955 | `Command.__call__`                | `core.py`        |
|  97.3% |     955 | `patched_main`                    | `__init__.py`    |
|  97.3% |     955 | `<module>`                        | `__main__.py`    |
|  97.3% |     955 | `_run_module_code`                | `<frozen runpy>` |
|  97.2% |     954 | `format_file_in_place`            | `__init__.py`    |
|  97.2% |     954 | `reformat_one`                    | `__init__.py`    |
|  97.2% |     954 | `main`                            | `__init__.py`    |
|  97.2% |     954 | `pass_context.<locals>.new_func`  | `decorators.py`  |
|  97.2% |     954 | `Context.invoke`                  | `core.py`        |
|  97.2% |     954 | `Command.invoke`                  | `core.py`        |
|  97.0% |     952 | `format_file_contents`            | `__init__.py`    |
|  88.2% |     865 | `_format_str_once`                | `__init__.py`    |
|  54.2% |     532 | `Driver.parse_tokens`             | `driver.py`      |
|  54.2% |     532 | `Driver.parse_string`             | `driver.py`      |
|  54.2% |     532 | `lib2to3_parse`                   | `parsing.py`     |
|  49.5% |     486 | `check_stability_and_equivalence` | `__init__.py`    |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 97.3% |     955 | `Command.main`                    | `core.py`       |
| 97.3% |     955 | `Command.__call__`                | `core.py`       |
| 97.3% |     955 | `patched_main`                    | `__init__.py`   |
| 97.3% |     955 | `<module>`                        | `__main__.py`   |
| 97.2% |     954 | `format_file_in_place`            | `__init__.py`   |
| 97.2% |     954 | `reformat_one`                    | `__init__.py`   |
| 97.2% |     954 | `main`                            | `__init__.py`   |
| 97.2% |     954 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 97.2% |     954 | `Context.invoke`                  | `core.py`       |
| 97.2% |     954 | `Command.invoke`                  | `core.py`       |
| 97.0% |     952 | `format_file_contents`            | `__init__.py`   |
| 88.2% |     865 | `_format_str_once`                | `__init__.py`   |
| 54.2% |     532 | `Driver.parse_tokens`             | `driver.py`     |
| 54.2% |     532 | `Driver.parse_string`             | `driver.py`     |
| 54.2% |     532 | `lib2to3_parse`                   | `parsing.py`    |
| 49.5% |     486 | `check_stability_and_equivalence` | `__init__.py`   |
| 47.5% |     466 | `format_str`                      | `__init__.py`   |
| 41.3% |     405 | `assert_stable`                   | `__init__.py`   |
| 27.3% |     268 | `Parser.addtoken`                 | `parse.py`      |
| 24.4% |     239 | `Parser._addtoken`                | `parse.py`      |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 28.1% |     276 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                            | Location                                 |
| -----: | ------: | ----------------------------------- | ---------------------------------------- |
| 100.0% |     981 | `_run_code`                         | `<frozen runpy>`                         |
| 100.0% |     981 | `run_module`                        | `<frozen runpy>`                         |
| 100.0% |     981 | `_run_module_as_main`               | `<frozen runpy>`                         |
|  97.3% |     955 | `_run_module_code`                  | `<frozen runpy>`                         |
|   2.7% |      26 | `_LoaderBasics.exec_module`         | `<frozen importlib._bootstrap_external>` |
|   2.7% |      26 | `_load_unlocked`                    | `<frozen importlib._bootstrap>`          |
|   2.7% |      26 | `_find_and_load_unlocked`           | `<frozen importlib._bootstrap>`          |
|   2.7% |      26 | `_find_and_load`                    | `<frozen importlib._bootstrap>`          |
|   2.7% |      26 | `_call_with_frames_removed`         | `<frozen importlib._bootstrap>`          |
|   2.7% |      26 | `_get_module_details`               | `<frozen runpy>`                         |
|   1.0% |      10 | `SourceLoader.get_code`             | `<frozen importlib._bootstrap_external>` |
|   0.9% |       9 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
|   0.7% |       7 | `_handle_fromlist`                  | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `_find_spec`                        | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `module_from_spec`                  | `<frozen importlib._bootstrap>`          |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |     981 | `run_module` | `<frozen runpy>` |
|  97.3% |     955 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 97.3% |     955 | `_run_module_code`    | `<frozen runpy>` |
|  2.7% |      26 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     981 | `_run_code` | `<frozen runpy>` |

##### `Command.main` (`core.py`)

|     % | Samples | Callee                 | Location  |
| ----: | ------: | ---------------------- | --------- |
| 99.9% |     954 | `Command.invoke`       | `core.py` |
|  0.1% |       1 | `Command.make_context` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |     955 | `Command.main` | `core.py` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee             | Location  |
| -----: | ------: | ------------------ | --------- |
| 100.0% |     955 | `Command.__call__` | `core.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     955 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     955 | `_run_code` | `<frozen runpy>` |

##### `format_file_in_place` (`__init__.py`)

|     % | Samples | Callee                 | Location      |
| ----: | ------: | ---------------------- | ------------- |
| 99.8% |     952 | `format_file_contents` | `__init__.py` |

##### `reformat_one` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |     954 | `format_file_in_place` | `__init__.py` |

##### `main` (`__init__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     954 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |     954 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |     954 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     954 | `Context.invoke` | `core.py` |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 51.1% |     486 | `check_stability_and_equivalence` | `__init__.py` |
| 48.9% |     466 | `format_str`                      | `__init__.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                               | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 61.5% |     532 | `lib2to3_parse`                      | `parsing.py`  |
| 16.9% |     146 | `Visitor.visit`                      | `nodes.py`    |
| 10.5% |      91 | `detect_target_versions`             | `__init__.py` |
|  6.4% |      55 | `transform_line`                     | `linegen.py`  |
|  1.7% |      15 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                | Location      |
| ----: | ------: | --------------------- | ------------- |
| 50.4% |     268 | `Parser.addtoken`     | `parse.py`    |
| 34.0% |     181 | `(garbage collector)` | `<unknown>`   |
|  6.2% |      33 | `TokenProxy.__next__` | `driver.py`   |
|  0.2% |       1 | `generate_tokens`     | `tokenize.py` |
|  0.2% |       1 | `Logger.debug`        | `__init__.py` |

##### `Driver.parse_string` (`driver.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     532 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     532 | `Driver.parse_string` | `driver.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 83.3% |     405 | `assert_stable`     | `__init__.py` |
| 15.8% |      77 | `assert_equivalent` | `__init__.py` |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.1% |     462 | `_format_str_once` | `__init__.py` |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.5% |     403 | `_format_str_once` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 88.1% |     236 | `Parser._addtoken` | `parse.py`    |
|  7.8% |      21 | `generate_tokens`  | `tokenize.py` |
|  0.4% |       1 | `Parser.classify`  | `parse.py`    |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 10.9% |      26 | `Parser.shift`        | `parse.py`  |
| 10.9% |      26 | `Parser.pop`          | `parse.py`  |
|  4.2% |      10 | `(garbage collector)` | `<unknown>` |
|  2.9% |       7 | `Parser.push`         | `parse.py`  |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      26 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  38.5% |      10 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      26 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
|   3.8% |       1 | `module_from_spec`          | `<frozen importlib._bootstrap>`          |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |      26 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
|   3.8% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |
|   3.8% |       1 | `_find_spec`                | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |      26 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |      26 | `<module>`       | `__init__.py`                   |
|  26.9% |       7 | `_find_and_load` | `<frozen importlib._bootstrap>` |
|  23.1% |       6 | `<module>`       | `files.py`                      |
|  19.2% |       5 | `<module>`       | `cache.py`                      |
|  19.2% |       5 | `<module>`       | `nodes.py`                      |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |      26 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |      26 | `_get_module_details` | `<frozen runpy>`                |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee              | Location                                 |
| ----: | ------: | ------------------- | ---------------------------------------- |
| 90.0% |       9 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       7 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

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

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18.5% |     181 | `(garbage collector)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 11.0% |     108 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  6.1% |      60 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  6.0% |      59 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  4.5% |      44 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  3.6% |      35 | `(garbage collector)` ← `is_vararg` (`nodes.py`) ← `is_split_before_delimiter` (`brackets.py`) ← `BracketTracker.mark` ← `max_delimiter_priority_in_atom` ← `maybe_make_parens_invisible_in_atom` (`linegen.py`) ← `normalize_invisible_parens` ← `LineGenerator.visit_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` |
|  3.4% |      33 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  3.2% |      31 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.8% |      18 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.5% |      15 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.4% |      14 | `generate_tokens` (`tokenize.py`) ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.2% |      12 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.1% |      11 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.0% |      10 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.9% |       9 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.8% |       8 | `EmptyLineTracker.maybe_empty_lines` (`lines.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.8% |       8 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.8% |       8 | `_stringify_ast` (`parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.8% |       8 | `line_to_string` (`lines.py`) ← `transform_line` (`linegen.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.7% |       7 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                              |

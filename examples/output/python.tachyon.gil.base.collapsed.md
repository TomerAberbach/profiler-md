# Sampling profile

Collected 935 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 67.9% |     635 |
| Garbage collector | 30.8% |     288 |
| Standard library  |  1.3% |      12 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                             | Location                                 |
| ----: | ------: | ------------------------------------ | ---------------------------------------- |
| 30.8% |     288 | `(garbage collector)`                | `<unknown>`                              |
| 14.7% |     137 | `Parser._addtoken`                   | `parse.py`                               |
|  9.4% |      88 | `get_features_used`                  | `__init__.py`                            |
|  6.2% |      58 | `Driver.parse_tokens`                | `driver.py`                              |
|  4.3% |      40 | `generate_tokens`                    | `tokenize.py`                            |
|  4.0% |      37 | `parse`                              | `ast.py`                                 |
|  3.6% |      34 | `Visitor.visit`                      | `nodes.py`                               |
|  2.4% |      22 | `Line.append`                        | `lines.py`                               |
|  2.0% |      19 | `Parser.pop`                         | `parse.py`                               |
|  1.6% |      15 | `convert_one_fmt_off_pair`           | `comments.py`                            |
|  1.5% |      14 | `_stringify_ast`                     | `parsing.py`                             |
|  1.4% |      13 | `Parser.shift`                       | `parse.py`                               |
|  1.4% |      13 | `LineGenerator.visit_default`        | `linegen.py`                             |
|  1.1% |      10 | `Parser.addtoken`                    | `parse.py`                               |
|  1.1% |      10 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`                               |
|  1.0% |       9 | `assert_equivalent`                  | `__init__.py`                            |
|  1.0% |       9 | `normalize_invisible_parens`         | `linegen.py`                             |
|  1.0% |       9 | `_compile_bytecode`                  | `<frozen importlib._bootstrap_external>` |
|  0.6% |       6 | `_format_str_once`                   | `__init__.py`                            |
|  0.6% |       6 | `transform_line`                     | `linegen.py`                             |

#### Categories

##### Ours

|     % | Samples | Function                             | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 14.7% |     137 | `Parser._addtoken`                   | `parse.py`    |
|  9.4% |      88 | `get_features_used`                  | `__init__.py` |
|  6.2% |      58 | `Driver.parse_tokens`                | `driver.py`   |
|  4.3% |      40 | `generate_tokens`                    | `tokenize.py` |
|  4.0% |      37 | `parse`                              | `ast.py`      |
|  3.6% |      34 | `Visitor.visit`                      | `nodes.py`    |
|  2.4% |      22 | `Line.append`                        | `lines.py`    |
|  2.0% |      19 | `Parser.pop`                         | `parse.py`    |
|  1.6% |      15 | `convert_one_fmt_off_pair`           | `comments.py` |
|  1.5% |      14 | `_stringify_ast`                     | `parsing.py`  |
|  1.4% |      13 | `Parser.shift`                       | `parse.py`    |
|  1.4% |      13 | `LineGenerator.visit_default`        | `linegen.py`  |
|  1.1% |      10 | `Parser.addtoken`                    | `parse.py`    |
|  1.1% |      10 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |
|  1.0% |       9 | `assert_equivalent`                  | `__init__.py` |
|  1.0% |       9 | `normalize_invisible_parens`         | `linegen.py`  |
|  0.6% |       6 | `_format_str_once`                   | `__init__.py` |
|  0.6% |       6 | `transform_line`                     | `linegen.py`  |
|  0.6% |       6 | `line_to_string`                     | `lines.py`    |
|  0.6% |       6 | `LinesBlock.all_lines`               | `lines.py`    |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 30.8% |     288 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                    | Location                                 |
| ---: | ------: | --------------------------- | ---------------------------------------- |
| 1.0% |       9 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| 0.1% |       1 | `FileFinder._get_spec`      | `<frozen importlib._bootstrap_external>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 20.4% |      28 | `parse.py:328` |
| 16.1% |      22 | `parse.py:311` |
| 11.7% |      16 | `parse.py:305` |
|  7.3% |      10 | `parse.py:314` |
|  6.6% |       9 | `parse.py:315` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 22.7% |      20 | `__init__.py:1335` |
| 14.8% |      13 | `__init__.py:1424` |
| 12.5% |      11 | `__init__.py:1436` |
| 11.4% |      10 | `__init__.py:1440` |
|  8.0% |       7 | `__init__.py:1418` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 62.1% |      36 | `driver.py:162` |
| 19.0% |      11 | `driver.py:128` |
|  6.9% |       4 | `driver.py:172` |
|  3.4% |       2 | `driver.py:140` |
|  3.4% |       2 | `driver.py:151` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 35.0% |      14 | `tokenize.py:624` |
| 27.5% |      11 | `tokenize.py:875` |
|  7.5% |       3 | `tokenize.py:634` |
|  5.0% |       2 | `tokenize.py:911` |
|  5.0% |       2 | `tokenize.py:995` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      37 | `ast.py:46` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 58.8% |      20 | `nodes.py:185` |
| 26.5% |       9 | `nodes.py:183` |
| 11.8% |       4 | `nodes.py:163` |
|  2.9% |       1 | `nodes.py:174` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location      |
| ----: | ------: | ------------- |
| 45.5% |      10 | `lines.py:89` |
| 22.7% |       5 | `lines.py:95` |
| 13.6% |       3 | `lines.py:76` |
|  4.5% |       1 | `lines.py:84` |
|  4.5% |       1 | `lines.py:86` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 42.1% |       8 | `parse.py:404` |
| 15.8% |       3 | `parse.py:408` |
| 15.8% |       3 | `parse.py:406` |
| 10.5% |       2 | `parse.py:407` |
| 10.5% |       2 | `parse.py:403` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 46.7% |       7 | `comments.py:186` |
| 40.0% |       6 | `comments.py:184` |
| 13.3% |       2 | `comments.py:188` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 50.0% |       7 | `parsing.py:217` |
| 28.6% |       4 | `parsing.py:214` |
|  7.1% |       1 | `parsing.py:185` |
|  7.1% |       1 | `parsing.py:187` |
|  7.1% |       1 | `parsing.py:240` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 69.2% |       9 | `parse.py:381` |
| 15.4% |       2 | `parse.py:384` |
|  7.7% |       1 | `parse.py:382` |
|  7.7% |       1 | `parse.py:383` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 84.6% |      11 | `linegen.py:158` |
|  7.7% |       1 | `linegen.py:137` |
|  7.7% |       1 | `linegen.py:157` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Location       |
| -----: | ------: | -------------- |
| 100.0% |      10 | `parse.py:252` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 90.0% |       9 | `lines.py:571` |
| 10.0% |       1 | `lines.py:567` |

##### `assert_equivalent` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 55.6% |       5 | `__init__.py:1546` |
| 33.3% |       3 | `__init__.py:1547` |
| 11.1% |       1 | `__init__.py:1548` |

##### `normalize_invisible_parens` (`linegen.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 66.7% |       6 | `linegen.py:1432` |
| 11.1% |       1 | `linegen.py:1406` |
| 11.1% |       1 | `linegen.py:1423` |
| 11.1% |       1 | `linegen.py:1339` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       9 | `<frozen importlib._bootstrap_external>:500` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 50.0% |       3 | `__init__.py:1268` |
| 16.7% |       1 | `__init__.py:1287` |
| 16.7% |       1 | `__init__.py:1269` |
| 16.7% |       1 | `__init__.py:1271` |

##### `transform_line` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 66.7% |       4 | `linegen.py:714` |
| 16.7% |       1 | `linegen.py:619` |
| 16.7% |       1 | `linegen.py:631` |

##### `line_to_string` (`lines.py`)

|      % | Samples | Location        |
| -----: | ------: | --------------- |
| 100.0% |       6 | `lines.py:1078` |

##### `LinesBlock.all_lines` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 50.0% |       3 | `lines.py:539` |
| 33.3% |       2 | `lines.py:540` |
| 16.7% |       1 | `lines.py:541` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:743` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap>:549` |

##### `FileFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:1349` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 64.2% |     185 | `Parser._addtoken`                | `parse.py`  |
| 12.5% |      36 | `Line.clone`                      | `lines.py`  |
|  4.2% |      12 | `__create_fn__.<locals>.__init__` | `<string>`  |
|  2.8% |       8 | `convert`                         | `pytree.py` |
|  2.4% |       7 | `Base.__new__`                    | `pytree.py` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 96.4% |     132 | `Parser.addtoken`     | `parse.py`  |
|  1.5% |       2 | `Driver.parse_tokens` | `driver.py` |
|  1.5% |       2 | `TokenProxy.__next__` | `driver.py` |
|  0.7% |       1 | `cast`                | `typing.py` |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |      88 | `detect_target_versions` | `__init__.py` |

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      58 | `Driver.parse_string` | `driver.py` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Caller                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 60.0% |      24 | `TokenProxy.__next__`              | `driver.py` |
| 32.5% |      13 | `Parser.addtoken`                  | `parse.py`  |
|  5.0% |       2 | `Driver.parse_tokens`              | `driver.py` |
|  2.5% |       1 | `Driver._partially_consume_prefix` | `driver.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      37 | `_parse_single_version` | `parsing.py` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                     | Location     |
| ----: | ------: | -------------------------- | ------------ |
| 73.5% |      25 | `Visitor.visit_default`    | `nodes.py`   |
| 26.5% |       9 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `Line.append` (`lines.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 81.8% |      18 | `LineGenerator.visit_default` | `linegen.py` |
| 13.6% |       3 | `bracket_split_build_line`    | `linegen.py` |
|  4.5% |       1 | `hug_power_op`                | `trans.py`   |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      19 | `Parser._addtoken` | `parse.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|      % | Samples | Caller              | Location      |
| -----: | ------: | ------------------- | ------------- |
| 100.0% |      15 | `normalize_fmt_off` | `comments.py` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Caller                           | Location      |
| ----: | ------: | -------------------------------- | ------------- |
| 85.7% |      12 | `_stringify_ast_with_new_parent` | `parsing.py`  |
| 14.3% |       2 | `assert_equivalent`              | `__init__.py` |

##### `Parser.shift` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      13 | `Parser._addtoken` | `parse.py` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Caller                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 76.9% |      10 | `Visitor.visit`                   | `nodes.py`   |
| 15.4% |       2 | `LineGenerator.visit_simple_stmt` | `linegen.py` |
|  7.7% |       1 | `LineGenerator.visit_power`       | `linegen.py` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      10 | `Driver.parse_tokens` | `driver.py` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |      10 | `_format_str_once` | `__init__.py` |

##### `assert_equivalent` (`__init__.py`)

|      % | Samples | Caller                            | Location      |
| -----: | ------: | --------------------------------- | ------------- |
| 100.0% |       9 | `check_stability_and_equivalence` | `__init__.py` |

##### `normalize_invisible_parens` (`linegen.py`)

|      % | Samples | Caller                     | Location     |
| -----: | ------: | -------------------------- | ------------ |
| 100.0% |       9 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       9 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Caller          | Location      |
| ----: | ------: | --------------- | ------------- |
| 66.7% |       4 | `assert_stable` | `__init__.py` |
| 33.3% |       2 | `format_str`    | `__init__.py` |

##### `transform_line` (`linegen.py`)

|     % | Samples | Caller             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 83.3% |       5 | `_format_str_once` | `__init__.py` |
| 16.7% |       1 | `run_transformer`  | `linegen.py`  |

##### `line_to_string` (`lines.py`)

|      % | Samples | Caller           | Location     |
| -----: | ------: | ---------------- | ------------ |
| 100.0% |       6 | `transform_line` | `linegen.py` |

##### `LinesBlock.all_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |       6 | `_format_str_once` | `__init__.py` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       1 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `FileFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       1 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                          | Location         |
| -----: | ------: | --------------------------------- | ---------------- |
| 100.0% |     935 | `_run_code`                       | `<frozen runpy>` |
| 100.0% |     935 | `run_module`                      | `<frozen runpy>` |
| 100.0% |     935 | `_run_module_as_main`             | `<frozen runpy>` |
|  97.2% |     909 | `format_file_contents`            | `__init__.py`    |
|  97.2% |     909 | `format_file_in_place`            | `__init__.py`    |
|  97.2% |     909 | `reformat_one`                    | `__init__.py`    |
|  97.2% |     909 | `main`                            | `__init__.py`    |
|  97.2% |     909 | `pass_context.<locals>.new_func`  | `decorators.py`  |
|  97.2% |     909 | `Context.invoke`                  | `core.py`        |
|  97.2% |     909 | `Command.invoke`                  | `core.py`        |
|  97.2% |     909 | `Command.main`                    | `core.py`        |
|  97.2% |     909 | `Command.__call__`                | `core.py`        |
|  97.2% |     909 | `patched_main`                    | `__init__.py`    |
|  97.2% |     909 | `<module>`                        | `__main__.py`    |
|  97.2% |     909 | `_run_module_code`                | `<frozen runpy>` |
|  88.9% |     831 | `_format_str_once`                | `__init__.py`    |
|  52.9% |     495 | `lib2to3_parse`                   | `parsing.py`     |
|  52.8% |     494 | `Driver.parse_tokens`             | `driver.py`      |
|  52.8% |     494 | `Driver.parse_string`             | `driver.py`      |
|  50.4% |     471 | `check_stability_and_equivalence` | `__init__.py`    |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 97.2% |     909 | `format_file_contents`            | `__init__.py`   |
| 97.2% |     909 | `format_file_in_place`            | `__init__.py`   |
| 97.2% |     909 | `reformat_one`                    | `__init__.py`   |
| 97.2% |     909 | `main`                            | `__init__.py`   |
| 97.2% |     909 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 97.2% |     909 | `Context.invoke`                  | `core.py`       |
| 97.2% |     909 | `Command.invoke`                  | `core.py`       |
| 97.2% |     909 | `Command.main`                    | `core.py`       |
| 97.2% |     909 | `Command.__call__`                | `core.py`       |
| 97.2% |     909 | `patched_main`                    | `__init__.py`   |
| 97.2% |     909 | `<module>`                        | `__main__.py`   |
| 88.9% |     831 | `_format_str_once`                | `__init__.py`   |
| 52.9% |     495 | `lib2to3_parse`                   | `parsing.py`    |
| 52.8% |     494 | `Driver.parse_tokens`             | `driver.py`     |
| 52.8% |     494 | `Driver.parse_string`             | `driver.py`     |
| 50.4% |     471 | `check_stability_and_equivalence` | `__init__.py`   |
| 46.8% |     438 | `format_str`                      | `__init__.py`   |
| 42.8% |     400 | `assert_stable`                   | `__init__.py`   |
| 42.7% |     399 | `Parser.addtoken`                 | `parse.py`      |
| 40.7% |     381 | `Parser._addtoken`                | `parse.py`      |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 30.8% |     288 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                          | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |     935 | `_run_code`                       | `<frozen runpy>`                         |
| 100.0% |     935 | `run_module`                      | `<frozen runpy>`                         |
| 100.0% |     935 | `_run_module_as_main`             | `<frozen runpy>`                         |
|  97.2% |     909 | `_run_module_code`                | `<frozen runpy>`                         |
|   2.8% |      26 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   2.8% |      26 | `_load_unlocked`                  | `<frozen importlib._bootstrap>`          |
|   2.8% |      26 | `_find_and_load_unlocked`         | `<frozen importlib._bootstrap>`          |
|   2.8% |      26 | `_find_and_load`                  | `<frozen importlib._bootstrap>`          |
|   2.8% |      26 | `_call_with_frames_removed`       | `<frozen importlib._bootstrap>`          |
|   2.8% |      26 | `_get_module_details`             | `<frozen runpy>`                         |
|   1.0% |       9 | `_compile_bytecode`               | `<frozen importlib._bootstrap_external>` |
|   1.0% |       9 | `SourceLoader.get_code`           | `<frozen importlib._bootstrap_external>` |
|   0.7% |       7 | `_handle_fromlist`                | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `FileFinder._get_spec`            | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `FileFinder.find_spec`            | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `PathFinder._get_spec`            | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `PathFinder.find_spec`            | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `_find_spec`                      | `<frozen importlib._bootstrap>`          |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |     935 | `run_module` | `<frozen runpy>` |
|  97.2% |     909 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 97.2% |     909 | `_run_module_code`    | `<frozen runpy>` |
|  2.8% |      26 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     935 | `_run_code` | `<frozen runpy>` |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 51.8% |     471 | `check_stability_and_equivalence` | `__init__.py` |
| 48.2% |     438 | `format_str`                      | `__init__.py` |

##### `format_file_in_place` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |     909 | `format_file_contents` | `__init__.py` |

##### `reformat_one` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |     909 | `format_file_in_place` | `__init__.py` |

##### `main` (`__init__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     909 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |     909 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |     909 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     909 | `Context.invoke` | `core.py` |

##### `Command.main` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     909 | `Command.invoke` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |     909 | `Command.main` | `core.py` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee             | Location  |
| -----: | ------: | ------------------ | --------- |
| 100.0% |     909 | `Command.__call__` | `core.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     909 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     909 | `_run_code` | `<frozen runpy>` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                               | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 59.6% |     495 | `lib2to3_parse`                      | `parsing.py`  |
| 15.2% |     126 | `Visitor.visit`                      | `nodes.py`    |
| 10.6% |      88 | `detect_target_versions`             | `__init__.py` |
|  8.9% |      74 | `transform_line`                     | `linegen.py`  |
|  2.4% |      20 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |

##### `lib2to3_parse` (`parsing.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.8% |     494 | `Driver.parse_string` | `driver.py` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                | Location      |
| ----: | ------: | --------------------- | ------------- |
| 80.8% |     399 | `Parser.addtoken`     | `parse.py`    |
|  5.9% |      29 | `TokenProxy.__next__` | `driver.py`   |
|  0.4% |       2 | `(garbage collector)` | `<unknown>`   |
|  0.4% |       2 | `Parser._addtoken`    | `parse.py`    |
|  0.4% |       2 | `generate_tokens`     | `tokenize.py` |

##### `Driver.parse_string` (`driver.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     494 | `Driver.parse_tokens` | `driver.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 84.9% |     400 | `assert_stable`     | `__init__.py` |
| 14.2% |      67 | `assert_equivalent` | `__init__.py` |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 98.9% |     433 | `_format_str_once` | `__init__.py` |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.5% |     398 | `_format_str_once` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 94.2% |     376 | `Parser._addtoken` | `parse.py`    |
|  3.3% |      13 | `generate_tokens`  | `tokenize.py` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 48.6% |     185 | `(garbage collector)` | `<unknown>` |
|  7.6% |      29 | `Parser.pop`          | `parse.py`  |
|  6.6% |      25 | `Parser.shift`        | `parse.py`  |
|  1.3% |       5 | `Parser.push`         | `parse.py`  |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      26 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  34.6% |       9 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |      26 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   3.8% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

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
|  26.9% |       7 | `<module>`       | `nodes.py`                      |
|  26.9% |       7 | `<module>`       | `comments.py`                   |
|  23.1% |       6 | `<module>`       | `files.py`                      |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |      26 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |      26 | `_get_module_details` | `<frozen runpy>`                |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee              | Location                                 |
| -----: | ------: | ------------------- | ---------------------------------------- |
| 100.0% |       9 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       7 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `ExtensionFileLoader.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       1 | `FileFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `PathFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       1 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `PathFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       1 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       1 | `PathFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `_run_code` ← `_run_module_as_main`

|     % | Samples | Call stack                                                                                                                                                                                                                                                            |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.0% |     178 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` |
|  9.5% |      89 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                |
|  6.1% |      57 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                    |
|  4.6% |      43 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                         |
|  4.2% |      39 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                      |
|  4.0% |      37 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                   |
|  3.9% |      36 | `(garbage collector)` ← `Line.clone` (`lines.py`) ← `hug_power_op` (`trans.py`) ← `_hugging_power_ops_line_to_string` (`linegen.py`) ← `transform_line` ← `run_transformer` ← `transform_line` ← `_format_str_once` (`__init__.py`) ← `format_str`                    |
|  3.3% |      31 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                             |
|  2.0% |      19 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                               |
|  1.4% |      13 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                 |
|  1.3% |      12 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                   |
|  1.3% |      12 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                          |
|  1.1% |      10 | `generate_tokens` (`tokenize.py`) ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                 |
|  1.0% |       9 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                               |
|  1.0% |       9 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                               |
|  1.0% |       9 | `convert_one_fmt_off_pair` (`comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                  |
|  0.7% |       7 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                        |
|  0.6% |       6 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                              |
|  0.6% |       6 | `convert_one_fmt_off_pair` (`comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                           |
|  0.6% |       6 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`          |

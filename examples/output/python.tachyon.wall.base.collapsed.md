# Sampling profile

Collected 1,119 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 64.4% |     721 |
| Garbage collector | 33.9% |     379 |
| Standard library  |  1.7% |      19 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                      | Location                        |
| ----: | ------: | ----------------------------- | ------------------------------- |
| 33.9% |     379 | `(garbage collector)`         | `<unknown>`                     |
| 14.3% |     160 | `Parser._addtoken`            | `parse.py`                      |
|  8.8% |      99 | `get_features_used`           | `__init__.py`                   |
|  5.5% |      62 | `Driver.parse_tokens`         | `driver.py`                     |
|  3.8% |      43 | `parse`                       | `ast.py`                        |
|  3.4% |      38 | `generate_tokens`             | `tokenize.py`                   |
|  2.4% |      27 | `Visitor.visit`               | `nodes.py`                      |
|  2.1% |      23 | `Parser.shift`                | `parse.py`                      |
|  1.8% |      20 | `Parser.pop`                  | `parse.py`                      |
|  1.7% |      19 | `Parser.addtoken`             | `parse.py`                      |
|  1.5% |      17 | `Line.append`                 | `lines.py`                      |
|  1.1% |      12 | `convert_one_fmt_off_pair`    | `comments.py`                   |
|  1.1% |      12 | `_stringify_ast`              | `parsing.py`                    |
|  1.0% |      11 | `assert_equivalent`           | `__init__.py`                   |
|  1.0% |      11 | `LineGenerator.visit_default` | `linegen.py`                    |
|  0.8% |       9 | `_call_with_frames_removed`   | `<frozen importlib._bootstrap>` |
|  0.8% |       9 | `Visitor.visit_default`       | `nodes.py`                      |
|  0.8% |       9 | `normalize_invisible_parens`  | `linegen.py`                    |
|  0.7% |       8 | `_format_str_once`            | `__init__.py`                   |
|  0.7% |       8 | `Parser.classify`             | `parse.py`                      |

#### Categories

##### Ours

|     % | Samples | Function                             | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 14.3% |     160 | `Parser._addtoken`                   | `parse.py`    |
|  8.8% |      99 | `get_features_used`                  | `__init__.py` |
|  5.5% |      62 | `Driver.parse_tokens`                | `driver.py`   |
|  3.8% |      43 | `parse`                              | `ast.py`      |
|  3.4% |      38 | `generate_tokens`                    | `tokenize.py` |
|  2.4% |      27 | `Visitor.visit`                      | `nodes.py`    |
|  2.1% |      23 | `Parser.shift`                       | `parse.py`    |
|  1.8% |      20 | `Parser.pop`                         | `parse.py`    |
|  1.7% |      19 | `Parser.addtoken`                    | `parse.py`    |
|  1.5% |      17 | `Line.append`                        | `lines.py`    |
|  1.1% |      12 | `convert_one_fmt_off_pair`           | `comments.py` |
|  1.1% |      12 | `_stringify_ast`                     | `parsing.py`  |
|  1.0% |      11 | `assert_equivalent`                  | `__init__.py` |
|  1.0% |      11 | `LineGenerator.visit_default`        | `linegen.py`  |
|  0.8% |       9 | `Visitor.visit_default`              | `nodes.py`    |
|  0.8% |       9 | `normalize_invisible_parens`         | `linegen.py`  |
|  0.7% |       8 | `_format_str_once`                   | `__init__.py` |
|  0.7% |       8 | `Parser.classify`                    | `parse.py`    |
|  0.7% |       8 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |
|  0.7% |       8 | `Parser.push`                        | `parse.py`    |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 33.9% |     379 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                    | Location                                 |
| ---: | ------: | --------------------------- | ---------------------------------------- |
| 0.8% |       9 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| 0.4% |       5 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
| 0.3% |       3 | `FileLoader.get_data`       | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `_classify_pyc`             | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `_code_to_timestamp_pyc`    | `<frozen importlib._bootstrap_external>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 26.3% |      42 | `parse.py:328` |
| 17.5% |      28 | `parse.py:311` |
|  9.4% |      15 | `parse.py:326` |
|  9.4% |      15 | `parse.py:305` |
|  7.5% |      12 | `parse.py:298` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 37.4% |      37 | `__init__.py:1335` |
| 19.2% |      19 | `__init__.py:1440` |
| 13.1% |      13 | `__init__.py:1424` |
|  7.1% |       7 | `__init__.py:1436` |
|  7.1% |       7 | `__init__.py:1386` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 58.1% |      36 | `driver.py:162` |
| 32.3% |      20 | `driver.py:128` |
|  3.2% |       2 | `driver.py:172` |
|  3.2% |       2 | `driver.py:152` |
|  1.6% |       1 | `driver.py:151` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      43 | `ast.py:46` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 34.2% |      13 | `tokenize.py:875`  |
| 34.2% |      13 | `tokenize.py:624`  |
|  7.9% |       3 | `tokenize.py:761`  |
|  5.3% |       2 | `tokenize.py:634`  |
|  5.3% |       2 | `tokenize.py:1060` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 59.3% |      16 | `nodes.py:185` |
| 25.9% |       7 | `nodes.py:183` |
| 14.8% |       4 | `nodes.py:163` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 82.6% |      19 | `parse.py:381` |
|  8.7% |       2 | `parse.py:384` |
|  4.3% |       1 | `parse.py:383` |
|  4.3% |       1 | `parse.py:379` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 55.0% |      11 | `parse.py:404` |
| 15.0% |       3 | `parse.py:406` |
| 10.0% |       2 | `parse.py:407` |
| 10.0% |       2 | `parse.py:408` |
| 10.0% |       2 | `parse.py:403` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 84.2% |      16 | `parse.py:252` |
| 15.8% |       3 | `parse.py:246` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 41.2% |       7 | `lines.py:95`  |
| 35.3% |       6 | `lines.py:89`  |
| 11.8% |       2 | `lines.py:79`  |
|  5.9% |       1 | `lines.py:91`  |
|  5.9% |       1 | `lines.py:101` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 66.7% |       8 | `comments.py:186` |
| 33.3% |       4 | `comments.py:184` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 66.7% |       8 | `parsing.py:214` |
| 16.7% |       2 | `parsing.py:217` |
|  8.3% |       1 | `parsing.py:176` |
|  8.3% |       1 | `parsing.py:240` |

##### `assert_equivalent` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 54.5% |       6 | `__init__.py:1547` |
| 45.5% |       5 | `__init__.py:1546` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 81.8% |       9 | `linegen.py:158` |
|  9.1% |       1 | `linegen.py:157` |
|  9.1% |       1 | `linegen.py:138` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       9 | `<frozen importlib._bootstrap>:549` |

##### `Visitor.visit_default` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 88.9% |       8 | `nodes.py:191` |
| 11.1% |       1 | `nodes.py:187` |

##### `normalize_invisible_parens` (`linegen.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 77.8% |       7 | `linegen.py:1432` |
| 11.1% |       1 | `linegen.py:1351` |
| 11.1% |       1 | `linegen.py:1406` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 37.5% |       3 | `__init__.py:1268` |
| 12.5% |       1 | `__init__.py:1287` |
| 12.5% |       1 | `__init__.py:1270` |
| 12.5% |       1 | `__init__.py:1278` |
| 12.5% |       1 | `__init__.py:1279` |

##### `Parser.classify` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 75.0% |       6 | `parse.py:343` |
| 12.5% |       1 | `parse.py:336` |
| 12.5% |       1 | `parse.py:368` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|      % | Samples | Location       |
| -----: | ------: | -------------- |
| 100.0% |       8 | `lines.py:571` |

##### `Parser.push` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 37.5% |       3 | `parse.py:395` |
| 25.0% |       2 | `parse.py:394` |
| 25.0% |       2 | `parse.py:393` |
| 12.5% |       1 | `parse.py:396` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       5 | `<frozen importlib._bootstrap_external>:500` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       3 | `<frozen importlib._bootstrap_external>:923` |

##### `_classify_pyc` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:429` |

##### `_code_to_timestamp_pyc` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:517` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 66.2% |     251 | `Driver.parse_tokens`        | `driver.py` |
|  9.5% |      36 | `StringTransformer.__init__` | `trans.py`  |
|  4.2% |      16 | `Node.__init__`              | `pytree.py` |
|  4.0% |      15 | `Parser._addtoken`           | `parse.py`  |
|  2.6% |      10 | `Base.__new__`               | `pytree.py` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                             | Location      |
| ----: | ------: | ---------------------------------- | ------------- |
| 97.5% |     156 | `Parser.addtoken`                  | `parse.py`    |
|  1.3% |       2 | `TokenProxy.__next__`              | `driver.py`   |
|  0.6% |       1 | `Driver._partially_consume_prefix` | `driver.py`   |
|  0.6% |       1 | `Logger.debug`                     | `__init__.py` |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |      99 | `detect_target_versions` | `__init__.py` |

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      62 | `Driver.parse_string` | `driver.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      43 | `_parse_single_version` | `parsing.py` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Caller                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 84.2% |      32 | `TokenProxy.__next__`        | `driver.py` |
| 13.2% |       5 | `Parser.addtoken`            | `parse.py`  |
|  2.6% |       1 | `ParserGenerator.parse_atom` | `pgen.py`   |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                        | Location      |
| ----: | ------: | ----------------------------- | ------------- |
| 74.1% |      20 | `Visitor.visit_default`       | `nodes.py`    |
| 14.8% |       4 | `LineGenerator.visit_stmt`    | `linegen.py`  |
|  7.4% |       2 | `_format_str_once`            | `__init__.py` |
|  3.7% |       1 | `LineGenerator.visit_funcdef` | `linegen.py`  |

##### `Parser.shift` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      23 | `Parser._addtoken` | `parse.py` |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      20 | `Parser._addtoken` | `parse.py` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      19 | `Driver.parse_tokens` | `driver.py` |

##### `Line.append` (`lines.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 82.4% |      14 | `LineGenerator.visit_default` | `linegen.py` |
| 17.6% |       3 | `bracket_split_build_line`    | `linegen.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|      % | Samples | Caller              | Location      |
| -----: | ------: | ------------------- | ------------- |
| 100.0% |      12 | `normalize_fmt_off` | `comments.py` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Caller                           | Location      |
| ----: | ------: | -------------------------------- | ------------- |
| 83.3% |      10 | `_stringify_ast_with_new_parent` | `parsing.py`  |
| 16.7% |       2 | `assert_equivalent`              | `__init__.py` |

##### `assert_equivalent` (`__init__.py`)

|      % | Samples | Caller                            | Location      |
| -----: | ------: | --------------------------------- | ------------- |
| 100.0% |      11 | `check_stability_and_equivalence` | `__init__.py` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Caller                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 81.8% |       9 | `Visitor.visit`                   | `nodes.py`   |
|  9.1% |       1 | `LineGenerator.visit_suite`       | `linegen.py` |
|  9.1% |       1 | `LineGenerator.visit_simple_stmt` | `linegen.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % | Samples | Caller                              | Location                                 |
| ----: | ------: | ----------------------------------- | ---------------------------------------- |
| 77.8% |       7 | `SourceLoader.source_to_code`       | `<frozen importlib._bootstrap_external>` |
| 11.1% |       1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
| 11.1% |       1 | `ExtensionFileLoader.exec_module`   | `<frozen importlib._bootstrap_external>` |

##### `Visitor.visit_default` (`nodes.py`)

|      % | Samples | Caller                        | Location     |
| -----: | ------: | ----------------------------- | ------------ |
| 100.0% |       9 | `LineGenerator.visit_default` | `linegen.py` |

##### `normalize_invisible_parens` (`linegen.py`)

|      % | Samples | Caller                     | Location     |
| -----: | ------: | -------------------------- | ------------ |
| 100.0% |       9 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Caller          | Location      |
| ----: | ------: | --------------- | ------------- |
| 87.5% |       7 | `format_str`    | `__init__.py` |
| 12.5% |       1 | `assert_stable` | `__init__.py` |

##### `Parser.classify` (`parse.py`)

|      % | Samples | Caller            | Location   |
| -----: | ------: | ----------------- | ---------- |
| 100.0% |       8 | `Parser.addtoken` | `parse.py` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |       8 | `_format_str_once` | `__init__.py` |

##### `Parser.push` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |       8 | `Parser._addtoken` | `parse.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       5 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       3 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `_classify_pyc` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       1 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `_code_to_timestamp_pyc` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       1 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                          | Location         |
| -----: | ------: | --------------------------------- | ---------------- |
| 100.0% |   1,119 | `_run_code`                       | `<frozen runpy>` |
| 100.0% |   1,119 | `run_module`                      | `<frozen runpy>` |
| 100.0% |   1,119 | `_run_module_as_main`             | `<frozen runpy>` |
|  96.4% |   1,079 | `Command.main`                    | `core.py`        |
|  96.4% |   1,079 | `Command.__call__`                | `core.py`        |
|  96.4% |   1,079 | `patched_main`                    | `__init__.py`    |
|  96.4% |   1,079 | `<module>`                        | `__main__.py`    |
|  96.4% |   1,079 | `_run_module_code`                | `<frozen runpy>` |
|  96.3% |   1,078 | `reformat_one`                    | `__init__.py`    |
|  96.3% |   1,078 | `main`                            | `__init__.py`    |
|  96.3% |   1,078 | `pass_context.<locals>.new_func`  | `decorators.py`  |
|  96.3% |   1,078 | `Context.invoke`                  | `core.py`        |
|  96.3% |   1,078 | `Command.invoke`                  | `core.py`        |
|  96.2% |   1,077 | `format_file_contents`            | `__init__.py`    |
|  96.2% |   1,077 | `format_file_in_place`            | `__init__.py`    |
|  88.7% |     993 | `_format_str_once`                | `__init__.py`    |
|  57.8% |     647 | `Driver.parse_string`             | `driver.py`      |
|  57.8% |     647 | `lib2to3_parse`                   | `parsing.py`     |
|  57.6% |     645 | `Driver.parse_tokens`             | `driver.py`      |
|  50.2% |     562 | `check_stability_and_equivalence` | `__init__.py`    |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 96.4% |   1,079 | `Command.main`                    | `core.py`       |
| 96.4% |   1,079 | `Command.__call__`                | `core.py`       |
| 96.4% |   1,079 | `patched_main`                    | `__init__.py`   |
| 96.4% |   1,079 | `<module>`                        | `__main__.py`   |
| 96.3% |   1,078 | `reformat_one`                    | `__init__.py`   |
| 96.3% |   1,078 | `main`                            | `__init__.py`   |
| 96.3% |   1,078 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 96.3% |   1,078 | `Context.invoke`                  | `core.py`       |
| 96.3% |   1,078 | `Command.invoke`                  | `core.py`       |
| 96.2% |   1,077 | `format_file_contents`            | `__init__.py`   |
| 96.2% |   1,077 | `format_file_in_place`            | `__init__.py`   |
| 88.7% |     993 | `_format_str_once`                | `__init__.py`   |
| 57.8% |     647 | `Driver.parse_string`             | `driver.py`     |
| 57.8% |     647 | `lib2to3_parse`                   | `parsing.py`    |
| 57.6% |     645 | `Driver.parse_tokens`             | `driver.py`     |
| 50.2% |     562 | `check_stability_and_equivalence` | `__init__.py`   |
| 46.0% |     515 | `format_str`                      | `__init__.py`   |
| 43.2% |     483 | `assert_stable`                   | `__init__.py`   |
| 25.6% |     286 | `Parser.addtoken`                 | `parse.py`      |
| 23.1% |     258 | `Parser._addtoken`                | `parse.py`      |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 33.9% |     379 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                            | Location                                 |
| -----: | ------: | ----------------------------------- | ---------------------------------------- |
| 100.0% |   1,119 | `_run_code`                         | `<frozen runpy>`                         |
| 100.0% |   1,119 | `run_module`                        | `<frozen runpy>`                         |
| 100.0% |   1,119 | `_run_module_as_main`               | `<frozen runpy>`                         |
|  96.4% |   1,079 | `_run_module_code`                  | `<frozen runpy>`                         |
|   3.6% |      40 | `_call_with_frames_removed`         | `<frozen importlib._bootstrap>`          |
|   3.6% |      40 | `_LoaderBasics.exec_module`         | `<frozen importlib._bootstrap_external>` |
|   3.6% |      40 | `_load_unlocked`                    | `<frozen importlib._bootstrap>`          |
|   3.6% |      40 | `_find_and_load_unlocked`           | `<frozen importlib._bootstrap>`          |
|   3.6% |      40 | `_find_and_load`                    | `<frozen importlib._bootstrap>`          |
|   3.6% |      40 | `_get_module_details`               | `<frozen runpy>`                         |
|   1.5% |      17 | `SourceLoader.get_code`             | `<frozen importlib._bootstrap_external>` |
|   0.6% |       7 | `SourceLoader.source_to_code`       | `<frozen importlib._bootstrap_external>` |
|   0.4% |       5 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
|   0.4% |       5 | `_handle_fromlist`                  | `<frozen importlib._bootstrap>`          |
|   0.3% |       3 | `FileLoader.get_data`               | `<frozen importlib._bootstrap_external>` |
|   0.2% |       2 | `_get_module_lock`                  | `<frozen importlib._bootstrap>`          |
|   0.2% |       2 | `_ModuleLockManager.__enter__`      | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `_classify_pyc`                     | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `module_from_spec`                  | `<frozen importlib._bootstrap>`          |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |   1,119 | `run_module` | `<frozen runpy>` |
|  96.4% |   1,079 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 96.4% |   1,079 | `_run_module_code`    | `<frozen runpy>` |
|  3.6% |      40 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,119 | `_run_code` | `<frozen runpy>` |

##### `Command.main` (`core.py`)

|     % | Samples | Callee                 | Location  |
| ----: | ------: | ---------------------- | --------- |
| 99.9% |   1,078 | `Command.invoke`       | `core.py` |
|  0.1% |       1 | `Command.make_context` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |   1,079 | `Command.main` | `core.py` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee             | Location  |
| -----: | ------: | ------------------ | --------- |
| 100.0% |   1,079 | `Command.__call__` | `core.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |   1,079 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,079 | `_run_code` | `<frozen runpy>` |

##### `reformat_one` (`__init__.py`)

|     % | Samples | Callee                 | Location      |
| ----: | ------: | ---------------------- | ------------- |
| 99.9% |   1,077 | `format_file_in_place` | `__init__.py` |

##### `main` (`__init__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |   1,078 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |   1,078 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |   1,078 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |   1,078 | `Context.invoke` | `core.py` |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 52.2% |     562 | `check_stability_and_equivalence` | `__init__.py` |
| 47.8% |     515 | `format_str`                      | `__init__.py` |

##### `format_file_in_place` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |   1,077 | `format_file_contents` | `__init__.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                   | Location      |
| ----: | ------: | ------------------------ | ------------- |
| 65.2% |     647 | `lib2to3_parse`          | `parsing.py`  |
| 12.0% |     119 | `Visitor.visit`          | `nodes.py`    |
| 10.0% |      99 | `detect_target_versions` | `__init__.py` |
|  8.3% |      82 | `transform_line`         | `linegen.py`  |
|  1.6% |      16 | `normalize_fmt_off`      | `comments.py` |

##### `Driver.parse_string` (`driver.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.7% |     645 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     647 | `Driver.parse_string` | `driver.py` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                             | Location      |
| ----: | ------: | ---------------------------------- | ------------- |
| 44.3% |     286 | `Parser.addtoken`                  | `parse.py`    |
| 38.9% |     251 | `(garbage collector)`              | `<unknown>`   |
|  6.7% |      43 | `TokenProxy.__next__`              | `driver.py`   |
|  0.3% |       2 | `Logger.debug`                     | `__init__.py` |
|  0.2% |       1 | `Driver._partially_consume_prefix` | `driver.py`   |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 85.9% |     483 | `assert_stable`     | `__init__.py` |
| 13.2% |      74 | `assert_equivalent` | `__init__.py` |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.4% |     512 | `_format_str_once` | `__init__.py` |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.6% |     481 | `_format_str_once` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 88.8% |     254 | `Parser._addtoken` | `parse.py`    |
|  2.8% |       8 | `Parser.classify`  | `parse.py`    |
|  1.7% |       5 | `generate_tokens`  | `tokenize.py` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 14.7% |      38 | `Parser.pop`          | `parse.py`  |
| 14.3% |      37 | `Parser.shift`        | `parse.py`  |
|  5.8% |      15 | `(garbage collector)` | `<unknown>` |
|  3.1% |       8 | `Parser.push`         | `parse.py`  |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee     | Location      |
| -----: | ------: | ---------- | ------------- |
| 100.0% |      40 | `<module>` | `__init__.py` |
|  25.0% |      10 | `<module>` | `ranges.py`   |
|  25.0% |      10 | `<module>` | `nodes.py`    |
|  25.0% |      10 | `<module>` | `comments.py` |
|  17.5% |       7 | `<module>` | `files.py`    |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      40 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  42.5% |      17 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |      40 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   2.5% |       1 | `module_from_spec`                | `<frozen importlib._bootstrap>`          |
|   2.5% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |      40 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
|   2.5% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                         | Location                        |
| -----: | ------: | ------------------------------ | ------------------------------- |
| 100.0% |      40 | `_find_and_load_unlocked`      | `<frozen importlib._bootstrap>` |
|   5.0% |       2 | `_ModuleLockManager.__enter__` | `<frozen importlib._bootstrap>` |
|   2.5% |       1 | `__init__`                     | `__init__`                      |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |      40 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |      40 | `_get_module_details` | `<frozen runpy>`                |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                        | Location                                 |
| ----: | ------: | ----------------------------- | ---------------------------------------- |
| 41.2% |       7 | `SourceLoader.source_to_code` | `<frozen importlib._bootstrap_external>` |
| 29.4% |       5 | `_compile_bytecode`           | `<frozen importlib._bootstrap_external>` |
| 17.6% |       3 | `FileLoader.get_data`         | `<frozen importlib._bootstrap_external>` |
|  5.9% |       1 | `_classify_pyc`               | `<frozen importlib._bootstrap_external>` |
|  5.9% |       1 | `_code_to_timestamp_pyc`      | `<frozen importlib._bootstrap_external>` |

##### `SourceLoader.source_to_code` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       7 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       5 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_get_module_lock` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       2 | `(garbage collector)` | `<unknown>` |

##### `_ModuleLockManager.__enter__` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee             | Location                        |
| -----: | ------: | ------------------ | ------------------------------- |
| 100.0% |       2 | `_get_module_lock` | `<frozen importlib._bootstrap>` |

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

Common call stack: `run_module` (`<frozen runpy>`) ← `_run_code` ← `_run_module_as_main`

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 22.4% |     251 | `(garbage collector)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                              |
|  9.7% |     108 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                       |
|  6.2% |      69 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  4.3% |      48 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                |
|  3.8% |      43 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  3.2% |      36 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.0% |      34 | `(garbage collector)` ← `StringTransformer.__init__` (`trans.py`) ← `transform_line` (`linegen.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.7% |      30 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.3% |      26 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.0% |      22 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                 |
|  1.3% |      14 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                               |
|  1.3% |      14 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                        |
|  1.2% |      13 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.2% |      13 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                      |
|  1.0% |      11 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.9% |      10 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                               |
|  0.9% |      10 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                          |
|  0.7% |       8 | `(garbage collector)` ← `Node.__init__` (`pytree.py`) ← `convert` ← `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                             |
|  0.7% |       8 | `(garbage collector)` ← `Node.__init__` (`pytree.py`) ← `convert` ← `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                    |
|  0.6% |       7 | `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `SourceLoader.source_to_code` (`<frozen importlib._bootstrap_external>`) ← `SourceLoader.get_code` ← `_LoaderBasics.exec_module` ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`ranges.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details` |

# Sampling profile

Collected 1,136 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 60.7% |     690 |
| Garbage collector | 38.0% |     432 |
| Standard library  |  1.2% |      14 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                             | Location                                 |
| ----: | ------: | ------------------------------------ | ---------------------------------------- |
| 38.0% |     432 | `(garbage collector)`                | `<unknown>`                              |
| 14.3% |     163 | `Parser._addtoken`                   | `parse.py`                               |
|  8.2% |      93 | `get_features_used`                  | `__init__.py`                            |
|  4.6% |      52 | `Driver.parse_tokens`                | `driver.py`                              |
|  4.1% |      47 | `parse`                              | `ast.py`                                 |
|  2.6% |      29 | `Visitor.visit`                      | `nodes.py`                               |
|  2.4% |      27 | `generate_tokens`                    | `tokenize.py`                            |
|  2.3% |      26 | `Parser.pop`                         | `parse.py`                               |
|  1.5% |      17 | `Parser.addtoken`                    | `parse.py`                               |
|  1.2% |      14 | `Parser.shift`                       | `parse.py`                               |
|  1.1% |      13 | `Line.append`                        | `lines.py`                               |
|  1.1% |      12 | `convert`                            | `pytree.py`                              |
|  1.1% |      12 | `convert_one_fmt_off_pair`           | `comments.py`                            |
|  0.9% |      10 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`                               |
|  0.8% |       9 | `LinesBlock.all_lines`               | `lines.py`                               |
|  0.8% |       9 | `Parser.push`                        | `parse.py`                               |
|  0.7% |       8 | `Leaf.prefix`                        | `pytree.py`                              |
|  0.7% |       8 | `LineGenerator.visit_default`        | `linegen.py`                             |
|  0.7% |       8 | `_compile_bytecode`                  | `<frozen importlib._bootstrap_external>` |
|  0.6% |       7 | `whitespace`                         | `nodes.py`                               |

#### Categories

##### Ours

|     % | Samples | Function                             | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 14.3% |     163 | `Parser._addtoken`                   | `parse.py`    |
|  8.2% |      93 | `get_features_used`                  | `__init__.py` |
|  4.6% |      52 | `Driver.parse_tokens`                | `driver.py`   |
|  4.1% |      47 | `parse`                              | `ast.py`      |
|  2.6% |      29 | `Visitor.visit`                      | `nodes.py`    |
|  2.4% |      27 | `generate_tokens`                    | `tokenize.py` |
|  2.3% |      26 | `Parser.pop`                         | `parse.py`    |
|  1.5% |      17 | `Parser.addtoken`                    | `parse.py`    |
|  1.2% |      14 | `Parser.shift`                       | `parse.py`    |
|  1.1% |      13 | `Line.append`                        | `lines.py`    |
|  1.1% |      12 | `convert`                            | `pytree.py`   |
|  1.1% |      12 | `convert_one_fmt_off_pair`           | `comments.py` |
|  0.9% |      10 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |
|  0.8% |       9 | `LinesBlock.all_lines`               | `lines.py`    |
|  0.8% |       9 | `Parser.push`                        | `parse.py`    |
|  0.7% |       8 | `Leaf.prefix`                        | `pytree.py`   |
|  0.7% |       8 | `LineGenerator.visit_default`        | `linegen.py`  |
|  0.6% |       7 | `whitespace`                         | `nodes.py`    |
|  0.6% |       7 | `Visitor.visit_default`              | `nodes.py`    |
|  0.6% |       7 | `_stringify_ast`                     | `parsing.py`  |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 38.0% |     432 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                            | Location                                 |
| ---: | ------: | ----------------------------------- | ---------------------------------------- |
| 0.7% |       8 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
| 0.2% |       2 | `_call_with_frames_removed`         | `<frozen importlib._bootstrap>`          |
| 0.2% |       2 | `FileLoader.get_data`               | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `FileFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `BufferedIncrementalDecoder.decode` | `<frozen codecs>`                        |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 19.0% |      31 | `parse.py:316` |
| 18.4% |      30 | `parse.py:299` |
|  8.6% |      14 | `parse.py:293` |
|  7.4% |      12 | `parse.py:281` |
|  6.7% |      11 | `parse.py:283` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 33.3% |      31 | `__init__.py:1314` |
| 16.1% |      15 | `__init__.py:1403` |
| 10.8% |      10 | `__init__.py:1419` |
|  8.6% |       8 | `__init__.py:1415` |
|  7.5% |       7 | `__init__.py:1324` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 69.2% |      36 | `driver.py:162` |
| 25.0% |      13 | `driver.py:128` |
|  1.9% |       1 | `driver.py:172` |
|  1.9% |       1 | `driver.py:141` |
|  1.9% |       1 | `driver.py:166` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      47 | `ast.py:46` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 51.7% |      15 | `nodes.py:172` |
| 41.4% |      12 | `nodes.py:174` |
|  6.9% |       2 | `nodes.py:152` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 40.7% |      11 | `tokenize.py:864`  |
| 22.2% |       6 | `tokenize.py:613`  |
|  3.7% |       1 | `tokenize.py:871`  |
|  3.7% |       1 | `tokenize.py:984`  |
|  3.7% |       1 | `tokenize.py:1092` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 38.5% |      10 | `parse.py:392` |
| 19.2% |       5 | `parse.py:396` |
| 19.2% |       5 | `parse.py:394` |
| 11.5% |       3 | `parse.py:393` |
|  3.8% |       1 | `parse.py:388` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Location       |
| -----: | ------: | -------------- |
| 100.0% |      17 | `parse.py:240` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 85.7% |      12 | `parse.py:369` |
|  7.1% |       1 | `parse.py:372` |
|  7.1% |       1 | `parse.py:361` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location      |
| ----: | ------: | ------------- |
| 61.5% |       8 | `lines.py:78` |
| 15.4% |       2 | `lines.py:65` |
|  7.7% |       1 | `lines.py:83` |
|  7.7% |       1 | `lines.py:84` |
|  7.7% |       1 | `lines.py:67` |

##### `convert` (`pytree.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 33.3% |       4 | `pytree.py:490` |
| 33.3% |       4 | `pytree.py:492` |
| 16.7% |       2 | `pytree.py:489` |
|  8.3% |       1 | `pytree.py:483` |
|  8.3% |       1 | `pytree.py:484` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 50.0% |       6 | `comments.py:184` |
| 50.0% |       6 | `comments.py:186` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 80.0% |       8 | `lines.py:560` |
| 20.0% |       2 | `lines.py:573` |

##### `LinesBlock.all_lines` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 77.8% |       7 | `lines.py:528` |
| 22.2% |       2 | `lines.py:530` |

##### `Parser.push` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 44.4% |       4 | `parse.py:384` |
| 33.3% |       3 | `parse.py:382` |
| 11.1% |       1 | `parse.py:381` |
| 11.1% |       1 | `parse.py:383` |

##### `Leaf.prefix` (`pytree.py`)

|      % | Samples | Location        |
| -----: | ------: | --------------- |
| 100.0% |       8 | `pytree.py:467` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 62.5% |       5 | `linegen.py:158` |
| 37.5% |       3 | `linegen.py:157` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       8 | `<frozen importlib._bootstrap_external>:500` |

##### `whitespace` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 71.4% |       5 | `nodes.py:360` |
| 14.3% |       1 | `nodes.py:202` |
| 14.3% |       1 | `nodes.py:267` |

##### `Visitor.visit_default` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 57.1% |       4 | `nodes.py:180` |
| 42.9% |       3 | `nodes.py:176` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 42.9% |       3 | `parsing.py:222` |
| 42.9% |       3 | `parsing.py:225` |
| 14.3% |       1 | `parsing.py:252` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       2 | `<frozen importlib._bootstrap>:549` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Location                                     |
| ----: | ------: | -------------------------------------------- |
| 50.0% |       1 | `<frozen importlib._bootstrap_external>:923` |
| 50.0% |       1 | `<frozen importlib._bootstrap_external>:922` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:1393` |

##### `BufferedIncrementalDecoder.decode` (`<frozen codecs>`)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       1 | `<frozen codecs>:325` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 65.3% |     282 | `Parser._addtoken`                | `parse.py`  |
| 15.7% |      68 | `Line.clone`                      | `lines.py`  |
|  2.5% |      11 | `__create_fn__.<locals>.__init__` | `<string>`  |
|  1.4% |       6 | `convert`                         | `pytree.py` |
|  1.4% |       6 | `Driver.parse_tokens`             | `driver.py` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                             | Location      |
| ----: | ------: | ---------------------------------- | ------------- |
| 96.9% |     158 | `Parser.addtoken`                  | `parse.py`    |
|  1.2% |       2 | `Logger.debug`                     | `__init__.py` |
|  0.6% |       1 | `cast`                             | `typing.py`   |
|  0.6% |       1 | `TokenProxy.__next__`              | `driver.py`   |
|  0.6% |       1 | `Driver._partially_consume_prefix` | `driver.py`   |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |      93 | `detect_target_versions` | `__init__.py` |

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      52 | `Driver.parse_string` | `driver.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      47 | `_parse_single_version` | `parsing.py` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 69.0% |      20 | `Visitor.visit_default`       | `nodes.py`   |
| 20.7% |       6 | `LineGenerator.visit_stmt`    | `linegen.py` |
| 10.3% |       3 | `LineGenerator.visit_funcdef` | `linegen.py` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 63.0% |      17 | `TokenProxy.__next__` | `driver.py` |
| 37.0% |      10 | `Parser.addtoken`     | `parse.py`  |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      26 | `Parser._addtoken` | `parse.py` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      17 | `Driver.parse_tokens` | `driver.py` |

##### `Parser.shift` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      14 | `Parser._addtoken` | `parse.py` |

##### `Line.append` (`lines.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 84.6% |      11 | `LineGenerator.visit_default` | `linegen.py` |
| 15.4% |       2 | `bracket_split_build_line`    | `linegen.py` |

##### `convert` (`pytree.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 58.3% |       7 | `Parser.pop`          | `parse.py`  |
| 33.3% |       4 | `Parser.shift`        | `parse.py`  |
|  8.3% |       1 | `TokenProxy.__next__` | `driver.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|      % | Samples | Caller              | Location      |
| -----: | ------: | ------------------- | ------------- |
| 100.0% |      12 | `normalize_fmt_off` | `comments.py` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |      10 | `_format_str_once` | `__init__.py` |

##### `LinesBlock.all_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |       9 | `_format_str_once` | `__init__.py` |

##### `Parser.push` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |       9 | `Parser._addtoken` | `parse.py` |

##### `Leaf.prefix` (`pytree.py`)

|     % | Samples | Caller                     | Location     |
| ----: | ------: | -------------------------- | ------------ |
| 87.5% |       7 | `Leaf.clone`               | `pytree.py`  |
| 12.5% |       1 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Caller                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 75.0% |       6 | `Visitor.visit`                   | `nodes.py`   |
| 12.5% |       1 | `LineGenerator.visit_simple_stmt` | `linegen.py` |
| 12.5% |       1 | `LineGenerator.visit_suite`       | `linegen.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       8 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `whitespace` (`nodes.py`)

|      % | Samples | Caller        | Location   |
| -----: | ------: | ------------- | ---------- |
| 100.0% |       7 | `Line.append` | `lines.py` |

##### `Visitor.visit_default` (`nodes.py`)

|      % | Samples | Caller                        | Location     |
| -----: | ------: | ----------------------------- | ------------ |
| 100.0% |       7 | `LineGenerator.visit_default` | `linegen.py` |

##### `_stringify_ast` (`parsing.py`)

|      % | Samples | Caller                           | Location     |
| -----: | ------: | -------------------------------- | ------------ |
| 100.0% |       7 | `_stringify_ast_with_new_parent` | `parsing.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % | Samples | Caller                              | Location                                 |
| ----: | ------: | ----------------------------------- | ---------------------------------------- |
| 50.0% |       1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
| 50.0% |       1 | `ExtensionFileLoader.exec_module`   | `<frozen importlib._bootstrap_external>` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       2 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       1 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `BufferedIncrementalDecoder.decode` (`<frozen codecs>`)

|      % | Samples | Caller         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |       1 | `decode_bytes` | `__init__.py` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                          | Location         |
| -----: | ------: | --------------------------------- | ---------------- |
| 100.0% |   1,136 | `_run_code`                       | `<frozen runpy>` |
| 100.0% |   1,136 | `run_module`                      | `<frozen runpy>` |
| 100.0% |   1,136 | `_run_module_as_main`             | `<frozen runpy>` |
|  97.8% |   1,111 | `reformat_one`                    | `__init__.py`    |
|  97.8% |   1,111 | `main`                            | `__init__.py`    |
|  97.8% |   1,111 | `pass_context.<locals>.new_func`  | `decorators.py`  |
|  97.8% |   1,111 | `Context.invoke`                  | `core.py`        |
|  97.8% |   1,111 | `Command.invoke`                  | `core.py`        |
|  97.8% |   1,111 | `Command.main`                    | `core.py`        |
|  97.8% |   1,111 | `Command.__call__`                | `core.py`        |
|  97.8% |   1,111 | `patched_main`                    | `__init__.py`    |
|  97.8% |   1,111 | `<module>`                        | `__main__.py`    |
|  97.8% |   1,111 | `_run_module_code`                | `<frozen runpy>` |
|  97.7% |   1,110 | `format_file_in_place`            | `__init__.py`    |
|  97.4% |   1,107 | `format_file_contents`            | `__init__.py`    |
|  90.6% |   1,029 | `_format_str_once`                | `__init__.py`    |
|  55.5% |     631 | `Driver.parse_tokens`             | `driver.py`      |
|  55.5% |     631 | `Driver.parse_string`             | `driver.py`      |
|  55.5% |     631 | `lib2to3_parse`                   | `parsing.py`     |
|  50.7% |     576 | `check_stability_and_equivalence` | `__init__.py`    |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 97.8% |   1,111 | `reformat_one`                    | `__init__.py`   |
| 97.8% |   1,111 | `main`                            | `__init__.py`   |
| 97.8% |   1,111 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 97.8% |   1,111 | `Context.invoke`                  | `core.py`       |
| 97.8% |   1,111 | `Command.invoke`                  | `core.py`       |
| 97.8% |   1,111 | `Command.main`                    | `core.py`       |
| 97.8% |   1,111 | `Command.__call__`                | `core.py`       |
| 97.8% |   1,111 | `patched_main`                    | `__init__.py`   |
| 97.8% |   1,111 | `<module>`                        | `__main__.py`   |
| 97.7% |   1,110 | `format_file_in_place`            | `__init__.py`   |
| 97.4% |   1,107 | `format_file_contents`            | `__init__.py`   |
| 90.6% |   1,029 | `_format_str_once`                | `__init__.py`   |
| 55.5% |     631 | `Driver.parse_tokens`             | `driver.py`     |
| 55.5% |     631 | `Driver.parse_string`             | `driver.py`     |
| 55.5% |     631 | `lib2to3_parse`                   | `parsing.py`    |
| 50.7% |     576 | `check_stability_and_equivalence` | `__init__.py`   |
| 48.1% |     546 | `Parser.addtoken`                 | `parse.py`      |
| 46.7% |     531 | `format_str`                      | `__init__.py`   |
| 45.9% |     521 | `Parser._addtoken`                | `parse.py`      |
| 44.5% |     506 | `assert_stable`                   | `__init__.py`   |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 38.0% |     432 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                            | Location                                 |
| -----: | ------: | ----------------------------------- | ---------------------------------------- |
| 100.0% |   1,136 | `_run_code`                         | `<frozen runpy>`                         |
| 100.0% |   1,136 | `run_module`                        | `<frozen runpy>`                         |
| 100.0% |   1,136 | `_run_module_as_main`               | `<frozen runpy>`                         |
|  97.8% |   1,111 | `_run_module_code`                  | `<frozen runpy>`                         |
|   2.2% |      25 | `_LoaderBasics.exec_module`         | `<frozen importlib._bootstrap_external>` |
|   2.2% |      25 | `_load_unlocked`                    | `<frozen importlib._bootstrap>`          |
|   2.2% |      25 | `_find_and_load_unlocked`           | `<frozen importlib._bootstrap>`          |
|   2.2% |      25 | `_find_and_load`                    | `<frozen importlib._bootstrap>`          |
|   2.2% |      25 | `_call_with_frames_removed`         | `<frozen importlib._bootstrap>`          |
|   2.2% |      25 | `_get_module_details`               | `<frozen runpy>`                         |
|   1.0% |      11 | `SourceLoader.get_code`             | `<frozen importlib._bootstrap_external>` |
|   0.8% |       9 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
|   0.4% |       4 | `_handle_fromlist`                  | `<frozen importlib._bootstrap>`          |
|   0.2% |       2 | `FileLoader.get_data`               | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `FileFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `PathFinder._get_spec`              | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `PathFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `_find_spec`                        | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `module_from_spec`                  | `<frozen importlib._bootstrap>`          |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |   1,136 | `run_module` | `<frozen runpy>` |
|  97.8% |   1,111 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 97.8% |   1,111 | `_run_module_code`    | `<frozen runpy>` |
|  2.2% |      25 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,136 | `_run_code` | `<frozen runpy>` |

##### `reformat_one` (`__init__.py`)

|     % | Samples | Callee                 | Location      |
| ----: | ------: | ---------------------- | ------------- |
| 99.9% |   1,110 | `format_file_in_place` | `__init__.py` |
|  0.1% |       1 | `Cache.write`          | `cache.py`    |

##### `main` (`__init__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |   1,111 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |   1,111 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |   1,111 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |   1,111 | `Context.invoke` | `core.py` |

##### `Command.main` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |   1,111 | `Command.invoke` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |   1,111 | `Command.main` | `core.py` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee             | Location  |
| -----: | ------: | ------------------ | --------- |
| 100.0% |   1,111 | `Command.__call__` | `core.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |   1,111 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,111 | `_run_code` | `<frozen runpy>` |

##### `format_file_in_place` (`__init__.py`)

|     % | Samples | Callee                 | Location      |
| ----: | ------: | ---------------------- | ------------- |
| 99.7% |   1,107 | `format_file_contents` | `__init__.py` |
|  0.1% |       1 | `decode_bytes`         | `__init__.py` |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 52.0% |     576 | `check_stability_and_equivalence` | `__init__.py` |
| 48.0% |     531 | `format_str`                      | `__init__.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                               | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 61.3% |     631 | `lib2to3_parse`                      | `parsing.py`  |
| 13.5% |     139 | `Visitor.visit`                      | `nodes.py`    |
| 11.4% |     117 | `transform_line`                     | `linegen.py`  |
|  9.2% |      95 | `detect_target_versions`             | `__init__.py` |
|  1.7% |      17 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                | Location      |
| ----: | ------: | --------------------- | ------------- |
| 86.5% |     546 | `Parser.addtoken`     | `parse.py`    |
|  3.6% |      23 | `TokenProxy.__next__` | `driver.py`   |
|  1.0% |       6 | `(garbage collector)` | `<unknown>`   |
|  0.3% |       2 | `Logger.debug`        | `__init__.py` |
|  0.2% |       1 | `cast`                | `typing.py`   |

##### `Driver.parse_string` (`driver.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     631 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     631 | `Driver.parse_string` | `driver.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 87.8% |     506 | `assert_stable`     | `__init__.py` |
| 11.3% |      65 | `assert_equivalent` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 94.5% |     516 | `Parser._addtoken` | `parse.py`    |
|  1.8% |      10 | `generate_tokens`  | `tokenize.py` |
|  0.5% |       3 | `Parser.classify`  | `parse.py`    |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 98.9% |     525 | `_format_str_once` | `__init__.py` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 54.1% |     282 | `(garbage collector)` | `<unknown>` |
|  7.7% |      40 | `Parser.pop`          | `parse.py`  |
|  5.2% |      27 | `Parser.shift`        | `parse.py`  |
|  1.7% |       9 | `Parser.push`         | `parse.py`  |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.6% |     504 | `_format_str_once` | `__init__.py` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      25 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  44.0% |      11 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |      25 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   4.0% |       1 | `module_from_spec`                | `<frozen importlib._bootstrap>`          |
|   4.0% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |      25 | `_load_unlocked` | `<frozen importlib._bootstrap>` |
|   4.0% |       1 | `_find_spec`     | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |      25 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |      25 | `<module>`       | `__init__.py`                   |
|  20.0% |       5 | `<module>`       | `cache.py`                      |
|  20.0% |       5 | `<module>`       | `files.py`                      |
|  16.0% |       4 | `_find_and_load` | `<frozen importlib._bootstrap>` |
|  16.0% |       4 | `<module>`       | `comments.py`                   |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |      25 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |      25 | `_get_module_details` | `<frozen runpy>`                |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                | Location                                 |
| ----: | ------: | --------------------- | ---------------------------------------- |
| 81.8% |       9 | `_compile_bytecode`   | `<frozen importlib._bootstrap_external>` |
| 18.2% |       2 | `FileLoader.get_data` | `<frozen importlib._bootstrap_external>` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 11.1% |       1 | `(garbage collector)` | `<unknown>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

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

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.3% |     276 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                            |
|  9.3% |     106 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                           |
|  6.0% |      68 | `(garbage collector)` ← `Line.clone` (`lines.py`) ← `hug_power_op` (`trans.py`) ← `_hugging_power_ops_line_to_string` (`linegen.py`) ← `transform_line` ← `run_transformer` ← `transform_line` ← `_format_str_once` (`__init__.py`) ← `format_str`                                                               |
|  5.5% |      63 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                               |
|  4.6% |      52 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                    |
|  4.1% |      47 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                              |
|  3.3% |      38 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                 |
|  2.6% |      30 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                        |
|  2.0% |      23 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                            |
|  1.2% |      14 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                          |
|  1.1% |      12 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                     |
|  0.9% |      10 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                          |
|  0.9% |      10 | `convert_one_fmt_off_pair` (`comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                             |
|  0.8% |       9 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                |
|  0.7% |       8 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                         |
|  0.6% |       7 | `Leaf.prefix` (`pytree.py`) ← `Leaf.clone` ← `hug_power_op` (`trans.py`) ← `_hugging_power_ops_line_to_string` (`linegen.py`) ← `transform_line` ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                      |
|  0.6% |       7 | `generate_tokens` (`tokenize.py`) ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                            |
|  0.6% |       7 | `Parser.push` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                           |
|  0.5% |       6 | `(garbage collector)` ← `convert` (`pytree.py`) ← `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` |
|  0.5% |       6 | `(garbage collector)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                         |

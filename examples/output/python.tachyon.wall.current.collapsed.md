# Sampling profile

Collected 1,845 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 68.1% |   1,256 |
| Garbage collector | 30.0% |     553 |
| Standard library  |  2.0% |      36 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                          | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 30.0% |     553 | `(garbage collector)`             | `<unknown>`   |
| 12.7% |     235 | `Parser._addtoken`                | `parse.py`    |
|  6.9% |     128 | `get_features_used`               | `__init__.py` |
|  3.5% |      65 | `Visitor.visit`                   | `nodes.py`    |
|  3.3% |      61 | `Driver.parse_tokens`             | `driver.py`   |
|  3.1% |      57 | `generate_tokens`                 | `tokenize.py` |
|  2.7% |      49 | `BracketTracker.mark`             | `brackets.py` |
|  2.6% |      48 | `parse`                           | `ast.py`      |
|  1.7% |      32 | `whitespace`                      | `nodes.py`    |
|  1.7% |      31 | `Base.__new__`                    | `pytree.py`   |
|  1.6% |      29 | `Parser.pop`                      | `parse.py`    |
|  1.5% |      28 | `Parser.push`                     | `parse.py`    |
|  1.3% |      24 | `Line.append`                     | `lines.py`    |
|  1.3% |      24 | `transform_line`                  | `linegen.py`  |
|  1.1% |      21 | `convert`                         | `pytree.py`   |
|  1.1% |      21 | `Parser.shift`                    | `parse.py`    |
|  1.1% |      20 | `__create_fn__.<locals>.__init__` | `<string>`    |
|  1.1% |      20 | `Base.changed`                    | `pytree.py`   |
|  0.9% |      17 | `Parser.addtoken`                 | `parse.py`    |
|  0.9% |      17 | `_format_str_once`                | `__init__.py` |

#### Categories

##### Ours

|     % | Samples | Function                          | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 12.7% |     235 | `Parser._addtoken`                | `parse.py`    |
|  6.9% |     128 | `get_features_used`               | `__init__.py` |
|  3.5% |      65 | `Visitor.visit`                   | `nodes.py`    |
|  3.3% |      61 | `Driver.parse_tokens`             | `driver.py`   |
|  3.1% |      57 | `generate_tokens`                 | `tokenize.py` |
|  2.7% |      49 | `BracketTracker.mark`             | `brackets.py` |
|  2.6% |      48 | `parse`                           | `ast.py`      |
|  1.7% |      32 | `whitespace`                      | `nodes.py`    |
|  1.7% |      31 | `Base.__new__`                    | `pytree.py`   |
|  1.6% |      29 | `Parser.pop`                      | `parse.py`    |
|  1.5% |      28 | `Parser.push`                     | `parse.py`    |
|  1.3% |      24 | `Line.append`                     | `lines.py`    |
|  1.3% |      24 | `transform_line`                  | `linegen.py`  |
|  1.1% |      21 | `convert`                         | `pytree.py`   |
|  1.1% |      21 | `Parser.shift`                    | `parse.py`    |
|  1.1% |      20 | `__create_fn__.<locals>.__init__` | `<string>`    |
|  1.1% |      20 | `Base.changed`                    | `pytree.py`   |
|  0.9% |      17 | `Parser.addtoken`                 | `parse.py`    |
|  0.9% |      17 | `_format_str_once`                | `__init__.py` |
|  0.8% |      15 | `Line.__str__`                    | `lines.py`    |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 30.0% |     553 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                    | Location                                 |
| ---: | ------: | --------------------------- | ---------------------------------------- |
| 0.8% |      14 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| 0.6% |      11 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
| 0.2% |       4 | `FileLoader.get_data`       | `<frozen importlib._bootstrap_external>` |
| 0.1% |       2 | `_write_atomic`             | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `ABCMeta.__new__`           | `<frozen abc>`                           |
| 0.1% |       1 | `_find_spec`                | `<frozen importlib._bootstrap>`          |
| 0.1% |       1 | `_new_module`               | `<frozen importlib._bootstrap>`          |
| 0.1% |       1 | `_ModuleLock.release`       | `<frozen importlib._bootstrap>`          |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 19.1% |      45 | `parse.py:316` |
| 18.3% |      43 | `parse.py:299` |
|  8.5% |      20 | `parse.py:293` |
|  7.7% |      18 | `parse.py:281` |
|  7.7% |      18 | `parse.py:285` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 28.9% |      37 | `__init__.py:1314` |
| 11.7% |      15 | `__init__.py:1419` |
| 10.9% |      14 | `__init__.py:1365` |
| 10.9% |      14 | `__init__.py:1403` |
|  9.4% |      12 | `__init__.py:1415` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 46.2% |      30 | `nodes.py:170` |
| 20.0% |      13 | `nodes.py:174` |
| 18.5% |      12 | `nodes.py:172` |
|  7.7% |       5 | `nodes.py:163` |
|  3.1% |       2 | `nodes.py:171` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 42.6% |      26 | `driver.py:162` |
| 29.5% |      18 | `driver.py:128` |
|  6.6% |       4 | `driver.py:172` |
|  6.6% |       4 | `driver.py:151` |
|  4.9% |       3 | `driver.py:167` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 33.3% |      19 | `tokenize.py:864` |
|  8.8% |       5 | `tokenize.py:613` |
|  7.0% |       4 | `tokenize.py:623` |
|  5.3% |       3 | `tokenize.py:693` |
|  3.5% |       2 | `tokenize.py:745` |

##### `BracketTracker.mark` (`brackets.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 69.4% |      34 | `brackets.py:112` |
|  8.2% |       4 | `brackets.py:114` |
|  6.1% |       3 | `brackets.py:88`  |
|  4.1% |       2 | `brackets.py:122` |
|  4.1% |       2 | `brackets.py:126` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      48 | `ast.py:46` |

##### `whitespace` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 71.9% |      23 | `nodes.py:215` |
|  9.4% |       3 | `nodes.py:282` |
|  6.3% |       2 | `nodes.py:360` |
|  3.1% |       1 | `nodes.py:272` |
|  3.1% |       1 | `nodes.py:257` |

##### `Base.__new__` (`pytree.py`)

|      % | Samples | Location       |
| -----: | ------: | -------------- |
| 100.0% |      31 | `pytree.py:73` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 34.5% |      10 | `parse.py:392` |
| 27.6% |       8 | `parse.py:396` |
| 17.2% |       5 | `parse.py:394` |
| 10.3% |       3 | `parse.py:393` |
|  6.9% |       2 | `parse.py:395` |

##### `Parser.push` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 39.3% |      11 | `parse.py:382` |
| 28.6% |       8 | `parse.py:384` |
| 14.3% |       4 | `parse.py:383` |
| 10.7% |       3 | `parse.py:381` |
|  7.1% |       2 | `parse.py:374` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location      |
| ----: | ------: | ------------- |
| 62.5% |      15 | `lines.py:84` |
| 25.0% |       6 | `lines.py:78` |
|  4.2% |       1 | `lines.py:90` |
|  4.2% |       1 | `lines.py:67` |
|  4.2% |       1 | `lines.py:52` |

##### `transform_line` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 33.3% |       8 | `linegen.py:716` |
| 29.2% |       7 | `linegen.py:714` |
| 12.5% |       3 | `linegen.py:722` |
| 12.5% |       3 | `linegen.py:679` |
|  4.2% |       1 | `linegen.py:635` |

##### `convert` (`pytree.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 66.7% |      14 | `pytree.py:492` |
| 14.3% |       3 | `pytree.py:490` |
|  9.5% |       2 | `pytree.py:484` |
|  4.8% |       1 | `pytree.py:475` |
|  4.8% |       1 | `pytree.py:487` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 57.1% |      12 | `parse.py:369` |
| 19.0% |       4 | `parse.py:372` |
|  9.5% |       2 | `parse.py:370` |
|  4.8% |       1 | `parse.py:361` |
|  4.8% |       1 | `parse.py:371` |

##### `__create_fn__.<locals>.__init__` (`<string>`)

|     % | Samples | Location     |
| ----: | ------: | ------------ |
| 55.0% |      11 | `<string>:4` |
| 35.0% |       7 | `<string>:7` |
|  5.0% |       1 | `<string>:8` |
|  5.0% |       1 | `<string>:9` |

##### `Base.changed` (`pytree.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 75.0% |      15 | `pytree.py:165` |
| 15.0% |       3 | `pytree.py:164` |
| 10.0% |       2 | `pytree.py:161` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 94.1% |      16 | `parse.py:240` |
|  5.9% |       1 | `parse.py:233` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 23.5% |       4 | `__init__.py:1250` |
| 23.5% |       4 | `__init__.py:1247` |
| 11.8% |       2 | `__init__.py:1248` |
| 11.8% |       2 | `__init__.py:1249` |
| 11.8% |       2 | `__init__.py:1258` |

##### `Line.__str__` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 33.3% |       5 | `lines.py:489` |
| 26.7% |       4 | `lines.py:487` |
| 20.0% |       3 | `lines.py:493` |
| 13.3% |       2 | `lines.py:481` |
|  6.7% |       1 | `lines.py:490` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |      14 | `<frozen importlib._bootstrap>:549` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |      11 | `<frozen importlib._bootstrap_external>:500` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Location                                     |
| ----: | ------: | -------------------------------------------- |
| 50.0% |       2 | `<frozen importlib._bootstrap_external>:923` |
| 50.0% |       2 | `<frozen importlib._bootstrap_external>:922` |

##### `_write_atomic` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Location                                     |
| ----: | ------: | -------------------------------------------- |
| 50.0% |       1 | `<frozen importlib._bootstrap_external>:211` |
| 50.0% |       1 | `<frozen importlib._bootstrap_external>:213` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:743` |

##### `ABCMeta.__new__` (`<frozen abc>`)

|      % | Samples | Location           |
| -----: | ------: | ------------------ |
| 100.0% |       1 | `<frozen abc>:106` |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       1 | `<frozen importlib._bootstrap>:1222` |

##### `_new_module` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                           |
| -----: | ------: | ---------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap>:49` |

##### `_ModuleLock.release` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap>:374` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 58.6% |     324 | `convert`                    | `pytree.py` |
| 15.0% |      83 | `Leaf.prefix`                | `pytree.py` |
|  4.2% |      23 | `Parser._addtoken`           | `parse.py`  |
|  2.7% |      15 | `Line.__str__`               | `lines.py`  |
|  2.7% |      15 | `StringTransformer.__init__` | `trans.py`  |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 98.3% |     231 | `Parser.addtoken`                  | `parse.py`  |
|  1.3% |       3 | `TokenProxy.__next__`              | `driver.py` |
|  0.4% |       1 | `Driver._partially_consume_prefix` | `driver.py` |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |     128 | `detect_target_versions` | `__init__.py` |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 72.3% |      47 | `Visitor.visit_default`       | `nodes.py`   |
| 26.2% |      17 | `LineGenerator.visit_stmt`    | `linegen.py` |
|  1.5% |       1 | `LineGenerator.visit_funcdef` | `linegen.py` |

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      61 | `Driver.parse_string` | `driver.py` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 78.9% |      45 | `TokenProxy.__next__` | `driver.py` |
| 19.3% |      11 | `Parser.addtoken`     | `parse.py`  |
|  1.8% |       1 | `Driver.parse_tokens` | `driver.py` |

##### `BracketTracker.mark` (`brackets.py`)

|     % | Samples | Caller                               | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 93.9% |      46 | `Line.append`                        | `lines.py`    |
|  4.1% |       2 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |
|  2.0% |       1 | `max_delimiter_priority_in_atom`     | `brackets.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      48 | `_parse_single_version` | `parsing.py` |

##### `whitespace` (`nodes.py`)

|     % | Samples | Caller                               | Location   |
| ----: | ------: | ------------------------------------ | ---------- |
| 96.9% |      31 | `Line.append`                        | `lines.py` |
|  3.1% |       1 | `EmptyLineTracker.maybe_empty_lines` | `lines.py` |

##### `Base.__new__` (`pytree.py`)

|      % | Samples | Caller    | Location    |
| -----: | ------: | --------- | ----------- |
| 100.0% |      31 | `convert` | `pytree.py` |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      29 | `Parser._addtoken` | `parse.py` |

##### `Parser.push` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      28 | `Parser._addtoken` | `parse.py` |

##### `Line.append` (`lines.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 79.2% |      19 | `LineGenerator.visit_default` | `linegen.py` |
| 16.7% |       4 | `bracket_split_build_line`    | `linegen.py` |
|  4.2% |       1 | `Line.append_safe`            | `lines.py`   |

##### `transform_line` (`linegen.py`)

|     % | Samples | Caller             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 95.8% |      23 | `_format_str_once` | `__init__.py` |
|  4.2% |       1 | `run_transformer`  | `linegen.py`  |

##### `convert` (`pytree.py`)

|     % | Samples | Caller         | Location      |
| ----: | ------: | -------------- | ------------- |
| 66.7% |      14 | `Parser.shift` | `parse.py`    |
| 28.6% |       6 | `Parser.pop`   | `parse.py`    |
|  4.8% |       1 | `Logger.debug` | `__init__.py` |

##### `Parser.shift` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      21 | `Parser._addtoken` | `parse.py` |

##### `__create_fn__.<locals>.__init__` (`<string>`)

|     % | Samples | Caller                     | Location     |
| ----: | ------: | -------------------------- | ------------ |
| 60.0% |      12 | `__init__`                 | `__init__`   |
| 15.0% |       3 | `LineGenerator.line`       | `linegen.py` |
| 10.0% |       2 | `LinesBlock.all_lines`     | `lines.py`   |
|  5.0% |       1 | `bracket_split_build_line` | `linegen.py` |
|  5.0% |       1 | `transform_line`           | `linegen.py` |

##### `Base.changed` (`pytree.py`)

|     % | Samples | Caller         | Location    |
| ----: | ------: | -------------- | ----------- |
| 95.0% |      19 | `Base.changed` | `pytree.py` |
|  5.0% |       1 | `Leaf.prefix`  | `pytree.py` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      17 | `Driver.parse_tokens` | `driver.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Caller          | Location      |
| ----: | ------: | --------------- | ------------- |
| 76.5% |      13 | `format_str`    | `__init__.py` |
| 23.5% |       4 | `assert_stable` | `__init__.py` |

##### `Line.__str__` (`lines.py`)

|     % | Samples | Caller                             | Location      |
| ----: | ------: | ---------------------------------- | ------------- |
| 66.7% |      10 | `line_to_string`                   | `lines.py`    |
| 13.3% |       2 | `run_transformer`                  | `linegen.py`  |
| 13.3% |       2 | `_format_str_once`                 | `__init__.py` |
|  6.7% |       1 | `bracket_split_succeeded_or_raise` | `linegen.py`  |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % | Samples | Caller                              | Location                                 |
| ----: | ------: | ----------------------------------- | ---------------------------------------- |
| 71.4% |      10 | `SourceLoader.source_to_code`       | `<frozen importlib._bootstrap_external>` |
| 14.3% |       2 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
| 14.3% |       2 | `ExtensionFileLoader.exec_module`   | `<frozen importlib._bootstrap_external>` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |      11 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       4 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `_write_atomic` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |       2 | `SourceFileLoader.set_data` | `<frozen importlib._bootstrap_external>` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       1 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `ABCMeta.__new__` (`<frozen abc>`)

|      % | Samples | Caller     | Location   |
| -----: | ------: | ---------- | ---------- |
| 100.0% |       1 | `<module>` | `types.py` |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |       1 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_new_module` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller             | Location                        |
| -----: | ------: | ------------------ | ------------------------------- |
| 100.0% |       1 | `module_from_spec` | `<frozen importlib._bootstrap>` |

##### `_ModuleLock.release` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller                              | Location                        |
| -----: | ------: | ----------------------------------- | ------------------------------- |
| 100.0% |       1 | `_HierarchicalLockManager.__exit__` | `<frozen importlib._bootstrap>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                         | Location         |
| -----: | ------: | -------------------------------- | ---------------- |
| 100.0% |   1,845 | `_run_code`                      | `<frozen runpy>` |
| 100.0% |   1,845 | `run_module`                     | `<frozen runpy>` |
| 100.0% |   1,845 | `_run_module_as_main`            | `<frozen runpy>` |
|  96.6% |   1,782 | `reformat_one`                   | `__init__.py`    |
|  96.6% |   1,782 | `main`                           | `__init__.py`    |
|  96.6% |   1,782 | `pass_context.<locals>.new_func` | `decorators.py`  |
|  96.6% |   1,782 | `Context.invoke`                 | `core.py`        |
|  96.6% |   1,782 | `Command.invoke`                 | `core.py`        |
|  96.6% |   1,782 | `Command.main`                   | `core.py`        |
|  96.6% |   1,782 | `Command.__call__`               | `core.py`        |
|  96.6% |   1,782 | `patched_main`                   | `__init__.py`    |
|  96.6% |   1,782 | `<module>`                       | `__main__.py`    |
|  96.6% |   1,782 | `_run_module_code`               | `<frozen runpy>` |
|  96.5% |   1,781 | `format_file_contents`           | `__init__.py`    |
|  96.5% |   1,781 | `format_file_in_place`           | `__init__.py`    |
|  91.1% |   1,680 | `_format_str_once`               | `__init__.py`    |
|  60.1% |   1,108 | `format_str`                     | `__init__.py`    |
|  49.4% |     911 | `Driver.parse_string`            | `driver.py`      |
|  49.4% |     911 | `lib2to3_parse`                  | `parsing.py`     |
|  48.9% |     903 | `Driver.parse_tokens`            | `driver.py`      |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 96.6% |   1,782 | `reformat_one`                    | `__init__.py`   |
| 96.6% |   1,782 | `main`                            | `__init__.py`   |
| 96.6% |   1,782 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 96.6% |   1,782 | `Context.invoke`                  | `core.py`       |
| 96.6% |   1,782 | `Command.invoke`                  | `core.py`       |
| 96.6% |   1,782 | `Command.main`                    | `core.py`       |
| 96.6% |   1,782 | `Command.__call__`                | `core.py`       |
| 96.6% |   1,782 | `patched_main`                    | `__init__.py`   |
| 96.6% |   1,782 | `<module>`                        | `__main__.py`   |
| 96.5% |   1,781 | `format_file_contents`            | `__init__.py`   |
| 96.5% |   1,781 | `format_file_in_place`            | `__init__.py`   |
| 91.1% |   1,680 | `_format_str_once`                | `__init__.py`   |
| 60.1% |   1,108 | `format_str`                      | `__init__.py`   |
| 49.4% |     911 | `Driver.parse_string`             | `driver.py`     |
| 49.4% |     911 | `lib2to3_parse`                   | `parsing.py`    |
| 48.9% |     903 | `Driver.parse_tokens`             | `driver.py`     |
| 41.7% |     769 | `Parser.addtoken`                 | `parse.py`      |
| 40.2% |     742 | `Parser._addtoken`                | `parse.py`      |
| 36.5% |     673 | `check_stability_and_equivalence` | `__init__.py`   |
| 31.7% |     584 | `assert_stable`                   | `__init__.py`   |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 30.0% |     553 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                             | Location                                 |
| -----: | ------: | ------------------------------------ | ---------------------------------------- |
| 100.0% |   1,845 | `_run_code`                          | `<frozen runpy>`                         |
| 100.0% |   1,845 | `run_module`                         | `<frozen runpy>`                         |
| 100.0% |   1,845 | `_run_module_as_main`                | `<frozen runpy>`                         |
|  96.6% |   1,782 | `_run_module_code`                   | `<frozen runpy>`                         |
|   3.4% |      63 | `_call_with_frames_removed`          | `<frozen importlib._bootstrap>`          |
|   3.4% |      63 | `_LoaderBasics.exec_module`          | `<frozen importlib._bootstrap_external>` |
|   3.4% |      63 | `_load_unlocked`                     | `<frozen importlib._bootstrap>`          |
|   3.4% |      63 | `_find_and_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|   3.4% |      63 | `_find_and_load`                     | `<frozen importlib._bootstrap>`          |
|   3.4% |      63 | `_get_module_details`                | `<frozen runpy>`                         |
|   1.5% |      28 | `SourceLoader.get_code`              | `<frozen importlib._bootstrap_external>` |
|   0.7% |      12 | `_compile_bytecode`                  | `<frozen importlib._bootstrap_external>` |
|   0.5% |      10 | `SourceLoader.source_to_code`        | `<frozen importlib._bootstrap_external>` |
|   0.3% |       6 | `_handle_fromlist`                   | `<frozen importlib._bootstrap>`          |
|   0.2% |       4 | `_get_module_lock`                   | `<frozen importlib._bootstrap>`          |
|   0.2% |       4 | `_HierarchicalLockManager.__enter__` | `<frozen importlib._bootstrap>`          |
|   0.2% |       4 | `FileLoader.get_data`                | `<frozen importlib._bootstrap_external>` |
|   0.2% |       3 | `module_from_spec`                   | `<frozen importlib._bootstrap>`          |
|   0.1% |       2 | `ExtensionFileLoader.create_module`  | `<frozen importlib._bootstrap_external>` |
|   0.1% |       2 | `ExtensionFileLoader.exec_module`    | `<frozen importlib._bootstrap_external>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |   1,845 | `run_module` | `<frozen runpy>` |
|  96.6% |   1,782 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 96.6% |   1,782 | `_run_module_code`    | `<frozen runpy>` |
|  3.4% |      63 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,845 | `_run_code` | `<frozen runpy>` |

##### `reformat_one` (`__init__.py`)

|     % | Samples | Callee                 | Location      |
| ----: | ------: | ---------------------- | ------------- |
| 99.9% |   1,781 | `format_file_in_place` | `__init__.py` |
|  0.1% |       1 | `Cache.write`          | `cache.py`    |

##### `main` (`__init__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |   1,782 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |   1,782 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |   1,782 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |   1,782 | `Context.invoke` | `core.py` |

##### `Command.main` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |   1,782 | `Command.invoke` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |   1,782 | `Command.main` | `core.py` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee             | Location  |
| -----: | ------: | ------------------ | --------- |
| 100.0% |   1,782 | `Command.__call__` | `core.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |   1,782 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,782 | `_run_code` | `<frozen runpy>` |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 62.2% |   1,108 | `format_str`                      | `__init__.py` |
| 37.8% |     673 | `check_stability_and_equivalence` | `__init__.py` |

##### `format_file_in_place` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |   1,781 | `format_file_contents` | `__init__.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                               | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
| 54.2% |     911 | `lib2to3_parse`                      | `parsing.py`  |
| 25.7% |     432 | `Visitor.visit`                      | `nodes.py`    |
|  7.7% |     130 | `transform_line`                     | `linegen.py`  |
|  7.7% |     129 | `detect_target_versions`             | `__init__.py` |
|  1.6% |      27 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.2% |   1,099 | `_format_str_once` | `__init__.py` |

##### `Driver.parse_string` (`driver.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.1% |     903 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     911 | `Driver.parse_string` | `driver.py` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                | Location      |
| ----: | ------: | --------------------- | ------------- |
| 85.2% |     769 | `Parser.addtoken`     | `parse.py`    |
|  6.5% |      59 | `TokenProxy.__next__` | `driver.py`   |
|  0.7% |       6 | `(garbage collector)` | `<unknown>`   |
|  0.6% |       5 | `Logger.debug`        | `__init__.py` |
|  0.1% |       1 | `generate_tokens`     | `tokenize.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 95.8% |     737 | `Parser._addtoken` | `parse.py`    |
|  1.4% |      11 | `generate_tokens`  | `tokenize.py` |
|  0.5% |       4 | `Parser.classify`  | `parse.py`    |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 54.6% |     405 | `Parser.shift`        | `parse.py`  |
|  6.9% |      51 | `Parser.pop`          | `parse.py`  |
|  3.8% |      28 | `Parser.push`         | `parse.py`  |
|  3.1% |      23 | `(garbage collector)` | `<unknown>` |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 86.8% |     584 | `assert_stable`     | `__init__.py` |
| 12.6% |      85 | `assert_equivalent` | `__init__.py` |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.5% |     581 | `_format_str_once` | `__init__.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee     | Location      |
| -----: | ------: | ---------- | ------------- |
| 100.0% |      63 | `<module>` | `__init__.py` |
|  22.2% |      14 | `<module>` | `ranges.py`   |
|  22.2% |      14 | `<module>` | `nodes.py`    |
|  22.2% |      14 | `<module>` | `comments.py` |
|  17.5% |      11 | `<module>` | `cache.py`    |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      63 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  44.4% |      28 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |      63 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   4.8% |       3 | `module_from_spec`                | `<frozen importlib._bootstrap>`          |
|   3.2% |       2 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |      63 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
|   1.6% |       1 | `_find_spec`                | `<frozen importlib._bootstrap>` |
|   1.6% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                               | Location                        |
| -----: | ------: | ------------------------------------ | ------------------------------- |
| 100.0% |      63 | `_find_and_load_unlocked`            | `<frozen importlib._bootstrap>` |
|   6.3% |       4 | `_HierarchicalLockManager.__enter__` | `<frozen importlib._bootstrap>` |
|   1.6% |       1 | `_HierarchicalLockManager.__exit__`  | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |      63 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |      63 | `_get_module_details` | `<frozen runpy>`                |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                             | Location                                 |
| ----: | ------: | ---------------------------------- | ---------------------------------------- |
| 42.9% |      12 | `_compile_bytecode`                | `<frozen importlib._bootstrap_external>` |
| 35.7% |      10 | `SourceLoader.source_to_code`      | `<frozen importlib._bootstrap_external>` |
| 14.3% |       4 | `FileLoader.get_data`              | `<frozen importlib._bootstrap_external>` |
|  7.1% |       2 | `SourceFileLoader._cache_bytecode` | `<frozen importlib._bootstrap_external>` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|    % | Samples | Callee                | Location    |
| ---: | ------: | --------------------- | ----------- |
| 8.3% |       1 | `(garbage collector)` | `<unknown>` |

##### `SourceLoader.source_to_code` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |      10 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_get_module_lock` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       4 | `(garbage collector)` | `<unknown>` |

##### `_HierarchicalLockManager.__enter__` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee             | Location                        |
| -----: | ------: | ------------------ | ------------------------------- |
| 100.0% |       4 | `_get_module_lock` | `<frozen importlib._bootstrap>` |

##### `module_from_spec` (`<frozen importlib._bootstrap>`)

|     % | Samples | Callee                              | Location                                 |
| ----: | ------: | ----------------------------------- | ---------------------------------------- |
| 66.7% |       2 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
| 33.3% |       1 | `_new_module`                       | `<frozen importlib._bootstrap>`          |

##### `ExtensionFileLoader.create_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `ExtensionFileLoader.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `format_file_contents` (`__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `_run_code` ← `_run_module_as_main`

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 17.5% |     322 | `(garbage collector)` ← `convert` (`pytree.py`) ← `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  9.5% |     176 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  5.1% |      95 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  4.4% |      82 | `(garbage collector)` ← `Leaf.prefix` (`pytree.py`) ← `Line.append` (`lines.py`) ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_power` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` |
|  3.0% |      55 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.6% |      48 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  2.5% |      46 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.1% |      38 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.8% |      33 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.5% |      28 | `Base.__new__` (`pytree.py`) ← `convert` ← `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.2% |      23 | `whitespace` (`nodes.py`) ← `Line.append` (`lines.py`) ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.1% |      21 | `Parser.push` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.0% |      19 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.0% |      18 | `transform_line` (`linegen.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.9% |      17 | `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.9% |      17 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.8% |      15 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.8% |      15 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.8% |      14 | `(garbage collector)` ← `Line.__str__` (`lines.py`) ← `line_to_string` ← `transform_line` (`linegen.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.8% |      14 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

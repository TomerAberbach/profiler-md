# Sampling profile

Collected 984 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 86.6% |     852 |
| Garbage collector | 11.7% |     115 |
| Standard library  |  1.7% |      17 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                      | Location      |
| ----: | ------: | ----------------------------- | ------------- |
| 25.0% |     246 | `Driver.parse_tokens`         | `driver.py`   |
| 16.1% |     158 | `Parser._addtoken`            | `parse.py`    |
| 11.7% |     115 | `(garbage collector)`         | `<unknown>`   |
| 10.0% |      98 | `get_features_used`           | `__init__.py` |
|  3.9% |      38 | `parse`                       | `ast.py`      |
|  2.1% |      21 | `Parser.pop`                  | `parse.py`    |
|  2.0% |      20 | `generate_tokens`             | `tokenize.py` |
|  1.8% |      18 | `Line.append`                 | `lines.py`    |
|  1.6% |      16 | `Visitor.visit`               | `nodes.py`    |
|  1.5% |      15 | `Parser.addtoken`             | `parse.py`    |
|  1.5% |      15 | `_stringify_ast`              | `parsing.py`  |
|  1.2% |      12 | `Visitor.visit_default`       | `nodes.py`    |
|  1.1% |      11 | `LineGenerator.visit_default` | `linegen.py`  |
|  1.1% |      11 | `Parser.shift`                | `parse.py`    |
|  1.1% |      11 | `convert_one_fmt_off_pair`    | `comments.py` |
|  1.0% |      10 | `assert_equivalent`           | `__init__.py` |
|  1.0% |      10 | `wrap_in_parentheses`         | `nodes.py`    |
|  0.9% |       9 | `_format_str_once`            | `__init__.py` |
|  0.9% |       9 | `normalize_invisible_parens`  | `linegen.py`  |
|  0.8% |       8 | `Parser.classify`             | `parse.py`    |

#### Categories

##### Ours

|     % | Samples | Function                      | Location      |
| ----: | ------: | ----------------------------- | ------------- |
| 25.0% |     246 | `Driver.parse_tokens`         | `driver.py`   |
| 16.1% |     158 | `Parser._addtoken`            | `parse.py`    |
| 10.0% |      98 | `get_features_used`           | `__init__.py` |
|  3.9% |      38 | `parse`                       | `ast.py`      |
|  2.1% |      21 | `Parser.pop`                  | `parse.py`    |
|  2.0% |      20 | `generate_tokens`             | `tokenize.py` |
|  1.8% |      18 | `Line.append`                 | `lines.py`    |
|  1.6% |      16 | `Visitor.visit`               | `nodes.py`    |
|  1.5% |      15 | `Parser.addtoken`             | `parse.py`    |
|  1.5% |      15 | `_stringify_ast`              | `parsing.py`  |
|  1.2% |      12 | `Visitor.visit_default`       | `nodes.py`    |
|  1.1% |      11 | `LineGenerator.visit_default` | `linegen.py`  |
|  1.1% |      11 | `Parser.shift`                | `parse.py`    |
|  1.1% |      11 | `convert_one_fmt_off_pair`    | `comments.py` |
|  1.0% |      10 | `assert_equivalent`           | `__init__.py` |
|  1.0% |      10 | `wrap_in_parentheses`         | `nodes.py`    |
|  0.9% |       9 | `_format_str_once`            | `__init__.py` |
|  0.9% |       9 | `normalize_invisible_parens`  | `linegen.py`  |
|  0.8% |       8 | `Parser.classify`             | `parse.py`    |
|  0.7% |       7 | `LinesBlock.all_lines`        | `lines.py`    |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 11.7% |     115 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function                            | Location                                 |
| ---: | ------: | ----------------------------------- | ---------------------------------------- |
| 0.7% |       7 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
| 0.2% |       2 | `_call_with_frames_removed`         | `<frozen importlib._bootstrap>`          |
| 0.2% |       2 | `FileFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `_load_unlocked`                    | `<frozen importlib._bootstrap>`          |
| 0.1% |       1 | `_find_and_load_unlocked`           | `<frozen importlib._bootstrap>`          |
| 0.1% |       1 | `FileFinder._get_spec`              | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `PathFinder._get_spec`              | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `SourceFileLoader.path_stats`       | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `BufferedIncrementalDecoder.decode` | `<frozen codecs>`                        |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Location        |
| ----: | ------: | --------------- |
| 80.1% |     197 | `driver.py:172` |
| 13.8% |      34 | `driver.py:162` |
|  4.5% |      11 | `driver.py:128` |
|  0.4% |       1 | `driver.py:142` |
|  0.4% |       1 | `driver.py:167` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 18.4% |      29 | `parse.py:328` |
| 13.9% |      22 | `parse.py:311` |
| 10.8% |      17 | `parse.py:305` |
|  9.5% |      15 | `parse.py:298` |
|  8.9% |      14 | `parse.py:326` |

##### `get_features_used` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 20.4% |      20 | `__init__.py:1335` |
| 16.3% |      16 | `__init__.py:1440` |
| 13.3% |      13 | `__init__.py:1424` |
| 13.3% |      13 | `__init__.py:1386` |
|  8.2% |       8 | `__init__.py:1436` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      38 | `ast.py:46` |

##### `Parser.pop` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 33.3% |       7 | `parse.py:404` |
| 19.0% |       4 | `parse.py:408` |
| 19.0% |       4 | `parse.py:403` |
| 14.3% |       3 | `parse.py:407` |
|  9.5% |       2 | `parse.py:406` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 40.0% |       8 | `tokenize.py:624` |
| 15.0% |       3 | `tokenize.py:875` |
|  5.0% |       1 | `tokenize.py:966` |
|  5.0% |       1 | `tokenize.py:896` |
|  5.0% |       1 | `tokenize.py:902` |

##### `Line.append` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 44.4% |       8 | `lines.py:89`  |
| 27.8% |       5 | `lines.py:95`  |
| 11.1% |       2 | `lines.py:91`  |
|  5.6% |       1 | `lines.py:101` |
|  5.6% |       1 | `lines.py:79`  |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 62.5% |      10 | `nodes.py:185` |
| 18.8% |       3 | `nodes.py:183` |
| 12.5% |       2 | `nodes.py:163` |
|  6.3% |       1 | `nodes.py:181` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Location       |
| -----: | ------: | -------------- |
| 100.0% |      15 | `parse.py:252` |

##### `_stringify_ast` (`parsing.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 60.0% |       9 | `parsing.py:217` |
|  6.7% |       1 | `parsing.py:234` |
|  6.7% |       1 | `parsing.py:214` |
|  6.7% |       1 | `parsing.py:187` |
|  6.7% |       1 | `parsing.py:233` |

##### `Visitor.visit_default` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 91.7% |      11 | `nodes.py:191` |
|  8.3% |       1 | `nodes.py:187` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 63.6% |       7 | `linegen.py:158` |
|  9.1% |       1 | `linegen.py:156` |
|  9.1% |       1 | `linegen.py:157` |
|  9.1% |       1 | `linegen.py:138` |
|  9.1% |       1 | `linegen.py:134` |

##### `Parser.shift` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 90.9% |      10 | `parse.py:381` |
|  9.1% |       1 | `parse.py:384` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 54.5% |       6 | `comments.py:186` |
| 45.5% |       5 | `comments.py:184` |

##### `assert_equivalent` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 50.0% |       5 | `__init__.py:1546` |
| 50.0% |       5 | `__init__.py:1547` |

##### `wrap_in_parentheses` (`nodes.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 40.0% |       4 | `nodes.py:947` |
| 20.0% |       2 | `nodes.py:946` |
| 10.0% |       1 | `nodes.py:943` |
| 10.0% |       1 | `nodes.py:949` |
| 10.0% |       1 | `nodes.py:945` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 44.4% |       4 | `__init__.py:1268` |
| 22.2% |       2 | `__init__.py:1271` |
| 22.2% |       2 | `__init__.py:1274` |
| 11.1% |       1 | `__init__.py:1287` |

##### `normalize_invisible_parens` (`linegen.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 77.8% |       7 | `linegen.py:1432` |
| 11.1% |       1 | `linegen.py:1339` |
| 11.1% |       1 | `linegen.py:1431` |

##### `Parser.classify` (`parse.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 37.5% |       3 | `parse.py:368` |
| 25.0% |       2 | `parse.py:371` |
| 25.0% |       2 | `parse.py:343` |
| 12.5% |       1 | `parse.py:345` |

##### `LinesBlock.all_lines` (`lines.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 57.1% |       4 | `lines.py:539` |
| 28.6% |       2 | `lines.py:541` |
| 14.3% |       1 | `lines.py:540` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       7 | `<frozen importlib._bootstrap_external>:500` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       2 | `<frozen importlib._bootstrap>:549` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Location                                      |
| ----: | ------: | --------------------------------------------- |
| 50.0% |       1 | `<frozen importlib._bootstrap_external>:1360` |
| 50.0% |       1 | `<frozen importlib._bootstrap_external>:1393` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap>:915` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       1 | `<frozen importlib._bootstrap>:1309` |

##### `FileFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:1349` |

##### `PathFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:1244` |

##### `SourceFileLoader.path_stats` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:941` |

##### `BufferedIncrementalDecoder.decode` (`<frozen codecs>`)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       1 | `<frozen codecs>:325` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `Driver.parse_tokens` (`driver.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     246 | `Driver.parse_string` | `driver.py` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 98.7% |     156 | `Parser.addtoken`     | `parse.py`  |
|  1.3% |       2 | `TokenProxy.__next__` | `driver.py` |

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 33.0% |      38 | `is_vararg`         | `nodes.py`    |
|  9.6% |      11 | `Parser._addtoken`  | `parse.py`    |
|  7.0% |       8 | `convert`           | `pytree.py`   |
|  6.1% |       7 | `Visitor.visit`     | `nodes.py`    |
|  5.2% |       6 | `generate_comments` | `comments.py` |

##### `get_features_used` (`__init__.py`)

|      % | Samples | Caller                   | Location      |
| -----: | ------: | ------------------------ | ------------- |
| 100.0% |      98 | `detect_target_versions` | `__init__.py` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                  | Location     |
| -----: | ------: | ----------------------- | ------------ |
| 100.0% |      38 | `_parse_single_version` | `parsing.py` |

##### `Parser.pop` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      21 | `Parser._addtoken` | `parse.py` |

##### `generate_tokens` (`tokenize.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 70.0% |      14 | `TokenProxy.__next__` | `driver.py` |
| 30.0% |       6 | `Parser.addtoken`     | `parse.py`  |

##### `Line.append` (`lines.py`)

|     % | Samples | Caller                        | Location     |
| ----: | ------: | ----------------------------- | ------------ |
| 77.8% |      14 | `LineGenerator.visit_default` | `linegen.py` |
| 11.1% |       2 | `bracket_split_build_line`    | `linegen.py` |
|  5.6% |       1 | `hug_power_op`                | `trans.py`   |
|  5.6% |       1 | `Line.append_safe`            | `lines.py`   |

##### `Visitor.visit` (`nodes.py`)

|     % | Samples | Caller                     | Location     |
| ----: | ------: | -------------------------- | ------------ |
| 62.5% |      10 | `Visitor.visit_default`    | `nodes.py`   |
| 37.5% |       6 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `Parser.addtoken` (`parse.py`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      15 | `Driver.parse_tokens` | `driver.py` |

##### `_stringify_ast` (`parsing.py`)

|      % | Samples | Caller                           | Location     |
| -----: | ------: | -------------------------------- | ------------ |
| 100.0% |      15 | `_stringify_ast_with_new_parent` | `parsing.py` |

##### `Visitor.visit_default` (`nodes.py`)

|      % | Samples | Caller                        | Location     |
| -----: | ------: | ----------------------------- | ------------ |
| 100.0% |      12 | `LineGenerator.visit_default` | `linegen.py` |

##### `LineGenerator.visit_default` (`linegen.py`)

|     % | Samples | Caller                            | Location     |
| ----: | ------: | --------------------------------- | ------------ |
| 63.6% |       7 | `Visitor.visit`                   | `nodes.py`   |
| 18.2% |       2 | `LineGenerator.visit_simple_stmt` | `linegen.py` |
|  9.1% |       1 | `LineGenerator.visit_power`       | `linegen.py` |
|  9.1% |       1 | `LineGenerator.visit_NUMBER`      | `linegen.py` |

##### `Parser.shift` (`parse.py`)

|      % | Samples | Caller             | Location   |
| -----: | ------: | ------------------ | ---------- |
| 100.0% |      11 | `Parser._addtoken` | `parse.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|      % | Samples | Caller              | Location      |
| -----: | ------: | ------------------- | ------------- |
| 100.0% |      11 | `normalize_fmt_off` | `comments.py` |

##### `assert_equivalent` (`__init__.py`)

|      % | Samples | Caller                            | Location      |
| -----: | ------: | --------------------------------- | ------------- |
| 100.0% |      10 | `check_stability_and_equivalence` | `__init__.py` |

##### `wrap_in_parentheses` (`nodes.py`)

|      % | Samples | Caller                       | Location     |
| -----: | ------: | ---------------------------- | ------------ |
| 100.0% |      10 | `normalize_invisible_parens` | `linegen.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Caller          | Location      |
| ----: | ------: | --------------- | ------------- |
| 66.7% |       6 | `format_str`    | `__init__.py` |
| 33.3% |       3 | `assert_stable` | `__init__.py` |

##### `normalize_invisible_parens` (`linegen.py`)

|      % | Samples | Caller                     | Location     |
| -----: | ------: | -------------------------- | ------------ |
| 100.0% |       9 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `Parser.classify` (`parse.py`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 87.5% |       7 | `Parser.addtoken`     | `parse.py`  |
| 12.5% |       1 | `Driver.parse_tokens` | `driver.py` |

##### `LinesBlock.all_lines` (`lines.py`)

|      % | Samples | Caller             | Location      |
| -----: | ------: | ------------------ | ------------- |
| 100.0% |       7 | `_format_str_once` | `__init__.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       7 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % | Samples | Caller                              | Location                                 |
| ----: | ------: | ----------------------------------- | ---------------------------------------- |
| 50.0% |       1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
| 50.0% |       1 | `ExtensionFileLoader.exec_module`   | `<frozen importlib._bootstrap_external>` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       2 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |       1 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `FileFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       1 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `PathFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       1 | `PathFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `SourceFileLoader.path_stats` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       1 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `BufferedIncrementalDecoder.decode` (`<frozen codecs>`)

|      % | Samples | Caller         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |       1 | `decode_bytes` | `__init__.py` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                          | Location         |
| -----: | ------: | --------------------------------- | ---------------- |
| 100.0% |     984 | `_run_code`                       | `<frozen runpy>` |
| 100.0% |     984 | `run_module`                      | `<frozen runpy>` |
| 100.0% |     984 | `_run_module_as_main`             | `<frozen runpy>` |
|  97.6% |     960 | `Command.main`                    | `core.py`        |
|  97.6% |     960 | `Command.__call__`                | `core.py`        |
|  97.6% |     960 | `patched_main`                    | `__init__.py`    |
|  97.6% |     960 | `<module>`                        | `__main__.py`    |
|  97.6% |     960 | `_run_module_code`                | `<frozen runpy>` |
|  97.5% |     959 | `format_file_in_place`            | `__init__.py`    |
|  97.5% |     959 | `reformat_one`                    | `__init__.py`    |
|  97.5% |     959 | `main`                            | `__init__.py`    |
|  97.5% |     959 | `pass_context.<locals>.new_func`  | `decorators.py`  |
|  97.5% |     959 | `Context.invoke`                  | `core.py`        |
|  97.5% |     959 | `Command.invoke`                  | `core.py`        |
|  97.4% |     958 | `format_file_contents`            | `__init__.py`    |
|  89.0% |     876 | `_format_str_once`                | `__init__.py`    |
|  53.9% |     530 | `Driver.parse_tokens`             | `driver.py`      |
|  53.9% |     530 | `Driver.parse_string`             | `driver.py`      |
|  53.9% |     530 | `lib2to3_parse`                   | `parsing.py`     |
|  50.3% |     495 | `check_stability_and_equivalence` | `__init__.py`    |

#### Categories

##### Ours

|     % | Samples | Function                          | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 97.6% |     960 | `Command.main`                    | `core.py`       |
| 97.6% |     960 | `Command.__call__`                | `core.py`       |
| 97.6% |     960 | `patched_main`                    | `__init__.py`   |
| 97.6% |     960 | `<module>`                        | `__main__.py`   |
| 97.5% |     959 | `format_file_in_place`            | `__init__.py`   |
| 97.5% |     959 | `reformat_one`                    | `__init__.py`   |
| 97.5% |     959 | `main`                            | `__init__.py`   |
| 97.5% |     959 | `pass_context.<locals>.new_func`  | `decorators.py` |
| 97.5% |     959 | `Context.invoke`                  | `core.py`       |
| 97.5% |     959 | `Command.invoke`                  | `core.py`       |
| 97.4% |     958 | `format_file_contents`            | `__init__.py`   |
| 89.0% |     876 | `_format_str_once`                | `__init__.py`   |
| 53.9% |     530 | `Driver.parse_tokens`             | `driver.py`     |
| 53.9% |     530 | `Driver.parse_string`             | `driver.py`     |
| 53.9% |     530 | `lib2to3_parse`                   | `parsing.py`    |
| 50.3% |     495 | `check_stability_and_equivalence` | `__init__.py`   |
| 47.1% |     463 | `format_str`                      | `__init__.py`   |
| 42.8% |     421 | `assert_stable`                   | `__init__.py`   |
| 25.8% |     254 | `Parser.addtoken`                 | `parse.py`      |
| 23.2% |     228 | `Parser._addtoken`                | `parse.py`      |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 11.7% |     115 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                            | Location                                 |
| -----: | ------: | ----------------------------------- | ---------------------------------------- |
| 100.0% |     984 | `_run_code`                         | `<frozen runpy>`                         |
| 100.0% |     984 | `run_module`                        | `<frozen runpy>`                         |
| 100.0% |     984 | `_run_module_as_main`               | `<frozen runpy>`                         |
|  97.6% |     960 | `_run_module_code`                  | `<frozen runpy>`                         |
|   2.4% |      24 | `_call_with_frames_removed`         | `<frozen importlib._bootstrap>`          |
|   2.4% |      24 | `_LoaderBasics.exec_module`         | `<frozen importlib._bootstrap_external>` |
|   2.4% |      24 | `_load_unlocked`                    | `<frozen importlib._bootstrap>`          |
|   2.4% |      24 | `_find_and_load_unlocked`           | `<frozen importlib._bootstrap>`          |
|   2.4% |      24 | `_find_and_load`                    | `<frozen importlib._bootstrap>`          |
|   2.4% |      24 | `_get_module_details`               | `<frozen runpy>`                         |
|   0.8% |       8 | `SourceLoader.get_code`             | `<frozen importlib._bootstrap_external>` |
|   0.7% |       7 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
|   0.4% |       4 | `_handle_fromlist`                  | `<frozen importlib._bootstrap>`          |
|   0.4% |       4 | `PathFinder._get_spec`              | `<frozen importlib._bootstrap_external>` |
|   0.4% |       4 | `PathFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
|   0.4% |       4 | `_find_spec`                        | `<frozen importlib._bootstrap>`          |
|   0.3% |       3 | `FileFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `FileFinder._get_spec`              | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `module_from_spec`                  | `<frozen importlib._bootstrap>`          |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |     984 | `run_module` | `<frozen runpy>` |
|  97.6% |     960 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 97.6% |     960 | `_run_module_code`    | `<frozen runpy>` |
|  2.4% |      24 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     984 | `_run_code` | `<frozen runpy>` |

##### `Command.main` (`core.py`)

|     % | Samples | Callee                           | Location  |
| ----: | ------: | -------------------------------- | --------- |
| 99.9% |     959 | `Command.invoke`                 | `core.py` |
|  0.1% |       1 | `Command._main_shell_completion` | `core.py` |

##### `Command.__call__` (`core.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |     960 | `Command.main` | `core.py` |

##### `patched_main` (`__init__.py`)

|      % | Samples | Callee             | Location  |
| -----: | ------: | ------------------ | --------- |
| 100.0% |     960 | `Command.__call__` | `core.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     960 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |     960 | `_run_code` | `<frozen runpy>` |

##### `format_file_in_place` (`__init__.py`)

|     % | Samples | Callee                 | Location      |
| ----: | ------: | ---------------------- | ------------- |
| 99.9% |     958 | `format_file_contents` | `__init__.py` |
|  0.1% |       1 | `decode_bytes`         | `__init__.py` |

##### `reformat_one` (`__init__.py`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |     959 | `format_file_in_place` | `__init__.py` |

##### `main` (`__init__.py`)

|      % | Samples | Callee         | Location      |
| -----: | ------: | -------------- | ------------- |
| 100.0% |     959 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

|      % | Samples | Callee | Location      |
| -----: | ------: | ------ | ------------- |
| 100.0% |     959 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

|      % | Samples | Callee                           | Location        |
| -----: | ------: | -------------------------------- | --------------- |
| 100.0% |     959 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

|      % | Samples | Callee           | Location  |
| -----: | ------: | ---------------- | --------- |
| 100.0% |     959 | `Context.invoke` | `core.py` |

##### `format_file_contents` (`__init__.py`)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 51.7% |     495 | `check_stability_and_equivalence` | `__init__.py` |
| 48.3% |     463 | `format_str`                      | `__init__.py` |

##### `_format_str_once` (`__init__.py`)

|     % | Samples | Callee                   | Location      |
| ----: | ------: | ------------------------ | ------------- |
| 60.5% |     530 | `lib2to3_parse`          | `parsing.py`  |
| 17.9% |     157 | `Visitor.visit`          | `nodes.py`    |
| 11.2% |      98 | `detect_target_versions` | `__init__.py` |
|  5.0% |      44 | `transform_line`         | `linegen.py`  |
|  1.6% |      14 | `normalize_fmt_off`      | `comments.py` |

##### `Driver.parse_tokens` (`driver.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 47.9% |     254 | `Parser.addtoken`     | `parse.py`  |
|  4.5% |      24 | `TokenProxy.__next__` | `driver.py` |
|  0.8% |       4 | `(garbage collector)` | `<unknown>` |
|  0.2% |       1 | `Parser.classify`     | `parse.py`  |
|  0.2% |       1 | `convert`             | `pytree.py` |

##### `Driver.parse_string` (`driver.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     530 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     530 | `Driver.parse_string` | `driver.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

|     % | Samples | Callee              | Location      |
| ----: | ------: | ------------------- | ------------- |
| 85.1% |     421 | `assert_stable`     | `__init__.py` |
| 14.1% |      70 | `assert_equivalent` | `__init__.py` |

##### `format_str` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 98.9% |     458 | `_format_str_once` | `__init__.py` |

##### `assert_stable` (`__init__.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 99.3% |     418 | `_format_str_once` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

|     % | Samples | Callee             | Location      |
| ----: | ------: | ------------------ | ------------- |
| 89.0% |     226 | `Parser._addtoken` | `parse.py`    |
|  2.8% |       7 | `Parser.classify`  | `parse.py`    |
|  2.4% |       6 | `generate_tokens`  | `tokenize.py` |

##### `Parser._addtoken` (`parse.py`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 11.4% |      26 | `Parser.shift`        | `parse.py`  |
| 11.4% |      26 | `Parser.pop`          | `parse.py`  |
|  4.8% |      11 | `(garbage collector)` | `<unknown>` |
|  3.1% |       7 | `Parser.push`         | `parse.py`  |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |      24 | `<module>`       | `__init__.py`                   |
|  25.0% |       6 | `_find_and_load` | `<frozen importlib._bootstrap>` |
|  20.8% |       5 | `<module>`       | `cache.py`                      |
|  16.7% |       4 | `<module>`       | `nodes.py`                      |
|  16.7% |       4 | `<module>`       | `comments.py`                   |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |      24 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  33.3% |       8 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |      24 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   4.2% |       1 | `module_from_spec`                | `<frozen importlib._bootstrap>`          |
|   4.2% |       1 | `ExtensionFileLoader.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |      24 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
|  16.7% |       4 | `_find_spec`                | `<frozen importlib._bootstrap>` |
|   8.3% |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |      24 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |      24 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |      24 | `_get_module_details` | `<frozen runpy>`                |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                        | Location                                 |
| ----: | ------: | ----------------------------- | ---------------------------------------- |
| 87.5% |       7 | `_compile_bytecode`           | `<frozen importlib._bootstrap_external>` |
| 12.5% |       1 | `SourceFileLoader.path_stats` | `<frozen importlib._bootstrap_external>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `PathFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                 | Location                                 |
| ----: | ------: | ---------------------- | ---------------------------------------- |
| 75.0% |       3 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `PathFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       4 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                 | Location                                 |
| -----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% |       4 | `PathFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|     % | Samples | Callee                 | Location                                 |
| ----: | ------: | ---------------------- | ---------------------------------------- |
| 33.3% |       1 | `FileFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

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
| 21.7% |     214 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 10.4% |     102 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  6.9% |      68 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  5.5% |      54 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.9% |      38 | `(garbage collector)` ← `is_vararg` (`nodes.py`) ← `is_split_before_delimiter` (`brackets.py`) ← `BracketTracker.mark` ← `max_delimiter_priority_in_atom` ← `maybe_make_parens_invisible_in_atom` (`linegen.py`) ← `normalize_invisible_parens` ← `LineGenerator.visit_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` |
|  3.9% |      38 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  3.3% |      32 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  3.0% |      30 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.1% |      11 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.0% |      10 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.0% |      10 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.9% |       9 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.9% |       9 | `convert_one_fmt_off_pair` (`comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.8% |       8 | `(garbage collector)` ← `convert` (`pytree.py`) ← `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.8% |       8 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.8% |       8 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.7% |       7 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.7% |       7 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.6% |       6 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.6% |       6 | `LinesBlock.all_lines` (`lines.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

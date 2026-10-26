# Sampling profile diff

Collected 897 → 1,049 samples (+152 samples, +16.9%).

| Category          | Change | Delta |             % |   Samples |
| ----------------- | -----: | ----: | ------------: | --------: |
| Ours              | +12.1% |   +73 | 67.2% → 64.4% | 603 → 676 |
| Garbage collector | +27.0% |   +76 | 31.3% → 34.0% | 281 → 357 |
| Standard library  | +23.1% |    +3 |   1.4% → 1.5% |   13 → 16 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                         | Location                                 |
| ------: | ----: | ------------: | --------: | -------------------------------- | ---------------------------------------- |
|  +27.0% |   +76 | 31.3% → 34.0% | 281 → 357 | `(garbage collector)`            | `<unknown>`                              |
|  +17.8% |   +24 | 15.1% → 15.2% | 135 → 159 | `Parser._addtoken`               | `parse.py`                               |
|  +42.1% |   +16 |   4.2% → 5.1% |   38 → 54 | `Driver.parse_tokens`            | `driver.py`                              |
|  +73.3% |   +11 |   1.7% → 2.5% |   15 → 26 | `_stringify_ast`                 | `parsing.py`                             |
|  +12.0% |   +10 |   9.3% → 8.9% |   83 → 93 | `get_features_used`              | `__init__.py`                            |
|  +87.5% |    +7 |   0.9% → 1.4% |    8 → 15 | `normalize_invisible_parens`     | `linegen.py`                             |
| +350.0% |    +7 |   0.2% → 0.9% |     2 → 9 | `_compile_bytecode`              | `<frozen importlib._bootstrap_external>` |
|  +13.5% |    +5 |   4.1% → 4.0% |   37 → 42 | `parse`                          | `ast.py`                                 |
| +166.7% |    +5 |   0.3% → 0.8% |     3 → 8 | `_stringify_ast_with_new_parent` | `parsing.py`                             |
|  +14.3% |    +4 |          3.1% |   28 → 32 | `Visitor.visit`                  | `nodes.py`                               |
| +400.0% |    +4 |   0.1% → 0.5% |     1 → 5 | `LineGenerator.visit_power`      | `linegen.py`                             |
| +100.0% |    +4 |   0.4% → 0.8% |     4 → 8 | `whitespace`                     | `nodes.py`                               |
|     new |    +4 |   0.0% → 0.4% |     0 → 4 | `Parser.classify`                | `parse.py`                               |
|   +9.7% |    +3 |   3.5% → 3.2% |   31 → 34 | `generate_tokens`                | `tokenize.py`                            |
|  +37.5% |    +3 |   0.9% → 1.0% |    8 → 11 | `Parser.shift`                   | `parse.py`                               |
|  +50.0% |    +3 |   0.7% → 0.9% |     6 → 9 | `Parser.push`                    | `parse.py`                               |
|  +14.3% |    +2 |   1.6% → 1.5% |   14 → 16 | `Parser.addtoken`                | `parse.py`                               |
|  +50.0% |    +2 |   0.4% → 0.6% |     4 → 6 | `convert`                        | `pytree.py`                              |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `LineGenerator.visit_stmt`       | `linegen.py`                             |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `Node.__init__`                  | `pytree.py`                              |

##### Ours

|  Change | Delta |             % |   Samples | Function                         | Location      |
| ------: | ----: | ------------: | --------: | -------------------------------- | ------------- |
|  +17.8% |   +24 | 15.1% → 15.2% | 135 → 159 | `Parser._addtoken`               | `parse.py`    |
|  +42.1% |   +16 |   4.2% → 5.1% |   38 → 54 | `Driver.parse_tokens`            | `driver.py`   |
|  +73.3% |   +11 |   1.7% → 2.5% |   15 → 26 | `_stringify_ast`                 | `parsing.py`  |
|  +12.0% |   +10 |   9.3% → 8.9% |   83 → 93 | `get_features_used`              | `__init__.py` |
|  +87.5% |    +7 |   0.9% → 1.4% |    8 → 15 | `normalize_invisible_parens`     | `linegen.py`  |
|  +13.5% |    +5 |   4.1% → 4.0% |   37 → 42 | `parse`                          | `ast.py`      |
| +166.7% |    +5 |   0.3% → 0.8% |     3 → 8 | `_stringify_ast_with_new_parent` | `parsing.py`  |
|  +14.3% |    +4 |          3.1% |   28 → 32 | `Visitor.visit`                  | `nodes.py`    |
| +400.0% |    +4 |   0.1% → 0.5% |     1 → 5 | `LineGenerator.visit_power`      | `linegen.py`  |
| +100.0% |    +4 |   0.4% → 0.8% |     4 → 8 | `whitespace`                     | `nodes.py`    |
|     new |    +4 |   0.0% → 0.4% |     0 → 4 | `Parser.classify`                | `parse.py`    |
|   +9.7% |    +3 |   3.5% → 3.2% |   31 → 34 | `generate_tokens`                | `tokenize.py` |
|  +37.5% |    +3 |   0.9% → 1.0% |    8 → 11 | `Parser.shift`                   | `parse.py`    |
|  +50.0% |    +3 |   0.7% → 0.9% |     6 → 9 | `Parser.push`                    | `parse.py`    |
|  +14.3% |    +2 |   1.6% → 1.5% |   14 → 16 | `Parser.addtoken`                | `parse.py`    |
|  +50.0% |    +2 |   0.4% → 0.6% |     4 → 6 | `convert`                        | `pytree.py`   |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `LineGenerator.visit_stmt`       | `linegen.py`  |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `Node.__init__`                  | `pytree.py`   |
|  +50.0% |    +2 |   0.4% → 0.6% |     4 → 6 | `BracketTracker.mark`            | `brackets.py` |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `is_split_before_delimiter`      | `brackets.py` |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +27.0% |   +76 | 31.3% → 34.0% | 281 → 357 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                            | Location                                 |
| ------: | ----: | ----------: | ------: | ----------------------------------- | ---------------------------------------- |
| +350.0% |    +7 | 0.2% → 0.9% |   2 → 9 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `_path_isfile`                      | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `_path_stat`                        | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `BufferedIncrementalDecoder.decode` | `<frozen codecs>`                        |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                             | Location                                 |
| ------: | ----: | ----------: | ------: | ------------------------------------ | ---------------------------------------- |
|  -44.4% |    -8 | 2.0% → 1.0% | 18 → 10 | `Parser.pop`                         | `parse.py`                               |
|  -66.7% |    -6 | 1.0% → 0.3% |   9 → 3 | `_format_str_once`                   | `__init__.py`                            |
|  -27.8% |    -5 | 2.0% → 1.2% | 18 → 13 | `Line.append`                        | `lines.py`                               |
|  -80.0% |    -4 | 0.6% → 0.1% |   5 → 1 | `_hugging_power_ops_line_to_string`  | `linegen.py`                             |
|  -44.4% |    -4 | 1.0% → 0.5% |   9 → 5 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`                               |
|  -23.1% |    -3 | 1.4% → 1.0% | 13 → 10 | `convert_one_fmt_off_pair`           | `comments.py`                            |
|  -50.0% |    -3 | 0.7% → 0.3% |   6 → 3 | `line_to_string`                     | `lines.py`                               |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `FileFinder.find_spec`               | `<frozen importlib._bootstrap_external>` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `delimiter_split`                    | `linegen.py`                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Driver.parse_string`                | `driver.py`                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `reformat_one`                       | `__init__.py`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hug_power_op`                       | `trans.py`                               |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `run_transformer`                    | `linegen.py`                             |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `LineGenerator.visit_funcdef`        | `linegen.py`                             |
|  -11.1% |    -1 | 1.0% → 0.8% |   9 → 8 | `LineGenerator.visit_default`        | `linegen.py`                             |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `generate_comments`                  | `comments.py`                            |
|  -33.3% |    -1 | 0.3% → 0.2% |   3 → 2 | `LineGenerator.visit_simple_stmt`    | `linegen.py`                             |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `FileLoader.get_data`                | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `SourceLoader.get_code`              | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_find_and_load_unlocked`            | `<frozen importlib._bootstrap>`          |

##### Ours

|  Change | Delta |           % | Samples | Function                             | Location        |
| ------: | ----: | ----------: | ------: | ------------------------------------ | --------------- |
|  -44.4% |    -8 | 2.0% → 1.0% | 18 → 10 | `Parser.pop`                         | `parse.py`      |
|  -66.7% |    -6 | 1.0% → 0.3% |   9 → 3 | `_format_str_once`                   | `__init__.py`   |
|  -27.8% |    -5 | 2.0% → 1.2% | 18 → 13 | `Line.append`                        | `lines.py`      |
|  -80.0% |    -4 | 0.6% → 0.1% |   5 → 1 | `_hugging_power_ops_line_to_string`  | `linegen.py`    |
|  -44.4% |    -4 | 1.0% → 0.5% |   9 → 5 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`      |
|  -23.1% |    -3 | 1.4% → 1.0% | 13 → 10 | `convert_one_fmt_off_pair`           | `comments.py`   |
|  -50.0% |    -3 | 0.7% → 0.3% |   6 → 3 | `line_to_string`                     | `lines.py`      |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `delimiter_split`                    | `linegen.py`    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Driver.parse_string`                | `driver.py`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `reformat_one`                       | `__init__.py`   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hug_power_op`                       | `trans.py`      |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `run_transformer`                    | `linegen.py`    |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `LineGenerator.visit_funcdef`        | `linegen.py`    |
|  -11.1% |    -1 | 1.0% → 0.8% |   9 → 8 | `LineGenerator.visit_default`        | `linegen.py`    |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `generate_comments`                  | `comments.py`   |
|  -33.3% |    -1 | 0.3% → 0.2% |   3 → 2 | `LineGenerator.visit_simple_stmt`    | `linegen.py`    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                           | `types.py`      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `option.<locals>.decorator`          | `decorators.py` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `NamedTupleMeta.__new__`             | `typing.py`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `__get_openssl_constructor`          | `hashlib.py`    |

##### Standard library

|  Change | Delta |           % | Samples | Function                  | Location                                 |
| ------: | ----: | ----------: | ------: | ------------------------- | ---------------------------------------- |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `FileFinder.find_spec`    | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `FileLoader.get_data`     | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `SourceLoader.get_code`   | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>`          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_path_is_mode_type`      | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_path_join`              | `<frozen importlib._bootstrap_external>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|  Change | Delta |            % | Samples | Location             |
| ------: | ----: | -----------: | ------: | -------------------- |
| +600.0% |    +6 |  0.7% → 4.4% |   1 → 7 | `parse.py:314 → 302` |
|  +71.4% |    +5 |  5.2% → 7.5% |  7 → 12 | `parse.py:297 → 285` |
| +250.0% |    +5 |  1.5% → 4.4% |   2 → 7 | `parse.py:302 → 290` |
|  -31.3% |    -5 | 11.9% → 6.9% | 16 → 11 | `parse.py:305 → 293` |
|     new |    +5 |  0.0% → 3.1% |   0 → 5 | `parse.py:317`       |

##### `Driver.parse_tokens` (`driver.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
|  +50.0% |    +5 | 26.3% → 27.8% | 10 → 15 | `driver.py:128` |
|  +20.0% |    +5 | 65.8% → 55.6% | 25 → 30 | `driver.py:162` |
| +200.0% |    +2 |   2.6% → 5.6% |   1 → 3 | `driver.py:172` |
|  -50.0% |    -1 |   5.3% → 1.9% |   2 → 1 | `driver.py:161` |
|     new |    +1 |   0.0% → 1.9% |   0 → 1 | `driver.py:129` |

##### `_stringify_ast` (`parsing.py`)

|  Change | Delta |             % | Samples | Location               |
| ------: | ----: | ------------: | ------: | ---------------------- |
|  +66.7% |    +6 | 60.0% → 57.7% |  9 → 15 | `parsing.py:214 → 222` |
| +250.0% |    +5 | 13.3% → 26.9% |   2 → 7 | `parsing.py:217 → 225` |
| removed |    -2 |  13.3% → 0.0% |   2 → 0 | `parsing.py:189`       |
|     new |    +2 |   0.0% → 7.7% |   0 → 2 | `parsing.py:195`       |

##### `get_features_used` (`__init__.py`)

|  Change | Delta |            % | Samples | Location                  |
| ------: | ----: | -----------: | ------: | ------------------------- |
| +350.0% |    +7 |  2.4% → 9.7% |   2 → 9 | `__init__.py:1436 → 1415` |
| +300.0% |    +6 |  2.4% → 8.6% |   2 → 8 | `__init__.py:1367 → 1346` |
|  -62.5% |    -5 |  9.6% → 3.2% |   8 → 3 | `__init__.py:1414 → 1393` |
| removed |    -4 |  4.8% → 0.0% |   4 → 0 | `__init__.py:1394`        |
|  -33.3% |    -3 | 10.8% → 6.5% |   9 → 6 | `__init__.py:1430 → 1409` |

##### `normalize_invisible_parens` (`linegen.py`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
|  +60.0% |    +3 | 62.5% → 53.3% |   5 → 8 | `linegen.py:1432 → 1448` |
| removed |    -2 |  25.0% → 0.0% |   2 → 0 | `linegen.py:1431`        |
|     new |    +1 |   0.0% → 6.7% |   0 → 1 | `linegen.py:1344`        |
|     new |    +1 |   0.0% → 6.7% |   0 → 1 | `linegen.py:1370`        |
|     new |    +1 |   0.0% → 6.7% |   0 → 1 | `linegen.py:1377`        |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |      % | Samples | Location                                     |
| ------: | ----: | -----: | ------: | -------------------------------------------- |
| +350.0% |    +7 | 100.0% |   2 → 9 | `<frozen importlib._bootstrap_external>:500` |

##### `parse` (`ast.py`)

| Change | Delta |      % | Samples | Location    |
| -----: | ----: | -----: | ------: | ----------- |
| +13.5% |    +5 | 100.0% | 37 → 42 | `ast.py:46` |

##### `_stringify_ast_with_new_parent` (`parsing.py`)

|  Change | Delta |      % | Samples | Location               |
| ------: | ----: | -----: | ------: | ---------------------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `parsing.py:170 → 178` |

##### `Visitor.visit` (`nodes.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
|  +35.7% |    +5 | 50.0% → 59.4% | 14 → 19 | `nodes.py:185 → 174` |
| +300.0% |    +3 |  3.6% → 12.5% |   1 → 4 | `nodes.py:163 → 152` |
|  -27.3% |    -3 | 39.3% → 25.0% |  11 → 8 | `nodes.py:183 → 172` |
| removed |    -1 |   3.6% → 0.0% |   1 → 0 | `nodes.py:176`       |

##### `LineGenerator.visit_power` (`linegen.py`)

|  Change | Delta |              % | Samples | Location         |
| ------: | ----: | -------------: | ------: | ---------------- |
| +300.0% |    +3 | 100.0% → 80.0% |   1 → 4 | `linegen.py:363` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `linegen.py:341` |

##### `whitespace` (`nodes.py`)

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
|     new |    +4 | 0.0% → 50.0% |   0 → 4 | `nodes.py:212` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `nodes.py:226` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `nodes.py:238` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `nodes.py:287` |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `nodes.py:192` |

##### `Parser.classify` (`parse.py`)

| Change | Delta |            % | Samples | Location       |
| -----: | ----: | -----------: | ------: | -------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `parse.py:359` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `parse.py:356` |

##### `generate_tokens` (`tokenize.py`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
|  -55.6% |   -10 | 58.1% → 23.5% |  18 → 8 | `tokenize.py:624 → 613` |
|  +50.0% |    +3 | 19.4% → 26.5% |   6 → 9 | `tokenize.py:875 → 864` |
| +300.0% |    +3 |  3.2% → 11.8% |   1 → 4 | `tokenize.py:911 → 900` |
| removed |    -1 |   3.2% → 0.0% |   1 → 0 | `tokenize.py:720`       |
| removed |    -1 |   3.2% → 0.0% |   1 → 0 | `tokenize.py:907`       |

##### `Parser.shift` (`parse.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| +100.0% |    +5 | 62.5% → 90.9% |  5 → 10 | `parse.py:381 → 369` |
| removed |    -2 |  25.0% → 0.0% |   2 → 0 | `parse.py:383`       |

##### `Parser.push` (`parse.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| +300.0% |    +3 | 16.7% → 44.4% |   1 → 4 | `parse.py:394 → 382` |
| +300.0% |    +3 | 16.7% → 44.4% |   1 → 4 | `parse.py:395 → 383` |
| removed |    -3 |  50.0% → 0.0% |   3 → 0 | `parse.py:396`       |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `parse.py:386`       |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `parse.py:381`       |

##### `Parser.addtoken` (`parse.py`)

| Change | Delta |              % | Samples | Location             |
| -----: | ----: | -------------: | ------: | -------------------- |
|  +7.1% |    +1 | 100.0% → 93.8% | 14 → 15 | `parse.py:252 → 240` |
|    new |    +1 |    0.0% → 6.3% |   0 → 1 | `parse.py:233`       |

##### `convert` (`pytree.py`)

|  Change | Delta |             % | Samples | Location              |
| ------: | ----: | ------------: | ------: | --------------------- |
|     new |    +3 |  0.0% → 50.0% |   0 → 3 | `pytree.py:484`       |
| removed |    -2 |  50.0% → 0.0% |   2 → 0 | `pytree.py:499`       |
|     new |    +2 |  0.0% → 33.3% |   0 → 2 | `pytree.py:492`       |
|  -50.0% |    -1 | 50.0% → 16.7% |   2 → 1 | `pytree.py:501 → 490` |

##### `LineGenerator.visit_stmt` (`linegen.py`)

|  Change | Delta |              % | Samples | Location         |
| ------: | ----: | -------------: | ------: | ---------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `linegen.py:220` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `linegen.py:213` |

##### `Node.__init__` (`pytree.py`)

| Change | Delta |            % | Samples | Location        |
| -----: | ----: | -----------: | ------: | --------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `pytree.py:255` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `pytree.py:256` |

##### `BracketTracker.mark` (`brackets.py`)

|  Change | Delta |             % | Samples | Location          |
| ------: | ----: | ------------: | ------: | ----------------- |
|     new |    +2 |  0.0% → 33.3% |   0 → 2 | `brackets.py:128` |
|  -33.3% |    -1 | 75.0% → 33.3% |   3 → 2 | `brackets.py:112` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `brackets.py:114` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `brackets.py:113` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `brackets.py:122` |

##### `is_split_before_delimiter` (`brackets.py`)

|  Change | Delta |             % | Samples | Location          |
| ------: | ----: | ------------: | ------: | ----------------- |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `brackets.py:240` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `brackets.py:248` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `brackets.py:277` |

##### `_path_isfile` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<frozen importlib._bootstrap_external>:166` |

##### `_path_stat` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<frozen importlib._bootstrap_external>:152` |

##### `BufferedIncrementalDecoder.decode` (`<frozen codecs>`)

| Change | Delta |             % | Samples | Location              |
| -----: | ----: | ------------: | ------: | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<frozen codecs>:325` |

##### `Parser.pop` (`parse.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| removed |    -4 |  22.2% → 0.0% |   4 → 0 | `parse.py:403`       |
|  -44.4% |    -4 |         50.0% |   9 → 5 | `parse.py:404 → 392` |
|  -50.0% |    -1 | 11.1% → 10.0% |   2 → 1 | `parse.py:406 → 394` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `parse.py:395`       |

##### `_format_str_once` (`__init__.py`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
|  -83.3% |    -5 | 66.7% → 33.3% |   6 → 1 | `__init__.py:1268 → 1247` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `__init__.py:1271`        |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `__init__.py:1274`        |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `__init__.py:1266`        |

##### `Line.append` (`lines.py`)

|  Change | Delta |             % | Samples | Location           |
| ------: | ----: | ------------: | ------: | ------------------ |
|  -30.0% |    -3 | 55.6% → 53.8% |  10 → 7 | `lines.py:95 → 84` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `lines.py:84`      |
|  +33.3% |    +1 | 16.7% → 30.8% |   3 → 4 | `lines.py:89 → 78` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `lines.py:91`      |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `lines.py:94`      |

##### `_hugging_power_ops_line_to_string` (`linegen.py`)

| Change | Delta |      % | Samples | Location         |
| -----: | ----: | -----: | ------: | ---------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `linegen.py:596` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|  Change | Delta |              % | Samples | Location             |
| ------: | ----: | -------------: | ------: | -------------------- |
|  -37.5% |    -3 | 88.9% → 100.0% |   8 → 5 | `lines.py:571 → 560` |
| removed |    -1 |   11.1% → 0.0% |   1 → 0 | `lines.py:584`       |

##### `convert_one_fmt_off_pair` (`comments.py`)

| Change | Delta |             % | Samples | Location          |
| -----: | ----: | ------------: | ------: | ----------------- |
| -71.4% |    -5 | 53.8% → 20.0% |   7 → 2 | `comments.py:186` |
|    new |    +2 |  0.0% → 20.0% |   0 → 2 | `comments.py:188` |

##### `line_to_string` (`lines.py`)

| Change | Delta |      % | Samples | Location               |
| -----: | ----: | -----: | ------: | ---------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `lines.py:1078 → 1067` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `<frozen importlib._bootstrap_external>:1360` |

##### `delimiter_split` (`linegen.py`)

|  Change | Delta |            % | Samples | Location          |
| ------: | ----: | -----------: | ------: | ----------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `linegen.py:1264` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `linegen.py:1266` |

##### `Driver.parse_string` (`driver.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `driver.py:201` |

##### `reformat_one` (`__init__.py`)

|  Change | Delta |             % | Samples | Location          |
| ------: | ----: | ------------: | ------: | ----------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `__init__.py:909` |

##### `hug_power_op` (`trans.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `trans.py:133` |

##### `run_transformer` (`linegen.py`)

| Change | Delta |      % | Samples | Location                 |
| -----: | ----: | -----: | ------: | ------------------------ |
| -50.0% |    -1 | 100.0% |   2 → 1 | `linegen.py:1766 → 1782` |

##### `LineGenerator.visit_funcdef` (`linegen.py`)

| Change | Delta |      % | Samples | Location         |
| -----: | ----: | -----: | ------: | ---------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `linegen.py:276` |

##### `LineGenerator.visit_default` (`linegen.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
|  -50.0% |    -4 | 88.9% → 50.0% |   8 → 4 | `linegen.py:158` |
|     new |    +2 |  0.0% → 25.0% |   0 → 2 | `linegen.py:157` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `linegen.py:155` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `linegen.py:138` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `linegen.py:151` |

##### `generate_comments` (`comments.py`)

| Change | Delta |      % | Samples | Location         |
| -----: | ----: | -----: | ------: | ---------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `comments.py:76` |

##### `LineGenerator.visit_simple_stmt` (`linegen.py`)

|  Change | Delta |            % | Samples | Location         |
| ------: | ----: | -----------: | ------: | ---------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `linegen.py:295` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `<frozen importlib._bootstrap_external>:923` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `<frozen importlib._bootstrap_external>:922` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<frozen importlib._bootstrap_external>:872` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|  Change | Delta |             % | Samples | Location                             |
| ------: | ----: | ------------: | ------: | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<frozen importlib._bootstrap>:1298` |

##### `<module>` (`types.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `types.py:331` |

##### `option.<locals>.decorator` (`decorators.py`)

|  Change | Delta |             % | Samples | Location            |
| ------: | ----: | ------------: | ------: | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `decorators.py:374` |

##### `NamedTupleMeta.__new__` (`typing.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `typing.py:3055` |

##### `__get_openssl_constructor` (`hashlib.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `hashlib.py:155` |

##### `_path_is_mode_type` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<frozen importlib._bootstrap_external>:158` |

##### `_path_join` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<frozen importlib._bootstrap_external>:133` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|  Change | Delta |             % |   Samples | Caller                       | Location    |
| ------: | ----: | ------------: | --------: | ---------------------------- | ----------- |
|  +28.4% |   +52 | 65.1% → 65.8% | 183 → 235 | `Parser._addtoken`           | `parse.py`  |
|  +21.1% |    +8 | 13.5% → 12.9% |   38 → 46 | `Line.clone`                 | `lines.py`  |
| +200.0% |    +6 |   1.1% → 2.5% |     3 → 9 | `Node.__init__`              | `pytree.py` |
|  +75.0% |    +3 |   1.4% → 2.0% |     4 → 7 | `Driver.parse_tokens`        | `driver.py` |
| +150.0% |    +3 |   0.7% → 1.4% |     2 → 5 | `StringTransformer.__init__` | `trans.py`  |

##### `Parser._addtoken` (`parse.py`)

|  Change | Delta |             % |   Samples | Caller                | Location      |
| ------: | ----: | ------------: | --------: | --------------------- | ------------- |
|  +16.8% |   +22 | 97.0% → 96.2% | 131 → 153 | `Parser.addtoken`     | `parse.py`    |
| +100.0% |    +2 |   1.5% → 2.5% |     2 → 4 | `TokenProxy.__next__` | `driver.py`   |
|  -50.0% |    -1 |   1.5% → 0.6% |     2 → 1 | `(native)`            | `<unknown>`   |
|     new |    +1 |   0.0% → 0.6% |     0 → 1 | `Logger.debug`        | `__init__.py` |

##### `Driver.parse_tokens` (`driver.py`)

| Change | Delta |      % | Samples | Caller                | Location    |
| -----: | ----: | -----: | ------: | --------------------- | ----------- |
| +42.1% |   +16 | 100.0% | 38 → 54 | `Driver.parse_string` | `driver.py` |

##### `_stringify_ast` (`parsing.py`)

|  Change | Delta |             % | Samples | Caller                           | Location     |
| ------: | ----: | ------------: | ------: | -------------------------------- | ------------ |
|  +50.0% |    +7 | 93.3% → 80.8% | 14 → 21 | `_stringify_ast_with_new_parent` | `parsing.py` |
| +400.0% |    +4 |  6.7% → 19.2% |   1 → 5 | `(native)`                       | `<unknown>`  |

##### `get_features_used` (`__init__.py`)

| Change | Delta |      % | Samples | Caller                   | Location      |
| -----: | ----: | -----: | ------: | ------------------------ | ------------- |
| +12.0% |   +10 | 100.0% | 83 → 93 | `detect_target_versions` | `__init__.py` |

##### `normalize_invisible_parens` (`linegen.py`)

| Change | Delta |      % | Samples | Caller                     | Location     |
| -----: | ----: | -----: | ------: | -------------------------- | ------------ |
| +87.5% |    +7 | 100.0% |  8 → 15 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |      % | Samples | Caller                  | Location                                 |
| ------: | ----: | -----: | ------: | ----------------------- | ---------------------------------------- |
| +350.0% |    +7 | 100.0% |   2 → 9 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `parse` (`ast.py`)

| Change | Delta |      % | Samples | Caller                  | Location     |
| -----: | ----: | -----: | ------: | ----------------------- | ------------ |
| +13.5% |    +5 | 100.0% | 37 → 42 | `_parse_single_version` | `parsing.py` |

##### `_stringify_ast_with_new_parent` (`parsing.py`)

|  Change | Delta |      % | Samples | Caller           | Location     |
| ------: | ----: | -----: | ------: | ---------------- | ------------ |
| +166.7% |    +5 | 100.0% |   3 → 8 | `_stringify_ast` | `parsing.py` |

##### `Visitor.visit` (`nodes.py`)

|  Change | Delta |             % | Samples | Caller                     | Location     |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------ |
| +233.3% |    +7 | 10.7% → 31.3% |  3 → 10 | `LineGenerator.visit_stmt` | `linegen.py` |
|  -13.6% |    -3 | 78.6% → 59.4% | 22 → 19 | `Visitor.visit_default`    | `nodes.py`   |

##### `LineGenerator.visit_power` (`linegen.py`)

|  Change | Delta |      % | Samples | Caller          | Location   |
| ------: | ----: | -----: | ------: | --------------- | ---------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `Visitor.visit` | `nodes.py` |

##### `whitespace` (`nodes.py`)

| Change | Delta |              % | Samples | Caller          | Location   |
| -----: | ----: | -------------: | ------: | --------------- | ---------- |
| +75.0% |    +3 | 100.0% → 87.5% |   4 → 7 | `Line.append`   | `lines.py` |
|    new |    +1 |   0.0% → 12.5% |   0 → 1 | `Visitor.visit` | `nodes.py` |

##### `Parser.classify` (`parse.py`)

| Change | Delta |             % | Samples | Caller            | Location   |
| -----: | ----: | ------------: | ------: | ----------------- | ---------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `Parser.addtoken` | `parse.py` |

##### `generate_tokens` (`tokenize.py`)

| Change | Delta |      % | Samples | Caller     | Location    |
| -----: | ----: | -----: | ------: | ---------- | ----------- |
|  +9.7% |    +3 | 100.0% | 31 → 34 | `(native)` | `<unknown>` |

##### `Parser.shift` (`parse.py`)

| Change | Delta |      % | Samples | Caller             | Location   |
| -----: | ----: | -----: | ------: | ------------------ | ---------- |
| +37.5% |    +3 | 100.0% |  8 → 11 | `Parser._addtoken` | `parse.py` |

##### `Parser.push` (`parse.py`)

| Change | Delta |      % | Samples | Caller             | Location   |
| -----: | ----: | -----: | ------: | ------------------ | ---------- |
| +50.0% |    +3 | 100.0% |   6 → 9 | `Parser._addtoken` | `parse.py` |

##### `Parser.addtoken` (`parse.py`)

| Change | Delta |      % | Samples | Caller                | Location    |
| -----: | ----: | -----: | ------: | --------------------- | ----------- |
| +14.3% |    +2 | 100.0% | 14 → 16 | `Driver.parse_tokens` | `driver.py` |

##### `convert` (`pytree.py`)

| Change | Delta |              % | Samples | Caller         | Location    |
| -----: | ----: | -------------: | ------: | -------------- | ----------- |
|    new |    +4 |   0.0% → 66.7% |   0 → 4 | `Parser.shift` | `parse.py`  |
| -75.0% |    -3 | 100.0% → 16.7% |   4 → 1 | `Parser.pop`   | `parse.py`  |
|    new |    +1 |   0.0% → 16.7% |   0 → 1 | `(native)`     | `<unknown>` |

##### `LineGenerator.visit_stmt` (`linegen.py`)

|  Change | Delta |      % | Samples | Caller          | Location   |
| ------: | ----: | -----: | ------: | --------------- | ---------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `Visitor.visit` | `nodes.py` |

##### `Node.__init__` (`pytree.py`)

| Change | Delta |             % | Samples | Caller     | Location    |
| -----: | ----: | ------------: | ------: | ---------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `(native)` | `<unknown>` |

##### `BracketTracker.mark` (`brackets.py`)

| Change | Delta |      % | Samples | Caller        | Location   |
| -----: | ----: | -----: | ------: | ------------- | ---------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `Line.append` | `lines.py` |

##### `is_split_before_delimiter` (`brackets.py`)

|  Change | Delta |              % | Samples | Caller                      | Location      |
| ------: | ----: | -------------: | ------: | --------------------------- | ------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `BracketTracker.mark`       | `brackets.py` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `Line.is_complex_subscript` | `lines.py`    |

##### `_path_isfile` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Caller                 | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `_path_stat` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Caller                 | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `BufferedIncrementalDecoder.decode` (`<frozen codecs>`)

| Change | Delta |             % | Samples | Caller     | Location    |
| -----: | ----: | ------------: | ------: | ---------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `(native)` | `<unknown>` |

##### `Parser.pop` (`parse.py`)

| Change | Delta |      % | Samples | Caller             | Location   |
| -----: | ----: | -----: | ------: | ------------------ | ---------- |
| -44.4% |    -8 | 100.0% | 18 → 10 | `Parser._addtoken` | `parse.py` |

##### `_format_str_once` (`__init__.py`)

| Change | Delta |             % | Samples | Caller          | Location      |
| -----: | ----: | ------------: | ------: | --------------- | ------------- |
| -83.3% |    -5 | 66.7% → 33.3% |   6 → 1 | `format_str`    | `__init__.py` |
| -33.3% |    -1 | 33.3% → 66.7% |   3 → 2 | `assert_stable` | `__init__.py` |

##### `Line.append` (`lines.py`)

|  Change | Delta |             % | Samples | Caller                        | Location     |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------ |
|  -37.5% |    -6 | 88.9% → 76.9% | 16 → 10 | `LineGenerator.visit_default` | `linegen.py` |
| +100.0% |    +1 |  5.6% → 15.4% |   1 → 2 | `bracket_split_build_line`    | `linegen.py` |

##### `_hugging_power_ops_line_to_string` (`linegen.py`)

| Change | Delta |      % | Samples | Caller           | Location     |
| -----: | ----: | -----: | ------: | ---------------- | ------------ |
| -80.0% |    -4 | 100.0% |   5 → 1 | `transform_line` | `linegen.py` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

| Change | Delta |      % | Samples | Caller             | Location      |
| -----: | ----: | -----: | ------: | ------------------ | ------------- |
| -44.4% |    -4 | 100.0% |   9 → 5 | `_format_str_once` | `__init__.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

| Change | Delta |      % | Samples | Caller              | Location      |
| -----: | ----: | -----: | ------: | ------------------- | ------------- |
| -23.1% |    -3 | 100.0% | 13 → 10 | `normalize_fmt_off` | `comments.py` |

##### `line_to_string` (`lines.py`)

|  Change | Delta |              % | Samples | Caller                              | Location     |
| ------: | ----: | -------------: | ------: | ----------------------------------- | ------------ |
|  -40.0% |    -2 | 83.3% → 100.0% |   5 → 3 | `transform_line`                    | `linegen.py` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `_hugging_power_ops_line_to_string` | `linegen.py` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Caller                 | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `delimiter_split` (`linegen.py`)

|  Change | Delta |             % | Samples | Caller                                             | Location     |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `dont_increase_indentation.<locals>.split_wrapper` | `linegen.py` |

##### `Driver.parse_string` (`driver.py`)

|  Change | Delta |             % | Samples | Caller          | Location     |
| ------: | ----: | ------------: | ------: | --------------- | ------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `lib2to3_parse` | `parsing.py` |

##### `reformat_one` (`__init__.py`)

|  Change | Delta |             % | Samples | Caller | Location      |
| ------: | ----: | ------------: | ------: | ------ | ------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `main` | `__init__.py` |

##### `hug_power_op` (`trans.py`)

|  Change | Delta |             % | Samples | Caller            | Location     |
| ------: | ----: | ------------: | ------: | ----------------- | ------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `run_transformer` | `linegen.py` |

##### `run_transformer` (`linegen.py`)

| Change | Delta |      % | Samples | Caller           | Location     |
| -----: | ----: | -----: | ------: | ---------------- | ------------ |
| -50.0% |    -1 | 100.0% |   2 → 1 | `transform_line` | `linegen.py` |

##### `LineGenerator.visit_funcdef` (`linegen.py`)

| Change | Delta |      % | Samples | Caller          | Location   |
| -----: | ----: | -----: | ------: | --------------- | ---------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `Visitor.visit` | `nodes.py` |

##### `LineGenerator.visit_default` (`linegen.py`)

| Change | Delta |             % | Samples | Caller                            | Location     |
| -----: | ----: | ------------: | ------: | --------------------------------- | ------------ |
| -14.3% |    -1 | 77.8% → 75.0% |   7 → 6 | `Visitor.visit`                   | `nodes.py`   |
| -50.0% |    -1 | 22.2% → 12.5% |   2 → 1 | `LineGenerator.visit_simple_stmt` | `linegen.py` |
|    new |    +1 |  0.0% → 12.5% |   0 → 1 | `LineGenerator.visit_power`       | `linegen.py` |

##### `generate_comments` (`comments.py`)

| Change | Delta |      % | Samples | Caller                        | Location     |
| -----: | ----: | -----: | ------: | ----------------------------- | ------------ |
| -50.0% |    -1 | 100.0% |   2 → 1 | `LineGenerator.visit_default` | `linegen.py` |

##### `LineGenerator.visit_simple_stmt` (`linegen.py`)

| Change | Delta |      % | Samples | Caller          | Location   |
| -----: | ----: | -----: | ------: | --------------- | ---------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `Visitor.visit` | `nodes.py` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |      % | Samples | Caller                  | Location                                 |
| -----: | ----: | -----: | ------: | ----------------------- | ---------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Caller                      | Location                                 |
| ------: | ----: | ------------: | ------: | --------------------------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|  Change | Delta |             % | Samples | Caller           | Location                        |
| ------: | ----: | ------------: | ------: | ---------------- | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`types.py`)

|  Change | Delta |             % | Samples | Caller     | Location    |
| ------: | ----: | ------------: | ------: | ---------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `(native)` | `<unknown>` |

##### `option.<locals>.decorator` (`decorators.py`)

|  Change | Delta |             % | Samples | Caller     | Location      |
| ------: | ----: | ------------: | ------: | ---------- | ------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<module>` | `__init__.py` |

##### `NamedTupleMeta.__new__` (`typing.py`)

|  Change | Delta |             % | Samples | Caller     | Location    |
| ------: | ----: | ------------: | ------: | ---------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `(native)` | `<unknown>` |

##### `__get_openssl_constructor` (`hashlib.py`)

|  Change | Delta |             % | Samples | Caller     | Location     |
| ------: | ----: | ------------: | ------: | ---------- | ------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<module>` | `hashlib.py` |

##### `_path_is_mode_type` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Caller         | Location                                 |
| ------: | ----: | ------------: | ------: | -------------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_path_isfile` | `<frozen importlib._bootstrap_external>` |

##### `_path_join` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Caller                 | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |     Samples | Function                         | Location         |
| -----: | ----: | ------------: | ----------: | -------------------------------- | ---------------- |
| +17.5% |  +152 | 96.7% → 97.1% | 867 → 1,019 | `format_file_in_place`           | `__init__.py`    |
| +16.9% |  +152 |        100.0% | 897 → 1,049 | `(native)`                       | `<unknown>`      |
| +16.9% |  +152 |        100.0% | 897 → 1,049 | `_run_code`                      | `<frozen runpy>` |
| +16.9% |  +152 |        100.0% | 897 → 1,049 | `run_module`                     | `<frozen runpy>` |
| +16.9% |  +152 |        100.0% | 897 → 1,049 | `_run_module_as_main`            | `<frozen runpy>` |
| +17.3% |  +150 | 96.7% → 96.9% | 867 → 1,017 | `format_file_contents`           | `__init__.py`    |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `reformat_one`                   | `__init__.py`    |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `main`                           | `__init__.py`    |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `pass_context.<locals>.new_func` | `decorators.py`  |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Context.invoke`                 | `core.py`        |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Command.invoke`                 | `core.py`        |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Command.main`                   | `core.py`        |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Command.__call__`               | `core.py`        |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `patched_main`                   | `__init__.py`    |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `<module>`                       | `__main__.py`    |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `_run_module_code`               | `<frozen runpy>` |
| +15.9% |  +126 | 88.3% → 87.5% |   792 → 918 | `_format_str_once`               | `__init__.py`    |
| +24.3% |  +112 | 51.3% → 54.5% |   460 → 572 | `Driver.parse_tokens`            | `driver.py`      |
| +24.1% |  +111 | 51.4% → 54.5% |   461 → 572 | `Driver.parse_string`            | `driver.py`      |
| +24.1% |  +111 | 51.4% → 54.5% |   461 → 572 | `lib2to3_parse`                  | `parsing.py`     |

##### Ours

| Change | Delta |             % |     Samples | Function                          | Location        |
| -----: | ----: | ------------: | ----------: | --------------------------------- | --------------- |
| +17.5% |  +152 | 96.7% → 97.1% | 867 → 1,019 | `format_file_in_place`            | `__init__.py`   |
| +17.3% |  +150 | 96.7% → 96.9% | 867 → 1,017 | `format_file_contents`            | `__init__.py`   |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `reformat_one`                    | `__init__.py`   |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `main`                            | `__init__.py`   |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `pass_context.<locals>.new_func`  | `decorators.py` |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Context.invoke`                  | `core.py`       |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Command.invoke`                  | `core.py`       |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Command.main`                    | `core.py`       |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Command.__call__`                | `core.py`       |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `patched_main`                    | `__init__.py`   |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `<module>`                        | `__main__.py`   |
| +15.9% |  +126 | 88.3% → 87.5% |   792 → 918 | `_format_str_once`                | `__init__.py`   |
| +24.3% |  +112 | 51.3% → 54.5% |   460 → 572 | `Driver.parse_tokens`             | `driver.py`     |
| +24.1% |  +111 | 51.4% → 54.5% |   461 → 572 | `Driver.parse_string`             | `driver.py`     |
| +24.1% |  +111 | 51.4% → 54.5% |   461 → 572 | `lib2to3_parse`                   | `parsing.py`    |
| +25.2% |   +96 | 42.5% → 45.5% |   381 → 477 | `Parser.addtoken`                 | `parse.py`      |
| +23.5% |   +86 | 40.8% → 43.1% |   366 → 452 | `Parser._addtoken`                | `parse.py`      |
| +18.2% |   +77 | 47.3% → 47.8% |   424 → 501 | `format_str`                      | `__init__.py`   |
| +16.5% |   +73 | 49.4% → 49.2% |   443 → 516 | `check_stability_and_equivalence` | `__init__.py`   |
| +13.4% |   +50 | 41.7% → 40.4% |   374 → 424 | `assert_stable`                   | `__init__.py`   |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +27.0% |   +76 | 31.3% → 34.0% | 281 → 357 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |             % |     Samples | Function                            | Location                                 |
| ------: | ----: | ------------: | ----------: | ----------------------------------- | ---------------------------------------- |
|  +16.9% |  +152 |        100.0% | 897 → 1,049 | `_run_code`                         | `<frozen runpy>`                         |
|  +16.9% |  +152 |        100.0% | 897 → 1,049 | `run_module`                        | `<frozen runpy>`                         |
|  +16.9% |  +152 |        100.0% | 897 → 1,049 | `_run_module_as_main`               | `<frozen runpy>`                         |
|  +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `_run_module_code`                  | `<frozen runpy>`                         |
| +125.0% |    +5 |   0.4% → 0.9% |       4 → 9 | `_compile_bytecode`                 | `<frozen importlib._bootstrap_external>` |
|  +42.9% |    +3 |   0.8% → 1.0% |      7 → 10 | `SourceLoader.get_code`             | `<frozen importlib._bootstrap_external>` |
|   +7.1% |    +2 |   3.1% → 2.9% |     28 → 30 | `_LoaderBasics.exec_module`         | `<frozen importlib._bootstrap_external>` |
|   +7.1% |    +2 |   3.1% → 2.9% |     28 → 30 | `_load_unlocked`                    | `<frozen importlib._bootstrap>`          |
|   +7.1% |    +2 |   3.1% → 2.9% |     28 → 30 | `_find_and_load_unlocked`           | `<frozen importlib._bootstrap>`          |
|   +7.1% |    +2 |   3.1% → 2.9% |     28 → 30 | `_find_and_load`                    | `<frozen importlib._bootstrap>`          |
|   +7.1% |    +2 |   3.1% → 2.9% |     28 → 30 | `_call_with_frames_removed`         | `<frozen importlib._bootstrap>`          |
|   +7.1% |    +2 |   3.1% → 2.9% |     28 → 30 | `_get_module_details`               | `<frozen runpy>`                         |
|     new |    +1 |   0.0% → 0.1% |       0 → 1 | `_path_stat`                        | `<frozen importlib._bootstrap_external>` |
|     new |    +1 |   0.0% → 0.1% |       0 → 1 | `BufferedIncrementalDecoder.decode` | `<frozen codecs>`                        |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                                | Location                                 |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------- | ---------------------------------------- |
|  -22.9% |    -8 | 3.9% → 2.6% | 35 → 27 | `TokenProxy.__next__`                                   | `driver.py`                              |
|  -26.7% |    -4 | 1.7% → 1.0% | 15 → 11 | `EmptyLineTracker.maybe_empty_lines`                    | `lines.py`                               |
|  -21.4% |    -3 | 1.6% → 1.0% | 14 → 11 | `convert_one_fmt_off_pair`                              | `comments.py`                            |
|  -21.4% |    -3 | 1.6% → 1.0% | 14 → 11 | `normalize_fmt_off`                                     | `comments.py`                            |
|  -12.0% |    -3 | 2.8% → 2.1% | 25 → 22 | `Parser.pop`                                            | `parse.py`                               |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `<module>`                                              | `agg.py`                                 |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `<module>`                                              | `gitignore.py`                           |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `Line.contains_implicit_multiline_string_with_comments` | `lines.py`                               |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `FileFinder.find_spec`                                  | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `PathFinder._get_spec`                                  | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `PathFinder.find_spec`                                  | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `_find_spec`                                            | `<frozen importlib._bootstrap>`          |
|  -16.7% |    -1 | 0.7% → 0.5% |   6 → 5 | `LinesBlock.all_lines`                                  | `lines.py`                               |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `FileLoader.get_data`                                   | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                                              | `formatting.py`                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_path_is_mode_type`                                    | `<frozen importlib._bootstrap_external>` |
|  -16.7% |    -1 | 0.7% → 0.5% |   6 → 5 | `_FuncBuilder.add_fns_to_class`                         | `dataclasses.py`                         |
|  -16.7% |    -1 | 0.7% → 0.5% |   6 → 5 | `_process_class`                                        | `dataclasses.py`                         |
|  -16.7% |    -1 | 0.7% → 0.5% |   6 → 5 | `dataclass.<locals>.wrap`                               | `dataclasses.py`                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                                              | `util.py`                                |

##### Ours

|  Change | Delta |           % | Samples | Function                                                | Location         |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------- | ---------------- |
|  -22.9% |    -8 | 3.9% → 2.6% | 35 → 27 | `TokenProxy.__next__`                                   | `driver.py`      |
|  -26.7% |    -4 | 1.7% → 1.0% | 15 → 11 | `EmptyLineTracker.maybe_empty_lines`                    | `lines.py`       |
|  -21.4% |    -3 | 1.6% → 1.0% | 14 → 11 | `convert_one_fmt_off_pair`                              | `comments.py`    |
|  -21.4% |    -3 | 1.6% → 1.0% | 14 → 11 | `normalize_fmt_off`                                     | `comments.py`    |
|  -12.0% |    -3 | 2.8% → 2.1% | 25 → 22 | `Parser.pop`                                            | `parse.py`       |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `<module>`                                              | `agg.py`         |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `<module>`                                              | `gitignore.py`   |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `Line.contains_implicit_multiline_string_with_comments` | `lines.py`       |
|  -16.7% |    -1 | 0.7% → 0.5% |   6 → 5 | `LinesBlock.all_lines`                                  | `lines.py`       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                                              | `formatting.py`  |
|  -16.7% |    -1 | 0.7% → 0.5% |   6 → 5 | `_FuncBuilder.add_fns_to_class`                         | `dataclasses.py` |
|  -16.7% |    -1 | 0.7% → 0.5% |   6 → 5 | `_process_class`                                        | `dataclasses.py` |
|  -16.7% |    -1 | 0.7% → 0.5% |   6 → 5 | `dataclass.<locals>.wrap`                               | `dataclasses.py` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                                              | `util.py`        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                                              | `basic.py`       |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `<module>`                                              | `_base.py`       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                                              | `base.py`        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `option.<locals>.decorator`                             | `decorators.py`  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `NamedTupleMeta.__new__`                                | `typing.py`      |
|  -33.3% |    -1 | 0.3% → 0.2% |   3 → 2 | `<module>`                                              | `hashlib.py`     |

##### Standard library

|  Change | Delta |           % | Samples | Function               | Location                                 |
| ------: | ----: | ----------: | ------: | ---------------------- | ---------------------------------------- |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `PathFinder.find_spec` | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `_find_spec`           | `<frozen importlib._bootstrap>`          |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `FileLoader.get_data`  | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_path_is_mode_type`   | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_path_join`           | `<frozen importlib._bootstrap_external>` |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `format_file_in_place` (`__init__.py`)

| Change | Delta |      % |     Samples | Caller         | Location      |
| -----: | ----: | -----: | ----------: | -------------- | ------------- |
| +17.5% |  +152 | 100.0% | 867 → 1,019 | `reformat_one` | `__init__.py` |

##### `(native)` (`<unknown>`)

| Change | Delta |             % |     Samples | Caller              | Location         |
| -----: | ----: | ------------: | ----------: | ------------------- | ---------------- |
| +16.9% |  +152 |        100.0% | 897 → 1,049 | `_run_code`         | `<frozen runpy>` |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Command.invoke`    | `core.py`        |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Command.__call__`  | `core.py`        |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `patched_main`      | `__init__.py`    |
| +88.9% |   +16 |   2.0% → 3.2% |     18 → 34 | `assert_equivalent` | `__init__.py`    |

##### `_run_code` (`<frozen runpy>`)

| Change | Delta |             % |     Samples | Caller                | Location         |
| -----: | ----: | ------------: | ----------: | --------------------- | ---------------- |
| +16.9% |  +152 |        100.0% | 897 → 1,049 | `_run_module_as_main` | `<frozen runpy>` |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `_run_module_code`    | `<frozen runpy>` |

##### `run_module` (`<frozen runpy>`)

| Change | Delta |      % |     Samples | Caller     | Location    |
| -----: | ----: | -----: | ----------: | ---------- | ----------- |
| +16.9% |  +152 | 100.0% | 897 → 1,049 | `(native)` | `<unknown>` |

##### `_run_module_as_main` (`<frozen runpy>`)

| Change | Delta |      % |     Samples | Caller     | Location    |
| -----: | ----: | -----: | ----------: | ---------- | ----------- |
| +16.9% |  +152 | 100.0% | 897 → 1,049 | `(native)` | `<unknown>` |

##### `format_file_contents` (`__init__.py`)

| Change | Delta |      % |     Samples | Caller                 | Location      |
| -----: | ----: | -----: | ----------: | ---------------------- | ------------- |
| +17.3% |  +150 | 100.0% | 867 → 1,017 | `format_file_in_place` | `__init__.py` |

##### `reformat_one` (`__init__.py`)

| Change | Delta |      % |     Samples | Caller | Location      |
| -----: | ----: | -----: | ----------: | ------ | ------------- |
| +17.3% |  +150 | 100.0% | 869 → 1,019 | `main` | `__init__.py` |

##### `main` (`__init__.py`)

| Change | Delta |      % |     Samples | Caller                           | Location        |
| -----: | ----: | -----: | ----------: | -------------------------------- | --------------- |
| +17.3% |  +150 | 100.0% | 869 → 1,019 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

| Change | Delta |      % |     Samples | Caller           | Location  |
| -----: | ----: | -----: | ----------: | ---------------- | --------- |
| +17.3% |  +150 | 100.0% | 869 → 1,019 | `Context.invoke` | `core.py` |

##### `Context.invoke` (`core.py`)

| Change | Delta |      % |     Samples | Caller     | Location    |
| -----: | ----: | -----: | ----------: | ---------- | ----------- |
| +17.3% |  +150 | 100.0% | 869 → 1,019 | `(native)` | `<unknown>` |

##### `Command.invoke` (`core.py`)

| Change | Delta |      % |     Samples | Caller         | Location  |
| -----: | ----: | -----: | ----------: | -------------- | --------- |
| +17.3% |  +150 | 100.0% | 869 → 1,019 | `Command.main` | `core.py` |

##### `Command.main` (`core.py`)

| Change | Delta |      % |     Samples | Caller     | Location    |
| -----: | ----: | -----: | ----------: | ---------- | ----------- |
| +17.3% |  +150 | 100.0% | 869 → 1,019 | `(native)` | `<unknown>` |

##### `Command.__call__` (`core.py`)

| Change | Delta |      % |     Samples | Caller     | Location    |
| -----: | ----: | -----: | ----------: | ---------- | ----------- |
| +17.3% |  +150 | 100.0% | 869 → 1,019 | `(native)` | `<unknown>` |

##### `patched_main` (`__init__.py`)

| Change | Delta |      % |     Samples | Caller     | Location      |
| -----: | ----: | -----: | ----------: | ---------- | ------------- |
| +17.3% |  +150 | 100.0% | 869 → 1,019 | `<module>` | `__main__.py` |

##### `<module>` (`__main__.py`)

| Change | Delta |      % |     Samples | Caller     | Location    |
| -----: | ----: | -----: | ----------: | ---------- | ----------- |
| +17.3% |  +150 | 100.0% | 869 → 1,019 | `(native)` | `<unknown>` |

##### `_run_module_code` (`<frozen runpy>`)

| Change | Delta |      % |     Samples | Caller       | Location         |
| -----: | ----: | -----: | ----------: | ------------ | ---------------- |
| +17.3% |  +150 | 100.0% | 869 → 1,019 | `run_module` | `<frozen runpy>` |

##### `_format_str_once` (`__init__.py`)

| Change | Delta |             % |   Samples | Caller          | Location      |
| -----: | ----: | ------------: | --------: | --------------- | ------------- |
| +18.1% |   +76 | 53.0% → 54.0% | 420 → 496 | `format_str`    | `__init__.py` |
| +13.4% |   +50 | 47.0% → 46.0% | 372 → 422 | `assert_stable` | `__init__.py` |

##### `Driver.parse_tokens` (`driver.py`)

| Change | Delta |      % |   Samples | Caller                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
| +24.3% |  +112 | 100.0% | 460 → 572 | `Driver.parse_string` | `driver.py` |

##### `Driver.parse_string` (`driver.py`)

| Change | Delta |      % |   Samples | Caller          | Location     |
| -----: | ----: | -----: | --------: | --------------- | ------------ |
| +24.1% |  +111 | 100.0% | 461 → 572 | `lib2to3_parse` | `parsing.py` |

##### `lib2to3_parse` (`parsing.py`)

| Change | Delta |      % |   Samples | Caller             | Location      |
| -----: | ----: | -----: | --------: | ------------------ | ------------- |
| +24.1% |  +111 | 100.0% | 461 → 572 | `_format_str_once` | `__init__.py` |

##### `Parser.addtoken` (`parse.py`)

| Change | Delta |      % |   Samples | Caller                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
| +25.2% |   +96 | 100.0% | 381 → 477 | `Driver.parse_tokens` | `driver.py` |

##### `Parser._addtoken` (`parse.py`)

|  Change | Delta |             % |   Samples | Caller                | Location      |
| ------: | ----: | ------------: | --------: | --------------------- | ------------- |
|  +23.2% |   +84 | 98.9% → 98.7% | 362 → 446 | `Parser.addtoken`     | `parse.py`    |
| +100.0% |    +2 |   0.5% → 0.9% |     2 → 4 | `TokenProxy.__next__` | `driver.py`   |
|  -50.0% |    -1 |   0.5% → 0.2% |     2 → 1 | `(native)`            | `<unknown>`   |
|     new |    +1 |   0.0% → 0.2% |     0 → 1 | `Logger.debug`        | `__init__.py` |

##### `format_str` (`__init__.py`)

| Change | Delta |      % |   Samples | Caller                 | Location      |
| -----: | ----: | -----: | --------: | ---------------------- | ------------- |
| +18.2% |   +77 | 100.0% | 424 → 501 | `format_file_contents` | `__init__.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

| Change | Delta |      % |   Samples | Caller                 | Location      |
| -----: | ----: | -----: | --------: | ---------------------- | ------------- |
| +16.5% |   +73 | 100.0% | 443 → 516 | `format_file_contents` | `__init__.py` |

##### `assert_stable` (`__init__.py`)

| Change | Delta |      % |   Samples | Caller                            | Location      |
| -----: | ----: | -----: | --------: | --------------------------------- | ------------- |
| +13.4% |   +50 | 100.0% | 374 → 424 | `check_stability_and_equivalence` | `__init__.py` |

##### `(garbage collector)` (`<unknown>`)

|  Change | Delta |             % |   Samples | Caller                       | Location    |
| ------: | ----: | ------------: | --------: | ---------------------------- | ----------- |
|  +28.4% |   +52 | 65.1% → 65.8% | 183 → 235 | `Parser._addtoken`           | `parse.py`  |
|  +21.1% |    +8 | 13.5% → 12.9% |   38 → 46 | `Line.clone`                 | `lines.py`  |
| +200.0% |    +6 |   1.1% → 2.5% |     3 → 9 | `Node.__init__`              | `pytree.py` |
|  +75.0% |    +3 |   1.4% → 2.0% |     4 → 7 | `Driver.parse_tokens`        | `driver.py` |
| +150.0% |    +3 |   0.7% → 1.4% |     2 → 5 | `StringTransformer.__init__` | `trans.py`  |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |      % | Samples | Caller                  | Location                                 |
| ------: | ----: | -----: | ------: | ----------------------- | ---------------------------------------- |
| +125.0% |    +5 | 100.0% |   4 → 9 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |      % | Samples | Caller                      | Location                                 |
| -----: | ----: | -----: | ------: | --------------------------- | ---------------------------------------- |
| +42.9% |    +3 | 100.0% |  7 → 10 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |      % | Samples | Caller           | Location                        |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------- |
|  +7.1% |    +2 | 100.0% | 28 → 30 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

| Change | Delta |      % | Samples | Caller                    | Location                        |
| -----: | ----: | -----: | ------: | ------------------------- | ------------------------------- |
|  +7.1% |    +2 | 100.0% | 28 → 30 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

| Change | Delta |      % | Samples | Caller           | Location                        |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------- |
|  +7.1% |    +2 | 100.0% | 28 → 30 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

| Change | Delta |      % | Samples | Caller     | Location    |
| -----: | ----: | -----: | ------: | ---------- | ----------- |
|  +7.1% |    +2 | 100.0% | 28 → 30 | `(native)` | `<unknown>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

| Change | Delta |           % | Samples | Caller                      | Location                                 |
| -----: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
|  +7.1% |    +2 |      100.0% | 28 → 30 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
| -50.0% |    -1 | 7.1% → 3.3% |   2 → 1 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |

##### `_get_module_details` (`<frozen runpy>`)

| Change | Delta |      % | Samples | Caller                | Location         |
| -----: | ----: | -----: | ------: | --------------------- | ---------------- |
|  +7.1% |    +2 | 100.0% | 28 → 30 | `_get_module_details` | `<frozen runpy>` |
|  +7.1% |    +2 | 100.0% | 28 → 30 | `run_module`          | `<frozen runpy>` |

##### `_path_stat` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Caller                 | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `BufferedIncrementalDecoder.decode` (`<frozen codecs>`)

| Change | Delta |             % | Samples | Caller     | Location    |
| -----: | ----: | ------------: | ------: | ---------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `(native)` | `<unknown>` |

##### `TokenProxy.__next__` (`driver.py`)

| Change | Delta |      % | Samples | Caller     | Location    |
| -----: | ----: | -----: | ------: | ---------- | ----------- |
| -22.9% |    -8 | 100.0% | 35 → 27 | `(native)` | `<unknown>` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

| Change | Delta |      % | Samples | Caller             | Location      |
| -----: | ----: | -----: | ------: | ------------------ | ------------- |
| -26.7% |    -4 | 100.0% | 15 → 11 | `_format_str_once` | `__init__.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

| Change | Delta |      % | Samples | Caller              | Location      |
| -----: | ----: | -----: | ------: | ------------------- | ------------- |
| -21.4% |    -3 | 100.0% | 14 → 11 | `normalize_fmt_off` | `comments.py` |

##### `normalize_fmt_off` (`comments.py`)

| Change | Delta |      % | Samples | Caller             | Location      |
| -----: | ----: | -----: | ------: | ------------------ | ------------- |
| -21.4% |    -3 | 100.0% | 14 → 11 | `_format_str_once` | `__init__.py` |

##### `Parser.pop` (`parse.py`)

| Change | Delta |      % | Samples | Caller             | Location   |
| -----: | ----: | -----: | ------: | ------------------ | ---------- |
| -12.0% |    -3 | 100.0% | 25 → 22 | `Parser._addtoken` | `parse.py` |

##### `<module>` (`agg.py`)

| Change | Delta |      % | Samples | Caller     | Location    |
| -----: | ----: | -----: | ------: | ---------- | ----------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `(native)` | `<unknown>` |

##### `<module>` (`gitignore.py`)

| Change | Delta |      % | Samples | Caller     | Location    |
| -----: | ----: | -----: | ------: | ---------- | ----------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `(native)` | `<unknown>` |

##### `Line.contains_implicit_multiline_string_with_comments` (`lines.py`)

| Change | Delta |      % | Samples | Caller           | Location     |
| -----: | ----: | -----: | ------: | ---------------- | ------------ |
| -75.0% |    -3 | 100.0% |   4 → 1 | `transform_line` | `linegen.py` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |      % | Samples | Caller                 | Location                                 |
| -----: | ----: | -----: | ------: | ---------------------- | ---------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `PathFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |      % | Samples | Caller                 | Location                                 |
| -----: | ----: | -----: | ------: | ---------------------- | ---------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `PathFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `PathFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |      % | Samples | Caller       | Location                        |
| -----: | ----: | -----: | ------: | ------------ | ------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `_find_spec` | `<frozen importlib._bootstrap>` |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

| Change | Delta |      % | Samples | Caller                    | Location                        |
| -----: | ----: | -----: | ------: | ------------------------- | ------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `LinesBlock.all_lines` (`lines.py`)

| Change | Delta |      % | Samples | Caller             | Location      |
| -----: | ----: | -----: | ------: | ------------------ | ------------- |
| -16.7% |    -1 | 100.0% |   6 → 5 | `_format_str_once` | `__init__.py` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |      % | Samples | Caller                  | Location                                 |
| -----: | ----: | -----: | ------: | ----------------------- | ---------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `<module>` (`formatting.py`)

|  Change | Delta |             % | Samples | Caller     | Location    |
| ------: | ----: | ------------: | ------: | ---------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `(native)` | `<unknown>` |

##### `_path_is_mode_type` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Caller         | Location                                 |
| ------: | ----: | ------------: | ------: | -------------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_path_isfile` | `<frozen importlib._bootstrap_external>` |

##### `_FuncBuilder.add_fns_to_class` (`dataclasses.py`)

| Change | Delta |      % | Samples | Caller           | Location         |
| -----: | ----: | -----: | ------: | ---------------- | ---------------- |
| -16.7% |    -1 | 100.0% |   6 → 5 | `_process_class` | `dataclasses.py` |

##### `_process_class` (`dataclasses.py`)

| Change | Delta |      % | Samples | Caller                    | Location         |
| -----: | ----: | -----: | ------: | ------------------------- | ---------------- |
| -16.7% |    -1 | 100.0% |   6 → 5 | `dataclass.<locals>.wrap` | `dataclasses.py` |

##### `dataclass.<locals>.wrap` (`dataclasses.py`)

|  Change | Delta |            % | Samples | Caller     | Location  |
| ------: | ----: | -----------: | ------: | ---------- | --------- |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `<module>` | `util.py` |

##### `<module>` (`util.py`)

|  Change | Delta |             % | Samples | Caller     | Location    |
| ------: | ----: | ------------: | ------: | ---------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `(native)` | `<unknown>` |

##### `<module>` (`basic.py`)

|  Change | Delta |             % | Samples | Caller     | Location    |
| ------: | ----: | ------------: | ------: | ---------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `(native)` | `<unknown>` |

##### `<module>` (`_base.py`)

| Change | Delta |      % | Samples | Caller     | Location    |
| -----: | ----: | -----: | ------: | ---------- | ----------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `(native)` | `<unknown>` |

##### `<module>` (`base.py`)

|  Change | Delta |             % | Samples | Caller     | Location    |
| ------: | ----: | ------------: | ------: | ---------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `(native)` | `<unknown>` |

##### `option.<locals>.decorator` (`decorators.py`)

|  Change | Delta |             % | Samples | Caller     | Location      |
| ------: | ----: | ------------: | ------: | ---------- | ------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<module>` | `__init__.py` |

##### `NamedTupleMeta.__new__` (`typing.py`)

|  Change | Delta |             % | Samples | Caller     | Location    |
| ------: | ----: | ------------: | ------: | ---------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `(native)` | `<unknown>` |

##### `<module>` (`hashlib.py`)

| Change | Delta |      % | Samples | Caller     | Location    |
| -----: | ----: | -----: | ------: | ---------- | ----------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `(native)` | `<unknown>` |

##### `_path_join` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Caller                 | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `format_file_in_place` (`__init__.py`)

| Change | Delta |              % |     Samples | Callee                 | Location      |
| -----: | ----: | -------------: | ----------: | ---------------------- | ------------- |
| +17.3% |  +150 | 100.0% → 99.8% | 867 → 1,017 | `format_file_contents` | `__init__.py` |
|    new |    +1 |    0.0% → 0.1% |       0 → 1 | `decode_bytes`         | `__init__.py` |

##### `(native)` (`<unknown>`)

| Change | Delta |             % |     Samples | Callee                | Location         |
| -----: | ----: | ------------: | ----------: | --------------------- | ---------------- |
| +16.9% |  +152 |        100.0% | 897 → 1,049 | `run_module`          | `<frozen runpy>` |
| +16.9% |  +152 |        100.0% | 897 → 1,049 | `_run_module_as_main` | `<frozen runpy>` |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Context.invoke`      | `core.py`        |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Command.main`        | `core.py`        |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `Command.__call__`    | `core.py`        |

##### `_run_code` (`<frozen runpy>`)

| Change | Delta |      % |     Samples | Callee     | Location    |
| -----: | ----: | -----: | ----------: | ---------- | ----------- |
| +16.9% |  +152 | 100.0% | 897 → 1,049 | `(native)` | `<unknown>` |

##### `run_module` (`<frozen runpy>`)

| Change | Delta |             % |     Samples | Callee                | Location         |
| -----: | ----: | ------------: | ----------: | --------------------- | ---------------- |
| +17.3% |  +150 | 96.9% → 97.1% | 869 → 1,019 | `_run_module_code`    | `<frozen runpy>` |
|  +7.1% |    +2 |   3.1% → 2.9% |     28 → 30 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

| Change | Delta |      % |     Samples | Callee      | Location         |
| -----: | ----: | -----: | ----------: | ----------- | ---------------- |
| +16.9% |  +152 | 100.0% | 897 → 1,049 | `_run_code` | `<frozen runpy>` |

##### `format_file_contents` (`__init__.py`)

| Change | Delta |             % |   Samples | Callee                            | Location      |
| -----: | ----: | ------------: | --------: | --------------------------------- | ------------- |
| +18.2% |   +77 | 48.9% → 49.3% | 424 → 501 | `format_str`                      | `__init__.py` |
| +16.5% |   +73 | 51.1% → 50.7% | 443 → 516 | `check_stability_and_equivalence` | `__init__.py` |

##### `reformat_one` (`__init__.py`)

|  Change | Delta |              % |     Samples | Callee                 | Location      |
| ------: | ----: | -------------: | ----------: | ---------------------- | ------------- |
|  +17.5% |  +152 | 99.8% → 100.0% | 867 → 1,019 | `format_file_in_place` | `__init__.py` |
| removed |    -1 |    0.1% → 0.0% |       1 → 0 | `Cache.is_changed`     | `cache.py`    |

##### `main` (`__init__.py`)

| Change | Delta |      % |     Samples | Callee         | Location      |
| -----: | ----: | -----: | ----------: | -------------- | ------------- |
| +17.3% |  +150 | 100.0% | 869 → 1,019 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

| Change | Delta |      % |     Samples | Callee | Location      |
| -----: | ----: | -----: | ----------: | ------ | ------------- |
| +17.3% |  +150 | 100.0% | 869 → 1,019 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

| Change | Delta |      % |     Samples | Callee                           | Location        |
| -----: | ----: | -----: | ----------: | -------------------------------- | --------------- |
| +17.3% |  +150 | 100.0% | 869 → 1,019 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

| Change | Delta |      % |     Samples | Callee     | Location    |
| -----: | ----: | -----: | ----------: | ---------- | ----------- |
| +17.3% |  +150 | 100.0% | 869 → 1,019 | `(native)` | `<unknown>` |

##### `Command.main` (`core.py`)

| Change | Delta |      % |     Samples | Callee           | Location  |
| -----: | ----: | -----: | ----------: | ---------------- | --------- |
| +17.3% |  +150 | 100.0% | 869 → 1,019 | `Command.invoke` | `core.py` |

##### `Command.__call__` (`core.py`)

| Change | Delta |      % |     Samples | Callee     | Location    |
| -----: | ----: | -----: | ----------: | ---------- | ----------- |
| +17.3% |  +150 | 100.0% | 869 → 1,019 | `(native)` | `<unknown>` |

##### `patched_main` (`__init__.py`)

| Change | Delta |      % |     Samples | Callee     | Location    |
| -----: | ----: | -----: | ----------: | ---------- | ----------- |
| +17.3% |  +150 | 100.0% | 869 → 1,019 | `(native)` | `<unknown>` |

##### `<module>` (`__main__.py`)

| Change | Delta |      % |     Samples | Callee         | Location      |
| -----: | ----: | -----: | ----------: | -------------- | ------------- |
| +17.3% |  +150 | 100.0% | 869 → 1,019 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

| Change | Delta |      % |     Samples | Callee      | Location         |
| -----: | ----: | -----: | ----------: | ----------- | ---------------- |
| +17.3% |  +150 | 100.0% | 869 → 1,019 | `_run_code` | `<frozen runpy>` |

##### `_format_str_once` (`__init__.py`)

| Change | Delta |             % |   Samples | Callee                               | Location      |
| -----: | ----: | ------------: | --------: | ------------------------------------ | ------------- |
| +24.1% |  +111 | 58.2% → 62.3% | 461 → 572 | `lib2to3_parse`                      | `parsing.py`  |
| +16.1% |   +19 |         14.9% | 118 → 137 | `Visitor.visit`                      | `nodes.py`    |
| +12.0% |   +10 | 10.5% → 10.1% |   83 → 93 | `detect_target_versions`             | `__init__.py` |
| -26.7% |    -4 |   1.9% → 1.2% |   15 → 11 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |
| -21.4% |    -3 |   1.8% → 1.2% |   14 → 11 | `normalize_fmt_off`                  | `comments.py` |

##### `Driver.parse_tokens` (`driver.py`)

| Change | Delta |             % |   Samples | Callee                | Location      |
| -----: | ----: | ------------: | --------: | --------------------- | ------------- |
| +25.2% |   +96 | 82.8% → 83.4% | 381 → 477 | `Parser.addtoken`     | `parse.py`    |
| -10.8% |    -4 |   8.0% → 5.8% |   37 → 33 | `(native)`            | `<unknown>`   |
| +75.0% |    +3 |   0.9% → 1.2% |     4 → 7 | `(garbage collector)` | `<unknown>`   |
|    new |    +1 |   0.0% → 0.2% |     0 → 1 | `Logger.debug`        | `__init__.py` |

##### `Driver.parse_string` (`driver.py`)

| Change | Delta |              % |   Samples | Callee                | Location    |
| -----: | ----: | -------------: | --------: | --------------------- | ----------- |
| +24.3% |  +112 | 99.8% → 100.0% | 460 → 572 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

| Change | Delta |      % |   Samples | Callee                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
| +24.1% |  +111 | 100.0% | 461 → 572 | `Driver.parse_string` | `driver.py` |

##### `Parser.addtoken` (`parse.py`)

|  Change | Delta |             % |   Samples | Callee             | Location    |
| ------: | ----: | ------------: | --------: | ------------------ | ----------- |
|  +23.2% |   +84 | 95.0% → 93.5% | 362 → 446 | `Parser._addtoken` | `parse.py`  |
| +120.0% |    +6 |   1.3% → 2.3% |    5 → 11 | `(native)`         | `<unknown>` |
|     new |    +4 |   0.0% → 0.8% |     0 → 4 | `Parser.classify`  | `parse.py`  |

##### `Parser._addtoken` (`parse.py`)

| Change | Delta |             % |   Samples | Callee                | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +28.4% |   +52 | 50.0% → 52.0% | 183 → 235 | `(garbage collector)` | `<unknown>` |
| +52.9% |    +9 |   4.6% → 5.8% |   17 → 26 | `Parser.shift`        | `parse.py`  |
| -12.0% |    -3 |   6.8% → 4.9% |   25 → 22 | `Parser.pop`          | `parse.py`  |
| +50.0% |    +3 |   1.6% → 2.0% |     6 → 9 | `Parser.push`         | `parse.py`  |
|    new |    +1 |   0.0% → 0.2% |     0 → 1 | `(native)`            | `<unknown>` |

##### `format_str` (`__init__.py`)

| Change | Delta |             % |   Samples | Callee             | Location      |
| -----: | ----: | ------------: | --------: | ------------------ | ------------- |
| +18.1% |   +76 | 99.1% → 99.0% | 420 → 496 | `_format_str_once` | `__init__.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

| Change | Delta |             % |   Samples | Callee              | Location      |
| -----: | ----: | ------------: | --------: | ------------------- | ------------- |
| +13.4% |   +50 | 84.4% → 82.2% | 374 → 424 | `assert_stable`     | `__init__.py` |
| +35.9% |   +23 | 14.4% → 16.9% |   64 → 87 | `assert_equivalent` | `__init__.py` |

##### `assert_stable` (`__init__.py`)

| Change | Delta |     % |   Samples | Callee             | Location      |
| -----: | ----: | ----: | --------: | ------------------ | ------------- |
| +13.4% |   +50 | 99.5% | 372 → 422 | `_format_str_once` | `__init__.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |            % | Samples | Callee                | Location    |
| ------: | ----: | -----------: | ------: | --------------------- | ----------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `(garbage collector)` | `<unknown>` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Callee                | Location                                 |
| ------: | ----: | ------------: | ------: | --------------------- | ---------------------------------------- |
| +125.0% |    +5 | 57.1% → 90.0% |   4 → 9 | `_compile_bytecode`   | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -1 | 28.6% → 10.0% |   2 → 1 | `FileLoader.get_data` | `<frozen importlib._bootstrap_external>` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Callee                      | Location                                 |
| -----: | ----: | ------------: | ------: | --------------------------- | ---------------------------------------- |
| +42.9% |    +3 | 25.0% → 33.3% |  7 → 10 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |
|  +7.1% |    +2 |        100.0% | 28 → 30 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

| Change | Delta |      % | Samples | Callee                      | Location                                 |
| -----: | ----: | -----: | ------: | --------------------------- | ---------------------------------------- |
|  +7.1% |    +2 | 100.0% | 28 → 30 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

| Change | Delta |            % | Samples | Callee                      | Location                        |
| -----: | ----: | -----------: | ------: | --------------------------- | ------------------------------- |
|  +7.1% |    +2 |       100.0% | 28 → 30 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
| -50.0% |    -2 | 14.3% → 6.7% |   4 → 2 | `_find_spec`                | `<frozen importlib._bootstrap>` |
| -50.0% |    -1 |  7.1% → 3.3% |   2 → 1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

| Change | Delta |      % | Samples | Callee                    | Location                        |
| -----: | ----: | -----: | ------: | ------------------------- | ------------------------------- |
|  +7.1% |    +2 | 100.0% | 28 → 30 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

| Change | Delta |      % | Samples | Callee     | Location    |
| -----: | ----: | -----: | ------: | ---------- | ----------- |
|  +7.1% |    +2 | 100.0% | 28 → 30 | `(native)` | `<unknown>` |

##### `_get_module_details` (`<frozen runpy>`)

| Change | Delta |      % | Samples | Callee                | Location         |
| -----: | ----: | -----: | ------: | --------------------- | ---------------- |
|  +7.1% |    +2 | 100.0% | 28 → 30 | `(native)`            | `<unknown>`      |
|  +7.1% |    +2 | 100.0% | 28 → 30 | `_get_module_details` | `<frozen runpy>` |

##### `TokenProxy.__next__` (`driver.py`)

|  Change | Delta |             % | Samples | Callee             | Location    |
| ------: | ----: | ------------: | ------: | ------------------ | ----------- |
|  -35.5% |   -11 | 88.6% → 74.1% | 31 → 20 | `(native)`         | `<unknown>` |
| +100.0% |    +2 |  5.7% → 14.8% |   2 → 4 | `Parser._addtoken` | `parse.py`  |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

| Change | Delta |             % | Samples | Callee                                | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
| +50.0% |    +1 | 13.3% → 27.3% |   2 → 3 | `(native)`                            | `<unknown>` |
| -25.0% |    -1 | 26.7% → 27.3% |   4 → 3 | `EmptyLineTracker._maybe_empty_lines` | `lines.py`  |

##### `normalize_fmt_off` (`comments.py`)

| Change | Delta |      % | Samples | Callee                     | Location      |
| -----: | ----: | -----: | ------: | -------------------------- | ------------- |
| -21.4% |    -3 | 100.0% | 14 → 11 | `convert_one_fmt_off_pair` | `comments.py` |

##### `Parser.pop` (`parse.py`)

| Change | Delta |             % | Samples | Callee    | Location    |
| -----: | ----: | ------------: | ------: | --------- | ----------- |
| +71.4% |    +5 | 28.0% → 54.5% |  7 → 12 | `convert` | `pytree.py` |

##### `<module>` (`agg.py`)

| Change | Delta |      % | Samples | Callee     | Location    |
| -----: | ----: | -----: | ------: | ---------- | ----------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `(native)` | `<unknown>` |

##### `<module>` (`gitignore.py`)

| Change | Delta |      % | Samples | Callee     | Location    |
| -----: | ----: | -----: | ------: | ---------- | ----------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `(native)` | `<unknown>` |

##### `Line.contains_implicit_multiline_string_with_comments` (`lines.py`)

|  Change | Delta |            % | Samples | Callee                | Location    |
| ------: | ----: | -----------: | ------: | --------------------- | ----------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `(garbage collector)` | `<unknown>` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |            % | Samples | Callee       | Location                                 |
| ------: | ----: | -----------: | ------: | ------------ | ---------------------------------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `_path_join` | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `_path_stat` | `<frozen importlib._bootstrap_external>` |

##### `PathFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |      % | Samples | Callee                 | Location                                 |
| -----: | ----: | -----: | ------: | ---------------------- | ---------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `PathFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |      % | Samples | Callee                 | Location                                 |
| -----: | ----: | -----: | ------: | ---------------------- | ---------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

| Change | Delta |      % | Samples | Callee                 | Location                                 |
| -----: | ----: | -----: | ------: | ---------------------- | ---------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `PathFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `LinesBlock.all_lines` (`lines.py`)

|  Change | Delta |            % | Samples | Callee     | Location    |
| ------: | ----: | -----------: | ------: | ---------- | ----------- |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `(native)` | `<unknown>` |

##### `<module>` (`formatting.py`)

|  Change | Delta |             % | Samples | Callee     | Location    |
| ------: | ----: | ------------: | ------: | ---------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `(native)` | `<unknown>` |

##### `_FuncBuilder.add_fns_to_class` (`dataclasses.py`)

|  Change | Delta |            % | Samples | Callee                | Location    |
| ------: | ----: | -----------: | ------: | --------------------- | ----------- |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `(garbage collector)` | `<unknown>` |

##### `_process_class` (`dataclasses.py`)

| Change | Delta |      % | Samples | Callee                          | Location         |
| -----: | ----: | -----: | ------: | ------------------------------- | ---------------- |
| -16.7% |    -1 | 100.0% |   6 → 5 | `_FuncBuilder.add_fns_to_class` | `dataclasses.py` |

##### `dataclass.<locals>.wrap` (`dataclasses.py`)

| Change | Delta |      % | Samples | Callee           | Location         |
| -----: | ----: | -----: | ------: | ---------------- | ---------------- |
| -16.7% |    -1 | 100.0% |   6 → 5 | `_process_class` | `dataclasses.py` |

##### `<module>` (`util.py`)

|  Change | Delta |             % | Samples | Callee                    | Location         |
| ------: | ----: | ------------: | ------: | ------------------------- | ---------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `dataclass.<locals>.wrap` | `dataclasses.py` |

##### `<module>` (`basic.py`)

|  Change | Delta |             % | Samples | Callee     | Location    |
| ------: | ----: | ------------: | ------: | ---------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `(native)` | `<unknown>` |

##### `<module>` (`_base.py`)

|  Change | Delta |            % | Samples | Callee     | Location    |
| ------: | ----: | -----------: | ------: | ---------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `(native)` | `<unknown>` |

##### `<module>` (`base.py`)

|  Change | Delta |             % | Samples | Callee     | Location    |
| ------: | ----: | ------------: | ------: | ---------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `(native)` | `<unknown>` |

##### `<module>` (`hashlib.py`)

|  Change | Delta |            % | Samples | Callee                      | Location     |
| ------: | ----: | -----------: | ------: | --------------------------- | ------------ |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `__get_openssl_constructor` | `hashlib.py` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `format_file_contents` (`__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `(native)` ← `Command.invoke` (`core.py`) ← `Command.main` ← `(native)` ← `Command.__call__` (`core.py`) ← `(native)` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `(native)` ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `(native)` ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main` ← `(native)`

|  Change | Delta |             % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +28.1% |   +50 | 19.8% → 21.7% | 178 → 228 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +20.5% |   +18 |  9.8% → 10.1% |  88 → 106 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  +57.7% |   +15 |   2.9% → 3.9% |   26 → 41 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +20.8% |   +11 |   5.9% → 6.1% |   53 → 64 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +21.1% |    +8 |   4.2% → 4.4% |   38 → 46 | `(garbage collector)` ← `Line.clone` (`lines.py`) ← `hug_power_op` (`trans.py`) ← `(native)` ← `_hugging_power_ops_line_to_string` (`linegen.py`) ← `transform_line` ← `(native)` ← `run_transformer` (`linegen.py`) ← `transform_line` ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| +800.0% |    +8 |   0.1% → 0.9% |     1 → 9 | `generate_tokens` (`tokenize.py`) ← `(native)` ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +13.5% |    +5 |   4.1% → 4.0% |   37 → 42 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +250.0% |    +5 |   0.2% → 0.7% |     2 → 7 | `_stringify_ast` (`parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `(native)` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|   +9.3% |    +4 |   4.8% → 4.5% |   43 → 47 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +400.0% |    +4 |   0.1% → 0.5% |     1 → 5 | `_stringify_ast` (`parsing.py`) ← `(native)` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     new |    +4 |   0.0% → 0.4% |     0 → 4 | `transform_line` (`linegen.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  +42.9% |    +3 |   0.8% → 1.0% |    7 → 10 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +75.0% |    +3 |   0.4% → 0.7% |     4 → 7 | `(garbage collector)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| +150.0% |    +3 |   0.2% → 0.5% |     2 → 5 | `(garbage collector)` ← `Node.__init__` (`pytree.py`) ← `(native)` ← `convert` (`pytree.py`) ← `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| +300.0% |    +3 |   0.1% → 0.4% |     1 → 4 | `(garbage collector)` ← `Node.__init__` (`pytree.py`) ← `(native)` ← `convert` (`pytree.py`) ← `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +300.0% |    +3 |   0.1% → 0.4% |     1 → 4 | `normalize_invisible_parens` (`linegen.py`) ← `LineGenerator.visit_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` |
|  +75.0% |    +3 |   0.4% → 0.7% |     4 → 7 | `_stringify_ast` (`parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `(native)` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| +300.0% |    +3 |   0.1% → 0.4% |     1 → 4 | `Parser.push` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new |    +3 |   0.0% → 0.3% |     0 → 3 | `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` |
|     new |    +3 |   0.0% → 0.3% |     0 → 3 | `Parser.classify` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `format_file_contents` (`__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `(native)` ← `Command.invoke` (`core.py`) ← `Command.main` ← `(native)` ← `Command.__call__` (`core.py`) ← `(native)` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `(native)` ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `(native)` ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main` ← `(native)`

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -41.7% |    -5 | 1.3% → 0.7% |  12 → 7 | `generate_tokens` (`tokenize.py`) ← `(native)` ← `TokenProxy.__next__` (`driver.py`) ← `(native)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -41.7% |    -5 | 1.3% → 0.7% |  12 → 7 | `convert_one_fmt_off_pair` (`comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -38.5% |    -5 | 1.4% → 0.8% |  13 → 8 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -83.3% |    -5 | 0.7% → 0.1% |   6 → 1 | `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -80.0% |    -4 | 0.6% → 0.1% |   5 → 1 | `transform_line` (`linegen.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed |    -4 | 0.4% → 0.0% |   4 → 0 | `Line.append` (`lines.py`) ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -21.4% |    -3 | 1.6% → 1.0% | 14 → 11 | `generate_tokens` (`tokenize.py`) ← `(native)` ← `TokenProxy.__next__` (`driver.py`) ← `(native)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -60.0% |    -3 | 0.6% → 0.2% |   5 → 2 | `EmptyLineTracker.maybe_empty_lines` (`lines.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -60.0% |    -3 | 0.6% → 0.2% |   5 → 2 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |    -3 | 0.3% → 0.0% |   3 → 0 | `(garbage collector)` ← `generate_tokens` (`tokenize.py`) ← `(native)` ← `TokenProxy.__next__` (`driver.py`) ← `(native)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |    -3 | 0.3% → 0.0% |   3 → 0 | `Line.append` (`lines.py`) ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                           |
| removed |    -3 | 0.3% → 0.0% |   3 → 0 | `EmptyLineTracker._maybe_empty_lines` (`lines.py`) ← `EmptyLineTracker.maybe_empty_lines` ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `_hugging_power_ops_line_to_string` (`linegen.py`) ← `transform_line` ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_power` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `generate_tokens` (`tokenize.py`) ← `(native)` ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `convert` (`pytree.py`) ← `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `line_to_string` (`lines.py`) ← `transform_line` (`linegen.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `delimiter_split` (`linegen.py`) ← `dont_increase_indentation.<locals>.split_wrapper` ← `run_transformer` ← `transform_line` ← `(native)` ← `run_transformer` (`linegen.py`) ← `transform_line` ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|   -3.3% |    -1 | 3.3% → 2.8% | 30 → 29 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

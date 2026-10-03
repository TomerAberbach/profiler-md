# Sampling profile diff

Collected 897 samples → 1,049 samples (+152 samples, +16.9%).

| Category          | Change | Delta |             % |   Samples |
| ----------------- | -----: | ----: | ------------: | --------: |
| Ours              | +12.1% |   +73 | 67.2% → 64.4% | 603 → 676 |
| Garbage collector | +27.0% |   +76 | 31.3% → 34.0% | 281 → 357 |
| Standard library  | +23.1% |    +3 |   1.4% → 1.5% |   13 → 16 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

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

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

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

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
|     new |   +30 | 0.0% → 18.9% |  0 → 30 | `parse.py:316` |
| removed |   -28 | 20.7% → 0.0% |  28 → 0 | `parse.py:328` |
|  -92.6% |   -25 | 20.0% → 1.3% |  27 → 2 | `parse.py:311` |
| +575.0% |   +23 | 3.0% → 17.0% |  4 → 27 | `parse.py:299` |
| removed |   -16 | 11.9% → 0.0% |  16 → 0 | `parse.py:305` |

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

|  Change | Delta |            % | Samples | Location          |
| ------: | ----: | -----------: | ------: | ----------------- |
|     new |    +8 | 0.0% → 53.3% |   0 → 8 | `linegen.py:1448` |
| removed |    -5 | 62.5% → 0.0% |   5 → 0 | `linegen.py:1432` |
| removed |    -2 | 25.0% → 0.0% |   2 → 0 | `linegen.py:1431` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `linegen.py:1351` |
|     new |    +1 |  0.0% → 6.7% |   0 → 1 | `linegen.py:1344` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |      % | Samples | Location                                     |
| ------: | ----: | -----: | ------: | -------------------------------------------- |
| +350.0% |    +7 | 100.0% |   2 → 9 | `<frozen importlib._bootstrap_external>:500` |

##### `parse` (`ast.py`)

| Change | Delta |      % | Samples | Location    |
| -----: | ----: | -----: | ------: | ----------- |
| +13.5% |    +5 | 100.0% | 37 → 42 | `ast.py:46` |

##### `_stringify_ast_with_new_parent` (`parsing.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
|     new |    +8 | 0.0% → 100.0% |   0 → 8 | `parsing.py:178` |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `parsing.py:170` |

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
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `nodes.py:213` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `nodes.py:226` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `nodes.py:238` |
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

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
|     new |   +10 | 0.0% → 90.9% |  0 → 10 | `parse.py:369` |
| removed |    -5 | 62.5% → 0.0% |   5 → 0 | `parse.py:381` |
| removed |    -2 | 25.0% → 0.0% |   2 → 0 | `parse.py:383` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `parse.py:384` |
|     new |    +1 |  0.0% → 9.1% |   0 → 1 | `parse.py:372` |

##### `Parser.push` (`parse.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| +300.0% |    +3 | 16.7% → 44.4% |   1 → 4 | `parse.py:395 → 382` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `parse.py:386`       |
|  +33.3% |    +1 | 50.0% → 44.4% |   3 → 4 | `parse.py:396 → 383` |

##### `Parser.addtoken` (`parse.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
|     new |   +15 |  0.0% → 93.8% |  0 → 15 | `parse.py:240` |
| removed |   -14 | 100.0% → 0.0% |  14 → 0 | `parse.py:252` |
|     new |    +1 |   0.0% → 6.3% |   0 → 1 | `parse.py:233` |

##### `convert` (`pytree.py`)

|  Change | Delta |            % | Samples | Location        |
| ------: | ----: | -----------: | ------: | --------------- |
|     new |    +3 | 0.0% → 50.0% |   0 → 3 | `pytree.py:484` |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `pytree.py:499` |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `pytree.py:501` |
|     new |    +2 | 0.0% → 33.3% |   0 → 2 | `pytree.py:492` |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `pytree.py:490` |

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

|  Change | Delta |            % | Samples | Location           |
| ------: | ----: | -----------: | ------: | ------------------ |
| removed |    -6 | 66.7% → 0.0% |   6 → 0 | `__init__.py:1268` |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `__init__.py:1269` |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `__init__.py:1271` |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `__init__.py:1274` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `__init__.py:1247` |

##### `Line.append` (`lines.py`)

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
| removed |   -10 | 55.6% → 0.0% |  10 → 0 | `lines.py:95`  |
| +600.0% |    +6 | 5.6% → 53.8% |   1 → 7 | `lines.py:84`  |
|     new |    +4 | 0.0% → 30.8% |   0 → 4 | `lines.py:78`  |
| removed |    -3 | 16.7% → 0.0% |   3 → 0 | `lines.py:89`  |
| removed |    -2 | 11.1% → 0.0% |   2 → 0 | `lines.py:101` |

##### `_hugging_power_ops_line_to_string` (`linegen.py`)

| Change | Delta |      % | Samples | Location         |
| -----: | ----: | -----: | ------: | ---------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `linegen.py:596` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
| removed |    -8 |  88.9% → 0.0% |   8 → 0 | `lines.py:571` |
|     new |    +5 | 0.0% → 100.0% |   0 → 5 | `lines.py:560` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `lines.py:584` |

##### `convert_one_fmt_off_pair` (`comments.py`)

| Change | Delta |             % | Samples | Location          |
| -----: | ----: | ------------: | ------: | ----------------- |
| -71.4% |    -5 | 53.8% → 20.0% |   7 → 2 | `comments.py:186` |
|    new |    +2 |  0.0% → 20.0% |   0 → 2 | `comments.py:188` |

##### `line_to_string` (`lines.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `lines.py:1078` |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `lines.py:1067` |

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

|  Change | Delta |             % | Samples | Location          |
| ------: | ----: | ------------: | ------: | ----------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `linegen.py:1766` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `linegen.py:1782` |

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

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

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

Functions with the largest decrease in total samples taken in the function and all its callees.

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

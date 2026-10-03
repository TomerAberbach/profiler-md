# Sampling profile diff

Collected 933 samples → 1,845 samples (+912 samples, +97.7%).

| Category          |  Change | Delta |             % |     Samples |
| ----------------- | ------: | ----: | ------------: | ----------: |
| Ours              | +101.9% |  +634 | 66.7% → 68.1% | 622 → 1,256 |
| Garbage collector |  +91.3% |  +264 | 31.0% → 30.0% |   289 → 553 |
| Standard library  |  +63.6% |   +14 |   2.4% → 2.0% |     22 → 36 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|   Change | Delta |             % |   Samples | Function                          | Location      |
| -------: | ----: | ------------: | --------: | --------------------------------- | ------------- |
|   +91.3% |  +264 | 31.0% → 30.0% | 289 → 553 | `(garbage collector)`             | `<unknown>`   |
|   +94.2% |  +114 | 13.0% → 12.7% | 121 → 235 | `Parser._addtoken`                | `parse.py`    |
|  +306.3% |   +49 |   1.7% → 3.5% |   16 → 65 | `Visitor.visit`                   | `nodes.py`    |
| +1125.0% |   +45 |   0.4% → 2.7% |    4 → 49 | `BracketTracker.mark`             | `brackets.py` |
|   +45.5% |   +40 |   9.4% → 6.9% |  88 → 128 | `get_features_used`               | `__init__.py` |
|      new |   +31 |   0.0% → 1.7% |    0 → 31 | `Base.__new__`                    | `pytree.py`   |
|  +966.7% |   +29 |   0.3% → 1.7% |    3 → 32 | `whitespace`                      | `nodes.py`    |
|   +74.3% |   +26 |   3.8% → 3.3% |   35 → 61 | `Driver.parse_tokens`             | `driver.py`   |
|      new |   +20 |   0.0% → 1.1% |    0 → 20 | `Base.changed`                    | `pytree.py`   |
|  +380.0% |   +19 |   0.5% → 1.3% |    5 → 24 | `transform_line`                  | `linegen.py`  |
| +1900.0% |   +19 |   0.1% → 1.1% |    1 → 20 | `__create_fn__.<locals>.__init__` | `<string>`    |
|   +46.2% |   +18 |   4.2% → 3.1% |   39 → 57 | `generate_tokens`                 | `tokenize.py` |
|  +425.0% |   +17 |   0.4% → 1.1% |    4 → 21 | `convert`                         | `pytree.py`   |
|  +133.3% |   +16 |   1.3% → 1.5% |   12 → 28 | `Parser.push`                     | `parse.py`    |
|      new |   +15 |   0.0% → 0.8% |    0 → 15 | `Node.update_sibling_maps`        | `pytree.py`   |
|      new |   +15 |   0.0% → 0.8% |    0 → 15 | `Line.__str__`                    | `lines.py`    |
|  +183.3% |   +11 |   0.6% → 0.9% |    6 → 17 | `_format_str_once`                | `__init__.py` |
|   +52.6% |   +10 |   2.0% → 1.6% |   19 → 29 | `Parser.pop`                      | `parse.py`    |
|   +23.1% |    +9 |   4.2% → 2.6% |   39 → 48 | `parse`                           | `ast.py`      |
|  +450.0% |    +9 |   0.2% → 0.6% |    2 → 11 | `hug_power_op`                    | `trans.py`    |

##### Ours

|   Change | Delta |             % |   Samples | Function                          | Location      |
| -------: | ----: | ------------: | --------: | --------------------------------- | ------------- |
|   +94.2% |  +114 | 13.0% → 12.7% | 121 → 235 | `Parser._addtoken`                | `parse.py`    |
|  +306.3% |   +49 |   1.7% → 3.5% |   16 → 65 | `Visitor.visit`                   | `nodes.py`    |
| +1125.0% |   +45 |   0.4% → 2.7% |    4 → 49 | `BracketTracker.mark`             | `brackets.py` |
|   +45.5% |   +40 |   9.4% → 6.9% |  88 → 128 | `get_features_used`               | `__init__.py` |
|      new |   +31 |   0.0% → 1.7% |    0 → 31 | `Base.__new__`                    | `pytree.py`   |
|  +966.7% |   +29 |   0.3% → 1.7% |    3 → 32 | `whitespace`                      | `nodes.py`    |
|   +74.3% |   +26 |   3.8% → 3.3% |   35 → 61 | `Driver.parse_tokens`             | `driver.py`   |
|      new |   +20 |   0.0% → 1.1% |    0 → 20 | `Base.changed`                    | `pytree.py`   |
|  +380.0% |   +19 |   0.5% → 1.3% |    5 → 24 | `transform_line`                  | `linegen.py`  |
| +1900.0% |   +19 |   0.1% → 1.1% |    1 → 20 | `__create_fn__.<locals>.__init__` | `<string>`    |
|   +46.2% |   +18 |   4.2% → 3.1% |   39 → 57 | `generate_tokens`                 | `tokenize.py` |
|  +425.0% |   +17 |   0.4% → 1.1% |    4 → 21 | `convert`                         | `pytree.py`   |
|  +133.3% |   +16 |   1.3% → 1.5% |   12 → 28 | `Parser.push`                     | `parse.py`    |
|      new |   +15 |   0.0% → 0.8% |    0 → 15 | `Node.update_sibling_maps`        | `pytree.py`   |
|      new |   +15 |   0.0% → 0.8% |    0 → 15 | `Line.__str__`                    | `lines.py`    |
|  +183.3% |   +11 |   0.6% → 0.9% |    6 → 17 | `_format_str_once`                | `__init__.py` |
|   +52.6% |   +10 |   2.0% → 1.6% |   19 → 29 | `Parser.pop`                      | `parse.py`    |
|   +23.1% |    +9 |   4.2% → 2.6% |   39 → 48 | `parse`                           | `ast.py`      |
|  +450.0% |    +9 |   0.2% → 0.6% |    2 → 11 | `hug_power_op`                    | `trans.py`    |
|      new |    +9 |   0.0% → 0.5% |     0 → 9 | `Leaf.__init__`                   | `pytree.py`   |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +91.3% |  +264 | 31.0% → 30.0% | 289 → 553 | `(garbage collector)` | `<unknown>` |

##### Standard library

| Change | Delta |           % | Samples | Function                    | Location                                 |
| -----: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
| +75.0% |    +6 | 0.9% → 0.8% |  8 → 14 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| +37.5% |    +3 | 0.9% → 0.6% |  8 → 11 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
|    new |    +2 | 0.0% → 0.1% |   0 → 2 | `_write_atomic`             | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `_find_spec`                | `<frozen importlib._bootstrap>`          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `_new_module`               | `<frozen importlib._bootstrap>`          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `_ModuleLock.release`       | `<frozen importlib._bootstrap>`          |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                           | Location                                 |
| ------: | ----: | ----------: | ------: | ---------------------------------- | ---------------------------------------- |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `ParserGenerator.make_label`       | `pgen.py`                                |
|  -33.3% |    -3 | 1.0% → 0.3% |   9 → 6 | `LineGenerator.visit_simple_stmt`  | `linegen.py`                             |
|  -50.0% |    -3 | 0.6% → 0.2% |   6 → 3 | `_stringify_ast_with_new_parent`   | `parsing.py`                             |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `Base.remove`                      | `pytree.py`                              |
|  -42.9% |    -3 | 0.8% → 0.2% |   7 → 4 | `wrap_in_parentheses`              | `nodes.py`                               |
|  -40.0% |    -2 | 0.5% → 0.2% |   5 → 3 | `line_to_string`                   | `lines.py`                               |
|  -13.3% |    -2 | 1.6% → 0.7% | 15 → 13 | `_stringify_ast`                   | `parsing.py`                             |
|  -66.7% |    -2 | 0.3% → 0.1% |   3 → 1 | `_parse`                           | `_parser.py`                             |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `Driver._partially_consume_prefix` | `driver.py`                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `format_file_in_place`             | `__init__.py`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                         | `mode.py`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `namedtuple`                       | `__init__.py`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_path_stat`                       | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Command.get_params`               | `core.py`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `list_comments`                    | `comments.py`                            |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `type_repr`                        | `pytree.py`                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `lines_with_leading_tabs_expanded` | `strings.py`                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Node.prefix`                      | `pytree.py`                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `LineGenerator.visit_factor`       | `linegen.py`                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `BracketTracker.get_open_lsqb`     | `brackets.py`                            |

##### Ours

|  Change | Delta |           % | Samples | Function                           | Location      |
| ------: | ----: | ----------: | ------: | ---------------------------------- | ------------- |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `ParserGenerator.make_label`       | `pgen.py`     |
|  -33.3% |    -3 | 1.0% → 0.3% |   9 → 6 | `LineGenerator.visit_simple_stmt`  | `linegen.py`  |
|  -50.0% |    -3 | 0.6% → 0.2% |   6 → 3 | `_stringify_ast_with_new_parent`   | `parsing.py`  |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `Base.remove`                      | `pytree.py`   |
|  -42.9% |    -3 | 0.8% → 0.2% |   7 → 4 | `wrap_in_parentheses`              | `nodes.py`    |
|  -40.0% |    -2 | 0.5% → 0.2% |   5 → 3 | `line_to_string`                   | `lines.py`    |
|  -13.3% |    -2 | 1.6% → 0.7% | 15 → 13 | `_stringify_ast`                   | `parsing.py`  |
|  -66.7% |    -2 | 0.3% → 0.1% |   3 → 1 | `_parse`                           | `_parser.py`  |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `Driver._partially_consume_prefix` | `driver.py`   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `format_file_in_place`             | `__init__.py` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                         | `mode.py`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `namedtuple`                       | `__init__.py` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Command.get_params`               | `core.py`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `list_comments`                    | `comments.py` |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `type_repr`                        | `pytree.py`   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `lines_with_leading_tabs_expanded` | `strings.py`  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Node.prefix`                      | `pytree.py`   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `LineGenerator.visit_factor`       | `linegen.py`  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `BracketTracker.get_open_lsqb`     | `brackets.py` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Line.is_import`                   | `lines.py`    |

##### Standard library

|  Change | Delta |           % | Samples | Function     | Location                                 |
| ------: | ----: | ----------: | ------: | ------------ | ---------------------------------------- |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_path_stat` | `<frozen importlib._bootstrap_external>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
|     new |   +45 | 0.0% → 19.1% |  0 → 45 | `parse.py:316` |
| +760.0% |   +38 | 4.1% → 18.3% |  5 → 43 | `parse.py:299` |
| removed |   -24 | 19.8% → 0.0% |  24 → 0 | `parse.py:328` |
|  -94.4% |   -17 | 14.9% → 0.4% |  18 → 1 | `parse.py:311` |
| +233.3% |   +14 |  5.0% → 8.5% |  6 → 20 | `parse.py:293` |

##### `Visitor.visit` (`nodes.py`)

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
|     new |   +30 | 0.0% → 46.2% |  0 → 30 | `nodes.py:170` |
|     new |   +13 | 0.0% → 20.0% |  0 → 13 | `nodes.py:174` |
|     new |   +12 | 0.0% → 18.5% |  0 → 12 | `nodes.py:172` |
| removed |    -7 | 43.8% → 0.0% |   7 → 0 | `nodes.py:183` |
| removed |    -6 | 37.5% → 0.0% |   6 → 0 | `nodes.py:185` |

##### `BracketTracker.mark` (`brackets.py`)

|   Change | Delta |             % | Samples | Location          |
| -------: | ----: | ------------: | ------: | ----------------- |
| +3300.0% |   +33 | 25.0% → 69.4% |  1 → 34 | `brackets.py:112` |
|  +300.0% |    +3 |  25.0% → 8.2% |   1 → 4 | `brackets.py:114` |
|      new |    +3 |   0.0% → 6.1% |   0 → 3 | `brackets.py:88`  |
|      new |    +2 |   0.0% → 4.1% |   0 → 2 | `brackets.py:122` |
|  +100.0% |    +1 |  25.0% → 4.1% |   1 → 2 | `brackets.py:126` |

##### `get_features_used` (`__init__.py`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| +105.6% |   +19 | 20.5% → 28.9% | 18 → 37 | `__init__.py:1335 → 1314` |
| +366.7% |   +11 |  3.4% → 10.9% |  3 → 14 | `__init__.py:1386 → 1365` |
|  -30.0% |    -6 | 22.7% → 10.9% | 20 → 14 | `__init__.py:1424 → 1403` |
| +100.0% |    +6 |   6.8% → 9.4% |  6 → 12 | `__init__.py:1436 → 1415` |
|     new |    +5 |   0.0% → 3.9% |   0 → 5 | `__init__.py:1393`        |

##### `Base.__new__` (`pytree.py`)

| Change | Delta |             % | Samples | Location       |
| -----: | ----: | ------------: | ------: | -------------- |
|    new |   +31 | 0.0% → 100.0% |  0 → 31 | `pytree.py:73` |

##### `whitespace` (`nodes.py`)

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
|     new |   +23 | 0.0% → 71.9% |  0 → 23 | `nodes.py:215` |
|     new |    +3 |  0.0% → 9.4% |   0 → 3 | `nodes.py:282` |
|     new |    +2 |  0.0% → 6.3% |   0 → 2 | `nodes.py:360` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `nodes.py:194` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `nodes.py:223` |

##### `Driver.parse_tokens` (`driver.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
| +100.0% |    +9 | 25.7% → 29.5% |  9 → 18 | `driver.py:128` |
|     new |    +4 |   0.0% → 6.6% |   0 → 4 | `driver.py:172` |
| +300.0% |    +3 |   2.9% → 6.6% |   1 → 4 | `driver.py:151` |
|     new |    +3 |   0.0% → 4.9% |   0 → 3 | `driver.py:167` |
|   +8.3% |    +2 | 68.6% → 42.6% | 24 → 26 | `driver.py:162` |

##### `Base.changed` (`pytree.py`)

| Change | Delta |            % | Samples | Location        |
| -----: | ----: | -----------: | ------: | --------------- |
|    new |   +15 | 0.0% → 75.0% |  0 → 15 | `pytree.py:165` |
|    new |    +3 | 0.0% → 15.0% |   0 → 3 | `pytree.py:164` |
|    new |    +2 | 0.0% → 10.0% |   0 → 2 | `pytree.py:161` |

##### `transform_line` (`linegen.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
|     new |    +8 |  0.0% → 33.3% |   0 → 8 | `linegen.py:716` |
| +250.0% |    +5 | 40.0% → 29.2% |   2 → 7 | `linegen.py:714` |
|     new |    +3 |  0.0% → 12.5% |   0 → 3 | `linegen.py:722` |
|  +50.0% |    +1 | 40.0% → 12.5% |   2 → 3 | `linegen.py:679` |
|     new |    +1 |   0.0% → 4.2% |   0 → 1 | `linegen.py:650` |

##### `__create_fn__.<locals>.__init__` (`<string>`)

| Change | Delta |            % | Samples | Location     |
| -----: | ----: | -----------: | ------: | ------------ |
|    new |   +11 | 0.0% → 55.0% |  0 → 11 | `<string>:4` |
|    new |    +7 | 0.0% → 35.0% |   0 → 7 | `<string>:7` |
|    new |    +1 |  0.0% → 5.0% |   0 → 1 | `<string>:8` |
|    new |    +1 |  0.0% → 5.0% |   0 → 1 | `<string>:9` |

##### `generate_tokens` (`tokenize.py`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |   -10 |  25.6% → 0.0% |  10 → 0 | `tokenize.py:624`       |
|  +35.7% |    +5 | 35.9% → 33.3% | 14 → 19 | `tokenize.py:875 → 864` |
|     new |    +5 |   0.0% → 8.8% |   0 → 5 | `tokenize.py:613`       |
| +300.0% |    +3 |   2.6% → 7.0% |   1 → 4 | `tokenize.py:634 → 623` |
| +200.0% |    +2 |   2.6% → 5.3% |   1 → 3 | `tokenize.py:704 → 693` |

##### `convert` (`pytree.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
|     new |   +14 |  0.0% → 66.7% |  0 → 14 | `pytree.py:492` |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `pytree.py:501` |
|     new |    +3 |  0.0% → 14.3% |   0 → 3 | `pytree.py:490` |
|     new |    +2 |   0.0% → 9.5% |   0 → 2 | `pytree.py:484` |
|     new |    +1 |   0.0% → 4.8% |   0 → 1 | `pytree.py:475` |

##### `Parser.push` (`parse.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| +266.7% |    +8 | 25.0% → 39.3% |  3 → 11 | `parse.py:394 → 382` |
| +166.7% |    +5 | 25.0% → 28.6% |   3 → 8 | `parse.py:396 → 384` |
| +200.0% |    +2 |  8.3% → 10.7% |   1 → 3 | `parse.py:393 → 381` |
| +100.0% |    +1 |   8.3% → 7.1% |   1 → 2 | `parse.py:386 → 374` |

##### `Node.update_sibling_maps` (`pytree.py`)

| Change | Delta |            % | Samples | Location        |
| -----: | ----: | -----------: | ------: | --------------- |
|    new |   +10 | 0.0% → 66.7% |  0 → 10 | `pytree.py:366` |
|    new |    +3 | 0.0% → 20.0% |   0 → 3 | `pytree.py:365` |
|    new |    +2 | 0.0% → 13.3% |   0 → 2 | `pytree.py:368` |

##### `Line.__str__` (`lines.py`)

| Change | Delta |            % | Samples | Location       |
| -----: | ----: | -----------: | ------: | -------------- |
|    new |    +5 | 0.0% → 33.3% |   0 → 5 | `lines.py:489` |
|    new |    +4 | 0.0% → 26.7% |   0 → 4 | `lines.py:487` |
|    new |    +3 | 0.0% → 20.0% |   0 → 3 | `lines.py:493` |
|    new |    +2 | 0.0% → 13.3% |   0 → 2 | `lines.py:481` |
|    new |    +1 |  0.0% → 6.7% |   0 → 1 | `lines.py:490` |

##### `_format_str_once` (`__init__.py`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
|     new |    +4 |  0.0% → 23.5% |   0 → 4 | `__init__.py:1250`        |
|     new |    +2 |  0.0% → 11.8% |   0 → 2 | `__init__.py:1249`        |
|     new |    +2 |  0.0% → 11.8% |   0 → 2 | `__init__.py:1258`        |
|     new |    +2 |  0.0% → 11.8% |   0 → 2 | `__init__.py:1266`        |
| +100.0% |    +1 | 16.7% → 11.8% |   1 → 2 | `__init__.py:1269 → 1248` |

##### `Parser.pop` (`parse.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| +166.7% |    +5 | 15.8% → 27.6% |   3 → 8 | `parse.py:408 → 396` |
|     new |    +3 |  0.0% → 10.3% |   0 → 3 | `parse.py:393`       |
|     new |    +2 |   0.0% → 6.9% |   0 → 2 | `parse.py:395`       |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `parse.py:400`       |
|  +25.0% |    +1 | 21.1% → 17.2% |   4 → 5 | `parse.py:406 → 394` |

##### `parse` (`ast.py`)

| Change | Delta |      % | Samples | Location    |
| -----: | ----: | -----: | ------: | ----------- |
| +23.1% |    +9 | 100.0% | 39 → 48 | `ast.py:46` |

##### `hug_power_op` (`trans.py`)

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
|     new |    +8 | 0.0% → 72.7% |   0 → 8 | `trans.py:88`  |
|     new |    +3 | 0.0% → 27.3% |   0 → 3 | `trans.py:81`  |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `trans.py:151` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `trans.py:152` |

##### `Leaf.__init__` (`pytree.py`)

| Change | Delta |            % | Samples | Location        |
| -----: | ----: | -----------: | ------: | --------------- |
|    new |    +4 | 0.0% → 44.4% |   0 → 4 | `pytree.py:406` |
|    new |    +3 | 0.0% → 33.3% |   0 → 3 | `pytree.py:413` |
|    new |    +2 | 0.0% → 22.2% |   0 → 2 | `pytree.py:408` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

| Change | Delta |      % | Samples | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------------- |
| +75.0% |    +6 | 100.0% |  8 → 14 | `<frozen importlib._bootstrap>:549` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |      % | Samples | Location                                     |
| -----: | ----: | -----: | ------: | -------------------------------------------- |
| +37.5% |    +3 | 100.0% |  8 → 11 | `<frozen importlib._bootstrap_external>:500` |

##### `_write_atomic` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |            % | Samples | Location                                     |
| -----: | ----: | -----------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `<frozen importlib._bootstrap_external>:211` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `<frozen importlib._bootstrap_external>:213` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<frozen importlib._bootstrap_external>:743` |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

| Change | Delta |             % | Samples | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<frozen importlib._bootstrap>:1222` |

##### `_new_module` (`<frozen importlib._bootstrap>`)

| Change | Delta |             % | Samples | Location                           |
| -----: | ----: | ------------: | ------: | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<frozen importlib._bootstrap>:49` |

##### `_ModuleLock.release` (`<frozen importlib._bootstrap>`)

| Change | Delta |             % | Samples | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<frozen importlib._bootstrap>:374` |

##### `ParserGenerator.make_label` (`pgen.py`)

|  Change | Delta |             % | Samples | Location      |
| ------: | ----: | ------------: | ------: | ------------- |
| removed |    -3 |  75.0% → 0.0% |   3 → 0 | `pgen.py:111` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `pgen.py:110` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `pgen.py:100` |

##### `LineGenerator.visit_simple_stmt` (`linegen.py`)

| Change | Delta |      % | Samples | Location         |
| -----: | ----: | -----: | ------: | ---------------- |
| -33.3% |    -3 | 100.0% |   9 → 6 | `linegen.py:317` |

##### `_stringify_ast_with_new_parent` (`parsing.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `parsing.py:170` |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `parsing.py:178` |

##### `Base.remove` (`pytree.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
| removed |    -3 |  75.0% → 0.0% |   3 → 0 | `pytree.py:188` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `pytree.py:189` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `pytree.py:177` |

##### `wrap_in_parentheses` (`nodes.py`)

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
| removed |    -3 | 42.9% → 0.0% |   3 → 0 | `nodes.py:947` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `nodes.py:948` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `nodes.py:949` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `nodes.py:950` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `nodes.py:938` |

##### `line_to_string` (`lines.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `lines.py:1078` |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `lines.py:1067` |

##### `_stringify_ast` (`parsing.py`)

|  Change | Delta |            % | Samples | Location         |
| ------: | ----: | -----------: | ------: | ---------------- |
| removed |    -8 | 53.3% → 0.0% |   8 → 0 | `parsing.py:214` |
|     new |    +8 | 0.0% → 61.5% |   0 → 8 | `parsing.py:222` |
| removed |    -6 | 40.0% → 0.0% |   6 → 0 | `parsing.py:217` |
|     new |    +3 | 0.0% → 23.1% |   0 → 3 | `parsing.py:225` |
| removed |    -1 |  6.7% → 0.0% |   1 → 0 | `parsing.py:185` |

##### `_parse` (`_parser.py`)

|  Change | Delta |            % | Samples | Location         |
| ------: | ----: | -----------: | ------: | ---------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `_parser.py:537` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `_parser.py:865` |

##### `Driver._partially_consume_prefix` (`driver.py`)

|  Change | Delta |            % | Samples | Location        |
| ------: | ----: | -----------: | ------: | --------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `driver.py:211` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `driver.py:213` |

##### `format_file_in_place` (`__init__.py`)

|  Change | Delta |             % | Samples | Location          |
| ------: | ----: | ------------: | ------: | ----------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `__init__.py:957` |

##### `<module>` (`mode.py`)

|  Change | Delta |             % | Samples | Location     |
| ------: | ----: | ------------: | ------: | ------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `mode.py:13` |

##### `namedtuple` (`__init__.py`)

|  Change | Delta |             % | Samples | Location          |
| ------: | ----: | ------------: | ------: | ----------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `__init__.py:447` |

##### `_path_stat` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<frozen importlib._bootstrap_external>:152` |

##### `Command.get_params` (`core.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `core.py:1113` |

##### `list_comments` (`comments.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `comments.py:92` |

##### `type_repr` (`pytree.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `pytree.py:42` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `pytree.py:50` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `pytree.py:29` |

##### `lines_with_leading_tabs_expanded` (`strings.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `strings.py:54` |

##### `Node.prefix` (`pytree.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `pytree.py:332` |

##### `LineGenerator.visit_factor` (`linegen.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `linegen.py:379` |

##### `BracketTracker.get_open_lsqb` (`brackets.py`)

|  Change | Delta |             % | Samples | Location          |
| ------: | ----: | ------------: | ------: | ----------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `brackets.py:215` |

##### `Line.is_import` (`lines.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `lines.py:137` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |     Samples | Function                         | Location         |
| ------: | ----: | ------------: | ----------: | -------------------------------- | ---------------- |
|  +97.7% |  +912 |        100.0% | 933 → 1,845 | `_run_code`                      | `<frozen runpy>` |
|  +97.7% |  +912 |        100.0% | 933 → 1,845 | `run_module`                     | `<frozen runpy>` |
|  +97.7% |  +912 |        100.0% | 933 → 1,845 | `_run_module_as_main`            | `<frozen runpy>` |
|  +99.9% |  +890 | 95.5% → 96.5% | 891 → 1,781 | `format_file_contents`           | `__init__.py`    |
|  +99.8% |  +890 | 95.6% → 96.6% | 892 → 1,782 | `reformat_one`                   | `__init__.py`    |
|  +99.8% |  +890 | 95.6% → 96.6% | 892 → 1,782 | `main`                           | `__init__.py`    |
|  +99.8% |  +890 | 95.6% → 96.6% | 892 → 1,782 | `pass_context.<locals>.new_func` | `decorators.py`  |
|  +99.8% |  +890 | 95.6% → 96.6% | 892 → 1,782 | `Context.invoke`                 | `core.py`        |
|  +99.8% |  +890 | 95.6% → 96.6% | 892 → 1,782 | `Command.invoke`                 | `core.py`        |
|  +99.7% |  +889 | 95.6% → 96.5% | 892 → 1,781 | `format_file_in_place`           | `__init__.py`    |
|  +99.6% |  +889 | 95.7% → 96.6% | 893 → 1,782 | `Command.main`                   | `core.py`        |
|  +99.6% |  +889 | 95.7% → 96.6% | 893 → 1,782 | `Command.__call__`               | `core.py`        |
|  +99.6% |  +889 | 95.7% → 96.6% | 893 → 1,782 | `patched_main`                   | `__init__.py`    |
|  +99.6% |  +889 | 95.7% → 96.6% | 893 → 1,782 | `<module>`                       | `__main__.py`    |
|  +99.6% |  +889 | 95.7% → 96.6% | 893 → 1,782 | `_run_module_code`               | `<frozen runpy>` |
| +107.7% |  +871 | 86.7% → 91.1% | 809 → 1,680 | `_format_str_once`               | `__init__.py`    |
| +160.1% |  +682 | 45.7% → 60.1% | 426 → 1,108 | `format_str`                     | `__init__.py`    |
|  +95.9% |  +446 | 49.8% → 49.4% |   465 → 911 | `Driver.parse_string`            | `driver.py`      |
|  +95.9% |  +446 | 49.8% → 49.4% |   465 → 911 | `lib2to3_parse`                  | `parsing.py`     |
|  +95.0% |  +440 | 49.6% → 48.9% |   463 → 903 | `Driver.parse_tokens`            | `driver.py`      |

##### Ours

|  Change | Delta |             % |     Samples | Function                         | Location        |
| ------: | ----: | ------------: | ----------: | -------------------------------- | --------------- |
|  +99.9% |  +890 | 95.5% → 96.5% | 891 → 1,781 | `format_file_contents`           | `__init__.py`   |
|  +99.8% |  +890 | 95.6% → 96.6% | 892 → 1,782 | `reformat_one`                   | `__init__.py`   |
|  +99.8% |  +890 | 95.6% → 96.6% | 892 → 1,782 | `main`                           | `__init__.py`   |
|  +99.8% |  +890 | 95.6% → 96.6% | 892 → 1,782 | `pass_context.<locals>.new_func` | `decorators.py` |
|  +99.8% |  +890 | 95.6% → 96.6% | 892 → 1,782 | `Context.invoke`                 | `core.py`       |
|  +99.8% |  +890 | 95.6% → 96.6% | 892 → 1,782 | `Command.invoke`                 | `core.py`       |
|  +99.7% |  +889 | 95.6% → 96.5% | 892 → 1,781 | `format_file_in_place`           | `__init__.py`   |
|  +99.6% |  +889 | 95.7% → 96.6% | 893 → 1,782 | `Command.main`                   | `core.py`       |
|  +99.6% |  +889 | 95.7% → 96.6% | 893 → 1,782 | `Command.__call__`               | `core.py`       |
|  +99.6% |  +889 | 95.7% → 96.6% | 893 → 1,782 | `patched_main`                   | `__init__.py`   |
|  +99.6% |  +889 | 95.7% → 96.6% | 893 → 1,782 | `<module>`                       | `__main__.py`   |
| +107.7% |  +871 | 86.7% → 91.1% | 809 → 1,680 | `_format_str_once`               | `__init__.py`   |
| +160.1% |  +682 | 45.7% → 60.1% | 426 → 1,108 | `format_str`                     | `__init__.py`   |
|  +95.9% |  +446 | 49.8% → 49.4% |   465 → 911 | `Driver.parse_string`            | `driver.py`     |
|  +95.9% |  +446 | 49.8% → 49.4% |   465 → 911 | `lib2to3_parse`                  | `parsing.py`    |
|  +95.0% |  +440 | 49.6% → 48.9% |   463 → 903 | `Driver.parse_tokens`            | `driver.py`     |
| +103.3% |  +377 | 39.1% → 40.2% |   365 → 742 | `Parser._addtoken`               | `parse.py`      |
|  +94.2% |  +373 | 42.4% → 41.7% |   396 → 769 | `Parser.addtoken`                | `parse.py`      |
| +220.0% |  +297 | 14.5% → 23.4% |   135 → 432 | `Visitor.visit_default`          | `nodes.py`      |
| +220.0% |  +297 | 14.5% → 23.4% |   135 → 432 | `LineGenerator.visit_default`    | `linegen.py`    |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +91.3% |  +264 | 31.0% → 30.0% | 289 → 553 | `(garbage collector)` | `<unknown>` |

##### Standard library

| Change | Delta |             % |     Samples | Function                             | Location                                 |
| -----: | ----: | ------------: | ----------: | ------------------------------------ | ---------------------------------------- |
| +97.7% |  +912 |        100.0% | 933 → 1,845 | `_run_code`                          | `<frozen runpy>`                         |
| +97.7% |  +912 |        100.0% | 933 → 1,845 | `run_module`                         | `<frozen runpy>`                         |
| +97.7% |  +912 |        100.0% | 933 → 1,845 | `_run_module_as_main`                | `<frozen runpy>`                         |
| +99.6% |  +889 | 95.7% → 96.6% | 893 → 1,782 | `_run_module_code`                   | `<frozen runpy>`                         |
| +57.5% |   +23 |   4.3% → 3.4% |     40 → 63 | `_call_with_frames_removed`          | `<frozen importlib._bootstrap>`          |
| +57.5% |   +23 |   4.3% → 3.4% |     40 → 63 | `_LoaderBasics.exec_module`          | `<frozen importlib._bootstrap_external>` |
| +57.5% |   +23 |   4.3% → 3.4% |     40 → 63 | `_load_unlocked`                     | `<frozen importlib._bootstrap>`          |
| +57.5% |   +23 |   4.3% → 3.4% |     40 → 63 | `_find_and_load_unlocked`            | `<frozen importlib._bootstrap>`          |
| +57.5% |   +23 |   4.3% → 3.4% |     40 → 63 | `_find_and_load`                     | `<frozen importlib._bootstrap>`          |
| +57.5% |   +23 |   4.3% → 3.4% |     40 → 63 | `_get_module_details`                | `<frozen runpy>`                         |
| +33.3% |    +7 |   2.3% → 1.5% |     21 → 28 | `SourceLoader.get_code`              | `<frozen importlib._bootstrap_external>` |
|    new |    +4 |   0.0% → 0.2% |       0 → 4 | `_get_module_lock`                   | `<frozen importlib._bootstrap>`          |
|    new |    +4 |   0.0% → 0.2% |       0 → 4 | `_HierarchicalLockManager.__enter__` | `<frozen importlib._bootstrap>`          |
| +42.9% |    +3 |   0.8% → 0.5% |      7 → 10 | `SourceLoader.source_to_code`        | `<frozen importlib._bootstrap_external>` |
|    new |    +3 |   0.0% → 0.2% |       0 → 3 | `module_from_spec`                   | `<frozen importlib._bootstrap>`          |
| +20.0% |    +2 |   1.1% → 0.7% |     10 → 12 | `_compile_bytecode`                  | `<frozen importlib._bootstrap_external>` |
|    new |    +2 |   0.0% → 0.1% |       0 → 2 | `ExtensionFileLoader.create_module`  | `<frozen importlib._bootstrap_external>` |
|    new |    +2 |   0.0% → 0.1% |       0 → 2 | `_write_atomic`                      | `<frozen importlib._bootstrap_external>` |
|    new |    +2 |   0.0% → 0.1% |       0 → 2 | `SourceFileLoader.set_data`          | `<frozen importlib._bootstrap_external>` |
|    new |    +2 |   0.0% → 0.1% |       0 → 2 | `SourceFileLoader._cache_bytecode`   | `<frozen importlib._bootstrap_external>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |           % | Samples | Function                         | Location                                 |
| ------: | ----: | ----------: | ------: | -------------------------------- | ---------------------------------------- |
|  -30.0% |    -6 | 2.1% → 0.8% | 20 → 14 | `_stringify_ast_with_new_parent` | `parsing.py`                             |
|  -23.8% |    -5 | 2.3% → 0.9% | 21 → 16 | `_stringify_ast`                 | `parsing.py`                             |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `ParserGenerator.make_label`     | `pgen.py`                                |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `ParserGenerator.make_grammar`   | `pgen.py`                                |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `Base.remove`                    | `pytree.py`                              |
|  -66.7% |    -2 | 0.3% → 0.1% |   3 → 1 | `ParserGenerator.make_first`     | `pgen.py`                                |
|  -66.7% |    -2 | 0.3% → 0.1% |   3 → 1 | `_parse`                         | `_parser.py`                             |
|  -66.7% |    -2 | 0.3% → 0.1% |   3 → 1 | `_parse_sub`                     | `_parser.py`                             |
|  -66.7% |    -2 | 0.3% → 0.1% |   3 → 1 | `parse`                          | `_parser.py`                             |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `<module>`                       | `tokenize.py`                            |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `<module>`                       | `types.py`                               |
|  -14.3% |    -1 | 0.8% → 0.3% |   7 → 6 | `_handle_fromlist`               | `<frozen importlib._bootstrap>`          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                       | `formatting.py`                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                       | `_base.py`                               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                       | `base.py`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                       | `mode.py`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `namedtuple`                     | `__init__.py`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_make_nmtuple`                  | `typing.py`                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `NamedTupleMeta.__new__`         | `typing.py`                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_path_stat`                     | `<frozen importlib._bootstrap_external>` |

##### Ours

|  Change | Delta |           % | Samples | Function                         | Location        |
| ------: | ----: | ----------: | ------: | -------------------------------- | --------------- |
|  -30.0% |    -6 | 2.1% → 0.8% | 20 → 14 | `_stringify_ast_with_new_parent` | `parsing.py`    |
|  -23.8% |    -5 | 2.3% → 0.9% | 21 → 16 | `_stringify_ast`                 | `parsing.py`    |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `ParserGenerator.make_label`     | `pgen.py`       |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `ParserGenerator.make_grammar`   | `pgen.py`       |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `Base.remove`                    | `pytree.py`     |
|  -66.7% |    -2 | 0.3% → 0.1% |   3 → 1 | `ParserGenerator.make_first`     | `pgen.py`       |
|  -66.7% |    -2 | 0.3% → 0.1% |   3 → 1 | `_parse`                         | `_parser.py`    |
|  -66.7% |    -2 | 0.3% → 0.1% |   3 → 1 | `_parse_sub`                     | `_parser.py`    |
|  -66.7% |    -2 | 0.3% → 0.1% |   3 → 1 | `parse`                          | `_parser.py`    |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `<module>`                       | `tokenize.py`   |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `<module>`                       | `types.py`      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                       | `formatting.py` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                       | `_base.py`      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                       | `base.py`       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                       | `mode.py`       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `namedtuple`                     | `__init__.py`   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_make_nmtuple`                  | `typing.py`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `NamedTupleMeta.__new__`         | `typing.py`     |
|  -33.3% |    -1 | 0.3% → 0.1% |   3 → 2 | `compile`                        | `_compiler.py`  |
|  -33.3% |    -1 | 0.3% → 0.1% |   3 → 2 | `_compile`                       | `__init__.py`   |

##### Standard library

|  Change | Delta |           % | Samples | Function               | Location                                 |
| ------: | ----: | ----------: | ------: | ---------------------- | ---------------------------------------- |
|  -14.3% |    -1 | 0.8% → 0.3% |   7 → 6 | `_handle_fromlist`     | `<frozen importlib._bootstrap>`          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_path_stat`           | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_path_is_mode_type`   | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_path_isfile`         | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `PathFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

# Sampling profile diff

Collected 935 samples → 1,156 samples (+221 samples, +23.6%).

| Category          | Change | Delta |             % |   Samples |
| ----------------- | -----: | ----: | ------------: | --------: |
| Ours              | +11.5% |   +73 | 67.9% → 61.2% | 635 → 708 |
| Garbage collector | +51.4% |  +148 | 30.8% → 37.7% | 288 → 436 |
| Standard library  |   0.0% |     0 |   1.3% → 1.0% |        12 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                              | Location                        |
| ------: | ----: | ------------: | --------: | ------------------------------------- | ------------------------------- |
|  +51.4% |  +148 | 30.8% → 37.7% | 288 → 436 | `(garbage collector)`                 | `<unknown>`                     |
|  +29.2% |   +40 | 14.7% → 15.3% | 137 → 177 | `Parser._addtoken`                    | `parse.py`                      |
|  +14.8% |   +13 |   9.4% → 8.7% |  88 → 101 | `get_features_used`                   | `__init__.py`                   |
|  +29.7% |   +11 |   4.0% → 4.2% |   37 → 48 | `parse`                               | `ast.py`                        |
|  +10.3% |    +6 |   6.2% → 5.5% |   58 → 64 | `Driver.parse_tokens`                 | `driver.py`                     |
| +100.0% |    +6 |   0.6% → 1.0% |    6 → 12 | `_format_str_once`                    | `__init__.py`                   |
| +400.0% |    +4 |   0.1% → 0.4% |     1 → 5 | `hug_power_op`                        | `trans.py`                      |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `is_fstring_start.<locals>.<genexpr>` | `tokenize.py`                   |
| +150.0% |    +3 |   0.2% → 0.4% |     2 → 5 | `assert_stable`                       | `__init__.py`                   |
| +150.0% |    +3 |   0.2% → 0.4% |     2 → 5 | `convert`                             | `pytree.py`                     |
|     new |    +3 |   0.0% → 0.3% |     0 → 3 | `__create_fn__.<locals>.__init__`     | `<string>`                      |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `Line.__str__`                        | `lines.py`                      |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `whitespace`                          | `nodes.py`                      |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `EmptyLineTracker._maybe_empty_lines` | `lines.py`                      |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `_hugging_power_ops_line_to_string`   | `linegen.py`                    |
|  +22.2% |    +2 |          1.0% |    9 → 11 | `assert_equivalent`                   | `__init__.py`                   |
|   +5.0% |    +2 |   4.3% → 3.6% |   40 → 42 | `generate_tokens`                     | `tokenize.py`                   |
|  +33.3% |    +2 |   0.6% → 0.7% |     6 → 8 | `LinesBlock.all_lines`                | `lines.py`                      |
|  +40.0% |    +2 |   0.5% → 0.6% |     5 → 7 | `Parser.push`                         | `parse.py`                      |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `_call_with_frames_removed`           | `<frozen importlib._bootstrap>` |

##### Ours

|  Change | Delta |             % |   Samples | Function                              | Location      |
| ------: | ----: | ------------: | --------: | ------------------------------------- | ------------- |
|  +29.2% |   +40 | 14.7% → 15.3% | 137 → 177 | `Parser._addtoken`                    | `parse.py`    |
|  +14.8% |   +13 |   9.4% → 8.7% |  88 → 101 | `get_features_used`                   | `__init__.py` |
|  +29.7% |   +11 |   4.0% → 4.2% |   37 → 48 | `parse`                               | `ast.py`      |
|  +10.3% |    +6 |   6.2% → 5.5% |   58 → 64 | `Driver.parse_tokens`                 | `driver.py`   |
| +100.0% |    +6 |   0.6% → 1.0% |    6 → 12 | `_format_str_once`                    | `__init__.py` |
| +400.0% |    +4 |   0.1% → 0.4% |     1 → 5 | `hug_power_op`                        | `trans.py`    |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `is_fstring_start.<locals>.<genexpr>` | `tokenize.py` |
| +150.0% |    +3 |   0.2% → 0.4% |     2 → 5 | `assert_stable`                       | `__init__.py` |
| +150.0% |    +3 |   0.2% → 0.4% |     2 → 5 | `convert`                             | `pytree.py`   |
|     new |    +3 |   0.0% → 0.3% |     0 → 3 | `__create_fn__.<locals>.__init__`     | `<string>`    |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `Line.__str__`                        | `lines.py`    |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `whitespace`                          | `nodes.py`    |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `EmptyLineTracker._maybe_empty_lines` | `lines.py`    |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `_hugging_power_ops_line_to_string`   | `linegen.py`  |
|  +22.2% |    +2 |          1.0% |    9 → 11 | `assert_equivalent`                   | `__init__.py` |
|   +5.0% |    +2 |   4.3% → 3.6% |   40 → 42 | `generate_tokens`                     | `tokenize.py` |
|  +33.3% |    +2 |   0.6% → 0.7% |     6 → 8 | `LinesBlock.all_lines`                | `lines.py`    |
|  +40.0% |    +2 |   0.5% → 0.6% |     5 → 7 | `Parser.push`                         | `parse.py`    |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `Node.update_sibling_maps`            | `pytree.py`   |
| +200.0% |    +2 |   0.1% → 0.3% |     1 → 3 | `LineGenerator.visit_STRING`          | `linegen.py`  |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +51.4% |  +148 | 30.8% → 37.7% | 288 → 436 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                    | Location                                 |
| ------: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `FileFinder.find_spec`      | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `FileLoader.get_data`       | `<frozen importlib._bootstrap_external>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                             | Location                                 |
| ------: | ----: | ----------: | ------: | ------------------------------------ | ---------------------------------------- |
|  -26.5% |    -9 | 3.6% → 2.2% | 34 → 25 | `Visitor.visit`                      | `nodes.py`                               |
|  -40.9% |    -9 | 2.4% → 1.1% | 22 → 13 | `Line.append`                        | `lines.py`                               |
|  -60.0% |    -6 | 1.1% → 0.3% |  10 → 4 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`                               |
|  -31.6% |    -6 | 2.0% → 1.1% | 19 → 13 | `Parser.pop`                         | `parse.py`                               |
| removed |    -5 | 0.5% → 0.0% |   5 → 0 | `wrap_in_parentheses`                | `nodes.py`                               |
|  -66.7% |    -4 | 0.6% → 0.2% |   6 → 2 | `_FuncBuilder.add_fns_to_class`      | `dataclasses.py`                         |
|  -20.0% |    -3 | 1.6% → 1.0% | 15 → 12 | `convert_one_fmt_off_pair`           | `comments.py`                            |
|  -23.1% |    -3 | 1.4% → 0.9% | 13 → 10 | `LineGenerator.visit_default`        | `linegen.py`                             |
|  -50.0% |    -3 | 0.6% → 0.3% |   6 → 3 | `line_to_string`                     | `lines.py`                               |
|  -21.4% |    -3 | 1.5% → 1.0% | 14 → 11 | `_stringify_ast`                     | `parsing.py`                             |
|  -33.3% |    -3 | 1.0% → 0.5% |   9 → 6 | `_compile_bytecode`                  | `<frozen importlib._bootstrap_external>` |
| removed |    -3 | 0.3% → 0.0% |   3 → 0 | `Base.remove`                        | `pytree.py`                              |
|  -33.3% |    -2 | 0.6% → 0.3% |   6 → 4 | `transform_line`                     | `linegen.py`                             |
|  -15.4% |    -2 | 1.4% → 1.0% | 13 → 11 | `Parser.shift`                       | `parse.py`                               |
|  -10.0% |    -1 | 1.1% → 0.8% |  10 → 9 | `Parser.addtoken`                    | `parse.py`                               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `lib2to3_parse`                      | `parsing.py`                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Node.__init__`                      | `pytree.py`                              |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `LineGenerator.visit_stmt`           | `linegen.py`                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `LineGenerator.visit_funcdef`        | `linegen.py`                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `StringTransformer.__init__`         | `trans.py`                               |

##### Ours

|  Change | Delta |           % | Samples | Function                             | Location         |
| ------: | ----: | ----------: | ------: | ------------------------------------ | ---------------- |
|  -26.5% |    -9 | 3.6% → 2.2% | 34 → 25 | `Visitor.visit`                      | `nodes.py`       |
|  -40.9% |    -9 | 2.4% → 1.1% | 22 → 13 | `Line.append`                        | `lines.py`       |
|  -60.0% |    -6 | 1.1% → 0.3% |  10 → 4 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`       |
|  -31.6% |    -6 | 2.0% → 1.1% | 19 → 13 | `Parser.pop`                         | `parse.py`       |
| removed |    -5 | 0.5% → 0.0% |   5 → 0 | `wrap_in_parentheses`                | `nodes.py`       |
|  -66.7% |    -4 | 0.6% → 0.2% |   6 → 2 | `_FuncBuilder.add_fns_to_class`      | `dataclasses.py` |
|  -20.0% |    -3 | 1.6% → 1.0% | 15 → 12 | `convert_one_fmt_off_pair`           | `comments.py`    |
|  -23.1% |    -3 | 1.4% → 0.9% | 13 → 10 | `LineGenerator.visit_default`        | `linegen.py`     |
|  -50.0% |    -3 | 0.6% → 0.3% |   6 → 3 | `line_to_string`                     | `lines.py`       |
|  -21.4% |    -3 | 1.5% → 1.0% | 14 → 11 | `_stringify_ast`                     | `parsing.py`     |
| removed |    -3 | 0.3% → 0.0% |   3 → 0 | `Base.remove`                        | `pytree.py`      |
|  -33.3% |    -2 | 0.6% → 0.3% |   6 → 4 | `transform_line`                     | `linegen.py`     |
|  -15.4% |    -2 | 1.4% → 1.0% | 13 → 11 | `Parser.shift`                       | `parse.py`       |
|  -10.0% |    -1 | 1.1% → 0.8% |  10 → 9 | `Parser.addtoken`                    | `parse.py`       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `lib2to3_parse`                      | `parsing.py`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Node.__init__`                      | `pytree.py`      |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `LineGenerator.visit_stmt`           | `linegen.py`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `LineGenerator.visit_funcdef`        | `linegen.py`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `StringTransformer.__init__`         | `trans.py`       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                           | `grammar.py`     |

##### Standard library

|  Change | Delta |           % | Samples | Function                    | Location                                 |
| ------: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
|  -33.3% |    -3 | 1.0% → 0.5% |   9 → 6 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `FileFinder._get_spec`      | `<frozen importlib._bootstrap_external>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `Parser._addtoken` (`parse.py`)

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
| +520.0% |   +26 | 3.6% → 17.5% |  5 → 31 | `parse.py:299` |
| removed |   -22 | 16.1% → 0.0% |  22 → 0 | `parse.py:311` |
| +633.3% |   +19 | 2.2% → 12.4% |  3 → 22 | `parse.py:293` |
| removed |   -16 | 11.7% → 0.0% |  16 → 0 | `parse.py:305` |
|     new |   +13 |  0.0% → 7.3% |  0 → 13 | `parse.py:281` |

##### `get_features_used` (`__init__.py`)

| Change | Delta |             % | Samples | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- |
| +85.0% |   +17 | 22.7% → 36.6% | 20 → 37 | `__init__.py:1335 → 1314` |
| -71.4% |    -5 |   8.0% → 2.0% |   7 → 2 | `__init__.py:1418 → 1397` |
| -45.5% |    -5 |  12.5% → 5.9% |  11 → 6 | `__init__.py:1436 → 1415` |
| +50.0% |    +5 | 11.4% → 14.9% | 10 → 15 | `__init__.py:1440 → 1419` |
| -80.0% |    -4 |   5.7% → 1.0% |   5 → 1 | `__init__.py:1336`        |

##### `parse` (`ast.py`)

| Change | Delta |      % | Samples | Location    |
| -----: | ----: | -----: | ------: | ----------- |
| +29.7% |   +11 | 100.0% | 37 → 48 | `ast.py:46` |

##### `Driver.parse_tokens` (`driver.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
|  +19.4% |    +7 | 62.1% → 67.2% | 36 → 43 | `driver.py:162` |
| removed |    -2 |   3.4% → 0.0% |   2 → 0 | `driver.py:140` |
|     new |    +2 |   0.0% → 3.1% |   0 → 2 | `driver.py:161` |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `driver.py:137` |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `driver.py:138` |

##### `_format_str_once` (`__init__.py`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| +166.7% |    +5 | 50.0% → 66.7% |   3 → 8 | `__init__.py:1268 → 1247` |
| +100.0% |    +1 |         16.7% |   1 → 2 | `__init__.py:1269 → 1248` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `__init__.py:1287`        |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `__init__.py:1253`        |

##### `hug_power_op` (`trans.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `trans.py:139` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `trans.py:81`  |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `trans.py:129` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `trans.py:136` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `trans.py:137` |

##### `is_fstring_start.<locals>.<genexpr>` (`tokenize.py`)

| Change | Delta |             % | Samples | Location          |
| -----: | ----: | ------------: | ------: | ----------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `tokenize.py:460` |

##### `assert_stable` (`__init__.py`)

|  Change | Delta |             % | Samples | Location           |
| ------: | ----: | ------------: | ------: | ------------------ |
|     new |    +5 | 0.0% → 100.0% |   0 → 5 | `__init__.py:1557` |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `__init__.py:1571` |

##### `convert` (`pytree.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
|     new |    +3 |  0.0% → 60.0% |   0 → 3 | `pytree.py:492` |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `pytree.py:501` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `pytree.py:483` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `pytree.py:490` |

##### `__create_fn__.<locals>.__init__` (`<string>`)

| Change | Delta |            % | Samples | Location     |
| -----: | ----: | -----------: | ------: | ------------ |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `<string>:7` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `<string>:5` |

##### `Line.__str__` (`lines.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
|     new |    +3 |  0.0% → 75.0% |   0 → 3 | `lines.py:490` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `lines.py:500` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `lines.py:489` |

##### `whitespace` (`nodes.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `nodes.py:390` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `nodes.py:195` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `nodes.py:212` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `nodes.py:214` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `nodes.py:276` |

##### `EmptyLineTracker._maybe_empty_lines` (`lines.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
|     new |    +2 |  0.0% → 50.0% |   0 → 2 | `lines.py:668` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `lines.py:680` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `lines.py:627` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `lines.py:674` |

##### `_hugging_power_ops_line_to_string` (`linegen.py`)

| Change | Delta |             % | Samples | Location         |
| -----: | ----: | ------------: | ------: | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `linegen.py:596` |

##### `assert_equivalent` (`__init__.py`)

|  Change | Delta |            % | Samples | Location           |
| ------: | ----: | -----------: | ------: | ------------------ |
|     new |    +8 | 0.0% → 72.7% |   0 → 8 | `__init__.py:1532` |
| removed |    -5 | 55.6% → 0.0% |   5 → 0 | `__init__.py:1546` |
| removed |    -3 | 33.3% → 0.0% |   3 → 0 | `__init__.py:1547` |
|     new |    +3 | 0.0% → 27.3% |   0 → 3 | `__init__.py:1533` |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `__init__.py:1548` |

##### `generate_tokens` (`tokenize.py`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
|  +45.5% |    +5 | 27.5% → 38.1% | 11 → 16 | `tokenize.py:875 → 864` |
|  -28.6% |    -4 | 35.0% → 23.8% | 14 → 10 | `tokenize.py:624 → 613` |
| +200.0% |    +2 |   2.5% → 7.1% |   1 → 3 | `tokenize.py:704 → 693` |
| removed |    -2 |   5.0% → 0.0% |   2 → 0 | `tokenize.py:911`       |
| removed |    -2 |   5.0% → 0.0% |   2 → 0 | `tokenize.py:973`       |

##### `LinesBlock.all_lines` (`lines.py`)

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
|     new |    +7 | 0.0% → 87.5% |   0 → 7 | `lines.py:528` |
| removed |    -3 | 50.0% → 0.0% |   3 → 0 | `lines.py:539` |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `lines.py:540` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `lines.py:541` |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `lines.py:529` |

##### `Parser.push` (`parse.py`)

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
|     new |    +5 | 0.0% → 71.4% |   0 → 5 | `parse.py:384` |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `parse.py:395` |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `parse.py:396` |
|     new |    +2 | 0.0% → 28.6% |   0 → 2 | `parse.py:382` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `parse.py:394` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|  Change | Delta |      % | Samples | Location                            |
| ------: | ----: | -----: | ------: | ----------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `<frozen importlib._bootstrap>:549` |

##### `Node.update_sibling_maps` (`pytree.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `pytree.py:375` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `pytree.py:360` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `pytree.py:365` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `pytree.py:366` |

##### `LineGenerator.visit_STRING` (`linegen.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `linegen.py:503` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `linegen.py:417` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `linegen.py:430` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `linegen.py:444` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |            % | Samples | Location                                      |
| -----: | ----: | -----------: | ------: | --------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `<frozen importlib._bootstrap_external>:1379` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `<frozen importlib._bootstrap_external>:1394` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<frozen importlib._bootstrap_external>:923` |

##### `Visitor.visit` (`nodes.py`)

|   Change | Delta |            % | Samples | Location       |
| -------: | ----: | -----------: | ------: | -------------- |
|  removed |   -20 | 58.8% → 0.0% |  20 → 0 | `nodes.py:185` |
| +1300.0% |   +13 | 2.9% → 56.0% |  1 → 14 | `nodes.py:174` |
|  removed |    -9 | 26.5% → 0.0% |   9 → 0 | `nodes.py:183` |
|      new |    +7 | 0.0% → 28.0% |   0 → 7 | `nodes.py:172` |
|  removed |    -4 | 11.8% → 0.0% |   4 → 0 | `nodes.py:163` |

##### `Line.append` (`lines.py`)

|  Change | Delta |            % | Samples | Location      |
| ------: | ----: | -----------: | ------: | ------------- |
| removed |   -10 | 45.5% → 0.0% |  10 → 0 | `lines.py:89` |
| +800.0% |    +8 | 4.5% → 69.2% |   1 → 9 | `lines.py:84` |
| removed |    -5 | 22.7% → 0.0% |   5 → 0 | `lines.py:95` |
| removed |    -3 | 13.6% → 0.0% |   3 → 0 | `lines.py:76` |
| removed |    -1 |  4.5% → 0.0% |   1 → 0 | `lines.py:79` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
| removed |    -9 |  90.0% → 0.0% |   9 → 0 | `lines.py:571` |
|     new |    +4 | 0.0% → 100.0% |   0 → 4 | `lines.py:560` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `lines.py:567` |

##### `Parser.pop` (`parse.py`)

| Change | Delta |             % | Samples | Location             |
| -----: | ----: | ------------: | ------: | -------------------- |
| -37.5% |    -3 | 42.1% → 38.5% |   8 → 5 | `parse.py:404 → 392` |
| -66.7% |    -2 |  15.8% → 7.7% |   3 → 1 | `parse.py:408 → 396` |
| -33.3% |    -1 | 15.8% → 15.4% |   3 → 2 | `parse.py:406 → 394` |
| -50.0% |    -1 |  10.5% → 7.7% |   2 → 1 | `parse.py:407 → 395` |
|    new |    +1 |   0.0% → 7.7% |   0 → 1 | `parse.py:386`       |

##### `wrap_in_parentheses` (`nodes.py`)

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `nodes.py:947` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `nodes.py:944` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `nodes.py:946` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `nodes.py:948` |

##### `_FuncBuilder.add_fns_to_class` (`dataclasses.py`)

| Change | Delta |      % | Samples | Location             |
| -----: | ----: | -----: | ------: | -------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `dataclasses.py:499` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|  Change | Delta |             % | Samples | Location          |
| ------: | ----: | ------------: | ------: | ----------------- |
|  -42.9% |    -3 | 46.7% → 33.3% |   7 → 4 | `comments.py:186` |
|  +33.3% |    +2 | 40.0% → 66.7% |   6 → 8 | `comments.py:184` |
| removed |    -2 |  13.3% → 0.0% |   2 → 0 | `comments.py:188` |

##### `LineGenerator.visit_default` (`linegen.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
|  -36.4% |    -4 | 84.6% → 70.0% |  11 → 7 | `linegen.py:158` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `linegen.py:137` |
| +100.0% |    +1 |  7.7% → 20.0% |   1 → 2 | `linegen.py:157` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `linegen.py:134` |

##### `line_to_string` (`lines.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `lines.py:1078` |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `lines.py:1067` |

##### `_stringify_ast` (`parsing.py`)

|  Change | Delta |             % | Samples | Location               |
| ------: | ----: | ------------: | ------: | ---------------------- |
|  -71.4% |    -5 | 50.0% → 18.2% |   7 → 2 | `parsing.py:217 → 225` |
|  +50.0% |    +2 | 28.6% → 54.5% |   4 → 6 | `parsing.py:214 → 222` |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `parsing.py:185`       |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `parsing.py:187`       |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `parsing.py:184`       |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |      % | Samples | Location                                     |
| -----: | ----: | -----: | ------: | -------------------------------------------- |
| -33.3% |    -3 | 100.0% |   9 → 6 | `<frozen importlib._bootstrap_external>:500` |

##### `Base.remove` (`pytree.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `pytree.py:188` |

##### `transform_line` (`linegen.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
|  -50.0% |    -2 | 66.7% → 50.0% |   4 → 2 | `linegen.py:714` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `linegen.py:631` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `linegen.py:679` |

##### `Parser.shift` (`parse.py`)

|  Change | Delta |            % | Samples | Location             |
| ------: | ----: | -----------: | ------: | -------------------- |
| removed |    -9 | 69.2% → 0.0% |   9 → 0 | `parse.py:381`       |
| +700.0% |    +7 | 7.7% → 72.7% |   1 → 8 | `parse.py:382 → 369` |
|  -50.0% |    -1 | 15.4% → 9.1% |   2 → 1 | `parse.py:384 → 371` |
|     new |    +1 |  0.0% → 9.1% |   0 → 1 | `parse.py:363`       |

##### `Parser.addtoken` (`parse.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
| removed |   -10 | 100.0% → 0.0% |  10 → 0 | `parse.py:252` |
|     new |    +9 | 0.0% → 100.0% |   0 → 9 | `parse.py:240` |

##### `lib2to3_parse` (`parsing.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `parsing.py:65` |

##### `Node.__init__` (`pytree.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `pytree.py:271` |

##### `LineGenerator.visit_stmt` (`linegen.py`)

| Change | Delta |      % | Samples | Location         |
| -----: | ----: | -----: | ------: | ---------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `linegen.py:220` |

##### `LineGenerator.visit_funcdef` (`linegen.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `linegen.py:276` |

##### `StringTransformer.__init__` (`trans.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `trans.py:283` |

##### `<module>` (`grammar.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `grammar.py:227` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<frozen importlib._bootstrap_external>:743` |

##### `FileFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<frozen importlib._bootstrap_external>:1349` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |     Samples | Function                         | Location         |
| -----: | ----: | ------------: | ----------: | -------------------------------- | ---------------- |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `format_file_contents`           | `__init__.py`    |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `format_file_in_place`           | `__init__.py`    |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `reformat_one`                   | `__init__.py`    |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `main`                           | `__init__.py`    |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `pass_context.<locals>.new_func` | `decorators.py`  |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `Context.invoke`                 | `core.py`        |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `Command.invoke`                 | `core.py`        |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `Command.main`                   | `core.py`        |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `Command.__call__`               | `core.py`        |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `patched_main`                   | `__init__.py`    |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `<module>`                       | `__main__.py`    |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `_run_module_code`               | `<frozen runpy>` |
| +23.6% |  +221 |        100.0% | 935 → 1,156 | `_run_code`                      | `<frozen runpy>` |
| +23.6% |  +221 |        100.0% | 935 → 1,156 | `run_module`                     | `<frozen runpy>` |
| +23.6% |  +221 |        100.0% | 935 → 1,156 | `_run_module_as_main`            | `<frozen runpy>` |
| +24.9% |  +207 | 88.9% → 89.8% | 831 → 1,038 | `_format_str_once`               | `__init__.py`    |
| +33.0% |  +163 | 52.8% → 56.8% |   494 → 657 | `Driver.parse_tokens`            | `driver.py`      |
| +33.0% |  +163 | 52.8% → 56.8% |   494 → 657 | `Driver.parse_string`            | `driver.py`      |
| +32.7% |  +162 | 52.9% → 56.8% |   495 → 657 | `lib2to3_parse`                  | `parsing.py`     |
| +51.4% |  +148 | 30.8% → 37.7% |   288 → 436 | `(garbage collector)`            | `<unknown>`      |

##### Ours

| Change | Delta |             % |     Samples | Function                          | Location        |
| -----: | ----: | ------------: | ----------: | --------------------------------- | --------------- |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `format_file_contents`            | `__init__.py`   |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `format_file_in_place`            | `__init__.py`   |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `reformat_one`                    | `__init__.py`   |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `main`                            | `__init__.py`   |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `pass_context.<locals>.new_func`  | `decorators.py` |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `Context.invoke`                  | `core.py`       |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `Command.invoke`                  | `core.py`       |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `Command.main`                    | `core.py`       |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `Command.__call__`                | `core.py`       |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `patched_main`                    | `__init__.py`   |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `<module>`                        | `__main__.py`   |
| +24.9% |  +207 | 88.9% → 89.8% | 831 → 1,038 | `_format_str_once`                | `__init__.py`   |
| +33.0% |  +163 | 52.8% → 56.8% |   494 → 657 | `Driver.parse_tokens`             | `driver.py`     |
| +33.0% |  +163 | 52.8% → 56.8% |   494 → 657 | `Driver.parse_string`             | `driver.py`     |
| +32.7% |  +162 | 52.9% → 56.8% |   495 → 657 | `lib2to3_parse`                   | `parsing.py`    |
| +38.1% |  +145 | 40.7% → 45.5% |   381 → 526 | `Parser._addtoken`                | `parse.py`      |
| +34.6% |  +138 | 42.7% → 46.5% |   399 → 537 | `Parser.addtoken`                 | `parse.py`      |
| +27.9% |  +122 | 46.8% → 48.4% |   438 → 560 | `format_str`                      | `__init__.py`   |
| +21.7% |  +102 | 50.4% → 49.6% |   471 → 573 | `check_stability_and_equivalence` | `__init__.py`   |
| +22.3% |   +89 | 42.8% → 42.3% |   400 → 489 | `assert_stable`                   | `__init__.py`   |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +51.4% |  +148 | 30.8% → 37.7% | 288 → 436 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |             % |     Samples | Function                            | Location                                 |
| ------: | ----: | ------------: | ----------: | ----------------------------------- | ---------------------------------------- |
|  +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `_run_module_code`                  | `<frozen runpy>`                         |
|  +23.6% |  +221 |        100.0% | 935 → 1,156 | `_run_code`                         | `<frozen runpy>`                         |
|  +23.6% |  +221 |        100.0% | 935 → 1,156 | `run_module`                        | `<frozen runpy>`                         |
|  +23.6% |  +221 |        100.0% | 935 → 1,156 | `_run_module_as_main`               | `<frozen runpy>`                         |
|     new |    +2 |   0.0% → 0.2% |       0 → 2 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |
|     new |    +2 |   0.0% → 0.2% |       0 → 2 | `module_from_spec`                  | `<frozen importlib._bootstrap>`          |
| +100.0% |    +1 |   0.1% → 0.2% |       1 → 2 | `FileFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
| +100.0% |    +1 |   0.1% → 0.2% |       1 → 2 | `PathFinder._get_spec`              | `<frozen importlib._bootstrap_external>` |
| +100.0% |    +1 |   0.1% → 0.2% |       1 → 2 | `PathFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
| +100.0% |    +1 |   0.1% → 0.2% |       1 → 2 | `_find_spec`                        | `<frozen importlib._bootstrap>`          |
|     new |    +1 |   0.0% → 0.1% |       0 → 1 | `ABCMeta.__new__`                   | `<frozen abc>`                           |
|     new |    +1 |   0.0% → 0.1% |       0 → 1 | `FileLoader.get_data`               | `<frozen importlib._bootstrap_external>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                             | Location                                 |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ---------------------------------------- |
|  -12.0% |   -15 |  13.4% → 9.5% | 125 → 110 | `LineGenerator.visit_stmt`           | `linegen.py`                             |
|  -10.7% |   -13 |  13.0% → 9.4% | 122 → 109 | `LineGenerator.visit_funcdef`        | `linegen.py`                             |
|   -8.9% |   -11 |  13.2% → 9.7% | 123 → 112 | `LineGenerator.visit_suite`          | `linegen.py`                             |
|   -7.1% |    -9 | 13.5% → 10.1% | 126 → 117 | `Visitor.visit`                      | `nodes.py`                               |
|   -7.1% |    -9 | 13.5% → 10.1% | 126 → 117 | `Visitor.visit_default`              | `nodes.py`                               |
|   -7.1% |    -9 | 13.5% → 10.1% | 126 → 117 | `LineGenerator.visit_default`        | `linegen.py`                             |
|  -77.8% |    -7 |   1.0% → 0.2% |     9 → 2 | `wrap_in_parentheses`                | `nodes.py`                               |
|  -30.0% |    -6 |   2.1% → 1.2% |   20 → 14 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`                               |
|  -33.3% |    -6 |   1.9% → 1.0% |   18 → 12 | `normalize_invisible_parens`         | `linegen.py`                             |
|  -17.2% |    -5 |   3.1% → 2.1% |   29 → 24 | `Parser.pop`                         | `parse.py`                               |
|  -71.4% |    -5 |   0.7% → 0.2% |     7 → 2 | `<module>`                           | `nodes.py`                               |
|  -71.4% |    -5 |   0.7% → 0.2% |     7 → 2 | `<module>`                           | `comments.py`                            |
|  -66.7% |    -4 |   0.6% → 0.2% |     6 → 2 | `_FuncBuilder.add_fns_to_class`      | `dataclasses.py`                         |
|  -66.7% |    -4 |   0.6% → 0.2% |     6 → 2 | `_process_class`                     | `dataclasses.py`                         |
|  -66.7% |    -4 |   0.6% → 0.2% |     6 → 2 | `dataclass.<locals>.wrap`            | `dataclasses.py`                         |
| removed |    -4 |   0.4% → 0.0% |     4 → 0 | `Base.remove`                        | `pytree.py`                              |
|  -18.8% |    -3 |   1.7% → 1.1% |   16 → 13 | `convert_one_fmt_off_pair`           | `comments.py`                            |
|  -18.8% |    -3 |   1.7% → 1.1% |   16 → 13 | `normalize_fmt_off`                  | `comments.py`                            |
|  -11.5% |    -3 |   2.8% → 2.0% |   26 → 23 | `_LoaderBasics.exec_module`          | `<frozen importlib._bootstrap_external>` |
|  -11.5% |    -3 |   2.8% → 2.0% |   26 → 23 | `_load_unlocked`                     | `<frozen importlib._bootstrap>`          |

##### Ours

|  Change | Delta |             % |   Samples | Function                             | Location         |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ---------------- |
|  -12.0% |   -15 |  13.4% → 9.5% | 125 → 110 | `LineGenerator.visit_stmt`           | `linegen.py`     |
|  -10.7% |   -13 |  13.0% → 9.4% | 122 → 109 | `LineGenerator.visit_funcdef`        | `linegen.py`     |
|   -8.9% |   -11 |  13.2% → 9.7% | 123 → 112 | `LineGenerator.visit_suite`          | `linegen.py`     |
|   -7.1% |    -9 | 13.5% → 10.1% | 126 → 117 | `Visitor.visit`                      | `nodes.py`       |
|   -7.1% |    -9 | 13.5% → 10.1% | 126 → 117 | `Visitor.visit_default`              | `nodes.py`       |
|   -7.1% |    -9 | 13.5% → 10.1% | 126 → 117 | `LineGenerator.visit_default`        | `linegen.py`     |
|  -77.8% |    -7 |   1.0% → 0.2% |     9 → 2 | `wrap_in_parentheses`                | `nodes.py`       |
|  -30.0% |    -6 |   2.1% → 1.2% |   20 → 14 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`       |
|  -33.3% |    -6 |   1.9% → 1.0% |   18 → 12 | `normalize_invisible_parens`         | `linegen.py`     |
|  -17.2% |    -5 |   3.1% → 2.1% |   29 → 24 | `Parser.pop`                         | `parse.py`       |
|  -71.4% |    -5 |   0.7% → 0.2% |     7 → 2 | `<module>`                           | `nodes.py`       |
|  -71.4% |    -5 |   0.7% → 0.2% |     7 → 2 | `<module>`                           | `comments.py`    |
|  -66.7% |    -4 |   0.6% → 0.2% |     6 → 2 | `_FuncBuilder.add_fns_to_class`      | `dataclasses.py` |
|  -66.7% |    -4 |   0.6% → 0.2% |     6 → 2 | `_process_class`                     | `dataclasses.py` |
|  -66.7% |    -4 |   0.6% → 0.2% |     6 → 2 | `dataclass.<locals>.wrap`            | `dataclasses.py` |
| removed |    -4 |   0.4% → 0.0% |     4 → 0 | `Base.remove`                        | `pytree.py`      |
|  -18.8% |    -3 |   1.7% → 1.1% |   16 → 13 | `convert_one_fmt_off_pair`           | `comments.py`    |
|  -18.8% |    -3 |   1.7% → 1.1% |   16 → 13 | `normalize_fmt_off`                  | `comments.py`    |
|  -11.5% |    -3 |   2.8% → 2.0% |   26 → 23 | `<module>`                           | `__init__.py`    |
|  -11.1% |    -2 |   1.9% → 1.4% |   18 → 16 | `_stringify_ast`                     | `parsing.py`     |

##### Standard library

|  Change | Delta |           % | Samples | Function                    | Location                                 |
| ------: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
|  -11.5% |    -3 | 2.8% → 2.0% | 26 → 23 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
|  -11.5% |    -3 | 2.8% → 2.0% | 26 → 23 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|  -11.5% |    -3 | 2.8% → 2.0% | 26 → 23 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
|  -11.5% |    -3 | 2.8% → 2.0% | 26 → 23 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
|  -11.5% |    -3 | 2.8% → 2.0% | 26 → 23 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  -11.5% |    -3 | 2.8% → 2.0% | 26 → 23 | `_get_module_details`       | `<frozen runpy>`                         |
|  -22.2% |    -2 | 1.0% → 0.6% |   9 → 7 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
|  -28.6% |    -2 | 0.7% → 0.4% |   7 → 5 | `_handle_fromlist`          | `<frozen importlib._bootstrap>`          |
|  -11.1% |    -1 | 1.0% → 0.7% |   9 → 8 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `FileFinder._get_spec`      | `<frozen importlib._bootstrap_external>` |

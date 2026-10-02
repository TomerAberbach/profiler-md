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

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

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

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

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

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
|  +42.9% |   +12 | 20.4% → 22.6% | 28 → 40 | `parse.py:328 → 316` |
| +333.3% |   +10 |   2.2% → 7.3% |  3 → 13 | `parse.py:293 → 281` |
| +111.1% |   +10 |  6.6% → 10.7% |  9 → 19 | `parse.py:298 → 286` |
|  +40.9% |    +9 | 16.1% → 17.5% | 22 → 31 | `parse.py:311 → 299` |
|  +37.5% |    +6 | 11.7% → 12.4% | 16 → 22 | `parse.py:305 → 293` |

##### `get_features_used` (`__init__.py`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
|  +85.0% |   +17 | 22.7% → 36.6% | 20 → 37 | `__init__.py:1335 → 1314` |
|  -71.4% |    -5 |   8.0% → 2.0% |   7 → 2 | `__init__.py:1418 → 1397` |
|  -45.5% |    -5 |  12.5% → 5.9% |  11 → 6 | `__init__.py:1436 → 1415` |
|  +50.0% |    +5 | 11.4% → 14.9% | 10 → 15 | `__init__.py:1440 → 1419` |
| +400.0% |    +4 |   1.1% → 5.0% |   1 → 5 | `__init__.py:1345 → 1324` |

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

|  Change | Delta |      % | Samples | Location                  |
| ------: | ----: | -----: | ------: | ------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `__init__.py:1571 → 1557` |

##### `convert` (`pytree.py`)

| Change | Delta |              % | Samples | Location              |
| -----: | ----: | -------------: | ------: | --------------------- |
| +50.0% |    +1 | 100.0% → 60.0% |   2 → 3 | `pytree.py:501 → 492` |
|    new |    +1 |   0.0% → 20.0% |   0 → 1 | `pytree.py:483`       |
|    new |    +1 |   0.0% → 20.0% |   0 → 1 | `pytree.py:490`       |

##### `__create_fn__.<locals>.__init__` (`<string>`)

| Change | Delta |            % | Samples | Location     |
| -----: | ----: | -----------: | ------: | ------------ |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `<string>:7` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `<string>:5` |

##### `Line.__str__` (`lines.py`)

| Change | Delta |            % | Samples | Location       |
| -----: | ----: | -----------: | ------: | -------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `lines.py:490` |

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

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
|  +60.0% |    +3 | 55.6% → 72.7% |   5 → 8 | `__init__.py:1546 → 1532` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `__init__.py:1548`        |

##### `generate_tokens` (`tokenize.py`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
|  +45.5% |    +5 | 27.5% → 38.1% | 11 → 16 | `tokenize.py:875 → 864` |
|  -28.6% |    -4 | 35.0% → 23.8% | 14 → 10 | `tokenize.py:624 → 613` |
| +200.0% |    +2 |   2.5% → 7.1% |   1 → 3 | `tokenize.py:704 → 693` |
| removed |    -2 |   5.0% → 0.0% |   2 → 0 | `tokenize.py:911`       |
| removed |    -2 |   5.0% → 0.0% |   2 → 0 | `tokenize.py:973`       |

##### `LinesBlock.all_lines` (`lines.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| +133.3% |    +4 | 50.0% → 87.5% |   3 → 7 | `lines.py:539 → 528` |
|  -50.0% |    -1 | 33.3% → 12.5% |   2 → 1 | `lines.py:540 → 529` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `lines.py:541`       |

##### `Parser.push` (`parse.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| +150.0% |    +3 | 40.0% → 71.4% |   2 → 5 | `parse.py:396 → 384` |
| removed |    -2 |  40.0% → 0.0% |   2 → 0 | `parse.py:395`       |
| +100.0% |    +1 | 20.0% → 28.6% |   1 → 2 | `parse.py:394 → 382` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|  Change | Delta |      % | Samples | Location                            |
| ------: | ----: | -----: | ------: | ----------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `<frozen importlib._bootstrap>:549` |

##### `Node.update_sibling_maps` (`pytree.py`)

| Change | Delta |            % | Samples | Location        |
| -----: | ----: | -----------: | ------: | --------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `pytree.py:360` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `pytree.py:365` |

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

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
|  -30.0% |    -6 | 58.8% → 56.0% | 20 → 14 | `nodes.py:185 → 174` |
|  -22.2% |    -2 | 26.5% → 28.0% |   9 → 7 | `nodes.py:183 → 172` |
|  -25.0% |    -1 | 11.8% → 12.0% |   4 → 3 | `nodes.py:163 → 152` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `nodes.py:174`       |
|     new |    +1 |   0.0% → 4.0% |   0 → 1 | `nodes.py:170`       |

##### `Line.append` (`lines.py`)

|  Change | Delta |             % | Samples | Location           |
| ------: | ----: | ------------: | ------: | ------------------ |
|  -90.0% |    -9 |  45.5% → 7.7% |  10 → 1 | `lines.py:89 → 78` |
|  +80.0% |    +4 | 22.7% → 69.2% |   5 → 9 | `lines.py:95 → 84` |
|  -66.7% |    -2 |  13.6% → 7.7% |   3 → 1 | `lines.py:76 → 65` |
| removed |    -1 |   4.5% → 0.0% |   1 → 0 | `lines.py:79`      |
| removed |    -1 |   4.5% → 0.0% |   1 → 0 | `lines.py:84`      |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|  Change | Delta |              % | Samples | Location             |
| ------: | ----: | -------------: | ------: | -------------------- |
|  -55.6% |    -5 | 90.0% → 100.0% |   9 → 4 | `lines.py:571 → 560` |
| removed |    -1 |   10.0% → 0.0% |   1 → 0 | `lines.py:567`       |

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

| Change | Delta |      % | Samples | Location               |
| -----: | ----: | -----: | ------: | ---------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `lines.py:1078 → 1067` |

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

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| removed |    -2 |  15.4% → 0.0% |   2 → 0 | `parse.py:384`       |
|  -11.1% |    -1 | 69.2% → 72.7% |   9 → 8 | `parse.py:381 → 369` |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `parse.py:363`       |

##### `Parser.addtoken` (`parse.py`)

| Change | Delta |      % | Samples | Location             |
| -----: | ----: | -----: | ------: | -------------------- |
| -10.0% |    -1 | 100.0% |  10 → 9 | `parse.py:252 → 240` |

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

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|  Change | Delta |             % |   Samples | Caller                       | Location    |
| ------: | ----: | ------------: | --------: | ---------------------------- | ----------- |
|  +57.8% |  +107 | 64.2% → 67.0% | 185 → 292 | `Parser._addtoken`           | `parse.py`  |
|  +72.2% |   +26 | 12.5% → 14.2% |   36 → 62 | `Line.clone`                 | `lines.py`  |
| +250.0% |    +5 |   0.7% → 1.6% |     2 → 7 | `Driver.parse_tokens`        | `driver.py` |
| +100.0% |    +4 |   1.4% → 1.8% |     4 → 8 | `Node.__init__`              | `pytree.py` |
| +133.3% |    +4 |   1.0% → 1.6% |     3 → 7 | `StringTransformer.__init__` | `trans.py`  |

##### `Parser._addtoken` (`parse.py`)

|  Change | Delta |             % |   Samples | Caller                             | Location    |
| ------: | ----: | ------------: | --------: | ---------------------------------- | ----------- |
|  +27.3% |   +36 | 96.4% → 94.9% | 132 → 168 | `Parser.addtoken`                  | `parse.py`  |
| +200.0% |    +4 |   1.5% → 3.4% |     2 → 6 | `TokenProxy.__next__`              | `driver.py` |
|  -50.0% |    -1 |   1.5% → 0.6% |     2 → 1 | `Driver.parse_tokens`              | `driver.py` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `cast`                             | `typing.py` |
|     new |    +1 |   0.0% → 0.6% |     0 → 1 | `Driver._partially_consume_prefix` | `driver.py` |

##### `get_features_used` (`__init__.py`)

| Change | Delta |      % |  Samples | Caller                   | Location      |
| -----: | ----: | -----: | -------: | ------------------------ | ------------- |
| +14.8% |   +13 | 100.0% | 88 → 101 | `detect_target_versions` | `__init__.py` |

##### `parse` (`ast.py`)

| Change | Delta |      % | Samples | Caller                  | Location     |
| -----: | ----: | -----: | ------: | ----------------------- | ------------ |
| +29.7% |   +11 | 100.0% | 37 → 48 | `_parse_single_version` | `parsing.py` |

##### `Driver.parse_tokens` (`driver.py`)

| Change | Delta |      % | Samples | Caller                | Location    |
| -----: | ----: | -----: | ------: | --------------------- | ----------- |
| +10.3% |    +6 | 100.0% | 58 → 64 | `Driver.parse_string` | `driver.py` |

##### `_format_str_once` (`__init__.py`)

|  Change | Delta |             % | Samples | Caller          | Location      |
| ------: | ----: | ------------: | ------: | --------------- | ------------- |
| +400.0% |    +8 | 33.3% → 83.3% |  2 → 10 | `format_str`    | `__init__.py` |
|  -50.0% |    -2 | 66.7% → 16.7% |   4 → 2 | `assert_stable` | `__init__.py` |

##### `hug_power_op` (`trans.py`)

|  Change | Delta |              % | Samples | Caller                              | Location     |
| ------: | ----: | -------------: | ------: | ----------------------------------- | ------------ |
|     new |    +3 |   0.0% → 60.0% |   0 → 3 | `run_transformer`                   | `linegen.py` |
| +100.0% |    +1 | 100.0% → 40.0% |   1 → 2 | `_hugging_power_ops_line_to_string` | `linegen.py` |

##### `is_fstring_start.<locals>.<genexpr>` (`tokenize.py`)

| Change | Delta |             % | Samples | Caller             | Location      |
| -----: | ----: | ------------: | ------: | ------------------ | ------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `is_fstring_start` | `tokenize.py` |

##### `assert_stable` (`__init__.py`)

|  Change | Delta |      % | Samples | Caller                            | Location      |
| ------: | ----: | -----: | ------: | --------------------------------- | ------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `check_stability_and_equivalence` | `__init__.py` |

##### `convert` (`pytree.py`)

| Change | Delta |              % | Samples | Caller             | Location   |
| -----: | ----: | -------------: | ------: | ------------------ | ---------- |
|    new |    +2 |   0.0% → 40.0% |   0 → 2 | `Parser.shift`     | `parse.py` |
| -50.0% |    -1 | 100.0% → 20.0% |   2 → 1 | `Parser.pop`       | `parse.py` |
|    new |    +1 |   0.0% → 20.0% |   0 → 1 | `Parser._addtoken` | `parse.py` |
|    new |    +1 |   0.0% → 20.0% |   0 → 1 | `Parser.push`      | `parse.py` |

##### `__create_fn__.<locals>.__init__` (`<string>`)

| Change | Delta |            % | Samples | Caller                 | Location     |
| -----: | ----: | -----------: | ------: | ---------------------- | ------------ |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `__init__`             | `__init__`   |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `LinesBlock.all_lines` | `lines.py`   |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `transform_line`       | `linegen.py` |

##### `Line.__str__` (`lines.py`)

|  Change | Delta |              % | Samples | Caller             | Location      |
| ------: | ----: | -------------: | ------: | ------------------ | ------------- |
| +100.0% |    +1 | 100.0% → 50.0% |   1 → 2 | `line_to_string`   | `lines.py`    |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `_format_str_once` | `__init__.py` |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `run_transformer`  | `linegen.py`  |

##### `whitespace` (`nodes.py`)

|  Change | Delta |      % | Samples | Caller        | Location   |
| ------: | ----: | -----: | ------: | ------------- | ---------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `Line.append` | `lines.py` |

##### `EmptyLineTracker._maybe_empty_lines` (`lines.py`)

|  Change | Delta |      % | Samples | Caller                               | Location   |
| ------: | ----: | -----: | ------: | ------------------------------------ | ---------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `EmptyLineTracker.maybe_empty_lines` | `lines.py` |

##### `_hugging_power_ops_line_to_string` (`linegen.py`)

| Change | Delta |             % | Samples | Caller           | Location     |
| -----: | ----: | ------------: | ------: | ---------------- | ------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `transform_line` | `linegen.py` |

##### `assert_equivalent` (`__init__.py`)

| Change | Delta |      % | Samples | Caller                            | Location      |
| -----: | ----: | -----: | ------: | --------------------------------- | ------------- |
| +22.2% |    +2 | 100.0% |  9 → 11 | `check_stability_and_equivalence` | `__init__.py` |

##### `generate_tokens` (`tokenize.py`)

|  Change | Delta |             % | Samples | Caller                             | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
|  +29.2% |    +7 | 60.0% → 73.8% | 24 → 31 | `TokenProxy.__next__`              | `driver.py` |
|  -23.1% |    -3 | 32.5% → 23.8% | 13 → 10 | `Parser.addtoken`                  | `parse.py`  |
|  -50.0% |    -1 |   5.0% → 2.4% |   2 → 1 | `Driver.parse_tokens`              | `driver.py` |
| removed |    -1 |   2.5% → 0.0% |   1 → 0 | `Driver._partially_consume_prefix` | `driver.py` |

##### `LinesBlock.all_lines` (`lines.py`)

| Change | Delta |      % | Samples | Caller             | Location      |
| -----: | ----: | -----: | ------: | ------------------ | ------------- |
| +33.3% |    +2 | 100.0% |   6 → 8 | `_format_str_once` | `__init__.py` |

##### `Parser.push` (`parse.py`)

| Change | Delta |      % | Samples | Caller             | Location   |
| -----: | ----: | -----: | ------: | ------------------ | ---------- |
| +40.0% |    +2 | 100.0% |   5 → 7 | `Parser._addtoken` | `parse.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

| Change | Delta |            % | Samples | Caller                              | Location                                 |
| -----: | ----: | -----------: | ------: | ----------------------------------- | ---------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |

##### `Node.update_sibling_maps` (`pytree.py`)

|  Change | Delta |      % | Samples | Caller              | Location    |
| ------: | ----: | -----: | ------: | ------------------- | ----------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `Base.prev_sibling` | `pytree.py` |

##### `LineGenerator.visit_STRING` (`linegen.py`)

|  Change | Delta |      % | Samples | Caller          | Location   |
| ------: | ----: | -----: | ------: | --------------- | ---------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `Visitor.visit` | `nodes.py` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Caller                 | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Caller                  | Location                                 |
| -----: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `Visitor.visit` (`nodes.py`)

| Change | Delta |             % | Samples | Caller                     | Location     |
| -----: | ----: | ------------: | ------: | -------------------------- | ------------ |
| -48.0% |   -12 | 73.5% → 52.0% | 25 → 13 | `Visitor.visit_default`    | `nodes.py`   |
| +33.3% |    +3 | 26.5% → 48.0% |  9 → 12 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `Line.append` (`lines.py`)

|  Change | Delta |             % | Samples | Caller                                  | Location     |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ------------ |
|  -50.0% |    -9 | 81.8% → 69.2% |  18 → 9 | `LineGenerator.visit_default`           | `linegen.py` |
| removed |    -1 |   4.5% → 0.0% |   1 → 0 | `hug_power_op`                          | `trans.py`   |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `_maybe_split_omitting_optional_parens` | `linegen.py` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

| Change | Delta |      % | Samples | Caller             | Location      |
| -----: | ----: | -----: | ------: | ------------------ | ------------- |
| -60.0% |    -6 | 100.0% |  10 → 4 | `_format_str_once` | `__init__.py` |

##### `Parser.pop` (`parse.py`)

| Change | Delta |      % | Samples | Caller             | Location   |
| -----: | ----: | -----: | ------: | ------------------ | ---------- |
| -31.6% |    -6 | 100.0% | 19 → 13 | `Parser._addtoken` | `parse.py` |

##### `wrap_in_parentheses` (`nodes.py`)

|  Change | Delta |             % | Samples | Caller                       | Location     |
| ------: | ----: | ------------: | ------: | ---------------------------- | ------------ |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `normalize_invisible_parens` | `linegen.py` |

##### `_FuncBuilder.add_fns_to_class` (`dataclasses.py`)

| Change | Delta |      % | Samples | Caller           | Location         |
| -----: | ----: | -----: | ------: | ---------------- | ---------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `_process_class` | `dataclasses.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

| Change | Delta |      % | Samples | Caller              | Location      |
| -----: | ----: | -----: | ------: | ------------------- | ------------- |
| -20.0% |    -3 | 100.0% | 15 → 12 | `normalize_fmt_off` | `comments.py` |

##### `LineGenerator.visit_default` (`linegen.py`)

|  Change | Delta |             % | Samples | Caller                            | Location     |
| ------: | ----: | ------------: | ------: | --------------------------------- | ------------ |
|  -10.0% |    -1 | 76.9% → 90.0% |  10 → 9 | `Visitor.visit`                   | `nodes.py`   |
|  -50.0% |    -1 | 15.4% → 10.0% |   2 → 1 | `LineGenerator.visit_simple_stmt` | `linegen.py` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `LineGenerator.visit_power`       | `linegen.py` |

##### `line_to_string` (`lines.py`)

| Change | Delta |      % | Samples | Caller           | Location     |
| -----: | ----: | -----: | ------: | ---------------- | ------------ |
| -50.0% |    -3 | 100.0% |   6 → 3 | `transform_line` | `linegen.py` |

##### `_stringify_ast` (`parsing.py`)

| Change | Delta |             % | Samples | Caller                           | Location     |
| -----: | ----: | ------------: | ------: | -------------------------------- | ------------ |
| -25.0% |    -3 | 85.7% → 81.8% |  12 → 9 | `_stringify_ast_with_new_parent` | `parsing.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |      % | Samples | Caller                  | Location                                 |
| -----: | ----: | -----: | ------: | ----------------------- | ---------------------------------------- |
| -33.3% |    -3 | 100.0% |   9 → 6 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `Base.remove` (`pytree.py`)

|  Change | Delta |             % | Samples | Caller                | Location   |
| ------: | ----: | ------------: | ------: | --------------------- | ---------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `wrap_in_parentheses` | `nodes.py` |

##### `transform_line` (`linegen.py`)

|  Change | Delta |              % | Samples | Caller             | Location      |
| ------: | ----: | -------------: | ------: | ------------------ | ------------- |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `run_transformer`  | `linegen.py`  |
|  -20.0% |    -1 | 83.3% → 100.0% |   5 → 4 | `_format_str_once` | `__init__.py` |

##### `Parser.shift` (`parse.py`)

| Change | Delta |      % | Samples | Caller             | Location   |
| -----: | ----: | -----: | ------: | ------------------ | ---------- |
| -15.4% |    -2 | 100.0% | 13 → 11 | `Parser._addtoken` | `parse.py` |

##### `Parser.addtoken` (`parse.py`)

| Change | Delta |      % | Samples | Caller                | Location    |
| -----: | ----: | -----: | ------: | --------------------- | ----------- |
| -10.0% |    -1 | 100.0% |  10 → 9 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

|  Change | Delta |             % | Samples | Caller             | Location      |
| ------: | ----: | ------------: | ------: | ------------------ | ------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_format_str_once` | `__init__.py` |

##### `Node.__init__` (`pytree.py`)

|  Change | Delta |             % | Samples | Caller    | Location    |
| ------: | ----: | ------------: | ------: | --------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `convert` | `pytree.py` |

##### `LineGenerator.visit_stmt` (`linegen.py`)

| Change | Delta |      % | Samples | Caller          | Location   |
| -----: | ----: | -----: | ------: | --------------- | ---------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `Visitor.visit` | `nodes.py` |

##### `LineGenerator.visit_funcdef` (`linegen.py`)

|  Change | Delta |             % | Samples | Caller          | Location   |
| ------: | ----: | ------------: | ------: | --------------- | ---------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Visitor.visit` | `nodes.py` |

##### `StringTransformer.__init__` (`trans.py`)

|  Change | Delta |             % | Samples | Caller           | Location     |
| ------: | ----: | ------------: | ------: | ---------------- | ------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `transform_line` | `linegen.py` |

##### `<module>` (`grammar.py`)

|  Change | Delta |             % | Samples | Caller                      | Location                        |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Caller           | Location                        |
| ------: | ----: | ------------: | ------: | ---------------- | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `FileFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Caller                 | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

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

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

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

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `format_file_contents` (`__init__.py`)

| Change | Delta |             % |   Samples | Callee                            | Location      |
| -----: | ----: | ------------: | --------: | --------------------------------- | ------------- |
| +27.9% |  +122 | 48.2% → 49.4% | 438 → 560 | `format_str`                      | `__init__.py` |
| +21.7% |  +102 | 51.8% → 50.6% | 471 → 573 | `check_stability_and_equivalence` | `__init__.py` |

##### `format_file_in_place` (`__init__.py`)

| Change | Delta |      % |     Samples | Callee                 | Location      |
| -----: | ----: | -----: | ----------: | ---------------------- | ------------- |
| +24.6% |  +224 | 100.0% | 909 → 1,133 | `format_file_contents` | `__init__.py` |

##### `reformat_one` (`__init__.py`)

| Change | Delta |      % |     Samples | Callee                 | Location      |
| -----: | ----: | -----: | ----------: | ---------------------- | ------------- |
| +24.6% |  +224 | 100.0% | 909 → 1,133 | `format_file_in_place` | `__init__.py` |

##### `main` (`__init__.py`)

| Change | Delta |      % |     Samples | Callee         | Location      |
| -----: | ----: | -----: | ----------: | -------------- | ------------- |
| +24.6% |  +224 | 100.0% | 909 → 1,133 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

| Change | Delta |      % |     Samples | Callee | Location      |
| -----: | ----: | -----: | ----------: | ------ | ------------- |
| +24.6% |  +224 | 100.0% | 909 → 1,133 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

| Change | Delta |      % |     Samples | Callee                           | Location        |
| -----: | ----: | -----: | ----------: | -------------------------------- | --------------- |
| +24.6% |  +224 | 100.0% | 909 → 1,133 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

| Change | Delta |      % |     Samples | Callee           | Location  |
| -----: | ----: | -----: | ----------: | ---------------- | --------- |
| +24.6% |  +224 | 100.0% | 909 → 1,133 | `Context.invoke` | `core.py` |

##### `Command.main` (`core.py`)

| Change | Delta |      % |     Samples | Callee           | Location  |
| -----: | ----: | -----: | ----------: | ---------------- | --------- |
| +24.6% |  +224 | 100.0% | 909 → 1,133 | `Command.invoke` | `core.py` |

##### `Command.__call__` (`core.py`)

| Change | Delta |      % |     Samples | Callee         | Location  |
| -----: | ----: | -----: | ----------: | -------------- | --------- |
| +24.6% |  +224 | 100.0% | 909 → 1,133 | `Command.main` | `core.py` |

##### `patched_main` (`__init__.py`)

| Change | Delta |      % |     Samples | Callee             | Location  |
| -----: | ----: | -----: | ----------: | ------------------ | --------- |
| +24.6% |  +224 | 100.0% | 909 → 1,133 | `Command.__call__` | `core.py` |

##### `<module>` (`__main__.py`)

| Change | Delta |      % |     Samples | Callee         | Location      |
| -----: | ----: | -----: | ----------: | -------------- | ------------- |
| +24.6% |  +224 | 100.0% | 909 → 1,133 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

| Change | Delta |      % |     Samples | Callee      | Location         |
| -----: | ----: | -----: | ----------: | ----------- | ---------------- |
| +24.6% |  +224 | 100.0% | 909 → 1,133 | `_run_code` | `<frozen runpy>` |

##### `_run_code` (`<frozen runpy>`)

| Change | Delta |             % |     Samples | Callee       | Location         |
| -----: | ----: | ------------: | ----------: | ------------ | ---------------- |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `<module>`   | `__main__.py`    |
| +23.6% |  +221 |        100.0% | 935 → 1,156 | `run_module` | `<frozen runpy>` |

##### `run_module` (`<frozen runpy>`)

| Change | Delta |             % |     Samples | Callee                | Location         |
| -----: | ----: | ------------: | ----------: | --------------------- | ---------------- |
| +24.6% |  +224 | 97.2% → 98.0% | 909 → 1,133 | `_run_module_code`    | `<frozen runpy>` |
| -11.5% |    -3 |   2.8% → 2.0% |     26 → 23 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

| Change | Delta |      % |     Samples | Callee      | Location         |
| -----: | ----: | -----: | ----------: | ----------- | ---------------- |
| +23.6% |  +221 | 100.0% | 935 → 1,156 | `_run_code` | `<frozen runpy>` |

##### `_format_str_once` (`__init__.py`)

| Change | Delta |             % |   Samples | Callee                               | Location      |
| -----: | ----: | ------------: | --------: | ------------------------------------ | ------------- |
| +32.7% |  +162 | 59.6% → 63.3% | 495 → 657 | `lib2to3_parse`                      | `parsing.py`  |
| +52.7% |   +39 |  8.9% → 10.9% |  74 → 113 | `transform_line`                     | `linegen.py`  |
| +14.8% |   +13 |  10.6% → 9.7% |  88 → 101 | `detect_target_versions`             | `__init__.py` |
|  -7.1% |    -9 | 15.2% → 11.3% | 126 → 117 | `Visitor.visit`                      | `nodes.py`    |
| -30.0% |    -6 |   2.4% → 1.3% |   20 → 14 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`    |

##### `Driver.parse_tokens` (`driver.py`)

|  Change | Delta |             % |   Samples | Callee                | Location      |
| ------: | ----: | ------------: | --------: | --------------------- | ------------- |
|  +34.6% |  +138 | 80.8% → 81.7% | 399 → 537 | `Parser.addtoken`     | `parse.py`    |
|  +55.2% |   +16 |   5.9% → 6.8% |   29 → 45 | `TokenProxy.__next__` | `driver.py`   |
| +250.0% |    +5 |   0.4% → 1.1% |     2 → 7 | `(garbage collector)` | `<unknown>`   |
|  -50.0% |    -1 |   0.4% → 0.2% |     2 → 1 | `Parser._addtoken`    | `parse.py`    |
|  -50.0% |    -1 |   0.4% → 0.2% |     2 → 1 | `generate_tokens`     | `tokenize.py` |

##### `Driver.parse_string` (`driver.py`)

| Change | Delta |      % |   Samples | Callee                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
| +33.0% |  +163 | 100.0% | 494 → 657 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

| Change | Delta |              % |   Samples | Callee                | Location    |
| -----: | ----: | -------------: | --------: | --------------------- | ----------- |
| +33.0% |  +163 | 99.8% → 100.0% | 494 → 657 | `Driver.parse_string` | `driver.py` |

##### `Parser._addtoken` (`parse.py`)

| Change | Delta |             % |   Samples | Callee                | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +57.8% |  +107 | 48.6% → 55.5% | 185 → 292 | `(garbage collector)` | `<unknown>` |
| -17.2% |    -5 |   7.6% → 4.6% |   29 → 24 | `Parser.pop`          | `parse.py`  |
| +60.0% |    +3 |   1.3% → 1.5% |     5 → 8 | `Parser.push`         | `parse.py`  |
|  -4.0% |    -1 |   6.6% → 4.6% |   25 → 24 | `Parser.shift`        | `parse.py`  |
|    new |    +1 |   0.0% → 0.2% |     0 → 1 | `convert`             | `pytree.py` |

##### `Parser.addtoken` (`parse.py`)

| Change | Delta |             % |   Samples | Callee             | Location      |
| -----: | ----: | ------------: | --------: | ------------------ | ------------- |
| +37.5% |  +141 | 94.2% → 96.3% | 376 → 517 | `Parser._addtoken` | `parse.py`    |
| -23.1% |    -3 |   3.3% → 1.9% |   13 → 10 | `generate_tokens`  | `tokenize.py` |
|    new |    +1 |   0.0% → 0.2% |     0 → 1 | `Parser.classify`  | `parse.py`    |

##### `format_str` (`__init__.py`)

| Change | Delta |     % |   Samples | Callee             | Location      |
| -----: | ----: | ----: | --------: | ------------------ | ------------- |
| +27.9% |  +121 | 98.9% | 433 → 554 | `_format_str_once` | `__init__.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

| Change | Delta |             % |   Samples | Callee              | Location      |
| -----: | ----: | ------------: | --------: | ------------------- | ------------- |
| +22.3% |   +89 | 84.9% → 85.3% | 400 → 489 | `assert_stable`     | `__init__.py` |
| +17.9% |   +12 | 14.2% → 13.8% |   67 → 79 | `assert_equivalent` | `__init__.py` |

##### `assert_stable` (`__init__.py`)

| Change | Delta |             % |   Samples | Callee             | Location      |
| -----: | ----: | ------------: | --------: | ------------------ | ------------- |
| +21.6% |   +86 | 99.5% → 99.0% | 398 → 484 | `_format_str_once` | `__init__.py` |

##### `ExtensionFileLoader.create_module` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Callee                      | Location                        |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `module_from_spec` (`<frozen importlib._bootstrap>`)

| Change | Delta |             % | Samples | Callee                              | Location                                 |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ---------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Callee                 | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `FileFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `PathFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |      % | Samples | Callee                 | Location                                 |
| ------: | ----: | -----: | ------: | ---------------------- | ---------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `PathFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |      % | Samples | Callee                 | Location                                 |
| ------: | ----: | -----: | ------: | ---------------------- | ---------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

|  Change | Delta |      % | Samples | Callee                 | Location                                 |
| ------: | ----: | -----: | ------: | ---------------------- | ---------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `PathFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `ABCMeta.__new__` (`<frozen abc>`)

| Change | Delta |             % | Samples | Callee                   | Location    |
| -----: | ----: | ------------: | ------: | ------------------------ | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_generic_init_subclass` | `typing.py` |

##### `LineGenerator.visit_stmt` (`linegen.py`)

|  Change | Delta |             % |   Samples | Callee                       | Location     |
| ------: | ----: | ------------: | --------: | ---------------------------- | ------------ |
|  -10.1% |   -12 | 95.2% → 97.3% | 119 → 107 | `Visitor.visit`              | `nodes.py`   |
|  -33.3% |    -6 | 14.4% → 10.9% |   18 → 12 | `normalize_invisible_parens` | `linegen.py` |
| removed |    -1 |   0.8% → 0.0% |     1 → 0 | `is_name_token`              | `nodes.py`   |

##### `LineGenerator.visit_funcdef` (`linegen.py`)

| Change | Delta |              % |   Samples | Callee          | Location   |
| -----: | ----: | -------------: | --------: | --------------- | ---------- |
|  -9.9% |   -12 | 99.2% → 100.0% | 121 → 109 | `Visitor.visit` | `nodes.py` |

##### `LineGenerator.visit_suite` (`linegen.py`)

| Change | Delta |      % |   Samples | Callee                        | Location     |
| -----: | ----: | -----: | --------: | ----------------------------- | ------------ |
|  -8.9% |   -11 | 100.0% | 123 → 112 | `LineGenerator.visit_default` | `linegen.py` |

##### `Visitor.visit` (`nodes.py`)

|  Change | Delta |             % |   Samples | Callee                        | Location     |
| ------: | ----: | ------------: | --------: | ----------------------------- | ------------ |
|  -12.0% |   -15 | 99.2% → 94.0% | 125 → 110 | `LineGenerator.visit_stmt`    | `linegen.py` |
|  -10.7% |   -13 | 96.8% → 93.2% | 122 → 109 | `LineGenerator.visit_funcdef` | `linegen.py` |
|   -8.9% |   -11 | 97.6% → 95.7% | 123 → 112 | `LineGenerator.visit_suite`   | `linegen.py` |
|   -7.1% |    -9 |        100.0% | 126 → 117 | `LineGenerator.visit_default` | `linegen.py` |
| +300.0% |    +6 |   1.6% → 6.8% |     2 → 8 | `LineGenerator.visit_STRING`  | `linegen.py` |

##### `Visitor.visit_default` (`nodes.py`)

| Change | Delta |              % |   Samples | Callee          | Location   |
| -----: | ----: | -------------: | --------: | --------------- | ---------- |
|  -7.9% |   -10 | 100.0% → 99.1% | 126 → 116 | `Visitor.visit` | `nodes.py` |

##### `LineGenerator.visit_default` (`linegen.py`)

|  Change | Delta |             % |   Samples | Callee                             | Location      |
| ------: | ----: | ------------: | --------: | ---------------------------------- | ------------- |
|   -7.1% |    -9 |        100.0% | 126 → 117 | `Visitor.visit_default`            | `nodes.py`    |
| +100.0% |    +4 |   3.2% → 6.8% |     4 → 8 | `generate_comments`                | `comments.py` |
|   -3.4% |    -1 | 23.0% → 23.9% |   29 → 28 | `Line.append`                      | `lines.py`    |
|  -33.3% |    -1 |   2.4% → 1.7% |     3 → 2 | `(garbage collector)`              | `<unknown>`   |
| removed |    -1 |   0.8% → 0.0% |     1 → 0 | `BracketTracker.any_open_brackets` | `brackets.py` |

##### `wrap_in_parentheses` (`nodes.py`)

|  Change | Delta |            % | Samples | Callee          | Location    |
| ------: | ----: | -----------: | ------: | --------------- | ----------- |
| removed |    -4 | 44.4% → 0.0% |   4 → 0 | `Base.remove`   | `pytree.py` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `Node.__init__` | `pytree.py` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `Node.prefix`   | `pytree.py` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|  Change | Delta |             % | Samples | Callee                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
| +150.0% |    +3 | 10.0% → 35.7% |   2 → 5 | `EmptyLineTracker._maybe_empty_lines` | `lines.py`  |
|  -40.0% |    -2 | 25.0% → 21.4% |   5 → 3 | `__create_fn__.<locals>.__init__`     | `<string>`  |
| removed |    -1 |   5.0% → 0.0% |   1 → 0 | `Leaf.__str__`                        | `pytree.py` |

##### `normalize_invisible_parens` (`linegen.py`)

| Change | Delta |             % | Samples | Callee                                | Location     |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ------------ |
| -77.8% |    -7 | 50.0% → 16.7% |   9 → 2 | `wrap_in_parentheses`                 | `nodes.py`   |
|    new |    +1 |   0.0% → 8.3% |   0 → 1 | `maybe_make_parens_invisible_in_atom` | `linegen.py` |

##### `Parser.pop` (`parse.py`)

|  Change | Delta |             % | Samples | Callee                | Location    |
| ------: | ----: | ------------: | ------: | --------------------- | ----------- |
|  +37.5% |    +3 | 27.6% → 45.8% |  8 → 11 | `convert`             | `pytree.py` |
| removed |    -2 |   6.9% → 0.0% |   2 → 0 | `(garbage collector)` | `<unknown>` |

##### `<module>` (`nodes.py`)

|  Change | Delta |              % | Samples | Callee             | Location                        |
| ------: | ----: | -------------: | ------: | ------------------ | ------------------------------- |
| removed |    -2 |   28.6% → 0.0% |   2 → 0 | `_find_and_load`   | `<frozen importlib._bootstrap>` |
|  -50.0% |    -2 | 57.1% → 100.0% |   4 → 2 | `_handle_fromlist` | `<frozen importlib._bootstrap>` |
| removed |    -1 |   14.3% → 0.0% |   1 → 0 | `initialize`       | `pygram.py`                     |

##### `<module>` (`comments.py`)

| Change | Delta |      % | Samples | Callee           | Location                        |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `_process_class` (`dataclasses.py`)

| Change | Delta |      % | Samples | Callee                          | Location         |
| -----: | ----: | -----: | ------: | ------------------------------- | ---------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `_FuncBuilder.add_fns_to_class` | `dataclasses.py` |

##### `dataclass.<locals>.wrap` (`dataclasses.py`)

| Change | Delta |      % | Samples | Callee           | Location         |
| -----: | ----: | -----: | ------: | ---------------- | ---------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `_process_class` | `dataclasses.py` |

##### `Base.remove` (`pytree.py`)

|  Change | Delta |            % | Samples | Callee                | Location    |
| ------: | ----: | -----------: | ------: | --------------------- | ----------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `(garbage collector)` | `<unknown>` |

##### `normalize_fmt_off` (`comments.py`)

| Change | Delta |      % | Samples | Callee                     | Location      |
| -----: | ----: | -----: | ------: | -------------------------- | ------------- |
| -18.8% |    -3 | 100.0% | 16 → 13 | `convert_one_fmt_off_pair` | `comments.py` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Callee                      | Location                                 |
| -----: | ----: | ------------: | ------: | --------------------------- | ---------------------------------------- |
| -11.5% |    -3 |        100.0% | 26 → 23 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| -11.1% |    -1 | 34.6% → 34.8% |   9 → 8 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

| Change | Delta |           % | Samples | Callee                      | Location                                 |
| -----: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
| -11.5% |    -3 |      100.0% | 26 → 23 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
|    new |    +2 | 0.0% → 8.7% |   0 → 2 | `module_from_spec`          | `<frozen importlib._bootstrap>`          |

##### `<module>` (`__init__.py`)

|  Change | Delta |           % | Samples | Callee             | Location                        |
| ------: | ----: | ----------: | ------: | ------------------ | ------------------------------- |
|  -11.5% |    -3 |      100.0% | 26 → 23 | `_find_and_load`   | `<frozen importlib._bootstrap>` |
| removed |    -1 | 3.8% → 0.0% |   1 → 0 | `_handle_fromlist` | `<frozen importlib._bootstrap>` |

##### `_stringify_ast` (`parsing.py`)

| Change | Delta |             % | Samples | Callee                           | Location     |
| -----: | ----: | ------------: | ------: | -------------------------------- | ------------ |
| -12.5% |    -2 | 88.9% → 87.5% | 16 → 14 | `_stringify_ast_with_new_parent` | `parsing.py` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|  Change | Delta |           % | Samples | Callee                      | Location                        |
| ------: | ----: | ----------: | ------: | --------------------------- | ------------------------------- |
|  -11.5% |    -3 |      100.0% | 26 → 23 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
| removed |    -1 | 3.8% → 0.0% |   1 → 0 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |
| +100.0% |    +1 | 3.8% → 8.7% |   1 → 2 | `_find_spec`                | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

| Change | Delta |      % | Samples | Callee                    | Location                        |
| -----: | ----: | -----: | ------: | ------------------------- | ------------------------------- |
| -11.5% |    -3 | 100.0% | 26 → 23 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

| Change | Delta |             % | Samples | Callee           | Location                        |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------------- |
| -71.4% |    -5 |  26.9% → 8.7% |   7 → 2 | `<module>`       | `nodes.py`                      |
| -71.4% |    -5 |  26.9% → 8.7% |   7 → 2 | `<module>`       | `comments.py`                   |
| -11.5% |    -3 |        100.0% | 26 → 23 | `<module>`       | `__init__.py`                   |
| -28.6% |    -2 | 26.9% → 21.7% |   7 → 5 | `_find_and_load` | `<frozen importlib._bootstrap>` |
| -66.7% |    -2 |  11.5% → 4.3% |   3 → 1 | `<module>`       | `agg.py`                        |

##### `_get_module_details` (`<frozen runpy>`)

| Change | Delta |      % | Samples | Callee                | Location                        |
| -----: | ----: | -----: | ------: | --------------------- | ------------------------------- |
| -11.5% |    -3 | 100.0% | 26 → 23 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| -11.5% |    -3 | 100.0% | 26 → 23 | `_get_module_details` | `<frozen runpy>`                |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |            % | Samples | Callee                | Location    |
| -----: | ----: | -----------: | ------: | --------------------- | ----------- |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `(garbage collector)` | `<unknown>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

| Change | Delta |      % | Samples | Callee                      | Location                        |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------------------- |
| -28.6% |    -2 | 100.0% |   7 → 5 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |              % | Samples | Callee                | Location                                 |
| -----: | ----: | -------------: | ------: | --------------------- | ---------------------------------------- |
| -22.2% |    -2 | 100.0% → 87.5% |   9 → 7 | `_compile_bytecode`   | `<frozen importlib._bootstrap_external>` |
|    new |    +1 |   0.0% → 12.5% |   0 → 1 | `FileLoader.get_data` | `<frozen importlib._bootstrap_external>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `format_file_contents` (`__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `_run_code` ← `_run_module_as_main`

|  Change | Delta |             % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +58.4% |  +104 | 19.0% → 24.4% | 178 → 282 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +38.2% |   +34 |  9.5% → 10.6% |  89 → 123 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +72.2% |   +26 |   3.9% → 5.4% |   36 → 62 | `(garbage collector)` ← `Line.clone` (`lines.py`) ← `hug_power_op` (`trans.py`) ← `_hugging_power_ops_line_to_string` (`linegen.py`) ← `transform_line` ← `run_transformer` ← `transform_line` ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +21.1% |   +12 |   6.1% → 6.0% |   57 → 69 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +29.7% |   +11 |   4.0% → 4.2% |   37 → 48 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +83.3% |   +10 |   1.3% → 1.9% |   12 → 22 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +20.5% |    +8 |   4.2% → 4.1% |   39 → 47 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +400.0% |    +8 |   0.2% → 0.9% |    2 → 10 | `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| +250.0% |    +5 |   0.2% → 0.6% |     2 → 7 | `(garbage collector)` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|     new |    +5 |   0.0% → 0.4% |     0 → 5 | `Parser._addtoken` (`parse.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +400.0% |    +4 |   0.1% → 0.4% |     1 → 5 | `(garbage collector)` ← `Node.__init__` (`pytree.py`) ← `convert` ← `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `is_fstring_start.<locals>.<genexpr>` (`tokenize.py`) ← `is_fstring_start` ← `generate_tokens` ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  +42.9% |    +3 |   0.7% → 0.9% |    7 → 10 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| +150.0% |    +3 |   0.2% → 0.4% |     2 → 5 | `(garbage collector)` ← `StringTransformer.__init__` (`trans.py`) ← `transform_line` (`linegen.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  +75.0% |    +3 |   0.4% → 0.6% |     4 → 7 | `LinesBlock.all_lines` (`lines.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +150.0% |    +3 |   0.2% → 0.4% |     2 → 5 | `assert_stable` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `Parser.push` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new |    +3 |   0.0% → 0.3% |     0 → 3 | `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` |
|     new |    +3 |   0.0% → 0.3% |     0 → 3 | `LineGenerator.visit_STRING` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                   |
|   +4.7% |    +2 |   4.6% → 3.9% |   43 → 45 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>`) ← `_run_code` ← `_run_module_as_main`

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| removed |    -5 | 0.5% → 0.0% |   5 → 0 | `EmptyLineTracker.maybe_empty_lines` (`lines.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed |    -4 | 0.4% → 0.0% |   4 → 0 | `(garbage collector)` ← `convert` (`pytree.py`) ← `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -66.7% |    -4 | 0.6% → 0.2% |   6 → 2 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -25.0% |    -3 | 1.3% → 0.8% |  12 → 9 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -30.0% |    -3 | 1.1% → 0.6% |  10 → 7 | `generate_tokens` (`tokenize.py`) ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -50.0% |    -3 | 0.6% → 0.3% |   6 → 3 | `convert_one_fmt_off_pair` (`comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |    -3 | 0.3% → 0.0% |   3 → 0 | `transform_line` (`linegen.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |    -3 | 0.3% → 0.0% |   3 → 0 | `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -10.5% |    -2 | 2.0% → 1.5% | 19 → 17 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -33.3% |    -2 | 0.6% → 0.3% |   6 → 4 | `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -15.4% |    -2 | 1.4% → 1.0% | 13 → 11 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                       |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `normalize_invisible_parens` (`linegen.py`) ← `LineGenerator.visit_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                       |
|  -66.7% |    -2 | 0.3% → 0.1% |   3 → 1 | `_stringify_ast` (`parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>`) ← `SourceLoader.get_code` ← `_LoaderBasics.exec_module` ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`linegen.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `(garbage collector)` ← `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `wrap_in_parentheses` (`nodes.py`) ← `normalize_invisible_parens` (`linegen.py`) ← `LineGenerator.visit_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `line_to_string` (`lines.py`) ← `transform_line` (`linegen.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

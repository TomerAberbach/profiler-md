# Sampling profile diff

Collected 958 samples → 1,202 samples (+244 samples, +25.5%).

| Category          | Change | Delta |             % |   Samples |
| ----------------- | -----: | ----: | ------------: | --------: |
| Ours              | +14.6% |   +94 | 67.2% → 61.4% | 644 → 738 |
| Garbage collector | +48.0% |  +145 | 31.5% → 37.2% | 302 → 447 |
| Standard library  | +41.7% |    +5 |   1.3% → 1.4% |   12 → 17 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                       | Location      |
| ------: | ----: | ------------: | --------: | ------------------------------ | ------------- |
|  +48.0% |  +145 | 31.5% → 37.2% | 302 → 447 | `(garbage collector)`          | `<unknown>`   |
|  +30.3% |   +27 |   9.3% → 9.7% |  89 → 116 | `get_features_used`            | `__init__.py` |
|  +50.0% |   +11 |   2.3% → 2.7% |   22 → 33 | `Line.append`                  | `lines.py`    |
|  +26.3% |   +10 |          4.0% |   38 → 48 | `parse`                        | `ast.py`      |
|  +87.5% |    +7 |   0.8% → 1.2% |    8 → 15 | `Parser.shift`                 | `parse.py`    |
|  +46.2% |    +6 |   1.4% → 1.6% |   13 → 19 | `Parser.pop`                   | `parse.py`    |
| +600.0% |    +6 |   0.1% → 0.6% |     1 → 7 | `whitespace`                   | `nodes.py`    |
|  +71.4% |    +5 |   0.7% → 1.0% |    7 → 12 | `assert_equivalent`            | `__init__.py` |
| +250.0% |    +5 |   0.2% → 0.6% |     2 → 7 | `Visitor.visit_default`        | `nodes.py`    |
| +133.3% |    +4 |   0.3% → 0.6% |     3 → 7 | `convert`                      | `pytree.py`   |
|  +57.1% |    +4 |   0.7% → 0.9% |    7 → 11 | `Parser.push`                  | `parse.py`    |
| +100.0% |    +4 |   0.4% → 0.7% |     4 → 8 | `run_transformer`              | `linegen.py`  |
|  +50.0% |    +4 |   0.8% → 1.0% |    8 → 12 | `LineGenerator.visit_default`  | `linegen.py`  |
| +133.3% |    +4 |   0.3% → 0.6% |     3 → 7 | `Parser.classify`              | `parse.py`    |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `is_split_before_delimiter`    | `brackets.py` |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `delimiter_split`              | `linegen.py`  |
|  +33.3% |    +2 |   0.6% → 0.7% |     6 → 8 | `_format_str_once`             | `__init__.py` |
|  +50.0% |    +2 |   0.4% → 0.5% |     4 → 6 | `transform_line`               | `linegen.py`  |
|  +50.0% |    +2 |   0.4% → 0.5% |     4 → 6 | `format_str`                   | `__init__.py` |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `ParserGenerator.make_grammar` | `pgen.py`     |

##### Ours

|  Change | Delta |           % |  Samples | Function                       | Location      |
| ------: | ----: | ----------: | -------: | ------------------------------ | ------------- |
|  +30.3% |   +27 | 9.3% → 9.7% | 89 → 116 | `get_features_used`            | `__init__.py` |
|  +50.0% |   +11 | 2.3% → 2.7% |  22 → 33 | `Line.append`                  | `lines.py`    |
|  +26.3% |   +10 |        4.0% |  38 → 48 | `parse`                        | `ast.py`      |
|  +87.5% |    +7 | 0.8% → 1.2% |   8 → 15 | `Parser.shift`                 | `parse.py`    |
|  +46.2% |    +6 | 1.4% → 1.6% |  13 → 19 | `Parser.pop`                   | `parse.py`    |
| +600.0% |    +6 | 0.1% → 0.6% |    1 → 7 | `whitespace`                   | `nodes.py`    |
|  +71.4% |    +5 | 0.7% → 1.0% |   7 → 12 | `assert_equivalent`            | `__init__.py` |
| +250.0% |    +5 | 0.2% → 0.6% |    2 → 7 | `Visitor.visit_default`        | `nodes.py`    |
| +133.3% |    +4 | 0.3% → 0.6% |    3 → 7 | `convert`                      | `pytree.py`   |
|  +57.1% |    +4 | 0.7% → 0.9% |   7 → 11 | `Parser.push`                  | `parse.py`    |
| +100.0% |    +4 | 0.4% → 0.7% |    4 → 8 | `run_transformer`              | `linegen.py`  |
|  +50.0% |    +4 | 0.8% → 1.0% |   8 → 12 | `LineGenerator.visit_default`  | `linegen.py`  |
| +133.3% |    +4 | 0.3% → 0.6% |    3 → 7 | `Parser.classify`              | `parse.py`    |
|     new |    +4 | 0.0% → 0.3% |    0 → 4 | `is_split_before_delimiter`    | `brackets.py` |
|     new |    +3 | 0.0% → 0.2% |    0 → 3 | `delimiter_split`              | `linegen.py`  |
|  +33.3% |    +2 | 0.6% → 0.7% |    6 → 8 | `_format_str_once`             | `__init__.py` |
|  +50.0% |    +2 | 0.4% → 0.5% |    4 → 6 | `transform_line`               | `linegen.py`  |
|  +50.0% |    +2 | 0.4% → 0.5% |    4 → 6 | `format_str`                   | `__init__.py` |
|     new |    +2 | 0.0% → 0.2% |    0 → 2 | `ParserGenerator.make_grammar` | `pgen.py`     |
|     new |    +2 | 0.0% → 0.2% |    0 → 2 | `LineGenerator.visit_stmt`     | `linegen.py`  |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +48.0% |  +145 | 31.5% → 37.2% | 302 → 447 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                    | Location                                 |
| ------: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `_path_isfile`              | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `_path_stat`                | `<frozen importlib._bootstrap_external>` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                             | Location                                 |
| ------: | ----: | ----------: | ------: | ------------------------------------ | ---------------------------------------- |
|  -20.4% |   -10 | 5.1% → 3.2% | 49 → 39 | `Driver.parse_tokens`                | `driver.py`                              |
|  -42.9% |    -6 | 1.5% → 0.7% |  14 → 8 | `convert_one_fmt_off_pair`           | `comments.py`                            |
|  -60.0% |    -6 | 1.0% → 0.3% |  10 → 4 | `normalize_invisible_parens`         | `linegen.py`                             |
|  -50.0% |    -5 | 1.0% → 0.4% |  10 → 5 | `LineGenerator.visit_power`          | `linegen.py`                             |
|   -9.7% |    -3 | 3.2% → 2.3% | 31 → 28 | `generate_tokens`                    | `tokenize.py`                            |
|  -15.8% |    -3 | 2.0% → 1.3% | 19 → 16 | `_stringify_ast`                     | `parsing.py`                             |
|  -33.3% |    -2 | 0.6% → 0.3% |   6 → 4 | `_FuncBuilder.add_fns_to_class`      | `dataclasses.py`                         |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `is_docstring`                       | `nodes.py`                               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `reformat_one`                       | `__init__.py`                            |
|  -33.3% |    -1 | 0.3% → 0.2% |   3 → 2 | `ParserGenerator.make_label`         | `pgen.py`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `load_grammar`                       | `driver.py`                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Base.__new__`                       | `pytree.py`                              |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `ParserGenerator.parse_rhs`          | `pgen.py`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `__create_fn__.<locals>.__init__`    | `<string>`                               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `LineGenerator.line`                 | `linegen.py`                             |
|  -12.5% |    -1 | 0.8% → 0.6% |   8 → 7 | `BracketTracker.mark`                | `brackets.py`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_TypedCacheSpecialForm.__getitem__` | `typing.py`                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `FileLoader.get_data`                | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ParserGenerator.simplify_dfa`       | `pgen.py`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `DFAState.unifystate`                | `pgen.py`                                |

##### Ours

|  Change | Delta |           % | Samples | Function                             | Location         |
| ------: | ----: | ----------: | ------: | ------------------------------------ | ---------------- |
|  -20.4% |   -10 | 5.1% → 3.2% | 49 → 39 | `Driver.parse_tokens`                | `driver.py`      |
|  -42.9% |    -6 | 1.5% → 0.7% |  14 → 8 | `convert_one_fmt_off_pair`           | `comments.py`    |
|  -60.0% |    -6 | 1.0% → 0.3% |  10 → 4 | `normalize_invisible_parens`         | `linegen.py`     |
|  -50.0% |    -5 | 1.0% → 0.4% |  10 → 5 | `LineGenerator.visit_power`          | `linegen.py`     |
|   -9.7% |    -3 | 3.2% → 2.3% | 31 → 28 | `generate_tokens`                    | `tokenize.py`    |
|  -15.8% |    -3 | 2.0% → 1.3% | 19 → 16 | `_stringify_ast`                     | `parsing.py`     |
|  -33.3% |    -2 | 0.6% → 0.3% |   6 → 4 | `_FuncBuilder.add_fns_to_class`      | `dataclasses.py` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `is_docstring`                       | `nodes.py`       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `reformat_one`                       | `__init__.py`    |
|  -33.3% |    -1 | 0.3% → 0.2% |   3 → 2 | `ParserGenerator.make_label`         | `pgen.py`        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `load_grammar`                       | `driver.py`      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Base.__new__`                       | `pytree.py`      |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `ParserGenerator.parse_rhs`          | `pgen.py`        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `__create_fn__.<locals>.__init__`    | `<string>`       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `LineGenerator.line`                 | `linegen.py`     |
|  -12.5% |    -1 | 0.8% → 0.6% |   8 → 7 | `BracketTracker.mark`                | `brackets.py`    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `_TypedCacheSpecialForm.__getitem__` | `typing.py`      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ParserGenerator.simplify_dfa`       | `pgen.py`        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `DFAState.unifystate`                | `pgen.py`        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `namedtuple`                         | `__init__.py`    |

##### Standard library

|  Change | Delta |           % | Samples | Function              | Location                                 |
| ------: | ----: | ----------: | ------: | --------------------- | ---------------------------------------- |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `FileLoader.get_data` | `<frozen importlib._bootstrap_external>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `get_features_used` (`__init__.py`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
|  +75.0% |   +12 | 18.0% → 24.1% | 16 → 28 | `__init__.py:1335 → 1314` |
|  -83.3% |    -5 |   6.7% → 0.9% |   6 → 1 | `__init__.py:1430 → 1409` |
| +100.0% |    +5 |   5.6% → 8.6% |  5 → 10 | `__init__.py:1436 → 1415` |
| +133.3% |    +4 |   3.4% → 6.0% |   3 → 7 | `__init__.py:1367 → 1346` |
|     new |    +4 |   0.0% → 3.4% |   0 → 4 | `__init__.py:1393`        |

##### `Line.append` (`lines.py`)

|  Change | Delta |             % | Samples | Location           |
| ------: | ----: | ------------: | ------: | ------------------ |
|  +50.0% |    +5 |         45.5% | 10 → 15 | `lines.py:89 → 78` |
| +400.0% |    +4 |  4.5% → 15.2% |   1 → 5 | `lines.py:86 → 75` |
| removed |    -3 |  13.6% → 0.0% |   3 → 0 | `lines.py:97`      |
|     new |    +2 |   0.0% → 6.1% |   0 → 2 | `lines.py:65`      |
|  +14.3% |    +1 | 31.8% → 24.2% |   7 → 8 | `lines.py:95 → 84` |

##### `parse` (`ast.py`)

| Change | Delta |      % | Samples | Location    |
| -----: | ----: | -----: | ------: | ----------- |
| +26.3% |   +10 | 100.0% | 38 → 48 | `ast.py:46` |

##### `Parser.shift` (`parse.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| +175.0% |    +7 | 50.0% → 73.3% |  4 → 11 | `parse.py:381 → 369` |
| +200.0% |    +2 | 12.5% → 20.0% |   1 → 3 | `parse.py:383 → 371` |
|  -66.7% |    -2 |  37.5% → 6.7% |   3 → 1 | `parse.py:384 → 372` |

##### `Parser.pop` (`parse.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| +200.0% |    +2 |  7.7% → 15.8% |   1 → 3 | `parse.py:403 → 391` |
|  +33.3% |    +2 | 46.2% → 42.1% |   6 → 8 | `parse.py:404 → 392` |
|  +50.0% |    +2 | 30.8% → 31.6% |   4 → 6 | `parse.py:408 → 396` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `parse.py:407`       |
|     new |    +1 |   0.0% → 5.3% |   0 → 1 | `parse.py:386`       |

##### `whitespace` (`nodes.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
|     new |    +4 |  0.0% → 57.1% |   0 → 4 | `nodes.py:266` |
|     new |    +2 |  0.0% → 28.6% |   0 → 2 | `nodes.py:212` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `nodes.py:380` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `nodes.py:194` |

##### `assert_equivalent` (`__init__.py`)

| Change | Delta |             % | Samples | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- |
| +75.0% |    +3 | 57.1% → 58.3% |   4 → 7 | `__init__.py:1547 → 1533` |
| +66.7% |    +2 | 42.9% → 41.7% |   3 → 5 | `__init__.py:1546 → 1532` |

##### `Visitor.visit_default` (`nodes.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
|     new |    +6 |  0.0% → 85.7% |   0 → 6 | `nodes.py:180` |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `nodes.py:191` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `nodes.py:176` |

##### `convert` (`pytree.py`)

|  Change | Delta |             % | Samples | Location              |
| ------: | ----: | ------------: | ------: | --------------------- |
| +100.0% |    +2 | 66.7% → 57.1% |   2 → 4 | `pytree.py:503 → 492` |
| +100.0% |    +1 | 33.3% → 28.6% |   1 → 2 | `pytree.py:501 → 490` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `pytree.py:487`       |

##### `Parser.push` (`parse.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| +400.0% |    +4 | 14.3% → 45.5% |   1 → 5 | `parse.py:394 → 382` |
| removed |    -2 |  28.6% → 0.0% |   2 → 0 | `parse.py:393`       |
| +100.0% |    +1 | 14.3% → 18.2% |   1 → 2 | `parse.py:395 → 383` |
|  +33.3% |    +1 | 42.9% → 36.4% |   3 → 4 | `parse.py:396 → 384` |

##### `run_transformer` (`linegen.py`)

|  Change | Delta |              % | Samples | Location                 |
| ------: | ----: | -------------: | ------: | ------------------------ |
| +166.7% |    +5 | 75.0% → 100.0% |   3 → 8 | `linegen.py:1766 → 1782` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `linegen.py:1767`        |

##### `LineGenerator.visit_default` (`linegen.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
| +200.0% |    +2 | 12.5% → 25.0% |   1 → 3 | `linegen.py:134` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `linegen.py:136` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `linegen.py:157` |

##### `Parser.classify` (`parse.py`)

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
|     new |    +2 | 0.0% → 28.6% |   0 → 2 | `parse.py:334` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `parse.py:369` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `parse.py:329` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `parse.py:333` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `parse.py:356` |

##### `is_split_before_delimiter` (`brackets.py`)

| Change | Delta |            % | Samples | Location          |
| -----: | ----: | -----------: | ------: | ----------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `brackets.py:240` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `brackets.py:264` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `brackets.py:292` |

##### `delimiter_split` (`linegen.py`)

| Change | Delta |             % | Samples | Location          |
| -----: | ----: | ------------: | ------: | ----------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `linegen.py:1269` |

##### `_format_str_once` (`__init__.py`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
|  +50.0% |    +2 | 66.7% → 75.0% |   4 → 6 | `__init__.py:1268 → 1247` |
|     new |    +2 |  0.0% → 25.0% |   0 → 2 | `__init__.py:1266`        |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `__init__.py:1274`        |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `__init__.py:1279`        |

##### `transform_line` (`linegen.py`)

| Change | Delta |             % | Samples | Location         |
| -----: | ----: | ------------: | ------: | ---------------- |
| -66.7% |    -2 | 75.0% → 16.7% |   3 → 1 | `linegen.py:714` |
|    new |    +1 |  0.0% → 16.7% |   0 → 1 | `linegen.py:624` |
|    new |    +1 |  0.0% → 16.7% |   0 → 1 | `linegen.py:626` |
|    new |    +1 |  0.0% → 16.7% |   0 → 1 | `linegen.py:639` |
|    new |    +1 |  0.0% → 16.7% |   0 → 1 | `linegen.py:679` |

##### `format_str` (`__init__.py`)

| Change | Delta |     % | Samples | Location                  |
| -----: | ----: | ----: | ------: | ------------------------- |
| +50.0% |    +1 | 50.0% |   2 → 3 | `__init__.py:1225 → 1204` |
| +50.0% |    +1 | 50.0% |   2 → 3 | `__init__.py:1232 → 1211` |

##### `ParserGenerator.make_grammar` (`pgen.py`)

| Change | Delta |             % | Samples | Location     |
| -----: | ----: | ------------: | ------: | ------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `pgen.py:54` |

##### `LineGenerator.visit_stmt` (`linegen.py`)

| Change | Delta |             % | Samples | Location         |
| -----: | ----: | ------------: | ------: | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `linegen.py:220` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|  Change | Delta |      % | Samples | Location                            |
| ------: | ----: | -----: | ------: | ----------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `<frozen importlib._bootstrap>:549` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

| Change | Delta |             % | Samples | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<frozen importlib._bootstrap>:1309` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<frozen importlib._bootstrap_external>:835` |

##### `_path_isfile` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<frozen importlib._bootstrap_external>:166` |

##### `_path_stat` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<frozen importlib._bootstrap_external>:152` |

##### `Driver.parse_tokens` (`driver.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
|  -57.9% |   -11 | 38.8% → 20.5% |  19 → 8 | `driver.py:128` |
| removed |    -2 |   4.1% → 0.0% |   2 → 0 | `driver.py:148` |
| removed |    -2 |   4.1% → 0.0% |   2 → 0 | `driver.py:167` |
| +100.0% |    +1 |   2.0% → 5.1% |   1 → 2 | `driver.py:151` |
|   +4.2% |    +1 | 49.0% → 64.1% | 24 → 25 | `driver.py:162` |

##### `convert_one_fmt_off_pair` (`comments.py`)

|  Change | Delta |             % | Samples | Location          |
| ------: | ----: | ------------: | ------: | ----------------- |
|  -62.5% |    -5 | 57.1% → 37.5% |   8 → 3 | `comments.py:186` |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `comments.py:188` |

##### `normalize_invisible_parens` (`linegen.py`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
|  -60.0% |    -3 |         50.0% |   5 → 2 | `linegen.py:1432 → 1448` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `linegen.py:1339`        |
| +100.0% |    +1 | 10.0% → 50.0% |   1 → 2 | `linegen.py:1351 → 1367` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `linegen.py:1406`        |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `linegen.py:1413`        |

##### `LineGenerator.visit_power` (`linegen.py`)

|  Change | Delta |              % | Samples | Location         |
| ------: | ----: | -------------: | ------: | ---------------- |
|  -44.4% |    -4 | 90.0% → 100.0% |   9 → 5 | `linegen.py:363` |
| removed |    -1 |   10.0% → 0.0% |   1 → 0 | `linegen.py:341` |

##### `generate_tokens` (`tokenize.py`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
|  -27.3% |    -3 | 35.5% → 28.6% |  11 → 8 | `tokenize.py:875 → 864` |
|     new |    +2 |   0.0% → 7.1% |   0 → 2 | `tokenize.py:871`       |
| removed |    -1 |   3.2% → 0.0% |   1 → 0 | `tokenize.py:607`       |
| removed |    -1 |   3.2% → 0.0% |   1 → 0 | `tokenize.py:614`       |
|  +14.3% |    +1 | 22.6% → 28.6% |   7 → 8 | `tokenize.py:624 → 613` |

##### `_stringify_ast` (`parsing.py`)

|  Change | Delta |             % | Samples | Location               |
| ------: | ----: | ------------: | ------: | ---------------------- |
|  -30.0% |    -3 | 52.6% → 43.8% |  10 → 7 | `parsing.py:214 → 222` |
|  -42.9% |    -3 | 36.8% → 25.0% |   7 → 4 | `parsing.py:217 → 225` |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `parsing.py:174`       |
| +100.0% |    +1 |  5.3% → 12.5% |   1 → 2 | `parsing.py:199 → 207` |
|     new |    +1 |   0.0% → 6.3% |   0 → 1 | `parsing.py:186`       |

##### `_FuncBuilder.add_fns_to_class` (`dataclasses.py`)

| Change | Delta |      % | Samples | Location             |
| -----: | ----: | -----: | ------: | -------------------- |
| -33.3% |    -2 | 100.0% |   6 → 4 | `dataclasses.py:499` |

##### `is_docstring` (`nodes.py`)

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `nodes.py:563` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `nodes.py:568` |

##### `reformat_one` (`__init__.py`)

|  Change | Delta |             % | Samples | Location          |
| ------: | ----: | ------------: | ------: | ----------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `__init__.py:902` |

##### `ParserGenerator.make_label` (`pgen.py`)

|  Change | Delta |             % | Samples | Location      |
| ------: | ----: | ------------: | ------: | ------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `pgen.py:111` |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `pgen.py:100` |

##### `load_grammar` (`driver.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `driver.py:258` |

##### `Base.__new__` (`pytree.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `pytree.py:84` |

##### `ParserGenerator.parse_rhs` (`pgen.py`)

|  Change | Delta |             % | Samples | Location      |
| ------: | ----: | ------------: | ------: | ------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `pgen.py:285` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `pgen.py:274` |

##### `__create_fn__.<locals>.__init__` (`<string>`)

|  Change | Delta |             % | Samples | Location     |
| ------: | ----: | ------------: | ------: | ------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<string>:7` |

##### `LineGenerator.line` (`linegen.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `linegen.py:109` |

##### `BracketTracker.mark` (`brackets.py`)

|  Change | Delta |             % | Samples | Location          |
| ------: | ----: | ------------: | ------: | ----------------- |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `brackets.py:88`  |
|  -20.0% |    -1 | 62.5% → 57.1% |   5 → 4 | `brackets.py:112` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `brackets.py:123` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `brackets.py:126` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `brackets.py:128` |

##### `_TypedCacheSpecialForm.__getitem__` (`typing.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `typing.py:582` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<frozen importlib._bootstrap_external>:923` |

##### `ParserGenerator.simplify_dfa` (`pgen.py`)

|  Change | Delta |             % | Samples | Location      |
| ------: | ----: | ------------: | ------: | ------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `pgen.py:275` |

##### `DFAState.unifystate` (`pgen.py`)

|  Change | Delta |             % | Samples | Location      |
| ------: | ----: | ------------: | ------: | ------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `pgen.py:405` |

##### `namedtuple` (`__init__.py`)

|  Change | Delta |             % | Samples | Location          |
| ------: | ----: | ------------: | ------: | ----------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `__init__.py:515` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|   Change | Delta |             % |   Samples | Caller                       | Location     |
| -------: | ----: | ------------: | --------: | ---------------------------- | ------------ |
|   +48.1% |   +90 | 61.9% → 62.0% | 187 → 277 | `convert`                    | `pytree.py`  |
| +6000.0% |   +60 |  0.3% → 13.6% |    1 → 61 | `Leaf.prefix`                | `pytree.py`  |
|   -95.8% |   -46 |  15.9% → 0.4% |    48 → 2 | `transform_line`             | `linegen.py` |
|   +62.5% |    +5 |   2.6% → 2.9% |    8 → 13 | `Parser._addtoken`           | `parse.py`   |
|  +250.0% |    +5 |   0.7% → 1.6% |     2 → 7 | `StringTransformer.__init__` | `trans.py`   |

##### `get_features_used` (`__init__.py`)

| Change | Delta |      % |  Samples | Caller                   | Location      |
| -----: | ----: | -----: | -------: | ------------------------ | ------------- |
| +30.3% |   +27 | 100.0% | 89 → 116 | `detect_target_versions` | `__init__.py` |

##### `Line.append` (`lines.py`)

|  Change | Delta |             % | Samples | Caller                        | Location     |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------ |
|  +47.6% |   +10 | 95.5% → 93.9% | 21 → 31 | `LineGenerator.visit_default` | `linegen.py` |
|     new |    +2 |   0.0% → 6.1% |   0 → 2 | `hug_power_op`                | `trans.py`   |
| removed |    -1 |   4.5% → 0.0% |   1 → 0 | `bracket_split_build_line`    | `linegen.py` |

##### `parse` (`ast.py`)

| Change | Delta |      % | Samples | Caller                  | Location     |
| -----: | ----: | -----: | ------: | ----------------------- | ------------ |
| +26.3% |   +10 | 100.0% | 38 → 48 | `_parse_single_version` | `parsing.py` |

##### `Parser.shift` (`parse.py`)

| Change | Delta |      % | Samples | Caller             | Location   |
| -----: | ----: | -----: | ------: | ------------------ | ---------- |
| +87.5% |    +7 | 100.0% |  8 → 15 | `Parser._addtoken` | `parse.py` |

##### `Parser.pop` (`parse.py`)

| Change | Delta |      % | Samples | Caller             | Location   |
| -----: | ----: | -----: | ------: | ------------------ | ---------- |
| +46.2% |    +6 | 100.0% | 13 → 19 | `Parser._addtoken` | `parse.py` |

##### `whitespace` (`nodes.py`)

|  Change | Delta |      % | Samples | Caller        | Location   |
| ------: | ----: | -----: | ------: | ------------- | ---------- |
| +600.0% |    +6 | 100.0% |   1 → 7 | `Line.append` | `lines.py` |

##### `assert_equivalent` (`__init__.py`)

| Change | Delta |      % | Samples | Caller                            | Location      |
| -----: | ----: | -----: | ------: | --------------------------------- | ------------- |
| +71.4% |    +5 | 100.0% |  7 → 12 | `check_stability_and_equivalence` | `__init__.py` |

##### `Visitor.visit_default` (`nodes.py`)

|  Change | Delta |      % | Samples | Caller                        | Location     |
| ------: | ----: | -----: | ------: | ----------------------------- | ------------ |
| +250.0% |    +5 | 100.0% |   2 → 7 | `LineGenerator.visit_default` | `linegen.py` |

##### `convert` (`pytree.py`)

|  Change | Delta |             % | Samples | Caller         | Location   |
| ------: | ----: | ------------: | ------: | -------------- | ---------- |
| +100.0% |    +2 | 66.7% → 57.1% |   2 → 4 | `Parser.shift` | `parse.py` |
| +200.0% |    +2 | 33.3% → 42.9% |   1 → 3 | `Parser.pop`   | `parse.py` |

##### `Parser.push` (`parse.py`)

| Change | Delta |      % | Samples | Caller             | Location   |
| -----: | ----: | -----: | ------: | ------------------ | ---------- |
| +57.1% |    +4 | 100.0% |  7 → 11 | `Parser._addtoken` | `parse.py` |

##### `run_transformer` (`linegen.py`)

|  Change | Delta |      % | Samples | Caller           | Location     |
| ------: | ----: | -----: | ------: | ---------------- | ------------ |
| +100.0% |    +4 | 100.0% |   4 → 8 | `transform_line` | `linegen.py` |

##### `LineGenerator.visit_default` (`linegen.py`)

|  Change | Delta |             % | Samples | Caller                            | Location     |
| ------: | ----: | ------------: | ------: | --------------------------------- | ------------ |
| +100.0% |    +5 | 62.5% → 83.3% |  5 → 10 | `Visitor.visit`                   | `nodes.py`   |
| removed |    -2 |  25.0% → 0.0% |   2 → 0 | `LineGenerator.visit_power`       | `linegen.py` |
| +100.0% |    +1 | 12.5% → 16.7% |   1 → 2 | `LineGenerator.visit_simple_stmt` | `linegen.py` |

##### `Parser.classify` (`parse.py`)

|  Change | Delta |      % | Samples | Caller            | Location   |
| ------: | ----: | -----: | ------: | ----------------- | ---------- |
| +133.3% |    +4 | 100.0% |   3 → 7 | `Parser.addtoken` | `parse.py` |

##### `is_split_before_delimiter` (`brackets.py`)

| Change | Delta |            % | Samples | Caller                | Location      |
| -----: | ----: | -----------: | ------: | --------------------- | ------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `BracketTracker.mark` | `brackets.py` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `whitespace`          | `nodes.py`    |

##### `delimiter_split` (`linegen.py`)

| Change | Delta |             % | Samples | Caller                                             | Location     |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | ------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `dont_increase_indentation.<locals>.split_wrapper` | `linegen.py` |

##### `_format_str_once` (`__init__.py`)

| Change | Delta |              % | Samples | Caller          | Location      |
| -----: | ----: | -------------: | ------: | --------------- | ------------- |
|    new |    +4 |   0.0% → 50.0% |   0 → 4 | `assert_stable` | `__init__.py` |
| -33.3% |    -2 | 100.0% → 50.0% |   6 → 4 | `format_str`    | `__init__.py` |

##### `transform_line` (`linegen.py`)

|  Change | Delta |              % | Samples | Caller             | Location      |
| ------: | ----: | -------------: | ------: | ------------------ | ------------- |
| +200.0% |    +4 | 50.0% → 100.0% |   2 → 6 | `_format_str_once` | `__init__.py` |
| removed |    -2 |   50.0% → 0.0% |   2 → 0 | `run_transformer`  | `linegen.py`  |

##### `format_str` (`__init__.py`)

| Change | Delta |      % | Samples | Caller                 | Location      |
| -----: | ----: | -----: | ------: | ---------------------- | ------------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `format_file_contents` | `__init__.py` |

##### `ParserGenerator.make_grammar` (`pgen.py`)

| Change | Delta |             % | Samples | Caller             | Location  |
| -----: | ----: | ------------: | ------: | ------------------ | --------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `generate_grammar` | `pgen.py` |

##### `LineGenerator.visit_stmt` (`linegen.py`)

| Change | Delta |             % | Samples | Caller          | Location   |
| -----: | ----: | ------------: | ------: | --------------- | ---------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Visitor.visit` | `nodes.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

| Change | Delta |            % | Samples | Caller                              | Location                                 |
| -----: | ----: | -----------: | ------: | ----------------------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `_LoaderBasics.exec_module`         | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

| Change | Delta |             % | Samples | Caller           | Location                        |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Caller                      | Location                                 |
| -----: | ----: | ------------: | ------: | --------------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_path_isfile` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Caller                 | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `_path_stat` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Caller                 | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `Driver.parse_tokens` (`driver.py`)

| Change | Delta |      % | Samples | Caller                | Location    |
| -----: | ----: | -----: | ------: | --------------------- | ----------- |
| -20.4% |   -10 | 100.0% | 49 → 39 | `Driver.parse_string` | `driver.py` |

##### `convert_one_fmt_off_pair` (`comments.py`)

| Change | Delta |      % | Samples | Caller              | Location      |
| -----: | ----: | -----: | ------: | ------------------- | ------------- |
| -42.9% |    -6 | 100.0% |  14 → 8 | `normalize_fmt_off` | `comments.py` |

##### `normalize_invisible_parens` (`linegen.py`)

| Change | Delta |      % | Samples | Caller                     | Location     |
| -----: | ----: | -----: | ------: | -------------------------- | ------------ |
| -60.0% |    -6 | 100.0% |  10 → 4 | `LineGenerator.visit_stmt` | `linegen.py` |

##### `LineGenerator.visit_power` (`linegen.py`)

| Change | Delta |      % | Samples | Caller          | Location   |
| -----: | ----: | -----: | ------: | --------------- | ---------- |
| -50.0% |    -5 | 100.0% |  10 → 5 | `Visitor.visit` | `nodes.py` |

##### `generate_tokens` (`tokenize.py`)

|  Change | Delta |             % | Samples | Caller                       | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------- | ----------- |
|  -28.6% |    -4 | 45.2% → 35.7% | 14 → 10 | `Parser.addtoken`            | `parse.py`  |
|   +6.3% |    +1 | 51.6% → 60.7% | 16 → 17 | `TokenProxy.__next__`        | `driver.py` |
| removed |    -1 |   3.2% → 0.0% |   1 → 0 | `ParserGenerator.parse_atom` | `pgen.py`   |
|     new |    +1 |   0.0% → 3.6% |   0 → 1 | `Driver.parse_tokens`        | `driver.py` |

##### `_stringify_ast` (`parsing.py`)

| Change | Delta |             % | Samples | Caller                           | Location      |
| -----: | ----: | ------------: | ------: | -------------------------------- | ------------- |
| -66.7% |    -2 |  15.8% → 6.3% |   3 → 1 | `assert_equivalent`              | `__init__.py` |
|  -6.3% |    -1 | 84.2% → 93.8% | 16 → 15 | `_stringify_ast_with_new_parent` | `parsing.py`  |

##### `_FuncBuilder.add_fns_to_class` (`dataclasses.py`)

| Change | Delta |      % | Samples | Caller           | Location         |
| -----: | ----: | -----: | ------: | ---------------- | ---------------- |
| -33.3% |    -2 | 100.0% |   6 → 4 | `_process_class` | `dataclasses.py` |

##### `is_docstring` (`nodes.py`)

|  Change | Delta |             % | Samples | Caller                       | Location     |
| ------: | ----: | ------------: | ------: | ---------------------------- | ------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `LineGenerator.visit_STRING` | `linegen.py` |

##### `reformat_one` (`__init__.py`)

|  Change | Delta |             % | Samples | Caller | Location      |
| ------: | ----: | ------------: | ------: | ------ | ------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `main` | `__init__.py` |

##### `ParserGenerator.make_label` (`pgen.py`)

| Change | Delta |              % | Samples | Caller                         | Location  |
| -----: | ----: | -------------: | ------: | ------------------------------ | --------- |
| -66.7% |    -2 | 100.0% → 50.0% |   3 → 1 | `ParserGenerator.make_first`   | `pgen.py` |
|    new |    +1 |   0.0% → 50.0% |   0 → 1 | `ParserGenerator.make_grammar` | `pgen.py` |

##### `load_grammar` (`driver.py`)

|  Change | Delta |             % | Samples | Caller                  | Location    |
| ------: | ----: | ------------: | ------: | ----------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `load_packaged_grammar` | `driver.py` |

##### `Base.__new__` (`pytree.py`)

|  Change | Delta |             % | Samples | Caller    | Location    |
| ------: | ----: | ------------: | ------: | --------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `convert` | `pytree.py` |

##### `ParserGenerator.parse_rhs` (`pgen.py`)

| Change | Delta |      % | Samples | Caller                  | Location  |
| -----: | ----: | -----: | ------: | ----------------------- | --------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `ParserGenerator.parse` | `pgen.py` |

##### `__create_fn__.<locals>.__init__` (`<string>`)

|  Change | Delta |             % | Samples | Caller     | Location   |
| ------: | ----: | ------------: | ------: | ---------- | ---------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `__init__` | `__init__` |

##### `LineGenerator.line` (`linegen.py`)

|  Change | Delta |             % | Samples | Caller                            | Location     |
| ------: | ----: | ------------: | ------: | --------------------------------- | ------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `LineGenerator.visit_simple_stmt` | `linegen.py` |

##### `BracketTracker.mark` (`brackets.py`)

| Change | Delta |              % | Samples | Caller                               | Location   |
| -----: | ----: | -------------: | ------: | ------------------------------------ | ---------- |
| -50.0% |    -4 | 100.0% → 57.1% |   8 → 4 | `Line.append`                        | `lines.py` |
|    new |    +3 |   0.0% → 42.9% |   0 → 3 | `EmptyLineTracker.maybe_empty_lines` | `lines.py` |

##### `_TypedCacheSpecialForm.__getitem__` (`typing.py`)

|  Change | Delta |             % | Samples | Caller     | Location    |
| ------: | ----: | ------------: | ------: | ---------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<module>` | `_utils.py` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Caller                  | Location                                 |
| ------: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `ParserGenerator.simplify_dfa` (`pgen.py`)

|  Change | Delta |             % | Samples | Caller                  | Location  |
| ------: | ----: | ------------: | ------: | ----------------------- | --------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ParserGenerator.parse` | `pgen.py` |

##### `DFAState.unifystate` (`pgen.py`)

|  Change | Delta |             % | Samples | Caller                         | Location  |
| ------: | ----: | ------------: | ------: | ------------------------------ | --------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ParserGenerator.simplify_dfa` | `pgen.py` |

##### `namedtuple` (`__init__.py`)

|  Change | Delta |             % | Samples | Caller     | Location       |
| ------: | ----: | ------------: | ------: | ---------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<module>` | `selectors.py` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |     Samples | Function                          | Location         |
| -----: | ----: | ------------: | ----------: | --------------------------------- | ---------------- |
| +25.5% |  +244 |        100.0% | 958 → 1,202 | `_run_code`                       | `<frozen runpy>` |
| +25.5% |  +244 |        100.0% | 958 → 1,202 | `run_module`                      | `<frozen runpy>` |
| +25.5% |  +244 |        100.0% | 958 → 1,202 | `_run_module_as_main`             | `<frozen runpy>` |
| +25.4% |  +235 | 96.6% → 96.5% | 925 → 1,160 | `format_file_contents`            | `__init__.py`    |
| +25.4% |  +235 | 96.7% → 96.6% | 926 → 1,161 | `format_file_in_place`            | `__init__.py`    |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `reformat_one`                    | `__init__.py`    |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `main`                            | `__init__.py`    |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `pass_context.<locals>.new_func`  | `decorators.py`  |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `Context.invoke`                  | `core.py`        |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `Command.invoke`                  | `core.py`        |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `Command.main`                    | `core.py`        |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `Command.__call__`                | `core.py`        |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `patched_main`                    | `__init__.py`    |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `<module>`                        | `__main__.py`    |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `_run_module_code`                | `<frozen runpy>` |
| +25.9% |  +218 | 88.0% → 88.3% | 843 → 1,061 | `_format_str_once`                | `__init__.py`    |
| +35.8% |  +161 | 47.0% → 50.8% |   450 → 611 | `check_stability_and_equivalence` | `__init__.py`    |
| +39.3% |  +147 | 39.0% → 43.3% |   374 → 521 | `assert_stable`                   | `__init__.py`    |
| +48.3% |  +146 | 31.5% → 37.3% |   302 → 448 | `(garbage collector)`             | `<unknown>`      |
| +29.1% |  +123 | 44.2% → 45.4% |   423 → 546 | `Parser.addtoken`                 | `parse.py`       |

##### Ours

| Change | Delta |             % |     Samples | Function                          | Location        |
| -----: | ----: | ------------: | ----------: | --------------------------------- | --------------- |
| +25.4% |  +235 | 96.6% → 96.5% | 925 → 1,160 | `format_file_contents`            | `__init__.py`   |
| +25.4% |  +235 | 96.7% → 96.6% | 926 → 1,161 | `format_file_in_place`            | `__init__.py`   |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `reformat_one`                    | `__init__.py`   |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `main`                            | `__init__.py`   |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `pass_context.<locals>.new_func`  | `decorators.py` |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `Context.invoke`                  | `core.py`       |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `Command.invoke`                  | `core.py`       |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `Command.main`                    | `core.py`       |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `Command.__call__`                | `core.py`       |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `patched_main`                    | `__init__.py`   |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `<module>`                        | `__main__.py`   |
| +25.9% |  +218 | 88.0% → 88.3% | 843 → 1,061 | `_format_str_once`                | `__init__.py`   |
| +35.8% |  +161 | 47.0% → 50.8% |   450 → 611 | `check_stability_and_equivalence` | `__init__.py`   |
| +39.3% |  +147 | 39.0% → 43.3% |   374 → 521 | `assert_stable`                   | `__init__.py`   |
| +29.1% |  +123 | 44.2% → 45.4% |   423 → 546 | `Parser.addtoken`                 | `parse.py`      |
| +29.7% |  +121 | 42.5% → 43.9% |   407 → 528 | `Parser._addtoken`                | `parse.py`      |
| +23.5% |  +120 | 53.3% → 52.5% |   511 → 631 | `Driver.parse_tokens`             | `driver.py`     |
| +23.5% |  +120 | 53.3% → 52.5% |   511 → 631 | `Driver.parse_string`             | `driver.py`     |
| +23.5% |  +120 | 53.3% → 52.5% |   511 → 631 | `lib2to3_parse`                   | `parsing.py`    |
| +50.5% |  +102 | 21.1% → 25.3% |   202 → 304 | `Parser.shift`                    | `parse.py`      |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +48.3% |  +146 | 31.5% → 37.3% | 302 → 448 | `(garbage collector)` | `<unknown>` |

##### Standard library

| Change | Delta |             % |     Samples | Function                             | Location                                 |
| -----: | ----: | ------------: | ----------: | ------------------------------------ | ---------------------------------------- |
| +25.5% |  +244 |        100.0% | 958 → 1,202 | `_run_code`                          | `<frozen runpy>`                         |
| +25.5% |  +244 |        100.0% | 958 → 1,202 | `run_module`                         | `<frozen runpy>`                         |
| +25.5% |  +244 |        100.0% | 958 → 1,202 | `_run_module_as_main`                | `<frozen runpy>`                         |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `_run_module_code`                   | `<frozen runpy>`                         |
| +32.3% |   +10 |   3.2% → 3.4% |     31 → 41 | `_call_with_frames_removed`          | `<frozen importlib._bootstrap>`          |
| +32.3% |   +10 |   3.2% → 3.4% |     31 → 41 | `_LoaderBasics.exec_module`          | `<frozen importlib._bootstrap_external>` |
| +32.3% |   +10 |   3.2% → 3.4% |     31 → 41 | `_load_unlocked`                     | `<frozen importlib._bootstrap>`          |
| +32.3% |   +10 |   3.2% → 3.4% |     31 → 41 | `_find_and_load_unlocked`            | `<frozen importlib._bootstrap>`          |
| +32.3% |   +10 |   3.2% → 3.4% |     31 → 41 | `_find_and_load`                     | `<frozen importlib._bootstrap>`          |
| +32.3% |   +10 |   3.2% → 3.4% |     31 → 41 | `_get_module_details`                | `<frozen runpy>`                         |
|    new |    +3 |   0.0% → 0.2% |       0 → 3 | `_get_module_lock`                   | `<frozen importlib._bootstrap>`          |
|    new |    +3 |   0.0% → 0.2% |       0 → 3 | `_HierarchicalLockManager.__enter__` | `<frozen importlib._bootstrap>`          |
|    new |    +2 |   0.0% → 0.2% |       0 → 2 | `FileFinder.find_spec`               | `<frozen importlib._bootstrap_external>` |
|    new |    +2 |   0.0% → 0.2% |       0 → 2 | `PathFinder._get_spec`               | `<frozen importlib._bootstrap_external>` |
|    new |    +2 |   0.0% → 0.2% |       0 → 2 | `PathFinder.find_spec`               | `<frozen importlib._bootstrap_external>` |
|    new |    +2 |   0.0% → 0.2% |       0 → 2 | `_find_spec`                         | `<frozen importlib._bootstrap>`          |
| +20.0% |    +1 |          0.5% |       5 → 6 | `_handle_fromlist`                   | `<frozen importlib._bootstrap>`          |
|    new |    +1 |   0.0% → 0.1% |       0 → 1 | `_path_isfile`                       | `<frozen importlib._bootstrap_external>` |
|    new |    +1 |   0.0% → 0.1% |       0 → 1 | `ExtensionFileLoader.create_module`  | `<frozen importlib._bootstrap_external>` |
|    new |    +1 |   0.0% → 0.1% |       0 → 1 | `module_from_spec`                   | `<frozen importlib._bootstrap>`          |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

##### Ours

|  Change | Delta |           % | Samples | Function                       | Location      |
| ------: | ----: | ----------: | ------: | ------------------------------ | ------------- |
|  -26.2% |   -22 | 8.8% → 5.2% | 84 → 62 | `transform_line`               | `linegen.py`  |
|  -43.8% |    -7 | 1.7% → 0.7% |  16 → 9 | `convert_one_fmt_off_pair`     | `comments.py` |
|  -43.8% |    -7 | 1.7% → 0.7% |  16 → 9 | `normalize_fmt_off`            | `comments.py` |
|  -13.6% |    -3 | 2.3% → 1.6% | 22 → 19 | `_stringify_ast`               | `parsing.py`  |
|  -60.0% |    -3 | 0.5% → 0.2% |   5 → 2 | `ParserGenerator.parse`        | `pgen.py`     |
|  -60.0% |    -3 | 0.5% → 0.2% |   5 → 2 | `ParserGenerator.__init__`     | `pgen.py`     |
|  -25.0% |    -3 | 1.3% → 0.7% |  12 → 9 | `normalize_invisible_parens`   | `linegen.py`  |
|  -66.7% |    -2 | 0.3% → 0.1% |   3 → 1 | `ParserGenerator.parse_rhs`    | `pgen.py`     |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `ParserGenerator.simplify_dfa` | `pgen.py`     |
|  -33.3% |    -2 | 0.6% → 0.3% |   6 → 4 | `right_hand_split`             | `linegen.py`  |
|  -33.3% |    -2 | 0.6% → 0.3% |   6 → 4 | `transform_line.<locals>._rhs` | `linegen.py`  |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `is_docstring`                 | `nodes.py`    |
|   -2.9% |    -1 | 3.5% → 2.7% | 34 → 33 | `generate_tokens`              | `tokenize.py` |
|  -33.3% |    -1 | 0.3% → 0.2% |   3 → 2 | `ParserGenerator.make_label`   | `pgen.py`     |
|  -33.3% |    -1 | 0.3% → 0.2% |   3 → 2 | `ParserGenerator.make_first`   | `pgen.py`     |
|  -12.5% |    -1 | 0.8% → 0.6% |   8 → 7 | `generate_grammar`             | `pgen.py`     |
|  -11.1% |    -1 | 0.9% → 0.7% |   9 → 8 | `load_grammar`                 | `driver.py`   |
|  -11.1% |    -1 | 0.9% → 0.7% |   9 → 8 | `load_packaged_grammar`        | `driver.py`   |
|  -11.1% |    -1 | 0.9% → 0.7% |   9 → 8 | `initialize`                   | `pygram.py`   |
|   -7.7% |    -1 | 1.4% → 1.0% | 13 → 12 | `<module>`                     | `nodes.py`    |

##### Standard library

|  Change | Delta |           % | Samples | Function                | Location                                 |
| ------: | ----: | ----------: | ------: | ----------------------- | ---------------------------------------- |
|   -9.1% |    -1 | 1.1% → 0.8% | 11 → 10 | `_compile_bytecode`     | `<frozen importlib._bootstrap_external>` |
|   -8.3% |    -1 | 1.3% → 0.9% | 12 → 11 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `FileLoader.get_data`   | `<frozen importlib._bootstrap_external>` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_run_code` (`<frozen runpy>`)

| Change | Delta |             % |     Samples | Callee       | Location         |
| -----: | ----: | ------------: | ----------: | ------------ | ---------------- |
| +25.5% |  +244 |        100.0% | 958 → 1,202 | `run_module` | `<frozen runpy>` |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

| Change | Delta |             % |     Samples | Callee                | Location         |
| -----: | ----: | ------------: | ----------: | --------------------- | ---------------- |
| +25.2% |  +234 | 96.8% → 96.6% | 927 → 1,161 | `_run_module_code`    | `<frozen runpy>` |
| +32.3% |   +10 |   3.2% → 3.4% |     31 → 41 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

| Change | Delta |      % |     Samples | Callee      | Location         |
| -----: | ----: | -----: | ----------: | ----------- | ---------------- |
| +25.5% |  +244 | 100.0% | 958 → 1,202 | `_run_code` | `<frozen runpy>` |

##### `format_file_contents` (`__init__.py`)

| Change | Delta |             % |   Samples | Callee                            | Location      |
| -----: | ----: | ------------: | --------: | --------------------------------- | ------------- |
| +35.8% |  +161 | 48.6% → 52.7% | 450 → 611 | `check_stability_and_equivalence` | `__init__.py` |
| +15.6% |   +74 | 51.4% → 47.3% | 475 → 549 | `format_str`                      | `__init__.py` |

##### `format_file_in_place` (`__init__.py`)

| Change | Delta |     % |     Samples | Callee                 | Location      |
| -----: | ----: | ----: | ----------: | ---------------------- | ------------- |
| +25.4% |  +235 | 99.9% | 925 → 1,160 | `format_file_contents` | `__init__.py` |

##### `reformat_one` (`__init__.py`)

| Change | Delta |              % |     Samples | Callee                 | Location      |
| -----: | ----: | -------------: | ----------: | ---------------------- | ------------- |
| +25.4% |  +235 | 99.9% → 100.0% | 926 → 1,161 | `format_file_in_place` | `__init__.py` |

##### `main` (`__init__.py`)

| Change | Delta |      % |     Samples | Callee         | Location      |
| -----: | ----: | -----: | ----------: | -------------- | ------------- |
| +25.2% |  +234 | 100.0% | 927 → 1,161 | `reformat_one` | `__init__.py` |

##### `pass_context.<locals>.new_func` (`decorators.py`)

| Change | Delta |      % |     Samples | Callee | Location      |
| -----: | ----: | -----: | ----------: | ------ | ------------- |
| +25.2% |  +234 | 100.0% | 927 → 1,161 | `main` | `__init__.py` |

##### `Context.invoke` (`core.py`)

| Change | Delta |      % |     Samples | Callee                           | Location        |
| -----: | ----: | -----: | ----------: | -------------------------------- | --------------- |
| +25.2% |  +234 | 100.0% | 927 → 1,161 | `pass_context.<locals>.new_func` | `decorators.py` |

##### `Command.invoke` (`core.py`)

| Change | Delta |      % |     Samples | Callee           | Location  |
| -----: | ----: | -----: | ----------: | ---------------- | --------- |
| +25.2% |  +234 | 100.0% | 927 → 1,161 | `Context.invoke` | `core.py` |

##### `Command.main` (`core.py`)

| Change | Delta |      % |     Samples | Callee           | Location  |
| -----: | ----: | -----: | ----------: | ---------------- | --------- |
| +25.2% |  +234 | 100.0% | 927 → 1,161 | `Command.invoke` | `core.py` |

##### `Command.__call__` (`core.py`)

| Change | Delta |      % |     Samples | Callee         | Location  |
| -----: | ----: | -----: | ----------: | -------------- | --------- |
| +25.2% |  +234 | 100.0% | 927 → 1,161 | `Command.main` | `core.py` |

##### `patched_main` (`__init__.py`)

| Change | Delta |      % |     Samples | Callee             | Location  |
| -----: | ----: | -----: | ----------: | ------------------ | --------- |
| +25.2% |  +234 | 100.0% | 927 → 1,161 | `Command.__call__` | `core.py` |

##### `<module>` (`__main__.py`)

| Change | Delta |      % |     Samples | Callee         | Location      |
| -----: | ----: | -----: | ----------: | -------------- | ------------- |
| +25.2% |  +234 | 100.0% | 927 → 1,161 | `patched_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

| Change | Delta |      % |     Samples | Callee      | Location         |
| -----: | ----: | -----: | ----------: | ----------- | ---------------- |
| +25.2% |  +234 | 100.0% | 927 → 1,161 | `_run_code` | `<frozen runpy>` |

##### `_format_str_once` (`__init__.py`)

| Change | Delta |             % |   Samples | Callee                   | Location      |
| -----: | ----: | ------------: | --------: | ------------------------ | ------------- |
| +23.5% |  +120 | 60.6% → 59.5% | 511 → 631 | `lib2to3_parse`          | `parsing.py`  |
| +76.3% |   +90 | 14.0% → 19.6% | 118 → 208 | `Visitor.visit`          | `nodes.py`    |
| +27.5% |   +25 | 10.8% → 10.9% |  91 → 116 | `detect_target_versions` | `__init__.py` |
| -26.2% |   -22 |  10.0% → 5.8% |   84 → 62 | `transform_line`         | `linegen.py`  |
| -43.8% |    -7 |   1.9% → 0.8% |    16 → 9 | `normalize_fmt_off`      | `comments.py` |

##### `check_stability_and_equivalence` (`__init__.py`)

| Change | Delta |             % |   Samples | Callee              | Location      |
| -----: | ----: | ------------: | --------: | ------------------- | ------------- |
| +39.3% |  +147 | 83.1% → 85.3% | 374 → 521 | `assert_stable`     | `__init__.py` |
| +18.3% |   +13 | 15.8% → 13.7% |   71 → 84 | `assert_equivalent` | `__init__.py` |

##### `assert_stable` (`__init__.py`)

| Change | Delta |             % |   Samples | Callee             | Location      |
| -----: | ----: | ------------: | --------: | ------------------ | ------------- |
| +39.2% |  +146 | 99.5% → 99.4% | 372 → 518 | `_format_str_once` | `__init__.py` |

##### `(garbage collector)` (`<unknown>`)

| Change | Delta |           % | Samples | Callee         | Location   |
| -----: | ----: | ----------: | ------: | -------------- | ---------- |
|    new |    +1 | 0.0% → 0.2% |   0 → 1 | `hug_power_op` | `trans.py` |

##### `Parser.addtoken` (`parse.py`)

|  Change | Delta |             % |   Samples | Callee             | Location      |
| ------: | ----: | ------------: | --------: | ------------------ | ------------- |
|  +30.8% |  +121 | 92.9% → 94.1% | 393 → 514 | `Parser._addtoken` | `parse.py`    |
| +133.3% |    +4 |   0.7% → 1.3% |     3 → 7 | `Parser.classify`  | `parse.py`    |
|  -21.4% |    -3 |   3.3% → 2.0% |   14 → 11 | `generate_tokens`  | `tokenize.py` |

##### `Parser._addtoken` (`parse.py`)

| Change | Delta |             % |   Samples | Callee                | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +50.5% |  +102 | 49.6% → 57.6% | 202 → 304 | `Parser.shift`        | `parse.py`  |
| +42.9% |    +9 |   5.2% → 5.7% |   21 → 30 | `Parser.pop`          | `parse.py`  |
| +62.5% |    +5 |   2.0% → 2.5% |    8 → 13 | `(garbage collector)` | `<unknown>` |
| +57.1% |    +4 |   1.7% → 2.1% |    7 → 11 | `Parser.push`         | `parse.py`  |

##### `Driver.parse_tokens` (`driver.py`)

|  Change | Delta |             % |   Samples | Callee                | Location      |
| ------: | ----: | ------------: | --------: | --------------------- | ------------- |
|  +29.1% |  +123 | 82.8% → 86.5% | 423 → 546 | `Parser.addtoken`     | `parse.py`    |
|  +11.5% |    +3 |   5.1% → 4.6% |   26 → 29 | `TokenProxy.__next__` | `driver.py`   |
| +100.0% |    +3 |   0.6% → 1.0% |     3 → 6 | `Parser._addtoken`    | `parse.py`    |
|  +40.0% |    +2 |   1.0% → 1.1% |     5 → 7 | `(garbage collector)` | `<unknown>`   |
|  -25.0% |    -1 |   0.8% → 0.5% |     4 → 3 | `Logger.debug`        | `__init__.py` |

##### `Driver.parse_string` (`driver.py`)

| Change | Delta |      % |   Samples | Callee                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
| +23.5% |  +120 | 100.0% | 511 → 631 | `Driver.parse_tokens` | `driver.py` |

##### `lib2to3_parse` (`parsing.py`)

| Change | Delta |      % |   Samples | Callee                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
| +23.5% |  +120 | 100.0% | 511 → 631 | `Driver.parse_string` | `driver.py` |

##### `Parser.shift` (`parse.py`)

| Change | Delta |             % |   Samples | Callee    | Location    |
| -----: | ----: | ------------: | --------: | --------- | ----------- |
| +49.0% |   +95 | 96.0% → 95.1% | 194 → 289 | `convert` | `pytree.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|  Change | Delta |             % | Samples | Callee     | Location      |
| ------: | ----: | ------------: | ------: | ---------- | ------------- |
|  +32.3% |   +10 |        100.0% | 31 → 41 | `<module>` | `__init__.py` |
| +133.3% |    +4 |  9.7% → 17.1% |   3 → 7 | `<module>` | `cache.py`    |
| +200.0% |    +4 |  6.5% → 14.6% |   2 → 6 | `<module>` | `linegen.py`  |
| +200.0% |    +2 |   3.2% → 7.3% |   1 → 3 | `<module>` | `hashlib.py`  |
|  +40.0% |    +2 | 16.1% → 17.1% |   5 → 7 | `<module>` | `files.py`    |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Callee                      | Location                                 |
| -----: | ----: | ------------: | ------: | --------------------------- | ---------------------------------------- |
| +32.3% |   +10 |        100.0% | 31 → 41 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  -8.3% |    -1 | 38.7% → 26.8% | 12 → 11 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

| Change | Delta |           % | Samples | Callee                      | Location                                 |
| -----: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
| +32.3% |   +10 |      100.0% | 31 → 41 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 2.4% |   0 → 1 | `module_from_spec`          | `<frozen importlib._bootstrap>`          |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|  Change | Delta |           % | Samples | Callee                      | Location                        |
| ------: | ----: | ----------: | ------: | --------------------------- | ------------------------------- |
|  +32.3% |   +10 |      100.0% | 31 → 41 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
|     new |    +2 | 0.0% → 4.9% |   0 → 2 | `_find_spec`                | `<frozen importlib._bootstrap>` |
| removed |    -1 | 3.2% → 0.0% |   1 → 0 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

| Change | Delta |           % | Samples | Callee                               | Location                        |
| -----: | ----: | ----------: | ------: | ------------------------------------ | ------------------------------- |
| +32.3% |   +10 |      100.0% | 31 → 41 | `_find_and_load_unlocked`            | `<frozen importlib._bootstrap>` |
|    new |    +3 | 0.0% → 7.3% |   0 → 3 | `_HierarchicalLockManager.__enter__` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

| Change | Delta |      % | Samples | Callee                | Location                        |
| -----: | ----: | -----: | ------: | --------------------- | ------------------------------- |
| +32.3% |   +10 | 100.0% | 31 → 41 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| +32.3% |   +10 | 100.0% | 31 → 41 | `_get_module_details` | `<frozen runpy>`                |

##### `_get_module_lock` (`<frozen importlib._bootstrap>`)

| Change | Delta |             % | Samples | Callee                | Location    |
| -----: | ----: | ------------: | ------: | --------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `(garbage collector)` | `<unknown>` |

##### `_HierarchicalLockManager.__enter__` (`<frozen importlib._bootstrap>`)

| Change | Delta |             % | Samples | Callee             | Location                        |
| -----: | ----: | ------------: | ------: | ------------------ | ------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `_get_module_lock` | `<frozen importlib._bootstrap>` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |            % | Samples | Callee         | Location                                 |
| -----: | ----: | -----------: | ------: | -------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `_path_isfile` | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `_path_stat`   | `<frozen importlib._bootstrap_external>` |

##### `PathFinder._get_spec` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Callee                 | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `FileFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `PathFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Callee                 | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PathFinder._get_spec` | `<frozen importlib._bootstrap_external>` |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

| Change | Delta |             % | Samples | Callee                 | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PathFinder.find_spec` | `<frozen importlib._bootstrap_external>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

| Change | Delta |      % | Samples | Callee                      | Location                        |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------------------- |
| +20.0% |    +1 | 100.0% |   5 → 6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `ExtensionFileLoader.create_module` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Callee                      | Location                        |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `module_from_spec` (`<frozen importlib._bootstrap>`)

| Change | Delta |             % | Samples | Callee                              | Location                                 |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ExtensionFileLoader.create_module` | `<frozen importlib._bootstrap_external>` |

##### `transform_line` (`linegen.py`)

|  Change | Delta |             % | Samples | Callee                              | Location     |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------ |
|  -95.8% |   -46 |  57.1% → 3.2% |  48 → 2 | `(garbage collector)`               | `<unknown>`  |
|  +33.3% |    +7 | 25.0% → 45.2% | 21 → 28 | `run_transformer`                   | `linegen.py` |
| +250.0% |    +5 |  2.4% → 11.3% |   2 → 7 | `StringTransformer.__init__`        | `trans.py`   |
|  +50.0% |    +4 |  9.5% → 19.4% |  8 → 12 | `_hugging_power_ops_line_to_string` | `linegen.py` |
| +100.0% |    +3 |   3.6% → 9.7% |   3 → 6 | `line_to_string`                    | `lines.py`   |

##### `convert_one_fmt_off_pair` (`comments.py`)

|  Change | Delta |           % | Samples | Callee                                          | Location      |
| ------: | ----: | ----------: | ------: | ----------------------------------------------- | ------------- |
| removed |    -1 | 6.3% → 0.0% |   1 → 0 | `_contains_fmt_skip_comment.<locals>.<genexpr>` | `comments.py` |

##### `normalize_fmt_off` (`comments.py`)

| Change | Delta |      % | Samples | Callee                     | Location      |
| -----: | ----: | -----: | ------: | -------------------------- | ------------- |
| -43.8% |    -7 | 100.0% |  16 → 9 | `convert_one_fmt_off_pair` | `comments.py` |

##### `_stringify_ast` (`parsing.py`)

| Change | Delta |             % | Samples | Callee                           | Location     |
| -----: | ----: | ------------: | ------: | -------------------------------- | ------------ |
|  -5.3% |    -1 | 86.4% → 94.7% | 19 → 18 | `_stringify_ast_with_new_parent` | `parsing.py` |

##### `ParserGenerator.parse` (`pgen.py`)

|  Change | Delta |             % | Samples | Callee                         | Location  |
| ------: | ----: | ------------: | ------: | ------------------------------ | --------- |
|  -66.7% |    -2 | 60.0% → 50.0% |   3 → 1 | `ParserGenerator.parse_rhs`    | `pgen.py` |
| removed |    -2 |  40.0% → 0.0% |   2 → 0 | `ParserGenerator.simplify_dfa` | `pgen.py` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `ParserGenerator.expect`       | `pgen.py` |

##### `ParserGenerator.__init__` (`pgen.py`)

| Change | Delta |      % | Samples | Callee                  | Location  |
| -----: | ----: | -----: | ------: | ----------------------- | --------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `ParserGenerator.parse` | `pgen.py` |

##### `normalize_invisible_parens` (`linegen.py`)

| Change | Delta |             % | Samples | Callee                                | Location     |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ------------ |
| +50.0% |    +1 | 16.7% → 33.3% |   2 → 3 | `wrap_in_parentheses`                 | `nodes.py`   |
|    new |    +1 |  0.0% → 11.1% |   0 → 1 | `maybe_make_parens_invisible_in_atom` | `linegen.py` |
|    new |    +1 |  0.0% → 11.1% |   0 → 1 | `whitespace`                          | `nodes.py`   |

##### `ParserGenerator.parse_rhs` (`pgen.py`)

|  Change | Delta |            % | Samples | Callee                      | Location  |
| ------: | ----: | -----------: | ------: | --------------------------- | --------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ParserGenerator.parse_alt` | `pgen.py` |

##### `ParserGenerator.simplify_dfa` (`pgen.py`)

|  Change | Delta |            % | Samples | Callee                | Location  |
| ------: | ----: | -----------: | ------: | --------------------- | --------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `DFAState.unifystate` | `pgen.py` |

##### `right_hand_split` (`linegen.py`)

| Change | Delta |     % | Samples | Callee                                  | Location     |
| -----: | ----: | ----: | ------: | --------------------------------------- | ------------ |
| -33.3% |    -1 | 50.0% |   3 → 2 | `_maybe_split_omitting_optional_parens` | `linegen.py` |
| -33.3% |    -1 | 50.0% |   3 → 2 | `_first_right_hand_split`               | `linegen.py` |

##### `transform_line.<locals>._rhs` (`linegen.py`)

| Change | Delta |      % | Samples | Callee             | Location     |
| -----: | ----: | -----: | ------: | ------------------ | ------------ |
| -33.3% |    -2 | 100.0% |   6 → 4 | `right_hand_split` | `linegen.py` |

##### `generate_tokens` (`tokenize.py`)

| Change | Delta |            % | Samples | Callee                | Location      |
| -----: | ----: | -----------: | ------: | --------------------- | ------------- |
| +33.3% |    +1 | 8.8% → 12.1% |   3 → 4 | `(garbage collector)` | `<unknown>`   |
|    new |    +1 |  0.0% → 3.0% |   0 → 1 | `is_fstring_start`    | `tokenize.py` |

##### `ParserGenerator.make_first` (`pgen.py`)

| Change | Delta |              % | Samples | Callee                       | Location  |
| -----: | ----: | -------------: | ------: | ---------------------------- | --------- |
| -66.7% |    -2 | 100.0% → 50.0% |   3 → 1 | `ParserGenerator.make_label` | `pgen.py` |

##### `generate_grammar` (`pgen.py`)

| Change | Delta |             % | Samples | Callee                         | Location  |
| -----: | ----: | ------------: | ------: | ------------------------------ | --------- |
| -60.0% |    -3 | 62.5% → 28.6% |   5 → 2 | `ParserGenerator.__init__`     | `pgen.py` |
| +66.7% |    +2 | 37.5% → 71.4% |   3 → 5 | `ParserGenerator.make_grammar` | `pgen.py` |

##### `load_grammar` (`driver.py`)

| Change | Delta |             % | Samples | Callee             | Location     |
| -----: | ----: | ------------: | ------: | ------------------ | ------------ |
| -12.5% |    -1 | 88.9% → 87.5% |   8 → 7 | `generate_grammar` | `pgen.py`    |
|    new |    +1 |  0.0% → 12.5% |   0 → 1 | `Grammar.dump`     | `grammar.py` |

##### `load_packaged_grammar` (`driver.py`)

| Change | Delta |      % | Samples | Callee         | Location    |
| -----: | ----: | -----: | ------: | -------------- | ----------- |
| -11.1% |    -1 | 100.0% |   9 → 8 | `load_grammar` | `driver.py` |

##### `initialize` (`pygram.py`)

| Change | Delta |      % | Samples | Callee                  | Location    |
| -----: | ----: | -----: | ------: | ----------------------- | ----------- |
| -11.1% |    -1 | 100.0% |   9 → 8 | `load_packaged_grammar` | `driver.py` |

##### `<module>` (`nodes.py`)

| Change | Delta |             % | Samples | Callee       | Location    |
| -----: | ----: | ------------: | ------: | ------------ | ----------- |
| -11.1% |    -1 | 69.2% → 66.7% |   9 → 8 | `initialize` | `pygram.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |           % | Samples | Callee                | Location    |
| ------: | ----: | ----------: | ------: | --------------------- | ----------- |
| removed |    -1 | 9.1% → 0.0% |   1 → 0 | `(garbage collector)` | `<unknown>` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Callee                | Location                                 |
| ------: | ----: | ------------: | ------: | --------------------- | ---------------------------------------- |
|   -9.1% |    -1 | 91.7% → 90.9% | 11 → 10 | `_compile_bytecode`   | `<frozen importlib._bootstrap_external>` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `FileLoader.get_data` | `<frozen importlib._bootstrap_external>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `format_file_contents` (`__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `_run_code` ← `_run_module_as_main`

|  Change | Delta |             % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +48.6% |   +90 | 19.3% → 22.9% | 185 → 275 | `(garbage collector)` ← `convert` (`pytree.py`) ← `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|     new |   +59 |   0.0% → 4.9% |    0 → 59 | `(garbage collector)` ← `Leaf.prefix` (`pytree.py`) ← `Line.append` (`lines.py`) ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_power` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                         |
|  +48.7% |   +19 |   4.1% → 4.8% |   39 → 58 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  +55.6% |   +15 |   2.8% → 3.5% |   27 → 42 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  +19.4% |   +12 |   6.5% → 6.2% |   62 → 74 | `get_features_used` (`__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +26.3% |   +10 |          4.0% |   38 → 48 | `parse` (`ast.py`) ← `_parse_single_version` (`parsing.py`) ← `parse_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +160.0% |    +8 |   0.5% → 1.1% |    5 → 13 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| +160.0% |    +8 |   0.5% → 1.1% |    5 → 13 | `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|     new |    +6 |   0.0% → 0.5% |     0 → 6 | `Line.append` (`lines.py`) ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  +71.4% |    +5 |   0.7% → 1.0% |    7 → 12 | `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|     new |    +5 |   0.0% → 0.4% |     0 → 5 | `Line.append` (`lines.py`) ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_power` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` |
|  +57.1% |    +4 |   0.7% → 0.9% |    7 → 11 | `(garbage collector)` ← `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +200.0% |    +4 |   0.2% → 0.5% |     2 → 6 | `transform_line` (`linegen.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `whitespace` (`nodes.py`) ← `Line.append` (`lines.py`) ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +60.0% |    +3 |   0.5% → 0.7% |     5 → 8 | `Parser.push` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +100.0% |    +3 |   0.3% → 0.5% |     3 → 6 | `(garbage collector)` ← `Base.__new__` (`pytree.py`) ← `convert` ← `Parser.shift` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +37.5% |    +3 |   0.8% → 0.9% |    8 → 11 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `_hugging_power_ops_line_to_string` (`linegen.py`) ← `transform_line` ← `_format_str_once` (`__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>`) ← `_run_code` ← `_run_module_as_main`

|  Change | Delta |            % |  Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------: | ----: | -----------: | -------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -95.8% |   -46 |  5.0% → 0.2% |   48 → 2 | `(garbage collector)` ← `transform_line` (`linegen.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -15.5% |   -18 | 12.1% → 8.2% | 116 → 98 | `Parser._addtoken` (`parse.py`) ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -47.6% |   -10 |  2.2% → 0.9% |  21 → 11 | `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -72.7% |    -8 |  1.1% → 0.2% |   11 → 3 | `convert_one_fmt_off_pair` (`comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -37.5% |    -3 |  0.8% → 0.4% |    8 → 5 | `generate_tokens` (`tokenize.py`) ← `Parser.addtoken` (`parse.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -33.3% |    -2 |  0.6% → 0.3% |    6 → 4 | `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -25.0% |    -2 |  0.8% → 0.5% |    8 → 6 | `Parser.pop` (`parse.py`) ← `Parser._addtoken` ← `Parser.addtoken` ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -66.7% |    -2 |  0.3% → 0.1% |    3 → 1 | `ParserGenerator.make_label` (`pgen.py`) ← `ParserGenerator.make_first` ← `ParserGenerator.make_grammar` ← `generate_grammar` ← `load_grammar` (`driver.py`) ← `load_packaged_grammar` ← `initialize` (`pygram.py`) ← `<module>` (`nodes.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`comments.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -25.0% |    -2 |  0.8% → 0.5% |    8 → 6 | `generate_tokens` (`tokenize.py`) ← `TokenProxy.__next__` (`driver.py`) ← `Driver.parse_tokens` ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -33.3% |    -2 |  0.6% → 0.3% |    6 → 4 | `_stringify_ast` (`parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -50.0% |    -2 |  0.4% → 0.2% |    4 → 2 | `Parser._addtoken` (`parse.py`) ← `Logger.debug` (`__init__.py`) ← `Driver.parse_tokens` (`driver.py`) ← `Driver.parse_string` ← `lib2to3_parse` (`parsing.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -66.7% |    -2 |  0.3% → 0.1% |    3 → 1 | `_stringify_ast` (`parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  -66.7% |    -2 |  0.3% → 0.1% |    3 → 1 | `_stringify_ast` (`parsing.py`) ← `assert_equivalent` (`__init__.py`) ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |    -2 |  0.2% → 0.0% |    2 → 0 | `normalize_invisible_parens` (`linegen.py`) ← `LineGenerator.visit_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                       |
| removed |    -2 |  0.2% → 0.0% |    2 → 0 | `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                               |
| removed |    -2 |  0.2% → 0.0% |    2 → 0 | `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_power` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` |
| removed |    -2 |  0.2% → 0.0% |    2 → 0 | `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                  |
| removed |    -2 |  0.2% → 0.0% |    2 → 0 | `Line.append` (`lines.py`) ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed |    -2 |  0.2% → 0.0% |    2 → 0 | `transform_line` (`linegen.py`) ← `run_transformer` ← `transform_line` ← `_format_str_once` (`__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |    -2 |  0.2% → 0.0% |    2 → 0 | `normalize_invisible_parens` (`linegen.py`) ← `LineGenerator.visit_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_simple_stmt` ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_funcdef` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `LineGenerator.visit_suite` ← `Visitor.visit` (`nodes.py`) ← `LineGenerator.visit_stmt` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `Visitor.visit_default` ← `LineGenerator.visit_default` (`linegen.py`) ← `Visitor.visit` (`nodes.py`) ← `_format_str_once` (`__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `pass_context.<locals>.new_func` (`decorators.py`) ← `Context.invoke` (`core.py`) ← `Command.invoke` ← `Command.main` ← `Command.__call__` ← `patched_main` (`__init__.py`) ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code`                                                                                               |

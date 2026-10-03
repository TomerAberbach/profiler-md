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

Functions with the largest increase in samples taken directly in the function body, excluding callees.

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

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

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
|     new |    +4 |   0.0% → 3.4% |   0 → 4 | `__init__.py:1315`        |

##### `Line.append` (`lines.py`)

| Change | Delta |             % | Samples | Location           |
| -----: | ----: | ------------: | ------: | ------------------ |
|    new |   +15 |  0.0% → 45.5% |  0 → 15 | `lines.py:78`      |
| -90.0% |    -9 |  45.5% → 3.0% |  10 → 1 | `lines.py:89 → 67` |
|    new |    +8 |  0.0% → 24.2% |   0 → 8 | `lines.py:84`      |
| -85.7% |    -6 |  31.8% → 3.0% |   7 → 1 | `lines.py:95 → 73` |
| +66.7% |    +2 | 13.6% → 15.2% |   3 → 5 | `lines.py:97 → 75` |

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

|  Change | Delta |            % | Samples | Location           |
| ------: | ----: | -----------: | ------: | ------------------ |
|     new |    +7 | 0.0% → 58.3% |   0 → 7 | `__init__.py:1533` |
|     new |    +5 | 0.0% → 41.7% |   0 → 5 | `__init__.py:1532` |
| removed |    -4 | 57.1% → 0.0% |   4 → 0 | `__init__.py:1547` |
| removed |    -3 | 42.9% → 0.0% |   3 → 0 | `__init__.py:1546` |

##### `Visitor.visit_default` (`nodes.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
|     new |    +6 |  0.0% → 85.7% |   0 → 6 | `nodes.py:180` |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `nodes.py:191` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `nodes.py:176` |

##### `convert` (`pytree.py`)

|  Change | Delta |            % | Samples | Location        |
| ------: | ----: | -----------: | ------: | --------------- |
|     new |    +4 | 0.0% → 57.1% |   0 → 4 | `pytree.py:492` |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `pytree.py:503` |
|     new |    +2 | 0.0% → 28.6% |   0 → 2 | `pytree.py:490` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `pytree.py:501` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `pytree.py:487` |

##### `Parser.push` (`parse.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| +150.0% |    +3 | 28.6% → 45.5% |   2 → 5 | `parse.py:393 → 382` |
| +300.0% |    +3 | 14.3% → 36.4% |   1 → 4 | `parse.py:395 → 384` |
| removed |    -3 |  42.9% → 0.0% |   3 → 0 | `parse.py:396`       |
| +100.0% |    +1 | 14.3% → 18.2% |   1 → 2 | `parse.py:394 → 383` |

##### `run_transformer` (`linegen.py`)

|  Change | Delta |             % | Samples | Location          |
| ------: | ----: | ------------: | ------: | ----------------- |
|     new |    +8 | 0.0% → 100.0% |   0 → 8 | `linegen.py:1782` |
| removed |    -3 |  75.0% → 0.0% |   3 → 0 | `linegen.py:1766` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `linegen.py:1767` |

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
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `parse.py:343` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `parse.py:369` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `parse.py:371` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `parse.py:329` |

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

|  Change | Delta |            % | Samples | Location           |
| ------: | ----: | -----------: | ------: | ------------------ |
|     new |    +6 | 0.0% → 75.0% |   0 → 6 | `__init__.py:1247` |
| removed |    -4 | 66.7% → 0.0% |   4 → 0 | `__init__.py:1268` |
|     new |    +2 | 0.0% → 25.0% |   0 → 2 | `__init__.py:1266` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `__init__.py:1274` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `__init__.py:1279` |

##### `transform_line` (`linegen.py`)

| Change | Delta |             % | Samples | Location         |
| -----: | ----: | ------------: | ------: | ---------------- |
| -66.7% |    -2 | 75.0% → 16.7% |   3 → 1 | `linegen.py:714` |
|    new |    +1 |  0.0% → 16.7% |   0 → 1 | `linegen.py:624` |
|    new |    +1 |  0.0% → 16.7% |   0 → 1 | `linegen.py:626` |
|    new |    +1 |  0.0% → 16.7% |   0 → 1 | `linegen.py:639` |
|    new |    +1 |  0.0% → 16.7% |   0 → 1 | `linegen.py:679` |

##### `format_str` (`__init__.py`)

|  Change | Delta |            % | Samples | Location           |
| ------: | ----: | -----------: | ------: | ------------------ |
|     new |    +3 | 0.0% → 50.0% |   0 → 3 | `__init__.py:1204` |
|     new |    +3 | 0.0% → 50.0% |   0 → 3 | `__init__.py:1211` |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `__init__.py:1225` |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `__init__.py:1232` |

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

|  Change | Delta |            % | Samples | Location          |
| ------: | ----: | -----------: | ------: | ----------------- |
| removed |    -5 | 50.0% → 0.0% |   5 → 0 | `linegen.py:1432` |
|     new |    +2 | 0.0% → 50.0% |   0 → 2 | `linegen.py:1367` |
|     new |    +2 | 0.0% → 50.0% |   0 → 2 | `linegen.py:1448` |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `linegen.py:1339` |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `linegen.py:1351` |

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

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

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

Functions with the largest decrease in total samples taken in the function and all its callees.

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

# Sampling profile diff

Collected 972 samples → 1,136 samples (+164 samples, +16.9%).

| Category          | Change | Delta |             % |   Samples |
| ----------------- | -----: | ----: | ------------: | --------: |
| Ours              |  +9.0% |   +57 | 65.1% → 60.7% | 633 → 690 |
| Garbage collector | +32.5% |  +106 | 33.5% → 38.0% | 326 → 432 |
| Standard library  |  +7.7% |    +1 |   1.3% → 1.2% |   13 → 14 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                             | Location         |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ---------------- |
|  +32.5% |  +106 | 33.5% → 38.0% | 326 → 432 | `(garbage collector)`                | `<unknown>`      |
| +136.4% |   +15 |   1.1% → 2.3% |   11 → 26 | `Parser.pop`                         | `parse.py`       |
|  +33.3% |   +13 |   4.0% → 4.6% |   39 → 52 | `Driver.parse_tokens`                | `driver.py`      |
|   +6.5% |   +10 | 15.7% → 14.3% | 153 → 163 | `Parser._addtoken`                   | `parse.py`       |
|  +23.7% |    +9 |   3.9% → 4.1% |   38 → 47 | `parse`                              | `ast.py`         |
| +300.0% |    +9 |   0.3% → 1.1% |    3 → 12 | `convert`                            | `pytree.py`      |
|     new |    +8 |   0.0% → 0.7% |     0 → 8 | `Leaf.prefix`                        | `pytree.py`      |
| +150.0% |    +6 |   0.4% → 0.9% |    4 → 10 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`       |
|  +20.8% |    +5 |   2.5% → 2.6% |   24 → 29 | `Visitor.visit`                      | `nodes.py`       |
| +125.0% |    +5 |   0.4% → 0.8% |     4 → 9 | `LinesBlock.all_lines`               | `lines.py`       |
| +133.3% |    +4 |   0.3% → 0.6% |     3 → 7 | `whitespace`                         | `nodes.py`       |
|  +50.0% |    +3 |   0.6% → 0.8% |     6 → 9 | `Parser.push`                        | `parse.py`       |
|  +75.0% |    +3 |   0.4% → 0.6% |     4 → 7 | `_FuncBuilder.add_fns_to_class`      | `dataclasses.py` |
|     new |    +3 |   0.0% → 0.3% |     0 → 3 | `Leaf.clone`                         | `pytree.py`      |
|  +13.3% |    +2 |          1.5% |   15 → 17 | `Parser.addtoken`                    | `parse.py`       |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `format_file_in_place`               | `__init__.py`    |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `is_name_token`                      | `nodes.py`       |
|  +20.0% |    +1 |          0.5% |     5 → 6 | `format_str`                         | `__init__.py`    |
|   +1.1% |    +1 |   9.5% → 8.2% |   92 → 93 | `get_features_used`                  | `__init__.py`    |
|   +7.7% |    +1 |   1.3% → 1.2% |   13 → 14 | `Parser.shift`                       | `parse.py`       |

##### Ours

|  Change | Delta |             % |   Samples | Function                             | Location         |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ---------------- |
| +136.4% |   +15 |   1.1% → 2.3% |   11 → 26 | `Parser.pop`                         | `parse.py`       |
|  +33.3% |   +13 |   4.0% → 4.6% |   39 → 52 | `Driver.parse_tokens`                | `driver.py`      |
|   +6.5% |   +10 | 15.7% → 14.3% | 153 → 163 | `Parser._addtoken`                   | `parse.py`       |
|  +23.7% |    +9 |   3.9% → 4.1% |   38 → 47 | `parse`                              | `ast.py`         |
| +300.0% |    +9 |   0.3% → 1.1% |    3 → 12 | `convert`                            | `pytree.py`      |
|     new |    +8 |   0.0% → 0.7% |     0 → 8 | `Leaf.prefix`                        | `pytree.py`      |
| +150.0% |    +6 |   0.4% → 0.9% |    4 → 10 | `EmptyLineTracker.maybe_empty_lines` | `lines.py`       |
|  +20.8% |    +5 |   2.5% → 2.6% |   24 → 29 | `Visitor.visit`                      | `nodes.py`       |
| +125.0% |    +5 |   0.4% → 0.8% |     4 → 9 | `LinesBlock.all_lines`               | `lines.py`       |
| +133.3% |    +4 |   0.3% → 0.6% |     3 → 7 | `whitespace`                         | `nodes.py`       |
|  +50.0% |    +3 |   0.6% → 0.8% |     6 → 9 | `Parser.push`                        | `parse.py`       |
|  +75.0% |    +3 |   0.4% → 0.6% |     4 → 7 | `_FuncBuilder.add_fns_to_class`      | `dataclasses.py` |
|     new |    +3 |   0.0% → 0.3% |     0 → 3 | `Leaf.clone`                         | `pytree.py`      |
|  +13.3% |    +2 |          1.5% |   15 → 17 | `Parser.addtoken`                    | `parse.py`       |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `format_file_in_place`               | `__init__.py`    |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `is_name_token`                      | `nodes.py`       |
|  +20.0% |    +1 |          0.5% |     5 → 6 | `format_str`                         | `__init__.py`    |
|   +1.1% |    +1 |   9.5% → 8.2% |   92 → 93 | `get_features_used`                  | `__init__.py`    |
|   +7.7% |    +1 |   1.3% → 1.2% |   13 → 14 | `Parser.shift`                       | `parse.py`       |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `Base.__new__`                       | `pytree.py`      |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +32.5% |  +106 | 33.5% → 38.0% | 326 → 432 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                            | Location                                 |
| ------: | ----: | ----------: | ------: | ----------------------------------- | ---------------------------------------- |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `FileLoader.get_data`               | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `FileFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `BufferedIncrementalDecoder.decode` | `<frozen codecs>`                        |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Ours

|  Change | Delta |           % | Samples | Function                                                | Location      |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------- | ------------- |
|  -61.1% |   -11 | 1.9% → 0.6% |  18 → 7 | `_stringify_ast`                                        | `parsing.py`  |
|  -38.1% |    -8 | 2.2% → 1.1% | 21 → 13 | `Line.append`                                           | `lines.py`    |
|  -46.2% |    -6 | 1.3% → 0.6% |  13 → 7 | `normalize_invisible_parens`                            | `linegen.py`  |
|  -83.3% |    -5 | 0.6% → 0.1% |   6 → 1 | `_stringify_ast_with_new_parent`                        | `parsing.py`  |
|  -71.4% |    -5 | 0.7% → 0.2% |   7 → 2 | `line_to_string`                                        | `lines.py`    |
|  -57.1% |    -4 | 0.7% → 0.3% |   7 → 3 | `LineGenerator.visit_power`                             | `linegen.py`  |
|  -37.5% |    -3 | 0.8% → 0.4% |   8 → 5 | `_format_str_once`                                      | `__init__.py` |
|  -37.5% |    -3 | 0.8% → 0.4% |   8 → 5 | `wrap_in_parentheses`                                   | `nodes.py`    |
|  -28.6% |    -2 | 0.7% → 0.4% |   7 → 5 | `transform_line`                                        | `linegen.py`  |
|  -66.7% |    -2 | 0.3% → 0.1% |   3 → 1 | `Line.contains_implicit_multiline_string_with_comments` | `lines.py`    |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `Line.comments_after`                                   | `lines.py`    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `lib2to3_parse`                                         | `parsing.py`  |
|  -33.3% |    -1 | 0.3% → 0.2% |   3 → 2 | `assert_stable`                                         | `__init__.py` |
|  -16.7% |    -1 | 0.6% → 0.4% |   6 → 5 | `assert_equivalent`                                     | `__init__.py` |
|   -3.6% |    -1 | 2.9% → 2.4% | 28 → 27 | `generate_tokens`                                       | `tokenize.py` |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `TokenProxy.__next__`                                   | `driver.py`   |
|  -12.5% |    -1 | 0.8% → 0.6% |   8 → 7 | `Visitor.visit_default`                                 | `nodes.py`    |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `_first_right_hand_split`                               | `linegen.py`  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<module>`                                              | `__init__.py` |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `_parse`                                                | `_parser.py`  |

##### Standard library

|  Change | Delta |           % | Samples | Function                          | Location                                 |
| ------: | ----: | ----------: | ------: | --------------------------------- | ---------------------------------------- |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `PathFinder.find_spec`            | `<frozen importlib._bootstrap_external>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `PathFinder._path_importer_cache` | `<frozen importlib._bootstrap_external>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `Parser.pop` (`parse.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| +100.0% |    +5 | 45.5% → 38.5% |  5 → 10 | `parse.py:404 → 392` |
| +150.0% |    +3 | 18.2% → 19.2% |   2 → 5 | `parse.py:406 → 394` |
| +150.0% |    +3 | 18.2% → 19.2% |   2 → 5 | `parse.py:408 → 396` |
|     new |    +3 |  0.0% → 11.5% |   0 → 3 | `parse.py:393`       |
|  -50.0% |    -1 |  18.2% → 3.8% |   2 → 1 | `parse.py:407 → 395` |

##### `Driver.parse_tokens` (`driver.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
|  +63.6% |   +14 | 56.4% → 69.2% | 22 → 36 | `driver.py:162` |
|  +44.4% |    +4 | 23.1% → 25.0% |  9 → 13 | `driver.py:128` |
| removed |    -1 |   2.6% → 0.0% |   1 → 0 | `driver.py:130` |
| removed |    -1 |   2.6% → 0.0% |   1 → 0 | `driver.py:140` |
| removed |    -1 |   2.6% → 0.0% |   1 → 0 | `driver.py:151` |

##### `Parser._addtoken` (`parse.py`)

|  Change | Delta |            % | Samples | Location             |
| ------: | ----: | -----------: | ------: | -------------------- |
|  -96.9% |   -31 | 20.9% → 0.6% |  32 → 1 | `parse.py:311`       |
| +114.3% |   +16 | 9.2% → 18.4% | 14 → 30 | `parse.py:299`       |
| removed |   -13 |  8.5% → 0.0% |  13 → 0 | `parse.py:305`       |
|     new |   +12 |  0.0% → 7.4% |  0 → 12 | `parse.py:281`       |
| +266.7% |    +8 |  2.0% → 6.7% |  3 → 11 | `parse.py:295 → 283` |

##### `parse` (`ast.py`)

| Change | Delta |      % | Samples | Location    |
| -----: | ----: | -----: | ------: | ----------- |
| +23.7% |    +9 | 100.0% | 38 → 47 | `ast.py:46` |

##### `convert` (`pytree.py`)

|  Change | Delta |            % | Samples | Location        |
| ------: | ----: | -----------: | ------: | --------------- |
|     new |    +4 | 0.0% → 33.3% |   0 → 4 | `pytree.py:490` |
|     new |    +4 | 0.0% → 33.3% |   0 → 4 | `pytree.py:492` |
|     new |    +2 | 0.0% → 16.7% |   0 → 2 | `pytree.py:489` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `pytree.py:499` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `pytree.py:500` |

##### `Leaf.prefix` (`pytree.py`)

| Change | Delta |             % | Samples | Location        |
| -----: | ----: | ------------: | ------: | --------------- |
|    new |    +8 | 0.0% → 100.0% |   0 → 8 | `pytree.py:467` |

##### `EmptyLineTracker.maybe_empty_lines` (`lines.py`)

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
|     new |    +8 | 0.0% → 80.0% |   0 → 8 | `lines.py:560` |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `lines.py:571` |
|     new |    +2 | 0.0% → 20.0% |   0 → 2 | `lines.py:573` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `lines.py:584` |

##### `Visitor.visit` (`nodes.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
|  +50.0% |    +5 | 41.7% → 51.7% | 10 → 15 | `nodes.py:183 → 172` |
| removed |    -3 |  12.5% → 0.0% |   3 → 0 | `nodes.py:181`       |
|  +33.3% |    +3 | 37.5% → 41.4% |  9 → 12 | `nodes.py:185 → 174` |

##### `LinesBlock.all_lines` (`lines.py`)

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
|     new |    +7 | 0.0% → 77.8% |   0 → 7 | `lines.py:528` |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `lines.py:539` |
|     new |    +2 | 0.0% → 22.2% |   0 → 2 | `lines.py:530` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `lines.py:541` |

##### `whitespace` (`nodes.py`)

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
|     new |    +5 | 0.0% → 71.4% |   0 → 5 | `nodes.py:360` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `nodes.py:201` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `nodes.py:223` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `nodes.py:427` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `nodes.py:202` |

##### `Parser.push` (`parse.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| +300.0% |    +3 | 16.7% → 44.4% |   1 → 4 | `parse.py:396 → 384` |
|     new |    +3 |  0.0% → 33.3% |   0 → 3 | `parse.py:382`       |
|  -66.7% |    -2 | 50.0% → 11.1% |   3 → 1 | `parse.py:395 → 383` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `parse.py:386`       |

##### `_FuncBuilder.add_fns_to_class` (`dataclasses.py`)

| Change | Delta |      % | Samples | Location             |
| -----: | ----: | -----: | ------: | -------------------- |
| +75.0% |    +3 | 100.0% |   4 → 7 | `dataclasses.py:499` |

##### `Leaf.clone` (`pytree.py`)

| Change | Delta |            % | Samples | Location        |
| -----: | ----: | -----------: | ------: | --------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `pytree.py:444` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `pytree.py:448` |

##### `Parser.addtoken` (`parse.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
|     new |   +17 | 0.0% → 100.0% |  0 → 17 | `parse.py:240` |
| removed |   -13 |  86.7% → 0.0% |  13 → 0 | `parse.py:252` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `parse.py:245` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `parse.py:246` |

##### `format_file_in_place` (`__init__.py`)

| Change | Delta |             % | Samples | Location          |
| -----: | ----: | ------------: | ------: | ----------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `__init__.py:962` |

##### `is_name_token` (`nodes.py`)

| Change | Delta |             % | Samples | Location       |
| -----: | ----: | ------------: | ------: | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `nodes.py:975` |

##### `format_str` (`__init__.py`)

|  Change | Delta |            % | Samples | Location           |
| ------: | ----: | -----------: | ------: | ------------------ |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `__init__.py:1225` |
|     new |    +3 | 0.0% → 50.0% |   0 → 3 | `__init__.py:1204` |
|     new |    +3 | 0.0% → 50.0% |   0 → 3 | `__init__.py:1211` |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `__init__.py:1232` |

##### `get_features_used` (`__init__.py`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
|  +55.0% |   +11 | 21.7% → 33.3% | 20 → 31 | `__init__.py:1335 → 1314` |
|  -41.2% |    -7 | 18.5% → 10.8% | 17 → 10 | `__init__.py:1440 → 1419` |
| +250.0% |    +5 |   2.2% → 7.5% |   2 → 7 | `__init__.py:1345 → 1324` |
|     new |    +4 |   0.0% → 4.3% |   0 → 4 | `__init__.py:1346`        |
|  -75.0% |    -3 |   4.3% → 1.1% |   4 → 1 | `__init__.py:1339`        |

##### `Parser.shift` (`parse.py`)

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
|     new |   +12 | 0.0% → 85.7% |  0 → 12 | `parse.py:369` |
| removed |   -11 | 84.6% → 0.0% |  11 → 0 | `parse.py:381` |
| removed |    -2 | 15.4% → 0.0% |   2 → 0 | `parse.py:383` |
|     new |    +1 |  0.0% → 7.1% |   0 → 1 | `parse.py:361` |
|     new |    +1 |  0.0% → 7.1% |   0 → 1 | `parse.py:372` |

##### `Base.__new__` (`pytree.py`)

| Change | Delta |             % | Samples | Location       |
| -----: | ----: | ------------: | ------: | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `pytree.py:73` |

##### `FileLoader.get_data` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |            % | Samples | Location                                     |
| -----: | ----: | -----------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `<frozen importlib._bootstrap_external>:923` |

##### `FileFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

| Change | Delta |             % | Samples | Location                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<frozen importlib._bootstrap_external>:1393` |

##### `BufferedIncrementalDecoder.decode` (`<frozen codecs>`)

| Change | Delta |             % | Samples | Location              |
| -----: | ----: | ------------: | ------: | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<frozen codecs>:325` |

##### `_stringify_ast` (`parsing.py`)

|  Change | Delta |            % | Samples | Location         |
| ------: | ----: | -----------: | ------: | ---------------- |
| removed |    -9 | 50.0% → 0.0% |   9 → 0 | `parsing.py:214` |
| removed |    -6 | 33.3% → 0.0% |   6 → 0 | `parsing.py:217` |
|     new |    +3 | 0.0% → 42.9% |   0 → 3 | `parsing.py:222` |
|     new |    +3 | 0.0% → 42.9% |   0 → 3 | `parsing.py:225` |
| removed |    -2 | 11.1% → 0.0% |   2 → 0 | `parsing.py:185` |

##### `Line.append` (`lines.py`)

|  Change | Delta |            % | Samples | Location      |
| ------: | ----: | -----------: | ------: | ------------- |
| removed |    -8 | 38.1% → 0.0% |   8 → 0 | `lines.py:89` |
| +700.0% |    +7 | 4.8% → 61.5% |   1 → 8 | `lines.py:78` |
| removed |    -5 | 23.8% → 0.0% |   5 → 0 | `lines.py:95` |
| removed |    -2 |  9.5% → 0.0% |   2 → 0 | `lines.py:86` |
|     new |    +2 | 0.0% → 15.4% |   0 → 2 | `lines.py:65` |

##### `normalize_invisible_parens` (`linegen.py`)

|  Change | Delta |            % | Samples | Location          |
| ------: | ----: | -----------: | ------: | ----------------- |
| removed |    -6 | 46.2% → 0.0% |   6 → 0 | `linegen.py:1432` |
|     new |    +4 | 0.0% → 57.1% |   0 → 4 | `linegen.py:1448` |
| removed |    -2 | 15.4% → 0.0% |   2 → 0 | `linegen.py:1406` |
| removed |    -2 | 15.4% → 0.0% |   2 → 0 | `linegen.py:1431` |
|     new |    +2 | 0.0% → 28.6% |   0 → 2 | `linegen.py:1355` |

##### `_stringify_ast_with_new_parent` (`parsing.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
| removed |    -5 |  83.3% → 0.0% |   5 → 0 | `parsing.py:170` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `parsing.py:166` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `parsing.py:178` |

##### `line_to_string` (`lines.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
| removed |    -7 | 100.0% → 0.0% |   7 → 0 | `lines.py:1078` |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `lines.py:1067` |

##### `LineGenerator.visit_power` (`linegen.py`)

|  Change | Delta |              % | Samples | Location         |
| ------: | ----: | -------------: | ------: | ---------------- |
|  -50.0% |    -3 | 85.7% → 100.0% |   6 → 3 | `linegen.py:363` |
| removed |    -1 |   14.3% → 0.0% |   1 → 0 | `linegen.py:342` |

##### `_format_str_once` (`__init__.py`)

|  Change | Delta |            % | Samples | Location           |
| ------: | ----: | -----------: | ------: | ------------------ |
| removed |    -5 | 62.5% → 0.0% |   5 → 0 | `__init__.py:1268` |
|     new |    +4 | 0.0% → 80.0% |   0 → 4 | `__init__.py:1247` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `__init__.py:1269` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `__init__.py:1271` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `__init__.py:1274` |

##### `wrap_in_parentheses` (`nodes.py`)

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
|     new |    +3 | 0.0% → 60.0% |   0 → 3 | `nodes.py:941` |
| removed |    -2 | 25.0% → 0.0% |   2 → 0 | `nodes.py:948` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `nodes.py:945` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `nodes.py:946` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `nodes.py:947` |

##### `transform_line` (`linegen.py`)

|  Change | Delta |            % | Samples | Location         |
| ------: | ----: | -----------: | ------: | ---------------- |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `linegen.py:601` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `linegen.py:715` |

##### `Line.contains_implicit_multiline_string_with_comments` (`lines.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
| removed |    -2 |  66.7% → 0.0% |   2 → 0 | `lines.py:263` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `lines.py:274` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `lines.py:252` |

##### `Line.comments_after` (`lines.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `lines.py:431` |

##### `lib2to3_parse` (`parsing.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `parsing.py:65` |

##### `assert_stable` (`__init__.py`)

|  Change | Delta |             % | Samples | Location           |
| ------: | ----: | ------------: | ------: | ------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `__init__.py:1571` |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `__init__.py:1557` |

##### `assert_equivalent` (`__init__.py`)

|  Change | Delta |            % | Samples | Location           |
| ------: | ----: | -----------: | ------: | ------------------ |
| removed |    -4 | 66.7% → 0.0% |   4 → 0 | `__init__.py:1546` |
|     new |    +3 | 0.0% → 60.0% |   0 → 3 | `__init__.py:1533` |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `__init__.py:1547` |
|     new |    +2 | 0.0% → 40.0% |   0 → 2 | `__init__.py:1532` |

##### `generate_tokens` (`tokenize.py`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
|  +37.5% |    +3 | 28.6% → 40.7% |  8 → 11 | `tokenize.py:875 → 864` |
|  -25.0% |    -2 | 28.6% → 22.2% |   8 → 6 | `tokenize.py:624 → 613` |
| removed |    -2 |   7.1% → 0.0% |   2 → 0 | `tokenize.py:972`       |
| removed |    -1 |   3.6% → 0.0% |   1 → 0 | `tokenize.py:626`       |
| removed |    -1 |   3.6% → 0.0% |   1 → 0 | `tokenize.py:704`       |

##### `TokenProxy.__next__` (`driver.py`)

| Change | Delta |      % | Samples | Location       |
| -----: | ----: | -----: | ------: | -------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `driver.py:92` |

##### `Visitor.visit_default` (`nodes.py`)

|  Change | Delta |            % | Samples | Location       |
| ------: | ----: | -----------: | ------: | -------------- |
| removed |    -5 | 62.5% → 0.0% |   5 → 0 | `nodes.py:191` |
|     new |    +4 | 0.0% → 57.1% |   0 → 4 | `nodes.py:180` |
| removed |    -3 | 37.5% → 0.0% |   3 → 0 | `nodes.py:187` |
|     new |    +3 | 0.0% → 42.9% |   0 → 3 | `nodes.py:176` |

##### `_first_right_hand_split` (`linegen.py`)

| Change | Delta |      % | Samples | Location         |
| -----: | ----: | -----: | ------: | ---------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `linegen.py:918` |

##### `<module>` (`__init__.py`)

|  Change | Delta |             % | Samples | Location          |
| ------: | ----: | ------------: | ------: | ----------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `__init__.py:490` |

##### `_parse` (`_parser.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `_parser.py:529` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `_parser.py:855` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `_parser.py:715` |

##### `PathFinder.find_spec` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<frozen importlib._bootstrap_external>:1270` |

##### `PathFinder._path_importer_cache` (`<frozen importlib._bootstrap_external>`)

|  Change | Delta |             % | Samples | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<frozen importlib._bootstrap_external>:1229` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |     Samples | Function                         | Location         |
| -----: | ----: | ------------: | ----------: | -------------------------------- | ---------------- |
| +19.4% |  +167 | 88.7% → 90.6% | 862 → 1,029 | `_format_str_once`               | `__init__.py`    |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `reformat_one`                   | `__init__.py`    |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `main`                           | `__init__.py`    |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `pass_context.<locals>.new_func` | `decorators.py`  |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `Context.invoke`                 | `core.py`        |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `Command.invoke`                 | `core.py`        |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `Command.main`                   | `core.py`        |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `Command.__call__`               | `core.py`        |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `patched_main`                   | `__init__.py`    |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `<module>`                       | `__main__.py`    |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `_run_module_code`               | `<frozen runpy>` |
| +17.5% |  +165 | 97.2% → 97.7% | 945 → 1,110 | `format_file_in_place`           | `__init__.py`    |
| +16.9% |  +164 |        100.0% | 972 → 1,136 | `_run_code`                      | `<frozen runpy>` |
| +16.9% |  +164 |        100.0% | 972 → 1,136 | `run_module`                     | `<frozen runpy>` |
| +16.9% |  +164 |        100.0% | 972 → 1,136 | `_run_module_as_main`            | `<frozen runpy>` |
| +17.1% |  +162 | 97.2% → 97.4% | 945 → 1,107 | `format_file_contents`           | `__init__.py`    |
| +25.2% |  +127 | 51.9% → 55.5% |   504 → 631 | `Driver.parse_tokens`            | `driver.py`      |
| +25.2% |  +127 | 51.9% → 55.5% |   504 → 631 | `Driver.parse_string`            | `driver.py`      |
| +25.0% |  +126 | 52.0% → 55.5% |   505 → 631 | `lib2to3_parse`                  | `parsing.py`     |
| +27.9% |  +119 | 43.9% → 48.1% |   427 → 546 | `Parser.addtoken`                | `parse.py`       |

##### Ours

| Change | Delta |             % |     Samples | Function                          | Location        |
| -----: | ----: | ------------: | ----------: | --------------------------------- | --------------- |
| +19.4% |  +167 | 88.7% → 90.6% | 862 → 1,029 | `_format_str_once`                | `__init__.py`   |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `reformat_one`                    | `__init__.py`   |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `main`                            | `__init__.py`   |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `pass_context.<locals>.new_func`  | `decorators.py` |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `Context.invoke`                  | `core.py`       |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `Command.invoke`                  | `core.py`       |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `Command.main`                    | `core.py`       |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `Command.__call__`                | `core.py`       |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `patched_main`                    | `__init__.py`   |
| +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `<module>`                        | `__main__.py`   |
| +17.5% |  +165 | 97.2% → 97.7% | 945 → 1,110 | `format_file_in_place`            | `__init__.py`   |
| +17.1% |  +162 | 97.2% → 97.4% | 945 → 1,107 | `format_file_contents`            | `__init__.py`   |
| +25.2% |  +127 | 51.9% → 55.5% |   504 → 631 | `Driver.parse_tokens`             | `driver.py`     |
| +25.2% |  +127 | 51.9% → 55.5% |   504 → 631 | `Driver.parse_string`             | `driver.py`     |
| +25.0% |  +126 | 52.0% → 55.5% |   505 → 631 | `lib2to3_parse`                   | `parsing.py`    |
| +27.9% |  +119 | 43.9% → 48.1% |   427 → 546 | `Parser.addtoken`                 | `parse.py`      |
| +28.6% |  +116 | 41.7% → 45.9% |   405 → 521 | `Parser._addtoken`                | `parse.py`      |
| +22.8% |   +94 | 42.4% → 44.5% |   412 → 506 | `assert_stable`                   | `__init__.py`   |
| +18.3% |   +89 | 50.1% → 50.7% |   487 → 576 | `check_stability_and_equivalence` | `__init__.py`   |
| +15.9% |   +73 | 47.1% → 46.7% |   458 → 531 | `format_str`                      | `__init__.py`   |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +32.5% |  +106 | 33.5% → 38.0% | 326 → 432 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |             % |     Samples | Function                            | Location                                 |
| ------: | ----: | ------------: | ----------: | ----------------------------------- | ---------------------------------------- |
|  +17.6% |  +166 | 97.2% → 97.8% | 945 → 1,111 | `_run_module_code`                  | `<frozen runpy>`                         |
|  +16.9% |  +164 |        100.0% | 972 → 1,136 | `_run_code`                         | `<frozen runpy>`                         |
|  +16.9% |  +164 |        100.0% | 972 → 1,136 | `run_module`                        | `<frozen runpy>`                         |
|  +16.9% |  +164 |        100.0% | 972 → 1,136 | `_run_module_as_main`               | `<frozen runpy>`                         |
|  +33.3% |    +1 |   0.3% → 0.4% |       3 → 4 | `_handle_fromlist`                  | `<frozen importlib._bootstrap>`          |
| +100.0% |    +1 |   0.1% → 0.2% |       1 → 2 | `FileLoader.get_data`               | `<frozen importlib._bootstrap_external>` |
|     new |    +1 |   0.0% → 0.1% |       0 → 1 | `FileFinder.find_spec`              | `<frozen importlib._bootstrap_external>` |
|     new |    +1 |   0.0% → 0.1% |       0 → 1 | `BufferedIncrementalDecoder.decode` | `<frozen codecs>`                        |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |           % | Samples | Function                                                | Location                                 |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------- | ---------------------------------------- |
| -66.7% |   -16 | 2.5% → 0.7% |  24 → 8 | `_stringify_ast`                                        | `parsing.py`                             |
| -65.2% |   -15 | 2.4% → 0.7% |  23 → 8 | `_stringify_ast_with_new_parent`                        | `parsing.py`                             |
| -23.3% |    -7 | 3.1% → 2.0% | 30 → 23 | `TokenProxy.__next__`                                   | `driver.py`                              |
| -31.8% |    -7 | 2.3% → 1.3% | 22 → 15 | `normalize_invisible_parens`                            | `linegen.py`                             |
|  -7.1% |    -5 | 7.2% → 5.7% | 70 → 65 | `assert_equivalent`                                     | `__init__.py`                            |
| -14.3% |    -5 | 3.6% → 2.6% | 35 → 30 | `generate_tokens`                                       | `tokenize.py`                            |
| -11.4% |    -4 | 3.6% → 2.7% | 35 → 31 | `LineGenerator.visit_power`                             | `linegen.py`                             |
| -60.0% |    -3 | 0.5% → 0.2% |   5 → 2 | `_compile`                                              | `__init__.py`                            |
| -60.0% |    -3 | 0.5% → 0.2% |   5 → 2 | `compile`                                               | `__init__.py`                            |
| -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `<module>`                                              | `gitignore.py`                           |
| -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `Line.contains_implicit_multiline_string_with_comments` | `lines.py`                               |
| -25.0% |    -2 | 0.8% → 0.5% |   8 → 6 | `line_to_string`                                        | `lines.py`                               |
|  -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_LoaderBasics.exec_module`                             | `<frozen importlib._bootstrap_external>` |
|  -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_load_unlocked`                                        | `<frozen importlib._bootstrap>`          |
|  -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_find_and_load_unlocked`                               | `<frozen importlib._bootstrap>`          |
|  -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_find_and_load`                                        | `<frozen importlib._bootstrap>`          |
|  -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `<module>`                                              | `__init__.py`                            |
|  -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_call_with_frames_removed`                             | `<frozen importlib._bootstrap>`          |
|  -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_get_module_details`                                   | `<frozen runpy>`                         |
| -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `compile`                                               | `_compiler.py`                           |

##### Ours

|  Change | Delta |           % | Samples | Function                                                | Location       |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------- | -------------- |
|  -66.7% |   -16 | 2.5% → 0.7% |  24 → 8 | `_stringify_ast`                                        | `parsing.py`   |
|  -65.2% |   -15 | 2.4% → 0.7% |  23 → 8 | `_stringify_ast_with_new_parent`                        | `parsing.py`   |
|  -23.3% |    -7 | 3.1% → 2.0% | 30 → 23 | `TokenProxy.__next__`                                   | `driver.py`    |
|  -31.8% |    -7 | 2.3% → 1.3% | 22 → 15 | `normalize_invisible_parens`                            | `linegen.py`   |
|   -7.1% |    -5 | 7.2% → 5.7% | 70 → 65 | `assert_equivalent`                                     | `__init__.py`  |
|  -14.3% |    -5 | 3.6% → 2.6% | 35 → 30 | `generate_tokens`                                       | `tokenize.py`  |
|  -11.4% |    -4 | 3.6% → 2.7% | 35 → 31 | `LineGenerator.visit_power`                             | `linegen.py`   |
|  -60.0% |    -3 | 0.5% → 0.2% |   5 → 2 | `_compile`                                              | `__init__.py`  |
|  -60.0% |    -3 | 0.5% → 0.2% |   5 → 2 | `compile`                                               | `__init__.py`  |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `<module>`                                              | `gitignore.py` |
|  -75.0% |    -3 | 0.4% → 0.1% |   4 → 1 | `Line.contains_implicit_multiline_string_with_comments` | `lines.py`     |
|  -25.0% |    -2 | 0.8% → 0.5% |   8 → 6 | `line_to_string`                                        | `lines.py`     |
|   -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `<module>`                                              | `__init__.py`  |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `compile`                                               | `_compiler.py` |
|  -66.7% |    -2 | 0.3% → 0.1% |   3 → 1 | `<module>`                                              | `agg.py`       |
|  -50.0% |    -2 | 0.4% → 0.2% |   4 → 2 | `<module>`                                              | `nodes.py`     |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `LineGenerator.visit_factor`                            | `linegen.py`   |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `Line.comments_after`                                   | `lines.py`     |
|  -16.7% |    -1 | 0.6% → 0.4% |   6 → 5 | `_first_right_hand_split`                               | `linegen.py`   |
|   -2.6% |    -1 | 3.9% → 3.3% | 38 → 37 | `Line.append`                                           | `lines.py`     |

##### Standard library

|  Change | Delta |           % | Samples | Function                          | Location                                 |
| ------: | ----: | ----------: | ------: | --------------------------------- | ---------------------------------------- |
|   -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_LoaderBasics.exec_module`       | `<frozen importlib._bootstrap_external>` |
|   -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_load_unlocked`                  | `<frozen importlib._bootstrap>`          |
|   -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_find_and_load_unlocked`         | `<frozen importlib._bootstrap>`          |
|   -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_find_and_load`                  | `<frozen importlib._bootstrap>`          |
|   -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_call_with_frames_removed`       | `<frozen importlib._bootstrap>`          |
|   -7.4% |    -2 | 2.8% → 2.2% | 27 → 25 | `_get_module_details`             | `<frozen runpy>`                         |
|  -10.0% |    -1 | 1.0% → 0.8% |  10 → 9 | `_compile_bytecode`               | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `PathFinder.find_spec`            | `<frozen importlib._bootstrap_external>` |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `_find_spec`                      | `<frozen importlib._bootstrap>`          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `PathFinder._path_importer_cache` | `<frozen importlib._bootstrap_external>` |

# Sampling profile diff

Collected 255 samples → 214 samples (-41 samples, -16.1%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Ours             | -17.3% |   -42 | 95.3% → 93.9% | 243 → 201 |
| Unknown          |  +9.1% |    +1 |   4.3% → 5.6% |   11 → 12 |
| Standard library |   0.0% |     0 |   0.4% → 0.5% |         1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                           | Location                        |
| ------: | ----: | ----------: | ------: | -------------------------------------------------- | ------------------------------- |
| +100.0% |    +7 | 2.7% → 6.5% |  7 → 14 | `_stringify_ast`                                   | `black/parsing.py`              |
| +150.0% |    +6 | 1.6% → 4.7% |  4 → 10 | `visit`                                            | `black/nodes.py`                |
|     new |    +3 | 0.0% → 1.4% |   0 → 3 | `_hugging_power_ops_line_to_string`                | `black/linegen.py`              |
|  +60.0% |    +3 | 2.0% → 3.7% |   5 → 8 | `<genexpr>`                                        | `black/lines.py`                |
|  +33.3% |    +2 | 2.4% → 3.7% |   6 → 8 | `get_features_used`                                | `black/__init__.py`             |
| +100.0% |    +2 | 0.8% → 1.9% |   2 → 4 | `maybe_empty_lines`                                | `black/lines.py`                |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `check_stability_and_equivalence`                  | `black/__init__.py`             |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `cast`                                             | `typing.py`                     |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `is_class`                                         | `black/lines.py`                |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `contains_implicit_multiline_string_with_comments` | `black/lines.py`                |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `_compile`                                         | `re/__init__.py`                |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `append_comment`                                   | `black/lines.py`                |
| +100.0% |    +1 | 0.4% → 0.9% |   1 → 2 | `assert_equivalent`                                | `black/__init__.py`             |
| +100.0% |    +1 | 0.4% → 0.9% |   1 → 2 | `prev_sibling`                                     | `blib2to3/pytree.py`            |
|  +50.0% |    +1 | 0.8% → 1.4% |   2 → 3 | `visit_default`                                    | `black/nodes.py`                |
|  +50.0% |    +1 | 0.8% → 1.4% |   2 → 3 | `pop`                                              | `blib2to3/pgen2/parse.py`       |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `_find_and_load_unlocked`                          | `<frozen importlib._bootstrap>` |
|   +6.7% |    +1 | 5.9% → 7.5% | 15 → 16 | `__init__`                                         | `blib2to3/pytree.py`            |
|  +50.0% |    +1 | 0.8% → 1.4% |   2 → 3 | `normalize_invisible_parens`                       | `black/linegen.py`              |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `delimiter_split`                                  | `black/linegen.py`              |

##### Ours

|  Change | Delta |           % | Samples | Function                                           | Location                  |
| ------: | ----: | ----------: | ------: | -------------------------------------------------- | ------------------------- |
| +100.0% |    +7 | 2.7% → 6.5% |  7 → 14 | `_stringify_ast`                                   | `black/parsing.py`        |
| +150.0% |    +6 | 1.6% → 4.7% |  4 → 10 | `visit`                                            | `black/nodes.py`          |
|     new |    +3 | 0.0% → 1.4% |   0 → 3 | `_hugging_power_ops_line_to_string`                | `black/linegen.py`        |
|  +60.0% |    +3 | 2.0% → 3.7% |   5 → 8 | `<genexpr>`                                        | `black/lines.py`          |
|  +33.3% |    +2 | 2.4% → 3.7% |   6 → 8 | `get_features_used`                                | `black/__init__.py`       |
| +100.0% |    +2 | 0.8% → 1.9% |   2 → 4 | `maybe_empty_lines`                                | `black/lines.py`          |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `check_stability_and_equivalence`                  | `black/__init__.py`       |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `cast`                                             | `typing.py`               |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `is_class`                                         | `black/lines.py`          |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `contains_implicit_multiline_string_with_comments` | `black/lines.py`          |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `_compile`                                         | `re/__init__.py`          |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `append_comment`                                   | `black/lines.py`          |
| +100.0% |    +1 | 0.4% → 0.9% |   1 → 2 | `assert_equivalent`                                | `black/__init__.py`       |
| +100.0% |    +1 | 0.4% → 0.9% |   1 → 2 | `prev_sibling`                                     | `blib2to3/pytree.py`      |
|  +50.0% |    +1 | 0.8% → 1.4% |   2 → 3 | `visit_default`                                    | `black/nodes.py`          |
|  +50.0% |    +1 | 0.8% → 1.4% |   2 → 3 | `pop`                                              | `blib2to3/pgen2/parse.py` |
|   +6.7% |    +1 | 5.9% → 7.5% | 15 → 16 | `__init__`                                         | `blib2to3/pytree.py`      |
|  +50.0% |    +1 | 0.8% → 1.4% |   2 → 3 | `normalize_invisible_parens`                       | `black/linegen.py`        |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `delimiter_split`                                  | `black/linegen.py`        |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `line_to_string`                                   | `black/lines.py`          |

##### Unknown

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
|  +9.1% |    +1 | 4.3% → 5.6% | 11 → 12 | `(anonymous)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

##### Ours

|  Change | Delta |           % | Samples | Function                   | Location                     |
| ------: | ----: | ----------: | ------: | -------------------------- | ---------------------------- |
|  -42.1% |    -8 | 7.5% → 5.1% | 19 → 11 | `_addtoken`                | `blib2to3/pgen2/parse.py`    |
|  -53.3% |    -8 | 5.9% → 3.3% |  15 → 7 | `__str__`                  | `black/lines.py`             |
|  -77.8% |    -7 | 3.5% → 0.9% |   9 → 2 | `parse_tokens`             | `blib2to3/pgen2/driver.py`   |
| removed |    -6 | 2.4% → 0.0% |   6 → 0 | `append`                   | `black/lines.py`             |
|  -66.7% |    -6 | 3.5% → 1.4% |   9 → 3 | `generate_comments`        | `black/comments.py`          |
|  -26.3% |    -5 | 7.5% → 6.5% | 19 → 14 | `generate_tokens`          | `blib2to3/pgen2/tokenize.py` |
|  -57.1% |    -4 | 2.7% → 1.4% |   7 → 3 | `transform_line`           | `black/linegen.py`           |
| removed |    -3 | 1.2% → 0.0% |   3 → 0 | `_maybe_empty_lines`       | `black/lines.py`             |
|  -60.0% |    -3 | 2.0% → 0.9% |   5 → 2 | `whitespace`               | `black/nodes.py`             |
|  -50.0% |    -3 | 2.4% → 1.4% |   6 → 3 | `convert`                  | `blib2to3/pytree.py`         |
| removed |    -3 | 1.2% → 0.0% |   3 → 0 | `visit_power`              | `black/linegen.py`           |
| removed |    -3 | 1.2% → 0.0% |   3 → 0 | `dump`                     | `blib2to3/pgen2/grammar.py`  |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `_format_str_once`         | `black/__init__.py`          |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `format_str`               | `black/__init__.py`          |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `is_docstring`             | `black/lines.py`             |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `convert_one_fmt_off_pair` | `black/comments.py`          |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `__next__`                 | `blib2to3/pgen2/driver.py`   |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `shift`                    | `blib2to3/pgen2/parse.py`    |
|  -13.3% |    -2 | 5.9% → 6.1% | 15 → 13 | `parse`                    | `ast.py`                     |
|  -50.0% |    -2 | 1.6% → 0.9% |   4 → 2 | `prefix`                   | `blib2to3/pytree.py`         |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `_stringify_ast` (`black/parsing.py`)

|  Change | Delta |             % | Samples | Location                     |
| ------: | ----: | ------------: | ------: | ---------------------------- |
| +400.0% |    +4 | 14.3% → 35.7% |   1 → 5 | `black/parsing.py:214 → 222` |
| removed |    -2 |  28.6% → 0.0% |   2 → 0 | `black/parsing.py:240`       |
| +200.0% |    +2 | 14.3% → 21.4% |   1 → 3 | `black/parsing.py:244 → 252` |
| +100.0% |    +1 |         14.3% |   1 → 2 | `black/parsing.py:197 → 205` |
|     new |    +1 |   0.0% → 7.1% |   0 → 1 | `black/parsing.py:193`       |

##### `visit` (`black/nodes.py`)

| Change | Delta |             % | Samples | Location                   |
| -----: | ----: | ------------: | ------: | -------------------------- |
|    new |    +3 |  0.0% → 30.0% |   0 → 3 | `black/nodes.py:152`       |
| +66.7% |    +2 | 75.0% → 50.0% |   3 → 5 | `black/nodes.py:181 → 170` |
|    new |    +1 |  0.0% → 10.0% |   0 → 1 | `black/nodes.py:172`       |

##### `_hugging_power_ops_line_to_string` (`black/linegen.py`)

| Change | Delta |             % | Samples | Location               |
| -----: | ----: | ------------: | ------: | ---------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `black/linegen.py:596` |

##### `<genexpr>` (`black/lines.py`)

| Change | Delta |      % | Samples | Location                   |
| -----: | ----: | -----: | ------: | -------------------------- |
| +60.0% |    +3 | 100.0% |   5 → 8 | `black/lines.py:456 → 445` |

##### `get_features_used` (`black/__init__.py`)

|  Change | Delta |             % | Samples | Location                        |
| ------: | ----: | ------------: | ------: | ------------------------------- |
|  +50.0% |    +1 | 33.3% → 37.5% |   2 → 3 | `black/__init__.py:1367 → 1346` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `black/__init__.py:1386`        |
| +100.0% |    +1 | 16.7% → 25.0% |   1 → 2 | `black/__init__.py:1424 → 1403` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `black/__init__.py:1427`        |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `black/__init__.py:1318`        |

##### `maybe_empty_lines` (`black/lines.py`)

|  Change | Delta |              % | Samples | Location                   |
| ------: | ----: | -------------: | ------: | -------------------------- |
| +300.0% |    +3 | 50.0% → 100.0% |   1 → 4 | `black/lines.py:584 → 573` |
| removed |    -1 |   50.0% → 0.0% |   1 → 0 | `black/lines.py:573`       |

##### `check_stability_and_equivalence` (`black/__init__.py`)

| Change | Delta |             % | Samples | Location                 |
| -----: | ----: | ------------: | ------: | ------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `black/__init__.py:1055` |

##### `cast` (`typing.py`)

| Change | Delta |             % | Samples | Location         |
| -----: | ----: | ------------: | ------: | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `typing.py:2214` |

##### `is_class` (`black/lines.py`)

| Change | Delta |            % | Samples | Location             |
| -----: | ----: | -----------: | ------: | -------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `black/lines.py:138` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `black/lines.py:139` |

##### `contains_implicit_multiline_string_with_comments` (`black/lines.py`)

| Change | Delta |             % | Samples | Location             |
| -----: | ----: | ------------: | ------: | -------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `black/lines.py:252` |

##### `_compile` (`re/__init__.py`)

| Change | Delta |             % | Samples | Location             |
| -----: | ----: | ------------: | ------: | -------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `re/__init__.py:274` |

##### `append_comment` (`black/lines.py`)

| Change | Delta |             % | Samples | Location             |
| -----: | ----: | ------------: | ------: | -------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `black/lines.py:390` |

##### `assert_equivalent` (`black/__init__.py`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `black/__init__.py:1546` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `black/__init__.py:1532` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `black/__init__.py:1533` |

##### `prev_sibling` (`blib2to3/pytree.py`)

| Change | Delta |            % | Samples | Location                 |
| -----: | ----: | -----------: | ------: | ------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `blib2to3/pytree.py:207` |

##### `visit_default` (`black/nodes.py`)

| Change | Delta |            % | Samples | Location             |
| -----: | ----: | -----------: | ------: | -------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `black/nodes.py:180` |

##### `pop` (`blib2to3/pgen2/parse.py`)

|  Change | Delta |             % | Samples | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------- |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `blib2to3/pgen2/parse.py:403`       |
| +100.0% |    +1 | 50.0% → 66.7% |   1 → 2 | `blib2to3/pgen2/parse.py:404 → 392` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `blib2to3/pgen2/parse.py:396`       |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

| Change | Delta |             % | Samples | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<frozen importlib._bootstrap>:1142` |

##### `__init__` (`blib2to3/pytree.py`)

|  Change | Delta |             % | Samples | Location                       |
| ------: | ----: | ------------: | ------: | ------------------------------ |
|  +57.1% |    +4 | 46.7% → 68.8% |  7 → 11 | `blib2to3/pytree.py:266 → 255` |
|  -50.0% |    -1 |  13.3% → 6.3% |   2 → 1 | `blib2to3/pytree.py:267 → 256` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `blib2to3/pytree.py:270`       |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `blib2to3/pytree.py:417`       |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `blib2to3/pytree.py:423`       |

##### `normalize_invisible_parens` (`black/linegen.py`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `black/linegen.py:1361` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `black/linegen.py:1431` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `black/linegen.py:1355` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `black/linegen.py:1422` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `black/linegen.py:1450` |

##### `delimiter_split` (`black/linegen.py`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `black/linegen.py:1244` |

##### `line_to_string` (`black/lines.py`)

| Change | Delta |             % | Samples | Location              |
| -----: | ----: | ------------: | ------: | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `black/lines.py:1067` |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|  Change | Delta |             % | Samples | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------- |
| removed |    -2 |  10.5% → 0.0% |   2 → 0 | `blib2to3/pgen2/parse.py:295`       |
|  -66.7% |    -2 |  15.8% → 9.1% |   3 → 1 | `blib2to3/pgen2/parse.py:328 → 316` |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `blib2to3/pgen2/parse.py:292`       |
|  +50.0% |    +1 | 10.5% → 27.3% |   2 → 3 | `blib2to3/pgen2/parse.py:297 → 285` |
|  -33.3% |    -1 | 15.8% → 18.2% |   3 → 2 | `blib2to3/pgen2/parse.py:299 → 287` |

##### `__str__` (`black/lines.py`)

|  Change | Delta |             % | Samples | Location                   |
| ------: | ----: | ------------: | ------: | -------------------------- |
|  -83.3% |   -10 | 80.0% → 28.6% |  12 → 2 | `black/lines.py:501 → 490` |
|     new |    +2 |  0.0% → 28.6% |   0 → 2 | `black/lines.py:487`       |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `black/lines.py:504`       |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `black/lines.py:484`       |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|  Change | Delta |             % | Samples | Location                       |
| ------: | ----: | ------------: | ------: | ------------------------------ |
| removed |    -2 |  22.2% → 0.0% |   2 → 0 | `blib2to3/pgen2/driver.py:162` |
| removed |    -2 |  22.2% → 0.0% |   2 → 0 | `blib2to3/pgen2/driver.py:167` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `blib2to3/pgen2/driver.py:129` |
|  -50.0% |    -1 | 22.2% → 50.0% |   2 → 1 | `blib2to3/pgen2/driver.py:130` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `blib2to3/pgen2/driver.py:140` |

##### `append` (`black/lines.py`)

|  Change | Delta |            % | Samples | Location            |
| ------: | ----: | -----------: | ------: | ------------------- |
| removed |    -3 | 50.0% → 0.0% |   3 → 0 | `black/lines.py:89` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `black/lines.py:63` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `black/lines.py:76` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `black/lines.py:94` |

##### `generate_comments` (`black/comments.py`)

| Change | Delta |             % | Samples | Location               |
| -----: | ----: | ------------: | ------: | ---------------------- |
| -83.3% |    -5 | 66.7% → 33.3% |   6 → 1 | `black/comments.py:72` |
| -66.7% |    -2 |         33.3% |   3 → 1 | `black/comments.py:52` |
|    new |    +1 |  0.0% → 33.3% |   0 → 1 | `black/comments.py:75` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|  Change | Delta |             % | Samples | Location                               |
| ------: | ----: | ------------: | ------: | -------------------------------------- |
|  -66.7% |    -2 |  15.8% → 7.1% |   3 → 1 | `blib2to3/pgen2/tokenize.py:610 → 599` |
|  -28.6% |    -2 | 36.8% → 35.7% |   7 → 5 | `blib2to3/pgen2/tokenize.py:875 → 864` |
| removed |    -2 |  10.5% → 0.0% |   2 → 0 | `blib2to3/pgen2/tokenize.py:878`       |
|     new |    +2 |  0.0% → 14.3% |   0 → 2 | `blib2to3/pgen2/tokenize.py:707`       |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `blib2to3/pgen2/tokenize.py:704`       |

##### `transform_line` (`black/linegen.py`)

|  Change | Delta |             % | Samples | Location               |
| ------: | ----: | ------------: | ------: | ---------------------- |
| removed |    -2 |  28.6% → 0.0% |   2 → 0 | `black/linegen.py:679` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `black/linegen.py:614` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `black/linegen.py:625` |
|  -33.3% |    -1 | 42.9% → 66.7% |   3 → 2 | `black/linegen.py:714` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `black/linegen.py:610` |

##### `_maybe_empty_lines` (`black/lines.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `black/lines.py:630` |

##### `whitespace` (`black/nodes.py`)

|  Change | Delta |            % | Samples | Location             |
| ------: | ----: | -----------: | ------: | -------------------- |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `black/nodes.py:409` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `black/nodes.py:226` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `black/nodes.py:287` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `black/nodes.py:190` |

##### `convert` (`blib2to3/pytree.py`)

|  Change | Delta |            % | Samples | Location                       |
| ------: | ----: | -----------: | ------: | ------------------------------ |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `blib2to3/pytree.py:498`       |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `blib2to3/pytree.py:499`       |
|  -50.0% |    -1 |        33.3% |   2 → 1 | `blib2to3/pytree.py:501 → 490` |

##### `visit_power` (`black/linegen.py`)

|  Change | Delta |            % | Samples | Location               |
| ------: | ----: | -----------: | ------: | ---------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `black/linegen.py:341` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `black/linegen.py:342` |

##### `dump` (`blib2to3/pgen2/grammar.py`)

|  Change | Delta |             % | Samples | Location                        |
| ------: | ----: | ------------: | ------: | ------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `blib2to3/pgen2/grammar.py:114` |

##### `_format_str_once` (`black/__init__.py`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `black/__init__.py:1271` |

##### `format_str` (`black/__init__.py`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `black/__init__.py:1232` |

##### `is_docstring` (`black/lines.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `black/lines.py:218` |

##### `convert_one_fmt_off_pair` (`black/comments.py`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `black/comments.py:186` |

##### `__next__` (`blib2to3/pgen2/driver.py`)

|  Change | Delta |            % | Samples | Location                      |
| ------: | ----: | -----------: | ------: | ----------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `blib2to3/pgen2/driver.py:80` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `blib2to3/pgen2/driver.py:84` |

##### `shift` (`blib2to3/pgen2/parse.py`)

|  Change | Delta |            % | Samples | Location                      |
| ------: | ----: | -----------: | ------: | ----------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `blib2to3/pgen2/parse.py:380` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `blib2to3/pgen2/parse.py:382` |

##### `parse` (`ast.py`)

| Change | Delta |      % | Samples | Location    |
| -----: | ----: | -----: | ------: | ----------- |
| -13.3% |    -2 | 100.0% | 15 → 13 | `ast.py:50` |

##### `prefix` (`blib2to3/pytree.py`)

|  Change | Delta |            % | Samples | Location                       |
| ------: | ----: | -----------: | ------: | ------------------------------ |
|  -50.0% |    -1 |        50.0% |   2 → 1 | `blib2to3/pytree.py:480 → 469` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `blib2to3/pytree.py:482`       |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `_stringify_ast` (`black/parsing.py`)

|  Change | Delta |             % | Samples | Caller                           | Location           |
| ------: | ----: | ------------: | ------: | -------------------------------- | ------------------ |
| +116.7% |    +7 | 85.7% → 92.9% |  6 → 13 | `_stringify_ast_with_new_parent` | `black/parsing.py` |

##### `visit` (`black/nodes.py`)

|  Change | Delta |             % | Samples | Caller          | Location           |
| ------: | ----: | ------------: | ------: | --------------- | ------------------ |
| +200.0% |    +6 | 75.0% → 90.0% |   3 → 9 | `visit_default` | `black/nodes.py`   |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `visit_stmt`    | `black/linegen.py` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `visit_funcdef` | `black/linegen.py` |

##### `_hugging_power_ops_line_to_string` (`black/linegen.py`)

| Change | Delta |             % | Samples | Caller           | Location           |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `transform_line` | `black/linegen.py` |

##### `<genexpr>` (`black/lines.py`)

| Change | Delta |      % | Samples | Caller                 | Location         |
| -----: | ----: | -----: | ------: | ---------------------- | ---------------- |
| +60.0% |    +3 | 100.0% |   5 → 8 | `is_complex_subscript` | `black/lines.py` |

##### `get_features_used` (`black/__init__.py`)

| Change | Delta |      % | Samples | Caller                   | Location            |
| -----: | ----: | -----: | ------: | ------------------------ | ------------------- |
| +33.3% |    +2 | 100.0% |   6 → 8 | `detect_target_versions` | `black/__init__.py` |

##### `maybe_empty_lines` (`black/lines.py`)

|  Change | Delta |      % | Samples | Caller             | Location            |
| ------: | ----: | -----: | ------: | ------------------ | ------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `_format_str_once` | `black/__init__.py` |

##### `check_stability_and_equivalence` (`black/__init__.py`)

| Change | Delta |             % | Samples | Caller                 | Location            |
| -----: | ----: | ------------: | ------: | ---------------------- | ------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `format_file_contents` | `black/__init__.py` |

##### `cast` (`typing.py`)

| Change | Delta |             % | Samples | Caller         | Location                   |
| -----: | ----: | ------------: | ------: | -------------- | -------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `parse_tokens` | `blib2to3/pgen2/driver.py` |

##### `is_class` (`black/lines.py`)

| Change | Delta |             % | Samples | Caller               | Location         |
| -----: | ----: | ------------: | ------: | -------------------- | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `_maybe_empty_lines` | `black/lines.py` |

##### `contains_implicit_multiline_string_with_comments` (`black/lines.py`)

| Change | Delta |             % | Samples | Caller           | Location           |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `transform_line` | `black/linegen.py` |

##### `_compile` (`re/__init__.py`)

| Change | Delta |             % | Samples | Caller  | Location         |
| -----: | ----: | ------------: | ------: | ------- | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `match` | `re/__init__.py` |

##### `append_comment` (`black/lines.py`)

| Change | Delta |             % | Samples | Caller   | Location         |
| -----: | ----: | ------------: | ------: | -------- | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `append` | `black/lines.py` |

##### `assert_equivalent` (`black/__init__.py`)

|  Change | Delta |      % | Samples | Caller                            | Location            |
| ------: | ----: | -----: | ------: | --------------------------------- | ------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `check_stability_and_equivalence` | `black/__init__.py` |

##### `prev_sibling` (`blib2to3/pytree.py`)

| Change | Delta |            % | Samples | Caller           | Location         |
| -----: | ----: | -----------: | ------: | ---------------- | ---------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `preceding_leaf` | `black/nodes.py` |

##### `visit_default` (`black/nodes.py`)

| Change | Delta |      % | Samples | Caller          | Location           |
| -----: | ----: | -----: | ------: | --------------- | ------------------ |
| +50.0% |    +1 | 100.0% |   2 → 3 | `visit_default` | `black/linegen.py` |

##### `pop` (`blib2to3/pgen2/parse.py`)

| Change | Delta |      % | Samples | Caller      | Location                  |
| -----: | ----: | -----: | ------: | ----------- | ------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

| Change | Delta |             % | Samples | Caller           | Location                        |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `__init__` (`blib2to3/pytree.py`)

|  Change | Delta |              % | Samples | Caller                | Location             |
| ------: | ----: | -------------: | ------: | --------------------- | -------------------- |
|  +33.3% |    +4 | 80.0% → 100.0% | 12 → 16 | `convert`             | `blib2to3/pytree.py` |
| removed |    -3 |   20.0% → 0.0% |   3 → 0 | `wrap_in_parentheses` | `black/nodes.py`     |

##### `normalize_invisible_parens` (`black/linegen.py`)

| Change | Delta |      % | Samples | Caller       | Location           |
| -----: | ----: | -----: | ------: | ------------ | ------------------ |
| +50.0% |    +1 | 100.0% |   2 → 3 | `visit_stmt` | `black/linegen.py` |

##### `delimiter_split` (`black/linegen.py`)

| Change | Delta |             % | Samples | Caller          | Location           |
| -----: | ----: | ------------: | ------: | --------------- | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `split_wrapper` | `black/linegen.py` |

##### `line_to_string` (`black/lines.py`)

| Change | Delta |             % | Samples | Caller           | Location           |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transform_line` | `black/linegen.py` |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

| Change | Delta |      % | Samples | Caller     | Location                  |
| -----: | ----: | -----: | ------: | ---------- | ------------------------- |
| -42.1% |    -8 | 100.0% | 19 → 11 | `addtoken` | `blib2to3/pgen2/parse.py` |

##### `__str__` (`black/lines.py`)

|  Change | Delta |             % | Samples | Caller             | Location            |
| ------: | ----: | ------------: | ------: | ------------------ | ------------------- |
|  -66.7% |    -8 | 80.0% → 57.1% |  12 → 4 | `_format_str_once` | `black/__init__.py` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `run_transformer`  | `black/linegen.py`  |
|  +50.0% |    +1 | 13.3% → 42.9% |   2 → 3 | `line_to_string`   | `black/lines.py`    |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

| Change | Delta |      % | Samples | Caller         | Location                   |
| -----: | ----: | -----: | ------: | -------------- | -------------------------- |
| -77.8% |    -7 | 100.0% |   9 → 2 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `append` (`black/lines.py`)

|  Change | Delta |             % | Samples | Caller          | Location           |
| ------: | ----: | ------------: | ------: | --------------- | ------------------ |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `visit_default` | `black/linegen.py` |

##### `generate_comments` (`black/comments.py`)

| Change | Delta |      % | Samples | Caller          | Location           |
| -----: | ----: | -----: | ------: | --------------- | ------------------ |
| -66.7% |    -6 | 100.0% |   9 → 3 | `visit_default` | `black/linegen.py` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

| Change | Delta |      % | Samples | Caller     | Location                   |
| -----: | ----: | -----: | ------: | ---------- | -------------------------- |
| -26.3% |    -5 | 100.0% | 19 → 14 | `__next__` | `blib2to3/pgen2/driver.py` |

##### `transform_line` (`black/linegen.py`)

|  Change | Delta |              % | Samples | Caller             | Location            |
| ------: | ----: | -------------: | ------: | ------------------ | ------------------- |
|  -50.0% |    -3 | 85.7% → 100.0% |   6 → 3 | `_format_str_once` | `black/__init__.py` |
| removed |    -1 |   14.3% → 0.0% |   1 → 0 | `run_transformer`  | `black/linegen.py`  |

##### `_maybe_empty_lines` (`black/lines.py`)

|  Change | Delta |             % | Samples | Caller              | Location         |
| ------: | ----: | ------------: | ------: | ------------------- | ---------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `maybe_empty_lines` | `black/lines.py` |

##### `whitespace` (`black/nodes.py`)

| Change | Delta |      % | Samples | Caller   | Location         |
| -----: | ----: | -----: | ------: | -------- | ---------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `append` | `black/lines.py` |

##### `convert` (`blib2to3/pytree.py`)

| Change | Delta |             % | Samples | Caller | Location                  |
| -----: | ----: | ------------: | ------: | ------ | ------------------------- |
| -75.0% |    -3 | 66.7% → 33.3% |   4 → 1 | `pop`  | `blib2to3/pgen2/parse.py` |

##### `visit_power` (`black/linegen.py`)

|  Change | Delta |             % | Samples | Caller  | Location         |
| ------: | ----: | ------------: | ------: | ------- | ---------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `visit` | `black/nodes.py` |

##### `dump` (`blib2to3/pgen2/grammar.py`)

|  Change | Delta |             % | Samples | Caller         | Location                   |
| ------: | ----: | ------------: | ------: | -------------- | -------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `load_grammar` | `blib2to3/pgen2/driver.py` |

##### `_format_str_once` (`black/__init__.py`)

|  Change | Delta |             % | Samples | Caller          | Location            |
| ------: | ----: | ------------: | ------: | --------------- | ------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `assert_stable` | `black/__init__.py` |

##### `format_str` (`black/__init__.py`)

|  Change | Delta |             % | Samples | Caller                 | Location            |
| ------: | ----: | ------------: | ------: | ---------------------- | ------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `format_file_contents` | `black/__init__.py` |

##### `is_docstring` (`black/lines.py`)

|  Change | Delta |             % | Samples | Caller               | Location         |
| ------: | ----: | ------------: | ------: | -------------------- | ---------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `_maybe_empty_lines` | `black/lines.py` |

##### `convert_one_fmt_off_pair` (`black/comments.py`)

|  Change | Delta |             % | Samples | Caller              | Location            |
| ------: | ----: | ------------: | ------: | ------------------- | ------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `normalize_fmt_off` | `black/comments.py` |

##### `__next__` (`blib2to3/pgen2/driver.py`)

|  Change | Delta |             % | Samples | Caller         | Location                   |
| ------: | ----: | ------------: | ------: | -------------- | -------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `parse_tokens` | `blib2to3/pgen2/driver.py` |

##### `shift` (`blib2to3/pgen2/parse.py`)

|  Change | Delta |             % | Samples | Caller      | Location                  |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `parse` (`ast.py`)

| Change | Delta |      % | Samples | Caller                  | Location           |
| -----: | ----: | -----: | ------: | ----------------------- | ------------------ |
| -13.3% |    -2 | 100.0% | 15 → 13 | `_parse_single_version` | `black/parsing.py` |

##### `prefix` (`blib2to3/pytree.py`)

|  Change | Delta |            % | Samples | Caller          | Location             |
| ------: | ----: | -----------: | ------: | --------------- | -------------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `prefix`        | `blib2to3/pytree.py` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `visit_default` | `black/linegen.py`   |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

##### Ours

|  Change | Delta |            % | Samples | Function                                           | Location                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- | ------------------------- |
|  +30.4% |    +7 | 9.0% → 14.0% | 23 → 30 | `visit_power`                                      | `black/linegen.py`        |
|  +75.0% |    +6 |  3.1% → 6.5% |  8 → 14 | `_stringify_ast`                                   | `black/parsing.py`        |
|  +85.7% |    +6 |  2.7% → 6.1% |  7 → 13 | `_stringify_ast_with_new_parent`                   | `black/parsing.py`        |
|  +20.8% |    +5 | 9.4% → 13.6% | 24 → 29 | `assert_equivalent`                                | `black/__init__.py`       |
|  +57.1% |    +4 |  2.7% → 5.1% |  7 → 11 | `maybe_empty_lines`                                | `black/lines.py`          |
| +150.0% |    +3 |  0.8% → 2.3% |   2 → 5 | `_hugging_power_ops_line_to_string`                | `black/linegen.py`        |
|  +37.5% |    +3 |  3.1% → 5.1% |  8 → 11 | `visit_NUMBER`                                     | `black/linegen.py`        |
|  +60.0% |    +3 |  2.0% → 3.7% |   5 → 8 | `<genexpr>`                                        | `black/lines.py`          |
|  +60.0% |    +3 |  2.0% → 3.7% |   5 → 8 | `is_complex_subscript`                             | `black/lines.py`          |
|  +25.0% |    +2 |  3.1% → 4.7% |  8 → 10 | `get_features_used`                                | `black/__init__.py`       |
|  +25.0% |    +2 |  3.1% → 4.7% |  8 → 10 | `detect_target_versions`                           | `black/__init__.py`       |
|  +10.5% |    +2 |  7.5% → 9.8% | 19 → 21 | `pop`                                              | `blib2to3/pgen2/parse.py` |
|  +40.0% |    +2 |  2.0% → 3.3% |   5 → 7 | `mark`                                             | `black/brackets.py`       |
| +100.0% |    +2 |  0.8% → 1.9% |   2 → 4 | `line_to_string`                                   | `black/lines.py`          |
|     new |    +2 |  0.0% → 0.9% |   0 → 2 | `cast`                                             | `typing.py`               |
|     new |    +2 |  0.0% → 0.9% |   0 → 2 | `preceding_leaf`                                   | `black/nodes.py`          |
|     new |    +2 |  0.0% → 0.9% |   0 → 2 | `is_class`                                         | `black/lines.py`          |
|     new |    +2 |  0.0% → 0.9% |   0 → 2 | `contains_implicit_multiline_string_with_comments` | `black/lines.py`          |
|     new |    +2 |  0.0% → 0.9% |   0 → 2 | `_compile`                                         | `re/__init__.py`          |
|     new |    +2 |  0.0% → 0.9% |   0 → 2 | `match`                                            | `re/__init__.py`          |

##### Unknown

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
|  +9.1% |    +1 | 4.3% → 5.6% | 11 → 12 | `(anonymous)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |   Samples | Function                          | Location                   |
| -----: | ----: | ------------: | --------: | --------------------------------- | -------------------------- |
| -20.7% |   -44 | 83.5% → 79.0% | 213 → 169 | `_format_str_once`                | `black/__init__.py`        |
| -17.2% |   -42 | 95.7% → 94.4% | 244 → 202 | `_run_module_as_main`             | `<frozen runpy>`           |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `format_file_contents`            | `black/__init__.py`        |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `format_file_in_place`            | `black/__init__.py`        |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `reformat_one`                    | `black/__init__.py`        |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `main`                            | `black/__init__.py`        |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `new_func`                        | `click/decorators.py`      |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `invoke`                          | `click/core.py`            |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `main`                            | `click/core.py`            |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `__call__`                        | `click/core.py`            |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `patched_main`                    | `black/__init__.py`        |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `<module>`                        | `black/__main__.py`        |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `_run_code`                       | `<frozen runpy>`           |
| -34.7% |   -26 | 29.4% → 22.9% |   75 → 49 | `assert_stable`                   | `black/__init__.py`        |
| -28.6% |   -24 | 32.9% → 28.0% |   84 → 60 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |
| -28.6% |   -24 | 32.9% → 28.0% |   84 → 60 | `parse_string`                    | `blib2to3/pgen2/driver.py` |
| -28.6% |   -24 | 32.9% → 28.0% |   84 → 60 | `lib2to3_parse`                   | `black/parsing.py`         |
| -14.3% |   -20 | 54.9% → 56.1% | 140 → 120 | `format_str`                      | `black/__init__.py`        |
| -19.2% |   -19 | 38.8% → 37.4% |   99 → 80 | `check_stability_and_equivalence` | `black/__init__.py`        |
| -18.1% |   -13 | 28.2% → 27.6% |   72 → 59 | `visit_funcdef`                   | `black/linegen.py`         |

##### Ours

| Change | Delta |             % |   Samples | Function                          | Location                   |
| -----: | ----: | ------------: | --------: | --------------------------------- | -------------------------- |
| -20.7% |   -44 | 83.5% → 79.0% | 213 → 169 | `_format_str_once`                | `black/__init__.py`        |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `format_file_contents`            | `black/__init__.py`        |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `format_file_in_place`            | `black/__init__.py`        |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `reformat_one`                    | `black/__init__.py`        |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `main`                            | `black/__init__.py`        |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `new_func`                        | `click/decorators.py`      |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `invoke`                          | `click/core.py`            |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `main`                            | `click/core.py`            |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `__call__`                        | `click/core.py`            |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `patched_main`                    | `black/__init__.py`        |
| -16.3% |   -39 | 93.7% → 93.5% | 239 → 200 | `<module>`                        | `black/__main__.py`        |
| -34.7% |   -26 | 29.4% → 22.9% |   75 → 49 | `assert_stable`                   | `black/__init__.py`        |
| -28.6% |   -24 | 32.9% → 28.0% |   84 → 60 | `parse_tokens`                    | `blib2to3/pgen2/driver.py` |
| -28.6% |   -24 | 32.9% → 28.0% |   84 → 60 | `parse_string`                    | `blib2to3/pgen2/driver.py` |
| -28.6% |   -24 | 32.9% → 28.0% |   84 → 60 | `lib2to3_parse`                   | `black/parsing.py`         |
| -14.3% |   -20 | 54.9% → 56.1% | 140 → 120 | `format_str`                      | `black/__init__.py`        |
| -19.2% |   -19 | 38.8% → 37.4% |   99 → 80 | `check_stability_and_equivalence` | `black/__init__.py`        |
| -18.1% |   -13 | 28.2% → 27.6% |   72 → 59 | `visit_funcdef`                   | `black/linegen.py`         |
| -15.1% |   -11 | 28.6% → 29.0% |   73 → 62 | `visit_default`                   | `black/linegen.py`         |
| -15.1% |   -11 | 28.6% → 29.0% |   73 → 62 | `visit`                           | `black/nodes.py`           |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `visit_power` (`black/linegen.py`)

| Change | Delta |      % | Samples | Caller  | Location         |
| -----: | ----: | -----: | ------: | ------- | ---------------- |
| +30.4% |    +7 | 100.0% | 23 → 30 | `visit` | `black/nodes.py` |

##### `_stringify_ast` (`black/parsing.py`)

| Change | Delta |             % | Samples | Caller                           | Location            |
| -----: | ----: | ------------: | ------: | -------------------------------- | ------------------- |
| +85.7% |    +6 | 87.5% → 92.9% |  7 → 13 | `_stringify_ast_with_new_parent` | `black/parsing.py`  |
| +75.0% |    +6 |        100.0% |  8 → 14 | `assert_equivalent`              | `black/__init__.py` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py`)

| Change | Delta |      % | Samples | Caller           | Location           |
| -----: | ----: | -----: | ------: | ---------------- | ------------------ |
| +85.7% |    +6 | 100.0% |  7 → 13 | `_stringify_ast` | `black/parsing.py` |

##### `assert_equivalent` (`black/__init__.py`)

| Change | Delta |      % | Samples | Caller                            | Location            |
| -----: | ----: | -----: | ------: | --------------------------------- | ------------------- |
| +20.8% |    +5 | 100.0% | 24 → 29 | `check_stability_and_equivalence` | `black/__init__.py` |

##### `maybe_empty_lines` (`black/lines.py`)

| Change | Delta |      % | Samples | Caller             | Location            |
| -----: | ----: | -----: | ------: | ------------------ | ------------------- |
| +57.1% |    +4 | 100.0% |  7 → 11 | `_format_str_once` | `black/__init__.py` |

##### `_hugging_power_ops_line_to_string` (`black/linegen.py`)

|  Change | Delta |      % | Samples | Caller           | Location           |
| ------: | ----: | -----: | ------: | ---------------- | ------------------ |
| +150.0% |    +3 | 100.0% |   2 → 5 | `transform_line` | `black/linegen.py` |

##### `visit_NUMBER` (`black/linegen.py`)

| Change | Delta |      % | Samples | Caller  | Location         |
| -----: | ----: | -----: | ------: | ------- | ---------------- |
| +37.5% |    +3 | 100.0% |  8 → 11 | `visit` | `black/nodes.py` |

##### `<genexpr>` (`black/lines.py`)

| Change | Delta |      % | Samples | Caller                 | Location         |
| -----: | ----: | -----: | ------: | ---------------------- | ---------------- |
| +60.0% |    +3 | 100.0% |   5 → 8 | `is_complex_subscript` | `black/lines.py` |

##### `is_complex_subscript` (`black/lines.py`)

| Change | Delta |      % | Samples | Caller   | Location         |
| -----: | ----: | -----: | ------: | -------- | ---------------- |
| +60.0% |    +3 | 100.0% |   5 → 8 | `append` | `black/lines.py` |

##### `get_features_used` (`black/__init__.py`)

| Change | Delta |      % | Samples | Caller                   | Location            |
| -----: | ----: | -----: | ------: | ------------------------ | ------------------- |
| +25.0% |    +2 | 100.0% |  8 → 10 | `detect_target_versions` | `black/__init__.py` |

##### `detect_target_versions` (`black/__init__.py`)

| Change | Delta |      % | Samples | Caller             | Location            |
| -----: | ----: | -----: | ------: | ------------------ | ------------------- |
| +25.0% |    +2 | 100.0% |  8 → 10 | `_format_str_once` | `black/__init__.py` |

##### `pop` (`blib2to3/pgen2/parse.py`)

| Change | Delta |      % | Samples | Caller      | Location                  |
| -----: | ----: | -----: | ------: | ----------- | ------------------------- |
| +10.5% |    +2 | 100.0% | 19 → 21 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `mark` (`black/brackets.py`)

| Change | Delta |      % | Samples | Caller   | Location         |
| -----: | ----: | -----: | ------: | -------- | ---------------- |
| +40.0% |    +2 | 100.0% |   5 → 7 | `append` | `black/lines.py` |

##### `line_to_string` (`black/lines.py`)

|  Change | Delta |      % | Samples | Caller           | Location           |
| ------: | ----: | -----: | ------: | ---------------- | ------------------ |
| +100.0% |    +2 | 100.0% |   2 → 4 | `transform_line` | `black/linegen.py` |

##### `cast` (`typing.py`)

| Change | Delta |             % | Samples | Caller         | Location                   |
| -----: | ----: | ------------: | ------: | -------------- | -------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `parse_tokens` | `blib2to3/pgen2/driver.py` |

##### `preceding_leaf` (`black/nodes.py`)

| Change | Delta |             % | Samples | Caller       | Location         |
| -----: | ----: | ------------: | ------: | ------------ | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `whitespace` | `black/nodes.py` |

##### `is_class` (`black/lines.py`)

| Change | Delta |             % | Samples | Caller               | Location         |
| -----: | ----: | ------------: | ------: | -------------------- | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `_maybe_empty_lines` | `black/lines.py` |

##### `contains_implicit_multiline_string_with_comments` (`black/lines.py`)

| Change | Delta |             % | Samples | Caller           | Location           |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `transform_line` | `black/linegen.py` |

##### `_compile` (`re/__init__.py`)

| Change | Delta |             % | Samples | Caller  | Location         |
| -----: | ----: | ------------: | ------: | ------- | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `match` | `re/__init__.py` |

##### `match` (`re/__init__.py`)

| Change | Delta |             % | Samples | Caller          | Location            |
| -----: | ----: | ------------: | ------: | --------------- | ------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `list_comments` | `black/comments.py` |

##### `_format_str_once` (`black/__init__.py`)

| Change | Delta |             % |   Samples | Caller          | Location            |
| -----: | ----: | ------------: | --------: | --------------- | ------------------- |
| -34.7% |   -26 | 35.2% → 29.0% |   75 → 49 | `assert_stable` | `black/__init__.py` |
| -13.0% |   -18 | 64.8% → 71.0% | 138 → 120 | `format_str`    | `black/__init__.py` |

##### `format_file_contents` (`black/__init__.py`)

| Change | Delta |      % |   Samples | Caller                 | Location            |
| -----: | ----: | -----: | --------: | ---------------------- | ------------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `format_file_in_place` | `black/__init__.py` |

##### `format_file_in_place` (`black/__init__.py`)

| Change | Delta |      % |   Samples | Caller         | Location            |
| -----: | ----: | -----: | --------: | -------------- | ------------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `reformat_one` | `black/__init__.py` |

##### `reformat_one` (`black/__init__.py`)

| Change | Delta |      % |   Samples | Caller | Location            |
| -----: | ----: | -----: | --------: | ------ | ------------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `main` | `black/__init__.py` |

##### `main` (`black/__init__.py`)

| Change | Delta |      % |   Samples | Caller     | Location              |
| -----: | ----: | -----: | --------: | ---------- | --------------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `new_func` | `click/decorators.py` |

##### `new_func` (`click/decorators.py`)

| Change | Delta |      % |   Samples | Caller   | Location        |
| -----: | ----: | -----: | --------: | -------- | --------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `invoke` | `click/core.py` |

##### `invoke` (`click/core.py`)

| Change | Delta |      % |   Samples | Caller   | Location        |
| -----: | ----: | -----: | --------: | -------- | --------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `invoke` | `click/core.py` |
| -16.3% |   -39 | 100.0% | 239 → 200 | `main`   | `click/core.py` |

##### `main` (`click/core.py`)

| Change | Delta |      % |   Samples | Caller     | Location        |
| -----: | ----: | -----: | --------: | ---------- | --------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `__call__` | `click/core.py` |

##### `__call__` (`click/core.py`)

| Change | Delta |      % |   Samples | Caller         | Location            |
| -----: | ----: | -----: | --------: | -------------- | ------------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `patched_main` | `black/__init__.py` |

##### `patched_main` (`black/__init__.py`)

| Change | Delta |      % |   Samples | Caller     | Location            |
| -----: | ----: | -----: | --------: | ---------- | ------------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `<module>` | `black/__main__.py` |

##### `<module>` (`black/__main__.py`)

| Change | Delta |      % |   Samples | Caller      | Location         |
| -----: | ----: | -----: | --------: | ----------- | ---------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `_run_code` | `<frozen runpy>` |

##### `_run_code` (`<frozen runpy>`)

| Change | Delta |      % |   Samples | Caller                | Location         |
| -----: | ----: | -----: | --------: | --------------------- | ---------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `_run_module_as_main` | `<frozen runpy>` |

##### `assert_stable` (`black/__init__.py`)

| Change | Delta |      % | Samples | Caller                            | Location            |
| -----: | ----: | -----: | ------: | --------------------------------- | ------------------- |
| -34.7% |   -26 | 100.0% | 75 → 49 | `check_stability_and_equivalence` | `black/__init__.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

| Change | Delta |      % | Samples | Caller         | Location                   |
| -----: | ----: | -----: | ------: | -------------- | -------------------------- |
| -28.6% |   -24 | 100.0% | 84 → 60 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `parse_string` (`blib2to3/pgen2/driver.py`)

| Change | Delta |      % | Samples | Caller          | Location           |
| -----: | ----: | -----: | ------: | --------------- | ------------------ |
| -28.6% |   -24 | 100.0% | 84 → 60 | `lib2to3_parse` | `black/parsing.py` |

##### `lib2to3_parse` (`black/parsing.py`)

| Change | Delta |      % | Samples | Caller             | Location            |
| -----: | ----: | -----: | ------: | ------------------ | ------------------- |
| -28.6% |   -24 | 100.0% | 84 → 60 | `_format_str_once` | `black/__init__.py` |

##### `format_str` (`black/__init__.py`)

| Change | Delta |      % |   Samples | Caller                 | Location            |
| -----: | ----: | -----: | --------: | ---------------------- | ------------------- |
| -14.3% |   -20 | 100.0% | 140 → 120 | `format_file_contents` | `black/__init__.py` |

##### `check_stability_and_equivalence` (`black/__init__.py`)

| Change | Delta |      % | Samples | Caller                 | Location            |
| -----: | ----: | -----: | ------: | ---------------------- | ------------------- |
| -19.2% |   -19 | 100.0% | 99 → 80 | `format_file_contents` | `black/__init__.py` |

##### `visit_funcdef` (`black/linegen.py`)

| Change | Delta |      % | Samples | Caller  | Location         |
| -----: | ----: | -----: | ------: | ------- | ---------------- |
| -18.1% |   -13 | 100.0% | 72 → 59 | `visit` | `black/nodes.py` |

##### `visit_default` (`black/linegen.py`)

| Change | Delta |             % | Samples | Caller              | Location           |
| -----: | ----: | ------------: | ------: | ------------------- | ------------------ |
| -15.1% |   -11 |        100.0% | 73 → 62 | `visit`             | `black/nodes.py`   |
| -14.1% |   -10 | 97.3% → 98.4% | 71 → 61 | `visit_suite`       | `black/linegen.py` |
| +50.0% |   +10 | 27.4% → 48.4% | 20 → 30 | `visit_power`       | `black/linegen.py` |
| -15.6% |    -7 | 61.6% → 61.3% | 45 → 38 | `visit_simple_stmt` | `black/linegen.py` |
| +57.1% |    +4 |  9.6% → 17.7% |  7 → 11 | `visit_NUMBER`      | `black/linegen.py` |

##### `visit` (`black/nodes.py`)

| Change | Delta |             % | Samples | Caller             | Location            |
| -----: | ----: | ------------: | ------: | ------------------ | ------------------- |
| -18.3% |   -13 | 97.3% → 93.5% | 71 → 58 | `visit_funcdef`    | `black/linegen.py`  |
| -15.1% |   -11 |        100.0% | 73 → 62 | `visit_default`    | `black/nodes.py`    |
| -15.1% |   -11 |        100.0% | 73 → 62 | `_format_str_once` | `black/__init__.py` |
| -12.9% |    -9 | 95.9% → 98.4% | 70 → 61 | `visit_stmt`       | `black/linegen.py`  |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `visit_power` (`black/linegen.py`)

| Change | Delta |              % | Samples | Callee          | Location           |
| -----: | ----: | -------------: | ------: | --------------- | ------------------ |
| +50.0% |   +10 | 87.0% → 100.0% | 20 → 30 | `visit_default` | `black/linegen.py` |

##### `_stringify_ast` (`black/parsing.py`)

| Change | Delta |             % | Samples | Callee                           | Location           |
| -----: | ----: | ------------: | ------: | -------------------------------- | ------------------ |
| +85.7% |    +6 | 87.5% → 92.9% |  7 → 13 | `_stringify_ast_with_new_parent` | `black/parsing.py` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py`)

| Change | Delta |      % | Samples | Callee           | Location           |
| -----: | ----: | -----: | ------: | ---------------- | ------------------ |
| +85.7% |    +6 | 100.0% |  7 → 13 | `_stringify_ast` | `black/parsing.py` |

##### `assert_equivalent` (`black/__init__.py`)

| Change | Delta |             % | Samples | Callee           | Location           |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------ |
| +75.0% |    +6 | 33.3% → 48.3% |  8 → 14 | `_stringify_ast` | `black/parsing.py` |
| -13.3% |    -2 | 62.5% → 44.8% | 15 → 13 | `parse_ast`      | `black/parsing.py` |

##### `maybe_empty_lines` (`black/lines.py`)

| Change | Delta |            % | Samples | Callee     | Location   |
| -----: | ----: | -----------: | ------: | ---------- | ---------- |
|    new |    +2 | 0.0% → 18.2% |   0 → 2 | `__init__` | `<string>` |

##### `visit_NUMBER` (`black/linegen.py`)

|  Change | Delta |              % | Samples | Callee                      | Location            |
| ------: | ----: | -------------: | ------: | --------------------------- | ------------------- |
|  +57.1% |    +4 | 87.5% → 100.0% |  7 → 11 | `visit_default`             | `black/linegen.py`  |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `normalize_numeric_literal` | `black/numerics.py` |

##### `is_complex_subscript` (`black/lines.py`)

| Change | Delta |      % | Samples | Callee      | Location         |
| -----: | ----: | -----: | ------: | ----------- | ---------------- |
| +60.0% |    +3 | 100.0% |   5 → 8 | `<genexpr>` | `black/lines.py` |

##### `detect_target_versions` (`black/__init__.py`)

| Change | Delta |      % | Samples | Callee              | Location            |
| -----: | ----: | -----: | ------: | ------------------- | ------------------- |
| +25.0% |    +2 | 100.0% |  8 → 10 | `get_features_used` | `black/__init__.py` |

##### `pop` (`blib2to3/pgen2/parse.py`)

| Change | Delta |             % | Samples | Callee    | Location             |
| -----: | ----: | ------------: | ------: | --------- | -------------------- |
|  +5.9% |    +1 | 89.5% → 85.7% | 17 → 18 | `convert` | `blib2to3/pytree.py` |

##### `mark` (`black/brackets.py`)

|  Change | Delta |             % | Samples | Callee                             | Location            |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ------------------- |
| +100.0% |    +1 | 20.0% → 28.6% |   1 → 2 | `is_split_before_delimiter`        | `black/brackets.py` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `maybe_increment_lambda_arguments` | `black/brackets.py` |

##### `line_to_string` (`black/lines.py`)

| Change | Delta |              % | Samples | Callee    | Location         |
| -----: | ----: | -------------: | ------: | --------- | ---------------- |
| +50.0% |    +1 | 100.0% → 75.0% |   2 → 3 | `__str__` | `black/lines.py` |

##### `preceding_leaf` (`black/nodes.py`)

| Change | Delta |             % | Samples | Callee         | Location             |
| -----: | ----: | ------------: | ------: | -------------- | -------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `prev_sibling` | `blib2to3/pytree.py` |

##### `match` (`re/__init__.py`)

| Change | Delta |             % | Samples | Callee     | Location         |
| -----: | ----: | ------------: | ------: | ---------- | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `_compile` | `re/__init__.py` |

##### `_format_str_once` (`black/__init__.py`)

| Change | Delta |             % | Samples | Callee                   | Location            |
| -----: | ----: | ------------: | ------: | ------------------------ | ------------------- |
| -28.6% |   -24 | 39.4% → 35.5% | 84 → 60 | `lib2to3_parse`          | `black/parsing.py`  |
| -15.1% |   -11 | 34.3% → 36.7% | 73 → 62 | `visit`                  | `black/nodes.py`    |
| -69.2% |    -9 |   6.1% → 2.4% |  13 → 4 | `__str__`                | `black/lines.py`    |
| +57.1% |    +4 |   3.3% → 6.5% |  7 → 11 | `maybe_empty_lines`      | `black/lines.py`    |
| +25.0% |    +2 |   3.8% → 5.9% |  8 → 10 | `detect_target_versions` | `black/__init__.py` |

##### `_run_module_as_main` (`<frozen runpy>`)

| Change | Delta |             % |   Samples | Callee                | Location         |
| -----: | ----: | ------------: | --------: | --------------------- | ---------------- |
| -16.3% |   -39 | 98.0% → 99.0% | 239 → 200 | `_run_code`           | `<frozen runpy>` |
| -60.0% |    -3 |   2.0% → 1.0% |     5 → 2 | `_get_module_details` | `<frozen runpy>` |

##### `format_file_contents` (`black/__init__.py`)

| Change | Delta |             % |   Samples | Callee                            | Location            |
| -----: | ----: | ------------: | --------: | --------------------------------- | ------------------- |
| -14.3% |   -20 | 58.6% → 60.0% | 140 → 120 | `format_str`                      | `black/__init__.py` |
| -19.2% |   -19 | 41.4% → 40.0% |   99 → 80 | `check_stability_and_equivalence` | `black/__init__.py` |

##### `format_file_in_place` (`black/__init__.py`)

| Change | Delta |      % |   Samples | Callee                 | Location            |
| -----: | ----: | -----: | --------: | ---------------------- | ------------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `format_file_contents` | `black/__init__.py` |

##### `reformat_one` (`black/__init__.py`)

| Change | Delta |      % |   Samples | Callee                 | Location            |
| -----: | ----: | -----: | --------: | ---------------------- | ------------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `format_file_in_place` | `black/__init__.py` |

##### `main` (`black/__init__.py`)

| Change | Delta |      % |   Samples | Callee         | Location            |
| -----: | ----: | -----: | --------: | -------------- | ------------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `reformat_one` | `black/__init__.py` |

##### `new_func` (`click/decorators.py`)

| Change | Delta |      % |   Samples | Callee | Location            |
| -----: | ----: | -----: | --------: | ------ | ------------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `main` | `black/__init__.py` |

##### `invoke` (`click/core.py`)

| Change | Delta |      % |   Samples | Callee     | Location              |
| -----: | ----: | -----: | --------: | ---------- | --------------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `new_func` | `click/decorators.py` |
| -16.3% |   -39 | 100.0% | 239 → 200 | `invoke`   | `click/core.py`       |

##### `main` (`click/core.py`)

| Change | Delta |      % |   Samples | Callee   | Location        |
| -----: | ----: | -----: | --------: | -------- | --------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `invoke` | `click/core.py` |

##### `__call__` (`click/core.py`)

| Change | Delta |      % |   Samples | Callee | Location        |
| -----: | ----: | -----: | --------: | ------ | --------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `main` | `click/core.py` |

##### `patched_main` (`black/__init__.py`)

| Change | Delta |      % |   Samples | Callee     | Location        |
| -----: | ----: | -----: | --------: | ---------- | --------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `__call__` | `click/core.py` |

##### `<module>` (`black/__main__.py`)

| Change | Delta |      % |   Samples | Callee         | Location            |
| -----: | ----: | -----: | --------: | -------------- | ------------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `patched_main` | `black/__init__.py` |

##### `_run_code` (`<frozen runpy>`)

| Change | Delta |      % |   Samples | Callee     | Location            |
| -----: | ----: | -----: | --------: | ---------- | ------------------- |
| -16.3% |   -39 | 100.0% | 239 → 200 | `<module>` | `black/__main__.py` |

##### `assert_stable` (`black/__init__.py`)

| Change | Delta |      % | Samples | Callee             | Location            |
| -----: | ----: | -----: | ------: | ------------------ | ------------------- |
| -34.7% |   -26 | 100.0% | 75 → 49 | `_format_str_once` | `black/__init__.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|  Change | Delta |             % | Samples | Callee     | Location                   |
| ------: | ----: | ------------: | ------: | ---------- | -------------------------- |
|  -19.6% |   -10 | 60.7% → 68.3% | 51 → 41 | `addtoken` | `blib2to3/pgen2/parse.py`  |
|  -34.8% |    -8 | 27.4% → 25.0% | 23 → 15 | `__next__` | `blib2to3/pgen2/driver.py` |
|     new |    +2 |   0.0% → 3.3% |   0 → 2 | `cast`     | `typing.py`                |
| removed |    -1 |   1.2% → 0.0% |   1 → 0 | `debug`    | `logging/__init__.py`      |

##### `parse_string` (`blib2to3/pgen2/driver.py`)

| Change | Delta |      % | Samples | Callee         | Location                   |
| -----: | ----: | -----: | ------: | -------------- | -------------------------- |
| -28.6% |   -24 | 100.0% | 84 → 60 | `parse_tokens` | `blib2to3/pgen2/driver.py` |

##### `lib2to3_parse` (`black/parsing.py`)

| Change | Delta |      % | Samples | Callee         | Location                   |
| -----: | ----: | -----: | ------: | -------------- | -------------------------- |
| -28.6% |   -24 | 100.0% | 84 → 60 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `format_str` (`black/__init__.py`)

| Change | Delta |              % |   Samples | Callee             | Location            |
| -----: | ----: | -------------: | --------: | ------------------ | ------------------- |
| -13.0% |   -18 | 98.6% → 100.0% | 138 → 120 | `_format_str_once` | `black/__init__.py` |

##### `check_stability_and_equivalence` (`black/__init__.py`)

| Change | Delta |             % | Samples | Callee              | Location            |
| -----: | ----: | ------------: | ------: | ------------------- | ------------------- |
| -34.7% |   -26 | 75.8% → 61.3% | 75 → 49 | `assert_stable`     | `black/__init__.py` |
| +20.8% |    +5 | 24.2% → 36.3% | 24 → 29 | `assert_equivalent` | `black/__init__.py` |

##### `visit_funcdef` (`black/linegen.py`)

| Change | Delta |             % | Samples | Callee  | Location         |
| -----: | ----: | ------------: | ------: | ------- | ---------------- |
| -18.3% |   -13 | 98.6% → 98.3% | 71 → 58 | `visit` | `black/nodes.py` |

##### `visit_default` (`black/linegen.py`)

|  Change | Delta |             % | Samples | Callee              | Location             |
| ------: | ----: | ------------: | ------: | ------------------- | -------------------- |
|  -15.1% |   -11 |        100.0% | 73 → 62 | `visit_default`     | `black/nodes.py`     |
|  -33.3% |    -4 | 16.4% → 12.9% |  12 → 8 | `generate_comments` | `black/comments.py`  |
|   -4.0% |    -1 | 34.2% → 38.7% | 25 → 24 | `append`            | `black/lines.py`     |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `prefix`            | `blib2to3/pytree.py` |

##### `visit` (`black/nodes.py`)

| Change | Delta |              % | Samples | Callee              | Location           |
| -----: | ----: | -------------: | ------: | ------------------- | ------------------ |
| -18.1% |   -13 |  98.6% → 95.2% | 72 → 59 | `visit_funcdef`     | `black/linegen.py` |
| -15.1% |   -11 |         100.0% | 73 → 62 | `visit_default`     | `black/linegen.py` |
| -14.1% |   -10 |  97.3% → 98.4% | 71 → 61 | `visit_suite`       | `black/linegen.py` |
| -12.7% |    -9 | 97.3% → 100.0% | 71 → 62 | `visit_stmt`        | `black/linegen.py` |
| -19.1% |    -9 |  64.4% → 61.3% | 47 → 38 | `visit_simple_stmt` | `black/linegen.py` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `format_file_contents` (`black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new |    +4 | 0.0% → 1.9% |   0 → 4 | `get_features_used` (`black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +30.0% |    +3 | 3.9% → 6.1% | 10 → 13 | `__init__` (`blib2to3/pytree.py`) ← `convert` ← `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +300.0% |    +3 | 0.4% → 1.9% |   1 → 4 | `maybe_empty_lines` (`black/lines.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  +60.0% |    +3 | 2.0% → 3.7% |   5 → 8 | `<genexpr>` (`black/lines.py`) ← `is_complex_subscript` ← `append` ← `visit_default` (`black/linegen.py`) ← `visit_NUMBER` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` |
|     new |    +3 | 0.0% → 1.4% |   0 → 3 | `mark` (`black/brackets.py`) ← `append` (`black/lines.py`) ← `visit_default` (`black/linegen.py`) ← `visit_NUMBER` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                              |
|     new |    +3 | 0.0% → 1.4% |   0 → 3 | `_hugging_power_ops_line_to_string` (`black/linegen.py`) ← `transform_line` ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +200.0% |    +2 | 0.4% → 1.4% |   1 → 3 | `classify` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +50.0% |    +2 | 1.6% → 2.8% |   4 → 6 | `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                    |
| +200.0% |    +2 | 0.4% → 1.4% |   1 → 3 | `transform_line` (`black/linegen.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `cast` (`typing.py`) ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `check_stability_and_equivalence` (`black/__init__.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `is_class` (`black/lines.py`) ← `_maybe_empty_lines` ← `maybe_empty_lines` ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                               |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                        |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `contains_implicit_multiline_string_with_comments` (`black/lines.py`) ← `transform_line` (`black/linegen.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `_stringify_ast` (`black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `__init__` (`blib2to3/pytree.py`) ← `convert` ← `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `_stringify_ast` (`black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `__init__` (`<string>`) ← `maybe_empty_lines` (`black/lines.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `_run_module_as_main` (`<frozen runpy>`)

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -77.8% |    -7 | 3.5% → 0.9% |   9 → 2 | `__str__` (`black/lines.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -85.7% |    -6 | 2.7% → 0.5% |   7 → 1 | `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed |    -5 | 2.0% → 0.0% |   5 → 0 | `transform_line` (`black/linegen.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -44.4% |    -4 | 3.5% → 2.3% |   9 → 5 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -40.0% |    -4 | 3.9% → 2.8% |  10 → 6 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -37.5% |    -3 | 3.1% → 2.3% |   8 → 5 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |    -3 | 1.2% → 0.0% |   3 → 0 | `dump` (`blib2to3/pgen2/grammar.py`) ← `load_grammar` (`blib2to3/pgen2/driver.py`) ← `load_packaged_grammar` ← `initialize` (`blib2to3/pygram.py`) ← `<module>` (`black/nodes.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`black/comments.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`black/__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                                                          |
| removed |    -3 | 1.2% → 0.0% |   3 → 0 | `visit_power` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                     |
| removed |    -3 | 1.2% → 0.0% |   3 → 0 | `_maybe_empty_lines` (`black/lines.py`) ← `maybe_empty_lines` ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -33.3% |    -2 | 2.4% → 1.9% |   6 → 4 | `get_features_used` (`black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `is_docstring` (`black/lines.py`) ← `_maybe_empty_lines` ← `maybe_empty_lines` ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `generate_comments` (`black/comments.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`) |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `shift` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `format_str` (`black/__init__.py`) ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -13.3% |    -2 | 5.9% → 6.1% | 15 → 13 | `parse` (`ast.py`) ← `_parse_single_version` (`black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `_stringify_ast` (`black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `mark` (`black/brackets.py`) ← `append` (`black/lines.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                 |
| removed |    -2 | 0.8% → 0.0% |   2 → 0 | `__new__` (`blib2to3/pytree.py`) ← `convert` ← `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -18.2% |    -2 | 4.3% → 4.2% |  11 → 9 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

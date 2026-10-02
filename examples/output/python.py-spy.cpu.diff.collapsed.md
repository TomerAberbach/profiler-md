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

Functions with the largest increase in samples taken directly in the function body, excluding callees.

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

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

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

|  Change | Delta |            % | Samples | Location             |
| ------: | ----: | -----------: | ------: | -------------------- |
|     new |    +5 | 0.0% → 50.0% |   0 → 5 | `black/nodes.py:170` |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `black/nodes.py:181` |
|     new |    +3 | 0.0% → 30.0% |   0 → 3 | `black/nodes.py:152` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `black/nodes.py:174` |
|     new |    +1 | 0.0% → 10.0% |   0 → 1 | `black/nodes.py:163` |

##### `_hugging_power_ops_line_to_string` (`black/linegen.py`)

| Change | Delta |             % | Samples | Location               |
| -----: | ----: | ------------: | ------: | ---------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `black/linegen.py:596` |

##### `<genexpr>` (`black/lines.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
|     new |    +8 | 0.0% → 100.0% |   0 → 8 | `black/lines.py:445` |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `black/lines.py:456` |

##### `get_features_used` (`black/__init__.py`)

|  Change | Delta |             % | Samples | Location                        |
| ------: | ----: | ------------: | ------: | ------------------------------- |
|  +50.0% |    +1 | 33.3% → 37.5% |   2 → 3 | `black/__init__.py:1367 → 1346` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `black/__init__.py:1386`        |
| +100.0% |    +1 | 16.7% → 25.0% |   1 → 2 | `black/__init__.py:1424 → 1403` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `black/__init__.py:1427`        |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `black/__init__.py:1318`        |

##### `maybe_empty_lines` (`black/lines.py`)

|  Change | Delta |              % | Samples | Location             |
| ------: | ----: | -------------: | ------: | -------------------- |
| +300.0% |    +3 | 50.0% → 100.0% |   1 → 4 | `black/lines.py:573` |
| removed |    -1 |   50.0% → 0.0% |   1 → 0 | `black/lines.py:584` |

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

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `blib2to3/pytree.py:217` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `blib2to3/pytree.py:206` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `blib2to3/pytree.py:207` |

##### `visit_default` (`black/nodes.py`)

|  Change | Delta |            % | Samples | Location             |
| ------: | ----: | -----------: | ------: | -------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `black/nodes.py:187` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `black/nodes.py:189` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `black/nodes.py:176` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `black/nodes.py:178` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `black/nodes.py:180` |

##### `pop` (`blib2to3/pgen2/parse.py`)

|  Change | Delta |            % | Samples | Location                      |
| ------: | ----: | -----------: | ------: | ----------------------------- |
|     new |    +2 | 0.0% → 66.7% |   0 → 2 | `blib2to3/pgen2/parse.py:392` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `blib2to3/pgen2/parse.py:403` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `blib2to3/pgen2/parse.py:404` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `blib2to3/pgen2/parse.py:396` |

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

|  Change | Delta |            % | Samples | Location                      |
| ------: | ----: | -----------: | ------: | ----------------------------- |
| removed |    -3 | 15.8% → 0.0% |   3 → 0 | `blib2to3/pgen2/parse.py:299` |
| removed |    -3 | 15.8% → 0.0% |   3 → 0 | `blib2to3/pgen2/parse.py:328` |
|     new |    +3 | 0.0% → 27.3% |   0 → 3 | `blib2to3/pgen2/parse.py:285` |
| removed |    -2 | 10.5% → 0.0% |   2 → 0 | `blib2to3/pgen2/parse.py:295` |
| removed |    -2 | 10.5% → 0.0% |   2 → 0 | `blib2to3/pgen2/parse.py:297` |

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
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `black/nodes.py:223` |
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

|  Change | Delta |            % | Samples | Location                 |
| ------: | ----: | -----------: | ------: | ------------------------ |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `blib2to3/pytree.py:480` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `blib2to3/pytree.py:327` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `blib2to3/pytree.py:482` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `blib2to3/pytree.py:316` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `blib2to3/pytree.py:469` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

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

Functions with the largest decrease in total samples taken in the function and all its callees.

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

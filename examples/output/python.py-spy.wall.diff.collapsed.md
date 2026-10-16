# Sampling profile diff

Collected 215 samples → 208 samples (-7 samples, -3.3%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Ours             |  -4.4% |    -9 | 94.9% → 93.8% | 204 → 195 |
| Unknown          | +33.3% |    +3 |   4.2% → 5.8% |    9 → 12 |
| Standard library | -50.0% |    -1 |   0.9% → 0.5% |     2 → 1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                         | Location                  |
| ------: | ----: | ----------: | ------: | -------------------------------- | ------------------------- |
| +333.3% |   +10 | 1.4% → 6.3% |  3 → 13 | `push`                           | `blib2to3/pgen2/parse.py` |
| +350.0% |    +7 | 0.9% → 4.3% |   2 → 9 | `pop`                            | `blib2to3/pgen2/parse.py` |
|     new |    +5 | 0.0% → 2.4% |   0 → 5 | `_stringify_ast_with_new_parent` | `black/parsing.py`        |
| +400.0% |    +4 | 0.5% → 2.4% |   1 → 5 | `append`                         | `black/lines.py`          |
|  +26.7% |    +4 | 7.0% → 9.1% | 15 → 19 | `_addtoken`                      | `blib2to3/pgen2/parse.py` |
| +400.0% |    +4 | 0.5% → 2.4% |   1 → 5 | `convert_one_fmt_off_pair`       | `black/comments.py`       |
|  +75.0% |    +3 | 1.9% → 3.4% |   4 → 7 | `mark`                           | `black/brackets.py`       |
| +300.0% |    +3 | 0.5% → 1.9% |   1 → 4 | `__init__`                       | `blib2to3/pytree.py`      |
|  +33.3% |    +3 | 4.2% → 5.8% |  9 → 12 | `(anonymous)`                    | `<unknown>`               |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `clone`                          | `blib2to3/pytree.py`      |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `remove`                         | `blib2to3/pytree.py`      |
| +100.0% |    +1 | 0.5% → 1.0% |   1 → 2 | `prefix`                         | `blib2to3/pytree.py`      |
|  +14.3% |    +1 | 3.3% → 3.8% |   7 → 8 | `visit`                          | `black/nodes.py`          |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `visit_simple_stmt`              | `black/linegen.py`        |
| +100.0% |    +1 | 0.5% → 1.0% |   1 → 2 | `_format_str_once`               | `black/__init__.py`       |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `addtoken`                       | `blib2to3/pgen2/parse.py` |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `is_split_before_delimiter`      | `black/brackets.py`       |
|  +25.0% |    +1 | 1.9% → 2.4% |   4 → 5 | `__str__`                        | `black/lines.py`          |
| +100.0% |    +1 | 0.5% → 1.0% |   1 → 2 | `transform_line`                 | `black/linegen.py`        |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `is_docstring`                   | `black/nodes.py`          |

##### Ours

|  Change | Delta |           % | Samples | Function                         | Location                  |
| ------: | ----: | ----------: | ------: | -------------------------------- | ------------------------- |
| +333.3% |   +10 | 1.4% → 6.3% |  3 → 13 | `push`                           | `blib2to3/pgen2/parse.py` |
| +350.0% |    +7 | 0.9% → 4.3% |   2 → 9 | `pop`                            | `blib2to3/pgen2/parse.py` |
|     new |    +5 | 0.0% → 2.4% |   0 → 5 | `_stringify_ast_with_new_parent` | `black/parsing.py`        |
| +400.0% |    +4 | 0.5% → 2.4% |   1 → 5 | `append`                         | `black/lines.py`          |
|  +26.7% |    +4 | 7.0% → 9.1% | 15 → 19 | `_addtoken`                      | `blib2to3/pgen2/parse.py` |
| +400.0% |    +4 | 0.5% → 2.4% |   1 → 5 | `convert_one_fmt_off_pair`       | `black/comments.py`       |
|  +75.0% |    +3 | 1.9% → 3.4% |   4 → 7 | `mark`                           | `black/brackets.py`       |
| +300.0% |    +3 | 0.5% → 1.9% |   1 → 4 | `__init__`                       | `blib2to3/pytree.py`      |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `clone`                          | `blib2to3/pytree.py`      |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `remove`                         | `blib2to3/pytree.py`      |
| +100.0% |    +1 | 0.5% → 1.0% |   1 → 2 | `prefix`                         | `blib2to3/pytree.py`      |
|  +14.3% |    +1 | 3.3% → 3.8% |   7 → 8 | `visit`                          | `black/nodes.py`          |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `visit_simple_stmt`              | `black/linegen.py`        |
| +100.0% |    +1 | 0.5% → 1.0% |   1 → 2 | `_format_str_once`               | `black/__init__.py`       |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `addtoken`                       | `blib2to3/pgen2/parse.py` |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `is_split_before_delimiter`      | `black/brackets.py`       |
|  +25.0% |    +1 | 1.9% → 2.4% |   4 → 5 | `__str__`                        | `black/lines.py`          |
| +100.0% |    +1 | 0.5% → 1.0% |   1 → 2 | `transform_line`                 | `black/linegen.py`        |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `is_docstring`                   | `black/nodes.py`          |
| +100.0% |    +1 | 0.5% → 1.0% |   1 → 2 | `sub_twice`                      | `black/strings.py`        |

##### Unknown

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| +33.3% |    +3 | 4.2% → 5.8% |  9 → 12 | `(anonymous)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

##### Ours

|  Change | Delta |           % | Samples | Function                     | Location                     |
| ------: | ----: | ----------: | ------: | ---------------------------- | ---------------------------- |
|  -57.1% |   -12 | 9.8% → 4.3% |  21 → 9 | `generate_tokens`            | `blib2to3/pgen2/tokenize.py` |
|  -81.8% |    -9 | 5.1% → 1.0% |  11 → 2 | `convert`                    | `blib2to3/pytree.py`         |
|  -44.4% |    -8 | 8.4% → 4.8% | 18 → 10 | `generate_comments`          | `black/comments.py`          |
|  -40.0% |    -4 | 4.7% → 2.9% |  10 → 6 | `visit_default`              | `black/linegen.py`           |
| removed |    -4 | 1.9% → 0.0% |   4 → 0 | `all_lines`                  | `black/lines.py`             |
|  -57.1% |    -4 | 3.3% → 1.4% |   7 → 3 | `__init__`                   | `<string>`                   |
| removed |    -3 | 1.4% → 0.0% |   3 → 0 | `append_comment`             | `black/lines.py`             |
|  -66.7% |    -2 | 1.4% → 0.5% |   3 → 1 | `changed`                    | `blib2to3/pytree.py`         |
|  -25.0% |    -2 | 3.7% → 2.9% |   8 → 6 | `_stringify_ast`             | `black/parsing.py`           |
|  -50.0% |    -2 | 1.9% → 1.0% |   4 → 2 | `pre_order`                  | `blib2to3/pytree.py`         |
|  -66.7% |    -2 | 1.4% → 0.5% |   3 → 1 | `shift`                      | `blib2to3/pgen2/parse.py`    |
|  -66.7% |    -2 | 1.4% → 0.5% |   3 → 1 | `whitespace`                 | `black/nodes.py`             |
|  -25.0% |    -2 | 3.7% → 2.9% |   8 → 6 | `__new__`                    | `blib2to3/pytree.py`         |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `_maybe_empty_lines`         | `black/lines.py`             |
|  -33.3% |    -1 | 1.4% → 1.0% |   3 → 2 | `visit_default`              | `black/nodes.py`             |
|  -50.0% |    -1 | 0.9% → 0.5% |   2 → 1 | `assert_equivalent`          | `black/__init__.py`          |
|  -33.3% |    -1 | 1.4% → 1.0% |   3 → 2 | `normalize_invisible_parens` | `black/linegen.py`           |
| removed |    -1 | 0.5% → 0.0% |   1 → 0 | `__getitem__`                | `typing.py`                  |
| removed |    -1 | 0.5% → 0.0% |   1 → 0 | `<module>`                   | `blib2to3/pytree.py`         |
|  -50.0% |    -1 | 0.9% → 0.5% |   2 → 1 | `current`                    | `blib2to3/pgen2/tokenize.py` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `push` (`blib2to3/pgen2/parse.py`)

|  Change | Delta |             % | Samples | Location                      |
| ------: | ----: | ------------: | ------: | ----------------------------- |
|     new |    +9 |  0.0% → 69.2% |   0 → 9 | `blib2to3/pgen2/parse.py:382` |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `blib2to3/pgen2/parse.py:395` |
|     new |    +2 |  0.0% → 15.4% |   0 → 2 | `blib2to3/pgen2/parse.py:383` |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `blib2to3/pgen2/parse.py:381` |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `blib2to3/pgen2/parse.py:384` |

##### `pop` (`blib2to3/pgen2/parse.py`)

|  Change | Delta |             % | Samples | Location                      |
| ------: | ----: | ------------: | ------: | ----------------------------- |
|     new |    +4 |  0.0% → 44.4% |   0 → 4 | `blib2to3/pgen2/parse.py:392` |
|     new |    +3 |  0.0% → 33.3% |   0 → 3 | `blib2to3/pgen2/parse.py:391` |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `blib2to3/pgen2/parse.py:406` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `blib2to3/pgen2/parse.py:393` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `blib2to3/pgen2/parse.py:396` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py`)

| Change | Delta |             % | Samples | Location               |
| -----: | ----: | ------------: | ------: | ---------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `black/parsing.py:178` |

##### `append` (`black/lines.py`)

|  Change | Delta |              % | Samples | Location                 |
| ------: | ----: | -------------: | ------: | ------------------------ |
|     new |    +2 |   0.0% → 40.0% |   0 → 2 | `black/lines.py:80`      |
| +100.0% |    +1 | 100.0% → 40.0% |   1 → 2 | `black/lines.py:89 → 78` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `black/lines.py:68`      |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|  Change | Delta |            % | Samples | Location                      |
| ------: | ----: | -----------: | ------: | ----------------------------- |
|     new |    +6 | 0.0% → 31.6% |   0 → 6 | `blib2to3/pgen2/parse.py:285` |
| removed |    -4 | 26.7% → 0.0% |   4 → 0 | `blib2to3/pgen2/parse.py:326` |
| removed |    -3 | 20.0% → 0.0% |   3 → 0 | `blib2to3/pgen2/parse.py:298` |
|     new |    +3 | 0.0% → 15.8% |   0 → 3 | `blib2to3/pgen2/parse.py:316` |
| removed |    -2 | 13.3% → 0.0% |   2 → 0 | `blib2to3/pgen2/parse.py:297` |

##### `convert_one_fmt_off_pair` (`black/comments.py`)

|  Change | Delta |      % | Samples | Location                |
| ------: | ----: | -----: | ------: | ----------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `black/comments.py:186` |

##### `mark` (`black/brackets.py`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
|     new |    +5 | 0.0% → 71.4% |   0 → 5 | `black/brackets.py:112` |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `black/brackets.py:128` |
|     new |    +2 | 0.0% → 28.6% |   0 → 2 | `black/brackets.py:124` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `black/brackets.py:98`  |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `black/brackets.py:116` |

##### `__init__` (`blib2to3/pytree.py`)

| Change | Delta |            % | Samples | Location                 |
| -----: | ----: | -----------: | ------: | ------------------------ |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `blib2to3/pytree.py:258` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `blib2to3/pytree.py:259` |

##### `clone` (`blib2to3/pytree.py`)

| Change | Delta |             % | Samples | Location                 |
| -----: | ----: | ------------: | ------: | ------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `blib2to3/pytree.py:444` |

##### `remove` (`blib2to3/pytree.py`)

| Change | Delta |             % | Samples | Location                 |
| -----: | ----: | ------------: | ------: | ------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `blib2to3/pytree.py:179` |

##### `prefix` (`blib2to3/pytree.py`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `blib2to3/pytree.py:471` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `blib2to3/pytree.py:480` |

##### `visit` (`black/nodes.py`)

|  Change | Delta |            % | Samples | Location             |
| ------: | ----: | -----------: | ------: | -------------------- |
| removed |    -5 | 71.4% → 0.0% |   5 → 0 | `black/nodes.py:181` |
|     new |    +4 | 0.0% → 50.0% |   0 → 4 | `black/nodes.py:152` |
|     new |    +2 | 0.0% → 25.0% |   0 → 2 | `black/nodes.py:172` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `black/nodes.py:173` |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `black/nodes.py:170` |

##### `visit_simple_stmt` (`black/linegen.py`)

| Change | Delta |             % | Samples | Location               |
| -----: | ----: | ------------: | ------: | ---------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `black/linegen.py:303` |

##### `_format_str_once` (`black/__init__.py`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `black/__init__.py:1258` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `black/__init__.py:1274` |

##### `addtoken` (`blib2to3/pgen2/parse.py`)

| Change | Delta |             % | Samples | Location                      |
| -----: | ----: | ------------: | ------: | ----------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `blib2to3/pgen2/parse.py:240` |

##### `is_split_before_delimiter` (`black/brackets.py`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `black/brackets.py:240` |

##### `__str__` (`black/lines.py`)

|  Change | Delta |             % | Samples | Location                   |
| ------: | ----: | ------------: | ------: | -------------------------- |
| +300.0% |    +3 | 25.0% → 80.0% |   1 → 4 | `black/lines.py:500 → 489` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `black/lines.py:492`       |
|  -50.0% |    -1 | 50.0% → 20.0% |   2 → 1 | `black/lines.py:501 → 490` |

##### `transform_line` (`black/linegen.py`)

|  Change | Delta |             % | Samples | Location               |
| ------: | ----: | ------------: | ------: | ---------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `black/linegen.py:610` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `black/linegen.py:601` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `black/linegen.py:714` |

##### `is_docstring` (`black/nodes.py`)

| Change | Delta |             % | Samples | Location             |
| -----: | ----: | ------------: | ------: | -------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `black/nodes.py:573` |

##### `sub_twice` (`black/strings.py`)

|  Change | Delta |      % | Samples | Location              |
| ------: | ----: | -----: | ------: | --------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `black/strings.py:34` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|  Change | Delta |             % | Samples | Location                               |
| ------: | ----: | ------------: | ------: | -------------------------------------- |
|  -63.6% |    -7 | 52.4% → 44.4% |  11 → 4 | `blib2to3/pgen2/tokenize.py:875 → 864` |
| removed |    -3 |  14.3% → 0.0% |   3 → 0 | `blib2to3/pgen2/tokenize.py:879`       |
| removed |    -2 |   9.5% → 0.0% |   2 → 0 | `blib2to3/pgen2/tokenize.py:881`       |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `blib2to3/pgen2/tokenize.py:780`       |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `blib2to3/pgen2/tokenize.py:1103`      |

##### `convert` (`blib2to3/pytree.py`)

|  Change | Delta |             % | Samples | Location                       |
| ------: | ----: | ------------: | ------: | ------------------------------ |
|  -80.0% |    -4 | 45.5% → 50.0% |   5 → 1 | `blib2to3/pytree.py:503 → 492` |
|  -50.0% |    -1 | 18.2% → 50.0% |   2 → 1 | `blib2to3/pytree.py:486 → 475` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `blib2to3/pytree.py:494`       |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `blib2to3/pytree.py:498`       |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `blib2to3/pytree.py:499`       |

##### `generate_comments` (`black/comments.py`)

| Change | Delta |             % | Samples | Location               |
| -----: | ----: | ------------: | ------: | ---------------------- |
| -40.0% |    -6 | 83.3% → 90.0% |  15 → 9 | `black/comments.py:72` |
| -66.7% |    -2 | 16.7% → 10.0% |   3 → 1 | `black/comments.py:76` |

##### `visit_default` (`black/linegen.py`)

|  Change | Delta |             % | Samples | Location               |
| ------: | ----: | ------------: | ------: | ---------------------- |
| removed |    -3 |  30.0% → 0.0% |   3 → 0 | `black/linegen.py:155` |
|     new |    +2 |  0.0% → 33.3% |   0 → 2 | `black/linegen.py:157` |
|  -50.0% |    -1 | 20.0% → 16.7% |   2 → 1 | `black/linegen.py:138` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `black/linegen.py:154` |
|  -25.0% |    -1 | 40.0% → 50.0% |   4 → 3 | `black/linegen.py:158` |

##### `all_lines` (`black/lines.py`)

|  Change | Delta |            % | Samples | Location             |
| ------: | ----: | -----------: | ------: | -------------------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `black/lines.py:539` |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `black/lines.py:541` |

##### `__init__` (`<string>`)

|  Change | Delta |            % | Samples | Location     |
| ------: | ----: | -----------: | ------: | ------------ |
| removed |    -6 | 85.7% → 0.0% |   6 → 0 | `<string>:4` |
|     new |    +2 | 0.0% → 66.7% |   0 → 2 | `<string>:7` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `<string>:9` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `<string>:6` |

##### `append_comment` (`black/lines.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `black/lines.py:395` |

##### `changed` (`blib2to3/pytree.py`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `blib2to3/pytree.py:171` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `blib2to3/pytree.py:173` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `blib2to3/pytree.py:174` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `blib2to3/pytree.py:164` |

##### `_stringify_ast` (`black/parsing.py`)

|  Change | Delta |            % | Samples | Location               |
| ------: | ----: | -----------: | ------: | ---------------------- |
| removed |    -2 | 25.0% → 0.0% |   2 → 0 | `black/parsing.py:217` |
|     new |    +2 | 0.0% → 33.3% |   0 → 2 | `black/parsing.py:201` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `black/parsing.py:176` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `black/parsing.py:185` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `black/parsing.py:187` |

##### `pre_order` (`blib2to3/pytree.py`)

|  Change | Delta |            % | Samples | Location                 |
| ------: | ----: | -----------: | ------: | ------------------------ |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `blib2to3/pytree.py:316` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `blib2to3/pytree.py:469` |

##### `shift` (`blib2to3/pgen2/parse.py`)

|  Change | Delta |             % | Samples | Location                      |
| ------: | ----: | ------------: | ------: | ----------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `blib2to3/pgen2/parse.py:383` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `blib2to3/pgen2/parse.py:369` |

##### `whitespace` (`black/nodes.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| removed |    -2 |  66.7% → 0.0% |   2 → 0 | `black/nodes.py:393` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `black/nodes.py:271` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `black/nodes.py:194` |

##### `__new__` (`blib2to3/pytree.py`)

| Change | Delta |      % | Samples | Location                     |
| -----: | ----: | -----: | ------: | ---------------------------- |
| -25.0% |    -2 | 100.0% |   8 → 6 | `blib2to3/pytree.py:84 → 73` |

##### `_maybe_empty_lines` (`black/lines.py`)

|  Change | Delta |            % | Samples | Location             |
| ------: | ----: | -----------: | ------: | -------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `black/lines.py:618` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `black/lines.py:619` |

##### `visit_default` (`black/nodes.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `black/nodes.py:176` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `black/nodes.py:187` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `black/nodes.py:190` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `black/nodes.py:191` |

##### `assert_equivalent` (`black/__init__.py`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `black/__init__.py:1547` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `black/__init__.py:1532` |

##### `normalize_invisible_parens` (`black/linegen.py`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `black/linegen.py:1437` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `black/linegen.py:1351` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `black/linegen.py:1355` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `black/linegen.py:1385` |

##### `__getitem__` (`typing.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `typing.py:1625` |

##### `<module>` (`blib2to3/pytree.py`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `blib2to3/pytree.py:382` |

##### `current` (`blib2to3/pgen2/tokenize.py`)

|  Change | Delta |            % | Samples | Location                         |
| ------: | ----: | -----------: | ------: | -------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `blib2to3/pgen2/tokenize.py:533` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `push` (`blib2to3/pgen2/parse.py`)

|  Change | Delta |      % | Samples | Caller      | Location                  |
| ------: | ----: | -----: | ------: | ----------- | ------------------------- |
| +333.3% |   +10 | 100.0% |  3 → 13 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `pop` (`blib2to3/pgen2/parse.py`)

|  Change | Delta |      % | Samples | Caller      | Location                  |
| ------: | ----: | -----: | ------: | ----------- | ------------------------- |
| +350.0% |    +7 | 100.0% |   2 → 9 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py`)

| Change | Delta |             % | Samples | Caller           | Location           |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------ |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `_stringify_ast` | `black/parsing.py` |

##### `append` (`black/lines.py`)

|  Change | Delta |      % | Samples | Caller          | Location           |
| ------: | ----: | -----: | ------: | --------------- | ------------------ |
| +400.0% |    +4 | 100.0% |   1 → 5 | `visit_default` | `black/linegen.py` |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

| Change | Delta |      % | Samples | Caller     | Location                  |
| -----: | ----: | -----: | ------: | ---------- | ------------------------- |
| +26.7% |    +4 | 100.0% | 15 → 19 | `addtoken` | `blib2to3/pgen2/parse.py` |

##### `convert_one_fmt_off_pair` (`black/comments.py`)

|  Change | Delta |      % | Samples | Caller              | Location            |
| ------: | ----: | -----: | ------: | ------------------- | ------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `normalize_fmt_off` | `black/comments.py` |

##### `mark` (`black/brackets.py`)

| Change | Delta |      % | Samples | Caller   | Location         |
| -----: | ----: | -----: | ------: | -------- | ---------------- |
| +75.0% |    +3 | 100.0% |   4 → 7 | `append` | `black/lines.py` |

##### `__init__` (`blib2to3/pytree.py`)

|  Change | Delta |              % | Samples | Caller                | Location             |
| ------: | ----: | -------------: | ------: | --------------------- | -------------------- |
|     new |    +2 |   0.0% → 50.0% |   0 → 2 | `wrap_in_parentheses` | `black/nodes.py`     |
| +100.0% |    +1 | 100.0% → 50.0% |   1 → 2 | `convert`             | `blib2to3/pytree.py` |

##### `clone` (`blib2to3/pytree.py`)

| Change | Delta |             % | Samples | Caller         | Location         |
| -----: | ----: | ------------: | ------: | -------------- | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `hug_power_op` | `black/trans.py` |

##### `remove` (`blib2to3/pytree.py`)

| Change | Delta |             % | Samples | Caller                | Location         |
| -----: | ----: | ------------: | ------: | --------------------- | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `wrap_in_parentheses` | `black/nodes.py` |

##### `prefix` (`blib2to3/pytree.py`)

|  Change | Delta |      % | Samples | Caller          | Location           |
| ------: | ----: | -----: | ------: | --------------- | ------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `visit_default` | `black/linegen.py` |

##### `visit` (`black/nodes.py`)

|  Change | Delta |             % | Samples | Caller       | Location           |
| ------: | ----: | ------------: | ------: | ------------ | ------------------ |
| +100.0% |    +1 | 14.3% → 25.0% |   1 → 2 | `visit_stmt` | `black/linegen.py` |

##### `visit_simple_stmt` (`black/linegen.py`)

| Change | Delta |             % | Samples | Caller  | Location         |
| -----: | ----: | ------------: | ------: | ------- | ---------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visit` | `black/nodes.py` |

##### `_format_str_once` (`black/__init__.py`)

|  Change | Delta |             % | Samples | Caller          | Location            |
| ------: | ----: | ------------: | ------: | --------------- | ------------------- |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `assert_stable` | `black/__init__.py` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `format_str`    | `black/__init__.py` |

##### `addtoken` (`blib2to3/pgen2/parse.py`)

| Change | Delta |             % | Samples | Caller         | Location                   |
| -----: | ----: | ------------: | ------: | -------------- | -------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `parse_tokens` | `blib2to3/pgen2/driver.py` |

##### `is_split_before_delimiter` (`black/brackets.py`)

| Change | Delta |             % | Samples | Caller | Location            |
| -----: | ----: | ------------: | ------: | ------ | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `mark` | `black/brackets.py` |

##### `__str__` (`black/lines.py`)

| Change | Delta |             % | Samples | Caller           | Location         |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------- |
| +33.3% |    +1 | 75.0% → 80.0% |   3 → 4 | `line_to_string` | `black/lines.py` |

##### `transform_line` (`black/linegen.py`)

|  Change | Delta |      % | Samples | Caller             | Location            |
| ------: | ----: | -----: | ------: | ------------------ | ------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `_format_str_once` | `black/__init__.py` |

##### `is_docstring` (`black/nodes.py`)

| Change | Delta |             % | Samples | Caller         | Location           |
| -----: | ----: | ------------: | ------: | -------------- | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visit_STRING` | `black/linegen.py` |

##### `sub_twice` (`black/strings.py`)

|  Change | Delta |      % | Samples | Caller                    | Location           |
| ------: | ----: | -----: | ------: | ------------------------- | ------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `normalize_string_quotes` | `black/strings.py` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

| Change | Delta |      % | Samples | Caller     | Location                   |
| -----: | ----: | -----: | ------: | ---------- | -------------------------- |
| -57.1% |   -12 | 100.0% |  21 → 9 | `__next__` | `blib2to3/pgen2/driver.py` |

##### `convert` (`blib2to3/pytree.py`)

|  Change | Delta |              % | Samples | Caller  | Location                  |
| ------: | ----: | -------------: | ------: | ------- | ------------------------- |
|  -71.4% |    -5 | 63.6% → 100.0% |   7 → 2 | `shift` | `blib2to3/pgen2/parse.py` |
| removed |    -4 |   36.4% → 0.0% |   4 → 0 | `pop`   | `blib2to3/pgen2/parse.py` |

##### `generate_comments` (`black/comments.py`)

| Change | Delta |      % | Samples | Caller          | Location           |
| -----: | ----: | -----: | ------: | --------------- | ------------------ |
| -44.4% |    -8 | 100.0% | 18 → 10 | `visit_default` | `black/linegen.py` |

##### `visit_default` (`black/linegen.py`)

|  Change | Delta |              % | Samples | Caller         | Location           |
| ------: | ----: | -------------: | ------: | -------------- | ------------------ |
| removed |    -2 |   20.0% → 0.0% |   2 → 0 | `visit_suite`  | `black/linegen.py` |
|  -14.3% |    -1 | 70.0% → 100.0% |   7 → 6 | `visit`        | `black/nodes.py`   |
| removed |    -1 |   10.0% → 0.0% |   1 → 0 | `visit_INDENT` | `black/linegen.py` |

##### `all_lines` (`black/lines.py`)

|  Change | Delta |             % | Samples | Caller             | Location            |
| ------: | ----: | ------------: | ------: | ------------------ | ------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `_format_str_once` | `black/__init__.py` |

##### `__init__` (`<string>`)

|  Change | Delta |             % | Samples | Caller      | Location           |
| ------: | ----: | ------------: | ------: | ----------- | ------------------ |
| removed |    -7 | 100.0% → 0.0% |   7 → 0 | `__init__`  | `<string>`         |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `all_lines` | `black/lines.py`   |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `line`      | `black/linegen.py` |

##### `append_comment` (`black/lines.py`)

|  Change | Delta |             % | Samples | Caller   | Location         |
| ------: | ----: | ------------: | ------: | -------- | ---------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `append` | `black/lines.py` |

##### `changed` (`blib2to3/pytree.py`)

|  Change | Delta |             % | Samples | Caller    | Location             |
| ------: | ----: | ------------: | ------: | --------- | -------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `changed` | `blib2to3/pytree.py` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `prefix`  | `blib2to3/pytree.py` |

##### `_stringify_ast` (`black/parsing.py`)

|  Change | Delta |              % | Samples | Caller                           | Location            |
| ------: | ----: | -------------: | ------: | -------------------------------- | ------------------- |
|  -14.3% |    -1 | 87.5% → 100.0% |   7 → 6 | `_stringify_ast_with_new_parent` | `black/parsing.py`  |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `assert_equivalent`              | `black/__init__.py` |

##### `pre_order` (`blib2to3/pytree.py`)

|  Change | Delta |              % | Samples | Caller              | Location             |
| ------: | ----: | -------------: | ------: | ------------------- | -------------------- |
|  -33.3% |    -1 | 75.0% → 100.0% |   3 → 2 | `pre_order`         | `blib2to3/pytree.py` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `get_features_used` | `black/__init__.py`  |

##### `shift` (`blib2to3/pgen2/parse.py`)

| Change | Delta |      % | Samples | Caller      | Location                  |
| -----: | ----: | -----: | ------: | ----------- | ------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `whitespace` (`black/nodes.py`)

| Change | Delta |      % | Samples | Caller   | Location         |
| -----: | ----: | -----: | ------: | -------- | ---------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `append` | `black/lines.py` |

##### `__new__` (`blib2to3/pytree.py`)

| Change | Delta |      % | Samples | Caller    | Location             |
| -----: | ----: | -----: | ------: | --------- | -------------------- |
| -25.0% |    -2 | 100.0% |   8 → 6 | `convert` | `blib2to3/pytree.py` |

##### `_maybe_empty_lines` (`black/lines.py`)

|  Change | Delta |             % | Samples | Caller              | Location         |
| ------: | ----: | ------------: | ------: | ------------------- | ---------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `maybe_empty_lines` | `black/lines.py` |

##### `visit_default` (`black/nodes.py`)

| Change | Delta |      % | Samples | Caller          | Location           |
| -----: | ----: | -----: | ------: | --------------- | ------------------ |
| -33.3% |    -1 | 100.0% |   3 → 2 | `visit_default` | `black/linegen.py` |

##### `assert_equivalent` (`black/__init__.py`)

| Change | Delta |      % | Samples | Caller                            | Location            |
| -----: | ----: | -----: | ------: | --------------------------------- | ------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `check_stability_and_equivalence` | `black/__init__.py` |

##### `normalize_invisible_parens` (`black/linegen.py`)

| Change | Delta |      % | Samples | Caller       | Location           |
| -----: | ----: | -----: | ------: | ------------ | ------------------ |
| -33.3% |    -1 | 100.0% |   3 → 2 | `visit_stmt` | `black/linegen.py` |

##### `__getitem__` (`typing.py`)

|  Change | Delta |             % | Samples | Caller  | Location    |
| ------: | ----: | ------------: | ------: | ------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `inner` | `typing.py` |

##### `<module>` (`blib2to3/pytree.py`)

|  Change | Delta |             % | Samples | Caller                      | Location                        |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `current` (`blib2to3/pgen2/tokenize.py`)

| Change | Delta |      % | Samples | Caller            | Location                     |
| -----: | ----: | -----: | ------: | ----------------- | ---------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `generate_tokens` | `blib2to3/pgen2/tokenize.py` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % | Samples | Function                         | Location                  |
| ------: | ----: | ------------: | ------: | -------------------------------- | ------------------------- |
|  +25.0% |   +11 | 20.5% → 26.4% | 44 → 55 | `addtoken`                       | `blib2to3/pgen2/parse.py` |
| +333.3% |   +10 |   1.4% → 6.3% |  3 → 13 | `push`                           | `blib2to3/pgen2/parse.py` |
|  +20.9% |    +9 | 20.0% → 25.0% | 43 → 52 | `_addtoken`                      | `blib2to3/pgen2/parse.py` |
| +133.3% |    +8 |   2.8% → 6.7% |  6 → 14 | `transform_line`                 | `black/linegen.py`        |
|     new |    +5 |   0.0% → 2.4% |   0 → 5 | `run_transformer`                | `black/linegen.py`        |
|  +57.1% |    +4 |   3.3% → 5.3% |  7 → 11 | `_stringify_ast_with_new_parent` | `black/parsing.py`        |
|  +80.0% |    +4 |   2.3% → 4.3% |   5 → 9 | `mark`                           | `black/brackets.py`       |
|  +37.5% |    +3 |   3.7% → 5.3% |  8 → 11 | `_stringify_ast`                 | `black/parsing.py`        |
| +300.0% |    +3 |   0.5% → 1.9% |   1 → 4 | `wrap_in_parentheses`            | `black/nodes.py`          |
|  +75.0% |    +3 |   1.9% → 3.4% |   4 → 7 | `normalize_invisible_parens`     | `black/linegen.py`        |
| +300.0% |    +3 |   0.5% → 1.9% |   1 → 4 | `__init__`                       | `blib2to3/pytree.py`      |
| +100.0% |    +3 |   1.4% → 2.9% |   3 → 6 | `convert_one_fmt_off_pair`       | `black/comments.py`       |
| +100.0% |    +3 |   1.4% → 2.9% |   3 → 6 | `normalize_fmt_off`              | `black/comments.py`       |
| +150.0% |    +3 |   0.9% → 2.4% |   2 → 5 | `hug_power_op`                   | `black/trans.py`          |
|  +33.3% |    +3 |   4.2% → 5.8% |  9 → 12 | `(anonymous)`                    | `<unknown>`               |
|   +4.4% |    +2 | 20.9% → 22.6% | 45 → 47 | `visit_simple_stmt`              | `black/linegen.py`        |
|  +11.8% |    +2 |   7.9% → 9.1% | 17 → 19 | `append`                         | `black/lines.py`          |
|     new |    +2 |   0.0% → 1.0% |   0 → 2 | `preceding_leaf`                 | `black/nodes.py`          |
|     new |    +2 |   0.0% → 1.0% |   0 → 2 | `clone`                          | `blib2to3/pytree.py`      |
|     new |    +2 |   0.0% → 1.0% |   0 → 2 | `remove`                         | `blib2to3/pytree.py`      |

##### Ours

|  Change | Delta |             % | Samples | Function                         | Location                  |
| ------: | ----: | ------------: | ------: | -------------------------------- | ------------------------- |
|  +25.0% |   +11 | 20.5% → 26.4% | 44 → 55 | `addtoken`                       | `blib2to3/pgen2/parse.py` |
| +333.3% |   +10 |   1.4% → 6.3% |  3 → 13 | `push`                           | `blib2to3/pgen2/parse.py` |
|  +20.9% |    +9 | 20.0% → 25.0% | 43 → 52 | `_addtoken`                      | `blib2to3/pgen2/parse.py` |
| +133.3% |    +8 |   2.8% → 6.7% |  6 → 14 | `transform_line`                 | `black/linegen.py`        |
|     new |    +5 |   0.0% → 2.4% |   0 → 5 | `run_transformer`                | `black/linegen.py`        |
|  +57.1% |    +4 |   3.3% → 5.3% |  7 → 11 | `_stringify_ast_with_new_parent` | `black/parsing.py`        |
|  +80.0% |    +4 |   2.3% → 4.3% |   5 → 9 | `mark`                           | `black/brackets.py`       |
|  +37.5% |    +3 |   3.7% → 5.3% |  8 → 11 | `_stringify_ast`                 | `black/parsing.py`        |
| +300.0% |    +3 |   0.5% → 1.9% |   1 → 4 | `wrap_in_parentheses`            | `black/nodes.py`          |
|  +75.0% |    +3 |   1.9% → 3.4% |   4 → 7 | `normalize_invisible_parens`     | `black/linegen.py`        |
| +300.0% |    +3 |   0.5% → 1.9% |   1 → 4 | `__init__`                       | `blib2to3/pytree.py`      |
| +100.0% |    +3 |   1.4% → 2.9% |   3 → 6 | `convert_one_fmt_off_pair`       | `black/comments.py`       |
| +100.0% |    +3 |   1.4% → 2.9% |   3 → 6 | `normalize_fmt_off`              | `black/comments.py`       |
| +150.0% |    +3 |   0.9% → 2.4% |   2 → 5 | `hug_power_op`                   | `black/trans.py`          |
|   +4.4% |    +2 | 20.9% → 22.6% | 45 → 47 | `visit_simple_stmt`              | `black/linegen.py`        |
|  +11.8% |    +2 |   7.9% → 9.1% | 17 → 19 | `append`                         | `black/lines.py`          |
|     new |    +2 |   0.0% → 1.0% |   0 → 2 | `preceding_leaf`                 | `black/nodes.py`          |
|     new |    +2 |   0.0% → 1.0% |   0 → 2 | `clone`                          | `blib2to3/pytree.py`      |
|     new |    +2 |   0.0% → 1.0% |   0 → 2 | `remove`                         | `blib2to3/pytree.py`      |
|   +4.0% |    +1 | 11.6% → 12.5% | 25 → 26 | `assert_equivalent`              | `black/__init__.py`       |

##### Unknown

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| +33.3% |    +3 | 4.2% → 5.8% |  9 → 12 | `(anonymous)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |   Samples | Function               | Location                     |
| -----: | ----: | ------------: | --------: | ---------------------- | ---------------------------- |
| -58.3% |   -14 |  11.2% → 4.8% |   24 → 10 | `generate_tokens`      | `blib2to3/pgen2/tokenize.py` |
| -58.3% |   -14 |  11.2% → 4.8% |   24 → 10 | `__next__`             | `blib2to3/pgen2/driver.py`   |
| -17.8% |   -13 | 34.0% → 28.8% |   73 → 60 | `visit_funcdef`        | `black/linegen.py`           |
| -14.5% |   -11 | 35.3% → 31.3% |   76 → 65 | `visit_default`        | `black/linegen.py`           |
| -14.5% |   -11 | 35.3% → 31.3% |   76 → 65 | `visit`                | `black/nodes.py`             |
| -14.5% |   -11 | 35.3% → 31.3% |   76 → 65 | `visit_default`        | `black/nodes.py`             |
| -14.9% |   -11 | 34.4% → 30.3% |   74 → 63 | `visit_suite`          | `black/linegen.py`           |
| -14.5% |   -11 | 35.3% → 31.3% |   76 → 65 | `visit_stmt`           | `black/linegen.py`           |
|  -4.9% |   -10 | 95.8% → 94.2% | 206 → 196 | `_run_module_as_main`  | `<frozen runpy>`             |
| -50.0% |   -10 |   9.3% → 4.8% |   20 → 10 | `convert`              | `blib2to3/pytree.py`         |
| -42.9% |    -9 |   9.8% → 5.8% |   21 → 12 | `generate_comments`    | `black/comments.py`          |
| -30.0% |    -9 | 14.0% → 10.1% |   30 → 21 | `visit_power`          | `black/linegen.py`           |
|  -4.6% |    -8 | 80.9% → 79.8% | 174 → 166 | `_format_str_once`     | `black/__init__.py`          |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `format_file_in_place` | `black/__init__.py`          |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `reformat_one`         | `black/__init__.py`          |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `main`                 | `black/__init__.py`          |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `new_func`             | `click/decorators.py`        |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `invoke`               | `click/core.py`              |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `main`                 | `click/core.py`              |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `__call__`             | `click/core.py`              |

##### Ours

| Change | Delta |             % |   Samples | Function               | Location                     |
| -----: | ----: | ------------: | --------: | ---------------------- | ---------------------------- |
| -58.3% |   -14 |  11.2% → 4.8% |   24 → 10 | `generate_tokens`      | `blib2to3/pgen2/tokenize.py` |
| -58.3% |   -14 |  11.2% → 4.8% |   24 → 10 | `__next__`             | `blib2to3/pgen2/driver.py`   |
| -17.8% |   -13 | 34.0% → 28.8% |   73 → 60 | `visit_funcdef`        | `black/linegen.py`           |
| -14.5% |   -11 | 35.3% → 31.3% |   76 → 65 | `visit_default`        | `black/linegen.py`           |
| -14.5% |   -11 | 35.3% → 31.3% |   76 → 65 | `visit`                | `black/nodes.py`             |
| -14.5% |   -11 | 35.3% → 31.3% |   76 → 65 | `visit_default`        | `black/nodes.py`             |
| -14.9% |   -11 | 34.4% → 30.3% |   74 → 63 | `visit_suite`          | `black/linegen.py`           |
| -14.5% |   -11 | 35.3% → 31.3% |   76 → 65 | `visit_stmt`           | `black/linegen.py`           |
| -50.0% |   -10 |   9.3% → 4.8% |   20 → 10 | `convert`              | `blib2to3/pytree.py`         |
| -42.9% |    -9 |   9.8% → 5.8% |   21 → 12 | `generate_comments`    | `black/comments.py`          |
| -30.0% |    -9 | 14.0% → 10.1% |   30 → 21 | `visit_power`          | `black/linegen.py`           |
|  -4.6% |    -8 | 80.9% → 79.8% | 174 → 166 | `_format_str_once`     | `black/__init__.py`          |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `format_file_in_place` | `black/__init__.py`          |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `reformat_one`         | `black/__init__.py`          |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `main`                 | `black/__init__.py`          |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `new_func`             | `click/decorators.py`        |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `invoke`               | `click/core.py`              |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `main`                 | `click/core.py`              |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `__call__`             | `click/core.py`              |
|  -4.0% |    -8 | 93.0% → 92.3% | 200 → 192 | `patched_main`         | `black/__init__.py`          |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `addtoken` (`blib2to3/pgen2/parse.py`)

|  Change | Delta |             % | Samples | Callee      | Location                  |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------- |
|  +20.9% |    +9 | 97.7% → 94.5% | 43 → 52 | `_addtoken` | `blib2to3/pgen2/parse.py` |
| +100.0% |    +1 |   2.3% → 3.6% |   1 → 2 | `classify`  | `blib2to3/pgen2/parse.py` |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|  Change | Delta |             % | Samples | Callee  | Location                  |
| ------: | ----: | ------------: | ------: | ------- | ------------------------- |
| +333.3% |   +10 |  7.0% → 25.0% |  3 → 13 | `push`  | `blib2to3/pgen2/parse.py` |
|  -25.0% |    -3 | 27.9% → 17.3% |  12 → 9 | `shift` | `blib2to3/pgen2/parse.py` |
|  -15.4% |    -2 | 30.2% → 21.2% | 13 → 11 | `pop`   | `blib2to3/pgen2/parse.py` |

##### `transform_line` (`black/linegen.py`)

| Change | Delta |             % | Samples | Callee                              | Location           |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------ |
|    new |    +5 |  0.0% → 35.7% |   0 → 5 | `run_transformer`                   | `black/linegen.py` |
| +33.3% |    +1 | 50.0% → 28.6% |   3 → 4 | `line_to_string`                    | `black/lines.py`   |
| +50.0% |    +1 | 33.3% → 21.4% |   2 → 3 | `_hugging_power_ops_line_to_string` | `black/linegen.py` |

##### `run_transformer` (`black/linegen.py`)

| Change | Delta |            % | Samples | Callee           | Location           |
| -----: | ----: | -----------: | ------: | ---------------- | ------------------ |
|    new |    +3 | 0.0% → 60.0% |   0 → 3 | `hug_power_op`   | `black/trans.py`   |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `_rhs`           | `black/linegen.py` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `split_wrapper`  | `black/linegen.py` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `transform_line` | `black/linegen.py` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py`)

| Change | Delta |      % | Samples | Callee           | Location           |
| -----: | ----: | -----: | ------: | ---------------- | ------------------ |
| +57.1% |    +4 | 100.0% |  7 → 11 | `_stringify_ast` | `black/parsing.py` |

##### `mark` (`black/brackets.py`)

|  Change | Delta |             % | Samples | Callee                      | Location            |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------- |
| +100.0% |    +1 | 20.0% → 22.2% |   1 → 2 | `is_split_before_delimiter` | `black/brackets.py` |

##### `_stringify_ast` (`black/parsing.py`)

| Change | Delta |              % | Samples | Callee                           | Location           |
| -----: | ----: | -------------: | ------: | -------------------------------- | ------------------ |
| +57.1% |    +4 | 87.5% → 100.0% |  7 → 11 | `_stringify_ast_with_new_parent` | `black/parsing.py` |

##### `wrap_in_parentheses` (`black/nodes.py`)

|  Change | Delta |             % | Samples | Callee     | Location             |
| ------: | ----: | ------------: | ------: | ---------- | -------------------- |
|     new |    +2 |  0.0% → 50.0% |   0 → 2 | `__init__` | `blib2to3/pytree.py` |
|     new |    +2 |  0.0% → 50.0% |   0 → 2 | `remove`   | `blib2to3/pytree.py` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `prefix`   | `blib2to3/pytree.py` |

##### `normalize_invisible_parens` (`black/linegen.py`)

|  Change | Delta |             % | Samples | Callee                | Location         |
| ------: | ----: | ------------: | ------: | --------------------- | ---------------- |
| +300.0% |    +3 | 25.0% → 57.1% |   1 → 4 | `wrap_in_parentheses` | `black/nodes.py` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `is_one_tuple`        | `black/nodes.py` |

##### `convert_one_fmt_off_pair` (`black/comments.py`)

| Change | Delta |             % | Samples | Callee   | Location             |
| -----: | ----: | ------------: | ------: | -------- | -------------------- |
| -50.0% |    -1 | 66.7% → 16.7% |   2 → 1 | `leaves` | `blib2to3/pytree.py` |

##### `normalize_fmt_off` (`black/comments.py`)

|  Change | Delta |      % | Samples | Callee                     | Location            |
| ------: | ----: | -----: | ------: | -------------------------- | ------------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `convert_one_fmt_off_pair` | `black/comments.py` |

##### `hug_power_op` (`black/trans.py`)

| Change | Delta |            % | Samples | Callee  | Location             |
| -----: | ----: | -----------: | ------: | ------- | -------------------- |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `clone` | `blib2to3/pytree.py` |

##### `visit_simple_stmt` (`black/linegen.py`)

|  Change | Delta |             % | Samples | Callee          | Location           |
| ------: | ----: | ------------: | ------: | --------------- | ------------------ |
|   +4.5% |    +2 | 97.8% → 97.9% | 44 → 46 | `visit_default` | `black/linegen.py` |
| removed |    -1 |   2.2% → 0.0% |   1 → 0 | `line`          | `black/linegen.py` |

##### `append` (`black/lines.py`)

|  Change | Delta |             % | Samples | Callee                     | Location            |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------- |
|  +80.0% |    +4 | 29.4% → 47.4% |   5 → 9 | `mark`                     | `black/brackets.py` |
| removed |    -3 |  17.6% → 0.0% |   3 → 0 | `append_comment`           | `black/lines.py`    |
| removed |    -1 |   5.9% → 0.0% |   1 → 0 | `is_complex_subscript`     | `black/lines.py`    |
|  -16.7% |    -1 | 35.3% → 26.3% |   6 → 5 | `whitespace`               | `black/nodes.py`    |
| removed |    -1 |   5.9% → 0.0% |   1 → 0 | `has_magic_trailing_comma` | `black/lines.py`    |

##### `preceding_leaf` (`black/nodes.py`)

| Change | Delta |             % | Samples | Callee         | Location             |
| -----: | ----: | ------------: | ------: | -------------- | -------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `prev_sibling` | `blib2to3/pytree.py` |

##### `assert_equivalent` (`black/__init__.py`)

| Change | Delta |             % | Samples | Callee           | Location           |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------ |
| +37.5% |    +3 | 32.0% → 42.3% |  8 → 11 | `_stringify_ast` | `black/parsing.py` |
|  -6.7% |    -1 | 60.0% → 53.8% | 15 → 14 | `parse_ast`      | `black/parsing.py` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|  Change | Delta |            % | Samples | Callee             | Location                     |
| ------: | ----: | -----------: | ------: | ------------------ | ---------------------------- |
|  -50.0% |    -1 | 8.3% → 10.0% |   2 → 1 | `current`          | `blib2to3/pgen2/tokenize.py` |
| removed |    -1 |  4.2% → 0.0% |   1 → 0 | `is_fstring_start` | `blib2to3/pgen2/tokenize.py` |

##### `__next__` (`blib2to3/pgen2/driver.py`)

| Change | Delta |      % | Samples | Callee            | Location                     |
| -----: | ----: | -----: | ------: | ----------------- | ---------------------------- |
| -58.3% |   -14 | 100.0% | 24 → 10 | `generate_tokens` | `blib2to3/pgen2/tokenize.py` |

##### `visit_funcdef` (`black/linegen.py`)

| Change | Delta |      % | Samples | Callee  | Location         |
| -----: | ----: | -----: | ------: | ------- | ---------------- |
| -17.8% |   -13 | 100.0% | 73 → 60 | `visit` | `black/nodes.py` |

##### `visit_default` (`black/linegen.py`)

|  Change | Delta |             % | Samples | Callee              | Location             |
| ------: | ----: | ------------: | ------: | ------------------- | -------------------- |
|  -14.5% |   -11 |        100.0% | 76 → 65 | `visit_default`     | `black/nodes.py`     |
|  -42.9% |    -9 | 27.6% → 18.5% | 21 → 12 | `generate_comments` | `black/comments.py`  |
|  +11.8% |    +2 | 22.4% → 29.2% | 17 → 19 | `append`            | `black/lines.py`     |
| +100.0% |    +1 |   1.3% → 3.1% |   1 → 2 | `prefix`            | `blib2to3/pytree.py` |

##### `visit` (`black/nodes.py`)

| Change | Delta |             % | Samples | Callee          | Location           |
| -----: | ----: | ------------: | ------: | --------------- | ------------------ |
| -17.8% |   -13 | 96.1% → 92.3% | 73 → 60 | `visit_funcdef` | `black/linegen.py` |
| -14.9% |   -11 | 97.4% → 96.9% | 74 → 63 | `visit_suite`   | `black/linegen.py` |
| -14.5% |   -11 |        100.0% | 76 → 65 | `visit_stmt`    | `black/linegen.py` |
| -14.5% |   -11 |        100.0% | 76 → 65 | `visit_default` | `black/linegen.py` |
| -30.0% |    -9 | 39.5% → 32.3% | 30 → 21 | `visit_power`   | `black/linegen.py` |

##### `visit_default` (`black/nodes.py`)

| Change | Delta |      % | Samples | Callee  | Location         |
| -----: | ----: | -----: | ------: | ------- | ---------------- |
| -14.5% |   -11 | 100.0% | 76 → 65 | `visit` | `black/nodes.py` |

##### `visit_suite` (`black/linegen.py`)

| Change | Delta |      % | Samples | Callee          | Location           |
| -----: | ----: | -----: | ------: | --------------- | ------------------ |
| -14.9% |   -11 | 100.0% | 74 → 63 | `visit_default` | `black/linegen.py` |

##### `visit_stmt` (`black/linegen.py`)

|  Change | Delta |              % | Samples | Callee                       | Location           |
| ------: | ----: | -------------: | ------: | ---------------------------- | ------------------ |
|  -13.3% |   -10 | 98.7% → 100.0% | 75 → 65 | `visit`                      | `black/nodes.py`   |
| removed |    -6 |    7.9% → 0.0% |   6 → 0 | `line`                       | `black/linegen.py` |
|  +75.0% |    +3 |   5.3% → 10.8% |   4 → 7 | `normalize_invisible_parens` | `black/linegen.py` |
|     new |    +1 |    0.0% → 1.5% |   0 → 1 | `is_name_token`              | `black/nodes.py`   |

##### `_run_module_as_main` (`<frozen runpy>`)

| Change | Delta |             % |   Samples | Callee                | Location         |
| -----: | ----: | ------------: | --------: | --------------------- | ---------------- |
|  -4.0% |    -8 | 97.1% → 98.0% | 200 → 192 | `_run_code`           | `<frozen runpy>` |
| -33.3% |    -2 |   2.9% → 2.0% |     6 → 4 | `_get_module_details` | `<frozen runpy>` |

##### `convert` (`blib2to3/pytree.py`)

|  Change | Delta |             % | Samples | Callee     | Location             |
| ------: | ----: | ------------: | ------: | ---------- | -------------------- |
|  -25.0% |    -2 | 40.0% → 60.0% |   8 → 6 | `__new__`  | `blib2to3/pytree.py` |
| +100.0% |    +1 |  5.0% → 20.0% |   1 → 2 | `__init__` | `blib2to3/pytree.py` |

##### `generate_comments` (`black/comments.py`)

| Change | Delta |             % | Samples | Callee                      | Location            |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------- |
| -33.3% |    -1 | 14.3% → 16.7% |   3 → 2 | `normalize_trailing_prefix` | `black/comments.py` |

##### `visit_power` (`black/linegen.py`)

|  Change | Delta |           % | Samples | Callee                | Location           |
| ------: | ----: | ----------: | ------: | --------------------- | ------------------ |
|  -30.0% |    -9 |      100.0% | 30 → 21 | `visit_default`       | `black/linegen.py` |
| removed |    -1 | 3.3% → 0.0% |   1 → 0 | `remove_await_parens` | `black/linegen.py` |

##### `_format_str_once` (`black/__init__.py`)

|  Change | Delta |             % | Samples | Callee              | Location            |
| ------: | ----: | ------------: | ------: | ------------------- | ------------------- |
|  -14.5% |   -11 | 43.7% → 39.2% | 76 → 65 | `visit`             | `black/nodes.py`    |
| +133.3% |    +8 |   3.4% → 8.4% |  6 → 14 | `transform_line`    | `black/linegen.py`  |
|   -4.1% |    -3 | 42.0% → 42.2% | 73 → 70 | `lib2to3_parse`     | `black/parsing.py`  |
| +100.0% |    +3 |   1.7% → 3.6% |   3 → 6 | `normalize_fmt_off` | `black/comments.py` |
|  -50.0% |    -2 |   2.3% → 1.2% |   4 → 2 | `all_lines`         | `black/lines.py`    |

##### `format_file_in_place` (`black/__init__.py`)

|  Change | Delta |              % |   Samples | Callee                 | Location            |
| ------: | ----: | -------------: | --------: | ---------------------- | ------------------- |
|   -3.5% |    -7 | 99.5% → 100.0% | 199 → 192 | `format_file_contents` | `black/__init__.py` |
| removed |    -1 |    0.5% → 0.0% |     1 → 0 | `decode_bytes`         | `black/__init__.py` |

##### `reformat_one` (`black/__init__.py`)

| Change | Delta |      % |   Samples | Callee                 | Location            |
| -----: | ----: | -----: | --------: | ---------------------- | ------------------- |
|  -4.0% |    -8 | 100.0% | 200 → 192 | `format_file_in_place` | `black/__init__.py` |

##### `main` (`black/__init__.py`)

| Change | Delta |      % |   Samples | Callee         | Location            |
| -----: | ----: | -----: | --------: | -------------- | ------------------- |
|  -4.0% |    -8 | 100.0% | 200 → 192 | `reformat_one` | `black/__init__.py` |

##### `new_func` (`click/decorators.py`)

| Change | Delta |      % |   Samples | Callee | Location            |
| -----: | ----: | -----: | --------: | ------ | ------------------- |
|  -4.0% |    -8 | 100.0% | 200 → 192 | `main` | `black/__init__.py` |

##### `invoke` (`click/core.py`)

| Change | Delta |      % |   Samples | Callee     | Location              |
| -----: | ----: | -----: | --------: | ---------- | --------------------- |
|  -4.0% |    -8 | 100.0% | 200 → 192 | `new_func` | `click/decorators.py` |
|  -4.0% |    -8 | 100.0% | 200 → 192 | `invoke`   | `click/core.py`       |

##### `main` (`click/core.py`)

| Change | Delta |      % |   Samples | Callee   | Location        |
| -----: | ----: | -----: | --------: | -------- | --------------- |
|  -4.0% |    -8 | 100.0% | 200 → 192 | `invoke` | `click/core.py` |

##### `__call__` (`click/core.py`)

| Change | Delta |      % |   Samples | Callee | Location        |
| -----: | ----: | -----: | --------: | ------ | --------------- |
|  -4.0% |    -8 | 100.0% | 200 → 192 | `main` | `click/core.py` |

##### `patched_main` (`black/__init__.py`)

| Change | Delta |      % |   Samples | Callee     | Location        |
| -----: | ----: | -----: | --------: | ---------- | --------------- |
|  -4.0% |    -8 | 100.0% | 200 → 192 | `__call__` | `click/core.py` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `format_file_contents` (`black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +550.0% |   +11 | 0.9% → 6.3% |  2 → 13 | `push` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| +300.0% |    +6 | 0.9% → 3.8% |   2 → 8 | `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  +62.5% |    +5 | 3.7% → 6.3% |  8 → 13 | `_addtoken` (`blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| +300.0% |    +3 | 0.5% → 1.9% |   1 → 4 | `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|     new |    +3 | 0.0% → 1.4% |   0 → 3 | `_stringify_ast` (`black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| +200.0% |    +2 | 0.5% → 1.4% |   1 → 3 | `convert_one_fmt_off_pair` (`black/comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| +200.0% |    +2 | 0.5% → 1.4% |   1 → 3 | `__new__` (`blib2to3/pytree.py`) ← `convert` ← `shift` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| +200.0% |    +2 | 0.5% → 1.4% |   1 → 3 | `__new__` (`blib2to3/pytree.py`) ← `convert` ← `shift` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `sub_twice` (`black/strings.py`) ← `normalize_string_quotes` ← `visit_STRING` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `hug_power_op` (`black/trans.py`) ← `run_transformer` (`black/linegen.py`) ← `transform_line` ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `prefix` (`blib2to3/pytree.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `visit_default` (`black/nodes.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `mark` (`black/brackets.py`) ← `append` (`black/lines.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `__init__` (`<string>`) ← `all_lines` (`black/lines.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `mark` (`black/brackets.py`) ← `append` (`black/lines.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `append` (`black/lines.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|     new |    +2 | 0.0% → 1.0% |   0 → 2 | `remove` (`blib2to3/pytree.py`) ← `wrap_in_parentheses` (`black/nodes.py`) ← `normalize_invisible_parens` (`black/linegen.py`) ← `visit_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `format_file_contents` (`black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`black/__init__.py`) ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  -63.6% |    -7 | 5.1% → 1.9% |  11 → 4 | `generate_comments` (`black/comments.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                          |
|  -46.2% |    -6 | 6.0% → 3.4% |  13 → 7 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -75.0% |    -6 | 3.7% → 1.0% |   8 → 2 | `generate_tokens` (`blib2to3/pgen2/tokenize.py`) ← `__next__` (`blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |    -6 | 2.8% → 0.0% |   6 → 0 | `__new__` (`blib2to3/pytree.py`) ← `convert` ← `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed |    -6 | 2.8% → 0.0% |   6 → 0 | `__init__` (`<string>`) ← `__init__` ← `line` (`black/linegen.py`) ← `visit_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -66.7% |    -4 | 2.8% → 1.0% |   6 → 2 | `convert` (`blib2to3/pytree.py`) ← `shift` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |    -3 | 1.4% → 0.0% |   3 → 0 | `convert` (`blib2to3/pytree.py`) ← `pop` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |    -3 | 1.4% → 0.0% |   3 → 0 | `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed |    -3 | 1.4% → 0.0% |   3 → 0 | `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `normalize_invisible_parens` (`black/linegen.py`) ← `visit_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `_stringify_ast` (`black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `generate_comments` (`black/comments.py`) ← `visit_default` (`black/linegen.py`) ← `visit_DEDENT` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `all_lines` (`black/lines.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -50.0% |    -2 | 1.9% → 1.0% |   4 → 2 | `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `whitespace` (`black/nodes.py`) ← `append` (`black/lines.py`) ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_factor` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_power` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `append_comment` (`black/lines.py`) ← `append` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `all_lines` (`black/lines.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `_maybe_empty_lines` (`black/lines.py`) ← `maybe_empty_lines` ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_funcdef` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit_suite` ← `visit` (`black/nodes.py`) ← `visit_stmt` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `visit_default` ← `visit_default` (`black/linegen.py`) ← `visit` (`black/nodes.py`) ← `_format_str_once` (`black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `shift` (`blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`black/parsing.py`) ← `_format_str_once` (`black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

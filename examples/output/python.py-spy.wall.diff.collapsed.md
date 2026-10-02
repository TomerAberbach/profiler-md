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

Functions with the largest increase in samples taken directly in the function body, excluding callees.

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

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

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

|  Change | Delta |             % | Samples | Location            |
| ------: | ----: | ------------: | ------: | ------------------- |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `black/lines.py:78` |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `black/lines.py:80` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `black/lines.py:89` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `black/lines.py:68` |

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

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
|     new |    +2 |  0.0% → 50.0% |   0 → 2 | `blib2to3/pytree.py:258` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `blib2to3/pytree.py:266` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `blib2to3/pytree.py:255` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `blib2to3/pytree.py:259` |

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

|  Change | Delta |            % | Samples | Location             |
| ------: | ----: | -----------: | ------: | -------------------- |
|     new |    +4 | 0.0% → 80.0% |   0 → 4 | `black/lines.py:489` |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `black/lines.py:501` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `black/lines.py:492` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `black/lines.py:500` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `black/lines.py:490` |

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

|  Change | Delta |            % | Samples | Location                 |
| ------: | ----: | -----------: | ------: | ------------------------ |
| removed |    -5 | 45.5% → 0.0% |   5 → 0 | `blib2to3/pytree.py:503` |
| removed |    -2 | 18.2% → 0.0% |   2 → 0 | `blib2to3/pytree.py:486` |
| removed |    -1 |  9.1% → 0.0% |   1 → 0 | `blib2to3/pytree.py:494` |
| removed |    -1 |  9.1% → 0.0% |   1 → 0 | `blib2to3/pytree.py:498` |
| removed |    -1 |  9.1% → 0.0% |   1 → 0 | `blib2to3/pytree.py:499` |

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
|     new |    +2 | 0.0% → 33.3% |   0 → 2 | `black/parsing.py:195` |
|     new |    +2 | 0.0% → 33.3% |   0 → 2 | `black/parsing.py:201` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `black/parsing.py:176` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `black/parsing.py:185` |

##### `pre_order` (`blib2to3/pytree.py`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -2 |  50.0% → 0.0% |   2 → 0 | `blib2to3/pytree.py:318` |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `blib2to3/pytree.py:307` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `blib2to3/pytree.py:316` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `blib2to3/pytree.py:469` |

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

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `blib2to3/pytree.py:84` |
|     new |    +6 | 0.0% → 100.0% |   0 → 6 | `blib2to3/pytree.py:73` |

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

|  Change | Delta |             % | Samples | Location                         |
| ------: | ----: | ------------: | ------: | -------------------------------- |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `blib2to3/pgen2/tokenize.py:533` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `blib2to3/pgen2/tokenize.py:534` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `blib2to3/pgen2/tokenize.py:523` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

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

Functions with the largest decrease in total samples taken in the function and all its callees.

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

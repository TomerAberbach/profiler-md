# Sampling profile diff

Collected 219 samples → 221 samples (+2 samples, +0.9%).

| Category         | Change | Delta |           % |   Samples |
| ---------------- | -----: | ----: | ----------: | --------: |
| Ours             |  +1.0% |    +2 |       95.9% | 210 → 212 |
| Unknown          |   0.0% |     0 | 3.7% → 3.6% |         8 |
| Standard library |   0.0% |     0 |        0.5% |         1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

##### Ours

|  Change | Delta |           % | Samples | Function                          | Location                     |
| ------: | ----: | ----------: | ------: | --------------------------------- | ---------------------------- |
| +533.3% |   +16 | 1.4% → 8.6% |  3 → 19 | `push`                            | `blib2to3/pgen2/parse.py`    |
| +500.0% |    +5 | 0.5% → 2.7% |   1 → 6 | `visit_default`                   | `black/linegen.py`           |
|  +33.3% |    +5 | 6.8% → 9.0% | 15 → 20 | `parse`                           | `ast.py`                     |
| +200.0% |    +4 | 0.9% → 2.7% |   2 → 6 | `parse_tokens`                    | `blib2to3/pgen2/driver.py`   |
| +200.0% |    +4 | 0.9% → 2.7% |   2 → 6 | `mark`                            | `black/brackets.py`          |
|     new |    +3 | 0.0% → 1.4% |   0 → 3 | `visit_power`                     | `black/linegen.py`           |
| +150.0% |    +3 | 0.9% → 2.3% |   2 → 5 | `append`                          | `black/lines.py`             |
| +300.0% |    +3 | 0.5% → 1.8% |   1 → 4 | `<genexpr>`                       | `blib2to3/pgen2/tokenize.py` |
|     new |    +3 | 0.0% → 1.4% |   0 → 3 | `run_transformer`                 | `black/linegen.py`           |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `format_str`                      | `black/__init__.py`          |
|  +66.7% |    +2 | 1.4% → 2.3% |   3 → 5 | `__init__`                        | `blib2to3/pytree.py`         |
| +100.0% |    +2 | 0.9% → 1.8% |   2 → 4 | `visit_default`                   | `black/nodes.py`             |
| +200.0% |    +2 | 0.5% → 1.4% |   1 → 3 | `hug_power_op`                    | `black/trans.py`             |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `__init_subclass__`               | `typing.py`                  |
|     new |    +2 | 0.0% → 0.9% |   0 → 2 | `parse_parts`                     | `pathlib.py`                 |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `check_stability_and_equivalence` | `black/__init__.py`          |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `wrap_in_parentheses`             | `black/nodes.py`             |
|  +25.0% |    +1 | 1.8% → 2.3% |   4 → 5 | `visit`                           | `black/nodes.py`             |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `visit_suite`                     | `black/linegen.py`           |
|     new |    +1 | 0.0% → 0.5% |   0 → 1 | `visit_simple_stmt`               | `black/linegen.py`           |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

##### Ours

|  Change | Delta |             % | Samples | Function                         | Location                     |
| ------: | ----: | ------------: | ------: | -------------------------------- | ---------------------------- |
|  -72.7% |    -8 |   5.0% → 1.4% |  11 → 3 | `get_features_used`              | `black/__init__.py`          |
|  -77.8% |    -7 |   4.1% → 0.9% |   9 → 2 | `normalize_trailing_prefix`      | `black/comments.py`          |
|  -46.7% |    -7 |   6.8% → 3.6% |  15 → 8 | `__new__`                        | `blib2to3/pytree.py`         |
|  -21.4% |    -6 | 12.8% → 10.0% | 28 → 22 | `_addtoken`                      | `blib2to3/pgen2/parse.py`    |
|  -80.0% |    -4 |   2.3% → 0.5% |   5 → 1 | `_stringify_ast_with_new_parent` | `black/parsing.py`           |
|  -66.7% |    -4 |   2.7% → 0.9% |   6 → 2 | `__init__`                       | `<string>`                   |
|  -42.9% |    -3 |   3.2% → 1.8% |   7 → 4 | `convert`                        | `blib2to3/pytree.py`         |
|  -37.5% |    -3 |   3.7% → 2.3% |   8 → 5 | `_stringify_ast`                 | `black/parsing.py`           |
|  -50.0% |    -3 |   2.7% → 1.4% |   6 → 3 | `pop`                            | `blib2to3/pgen2/parse.py`    |
|  -25.0% |    -3 |   5.5% → 4.1% |  12 → 9 | `generate_tokens`                | `blib2to3/pgen2/tokenize.py` |
|  -66.7% |    -2 |   1.4% → 0.5% |   3 → 1 | `shift`                          | `blib2to3/pgen2/parse.py`    |
| removed |    -2 |   0.9% → 0.0% |   2 → 0 | `normalize_invisible_parens`     | `black/linegen.py`           |
|  -66.7% |    -2 |   1.4% → 0.5% |   3 → 1 | `pre_order`                      | `blib2to3/pytree.py`         |
| removed |    -2 |   0.9% → 0.0% |   2 → 0 | `changed`                        | `blib2to3/pytree.py`         |
| removed |    -2 |   0.9% → 0.0% |   2 → 0 | `is_def`                         | `black/lines.py`             |
| removed |    -1 |   0.5% → 0.0% |   1 → 0 | `visit_stmt`                     | `black/linegen.py`           |
|  -25.0% |    -1 |   1.8% → 1.4% |   4 → 3 | `leaves`                         | `blib2to3/pytree.py`         |
| removed |    -1 |   0.5% → 0.0% |   1 → 0 | `is_complex_subscript`           | `black/lines.py`             |
| removed |    -1 |   0.5% → 0.0% |   1 → 0 | `is_import`                      | `black/nodes.py`             |
| removed |    -1 |   0.5% → 0.0% |   1 → 0 | `_maybe_empty_lines`             | `black/lines.py`             |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `push` (`blib2to3/pgen2/parse.py`)

|  Change | Delta |      % | Samples | Location                            |
| ------: | ----: | -----: | ------: | ----------------------------------- |
| +533.3% |   +16 | 100.0% |  3 → 19 | `blib2to3/pgen2/parse.py:386 → 374` |

##### `visit_default` (`black/linegen.py`)

|  Change | Delta |      % | Samples | Location               |
| ------: | ----: | -----: | ------: | ---------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `black/linegen.py:134` |

##### `parse` (`ast.py`)

| Change | Delta |      % | Samples | Location    |
| -----: | ----: | -----: | ------: | ----------- |
| +33.3% |    +5 | 100.0% | 15 → 20 | `ast.py:33` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|  Change | Delta |      % | Samples | Location                       |
| ------: | ----: | -----: | ------: | ------------------------------ |
| +200.0% |    +4 | 100.0% |   2 → 6 | `blib2to3/pgen2/driver.py:114` |

##### `mark` (`black/brackets.py`)

|  Change | Delta |      % | Samples | Location               |
| ------: | ----: | -----: | ------: | ---------------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `black/brackets.py:70` |

##### `visit_power` (`black/linegen.py`)

| Change | Delta |             % | Samples | Location               |
| -----: | ----: | ------------: | ------: | ---------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `black/linegen.py:341` |

##### `append` (`black/lines.py`)

|  Change | Delta |      % | Samples | Location                 |
| ------: | ----: | -----: | ------: | ------------------------ |
| +150.0% |    +3 | 100.0% |   2 → 5 | `black/lines.py:63 → 52` |

##### `<genexpr>` (`blib2to3/pgen2/tokenize.py`)

|  Change | Delta |             % | Samples | Location                         |
| ------: | ----: | ------------: | ------: | -------------------------------- |
|     new |    +4 | 0.0% → 100.0% |   0 → 4 | `blib2to3/pgen2/tokenize.py:460` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `blib2to3/pgen2/tokenize.py:471` |

##### `run_transformer` (`black/linegen.py`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `black/linegen.py:1771` |

##### `format_str` (`black/__init__.py`)

| Change | Delta |             % | Samples | Location                 |
| -----: | ----: | ------------: | ------: | ------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `black/__init__.py:1168` |

##### `__init__` (`blib2to3/pytree.py`)

| Change | Delta |              % | Samples | Location                       |
| -----: | ----: | -------------: | ------: | ------------------------------ |
|    new |    +4 |   0.0% → 80.0% |   0 → 4 | `blib2to3/pytree.py:389`       |
| -66.7% |    -2 | 100.0% → 20.0% |   3 → 1 | `blib2to3/pytree.py:248 → 237` |

##### `visit_default` (`black/nodes.py`)

|  Change | Delta |      % | Samples | Location                   |
| ------: | ----: | -----: | ------: | -------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `black/nodes.py:187 → 176` |

##### `hug_power_op` (`black/trans.py`)

|  Change | Delta |             % | Samples | Location            |
| ------: | ----: | ------------: | ------: | ------------------- |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `black/trans.py:81` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `black/trans.py:85` |

##### `__init_subclass__` (`typing.py`)

| Change | Delta |             % | Samples | Location         |
| -----: | ----: | ------------: | ------: | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `typing.py:1820` |

##### `parse_parts` (`pathlib.py`)

| Change | Delta |             % | Samples | Location        |
| -----: | ----: | ------------: | ------: | --------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `pathlib.py:55` |

##### `check_stability_and_equivalence` (`black/__init__.py`)

| Change | Delta |             % | Samples | Location                 |
| -----: | ----: | ------------: | ------: | ------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `black/__init__.py:1042` |

##### `wrap_in_parentheses` (`black/nodes.py`)

| Change | Delta |             % | Samples | Location             |
| -----: | ----: | ------------: | ------: | -------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `black/nodes.py:930` |

##### `visit` (`black/nodes.py`)

| Change | Delta |      % | Samples | Location                   |
| -----: | ----: | -----: | ------: | -------------------------- |
| +25.0% |    +1 | 100.0% |   4 → 5 | `black/nodes.py:163 → 152` |

##### `visit_suite` (`black/linegen.py`)

| Change | Delta |             % | Samples | Location               |
| -----: | ----: | ------------: | ------: | ---------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `black/linegen.py:288` |

##### `visit_simple_stmt` (`black/linegen.py`)

| Change | Delta |             % | Samples | Location               |
| -----: | ----: | ------------: | ------: | ---------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `black/linegen.py:295` |

##### `get_features_used` (`black/__init__.py`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |   -11 | 100.0% → 0.0% |  11 → 0 | `black/__init__.py:1307` |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `black/__init__.py:1286` |

##### `normalize_trailing_prefix` (`black/comments.py`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -77.8% |    -7 | 100.0% |   9 → 2 | `black/comments.py:127` |

##### `__new__` (`blib2to3/pytree.py`)

| Change | Delta |      % | Samples | Location                     |
| -----: | ----: | -----: | ------: | ---------------------------- |
| -46.7% |    -7 | 100.0% |  15 → 8 | `blib2to3/pytree.py:81 → 70` |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

| Change | Delta |      % | Samples | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------------- |
| -21.4% |    -6 | 100.0% | 28 → 22 | `blib2to3/pgen2/parse.py:290 → 278` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py`)

|  Change | Delta |             % | Samples | Location               |
| ------: | ----: | ------------: | ------: | ---------------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `black/parsing.py:166` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `black/parsing.py:174` |

##### `__init__` (`<string>`)

| Change | Delta |      % | Samples | Location     |
| -----: | ----: | -----: | ------: | ------------ |
| -66.7% |    -4 | 100.0% |   6 → 2 | `<string>:2` |

##### `convert` (`blib2to3/pytree.py`)

| Change | Delta |      % | Samples | Location                       |
| -----: | ----: | -----: | ------: | ------------------------------ |
| -42.9% |    -3 | 100.0% |   7 → 4 | `blib2to3/pytree.py:486 → 475` |

##### `_stringify_ast` (`black/parsing.py`)

|  Change | Delta |             % | Samples | Location               |
| ------: | ----: | ------------: | ------: | ---------------------- |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `black/parsing.py:174` |
|     new |    +5 | 0.0% → 100.0% |   0 → 5 | `black/parsing.py:182` |

##### `pop` (`blib2to3/pgen2/parse.py`)

| Change | Delta |      % | Samples | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `blib2to3/pgen2/parse.py:398 → 386` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

|  Change | Delta |             % | Samples | Location                         |
| ------: | ----: | ------------: | ------: | -------------------------------- |
| removed |   -12 | 100.0% → 0.0% |  12 → 0 | `blib2to3/pgen2/tokenize.py:565` |
|     new |    +9 | 0.0% → 100.0% |   0 → 9 | `blib2to3/pgen2/tokenize.py:554` |

##### `shift` (`blib2to3/pgen2/parse.py`)

| Change | Delta |      % | Samples | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `blib2to3/pgen2/parse.py:373 → 361` |

##### `normalize_invisible_parens` (`black/linegen.py`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `black/linegen.py:1328` |

##### `pre_order` (`blib2to3/pytree.py`)

| Change | Delta |      % | Samples | Location                       |
| -----: | ----: | -----: | ------: | ------------------------------ |
| -66.7% |    -2 | 100.0% |   3 → 1 | `blib2to3/pytree.py:314 → 303` |

##### `changed` (`blib2to3/pytree.py`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `blib2to3/pytree.py:171` |

##### `is_def` (`black/lines.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `black/lines.py:160` |

##### `visit_stmt` (`black/linegen.py`)

|  Change | Delta |             % | Samples | Location               |
| ------: | ----: | ------------: | ------: | ---------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `black/linegen.py:199` |

##### `leaves` (`blib2to3/pytree.py`)

| Change | Delta |      % | Samples | Location                       |
| -----: | ----: | -----: | ------: | ------------------------------ |
| -25.0% |    -1 | 100.0% |   4 → 3 | `blib2to3/pytree.py:221 → 210` |

##### `is_complex_subscript` (`black/lines.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `black/lines.py:441` |

##### `is_import` (`black/nodes.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `black/nodes.py:871` |

##### `_maybe_empty_lines` (`black/lines.py`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `black/lines.py:610` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `push` (`blib2to3/pgen2/parse.py`)

|  Change | Delta |      % | Samples | Caller      | Location                  |
| ------: | ----: | -----: | ------: | ----------- | ------------------------- |
| +533.3% |   +16 | 100.0% |  3 → 19 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `visit_default` (`black/linegen.py`)

|  Change | Delta |              % | Samples | Caller        | Location           |
| ------: | ----: | -------------: | ------: | ------------- | ------------------ |
| +300.0% |    +3 | 100.0% → 66.7% |   1 → 4 | `visit`       | `black/nodes.py`   |
|     new |    +2 |   0.0% → 33.3% |   0 → 2 | `visit_power` | `black/linegen.py` |

##### `parse` (`ast.py`)

| Change | Delta |      % | Samples | Caller                  | Location           |
| -----: | ----: | -----: | ------: | ----------------------- | ------------------ |
| +33.3% |    +5 | 100.0% | 15 → 20 | `_parse_single_version` | `black/parsing.py` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py`)

|  Change | Delta |      % | Samples | Caller         | Location                   |
| ------: | ----: | -----: | ------: | -------------- | -------------------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `parse_string` | `blib2to3/pgen2/driver.py` |

##### `mark` (`black/brackets.py`)

|  Change | Delta |      % | Samples | Caller   | Location         |
| ------: | ----: | -----: | ------: | -------- | ---------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `append` | `black/lines.py` |

##### `visit_power` (`black/linegen.py`)

| Change | Delta |             % | Samples | Caller  | Location         |
| -----: | ----: | ------------: | ------: | ------- | ---------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `visit` | `black/nodes.py` |

##### `append` (`black/lines.py`)

|  Change | Delta |      % | Samples | Caller          | Location           |
| ------: | ----: | -----: | ------: | --------------- | ------------------ |
| +150.0% |    +3 | 100.0% |   2 → 5 | `visit_default` | `black/linegen.py` |

##### `<genexpr>` (`blib2to3/pgen2/tokenize.py`)

|  Change | Delta |      % | Samples | Caller             | Location                     |
| ------: | ----: | -----: | ------: | ------------------ | ---------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `is_fstring_start` | `blib2to3/pgen2/tokenize.py` |

##### `run_transformer` (`black/linegen.py`)

| Change | Delta |             % | Samples | Caller           | Location           |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `transform_line` | `black/linegen.py` |

##### `format_str` (`black/__init__.py`)

| Change | Delta |             % | Samples | Caller                 | Location            |
| -----: | ----: | ------------: | ------: | ---------------------- | ------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `format_file_contents` | `black/__init__.py` |

##### `__init__` (`blib2to3/pytree.py`)

|  Change | Delta |              % | Samples | Caller                | Location             |
| ------: | ----: | -------------: | ------: | --------------------- | -------------------- |
| +150.0% |    +3 | 66.7% → 100.0% |   2 → 5 | `convert`             | `blib2to3/pytree.py` |
| removed |    -1 |   33.3% → 0.0% |   1 → 0 | `wrap_in_parentheses` | `black/nodes.py`     |

##### `visit_default` (`black/nodes.py`)

|  Change | Delta |      % | Samples | Caller          | Location           |
| ------: | ----: | -----: | ------: | --------------- | ------------------ |
| +100.0% |    +2 | 100.0% |   2 → 4 | `visit_default` | `black/linegen.py` |

##### `hug_power_op` (`black/trans.py`)

| Change | Delta |            % | Samples | Caller                              | Location           |
| -----: | ----: | -----------: | ------: | ----------------------------------- | ------------------ |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `_hugging_power_ops_line_to_string` | `black/linegen.py` |

##### `__init_subclass__` (`typing.py`)

| Change | Delta |             % | Samples | Caller     | Location         |
| -----: | ----: | ------------: | ------: | ---------- | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `<module>` | `black/rusty.py` |

##### `parse_parts` (`pathlib.py`)

| Change | Delta |             % | Samples | Caller        | Location     |
| -----: | ----: | ------------: | ------: | ------------- | ------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `_parse_args` | `pathlib.py` |

##### `check_stability_and_equivalence` (`black/__init__.py`)

| Change | Delta |             % | Samples | Caller                 | Location            |
| -----: | ----: | ------------: | ------: | ---------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `format_file_contents` | `black/__init__.py` |

##### `wrap_in_parentheses` (`black/nodes.py`)

| Change | Delta |             % | Samples | Caller                       | Location           |
| -----: | ----: | ------------: | ------: | ---------------------------- | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `normalize_invisible_parens` | `black/linegen.py` |

##### `visit` (`black/nodes.py`)

| Change | Delta |            % | Samples | Caller       | Location           |
| -----: | ----: | -----------: | ------: | ------------ | ------------------ |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `visit_stmt` | `black/linegen.py` |

##### `visit_suite` (`black/linegen.py`)

| Change | Delta |             % | Samples | Caller  | Location         |
| -----: | ----: | ------------: | ------: | ------- | ---------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visit` | `black/nodes.py` |

##### `visit_simple_stmt` (`black/linegen.py`)

| Change | Delta |             % | Samples | Caller  | Location         |
| -----: | ----: | ------------: | ------: | ------- | ---------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visit` | `black/nodes.py` |

##### `get_features_used` (`black/__init__.py`)

| Change | Delta |      % | Samples | Caller                   | Location            |
| -----: | ----: | -----: | ------: | ------------------------ | ------------------- |
| -72.7% |    -8 | 100.0% |  11 → 3 | `detect_target_versions` | `black/__init__.py` |

##### `normalize_trailing_prefix` (`black/comments.py`)

| Change | Delta |      % | Samples | Caller              | Location            |
| -----: | ----: | -----: | ------: | ------------------- | ------------------- |
| -77.8% |    -7 | 100.0% |   9 → 2 | `generate_comments` | `black/comments.py` |

##### `__new__` (`blib2to3/pytree.py`)

| Change | Delta |              % | Samples | Caller                | Location             |
| -----: | ----: | -------------: | ------: | --------------------- | -------------------- |
| -53.3% |    -8 | 100.0% → 87.5% |  15 → 7 | `convert`             | `blib2to3/pytree.py` |
|    new |    +1 |   0.0% → 12.5% |   0 → 1 | `wrap_in_parentheses` | `black/nodes.py`     |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

| Change | Delta |      % | Samples | Caller     | Location                  |
| -----: | ----: | -----: | ------: | ---------- | ------------------------- |
| -21.4% |    -6 | 100.0% | 28 → 22 | `addtoken` | `blib2to3/pgen2/parse.py` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py`)

| Change | Delta |      % | Samples | Caller           | Location           |
| -----: | ----: | -----: | ------: | ---------------- | ------------------ |
| -80.0% |    -4 | 100.0% |   5 → 1 | `_stringify_ast` | `black/parsing.py` |

##### `__init__` (`<string>`)

|  Change | Delta |            % | Samples | Caller              | Location         |
| ------: | ----: | -----------: | ------: | ------------------- | ---------------- |
| removed |    -5 | 83.3% → 0.0% |   5 → 0 | `__init__`          | `<string>`       |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `maybe_empty_lines` | `black/lines.py` |

##### `convert` (`blib2to3/pytree.py`)

|  Change | Delta |             % | Samples | Caller  | Location                  |
| ------: | ----: | ------------: | ------: | ------- | ------------------------- |
|  -83.3% |    -5 | 85.7% → 25.0% |   6 → 1 | `shift` | `blib2to3/pgen2/parse.py` |
| +200.0% |    +2 | 14.3% → 75.0% |   1 → 3 | `pop`   | `blib2to3/pgen2/parse.py` |

##### `_stringify_ast` (`black/parsing.py`)

| Change | Delta |      % | Samples | Caller                           | Location           |
| -----: | ----: | -----: | ------: | -------------------------------- | ------------------ |
| -37.5% |    -3 | 100.0% |   8 → 5 | `_stringify_ast_with_new_parent` | `black/parsing.py` |

##### `pop` (`blib2to3/pgen2/parse.py`)

| Change | Delta |      % | Samples | Caller      | Location                  |
| -----: | ----: | -----: | ------: | ----------- | ------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py`)

| Change | Delta |      % | Samples | Caller     | Location                   |
| -----: | ----: | -----: | ------: | ---------- | -------------------------- |
| -25.0% |    -3 | 100.0% |  12 → 9 | `__next__` | `blib2to3/pgen2/driver.py` |

##### `shift` (`blib2to3/pgen2/parse.py`)

| Change | Delta |      % | Samples | Caller      | Location                  |
| -----: | ----: | -----: | ------: | ----------- | ------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `normalize_invisible_parens` (`black/linegen.py`)

|  Change | Delta |             % | Samples | Caller       | Location           |
| ------: | ----: | ------------: | ------: | ------------ | ------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `visit_stmt` | `black/linegen.py` |

##### `pre_order` (`blib2to3/pytree.py`)

| Change | Delta |      % | Samples | Caller      | Location             |
| -----: | ----: | -----: | ------: | ----------- | -------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `pre_order` | `blib2to3/pytree.py` |

##### `changed` (`blib2to3/pytree.py`)

|  Change | Delta |             % | Samples | Caller   | Location             |
| ------: | ----: | ------------: | ------: | -------- | -------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `prefix` | `blib2to3/pytree.py` |

##### `is_def` (`black/lines.py`)

|  Change | Delta |             % | Samples | Caller               | Location         |
| ------: | ----: | ------------: | ------: | -------------------- | ---------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `_maybe_empty_lines` | `black/lines.py` |

##### `visit_stmt` (`black/linegen.py`)

|  Change | Delta |             % | Samples | Caller  | Location         |
| ------: | ----: | ------------: | ------: | ------- | ---------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visit` | `black/nodes.py` |

##### `leaves` (`blib2to3/pytree.py`)

| Change | Delta |      % | Samples | Caller   | Location             |
| -----: | ----: | -----: | ------: | -------- | -------------------- |
| -25.0% |    -1 | 100.0% |   4 → 3 | `leaves` | `blib2to3/pytree.py` |

##### `is_complex_subscript` (`black/lines.py`)

|  Change | Delta |             % | Samples | Caller   | Location         |
| ------: | ----: | ------------: | ------: | -------- | ---------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `append` | `black/lines.py` |

##### `is_import` (`black/nodes.py`)

|  Change | Delta |             % | Samples | Caller      | Location         |
| ------: | ----: | ------------: | ------: | ----------- | ---------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `is_import` | `black/lines.py` |

##### `_maybe_empty_lines` (`black/lines.py`)

|  Change | Delta |             % | Samples | Caller              | Location         |
| ------: | ----: | ------------: | ------: | ------------------- | ---------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `maybe_empty_lines` | `black/lines.py` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                            | Location                     |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ---------------------------- |
| +533.3% |   +16 |   1.4% → 8.6% |    3 → 19 | `push`                              | `blib2to3/pgen2/parse.py`    |
|   +5.6% |    +7 | 57.1% → 59.7% | 125 → 132 | `format_str`                        | `black/__init__.py`          |
|  +60.0% |    +6 |   4.6% → 7.2% |   10 → 16 | `transform_line`                    | `black/linegen.py`           |
|  +33.3% |    +5 |   6.8% → 9.0% |   15 → 20 | `parse`                             | `ast.py`                     |
|  +33.3% |    +5 |   6.8% → 9.0% |   15 → 20 | `_parse_single_version`             | `black/parsing.py`           |
|  +33.3% |    +5 |   6.8% → 9.0% |   15 → 20 | `parse_ast`                         | `black/parsing.py`           |
|  +20.0% |    +3 |   6.8% → 8.1% |   15 → 18 | `append`                            | `black/lines.py`             |
| +300.0% |    +3 |   0.5% → 1.8% |     1 → 4 | `<genexpr>`                         | `blib2to3/pgen2/tokenize.py` |
| +300.0% |    +3 |   0.5% → 1.8% |     1 → 4 | `is_fstring_start`                  | `blib2to3/pgen2/tokenize.py` |
| +100.0% |    +3 |   1.4% → 2.7% |     3 → 6 | `run_transformer`                   | `black/linegen.py`           |
|     new |    +3 |   0.0% → 1.4% |     0 → 3 | `_hugging_power_ops_line_to_string` | `black/linegen.py`           |
|     new |    +3 |   0.0% → 1.4% |     0 → 3 | `resolve`                           | `pathlib.py`                 |
|     new |    +3 |   0.0% → 1.4% |     0 → 3 | `<dictcomp>`                        | `black/cache.py`             |
|     new |    +3 |   0.0% → 1.4% |     0 → 3 | `write`                             | `black/cache.py`             |
|   +0.9% |    +2 | 96.3% → 96.4% | 211 → 213 | `_run_module_as_main`               | `<frozen runpy>`             |
|  +66.7% |    +2 |   1.4% → 2.3% |     3 → 5 | `__init__`                          | `blib2to3/pytree.py`         |
| +200.0% |    +2 |   0.5% → 1.4% |     1 → 3 | `wrap_in_parentheses`               | `black/nodes.py`             |
|  +33.3% |    +2 |   2.7% → 3.6% |     6 → 8 | `__str__`                           | `black/lines.py`             |
|  +40.0% |    +2 |   2.3% → 3.2% |     5 → 7 | `visit_STRING`                      | `black/linegen.py`           |
|  +33.3% |    +2 |   2.7% → 3.6% |     6 → 8 | `mark`                              | `black/brackets.py`          |

##### Ours

|  Change | Delta |             % |   Samples | Function                            | Location                     |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ---------------------------- |
| +533.3% |   +16 |   1.4% → 8.6% |    3 → 19 | `push`                              | `blib2to3/pgen2/parse.py`    |
|   +5.6% |    +7 | 57.1% → 59.7% | 125 → 132 | `format_str`                        | `black/__init__.py`          |
|  +60.0% |    +6 |   4.6% → 7.2% |   10 → 16 | `transform_line`                    | `black/linegen.py`           |
|  +33.3% |    +5 |   6.8% → 9.0% |   15 → 20 | `parse`                             | `ast.py`                     |
|  +33.3% |    +5 |   6.8% → 9.0% |   15 → 20 | `_parse_single_version`             | `black/parsing.py`           |
|  +33.3% |    +5 |   6.8% → 9.0% |   15 → 20 | `parse_ast`                         | `black/parsing.py`           |
|  +20.0% |    +3 |   6.8% → 8.1% |   15 → 18 | `append`                            | `black/lines.py`             |
| +300.0% |    +3 |   0.5% → 1.8% |     1 → 4 | `<genexpr>`                         | `blib2to3/pgen2/tokenize.py` |
| +300.0% |    +3 |   0.5% → 1.8% |     1 → 4 | `is_fstring_start`                  | `blib2to3/pgen2/tokenize.py` |
| +100.0% |    +3 |   1.4% → 2.7% |     3 → 6 | `run_transformer`                   | `black/linegen.py`           |
|     new |    +3 |   0.0% → 1.4% |     0 → 3 | `_hugging_power_ops_line_to_string` | `black/linegen.py`           |
|     new |    +3 |   0.0% → 1.4% |     0 → 3 | `resolve`                           | `pathlib.py`                 |
|     new |    +3 |   0.0% → 1.4% |     0 → 3 | `<dictcomp>`                        | `black/cache.py`             |
|     new |    +3 |   0.0% → 1.4% |     0 → 3 | `write`                             | `black/cache.py`             |
|  +66.7% |    +2 |   1.4% → 2.3% |     3 → 5 | `__init__`                          | `blib2to3/pytree.py`         |
| +200.0% |    +2 |   0.5% → 1.4% |     1 → 3 | `wrap_in_parentheses`               | `black/nodes.py`             |
|  +33.3% |    +2 |   2.7% → 3.6% |     6 → 8 | `__str__`                           | `black/lines.py`             |
|  +40.0% |    +2 |   2.3% → 3.2% |     5 → 7 | `visit_STRING`                      | `black/linegen.py`           |
|  +33.3% |    +2 |   2.7% → 3.6% |     6 → 8 | `mark`                              | `black/brackets.py`          |
| +200.0% |    +2 |   0.5% → 1.4% |     1 → 3 | `hug_power_op`                      | `black/trans.py`             |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

##### Ours

|  Change | Delta |             % |   Samples | Function                          | Location                  |
| ------: | ----: | ------------: | --------: | --------------------------------- | ------------------------- |
|  -63.2% |   -12 |   8.7% → 3.2% |    19 → 7 | `pop`                             | `blib2to3/pgen2/parse.py` |
|  -83.3% |   -10 |   5.5% → 0.9% |    12 → 2 | `normalize_trailing_prefix`       | `black/comments.py`       |
|  -45.5% |   -10 |  10.0% → 5.4% |   22 → 12 | `generate_comments`               | `black/comments.py`       |
|  -10.7% |    -9 | 38.4% → 33.9% |   84 → 75 | `check_stability_and_equivalence` | `black/__init__.py`       |
|  -60.0% |    -9 |   6.8% → 2.7% |    15 → 6 | `get_features_used`               | `black/__init__.py`       |
|  -60.0% |    -9 |   6.8% → 2.7% |    15 → 6 | `detect_target_versions`          | `black/__init__.py`       |
|  -14.5% |    -8 | 25.1% → 21.3% |   55 → 47 | `assert_stable`                   | `black/__init__.py`       |
|  -33.3% |    -8 |  11.0% → 7.2% |   24 → 16 | `convert`                         | `blib2to3/pytree.py`      |
|  -53.8% |    -7 |   5.9% → 2.7% |    13 → 6 | `_stringify_ast`                  | `black/parsing.py`        |
|  -53.8% |    -7 |   5.9% → 2.7% |    13 → 6 | `_stringify_ast_with_new_parent`  | `black/parsing.py`        |
|  -25.0% |    -7 |  12.8% → 9.5% |   28 → 21 | `visit_power`                     | `black/linegen.py`        |
|  -46.7% |    -7 |   6.8% → 3.6% |    15 → 8 | `__new__`                         | `blib2to3/pytree.py`      |
|  -85.7% |    -6 |   3.2% → 0.5% |     7 → 1 | `line`                            | `black/linegen.py`        |
|  -80.0% |    -4 |   2.3% → 0.5% |     5 → 1 | `_maybe_empty_lines`              | `black/lines.py`          |
|  -66.7% |    -4 |   2.7% → 0.9% |     6 → 2 | `__init__`                        | `<string>`                |
|   -4.7% |    -3 | 29.2% → 27.6% |   64 → 61 | `_addtoken`                       | `blib2to3/pgen2/parse.py` |
|   -4.7% |    -3 | 29.2% → 27.6% |   64 → 61 | `addtoken`                        | `blib2to3/pgen2/parse.py` |
|   -1.7% |    -3 | 82.2% → 80.1% | 180 → 177 | `_format_str_once`                | `black/__init__.py`       |
|  -50.0% |    -3 |   2.7% → 1.4% |     6 → 3 | `maybe_empty_lines`               | `black/lines.py`          |
| removed |    -3 |   1.4% → 0.0% |     3 → 0 | `prefix`                          | `blib2to3/pytree.py`      |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `format_str` (`black/__init__.py`)

| Change | Delta |              % |   Samples | Callee             | Location            |
| -----: | ----: | -------------: | --------: | ------------------ | ------------------- |
|  +4.0% |    +5 | 100.0% → 98.5% | 125 → 130 | `_format_str_once` | `black/__init__.py` |

##### `transform_line` (`black/linegen.py`)

|  Change | Delta |             % | Samples | Callee                                             | Location           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ------------------ |
| +100.0% |    +3 | 30.0% → 37.5% |   3 → 6 | `run_transformer`                                  | `black/linegen.py` |
|     new |    +3 |  0.0% → 18.8% |   0 → 3 | `_hugging_power_ops_line_to_string`                | `black/linegen.py` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `contains_uncollapsable_type_comments`             | `black/lines.py`   |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `contains_implicit_multiline_string_with_comments` | `black/lines.py`   |
|     new |    +1 |   0.0% → 6.3% |   0 → 1 | `__init__`                                         | `black/trans.py`   |

##### `_parse_single_version` (`black/parsing.py`)

| Change | Delta |      % | Samples | Callee  | Location |
| -----: | ----: | -----: | ------: | ------- | -------- |
| +33.3% |    +5 | 100.0% | 15 → 20 | `parse` | `ast.py` |

##### `parse_ast` (`black/parsing.py`)

| Change | Delta |      % | Samples | Callee                  | Location           |
| -----: | ----: | -----: | ------: | ----------------------- | ------------------ |
| +33.3% |    +5 | 100.0% | 15 → 20 | `_parse_single_version` | `black/parsing.py` |

##### `append` (`black/lines.py`)

|  Change | Delta |             % | Samples | Callee           | Location             |
| ------: | ----: | ------------: | ------: | ---------------- | -------------------- |
|  +33.3% |    +2 | 40.0% → 44.4% |   6 → 8 | `mark`           | `black/brackets.py`  |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `append_comment` | `black/lines.py`     |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `prefix`         | `blib2to3/pytree.py` |

##### `is_fstring_start` (`blib2to3/pgen2/tokenize.py`)

|  Change | Delta |      % | Samples | Callee      | Location                     |
| ------: | ----: | -----: | ------: | ----------- | ---------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `<genexpr>` | `blib2to3/pgen2/tokenize.py` |

##### `_hugging_power_ops_line_to_string` (`black/linegen.py`)

| Change | Delta |            % | Samples | Callee         | Location         |
| -----: | ----: | -----------: | ------: | -------------- | ---------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `hug_power_op` | `black/trans.py` |

##### `resolve` (`pathlib.py`)

| Change | Delta |            % | Samples | Callee        | Location             |
| -----: | ----: | -----------: | ------: | ------------- | -------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `_from_parts` | `pathlib.py`         |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `realpath`    | `<frozen posixpath>` |

##### `<dictcomp>` (`black/cache.py`)

| Change | Delta |             % | Samples | Callee    | Location     |
| -----: | ----: | ------------: | ------: | --------- | ------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `resolve` | `pathlib.py` |

##### `write` (`black/cache.py`)

| Change | Delta |             % | Samples | Callee       | Location         |
| -----: | ----: | ------------: | ------: | ------------ | ---------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `<dictcomp>` | `black/cache.py` |

##### `_run_module_as_main` (`<frozen runpy>`)

| Change | Delta |             % |   Samples | Callee                | Location         |
| -----: | ----: | ------------: | --------: | --------------------- | ---------------- |
|  +0.5% |    +1 | 99.1% → 98.6% | 209 → 210 | `_run_code`           | `<frozen runpy>` |
| +50.0% |    +1 |   0.9% → 1.4% |     2 → 3 | `_get_module_details` | `<frozen runpy>` |

##### `wrap_in_parentheses` (`black/nodes.py`)

|  Change | Delta |             % | Samples | Callee     | Location             |
| ------: | ----: | ------------: | ------: | ---------- | -------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `__init__` | `blib2to3/pytree.py` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `__new__`  | `blib2to3/pytree.py` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `remove`   | `blib2to3/pytree.py` |

##### `__str__` (`black/lines.py`)

| Change | Delta |             % | Samples | Callee    | Location             |
| -----: | ----: | ------------: | ------: | --------- | -------------------- |
| +25.0% |    +1 | 66.7% → 62.5% |   4 → 5 | `__str__` | `blib2to3/pytree.py` |

##### `visit_STRING` (`black/linegen.py`)

|  Change | Delta |             % | Samples | Callee                    | Location           |
| ------: | ----: | ------------: | ------: | ------------------------- | ------------------ |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `normalize_string_prefix` | `black/strings.py` |
|  +33.3% |    +1 | 60.0% → 57.1% |   3 → 4 | `visit_default`           | `black/linegen.py` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `is_docstring`            | `black/nodes.py`   |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `fix_docstring`           | `black/strings.py` |

##### `mark` (`black/brackets.py`)

|  Change | Delta |             % | Samples | Callee                                   | Location            |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ------------------- |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `maybe_decrement_after_lambda_arguments` | `black/brackets.py` |
|  -50.0% |    -1 | 33.3% → 12.5% |   2 → 1 | `is_split_before_delimiter`              | `black/brackets.py` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `maybe_increment_lambda_arguments`       | `black/brackets.py` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `is_split_after_delimiter`               | `black/brackets.py` |

##### `pop` (`blib2to3/pgen2/parse.py`)

| Change | Delta |             % | Samples | Callee    | Location             |
| -----: | ----: | ------------: | ------: | --------- | -------------------- |
| -69.2% |    -9 | 68.4% → 57.1% |  13 → 4 | `convert` | `blib2to3/pytree.py` |

##### `normalize_trailing_prefix` (`black/comments.py`)

|  Change | Delta |            % | Samples | Callee               | Location             |
| ------: | ----: | -----------: | ------: | -------------------- | -------------------- |
| removed |    -2 | 16.7% → 0.0% |   2 → 0 | `prefix`             | `blib2to3/pytree.py` |
| removed |    -1 |  8.3% → 0.0% |   1 → 0 | `make_simple_prefix` | `black/nodes.py`     |

##### `generate_comments` (`black/comments.py`)

| Change | Delta |             % | Samples | Callee                      | Location            |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------- |
| -83.3% |   -10 | 54.5% → 16.7% |  12 → 2 | `normalize_trailing_prefix` | `black/comments.py` |

##### `check_stability_and_equivalence` (`black/__init__.py`)

| Change | Delta |             % | Samples | Callee              | Location            |
| -----: | ----: | ------------: | ------: | ------------------- | ------------------- |
| -14.5% |    -8 | 65.5% → 62.7% | 55 → 47 | `assert_stable`     | `black/__init__.py` |
|  -6.9% |    -2 | 34.5% → 36.0% | 29 → 27 | `assert_equivalent` | `black/__init__.py` |

##### `get_features_used` (`black/__init__.py`)

|  Change | Delta |             % | Samples | Callee            | Location             |
| ------: | ----: | ------------: | ------: | ----------------- | -------------------- |
|  -66.7% |    -2 | 20.0% → 16.7% |   3 → 1 | `pre_order`       | `blib2to3/pytree.py` |
| +100.0% |    +1 |  6.7% → 33.3% |   1 → 2 | `is_number_token` | `black/nodes.py`     |

##### `detect_target_versions` (`black/__init__.py`)

| Change | Delta |      % | Samples | Callee              | Location            |
| -----: | ----: | -----: | ------: | ------------------- | ------------------- |
| -60.0% |    -9 | 100.0% |  15 → 6 | `get_features_used` | `black/__init__.py` |

##### `assert_stable` (`black/__init__.py`)

| Change | Delta |      % | Samples | Callee             | Location            |
| -----: | ----: | -----: | ------: | ------------------ | ------------------- |
| -14.5% |    -8 | 100.0% | 55 → 47 | `_format_str_once` | `black/__init__.py` |

##### `convert` (`blib2to3/pytree.py`)

|  Change | Delta |             % | Samples | Callee     | Location             |
| ------: | ----: | ------------: | ------: | ---------- | -------------------- |
|  -53.3% |    -8 | 62.5% → 43.8% |  15 → 7 | `__new__`  | `blib2to3/pytree.py` |
| +150.0% |    +3 |  8.3% → 31.3% |   2 → 5 | `__init__` | `blib2to3/pytree.py` |

##### `_stringify_ast` (`black/parsing.py`)

| Change | Delta |      % | Samples | Callee                           | Location           |
| -----: | ----: | -----: | ------: | -------------------------------- | ------------------ |
| -53.8% |    -7 | 100.0% |  13 → 6 | `_stringify_ast_with_new_parent` | `black/parsing.py` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py`)

| Change | Delta |      % | Samples | Callee           | Location           |
| -----: | ----: | -----: | ------: | ---------------- | ------------------ |
| -53.8% |    -7 | 100.0% |  13 → 6 | `_stringify_ast` | `black/parsing.py` |

##### `visit_power` (`black/linegen.py`)

| Change | Delta |              % | Samples | Callee          | Location           |
| -----: | ----: | -------------: | ------: | --------------- | ------------------ |
| -35.7% |   -10 | 100.0% → 85.7% | 28 → 18 | `visit_default` | `black/linegen.py` |

##### `line` (`black/linegen.py`)

| Change | Delta |              % | Samples | Callee     | Location   |
| -----: | ----: | -------------: | ------: | ---------- | ---------- |
| -83.3% |    -5 | 85.7% → 100.0% |   6 → 1 | `__init__` | `<string>` |

##### `_maybe_empty_lines` (`black/lines.py`)

|  Change | Delta |            % | Samples | Callee      | Location         |
| ------: | ----: | -----------: | ------: | ----------- | ---------------- |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `is_def`    | `black/lines.py` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `is_import` | `black/lines.py` |

##### `__init__` (`<string>`)

|  Change | Delta |            % | Samples | Callee     | Location   |
| ------: | ----: | -----------: | ------: | ---------- | ---------- |
| removed |    -5 | 83.3% → 0.0% |   5 → 0 | `__init__` | `<string>` |

##### `_addtoken` (`blib2to3/pgen2/parse.py`)

|  Change | Delta |             % | Samples | Callee  | Location                  |
| ------: | ----: | ------------: | ------: | ------- | ------------------------- |
| +533.3% |   +16 |  4.7% → 31.1% |  3 → 19 | `push`  | `blib2to3/pgen2/parse.py` |
|  -63.2% |   -12 | 29.7% → 11.5% |  19 → 7 | `pop`   | `blib2to3/pgen2/parse.py` |
|   -7.1% |    -1 | 21.9% → 21.3% | 14 → 13 | `shift` | `blib2to3/pgen2/parse.py` |

##### `addtoken` (`blib2to3/pgen2/parse.py`)

| Change | Delta |      % | Samples | Callee      | Location                  |
| -----: | ----: | -----: | ------: | ----------- | ------------------------- |
|  -4.7% |    -3 | 100.0% | 64 → 61 | `_addtoken` | `blib2to3/pgen2/parse.py` |

##### `_format_str_once` (`black/__init__.py`)

|  Change | Delta |             % | Samples | Callee                   | Location            |
| ------: | ----: | ------------: | ------: | ------------------------ | ------------------- |
|  -60.0% |    -9 |   8.3% → 3.4% |  15 → 6 | `detect_target_versions` | `black/__init__.py` |
|  +60.0% |    +6 |   5.6% → 9.0% | 10 → 16 | `transform_line`         | `black/linegen.py`  |
|  -50.0% |    -3 |   3.3% → 1.7% |   6 → 3 | `maybe_empty_lines`      | `black/lines.py`    |
| +100.0% |    +2 |   1.1% → 2.3% |   2 → 4 | `__str__`                | `black/lines.py`    |
|   +1.2% |    +1 | 45.0% → 46.3% | 81 → 82 | `lib2to3_parse`          | `black/parsing.py`  |

##### `maybe_empty_lines` (`black/lines.py`)

| Change | Delta |             % | Samples | Callee               | Location         |
| -----: | ----: | ------------: | ------: | -------------------- | ---------------- |
| -80.0% |    -4 | 83.3% → 33.3% |   5 → 1 | `_maybe_empty_lines` | `black/lines.py` |
|    new |    +1 |  0.0% → 33.3% |   0 → 1 | `__init__`           | `<string>`       |

##### `prefix` (`blib2to3/pytree.py`)

|  Change | Delta |            % | Samples | Callee    | Location             |
| ------: | ----: | -----------: | ------: | --------- | -------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `changed` | `blib2to3/pytree.py` |

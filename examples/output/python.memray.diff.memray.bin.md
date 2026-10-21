# Peak memory profile diff

Held 72.4 MiB (-1,022 B, ~0%) over 23,709 allocations (3.13 KiB per allocation).

| Category         | Change |      Delta |     % |     Size | Allocations |
| ---------------- | -----: | ---------: | ----: | -------: | ----------: |
| Ours             |    ~0% | -2.396 KiB | 71.8% |   52 MiB |      21,382 |
| Standard library |    ~0% |  +1.23 KiB | 27.9% | 20.2 MiB |       2,095 |
| Third-party      |  +0.1% |     +172 B |  0.3% |  238 KiB |         232 |

Paths starting with `./` or `../` are relative to `/src/black/src/`.

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes held at peak memory within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|    Change |      Delta |             % |                Size |     Allocations | Function                          | Location                                                    |
| --------: | ---------: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------------------------------------- |
|   +262.7% |     +3 MiB |   1.6% → 5.7% | 1.14 MiB → 4.14 MiB |       196 → 199 | `update_sibling_maps`             | `./blib2to3/pytree.py:369 → 358`                            |
|       new |     +2 MiB |   0.0% → 2.8% |         0 B → 2 MiB |           0 → 2 | `_addtoken`                       | `./blib2to3/pgen2/parse.py:290 → 278`                       |
|    +40.0% |     +2 MiB |   6.9% → 9.7% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `./blib2to3/pytree.py:81 → 70`                              |
|    +12.3% |     +2 MiB | 22.4% → 25.2% | 16.2 MiB → 18.2 MiB | 20,788 → 20,790 | `mark`                            | `./black/brackets.py:70`                                    |
|       new |     +2 MiB |   0.0% → 2.8% |         0 B → 2 MiB |           0 → 2 | `__contains__`                    | `./black/mode.py:249`                                       |
|       new |     +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `pop`                             | `./blib2to3/pgen2/parse.py:398 → 386`                       |
| +93958.4% |     +1 MiB |  <0.1% → 1.4% |    1.09 KiB → 1 MiB |           1 → 2 | `_rhs`                            | `./black/linegen.py:650`                                    |
|       new |     +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `whitespace`                      | `./black/nodes.py:194 → 183`                                |
|       new |     +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `assert_is_leaf_string`           | `./black/strings.py:108`                                    |
|       new |     +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `is_complex_subscript`            | `./black/lines.py:430`                                      |
|    +22.0% | +1.484 KiB |         <0.1% | 6.73 KiB → 8.22 KiB |           8 → 9 | `__setattr__`                     | `/usr/lib/python3.11/enum.py:831`                           |
|       ~0% |     +286 B |          3.1% |            2.27 MiB |             352 | `_call_with_frames_removed`       | `<frozen importlib._bootstrap>:233`                         |
|     +0.2% |     +222 B |          0.2% |             112 KiB |             108 | `_code_to_timestamp_pyc`          | `<frozen importlib._bootstrap_external>:740`                |
|     +4.4% |     +172 B |         <0.1% | 3.79 KiB → 3.96 KiB |               3 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |
|       ~0% |     +104 B |          0.3% |             225 KiB |               5 | `_format_str_once`                | `./black/__init__.py:1236 → 1215`                           |
|     +1.5% |      +96 B |         <0.1% | 6.24 KiB → 6.33 KiB |               4 | `append`                          | `./black/lines.py:63 → 52`                                  |
|     +5.5% |      +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `./black/cache.py:50`                                       |
|    +10.1% |      +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`                           |

##### Ours

|    Change |  Delta |             % |                Size |     Allocations | Function                          | Location                              |
| --------: | -----: | ------------: | ------------------: | --------------: | --------------------------------- | ------------------------------------- |
|   +262.7% | +3 MiB |   1.6% → 5.7% | 1.14 MiB → 4.14 MiB |       196 → 199 | `update_sibling_maps`             | `./blib2to3/pytree.py:369 → 358`      |
|       new | +2 MiB |   0.0% → 2.8% |         0 B → 2 MiB |           0 → 2 | `_addtoken`                       | `./blib2to3/pgen2/parse.py:290 → 278` |
|    +40.0% | +2 MiB |   6.9% → 9.7% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `./blib2to3/pytree.py:81 → 70`        |
|    +12.3% | +2 MiB | 22.4% → 25.2% | 16.2 MiB → 18.2 MiB | 20,788 → 20,790 | `mark`                            | `./black/brackets.py:70`              |
|       new | +2 MiB |   0.0% → 2.8% |         0 B → 2 MiB |           0 → 2 | `__contains__`                    | `./black/mode.py:249`                 |
|       new | +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `pop`                             | `./blib2to3/pgen2/parse.py:398 → 386` |
| +93958.4% | +1 MiB |  <0.1% → 1.4% |    1.09 KiB → 1 MiB |           1 → 2 | `_rhs`                            | `./black/linegen.py:650`              |
|       new | +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `whitespace`                      | `./black/nodes.py:194 → 183`          |
|       new | +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `assert_is_leaf_string`           | `./black/strings.py:108`              |
|       new | +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `is_complex_subscript`            | `./black/lines.py:430`                |
|       ~0% | +104 B |          0.3% |             225 KiB |               5 | `_format_str_once`                | `./black/__init__.py:1236 → 1215`     |
|     +1.5% |  +96 B |         <0.1% | 6.24 KiB → 6.33 KiB |               4 | `append`                          | `./black/lines.py:63 → 52`            |
|     +5.5% |  +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `./black/cache.py:50`                 |
|    +10.1% |  +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`     |

##### Standard library

| Change |      Delta |     % |                Size | Allocations | Function                    | Location                                     |
| -----: | ---------: | ----: | ------------------: | ----------: | --------------------------- | -------------------------------------------- |
| +22.0% | +1.484 KiB | <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__`               | `/usr/lib/python3.11/enum.py:831`            |
|    ~0% |     +286 B |  3.1% |            2.27 MiB |         352 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`          |
|  +0.2% |     +222 B |  0.2% |             112 KiB |         108 | `_code_to_timestamp_pyc`    | `<frozen importlib._bootstrap_external>:740` |

#### Improvements

Functions with the largest decrease in bytes held at peak memory within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |      Delta |            % |                Size | Allocations | Function                  | Location                                 |
| ------: | ---------: | -----------: | ------------------: | ----------: | ------------------------- | ---------------------------------------- |
|  -75.0% |     -3 MiB |  5.5% → 1.4% |       4 MiB → 1 MiB |       4 → 1 | `generate_tokens`         | `./blib2to3/pgen2/tokenize.py:565 → 554` |
|  -75.0% |     -3 MiB |  5.5% → 1.4% |       4 MiB → 1 MiB |       5 → 2 | `visit_default`           | `./black/linegen.py:134`                 |
| removed |     -3 MiB |  4.1% → 0.0% |         3 MiB → 0 B |       3 → 0 | `__str__`                 | `./black/lines.py:490`                   |
|  -99.8% |     -2 MiB | 2.8% → <0.1% |    2 MiB → 3.35 KiB |       6 → 4 | `visit`                   | `./black/nodes.py:163 → 152`             |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |       1 → 0 | `push`                    | `./blib2to3/pgen2/parse.py:386`          |
|  -99.7% |     -1 MiB | 1.4% → <0.1% |    1 MiB → 3.03 KiB |       5 → 4 | `__init__`                | `./blib2to3/pytree.py:248 → 237`         |
|  -16.7% |     -1 MiB |  8.3% → 6.9% |       6 MiB → 5 MiB |       6 → 5 | `changed`                 | `./blib2to3/pytree.py:171 → 160`         |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |       1 → 0 | `prefix`                  | `./blib2to3/pytree.py:480 → 469`         |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                | `<string>:2`                             |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                | `./black/trans.py:1`                     |
|   -3.1% |     -768 B |        <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`                 | `/usr/lib/python3.11/enum.py:488`        |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                | `./black/ranges.py:1`                    |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split` | `./black/linegen.py:829`                 |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                | `./blib2to3/pgen2/tokenize.py:1`         |

##### Ours

|  Change |      Delta |            % |                Size | Allocations | Function                  | Location                                 |
| ------: | ---------: | -----------: | ------------------: | ----------: | ------------------------- | ---------------------------------------- |
|  -75.0% |     -3 MiB |  5.5% → 1.4% |       4 MiB → 1 MiB |       4 → 1 | `generate_tokens`         | `./blib2to3/pgen2/tokenize.py:565 → 554` |
|  -75.0% |     -3 MiB |  5.5% → 1.4% |       4 MiB → 1 MiB |       5 → 2 | `visit_default`           | `./black/linegen.py:134`                 |
| removed |     -3 MiB |  4.1% → 0.0% |         3 MiB → 0 B |       3 → 0 | `__str__`                 | `./black/lines.py:490`                   |
|  -99.8% |     -2 MiB | 2.8% → <0.1% |    2 MiB → 3.35 KiB |       6 → 4 | `visit`                   | `./black/nodes.py:163 → 152`             |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |       1 → 0 | `push`                    | `./blib2to3/pgen2/parse.py:386`          |
|  -99.7% |     -1 MiB | 1.4% → <0.1% |    1 MiB → 3.03 KiB |       5 → 4 | `__init__`                | `./blib2to3/pytree.py:248 → 237`         |
|  -16.7% |     -1 MiB |  8.3% → 6.9% |       6 MiB → 5 MiB |       6 → 5 | `changed`                 | `./blib2to3/pytree.py:171 → 160`         |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |       1 → 0 | `prefix`                  | `./blib2to3/pytree.py:480 → 469`         |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                | `<string>:2`                             |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                | `./black/trans.py:1`                     |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                | `./black/ranges.py:1`                    |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split` | `./black/linegen.py:829`                 |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                | `./blib2to3/pgen2/tokenize.py:1`         |

##### Standard library

| Change |  Delta |     % |                Size | Allocations | Function  | Location                          |
| -----: | -----: | ----: | ------------------: | ----------: | --------- | --------------------------------- |
|  -3.1% | -768 B | <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__` | `/usr/lib/python3.11/enum.py:488` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

|   Change |  Delta |            % |                Size | Allocations | Location                         |
| -------: | -----: | -----------: | ------------------: | ----------: | -------------------------------- |
| +4370.0% | +3 MiB | 6.0% → 74.1% | 70.3 KiB → 3.07 MiB |     93 → 96 | `./blib2to3/pytree.py:377 → 366` |
| +1456.7% | +1 MiB | 6.0% → 25.8% | 70.3 KiB → 1.07 MiB |     93 → 94 | `./blib2to3/pytree.py:376 → 365` |
|   -99.5% | -1 MiB | 88.0% → 0.1% |    1 MiB → 4.99 KiB |      10 → 9 | `./blib2to3/pytree.py:379 → 368` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

| Change |  Delta |             % |        Size | Allocations | Location                        |
| -----: | -----: | ------------: | ----------: | ----------: | ------------------------------- |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `./blib2to3/pgen2/parse.py:302` |

##### `__new__` (`./blib2to3/pytree.py:70`)

| Change |  Delta |      % |          Size | Allocations | Location                       |
| -----: | -----: | -----: | ------------: | ----------: | ------------------------------ |
| +40.0% | +2 MiB | 100.0% | 5 MiB → 7 MiB |       5 → 7 | `./blib2to3/pytree.py:84 → 73` |

##### `mark` (`./black/brackets.py:70`)

| Change |  Delta |      % |                Size |     Allocations | Location                  |
| -----: | -----: | -----: | ------------------: | --------------: | ------------------------- |
| +12.3% | +2 MiB | 100.0% | 16.2 MiB → 18.2 MiB | 20,787 → 20,789 | `./black/brackets.py:112` |

##### `__contains__` (`./black/mode.py:249`)

| Change |  Delta |             % |        Size | Allocations | Location              |
| -----: | -----: | ------------: | ----------: | ----------: | --------------------- |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `./black/mode.py:259` |

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

| Change |  Delta |             % |        Size | Allocations | Location                        |
| -----: | -----: | ------------: | ----------: | ----------: | ------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pgen2/parse.py:396` |

##### `_rhs` (`./black/linegen.py:650`)

|    Change |  Delta |      % |             Size | Allocations | Location                 |
| --------: | -----: | -----: | ---------------: | ----------: | ------------------------ |
| +93958.4% | +1 MiB | 100.0% | 1.09 KiB → 1 MiB |       1 → 2 | `./black/linegen.py:659` |

##### `whitespace` (`./black/nodes.py:183`)

| Change |  Delta |             % |        Size | Allocations | Location               |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./black/nodes.py:338` |

##### `assert_is_leaf_string` (`./black/strings.py:108`)

| Change |  Delta |             % |        Size | Allocations | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | ------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./black/strings.py:138` |

##### `is_complex_subscript` (`./black/lines.py:430`)

| Change |  Delta |             % |        Size | Allocations | Location               |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./black/lines.py:445` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

| Change |      Delta |      % |                Size | Allocations | Location                          |
| -----: | ---------: | -----: | ------------------: | ----------: | --------------------------------- |
| +22.0% | +1.484 KiB | 100.0% | 6.73 KiB → 8.22 KiB |       8 → 9 | `/usr/lib/python3.11/enum.py:842` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |  Delta |      % |     Size | Allocations | Location                            |
| -----: | -----: | -----: | -------: | ----------: | ----------------------------------- |
|    ~0% | +286 B | 100.0% | 2.27 MiB |         352 | `<frozen importlib._bootstrap>:241` |

##### `_code_to_timestamp_pyc` (`<frozen importlib._bootstrap_external>:740`)

| Change |  Delta |      % |    Size | Allocations | Location                                     |
| -----: | -----: | -----: | ------: | ----------: | -------------------------------------------- |
|  +0.2% | +222 B | 100.0% | 112 KiB |         108 | `<frozen importlib._bootstrap_external>:746` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

| Change |  Delta |      % |                Size | Allocations | Location                                                    |
| -----: | -----: | -----: | ------------------: | ----------: | ----------------------------------------------------------- |
|  +4.4% | +172 B | 100.0% | 3.79 KiB → 3.96 KiB |           3 | `/venv/lib/python3.11/site-packages/click/decorators.py:34` |

##### `_format_str_once` (`./black/__init__.py:1215`)

| Change |  Delta |           % |          Size | Allocations | Location                          |
| -----: | -----: | ----------: | ------------: | ----------: | --------------------------------- |
| +13.0% | +104 B | 0.3% → 0.4% | 800 B → 904 B |           1 | `./black/__init__.py:1239 → 1218` |

##### `append` (`./black/lines.py:52`)

| Change | Delta |             % |             Size | Allocations | Location                   |
| -----: | ----: | ------------: | ---------------: | ----------: | -------------------------- |
|  +2.3% | +96 B | 64.1% → 64.6% | 4 KiB → 4.09 KiB |           1 | `./black/lines.py:89 → 78` |

##### `get_cache_file` (`./black/cache.py:50`)

| Change | Delta |      % |                Size | Allocations | Location              |
| -----: | ----: | -----: | ------------------: | ----------: | --------------------- |
|  +5.5% | +64 B | 100.0% | 1.13 KiB → 1.19 KiB |           1 | `./black/cache.py:51` |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

| Change | Delta |      % |          Size | Allocations | Location                          |
| -----: | ----: | -----: | ------------: | ----------: | --------------------------------- |
| +10.1% | +60 B | 100.0% | 594 B → 654 B |           1 | `./black/__init__.py:1050 → 1055` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

|  Change |  Delta |             % |        Size | Allocations | Location                           |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------------------------- |
| removed | -2 MiB |  50.0% → 0.0% | 2 MiB → 0 B |       2 → 0 | `./blib2to3/pgen2/tokenize.py:879` |
| removed | -1 MiB |  25.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pgen2/tokenize.py:752` |
| removed | -1 MiB |  25.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pgen2/tokenize.py:972` |
|     new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pgen2/tokenize.py:603` |

##### `visit_default` (`./black/linegen.py:134`)

|  Change |  Delta |            % |        Size | Allocations | Location                 |
| ------: | -----: | -----------: | ----------: | ----------: | ------------------------ |
| removed | -3 MiB | 75.0% → 0.0% | 3 MiB → 0 B |       3 → 0 | `./black/linegen.py:158` |

##### `__str__` (`./black/lines.py:490`)

|  Change |  Delta |            % |        Size | Allocations | Location               |
| ------: | -----: | -----------: | ----------: | ----------: | ---------------------- |
| removed | -2 MiB | 66.7% → 0.0% | 2 MiB → 0 B |       2 → 0 | `./black/lines.py:500` |
| removed | -1 MiB | 33.3% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./black/lines.py:498` |

##### `visit` (`./black/nodes.py:152`)

|  Change |  Delta |             % |          Size | Allocations | Location                     |
| ------: | -----: | ------------: | ------------: | ----------: | ---------------------------- |
| -100.0% | -2 MiB | 99.9% → 20.1% | 2 MiB → 690 B |       3 → 1 | `./black/nodes.py:185 → 174` |

##### `push` (`./blib2to3/pgen2/parse.py:386`)

|  Change |  Delta |             % |        Size | Allocations | Location                        |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pgen2/parse.py:394` |

##### `__init__` (`./blib2to3/pytree.py:237`)

| Change |  Delta |      % |             Size | Allocations | Location                         |
| -----: | -----: | -----: | ---------------: | ----------: | -------------------------------- |
| -99.7% | -1 MiB | 100.0% | 1 MiB → 3.03 KiB |       5 → 4 | `./blib2to3/pytree.py:266 → 255` |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |             % |          Size | Allocations | Location                         |
| -----: | -----: | ------------: | ------------: | ----------: | -------------------------------- |
| -50.0% | -1 MiB | 33.3% → 20.0% | 2 MiB → 1 MiB |       2 → 1 | `./blib2to3/pytree.py:175 → 164` |

##### `prefix` (`./blib2to3/pytree.py:469`)

|  Change |  Delta |             % |        Size | Allocations | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | -------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pytree.py:482` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |             % |        Size | Allocations | Location     |
| ------: | -----: | ------------: | ----------: | ----------: | ------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `<string>:7` |

##### `<module>` (`./black/trans.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location                |
| ------: | ---------: | -----------: | -------------: | ----------: | ----------------------- |
| removed | -3.187 KiB | 31.5% → 0.0% | 3.19 KiB → 0 B |       1 → 0 | `./black/trans.py:1914` |
|     new | +1.484 KiB | 0.0% → 17.6% | 0 B → 1.48 KiB |       0 → 1 | `./black/trans.py:41`   |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

| Change |  Delta |      % |                Size | Allocations | Location                          |
| -----: | -----: | -----: | ------------------: | ----------: | --------------------------------- |
|  -3.1% | -768 B | 100.0% | 24.1 KiB → 23.3 KiB |     27 → 26 | `/usr/lib/python3.11/enum.py:554` |

##### `<module>` (`./black/ranges.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location                |
| ------: | ---------: | -----------: | -------------: | ----------: | ----------------------- |
| removed | -1.484 KiB | 30.5% → 0.0% | 1.48 KiB → 0 B |       1 → 0 | `./black/ranges.py:509` |
|     new |     +768 B | 0.0% → 18.2% |    0 B → 768 B |       0 → 1 | `./black/ranges.py:7`   |

##### `_first_right_hand_split` (`./black/linegen.py:829`)

| Change |  Delta |      % |             Size | Allocations | Location                 |
| -----: | -----: | -----: | ---------------: | ----------: | ------------------------ |
| -25.9% | -274 B | 100.0% | 1.03 KiB → 784 B |           1 | `./black/linegen.py:918` |

##### `<module>` (`./blib2to3/pgen2/tokenize.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location                               |
| ------: | ---------: | -----------: | -------------: | ----------: | -------------------------------------- |
| removed | -3.187 KiB | 15.4% → 0.0% | 3.19 KiB → 0 B |       1 → 0 | `./blib2to3/pgen2/tokenize.py:170`     |
|     new | +3.187 KiB | 0.0% → 15.4% | 0 B → 3.19 KiB |       0 → 1 | `./blib2to3/pgen2/tokenize.py:163`     |
|   -1.3% |       -8 B |         2.8% |  600 B → 592 B |           1 | `./blib2to3/pgen2/tokenize.py:76 → 65` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

|  Change |  Delta |      % |                Size | Allocations | Caller         | Location                         |
| ------: | -----: | -----: | ------------------: | ----------: | -------------- | -------------------------------- |
| +262.7% | +3 MiB | 100.0% | 1.14 MiB → 4.14 MiB |   196 → 199 | `prev_sibling` | `./blib2to3/pytree.py:207 → 196` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

| Change |  Delta |             % |        Size | Allocations | Caller     | Location                              |
| -----: | -----: | ------------: | ----------: | ----------: | ---------- | ------------------------------------- |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `addtoken` | `./blib2to3/pgen2/parse.py:242 → 230` |

##### `__new__` (`./blib2to3/pytree.py:70`)

| Change |  Delta |      % |          Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | --------- | -------------------------------- |
| +40.0% | +2 MiB | 100.0% | 5 MiB → 7 MiB |       5 → 7 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `mark` (`./black/brackets.py:70`)

| Change |  Delta |      % |                Size |     Allocations | Caller   | Location                   |
| -----: | -----: | -----: | ------------------: | --------------: | -------- | -------------------------- |
| +12.3% | +2 MiB | 100.0% | 16.2 MiB → 18.2 MiB | 20,788 → 20,790 | `append` | `./black/lines.py:63 → 52` |

##### `__contains__` (`./black/mode.py:249`)

| Change |  Delta |            % |        Size | Allocations | Caller         | Location                 |
| -----: | -----: | -----------: | ----------: | ----------: | -------------- | ------------------------ |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `is_docstring` | `./black/lines.py:203`   |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `visit_STRING` | `./black/linegen.py:413` |

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

| Change |  Delta |             % |        Size | Allocations | Caller      | Location                              |
| -----: | -----: | ------------: | ----------: | ----------: | ----------- | ------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `_rhs` (`./black/linegen.py:650`)

|    Change |  Delta |      % |             Size | Allocations | Caller            | Location                         |
| --------: | -----: | -----: | ---------------: | ----------: | ----------------- | -------------------------------- |
| +93958.4% | +1 MiB | 100.0% | 1.09 KiB → 1 MiB |       1 → 2 | `run_transformer` | `./black/linegen.py:1755 → 1771` |

##### `whitespace` (`./black/nodes.py:183`)

| Change |  Delta |             % |        Size | Allocations | Caller   | Location                   |
| -----: | -----: | ------------: | ----------: | ----------: | -------- | -------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `append` | `./black/lines.py:63 → 52` |

##### `assert_is_leaf_string` (`./black/strings.py:108`)

| Change |  Delta |             % |        Size | Allocations | Caller              | Location                |
| -----: | -----: | ------------: | ----------: | ----------: | ------------------- | ----------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `get_string_prefix` | `./black/strings.py:89` |

##### `is_complex_subscript` (`./black/lines.py:430`)

| Change |  Delta |             % |        Size | Allocations | Caller   | Location              |
| -----: | -----: | ------------: | ----------: | ----------: | -------- | --------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `append` | `./black/lines.py:52` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

| Change |      Delta |             % |                Size | Allocations | Caller    | Location                          |
| -----: | ---------: | ------------: | ------------------: | ----------: | --------- | --------------------------------- |
| +66.0% | +1.484 KiB | 33.4% → 45.4% | 2.25 KiB → 3.73 KiB |       3 → 4 | `__new__` | `/usr/lib/python3.11/enum.py:488` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |  Delta |      % |     Size | Allocations | Caller           | Location                                     |
| -----: | -----: | -----: | -------: | ----------: | ---------------- | -------------------------------------------- |
|    ~0% | +286 B | 100.0% | 2.27 MiB |         352 | `source_to_code` | `<frozen importlib._bootstrap_external>:999` |

##### `_code_to_timestamp_pyc` (`<frozen importlib._bootstrap_external>:740`)

| Change |  Delta |      % |    Size | Allocations | Caller     | Location                                      |
| -----: | -----: | -----: | ------: | ----------: | ---------- | --------------------------------------------- |
|  +0.2% | +222 B | 100.0% | 112 KiB |         108 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

| Change |  Delta |      % |                Size | Allocations | Caller   | Location                                               |
| -----: | -----: | -----: | ------------------: | ----------: | -------- | ------------------------------------------------------ |
|  +4.4% | +172 B | 100.0% | 3.79 KiB → 3.96 KiB |           3 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:857` |

##### `_format_str_once` (`./black/__init__.py:1215`)

| Change |  Delta |      % |    Size | Allocations | Caller       | Location                          |
| -----: | -----: | -----: | ------: | ----------: | ------------ | --------------------------------- |
|    ~0% | +104 B | 100.0% | 225 KiB |           5 | `format_str` | `./black/__init__.py:1189 → 1168` |

##### `append` (`./black/lines.py:52`)

| Change | Delta |      % |                Size | Allocations | Caller          | Location                 |
| -----: | ----: | -----: | ------------------: | ----------: | --------------- | ------------------------ |
|  +1.5% | +96 B | 100.0% | 6.24 KiB → 6.33 KiB |           4 | `visit_default` | `./black/linegen.py:134` |

##### `get_cache_file` (`./black/cache.py:50`)

| Change | Delta |      % |                Size | Allocations | Caller | Location              |
| -----: | ----: | -----: | ------------------: | ----------: | ------ | --------------------- |
|  +5.5% | +64 B | 100.0% | 1.13 KiB → 1.19 KiB |           1 | `read` | `./black/cache.py:60` |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

| Change | Delta |      % |          Size | Allocations | Caller                 | Location                          |
| -----: | ----: | -----: | ------------: | ----------: | ---------------------- | --------------------------------- |
| +10.1% | +60 B | 100.0% | 594 B → 654 B |           1 | `format_file_contents` | `./black/__init__.py:1054 → 1059` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

| Change |  Delta |      % |          Size | Allocations | Caller     | Location                        |
| -----: | -----: | -----: | ------------: | ----------: | ---------- | ------------------------------- |
| -75.0% | -3 MiB | 100.0% | 4 MiB → 1 MiB |       4 → 1 | `__next__` | `./blib2to3/pgen2/driver.py:80` |

##### `visit_default` (`./black/linegen.py:134`)

| Change |  Delta |              % |          Size | Allocations | Caller  | Location                     |
| -----: | -----: | -------------: | ------------: | ----------: | ------- | ---------------------------- |
| -75.0% | -3 MiB | 100.0% → 99.9% | 4 MiB → 1 MiB |       4 → 1 | `visit` | `./black/nodes.py:163 → 152` |

##### `__str__` (`./black/lines.py:490`)

|  Change |  Delta |            % |        Size | Allocations | Caller             | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | ------------------ | -------------------------- |
| removed | -2 MiB | 66.7% → 0.0% | 2 MiB → 0 B |       2 → 0 | `_format_str_once` | `./black/__init__.py:1236` |
| removed | -1 MiB | 33.3% → 0.0% | 1 MiB → 0 B |       1 → 0 | `line_to_string`   | `./black/lines.py:1073`    |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |              % |             Size | Allocations | Caller          | Location                     |
| -----: | -----: | -------------: | ---------------: | ----------: | --------------- | ---------------------------- |
| -99.9% | -2 MiB | 100.0% → 79.9% | 2 MiB → 2.68 KiB |       5 → 3 | `visit_default` | `./black/nodes.py:187 → 176` |

##### `push` (`./blib2to3/pgen2/parse.py:386`)

|  Change |  Delta |             % |        Size | Allocations | Caller      | Location                        |
| ------: | -----: | ------------: | ----------: | ----------: | ----------- | ------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_addtoken` | `./blib2to3/pgen2/parse.py:290` |

##### `__init__` (`./blib2to3/pytree.py:237`)

| Change |  Delta |      % |             Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ---------------: | ----------: | --------- | -------------------------------- |
| -99.7% | -1 MiB | 100.0% | 1 MiB → 3.03 KiB |       5 → 4 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `changed` (`./blib2to3/pytree.py:160`)

|  Change |  Delta |              % |          Size | Allocations | Caller    | Location                         |
| ------: | -----: | -------------: | ------------: | ----------: | --------- | -------------------------------- |
| removed | -2 MiB |   33.3% → 0.0% |   2 MiB → 0 B |       2 → 0 | `prefix`  | `./blib2to3/pytree.py:480 → 469` |
|  +25.0% | +1 MiB | 66.7% → 100.0% | 4 MiB → 5 MiB |       4 → 5 | `changed` | `./blib2to3/pytree.py:171 → 160` |

##### `prefix` (`./blib2to3/pytree.py:469`)

|  Change |  Delta |             % |        Size | Allocations | Caller   | Location              |
| ------: | -----: | ------------: | ----------: | ----------: | -------- | --------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `append` | `./black/lines.py:63` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |             % |        Size | Allocations | Caller | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ------ | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `line` | `./black/linegen.py:109` |

##### `<module>` (`./black/trans.py:1`)

| Change |      Delta |      % |                Size | Allocations | Caller                      | Location                            |
| -----: | ---------: | -----: | ------------------: | ----------: | --------------------------- | ----------------------------------- |
| -16.8% | -1.703 KiB | 100.0% | 10.1 KiB → 8.42 KiB |           9 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

| Change |  Delta |             % |                Size | Allocations | Caller     | Location            |
| -----: | -----: | ------------: | ------------------: | ----------: | ---------- | ------------------- |
|  -9.8% | -768 B | 31.7% → 29.5% | 7.64 KiB → 6.89 KiB |       9 → 8 | `<module>` | `./black/mode.py:1` |

##### `<module>` (`./black/ranges.py:1`)

| Change |  Delta |      % |                Size | Allocations | Caller                      | Location                            |
| -----: | -----: | -----: | ------------------: | ----------: | --------------------------- | ----------------------------------- |
| -15.1% | -752 B | 100.0% | 4.86 KiB → 4.13 KiB |           5 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_first_right_hand_split` (`./black/linegen.py:829`)

| Change |  Delta |      % |             Size | Allocations | Caller             | Location                 |
| -----: | -----: | -----: | ---------------: | ----------: | ------------------ | ------------------------ |
| -25.9% | -274 B | 100.0% | 1.03 KiB → 784 B |           1 | `right_hand_split` | `./black/linegen.py:809` |

##### `<module>` (`./blib2to3/pgen2/tokenize.py:1`)

| Change | Delta |      % |     Size | Allocations | Caller                      | Location                            |
| -----: | ----: | -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
|    ~0% |  -8 B | 100.0% | 20.7 KiB |          14 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

### Total size

#### Regressions

Functions with the largest increase in bytes held at peak memory within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Ours

|     Change |  Delta |             % |                Size |     Allocations | Function              | Location                              |
| ---------: | -----: | ------------: | ------------------: | --------------: | --------------------- | ------------------------------------- |
|     +35.3% | +7 MiB | 27.4% → 37.0% | 19.8 MiB → 26.8 MiB | 13,398 → 13,405 | `visit_simple_stmt`   | `./black/linegen.py:295`              |
|     +29.6% | +6 MiB | 28.0% → 36.3% | 20.3 MiB → 26.3 MiB | 20,885 → 20,891 | `append`              | `./black/lines.py:63 → 52`            |
|     +23.7% | +4 MiB | 23.3% → 28.9% | 16.9 MiB → 20.9 MiB | 10,808 → 10,812 | `visit_power`         | `./black/linegen.py:341`              |
|    +379.4% | +4 MiB |   1.5% → 7.0% | 1.05 MiB → 5.05 MiB |         90 → 94 | `whitespace`          | `./black/nodes.py:194 → 183`          |
|     +42.6% | +3 MiB |  9.7% → 13.9% |   7.04 MiB → 10 MiB |         14 → 17 | `addtoken`            | `./blib2to3/pgen2/parse.py:242 → 230` |
|     +42.8% | +3 MiB |  9.7% → 13.8% |      7 MiB → 10 MiB |         11 → 14 | `_addtoken`           | `./blib2to3/pgen2/parse.py:290 → 278` |
|    +262.7% | +3 MiB |   1.6% → 5.7% | 1.14 MiB → 4.14 MiB |       196 → 199 | `update_sibling_maps` | `./blib2to3/pytree.py:369 → 358`      |
|    +262.7% | +3 MiB |   1.6% → 5.7% | 1.14 MiB → 4.14 MiB |       196 → 199 | `prev_sibling`        | `./blib2to3/pytree.py:207 → 196`      |
|     +40.0% | +2 MiB |   6.9% → 9.7% |       5 MiB → 7 MiB |           5 → 7 | `__new__`             | `./blib2to3/pytree.py:81 → 70`        |
|     +40.0% | +2 MiB |   6.9% → 9.7% |       5 MiB → 7 MiB |           5 → 7 | `shift`               | `./blib2to3/pgen2/parse.py:373 → 361` |
|    +293.2% | +2 MiB |   0.9% → 3.7% |  698 KiB → 2.68 MiB |       900 → 902 | `visit_STRING`        | `./black/linegen.py:413`              |
|     +11.0% | +2 MiB | 25.2% → 27.9% | 18.2 MiB → 20.2 MiB | 20,790 → 20,792 | `mark`                | `./black/brackets.py:70`              |
|        new | +2 MiB |   0.0% → 2.8% |         0 B → 2 MiB |           0 → 2 | `__contains__`        | `./black/mode.py:249`                 |
|      +2.7% | +1 MiB | 50.3% → 51.7% | 36.4 MiB → 37.4 MiB | 21,087 → 21,088 | `visit`               | `./black/nodes.py:163 → 152`          |
|      +2.7% | +1 MiB | 50.3% → 51.7% | 36.4 MiB → 37.4 MiB | 21,085 → 21,086 | `visit_default`       | `./black/nodes.py:187 → 176`          |
|      +2.7% | +1 MiB | 50.3% → 51.7% | 36.4 MiB → 37.4 MiB | 21,085 → 21,086 | `visit_default`       | `./black/linegen.py:134`              |
|      +2.8% | +1 MiB | 49.9% → 51.3% | 36.2 MiB → 37.2 MiB | 20,714 → 20,715 | `visit_stmt`          | `./black/linegen.py:199`              |
|     +16.7% | +1 MiB |   8.3% → 9.7% |       6 MiB → 7 MiB |         10 → 11 | `convert`             | `./blib2to3/pytree.py:486 → 475`      |
| +197100.8% | +1 MiB |  <0.1% → 1.4% |       532 B → 1 MiB |           1 → 2 | `get_string_prefix`   | `./black/strings.py:89`               |
|   +1132.6% | +1 MiB |   0.1% → 1.5% | 90.4 KiB → 1.09 MiB |       107 → 108 | `is_docstring`        | `./black/nodes.py:558 → 553`          |

##### Standard library

| Change |      Delta |     % |                Size | Allocations | Function                 | Location                                      |
| -----: | ---------: | ----: | ------------------: | ----------: | ------------------------ | --------------------------------------------- |
| +22.0% | +1.484 KiB | <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__`            | `/usr/lib/python3.11/enum.py:831`             |
|  +2.3% |     +752 B | <0.1% | 32.5 KiB → 33.2 KiB |          38 | `__new__`                | `/usr/lib/python3.11/enum.py:488`             |
|    ~0% |     +508 B |  5.1% |            3.69 MiB |         814 | `get_code`               | `<frozen importlib._bootstrap_external>:1007` |
|    ~0% |     +286 B |  3.1% |            2.27 MiB |         352 | `source_to_code`         | `<frozen importlib._bootstrap_external>:999`  |
|  +0.2% |     +222 B |  0.2% |             112 KiB |         108 | `_code_to_timestamp_pyc` | `<frozen importlib._bootstrap_external>:740`  |
|    ~0% |     +222 B | 92.5% |              67 MiB |      22,201 | `_run_code`              | `<frozen runpy>:65`                           |
|    ~0% |     +222 B | 92.5% |              67 MiB |      22,201 | `_run_module_code`       | `<frozen runpy>:91`                           |

#### Improvements

Functions with the largest decrease in bytes held at peak memory within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |      Delta |            % |              Size | Allocations | Function                    | Location                                 |
| ------: | ---------: | -----------: | ----------------: | ----------: | --------------------------- | ---------------------------------------- |
|  -75.0% |     -3 MiB |  5.5% → 1.4% |     4 MiB → 1 MiB |       4 → 1 | `generate_tokens`           | `./blib2to3/pgen2/tokenize.py:565 → 554` |
|  -75.0% |     -3 MiB |  5.5% → 1.4% |     4 MiB → 1 MiB |       4 → 1 | `__next__`                  | `./blib2to3/pgen2/driver.py:80`          |
| removed |     -3 MiB |  4.1% → 0.0% |       3 MiB → 0 B |       3 → 0 | `__str__`                   | `./black/lines.py:490`                   |
|  -22.2% |     -2 MiB | 12.4% → 9.7% |     9 MiB → 7 MiB |       9 → 7 | `generate_comments`         | `./black/comments.py:52`                 |
|  -28.6% |     -2 MiB |  9.7% → 6.9% |     7 MiB → 5 MiB |       7 → 5 | `prefix`                    | `./blib2to3/pytree.py:480 → 469`         |
|  -28.6% |     -2 MiB |  9.7% → 6.9% |     7 MiB → 5 MiB |       7 → 5 | `normalize_trailing_prefix` | `./black/comments.py:127`                |
| removed |     -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `push`                      | `./blib2to3/pgen2/parse.py:386`          |
|  -99.7% |     -1 MiB | 1.4% → <0.1% |  1 MiB → 3.03 KiB |       5 → 4 | `__init__`                  | `./blib2to3/pytree.py:248 → 237`         |
| removed |     -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `line_to_string`            | `./black/lines.py:1073`                  |
|  -16.7% |     -1 MiB |  8.3% → 6.9% |     6 MiB → 5 MiB |       6 → 5 | `changed`                   | `./blib2to3/pytree.py:171 → 160`         |
| removed |     -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `__init__`                  | `<string>:2`                             |
| removed |     -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `line`                      | `./black/linegen.py:109`                 |
| removed |     -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `visit_INDENT`              | `./black/linegen.py:179`                 |
|   -0.9% | -1.703 KiB |         0.2% | 185 KiB → 183 KiB |         200 | `<module>`                  | `./black/linegen.py:1`                   |
|   -5.3% | -1.703 KiB |        <0.1% | 32 KiB → 30.3 KiB |          32 | `<module>`                  | `./black/trans.py:1`                     |
|     ~0% | -1.441 KiB |         7.5% |          5.44 MiB |       1,482 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`      |
|     ~0% | -1.214 KiB |         7.5% |          5.46 MiB |       1,506 | `_get_module_details`       | `<frozen runpy>:105`                     |
|     ~0% | -1.214 KiB |         7.5% |          5.46 MiB |       1,499 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`     |
|     ~0% | -1.214 KiB |         7.5% |          5.46 MiB |       1,497 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`     |
|     ~0% | -1.214 KiB |         7.5% |          5.46 MiB |       1,496 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`      |

##### Ours

|  Change |      Delta |            % |                Size |   Allocations | Function                    | Location                                 |
| ------: | ---------: | -----------: | ------------------: | ------------: | --------------------------- | ---------------------------------------- |
|  -75.0% |     -3 MiB |  5.5% → 1.4% |       4 MiB → 1 MiB |         4 → 1 | `generate_tokens`           | `./blib2to3/pgen2/tokenize.py:565 → 554` |
|  -75.0% |     -3 MiB |  5.5% → 1.4% |       4 MiB → 1 MiB |         4 → 1 | `__next__`                  | `./blib2to3/pgen2/driver.py:80`          |
| removed |     -3 MiB |  4.1% → 0.0% |         3 MiB → 0 B |         3 → 0 | `__str__`                   | `./black/lines.py:490`                   |
|  -22.2% |     -2 MiB | 12.4% → 9.7% |       9 MiB → 7 MiB |         9 → 7 | `generate_comments`         | `./black/comments.py:52`                 |
|  -28.6% |     -2 MiB |  9.7% → 6.9% |       7 MiB → 5 MiB |         7 → 5 | `prefix`                    | `./blib2to3/pytree.py:480 → 469`         |
|  -28.6% |     -2 MiB |  9.7% → 6.9% |       7 MiB → 5 MiB |         7 → 5 | `normalize_trailing_prefix` | `./black/comments.py:127`                |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |         1 → 0 | `push`                      | `./blib2to3/pgen2/parse.py:386`          |
|  -99.7% |     -1 MiB | 1.4% → <0.1% |    1 MiB → 3.03 KiB |         5 → 4 | `__init__`                  | `./blib2to3/pytree.py:248 → 237`         |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |         1 → 0 | `line_to_string`            | `./black/lines.py:1073`                  |
|  -16.7% |     -1 MiB |  8.3% → 6.9% |       6 MiB → 5 MiB |         6 → 5 | `changed`                   | `./blib2to3/pytree.py:171 → 160`         |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |         1 → 0 | `__init__`                  | `<string>:2`                             |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |         1 → 0 | `line`                      | `./black/linegen.py:109`                 |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |         1 → 0 | `visit_INDENT`              | `./black/linegen.py:179`                 |
|   -0.9% | -1.703 KiB |         0.2% |   185 KiB → 183 KiB |           200 | `<module>`                  | `./black/linegen.py:1`                   |
|   -5.3% | -1.703 KiB |        <0.1% |   32 KiB → 30.3 KiB |            32 | `<module>`                  | `./black/trans.py:1`                     |
|     ~0% | -1.011 KiB |         7.5% |            5.41 MiB | 1,448 → 1,449 | `<module>`                  | `./black/__init__.py:1`                  |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |             5 | `<module>`                  | `./black/ranges.py:1`                    |
|     ~0% |     -274 B |         1.4% |            1.01 MiB |            15 | `transform_line`            | `./black/linegen.py:601`                 |
|   -4.8% |     -274 B |        <0.1% | 5.55 KiB → 5.29 KiB |             5 | `right_hand_split`          | `./black/linegen.py:809`                 |
|  -16.3% |     -274 B |        <0.1% | 1.64 KiB → 1.37 KiB |             2 | `_first_right_hand_split`   | `./black/linegen.py:829`                 |

##### Standard library

| Change |      Delta |      % |     Size | Allocations | Function                    | Location                                     |
| -----: | ---------: | -----: | -------: | ----------: | --------------------------- | -------------------------------------------- |
|    ~0% | -1.441 KiB |   7.5% | 5.44 MiB |       1,482 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`          |
|    ~0% | -1.214 KiB |   7.5% | 5.46 MiB |       1,506 | `_get_module_details`       | `<frozen runpy>:105`                         |
|    ~0% | -1.214 KiB |   7.5% | 5.46 MiB |       1,499 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`         |
|    ~0% | -1.214 KiB |   7.5% | 5.46 MiB |       1,497 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`         |
|    ~0% | -1.214 KiB |   7.5% | 5.46 MiB |       1,496 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`          |
|    ~0% | -1.214 KiB |   7.5% | 5.45 MiB |       1,494 | `exec_module`               | `<frozen importlib._bootstrap_external>:934` |
|    ~0% |   -1,022 B | 100.0% | 72.4 MiB |      23,708 | `run_module`                | `<frozen runpy>:201`                         |
|    ~0% |       -8 B |   0.5% |  334 KiB |         342 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`         |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `visit_simple_stmt` (`./black/linegen.py:295`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
| +35.3% | +7 MiB | 100.0% | 19.8 MiB → 26.8 MiB | 13,398 → 13,405 | `visit` | `./black/nodes.py:163 → 152` |

##### `append` (`./black/lines.py:52`)

| Change |  Delta |      % |                Size |     Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
| +29.6% | +6 MiB | 100.0% | 20.3 MiB → 26.3 MiB | 20,885 → 20,891 | `visit_default` | `./black/linegen.py:134` |

##### `visit_power` (`./black/linegen.py:341`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
| +23.7% | +4 MiB | 100.0% | 16.9 MiB → 20.9 MiB | 10,808 → 10,812 | `visit` | `./black/nodes.py:163 → 152` |

##### `whitespace` (`./black/nodes.py:183`)

|  Change |  Delta |      % |                Size | Allocations | Caller   | Location                   |
| ------: | -----: | -----: | ------------------: | ----------: | -------- | -------------------------- |
| +379.4% | +4 MiB | 100.0% | 1.05 MiB → 5.05 MiB |     90 → 94 | `append` | `./black/lines.py:63 → 52` |

##### `addtoken` (`./blib2to3/pgen2/parse.py:230`)

| Change |  Delta |      % |              Size | Allocations | Caller         | Location                         |
| -----: | -----: | -----: | ----------------: | ----------: | -------------- | -------------------------------- |
| +42.6% | +3 MiB | 100.0% | 7.04 MiB → 10 MiB |     14 → 17 | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

| Change |  Delta |      % |           Size | Allocations | Caller     | Location                              |
| -----: | -----: | -----: | -------------: | ----------: | ---------- | ------------------------------------- |
| +42.8% | +3 MiB | 100.0% | 7 MiB → 10 MiB |     11 → 14 | `addtoken` | `./blib2to3/pgen2/parse.py:242 → 230` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

|  Change |  Delta |      % |                Size | Allocations | Caller         | Location                         |
| ------: | -----: | -----: | ------------------: | ----------: | -------------- | -------------------------------- |
| +262.7% | +3 MiB | 100.0% | 1.14 MiB → 4.14 MiB |   196 → 199 | `prev_sibling` | `./blib2to3/pytree.py:207 → 196` |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

|   Change |  Delta |             % |                Size | Allocations | Caller           | Location                     |
| -------: | -----: | ------------: | ------------------: | ----------: | ---------------- | ---------------------------- |
|  +196.5% | +2 MiB | 89.1% → 72.9% | 1.02 MiB → 3.02 MiB |     24 → 26 | `whitespace`     | `./black/nodes.py:194 → 183` |
| +2719.3% | +1 MiB |  3.2% → 25.0% | 37.7 KiB → 1.04 MiB |     66 → 67 | `preceding_leaf` | `./black/nodes.py:441 → 436` |

##### `__new__` (`./blib2to3/pytree.py:70`)

| Change |  Delta |      % |          Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | --------- | -------------------------------- |
| +40.0% | +2 MiB | 100.0% | 5 MiB → 7 MiB |       5 → 7 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

| Change |  Delta |      % |          Size | Allocations | Caller      | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ----------- | ------------------------------------- |
| +40.0% | +2 MiB | 100.0% | 5 MiB → 7 MiB |       5 → 7 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `visit_STRING` (`./black/linegen.py:413`)

|  Change |  Delta |      % |               Size | Allocations | Caller  | Location                     |
| ------: | -----: | -----: | -----------------: | ----------: | ------- | ---------------------------- |
| +293.2% | +2 MiB | 100.0% | 698 KiB → 2.68 MiB |   900 → 902 | `visit` | `./black/nodes.py:163 → 152` |

##### `mark` (`./black/brackets.py:70`)

| Change |  Delta |      % |                Size |     Allocations | Caller   | Location                   |
| -----: | -----: | -----: | ------------------: | --------------: | -------- | -------------------------- |
| +11.0% | +2 MiB | 100.0% | 18.2 MiB → 20.2 MiB | 20,790 → 20,792 | `append` | `./black/lines.py:63 → 52` |

##### `__contains__` (`./black/mode.py:249`)

| Change |  Delta |            % |        Size | Allocations | Caller         | Location                 |
| -----: | -----: | -----------: | ----------: | ----------: | -------------- | ------------------------ |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `is_docstring` | `./black/lines.py:203`   |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `visit_STRING` | `./black/linegen.py:413` |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |             % |                Size |     Allocations | Caller             | Location                          |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------------ | --------------------------------- |
|  +2.7% | +1 MiB |        100.0% | 36.4 MiB → 37.4 MiB | 21,087 → 21,088 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |
|  +2.7% | +1 MiB |        100.0% | 36.4 MiB → 37.4 MiB | 21,085 → 21,086 | `visit_default`    | `./black/nodes.py:187 → 176`      |
|  +2.8% | +1 MiB |         99.2% | 36.2 MiB → 37.2 MiB | 20,712 → 20,713 | `visit_stmt`       | `./black/linegen.py:199`          |
|  +2.9% | +1 MiB | 95.5% → 95.7% | 34.8 MiB → 35.8 MiB | 20,272 → 20,273 | `visit_funcdef`    | `./black/linegen.py:254`          |

##### `visit_default` (`./black/nodes.py:176`)

| Change |  Delta |      % |                Size |     Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
|  +2.7% | +1 MiB | 100.0% | 36.4 MiB → 37.4 MiB | 21,085 → 21,086 | `visit_default` | `./black/linegen.py:134` |

##### `visit_default` (`./black/linegen.py:134`)

|  Change |  Delta |             % |                Size |     Allocations | Caller              | Location                     |
| ------: | -----: | ------------: | ------------------: | --------------: | ------------------- | ---------------------------- |
|  +35.3% | +7 MiB | 54.4% → 71.7% | 19.8 MiB → 26.8 MiB | 13,398 → 13,405 | `visit_simple_stmt` | `./black/linegen.py:295`     |
|  +23.7% | +4 MiB | 46.4% → 55.8% | 16.9 MiB → 20.9 MiB | 10,807 → 10,811 | `visit_power`       | `./black/linegen.py:341`     |
|   +2.7% | +1 MiB |        100.0% | 36.4 MiB → 37.4 MiB | 21,085 → 21,086 | `visit`             | `./black/nodes.py:163 → 152` |
|   +2.9% | +1 MiB | 95.3% → 95.5% | 34.7 MiB → 35.7 MiB | 20,146 → 20,147 | `visit_suite`       | `./black/linegen.py:288`     |
| +209.1% | +1 MiB |   1.3% → 3.9% |  490 KiB → 1.48 MiB |       653 → 654 | `visit_NUMBER`      | `./black/linegen.py:505`     |

##### `visit_stmt` (`./black/linegen.py:199`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +2.8% | +1 MiB | 100.0% | 36.2 MiB → 37.2 MiB | 20,714 → 20,715 | `visit` | `./black/nodes.py:163 → 152` |

##### `convert` (`./blib2to3/pytree.py:475`)

| Change |  Delta |              % |             Size | Allocations | Caller  | Location                              |
| -----: | -----: | -------------: | ---------------: | ----------: | ------- | ------------------------------------- |
| +40.0% | +2 MiB | 83.3% → 100.0% |    5 MiB → 7 MiB |       5 → 7 | `shift` | `./blib2to3/pgen2/parse.py:373 → 361` |
| -99.7% | -1 MiB |  16.7% → <0.1% | 1 MiB → 3.03 KiB |       5 → 4 | `pop`   | `./blib2to3/pgen2/parse.py:398 → 386` |

##### `get_string_prefix` (`./black/strings.py:89`)

|     Change |  Delta |      % |          Size | Allocations | Caller         | Location                     |
| ---------: | -----: | -----: | ------------: | ----------: | -------------- | ---------------------------- |
| +197100.8% | +1 MiB | 100.0% | 532 B → 1 MiB |       1 → 2 | `is_docstring` | `./black/nodes.py:558 → 553` |

##### `is_docstring` (`./black/nodes.py:553`)

|   Change |  Delta |      % |                Size | Allocations | Caller         | Location                 |
| -------: | -----: | -----: | ------------------: | ----------: | -------------- | ------------------------ |
| +1132.6% | +1 MiB | 100.0% | 90.4 KiB → 1.09 MiB |   107 → 108 | `visit_STRING` | `./black/linegen.py:413` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

| Change |      Delta |             % |                Size | Allocations | Caller    | Location                          |
| -----: | ---------: | ------------: | ------------------: | ----------: | --------- | --------------------------------- |
| +66.0% | +1.484 KiB | 33.4% → 45.4% | 2.25 KiB → 3.73 KiB |       3 → 4 | `__new__` | `/usr/lib/python3.11/enum.py:488` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

| Change |  Delta |             % |                Size | Allocations | Caller     | Location            |
| -----: | -----: | ------------: | ------------------: | ----------: | ---------- | ------------------- |
|  +6.8% | +752 B | 33.2% → 34.7% | 10.8 KiB → 11.5 KiB |          13 | `<module>` | `./black/mode.py:1` |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

| Change |  Delta |      % |     Size | Allocations | Caller        | Location                                     |
| -----: | -----: | -----: | -------: | ----------: | ------------- | -------------------------------------------- |
|    ~0% | +508 B | 100.0% | 3.69 MiB |         814 | `exec_module` | `<frozen importlib._bootstrap_external>:934` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:999`)

| Change |  Delta |      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -----: | -----: | -------: | ----------: | ---------- | --------------------------------------------- |
|    ~0% | +286 B | 100.0% | 2.27 MiB |         352 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `_code_to_timestamp_pyc` (`<frozen importlib._bootstrap_external>:740`)

| Change |  Delta |      % |    Size | Allocations | Caller     | Location                                      |
| -----: | -----: | -----: | ------: | ----------: | ---------- | --------------------------------------------- |
|  +0.2% | +222 B | 100.0% | 112 KiB |         108 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `_run_code` (`<frozen runpy>:65`)

| Change |  Delta |      % |   Size | Allocations | Caller             | Location            |
| -----: | -----: | -----: | -----: | ----------: | ------------------ | ------------------- |
|    ~0% | +222 B | 100.0% | 67 MiB |      22,201 | `_run_module_code` | `<frozen runpy>:91` |

##### `_run_module_code` (`<frozen runpy>:91`)

| Change |  Delta |      % |   Size | Allocations | Caller       | Location             |
| -----: | -----: | -----: | -----: | ----------: | ------------ | -------------------- |
|    ~0% | +222 B | 100.0% | 67 MiB |      22,201 | `run_module` | `<frozen runpy>:201` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

| Change |  Delta |      % |          Size | Allocations | Caller     | Location                        |
| -----: | -----: | -----: | ------------: | ----------: | ---------- | ------------------------------- |
| -75.0% | -3 MiB | 100.0% | 4 MiB → 1 MiB |       4 → 1 | `__next__` | `./blib2to3/pgen2/driver.py:80` |

##### `__next__` (`./blib2to3/pgen2/driver.py:80`)

| Change |  Delta |      % |          Size | Allocations | Caller         | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | -------------- | -------------------------------- |
| -75.0% | -3 MiB | 100.0% | 4 MiB → 1 MiB |       4 → 1 | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `__str__` (`./black/lines.py:490`)

|  Change |  Delta |            % |        Size | Allocations | Caller             | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | ------------------ | -------------------------- |
| removed | -2 MiB | 66.7% → 0.0% | 2 MiB → 0 B |       2 → 0 | `_format_str_once` | `./black/__init__.py:1236` |
| removed | -1 MiB | 33.3% → 0.0% | 1 MiB → 0 B |       1 → 0 | `line_to_string`   | `./black/lines.py:1073`    |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |      % |          Size | Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | --------------- | ------------------------ |
| -22.2% | -2 MiB | 100.0% | 9 MiB → 7 MiB |       9 → 7 | `visit_default` | `./black/linegen.py:134` |

##### `prefix` (`./blib2to3/pytree.py:469`)

|  Change |  Delta |             % |          Size | Allocations | Caller                      | Location                   |
| ------: | -----: | ------------: | ------------: | ----------: | --------------------------- | -------------------------- |
|  -33.3% | -2 MiB | 85.7% → 80.0% | 6 MiB → 4 MiB |       6 → 4 | `normalize_trailing_prefix` | `./black/comments.py:127`  |
| removed | -1 MiB |  14.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `append`                    | `./black/lines.py:63`      |
|     new | +1 MiB |  0.0% → 20.0% |   0 B → 1 MiB |       0 → 1 | `prefix`                    | `./blib2to3/pytree.py:318` |

##### `normalize_trailing_prefix` (`./black/comments.py:127`)

| Change |  Delta |      % |          Size | Allocations | Caller              | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | ------------------- | ------------------------ |
| -28.6% | -2 MiB | 100.0% | 7 MiB → 5 MiB |       7 → 5 | `generate_comments` | `./black/comments.py:52` |

##### `push` (`./blib2to3/pgen2/parse.py:386`)

|  Change |  Delta |             % |        Size | Allocations | Caller      | Location                        |
| ------: | -----: | ------------: | ----------: | ----------: | ----------- | ------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_addtoken` | `./blib2to3/pgen2/parse.py:290` |

##### `__init__` (`./blib2to3/pytree.py:237`)

| Change |  Delta |      % |             Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ---------------: | ----------: | --------- | -------------------------------- |
| -99.7% | -1 MiB | 100.0% | 1 MiB → 3.03 KiB |       5 → 4 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `line_to_string` (`./black/lines.py:1073`)

|  Change |  Delta |             % |        Size | Allocations | Caller           | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------- | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `transform_line` | `./black/linegen.py:601` |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |              % |          Size | Allocations | Caller    | Location                         |
| -----: | -----: | -------------: | ------------: | ----------: | --------- | -------------------------------- |
| -16.7% | -1 MiB |         100.0% | 6 MiB → 5 MiB |       6 → 5 | `prefix`  | `./blib2to3/pytree.py:480 → 469` |
| +25.0% | +1 MiB | 66.7% → 100.0% | 4 MiB → 5 MiB |       4 → 5 | `changed` | `./blib2to3/pytree.py:171 → 160` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |             % |        Size | Allocations | Caller | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ------ | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `line` | `./black/linegen.py:109` |

##### `line` (`./black/linegen.py:109`)

|  Change |  Delta |             % |        Size | Allocations | Caller         | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | -------------- | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `visit_INDENT` | `./black/linegen.py:179` |

##### `visit_INDENT` (`./black/linegen.py:179`)

|  Change |  Delta |             % |        Size | Allocations | Caller  | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | ------- | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `visit` | `./black/nodes.py:163` |

##### `<module>` (`./black/linegen.py:1`)

| Change |      Delta |      % |              Size | Allocations | Caller                      | Location                            |
| -----: | ---------: | -----: | ----------------: | ----------: | --------------------------- | ----------------------------------- |
|  -0.9% | -1.703 KiB | 100.0% | 185 KiB → 183 KiB |         200 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`./black/trans.py:1`)

| Change |      Delta |      % |              Size | Allocations | Caller                      | Location                            |
| -----: | ---------: | -----: | ----------------: | ----------: | --------------------------- | ----------------------------------- |
|  -5.3% | -1.703 KiB | 100.0% | 32 KiB → 30.3 KiB |          32 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |      Delta |     % |     Size |   Allocations | Caller             | Location                                     |
| -----: | ---------: | ----: | -------: | ------------: | ------------------ | -------------------------------------------- |
|    ~0% | -1.011 KiB | 99.4% | 5.41 MiB | 1,448 → 1,449 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|    ~0% |     +286 B | 41.8% | 2.27 MiB |           352 | `source_to_code`   | `<frozen importlib._bootstrap_external>:999` |
|    ~0% |       -8 B |  6.0% |  334 KiB |           342 | `_handle_fromlist` | `<frozen importlib._bootstrap>:1209`         |

##### `_get_module_details` (`<frozen runpy>:105`)

| Change |      Delta |      % |     Size | Allocations | Caller                | Location             |
| -----: | ---------: | -----: | -------: | ----------: | --------------------- | -------------------- |
|    ~0% | -1.214 KiB | 100.0% | 5.46 MiB |       1,506 | `run_module`          | `<frozen runpy>:201` |
|    ~0% | -1.214 KiB |  99.9% | 5.46 MiB |       1,499 | `_get_module_details` | `<frozen runpy>:105` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

| Change |      Delta |           % |                Size |   Allocations | Caller                | Location                |
| -----: | ---------: | ----------: | ------------------: | ------------: | --------------------- | ----------------------- |
|  -1.0% | -1.703 KiB |        3.1% |   176 KiB → 174 KiB |           192 | `<module>`            | `./black/linegen.py:1`  |
|    ~0% | -1.214 KiB |      100.0% |            5.46 MiB |         1,499 | `_get_module_details` | `<frozen runpy>:105`    |
|    ~0% | -1.011 KiB |       98.0% |            5.35 MiB | 1,403 → 1,404 | `<module>`            | `./black/__init__.py:1` |
|  +2.9% |     +901 B | 0.5% → 0.6% | 30.3 KiB → 31.2 KiB |            35 | `<module>`            | `./black/cache.py:1`    |
|  +0.3% |     +794 B |        4.8% |   267 KiB → 268 KiB |     243 → 244 | `<module>`            | `./black/files.py:1`    |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

| Change |      Delta |      % |     Size | Allocations | Caller           | Location                             |
| -----: | ---------: | -----: | -------: | ----------: | ---------------- | ------------------------------------ |
|    ~0% | -1.214 KiB | 100.0% | 5.46 MiB |       1,497 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

| Change |      Delta |      % |     Size | Allocations | Caller                    | Location                             |
| -----: | ---------: | -----: | -------: | ----------: | ------------------------- | ------------------------------------ |
|    ~0% | -1.214 KiB | 100.0% | 5.46 MiB |       1,496 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |

##### `<module>` (`./black/__init__.py:1`)

| Change |      Delta |      % |     Size |   Allocations | Caller                      | Location                            |
| -----: | ---------: | -----: | -------: | ------------: | --------------------------- | ----------------------------------- |
|    ~0% | -1.011 KiB | 100.0% | 5.41 MiB | 1,448 → 1,449 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`./black/ranges.py:1`)

| Change |  Delta |      % |                Size | Allocations | Caller                      | Location                            |
| -----: | -----: | -----: | ------------------: | ----------: | --------------------------- | ----------------------------------- |
| -15.1% | -752 B | 100.0% | 4.86 KiB → 4.13 KiB |           5 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `transform_line` (`./black/linegen.py:601`)

| Change |  Delta |      % |     Size | Allocations | Caller             | Location                          |
| -----: | -----: | -----: | -------: | ----------: | ------------------ | --------------------------------- |
|    ~0% | -274 B | 100.0% | 1.01 MiB |          15 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |

##### `right_hand_split` (`./black/linegen.py:809`)

| Change |  Delta |      % |                Size | Allocations | Caller | Location                 |
| -----: | -----: | -----: | ------------------: | ----------: | ------ | ------------------------ |
|  -4.8% | -274 B | 100.0% | 5.55 KiB → 5.29 KiB |           5 | `_rhs` | `./black/linegen.py:650` |

##### `_first_right_hand_split` (`./black/linegen.py:829`)

| Change |  Delta |      % |                Size | Allocations | Caller             | Location                 |
| -----: | -----: | -----: | ------------------: | ----------: | ------------------ | ------------------------ |
| -16.3% | -274 B | 100.0% | 1.64 KiB → 1.37 KiB |           2 | `right_hand_split` | `./black/linegen.py:809` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

| Change |      Delta |      % |     Size | Allocations | Caller           | Location                            |
| -----: | ---------: | -----: | -------: | ----------: | ---------------- | ----------------------------------- |
|    ~0% | -1.214 KiB | 100.0% | 5.45 MiB |       1,494 | `_load_unlocked` | `<frozen importlib._bootstrap>:666` |

##### `run_module` (`<frozen runpy>:201`)

| Change |    Delta |      % |     Size | Allocations | Caller         | Location                                                       |
| -----: | -------: | -----: | -------: | ----------: | -------------- | -------------------------------------------------------------- |
|    ~0% | -1,022 B | 100.0% | 72.4 MiB |      23,708 | `_run_tracker` | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

| Change | Delta |     % |    Size | Allocations | Caller     | Location                 |
| -----: | ----: | ----: | ------: | ----------: | ---------- | ------------------------ |
|    ~0% |  -8 B | 43.1% | 144 KiB |         138 | `<module>` | `./black/nodes.py:1`     |
|    ~0% |  -8 B | 40.0% | 134 KiB |         127 | `<module>` | `./blib2to3/pygram.py:1` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `visit_simple_stmt` (`./black/linegen.py:295`)

| Change |  Delta |      % |                Size |     Allocations | Callee          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
| +35.3% | +7 MiB | 100.0% | 19.8 MiB → 26.8 MiB | 13,398 → 13,405 | `visit_default` | `./black/linegen.py:134` |

##### `append` (`./black/lines.py:52`)

|  Change |  Delta |             % |                Size |     Allocations | Callee                 | Location                     |
| ------: | -----: | ------------: | ------------------: | --------------: | ---------------------- | ---------------------------- |
| +379.4% | +4 MiB |  5.2% → 19.2% | 1.05 MiB → 5.05 MiB |         90 → 94 | `whitespace`           | `./black/nodes.py:194 → 183` |
|  +11.0% | +2 MiB | 89.8% → 76.9% | 18.2 MiB → 20.2 MiB | 20,790 → 20,792 | `mark`                 | `./black/brackets.py:70`     |
| removed | -1 MiB |   4.9% → 0.0% |         1 MiB → 0 B |           1 → 0 | `prefix`               | `./blib2to3/pytree.py:480`   |
|     new | +1 MiB |   0.0% → 3.8% |         0 B → 1 MiB |           0 → 1 | `is_complex_subscript` | `./black/lines.py:430`       |

##### `visit_power` (`./black/linegen.py:341`)

| Change |  Delta |      % |                Size |     Allocations | Callee          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
| +23.7% | +4 MiB | 100.0% | 16.9 MiB → 20.9 MiB | 10,807 → 10,811 | `visit_default` | `./black/linegen.py:134` |

##### `whitespace` (`./black/nodes.py:183`)

|   Change |  Delta |             % |                Size | Allocations | Callee           | Location                         |
| -------: | -----: | ------------: | ------------------: | ----------: | ---------------- | -------------------------------- |
|  +196.5% | +2 MiB | 96.5% → 59.7% | 1.02 MiB → 3.02 MiB |     24 → 26 | `prev_sibling`   | `./blib2to3/pytree.py:207 → 196` |
| +2719.3% | +1 MiB |  3.5% → 20.5% | 37.7 KiB → 1.04 MiB |     66 → 67 | `preceding_leaf` | `./black/nodes.py:441 → 436`     |

##### `addtoken` (`./blib2to3/pgen2/parse.py:230`)

| Change |  Delta |             % |           Size | Allocations | Callee      | Location                              |
| -----: | -----: | ------------: | -------------: | ----------: | ----------- | ------------------------------------- |
| +42.8% | +3 MiB | 99.5% → 99.7% | 7 MiB → 10 MiB |     11 → 14 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

|  Change |  Delta |             % |          Size | Allocations | Callee  | Location                              |
| ------: | -----: | ------------: | ------------: | ----------: | ------- | ------------------------------------- |
|  +40.0% | +2 MiB | 71.4% → 70.0% | 5 MiB → 7 MiB |       5 → 7 | `shift` | `./blib2to3/pgen2/parse.py:373 → 361` |
| removed | -1 MiB |  14.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `push`  | `./blib2to3/pgen2/parse.py:386`       |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

|  Change |  Delta |      % |                Size | Allocations | Callee                | Location                         |
| ------: | -----: | -----: | ------------------: | ----------: | --------------------- | -------------------------------- |
| +262.7% | +3 MiB | 100.0% | 1.14 MiB → 4.14 MiB |   196 → 199 | `update_sibling_maps` | `./blib2to3/pytree.py:369 → 358` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

| Change |  Delta |      % |          Size | Allocations | Callee    | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | --------- | -------------------------------- |
| +40.0% | +2 MiB | 100.0% | 5 MiB → 7 MiB |       5 → 7 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `visit_STRING` (`./black/linegen.py:413`)

|   Change |  Delta |             % |                Size | Allocations | Callee         | Location                     |
| -------: | -----: | ------------: | ------------------: | ----------: | -------------- | ---------------------------- |
| +1132.6% | +1 MiB | 12.9% → 40.6% | 90.4 KiB → 1.09 MiB |   107 → 108 | `is_docstring` | `./black/nodes.py:558 → 553` |
|      new | +1 MiB |  0.0% → 37.3% |         0 B → 1 MiB |       0 → 1 | `__contains__` | `./black/mode.py:249`        |

##### `visit` (`./black/nodes.py:152`)

|  Change |  Delta |             % |                Size |     Allocations | Callee              | Location                 |
| ------: | -----: | ------------: | ------------------: | --------------: | ------------------- | ------------------------ |
|  +35.3% | +7 MiB | 54.4% → 71.6% | 19.8 MiB → 26.8 MiB | 13,398 → 13,405 | `visit_simple_stmt` | `./black/linegen.py:295` |
|  +23.7% | +4 MiB | 46.4% → 55.8% | 16.9 MiB → 20.9 MiB | 10,808 → 10,812 | `visit_power`       | `./black/linegen.py:341` |
| +293.2% | +2 MiB |   1.9% → 7.2% |  698 KiB → 2.68 MiB |       900 → 902 | `visit_STRING`      | `./black/linegen.py:413` |
|   +2.7% | +1 MiB |        100.0% | 36.4 MiB → 37.4 MiB | 21,085 → 21,086 | `visit_default`     | `./black/linegen.py:134` |
|   +2.8% | +1 MiB |         99.2% | 36.2 MiB → 37.2 MiB | 20,714 → 20,715 | `visit_stmt`        | `./black/linegen.py:199` |

##### `visit_default` (`./black/nodes.py:176`)

| Change |  Delta |      % |                Size |     Allocations | Callee  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +2.7% | +1 MiB | 100.0% | 36.4 MiB → 37.4 MiB | 21,085 → 21,086 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_default` (`./black/linegen.py:134`)

| Change |  Delta |             % |                Size |     Allocations | Callee              | Location                     |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------------- | ---------------------------- |
| +29.6% | +6 MiB | 55.7% → 70.2% | 20.3 MiB → 26.3 MiB | 20,885 → 20,891 | `append`            | `./black/lines.py:63 → 52`   |
| -22.2% | -2 MiB | 24.7% → 18.7% |       9 MiB → 7 MiB |           9 → 7 | `generate_comments` | `./black/comments.py:52`     |
|  +2.7% | +1 MiB |        100.0% | 36.4 MiB → 37.4 MiB | 21,085 → 21,086 | `visit_default`     | `./black/nodes.py:187 → 176` |

##### `visit_stmt` (`./black/linegen.py:199`)

|    Change |  Delta |            % |                Size |     Allocations | Callee                       | Location                         |
| --------: | -----: | -----------: | ------------------: | --------------: | ---------------------------- | -------------------------------- |
|     +2.8% | +1 MiB |       100.0% | 36.2 MiB → 37.2 MiB | 20,712 → 20,713 | `visit`                      | `./black/nodes.py:163 → 152`     |
| +88712.0% | +1 MiB | <0.1% → 2.7% |    1.15 KiB → 1 MiB |           1 → 2 | `normalize_invisible_parens` | `./black/linegen.py:1328 → 1344` |

##### `convert` (`./blib2to3/pytree.py:475`)

| Change |  Delta |              % |             Size | Allocations | Callee     | Location                         |
| -----: | -----: | -------------: | ---------------: | ----------: | ---------- | -------------------------------- |
| +40.0% | +2 MiB | 83.3% → 100.0% |    5 MiB → 7 MiB |       5 → 7 | `__new__`  | `./blib2to3/pytree.py:81 → 70`   |
| -99.7% | -1 MiB |  16.7% → <0.1% | 1 MiB → 3.03 KiB |       5 → 4 | `__init__` | `./blib2to3/pytree.py:248 → 237` |

##### `get_string_prefix` (`./black/strings.py:89`)

| Change |  Delta |            % |        Size | Allocations | Callee                  | Location                 |
| -----: | -----: | -----------: | ----------: | ----------: | ----------------------- | ------------------------ |
|    new | +1 MiB | 0.0% → 99.9% | 0 B → 1 MiB |       0 → 1 | `assert_is_leaf_string` | `./black/strings.py:108` |

##### `is_docstring` (`./black/nodes.py:553`)

|     Change |  Delta |            % |          Size | Allocations | Callee              | Location                |
| ---------: | -----: | -----------: | ------------: | ----------: | ------------------- | ----------------------- |
| +197100.8% | +1 MiB | 0.6% → 91.9% | 532 B → 1 MiB |       1 → 2 | `get_string_prefix` | `./black/strings.py:89` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

| Change |      Delta |            % |                Size | Allocations | Callee        | Location                          |
| -----: | ---------: | -----------: | ------------------: | ----------: | ------------- | --------------------------------- |
| +66.0% | +1.484 KiB | 6.9% → 11.2% | 2.25 KiB → 3.73 KiB |       3 → 4 | `__setattr__` | `/usr/lib/python3.11/enum.py:831` |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

| Change |  Delta |     % |     Size | Allocations | Callee                   | Location                                     |
| -----: | -----: | ----: | -------: | ----------: | ------------------------ | -------------------------------------------- |
|    ~0% | +286 B | 61.5% | 2.27 MiB |         352 | `source_to_code`         | `<frozen importlib._bootstrap_external>:999` |
|  +0.2% | +222 B |  3.0% |  112 KiB |         108 | `_code_to_timestamp_pyc` | `<frozen importlib._bootstrap_external>:740` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:999`)

| Change |  Delta |      % |     Size | Allocations | Callee                      | Location                            |
| -----: | -----: | -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
|    ~0% | +286 B | 100.0% | 2.27 MiB |         352 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_run_code` (`<frozen runpy>:65`)

| Change |  Delta |      % |   Size | Allocations | Callee     | Location                |
| -----: | -----: | -----: | -----: | ----------: | ---------- | ----------------------- |
|    ~0% | +222 B | 100.0% | 67 MiB |      22,201 | `<module>` | `./black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

| Change |  Delta |      % |   Size | Allocations | Callee      | Location            |
| -----: | -----: | -----: | -----: | ----------: | ----------- | ------------------- |
|    ~0% | +222 B | 100.0% | 67 MiB |      22,201 | `_run_code` | `<frozen runpy>:65` |

##### `__next__` (`./blib2to3/pgen2/driver.py:80`)

| Change |  Delta |      % |          Size | Allocations | Callee            | Location                                 |
| -----: | -----: | -----: | ------------: | ----------: | ----------------- | ---------------------------------------- |
| -75.0% | -3 MiB | 100.0% | 4 MiB → 1 MiB |       4 → 1 | `generate_tokens` | `./blib2to3/pgen2/tokenize.py:565 → 554` |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |             % |          Size | Allocations | Callee                      | Location                  |
| -----: | -----: | ------------: | ------------: | ----------: | --------------------------- | ------------------------- |
| -28.6% | -2 MiB | 77.8% → 71.4% | 7 MiB → 5 MiB |       7 → 5 | `normalize_trailing_prefix` | `./black/comments.py:127` |

##### `prefix` (`./blib2to3/pytree.py:469`)

| Change |  Delta |              % |          Size | Allocations | Callee    | Location                         |
| -----: | -----: | -------------: | ------------: | ----------: | --------- | -------------------------------- |
| -16.7% | -1 MiB | 85.7% → 100.0% | 6 MiB → 5 MiB |       6 → 5 | `changed` | `./blib2to3/pytree.py:171 → 160` |

##### `normalize_trailing_prefix` (`./black/comments.py:127`)

| Change |  Delta |             % |          Size | Allocations | Callee   | Location                         |
| -----: | -----: | ------------: | ------------: | ----------: | -------- | -------------------------------- |
| -33.3% | -2 MiB | 85.7% → 80.0% | 6 MiB → 4 MiB |       6 → 4 | `prefix` | `./blib2to3/pytree.py:480 → 469` |

##### `line_to_string` (`./black/lines.py:1073`)

|  Change |  Delta |             % |        Size | Allocations | Callee    | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | --------- | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `__str__` | `./black/lines.py:490` |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |              % |          Size | Allocations | Callee    | Location                         |
| -----: | -----: | -------------: | ------------: | ----------: | --------- | -------------------------------- |
| +25.0% | +1 MiB | 66.7% → 100.0% | 4 MiB → 5 MiB |       4 → 5 | `changed` | `./blib2to3/pytree.py:171 → 160` |

##### `line` (`./black/linegen.py:109`)

|  Change |  Delta |             % |        Size | Allocations | Callee     | Location     |
| ------: | -----: | ------------: | ----------: | ----------: | ---------- | ------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `__init__` | `<string>:2` |

##### `visit_INDENT` (`./black/linegen.py:179`)

|  Change |  Delta |             % |        Size | Allocations | Callee | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ------ | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `line` | `./black/linegen.py:109` |

##### `<module>` (`./black/linegen.py:1`)

| Change |      Delta |     % |              Size | Allocations | Callee           | Location                             |
| -----: | ---------: | ----: | ----------------: | ----------: | ---------------- | ------------------------------------ |
|  -1.0% | -1.703 KiB | 95.1% | 176 KiB → 174 KiB |         192 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |      Delta |           % |                Size |   Allocations | Callee     | Location                |
| -----: | ---------: | ----------: | ------------------: | ------------: | ---------- | ----------------------- |
|  -0.9% | -1.703 KiB |        3.3% |   185 KiB → 183 KiB |           200 | `<module>` | `./black/linegen.py:1`  |
|  -5.3% | -1.703 KiB | 0.6% → 0.5% |   32 KiB → 30.3 KiB |            32 | `<module>` | `./black/trans.py:1`    |
|    ~0% | -1.011 KiB |       99.4% |            5.41 MiB | 1,448 → 1,449 | `<module>` | `./black/__init__.py:1` |
|  +2.3% |     +901 B |        0.7% | 38.4 KiB → 39.2 KiB |            43 | `<module>` | `./black/cache.py:1`    |
|  +0.3% |     +794 B |        4.8% |   268 KiB → 269 KiB |     244 → 245 | `<module>` | `./black/files.py:1`    |

##### `_get_module_details` (`<frozen runpy>:105`)

| Change |      Delta |     % |     Size | Allocations | Callee                | Location                             |
| -----: | ---------: | ----: | -------: | ----------: | --------------------- | ------------------------------------ |
|    ~0% | -1.214 KiB | 99.9% | 5.46 MiB |       1,499 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
|    ~0% | -1.214 KiB | 99.9% | 5.46 MiB |       1,499 | `_get_module_details` | `<frozen runpy>:105`                 |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

| Change |      Delta |      % |     Size | Allocations | Callee                    | Location                             |
| -----: | ---------: | -----: | -------: | ----------: | ------------------------- | ------------------------------------ |
|    ~0% | -1.214 KiB | 100.0% | 5.46 MiB |       1,497 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

| Change |      Delta |      % |     Size | Allocations | Callee           | Location                            |
| -----: | ---------: | -----: | -------: | ----------: | ---------------- | ----------------------------------- |
|    ~0% | -1.214 KiB | 100.0% | 5.46 MiB |       1,496 | `_load_unlocked` | `<frozen importlib._bootstrap>:666` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

| Change |      Delta |      % |     Size | Allocations | Callee        | Location                                     |
| -----: | ---------: | -----: | -------: | ----------: | ------------- | -------------------------------------------- |
|    ~0% | -1.214 KiB | 100.0% | 5.45 MiB |       1,494 | `exec_module` | `<frozen importlib._bootstrap_external>:934` |

##### `<module>` (`./black/__init__.py:1`)

| Change |      Delta |     % |     Size |   Allocations | Callee           | Location                             |
| -----: | ---------: | ----: | -------: | ------------: | ---------------- | ------------------------------------ |
|    ~0% | -1.011 KiB | 99.0% | 5.35 MiB | 1,403 → 1,404 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `transform_line` (`./black/linegen.py:601`)

|    Change |          Delta |            % |               Size | Allocations | Callee            | Location                         |
| --------: | -------------: | -----------: | -----------------: | ----------: | ----------------- | -------------------------------- |
|   removed |         -1 MiB | 98.7% → 0.0% |        1 MiB → 0 B |       1 → 0 | `line_to_string`  | `./black/lines.py:1073`          |
| +11904.4% | +1,023.732 KiB | 0.8% → 99.5% | 8.6 KiB → 1.01 MiB |       8 → 9 | `run_transformer` | `./black/linegen.py:1755 → 1771` |

##### `right_hand_split` (`./black/linegen.py:809`)

| Change |  Delta |             % |                Size | Allocations | Callee                    | Location                 |
| -----: | -----: | ------------: | ------------------: | ----------: | ------------------------- | ------------------------ |
| -16.3% | -274 B | 29.5% → 25.9% | 1.64 KiB → 1.37 KiB |           2 | `_first_right_hand_split` | `./black/linegen.py:829` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

| Change |      Delta |     % |     Size |   Allocations | Callee                      | Location                                      |
| -----: | ---------: | ----: | -------: | ------------: | --------------------------- | --------------------------------------------- |
|    ~0% | -1.011 KiB | 99.1% | 5.41 MiB | 1,448 → 1,449 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|    ~0% |     +508 B | 67.7% | 3.69 MiB |           814 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `run_module` (`<frozen runpy>:201`)

| Change |      Delta |     % |     Size | Allocations | Callee                | Location             |
| -----: | ---------: | ----: | -------: | ----------: | --------------------- | -------------------- |
|    ~0% | -1.214 KiB |  7.5% | 5.46 MiB |       1,506 | `_get_module_details` | `<frozen runpy>:105` |
|    ~0% |     +222 B | 92.5% |   67 MiB |      22,201 | `_run_module_code`    | `<frozen runpy>:91`  |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

| Change | Delta |      % |    Size | Allocations | Callee                      | Location                            |
| -----: | ----: | -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
|    ~0% |  -8 B | 100.0% | 334 KiB |         342 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes held at peak memory in their leaf frame.

Common call stack: `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) ← `run_module` (201) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|    Change |  Delta |            % |                Size |   Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------: | -----: | -----------: | ------------------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    +40.0% | +2 MiB |  6.9% → 9.7% |       5 MiB → 7 MiB |         5 → 7 | `__new__` (`./blib2to3/pytree.py:70`) ← `convert` (475) ← `shift` (`./blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|       new | +2 MiB |  0.0% → 2.8% |         0 B → 2 MiB |         0 → 2 | `_addtoken` (`./blib2to3/pgen2/parse.py:278`) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +93958.4% | +1 MiB | <0.1% → 1.4% |    1.09 KiB → 1 MiB |         1 → 2 | `_rhs` (`./black/linegen.py:650`) ← `run_transformer` (1771) ← `transform_line` (601)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   +118.8% | +1 MiB |  1.2% → 2.5% |  862 KiB → 1.84 MiB | 1,149 → 1,150 | `mark` (`./black/brackets.py:70`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| +17066.7% | +1 MiB | <0.1% → 1.4% |    6 KiB → 1.01 MiB |         8 → 9 | `mark` (`./black/brackets.py:70`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| +16956.3% | +1 MiB | <0.1% → 1.4% | 6.04 KiB → 1.01 MiB |        9 → 10 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +68266.7% | +1 MiB | <0.1% → 1.4% |     1.5 KiB → 1 MiB |         2 → 3 | `mark` (`./black/brackets.py:70`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                  |
|       new | +1 MiB |  0.0% → 1.4% |         0 B → 1 MiB |         0 → 1 | `pop` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|       new | +1 MiB |  0.0% → 1.4% |         0 B → 1 MiB |         0 → 1 | `__contains__` (`./black/mode.py:249`) ← `is_docstring` (`./black/lines.py:203`) ← `_maybe_empty_lines` (599) ← `maybe_empty_lines` (549)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|       new | +1 MiB |  0.0% → 1.4% |         0 B → 1 MiB |         0 → 1 | `__contains__` (`./black/mode.py:249`) ← `visit_STRING` (`./black/linegen.py:413`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                      |
|       new | +1 MiB |  0.0% → 1.4% |         0 B → 1 MiB |         0 → 1 | `changed` (`./blib2to3/pytree.py:160`) ← `changed` (160) ← `prefix` (469) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                 |
|       new | +1 MiB |  0.0% → 1.4% |         0 B → 1 MiB |         0 → 1 | `assert_is_leaf_string` (`./black/strings.py:108`) ← `get_string_prefix` (89) ← `is_docstring` (`./black/nodes.py:553`) ← `visit_STRING` (`./black/linegen.py:413`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|       new | +1 MiB |  0.0% → 1.4% |         0 B → 1 MiB |         0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                  |
|       new | +1 MiB |  0.0% → 1.4% |         0 B → 1 MiB |         0 → 1 | `is_complex_subscript` (`./black/lines.py:430`) ← `append` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) |
|       new | +1 MiB |  0.0% → 1.4% |         0 B → 1 MiB |         0 → 1 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|       new | +1 MiB |  0.0% → 1.4% |         0 B → 1 MiB |         0 → 1 | `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                            |
|       new | +1 MiB |  0.0% → 1.4% |         0 B → 1 MiB |         0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `preceding_leaf` (`./black/nodes.py:436`) ← `whitespace` (183) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|       new | +1 MiB |  0.0% → 1.4% |         0 B → 1 MiB |         0 → 1 | `changed` (`./blib2to3/pytree.py:160`) ← `changed` (160) ← `prefix` (469) ← `prefix` (318) ← `wrap_in_parentheses` (`./black/nodes.py:930`) ← `normalize_invisible_parens` (`./black/linegen.py:1344`) ← `visit_stmt` (199) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|       new | +1 MiB |  0.0% → 1.4% |         0 B → 1 MiB |         0 → 1 | `changed` (`./blib2to3/pytree.py:160`) ← `changed` (160) ← `prefix` (469) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|       new | +1 MiB |  0.0% → 1.4% |         0 B → 1 MiB |         0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Improvements

Call stacks with the largest decrease in bytes held at peak memory in their leaf frame.

Common call stack: `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) ← `run_module` (201) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|  Change |  Delta |            % |              Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | -----: | -----------: | ----------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  -75.0% | -3 MiB |  5.5% → 1.4% |     4 MiB → 1 MiB |       4 → 1 | `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`) ← `__next__` (`./blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed | -2 MiB |  2.8% → 0.0% |       2 MiB → 0 B |       2 → 0 | `__str__` (`./black/lines.py:490`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed | -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `push` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -99.7% | -1 MiB | 1.4% → <0.1% |  1 MiB → 3.03 KiB |       5 → 4 | `__init__` (`./blib2to3/pytree.py:237`) ← `convert` (475) ← `pop` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed | -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                                                                                                      |
| removed | -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                   |
| removed | -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `__str__` (`./black/lines.py:490`) ← `line_to_string` (1073) ← `transform_line` (`./black/linegen.py:601`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                           |
| removed | -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `prefix` (480) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) |
| removed | -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `update_sibling_maps` (`./blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`./black/nodes.py:194`) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed | -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                                       |
| removed | -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -96.6% | -1 MiB | 1.4% → <0.1% | 1.04 MiB → 36 KiB |     49 → 48 | `mark` (`./black/brackets.py:70`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed | -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                      |
| removed | -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `prefix` (`./blib2to3/pytree.py:480`) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                        |
| removed | -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed | -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `is_split_before_delimiter` (`./black/brackets.py:232`) ← `mark` (70) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed | -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `is_split_before_delimiter` (`./black/brackets.py:232`) ← `mark` (70) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                                                                                                                                              |

# Leaked memory profile diff

Leaked 57.1 MiB → 58.1 MiB (+1,023.001 KiB, +1.8%) over 22,698 allocations → 22,699 allocations (2.58 KiB → 2.62 KiB per allocation).

| Category         | Change |          Delta |             % |                Size |     Allocations |
| ---------------- | -----: | -------------: | ------------: | ------------------: | --------------: |
| Ours             |  +2.0% | +1,021.603 KiB | 89.1% → 89.3% | 50.9 MiB → 51.9 MiB | 21,386 → 21,387 |
| Standard library |    ~0% |      +1.23 KiB | 10.5% → 10.3% |            5.97 MiB |           1,082 |
| Third-party      |  +0.1% |         +172 B |          0.4% |             237 KiB |             230 |

Paths starting with `./` or `../` are relative to `/src/black/src/`.

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes never freed within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|    Change |      Delta |             % |                Size |     Allocations | Function                          | Location                                                    |
| --------: | ---------: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------------------------------------- |
|   +262.7% |     +3 MiB |   2.0% → 7.1% | 1.14 MiB → 4.14 MiB |       196 → 199 | `update_sibling_maps`             | `./blib2to3/pytree.py:369 → 358`                            |
|       new |     +2 MiB |   0.0% → 3.4% |         0 B → 2 MiB |           0 → 2 | `_addtoken`                       | `./blib2to3/pgen2/parse.py:290 → 278`                       |
|    +40.0% |     +2 MiB |  8.8% → 12.1% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `./blib2to3/pytree.py:81 → 70`                              |
|    +12.3% |     +2 MiB | 28.4% → 31.4% | 16.2 MiB → 18.2 MiB | 20,788 → 20,790 | `mark`                            | `./black/brackets.py:70`                                    |
|       new |     +2 MiB |   0.0% → 3.4% |         0 B → 2 MiB |           0 → 2 | `__contains__`                    | `./black/mode.py:249`                                       |
|       new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `pop`                             | `./blib2to3/pgen2/parse.py:398 → 386`                       |
| +93958.4% |     +1 MiB |  <0.1% → 1.7% |    1.09 KiB → 1 MiB |           1 → 2 | `_rhs`                            | `./black/linegen.py:650`                                    |
|       new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `whitespace`                      | `./black/nodes.py:194 → 183`                                |
|       new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `assert_is_leaf_string`           | `./black/strings.py:108`                                    |
|       new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `is_complex_subscript`            | `./black/lines.py:430`                                      |
|    +22.0% | +1.484 KiB |         <0.1% | 6.73 KiB → 8.22 KiB |           8 → 9 | `__setattr__`                     | `/usr/lib/python3.11/enum.py:831`                           |
|       ~0% |     +286 B |   4.0% → 3.9% |            2.27 MiB |             352 | `_call_with_frames_removed`       | `<frozen importlib._bootstrap>:233`                         |
|     +0.2% |     +222 B |          0.2% |             112 KiB |             108 | `_code_to_timestamp_pyc`          | `<frozen importlib._bootstrap_external>:740`                |
|     +5.5% |     +172 B |         <0.1% | 3.04 KiB → 3.21 KiB |               2 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |
|     +3.3% |     +104 B |         <0.1% |  3.1 KiB → 3.21 KiB |               4 | `_format_str_once`                | `./black/__init__.py:1236 → 1215`                           |
|     +1.5% |      +96 B |         <0.1% | 6.24 KiB → 6.33 KiB |               4 | `append`                          | `./black/lines.py:63 → 52`                                  |
|     +5.5% |      +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `./black/cache.py:50`                                       |
|    +10.1% |      +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`                           |

##### Ours

|    Change |  Delta |             % |                Size |     Allocations | Function                          | Location                              |
| --------: | -----: | ------------: | ------------------: | --------------: | --------------------------------- | ------------------------------------- |
|   +262.7% | +3 MiB |   2.0% → 7.1% | 1.14 MiB → 4.14 MiB |       196 → 199 | `update_sibling_maps`             | `./blib2to3/pytree.py:369 → 358`      |
|       new | +2 MiB |   0.0% → 3.4% |         0 B → 2 MiB |           0 → 2 | `_addtoken`                       | `./blib2to3/pgen2/parse.py:290 → 278` |
|    +40.0% | +2 MiB |  8.8% → 12.1% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `./blib2to3/pytree.py:81 → 70`        |
|    +12.3% | +2 MiB | 28.4% → 31.4% | 16.2 MiB → 18.2 MiB | 20,788 → 20,790 | `mark`                            | `./black/brackets.py:70`              |
|       new | +2 MiB |   0.0% → 3.4% |         0 B → 2 MiB |           0 → 2 | `__contains__`                    | `./black/mode.py:249`                 |
|       new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `pop`                             | `./blib2to3/pgen2/parse.py:398 → 386` |
| +93958.4% | +1 MiB |  <0.1% → 1.7% |    1.09 KiB → 1 MiB |           1 → 2 | `_rhs`                            | `./black/linegen.py:650`              |
|       new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `whitespace`                      | `./black/nodes.py:194 → 183`          |
|       new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `assert_is_leaf_string`           | `./black/strings.py:108`              |
|       new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `is_complex_subscript`            | `./black/lines.py:430`                |
|     +3.3% | +104 B |         <0.1% |  3.1 KiB → 3.21 KiB |               4 | `_format_str_once`                | `./black/__init__.py:1236 → 1215`     |
|     +1.5% |  +96 B |         <0.1% | 6.24 KiB → 6.33 KiB |               4 | `append`                          | `./black/lines.py:63 → 52`            |
|     +5.5% |  +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `./black/cache.py:50`                 |
|    +10.1% |  +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`     |

##### Standard library

| Change |      Delta |           % |                Size | Allocations | Function                    | Location                                     |
| -----: | ---------: | ----------: | ------------------: | ----------: | --------------------------- | -------------------------------------------- |
| +22.0% | +1.484 KiB |       <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__`               | `/usr/lib/python3.11/enum.py:831`            |
|    ~0% |     +286 B | 4.0% → 3.9% |            2.27 MiB |         352 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`          |
|  +0.2% |     +222 B |        0.2% |             112 KiB |         108 | `_code_to_timestamp_pyc`    | `<frozen importlib._bootstrap_external>:740` |

#### Improvements

Functions with the largest decrease in bytes never freed within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |      Delta |            % |                Size | Allocations | Function                  | Location                                 |
| ------: | ---------: | -----------: | ------------------: | ----------: | ------------------------- | ---------------------------------------- |
|  -75.0% |     -3 MiB |  7.0% → 1.7% |       4 MiB → 1 MiB |       4 → 1 | `generate_tokens`         | `./blib2to3/pgen2/tokenize.py:565 → 554` |
|  -75.0% |     -3 MiB |  7.0% → 1.7% |       4 MiB → 1 MiB |       5 → 2 | `visit_default`           | `./black/linegen.py:134`                 |
| removed |     -3 MiB |  5.3% → 0.0% |         3 MiB → 0 B |       3 → 0 | `__str__`                 | `./black/lines.py:490`                   |
| removed |     -1 MiB |  1.8% → 0.0% |         1 MiB → 0 B |       1 → 0 | `push`                    | `./blib2to3/pgen2/parse.py:386`          |
|  -99.7% |     -1 MiB | 1.8% → <0.1% |    1 MiB → 3.03 KiB |       5 → 4 | `__init__`                | `./blib2to3/pytree.py:248 → 237`         |
|  -99.7% |     -1 MiB | 1.8% → <0.1% |    1 MiB → 3.35 KiB |       5 → 4 | `visit`                   | `./black/nodes.py:163 → 152`             |
|  -16.7% |     -1 MiB | 10.5% → 8.6% |       6 MiB → 5 MiB |       6 → 5 | `changed`                 | `./blib2to3/pytree.py:171 → 160`         |
| removed |     -1 MiB |  1.8% → 0.0% |         1 MiB → 0 B |       1 → 0 | `prefix`                  | `./blib2to3/pytree.py:480 → 469`         |
| removed |     -1 MiB |  1.8% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                | `<string>:2`                             |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                | `./black/trans.py:1`                     |
|   -3.1% |     -768 B |        <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`                 | `/usr/lib/python3.11/enum.py:488`        |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                | `./black/ranges.py:1`                    |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split` | `./black/linegen.py:829`                 |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                | `./blib2to3/pgen2/tokenize.py:1`         |

##### Ours

|  Change |      Delta |            % |                Size | Allocations | Function                  | Location                                 |
| ------: | ---------: | -----------: | ------------------: | ----------: | ------------------------- | ---------------------------------------- |
|  -75.0% |     -3 MiB |  7.0% → 1.7% |       4 MiB → 1 MiB |       4 → 1 | `generate_tokens`         | `./blib2to3/pgen2/tokenize.py:565 → 554` |
|  -75.0% |     -3 MiB |  7.0% → 1.7% |       4 MiB → 1 MiB |       5 → 2 | `visit_default`           | `./black/linegen.py:134`                 |
| removed |     -3 MiB |  5.3% → 0.0% |         3 MiB → 0 B |       3 → 0 | `__str__`                 | `./black/lines.py:490`                   |
| removed |     -1 MiB |  1.8% → 0.0% |         1 MiB → 0 B |       1 → 0 | `push`                    | `./blib2to3/pgen2/parse.py:386`          |
|  -99.7% |     -1 MiB | 1.8% → <0.1% |    1 MiB → 3.03 KiB |       5 → 4 | `__init__`                | `./blib2to3/pytree.py:248 → 237`         |
|  -99.7% |     -1 MiB | 1.8% → <0.1% |    1 MiB → 3.35 KiB |       5 → 4 | `visit`                   | `./black/nodes.py:163 → 152`             |
|  -16.7% |     -1 MiB | 10.5% → 8.6% |       6 MiB → 5 MiB |       6 → 5 | `changed`                 | `./blib2to3/pytree.py:171 → 160`         |
| removed |     -1 MiB |  1.8% → 0.0% |         1 MiB → 0 B |       1 → 0 | `prefix`                  | `./blib2to3/pytree.py:480 → 469`         |
| removed |     -1 MiB |  1.8% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                | `<string>:2`                             |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                | `./black/trans.py:1`                     |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                | `./black/ranges.py:1`                    |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split` | `./black/linegen.py:829`                 |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                | `./blib2to3/pgen2/tokenize.py:1`         |

##### Standard library

| Change |  Delta |     % |                Size | Allocations | Function  | Location                          |
| -----: | -----: | ----: | ------------------: | ----------: | --------- | --------------------------------- |
|  -3.1% | -768 B | <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__` | `/usr/lib/python3.11/enum.py:488` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

|   Change |  Delta |            % |                Size | Allocations | Location                         |
| -------: | -----: | -----------: | ------------------: | ----------: | -------------------------------- |
| +4370.0% | +3 MiB | 6.0% → 74.1% | 70.3 KiB → 3.07 MiB |     93 → 96 | `./blib2to3/pytree.py:377 → 366` |
| +1456.7% | +1 MiB | 6.0% → 25.8% | 70.3 KiB → 1.07 MiB |     93 → 94 | `./blib2to3/pytree.py:376 → 365` |
|   -99.5% | -1 MiB | 88.0% → 0.1% |    1 MiB → 4.99 KiB |      10 → 9 | `./blib2to3/pytree.py:379 → 368` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

| Change |  Delta |             % |        Size | Allocations | Location                        |
| -----: | -----: | ------------: | ----------: | ----------: | ------------------------------- |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `./blib2to3/pgen2/parse.py:302` |

##### `__new__` (`./blib2to3/pytree.py:70`)

| Change |  Delta |      % |          Size | Allocations | Location                       |
| -----: | -----: | -----: | ------------: | ----------: | ------------------------------ |
| +40.0% | +2 MiB | 100.0% | 5 MiB → 7 MiB |       5 → 7 | `./blib2to3/pytree.py:84 → 73` |

##### `mark` (`./black/brackets.py:70`)

| Change |  Delta |      % |                Size |     Allocations | Location                  |
| -----: | -----: | -----: | ------------------: | --------------: | ------------------------- |
| +12.3% | +2 MiB | 100.0% | 16.2 MiB → 18.2 MiB | 20,787 → 20,789 | `./black/brackets.py:112` |

##### `__contains__` (`./black/mode.py:249`)

| Change |  Delta |             % |        Size | Allocations | Location              |
| -----: | -----: | ------------: | ----------: | ----------: | --------------------- |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `./black/mode.py:259` |

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

| Change |  Delta |             % |        Size | Allocations | Location                        |
| -----: | -----: | ------------: | ----------: | ----------: | ------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pgen2/parse.py:396` |

##### `_rhs` (`./black/linegen.py:650`)

|    Change |  Delta |      % |             Size | Allocations | Location                 |
| --------: | -----: | -----: | ---------------: | ----------: | ------------------------ |
| +93958.4% | +1 MiB | 100.0% | 1.09 KiB → 1 MiB |       1 → 2 | `./black/linegen.py:659` |

##### `whitespace` (`./black/nodes.py:183`)

| Change |  Delta |             % |        Size | Allocations | Location               |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./black/nodes.py:338` |

##### `assert_is_leaf_string` (`./black/strings.py:108`)

| Change |  Delta |             % |        Size | Allocations | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | ------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./black/strings.py:138` |

##### `is_complex_subscript` (`./black/lines.py:430`)

| Change |  Delta |             % |        Size | Allocations | Location               |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./black/lines.py:445` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

| Change |      Delta |      % |                Size | Allocations | Location                          |
| -----: | ---------: | -----: | ------------------: | ----------: | --------------------------------- |
| +22.0% | +1.484 KiB | 100.0% | 6.73 KiB → 8.22 KiB |       8 → 9 | `/usr/lib/python3.11/enum.py:842` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |  Delta |      % |     Size | Allocations | Location                            |
| -----: | -----: | -----: | -------: | ----------: | ----------------------------------- |
|    ~0% | +286 B | 100.0% | 2.27 MiB |         352 | `<frozen importlib._bootstrap>:241` |

##### `_code_to_timestamp_pyc` (`<frozen importlib._bootstrap_external>:740`)

| Change |  Delta |      % |    Size | Allocations | Location                                     |
| -----: | -----: | -----: | ------: | ----------: | -------------------------------------------- |
|  +0.2% | +222 B | 100.0% | 112 KiB |         108 | `<frozen importlib._bootstrap_external>:746` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

| Change |  Delta |      % |                Size | Allocations | Location                                                    |
| -----: | -----: | -----: | ------------------: | ----------: | ----------------------------------------------------------- |
|  +5.5% | +172 B | 100.0% | 3.04 KiB → 3.21 KiB |           2 | `/venv/lib/python3.11/site-packages/click/decorators.py:34` |

##### `_format_str_once` (`./black/__init__.py:1215`)

| Change |  Delta |             % |          Size | Allocations | Location                          |
| -----: | -----: | ------------: | ------------: | ----------: | --------------------------------- |
| +13.0% | +104 B | 25.2% → 27.5% | 800 B → 904 B |           1 | `./black/__init__.py:1239 → 1218` |

##### `append` (`./black/lines.py:52`)

| Change | Delta |             % |             Size | Allocations | Location                   |
| -----: | ----: | ------------: | ---------------: | ----------: | -------------------------- |
|  +2.3% | +96 B | 64.1% → 64.6% | 4 KiB → 4.09 KiB |           1 | `./black/lines.py:89 → 78` |

##### `get_cache_file` (`./black/cache.py:50`)

| Change | Delta |      % |                Size | Allocations | Location              |
| -----: | ----: | -----: | ------------------: | ----------: | --------------------- |
|  +5.5% | +64 B | 100.0% | 1.13 KiB → 1.19 KiB |           1 | `./black/cache.py:51` |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

| Change | Delta |      % |          Size | Allocations | Location                          |
| -----: | ----: | -----: | ------------: | ----------: | --------------------------------- |
| +10.1% | +60 B | 100.0% | 594 B → 654 B |           1 | `./black/__init__.py:1050 → 1055` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

|  Change |  Delta |             % |        Size | Allocations | Location                           |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------------------------- |
| removed | -2 MiB |  50.0% → 0.0% | 2 MiB → 0 B |       2 → 0 | `./blib2to3/pgen2/tokenize.py:879` |
| removed | -1 MiB |  25.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pgen2/tokenize.py:752` |
| removed | -1 MiB |  25.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pgen2/tokenize.py:972` |
|     new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pgen2/tokenize.py:603` |

##### `visit_default` (`./black/linegen.py:134`)

|  Change |  Delta |            % |        Size | Allocations | Location                 |
| ------: | -----: | -----------: | ----------: | ----------: | ------------------------ |
| removed | -3 MiB | 75.0% → 0.0% | 3 MiB → 0 B |       3 → 0 | `./black/linegen.py:158` |

##### `__str__` (`./black/lines.py:490`)

|  Change |  Delta |            % |        Size | Allocations | Location               |
| ------: | -----: | -----------: | ----------: | ----------: | ---------------------- |
| removed | -2 MiB | 66.7% → 0.0% | 2 MiB → 0 B |       2 → 0 | `./black/lines.py:500` |
| removed | -1 MiB | 33.3% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./black/lines.py:498` |

##### `push` (`./blib2to3/pgen2/parse.py:386`)

|  Change |  Delta |             % |        Size | Allocations | Location                        |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pgen2/parse.py:394` |

##### `__init__` (`./blib2to3/pytree.py:237`)

| Change |  Delta |      % |             Size | Allocations | Location                         |
| -----: | -----: | -----: | ---------------: | ----------: | -------------------------------- |
| -99.7% | -1 MiB | 100.0% | 1 MiB → 3.03 KiB |       5 → 4 | `./blib2to3/pytree.py:266 → 255` |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |             % |          Size | Allocations | Location                     |
| -----: | -----: | ------------: | ------------: | ----------: | ---------------------------- |
| -99.9% | -1 MiB | 99.7% → 20.1% | 1 MiB → 690 B |       2 → 1 | `./black/nodes.py:185 → 174` |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |             % |          Size | Allocations | Location                         |
| -----: | -----: | ------------: | ------------: | ----------: | -------------------------------- |
| -50.0% | -1 MiB | 33.3% → 20.0% | 2 MiB → 1 MiB |       2 → 1 | `./blib2to3/pytree.py:175 → 164` |

##### `prefix` (`./blib2to3/pytree.py:469`)

|  Change |  Delta |             % |        Size | Allocations | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | -------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pytree.py:482` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |             % |        Size | Allocations | Location     |
| ------: | -----: | ------------: | ----------: | ----------: | ------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `<string>:7` |

##### `<module>` (`./black/trans.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location                |
| ------: | ---------: | -----------: | -------------: | ----------: | ----------------------- |
| removed | -3.187 KiB | 31.5% → 0.0% | 3.19 KiB → 0 B |       1 → 0 | `./black/trans.py:1914` |
|     new | +1.484 KiB | 0.0% → 17.6% | 0 B → 1.48 KiB |       0 → 1 | `./black/trans.py:41`   |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

| Change |  Delta |      % |                Size | Allocations | Location                          |
| -----: | -----: | -----: | ------------------: | ----------: | --------------------------------- |
|  -3.1% | -768 B | 100.0% | 24.1 KiB → 23.3 KiB |     27 → 26 | `/usr/lib/python3.11/enum.py:554` |

##### `<module>` (`./black/ranges.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location                |
| ------: | ---------: | -----------: | -------------: | ----------: | ----------------------- |
| removed | -1.484 KiB | 30.5% → 0.0% | 1.48 KiB → 0 B |       1 → 0 | `./black/ranges.py:509` |
|     new |     +768 B | 0.0% → 18.2% |    0 B → 768 B |       0 → 1 | `./black/ranges.py:7`   |

##### `_first_right_hand_split` (`./black/linegen.py:829`)

| Change |  Delta |      % |             Size | Allocations | Location                 |
| -----: | -----: | -----: | ---------------: | ----------: | ------------------------ |
| -25.9% | -274 B | 100.0% | 1.03 KiB → 784 B |           1 | `./black/linegen.py:918` |

##### `<module>` (`./blib2to3/pgen2/tokenize.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location                               |
| ------: | ---------: | -----------: | -------------: | ----------: | -------------------------------------- |
| removed | -3.187 KiB | 15.4% → 0.0% | 3.19 KiB → 0 B |       1 → 0 | `./blib2to3/pgen2/tokenize.py:170`     |
|     new | +3.187 KiB | 0.0% → 15.4% | 0 B → 3.19 KiB |       0 → 1 | `./blib2to3/pgen2/tokenize.py:163`     |
|   -1.3% |       -8 B |         2.8% |  600 B → 592 B |           1 | `./blib2to3/pgen2/tokenize.py:76 → 65` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

|  Change |  Delta |      % |                Size | Allocations | Caller         | Location                         |
| ------: | -----: | -----: | ------------------: | ----------: | -------------- | -------------------------------- |
| +262.7% | +3 MiB | 100.0% | 1.14 MiB → 4.14 MiB |   196 → 199 | `prev_sibling` | `./blib2to3/pytree.py:207 → 196` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

| Change |  Delta |             % |        Size | Allocations | Caller     | Location                              |
| -----: | -----: | ------------: | ----------: | ----------: | ---------- | ------------------------------------- |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `addtoken` | `./blib2to3/pgen2/parse.py:242 → 230` |

##### `__new__` (`./blib2to3/pytree.py:70`)

| Change |  Delta |      % |          Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | --------- | -------------------------------- |
| +40.0% | +2 MiB | 100.0% | 5 MiB → 7 MiB |       5 → 7 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `mark` (`./black/brackets.py:70`)

| Change |  Delta |      % |                Size |     Allocations | Caller   | Location                   |
| -----: | -----: | -----: | ------------------: | --------------: | -------- | -------------------------- |
| +12.3% | +2 MiB | 100.0% | 16.2 MiB → 18.2 MiB | 20,788 → 20,790 | `append` | `./black/lines.py:63 → 52` |

##### `__contains__` (`./black/mode.py:249`)

| Change |  Delta |            % |        Size | Allocations | Caller         | Location                 |
| -----: | -----: | -----------: | ----------: | ----------: | -------------- | ------------------------ |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `is_docstring` | `./black/lines.py:203`   |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `visit_STRING` | `./black/linegen.py:413` |

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

| Change |  Delta |             % |        Size | Allocations | Caller      | Location                              |
| -----: | -----: | ------------: | ----------: | ----------: | ----------- | ------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `_rhs` (`./black/linegen.py:650`)

|    Change |  Delta |      % |             Size | Allocations | Caller            | Location                         |
| --------: | -----: | -----: | ---------------: | ----------: | ----------------- | -------------------------------- |
| +93958.4% | +1 MiB | 100.0% | 1.09 KiB → 1 MiB |       1 → 2 | `run_transformer` | `./black/linegen.py:1755 → 1771` |

##### `whitespace` (`./black/nodes.py:183`)

| Change |  Delta |             % |        Size | Allocations | Caller   | Location                   |
| -----: | -----: | ------------: | ----------: | ----------: | -------- | -------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `append` | `./black/lines.py:63 → 52` |

##### `assert_is_leaf_string` (`./black/strings.py:108`)

| Change |  Delta |             % |        Size | Allocations | Caller              | Location                |
| -----: | -----: | ------------: | ----------: | ----------: | ------------------- | ----------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `get_string_prefix` | `./black/strings.py:89` |

##### `is_complex_subscript` (`./black/lines.py:430`)

| Change |  Delta |             % |        Size | Allocations | Caller   | Location              |
| -----: | -----: | ------------: | ----------: | ----------: | -------- | --------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `append` | `./black/lines.py:52` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

| Change |      Delta |             % |                Size | Allocations | Caller    | Location                          |
| -----: | ---------: | ------------: | ------------------: | ----------: | --------- | --------------------------------- |
| +66.0% | +1.484 KiB | 33.4% → 45.4% | 2.25 KiB → 3.73 KiB |       3 → 4 | `__new__` | `/usr/lib/python3.11/enum.py:488` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |  Delta |      % |     Size | Allocations | Caller           | Location                                     |
| -----: | -----: | -----: | -------: | ----------: | ---------------- | -------------------------------------------- |
|    ~0% | +286 B | 100.0% | 2.27 MiB |         352 | `source_to_code` | `<frozen importlib._bootstrap_external>:999` |

##### `_code_to_timestamp_pyc` (`<frozen importlib._bootstrap_external>:740`)

| Change |  Delta |      % |    Size | Allocations | Caller     | Location                                      |
| -----: | -----: | -----: | ------: | ----------: | ---------- | --------------------------------------------- |
|  +0.2% | +222 B | 100.0% | 112 KiB |         108 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

| Change |  Delta |      % |                Size | Allocations | Caller   | Location                                               |
| -----: | -----: | -----: | ------------------: | ----------: | -------- | ------------------------------------------------------ |
|  +5.5% | +172 B | 100.0% | 3.04 KiB → 3.21 KiB |           2 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:857` |

##### `_format_str_once` (`./black/__init__.py:1215`)

| Change |  Delta |      % |               Size | Allocations | Caller       | Location                          |
| -----: | -----: | -----: | -----------------: | ----------: | ------------ | --------------------------------- |
|  +3.3% | +104 B | 100.0% | 3.1 KiB → 3.21 KiB |           4 | `format_str` | `./black/__init__.py:1189 → 1168` |

##### `append` (`./black/lines.py:52`)

| Change | Delta |      % |                Size | Allocations | Caller          | Location                 |
| -----: | ----: | -----: | ------------------: | ----------: | --------------- | ------------------------ |
|  +1.5% | +96 B | 100.0% | 6.24 KiB → 6.33 KiB |           4 | `visit_default` | `./black/linegen.py:134` |

##### `get_cache_file` (`./black/cache.py:50`)

| Change | Delta |      % |                Size | Allocations | Caller | Location              |
| -----: | ----: | -----: | ------------------: | ----------: | ------ | --------------------- |
|  +5.5% | +64 B | 100.0% | 1.13 KiB → 1.19 KiB |           1 | `read` | `./black/cache.py:60` |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

| Change | Delta |      % |          Size | Allocations | Caller                 | Location                          |
| -----: | ----: | -----: | ------------: | ----------: | ---------------------- | --------------------------------- |
| +10.1% | +60 B | 100.0% | 594 B → 654 B |           1 | `format_file_contents` | `./black/__init__.py:1054 → 1059` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

| Change |  Delta |      % |          Size | Allocations | Caller     | Location                        |
| -----: | -----: | -----: | ------------: | ----------: | ---------- | ------------------------------- |
| -75.0% | -3 MiB | 100.0% | 4 MiB → 1 MiB |       4 → 1 | `__next__` | `./blib2to3/pgen2/driver.py:80` |

##### `visit_default` (`./black/linegen.py:134`)

| Change |  Delta |              % |          Size | Allocations | Caller  | Location                     |
| -----: | -----: | -------------: | ------------: | ----------: | ------- | ---------------------------- |
| -75.0% | -3 MiB | 100.0% → 99.9% | 4 MiB → 1 MiB |       4 → 1 | `visit` | `./black/nodes.py:163 → 152` |

##### `__str__` (`./black/lines.py:490`)

|  Change |  Delta |            % |        Size | Allocations | Caller             | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | ------------------ | -------------------------- |
| removed | -2 MiB | 66.7% → 0.0% | 2 MiB → 0 B |       2 → 0 | `_format_str_once` | `./black/__init__.py:1236` |
| removed | -1 MiB | 33.3% → 0.0% | 1 MiB → 0 B |       1 → 0 | `line_to_string`   | `./black/lines.py:1073`    |

##### `push` (`./blib2to3/pgen2/parse.py:386`)

|  Change |  Delta |             % |        Size | Allocations | Caller      | Location                        |
| ------: | -----: | ------------: | ----------: | ----------: | ----------- | ------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_addtoken` | `./blib2to3/pgen2/parse.py:290` |

##### `__init__` (`./blib2to3/pytree.py:237`)

| Change |  Delta |      % |             Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ---------------: | ----------: | --------- | -------------------------------- |
| -99.7% | -1 MiB | 100.0% | 1 MiB → 3.03 KiB |       5 → 4 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |             % |             Size | Allocations | Caller          | Location                     |
| -----: | -----: | ------------: | ---------------: | ----------: | --------------- | ---------------------------- |
| -99.7% | -1 MiB | 99.9% → 79.9% | 1 MiB → 2.68 KiB |       4 → 3 | `visit_default` | `./black/nodes.py:187 → 176` |

##### `changed` (`./blib2to3/pytree.py:160`)

|  Change |  Delta |              % |          Size | Allocations | Caller    | Location                         |
| ------: | -----: | -------------: | ------------: | ----------: | --------- | -------------------------------- |
| removed | -2 MiB |   33.3% → 0.0% |   2 MiB → 0 B |       2 → 0 | `prefix`  | `./blib2to3/pytree.py:480 → 469` |
|  +25.0% | +1 MiB | 66.7% → 100.0% | 4 MiB → 5 MiB |       4 → 5 | `changed` | `./blib2to3/pytree.py:171 → 160` |

##### `prefix` (`./blib2to3/pytree.py:469`)

|  Change |  Delta |             % |        Size | Allocations | Caller   | Location              |
| ------: | -----: | ------------: | ----------: | ----------: | -------- | --------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `append` | `./black/lines.py:63` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |             % |        Size | Allocations | Caller | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ------ | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `line` | `./black/linegen.py:109` |

##### `<module>` (`./black/trans.py:1`)

| Change |      Delta |      % |                Size | Allocations | Caller                      | Location                            |
| -----: | ---------: | -----: | ------------------: | ----------: | --------------------------- | ----------------------------------- |
| -16.8% | -1.703 KiB | 100.0% | 10.1 KiB → 8.42 KiB |           9 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

| Change |  Delta |             % |                Size | Allocations | Caller     | Location            |
| -----: | -----: | ------------: | ------------------: | ----------: | ---------- | ------------------- |
|  -9.8% | -768 B | 31.7% → 29.5% | 7.64 KiB → 6.89 KiB |       9 → 8 | `<module>` | `./black/mode.py:1` |

##### `<module>` (`./black/ranges.py:1`)

| Change |  Delta |      % |                Size | Allocations | Caller                      | Location                            |
| -----: | -----: | -----: | ------------------: | ----------: | --------------------------- | ----------------------------------- |
| -15.1% | -752 B | 100.0% | 4.86 KiB → 4.13 KiB |           5 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_first_right_hand_split` (`./black/linegen.py:829`)

| Change |  Delta |      % |             Size | Allocations | Caller             | Location                 |
| -----: | -----: | -----: | ---------------: | ----------: | ------------------ | ------------------------ |
| -25.9% | -274 B | 100.0% | 1.03 KiB → 784 B |           1 | `right_hand_split` | `./black/linegen.py:809` |

##### `<module>` (`./blib2to3/pgen2/tokenize.py:1`)

| Change | Delta |      % |     Size | Allocations | Caller                      | Location                            |
| -----: | ----: | -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
|    ~0% |  -8 B | 100.0% | 20.7 KiB |          14 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

### Total size

#### Regressions

Functions with the largest increase in bytes never freed within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |  Delta |             % |                Size |     Allocations | Function              | Location                                                |
| ------: | -----: | ------------: | ------------------: | --------------: | --------------------- | ------------------------------------------------------- |
|  +42.5% | +8 MiB | 33.0% → 46.2% | 18.8 MiB → 26.8 MiB | 13,397 → 13,405 | `visit_simple_stmt`   | `./black/linegen.py:295`                                |
|  +29.6% | +6 MiB | 35.5% → 45.3% | 20.3 MiB → 26.3 MiB | 20,885 → 20,891 | `append`              | `./black/lines.py:63 → 52`                              |
|  +23.7% | +4 MiB | 29.6% → 36.0% | 16.9 MiB → 20.9 MiB | 10,808 → 10,812 | `visit_power`         | `./black/linegen.py:341`                                |
| +379.4% | +4 MiB |   1.8% → 8.7% | 1.05 MiB → 5.05 MiB |         90 → 94 | `whitespace`          | `./black/nodes.py:194 → 183`                            |
|  +42.6% | +3 MiB | 12.3% → 17.3% |   7.04 MiB → 10 MiB |         14 → 17 | `addtoken`            | `./blib2to3/pgen2/parse.py:242 → 230`                   |
|  +42.8% | +3 MiB | 12.3% → 17.2% |      7 MiB → 10 MiB |         11 → 14 | `_addtoken`           | `./blib2to3/pgen2/parse.py:290 → 278`                   |
| +262.7% | +3 MiB |   2.0% → 7.1% | 1.14 MiB → 4.14 MiB |       196 → 199 | `update_sibling_maps` | `./blib2to3/pytree.py:369 → 358`                        |
| +262.7% | +3 MiB |   2.0% → 7.1% | 1.14 MiB → 4.14 MiB |       196 → 199 | `prev_sibling`        | `./blib2to3/pytree.py:207 → 196`                        |
|   +5.6% | +2 MiB | 62.1% → 64.5% | 35.4 MiB → 37.4 MiB | 21,086 → 21,088 | `visit`               | `./black/nodes.py:163 → 152`                            |
|   +5.6% | +2 MiB | 62.1% → 64.5% | 35.4 MiB → 37.4 MiB | 21,084 → 21,086 | `visit_default`       | `./black/nodes.py:187 → 176`                            |
|   +5.6% | +2 MiB | 62.1% → 64.5% | 35.4 MiB → 37.4 MiB | 21,084 → 21,086 | `visit_default`       | `./black/linegen.py:134`                                |
|   +5.7% | +2 MiB | 61.6% → 64.0% | 35.2 MiB → 37.2 MiB | 20,713 → 20,715 | `visit_stmt`          | `./black/linegen.py:199`                                |
|  +40.0% | +2 MiB |  8.8% → 12.1% |       5 MiB → 7 MiB |           5 → 7 | `__new__`             | `./blib2to3/pytree.py:81 → 70`                          |
|  +40.0% | +2 MiB |  8.8% → 12.1% |       5 MiB → 7 MiB |           5 → 7 | `shift`               | `./blib2to3/pgen2/parse.py:373 → 361`                   |
| +293.2% | +2 MiB |   1.2% → 4.6% |  698 KiB → 2.68 MiB |       900 → 902 | `visit_STRING`        | `./black/linegen.py:413`                                |
|  +11.0% | +2 MiB | 31.9% → 34.8% | 18.2 MiB → 20.2 MiB | 20,790 → 20,792 | `mark`                | `./black/brackets.py:70`                                |
|   +5.9% | +2 MiB | 59.1% → 61.5% | 33.7 MiB → 35.7 MiB | 20,145 → 20,147 | `visit_suite`         | `./black/linegen.py:288`                                |
|   +5.9% | +2 MiB | 59.2% → 61.7% | 33.8 MiB → 35.8 MiB | 20,271 → 20,273 | `visit_funcdef`       | `./black/linegen.py:254`                                |
|     new | +2 MiB |   0.0% → 3.4% |         0 B → 2 MiB |           0 → 2 | `__contains__`        | `./black/mode.py:249`                                   |
|   +1.9% | +1 MiB | 90.5% → 90.6% | 51.6 MiB → 52.6 MiB | 21,191 → 21,192 | `__call__`            | `/venv/lib/python3.11/site-packages/click/core.py:1629` |

##### Ours

|  Change |  Delta |             % |                Size |     Allocations | Function              | Location                              |
| ------: | -----: | ------------: | ------------------: | --------------: | --------------------- | ------------------------------------- |
|  +42.5% | +8 MiB | 33.0% → 46.2% | 18.8 MiB → 26.8 MiB | 13,397 → 13,405 | `visit_simple_stmt`   | `./black/linegen.py:295`              |
|  +29.6% | +6 MiB | 35.5% → 45.3% | 20.3 MiB → 26.3 MiB | 20,885 → 20,891 | `append`              | `./black/lines.py:63 → 52`            |
|  +23.7% | +4 MiB | 29.6% → 36.0% | 16.9 MiB → 20.9 MiB | 10,808 → 10,812 | `visit_power`         | `./black/linegen.py:341`              |
| +379.4% | +4 MiB |   1.8% → 8.7% | 1.05 MiB → 5.05 MiB |         90 → 94 | `whitespace`          | `./black/nodes.py:194 → 183`          |
|  +42.6% | +3 MiB | 12.3% → 17.3% |   7.04 MiB → 10 MiB |         14 → 17 | `addtoken`            | `./blib2to3/pgen2/parse.py:242 → 230` |
|  +42.8% | +3 MiB | 12.3% → 17.2% |      7 MiB → 10 MiB |         11 → 14 | `_addtoken`           | `./blib2to3/pgen2/parse.py:290 → 278` |
| +262.7% | +3 MiB |   2.0% → 7.1% | 1.14 MiB → 4.14 MiB |       196 → 199 | `update_sibling_maps` | `./blib2to3/pytree.py:369 → 358`      |
| +262.7% | +3 MiB |   2.0% → 7.1% | 1.14 MiB → 4.14 MiB |       196 → 199 | `prev_sibling`        | `./blib2to3/pytree.py:207 → 196`      |
|   +5.6% | +2 MiB | 62.1% → 64.5% | 35.4 MiB → 37.4 MiB | 21,086 → 21,088 | `visit`               | `./black/nodes.py:163 → 152`          |
|   +5.6% | +2 MiB | 62.1% → 64.5% | 35.4 MiB → 37.4 MiB | 21,084 → 21,086 | `visit_default`       | `./black/nodes.py:187 → 176`          |
|   +5.6% | +2 MiB | 62.1% → 64.5% | 35.4 MiB → 37.4 MiB | 21,084 → 21,086 | `visit_default`       | `./black/linegen.py:134`              |
|   +5.7% | +2 MiB | 61.6% → 64.0% | 35.2 MiB → 37.2 MiB | 20,713 → 20,715 | `visit_stmt`          | `./black/linegen.py:199`              |
|  +40.0% | +2 MiB |  8.8% → 12.1% |       5 MiB → 7 MiB |           5 → 7 | `__new__`             | `./blib2to3/pytree.py:81 → 70`        |
|  +40.0% | +2 MiB |  8.8% → 12.1% |       5 MiB → 7 MiB |           5 → 7 | `shift`               | `./blib2to3/pgen2/parse.py:373 → 361` |
| +293.2% | +2 MiB |   1.2% → 4.6% |  698 KiB → 2.68 MiB |       900 → 902 | `visit_STRING`        | `./black/linegen.py:413`              |
|  +11.0% | +2 MiB | 31.9% → 34.8% | 18.2 MiB → 20.2 MiB | 20,790 → 20,792 | `mark`                | `./black/brackets.py:70`              |
|   +5.9% | +2 MiB | 59.1% → 61.5% | 33.7 MiB → 35.7 MiB | 20,145 → 20,147 | `visit_suite`         | `./black/linegen.py:288`              |
|   +5.9% | +2 MiB | 59.2% → 61.7% | 33.8 MiB → 35.8 MiB | 20,271 → 20,273 | `visit_funcdef`       | `./black/linegen.py:254`              |
|     new | +2 MiB |   0.0% → 3.4% |         0 B → 2 MiB |           0 → 2 | `__contains__`        | `./black/mode.py:249`                 |
|   +1.9% | +1 MiB | 90.5% → 90.6% | 51.6 MiB → 52.6 MiB | 21,191 → 21,192 | `patched_main`        | `./black/__init__.py:1594 → 1580`     |

##### Standard library

| Change |          Delta |             % |                Size |     Allocations | Function                 | Location                                      |
| -----: | -------------: | ------------: | ------------------: | --------------: | ------------------------ | --------------------------------------------- |
|  +1.9% |         +1 MiB | 90.5% → 90.6% | 51.6 MiB → 52.6 MiB | 21,191 → 21,192 | `_run_code`              | `<frozen runpy>:65`                           |
|  +1.9% |         +1 MiB | 90.5% → 90.6% | 51.6 MiB → 52.6 MiB | 21,191 → 21,192 | `_run_module_code`       | `<frozen runpy>:91`                           |
|  +1.8% | +1,023.001 KiB |        100.0% | 57.1 MiB → 58.1 MiB | 22,697 → 22,698 | `run_module`             | `<frozen runpy>:201`                          |
| +22.0% |     +1.484 KiB |         <0.1% | 6.73 KiB → 8.22 KiB |           8 → 9 | `__setattr__`            | `/usr/lib/python3.11/enum.py:831`             |
|  +2.3% |         +752 B |          0.1% | 32.5 KiB → 33.2 KiB |              38 | `__new__`                | `/usr/lib/python3.11/enum.py:488`             |
|    ~0% |         +508 B |   6.5% → 6.4% |            3.69 MiB |             814 | `get_code`               | `<frozen importlib._bootstrap_external>:1007` |
|    ~0% |         +286 B |   4.0% → 3.9% |            2.27 MiB |             352 | `source_to_code`         | `<frozen importlib._bootstrap_external>:999`  |
|  +0.2% |         +222 B |          0.2% |             112 KiB |             108 | `_code_to_timestamp_pyc` | `<frozen importlib._bootstrap_external>:740`  |

#### Improvements

Functions with the largest decrease in bytes never freed within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |      Delta |             % |              Size | Allocations | Function                    | Location                                 |
| ------: | ---------: | ------------: | ----------------: | ----------: | --------------------------- | ---------------------------------------- |
|  -75.0% |     -3 MiB |   7.0% → 1.7% |     4 MiB → 1 MiB |       4 → 1 | `generate_tokens`           | `./blib2to3/pgen2/tokenize.py:565 → 554` |
|  -75.0% |     -3 MiB |   7.0% → 1.7% |     4 MiB → 1 MiB |       4 → 1 | `__next__`                  | `./blib2to3/pgen2/driver.py:80`          |
| removed |     -3 MiB |   5.3% → 0.0% |       3 MiB → 0 B |       3 → 0 | `__str__`                   | `./black/lines.py:490`                   |
|  -22.2% |     -2 MiB | 15.8% → 12.1% |     9 MiB → 7 MiB |       9 → 7 | `generate_comments`         | `./black/comments.py:52`                 |
|  -28.6% |     -2 MiB |  12.3% → 8.6% |     7 MiB → 5 MiB |       7 → 5 | `prefix`                    | `./blib2to3/pytree.py:480 → 469`         |
|  -28.6% |     -2 MiB |  12.3% → 8.6% |     7 MiB → 5 MiB |       7 → 5 | `normalize_trailing_prefix` | `./black/comments.py:127`                |
| removed |     -1 MiB |   1.8% → 0.0% |       1 MiB → 0 B |       1 → 0 | `push`                      | `./blib2to3/pgen2/parse.py:386`          |
|  -99.7% |     -1 MiB |  1.8% → <0.1% |  1 MiB → 3.03 KiB |       5 → 4 | `__init__`                  | `./blib2to3/pytree.py:248 → 237`         |
| removed |     -1 MiB |   1.8% → 0.0% |       1 MiB → 0 B |       1 → 0 | `line_to_string`            | `./black/lines.py:1073`                  |
|  -16.7% |     -1 MiB |  10.5% → 8.6% |     6 MiB → 5 MiB |       6 → 5 | `changed`                   | `./blib2to3/pytree.py:171 → 160`         |
| removed |     -1 MiB |   1.8% → 0.0% |       1 MiB → 0 B |       1 → 0 | `__init__`                  | `<string>:2`                             |
| removed |     -1 MiB |   1.8% → 0.0% |       1 MiB → 0 B |       1 → 0 | `line`                      | `./black/linegen.py:109`                 |
| removed |     -1 MiB |   1.8% → 0.0% |       1 MiB → 0 B |       1 → 0 | `visit_INDENT`              | `./black/linegen.py:179`                 |
|   -0.9% | -1.703 KiB |          0.3% | 185 KiB → 183 KiB |         200 | `<module>`                  | `./black/linegen.py:1`                   |
|   -5.3% | -1.703 KiB |          0.1% | 32 KiB → 30.3 KiB |          32 | `<module>`                  | `./black/trans.py:1`                     |
|     ~0% | -1.441 KiB |   9.5% → 9.3% |           5.4 MiB |       1,481 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`      |
|     ~0% | -1.214 KiB |   9.5% → 9.3% |          5.43 MiB |       1,505 | `_get_module_details`       | `<frozen runpy>:105`                     |
|     ~0% | -1.214 KiB |   9.5% → 9.3% |          5.42 MiB |       1,498 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`     |
|     ~0% | -1.214 KiB |   9.5% → 9.3% |          5.42 MiB |       1,496 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`     |
|     ~0% | -1.214 KiB |   9.5% → 9.3% |          5.42 MiB |       1,495 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`      |

##### Ours

|  Change |      Delta |             % |                Size |   Allocations | Function                    | Location                                 |
| ------: | ---------: | ------------: | ------------------: | ------------: | --------------------------- | ---------------------------------------- |
|  -75.0% |     -3 MiB |   7.0% → 1.7% |       4 MiB → 1 MiB |         4 → 1 | `generate_tokens`           | `./blib2to3/pgen2/tokenize.py:565 → 554` |
|  -75.0% |     -3 MiB |   7.0% → 1.7% |       4 MiB → 1 MiB |         4 → 1 | `__next__`                  | `./blib2to3/pgen2/driver.py:80`          |
| removed |     -3 MiB |   5.3% → 0.0% |         3 MiB → 0 B |         3 → 0 | `__str__`                   | `./black/lines.py:490`                   |
|  -22.2% |     -2 MiB | 15.8% → 12.1% |       9 MiB → 7 MiB |         9 → 7 | `generate_comments`         | `./black/comments.py:52`                 |
|  -28.6% |     -2 MiB |  12.3% → 8.6% |       7 MiB → 5 MiB |         7 → 5 | `prefix`                    | `./blib2to3/pytree.py:480 → 469`         |
|  -28.6% |     -2 MiB |  12.3% → 8.6% |       7 MiB → 5 MiB |         7 → 5 | `normalize_trailing_prefix` | `./black/comments.py:127`                |
| removed |     -1 MiB |   1.8% → 0.0% |         1 MiB → 0 B |         1 → 0 | `push`                      | `./blib2to3/pgen2/parse.py:386`          |
|  -99.7% |     -1 MiB |  1.8% → <0.1% |    1 MiB → 3.03 KiB |         5 → 4 | `__init__`                  | `./blib2to3/pytree.py:248 → 237`         |
| removed |     -1 MiB |   1.8% → 0.0% |         1 MiB → 0 B |         1 → 0 | `line_to_string`            | `./black/lines.py:1073`                  |
|  -16.7% |     -1 MiB |  10.5% → 8.6% |       6 MiB → 5 MiB |         6 → 5 | `changed`                   | `./blib2to3/pytree.py:171 → 160`         |
| removed |     -1 MiB |   1.8% → 0.0% |         1 MiB → 0 B |         1 → 0 | `__init__`                  | `<string>:2`                             |
| removed |     -1 MiB |   1.8% → 0.0% |         1 MiB → 0 B |         1 → 0 | `line`                      | `./black/linegen.py:109`                 |
| removed |     -1 MiB |   1.8% → 0.0% |         1 MiB → 0 B |         1 → 0 | `visit_INDENT`              | `./black/linegen.py:179`                 |
|   -0.9% | -1.703 KiB |          0.3% |   185 KiB → 183 KiB |           200 | `<module>`                  | `./black/linegen.py:1`                   |
|   -5.3% | -1.703 KiB |          0.1% |   32 KiB → 30.3 KiB |            32 | `<module>`                  | `./black/trans.py:1`                     |
|     ~0% | -1.011 KiB |   9.4% → 9.2% |            5.37 MiB | 1,447 → 1,448 | `<module>`                  | `./black/__init__.py:1`                  |
|  -15.1% |     -752 B |         <0.1% | 4.86 KiB → 4.13 KiB |             5 | `<module>`                  | `./black/ranges.py:1`                    |
|     ~0% |     -274 B |          1.9% |            1.08 MiB |            16 | `transform_line`            | `./black/linegen.py:601`                 |
|   -4.8% |     -274 B |         <0.1% | 5.55 KiB → 5.29 KiB |             5 | `right_hand_split`          | `./black/linegen.py:809`                 |
|  -16.3% |     -274 B |         <0.1% | 1.64 KiB → 1.37 KiB |             2 | `_first_right_hand_split`   | `./black/linegen.py:829`                 |

##### Standard library

| Change |      Delta |           % |     Size | Allocations | Function                    | Location                                     |
| -----: | ---------: | ----------: | -------: | ----------: | --------------------------- | -------------------------------------------- |
|    ~0% | -1.441 KiB | 9.5% → 9.3% |  5.4 MiB |       1,481 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`          |
|    ~0% | -1.214 KiB | 9.5% → 9.3% | 5.43 MiB |       1,505 | `_get_module_details`       | `<frozen runpy>:105`                         |
|    ~0% | -1.214 KiB | 9.5% → 9.3% | 5.42 MiB |       1,498 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`         |
|    ~0% | -1.214 KiB | 9.5% → 9.3% | 5.42 MiB |       1,496 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`         |
|    ~0% | -1.214 KiB | 9.5% → 9.3% | 5.42 MiB |       1,495 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`          |
|    ~0% | -1.214 KiB | 9.5% → 9.3% | 5.42 MiB |       1,493 | `exec_module`               | `<frozen importlib._bootstrap_external>:934` |
|    ~0% |       -8 B |        0.6% |  334 KiB |         342 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`         |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `visit_simple_stmt` (`./black/linegen.py:295`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
| +42.5% | +8 MiB | 100.0% | 18.8 MiB → 26.8 MiB | 13,397 → 13,405 | `visit` | `./black/nodes.py:163 → 152` |

##### `append` (`./black/lines.py:52`)

| Change |  Delta |      % |                Size |     Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
| +29.6% | +6 MiB | 100.0% | 20.3 MiB → 26.3 MiB | 20,885 → 20,891 | `visit_default` | `./black/linegen.py:134` |

##### `visit_power` (`./black/linegen.py:341`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
| +23.7% | +4 MiB | 100.0% | 16.9 MiB → 20.9 MiB | 10,808 → 10,812 | `visit` | `./black/nodes.py:163 → 152` |

##### `whitespace` (`./black/nodes.py:183`)

|  Change |  Delta |      % |                Size | Allocations | Caller   | Location                   |
| ------: | -----: | -----: | ------------------: | ----------: | -------- | -------------------------- |
| +379.4% | +4 MiB | 100.0% | 1.05 MiB → 5.05 MiB |     90 → 94 | `append` | `./black/lines.py:63 → 52` |

##### `addtoken` (`./blib2to3/pgen2/parse.py:230`)

| Change |  Delta |      % |              Size | Allocations | Caller         | Location                         |
| -----: | -----: | -----: | ----------------: | ----------: | -------------- | -------------------------------- |
| +42.6% | +3 MiB | 100.0% | 7.04 MiB → 10 MiB |     14 → 17 | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

| Change |  Delta |      % |           Size | Allocations | Caller     | Location                              |
| -----: | -----: | -----: | -------------: | ----------: | ---------- | ------------------------------------- |
| +42.8% | +3 MiB | 100.0% | 7 MiB → 10 MiB |     11 → 14 | `addtoken` | `./blib2to3/pgen2/parse.py:242 → 230` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

|  Change |  Delta |      % |                Size | Allocations | Caller         | Location                         |
| ------: | -----: | -----: | ------------------: | ----------: | -------------- | -------------------------------- |
| +262.7% | +3 MiB | 100.0% | 1.14 MiB → 4.14 MiB |   196 → 199 | `prev_sibling` | `./blib2to3/pytree.py:207 → 196` |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

|   Change |  Delta |             % |                Size | Allocations | Caller           | Location                     |
| -------: | -----: | ------------: | ------------------: | ----------: | ---------------- | ---------------------------- |
|  +196.5% | +2 MiB | 89.1% → 72.9% | 1.02 MiB → 3.02 MiB |     24 → 26 | `whitespace`     | `./black/nodes.py:194 → 183` |
| +2719.3% | +1 MiB |  3.2% → 25.0% | 37.7 KiB → 1.04 MiB |     66 → 67 | `preceding_leaf` | `./black/nodes.py:441 → 436` |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |             % |                Size |     Allocations | Caller             | Location                          |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------------ | --------------------------------- |
|  +5.6% | +2 MiB |        100.0% | 35.4 MiB → 37.4 MiB | 21,086 → 21,088 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |
|  +5.6% | +2 MiB |        100.0% | 35.4 MiB → 37.4 MiB | 21,084 → 21,086 | `visit_default`    | `./black/nodes.py:187 → 176`      |
|  +5.7% | +2 MiB |         99.2% | 35.2 MiB → 37.2 MiB | 20,711 → 20,713 | `visit_stmt`       | `./black/linegen.py:199`          |
|  +5.9% | +2 MiB | 95.4% → 95.7% | 33.8 MiB → 35.8 MiB | 20,271 → 20,273 | `visit_funcdef`    | `./black/linegen.py:254`          |

##### `visit_default` (`./black/nodes.py:176`)

| Change |  Delta |      % |                Size |     Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
|  +5.6% | +2 MiB | 100.0% | 35.4 MiB → 37.4 MiB | 21,084 → 21,086 | `visit_default` | `./black/linegen.py:134` |

##### `visit_default` (`./black/linegen.py:134`)

|  Change |  Delta |             % |                Size |     Allocations | Caller              | Location                     |
| ------: | -----: | ------------: | ------------------: | --------------: | ------------------- | ---------------------------- |
|  +42.5% | +8 MiB | 53.1% → 71.7% | 18.8 MiB → 26.8 MiB | 13,397 → 13,405 | `visit_simple_stmt` | `./black/linegen.py:295`     |
|  +23.7% | +4 MiB | 47.7% → 55.8% | 16.9 MiB → 20.9 MiB | 10,807 → 10,811 | `visit_power`       | `./black/linegen.py:341`     |
|   +5.6% | +2 MiB |        100.0% | 35.4 MiB → 37.4 MiB | 21,084 → 21,086 | `visit`             | `./black/nodes.py:163 → 152` |
|   +5.9% | +2 MiB | 95.2% → 95.5% | 33.7 MiB → 35.7 MiB | 20,145 → 20,147 | `visit_suite`       | `./black/linegen.py:288`     |
| +209.1% | +1 MiB |   1.3% → 3.9% |  490 KiB → 1.48 MiB |       653 → 654 | `visit_NUMBER`      | `./black/linegen.py:505`     |

##### `visit_stmt` (`./black/linegen.py:199`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +5.7% | +2 MiB | 100.0% | 35.2 MiB → 37.2 MiB | 20,713 → 20,715 | `visit` | `./black/nodes.py:163 → 152` |

##### `__new__` (`./blib2to3/pytree.py:70`)

| Change |  Delta |      % |          Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | --------- | -------------------------------- |
| +40.0% | +2 MiB | 100.0% | 5 MiB → 7 MiB |       5 → 7 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

| Change |  Delta |      % |          Size | Allocations | Caller      | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ----------- | ------------------------------------- |
| +40.0% | +2 MiB | 100.0% | 5 MiB → 7 MiB |       5 → 7 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `visit_STRING` (`./black/linegen.py:413`)

|  Change |  Delta |      % |               Size | Allocations | Caller  | Location                     |
| ------: | -----: | -----: | -----------------: | ----------: | ------- | ---------------------------- |
| +293.2% | +2 MiB | 100.0% | 698 KiB → 2.68 MiB |   900 → 902 | `visit` | `./black/nodes.py:163 → 152` |

##### `mark` (`./black/brackets.py:70`)

| Change |  Delta |      % |                Size |     Allocations | Caller   | Location                   |
| -----: | -----: | -----: | ------------------: | --------------: | -------- | -------------------------- |
| +11.0% | +2 MiB | 100.0% | 18.2 MiB → 20.2 MiB | 20,790 → 20,792 | `append` | `./black/lines.py:63 → 52` |

##### `visit_suite` (`./black/linegen.py:288`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +5.9% | +2 MiB | 100.0% | 33.7 MiB → 35.7 MiB | 20,145 → 20,147 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_funcdef` (`./black/linegen.py:254`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +5.9% | +2 MiB | 100.0% | 33.8 MiB → 35.8 MiB | 20,271 → 20,273 | `visit` | `./black/nodes.py:163 → 152` |

##### `__contains__` (`./black/mode.py:249`)

| Change |  Delta |            % |        Size | Allocations | Caller         | Location                 |
| -----: | -----: | -----------: | ----------: | ----------: | -------------- | ------------------------ |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `is_docstring` | `./black/lines.py:203`   |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `visit_STRING` | `./black/linegen.py:413` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1629`)

| Change |  Delta |      % |                Size |     Allocations | Caller         | Location                          |
| -----: | -----: | -----: | ------------------: | --------------: | -------------- | --------------------------------- |
|  +1.9% | +1 MiB | 100.0% | 51.6 MiB → 52.6 MiB | 21,191 → 21,192 | `patched_main` | `./black/__init__.py:1594 → 1580` |

##### `patched_main` (`./black/__init__.py:1580`)

| Change |  Delta |      % |                Size |     Allocations | Caller     | Location                |
| -----: | -----: | -----: | ------------------: | --------------: | ---------- | ----------------------- |
|  +1.9% | +1 MiB | 100.0% | 51.6 MiB → 52.6 MiB | 21,191 → 21,192 | `<module>` | `./black/__main__.py:1` |

##### `_run_code` (`<frozen runpy>:65`)

| Change |  Delta |      % |                Size |     Allocations | Caller             | Location            |
| -----: | -----: | -----: | ------------------: | --------------: | ------------------ | ------------------- |
|  +1.9% | +1 MiB | 100.0% | 51.6 MiB → 52.6 MiB | 21,191 → 21,192 | `_run_module_code` | `<frozen runpy>:91` |

##### `_run_module_code` (`<frozen runpy>:91`)

| Change |  Delta |      % |                Size |     Allocations | Caller       | Location             |
| -----: | -----: | -----: | ------------------: | --------------: | ------------ | -------------------- |
|  +1.9% | +1 MiB | 100.0% | 51.6 MiB → 52.6 MiB | 21,191 → 21,192 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

| Change |          Delta |      % |                Size |     Allocations | Caller         | Location                                                       |
| -----: | -------------: | -----: | ------------------: | --------------: | -------------- | -------------------------------------------------------------- |
|  +1.8% | +1,023.001 KiB | 100.0% | 57.1 MiB → 58.1 MiB | 22,697 → 22,698 | `_run_tracker` | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

| Change |      Delta |             % |                Size | Allocations | Caller    | Location                          |
| -----: | ---------: | ------------: | ------------------: | ----------: | --------- | --------------------------------- |
| +66.0% | +1.484 KiB | 33.4% → 45.4% | 2.25 KiB → 3.73 KiB |       3 → 4 | `__new__` | `/usr/lib/python3.11/enum.py:488` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

| Change |  Delta |             % |                Size | Allocations | Caller     | Location            |
| -----: | -----: | ------------: | ------------------: | ----------: | ---------- | ------------------- |
|  +6.8% | +752 B | 33.2% → 34.7% | 10.8 KiB → 11.5 KiB |          13 | `<module>` | `./black/mode.py:1` |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

| Change |  Delta |      % |     Size | Allocations | Caller        | Location                                     |
| -----: | -----: | -----: | -------: | ----------: | ------------- | -------------------------------------------- |
|    ~0% | +508 B | 100.0% | 3.69 MiB |         814 | `exec_module` | `<frozen importlib._bootstrap_external>:934` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:999`)

| Change |  Delta |      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -----: | -----: | -------: | ----------: | ---------- | --------------------------------------------- |
|    ~0% | +286 B | 100.0% | 2.27 MiB |         352 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `_code_to_timestamp_pyc` (`<frozen importlib._bootstrap_external>:740`)

| Change |  Delta |      % |    Size | Allocations | Caller     | Location                                      |
| -----: | -----: | -----: | ------: | ----------: | ---------- | --------------------------------------------- |
|  +0.2% | +222 B | 100.0% | 112 KiB |         108 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

| Change |  Delta |      % |          Size | Allocations | Caller     | Location                        |
| -----: | -----: | -----: | ------------: | ----------: | ---------- | ------------------------------- |
| -75.0% | -3 MiB | 100.0% | 4 MiB → 1 MiB |       4 → 1 | `__next__` | `./blib2to3/pgen2/driver.py:80` |

##### `__next__` (`./blib2to3/pgen2/driver.py:80`)

| Change |  Delta |      % |          Size | Allocations | Caller         | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | -------------- | -------------------------------- |
| -75.0% | -3 MiB | 100.0% | 4 MiB → 1 MiB |       4 → 1 | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `__str__` (`./black/lines.py:490`)

|  Change |  Delta |            % |        Size | Allocations | Caller             | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | ------------------ | -------------------------- |
| removed | -2 MiB | 66.7% → 0.0% | 2 MiB → 0 B |       2 → 0 | `_format_str_once` | `./black/__init__.py:1236` |
| removed | -1 MiB | 33.3% → 0.0% | 1 MiB → 0 B |       1 → 0 | `line_to_string`   | `./black/lines.py:1073`    |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |      % |          Size | Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | --------------- | ------------------------ |
| -22.2% | -2 MiB | 100.0% | 9 MiB → 7 MiB |       9 → 7 | `visit_default` | `./black/linegen.py:134` |

##### `prefix` (`./blib2to3/pytree.py:469`)

|  Change |  Delta |             % |          Size | Allocations | Caller                      | Location                   |
| ------: | -----: | ------------: | ------------: | ----------: | --------------------------- | -------------------------- |
|  -33.3% | -2 MiB | 85.7% → 80.0% | 6 MiB → 4 MiB |       6 → 4 | `normalize_trailing_prefix` | `./black/comments.py:127`  |
| removed | -1 MiB |  14.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `append`                    | `./black/lines.py:63`      |
|     new | +1 MiB |  0.0% → 20.0% |   0 B → 1 MiB |       0 → 1 | `prefix`                    | `./blib2to3/pytree.py:318` |

##### `normalize_trailing_prefix` (`./black/comments.py:127`)

| Change |  Delta |      % |          Size | Allocations | Caller              | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | ------------------- | ------------------------ |
| -28.6% | -2 MiB | 100.0% | 7 MiB → 5 MiB |       7 → 5 | `generate_comments` | `./black/comments.py:52` |

##### `push` (`./blib2to3/pgen2/parse.py:386`)

|  Change |  Delta |             % |        Size | Allocations | Caller      | Location                        |
| ------: | -----: | ------------: | ----------: | ----------: | ----------- | ------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_addtoken` | `./blib2to3/pgen2/parse.py:290` |

##### `__init__` (`./blib2to3/pytree.py:237`)

| Change |  Delta |      % |             Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ---------------: | ----------: | --------- | -------------------------------- |
| -99.7% | -1 MiB | 100.0% | 1 MiB → 3.03 KiB |       5 → 4 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `line_to_string` (`./black/lines.py:1073`)

|  Change |  Delta |             % |        Size | Allocations | Caller           | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------- | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `transform_line` | `./black/linegen.py:601` |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |              % |          Size | Allocations | Caller    | Location                         |
| -----: | -----: | -------------: | ------------: | ----------: | --------- | -------------------------------- |
| -16.7% | -1 MiB |         100.0% | 6 MiB → 5 MiB |       6 → 5 | `prefix`  | `./blib2to3/pytree.py:480 → 469` |
| +25.0% | +1 MiB | 66.7% → 100.0% | 4 MiB → 5 MiB |       4 → 5 | `changed` | `./blib2to3/pytree.py:171 → 160` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |             % |        Size | Allocations | Caller | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ------ | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `line` | `./black/linegen.py:109` |

##### `line` (`./black/linegen.py:109`)

|  Change |  Delta |             % |        Size | Allocations | Caller         | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | -------------- | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `visit_INDENT` | `./black/linegen.py:179` |

##### `visit_INDENT` (`./black/linegen.py:179`)

|  Change |  Delta |             % |        Size | Allocations | Caller  | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | ------- | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `visit` | `./black/nodes.py:163` |

##### `<module>` (`./black/linegen.py:1`)

| Change |      Delta |      % |              Size | Allocations | Caller                      | Location                            |
| -----: | ---------: | -----: | ----------------: | ----------: | --------------------------- | ----------------------------------- |
|  -0.9% | -1.703 KiB | 100.0% | 185 KiB → 183 KiB |         200 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`./black/trans.py:1`)

| Change |      Delta |      % |              Size | Allocations | Caller                      | Location                            |
| -----: | ---------: | -----: | ----------------: | ----------: | --------------------------- | ----------------------------------- |
|  -5.3% | -1.703 KiB | 100.0% | 32 KiB → 30.3 KiB |          32 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |      Delta |     % |     Size |   Allocations | Caller             | Location                                     |
| -----: | ---------: | ----: | -------: | ------------: | ------------------ | -------------------------------------------- |
|    ~0% | -1.011 KiB | 99.4% | 5.37 MiB | 1,447 → 1,448 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|    ~0% |     +286 B | 42.1% | 2.27 MiB |           352 | `source_to_code`   | `<frozen importlib._bootstrap_external>:999` |
|    ~0% |       -8 B |  6.0% |  334 KiB |           342 | `_handle_fromlist` | `<frozen importlib._bootstrap>:1209`         |

##### `_get_module_details` (`<frozen runpy>:105`)

| Change |      Delta |      % |     Size | Allocations | Caller                | Location             |
| -----: | ---------: | -----: | -------: | ----------: | --------------------- | -------------------- |
|    ~0% | -1.214 KiB | 100.0% | 5.43 MiB |       1,505 | `run_module`          | `<frozen runpy>:201` |
|    ~0% | -1.214 KiB |  99.9% | 5.42 MiB |       1,498 | `_get_module_details` | `<frozen runpy>:105` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

| Change |      Delta |           % |                Size |   Allocations | Caller                | Location                |
| -----: | ---------: | ----------: | ------------------: | ------------: | --------------------- | ----------------------- |
|  -1.0% | -1.703 KiB | 3.2% → 3.1% |   176 KiB → 174 KiB |           192 | `<module>`            | `./black/linegen.py:1`  |
|    ~0% | -1.214 KiB |      100.0% |            5.42 MiB |         1,498 | `_get_module_details` | `<frozen runpy>:105`    |
|    ~0% | -1.011 KiB |       98.0% | 5.32 MiB → 5.31 MiB | 1,402 → 1,403 | `<module>`            | `./black/__init__.py:1` |
|  +2.9% |     +901 B | 0.5% → 0.6% | 30.3 KiB → 31.2 KiB |            35 | `<module>`            | `./black/cache.py:1`    |
|  +0.3% |     +794 B |        4.2% |   231 KiB → 232 KiB |     242 → 243 | `<module>`            | `./black/files.py:1`    |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

| Change |      Delta |      % |     Size | Allocations | Caller           | Location                             |
| -----: | ---------: | -----: | -------: | ----------: | ---------------- | ------------------------------------ |
|    ~0% | -1.214 KiB | 100.0% | 5.42 MiB |       1,496 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

| Change |      Delta |      % |     Size | Allocations | Caller                    | Location                             |
| -----: | ---------: | -----: | -------: | ----------: | ------------------------- | ------------------------------------ |
|    ~0% | -1.214 KiB | 100.0% | 5.42 MiB |       1,495 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |

##### `<module>` (`./black/__init__.py:1`)

| Change |      Delta |      % |     Size |   Allocations | Caller                      | Location                            |
| -----: | ---------: | -----: | -------: | ------------: | --------------------------- | ----------------------------------- |
|    ~0% | -1.011 KiB | 100.0% | 5.37 MiB | 1,447 → 1,448 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`./black/ranges.py:1`)

| Change |  Delta |      % |                Size | Allocations | Caller                      | Location                            |
| -----: | -----: | -----: | ------------------: | ----------: | --------------------------- | ----------------------------------- |
| -15.1% | -752 B | 100.0% | 4.86 KiB → 4.13 KiB |           5 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `transform_line` (`./black/linegen.py:601`)

| Change |  Delta |      % |     Size | Allocations | Caller             | Location                          |
| -----: | -----: | -----: | -------: | ----------: | ------------------ | --------------------------------- |
|    ~0% | -274 B | 100.0% | 1.08 MiB |          16 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |

##### `right_hand_split` (`./black/linegen.py:809`)

| Change |  Delta |      % |                Size | Allocations | Caller | Location                 |
| -----: | -----: | -----: | ------------------: | ----------: | ------ | ------------------------ |
|  -4.8% | -274 B | 100.0% | 5.55 KiB → 5.29 KiB |           5 | `_rhs` | `./black/linegen.py:650` |

##### `_first_right_hand_split` (`./black/linegen.py:829`)

| Change |  Delta |      % |                Size | Allocations | Caller             | Location                 |
| -----: | -----: | -----: | ------------------: | ----------: | ------------------ | ------------------------ |
| -16.3% | -274 B | 100.0% | 1.64 KiB → 1.37 KiB |           2 | `right_hand_split` | `./black/linegen.py:809` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

| Change |      Delta |      % |     Size | Allocations | Caller           | Location                            |
| -----: | ---------: | -----: | -------: | ----------: | ---------------- | ----------------------------------- |
|    ~0% | -1.214 KiB | 100.0% | 5.42 MiB |       1,493 | `_load_unlocked` | `<frozen importlib._bootstrap>:666` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

| Change | Delta |     % |    Size | Allocations | Caller     | Location                 |
| -----: | ----: | ----: | ------: | ----------: | ---------- | ------------------------ |
|    ~0% |  -8 B | 43.1% | 144 KiB |         138 | `<module>` | `./black/nodes.py:1`     |
|    ~0% |  -8 B | 40.0% | 134 KiB |         127 | `<module>` | `./blib2to3/pygram.py:1` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `visit_simple_stmt` (`./black/linegen.py:295`)

| Change |  Delta |      % |                Size |     Allocations | Callee          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
| +42.5% | +8 MiB | 100.0% | 18.8 MiB → 26.8 MiB | 13,397 → 13,405 | `visit_default` | `./black/linegen.py:134` |

##### `append` (`./black/lines.py:52`)

|  Change |  Delta |             % |                Size |     Allocations | Callee                 | Location                     |
| ------: | -----: | ------------: | ------------------: | --------------: | ---------------------- | ---------------------------- |
| +379.4% | +4 MiB |  5.2% → 19.2% | 1.05 MiB → 5.05 MiB |         90 → 94 | `whitespace`           | `./black/nodes.py:194 → 183` |
|  +11.0% | +2 MiB | 89.8% → 76.9% | 18.2 MiB → 20.2 MiB | 20,790 → 20,792 | `mark`                 | `./black/brackets.py:70`     |
| removed | -1 MiB |   4.9% → 0.0% |         1 MiB → 0 B |           1 → 0 | `prefix`               | `./blib2to3/pytree.py:480`   |
|     new | +1 MiB |   0.0% → 3.8% |         0 B → 1 MiB |           0 → 1 | `is_complex_subscript` | `./black/lines.py:430`       |

##### `visit_power` (`./black/linegen.py:341`)

| Change |  Delta |      % |                Size |     Allocations | Callee          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
| +23.7% | +4 MiB | 100.0% | 16.9 MiB → 20.9 MiB | 10,807 → 10,811 | `visit_default` | `./black/linegen.py:134` |

##### `whitespace` (`./black/nodes.py:183`)

|   Change |  Delta |             % |                Size | Allocations | Callee           | Location                         |
| -------: | -----: | ------------: | ------------------: | ----------: | ---------------- | -------------------------------- |
|  +196.5% | +2 MiB | 96.5% → 59.7% | 1.02 MiB → 3.02 MiB |     24 → 26 | `prev_sibling`   | `./blib2to3/pytree.py:207 → 196` |
| +2719.3% | +1 MiB |  3.5% → 20.5% | 37.7 KiB → 1.04 MiB |     66 → 67 | `preceding_leaf` | `./black/nodes.py:441 → 436`     |

##### `addtoken` (`./blib2to3/pgen2/parse.py:230`)

| Change |  Delta |             % |           Size | Allocations | Callee      | Location                              |
| -----: | -----: | ------------: | -------------: | ----------: | ----------- | ------------------------------------- |
| +42.8% | +3 MiB | 99.5% → 99.7% | 7 MiB → 10 MiB |     11 → 14 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

|  Change |  Delta |             % |          Size | Allocations | Callee  | Location                              |
| ------: | -----: | ------------: | ------------: | ----------: | ------- | ------------------------------------- |
|  +40.0% | +2 MiB | 71.4% → 70.0% | 5 MiB → 7 MiB |       5 → 7 | `shift` | `./blib2to3/pgen2/parse.py:373 → 361` |
| removed | -1 MiB |  14.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `push`  | `./blib2to3/pgen2/parse.py:386`       |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

|  Change |  Delta |      % |                Size | Allocations | Callee                | Location                         |
| ------: | -----: | -----: | ------------------: | ----------: | --------------------- | -------------------------------- |
| +262.7% | +3 MiB | 100.0% | 1.14 MiB → 4.14 MiB |   196 → 199 | `update_sibling_maps` | `./blib2to3/pytree.py:369 → 358` |

##### `visit` (`./black/nodes.py:152`)

|  Change |  Delta |             % |                Size |     Allocations | Callee              | Location                 |
| ------: | -----: | ------------: | ------------------: | --------------: | ------------------- | ------------------------ |
|  +42.5% | +8 MiB | 53.1% → 71.6% | 18.8 MiB → 26.8 MiB | 13,397 → 13,405 | `visit_simple_stmt` | `./black/linegen.py:295` |
|  +23.7% | +4 MiB | 47.7% → 55.8% | 16.9 MiB → 20.9 MiB | 10,808 → 10,812 | `visit_power`       | `./black/linegen.py:341` |
|   +5.6% | +2 MiB |        100.0% | 35.4 MiB → 37.4 MiB | 21,084 → 21,086 | `visit_default`     | `./black/linegen.py:134` |
|   +5.7% | +2 MiB |         99.2% | 35.2 MiB → 37.2 MiB | 20,713 → 20,715 | `visit_stmt`        | `./black/linegen.py:199` |
| +293.2% | +2 MiB |   1.9% → 7.2% |  698 KiB → 2.68 MiB |       900 → 902 | `visit_STRING`      | `./black/linegen.py:413` |

##### `visit_default` (`./black/nodes.py:176`)

| Change |  Delta |      % |                Size |     Allocations | Callee  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +5.6% | +2 MiB | 100.0% | 35.4 MiB → 37.4 MiB | 21,084 → 21,086 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_default` (`./black/linegen.py:134`)

| Change |  Delta |             % |                Size |     Allocations | Callee              | Location                     |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------------- | ---------------------------- |
| +29.6% | +6 MiB | 57.2% → 70.2% | 20.3 MiB → 26.3 MiB | 20,885 → 20,891 | `append`            | `./black/lines.py:63 → 52`   |
|  +5.6% | +2 MiB |        100.0% | 35.4 MiB → 37.4 MiB | 21,084 → 21,086 | `visit_default`     | `./black/nodes.py:187 → 176` |
| -22.2% | -2 MiB | 25.4% → 18.7% |       9 MiB → 7 MiB |           9 → 7 | `generate_comments` | `./black/comments.py:52`     |

##### `visit_stmt` (`./black/linegen.py:199`)

|    Change |  Delta |            % |                Size |     Allocations | Callee                       | Location                         |
| --------: | -----: | -----------: | ------------------: | --------------: | ---------------------------- | -------------------------------- |
|     +5.7% | +2 MiB |       100.0% | 35.2 MiB → 37.2 MiB | 20,711 → 20,713 | `visit`                      | `./black/nodes.py:163 → 152`     |
| +88712.0% | +1 MiB | <0.1% → 2.7% |    1.15 KiB → 1 MiB |           1 → 2 | `normalize_invisible_parens` | `./black/linegen.py:1328 → 1344` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

| Change |  Delta |      % |          Size | Allocations | Callee    | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | --------- | -------------------------------- |
| +40.0% | +2 MiB | 100.0% | 5 MiB → 7 MiB |       5 → 7 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `visit_STRING` (`./black/linegen.py:413`)

|   Change |  Delta |             % |                Size | Allocations | Callee         | Location                     |
| -------: | -----: | ------------: | ------------------: | ----------: | -------------- | ---------------------------- |
| +1132.6% | +1 MiB | 12.9% → 40.6% | 90.4 KiB → 1.09 MiB |   107 → 108 | `is_docstring` | `./black/nodes.py:558 → 553` |
|      new | +1 MiB |  0.0% → 37.3% |         0 B → 1 MiB |       0 → 1 | `__contains__` | `./black/mode.py:249`        |

##### `visit_suite` (`./black/linegen.py:288`)

| Change |  Delta |      % |                Size |     Allocations | Callee          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
|  +5.9% | +2 MiB | 100.0% | 33.7 MiB → 35.7 MiB | 20,145 → 20,147 | `visit_default` | `./black/linegen.py:134` |

##### `visit_funcdef` (`./black/linegen.py:254`)

| Change |  Delta |      % |                Size |     Allocations | Callee  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +5.9% | +2 MiB | 100.0% | 33.8 MiB → 35.8 MiB | 20,271 → 20,273 | `visit` | `./black/nodes.py:163 → 152` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1629`)

| Change |  Delta |      % |                Size |     Allocations | Callee | Location                                                |
| -----: | -----: | -----: | ------------------: | --------------: | ------ | ------------------------------------------------------- |
|  +1.9% | +1 MiB | 100.0% | 51.6 MiB → 52.6 MiB | 21,190 → 21,191 | `main` | `/venv/lib/python3.11/site-packages/click/core.py:1484` |

##### `patched_main` (`./black/__init__.py:1580`)

| Change |  Delta |      % |                Size |     Allocations | Callee     | Location                                                |
| -----: | -----: | -----: | ------------------: | --------------: | ---------- | ------------------------------------------------------- |
|  +1.9% | +1 MiB | 100.0% | 51.6 MiB → 52.6 MiB | 21,191 → 21,192 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1629` |

##### `_run_code` (`<frozen runpy>:65`)

| Change |  Delta |      % |                Size |     Allocations | Callee     | Location                |
| -----: | -----: | -----: | ------------------: | --------------: | ---------- | ----------------------- |
|  +1.9% | +1 MiB | 100.0% | 51.6 MiB → 52.6 MiB | 21,191 → 21,192 | `<module>` | `./black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

| Change |  Delta |      % |                Size |     Allocations | Callee      | Location            |
| -----: | -----: | -----: | ------------------: | --------------: | ----------- | ------------------- |
|  +1.9% | +1 MiB | 100.0% | 51.6 MiB → 52.6 MiB | 21,191 → 21,192 | `_run_code` | `<frozen runpy>:65` |

##### `run_module` (`<frozen runpy>:201`)

| Change |      Delta |             % |                Size |     Allocations | Callee                | Location             |
| -----: | ---------: | ------------: | ------------------: | --------------: | --------------------- | -------------------- |
|  +1.9% |     +1 MiB | 90.5% → 90.7% | 51.6 MiB → 52.6 MiB | 21,191 → 21,192 | `_run_module_code`    | `<frozen runpy>:91`  |
|    ~0% | -1.214 KiB |   9.5% → 9.3% |            5.43 MiB |           1,505 | `_get_module_details` | `<frozen runpy>:105` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

| Change |      Delta |            % |                Size | Allocations | Callee        | Location                          |
| -----: | ---------: | -----------: | ------------------: | ----------: | ------------- | --------------------------------- |
| +66.0% | +1.484 KiB | 6.9% → 11.2% | 2.25 KiB → 3.73 KiB |       3 → 4 | `__setattr__` | `/usr/lib/python3.11/enum.py:831` |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

| Change |  Delta |     % |     Size | Allocations | Callee                   | Location                                     |
| -----: | -----: | ----: | -------: | ----------: | ------------------------ | -------------------------------------------- |
|    ~0% | +286 B | 61.5% | 2.27 MiB |         352 | `source_to_code`         | `<frozen importlib._bootstrap_external>:999` |
|  +0.2% | +222 B |  3.0% |  112 KiB |         108 | `_code_to_timestamp_pyc` | `<frozen importlib._bootstrap_external>:740` |

##### `source_to_code` (`<frozen importlib._bootstrap_external>:999`)

| Change |  Delta |      % |     Size | Allocations | Callee                      | Location                            |
| -----: | -----: | -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
|    ~0% | +286 B | 100.0% | 2.27 MiB |         352 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__next__` (`./blib2to3/pgen2/driver.py:80`)

| Change |  Delta |      % |          Size | Allocations | Callee            | Location                                 |
| -----: | -----: | -----: | ------------: | ----------: | ----------------- | ---------------------------------------- |
| -75.0% | -3 MiB | 100.0% | 4 MiB → 1 MiB |       4 → 1 | `generate_tokens` | `./blib2to3/pgen2/tokenize.py:565 → 554` |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |             % |          Size | Allocations | Callee                      | Location                  |
| -----: | -----: | ------------: | ------------: | ----------: | --------------------------- | ------------------------- |
| -28.6% | -2 MiB | 77.8% → 71.4% | 7 MiB → 5 MiB |       7 → 5 | `normalize_trailing_prefix` | `./black/comments.py:127` |

##### `prefix` (`./blib2to3/pytree.py:469`)

| Change |  Delta |              % |          Size | Allocations | Callee    | Location                         |
| -----: | -----: | -------------: | ------------: | ----------: | --------- | -------------------------------- |
| -16.7% | -1 MiB | 85.7% → 100.0% | 6 MiB → 5 MiB |       6 → 5 | `changed` | `./blib2to3/pytree.py:171 → 160` |

##### `normalize_trailing_prefix` (`./black/comments.py:127`)

| Change |  Delta |             % |          Size | Allocations | Callee   | Location                         |
| -----: | -----: | ------------: | ------------: | ----------: | -------- | -------------------------------- |
| -33.3% | -2 MiB | 85.7% → 80.0% | 6 MiB → 4 MiB |       6 → 4 | `prefix` | `./blib2to3/pytree.py:480 → 469` |

##### `line_to_string` (`./black/lines.py:1073`)

|  Change |  Delta |             % |        Size | Allocations | Callee    | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | --------- | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `__str__` | `./black/lines.py:490` |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |              % |          Size | Allocations | Callee    | Location                         |
| -----: | -----: | -------------: | ------------: | ----------: | --------- | -------------------------------- |
| +25.0% | +1 MiB | 66.7% → 100.0% | 4 MiB → 5 MiB |       4 → 5 | `changed` | `./blib2to3/pytree.py:171 → 160` |

##### `line` (`./black/linegen.py:109`)

|  Change |  Delta |             % |        Size | Allocations | Callee     | Location     |
| ------: | -----: | ------------: | ----------: | ----------: | ---------- | ------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `__init__` | `<string>:2` |

##### `visit_INDENT` (`./black/linegen.py:179`)

|  Change |  Delta |             % |        Size | Allocations | Callee | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ------ | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `line` | `./black/linegen.py:109` |

##### `<module>` (`./black/linegen.py:1`)

| Change |      Delta |     % |              Size | Allocations | Callee           | Location                             |
| -----: | ---------: | ----: | ----------------: | ----------: | ---------------- | ------------------------------------ |
|  -1.0% | -1.703 KiB | 95.1% | 176 KiB → 174 KiB |         192 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |      Delta |           % |                Size |   Allocations | Callee     | Location                |
| -----: | ---------: | ----------: | ------------------: | ------------: | ---------- | ----------------------- |
|  -0.9% | -1.703 KiB |        3.3% |   185 KiB → 183 KiB |           200 | `<module>` | `./black/linegen.py:1`  |
|  -5.3% | -1.703 KiB | 0.6% → 0.5% |   32 KiB → 30.3 KiB |            32 | `<module>` | `./black/trans.py:1`    |
|    ~0% | -1.011 KiB |       99.4% |            5.37 MiB | 1,447 → 1,448 | `<module>` | `./black/__init__.py:1` |
|  +2.3% |     +901 B |        0.7% | 38.4 KiB → 39.2 KiB |            43 | `<module>` | `./black/cache.py:1`    |
|  +0.3% |     +794 B |        4.2% |   232 KiB → 233 KiB |     243 → 244 | `<module>` | `./black/files.py:1`    |

##### `_get_module_details` (`<frozen runpy>:105`)

| Change |      Delta |     % |     Size | Allocations | Callee                | Location                             |
| -----: | ---------: | ----: | -------: | ----------: | --------------------- | ------------------------------------ |
|    ~0% | -1.214 KiB | 99.9% | 5.42 MiB |       1,498 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
|    ~0% | -1.214 KiB | 99.9% | 5.42 MiB |       1,498 | `_get_module_details` | `<frozen runpy>:105`                 |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

| Change |      Delta |      % |     Size | Allocations | Callee                    | Location                             |
| -----: | ---------: | -----: | -------: | ----------: | ------------------------- | ------------------------------------ |
|    ~0% | -1.214 KiB | 100.0% | 5.42 MiB |       1,496 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

| Change |      Delta |      % |     Size | Allocations | Callee           | Location                            |
| -----: | ---------: | -----: | -------: | ----------: | ---------------- | ----------------------------------- |
|    ~0% | -1.214 KiB | 100.0% | 5.42 MiB |       1,495 | `_load_unlocked` | `<frozen importlib._bootstrap>:666` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

| Change |      Delta |      % |     Size | Allocations | Callee        | Location                                     |
| -----: | ---------: | -----: | -------: | ----------: | ------------- | -------------------------------------------- |
|    ~0% | -1.214 KiB | 100.0% | 5.42 MiB |       1,493 | `exec_module` | `<frozen importlib._bootstrap_external>:934` |

##### `<module>` (`./black/__init__.py:1`)

| Change |      Delta |     % |                Size |   Allocations | Callee           | Location                             |
| -----: | ---------: | ----: | ------------------: | ------------: | ---------------- | ------------------------------------ |
|    ~0% | -1.011 KiB | 99.0% | 5.32 MiB → 5.31 MiB | 1,402 → 1,403 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `transform_line` (`./black/linegen.py:601`)

|    Change |          Delta |            % |               Size | Allocations | Callee            | Location                         |
| --------: | -------------: | -----------: | -----------------: | ----------: | ----------------- | -------------------------------- |
|   removed |         -1 MiB | 92.3% → 0.0% |        1 MiB → 0 B |       1 → 0 | `line_to_string`  | `./black/lines.py:1073`          |
| +11904.4% | +1,023.732 KiB | 0.8% → 93.0% | 8.6 KiB → 1.01 MiB |       8 → 9 | `run_transformer` | `./black/linegen.py:1755 → 1771` |

##### `right_hand_split` (`./black/linegen.py:809`)

| Change |  Delta |             % |                Size | Allocations | Callee                    | Location                 |
| -----: | -----: | ------------: | ------------------: | ----------: | ------------------------- | ------------------------ |
| -16.3% | -274 B | 29.5% → 25.9% | 1.64 KiB → 1.37 KiB |           2 | `_first_right_hand_split` | `./black/linegen.py:829` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

| Change |      Delta |             % |     Size |   Allocations | Callee                      | Location                                      |
| -----: | ---------: | ------------: | -------: | ------------: | --------------------------- | --------------------------------------------- |
|    ~0% | -1.011 KiB |         99.1% | 5.37 MiB | 1,447 → 1,448 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|    ~0% |     +508 B | 68.1% → 68.2% | 3.69 MiB |           814 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

| Change | Delta |      % |    Size | Allocations | Callee                      | Location                            |
| -----: | ----: | -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
|    ~0% |  -8 B | 100.0% | 334 KiB |         342 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes never freed in their leaf frame.

Common call stack: `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) ← `run_module` (201) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|    Change |  Delta |            % |             Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------: | -----: | -----------: | ---------------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    +40.0% | +2 MiB | 8.8% → 12.1% |    5 MiB → 7 MiB |       5 → 7 | `__new__` (`./blib2to3/pytree.py:70`) ← `convert` (475) ← `shift` (`./blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|       new | +2 MiB |  0.0% → 3.4% |      0 B → 2 MiB |       0 → 2 | `_addtoken` (`./blib2to3/pgen2/parse.py:278`) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +93958.4% | +1 MiB | <0.1% → 1.7% | 1.09 KiB → 1 MiB |       1 → 2 | `_rhs` (`./black/linegen.py:650`) ← `run_transformer` (1771) ← `transform_line` (601)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|       new | +1 MiB |  0.0% → 1.7% |      0 B → 1 MiB |       0 → 1 | `pop` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|       new | +1 MiB |  0.0% → 1.7% |      0 B → 1 MiB |       0 → 1 | `__contains__` (`./black/mode.py:249`) ← `is_docstring` (`./black/lines.py:203`) ← `_maybe_empty_lines` (599) ← `maybe_empty_lines` (549)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|       new | +1 MiB |  0.0% → 1.7% |      0 B → 1 MiB |       0 → 1 | `__contains__` (`./black/mode.py:249`) ← `visit_STRING` (`./black/linegen.py:413`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                      |
|       new | +1 MiB |  0.0% → 1.7% |      0 B → 1 MiB |       0 → 1 | `changed` (`./blib2to3/pytree.py:160`) ← `changed` (160) ← `prefix` (469) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                 |
|       new | +1 MiB |  0.0% → 1.7% |      0 B → 1 MiB |       0 → 1 | `assert_is_leaf_string` (`./black/strings.py:108`) ← `get_string_prefix` (89) ← `is_docstring` (`./black/nodes.py:553`) ← `visit_STRING` (`./black/linegen.py:413`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|       new | +1 MiB |  0.0% → 1.7% |      0 B → 1 MiB |       0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|       new | +1 MiB |  0.0% → 1.7% |      0 B → 1 MiB |       0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                  |
|       new | +1 MiB |  0.0% → 1.7% |      0 B → 1 MiB |       0 → 1 | `is_complex_subscript` (`./black/lines.py:430`) ← `append` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) |
|       new | +1 MiB |  0.0% → 1.7% |      0 B → 1 MiB |       0 → 1 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|       new | +1 MiB |  0.0% → 1.7% |      0 B → 1 MiB |       0 → 1 | `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                            |
|       new | +1 MiB |  0.0% → 1.7% |      0 B → 1 MiB |       0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `preceding_leaf` (`./black/nodes.py:436`) ← `whitespace` (183) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|       new | +1 MiB |  0.0% → 1.7% |      0 B → 1 MiB |       0 → 1 | `changed` (`./blib2to3/pytree.py:160`) ← `changed` (160) ← `prefix` (469) ← `prefix` (318) ← `wrap_in_parentheses` (`./black/nodes.py:930`) ← `normalize_invisible_parens` (`./black/linegen.py:1344`) ← `visit_stmt` (199) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|       new | +1 MiB |  0.0% → 1.7% |      0 B → 1 MiB |       0 → 1 | `mark` (`./black/brackets.py:70`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|       new | +1 MiB |  0.0% → 1.7% |      0 B → 1 MiB |       0 → 1 | `mark` (`./black/brackets.py:70`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                  |
|       new | +1 MiB |  0.0% → 1.7% |      0 B → 1 MiB |       0 → 1 | `changed` (`./blib2to3/pytree.py:160`) ← `changed` (160) ← `prefix` (469) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|       new | +1 MiB |  0.0% → 1.7% |      0 B → 1 MiB |       0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|       new | +1 MiB |  0.0% → 1.7% |      0 B → 1 MiB |       0 → 1 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### Improvements

Call stacks with the largest decrease in bytes never freed in their leaf frame.

Common call stack: `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) ← `run_module` (201) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|  Change |  Delta |           % |          Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | -----: | ----------: | ------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  -75.0% | -3 MiB | 7.0% → 1.7% | 4 MiB → 1 MiB |       4 → 1 | `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`) ← `__next__` (`./blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed | -2 MiB | 3.5% → 0.0% |   2 MiB → 0 B |       2 → 0 | `__str__` (`./black/lines.py:490`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed | -1 MiB | 1.8% → 0.0% |   1 MiB → 0 B |       1 → 0 | `push` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed | -1 MiB | 1.8% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__init__` (`./blib2to3/pytree.py:248`) ← `convert` (486) ← `pop` (`./blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed | -1 MiB | 1.8% → 0.0% |   1 MiB → 0 B |       1 → 0 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -1 MiB | 1.8% → 0.0% |   1 MiB → 0 B |       1 → 0 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                                                                                                      |
| removed | -1 MiB | 1.8% → 0.0% |   1 MiB → 0 B |       1 → 0 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                   |
| removed | -1 MiB | 1.8% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__str__` (`./black/lines.py:490`) ← `line_to_string` (1073) ← `transform_line` (`./black/linegen.py:601`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -1 MiB | 1.8% → 0.0% |   1 MiB → 0 B |       1 → 0 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                           |
| removed | -1 MiB | 1.8% → 0.0% |   1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `prefix` (480) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) |
| removed | -1 MiB | 1.8% → 0.0% |   1 MiB → 0 B |       1 → 0 | `update_sibling_maps` (`./blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`./black/nodes.py:194`) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed | -1 MiB | 1.8% → 0.0% |   1 MiB → 0 B |       1 → 0 | `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                                       |
| removed | -1 MiB | 1.8% → 0.0% |   1 MiB → 0 B |       1 → 0 | `mark` (`./black/brackets.py:70`) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed | -1 MiB | 1.8% → 0.0% |   1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                      |
| removed | -1 MiB | 1.8% → 0.0% |   1 MiB → 0 B |       1 → 0 | `prefix` (`./blib2to3/pytree.py:480`) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                        |
| removed | -1 MiB | 1.8% → 0.0% |   1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -1 MiB | 1.8% → 0.0% |   1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed | -1 MiB | 1.8% → 0.0% |   1 MiB → 0 B |       1 → 0 | `is_split_before_delimiter` (`./black/brackets.py:232`) ← `mark` (70) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed | -1 MiB | 1.8% → 0.0% |   1 MiB → 0 B |       1 → 0 | `is_split_before_delimiter` (`./black/brackets.py:232`) ← `mark` (70) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                                                                                                                                              |
| removed | -1 MiB | 1.8% → 0.0% |   1 MiB → 0 B |       1 → 0 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`)                                                                                                                                                                                                                                                                                                                                                                                                                                        |

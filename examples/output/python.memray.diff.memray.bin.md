# Peak memory profile diff

Held 72.4 MiB (-1,022 B, ~0%) over 23,709 allocations (3.13 KiB per allocation).

| Category         | Change |      Delta |     % |     Size | Allocations |
| ---------------- | -----: | ---------: | ----: | -------: | ----------: |
| Ours             |    ~0% | -2.396 KiB | 71.8% |   52 MiB |      21,382 |
| Standard library |    ~0% |  +1.23 KiB | 27.9% | 20.2 MiB |       2,095 |
| Third-party      |  +0.1% |     +172 B |  0.3% |  238 KiB |         232 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes held at peak memory directly in the function body, excluding callees.

|    Change |      Delta |             % |                Size |     Allocations | Function                          | Location                                                    |
| --------: | ---------: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------------------------------------- |
|   +262.7% |     +3 MiB |   1.6% → 5.7% | 1.14 MiB → 4.14 MiB |       196 → 199 | `update_sibling_maps`             | `blib2to3/pytree.py:358`                                    |
|       new |     +2 MiB |   0.0% → 2.8% |         0 B → 2 MiB |           0 → 2 | `_addtoken`                       | `blib2to3/pgen2/parse.py:278`                               |
|    +40.0% |     +2 MiB |   6.9% → 9.7% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `blib2to3/pytree.py:70`                                     |
|    +12.3% |     +2 MiB | 22.4% → 25.2% | 16.2 MiB → 18.2 MiB | 20,788 → 20,790 | `mark`                            | `black/brackets.py:70`                                      |
|       new |     +2 MiB |   0.0% → 2.8% |         0 B → 2 MiB |           0 → 2 | `__contains__`                    | `black/mode.py:249`                                         |
|       new |     +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `pop`                             | `blib2to3/pgen2/parse.py:386`                               |
| +93958.4% |     +1 MiB |  <0.1% → 1.4% |    1.09 KiB → 1 MiB |           1 → 2 | `_rhs`                            | `black/linegen.py:650`                                      |
|       new |     +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `whitespace`                      | `black/nodes.py:183`                                        |
|       new |     +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `assert_is_leaf_string`           | `black/strings.py:108`                                      |
|       new |     +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `is_complex_subscript`            | `black/lines.py:430`                                        |
|    +22.0% | +1.484 KiB |         <0.1% | 6.73 KiB → 8.22 KiB |           8 → 9 | `__setattr__`                     | `/usr/lib/python3.11/enum.py:831`                           |
|       ~0% |     +286 B |          3.1% |            2.27 MiB |             352 | `_call_with_frames_removed`       | `<frozen importlib._bootstrap>:233`                         |
|     +0.2% |     +222 B |          0.2% |             112 KiB |             108 | `_code_to_timestamp_pyc`          | `<frozen importlib._bootstrap_external>:740`                |
|     +4.4% |     +172 B |         <0.1% | 3.79 KiB → 3.96 KiB |               3 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |
|       ~0% |     +104 B |          0.3% |             225 KiB |               5 | `_format_str_once`                | `black/__init__.py:1215`                                    |
|     +1.5% |      +96 B |         <0.1% | 6.24 KiB → 6.33 KiB |               4 | `append`                          | `black/lines.py:52`                                         |
|     +5.5% |      +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `black/cache.py:50`                                         |
|    +10.1% |      +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `black/__init__.py:1042`                                    |

##### Ours

|    Change |  Delta |             % |                Size |     Allocations | Function                          | Location                      |
| --------: | -----: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------- |
|   +262.7% | +3 MiB |   1.6% → 5.7% | 1.14 MiB → 4.14 MiB |       196 → 199 | `update_sibling_maps`             | `blib2to3/pytree.py:358`      |
|       new | +2 MiB |   0.0% → 2.8% |         0 B → 2 MiB |           0 → 2 | `_addtoken`                       | `blib2to3/pgen2/parse.py:278` |
|    +40.0% | +2 MiB |   6.9% → 9.7% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `blib2to3/pytree.py:70`       |
|    +12.3% | +2 MiB | 22.4% → 25.2% | 16.2 MiB → 18.2 MiB | 20,788 → 20,790 | `mark`                            | `black/brackets.py:70`        |
|       new | +2 MiB |   0.0% → 2.8% |         0 B → 2 MiB |           0 → 2 | `__contains__`                    | `black/mode.py:249`           |
|       new | +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `pop`                             | `blib2to3/pgen2/parse.py:386` |
| +93958.4% | +1 MiB |  <0.1% → 1.4% |    1.09 KiB → 1 MiB |           1 → 2 | `_rhs`                            | `black/linegen.py:650`        |
|       new | +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `whitespace`                      | `black/nodes.py:183`          |
|       new | +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `assert_is_leaf_string`           | `black/strings.py:108`        |
|       new | +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `is_complex_subscript`            | `black/lines.py:430`          |
|       ~0% | +104 B |          0.3% |             225 KiB |               5 | `_format_str_once`                | `black/__init__.py:1215`      |
|     +1.5% |  +96 B |         <0.1% | 6.24 KiB → 6.33 KiB |               4 | `append`                          | `black/lines.py:52`           |
|     +5.5% |  +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `black/cache.py:50`           |
|    +10.1% |  +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `black/__init__.py:1042`      |

##### Standard library

| Change |      Delta |     % |                Size | Allocations | Function                    | Location                                     |
| -----: | ---------: | ----: | ------------------: | ----------: | --------------------------- | -------------------------------------------- |
| +22.0% | +1.484 KiB | <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__`               | `/usr/lib/python3.11/enum.py:831`            |
|    ~0% |     +286 B |  3.1% |            2.27 MiB |         352 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`          |
|  +0.2% |     +222 B |  0.2% |             112 KiB |         108 | `_code_to_timestamp_pyc`    | `<frozen importlib._bootstrap_external>:740` |

#### Improvements

Functions with the largest decrease in bytes held at peak memory directly in the function body, excluding callees.

|  Change |      Delta |            % |                Size | Allocations | Function                  | Location                          |
| ------: | ---------: | -----------: | ------------------: | ----------: | ------------------------- | --------------------------------- |
|  -75.0% |     -3 MiB |  5.5% → 1.4% |       4 MiB → 1 MiB |       4 → 1 | `generate_tokens`         | `blib2to3/pgen2/tokenize.py:554`  |
|  -75.0% |     -3 MiB |  5.5% → 1.4% |       4 MiB → 1 MiB |       5 → 2 | `visit_default`           | `black/linegen.py:134`            |
| removed |     -3 MiB |  4.1% → 0.0% |         3 MiB → 0 B |       3 → 0 | `__str__`                 | `black/lines.py:490`              |
|  -99.8% |     -2 MiB | 2.8% → <0.1% |    2 MiB → 3.35 KiB |       6 → 4 | `visit`                   | `black/nodes.py:152`              |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |       1 → 0 | `push`                    | `blib2to3/pgen2/parse.py:386`     |
|  -99.7% |     -1 MiB | 1.4% → <0.1% |    1 MiB → 3.03 KiB |       5 → 4 | `__init__`                | `blib2to3/pytree.py:237`          |
|  -16.7% |     -1 MiB |  8.3% → 6.9% |       6 MiB → 5 MiB |       6 → 5 | `changed`                 | `blib2to3/pytree.py:160`          |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |       1 → 0 | `prefix`                  | `blib2to3/pytree.py:318`          |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                | `<string>:2`                      |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                | `black/trans.py:1`                |
|   -3.1% |     -768 B |        <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`                 | `/usr/lib/python3.11/enum.py:488` |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                | `black/ranges.py:1`               |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split` | `black/linegen.py:829`            |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                | `blib2to3/pgen2/tokenize.py:1`    |

##### Ours

|  Change |      Delta |            % |                Size | Allocations | Function                  | Location                         |
| ------: | ---------: | -----------: | ------------------: | ----------: | ------------------------- | -------------------------------- |
|  -75.0% |     -3 MiB |  5.5% → 1.4% |       4 MiB → 1 MiB |       4 → 1 | `generate_tokens`         | `blib2to3/pgen2/tokenize.py:554` |
|  -75.0% |     -3 MiB |  5.5% → 1.4% |       4 MiB → 1 MiB |       5 → 2 | `visit_default`           | `black/linegen.py:134`           |
| removed |     -3 MiB |  4.1% → 0.0% |         3 MiB → 0 B |       3 → 0 | `__str__`                 | `black/lines.py:490`             |
|  -99.8% |     -2 MiB | 2.8% → <0.1% |    2 MiB → 3.35 KiB |       6 → 4 | `visit`                   | `black/nodes.py:152`             |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |       1 → 0 | `push`                    | `blib2to3/pgen2/parse.py:386`    |
|  -99.7% |     -1 MiB | 1.4% → <0.1% |    1 MiB → 3.03 KiB |       5 → 4 | `__init__`                | `blib2to3/pytree.py:237`         |
|  -16.7% |     -1 MiB |  8.3% → 6.9% |       6 MiB → 5 MiB |       6 → 5 | `changed`                 | `blib2to3/pytree.py:160`         |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |       1 → 0 | `prefix`                  | `blib2to3/pytree.py:318`         |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                | `<string>:2`                     |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                | `black/trans.py:1`               |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                | `black/ranges.py:1`              |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split` | `black/linegen.py:829`           |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                | `blib2to3/pgen2/tokenize.py:1`   |

##### Standard library

| Change |  Delta |     % |                Size | Allocations | Function  | Location                          |
| -----: | -----: | ----: | ------------------: | ----------: | --------- | --------------------------------- |
|  -3.1% | -768 B | <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__` | `/usr/lib/python3.11/enum.py:488` |

### Total size

#### Regressions

Functions with the largest increase in total bytes held at peak memory in the function and all its callees.

##### Ours

|     Change |  Delta |             % |                Size |     Allocations | Function              | Location                      |
| ---------: | -----: | ------------: | ------------------: | --------------: | --------------------- | ----------------------------- |
|     +35.3% | +7 MiB | 27.4% → 37.0% | 19.8 MiB → 26.8 MiB | 13,398 → 13,405 | `visit_simple_stmt`   | `black/linegen.py:295`        |
|     +29.6% | +6 MiB | 28.0% → 36.3% | 20.3 MiB → 26.3 MiB | 20,885 → 20,891 | `append`              | `black/lines.py:52`           |
|        new | +5 MiB |   0.0% → 6.9% |         0 B → 5 MiB |           0 → 5 | `prefix`              | `blib2to3/pytree.py:469`      |
|     +23.7% | +4 MiB | 23.3% → 28.9% | 16.9 MiB → 20.9 MiB | 10,808 → 10,812 | `visit_power`         | `black/linegen.py:341`        |
|    +379.4% | +4 MiB |   1.5% → 7.0% | 1.05 MiB → 5.05 MiB |         90 → 94 | `whitespace`          | `black/nodes.py:183`          |
|     +42.6% | +3 MiB |  9.7% → 13.9% |   7.04 MiB → 10 MiB |         14 → 17 | `addtoken`            | `blib2to3/pgen2/parse.py:230` |
|     +42.8% | +3 MiB |  9.7% → 13.8% |      7 MiB → 10 MiB |         11 → 14 | `_addtoken`           | `blib2to3/pgen2/parse.py:278` |
|    +262.7% | +3 MiB |   1.6% → 5.7% | 1.14 MiB → 4.14 MiB |       196 → 199 | `update_sibling_maps` | `blib2to3/pytree.py:358`      |
|    +262.7% | +3 MiB |   1.6% → 5.7% | 1.14 MiB → 4.14 MiB |       196 → 199 | `prev_sibling`        | `blib2to3/pytree.py:196`      |
|     +40.0% | +2 MiB |   6.9% → 9.7% |       5 MiB → 7 MiB |           5 → 7 | `__new__`             | `blib2to3/pytree.py:70`       |
|     +40.0% | +2 MiB |   6.9% → 9.7% |       5 MiB → 7 MiB |           5 → 7 | `shift`               | `blib2to3/pgen2/parse.py:361` |
|    +293.2% | +2 MiB |   0.9% → 3.7% |  698 KiB → 2.68 MiB |       900 → 902 | `visit_STRING`        | `black/linegen.py:413`        |
|     +11.0% | +2 MiB | 25.2% → 27.9% | 18.2 MiB → 20.2 MiB | 20,790 → 20,792 | `mark`                | `black/brackets.py:70`        |
|        new | +2 MiB |   0.0% → 2.8% |         0 B → 2 MiB |           0 → 2 | `__contains__`        | `black/mode.py:249`           |
|      +2.7% | +1 MiB | 50.3% → 51.7% | 36.4 MiB → 37.4 MiB | 21,087 → 21,088 | `visit`               | `black/nodes.py:152`          |
|      +2.7% | +1 MiB | 50.3% → 51.7% | 36.4 MiB → 37.4 MiB | 21,085 → 21,086 | `visit_default`       | `black/nodes.py:176`          |
|      +2.7% | +1 MiB | 50.3% → 51.7% | 36.4 MiB → 37.4 MiB | 21,085 → 21,086 | `visit_default`       | `black/linegen.py:134`        |
|      +2.8% | +1 MiB | 49.9% → 51.3% | 36.2 MiB → 37.2 MiB | 20,714 → 20,715 | `visit_stmt`          | `black/linegen.py:199`        |
|     +16.7% | +1 MiB |   8.3% → 9.7% |       6 MiB → 7 MiB |         10 → 11 | `convert`             | `blib2to3/pytree.py:475`      |
| +197100.8% | +1 MiB |  <0.1% → 1.4% |       532 B → 1 MiB |           1 → 2 | `get_string_prefix`   | `black/strings.py:89`         |

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

Functions with the largest decrease in total bytes held at peak memory in the function and all its callees.

|  Change |      Delta |            % |              Size | Allocations | Function                    | Location                             |
| ------: | ---------: | -----------: | ----------------: | ----------: | --------------------------- | ------------------------------------ |
|  -85.7% |     -6 MiB |  9.7% → 1.4% |     7 MiB → 1 MiB |       7 → 1 | `prefix`                    | `blib2to3/pytree.py:318`             |
|  -75.0% |     -3 MiB |  5.5% → 1.4% |     4 MiB → 1 MiB |       4 → 1 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:554`     |
|  -75.0% |     -3 MiB |  5.5% → 1.4% |     4 MiB → 1 MiB |       4 → 1 | `__next__`                  | `blib2to3/pgen2/driver.py:80`        |
| removed |     -3 MiB |  4.1% → 0.0% |       3 MiB → 0 B |       3 → 0 | `__str__`                   | `black/lines.py:490`                 |
|  -22.2% |     -2 MiB | 12.4% → 9.7% |     9 MiB → 7 MiB |       9 → 7 | `generate_comments`         | `black/comments.py:52`               |
|  -28.6% |     -2 MiB |  9.7% → 6.9% |     7 MiB → 5 MiB |       7 → 5 | `normalize_trailing_prefix` | `black/comments.py:127`              |
| removed |     -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `push`                      | `blib2to3/pgen2/parse.py:386`        |
|  -99.7% |     -1 MiB | 1.4% → <0.1% |  1 MiB → 3.03 KiB |       5 → 4 | `__init__`                  | `blib2to3/pytree.py:237`             |
| removed |     -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `line_to_string`            | `black/lines.py:1073`                |
|  -16.7% |     -1 MiB |  8.3% → 6.9% |     6 MiB → 5 MiB |       6 → 5 | `changed`                   | `blib2to3/pytree.py:160`             |
| removed |     -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `__init__`                  | `<string>:2`                         |
| removed |     -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `line`                      | `black/linegen.py:109`               |
| removed |     -1 MiB |  1.4% → 0.0% |       1 MiB → 0 B |       1 → 0 | `visit_INDENT`              | `black/linegen.py:179`               |
|   -0.9% | -1.703 KiB |         0.2% | 185 KiB → 183 KiB |         200 | `<module>`                  | `black/linegen.py:1`                 |
|   -5.3% | -1.703 KiB |        <0.1% | 32 KiB → 30.3 KiB |          32 | `<module>`                  | `black/trans.py:1`                   |
|     ~0% | -1.441 KiB |         7.5% |          5.44 MiB |       1,482 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|     ~0% | -1.214 KiB |         7.5% |          5.46 MiB |       1,506 | `_get_module_details`       | `<frozen runpy>:105`                 |
|     ~0% | -1.214 KiB |         7.5% |          5.46 MiB |       1,499 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167` |
|     ~0% | -1.214 KiB |         7.5% |          5.46 MiB |       1,497 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122` |
|     ~0% | -1.214 KiB |         7.5% |          5.46 MiB |       1,496 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |

##### Ours

|  Change |      Delta |            % |                Size |   Allocations | Function                    | Location                         |
| ------: | ---------: | -----------: | ------------------: | ------------: | --------------------------- | -------------------------------- |
|  -85.7% |     -6 MiB |  9.7% → 1.4% |       7 MiB → 1 MiB |         7 → 1 | `prefix`                    | `blib2to3/pytree.py:318`         |
|  -75.0% |     -3 MiB |  5.5% → 1.4% |       4 MiB → 1 MiB |         4 → 1 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:554` |
|  -75.0% |     -3 MiB |  5.5% → 1.4% |       4 MiB → 1 MiB |         4 → 1 | `__next__`                  | `blib2to3/pgen2/driver.py:80`    |
| removed |     -3 MiB |  4.1% → 0.0% |         3 MiB → 0 B |         3 → 0 | `__str__`                   | `black/lines.py:490`             |
|  -22.2% |     -2 MiB | 12.4% → 9.7% |       9 MiB → 7 MiB |         9 → 7 | `generate_comments`         | `black/comments.py:52`           |
|  -28.6% |     -2 MiB |  9.7% → 6.9% |       7 MiB → 5 MiB |         7 → 5 | `normalize_trailing_prefix` | `black/comments.py:127`          |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |         1 → 0 | `push`                      | `blib2to3/pgen2/parse.py:386`    |
|  -99.7% |     -1 MiB | 1.4% → <0.1% |    1 MiB → 3.03 KiB |         5 → 4 | `__init__`                  | `blib2to3/pytree.py:237`         |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |         1 → 0 | `line_to_string`            | `black/lines.py:1073`            |
|  -16.7% |     -1 MiB |  8.3% → 6.9% |       6 MiB → 5 MiB |         6 → 5 | `changed`                   | `blib2to3/pytree.py:160`         |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |         1 → 0 | `__init__`                  | `<string>:2`                     |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |         1 → 0 | `line`                      | `black/linegen.py:109`           |
| removed |     -1 MiB |  1.4% → 0.0% |         1 MiB → 0 B |         1 → 0 | `visit_INDENT`              | `black/linegen.py:179`           |
|   -0.9% | -1.703 KiB |         0.2% |   185 KiB → 183 KiB |           200 | `<module>`                  | `black/linegen.py:1`             |
|   -5.3% | -1.703 KiB |        <0.1% |   32 KiB → 30.3 KiB |            32 | `<module>`                  | `black/trans.py:1`               |
|     ~0% | -1.011 KiB |         7.5% |            5.41 MiB | 1,448 → 1,449 | `<module>`                  | `black/__init__.py:1`            |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |             5 | `<module>`                  | `black/ranges.py:1`              |
|     ~0% |     -274 B |         1.4% |            1.01 MiB |            15 | `transform_line`            | `black/linegen.py:601`           |
|   -4.8% |     -274 B |        <0.1% | 5.55 KiB → 5.29 KiB |             5 | `right_hand_split`          | `black/linegen.py:809`           |
|  -16.3% |     -274 B |        <0.1% | 1.64 KiB → 1.37 KiB |             2 | `_first_right_hand_split`   | `black/linegen.py:829`           |

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

# Leaked memory profile diff

Leaked 57.1 MiB → 58.1 MiB (+1,023.001 KiB, +1.8%) over 22,698 allocations → 22,699 allocations (2.58 KiB → 2.62 KiB per allocation).

| Category         | Change |          Delta |             % |                Size |     Allocations |
| ---------------- | -----: | -------------: | ------------: | ------------------: | --------------: |
| Ours             |  +2.0% | +1,021.603 KiB | 89.1% → 89.3% | 50.9 MiB → 51.9 MiB | 21,386 → 21,387 |
| Standard library |    ~0% |      +1.23 KiB | 10.5% → 10.3% |            5.97 MiB |           1,082 |
| Third-party      |  +0.1% |         +172 B |          0.4% |             237 KiB |             230 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes never freed directly in the function body, excluding callees.

|    Change |      Delta |             % |                Size |     Allocations | Function                          | Location                                                    |
| --------: | ---------: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------------------------------------- |
|   +262.7% |     +3 MiB |   2.0% → 7.1% | 1.14 MiB → 4.14 MiB |       196 → 199 | `update_sibling_maps`             | `blib2to3/pytree.py:358`                                    |
|       new |     +2 MiB |   0.0% → 3.4% |         0 B → 2 MiB |           0 → 2 | `_addtoken`                       | `blib2to3/pgen2/parse.py:278`                               |
|    +40.0% |     +2 MiB |  8.8% → 12.1% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `blib2to3/pytree.py:70`                                     |
|    +12.3% |     +2 MiB | 28.4% → 31.4% | 16.2 MiB → 18.2 MiB | 20,788 → 20,790 | `mark`                            | `black/brackets.py:70`                                      |
|       new |     +2 MiB |   0.0% → 3.4% |         0 B → 2 MiB |           0 → 2 | `__contains__`                    | `black/mode.py:249`                                         |
|       new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `pop`                             | `blib2to3/pgen2/parse.py:386`                               |
| +93958.4% |     +1 MiB |  <0.1% → 1.7% |    1.09 KiB → 1 MiB |           1 → 2 | `_rhs`                            | `black/linegen.py:650`                                      |
|       new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `whitespace`                      | `black/nodes.py:183`                                        |
|       new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `assert_is_leaf_string`           | `black/strings.py:108`                                      |
|       new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `is_complex_subscript`            | `black/lines.py:430`                                        |
|    +22.0% | +1.484 KiB |         <0.1% | 6.73 KiB → 8.22 KiB |           8 → 9 | `__setattr__`                     | `/usr/lib/python3.11/enum.py:831`                           |
|       ~0% |     +286 B |   4.0% → 3.9% |            2.27 MiB |             352 | `_call_with_frames_removed`       | `<frozen importlib._bootstrap>:233`                         |
|     +0.2% |     +222 B |          0.2% |             112 KiB |             108 | `_code_to_timestamp_pyc`          | `<frozen importlib._bootstrap_external>:740`                |
|     +5.5% |     +172 B |         <0.1% | 3.04 KiB → 3.21 KiB |               2 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |
|     +3.3% |     +104 B |         <0.1% |  3.1 KiB → 3.21 KiB |               4 | `_format_str_once`                | `black/__init__.py:1215`                                    |
|     +1.5% |      +96 B |         <0.1% | 6.24 KiB → 6.33 KiB |               4 | `append`                          | `black/lines.py:52`                                         |
|     +5.5% |      +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `black/cache.py:50`                                         |
|    +10.1% |      +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `black/__init__.py:1042`                                    |

##### Ours

|    Change |  Delta |             % |                Size |     Allocations | Function                          | Location                      |
| --------: | -----: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------- |
|   +262.7% | +3 MiB |   2.0% → 7.1% | 1.14 MiB → 4.14 MiB |       196 → 199 | `update_sibling_maps`             | `blib2to3/pytree.py:358`      |
|       new | +2 MiB |   0.0% → 3.4% |         0 B → 2 MiB |           0 → 2 | `_addtoken`                       | `blib2to3/pgen2/parse.py:278` |
|    +40.0% | +2 MiB |  8.8% → 12.1% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `blib2to3/pytree.py:70`       |
|    +12.3% | +2 MiB | 28.4% → 31.4% | 16.2 MiB → 18.2 MiB | 20,788 → 20,790 | `mark`                            | `black/brackets.py:70`        |
|       new | +2 MiB |   0.0% → 3.4% |         0 B → 2 MiB |           0 → 2 | `__contains__`                    | `black/mode.py:249`           |
|       new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `pop`                             | `blib2to3/pgen2/parse.py:386` |
| +93958.4% | +1 MiB |  <0.1% → 1.7% |    1.09 KiB → 1 MiB |           1 → 2 | `_rhs`                            | `black/linegen.py:650`        |
|       new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `whitespace`                      | `black/nodes.py:183`          |
|       new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `assert_is_leaf_string`           | `black/strings.py:108`        |
|       new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `is_complex_subscript`            | `black/lines.py:430`          |
|     +3.3% | +104 B |         <0.1% |  3.1 KiB → 3.21 KiB |               4 | `_format_str_once`                | `black/__init__.py:1215`      |
|     +1.5% |  +96 B |         <0.1% | 6.24 KiB → 6.33 KiB |               4 | `append`                          | `black/lines.py:52`           |
|     +5.5% |  +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `black/cache.py:50`           |
|    +10.1% |  +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `black/__init__.py:1042`      |

##### Standard library

| Change |      Delta |           % |                Size | Allocations | Function                    | Location                                     |
| -----: | ---------: | ----------: | ------------------: | ----------: | --------------------------- | -------------------------------------------- |
| +22.0% | +1.484 KiB |       <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__`               | `/usr/lib/python3.11/enum.py:831`            |
|    ~0% |     +286 B | 4.0% → 3.9% |            2.27 MiB |         352 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`          |
|  +0.2% |     +222 B |        0.2% |             112 KiB |         108 | `_code_to_timestamp_pyc`    | `<frozen importlib._bootstrap_external>:740` |

#### Improvements

Functions with the largest decrease in bytes never freed directly in the function body, excluding callees.

|  Change |      Delta |            % |                Size | Allocations | Function                  | Location                          |
| ------: | ---------: | -----------: | ------------------: | ----------: | ------------------------- | --------------------------------- |
|  -75.0% |     -3 MiB |  7.0% → 1.7% |       4 MiB → 1 MiB |       4 → 1 | `generate_tokens`         | `blib2to3/pgen2/tokenize.py:554`  |
|  -75.0% |     -3 MiB |  7.0% → 1.7% |       4 MiB → 1 MiB |       5 → 2 | `visit_default`           | `black/linegen.py:134`            |
| removed |     -3 MiB |  5.3% → 0.0% |         3 MiB → 0 B |       3 → 0 | `__str__`                 | `black/lines.py:490`              |
| removed |     -1 MiB |  1.8% → 0.0% |         1 MiB → 0 B |       1 → 0 | `push`                    | `blib2to3/pgen2/parse.py:386`     |
|  -99.7% |     -1 MiB | 1.8% → <0.1% |    1 MiB → 3.03 KiB |       5 → 4 | `__init__`                | `blib2to3/pytree.py:237`          |
|  -99.7% |     -1 MiB | 1.8% → <0.1% |    1 MiB → 3.35 KiB |       5 → 4 | `visit`                   | `black/nodes.py:152`              |
|  -16.7% |     -1 MiB | 10.5% → 8.6% |       6 MiB → 5 MiB |       6 → 5 | `changed`                 | `blib2to3/pytree.py:160`          |
| removed |     -1 MiB |  1.8% → 0.0% |         1 MiB → 0 B |       1 → 0 | `prefix`                  | `blib2to3/pytree.py:318`          |
| removed |     -1 MiB |  1.8% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                | `<string>:2`                      |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                | `black/trans.py:1`                |
|   -3.1% |     -768 B |        <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`                 | `/usr/lib/python3.11/enum.py:488` |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                | `black/ranges.py:1`               |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split` | `black/linegen.py:829`            |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                | `blib2to3/pgen2/tokenize.py:1`    |

##### Ours

|  Change |      Delta |            % |                Size | Allocations | Function                  | Location                         |
| ------: | ---------: | -----------: | ------------------: | ----------: | ------------------------- | -------------------------------- |
|  -75.0% |     -3 MiB |  7.0% → 1.7% |       4 MiB → 1 MiB |       4 → 1 | `generate_tokens`         | `blib2to3/pgen2/tokenize.py:554` |
|  -75.0% |     -3 MiB |  7.0% → 1.7% |       4 MiB → 1 MiB |       5 → 2 | `visit_default`           | `black/linegen.py:134`           |
| removed |     -3 MiB |  5.3% → 0.0% |         3 MiB → 0 B |       3 → 0 | `__str__`                 | `black/lines.py:490`             |
| removed |     -1 MiB |  1.8% → 0.0% |         1 MiB → 0 B |       1 → 0 | `push`                    | `blib2to3/pgen2/parse.py:386`    |
|  -99.7% |     -1 MiB | 1.8% → <0.1% |    1 MiB → 3.03 KiB |       5 → 4 | `__init__`                | `blib2to3/pytree.py:237`         |
|  -99.7% |     -1 MiB | 1.8% → <0.1% |    1 MiB → 3.35 KiB |       5 → 4 | `visit`                   | `black/nodes.py:152`             |
|  -16.7% |     -1 MiB | 10.5% → 8.6% |       6 MiB → 5 MiB |       6 → 5 | `changed`                 | `blib2to3/pytree.py:160`         |
| removed |     -1 MiB |  1.8% → 0.0% |         1 MiB → 0 B |       1 → 0 | `prefix`                  | `blib2to3/pytree.py:318`         |
| removed |     -1 MiB |  1.8% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                | `<string>:2`                     |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                | `black/trans.py:1`               |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                | `black/ranges.py:1`              |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split` | `black/linegen.py:829`           |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                | `blib2to3/pgen2/tokenize.py:1`   |

##### Standard library

| Change |  Delta |     % |                Size | Allocations | Function  | Location                          |
| -----: | -----: | ----: | ------------------: | ----------: | --------- | --------------------------------- |
|  -3.1% | -768 B | <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__` | `/usr/lib/python3.11/enum.py:488` |

### Total size

#### Regressions

Functions with the largest increase in total bytes never freed in the function and all its callees.

##### Ours

|  Change |  Delta |             % |                Size |     Allocations | Function              | Location                      |
| ------: | -----: | ------------: | ------------------: | --------------: | --------------------- | ----------------------------- |
|  +42.5% | +8 MiB | 33.0% → 46.2% | 18.8 MiB → 26.8 MiB | 13,397 → 13,405 | `visit_simple_stmt`   | `black/linegen.py:295`        |
|  +29.6% | +6 MiB | 35.5% → 45.3% | 20.3 MiB → 26.3 MiB | 20,885 → 20,891 | `append`              | `black/lines.py:52`           |
|     new | +5 MiB |   0.0% → 8.6% |         0 B → 5 MiB |           0 → 5 | `prefix`              | `blib2to3/pytree.py:469`      |
|  +23.7% | +4 MiB | 29.6% → 36.0% | 16.9 MiB → 20.9 MiB | 10,808 → 10,812 | `visit_power`         | `black/linegen.py:341`        |
| +379.4% | +4 MiB |   1.8% → 8.7% | 1.05 MiB → 5.05 MiB |         90 → 94 | `whitespace`          | `black/nodes.py:183`          |
|  +42.6% | +3 MiB | 12.3% → 17.3% |   7.04 MiB → 10 MiB |         14 → 17 | `addtoken`            | `blib2to3/pgen2/parse.py:230` |
|  +42.8% | +3 MiB | 12.3% → 17.2% |      7 MiB → 10 MiB |         11 → 14 | `_addtoken`           | `blib2to3/pgen2/parse.py:278` |
| +262.7% | +3 MiB |   2.0% → 7.1% | 1.14 MiB → 4.14 MiB |       196 → 199 | `update_sibling_maps` | `blib2to3/pytree.py:358`      |
| +262.7% | +3 MiB |   2.0% → 7.1% | 1.14 MiB → 4.14 MiB |       196 → 199 | `prev_sibling`        | `blib2to3/pytree.py:196`      |
|   +5.6% | +2 MiB | 62.1% → 64.5% | 35.4 MiB → 37.4 MiB | 21,086 → 21,088 | `visit`               | `black/nodes.py:152`          |
|   +5.6% | +2 MiB | 62.1% → 64.5% | 35.4 MiB → 37.4 MiB | 21,084 → 21,086 | `visit_default`       | `black/nodes.py:176`          |
|   +5.6% | +2 MiB | 62.1% → 64.5% | 35.4 MiB → 37.4 MiB | 21,084 → 21,086 | `visit_default`       | `black/linegen.py:134`        |
|   +5.7% | +2 MiB | 61.6% → 64.0% | 35.2 MiB → 37.2 MiB | 20,713 → 20,715 | `visit_stmt`          | `black/linegen.py:199`        |
|  +40.0% | +2 MiB |  8.8% → 12.1% |       5 MiB → 7 MiB |           5 → 7 | `__new__`             | `blib2to3/pytree.py:70`       |
|  +40.0% | +2 MiB |  8.8% → 12.1% |       5 MiB → 7 MiB |           5 → 7 | `shift`               | `blib2to3/pgen2/parse.py:361` |
| +293.2% | +2 MiB |   1.2% → 4.6% |  698 KiB → 2.68 MiB |       900 → 902 | `visit_STRING`        | `black/linegen.py:413`        |
|  +11.0% | +2 MiB | 31.9% → 34.8% | 18.2 MiB → 20.2 MiB | 20,790 → 20,792 | `mark`                | `black/brackets.py:70`        |
|   +5.9% | +2 MiB | 59.1% → 61.5% | 33.7 MiB → 35.7 MiB | 20,145 → 20,147 | `visit_suite`         | `black/linegen.py:288`        |
|   +5.9% | +2 MiB | 59.2% → 61.7% | 33.8 MiB → 35.8 MiB | 20,271 → 20,273 | `visit_funcdef`       | `black/linegen.py:254`        |
|     new | +2 MiB |   0.0% → 3.4% |         0 B → 2 MiB |           0 → 2 | `__contains__`        | `black/mode.py:249`           |

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

Functions with the largest decrease in total bytes never freed in the function and all its callees.

|  Change |      Delta |             % |              Size | Allocations | Function                    | Location                             |
| ------: | ---------: | ------------: | ----------------: | ----------: | --------------------------- | ------------------------------------ |
|  -85.7% |     -6 MiB |  12.3% → 1.7% |     7 MiB → 1 MiB |       7 → 1 | `prefix`                    | `blib2to3/pytree.py:318`             |
|  -75.0% |     -3 MiB |   7.0% → 1.7% |     4 MiB → 1 MiB |       4 → 1 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:554`     |
|  -75.0% |     -3 MiB |   7.0% → 1.7% |     4 MiB → 1 MiB |       4 → 1 | `__next__`                  | `blib2to3/pgen2/driver.py:80`        |
| removed |     -3 MiB |   5.3% → 0.0% |       3 MiB → 0 B |       3 → 0 | `__str__`                   | `black/lines.py:490`                 |
|  -22.2% |     -2 MiB | 15.8% → 12.1% |     9 MiB → 7 MiB |       9 → 7 | `generate_comments`         | `black/comments.py:52`               |
|  -28.6% |     -2 MiB |  12.3% → 8.6% |     7 MiB → 5 MiB |       7 → 5 | `normalize_trailing_prefix` | `black/comments.py:127`              |
| removed |     -1 MiB |   1.8% → 0.0% |       1 MiB → 0 B |       1 → 0 | `push`                      | `blib2to3/pgen2/parse.py:386`        |
|  -99.7% |     -1 MiB |  1.8% → <0.1% |  1 MiB → 3.03 KiB |       5 → 4 | `__init__`                  | `blib2to3/pytree.py:237`             |
| removed |     -1 MiB |   1.8% → 0.0% |       1 MiB → 0 B |       1 → 0 | `line_to_string`            | `black/lines.py:1073`                |
|  -16.7% |     -1 MiB |  10.5% → 8.6% |     6 MiB → 5 MiB |       6 → 5 | `changed`                   | `blib2to3/pytree.py:160`             |
| removed |     -1 MiB |   1.8% → 0.0% |       1 MiB → 0 B |       1 → 0 | `__init__`                  | `<string>:2`                         |
| removed |     -1 MiB |   1.8% → 0.0% |       1 MiB → 0 B |       1 → 0 | `line`                      | `black/linegen.py:109`               |
| removed |     -1 MiB |   1.8% → 0.0% |       1 MiB → 0 B |       1 → 0 | `visit_INDENT`              | `black/linegen.py:179`               |
|   -0.9% | -1.703 KiB |          0.3% | 185 KiB → 183 KiB |         200 | `<module>`                  | `black/linegen.py:1`                 |
|   -5.3% | -1.703 KiB |          0.1% | 32 KiB → 30.3 KiB |          32 | `<module>`                  | `black/trans.py:1`                   |
|     ~0% | -1.441 KiB |   9.5% → 9.3% |           5.4 MiB |       1,481 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|     ~0% | -1.214 KiB |   9.5% → 9.3% |          5.43 MiB |       1,505 | `_get_module_details`       | `<frozen runpy>:105`                 |
|     ~0% | -1.214 KiB |   9.5% → 9.3% |          5.42 MiB |       1,498 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167` |
|     ~0% | -1.214 KiB |   9.5% → 9.3% |          5.42 MiB |       1,496 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122` |
|     ~0% | -1.214 KiB |   9.5% → 9.3% |          5.42 MiB |       1,495 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |

##### Ours

|  Change |      Delta |             % |                Size |   Allocations | Function                    | Location                         |
| ------: | ---------: | ------------: | ------------------: | ------------: | --------------------------- | -------------------------------- |
|  -85.7% |     -6 MiB |  12.3% → 1.7% |       7 MiB → 1 MiB |         7 → 1 | `prefix`                    | `blib2to3/pytree.py:318`         |
|  -75.0% |     -3 MiB |   7.0% → 1.7% |       4 MiB → 1 MiB |         4 → 1 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:554` |
|  -75.0% |     -3 MiB |   7.0% → 1.7% |       4 MiB → 1 MiB |         4 → 1 | `__next__`                  | `blib2to3/pgen2/driver.py:80`    |
| removed |     -3 MiB |   5.3% → 0.0% |         3 MiB → 0 B |         3 → 0 | `__str__`                   | `black/lines.py:490`             |
|  -22.2% |     -2 MiB | 15.8% → 12.1% |       9 MiB → 7 MiB |         9 → 7 | `generate_comments`         | `black/comments.py:52`           |
|  -28.6% |     -2 MiB |  12.3% → 8.6% |       7 MiB → 5 MiB |         7 → 5 | `normalize_trailing_prefix` | `black/comments.py:127`          |
| removed |     -1 MiB |   1.8% → 0.0% |         1 MiB → 0 B |         1 → 0 | `push`                      | `blib2to3/pgen2/parse.py:386`    |
|  -99.7% |     -1 MiB |  1.8% → <0.1% |    1 MiB → 3.03 KiB |         5 → 4 | `__init__`                  | `blib2to3/pytree.py:237`         |
| removed |     -1 MiB |   1.8% → 0.0% |         1 MiB → 0 B |         1 → 0 | `line_to_string`            | `black/lines.py:1073`            |
|  -16.7% |     -1 MiB |  10.5% → 8.6% |       6 MiB → 5 MiB |         6 → 5 | `changed`                   | `blib2to3/pytree.py:160`         |
| removed |     -1 MiB |   1.8% → 0.0% |         1 MiB → 0 B |         1 → 0 | `__init__`                  | `<string>:2`                     |
| removed |     -1 MiB |   1.8% → 0.0% |         1 MiB → 0 B |         1 → 0 | `line`                      | `black/linegen.py:109`           |
| removed |     -1 MiB |   1.8% → 0.0% |         1 MiB → 0 B |         1 → 0 | `visit_INDENT`              | `black/linegen.py:179`           |
|   -0.9% | -1.703 KiB |          0.3% |   185 KiB → 183 KiB |           200 | `<module>`                  | `black/linegen.py:1`             |
|   -5.3% | -1.703 KiB |          0.1% |   32 KiB → 30.3 KiB |            32 | `<module>`                  | `black/trans.py:1`               |
|     ~0% | -1.011 KiB |   9.4% → 9.2% |            5.37 MiB | 1,447 → 1,448 | `<module>`                  | `black/__init__.py:1`            |
|  -15.1% |     -752 B |         <0.1% | 4.86 KiB → 4.13 KiB |             5 | `<module>`                  | `black/ranges.py:1`              |
|     ~0% |     -274 B |          1.9% |            1.08 MiB |            16 | `transform_line`            | `black/linegen.py:601`           |
|   -4.8% |     -274 B |         <0.1% | 5.55 KiB → 5.29 KiB |             5 | `right_hand_split`          | `black/linegen.py:809`           |
|  -16.3% |     -274 B |         <0.1% | 1.64 KiB → 1.37 KiB |             2 | `_first_right_hand_split`   | `black/linegen.py:829`           |

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

# Peak memory profile diff

Held 78.6 MiB (-1.702 KiB, ~0%) over 22,697 allocations → 22,696 allocations (3.55 KiB per allocation).

| Category         | Change |          Delta |             % |                Size |     Allocations |
| ---------------- | -----: | -------------: | ------------: | ------------------: | --------------: |
| Ours             |  +1.6% | +1,021.603 KiB | 81.6% → 82.9% | 64.2 MiB → 65.2 MiB | 21,439 → 21,440 |
| Standard library |  -7.0% | -1,023.473 KiB | 18.1% → 16.8% | 14.2 MiB → 13.2 MiB |   1,026 → 1,024 |
| Third-party      |  +0.1% |         +172 B |          0.3% |             238 KiB |             232 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes held at peak memory directly in the function body, excluding callees.

|    Change |      Delta |             % |                Size |     Allocations | Function                          | Location                                                    |
| --------: | ---------: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------------------------------------- |
| +32820.8% |     +2 MiB |  <0.1% → 2.6% | 6.24 KiB → 2.01 MiB |           4 → 6 | `append`                          | `black/lines.py:63 → 52`                                    |
|    +66.7% |     +2 MiB |   3.8% → 6.4% |       3 MiB → 5 MiB |           4 → 6 | `visit_default`                   | `black/linegen.py:134`                                      |
|    +63.7% |     +2 MiB |   4.0% → 6.5% | 3.14 MiB → 5.14 MiB |       198 → 200 | `update_sibling_maps`             | `blib2to3/pytree.py:369 → 358`                              |
|       new |     +2 MiB |   0.0% → 2.5% |         0 B → 2 MiB |           0 → 2 | `generate_tokens`                 | `blib2to3/pgen2/tokenize.py:554`                            |
| +18255.2% |     +1 MiB |  <0.1% → 1.3% | 5.61 KiB → 1.01 MiB |           3 → 4 | `_parse`                          | `/usr/lib/python3.11/re/_parser.py:507`                     |
|       new |     +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `_addtoken`                       | `blib2to3/pgen2/parse.py:290 → 278`                         |
|     +6.2% |     +1 MiB | 20.6% → 21.9% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                            | `black/brackets.py:70`                                      |
|   +100.0% |     +1 MiB |   1.3% → 2.5% |       1 MiB → 2 MiB |           1 → 2 | `__init__`                        | `<string>:2`                                                |
|       new |     +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `push`                            | `blib2to3/pgen2/parse.py:374`                               |
|       new |     +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `__str__`                         | `blib2to3/pytree.py:429`                                    |
|    +22.0% | +1.484 KiB |         <0.1% | 6.73 KiB → 8.22 KiB |           8 → 9 | `__setattr__`                     | `/usr/lib/python3.11/enum.py:831`                           |
|     +4.4% |     +172 B |         <0.1% | 3.79 KiB → 3.96 KiB |               3 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |
|       ~0% |     +104 B |          0.3% |             225 KiB |               5 | `_format_str_once`                | `black/__init__.py:1236 → 1215`                             |
|     +5.5% |      +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `black/cache.py:50`                                         |
|    +10.1% |      +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `black/__init__.py:1037 → 1042`                             |

##### Ours

|    Change |  Delta |             % |                Size |     Allocations | Function                          | Location                            |
| --------: | -----: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------------- |
| +32820.8% | +2 MiB |  <0.1% → 2.6% | 6.24 KiB → 2.01 MiB |           4 → 6 | `append`                          | `black/lines.py:63 → 52`            |
|    +66.7% | +2 MiB |   3.8% → 6.4% |       3 MiB → 5 MiB |           4 → 6 | `visit_default`                   | `black/linegen.py:134`              |
|    +63.7% | +2 MiB |   4.0% → 6.5% | 3.14 MiB → 5.14 MiB |       198 → 200 | `update_sibling_maps`             | `blib2to3/pytree.py:369 → 358`      |
|       new | +2 MiB |   0.0% → 2.5% |         0 B → 2 MiB |           0 → 2 | `generate_tokens`                 | `blib2to3/pgen2/tokenize.py:554`    |
|       new | +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `_addtoken`                       | `blib2to3/pgen2/parse.py:290 → 278` |
|     +6.2% | +1 MiB | 20.6% → 21.9% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                            | `black/brackets.py:70`              |
|   +100.0% | +1 MiB |   1.3% → 2.5% |       1 MiB → 2 MiB |           1 → 2 | `__init__`                        | `<string>:2`                        |
|       new | +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `push`                            | `blib2to3/pgen2/parse.py:374`       |
|       new | +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `__str__`                         | `blib2to3/pytree.py:429`            |
|       ~0% | +104 B |          0.3% |             225 KiB |               5 | `_format_str_once`                | `black/__init__.py:1236 → 1215`     |
|     +5.5% |  +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `black/cache.py:50`                 |
|    +10.1% |  +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `black/__init__.py:1037 → 1042`     |

##### Standard library

|    Change |      Delta |            % |                Size | Allocations | Function      | Location                                |
| --------: | ---------: | -----------: | ------------------: | ----------: | ------------- | --------------------------------------- |
| +18255.2% |     +1 MiB | <0.1% → 1.3% | 5.61 KiB → 1.01 MiB |       3 → 4 | `_parse`      | `/usr/lib/python3.11/re/_parser.py:507` |
|    +22.0% | +1.484 KiB |        <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__` | `/usr/lib/python3.11/enum.py:831`       |

#### Improvements

Functions with the largest decrease in bytes held at peak memory directly in the function body, excluding callees.

|  Change |      Delta |            % |                Size | Allocations | Function                  | Location                                     |
| ------: | ---------: | -----------: | ------------------: | ----------: | ------------------------- | -------------------------------------------- |
|  -50.0% |     -3 MiB |  7.6% → 3.8% |       6 MiB → 3 MiB |       6 → 3 | `changed`                 | `blib2to3/pytree.py:171 → 160`               |
|  -28.6% |     -2 MiB |  8.9% → 6.4% |       7 MiB → 5 MiB |       7 → 5 | `__new__`                 | `blib2to3/pytree.py:81 → 70`                 |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__getitem__`             | `/usr/lib/python3.11/re/_parser.py:162`      |
|  -50.0% |     -1 MiB |  2.5% → 1.3% |       2 MiB → 1 MiB |       2 → 1 | `pop`                     | `blib2to3/pgen2/parse.py:398 → 386`          |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                | `blib2to3/pytree.py:400`                     |
|  -99.7% |     -1 MiB | 1.3% → <0.1% |    1 MiB → 3.35 KiB |       5 → 4 | `visit`                   | `black/nodes.py:163 → 152`                   |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `visit_default`           | `black/nodes.py:187 → 176`                   |
|  -49.9% |     -1 MiB |  2.5% → 1.3% |       2 MiB → 1 MiB |       5 → 4 | `transform_line`          | `black/linegen.py:601`                       |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `<genexpr>`               | `black/lines.py:329`                         |
|  -50.0% |     -1 MiB |  2.5% → 1.3% |       2 MiB → 1 MiB |       2 → 1 | `__str__`                 | `black/lines.py:490 → 479`                   |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `replace`                 | `/usr/lib/python3.11/dataclasses.py:1443`    |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                | `black/trans.py:1`                           |
|   -3.1% |     -768 B |        <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`                 | `/usr/lib/python3.11/enum.py:488`            |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                | `black/ranges.py:1`                          |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split` | `black/linegen.py:829`                       |
|     ~0% |     -213 B |         3.2% |            2.55 MiB |   619 → 618 | `_compile_bytecode`       | `<frozen importlib._bootstrap_external>:727` |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                | `blib2to3/pgen2/tokenize.py:1`               |

##### Ours

|  Change |      Delta |            % |                Size | Allocations | Function                  | Location                            |
| ------: | ---------: | -----------: | ------------------: | ----------: | ------------------------- | ----------------------------------- |
|  -50.0% |     -3 MiB |  7.6% → 3.8% |       6 MiB → 3 MiB |       6 → 3 | `changed`                 | `blib2to3/pytree.py:171 → 160`      |
|  -28.6% |     -2 MiB |  8.9% → 6.4% |       7 MiB → 5 MiB |       7 → 5 | `__new__`                 | `blib2to3/pytree.py:81 → 70`        |
|  -50.0% |     -1 MiB |  2.5% → 1.3% |       2 MiB → 1 MiB |       2 → 1 | `pop`                     | `blib2to3/pgen2/parse.py:398 → 386` |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                | `blib2to3/pytree.py:400`            |
|  -99.7% |     -1 MiB | 1.3% → <0.1% |    1 MiB → 3.35 KiB |       5 → 4 | `visit`                   | `black/nodes.py:163 → 152`          |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `visit_default`           | `black/nodes.py:187 → 176`          |
|  -49.9% |     -1 MiB |  2.5% → 1.3% |       2 MiB → 1 MiB |       5 → 4 | `transform_line`          | `black/linegen.py:601`              |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `<genexpr>`               | `black/lines.py:329`                |
|  -50.0% |     -1 MiB |  2.5% → 1.3% |       2 MiB → 1 MiB |       2 → 1 | `__str__`                 | `black/lines.py:490 → 479`          |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                | `black/trans.py:1`                  |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                | `black/ranges.py:1`                 |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split` | `black/linegen.py:829`              |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                | `blib2to3/pgen2/tokenize.py:1`      |

##### Standard library

|  Change |  Delta |           % |                Size | Allocations | Function            | Location                                     |
| ------: | -----: | ----------: | ------------------: | ----------: | ------------------- | -------------------------------------------- |
| removed | -1 MiB | 1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__getitem__`       | `/usr/lib/python3.11/re/_parser.py:162`      |
| removed | -1 MiB | 1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `replace`           | `/usr/lib/python3.11/dataclasses.py:1443`    |
|   -3.1% | -768 B |       <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`           | `/usr/lib/python3.11/enum.py:488`            |
|     ~0% | -213 B |        3.2% |            2.55 MiB |   619 → 618 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

### Total size

#### Regressions

Functions with the largest increase in total bytes held at peak memory in the function and all its callees.

##### Ours

|    Change |  Delta |             % |                Size |     Allocations | Function              | Location                         |
| --------: | -----: | ------------: | ------------------: | --------------: | --------------------- | -------------------------------- |
|    +12.3% | +4 MiB | 41.3% → 46.4% | 32.4 MiB → 36.4 MiB | 21,083 → 21,087 | `visit`               | `black/nodes.py:163 → 152`       |
|    +12.3% | +4 MiB | 41.3% → 46.4% | 32.4 MiB → 36.4 MiB | 21,081 → 21,085 | `visit_default`       | `black/nodes.py:187 → 176`       |
|    +12.3% | +4 MiB | 41.3% → 46.4% | 32.4 MiB → 36.4 MiB | 21,081 → 21,085 | `visit_default`       | `black/linegen.py:134`           |
|    +19.7% | +4 MiB | 25.8% → 30.9% | 20.3 MiB → 24.3 MiB | 20,885 → 20,889 | `append`              | `black/lines.py:63 → 52`         |
|    +12.4% | +4 MiB | 40.9% → 46.0% | 32.2 MiB → 36.2 MiB | 20,710 → 20,714 | `visit_stmt`          | `black/linegen.py:199`           |
|     +9.5% | +3 MiB | 40.4% → 44.2% | 31.7 MiB → 34.7 MiB | 20,143 → 20,146 | `visit_suite`         | `black/linegen.py:288`           |
|     +9.4% | +3 MiB | 40.5% → 44.3% | 31.8 MiB → 34.8 MiB | 20,269 → 20,272 | `visit_funcdef`       | `black/linegen.py:254`           |
| +24771.5% | +2 MiB |  <0.1% → 2.6% | 8.27 KiB → 2.01 MiB |           1 → 3 | `__next__`            | `blib2to3/pgen2/driver.py:80`    |
|   +293.2% | +2 MiB |   0.9% → 3.4% |  698 KiB → 2.68 MiB |       900 → 902 | `visit_STRING`        | `black/linegen.py:413`           |
|    +63.7% | +2 MiB |   4.0% → 6.5% | 3.14 MiB → 5.14 MiB |       198 → 200 | `update_sibling_maps` | `blib2to3/pytree.py:369 → 358`   |
|    +63.7% | +2 MiB |   4.0% → 6.5% | 3.14 MiB → 5.14 MiB |       198 → 200 | `prev_sibling`        | `blib2to3/pytree.py:207 → 196`   |
|       new | +2 MiB |   0.0% → 2.5% |         0 B → 2 MiB |           0 → 2 | `generate_tokens`     | `blib2to3/pgen2/tokenize.py:554` |
|       new | +2 MiB |   0.0% → 2.5% |         0 B → 2 MiB |           0 → 2 | `line`                | `black/linegen.py:109`           |
|       new | +2 MiB |   0.0% → 2.5% |         0 B → 2 MiB |           0 → 2 | `visit_INDENT`        | `black/linegen.py:179`           |
|     +5.0% | +1 MiB | 25.2% → 26.5% | 19.8 MiB → 20.8 MiB | 13,398 → 13,399 | `visit_simple_stmt`   | `black/linegen.py:295`           |
|  +1132.6% | +1 MiB |   0.1% → 1.4% | 90.4 KiB → 1.09 MiB |       107 → 108 | `is_docstring`        | `black/nodes.py:558 → 553`       |
|     +6.2% | +1 MiB | 20.6% → 21.9% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                | `black/brackets.py:70`           |
|    +32.7% | +1 MiB |   3.9% → 5.2% | 3.05 MiB → 4.05 MiB |         92 → 93 | `whitespace`          | `black/nodes.py:194 → 183`       |
|   +100.0% | +1 MiB |   1.3% → 2.5% |       1 MiB → 2 MiB |           1 → 2 | `line_to_string`      | `black/lines.py:1073 → 1062`     |
|   +100.0% | +1 MiB |   1.3% → 2.5% |       1 MiB → 2 MiB |           1 → 2 | `__init__`            | `<string>:2`                     |

##### Standard library

| Change |      Delta |     % |                Size | Allocations | Function           | Location                          |
| -----: | ---------: | ----: | ------------------: | ----------: | ------------------ | --------------------------------- |
| +22.0% | +1.484 KiB | <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__`      | `/usr/lib/python3.11/enum.py:831` |
|  +2.3% |     +752 B | <0.1% | 32.5 KiB → 33.2 KiB |          38 | `__new__`          | `/usr/lib/python3.11/enum.py:488` |
|    ~0% |     +222 B | 94.5% |            74.3 MiB |      21,395 | `_run_code`        | `<frozen runpy>:65`               |
|    ~0% |     +222 B | 94.5% |            74.3 MiB |      21,395 | `_run_module_code` | `<frozen runpy>:91`               |

#### Improvements

Functions with the largest decrease in total bytes held at peak memory in the function and all its callees.

|  Change |  Delta |             % |                Size | Allocations | Function                                | Location                                |
| ------: | -----: | ------------: | ------------------: | ----------: | --------------------------------------- | --------------------------------------- |
|  -57.1% | -4 MiB |   8.9% → 3.8% |       7 MiB → 3 MiB |       7 → 3 | `shift`                                 | `blib2to3/pgen2/parse.py:373 → 361`     |
|  -30.0% | -3 MiB |  12.7% → 8.9% |      10 MiB → 7 MiB |     14 → 11 | `convert`                               | `blib2to3/pytree.py:486 → 475`          |
|  -50.0% | -3 MiB |   7.6% → 3.8% |       6 MiB → 3 MiB |       6 → 3 | `changed`                               | `blib2to3/pytree.py:171 → 160`          |
|  -42.9% | -3 MiB |   8.9% → 5.1% |       7 MiB → 4 MiB |       7 → 4 | `prefix`                                | `blib2to3/pytree.py:480 → 469`          |
|  -39.9% | -2 MiB |   6.4% → 3.8% | 5.01 MiB → 3.01 MiB |     17 → 15 | `transform_line`                        | `black/linegen.py:601`                  |
|  -16.6% | -2 MiB | 15.3% → 12.8% |     12 MiB → 10 MiB |     19 → 17 | `addtoken`                              | `blib2to3/pgen2/parse.py:242 → 230`     |
|  -28.6% | -2 MiB |   8.9% → 6.4% |       7 MiB → 5 MiB |       7 → 5 | `__new__`                               | `blib2to3/pytree.py:81 → 70`            |
|  -16.7% | -2 MiB | 15.3% → 12.7% |     12 MiB → 10 MiB |     16 → 14 | `_addtoken`                             | `blib2to3/pgen2/parse.py:290 → 278`     |
|  -40.0% | -2 MiB |   6.4% → 3.8% |       5 MiB → 3 MiB |       5 → 3 | `generate_comments`                     | `black/comments.py:52`                  |
|  -50.0% | -2 MiB |   5.1% → 2.5% |       4 MiB → 2 MiB |       4 → 2 | `normalize_trailing_prefix`             | `black/comments.py:127`                 |
|  -99.4% | -1 MiB |  1.3% → <0.1% | 1.01 MiB → 6.38 KiB |       7 → 6 | `_rhs`                                  | `black/linegen.py:650`                  |
|  -99.2% | -1 MiB |  1.3% → <0.1% | 1.01 MiB → 8.33 KiB |       9 → 8 | `run_transformer`                       | `black/linegen.py:1755 → 1771`          |
|  -99.5% | -1 MiB |  1.3% → <0.1% | 1.01 MiB → 5.29 KiB |       6 → 5 | `right_hand_split`                      | `black/linegen.py:809`                  |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__getitem__`                           | `/usr/lib/python3.11/re/_parser.py:162` |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                              | `blib2to3/pytree.py:400`                |
|  -50.0% | -1 MiB |   2.5% → 1.3% |       2 MiB → 1 MiB |       3 → 2 | `normalize_invisible_parens`            | `black/linegen.py:1328 → 1344`          |
|  -99.9% | -1 MiB |  1.3% → <0.1% |     1 MiB → 1,000 B |       2 → 1 | `_maybe_split_omitting_optional_parens` | `black/linegen.py:932`                  |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `<genexpr>`                             | `black/lines.py:329`                    |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `contains_unsplittable_type_ignore`     | `black/lines.py:312`                    |
|  -49.1% | -1 MiB |   2.6% → 1.3% | 2.04 MiB → 1.04 MiB |     68 → 67 | `preceding_leaf`                        | `black/nodes.py:441 → 436`              |

##### Ours

|  Change |  Delta |             % |                Size | Allocations | Function                                | Location                            |
| ------: | -----: | ------------: | ------------------: | ----------: | --------------------------------------- | ----------------------------------- |
|  -57.1% | -4 MiB |   8.9% → 3.8% |       7 MiB → 3 MiB |       7 → 3 | `shift`                                 | `blib2to3/pgen2/parse.py:373 → 361` |
|  -30.0% | -3 MiB |  12.7% → 8.9% |      10 MiB → 7 MiB |     14 → 11 | `convert`                               | `blib2to3/pytree.py:486 → 475`      |
|  -50.0% | -3 MiB |   7.6% → 3.8% |       6 MiB → 3 MiB |       6 → 3 | `changed`                               | `blib2to3/pytree.py:171 → 160`      |
|  -42.9% | -3 MiB |   8.9% → 5.1% |       7 MiB → 4 MiB |       7 → 4 | `prefix`                                | `blib2to3/pytree.py:480 → 469`      |
|  -39.9% | -2 MiB |   6.4% → 3.8% | 5.01 MiB → 3.01 MiB |     17 → 15 | `transform_line`                        | `black/linegen.py:601`              |
|  -16.6% | -2 MiB | 15.3% → 12.8% |     12 MiB → 10 MiB |     19 → 17 | `addtoken`                              | `blib2to3/pgen2/parse.py:242 → 230` |
|  -28.6% | -2 MiB |   8.9% → 6.4% |       7 MiB → 5 MiB |       7 → 5 | `__new__`                               | `blib2to3/pytree.py:81 → 70`        |
|  -16.7% | -2 MiB | 15.3% → 12.7% |     12 MiB → 10 MiB |     16 → 14 | `_addtoken`                             | `blib2to3/pgen2/parse.py:290 → 278` |
|  -40.0% | -2 MiB |   6.4% → 3.8% |       5 MiB → 3 MiB |       5 → 3 | `generate_comments`                     | `black/comments.py:52`              |
|  -50.0% | -2 MiB |   5.1% → 2.5% |       4 MiB → 2 MiB |       4 → 2 | `normalize_trailing_prefix`             | `black/comments.py:127`             |
|  -99.4% | -1 MiB |  1.3% → <0.1% | 1.01 MiB → 6.38 KiB |       7 → 6 | `_rhs`                                  | `black/linegen.py:650`              |
|  -99.2% | -1 MiB |  1.3% → <0.1% | 1.01 MiB → 8.33 KiB |       9 → 8 | `run_transformer`                       | `black/linegen.py:1755 → 1771`      |
|  -99.5% | -1 MiB |  1.3% → <0.1% | 1.01 MiB → 5.29 KiB |       6 → 5 | `right_hand_split`                      | `black/linegen.py:809`              |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                              | `blib2to3/pytree.py:400`            |
|  -50.0% | -1 MiB |   2.5% → 1.3% |       2 MiB → 1 MiB |       3 → 2 | `normalize_invisible_parens`            | `black/linegen.py:1328 → 1344`      |
|  -99.9% | -1 MiB |  1.3% → <0.1% |     1 MiB → 1,000 B |       2 → 1 | `_maybe_split_omitting_optional_parens` | `black/linegen.py:932`              |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `<genexpr>`                             | `black/lines.py:329`                |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `contains_unsplittable_type_ignore`     | `black/lines.py:312`                |
|  -49.1% | -1 MiB |   2.6% → 1.3% | 2.04 MiB → 1.04 MiB |     68 → 67 | `preceding_leaf`                        | `black/nodes.py:441 → 436`          |
|  -50.0% | -1 MiB |   2.5% → 1.3% |       2 MiB → 1 MiB |       2 → 1 | `prefix`                                | `blib2to3/pytree.py:329 → 318`      |

##### Standard library

|  Change |      Delta |           % |        Size |     Allocations | Function                    | Location                                      |
| ------: | ---------: | ----------: | ----------: | --------------: | --------------------------- | --------------------------------------------- |
| removed |     -1 MiB | 1.3% → 0.0% | 1 MiB → 0 B |           1 → 0 | `__getitem__`               | `/usr/lib/python3.11/re/_parser.py:162`       |
| removed |     -1 MiB | 1.3% → 0.0% | 1 MiB → 0 B |           1 → 0 | `replace`                   | `/usr/lib/python3.11/dataclasses.py:1443`     |
|     ~0% | -1.918 KiB |        5.5% |    4.31 MiB |   1,300 → 1,299 | `_get_module_details`       | `<frozen runpy>:105`                          |
|     ~0% | -1.918 KiB |        5.5% |     4.3 MiB |   1,293 → 1,292 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|     ~0% | -1.918 KiB |        5.5% |     4.3 MiB |   1,291 → 1,290 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|     ~0% | -1.918 KiB |        5.5% |     4.3 MiB |   1,290 → 1,289 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|     ~0% | -1.918 KiB |        5.5% |     4.3 MiB |   1,288 → 1,287 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|     ~0% | -1.702 KiB |      100.0% |    78.6 MiB | 22,696 → 22,695 | `run_module`                | `<frozen runpy>:201`                          |
|     ~0% |  -1.46 KiB |        5.4% |    4.27 MiB |           1,258 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|     ~0% |     -213 B |        3.2% |    2.55 MiB |       619 → 618 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|     ~0% |     -213 B |        3.2% |    2.55 MiB |       619 → 618 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|     ~0% |       -8 B |        1.7% |    1.31 MiB |             319 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |

# Leaked memory profile diff

Leaked 59.9 MiB (-1.702 KiB, ~0%) over 22,502 allocations → 22,501 allocations (2.73 KiB per allocation).

| Category         | Change |          Delta |             % |                Size |     Allocations |
| ---------------- | -----: | -------------: | ------------: | ------------------: | --------------: |
| Ours             |  +1.9% | +1,021.603 KiB | 86.5% → 88.2% | 51.8 MiB → 52.8 MiB | 21,382 → 21,383 |
| Standard library | -12.8% | -1,023.473 KiB | 13.1% → 11.4% | 7.83 MiB → 6.83 MiB |       890 → 888 |
| Third-party      |  +0.1% |         +172 B |          0.4% |             237 KiB |             230 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes never freed directly in the function body, excluding callees.

|    Change |      Delta |             % |                Size |     Allocations | Function                          | Location                                                    |
| --------: | ---------: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------------------------------------- |
| +32820.8% |     +2 MiB |  <0.1% → 3.3% | 6.24 KiB → 2.01 MiB |           4 → 6 | `append`                          | `black/lines.py:63 → 52`                                    |
|    +63.7% |     +2 MiB |   5.2% → 8.6% | 3.14 MiB → 5.14 MiB |       198 → 200 | `update_sibling_maps`             | `blib2to3/pytree.py:369 → 358`                              |
|       new |     +2 MiB |   0.0% → 3.3% |         0 B → 2 MiB |           0 → 2 | `generate_tokens`                 | `blib2to3/pgen2/tokenize.py:554`                            |
| +18255.2% |     +1 MiB |  <0.1% → 1.7% | 5.61 KiB → 1.01 MiB |           3 → 4 | `_parse`                          | `/usr/lib/python3.11/re/_parser.py:507`                     |
|       new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `_addtoken`                       | `blib2to3/pgen2/parse.py:290 → 278`                         |
|    +33.3% |     +1 MiB |   5.0% → 6.7% |       3 MiB → 4 MiB |           4 → 5 | `visit_default`                   | `black/linegen.py:134`                                      |
|     +6.2% |     +1 MiB | 27.1% → 28.8% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                            | `black/brackets.py:70`                                      |
|   +100.0% |     +1 MiB |   1.7% → 3.3% |       1 MiB → 2 MiB |           1 → 2 | `__init__`                        | `<string>:2`                                                |
|   +100.0% |     +1 MiB |   1.7% → 3.3% |       1 MiB → 2 MiB |           1 → 2 | `_stringify_ast`                  | `black/parsing.py:174 → 182`                                |
|       new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `push`                            | `blib2to3/pgen2/parse.py:374`                               |
|       new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `__str__`                         | `blib2to3/pytree.py:429`                                    |
|    +22.0% | +1.484 KiB |         <0.1% | 6.73 KiB → 8.22 KiB |           8 → 9 | `__setattr__`                     | `/usr/lib/python3.11/enum.py:831`                           |
|     +5.5% |     +172 B |         <0.1% | 3.04 KiB → 3.21 KiB |               2 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |
|     +3.3% |     +104 B |         <0.1% |  3.1 KiB → 3.21 KiB |               4 | `_format_str_once`                | `black/__init__.py:1236 → 1215`                             |
|     +5.5% |      +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `black/cache.py:50`                                         |
|    +10.1% |      +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `black/__init__.py:1037 → 1042`                             |

##### Ours

|    Change |  Delta |             % |                Size |     Allocations | Function                          | Location                            |
| --------: | -----: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------------- |
| +32820.8% | +2 MiB |  <0.1% → 3.3% | 6.24 KiB → 2.01 MiB |           4 → 6 | `append`                          | `black/lines.py:63 → 52`            |
|    +63.7% | +2 MiB |   5.2% → 8.6% | 3.14 MiB → 5.14 MiB |       198 → 200 | `update_sibling_maps`             | `blib2to3/pytree.py:369 → 358`      |
|       new | +2 MiB |   0.0% → 3.3% |         0 B → 2 MiB |           0 → 2 | `generate_tokens`                 | `blib2to3/pgen2/tokenize.py:554`    |
|       new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `_addtoken`                       | `blib2to3/pgen2/parse.py:290 → 278` |
|    +33.3% | +1 MiB |   5.0% → 6.7% |       3 MiB → 4 MiB |           4 → 5 | `visit_default`                   | `black/linegen.py:134`              |
|     +6.2% | +1 MiB | 27.1% → 28.8% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                            | `black/brackets.py:70`              |
|   +100.0% | +1 MiB |   1.7% → 3.3% |       1 MiB → 2 MiB |           1 → 2 | `__init__`                        | `<string>:2`                        |
|   +100.0% | +1 MiB |   1.7% → 3.3% |       1 MiB → 2 MiB |           1 → 2 | `_stringify_ast`                  | `black/parsing.py:174 → 182`        |
|       new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `push`                            | `blib2to3/pgen2/parse.py:374`       |
|       new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `__str__`                         | `blib2to3/pytree.py:429`            |
|     +3.3% | +104 B |         <0.1% |  3.1 KiB → 3.21 KiB |               4 | `_format_str_once`                | `black/__init__.py:1236 → 1215`     |
|     +5.5% |  +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `black/cache.py:50`                 |
|    +10.1% |  +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `black/__init__.py:1037 → 1042`     |

##### Standard library

|    Change |      Delta |            % |                Size | Allocations | Function      | Location                                |
| --------: | ---------: | -----------: | ------------------: | ----------: | ------------- | --------------------------------------- |
| +18255.2% |     +1 MiB | <0.1% → 1.7% | 5.61 KiB → 1.01 MiB |       3 → 4 | `_parse`      | `/usr/lib/python3.11/re/_parser.py:507` |
|    +22.0% | +1.484 KiB |        <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__` | `/usr/lib/python3.11/enum.py:831`       |

#### Improvements

Functions with the largest decrease in bytes never freed directly in the function body, excluding callees.

|  Change |      Delta |            % |                Size | Allocations | Function                  | Location                                     |
| ------: | ---------: | -----------: | ------------------: | ----------: | ------------------------- | -------------------------------------------- |
|  -50.0% |     -3 MiB | 10.0% → 5.0% |       6 MiB → 3 MiB |       6 → 3 | `changed`                 | `blib2to3/pytree.py:171 → 160`               |
|  -28.6% |     -2 MiB | 11.7% → 8.3% |       7 MiB → 5 MiB |       7 → 5 | `__new__`                 | `blib2to3/pytree.py:81 → 70`                 |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__getitem__`             | `/usr/lib/python3.11/re/_parser.py:162`      |
|  -50.0% |     -1 MiB |  3.3% → 1.7% |       2 MiB → 1 MiB |       2 → 1 | `pop`                     | `blib2to3/pgen2/parse.py:398 → 386`          |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                | `blib2to3/pytree.py:400`                     |
|  -99.7% |     -1 MiB | 1.7% → <0.1% |    1 MiB → 3.35 KiB |       5 → 4 | `visit`                   | `black/nodes.py:163 → 152`                   |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `visit_default`           | `black/nodes.py:187 → 176`                   |
|  -49.0% |     -1 MiB |  3.4% → 1.7% | 2.04 MiB → 1.04 MiB |       8 → 7 | `transform_line`          | `black/linegen.py:601`                       |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `<genexpr>`               | `black/lines.py:329`                         |
|  -50.0% |     -1 MiB |  3.3% → 1.7% |       2 MiB → 1 MiB |       2 → 1 | `__str__`                 | `black/lines.py:490 → 479`                   |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `replace`                 | `/usr/lib/python3.11/dataclasses.py:1443`    |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                | `black/trans.py:1`                           |
|   -3.1% |     -768 B |        <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`                 | `/usr/lib/python3.11/enum.py:488`            |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                | `black/ranges.py:1`                          |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split` | `black/linegen.py:829`                       |
|     ~0% |     -213 B |         4.3% |            2.55 MiB |   619 → 618 | `_compile_bytecode`       | `<frozen importlib._bootstrap_external>:727` |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                | `blib2to3/pgen2/tokenize.py:1`               |

##### Ours

|  Change |      Delta |            % |                Size | Allocations | Function                  | Location                            |
| ------: | ---------: | -----------: | ------------------: | ----------: | ------------------------- | ----------------------------------- |
|  -50.0% |     -3 MiB | 10.0% → 5.0% |       6 MiB → 3 MiB |       6 → 3 | `changed`                 | `blib2to3/pytree.py:171 → 160`      |
|  -28.6% |     -2 MiB | 11.7% → 8.3% |       7 MiB → 5 MiB |       7 → 5 | `__new__`                 | `blib2to3/pytree.py:81 → 70`        |
|  -50.0% |     -1 MiB |  3.3% → 1.7% |       2 MiB → 1 MiB |       2 → 1 | `pop`                     | `blib2to3/pgen2/parse.py:398 → 386` |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                | `blib2to3/pytree.py:400`            |
|  -99.7% |     -1 MiB | 1.7% → <0.1% |    1 MiB → 3.35 KiB |       5 → 4 | `visit`                   | `black/nodes.py:163 → 152`          |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `visit_default`           | `black/nodes.py:187 → 176`          |
|  -49.0% |     -1 MiB |  3.4% → 1.7% | 2.04 MiB → 1.04 MiB |       8 → 7 | `transform_line`          | `black/linegen.py:601`              |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `<genexpr>`               | `black/lines.py:329`                |
|  -50.0% |     -1 MiB |  3.3% → 1.7% |       2 MiB → 1 MiB |       2 → 1 | `__str__`                 | `black/lines.py:490 → 479`          |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                | `black/trans.py:1`                  |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                | `black/ranges.py:1`                 |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split` | `black/linegen.py:829`              |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                | `blib2to3/pgen2/tokenize.py:1`      |

##### Standard library

|  Change |  Delta |           % |                Size | Allocations | Function            | Location                                     |
| ------: | -----: | ----------: | ------------------: | ----------: | ------------------- | -------------------------------------------- |
| removed | -1 MiB | 1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__getitem__`       | `/usr/lib/python3.11/re/_parser.py:162`      |
| removed | -1 MiB | 1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `replace`           | `/usr/lib/python3.11/dataclasses.py:1443`    |
|   -3.1% | -768 B |       <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`           | `/usr/lib/python3.11/enum.py:488`            |
|     ~0% | -213 B |        4.3% |            2.55 MiB |   619 → 618 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

### Total size

#### Regressions

Functions with the largest increase in total bytes never freed in the function and all its callees.

##### Ours

|    Change |  Delta |             % |                Size |     Allocations | Function                          | Location                         |
| --------: | -----: | ------------: | ------------------: | --------------: | --------------------------------- | -------------------------------- |
|    +19.7% | +4 MiB | 33.9% → 40.5% | 20.3 MiB → 24.3 MiB | 20,885 → 20,889 | `append`                          | `black/lines.py:63 → 52`         |
|     +9.2% | +3 MiB | 54.2% → 59.2% | 32.4 MiB → 35.4 MiB | 21,083 → 21,086 | `visit`                           | `black/nodes.py:163 → 152`       |
|     +9.2% | +3 MiB | 54.2% → 59.2% | 32.4 MiB → 35.4 MiB | 21,081 → 21,084 | `visit_default`                   | `black/nodes.py:187 → 176`       |
|     +9.2% | +3 MiB | 54.2% → 59.2% | 32.4 MiB → 35.4 MiB | 21,081 → 21,084 | `visit_default`                   | `black/linegen.py:134`           |
|     +9.3% | +3 MiB | 53.7% → 58.7% | 32.2 MiB → 35.2 MiB | 20,710 → 20,713 | `visit_stmt`                      | `black/linegen.py:199`           |
|     +9.5% | +3 MiB | 53.0% → 58.0% | 31.7 MiB → 34.7 MiB | 20,143 → 20,146 | `visit_suite`                     | `black/linegen.py:288`           |
|     +9.4% | +3 MiB | 53.1% → 58.1% | 31.8 MiB → 34.8 MiB | 20,269 → 20,272 | `visit_funcdef`                   | `black/linegen.py:254`           |
| +24771.5% | +2 MiB |  <0.1% → 3.4% | 8.27 KiB → 2.01 MiB |           1 → 3 | `__next__`                        | `blib2to3/pgen2/driver.py:80`    |
|   +293.2% | +2 MiB |   1.1% → 4.5% |  698 KiB → 2.68 MiB |       900 → 902 | `visit_STRING`                    | `black/linegen.py:413`           |
|    +63.7% | +2 MiB |   5.2% → 8.6% | 3.14 MiB → 5.14 MiB |       198 → 200 | `update_sibling_maps`             | `blib2to3/pytree.py:369 → 358`   |
|    +63.7% | +2 MiB |   5.2% → 8.6% | 3.14 MiB → 5.14 MiB |       198 → 200 | `prev_sibling`                    | `blib2to3/pytree.py:207 → 196`   |
|       new | +2 MiB |   0.0% → 3.3% |         0 B → 2 MiB |           0 → 2 | `generate_tokens`                 | `blib2to3/pgen2/tokenize.py:554` |
|       new | +2 MiB |   0.0% → 3.3% |         0 B → 2 MiB |           0 → 2 | `line`                            | `black/linegen.py:109`           |
|       new | +2 MiB |   0.0% → 3.3% |         0 B → 2 MiB |           0 → 2 | `visit_INDENT`                    | `black/linegen.py:179`           |
|     +5.1% | +1 MiB | 32.6% → 34.2% | 19.5 MiB → 20.5 MiB | 21,061 → 21,062 | `check_stability_and_equivalence` | `black/__init__.py:1037 → 1042`  |
|  +1132.6% | +1 MiB |   0.1% → 1.8% | 90.4 KiB → 1.09 MiB |       107 → 108 | `is_docstring`                    | `black/nodes.py:558 → 553`       |
|     +6.2% | +1 MiB | 27.1% → 28.8% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                            | `black/brackets.py:70`           |
|    +32.7% | +1 MiB |   5.1% → 6.8% | 3.05 MiB → 4.05 MiB |         92 → 93 | `whitespace`                      | `black/nodes.py:194 → 183`       |
|   +100.0% | +1 MiB |   1.7% → 3.3% |       1 MiB → 2 MiB |           1 → 2 | `line_to_string`                  | `black/lines.py:1073 → 1062`     |
|   +100.0% | +1 MiB |   1.7% → 3.3% |       1 MiB → 2 MiB |           1 → 2 | `__init__`                        | `<string>:2`                     |

##### Standard library

| Change |      Delta |     % |                Size | Allocations | Function           | Location                          |
| -----: | ---------: | ----: | ------------------: | ----------: | ------------------ | --------------------------------- |
| +22.0% | +1.484 KiB | <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__`      | `/usr/lib/python3.11/enum.py:831` |
|  +2.3% |     +752 B |  0.1% | 32.5 KiB → 33.2 KiB |          38 | `__new__`          | `/usr/lib/python3.11/enum.py:488` |
|    ~0% |     +222 B | 92.9% |            55.6 MiB |      21,201 | `_run_code`        | `<frozen runpy>:65`               |
|    ~0% |     +222 B | 92.9% |            55.6 MiB |      21,201 | `_run_module_code` | `<frozen runpy>:91`               |

#### Improvements

Functions with the largest decrease in total bytes never freed in the function and all its callees.

|  Change |  Delta |             % |                Size |     Allocations | Function                                | Location                                |
| ------: | -----: | ------------: | ------------------: | --------------: | --------------------------------------- | --------------------------------------- |
|  -57.1% | -4 MiB |  11.7% → 5.0% |       7 MiB → 3 MiB |           7 → 3 | `shift`                                 | `blib2to3/pgen2/parse.py:373 → 361`     |
|  -30.0% | -3 MiB | 16.7% → 11.7% |      10 MiB → 7 MiB |         14 → 11 | `convert`                               | `blib2to3/pytree.py:486 → 475`          |
|  -50.0% | -3 MiB |  10.0% → 5.0% |       6 MiB → 3 MiB |           6 → 3 | `changed`                               | `blib2to3/pytree.py:171 → 160`          |
|  -42.9% | -3 MiB |  11.7% → 6.7% |       7 MiB → 4 MiB |           7 → 4 | `prefix`                                | `blib2to3/pytree.py:480 → 469`          |
|  -39.6% | -2 MiB |   8.4% → 5.1% | 5.05 MiB → 3.05 MiB |         20 → 18 | `transform_line`                        | `black/linegen.py:601`                  |
|  -16.6% | -2 MiB | 20.1% → 16.8% |     12 MiB → 10 MiB |         19 → 17 | `addtoken`                              | `blib2to3/pgen2/parse.py:242 → 230`     |
|  -28.6% | -2 MiB |  11.7% → 8.3% |       7 MiB → 5 MiB |           7 → 5 | `__new__`                               | `blib2to3/pytree.py:81 → 70`            |
|  -16.7% | -2 MiB | 20.0% → 16.7% |     12 MiB → 10 MiB |         16 → 14 | `_addtoken`                             | `blib2to3/pgen2/parse.py:290 → 278`     |
|  -40.0% | -2 MiB |   8.3% → 5.0% |       5 MiB → 3 MiB |           5 → 3 | `generate_comments`                     | `black/comments.py:52`                  |
|  -50.0% | -2 MiB |   6.7% → 3.3% |       4 MiB → 2 MiB |           4 → 2 | `normalize_trailing_prefix`             | `black/comments.py:127`                 |
|  -99.4% | -1 MiB |  1.7% → <0.1% | 1.01 MiB → 6.38 KiB |           7 → 6 | `_rhs`                                  | `black/linegen.py:650`                  |
|  -99.2% | -1 MiB |  1.7% → <0.1% | 1.01 MiB → 8.33 KiB |           9 → 8 | `run_transformer`                       | `black/linegen.py:1755 → 1771`          |
|  -99.5% | -1 MiB |  1.7% → <0.1% | 1.01 MiB → 5.29 KiB |           6 → 5 | `right_hand_split`                      | `black/linegen.py:809`                  |
|   -2.8% | -1 MiB | 60.2% → 58.6% | 36.1 MiB → 35.1 MiB |         95 → 94 | `format_str`                            | `black/__init__.py:1189 → 1168`         |
|   -1.9% | -1 MiB | 86.1% → 84.4% | 51.6 MiB → 50.6 MiB | 21,148 → 21,147 | `_format_str_once`                      | `black/__init__.py:1236 → 1215`         |
| removed | -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__getitem__`                           | `/usr/lib/python3.11/re/_parser.py:162` |
| removed | -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__init__`                              | `blib2to3/pytree.py:400`                |
|  -50.0% | -1 MiB |   3.3% → 1.7% |       2 MiB → 1 MiB |           3 → 2 | `normalize_invisible_parens`            | `black/linegen.py:1328 → 1344`          |
|  -99.9% | -1 MiB |  1.7% → <0.1% |     1 MiB → 1,000 B |           2 → 1 | `_maybe_split_omitting_optional_parens` | `black/linegen.py:932`                  |
| removed | -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `<genexpr>`                             | `black/lines.py:329`                    |

##### Ours

|  Change |  Delta |             % |                Size |     Allocations | Function                                | Location                            |
| ------: | -----: | ------------: | ------------------: | --------------: | --------------------------------------- | ----------------------------------- |
|  -57.1% | -4 MiB |  11.7% → 5.0% |       7 MiB → 3 MiB |           7 → 3 | `shift`                                 | `blib2to3/pgen2/parse.py:373 → 361` |
|  -30.0% | -3 MiB | 16.7% → 11.7% |      10 MiB → 7 MiB |         14 → 11 | `convert`                               | `blib2to3/pytree.py:486 → 475`      |
|  -50.0% | -3 MiB |  10.0% → 5.0% |       6 MiB → 3 MiB |           6 → 3 | `changed`                               | `blib2to3/pytree.py:171 → 160`      |
|  -42.9% | -3 MiB |  11.7% → 6.7% |       7 MiB → 4 MiB |           7 → 4 | `prefix`                                | `blib2to3/pytree.py:480 → 469`      |
|  -39.6% | -2 MiB |   8.4% → 5.1% | 5.05 MiB → 3.05 MiB |         20 → 18 | `transform_line`                        | `black/linegen.py:601`              |
|  -16.6% | -2 MiB | 20.1% → 16.8% |     12 MiB → 10 MiB |         19 → 17 | `addtoken`                              | `blib2to3/pgen2/parse.py:242 → 230` |
|  -28.6% | -2 MiB |  11.7% → 8.3% |       7 MiB → 5 MiB |           7 → 5 | `__new__`                               | `blib2to3/pytree.py:81 → 70`        |
|  -16.7% | -2 MiB | 20.0% → 16.7% |     12 MiB → 10 MiB |         16 → 14 | `_addtoken`                             | `blib2to3/pgen2/parse.py:290 → 278` |
|  -40.0% | -2 MiB |   8.3% → 5.0% |       5 MiB → 3 MiB |           5 → 3 | `generate_comments`                     | `black/comments.py:52`              |
|  -50.0% | -2 MiB |   6.7% → 3.3% |       4 MiB → 2 MiB |           4 → 2 | `normalize_trailing_prefix`             | `black/comments.py:127`             |
|  -99.4% | -1 MiB |  1.7% → <0.1% | 1.01 MiB → 6.38 KiB |           7 → 6 | `_rhs`                                  | `black/linegen.py:650`              |
|  -99.2% | -1 MiB |  1.7% → <0.1% | 1.01 MiB → 8.33 KiB |           9 → 8 | `run_transformer`                       | `black/linegen.py:1755 → 1771`      |
|  -99.5% | -1 MiB |  1.7% → <0.1% | 1.01 MiB → 5.29 KiB |           6 → 5 | `right_hand_split`                      | `black/linegen.py:809`              |
|   -2.8% | -1 MiB | 60.2% → 58.6% | 36.1 MiB → 35.1 MiB |         95 → 94 | `format_str`                            | `black/__init__.py:1189 → 1168`     |
|   -1.9% | -1 MiB | 86.1% → 84.4% | 51.6 MiB → 50.6 MiB | 21,148 → 21,147 | `_format_str_once`                      | `black/__init__.py:1236 → 1215`     |
| removed | -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__init__`                              | `blib2to3/pytree.py:400`            |
|  -50.0% | -1 MiB |   3.3% → 1.7% |       2 MiB → 1 MiB |           3 → 2 | `normalize_invisible_parens`            | `black/linegen.py:1328 → 1344`      |
|  -99.9% | -1 MiB |  1.7% → <0.1% |     1 MiB → 1,000 B |           2 → 1 | `_maybe_split_omitting_optional_parens` | `black/linegen.py:932`              |
| removed | -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `<genexpr>`                             | `black/lines.py:329`                |
| removed | -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `contains_unsplittable_type_ignore`     | `black/lines.py:312`                |

##### Standard library

|  Change |      Delta |           % |                Size |     Allocations | Function                    | Location                                      |
| ------: | ---------: | ----------: | ------------------: | --------------: | --------------------------- | --------------------------------------------- |
| removed |     -1 MiB | 1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__getitem__`               | `/usr/lib/python3.11/re/_parser.py:162`       |
| removed |     -1 MiB | 1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `replace`                   | `/usr/lib/python3.11/dataclasses.py:1443`     |
|     ~0% | -1.918 KiB |        7.1% |            4.27 MiB |   1,299 → 1,298 | `_get_module_details`       | `<frozen runpy>:105`                          |
|     ~0% | -1.918 KiB |        7.1% |            4.27 MiB |   1,292 → 1,291 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|     ~0% | -1.918 KiB |        7.1% | 4.27 MiB → 4.26 MiB |   1,290 → 1,289 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|     ~0% | -1.918 KiB |        7.1% | 4.27 MiB → 4.26 MiB |   1,289 → 1,288 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|     ~0% | -1.918 KiB |        7.1% |            4.26 MiB |   1,287 → 1,286 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|     ~0% | -1.702 KiB |      100.0% |            59.9 MiB | 22,501 → 22,500 | `run_module`                | `<frozen runpy>:201`                          |
|     ~0% |  -1.46 KiB |        7.1% |            4.23 MiB |           1,257 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|     ~0% |     -213 B |        4.3% |            2.55 MiB |       619 → 618 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|     ~0% |     -213 B |        4.3% |            2.55 MiB |       619 → 618 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|     ~0% |       -8 B |        2.2% |            1.31 MiB |             319 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |

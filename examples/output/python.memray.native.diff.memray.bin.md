# Peak memory profile diff

Held 78.6 MiB (-1.702 KiB, ~0%) over 22,697 → 22,696 allocations (3.55 KiB per allocation).

| Category         | Change |          Delta |             % |                Size |     Allocations |
| ---------------- | -----: | -------------: | ------------: | ------------------: | --------------: |
| Ours             |  +1.6% | +1,021.603 KiB | 81.6% → 82.9% | 64.2 MiB → 65.2 MiB | 21,439 → 21,440 |
| Standard library |  -7.0% | -1,023.473 KiB | 18.1% → 16.8% | 14.2 MiB → 13.2 MiB |   1,026 → 1,024 |
| Third-party      |  +0.1% |         +172 B |          0.3% |             238 KiB |             232 |

Paths starting with `./` or `../` are relative to `/src/black/src/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── 78.6 MiB (100.0%) _run_tracker at /venv/lib/python3.11/site-packages/memray/commands/run.py:40
    └── 78.6 MiB (100.0%) run_module at <frozen runpy>:201
        ├── … 74 MiB (94.2%) format_file_contents at ./black/__init__.py:1054 → 1059
        │   ├── 51.8 MiB (65.9%) format_str at 1189 → 1168
        │   │   └── 51.8 MiB (65.9%) _format_str_once at 1236 → 1215
        │   │       ├── 32.4 MiB → 36.4 MiB (41.3% → 46.4%, self 1.3% → <0.1%) visit at ./black/nodes.py:163 → 152
        │   │       │   ├── … 28.3 MiB (36.0%, self 3.8%, self 3.8% → 6.4% globally) visit_default at ./black/linegen.py:134
        │   │       │   │   ├── 19.3 MiB → 23.3 MiB (24.5% → 29.6%, self <0.1% → 2.6%) append at ./black/lines.py:63 → 52
        │   │       │   │   │   ├── 15.2 MiB → 16.2 MiB (19.4% → 20.6%, self 20.6% → 21.9% globally) mark at ./black/brackets.py:70
        │   │       │   │   │   ├── 3.05 MiB → 4.05 MiB (3.9% → 5.1%) whitespace at ./black/nodes.py:194 → 183
        │   │       │   │   │   │   ├── 1.01 MiB → 3.01 MiB (1.3% → 3.8%) prev_sibling at ./blib2to3/pytree.py:207 → 196
        │   │       │   │   │   │   │   └── 1.01 MiB → 3.01 MiB (1.3% → 3.8%, self 4.0% → 6.5% globally) update_sibling_maps at 369 → 358
        │   │       │   │   │   │   └── 2.04 MiB → 1.04 MiB (2.6% → 1.3%) preceding_leaf at 441 → 436 …
        │   │       │   │   │   └── 1 MiB (1.3%) prefix at ./blib2to3/pytree.py:480 → 469
        │   │       │   │   ├── 5 MiB → 2 MiB (6.4% → 2.5%, self 1.3% → 0.0%, self 1.3% globally) generate_comments at ./black/comments.py:52
        │   │       │   │   │   └── … 4 MiB → 2 MiB (5.1% → 2.5%, self 7.6% → 3.8% globally) changed at ./blib2to3/pytree.py:171 → 160
        │   │       │   │   └── 1 MiB → 0 B (1.3% → 0.0%) visit_default at ./black/nodes.py:187 → 176
        │   │       │   ├── … 698 KiB → 2.68 MiB (0.9% → 3.4%) visit_STRING at ./black/linegen.py:413
        │   │       │   │   ├── 546 KiB → 1.53 MiB (0.7% → 2.0%, self <0.1% → 1.3%) visit_default at 134
        │   │       │   │   │   └── 546 KiB (0.7%) append at ./black/lines.py:63 → 52 …
        │   │       │   │   └── 150 KiB → 1.15 MiB (0.2% → 1.5%) 3 more callees, led by (0.1% → 1.4%) is_docstring at ./black/nodes.py:558 → 553
        │   │       │   └── 2.49 MiB → 5.49 MiB (3.2% → 7.0%) 6 more callees, led by (2.5% → 1.3%) visit_stmt at ./black/linegen.py:199
        │   │       ├── … 12.1 MiB (15.3%) parse_tokens at ./blib2to3/pgen2/driver.py:114
        │   │       │   ├── 12 MiB → 10 MiB (15.3% → 12.8%) addtoken at ./blib2to3/pgen2/parse.py:242 → 230
        │   │       │   │   └── 12 MiB → 10 MiB (15.3% → 12.7%, self 0.0% → 1.3%) _addtoken at 290 → 278
        │   │       │   │       ├── 5 MiB (6.4%, self 2.5% → 1.3%) pop at 398 → 386
        │   │       │   │       │   └── 3 MiB → 4 MiB (3.8% → 5.1%) convert at ./blib2to3/pytree.py:486 → 475 …
        │   │       │   │       ├── 7 MiB → 3 MiB (8.9% → 3.8%) shift at 373 → 361
        │   │       │   │       │   └── 7 MiB → 3 MiB (8.9% → 3.8%, self 1.3% globally) convert at ./blib2to3/pytree.py:486 → 475
        │   │       │   │       │       ├── 6 MiB → 3 MiB (7.6% → 3.8%, self 8.9% → 6.4% globally) __new__ at 81 → 70
        │   │       │   │       │       └── 1 MiB → 0 B (1.3% → 0.0%) __init__ at 400
        │   │       │   │       └── 0 B → 1 MiB (0.0% → 1.3%) push at 374
        │   │       │   └── 8.27 KiB → 2.01 MiB (<0.1% → 2.6%) __next__ at 80
        │   │       │       └── 0 B → 2 MiB (0.0% → 2.5%) generate_tokens at ./blib2to3/pgen2/tokenize.py:554
        │   │       └── 7.04 MiB → 3.04 MiB (9.0% → 3.9%) 7 more callees, led by (6.4% → 3.8%) transform_line at ./black/linegen.py:601
        │   └── 22.3 MiB (28.3%) check_stability_and_equivalence at 1037 → 1042
        │       └── 22.3 MiB (28.3%, self 9.0%) assert_equivalent at 1524 → 1510
        │           └── 15.2 MiB (19.3%) 2 more callees, led by (11.6%) parse_ast at ./black/parsing.py:129 → 137
        └── 4.31 MiB (5.5%) _get_module_details at 105
            └── 4.31 MiB (5.5%) 2 more callees, led by (5.5%) _find_and_load at <frozen importlib._bootstrap>:1167
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes held at peak memory within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|    Change |      Delta |             % |                Size |     Allocations | Function                          | Location                                                    |
| --------: | ---------: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------------------------------------- |
| +32820.8% |     +2 MiB |  <0.1% → 2.6% | 6.24 KiB → 2.01 MiB |           4 → 6 | `append`                          | `./black/lines.py:63 → 52`                                  |
|    +66.7% |     +2 MiB |   3.8% → 6.4% |       3 MiB → 5 MiB |           4 → 6 | `visit_default`                   | `./black/linegen.py:134`                                    |
|    +63.7% |     +2 MiB |   4.0% → 6.5% | 3.14 MiB → 5.14 MiB |       198 → 200 | `update_sibling_maps`             | `./blib2to3/pytree.py:369 → 358`                            |
|       new |     +2 MiB |   0.0% → 2.5% |         0 B → 2 MiB |           0 → 2 | `generate_tokens`                 | `./blib2to3/pgen2/tokenize.py:554`                          |
| +18255.2% |     +1 MiB |  <0.1% → 1.3% | 5.61 KiB → 1.01 MiB |           3 → 4 | `_parse`                          | `/usr/lib/python3.11/re/_parser.py:507`                     |
|       new |     +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `_addtoken`                       | `./blib2to3/pgen2/parse.py:290 → 278`                       |
|     +6.2% |     +1 MiB | 20.6% → 21.9% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                            | `./black/brackets.py:70`                                    |
|   +100.0% |     +1 MiB |   1.3% → 2.5% |       1 MiB → 2 MiB |           1 → 2 | `__init__`                        | `<string>:2`                                                |
|       new |     +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `push`                            | `./blib2to3/pgen2/parse.py:374`                             |
|       new |     +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `__str__`                         | `./blib2to3/pytree.py:429`                                  |
|    +22.0% | +1.484 KiB |         <0.1% | 6.73 KiB → 8.22 KiB |           8 → 9 | `__setattr__`                     | `/usr/lib/python3.11/enum.py:831`                           |
|     +4.4% |     +172 B |         <0.1% | 3.79 KiB → 3.96 KiB |               3 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |
|       ~0% |     +104 B |          0.3% |             225 KiB |               5 | `_format_str_once`                | `./black/__init__.py:1236 → 1215`                           |
|     +5.5% |      +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `./black/cache.py:50`                                       |
|    +10.1% |      +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`                           |

##### Ours

|    Change |  Delta |             % |                Size |     Allocations | Function                          | Location                              |
| --------: | -----: | ------------: | ------------------: | --------------: | --------------------------------- | ------------------------------------- |
| +32820.8% | +2 MiB |  <0.1% → 2.6% | 6.24 KiB → 2.01 MiB |           4 → 6 | `append`                          | `./black/lines.py:63 → 52`            |
|    +66.7% | +2 MiB |   3.8% → 6.4% |       3 MiB → 5 MiB |           4 → 6 | `visit_default`                   | `./black/linegen.py:134`              |
|    +63.7% | +2 MiB |   4.0% → 6.5% | 3.14 MiB → 5.14 MiB |       198 → 200 | `update_sibling_maps`             | `./blib2to3/pytree.py:369 → 358`      |
|       new | +2 MiB |   0.0% → 2.5% |         0 B → 2 MiB |           0 → 2 | `generate_tokens`                 | `./blib2to3/pgen2/tokenize.py:554`    |
|       new | +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `_addtoken`                       | `./blib2to3/pgen2/parse.py:290 → 278` |
|     +6.2% | +1 MiB | 20.6% → 21.9% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                            | `./black/brackets.py:70`              |
|   +100.0% | +1 MiB |   1.3% → 2.5% |       1 MiB → 2 MiB |           1 → 2 | `__init__`                        | `<string>:2`                          |
|       new | +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `push`                            | `./blib2to3/pgen2/parse.py:374`       |
|       new | +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `__str__`                         | `./blib2to3/pytree.py:429`            |
|       ~0% | +104 B |          0.3% |             225 KiB |               5 | `_format_str_once`                | `./black/__init__.py:1236 → 1215`     |
|     +5.5% |  +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `./black/cache.py:50`                 |
|    +10.1% |  +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`     |

##### Standard library

|    Change |      Delta |            % |                Size | Allocations | Function      | Location                                |
| --------: | ---------: | -----------: | ------------------: | ----------: | ------------- | --------------------------------------- |
| +18255.2% |     +1 MiB | <0.1% → 1.3% | 5.61 KiB → 1.01 MiB |       3 → 4 | `_parse`      | `/usr/lib/python3.11/re/_parser.py:507` |
|    +22.0% | +1.484 KiB |        <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__` | `/usr/lib/python3.11/enum.py:831`       |

#### Improvements

Functions with the largest decrease in bytes held at peak memory within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |      Delta |            % |                Size | Allocations | Function                  | Location                                     |
| ------: | ---------: | -----------: | ------------------: | ----------: | ------------------------- | -------------------------------------------- |
|  -50.0% |     -3 MiB |  7.6% → 3.8% |       6 MiB → 3 MiB |       6 → 3 | `changed`                 | `./blib2to3/pytree.py:171 → 160`             |
|  -28.6% |     -2 MiB |  8.9% → 6.4% |       7 MiB → 5 MiB |       7 → 5 | `__new__`                 | `./blib2to3/pytree.py:81 → 70`               |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__getitem__`             | `/usr/lib/python3.11/re/_parser.py:162`      |
|  -50.0% |     -1 MiB |  2.5% → 1.3% |       2 MiB → 1 MiB |       2 → 1 | `pop`                     | `./blib2to3/pgen2/parse.py:398 → 386`        |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                | `./blib2to3/pytree.py:400`                   |
|  -99.7% |     -1 MiB | 1.3% → <0.1% |    1 MiB → 3.35 KiB |       5 → 4 | `visit`                   | `./black/nodes.py:163 → 152`                 |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `visit_default`           | `./black/nodes.py:187 → 176`                 |
|  -49.9% |     -1 MiB |  2.5% → 1.3% |       2 MiB → 1 MiB |       5 → 4 | `transform_line`          | `./black/linegen.py:601`                     |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `<genexpr>`               | `./black/lines.py:329`                       |
|  -50.0% |     -1 MiB |  2.5% → 1.3% |       2 MiB → 1 MiB |       2 → 1 | `__str__`                 | `./black/lines.py:490 → 479`                 |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `replace`                 | `/usr/lib/python3.11/dataclasses.py:1443`    |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                | `./black/trans.py:1`                         |
|   -3.1% |     -768 B |        <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`                 | `/usr/lib/python3.11/enum.py:488`            |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                | `./black/ranges.py:1`                        |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split` | `./black/linegen.py:829`                     |
|     ~0% |     -213 B |         3.2% |            2.55 MiB |   619 → 618 | `_compile_bytecode`       | `<frozen importlib._bootstrap_external>:727` |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                | `./blib2to3/pgen2/tokenize.py:1`             |

##### Ours

|  Change |      Delta |            % |                Size | Allocations | Function                  | Location                              |
| ------: | ---------: | -----------: | ------------------: | ----------: | ------------------------- | ------------------------------------- |
|  -50.0% |     -3 MiB |  7.6% → 3.8% |       6 MiB → 3 MiB |       6 → 3 | `changed`                 | `./blib2to3/pytree.py:171 → 160`      |
|  -28.6% |     -2 MiB |  8.9% → 6.4% |       7 MiB → 5 MiB |       7 → 5 | `__new__`                 | `./blib2to3/pytree.py:81 → 70`        |
|  -50.0% |     -1 MiB |  2.5% → 1.3% |       2 MiB → 1 MiB |       2 → 1 | `pop`                     | `./blib2to3/pgen2/parse.py:398 → 386` |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                | `./blib2to3/pytree.py:400`            |
|  -99.7% |     -1 MiB | 1.3% → <0.1% |    1 MiB → 3.35 KiB |       5 → 4 | `visit`                   | `./black/nodes.py:163 → 152`          |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `visit_default`           | `./black/nodes.py:187 → 176`          |
|  -49.9% |     -1 MiB |  2.5% → 1.3% |       2 MiB → 1 MiB |       5 → 4 | `transform_line`          | `./black/linegen.py:601`              |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `<genexpr>`               | `./black/lines.py:329`                |
|  -50.0% |     -1 MiB |  2.5% → 1.3% |       2 MiB → 1 MiB |       2 → 1 | `__str__`                 | `./black/lines.py:490 → 479`          |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                | `./black/trans.py:1`                  |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                | `./black/ranges.py:1`                 |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split` | `./black/linegen.py:829`              |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                | `./blib2to3/pgen2/tokenize.py:1`      |

##### Standard library

|  Change |  Delta |           % |                Size | Allocations | Function            | Location                                     |
| ------: | -----: | ----------: | ------------------: | ----------: | ------------------- | -------------------------------------------- |
| removed | -1 MiB | 1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__getitem__`       | `/usr/lib/python3.11/re/_parser.py:162`      |
| removed | -1 MiB | 1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `replace`           | `/usr/lib/python3.11/dataclasses.py:1443`    |
|   -3.1% | -768 B |       <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`           | `/usr/lib/python3.11/enum.py:488`            |
|     ~0% | -213 B |        3.2% |            2.55 MiB |   619 → 618 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `append` (`./black/lines.py:52`)

|     Change |  Delta |            % |             Size | Allocations | Location                   |
| ---------: | -----: | -----------: | ---------------: | ----------: | -------------------------- |
| +187916.8% | +1 MiB | 8.7% → 49.9% |    558 B → 1 MiB |       1 → 2 | `./black/lines.py:97 → 86` |
|        new | +1 MiB | 0.0% → 49.8% |      0 B → 1 MiB |       0 → 1 | `./black/lines.py:91`      |
|      +2.3% |  +96 B | 64.1% → 0.2% | 4 KiB → 4.09 KiB |           1 | `./black/lines.py:89 → 78` |

##### `visit_default` (`./black/linegen.py:134`)

|  Change |  Delta |             % |          Size | Allocations | Location                 |
| ------: | -----: | ------------: | ------------: | ----------: | ------------------------ |
| +100.0% | +2 MiB | 66.7% → 80.0% | 2 MiB → 4 MiB |       2 → 4 | `./black/linegen.py:158` |
| removed | -1 MiB |  33.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `./black/linegen.py:138` |
|     new | +1 MiB |  0.0% → 20.0% |   0 B → 1 MiB |       0 → 1 | `./black/linegen.py:149` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

|   Change |  Delta |             % |                Size | Allocations | Location                         |
| -------: | -----: | ------------: | ------------------: | ----------: | -------------------------------- |
| +4370.0% | +3 MiB |  2.2% → 59.7% | 70.3 KiB → 3.07 MiB |     93 → 96 | `./blib2to3/pytree.py:377 → 366` |
|  removed | -1 MiB |  31.8% → 0.0% |         1 MiB → 0 B |       1 → 0 | `./blib2to3/pytree.py:371`       |
|   +93.6% | +1 MiB | 34.0% → 40.2% | 1.07 MiB → 2.07 MiB |     94 → 95 | `./blib2to3/pytree.py:376 → 365` |
|   -99.5% | -1 MiB |  32.0% → 0.1% |    1 MiB → 4.99 KiB |      10 → 9 | `./blib2to3/pytree.py:379 → 368` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

| Change |  Delta |            % |        Size | Allocations | Location                           |
| -----: | -----: | -----------: | ----------: | ----------: | ---------------------------------- |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pgen2/tokenize.py:603` |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pgen2/tokenize.py:694` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

| Change |  Delta |            % |        Size | Allocations | Location                                |
| -----: | -----: | -----------: | ----------: | ----------: | --------------------------------------- |
|    new | +1 MiB | 0.0% → 99.5% | 0 B → 1 MiB |       0 → 1 | `/usr/lib/python3.11/re/_parser.py:548` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

| Change |  Delta |             % |        Size | Allocations | Location                        |
| -----: | -----: | ------------: | ----------: | ----------: | ------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pgen2/parse.py:303` |

##### `mark` (`./black/brackets.py:70`)

| Change |  Delta |      % |                Size |     Allocations | Location                  |
| -----: | -----: | -----: | ------------------: | --------------: | ------------------------- |
|  +6.2% | +1 MiB | 100.0% | 16.2 MiB → 17.2 MiB | 20,787 → 20,788 | `./black/brackets.py:112` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |             % |        Size | Allocations | Location     |
| ------: | -----: | ------------: | ----------: | ----------: | ------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `<string>:6` |
|     new | +1 MiB |  0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `<string>:5` |
|     new | +1 MiB |  0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `<string>:8` |

##### `push` (`./blib2to3/pgen2/parse.py:374`)

| Change |  Delta |             % |        Size | Allocations | Location                        |
| -----: | -----: | ------------: | ----------: | ----------: | ------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pgen2/parse.py:382` |

##### `__str__` (`./blib2to3/pytree.py:429`)

| Change |  Delta |             % |        Size | Allocations | Location                   |
| -----: | -----: | ------------: | ----------: | ----------: | -------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pytree.py:435` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

| Change |      Delta |      % |                Size | Allocations | Location                          |
| -----: | ---------: | -----: | ------------------: | ----------: | --------------------------------- |
| +22.0% | +1.484 KiB | 100.0% | 6.73 KiB → 8.22 KiB |       8 → 9 | `/usr/lib/python3.11/enum.py:842` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

| Change |  Delta |      % |                Size | Allocations | Location                                                    |
| -----: | -----: | -----: | ------------------: | ----------: | ----------------------------------------------------------- |
|  +4.4% | +172 B | 100.0% | 3.79 KiB → 3.96 KiB |           3 | `/venv/lib/python3.11/site-packages/click/decorators.py:34` |

##### `_format_str_once` (`./black/__init__.py:1215`)

| Change |  Delta |           % |          Size | Allocations | Location                          |
| -----: | -----: | ----------: | ------------: | ----------: | --------------------------------- |
| +13.0% | +104 B | 0.3% → 0.4% | 800 B → 904 B |           1 | `./black/__init__.py:1239 → 1218` |

##### `get_cache_file` (`./black/cache.py:50`)

| Change | Delta |      % |                Size | Allocations | Location              |
| -----: | ----: | -----: | ------------------: | ----------: | --------------------- |
|  +5.5% | +64 B | 100.0% | 1.13 KiB → 1.19 KiB |           1 | `./black/cache.py:51` |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

| Change | Delta |      % |          Size | Allocations | Location                          |
| -----: | ----: | -----: | ------------: | ----------: | --------------------------------- |
| +10.1% | +60 B | 100.0% | 594 B → 654 B |           1 | `./black/__init__.py:1050 → 1055` |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |             % |          Size | Allocations | Location                         |
| -----: | -----: | ------------: | ------------: | ----------: | -------------------------------- |
| -75.0% | -3 MiB | 66.7% → 33.3% | 4 MiB → 1 MiB |       4 → 1 | `./blib2to3/pytree.py:176 → 165` |

##### `__new__` (`./blib2to3/pytree.py:70`)

| Change |  Delta |      % |          Size | Allocations | Location                       |
| -----: | -----: | -----: | ------------: | ----------: | ------------------------------ |
| -28.6% | -2 MiB | 100.0% | 7 MiB → 5 MiB |       7 → 5 | `./blib2to3/pytree.py:84 → 73` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`)

|  Change |  Delta |             % |        Size | Allocations | Location                                |
| ------: | -----: | ------------: | ----------: | ----------: | --------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `/usr/lib/python3.11/re/_parser.py:164` |

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

| Change |  Delta |      % |          Size | Allocations | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ------------------------------------- |
| -50.0% | -1 MiB | 100.0% | 2 MiB → 1 MiB |       2 → 1 | `./blib2to3/pgen2/parse.py:408 → 396` |

##### `__init__` (`./blib2to3/pytree.py:400`)

|  Change |  Delta |             % |        Size | Allocations | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | -------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pytree.py:425` |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |             % |          Size | Allocations | Location                     |
| -----: | -----: | ------------: | ------------: | ----------: | ---------------------------- |
| -99.9% | -1 MiB | 99.7% → 20.1% | 1 MiB → 690 B |       2 → 1 | `./black/nodes.py:185 → 174` |

##### `visit_default` (`./black/nodes.py:176`)

|  Change |  Delta |             % |        Size | Allocations | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./black/nodes.py:191` |

##### `transform_line` (`./black/linegen.py:601`)

| Change |  Delta |            % |          Size | Allocations | Location                 |
| -----: | -----: | -----------: | ------------: | ----------: | ------------------------ |
| -99.9% | -1 MiB | 50.0% → 0.1% | 1 MiB → 910 B |       2 → 1 | `./black/linegen.py:714` |

##### `<genexpr>` (`./black/lines.py:329`)

|  Change |  Delta |             % |        Size | Allocations | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./black/lines.py:329` |

##### `__str__` (`./black/lines.py:479`)

| Change |  Delta |      % |          Size | Allocations | Location                     |
| -----: | -----: | -----: | ------------: | ----------: | ---------------------------- |
| -50.0% | -1 MiB | 100.0% | 2 MiB → 1 MiB |       2 → 1 | `./black/lines.py:500 → 489` |

##### `replace` (`/usr/lib/python3.11/dataclasses.py:1443`)

|  Change |  Delta |             % |        Size | Allocations | Location                                  |
| ------: | -----: | ------------: | ----------: | ----------: | ----------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `/usr/lib/python3.11/dataclasses.py:1484` |

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

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

| Change |  Delta |      % |     Size | Allocations | Location                                     |
| -----: | -----: | -----: | -------: | ----------: | -------------------------------------------- |
|    ~0% | -213 B | 100.0% | 2.55 MiB |   619 → 618 | `<frozen importlib._bootstrap_external>:729` |

##### `<module>` (`./blib2to3/pgen2/tokenize.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location                               |
| ------: | ---------: | -----------: | -------------: | ----------: | -------------------------------------- |
| removed | -3.187 KiB | 15.4% → 0.0% | 3.19 KiB → 0 B |       1 → 0 | `./blib2to3/pgen2/tokenize.py:170`     |
|     new | +3.187 KiB | 0.0% → 15.4% | 0 B → 3.19 KiB |       0 → 1 | `./blib2to3/pgen2/tokenize.py:163`     |
|   -1.3% |       -8 B |         2.8% |  600 B → 592 B |           1 | `./blib2to3/pgen2/tokenize.py:76 → 65` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `append` (`./black/lines.py:52`)

|    Change |  Delta |      % |                Size | Allocations | Caller          | Location                 |
| --------: | -----: | -----: | ------------------: | ----------: | --------------- | ------------------------ |
| +32820.8% | +2 MiB | 100.0% | 6.24 KiB → 2.01 MiB |       4 → 6 | `visit_default` | `./black/linegen.py:134` |

##### `visit_default` (`./black/linegen.py:134`)

|     Change |  Delta |             % |          Size | Allocations | Caller         | Location                 |
| ---------: | -----: | ------------: | ------------: | ----------: | -------------- | ------------------------ |
| +149369.8% | +1 MiB | <0.1% → 20.0% | 702 B → 1 MiB |       1 → 2 | `visit_STRING` | `./black/linegen.py:413` |
|        new | +1 MiB |  0.0% → 20.0% |   0 B → 1 MiB |       0 → 1 | `visit_power`  | `./black/linegen.py:341` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

| Change |  Delta |      % |                Size | Allocations | Caller         | Location                         |
| -----: | -----: | -----: | ------------------: | ----------: | -------------- | -------------------------------- |
| +63.7% | +2 MiB | 100.0% | 3.14 MiB → 5.14 MiB |   198 → 200 | `prev_sibling` | `./blib2to3/pytree.py:207 → 196` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

| Change |  Delta |             % |        Size | Allocations | Caller     | Location                        |
| -----: | -----: | ------------: | ----------: | ----------: | ---------- | ------------------------------- |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `__next__` | `./blib2to3/pgen2/driver.py:80` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|    Change |  Delta |      % |                Size | Allocations | Caller       | Location                                |
| --------: | -----: | -----: | ------------------: | ----------: | ------------ | --------------------------------------- |
| +18255.2% | +1 MiB | 100.0% | 5.61 KiB → 1.01 MiB |       3 → 4 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

| Change |  Delta |             % |        Size | Allocations | Caller     | Location                              |
| -----: | -----: | ------------: | ----------: | ----------: | ---------- | ------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `addtoken` | `./blib2to3/pgen2/parse.py:242 → 230` |

##### `mark` (`./black/brackets.py:70`)

| Change |  Delta |      % |                Size |     Allocations | Caller   | Location                   |
| -----: | -----: | -----: | ------------------: | --------------: | -------- | -------------------------- |
|  +6.2% | +1 MiB | 100.0% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `append` | `./black/lines.py:63 → 52` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |             % |        Size | Allocations | Caller      | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ----------- | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `all_lines` | `./black/lines.py:538`   |
|     new | +1 MiB |  0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `line`      | `./black/linegen.py:109` |
|     new | +1 MiB |  0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `__init__`  | `<string>:2`             |

##### `push` (`./blib2to3/pgen2/parse.py:374`)

| Change |  Delta |             % |        Size | Allocations | Caller      | Location                        |
| -----: | -----: | ------------: | ----------: | ----------: | ----------- | ------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `_addtoken` | `./blib2to3/pgen2/parse.py:278` |

##### `__str__` (`./blib2to3/pytree.py:429`)

| Change |  Delta |             % |        Size | Allocations | Caller    | Location               |
| -----: | -----: | ------------: | ----------: | ----------: | --------- | ---------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `__str__` | `./black/lines.py:479` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

| Change |      Delta |             % |                Size | Allocations | Caller    | Location                          |
| -----: | ---------: | ------------: | ------------------: | ----------: | --------- | --------------------------------- |
| +66.0% | +1.484 KiB | 33.4% → 45.4% | 2.25 KiB → 3.73 KiB |       3 → 4 | `__new__` | `/usr/lib/python3.11/enum.py:488` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

| Change |  Delta |      % |                Size | Allocations | Caller   | Location                                               |
| -----: | -----: | -----: | ------------------: | ----------: | -------- | ------------------------------------------------------ |
|  +4.4% | +172 B | 100.0% | 3.79 KiB → 3.96 KiB |           3 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:857` |

##### `_format_str_once` (`./black/__init__.py:1215`)

| Change |  Delta |      % |    Size | Allocations | Caller       | Location                          |
| -----: | -----: | -----: | ------: | ----------: | ------------ | --------------------------------- |
|    ~0% | +104 B | 100.0% | 225 KiB |           5 | `format_str` | `./black/__init__.py:1189 → 1168` |

##### `get_cache_file` (`./black/cache.py:50`)

| Change | Delta |      % |                Size | Allocations | Caller | Location              |
| -----: | ----: | -----: | ------------------: | ----------: | ------ | --------------------- |
|  +5.5% | +64 B | 100.0% | 1.13 KiB → 1.19 KiB |           1 | `read` | `./black/cache.py:60` |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

| Change | Delta |      % |          Size | Allocations | Caller                 | Location                          |
| -----: | ----: | -----: | ------------: | ----------: | ---------------------- | --------------------------------- |
| +10.1% | +60 B | 100.0% | 594 B → 654 B |           1 | `format_file_contents` | `./black/__init__.py:1054 → 1059` |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |      % |          Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | --------- | -------------------------------- |
| -50.0% | -3 MiB | 100.0% | 6 MiB → 3 MiB |       6 → 3 | `changed` | `./blib2to3/pytree.py:171 → 160` |

##### `__new__` (`./blib2to3/pytree.py:70`)

| Change |  Delta |      % |          Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | --------- | -------------------------------- |
| -28.6% | -2 MiB | 100.0% | 7 MiB → 5 MiB |       7 → 5 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`)

|  Change |  Delta |             % |        Size | Allocations | Caller   | Location                                |
| ------: | -----: | ------------: | ----------: | ----------: | -------- | --------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

| Change |  Delta |      % |          Size | Allocations | Caller      | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ----------- | ------------------------------------- |
| -50.0% | -1 MiB | 100.0% | 2 MiB → 1 MiB |       2 → 1 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `__init__` (`./blib2to3/pytree.py:400`)

|  Change |  Delta |             % |        Size | Allocations | Caller    | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | --------- | -------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `convert` | `./blib2to3/pytree.py:486` |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |             % |             Size | Allocations | Caller          | Location                     |
| -----: | -----: | ------------: | ---------------: | ----------: | --------------- | ---------------------------- |
| -99.7% | -1 MiB | 99.9% → 79.9% | 1 MiB → 2.68 KiB |       4 → 3 | `visit_default` | `./black/nodes.py:187 → 176` |

##### `visit_default` (`./black/nodes.py:176`)

|  Change |  Delta |             % |        Size | Allocations | Caller          | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | --------------- | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `visit_default` | `./black/linegen.py:134` |

##### `transform_line` (`./black/linegen.py:601`)

| Change |  Delta |      % |          Size | Allocations | Caller             | Location                          |
| -----: | -----: | -----: | ------------: | ----------: | ------------------ | --------------------------------- |
| -49.9% | -1 MiB | 100.0% | 2 MiB → 1 MiB |       5 → 4 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |

##### `<genexpr>` (`./black/lines.py:329`)

|  Change |  Delta |             % |        Size | Allocations | Caller                              | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | ----------------------------------- | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `contains_unsplittable_type_ignore` | `./black/lines.py:312` |

##### `__str__` (`./black/lines.py:479`)

|  Change |  Delta |            % |        Size | Allocations | Caller             | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | ------------------ | -------------------------- |
| removed | -1 MiB | 50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_format_str_once` | `./black/__init__.py:1236` |

##### `replace` (`/usr/lib/python3.11/dataclasses.py:1443`)

|  Change |  Delta |             % |        Size | Allocations | Caller                                  | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | --------------------------------------- | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_maybe_split_omitting_optional_parens` | `./black/linegen.py:932` |

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

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

| Change |  Delta |      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -----: | -----: | -------: | ----------: | ---------- | --------------------------------------------- |
|    ~0% | -213 B | 100.0% | 2.55 MiB |   619 → 618 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `<module>` (`./blib2to3/pgen2/tokenize.py:1`)

| Change | Delta |      % |     Size | Allocations | Caller                      | Location                            |
| -----: | ----: | -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
|    ~0% |  -8 B | 100.0% | 20.7 KiB |          14 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

### Total size

#### Regressions

Functions with the largest increase in bytes held at peak memory within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Ours

|    Change |  Delta |             % |                Size |     Allocations | Function              | Location                           |
| --------: | -----: | ------------: | ------------------: | --------------: | --------------------- | ---------------------------------- |
|    +12.3% | +4 MiB | 41.3% → 46.4% | 32.4 MiB → 36.4 MiB | 21,083 → 21,087 | `visit`               | `./black/nodes.py:163 → 152`       |
|    +12.3% | +4 MiB | 41.3% → 46.4% | 32.4 MiB → 36.4 MiB | 21,081 → 21,085 | `visit_default`       | `./black/nodes.py:187 → 176`       |
|    +12.3% | +4 MiB | 41.3% → 46.4% | 32.4 MiB → 36.4 MiB | 21,081 → 21,085 | `visit_default`       | `./black/linegen.py:134`           |
|    +19.7% | +4 MiB | 25.8% → 30.9% | 20.3 MiB → 24.3 MiB | 20,885 → 20,889 | `append`              | `./black/lines.py:63 → 52`         |
|    +12.4% | +4 MiB | 40.9% → 46.0% | 32.2 MiB → 36.2 MiB | 20,710 → 20,714 | `visit_stmt`          | `./black/linegen.py:199`           |
|     +9.5% | +3 MiB | 40.4% → 44.2% | 31.7 MiB → 34.7 MiB | 20,143 → 20,146 | `visit_suite`         | `./black/linegen.py:288`           |
|     +9.4% | +3 MiB | 40.5% → 44.3% | 31.8 MiB → 34.8 MiB | 20,269 → 20,272 | `visit_funcdef`       | `./black/linegen.py:254`           |
| +24771.5% | +2 MiB |  <0.1% → 2.6% | 8.27 KiB → 2.01 MiB |           1 → 3 | `__next__`            | `./blib2to3/pgen2/driver.py:80`    |
|   +293.2% | +2 MiB |   0.9% → 3.4% |  698 KiB → 2.68 MiB |       900 → 902 | `visit_STRING`        | `./black/linegen.py:413`           |
|    +63.7% | +2 MiB |   4.0% → 6.5% | 3.14 MiB → 5.14 MiB |       198 → 200 | `update_sibling_maps` | `./blib2to3/pytree.py:369 → 358`   |
|    +63.7% | +2 MiB |   4.0% → 6.5% | 3.14 MiB → 5.14 MiB |       198 → 200 | `prev_sibling`        | `./blib2to3/pytree.py:207 → 196`   |
|       new | +2 MiB |   0.0% → 2.5% |         0 B → 2 MiB |           0 → 2 | `generate_tokens`     | `./blib2to3/pgen2/tokenize.py:554` |
|       new | +2 MiB |   0.0% → 2.5% |         0 B → 2 MiB |           0 → 2 | `line`                | `./black/linegen.py:109`           |
|       new | +2 MiB |   0.0% → 2.5% |         0 B → 2 MiB |           0 → 2 | `visit_INDENT`        | `./black/linegen.py:179`           |
|     +5.0% | +1 MiB | 25.2% → 26.5% | 19.8 MiB → 20.8 MiB | 13,398 → 13,399 | `visit_simple_stmt`   | `./black/linegen.py:295`           |
|  +1132.6% | +1 MiB |   0.1% → 1.4% | 90.4 KiB → 1.09 MiB |       107 → 108 | `is_docstring`        | `./black/nodes.py:558 → 553`       |
|     +6.2% | +1 MiB | 20.6% → 21.9% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                | `./black/brackets.py:70`           |
|    +32.7% | +1 MiB |   3.9% → 5.2% | 3.05 MiB → 4.05 MiB |         92 → 93 | `whitespace`          | `./black/nodes.py:194 → 183`       |
|   +100.0% | +1 MiB |   1.3% → 2.5% |       1 MiB → 2 MiB |           1 → 2 | `line_to_string`      | `./black/lines.py:1073 → 1062`     |
|   +100.0% | +1 MiB |   1.3% → 2.5% |       1 MiB → 2 MiB |           1 → 2 | `__init__`            | `<string>:2`                       |

##### Standard library

| Change |      Delta |     % |                Size | Allocations | Function           | Location                          |
| -----: | ---------: | ----: | ------------------: | ----------: | ------------------ | --------------------------------- |
| +22.0% | +1.484 KiB | <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__`      | `/usr/lib/python3.11/enum.py:831` |
|  +2.3% |     +752 B | <0.1% | 32.5 KiB → 33.2 KiB |          38 | `__new__`          | `/usr/lib/python3.11/enum.py:488` |
|    ~0% |     +222 B | 94.5% |            74.3 MiB |      21,395 | `_run_code`        | `<frozen runpy>:65`               |
|    ~0% |     +222 B | 94.5% |            74.3 MiB |      21,395 | `_run_module_code` | `<frozen runpy>:91`               |

#### Improvements

Functions with the largest decrease in bytes held at peak memory within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |  Delta |             % |                Size | Allocations | Function                                | Location                                |
| ------: | -----: | ------------: | ------------------: | ----------: | --------------------------------------- | --------------------------------------- |
|  -57.1% | -4 MiB |   8.9% → 3.8% |       7 MiB → 3 MiB |       7 → 3 | `shift`                                 | `./blib2to3/pgen2/parse.py:373 → 361`   |
|  -30.0% | -3 MiB |  12.7% → 8.9% |      10 MiB → 7 MiB |     14 → 11 | `convert`                               | `./blib2to3/pytree.py:486 → 475`        |
|  -50.0% | -3 MiB |   7.6% → 3.8% |       6 MiB → 3 MiB |       6 → 3 | `changed`                               | `./blib2to3/pytree.py:171 → 160`        |
|  -42.9% | -3 MiB |   8.9% → 5.1% |       7 MiB → 4 MiB |       7 → 4 | `prefix`                                | `./blib2to3/pytree.py:480 → 469`        |
|  -39.9% | -2 MiB |   6.4% → 3.8% | 5.01 MiB → 3.01 MiB |     17 → 15 | `transform_line`                        | `./black/linegen.py:601`                |
|  -16.6% | -2 MiB | 15.3% → 12.8% |     12 MiB → 10 MiB |     19 → 17 | `addtoken`                              | `./blib2to3/pgen2/parse.py:242 → 230`   |
|  -28.6% | -2 MiB |   8.9% → 6.4% |       7 MiB → 5 MiB |       7 → 5 | `__new__`                               | `./blib2to3/pytree.py:81 → 70`          |
|  -16.7% | -2 MiB | 15.3% → 12.7% |     12 MiB → 10 MiB |     16 → 14 | `_addtoken`                             | `./blib2to3/pgen2/parse.py:290 → 278`   |
|  -40.0% | -2 MiB |   6.4% → 3.8% |       5 MiB → 3 MiB |       5 → 3 | `generate_comments`                     | `./black/comments.py:52`                |
|  -50.0% | -2 MiB |   5.1% → 2.5% |       4 MiB → 2 MiB |       4 → 2 | `normalize_trailing_prefix`             | `./black/comments.py:127`               |
|  -99.4% | -1 MiB |  1.3% → <0.1% | 1.01 MiB → 6.38 KiB |       7 → 6 | `_rhs`                                  | `./black/linegen.py:650`                |
|  -99.2% | -1 MiB |  1.3% → <0.1% | 1.01 MiB → 8.33 KiB |       9 → 8 | `run_transformer`                       | `./black/linegen.py:1755 → 1771`        |
|  -99.5% | -1 MiB |  1.3% → <0.1% | 1.01 MiB → 5.29 KiB |       6 → 5 | `right_hand_split`                      | `./black/linegen.py:809`                |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__getitem__`                           | `/usr/lib/python3.11/re/_parser.py:162` |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                              | `./blib2to3/pytree.py:400`              |
|  -50.0% | -1 MiB |   2.5% → 1.3% |       2 MiB → 1 MiB |       3 → 2 | `normalize_invisible_parens`            | `./black/linegen.py:1328 → 1344`        |
|  -99.9% | -1 MiB |  1.3% → <0.1% |     1 MiB → 1,000 B |       2 → 1 | `_maybe_split_omitting_optional_parens` | `./black/linegen.py:932`                |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `<genexpr>`                             | `./black/lines.py:329`                  |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `contains_unsplittable_type_ignore`     | `./black/lines.py:312`                  |
|  -49.1% | -1 MiB |   2.6% → 1.3% | 2.04 MiB → 1.04 MiB |     68 → 67 | `preceding_leaf`                        | `./black/nodes.py:441 → 436`            |

##### Ours

|  Change |  Delta |             % |                Size | Allocations | Function                                | Location                              |
| ------: | -----: | ------------: | ------------------: | ----------: | --------------------------------------- | ------------------------------------- |
|  -57.1% | -4 MiB |   8.9% → 3.8% |       7 MiB → 3 MiB |       7 → 3 | `shift`                                 | `./blib2to3/pgen2/parse.py:373 → 361` |
|  -30.0% | -3 MiB |  12.7% → 8.9% |      10 MiB → 7 MiB |     14 → 11 | `convert`                               | `./blib2to3/pytree.py:486 → 475`      |
|  -50.0% | -3 MiB |   7.6% → 3.8% |       6 MiB → 3 MiB |       6 → 3 | `changed`                               | `./blib2to3/pytree.py:171 → 160`      |
|  -42.9% | -3 MiB |   8.9% → 5.1% |       7 MiB → 4 MiB |       7 → 4 | `prefix`                                | `./blib2to3/pytree.py:480 → 469`      |
|  -39.9% | -2 MiB |   6.4% → 3.8% | 5.01 MiB → 3.01 MiB |     17 → 15 | `transform_line`                        | `./black/linegen.py:601`              |
|  -16.6% | -2 MiB | 15.3% → 12.8% |     12 MiB → 10 MiB |     19 → 17 | `addtoken`                              | `./blib2to3/pgen2/parse.py:242 → 230` |
|  -28.6% | -2 MiB |   8.9% → 6.4% |       7 MiB → 5 MiB |       7 → 5 | `__new__`                               | `./blib2to3/pytree.py:81 → 70`        |
|  -16.7% | -2 MiB | 15.3% → 12.7% |     12 MiB → 10 MiB |     16 → 14 | `_addtoken`                             | `./blib2to3/pgen2/parse.py:290 → 278` |
|  -40.0% | -2 MiB |   6.4% → 3.8% |       5 MiB → 3 MiB |       5 → 3 | `generate_comments`                     | `./black/comments.py:52`              |
|  -50.0% | -2 MiB |   5.1% → 2.5% |       4 MiB → 2 MiB |       4 → 2 | `normalize_trailing_prefix`             | `./black/comments.py:127`             |
|  -99.4% | -1 MiB |  1.3% → <0.1% | 1.01 MiB → 6.38 KiB |       7 → 6 | `_rhs`                                  | `./black/linegen.py:650`              |
|  -99.2% | -1 MiB |  1.3% → <0.1% | 1.01 MiB → 8.33 KiB |       9 → 8 | `run_transformer`                       | `./black/linegen.py:1755 → 1771`      |
|  -99.5% | -1 MiB |  1.3% → <0.1% | 1.01 MiB → 5.29 KiB |       6 → 5 | `right_hand_split`                      | `./black/linegen.py:809`              |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                              | `./blib2to3/pytree.py:400`            |
|  -50.0% | -1 MiB |   2.5% → 1.3% |       2 MiB → 1 MiB |       3 → 2 | `normalize_invisible_parens`            | `./black/linegen.py:1328 → 1344`      |
|  -99.9% | -1 MiB |  1.3% → <0.1% |     1 MiB → 1,000 B |       2 → 1 | `_maybe_split_omitting_optional_parens` | `./black/linegen.py:932`              |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `<genexpr>`                             | `./black/lines.py:329`                |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `contains_unsplittable_type_ignore`     | `./black/lines.py:312`                |
|  -49.1% | -1 MiB |   2.6% → 1.3% | 2.04 MiB → 1.04 MiB |     68 → 67 | `preceding_leaf`                        | `./black/nodes.py:441 → 436`          |
|  -50.0% | -1 MiB |   2.5% → 1.3% |       2 MiB → 1 MiB |       2 → 1 | `prefix`                                | `./blib2to3/pytree.py:329 → 318`      |

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

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |             % |                Size |     Allocations | Caller             | Location                          |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------------ | --------------------------------- |
| +12.3% | +4 MiB |        100.0% | 32.4 MiB → 36.4 MiB | 21,083 → 21,087 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |
| +12.3% | +4 MiB |        100.0% | 32.4 MiB → 36.4 MiB | 21,081 → 21,085 | `visit_default`    | `./black/nodes.py:187 → 176`      |
| +12.4% | +4 MiB | 99.1% → 99.2% | 32.2 MiB → 36.2 MiB | 20,708 → 20,712 | `visit_stmt`       | `./black/linegen.py:199`          |
|  +9.4% | +3 MiB | 98.1% → 95.5% | 31.8 MiB → 34.8 MiB | 20,269 → 20,272 | `visit_funcdef`    | `./black/linegen.py:254`          |

##### `visit_default` (`./black/nodes.py:176`)

| Change |  Delta |      % |                Size |     Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
| +12.3% | +4 MiB | 100.0% | 32.4 MiB → 36.4 MiB | 21,081 → 21,085 | `visit_default` | `./black/linegen.py:134` |

##### `visit_default` (`./black/linegen.py:134`)

|  Change |  Delta |             % |                Size |     Allocations | Caller              | Location                     |
| ------: | -----: | ------------: | ------------------: | --------------: | ------------------- | ---------------------------- |
|  +12.3% | +4 MiB |        100.0% | 32.4 MiB → 36.4 MiB | 21,081 → 21,085 | `visit`             | `./black/nodes.py:163 → 152` |
|   +9.5% | +3 MiB | 97.8% → 95.3% | 31.7 MiB → 34.7 MiB | 20,143 → 20,146 | `visit_suite`       | `./black/linegen.py:288`     |
|   +5.0% | +1 MiB | 61.1% → 57.2% | 19.8 MiB → 20.8 MiB | 13,398 → 13,399 | `visit_simple_stmt` | `./black/linegen.py:295`     |
| +187.4% | +1 MiB |   1.6% → 4.2% |  546 KiB → 1.53 MiB |       724 → 725 | `visit_STRING`      | `./black/linegen.py:413`     |
| +209.1% | +1 MiB |   1.5% → 4.1% |  490 KiB → 1.48 MiB |       653 → 654 | `visit_NUMBER`      | `./black/linegen.py:505`     |

##### `append` (`./black/lines.py:52`)

| Change |  Delta |      % |                Size |     Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
| +19.7% | +4 MiB | 100.0% | 20.3 MiB → 24.3 MiB | 20,885 → 20,889 | `visit_default` | `./black/linegen.py:134` |

##### `visit_stmt` (`./black/linegen.py:199`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
| +12.4% | +4 MiB | 100.0% | 32.2 MiB → 36.2 MiB | 20,710 → 20,714 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_suite` (`./black/linegen.py:288`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +9.5% | +3 MiB | 100.0% | 31.7 MiB → 34.7 MiB | 20,143 → 20,146 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_funcdef` (`./black/linegen.py:254`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +9.4% | +3 MiB | 100.0% | 31.8 MiB → 34.8 MiB | 20,269 → 20,272 | `visit` | `./black/nodes.py:163 → 152` |

##### `__next__` (`./blib2to3/pgen2/driver.py:80`)

|    Change |  Delta |      % |                Size | Allocations | Caller         | Location                         |
| --------: | -----: | -----: | ------------------: | ----------: | -------------- | -------------------------------- |
| +24771.5% | +2 MiB | 100.0% | 8.27 KiB → 2.01 MiB |       1 → 3 | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `visit_STRING` (`./black/linegen.py:413`)

|  Change |  Delta |      % |               Size | Allocations | Caller  | Location                     |
| ------: | -----: | -----: | -----------------: | ----------: | ------- | ---------------------------- |
| +293.2% | +2 MiB | 100.0% | 698 KiB → 2.68 MiB |   900 → 902 | `visit` | `./black/nodes.py:163 → 152` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

| Change |  Delta |      % |                Size | Allocations | Caller         | Location                         |
| -----: | -----: | -----: | ------------------: | ----------: | -------------- | -------------------------------- |
| +63.7% | +2 MiB | 100.0% | 3.14 MiB → 5.14 MiB |   198 → 200 | `prev_sibling` | `./blib2to3/pytree.py:207 → 196` |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

|   Change |  Delta |             % |                Size | Allocations | Caller              | Location                     |
| -------: | -----: | ------------: | ------------------: | ----------: | ------------------- | ---------------------------- |
|  +196.5% | +2 MiB | 32.4% → 58.7% | 1.02 MiB → 3.02 MiB |     24 → 26 | `whitespace`        | `./black/nodes.py:194 → 183` |
|   -49.1% | -1 MiB | 64.8% → 20.2% | 2.04 MiB → 1.04 MiB |     68 → 67 | `preceding_leaf`    | `./black/nodes.py:441 → 436` |
| +1139.2% | +1 MiB |  2.8% → 21.2% | 89.9 KiB → 1.09 MiB |   106 → 107 | `prev_siblings_are` | `./black/nodes.py:459 → 454` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

| Change |  Delta |             % |        Size | Allocations | Caller     | Location                        |
| -----: | -----: | ------------: | ----------: | ----------: | ---------- | ------------------------------- |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `__next__` | `./blib2to3/pgen2/driver.py:80` |

##### `line` (`./black/linegen.py:109`)

| Change |  Delta |             % |        Size | Allocations | Caller         | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | -------------- | ------------------------ |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `visit_INDENT` | `./black/linegen.py:179` |

##### `visit_INDENT` (`./black/linegen.py:179`)

| Change |  Delta |             % |        Size | Allocations | Caller  | Location               |
| -----: | -----: | ------------: | ----------: | ----------: | ------- | ---------------------- |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `visit` | `./black/nodes.py:152` |

##### `visit_simple_stmt` (`./black/linegen.py:295`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +5.0% | +1 MiB | 100.0% | 19.8 MiB → 20.8 MiB | 13,398 → 13,399 | `visit` | `./black/nodes.py:163 → 152` |

##### `is_docstring` (`./black/nodes.py:553`)

|   Change |  Delta |      % |                Size | Allocations | Caller         | Location                 |
| -------: | -----: | -----: | ------------------: | ----------: | -------------- | ------------------------ |
| +1132.6% | +1 MiB | 100.0% | 90.4 KiB → 1.09 MiB |   107 → 108 | `visit_STRING` | `./black/linegen.py:413` |

##### `mark` (`./black/brackets.py:70`)

| Change |  Delta |      % |                Size |     Allocations | Caller   | Location                   |
| -----: | -----: | -----: | ------------------: | --------------: | -------- | -------------------------- |
|  +6.2% | +1 MiB | 100.0% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `append` | `./black/lines.py:63 → 52` |

##### `whitespace` (`./black/nodes.py:183`)

| Change |  Delta |      % |                Size | Allocations | Caller   | Location                   |
| -----: | -----: | -----: | ------------------: | ----------: | -------- | -------------------------- |
| +32.7% | +1 MiB | 100.0% | 3.05 MiB → 4.05 MiB |     92 → 93 | `append` | `./black/lines.py:63 → 52` |

##### `line_to_string` (`./black/lines.py:1062`)

|  Change |  Delta |      % |          Size | Allocations | Caller           | Location                 |
| ------: | -----: | -----: | ------------: | ----------: | ---------------- | ------------------------ |
| +100.0% | +1 MiB | 100.0% | 1 MiB → 2 MiB |       1 → 2 | `transform_line` | `./black/linegen.py:601` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |             % |        Size | Allocations | Caller      | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ----------- | ------------------------ |
|     new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `line`      | `./black/linegen.py:109` |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `all_lines` | `./black/lines.py:538`   |
|     new | +1 MiB |  0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `__init__`  | `<string>:2`             |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

| Change |      Delta |             % |                Size | Allocations | Caller    | Location                          |
| -----: | ---------: | ------------: | ------------------: | ----------: | --------- | --------------------------------- |
| +66.0% | +1.484 KiB | 33.4% → 45.4% | 2.25 KiB → 3.73 KiB |       3 → 4 | `__new__` | `/usr/lib/python3.11/enum.py:488` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

| Change |  Delta |             % |                Size | Allocations | Caller     | Location            |
| -----: | -----: | ------------: | ------------------: | ----------: | ---------- | ------------------- |
|  +6.8% | +752 B | 33.2% → 34.7% | 10.8 KiB → 11.5 KiB |          13 | `<module>` | `./black/mode.py:1` |

##### `_run_code` (`<frozen runpy>:65`)

| Change |  Delta |      % |     Size | Allocations | Caller             | Location            |
| -----: | -----: | -----: | -------: | ----------: | ------------------ | ------------------- |
|    ~0% | +222 B | 100.0% | 74.3 MiB |      21,395 | `_run_module_code` | `<frozen runpy>:91` |

##### `_run_module_code` (`<frozen runpy>:91`)

| Change |  Delta |      % |     Size | Allocations | Caller       | Location             |
| -----: | -----: | -----: | -------: | ----------: | ------------ | -------------------- |
|    ~0% | +222 B | 100.0% | 74.3 MiB |      21,395 | `run_module` | `<frozen runpy>:201` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

| Change |  Delta |      % |          Size | Allocations | Caller      | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ----------- | ------------------------------------- |
| -57.1% | -4 MiB | 100.0% | 7 MiB → 3 MiB |       7 → 3 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `convert` (`./blib2to3/pytree.py:475`)

| Change |  Delta |             % |          Size | Allocations | Caller  | Location                              |
| -----: | -----: | ------------: | ------------: | ----------: | ------- | ------------------------------------- |
| -57.1% | -4 MiB | 70.0% → 42.8% | 7 MiB → 3 MiB |       7 → 3 | `shift` | `./blib2to3/pgen2/parse.py:373 → 361` |
| +33.3% | +1 MiB | 30.0% → 57.2% | 3 MiB → 4 MiB |       7 → 8 | `pop`   | `./blib2to3/pgen2/parse.py:398 → 386` |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |      % |          Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | --------- | -------------------------------- |
| -50.0% | -3 MiB | 100.0% | 6 MiB → 3 MiB |       6 → 3 | `changed` | `./blib2to3/pytree.py:171 → 160` |
| -50.0% | -3 MiB | 100.0% | 6 MiB → 3 MiB |       6 → 3 | `prefix`  | `./blib2to3/pytree.py:480 → 469` |

##### `prefix` (`./blib2to3/pytree.py:469`)

| Change |  Delta |             % |          Size | Allocations | Caller                      | Location                         |
| -----: | -----: | ------------: | ------------: | ----------: | --------------------------- | -------------------------------- |
| -50.0% | -2 MiB | 57.1% → 50.0% | 4 MiB → 2 MiB |       4 → 2 | `normalize_trailing_prefix` | `./black/comments.py:127`        |
| -50.0% | -1 MiB | 28.6% → 25.0% | 2 MiB → 1 MiB |       2 → 1 | `prefix`                    | `./blib2to3/pytree.py:329 → 318` |

##### `transform_line` (`./black/linegen.py:601`)

| Change |  Delta |      % |                Size | Allocations | Caller             | Location                          |
| -----: | -----: | -----: | ------------------: | ----------: | ------------------ | --------------------------------- |
| -39.9% | -2 MiB | 100.0% | 5.01 MiB → 3.01 MiB |     17 → 15 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |

##### `addtoken` (`./blib2to3/pgen2/parse.py:230`)

| Change |  Delta |      % |            Size | Allocations | Caller         | Location                         |
| -----: | -----: | -----: | --------------: | ----------: | -------------- | -------------------------------- |
| -16.6% | -2 MiB | 100.0% | 12 MiB → 10 MiB |     19 → 17 | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `__new__` (`./blib2to3/pytree.py:70`)

| Change |  Delta |      % |          Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | --------- | -------------------------------- |
| -28.6% | -2 MiB | 100.0% | 7 MiB → 5 MiB |       7 → 5 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

| Change |  Delta |      % |            Size | Allocations | Caller     | Location                              |
| -----: | -----: | -----: | --------------: | ----------: | ---------- | ------------------------------------- |
| -16.7% | -2 MiB | 100.0% | 12 MiB → 10 MiB |     16 → 14 | `addtoken` | `./blib2to3/pgen2/parse.py:242 → 230` |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |      % |          Size | Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | --------------- | ------------------------ |
| -40.0% | -2 MiB | 100.0% | 5 MiB → 3 MiB |       5 → 3 | `visit_default` | `./black/linegen.py:134` |

##### `normalize_trailing_prefix` (`./black/comments.py:127`)

| Change |  Delta |      % |          Size | Allocations | Caller              | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | ------------------- | ------------------------ |
| -50.0% | -2 MiB | 100.0% | 4 MiB → 2 MiB |       4 → 2 | `generate_comments` | `./black/comments.py:52` |

##### `_rhs` (`./black/linegen.py:650`)

| Change |  Delta |      % |                Size | Allocations | Caller            | Location                         |
| -----: | -----: | -----: | ------------------: | ----------: | ----------------- | -------------------------------- |
| -99.4% | -1 MiB | 100.0% | 1.01 MiB → 6.38 KiB |       7 → 6 | `run_transformer` | `./black/linegen.py:1755 → 1771` |

##### `run_transformer` (`./black/linegen.py:1771`)

| Change |  Delta |      % |                Size | Allocations | Caller           | Location                 |
| -----: | -----: | -----: | ------------------: | ----------: | ---------------- | ------------------------ |
| -99.2% | -1 MiB | 100.0% | 1.01 MiB → 8.33 KiB |       9 → 8 | `transform_line` | `./black/linegen.py:601` |

##### `right_hand_split` (`./black/linegen.py:809`)

| Change |  Delta |      % |                Size | Allocations | Caller | Location                 |
| -----: | -----: | -----: | ------------------: | ----------: | ------ | ------------------------ |
| -99.5% | -1 MiB | 100.0% | 1.01 MiB → 5.29 KiB |       6 → 5 | `_rhs` | `./black/linegen.py:650` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`)

|  Change |  Delta |             % |        Size | Allocations | Caller   | Location                                |
| ------: | -----: | ------------: | ----------: | ----------: | -------- | --------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `__init__` (`./blib2to3/pytree.py:400`)

|  Change |  Delta |             % |        Size | Allocations | Caller    | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | --------- | -------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `convert` | `./blib2to3/pytree.py:486` |

##### `normalize_invisible_parens` (`./black/linegen.py:1344`)

| Change |  Delta |      % |          Size | Allocations | Caller       | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | ------------ | ------------------------ |
| -50.0% | -1 MiB | 100.0% | 2 MiB → 1 MiB |       3 → 2 | `visit_stmt` | `./black/linegen.py:199` |

##### `_maybe_split_omitting_optional_parens` (`./black/linegen.py:932`)

| Change |  Delta |      % |            Size | Allocations | Caller             | Location                 |
| -----: | -----: | -----: | --------------: | ----------: | ------------------ | ------------------------ |
| -99.9% | -1 MiB | 100.0% | 1 MiB → 1,000 B |       2 → 1 | `right_hand_split` | `./black/linegen.py:809` |

##### `<genexpr>` (`./black/lines.py:329`)

|  Change |  Delta |             % |        Size | Allocations | Caller                              | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | ----------------------------------- | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `contains_unsplittable_type_ignore` | `./black/lines.py:312` |

##### `contains_unsplittable_type_ignore` (`./black/lines.py:312`)

|  Change |  Delta |             % |        Size | Allocations | Caller           | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------- | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `transform_line` | `./black/linegen.py:601` |

##### `preceding_leaf` (`./black/nodes.py:436`)

| Change |  Delta |      % |                Size | Allocations | Caller       | Location                     |
| -----: | -----: | -----: | ------------------: | ----------: | ------------ | ---------------------------- |
| -49.1% | -1 MiB | 100.0% | 2.04 MiB → 1.04 MiB |     68 → 67 | `whitespace` | `./black/nodes.py:194 → 183` |

##### `prefix` (`./blib2to3/pytree.py:318`)

| Change |  Delta |      % |          Size | Allocations | Caller                | Location                     |
| -----: | -----: | -----: | ------------: | ----------: | --------------------- | ---------------------------- |
| -50.0% | -1 MiB | 100.0% | 2 MiB → 1 MiB |       2 → 1 | `wrap_in_parentheses` | `./black/nodes.py:935 → 930` |

##### `replace` (`/usr/lib/python3.11/dataclasses.py:1443`)

|  Change |  Delta |             % |        Size | Allocations | Caller                                  | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | --------------------------------------- | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_maybe_split_omitting_optional_parens` | `./black/linegen.py:932` |

##### `_get_module_details` (`<frozen runpy>:105`)

| Change |      Delta |      % |     Size |   Allocations | Caller                | Location             |
| -----: | ---------: | -----: | -------: | ------------: | --------------------- | -------------------- |
|    ~0% | -1.918 KiB | 100.0% | 4.31 MiB | 1,300 → 1,299 | `run_module`          | `<frozen runpy>:201` |
|    ~0% | -1.918 KiB |  99.9% |  4.3 MiB | 1,293 → 1,292 | `_get_module_details` | `<frozen runpy>:105` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

| Change |      Delta |      % |                Size |   Allocations | Caller                | Location                |
| -----: | ---------: | -----: | ------------------: | ------------: | --------------------- | ----------------------- |
|    ~0% | -1.918 KiB | 100.0% |             4.3 MiB | 1,293 → 1,292 | `_get_module_details` | `<frozen runpy>:105`    |
|  -1.3% | -1.703 KiB |   3.0% |   133 KiB → 131 KiB |           131 | `<module>`            | `./black/linegen.py:1`  |
|    ~0% |  -1.46 KiB |  97.9% |            4.21 MiB |         1,213 | `<module>`            | `./black/__init__.py:1` |
|  +2.8% |     +837 B |   0.7% | 28.9 KiB → 29.7 KiB |            33 | `<module>`            | `./black/cache.py:1`    |
|  +0.3% |     +794 B |   6.0% |             263 KiB |     234 → 235 | `<module>`            | `./black/files.py:1`    |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

| Change |      Delta |      % |    Size |   Allocations | Caller           | Location                             |
| -----: | ---------: | -----: | ------: | ------------: | ---------------- | ------------------------------------ |
|    ~0% | -1.918 KiB | 100.0% | 4.3 MiB | 1,291 → 1,290 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

| Change |      Delta |      % |    Size |   Allocations | Caller                    | Location                             |
| -----: | ---------: | -----: | ------: | ------------: | ------------------------- | ------------------------------------ |
|    ~0% | -1.918 KiB | 100.0% | 4.3 MiB | 1,290 → 1,289 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

| Change |      Delta |      % |    Size |   Allocations | Caller           | Location                            |
| -----: | ---------: | -----: | ------: | ------------: | ---------------- | ----------------------------------- |
|    ~0% | -1.918 KiB | 100.0% | 4.3 MiB | 1,288 → 1,287 | `_load_unlocked` | `<frozen importlib._bootstrap>:666` |

##### `run_module` (`<frozen runpy>:201`)

| Change |      Delta |      % |     Size |     Allocations | Caller         | Location                                                       |
| -----: | ---------: | -----: | -------: | --------------: | -------------- | -------------------------------------------------------------- |
|    ~0% | -1.702 KiB | 100.0% | 78.6 MiB | 22,696 → 22,695 | `_run_tracker` | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |     Delta |      % |     Size | Allocations | Caller             | Location                                     |
| -----: | --------: | -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
|    ~0% | -1.46 KiB | 100.0% | 4.27 MiB |       1,258 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|    ~0% |      -8 B |  30.6% | 1.31 MiB |         319 | `_handle_fromlist` | `<frozen importlib._bootstrap>:1209`         |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

| Change |  Delta |      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -----: | -----: | -------: | ----------: | ---------- | --------------------------------------------- |
|    ~0% | -213 B | 100.0% | 2.55 MiB |   619 → 618 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

| Change |  Delta |      % |     Size | Allocations | Caller        | Location                                     |
| -----: | -----: | -----: | -------: | ----------: | ------------- | -------------------------------------------- |
|    ~0% | -213 B | 100.0% | 2.55 MiB |   619 → 618 | `exec_module` | `<frozen importlib._bootstrap_external>:934` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

| Change | Delta |     % |     Size | Allocations | Caller     | Location                 |
| -----: | ----: | ----: | -------: | ----------: | ---------- | ------------------------ |
|    ~0% |  -8 B | 85.8% | 1.12 MiB |         115 | `<module>` | `./black/nodes.py:1`     |
|    ~0% |  -8 B | 85.1% | 1.11 MiB |         106 | `<module>` | `./blib2to3/pygram.py:1` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `visit` (`./black/nodes.py:152`)

|  Change |  Delta |             % |                Size |     Allocations | Callee          | Location                 |
| ------: | -----: | ------------: | ------------------: | --------------: | --------------- | ------------------------ |
|  +12.3% | +4 MiB |        100.0% | 32.4 MiB → 36.4 MiB | 21,081 → 21,085 | `visit_default` | `./black/linegen.py:134` |
|  +12.4% | +4 MiB | 99.1% → 99.2% | 32.2 MiB → 36.2 MiB | 20,710 → 20,714 | `visit_stmt`    | `./black/linegen.py:199` |
|   +9.5% | +3 MiB | 97.8% → 95.3% | 31.7 MiB → 34.7 MiB | 20,143 → 20,146 | `visit_suite`   | `./black/linegen.py:288` |
|   +9.4% | +3 MiB | 98.1% → 95.5% | 31.8 MiB → 34.8 MiB | 20,269 → 20,272 | `visit_funcdef` | `./black/linegen.py:254` |
| +293.2% | +2 MiB |   2.1% → 7.4% |  698 KiB → 2.68 MiB |       900 → 902 | `visit_STRING`  | `./black/linegen.py:413` |

##### `visit_default` (`./black/nodes.py:176`)

| Change |  Delta |      % |                Size |     Allocations | Callee  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
| +12.3% | +4 MiB | 100.0% | 32.4 MiB → 36.4 MiB | 21,081 → 21,085 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_default` (`./black/linegen.py:134`)

| Change |  Delta |             % |                Size |     Allocations | Callee              | Location                     |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------------- | ---------------------------- |
| +12.3% | +4 MiB |        100.0% | 32.4 MiB → 36.4 MiB | 21,081 → 21,085 | `visit_default`     | `./black/nodes.py:187 → 176` |
| +19.7% | +4 MiB | 62.5% → 66.6% | 20.3 MiB → 24.3 MiB | 20,885 → 20,889 | `append`            | `./black/lines.py:63 → 52`   |
| -40.0% | -2 MiB |  15.4% → 8.2% |       5 MiB → 3 MiB |           5 → 3 | `generate_comments` | `./black/comments.py:52`     |

##### `append` (`./black/lines.py:52`)

| Change |  Delta |             % |                Size |     Allocations | Callee       | Location                     |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------ | ---------------------------- |
|  +6.2% | +1 MiB | 80.0% → 70.9% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`       | `./black/brackets.py:70`     |
| +32.7% | +1 MiB | 15.1% → 16.7% | 3.05 MiB → 4.05 MiB |         92 → 93 | `whitespace` | `./black/nodes.py:194 → 183` |

##### `visit_stmt` (`./black/linegen.py:199`)

| Change |  Delta |           % |                Size |     Allocations | Callee                       | Location                         |
| -----: | -----: | ----------: | ------------------: | --------------: | ---------------------------- | -------------------------------- |
| +12.4% | +4 MiB |      100.0% | 32.2 MiB → 36.2 MiB | 20,708 → 20,712 | `visit`                      | `./black/nodes.py:163 → 152`     |
| -50.0% | -1 MiB | 6.2% → 2.8% |       2 MiB → 1 MiB |           3 → 2 | `normalize_invisible_parens` | `./black/linegen.py:1328 → 1344` |

##### `visit_suite` (`./black/linegen.py:288`)

| Change |  Delta |      % |                Size |     Allocations | Callee          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
|  +9.5% | +3 MiB | 100.0% | 31.7 MiB → 34.7 MiB | 20,143 → 20,146 | `visit_default` | `./black/linegen.py:134` |

##### `visit_funcdef` (`./black/linegen.py:254`)

| Change |  Delta |      % |                Size |     Allocations | Callee  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +9.4% | +3 MiB | 100.0% | 31.8 MiB → 34.8 MiB | 20,269 → 20,272 | `visit` | `./black/nodes.py:163 → 152` |

##### `__next__` (`./blib2to3/pgen2/driver.py:80`)

| Change |  Delta |            % |        Size | Allocations | Callee            | Location                           |
| -----: | -----: | -----------: | ----------: | ----------: | ----------------- | ---------------------------------- |
|    new | +2 MiB | 0.0% → 99.6% | 0 B → 2 MiB |       0 → 2 | `generate_tokens` | `./blib2to3/pgen2/tokenize.py:554` |

##### `visit_STRING` (`./black/linegen.py:413`)

|   Change |  Delta |             % |                Size | Allocations | Callee          | Location                     |
| -------: | -----: | ------------: | ------------------: | ----------: | --------------- | ---------------------------- |
| +1132.6% | +1 MiB | 12.9% → 40.6% | 90.4 KiB → 1.09 MiB |   107 → 108 | `is_docstring`  | `./black/nodes.py:558 → 553` |
|  +187.4% | +1 MiB | 78.2% → 57.2% |  546 KiB → 1.53 MiB |   724 → 725 | `visit_default` | `./black/linegen.py:134`     |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

| Change |  Delta |      % |                Size | Allocations | Callee                | Location                         |
| -----: | -----: | -----: | ------------------: | ----------: | --------------------- | -------------------------------- |
| +63.7% | +2 MiB | 100.0% | 3.14 MiB → 5.14 MiB |   198 → 200 | `update_sibling_maps` | `./blib2to3/pytree.py:369 → 358` |

##### `line` (`./black/linegen.py:109`)

| Change |  Delta |             % |        Size | Allocations | Callee     | Location     |
| -----: | -----: | ------------: | ----------: | ----------: | ---------- | ------------ |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `__init__` | `<string>:2` |

##### `visit_INDENT` (`./black/linegen.py:179`)

| Change |  Delta |             % |        Size | Allocations | Callee | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | ------ | ------------------------ |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `line` | `./black/linegen.py:109` |

##### `visit_simple_stmt` (`./black/linegen.py:295`)

| Change |  Delta |      % |                Size |     Allocations | Callee          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
|  +5.0% | +1 MiB | 100.0% | 19.8 MiB → 20.8 MiB | 13,398 → 13,399 | `visit_default` | `./black/linegen.py:134` |

##### `is_docstring` (`./black/nodes.py:553`)

|   Change |  Delta |              % |                Size | Allocations | Callee              | Location                     |
| -------: | -----: | -------------: | ------------------: | ----------: | ------------------- | ---------------------------- |
| +1139.2% | +1 MiB | 99.4% → 100.0% | 89.9 KiB → 1.09 MiB |   106 → 107 | `prev_siblings_are` | `./black/nodes.py:459 → 454` |

##### `whitespace` (`./black/nodes.py:183`)

|  Change |  Delta |             % |                Size | Allocations | Callee           | Location                         |
| ------: | -----: | ------------: | ------------------: | ----------: | ---------------- | -------------------------------- |
| +196.5% | +2 MiB | 33.3% → 74.4% | 1.02 MiB → 3.02 MiB |     24 → 26 | `prev_sibling`   | `./blib2to3/pytree.py:207 → 196` |
|  -49.1% | -1 MiB | 66.7% → 25.6% | 2.04 MiB → 1.04 MiB |     68 → 67 | `preceding_leaf` | `./black/nodes.py:441 → 436`     |

##### `line_to_string` (`./black/lines.py:1062`)

|  Change |  Delta |      % |          Size | Allocations | Callee    | Location                     |
| ------: | -----: | -----: | ------------: | ----------: | --------- | ---------------------------- |
| +100.0% | +1 MiB | 100.0% | 1 MiB → 2 MiB |       1 → 2 | `__str__` | `./black/lines.py:490 → 479` |

##### `__init__` (`<string>:2`)

| Change |  Delta |            % |        Size | Allocations | Callee     | Location     |
| -----: | -----: | -----------: | ----------: | ----------: | ---------- | ------------ |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `__init__` | `<string>:2` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

| Change |      Delta |            % |                Size | Allocations | Callee        | Location                          |
| -----: | ---------: | -----------: | ------------------: | ----------: | ------------- | --------------------------------- |
| +66.0% | +1.484 KiB | 6.9% → 11.2% | 2.25 KiB → 3.73 KiB |       3 → 4 | `__setattr__` | `/usr/lib/python3.11/enum.py:831` |

##### `_run_code` (`<frozen runpy>:65`)

| Change |  Delta |      % |     Size | Allocations | Callee     | Location                |
| -----: | -----: | -----: | -------: | ----------: | ---------- | ----------------------- |
|    ~0% | +222 B | 100.0% | 74.3 MiB |      21,395 | `<module>` | `./black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

| Change |  Delta |      % |     Size | Allocations | Callee      | Location            |
| -----: | -----: | -----: | -------: | ----------: | ----------- | ------------------- |
|    ~0% | +222 B | 100.0% | 74.3 MiB |      21,395 | `_run_code` | `<frozen runpy>:65` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

| Change |  Delta |      % |          Size | Allocations | Callee    | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | --------- | -------------------------------- |
| -57.1% | -4 MiB | 100.0% | 7 MiB → 3 MiB |       7 → 3 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `convert` (`./blib2to3/pytree.py:475`)

|  Change |  Delta |             % |          Size | Allocations | Callee     | Location                       |
| ------: | -----: | ------------: | ------------: | ----------: | ---------- | ------------------------------ |
|  -28.6% | -2 MiB | 70.0% → 71.4% | 7 MiB → 5 MiB |       7 → 5 | `__new__`  | `./blib2to3/pytree.py:81 → 70` |
| removed | -1 MiB |  10.0% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__init__` | `./blib2to3/pytree.py:400`     |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |      % |          Size | Allocations | Callee    | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | --------- | -------------------------------- |
| -50.0% | -3 MiB | 100.0% | 6 MiB → 3 MiB |       6 → 3 | `changed` | `./blib2to3/pytree.py:171 → 160` |

##### `prefix` (`./blib2to3/pytree.py:469`)

| Change |  Delta |             % |          Size | Allocations | Callee    | Location                         |
| -----: | -----: | ------------: | ------------: | ----------: | --------- | -------------------------------- |
| -50.0% | -3 MiB | 85.7% → 75.0% | 6 MiB → 3 MiB |       6 → 3 | `changed` | `./blib2to3/pytree.py:171 → 160` |

##### `transform_line` (`./black/linegen.py:601`)

|  Change |  Delta |             % |                Size | Allocations | Callee                              | Location                         |
| ------: | -----: | ------------: | ------------------: | ----------: | ----------------------------------- | -------------------------------- |
|  -99.2% | -1 MiB |  20.1% → 0.3% | 1.01 MiB → 8.33 KiB |       9 → 8 | `run_transformer`                   | `./black/linegen.py:1755 → 1771` |
| removed | -1 MiB |  20.0% → 0.0% |         1 MiB → 0 B |       1 → 0 | `contains_unsplittable_type_ignore` | `./black/lines.py:312`           |
| +100.0% | +1 MiB | 20.0% → 66.4% |       1 MiB → 2 MiB |       1 → 2 | `line_to_string`                    | `./black/lines.py:1073 → 1062`   |

##### `addtoken` (`./blib2to3/pgen2/parse.py:230`)

| Change |  Delta |     % |            Size | Allocations | Callee      | Location                              |
| -----: | -----: | ----: | --------------: | ----------: | ----------- | ------------------------------------- |
| -16.7% | -2 MiB | 99.7% | 12 MiB → 10 MiB |     16 → 14 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

| Change |  Delta |             % |          Size | Allocations | Callee  | Location                              |
| -----: | -----: | ------------: | ------------: | ----------: | ------- | ------------------------------------- |
| -57.1% | -4 MiB | 58.3% → 30.0% | 7 MiB → 3 MiB |       7 → 3 | `shift` | `./blib2to3/pgen2/parse.py:373 → 361` |
|    new | +1 MiB |  0.0% → 10.0% |   0 B → 1 MiB |       0 → 1 | `push`  | `./blib2to3/pgen2/parse.py:374`       |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |             % |          Size | Allocations | Callee                      | Location                  |
| -----: | -----: | ------------: | ------------: | ----------: | --------------------------- | ------------------------- |
| -50.0% | -2 MiB | 80.0% → 66.7% | 4 MiB → 2 MiB |       4 → 2 | `normalize_trailing_prefix` | `./black/comments.py:127` |

##### `normalize_trailing_prefix` (`./black/comments.py:127`)

| Change |  Delta |      % |          Size | Allocations | Callee   | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | -------- | -------------------------------- |
| -50.0% | -2 MiB | 100.0% | 4 MiB → 2 MiB |       4 → 2 | `prefix` | `./blib2to3/pytree.py:480 → 469` |

##### `_rhs` (`./black/linegen.py:650`)

| Change |  Delta |             % |                Size | Allocations | Callee             | Location                 |
| -----: | -----: | ------------: | ------------------: | ----------: | ------------------ | ------------------------ |
| -99.5% | -1 MiB | 99.9% → 82.9% | 1.01 MiB → 5.29 KiB |       6 → 5 | `right_hand_split` | `./black/linegen.py:809` |

##### `run_transformer` (`./black/linegen.py:1771`)

| Change |  Delta |             % |                Size | Allocations | Callee | Location                 |
| -----: | -----: | ------------: | ------------------: | ----------: | ------ | ------------------------ |
| -99.4% | -1 MiB | 99.8% → 76.5% | 1.01 MiB → 6.38 KiB |       7 → 6 | `_rhs` | `./black/linegen.py:650` |

##### `right_hand_split` (`./black/linegen.py:809`)

| Change |  Delta |             % |                Size | Allocations | Callee                                  | Location                 |
| -----: | -----: | ------------: | ------------------: | ----------: | --------------------------------------- | ------------------------ |
| -99.9% | -1 MiB | 99.6% → 18.5% |     1 MiB → 1,000 B |       2 → 1 | `_maybe_split_omitting_optional_parens` | `./black/linegen.py:932` |
| -16.3% | -274 B |  0.2% → 25.9% | 1.64 KiB → 1.37 KiB |           2 | `_first_right_hand_split`               | `./black/linegen.py:829` |

##### `normalize_invisible_parens` (`./black/linegen.py:1344`)

| Change |  Delta |     % |          Size | Allocations | Callee                | Location                     |
| -----: | -----: | ----: | ------------: | ----------: | --------------------- | ---------------------------- |
| -50.0% | -1 MiB | 99.9% | 2 MiB → 1 MiB |       2 → 1 | `wrap_in_parentheses` | `./black/nodes.py:935 → 930` |

##### `_maybe_split_omitting_optional_parens` (`./black/linegen.py:932`)

|  Change |  Delta |            % |        Size | Allocations | Callee    | Location                                  |
| ------: | -----: | -----------: | ----------: | ----------: | --------- | ----------------------------------------- |
| removed | -1 MiB | 99.9% → 0.0% | 1 MiB → 0 B |       1 → 0 | `replace` | `/usr/lib/python3.11/dataclasses.py:1443` |

##### `contains_unsplittable_type_ignore` (`./black/lines.py:312`)

|  Change |  Delta |             % |        Size | Allocations | Callee      | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | ----------- | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `<genexpr>` | `./black/lines.py:329` |

##### `preceding_leaf` (`./black/nodes.py:436`)

| Change |  Delta |      % |                Size | Allocations | Callee         | Location                         |
| -----: | -----: | -----: | ------------------: | ----------: | -------------- | -------------------------------- |
| -49.1% | -1 MiB | 100.0% | 2.04 MiB → 1.04 MiB |     68 → 67 | `prev_sibling` | `./blib2to3/pytree.py:207 → 196` |

##### `prefix` (`./blib2to3/pytree.py:318`)

| Change |  Delta |      % |          Size | Allocations | Callee   | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | -------- | -------------------------------- |
| -50.0% | -1 MiB | 100.0% | 2 MiB → 1 MiB |       2 → 1 | `prefix` | `./blib2to3/pytree.py:480 → 469` |

##### `_get_module_details` (`<frozen runpy>:105`)

| Change |      Delta |     % |    Size |   Allocations | Callee                | Location                             |
| -----: | ---------: | ----: | ------: | ------------: | --------------------- | ------------------------------------ |
|    ~0% | -1.918 KiB | 99.9% | 4.3 MiB | 1,293 → 1,292 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
|    ~0% | -1.918 KiB | 99.9% | 4.3 MiB | 1,293 → 1,292 | `_get_module_details` | `<frozen runpy>:105`                 |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

| Change |      Delta |      % |    Size |   Allocations | Callee                    | Location                             |
| -----: | ---------: | -----: | ------: | ------------: | ------------------------- | ------------------------------------ |
|    ~0% | -1.918 KiB | 100.0% | 4.3 MiB | 1,291 → 1,290 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

| Change |      Delta |      % |    Size |   Allocations | Callee           | Location                            |
| -----: | ---------: | -----: | ------: | ------------: | ---------------- | ----------------------------------- |
|    ~0% | -1.918 KiB | 100.0% | 4.3 MiB | 1,290 → 1,289 | `_load_unlocked` | `<frozen importlib._bootstrap>:666` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

| Change |      Delta |      % |    Size |   Allocations | Callee        | Location                                     |
| -----: | ---------: | -----: | ------: | ------------: | ------------- | -------------------------------------------- |
|    ~0% | -1.918 KiB | 100.0% | 4.3 MiB | 1,288 → 1,287 | `exec_module` | `<frozen importlib._bootstrap_external>:934` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

| Change |     Delta |     % |     Size | Allocations | Callee                      | Location                                      |
| -----: | --------: | ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
|    ~0% | -1.46 KiB | 99.3% | 4.27 MiB |       1,258 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|    ~0% |    -213 B | 59.4% | 2.55 MiB |   619 → 618 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `run_module` (`<frozen runpy>:201`)

| Change |      Delta |     % |     Size |   Allocations | Callee                | Location             |
| -----: | ---------: | ----: | -------: | ------------: | --------------------- | -------------------- |
|    ~0% | -1.918 KiB |  5.5% | 4.31 MiB | 1,300 → 1,299 | `_get_module_details` | `<frozen runpy>:105` |
|    ~0% |     +222 B | 94.5% | 74.3 MiB |        21,395 | `_run_module_code`    | `<frozen runpy>:91`  |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |      Delta |           % |                Size | Allocations | Callee     | Location                |
| -----: | ---------: | ----------: | ------------------: | ----------: | ---------- | ----------------------- |
|  -1.2% | -1.703 KiB |        3.2% |   142 KiB → 140 KiB |         139 | `<module>` | `./black/linegen.py:1`  |
|  -5.3% | -1.703 KiB |        0.7% |   32 KiB → 30.3 KiB |          32 | `<module>` | `./black/trans.py:1`    |
|    ~0% |  -1.46 KiB |      100.0% |            4.27 MiB |       1,258 | `<module>` | `./black/__init__.py:1` |
|  +2.2% |     +837 B | 0.8% → 0.9% | 36.9 KiB → 37.8 KiB |          41 | `<module>` | `./black/cache.py:1`    |
|  +0.3% |     +794 B | 6.0% → 6.1% |   264 KiB → 265 KiB |   235 → 236 | `<module>` | `./black/files.py:1`    |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

| Change |  Delta |      % |     Size | Allocations | Callee              | Location                                     |
| -----: | -----: | -----: | -------: | ----------: | ------------------- | -------------------------------------------- |
|    ~0% | -213 B | 100.0% | 2.55 MiB |   619 → 618 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

| Change | Delta |      % |     Size | Allocations | Callee                      | Location                            |
| -----: | ----: | -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
|    ~0% |  -8 B | 100.0% | 1.31 MiB |         319 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes held at peak memory in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|   Change |  Delta |            % |                Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------: | -----: | -----------: | ------------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      new | +3 MiB |  0.0% → 3.8% |         0 B → 3 MiB |       0 → 3 | `_stringify_ast` (`./black/parsing.py:182`) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `assert_equivalent` (`./black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|      new | +2 MiB |  0.0% → 2.5% |         0 B → 2 MiB |       0 → 2 | `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`) ← `__next__` (`./blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +100.0% | +1 MiB |  1.3% → 2.5% |       1 MiB → 2 MiB |       1 → 2 | `__new__` (`./blib2to3/pytree.py:70`) ← `convert` (475) ← `pop` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +3792.6% | +1 MiB | <0.1% → 1.3% |   27 KiB → 1.03 MiB |     36 → 37 | `mark` (`./black/brackets.py:70`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| +1899.0% | +1 MiB |  0.1% → 1.3% | 53.9 KiB → 1.05 MiB |     84 → 85 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `prev_siblings_are` (`./black/nodes.py:454`) ← `is_docstring` (553) ← `visit_STRING` (`./black/linegen.py:413`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +2791.3% | +1 MiB | <0.1% → 1.3% | 36.7 KiB → 1.04 MiB |     41 → 42 | `_stringify_ast` (`./black/parsing.py:182`) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `assert_equivalent` (`./black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|      new | +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `_parse` (`/usr/lib/python3.11/re/_parser.py:507`) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `parse` (970) ← `compile` (`/usr/lib/python3.11/re/_compiler.py:738`) ← `_compile` (`/usr/lib/python3.11/re/__init__.py:272`) ← `compile` (225) ← `<module>` (`./blib2to3/pgen2/tokenize.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./blib2to3/pgen2/driver.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`./blib2to3/pygram.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`./black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105) |
|      new | +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `_addtoken` (`./blib2to3/pgen2/parse.py:278`) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|      new | +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `push` (`./blib2to3/pgen2/parse.py:374`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|      new | +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                           |
|      new | +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                       |
|      new | +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `prefix` (`./blib2to3/pytree.py:469`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|      new | +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `changed` (`./blib2to3/pytree.py:160`) ← `changed` (160) ← `prefix` (469) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                             |
|      new | +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit_NUMBER` (505) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|      new | +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `__str__` (`./blib2to3/pytree.py:429`) ← `__str__` (`./black/lines.py:479`) ← `line_to_string` (1062) ← `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|      new | +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|      new | +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `__init__` (`<string>:2`) ← `line` (`./black/linegen.py:109`) ← `visit_INDENT` (179) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|      new | +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|      new | +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `changed` (`./blib2to3/pytree.py:160`) ← `changed` (160) ← `prefix` (469) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|      new | +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `changed` (`./blib2to3/pytree.py:160`) ← `changed` (160) ← `prefix` (469) ← `prefix` (318) ← `prefix` (318) ← `prefix` (318) ← `wrap_in_parentheses` (`./black/nodes.py:930`) ← `normalize_invisible_parens` (`./black/linegen.py:1344`) ← `visit_stmt` (199) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Improvements

Call stacks with the largest decrease in bytes held at peak memory in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|  Change |  Delta |           % |          Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------: | -----: | ----------: | ------------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -50.0% | -3 MiB | 7.6% → 3.8% | 6 MiB → 3 MiB |       6 → 3 | `__new__` (`./blib2to3/pytree.py:70`) ← `convert` (475) ← `shift` (`./blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -66.7% | -2 MiB | 3.8% → 1.3% | 3 MiB → 1 MiB |       3 → 1 | `_stringify_ast` (`./black/parsing.py:182`) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `assert_equivalent` (`./black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed | -1 MiB | 1.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `parse` (970) ← `compile` (`/usr/lib/python3.11/re/_compiler.py:738`) ← `_compile` (`/usr/lib/python3.11/re/__init__.py:272`) ← `compile` (225) ← `<module>` (`./blib2to3/pgen2/tokenize.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./blib2to3/pgen2/driver.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`./blib2to3/pygram.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`./black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105) |
|  -50.0% | -1 MiB | 2.5% → 1.3% | 2 MiB → 1 MiB |       2 → 1 | `pop` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed | -1 MiB | 1.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__init__` (`./blib2to3/pytree.py:400`) ← `convert` (486) ← `shift` (`./blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -49.9% | -1 MiB | 2.5% → 1.3% | 2 MiB → 1 MiB |       5 → 4 | `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed | -1 MiB | 1.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `<genexpr>` (`./black/lines.py:329`) ← `contains_unsplittable_type_ignore` (312) ← `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed | -1 MiB | 1.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                 |
| removed | -1 MiB | 1.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `update_sibling_maps` (`./blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `preceding_leaf` (`./black/nodes.py:441`) ← `whitespace` (194) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed | -1 MiB | 1.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed | -1 MiB | 1.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `replace` (`/usr/lib/python3.11/dataclasses.py:1443`) ← `_maybe_split_omitting_optional_parens` (`./black/linegen.py:932`) ← `right_hand_split` (809) ← `_rhs` (650) ← `run_transformer` (1755) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed | -1 MiB | 1.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `visit_default` (`./black/nodes.py:187`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed | -1 MiB | 1.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed | -1 MiB | 1.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `changed` (171) ← `changed` (171) ← `changed` (171) ← `prefix` (480) ← `prefix` (329) ← `prefix` (329) ← `prefix` (329) ← `wrap_in_parentheses` (`./black/nodes.py:935`) ← `normalize_invisible_parens` (`./black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -1 MiB | 1.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `changed` (171) ← `prefix` (480) ← `prefix` (329) ← `wrap_in_parentheses` (`./black/nodes.py:935`) ← `normalize_invisible_parens` (`./black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed | -1 MiB | 1.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -1 MiB | 1.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__str__` (`./black/lines.py:490`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed | -1 MiB | 1.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed | -1 MiB | 1.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                             |
| removed | -1 MiB | 1.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `update_sibling_maps` (`./blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`./black/nodes.py:194`) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

# Leaked memory profile diff

Leaked 59.9 MiB (-1.702 KiB, ~0%) over 22,502 → 22,501 allocations (2.73 KiB per allocation).

| Category         | Change |          Delta |             % |                Size |     Allocations |
| ---------------- | -----: | -------------: | ------------: | ------------------: | --------------: |
| Ours             |  +1.9% | +1,021.603 KiB | 86.5% → 88.2% | 51.8 MiB → 52.8 MiB | 21,382 → 21,383 |
| Standard library | -12.8% | -1,023.473 KiB | 13.1% → 11.4% | 7.83 MiB → 6.83 MiB |       890 → 888 |
| Third-party      |  +0.1% |         +172 B |          0.4% |             237 KiB |             230 |

Paths starting with `./` or `../` are relative to `/src/black/src/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── 59.9 MiB (100.0%) _run_tracker at /venv/lib/python3.11/site-packages/memray/commands/run.py:40
    └── 59.9 MiB (100.0%) run_module at <frozen runpy>:201
        ├── … 55.6 MiB (92.8%) format_file_contents at ./black/__init__.py:1054 → 1059
        │   ├── 36.1 MiB → 35.1 MiB (60.2% → 58.6%) format_str at 1189 → 1168
        │   │   └── 36.1 MiB → 35.1 MiB (60.2% → 58.6%) _format_str_once at 1236 → 1215
        │   │       ├── 17 MiB → 20 MiB (28.4% → 33.4%, self 1.7% → <0.1%) visit at ./black/nodes.py:163 → 152
        │   │       │   ├── … 14 MiB → 13 MiB (23.4% → 21.7%, self 5.0% → 3.3%, self 5.0% → 6.7% globally) visit_default at ./black/linegen.py:134
        │   │       │   │   ├── 5 MiB → 9 MiB (8.4% → 15.0%, self <0.1% → 3.3%) append at ./black/lines.py:63 → 52
        │   │       │   │   │   ├── 3 MiB → 4 MiB (5.0% → 6.7%) whitespace at ./black/nodes.py:194 → 183
        │   │       │   │   │   │   ├── 1 MiB → 3 MiB (1.7% → 5.0%) prev_sibling at ./blib2to3/pytree.py:207 → 196
        │   │       │   │   │   │   │   └── 1 MiB → 3 MiB (1.7% → 5.0%, self 5.2% → 8.6% globally) update_sibling_maps at 369 → 358
        │   │       │   │   │   │   └── 2 MiB → 1 MiB (3.3% → 1.7%) preceding_leaf at 441 → 436 …
        │   │       │   │   │   ├── 1 MiB → 2 MiB (1.7% → 3.3%) mark at ./black/brackets.py:70
        │   │       │   │   │   └── 1 MiB (1.7%) prefix at ./blib2to3/pytree.py:480 → 469
        │   │       │   │   ├── 5 MiB → 2 MiB (8.3% → 3.3%, self 1.7% → 0.0%, self 1.7% globally) generate_comments at ./black/comments.py:52
        │   │       │   │   │   └── … 4 MiB → 2 MiB (6.7% → 3.3%, self 10.0% → 5.0% globally) changed at ./blib2to3/pytree.py:171 → 160
        │   │       │   │   └── 1 MiB → 0 B (1.7% → 0.0%) visit_default at ./black/nodes.py:187 → 176
        │   │       │   └── 2.02 MiB → 7.02 MiB (3.4% → 11.7%) 7 more callees, led by (3.3% → 1.7%) visit_stmt at ./black/linegen.py:199
        │   │       ├── … 12 MiB (20.1%) parse_tokens at ./blib2to3/pgen2/driver.py:114
        │   │       │   ├── 12 MiB → 10 MiB (20.0% → 16.7%) addtoken at ./blib2to3/pgen2/parse.py:242 → 230
        │   │       │   │   └── 12 MiB → 10 MiB (20.0% → 16.7%, self 0.0% → 1.7%) _addtoken at 290 → 278
        │   │       │   │       ├── 7 MiB → 3 MiB (11.7% → 5.0%) shift at 373 → 361
        │   │       │   │       │   └── 7 MiB → 3 MiB (11.7% → 5.0%, self 1.7% globally) convert at ./blib2to3/pytree.py:486 → 475
        │   │       │   │       │       ├── 6 MiB → 3 MiB (10.0% → 5.0%, self 11.7% → 8.3% globally) __new__ at 81 → 70
        │   │       │   │       │       └── 1 MiB → 0 B (1.7% → 0.0%) __init__ at 400
        │   │       │   │       └── 5 MiB → 6 MiB (8.3% → 10.0%) 2 more callees, led by (8.3%) pop at 398 → 386
        │   │       │   └── 8.27 KiB → 2.01 MiB (<0.1% → 3.4%) __next__ at 80
        │   │       │       └── 0 B → 2 MiB (0.0% → 3.3%) generate_tokens at ./blib2to3/pgen2/tokenize.py:554
        │   │       └── 7.04 MiB → 3.04 MiB (11.7% → 5.1%) 7 more callees, led by (8.4% → 5.0%) transform_line at ./black/linegen.py:601
        │   └── 19.5 MiB → 20.5 MiB (32.6% → 34.2%) check_stability_and_equivalence at 1037 → 1042
        │       ├── … 15.4 MiB (25.7%) visit at ./black/nodes.py:163 → 152
        │       │   ├── … 14.2 MiB (23.7%, self 27.1% → 28.8% globally) mark at ./black/brackets.py:70
        │       │   └── 1.15 MiB (1.9%) 2 more callees, led by (1.1%) visit_STRING at ./black/linegen.py:413
        │       └── 4.01 MiB → 5.01 MiB (6.7% → 8.4%) assert_equivalent at 1524 → 1510 …
        └── … 4.26 MiB → 4.25 MiB (7.1%) exec_module at <frozen importlib._bootstrap_external>:934
            ├── 2.55 MiB (4.3%) get_code at 1007 …
            └── 1.7 MiB (2.8%) _call_with_frames_removed at <frozen importlib._bootstrap>:233
                ├── … 1 MiB (1.7%, self 0.0% → 1.7%) _parse at /usr/lib/python3.11/re/_parser.py:507
                │   └── 1 MiB → 0 B (1.7% → 0.0%) __getitem__ at 162
                └── 686 KiB → 684 KiB (1.1%) 70 more callees, led by (0.2%) <module> at ./black/nodes.py:1
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes never freed within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|    Change |      Delta |             % |                Size |     Allocations | Function                          | Location                                                    |
| --------: | ---------: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------------------------------------- |
| +32820.8% |     +2 MiB |  <0.1% → 3.3% | 6.24 KiB → 2.01 MiB |           4 → 6 | `append`                          | `./black/lines.py:63 → 52`                                  |
|    +63.7% |     +2 MiB |   5.2% → 8.6% | 3.14 MiB → 5.14 MiB |       198 → 200 | `update_sibling_maps`             | `./blib2to3/pytree.py:369 → 358`                            |
|       new |     +2 MiB |   0.0% → 3.3% |         0 B → 2 MiB |           0 → 2 | `generate_tokens`                 | `./blib2to3/pgen2/tokenize.py:554`                          |
| +18255.2% |     +1 MiB |  <0.1% → 1.7% | 5.61 KiB → 1.01 MiB |           3 → 4 | `_parse`                          | `/usr/lib/python3.11/re/_parser.py:507`                     |
|       new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `_addtoken`                       | `./blib2to3/pgen2/parse.py:290 → 278`                       |
|    +33.3% |     +1 MiB |   5.0% → 6.7% |       3 MiB → 4 MiB |           4 → 5 | `visit_default`                   | `./black/linegen.py:134`                                    |
|     +6.2% |     +1 MiB | 27.1% → 28.8% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                            | `./black/brackets.py:70`                                    |
|   +100.0% |     +1 MiB |   1.7% → 3.3% |       1 MiB → 2 MiB |           1 → 2 | `__init__`                        | `<string>:2`                                                |
|   +100.0% |     +1 MiB |   1.7% → 3.3% |       1 MiB → 2 MiB |           1 → 2 | `_stringify_ast`                  | `./black/parsing.py:174 → 182`                              |
|       new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `push`                            | `./blib2to3/pgen2/parse.py:374`                             |
|       new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `__str__`                         | `./blib2to3/pytree.py:429`                                  |
|    +22.0% | +1.484 KiB |         <0.1% | 6.73 KiB → 8.22 KiB |           8 → 9 | `__setattr__`                     | `/usr/lib/python3.11/enum.py:831`                           |
|     +5.5% |     +172 B |         <0.1% | 3.04 KiB → 3.21 KiB |               2 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |
|     +3.3% |     +104 B |         <0.1% |  3.1 KiB → 3.21 KiB |               4 | `_format_str_once`                | `./black/__init__.py:1236 → 1215`                           |
|     +5.5% |      +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `./black/cache.py:50`                                       |
|    +10.1% |      +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`                           |

##### Ours

|    Change |  Delta |             % |                Size |     Allocations | Function                          | Location                              |
| --------: | -----: | ------------: | ------------------: | --------------: | --------------------------------- | ------------------------------------- |
| +32820.8% | +2 MiB |  <0.1% → 3.3% | 6.24 KiB → 2.01 MiB |           4 → 6 | `append`                          | `./black/lines.py:63 → 52`            |
|    +63.7% | +2 MiB |   5.2% → 8.6% | 3.14 MiB → 5.14 MiB |       198 → 200 | `update_sibling_maps`             | `./blib2to3/pytree.py:369 → 358`      |
|       new | +2 MiB |   0.0% → 3.3% |         0 B → 2 MiB |           0 → 2 | `generate_tokens`                 | `./blib2to3/pgen2/tokenize.py:554`    |
|       new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `_addtoken`                       | `./blib2to3/pgen2/parse.py:290 → 278` |
|    +33.3% | +1 MiB |   5.0% → 6.7% |       3 MiB → 4 MiB |           4 → 5 | `visit_default`                   | `./black/linegen.py:134`              |
|     +6.2% | +1 MiB | 27.1% → 28.8% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                            | `./black/brackets.py:70`              |
|   +100.0% | +1 MiB |   1.7% → 3.3% |       1 MiB → 2 MiB |           1 → 2 | `__init__`                        | `<string>:2`                          |
|   +100.0% | +1 MiB |   1.7% → 3.3% |       1 MiB → 2 MiB |           1 → 2 | `_stringify_ast`                  | `./black/parsing.py:174 → 182`        |
|       new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `push`                            | `./blib2to3/pgen2/parse.py:374`       |
|       new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `__str__`                         | `./blib2to3/pytree.py:429`            |
|     +3.3% | +104 B |         <0.1% |  3.1 KiB → 3.21 KiB |               4 | `_format_str_once`                | `./black/__init__.py:1236 → 1215`     |
|     +5.5% |  +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `./black/cache.py:50`                 |
|    +10.1% |  +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`     |

##### Standard library

|    Change |      Delta |            % |                Size | Allocations | Function      | Location                                |
| --------: | ---------: | -----------: | ------------------: | ----------: | ------------- | --------------------------------------- |
| +18255.2% |     +1 MiB | <0.1% → 1.7% | 5.61 KiB → 1.01 MiB |       3 → 4 | `_parse`      | `/usr/lib/python3.11/re/_parser.py:507` |
|    +22.0% | +1.484 KiB |        <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__` | `/usr/lib/python3.11/enum.py:831`       |

#### Improvements

Functions with the largest decrease in bytes never freed within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |      Delta |            % |                Size | Allocations | Function                  | Location                                     |
| ------: | ---------: | -----------: | ------------------: | ----------: | ------------------------- | -------------------------------------------- |
|  -50.0% |     -3 MiB | 10.0% → 5.0% |       6 MiB → 3 MiB |       6 → 3 | `changed`                 | `./blib2to3/pytree.py:171 → 160`             |
|  -28.6% |     -2 MiB | 11.7% → 8.3% |       7 MiB → 5 MiB |       7 → 5 | `__new__`                 | `./blib2to3/pytree.py:81 → 70`               |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__getitem__`             | `/usr/lib/python3.11/re/_parser.py:162`      |
|  -50.0% |     -1 MiB |  3.3% → 1.7% |       2 MiB → 1 MiB |       2 → 1 | `pop`                     | `./blib2to3/pgen2/parse.py:398 → 386`        |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                | `./blib2to3/pytree.py:400`                   |
|  -99.7% |     -1 MiB | 1.7% → <0.1% |    1 MiB → 3.35 KiB |       5 → 4 | `visit`                   | `./black/nodes.py:163 → 152`                 |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `visit_default`           | `./black/nodes.py:187 → 176`                 |
|  -49.0% |     -1 MiB |  3.4% → 1.7% | 2.04 MiB → 1.04 MiB |       8 → 7 | `transform_line`          | `./black/linegen.py:601`                     |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `<genexpr>`               | `./black/lines.py:329`                       |
|  -50.0% |     -1 MiB |  3.3% → 1.7% |       2 MiB → 1 MiB |       2 → 1 | `__str__`                 | `./black/lines.py:490 → 479`                 |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `replace`                 | `/usr/lib/python3.11/dataclasses.py:1443`    |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                | `./black/trans.py:1`                         |
|   -3.1% |     -768 B |        <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`                 | `/usr/lib/python3.11/enum.py:488`            |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                | `./black/ranges.py:1`                        |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split` | `./black/linegen.py:829`                     |
|     ~0% |     -213 B |         4.3% |            2.55 MiB |   619 → 618 | `_compile_bytecode`       | `<frozen importlib._bootstrap_external>:727` |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                | `./blib2to3/pgen2/tokenize.py:1`             |

##### Ours

|  Change |      Delta |            % |                Size | Allocations | Function                  | Location                              |
| ------: | ---------: | -----------: | ------------------: | ----------: | ------------------------- | ------------------------------------- |
|  -50.0% |     -3 MiB | 10.0% → 5.0% |       6 MiB → 3 MiB |       6 → 3 | `changed`                 | `./blib2to3/pytree.py:171 → 160`      |
|  -28.6% |     -2 MiB | 11.7% → 8.3% |       7 MiB → 5 MiB |       7 → 5 | `__new__`                 | `./blib2to3/pytree.py:81 → 70`        |
|  -50.0% |     -1 MiB |  3.3% → 1.7% |       2 MiB → 1 MiB |       2 → 1 | `pop`                     | `./blib2to3/pgen2/parse.py:398 → 386` |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                | `./blib2to3/pytree.py:400`            |
|  -99.7% |     -1 MiB | 1.7% → <0.1% |    1 MiB → 3.35 KiB |       5 → 4 | `visit`                   | `./black/nodes.py:163 → 152`          |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `visit_default`           | `./black/nodes.py:187 → 176`          |
|  -49.0% |     -1 MiB |  3.4% → 1.7% | 2.04 MiB → 1.04 MiB |       8 → 7 | `transform_line`          | `./black/linegen.py:601`              |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `<genexpr>`               | `./black/lines.py:329`                |
|  -50.0% |     -1 MiB |  3.3% → 1.7% |       2 MiB → 1 MiB |       2 → 1 | `__str__`                 | `./black/lines.py:490 → 479`          |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                | `./black/trans.py:1`                  |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                | `./black/ranges.py:1`                 |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split` | `./black/linegen.py:829`              |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                | `./blib2to3/pgen2/tokenize.py:1`      |

##### Standard library

|  Change |  Delta |           % |                Size | Allocations | Function            | Location                                     |
| ------: | -----: | ----------: | ------------------: | ----------: | ------------------- | -------------------------------------------- |
| removed | -1 MiB | 1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__getitem__`       | `/usr/lib/python3.11/re/_parser.py:162`      |
| removed | -1 MiB | 1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `replace`           | `/usr/lib/python3.11/dataclasses.py:1443`    |
|   -3.1% | -768 B |       <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`           | `/usr/lib/python3.11/enum.py:488`            |
|     ~0% | -213 B |        4.3% |            2.55 MiB |   619 → 618 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `append` (`./black/lines.py:52`)

|     Change |  Delta |            % |             Size | Allocations | Location                   |
| ---------: | -----: | -----------: | ---------------: | ----------: | -------------------------- |
| +187916.8% | +1 MiB | 8.7% → 49.9% |    558 B → 1 MiB |       1 → 2 | `./black/lines.py:97 → 86` |
|        new | +1 MiB | 0.0% → 49.8% |      0 B → 1 MiB |       0 → 1 | `./black/lines.py:91`      |
|      +2.3% |  +96 B | 64.1% → 0.2% | 4 KiB → 4.09 KiB |           1 | `./black/lines.py:89 → 78` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

|   Change |  Delta |             % |                Size | Allocations | Location                         |
| -------: | -----: | ------------: | ------------------: | ----------: | -------------------------------- |
| +4370.0% | +3 MiB |  2.2% → 59.7% | 70.3 KiB → 3.07 MiB |     93 → 96 | `./blib2to3/pytree.py:377 → 366` |
|  removed | -1 MiB |  31.8% → 0.0% |         1 MiB → 0 B |       1 → 0 | `./blib2to3/pytree.py:371`       |
|   +93.6% | +1 MiB | 34.0% → 40.2% | 1.07 MiB → 2.07 MiB |     94 → 95 | `./blib2to3/pytree.py:376 → 365` |
|   -99.5% | -1 MiB |  32.0% → 0.1% |    1 MiB → 4.99 KiB |      10 → 9 | `./blib2to3/pytree.py:379 → 368` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

| Change |  Delta |            % |        Size | Allocations | Location                           |
| -----: | -----: | -----------: | ----------: | ----------: | ---------------------------------- |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pgen2/tokenize.py:603` |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pgen2/tokenize.py:694` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

| Change |  Delta |            % |        Size | Allocations | Location                                |
| -----: | -----: | -----------: | ----------: | ----------: | --------------------------------------- |
|    new | +1 MiB | 0.0% → 99.5% | 0 B → 1 MiB |       0 → 1 | `/usr/lib/python3.11/re/_parser.py:548` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

| Change |  Delta |             % |        Size | Allocations | Location                        |
| -----: | -----: | ------------: | ----------: | ----------: | ------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pgen2/parse.py:303` |

##### `visit_default` (`./black/linegen.py:134`)

|  Change |  Delta |              % |          Size | Allocations | Location                 |
| ------: | -----: | -------------: | ------------: | ----------: | ------------------------ |
| +100.0% | +2 MiB | 66.7% → 100.0% | 2 MiB → 4 MiB |       2 → 4 | `./black/linegen.py:158` |
| removed | -1 MiB |   33.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `./black/linegen.py:138` |

##### `mark` (`./black/brackets.py:70`)

| Change |  Delta |      % |                Size |     Allocations | Location                  |
| -----: | -----: | -----: | ------------------: | --------------: | ------------------------- |
|  +6.2% | +1 MiB | 100.0% | 16.2 MiB → 17.2 MiB | 20,787 → 20,788 | `./black/brackets.py:112` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |             % |        Size | Allocations | Location     |
| ------: | -----: | ------------: | ----------: | ----------: | ------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `<string>:6` |
|     new | +1 MiB |  0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `<string>:5` |
|     new | +1 MiB |  0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `<string>:8` |

##### `_stringify_ast` (`./black/parsing.py:182`)

|  Change |  Delta |             % |        Size | Allocations | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./black/parsing.py:197` |
|     new | +1 MiB |  0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `./black/parsing.py:193` |
|     new | +1 MiB |  0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `./black/parsing.py:248` |

##### `push` (`./blib2to3/pgen2/parse.py:374`)

| Change |  Delta |             % |        Size | Allocations | Location                        |
| -----: | -----: | ------------: | ----------: | ----------: | ------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pgen2/parse.py:382` |

##### `__str__` (`./blib2to3/pytree.py:429`)

| Change |  Delta |             % |        Size | Allocations | Location                   |
| -----: | -----: | ------------: | ----------: | ----------: | -------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pytree.py:435` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

| Change |      Delta |      % |                Size | Allocations | Location                          |
| -----: | ---------: | -----: | ------------------: | ----------: | --------------------------------- |
| +22.0% | +1.484 KiB | 100.0% | 6.73 KiB → 8.22 KiB |       8 → 9 | `/usr/lib/python3.11/enum.py:842` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

| Change |  Delta |      % |                Size | Allocations | Location                                                    |
| -----: | -----: | -----: | ------------------: | ----------: | ----------------------------------------------------------- |
|  +5.5% | +172 B | 100.0% | 3.04 KiB → 3.21 KiB |           2 | `/venv/lib/python3.11/site-packages/click/decorators.py:34` |

##### `_format_str_once` (`./black/__init__.py:1215`)

| Change |  Delta |             % |          Size | Allocations | Location                          |
| -----: | -----: | ------------: | ------------: | ----------: | --------------------------------- |
| +13.0% | +104 B | 25.2% → 27.5% | 800 B → 904 B |           1 | `./black/__init__.py:1239 → 1218` |

##### `get_cache_file` (`./black/cache.py:50`)

| Change | Delta |      % |                Size | Allocations | Location              |
| -----: | ----: | -----: | ------------------: | ----------: | --------------------- |
|  +5.5% | +64 B | 100.0% | 1.13 KiB → 1.19 KiB |           1 | `./black/cache.py:51` |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

| Change | Delta |      % |          Size | Allocations | Location                          |
| -----: | ----: | -----: | ------------: | ----------: | --------------------------------- |
| +10.1% | +60 B | 100.0% | 594 B → 654 B |           1 | `./black/__init__.py:1050 → 1055` |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |             % |          Size | Allocations | Location                         |
| -----: | -----: | ------------: | ------------: | ----------: | -------------------------------- |
| -75.0% | -3 MiB | 66.7% → 33.3% | 4 MiB → 1 MiB |       4 → 1 | `./blib2to3/pytree.py:176 → 165` |

##### `__new__` (`./blib2to3/pytree.py:70`)

| Change |  Delta |      % |          Size | Allocations | Location                       |
| -----: | -----: | -----: | ------------: | ----------: | ------------------------------ |
| -28.6% | -2 MiB | 100.0% | 7 MiB → 5 MiB |       7 → 5 | `./blib2to3/pytree.py:84 → 73` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`)

|  Change |  Delta |             % |        Size | Allocations | Location                                |
| ------: | -----: | ------------: | ----------: | ----------: | --------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `/usr/lib/python3.11/re/_parser.py:164` |

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

| Change |  Delta |      % |          Size | Allocations | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ------------------------------------- |
| -50.0% | -1 MiB | 100.0% | 2 MiB → 1 MiB |       2 → 1 | `./blib2to3/pgen2/parse.py:408 → 396` |

##### `__init__` (`./blib2to3/pytree.py:400`)

|  Change |  Delta |             % |        Size | Allocations | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | -------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pytree.py:425` |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |             % |          Size | Allocations | Location                     |
| -----: | -----: | ------------: | ------------: | ----------: | ---------------------------- |
| -99.9% | -1 MiB | 99.7% → 20.1% | 1 MiB → 690 B |       2 → 1 | `./black/nodes.py:185 → 174` |

##### `visit_default` (`./black/nodes.py:176`)

|  Change |  Delta |             % |        Size | Allocations | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./black/nodes.py:191` |

##### `transform_line` (`./black/linegen.py:601`)

| Change |  Delta |            % |          Size | Allocations | Location                 |
| -----: | -----: | -----------: | ------------: | ----------: | ------------------------ |
| -99.9% | -1 MiB | 49.1% → 0.1% | 1 MiB → 910 B |       2 → 1 | `./black/linegen.py:714` |

##### `<genexpr>` (`./black/lines.py:329`)

|  Change |  Delta |             % |        Size | Allocations | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./black/lines.py:329` |

##### `__str__` (`./black/lines.py:479`)

| Change |  Delta |      % |          Size | Allocations | Location                     |
| -----: | -----: | -----: | ------------: | ----------: | ---------------------------- |
| -50.0% | -1 MiB | 100.0% | 2 MiB → 1 MiB |       2 → 1 | `./black/lines.py:500 → 489` |

##### `replace` (`/usr/lib/python3.11/dataclasses.py:1443`)

|  Change |  Delta |             % |        Size | Allocations | Location                                  |
| ------: | -----: | ------------: | ----------: | ----------: | ----------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `/usr/lib/python3.11/dataclasses.py:1484` |

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

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

| Change |  Delta |      % |     Size | Allocations | Location                                     |
| -----: | -----: | -----: | -------: | ----------: | -------------------------------------------- |
|    ~0% | -213 B | 100.0% | 2.55 MiB |   619 → 618 | `<frozen importlib._bootstrap_external>:729` |

##### `<module>` (`./blib2to3/pgen2/tokenize.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location                               |
| ------: | ---------: | -----------: | -------------: | ----------: | -------------------------------------- |
| removed | -3.187 KiB | 15.4% → 0.0% | 3.19 KiB → 0 B |       1 → 0 | `./blib2to3/pgen2/tokenize.py:170`     |
|     new | +3.187 KiB | 0.0% → 15.4% | 0 B → 3.19 KiB |       0 → 1 | `./blib2to3/pgen2/tokenize.py:163`     |
|   -1.3% |       -8 B |         2.8% |  600 B → 592 B |           1 | `./blib2to3/pgen2/tokenize.py:76 → 65` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `append` (`./black/lines.py:52`)

|    Change |  Delta |      % |                Size | Allocations | Caller          | Location                 |
| --------: | -----: | -----: | ------------------: | ----------: | --------------- | ------------------------ |
| +32820.8% | +2 MiB | 100.0% | 6.24 KiB → 2.01 MiB |       4 → 6 | `visit_default` | `./black/linegen.py:134` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

| Change |  Delta |      % |                Size | Allocations | Caller         | Location                         |
| -----: | -----: | -----: | ------------------: | ----------: | -------------- | -------------------------------- |
| +63.7% | +2 MiB | 100.0% | 3.14 MiB → 5.14 MiB |   198 → 200 | `prev_sibling` | `./blib2to3/pytree.py:207 → 196` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

| Change |  Delta |             % |        Size | Allocations | Caller     | Location                        |
| -----: | -----: | ------------: | ----------: | ----------: | ---------- | ------------------------------- |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `__next__` | `./blib2to3/pgen2/driver.py:80` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|    Change |  Delta |      % |                Size | Allocations | Caller       | Location                                |
| --------: | -----: | -----: | ------------------: | ----------: | ------------ | --------------------------------------- |
| +18255.2% | +1 MiB | 100.0% | 5.61 KiB → 1.01 MiB |       3 → 4 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

| Change |  Delta |             % |        Size | Allocations | Caller     | Location                              |
| -----: | -----: | ------------: | ----------: | ----------: | ---------- | ------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `addtoken` | `./blib2to3/pgen2/parse.py:242 → 230` |

##### `visit_default` (`./black/linegen.py:134`)

|     Change |  Delta |              % |          Size | Allocations | Caller         | Location                     |
| ---------: | -----: | -------------: | ------------: | ----------: | -------------- | ---------------------------- |
|     -33.3% | -1 MiB | 100.0% → 50.0% | 3 MiB → 2 MiB |       3 → 2 | `visit`        | `./black/nodes.py:163 → 152` |
| +149369.8% | +1 MiB |  <0.1% → 25.0% | 702 B → 1 MiB |       1 → 2 | `visit_STRING` | `./black/linegen.py:413`     |
|        new | +1 MiB |   0.0% → 25.0% |   0 B → 1 MiB |       0 → 1 | `visit_power`  | `./black/linegen.py:341`     |

##### `mark` (`./black/brackets.py:70`)

| Change |  Delta |      % |                Size |     Allocations | Caller   | Location                   |
| -----: | -----: | -----: | ------------------: | --------------: | -------- | -------------------------- |
|  +6.2% | +1 MiB | 100.0% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `append` | `./black/lines.py:63 → 52` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |             % |        Size | Allocations | Caller      | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ----------- | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `all_lines` | `./black/lines.py:538`   |
|     new | +1 MiB |  0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `line`      | `./black/linegen.py:109` |
|     new | +1 MiB |  0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `__init__`  | `<string>:2`             |

##### `_stringify_ast` (`./black/parsing.py:182`)

|  Change |  Delta |      % |          Size | Allocations | Caller                           | Location                       |
| ------: | -----: | -----: | ------------: | ----------: | -------------------------------- | ------------------------------ |
| +100.0% | +1 MiB | 100.0% | 1 MiB → 2 MiB |       1 → 2 | `_stringify_ast_with_new_parent` | `./black/parsing.py:166 → 174` |

##### `push` (`./blib2to3/pgen2/parse.py:374`)

| Change |  Delta |             % |        Size | Allocations | Caller      | Location                        |
| -----: | -----: | ------------: | ----------: | ----------: | ----------- | ------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `_addtoken` | `./blib2to3/pgen2/parse.py:278` |

##### `__str__` (`./blib2to3/pytree.py:429`)

| Change |  Delta |             % |        Size | Allocations | Caller    | Location               |
| -----: | -----: | ------------: | ----------: | ----------: | --------- | ---------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `__str__` | `./black/lines.py:479` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

| Change |      Delta |             % |                Size | Allocations | Caller    | Location                          |
| -----: | ---------: | ------------: | ------------------: | ----------: | --------- | --------------------------------- |
| +66.0% | +1.484 KiB | 33.4% → 45.4% | 2.25 KiB → 3.73 KiB |       3 → 4 | `__new__` | `/usr/lib/python3.11/enum.py:488` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

| Change |  Delta |      % |                Size | Allocations | Caller   | Location                                               |
| -----: | -----: | -----: | ------------------: | ----------: | -------- | ------------------------------------------------------ |
|  +5.5% | +172 B | 100.0% | 3.04 KiB → 3.21 KiB |           2 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:857` |

##### `_format_str_once` (`./black/__init__.py:1215`)

| Change |  Delta |      % |               Size | Allocations | Caller       | Location                          |
| -----: | -----: | -----: | -----------------: | ----------: | ------------ | --------------------------------- |
|  +3.3% | +104 B | 100.0% | 3.1 KiB → 3.21 KiB |           4 | `format_str` | `./black/__init__.py:1189 → 1168` |

##### `get_cache_file` (`./black/cache.py:50`)

| Change | Delta |      % |                Size | Allocations | Caller | Location              |
| -----: | ----: | -----: | ------------------: | ----------: | ------ | --------------------- |
|  +5.5% | +64 B | 100.0% | 1.13 KiB → 1.19 KiB |           1 | `read` | `./black/cache.py:60` |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

| Change | Delta |      % |          Size | Allocations | Caller                 | Location                          |
| -----: | ----: | -----: | ------------: | ----------: | ---------------------- | --------------------------------- |
| +10.1% | +60 B | 100.0% | 594 B → 654 B |           1 | `format_file_contents` | `./black/__init__.py:1054 → 1059` |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |      % |          Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | --------- | -------------------------------- |
| -50.0% | -3 MiB | 100.0% | 6 MiB → 3 MiB |       6 → 3 | `changed` | `./blib2to3/pytree.py:171 → 160` |

##### `__new__` (`./blib2to3/pytree.py:70`)

| Change |  Delta |      % |          Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | --------- | -------------------------------- |
| -28.6% | -2 MiB | 100.0% | 7 MiB → 5 MiB |       7 → 5 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`)

|  Change |  Delta |             % |        Size | Allocations | Caller   | Location                                |
| ------: | -----: | ------------: | ----------: | ----------: | -------- | --------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

| Change |  Delta |      % |          Size | Allocations | Caller      | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ----------- | ------------------------------------- |
| -50.0% | -1 MiB | 100.0% | 2 MiB → 1 MiB |       2 → 1 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `__init__` (`./blib2to3/pytree.py:400`)

|  Change |  Delta |             % |        Size | Allocations | Caller    | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | --------- | -------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `convert` | `./blib2to3/pytree.py:486` |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |             % |             Size | Allocations | Caller          | Location                     |
| -----: | -----: | ------------: | ---------------: | ----------: | --------------- | ---------------------------- |
| -99.7% | -1 MiB | 99.9% → 79.9% | 1 MiB → 2.68 KiB |       4 → 3 | `visit_default` | `./black/nodes.py:187 → 176` |

##### `visit_default` (`./black/nodes.py:176`)

|  Change |  Delta |             % |        Size | Allocations | Caller          | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | --------------- | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `visit_default` | `./black/linegen.py:134` |

##### `transform_line` (`./black/linegen.py:601`)

| Change |  Delta |      % |                Size | Allocations | Caller             | Location                          |
| -----: | -----: | -----: | ------------------: | ----------: | ------------------ | --------------------------------- |
| -49.0% | -1 MiB | 100.0% | 2.04 MiB → 1.04 MiB |       8 → 7 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |

##### `<genexpr>` (`./black/lines.py:329`)

|  Change |  Delta |             % |        Size | Allocations | Caller                              | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | ----------------------------------- | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `contains_unsplittable_type_ignore` | `./black/lines.py:312` |

##### `__str__` (`./black/lines.py:479`)

|  Change |  Delta |            % |        Size | Allocations | Caller             | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | ------------------ | -------------------------- |
| removed | -1 MiB | 50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_format_str_once` | `./black/__init__.py:1236` |

##### `replace` (`/usr/lib/python3.11/dataclasses.py:1443`)

|  Change |  Delta |             % |        Size | Allocations | Caller                                  | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | --------------------------------------- | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_maybe_split_omitting_optional_parens` | `./black/linegen.py:932` |

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

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

| Change |  Delta |      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -----: | -----: | -------: | ----------: | ---------- | --------------------------------------------- |
|    ~0% | -213 B | 100.0% | 2.55 MiB |   619 → 618 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `<module>` (`./blib2to3/pgen2/tokenize.py:1`)

| Change | Delta |      % |     Size | Allocations | Caller                      | Location                            |
| -----: | ----: | -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
|    ~0% |  -8 B | 100.0% | 20.7 KiB |          14 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

### Total size

#### Regressions

Functions with the largest increase in bytes never freed within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Ours

|    Change |  Delta |             % |                Size |     Allocations | Function                          | Location                           |
| --------: | -----: | ------------: | ------------------: | --------------: | --------------------------------- | ---------------------------------- |
|    +19.7% | +4 MiB | 33.9% → 40.5% | 20.3 MiB → 24.3 MiB | 20,885 → 20,889 | `append`                          | `./black/lines.py:63 → 52`         |
|     +9.2% | +3 MiB | 54.2% → 59.2% | 32.4 MiB → 35.4 MiB | 21,083 → 21,086 | `visit`                           | `./black/nodes.py:163 → 152`       |
|     +9.2% | +3 MiB | 54.2% → 59.2% | 32.4 MiB → 35.4 MiB | 21,081 → 21,084 | `visit_default`                   | `./black/nodes.py:187 → 176`       |
|     +9.2% | +3 MiB | 54.2% → 59.2% | 32.4 MiB → 35.4 MiB | 21,081 → 21,084 | `visit_default`                   | `./black/linegen.py:134`           |
|     +9.3% | +3 MiB | 53.7% → 58.7% | 32.2 MiB → 35.2 MiB | 20,710 → 20,713 | `visit_stmt`                      | `./black/linegen.py:199`           |
|     +9.5% | +3 MiB | 53.0% → 58.0% | 31.7 MiB → 34.7 MiB | 20,143 → 20,146 | `visit_suite`                     | `./black/linegen.py:288`           |
|     +9.4% | +3 MiB | 53.1% → 58.1% | 31.8 MiB → 34.8 MiB | 20,269 → 20,272 | `visit_funcdef`                   | `./black/linegen.py:254`           |
| +24771.5% | +2 MiB |  <0.1% → 3.4% | 8.27 KiB → 2.01 MiB |           1 → 3 | `__next__`                        | `./blib2to3/pgen2/driver.py:80`    |
|   +293.2% | +2 MiB |   1.1% → 4.5% |  698 KiB → 2.68 MiB |       900 → 902 | `visit_STRING`                    | `./black/linegen.py:413`           |
|    +63.7% | +2 MiB |   5.2% → 8.6% | 3.14 MiB → 5.14 MiB |       198 → 200 | `update_sibling_maps`             | `./blib2to3/pytree.py:369 → 358`   |
|    +63.7% | +2 MiB |   5.2% → 8.6% | 3.14 MiB → 5.14 MiB |       198 → 200 | `prev_sibling`                    | `./blib2to3/pytree.py:207 → 196`   |
|       new | +2 MiB |   0.0% → 3.3% |         0 B → 2 MiB |           0 → 2 | `generate_tokens`                 | `./blib2to3/pgen2/tokenize.py:554` |
|       new | +2 MiB |   0.0% → 3.3% |         0 B → 2 MiB |           0 → 2 | `line`                            | `./black/linegen.py:109`           |
|       new | +2 MiB |   0.0% → 3.3% |         0 B → 2 MiB |           0 → 2 | `visit_INDENT`                    | `./black/linegen.py:179`           |
|     +5.1% | +1 MiB | 32.6% → 34.2% | 19.5 MiB → 20.5 MiB | 21,061 → 21,062 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`  |
|  +1132.6% | +1 MiB |   0.1% → 1.8% | 90.4 KiB → 1.09 MiB |       107 → 108 | `is_docstring`                    | `./black/nodes.py:558 → 553`       |
|     +6.2% | +1 MiB | 27.1% → 28.8% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                            | `./black/brackets.py:70`           |
|    +32.7% | +1 MiB |   5.1% → 6.8% | 3.05 MiB → 4.05 MiB |         92 → 93 | `whitespace`                      | `./black/nodes.py:194 → 183`       |
|   +100.0% | +1 MiB |   1.7% → 3.3% |       1 MiB → 2 MiB |           1 → 2 | `line_to_string`                  | `./black/lines.py:1073 → 1062`     |
|   +100.0% | +1 MiB |   1.7% → 3.3% |       1 MiB → 2 MiB |           1 → 2 | `__init__`                        | `<string>:2`                       |

##### Standard library

| Change |      Delta |     % |                Size | Allocations | Function           | Location                          |
| -----: | ---------: | ----: | ------------------: | ----------: | ------------------ | --------------------------------- |
| +22.0% | +1.484 KiB | <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__`      | `/usr/lib/python3.11/enum.py:831` |
|  +2.3% |     +752 B |  0.1% | 32.5 KiB → 33.2 KiB |          38 | `__new__`          | `/usr/lib/python3.11/enum.py:488` |
|    ~0% |     +222 B | 92.9% |            55.6 MiB |      21,201 | `_run_code`        | `<frozen runpy>:65`               |
|    ~0% |     +222 B | 92.9% |            55.6 MiB |      21,201 | `_run_module_code` | `<frozen runpy>:91`               |

#### Improvements

Functions with the largest decrease in bytes never freed within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |  Delta |             % |                Size |     Allocations | Function                                | Location                                |
| ------: | -----: | ------------: | ------------------: | --------------: | --------------------------------------- | --------------------------------------- |
|  -57.1% | -4 MiB |  11.7% → 5.0% |       7 MiB → 3 MiB |           7 → 3 | `shift`                                 | `./blib2to3/pgen2/parse.py:373 → 361`   |
|  -30.0% | -3 MiB | 16.7% → 11.7% |      10 MiB → 7 MiB |         14 → 11 | `convert`                               | `./blib2to3/pytree.py:486 → 475`        |
|  -50.0% | -3 MiB |  10.0% → 5.0% |       6 MiB → 3 MiB |           6 → 3 | `changed`                               | `./blib2to3/pytree.py:171 → 160`        |
|  -42.9% | -3 MiB |  11.7% → 6.7% |       7 MiB → 4 MiB |           7 → 4 | `prefix`                                | `./blib2to3/pytree.py:480 → 469`        |
|  -39.6% | -2 MiB |   8.4% → 5.1% | 5.05 MiB → 3.05 MiB |         20 → 18 | `transform_line`                        | `./black/linegen.py:601`                |
|  -16.6% | -2 MiB | 20.1% → 16.8% |     12 MiB → 10 MiB |         19 → 17 | `addtoken`                              | `./blib2to3/pgen2/parse.py:242 → 230`   |
|  -28.6% | -2 MiB |  11.7% → 8.3% |       7 MiB → 5 MiB |           7 → 5 | `__new__`                               | `./blib2to3/pytree.py:81 → 70`          |
|  -16.7% | -2 MiB | 20.0% → 16.7% |     12 MiB → 10 MiB |         16 → 14 | `_addtoken`                             | `./blib2to3/pgen2/parse.py:290 → 278`   |
|  -40.0% | -2 MiB |   8.3% → 5.0% |       5 MiB → 3 MiB |           5 → 3 | `generate_comments`                     | `./black/comments.py:52`                |
|  -50.0% | -2 MiB |   6.7% → 3.3% |       4 MiB → 2 MiB |           4 → 2 | `normalize_trailing_prefix`             | `./black/comments.py:127`               |
|  -99.4% | -1 MiB |  1.7% → <0.1% | 1.01 MiB → 6.38 KiB |           7 → 6 | `_rhs`                                  | `./black/linegen.py:650`                |
|  -99.2% | -1 MiB |  1.7% → <0.1% | 1.01 MiB → 8.33 KiB |           9 → 8 | `run_transformer`                       | `./black/linegen.py:1755 → 1771`        |
|  -99.5% | -1 MiB |  1.7% → <0.1% | 1.01 MiB → 5.29 KiB |           6 → 5 | `right_hand_split`                      | `./black/linegen.py:809`                |
|   -2.8% | -1 MiB | 60.2% → 58.6% | 36.1 MiB → 35.1 MiB |         95 → 94 | `format_str`                            | `./black/__init__.py:1189 → 1168`       |
|   -1.9% | -1 MiB | 86.1% → 84.4% | 51.6 MiB → 50.6 MiB | 21,148 → 21,147 | `_format_str_once`                      | `./black/__init__.py:1236 → 1215`       |
| removed | -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__getitem__`                           | `/usr/lib/python3.11/re/_parser.py:162` |
| removed | -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__init__`                              | `./blib2to3/pytree.py:400`              |
|  -50.0% | -1 MiB |   3.3% → 1.7% |       2 MiB → 1 MiB |           3 → 2 | `normalize_invisible_parens`            | `./black/linegen.py:1328 → 1344`        |
|  -99.9% | -1 MiB |  1.7% → <0.1% |     1 MiB → 1,000 B |           2 → 1 | `_maybe_split_omitting_optional_parens` | `./black/linegen.py:932`                |
| removed | -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `<genexpr>`                             | `./black/lines.py:329`                  |

##### Ours

|  Change |  Delta |             % |                Size |     Allocations | Function                                | Location                              |
| ------: | -----: | ------------: | ------------------: | --------------: | --------------------------------------- | ------------------------------------- |
|  -57.1% | -4 MiB |  11.7% → 5.0% |       7 MiB → 3 MiB |           7 → 3 | `shift`                                 | `./blib2to3/pgen2/parse.py:373 → 361` |
|  -30.0% | -3 MiB | 16.7% → 11.7% |      10 MiB → 7 MiB |         14 → 11 | `convert`                               | `./blib2to3/pytree.py:486 → 475`      |
|  -50.0% | -3 MiB |  10.0% → 5.0% |       6 MiB → 3 MiB |           6 → 3 | `changed`                               | `./blib2to3/pytree.py:171 → 160`      |
|  -42.9% | -3 MiB |  11.7% → 6.7% |       7 MiB → 4 MiB |           7 → 4 | `prefix`                                | `./blib2to3/pytree.py:480 → 469`      |
|  -39.6% | -2 MiB |   8.4% → 5.1% | 5.05 MiB → 3.05 MiB |         20 → 18 | `transform_line`                        | `./black/linegen.py:601`              |
|  -16.6% | -2 MiB | 20.1% → 16.8% |     12 MiB → 10 MiB |         19 → 17 | `addtoken`                              | `./blib2to3/pgen2/parse.py:242 → 230` |
|  -28.6% | -2 MiB |  11.7% → 8.3% |       7 MiB → 5 MiB |           7 → 5 | `__new__`                               | `./blib2to3/pytree.py:81 → 70`        |
|  -16.7% | -2 MiB | 20.0% → 16.7% |     12 MiB → 10 MiB |         16 → 14 | `_addtoken`                             | `./blib2to3/pgen2/parse.py:290 → 278` |
|  -40.0% | -2 MiB |   8.3% → 5.0% |       5 MiB → 3 MiB |           5 → 3 | `generate_comments`                     | `./black/comments.py:52`              |
|  -50.0% | -2 MiB |   6.7% → 3.3% |       4 MiB → 2 MiB |           4 → 2 | `normalize_trailing_prefix`             | `./black/comments.py:127`             |
|  -99.4% | -1 MiB |  1.7% → <0.1% | 1.01 MiB → 6.38 KiB |           7 → 6 | `_rhs`                                  | `./black/linegen.py:650`              |
|  -99.2% | -1 MiB |  1.7% → <0.1% | 1.01 MiB → 8.33 KiB |           9 → 8 | `run_transformer`                       | `./black/linegen.py:1755 → 1771`      |
|  -99.5% | -1 MiB |  1.7% → <0.1% | 1.01 MiB → 5.29 KiB |           6 → 5 | `right_hand_split`                      | `./black/linegen.py:809`              |
|   -2.8% | -1 MiB | 60.2% → 58.6% | 36.1 MiB → 35.1 MiB |         95 → 94 | `format_str`                            | `./black/__init__.py:1189 → 1168`     |
|   -1.9% | -1 MiB | 86.1% → 84.4% | 51.6 MiB → 50.6 MiB | 21,148 → 21,147 | `_format_str_once`                      | `./black/__init__.py:1236 → 1215`     |
| removed | -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__init__`                              | `./blib2to3/pytree.py:400`            |
|  -50.0% | -1 MiB |   3.3% → 1.7% |       2 MiB → 1 MiB |           3 → 2 | `normalize_invisible_parens`            | `./black/linegen.py:1328 → 1344`      |
|  -99.9% | -1 MiB |  1.7% → <0.1% |     1 MiB → 1,000 B |           2 → 1 | `_maybe_split_omitting_optional_parens` | `./black/linegen.py:932`              |
| removed | -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `<genexpr>`                             | `./black/lines.py:329`                |
| removed | -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `contains_unsplittable_type_ignore`     | `./black/lines.py:312`                |

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

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `append` (`./black/lines.py:52`)

| Change |  Delta |      % |                Size |     Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
| +19.7% | +4 MiB | 100.0% | 20.3 MiB → 24.3 MiB | 20,885 → 20,889 | `visit_default` | `./black/linegen.py:134` |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |             % |                Size |     Allocations | Caller             | Location                          |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------------ | --------------------------------- |
|  +9.2% | +3 MiB |        100.0% | 32.4 MiB → 35.4 MiB | 21,083 → 21,086 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |
|  +9.2% | +3 MiB |        100.0% | 32.4 MiB → 35.4 MiB | 21,081 → 21,084 | `visit_default`    | `./black/nodes.py:187 → 176`      |
|  +9.3% | +3 MiB | 99.1% → 99.2% | 32.2 MiB → 35.2 MiB | 20,708 → 20,711 | `visit_stmt`       | `./black/linegen.py:199`          |
|  +9.4% | +3 MiB | 98.1% → 98.2% | 31.8 MiB → 34.8 MiB | 20,269 → 20,272 | `visit_funcdef`    | `./black/linegen.py:254`          |

##### `visit_default` (`./black/nodes.py:176`)

| Change |  Delta |      % |                Size |     Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
|  +9.2% | +3 MiB | 100.0% | 32.4 MiB → 35.4 MiB | 21,081 → 21,084 | `visit_default` | `./black/linegen.py:134` |

##### `visit_default` (`./black/linegen.py:134`)

|  Change |  Delta |             % |                Size |     Allocations | Caller              | Location                     |
| ------: | -----: | ------------: | ------------------: | --------------: | ------------------- | ---------------------------- |
|   +9.2% | +3 MiB |        100.0% | 32.4 MiB → 35.4 MiB | 21,081 → 21,084 | `visit`             | `./black/nodes.py:163 → 152` |
|   +9.5% | +3 MiB | 97.8% → 98.0% | 31.7 MiB → 34.7 MiB | 20,143 → 20,146 | `visit_suite`       | `./black/linegen.py:288`     |
| +187.4% | +1 MiB |   1.6% → 4.3% |  546 KiB → 1.53 MiB |       724 → 725 | `visit_STRING`      | `./black/linegen.py:413`     |
| +209.1% | +1 MiB |   1.5% → 4.2% |  490 KiB → 1.48 MiB |       653 → 654 | `visit_NUMBER`      | `./black/linegen.py:505`     |
|     ~0% |  +96 B | 61.1% → 55.9% |            19.8 MiB |          13,398 | `visit_simple_stmt` | `./black/linegen.py:295`     |

##### `visit_stmt` (`./black/linegen.py:199`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +9.3% | +3 MiB | 100.0% | 32.2 MiB → 35.2 MiB | 20,710 → 20,713 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_suite` (`./black/linegen.py:288`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +9.5% | +3 MiB | 100.0% | 31.7 MiB → 34.7 MiB | 20,143 → 20,146 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_funcdef` (`./black/linegen.py:254`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +9.4% | +3 MiB | 100.0% | 31.8 MiB → 34.8 MiB | 20,269 → 20,272 | `visit` | `./black/nodes.py:163 → 152` |

##### `__next__` (`./blib2to3/pgen2/driver.py:80`)

|    Change |  Delta |      % |                Size | Allocations | Caller         | Location                         |
| --------: | -----: | -----: | ------------------: | ----------: | -------------- | -------------------------------- |
| +24771.5% | +2 MiB | 100.0% | 8.27 KiB → 2.01 MiB |       1 → 3 | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `visit_STRING` (`./black/linegen.py:413`)

|  Change |  Delta |      % |               Size | Allocations | Caller  | Location                     |
| ------: | -----: | -----: | -----------------: | ----------: | ------- | ---------------------------- |
| +293.2% | +2 MiB | 100.0% | 698 KiB → 2.68 MiB |   900 → 902 | `visit` | `./black/nodes.py:163 → 152` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

| Change |  Delta |      % |                Size | Allocations | Caller         | Location                         |
| -----: | -----: | -----: | ------------------: | ----------: | -------------- | -------------------------------- |
| +63.7% | +2 MiB | 100.0% | 3.14 MiB → 5.14 MiB |   198 → 200 | `prev_sibling` | `./blib2to3/pytree.py:207 → 196` |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

|   Change |  Delta |             % |                Size | Allocations | Caller              | Location                     |
| -------: | -----: | ------------: | ------------------: | ----------: | ------------------- | ---------------------------- |
|  +196.5% | +2 MiB | 32.4% → 58.7% | 1.02 MiB → 3.02 MiB |     24 → 26 | `whitespace`        | `./black/nodes.py:194 → 183` |
|   -49.1% | -1 MiB | 64.8% → 20.2% | 2.04 MiB → 1.04 MiB |     68 → 67 | `preceding_leaf`    | `./black/nodes.py:441 → 436` |
| +1139.2% | +1 MiB |  2.8% → 21.2% | 89.9 KiB → 1.09 MiB |   106 → 107 | `prev_siblings_are` | `./black/nodes.py:459 → 454` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

| Change |  Delta |             % |        Size | Allocations | Caller     | Location                        |
| -----: | -----: | ------------: | ----------: | ----------: | ---------- | ------------------------------- |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `__next__` | `./blib2to3/pgen2/driver.py:80` |

##### `line` (`./black/linegen.py:109`)

| Change |  Delta |             % |        Size | Allocations | Caller         | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | -------------- | ------------------------ |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `visit_INDENT` | `./black/linegen.py:179` |

##### `visit_INDENT` (`./black/linegen.py:179`)

| Change |  Delta |             % |        Size | Allocations | Caller  | Location               |
| -----: | -----: | ------------: | ----------: | ----------: | ------- | ---------------------- |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `visit` | `./black/nodes.py:152` |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

| Change |  Delta |      % |                Size |     Allocations | Caller                 | Location                          |
| -----: | -----: | -----: | ------------------: | --------------: | ---------------------- | --------------------------------- |
|  +5.1% | +1 MiB | 100.0% | 19.5 MiB → 20.5 MiB | 21,061 → 21,062 | `format_file_contents` | `./black/__init__.py:1054 → 1059` |

##### `is_docstring` (`./black/nodes.py:553`)

|   Change |  Delta |      % |                Size | Allocations | Caller         | Location                 |
| -------: | -----: | -----: | ------------------: | ----------: | -------------- | ------------------------ |
| +1132.6% | +1 MiB | 100.0% | 90.4 KiB → 1.09 MiB |   107 → 108 | `visit_STRING` | `./black/linegen.py:413` |

##### `mark` (`./black/brackets.py:70`)

| Change |  Delta |      % |                Size |     Allocations | Caller   | Location                   |
| -----: | -----: | -----: | ------------------: | --------------: | -------- | -------------------------- |
|  +6.2% | +1 MiB | 100.0% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `append` | `./black/lines.py:63 → 52` |

##### `whitespace` (`./black/nodes.py:183`)

| Change |  Delta |      % |                Size | Allocations | Caller   | Location                   |
| -----: | -----: | -----: | ------------------: | ----------: | -------- | -------------------------- |
| +32.7% | +1 MiB | 100.0% | 3.05 MiB → 4.05 MiB |     92 → 93 | `append` | `./black/lines.py:63 → 52` |

##### `line_to_string` (`./black/lines.py:1062`)

|  Change |  Delta |      % |          Size | Allocations | Caller           | Location                 |
| ------: | -----: | -----: | ------------: | ----------: | ---------------- | ------------------------ |
| +100.0% | +1 MiB | 100.0% | 1 MiB → 2 MiB |       1 → 2 | `transform_line` | `./black/linegen.py:601` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |             % |        Size | Allocations | Caller      | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ----------- | ------------------------ |
|     new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `line`      | `./black/linegen.py:109` |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `all_lines` | `./black/lines.py:538`   |
|     new | +1 MiB |  0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `__init__`  | `<string>:2`             |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

| Change |      Delta |             % |                Size | Allocations | Caller    | Location                          |
| -----: | ---------: | ------------: | ------------------: | ----------: | --------- | --------------------------------- |
| +66.0% | +1.484 KiB | 33.4% → 45.4% | 2.25 KiB → 3.73 KiB |       3 → 4 | `__new__` | `/usr/lib/python3.11/enum.py:488` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

| Change |  Delta |             % |                Size | Allocations | Caller     | Location            |
| -----: | -----: | ------------: | ------------------: | ----------: | ---------- | ------------------- |
|  +6.8% | +752 B | 33.2% → 34.7% | 10.8 KiB → 11.5 KiB |          13 | `<module>` | `./black/mode.py:1` |

##### `_run_code` (`<frozen runpy>:65`)

| Change |  Delta |      % |     Size | Allocations | Caller             | Location            |
| -----: | -----: | -----: | -------: | ----------: | ------------------ | ------------------- |
|    ~0% | +222 B | 100.0% | 55.6 MiB |      21,201 | `_run_module_code` | `<frozen runpy>:91` |

##### `_run_module_code` (`<frozen runpy>:91`)

| Change |  Delta |      % |     Size | Allocations | Caller       | Location             |
| -----: | -----: | -----: | -------: | ----------: | ------------ | -------------------- |
|    ~0% | +222 B | 100.0% | 55.6 MiB |      21,201 | `run_module` | `<frozen runpy>:201` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

| Change |  Delta |      % |          Size | Allocations | Caller      | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ----------- | ------------------------------------- |
| -57.1% | -4 MiB | 100.0% | 7 MiB → 3 MiB |       7 → 3 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `convert` (`./blib2to3/pytree.py:475`)

| Change |  Delta |             % |          Size | Allocations | Caller  | Location                              |
| -----: | -----: | ------------: | ------------: | ----------: | ------- | ------------------------------------- |
| -57.1% | -4 MiB | 70.0% → 42.8% | 7 MiB → 3 MiB |       7 → 3 | `shift` | `./blib2to3/pgen2/parse.py:373 → 361` |
| +33.3% | +1 MiB | 30.0% → 57.2% | 3 MiB → 4 MiB |       7 → 8 | `pop`   | `./blib2to3/pgen2/parse.py:398 → 386` |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |      % |          Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | --------- | -------------------------------- |
| -50.0% | -3 MiB | 100.0% | 6 MiB → 3 MiB |       6 → 3 | `changed` | `./blib2to3/pytree.py:171 → 160` |
| -50.0% | -3 MiB | 100.0% | 6 MiB → 3 MiB |       6 → 3 | `prefix`  | `./blib2to3/pytree.py:480 → 469` |

##### `prefix` (`./blib2to3/pytree.py:469`)

| Change |  Delta |             % |          Size | Allocations | Caller                      | Location                         |
| -----: | -----: | ------------: | ------------: | ----------: | --------------------------- | -------------------------------- |
| -50.0% | -2 MiB | 57.1% → 50.0% | 4 MiB → 2 MiB |       4 → 2 | `normalize_trailing_prefix` | `./black/comments.py:127`        |
| -50.0% | -1 MiB | 28.6% → 25.0% | 2 MiB → 1 MiB |       2 → 1 | `prefix`                    | `./blib2to3/pytree.py:329 → 318` |

##### `transform_line` (`./black/linegen.py:601`)

| Change |  Delta |      % |                Size | Allocations | Caller             | Location                          |
| -----: | -----: | -----: | ------------------: | ----------: | ------------------ | --------------------------------- |
| -39.6% | -2 MiB | 100.0% | 5.05 MiB → 3.05 MiB |     20 → 18 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |

##### `addtoken` (`./blib2to3/pgen2/parse.py:230`)

| Change |  Delta |      % |            Size | Allocations | Caller         | Location                         |
| -----: | -----: | -----: | --------------: | ----------: | -------------- | -------------------------------- |
| -16.6% | -2 MiB | 100.0% | 12 MiB → 10 MiB |     19 → 17 | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `__new__` (`./blib2to3/pytree.py:70`)

| Change |  Delta |      % |          Size | Allocations | Caller    | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | --------- | -------------------------------- |
| -28.6% | -2 MiB | 100.0% | 7 MiB → 5 MiB |       7 → 5 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

| Change |  Delta |      % |            Size | Allocations | Caller     | Location                              |
| -----: | -----: | -----: | --------------: | ----------: | ---------- | ------------------------------------- |
| -16.7% | -2 MiB | 100.0% | 12 MiB → 10 MiB |     16 → 14 | `addtoken` | `./blib2to3/pgen2/parse.py:242 → 230` |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |      % |          Size | Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | --------------- | ------------------------ |
| -40.0% | -2 MiB | 100.0% | 5 MiB → 3 MiB |       5 → 3 | `visit_default` | `./black/linegen.py:134` |

##### `normalize_trailing_prefix` (`./black/comments.py:127`)

| Change |  Delta |      % |          Size | Allocations | Caller              | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | ------------------- | ------------------------ |
| -50.0% | -2 MiB | 100.0% | 4 MiB → 2 MiB |       4 → 2 | `generate_comments` | `./black/comments.py:52` |

##### `_rhs` (`./black/linegen.py:650`)

| Change |  Delta |      % |                Size | Allocations | Caller            | Location                         |
| -----: | -----: | -----: | ------------------: | ----------: | ----------------- | -------------------------------- |
| -99.4% | -1 MiB | 100.0% | 1.01 MiB → 6.38 KiB |       7 → 6 | `run_transformer` | `./black/linegen.py:1755 → 1771` |

##### `run_transformer` (`./black/linegen.py:1771`)

| Change |  Delta |      % |                Size | Allocations | Caller           | Location                 |
| -----: | -----: | -----: | ------------------: | ----------: | ---------------- | ------------------------ |
| -99.2% | -1 MiB | 100.0% | 1.01 MiB → 8.33 KiB |       9 → 8 | `transform_line` | `./black/linegen.py:601` |

##### `right_hand_split` (`./black/linegen.py:809`)

| Change |  Delta |      % |                Size | Allocations | Caller | Location                 |
| -----: | -----: | -----: | ------------------: | ----------: | ------ | ------------------------ |
| -99.5% | -1 MiB | 100.0% | 1.01 MiB → 5.29 KiB |       6 → 5 | `_rhs` | `./black/linegen.py:650` |

##### `format_str` (`./black/__init__.py:1168`)

| Change |  Delta |      % |                Size | Allocations | Caller                 | Location                          |
| -----: | -----: | -----: | ------------------: | ----------: | ---------------------- | --------------------------------- |
|  -2.8% | -1 MiB | 100.0% | 36.1 MiB → 35.1 MiB |     95 → 94 | `format_file_contents` | `./black/__init__.py:1054 → 1059` |

##### `_format_str_once` (`./black/__init__.py:1215`)

| Change |  Delta |             % |                Size | Allocations | Caller       | Location                          |
| -----: | -----: | ------------: | ------------------: | ----------: | ------------ | --------------------------------- |
|  -2.8% | -1 MiB | 70.0% → 69.4% | 36.1 MiB → 35.1 MiB |     94 → 93 | `format_str` | `./black/__init__.py:1189 → 1168` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`)

|  Change |  Delta |             % |        Size | Allocations | Caller   | Location                                |
| ------: | -----: | ------------: | ----------: | ----------: | -------- | --------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `__init__` (`./blib2to3/pytree.py:400`)

|  Change |  Delta |             % |        Size | Allocations | Caller    | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | --------- | -------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `convert` | `./blib2to3/pytree.py:486` |

##### `normalize_invisible_parens` (`./black/linegen.py:1344`)

| Change |  Delta |      % |          Size | Allocations | Caller       | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | ------------ | ------------------------ |
| -50.0% | -1 MiB | 100.0% | 2 MiB → 1 MiB |       3 → 2 | `visit_stmt` | `./black/linegen.py:199` |

##### `_maybe_split_omitting_optional_parens` (`./black/linegen.py:932`)

| Change |  Delta |      % |            Size | Allocations | Caller             | Location                 |
| -----: | -----: | -----: | --------------: | ----------: | ------------------ | ------------------------ |
| -99.9% | -1 MiB | 100.0% | 1 MiB → 1,000 B |       2 → 1 | `right_hand_split` | `./black/linegen.py:809` |

##### `<genexpr>` (`./black/lines.py:329`)

|  Change |  Delta |             % |        Size | Allocations | Caller                              | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | ----------------------------------- | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `contains_unsplittable_type_ignore` | `./black/lines.py:312` |

##### `contains_unsplittable_type_ignore` (`./black/lines.py:312`)

|  Change |  Delta |             % |        Size | Allocations | Caller           | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------- | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `transform_line` | `./black/linegen.py:601` |

##### `replace` (`/usr/lib/python3.11/dataclasses.py:1443`)

|  Change |  Delta |             % |        Size | Allocations | Caller                                  | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | --------------------------------------- | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_maybe_split_omitting_optional_parens` | `./black/linegen.py:932` |

##### `_get_module_details` (`<frozen runpy>:105`)

| Change |      Delta |      % |     Size |   Allocations | Caller                | Location             |
| -----: | ---------: | -----: | -------: | ------------: | --------------------- | -------------------- |
|    ~0% | -1.918 KiB | 100.0% | 4.27 MiB | 1,299 → 1,298 | `run_module`          | `<frozen runpy>:201` |
|    ~0% | -1.918 KiB |  99.9% | 4.27 MiB | 1,292 → 1,291 | `_get_module_details` | `<frozen runpy>:105` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

| Change |      Delta |      % |                Size |   Allocations | Caller                | Location                |
| -----: | ---------: | -----: | ------------------: | ------------: | --------------------- | ----------------------- |
|    ~0% | -1.918 KiB | 100.0% |            4.27 MiB | 1,292 → 1,291 | `_get_module_details` | `<frozen runpy>:105`    |
|  -1.3% | -1.703 KiB |   3.0% |   133 KiB → 131 KiB |           131 | `<module>`            | `./black/linegen.py:1`  |
|    ~0% |  -1.46 KiB |  97.9% |            4.18 MiB |         1,212 | `<module>`            | `./black/__init__.py:1` |
|  +2.8% |     +837 B |   0.7% | 28.9 KiB → 29.7 KiB |            33 | `<module>`            | `./black/cache.py:1`    |
|  +0.3% |     +794 B |   5.2% |             227 KiB |     233 → 234 | `<module>`            | `./black/files.py:1`    |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

| Change |      Delta |      % |                Size |   Allocations | Caller           | Location                             |
| -----: | ---------: | -----: | ------------------: | ------------: | ---------------- | ------------------------------------ |
|    ~0% | -1.918 KiB | 100.0% | 4.27 MiB → 4.26 MiB | 1,290 → 1,289 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

| Change |      Delta |      % |                Size |   Allocations | Caller                    | Location                             |
| -----: | ---------: | -----: | ------------------: | ------------: | ------------------------- | ------------------------------------ |
|    ~0% | -1.918 KiB | 100.0% | 4.27 MiB → 4.26 MiB | 1,289 → 1,288 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

| Change |      Delta |      % |     Size |   Allocations | Caller           | Location                            |
| -----: | ---------: | -----: | -------: | ------------: | ---------------- | ----------------------------------- |
|    ~0% | -1.918 KiB | 100.0% | 4.26 MiB | 1,287 → 1,286 | `_load_unlocked` | `<frozen importlib._bootstrap>:666` |

##### `run_module` (`<frozen runpy>:201`)

| Change |      Delta |      % |     Size |     Allocations | Caller         | Location                                                       |
| -----: | ---------: | -----: | -------: | --------------: | -------------- | -------------------------------------------------------------- |
|    ~0% | -1.702 KiB | 100.0% | 59.9 MiB | 22,501 → 22,500 | `_run_tracker` | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |     Delta |      % |     Size | Allocations | Caller             | Location                                     |
| -----: | --------: | -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
|    ~0% | -1.46 KiB | 100.0% | 4.23 MiB |       1,257 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|    ~0% |      -8 B |  30.9% | 1.31 MiB |         319 | `_handle_fromlist` | `<frozen importlib._bootstrap>:1209`         |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

| Change |  Delta |      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -----: | -----: | -------: | ----------: | ---------- | --------------------------------------------- |
|    ~0% | -213 B | 100.0% | 2.55 MiB |   619 → 618 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

| Change |  Delta |      % |     Size | Allocations | Caller        | Location                                     |
| -----: | -----: | -----: | -------: | ----------: | ------------- | -------------------------------------------- |
|    ~0% | -213 B | 100.0% | 2.55 MiB |   619 → 618 | `exec_module` | `<frozen importlib._bootstrap_external>:934` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

| Change | Delta |     % |     Size | Allocations | Caller     | Location                 |
| -----: | ----: | ----: | -------: | ----------: | ---------- | ------------------------ |
|    ~0% |  -8 B | 85.8% | 1.12 MiB |         115 | `<module>` | `./black/nodes.py:1`     |
|    ~0% |  -8 B | 85.1% | 1.11 MiB |         106 | `<module>` | `./blib2to3/pygram.py:1` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `append` (`./black/lines.py:52`)

| Change |  Delta |             % |                Size |     Allocations | Callee       | Location                     |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------ | ---------------------------- |
|  +6.2% | +1 MiB | 80.0% → 70.9% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`       | `./black/brackets.py:70`     |
| +32.7% | +1 MiB | 15.1% → 16.7% | 3.05 MiB → 4.05 MiB |         92 → 93 | `whitespace` | `./black/nodes.py:194 → 183` |

##### `visit` (`./black/nodes.py:152`)

|  Change |  Delta |             % |                Size |     Allocations | Callee          | Location                 |
| ------: | -----: | ------------: | ------------------: | --------------: | --------------- | ------------------------ |
|   +9.2% | +3 MiB |        100.0% | 32.4 MiB → 35.4 MiB | 21,081 → 21,084 | `visit_default` | `./black/linegen.py:134` |
|   +9.3% | +3 MiB | 99.1% → 99.2% | 32.2 MiB → 35.2 MiB | 20,710 → 20,713 | `visit_stmt`    | `./black/linegen.py:199` |
|   +9.5% | +3 MiB | 97.8% → 98.0% | 31.7 MiB → 34.7 MiB | 20,143 → 20,146 | `visit_suite`   | `./black/linegen.py:288` |
|   +9.4% | +3 MiB | 98.1% → 98.2% | 31.8 MiB → 34.8 MiB | 20,269 → 20,272 | `visit_funcdef` | `./black/linegen.py:254` |
| +293.2% | +2 MiB |   2.1% → 7.6% |  698 KiB → 2.68 MiB |       900 → 902 | `visit_STRING`  | `./black/linegen.py:413` |

##### `visit_default` (`./black/nodes.py:176`)

| Change |  Delta |      % |                Size |     Allocations | Callee  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +9.2% | +3 MiB | 100.0% | 32.4 MiB → 35.4 MiB | 21,081 → 21,084 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_default` (`./black/linegen.py:134`)

| Change |  Delta |             % |                Size |     Allocations | Callee              | Location                     |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------------- | ---------------------------- |
| +19.7% | +4 MiB | 62.5% → 68.5% | 20.3 MiB → 24.3 MiB | 20,885 → 20,889 | `append`            | `./black/lines.py:63 → 52`   |
|  +9.2% | +3 MiB |        100.0% | 32.4 MiB → 35.4 MiB | 21,081 → 21,084 | `visit_default`     | `./black/nodes.py:187 → 176` |
| -40.0% | -2 MiB |  15.4% → 8.5% |       5 MiB → 3 MiB |           5 → 3 | `generate_comments` | `./black/comments.py:52`     |

##### `visit_stmt` (`./black/linegen.py:199`)

| Change |  Delta |           % |                Size |     Allocations | Callee                       | Location                         |
| -----: | -----: | ----------: | ------------------: | --------------: | ---------------------------- | -------------------------------- |
|  +9.3% | +3 MiB |      100.0% | 32.2 MiB → 35.2 MiB | 20,708 → 20,711 | `visit`                      | `./black/nodes.py:163 → 152`     |
| -50.0% | -1 MiB | 6.2% → 2.8% |       2 MiB → 1 MiB |           3 → 2 | `normalize_invisible_parens` | `./black/linegen.py:1328 → 1344` |

##### `visit_suite` (`./black/linegen.py:288`)

| Change |  Delta |      % |                Size |     Allocations | Callee          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
|  +9.5% | +3 MiB | 100.0% | 31.7 MiB → 34.7 MiB | 20,143 → 20,146 | `visit_default` | `./black/linegen.py:134` |

##### `visit_funcdef` (`./black/linegen.py:254`)

| Change |  Delta |      % |                Size |     Allocations | Callee  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  +9.4% | +3 MiB | 100.0% | 31.8 MiB → 34.8 MiB | 20,269 → 20,272 | `visit` | `./black/nodes.py:163 → 152` |

##### `__next__` (`./blib2to3/pgen2/driver.py:80`)

| Change |  Delta |            % |        Size | Allocations | Callee            | Location                           |
| -----: | -----: | -----------: | ----------: | ----------: | ----------------- | ---------------------------------- |
|    new | +2 MiB | 0.0% → 99.6% | 0 B → 2 MiB |       0 → 2 | `generate_tokens` | `./blib2to3/pgen2/tokenize.py:554` |

##### `visit_STRING` (`./black/linegen.py:413`)

|   Change |  Delta |             % |                Size | Allocations | Callee          | Location                     |
| -------: | -----: | ------------: | ------------------: | ----------: | --------------- | ---------------------------- |
| +1132.6% | +1 MiB | 12.9% → 40.6% | 90.4 KiB → 1.09 MiB |   107 → 108 | `is_docstring`  | `./black/nodes.py:558 → 553` |
|  +187.4% | +1 MiB | 78.2% → 57.2% |  546 KiB → 1.53 MiB |   724 → 725 | `visit_default` | `./black/linegen.py:134`     |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

| Change |  Delta |      % |                Size | Allocations | Callee                | Location                         |
| -----: | -----: | -----: | ------------------: | ----------: | --------------------- | -------------------------------- |
| +63.7% | +2 MiB | 100.0% | 3.14 MiB → 5.14 MiB |   198 → 200 | `update_sibling_maps` | `./blib2to3/pytree.py:369 → 358` |

##### `line` (`./black/linegen.py:109`)

| Change |  Delta |             % |        Size | Allocations | Callee     | Location     |
| -----: | -----: | ------------: | ----------: | ----------: | ---------- | ------------ |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `__init__` | `<string>:2` |

##### `visit_INDENT` (`./black/linegen.py:179`)

| Change |  Delta |             % |        Size | Allocations | Callee | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | ------ | ------------------------ |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB |       0 → 2 | `line` | `./black/linegen.py:109` |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

| Change |  Delta |             % |                Size | Allocations | Callee              | Location                          |
| -----: | -----: | ------------: | ------------------: | ----------: | ------------------- | --------------------------------- |
| +25.0% | +1 MiB | 20.5% → 24.4% | 4.01 MiB → 5.01 MiB |       6 → 7 | `assert_equivalent` | `./black/__init__.py:1524 → 1510` |

##### `is_docstring` (`./black/nodes.py:553`)

|   Change |  Delta |              % |                Size | Allocations | Callee              | Location                     |
| -------: | -----: | -------------: | ------------------: | ----------: | ------------------- | ---------------------------- |
| +1139.2% | +1 MiB | 99.4% → 100.0% | 89.9 KiB → 1.09 MiB |   106 → 107 | `prev_siblings_are` | `./black/nodes.py:459 → 454` |

##### `whitespace` (`./black/nodes.py:183`)

|  Change |  Delta |             % |                Size | Allocations | Callee           | Location                         |
| ------: | -----: | ------------: | ------------------: | ----------: | ---------------- | -------------------------------- |
| +196.5% | +2 MiB | 33.3% → 74.4% | 1.02 MiB → 3.02 MiB |     24 → 26 | `prev_sibling`   | `./blib2to3/pytree.py:207 → 196` |
|  -49.1% | -1 MiB | 66.7% → 25.6% | 2.04 MiB → 1.04 MiB |     68 → 67 | `preceding_leaf` | `./black/nodes.py:441 → 436`     |

##### `line_to_string` (`./black/lines.py:1062`)

|  Change |  Delta |      % |          Size | Allocations | Callee    | Location                     |
| ------: | -----: | -----: | ------------: | ----------: | --------- | ---------------------------- |
| +100.0% | +1 MiB | 100.0% | 1 MiB → 2 MiB |       1 → 2 | `__str__` | `./black/lines.py:490 → 479` |

##### `__init__` (`<string>:2`)

| Change |  Delta |            % |        Size | Allocations | Callee     | Location     |
| -----: | -----: | -----------: | ----------: | ----------: | ---------- | ------------ |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `__init__` | `<string>:2` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

| Change |      Delta |            % |                Size | Allocations | Callee        | Location                          |
| -----: | ---------: | -----------: | ------------------: | ----------: | ------------- | --------------------------------- |
| +66.0% | +1.484 KiB | 6.9% → 11.2% | 2.25 KiB → 3.73 KiB |       3 → 4 | `__setattr__` | `/usr/lib/python3.11/enum.py:831` |

##### `_run_code` (`<frozen runpy>:65`)

| Change |  Delta |      % |     Size | Allocations | Callee     | Location                |
| -----: | -----: | -----: | -------: | ----------: | ---------- | ----------------------- |
|    ~0% | +222 B | 100.0% | 55.6 MiB |      21,201 | `<module>` | `./black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

| Change |  Delta |      % |     Size | Allocations | Callee      | Location            |
| -----: | -----: | -----: | -------: | ----------: | ----------- | ------------------- |
|    ~0% | +222 B | 100.0% | 55.6 MiB |      21,201 | `_run_code` | `<frozen runpy>:65` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

| Change |  Delta |      % |          Size | Allocations | Callee    | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | --------- | -------------------------------- |
| -57.1% | -4 MiB | 100.0% | 7 MiB → 3 MiB |       7 → 3 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `convert` (`./blib2to3/pytree.py:475`)

|  Change |  Delta |             % |          Size | Allocations | Callee     | Location                       |
| ------: | -----: | ------------: | ------------: | ----------: | ---------- | ------------------------------ |
|  -28.6% | -2 MiB | 70.0% → 71.4% | 7 MiB → 5 MiB |       7 → 5 | `__new__`  | `./blib2to3/pytree.py:81 → 70` |
| removed | -1 MiB |  10.0% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__init__` | `./blib2to3/pytree.py:400`     |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |      % |          Size | Allocations | Callee    | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | --------- | -------------------------------- |
| -50.0% | -3 MiB | 100.0% | 6 MiB → 3 MiB |       6 → 3 | `changed` | `./blib2to3/pytree.py:171 → 160` |

##### `prefix` (`./blib2to3/pytree.py:469`)

| Change |  Delta |             % |          Size | Allocations | Callee    | Location                         |
| -----: | -----: | ------------: | ------------: | ----------: | --------- | -------------------------------- |
| -50.0% | -3 MiB | 85.7% → 75.0% | 6 MiB → 3 MiB |       6 → 3 | `changed` | `./blib2to3/pytree.py:171 → 160` |

##### `transform_line` (`./black/linegen.py:601`)

|  Change |  Delta |             % |                Size | Allocations | Callee                              | Location                         |
| ------: | -----: | ------------: | ------------------: | ----------: | ----------------------------------- | -------------------------------- |
|  -99.2% | -1 MiB |  20.0% → 0.3% | 1.01 MiB → 8.33 KiB |       9 → 8 | `run_transformer`                   | `./black/linegen.py:1755 → 1771` |
| removed | -1 MiB |  19.8% → 0.0% |         1 MiB → 0 B |       1 → 0 | `contains_unsplittable_type_ignore` | `./black/lines.py:312`           |
| +100.0% | +1 MiB | 19.8% → 65.6% |       1 MiB → 2 MiB |       1 → 2 | `line_to_string`                    | `./black/lines.py:1073 → 1062`   |

##### `addtoken` (`./blib2to3/pgen2/parse.py:230`)

| Change |  Delta |     % |            Size | Allocations | Callee      | Location                              |
| -----: | -----: | ----: | --------------: | ----------: | ----------- | ------------------------------------- |
| -16.7% | -2 MiB | 99.7% | 12 MiB → 10 MiB |     16 → 14 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

| Change |  Delta |             % |          Size | Allocations | Callee  | Location                              |
| -----: | -----: | ------------: | ------------: | ----------: | ------- | ------------------------------------- |
| -57.1% | -4 MiB | 58.3% → 30.0% | 7 MiB → 3 MiB |       7 → 3 | `shift` | `./blib2to3/pgen2/parse.py:373 → 361` |
|    new | +1 MiB |  0.0% → 10.0% |   0 B → 1 MiB |       0 → 1 | `push`  | `./blib2to3/pgen2/parse.py:374`       |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |             % |          Size | Allocations | Callee                      | Location                  |
| -----: | -----: | ------------: | ------------: | ----------: | --------------------------- | ------------------------- |
| -50.0% | -2 MiB | 80.0% → 66.7% | 4 MiB → 2 MiB |       4 → 2 | `normalize_trailing_prefix` | `./black/comments.py:127` |

##### `normalize_trailing_prefix` (`./black/comments.py:127`)

| Change |  Delta |      % |          Size | Allocations | Callee   | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | -------- | -------------------------------- |
| -50.0% | -2 MiB | 100.0% | 4 MiB → 2 MiB |       4 → 2 | `prefix` | `./blib2to3/pytree.py:480 → 469` |

##### `_rhs` (`./black/linegen.py:650`)

| Change |  Delta |             % |                Size | Allocations | Callee             | Location                 |
| -----: | -----: | ------------: | ------------------: | ----------: | ------------------ | ------------------------ |
| -99.5% | -1 MiB | 99.9% → 82.9% | 1.01 MiB → 5.29 KiB |       6 → 5 | `right_hand_split` | `./black/linegen.py:809` |

##### `run_transformer` (`./black/linegen.py:1771`)

| Change |  Delta |             % |                Size | Allocations | Callee | Location                 |
| -----: | -----: | ------------: | ------------------: | ----------: | ------ | ------------------------ |
| -99.4% | -1 MiB | 99.8% → 76.5% | 1.01 MiB → 6.38 KiB |       7 → 6 | `_rhs` | `./black/linegen.py:650` |

##### `right_hand_split` (`./black/linegen.py:809`)

| Change |  Delta |             % |                Size | Allocations | Callee                                  | Location                 |
| -----: | -----: | ------------: | ------------------: | ----------: | --------------------------------------- | ------------------------ |
| -99.9% | -1 MiB | 99.6% → 18.5% |     1 MiB → 1,000 B |       2 → 1 | `_maybe_split_omitting_optional_parens` | `./black/linegen.py:932` |
| -16.3% | -274 B |  0.2% → 25.9% | 1.64 KiB → 1.37 KiB |           2 | `_first_right_hand_split`               | `./black/linegen.py:829` |

##### `format_str` (`./black/__init__.py:1168`)

| Change |  Delta |      % |                Size | Allocations | Callee             | Location                          |
| -----: | -----: | -----: | ------------------: | ----------: | ------------------ | --------------------------------- |
|  -2.8% | -1 MiB | 100.0% | 36.1 MiB → 35.1 MiB |     94 → 93 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |

##### `_format_str_once` (`./black/__init__.py:1215`)

|  Change |  Delta |             % |                Size |     Allocations | Callee           | Location                     |
| ------: | -----: | ------------: | ------------------: | --------------: | ---------------- | ---------------------------- |
|   +9.2% | +3 MiB | 62.9% → 70.1% | 32.4 MiB → 35.4 MiB | 21,083 → 21,086 | `visit`          | `./black/nodes.py:163 → 152` |
|  -39.6% | -2 MiB |   9.8% → 6.0% | 5.05 MiB → 3.05 MiB |         20 → 18 | `transform_line` | `./black/linegen.py:601`     |
| removed | -1 MiB |   1.9% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__str__`        | `./black/lines.py:490`       |
| removed | -1 MiB |   1.9% → 0.0% |         1 MiB → 0 B |           1 → 0 | `all_lines`      | `./black/lines.py:538`       |

##### `normalize_invisible_parens` (`./black/linegen.py:1344`)

| Change |  Delta |     % |          Size | Allocations | Callee                | Location                     |
| -----: | -----: | ----: | ------------: | ----------: | --------------------- | ---------------------------- |
| -50.0% | -1 MiB | 99.9% | 2 MiB → 1 MiB |       2 → 1 | `wrap_in_parentheses` | `./black/nodes.py:935 → 930` |

##### `_maybe_split_omitting_optional_parens` (`./black/linegen.py:932`)

|  Change |  Delta |            % |        Size | Allocations | Callee    | Location                                  |
| ------: | -----: | -----------: | ----------: | ----------: | --------- | ----------------------------------------- |
| removed | -1 MiB | 99.9% → 0.0% | 1 MiB → 0 B |       1 → 0 | `replace` | `/usr/lib/python3.11/dataclasses.py:1443` |

##### `contains_unsplittable_type_ignore` (`./black/lines.py:312`)

|  Change |  Delta |             % |        Size | Allocations | Callee      | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | ----------- | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `<genexpr>` | `./black/lines.py:329` |

##### `_get_module_details` (`<frozen runpy>:105`)

| Change |      Delta |     % |     Size |   Allocations | Callee                | Location                             |
| -----: | ---------: | ----: | -------: | ------------: | --------------------- | ------------------------------------ |
|    ~0% | -1.918 KiB | 99.9% | 4.27 MiB | 1,292 → 1,291 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
|    ~0% | -1.918 KiB | 99.9% | 4.27 MiB | 1,292 → 1,291 | `_get_module_details` | `<frozen runpy>:105`                 |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

| Change |      Delta |      % |                Size |   Allocations | Callee                    | Location                             |
| -----: | ---------: | -----: | ------------------: | ------------: | ------------------------- | ------------------------------------ |
|    ~0% | -1.918 KiB | 100.0% | 4.27 MiB → 4.26 MiB | 1,290 → 1,289 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

| Change |      Delta |      % |                Size |   Allocations | Callee           | Location                            |
| -----: | ---------: | -----: | ------------------: | ------------: | ---------------- | ----------------------------------- |
|    ~0% | -1.918 KiB | 100.0% | 4.27 MiB → 4.26 MiB | 1,289 → 1,288 | `_load_unlocked` | `<frozen importlib._bootstrap>:666` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

| Change |      Delta |      % |     Size |   Allocations | Callee        | Location                                     |
| -----: | ---------: | -----: | -------: | ------------: | ------------- | -------------------------------------------- |
|    ~0% | -1.918 KiB | 100.0% | 4.26 MiB | 1,287 → 1,286 | `exec_module` | `<frozen importlib._bootstrap_external>:934` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

| Change |     Delta |     % |     Size | Allocations | Callee                      | Location                                      |
| -----: | --------: | ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
|    ~0% | -1.46 KiB | 99.3% | 4.23 MiB |       1,257 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|    ~0% |    -213 B | 59.9% | 2.55 MiB |   619 → 618 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `run_module` (`<frozen runpy>:201`)

| Change |      Delta |     % |     Size |   Allocations | Callee                | Location             |
| -----: | ---------: | ----: | -------: | ------------: | --------------------- | -------------------- |
|    ~0% | -1.918 KiB |  7.1% | 4.27 MiB | 1,299 → 1,298 | `_get_module_details` | `<frozen runpy>:105` |
|    ~0% |     +222 B | 92.9% | 55.6 MiB |        21,201 | `_run_module_code`    | `<frozen runpy>:91`  |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |      Delta |           % |                Size | Allocations | Callee     | Location                |
| -----: | ---------: | ----------: | ------------------: | ----------: | ---------- | ----------------------- |
|  -1.2% | -1.703 KiB | 3.3% → 3.2% |   142 KiB → 140 KiB |         139 | `<module>` | `./black/linegen.py:1`  |
|  -5.3% | -1.703 KiB |        0.7% |   32 KiB → 30.3 KiB |          32 | `<module>` | `./black/trans.py:1`    |
|    ~0% |  -1.46 KiB |      100.0% |            4.23 MiB |       1,257 | `<module>` | `./black/__init__.py:1` |
|  +2.2% |     +837 B |        0.9% | 36.9 KiB → 37.8 KiB |          41 | `<module>` | `./black/cache.py:1`    |
|  +0.3% |     +794 B |        5.3% |   228 KiB → 229 KiB |   234 → 235 | `<module>` | `./black/files.py:1`    |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

| Change |  Delta |      % |     Size | Allocations | Callee              | Location                                     |
| -----: | -----: | -----: | -------: | ----------: | ------------------- | -------------------------------------------- |
|    ~0% | -213 B | 100.0% | 2.55 MiB |   619 → 618 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

| Change | Delta |      % |     Size | Allocations | Callee                      | Location                            |
| -----: | ----: | -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
|    ~0% |  -8 B | 100.0% | 1.31 MiB |         319 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes never freed in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|  Change |  Delta |           % |          Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------: | -----: | ----------: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new | +2 MiB | 0.0% → 3.3% |   0 B → 2 MiB |       0 → 2 | `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`) ← `__next__` (`./blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +100.0% | +1 MiB | 1.7% → 3.3% | 1 MiB → 2 MiB |       1 → 2 | `__new__` (`./blib2to3/pytree.py:70`) ← `convert` (475) ← `pop` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new | +1 MiB | 0.0% → 1.7% |   0 B → 1 MiB |       0 → 1 | `_parse` (`/usr/lib/python3.11/re/_parser.py:507`) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `parse` (970) ← `compile` (`/usr/lib/python3.11/re/_compiler.py:738`) ← `_compile` (`/usr/lib/python3.11/re/__init__.py:272`) ← `compile` (225) ← `<module>` (`./blib2to3/pgen2/tokenize.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./blib2to3/pgen2/driver.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`./blib2to3/pygram.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`./black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105) |
|     new | +1 MiB | 0.0% → 1.7% |   0 B → 1 MiB |       0 → 1 | `_addtoken` (`./blib2to3/pgen2/parse.py:278`) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|     new | +1 MiB | 0.0% → 1.7% |   0 B → 1 MiB |       0 → 1 | `push` (`./blib2to3/pgen2/parse.py:374`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new | +1 MiB | 0.0% → 1.7% |   0 B → 1 MiB |       0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                           |
|     new | +1 MiB | 0.0% → 1.7% |   0 B → 1 MiB |       0 → 1 | `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                       |
|     new | +1 MiB | 0.0% → 1.7% |   0 B → 1 MiB |       0 → 1 | `prefix` (`./blib2to3/pytree.py:469`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     new | +1 MiB | 0.0% → 1.7% |   0 B → 1 MiB |       0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `prev_siblings_are` (`./black/nodes.py:454`) ← `is_docstring` (553) ← `visit_STRING` (`./black/linegen.py:413`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new | +1 MiB | 0.0% → 1.7% |   0 B → 1 MiB |       0 → 1 | `changed` (`./blib2to3/pytree.py:160`) ← `changed` (160) ← `prefix` (469) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                             |
|     new | +1 MiB | 0.0% → 1.7% |   0 B → 1 MiB |       0 → 1 | `mark` (`./black/brackets.py:70`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new | +1 MiB | 0.0% → 1.7% |   0 B → 1 MiB |       0 → 1 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit_NUMBER` (505) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|     new | +1 MiB | 0.0% → 1.7% |   0 B → 1 MiB |       0 → 1 | `__str__` (`./blib2to3/pytree.py:429`) ← `__str__` (`./black/lines.py:479`) ← `line_to_string` (1062) ← `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new | +1 MiB | 0.0% → 1.7% |   0 B → 1 MiB |       0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new | +1 MiB | 0.0% → 1.7% |   0 B → 1 MiB |       0 → 1 | `__init__` (`<string>:2`) ← `line` (`./black/linegen.py:109`) ← `visit_INDENT` (179) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|     new | +1 MiB | 0.0% → 1.7% |   0 B → 1 MiB |       0 → 1 | `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new | +1 MiB | 0.0% → 1.7% |   0 B → 1 MiB |       0 → 1 | `changed` (`./blib2to3/pytree.py:160`) ← `changed` (160) ← `prefix` (469) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new | +1 MiB | 0.0% → 1.7% |   0 B → 1 MiB |       0 → 1 | `changed` (`./blib2to3/pytree.py:160`) ← `changed` (160) ← `prefix` (469) ← `prefix` (318) ← `prefix` (318) ← `prefix` (318) ← `wrap_in_parentheses` (`./black/nodes.py:930`) ← `normalize_invisible_parens` (`./black/linegen.py:1344`) ← `visit_stmt` (199) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|     new | +1 MiB | 0.0% → 1.7% |   0 B → 1 MiB |       0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|     new | +1 MiB | 0.0% → 1.7% |   0 B → 1 MiB |       0 → 1 | `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### Improvements

Call stacks with the largest decrease in bytes never freed in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|  Change |  Delta |            % |          Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------: | -----: | -----------: | ------------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -50.0% | -3 MiB | 10.0% → 5.0% | 6 MiB → 3 MiB |       6 → 3 | `__new__` (`./blib2to3/pytree.py:70`) ← `convert` (475) ← `shift` (`./blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed | -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `parse` (970) ← `compile` (`/usr/lib/python3.11/re/_compiler.py:738`) ← `_compile` (`/usr/lib/python3.11/re/__init__.py:272`) ← `compile` (225) ← `<module>` (`./blib2to3/pgen2/tokenize.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./blib2to3/pgen2/driver.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`./blib2to3/pygram.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`./black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105) |
|  -50.0% | -1 MiB |  3.3% → 1.7% | 2 MiB → 1 MiB |       2 → 1 | `pop` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed | -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__init__` (`./blib2to3/pytree.py:400`) ← `convert` (486) ← `shift` (`./blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -49.9% | -1 MiB |  3.3% → 1.7% | 2 MiB → 1 MiB |       5 → 4 | `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed | -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `<genexpr>` (`./black/lines.py:329`) ← `contains_unsplittable_type_ignore` (312) ← `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed | -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                 |
| removed | -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `update_sibling_maps` (`./blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `preceding_leaf` (`./black/nodes.py:441`) ← `whitespace` (194) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed | -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed | -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `replace` (`/usr/lib/python3.11/dataclasses.py:1443`) ← `_maybe_split_omitting_optional_parens` (`./black/linegen.py:932`) ← `right_hand_split` (809) ← `_rhs` (650) ← `run_transformer` (1755) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed | -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `visit_default` (`./black/nodes.py:187`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed | -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed | -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `changed` (171) ← `changed` (171) ← `changed` (171) ← `prefix` (480) ← `prefix` (329) ← `prefix` (329) ← `prefix` (329) ← `wrap_in_parentheses` (`./black/nodes.py:935`) ← `normalize_invisible_parens` (`./black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `changed` (171) ← `prefix` (480) ← `prefix` (329) ← `wrap_in_parentheses` (`./black/nodes.py:935`) ← `normalize_invisible_parens` (`./black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed | -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__str__` (`./black/lines.py:490`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed | -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed | -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                             |
| removed | -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `update_sibling_maps` (`./blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`./black/nodes.py:194`) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed | -1 MiB |  1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `prefix` (`./blib2to3/pytree.py:480`) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

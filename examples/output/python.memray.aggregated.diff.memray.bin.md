# Peak memory profile diff

Held 78.6 MiB (-1.702 KiB, ~0%) over 22,707 allocations → 22,706 allocations (3.54 KiB per allocation).

| Category         | Change |          Delta |             % |                Size |     Allocations |
| ---------------- | -----: | -------------: | ------------: | ------------------: | --------------: |
| Ours             |  +1.6% | +1,021.603 KiB | 81.6% → 82.9% | 64.2 MiB → 65.2 MiB | 21,445 → 21,446 |
| Standard library |  -7.0% | -1,023.473 KiB | 18.1% → 16.8% | 14.2 MiB → 13.2 MiB |   1,030 → 1,028 |
| Third-party      |  +0.1% |         +172 B |          0.3% |             238 KiB |             232 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes held at peak memory directly in the function body, excluding callees.

|     Change |      Delta |             % |                Size |     Allocations | Function                          | Location                                                    |
| ---------: | ---------: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------------------------------------- |
|    +199.9% |     +2 MiB |   1.3% → 3.8% |       1 MiB → 3 MiB |           2 → 4 | `visit_default`                   | `black/linegen.py:134`                                      |
|    +175.1% |     +2 MiB |   1.5% → 4.0% | 1.14 MiB → 3.14 MiB |       196 → 198 | `update_sibling_maps`             | `blib2to3/pytree.py:369 → 358`                              |
| +174762.7% |     +2 MiB |  <0.1% → 2.5% |    1.17 KiB → 2 MiB |           2 → 4 | `addtoken`                        | `blib2to3/pgen2/parse.py:242 → 230`                         |
|    +200.0% |     +2 MiB |   1.3% → 3.8% |       1 MiB → 3 MiB |           1 → 3 | `__init__`                        | `<string>:2`                                                |
|     +40.0% |     +2 MiB |   6.4% → 8.9% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `blib2to3/pytree.py:81 → 70`                                |
|        new |     +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `_stringify_ast_with_new_parent`  | `black/parsing.py:166 → 174`                                |
|      +6.2% |     +1 MiB | 20.6% → 21.9% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                            | `black/brackets.py:70`                                      |
|     +50.0% |     +1 MiB |   2.5% → 3.8% |       2 MiB → 3 MiB |           2 → 3 | `generate_comments`               | `black/comments.py:52`                                      |
|  +36714.8% |     +1 MiB |  <0.1% → 1.3% |    2.79 KiB → 1 MiB |           3 → 4 | `transform_line`                  | `black/linegen.py:601`                                      |
|        new |     +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `convert`                         | `blib2to3/pytree.py:486 → 475`                              |
|        new |     +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `_uniq`                           | `/usr/lib/python3.11/re/_parser.py:444`                     |
|     +22.0% | +1.484 KiB |         <0.1% | 6.73 KiB → 8.22 KiB |           8 → 9 | `__setattr__`                     | `/usr/lib/python3.11/enum.py:831`                           |
|      +4.4% |     +172 B |         <0.1% | 3.79 KiB → 3.96 KiB |               3 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |
|        ~0% |     +104 B |          0.3% |             225 KiB |               5 | `_format_str_once`                | `black/__init__.py:1236 → 1215`                             |
|      +1.5% |      +96 B |         <0.1% | 6.24 KiB → 6.33 KiB |               4 | `append`                          | `black/lines.py:63 → 52`                                    |
|      +5.5% |      +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `black/cache.py:50`                                         |
|     +10.1% |      +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `black/__init__.py:1037 → 1042`                             |

##### Ours

|     Change |  Delta |             % |                Size |     Allocations | Function                          | Location                            |
| ---------: | -----: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------------- |
|    +199.9% | +2 MiB |   1.3% → 3.8% |       1 MiB → 3 MiB |           2 → 4 | `visit_default`                   | `black/linegen.py:134`              |
|    +175.1% | +2 MiB |   1.5% → 4.0% | 1.14 MiB → 3.14 MiB |       196 → 198 | `update_sibling_maps`             | `blib2to3/pytree.py:369 → 358`      |
| +174762.7% | +2 MiB |  <0.1% → 2.5% |    1.17 KiB → 2 MiB |           2 → 4 | `addtoken`                        | `blib2to3/pgen2/parse.py:242 → 230` |
|    +200.0% | +2 MiB |   1.3% → 3.8% |       1 MiB → 3 MiB |           1 → 3 | `__init__`                        | `<string>:2`                        |
|     +40.0% | +2 MiB |   6.4% → 8.9% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `blib2to3/pytree.py:81 → 70`        |
|        new | +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `_stringify_ast_with_new_parent`  | `black/parsing.py:166 → 174`        |
|      +6.2% | +1 MiB | 20.6% → 21.9% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                            | `black/brackets.py:70`              |
|     +50.0% | +1 MiB |   2.5% → 3.8% |       2 MiB → 3 MiB |           2 → 3 | `generate_comments`               | `black/comments.py:52`              |
|  +36714.8% | +1 MiB |  <0.1% → 1.3% |    2.79 KiB → 1 MiB |           3 → 4 | `transform_line`                  | `black/linegen.py:601`              |
|        new | +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `convert`                         | `blib2to3/pytree.py:486 → 475`      |
|        ~0% | +104 B |          0.3% |             225 KiB |               5 | `_format_str_once`                | `black/__init__.py:1236 → 1215`     |
|      +1.5% |  +96 B |         <0.1% | 6.24 KiB → 6.33 KiB |               4 | `append`                          | `black/lines.py:63 → 52`            |
|      +5.5% |  +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `black/cache.py:50`                 |
|     +10.1% |  +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `black/__init__.py:1037 → 1042`     |

##### Standard library

| Change |      Delta |           % |                Size | Allocations | Function      | Location                                |
| -----: | ---------: | ----------: | ------------------: | ----------: | ------------- | --------------------------------------- |
|    new |     +1 MiB | 0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `_uniq`       | `/usr/lib/python3.11/re/_parser.py:444` |
| +22.0% | +1.484 KiB |       <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__` | `/usr/lib/python3.11/enum.py:831`       |

#### Improvements

Functions with the largest decrease in bytes held at peak memory directly in the function body, excluding callees.

|  Change |      Delta |             % |                Size | Allocations | Function                               | Location                                     |
| ------: | ---------: | ------------: | ------------------: | ----------: | -------------------------------------- | -------------------------------------------- |
|  -75.0% |     -3 MiB |   5.1% → 1.3% |       4 MiB → 1 MiB |       4 → 1 | `push`                                 | `blib2to3/pgen2/parse.py:386 → 374`          |
|   -9.9% |     -1 MiB | 12.9% → 11.6% | 10.1 MiB → 9.12 MiB |   143 → 142 | `parse`                                | `/usr/lib/python3.11/ast.py:33`              |
|  -33.3% |     -1 MiB |   3.8% → 2.5% |       3 MiB → 2 MiB |       7 → 6 | `visit`                                | `black/nodes.py:163 → 152`                   |
|  -99.7% |     -1 MiB |  1.3% → <0.1% |    1 MiB → 3.03 KiB |       5 → 4 | `__init__`                             | `blib2to3/pytree.py:248 → 237`               |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `normalize_trailing_prefix`            | `black/comments.py:127`                      |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `contains_uncollapsable_type_comments` | `black/lines.py:276`                         |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `<listcomp>`                           | `black/parsing.py:154`                       |
|  -50.0% |     -1 MiB |   2.5% → 1.3% |       2 MiB → 1 MiB |       2 → 1 | `generate_tokens`                      | `blib2to3/pgen2/tokenize.py:565 → 554`       |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `_addtoken`                            | `blib2to3/pgen2/parse.py:290 → 278`          |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `prefix`                               | `blib2to3/pytree.py:480 → 469`               |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `pop`                                  | `blib2to3/pgen2/parse.py:398 → 386`          |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__getitem__`                          | `/usr/lib/python3.11/re/_parser.py:162`      |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `hug_power_op`                         | `black/trans.py:85`                          |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__str__`                              | `blib2to3/pytree.py:440`                     |
|  -16.8% | -1.703 KiB |         <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                             | `black/trans.py:1`                           |
|   -3.1% |     -768 B |         <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`                              | `/usr/lib/python3.11/enum.py:488`            |
|  -15.1% |     -752 B |         <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                             | `black/ranges.py:1`                          |
|  -25.9% |     -274 B |         <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split`              | `black/linegen.py:829`                       |
|     ~0% |     -213 B |          3.2% |            2.55 MiB |   619 → 618 | `_compile_bytecode`                    | `<frozen importlib._bootstrap_external>:727` |
|     ~0% |       -8 B |         <0.1% |            20.7 KiB |          14 | `<module>`                             | `blib2to3/pgen2/tokenize.py:1`               |

##### Ours

|  Change |      Delta |            % |                Size | Allocations | Function                               | Location                               |
| ------: | ---------: | -----------: | ------------------: | ----------: | -------------------------------------- | -------------------------------------- |
|  -75.0% |     -3 MiB |  5.1% → 1.3% |       4 MiB → 1 MiB |       4 → 1 | `push`                                 | `blib2to3/pgen2/parse.py:386 → 374`    |
|  -33.3% |     -1 MiB |  3.8% → 2.5% |       3 MiB → 2 MiB |       7 → 6 | `visit`                                | `black/nodes.py:163 → 152`             |
|  -99.7% |     -1 MiB | 1.3% → <0.1% |    1 MiB → 3.03 KiB |       5 → 4 | `__init__`                             | `blib2to3/pytree.py:248 → 237`         |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `normalize_trailing_prefix`            | `black/comments.py:127`                |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `contains_uncollapsable_type_comments` | `black/lines.py:276`                   |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `<listcomp>`                           | `black/parsing.py:154`                 |
|  -50.0% |     -1 MiB |  2.5% → 1.3% |       2 MiB → 1 MiB |       2 → 1 | `generate_tokens`                      | `blib2to3/pgen2/tokenize.py:565 → 554` |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `_addtoken`                            | `blib2to3/pgen2/parse.py:290 → 278`    |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `prefix`                               | `blib2to3/pytree.py:480 → 469`         |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `pop`                                  | `blib2to3/pgen2/parse.py:398 → 386`    |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `hug_power_op`                         | `black/trans.py:85`                    |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__str__`                              | `blib2to3/pytree.py:440`               |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                             | `black/trans.py:1`                     |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                             | `black/ranges.py:1`                    |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split`              | `black/linegen.py:829`                 |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                             | `blib2to3/pgen2/tokenize.py:1`         |

##### Standard library

|  Change |  Delta |             % |                Size | Allocations | Function            | Location                                     |
| ------: | -----: | ------------: | ------------------: | ----------: | ------------------- | -------------------------------------------- |
|   -9.9% | -1 MiB | 12.9% → 11.6% | 10.1 MiB → 9.12 MiB |   143 → 142 | `parse`             | `/usr/lib/python3.11/ast.py:33`              |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__getitem__`       | `/usr/lib/python3.11/re/_parser.py:162`      |
|   -3.1% | -768 B |         <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`           | `/usr/lib/python3.11/enum.py:488`            |
|     ~0% | -213 B |          3.2% |            2.55 MiB |   619 → 618 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `visit_default` (`black/linegen.py:134`)

|  Change |  Delta |              % |          Size | Allocations | Location               |
| ------: | -----: | -------------: | ------------: | ----------: | ---------------------- |
| +200.0% | +2 MiB | 99.9% → 100.0% | 1 MiB → 3 MiB |       1 → 3 | `black/linegen.py:158` |

##### `update_sibling_maps` (`blib2to3/pytree.py:358`)

|   Change |  Delta |            % |                Size | Allocations | Location                       |
| -------: | -----: | -----------: | ------------------: | ----------: | ------------------------------ |
| +2913.4% | +2 MiB | 6.0% → 65.8% | 70.3 KiB → 2.07 MiB |     93 → 95 | `blib2to3/pytree.py:377 → 366` |
|  removed | -1 MiB | 87.6% → 0.0% |         1 MiB → 0 B |       1 → 0 | `blib2to3/pytree.py:371`       |
| +1456.7% | +1 MiB | 6.0% → 34.0% | 70.3 KiB → 1.07 MiB |     93 → 94 | `blib2to3/pytree.py:376 → 365` |

##### `addtoken` (`blib2to3/pgen2/parse.py:230`)

|     Change |  Delta |              % |          Size | Allocations | Location                            |
| ---------: | -----: | -------------: | ------------: | ----------: | ----------------------------------- |
| +327680.0% | +2 MiB | 53.3% → 100.0% | 640 B → 2 MiB |       1 → 3 | `blib2to3/pgen2/parse.py:252 → 240` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |             % |        Size | Allocations | Location     |
| ------: | -----: | ------------: | ----------: | ----------: | ------------ |
|     new | +2 MiB |  0.0% → 66.7% | 0 B → 2 MiB |       0 → 2 | `<string>:8` |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `<string>:5` |
|     new | +1 MiB |  0.0% → 33.3% | 0 B → 1 MiB |       0 → 1 | `<string>:7` |

##### `__new__` (`blib2to3/pytree.py:70`)

| Change |  Delta |      % |          Size | Allocations | Location                     |
| -----: | -----: | -----: | ------------: | ----------: | ---------------------------- |
| +40.0% | +2 MiB | 100.0% | 5 MiB → 7 MiB |       5 → 7 | `blib2to3/pytree.py:84 → 73` |

##### `_stringify_ast_with_new_parent` (`black/parsing.py:174`)

| Change |  Delta |             % |        Size | Allocations | Location               |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `black/parsing.py:178` |

##### `mark` (`black/brackets.py:70`)

| Change |  Delta |      % |                Size |     Allocations | Location                |
| -----: | -----: | -----: | ------------------: | --------------: | ----------------------- |
|  +6.2% | +1 MiB | 100.0% | 16.2 MiB → 17.2 MiB | 20,787 → 20,788 | `black/brackets.py:112` |

##### `generate_comments` (`black/comments.py:52`)

| Change |  Delta |            % |        Size | Allocations | Location               |
| -----: | -----: | -----------: | ----------: | ----------: | ---------------------- |
|    new | +1 MiB | 0.0% → 33.3% | 0 B → 1 MiB |       0 → 1 | `black/comments.py:72` |

##### `transform_line` (`black/linegen.py:601`)

| Change |  Delta |            % |        Size | Allocations | Location               |
| -----: | -----: | -----------: | ----------: | ----------: | ---------------------- |
|    new | +1 MiB | 0.0% → 99.7% | 0 B → 1 MiB |       0 → 1 | `black/linegen.py:627` |

##### `convert` (`blib2to3/pytree.py:475`)

| Change |  Delta |             % |        Size | Allocations | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | ------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `blib2to3/pytree.py:492` |

##### `_uniq` (`/usr/lib/python3.11/re/_parser.py:444`)

| Change |  Delta |             % |        Size | Allocations | Location                                |
| -----: | -----: | ------------: | ----------: | ----------: | --------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `/usr/lib/python3.11/re/_parser.py:445` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

| Change |      Delta |      % |                Size | Allocations | Location                          |
| -----: | ---------: | -----: | ------------------: | ----------: | --------------------------------- |
| +22.0% | +1.484 KiB | 100.0% | 6.73 KiB → 8.22 KiB |       8 → 9 | `/usr/lib/python3.11/enum.py:842` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

| Change |  Delta |      % |                Size | Allocations | Location                                                    |
| -----: | -----: | -----: | ------------------: | ----------: | ----------------------------------------------------------- |
|  +4.4% | +172 B | 100.0% | 3.79 KiB → 3.96 KiB |           3 | `/venv/lib/python3.11/site-packages/click/decorators.py:34` |

##### `_format_str_once` (`black/__init__.py:1215`)

| Change |  Delta |           % |          Size | Allocations | Location                        |
| -----: | -----: | ----------: | ------------: | ----------: | ------------------------------- |
| +13.0% | +104 B | 0.3% → 0.4% | 800 B → 904 B |           1 | `black/__init__.py:1239 → 1218` |

##### `append` (`black/lines.py:52`)

| Change | Delta |             % |             Size | Allocations | Location                 |
| -----: | ----: | ------------: | ---------------: | ----------: | ------------------------ |
|  +2.3% | +96 B | 64.1% → 64.6% | 4 KiB → 4.09 KiB |           1 | `black/lines.py:89 → 78` |

##### `get_cache_file` (`black/cache.py:50`)

| Change | Delta |      % |                Size | Allocations | Location            |
| -----: | ----: | -----: | ------------------: | ----------: | ------------------- |
|  +5.5% | +64 B | 100.0% | 1.13 KiB → 1.19 KiB |           1 | `black/cache.py:51` |

##### `check_stability_and_equivalence` (`black/__init__.py:1042`)

| Change | Delta |      % |          Size | Allocations | Location                        |
| -----: | ----: | -----: | ------------: | ----------: | ------------------------------- |
| +10.1% | +60 B | 100.0% | 594 B → 654 B |           1 | `black/__init__.py:1050 → 1055` |

##### `push` (`blib2to3/pgen2/parse.py:374`)

| Change |  Delta |      % |          Size | Allocations | Location                            |
| -----: | -----: | -----: | ------------: | ----------: | ----------------------------------- |
| -75.0% | -3 MiB | 100.0% | 4 MiB → 1 MiB |       4 → 1 | `blib2to3/pgen2/parse.py:394 → 382` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

| Change |  Delta |      % |                Size | Allocations | Location                        |
| -----: | -----: | -----: | ------------------: | ----------: | ------------------------------- |
|  -9.9% | -1 MiB | 100.0% | 10.1 MiB → 9.12 MiB |   143 → 142 | `/usr/lib/python3.11/ast.py:50` |

##### `visit` (`black/nodes.py:152`)

| Change |  Delta |     % |          Size | Allocations | Location                   |
| -----: | -----: | ----: | ------------: | ----------: | -------------------------- |
| -33.3% | -1 MiB | 99.9% | 3 MiB → 2 MiB |       4 → 3 | `black/nodes.py:185 → 174` |

##### `__init__` (`blib2to3/pytree.py:237`)

| Change |  Delta |      % |             Size | Allocations | Location                       |
| -----: | -----: | -----: | ---------------: | ----------: | ------------------------------ |
| -99.7% | -1 MiB | 100.0% | 1 MiB → 3.03 KiB |       5 → 4 | `blib2to3/pytree.py:266 → 255` |

##### `normalize_trailing_prefix` (`black/comments.py:127`)

|  Change |  Delta |             % |        Size | Allocations | Location                |
| ------: | -----: | ------------: | ----------: | ----------: | ----------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `black/comments.py:136` |

##### `contains_uncollapsable_type_comments` (`black/lines.py:276`)

|  Change |  Delta |             % |        Size | Allocations | Location             |
| ------: | -----: | ------------: | ----------: | ----------: | -------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `black/lines.py:280` |

##### `<listcomp>` (`black/parsing.py:154`)

|  Change |  Delta |             % |        Size | Allocations | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `black/parsing.py:154` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:554`)

|  Change |  Delta |             % |        Size | Allocations | Location                         |
| ------: | -----: | ------------: | ----------: | ----------: | -------------------------------- |
| removed | -1 MiB |  50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `blib2to3/pgen2/tokenize.py:614` |
| removed | -1 MiB |  50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `blib2to3/pgen2/tokenize.py:972` |
|     new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `blib2to3/pgen2/tokenize.py:694` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:278`)

|  Change |  Delta |             % |        Size | Allocations | Location                      |
| ------: | -----: | ------------: | ----------: | ----------: | ----------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `blib2to3/pgen2/parse.py:314` |

##### `prefix` (`blib2to3/pytree.py:469`)

|  Change |  Delta |             % |        Size | Allocations | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `blib2to3/pytree.py:482` |

##### `pop` (`blib2to3/pgen2/parse.py:386`)

|  Change |  Delta |             % |        Size | Allocations | Location                      |
| ------: | -----: | ------------: | ----------: | ----------: | ----------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `blib2to3/pgen2/parse.py:408` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`)

|  Change |  Delta |             % |        Size | Allocations | Location                                |
| ------: | -----: | ------------: | ----------: | ----------: | --------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `/usr/lib/python3.11/re/_parser.py:164` |

##### `hug_power_op` (`black/trans.py:85`)

|  Change |  Delta |             % |        Size | Allocations | Location            |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `black/trans.py:95` |

##### `__str__` (`blib2to3/pytree.py:440`)

|  Change |  Delta |             % |        Size | Allocations | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `blib2to3/pytree.py:446` |

##### `<module>` (`black/trans.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location              |
| ------: | ---------: | -----------: | -------------: | ----------: | --------------------- |
| removed | -3.187 KiB | 31.5% → 0.0% | 3.19 KiB → 0 B |       1 → 0 | `black/trans.py:1914` |
|     new | +1.484 KiB | 0.0% → 17.6% | 0 B → 1.48 KiB |       0 → 1 | `black/trans.py:41`   |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

| Change |  Delta |      % |                Size | Allocations | Location                          |
| -----: | -----: | -----: | ------------------: | ----------: | --------------------------------- |
|  -3.1% | -768 B | 100.0% | 24.1 KiB → 23.3 KiB |     27 → 26 | `/usr/lib/python3.11/enum.py:554` |

##### `<module>` (`black/ranges.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location              |
| ------: | ---------: | -----------: | -------------: | ----------: | --------------------- |
| removed | -1.484 KiB | 30.5% → 0.0% | 1.48 KiB → 0 B |       1 → 0 | `black/ranges.py:509` |
|     new |     +768 B | 0.0% → 18.2% |    0 B → 768 B |       0 → 1 | `black/ranges.py:7`   |

##### `_first_right_hand_split` (`black/linegen.py:829`)

| Change |  Delta |      % |             Size | Allocations | Location               |
| -----: | -----: | -----: | ---------------: | ----------: | ---------------------- |
| -25.9% | -274 B | 100.0% | 1.03 KiB → 784 B |           1 | `black/linegen.py:918` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

| Change |  Delta |      % |     Size | Allocations | Location                                     |
| -----: | -----: | -----: | -------: | ----------: | -------------------------------------------- |
|    ~0% | -213 B | 100.0% | 2.55 MiB |   619 → 618 | `<frozen importlib._bootstrap_external>:729` |

##### `<module>` (`blib2to3/pgen2/tokenize.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location                             |
| ------: | ---------: | -----------: | -------------: | ----------: | ------------------------------------ |
| removed | -3.187 KiB | 15.4% → 0.0% | 3.19 KiB → 0 B |       1 → 0 | `blib2to3/pgen2/tokenize.py:170`     |
|     new | +3.187 KiB | 0.0% → 15.4% | 0 B → 3.19 KiB |       0 → 1 | `blib2to3/pgen2/tokenize.py:163`     |
|   -1.3% |       -8 B |         2.8% |  600 B → 592 B |           1 | `blib2to3/pgen2/tokenize.py:76 → 65` |

### Total size

#### Regressions

Functions with the largest increase in total bytes held at peak memory in the function and all its callees.

##### Ours

|  Change |  Delta |             % |                Size |     Allocations | Function                     | Location                            |
| ------: | -----: | ------------: | ------------------: | --------------: | ---------------------------- | ----------------------------------- |
|  +15.0% | +5 MiB | 42.6% → 48.9% | 33.4 MiB → 38.4 MiB | 21,082 → 21,087 | `visit_default`              | `black/linegen.py:134`              |
|  +14.9% | +5 MiB | 42.6% → 48.9% | 33.4 MiB → 38.4 MiB | 21,084 → 21,089 | `visit`                      | `black/nodes.py:163 → 152`          |
|  +15.0% | +5 MiB | 42.6% → 48.9% | 33.4 MiB → 38.4 MiB | 21,082 → 21,087 | `visit_default`              | `black/nodes.py:187 → 176`          |
|  +15.1% | +5 MiB | 42.2% → 48.6% | 33.2 MiB → 38.2 MiB | 20,711 → 20,716 | `visit_stmt`                 | `black/linegen.py:199`              |
|  +12.2% | +4 MiB | 41.7% → 46.7% | 32.7 MiB → 36.7 MiB | 20,144 → 20,148 | `visit_suite`                | `black/linegen.py:288`              |
|  +12.2% | +4 MiB | 41.8% → 46.8% | 32.8 MiB → 36.8 MiB | 20,270 → 20,274 | `visit_funcdef`              | `black/linegen.py:254`              |
|  +99.9% | +4 MiB |  5.1% → 10.2% |       4 MiB → 8 MiB |          8 → 12 | `convert`                    | `blib2to3/pytree.py:486 → 475`      |
|  +17.4% | +3 MiB | 22.0% → 25.8% | 17.3 MiB → 20.3 MiB | 20,882 → 20,885 | `append`                     | `black/lines.py:63 → 52`            |
|     new | +3 MiB |   0.0% → 3.8% |         0 B → 3 MiB |           0 → 3 | `line`                       | `black/linegen.py:109`              |
|     new | +3 MiB |   0.0% → 3.8% |         0 B → 3 MiB |           0 → 3 | `visit_INDENT`               | `black/linegen.py:179`              |
| +175.1% | +2 MiB |   1.5% → 4.0% | 1.14 MiB → 3.14 MiB |       196 → 198 | `update_sibling_maps`        | `blib2to3/pytree.py:369 → 358`      |
| +175.1% | +2 MiB |   1.5% → 4.0% | 1.14 MiB → 3.14 MiB |       196 → 198 | `prev_sibling`               | `blib2to3/pytree.py:207 → 196`      |
| +189.7% | +2 MiB |   1.3% → 3.9% | 1.05 MiB → 3.05 MiB |         90 → 92 | `whitespace`                 | `black/nodes.py:194 → 183`          |
| +100.0% | +2 MiB |   2.5% → 5.1% |       2 MiB → 4 MiB |           2 → 4 | `wrap_in_parentheses`        | `black/nodes.py:935 → 930`          |
| +200.0% | +2 MiB |   1.3% → 3.8% |       1 MiB → 3 MiB |           1 → 3 | `__init__`                   | `<string>:2`                        |
| +200.0% | +2 MiB |   1.3% → 3.8% |       1 MiB → 3 MiB |           1 → 3 | `prefix`                     | `blib2to3/pytree.py:329 → 318`      |
| +199.4% | +2 MiB |   1.3% → 3.8% |       1 MiB → 3 MiB |           5 → 7 | `pop`                        | `blib2to3/pgen2/parse.py:398 → 386` |
|  +40.0% | +2 MiB |   6.4% → 8.9% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                    | `blib2to3/pytree.py:81 → 70`        |
|   +6.2% | +1 MiB | 20.6% → 21.9% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                       | `black/brackets.py:70`              |
|  +33.3% | +1 MiB |   3.8% → 5.1% |       3 MiB → 4 MiB |           4 → 5 | `normalize_invisible_parens` | `black/linegen.py:1328 → 1344`      |

##### Standard library

| Change |      Delta |           % |                Size | Allocations | Function           | Location                                |
| -----: | ---------: | ----------: | ------------------: | ----------: | ------------------ | --------------------------------------- |
|    new |     +1 MiB | 0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `_uniq`            | `/usr/lib/python3.11/re/_parser.py:444` |
| +22.0% | +1.484 KiB |       <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__`      | `/usr/lib/python3.11/enum.py:831`       |
|  +2.3% |     +752 B |       <0.1% | 32.5 KiB → 33.2 KiB |          38 | `__new__`          | `/usr/lib/python3.11/enum.py:488`       |
|    ~0% |     +222 B |       94.5% |            74.3 MiB |      21,394 | `_run_code`        | `<frozen runpy>:65`                     |
|    ~0% |     +222 B |       94.5% |            74.3 MiB |      21,394 | `_run_module_code` | `<frozen runpy>:91`                     |

#### Improvements

Functions with the largest decrease in total bytes held at peak memory in the function and all its callees.

|  Change |      Delta |             % |                Size |     Allocations | Function                            | Location                            |
| ------: | ---------: | ------------: | ------------------: | --------------: | ----------------------------------- | ----------------------------------- |
|  -79.8% |     -4 MiB |   6.4% → 1.3% | 5.01 MiB → 1.01 MiB |         17 → 13 | `transform_line`                    | `black/linegen.py:601`              |
|  -57.1% |     -4 MiB |   8.9% → 3.8% |       7 MiB → 3 MiB |           7 → 3 | `normalize_trailing_prefix`         | `black/comments.py:127`             |
|  -99.7% |     -3 MiB |  3.8% → <0.1% | 3.01 MiB → 8.33 KiB |          11 → 8 | `run_transformer`                   | `black/linegen.py:1755 → 1771`      |
|  -33.3% |     -3 MiB |  11.5% → 7.6% |       9 MiB → 6 MiB |           9 → 6 | `generate_comments`                 | `black/comments.py:52`              |
|  -75.0% |     -3 MiB |   5.1% → 1.3% |       4 MiB → 1 MiB |           4 → 1 | `push`                              | `blib2to3/pgen2/parse.py:386 → 374` |
|  -11.2% |     -2 MiB | 22.8% → 20.2% | 17.9 MiB → 15.9 MiB | 10,809 → 10,807 | `visit_power`                       | `black/linegen.py:341`              |
| -100.0% |     -2 MiB |  2.5% → <0.1% |       2 MiB → 802 B |           3 → 1 | `_hugging_power_ops_line_to_string` | `black/linegen.py:590`              |
| removed |     -2 MiB |   2.5% → 0.0% |         2 MiB → 0 B |           2 → 0 | `hug_power_op`                      | `black/trans.py:85`                 |
|   -8.4% | -1.999 MiB | 30.3% → 27.8% | 23.8 MiB → 21.8 MiB | 13,402 → 13,400 | `visit_simple_stmt`                 | `black/linegen.py:295`              |
|  -99.5% |     -1 MiB |  1.3% → <0.1% | 1.01 MiB → 5.29 KiB |           6 → 5 | `right_hand_split`                  | `black/linegen.py:809`              |
|  -99.4% |     -1 MiB |  1.3% → <0.1% | 1.01 MiB → 6.38 KiB |           7 → 6 | `_rhs`                              | `black/linegen.py:650`              |
|  -99.9% |     -1 MiB |  1.3% → <0.1% |    1 MiB → 1.37 KiB |           3 → 2 | `_first_right_hand_split`           | `black/linegen.py:829`              |
|   -4.3% |     -1 MiB | 29.6% → 28.3% | 23.3 MiB → 22.3 MiB |       209 → 208 | `assert_equivalent`                 | `black/__init__.py:1524 → 1510`     |
|   -9.9% |     -1 MiB | 12.9% → 11.6% | 10.1 MiB → 9.12 MiB |       143 → 142 | `parse`                             | `/usr/lib/python3.11/ast.py:33`     |
|   -9.9% |     -1 MiB | 12.9% → 11.6% | 10.1 MiB → 9.12 MiB |       143 → 142 | `_parse_single_version`             | `black/parsing.py:117 → 125`        |
|   -9.9% |     -1 MiB | 12.9% → 11.6% | 10.1 MiB → 9.12 MiB |       143 → 142 | `parse_ast`                         | `black/parsing.py:129 → 137`        |
|  -67.6% |     -1 MiB |   1.9% → 0.6% |  1.48 MiB → 490 KiB |       654 → 653 | `visit_NUMBER`                      | `black/linegen.py:505`              |
|  -79.7% |     -1 MiB |   1.6% → 0.3% |  1.25 MiB → 260 KiB |       348 → 347 | `visit_factor`                      | `black/linegen.py:379`              |
|  -96.5% |     -1 MiB |  1.3% → <0.1% | 1.04 MiB → 37.7 KiB |         67 → 66 | `preceding_leaf`                    | `black/nodes.py:441 → 436`          |
|  -99.7% |     -1 MiB |  1.3% → <0.1% |    1 MiB → 3.03 KiB |           5 → 4 | `__init__`                          | `blib2to3/pytree.py:248 → 237`      |

##### Ours

|  Change |      Delta |             % |                Size |     Allocations | Function                               | Location                            |
| ------: | ---------: | ------------: | ------------------: | --------------: | -------------------------------------- | ----------------------------------- |
|  -79.8% |     -4 MiB |   6.4% → 1.3% | 5.01 MiB → 1.01 MiB |         17 → 13 | `transform_line`                       | `black/linegen.py:601`              |
|  -57.1% |     -4 MiB |   8.9% → 3.8% |       7 MiB → 3 MiB |           7 → 3 | `normalize_trailing_prefix`            | `black/comments.py:127`             |
|  -99.7% |     -3 MiB |  3.8% → <0.1% | 3.01 MiB → 8.33 KiB |          11 → 8 | `run_transformer`                      | `black/linegen.py:1755 → 1771`      |
|  -33.3% |     -3 MiB |  11.5% → 7.6% |       9 MiB → 6 MiB |           9 → 6 | `generate_comments`                    | `black/comments.py:52`              |
|  -75.0% |     -3 MiB |   5.1% → 1.3% |       4 MiB → 1 MiB |           4 → 1 | `push`                                 | `blib2to3/pgen2/parse.py:386 → 374` |
|  -11.2% |     -2 MiB | 22.8% → 20.2% | 17.9 MiB → 15.9 MiB | 10,809 → 10,807 | `visit_power`                          | `black/linegen.py:341`              |
| -100.0% |     -2 MiB |  2.5% → <0.1% |       2 MiB → 802 B |           3 → 1 | `_hugging_power_ops_line_to_string`    | `black/linegen.py:590`              |
| removed |     -2 MiB |   2.5% → 0.0% |         2 MiB → 0 B |           2 → 0 | `hug_power_op`                         | `black/trans.py:85`                 |
|   -8.4% | -1.999 MiB | 30.3% → 27.8% | 23.8 MiB → 21.8 MiB | 13,402 → 13,400 | `visit_simple_stmt`                    | `black/linegen.py:295`              |
|  -99.5% |     -1 MiB |  1.3% → <0.1% | 1.01 MiB → 5.29 KiB |           6 → 5 | `right_hand_split`                     | `black/linegen.py:809`              |
|  -99.4% |     -1 MiB |  1.3% → <0.1% | 1.01 MiB → 6.38 KiB |           7 → 6 | `_rhs`                                 | `black/linegen.py:650`              |
|  -99.9% |     -1 MiB |  1.3% → <0.1% |    1 MiB → 1.37 KiB |           3 → 2 | `_first_right_hand_split`              | `black/linegen.py:829`              |
|   -4.3% |     -1 MiB | 29.6% → 28.3% | 23.3 MiB → 22.3 MiB |       209 → 208 | `assert_equivalent`                    | `black/__init__.py:1524 → 1510`     |
|   -9.9% |     -1 MiB | 12.9% → 11.6% | 10.1 MiB → 9.12 MiB |       143 → 142 | `_parse_single_version`                | `black/parsing.py:117 → 125`        |
|   -9.9% |     -1 MiB | 12.9% → 11.6% | 10.1 MiB → 9.12 MiB |       143 → 142 | `parse_ast`                            | `black/parsing.py:129 → 137`        |
|  -67.6% |     -1 MiB |   1.9% → 0.6% |  1.48 MiB → 490 KiB |       654 → 653 | `visit_NUMBER`                         | `black/linegen.py:505`              |
|  -79.7% |     -1 MiB |   1.6% → 0.3% |  1.25 MiB → 260 KiB |       348 → 347 | `visit_factor`                         | `black/linegen.py:379`              |
|  -96.5% |     -1 MiB |  1.3% → <0.1% | 1.04 MiB → 37.7 KiB |         67 → 66 | `preceding_leaf`                       | `black/nodes.py:441 → 436`          |
|  -99.7% |     -1 MiB |  1.3% → <0.1% |    1 MiB → 3.03 KiB |           5 → 4 | `__init__`                             | `blib2to3/pytree.py:248 → 237`      |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |           1 → 0 | `contains_uncollapsable_type_comments` | `black/lines.py:276`                |

##### Standard library

|  Change |      Delta |             % |                Size |     Allocations | Function                    | Location                                      |
| ------: | ---------: | ------------: | ------------------: | --------------: | --------------------------- | --------------------------------------------- |
|   -9.9% |     -1 MiB | 12.9% → 11.6% | 10.1 MiB → 9.12 MiB |       143 → 142 | `parse`                     | `/usr/lib/python3.11/ast.py:33`               |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__getitem__`               | `/usr/lib/python3.11/re/_parser.py:162`       |
|     ~0% | -1.918 KiB |          5.5% | 4.32 MiB → 4.31 MiB |   1,299 → 1,298 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|     ~0% | -1.918 KiB |          5.5% |            4.32 MiB |   1,301 → 1,300 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|     ~0% | -1.918 KiB |          5.5% |            4.32 MiB |   1,302 → 1,301 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|     ~0% | -1.918 KiB |          5.5% |            4.32 MiB |   1,304 → 1,303 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|     ~0% | -1.918 KiB |          5.5% | 4.33 MiB → 4.32 MiB |   1,311 → 1,310 | `_get_module_details`       | `<frozen runpy>:105`                          |
|     ~0% | -1.702 KiB |        100.0% |            78.6 MiB | 22,706 → 22,705 | `run_module`                | `<frozen runpy>:201`                          |
|     ~0% |  -1.46 KiB |   5.5% → 5.4% |            4.28 MiB |           1,269 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|     ~0% |     -213 B |          3.2% |            2.55 MiB |       619 → 618 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|     ~0% |     -213 B |          3.2% |            2.55 MiB |       619 → 618 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|     ~0% |       -8 B |          1.7% |            1.31 MiB |             319 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |

# Leaked memory profile diff

Leaked 58.9 MiB → 55.9 MiB (-3.001 MiB, -5.1%) over 22,506 allocations → 22,502 allocations (2.68 KiB → 2.55 KiB per allocation).

| Category         | Change |      Delta |             % |                Size |     Allocations |
| ---------------- | -----: | ---------: | ------------: | ------------------: | --------------: |
| Ours             |  -5.8% | -3.002 MiB | 88.0% → 87.4% | 51.9 MiB → 48.9 MiB | 21,387 → 21,384 |
| Standard library |    ~0% |     +539 B | 11.6% → 12.2% |            6.83 MiB |       889 → 888 |
| Third-party      |  +0.1% |     +172 B |          0.4% |             237 KiB |             230 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes never freed directly in the function body, excluding callees.

|     Change |      Delta |             % |                Size |     Allocations | Function                          | Location                                                    |
| ---------: | ---------: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------------------------------------- |
|     +12.3% |     +2 MiB | 27.5% → 32.6% | 16.2 MiB → 18.2 MiB | 20,788 → 20,790 | `mark`                            | `black/brackets.py:70`                                      |
| +174762.7% |     +2 MiB |  <0.1% → 3.6% |    1.17 KiB → 2 MiB |           2 → 4 | `addtoken`                        | `blib2to3/pgen2/parse.py:242 → 230`                         |
|     +40.0% |     +2 MiB |  8.5% → 12.5% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `blib2to3/pytree.py:81 → 70`                                |
|     +99.9% |     +1 MiB |   1.7% → 3.6% |       1 MiB → 2 MiB |           2 → 3 | `visit_default`                   | `black/linegen.py:134`                                      |
|     +87.6% |     +1 MiB |   1.9% → 3.8% | 1.14 MiB → 2.14 MiB |       196 → 197 | `update_sibling_maps`             | `blib2to3/pytree.py:369 → 358`                              |
|   +1338.7% |     +1 MiB |   0.1% → 1.9% | 76.5 KiB → 1.07 MiB |           6 → 7 | `transform_line`                  | `black/linegen.py:601`                                      |
|        new |     +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `convert`                         | `blib2to3/pytree.py:486 → 475`                              |
|        new |     +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `__str__`                         | `black/lines.py:490 → 479`                                  |
|        new |     +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `line`                            | `black/linegen.py:109`                                      |
|        new |     +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `_uniq`                           | `/usr/lib/python3.11/re/_parser.py:444`                     |
|     +22.0% | +1.484 KiB |         <0.1% | 6.73 KiB → 8.22 KiB |           8 → 9 | `__setattr__`                     | `/usr/lib/python3.11/enum.py:831`                           |
|      +5.5% |     +172 B |         <0.1% | 3.04 KiB → 3.21 KiB |               2 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |
|      +3.3% |     +104 B |         <0.1% |  3.1 KiB → 3.21 KiB |               4 | `_format_str_once`                | `black/__init__.py:1236 → 1215`                             |
|      +1.5% |      +96 B |         <0.1% | 6.24 KiB → 6.33 KiB |               4 | `append`                          | `black/lines.py:63 → 52`                                    |
|      +5.5% |      +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `black/cache.py:50`                                         |
|     +10.1% |      +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `black/__init__.py:1037 → 1042`                             |

##### Ours

|     Change |  Delta |             % |                Size |     Allocations | Function                          | Location                            |
| ---------: | -----: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------------- |
|     +12.3% | +2 MiB | 27.5% → 32.6% | 16.2 MiB → 18.2 MiB | 20,788 → 20,790 | `mark`                            | `black/brackets.py:70`              |
| +174762.7% | +2 MiB |  <0.1% → 3.6% |    1.17 KiB → 2 MiB |           2 → 4 | `addtoken`                        | `blib2to3/pgen2/parse.py:242 → 230` |
|     +40.0% | +2 MiB |  8.5% → 12.5% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `blib2to3/pytree.py:81 → 70`        |
|     +99.9% | +1 MiB |   1.7% → 3.6% |       1 MiB → 2 MiB |           2 → 3 | `visit_default`                   | `black/linegen.py:134`              |
|     +87.6% | +1 MiB |   1.9% → 3.8% | 1.14 MiB → 2.14 MiB |       196 → 197 | `update_sibling_maps`             | `blib2to3/pytree.py:369 → 358`      |
|   +1338.7% | +1 MiB |   0.1% → 1.9% | 76.5 KiB → 1.07 MiB |           6 → 7 | `transform_line`                  | `black/linegen.py:601`              |
|        new | +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `convert`                         | `blib2to3/pytree.py:486 → 475`      |
|        new | +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `__str__`                         | `black/lines.py:490 → 479`          |
|        new | +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `line`                            | `black/linegen.py:109`              |
|      +3.3% | +104 B |         <0.1% |  3.1 KiB → 3.21 KiB |               4 | `_format_str_once`                | `black/__init__.py:1236 → 1215`     |
|      +1.5% |  +96 B |         <0.1% | 6.24 KiB → 6.33 KiB |               4 | `append`                          | `black/lines.py:63 → 52`            |
|      +5.5% |  +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `black/cache.py:50`                 |
|     +10.1% |  +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `black/__init__.py:1037 → 1042`     |

##### Standard library

| Change |      Delta |           % |                Size | Allocations | Function      | Location                                |
| -----: | ---------: | ----------: | ------------------: | ----------: | ------------- | --------------------------------------- |
|    new |     +1 MiB | 0.0% → 1.8% |         0 B → 1 MiB |       0 → 1 | `_uniq`       | `/usr/lib/python3.11/re/_parser.py:444` |
| +22.0% | +1.484 KiB |       <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__` | `/usr/lib/python3.11/enum.py:831`       |

#### Improvements

Functions with the largest decrease in bytes never freed directly in the function body, excluding callees.

|  Change |      Delta |            % |                Size | Allocations | Function                               | Location                                     |
| ------: | ---------: | -----------: | ------------------: | ----------: | -------------------------------------- | -------------------------------------------- |
|  -75.0% |     -3 MiB |  6.8% → 1.8% |       4 MiB → 1 MiB |       4 → 1 | `push`                                 | `blib2to3/pgen2/parse.py:386 → 374`          |
|  -28.6% |     -2 MiB | 11.9% → 8.9% |       7 MiB → 5 MiB |       7 → 5 | `changed`                              | `blib2to3/pytree.py:171 → 160`               |
|  -33.3% |     -1 MiB |  5.1% → 3.6% |       3 MiB → 2 MiB |       7 → 6 | `visit`                                | `black/nodes.py:163 → 152`                   |
|  -99.7% |     -1 MiB | 1.7% → <0.1% |    1 MiB → 3.03 KiB |       5 → 4 | `__init__`                             | `blib2to3/pytree.py:248 → 237`               |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `pop`                                  | `blib2to3/pgen2/parse.py:398 → 386`          |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `_addtoken`                            | `blib2to3/pgen2/parse.py:290 → 278`          |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `normalize_trailing_prefix`            | `black/comments.py:127`                      |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `contains_uncollapsable_type_comments` | `black/lines.py:276`                         |
|  -50.0% |     -1 MiB |  3.4% → 1.8% |       2 MiB → 1 MiB |       2 → 1 | `generate_tokens`                      | `blib2to3/pgen2/tokenize.py:565 → 554`       |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `prefix`                               | `blib2to3/pytree.py:480 → 469`               |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__getitem__`                          | `/usr/lib/python3.11/re/_parser.py:162`      |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `hug_power_op`                         | `black/trans.py:85`                          |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__str__`                              | `blib2to3/pytree.py:440`                     |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                             | `black/trans.py:1`                           |
|   -3.1% |     -768 B |        <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`                              | `/usr/lib/python3.11/enum.py:488`            |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                             | `black/ranges.py:1`                          |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split`              | `black/linegen.py:829`                       |
|     ~0% |     -213 B |  4.3% → 4.6% |            2.55 MiB |   619 → 618 | `_compile_bytecode`                    | `<frozen importlib._bootstrap_external>:727` |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                             | `blib2to3/pgen2/tokenize.py:1`               |

##### Ours

|  Change |      Delta |            % |                Size | Allocations | Function                               | Location                               |
| ------: | ---------: | -----------: | ------------------: | ----------: | -------------------------------------- | -------------------------------------- |
|  -75.0% |     -3 MiB |  6.8% → 1.8% |       4 MiB → 1 MiB |       4 → 1 | `push`                                 | `blib2to3/pgen2/parse.py:386 → 374`    |
|  -28.6% |     -2 MiB | 11.9% → 8.9% |       7 MiB → 5 MiB |       7 → 5 | `changed`                              | `blib2to3/pytree.py:171 → 160`         |
|  -33.3% |     -1 MiB |  5.1% → 3.6% |       3 MiB → 2 MiB |       7 → 6 | `visit`                                | `black/nodes.py:163 → 152`             |
|  -99.7% |     -1 MiB | 1.7% → <0.1% |    1 MiB → 3.03 KiB |       5 → 4 | `__init__`                             | `blib2to3/pytree.py:248 → 237`         |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `pop`                                  | `blib2to3/pgen2/parse.py:398 → 386`    |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `_addtoken`                            | `blib2to3/pgen2/parse.py:290 → 278`    |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `normalize_trailing_prefix`            | `black/comments.py:127`                |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `contains_uncollapsable_type_comments` | `black/lines.py:276`                   |
|  -50.0% |     -1 MiB |  3.4% → 1.8% |       2 MiB → 1 MiB |       2 → 1 | `generate_tokens`                      | `blib2to3/pgen2/tokenize.py:565 → 554` |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `prefix`                               | `blib2to3/pytree.py:480 → 469`         |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `hug_power_op`                         | `black/trans.py:85`                    |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__str__`                              | `blib2to3/pytree.py:440`               |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                             | `black/trans.py:1`                     |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                             | `black/ranges.py:1`                    |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split`              | `black/linegen.py:829`                 |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                             | `blib2to3/pgen2/tokenize.py:1`         |

##### Standard library

|  Change |  Delta |           % |                Size | Allocations | Function            | Location                                     |
| ------: | -----: | ----------: | ------------------: | ----------: | ------------------- | -------------------------------------------- |
| removed | -1 MiB | 1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__getitem__`       | `/usr/lib/python3.11/re/_parser.py:162`      |
|   -3.1% | -768 B |       <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`           | `/usr/lib/python3.11/enum.py:488`            |
|     ~0% | -213 B | 4.3% → 4.6% |            2.55 MiB |   619 → 618 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `mark` (`black/brackets.py:70`)

| Change |  Delta |              % |                Size |     Allocations | Location                |
| -----: | -----: | -------------: | ------------------: | --------------: | ----------------------- |
|  +6.2% | +1 MiB | 100.0% → 94.5% | 16.2 MiB → 17.2 MiB | 20,787 → 20,788 | `black/brackets.py:112` |
|    new | +1 MiB |    0.0% → 5.5% |         0 B → 1 MiB |           0 → 1 | `black/brackets.py:118` |

##### `addtoken` (`blib2to3/pgen2/parse.py:230`)

|     Change |  Delta |              % |          Size | Allocations | Location                            |
| ---------: | -----: | -------------: | ------------: | ----------: | ----------------------------------- |
| +327680.0% | +2 MiB | 53.3% → 100.0% | 640 B → 2 MiB |       1 → 3 | `blib2to3/pgen2/parse.py:252 → 240` |

##### `__new__` (`blib2to3/pytree.py:70`)

| Change |  Delta |      % |          Size | Allocations | Location                     |
| -----: | -----: | -----: | ------------: | ----------: | ---------------------------- |
| +40.0% | +2 MiB | 100.0% | 5 MiB → 7 MiB |       5 → 7 | `blib2to3/pytree.py:84 → 73` |

##### `visit_default` (`black/linegen.py:134`)

|  Change |  Delta |              % |          Size | Allocations | Location               |
| ------: | -----: | -------------: | ------------: | ----------: | ---------------------- |
| +100.0% | +1 MiB | 99.9% → 100.0% | 1 MiB → 2 MiB |       1 → 2 | `black/linegen.py:158` |

##### `update_sibling_maps` (`blib2to3/pytree.py:358`)

|   Change |  Delta |            % |                Size | Allocations | Location                       |
| -------: | -----: | -----------: | ------------------: | ----------: | ------------------------------ |
|  removed | -1 MiB | 87.6% → 0.0% |         1 MiB → 0 B |       1 → 0 | `blib2to3/pytree.py:371`       |
| +1456.7% | +1 MiB | 6.0% → 49.9% | 70.3 KiB → 1.07 MiB |     93 → 94 | `blib2to3/pytree.py:376 → 365` |
| +1456.7% | +1 MiB | 6.0% → 49.9% | 70.3 KiB → 1.07 MiB |     93 → 94 | `blib2to3/pytree.py:377 → 366` |

##### `transform_line` (`black/linegen.py:601`)

| Change |  Delta |            % |        Size | Allocations | Location               |
| -----: | -----: | -----------: | ----------: | ----------: | ---------------------- |
|    new | +1 MiB | 0.0% → 93.0% | 0 B → 1 MiB |       0 → 1 | `black/linegen.py:627` |

##### `convert` (`blib2to3/pytree.py:475`)

| Change |  Delta |             % |        Size | Allocations | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | ------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `blib2to3/pytree.py:492` |

##### `__str__` (`black/lines.py:479`)

| Change |  Delta |             % |        Size | Allocations | Location             |
| -----: | -----: | ------------: | ----------: | ----------: | -------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `black/lines.py:489` |

##### `line` (`black/linegen.py:109`)

| Change |  Delta |             % |        Size | Allocations | Location               |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `black/linegen.py:131` |

##### `_uniq` (`/usr/lib/python3.11/re/_parser.py:444`)

| Change |  Delta |             % |        Size | Allocations | Location                                |
| -----: | -----: | ------------: | ----------: | ----------: | --------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `/usr/lib/python3.11/re/_parser.py:445` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

| Change |      Delta |      % |                Size | Allocations | Location                          |
| -----: | ---------: | -----: | ------------------: | ----------: | --------------------------------- |
| +22.0% | +1.484 KiB | 100.0% | 6.73 KiB → 8.22 KiB |       8 → 9 | `/usr/lib/python3.11/enum.py:842` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

| Change |  Delta |      % |                Size | Allocations | Location                                                    |
| -----: | -----: | -----: | ------------------: | ----------: | ----------------------------------------------------------- |
|  +5.5% | +172 B | 100.0% | 3.04 KiB → 3.21 KiB |           2 | `/venv/lib/python3.11/site-packages/click/decorators.py:34` |

##### `_format_str_once` (`black/__init__.py:1215`)

| Change |  Delta |             % |          Size | Allocations | Location                        |
| -----: | -----: | ------------: | ------------: | ----------: | ------------------------------- |
| +13.0% | +104 B | 25.2% → 27.5% | 800 B → 904 B |           1 | `black/__init__.py:1239 → 1218` |

##### `append` (`black/lines.py:52`)

| Change | Delta |             % |             Size | Allocations | Location                 |
| -----: | ----: | ------------: | ---------------: | ----------: | ------------------------ |
|  +2.3% | +96 B | 64.1% → 64.6% | 4 KiB → 4.09 KiB |           1 | `black/lines.py:89 → 78` |

##### `get_cache_file` (`black/cache.py:50`)

| Change | Delta |      % |                Size | Allocations | Location            |
| -----: | ----: | -----: | ------------------: | ----------: | ------------------- |
|  +5.5% | +64 B | 100.0% | 1.13 KiB → 1.19 KiB |           1 | `black/cache.py:51` |

##### `check_stability_and_equivalence` (`black/__init__.py:1042`)

| Change | Delta |      % |          Size | Allocations | Location                        |
| -----: | ----: | -----: | ------------: | ----------: | ------------------------------- |
| +10.1% | +60 B | 100.0% | 594 B → 654 B |           1 | `black/__init__.py:1050 → 1055` |

##### `push` (`blib2to3/pgen2/parse.py:374`)

| Change |  Delta |      % |          Size | Allocations | Location                            |
| -----: | -----: | -----: | ------------: | ----------: | ----------------------------------- |
| -75.0% | -3 MiB | 100.0% | 4 MiB → 1 MiB |       4 → 1 | `blib2to3/pgen2/parse.py:394 → 382` |

##### `changed` (`blib2to3/pytree.py:160`)

| Change |  Delta |             % |          Size | Allocations | Location                       |
| -----: | -----: | ------------: | ------------: | ----------: | ------------------------------ |
| -50.0% | -2 MiB | 57.1% → 40.0% | 4 MiB → 2 MiB |       4 → 2 | `blib2to3/pytree.py:176 → 165` |

##### `visit` (`black/nodes.py:152`)

| Change |  Delta |     % |          Size | Allocations | Location                   |
| -----: | -----: | ----: | ------------: | ----------: | -------------------------- |
| -33.3% | -1 MiB | 99.9% | 3 MiB → 2 MiB |       4 → 3 | `black/nodes.py:185 → 174` |

##### `__init__` (`blib2to3/pytree.py:237`)

| Change |  Delta |      % |             Size | Allocations | Location                       |
| -----: | -----: | -----: | ---------------: | ----------: | ------------------------------ |
| -99.7% | -1 MiB | 100.0% | 1 MiB → 3.03 KiB |       5 → 4 | `blib2to3/pytree.py:266 → 255` |

##### `pop` (`blib2to3/pgen2/parse.py:386`)

|  Change |  Delta |             % |        Size | Allocations | Location                      |
| ------: | -----: | ------------: | ----------: | ----------: | ----------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `blib2to3/pgen2/parse.py:408` |

##### `_addtoken` (`blib2to3/pgen2/parse.py:278`)

|  Change |  Delta |             % |        Size | Allocations | Location                      |
| ------: | -----: | ------------: | ----------: | ----------: | ----------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `blib2to3/pgen2/parse.py:314` |

##### `normalize_trailing_prefix` (`black/comments.py:127`)

|  Change |  Delta |             % |        Size | Allocations | Location                |
| ------: | -----: | ------------: | ----------: | ----------: | ----------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `black/comments.py:136` |

##### `contains_uncollapsable_type_comments` (`black/lines.py:276`)

|  Change |  Delta |             % |        Size | Allocations | Location             |
| ------: | -----: | ------------: | ----------: | ----------: | -------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `black/lines.py:280` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:554`)

|  Change |  Delta |             % |        Size | Allocations | Location                         |
| ------: | -----: | ------------: | ----------: | ----------: | -------------------------------- |
| removed | -1 MiB |  50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `blib2to3/pgen2/tokenize.py:614` |
| removed | -1 MiB |  50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `blib2to3/pgen2/tokenize.py:972` |
|     new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `blib2to3/pgen2/tokenize.py:694` |

##### `prefix` (`blib2to3/pytree.py:469`)

|  Change |  Delta |             % |        Size | Allocations | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `blib2to3/pytree.py:482` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`)

|  Change |  Delta |             % |        Size | Allocations | Location                                |
| ------: | -----: | ------------: | ----------: | ----------: | --------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `/usr/lib/python3.11/re/_parser.py:164` |

##### `hug_power_op` (`black/trans.py:85`)

|  Change |  Delta |             % |        Size | Allocations | Location            |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `black/trans.py:95` |

##### `__str__` (`blib2to3/pytree.py:440`)

|  Change |  Delta |             % |        Size | Allocations | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `blib2to3/pytree.py:446` |

##### `<module>` (`black/trans.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location              |
| ------: | ---------: | -----------: | -------------: | ----------: | --------------------- |
| removed | -3.187 KiB | 31.5% → 0.0% | 3.19 KiB → 0 B |       1 → 0 | `black/trans.py:1914` |
|     new | +1.484 KiB | 0.0% → 17.6% | 0 B → 1.48 KiB |       0 → 1 | `black/trans.py:41`   |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

| Change |  Delta |      % |                Size | Allocations | Location                          |
| -----: | -----: | -----: | ------------------: | ----------: | --------------------------------- |
|  -3.1% | -768 B | 100.0% | 24.1 KiB → 23.3 KiB |     27 → 26 | `/usr/lib/python3.11/enum.py:554` |

##### `<module>` (`black/ranges.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location              |
| ------: | ---------: | -----------: | -------------: | ----------: | --------------------- |
| removed | -1.484 KiB | 30.5% → 0.0% | 1.48 KiB → 0 B |       1 → 0 | `black/ranges.py:509` |
|     new |     +768 B | 0.0% → 18.2% |    0 B → 768 B |       0 → 1 | `black/ranges.py:7`   |

##### `_first_right_hand_split` (`black/linegen.py:829`)

| Change |  Delta |      % |             Size | Allocations | Location               |
| -----: | -----: | -----: | ---------------: | ----------: | ---------------------- |
| -25.9% | -274 B | 100.0% | 1.03 KiB → 784 B |           1 | `black/linegen.py:918` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

| Change |  Delta |      % |     Size | Allocations | Location                                     |
| -----: | -----: | -----: | -------: | ----------: | -------------------------------------------- |
|    ~0% | -213 B | 100.0% | 2.55 MiB |   619 → 618 | `<frozen importlib._bootstrap_external>:729` |

##### `<module>` (`blib2to3/pgen2/tokenize.py:1`)

|  Change |      Delta |            % |           Size | Allocations | Location                             |
| ------: | ---------: | -----------: | -------------: | ----------: | ------------------------------------ |
| removed | -3.187 KiB | 15.4% → 0.0% | 3.19 KiB → 0 B |       1 → 0 | `blib2to3/pgen2/tokenize.py:170`     |
|     new | +3.187 KiB | 0.0% → 15.4% | 0 B → 3.19 KiB |       0 → 1 | `blib2to3/pgen2/tokenize.py:163`     |
|   -1.3% |       -8 B |         2.8% |  600 B → 592 B |           1 | `blib2to3/pgen2/tokenize.py:76 → 65` |

### Total size

#### Regressions

Functions with the largest increase in total bytes never freed in the function and all its callees.

|  Change |      Delta |             % |                Size |     Allocations | Function                          | Location                                |
| ------: | ---------: | ------------: | ------------------: | --------------: | --------------------------------- | --------------------------------------- |
|  +99.9% |     +4 MiB |  6.8% → 14.3% |       4 MiB → 8 MiB |          8 → 12 | `convert`                         | `blib2to3/pytree.py:486 → 475`          |
|  +17.4% |     +3 MiB | 29.3% → 36.3% | 17.3 MiB → 20.3 MiB | 20,882 → 20,885 | `append`                          | `black/lines.py:63 → 52`                |
|  +15.4% |     +3 MiB | 33.1% → 40.3% | 19.5 MiB → 22.5 MiB | 21,061 → 21,064 | `check_stability_and_equivalence` | `black/__init__.py:1037 → 1042`         |
|  +19.3% |     +3 MiB | 26.3% → 33.1% | 15.5 MiB → 18.5 MiB | 21,054 → 21,057 | `assert_stable`                   | `black/__init__.py:1557 → 1543`         |
|  +12.3% |     +2 MiB | 27.5% → 32.6% | 16.2 MiB → 18.2 MiB | 20,788 → 20,790 | `mark`                            | `black/brackets.py:70`                  |
| +199.4% |     +2 MiB |   1.7% → 5.4% |       1 MiB → 3 MiB |           5 → 7 | `pop`                             | `blib2to3/pgen2/parse.py:398 → 386`     |
|  +40.0% |     +2 MiB |  8.5% → 12.5% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `blib2to3/pytree.py:81 → 70`            |
|     new |     +2 MiB |   0.0% → 3.6% |         0 B → 2 MiB |           0 → 2 | `line`                            | `black/linegen.py:109`                  |
|  +87.6% |     +1 MiB |   1.9% → 3.8% | 1.14 MiB → 2.14 MiB |       196 → 197 | `update_sibling_maps`             | `blib2to3/pytree.py:369 → 358`          |
|  +87.6% |     +1 MiB |   1.9% → 3.8% | 1.14 MiB → 2.14 MiB |       196 → 197 | `prev_sibling`                    | `blib2to3/pytree.py:207 → 196`          |
|  +94.8% |     +1 MiB |   1.8% → 3.7% | 1.05 MiB → 2.05 MiB |         90 → 91 | `whitespace`                      | `black/nodes.py:194 → 183`              |
|  +10.0% |     +1 MiB | 17.0% → 19.7% |     10 MiB → 11 MiB |         17 → 18 | `addtoken`                        | `blib2to3/pgen2/parse.py:242 → 230`     |
|  +25.0% |     +1 MiB |   6.8% → 8.9% |       4 MiB → 5 MiB |           4 → 5 | `shift`                           | `blib2to3/pgen2/parse.py:373 → 361`     |
|     new |     +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `_uniq`                           | `/usr/lib/python3.11/re/_parser.py:444` |
|     new |     +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `visit_INDENT`                    | `black/linegen.py:179`                  |
|  +22.0% | +1.484 KiB |         <0.1% | 6.73 KiB → 8.22 KiB |           8 → 9 | `__setattr__`                     | `/usr/lib/python3.11/enum.py:831`       |
|   +2.2% |     +837 B |          0.1% | 36.9 KiB → 37.8 KiB |              41 | `<module>`                        | `black/cache.py:1`                      |
|   +0.1% |     +794 B |   2.1% → 2.2% |            1.22 MiB |       235 → 236 | `<module>`                        | `black/files.py:1`                      |
|   +2.3% |     +752 B |          0.1% | 32.5 KiB → 33.2 KiB |              38 | `__new__`                         | `/usr/lib/python3.11/enum.py:488`       |
|   +2.9% |     +752 B |         <0.1% | 25.2 KiB → 25.9 KiB |              28 | `<module>`                        | `black/mode.py:1`                       |

##### Ours

|  Change |  Delta |             % |                Size |     Allocations | Function                          | Location                            |
| ------: | -----: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------------- |
|  +99.9% | +4 MiB |  6.8% → 14.3% |       4 MiB → 8 MiB |          8 → 12 | `convert`                         | `blib2to3/pytree.py:486 → 475`      |
|  +17.4% | +3 MiB | 29.3% → 36.3% | 17.3 MiB → 20.3 MiB | 20,882 → 20,885 | `append`                          | `black/lines.py:63 → 52`            |
|  +15.4% | +3 MiB | 33.1% → 40.3% | 19.5 MiB → 22.5 MiB | 21,061 → 21,064 | `check_stability_and_equivalence` | `black/__init__.py:1037 → 1042`     |
|  +19.3% | +3 MiB | 26.3% → 33.1% | 15.5 MiB → 18.5 MiB | 21,054 → 21,057 | `assert_stable`                   | `black/__init__.py:1557 → 1543`     |
|  +12.3% | +2 MiB | 27.5% → 32.6% | 16.2 MiB → 18.2 MiB | 20,788 → 20,790 | `mark`                            | `black/brackets.py:70`              |
| +199.4% | +2 MiB |   1.7% → 5.4% |       1 MiB → 3 MiB |           5 → 7 | `pop`                             | `blib2to3/pgen2/parse.py:398 → 386` |
|  +40.0% | +2 MiB |  8.5% → 12.5% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `blib2to3/pytree.py:81 → 70`        |
|     new | +2 MiB |   0.0% → 3.6% |         0 B → 2 MiB |           0 → 2 | `line`                            | `black/linegen.py:109`              |
|  +87.6% | +1 MiB |   1.9% → 3.8% | 1.14 MiB → 2.14 MiB |       196 → 197 | `update_sibling_maps`             | `blib2to3/pytree.py:369 → 358`      |
|  +87.6% | +1 MiB |   1.9% → 3.8% | 1.14 MiB → 2.14 MiB |       196 → 197 | `prev_sibling`                    | `blib2to3/pytree.py:207 → 196`      |
|  +94.8% | +1 MiB |   1.8% → 3.7% | 1.05 MiB → 2.05 MiB |         90 → 91 | `whitespace`                      | `black/nodes.py:194 → 183`          |
|  +10.0% | +1 MiB | 17.0% → 19.7% |     10 MiB → 11 MiB |         17 → 18 | `addtoken`                        | `blib2to3/pgen2/parse.py:242 → 230` |
|  +25.0% | +1 MiB |   6.8% → 8.9% |       4 MiB → 5 MiB |           4 → 5 | `shift`                           | `blib2to3/pgen2/parse.py:373 → 361` |
|     new | +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `visit_INDENT`                    | `black/linegen.py:179`              |
|   +2.2% | +837 B |          0.1% | 36.9 KiB → 37.8 KiB |              41 | `<module>`                        | `black/cache.py:1`                  |
|   +0.1% | +794 B |   2.1% → 2.2% |            1.22 MiB |       235 → 236 | `<module>`                        | `black/files.py:1`                  |
|   +2.9% | +752 B |         <0.1% | 25.2 KiB → 25.9 KiB |              28 | `<module>`                        | `black/mode.py:1`                   |
|     ~0% | +126 B |   2.2% → 2.3% |             1.3 MiB |             269 | `<module>`                        | `black/comments.py:1`               |
|   +5.5% |  +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `black/cache.py:50`                 |
|   +5.5% |  +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `read`                            | `black/cache.py:60`                 |

##### Standard library

| Change |      Delta |           % |                Size | Allocations | Function      | Location                                |
| -----: | ---------: | ----------: | ------------------: | ----------: | ------------- | --------------------------------------- |
|    new |     +1 MiB | 0.0% → 1.8% |         0 B → 1 MiB |       0 → 1 | `_uniq`       | `/usr/lib/python3.11/re/_parser.py:444` |
| +22.0% | +1.484 KiB |       <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__` | `/usr/lib/python3.11/enum.py:831`       |
|  +2.3% |     +752 B |        0.1% | 32.5 KiB → 33.2 KiB |          38 | `__new__`     | `/usr/lib/python3.11/enum.py:488`       |

#### Improvements

Functions with the largest decrease in total bytes never freed in the function and all its callees.

| Change |      Delta |             % |                Size |     Allocations | Function                    | Location                                                       |
| -----: | ---------: | ------------: | ------------------: | --------------: | --------------------------- | -------------------------------------------------------------- |
| -17.1% |     -6 MiB | 59.5% → 52.0% | 35.1 MiB → 29.1 MiB |         93 → 87 | `format_str`                | `black/__init__.py:1189 → 1168`                                |
| -44.4% |     -4 MiB |  15.3% → 8.9% |       9 MiB → 5 MiB |           9 → 5 | `generate_comments`         | `black/comments.py:52`                                         |
| -57.1% |     -4 MiB |  11.9% → 5.4% |       7 MiB → 3 MiB |           7 → 3 | `normalize_trailing_prefix` | `black/comments.py:127`                                        |
| -16.8% | -3.999 MiB | 40.4% → 35.5% | 23.8 MiB → 19.8 MiB | 13,402 → 13,398 | `visit_simple_stmt`         | `black/linegen.py:295`                                         |
|  -5.1% | -3.001 MiB |        100.0% | 58.9 MiB → 55.9 MiB | 22,505 → 22,501 | `run_module`                | `<frozen runpy>:201`                                           |
|  -5.1% | -3.001 MiB |        100.0% | 58.9 MiB → 55.9 MiB | 22,506 → 22,502 | `_run_tracker`              | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |
|  -5.9% |     -3 MiB | 85.9% → 85.1% | 50.6 MiB → 47.6 MiB | 21,146 → 21,143 | `_format_str_once`          | `black/__init__.py:1236 → 1215`                                |
|  -5.5% |     -3 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,154 → 21,151 | `format_file_contents`      | `black/__init__.py:1054 → 1059`                                |
|  -5.5% |     -3 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,155 → 21,152 | `format_file_in_place`      | `black/__init__.py:917 → 922`                                  |
| -16.8% |     -3 MiB | 30.4% → 26.6% | 17.9 MiB → 14.9 MiB | 10,809 → 10,806 | `visit_power`               | `black/linegen.py:341`                                         |
|  -9.2% |     -3 MiB | 55.5% → 53.2% | 32.7 MiB → 29.7 MiB | 20,144 → 20,141 | `visit_suite`               | `black/linegen.py:288`                                         |
|  -9.1% |     -3 MiB | 55.7% → 53.3% | 32.8 MiB → 29.8 MiB | 20,270 → 20,267 | `visit_funcdef`             | `black/linegen.py:254`                                         |
| -75.0% |     -3 MiB |   6.8% → 1.8% |       4 MiB → 1 MiB |           4 → 1 | `push`                      | `blib2to3/pgen2/parse.py:386 → 374`                            |
| -37.5% |     -3 MiB |  13.6% → 8.9% |       8 MiB → 5 MiB |           8 → 5 | `prefix`                    | `blib2to3/pytree.py:480 → 469`                                 |
|  -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,168 → 21,165 | `main`                      | `black/__init__.py:244 → 240`                                  |
|  -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,162 → 21,159 | `reformat_one`              | `black/__init__.py:860 → 865`                                  |
|  -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,193 → 21,190 | `main`                      | `/venv/lib/python3.11/site-packages/click/core.py:1484`        |
|  -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `__call__`                  | `/venv/lib/python3.11/site-packages/click/core.py:1629`        |
|  -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `patched_main`              | `black/__init__.py:1594 → 1580`                                |
|  -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `<module>`                  | `black/__main__.py:1`                                          |

##### Ours

|  Change |      Delta |             % |                Size |     Allocations | Function                    | Location                            |
| ------: | ---------: | ------------: | ------------------: | --------------: | --------------------------- | ----------------------------------- |
|  -17.1% |     -6 MiB | 59.5% → 52.0% | 35.1 MiB → 29.1 MiB |         93 → 87 | `format_str`                | `black/__init__.py:1189 → 1168`     |
|  -44.4% |     -4 MiB |  15.3% → 8.9% |       9 MiB → 5 MiB |           9 → 5 | `generate_comments`         | `black/comments.py:52`              |
|  -57.1% |     -4 MiB |  11.9% → 5.4% |       7 MiB → 3 MiB |           7 → 3 | `normalize_trailing_prefix` | `black/comments.py:127`             |
|  -16.8% | -3.999 MiB | 40.4% → 35.5% | 23.8 MiB → 19.8 MiB | 13,402 → 13,398 | `visit_simple_stmt`         | `black/linegen.py:295`              |
|   -5.9% |     -3 MiB | 85.9% → 85.1% | 50.6 MiB → 47.6 MiB | 21,146 → 21,143 | `_format_str_once`          | `black/__init__.py:1236 → 1215`     |
|   -5.5% |     -3 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,154 → 21,151 | `format_file_contents`      | `black/__init__.py:1054 → 1059`     |
|   -5.5% |     -3 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,155 → 21,152 | `format_file_in_place`      | `black/__init__.py:917 → 922`       |
|  -16.8% |     -3 MiB | 30.4% → 26.6% | 17.9 MiB → 14.9 MiB | 10,809 → 10,806 | `visit_power`               | `black/linegen.py:341`              |
|   -9.2% |     -3 MiB | 55.5% → 53.2% | 32.7 MiB → 29.7 MiB | 20,144 → 20,141 | `visit_suite`               | `black/linegen.py:288`              |
|   -9.1% |     -3 MiB | 55.7% → 53.3% | 32.8 MiB → 29.8 MiB | 20,270 → 20,267 | `visit_funcdef`             | `black/linegen.py:254`              |
|  -75.0% |     -3 MiB |   6.8% → 1.8% |       4 MiB → 1 MiB |           4 → 1 | `push`                      | `blib2to3/pgen2/parse.py:386 → 374` |
|  -37.5% |     -3 MiB |  13.6% → 8.9% |       8 MiB → 5 MiB |           8 → 5 | `prefix`                    | `blib2to3/pytree.py:480 → 469`      |
|   -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,168 → 21,165 | `main`                      | `black/__init__.py:244 → 240`       |
|   -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,162 → 21,159 | `reformat_one`              | `black/__init__.py:860 → 865`       |
|   -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `patched_main`              | `black/__init__.py:1594 → 1580`     |
|   -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `<module>`                  | `black/__main__.py:1`               |
|  -39.3% |     -2 MiB |   8.6% → 5.5% | 5.08 MiB → 3.08 MiB |         20 → 18 | `transform_line`            | `black/linegen.py:601`              |
|  -28.6% |     -2 MiB |  11.9% → 8.9% |       7 MiB → 5 MiB |           7 → 5 | `changed`                   | `blib2to3/pytree.py:171 → 160`      |
| removed |     -2 MiB |   3.4% → 0.0% |         2 MiB → 0 B |           2 → 0 | `hug_power_op`              | `black/trans.py:85`                 |
|   -6.0% | -1.999 MiB | 56.3% → 55.7% | 33.2 MiB → 31.2 MiB | 20,711 → 20,709 | `visit_stmt`                | `black/linegen.py:199`              |

##### Standard library

|  Change |      Delta |             % |                Size |     Allocations | Function                    | Location                                      |
| ------: | ---------: | ------------: | ------------------: | --------------: | --------------------------- | --------------------------------------------- |
|   -5.1% | -3.001 MiB |        100.0% | 58.9 MiB → 55.9 MiB | 22,505 → 22,501 | `run_module`                | `<frozen runpy>:201`                          |
|   -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `_run_code`                 | `<frozen runpy>:65`                           |
|   -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `_run_module_code`          | `<frozen runpy>:91`                           |
| removed |     -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__getitem__`               | `/usr/lib/python3.11/re/_parser.py:162`       |
|     ~0% | -1.918 KiB |   7.3% → 7.6% |            4.28 MiB |   1,298 → 1,297 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|     ~0% | -1.918 KiB |   7.3% → 7.7% |            4.28 MiB |   1,300 → 1,299 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|     ~0% | -1.918 KiB |   7.3% → 7.7% |            4.28 MiB |   1,301 → 1,300 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|     ~0% | -1.918 KiB |   7.3% → 7.7% |            4.28 MiB |   1,303 → 1,302 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|     ~0% | -1.918 KiB |   7.3% → 7.7% |            4.29 MiB |   1,310 → 1,309 | `_get_module_details`       | `<frozen runpy>:105`                          |
|     ~0% |  -1.46 KiB |   7.2% → 7.6% |            4.25 MiB |           1,268 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|     ~0% |     -213 B |   4.3% → 4.6% |            2.55 MiB |       619 → 618 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|     ~0% |     -213 B |   4.3% → 4.6% |            2.55 MiB |       619 → 618 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|     ~0% |       -8 B |   2.2% → 2.3% |            1.31 MiB |             319 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |

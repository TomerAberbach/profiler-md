# Peak memory profile diff

Held 78.6 MiB (-1.702 KiB, ~0%) over 22,707 → 22,706 allocations (3.54 KiB per allocation).

| Category         | Change |          Delta |             % |                Size |     Allocations |
| ---------------- | -----: | -------------: | ------------: | ------------------: | --------------: |
| Ours             |  +1.6% | +1,021.603 KiB | 81.6% → 82.9% | 64.2 MiB → 65.2 MiB | 21,445 → 21,446 |
| Standard library |  -7.0% | -1,023.473 KiB | 18.1% → 16.8% | 14.2 MiB → 13.2 MiB |   1,030 → 1,028 |
| Third-party      |  +0.1% |         +172 B |          0.3% |             238 KiB |             232 |

Paths starting with `./` or `../` are relative to `/src/black/src/`.

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes held at peak memory within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|     Change |      Delta |             % |                Size |     Allocations | Function                          | Location                                                    |
| ---------: | ---------: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------------------------------------- |
|    +199.9% |     +2 MiB |   1.3% → 3.8% |       1 MiB → 3 MiB |           2 → 4 | `visit_default`                   | `./black/linegen.py:134`                                    |
|    +175.1% |     +2 MiB |   1.5% → 4.0% | 1.14 MiB → 3.14 MiB |       196 → 198 | `update_sibling_maps`             | `./blib2to3/pytree.py:369 → 358`                            |
| +174762.7% |     +2 MiB |  <0.1% → 2.5% |    1.17 KiB → 2 MiB |           2 → 4 | `addtoken`                        | `./blib2to3/pgen2/parse.py:242 → 230`                       |
|    +200.0% |     +2 MiB |   1.3% → 3.8% |       1 MiB → 3 MiB |           1 → 3 | `__init__`                        | `<string>:2`                                                |
|     +40.0% |     +2 MiB |   6.4% → 8.9% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `./blib2to3/pytree.py:81 → 70`                              |
|        new |     +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `_stringify_ast_with_new_parent`  | `./black/parsing.py:166 → 174`                              |
|      +6.2% |     +1 MiB | 20.6% → 21.9% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                            | `./black/brackets.py:70`                                    |
|     +50.0% |     +1 MiB |   2.5% → 3.8% |       2 MiB → 3 MiB |           2 → 3 | `generate_comments`               | `./black/comments.py:52`                                    |
|  +36714.8% |     +1 MiB |  <0.1% → 1.3% |    2.79 KiB → 1 MiB |           3 → 4 | `transform_line`                  | `./black/linegen.py:601`                                    |
|        new |     +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `convert`                         | `./blib2to3/pytree.py:486 → 475`                            |
|        new |     +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `_uniq`                           | `/usr/lib/python3.11/re/_parser.py:444`                     |
|     +22.0% | +1.484 KiB |         <0.1% | 6.73 KiB → 8.22 KiB |           8 → 9 | `__setattr__`                     | `/usr/lib/python3.11/enum.py:831`                           |
|      +4.4% |     +172 B |         <0.1% | 3.79 KiB → 3.96 KiB |               3 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |
|        ~0% |     +104 B |          0.3% |             225 KiB |               5 | `_format_str_once`                | `./black/__init__.py:1236 → 1215`                           |
|      +1.5% |      +96 B |         <0.1% | 6.24 KiB → 6.33 KiB |               4 | `append`                          | `./black/lines.py:63 → 52`                                  |
|      +5.5% |      +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `./black/cache.py:50`                                       |
|     +10.1% |      +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`                           |

##### Ours

|     Change |  Delta |             % |                Size |     Allocations | Function                          | Location                              |
| ---------: | -----: | ------------: | ------------------: | --------------: | --------------------------------- | ------------------------------------- |
|    +199.9% | +2 MiB |   1.3% → 3.8% |       1 MiB → 3 MiB |           2 → 4 | `visit_default`                   | `./black/linegen.py:134`              |
|    +175.1% | +2 MiB |   1.5% → 4.0% | 1.14 MiB → 3.14 MiB |       196 → 198 | `update_sibling_maps`             | `./blib2to3/pytree.py:369 → 358`      |
| +174762.7% | +2 MiB |  <0.1% → 2.5% |    1.17 KiB → 2 MiB |           2 → 4 | `addtoken`                        | `./blib2to3/pgen2/parse.py:242 → 230` |
|    +200.0% | +2 MiB |   1.3% → 3.8% |       1 MiB → 3 MiB |           1 → 3 | `__init__`                        | `<string>:2`                          |
|     +40.0% | +2 MiB |   6.4% → 8.9% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `./blib2to3/pytree.py:81 → 70`        |
|        new | +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `_stringify_ast_with_new_parent`  | `./black/parsing.py:166 → 174`        |
|      +6.2% | +1 MiB | 20.6% → 21.9% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                            | `./black/brackets.py:70`              |
|     +50.0% | +1 MiB |   2.5% → 3.8% |       2 MiB → 3 MiB |           2 → 3 | `generate_comments`               | `./black/comments.py:52`              |
|  +36714.8% | +1 MiB |  <0.1% → 1.3% |    2.79 KiB → 1 MiB |           3 → 4 | `transform_line`                  | `./black/linegen.py:601`              |
|        new | +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `convert`                         | `./blib2to3/pytree.py:486 → 475`      |
|        ~0% | +104 B |          0.3% |             225 KiB |               5 | `_format_str_once`                | `./black/__init__.py:1236 → 1215`     |
|      +1.5% |  +96 B |         <0.1% | 6.24 KiB → 6.33 KiB |               4 | `append`                          | `./black/lines.py:63 → 52`            |
|      +5.5% |  +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `./black/cache.py:50`                 |
|     +10.1% |  +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`     |

##### Standard library

| Change |      Delta |           % |                Size | Allocations | Function      | Location                                |
| -----: | ---------: | ----------: | ------------------: | ----------: | ------------- | --------------------------------------- |
|    new |     +1 MiB | 0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `_uniq`       | `/usr/lib/python3.11/re/_parser.py:444` |
| +22.0% | +1.484 KiB |       <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__` | `/usr/lib/python3.11/enum.py:831`       |

#### Improvements

Functions with the largest decrease in bytes held at peak memory within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |      Delta |             % |                Size | Allocations | Function                               | Location                                     |
| ------: | ---------: | ------------: | ------------------: | ----------: | -------------------------------------- | -------------------------------------------- |
|  -75.0% |     -3 MiB |   5.1% → 1.3% |       4 MiB → 1 MiB |       4 → 1 | `push`                                 | `./blib2to3/pgen2/parse.py:386 → 374`        |
|   -9.9% |     -1 MiB | 12.9% → 11.6% | 10.1 MiB → 9.12 MiB |   143 → 142 | `parse`                                | `/usr/lib/python3.11/ast.py:33`              |
|  -33.3% |     -1 MiB |   3.8% → 2.5% |       3 MiB → 2 MiB |       7 → 6 | `visit`                                | `./black/nodes.py:163 → 152`                 |
|  -99.7% |     -1 MiB |  1.3% → <0.1% |    1 MiB → 3.03 KiB |       5 → 4 | `__init__`                             | `./blib2to3/pytree.py:248 → 237`             |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `normalize_trailing_prefix`            | `./black/comments.py:127`                    |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `contains_uncollapsable_type_comments` | `./black/lines.py:276`                       |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `<listcomp>`                           | `./black/parsing.py:154`                     |
|  -50.0% |     -1 MiB |   2.5% → 1.3% |       2 MiB → 1 MiB |       2 → 1 | `generate_tokens`                      | `./blib2to3/pgen2/tokenize.py:565 → 554`     |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `_addtoken`                            | `./blib2to3/pgen2/parse.py:290 → 278`        |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `prefix`                               | `./blib2to3/pytree.py:480 → 469`             |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `pop`                                  | `./blib2to3/pgen2/parse.py:398 → 386`        |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__getitem__`                          | `/usr/lib/python3.11/re/_parser.py:162`      |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `hug_power_op`                         | `./black/trans.py:85`                        |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__str__`                              | `./blib2to3/pytree.py:440`                   |
|  -16.8% | -1.703 KiB |         <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                             | `./black/trans.py:1`                         |
|   -3.1% |     -768 B |         <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`                              | `/usr/lib/python3.11/enum.py:488`            |
|  -15.1% |     -752 B |         <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                             | `./black/ranges.py:1`                        |
|  -25.9% |     -274 B |         <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split`              | `./black/linegen.py:829`                     |
|     ~0% |     -213 B |          3.2% |            2.55 MiB |   619 → 618 | `_compile_bytecode`                    | `<frozen importlib._bootstrap_external>:727` |
|     ~0% |       -8 B |         <0.1% |            20.7 KiB |          14 | `<module>`                             | `./blib2to3/pgen2/tokenize.py:1`             |

##### Ours

|  Change |      Delta |            % |                Size | Allocations | Function                               | Location                                 |
| ------: | ---------: | -----------: | ------------------: | ----------: | -------------------------------------- | ---------------------------------------- |
|  -75.0% |     -3 MiB |  5.1% → 1.3% |       4 MiB → 1 MiB |       4 → 1 | `push`                                 | `./blib2to3/pgen2/parse.py:386 → 374`    |
|  -33.3% |     -1 MiB |  3.8% → 2.5% |       3 MiB → 2 MiB |       7 → 6 | `visit`                                | `./black/nodes.py:163 → 152`             |
|  -99.7% |     -1 MiB | 1.3% → <0.1% |    1 MiB → 3.03 KiB |       5 → 4 | `__init__`                             | `./blib2to3/pytree.py:248 → 237`         |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `normalize_trailing_prefix`            | `./black/comments.py:127`                |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `contains_uncollapsable_type_comments` | `./black/lines.py:276`                   |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `<listcomp>`                           | `./black/parsing.py:154`                 |
|  -50.0% |     -1 MiB |  2.5% → 1.3% |       2 MiB → 1 MiB |       2 → 1 | `generate_tokens`                      | `./blib2to3/pgen2/tokenize.py:565 → 554` |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `_addtoken`                            | `./blib2to3/pgen2/parse.py:290 → 278`    |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `prefix`                               | `./blib2to3/pytree.py:480 → 469`         |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `pop`                                  | `./blib2to3/pgen2/parse.py:398 → 386`    |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `hug_power_op`                         | `./black/trans.py:85`                    |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__str__`                              | `./blib2to3/pytree.py:440`               |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                             | `./black/trans.py:1`                     |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                             | `./black/ranges.py:1`                    |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split`              | `./black/linegen.py:829`                 |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                             | `./blib2to3/pgen2/tokenize.py:1`         |

##### Standard library

|  Change |  Delta |             % |                Size | Allocations | Function            | Location                                     |
| ------: | -----: | ------------: | ------------------: | ----------: | ------------------- | -------------------------------------------- |
|   -9.9% | -1 MiB | 12.9% → 11.6% | 10.1 MiB → 9.12 MiB |   143 → 142 | `parse`             | `/usr/lib/python3.11/ast.py:33`              |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__getitem__`       | `/usr/lib/python3.11/re/_parser.py:162`      |
|   -3.1% | -768 B |         <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`           | `/usr/lib/python3.11/enum.py:488`            |
|     ~0% | -213 B |          3.2% |            2.55 MiB |   619 → 618 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `visit_default` (`./black/linegen.py:134`)

|  Change |  Delta |              % |          Size | Allocations | Location                 |
| ------: | -----: | -------------: | ------------: | ----------: | ------------------------ |
| +200.0% | +2 MiB | 99.9% → 100.0% | 1 MiB → 3 MiB |       1 → 3 | `./black/linegen.py:158` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

|   Change |  Delta |            % |                Size | Allocations | Location                         |
| -------: | -----: | -----------: | ------------------: | ----------: | -------------------------------- |
| +2913.4% | +2 MiB | 6.0% → 65.8% | 70.3 KiB → 2.07 MiB |     93 → 95 | `./blib2to3/pytree.py:377 → 366` |
|  removed | -1 MiB | 87.6% → 0.0% |         1 MiB → 0 B |       1 → 0 | `./blib2to3/pytree.py:371`       |
| +1456.7% | +1 MiB | 6.0% → 34.0% | 70.3 KiB → 1.07 MiB |     93 → 94 | `./blib2to3/pytree.py:376 → 365` |

##### `addtoken` (`./blib2to3/pgen2/parse.py:230`)

|     Change |  Delta |              % |          Size | Allocations | Location                              |
| ---------: | -----: | -------------: | ------------: | ----------: | ------------------------------------- |
| +327680.0% | +2 MiB | 53.3% → 100.0% | 640 B → 2 MiB |       1 → 3 | `./blib2to3/pgen2/parse.py:252 → 240` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |             % |        Size | Allocations | Location     |
| ------: | -----: | ------------: | ----------: | ----------: | ------------ |
|     new | +2 MiB |  0.0% → 66.7% | 0 B → 2 MiB |       0 → 2 | `<string>:8` |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `<string>:5` |
|     new | +1 MiB |  0.0% → 33.3% | 0 B → 1 MiB |       0 → 1 | `<string>:7` |

##### `__new__` (`./blib2to3/pytree.py:70`)

| Change |  Delta |      % |          Size | Allocations | Location                       |
| -----: | -----: | -----: | ------------: | ----------: | ------------------------------ |
| +40.0% | +2 MiB | 100.0% | 5 MiB → 7 MiB |       5 → 7 | `./blib2to3/pytree.py:84 → 73` |

##### `_stringify_ast_with_new_parent` (`./black/parsing.py:174`)

| Change |  Delta |             % |        Size | Allocations | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | ------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./black/parsing.py:178` |

##### `mark` (`./black/brackets.py:70`)

| Change |  Delta |      % |                Size |     Allocations | Location                  |
| -----: | -----: | -----: | ------------------: | --------------: | ------------------------- |
|  +6.2% | +1 MiB | 100.0% | 16.2 MiB → 17.2 MiB | 20,787 → 20,788 | `./black/brackets.py:112` |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |            % |        Size | Allocations | Location                 |
| -----: | -----: | -----------: | ----------: | ----------: | ------------------------ |
|    new | +1 MiB | 0.0% → 33.3% | 0 B → 1 MiB |       0 → 1 | `./black/comments.py:72` |

##### `transform_line` (`./black/linegen.py:601`)

| Change |  Delta |            % |        Size | Allocations | Location                 |
| -----: | -----: | -----------: | ----------: | ----------: | ------------------------ |
|    new | +1 MiB | 0.0% → 99.7% | 0 B → 1 MiB |       0 → 1 | `./black/linegen.py:627` |

##### `convert` (`./blib2to3/pytree.py:475`)

| Change |  Delta |             % |        Size | Allocations | Location                   |
| -----: | -----: | ------------: | ----------: | ----------: | -------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pytree.py:492` |

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

##### `push` (`./blib2to3/pgen2/parse.py:374`)

| Change |  Delta |      % |          Size | Allocations | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ------------------------------------- |
| -75.0% | -3 MiB | 100.0% | 4 MiB → 1 MiB |       4 → 1 | `./blib2to3/pgen2/parse.py:394 → 382` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

| Change |  Delta |      % |                Size | Allocations | Location                        |
| -----: | -----: | -----: | ------------------: | ----------: | ------------------------------- |
|  -9.9% | -1 MiB | 100.0% | 10.1 MiB → 9.12 MiB |   143 → 142 | `/usr/lib/python3.11/ast.py:50` |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |     % |          Size | Allocations | Location                     |
| -----: | -----: | ----: | ------------: | ----------: | ---------------------------- |
| -33.3% | -1 MiB | 99.9% | 3 MiB → 2 MiB |       4 → 3 | `./black/nodes.py:185 → 174` |

##### `__init__` (`./blib2to3/pytree.py:237`)

| Change |  Delta |      % |             Size | Allocations | Location                         |
| -----: | -----: | -----: | ---------------: | ----------: | -------------------------------- |
| -99.7% | -1 MiB | 100.0% | 1 MiB → 3.03 KiB |       5 → 4 | `./blib2to3/pytree.py:266 → 255` |

##### `normalize_trailing_prefix` (`./black/comments.py:127`)

|  Change |  Delta |             % |        Size | Allocations | Location                  |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./black/comments.py:136` |

##### `contains_uncollapsable_type_comments` (`./black/lines.py:276`)

|  Change |  Delta |             % |        Size | Allocations | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./black/lines.py:280` |

##### `<listcomp>` (`./black/parsing.py:154`)

|  Change |  Delta |             % |        Size | Allocations | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./black/parsing.py:154` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

|  Change |  Delta |             % |        Size | Allocations | Location                           |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------------------------- |
| removed | -1 MiB |  50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pgen2/tokenize.py:614` |
| removed | -1 MiB |  50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pgen2/tokenize.py:972` |
|     new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pgen2/tokenize.py:694` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

|  Change |  Delta |             % |        Size | Allocations | Location                        |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pgen2/parse.py:314` |

##### `prefix` (`./blib2to3/pytree.py:469`)

|  Change |  Delta |             % |        Size | Allocations | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | -------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pytree.py:482` |

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

|  Change |  Delta |             % |        Size | Allocations | Location                        |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pgen2/parse.py:408` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`)

|  Change |  Delta |             % |        Size | Allocations | Location                                |
| ------: | -----: | ------------: | ----------: | ----------: | --------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `/usr/lib/python3.11/re/_parser.py:164` |

##### `hug_power_op` (`./black/trans.py:85`)

|  Change |  Delta |             % |        Size | Allocations | Location              |
| ------: | -----: | ------------: | ----------: | ----------: | --------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./black/trans.py:95` |

##### `__str__` (`./blib2to3/pytree.py:440`)

|  Change |  Delta |             % |        Size | Allocations | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | -------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pytree.py:446` |

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

##### `visit_default` (`./black/linegen.py:134`)

|  Change |  Delta |              % |          Size | Allocations | Caller  | Location                     |
| ------: | -----: | -------------: | ------------: | ----------: | ------- | ---------------------------- |
| +200.0% | +2 MiB | 99.9% → 100.0% | 1 MiB → 3 MiB |       1 → 3 | `visit` | `./black/nodes.py:163 → 152` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

|  Change |  Delta |      % |                Size | Allocations | Caller         | Location                         |
| ------: | -----: | -----: | ------------------: | ----------: | -------------- | -------------------------------- |
| +175.1% | +2 MiB | 100.0% | 1.14 MiB → 3.14 MiB |   196 → 198 | `prev_sibling` | `./blib2to3/pytree.py:207 → 196` |

##### `addtoken` (`./blib2to3/pgen2/parse.py:230`)

|     Change |  Delta |      % |             Size | Allocations | Caller         | Location                         |
| ---------: | -----: | -----: | ---------------: | ----------: | -------------- | -------------------------------- |
| +174762.7% | +2 MiB | 100.0% | 1.17 KiB → 2 MiB |       2 → 4 | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |      % |          Size | Allocations | Caller     | Location     |
| ------: | -----: | -----: | ------------: | ----------: | ---------- | ------------ |
| +200.0% | +2 MiB | 100.0% | 1 MiB → 3 MiB |       1 → 3 | `__init__` | `<string>:2` |

##### `__new__` (`./blib2to3/pytree.py:70`)

|  Change |  Delta |              % |          Size | Allocations | Caller    | Location                         |
| ------: | -----: | -------------: | ------------: | ----------: | --------- | -------------------------------- |
|  +75.0% | +3 MiB | 80.0% → 100.0% | 4 MiB → 7 MiB |       4 → 7 | `convert` | `./blib2to3/pytree.py:486 → 475` |
| removed | -1 MiB |   20.0% → 0.0% |   1 MiB → 0 B |       1 → 0 | `clone`   | `./blib2to3/pytree.py:452`       |

##### `_stringify_ast_with_new_parent` (`./black/parsing.py:174`)

| Change |  Delta |             % |        Size | Allocations | Caller           | Location                       |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------- | ------------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `_stringify_ast` | `./black/parsing.py:174 → 182` |

##### `mark` (`./black/brackets.py:70`)

|  Change |  Delta |              % |                Size |     Allocations | Caller                           | Location                   |
| ------: | -----: | -------------: | ------------------: | --------------: | -------------------------------- | -------------------------- |
|  +13.1% | +2 MiB | 93.8% → 100.0% | 15.2 MiB → 17.2 MiB | 20,787 → 20,789 | `append`                         | `./black/lines.py:63 → 52` |
| removed | -1 MiB |    6.2% → 0.0% |         1 MiB → 0 B |           1 → 0 | `max_delimiter_priority_in_atom` | `./black/brackets.py:328`  |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |      % |          Size | Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | --------------- | ------------------------ |
| +50.0% | +1 MiB | 100.0% | 2 MiB → 3 MiB |       2 → 3 | `visit_default` | `./black/linegen.py:134` |

##### `transform_line` (`./black/linegen.py:601`)

|    Change |  Delta |      % |             Size | Allocations | Caller             | Location                          |
| --------: | -----: | -----: | ---------------: | ----------: | ------------------ | --------------------------------- |
| +36714.8% | +1 MiB | 100.0% | 2.79 KiB → 1 MiB |       3 → 4 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |

##### `convert` (`./blib2to3/pytree.py:475`)

| Change |  Delta |             % |        Size | Allocations | Caller  | Location                              |
| -----: | -----: | ------------: | ----------: | ----------: | ------- | ------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `shift` | `./blib2to3/pgen2/parse.py:373 → 361` |

##### `_uniq` (`/usr/lib/python3.11/re/_parser.py:444`)

| Change |  Delta |             % |        Size | Allocations | Caller   | Location                                |
| -----: | -----: | ------------: | ----------: | ----------: | -------- | --------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

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

##### `push` (`./blib2to3/pgen2/parse.py:374`)

| Change |  Delta |      % |          Size | Allocations | Caller      | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ----------- | ------------------------------------- |
| -75.0% | -3 MiB | 100.0% | 4 MiB → 1 MiB |       4 → 1 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

| Change |  Delta |      % |                Size | Allocations | Caller                  | Location                       |
| -----: | -----: | -----: | ------------------: | ----------: | ----------------------- | ------------------------------ |
|  -9.9% | -1 MiB | 100.0% | 10.1 MiB → 9.12 MiB |   143 → 142 | `_parse_single_version` | `./black/parsing.py:117 → 125` |

##### `visit` (`./black/nodes.py:152`)

|  Change |  Delta |            % |        Size | Allocations | Caller       | Location                 |
| ------: | -----: | -----------: | ----------: | ----------: | ------------ | ------------------------ |
| removed | -1 MiB | 33.3% → 0.0% | 1 MiB → 0 B |       1 → 0 | `visit_stmt` | `./black/linegen.py:199` |

##### `__init__` (`./blib2to3/pytree.py:237`)

|  Change |  Delta |            % |        Size | Allocations | Caller                | Location               |
| ------: | -----: | -----------: | ----------: | ----------: | --------------------- | ---------------------- |
| removed | -1 MiB | 99.7% → 0.0% | 1 MiB → 0 B |       1 → 0 | `wrap_in_parentheses` | `./black/nodes.py:935` |

##### `normalize_trailing_prefix` (`./black/comments.py:127`)

|  Change |  Delta |             % |        Size | Allocations | Caller              | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------- | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `generate_comments` | `./black/comments.py:52` |

##### `contains_uncollapsable_type_comments` (`./black/lines.py:276`)

|  Change |  Delta |             % |        Size | Allocations | Caller           | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------- | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `transform_line` | `./black/linegen.py:601` |

##### `<listcomp>` (`./black/parsing.py:154`)

|  Change |  Delta |             % |        Size | Allocations | Caller       | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ------------ | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_normalize` | `./black/parsing.py:151` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

| Change |  Delta |      % |          Size | Allocations | Caller     | Location                        |
| -----: | -----: | -----: | ------------: | ----------: | ---------- | ------------------------------- |
| -50.0% | -1 MiB | 100.0% | 2 MiB → 1 MiB |       2 → 1 | `__next__` | `./blib2to3/pgen2/driver.py:80` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

|  Change |  Delta |             % |        Size | Allocations | Caller     | Location                              |
| ------: | -----: | ------------: | ----------: | ----------: | ---------- | ------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `addtoken` | `./blib2to3/pgen2/parse.py:242 → 230` |

##### `prefix` (`./blib2to3/pytree.py:469`)

|  Change |  Delta |             % |        Size | Allocations | Caller   | Location              |
| ------: | -----: | ------------: | ----------: | ----------: | -------- | --------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `append` | `./black/lines.py:63` |

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

|  Change |  Delta |             % |        Size | Allocations | Caller      | Location                              |
| ------: | -----: | ------------: | ----------: | ----------: | ----------- | ------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`)

|  Change |  Delta |             % |        Size | Allocations | Caller   | Location                                |
| ------: | -----: | ------------: | ----------: | ----------: | -------- | --------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `hug_power_op` (`./black/trans.py:85`)

|  Change |  Delta |             % |        Size | Allocations | Caller            | Location                  |
| ------: | -----: | ------------: | ----------: | ----------: | ----------------- | ------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `run_transformer` | `./black/linegen.py:1755` |

##### `__str__` (`./blib2to3/pytree.py:440`)

|  Change |  Delta |             % |        Size | Allocations | Caller    | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | --------- | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `__str__` | `./black/lines.py:490` |

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

|  Change |  Delta |             % |                Size |     Allocations | Function                     | Location                              |
| ------: | -----: | ------------: | ------------------: | --------------: | ---------------------------- | ------------------------------------- |
|  +15.0% | +5 MiB | 42.6% → 48.9% | 33.4 MiB → 38.4 MiB | 21,082 → 21,087 | `visit_default`              | `./black/linegen.py:134`              |
|  +14.9% | +5 MiB | 42.6% → 48.9% | 33.4 MiB → 38.4 MiB | 21,084 → 21,089 | `visit`                      | `./black/nodes.py:163 → 152`          |
|  +15.0% | +5 MiB | 42.6% → 48.9% | 33.4 MiB → 38.4 MiB | 21,082 → 21,087 | `visit_default`              | `./black/nodes.py:187 → 176`          |
|  +15.1% | +5 MiB | 42.2% → 48.6% | 33.2 MiB → 38.2 MiB | 20,711 → 20,716 | `visit_stmt`                 | `./black/linegen.py:199`              |
|  +12.2% | +4 MiB | 41.7% → 46.7% | 32.7 MiB → 36.7 MiB | 20,144 → 20,148 | `visit_suite`                | `./black/linegen.py:288`              |
|  +12.2% | +4 MiB | 41.8% → 46.8% | 32.8 MiB → 36.8 MiB | 20,270 → 20,274 | `visit_funcdef`              | `./black/linegen.py:254`              |
|  +99.9% | +4 MiB |  5.1% → 10.2% |       4 MiB → 8 MiB |          8 → 12 | `convert`                    | `./blib2to3/pytree.py:486 → 475`      |
|  +17.4% | +3 MiB | 22.0% → 25.8% | 17.3 MiB → 20.3 MiB | 20,882 → 20,885 | `append`                     | `./black/lines.py:63 → 52`            |
|     new | +3 MiB |   0.0% → 3.8% |         0 B → 3 MiB |           0 → 3 | `line`                       | `./black/linegen.py:109`              |
|     new | +3 MiB |   0.0% → 3.8% |         0 B → 3 MiB |           0 → 3 | `visit_INDENT`               | `./black/linegen.py:179`              |
| +175.1% | +2 MiB |   1.5% → 4.0% | 1.14 MiB → 3.14 MiB |       196 → 198 | `update_sibling_maps`        | `./blib2to3/pytree.py:369 → 358`      |
| +175.1% | +2 MiB |   1.5% → 4.0% | 1.14 MiB → 3.14 MiB |       196 → 198 | `prev_sibling`               | `./blib2to3/pytree.py:207 → 196`      |
| +189.7% | +2 MiB |   1.3% → 3.9% | 1.05 MiB → 3.05 MiB |         90 → 92 | `whitespace`                 | `./black/nodes.py:194 → 183`          |
| +100.0% | +2 MiB |   2.5% → 5.1% |       2 MiB → 4 MiB |           2 → 4 | `wrap_in_parentheses`        | `./black/nodes.py:935 → 930`          |
| +200.0% | +2 MiB |   1.3% → 3.8% |       1 MiB → 3 MiB |           1 → 3 | `__init__`                   | `<string>:2`                          |
| +200.0% | +2 MiB |   1.3% → 3.8% |       1 MiB → 3 MiB |           1 → 3 | `prefix`                     | `./blib2to3/pytree.py:329 → 318`      |
| +199.4% | +2 MiB |   1.3% → 3.8% |       1 MiB → 3 MiB |           5 → 7 | `pop`                        | `./blib2to3/pgen2/parse.py:398 → 386` |
|  +40.0% | +2 MiB |   6.4% → 8.9% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                    | `./blib2to3/pytree.py:81 → 70`        |
|   +6.2% | +1 MiB | 20.6% → 21.9% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                       | `./black/brackets.py:70`              |
|  +33.3% | +1 MiB |   3.8% → 5.1% |       3 MiB → 4 MiB |           4 → 5 | `normalize_invisible_parens` | `./black/linegen.py:1328 → 1344`      |

##### Standard library

| Change |      Delta |           % |                Size | Allocations | Function           | Location                                |
| -----: | ---------: | ----------: | ------------------: | ----------: | ------------------ | --------------------------------------- |
|    new |     +1 MiB | 0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `_uniq`            | `/usr/lib/python3.11/re/_parser.py:444` |
| +22.0% | +1.484 KiB |       <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__`      | `/usr/lib/python3.11/enum.py:831`       |
|  +2.3% |     +752 B |       <0.1% | 32.5 KiB → 33.2 KiB |          38 | `__new__`          | `/usr/lib/python3.11/enum.py:488`       |
|    ~0% |     +222 B |       94.5% |            74.3 MiB |      21,394 | `_run_code`        | `<frozen runpy>:65`                     |
|    ~0% |     +222 B |       94.5% |            74.3 MiB |      21,394 | `_run_module_code` | `<frozen runpy>:91`                     |

#### Improvements

Functions with the largest decrease in bytes held at peak memory within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |      Delta |             % |                Size |     Allocations | Function                            | Location                              |
| ------: | ---------: | ------------: | ------------------: | --------------: | ----------------------------------- | ------------------------------------- |
|  -79.8% |     -4 MiB |   6.4% → 1.3% | 5.01 MiB → 1.01 MiB |         17 → 13 | `transform_line`                    | `./black/linegen.py:601`              |
|  -57.1% |     -4 MiB |   8.9% → 3.8% |       7 MiB → 3 MiB |           7 → 3 | `normalize_trailing_prefix`         | `./black/comments.py:127`             |
|  -99.7% |     -3 MiB |  3.8% → <0.1% | 3.01 MiB → 8.33 KiB |          11 → 8 | `run_transformer`                   | `./black/linegen.py:1755 → 1771`      |
|  -33.3% |     -3 MiB |  11.5% → 7.6% |       9 MiB → 6 MiB |           9 → 6 | `generate_comments`                 | `./black/comments.py:52`              |
|  -75.0% |     -3 MiB |   5.1% → 1.3% |       4 MiB → 1 MiB |           4 → 1 | `push`                              | `./blib2to3/pgen2/parse.py:386 → 374` |
|  -11.2% |     -2 MiB | 22.8% → 20.2% | 17.9 MiB → 15.9 MiB | 10,809 → 10,807 | `visit_power`                       | `./black/linegen.py:341`              |
| -100.0% |     -2 MiB |  2.5% → <0.1% |       2 MiB → 802 B |           3 → 1 | `_hugging_power_ops_line_to_string` | `./black/linegen.py:590`              |
| removed |     -2 MiB |   2.5% → 0.0% |         2 MiB → 0 B |           2 → 0 | `hug_power_op`                      | `./black/trans.py:85`                 |
|   -8.4% | -1.999 MiB | 30.3% → 27.8% | 23.8 MiB → 21.8 MiB | 13,402 → 13,400 | `visit_simple_stmt`                 | `./black/linegen.py:295`              |
|  -99.5% |     -1 MiB |  1.3% → <0.1% | 1.01 MiB → 5.29 KiB |           6 → 5 | `right_hand_split`                  | `./black/linegen.py:809`              |
|  -99.4% |     -1 MiB |  1.3% → <0.1% | 1.01 MiB → 6.38 KiB |           7 → 6 | `_rhs`                              | `./black/linegen.py:650`              |
|  -99.9% |     -1 MiB |  1.3% → <0.1% |    1 MiB → 1.37 KiB |           3 → 2 | `_first_right_hand_split`           | `./black/linegen.py:829`              |
|   -4.3% |     -1 MiB | 29.6% → 28.3% | 23.3 MiB → 22.3 MiB |       209 → 208 | `assert_equivalent`                 | `./black/__init__.py:1524 → 1510`     |
|   -9.9% |     -1 MiB | 12.9% → 11.6% | 10.1 MiB → 9.12 MiB |       143 → 142 | `parse`                             | `/usr/lib/python3.11/ast.py:33`       |
|   -9.9% |     -1 MiB | 12.9% → 11.6% | 10.1 MiB → 9.12 MiB |       143 → 142 | `_parse_single_version`             | `./black/parsing.py:117 → 125`        |
|   -9.9% |     -1 MiB | 12.9% → 11.6% | 10.1 MiB → 9.12 MiB |       143 → 142 | `parse_ast`                         | `./black/parsing.py:129 → 137`        |
|  -67.6% |     -1 MiB |   1.9% → 0.6% |  1.48 MiB → 490 KiB |       654 → 653 | `visit_NUMBER`                      | `./black/linegen.py:505`              |
|  -79.7% |     -1 MiB |   1.6% → 0.3% |  1.25 MiB → 260 KiB |       348 → 347 | `visit_factor`                      | `./black/linegen.py:379`              |
|  -96.5% |     -1 MiB |  1.3% → <0.1% | 1.04 MiB → 37.7 KiB |         67 → 66 | `preceding_leaf`                    | `./black/nodes.py:441 → 436`          |
|  -99.7% |     -1 MiB |  1.3% → <0.1% |    1 MiB → 3.03 KiB |           5 → 4 | `__init__`                          | `./blib2to3/pytree.py:248 → 237`      |

##### Ours

|  Change |      Delta |             % |                Size |     Allocations | Function                               | Location                              |
| ------: | ---------: | ------------: | ------------------: | --------------: | -------------------------------------- | ------------------------------------- |
|  -79.8% |     -4 MiB |   6.4% → 1.3% | 5.01 MiB → 1.01 MiB |         17 → 13 | `transform_line`                       | `./black/linegen.py:601`              |
|  -57.1% |     -4 MiB |   8.9% → 3.8% |       7 MiB → 3 MiB |           7 → 3 | `normalize_trailing_prefix`            | `./black/comments.py:127`             |
|  -99.7% |     -3 MiB |  3.8% → <0.1% | 3.01 MiB → 8.33 KiB |          11 → 8 | `run_transformer`                      | `./black/linegen.py:1755 → 1771`      |
|  -33.3% |     -3 MiB |  11.5% → 7.6% |       9 MiB → 6 MiB |           9 → 6 | `generate_comments`                    | `./black/comments.py:52`              |
|  -75.0% |     -3 MiB |   5.1% → 1.3% |       4 MiB → 1 MiB |           4 → 1 | `push`                                 | `./blib2to3/pgen2/parse.py:386 → 374` |
|  -11.2% |     -2 MiB | 22.8% → 20.2% | 17.9 MiB → 15.9 MiB | 10,809 → 10,807 | `visit_power`                          | `./black/linegen.py:341`              |
| -100.0% |     -2 MiB |  2.5% → <0.1% |       2 MiB → 802 B |           3 → 1 | `_hugging_power_ops_line_to_string`    | `./black/linegen.py:590`              |
| removed |     -2 MiB |   2.5% → 0.0% |         2 MiB → 0 B |           2 → 0 | `hug_power_op`                         | `./black/trans.py:85`                 |
|   -8.4% | -1.999 MiB | 30.3% → 27.8% | 23.8 MiB → 21.8 MiB | 13,402 → 13,400 | `visit_simple_stmt`                    | `./black/linegen.py:295`              |
|  -99.5% |     -1 MiB |  1.3% → <0.1% | 1.01 MiB → 5.29 KiB |           6 → 5 | `right_hand_split`                     | `./black/linegen.py:809`              |
|  -99.4% |     -1 MiB |  1.3% → <0.1% | 1.01 MiB → 6.38 KiB |           7 → 6 | `_rhs`                                 | `./black/linegen.py:650`              |
|  -99.9% |     -1 MiB |  1.3% → <0.1% |    1 MiB → 1.37 KiB |           3 → 2 | `_first_right_hand_split`              | `./black/linegen.py:829`              |
|   -4.3% |     -1 MiB | 29.6% → 28.3% | 23.3 MiB → 22.3 MiB |       209 → 208 | `assert_equivalent`                    | `./black/__init__.py:1524 → 1510`     |
|   -9.9% |     -1 MiB | 12.9% → 11.6% | 10.1 MiB → 9.12 MiB |       143 → 142 | `_parse_single_version`                | `./black/parsing.py:117 → 125`        |
|   -9.9% |     -1 MiB | 12.9% → 11.6% | 10.1 MiB → 9.12 MiB |       143 → 142 | `parse_ast`                            | `./black/parsing.py:129 → 137`        |
|  -67.6% |     -1 MiB |   1.9% → 0.6% |  1.48 MiB → 490 KiB |       654 → 653 | `visit_NUMBER`                         | `./black/linegen.py:505`              |
|  -79.7% |     -1 MiB |   1.6% → 0.3% |  1.25 MiB → 260 KiB |       348 → 347 | `visit_factor`                         | `./black/linegen.py:379`              |
|  -96.5% |     -1 MiB |  1.3% → <0.1% | 1.04 MiB → 37.7 KiB |         67 → 66 | `preceding_leaf`                       | `./black/nodes.py:441 → 436`          |
|  -99.7% |     -1 MiB |  1.3% → <0.1% |    1 MiB → 3.03 KiB |           5 → 4 | `__init__`                             | `./blib2to3/pytree.py:248 → 237`      |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |           1 → 0 | `contains_uncollapsable_type_comments` | `./black/lines.py:276`                |

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

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `visit_default` (`./black/linegen.py:134`)

| Change |      Delta |             % |                Size |     Allocations | Caller              | Location                     |
| -----: | ---------: | ------------: | ------------------: | --------------: | ------------------- | ---------------------------- |
| +15.0% |     +5 MiB |        100.0% | 33.4 MiB → 38.4 MiB | 21,082 → 21,087 | `visit`             | `./black/nodes.py:163 → 152` |
| +12.2% |     +4 MiB | 97.9% → 95.6% | 32.7 MiB → 36.7 MiB | 20,144 → 20,148 | `visit_suite`       | `./black/linegen.py:288`     |
| -11.2% |     -2 MiB | 53.5% → 41.4% | 17.9 MiB → 15.9 MiB | 10,808 → 10,806 | `visit_power`       | `./black/linegen.py:341`     |
|  -8.4% | -1.999 MiB | 71.3% → 56.8% | 23.8 MiB → 21.8 MiB | 13,402 → 13,400 | `visit_simple_stmt` | `./black/linegen.py:295`     |
| -67.6% |     -1 MiB |   4.4% → 1.2% |  1.48 MiB → 490 KiB |       654 → 653 | `visit_NUMBER`      | `./black/linegen.py:505`     |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |             % |                Size |     Allocations | Caller             | Location                          |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------------ | --------------------------------- |
| +15.0% | +5 MiB |        100.0% | 33.4 MiB → 38.4 MiB | 21,082 → 21,087 | `visit_default`    | `./black/nodes.py:187 → 176`      |
| +15.1% | +5 MiB | 99.1% → 99.3% | 33.2 MiB → 38.2 MiB | 20,709 → 20,714 | `visit_stmt`       | `./black/linegen.py:199`          |
| +14.9% | +5 MiB |        100.0% | 33.4 MiB → 38.4 MiB | 21,084 → 21,089 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |
| +12.2% | +4 MiB | 98.1% → 95.8% | 32.8 MiB → 36.8 MiB | 20,270 → 20,274 | `visit_funcdef`    | `./black/linegen.py:254`          |

##### `visit_default` (`./black/nodes.py:176`)

| Change |  Delta |      % |                Size |     Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
| +15.0% | +5 MiB | 100.0% | 33.4 MiB → 38.4 MiB | 21,082 → 21,087 | `visit_default` | `./black/linegen.py:134` |

##### `visit_stmt` (`./black/linegen.py:199`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
| +15.1% | +5 MiB | 100.0% | 33.2 MiB → 38.2 MiB | 20,711 → 20,716 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_suite` (`./black/linegen.py:288`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
| +12.2% | +4 MiB | 100.0% | 32.7 MiB → 36.7 MiB | 20,144 → 20,148 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_funcdef` (`./black/linegen.py:254`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
| +12.2% | +4 MiB | 100.0% | 32.8 MiB → 36.8 MiB | 20,270 → 20,274 | `visit` | `./black/nodes.py:163 → 152` |

##### `convert` (`./blib2to3/pytree.py:475`)

|     Change |  Delta |             % |             Size | Allocations | Caller  | Location                              |
| ---------: | -----: | ------------: | ---------------: | ----------: | ------- | ------------------------------------- |
| +101344.3% | +3 MiB |  0.1% → 37.5% | 3.03 KiB → 3 MiB |       4 → 7 | `pop`   | `./blib2to3/pgen2/parse.py:398 → 386` |
|     +25.0% | +1 MiB | 99.9% → 62.5% |    4 MiB → 5 MiB |       4 → 5 | `shift` | `./blib2to3/pgen2/parse.py:373 → 361` |

##### `append` (`./black/lines.py:52`)

| Change |  Delta |      % |                Size |     Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
| +17.4% | +3 MiB | 100.0% | 17.3 MiB → 20.3 MiB | 20,882 → 20,885 | `visit_default` | `./black/linegen.py:134` |

##### `line` (`./black/linegen.py:109`)

| Change |  Delta |             % |        Size | Allocations | Caller         | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | -------------- | ------------------------ |
|    new | +3 MiB | 0.0% → 100.0% | 0 B → 3 MiB |       0 → 3 | `visit_INDENT` | `./black/linegen.py:179` |

##### `visit_INDENT` (`./black/linegen.py:179`)

| Change |  Delta |             % |        Size | Allocations | Caller  | Location               |
| -----: | -----: | ------------: | ----------: | ----------: | ------- | ---------------------- |
|    new | +3 MiB | 0.0% → 100.0% | 0 B → 3 MiB |       0 → 3 | `visit` | `./black/nodes.py:152` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

|  Change |  Delta |      % |                Size | Allocations | Caller         | Location                         |
| ------: | -----: | -----: | ------------------: | ----------: | -------------- | -------------------------------- |
| +175.1% | +2 MiB | 100.0% | 1.14 MiB → 3.14 MiB |   196 → 198 | `prev_sibling` | `./blib2to3/pytree.py:207 → 196` |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

|    Change |  Delta |            % |                Size | Allocations | Caller           | Location                     |
| --------: | -----: | -----------: | ------------------: | ----------: | ---------------- | ---------------------------- |
| +17029.7% | +3 MiB | 1.5% → 96.0% |   18 KiB → 3.02 MiB |     23 → 26 | `whitespace`     | `./black/nodes.py:194 → 183` |
|    -96.5% | -1 MiB | 90.8% → 1.2% | 1.04 MiB → 37.7 KiB |     67 → 66 | `preceding_leaf` | `./black/nodes.py:441 → 436` |

##### `whitespace` (`./black/nodes.py:183`)

|  Change |  Delta |      % |                Size | Allocations | Caller   | Location                   |
| ------: | -----: | -----: | ------------------: | ----------: | -------- | -------------------------- |
| +189.7% | +2 MiB | 100.0% | 1.05 MiB → 3.05 MiB |     90 → 92 | `append` | `./black/lines.py:63 → 52` |

##### `wrap_in_parentheses` (`./black/nodes.py:930`)

|  Change |  Delta |      % |          Size | Allocations | Caller                       | Location                         |
| ------: | -----: | -----: | ------------: | ----------: | ---------------------------- | -------------------------------- |
| +100.0% | +2 MiB | 100.0% | 2 MiB → 4 MiB |       2 → 4 | `normalize_invisible_parens` | `./black/linegen.py:1328 → 1344` |

##### `__init__` (`<string>:2`)

|  Change |  Delta |             % |          Size | Allocations | Caller                     | Location                  |
| ------: | -----: | ------------: | ------------: | ----------: | -------------------------- | ------------------------- |
|     new | +3 MiB | 0.0% → 100.0% |   0 B → 3 MiB |       0 → 3 | `line`                     | `./black/linegen.py:109`  |
| +200.0% | +2 MiB |        100.0% | 1 MiB → 3 MiB |       1 → 3 | `__init__`                 | `<string>:2`              |
| removed | -1 MiB | 100.0% → 0.0% |   1 MiB → 0 B |       1 → 0 | `bracket_split_build_line` | `./black/linegen.py:1082` |

##### `prefix` (`./blib2to3/pytree.py:318`)

|  Change |  Delta |            % |          Size | Allocations | Caller                | Location                     |
| ------: | -----: | -----------: | ------------: | ----------: | --------------------- | ---------------------------- |
| +200.0% | +2 MiB |       100.0% | 1 MiB → 3 MiB |       1 → 3 | `wrap_in_parentheses` | `./black/nodes.py:935 → 930` |
|     new | +1 MiB | 0.0% → 33.3% |   0 B → 1 MiB |       0 → 1 | `prefix`              | `./blib2to3/pytree.py:318`   |

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

|  Change |  Delta |      % |          Size | Allocations | Caller      | Location                              |
| ------: | -----: | -----: | ------------: | ----------: | ----------- | ------------------------------------- |
| +199.4% | +2 MiB | 100.0% | 1 MiB → 3 MiB |       5 → 7 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `__new__` (`./blib2to3/pytree.py:70`)

|  Change |  Delta |              % |          Size | Allocations | Caller    | Location                         |
| ------: | -----: | -------------: | ------------: | ----------: | --------- | -------------------------------- |
|  +75.0% | +3 MiB | 80.0% → 100.0% | 4 MiB → 7 MiB |       4 → 7 | `convert` | `./blib2to3/pytree.py:486 → 475` |
| removed | -1 MiB |   20.0% → 0.0% |   1 MiB → 0 B |       1 → 0 | `clone`   | `./blib2to3/pytree.py:452`       |

##### `mark` (`./black/brackets.py:70`)

|  Change |  Delta |              % |                Size |     Allocations | Caller                           | Location                   |
| ------: | -----: | -------------: | ------------------: | --------------: | -------------------------------- | -------------------------- |
|  +13.1% | +2 MiB | 93.8% → 100.0% | 15.2 MiB → 17.2 MiB | 20,787 → 20,789 | `append`                         | `./black/lines.py:63 → 52` |
| removed | -1 MiB |    6.2% → 0.0% |         1 MiB → 0 B |           1 → 0 | `max_delimiter_priority_in_atom` | `./black/brackets.py:328`  |

##### `normalize_invisible_parens` (`./black/linegen.py:1344`)

| Change |  Delta |      % |          Size | Allocations | Caller       | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | ------------ | ------------------------ |
| +33.3% | +1 MiB | 100.0% | 3 MiB → 4 MiB |       4 → 5 | `visit_stmt` | `./black/linegen.py:199` |

##### `_uniq` (`/usr/lib/python3.11/re/_parser.py:444`)

| Change |  Delta |             % |        Size | Allocations | Caller   | Location                                |
| -----: | -----: | ------------: | ----------: | ----------: | -------- | --------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

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
|    ~0% | +222 B | 100.0% | 74.3 MiB |      21,394 | `_run_module_code` | `<frozen runpy>:91` |

##### `_run_module_code` (`<frozen runpy>:91`)

| Change |  Delta |      % |     Size | Allocations | Caller       | Location             |
| -----: | -----: | -----: | -------: | ----------: | ------------ | -------------------- |
|    ~0% | +222 B | 100.0% | 74.3 MiB |      21,394 | `run_module` | `<frozen runpy>:201` |

##### `transform_line` (`./black/linegen.py:601`)

| Change |  Delta |            % |                Size | Allocations | Caller             | Location                          |
| -----: | -----: | -----------: | ------------------: | ----------: | ------------------ | --------------------------------- |
| -79.8% | -4 MiB |       100.0% | 5.01 MiB → 1.01 MiB |     17 → 13 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |
| -99.9% | -1 MiB | 20.0% → 0.1% |    1 MiB → 1.39 KiB |       2 → 1 | `run_transformer`  | `./black/linegen.py:1755 → 1771`  |

##### `normalize_trailing_prefix` (`./black/comments.py:127`)

| Change |  Delta |      % |          Size | Allocations | Caller              | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | ------------------- | ------------------------ |
| -57.1% | -4 MiB | 100.0% | 7 MiB → 3 MiB |       7 → 3 | `generate_comments` | `./black/comments.py:52` |

##### `run_transformer` (`./black/linegen.py:1771`)

| Change |  Delta |      % |                Size | Allocations | Caller           | Location                 |
| -----: | -----: | -----: | ------------------: | ----------: | ---------------- | ------------------------ |
| -99.7% | -3 MiB | 100.0% | 3.01 MiB → 8.33 KiB |      11 → 8 | `transform_line` | `./black/linegen.py:601` |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |      % |          Size | Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | --------------- | ------------------------ |
| -33.3% | -3 MiB | 100.0% | 9 MiB → 6 MiB |       9 → 6 | `visit_default` | `./black/linegen.py:134` |

##### `push` (`./blib2to3/pgen2/parse.py:374`)

| Change |  Delta |      % |          Size | Allocations | Caller      | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ----------- | ------------------------------------- |
| -75.0% | -3 MiB | 100.0% | 4 MiB → 1 MiB |       4 → 1 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `visit_power` (`./black/linegen.py:341`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
| -11.2% | -2 MiB | 100.0% | 17.9 MiB → 15.9 MiB | 10,809 → 10,807 | `visit` | `./black/nodes.py:163 → 152` |

##### `_hugging_power_ops_line_to_string` (`./black/linegen.py:590`)

|  Change |  Delta |      % |          Size | Allocations | Caller           | Location                 |
| ------: | -----: | -----: | ------------: | ----------: | ---------------- | ------------------------ |
| -100.0% | -2 MiB | 100.0% | 2 MiB → 802 B |       3 → 1 | `transform_line` | `./black/linegen.py:601` |

##### `hug_power_op` (`./black/trans.py:85`)

|  Change |  Delta |            % |        Size | Allocations | Caller                              | Location                  |
| ------: | -----: | -----------: | ----------: | ----------: | ----------------------------------- | ------------------------- |
| removed | -1 MiB | 50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `run_transformer`                   | `./black/linegen.py:1755` |
| removed | -1 MiB | 50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_hugging_power_ops_line_to_string` | `./black/linegen.py:590`  |

##### `visit_simple_stmt` (`./black/linegen.py:295`)

| Change |      Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | ---------: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  -8.4% | -1.999 MiB | 100.0% | 23.8 MiB → 21.8 MiB | 13,402 → 13,400 | `visit` | `./black/nodes.py:163 → 152` |

##### `right_hand_split` (`./black/linegen.py:809`)

| Change |  Delta |      % |                Size | Allocations | Caller | Location                 |
| -----: | -----: | -----: | ------------------: | ----------: | ------ | ------------------------ |
| -99.5% | -1 MiB | 100.0% | 1.01 MiB → 5.29 KiB |       6 → 5 | `_rhs` | `./black/linegen.py:650` |

##### `_rhs` (`./black/linegen.py:650`)

| Change |  Delta |      % |                Size | Allocations | Caller            | Location                         |
| -----: | -----: | -----: | ------------------: | ----------: | ----------------- | -------------------------------- |
| -99.4% | -1 MiB | 100.0% | 1.01 MiB → 6.38 KiB |       7 → 6 | `run_transformer` | `./black/linegen.py:1755 → 1771` |

##### `_first_right_hand_split` (`./black/linegen.py:829`)

|  Change |  Delta |             % |                Size | Allocations | Caller                                  | Location                 |
| ------: | -----: | ------------: | ------------------: | ----------: | --------------------------------------- | ------------------------ |
| removed | -1 MiB |  99.8% → 0.0% |         1 MiB → 0 B |       1 → 0 | `_maybe_split_omitting_optional_parens` | `./black/linegen.py:932` |
|  -16.3% | -274 B | 0.2% → 100.0% | 1.64 KiB → 1.37 KiB |           2 | `right_hand_split`                      | `./black/linegen.py:809` |

##### `assert_equivalent` (`./black/__init__.py:1510`)

| Change |  Delta |      % |                Size | Allocations | Caller                            | Location                          |
| -----: | -----: | -----: | ------------------: | ----------: | --------------------------------- | --------------------------------- |
|  -4.3% | -1 MiB | 100.0% | 23.3 MiB → 22.3 MiB |   209 → 208 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

| Change |  Delta |      % |                Size | Allocations | Caller                  | Location                       |
| -----: | -----: | -----: | ------------------: | ----------: | ----------------------- | ------------------------------ |
|  -9.9% | -1 MiB | 100.0% | 10.1 MiB → 9.12 MiB |   143 → 142 | `_parse_single_version` | `./black/parsing.py:117 → 125` |

##### `_parse_single_version` (`./black/parsing.py:125`)

| Change |  Delta |      % |                Size | Allocations | Caller      | Location                       |
| -----: | -----: | -----: | ------------------: | ----------: | ----------- | ------------------------------ |
|  -9.9% | -1 MiB | 100.0% | 10.1 MiB → 9.12 MiB |   143 → 142 | `parse_ast` | `./black/parsing.py:129 → 137` |

##### `parse_ast` (`./black/parsing.py:137`)

| Change |  Delta |      % |                Size | Allocations | Caller              | Location                          |
| -----: | -----: | -----: | ------------------: | ----------: | ------------------- | --------------------------------- |
|  -9.9% | -1 MiB | 100.0% | 10.1 MiB → 9.12 MiB |   143 → 142 | `assert_equivalent` | `./black/__init__.py:1524 → 1510` |

##### `visit_NUMBER` (`./black/linegen.py:505`)

| Change |  Delta |      % |               Size | Allocations | Caller  | Location                     |
| -----: | -----: | -----: | -----------------: | ----------: | ------- | ---------------------------- |
| -67.6% | -1 MiB | 100.0% | 1.48 MiB → 490 KiB |   654 → 653 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_factor` (`./black/linegen.py:379`)

| Change |  Delta |      % |               Size | Allocations | Caller  | Location                     |
| -----: | -----: | -----: | -----------------: | ----------: | ------- | ---------------------------- |
| -79.7% | -1 MiB | 100.0% | 1.25 MiB → 260 KiB |   348 → 347 | `visit` | `./black/nodes.py:163 → 152` |

##### `preceding_leaf` (`./black/nodes.py:436`)

| Change |  Delta |      % |                Size | Allocations | Caller       | Location                     |
| -----: | -----: | -----: | ------------------: | ----------: | ------------ | ---------------------------- |
| -96.5% | -1 MiB | 100.0% | 1.04 MiB → 37.7 KiB |     67 → 66 | `whitespace` | `./black/nodes.py:194 → 183` |

##### `__init__` (`./blib2to3/pytree.py:237`)

|  Change |  Delta |            % |        Size | Allocations | Caller                | Location               |
| ------: | -----: | -----------: | ----------: | ----------: | --------------------- | ---------------------- |
| removed | -1 MiB | 99.7% → 0.0% | 1 MiB → 0 B |       1 → 0 | `wrap_in_parentheses` | `./black/nodes.py:935` |

##### `contains_uncollapsable_type_comments` (`./black/lines.py:276`)

|  Change |  Delta |             % |        Size | Allocations | Caller           | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------- | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `transform_line` | `./black/linegen.py:601` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`)

|  Change |  Delta |             % |        Size | Allocations | Caller   | Location                                |
| ------: | -----: | ------------: | ----------: | ----------: | -------- | --------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

| Change |      Delta |      % |                Size |   Allocations | Caller           | Location                            |
| -----: | ---------: | -----: | ------------------: | ------------: | ---------------- | ----------------------------------- |
|    ~0% | -1.918 KiB | 100.0% | 4.32 MiB → 4.31 MiB | 1,299 → 1,298 | `_load_unlocked` | `<frozen importlib._bootstrap>:666` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

| Change |      Delta |      % |     Size |   Allocations | Caller                    | Location                             |
| -----: | ---------: | -----: | -------: | ------------: | ------------------------- | ------------------------------------ |
|    ~0% | -1.918 KiB | 100.0% | 4.32 MiB | 1,301 → 1,300 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

| Change |      Delta |      % |     Size |   Allocations | Caller           | Location                             |
| -----: | ---------: | -----: | -------: | ------------: | ---------------- | ------------------------------------ |
|    ~0% | -1.918 KiB | 100.0% | 4.32 MiB | 1,302 → 1,301 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

| Change |      Delta |      % |                Size |   Allocations | Caller                | Location                |
| -----: | ---------: | -----: | ------------------: | ------------: | --------------------- | ----------------------- |
|    ~0% | -1.918 KiB | 100.0% |            4.32 MiB | 1,304 → 1,303 | `_get_module_details` | `<frozen runpy>:105`    |
|  -1.3% | -1.703 KiB |   3.0% |   133 KiB → 131 KiB |           131 | `<module>`            | `./black/linegen.py:1`  |
|    ~0% |  -1.46 KiB |  97.9% |            4.23 MiB |         1,224 | `<module>`            | `./black/__init__.py:1` |
|  +2.8% |     +837 B |   0.7% | 28.9 KiB → 29.7 KiB |            33 | `<module>`            | `./black/cache.py:1`    |
|  +0.1% |     +794 B |  29.1% |            1.26 MiB |     235 → 236 | `<module>`            | `./black/files.py:1`    |

##### `_get_module_details` (`<frozen runpy>:105`)

| Change |      Delta |      % |                Size |   Allocations | Caller                | Location             |
| -----: | ---------: | -----: | ------------------: | ------------: | --------------------- | -------------------- |
|    ~0% | -1.918 KiB |  99.9% |            4.32 MiB | 1,304 → 1,303 | `_get_module_details` | `<frozen runpy>:105` |
|    ~0% | -1.918 KiB | 100.0% | 4.33 MiB → 4.32 MiB | 1,311 → 1,310 | `run_module`          | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

| Change |      Delta |      % |     Size |     Allocations | Caller         | Location                                                       |
| -----: | ---------: | -----: | -------: | --------------: | -------------- | -------------------------------------------------------------- |
|    ~0% | -1.702 KiB | 100.0% | 78.6 MiB | 22,706 → 22,705 | `_run_tracker` | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |     Delta |      % |     Size | Allocations | Caller             | Location                                     |
| -----: | --------: | -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
|    ~0% | -1.46 KiB | 100.0% | 4.28 MiB |       1,269 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|    ~0% |      -8 B |  30.5% | 1.31 MiB |         319 | `_handle_fromlist` | `<frozen importlib._bootstrap>:1209`         |

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
|    ~0% |  -8 B | 85.1% | 1.11 MiB |         106 | `<module>` | `./blib2to3/pygram.py:1` |
|    ~0% |  -8 B | 85.8% | 1.12 MiB |         115 | `<module>` | `./black/nodes.py:1`     |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `visit_default` (`./black/linegen.py:134`)

| Change |  Delta |             % |                Size |     Allocations | Callee              | Location                     |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------------- | ---------------------------- |
| +15.0% | +5 MiB |        100.0% | 33.4 MiB → 38.4 MiB | 21,082 → 21,087 | `visit_default`     | `./black/nodes.py:187 → 176` |
| +17.4% | +3 MiB | 51.7% → 52.8% | 17.3 MiB → 20.3 MiB | 20,882 → 20,885 | `append`            | `./black/lines.py:63 → 52`   |
| -33.3% | -3 MiB | 26.9% → 15.6% |       9 MiB → 6 MiB |           9 → 6 | `generate_comments` | `./black/comments.py:52`     |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |             % |                Size |     Allocations | Callee          | Location                 |
| -----: | -----: | ------------: | ------------------: | --------------: | --------------- | ------------------------ |
| +15.0% | +5 MiB |        100.0% | 33.4 MiB → 38.4 MiB | 21,082 → 21,087 | `visit_default` | `./black/linegen.py:134` |
| +15.1% | +5 MiB | 99.2% → 99.3% | 33.2 MiB → 38.2 MiB | 20,711 → 20,716 | `visit_stmt`    | `./black/linegen.py:199` |
| +12.2% | +4 MiB | 97.9% → 95.6% | 32.7 MiB → 36.7 MiB | 20,144 → 20,148 | `visit_suite`   | `./black/linegen.py:288` |
| +12.2% | +4 MiB | 98.1% → 95.8% | 32.8 MiB → 36.8 MiB | 20,270 → 20,274 | `visit_funcdef` | `./black/linegen.py:254` |
|    new | +3 MiB |   0.0% → 7.8% |         0 B → 3 MiB |           0 → 3 | `visit_INDENT`  | `./black/linegen.py:179` |

##### `visit_default` (`./black/nodes.py:176`)

| Change |  Delta |      % |                Size |     Allocations | Callee  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
| +15.0% | +5 MiB | 100.0% | 33.4 MiB → 38.4 MiB | 21,082 → 21,087 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_stmt` (`./black/linegen.py:199`)

| Change |  Delta |            % |                Size |     Allocations | Callee                       | Location                         |
| -----: | -----: | -----------: | ------------------: | --------------: | ---------------------------- | -------------------------------- |
| +15.1% | +5 MiB |       100.0% | 33.2 MiB → 38.2 MiB | 20,709 → 20,714 | `visit`                      | `./black/nodes.py:163 → 152`     |
| +33.3% | +1 MiB | 9.0% → 10.5% |       3 MiB → 4 MiB |           4 → 5 | `normalize_invisible_parens` | `./black/linegen.py:1328 → 1344` |

##### `visit_suite` (`./black/linegen.py:288`)

| Change |  Delta |      % |                Size |     Allocations | Callee          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
| +12.2% | +4 MiB | 100.0% | 32.7 MiB → 36.7 MiB | 20,144 → 20,148 | `visit_default` | `./black/linegen.py:134` |

##### `visit_funcdef` (`./black/linegen.py:254`)

| Change |  Delta |      % |                Size |     Allocations | Callee  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
| +12.2% | +4 MiB | 100.0% | 32.8 MiB → 36.8 MiB | 20,270 → 20,274 | `visit` | `./black/nodes.py:163 → 152` |

##### `convert` (`./blib2to3/pytree.py:475`)

| Change |  Delta |             % |          Size | Allocations | Callee    | Location                       |
| -----: | -----: | ------------: | ------------: | ----------: | --------- | ------------------------------ |
| +75.0% | +3 MiB | 99.9% → 87.5% | 4 MiB → 7 MiB |       4 → 7 | `__new__` | `./blib2to3/pytree.py:81 → 70` |

##### `append` (`./black/lines.py:52`)

|  Change |  Delta |             % |                Size |     Allocations | Callee       | Location                     |
| ------: | -----: | ------------: | ------------------: | --------------: | ------------ | ---------------------------- |
|  +13.1% | +2 MiB | 88.1% → 84.9% | 15.2 MiB → 17.2 MiB | 20,787 → 20,789 | `mark`       | `./black/brackets.py:70`     |
| +189.7% | +2 MiB |  6.1% → 15.1% | 1.05 MiB → 3.05 MiB |         90 → 92 | `whitespace` | `./black/nodes.py:194 → 183` |
| removed | -1 MiB |   5.8% → 0.0% |         1 MiB → 0 B |           1 → 0 | `prefix`     | `./blib2to3/pytree.py:480`   |

##### `line` (`./black/linegen.py:109`)

| Change |  Delta |             % |        Size | Allocations | Callee     | Location     |
| -----: | -----: | ------------: | ----------: | ----------: | ---------- | ------------ |
|    new | +3 MiB | 0.0% → 100.0% | 0 B → 3 MiB |       0 → 3 | `__init__` | `<string>:2` |

##### `visit_INDENT` (`./black/linegen.py:179`)

| Change |  Delta |             % |        Size | Allocations | Callee | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | ------ | ------------------------ |
|    new | +3 MiB | 0.0% → 100.0% | 0 B → 3 MiB |       0 → 3 | `line` | `./black/linegen.py:109` |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

|  Change |  Delta |      % |                Size | Allocations | Callee                | Location                         |
| ------: | -----: | -----: | ------------------: | ----------: | --------------------- | -------------------------------- |
| +175.1% | +2 MiB | 100.0% | 1.14 MiB → 3.14 MiB |   196 → 198 | `update_sibling_maps` | `./blib2to3/pytree.py:369 → 358` |

##### `whitespace` (`./black/nodes.py:183`)

|    Change |  Delta |            % |                Size | Allocations | Callee           | Location                         |
| --------: | -----: | -----------: | ------------------: | ----------: | ---------------- | -------------------------------- |
| +17029.7% | +3 MiB | 1.7% → 98.8% |   18 KiB → 3.02 MiB |     23 → 26 | `prev_sibling`   | `./blib2to3/pytree.py:207 → 196` |
|    -96.5% | -1 MiB | 98.3% → 1.2% | 1.04 MiB → 37.7 KiB |     67 → 66 | `preceding_leaf` | `./black/nodes.py:441 → 436`     |

##### `wrap_in_parentheses` (`./black/nodes.py:930`)

|  Change |  Delta |             % |          Size | Allocations | Callee     | Location                         |
| ------: | -----: | ------------: | ------------: | ----------: | ---------- | -------------------------------- |
| +200.0% | +2 MiB | 50.0% → 75.0% | 1 MiB → 3 MiB |       1 → 3 | `prefix`   | `./blib2to3/pytree.py:329 → 318` |
| removed | -1 MiB |  50.0% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__init__` | `./blib2to3/pytree.py:248`       |
|     new | +1 MiB |  0.0% → 25.0% |   0 B → 1 MiB |       0 → 1 | `prefix`   | `./blib2to3/pytree.py:469`       |

##### `__init__` (`<string>:2`)

|  Change |  Delta |      % |          Size | Allocations | Callee     | Location     |
| ------: | -----: | -----: | ------------: | ----------: | ---------- | ------------ |
| +200.0% | +2 MiB | 100.0% | 1 MiB → 3 MiB |       1 → 3 | `__init__` | `<string>:2` |

##### `prefix` (`./blib2to3/pytree.py:318`)

|  Change |  Delta |            % |          Size | Allocations | Callee   | Location                         |
| ------: | -----: | -----------: | ------------: | ----------: | -------- | -------------------------------- |
| +200.0% | +2 MiB |       100.0% | 1 MiB → 3 MiB |       1 → 3 | `prefix` | `./blib2to3/pytree.py:480 → 469` |
|     new | +1 MiB | 0.0% → 33.3% |   0 B → 1 MiB |       0 → 1 | `prefix` | `./blib2to3/pytree.py:318`       |

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

|     Change |  Delta |             % |             Size | Allocations | Callee    | Location                         |
| ---------: | -----: | ------------: | ---------------: | ----------: | --------- | -------------------------------- |
| +101344.3% | +3 MiB | 0.3% → 100.0% | 3.03 KiB → 3 MiB |       4 → 7 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `normalize_invisible_parens` (`./black/linegen.py:1344`)

|  Change |  Delta |              % |          Size | Allocations | Callee                                | Location                     |
| ------: | -----: | -------------: | ------------: | ----------: | ------------------------------------- | ---------------------------- |
| +100.0% | +2 MiB | 66.6% → 100.0% | 2 MiB → 4 MiB |       2 → 4 | `wrap_in_parentheses`                 | `./black/nodes.py:935 → 930` |
| removed | -1 MiB |   33.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `maybe_make_parens_invisible_in_atom` | `./black/linegen.py:1574`    |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

| Change |      Delta |            % |                Size | Allocations | Callee        | Location                          |
| -----: | ---------: | -----------: | ------------------: | ----------: | ------------- | --------------------------------- |
| +66.0% | +1.484 KiB | 6.9% → 11.2% | 2.25 KiB → 3.73 KiB |       3 → 4 | `__setattr__` | `/usr/lib/python3.11/enum.py:831` |

##### `_run_code` (`<frozen runpy>:65`)

| Change |  Delta |      % |     Size | Allocations | Callee     | Location                |
| -----: | -----: | -----: | -------: | ----------: | ---------- | ----------------------- |
|    ~0% | +222 B | 100.0% | 74.3 MiB |      21,394 | `<module>` | `./black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

| Change |  Delta |      % |     Size | Allocations | Callee      | Location            |
| -----: | -----: | -----: | -------: | ----------: | ----------- | ------------------- |
|    ~0% | +222 B | 100.0% | 74.3 MiB |      21,394 | `_run_code` | `<frozen runpy>:65` |

##### `transform_line` (`./black/linegen.py:601`)

|  Change |  Delta |            % |                Size | Allocations | Callee                                 | Location                         |
| ------: | -----: | -----------: | ------------------: | ----------: | -------------------------------------- | -------------------------------- |
|  -99.7% | -3 MiB | 60.0% → 0.8% | 3.01 MiB → 8.33 KiB |      11 → 8 | `run_transformer`                      | `./black/linegen.py:1755 → 1771` |
| -100.0% | -2 MiB | 39.9% → 0.1% |       2 MiB → 802 B |       3 → 1 | `_hugging_power_ops_line_to_string`    | `./black/linegen.py:590`         |
| removed | -1 MiB | 20.0% → 0.0% |         1 MiB → 0 B |       1 → 0 | `contains_uncollapsable_type_comments` | `./black/lines.py:276`           |

##### `normalize_trailing_prefix` (`./black/comments.py:127`)

| Change |  Delta |              % |          Size | Allocations | Callee   | Location                         |
| -----: | -----: | -------------: | ------------: | ----------: | -------- | -------------------------------- |
| -50.0% | -3 MiB | 85.7% → 100.0% | 6 MiB → 3 MiB |       6 → 3 | `prefix` | `./blib2to3/pytree.py:480 → 469` |

##### `run_transformer` (`./black/linegen.py:1771`)

|  Change |  Delta |             % |                Size | Allocations | Callee           | Location                 |
| ------: | -----: | ------------: | ------------------: | ----------: | ---------------- | ------------------------ |
|  -99.4% | -1 MiB | 33.5% → 76.5% | 1.01 MiB → 6.38 KiB |       7 → 6 | `_rhs`           | `./black/linegen.py:650` |
|  -99.9% | -1 MiB | 33.3% → 16.7% |    1 MiB → 1.39 KiB |       2 → 1 | `transform_line` | `./black/linegen.py:601` |
| removed | -1 MiB |  33.2% → 0.0% |         1 MiB → 0 B |       1 → 0 | `hug_power_op`   | `./black/trans.py:85`    |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |             % |          Size | Allocations | Callee                      | Location                  |
| -----: | -----: | ------------: | ------------: | ----------: | --------------------------- | ------------------------- |
| -57.1% | -4 MiB | 77.8% → 50.0% | 7 MiB → 3 MiB |       7 → 3 | `normalize_trailing_prefix` | `./black/comments.py:127` |

##### `visit_power` (`./black/linegen.py:341`)

| Change |  Delta |      % |                Size |     Allocations | Callee          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
| -11.2% | -2 MiB | 100.0% | 17.9 MiB → 15.9 MiB | 10,808 → 10,806 | `visit_default` | `./black/linegen.py:134` |

##### `_hugging_power_ops_line_to_string` (`./black/linegen.py:590`)

|  Change |  Delta |            % |        Size | Allocations | Callee           | Location                |
| ------: | -----: | -----------: | ----------: | ----------: | ---------------- | ----------------------- |
| removed | -1 MiB | 50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `line_to_string` | `./black/lines.py:1073` |
| removed | -1 MiB | 50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `hug_power_op`   | `./black/trans.py:85`   |

##### `hug_power_op` (`./black/trans.py:85`)

|  Change |  Delta |            % |        Size | Allocations | Callee  | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | ------- | -------------------------- |
| removed | -1 MiB | 50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `clone` | `./blib2to3/pytree.py:452` |

##### `visit_simple_stmt` (`./black/linegen.py:295`)

| Change |      Delta |      % |                Size |     Allocations | Callee          | Location                 |
| -----: | ---------: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
|  -8.4% | -1.999 MiB | 100.0% | 23.8 MiB → 21.8 MiB | 13,402 → 13,400 | `visit_default` | `./black/linegen.py:134` |

##### `right_hand_split` (`./black/linegen.py:809`)

| Change |  Delta |             % |                Size | Allocations | Callee                                  | Location                 |
| -----: | -----: | ------------: | ------------------: | ----------: | --------------------------------------- | ------------------------ |
| -99.9% | -1 MiB | 99.6% → 18.5% |     1 MiB → 1,000 B |       2 → 1 | `_maybe_split_omitting_optional_parens` | `./black/linegen.py:932` |
| -16.3% | -274 B |  0.2% → 25.9% | 1.64 KiB → 1.37 KiB |           2 | `_first_right_hand_split`               | `./black/linegen.py:829` |

##### `_rhs` (`./black/linegen.py:650`)

| Change |  Delta |             % |                Size | Allocations | Callee             | Location                 |
| -----: | -----: | ------------: | ------------------: | ----------: | ------------------ | ------------------------ |
| -99.5% | -1 MiB | 99.9% → 82.9% | 1.01 MiB → 5.29 KiB |       6 → 5 | `right_hand_split` | `./black/linegen.py:809` |

##### `_first_right_hand_split` (`./black/linegen.py:829`)

| Change |  Delta |             % |          Size | Allocations | Callee                     | Location                         |
| -----: | -----: | ------------: | ------------: | ----------: | -------------------------- | -------------------------------- |
| -99.9% | -1 MiB | 99.9% → 44.1% | 1 MiB → 618 B |       2 → 1 | `bracket_split_build_line` | `./black/linegen.py:1082 → 1123` |

##### `assert_equivalent` (`./black/__init__.py:1510`)

| Change |  Delta |             % |                Size | Allocations | Callee      | Location                       |
| -----: | -----: | ------------: | ------------------: | ----------: | ----------- | ------------------------------ |
|  -9.9% | -1 MiB | 43.5% → 41.0% | 10.1 MiB → 9.12 MiB |   143 → 142 | `parse_ast` | `./black/parsing.py:129 → 137` |

##### `_parse_single_version` (`./black/parsing.py:125`)

| Change |  Delta |      % |                Size | Allocations | Callee  | Location                        |
| -----: | -----: | -----: | ------------------: | ----------: | ------- | ------------------------------- |
|  -9.9% | -1 MiB | 100.0% | 10.1 MiB → 9.12 MiB |   143 → 142 | `parse` | `/usr/lib/python3.11/ast.py:33` |

##### `parse_ast` (`./black/parsing.py:137`)

| Change |  Delta |      % |                Size | Allocations | Callee                  | Location                       |
| -----: | -----: | -----: | ------------------: | ----------: | ----------------------- | ------------------------------ |
|  -9.9% | -1 MiB | 100.0% | 10.1 MiB → 9.12 MiB |   143 → 142 | `_parse_single_version` | `./black/parsing.py:117 → 125` |

##### `visit_NUMBER` (`./black/linegen.py:505`)

| Change |  Delta |      % |               Size | Allocations | Callee          | Location                 |
| -----: | -----: | -----: | -----------------: | ----------: | --------------- | ------------------------ |
| -67.6% | -1 MiB | 100.0% | 1.48 MiB → 490 KiB |   654 → 653 | `visit_default` | `./black/linegen.py:134` |

##### `visit_factor` (`./black/linegen.py:379`)

| Change |  Delta |      % |               Size | Allocations | Callee          | Location                 |
| -----: | -----: | -----: | -----------------: | ----------: | --------------- | ------------------------ |
| -79.7% | -1 MiB | 100.0% | 1.25 MiB → 260 KiB |   348 → 347 | `visit_default` | `./black/linegen.py:134` |

##### `preceding_leaf` (`./black/nodes.py:436`)

| Change |  Delta |      % |                Size | Allocations | Callee         | Location                         |
| -----: | -----: | -----: | ------------------: | ----------: | -------------- | -------------------------------- |
| -96.5% | -1 MiB | 100.0% | 1.04 MiB → 37.7 KiB |     67 → 66 | `prev_sibling` | `./blib2to3/pytree.py:207 → 196` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

| Change |     Delta |     % |     Size | Allocations | Callee                      | Location                                      |
| -----: | --------: | ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
|    ~0% | -1.46 KiB | 99.3% | 4.28 MiB |       1,269 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|    ~0% |    -213 B | 59.2% | 2.55 MiB |   619 → 618 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

| Change |      Delta |      % |                Size |   Allocations | Callee        | Location                                     |
| -----: | ---------: | -----: | ------------------: | ------------: | ------------- | -------------------------------------------- |
|    ~0% | -1.918 KiB | 100.0% | 4.32 MiB → 4.31 MiB | 1,299 → 1,298 | `exec_module` | `<frozen importlib._bootstrap_external>:934` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

| Change |      Delta |      % |     Size |   Allocations | Callee           | Location                            |
| -----: | ---------: | -----: | -------: | ------------: | ---------------- | ----------------------------------- |
|    ~0% | -1.918 KiB | 100.0% | 4.32 MiB | 1,301 → 1,300 | `_load_unlocked` | `<frozen importlib._bootstrap>:666` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

| Change |      Delta |      % |     Size |   Allocations | Callee                    | Location                             |
| -----: | ---------: | -----: | -------: | ------------: | ------------------------- | ------------------------------------ |
|    ~0% | -1.918 KiB | 100.0% | 4.32 MiB | 1,302 → 1,301 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |

##### `_get_module_details` (`<frozen runpy>:105`)

| Change |      Delta |     % |     Size |   Allocations | Callee                | Location                             |
| -----: | ---------: | ----: | -------: | ------------: | --------------------- | ------------------------------------ |
|    ~0% | -1.918 KiB | 99.9% | 4.32 MiB | 1,304 → 1,303 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
|    ~0% | -1.918 KiB | 99.9% | 4.32 MiB | 1,304 → 1,303 | `_get_module_details` | `<frozen runpy>:105`                 |

##### `run_module` (`<frozen runpy>:201`)

| Change |      Delta |     % |                Size |   Allocations | Callee                | Location             |
| -----: | ---------: | ----: | ------------------: | ------------: | --------------------- | -------------------- |
|    ~0% | -1.918 KiB |  5.5% | 4.33 MiB → 4.32 MiB | 1,311 → 1,310 | `_get_module_details` | `<frozen runpy>:105` |
|    ~0% |     +222 B | 94.5% |            74.3 MiB |        21,394 | `_run_module_code`    | `<frozen runpy>:91`  |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |      Delta |           % |                Size | Allocations | Callee     | Location                |
| -----: | ---------: | ----------: | ------------------: | ----------: | ---------- | ----------------------- |
|  -5.3% | -1.703 KiB |        0.7% |   32 KiB → 30.3 KiB |          32 | `<module>` | `./black/trans.py:1`    |
|  -1.2% | -1.703 KiB |        3.2% |   142 KiB → 140 KiB |         139 | `<module>` | `./black/linegen.py:1`  |
|    ~0% |  -1.46 KiB |      100.0% |            4.28 MiB |       1,269 | `<module>` | `./black/__init__.py:1` |
|  +2.2% |     +837 B | 0.8% → 0.9% | 36.9 KiB → 37.8 KiB |          41 | `<module>` | `./black/cache.py:1`    |
|  +0.1% |     +794 B |       29.4% |            1.26 MiB |   236 → 237 | `<module>` | `./black/files.py:1`    |

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

|     Change |  Delta |            % |              Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------: | -----: | -----------: | ----------------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|        new | +3 MiB |  0.0% → 3.8% |       0 B → 3 MiB |       0 → 3 | `__new__` (`./blib2to3/pytree.py:70`) ← `convert` (475) ← `pop` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +174762.7% | +2 MiB | <0.1% → 2.5% |  1.17 KiB → 2 MiB |       2 → 4 | `addtoken` (`./blib2to3/pgen2/parse.py:230`) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|        new | +2 MiB |  0.0% → 2.5% |       0 B → 2 MiB |       0 → 2 | `_stringify_ast` (`./black/parsing.py:182`) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `assert_equivalent` (`./black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|        new | +2 MiB |  0.0% → 2.5% |       0 B → 2 MiB |       0 → 2 | `__init__` (`<string>:2`) ← `__init__` (2) ← `line` (`./black/linegen.py:109`) ← `visit_INDENT` (179) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  +36714.8% | +1 MiB | <0.1% → 1.3% |  2.79 KiB → 1 MiB |       3 → 4 | `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   +3792.6% | +1 MiB | <0.1% → 1.3% | 27 KiB → 1.03 MiB |     36 → 37 | `mark` (`./black/brackets.py:70`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|   +1101.1% | +1 MiB |  0.1% → 1.4% | 93 KiB → 1.09 MiB |   124 → 125 | `mark` (`./black/brackets.py:70`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|        new | +1 MiB |  0.0% → 1.3% |       0 B → 1 MiB |       0 → 1 | `_stringify_ast_with_new_parent` (`./black/parsing.py:174`) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `assert_equivalent` (`./black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|        new | +1 MiB |  0.0% → 1.3% |       0 B → 1 MiB |       0 → 1 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|        new | +1 MiB |  0.0% → 1.3% |       0 B → 1 MiB |       0 → 1 | `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                               |
|        new | +1 MiB |  0.0% → 1.3% |       0 B → 1 MiB |       0 → 1 | `changed` (`./blib2to3/pytree.py:160`) ← `changed` (160) ← `changed` (160) ← `prefix` (469) ← `prefix` (318) ← `prefix` (318) ← `wrap_in_parentheses` (`./black/nodes.py:930`) ← `normalize_invisible_parens` (`./black/linegen.py:1344`) ← `visit_stmt` (199) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|        new | +1 MiB |  0.0% → 1.3% |       0 B → 1 MiB |       0 → 1 | `changed` (`./blib2to3/pytree.py:160`) ← `changed` (160) ← `changed` (160) ← `prefix` (469) ← `wrap_in_parentheses` (`./black/nodes.py:930`) ← `normalize_invisible_parens` (`./black/linegen.py:1344`) ← `visit_stmt` (199) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|        new | +1 MiB |  0.0% → 1.3% |       0 B → 1 MiB |       0 → 1 | `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|        new | +1 MiB |  0.0% → 1.3% |       0 B → 1 MiB |       0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|        new | +1 MiB |  0.0% → 1.3% |       0 B → 1 MiB |       0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|        new | +1 MiB |  0.0% → 1.3% |       0 B → 1 MiB |       0 → 1 | `_uniq` (`/usr/lib/python3.11/re/_parser.py:444`) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `parse` (970) ← `compile` (`/usr/lib/python3.11/re/_compiler.py:738`) ← `_compile` (`/usr/lib/python3.11/re/__init__.py:272`) ← `compile` (225) ← `<module>` (`./blib2to3/pgen2/tokenize.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./blib2to3/pgen2/driver.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`./blib2to3/pygram.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`./black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105) |
|        new | +1 MiB |  0.0% → 1.3% |       0 B → 1 MiB |       0 → 1 | `convert` (`./blib2to3/pytree.py:475`) ← `shift` (`./blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|        new | +1 MiB |  0.0% → 1.3% |       0 B → 1 MiB |       0 → 1 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|        new | +1 MiB |  0.0% → 1.3% |       0 B → 1 MiB |       0 → 1 | `changed` (`./blib2to3/pytree.py:160`) ← `prefix` (469) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                       |
|        new | +1 MiB |  0.0% → 1.3% |       0 B → 1 MiB |       0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                    |

### Improvements

Call stacks with the largest decrease in bytes held at peak memory in their leaf frame.

Common call stack: `format_file_contents` (`./black/__init__.py:1059`) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) ← `run_module` (201) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|  Change |  Delta |             % |                Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | -----: | ------------: | ------------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -75.0% | -3 MiB |   5.1% → 1.3% |       4 MiB → 1 MiB |       4 → 1 | `push` (`./blib2to3/pgen2/parse.py:374`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -33.3% | -1 MiB |   3.8% → 2.5% |       3 MiB → 2 MiB |       3 → 2 | `_stringify_ast` (`./black/parsing.py:182`) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `assert_equivalent` (`./black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|   -9.9% | -1 MiB | 12.9% → 11.6% | 10.1 MiB → 9.12 MiB |   143 → 142 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`./black/parsing.py:125`) ← `parse_ast` (137) ← `assert_equivalent` (`./black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__` (`./blib2to3/pytree.py:248`) ← `wrap_in_parentheses` (`./black/nodes.py:935`) ← `normalize_invisible_parens` (`./black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189)                                     |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) |
|  -99.1% | -1 MiB |  1.3% → <0.1% | 1.01 MiB → 8.88 KiB |     17 → 16 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `preceding_leaf` (`./black/nodes.py:436`) ← `whitespace` (183) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168)                                                                                                                                                                                                                                                                                     |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189)                    |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `contains_uncollapsable_type_comments` (`./black/lines.py:276`) ← `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `<listcomp>` (`./black/parsing.py:154`) ← `_normalize` (151) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`./black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -49.1% | -1 MiB |   2.6% → 1.3% | 2.04 MiB → 1.04 MiB |     43 → 42 | `_stringify_ast` (`./black/parsing.py:182`) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `assert_equivalent` (`./black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189)                                                                                                                                        |
|  -50.0% | -1 MiB |   2.5% → 1.3% |       2 MiB → 1 MiB |       2 → 1 | `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`) ← `__next__` (`./blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__` (`<string>:2`) ← `__init__` (2) ← `bracket_split_build_line` (`./black/linegen.py:1082`) ← `_first_right_hand_split` (829) ← `_maybe_split_omitting_optional_parens` (932) ← `right_hand_split` (809) ← `_rhs` (650) ← `run_transformer` (1755) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189)                |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `changed` (171) ← `prefix` (480) ← `prefix` (329) ← `wrap_in_parentheses` (`./black/nodes.py:935`) ← `normalize_invisible_parens` (`./black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `_addtoken` (`./blib2to3/pgen2/parse.py:290`) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `pop` (`./blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `prefix` (`./blib2to3/pytree.py:480`) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189)                                                                                                                                                                                                                                                                                                                                   |

# Leaked memory profile diff

Leaked 58.9 MiB → 55.9 MiB (-3.001 MiB, -5.1%) over 22,506 → 22,502 allocations (2.68 KiB → 2.55 KiB per allocation).

| Category         | Change |      Delta |             % |                Size |     Allocations |
| ---------------- | -----: | ---------: | ------------: | ------------------: | --------------: |
| Ours             |  -5.8% | -3.002 MiB | 88.0% → 87.4% | 51.9 MiB → 48.9 MiB | 21,387 → 21,384 |
| Standard library |    ~0% |     +539 B | 11.6% → 12.2% |            6.83 MiB |       889 → 888 |
| Third-party      |  +0.1% |     +172 B |          0.4% |             237 KiB |             230 |

Paths starting with `./` or `../` are relative to `/src/black/src/`.

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes never freed within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|     Change |      Delta |             % |                Size |     Allocations | Function                          | Location                                                    |
| ---------: | ---------: | ------------: | ------------------: | --------------: | --------------------------------- | ----------------------------------------------------------- |
|     +12.3% |     +2 MiB | 27.5% → 32.6% | 16.2 MiB → 18.2 MiB | 20,788 → 20,790 | `mark`                            | `./black/brackets.py:70`                                    |
| +174762.7% |     +2 MiB |  <0.1% → 3.6% |    1.17 KiB → 2 MiB |           2 → 4 | `addtoken`                        | `./blib2to3/pgen2/parse.py:242 → 230`                       |
|     +40.0% |     +2 MiB |  8.5% → 12.5% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `./blib2to3/pytree.py:81 → 70`                              |
|     +99.9% |     +1 MiB |   1.7% → 3.6% |       1 MiB → 2 MiB |           2 → 3 | `visit_default`                   | `./black/linegen.py:134`                                    |
|     +87.6% |     +1 MiB |   1.9% → 3.8% | 1.14 MiB → 2.14 MiB |       196 → 197 | `update_sibling_maps`             | `./blib2to3/pytree.py:369 → 358`                            |
|   +1338.7% |     +1 MiB |   0.1% → 1.9% | 76.5 KiB → 1.07 MiB |           6 → 7 | `transform_line`                  | `./black/linegen.py:601`                                    |
|        new |     +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `convert`                         | `./blib2to3/pytree.py:486 → 475`                            |
|        new |     +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `__str__`                         | `./black/lines.py:490 → 479`                                |
|        new |     +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `line`                            | `./black/linegen.py:109`                                    |
|        new |     +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `_uniq`                           | `/usr/lib/python3.11/re/_parser.py:444`                     |
|     +22.0% | +1.484 KiB |         <0.1% | 6.73 KiB → 8.22 KiB |           8 → 9 | `__setattr__`                     | `/usr/lib/python3.11/enum.py:831`                           |
|      +5.5% |     +172 B |         <0.1% | 3.04 KiB → 3.21 KiB |               2 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |
|      +3.3% |     +104 B |         <0.1% |  3.1 KiB → 3.21 KiB |               4 | `_format_str_once`                | `./black/__init__.py:1236 → 1215`                           |
|      +1.5% |      +96 B |         <0.1% | 6.24 KiB → 6.33 KiB |               4 | `append`                          | `./black/lines.py:63 → 52`                                  |
|      +5.5% |      +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `./black/cache.py:50`                                       |
|     +10.1% |      +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`                           |

##### Ours

|     Change |  Delta |             % |                Size |     Allocations | Function                          | Location                              |
| ---------: | -----: | ------------: | ------------------: | --------------: | --------------------------------- | ------------------------------------- |
|     +12.3% | +2 MiB | 27.5% → 32.6% | 16.2 MiB → 18.2 MiB | 20,788 → 20,790 | `mark`                            | `./black/brackets.py:70`              |
| +174762.7% | +2 MiB |  <0.1% → 3.6% |    1.17 KiB → 2 MiB |           2 → 4 | `addtoken`                        | `./blib2to3/pgen2/parse.py:242 → 230` |
|     +40.0% | +2 MiB |  8.5% → 12.5% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `./blib2to3/pytree.py:81 → 70`        |
|     +99.9% | +1 MiB |   1.7% → 3.6% |       1 MiB → 2 MiB |           2 → 3 | `visit_default`                   | `./black/linegen.py:134`              |
|     +87.6% | +1 MiB |   1.9% → 3.8% | 1.14 MiB → 2.14 MiB |       196 → 197 | `update_sibling_maps`             | `./blib2to3/pytree.py:369 → 358`      |
|   +1338.7% | +1 MiB |   0.1% → 1.9% | 76.5 KiB → 1.07 MiB |           6 → 7 | `transform_line`                  | `./black/linegen.py:601`              |
|        new | +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `convert`                         | `./blib2to3/pytree.py:486 → 475`      |
|        new | +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `__str__`                         | `./black/lines.py:490 → 479`          |
|        new | +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `line`                            | `./black/linegen.py:109`              |
|      +3.3% | +104 B |         <0.1% |  3.1 KiB → 3.21 KiB |               4 | `_format_str_once`                | `./black/__init__.py:1236 → 1215`     |
|      +1.5% |  +96 B |         <0.1% | 6.24 KiB → 6.33 KiB |               4 | `append`                          | `./black/lines.py:63 → 52`            |
|      +5.5% |  +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `./black/cache.py:50`                 |
|     +10.1% |  +60 B |         <0.1% |       594 B → 654 B |               1 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`     |

##### Standard library

| Change |      Delta |           % |                Size | Allocations | Function      | Location                                |
| -----: | ---------: | ----------: | ------------------: | ----------: | ------------- | --------------------------------------- |
|    new |     +1 MiB | 0.0% → 1.8% |         0 B → 1 MiB |       0 → 1 | `_uniq`       | `/usr/lib/python3.11/re/_parser.py:444` |
| +22.0% | +1.484 KiB |       <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__` | `/usr/lib/python3.11/enum.py:831`       |

#### Improvements

Functions with the largest decrease in bytes never freed within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |      Delta |            % |                Size | Allocations | Function                               | Location                                     |
| ------: | ---------: | -----------: | ------------------: | ----------: | -------------------------------------- | -------------------------------------------- |
|  -75.0% |     -3 MiB |  6.8% → 1.8% |       4 MiB → 1 MiB |       4 → 1 | `push`                                 | `./blib2to3/pgen2/parse.py:386 → 374`        |
|  -28.6% |     -2 MiB | 11.9% → 8.9% |       7 MiB → 5 MiB |       7 → 5 | `changed`                              | `./blib2to3/pytree.py:171 → 160`             |
|  -33.3% |     -1 MiB |  5.1% → 3.6% |       3 MiB → 2 MiB |       7 → 6 | `visit`                                | `./black/nodes.py:163 → 152`                 |
|  -99.7% |     -1 MiB | 1.7% → <0.1% |    1 MiB → 3.03 KiB |       5 → 4 | `__init__`                             | `./blib2to3/pytree.py:248 → 237`             |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `pop`                                  | `./blib2to3/pgen2/parse.py:398 → 386`        |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `_addtoken`                            | `./blib2to3/pgen2/parse.py:290 → 278`        |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `normalize_trailing_prefix`            | `./black/comments.py:127`                    |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `contains_uncollapsable_type_comments` | `./black/lines.py:276`                       |
|  -50.0% |     -1 MiB |  3.4% → 1.8% |       2 MiB → 1 MiB |       2 → 1 | `generate_tokens`                      | `./blib2to3/pgen2/tokenize.py:565 → 554`     |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `prefix`                               | `./blib2to3/pytree.py:480 → 469`             |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__getitem__`                          | `/usr/lib/python3.11/re/_parser.py:162`      |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `hug_power_op`                         | `./black/trans.py:85`                        |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__str__`                              | `./blib2to3/pytree.py:440`                   |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                             | `./black/trans.py:1`                         |
|   -3.1% |     -768 B |        <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`                              | `/usr/lib/python3.11/enum.py:488`            |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                             | `./black/ranges.py:1`                        |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split`              | `./black/linegen.py:829`                     |
|     ~0% |     -213 B |  4.3% → 4.6% |            2.55 MiB |   619 → 618 | `_compile_bytecode`                    | `<frozen importlib._bootstrap_external>:727` |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                             | `./blib2to3/pgen2/tokenize.py:1`             |

##### Ours

|  Change |      Delta |            % |                Size | Allocations | Function                               | Location                                 |
| ------: | ---------: | -----------: | ------------------: | ----------: | -------------------------------------- | ---------------------------------------- |
|  -75.0% |     -3 MiB |  6.8% → 1.8% |       4 MiB → 1 MiB |       4 → 1 | `push`                                 | `./blib2to3/pgen2/parse.py:386 → 374`    |
|  -28.6% |     -2 MiB | 11.9% → 8.9% |       7 MiB → 5 MiB |       7 → 5 | `changed`                              | `./blib2to3/pytree.py:171 → 160`         |
|  -33.3% |     -1 MiB |  5.1% → 3.6% |       3 MiB → 2 MiB |       7 → 6 | `visit`                                | `./black/nodes.py:163 → 152`             |
|  -99.7% |     -1 MiB | 1.7% → <0.1% |    1 MiB → 3.03 KiB |       5 → 4 | `__init__`                             | `./blib2to3/pytree.py:248 → 237`         |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `pop`                                  | `./blib2to3/pgen2/parse.py:398 → 386`    |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `_addtoken`                            | `./blib2to3/pgen2/parse.py:290 → 278`    |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `normalize_trailing_prefix`            | `./black/comments.py:127`                |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `contains_uncollapsable_type_comments` | `./black/lines.py:276`                   |
|  -50.0% |     -1 MiB |  3.4% → 1.8% |       2 MiB → 1 MiB |       2 → 1 | `generate_tokens`                      | `./blib2to3/pgen2/tokenize.py:565 → 554` |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `prefix`                               | `./blib2to3/pytree.py:480 → 469`         |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `hug_power_op`                         | `./black/trans.py:85`                    |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__str__`                              | `./blib2to3/pytree.py:440`               |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                             | `./black/trans.py:1`                     |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                             | `./black/ranges.py:1`                    |
|  -25.9% |     -274 B |        <0.1% |    1.03 KiB → 784 B |           1 | `_first_right_hand_split`              | `./black/linegen.py:829`                 |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                             | `./blib2to3/pgen2/tokenize.py:1`         |

##### Standard library

|  Change |  Delta |           % |                Size | Allocations | Function            | Location                                     |
| ------: | -----: | ----------: | ------------------: | ----------: | ------------------- | -------------------------------------------- |
| removed | -1 MiB | 1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__getitem__`       | `/usr/lib/python3.11/re/_parser.py:162`      |
|   -3.1% | -768 B |       <0.1% | 24.1 KiB → 23.3 KiB |     27 → 26 | `__new__`           | `/usr/lib/python3.11/enum.py:488`            |
|     ~0% | -213 B | 4.3% → 4.6% |            2.55 MiB |   619 → 618 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `mark` (`./black/brackets.py:70`)

| Change |  Delta |              % |                Size |     Allocations | Location                  |
| -----: | -----: | -------------: | ------------------: | --------------: | ------------------------- |
|  +6.2% | +1 MiB | 100.0% → 94.5% | 16.2 MiB → 17.2 MiB | 20,787 → 20,788 | `./black/brackets.py:112` |
|    new | +1 MiB |    0.0% → 5.5% |         0 B → 1 MiB |           0 → 1 | `./black/brackets.py:118` |

##### `addtoken` (`./blib2to3/pgen2/parse.py:230`)

|     Change |  Delta |              % |          Size | Allocations | Location                              |
| ---------: | -----: | -------------: | ------------: | ----------: | ------------------------------------- |
| +327680.0% | +2 MiB | 53.3% → 100.0% | 640 B → 2 MiB |       1 → 3 | `./blib2to3/pgen2/parse.py:252 → 240` |

##### `__new__` (`./blib2to3/pytree.py:70`)

| Change |  Delta |      % |          Size | Allocations | Location                       |
| -----: | -----: | -----: | ------------: | ----------: | ------------------------------ |
| +40.0% | +2 MiB | 100.0% | 5 MiB → 7 MiB |       5 → 7 | `./blib2to3/pytree.py:84 → 73` |

##### `visit_default` (`./black/linegen.py:134`)

|  Change |  Delta |              % |          Size | Allocations | Location                 |
| ------: | -----: | -------------: | ------------: | ----------: | ------------------------ |
| +100.0% | +1 MiB | 99.9% → 100.0% | 1 MiB → 2 MiB |       1 → 2 | `./black/linegen.py:158` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

|   Change |  Delta |            % |                Size | Allocations | Location                         |
| -------: | -----: | -----------: | ------------------: | ----------: | -------------------------------- |
|  removed | -1 MiB | 87.6% → 0.0% |         1 MiB → 0 B |       1 → 0 | `./blib2to3/pytree.py:371`       |
| +1456.7% | +1 MiB | 6.0% → 49.9% | 70.3 KiB → 1.07 MiB |     93 → 94 | `./blib2to3/pytree.py:376 → 365` |
| +1456.7% | +1 MiB | 6.0% → 49.9% | 70.3 KiB → 1.07 MiB |     93 → 94 | `./blib2to3/pytree.py:377 → 366` |

##### `transform_line` (`./black/linegen.py:601`)

| Change |  Delta |            % |        Size | Allocations | Location                 |
| -----: | -----: | -----------: | ----------: | ----------: | ------------------------ |
|    new | +1 MiB | 0.0% → 93.0% | 0 B → 1 MiB |       0 → 1 | `./black/linegen.py:627` |

##### `convert` (`./blib2to3/pytree.py:475`)

| Change |  Delta |             % |        Size | Allocations | Location                   |
| -----: | -----: | ------------: | ----------: | ----------: | -------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pytree.py:492` |

##### `__str__` (`./black/lines.py:479`)

| Change |  Delta |             % |        Size | Allocations | Location               |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./black/lines.py:489` |

##### `line` (`./black/linegen.py:109`)

| Change |  Delta |             % |        Size | Allocations | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | ------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./black/linegen.py:131` |

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

##### `push` (`./blib2to3/pgen2/parse.py:374`)

| Change |  Delta |      % |          Size | Allocations | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ------------------------------------- |
| -75.0% | -3 MiB | 100.0% | 4 MiB → 1 MiB |       4 → 1 | `./blib2to3/pgen2/parse.py:394 → 382` |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |             % |          Size | Allocations | Location                         |
| -----: | -----: | ------------: | ------------: | ----------: | -------------------------------- |
| -50.0% | -2 MiB | 57.1% → 40.0% | 4 MiB → 2 MiB |       4 → 2 | `./blib2to3/pytree.py:176 → 165` |

##### `visit` (`./black/nodes.py:152`)

| Change |  Delta |     % |          Size | Allocations | Location                     |
| -----: | -----: | ----: | ------------: | ----------: | ---------------------------- |
| -33.3% | -1 MiB | 99.9% | 3 MiB → 2 MiB |       4 → 3 | `./black/nodes.py:185 → 174` |

##### `__init__` (`./blib2to3/pytree.py:237`)

| Change |  Delta |      % |             Size | Allocations | Location                         |
| -----: | -----: | -----: | ---------------: | ----------: | -------------------------------- |
| -99.7% | -1 MiB | 100.0% | 1 MiB → 3.03 KiB |       5 → 4 | `./blib2to3/pytree.py:266 → 255` |

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

|  Change |  Delta |             % |        Size | Allocations | Location                        |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pgen2/parse.py:408` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

|  Change |  Delta |             % |        Size | Allocations | Location                        |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pgen2/parse.py:314` |

##### `normalize_trailing_prefix` (`./black/comments.py:127`)

|  Change |  Delta |             % |        Size | Allocations | Location                  |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./black/comments.py:136` |

##### `contains_uncollapsable_type_comments` (`./black/lines.py:276`)

|  Change |  Delta |             % |        Size | Allocations | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./black/lines.py:280` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

|  Change |  Delta |             % |        Size | Allocations | Location                           |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------------------------- |
| removed | -1 MiB |  50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pgen2/tokenize.py:614` |
| removed | -1 MiB |  50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pgen2/tokenize.py:972` |
|     new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `./blib2to3/pgen2/tokenize.py:694` |

##### `prefix` (`./blib2to3/pytree.py:469`)

|  Change |  Delta |             % |        Size | Allocations | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | -------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pytree.py:482` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`)

|  Change |  Delta |             % |        Size | Allocations | Location                                |
| ------: | -----: | ------------: | ----------: | ----------: | --------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `/usr/lib/python3.11/re/_parser.py:164` |

##### `hug_power_op` (`./black/trans.py:85`)

|  Change |  Delta |             % |        Size | Allocations | Location              |
| ------: | -----: | ------------: | ----------: | ----------: | --------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./black/trans.py:95` |

##### `__str__` (`./blib2to3/pytree.py:440`)

|  Change |  Delta |             % |        Size | Allocations | Location                   |
| ------: | -----: | ------------: | ----------: | ----------: | -------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `./blib2to3/pytree.py:446` |

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

##### `mark` (`./black/brackets.py:70`)

|  Change |  Delta |              % |                Size |     Allocations | Caller                           | Location                   |
| ------: | -----: | -------------: | ------------------: | --------------: | -------------------------------- | -------------------------- |
|  +19.7% | +3 MiB | 93.8% → 100.0% | 15.2 MiB → 18.2 MiB | 20,787 → 20,790 | `append`                         | `./black/lines.py:63 → 52` |
| removed | -1 MiB |    6.2% → 0.0% |         1 MiB → 0 B |           1 → 0 | `max_delimiter_priority_in_atom` | `./black/brackets.py:328`  |

##### `addtoken` (`./blib2to3/pgen2/parse.py:230`)

|     Change |  Delta |      % |             Size | Allocations | Caller         | Location                         |
| ---------: | -----: | -----: | ---------------: | ----------: | -------------- | -------------------------------- |
| +174762.7% | +2 MiB | 100.0% | 1.17 KiB → 2 MiB |       2 → 4 | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `__new__` (`./blib2to3/pytree.py:70`)

|  Change |  Delta |              % |          Size | Allocations | Caller    | Location                         |
| ------: | -----: | -------------: | ------------: | ----------: | --------- | -------------------------------- |
|  +75.0% | +3 MiB | 80.0% → 100.0% | 4 MiB → 7 MiB |       4 → 7 | `convert` | `./blib2to3/pytree.py:486 → 475` |
| removed | -1 MiB |   20.0% → 0.0% |   1 MiB → 0 B |       1 → 0 | `clone`   | `./blib2to3/pytree.py:452`       |

##### `visit_default` (`./black/linegen.py:134`)

|  Change |  Delta |              % |          Size | Allocations | Caller  | Location                     |
| ------: | -----: | -------------: | ------------: | ----------: | ------- | ---------------------------- |
| +100.0% | +1 MiB | 99.9% → 100.0% | 1 MiB → 2 MiB |       1 → 2 | `visit` | `./black/nodes.py:163 → 152` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

| Change |  Delta |      % |                Size | Allocations | Caller         | Location                         |
| -----: | -----: | -----: | ------------------: | ----------: | -------------- | -------------------------------- |
| +87.6% | +1 MiB | 100.0% | 1.14 MiB → 2.14 MiB |   196 → 197 | `prev_sibling` | `./blib2to3/pytree.py:207 → 196` |

##### `transform_line` (`./black/linegen.py:601`)

|   Change |  Delta |      % |                Size | Allocations | Caller             | Location                          |
| -------: | -----: | -----: | ------------------: | ----------: | ------------------ | --------------------------------- |
| +1338.7% | +1 MiB | 100.0% | 76.5 KiB → 1.07 MiB |       6 → 7 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |

##### `convert` (`./blib2to3/pytree.py:475`)

| Change |  Delta |             % |        Size | Allocations | Caller  | Location                              |
| -----: | -----: | ------------: | ----------: | ----------: | ------- | ------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `shift` | `./blib2to3/pgen2/parse.py:373 → 361` |

##### `__str__` (`./black/lines.py:479`)

| Change |  Delta |             % |        Size | Allocations | Caller           | Location                       |
| -----: | -----: | ------------: | ----------: | ----------: | ---------------- | ------------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `line_to_string` | `./black/lines.py:1073 → 1062` |

##### `line` (`./black/linegen.py:109`)

| Change |  Delta |             % |        Size | Allocations | Caller              | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | ------------------- | ------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `visit_simple_stmt` | `./black/linegen.py:295` |

##### `_uniq` (`/usr/lib/python3.11/re/_parser.py:444`)

| Change |  Delta |             % |        Size | Allocations | Caller   | Location                                |
| -----: | -----: | ------------: | ----------: | ----------: | -------- | --------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

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

##### `push` (`./blib2to3/pgen2/parse.py:374`)

| Change |  Delta |      % |          Size | Allocations | Caller      | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ----------- | ------------------------------------- |
| -75.0% | -3 MiB | 100.0% | 4 MiB → 1 MiB |       4 → 1 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |             % |          Size | Allocations | Caller    | Location                         |
| -----: | -----: | ------------: | ------------: | ----------: | --------- | -------------------------------- |
| -20.0% | -1 MiB | 71.4% → 80.0% | 5 MiB → 4 MiB |       5 → 4 | `changed` | `./blib2to3/pytree.py:171 → 160` |
| -50.0% | -1 MiB | 28.6% → 20.0% | 2 MiB → 1 MiB |       2 → 1 | `prefix`  | `./blib2to3/pytree.py:480 → 469` |

##### `visit` (`./black/nodes.py:152`)

|  Change |  Delta |            % |        Size | Allocations | Caller       | Location                 |
| ------: | -----: | -----------: | ----------: | ----------: | ------------ | ------------------------ |
| removed | -1 MiB | 33.3% → 0.0% | 1 MiB → 0 B |       1 → 0 | `visit_stmt` | `./black/linegen.py:199` |

##### `__init__` (`./blib2to3/pytree.py:237`)

|  Change |  Delta |            % |        Size | Allocations | Caller                | Location               |
| ------: | -----: | -----------: | ----------: | ----------: | --------------------- | ---------------------- |
| removed | -1 MiB | 99.7% → 0.0% | 1 MiB → 0 B |       1 → 0 | `wrap_in_parentheses` | `./black/nodes.py:935` |

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

|  Change |  Delta |             % |        Size | Allocations | Caller      | Location                              |
| ------: | -----: | ------------: | ----------: | ----------: | ----------- | ------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

|  Change |  Delta |             % |        Size | Allocations | Caller     | Location                              |
| ------: | -----: | ------------: | ----------: | ----------: | ---------- | ------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `addtoken` | `./blib2to3/pgen2/parse.py:242 → 230` |

##### `normalize_trailing_prefix` (`./black/comments.py:127`)

|  Change |  Delta |             % |        Size | Allocations | Caller              | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ------------------- | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `generate_comments` | `./black/comments.py:52` |

##### `contains_uncollapsable_type_comments` (`./black/lines.py:276`)

|  Change |  Delta |             % |        Size | Allocations | Caller           | Location                 |
| ------: | -----: | ------------: | ----------: | ----------: | ---------------- | ------------------------ |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `transform_line` | `./black/linegen.py:601` |

##### `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`)

| Change |  Delta |      % |          Size | Allocations | Caller     | Location                        |
| -----: | -----: | -----: | ------------: | ----------: | ---------- | ------------------------------- |
| -50.0% | -1 MiB | 100.0% | 2 MiB → 1 MiB |       2 → 1 | `__next__` | `./blib2to3/pgen2/driver.py:80` |

##### `prefix` (`./blib2to3/pytree.py:469`)

|  Change |  Delta |             % |        Size | Allocations | Caller   | Location              |
| ------: | -----: | ------------: | ----------: | ----------: | -------- | --------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `append` | `./black/lines.py:63` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`)

|  Change |  Delta |             % |        Size | Allocations | Caller   | Location                                |
| ------: | -----: | ------------: | ----------: | ----------: | -------- | --------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `hug_power_op` (`./black/trans.py:85`)

|  Change |  Delta |             % |        Size | Allocations | Caller            | Location                  |
| ------: | -----: | ------------: | ----------: | ----------: | ----------------- | ------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `run_transformer` | `./black/linegen.py:1755` |

##### `__str__` (`./blib2to3/pytree.py:440`)

|  Change |  Delta |             % |        Size | Allocations | Caller    | Location               |
| ------: | -----: | ------------: | ----------: | ----------: | --------- | ---------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `__str__` | `./black/lines.py:490` |

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

|  Change |      Delta |             % |                Size |     Allocations | Function                          | Location                                |
| ------: | ---------: | ------------: | ------------------: | --------------: | --------------------------------- | --------------------------------------- |
|  +99.9% |     +4 MiB |  6.8% → 14.3% |       4 MiB → 8 MiB |          8 → 12 | `convert`                         | `./blib2to3/pytree.py:486 → 475`        |
|  +17.4% |     +3 MiB | 29.3% → 36.3% | 17.3 MiB → 20.3 MiB | 20,882 → 20,885 | `append`                          | `./black/lines.py:63 → 52`              |
|  +15.4% |     +3 MiB | 33.1% → 40.3% | 19.5 MiB → 22.5 MiB | 21,061 → 21,064 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`       |
|  +19.3% |     +3 MiB | 26.3% → 33.1% | 15.5 MiB → 18.5 MiB | 21,054 → 21,057 | `assert_stable`                   | `./black/__init__.py:1557 → 1543`       |
|  +12.3% |     +2 MiB | 27.5% → 32.6% | 16.2 MiB → 18.2 MiB | 20,788 → 20,790 | `mark`                            | `./black/brackets.py:70`                |
| +199.4% |     +2 MiB |   1.7% → 5.4% |       1 MiB → 3 MiB |           5 → 7 | `pop`                             | `./blib2to3/pgen2/parse.py:398 → 386`   |
|  +40.0% |     +2 MiB |  8.5% → 12.5% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `./blib2to3/pytree.py:81 → 70`          |
|     new |     +2 MiB |   0.0% → 3.6% |         0 B → 2 MiB |           0 → 2 | `line`                            | `./black/linegen.py:109`                |
|  +87.6% |     +1 MiB |   1.9% → 3.8% | 1.14 MiB → 2.14 MiB |       196 → 197 | `update_sibling_maps`             | `./blib2to3/pytree.py:369 → 358`        |
|  +87.6% |     +1 MiB |   1.9% → 3.8% | 1.14 MiB → 2.14 MiB |       196 → 197 | `prev_sibling`                    | `./blib2to3/pytree.py:207 → 196`        |
|  +94.8% |     +1 MiB |   1.8% → 3.7% | 1.05 MiB → 2.05 MiB |         90 → 91 | `whitespace`                      | `./black/nodes.py:194 → 183`            |
|  +10.0% |     +1 MiB | 17.0% → 19.7% |     10 MiB → 11 MiB |         17 → 18 | `addtoken`                        | `./blib2to3/pgen2/parse.py:242 → 230`   |
|  +25.0% |     +1 MiB |   6.8% → 8.9% |       4 MiB → 5 MiB |           4 → 5 | `shift`                           | `./blib2to3/pgen2/parse.py:373 → 361`   |
|     new |     +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `_uniq`                           | `/usr/lib/python3.11/re/_parser.py:444` |
|     new |     +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `visit_INDENT`                    | `./black/linegen.py:179`                |
|  +22.0% | +1.484 KiB |         <0.1% | 6.73 KiB → 8.22 KiB |           8 → 9 | `__setattr__`                     | `/usr/lib/python3.11/enum.py:831`       |
|   +2.2% |     +837 B |          0.1% | 36.9 KiB → 37.8 KiB |              41 | `<module>`                        | `./black/cache.py:1`                    |
|   +0.1% |     +794 B |   2.1% → 2.2% |            1.22 MiB |       235 → 236 | `<module>`                        | `./black/files.py:1`                    |
|   +2.3% |     +752 B |          0.1% | 32.5 KiB → 33.2 KiB |              38 | `__new__`                         | `/usr/lib/python3.11/enum.py:488`       |
|   +2.9% |     +752 B |         <0.1% | 25.2 KiB → 25.9 KiB |              28 | `<module>`                        | `./black/mode.py:1`                     |

##### Ours

|  Change |  Delta |             % |                Size |     Allocations | Function                          | Location                              |
| ------: | -----: | ------------: | ------------------: | --------------: | --------------------------------- | ------------------------------------- |
|  +99.9% | +4 MiB |  6.8% → 14.3% |       4 MiB → 8 MiB |          8 → 12 | `convert`                         | `./blib2to3/pytree.py:486 → 475`      |
|  +17.4% | +3 MiB | 29.3% → 36.3% | 17.3 MiB → 20.3 MiB | 20,882 → 20,885 | `append`                          | `./black/lines.py:63 → 52`            |
|  +15.4% | +3 MiB | 33.1% → 40.3% | 19.5 MiB → 22.5 MiB | 21,061 → 21,064 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042`     |
|  +19.3% | +3 MiB | 26.3% → 33.1% | 15.5 MiB → 18.5 MiB | 21,054 → 21,057 | `assert_stable`                   | `./black/__init__.py:1557 → 1543`     |
|  +12.3% | +2 MiB | 27.5% → 32.6% | 16.2 MiB → 18.2 MiB | 20,788 → 20,790 | `mark`                            | `./black/brackets.py:70`              |
| +199.4% | +2 MiB |   1.7% → 5.4% |       1 MiB → 3 MiB |           5 → 7 | `pop`                             | `./blib2to3/pgen2/parse.py:398 → 386` |
|  +40.0% | +2 MiB |  8.5% → 12.5% |       5 MiB → 7 MiB |           5 → 7 | `__new__`                         | `./blib2to3/pytree.py:81 → 70`        |
|     new | +2 MiB |   0.0% → 3.6% |         0 B → 2 MiB |           0 → 2 | `line`                            | `./black/linegen.py:109`              |
|  +87.6% | +1 MiB |   1.9% → 3.8% | 1.14 MiB → 2.14 MiB |       196 → 197 | `update_sibling_maps`             | `./blib2to3/pytree.py:369 → 358`      |
|  +87.6% | +1 MiB |   1.9% → 3.8% | 1.14 MiB → 2.14 MiB |       196 → 197 | `prev_sibling`                    | `./blib2to3/pytree.py:207 → 196`      |
|  +94.8% | +1 MiB |   1.8% → 3.7% | 1.05 MiB → 2.05 MiB |         90 → 91 | `whitespace`                      | `./black/nodes.py:194 → 183`          |
|  +10.0% | +1 MiB | 17.0% → 19.7% |     10 MiB → 11 MiB |         17 → 18 | `addtoken`                        | `./blib2to3/pgen2/parse.py:242 → 230` |
|  +25.0% | +1 MiB |   6.8% → 8.9% |       4 MiB → 5 MiB |           4 → 5 | `shift`                           | `./blib2to3/pgen2/parse.py:373 → 361` |
|     new | +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `visit_INDENT`                    | `./black/linegen.py:179`              |
|   +2.2% | +837 B |          0.1% | 36.9 KiB → 37.8 KiB |              41 | `<module>`                        | `./black/cache.py:1`                  |
|   +0.1% | +794 B |   2.1% → 2.2% |            1.22 MiB |       235 → 236 | `<module>`                        | `./black/files.py:1`                  |
|   +2.9% | +752 B |         <0.1% | 25.2 KiB → 25.9 KiB |              28 | `<module>`                        | `./black/mode.py:1`                   |
|     ~0% | +126 B |   2.2% → 2.3% |             1.3 MiB |             269 | `<module>`                        | `./black/comments.py:1`               |
|   +5.5% |  +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `get_cache_file`                  | `./black/cache.py:50`                 |
|   +5.5% |  +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |               1 | `read`                            | `./black/cache.py:60`                 |

##### Standard library

| Change |      Delta |           % |                Size | Allocations | Function      | Location                                |
| -----: | ---------: | ----------: | ------------------: | ----------: | ------------- | --------------------------------------- |
|    new |     +1 MiB | 0.0% → 1.8% |         0 B → 1 MiB |       0 → 1 | `_uniq`       | `/usr/lib/python3.11/re/_parser.py:444` |
| +22.0% | +1.484 KiB |       <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__` | `/usr/lib/python3.11/enum.py:831`       |
|  +2.3% |     +752 B |        0.1% | 32.5 KiB → 33.2 KiB |          38 | `__new__`     | `/usr/lib/python3.11/enum.py:488`       |

#### Improvements

Functions with the largest decrease in bytes never freed within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |      Delta |             % |                Size |     Allocations | Function                    | Location                                                       |
| -----: | ---------: | ------------: | ------------------: | --------------: | --------------------------- | -------------------------------------------------------------- |
| -17.1% |     -6 MiB | 59.5% → 52.0% | 35.1 MiB → 29.1 MiB |         93 → 87 | `format_str`                | `./black/__init__.py:1189 → 1168`                              |
| -44.4% |     -4 MiB |  15.3% → 8.9% |       9 MiB → 5 MiB |           9 → 5 | `generate_comments`         | `./black/comments.py:52`                                       |
| -57.1% |     -4 MiB |  11.9% → 5.4% |       7 MiB → 3 MiB |           7 → 3 | `normalize_trailing_prefix` | `./black/comments.py:127`                                      |
| -16.8% | -3.999 MiB | 40.4% → 35.5% | 23.8 MiB → 19.8 MiB | 13,402 → 13,398 | `visit_simple_stmt`         | `./black/linegen.py:295`                                       |
|  -5.1% | -3.001 MiB |        100.0% | 58.9 MiB → 55.9 MiB | 22,505 → 22,501 | `run_module`                | `<frozen runpy>:201`                                           |
|  -5.1% | -3.001 MiB |        100.0% | 58.9 MiB → 55.9 MiB | 22,506 → 22,502 | `_run_tracker`              | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |
|  -5.9% |     -3 MiB | 85.9% → 85.1% | 50.6 MiB → 47.6 MiB | 21,146 → 21,143 | `_format_str_once`          | `./black/__init__.py:1236 → 1215`                              |
|  -5.5% |     -3 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,154 → 21,151 | `format_file_contents`      | `./black/__init__.py:1054 → 1059`                              |
|  -5.5% |     -3 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,155 → 21,152 | `format_file_in_place`      | `./black/__init__.py:917 → 922`                                |
| -16.8% |     -3 MiB | 30.4% → 26.6% | 17.9 MiB → 14.9 MiB | 10,809 → 10,806 | `visit_power`               | `./black/linegen.py:341`                                       |
|  -9.2% |     -3 MiB | 55.5% → 53.2% | 32.7 MiB → 29.7 MiB | 20,144 → 20,141 | `visit_suite`               | `./black/linegen.py:288`                                       |
|  -9.1% |     -3 MiB | 55.7% → 53.3% | 32.8 MiB → 29.8 MiB | 20,270 → 20,267 | `visit_funcdef`             | `./black/linegen.py:254`                                       |
| -75.0% |     -3 MiB |   6.8% → 1.8% |       4 MiB → 1 MiB |           4 → 1 | `push`                      | `./blib2to3/pgen2/parse.py:386 → 374`                          |
| -37.5% |     -3 MiB |  13.6% → 8.9% |       8 MiB → 5 MiB |           8 → 5 | `prefix`                    | `./blib2to3/pytree.py:480 → 469`                               |
|  -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,168 → 21,165 | `main`                      | `./black/__init__.py:244 → 240`                                |
|  -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,162 → 21,159 | `reformat_one`              | `./black/__init__.py:860 → 865`                                |
|  -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,193 → 21,190 | `main`                      | `/venv/lib/python3.11/site-packages/click/core.py:1484`        |
|  -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `__call__`                  | `/venv/lib/python3.11/site-packages/click/core.py:1629`        |
|  -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `patched_main`              | `./black/__init__.py:1594 → 1580`                              |
|  -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `<module>`                  | `./black/__main__.py:1`                                        |

##### Ours

|  Change |      Delta |             % |                Size |     Allocations | Function                    | Location                              |
| ------: | ---------: | ------------: | ------------------: | --------------: | --------------------------- | ------------------------------------- |
|  -17.1% |     -6 MiB | 59.5% → 52.0% | 35.1 MiB → 29.1 MiB |         93 → 87 | `format_str`                | `./black/__init__.py:1189 → 1168`     |
|  -44.4% |     -4 MiB |  15.3% → 8.9% |       9 MiB → 5 MiB |           9 → 5 | `generate_comments`         | `./black/comments.py:52`              |
|  -57.1% |     -4 MiB |  11.9% → 5.4% |       7 MiB → 3 MiB |           7 → 3 | `normalize_trailing_prefix` | `./black/comments.py:127`             |
|  -16.8% | -3.999 MiB | 40.4% → 35.5% | 23.8 MiB → 19.8 MiB | 13,402 → 13,398 | `visit_simple_stmt`         | `./black/linegen.py:295`              |
|   -5.9% |     -3 MiB | 85.9% → 85.1% | 50.6 MiB → 47.6 MiB | 21,146 → 21,143 | `_format_str_once`          | `./black/__init__.py:1236 → 1215`     |
|   -5.5% |     -3 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,154 → 21,151 | `format_file_contents`      | `./black/__init__.py:1054 → 1059`     |
|   -5.5% |     -3 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,155 → 21,152 | `format_file_in_place`      | `./black/__init__.py:917 → 922`       |
|  -16.8% |     -3 MiB | 30.4% → 26.6% | 17.9 MiB → 14.9 MiB | 10,809 → 10,806 | `visit_power`               | `./black/linegen.py:341`              |
|   -9.2% |     -3 MiB | 55.5% → 53.2% | 32.7 MiB → 29.7 MiB | 20,144 → 20,141 | `visit_suite`               | `./black/linegen.py:288`              |
|   -9.1% |     -3 MiB | 55.7% → 53.3% | 32.8 MiB → 29.8 MiB | 20,270 → 20,267 | `visit_funcdef`             | `./black/linegen.py:254`              |
|  -75.0% |     -3 MiB |   6.8% → 1.8% |       4 MiB → 1 MiB |           4 → 1 | `push`                      | `./blib2to3/pgen2/parse.py:386 → 374` |
|  -37.5% |     -3 MiB |  13.6% → 8.9% |       8 MiB → 5 MiB |           8 → 5 | `prefix`                    | `./blib2to3/pytree.py:480 → 469`      |
|   -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,168 → 21,165 | `main`                      | `./black/__init__.py:244 → 240`       |
|   -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,162 → 21,159 | `reformat_one`              | `./black/__init__.py:860 → 865`       |
|   -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `patched_main`              | `./black/__init__.py:1594 → 1580`     |
|   -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `<module>`                  | `./black/__main__.py:1`               |
|  -39.3% |     -2 MiB |   8.6% → 5.5% | 5.08 MiB → 3.08 MiB |         20 → 18 | `transform_line`            | `./black/linegen.py:601`              |
|  -28.6% |     -2 MiB |  11.9% → 8.9% |       7 MiB → 5 MiB |           7 → 5 | `changed`                   | `./blib2to3/pytree.py:171 → 160`      |
| removed |     -2 MiB |   3.4% → 0.0% |         2 MiB → 0 B |           2 → 0 | `hug_power_op`              | `./black/trans.py:85`                 |
|   -6.0% | -1.999 MiB | 56.3% → 55.7% | 33.2 MiB → 31.2 MiB | 20,711 → 20,709 | `visit_stmt`                | `./black/linegen.py:199`              |

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

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `convert` (`./blib2to3/pytree.py:475`)

|     Change |  Delta |             % |             Size | Allocations | Caller  | Location                              |
| ---------: | -----: | ------------: | ---------------: | ----------: | ------- | ------------------------------------- |
| +101344.3% | +3 MiB |  0.1% → 37.5% | 3.03 KiB → 3 MiB |       4 → 7 | `pop`   | `./blib2to3/pgen2/parse.py:398 → 386` |
|     +25.0% | +1 MiB | 99.9% → 62.5% |    4 MiB → 5 MiB |       4 → 5 | `shift` | `./blib2to3/pgen2/parse.py:373 → 361` |

##### `append` (`./black/lines.py:52`)

| Change |  Delta |              % |                Size |     Allocations | Caller                     | Location                  |
| -----: | -----: | -------------: | ------------------: | --------------: | -------------------------- | ------------------------- |
| +11.6% | +2 MiB | 100.0% → 95.1% | 17.3 MiB → 19.3 MiB | 20,882 → 20,884 | `visit_default`            | `./black/linegen.py:134`  |
|    new | +1 MiB |    0.0% → 4.9% |         0 B → 1 MiB |           0 → 1 | `bracket_split_build_line` | `./black/linegen.py:1123` |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

| Change |  Delta |      % |                Size |     Allocations | Caller                 | Location                          |
| -----: | -----: | -----: | ------------------: | --------------: | ---------------------- | --------------------------------- |
| +15.4% | +3 MiB | 100.0% | 19.5 MiB → 22.5 MiB | 21,061 → 21,064 | `format_file_contents` | `./black/__init__.py:1054 → 1059` |

##### `assert_stable` (`./black/__init__.py:1543`)

| Change |  Delta |      % |                Size |     Allocations | Caller                            | Location                          |
| -----: | -----: | -----: | ------------------: | --------------: | --------------------------------- | --------------------------------- |
| +19.3% | +3 MiB | 100.0% | 15.5 MiB → 18.5 MiB | 21,054 → 21,057 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042` |

##### `mark` (`./black/brackets.py:70`)

|  Change |  Delta |              % |                Size |     Allocations | Caller                           | Location                   |
| ------: | -----: | -------------: | ------------------: | --------------: | -------------------------------- | -------------------------- |
|  +19.7% | +3 MiB | 93.8% → 100.0% | 15.2 MiB → 18.2 MiB | 20,787 → 20,790 | `append`                         | `./black/lines.py:63 → 52` |
| removed | -1 MiB |    6.2% → 0.0% |         1 MiB → 0 B |           1 → 0 | `max_delimiter_priority_in_atom` | `./black/brackets.py:328`  |

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

|  Change |  Delta |      % |          Size | Allocations | Caller      | Location                              |
| ------: | -----: | -----: | ------------: | ----------: | ----------- | ------------------------------------- |
| +199.4% | +2 MiB | 100.0% | 1 MiB → 3 MiB |       5 → 7 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `__new__` (`./blib2to3/pytree.py:70`)

|  Change |  Delta |              % |          Size | Allocations | Caller    | Location                         |
| ------: | -----: | -------------: | ------------: | ----------: | --------- | -------------------------------- |
|  +75.0% | +3 MiB | 80.0% → 100.0% | 4 MiB → 7 MiB |       4 → 7 | `convert` | `./blib2to3/pytree.py:486 → 475` |
| removed | -1 MiB |   20.0% → 0.0% |   1 MiB → 0 B |       1 → 0 | `clone`   | `./blib2to3/pytree.py:452`       |

##### `line` (`./black/linegen.py:109`)

| Change |  Delta |            % |        Size | Allocations | Caller              | Location                 |
| -----: | -----: | -----------: | ----------: | ----------: | ------------------- | ------------------------ |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `visit_simple_stmt` | `./black/linegen.py:295` |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `visit_INDENT`      | `./black/linegen.py:179` |

##### `update_sibling_maps` (`./blib2to3/pytree.py:358`)

| Change |  Delta |      % |                Size | Allocations | Caller         | Location                         |
| -----: | -----: | -----: | ------------------: | ----------: | -------------- | -------------------------------- |
| +87.6% | +1 MiB | 100.0% | 1.14 MiB → 2.14 MiB |   196 → 197 | `prev_sibling` | `./blib2to3/pytree.py:207 → 196` |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

|    Change |  Delta |            % |                Size | Allocations | Caller           | Location                     |
| --------: | -----: | -----------: | ------------------: | ----------: | ---------------- | ---------------------------- |
| +11353.1% | +2 MiB | 1.5% → 94.2% |   18 KiB → 2.02 MiB |     23 → 25 | `whitespace`     | `./black/nodes.py:194 → 183` |
|    -96.5% | -1 MiB | 90.8% → 1.7% | 1.04 MiB → 37.7 KiB |     67 → 66 | `preceding_leaf` | `./black/nodes.py:441 → 436` |

##### `whitespace` (`./black/nodes.py:183`)

| Change |  Delta |      % |                Size | Allocations | Caller   | Location                   |
| -----: | -----: | -----: | ------------------: | ----------: | -------- | -------------------------- |
| +94.8% | +1 MiB | 100.0% | 1.05 MiB → 2.05 MiB |     90 → 91 | `append` | `./black/lines.py:63 → 52` |

##### `addtoken` (`./blib2to3/pgen2/parse.py:230`)

| Change |  Delta |      % |            Size | Allocations | Caller         | Location                         |
| -----: | -----: | -----: | --------------: | ----------: | -------------- | -------------------------------- |
| +10.0% | +1 MiB | 100.0% | 10 MiB → 11 MiB |     17 → 18 | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

| Change |  Delta |      % |          Size | Allocations | Caller      | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ----------- | ------------------------------------- |
| +25.0% | +1 MiB | 100.0% | 4 MiB → 5 MiB |       4 → 5 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `_uniq` (`/usr/lib/python3.11/re/_parser.py:444`)

| Change |  Delta |             % |        Size | Allocations | Caller   | Location                                |
| -----: | -----: | ------------: | ----------: | ----------: | -------- | --------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `visit_INDENT` (`./black/linegen.py:179`)

| Change |  Delta |             % |        Size | Allocations | Caller  | Location               |
| -----: | -----: | ------------: | ----------: | ----------: | ------- | ---------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `visit` | `./black/nodes.py:152` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

| Change |      Delta |             % |                Size | Allocations | Caller    | Location                          |
| -----: | ---------: | ------------: | ------------------: | ----------: | --------- | --------------------------------- |
| +66.0% | +1.484 KiB | 33.4% → 45.4% | 2.25 KiB → 3.73 KiB |       3 → 4 | `__new__` | `/usr/lib/python3.11/enum.py:488` |

##### `<module>` (`./black/cache.py:1`)

| Change |  Delta |      % |                Size | Allocations | Caller                      | Location                            |
| -----: | -----: | -----: | ------------------: | ----------: | --------------------------- | ----------------------------------- |
|  +2.2% | +837 B | 100.0% | 36.9 KiB → 37.8 KiB |          41 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`./black/files.py:1`)

| Change |  Delta |      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -----: | -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
|  +0.1% | +794 B | 100.0% | 1.22 MiB |   235 → 236 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

| Change |  Delta |             % |                Size | Allocations | Caller     | Location            |
| -----: | -----: | ------------: | ------------------: | ----------: | ---------- | ------------------- |
|  +6.8% | +752 B | 33.2% → 34.7% | 10.8 KiB → 11.5 KiB |          13 | `<module>` | `./black/mode.py:1` |

##### `<module>` (`./black/mode.py:1`)

| Change |  Delta |      % |                Size | Allocations | Caller                      | Location                            |
| -----: | -----: | -----: | ------------------: | ----------: | --------------------------- | ----------------------------------- |
|  +2.9% | +752 B | 100.0% | 25.2 KiB → 25.9 KiB |          28 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`./black/comments.py:1`)

| Change |  Delta |      % |    Size | Allocations | Caller                      | Location                            |
| -----: | -----: | -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
|    ~0% | +126 B | 100.0% | 1.3 MiB |         269 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `get_cache_file` (`./black/cache.py:50`)

| Change | Delta |      % |                Size | Allocations | Caller | Location              |
| -----: | ----: | -----: | ------------------: | ----------: | ------ | --------------------- |
|  +5.5% | +64 B | 100.0% | 1.13 KiB → 1.19 KiB |           1 | `read` | `./black/cache.py:60` |

##### `read` (`./black/cache.py:60`)

| Change | Delta |      % |                Size | Allocations | Caller         | Location                        |
| -----: | ----: | -----: | ------------------: | ----------: | -------------- | ------------------------------- |
|  +5.5% | +64 B | 100.0% | 1.13 KiB → 1.19 KiB |           1 | `reformat_one` | `./black/__init__.py:860 → 865` |

##### `format_str` (`./black/__init__.py:1168`)

| Change |  Delta |      % |                Size | Allocations | Caller                 | Location                          |
| -----: | -----: | -----: | ------------------: | ----------: | ---------------------- | --------------------------------- |
| -17.1% | -6 MiB | 100.0% | 35.1 MiB → 29.1 MiB |     93 → 87 | `format_file_contents` | `./black/__init__.py:1054 → 1059` |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |      % |          Size | Allocations | Caller          | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | --------------- | ------------------------ |
| -44.4% | -4 MiB | 100.0% | 9 MiB → 5 MiB |       9 → 5 | `visit_default` | `./black/linegen.py:134` |

##### `normalize_trailing_prefix` (`./black/comments.py:127`)

| Change |  Delta |      % |          Size | Allocations | Caller              | Location                 |
| -----: | -----: | -----: | ------------: | ----------: | ------------------- | ------------------------ |
| -57.1% | -4 MiB | 100.0% | 7 MiB → 3 MiB |       7 → 3 | `generate_comments` | `./black/comments.py:52` |

##### `visit_simple_stmt` (`./black/linegen.py:295`)

| Change |      Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | ---------: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
| -16.8% | -3.999 MiB | 100.0% | 23.8 MiB → 19.8 MiB | 13,402 → 13,398 | `visit` | `./black/nodes.py:163 → 152` |

##### `run_module` (`<frozen runpy>:201`)

| Change |      Delta |      % |                Size |     Allocations | Caller         | Location                                                       |
| -----: | ---------: | -----: | ------------------: | --------------: | -------------- | -------------------------------------------------------------- |
|  -5.1% | -3.001 MiB | 100.0% | 58.9 MiB → 55.9 MiB | 22,505 → 22,501 | `_run_tracker` | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |

##### `_format_str_once` (`./black/__init__.py:1215`)

| Change |  Delta |             % |                Size |     Allocations | Caller          | Location                          |
| -----: | -----: | ------------: | ------------------: | --------------: | --------------- | --------------------------------- |
| -17.1% | -6 MiB | 69.3% → 61.1% | 35.1 MiB → 29.1 MiB |         92 → 86 | `format_str`    | `./black/__init__.py:1189 → 1168` |
| +19.3% | +3 MiB | 30.7% → 38.9% | 15.5 MiB → 18.5 MiB | 21,054 → 21,057 | `assert_stable` | `./black/__init__.py:1557 → 1543` |

##### `format_file_contents` (`./black/__init__.py:1059`)

| Change |  Delta |      % |                Size |     Allocations | Caller                 | Location                        |
| -----: | -----: | -----: | ------------------: | --------------: | ---------------------- | ------------------------------- |
|  -5.5% | -3 MiB | 100.0% | 54.6 MiB → 51.6 MiB | 21,154 → 21,151 | `format_file_in_place` | `./black/__init__.py:917 → 922` |

##### `format_file_in_place` (`./black/__init__.py:922`)

| Change |  Delta |      % |                Size |     Allocations | Caller         | Location                        |
| -----: | -----: | -----: | ------------------: | --------------: | -------------- | ------------------------------- |
|  -5.5% | -3 MiB | 100.0% | 54.6 MiB → 51.6 MiB | 21,155 → 21,152 | `reformat_one` | `./black/__init__.py:860 → 865` |

##### `visit_power` (`./black/linegen.py:341`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
| -16.8% | -3 MiB | 100.0% | 17.9 MiB → 14.9 MiB | 10,809 → 10,806 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_suite` (`./black/linegen.py:288`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  -9.2% | -3 MiB | 100.0% | 32.7 MiB → 29.7 MiB | 20,144 → 20,141 | `visit` | `./black/nodes.py:163 → 152` |

##### `visit_funcdef` (`./black/linegen.py:254`)

| Change |  Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  -9.1% | -3 MiB | 100.0% | 32.8 MiB → 29.8 MiB | 20,270 → 20,267 | `visit` | `./black/nodes.py:163 → 152` |

##### `push` (`./blib2to3/pgen2/parse.py:374`)

| Change |  Delta |      % |          Size | Allocations | Caller      | Location                              |
| -----: | -----: | -----: | ------------: | ----------: | ----------- | ------------------------------------- |
| -75.0% | -3 MiB | 100.0% | 4 MiB → 1 MiB |       4 → 1 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `prefix` (`./blib2to3/pytree.py:469`)

|  Change |  Delta |             % |          Size | Allocations | Caller                      | Location                  |
| ------: | -----: | ------------: | ------------: | ----------: | --------------------------- | ------------------------- |
|  -50.0% | -3 MiB | 75.0% → 60.0% | 6 MiB → 3 MiB |       6 → 3 | `normalize_trailing_prefix` | `./black/comments.py:127` |
| removed | -1 MiB |  12.5% → 0.0% |   1 MiB → 0 B |       1 → 0 | `append`                    | `./black/lines.py:63`     |
|     new | +1 MiB |  0.0% → 20.0% |   0 B → 1 MiB |       0 → 1 | `wrap_in_parentheses`       | `./black/nodes.py:930`    |

##### `main` (`./black/__init__.py:240`)

| Change |      Delta |      % |                Size |     Allocations | Caller     | Location                                                    |
| -----: | ---------: | -----: | ------------------: | --------------: | ---------- | ----------------------------------------------------------- |
|  -5.5% | -2.999 MiB | 100.0% | 54.6 MiB → 51.6 MiB | 21,168 → 21,165 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |

##### `reformat_one` (`./black/__init__.py:865`)

| Change |      Delta |      % |                Size |     Allocations | Caller | Location                        |
| -----: | ---------: | -----: | ------------------: | --------------: | ------ | ------------------------------- |
|  -5.5% | -2.999 MiB | 100.0% | 54.6 MiB → 51.6 MiB | 21,162 → 21,159 | `main` | `./black/__init__.py:244 → 240` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py:1484`)

| Change |      Delta |      % |                Size |     Allocations | Caller     | Location                                                |
| -----: | ---------: | -----: | ------------------: | --------------: | ---------- | ------------------------------------------------------- |
|  -5.5% | -2.999 MiB | 100.0% | 54.6 MiB → 51.6 MiB | 21,193 → 21,190 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1629` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1629`)

| Change |      Delta |      % |                Size |     Allocations | Caller         | Location                          |
| -----: | ---------: | -----: | ------------------: | --------------: | -------------- | --------------------------------- |
|  -5.5% | -2.999 MiB | 100.0% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `patched_main` | `./black/__init__.py:1594 → 1580` |

##### `patched_main` (`./black/__init__.py:1580`)

| Change |      Delta |      % |                Size |     Allocations | Caller     | Location                |
| -----: | ---------: | -----: | ------------------: | --------------: | ---------- | ----------------------- |
|  -5.5% | -2.999 MiB | 100.0% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `<module>` | `./black/__main__.py:1` |

##### `<module>` (`./black/__main__.py:1`)

| Change |      Delta |      % |                Size |     Allocations | Caller      | Location            |
| -----: | ---------: | -----: | ------------------: | --------------: | ----------- | ------------------- |
|  -5.5% | -2.999 MiB | 100.0% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `_run_code` | `<frozen runpy>:65` |

##### `transform_line` (`./black/linegen.py:601`)

| Change |  Delta |      % |                Size | Allocations | Caller             | Location                          |
| -----: | -----: | -----: | ------------------: | ----------: | ------------------ | --------------------------------- |
| -39.3% | -2 MiB | 100.0% | 5.08 MiB → 3.08 MiB |     20 → 18 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |             % |          Size | Allocations | Caller    | Location                         |
| -----: | -----: | ------------: | ------------: | ----------: | --------- | -------------------------------- |
| -28.6% | -2 MiB |        100.0% | 7 MiB → 5 MiB |       7 → 5 | `prefix`  | `./blib2to3/pytree.py:480 → 469` |
| -20.0% | -1 MiB | 71.4% → 80.0% | 5 MiB → 4 MiB |       5 → 4 | `changed` | `./blib2to3/pytree.py:171 → 160` |

##### `hug_power_op` (`./black/trans.py:85`)

|  Change |  Delta |            % |        Size | Allocations | Caller                              | Location                  |
| ------: | -----: | -----------: | ----------: | ----------: | ----------------------------------- | ------------------------- |
| removed | -1 MiB | 50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `run_transformer`                   | `./black/linegen.py:1755` |
| removed | -1 MiB | 50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_hugging_power_ops_line_to_string` | `./black/linegen.py:590`  |

##### `visit_stmt` (`./black/linegen.py:199`)

| Change |      Delta |      % |                Size |     Allocations | Caller  | Location                     |
| -----: | ---------: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  -6.0% | -1.999 MiB | 100.0% | 33.2 MiB → 31.2 MiB | 20,711 → 20,709 | `visit` | `./black/nodes.py:163 → 152` |

##### `_run_code` (`<frozen runpy>:65`)

| Change |      Delta |      % |                Size |     Allocations | Caller             | Location            |
| -----: | ---------: | -----: | ------------------: | --------------: | ------------------ | ------------------- |
|  -5.5% | -2.999 MiB | 100.0% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `_run_module_code` | `<frozen runpy>:91` |

##### `_run_module_code` (`<frozen runpy>:91`)

| Change |      Delta |      % |                Size |     Allocations | Caller       | Location             |
| -----: | ---------: | -----: | ------------------: | --------------: | ------------ | -------------------- |
|  -5.5% | -2.999 MiB | 100.0% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `run_module` | `<frozen runpy>:201` |

##### `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`)

|  Change |  Delta |             % |        Size | Allocations | Caller   | Location                                |
| ------: | -----: | ------------: | ----------: | ----------: | -------- | --------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `_parse` | `/usr/lib/python3.11/re/_parser.py:507` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

| Change |      Delta |      % |     Size |   Allocations | Caller           | Location                            |
| -----: | ---------: | -----: | -------: | ------------: | ---------------- | ----------------------------------- |
|    ~0% | -1.918 KiB | 100.0% | 4.28 MiB | 1,298 → 1,297 | `_load_unlocked` | `<frozen importlib._bootstrap>:666` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

| Change |      Delta |      % |     Size |   Allocations | Caller                    | Location                             |
| -----: | ---------: | -----: | -------: | ------------: | ------------------------- | ------------------------------------ |
|    ~0% | -1.918 KiB | 100.0% | 4.28 MiB | 1,300 → 1,299 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

| Change |      Delta |      % |     Size |   Allocations | Caller           | Location                             |
| -----: | ---------: | -----: | -------: | ------------: | ---------------- | ------------------------------------ |
|    ~0% | -1.918 KiB | 100.0% | 4.28 MiB | 1,301 → 1,300 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

| Change |      Delta |      % |                Size |   Allocations | Caller                | Location                |
| -----: | ---------: | -----: | ------------------: | ------------: | --------------------- | ----------------------- |
|    ~0% | -1.918 KiB | 100.0% |            4.28 MiB | 1,303 → 1,302 | `_get_module_details` | `<frozen runpy>:105`    |
|  -1.3% | -1.703 KiB |   3.0% |   133 KiB → 131 KiB |           131 | `<module>`            | `./black/linegen.py:1`  |
|    ~0% |  -1.46 KiB |  97.9% |            4.19 MiB |         1,223 | `<module>`            | `./black/__init__.py:1` |
|  +2.8% |     +837 B |   0.7% | 28.9 KiB → 29.7 KiB |            33 | `<module>`            | `./black/cache.py:1`    |
|  +0.1% |     +794 B |  28.5% |            1.22 MiB |     234 → 235 | `<module>`            | `./black/files.py:1`    |

##### `_get_module_details` (`<frozen runpy>:105`)

| Change |      Delta |      % |     Size |   Allocations | Caller                | Location             |
| -----: | ---------: | -----: | -------: | ------------: | --------------------- | -------------------- |
|    ~0% | -1.918 KiB |  99.9% | 4.28 MiB | 1,303 → 1,302 | `_get_module_details` | `<frozen runpy>:105` |
|    ~0% | -1.918 KiB | 100.0% | 4.29 MiB | 1,310 → 1,309 | `run_module`          | `<frozen runpy>:201` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |     Delta |      % |     Size | Allocations | Caller             | Location                                     |
| -----: | --------: | -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
|    ~0% | -1.46 KiB | 100.0% | 4.25 MiB |       1,268 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|    ~0% |      -8 B |  30.7% | 1.31 MiB |         319 | `_handle_fromlist` | `<frozen importlib._bootstrap>:1209`         |

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
|    ~0% |  -8 B | 85.1% | 1.11 MiB |         106 | `<module>` | `./blib2to3/pygram.py:1` |
|    ~0% |  -8 B | 85.8% | 1.12 MiB |         115 | `<module>` | `./black/nodes.py:1`     |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `convert` (`./blib2to3/pytree.py:475`)

| Change |  Delta |             % |          Size | Allocations | Callee    | Location                       |
| -----: | -----: | ------------: | ------------: | ----------: | --------- | ------------------------------ |
| +75.0% | +3 MiB | 99.9% → 87.5% | 4 MiB → 7 MiB |       4 → 7 | `__new__` | `./blib2to3/pytree.py:81 → 70` |

##### `append` (`./black/lines.py:52`)

|  Change |  Delta |             % |                Size |     Allocations | Callee       | Location                     |
| ------: | -----: | ------------: | ------------------: | --------------: | ------------ | ---------------------------- |
|  +19.7% | +3 MiB | 88.1% → 89.8% | 15.2 MiB → 18.2 MiB | 20,787 → 20,790 | `mark`       | `./black/brackets.py:70`     |
|  +94.8% | +1 MiB |  6.1% → 10.1% | 1.05 MiB → 2.05 MiB |         90 → 91 | `whitespace` | `./black/nodes.py:194 → 183` |
| removed | -1 MiB |   5.8% → 0.0% |         1 MiB → 0 B |           1 → 0 | `prefix`     | `./blib2to3/pytree.py:480`   |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

| Change |  Delta |             % |                Size |     Allocations | Callee          | Location                          |
| -----: | -----: | ------------: | ------------------: | --------------: | --------------- | --------------------------------- |
| +19.3% | +3 MiB | 79.5% → 82.2% | 15.5 MiB → 18.5 MiB | 21,054 → 21,057 | `assert_stable` | `./black/__init__.py:1557 → 1543` |

##### `assert_stable` (`./black/__init__.py:1543`)

| Change |  Delta |      % |                Size |     Allocations | Callee             | Location                          |
| -----: | -----: | -----: | ------------------: | --------------: | ------------------ | --------------------------------- |
| +19.3% | +3 MiB | 100.0% | 15.5 MiB → 18.5 MiB | 21,054 → 21,057 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |

##### `pop` (`./blib2to3/pgen2/parse.py:386`)

|     Change |  Delta |             % |             Size | Allocations | Callee    | Location                         |
| ---------: | -----: | ------------: | ---------------: | ----------: | --------- | -------------------------------- |
| +101344.3% | +3 MiB | 0.3% → 100.0% | 3.03 KiB → 3 MiB |       4 → 7 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `line` (`./black/linegen.py:109`)

| Change |  Delta |            % |        Size | Allocations | Callee     | Location     |
| -----: | -----: | -----------: | ----------: | ----------: | ---------- | ------------ |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB |       0 → 1 | `__init__` | `<string>:2` |

##### `prev_sibling` (`./blib2to3/pytree.py:196`)

| Change |  Delta |      % |                Size | Allocations | Callee                | Location                         |
| -----: | -----: | -----: | ------------------: | ----------: | --------------------- | -------------------------------- |
| +87.6% | +1 MiB | 100.0% | 1.14 MiB → 2.14 MiB |   196 → 197 | `update_sibling_maps` | `./blib2to3/pytree.py:369 → 358` |

##### `whitespace` (`./black/nodes.py:183`)

|    Change |  Delta |            % |                Size | Allocations | Callee           | Location                         |
| --------: | -----: | -----------: | ------------------: | ----------: | ---------------- | -------------------------------- |
| +11353.1% | +2 MiB | 1.7% → 98.2% |   18 KiB → 2.02 MiB |     23 → 25 | `prev_sibling`   | `./blib2to3/pytree.py:207 → 196` |
|    -96.5% | -1 MiB | 98.3% → 1.8% | 1.04 MiB → 37.7 KiB |     67 → 66 | `preceding_leaf` | `./black/nodes.py:441 → 436`     |

##### `addtoken` (`./blib2to3/pgen2/parse.py:230`)

| Change |  Delta |             % |           Size | Allocations | Callee      | Location                              |
| -----: | -----: | ------------: | -------------: | ----------: | ----------- | ------------------------------------- |
| -10.0% | -1 MiB | 99.7% → 81.6% | 10 MiB → 9 MiB |     14 → 13 | `_addtoken` | `./blib2to3/pgen2/parse.py:290 → 278` |

##### `shift` (`./blib2to3/pgen2/parse.py:361`)

| Change |  Delta |      % |          Size | Allocations | Callee    | Location                         |
| -----: | -----: | -----: | ------------: | ----------: | --------- | -------------------------------- |
| +25.0% | +1 MiB | 100.0% | 4 MiB → 5 MiB |       4 → 5 | `convert` | `./blib2to3/pytree.py:486 → 475` |

##### `visit_INDENT` (`./black/linegen.py:179`)

| Change |  Delta |             % |        Size | Allocations | Callee | Location                 |
| -----: | -----: | ------------: | ----------: | ----------: | ------ | ------------------------ |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |       0 → 1 | `line` | `./black/linegen.py:109` |

##### `<module>` (`./black/cache.py:1`)

| Change |  Delta |             % |                Size | Allocations | Callee           | Location                             |
| -----: | -----: | ------------: | ------------------: | ----------: | ---------------- | ------------------------------------ |
|  +2.8% | +837 B | 78.2% → 78.7% | 28.9 KiB → 29.7 KiB |          33 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `<module>` (`./black/files.py:1`)

| Change |  Delta |     % |     Size | Allocations | Callee           | Location                             |
| -----: | -----: | ----: | -------: | ----------: | ---------------- | ------------------------------------ |
|  +0.1% | +794 B | 99.9% | 1.22 MiB |   234 → 235 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

| Change |      Delta |            % |                Size | Allocations | Callee        | Location                          |
| -----: | ---------: | -----------: | ------------------: | ----------: | ------------- | --------------------------------- |
| +66.0% | +1.484 KiB | 6.9% → 11.2% | 2.25 KiB → 3.73 KiB |       3 → 4 | `__setattr__` | `/usr/lib/python3.11/enum.py:831` |

##### `<module>` (`./black/mode.py:1`)

| Change |  Delta |             % |                Size | Allocations | Callee    | Location                          |
| -----: | -----: | ------------: | ------------------: | ----------: | --------- | --------------------------------- |
|  +6.8% | +752 B | 42.8% → 44.4% | 10.8 KiB → 11.5 KiB |          13 | `__new__` | `/usr/lib/python3.11/enum.py:488` |

##### `<module>` (`./black/comments.py:1`)

| Change |  Delta |     % |    Size | Allocations | Callee           | Location                             |
| -----: | -----: | ----: | ------: | ----------: | ---------------- | ------------------------------------ |
|    ~0% | +126 B | 99.8% | 1.3 MiB |         266 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `read` (`./black/cache.py:60`)

| Change | Delta |      % |                Size | Allocations | Callee           | Location              |
| -----: | ----: | -----: | ------------------: | ----------: | ---------------- | --------------------- |
|  +5.5% | +64 B | 100.0% | 1.13 KiB → 1.19 KiB |           1 | `get_cache_file` | `./black/cache.py:50` |

##### `format_str` (`./black/__init__.py:1168`)

| Change |  Delta |      % |                Size | Allocations | Callee             | Location                          |
| -----: | -----: | -----: | ------------------: | ----------: | ------------------ | --------------------------------- |
| -17.1% | -6 MiB | 100.0% | 35.1 MiB → 29.1 MiB |     92 → 86 | `_format_str_once` | `./black/__init__.py:1236 → 1215` |

##### `generate_comments` (`./black/comments.py:52`)

| Change |  Delta |             % |          Size | Allocations | Callee                      | Location                  |
| -----: | -----: | ------------: | ------------: | ----------: | --------------------------- | ------------------------- |
| -57.1% | -4 MiB | 77.8% → 60.0% | 7 MiB → 3 MiB |       7 → 3 | `normalize_trailing_prefix` | `./black/comments.py:127` |

##### `normalize_trailing_prefix` (`./black/comments.py:127`)

| Change |  Delta |              % |          Size | Allocations | Callee   | Location                         |
| -----: | -----: | -------------: | ------------: | ----------: | -------- | -------------------------------- |
| -50.0% | -3 MiB | 85.7% → 100.0% | 6 MiB → 3 MiB |       6 → 3 | `prefix` | `./blib2to3/pytree.py:480 → 469` |

##### `visit_simple_stmt` (`./black/linegen.py:295`)

| Change |      Delta |              % |                Size |     Allocations | Callee          | Location                 |
| -----: | ---------: | -------------: | ------------------: | --------------: | --------------- | ------------------------ |
| -21.0% | -4.999 MiB | 100.0% → 95.0% | 23.8 MiB → 18.8 MiB | 13,402 → 13,397 | `visit_default` | `./black/linegen.py:134` |
|    new |     +1 MiB |    0.0% → 5.0% |         0 B → 1 MiB |           0 → 1 | `line`          | `./black/linegen.py:109` |

##### `run_module` (`<frozen runpy>:201`)

| Change |      Delta |             % |                Size |     Allocations | Callee                | Location             |
| -----: | ---------: | ------------: | ------------------: | --------------: | --------------------- | -------------------- |
|  -5.5% | -2.999 MiB | 92.7% → 92.3% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `_run_module_code`    | `<frozen runpy>:91`  |
|    ~0% | -1.918 KiB |   7.3% → 7.7% |            4.29 MiB |   1,310 → 1,309 | `_get_module_details` | `<frozen runpy>:105` |

##### `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

| Change |      Delta |      % |                Size |     Allocations | Callee       | Location             |
| -----: | ---------: | -----: | ------------------: | --------------: | ------------ | -------------------- |
|  -5.1% | -3.001 MiB | 100.0% | 58.9 MiB → 55.9 MiB | 22,505 → 22,501 | `run_module` | `<frozen runpy>:201` |

##### `_format_str_once` (`./black/__init__.py:1215`)

| Change |          Delta |             % |                Size |     Allocations | Callee           | Location                     |
| -----: | -------------: | ------------: | ------------------: | --------------: | ---------------- | ---------------------------- |
| -39.3% |         -2 MiB |  10.0% → 6.5% | 5.08 MiB → 3.08 MiB |         20 → 18 | `transform_line` | `./black/linegen.py:601`     |
|  -3.0% | -1,023.906 KiB | 66.1% → 68.2% | 33.4 MiB → 32.4 MiB | 21,084 → 21,083 | `visit`          | `./black/nodes.py:163 → 152` |

##### `format_file_contents` (`./black/__init__.py:1059`)

| Change |  Delta |             % |                Size |     Allocations | Callee                            | Location                          |
| -----: | -----: | ------------: | ------------------: | --------------: | --------------------------------- | --------------------------------- |
| -17.1% | -6 MiB | 64.2% → 56.3% | 35.1 MiB → 29.1 MiB |         93 → 87 | `format_str`                      | `./black/__init__.py:1189 → 1168` |
| +15.4% | +3 MiB | 35.8% → 43.7% | 19.5 MiB → 22.5 MiB | 21,061 → 21,064 | `check_stability_and_equivalence` | `./black/__init__.py:1037 → 1042` |

##### `format_file_in_place` (`./black/__init__.py:922`)

| Change |  Delta |      % |                Size |     Allocations | Callee                 | Location                          |
| -----: | -----: | -----: | ------------------: | --------------: | ---------------------- | --------------------------------- |
|  -5.5% | -3 MiB | 100.0% | 54.6 MiB → 51.6 MiB | 21,154 → 21,151 | `format_file_contents` | `./black/__init__.py:1054 → 1059` |

##### `visit_power` (`./black/linegen.py:341`)

| Change |  Delta |      % |                Size |     Allocations | Callee          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
| -16.8% | -3 MiB | 100.0% | 17.9 MiB → 14.9 MiB | 10,808 → 10,805 | `visit_default` | `./black/linegen.py:134` |

##### `visit_suite` (`./black/linegen.py:288`)

| Change |  Delta |      % |                Size |     Allocations | Callee          | Location                 |
| -----: | -----: | -----: | ------------------: | --------------: | --------------- | ------------------------ |
|  -9.2% | -3 MiB | 100.0% | 32.7 MiB → 29.7 MiB | 20,144 → 20,141 | `visit_default` | `./black/linegen.py:134` |

##### `visit_funcdef` (`./black/linegen.py:254`)

| Change |  Delta |      % |                Size |     Allocations | Callee  | Location                     |
| -----: | -----: | -----: | ------------------: | --------------: | ------- | ---------------------------- |
|  -9.1% | -3 MiB | 100.0% | 32.8 MiB → 29.8 MiB | 20,270 → 20,267 | `visit` | `./black/nodes.py:163 → 152` |

##### `prefix` (`./blib2to3/pytree.py:469`)

| Change |  Delta |              % |          Size | Allocations | Callee    | Location                         |
| -----: | -----: | -------------: | ------------: | ----------: | --------- | -------------------------------- |
| -28.6% | -2 MiB | 87.5% → 100.0% | 7 MiB → 5 MiB |       7 → 5 | `changed` | `./blib2to3/pytree.py:171 → 160` |

##### `main` (`./black/__init__.py:240`)

| Change |      Delta |      % |                Size |     Allocations | Callee         | Location                        |
| -----: | ---------: | -----: | ------------------: | --------------: | -------------- | ------------------------------- |
|  -5.5% | -2.999 MiB | 100.0% | 54.6 MiB → 51.6 MiB | 21,162 → 21,159 | `reformat_one` | `./black/__init__.py:860 → 865` |

##### `reformat_one` (`./black/__init__.py:865`)

| Change |  Delta |      % |                Size |     Allocations | Callee                 | Location                        |
| -----: | -----: | -----: | ------------------: | --------------: | ---------------------- | ------------------------------- |
|  -5.5% | -3 MiB | 100.0% | 54.6 MiB → 51.6 MiB | 21,155 → 21,152 | `format_file_in_place` | `./black/__init__.py:917 → 922` |
|  +5.5% |  +64 B |  <0.1% | 1.13 KiB → 1.19 KiB |               1 | `read`                 | `./black/cache.py:60`           |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py:1484`)

| Change |      Delta |      % |                Size |     Allocations | Callee   | Location                                                |
| -----: | ---------: | -----: | ------------------: | --------------: | -------- | ------------------------------------------------------- |
|  -5.5% | -2.999 MiB | 100.0% | 54.6 MiB → 51.6 MiB | 21,173 → 21,170 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:1401` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1629`)

| Change |      Delta |      % |                Size |     Allocations | Callee | Location                                                |
| -----: | ---------: | -----: | ------------------: | --------------: | ------ | ------------------------------------------------------- |
|  -5.5% | -2.999 MiB | 100.0% | 54.6 MiB → 51.6 MiB | 21,193 → 21,190 | `main` | `/venv/lib/python3.11/site-packages/click/core.py:1484` |

##### `patched_main` (`./black/__init__.py:1580`)

| Change |      Delta |      % |                Size |     Allocations | Callee     | Location                                                |
| -----: | ---------: | -----: | ------------------: | --------------: | ---------- | ------------------------------------------------------- |
|  -5.5% | -2.999 MiB | 100.0% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1629` |

##### `<module>` (`./black/__main__.py:1`)

| Change |      Delta |      % |                Size |     Allocations | Callee         | Location                          |
| -----: | ---------: | -----: | ------------------: | --------------: | -------------- | --------------------------------- |
|  -5.5% | -2.999 MiB | 100.0% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `patched_main` | `./black/__init__.py:1594 → 1580` |

##### `transform_line` (`./black/linegen.py:601`)

|  Change |  Delta |             % |                Size | Allocations | Callee                                 | Location                         |
| ------: | -----: | ------------: | ------------------: | ----------: | -------------------------------------- | -------------------------------- |
|  -33.2% | -1 MiB | 59.2% → 65.1% | 3.01 MiB → 2.01 MiB |     11 → 10 | `run_transformer`                      | `./black/linegen.py:1755 → 1771` |
| removed | -1 MiB |  19.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `contains_uncollapsable_type_comments` | `./black/lines.py:276`           |
|  -50.0% | -1 MiB | 39.4% → 32.5% |       2 MiB → 1 MiB |       3 → 2 | `_hugging_power_ops_line_to_string`    | `./black/linegen.py:590`         |

##### `changed` (`./blib2to3/pytree.py:160`)

| Change |  Delta |             % |          Size | Allocations | Callee    | Location                         |
| -----: | -----: | ------------: | ------------: | ----------: | --------- | -------------------------------- |
| -20.0% | -1 MiB | 71.4% → 80.0% | 5 MiB → 4 MiB |       5 → 4 | `changed` | `./blib2to3/pytree.py:171 → 160` |

##### `hug_power_op` (`./black/trans.py:85`)

|  Change |  Delta |            % |        Size | Allocations | Callee  | Location                   |
| ------: | -----: | -----------: | ----------: | ----------: | ------- | -------------------------- |
| removed | -1 MiB | 50.0% → 0.0% | 1 MiB → 0 B |       1 → 0 | `clone` | `./blib2to3/pytree.py:452` |

##### `visit_stmt` (`./black/linegen.py:199`)

| Change |      Delta |           % |                Size |     Allocations | Callee                       | Location                         |
| -----: | ---------: | ----------: | ------------------: | --------------: | ---------------------------- | -------------------------------- |
|  -6.0% | -1.999 MiB |      100.0% | 33.2 MiB → 31.2 MiB | 20,709 → 20,707 | `visit`                      | `./black/nodes.py:163 → 152`     |
| -33.3% |     -1 MiB | 9.0% → 6.4% |       3 MiB → 2 MiB |           4 → 3 | `normalize_invisible_parens` | `./black/linegen.py:1328 → 1344` |

##### `_run_code` (`<frozen runpy>:65`)

| Change |      Delta |      % |                Size |     Allocations | Callee     | Location                |
| -----: | ---------: | -----: | ------------------: | --------------: | ---------- | ----------------------- |
|  -5.5% | -2.999 MiB | 100.0% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `<module>` | `./black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

| Change |      Delta |      % |                Size |     Allocations | Callee      | Location            |
| -----: | ---------: | -----: | ------------------: | --------------: | ----------- | ------------------- |
|  -5.5% | -2.999 MiB | 100.0% | 54.6 MiB → 51.6 MiB | 21,194 → 21,191 | `_run_code` | `<frozen runpy>:65` |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

| Change |     Delta |     % |     Size | Allocations | Callee                      | Location                                      |
| -----: | --------: | ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
|    ~0% | -1.46 KiB | 99.3% | 4.25 MiB |       1,268 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|    ~0% |    -213 B | 59.7% | 2.55 MiB |   619 → 618 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

| Change |      Delta |      % |     Size |   Allocations | Callee        | Location                                     |
| -----: | ---------: | -----: | -------: | ------------: | ------------- | -------------------------------------------- |
|    ~0% | -1.918 KiB | 100.0% | 4.28 MiB | 1,298 → 1,297 | `exec_module` | `<frozen importlib._bootstrap_external>:934` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

| Change |      Delta |      % |     Size |   Allocations | Callee           | Location                            |
| -----: | ---------: | -----: | -------: | ------------: | ---------------- | ----------------------------------- |
|    ~0% | -1.918 KiB | 100.0% | 4.28 MiB | 1,300 → 1,299 | `_load_unlocked` | `<frozen importlib._bootstrap>:666` |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

| Change |      Delta |      % |     Size |   Allocations | Callee                    | Location                             |
| -----: | ---------: | -----: | -------: | ------------: | ------------------------- | ------------------------------------ |
|    ~0% | -1.918 KiB | 100.0% | 4.28 MiB | 1,301 → 1,300 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |

##### `_get_module_details` (`<frozen runpy>:105`)

| Change |      Delta |     % |     Size |   Allocations | Callee                | Location                             |
| -----: | ---------: | ----: | -------: | ------------: | --------------------- | ------------------------------------ |
|    ~0% | -1.918 KiB | 99.9% | 4.28 MiB | 1,303 → 1,302 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
|    ~0% | -1.918 KiB | 99.9% | 4.28 MiB | 1,303 → 1,302 | `_get_module_details` | `<frozen runpy>:105`                 |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

| Change |      Delta |           % |                Size | Allocations | Callee     | Location                |
| -----: | ---------: | ----------: | ------------------: | ----------: | ---------- | ----------------------- |
|  -5.3% | -1.703 KiB |        0.7% |   32 KiB → 30.3 KiB |          32 | `<module>` | `./black/trans.py:1`    |
|  -1.2% | -1.703 KiB | 3.3% → 3.2% |   142 KiB → 140 KiB |         139 | `<module>` | `./black/linegen.py:1`  |
|    ~0% |  -1.46 KiB |      100.0% |            4.25 MiB |       1,268 | `<module>` | `./black/__init__.py:1` |
|  +2.2% |     +837 B | 0.8% → 0.9% | 36.9 KiB → 37.8 KiB |          41 | `<module>` | `./black/cache.py:1`    |
|  +0.1% |     +794 B |       28.8% |            1.22 MiB |   235 → 236 | `<module>` | `./black/files.py:1`    |

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

|     Change |  Delta |            % |             Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------: | -----: | -----------: | ---------------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|        new | +3 MiB |  0.0% → 5.4% |      0 B → 3 MiB |       0 → 3 | `__new__` (`./blib2to3/pytree.py:70`) ← `convert` (475) ← `pop` (`./blib2to3/pgen2/parse.py:386`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +174762.7% | +2 MiB | <0.1% → 3.6% | 1.17 KiB → 2 MiB |       2 → 4 | `addtoken` (`./blib2to3/pgen2/parse.py:230`) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +36714.8% | +1 MiB | <0.1% → 1.8% | 2.79 KiB → 1 MiB |       3 → 4 | `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|        new | +1 MiB |  0.0% → 1.8% |      0 B → 1 MiB |       0 → 1 | `line` (`./black/linegen.py:109`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|        new | +1 MiB |  0.0% → 1.8% |      0 B → 1 MiB |       0 → 1 | `__str__` (`./black/lines.py:479`) ← `line_to_string` (1062) ← `_hugging_power_ops_line_to_string` (`./black/linegen.py:590`) ← `transform_line` (601) ← `run_transformer` (1771) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1215`) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|        new | +1 MiB |  0.0% → 1.8% |      0 B → 1 MiB |       0 → 1 | `_stringify_ast` (`./black/parsing.py:182`) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `_stringify_ast_with_new_parent` (174) ← `_stringify_ast` (182) ← `assert_equivalent` (`./black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|        new | +1 MiB |  0.0% → 1.8% |      0 B → 1 MiB |       0 → 1 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|        new | +1 MiB |  0.0% → 1.8% |      0 B → 1 MiB |       0 → 1 | `mark` (`./black/brackets.py:70`) ← `append` (`./black/lines.py:52`) ← `bracket_split_build_line` (`./black/linegen.py:1123`) ← `_first_right_hand_split` (829) ← `_maybe_split_omitting_optional_parens` (932) ← `right_hand_split` (809) ← `_rhs` (650) ← `run_transformer` (1771) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1215`) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|        new | +1 MiB |  0.0% → 1.8% |      0 B → 1 MiB |       0 → 1 | `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                               |
|        new | +1 MiB |  0.0% → 1.8% |      0 B → 1 MiB |       0 → 1 | `changed` (`./blib2to3/pytree.py:160`) ← `changed` (160) ← `changed` (160) ← `prefix` (469) ← `wrap_in_parentheses` (`./black/nodes.py:930`) ← `normalize_invisible_parens` (`./black/linegen.py:1344`) ← `visit_stmt` (199) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|        new | +1 MiB |  0.0% → 1.8% |      0 B → 1 MiB |       0 → 1 | `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|        new | +1 MiB |  0.0% → 1.8% |      0 B → 1 MiB |       0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|        new | +1 MiB |  0.0% → 1.8% |      0 B → 1 MiB |       0 → 1 | `_uniq` (`/usr/lib/python3.11/re/_parser.py:444`) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `parse` (970) ← `compile` (`/usr/lib/python3.11/re/_compiler.py:738`) ← `_compile` (`/usr/lib/python3.11/re/__init__.py:272`) ← `compile` (225) ← `<module>` (`./blib2to3/pgen2/tokenize.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./blib2to3/pgen2/driver.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`./blib2to3/pygram.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`./black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105) |
|        new | +1 MiB |  0.0% → 1.8% |      0 B → 1 MiB |       0 → 1 | `__init__` (`<string>:2`) ← `__init__` (2) ← `line` (`./black/linegen.py:109`) ← `visit_INDENT` (179) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|        new | +1 MiB |  0.0% → 1.8% |      0 B → 1 MiB |       0 → 1 | `convert` (`./blib2to3/pytree.py:475`) ← `shift` (`./blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|        new | +1 MiB |  0.0% → 1.8% |      0 B → 1 MiB |       0 → 1 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|        new | +1 MiB |  0.0% → 1.8% |      0 B → 1 MiB |       0 → 1 | `changed` (`./blib2to3/pytree.py:160`) ← `prefix` (469) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                       |
|        new | +1 MiB |  0.0% → 1.8% |      0 B → 1 MiB |       0 → 1 | `update_sibling_maps` (`./blib2to3/pytree.py:358`) ← `prev_sibling` (196) ← `whitespace` (`./black/nodes.py:183`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                    |
|        new | +1 MiB |  0.0% → 1.8% |      0 B → 1 MiB |       0 → 1 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|        new | +1 MiB |  0.0% → 1.8% |      0 B → 1 MiB |       0 → 1 | `mark` (`./black/brackets.py:70`) ← `append` (`./black/lines.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

### Improvements

Call stacks with the largest decrease in bytes never freed in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv/lib/python3.11/site-packages/memray/commands/run.py:40`)

|  Change |  Delta |           % |          Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------: | -----: | ----------: | ------------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -75.0% | -3 MiB | 6.8% → 1.8% | 4 MiB → 1 MiB |       4 → 1 | `push` (`./blib2to3/pgen2/parse.py:374`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed | -1 MiB | 1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__init__` (`./blib2to3/pytree.py:248`) ← `wrap_in_parentheses` (`./black/nodes.py:935`) ← `normalize_invisible_parens` (`./black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed | -1 MiB | 1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed | -1 MiB | 1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                      |
| removed | -1 MiB | 1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `update_sibling_maps` (`./blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `preceding_leaf` (`./black/nodes.py:441`) ← `whitespace` (194) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed | -1 MiB | 1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `generate_comments` (`./black/comments.py:52`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                         |
| removed | -1 MiB | 1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `contains_uncollapsable_type_comments` (`./black/lines.py:276`) ← `transform_line` (`./black/linegen.py:601`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed | -1 MiB | 1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed | -1 MiB | 1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `_stringify_ast` (`./black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`./black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed | -1 MiB | 1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -50.0% | -1 MiB | 3.4% → 1.8% | 2 MiB → 1 MiB |       2 → 1 | `generate_tokens` (`./blib2to3/pgen2/tokenize.py:554`) ← `__next__` (`./blib2to3/pgen2/driver.py:80`) ← `parse_tokens` (114) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed | -1 MiB | 1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__init__` (`<string>:2`) ← `__init__` (2) ← `bracket_split_build_line` (`./black/linegen.py:1082`) ← `_first_right_hand_split` (829) ← `_maybe_split_omitting_optional_parens` (932) ← `right_hand_split` (809) ← `_rhs` (650) ← `run_transformer` (1755) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed | -1 MiB | 1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                     |
| removed | -1 MiB | 1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `changed` (171) ← `prefix` (480) ← `prefix` (329) ← `wrap_in_parentheses` (`./black/nodes.py:935`) ← `normalize_invisible_parens` (`./black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed | -1 MiB | 1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `_addtoken` (`./blib2to3/pgen2/parse.py:290`) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -1 MiB | 1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `pop` (`./blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed | -1 MiB | 1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `prefix` (`./blib2to3/pytree.py:480`) ← `append` (`./black/lines.py:63`) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed | -1 MiB | 1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `changed` (`./blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`./black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit_NUMBER` (505) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_factor` (379) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                       |
| removed | -1 MiB | 1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__getitem__` (`/usr/lib/python3.11/re/_parser.py:162`) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `_parse` (507) ← `_parse_sub` (447) ← `parse` (970) ← `compile` (`/usr/lib/python3.11/re/_compiler.py:738`) ← `_compile` (`/usr/lib/python3.11/re/__init__.py:272`) ← `compile` (225) ← `<module>` (`./blib2to3/pgen2/tokenize.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./blib2to3/pgen2/driver.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`./blib2to3/pygram.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`./black/nodes.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./black/comments.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`./black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105) |
| removed | -1 MiB | 1.7% → 0.0% |   1 MiB → 0 B |       1 → 0 | `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:163`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:163`) ← `_format_str_once` (`./black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1594`) ← `<module>` (`./black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

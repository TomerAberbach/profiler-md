# Peak memory profile diff

Held 78.6 MiB (-1.702 KiB, ~0%) over 22,680 allocations → 22,679 allocations (3.55 KiB per allocation).

| Category         | Change |      Delta |             % |                Size |     Allocations |
| ---------------- | -----: | ---------: | ------------: | ------------------: | --------------: |
| Ours             |  -1.5% | -1.002 MiB | 82.9% → 81.7% | 65.2 MiB → 64.2 MiB | 21,440 → 21,439 |
| Standard library |  +7.6% |     +1 MiB | 16.7% → 18.0% | 13.1 MiB → 14.1 MiB |           1,007 |
| Third-party      |  +0.1% |     +172 B |          0.3% |   274 KiB → 275 KiB |             233 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes held at peak memory directly in the function body, excluding callees.

|     Change |      Delta |            % |                Size | Allocations | Function                               | Location                                                      |
| ---------: | ---------: | -----------: | ------------------: | ----------: | -------------------------------------- | ------------------------------------------------------------- |
| +174762.7% |     +2 MiB | <0.1% → 2.5% |    1.17 KiB → 2 MiB |       2 → 4 | `addtoken`                             | `blib2to3/pgen2/parse.py:242 → 230`                           |
|     +66.7% |     +2 MiB |  3.8% → 6.4% |       3 MiB → 5 MiB |       3 → 5 | `__new__`                              | `blib2to3/pytree.py:81 → 70`                                  |
|  +42077.7% |     +1 MiB | <0.1% → 1.3% |    2.43 KiB → 1 MiB |       2 → 3 | `_compile`                             | `/usr/lib/python3.11/re/_compiler.py:37`                      |
|        new |     +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `shift`                                | `blib2to3/pgen2/parse.py:373 → 361`                           |
|  +30552.9% |     +1 MiB | <0.1% → 1.3% |    3.35 KiB → 1 MiB |       4 → 5 | `visit`                                | `black/nodes.py:163 → 152`                                    |
|  +45432.2% |     +1 MiB | <0.1% → 1.3% |    2.25 KiB → 1 MiB |       3 → 4 | `visit_STRING`                         | `black/linegen.py:413`                                        |
|     +14.3% |     +1 MiB | 8.9% → 10.2% |       7 MiB → 8 MiB |       7 → 8 | `changed`                              | `blib2to3/pytree.py:171 → 160`                                |
|     +50.0% |     +1 MiB |  2.5% → 3.8% |       2 MiB → 3 MiB |       2 → 3 | `generate_comments`                    | `black/comments.py:52`                                        |
|        new |     +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `is_complex_subscript`                 | `black/lines.py:441 → 430`                                    |
|    +703.4% |     +1 MiB |  0.2% → 1.5% |  146 KiB → 1.14 MiB |   195 → 196 | `update_sibling_maps`                  | `blib2to3/pytree.py:369 → 358`                                |
|        new |     +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `comments_after`                       | `black/lines.py:418`                                          |
|        new |     +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `contains_uncollapsable_type_comments` | `black/lines.py:265`                                          |
|        new |     +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `replace`                              | `/usr/lib/python3.11/dataclasses.py:1443`                     |
|     +22.0% | +1.484 KiB |        <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__`                          | `/usr/lib/python3.11/enum.py:831`                             |
|      +4.4% |     +172 B |        <0.1% | 3.79 KiB → 3.96 KiB |           3 | `new_func`                             | `/venv13/lib/python3.11/site-packages/click/decorators.py:33` |
|        ~0% |     +104 B |         0.3% |             225 KiB |           5 | `_format_str_once`                     | `black/__init__.py:1236 → 1215`                               |
|      +1.5% |      +96 B |        <0.1% | 6.24 KiB → 6.33 KiB |           4 | `append`                               | `black/lines.py:63 → 52`                                      |
|      +5.5% |      +64 B |        <0.1% | 1.13 KiB → 1.19 KiB |           1 | `get_cache_file`                       | `black/cache.py:50`                                           |
|     +10.1% |      +60 B |        <0.1% |       594 B → 654 B |           1 | `check_stability_and_equivalence`      | `black/__init__.py:1037 → 1042`                               |

##### Ours

|     Change |  Delta |            % |                Size | Allocations | Function                               | Location                            |
| ---------: | -----: | -----------: | ------------------: | ----------: | -------------------------------------- | ----------------------------------- |
| +174762.7% | +2 MiB | <0.1% → 2.5% |    1.17 KiB → 2 MiB |       2 → 4 | `addtoken`                             | `blib2to3/pgen2/parse.py:242 → 230` |
|     +66.7% | +2 MiB |  3.8% → 6.4% |       3 MiB → 5 MiB |       3 → 5 | `__new__`                              | `blib2to3/pytree.py:81 → 70`        |
|        new | +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `shift`                                | `blib2to3/pgen2/parse.py:373 → 361` |
|  +30552.9% | +1 MiB | <0.1% → 1.3% |    3.35 KiB → 1 MiB |       4 → 5 | `visit`                                | `black/nodes.py:163 → 152`          |
|  +45432.2% | +1 MiB | <0.1% → 1.3% |    2.25 KiB → 1 MiB |       3 → 4 | `visit_STRING`                         | `black/linegen.py:413`              |
|     +14.3% | +1 MiB | 8.9% → 10.2% |       7 MiB → 8 MiB |       7 → 8 | `changed`                              | `blib2to3/pytree.py:171 → 160`      |
|     +50.0% | +1 MiB |  2.5% → 3.8% |       2 MiB → 3 MiB |       2 → 3 | `generate_comments`                    | `black/comments.py:52`              |
|        new | +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `is_complex_subscript`                 | `black/lines.py:441 → 430`          |
|    +703.4% | +1 MiB |  0.2% → 1.5% |  146 KiB → 1.14 MiB |   195 → 196 | `update_sibling_maps`                  | `blib2to3/pytree.py:369 → 358`      |
|        new | +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `comments_after`                       | `black/lines.py:418`                |
|        new | +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `contains_uncollapsable_type_comments` | `black/lines.py:265`                |
|        ~0% | +104 B |         0.3% |             225 KiB |           5 | `_format_str_once`                     | `black/__init__.py:1236 → 1215`     |
|      +1.5% |  +96 B |        <0.1% | 6.24 KiB → 6.33 KiB |           4 | `append`                               | `black/lines.py:63 → 52`            |
|      +5.5% |  +64 B |        <0.1% | 1.13 KiB → 1.19 KiB |           1 | `get_cache_file`                       | `black/cache.py:50`                 |
|     +10.1% |  +60 B |        <0.1% |       594 B → 654 B |           1 | `check_stability_and_equivalence`      | `black/__init__.py:1037 → 1042`     |

##### Standard library

|    Change |      Delta |            % |                Size | Allocations | Function      | Location                                  |
| --------: | ---------: | -----------: | ------------------: | ----------: | ------------- | ----------------------------------------- |
| +42077.7% |     +1 MiB | <0.1% → 1.3% |    2.43 KiB → 1 MiB |       2 → 3 | `_compile`    | `/usr/lib/python3.11/re/_compiler.py:37`  |
|       new |     +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `replace`     | `/usr/lib/python3.11/dataclasses.py:1443` |
|    +22.0% | +1.484 KiB |        <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__` | `/usr/lib/python3.11/enum.py:831`         |

#### Improvements

Functions with the largest decrease in bytes held at peak memory directly in the function body, excluding callees.

|  Change |      Delta |            % |                Size | Allocations | Function                    | Location                                     |
| ------: | ---------: | -----------: | ------------------: | ----------: | --------------------------- | -------------------------------------------- |
| removed |     -3 MiB |  3.8% → 0.0% |         3 MiB → 0 B |       3 → 0 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:565`             |
| removed |     -3 MiB |  3.8% → 0.0% |         3 MiB → 0 B |       3 → 0 | `is_split_before_delimiter` | `black/brackets.py:232`                      |
| removed |     -2 MiB |  2.5% → 0.0% |         2 MiB → 0 B |       2 → 0 | `__init__`                  | `<string>:2`                                 |
|  -99.9% |     -1 MiB | 1.3% → <0.1% |       1 MiB → 784 B |       2 → 1 | `_first_right_hand_split`   | `black/linegen.py:829`                       |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                  | `/usr/lib/python3.11/re/_parser.py:109`      |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `_addtoken`                 | `blib2to3/pgen2/parse.py:290 → 278`          |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `push`                      | `blib2to3/pgen2/parse.py:386`                |
|  -99.9% |     -1 MiB | 1.3% → <0.1% |    1 MiB → 1.09 KiB |       2 → 1 | `_rhs`                      | `black/linegen.py:650`                       |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__str__`                   | `black/lines.py:490`                         |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `pre_order`                 | `blib2to3/pytree.py:314`                     |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                  | `black/trans.py:1`                           |
|   -3.3% |     -768 B |        <0.1% |   23 KiB → 22.2 KiB |     26 → 25 | `__new__`                   | `/usr/lib/python3.11/enum.py:488`            |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                  | `black/ranges.py:1`                          |
|     ~0% |     -213 B |         3.2% |            2.54 MiB |   604 → 603 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727` |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                  | `blib2to3/pgen2/tokenize.py:1`               |

##### Ours

|  Change |      Delta |            % |                Size | Allocations | Function                    | Location                            |
| ------: | ---------: | -----------: | ------------------: | ----------: | --------------------------- | ----------------------------------- |
| removed |     -3 MiB |  3.8% → 0.0% |         3 MiB → 0 B |       3 → 0 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:565`    |
| removed |     -3 MiB |  3.8% → 0.0% |         3 MiB → 0 B |       3 → 0 | `is_split_before_delimiter` | `black/brackets.py:232`             |
| removed |     -2 MiB |  2.5% → 0.0% |         2 MiB → 0 B |       2 → 0 | `__init__`                  | `<string>:2`                        |
|  -99.9% |     -1 MiB | 1.3% → <0.1% |       1 MiB → 784 B |       2 → 1 | `_first_right_hand_split`   | `black/linegen.py:829`              |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `_addtoken`                 | `blib2to3/pgen2/parse.py:290 → 278` |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `push`                      | `blib2to3/pgen2/parse.py:386`       |
|  -99.9% |     -1 MiB | 1.3% → <0.1% |    1 MiB → 1.09 KiB |       2 → 1 | `_rhs`                      | `black/linegen.py:650`              |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__str__`                   | `black/lines.py:490`                |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `pre_order`                 | `blib2to3/pytree.py:314`            |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                  | `black/trans.py:1`                  |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                  | `black/ranges.py:1`                 |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                  | `blib2to3/pgen2/tokenize.py:1`      |

##### Standard library

|  Change |  Delta |           % |              Size | Allocations | Function            | Location                                     |
| ------: | -----: | ----------: | ----------------: | ----------: | ------------------- | -------------------------------------------- |
| removed | -1 MiB | 1.3% → 0.0% |       1 MiB → 0 B |       1 → 0 | `__init__`          | `/usr/lib/python3.11/re/_parser.py:109`      |
|   -3.3% | -768 B |       <0.1% | 23 KiB → 22.2 KiB |     26 → 25 | `__new__`           | `/usr/lib/python3.11/enum.py:488`            |
|     ~0% | -213 B |        3.2% |          2.54 MiB |   604 → 603 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

### Total size

#### Regressions

Functions with the largest increase in total bytes held at peak memory in the function and all its callees.

|     Change |  Delta |             % |                Size | Allocations | Function                                | Location                                  |
| ---------: | -----: | ------------: | ------------------: | ----------: | --------------------------------------- | ----------------------------------------- |
|        new | +8 MiB |  0.0% → 10.2% |         0 B → 8 MiB |       0 → 8 | `prefix`                                | `blib2to3/pytree.py:469`                  |
|    +133.3% | +4 MiB |   3.8% → 8.9% |       3 MiB → 7 MiB |       3 → 7 | `shift`                                 | `blib2to3/pgen2/parse.py:373 → 361`       |
|     +33.2% | +3 MiB | 11.5% → 15.3% |   9.04 MiB → 12 MiB |     16 → 19 | `addtoken`                              | `blib2to3/pgen2/parse.py:242 → 230`       |
|     +40.0% | +2 MiB |   6.4% → 8.9% |       5 MiB → 7 MiB |      9 → 11 | `convert`                               | `blib2to3/pytree.py:486 → 475`            |
|     +66.7% | +2 MiB |   3.8% → 6.4% |       3 MiB → 5 MiB |       3 → 5 | `__new__`                               | `blib2to3/pytree.py:81 → 70`              |
|  +10781.2% | +1 MiB |  <0.1% → 1.3% |  9.5 KiB → 1.01 MiB |       6 → 7 | `_code`                                 | `/usr/lib/python3.11/re/_compiler.py:571` |
|  +42077.7% | +1 MiB |  <0.1% → 1.3% |    2.43 KiB → 1 MiB |       2 → 3 | `_compile`                              | `/usr/lib/python3.11/re/_compiler.py:37`  |
|     +11.1% | +1 MiB | 11.5% → 12.7% |      9 MiB → 10 MiB |     13 → 14 | `_addtoken`                             | `blib2to3/pgen2/parse.py:290 → 278`       |
|    +146.6% | +1 MiB |   0.9% → 2.1% |  698 KiB → 1.68 MiB |   900 → 901 | `visit_STRING`                          | `black/linegen.py:413`                    |
|  +88712.0% | +1 MiB |  <0.1% → 1.3% |    1.15 KiB → 1 MiB |       1 → 2 | `normalize_invisible_parens`            | `black/linegen.py:1328 → 1344`            |
| +169672.5% | +1 MiB |  <0.1% → 1.3% |       618 B → 1 MiB |       1 → 2 | `bracket_split_build_line`              | `black/linegen.py:1082 → 1123`            |
| +104857.6% | +1 MiB |  <0.1% → 1.3% |     1,000 B → 1 MiB |       1 → 2 | `_maybe_split_omitting_optional_parens` | `black/linegen.py:932`                    |
|     +14.3% | +1 MiB |  8.9% → 10.2% |       7 MiB → 8 MiB |       7 → 8 | `changed`                               | `blib2to3/pytree.py:171 → 160`            |
|     +11.1% | +1 MiB | 11.5% → 12.7% |      9 MiB → 10 MiB |      9 → 10 | `generate_comments`                     | `black/comments.py:52`                    |
|    +703.4% | +1 MiB |   0.2% → 1.5% |  146 KiB → 1.14 MiB |   195 → 196 | `update_sibling_maps`                   | `blib2to3/pytree.py:369 → 358`            |
|    +703.4% | +1 MiB |   0.2% → 1.5% |  146 KiB → 1.14 MiB |   195 → 196 | `prev_sibling`                          | `blib2to3/pytree.py:207 → 196`            |
|   +1838.6% | +1 MiB |   0.1% → 1.3% | 55.7 KiB → 1.05 MiB |     89 → 90 | `whitespace`                            | `black/nodes.py:194 → 183`                |
|   +2719.3% | +1 MiB |  <0.1% → 1.3% | 37.7 KiB → 1.04 MiB |     66 → 67 | `preceding_leaf`                        | `black/nodes.py:441 → 436`                |
|        new | +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `comments_after`                        | `black/lines.py:418`                      |
|        new | +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `wrap_in_parentheses`                   | `black/nodes.py:930`                      |

##### Ours

|     Change |          Delta |             % |                Size | Allocations | Function                                | Location                            |
| ---------: | -------------: | ------------: | ------------------: | ----------: | --------------------------------------- | ----------------------------------- |
|        new |         +8 MiB |  0.0% → 10.2% |         0 B → 8 MiB |       0 → 8 | `prefix`                                | `blib2to3/pytree.py:469`            |
|    +133.3% |         +4 MiB |   3.8% → 8.9% |       3 MiB → 7 MiB |       3 → 7 | `shift`                                 | `blib2to3/pgen2/parse.py:373 → 361` |
|     +33.2% |         +3 MiB | 11.5% → 15.3% |   9.04 MiB → 12 MiB |     16 → 19 | `addtoken`                              | `blib2to3/pgen2/parse.py:242 → 230` |
|     +40.0% |         +2 MiB |   6.4% → 8.9% |       5 MiB → 7 MiB |      9 → 11 | `convert`                               | `blib2to3/pytree.py:486 → 475`      |
|     +66.7% |         +2 MiB |   3.8% → 6.4% |       3 MiB → 5 MiB |       3 → 5 | `__new__`                               | `blib2to3/pytree.py:81 → 70`        |
|     +11.1% |         +1 MiB | 11.5% → 12.7% |      9 MiB → 10 MiB |     13 → 14 | `_addtoken`                             | `blib2to3/pgen2/parse.py:290 → 278` |
|    +146.6% |         +1 MiB |   0.9% → 2.1% |  698 KiB → 1.68 MiB |   900 → 901 | `visit_STRING`                          | `black/linegen.py:413`              |
|  +88712.0% |         +1 MiB |  <0.1% → 1.3% |    1.15 KiB → 1 MiB |       1 → 2 | `normalize_invisible_parens`            | `black/linegen.py:1328 → 1344`      |
| +169672.5% |         +1 MiB |  <0.1% → 1.3% |       618 B → 1 MiB |       1 → 2 | `bracket_split_build_line`              | `black/linegen.py:1082 → 1123`      |
| +104857.6% |         +1 MiB |  <0.1% → 1.3% |     1,000 B → 1 MiB |       1 → 2 | `_maybe_split_omitting_optional_parens` | `black/linegen.py:932`              |
|     +14.3% |         +1 MiB |  8.9% → 10.2% |       7 MiB → 8 MiB |       7 → 8 | `changed`                               | `blib2to3/pytree.py:171 → 160`      |
|     +11.1% |         +1 MiB | 11.5% → 12.7% |      9 MiB → 10 MiB |      9 → 10 | `generate_comments`                     | `black/comments.py:52`              |
|    +703.4% |         +1 MiB |   0.2% → 1.5% |  146 KiB → 1.14 MiB |   195 → 196 | `update_sibling_maps`                   | `blib2to3/pytree.py:369 → 358`      |
|    +703.4% |         +1 MiB |   0.2% → 1.5% |  146 KiB → 1.14 MiB |   195 → 196 | `prev_sibling`                          | `blib2to3/pytree.py:207 → 196`      |
|   +1838.6% |         +1 MiB |   0.1% → 1.3% | 55.7 KiB → 1.05 MiB |     89 → 90 | `whitespace`                            | `black/nodes.py:194 → 183`          |
|   +2719.3% |         +1 MiB |  <0.1% → 1.3% | 37.7 KiB → 1.04 MiB |     66 → 67 | `preceding_leaf`                        | `black/nodes.py:441 → 436`          |
|        new |         +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `comments_after`                        | `black/lines.py:418`                |
|        new |         +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `wrap_in_parentheses`                   | `black/nodes.py:930`                |
|        new |         +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `contains_uncollapsable_type_comments`  | `black/lines.py:265`                |
|     +49.7% | +1,023.732 KiB |   2.6% → 3.8% | 2.01 MiB → 3.01 MiB |     14 → 15 | `transform_line`                        | `black/linegen.py:601`              |

##### Standard library

|    Change |      Delta |            % |                Size | Allocations | Function           | Location                                  |
| --------: | ---------: | -----------: | ------------------: | ----------: | ------------------ | ----------------------------------------- |
| +10781.2% |     +1 MiB | <0.1% → 1.3% |  9.5 KiB → 1.01 MiB |       6 → 7 | `_code`            | `/usr/lib/python3.11/re/_compiler.py:571` |
| +42077.7% |     +1 MiB | <0.1% → 1.3% |    2.43 KiB → 1 MiB |       2 → 3 | `_compile`         | `/usr/lib/python3.11/re/_compiler.py:37`  |
|       new |     +1 MiB |  0.0% → 1.3% |         0 B → 1 MiB |       0 → 1 | `replace`          | `/usr/lib/python3.11/dataclasses.py:1443` |
|    +22.0% | +1.484 KiB |        <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__`      | `/usr/lib/python3.11/enum.py:831`         |
|     +2.3% |     +752 B |        <0.1% | 31.4 KiB → 32.1 KiB |          37 | `__new__`          | `/usr/lib/python3.11/enum.py:488`         |
|       ~0% |     +222 B |        94.5% |            74.3 MiB |      21,396 | `_run_code`        | `<frozen runpy>:65`                       |
|       ~0% |     +222 B |        94.5% |            74.3 MiB |      21,396 | `_run_module_code` | `<frozen runpy>:91`                       |

#### Improvements

Functions with the largest decrease in total bytes held at peak memory in the function and all its callees.

|  Change |      Delta |             % |                Size |     Allocations | Function                    | Location                                |
| ------: | ---------: | ------------: | ------------------: | --------------: | --------------------------- | --------------------------------------- |
|  -85.7% |     -6 MiB |   8.9% → 1.3% |       7 MiB → 1 MiB |           7 → 1 | `prefix`                    | `blib2to3/pytree.py:480 → 318`          |
|  -13.9% | -3.999 MiB | 36.7% → 31.6% | 28.8 MiB → 24.8 MiB | 13,407 → 13,403 | `visit_simple_stmt`         | `black/linegen.py:295`                  |
|  -99.7% |     -3 MiB |  3.8% → <0.1% | 3.01 MiB → 8.27 KiB |           4 → 1 | `__next__`                  | `blib2to3/pgen2/driver.py:80`           |
| removed |     -3 MiB |   3.8% → 0.0% |         3 MiB → 0 B |           3 → 0 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:565`        |
|  -14.1% |     -3 MiB | 27.0% → 23.2% | 21.2 MiB → 18.2 MiB | 20,793 → 20,790 | `mark`                      | `black/brackets.py:70`                  |
| removed |     -3 MiB |   3.8% → 0.0% |         3 MiB → 0 B |           3 → 0 | `is_split_before_delimiter` | `black/brackets.py:232`                 |
| removed |     -2 MiB |   2.5% → 0.0% |         2 MiB → 0 B |           2 → 0 | `__init__`                  | `<string>:2`                            |
| removed |     -2 MiB |   2.5% → 0.0% |         2 MiB → 0 B |           2 → 0 | `line`                      | `black/linegen.py:109`                  |
|   -9.0% | -1.999 MiB | 28.4% → 25.8% | 22.3 MiB → 20.3 MiB | 20,887 → 20,885 | `append`                    | `black/lines.py:63 → 52`                |
|  -98.6% |     -1 MiB |  1.3% → <0.1% | 1.01 MiB → 14.4 KiB |           6 → 5 | `parse`                     | `/usr/lib/python3.11/re/_parser.py:970` |
|  -98.7% |     -1 MiB |  1.3% → <0.1% | 1.01 MiB → 13.6 KiB |           5 → 4 | `_parse_sub`                | `/usr/lib/python3.11/re/_parser.py:447` |
|  -99.5% |     -1 MiB |  1.3% → <0.1% | 1.01 MiB → 5.61 KiB |           4 → 3 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507` |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__init__`                  | `/usr/lib/python3.11/re/_parser.py:109` |
|  -25.0% |     -1 MiB |   5.1% → 3.8% |       4 MiB → 3 MiB |           8 → 7 | `pop`                       | `blib2to3/pgen2/parse.py:398 → 386`     |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |           1 → 0 | `push`                      | `blib2to3/pgen2/parse.py:386`           |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__str__`                   | `black/lines.py:490`                    |
|   -2.8% |     -1 MiB | 45.6% → 44.3% | 35.8 MiB → 34.8 MiB | 20,273 → 20,272 | `visit_funcdef`             | `black/linegen.py:254`                  |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |           1 → 0 | `pre_order`                 | `blib2to3/pytree.py:314`                |
|     ~0% | -1.918 KiB |          5.5% |            4.29 MiB |   1,282 → 1,281 | `_get_module_details`       | `<frozen runpy>:105`                    |
|     ~0% | -1.918 KiB |          5.5% | 4.29 MiB → 4.28 MiB |   1,275 → 1,274 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`    |

##### Ours

|  Change |      Delta |             % |                Size |     Allocations | Function                    | Location                            |
| ------: | ---------: | ------------: | ------------------: | --------------: | --------------------------- | ----------------------------------- |
|  -85.7% |     -6 MiB |   8.9% → 1.3% |       7 MiB → 1 MiB |           7 → 1 | `prefix`                    | `blib2to3/pytree.py:480 → 318`      |
|  -13.9% | -3.999 MiB | 36.7% → 31.6% | 28.8 MiB → 24.8 MiB | 13,407 → 13,403 | `visit_simple_stmt`         | `black/linegen.py:295`              |
|  -99.7% |     -3 MiB |  3.8% → <0.1% | 3.01 MiB → 8.27 KiB |           4 → 1 | `__next__`                  | `blib2to3/pgen2/driver.py:80`       |
| removed |     -3 MiB |   3.8% → 0.0% |         3 MiB → 0 B |           3 → 0 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:565`    |
|  -14.1% |     -3 MiB | 27.0% → 23.2% | 21.2 MiB → 18.2 MiB | 20,793 → 20,790 | `mark`                      | `black/brackets.py:70`              |
| removed |     -3 MiB |   3.8% → 0.0% |         3 MiB → 0 B |           3 → 0 | `is_split_before_delimiter` | `black/brackets.py:232`             |
| removed |     -2 MiB |   2.5% → 0.0% |         2 MiB → 0 B |           2 → 0 | `__init__`                  | `<string>:2`                        |
| removed |     -2 MiB |   2.5% → 0.0% |         2 MiB → 0 B |           2 → 0 | `line`                      | `black/linegen.py:109`              |
|   -9.0% | -1.999 MiB | 28.4% → 25.8% | 22.3 MiB → 20.3 MiB | 20,887 → 20,885 | `append`                    | `black/lines.py:63 → 52`            |
|  -25.0% |     -1 MiB |   5.1% → 3.8% |       4 MiB → 3 MiB |           8 → 7 | `pop`                       | `blib2to3/pgen2/parse.py:398 → 386` |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |           1 → 0 | `push`                      | `blib2to3/pgen2/parse.py:386`       |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__str__`                   | `black/lines.py:490`                |
|   -2.8% |     -1 MiB | 45.6% → 44.3% | 35.8 MiB → 34.8 MiB | 20,273 → 20,272 | `visit_funcdef`             | `black/linegen.py:254`              |
| removed |     -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |           1 → 0 | `pre_order`                 | `blib2to3/pytree.py:314`            |
|   -1.3% | -1.703 KiB |          0.2% |   133 KiB → 131 KiB |             138 | `<module>`                  | `black/linegen.py:1`                |
|   -5.3% | -1.703 KiB |         <0.1% |   32 KiB → 30.3 KiB |              32 | `<module>`                  | `black/trans.py:1`                  |
|     ~0% |  -1.46 KiB |          5.4% |            4.25 MiB |           1,240 | `<module>`                  | `black/__init__.py:1`               |
|  -15.1% |     -752 B |         <0.1% | 4.86 KiB → 4.13 KiB |               5 | `<module>`                  | `black/ranges.py:1`                 |
|     ~0% |     -274 B |          2.6% |            2.01 MiB |               8 | `_rhs`                      | `black/linegen.py:650`              |
|     ~0% |     -274 B |          2.6% |            2.01 MiB |              10 | `run_transformer`           | `black/linegen.py:1755 → 1771`      |

##### Standard library

|  Change |      Delta |            % |                Size |     Allocations | Function                    | Location                                      |
| ------: | ---------: | -----------: | ------------------: | --------------: | --------------------------- | --------------------------------------------- |
|  -98.6% |     -1 MiB | 1.3% → <0.1% | 1.01 MiB → 14.4 KiB |           6 → 5 | `parse`                     | `/usr/lib/python3.11/re/_parser.py:970`       |
|  -98.7% |     -1 MiB | 1.3% → <0.1% | 1.01 MiB → 13.6 KiB |           5 → 4 | `_parse_sub`                | `/usr/lib/python3.11/re/_parser.py:447`       |
|  -99.5% |     -1 MiB | 1.3% → <0.1% | 1.01 MiB → 5.61 KiB |           4 → 3 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507`       |
| removed |     -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__init__`                  | `/usr/lib/python3.11/re/_parser.py:109`       |
|     ~0% | -1.918 KiB |         5.5% |            4.29 MiB |   1,282 → 1,281 | `_get_module_details`       | `<frozen runpy>:105`                          |
|     ~0% | -1.918 KiB |         5.5% | 4.29 MiB → 4.28 MiB |   1,275 → 1,274 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|     ~0% | -1.918 KiB |  5.5% → 5.4% |            4.28 MiB |   1,273 → 1,272 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|     ~0% | -1.918 KiB |  5.5% → 5.4% |            4.28 MiB |   1,272 → 1,271 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|     ~0% | -1.918 KiB |         5.4% |            4.28 MiB |   1,270 → 1,269 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|     ~0% | -1.702 KiB |       100.0% |            78.6 MiB | 22,679 → 22,678 | `run_module`                | `<frozen runpy>:201`                          |
|     ~0% |  -1.46 KiB |         5.4% |            4.25 MiB |           1,240 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|     ~0% |     -213 B |         3.2% |            2.54 MiB |       604 → 603 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|     ~0% |     -213 B |         3.2% |            2.54 MiB |       604 → 603 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|     ~0% |       -8 B |         1.7% |            1.34 MiB |             319 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |

# Leaked memory profile diff

Leaked 59.9 MiB (-1.702 KiB, ~0%) over 22,485 allocations → 22,484 allocations (2.73 KiB per allocation).

| Category         | Change |      Delta |     % |     Size | Allocations |
| ---------------- | -----: | ---------: | ----: | -------: | ----------: |
| Ours             |    ~0% | -2.396 KiB | 88.2% | 52.9 MiB |      21,383 |
| Standard library |    ~0% |     +539 B | 11.4% | 6.82 MiB |   872 → 871 |
| Third-party      |  +0.1% |     +172 B |  0.4% |  237 KiB |         230 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes never freed directly in the function body, excluding callees.

|     Change |      Delta |             % |                Size | Allocations | Function                               | Location                                                      |
| ---------: | ---------: | ------------: | ------------------: | ----------: | -------------------------------------- | ------------------------------------------------------------- |
| +174762.7% |     +2 MiB |  <0.1% → 3.3% |    1.17 KiB → 2 MiB |       2 → 4 | `addtoken`                             | `blib2to3/pgen2/parse.py:242 → 230`                           |
|     +66.7% |     +2 MiB |   5.0% → 8.3% |       3 MiB → 5 MiB |       3 → 5 | `__new__`                              | `blib2to3/pytree.py:81 → 70`                                  |
|  +42077.7% |     +1 MiB |  <0.1% → 1.7% |    2.43 KiB → 1 MiB |       2 → 3 | `_compile`                             | `/usr/lib/python3.11/re/_compiler.py:37`                      |
|        new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `shift`                                | `blib2to3/pgen2/parse.py:373 → 361`                           |
|  +30552.9% |     +1 MiB |  <0.1% → 1.7% |    3.35 KiB → 1 MiB |       4 → 5 | `visit`                                | `black/nodes.py:163 → 152`                                    |
|  +45432.2% |     +1 MiB |  <0.1% → 1.7% |    2.25 KiB → 1 MiB |       3 → 4 | `visit_STRING`                         | `black/linegen.py:413`                                        |
|     +14.3% |     +1 MiB | 11.7% → 13.4% |       7 MiB → 8 MiB |       7 → 8 | `changed`                              | `blib2to3/pytree.py:171 → 160`                                |
|     +50.0% |     +1 MiB |   3.3% → 5.0% |       2 MiB → 3 MiB |       2 → 3 | `generate_comments`                    | `black/comments.py:52`                                        |
|        new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `is_complex_subscript`                 | `black/lines.py:441 → 430`                                    |
|    +100.0% |     +1 MiB |   1.7% → 3.3% |       1 MiB → 2 MiB |       1 → 2 | `_stringify_ast`                       | `black/parsing.py:174 → 182`                                  |
|    +703.4% |     +1 MiB |   0.2% → 1.9% |  146 KiB → 1.14 MiB |   195 → 196 | `update_sibling_maps`                  | `blib2to3/pytree.py:369 → 358`                                |
|        new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `comments_after`                       | `black/lines.py:418`                                          |
|        new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `contains_uncollapsable_type_comments` | `black/lines.py:265`                                          |
|        new |     +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `replace`                              | `/usr/lib/python3.11/dataclasses.py:1443`                     |
|     +22.0% | +1.484 KiB |         <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__`                          | `/usr/lib/python3.11/enum.py:831`                             |
|      +5.5% |     +172 B |         <0.1% | 3.04 KiB → 3.21 KiB |           2 | `new_func`                             | `/venv13/lib/python3.11/site-packages/click/decorators.py:33` |
|      +3.3% |     +104 B |         <0.1% |  3.1 KiB → 3.21 KiB |           4 | `_format_str_once`                     | `black/__init__.py:1236 → 1215`                               |
|      +1.5% |      +96 B |         <0.1% | 6.24 KiB → 6.33 KiB |           4 | `append`                               | `black/lines.py:63 → 52`                                      |
|      +5.5% |      +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |           1 | `get_cache_file`                       | `black/cache.py:50`                                           |
|     +10.1% |      +60 B |         <0.1% |       594 B → 654 B |           1 | `check_stability_and_equivalence`      | `black/__init__.py:1037 → 1042`                               |

##### Ours

|     Change |  Delta |             % |                Size | Allocations | Function                               | Location                            |
| ---------: | -----: | ------------: | ------------------: | ----------: | -------------------------------------- | ----------------------------------- |
| +174762.7% | +2 MiB |  <0.1% → 3.3% |    1.17 KiB → 2 MiB |       2 → 4 | `addtoken`                             | `blib2to3/pgen2/parse.py:242 → 230` |
|     +66.7% | +2 MiB |   5.0% → 8.3% |       3 MiB → 5 MiB |       3 → 5 | `__new__`                              | `blib2to3/pytree.py:81 → 70`        |
|        new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `shift`                                | `blib2to3/pgen2/parse.py:373 → 361` |
|  +30552.9% | +1 MiB |  <0.1% → 1.7% |    3.35 KiB → 1 MiB |       4 → 5 | `visit`                                | `black/nodes.py:163 → 152`          |
|  +45432.2% | +1 MiB |  <0.1% → 1.7% |    2.25 KiB → 1 MiB |       3 → 4 | `visit_STRING`                         | `black/linegen.py:413`              |
|     +14.3% | +1 MiB | 11.7% → 13.4% |       7 MiB → 8 MiB |       7 → 8 | `changed`                              | `blib2to3/pytree.py:171 → 160`      |
|     +50.0% | +1 MiB |   3.3% → 5.0% |       2 MiB → 3 MiB |       2 → 3 | `generate_comments`                    | `black/comments.py:52`              |
|        new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `is_complex_subscript`                 | `black/lines.py:441 → 430`          |
|    +100.0% | +1 MiB |   1.7% → 3.3% |       1 MiB → 2 MiB |       1 → 2 | `_stringify_ast`                       | `black/parsing.py:174 → 182`        |
|    +703.4% | +1 MiB |   0.2% → 1.9% |  146 KiB → 1.14 MiB |   195 → 196 | `update_sibling_maps`                  | `blib2to3/pytree.py:369 → 358`      |
|        new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `comments_after`                       | `black/lines.py:418`                |
|        new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `contains_uncollapsable_type_comments` | `black/lines.py:265`                |
|      +3.3% | +104 B |         <0.1% |  3.1 KiB → 3.21 KiB |           4 | `_format_str_once`                     | `black/__init__.py:1236 → 1215`     |
|      +1.5% |  +96 B |         <0.1% | 6.24 KiB → 6.33 KiB |           4 | `append`                               | `black/lines.py:63 → 52`            |
|      +5.5% |  +64 B |         <0.1% | 1.13 KiB → 1.19 KiB |           1 | `get_cache_file`                       | `black/cache.py:50`                 |
|     +10.1% |  +60 B |         <0.1% |       594 B → 654 B |           1 | `check_stability_and_equivalence`      | `black/__init__.py:1037 → 1042`     |

##### Standard library

|    Change |      Delta |            % |                Size | Allocations | Function      | Location                                  |
| --------: | ---------: | -----------: | ------------------: | ----------: | ------------- | ----------------------------------------- |
| +42077.7% |     +1 MiB | <0.1% → 1.7% |    2.43 KiB → 1 MiB |       2 → 3 | `_compile`    | `/usr/lib/python3.11/re/_compiler.py:37`  |
|       new |     +1 MiB |  0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `replace`     | `/usr/lib/python3.11/dataclasses.py:1443` |
|    +22.0% | +1.484 KiB |        <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__` | `/usr/lib/python3.11/enum.py:831`         |

#### Improvements

Functions with the largest decrease in bytes never freed directly in the function body, excluding callees.

|  Change |      Delta |            % |                Size | Allocations | Function                    | Location                                     |
| ------: | ---------: | -----------: | ------------------: | ----------: | --------------------------- | -------------------------------------------- |
| removed |     -3 MiB |  5.0% → 0.0% |         3 MiB → 0 B |       3 → 0 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:565`             |
| removed |     -3 MiB |  5.0% → 0.0% |         3 MiB → 0 B |       3 → 0 | `is_split_before_delimiter` | `black/brackets.py:232`                      |
| removed |     -2 MiB |  3.3% → 0.0% |         2 MiB → 0 B |       2 → 0 | `__init__`                  | `<string>:2`                                 |
|  -99.9% |     -1 MiB | 1.7% → <0.1% |       1 MiB → 784 B |       2 → 1 | `_first_right_hand_split`   | `black/linegen.py:829`                       |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`                  | `/usr/lib/python3.11/re/_parser.py:109`      |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `_addtoken`                 | `blib2to3/pgen2/parse.py:290 → 278`          |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `push`                      | `blib2to3/pgen2/parse.py:386`                |
|  -99.9% |     -1 MiB | 1.7% → <0.1% |    1 MiB → 1.09 KiB |       2 → 1 | `_rhs`                      | `black/linegen.py:650`                       |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__str__`                   | `black/lines.py:490`                         |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `pre_order`                 | `blib2to3/pytree.py:314`                     |
|  -33.3% |     -1 MiB |  5.0% → 3.3% | 3.01 MiB → 2.01 MiB |       4 → 3 | `parse`                     | `/usr/lib/python3.11/ast.py:33`              |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                  | `black/trans.py:1`                           |
|   -3.3% |     -768 B |        <0.1% |   23 KiB → 22.2 KiB |     26 → 25 | `__new__`                   | `/usr/lib/python3.11/enum.py:488`            |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                  | `black/ranges.py:1`                          |
|     ~0% |     -213 B |         4.2% |            2.54 MiB |   604 → 603 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727` |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                  | `blib2to3/pgen2/tokenize.py:1`               |

##### Ours

|  Change |      Delta |            % |                Size | Allocations | Function                    | Location                            |
| ------: | ---------: | -----------: | ------------------: | ----------: | --------------------------- | ----------------------------------- |
| removed |     -3 MiB |  5.0% → 0.0% |         3 MiB → 0 B |       3 → 0 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:565`    |
| removed |     -3 MiB |  5.0% → 0.0% |         3 MiB → 0 B |       3 → 0 | `is_split_before_delimiter` | `black/brackets.py:232`             |
| removed |     -2 MiB |  3.3% → 0.0% |         2 MiB → 0 B |       2 → 0 | `__init__`                  | `<string>:2`                        |
|  -99.9% |     -1 MiB | 1.7% → <0.1% |       1 MiB → 784 B |       2 → 1 | `_first_right_hand_split`   | `black/linegen.py:829`              |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `_addtoken`                 | `blib2to3/pgen2/parse.py:290 → 278` |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `push`                      | `blib2to3/pgen2/parse.py:386`       |
|  -99.9% |     -1 MiB | 1.7% → <0.1% |    1 MiB → 1.09 KiB |       2 → 1 | `_rhs`                      | `black/linegen.py:650`              |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__str__`                   | `black/lines.py:490`                |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `pre_order`                 | `blib2to3/pytree.py:314`            |
|  -16.8% | -1.703 KiB |        <0.1% | 10.1 KiB → 8.42 KiB |           9 | `<module>`                  | `black/trans.py:1`                  |
|  -15.1% |     -752 B |        <0.1% | 4.86 KiB → 4.13 KiB |           5 | `<module>`                  | `black/ranges.py:1`                 |
|     ~0% |       -8 B |        <0.1% |            20.7 KiB |          14 | `<module>`                  | `blib2to3/pgen2/tokenize.py:1`      |

##### Standard library

|  Change |  Delta |           % |                Size | Allocations | Function            | Location                                     |
| ------: | -----: | ----------: | ------------------: | ----------: | ------------------- | -------------------------------------------- |
| removed | -1 MiB | 1.7% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__init__`          | `/usr/lib/python3.11/re/_parser.py:109`      |
|  -33.3% | -1 MiB | 5.0% → 3.3% | 3.01 MiB → 2.01 MiB |       4 → 3 | `parse`             | `/usr/lib/python3.11/ast.py:33`              |
|   -3.3% | -768 B |       <0.1% |   23 KiB → 22.2 KiB |     26 → 25 | `__new__`           | `/usr/lib/python3.11/enum.py:488`            |
|     ~0% | -213 B |        4.2% |            2.54 MiB |   604 → 603 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

### Total size

#### Regressions

Functions with the largest increase in total bytes never freed in the function and all its callees.

|     Change |  Delta |             % |                Size | Allocations | Function                                | Location                                  |
| ---------: | -----: | ------------: | ------------------: | ----------: | --------------------------------------- | ----------------------------------------- |
|        new | +8 MiB |  0.0% → 13.4% |         0 B → 8 MiB |       0 → 8 | `prefix`                                | `blib2to3/pytree.py:469`                  |
|    +133.3% | +4 MiB |  5.0% → 11.7% |       3 MiB → 7 MiB |       3 → 7 | `shift`                                 | `blib2to3/pgen2/parse.py:373 → 361`       |
|     +33.2% | +3 MiB | 15.1% → 20.1% |   9.04 MiB → 12 MiB |     16 → 19 | `addtoken`                              | `blib2to3/pgen2/parse.py:242 → 230`       |
|     +40.0% | +2 MiB |  8.3% → 11.7% |       5 MiB → 7 MiB |      9 → 11 | `convert`                               | `blib2to3/pytree.py:486 → 475`            |
|     +66.7% | +2 MiB |   5.0% → 8.3% |       3 MiB → 5 MiB |       3 → 5 | `__new__`                               | `blib2to3/pytree.py:81 → 70`              |
|  +10781.2% | +1 MiB |  <0.1% → 1.7% |  9.5 KiB → 1.01 MiB |       6 → 7 | `_code`                                 | `/usr/lib/python3.11/re/_compiler.py:571` |
|  +42077.7% | +1 MiB |  <0.1% → 1.7% |    2.43 KiB → 1 MiB |       2 → 3 | `_compile`                              | `/usr/lib/python3.11/re/_compiler.py:37`  |
|     +11.1% | +1 MiB | 15.0% → 16.7% |      9 MiB → 10 MiB |     13 → 14 | `_addtoken`                             | `blib2to3/pgen2/parse.py:290 → 278`       |
|    +146.6% | +1 MiB |   1.1% → 2.8% |  698 KiB → 1.68 MiB |   900 → 901 | `visit_STRING`                          | `black/linegen.py:413`                    |
|  +88712.0% | +1 MiB |  <0.1% → 1.7% |    1.15 KiB → 1 MiB |       1 → 2 | `normalize_invisible_parens`            | `black/linegen.py:1328 → 1344`            |
| +169672.5% | +1 MiB |  <0.1% → 1.7% |       618 B → 1 MiB |       1 → 2 | `bracket_split_build_line`              | `black/linegen.py:1082 → 1123`            |
| +104857.6% | +1 MiB |  <0.1% → 1.7% |     1,000 B → 1 MiB |       1 → 2 | `_maybe_split_omitting_optional_parens` | `black/linegen.py:932`                    |
|     +14.3% | +1 MiB | 11.7% → 13.4% |       7 MiB → 8 MiB |       7 → 8 | `changed`                               | `blib2to3/pytree.py:171 → 160`            |
|     +11.1% | +1 MiB | 15.0% → 16.7% |      9 MiB → 10 MiB |      9 → 10 | `generate_comments`                     | `black/comments.py:52`                    |
|    +100.0% | +1 MiB |   1.7% → 3.3% |       1 MiB → 2 MiB |       1 → 2 | `_stringify_ast`                        | `black/parsing.py:174 → 182`              |
|    +100.0% | +1 MiB |   1.7% → 3.3% |       1 MiB → 2 MiB |       1 → 2 | `_stringify_ast_with_new_parent`        | `black/parsing.py:166 → 174`              |
|    +703.4% | +1 MiB |   0.2% → 1.9% |  146 KiB → 1.14 MiB |   195 → 196 | `update_sibling_maps`                   | `blib2to3/pytree.py:369 → 358`            |
|    +703.4% | +1 MiB |   0.2% → 1.9% |  146 KiB → 1.14 MiB |   195 → 196 | `prev_sibling`                          | `blib2to3/pytree.py:207 → 196`            |
|   +1838.6% | +1 MiB |   0.1% → 1.8% | 55.7 KiB → 1.05 MiB |     89 → 90 | `whitespace`                            | `black/nodes.py:194 → 183`                |
|   +2719.3% | +1 MiB |   0.1% → 1.7% | 37.7 KiB → 1.04 MiB |     66 → 67 | `preceding_leaf`                        | `black/nodes.py:441 → 436`                |

##### Ours

|     Change |  Delta |             % |                Size | Allocations | Function                                | Location                            |
| ---------: | -----: | ------------: | ------------------: | ----------: | --------------------------------------- | ----------------------------------- |
|        new | +8 MiB |  0.0% → 13.4% |         0 B → 8 MiB |       0 → 8 | `prefix`                                | `blib2to3/pytree.py:469`            |
|    +133.3% | +4 MiB |  5.0% → 11.7% |       3 MiB → 7 MiB |       3 → 7 | `shift`                                 | `blib2to3/pgen2/parse.py:373 → 361` |
|     +33.2% | +3 MiB | 15.1% → 20.1% |   9.04 MiB → 12 MiB |     16 → 19 | `addtoken`                              | `blib2to3/pgen2/parse.py:242 → 230` |
|     +40.0% | +2 MiB |  8.3% → 11.7% |       5 MiB → 7 MiB |      9 → 11 | `convert`                               | `blib2to3/pytree.py:486 → 475`      |
|     +66.7% | +2 MiB |   5.0% → 8.3% |       3 MiB → 5 MiB |       3 → 5 | `__new__`                               | `blib2to3/pytree.py:81 → 70`        |
|     +11.1% | +1 MiB | 15.0% → 16.7% |      9 MiB → 10 MiB |     13 → 14 | `_addtoken`                             | `blib2to3/pgen2/parse.py:290 → 278` |
|    +146.6% | +1 MiB |   1.1% → 2.8% |  698 KiB → 1.68 MiB |   900 → 901 | `visit_STRING`                          | `black/linegen.py:413`              |
|  +88712.0% | +1 MiB |  <0.1% → 1.7% |    1.15 KiB → 1 MiB |       1 → 2 | `normalize_invisible_parens`            | `black/linegen.py:1328 → 1344`      |
| +169672.5% | +1 MiB |  <0.1% → 1.7% |       618 B → 1 MiB |       1 → 2 | `bracket_split_build_line`              | `black/linegen.py:1082 → 1123`      |
| +104857.6% | +1 MiB |  <0.1% → 1.7% |     1,000 B → 1 MiB |       1 → 2 | `_maybe_split_omitting_optional_parens` | `black/linegen.py:932`              |
|     +14.3% | +1 MiB | 11.7% → 13.4% |       7 MiB → 8 MiB |       7 → 8 | `changed`                               | `blib2to3/pytree.py:171 → 160`      |
|     +11.1% | +1 MiB | 15.0% → 16.7% |      9 MiB → 10 MiB |      9 → 10 | `generate_comments`                     | `black/comments.py:52`              |
|    +100.0% | +1 MiB |   1.7% → 3.3% |       1 MiB → 2 MiB |       1 → 2 | `_stringify_ast`                        | `black/parsing.py:174 → 182`        |
|    +100.0% | +1 MiB |   1.7% → 3.3% |       1 MiB → 2 MiB |       1 → 2 | `_stringify_ast_with_new_parent`        | `black/parsing.py:166 → 174`        |
|    +703.4% | +1 MiB |   0.2% → 1.9% |  146 KiB → 1.14 MiB |   195 → 196 | `update_sibling_maps`                   | `blib2to3/pytree.py:369 → 358`      |
|    +703.4% | +1 MiB |   0.2% → 1.9% |  146 KiB → 1.14 MiB |   195 → 196 | `prev_sibling`                          | `blib2to3/pytree.py:207 → 196`      |
|   +1838.6% | +1 MiB |   0.1% → 1.8% | 55.7 KiB → 1.05 MiB |     89 → 90 | `whitespace`                            | `black/nodes.py:194 → 183`          |
|   +2719.3% | +1 MiB |   0.1% → 1.7% | 37.7 KiB → 1.04 MiB |     66 → 67 | `preceding_leaf`                        | `black/nodes.py:441 → 436`          |
|        new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `comments_after`                        | `black/lines.py:418`                |
|        new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `wrap_in_parentheses`                   | `black/nodes.py:930`                |

##### Standard library

|    Change |      Delta |            % |                Size | Allocations | Function           | Location                                  |
| --------: | ---------: | -----------: | ------------------: | ----------: | ------------------ | ----------------------------------------- |
| +10781.2% |     +1 MiB | <0.1% → 1.7% |  9.5 KiB → 1.01 MiB |       6 → 7 | `_code`            | `/usr/lib/python3.11/re/_compiler.py:571` |
| +42077.7% |     +1 MiB | <0.1% → 1.7% |    2.43 KiB → 1 MiB |       2 → 3 | `_compile`         | `/usr/lib/python3.11/re/_compiler.py:37`  |
|       new |     +1 MiB |  0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `replace`          | `/usr/lib/python3.11/dataclasses.py:1443` |
|    +22.0% | +1.484 KiB |        <0.1% | 6.73 KiB → 8.22 KiB |       8 → 9 | `__setattr__`      | `/usr/lib/python3.11/enum.py:831`         |
|     +2.3% |     +752 B |         0.1% | 31.4 KiB → 32.1 KiB |          37 | `__new__`          | `/usr/lib/python3.11/enum.py:488`         |
|       ~0% |     +222 B |        92.9% |            55.7 MiB |      21,202 | `_run_code`        | `<frozen runpy>:65`                       |
|       ~0% |     +222 B |        92.9% |            55.7 MiB |      21,202 | `_run_module_code` | `<frozen runpy>:91`                       |

#### Improvements

Functions with the largest decrease in total bytes never freed in the function and all its callees.

|  Change |      Delta |             % |                Size |     Allocations | Function                    | Location                                |
| ------: | ---------: | ------------: | ------------------: | --------------: | --------------------------- | --------------------------------------- |
|  -85.7% |     -6 MiB |  11.7% → 1.7% |       7 MiB → 1 MiB |           7 → 1 | `prefix`                    | `blib2to3/pytree.py:480 → 318`          |
|  -13.9% | -3.999 MiB | 48.1% → 41.4% | 28.8 MiB → 24.8 MiB | 13,407 → 13,403 | `visit_simple_stmt`         | `black/linegen.py:295`                  |
|  -99.7% |     -3 MiB |  5.0% → <0.1% | 3.01 MiB → 8.27 KiB |           4 → 1 | `__next__`                  | `blib2to3/pgen2/driver.py:80`           |
| removed |     -3 MiB |   5.0% → 0.0% |         3 MiB → 0 B |           3 → 0 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:565`        |
|  -14.1% |     -3 MiB | 35.4% → 30.4% | 21.2 MiB → 18.2 MiB | 20,793 → 20,790 | `mark`                      | `black/brackets.py:70`                  |
| removed |     -3 MiB |   5.0% → 0.0% |         3 MiB → 0 B |           3 → 0 | `is_split_before_delimiter` | `black/brackets.py:232`                 |
| removed |     -2 MiB |   3.3% → 0.0% |         2 MiB → 0 B |           2 → 0 | `__init__`                  | `<string>:2`                            |
| removed |     -2 MiB |   3.3% → 0.0% |         2 MiB → 0 B |           2 → 0 | `line`                      | `black/linegen.py:109`                  |
|   -9.0% | -1.999 MiB | 37.2% → 33.9% | 22.3 MiB → 20.3 MiB | 20,887 → 20,885 | `append`                    | `black/lines.py:63 → 52`                |
|  -98.6% |     -1 MiB |  1.7% → <0.1% | 1.01 MiB → 14.4 KiB |           6 → 5 | `parse`                     | `/usr/lib/python3.11/re/_parser.py:970` |
|  -98.7% |     -1 MiB |  1.7% → <0.1% | 1.01 MiB → 13.6 KiB |           5 → 4 | `_parse_sub`                | `/usr/lib/python3.11/re/_parser.py:447` |
|  -99.5% |     -1 MiB |  1.7% → <0.1% | 1.01 MiB → 5.61 KiB |           4 → 3 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507` |
| removed |     -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__init__`                  | `/usr/lib/python3.11/re/_parser.py:109` |
|  -25.0% |     -1 MiB |   6.7% → 5.0% |       4 MiB → 3 MiB |           8 → 7 | `pop`                       | `blib2to3/pgen2/parse.py:398 → 386`     |
| removed |     -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `push`                      | `blib2to3/pgen2/parse.py:386`           |
| removed |     -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__str__`                   | `black/lines.py:490`                    |
|   -2.8% |     -1 MiB | 59.8% → 58.1% | 35.8 MiB → 34.8 MiB | 20,273 → 20,272 | `visit_funcdef`             | `black/linegen.py:254`                  |
| removed |     -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `pre_order`                 | `blib2to3/pytree.py:314`                |
|  -33.3% |     -1 MiB |   5.0% → 3.3% | 3.01 MiB → 2.01 MiB |           4 → 3 | `parse`                     | `/usr/lib/python3.11/ast.py:33`         |
|  -33.3% |     -1 MiB |   5.0% → 3.3% | 3.01 MiB → 2.01 MiB |           4 → 3 | `_parse_single_version`     | `black/parsing.py:117 → 125`            |

##### Ours

|  Change |      Delta |             % |                Size |     Allocations | Function                    | Location                            |
| ------: | ---------: | ------------: | ------------------: | --------------: | --------------------------- | ----------------------------------- |
|  -85.7% |     -6 MiB |  11.7% → 1.7% |       7 MiB → 1 MiB |           7 → 1 | `prefix`                    | `blib2to3/pytree.py:480 → 318`      |
|  -13.9% | -3.999 MiB | 48.1% → 41.4% | 28.8 MiB → 24.8 MiB | 13,407 → 13,403 | `visit_simple_stmt`         | `black/linegen.py:295`              |
|  -99.7% |     -3 MiB |  5.0% → <0.1% | 3.01 MiB → 8.27 KiB |           4 → 1 | `__next__`                  | `blib2to3/pgen2/driver.py:80`       |
| removed |     -3 MiB |   5.0% → 0.0% |         3 MiB → 0 B |           3 → 0 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py:565`    |
|  -14.1% |     -3 MiB | 35.4% → 30.4% | 21.2 MiB → 18.2 MiB | 20,793 → 20,790 | `mark`                      | `black/brackets.py:70`              |
| removed |     -3 MiB |   5.0% → 0.0% |         3 MiB → 0 B |           3 → 0 | `is_split_before_delimiter` | `black/brackets.py:232`             |
| removed |     -2 MiB |   3.3% → 0.0% |         2 MiB → 0 B |           2 → 0 | `__init__`                  | `<string>:2`                        |
| removed |     -2 MiB |   3.3% → 0.0% |         2 MiB → 0 B |           2 → 0 | `line`                      | `black/linegen.py:109`              |
|   -9.0% | -1.999 MiB | 37.2% → 33.9% | 22.3 MiB → 20.3 MiB | 20,887 → 20,885 | `append`                    | `black/lines.py:63 → 52`            |
|  -25.0% |     -1 MiB |   6.7% → 5.0% |       4 MiB → 3 MiB |           8 → 7 | `pop`                       | `blib2to3/pgen2/parse.py:398 → 386` |
| removed |     -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `push`                      | `blib2to3/pgen2/parse.py:386`       |
| removed |     -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__str__`                   | `black/lines.py:490`                |
|   -2.8% |     -1 MiB | 59.8% → 58.1% | 35.8 MiB → 34.8 MiB | 20,273 → 20,272 | `visit_funcdef`             | `black/linegen.py:254`              |
| removed |     -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `pre_order`                 | `blib2to3/pytree.py:314`            |
|  -33.3% |     -1 MiB |   5.0% → 3.3% | 3.01 MiB → 2.01 MiB |           4 → 3 | `_parse_single_version`     | `black/parsing.py:117 → 125`        |
|  -33.3% |     -1 MiB |   5.0% → 3.3% | 3.01 MiB → 2.01 MiB |           4 → 3 | `parse_ast`                 | `black/parsing.py:129 → 137`        |
|   -1.3% | -1.703 KiB |          0.2% |   133 KiB → 131 KiB |             138 | `<module>`                  | `black/linegen.py:1`                |
|   -5.3% | -1.703 KiB |  0.1% → <0.1% |   32 KiB → 30.3 KiB |              32 | `<module>`                  | `black/trans.py:1`                  |
|     ~0% |  -1.46 KiB |          7.0% |            4.21 MiB |           1,239 | `<module>`                  | `black/__init__.py:1`               |
|  -15.1% |     -752 B |         <0.1% | 4.86 KiB → 4.13 KiB |               5 | `<module>`                  | `black/ranges.py:1`                 |

##### Standard library

|  Change |      Delta |            % |                Size |     Allocations | Function                    | Location                                      |
| ------: | ---------: | -----------: | ------------------: | --------------: | --------------------------- | --------------------------------------------- |
|  -98.6% |     -1 MiB | 1.7% → <0.1% | 1.01 MiB → 14.4 KiB |           6 → 5 | `parse`                     | `/usr/lib/python3.11/re/_parser.py:970`       |
|  -98.7% |     -1 MiB | 1.7% → <0.1% | 1.01 MiB → 13.6 KiB |           5 → 4 | `_parse_sub`                | `/usr/lib/python3.11/re/_parser.py:447`       |
|  -99.5% |     -1 MiB | 1.7% → <0.1% | 1.01 MiB → 5.61 KiB |           4 → 3 | `_parse`                    | `/usr/lib/python3.11/re/_parser.py:507`       |
| removed |     -1 MiB |  1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__init__`                  | `/usr/lib/python3.11/re/_parser.py:109`       |
|  -33.3% |     -1 MiB |  5.0% → 3.3% | 3.01 MiB → 2.01 MiB |           4 → 3 | `parse`                     | `/usr/lib/python3.11/ast.py:33`               |
|     ~0% | -1.918 KiB |         7.1% | 4.26 MiB → 4.25 MiB |   1,281 → 1,280 | `_get_module_details`       | `<frozen runpy>:105`                          |
|     ~0% | -1.918 KiB |         7.1% |            4.25 MiB |   1,274 → 1,273 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|     ~0% | -1.918 KiB |         7.1% |            4.25 MiB |   1,272 → 1,271 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|     ~0% | -1.918 KiB |         7.1% |            4.25 MiB |   1,271 → 1,270 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|     ~0% | -1.918 KiB |         7.1% | 4.25 MiB → 4.24 MiB |   1,269 → 1,268 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|     ~0% | -1.702 KiB |       100.0% |            59.9 MiB | 22,484 → 22,483 | `run_module`                | `<frozen runpy>:201`                          |
|     ~0% |  -1.46 KiB |         7.0% |            4.21 MiB |           1,239 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|     ~0% |     -213 B |         4.2% |            2.54 MiB |       604 → 603 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|     ~0% |     -213 B |         4.2% |            2.54 MiB |       604 → 603 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|     ~0% |       -8 B |         2.2% |             1.3 MiB |             318 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |

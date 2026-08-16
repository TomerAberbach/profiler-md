# Peak memory profile diff

Held 78.6 MiB over 22,694 allocations (3.55 KiB per allocation).

| Category         | Change | Delta |     % |     Size | Allocations |
| ---------------- | -----: | ----: | ----: | -------: | ----------: |
| Ours             |   0.0% |   0 B | 81.6% | 64.2 MiB |      21,445 |
| Standard library |   0.0% |   0 B | 16.7% | 13.2 MiB |       1,015 |
| Third-party      |   0.0% |   0 B |  1.6% | 1.27 MiB |         234 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes held at peak memory directly in the function body, excluding callees.

##### Ours

|    Change |  Delta |             % |                Size |     Allocations | Function              | Location                 |
| --------: | -----: | ------------: | ------------------: | --------------: | --------------------- | ------------------------ |
|   +200.0% | +2 MiB |   1.3% → 3.8% |       1 MiB → 3 MiB |           1 → 3 | `prefix`              | `blib2to3/pytree.py:480` |
|    +32.8% | +1 MiB |   3.9% → 5.1% | 3.05 MiB → 4.05 MiB |         59 → 60 | `_stringify_ast`      | `black/parsing.py:174`   |
|     +5.8% | +1 MiB | 21.9% → 23.2% | 17.2 MiB → 18.2 MiB | 20,789 → 20,790 | `mark`                | `black/brackets.py:70`   |
| +30552.9% | +1 MiB |  <0.1% → 1.3% |    3.35 KiB → 1 MiB |           4 → 5 | `visit`               | `black/nodes.py:163`     |
|    +16.3% | +1 MiB |   7.8% → 9.1% | 6.14 MiB → 7.14 MiB |       201 → 202 | `update_sibling_maps` | `blib2to3/pytree.py:369` |
|    +16.7% | +1 MiB |   7.6% → 8.9% |       6 MiB → 7 MiB |           6 → 7 | `changed`             | `blib2to3/pytree.py:171` |
|   +100.0% | +1 MiB |   1.3% → 2.5% |       1 MiB → 2 MiB |           1 → 2 | `generate_comments`   | `black/comments.py:52`   |

#### Improvements

Functions with the largest decrease in bytes held at peak memory directly in the function body, excluding callees.

##### Ours

|  Change |  Delta |            % |          Size | Allocations | Function                         | Location                |
| ------: | -----: | -----------: | ------------: | ----------: | -------------------------------- | ----------------------- |
|  -75.0% | -3 MiB |  5.1% → 1.3% | 4 MiB → 1 MiB |       4 → 1 | `__init__`                       | `<string>:2`            |
| -100.0% | -2 MiB | 2.5% → <0.1% | 2 MiB → 702 B |       3 → 1 | `visit_default`                  | `black/linegen.py:134`  |
|  -33.3% | -1 MiB |  3.8% → 2.5% | 3 MiB → 2 MiB |       3 → 2 | `_stringify_ast_with_new_parent` | `black/parsing.py:166`  |
| removed | -1 MiB |  1.3% → 0.0% |   1 MiB → 0 B |       1 → 0 | `__str__`                        | `black/lines.py:490`    |
|  -14.3% | -1 MiB |  8.9% → 7.6% | 7 MiB → 6 MiB |       7 → 6 | `__new__`                        | `blib2to3/pytree.py:81` |

### Total size

#### Regressions

Functions with the largest increase in total bytes held at peak memory in the function and all its callees.

##### Ours

|   Change |  Delta |             % |                Size |     Allocations | Function                    | Location                 |
| -------: | -----: | ------------: | ------------------: | --------------: | --------------------------- | ------------------------ |
|   +16.5% | +4 MiB | 30.9% → 36.0% | 24.3 MiB → 28.3 MiB | 20,889 → 20,893 | `append`                    | `black/lines.py:63`      |
|    +8.2% | +3 MiB | 46.4% → 50.2% | 36.4 MiB → 39.4 MiB | 21,085 → 21,088 | `visit_default`             | `black/linegen.py:134`   |
|    +8.2% | +3 MiB | 46.4% → 50.2% | 36.4 MiB → 39.4 MiB | 21,087 → 21,090 | `visit`                     | `black/nodes.py:163`     |
|    +8.2% | +3 MiB | 46.4% → 50.2% | 36.4 MiB → 39.4 MiB | 21,085 → 21,088 | `visit_default`             | `black/nodes.py:187`     |
|    +8.3% | +3 MiB | 46.0% → 49.8% | 36.2 MiB → 39.2 MiB | 20,714 → 20,717 | `visit_stmt`                | `black/linegen.py:199`   |
|   +42.9% | +3 MiB |  8.9% → 12.7% |      7 MiB → 10 MiB |          7 → 10 | `prefix`                    | `blib2to3/pytree.py:480` |
|   +33.3% | +2 MiB |  7.6% → 10.2% |       6 MiB → 8 MiB |           6 → 8 | `generate_comments`         | `black/comments.py:52`   |
|    +5.8% | +1 MiB | 21.9% → 23.2% | 17.2 MiB → 18.2 MiB | 20,789 → 20,790 | `mark`                      | `black/brackets.py:70`   |
|    +5.9% | +1 MiB | 21.5% → 22.8% | 16.9 MiB → 17.9 MiB | 10,808 → 10,809 | `visit_power`               | `black/linegen.py:341`   |
|  +393.5% | +1 MiB |   0.3% → 1.6% |  260 KiB → 1.25 MiB |       347 → 348 | `visit_factor`              | `black/linegen.py:379`   |
|    +2.8% | +1 MiB | 45.5% → 46.7% | 35.7 MiB → 36.7 MiB | 20,147 → 20,148 | `visit_suite`               | `black/linegen.py:288`   |
|    +2.8% | +1 MiB | 45.6% → 46.9% | 35.8 MiB → 36.8 MiB | 20,273 → 20,274 | `visit_funcdef`             | `black/linegen.py:254`   |
|   +16.3% | +1 MiB |   7.8% → 9.1% | 6.14 MiB → 7.14 MiB |       201 → 202 | `update_sibling_maps`       | `blib2to3/pytree.py:369` |
|   +16.3% | +1 MiB |   7.8% → 9.1% | 6.14 MiB → 7.14 MiB |       201 → 202 | `prev_sibling`              | `blib2to3/pytree.py:207` |
|   +16.5% | +1 MiB |   7.7% → 9.0% | 6.05 MiB → 7.05 MiB |         95 → 96 | `whitespace`                | `black/nodes.py:194`     |
| +2719.3% | +1 MiB |  <0.1% → 1.3% | 37.7 KiB → 1.04 MiB |         66 → 67 | `preceding_leaf`            | `black/nodes.py:441`     |
|   +16.7% | +1 MiB |   7.6% → 8.9% |       6 MiB → 7 MiB |           6 → 7 | `changed`                   | `blib2to3/pytree.py:171` |
|   +20.0% | +1 MiB |   6.4% → 7.6% |       5 MiB → 6 MiB |           5 → 6 | `normalize_trailing_prefix` | `black/comments.py:127`  |

#### Improvements

Functions with the largest decrease in total bytes held at peak memory in the function and all its callees.

##### Ours

|  Change |  Delta |            % |                Size | Allocations | Function                            | Location                 |
| ------: | -----: | -----------: | ------------------: | ----------: | ----------------------------------- | ------------------------ |
|  -75.0% | -3 MiB |  5.1% → 1.3% |       4 MiB → 1 MiB |       4 → 1 | `__init__`                          | `<string>:2`             |
|  -99.6% | -3 MiB | 3.8% → <0.1% | 3.01 MiB → 12.2 KiB |     15 → 12 | `transform_line`                    | `black/linegen.py:601`   |
|  -66.7% | -2 MiB |  3.8% → 1.3% |       3 MiB → 1 MiB |       3 → 1 | `line`                              | `black/linegen.py:109`   |
|  -99.6% | -2 MiB | 2.6% → <0.1% |  2.01 MiB → 8.6 KiB |      10 → 8 | `run_transformer`                   | `black/linegen.py:1755`  |
| removed | -2 MiB |  2.5% → 0.0% |         2 MiB → 0 B |       2 → 0 | `visit_INDENT`                      | `black/linegen.py:179`   |
|  -92.9% | -1 MiB |  1.4% → 0.1% |   1.08 MiB → 78 KiB |   105 → 104 | `visit_test`                        | `black/linegen.py:160`   |
| removed | -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `__str__`                           | `black/lines.py:490`     |
| removed | -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `line_to_string`                    | `black/lines.py:1073`    |
|  -14.3% | -1 MiB |  8.9% → 7.6% |       7 MiB → 6 MiB |       7 → 6 | `__new__`                           | `blib2to3/pytree.py:81`  |
|  -99.9% | -1 MiB | 1.3% → <0.1% |       1 MiB → 802 B |       2 → 1 | `_hugging_power_ops_line_to_string` | `black/linegen.py:590`   |
|  -99.9% | -1 MiB | 1.3% → <0.1% |    1 MiB → 1.39 KiB |       2 → 1 | `split_wrapper`                     | `black/linegen.py:1162`  |
| removed | -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `clone`                             | `blib2to3/pytree.py:452` |
| removed | -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `hug_power_op`                      | `black/trans.py:85`      |
| removed | -1 MiB |  1.3% → 0.0% |         1 MiB → 0 B |       1 → 0 | `delimiter_split`                   | `black/linegen.py:1203`  |

# Leaked memory profile diff

Leaked 55.9 MiB over 22,489 allocations (2.55 KiB per allocation).

| Category         | Change | Delta |     % |     Size | Allocations |
| ---------------- | -----: | ----: | ----: | -------: | ----------: |
| Ours             |   0.0% |   0 B | 85.6% | 47.9 MiB |      21,383 |
| Standard library |   0.0% |   0 B | 12.2% | 6.83 MiB |         876 |
| Third-party      |   0.0% |   0 B |  2.2% | 1.23 MiB |         230 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes never freed directly in the function body, excluding callees.

##### Ours

|    Change |  Delta |             % |                Size |     Allocations | Function              | Location                 |
| --------: | -----: | ------------: | ------------------: | --------------: | --------------------- | ------------------------ |
|   +200.0% | +2 MiB |   1.8% → 5.4% |       1 MiB → 3 MiB |           1 → 3 | `generate_comments`   | `black/comments.py:52`   |
|     +6.2% | +1 MiB | 29.0% → 30.8% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                | `black/brackets.py:70`   |
| +30552.9% | +1 MiB |  <0.1% → 1.8% |    3.35 KiB → 1 MiB |           4 → 5 | `visit`               | `black/nodes.py:163`     |
|    +19.4% | +1 MiB |  9.2% → 11.0% | 5.14 MiB → 6.14 MiB |       200 → 201 | `update_sibling_maps` | `blib2to3/pytree.py:369` |
|    +20.0% | +1 MiB |  8.9% → 10.7% |       5 MiB → 6 MiB |           5 → 6 | `changed`             | `blib2to3/pytree.py:171` |
|   +100.0% | +1 MiB |   1.8% → 3.6% |       1 MiB → 2 MiB |           1 → 2 | `prefix`              | `blib2to3/pytree.py:480` |
|       new | +1 MiB |   0.0% → 1.8% |         0 B → 1 MiB |           0 → 1 | `_stringify_ast`      | `black/parsing.py:174`   |

#### Improvements

Functions with the largest decrease in bytes never freed directly in the function body, excluding callees.

##### Ours

|  Change |  Delta |             % |                Size | Allocations | Function                         | Location                 |
| ------: | -----: | ------------: | ------------------: | ----------: | -------------------------------- | ------------------------ |
| -100.0% | -2 MiB |  3.6% → <0.1% |       2 MiB → 702 B |       3 → 1 | `visit_default`                  | `black/linegen.py:134`   |
| removed | -2 MiB |   3.6% → 0.0% |         2 MiB → 0 B |       2 → 0 | `__init__`                       | `<string>:2`             |
|  -49.9% | -1 MiB |   3.6% → 1.8% |       2 MiB → 1 MiB |       6 → 5 | `__init__`                       | `blib2to3/pytree.py:248` |
|  -93.0% | -1 MiB |   1.9% → 0.1% | 1.07 MiB → 76.5 KiB |       7 → 6 | `transform_line`                 | `black/linegen.py:601`   |
| removed | -1 MiB |   1.8% → 0.0% |         1 MiB → 0 B |       1 → 0 | `_stringify_ast_with_new_parent` | `black/parsing.py:166`   |
|  -14.3% | -1 MiB | 12.5% → 10.7% |       7 MiB → 6 MiB |       7 → 6 | `__new__`                        | `blib2to3/pytree.py:81`  |

### Total size

#### Regressions

Functions with the largest increase in total bytes never freed in the function and all its callees.

##### Ours

|   Change |  Delta |             % |                Size |     Allocations | Function                    | Location                 |
| -------: | -----: | ------------: | ------------------: | --------------: | --------------------------- | ------------------------ |
|   +18.8% | +4 MiB | 38.1% → 45.2% | 21.3 MiB → 25.3 MiB | 20,886 → 20,890 | `append`                    | `black/lines.py:63`      |
|   +14.8% | +4 MiB | 48.4% → 55.6% | 27.1 MiB → 31.1 MiB |         85 → 89 | `format_str`                | `black/__init__.py:1189` |
|    +9.2% | +3 MiB | 58.0% → 63.4% | 32.4 MiB → 35.4 MiB | 21,081 → 21,084 | `visit_default`             | `black/linegen.py:134`   |
|    +9.2% | +3 MiB | 58.0% → 63.4% | 32.4 MiB → 35.4 MiB | 21,083 → 21,086 | `visit`                     | `black/nodes.py:163`     |
|    +9.2% | +3 MiB | 58.0% → 63.4% | 32.4 MiB → 35.4 MiB | 21,081 → 21,084 | `visit_default`             | `black/nodes.py:187`     |
|   +21.6% | +3 MiB | 24.9% → 30.2% | 13.9 MiB → 16.9 MiB | 10,805 → 10,808 | `visit_power`               | `black/linegen.py:341`   |
|    +9.3% | +3 MiB | 57.5% → 62.9% | 32.2 MiB → 35.2 MiB | 20,710 → 20,713 | `visit_stmt`                | `black/linegen.py:199`   |
|   +14.4% | +3 MiB | 37.2% → 42.6% | 20.8 MiB → 23.8 MiB | 13,399 → 13,402 | `visit_simple_stmt`         | `black/linegen.py:295`   |
|   +60.0% | +3 MiB |  8.9% → 14.3% |       5 MiB → 8 MiB |           5 → 8 | `generate_comments`         | `black/comments.py:52`   |
|   +48.3% | +2 MiB |  7.4% → 11.0% | 4.14 MiB → 6.14 MiB |       199 → 201 | `prev_sibling`              | `blib2to3/pytree.py:207` |
|   +49.3% | +2 MiB |  7.2% → 10.8% | 4.05 MiB → 6.05 MiB |         93 → 95 | `whitespace`                | `black/nodes.py:194`     |
|   +33.3% | +2 MiB | 10.7% → 14.3% |       6 MiB → 8 MiB |           6 → 8 | `prefix`                    | `blib2to3/pytree.py:480` |
|    +6.2% | +1 MiB | 29.0% → 30.8% | 16.2 MiB → 17.2 MiB | 20,788 → 20,789 | `mark`                      | `black/brackets.py:70`   |
|    +3.2% | +1 MiB | 56.7% → 58.5% | 31.7 MiB → 32.7 MiB | 20,143 → 20,144 | `visit_suite`               | `black/linegen.py:288`   |
|    +3.1% | +1 MiB | 56.9% → 58.7% | 31.8 MiB → 32.8 MiB | 20,269 → 20,270 | `visit_funcdef`             | `black/linegen.py:254`   |
|   +19.4% | +1 MiB |  9.2% → 11.0% | 5.14 MiB → 6.14 MiB |       200 → 201 | `update_sibling_maps`       | `blib2to3/pytree.py:369` |
| +2719.3% | +1 MiB |   0.1% → 1.9% | 37.7 KiB → 1.04 MiB |         66 → 67 | `preceding_leaf`            | `black/nodes.py:441`     |
|   +20.0% | +1 MiB |  8.9% → 10.7% |       5 MiB → 6 MiB |           5 → 6 | `changed`                   | `blib2to3/pytree.py:171` |
|   +25.0% | +1 MiB |   7.2% → 8.9% |       4 MiB → 5 MiB |           4 → 5 | `normalize_trailing_prefix` | `black/comments.py:127`  |

#### Improvements

Functions with the largest decrease in total bytes never freed in the function and all its callees.

##### Ours

|  Change |  Delta |             % |                Size |     Allocations | Function                            | Location                 |
| ------: | -----: | ------------: | ------------------: | --------------: | ----------------------------------- | ------------------------ |
|  -19.5% | -4 MiB | 36.7% → 29.6% | 20.5 MiB → 16.5 MiB | 21,059 → 21,055 | `assert_stable`                     | `black/__init__.py:1557` |
|  -16.3% | -4 MiB | 43.9% → 36.7% | 24.5 MiB → 20.5 MiB | 21,066 → 21,062 | `check_stability_and_equivalence`   | `black/__init__.py:1037` |
|  -97.3% | -3 MiB |   5.5% → 0.1% | 3.08 MiB → 85.9 KiB |         18 → 15 | `transform_line`                    | `black/linegen.py:601`   |
|  -66.6% | -2 MiB |   5.4% → 1.8% |       3 MiB → 1 MiB |           4 → 2 | `normalize_invisible_parens`        | `black/linegen.py:1328`  |
| removed | -2 MiB |   3.6% → 0.0% |         2 MiB → 0 B |           2 → 0 | `__init__`                          | `<string>:2`             |
|  -99.6% | -2 MiB |  3.6% → <0.1% |  2.01 MiB → 8.6 KiB |          10 → 8 | `run_transformer`                   | `black/linegen.py:1755`  |
|  -49.9% | -1 MiB |   3.6% → 1.8% |       2 MiB → 1 MiB |           6 → 5 | `__init__`                          | `blib2to3/pytree.py:248` |
|  -50.0% | -1 MiB |   3.6% → 1.8% |       2 MiB → 1 MiB |           2 → 1 | `wrap_in_parentheses`               | `black/nodes.py:935`     |
| removed | -1 MiB |   1.8% → 0.0% |         1 MiB → 0 B |           1 → 0 | `line`                              | `black/linegen.py:109`   |
|  -14.3% | -1 MiB | 12.5% → 10.7% |       7 MiB → 6 MiB |           7 → 6 | `__new__`                           | `blib2to3/pytree.py:81`  |
| removed | -1 MiB |   1.8% → 0.0% |         1 MiB → 0 B |           1 → 0 | `next_sibling`                      | `blib2to3/pytree.py:193` |
|  -99.9% | -1 MiB |  1.8% → <0.1% |       1 MiB → 802 B |           2 → 1 | `_hugging_power_ops_line_to_string` | `black/linegen.py:590`   |
|  -99.9% | -1 MiB |  1.8% → <0.1% |    1 MiB → 1.39 KiB |           2 → 1 | `split_wrapper`                     | `black/linegen.py:1162`  |
| removed | -1 MiB |   1.8% → 0.0% |         1 MiB → 0 B |           1 → 0 | `clone`                             | `blib2to3/pytree.py:452` |
| removed | -1 MiB |   1.8% → 0.0% |         1 MiB → 0 B |           1 → 0 | `hug_power_op`                      | `black/trans.py:85`      |
| removed | -1 MiB |   1.8% → 0.0% |         1 MiB → 0 B |           1 → 0 | `delimiter_split`                   | `black/linegen.py:1203`  |

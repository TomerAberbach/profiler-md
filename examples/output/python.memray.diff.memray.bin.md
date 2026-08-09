# Peak memory profile diff

Held 72.4 MiB over 23,696 allocations (3.13 KiB per allocation).

| Category         | Change | Delta |     % |     Size | Allocations |
| ---------------- | -----: | ----: | ----: | -------: | ----------: |
| Ours             |   0.0% |   0 B | 71.8% |   52 MiB |      21,382 |
| Standard library |   0.0% |   0 B | 26.4% | 19.1 MiB |       2,080 |
| Third-party      |   0.0% |   0 B |  1.8% | 1.27 MiB |         234 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes held at peak memory directly in the function body, excluding callees.

##### Ours

|    Change |  Delta |             % |                Size |     Allocations | Function                           | Location                      |
| --------: | -----: | ------------: | ------------------: | --------------: | ---------------------------------- | ----------------------------- |
|     +5.5% | +1 MiB | 25.2% → 26.5% | 18.2 MiB → 19.2 MiB | 20,790 → 20,791 | `mark`                             | `black/brackets.py:70`        |
|    +46.7% | +1 MiB |   3.0% → 4.3% | 2.14 MiB → 3.14 MiB |       197 → 198 | `update_sibling_maps`              | `blib2to3/pytree.py:369`      |
|       new | +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `pop`                              | `blib2to3/pgen2/parse.py:398` |
|   +100.0% | +1 MiB |   1.4% → 2.8% |       1 MiB → 2 MiB |           1 → 2 | `_addtoken`                        | `blib2to3/pgen2/parse.py:290` |
| +87381.3% | +1 MiB |  <0.1% → 1.4% |    1.17 KiB → 1 MiB |           2 → 3 | `addtoken`                         | `blib2to3/pgen2/parse.py:242` |
|    +16.7% | +1 MiB |   8.3% → 9.7% |       6 MiB → 7 MiB |           6 → 7 | `changed`                          | `blib2to3/pytree.py:171`      |
|       new | +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `lines_with_leading_tabs_expanded` | `black/strings.py:46`         |
|       new | +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `is_import`                        | `black/lines.py:134`          |

#### Improvements

Functions with the largest decrease in bytes held at peak memory directly in the function body, excluding callees.

##### Ours

|  Change |  Delta |            % |             Size | Allocations | Function                               | Location                      |
| ------: | -----: | -----------: | ---------------: | ----------: | -------------------------------------- | ----------------------------- |
|  -66.7% | -2 MiB |  4.1% → 1.4% |    3 MiB → 1 MiB |       4 → 2 | `visit_default`                        | `black/linegen.py:134`        |
| removed | -2 MiB |  2.8% → 0.0% |      2 MiB → 0 B |       2 → 0 | `push`                                 | `blib2to3/pgen2/parse.py:386` |
| removed | -1 MiB |  1.4% → 0.0% |      1 MiB → 0 B |       1 → 0 | `__init__`                             | `blib2to3/pytree.py:400`      |
|  -99.9% | -1 MiB | 1.4% → <0.1% | 1 MiB → 1.11 KiB |       2 → 1 | `maybe_empty_lines`                    | `black/lines.py:560`          |
|  -33.3% | -1 MiB |  4.1% → 2.8% |    3 MiB → 2 MiB |       3 → 2 | `generate_comments`                    | `black/comments.py:52`        |
| removed | -1 MiB |  1.4% → 0.0% |      1 MiB → 0 B |       1 → 0 | `contains_uncollapsable_type_comments` | `black/lines.py:276`          |

### Total size

#### Regressions

Functions with the largest increase in total bytes held at peak memory in the function and all its callees.

##### Ours

|     Change |  Delta |             % |                Size |     Allocations | Function                     | Location                      |
| ---------: | -----: | ------------: | ------------------: | --------------: | ---------------------------- | ----------------------------- |
|     +10.4% | +2 MiB | 26.6% → 29.4% | 19.3 MiB → 21.3 MiB | 20,884 → 20,886 | `append`                     | `black/lines.py:63`           |
|      +5.5% | +1 MiB | 25.2% → 26.5% | 18.2 MiB → 19.2 MiB | 20,790 → 20,791 | `mark`                       | `black/brackets.py:70`        |
|      +2.9% | +1 MiB | 47.6% → 48.9% | 34.4 MiB → 35.4 MiB | 21,083 → 21,084 | `visit_default`              | `black/linegen.py:134`        |
|      +2.9% | +1 MiB | 47.6% → 48.9% | 34.4 MiB → 35.4 MiB | 21,085 → 21,086 | `visit`                      | `black/nodes.py:163`          |
|      +2.9% | +1 MiB | 47.6% → 48.9% | 34.4 MiB → 35.4 MiB | 21,083 → 21,084 | `visit_default`              | `black/nodes.py:187`          |
|      +3.0% | +1 MiB | 46.7% → 48.1% | 33.8 MiB → 34.8 MiB | 20,271 → 20,272 | `visit_funcdef`              | `black/linegen.py:254`        |
|      +3.0% | +1 MiB | 46.6% → 48.0% | 33.7 MiB → 34.7 MiB | 20,145 → 20,146 | `visit_suite`                | `black/linegen.py:288`        |
|      +2.9% | +1 MiB | 47.2% → 48.6% | 34.2 MiB → 35.2 MiB | 20,712 → 20,713 | `visit_stmt`                 | `black/linegen.py:199`        |
|    +393.5% | +1 MiB |   0.4% → 1.7% |  260 KiB → 1.25 MiB |       347 → 348 | `visit_factor`               | `black/linegen.py:379`        |
|    +146.6% | +1 MiB |   0.9% → 2.3% |  698 KiB → 1.68 MiB |       900 → 901 | `visit_STRING`               | `black/linegen.py:413`        |
|     +46.7% | +1 MiB |   3.0% → 4.3% | 2.14 MiB → 3.14 MiB |       197 → 198 | `update_sibling_maps`        | `blib2to3/pytree.py:369`      |
|     +46.7% | +1 MiB |   3.0% → 4.3% | 2.14 MiB → 3.14 MiB |       197 → 198 | `prev_sibling`               | `blib2to3/pytree.py:207`      |
|     +48.7% | +1 MiB |   2.8% → 4.2% | 2.05 MiB → 3.05 MiB |         91 → 92 | `whitespace`                 | `black/nodes.py:194`          |
|     +49.9% | +1 MiB |   2.8% → 4.1% |       2 MiB → 3 MiB |           6 → 7 | `pop`                        | `blib2to3/pgen2/parse.py:398` |
|     +33.3% | +1 MiB |   4.1% → 5.5% |       3 MiB → 4 MiB |           4 → 5 | `normalize_invisible_parens` | `black/linegen.py:1328`       |
| +108999.6% | +1 MiB |  <0.1% → 1.4% |       962 B → 1 MiB |           1 → 2 | `_maybe_empty_lines`         | `black/lines.py:610`          |
|     +16.7% | +1 MiB |   8.3% → 9.7% |       6 MiB → 7 MiB |           6 → 7 | `changed`                    | `blib2to3/pytree.py:171`      |
|     +16.7% | +1 MiB |   8.3% → 9.7% |       6 MiB → 7 MiB |           6 → 7 | `prefix`                     | `blib2to3/pytree.py:480`      |
|        new | +1 MiB |   0.0% → 1.4% |         0 B → 1 MiB |           0 → 1 | `prefix`                     | `blib2to3/pytree.py:329`      |
|     +50.0% | +1 MiB |   2.8% → 4.1% |       2 MiB → 3 MiB |           2 → 3 | `wrap_in_parentheses`        | `black/nodes.py:935`          |

#### Improvements

Functions with the largest decrease in total bytes held at peak memory in the function and all its callees.

##### Ours

|  Change |  Delta |             % |                Size |     Allocations | Function                               | Location                      |
| ------: | -----: | ------------: | ------------------: | --------------: | -------------------------------------- | ----------------------------- |
| removed | -2 MiB |   2.8% → 0.0% |         2 MiB → 0 B |           2 → 0 | `push`                                 | `blib2to3/pgen2/parse.py:386` |
|   -5.9% | -1 MiB | 23.3% → 22.0% | 16.9 MiB → 15.9 MiB | 10,808 → 10,807 | `visit_power`                          | `black/linegen.py:341`        |
|  -67.6% | -1 MiB |   2.0% → 0.7% |  1.48 MiB → 490 KiB |       654 → 653 | `visit_NUMBER`                         | `black/linegen.py:505`        |
| removed | -1 MiB |   1.4% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__init__`                             | `blib2to3/pytree.py:400`      |
|  -12.5% | -1 MiB |  11.1% → 9.7% |       8 MiB → 7 MiB |         12 → 11 | `convert`                              | `blib2to3/pytree.py:486`      |
|   -9.1% | -1 MiB | 15.2% → 13.8% |     11 MiB → 10 MiB |         15 → 14 | `_addtoken`                            | `blib2to3/pgen2/parse.py:290` |
|  -24.9% | -1 MiB |   5.5% → 4.2% | 4.01 MiB → 3.01 MiB |         18 → 17 | `transform_line`                       | `black/linegen.py:601`        |
|  -14.3% | -1 MiB |   9.7% → 8.3% |       7 MiB → 6 MiB |           7 → 6 | `generate_comments`                    | `black/comments.py:52`        |
| removed | -1 MiB |   1.4% → 0.0% |         1 MiB → 0 B |           1 → 0 | `contains_uncollapsable_type_comments` | `black/lines.py:276`          |
|  -16.7% | -1 MiB |   8.3% → 6.9% |       6 MiB → 5 MiB |           6 → 5 | `shift`                                | `blib2to3/pgen2/parse.py:373` |

# Leaked memory profile diff

Leaked 57.1 MiB → 58.1 MiB (+1 MiB, +1.8%) over 22,684 allocations → 22,685 allocations (2.58 KiB → 2.62 KiB per allocation).

| Category         | Change |  Delta |             % |                Size |     Allocations |
| ---------------- | -----: | -----: | ------------: | ------------------: | --------------: |
| Ours             |  +2.0% | +1 MiB | 89.1% → 89.3% | 50.9 MiB → 51.9 MiB | 21,386 → 21,387 |
| Standard library |   0.0% |    0 B |   8.7% → 8.6% |            4.97 MiB |           1,068 |
| Third-party      |   0.0% |    0 B |   2.2% → 2.1% |            1.23 MiB |             230 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes never freed directly in the function body, excluding callees.

##### Ours

|    Change |  Delta |             % |                Size |     Allocations | Function                           | Location                      |
| --------: | -----: | ------------: | ------------------: | --------------: | ---------------------------------- | ----------------------------- |
|    +11.6% | +2 MiB | 30.2% → 33.1% | 17.2 MiB → 19.2 MiB | 20,789 → 20,791 | `mark`                             | `black/brackets.py:70`        |
| +87381.3% | +1 MiB |  <0.1% → 1.7% |    1.17 KiB → 1 MiB |           2 → 3 | `addtoken`                         | `blib2to3/pgen2/parse.py:242` |
|    +46.7% | +1 MiB |   3.8% → 5.4% | 2.14 MiB → 3.14 MiB |       197 → 198 | `update_sibling_maps`              | `blib2to3/pytree.py:369`      |
|    +16.7% | +1 MiB | 10.5% → 12.1% |       6 MiB → 7 MiB |           6 → 7 | `changed`                          | `blib2to3/pytree.py:171`      |
|   +100.0% | +1 MiB |   1.8% → 3.4% |       1 MiB → 2 MiB |           1 → 2 | `_addtoken`                        | `blib2to3/pgen2/parse.py:290` |
|       new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `pop`                              | `blib2to3/pgen2/parse.py:398` |
|       new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `lines_with_leading_tabs_expanded` | `black/strings.py:46`         |
|       new | +1 MiB |   0.0% → 1.7% |         0 B → 1 MiB |           0 → 1 | `is_import`                        | `black/lines.py:134`          |

#### Improvements

Functions with the largest decrease in bytes never freed directly in the function body, excluding callees.

##### Ours

|  Change |  Delta |            % |             Size | Allocations | Function                               | Location                      |
| ------: | -----: | -----------: | ---------------: | ----------: | -------------------------------------- | ----------------------------- |
|  -66.7% | -2 MiB |  5.3% → 1.7% |    3 MiB → 1 MiB |       4 → 2 | `visit_default`                        | `black/linegen.py:134`        |
| removed | -2 MiB |  3.5% → 0.0% |      2 MiB → 0 B |       2 → 0 | `push`                                 | `blib2to3/pgen2/parse.py:386` |
|  -99.9% | -1 MiB | 1.8% → <0.1% | 1 MiB → 1.11 KiB |       2 → 1 | `maybe_empty_lines`                    | `black/lines.py:560`          |
|  -33.3% | -1 MiB |  5.3% → 3.4% |    3 MiB → 2 MiB |       3 → 2 | `generate_comments`                    | `black/comments.py:52`        |
| removed | -1 MiB |  1.8% → 0.0% |      1 MiB → 0 B |       1 → 0 | `contains_uncollapsable_type_comments` | `black/lines.py:276`          |
| removed | -1 MiB |  1.8% → 0.0% |      1 MiB → 0 B |       1 → 0 | `__init__`                             | `blib2to3/pytree.py:400`      |

### Total size

#### Regressions

Functions with the largest increase in total bytes never freed in the function and all its callees.

| Change |  Delta |             % |                Size |     Allocations | Function               | Location                                                       |
| -----: | -----: | ------------: | ------------------: | --------------: | ---------------------- | -------------------------------------------------------------- |
| +16.4% | +3 MiB | 32.0% → 36.7% | 18.3 MiB → 21.3 MiB | 20,883 → 20,886 | `append`               | `black/lines.py:63`                                            |
|  +6.0% | +2 MiB | 58.6% → 61.0% | 33.4 MiB → 35.4 MiB | 21,084 → 21,086 | `visit`                | `black/nodes.py:163`                                           |
|  +6.0% | +2 MiB | 58.6% → 61.0% | 33.4 MiB → 35.4 MiB | 21,082 → 21,084 | `visit_default`        | `black/nodes.py:187`                                           |
|  +6.0% | +2 MiB | 58.6% → 61.0% | 33.4 MiB → 35.4 MiB | 21,082 → 21,084 | `visit_default`        | `black/linegen.py:134`                                         |
|  +6.0% | +2 MiB | 58.1% → 60.6% | 33.2 MiB → 35.2 MiB | 20,711 → 20,713 | `visit_stmt`           | `black/linegen.py:199`                                         |
|  +6.1% | +2 MiB | 57.4% → 59.8% | 32.7 MiB → 34.7 MiB | 20,144 → 20,146 | `visit_suite`          | `black/linegen.py:288`                                         |
|  +6.1% | +2 MiB | 57.5% → 60.0% | 32.8 MiB → 34.8 MiB | 20,270 → 20,272 | `visit_funcdef`        | `black/linegen.py:254`                                         |
| +11.6% | +2 MiB | 30.2% → 33.1% | 17.2 MiB → 19.2 MiB | 20,789 → 20,791 | `mark`                 | `black/brackets.py:70`                                         |
|  +1.8% | +1 MiB |        100.0% | 57.1 MiB → 58.1 MiB | 22,683 → 22,684 | `run_module`           | `<frozen runpy>:201`                                           |
|  +1.8% | +1 MiB |        100.0% | 57.1 MiB → 58.1 MiB | 22,684 → 22,685 | `_run_tracker`         | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |
|  +1.9% | +1 MiB | 90.4% → 90.6% | 51.6 MiB → 52.6 MiB | 21,151 → 21,152 | `format_file_contents` | `black/__init__.py:1054`                                       |
|  +1.9% | +1 MiB | 90.4% → 90.6% | 51.6 MiB → 52.6 MiB | 21,152 → 21,153 | `format_file_in_place` | `black/__init__.py:917`                                        |
|  +1.9% | +1 MiB | 90.4% → 90.6% | 51.6 MiB → 52.6 MiB | 21,159 → 21,160 | `reformat_one`         | `black/__init__.py:860`                                        |
|  +1.9% | +1 MiB | 90.5% → 90.6% | 51.6 MiB → 52.6 MiB | 21,164 → 21,165 | `main`                 | `black/__init__.py:244`                                        |
|  +1.9% | +1 MiB | 90.5% → 90.6% | 51.6 MiB → 52.6 MiB | 21,166 → 21,167 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py:33`    |
|  +1.9% | +1 MiB | 90.5% → 90.6% | 51.6 MiB → 52.6 MiB | 21,167 → 21,168 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:853`         |
|  +1.9% | +1 MiB | 90.5% → 90.6% | 51.6 MiB → 52.6 MiB | 21,169 → 21,170 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py:1339`        |
|  +1.9% | +1 MiB | 90.5% → 90.7% | 51.6 MiB → 52.6 MiB | 21,188 → 21,189 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py:1422`        |
|  +1.9% | +1 MiB | 90.5% → 90.7% | 51.6 MiB → 52.6 MiB | 21,189 → 21,190 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py:1567`        |
|  +1.9% | +1 MiB | 90.5% → 90.7% | 51.6 MiB → 52.6 MiB | 21,189 → 21,190 | `patched_main`         | `black/__init__.py:1594`                                       |

##### Ours

|     Change |  Delta |             % |                Size |     Allocations | Function                     | Location                 |
| ---------: | -----: | ------------: | ------------------: | --------------: | ---------------------------- | ------------------------ |
|     +16.4% | +3 MiB | 32.0% → 36.7% | 18.3 MiB → 21.3 MiB | 20,883 → 20,886 | `append`                     | `black/lines.py:63`      |
|      +6.0% | +2 MiB | 58.6% → 61.0% | 33.4 MiB → 35.4 MiB | 21,084 → 21,086 | `visit`                      | `black/nodes.py:163`     |
|      +6.0% | +2 MiB | 58.6% → 61.0% | 33.4 MiB → 35.4 MiB | 21,082 → 21,084 | `visit_default`              | `black/nodes.py:187`     |
|      +6.0% | +2 MiB | 58.6% → 61.0% | 33.4 MiB → 35.4 MiB | 21,082 → 21,084 | `visit_default`              | `black/linegen.py:134`   |
|      +6.0% | +2 MiB | 58.1% → 60.6% | 33.2 MiB → 35.2 MiB | 20,711 → 20,713 | `visit_stmt`                 | `black/linegen.py:199`   |
|      +6.1% | +2 MiB | 57.4% → 59.8% | 32.7 MiB → 34.7 MiB | 20,144 → 20,146 | `visit_suite`                | `black/linegen.py:288`   |
|      +6.1% | +2 MiB | 57.5% → 60.0% | 32.8 MiB → 34.8 MiB | 20,270 → 20,272 | `visit_funcdef`              | `black/linegen.py:254`   |
|     +11.6% | +2 MiB | 30.2% → 33.1% | 17.2 MiB → 19.2 MiB | 20,789 → 20,791 | `mark`                       | `black/brackets.py:70`   |
|      +1.9% | +1 MiB | 90.4% → 90.6% | 51.6 MiB → 52.6 MiB | 21,151 → 21,152 | `format_file_contents`       | `black/__init__.py:1054` |
|      +1.9% | +1 MiB | 90.4% → 90.6% | 51.6 MiB → 52.6 MiB | 21,152 → 21,153 | `format_file_in_place`       | `black/__init__.py:917`  |
|      +1.9% | +1 MiB | 90.4% → 90.6% | 51.6 MiB → 52.6 MiB | 21,159 → 21,160 | `reformat_one`               | `black/__init__.py:860`  |
|      +1.9% | +1 MiB | 90.5% → 90.6% | 51.6 MiB → 52.6 MiB | 21,164 → 21,165 | `main`                       | `black/__init__.py:244`  |
|      +1.9% | +1 MiB | 90.5% → 90.7% | 51.6 MiB → 52.6 MiB | 21,189 → 21,190 | `patched_main`               | `black/__init__.py:1594` |
|      +1.9% | +1 MiB | 90.5% → 90.7% | 51.6 MiB → 52.6 MiB | 21,189 → 21,190 | `<module>`                   | `black/__main__.py:1`    |
|      +4.4% | +1 MiB | 40.0% → 41.0% | 22.8 MiB → 23.8 MiB | 13,401 → 13,402 | `visit_simple_stmt`          | `black/linegen.py:295`   |
|      +2.0% | +1 MiB | 86.9% → 87.1% | 49.6 MiB → 50.6 MiB | 21,145 → 21,146 | `_format_str_once`           | `black/__init__.py:1236` |
|      +2.9% | +1 MiB | 59.7% → 60.4% | 34.1 MiB → 35.1 MiB |         92 → 93 | `format_str`                 | `black/__init__.py:1189` |
|     +33.3% | +1 MiB |   5.3% → 6.9% |       3 MiB → 4 MiB |           4 → 5 | `normalize_invisible_parens` | `black/linegen.py:1328`  |
|    +146.6% | +1 MiB |   1.2% → 2.9% |  698 KiB → 1.68 MiB |       900 → 901 | `visit_STRING`               | `black/linegen.py:413`   |
| +108999.6% | +1 MiB |  <0.1% → 1.7% |       962 B → 1 MiB |           1 → 2 | `_maybe_empty_lines`         | `black/lines.py:610`     |

##### Standard library

| Change |  Delta |             % |                Size |     Allocations | Function           | Location             |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------------ | -------------------- |
|  +1.8% | +1 MiB |        100.0% | 57.1 MiB → 58.1 MiB | 22,683 → 22,684 | `run_module`       | `<frozen runpy>:201` |
|  +1.9% | +1 MiB | 90.5% → 90.7% | 51.6 MiB → 52.6 MiB | 21,189 → 21,190 | `_run_code`        | `<frozen runpy>:65`  |
|  +1.9% | +1 MiB | 90.5% → 90.7% | 51.6 MiB → 52.6 MiB | 21,189 → 21,190 | `_run_module_code` | `<frozen runpy>:91`  |

##### Third-party

| Change |  Delta |             % |                Size |     Allocations | Function       | Location                                                       |
| -----: | -----: | ------------: | ------------------: | --------------: | -------------- | -------------------------------------------------------------- |
|  +1.8% | +1 MiB |        100.0% | 57.1 MiB → 58.1 MiB | 22,684 → 22,685 | `_run_tracker` | `/venv/lib/python3.11/site-packages/memray/commands/run.py:40` |
|  +1.9% | +1 MiB | 90.5% → 90.6% | 51.6 MiB → 52.6 MiB | 21,166 → 21,167 | `new_func`     | `/venv/lib/python3.11/site-packages/click/decorators.py:33`    |
|  +1.9% | +1 MiB | 90.5% → 90.6% | 51.6 MiB → 52.6 MiB | 21,167 → 21,168 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:853`         |
|  +1.9% | +1 MiB | 90.5% → 90.6% | 51.6 MiB → 52.6 MiB | 21,169 → 21,170 | `invoke`       | `/venv/lib/python3.11/site-packages/click/core.py:1339`        |
|  +1.9% | +1 MiB | 90.5% → 90.7% | 51.6 MiB → 52.6 MiB | 21,188 → 21,189 | `main`         | `/venv/lib/python3.11/site-packages/click/core.py:1422`        |
|  +1.9% | +1 MiB | 90.5% → 90.7% | 51.6 MiB → 52.6 MiB | 21,189 → 21,190 | `__call__`     | `/venv/lib/python3.11/site-packages/click/core.py:1567`        |

#### Improvements

Functions with the largest decrease in total bytes never freed in the function and all its callees.

##### Ours

|  Change |  Delta |             % |                Size |     Allocations | Function                               | Location                      |
| ------: | -----: | ------------: | ------------------: | --------------: | -------------------------------------- | ----------------------------- |
| removed | -2 MiB |   3.5% → 0.0% |         2 MiB → 0 B |           2 → 0 | `push`                                 | `blib2to3/pgen2/parse.py:386` |
|  -24.5% | -1 MiB |   7.2% → 5.3% | 4.08 MiB → 3.08 MiB |         19 → 18 | `transform_line`                       | `black/linegen.py:601`        |
|   -5.9% | -1 MiB | 29.6% → 27.4% | 16.9 MiB → 15.9 MiB | 10,808 → 10,807 | `visit_power`                          | `black/linegen.py:341`        |
|  -14.3% | -1 MiB | 12.3% → 10.3% |       7 MiB → 6 MiB |           7 → 6 | `generate_comments`                    | `black/comments.py:52`        |
|  -67.6% | -1 MiB |   2.6% → 0.8% |  1.48 MiB → 490 KiB |       654 → 653 | `visit_NUMBER`                         | `black/linegen.py:505`        |
| removed | -1 MiB |   1.8% → 0.0% |         1 MiB → 0 B |           1 → 0 | `contains_uncollapsable_type_comments` | `black/lines.py:276`          |
|  -12.5% | -1 MiB | 14.0% → 12.1% |       8 MiB → 7 MiB |         12 → 11 | `convert`                              | `blib2to3/pytree.py:486`      |
|  -16.7% | -1 MiB |  10.5% → 8.6% |       6 MiB → 5 MiB |           6 → 5 | `shift`                                | `blib2to3/pgen2/parse.py:373` |
|   -9.1% | -1 MiB | 19.3% → 17.2% |     11 MiB → 10 MiB |         15 → 14 | `_addtoken`                            | `blib2to3/pgen2/parse.py:290` |
| removed | -1 MiB |   1.8% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__init__`                             | `blib2to3/pytree.py:400`      |

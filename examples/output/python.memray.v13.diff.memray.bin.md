# Peak memory profile diff

Held 78.6 MiB over 22,667 allocations (3.55 KiB per allocation).

| Category         | Change | Delta |     % |     Size | Allocations |
| ---------------- | -----: | ----: | ----: | -------: | ----------: |
| Ours             |   0.0% |   0 B | 82.9% | 65.2 MiB |      21,440 |
| Standard library |   0.0% |   0 B | 16.7% | 13.1 MiB |         994 |
| Third-party      |   0.0% |   0 B |  0.3% |  276 KiB |         233 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes held at peak memory directly in the function body, excluding callees.

##### Ours

|     Change |  Delta |            % |             Size | Allocations | Function                     | Location                 |
| ---------: | -----: | -----------: | ---------------: | ----------: | ---------------------------- | ------------------------ |
| +298739.6% | +2 MiB | <0.1% → 2.5% |    702 B → 2 MiB |       1 → 3 | `visit_default`              | `black/linegen.py:134`   |
| +177424.0% | +2 MiB | <0.1% → 2.5% | 1.15 KiB → 2 MiB |       1 → 3 | `normalize_invisible_parens` | `black/linegen.py:1328`  |
|        new | +2 MiB |  0.0% → 2.5% |      0 B → 2 MiB |       0 → 2 | `generate_comments`          | `black/comments.py:52`   |
|  +36714.8% | +1 MiB | <0.1% → 1.3% | 2.79 KiB → 1 MiB |       3 → 4 | `transform_line`             | `black/linegen.py:601`   |
|        new | +1 MiB |  0.0% → 1.3% |      0 B → 1 MiB |       0 → 1 | `__init__`                   | `blib2to3/pytree.py:400` |
|     +20.0% | +1 MiB |  6.4% → 7.6% |    5 MiB → 6 MiB |       5 → 6 | `__new__`                    | `blib2to3/pytree.py:81`  |
|        new | +1 MiB |  0.0% → 1.3% |      0 B → 1 MiB |       0 → 1 | `is_def`                     | `black/lines.py:160`     |

#### Improvements

Functions with the largest decrease in bytes held at peak memory directly in the function body, excluding callees.

##### Ours

|  Change |  Delta |             % |                Size |     Allocations | Function              | Location                       |
| ------: | -----: | ------------: | ------------------: | --------------: | --------------------- | ------------------------------ |
|  -58.3% | -3 MiB |   6.5% → 2.7% | 5.14 MiB → 2.14 MiB |       200 → 197 | `update_sibling_maps` | `blib2to3/pytree.py:369`       |
|  -28.6% | -2 MiB |   8.9% → 6.4% |       7 MiB → 5 MiB |           8 → 6 | `visit_power`         | `black/linegen.py:341`         |
|   -5.8% | -1 MiB | 21.9% → 20.7% | 17.2 MiB → 16.2 MiB | 20,789 → 20,788 | `mark`                | `black/brackets.py:70`         |
|  -49.8% | -1 MiB |   2.6% → 1.3% | 2.01 MiB → 1.01 MiB |         13 → 12 | `parse_tokens`        | `blib2to3/pgen2/driver.py:114` |
|  -50.0% | -1 MiB |   2.5% → 1.3% |       2 MiB → 1 MiB |           2 → 1 | `convert`             | `blib2to3/pytree.py:486`       |
|  -16.7% | -1 MiB |   7.6% → 6.4% |       6 MiB → 5 MiB |           6 → 5 | `changed`             | `blib2to3/pytree.py:171`       |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__str__`             | `blib2to3/pytree.py:440`       |

### Total size

#### Regressions

Functions with the largest increase in total bytes held at peak memory in the function and all its callees.

##### Ours

|     Change |  Delta |             % |                Size |     Allocations | Function                     | Location                      |
| ---------: | -----: | ------------: | ------------------: | --------------: | ---------------------------- | ----------------------------- |
|     +99.9% | +2 MiB |   2.5% → 5.1% |       2 MiB → 4 MiB |           3 → 5 | `normalize_invisible_parens` | `black/linegen.py:1328`       |
|     +40.0% | +2 MiB |   6.4% → 8.9% |       5 MiB → 7 MiB |           5 → 7 | `shift`                      | `blib2to3/pgen2/parse.py:373` |
|      +4.2% | +1 MiB | 30.3% → 31.6% | 23.8 MiB → 24.8 MiB | 13,402 → 13,403 | `visit_simple_stmt`          | `black/linegen.py:295`        |
|     +11.1% | +1 MiB | 11.5% → 12.8% |   9.04 MiB → 10 MiB |         16 → 17 | `addtoken`                   | `blib2to3/pgen2/parse.py:242` |
|        new | +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `__init__`                   | `blib2to3/pytree.py:400`      |
|     +12.5% | +1 MiB | 10.2% → 11.5% |       8 MiB → 9 MiB |         12 → 13 | `convert`                    | `blib2to3/pytree.py:486`      |
|     +11.1% | +1 MiB | 11.5% → 12.7% |      9 MiB → 10 MiB |         13 → 14 | `_addtoken`                  | `blib2to3/pgen2/parse.py:290` |
| +108999.6% | +1 MiB |  <0.1% → 1.3% |       962 B → 1 MiB |           1 → 2 | `_maybe_empty_lines`         | `black/lines.py:610`          |
|  +49979.8% | +1 MiB |  <0.1% → 1.3% |    2.05 KiB → 1 MiB |           2 → 3 | `maybe_empty_lines`          | `black/lines.py:560`          |
|    +100.0% | +1 MiB |   1.3% → 2.5% |       1 MiB → 2 MiB |           1 → 2 | `prefix`                     | `blib2to3/pytree.py:329`      |
|     +25.0% | +1 MiB |   5.1% → 6.4% |       4 MiB → 5 MiB |           4 → 5 | `generate_comments`          | `black/comments.py:52`        |
|     +20.0% | +1 MiB |   6.4% → 7.6% |       5 MiB → 6 MiB |           5 → 6 | `__new__`                    | `blib2to3/pytree.py:81`       |
|        new | +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `line`                       | `black/linegen.py:109`        |
|        new | +1 MiB |   0.0% → 1.3% |         0 B → 1 MiB |           0 → 1 | `is_def`                     | `black/lines.py:160`          |

#### Improvements

Functions with the largest decrease in total bytes held at peak memory in the function and all its callees.

##### Ours

|  Change |  Delta |             % |                Size |     Allocations | Function                    | Location                      |
| ------: | -----: | ------------: | ------------------: | --------------: | --------------------------- | ----------------------------- |
|  -16.5% | -4 MiB | 30.9% → 25.8% | 24.3 MiB → 20.3 MiB | 20,889 → 20,885 | `append`                    | `black/lines.py:63`           |
|  -15.1% | -3 MiB | 25.3% → 21.5% | 19.9 MiB → 16.9 MiB | 10,811 → 10,808 | `visit_power`               | `black/linegen.py:341`        |
|  -58.3% | -3 MiB |   6.5% → 2.7% | 5.14 MiB → 2.14 MiB |       200 → 197 | `update_sibling_maps`       | `blib2to3/pytree.py:369`      |
|  -48.8% | -3 MiB |   7.8% → 4.0% | 6.14 MiB → 3.14 MiB |       201 → 198 | `prev_sibling`              | `blib2to3/pytree.py:207`      |
|  -49.6% | -3 MiB |   7.7% → 3.9% | 6.05 MiB → 3.05 MiB |         95 → 92 | `whitespace`                | `black/nodes.py:194`          |
|   -5.8% | -1 MiB | 21.9% → 20.7% | 17.2 MiB → 16.2 MiB | 20,789 → 20,788 | `mark`                      | `black/brackets.py:70`        |
|  -99.2% | -1 MiB |  1.3% → <0.1% |  1.01 MiB → 8.6 KiB |           9 → 8 | `run_transformer`           | `black/linegen.py:1755`       |
|  -49.7% | -1 MiB |   2.6% → 1.3% | 2.01 MiB → 1.01 MiB |         14 → 13 | `transform_line`            | `black/linegen.py:601`        |
|  -92.9% | -1 MiB |   1.4% → 0.1% |   1.08 MiB → 78 KiB |       105 → 104 | `visit_test`                | `black/linegen.py:160`        |
|  -33.3% | -1 MiB |   3.8% → 2.5% |       3 MiB → 2 MiB |           7 → 6 | `pop`                       | `blib2to3/pgen2/parse.py:398` |
|  -99.9% | -1 MiB |  1.3% → <0.1% |    1 MiB → 1.39 KiB |           2 → 1 | `split_wrapper`             | `black/linegen.py:1162`       |
|  -16.7% | -1 MiB |   7.6% → 6.4% |       6 MiB → 5 MiB |           6 → 5 | `changed`                   | `blib2to3/pytree.py:171`      |
|  -14.3% | -1 MiB |   8.9% → 7.6% |       7 MiB → 6 MiB |           7 → 6 | `prefix`                    | `blib2to3/pytree.py:480`      |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |           1 → 0 | `delimiter_split`           | `black/linegen.py:1203`       |
|  -25.0% | -1 MiB |   5.1% → 3.8% |       4 MiB → 3 MiB |           4 → 3 | `normalize_trailing_prefix` | `black/comments.py:127`       |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__str__`                   | `blib2to3/pytree.py:440`      |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__str__`                   | `black/lines.py:490`          |
| removed | -1 MiB |   1.3% → 0.0% |         1 MiB → 0 B |           1 → 0 | `line_to_string`            | `black/lines.py:1073`         |

# Leaked memory profile diff

Leaked 58.9 MiB → 59.9 MiB (+1 MiB, +1.7%) over 22,470 allocations → 22,471 allocations (2.68 KiB → 2.73 KiB per allocation).

| Category         | Change |  Delta |             % |                Size |     Allocations |
| ---------------- | -----: | -----: | ------------: | ------------------: | --------------: |
| Ours             |  +1.9% | +1 MiB | 88.0% → 88.2% | 51.9 MiB → 52.9 MiB | 21,382 → 21,383 |
| Standard library |   0.0% |    0 B | 11.6% → 11.4% |            6.81 MiB |             859 |
| Third-party      |   0.0% |    0 B |          0.4% |             237 KiB |             229 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes never freed directly in the function body, excluding callees.

##### Ours

|     Change |  Delta |            % |                Size | Allocations | Function                     | Location                 |
| ---------: | -----: | -----------: | ------------------: | ----------: | ---------------------------- | ------------------------ |
| +298739.6% | +2 MiB | <0.1% → 3.3% |       702 B → 2 MiB |       1 → 3 | `visit_default`              | `black/linegen.py:134`   |
| +177424.0% | +2 MiB | <0.1% → 3.3% |    1.15 KiB → 2 MiB |       1 → 3 | `normalize_invisible_parens` | `black/linegen.py:1328`  |
|        new | +2 MiB |  0.0% → 3.3% |         0 B → 2 MiB |       0 → 2 | `generate_comments`          | `black/comments.py:52`   |
|   +1338.7% | +1 MiB |  0.1% → 1.8% | 76.5 KiB → 1.07 MiB |       6 → 7 | `transform_line`             | `black/linegen.py:601`   |
|     +20.0% | +1 MiB | 8.5% → 10.0% |       5 MiB → 6 MiB |       5 → 6 | `__new__`                    | `blib2to3/pytree.py:81`  |
|        new | +1 MiB |  0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `__init__`                   | `blib2to3/pytree.py:400` |
|        new | +1 MiB |  0.0% → 1.7% |         0 B → 1 MiB |       0 → 1 | `is_def`                     | `black/lines.py:160`     |

#### Improvements

Functions with the largest decrease in bytes never freed directly in the function body, excluding callees.

##### Ours

|  Change |  Delta |             % |                Size |     Allocations | Function              | Location                       |
| ------: | -----: | ------------: | ------------------: | --------------: | --------------------- | ------------------------------ |
|  -58.3% | -3 MiB |   8.7% → 3.6% | 5.14 MiB → 2.14 MiB |       200 → 197 | `update_sibling_maps` | `blib2to3/pytree.py:369`       |
|  -49.8% | -1 MiB |   3.4% → 1.7% | 2.01 MiB → 1.01 MiB |         13 → 12 | `parse_tokens`        | `blib2to3/pgen2/driver.py:114` |
|  -16.7% | -1 MiB |  10.2% → 8.3% |       6 MiB → 5 MiB |           7 → 6 | `visit_power`         | `black/linegen.py:341`         |
|   -5.8% | -1 MiB | 29.2% → 27.1% | 17.2 MiB → 16.2 MiB | 20,789 → 20,788 | `mark`                | `black/brackets.py:70`         |
|  -16.7% | -1 MiB |  10.2% → 8.3% |       6 MiB → 5 MiB |           6 → 5 | `changed`             | `blib2to3/pytree.py:171`       |
| removed | -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__str__`             | `blib2to3/pytree.py:440`       |
|  -50.0% | -1 MiB |   3.4% → 1.7% |       2 MiB → 1 MiB |           2 → 1 | `convert`             | `blib2to3/pytree.py:486`       |

### Total size

#### Regressions

Functions with the largest increase in total bytes never freed in the function and all its callees.

| Change |  Delta |             % |                Size |     Allocations | Function                     | Location                                                         |
| -----: | -----: | ------------: | ------------------: | --------------: | ---------------------------- | ---------------------------------------------------------------- |
| +99.9% | +2 MiB |   3.4% → 6.7% |       2 MiB → 4 MiB |           3 → 5 | `normalize_invisible_parens` | `black/linegen.py:1328`                                          |
| +40.0% | +2 MiB |  8.5% → 11.7% |       5 MiB → 7 MiB |           5 → 7 | `shift`                      | `blib2to3/pgen2/parse.py:373`                                    |
|  +1.8% | +1 MiB | 92.7% → 92.8% | 54.6 MiB → 55.6 MiB | 21,155 → 21,156 | `format_file_contents`       | `black/__init__.py:1054`                                         |
|  +1.8% | +1 MiB | 92.7% → 92.8% | 54.6 MiB → 55.6 MiB | 21,156 → 21,157 | `format_file_in_place`       | `black/__init__.py:917`                                          |
|  +1.8% | +1 MiB | 92.7% → 92.9% | 54.6 MiB → 55.6 MiB | 21,168 → 21,169 | `reformat_one`               | `black/__init__.py:860`                                          |
|  +1.8% | +1 MiB | 92.7% → 92.9% | 54.6 MiB → 55.6 MiB | 21,173 → 21,174 | `main`                       | `black/__init__.py:244`                                          |
|  +1.8% | +1 MiB | 92.8% → 92.9% | 54.6 MiB → 55.6 MiB | 21,175 → 21,176 | `new_func`                   | `/venv13/lib/python3.11/site-packages/click/decorators.py:33`    |
|  +1.8% | +1 MiB | 92.8% → 92.9% | 54.6 MiB → 55.6 MiB | 21,176 → 21,177 | `invoke`                     | `/venv13/lib/python3.11/site-packages/click/core.py:853`         |
|  +1.8% | +1 MiB | 92.8% → 92.9% | 54.6 MiB → 55.6 MiB | 21,178 → 21,179 | `invoke`                     | `/venv13/lib/python3.11/site-packages/click/core.py:1339`        |
|  +1.8% | +1 MiB | 92.8% → 92.9% | 54.7 MiB → 55.7 MiB | 21,198 → 21,199 | `main`                       | `/venv13/lib/python3.11/site-packages/click/core.py:1422`        |
|  +1.8% | +1 MiB | 92.8% → 92.9% | 54.7 MiB → 55.7 MiB | 21,199 → 21,200 | `__call__`                   | `/venv13/lib/python3.11/site-packages/click/core.py:1567`        |
|  +1.8% | +1 MiB | 92.8% → 92.9% | 54.7 MiB → 55.7 MiB | 21,199 → 21,200 | `patched_main`               | `black/__init__.py:1594`                                         |
|  +1.8% | +1 MiB | 92.8% → 92.9% | 54.7 MiB → 55.7 MiB | 21,199 → 21,200 | `<module>`                   | `black/__main__.py:1`                                            |
|  +1.8% | +1 MiB | 92.8% → 92.9% | 54.7 MiB → 55.7 MiB | 21,199 → 21,200 | `_run_code`                  | `<frozen runpy>:65`                                              |
|  +1.8% | +1 MiB | 92.8% → 92.9% | 54.7 MiB → 55.7 MiB | 21,199 → 21,200 | `_run_module_code`           | `<frozen runpy>:91`                                              |
|  +1.7% | +1 MiB |        100.0% | 58.9 MiB → 59.9 MiB | 22,469 → 22,470 | `run_module`                 | `<frozen runpy>:201`                                             |
|  +1.7% | +1 MiB |        100.0% | 58.9 MiB → 59.9 MiB | 22,470 → 22,471 | `_run_tracker`               | `/venv13/lib/python3.11/site-packages/memray/commands/run.py:40` |
|  +2.0% | +1 MiB | 85.9% → 86.2% | 50.6 MiB → 51.6 MiB | 21,147 → 21,148 | `_format_str_once`           | `black/__init__.py:1236`                                         |
|  +2.9% | +1 MiB | 59.6% → 60.2% | 35.1 MiB → 36.1 MiB |         94 → 95 | `format_str`                 | `black/__init__.py:1189`                                         |
| +11.1% | +1 MiB | 15.3% → 16.8% |   9.04 MiB → 10 MiB |         16 → 17 | `addtoken`                   | `blib2to3/pgen2/parse.py:242`                                    |

##### Ours

|     Change |  Delta |             % |                Size |     Allocations | Function                     | Location                      |
| ---------: | -----: | ------------: | ------------------: | --------------: | ---------------------------- | ----------------------------- |
|     +99.9% | +2 MiB |   3.4% → 6.7% |       2 MiB → 4 MiB |           3 → 5 | `normalize_invisible_parens` | `black/linegen.py:1328`       |
|     +40.0% | +2 MiB |  8.5% → 11.7% |       5 MiB → 7 MiB |           5 → 7 | `shift`                      | `blib2to3/pgen2/parse.py:373` |
|      +1.8% | +1 MiB | 92.7% → 92.8% | 54.6 MiB → 55.6 MiB | 21,155 → 21,156 | `format_file_contents`       | `black/__init__.py:1054`      |
|      +1.8% | +1 MiB | 92.7% → 92.8% | 54.6 MiB → 55.6 MiB | 21,156 → 21,157 | `format_file_in_place`       | `black/__init__.py:917`       |
|      +1.8% | +1 MiB | 92.7% → 92.9% | 54.6 MiB → 55.6 MiB | 21,168 → 21,169 | `reformat_one`               | `black/__init__.py:860`       |
|      +1.8% | +1 MiB | 92.7% → 92.9% | 54.6 MiB → 55.6 MiB | 21,173 → 21,174 | `main`                       | `black/__init__.py:244`       |
|      +1.8% | +1 MiB | 92.8% → 92.9% | 54.7 MiB → 55.7 MiB | 21,199 → 21,200 | `patched_main`               | `black/__init__.py:1594`      |
|      +1.8% | +1 MiB | 92.8% → 92.9% | 54.7 MiB → 55.7 MiB | 21,199 → 21,200 | `<module>`                   | `black/__main__.py:1`         |
|      +2.0% | +1 MiB | 85.9% → 86.2% | 50.6 MiB → 51.6 MiB | 21,147 → 21,148 | `_format_str_once`           | `black/__init__.py:1236`      |
|      +2.9% | +1 MiB | 59.6% → 60.2% | 35.1 MiB → 36.1 MiB |         94 → 95 | `format_str`                 | `black/__init__.py:1189`      |
|     +11.1% | +1 MiB | 15.3% → 16.8% |   9.04 MiB → 10 MiB |         16 → 17 | `addtoken`                   | `blib2to3/pgen2/parse.py:242` |
|      +2.7% | +1 MiB | 61.9% → 62.5% | 36.4 MiB → 37.4 MiB | 21,087 → 21,088 | `visit`                      | `black/nodes.py:163`          |
|      +2.7% | +1 MiB | 61.9% → 62.5% | 36.4 MiB → 37.4 MiB | 21,085 → 21,086 | `visit_default`              | `black/nodes.py:187`          |
|      +2.7% | +1 MiB | 61.9% → 62.5% | 36.4 MiB → 37.4 MiB | 21,085 → 21,086 | `visit_default`              | `black/linegen.py:134`        |
|      +4.2% | +1 MiB | 40.4% → 41.4% | 23.8 MiB → 24.8 MiB | 13,402 → 13,403 | `visit_simple_stmt`          | `black/linegen.py:295`        |
|      +2.8% | +1 MiB | 60.7% → 61.3% | 35.7 MiB → 36.7 MiB | 20,147 → 20,148 | `visit_suite`                | `black/linegen.py:288`        |
|      +2.8% | +1 MiB | 61.4% → 62.0% | 36.2 MiB → 37.2 MiB | 20,714 → 20,715 | `visit_stmt`                 | `black/linegen.py:199`        |
|      +2.9% | +1 MiB | 59.1% → 59.8% | 34.8 MiB → 35.8 MiB | 20,272 → 20,273 | `visit_funcdef`              | `black/linegen.py:254`        |
| +108999.6% | +1 MiB |  <0.1% → 1.7% |       962 B → 1 MiB |           1 → 2 | `_maybe_empty_lines`         | `black/lines.py:610`          |
|  +49979.8% | +1 MiB |  <0.1% → 1.7% |    2.05 KiB → 1 MiB |           2 → 3 | `maybe_empty_lines`          | `black/lines.py:560`          |

##### Standard library

| Change |  Delta |             % |                Size |     Allocations | Function           | Location             |
| -----: | -----: | ------------: | ------------------: | --------------: | ------------------ | -------------------- |
|  +1.8% | +1 MiB | 92.8% → 92.9% | 54.7 MiB → 55.7 MiB | 21,199 → 21,200 | `_run_code`        | `<frozen runpy>:65`  |
|  +1.8% | +1 MiB | 92.8% → 92.9% | 54.7 MiB → 55.7 MiB | 21,199 → 21,200 | `_run_module_code` | `<frozen runpy>:91`  |
|  +1.7% | +1 MiB |        100.0% | 58.9 MiB → 59.9 MiB | 22,469 → 22,470 | `run_module`       | `<frozen runpy>:201` |

#### Improvements

Functions with the largest decrease in total bytes never freed in the function and all its callees.

##### Ours

|  Change |  Delta |             % |                Size |     Allocations | Function                    | Location                      |
| ------: | -----: | ------------: | ------------------: | --------------: | --------------------------- | ----------------------------- |
|  -16.5% | -4 MiB | 41.2% → 33.9% | 24.3 MiB → 20.3 MiB | 20,889 → 20,885 | `append`                    | `black/lines.py:63`           |
|  -58.3% | -3 MiB |   8.7% → 3.6% | 5.14 MiB → 2.14 MiB |       200 → 197 | `update_sibling_maps`       | `blib2to3/pytree.py:369`      |
|  -48.8% | -3 MiB |  10.4% → 5.2% | 6.14 MiB → 3.14 MiB |       201 → 198 | `prev_sibling`              | `blib2to3/pytree.py:207`      |
|  -49.6% | -3 MiB |  10.3% → 5.1% | 6.05 MiB → 3.05 MiB |         95 → 92 | `whitespace`                | `black/nodes.py:194`          |
|  -10.6% | -2 MiB | 32.1% → 28.2% | 18.9 MiB → 16.9 MiB | 10,810 → 10,808 | `visit_power`               | `black/linegen.py:341`        |
|  -99.2% | -1 MiB |  1.7% → <0.1% |  1.01 MiB → 8.6 KiB |           9 → 8 | `run_transformer`           | `black/linegen.py:1755`       |
|  -48.0% | -1 MiB |   3.5% → 1.8% | 2.08 MiB → 1.08 MiB |         17 → 16 | `transform_line`            | `black/linegen.py:601`        |
|  -99.9% | -1 MiB |  1.7% → <0.1% |    1 MiB → 1.39 KiB |           2 → 1 | `split_wrapper`             | `black/linegen.py:1162`       |
|   -5.8% | -1 MiB | 29.2% → 27.1% | 17.2 MiB → 16.2 MiB | 20,789 → 20,788 | `mark`                      | `black/brackets.py:70`        |
|  -16.7% | -1 MiB |  10.2% → 8.3% |       6 MiB → 5 MiB |           6 → 5 | `changed`                   | `blib2to3/pytree.py:171`      |
|  -14.3% | -1 MiB | 11.9% → 10.0% |       7 MiB → 6 MiB |           7 → 6 | `prefix`                    | `blib2to3/pytree.py:480`      |
| removed | -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `delimiter_split`           | `black/linegen.py:1203`       |
|  -25.0% | -1 MiB |   6.8% → 5.0% |       4 MiB → 3 MiB |           4 → 3 | `normalize_trailing_prefix` | `black/comments.py:127`       |
| removed | -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__str__`                   | `blib2to3/pytree.py:440`      |
| removed | -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `__str__`                   | `black/lines.py:490`          |
| removed | -1 MiB |   1.7% → 0.0% |         1 MiB → 0 B |           1 → 0 | `line_to_string`            | `black/lines.py:1073`         |
|  -92.9% | -1 MiB |   1.8% → 0.1% |   1.08 MiB → 78 KiB |       105 → 104 | `visit_test`                | `black/linegen.py:160`        |
|  -33.3% | -1 MiB |   5.1% → 3.3% |       3 MiB → 2 MiB |           7 → 6 | `pop`                       | `blib2to3/pgen2/parse.py:398` |

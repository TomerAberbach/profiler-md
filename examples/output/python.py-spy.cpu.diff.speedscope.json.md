# Sampling profile diff

Took 1.79s → 1.90s (+110.00ms, +6.1%) over 179 samples → 190 samples (10.0ms per sample).

| Category         |  Change |    Delta |             % |            Time |   Samples |
| ---------------- | ------: | -------: | ------------: | --------------: | --------: |
| Third-party      |   +3.0% | +50.00ms | 92.2% → 89.5% |   1.65s → 1.70s | 165 → 170 |
| Standard library |  -11.1% | -10.00ms |   5.0% → 4.2% | 90.0ms → 80.0ms |     9 → 8 |
| Unknown          |  +75.0% | +30.00ms |   2.2% → 3.7% | 40.0ms → 70.0ms |     4 → 7 |
| Ours             | +400.0% | +40.00ms |   0.6% → 2.6% | 10.0ms → 50.0ms |     1 → 5 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |    Delta |           % |              Time | Samples | Function                         | Location                                                        |
| ------: | -------: | ----------: | ----------------: | ------: | -------------------------------- | --------------------------------------------------------------- |
|  +85.7% | +60.00ms | 3.9% → 6.8% |  70.0ms → 130.0ms |  7 → 13 | `generate_comments`              | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|     new | +60.00ms | 0.0% → 3.2% |      0ms → 60.0ms |   0 → 6 | `__next__`                       | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`   |
|     new | +50.00ms | 0.0% → 2.6% |      0ms → 50.0ms |   0 → 5 | `normalize_invisible_parens`     | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| +133.3% | +40.00ms | 1.7% → 3.7% |   30.0ms → 70.0ms |   3 → 7 | `__init__`                       | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| +400.0% | +40.00ms | 0.6% → 2.6% |   10.0ms → 50.0ms |   1 → 5 | `__init__`                       | `<string>`                                                      |
|  +75.0% | +30.00ms | 2.2% → 3.7% |   40.0ms → 70.0ms |   4 → 7 | `mark`                           | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
|  +75.0% | +30.00ms | 2.2% → 3.7% |   40.0ms → 70.0ms |   4 → 7 | `(anonymous)`                    | `<unknown>`                                                     |
| +100.0% | +30.00ms | 1.7% → 3.2% |   30.0ms → 60.0ms |   3 → 6 | `convert`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| +300.0% | +30.00ms | 0.6% → 2.1% |   10.0ms → 40.0ms |   1 → 4 | `_stringify_ast`                 | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
|  +15.4% | +20.00ms | 7.3% → 7.9% | 130.0ms → 150.0ms | 13 → 15 | `generate_tokens`                | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|     new | +20.00ms | 0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `append_comment`                 | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|     new | +20.00ms | 0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `sub_twice`                      | `/venv/lib/python3.11/site-packages/black/strings.py`           |
| +200.0% | +20.00ms | 0.6% → 1.6% |   10.0ms → 30.0ms |   1 → 3 | `parse_tokens`                   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`   |
|  +33.3% | +20.00ms | 3.4% → 4.2% |   60.0ms → 80.0ms |   6 → 8 | `visit`                          | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  +20.0% | +10.00ms | 2.8% → 3.2% |   50.0ms → 60.0ms |   5 → 6 | `push`                           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  +33.3% | +10.00ms | 1.7% → 2.1% |   30.0ms → 40.0ms |   3 → 4 | `prefix`                         | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  +25.0% | +10.00ms | 2.2% → 2.6% |   40.0ms → 50.0ms |   4 → 5 | `normalize_trailing_prefix`      | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|  +33.3% | +10.00ms | 1.7% → 2.1% |   30.0ms → 40.0ms |   3 → 4 | `_stringify_ast_with_new_parent` | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `is_fstring_start`               | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| +100.0% | +10.00ms | 0.6% → 1.1% |   10.0ms → 20.0ms |   1 → 2 | `append`                         | `/venv/lib/python3.11/site-packages/black/lines.py`             |

##### Third-party

|  Change |    Delta |           % |              Time | Samples | Function                         | Location                                                        |
| ------: | -------: | ----------: | ----------------: | ------: | -------------------------------- | --------------------------------------------------------------- |
|  +85.7% | +60.00ms | 3.9% → 6.8% |  70.0ms → 130.0ms |  7 → 13 | `generate_comments`              | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|     new | +60.00ms | 0.0% → 3.2% |      0ms → 60.0ms |   0 → 6 | `__next__`                       | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`   |
|     new | +50.00ms | 0.0% → 2.6% |      0ms → 50.0ms |   0 → 5 | `normalize_invisible_parens`     | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| +133.3% | +40.00ms | 1.7% → 3.7% |   30.0ms → 70.0ms |   3 → 7 | `__init__`                       | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  +75.0% | +30.00ms | 2.2% → 3.7% |   40.0ms → 70.0ms |   4 → 7 | `mark`                           | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| +100.0% | +30.00ms | 1.7% → 3.2% |   30.0ms → 60.0ms |   3 → 6 | `convert`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| +300.0% | +30.00ms | 0.6% → 2.1% |   10.0ms → 40.0ms |   1 → 4 | `_stringify_ast`                 | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
|  +15.4% | +20.00ms | 7.3% → 7.9% | 130.0ms → 150.0ms | 13 → 15 | `generate_tokens`                | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|     new | +20.00ms | 0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `append_comment`                 | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|     new | +20.00ms | 0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `sub_twice`                      | `/venv/lib/python3.11/site-packages/black/strings.py`           |
| +200.0% | +20.00ms | 0.6% → 1.6% |   10.0ms → 30.0ms |   1 → 3 | `parse_tokens`                   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`   |
|  +33.3% | +20.00ms | 3.4% → 4.2% |   60.0ms → 80.0ms |   6 → 8 | `visit`                          | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  +20.0% | +10.00ms | 2.8% → 3.2% |   50.0ms → 60.0ms |   5 → 6 | `push`                           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  +33.3% | +10.00ms | 1.7% → 2.1% |   30.0ms → 40.0ms |   3 → 4 | `prefix`                         | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  +25.0% | +10.00ms | 2.2% → 2.6% |   40.0ms → 50.0ms |   4 → 5 | `normalize_trailing_prefix`      | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|  +33.3% | +10.00ms | 1.7% → 2.1% |   30.0ms → 40.0ms |   3 → 4 | `_stringify_ast_with_new_parent` | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `is_fstring_start`               | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| +100.0% | +10.00ms | 0.6% → 1.1% |   10.0ms → 20.0ms |   1 → 2 | `append`                         | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `transform_line`                 | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| +100.0% | +10.00ms | 0.6% → 1.1% |   10.0ms → 20.0ms |   1 → 2 | `hug_power_op`                   | `/venv/lib/python3.11/site-packages/black/trans.py`             |

##### Standard library

| Change |    Delta |           % |         Time | Samples | Function            | Location                                 |
| -----: | -------: | ----------: | -----------: | ------: | ------------------- | ---------------------------------------- |
|    new | +10.00ms | 0.0% → 0.5% | 0ms → 10.0ms |   0 → 1 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |

##### Unknown

| Change |    Delta |           % |            Time | Samples | Function      | Location    |
| -----: | -------: | ----------: | --------------: | ------: | ------------- | ----------- |
| +75.0% | +30.00ms | 2.2% → 3.7% | 40.0ms → 70.0ms |   4 → 7 | `(anonymous)` | `<unknown>` |

##### Ours

|  Change |    Delta |           % |            Time | Samples | Function   | Location   |
| ------: | -------: | ----------: | --------------: | ------: | ---------- | ---------- |
| +400.0% | +40.00ms | 0.6% → 2.6% | 10.0ms → 50.0ms |   1 → 5 | `__init__` | `<string>` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |              Time | Samples | Function                     | Location                                                        |
| ------: | -------: | -----------: | ----------------: | ------: | ---------------------------- | --------------------------------------------------------------- |
|  -36.8% | -70.00ms | 10.6% → 6.3% | 190.0ms → 120.0ms | 19 → 12 | `_addtoken`                  | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| removed | -60.00ms |  3.4% → 0.0% |      60.0ms → 0ms |   6 → 0 | `update_sibling_maps`        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| removed | -40.00ms |  2.2% → 0.0% |      40.0ms → 0ms |   4 → 0 | `maybe_empty_lines`          | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -50.0% | -40.00ms |  4.5% → 2.1% |   80.0ms → 40.0ms |   8 → 4 | `<genexpr>`                  | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -50.0% | -30.00ms |  3.4% → 1.6% |   60.0ms → 30.0ms |   6 → 3 | `__str__`                    | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -37.5% | -30.00ms |  4.5% → 2.6% |   80.0ms → 50.0ms |   8 → 5 | `pop`                        | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  -18.2% | -20.00ms |  6.1% → 4.7% |  110.0ms → 90.0ms |  11 → 9 | `visit_default`              | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| removed | -20.00ms |  1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `shift`                      | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| removed | -20.00ms |  1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `<genexpr>`                  | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|  -50.0% | -20.00ms |  2.2% → 1.1% |   40.0ms → 20.0ms |   4 → 2 | `get_features_used`          | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
| removed | -20.00ms |  1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `_contains_fmt_skip_comment` | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| removed | -20.00ms |  1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `is_split_before_delimiter`  | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| removed | -20.00ms |  1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `visit_power`                | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| removed | -20.00ms |  1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `is_docstring`               | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  -66.7% | -20.00ms |  1.7% → 0.5% |   30.0ms → 10.0ms |   3 → 1 | `whitespace`                 | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  -22.2% | -20.00ms |  5.0% → 3.7% |   90.0ms → 70.0ms |   9 → 7 | `parse`                      | `/usr/lib/python3.11/ast.py`                                    |
|  -50.0% | -10.00ms |  1.1% → 0.5% |   20.0ms → 10.0ms |   2 → 1 | `classify`                   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| removed | -10.00ms |  0.6% → 0.0% |      10.0ms → 0ms |   1 → 0 | `__contains__`               | `/venv/lib/python3.11/site-packages/black/mode.py`              |
| removed | -10.00ms |  0.6% → 0.0% |      10.0ms → 0ms |   1 → 0 | `_maybe_empty_lines`         | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| removed | -10.00ms |  0.6% → 0.0% |      10.0ms → 0ms |   1 → 0 | `normalize_numeric_literal`  | `/venv/lib/python3.11/site-packages/black/numerics.py`          |

##### Third-party

|  Change |    Delta |            % |              Time | Samples | Function                     | Location                                                        |
| ------: | -------: | -----------: | ----------------: | ------: | ---------------------------- | --------------------------------------------------------------- |
|  -36.8% | -70.00ms | 10.6% → 6.3% | 190.0ms → 120.0ms | 19 → 12 | `_addtoken`                  | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| removed | -60.00ms |  3.4% → 0.0% |      60.0ms → 0ms |   6 → 0 | `update_sibling_maps`        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| removed | -40.00ms |  2.2% → 0.0% |      40.0ms → 0ms |   4 → 0 | `maybe_empty_lines`          | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -50.0% | -40.00ms |  4.5% → 2.1% |   80.0ms → 40.0ms |   8 → 4 | `<genexpr>`                  | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -50.0% | -30.00ms |  3.4% → 1.6% |   60.0ms → 30.0ms |   6 → 3 | `__str__`                    | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -37.5% | -30.00ms |  4.5% → 2.6% |   80.0ms → 50.0ms |   8 → 5 | `pop`                        | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  -18.2% | -20.00ms |  6.1% → 4.7% |  110.0ms → 90.0ms |  11 → 9 | `visit_default`              | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| removed | -20.00ms |  1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `shift`                      | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| removed | -20.00ms |  1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `<genexpr>`                  | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|  -50.0% | -20.00ms |  2.2% → 1.1% |   40.0ms → 20.0ms |   4 → 2 | `get_features_used`          | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
| removed | -20.00ms |  1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `_contains_fmt_skip_comment` | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| removed | -20.00ms |  1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `is_split_before_delimiter`  | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| removed | -20.00ms |  1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `visit_power`                | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| removed | -20.00ms |  1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `is_docstring`               | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  -66.7% | -20.00ms |  1.7% → 0.5% |   30.0ms → 10.0ms |   3 → 1 | `whitespace`                 | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  -50.0% | -10.00ms |  1.1% → 0.5% |   20.0ms → 10.0ms |   2 → 1 | `classify`                   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| removed | -10.00ms |  0.6% → 0.0% |      10.0ms → 0ms |   1 → 0 | `__contains__`               | `/venv/lib/python3.11/site-packages/black/mode.py`              |
| removed | -10.00ms |  0.6% → 0.0% |      10.0ms → 0ms |   1 → 0 | `_maybe_empty_lines`         | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| removed | -10.00ms |  0.6% → 0.0% |      10.0ms → 0ms |   1 → 0 | `normalize_numeric_literal`  | `/venv/lib/python3.11/site-packages/black/numerics.py`          |
| removed | -10.00ms |  0.6% → 0.0% |      10.0ms → 0ms |   1 → 0 | `any_open_brackets`          | `/venv/lib/python3.11/site-packages/black/brackets.py`          |

##### Standard library

| Change |    Delta |           % |            Time | Samples | Function | Location                     |
| -----: | -------: | ----------: | --------------: | ------: | -------- | ---------------------------- |
| -22.2% | -20.00ms | 5.0% → 3.7% | 90.0ms → 70.0ms |   9 → 7 | `parse`  | `/usr/lib/python3.11/ast.py` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |     Delta |             % |              Time |   Samples | Function                     | Location                                                      |
| ------: | --------: | ------------: | ----------------: | --------: | ---------------------------- | ------------------------------------------------------------- |
|  +27.0% | +100.00ms | 20.7% → 24.7% | 370.0ms → 470.0ms |   37 → 47 | `visit_simple_stmt`          | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| +450.0% |  +90.00ms |   1.1% → 5.8% |  20.0ms → 110.0ms |    2 → 11 | `normalize_invisible_parens` | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
|   +4.6% |  +80.00ms | 97.8% → 96.3% |     1.75s → 1.83s | 175 → 183 | `_run_module_as_main`        | `<frozen runpy>`                                              |
|  +46.7% |  +70.00ms |  8.4% → 11.6% | 150.0ms → 220.0ms |   15 → 22 | `__next__`                   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
|  +66.7% |  +60.00ms |   5.0% → 7.9% |  90.0ms → 150.0ms |    9 → 15 | `convert`                    | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |
|  +40.0% |  +60.00ms |  8.4% → 11.1% | 150.0ms → 210.0ms |   15 → 21 | `generate_comments`          | `/venv/lib/python3.11/site-packages/black/comments.py`        |
|   +6.9% |  +50.00ms | 40.2% → 40.5% | 720.0ms → 770.0ms |   72 → 77 | `visit_default`              | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
|   +6.9% |  +50.00ms | 40.2% → 40.5% | 720.0ms → 770.0ms |   72 → 77 | `visit`                      | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
|   +6.9% |  +50.00ms | 40.2% → 40.5% | 720.0ms → 770.0ms |   72 → 77 | `visit_default`              | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
|   +3.4% |  +40.00ms | 64.8% → 63.2% |     1.16s → 1.20s | 116 → 120 | `format_str`                 | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `format_file_contents`       | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `format_file_in_place`       | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `reformat_one`               | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `main`                       | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `new_func`                   | `/venv/lib/python3.11/site-packages/click/decorators.py`      |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `invoke`                     | `/venv/lib/python3.11/site-packages/click/core.py`            |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `main`                       | `/venv/lib/python3.11/site-packages/click/core.py`            |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `__call__`                   | `/venv/lib/python3.11/site-packages/click/core.py`            |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `patched_main`               | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `<module>`                   | `/venv/lib/python3.11/site-packages/black/__main__.py`        |

##### Third-party

|  Change |     Delta |             % |              Time |   Samples | Function                     | Location                                                      |
| ------: | --------: | ------------: | ----------------: | --------: | ---------------------------- | ------------------------------------------------------------- |
|  +27.0% | +100.00ms | 20.7% → 24.7% | 370.0ms → 470.0ms |   37 → 47 | `visit_simple_stmt`          | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| +450.0% |  +90.00ms |   1.1% → 5.8% |  20.0ms → 110.0ms |    2 → 11 | `normalize_invisible_parens` | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
|  +46.7% |  +70.00ms |  8.4% → 11.6% | 150.0ms → 220.0ms |   15 → 22 | `__next__`                   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
|  +66.7% |  +60.00ms |   5.0% → 7.9% |  90.0ms → 150.0ms |    9 → 15 | `convert`                    | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |
|  +40.0% |  +60.00ms |  8.4% → 11.1% | 150.0ms → 210.0ms |   15 → 21 | `generate_comments`          | `/venv/lib/python3.11/site-packages/black/comments.py`        |
|   +6.9% |  +50.00ms | 40.2% → 40.5% | 720.0ms → 770.0ms |   72 → 77 | `visit_default`              | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
|   +6.9% |  +50.00ms | 40.2% → 40.5% | 720.0ms → 770.0ms |   72 → 77 | `visit`                      | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
|   +6.9% |  +50.00ms | 40.2% → 40.5% | 720.0ms → 770.0ms |   72 → 77 | `visit_default`              | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
|   +3.4% |  +40.00ms | 64.8% → 63.2% |     1.16s → 1.20s | 116 → 120 | `format_str`                 | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `format_file_contents`       | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `format_file_in_place`       | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `reformat_one`               | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `main`                       | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `new_func`                   | `/venv/lib/python3.11/site-packages/click/decorators.py`      |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `invoke`                     | `/venv/lib/python3.11/site-packages/click/core.py`            |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `main`                       | `/venv/lib/python3.11/site-packages/click/core.py`            |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `__call__`                   | `/venv/lib/python3.11/site-packages/click/core.py`            |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `patched_main`               | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
|   +2.3% |  +40.00ms | 97.8% → 94.2% |     1.75s → 1.79s | 175 → 179 | `<module>`                   | `/venv/lib/python3.11/site-packages/black/__main__.py`        |
| +133.3% |  +40.00ms |   1.7% → 3.7% |   30.0ms → 70.0ms |     3 → 7 | `__init__`                   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |

##### Standard library

| Change |    Delta |             % |          Time |   Samples | Function                    | Location                                 |
| -----: | -------: | ------------: | ------------: | --------: | --------------------------- | ---------------------------------------- |
|  +4.6% | +80.00ms | 97.8% → 96.3% | 1.75s → 1.83s | 175 → 183 | `_run_module_as_main`       | `<frozen runpy>`                         |
|  +2.3% | +40.00ms | 97.8% → 94.2% | 1.75s → 1.79s | 175 → 179 | `_run_code`                 | `<frozen runpy>`                         |
|    new | +40.00ms |   0.0% → 2.1% |  0ms → 40.0ms |     0 → 4 | `exec_module`               | `<frozen importlib._bootstrap_external>` |
|    new | +40.00ms |   0.0% → 2.1% |  0ms → 40.0ms |     0 → 4 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|    new | +40.00ms |   0.0% → 2.1% |  0ms → 40.0ms |     0 → 4 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
|    new | +40.00ms |   0.0% → 2.1% |  0ms → 40.0ms |     0 → 4 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
|    new | +40.00ms |   0.0% → 2.1% |  0ms → 40.0ms |     0 → 4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|    new | +40.00ms |   0.0% → 2.1% |  0ms → 40.0ms |     0 → 4 | `_get_module_details`       | `<frozen runpy>`                         |
|    new | +10.00ms |   0.0% → 0.5% |  0ms → 10.0ms |     0 → 1 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
|    new | +10.00ms |   0.0% → 0.5% |  0ms → 10.0ms |     0 → 1 | `get_code`                  | `<frozen importlib._bootstrap_external>` |
|    new | +10.00ms |   0.0% → 0.5% |  0ms → 10.0ms |     0 → 1 | `_handle_fromlist`          | `<frozen importlib._bootstrap>`          |

##### Unknown

| Change |    Delta |           % |            Time | Samples | Function      | Location    |
| -----: | -------: | ----------: | --------------: | ------: | ------------- | ----------- |
| +75.0% | +30.00ms | 2.2% → 3.7% | 40.0ms → 70.0ms |   4 → 7 | `(anonymous)` | `<unknown>` |

##### Ours

|  Change |    Delta |           % |            Time | Samples | Function   | Location   |
| ------: | -------: | ----------: | --------------: | ------: | ---------- | ---------- |
| +400.0% | +40.00ms | 0.6% → 2.6% | 10.0ms → 50.0ms |   1 → 5 | `__init__` | `<string>` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

##### Third-party

|  Change |    Delta |             % |              Time | Samples | Function                     | Location                                                        |
| ------: | -------: | ------------: | ----------------: | ------: | ---------------------------- | --------------------------------------------------------------- |
|  -72.7% | -80.00ms |   6.1% → 1.6% |  110.0ms → 30.0ms |  11 → 3 | `whitespace`                 | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  -25.0% | -70.00ms | 15.6% → 11.1% | 280.0ms → 210.0ms | 28 → 21 | `append`                     | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -13.3% | -60.00ms | 25.1% → 20.5% | 450.0ms → 390.0ms | 45 → 39 | `addtoken`                   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  -85.7% | -60.00ms |   3.9% → 0.5% |   70.0ms → 10.0ms |   7 → 1 | `prev_sibling`               | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| removed | -60.00ms |   3.4% → 0.0% |      60.0ms → 0ms |   6 → 0 | `update_sibling_maps`        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  -11.6% | -50.00ms | 24.0% → 20.0% | 430.0ms → 380.0ms | 43 → 38 | `_addtoken`                  | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  -12.5% | -40.00ms | 17.9% → 14.7% | 320.0ms → 280.0ms | 32 → 28 | `visit_power`                | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  -50.0% | -40.00ms |   4.5% → 2.1% |   80.0ms → 40.0ms |   8 → 4 | `<genexpr>`                  | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -40.0% | -40.00ms |   5.6% → 3.2% |  100.0ms → 60.0ms |  10 → 6 | `is_complex_subscript`       | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|   -6.5% | -30.00ms | 25.7% → 22.6% | 460.0ms → 430.0ms | 46 → 43 | `assert_stable`              | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
|  -50.0% | -30.00ms |   3.4% → 1.6% |   60.0ms → 30.0ms |   6 → 3 | `__str__`                    | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| removed | -20.00ms |   1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `<genexpr>`                  | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| removed | -20.00ms |   1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `_contains_fmt_skip_comment` | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| removed | -20.00ms |   1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `convert_one_fmt_off_pair`   | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| removed | -20.00ms |   1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `normalize_fmt_off`          | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| removed | -20.00ms |   1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `is_split_before_delimiter`  | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| removed | -20.00ms |   1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `split_wrapper`              | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  -28.6% | -20.00ms |   3.9% → 2.6% |   70.0ms → 50.0ms |   7 → 5 | `get_features_used`          | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
|  -28.6% | -20.00ms |   3.9% → 2.6% |   70.0ms → 50.0ms |   7 → 5 | `detect_target_versions`     | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
|  -22.2% | -20.00ms |   5.0% → 3.7% |   90.0ms → 70.0ms |   9 → 7 | `visit_NUMBER`               | `/venv/lib/python3.11/site-packages/black/linegen.py`           |

##### Standard library

| Change |    Delta |           % |            Time | Samples | Function | Location                     |
| -----: | -------: | ----------: | --------------: | ------: | -------- | ---------------------------- |
| -22.2% | -20.00ms | 5.0% → 3.7% | 90.0ms → 70.0ms |   9 → 7 | `parse`  | `/usr/lib/python3.11/ast.py` |

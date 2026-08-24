# Sampling profile diff

Took 1.90s → 1.98s (+80.00ms, +4.2%) over 190 samples → 198 samples (10.0ms per sample).

| Category         | Change |     Delta |             % |              Time |   Samples |
| ---------------- | -----: | --------: | ------------: | ----------------: | --------: |
| Third-party      | +10.1% | +160.00ms | 83.7% → 88.4% |     1.59s → 1.75s | 159 → 175 |
| Standard library |  +6.7% |  +10.00ms |   7.9% → 8.1% | 150.0ms → 160.0ms |   15 → 16 |
| Ours             | -16.7% |  -10.00ms |   3.2% → 2.5% |   60.0ms → 50.0ms |     6 → 5 |
| Unknown          | -80.0% |  -80.00ms |   5.3% → 1.0% |  100.0ms → 20.0ms |    10 → 2 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

##### Third-party

|  Change |    Delta |           % |              Time | Samples | Function                    | Location                                                        |
| ------: | -------: | ----------: | ----------------: | ------: | --------------------------- | --------------------------------------------------------------- |
| +800.0% | +80.00ms | 0.5% → 4.5% |   10.0ms → 90.0ms |   1 → 9 | `__init__`                  | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| +700.0% | +70.00ms | 0.5% → 4.0% |   10.0ms → 80.0ms |   1 → 8 | `append`                    | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  +85.7% | +60.00ms | 3.7% → 6.6% |  70.0ms → 130.0ms |  7 → 13 | `generate_tokens`           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| +400.0% | +40.00ms | 0.5% → 2.5% |   10.0ms → 50.0ms |   1 → 5 | `pop`                       | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|     new | +40.00ms | 0.0% → 2.0% |      0ms → 40.0ms |   0 → 4 | `assert_equivalent`         | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
| +400.0% | +40.00ms | 0.5% → 2.5% |   10.0ms → 50.0ms |   1 → 5 | `is_split_before_delimiter` | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
|     new | +40.00ms | 0.0% → 2.0% |      0ms → 40.0ms |   0 → 4 | `pre_order`                 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|     new | +40.00ms | 0.0% → 2.0% |      0ms → 40.0ms |   0 → 4 | `preceding_leaf`            | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|     new | +30.00ms | 0.0% → 1.5% |      0ms → 30.0ms |   0 → 3 | `type_repr`                 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|     new | +20.00ms | 0.0% → 1.0% |      0ms → 20.0ms |   0 → 2 | `normalize_trailing_prefix` | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|     new | +20.00ms | 0.0% → 1.0% |      0ms → 20.0ms |   0 → 2 | `is_multiline_string`       | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|     new | +20.00ms | 0.0% → 1.0% |      0ms → 20.0ms |   0 → 2 | `append_comment`            | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|     new | +20.00ms | 0.0% → 1.0% |      0ms → 20.0ms |   0 → 2 | `<genexpr>`                 | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
|     new | +20.00ms | 0.0% → 1.0% |      0ms → 20.0ms |   0 → 2 | `right_hand_split`          | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|     new | +20.00ms | 0.0% → 1.0% |      0ms → 20.0ms |   0 → 2 | `all_lines`                 | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  +14.3% | +20.00ms | 7.4% → 8.1% | 140.0ms → 160.0ms | 14 → 16 | `generate_comments`         | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|  +33.3% | +10.00ms | 1.6% → 2.0% |   30.0ms → 40.0ms |   3 → 4 | `prefix`                    | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `_format_str_once`          | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `format_file_in_place`      | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
| +100.0% | +10.00ms | 0.5% → 1.0% |   10.0ms → 20.0ms |   1 → 2 | `shift`                     | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |

##### Standard library

| Change |    Delta |           % |         Time | Samples | Function                  | Location                                 |
| -----: | -------: | ----------: | -----------: | ------: | ------------------------- | ---------------------------------------- |
|    new | +10.00ms | 0.0% → 0.5% | 0ms → 10.0ms |   0 → 1 | `_RandomNameSequence`     | `/usr/lib/python3.11/tempfile.py`        |
|    new | +10.00ms | 0.0% → 0.5% | 0ms → 10.0ms |   0 → 1 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>`          |
|    new | +10.00ms | 0.0% → 0.5% | 0ms → 10.0ms |   0 → 1 | `__getitem__`             | `/usr/lib/python3.11/re/_parser.py`      |
|    new | +10.00ms | 0.0% → 0.5% | 0ms → 10.0ms |   0 → 1 | `_parse`                  | `/usr/lib/python3.11/re/_parser.py`      |
|    new | +10.00ms | 0.0% → 0.5% | 0ms → 10.0ms |   0 → 1 | `_compile_bytecode`       | `<frozen importlib._bootstrap_external>` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |           % |              Time | Samples | Function             | Location                                                        |
| ------: | -------: | ----------: | ----------------: | ------: | -------------------- | --------------------------------------------------------------- |
|  -80.0% | -80.00ms | 5.3% → 1.0% |  100.0ms → 20.0ms |  10 → 2 | `(anonymous)`        | `<unknown>`                                                     |
|  -83.3% | -50.00ms | 3.2% → 0.5% |   60.0ms → 10.0ms |   6 → 1 | `mark`               | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
|  -57.1% | -40.00ms | 3.7% → 1.5% |   70.0ms → 30.0ms |   7 → 3 | `visit`              | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  -80.0% | -40.00ms | 2.6% → 0.5% |   50.0ms → 10.0ms |   5 → 1 | `push`               | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| removed | -40.00ms | 2.1% → 0.0% |      40.0ms → 0ms |   4 → 0 | `maybe_empty_lines`  | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -42.9% | -30.00ms | 3.7% → 2.0% |   70.0ms → 40.0ms |   7 → 4 | `get_features_used`  | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
|  -75.0% | -30.00ms | 2.1% → 0.5% |   40.0ms → 10.0ms |   4 → 1 | `__str__`            | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| removed | -30.00ms | 1.6% → 0.0% |      30.0ms → 0ms |   3 → 0 | `__bool__`           | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -16.7% | -20.00ms | 6.3% → 5.1% | 120.0ms → 100.0ms | 12 → 10 | `__new__`            | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  -18.2% | -20.00ms | 5.8% → 4.5% |  110.0ms → 90.0ms |  11 → 9 | `visit_default`      | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  -50.0% | -20.00ms | 2.1% → 1.0% |   40.0ms → 20.0ms |   4 → 2 | `parse_tokens`       | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`   |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `format_str`         | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `_maybe_empty_lines` | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `whitespace`         | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `visit_power`        | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `<genexpr>`          | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `_subx`              | `/usr/lib/python3.11/re/__init__.py`                            |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `visit_STRING`       | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `__str__`            | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `get_open_lsqb`      | `/venv/lib/python3.11/site-packages/black/brackets.py`          |

##### Third-party

|  Change |    Delta |           % |              Time | Samples | Function             | Location                                                        |
| ------: | -------: | ----------: | ----------------: | ------: | -------------------- | --------------------------------------------------------------- |
|  -83.3% | -50.00ms | 3.2% → 0.5% |   60.0ms → 10.0ms |   6 → 1 | `mark`               | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
|  -57.1% | -40.00ms | 3.7% → 1.5% |   70.0ms → 30.0ms |   7 → 3 | `visit`              | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
|  -80.0% | -40.00ms | 2.6% → 0.5% |   50.0ms → 10.0ms |   5 → 1 | `push`               | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
| removed | -40.00ms | 2.1% → 0.0% |      40.0ms → 0ms |   4 → 0 | `maybe_empty_lines`  | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -42.9% | -30.00ms | 3.7% → 2.0% |   70.0ms → 40.0ms |   7 → 4 | `get_features_used`  | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
|  -75.0% | -30.00ms | 2.1% → 0.5% |   40.0ms → 10.0ms |   4 → 1 | `__str__`            | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| removed | -30.00ms | 1.6% → 0.0% |      30.0ms → 0ms |   3 → 0 | `__bool__`           | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -16.7% | -20.00ms | 6.3% → 5.1% | 120.0ms → 100.0ms | 12 → 10 | `__new__`            | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  -18.2% | -20.00ms | 5.8% → 4.5% |  110.0ms → 90.0ms |  11 → 9 | `visit_default`      | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  -50.0% | -20.00ms | 2.1% → 1.0% |   40.0ms → 20.0ms |   4 → 2 | `parse_tokens`       | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`   |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `format_str`         | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `_maybe_empty_lines` | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `whitespace`         | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `visit_power`        | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `<genexpr>`          | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `visit_STRING`       | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `__str__`            | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `get_open_lsqb`      | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `<lambda>`           | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -11.1% | -20.00ms | 9.5% → 8.1% | 180.0ms → 160.0ms | 18 → 16 | `_addtoken`          | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |

##### Standard library

|  Change |    Delta |           % |              Time | Samples | Function | Location                             |
| ------: | -------: | ----------: | ----------------: | ------: | -------- | ------------------------------------ |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `_subx`  | `/usr/lib/python3.11/re/__init__.py` |
|  -15.4% | -20.00ms | 6.8% → 5.6% | 130.0ms → 110.0ms | 13 → 11 | `parse`  | `/usr/lib/python3.11/ast.py`         |

##### Unknown

| Change |    Delta |           % |             Time | Samples | Function      | Location    |
| -----: | -------: | ----------: | ---------------: | ------: | ------------- | ----------- |
| -80.0% | -80.00ms | 5.3% → 1.0% | 100.0ms → 20.0ms |  10 → 2 | `(anonymous)` | `<unknown>` |

##### Ours

| Change |    Delta |           % |            Time | Samples | Function   | Location   |
| -----: | -------: | ----------: | --------------: | ------: | ---------- | ---------- |
| -16.7% | -10.00ms | 3.2% → 2.5% | 60.0ms → 50.0ms |   6 → 5 | `__init__` | `<string>` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |     Delta |             % |              Time |   Samples | Function                          | Location                                                 |
| ------: | --------: | ------------: | ----------------: | --------: | --------------------------------- | -------------------------------------------------------- |
|   +8.9% | +160.00ms | 94.7% → 99.0% |     1.80s → 1.96s | 180 → 196 | `_run_module_as_main`             | `<frozen runpy>`                                         |
|  +36.4% | +120.00ms | 17.4% → 22.7% | 330.0ms → 450.0ms |   33 → 45 | `visit_power`                     | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
|   +6.1% | +110.00ms | 94.7% → 96.5% |     1.80s → 1.91s | 180 → 191 | `format_file_in_place`            | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|   +6.1% | +110.00ms | 94.7% → 96.5% |     1.80s → 1.91s | 180 → 191 | `reformat_one`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|   +6.1% | +110.00ms | 94.7% → 96.5% |     1.80s → 1.91s | 180 → 191 | `main`                            | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|   +6.1% | +110.00ms | 94.7% → 96.5% |     1.80s → 1.91s | 180 → 191 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py` |
|   +6.1% | +110.00ms | 94.7% → 96.5% |     1.80s → 1.91s | 180 → 191 | `invoke`                          | `/venv/lib/python3.11/site-packages/click/core.py`       |
|   +6.1% | +110.00ms | 94.7% → 96.5% |     1.80s → 1.91s | 180 → 191 | `main`                            | `/venv/lib/python3.11/site-packages/click/core.py`       |
|   +6.1% | +110.00ms | 94.7% → 96.5% |     1.80s → 1.91s | 180 → 191 | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py`       |
|   +6.1% | +110.00ms | 94.7% → 96.5% |     1.80s → 1.91s | 180 → 191 | `patched_main`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|   +6.1% | +110.00ms | 94.7% → 96.5% |     1.80s → 1.91s | 180 → 191 | `<module>`                        | `/venv/lib/python3.11/site-packages/black/__main__.py`   |
|   +6.1% | +110.00ms | 94.7% → 96.5% |     1.80s → 1.91s | 180 → 191 | `_run_code`                       | `<frozen runpy>`                                         |
|  +22.4% | +110.00ms | 25.8% → 30.3% | 490.0ms → 600.0ms |   49 → 60 | `visit_simple_stmt`               | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
|  +16.2% | +110.00ms | 35.8% → 39.9% | 680.0ms → 790.0ms |   68 → 79 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|   +5.6% | +100.00ms | 94.7% → 96.0% |     1.80s → 1.90s | 180 → 190 | `format_file_contents`            | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|  +15.6% | +100.00ms | 33.7% → 37.4% | 640.0ms → 740.0ms |   64 → 74 | `visit_stmt`                      | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
|   +5.7% |  +90.00ms | 83.7% → 84.8% |     1.59s → 1.68s | 159 → 168 | `_format_str_once`                | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|  +52.9% |  +90.00ms |  8.9% → 13.1% | 170.0ms → 260.0ms |   17 → 26 | `append`                          | `/venv/lib/python3.11/site-packages/black/lines.py`      |
|  +13.6% |  +90.00ms | 34.7% → 37.9% | 660.0ms → 750.0ms |   66 → 75 | `visit_suite`                     | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
| +800.0% |  +80.00ms |   0.5% → 4.5% |   10.0ms → 90.0ms |     1 → 9 | `__init__`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`  |

##### Third-party

|  Change |     Delta |             % |              Time |   Samples | Function                          | Location                                                 |
| ------: | --------: | ------------: | ----------------: | --------: | --------------------------------- | -------------------------------------------------------- |
|  +36.4% | +120.00ms | 17.4% → 22.7% | 330.0ms → 450.0ms |   33 → 45 | `visit_power`                     | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
|   +6.1% | +110.00ms | 94.7% → 96.5% |     1.80s → 1.91s | 180 → 191 | `format_file_in_place`            | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|   +6.1% | +110.00ms | 94.7% → 96.5% |     1.80s → 1.91s | 180 → 191 | `reformat_one`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|   +6.1% | +110.00ms | 94.7% → 96.5% |     1.80s → 1.91s | 180 → 191 | `main`                            | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|   +6.1% | +110.00ms | 94.7% → 96.5% |     1.80s → 1.91s | 180 → 191 | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py` |
|   +6.1% | +110.00ms | 94.7% → 96.5% |     1.80s → 1.91s | 180 → 191 | `invoke`                          | `/venv/lib/python3.11/site-packages/click/core.py`       |
|   +6.1% | +110.00ms | 94.7% → 96.5% |     1.80s → 1.91s | 180 → 191 | `main`                            | `/venv/lib/python3.11/site-packages/click/core.py`       |
|   +6.1% | +110.00ms | 94.7% → 96.5% |     1.80s → 1.91s | 180 → 191 | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py`       |
|   +6.1% | +110.00ms | 94.7% → 96.5% |     1.80s → 1.91s | 180 → 191 | `patched_main`                    | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|   +6.1% | +110.00ms | 94.7% → 96.5% |     1.80s → 1.91s | 180 → 191 | `<module>`                        | `/venv/lib/python3.11/site-packages/black/__main__.py`   |
|  +22.4% | +110.00ms | 25.8% → 30.3% | 490.0ms → 600.0ms |   49 → 60 | `visit_simple_stmt`               | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
|  +16.2% | +110.00ms | 35.8% → 39.9% | 680.0ms → 790.0ms |   68 → 79 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|   +5.6% | +100.00ms | 94.7% → 96.0% |     1.80s → 1.90s | 180 → 190 | `format_file_contents`            | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|  +15.6% | +100.00ms | 33.7% → 37.4% | 640.0ms → 740.0ms |   64 → 74 | `visit_stmt`                      | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
|   +5.7% |  +90.00ms | 83.7% → 84.8% |     1.59s → 1.68s | 159 → 168 | `_format_str_once`                | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|  +52.9% |  +90.00ms |  8.9% → 13.1% | 170.0ms → 260.0ms |   17 → 26 | `append`                          | `/venv/lib/python3.11/site-packages/black/lines.py`      |
|  +13.6% |  +90.00ms | 34.7% → 37.9% | 660.0ms → 750.0ms |   66 → 75 | `visit_suite`                     | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
| +800.0% |  +80.00ms |   0.5% → 4.5% |   10.0ms → 90.0ms |     1 → 9 | `__init__`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`  |
|  +12.3% |  +80.00ms | 34.2% → 36.9% | 650.0ms → 730.0ms |   65 → 73 | `visit_funcdef`                   | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
|  +16.3% |  +80.00ms | 25.8% → 28.8% | 490.0ms → 570.0ms |   49 → 57 | `assert_stable`                   | `/venv/lib/python3.11/site-packages/black/__init__.py`   |

##### Standard library

| Change |     Delta |             % |          Time |   Samples | Function                    | Location                                  |
| -----: | --------: | ------------: | ------------: | --------: | --------------------------- | ----------------------------------------- |
|  +8.9% | +160.00ms | 94.7% → 99.0% | 1.80s → 1.96s | 180 → 196 | `_run_module_as_main`       | `<frozen runpy>`                          |
|  +6.1% | +110.00ms | 94.7% → 96.5% | 1.80s → 1.91s | 180 → 191 | `_run_code`                 | `<frozen runpy>`                          |
|    new |  +50.00ms |   0.0% → 2.5% |  0ms → 50.0ms |     0 → 5 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`           |
|    new |  +50.00ms |   0.0% → 2.5% |  0ms → 50.0ms |     0 → 5 | `exec_module`               | `<frozen importlib._bootstrap_external>`  |
|    new |  +50.00ms |   0.0% → 2.5% |  0ms → 50.0ms |     0 → 5 | `_load_unlocked`            | `<frozen importlib._bootstrap>`           |
|    new |  +50.00ms |   0.0% → 2.5% |  0ms → 50.0ms |     0 → 5 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`           |
|    new |  +50.00ms |   0.0% → 2.5% |  0ms → 50.0ms |     0 → 5 | `_find_and_load`            | `<frozen importlib._bootstrap>`           |
|    new |  +50.00ms |   0.0% → 2.5% |  0ms → 50.0ms |     0 → 5 | `_get_module_details`       | `<frozen runpy>`                          |
|    new |  +20.00ms |   0.0% → 1.0% |  0ms → 20.0ms |     0 → 2 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py`     |
|    new |  +20.00ms |   0.0% → 1.0% |  0ms → 20.0ms |     0 → 2 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py`      |
|    new |  +20.00ms |   0.0% → 1.0% |  0ms → 20.0ms |     0 → 2 | `compile`                   | `/usr/lib/python3.11/re/__init__.py`      |
|    new |  +20.00ms |   0.0% → 1.0% |  0ms → 20.0ms |     0 → 2 | `_handle_fromlist`          | `<frozen importlib._bootstrap>`           |
|    new |  +10.00ms |   0.0% → 0.5% |  0ms → 10.0ms |     0 → 1 | `_RandomNameSequence`       | `/usr/lib/python3.11/tempfile.py`         |
|    new |  +10.00ms |   0.0% → 0.5% |  0ms → 10.0ms |     0 → 1 | `<module>`                  | `/usr/lib/python3.11/tempfile.py`         |
|    new |  +10.00ms |   0.0% → 0.5% |  0ms → 10.0ms |     0 → 1 | `__getitem__`               | `/usr/lib/python3.11/re/_parser.py`       |
|    new |  +10.00ms |   0.0% → 0.5% |  0ms → 10.0ms |     0 → 1 | `_simple`                   | `/usr/lib/python3.11/re/_compiler.py`     |
|    new |  +10.00ms |   0.0% → 0.5% |  0ms → 10.0ms |     0 → 1 | `_compile`                  | `/usr/lib/python3.11/re/_compiler.py`     |
|    new |  +10.00ms |   0.0% → 0.5% |  0ms → 10.0ms |     0 → 1 | `_code`                     | `/usr/lib/python3.11/re/_compiler.py`     |
|    new |  +10.00ms |   0.0% → 0.5% |  0ms → 10.0ms |     0 → 1 | `StrFormatStyle`            | `/usr/lib/python3.11/logging/__init__.py` |
|    new |  +10.00ms |   0.0% → 0.5% |  0ms → 10.0ms |     0 → 1 | `<module>`                  | `/usr/lib/python3.11/logging/__init__.py` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |           % |              Time | Samples | Function                                           | Location                                                        |
| ------: | -------: | ----------: | ----------------: | ------: | -------------------------------------------------- | --------------------------------------------------------------- |
|  -80.0% | -80.00ms | 5.3% → 1.0% |  100.0ms → 20.0ms |  10 → 2 | `(anonymous)`                                      | `<unknown>`                                                     |
|  -33.3% | -50.00ms | 7.9% → 5.1% | 150.0ms → 100.0ms | 15 → 10 | `transform_line`                                   | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  -83.3% | -50.00ms | 3.2% → 0.5% |   60.0ms → 10.0ms |   6 → 1 | `__str__`                                          | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -55.6% | -50.00ms | 4.7% → 2.0% |   90.0ms → 40.0ms |   9 → 4 | `line`                                             | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  -80.0% | -40.00ms | 2.6% → 0.5% |   50.0ms → 10.0ms |   5 → 1 | `push`                                             | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  -66.7% | -40.00ms | 3.2% → 1.0% |   60.0ms → 20.0ms |   6 → 2 | `maybe_empty_lines`                                | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -75.0% | -30.00ms | 2.1% → 0.5% |   40.0ms → 10.0ms |   4 → 1 | `line_to_string`                                   | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| removed | -30.00ms | 1.6% → 0.0% |      30.0ms → 0ms |   3 → 0 | `__bool__`                                         | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -16.7% | -20.00ms | 6.3% → 5.1% | 120.0ms → 100.0ms | 12 → 10 | `__new__`                                          | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `visit_INDENT`                                     | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `_maybe_empty_lines`                               | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `<genexpr>`                                        | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `is_fstring_start`                                 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `_subx`                                            | `/usr/lib/python3.11/re/__init__.py`                            |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `__str__`                                          | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `get_open_lsqb`                                    | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `is_complex_subscript`                             | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `visit_DEDENT`                                     | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `<lambda>`                                         | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `contains_implicit_multiline_string_with_comments` | `/venv/lib/python3.11/site-packages/black/lines.py`             |

##### Third-party

|  Change |    Delta |           % |              Time | Samples | Function                                           | Location                                                        |
| ------: | -------: | ----------: | ----------------: | ------: | -------------------------------------------------- | --------------------------------------------------------------- |
|  -33.3% | -50.00ms | 7.9% → 5.1% | 150.0ms → 100.0ms | 15 → 10 | `transform_line`                                   | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  -83.3% | -50.00ms | 3.2% → 0.5% |   60.0ms → 10.0ms |   6 → 1 | `__str__`                                          | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -55.6% | -50.00ms | 4.7% → 2.0% |   90.0ms → 40.0ms |   9 → 4 | `line`                                             | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  -80.0% | -40.00ms | 2.6% → 0.5% |   50.0ms → 10.0ms |   5 → 1 | `push`                                             | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  -66.7% | -40.00ms | 3.2% → 1.0% |   60.0ms → 20.0ms |   6 → 2 | `maybe_empty_lines`                                | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -75.0% | -30.00ms | 2.1% → 0.5% |   40.0ms → 10.0ms |   4 → 1 | `line_to_string`                                   | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| removed | -30.00ms | 1.6% → 0.0% |      30.0ms → 0ms |   3 → 0 | `__bool__`                                         | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -16.7% | -20.00ms | 6.3% → 5.1% | 120.0ms → 100.0ms | 12 → 10 | `__new__`                                          | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `visit_INDENT`                                     | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `_maybe_empty_lines`                               | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `<genexpr>`                                        | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `is_fstring_start`                                 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `__str__`                                          | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `get_open_lsqb`                                    | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `is_complex_subscript`                             | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `visit_DEDENT`                                     | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `<lambda>`                                         | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `contains_implicit_multiline_string_with_comments` | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -15.4% | -20.00ms | 6.8% → 5.6% | 130.0ms → 110.0ms | 13 → 11 | `_parse_single_version`                            | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
|  -15.4% | -20.00ms | 6.8% → 5.6% | 130.0ms → 110.0ms | 13 → 11 | `parse_ast`                                        | `/venv/lib/python3.11/site-packages/black/parsing.py`           |

##### Standard library

|  Change |    Delta |           % |              Time | Samples | Function | Location                             |
| ------: | -------: | ----------: | ----------------: | ------: | -------- | ------------------------------------ |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `_subx`  | `/usr/lib/python3.11/re/__init__.py` |
|  -15.4% | -20.00ms | 6.8% → 5.6% | 130.0ms → 110.0ms | 13 → 11 | `parse`  | `/usr/lib/python3.11/ast.py`         |

##### Unknown

| Change |    Delta |           % |             Time | Samples | Function      | Location    |
| -----: | -------: | ----------: | ---------------: | ------: | ------------- | ----------- |
| -80.0% | -80.00ms | 5.3% → 1.0% | 100.0ms → 20.0ms |  10 → 2 | `(anonymous)` | `<unknown>` |

##### Ours

| Change |    Delta |           % |            Time | Samples | Function   | Location   |
| -----: | -------: | ----------: | --------------: | ------: | ---------- | ---------- |
| -16.7% | -10.00ms | 3.2% → 2.5% | 60.0ms → 50.0ms |   6 → 5 | `__init__` | `<string>` |

# Sampling profile diff

Took 1.84s → 2s (+160.00ms, +8.7%) over 184 samples → 200 samples (10.0ms per sample).

| Category         | Change |     Delta |             % |             Time |   Samples |
| ---------------- | -----: | --------: | ------------: | ---------------: | --------: |
| Third-party      |  +6.1% | +100.00ms | 89.7% → 87.5% |    1.65s → 1.75s | 165 → 175 |
| Standard library | +88.9% |  +80.00ms |   4.9% → 8.5% | 90.0ms → 170.0ms |    9 → 17 |
| Unknown          | +40.0% |  +20.00ms |   2.7% → 3.5% |  50.0ms → 70.0ms |     5 → 7 |
| Ours             | -80.0% |  -40.00ms |   2.7% → 0.5% |  50.0ms → 10.0ms |     5 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |    Delta |           % |              Time | Samples | Function                            | Location                                                      |
| ------: | -------: | ----------: | ----------------: | ------: | ----------------------------------- | ------------------------------------------------------------- |
| +150.0% | +60.00ms | 2.2% → 5.0% |  40.0ms → 100.0ms |  4 → 10 | `push`                              | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`  |
| +250.0% | +50.00ms | 1.1% → 3.5% |   20.0ms → 70.0ms |   2 → 7 | `parse_tokens`                      | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
|  +28.6% | +40.00ms | 7.6% → 9.0% | 140.0ms → 180.0ms | 14 → 18 | `_addtoken`                         | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`  |
| +133.3% | +40.00ms | 1.6% → 3.5% |   30.0ms → 70.0ms |   3 → 7 | `get_features_used`                 | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| +300.0% | +30.00ms | 0.5% → 2.0% |   10.0ms → 40.0ms |   1 → 4 | `changed`                           | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |
|     new | +30.00ms | 0.0% → 1.5% |      0ms → 30.0ms |   0 → 3 | `prefix`                            | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |
|     new | +30.00ms | 0.0% → 1.5% |      0ms → 30.0ms |   0 → 3 | `whitespace`                        | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
|     new | +30.00ms | 0.0% → 1.5% |      0ms → 30.0ms |   0 → 3 | `_compile`                          | `/usr/lib/python3.11/re/__init__.py`                          |
|  +66.7% | +20.00ms | 1.6% → 2.5% |   30.0ms → 50.0ms |   3 → 5 | `visit_default`                     | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
|  +66.7% | +20.00ms | 1.6% → 2.5% |   30.0ms → 50.0ms |   3 → 5 | `update_sibling_maps`               | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |
|  +40.0% | +20.00ms | 2.7% → 3.5% |   50.0ms → 70.0ms |   5 → 7 | `_stringify_ast`                    | `/venv/lib/python3.11/site-packages/black/parsing.py`         |
|  +40.0% | +20.00ms | 2.7% → 3.5% |   50.0ms → 70.0ms |   5 → 7 | `(anonymous)`                       | `<unknown>`                                                   |
|     new | +20.00ms | 0.0% → 1.0% |      0ms → 20.0ms |   0 → 2 | `maybe_empty_lines`                 | `/venv/lib/python3.11/site-packages/black/lines.py`           |
|     new | +20.00ms | 0.0% → 1.0% |      0ms → 20.0ms |   0 → 2 | `delimiter_split`                   | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
|     new | +20.00ms | 0.0% → 1.0% |      0ms → 20.0ms |   0 → 2 | `visit_INDENT`                      | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
|     new | +20.00ms | 0.0% → 1.0% |      0ms → 20.0ms |   0 → 2 | `maybe_increment_for_loop_variable` | `/venv/lib/python3.11/site-packages/black/brackets.py`        |
| +200.0% | +20.00ms | 0.5% → 1.5% |   10.0ms → 30.0ms |   1 → 3 | `prev_sibling`                      | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |
|  +25.0% | +20.00ms | 4.3% → 5.0% |  80.0ms → 100.0ms |  8 → 10 | `parse`                             | `/usr/lib/python3.11/ast.py`                                  |
|  +33.3% | +10.00ms | 1.6% → 2.0% |   30.0ms → 40.0ms |   3 → 4 | `pop`                               | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`  |
| +100.0% | +10.00ms | 0.5% → 1.0% |   10.0ms → 20.0ms |   1 → 2 | `pre_order`                         | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |

##### Third-party

|  Change |    Delta |           % |              Time | Samples | Function                                           | Location                                                      |
| ------: | -------: | ----------: | ----------------: | ------: | -------------------------------------------------- | ------------------------------------------------------------- |
| +150.0% | +60.00ms | 2.2% → 5.0% |  40.0ms → 100.0ms |  4 → 10 | `push`                                             | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`  |
| +250.0% | +50.00ms | 1.1% → 3.5% |   20.0ms → 70.0ms |   2 → 7 | `parse_tokens`                                     | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
|  +28.6% | +40.00ms | 7.6% → 9.0% | 140.0ms → 180.0ms | 14 → 18 | `_addtoken`                                        | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`  |
| +133.3% | +40.00ms | 1.6% → 3.5% |   30.0ms → 70.0ms |   3 → 7 | `get_features_used`                                | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| +300.0% | +30.00ms | 0.5% → 2.0% |   10.0ms → 40.0ms |   1 → 4 | `changed`                                          | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |
|     new | +30.00ms | 0.0% → 1.5% |      0ms → 30.0ms |   0 → 3 | `prefix`                                           | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |
|     new | +30.00ms | 0.0% → 1.5% |      0ms → 30.0ms |   0 → 3 | `whitespace`                                       | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
|  +66.7% | +20.00ms | 1.6% → 2.5% |   30.0ms → 50.0ms |   3 → 5 | `visit_default`                                    | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
|  +66.7% | +20.00ms | 1.6% → 2.5% |   30.0ms → 50.0ms |   3 → 5 | `update_sibling_maps`                              | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |
|  +40.0% | +20.00ms | 2.7% → 3.5% |   50.0ms → 70.0ms |   5 → 7 | `_stringify_ast`                                   | `/venv/lib/python3.11/site-packages/black/parsing.py`         |
|     new | +20.00ms | 0.0% → 1.0% |      0ms → 20.0ms |   0 → 2 | `maybe_empty_lines`                                | `/venv/lib/python3.11/site-packages/black/lines.py`           |
|     new | +20.00ms | 0.0% → 1.0% |      0ms → 20.0ms |   0 → 2 | `delimiter_split`                                  | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
|     new | +20.00ms | 0.0% → 1.0% |      0ms → 20.0ms |   0 → 2 | `visit_INDENT`                                     | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
|     new | +20.00ms | 0.0% → 1.0% |      0ms → 20.0ms |   0 → 2 | `maybe_increment_for_loop_variable`                | `/venv/lib/python3.11/site-packages/black/brackets.py`        |
| +200.0% | +20.00ms | 0.5% → 1.5% |   10.0ms → 30.0ms |   1 → 3 | `prev_sibling`                                     | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |
|  +33.3% | +10.00ms | 1.6% → 2.0% |   30.0ms → 40.0ms |   3 → 4 | `pop`                                              | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`  |
| +100.0% | +10.00ms | 0.5% → 1.0% |   10.0ms → 20.0ms |   1 → 2 | `pre_order`                                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `visit_STRING`                                     | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `visit_stmt`                                       | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| +100.0% | +10.00ms | 0.5% → 1.0% |   10.0ms → 20.0ms |   1 → 2 | `contains_implicit_multiline_string_with_comments` | `/venv/lib/python3.11/site-packages/black/lines.py`           |

##### Standard library

| Change |    Delta |           % |             Time | Samples | Function                  | Location                                 |
| -----: | -------: | ----------: | ---------------: | ------: | ------------------------- | ---------------------------------------- |
|    new | +30.00ms | 0.0% → 1.5% |     0ms → 30.0ms |   0 → 3 | `_compile`                | `/usr/lib/python3.11/re/__init__.py`     |
| +25.0% | +20.00ms | 4.3% → 5.0% | 80.0ms → 100.0ms |  8 → 10 | `parse`                   | `/usr/lib/python3.11/ast.py`             |
|    new | +10.00ms | 0.0% → 0.5% |     0ms → 10.0ms |   0 → 1 | `get_data`                | `<frozen importlib._bootstrap_external>` |
|    new | +10.00ms | 0.0% → 0.5% |     0ms → 10.0ms |   0 → 1 | `_signature_bound_method` | `/usr/lib/python3.11/inspect.py`         |
|    new | +10.00ms | 0.0% → 0.5% |     0ms → 10.0ms |   0 → 1 | `_parse`                  | `/usr/lib/python3.11/re/_parser.py`      |
|    new | +10.00ms | 0.0% → 0.5% |     0ms → 10.0ms |   0 → 1 | `_subx`                   | `/usr/lib/python3.11/re/__init__.py`     |

##### Unknown

| Change |    Delta |           % |            Time | Samples | Function      | Location    |
| -----: | -------: | ----------: | --------------: | ------: | ------------- | ----------- |
| +40.0% | +20.00ms | 2.7% → 3.5% | 50.0ms → 70.0ms |   5 → 7 | `(anonymous)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |           % |              Time | Samples | Function                         | Location                                                        |
| ------: | -------: | ----------: | ----------------: | ------: | -------------------------------- | --------------------------------------------------------------- |
|  -35.3% | -60.00ms | 9.2% → 5.5% | 170.0ms → 110.0ms | 17 → 11 | `generate_tokens`                | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| removed | -40.00ms | 2.2% → 0.0% |      40.0ms → 0ms |   4 → 0 | `_format_str_once`               | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
|  -80.0% | -40.00ms | 2.7% → 0.5% |   50.0ms → 10.0ms |   5 → 1 | `__init__`                       | `<string>`                                                      |
|  -50.0% | -30.00ms | 3.3% → 1.5% |   60.0ms → 30.0ms |   6 → 3 | `__init__`                       | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  -50.0% | -30.00ms | 3.3% → 1.5% |   60.0ms → 30.0ms |   6 → 3 | `normalize_trailing_prefix`      | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| removed | -30.00ms | 1.6% → 0.0% |      30.0ms → 0ms |   3 → 0 | `__str__`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  -75.0% | -30.00ms | 2.2% → 0.5% |   40.0ms → 10.0ms |   4 → 1 | `_stringify_ast_with_new_parent` | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
|  -42.9% | -30.00ms | 3.8% → 2.0% |   70.0ms → 40.0ms |   7 → 4 | `convert`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  -40.0% | -20.00ms | 2.7% → 1.5% |   50.0ms → 30.0ms |   5 → 3 | `is_split_before_delimiter`      | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `<genexpr>`                      | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|  -50.0% | -20.00ms | 2.2% → 1.0% |   40.0ms → 20.0ms |   4 → 2 | `hug_power_op`                   | `/venv/lib/python3.11/site-packages/black/trans.py`             |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `visit_simple_stmt`              | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  -20.0% | -20.00ms | 5.4% → 4.0% |  100.0ms → 80.0ms |  10 → 8 | `__new__`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  -15.4% | -20.00ms | 7.1% → 5.5% | 130.0ms → 110.0ms | 13 → 11 | `generate_comments`              | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|  -25.0% | -10.00ms | 2.2% → 1.5% |   40.0ms → 30.0ms |   4 → 3 | `visit`                          | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| removed | -10.00ms | 0.5% → 0.0% |      10.0ms → 0ms |   1 → 0 | `__enter__`                      | `<frozen importlib._bootstrap>`                                 |
| removed | -10.00ms | 0.5% → 0.0% |      10.0ms → 0ms |   1 → 0 | `visit_suite`                    | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| removed | -10.00ms | 0.5% → 0.0% |      10.0ms → 0ms |   1 → 0 | `visit_power`                    | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| removed | -10.00ms | 0.5% → 0.0% |      10.0ms → 0ms |   1 → 0 | `all_lines`                      | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| removed | -10.00ms | 0.5% → 0.0% |      10.0ms → 0ms |   1 → 0 | `current`                        | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |

##### Third-party

|  Change |    Delta |           % |              Time | Samples | Function                         | Location                                                        |
| ------: | -------: | ----------: | ----------------: | ------: | -------------------------------- | --------------------------------------------------------------- |
|  -35.3% | -60.00ms | 9.2% → 5.5% | 170.0ms → 110.0ms | 17 → 11 | `generate_tokens`                | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| removed | -40.00ms | 2.2% → 0.0% |      40.0ms → 0ms |   4 → 0 | `_format_str_once`               | `/venv/lib/python3.11/site-packages/black/__init__.py`          |
|  -50.0% | -30.00ms | 3.3% → 1.5% |   60.0ms → 30.0ms |   6 → 3 | `__init__`                       | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  -50.0% | -30.00ms | 3.3% → 1.5% |   60.0ms → 30.0ms |   6 → 3 | `normalize_trailing_prefix`      | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| removed | -30.00ms | 1.6% → 0.0% |      30.0ms → 0ms |   3 → 0 | `__str__`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  -75.0% | -30.00ms | 2.2% → 0.5% |   40.0ms → 10.0ms |   4 → 1 | `_stringify_ast_with_new_parent` | `/venv/lib/python3.11/site-packages/black/parsing.py`           |
|  -42.9% | -30.00ms | 3.8% → 2.0% |   70.0ms → 40.0ms |   7 → 4 | `convert`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  -40.0% | -20.00ms | 2.7% → 1.5% |   50.0ms → 30.0ms |   5 → 3 | `is_split_before_delimiter`      | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `<genexpr>`                      | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|  -50.0% | -20.00ms | 2.2% → 1.0% |   40.0ms → 20.0ms |   4 → 2 | `hug_power_op`                   | `/venv/lib/python3.11/site-packages/black/trans.py`             |
| removed | -20.00ms | 1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `visit_simple_stmt`              | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  -20.0% | -20.00ms | 5.4% → 4.0% |  100.0ms → 80.0ms |  10 → 8 | `__new__`                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  -15.4% | -20.00ms | 7.1% → 5.5% | 130.0ms → 110.0ms | 13 → 11 | `generate_comments`              | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|  -25.0% | -10.00ms | 2.2% → 1.5% |   40.0ms → 30.0ms |   4 → 3 | `visit`                          | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| removed | -10.00ms | 0.5% → 0.0% |      10.0ms → 0ms |   1 → 0 | `visit_suite`                    | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| removed | -10.00ms | 0.5% → 0.0% |      10.0ms → 0ms |   1 → 0 | `visit_power`                    | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
| removed | -10.00ms | 0.5% → 0.0% |      10.0ms → 0ms |   1 → 0 | `all_lines`                      | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| removed | -10.00ms | 0.5% → 0.0% |      10.0ms → 0ms |   1 → 0 | `current`                        | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| removed | -10.00ms | 0.5% → 0.0% |      10.0ms → 0ms |   1 → 0 | `line_to_string`                 | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| removed | -10.00ms | 0.5% → 0.0% |      10.0ms → 0ms |   1 → 0 | `_rhs`                           | `/venv/lib/python3.11/site-packages/black/linegen.py`           |

##### Standard library

|  Change |    Delta |           % |         Time | Samples | Function    | Location                        |
| ------: | -------: | ----------: | -----------: | ------: | ----------- | ------------------------------- |
| removed | -10.00ms | 0.5% → 0.0% | 10.0ms → 0ms |   1 → 0 | `__enter__` | `<frozen importlib._bootstrap>` |

##### Ours

| Change |    Delta |           % |            Time | Samples | Function   | Location   |
| -----: | -------: | ----------: | --------------: | ------: | ---------- | ---------- |
| -80.0% | -40.00ms | 2.7% → 0.5% | 50.0ms → 10.0ms |   5 → 1 | `__init__` | `<string>` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|  Change |     Delta |             % |          Time | Samples | Location                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ---------------------------------------------------------------- |
|     new | +100.00ms | 0.0% → 100.0% | 0ms → 100.0ms |  0 → 10 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:382` |
| removed |  -10.00ms |  25.0% → 0.0% |  10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:388` |
| removed |  -10.00ms |  25.0% → 0.0% |  10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:393` |
| removed |  -10.00ms |  25.0% → 0.0% |  10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:394` |
| removed |  -10.00ms |  25.0% → 0.0% |  10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:396` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|  Change |    Delta |             % |            Time | Samples | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------------------------------------- |
| +300.0% | +30.00ms | 50.0% → 57.1% | 10.0ms → 40.0ms |   1 → 4 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py:172` |
|     new | +20.00ms |  0.0% → 28.6% |    0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py:145` |
| removed | -10.00ms |  50.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py:169` |
|     new | +10.00ms |  0.0% → 14.3% |    0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py:151` |

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|  Change |    Delta |            % |            Time | Samples | Location                                                               |
| ------: | -------: | -----------: | --------------: | ------: | ---------------------------------------------------------------------- |
|     new | +20.00ms | 0.0% → 11.1% |    0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:286`       |
| +200.0% | +20.00ms | 7.1% → 16.7% | 10.0ms → 30.0ms |   1 → 3 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:299 → 287` |
| removed | -10.00ms |  7.1% → 0.0% |    10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:295`       |
|  -50.0% | -10.00ms | 14.3% → 5.6% | 20.0ms → 10.0ms |   2 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:301 → 289` |
| +100.0% | +10.00ms | 7.1% → 11.1% | 10.0ms → 20.0ms |   1 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:302`       |

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|  Change |    Delta |            % |         Time | Samples | Location                                                    |
| ------: | -------: | -----------: | -----------: | ------: | ----------------------------------------------------------- |
|     new | +30.00ms | 0.0% → 42.9% | 0ms → 30.0ms |   0 → 3 | `/venv/lib/python3.11/site-packages/black/__init__.py:1365` |
|     new | +20.00ms | 0.0% → 28.6% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/black/__init__.py:1339` |
| removed | -10.00ms | 33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/black/__init__.py:1335` |
| removed | -10.00ms | 33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/black/__init__.py:1367` |
| removed | -10.00ms | 33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/black/__init__.py:1436` |

##### `changed` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                    |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------- |
|     new | +20.00ms |  0.0% → 50.0% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:165` |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:174` |
|     new | +10.00ms |  0.0% → 25.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:161` |
|     new | +10.00ms |  0.0% → 25.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:164` |

##### `prefix` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |            % |         Time | Samples | Location                                                    |
| -----: | -------: | -----------: | -----------: | ------: | ----------------------------------------------------------- |
|    new | +20.00ms | 0.0% → 66.7% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:471` |
|    new | +10.00ms | 0.0% → 33.3% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:462` |

##### `whitespace` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

| Change |    Delta |            % |         Time | Samples | Location                                                |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 33.3% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/black/nodes.py:201` |
|    new | +10.00ms | 0.0% → 33.3% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/black/nodes.py:276` |
|    new | +10.00ms | 0.0% → 33.3% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/black/nodes.py:318` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py`)

| Change |    Delta |             % |         Time | Samples | Location                                 |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------------------------- |
|    new | +30.00ms | 0.0% → 100.0% | 0ms → 30.0ms |   0 → 3 | `/usr/lib/python3.11/re/__init__.py:274` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |    Delta |             % |            Time | Samples | Location                                                  |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
| removed | -10.00ms |  33.3% → 0.0% |    10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/black/linegen.py:134` |
| +100.0% | +10.00ms | 33.3% → 40.0% | 10.0ms → 20.0ms |   1 → 2 | `/venv/lib/python3.11/site-packages/black/linegen.py:138` |
| +100.0% | +10.00ms | 33.3% → 40.0% | 10.0ms → 20.0ms |   1 → 2 | `/venv/lib/python3.11/site-packages/black/linegen.py:158` |
|     new | +10.00ms |  0.0% → 20.0% |    0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/black/linegen.py:137` |

##### `update_sibling_maps` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |            % |         Time | Samples | Location                                                    |
| ------: | -------: | -----------: | -----------: | ------: | ----------------------------------------------------------- |
|     new | +30.00ms | 0.0% → 60.0% | 0ms → 30.0ms |   0 → 3 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:366` |
| removed | -20.00ms | 66.7% → 0.0% | 20.0ms → 0ms |   2 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:376` |
| removed | -10.00ms | 33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:375` |
|     new | +10.00ms | 0.0% → 20.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:365` |
|     new | +10.00ms | 0.0% → 20.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:368` |

##### `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|  Change |    Delta |            % |         Time | Samples | Location                                                  |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------------------------------------- |
| removed | -30.00ms | 60.0% → 0.0% | 30.0ms → 0ms |   3 → 0 | `/venv/lib/python3.11/site-packages/black/parsing.py:244` |
|     new | +20.00ms | 0.0% → 28.6% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/black/parsing.py:195` |
|     new | +20.00ms | 0.0% → 28.6% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/black/parsing.py:225` |
|     new | +20.00ms | 0.0% → 28.6% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/black/parsing.py:252` |
| removed | -10.00ms | 20.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/black/parsing.py:197` |

##### `maybe_empty_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/black/lines.py:573` |

##### `delimiter_split` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                   |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/black/linegen.py:1289` |

##### `visit_INDENT` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                  |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/black/linegen.py:179` |

##### `maybe_increment_for_loop_variable` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                   |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/black/brackets.py:166` |

##### `prev_sibling` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                    |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------- |
|     new | +20.00ms |  0.0% → 66.7% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:208` |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:217` |
|     new | +10.00ms |  0.0% → 33.3% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:202` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

| Change |    Delta |      % |             Time | Samples | Location                        |
| -----: | -------: | -----: | ---------------: | ------: | ------------------------------- |
| +25.0% | +20.00ms | 100.0% | 80.0ms → 100.0ms |  8 → 10 | `/usr/lib/python3.11/ast.py:50` |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|  Change |    Delta |            % |         Time | Samples | Location                                                         |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------------------------------------------------- |
|     new | +30.00ms | 0.0% → 75.0% | 0ms → 30.0ms |   0 → 3 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:391` |
| removed | -10.00ms | 33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:404` |
| removed | -10.00ms | 33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:406` |
| removed | -10.00ms | 33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:408` |
|     new | +10.00ms | 0.0% → 25.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:392` |

##### `pre_order` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                    |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:318` |
|     new | +10.00ms |  0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:307` |
|     new | +10.00ms |  0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:460` |

##### `visit_STRING` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                  |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/black/linegen.py:446` |

##### `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                  |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/black/linegen.py:220` |

##### `contains_implicit_multiline_string_with_comments` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------- |
|     new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/black/lines.py:252` |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/black/lines.py:263` |

##### `get_data` (`<frozen importlib._bootstrap_external>`)

| Change |    Delta |             % |         Time | Samples | Location                                      |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `<frozen importlib._bootstrap_external>:1131` |

##### `_signature_bound_method` (`/usr/lib/python3.11/inspect.py`)

| Change |    Delta |             % |         Time | Samples | Location                              |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/usr/lib/python3.11/inspect.py:2051` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py`)

| Change |    Delta |             % |         Time | Samples | Location                                |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/usr/lib/python3.11/re/_parser.py:512` |

##### `_subx` (`/usr/lib/python3.11/re/__init__.py`)

| Change |    Delta |             % |         Time | Samples | Location                                 |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/usr/lib/python3.11/re/__init__.py:317` |

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|  Change |    Delta |            % |         Time | Samples | Location                                                             |
| ------: | -------: | -----------: | -----------: | ------: | -------------------------------------------------------------------- |
|     new | +60.00ms | 0.0% → 54.5% | 0ms → 60.0ms |   0 → 6 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:864`  |
| removed | -40.00ms | 23.5% → 0.0% | 40.0ms → 0ms |   4 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:875`  |
| removed | -20.00ms | 11.8% → 0.0% | 20.0ms → 0ms |   2 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:624`  |
| removed | -20.00ms | 11.8% → 0.0% | 20.0ms → 0ms |   2 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:1103` |
|     new | +20.00ms | 0.0% → 18.2% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:707`  |

##### `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                    |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------- |
| removed | -40.00ms | 100.0% → 0.0% | 40.0ms → 0ms |   4 → 0 | `/venv/lib/python3.11/site-packages/black/__init__.py:1271` |

##### `__init__` (`<string>`)

|  Change |    Delta |              % |            Time | Samples | Location     |
| ------: | -------: | -------------: | --------------: | ------: | ------------ |
| removed | -20.00ms |   40.0% → 0.0% |    20.0ms → 0ms |   2 → 0 | `<string>:4` |
| removed | -10.00ms |   20.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `<string>:6` |
|  -50.0% | -10.00ms | 40.0% → 100.0% | 20.0ms → 10.0ms |   2 → 1 | `<string>:7` |

##### `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                    |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------- |
| removed | -60.00ms | 100.0% → 0.0% | 60.0ms → 0ms |   6 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:424` |
|     new | +20.00ms |  0.0% → 66.7% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:413` |
|     new | +10.00ms |  0.0% → 33.3% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:255` |

##### `normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|  Change |    Delta |             % |            Time | Samples | Location                                                   |
| ------: | -------: | ------------: | --------------: | ------: | ---------------------------------------------------------- |
| removed | -30.00ms |  50.0% → 0.0% |    30.0ms → 0ms |   3 → 0 | `/venv/lib/python3.11/site-packages/black/comments.py:134` |
| removed | -20.00ms |  33.3% → 0.0% |    20.0ms → 0ms |   2 → 0 | `/venv/lib/python3.11/site-packages/black/comments.py:133` |
| +100.0% | +10.00ms | 16.7% → 66.7% | 10.0ms → 20.0ms |   1 → 2 | `/venv/lib/python3.11/site-packages/black/comments.py:132` |
|     new | +10.00ms |  0.0% → 33.3% |    0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/black/comments.py:127` |

##### `__str__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                    |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------- |
| removed | -30.00ms | 100.0% → 0.0% | 30.0ms → 0ms |   3 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:446` |

##### `_stringify_ast_with_new_parent` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                  |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------- |
| removed | -30.00ms |  75.0% → 0.0% | 30.0ms → 0ms |   3 → 0 | `/venv/lib/python3.11/site-packages/black/parsing.py:170` |
| removed | -10.00ms |  25.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/black/parsing.py:169` |
|     new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/black/parsing.py:178` |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |            % |         Time | Samples | Location                                                    |
| ------: | -------: | -----------: | -----------: | ------: | ----------------------------------------------------------- |
| removed | -30.00ms | 42.9% → 0.0% | 30.0ms → 0ms |   3 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:501` |
| removed | -30.00ms | 42.9% → 0.0% | 30.0ms → 0ms |   3 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:503` |
|     new | +20.00ms | 0.0% → 50.0% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:492` |
| removed | -10.00ms | 14.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:494` |
|     new | +10.00ms | 0.0% → 25.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:488` |

##### `is_split_before_delimiter` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

|  Change |    Delta |             % |            Time | Samples | Location                                                   |
| ------: | -------: | ------------: | --------------: | ------: | ---------------------------------------------------------- |
|  -75.0% | -30.00ms | 80.0% → 33.3% | 40.0ms → 10.0ms |   4 → 1 | `/venv/lib/python3.11/site-packages/black/brackets.py:240` |
|     new | +20.00ms |  0.0% → 66.7% |    0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/black/brackets.py:258` |
| removed | -10.00ms |  20.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/black/brackets.py:270` |

##### `<genexpr>` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                            |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:471` |

##### `hug_power_op` (`/venv/lib/python3.11/site-packages/black/trans.py`)

|  Change |    Delta |              % |            Time | Samples | Location                                               |
| ------: | -------: | -------------: | --------------: | ------: | ------------------------------------------------------ |
| removed | -30.00ms |   75.0% → 0.0% |    30.0ms → 0ms |   3 → 0 | `/venv/lib/python3.11/site-packages/black/trans.py:95` |
| +100.0% | +10.00ms | 25.0% → 100.0% | 10.0ms → 20.0ms |   1 → 2 | `/venv/lib/python3.11/site-packages/black/trans.py:91` |

##### `visit_simple_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                  |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `/venv/lib/python3.11/site-packages/black/linegen.py:316` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |     Delta |             % |          Time | Samples | Location                                                   |
| ------: | --------: | ------------: | ------------: | ------: | ---------------------------------------------------------- |
| removed | -100.00ms | 100.0% → 0.0% | 100.0ms → 0ms |  10 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:84` |
|     new |  +60.00ms |  0.0% → 75.0% |  0ms → 60.0ms |   0 → 6 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:73` |
|     new |  +20.00ms |  0.0% → 25.0% |  0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:72` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

| Change |    Delta |      % |              Time | Samples | Location                                                  |
| -----: | -------: | -----: | ----------------: | ------: | --------------------------------------------------------- |
| -15.4% | -20.00ms | 100.0% | 130.0ms → 110.0ms | 13 → 11 | `/venv/lib/python3.11/site-packages/black/comments.py:72` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|  Change |    Delta |            % |         Time | Samples | Location                                                |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------------------------- |
| removed | -20.00ms | 50.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `/venv/lib/python3.11/site-packages/black/nodes.py:163` |
| removed | -20.00ms | 50.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `/venv/lib/python3.11/site-packages/black/nodes.py:181` |
|     new | +20.00ms | 0.0% → 66.7% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/black/nodes.py:152` |
|     new | +10.00ms | 0.0% → 33.3% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/black/nodes.py:174` |

##### `__enter__` (`<frozen importlib._bootstrap>`)

|  Change |    Delta |             % |         Time | Samples | Location                            |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `<frozen importlib._bootstrap>:171` |

##### `visit_suite` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                  |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/black/linegen.py:293` |

##### `visit_power` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                  |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/black/linegen.py:341` |

##### `all_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/black/lines.py:539` |

##### `current` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                            |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:533` |

##### `line_to_string` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                 |
| ------: | -------: | ------------: | -----------: | ------: | -------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/black/lines.py:1078` |

##### `_rhs` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                  |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/black/linegen.py:660` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |     Delta |             % |              Time |   Samples | Function               | Location                                                 |
| -----: | --------: | ------------: | ----------------: | --------: | ---------------------- | -------------------------------------------------------- |
| +40.4% | +210.00ms | 28.3% → 36.5% | 520.0ms → 730.0ms |   52 → 73 | `visit_suite`          | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
| +38.5% | +200.00ms | 28.3% → 36.0% | 520.0ms → 720.0ms |   52 → 72 | `visit_funcdef`        | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
| +33.3% | +180.00ms | 29.3% → 36.0% | 540.0ms → 720.0ms |   54 → 72 | `visit_stmt`           | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
| +30.4% | +170.00ms | 30.4% → 36.5% | 560.0ms → 730.0ms |   56 → 73 | `visit_default`        | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
| +30.4% | +170.00ms | 30.4% → 36.5% | 560.0ms → 730.0ms |   56 → 73 | `visit`                | `/venv/lib/python3.11/site-packages/black/nodes.py`      |
| +30.4% | +170.00ms | 30.4% → 36.5% | 560.0ms → 730.0ms |   56 → 73 | `visit_default`        | `/venv/lib/python3.11/site-packages/black/nodes.py`      |
|  +7.8% | +140.00ms | 97.3% → 96.5% |     1.79s → 1.93s | 179 → 193 | `_run_module_as_main`  | `<frozen runpy>`                                         |
|  +8.2% | +130.00ms | 86.4% → 86.0% |     1.59s → 1.72s | 159 → 172 | `_format_str_once`     | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
| +11.9% | +130.00ms | 59.2% → 61.0% |     1.09s → 1.22s | 109 → 122 | `format_str`           | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|  +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|  +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|  +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `reformat_one`         | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|  +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `main`                 | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|  +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py` |
|  +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py`       |
|  +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py`       |
|  +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py`       |
|  +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `patched_main`         | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|  +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `<module>`             | `/venv/lib/python3.11/site-packages/black/__main__.py`   |
|  +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `_run_code`            | `<frozen runpy>`                                         |

##### Third-party

|  Change |     Delta |             % |              Time |   Samples | Function               | Location                                                 |
| ------: | --------: | ------------: | ----------------: | --------: | ---------------------- | -------------------------------------------------------- |
|  +40.4% | +210.00ms | 28.3% → 36.5% | 520.0ms → 730.0ms |   52 → 73 | `visit_suite`          | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
|  +38.5% | +200.00ms | 28.3% → 36.0% | 520.0ms → 720.0ms |   52 → 72 | `visit_funcdef`        | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
|  +33.3% | +180.00ms | 29.3% → 36.0% | 540.0ms → 720.0ms |   54 → 72 | `visit_stmt`           | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
|  +30.4% | +170.00ms | 30.4% → 36.5% | 560.0ms → 730.0ms |   56 → 73 | `visit_default`        | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
|  +30.4% | +170.00ms | 30.4% → 36.5% | 560.0ms → 730.0ms |   56 → 73 | `visit`                | `/venv/lib/python3.11/site-packages/black/nodes.py`      |
|  +30.4% | +170.00ms | 30.4% → 36.5% | 560.0ms → 730.0ms |   56 → 73 | `visit_default`        | `/venv/lib/python3.11/site-packages/black/nodes.py`      |
|   +8.2% | +130.00ms | 86.4% → 86.0% |     1.59s → 1.72s | 159 → 172 | `_format_str_once`     | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|  +11.9% | +130.00ms | 59.2% → 61.0% |     1.09s → 1.22s | 109 → 122 | `format_str`           | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|   +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|   +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|   +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `reformat_one`         | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|   +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `main`                 | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|   +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py` |
|   +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py`       |
|   +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py`       |
|   +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py`       |
|   +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `patched_main`         | `/venv/lib/python3.11/site-packages/black/__init__.py`   |
|   +7.3% | +130.00ms | 96.7% → 95.5% |     1.78s → 1.91s | 178 → 191 | `<module>`             | `/venv/lib/python3.11/site-packages/black/__main__.py`   |
| +450.0% |  +90.00ms |   1.1% → 5.5% |  20.0ms → 110.0ms |    2 → 11 | `visit_STRING`         | `/venv/lib/python3.11/site-packages/black/linegen.py`    |
|  +17.9% |  +70.00ms | 21.2% → 23.0% | 390.0ms → 460.0ms |   39 → 46 | `visit_simple_stmt`    | `/venv/lib/python3.11/site-packages/black/linegen.py`    |

##### Standard library

|  Change |     Delta |             % |             Time |   Samples | Function                    | Location                                 |
| ------: | --------: | ------------: | ---------------: | --------: | --------------------------- | ---------------------------------------- |
|   +7.8% | +140.00ms | 97.3% → 96.5% |    1.79s → 1.93s | 179 → 193 | `_run_module_as_main`       | `<frozen runpy>`                         |
|   +7.3% | +130.00ms | 96.7% → 95.5% |    1.78s → 1.91s | 178 → 191 | `_run_code`                 | `<frozen runpy>`                         |
|     new |  +40.00ms |   0.0% → 2.0% |     0ms → 40.0ms |     0 → 4 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py`     |
|     new |  +30.00ms |   0.0% → 1.5% |     0ms → 30.0ms |     0 → 3 | `search`                    | `/usr/lib/python3.11/re/__init__.py`     |
|  +25.0% |  +20.00ms |   4.3% → 5.0% | 80.0ms → 100.0ms |    8 → 10 | `parse`                     | `/usr/lib/python3.11/ast.py`             |
| +100.0% |  +10.00ms |   0.5% → 1.0% |  10.0ms → 20.0ms |     1 → 2 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
| +100.0% |  +10.00ms |   0.5% → 1.0% |  10.0ms → 20.0ms |     1 → 2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| +100.0% |  +10.00ms |   0.5% → 1.0% |  10.0ms → 20.0ms |     1 → 2 | `exec_module`               | `<frozen importlib._bootstrap_external>` |
| +100.0% |  +10.00ms |   0.5% → 1.0% |  10.0ms → 20.0ms |     1 → 2 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
| +100.0% |  +10.00ms |   0.5% → 1.0% |  10.0ms → 20.0ms |     1 → 2 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
| +100.0% |  +10.00ms |   0.5% → 1.0% |  10.0ms → 20.0ms |     1 → 2 | `_get_module_details`       | `<frozen runpy>`                         |
|     new |  +10.00ms |   0.0% → 0.5% |     0ms → 10.0ms |     0 → 1 | `get_data`                  | `<frozen importlib._bootstrap_external>` |
|     new |  +10.00ms |   0.0% → 0.5% |     0ms → 10.0ms |     0 → 1 | `get_code`                  | `<frozen importlib._bootstrap_external>` |
|     new |  +10.00ms |   0.0% → 0.5% |     0ms → 10.0ms |     0 → 1 | `_signature_bound_method`   | `/usr/lib/python3.11/inspect.py`         |
|     new |  +10.00ms |   0.0% → 0.5% |     0ms → 10.0ms |     0 → 1 | `_signature_from_callable`  | `/usr/lib/python3.11/inspect.py`         |
|     new |  +10.00ms |   0.0% → 0.5% |     0ms → 10.0ms |     0 → 1 | `from_callable`             | `/usr/lib/python3.11/inspect.py`         |
|     new |  +10.00ms |   0.0% → 0.5% |     0ms → 10.0ms |     0 → 1 | `signature`                 | `/usr/lib/python3.11/inspect.py`         |
|     new |  +10.00ms |   0.0% → 0.5% |     0ms → 10.0ms |     0 → 1 | `_process_class`            | `/usr/lib/python3.11/dataclasses.py`     |
|     new |  +10.00ms |   0.0% → 0.5% |     0ms → 10.0ms |     0 → 1 | `wrap`                      | `/usr/lib/python3.11/dataclasses.py`     |
|     new |  +10.00ms |   0.0% → 0.5% |     0ms → 10.0ms |     0 → 1 | `dataclass`                 | `/usr/lib/python3.11/dataclasses.py`     |

##### Unknown

| Change |    Delta |           % |            Time | Samples | Function      | Location    |
| -----: | -------: | ----------: | --------------: | ------: | ------------- | ----------- |
| +40.0% | +20.00ms | 2.7% → 3.5% | 50.0ms → 70.0ms |   5 → 7 | `(anonymous)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |            % |              Time | Samples | Function                            | Location                                                        |
| ------: | -------: | -----------: | ----------------: | ------: | ----------------------------------- | --------------------------------------------------------------- |
|  -45.0% | -90.00ms | 10.9% → 5.5% | 200.0ms → 110.0ms | 20 → 11 | `generate_tokens`                   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|  -45.0% | -90.00ms | 10.9% → 5.5% | 200.0ms → 110.0ms | 20 → 11 | `__next__`                          | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`   |
|  -34.8% | -80.00ms | 12.5% → 7.5% | 230.0ms → 150.0ms | 23 → 15 | `transform_line`                    | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  -41.2% | -70.00ms |  9.2% → 5.0% | 170.0ms → 100.0ms | 17 → 10 | `pop`                               | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  -66.7% | -60.00ms |  4.9% → 1.5% |   90.0ms → 30.0ms |   9 → 3 | `hug_power_op`                      | `/venv/lib/python3.11/site-packages/black/trans.py`             |
|  -26.3% | -50.00ms | 10.3% → 7.0% | 190.0ms → 140.0ms | 19 → 14 | `convert`                           | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  -71.4% | -50.00ms |  3.8% → 1.0% |   70.0ms → 20.0ms |   7 → 2 | `__str__`                           | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -80.0% | -40.00ms |  2.7% → 0.5% |   50.0ms → 10.0ms |   5 → 1 | `__init__`                          | `<string>`                                                      |
| removed | -40.00ms |  2.2% → 0.0% |      40.0ms → 0ms |   4 → 0 | `all_lines`                         | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -80.0% | -40.00ms |  2.7% → 0.5% |   50.0ms → 10.0ms |   5 → 1 | `_hugging_power_ops_line_to_string` | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  -33.3% | -40.00ms |  6.5% → 4.0% |  120.0ms → 80.0ms |  12 → 8 | `run_transformer`                   | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  -50.0% | -30.00ms |  3.3% → 1.5% |   60.0ms → 30.0ms |   6 → 3 | `__init__`                          | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  -75.0% | -30.00ms |  2.2% → 0.5% |   40.0ms → 10.0ms |   4 → 1 | `visit_NUMBER`                      | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  -75.0% | -30.00ms |  2.2% → 0.5% |   40.0ms → 10.0ms |   4 → 1 | `clone`                             | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| removed | -30.00ms |  1.6% → 0.0% |      30.0ms → 0ms |   3 → 0 | `__str__`                           | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  -10.0% | -20.00ms | 10.9% → 9.0% | 200.0ms → 180.0ms | 20 → 18 | `generate_comments`                 | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|  -40.0% | -20.00ms |  2.7% → 1.5% |   50.0ms → 30.0ms |   5 → 3 | `is_split_before_delimiter`         | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| removed | -20.00ms |  1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `<genexpr>`                         | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| removed | -20.00ms |  1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `is_fstring_start`                  | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|  -50.0% | -20.00ms |  2.2% → 1.0% |   40.0ms → 20.0ms |   4 → 2 | `line_to_string`                    | `/venv/lib/python3.11/site-packages/black/lines.py`             |

##### Third-party

|  Change |    Delta |            % |              Time | Samples | Function                            | Location                                                        |
| ------: | -------: | -----------: | ----------------: | ------: | ----------------------------------- | --------------------------------------------------------------- |
|  -45.0% | -90.00ms | 10.9% → 5.5% | 200.0ms → 110.0ms | 20 → 11 | `generate_tokens`                   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|  -45.0% | -90.00ms | 10.9% → 5.5% | 200.0ms → 110.0ms | 20 → 11 | `__next__`                          | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`   |
|  -34.8% | -80.00ms | 12.5% → 7.5% | 230.0ms → 150.0ms | 23 → 15 | `transform_line`                    | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  -41.2% | -70.00ms |  9.2% → 5.0% | 170.0ms → 100.0ms | 17 → 10 | `pop`                               | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  -66.7% | -60.00ms |  4.9% → 1.5% |   90.0ms → 30.0ms |   9 → 3 | `hug_power_op`                      | `/venv/lib/python3.11/site-packages/black/trans.py`             |
|  -26.3% | -50.00ms | 10.3% → 7.0% | 190.0ms → 140.0ms | 19 → 14 | `convert`                           | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  -71.4% | -50.00ms |  3.8% → 1.0% |   70.0ms → 20.0ms |   7 → 2 | `__str__`                           | `/venv/lib/python3.11/site-packages/black/lines.py`             |
| removed | -40.00ms |  2.2% → 0.0% |      40.0ms → 0ms |   4 → 0 | `all_lines`                         | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -80.0% | -40.00ms |  2.7% → 0.5% |   50.0ms → 10.0ms |   5 → 1 | `_hugging_power_ops_line_to_string` | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  -33.3% | -40.00ms |  6.5% → 4.0% |  120.0ms → 80.0ms |  12 → 8 | `run_transformer`                   | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  -50.0% | -30.00ms |  3.3% → 1.5% |   60.0ms → 30.0ms |   6 → 3 | `__init__`                          | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  -75.0% | -30.00ms |  2.2% → 0.5% |   40.0ms → 10.0ms |   4 → 1 | `visit_NUMBER`                      | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|  -75.0% | -30.00ms |  2.2% → 0.5% |   40.0ms → 10.0ms |   4 → 1 | `clone`                             | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| removed | -30.00ms |  1.6% → 0.0% |      30.0ms → 0ms |   3 → 0 | `__str__`                           | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
|  -10.0% | -20.00ms | 10.9% → 9.0% | 200.0ms → 180.0ms | 20 → 18 | `generate_comments`                 | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|  -40.0% | -20.00ms |  2.7% → 1.5% |   50.0ms → 30.0ms |   5 → 3 | `is_split_before_delimiter`         | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
| removed | -20.00ms |  1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `<genexpr>`                         | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| removed | -20.00ms |  1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `is_fstring_start`                  | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|  -50.0% | -20.00ms |  2.2% → 1.0% |   40.0ms → 20.0ms |   4 → 2 | `line_to_string`                    | `/venv/lib/python3.11/site-packages/black/lines.py`             |
|  -20.0% | -20.00ms |  5.4% → 4.0% |  100.0ms → 80.0ms |  10 → 8 | `__new__`                           | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |

##### Standard library

|  Change |    Delta |           % |         Time | Samples | Function    | Location                        |
| ------: | -------: | ----------: | -----------: | ------: | ----------- | ------------------------------- |
| removed | -10.00ms | 0.5% → 0.0% | 10.0ms → 0ms |   1 → 0 | `__enter__` | `<frozen importlib._bootstrap>` |

##### Ours

| Change |    Delta |           % |            Time | Samples | Function   | Location   |
| -----: | -------: | ----------: | --------------: | ------: | ---------- | ---------- |
| -80.0% | -40.00ms | 2.7% → 0.5% | 50.0ms → 10.0ms |   5 → 1 | `__init__` | `<string>` |

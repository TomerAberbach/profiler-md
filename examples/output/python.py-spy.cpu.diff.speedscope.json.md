# Sampling profile diff

Took 1.84s → 2s (+160.00ms, +8.7%) over 184 → 200 samples (10.0ms per sample).

| Category         | Change |     Delta |             % |             Time |   Samples |
| ---------------- | -----: | --------: | ------------: | ---------------: | --------: |
| Third-party      |  +6.1% | +100.00ms | 89.7% → 87.5% |    1.65s → 1.75s | 165 → 175 |
| Standard library | +88.9% |  +80.00ms |   4.9% → 8.5% | 90.0ms → 170.0ms |    9 → 17 |
| Unknown          | +40.0% |  +20.00ms |   2.7% → 3.5% |  50.0ms → 70.0ms |     5 → 7 |
| Ours             | -80.0% |  -40.00ms |   2.7% → 0.5% |  50.0ms → 10.0ms |     5 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

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

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

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

|  Change |    Delta |              % |             Time | Samples | Location                                                               |
| ------: | -------: | -------------: | ---------------: | ------: | ---------------------------------------------------------------------- |
| +900.0% | +90.00ms | 25.0% → 100.0% | 10.0ms → 100.0ms |  1 → 10 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:394 → 382` |
| removed | -10.00ms |   25.0% → 0.0% |     10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:388`       |
| removed | -10.00ms |   25.0% → 0.0% |     10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:393`       |
| removed | -10.00ms |   25.0% → 0.0% |     10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:396`       |

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
|     new | +30.00ms | 0.0% → 16.7% |    0ms → 30.0ms |   0 → 3 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:314`       |
|     new | +20.00ms | 0.0% → 11.1% |    0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:286`       |
|     new | +20.00ms | 0.0% → 11.1% |    0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:293`       |
|  -66.7% | -20.00ms | 21.4% → 5.6% | 30.0ms → 10.0ms |   3 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:293 → 281` |
| +200.0% | +20.00ms | 7.1% → 16.7% | 10.0ms → 30.0ms |   1 → 3 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:299 → 287` |

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

|  Change |    Delta |             % |            Time | Samples | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------------------------------------- |
|     new | +30.00ms |  0.0% → 60.0% |    0ms → 30.0ms |   0 → 3 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:366`       |
| removed | -10.00ms |  33.3% → 0.0% |    10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:375`       |
|  -50.0% | -10.00ms | 66.7% → 20.0% | 20.0ms → 10.0ms |   2 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:376 → 365` |
|     new | +10.00ms |  0.0% → 20.0% |    0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:368`       |

##### `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|  Change |    Delta |             % |            Time | Samples | Location                                                        |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------------- |
|     new | +20.00ms |  0.0% → 28.6% |    0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/black/parsing.py:195`       |
|     new | +20.00ms |  0.0% → 28.6% |    0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/black/parsing.py:225`       |
| removed | -10.00ms |  20.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/black/parsing.py:214`       |
|  -33.3% | -10.00ms | 60.0% → 28.6% | 30.0ms → 20.0ms |   3 → 2 | `/venv/lib/python3.11/site-packages/black/parsing.py:244 → 252` |

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
| removed | -10.00ms | 33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:406` |
| removed | -10.00ms | 33.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:408` |

##### `pre_order` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |            % |         Time | Samples | Location                                                    |
| -----: | -------: | -----------: | -----------: | ------: | ----------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 50.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:460` |

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

| Change |    Delta |              % |            Time | Samples | Location                                                          |
| -----: | -------: | -------------: | --------------: | ------: | ----------------------------------------------------------------- |
| -66.7% | -40.00ms | 100.0% → 66.7% | 60.0ms → 20.0ms |   6 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:424 → 413` |
|    new | +10.00ms |   0.0% → 33.3% |    0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:255`       |

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

|  Change |    Delta |              % |            Time | Samples | Location                                                        |
| ------: | -------: | -------------: | --------------: | ------: | --------------------------------------------------------------- |
|  -66.7% | -20.00ms | 75.0% → 100.0% | 30.0ms → 10.0ms |   3 → 1 | `/venv/lib/python3.11/site-packages/black/parsing.py:170 → 178` |
| removed | -10.00ms |   25.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/black/parsing.py:169`       |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |             % |            Time | Samples | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------------------------------------- |
|  -66.7% | -20.00ms | 42.9% → 25.0% | 30.0ms → 10.0ms |   3 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:501 → 490` |
| removed | -10.00ms |  14.3% → 0.0% |    10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:494`       |
|     new | +10.00ms |  0.0% → 25.0% |    0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:488`       |
|  -33.3% | -10.00ms | 42.9% → 50.0% | 30.0ms → 20.0ms |   3 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:503 → 492` |

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

| Change |    Delta |              % |             Time | Samples | Location                                                        |
| -----: | -------: | -------------: | ---------------: | ------: | --------------------------------------------------------------- |
| -40.0% | -40.00ms | 100.0% → 75.0% | 100.0ms → 60.0ms |  10 → 6 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:84 → 73` |
|    new | +20.00ms |   0.0% → 25.0% |     0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:72`      |

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

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|  Change |    Delta |      % |             Time | Samples | Caller      | Location                                                     |
| ------: | -------: | -----: | ---------------: | ------: | ----------- | ------------------------------------------------------------ |
| +150.0% | +60.00ms | 100.0% | 40.0ms → 100.0ms |  4 → 10 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|  Change |    Delta |      % |            Time | Samples | Caller         | Location                                                      |
| ------: | -------: | -----: | --------------: | ------: | -------------- | ------------------------------------------------------------- |
| +250.0% | +50.00ms | 100.0% | 20.0ms → 70.0ms |   2 → 7 | `parse_string` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

| Change |    Delta |      % |              Time | Samples | Caller     | Location                                                     |
| -----: | -------: | -----: | ----------------: | ------: | ---------- | ------------------------------------------------------------ |
| +28.6% | +40.00ms | 100.0% | 140.0ms → 180.0ms | 14 → 18 | `addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|  Change |    Delta |      % |            Time | Samples | Caller                   | Location                                               |
| ------: | -------: | -----: | --------------: | ------: | ------------------------ | ------------------------------------------------------ |
| +133.3% | +40.00ms | 100.0% | 30.0ms → 70.0ms |   3 → 7 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `changed` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |              % |            Time | Samples | Caller    | Location                                                |
| ------: | -------: | -------------: | --------------: | ------: | --------- | ------------------------------------------------------- |
|     new | +20.00ms |   0.0% → 50.0% |    0ms → 20.0ms |   0 → 2 | `prefix`  | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
| +100.0% | +10.00ms | 100.0% → 50.0% | 10.0ms → 20.0ms |   1 → 2 | `changed` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `prefix` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |            % |         Time | Samples | Caller                      | Location                                               |
| -----: | -------: | -----------: | -----------: | ------: | --------------------------- | ------------------------------------------------------ |
|    new | +10.00ms | 0.0% → 33.3% | 0ms → 10.0ms |   0 → 1 | `normalize_trailing_prefix` | `/venv/lib/python3.11/site-packages/black/comments.py` |
|    new | +10.00ms | 0.0% → 33.3% | 0ms → 10.0ms |   0 → 1 | `_maybe_empty_lines`        | `/venv/lib/python3.11/site-packages/black/lines.py`    |
|    new | +10.00ms | 0.0% → 33.3% | 0ms → 10.0ms |   0 → 1 | `generate_comments`         | `/venv/lib/python3.11/site-packages/black/comments.py` |

##### `whitespace` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

| Change |    Delta |             % |         Time | Samples | Caller   | Location                                            |
| -----: | -------: | ------------: | -----------: | ------: | -------- | --------------------------------------------------- |
|    new | +30.00ms | 0.0% → 100.0% | 0ms → 30.0ms |   0 → 3 | `append` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py`)

| Change |    Delta |             % |         Time | Samples | Caller   | Location                             |
| -----: | -------: | ------------: | -----------: | ------: | -------- | ------------------------------------ |
|    new | +30.00ms | 0.0% → 100.0% | 0ms → 30.0ms |   0 → 3 | `search` | `/usr/lib/python3.11/re/__init__.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |    Delta |              % |            Time | Samples | Caller        | Location                                              |
| ------: | -------: | -------------: | --------------: | ------: | ------------- | ----------------------------------------------------- |
| +150.0% | +30.00ms | 66.7% → 100.0% | 20.0ms → 50.0ms |   2 → 5 | `visit`       | `/venv/lib/python3.11/site-packages/black/nodes.py`   |
| removed | -10.00ms |   33.3% → 0.0% |    10.0ms → 0ms |   1 → 0 | `visit_suite` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `update_sibling_maps` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |      % |            Time | Samples | Caller         | Location                                                |
| -----: | -------: | -----: | --------------: | ------: | -------------- | ------------------------------------------------------- |
| +66.7% | +20.00ms | 100.0% | 30.0ms → 50.0ms |   3 → 5 | `prev_sibling` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

| Change |    Delta |      % |            Time | Samples | Caller                           | Location                                              |
| -----: | -------: | -----: | --------------: | ------: | -------------------------------- | ----------------------------------------------------- |
| +40.0% | +20.00ms | 100.0% | 50.0ms → 70.0ms |   5 → 7 | `_stringify_ast_with_new_parent` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `maybe_empty_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`)

| Change |    Delta |             % |         Time | Samples | Caller             | Location                                               |
| -----: | -------: | ------------: | -----------: | ------: | ------------------ | ------------------------------------------------------ |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `delimiter_split` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |             % |         Time | Samples | Caller          | Location                                              |
| -----: | -------: | ------------: | -----------: | ------: | --------------- | ----------------------------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `split_wrapper` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_INDENT` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |             % |         Time | Samples | Caller  | Location                                            |
| -----: | -------: | ------------: | -----------: | ------: | ------- | --------------------------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `maybe_increment_for_loop_variable` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

| Change |    Delta |             % |         Time | Samples | Caller | Location                                               |
| -----: | -------: | ------------: | -----------: | ------: | ------ | ------------------------------------------------------ |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `mark` | `/venv/lib/python3.11/site-packages/black/brackets.py` |

##### `prev_sibling` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |            % |         Time | Samples | Caller           | Location                                            |
| -----: | -------: | -----------: | -----------: | ------: | ---------------- | --------------------------------------------------- |
|    new | +20.00ms | 0.0% → 66.7% | 0ms → 20.0ms |   0 → 2 | `preceding_leaf` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

| Change |    Delta |      % |             Time | Samples | Caller                  | Location                                              |
| -----: | -------: | -----: | ---------------: | ------: | ----------------------- | ----------------------------------------------------- |
| +25.0% | +20.00ms | 100.0% | 80.0ms → 100.0ms |  8 → 10 | `_parse_single_version` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

| Change |    Delta |      % |            Time | Samples | Caller      | Location                                                     |
| -----: | -------: | -----: | --------------: | ------: | ----------- | ------------------------------------------------------------ |
| +33.3% | +10.00ms | 100.0% | 30.0ms → 40.0ms |   3 → 4 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `pre_order` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |      % |            Time | Samples | Caller      | Location                                                |
| ------: | -------: | -----: | --------------: | ------: | ----------- | ------------------------------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `pre_order` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `visit_STRING` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |             % |         Time | Samples | Caller  | Location                                            |
| -----: | -------: | ------------: | -----------: | ------: | ------- | --------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |             % |         Time | Samples | Caller  | Location                                            |
| -----: | -------: | ------------: | -----------: | ------: | ------- | --------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `contains_implicit_multiline_string_with_comments` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |      % |            Time | Samples | Caller           | Location                                              |
| ------: | -------: | -----: | --------------: | ------: | ---------------- | ----------------------------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `transform_line` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `get_data` (`<frozen importlib._bootstrap_external>`)

| Change |    Delta |             % |         Time | Samples | Caller     | Location                                 |
| -----: | -------: | ------------: | -----------: | ------: | ---------- | ---------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `get_code` | `<frozen importlib._bootstrap_external>` |

##### `_signature_bound_method` (`/usr/lib/python3.11/inspect.py`)

| Change |    Delta |             % |         Time | Samples | Caller                     | Location                         |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------- | -------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `_signature_from_callable` | `/usr/lib/python3.11/inspect.py` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py`)

| Change |    Delta |             % |         Time | Samples | Caller       | Location                            |
| -----: | -------: | ------------: | -----------: | ------: | ------------ | ----------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py` |

##### `_subx` (`/usr/lib/python3.11/re/__init__.py`)

| Change |    Delta |             % |         Time | Samples | Caller      | Location                                              |
| -----: | -------: | ------------: | -----------: | ------: | ----------- | ----------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `sub_twice` | `/venv/lib/python3.11/site-packages/black/strings.py` |

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

| Change |    Delta |      % |              Time | Samples | Caller     | Location                                                      |
| -----: | -------: | -----: | ----------------: | ------: | ---------- | ------------------------------------------------------------- |
| -35.3% | -60.00ms | 100.0% | 170.0ms → 110.0ms | 17 → 11 | `__next__` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|  Change |    Delta |             % |         Time | Samples | Caller          | Location                                               |
| ------: | -------: | ------------: | -----------: | ------: | --------------- | ------------------------------------------------------ |
| removed | -40.00ms | 100.0% → 0.0% | 40.0ms → 0ms |   4 → 0 | `assert_stable` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `__init__` (`<string>`)

|  Change |    Delta |             % |         Time | Samples | Caller              | Location                                              |
| ------: | -------: | ------------: | -----------: | ------: | ------------------- | ----------------------------------------------------- |
| removed | -30.00ms |  60.0% → 0.0% | 30.0ms → 0ms |   3 → 0 | `__init__`          | `<string>`                                            |
|     new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `line`              | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| removed | -10.00ms |  20.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `all_lines`         | `/venv/lib/python3.11/site-packages/black/lines.py`   |
| removed | -10.00ms |  20.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `maybe_empty_lines` | `/venv/lib/python3.11/site-packages/black/lines.py`   |

##### `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |             % |            Time | Samples | Caller  | Location                                                |
| -----: | -------: | ------------: | --------------: | ------: | ------- | ------------------------------------------------------- |
| -75.0% | -30.00ms | 66.7% → 33.3% | 40.0ms → 10.0ms |   4 → 1 | `clone` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/black/comments.py`)

| Change |    Delta |      % |            Time | Samples | Caller              | Location                                               |
| -----: | -------: | -----: | --------------: | ------: | ------------------- | ------------------------------------------------------ |
| -50.0% | -30.00ms | 100.0% | 60.0ms → 30.0ms |   6 → 3 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py` |

##### `__str__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location                                            |
| ------: | -------: | ------------: | -----------: | ------: | --------- | --------------------------------------------------- |
| removed | -30.00ms | 100.0% → 0.0% | 30.0ms → 0ms |   3 → 0 | `__str__` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `_stringify_ast_with_new_parent` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

| Change |    Delta |      % |            Time | Samples | Caller           | Location                                              |
| -----: | -------: | -----: | --------------: | ------: | ---------------- | ----------------------------------------------------- |
| -75.0% | -30.00ms | 100.0% | 40.0ms → 10.0ms |   4 → 1 | `_stringify_ast` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |             % |            Time | Samples | Caller  | Location                                                     |
| -----: | -------: | ------------: | --------------: | ------: | ------- | ------------------------------------------------------------ |
| -50.0% | -20.00ms | 57.1% → 50.0% | 40.0ms → 20.0ms |   4 → 2 | `pop`   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
| -33.3% | -10.00ms | 42.9% → 50.0% | 30.0ms → 20.0ms |   3 → 2 | `shift` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `is_split_before_delimiter` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

| Change |    Delta |      % |            Time | Samples | Caller | Location                                               |
| -----: | -------: | -----: | --------------: | ------: | ------ | ------------------------------------------------------ |
| -40.0% | -20.00ms | 100.0% | 50.0ms → 30.0ms |   5 → 3 | `mark` | `/venv/lib/python3.11/site-packages/black/brackets.py` |

##### `<genexpr>` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|  Change |    Delta |             % |         Time | Samples | Caller             | Location                                                        |
| ------: | -------: | ------------: | -----------: | ------: | ------------------ | --------------------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `is_fstring_start` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |

##### `hug_power_op` (`/venv/lib/python3.11/site-packages/black/trans.py`)

|  Change |    Delta |              % |            Time | Samples | Caller                              | Location                                              |
| ------: | -------: | -------------: | --------------: | ------: | ----------------------------------- | ----------------------------------------------------- |
| removed | -10.00ms |   25.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `_hugging_power_ops_line_to_string` | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  -33.3% | -10.00ms | 75.0% → 100.0% | 30.0ms → 20.0ms |   3 → 2 | `run_transformer`                   | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_simple_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |    Delta |             % |         Time | Samples | Caller  | Location                                            |
| ------: | -------: | ------------: | -----------: | ------: | ------- | --------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |      % |             Time | Samples | Caller    | Location                                                |
| -----: | -------: | -----: | ---------------: | ------: | --------- | ------------------------------------------------------- |
| -20.0% | -20.00ms | 100.0% | 100.0ms → 80.0ms |  10 → 8 | `convert` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

| Change |    Delta |      % |              Time | Samples | Caller          | Location                                              |
| -----: | -------: | -----: | ----------------: | ------: | --------------- | ----------------------------------------------------- |
| -15.4% | -20.00ms | 100.0% | 130.0ms → 110.0ms | 13 → 11 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

| Change |    Delta |      % |            Time | Samples | Caller          | Location                                            |
| -----: | -------: | -----: | --------------: | ------: | --------------- | --------------------------------------------------- |
| -25.0% | -10.00ms | 100.0% | 40.0ms → 30.0ms |   4 → 3 | `visit_default` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `__enter__` (`<frozen importlib._bootstrap>`)

|  Change |    Delta |             % |         Time | Samples | Caller           | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | ---------------- | ------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `visit_suite` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |    Delta |             % |         Time | Samples | Caller  | Location                                            |
| ------: | -------: | ------------: | -----------: | ------: | ------- | --------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `visit_power` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |    Delta |             % |         Time | Samples | Caller  | Location                                            |
| ------: | -------: | ------------: | -----------: | ------: | ------- | --------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `all_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |             % |         Time | Samples | Caller             | Location                                               |
| ------: | -------: | ------------: | -----------: | ------: | ------------------ | ------------------------------------------------------ |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `current` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|  Change |    Delta |             % |         Time | Samples | Caller            | Location                                                        |
| ------: | -------: | ------------: | -----------: | ------: | ----------------- | --------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `generate_tokens` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |

##### `line_to_string` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |             % |         Time | Samples | Caller           | Location                                              |
| ------: | -------: | ------------: | -----------: | ------: | ---------------- | ----------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `transform_line` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `_rhs` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |    Delta |             % |         Time | Samples | Caller            | Location                                              |
| ------: | -------: | ------------: | -----------: | ------: | ----------------- | ----------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `run_transformer` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

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

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

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

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `visit_suite` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |     Delta |      % |              Time | Samples | Caller  | Location                                            |
| -----: | --------: | -----: | ----------------: | ------: | ------- | --------------------------------------------------- |
| +40.4% | +210.00ms | 100.0% | 520.0ms → 730.0ms | 52 → 73 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |     Delta |      % |              Time | Samples | Caller  | Location                                            |
| -----: | --------: | -----: | ----------------: | ------: | ------- | --------------------------------------------------- |
| +38.5% | +200.00ms | 100.0% | 520.0ms → 720.0ms | 52 → 72 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |     Delta |      % |              Time | Samples | Caller  | Location                                            |
| -----: | --------: | -----: | ----------------: | ------: | ------- | --------------------------------------------------- |
| +33.3% | +180.00ms | 100.0% | 540.0ms → 720.0ms | 54 → 72 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |     Delta |              % |              Time | Samples | Caller              | Location                                              |
| ------: | --------: | -------------: | ----------------: | ------: | ------------------- | ----------------------------------------------------- |
|  +43.1% | +220.00ms | 91.1% → 100.0% | 510.0ms → 730.0ms | 51 → 73 | `visit_suite`       | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  +30.4% | +170.00ms |         100.0% | 560.0ms → 730.0ms | 56 → 73 | `visit`             | `/venv/lib/python3.11/site-packages/black/nodes.py`   |
|  +27.8% | +100.00ms |  64.3% → 63.0% | 360.0ms → 460.0ms | 36 → 46 | `visit_simple_stmt` | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  +50.0% |  +80.00ms |  28.6% → 32.9% | 160.0ms → 240.0ms | 16 → 24 | `visit_power`       | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| +300.0% |  +30.00ms |    1.8% → 5.5% |   10.0ms → 40.0ms |   1 → 4 | `visit_STRING`      | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

| Change |     Delta |             % |              Time | Samples | Caller             | Location                                               |
| -----: | --------: | ------------: | ----------------: | ------: | ------------------ | ------------------------------------------------------ |
| +38.5% | +200.00ms | 92.9% → 98.6% | 520.0ms → 720.0ms | 52 → 72 | `visit_funcdef`    | `/venv/lib/python3.11/site-packages/black/linegen.py`  |
| +30.4% | +170.00ms |        100.0% | 560.0ms → 730.0ms | 56 → 73 | `visit_default`    | `/venv/lib/python3.11/site-packages/black/nodes.py`    |
| +31.5% | +170.00ms | 96.4% → 97.3% | 540.0ms → 710.0ms | 54 → 71 | `visit_stmt`       | `/venv/lib/python3.11/site-packages/black/linegen.py`  |
| +30.4% | +170.00ms |        100.0% | 560.0ms → 730.0ms | 56 → 73 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

| Change |     Delta |      % |              Time | Samples | Caller          | Location                                              |
| -----: | --------: | -----: | ----------------: | ------: | --------------- | ----------------------------------------------------- |
| +30.4% | +170.00ms | 100.0% | 560.0ms → 730.0ms | 56 → 73 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |             % |          Time |   Samples | Caller       | Location                                               |
| -----: | --------: | ------------: | ------------: | --------: | ------------ | ------------------------------------------------------ |
| +11.9% | +130.00ms | 68.6% → 70.9% | 1.09s → 1.22s | 109 → 122 | `format_str` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `format_str` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Caller                 | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | ---------------------- | ------------------------------------------------------ |
| +11.9% | +130.00ms | 100.0% | 1.09s → 1.22s | 109 → 122 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Caller                 | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | ---------------------- | ------------------------------------------------------ |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `format_file_in_place` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Caller         | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | -------------- | ------------------------------------------------------ |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `reformat_one` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `reformat_one` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Caller | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | ------ | ------------------------------------------------------ |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Caller     | Location                                                 |
| -----: | --------: | -----: | ------------: | --------: | ---------- | -------------------------------------------------------- |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`)

| Change |     Delta |      % |          Time |   Samples | Caller   | Location                                           |
| -----: | --------: | -----: | ------------: | --------: | -------- | -------------------------------------------------- |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |     Delta |      % |          Time |   Samples | Caller   | Location                                           |
| -----: | --------: | -----: | ------------: | --------: | -------- | -------------------------------------------------- |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `main`   | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |     Delta |      % |          Time |   Samples | Caller     | Location                                           |
| -----: | --------: | -----: | ------------: | --------: | ---------- | -------------------------------------------------- |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |     Delta |      % |          Time |   Samples | Caller         | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | -------------- | ------------------------------------------------------ |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `patched_main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Caller     | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | ---------- | ------------------------------------------------------ |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `<module>` | `/venv/lib/python3.11/site-packages/black/__main__.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`)

| Change |     Delta |      % |          Time |   Samples | Caller      | Location         |
| -----: | --------: | -----: | ------------: | --------: | ----------- | ---------------- |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `_run_code` | `<frozen runpy>` |

##### `_run_code` (`<frozen runpy>`)

| Change |     Delta |      % |          Time |   Samples | Caller                | Location         |
| -----: | --------: | -----: | ------------: | --------: | --------------------- | ---------------- |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `_run_module_as_main` | `<frozen runpy>` |

##### `visit_STRING` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |    Delta |      % |             Time | Samples | Caller  | Location                                            |
| ------: | -------: | -----: | ---------------: | ------: | ------- | --------------------------------------------------- |
| +450.0% | +90.00ms | 100.0% | 20.0ms → 110.0ms |  2 → 11 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `visit_simple_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |      % |              Time | Samples | Caller  | Location                                            |
| -----: | -------: | -----: | ----------------: | ------: | ------- | --------------------------------------------------- |
| +17.9% | +70.00ms | 100.0% | 390.0ms → 460.0ms | 39 → 46 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py`)

| Change |    Delta |            % |         Time | Samples | Caller   | Location                             |
| -----: | -------: | -----------: | -----------: | ------: | -------- | ------------------------------------ |
|    new | +30.00ms | 0.0% → 75.0% | 0ms → 30.0ms |   0 → 3 | `search` | `/usr/lib/python3.11/re/__init__.py` |
|    new | +10.00ms | 0.0% → 25.0% | 0ms → 10.0ms |   0 → 1 | `match`  | `/usr/lib/python3.11/re/__init__.py` |

##### `search` (`/usr/lib/python3.11/re/__init__.py`)

| Change |    Delta |             % |         Time | Samples | Caller         | Location                                              |
| -----: | -------: | ------------: | -----------: | ------: | -------------- | ----------------------------------------------------- |
|    new | +30.00ms | 0.0% → 100.0% | 0ms → 30.0ms |   0 → 3 | `visit_STRING` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

| Change |    Delta |      % |             Time | Samples | Caller                  | Location                                              |
| -----: | -------: | -----: | ---------------: | ------: | ----------------------- | ----------------------------------------------------- |
| +25.0% | +20.00ms | 100.0% | 80.0ms → 100.0ms |  8 → 10 | `_parse_single_version` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|  Change |    Delta |             % |            Time | Samples | Caller                | Location                                                      |
| ------: | -------: | ------------: | --------------: | ------: | --------------------- | ------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `<module>`            | `/venv/lib/python3.11/site-packages/platformdirs/__init__.py` |
| +100.0% | +10.00ms |        100.0% | 10.0ms → 20.0ms |   1 → 2 | `<module>`            | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| +100.0% | +10.00ms |        100.0% | 10.0ms → 20.0ms |   1 → 2 | `_get_module_details` | `<frozen runpy>`                                              |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|  Change |    Delta |      % |            Time | Samples | Caller        | Location                                 |
| ------: | -------: | -----: | --------------: | ------: | ------------- | ---------------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `exec_module` | `<frozen importlib._bootstrap_external>` |

##### `exec_module` (`<frozen importlib._bootstrap_external>`)

|  Change |    Delta |      % |            Time | Samples | Caller           | Location                        |
| ------: | -------: | -----: | --------------: | ------: | ---------------- | ------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|  Change |    Delta |      % |            Time | Samples | Caller                    | Location                        |
| ------: | -------: | -----: | --------------: | ------: | ------------------------- | ------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|  Change |    Delta |      % |            Time | Samples | Caller           | Location                        |
| ------: | -------: | -----: | --------------: | ------: | ---------------- | ------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|  Change |    Delta |      % |            Time | Samples | Caller                | Location         |
| ------: | -------: | -----: | --------------: | ------: | --------------------- | ---------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `_get_module_details` | `<frozen runpy>` |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `_run_module_as_main` | `<frozen runpy>` |

##### `get_data` (`<frozen importlib._bootstrap_external>`)

| Change |    Delta |             % |         Time | Samples | Caller     | Location                                 |
| -----: | -------: | ------------: | -----------: | ------: | ---------- | ---------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `get_code` | `<frozen importlib._bootstrap_external>` |

##### `get_code` (`<frozen importlib._bootstrap_external>`)

| Change |    Delta |             % |         Time | Samples | Caller        | Location                                 |
| -----: | -------: | ------------: | -----------: | ------: | ------------- | ---------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_signature_bound_method` (`/usr/lib/python3.11/inspect.py`)

| Change |    Delta |             % |         Time | Samples | Caller                     | Location                         |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------- | -------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `_signature_from_callable` | `/usr/lib/python3.11/inspect.py` |

##### `_signature_from_callable` (`/usr/lib/python3.11/inspect.py`)

| Change |    Delta |             % |         Time | Samples | Caller          | Location                         |
| -----: | -------: | ------------: | -----------: | ------: | --------------- | -------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `from_callable` | `/usr/lib/python3.11/inspect.py` |

##### `from_callable` (`/usr/lib/python3.11/inspect.py`)

| Change |    Delta |             % |         Time | Samples | Caller      | Location                         |
| -----: | -------: | ------------: | -----------: | ------: | ----------- | -------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `signature` | `/usr/lib/python3.11/inspect.py` |

##### `signature` (`/usr/lib/python3.11/inspect.py`)

| Change |    Delta |             % |         Time | Samples | Caller           | Location                             |
| -----: | -------: | ------------: | -----------: | ------: | ---------------- | ------------------------------------ |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `_process_class` | `/usr/lib/python3.11/dataclasses.py` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py`)

| Change |    Delta |             % |         Time | Samples | Caller | Location                             |
| -----: | -------: | ------------: | -----------: | ------: | ------ | ------------------------------------ |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `wrap` | `/usr/lib/python3.11/dataclasses.py` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py`)

| Change |    Delta |             % |         Time | Samples | Caller      | Location                             |
| -----: | -------: | ------------: | -----------: | ------: | ----------- | ------------------------------------ |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `dataclass` | `/usr/lib/python3.11/dataclasses.py` |

##### `dataclass` (`/usr/lib/python3.11/dataclasses.py`)

| Change |    Delta |             % |         Time | Samples | Caller     | Location                                           |
| -----: | -------: | ------------: | -----------: | ------: | ---------- | -------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `<module>` | `/venv/lib/python3.11/site-packages/black/mode.py` |

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

| Change |    Delta |      % |              Time | Samples | Caller     | Location                                                      |
| -----: | -------: | -----: | ----------------: | ------: | ---------- | ------------------------------------------------------------- |
| -45.0% | -90.00ms | 100.0% | 200.0ms → 110.0ms | 20 → 11 | `__next__` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

| Change |    Delta |      % |              Time | Samples | Caller         | Location                                                      |
| -----: | -------: | -----: | ----------------: | ------: | -------------- | ------------------------------------------------------------- |
| -45.0% | -90.00ms | 100.0% | 200.0ms → 110.0ms | 20 → 11 | `parse_tokens` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |             % |              Time | Samples | Caller             | Location                                               |
| -----: | -------: | ------------: | ----------------: | ------: | ------------------ | ------------------------------------------------------ |
| -34.8% | -80.00ms |        100.0% | 230.0ms → 150.0ms | 23 → 15 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| -42.9% | -30.00ms | 30.4% → 26.7% |   70.0ms → 40.0ms |   7 → 4 | `run_transformer`  | `/venv/lib/python3.11/site-packages/black/linegen.py`  |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

| Change |    Delta |      % |              Time | Samples | Caller      | Location                                                     |
| -----: | -------: | -----: | ----------------: | ------: | ----------- | ------------------------------------------------------------ |
| -41.2% | -70.00ms | 100.0% | 170.0ms → 100.0ms | 17 → 10 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `hug_power_op` (`/venv/lib/python3.11/site-packages/black/trans.py`)

| Change |    Delta |             % |            Time | Samples | Caller                              | Location                                              |
| -----: | -------: | ------------: | --------------: | ------: | ----------------------------------- | ----------------------------------------------------- |
| -80.0% | -40.00ms | 55.6% → 33.3% | 50.0ms → 10.0ms |   5 → 1 | `_hugging_power_ops_line_to_string` | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| -50.0% | -20.00ms | 44.4% → 66.7% | 40.0ms → 20.0ms |   4 → 2 | `run_transformer`                   | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |             % |             Time | Samples | Caller  | Location                                                     |
| -----: | -------: | ------------: | ---------------: | ------: | ------- | ------------------------------------------------------------ |
| -57.1% | -80.00ms | 73.7% → 42.9% | 140.0ms → 60.0ms |  14 → 6 | `pop`   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
| +60.0% | +30.00ms | 26.3% → 57.1% |  50.0ms → 80.0ms |   5 → 8 | `shift` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `__str__` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |              % |            Time | Samples | Caller             | Location                                               |
| ------: | -------: | -------------: | --------------: | ------: | ------------------ | ------------------------------------------------------ |
| removed | -20.00ms |   28.6% → 0.0% |    20.0ms → 0ms |   2 → 0 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| removed | -10.00ms |   14.3% → 0.0% |    10.0ms → 0ms |   1 → 0 | `run_transformer`  | `/venv/lib/python3.11/site-packages/black/linegen.py`  |
| removed | -10.00ms |   14.3% → 0.0% |    10.0ms → 0ms |   1 → 0 | `all_lines`        | `/venv/lib/python3.11/site-packages/black/lines.py`    |
|  -33.3% | -10.00ms | 42.9% → 100.0% | 30.0ms → 20.0ms |   3 → 2 | `line_to_string`   | `/venv/lib/python3.11/site-packages/black/lines.py`    |

##### `__init__` (`<string>`)

|  Change |    Delta |              % |            Time | Samples | Caller              | Location                                              |
| ------: | -------: | -------------: | --------------: | ------: | ------------------- | ----------------------------------------------------- |
| removed | -30.00ms |   60.0% → 0.0% |    30.0ms → 0ms |   3 → 0 | `__init__`          | `<string>`                                            |
| removed | -20.00ms |   40.0% → 0.0% |    20.0ms → 0ms |   2 → 0 | `all_lines`         | `/venv/lib/python3.11/site-packages/black/lines.py`   |
|  -50.0% | -10.00ms | 40.0% → 100.0% | 20.0ms → 10.0ms |   2 → 1 | `line`              | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| removed | -10.00ms |   20.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `maybe_empty_lines` | `/venv/lib/python3.11/site-packages/black/lines.py`   |

##### `all_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |             % |         Time | Samples | Caller             | Location                                               |
| ------: | -------: | ------------: | -----------: | ------: | ------------------ | ------------------------------------------------------ |
| removed | -40.00ms | 100.0% → 0.0% | 40.0ms → 0ms |   4 → 0 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `_hugging_power_ops_line_to_string` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |      % |            Time | Samples | Caller           | Location                                              |
| -----: | -------: | -----: | --------------: | ------: | ---------------- | ----------------------------------------------------- |
| -80.0% | -40.00ms | 100.0% | 50.0ms → 10.0ms |   5 → 1 | `transform_line` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `run_transformer` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |      % |             Time | Samples | Caller           | Location                                              |
| -----: | -------: | -----: | ---------------: | ------: | ---------------- | ----------------------------------------------------- |
| -33.3% | -40.00ms | 100.0% | 120.0ms → 80.0ms |  12 → 8 | `transform_line` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |             % |            Time | Samples | Caller  | Location                                                |
| -----: | -------: | ------------: | --------------: | ------: | ------- | ------------------------------------------------------- |
| -75.0% | -30.00ms | 66.7% → 33.3% | 40.0ms → 10.0ms |   4 → 1 | `clone` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `visit_NUMBER` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |      % |            Time | Samples | Caller  | Location                                            |
| -----: | -------: | -----: | --------------: | ------: | ------- | --------------------------------------------------- |
| -75.0% | -30.00ms | 100.0% | 40.0ms → 10.0ms |   4 → 1 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `clone` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |      % |            Time | Samples | Caller         | Location                                            |
| -----: | -------: | -----: | --------------: | ------: | -------------- | --------------------------------------------------- |
| -75.0% | -30.00ms | 100.0% | 40.0ms → 10.0ms |   4 → 1 | `hug_power_op` | `/venv/lib/python3.11/site-packages/black/trans.py` |

##### `__str__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location                                            |
| ------: | -------: | ------------: | -----------: | ------: | --------- | --------------------------------------------------- |
| removed | -30.00ms | 100.0% → 0.0% | 30.0ms → 0ms |   3 → 0 | `__str__` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

| Change |    Delta |      % |              Time | Samples | Caller          | Location                                              |
| -----: | -------: | -----: | ----------------: | ------: | --------------- | ----------------------------------------------------- |
| -10.0% | -20.00ms | 100.0% | 200.0ms → 180.0ms | 20 → 18 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `is_split_before_delimiter` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

| Change |    Delta |      % |            Time | Samples | Caller | Location                                               |
| -----: | -------: | -----: | --------------: | ------: | ------ | ------------------------------------------------------ |
| -40.0% | -20.00ms | 100.0% | 50.0ms → 30.0ms |   5 → 3 | `mark` | `/venv/lib/python3.11/site-packages/black/brackets.py` |

##### `<genexpr>` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|  Change |    Delta |             % |         Time | Samples | Caller             | Location                                                        |
| ------: | -------: | ------------: | -----------: | ------: | ------------------ | --------------------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `is_fstring_start` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |

##### `is_fstring_start` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|  Change |    Delta |             % |         Time | Samples | Caller            | Location                                                        |
| ------: | -------: | ------------: | -----------: | ------: | ----------------- | --------------------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `generate_tokens` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |

##### `line_to_string` (`/venv/lib/python3.11/site-packages/black/lines.py`)

| Change |    Delta |      % |            Time | Samples | Caller           | Location                                              |
| -----: | -------: | -----: | --------------: | ------: | ---------------- | ----------------------------------------------------- |
| -50.0% | -20.00ms | 100.0% | 40.0ms → 20.0ms |   4 → 2 | `transform_line` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |      % |             Time | Samples | Caller    | Location                                                |
| -----: | -------: | -----: | ---------------: | ------: | --------- | ------------------------------------------------------- |
| -20.0% | -20.00ms | 100.0% | 100.0ms → 80.0ms |  10 → 8 | `convert` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `__enter__` (`<frozen importlib._bootstrap>`)

|  Change |    Delta |             % |         Time | Samples | Caller           | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | ---------------- | ------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `_find_and_load` | `<frozen importlib._bootstrap>` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `visit_suite` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |     Delta |              % |              Time | Samples | Callee          | Location                                              |
| -----: | --------: | -------------: | ----------------: | ------: | --------------- | ----------------------------------------------------- |
| +43.1% | +220.00ms | 98.1% → 100.0% | 510.0ms → 730.0ms | 51 → 73 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|    new |  +10.00ms |    0.0% → 1.4% |      0ms → 10.0ms |   0 → 1 | `is_stub_suite` | `/venv/lib/python3.11/site-packages/black/nodes.py`   |

##### `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |     Delta |      % |              Time | Samples | Callee  | Location                                            |
| -----: | --------: | -----: | ----------------: | ------: | ------- | --------------------------------------------------- |
| +38.5% | +200.00ms | 100.0% | 520.0ms → 720.0ms | 52 → 72 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |     Delta |              % |              Time | Samples | Callee                       | Location                                              |
| ------: | --------: | -------------: | ----------------: | ------: | ---------------------------- | ----------------------------------------------------- |
|  +31.5% | +170.00ms | 100.0% → 98.6% | 540.0ms → 710.0ms | 54 → 71 | `visit`                      | `/venv/lib/python3.11/site-packages/black/nodes.py`   |
|     new |  +40.00ms |    0.0% → 5.6% |      0ms → 40.0ms |   0 → 4 | `normalize_invisible_parens` | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| removed |  -20.00ms |    3.7% → 0.0% |      20.0ms → 0ms |   2 → 0 | `line`                       | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |     Delta |             % |              Time | Samples | Callee              | Location                                                |
| -----: | --------: | ------------: | ----------------: | ------: | ------------------- | ------------------------------------------------------- |
| +30.4% | +170.00ms |        100.0% | 560.0ms → 730.0ms | 56 → 73 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/nodes.py`     |
| +36.8% |  +70.00ms | 33.9% → 35.6% | 190.0ms → 260.0ms | 19 → 26 | `append`            | `/venv/lib/python3.11/site-packages/black/lines.py`     |
| -10.0% |  -20.00ms | 35.7% → 24.7% | 200.0ms → 180.0ms | 20 → 18 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py`  |
|    new |  +10.00ms |   0.0% → 1.4% |      0ms → 10.0ms |   0 → 1 | `prefix`            | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|  Change |     Delta |              % |              Time | Samples | Callee          | Location                                              |
| ------: | --------: | -------------: | ----------------: | ------: | --------------- | ----------------------------------------------------- |
|  +40.4% | +210.00ms | 92.9% → 100.0% | 520.0ms → 730.0ms | 52 → 73 | `visit_suite`   | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  +38.5% | +200.00ms |  92.9% → 98.6% | 520.0ms → 720.0ms | 52 → 72 | `visit_funcdef` | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  +33.3% | +180.00ms |  96.4% → 98.6% | 540.0ms → 720.0ms | 54 → 72 | `visit_stmt`    | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  +30.4% | +170.00ms |         100.0% | 560.0ms → 730.0ms | 56 → 73 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| +450.0% |  +90.00ms |   3.6% → 15.1% |  20.0ms → 110.0ms |  2 → 11 | `visit_STRING`  | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

| Change |     Delta |      % |              Time | Samples | Callee  | Location                                            |
| -----: | --------: | -----: | ----------------: | ------: | ------- | --------------------------------------------------- |
| +30.4% | +170.00ms | 100.0% | 560.0ms → 730.0ms | 56 → 73 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `_run_module_as_main` (`<frozen runpy>`)

|  Change |     Delta |             % |            Time |   Samples | Callee                | Location         |
| ------: | --------: | ------------: | --------------: | --------: | --------------------- | ---------------- |
|   +7.3% | +130.00ms | 99.4% → 99.0% |   1.78s → 1.91s | 178 → 191 | `_run_code`           | `<frozen runpy>` |
| +100.0% |  +10.00ms |   0.6% → 1.0% | 10.0ms → 20.0ms |     1 → 2 | `_get_module_details` | `<frozen runpy>` |

##### `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|  Change |     Delta |             % |              Time | Samples | Callee                   | Location                                               |
| ------: | --------: | ------------: | ----------------: | ------: | ------------------------ | ------------------------------------------------------ |
|  +30.4% | +170.00ms | 35.2% → 42.4% | 560.0ms → 730.0ms | 56 → 73 | `visit`                  | `/venv/lib/python3.11/site-packages/black/nodes.py`    |
|  -34.8% |  -80.00ms |  14.5% → 8.7% | 230.0ms → 150.0ms | 23 → 15 | `transform_line`         | `/venv/lib/python3.11/site-packages/black/linegen.py`  |
| +500.0% |  +50.00ms |   0.6% → 3.5% |   10.0ms → 60.0ms |   1 → 6 | `maybe_empty_lines`      | `/venv/lib/python3.11/site-packages/black/lines.py`    |
| +125.0% |  +50.00ms |   2.5% → 5.2% |   40.0ms → 90.0ms |   4 → 9 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| removed |  -40.00ms |   2.5% → 0.0% |      40.0ms → 0ms |   4 → 0 | `all_lines`              | `/venv/lib/python3.11/site-packages/black/lines.py`    |

##### `format_str` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Callee             | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | ------------------ | ------------------------------------------------------ |
| +11.9% | +130.00ms | 100.0% | 1.09s → 1.22s | 109 → 122 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |             % |          Time |   Samples | Callee                            | Location                                               |
| -----: | --------: | ------------: | ------------: | --------: | --------------------------------- | ------------------------------------------------------ |
| +11.9% | +130.00ms | 61.2% → 63.9% | 1.09s → 1.22s | 109 → 122 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py` |
|    ~0% |  +<0.01µs | 38.8% → 36.1% |       690.0ms |        69 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `format_file_in_place` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Callee                 | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | ---------------------- | ------------------------------------------------------ |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `reformat_one` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Callee                 | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | ---------------------- | ------------------------------------------------------ |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Callee         | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | -------------- | ------------------------------------------------------ |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `reformat_one` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`)

| Change |     Delta |      % |          Time |   Samples | Callee | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | ------ | ------------------------------------------------------ |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |     Delta |      % |          Time |   Samples | Callee     | Location                                                 |
| -----: | --------: | -----: | ------------: | --------: | ---------- | -------------------------------------------------------- |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py` |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `invoke`   | `/venv/lib/python3.11/site-packages/click/core.py`       |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |     Delta |      % |          Time |   Samples | Callee   | Location                                           |
| -----: | --------: | -----: | ------------: | --------: | -------- | -------------------------------------------------- |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |     Delta |      % |          Time |   Samples | Callee | Location                                           |
| -----: | --------: | -----: | ------------: | --------: | ------ | -------------------------------------------------- |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `main` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Callee     | Location                                           |
| -----: | --------: | -----: | ------------: | --------: | ---------- | -------------------------------------------------- |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`)

| Change |     Delta |      % |          Time |   Samples | Callee         | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | -------------- | ------------------------------------------------------ |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `patched_main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `_run_code` (`<frozen runpy>`)

| Change |     Delta |      % |          Time |   Samples | Callee     | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | ---------- | ------------------------------------------------------ |
|  +7.3% | +130.00ms | 100.0% | 1.78s → 1.91s | 178 → 191 | `<module>` | `/venv/lib/python3.11/site-packages/black/__main__.py` |

##### `visit_STRING` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |    Delta |             % |            Time | Samples | Callee                    | Location                                              |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------- | ----------------------------------------------------- |
| +300.0% | +30.00ms | 50.0% → 36.4% | 10.0ms → 40.0ms |   1 → 4 | `visit_default`           | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|     new | +30.00ms |  0.0% → 27.3% |    0ms → 30.0ms |   0 → 3 | `search`                  | `/usr/lib/python3.11/re/__init__.py`                  |
|     new | +10.00ms |   0.0% → 9.1% |    0ms → 10.0ms |   0 → 1 | `normalize_string_quotes` | `/venv/lib/python3.11/site-packages/black/strings.py` |
|     new | +10.00ms |   0.0% → 9.1% |    0ms → 10.0ms |   0 → 1 | `normalize_string_prefix` | `/venv/lib/python3.11/site-packages/black/strings.py` |

##### `visit_simple_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |     Delta |              % |              Time | Samples | Callee          | Location                                              |
| ------: | --------: | -------------: | ----------------: | ------: | --------------- | ----------------------------------------------------- |
|  +27.8% | +100.00ms | 92.3% → 100.0% | 360.0ms → 460.0ms | 36 → 46 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| removed |  -10.00ms |    2.6% → 0.0% |      10.0ms → 0ms |   1 → 0 | `line`          | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py`)

| Change |    Delta |            % |         Time | Samples | Callee    | Location                              |
| -----: | -------: | -----------: | -----------: | ------: | --------- | ------------------------------------- |
|    new | +10.00ms | 0.0% → 25.0% | 0ms → 10.0ms |   0 → 1 | `compile` | `/usr/lib/python3.11/re/_compiler.py` |

##### `search` (`/usr/lib/python3.11/re/__init__.py`)

| Change |    Delta |             % |         Time | Samples | Callee     | Location                             |
| -----: | -------: | ------------: | -----------: | ------: | ---------- | ------------------------------------ |
|    new | +30.00ms | 0.0% → 100.0% | 0ms → 30.0ms |   0 → 3 | `_compile` | `/usr/lib/python3.11/re/__init__.py` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|  Change |    Delta |             % |            Time | Samples | Callee                    | Location                        |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------- | ------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `__enter__`               | `<frozen importlib._bootstrap>` |
| +100.0% | +10.00ms |        100.0% | 10.0ms → 20.0ms |   1 → 2 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|  Change |    Delta |             % |            Time | Samples | Callee     | Location                                                      |
| ------: | -------: | ------------: | --------------: | ------: | ---------- | ------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `<module>` | `/venv/lib/python3.11/site-packages/platformdirs/__init__.py` |
| +100.0% | +10.00ms |        100.0% | 10.0ms → 20.0ms |   1 → 2 | `<module>` | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
|     new | +10.00ms |  0.0% → 50.0% |    0ms → 10.0ms |   0 → 1 | `<module>` | `/venv/lib/python3.11/site-packages/black/mode.py`            |

##### `exec_module` (`<frozen importlib._bootstrap_external>`)

|  Change |    Delta |            % |            Time | Samples | Callee                      | Location                                 |
| ------: | -------: | -----------: | --------------: | ------: | --------------------------- | ---------------------------------------- |
| +100.0% | +10.00ms |       100.0% | 10.0ms → 20.0ms |   1 → 2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|     new | +10.00ms | 0.0% → 50.0% |    0ms → 10.0ms |   0 → 1 | `get_code`                  | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|  Change |    Delta |      % |            Time | Samples | Callee        | Location                                 |
| ------: | -------: | -----: | --------------: | ------: | ------------- | ---------------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|  Change |    Delta |      % |            Time | Samples | Callee           | Location                        |
| ------: | -------: | -----: | --------------: | ------: | ---------------- | ------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|  Change |    Delta |      % |            Time | Samples | Callee                | Location                        |
| ------: | -------: | -----: | --------------: | ------: | --------------------- | ------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `_get_module_details` | `<frozen runpy>`                |

##### `get_code` (`<frozen importlib._bootstrap_external>`)

| Change |    Delta |             % |         Time | Samples | Callee     | Location                                 |
| -----: | -------: | ------------: | -----------: | ------: | ---------- | ---------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `get_data` | `<frozen importlib._bootstrap_external>` |

##### `_signature_from_callable` (`/usr/lib/python3.11/inspect.py`)

| Change |    Delta |             % |         Time | Samples | Callee                    | Location                         |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------- | -------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `_signature_bound_method` | `/usr/lib/python3.11/inspect.py` |

##### `from_callable` (`/usr/lib/python3.11/inspect.py`)

| Change |    Delta |             % |         Time | Samples | Callee                     | Location                         |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------- | -------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `_signature_from_callable` | `/usr/lib/python3.11/inspect.py` |

##### `signature` (`/usr/lib/python3.11/inspect.py`)

| Change |    Delta |             % |         Time | Samples | Callee          | Location                         |
| -----: | -------: | ------------: | -----------: | ------: | --------------- | -------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `from_callable` | `/usr/lib/python3.11/inspect.py` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py`)

| Change |    Delta |             % |         Time | Samples | Callee      | Location                         |
| -----: | -------: | ------------: | -----------: | ------: | ----------- | -------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `signature` | `/usr/lib/python3.11/inspect.py` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py`)

| Change |    Delta |             % |         Time | Samples | Callee           | Location                             |
| -----: | -------: | ------------: | -----------: | ------: | ---------------- | ------------------------------------ |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `_process_class` | `/usr/lib/python3.11/dataclasses.py` |

##### `dataclass` (`/usr/lib/python3.11/dataclasses.py`)

| Change |    Delta |             % |         Time | Samples | Callee | Location                             |
| -----: | -------: | ------------: | -----------: | ------: | ------ | ------------------------------------ |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `wrap` | `/usr/lib/python3.11/dataclasses.py` |

##### `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|  Change |    Delta |            % |         Time | Samples | Callee             | Location                                                        |
| ------: | -------: | -----------: | -----------: | ------: | ------------------ | --------------------------------------------------------------- |
| removed | -20.00ms | 10.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `is_fstring_start` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
| removed | -10.00ms |  5.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `current`          | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |

##### `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

| Change |    Delta |      % |              Time | Samples | Callee            | Location                                                        |
| -----: | -------: | -----: | ----------------: | ------: | ----------------- | --------------------------------------------------------------- |
| -45.0% | -90.00ms | 100.0% | 200.0ms → 110.0ms | 20 → 11 | `generate_tokens` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |

##### `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |    Delta |             % |             Time | Samples | Callee                                             | Location                                              |
| ------: | -------: | ------------: | ---------------: | ------: | -------------------------------------------------- | ----------------------------------------------------- |
|  -80.0% | -40.00ms |  21.7% → 6.7% |  50.0ms → 10.0ms |   5 → 1 | `_hugging_power_ops_line_to_string`                | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  -33.3% | -40.00ms | 52.2% → 53.3% | 120.0ms → 80.0ms |  12 → 8 | `run_transformer`                                  | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  -50.0% | -20.00ms | 17.4% → 13.3% |  40.0ms → 20.0ms |   4 → 2 | `line_to_string`                                   | `/venv/lib/python3.11/site-packages/black/lines.py`   |
| +100.0% | +10.00ms |  4.3% → 13.3% |  10.0ms → 20.0ms |   1 → 2 | `contains_implicit_multiline_string_with_comments` | `/venv/lib/python3.11/site-packages/black/lines.py`   |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

| Change |    Delta |             % |             Time | Samples | Callee    | Location                                                |
| -----: | -------: | ------------: | ---------------: | ------: | --------- | ------------------------------------------------------- |
| -57.1% | -80.00ms | 82.4% → 60.0% | 140.0ms → 60.0ms |  14 → 6 | `convert` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `hug_power_op` (`/venv/lib/python3.11/site-packages/black/trans.py`)

|  Change |    Delta |             % |            Time | Samples | Callee   | Location                                                |
| ------: | -------: | ------------: | --------------: | ------: | -------- | ------------------------------------------------------- |
|  -75.0% | -30.00ms | 44.4% → 33.3% | 40.0ms → 10.0ms |   4 → 1 | `clone`  | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
| removed | -10.00ms |  11.1% → 0.0% |    10.0ms → 0ms |   1 → 0 | `append` | `/venv/lib/python3.11/site-packages/black/lines.py`     |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |             % |             Time | Samples | Callee    | Location                                                |
| -----: | -------: | ------------: | ---------------: | ------: | --------- | ------------------------------------------------------- |
| -20.0% | -20.00ms | 52.6% → 57.1% | 100.0ms → 80.0ms |  10 → 8 | `__new__` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `__str__` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |            % |         Time | Samples | Callee     | Location                                                |
| ------: | -------: | -----------: | -----------: | ------: | ---------- | ------------------------------------------------------- |
| removed | -30.00ms | 42.9% → 0.0% | 30.0ms → 0ms |   3 → 0 | `__str__`  | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
| removed | -10.00ms | 14.3% → 0.0% | 10.0ms → 0ms |   1 → 0 | `__bool__` | `/venv/lib/python3.11/site-packages/black/lines.py`     |

##### `__init__` (`<string>`)

|  Change |    Delta |            % |         Time | Samples | Callee     | Location   |
| ------: | -------: | -----------: | -----------: | ------: | ---------- | ---------- |
| removed | -30.00ms | 60.0% → 0.0% | 30.0ms → 0ms |   3 → 0 | `__init__` | `<string>` |

##### `all_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |            % |         Time | Samples | Callee     | Location                                            |
| ------: | -------: | -----------: | -----------: | ------: | ---------- | --------------------------------------------------- |
| removed | -20.00ms | 50.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `__init__` | `<string>`                                          |
| removed | -10.00ms | 25.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `__str__`  | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `_hugging_power_ops_line_to_string` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |      % |            Time | Samples | Callee         | Location                                            |
| -----: | -------: | -----: | --------------: | ------: | -------------- | --------------------------------------------------- |
| -80.0% | -40.00ms | 100.0% | 50.0ms → 10.0ms |   5 → 1 | `hug_power_op` | `/venv/lib/python3.11/site-packages/black/trans.py` |

##### `run_transformer` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |    Delta |             % |            Time | Samples | Callee           | Location                                              |
| ------: | -------: | ------------: | --------------: | ------: | ---------------- | ----------------------------------------------------- |
|  -42.9% | -30.00ms | 58.3% → 50.0% | 70.0ms → 40.0ms |   7 → 4 | `transform_line` | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  -50.0% | -20.00ms | 33.3% → 25.0% | 40.0ms → 20.0ms |   4 → 2 | `hug_power_op`   | `/venv/lib/python3.11/site-packages/black/trans.py`   |
| removed | -10.00ms |   8.3% → 0.0% |    10.0ms → 0ms |   1 → 0 | `__str__`        | `/venv/lib/python3.11/site-packages/black/lines.py`   |
| +100.0% | +10.00ms |  8.3% → 25.0% | 10.0ms → 20.0ms |   1 → 2 | `split_wrapper`  | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_NUMBER` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |      % |            Time | Samples | Callee          | Location                                              |
| -----: | -------: | -----: | --------------: | ------: | --------------- | ----------------------------------------------------- |
| -75.0% | -30.00ms | 100.0% | 40.0ms → 10.0ms |   4 → 1 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `clone` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |      % |            Time | Samples | Callee     | Location                                                |
| -----: | -------: | -----: | --------------: | ------: | ---------- | ------------------------------------------------------- |
| -75.0% | -30.00ms | 100.0% | 40.0ms → 10.0ms |   4 → 1 | `__init__` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

| Change |    Delta |             % |            Time | Samples | Callee                      | Location                                                |
| -----: | -------: | ------------: | --------------: | ------: | --------------------------- | ------------------------------------------------------- |
| -14.3% | -10.00ms | 35.0% → 33.3% | 70.0ms → 60.0ms |   7 → 6 | `normalize_trailing_prefix` | `/venv/lib/python3.11/site-packages/black/comments.py`  |
|    new | +10.00ms |   0.0% → 5.6% |    0ms → 10.0ms |   0 → 1 | `prefix`                    | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `is_fstring_start` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`)

|  Change |    Delta |             % |         Time | Samples | Callee      | Location                                                        |
| ------: | -------: | ------------: | -----------: | ------: | ----------- | --------------------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `<genexpr>` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |

##### `line_to_string` (`/venv/lib/python3.11/site-packages/black/lines.py`)

| Change |    Delta |              % |            Time | Samples | Callee    | Location                                            |
| -----: | -------: | -------------: | --------------: | ------: | --------- | --------------------------------------------------- |
| -33.3% | -10.00ms | 75.0% → 100.0% | 30.0ms → 20.0ms |   3 → 2 | `__str__` | `/venv/lib/python3.11/site-packages/black/lines.py` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

Common call stack: `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|  Change |    Delta |           % |             Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | -------: | ----------: | ---------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +233.3% | +70.00ms | 1.6% → 5.0% | 30.0ms → 100.0ms |  3 → 10 | `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| +500.0% | +50.00ms | 0.5% → 3.0% |  10.0ms → 60.0ms |   1 → 6 | `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|     new | +50.00ms | 0.0% → 2.5% |     0ms → 50.0ms |   0 → 5 | `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +100.0% | +40.00ms | 2.2% → 4.0% |  40.0ms → 80.0ms |   4 → 8 | `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|     new | +40.00ms | 0.0% → 2.0% |     0ms → 40.0ms |   0 → 4 | `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     new | +30.00ms | 0.0% → 1.5% |     0ms → 30.0ms |   0 → 3 | `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `shift` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|     new | +30.00ms | 0.0% → 1.5% |     0ms → 30.0ms |   0 → 3 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|     new | +30.00ms | 0.0% → 1.5% |     0ms → 30.0ms |   0 → 3 | `_compile` (`/usr/lib/python3.11/re/__init__.py`) ← `search` ← `visit_STRING` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     new | +20.00ms | 0.0% → 1.0% |     0ms → 20.0ms |   0 → 2 | `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new | +20.00ms | 0.0% → 1.0% |     0ms → 20.0ms |   0 → 2 | `__str__` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `line_to_string` ← `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new | +20.00ms | 0.0% → 1.0% |     0ms → 20.0ms |   0 → 2 | `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                  |
|     new | +20.00ms | 0.0% → 1.0% |     0ms → 20.0ms |   0 → 2 | `maybe_empty_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new | +20.00ms | 0.0% → 1.0% |     0ms → 20.0ms |   0 → 2 | `is_split_before_delimiter` (`/venv/lib/python3.11/site-packages/black/brackets.py`) ← `mark` ← `append` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                          |
|     new | +20.00ms | 0.0% → 1.0% |     0ms → 20.0ms |   0 → 2 | `contains_implicit_multiline_string_with_comments` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new | +20.00ms | 0.0% → 1.0% |     0ms → 20.0ms |   0 → 2 | `delimiter_split` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `split_wrapper` ← `run_transformer` ← `transform_line` ← `run_transformer` ← `transform_line` ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new | +20.00ms | 0.0% → 1.0% |     0ms → 20.0ms |   0 → 2 | `update_sibling_maps` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `prev_sibling` ← `whitespace` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `append` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|     new | +20.00ms | 0.0% → 1.0% |     0ms → 20.0ms |   0 → 2 | `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `shift` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|     new | +20.00ms | 0.0% → 1.0% |     0ms → 20.0ms |   0 → 2 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                              |
|     new | +20.00ms | 0.0% → 1.0% |     0ms → 20.0ms |   0 → 2 | `visit_INDENT` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` |
|     new | +20.00ms | 0.0% → 1.0% |     0ms → 20.0ms |   0 → 2 | `maybe_increment_for_loop_variable` (`/venv/lib/python3.11/site-packages/black/brackets.py`) ← `mark` ← `append` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

Common call stack: `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|  Change |    Delta |           % |             Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------: | -------: | ----------: | ---------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -77.8% | -70.00ms | 4.9% → 1.0% |  90.0ms → 20.0ms |   9 → 2 | `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed | -40.00ms | 2.2% → 0.0% |     40.0ms → 0ms |   4 → 0 | `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -40.0% | -40.00ms | 5.4% → 3.0% | 100.0ms → 60.0ms |  10 → 6 | `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`) ← `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed | -30.00ms | 1.6% → 0.0% |     30.0ms → 0ms |   3 → 0 | `is_split_before_delimiter` (`/venv/lib/python3.11/site-packages/black/brackets.py`) ← `mark` ← `append` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed | -30.00ms | 1.6% → 0.0% |     30.0ms → 0ms |   3 → 0 | `normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `generate_comments` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_NUMBER` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -75.0% | -30.00ms | 2.2% → 0.5% |  40.0ms → 10.0ms |   4 → 1 | `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `clone` ← `hug_power_op` (`/venv/lib/python3.11/site-packages/black/trans.py`) ← `_hugging_power_ops_line_to_string` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `transform_line` ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed | -30.00ms | 1.6% → 0.0% |     30.0ms → 0ms |   3 → 0 | `__str__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `__str__` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `line_to_string` ← `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -37.5% | -30.00ms | 4.3% → 2.5% |  80.0ms → 50.0ms |   8 → 5 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                   |
| removed | -30.00ms | 1.6% → 0.0% |     30.0ms → 0ms |   3 → 0 | `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed | -30.00ms | 1.6% → 0.0% |     30.0ms → 0ms |   3 → 0 | `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -28.6% | -20.00ms | 3.8% → 2.5% |  70.0ms → 50.0ms |   7 → 5 | `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`) ← `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed | -20.00ms | 1.1% → 0.0% |     20.0ms → 0ms |   2 → 0 | `<genexpr>` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`) ← `is_fstring_start` ← `generate_tokens` ← `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed | -20.00ms | 1.1% → 0.0% |     20.0ms → 0ms |   2 → 0 | `__init__` (`<string>`) ← `__init__` ← `line` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed | -20.00ms | 1.1% → 0.0% |     20.0ms → 0ms |   2 → 0 | `is_split_before_delimiter` (`/venv/lib/python3.11/site-packages/black/brackets.py`) ← `mark` ← `append` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed | -20.00ms | 1.1% → 0.0% |     20.0ms → 0ms |   2 → 0 | `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`) ← `append` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed | -20.00ms | 1.1% → 0.0% |     20.0ms → 0ms |   2 → 0 | `leaves` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert_one_fmt_off_pair` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed | -20.00ms | 1.1% → 0.0% |     20.0ms → 0ms |   2 → 0 | `normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `generate_comments` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` |
| removed | -20.00ms | 1.1% → 0.0% |     20.0ms → 0ms |   2 → 0 | `visit_simple_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed | -20.00ms | 1.1% → 0.0% |     20.0ms → 0ms |   2 → 0 | `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed | -20.00ms | 1.1% → 0.0% |     20.0ms → 0ms |   2 → 0 | `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

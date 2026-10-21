# Sampling profile diff

Took 2.28s → 1.88s (-400.00ms, -17.5%) over 228 samples → 188 samples (10.0ms per sample).

| Category         | Change |     Delta |             % |              Time |   Samples |
| ---------------- | -----: | --------: | ------------: | ----------------: | --------: |
| Third-party      | -18.9% | -370.00ms | 86.0% → 84.6% |     1.96s → 1.59s | 196 → 159 |
| Standard library |  -5.0% |  -10.00ms |  8.8% → 10.1% | 200.0ms → 190.0ms |   20 → 19 |
| Unknown          | +28.6% |  +20.00ms |   3.1% → 4.8% |   70.0ms → 90.0ms |     7 → 9 |
| Ours             | -80.0% |  -40.00ms |   2.2% → 0.5% |   50.0ms → 10.0ms |     5 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |           % |              Time | Samples | Function                          | Location                                                     |
| ------: | -------: | ----------: | ----------------: | ------: | --------------------------------- | ------------------------------------------------------------ |
| +300.0% | +90.00ms | 1.3% → 6.4% |  30.0ms → 120.0ms |  3 → 12 | `get_features_used`               | `/venv/lib/python3.11/site-packages/black/__init__.py`       |
| +200.0% | +60.00ms | 1.3% → 4.8% |   30.0ms → 90.0ms |   3 → 9 | `pop`                             | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
|     new | +30.00ms | 0.0% → 1.6% |      0ms → 30.0ms |   0 → 3 | `addtoken`                        | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
|     new | +30.00ms | 0.0% → 1.6% |      0ms → 30.0ms |   0 → 3 | `transform_line`                  | `/venv/lib/python3.11/site-packages/black/linegen.py`        |
|     new | +30.00ms | 0.0% → 1.6% |      0ms → 30.0ms |   0 → 3 | `whitespace`                      | `/venv/lib/python3.11/site-packages/black/nodes.py`          |
|  +33.3% | +20.00ms | 2.6% → 4.3% |   60.0ms → 80.0ms |   6 → 8 | `push`                            | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
|     new | +20.00ms | 0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `leaves`                          | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`      |
|     new | +20.00ms | 0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `is_split_before_delimiter`       | `/venv/lib/python3.11/site-packages/black/brackets.py`       |
|     new | +20.00ms | 0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `normalize_string_prefix`         | `/venv/lib/python3.11/site-packages/black/strings.py`        |
| +200.0% | +20.00ms | 0.4% → 1.6% |   10.0ms → 30.0ms |   1 → 3 | `visit_default`                   | `/venv/lib/python3.11/site-packages/black/linegen.py`        |
| +200.0% | +20.00ms | 0.4% → 1.6% |   10.0ms → 30.0ms |   1 → 3 | `is_multiline_string`             | `/venv/lib/python3.11/site-packages/black/nodes.py`          |
|  +28.6% | +20.00ms | 3.1% → 4.8% |   70.0ms → 90.0ms |   7 → 9 | `(anonymous)`                     | `<unknown>`                                                  |
|   +6.3% | +10.00ms | 7.0% → 9.0% | 160.0ms → 170.0ms | 16 → 17 | `parse`                           | `/usr/lib/python3.11/ast.py`                                 |
| +100.0% | +10.00ms | 0.4% → 1.1% |   10.0ms → 20.0ms |   1 → 2 | `shift`                           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `visit_power`                     | `/venv/lib/python3.11/site-packages/black/linegen.py`        |
| +100.0% | +10.00ms | 0.4% → 1.1% |   10.0ms → 20.0ms |   1 → 2 | `prev_sibling`                    | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`      |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py`       |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `get_string_prefix`               | `/venv/lib/python3.11/site-packages/black/strings.py`        |
| +100.0% | +10.00ms | 0.4% → 1.1% |   10.0ms → 20.0ms |   1 → 2 | `is_comment`                      | `/venv/lib/python3.11/site-packages/black/lines.py`          |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `_compile_bytecode`               | `<frozen importlib._bootstrap_external>`                     |

##### Third-party

|  Change |    Delta |           % |             Time | Samples | Function                          | Location                                                     |
| ------: | -------: | ----------: | ---------------: | ------: | --------------------------------- | ------------------------------------------------------------ |
| +300.0% | +90.00ms | 1.3% → 6.4% | 30.0ms → 120.0ms |  3 → 12 | `get_features_used`               | `/venv/lib/python3.11/site-packages/black/__init__.py`       |
| +200.0% | +60.00ms | 1.3% → 4.8% |  30.0ms → 90.0ms |   3 → 9 | `pop`                             | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
|     new | +30.00ms | 0.0% → 1.6% |     0ms → 30.0ms |   0 → 3 | `addtoken`                        | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
|     new | +30.00ms | 0.0% → 1.6% |     0ms → 30.0ms |   0 → 3 | `transform_line`                  | `/venv/lib/python3.11/site-packages/black/linegen.py`        |
|     new | +30.00ms | 0.0% → 1.6% |     0ms → 30.0ms |   0 → 3 | `whitespace`                      | `/venv/lib/python3.11/site-packages/black/nodes.py`          |
|  +33.3% | +20.00ms | 2.6% → 4.3% |  60.0ms → 80.0ms |   6 → 8 | `push`                            | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
|     new | +20.00ms | 0.0% → 1.1% |     0ms → 20.0ms |   0 → 2 | `leaves`                          | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`      |
|     new | +20.00ms | 0.0% → 1.1% |     0ms → 20.0ms |   0 → 2 | `is_split_before_delimiter`       | `/venv/lib/python3.11/site-packages/black/brackets.py`       |
|     new | +20.00ms | 0.0% → 1.1% |     0ms → 20.0ms |   0 → 2 | `normalize_string_prefix`         | `/venv/lib/python3.11/site-packages/black/strings.py`        |
| +200.0% | +20.00ms | 0.4% → 1.6% |  10.0ms → 30.0ms |   1 → 3 | `visit_default`                   | `/venv/lib/python3.11/site-packages/black/linegen.py`        |
| +200.0% | +20.00ms | 0.4% → 1.6% |  10.0ms → 30.0ms |   1 → 3 | `is_multiline_string`             | `/venv/lib/python3.11/site-packages/black/nodes.py`          |
| +100.0% | +10.00ms | 0.4% → 1.1% |  10.0ms → 20.0ms |   1 → 2 | `shift`                           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
|     new | +10.00ms | 0.0% → 0.5% |     0ms → 10.0ms |   0 → 1 | `visit_power`                     | `/venv/lib/python3.11/site-packages/black/linegen.py`        |
| +100.0% | +10.00ms | 0.4% → 1.1% |  10.0ms → 20.0ms |   1 → 2 | `prev_sibling`                    | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`      |
|     new | +10.00ms | 0.0% → 0.5% |     0ms → 10.0ms |   0 → 1 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py`       |
|     new | +10.00ms | 0.0% → 0.5% |     0ms → 10.0ms |   0 → 1 | `get_string_prefix`               | `/venv/lib/python3.11/site-packages/black/strings.py`        |
| +100.0% | +10.00ms | 0.4% → 1.1% |  10.0ms → 20.0ms |   1 → 2 | `is_comment`                      | `/venv/lib/python3.11/site-packages/black/lines.py`          |
|     new | +10.00ms | 0.0% → 0.5% |     0ms → 10.0ms |   0 → 1 | `__str__`                         | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`      |
|     new | +10.00ms | 0.0% → 0.5% |     0ms → 10.0ms |   0 → 1 | `is_def`                          | `/venv/lib/python3.11/site-packages/black/lines.py`          |
|     new | +10.00ms | 0.0% → 0.5% |     0ms → 10.0ms |   0 → 1 | `_can_add_trailing_comma`         | `/venv/lib/python3.11/site-packages/black/linegen.py`        |

##### Standard library

| Change |    Delta |           % |              Time | Samples | Function            | Location                                 |
| -----: | -------: | ----------: | ----------------: | ------: | ------------------- | ---------------------------------------- |
|  +6.3% | +10.00ms | 7.0% → 9.0% | 160.0ms → 170.0ms | 16 → 17 | `parse`             | `/usr/lib/python3.11/ast.py`             |
|    new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |
|    new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `__new__`           | `<frozen abc>`                           |

##### Unknown

| Change |    Delta |           % |            Time | Samples | Function      | Location    |
| -----: | -------: | ----------: | --------------: | ------: | ------------- | ----------- |
| +28.6% | +20.00ms | 3.1% → 4.8% | 70.0ms → 90.0ms |   7 → 9 | `(anonymous)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |              Time | Samples | Function                                           | Location                                                      |
| ------: | -------: | ------------: | ----------------: | ------: | -------------------------------------------------- | ------------------------------------------------------------- |
|  -87.5% | -70.00ms |   3.5% → 0.5% |   80.0ms → 10.0ms |   8 → 1 | `__init__`                                         | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |
|  -77.8% | -70.00ms |   3.9% → 1.1% |   90.0ms → 20.0ms |   9 → 2 | `__new__`                                          | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |
|  -35.0% | -70.00ms |   8.8% → 6.9% | 200.0ms → 130.0ms | 20 → 13 | `generate_comments`                                | `/venv/lib/python3.11/site-packages/black/comments.py`        |
|  -66.7% | -60.00ms |   3.9% → 1.6% |   90.0ms → 30.0ms |   9 → 3 | `parse_tokens`                                     | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
|  -80.0% | -40.00ms |   2.2% → 0.5% |   50.0ms → 10.0ms |   5 → 1 | `__init__`                                         | `<string>`                                                    |
|  -50.0% | -40.00ms |   3.5% → 2.1% |   80.0ms → 40.0ms |   8 → 4 | `_stringify_ast`                                   | `/venv/lib/python3.11/site-packages/black/parsing.py`         |
|  -44.4% | -40.00ms |   3.9% → 2.7% |   90.0ms → 50.0ms |   9 → 5 | `mark`                                             | `/venv/lib/python3.11/site-packages/black/brackets.py`        |
| removed | -30.00ms |   1.3% → 0.0% |      30.0ms → 0ms |   3 → 0 | `maybe_empty_lines`                                | `/venv/lib/python3.11/site-packages/black/lines.py`           |
| removed | -30.00ms |   1.3% → 0.0% |      30.0ms → 0ms |   3 → 0 | `__init__`                                         | `/venv/lib/python3.11/site-packages/black/trans.py`           |
|   -6.5% | -20.00ms | 13.6% → 15.4% | 310.0ms → 290.0ms | 31 → 29 | `_addtoken`                                        | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`  |
|  -50.0% | -20.00ms |   1.8% → 1.1% |   40.0ms → 20.0ms |   4 → 2 | `pre_order`                                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |
|  -50.0% | -20.00ms |   1.8% → 1.1% |   40.0ms → 20.0ms |   4 → 2 | `visit`                                            | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
|  -50.0% | -20.00ms |   1.8% → 1.1% |   40.0ms → 20.0ms |   4 → 2 | `visit_default`                                    | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| removed | -20.00ms |   0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `normalize_trailing_prefix`                        | `/venv/lib/python3.11/site-packages/black/comments.py`        |
| removed | -20.00ms |   0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `is_docstring`                                     | `/venv/lib/python3.11/site-packages/black/lines.py`           |
| removed | -20.00ms |   0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `normalize_string_quotes`                          | `/venv/lib/python3.11/site-packages/black/strings.py`         |
| removed | -20.00ms |   0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `is_parent_function_or_class`                      | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| removed | -20.00ms |   0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `contains_implicit_multiline_string_with_comments` | `/venv/lib/python3.11/site-packages/black/lines.py`           |
| removed | -20.00ms |   0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `_partially_consume_prefix`                        | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| removed | -20.00ms |   0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `assert_is_leaf_string`                            | `/venv/lib/python3.11/site-packages/black/strings.py`         |

##### Third-party

|  Change |    Delta |             % |              Time | Samples | Function                                           | Location                                                      |
| ------: | -------: | ------------: | ----------------: | ------: | -------------------------------------------------- | ------------------------------------------------------------- |
|  -87.5% | -70.00ms |   3.5% → 0.5% |   80.0ms → 10.0ms |   8 → 1 | `__init__`                                         | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |
|  -77.8% | -70.00ms |   3.9% → 1.1% |   90.0ms → 20.0ms |   9 → 2 | `__new__`                                          | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |
|  -35.0% | -70.00ms |   8.8% → 6.9% | 200.0ms → 130.0ms | 20 → 13 | `generate_comments`                                | `/venv/lib/python3.11/site-packages/black/comments.py`        |
|  -66.7% | -60.00ms |   3.9% → 1.6% |   90.0ms → 30.0ms |   9 → 3 | `parse_tokens`                                     | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
|  -50.0% | -40.00ms |   3.5% → 2.1% |   80.0ms → 40.0ms |   8 → 4 | `_stringify_ast`                                   | `/venv/lib/python3.11/site-packages/black/parsing.py`         |
|  -44.4% | -40.00ms |   3.9% → 2.7% |   90.0ms → 50.0ms |   9 → 5 | `mark`                                             | `/venv/lib/python3.11/site-packages/black/brackets.py`        |
| removed | -30.00ms |   1.3% → 0.0% |      30.0ms → 0ms |   3 → 0 | `maybe_empty_lines`                                | `/venv/lib/python3.11/site-packages/black/lines.py`           |
| removed | -30.00ms |   1.3% → 0.0% |      30.0ms → 0ms |   3 → 0 | `__init__`                                         | `/venv/lib/python3.11/site-packages/black/trans.py`           |
|   -6.5% | -20.00ms | 13.6% → 15.4% | 310.0ms → 290.0ms | 31 → 29 | `_addtoken`                                        | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`  |
|  -50.0% | -20.00ms |   1.8% → 1.1% |   40.0ms → 20.0ms |   4 → 2 | `pre_order`                                        | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |
|  -50.0% | -20.00ms |   1.8% → 1.1% |   40.0ms → 20.0ms |   4 → 2 | `visit`                                            | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
|  -50.0% | -20.00ms |   1.8% → 1.1% |   40.0ms → 20.0ms |   4 → 2 | `visit_default`                                    | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| removed | -20.00ms |   0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `normalize_trailing_prefix`                        | `/venv/lib/python3.11/site-packages/black/comments.py`        |
| removed | -20.00ms |   0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `is_docstring`                                     | `/venv/lib/python3.11/site-packages/black/lines.py`           |
| removed | -20.00ms |   0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `normalize_string_quotes`                          | `/venv/lib/python3.11/site-packages/black/strings.py`         |
| removed | -20.00ms |   0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `is_parent_function_or_class`                      | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| removed | -20.00ms |   0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `contains_implicit_multiline_string_with_comments` | `/venv/lib/python3.11/site-packages/black/lines.py`           |
| removed | -20.00ms |   0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `_partially_consume_prefix`                        | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| removed | -20.00ms |   0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `assert_is_leaf_string`                            | `/venv/lib/python3.11/site-packages/black/strings.py`         |
|  -66.7% | -20.00ms |   1.3% → 0.5% |   30.0ms → 10.0ms |   3 → 1 | `convert`                                          | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |

##### Standard library

|  Change |    Delta |           % |         Time | Samples | Function                    | Location                                  |
| ------: | -------: | ----------: | -----------: | ------: | --------------------------- | ----------------------------------------- |
| removed | -10.00ms | 0.4% → 0.0% | 10.0ms → 0ms |   1 → 0 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`           |
| removed | -10.00ms | 0.4% → 0.0% | 10.0ms → 0ms |   1 → 0 | `isEnabledFor`              | `/usr/lib/python3.11/logging/__init__.py` |
| removed | -10.00ms | 0.4% → 0.0% | 10.0ms → 0ms |   1 → 0 | `__eq__`                    | `/usr/lib/python3.11/typing.py`           |
| removed | -10.00ms | 0.4% → 0.0% | 10.0ms → 0ms |   1 → 0 | `_subx`                     | `/usr/lib/python3.11/re/__init__.py`      |

##### Ours

| Change |    Delta |           % |            Time | Samples | Function   | Location   |
| -----: | -------: | ----------: | --------------: | ------: | ---------- | ---------- |
| -80.0% | -40.00ms | 2.2% → 0.5% | 50.0ms → 10.0ms |   5 → 1 | `__init__` | `<string>` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|  Change |     Delta |             % |          Time | Samples | Location                                                    |
| ------: | --------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
|     new | +120.00ms | 0.0% → 100.0% | 0ms → 120.0ms |  0 → 12 | `/venv/lib/python3.11/site-packages/black/__init__.py:1286` |
| removed |  -30.00ms | 100.0% → 0.0% |  30.0ms → 0ms |   3 → 0 | `/venv/lib/python3.11/site-packages/black/__init__.py:1307` |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|  Change |    Delta |      % |            Time | Samples | Location                                                               |
| ------: | -------: | -----: | --------------: | ------: | ---------------------------------------------------------------------- |
| +200.0% | +60.00ms | 100.0% | 30.0ms → 90.0ms |   3 → 9 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:398 → 386` |

##### `addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                         |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------------------- |
|    new | +30.00ms | 0.0% → 100.0% | 0ms → 30.0ms |   0 → 3 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:230` |

##### `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                  |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------- |
|    new | +30.00ms | 0.0% → 100.0% | 0ms → 30.0ms |   0 → 3 | `/venv/lib/python3.11/site-packages/black/linegen.py:601` |

##### `whitespace` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------- |
|    new | +30.00ms | 0.0% → 100.0% | 0ms → 30.0ms |   0 → 3 | `/venv/lib/python3.11/site-packages/black/nodes.py:183` |

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

| Change |    Delta |      % |            Time | Samples | Location                                                               |
| -----: | -------: | -----: | --------------: | ------: | ---------------------------------------------------------------------- |
| +33.3% | +20.00ms | 100.0% | 60.0ms → 80.0ms |   6 → 8 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:386 → 374` |

##### `leaves` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                    |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:210` |

##### `is_split_before_delimiter` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                   |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/black/brackets.py:232` |

##### `normalize_string_prefix` (`/venv/lib/python3.11/site-packages/black/strings.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                  |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/black/strings.py:143` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |    Delta |      % |            Time | Samples | Location                                                  |
| ------: | -------: | -----: | --------------: | ------: | --------------------------------------------------------- |
| +200.0% | +20.00ms | 100.0% | 10.0ms → 30.0ms |   1 → 3 | `/venv/lib/python3.11/site-packages/black/linegen.py:134` |

##### `is_multiline_string` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------- |
|     new | +30.00ms | 0.0% → 100.0% | 0ms → 30.0ms |   0 → 3 | `/venv/lib/python3.11/site-packages/black/nodes.py:773` |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/black/nodes.py:778` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

| Change |    Delta |      % |              Time | Samples | Location                        |
| -----: | -------: | -----: | ----------------: | ------: | ------------------------------- |
|  +6.3% | +10.00ms | 100.0% | 160.0ms → 170.0ms | 16 → 17 | `/usr/lib/python3.11/ast.py:33` |

##### `shift` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|  Change |    Delta |      % |            Time | Samples | Location                                                               |
| ------: | -------: | -----: | --------------: | ------: | ---------------------------------------------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:373 → 361` |

##### `visit_power` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                  |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/black/linegen.py:341` |

##### `prev_sibling` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |      % |            Time | Samples | Location                                                          |
| ------: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:207 → 196` |

##### `check_stability_and_equivalence` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                    |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/black/__init__.py:1042` |

##### `get_string_prefix` (`/venv/lib/python3.11/site-packages/black/strings.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                 |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/black/strings.py:89` |

##### `is_comment` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |      % |            Time | Samples | Location                                                      |
| ------: | -------: | -----: | --------------: | ------: | ------------------------------------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `/venv/lib/python3.11/site-packages/black/lines.py:124 → 113` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

| Change |    Delta |             % |         Time | Samples | Location                                     |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `<frozen importlib._bootstrap_external>:727` |

##### `__str__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                    |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:429` |

##### `is_def` (`/venv/lib/python3.11/site-packages/black/lines.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/black/lines.py:149` |

##### `_can_add_trailing_comma` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                   |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/black/linegen.py:1196` |

##### `__new__` (`<frozen abc>`)

| Change |    Delta |             % |         Time | Samples | Location           |
| -----: | -------: | ------------: | -----------: | ------: | ------------------ |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `<frozen abc>:105` |

##### `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |              % |            Time | Samples | Location                                                          |
| ------: | -------: | -------------: | --------------: | ------: | ----------------------------------------------------------------- |
|  -83.3% | -50.00ms | 75.0% → 100.0% | 60.0ms → 10.0ms |   6 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:400 → 389` |
| removed | -20.00ms |   25.0% → 0.0% |    20.0ms → 0ms |   2 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:248`       |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |      % |            Time | Samples | Location                                                        |
| -----: | -------: | -----: | --------------: | ------: | --------------------------------------------------------------- |
| -77.8% | -70.00ms | 100.0% | 90.0ms → 20.0ms |   9 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:81 → 70` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

| Change |    Delta |      % |              Time | Samples | Location                                                  |
| -----: | -------: | -----: | ----------------: | ------: | --------------------------------------------------------- |
| -35.0% | -70.00ms | 100.0% | 200.0ms → 130.0ms | 20 → 13 | `/venv/lib/python3.11/site-packages/black/comments.py:52` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

| Change |    Delta |      % |            Time | Samples | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------------- |
| -66.7% | -60.00ms | 100.0% | 90.0ms → 30.0ms |   9 → 3 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py:114` |

##### `__init__` (`<string>`)

| Change |    Delta |      % |            Time | Samples | Location     |
| -----: | -------: | -----: | --------------: | ------: | ------------ |
| -80.0% | -40.00ms | 100.0% | 50.0ms → 10.0ms |   5 → 1 | `<string>:2` |

##### `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                  |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------- |
| removed | -80.00ms | 100.0% → 0.0% | 80.0ms → 0ms |   8 → 0 | `/venv/lib/python3.11/site-packages/black/parsing.py:174` |
|     new | +40.00ms | 0.0% → 100.0% | 0ms → 40.0ms |   0 → 4 | `/venv/lib/python3.11/site-packages/black/parsing.py:182` |

##### `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

| Change |    Delta |      % |            Time | Samples | Location                                                  |
| -----: | -------: | -----: | --------------: | ------: | --------------------------------------------------------- |
| -44.4% | -40.00ms | 100.0% | 90.0ms → 50.0ms |   9 → 5 | `/venv/lib/python3.11/site-packages/black/brackets.py:70` |

##### `maybe_empty_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------- |
| removed | -30.00ms | 100.0% → 0.0% | 30.0ms → 0ms |   3 → 0 | `/venv/lib/python3.11/site-packages/black/lines.py:560` |

##### `__init__` (`/venv/lib/python3.11/site-packages/black/trans.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------- |
| removed | -30.00ms | 100.0% → 0.0% | 30.0ms → 0ms |   3 → 0 | `/venv/lib/python3.11/site-packages/black/trans.py:282` |

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

| Change |    Delta |      % |              Time | Samples | Location                                                               |
| -----: | -------: | -----: | ----------------: | ------: | ---------------------------------------------------------------------- |
|  -6.5% | -20.00ms | 100.0% | 310.0ms → 290.0ms | 31 → 29 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:290 → 278` |

##### `pre_order` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |      % |            Time | Samples | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------------- |
| -50.0% | -20.00ms | 100.0% | 40.0ms → 20.0ms |   4 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:314 → 303` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------- |
| removed | -40.00ms | 100.0% → 0.0% | 40.0ms → 0ms |   4 → 0 | `/venv/lib/python3.11/site-packages/black/nodes.py:163` |
|     new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/black/nodes.py:152` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------- |
| removed | -40.00ms | 100.0% → 0.0% | 40.0ms → 0ms |   4 → 0 | `/venv/lib/python3.11/site-packages/black/nodes.py:187` |
|     new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/black/nodes.py:176` |

##### `normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                   |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `/venv/lib/python3.11/site-packages/black/comments.py:127` |

##### `is_docstring` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `/venv/lib/python3.11/site-packages/black/lines.py:214` |

##### `normalize_string_quotes` (`/venv/lib/python3.11/site-packages/black/strings.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                  |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `/venv/lib/python3.11/site-packages/black/strings.py:169` |

##### `is_parent_function_or_class` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `/venv/lib/python3.11/site-packages/black/nodes.py:790` |

##### `contains_implicit_multiline_string_with_comments` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `/venv/lib/python3.11/site-packages/black/lines.py:261` |

##### `_partially_consume_prefix` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                          |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py:205` |

##### `assert_is_leaf_string` (`/venv/lib/python3.11/site-packages/black/strings.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                  |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `/venv/lib/python3.11/site-packages/black/strings.py:108` |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |      % |            Time | Samples | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------------- |
| -66.7% | -20.00ms | 100.0% | 30.0ms → 10.0ms |   3 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:486 → 475` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|  Change |    Delta |             % |         Time | Samples | Location                            |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `<frozen importlib._bootstrap>:233` |

##### `isEnabledFor` (`/usr/lib/python3.11/logging/__init__.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                       |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/usr/lib/python3.11/logging/__init__.py:1734` |

##### `__eq__` (`/usr/lib/python3.11/typing.py`)

|  Change |    Delta |             % |         Time | Samples | Location                             |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------ |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/usr/lib/python3.11/typing.py:1345` |

##### `_subx` (`/usr/lib/python3.11/re/__init__.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                 |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/usr/lib/python3.11/re/__init__.py:315` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|  Change |    Delta |      % |             Time | Samples | Caller                   | Location                                               |
| ------: | -------: | -----: | ---------------: | ------: | ------------------------ | ------------------------------------------------------ |
| +300.0% | +90.00ms | 100.0% | 30.0ms → 120.0ms |  3 → 12 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|  Change |    Delta |      % |            Time | Samples | Caller      | Location                                                     |
| ------: | -------: | -----: | --------------: | ------: | ----------- | ------------------------------------------------------------ |
| +200.0% | +60.00ms | 100.0% | 30.0ms → 90.0ms |   3 → 9 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

| Change |    Delta |             % |         Time | Samples | Caller         | Location                                                      |
| -----: | -------: | ------------: | -----------: | ------: | -------------- | ------------------------------------------------------------- |
|    new | +30.00ms | 0.0% → 100.0% | 0ms → 30.0ms |   0 → 3 | `parse_tokens` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |             % |         Time | Samples | Caller             | Location                                               |
| -----: | -------: | ------------: | -----------: | ------: | ------------------ | ------------------------------------------------------ |
|    new | +30.00ms | 0.0% → 100.0% | 0ms → 30.0ms |   0 → 3 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `whitespace` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

| Change |    Delta |             % |         Time | Samples | Caller   | Location                                            |
| -----: | -------: | ------------: | -----------: | ------: | -------- | --------------------------------------------------- |
|    new | +30.00ms | 0.0% → 100.0% | 0ms → 30.0ms |   0 → 3 | `append` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

| Change |    Delta |      % |            Time | Samples | Caller      | Location                                                     |
| -----: | -------: | -----: | --------------: | ------: | ----------- | ------------------------------------------------------------ |
| +33.3% | +20.00ms | 100.0% | 60.0ms → 80.0ms |   6 → 8 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `leaves` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |             % |         Time | Samples | Caller   | Location                                                |
| -----: | -------: | ------------: | -----------: | ------: | -------- | ------------------------------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `leaves` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `is_split_before_delimiter` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

| Change |    Delta |             % |         Time | Samples | Caller | Location                                               |
| -----: | -------: | ------------: | -----------: | ------: | ------ | ------------------------------------------------------ |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `mark` | `/venv/lib/python3.11/site-packages/black/brackets.py` |

##### `normalize_string_prefix` (`/venv/lib/python3.11/site-packages/black/strings.py`)

| Change |    Delta |             % |         Time | Samples | Caller         | Location                                              |
| -----: | -------: | ------------: | -----------: | ------: | -------------- | ----------------------------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `visit_STRING` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |    Delta |      % |            Time | Samples | Caller  | Location                                            |
| ------: | -------: | -----: | --------------: | ------: | ------- | --------------------------------------------------- |
| +200.0% | +20.00ms | 100.0% | 10.0ms → 30.0ms |   1 → 3 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `is_multiline_string` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|  Change |    Delta |             % |         Time | Samples | Caller                       | Location                                              |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------- | ----------------------------------------------------- |
|     new | +30.00ms | 0.0% → 100.0% | 0ms → 30.0ms |   0 → 3 | `normalize_invisible_parens` | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `<genexpr>`                  | `/venv/lib/python3.11/site-packages/black/lines.py`   |

##### `parse` (`/usr/lib/python3.11/ast.py`)

| Change |    Delta |      % |              Time | Samples | Caller                  | Location                                              |
| -----: | -------: | -----: | ----------------: | ------: | ----------------------- | ----------------------------------------------------- |
|  +6.3% | +10.00ms | 100.0% | 160.0ms → 170.0ms | 16 → 17 | `_parse_single_version` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `shift` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

|  Change |    Delta |      % |            Time | Samples | Caller      | Location                                                     |
| ------: | -------: | -----: | --------------: | ------: | ----------- | ------------------------------------------------------------ |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `visit_power` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |             % |         Time | Samples | Caller  | Location                                            |
| -----: | -------: | ------------: | -----------: | ------: | ------- | --------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `prev_sibling` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |             % |         Time | Samples | Caller           | Location                                            |
| ------: | -------: | ------------: | -----------: | ------: | ---------------- | --------------------------------------------------- |
|     new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `whitespace`     | `/venv/lib/python3.11/site-packages/black/nodes.py` |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `preceding_leaf` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `check_stability_and_equivalence` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |    Delta |             % |         Time | Samples | Caller                 | Location                                               |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------- | ------------------------------------------------------ |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `get_string_prefix` (`/venv/lib/python3.11/site-packages/black/strings.py`)

| Change |    Delta |             % |         Time | Samples | Caller         | Location                                            |
| -----: | -------: | ------------: | -----------: | ------: | -------------- | --------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `is_docstring` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `is_comment` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |      % |            Time | Samples | Caller              | Location                                            |
| ------: | -------: | -----: | --------------: | ------: | ------------------- | --------------------------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `maybe_empty_lines` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

| Change |    Delta |             % |         Time | Samples | Caller     | Location                                 |
| -----: | -------: | ------------: | -----------: | ------: | ---------- | ---------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `get_code` | `<frozen importlib._bootstrap_external>` |

##### `__str__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location                                            |
| -----: | -------: | ------------: | -----------: | ------: | --------- | --------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `__str__` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `is_def` (`/venv/lib/python3.11/site-packages/black/lines.py`)

| Change |    Delta |             % |         Time | Samples | Caller               | Location                                            |
| -----: | -------: | ------------: | -----------: | ------: | -------------------- | --------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `_maybe_empty_lines` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `_can_add_trailing_comma` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |             % |         Time | Samples | Caller            | Location                                              |
| -----: | -------: | ------------: | -----------: | ------: | ----------------- | ----------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `delimiter_split` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `__new__` (`<frozen abc>`)

| Change |    Delta |             % |         Time | Samples | Caller     | Location                           |
| -----: | -------: | ------------: | -----------: | ------: | ---------- | ---------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `<module>` | `/usr/lib/python3.11/selectors.py` |

##### `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |              % |            Time | Samples | Caller                | Location                                                |
| ------: | -------: | -------------: | --------------: | ------: | --------------------- | ------------------------------------------------------- |
|  -85.7% | -60.00ms | 87.5% → 100.0% | 70.0ms → 10.0ms |   7 → 1 | `convert`             | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
| removed | -10.00ms |   12.5% → 0.0% |    10.0ms → 0ms |   1 → 0 | `wrap_in_parentheses` | `/venv/lib/python3.11/site-packages/black/nodes.py`     |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |      % |            Time | Samples | Caller    | Location                                                |
| -----: | -------: | -----: | --------------: | ------: | --------- | ------------------------------------------------------- |
| -77.8% | -70.00ms | 100.0% | 90.0ms → 20.0ms |   9 → 2 | `convert` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`)

| Change |    Delta |      % |              Time | Samples | Caller          | Location                                              |
| -----: | -------: | -----: | ----------------: | ------: | --------------- | ----------------------------------------------------- |
| -35.0% | -70.00ms | 100.0% | 200.0ms → 130.0ms | 20 → 13 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

| Change |    Delta |      % |            Time | Samples | Caller         | Location                                                      |
| -----: | -------: | -----: | --------------: | ------: | -------------- | ------------------------------------------------------------- |
| -66.7% | -60.00ms | 100.0% | 90.0ms → 30.0ms |   9 → 3 | `parse_string` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `__init__` (`<string>`)

|  Change |    Delta |            % |         Time | Samples | Caller     | Location   |
| ------: | -------: | -----------: | -----------: | ------: | ---------- | ---------- |
| removed | -40.00ms | 80.0% → 0.0% | 40.0ms → 0ms |   4 → 0 | `__init__` | `<string>` |

##### `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

| Change |    Delta |      % |            Time | Samples | Caller                           | Location                                              |
| -----: | -------: | -----: | --------------: | ------: | -------------------------------- | ----------------------------------------------------- |
| -50.0% | -40.00ms | 100.0% | 80.0ms → 40.0ms |   8 → 4 | `_stringify_ast_with_new_parent` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

| Change |    Delta |      % |            Time | Samples | Caller   | Location                                            |
| -----: | -------: | -----: | --------------: | ------: | -------- | --------------------------------------------------- |
| -44.4% | -40.00ms | 100.0% | 90.0ms → 50.0ms |   9 → 5 | `append` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `maybe_empty_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |             % |         Time | Samples | Caller             | Location                                               |
| ------: | -------: | ------------: | -----------: | ------: | ------------------ | ------------------------------------------------------ |
| removed | -30.00ms | 100.0% → 0.0% | 30.0ms → 0ms |   3 → 0 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `__init__` (`/venv/lib/python3.11/site-packages/black/trans.py`)

|  Change |    Delta |             % |         Time | Samples | Caller           | Location                                              |
| ------: | -------: | ------------: | -----------: | ------: | ---------------- | ----------------------------------------------------- |
| removed | -30.00ms | 100.0% → 0.0% | 30.0ms → 0ms |   3 → 0 | `transform_line` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

| Change |    Delta |      % |              Time | Samples | Caller     | Location                                                     |
| -----: | -------: | -----: | ----------------: | ------: | ---------- | ------------------------------------------------------------ |
|  -6.5% | -20.00ms | 100.0% | 310.0ms → 290.0ms | 31 → 29 | `addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `pre_order` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |      % |            Time | Samples | Caller      | Location                                                |
| -----: | -------: | -----: | --------------: | ------: | ----------- | ------------------------------------------------------- |
| -50.0% | -20.00ms | 100.0% | 40.0ms → 20.0ms |   4 → 2 | `pre_order` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

| Change |    Delta |      % |            Time | Samples | Caller          | Location                                            |
| -----: | -------: | -----: | --------------: | ------: | --------------- | --------------------------------------------------- |
| -50.0% | -20.00ms | 100.0% | 40.0ms → 20.0ms |   4 → 2 | `visit_default` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

| Change |    Delta |      % |            Time | Samples | Caller          | Location                                              |
| -----: | -------: | -----: | --------------: | ------: | --------------- | ----------------------------------------------------- |
| -50.0% | -20.00ms | 100.0% | 40.0ms → 20.0ms |   4 → 2 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/black/comments.py`)

|  Change |    Delta |             % |         Time | Samples | Caller              | Location                                               |
| ------: | -------: | ------------: | -----------: | ------: | ------------------- | ------------------------------------------------------ |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py` |

##### `is_docstring` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |             % |         Time | Samples | Caller               | Location                                            |
| ------: | -------: | ------------: | -----------: | ------: | -------------------- | --------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `_maybe_empty_lines` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `normalize_string_quotes` (`/venv/lib/python3.11/site-packages/black/strings.py`)

|  Change |    Delta |             % |         Time | Samples | Caller         | Location                                              |
| ------: | -------: | ------------: | -----------: | ------: | -------------- | ----------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `visit_STRING` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `is_parent_function_or_class` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|  Change |    Delta |             % |         Time | Samples | Caller          | Location                                            |
| ------: | -------: | ------------: | -----------: | ------: | --------------- | --------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `is_stub_suite` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `contains_implicit_multiline_string_with_comments` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |             % |         Time | Samples | Caller           | Location                                              |
| ------: | -------: | ------------: | -----------: | ------: | ---------------- | ----------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `transform_line` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `_partially_consume_prefix` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|  Change |    Delta |             % |         Time | Samples | Caller         | Location                                                      |
| ------: | -------: | ------------: | -----------: | ------: | -------------- | ------------------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `parse_tokens` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `assert_is_leaf_string` (`/venv/lib/python3.11/site-packages/black/strings.py`)

|  Change |    Delta |             % |         Time | Samples | Caller              | Location                                              |
| ------: | -------: | ------------: | -----------: | ------: | ------------------- | ----------------------------------------------------- |
| removed | -20.00ms | 100.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `get_string_prefix` | `/venv/lib/python3.11/site-packages/black/strings.py` |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |            % |         Time | Samples | Caller | Location                                                     |
| ------: | -------: | -----------: | -----------: | ------: | ------ | ------------------------------------------------------------ |
| removed | -20.00ms | 66.7% → 0.0% | 20.0ms → 0ms |   2 → 0 | `pop`  | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|  Change |    Delta |             % |         Time | Samples | Caller        | Location                                 |
| ------: | -------: | ------------: | -----------: | ------: | ------------- | ---------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `exec_module` | `<frozen importlib._bootstrap_external>` |

##### `isEnabledFor` (`/usr/lib/python3.11/logging/__init__.py`)

|  Change |    Delta |             % |         Time | Samples | Caller  | Location                                  |
| ------: | -------: | ------------: | -----------: | ------: | ------- | ----------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `debug` | `/usr/lib/python3.11/logging/__init__.py` |

##### `__eq__` (`/usr/lib/python3.11/typing.py`)

|  Change |    Delta |             % |         Time | Samples | Caller        | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | ------------- | ------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `_type_check` | `/usr/lib/python3.11/typing.py` |

##### `_subx` (`/usr/lib/python3.11/re/__init__.py`)

|  Change |    Delta |             % |         Time | Samples | Caller      | Location                                              |
| ------: | -------: | ------------: | -----------: | ------: | ----------- | ----------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `sub_twice` | `/venv/lib/python3.11/site-packages/black/strings.py` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |              Time | Samples | Function                     | Location                                                     |
| ------: | -------: | ------------: | ----------------: | ------: | ---------------------------- | ------------------------------------------------------------ |
|  +75.0% | +60.00ms |   3.5% → 7.4% |  80.0ms → 140.0ms |  8 → 14 | `get_features_used`          | `/venv/lib/python3.11/site-packages/black/__init__.py`       |
|  +75.0% | +60.00ms |   3.5% → 7.4% |  80.0ms → 140.0ms |  8 → 14 | `detect_target_versions`     | `/venv/lib/python3.11/site-packages/black/__init__.py`       |
| +500.0% | +50.00ms |   0.4% → 3.2% |   10.0ms → 60.0ms |   1 → 6 | `whitespace`                 | `/venv/lib/python3.11/site-packages/black/nodes.py`          |
|   +3.5% | +20.00ms | 25.0% → 31.4% | 570.0ms → 590.0ms | 57 → 59 | `assert_stable`              | `/venv/lib/python3.11/site-packages/black/__init__.py`       |
|  +33.3% | +20.00ms |   2.6% → 4.3% |   60.0ms → 80.0ms |   6 → 8 | `push`                       | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
|  +66.7% | +20.00ms |   1.3% → 2.7% |   30.0ms → 50.0ms |   3 → 5 | `normalize_invisible_parens` | `/venv/lib/python3.11/site-packages/black/linegen.py`        |
|     new | +20.00ms |   0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `<module>`                   | `/venv/lib/python3.11/site-packages/packaging/specifiers.py` |
|     new | +20.00ms |   0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `<module>`                   | `/venv/lib/python3.11/site-packages/black/files.py`          |
|     new | +20.00ms |   0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `leaves`                     | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`      |
|     new | +20.00ms |   0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `is_split_before_delimiter`  | `/venv/lib/python3.11/site-packages/black/brackets.py`       |
|     new | +20.00ms |   0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `normalize_string_prefix`    | `/venv/lib/python3.11/site-packages/black/strings.py`        |
| +200.0% | +20.00ms |   0.4% → 1.6% |   10.0ms → 30.0ms |   1 → 3 | `is_multiline_string`        | `/venv/lib/python3.11/site-packages/black/nodes.py`          |
|  +28.6% | +20.00ms |   3.1% → 4.8% |   70.0ms → 90.0ms |   7 → 9 | `(anonymous)`                | `<unknown>`                                                  |
|   +6.7% | +10.00ms |   6.6% → 8.5% | 150.0ms → 160.0ms | 15 → 16 | `append`                     | `/venv/lib/python3.11/site-packages/black/lines.py`          |
|   +6.3% | +10.00ms |   7.0% → 9.0% | 160.0ms → 170.0ms | 16 → 17 | `parse`                      | `/usr/lib/python3.11/ast.py`                                 |
|   +6.3% | +10.00ms |   7.0% → 9.0% | 160.0ms → 170.0ms | 16 → 17 | `_parse_single_version`      | `/venv/lib/python3.11/site-packages/black/parsing.py`        |
|   +6.3% | +10.00ms |   7.0% → 9.0% | 160.0ms → 170.0ms | 16 → 17 | `parse_ast`                  | `/venv/lib/python3.11/site-packages/black/parsing.py`        |
| +100.0% | +10.00ms |   0.4% → 1.1% |   10.0ms → 20.0ms |   1 → 2 | `_call_with_frames_removed`  | `<frozen importlib._bootstrap>`                              |
| +100.0% | +10.00ms |   0.4% → 1.1% |   10.0ms → 20.0ms |   1 → 2 | `exec_module`                | `<frozen importlib._bootstrap_external>`                     |
| +100.0% | +10.00ms |   0.4% → 1.1% |   10.0ms → 20.0ms |   1 → 2 | `_load_unlocked`             | `<frozen importlib._bootstrap>`                              |

##### Third-party

|  Change |    Delta |             % |              Time | Samples | Function                     | Location                                                     |
| ------: | -------: | ------------: | ----------------: | ------: | ---------------------------- | ------------------------------------------------------------ |
|  +75.0% | +60.00ms |   3.5% → 7.4% |  80.0ms → 140.0ms |  8 → 14 | `get_features_used`          | `/venv/lib/python3.11/site-packages/black/__init__.py`       |
|  +75.0% | +60.00ms |   3.5% → 7.4% |  80.0ms → 140.0ms |  8 → 14 | `detect_target_versions`     | `/venv/lib/python3.11/site-packages/black/__init__.py`       |
| +500.0% | +50.00ms |   0.4% → 3.2% |   10.0ms → 60.0ms |   1 → 6 | `whitespace`                 | `/venv/lib/python3.11/site-packages/black/nodes.py`          |
|   +3.5% | +20.00ms | 25.0% → 31.4% | 570.0ms → 590.0ms | 57 → 59 | `assert_stable`              | `/venv/lib/python3.11/site-packages/black/__init__.py`       |
|  +33.3% | +20.00ms |   2.6% → 4.3% |   60.0ms → 80.0ms |   6 → 8 | `push`                       | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
|  +66.7% | +20.00ms |   1.3% → 2.7% |   30.0ms → 50.0ms |   3 → 5 | `normalize_invisible_parens` | `/venv/lib/python3.11/site-packages/black/linegen.py`        |
|     new | +20.00ms |   0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `<module>`                   | `/venv/lib/python3.11/site-packages/packaging/specifiers.py` |
|     new | +20.00ms |   0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `<module>`                   | `/venv/lib/python3.11/site-packages/black/files.py`          |
|     new | +20.00ms |   0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `leaves`                     | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`      |
|     new | +20.00ms |   0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `is_split_before_delimiter`  | `/venv/lib/python3.11/site-packages/black/brackets.py`       |
|     new | +20.00ms |   0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `normalize_string_prefix`    | `/venv/lib/python3.11/site-packages/black/strings.py`        |
| +200.0% | +20.00ms |   0.4% → 1.6% |   10.0ms → 30.0ms |   1 → 3 | `is_multiline_string`        | `/venv/lib/python3.11/site-packages/black/nodes.py`          |
|   +6.7% | +10.00ms |   6.6% → 8.5% | 150.0ms → 160.0ms | 15 → 16 | `append`                     | `/venv/lib/python3.11/site-packages/black/lines.py`          |
|   +6.3% | +10.00ms |   7.0% → 9.0% | 160.0ms → 170.0ms | 16 → 17 | `_parse_single_version`      | `/venv/lib/python3.11/site-packages/black/parsing.py`        |
|   +6.3% | +10.00ms |   7.0% → 9.0% | 160.0ms → 170.0ms | 16 → 17 | `parse_ast`                  | `/venv/lib/python3.11/site-packages/black/parsing.py`        |
| +100.0% | +10.00ms |   0.4% → 1.1% |   10.0ms → 20.0ms |   1 → 2 | `<module>`                   | `/venv/lib/python3.11/site-packages/black/__init__.py`       |
| +100.0% | +10.00ms |   0.4% → 1.1% |   10.0ms → 20.0ms |   1 → 2 | `is_comment`                 | `/venv/lib/python3.11/site-packages/black/lines.py`          |
|     new | +10.00ms |   0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `<module>`                   | `/venv/lib/python3.11/site-packages/packaging/_ranges.py`    |
|     new | +10.00ms |   0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `<module>`                   | `/venv/lib/python3.11/site-packages/packaging/tags.py`       |
|     new | +10.00ms |   0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `<module>`                   | `/venv/lib/python3.11/site-packages/packaging/utils.py`      |

##### Standard library

|  Change |    Delta |           % |              Time | Samples | Function                    | Location                                 |
| ------: | -------: | ----------: | ----------------: | ------: | --------------------------- | ---------------------------------------- |
|   +6.3% | +10.00ms | 7.0% → 9.0% | 160.0ms → 170.0ms | 16 → 17 | `parse`                     | `/usr/lib/python3.11/ast.py`             |
| +100.0% | +10.00ms | 0.4% → 1.1% |   10.0ms → 20.0ms |   1 → 2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| +100.0% | +10.00ms | 0.4% → 1.1% |   10.0ms → 20.0ms |   1 → 2 | `exec_module`               | `<frozen importlib._bootstrap_external>` |
| +100.0% | +10.00ms | 0.4% → 1.1% |   10.0ms → 20.0ms |   1 → 2 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
| +100.0% | +10.00ms | 0.4% → 1.1% |   10.0ms → 20.0ms |   1 → 2 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
| +100.0% | +10.00ms | 0.4% → 1.1% |   10.0ms → 20.0ms |   1 → 2 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
| +100.0% | +10.00ms | 0.4% → 1.1% |   10.0ms → 20.0ms |   1 → 2 | `_get_module_details`       | `<frozen runpy>`                         |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `get_code`                  | `<frozen importlib._bootstrap_external>` |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `__new__`                   | `<frozen abc>`                           |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `<module>`                  | `/usr/lib/python3.11/selectors.py`       |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `<module>`                  | `/usr/lib/python3.11/subprocess.py`      |

##### Unknown

| Change |    Delta |           % |            Time | Samples | Function      | Location    |
| -----: | -------: | ----------: | --------------: | ------: | ------------- | ----------- |
| +28.6% | +20.00ms | 3.1% → 4.8% | 70.0ms → 90.0ms |   7 → 9 | `(anonymous)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |              Time |   Samples | Function               | Location                                                      |
| -----: | --------: | ------------: | ----------------: | --------: | ---------------------- | ------------------------------------------------------------- |
| -32.1% | -440.00ms | 60.1% → 49.5% |   1.37s → 930.0ms |  137 → 93 | `format_str`           | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `reformat_one`         | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `main`                 | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py`      |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py`            |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py`            |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py`            |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `patched_main`         | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `<module>`             | `/venv/lib/python3.11/site-packages/black/__main__.py`        |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `_run_code`            | `<frozen runpy>`                                              |
| -19.0% | -420.00ms | 96.9% → 95.2% |     2.21s → 1.79s | 221 → 179 | `_run_module_as_main`  | `<frozen runpy>`                                              |
| -21.2% | -410.00ms | 84.6% → 80.9% |     1.93s → 1.52s | 193 → 152 | `_format_str_once`     | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| -28.8% | -210.00ms | 32.0% → 27.7% | 730.0ms → 520.0ms |   73 → 52 | `visit_default`        | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| -28.8% | -210.00ms | 32.0% → 27.7% | 730.0ms → 520.0ms |   73 → 52 | `visit`                | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| -29.2% | -210.00ms | 31.6% → 27.1% | 720.0ms → 510.0ms |   72 → 51 | `visit_stmt`           | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| -28.8% | -210.00ms | 32.0% → 27.7% | 730.0ms → 520.0ms |   73 → 52 | `visit_default`        | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| -19.0% | -160.00ms | 36.8% → 36.2% | 840.0ms → 680.0ms |   84 → 68 | `parse_tokens`         | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| -19.0% | -160.00ms | 36.8% → 36.2% | 840.0ms → 680.0ms |   84 → 68 | `parse_string`         | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### Third-party

| Change |     Delta |             % |              Time |   Samples | Function               | Location                                                      |
| -----: | --------: | ------------: | ----------------: | --------: | ---------------------- | ------------------------------------------------------------- |
| -32.1% | -440.00ms | 60.1% → 49.5% |   1.37s → 930.0ms |  137 → 93 | `format_str`           | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `reformat_one`         | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `main`                 | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `new_func`             | `/venv/lib/python3.11/site-packages/click/decorators.py`      |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `invoke`               | `/venv/lib/python3.11/site-packages/click/core.py`            |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `main`                 | `/venv/lib/python3.11/site-packages/click/core.py`            |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `__call__`             | `/venv/lib/python3.11/site-packages/click/core.py`            |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `patched_main`         | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| -19.5% | -430.00ms | 96.5% → 94.1% |     2.20s → 1.77s | 220 → 177 | `<module>`             | `/venv/lib/python3.11/site-packages/black/__main__.py`        |
| -21.2% | -410.00ms | 84.6% → 80.9% |     1.93s → 1.52s | 193 → 152 | `_format_str_once`     | `/venv/lib/python3.11/site-packages/black/__init__.py`        |
| -28.8% | -210.00ms | 32.0% → 27.7% | 730.0ms → 520.0ms |   73 → 52 | `visit_default`        | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| -28.8% | -210.00ms | 32.0% → 27.7% | 730.0ms → 520.0ms |   73 → 52 | `visit`                | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| -29.2% | -210.00ms | 31.6% → 27.1% | 720.0ms → 510.0ms |   72 → 51 | `visit_stmt`           | `/venv/lib/python3.11/site-packages/black/linegen.py`         |
| -28.8% | -210.00ms | 32.0% → 27.7% | 730.0ms → 520.0ms |   73 → 52 | `visit_default`        | `/venv/lib/python3.11/site-packages/black/nodes.py`           |
| -19.0% | -160.00ms | 36.8% → 36.2% | 840.0ms → 680.0ms |   84 → 68 | `parse_tokens`         | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| -19.0% | -160.00ms | 36.8% → 36.2% | 840.0ms → 680.0ms |   84 → 68 | `parse_string`         | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| -19.0% | -160.00ms | 36.8% → 36.2% | 840.0ms → 680.0ms |   84 → 68 | `lib2to3_parse`        | `/venv/lib/python3.11/site-packages/black/parsing.py`         |
| -80.0% | -160.00ms |   8.8% → 2.1% |  200.0ms → 40.0ms |    20 → 4 | `convert`              | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`       |

##### Standard library

|  Change |     Delta |             % |          Time |   Samples | Function              | Location                                  |
| ------: | --------: | ------------: | ------------: | --------: | --------------------- | ----------------------------------------- |
|  -19.5% | -430.00ms | 96.5% → 94.1% | 2.20s → 1.77s | 220 → 177 | `_run_code`           | `<frozen runpy>`                          |
|  -19.0% | -420.00ms | 96.9% → 95.2% | 2.21s → 1.79s | 221 → 179 | `_run_module_as_main` | `<frozen runpy>`                          |
| removed |  -10.00ms |   0.4% → 0.0% |  10.0ms → 0ms |     1 → 0 | `<module>`            | `/usr/lib/python3.11/hashlib.py`          |
| removed |  -10.00ms |   0.4% → 0.0% |  10.0ms → 0ms |     1 → 0 | `isEnabledFor`        | `/usr/lib/python3.11/logging/__init__.py` |
| removed |  -10.00ms |   0.4% → 0.0% |  10.0ms → 0ms |     1 → 0 | `debug`               | `/usr/lib/python3.11/logging/__init__.py` |
| removed |  -10.00ms |   0.4% → 0.0% |  10.0ms → 0ms |     1 → 0 | `__eq__`              | `/usr/lib/python3.11/typing.py`           |
| removed |  -10.00ms |   0.4% → 0.0% |  10.0ms → 0ms |     1 → 0 | `_type_check`         | `/usr/lib/python3.11/typing.py`           |
| removed |  -10.00ms |   0.4% → 0.0% |  10.0ms → 0ms |     1 → 0 | `<genexpr>`           | `/usr/lib/python3.11/typing.py`           |
| removed |  -10.00ms |   0.4% → 0.0% |  10.0ms → 0ms |     1 → 0 | `__getitem__`         | `/usr/lib/python3.11/typing.py`           |
| removed |  -10.00ms |   0.4% → 0.0% |  10.0ms → 0ms |     1 → 0 | `inner`               | `/usr/lib/python3.11/typing.py`           |
| removed |  -10.00ms |   0.4% → 0.0% |  10.0ms → 0ms |     1 → 0 | `_subx`               | `/usr/lib/python3.11/re/__init__.py`      |

##### Ours

| Change |    Delta |           % |            Time | Samples | Function   | Location   |
| -----: | -------: | ----------: | --------------: | ------: | ---------- | ---------- |
| -80.0% | -40.00ms | 2.2% → 0.5% | 50.0ms → 10.0ms |   5 → 1 | `__init__` | `<string>` |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |    Delta |      % |             Time | Samples | Caller                   | Location                                               |
| -----: | -------: | -----: | ---------------: | ------: | ------------------------ | ------------------------------------------------------ |
| +75.0% | +60.00ms | 100.0% | 80.0ms → 140.0ms |  8 → 14 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `detect_target_versions` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |    Delta |      % |             Time | Samples | Caller             | Location                                               |
| -----: | -------: | -----: | ---------------: | ------: | ------------------ | ------------------------------------------------------ |
| +75.0% | +60.00ms | 100.0% | 80.0ms → 140.0ms |  8 → 14 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `whitespace` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|  Change |    Delta |      % |            Time | Samples | Caller   | Location                                            |
| ------: | -------: | -----: | --------------: | ------: | -------- | --------------------------------------------------- |
| +500.0% | +50.00ms | 100.0% | 10.0ms → 60.0ms |   1 → 6 | `append` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `assert_stable` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |    Delta |      % |              Time | Samples | Caller                            | Location                                               |
| -----: | -------: | -----: | ----------------: | ------: | --------------------------------- | ------------------------------------------------------ |
|  +3.5% | +20.00ms | 100.0% | 570.0ms → 590.0ms | 57 → 59 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`)

| Change |    Delta |      % |            Time | Samples | Caller      | Location                                                     |
| -----: | -------: | -----: | --------------: | ------: | ----------- | ------------------------------------------------------------ |
| +33.3% | +20.00ms | 100.0% | 60.0ms → 80.0ms |   6 → 8 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `normalize_invisible_parens` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |      % |            Time | Samples | Caller       | Location                                              |
| -----: | -------: | -----: | --------------: | ------: | ------------ | ----------------------------------------------------- |
| +66.7% | +20.00ms | 100.0% | 30.0ms → 50.0ms |   3 → 5 | `visit_stmt` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py`)

| Change |    Delta |             % |         Time | Samples | Caller                      | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------- | ------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/files.py`)

| Change |    Delta |             % |         Time | Samples | Caller                      | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------- | ------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `leaves` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |             % |         Time | Samples | Caller                     | Location                                                |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------- | ------------------------------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `leaves`                   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `convert_one_fmt_off_pair` | `/venv/lib/python3.11/site-packages/black/comments.py`  |

##### `is_split_before_delimiter` (`/venv/lib/python3.11/site-packages/black/brackets.py`)

| Change |    Delta |             % |         Time | Samples | Caller | Location                                               |
| -----: | -------: | ------------: | -----------: | ------: | ------ | ------------------------------------------------------ |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `mark` | `/venv/lib/python3.11/site-packages/black/brackets.py` |

##### `normalize_string_prefix` (`/venv/lib/python3.11/site-packages/black/strings.py`)

| Change |    Delta |             % |         Time | Samples | Caller         | Location                                              |
| -----: | -------: | ------------: | -----------: | ------: | -------------- | ----------------------------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `visit_STRING` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `is_multiline_string` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|  Change |    Delta |             % |         Time | Samples | Caller                       | Location                                              |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------- | ----------------------------------------------------- |
|     new | +30.00ms | 0.0% → 100.0% | 0ms → 30.0ms |   0 → 3 | `normalize_invisible_parens` | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `<genexpr>`                  | `/venv/lib/python3.11/site-packages/black/lines.py`   |

##### `append` (`/venv/lib/python3.11/site-packages/black/lines.py`)

| Change |    Delta |      % |              Time | Samples | Caller          | Location                                              |
| -----: | -------: | -----: | ----------------: | ------: | --------------- | ----------------------------------------------------- |
|  +6.7% | +10.00ms | 100.0% | 150.0ms → 160.0ms | 15 → 16 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

| Change |    Delta |      % |              Time | Samples | Caller                  | Location                                              |
| -----: | -------: | -----: | ----------------: | ------: | ----------------------- | ----------------------------------------------------- |
|  +6.3% | +10.00ms | 100.0% | 160.0ms → 170.0ms | 16 → 17 | `_parse_single_version` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `_parse_single_version` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

| Change |    Delta |      % |              Time | Samples | Caller      | Location                                              |
| -----: | -------: | -----: | ----------------: | ------: | ----------- | ----------------------------------------------------- |
|  +6.3% | +10.00ms | 100.0% | 160.0ms → 170.0ms | 16 → 17 | `parse_ast` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `parse_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

| Change |    Delta |      % |              Time | Samples | Caller              | Location                                               |
| -----: | -------: | -----: | ----------------: | ------: | ------------------- | ------------------------------------------------------ |
|  +6.3% | +10.00ms | 100.0% | 160.0ms → 170.0ms | 16 → 17 | `assert_equivalent` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

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

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|  Change |    Delta |      % |            Time | Samples | Caller                      | Location                        |
| ------: | -------: | -----: | --------------: | ------: | --------------------------- | ------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `is_comment` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |      % |            Time | Samples | Caller              | Location                                            |
| ------: | -------: | -----: | --------------: | ------: | ------------------- | --------------------------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `maybe_empty_lines` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/_ranges.py`)

| Change |    Delta |             % |         Time | Samples | Caller                      | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------- | ------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/tags.py`)

| Change |    Delta |             % |         Time | Samples | Caller                      | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------- | ------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/utils.py`)

| Change |    Delta |             % |         Time | Samples | Caller                      | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------- | ------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|  Change |    Delta |      % |            Time | Samples | Caller           | Location                        |
| ------: | -------: | -----: | --------------: | ------: | ---------------- | ------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|  Change |    Delta |             % |            Time | Samples | Caller     | Location                                                     |
| ------: | -------: | ------------: | --------------: | ------: | ---------- | ------------------------------------------------------------ |
|     new | +20.00ms | 0.0% → 100.0% |    0ms → 20.0ms |   0 → 2 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/specifiers.py` |
|     new | +20.00ms | 0.0% → 100.0% |    0ms → 20.0ms |   0 → 2 | `<module>` | `/venv/lib/python3.11/site-packages/black/files.py`          |
| removed | -10.00ms | 100.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `<module>` | `/usr/lib/python3.11/hashlib.py`                             |
| removed | -10.00ms | 100.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `<module>` | `/venv/lib/python3.11/site-packages/black/cache.py`          |
| +100.0% | +10.00ms |        100.0% | 10.0ms → 20.0ms |   1 → 2 | `<module>` | `/venv/lib/python3.11/site-packages/black/__init__.py`       |

##### `_get_module_details` (`<frozen runpy>`)

|  Change |    Delta |      % |            Time | Samples | Caller                | Location         |
| ------: | -------: | -----: | --------------: | ------: | --------------------- | ---------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `_get_module_details` | `<frozen runpy>` |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `_run_module_as_main` | `<frozen runpy>` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

| Change |    Delta |             % |         Time | Samples | Caller     | Location                                 |
| -----: | -------: | ------------: | -----------: | ------: | ---------- | ---------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `get_code` | `<frozen importlib._bootstrap_external>` |

##### `get_code` (`<frozen importlib._bootstrap_external>`)

| Change |    Delta |             % |         Time | Samples | Caller        | Location                                 |
| -----: | -------: | ------------: | -----------: | ------: | ------------- | ---------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `exec_module` | `<frozen importlib._bootstrap_external>` |

##### `__new__` (`<frozen abc>`)

| Change |    Delta |             % |         Time | Samples | Caller     | Location                           |
| -----: | -------: | ------------: | -----------: | ------: | ---------- | ---------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `<module>` | `/usr/lib/python3.11/selectors.py` |

##### `<module>` (`/usr/lib/python3.11/selectors.py`)

| Change |    Delta |             % |         Time | Samples | Caller                      | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------- | ------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/usr/lib/python3.11/subprocess.py`)

| Change |    Delta |             % |         Time | Samples | Caller                      | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------- | ------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `format_str` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |            Time |  Samples | Caller                 | Location                                               |
| -----: | --------: | -----: | --------------: | -------: | ---------------------- | ------------------------------------------------------ |
| -32.1% | -440.00ms | 100.0% | 1.37s → 930.0ms | 137 → 93 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Caller                 | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | ---------------------- | ------------------------------------------------------ |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `format_file_in_place` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Caller         | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | -------------- | ------------------------------------------------------ |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `reformat_one` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `reformat_one` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Caller | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | ------ | ------------------------------------------------------ |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Caller     | Location                                                 |
| -----: | --------: | -----: | ------------: | --------: | ---------- | -------------------------------------------------------- |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`)

| Change |     Delta |      % |          Time |   Samples | Caller   | Location                                           |
| -----: | --------: | -----: | ------------: | --------: | -------- | -------------------------------------------------- |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |     Delta |      % |          Time |   Samples | Caller   | Location                                           |
| -----: | --------: | -----: | ------------: | --------: | -------- | -------------------------------------------------- |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `main`   | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |     Delta |      % |          Time |   Samples | Caller     | Location                                           |
| -----: | --------: | -----: | ------------: | --------: | ---------- | -------------------------------------------------- |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |     Delta |      % |          Time |   Samples | Caller         | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | -------------- | ------------------------------------------------------ |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `patched_main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Caller     | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | ---------- | ------------------------------------------------------ |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `<module>` | `/venv/lib/python3.11/site-packages/black/__main__.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`)

| Change |     Delta |      % |          Time |   Samples | Caller      | Location         |
| -----: | --------: | -----: | ------------: | --------: | ----------- | ---------------- |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `_run_code` | `<frozen runpy>` |

##### `_run_code` (`<frozen runpy>`)

| Change |     Delta |      % |          Time |   Samples | Caller                | Location         |
| -----: | --------: | -----: | ------------: | --------: | --------------------- | ---------------- |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `_run_module_as_main` | `<frozen runpy>` |

##### `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |             % |              Time |  Samples | Caller          | Location                                               |
| -----: | --------: | ------------: | ----------------: | -------: | --------------- | ------------------------------------------------------ |
| -32.1% | -440.00ms | 71.0% → 61.2% |   1.37s → 930.0ms | 137 → 93 | `format_str`    | `/venv/lib/python3.11/site-packages/black/__init__.py` |
|  +5.4% |  +30.00ms | 29.0% → 38.8% | 560.0ms → 590.0ms |  56 → 59 | `assert_stable` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |     Delta |             % |              Time | Samples | Caller              | Location                                              |
| ------: | --------: | ------------: | ----------------: | ------: | ------------------- | ----------------------------------------------------- |
|  -28.8% | -210.00ms |        100.0% | 730.0ms → 520.0ms | 73 → 52 | `visit`             | `/venv/lib/python3.11/site-packages/black/nodes.py`   |
|  -21.5% | -140.00ms | 89.0% → 98.1% | 650.0ms → 510.0ms | 65 → 51 | `visit_suite`       | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  -14.6% |  -70.00ms | 65.8% → 78.8% | 480.0ms → 410.0ms | 48 → 41 | `visit_simple_stmt` | `/venv/lib/python3.11/site-packages/black/linegen.py` |
|  -20.0% |  -60.00ms | 41.1% → 46.2% | 300.0ms → 240.0ms | 30 → 24 | `visit_power`       | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| removed |  -20.00ms |   2.7% → 0.0% |      20.0ms → 0ms |   2 → 0 | `visit_INDENT`      | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|  Change |     Delta |             % |              Time | Samples | Caller             | Location                                               |
| ------: | --------: | ------------: | ----------------: | ------: | ------------------ | ------------------------------------------------------ |
|  -29.2% | -210.00ms | 98.6% → 98.1% | 720.0ms → 510.0ms | 72 → 51 | `visit_stmt`       | `/venv/lib/python3.11/site-packages/black/linegen.py`  |
|  -28.8% | -210.00ms |        100.0% | 730.0ms → 520.0ms | 73 → 52 | `visit_default`    | `/venv/lib/python3.11/site-packages/black/nodes.py`    |
|  -28.8% | -210.00ms |        100.0% | 730.0ms → 520.0ms | 73 → 52 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |
|  -23.1% | -150.00ms | 89.0% → 96.2% | 650.0ms → 500.0ms | 65 → 50 | `visit_funcdef`    | `/venv/lib/python3.11/site-packages/black/linegen.py`  |
| removed |  -20.00ms |   2.7% → 0.0% |      20.0ms → 0ms |   2 → 0 | `visit_decorators` | `/venv/lib/python3.11/site-packages/black/linegen.py`  |

##### `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |     Delta |      % |              Time | Samples | Caller  | Location                                            |
| -----: | --------: | -----: | ----------------: | ------: | ------- | --------------------------------------------------- |
| -29.2% | -210.00ms | 100.0% | 720.0ms → 510.0ms | 72 → 51 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

| Change |     Delta |      % |              Time | Samples | Caller          | Location                                              |
| -----: | --------: | -----: | ----------------: | ------: | --------------- | ----------------------------------------------------- |
| -28.8% | -210.00ms | 100.0% | 730.0ms → 520.0ms | 73 → 52 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

| Change |     Delta |      % |              Time | Samples | Caller         | Location                                                      |
| -----: | --------: | -----: | ----------------: | ------: | -------------- | ------------------------------------------------------------- |
| -19.0% | -160.00ms | 100.0% | 840.0ms → 680.0ms | 84 → 68 | `parse_string` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `parse_string` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

| Change |     Delta |      % |              Time | Samples | Caller          | Location                                              |
| -----: | --------: | -----: | ----------------: | ------: | --------------- | ----------------------------------------------------- |
| -19.0% | -160.00ms | 100.0% | 840.0ms → 680.0ms | 84 → 68 | `lib2to3_parse` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

| Change |     Delta |      % |              Time | Samples | Caller             | Location                                               |
| -----: | --------: | -----: | ----------------: | ------: | ------------------ | ------------------------------------------------------ |
| -19.0% | -160.00ms | 100.0% | 840.0ms → 680.0ms | 84 → 68 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |     Delta |              % |            Time | Samples | Caller  | Location                                                     |
| ------: | --------: | -------------: | --------------: | ------: | ------- | ------------------------------------------------------------ |
| removed | -110.00ms |   55.0% → 0.0% |   110.0ms → 0ms |  11 → 0 | `pop`   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
|  -55.6% |  -50.00ms | 45.0% → 100.0% | 90.0ms → 40.0ms |   9 → 4 | `shift` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |

##### `<module>` (`/usr/lib/python3.11/hashlib.py`)

|  Change |    Delta |             % |         Time | Samples | Caller                      | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------- | ------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `isEnabledFor` (`/usr/lib/python3.11/logging/__init__.py`)

|  Change |    Delta |             % |         Time | Samples | Caller  | Location                                  |
| ------: | -------: | ------------: | -----------: | ------: | ------- | ----------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `debug` | `/usr/lib/python3.11/logging/__init__.py` |

##### `debug` (`/usr/lib/python3.11/logging/__init__.py`)

|  Change |    Delta |             % |         Time | Samples | Caller         | Location                                                      |
| ------: | -------: | ------------: | -----------: | ------: | -------------- | ------------------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `parse_tokens` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `__eq__` (`/usr/lib/python3.11/typing.py`)

|  Change |    Delta |             % |         Time | Samples | Caller        | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | ------------- | ------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `_type_check` | `/usr/lib/python3.11/typing.py` |

##### `_type_check` (`/usr/lib/python3.11/typing.py`)

|  Change |    Delta |             % |         Time | Samples | Caller      | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | ----------- | ------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `<genexpr>` | `/usr/lib/python3.11/typing.py` |

##### `<genexpr>` (`/usr/lib/python3.11/typing.py`)

|  Change |    Delta |             % |         Time | Samples | Caller        | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | ------------- | ------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `__getitem__` | `/usr/lib/python3.11/typing.py` |

##### `__getitem__` (`/usr/lib/python3.11/typing.py`)

|  Change |    Delta |             % |         Time | Samples | Caller  | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | ------- | ------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `inner` | `/usr/lib/python3.11/typing.py` |

##### `inner` (`/usr/lib/python3.11/typing.py`)

|  Change |    Delta |             % |         Time | Samples | Caller                  | Location                                            |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------- | --------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `enumerate_with_length` | `/venv/lib/python3.11/site-packages/black/lines.py` |

##### `_subx` (`/usr/lib/python3.11/re/__init__.py`)

|  Change |    Delta |             % |         Time | Samples | Caller      | Location                                              |
| ------: | -------: | ------------: | -----------: | ------: | ----------- | ----------------------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `sub_twice` | `/venv/lib/python3.11/site-packages/black/strings.py` |

##### `__init__` (`<string>`)

|  Change |    Delta |              % |            Time | Samples | Caller            | Location                                              |
| ------: | -------: | -------------: | --------------: | ------: | ----------------- | ----------------------------------------------------- |
| removed | -40.00ms |   80.0% → 0.0% |    40.0ms → 0ms |   4 → 0 | `__init__`        | `<string>`                                            |
|  -75.0% | -30.00ms | 80.0% → 100.0% | 40.0ms → 10.0ms |   4 → 1 | `line`            | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| removed | -10.00ms |   20.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `delimiter_split` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|  Change |    Delta |             % |            Time | Samples | Callee            | Location                                                |
| ------: | -------: | ------------: | --------------: | ------: | ----------------- | ------------------------------------------------------- |
|  -50.0% | -20.00ms | 50.0% → 14.3% | 40.0ms → 20.0ms |   4 → 2 | `pre_order`       | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
| removed | -10.00ms |  12.5% → 0.0% |    10.0ms → 0ms |   1 → 0 | `is_number_token` | `/venv/lib/python3.11/site-packages/black/nodes.py`     |

##### `detect_target_versions` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |    Delta |      % |             Time | Samples | Callee              | Location                                               |
| -----: | -------: | -----: | ---------------: | ------: | ------------------- | ------------------------------------------------------ |
| +75.0% | +60.00ms | 100.0% | 80.0ms → 140.0ms |  8 → 14 | `get_features_used` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `whitespace` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

|  Change |    Delta |             % |         Time | Samples | Callee           | Location                                                |
| ------: | -------: | ------------: | -----------: | ------: | ---------------- | ------------------------------------------------------- |
|     new | +30.00ms |  0.0% → 50.0% | 0ms → 30.0ms |   0 → 3 | `prev_sibling`   | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `preceding_leaf` | `/venv/lib/python3.11/site-packages/black/nodes.py`     |

##### `assert_stable` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |    Delta |              % |              Time | Samples | Callee             | Location                                               |
| -----: | -------: | -------------: | ----------------: | ------: | ------------------ | ------------------------------------------------------ |
|  +5.4% | +30.00ms | 98.2% → 100.0% | 560.0ms → 590.0ms | 56 → 59 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `normalize_invisible_parens` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |              % |            Time | Samples | Callee                | Location                                            |
| -----: | -------: | -------------: | --------------: | ------: | --------------------- | --------------------------------------------------- |
|    new | +30.00ms |   0.0% → 60.0% |    0ms → 30.0ms |   0 → 3 | `is_multiline_string` | `/venv/lib/python3.11/site-packages/black/nodes.py` |
| -33.3% | -10.00ms | 100.0% → 40.0% | 30.0ms → 20.0ms |   3 → 2 | `wrap_in_parentheses` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py`)

| Change |    Delta |             % |         Time | Samples | Callee           | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | ---------------- | ------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/files.py`)

| Change |    Delta |             % |         Time | Samples | Callee           | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | ---------------- | ------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `leaves` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |             % |         Time | Samples | Callee   | Location                                                |
| -----: | -------: | ------------: | -----------: | ------: | -------- | ------------------------------------------------------- |
|    new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `leaves` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `append` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |             % |             Time | Samples | Callee                 | Location                                               |
| ------: | -------: | ------------: | ---------------: | ------: | ---------------------- | ------------------------------------------------------ |
| +500.0% | +50.00ms |  6.7% → 37.5% |  10.0ms → 60.0ms |   1 → 6 | `whitespace`           | `/venv/lib/python3.11/site-packages/black/nodes.py`    |
|  -30.0% | -30.00ms | 66.7% → 43.8% | 100.0ms → 70.0ms |  10 → 7 | `mark`                 | `/venv/lib/python3.11/site-packages/black/brackets.py` |
| removed | -20.00ms |  13.3% → 0.0% |     20.0ms → 0ms |   2 → 0 | `is_complex_subscript` | `/venv/lib/python3.11/site-packages/black/lines.py`    |

##### `_parse_single_version` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

| Change |    Delta |      % |              Time | Samples | Callee  | Location                     |
| -----: | -------: | -----: | ----------------: | ------: | ------- | ---------------------------- |
|  +6.3% | +10.00ms | 100.0% | 160.0ms → 170.0ms | 16 → 17 | `parse` | `/usr/lib/python3.11/ast.py` |

##### `parse_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

| Change |    Delta |      % |              Time | Samples | Callee                  | Location                                              |
| -----: | -------: | -----: | ----------------: | ------: | ----------------------- | ----------------------------------------------------- |
|  +6.3% | +10.00ms | 100.0% | 160.0ms → 170.0ms | 16 → 17 | `_parse_single_version` | `/venv/lib/python3.11/site-packages/black/parsing.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|  Change |    Delta |             % |            Time | Samples | Callee     | Location                                                     |
| ------: | -------: | ------------: | --------------: | ------: | ---------- | ------------------------------------------------------------ |
|     new | +20.00ms | 0.0% → 100.0% |    0ms → 20.0ms |   0 → 2 | `<module>` | `/venv/lib/python3.11/site-packages/packaging/specifiers.py` |
|     new | +20.00ms | 0.0% → 100.0% |    0ms → 20.0ms |   0 → 2 | `<module>` | `/venv/lib/python3.11/site-packages/black/files.py`          |
| removed | -10.00ms | 100.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `<module>` | `/usr/lib/python3.11/hashlib.py`                             |
| removed | -10.00ms | 100.0% → 0.0% |    10.0ms → 0ms |   1 → 0 | `<module>` | `/venv/lib/python3.11/site-packages/black/cache.py`          |
| +100.0% | +10.00ms |        100.0% | 10.0ms → 20.0ms |   1 → 2 | `<module>` | `/venv/lib/python3.11/site-packages/black/__init__.py`       |

##### `exec_module` (`<frozen importlib._bootstrap_external>`)

|  Change |    Delta |            % |            Time | Samples | Callee                      | Location                                 |
| ------: | -------: | -----------: | --------------: | ------: | --------------------------- | ---------------------------------------- |
| +100.0% | +10.00ms |       100.0% | 10.0ms → 20.0ms |   1 → 2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|     new | +10.00ms | 0.0% → 50.0% |    0ms → 10.0ms |   0 → 1 | `get_code`                  | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|  Change |    Delta |      % |            Time | Samples | Callee        | Location                                 |
| ------: | -------: | -----: | --------------: | ------: | ------------- | ---------------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `exec_module` | `<frozen importlib._bootstrap_external>` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

|  Change |    Delta |      % |            Time | Samples | Callee           | Location                        |
| ------: | -------: | -----: | --------------: | ------: | ---------------- | ------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/_ranges.py`)

| Change |    Delta |             % |         Time | Samples | Callee           | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | ---------------- | ------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/tags.py`)

| Change |    Delta |             % |         Time | Samples | Callee           | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | ---------------- | ------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`/venv/lib/python3.11/site-packages/packaging/utils.py`)

| Change |    Delta |             % |         Time | Samples | Callee           | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | ---------------- | ------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|  Change |    Delta |      % |            Time | Samples | Callee           | Location                        |
| ------: | -------: | -----: | --------------: | ------: | ---------------- | ------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|  Change |    Delta |      % |            Time | Samples | Callee                    | Location                        |
| ------: | -------: | -----: | --------------: | ------: | ------------------------- | ------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|  Change |    Delta |      % |            Time | Samples | Callee                | Location                        |
| ------: | -------: | -----: | --------------: | ------: | --------------------- | ------------------------------- |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| +100.0% | +10.00ms | 100.0% | 10.0ms → 20.0ms |   1 → 2 | `_get_module_details` | `<frozen runpy>`                |

##### `get_code` (`<frozen importlib._bootstrap_external>`)

| Change |    Delta |             % |         Time | Samples | Callee              | Location                                 |
| -----: | -------: | ------------: | -----------: | ------: | ------------------- | ---------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |

##### `<module>` (`/usr/lib/python3.11/selectors.py`)

| Change |    Delta |             % |         Time | Samples | Callee    | Location       |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `__new__` | `<frozen abc>` |

##### `<module>` (`/usr/lib/python3.11/subprocess.py`)

| Change |    Delta |             % |         Time | Samples | Callee           | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | ---------------- | ------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `format_str` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |            Time |  Samples | Callee             | Location                                               |
| -----: | --------: | -----: | --------------: | -------: | ------------------ | ------------------------------------------------------ |
| -32.1% | -440.00ms | 100.0% | 1.37s → 930.0ms | 137 → 93 | `_format_str_once` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |             % |              Time |  Samples | Callee                            | Location                                               |
| -----: | --------: | ------------: | ----------------: | -------: | --------------------------------- | ------------------------------------------------------ |
| -32.1% | -440.00ms | 62.3% → 52.5% |   1.37s → 930.0ms | 137 → 93 | `format_str`                      | `/venv/lib/python3.11/site-packages/black/__init__.py` |
|  +1.2% |  +10.00ms | 37.7% → 47.5% | 830.0ms → 840.0ms |  83 → 84 | `check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `format_file_in_place` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Callee                 | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | ---------------------- | ------------------------------------------------------ |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `format_file_contents` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `reformat_one` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Callee                 | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | ---------------------- | ------------------------------------------------------ |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `format_file_in_place` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Callee         | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | -------------- | ------------------------------------------------------ |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `reformat_one` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`)

| Change |     Delta |      % |          Time |   Samples | Callee | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | ------ | ------------------------------------------------------ |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |     Delta |      % |          Time |   Samples | Callee     | Location                                                 |
| -----: | --------: | -----: | ------------: | --------: | ---------- | -------------------------------------------------------- |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py` |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `invoke`   | `/venv/lib/python3.11/site-packages/click/core.py`       |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |     Delta |      % |          Time |   Samples | Callee   | Location                                           |
| -----: | --------: | -----: | ------------: | --------: | -------- | -------------------------------------------------- |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py`)

| Change |     Delta |      % |          Time |   Samples | Callee | Location                                           |
| -----: | --------: | -----: | ------------: | --------: | ------ | -------------------------------------------------- |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `main` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |      % |          Time |   Samples | Callee     | Location                                           |
| -----: | --------: | -----: | ------------: | --------: | ---------- | -------------------------------------------------- |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`)

| Change |     Delta |      % |          Time |   Samples | Callee         | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | -------------- | ------------------------------------------------------ |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `patched_main` | `/venv/lib/python3.11/site-packages/black/__init__.py` |

##### `_run_code` (`<frozen runpy>`)

| Change |     Delta |      % |          Time |   Samples | Callee     | Location                                               |
| -----: | --------: | -----: | ------------: | --------: | ---------- | ------------------------------------------------------ |
| -19.5% | -430.00ms | 100.0% | 2.20s → 1.77s | 220 → 177 | `<module>` | `/venv/lib/python3.11/site-packages/black/__main__.py` |

##### `_run_module_as_main` (`<frozen runpy>`)

|  Change |     Delta |             % |            Time |   Samples | Callee                | Location         |
| ------: | --------: | ------------: | --------------: | --------: | --------------------- | ---------------- |
|  -19.5% | -430.00ms | 99.5% → 98.9% |   2.20s → 1.77s | 220 → 177 | `_run_code`           | `<frozen runpy>` |
| +100.0% |  +10.00ms |   0.5% → 1.1% | 10.0ms → 20.0ms |     1 → 2 | `_get_module_details` | `<frozen runpy>` |

##### `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |     Delta |             % |              Time | Samples | Callee                   | Location                                               |
| -----: | --------: | ------------: | ----------------: | ------: | ------------------------ | ------------------------------------------------------ |
| -28.8% | -210.00ms | 37.8% → 34.2% | 730.0ms → 520.0ms | 73 → 52 | `visit`                  | `/venv/lib/python3.11/site-packages/black/nodes.py`    |
| -19.0% | -160.00ms | 43.5% → 44.7% | 840.0ms → 680.0ms | 84 → 68 | `lib2to3_parse`          | `/venv/lib/python3.11/site-packages/black/parsing.py`  |
| -40.0% |  -60.00ms |   7.8% → 5.9% |  150.0ms → 90.0ms |  15 → 9 | `transform_line`         | `/venv/lib/python3.11/site-packages/black/linegen.py`  |
| +75.0% |  +60.00ms |   4.1% → 9.2% |  80.0ms → 140.0ms |  8 → 14 | `detect_target_versions` | `/venv/lib/python3.11/site-packages/black/__init__.py` |
| -50.0% |  -40.00ms |   4.1% → 2.6% |   80.0ms → 40.0ms |   8 → 4 | `maybe_empty_lines`      | `/venv/lib/python3.11/site-packages/black/lines.py`    |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |     Delta |             % |              Time | Samples | Callee              | Location                                                |
| ------: | --------: | ------------: | ----------------: | ------: | ------------------- | ------------------------------------------------------- |
|  -28.8% | -210.00ms |        100.0% | 730.0ms → 520.0ms | 73 → 52 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/nodes.py`     |
|  -30.8% |  -80.00ms | 35.6% → 34.6% | 260.0ms → 180.0ms | 26 → 18 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py`  |
|   +6.7% |  +10.00ms | 20.5% → 30.8% | 150.0ms → 160.0ms | 15 → 16 | `append`            | `/venv/lib/python3.11/site-packages/black/lines.py`     |
| removed |  -10.00ms |   1.4% → 0.0% |      10.0ms → 0ms |   1 → 0 | `line`              | `/venv/lib/python3.11/site-packages/black/linegen.py`   |
| removed |  -10.00ms |   1.4% → 0.0% |      10.0ms → 0ms |   1 → 0 | `prefix`            | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

| Change |     Delta |             % |              Time | Samples | Callee              | Location                                              |
| -----: | --------: | ------------: | ----------------: | ------: | ------------------- | ----------------------------------------------------- |
| -28.8% | -210.00ms |        100.0% | 730.0ms → 520.0ms | 73 → 52 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| -29.2% | -210.00ms | 98.6% → 98.1% | 720.0ms → 510.0ms | 72 → 51 | `visit_stmt`        | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| -23.1% | -150.00ms | 89.0% → 96.2% | 650.0ms → 500.0ms | 65 → 50 | `visit_funcdef`     | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| -21.5% | -140.00ms | 89.0% → 98.1% | 650.0ms → 510.0ms | 65 → 51 | `visit_suite`       | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| -22.6% | -120.00ms | 72.6% → 78.8% | 530.0ms → 410.0ms | 53 → 41 | `visit_simple_stmt` | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

|  Change |     Delta |           % |              Time | Samples | Callee                       | Location                                              |
| ------: | --------: | ----------: | ----------------: | ------: | ---------------------------- | ----------------------------------------------------- |
|  -29.2% | -210.00ms |      100.0% | 720.0ms → 510.0ms | 72 → 51 | `visit`                      | `/venv/lib/python3.11/site-packages/black/nodes.py`   |
|  +66.7% |  +20.00ms | 4.2% → 9.8% |   30.0ms → 50.0ms |   3 → 5 | `normalize_invisible_parens` | `/venv/lib/python3.11/site-packages/black/linegen.py` |
| removed |  -20.00ms | 2.8% → 0.0% |      20.0ms → 0ms |   2 → 0 | `line`                       | `/venv/lib/python3.11/site-packages/black/linegen.py` |

##### `visit_default` (`/venv/lib/python3.11/site-packages/black/nodes.py`)

| Change |     Delta |      % |              Time | Samples | Callee  | Location                                            |
| -----: | --------: | -----: | ----------------: | ------: | ------- | --------------------------------------------------- |
| -28.8% | -210.00ms | 100.0% | 730.0ms → 520.0ms | 73 → 52 | `visit` | `/venv/lib/python3.11/site-packages/black/nodes.py` |

##### `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

|  Change |    Delta |             % |              Time | Samples | Callee                      | Location                                                      |
| ------: | -------: | ------------: | ----------------: | ------: | --------------------------- | ------------------------------------------------------------- |
|   -8.2% | -50.00ms | 72.6% → 82.4% | 610.0ms → 560.0ms | 61 → 56 | `addtoken`                  | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`  |
|  -18.2% | -20.00ms | 13.1% → 13.2% |  110.0ms → 90.0ms |  11 → 9 | `__next__`                  | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| removed | -20.00ms |   2.4% → 0.0% |      20.0ms → 0ms |   2 → 0 | `_partially_consume_prefix` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |
| removed | -10.00ms |   1.2% → 0.0% |      10.0ms → 0ms |   1 → 0 | `debug`                     | `/usr/lib/python3.11/logging/__init__.py`                     |

##### `parse_string` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`)

| Change |     Delta |      % |              Time | Samples | Callee         | Location                                                      |
| -----: | --------: | -----: | ----------------: | ------: | -------------- | ------------------------------------------------------------- |
| -19.0% | -160.00ms | 100.0% | 840.0ms → 680.0ms | 84 → 68 | `parse_tokens` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`)

| Change |     Delta |      % |              Time | Samples | Callee         | Location                                                      |
| -----: | --------: | -----: | ----------------: | ------: | -------------- | ------------------------------------------------------------- |
| -19.0% | -160.00ms | 100.0% | 840.0ms → 680.0ms | 84 → 68 | `parse_string` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py` |

##### `convert` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

| Change |    Delta |             % |            Time | Samples | Callee     | Location                                                |
| -----: | -------: | ------------: | --------------: | ------: | ---------- | ------------------------------------------------------- |
| -87.5% | -70.00ms | 40.0% → 25.0% | 80.0ms → 10.0ms |   8 → 1 | `__init__` | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |
| -77.8% | -70.00ms | 45.0% → 50.0% | 90.0ms → 20.0ms |   9 → 2 | `__new__`  | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py` |

##### `<module>` (`/usr/lib/python3.11/hashlib.py`)

|  Change |    Delta |             % |         Time | Samples | Callee           | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | ---------------- | ------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `debug` (`/usr/lib/python3.11/logging/__init__.py`)

|  Change |    Delta |             % |         Time | Samples | Callee         | Location                                  |
| ------: | -------: | ------------: | -----------: | ------: | -------------- | ----------------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `isEnabledFor` | `/usr/lib/python3.11/logging/__init__.py` |

##### `_type_check` (`/usr/lib/python3.11/typing.py`)

|  Change |    Delta |             % |         Time | Samples | Callee   | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | -------- | ------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `__eq__` | `/usr/lib/python3.11/typing.py` |

##### `<genexpr>` (`/usr/lib/python3.11/typing.py`)

|  Change |    Delta |             % |         Time | Samples | Callee        | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | ------------- | ------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `_type_check` | `/usr/lib/python3.11/typing.py` |

##### `__getitem__` (`/usr/lib/python3.11/typing.py`)

|  Change |    Delta |             % |         Time | Samples | Callee      | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | ----------- | ------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `<genexpr>` | `/usr/lib/python3.11/typing.py` |

##### `inner` (`/usr/lib/python3.11/typing.py`)

|  Change |    Delta |             % |         Time | Samples | Callee        | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | ------------- | ------------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `__getitem__` | `/usr/lib/python3.11/typing.py` |

##### `__init__` (`<string>`)

|  Change |    Delta |            % |         Time | Samples | Callee     | Location   |
| ------: | -------: | -----------: | -----------: | ------: | ---------- | ---------- |
| removed | -40.00ms | 80.0% → 0.0% | 40.0ms → 0ms |   4 → 0 | `__init__` | `<string>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

Common call stack: `_run_module_as_main` (`<frozen runpy>`)

|  Change |    Delta |           % |              Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | -------: | ----------: | ----------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +88.9% | +80.00ms | 3.9% → 9.0% |  90.0ms → 170.0ms |  9 → 17 | `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +800.0% | +80.00ms | 0.4% → 4.8% |   10.0ms → 90.0ms |   1 → 9 | `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| +166.7% | +50.00ms | 1.3% → 4.3% |   30.0ms → 80.0ms |   3 → 8 | `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| +166.7% | +50.00ms | 1.3% → 4.3% |   30.0ms → 80.0ms |   3 → 8 | `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|     new | +40.00ms | 0.0% → 2.1% |      0ms → 40.0ms |   0 → 4 | `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new | +30.00ms | 0.0% → 1.6% |      0ms → 30.0ms |   0 → 3 | `addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|     new | +30.00ms | 0.0% → 1.6% |      0ms → 30.0ms |   0 → 3 | `is_multiline_string` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `normalize_invisible_parens` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new | +30.00ms | 0.0% → 1.6% |      0ms → 30.0ms |   0 → 3 | `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +66.7% | +20.00ms | 1.3% → 2.7% |   30.0ms → 50.0ms |   3 → 5 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                 |
|     new | +20.00ms | 0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new | +20.00ms | 0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `changed` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `prefix` ← `normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `generate_comments` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                           |
|     new | +20.00ms | 0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `normalize_string_prefix` (`/venv/lib/python3.11/site-packages/black/strings.py`) ← `visit_STRING` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`) |
|     new | +20.00ms | 0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                       |
|     new | +20.00ms | 0.0% → 1.1% |      0ms → 20.0ms |   0 → 2 | `hug_power_op` (`/venv/lib/python3.11/site-packages/black/trans.py`) ← `run_transformer` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `transform_line` ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +200.0% | +20.00ms | 0.4% → 1.6% |   10.0ms → 30.0ms |   1 → 3 | `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|   +6.3% | +10.00ms | 7.0% → 9.0% | 160.0ms → 170.0ms | 16 → 17 | `parse` (`/usr/lib/python3.11/ast.py`) ← `_parse_single_version` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `parse_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +16.7% | +10.00ms | 2.6% → 3.7% |   60.0ms → 70.0ms |   6 → 7 | `generate_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py`) ← `__next__` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_tokens` ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| +100.0% | +10.00ms | 0.4% → 1.1% |   10.0ms → 20.0ms |   1 → 2 | `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`) ← `append` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence` ← `format_file_contents` ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>`) ← `get_code` ← `exec_module` ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/venv/lib/python3.11/site-packages/packaging/_ranges.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/venv/lib/python3.11/site-packages/black/files.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|     new | +10.00ms | 0.0% → 0.5% |      0ms → 10.0ms |   0 → 1 | `__new__` (`<frozen abc>`) ← `<module>` (`/usr/lib/python3.11/selectors.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/usr/lib/python3.11/subprocess.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/venv/lib/python3.11/site-packages/packaging/tags.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/venv/lib/python3.11/site-packages/packaging/utils.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/venv/lib/python3.11/site-packages/packaging/specifiers.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/venv/lib/python3.11/site-packages/black/files.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

Common call stack: `format_file_contents` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_file_in_place` ← `reformat_one` ← `main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `patched_main` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main`

|  Change |     Delta |           % |              Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------: | --------: | ----------: | ----------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -45.5% | -100.00ms | 9.6% → 6.4% | 220.0ms → 120.0ms | 22 → 12 | `_addtoken` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |  -60.00ms | 2.6% → 0.0% |      60.0ms → 0ms |   6 → 0 | `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -46.2% |  -60.00ms | 5.7% → 3.7% |  130.0ms → 70.0ms |  13 → 7 | `generate_comments` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -66.7% |  -40.00ms | 2.6% → 1.1% |   60.0ms → 20.0ms |   6 → 2 | `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -75.0% |  -30.00ms | 1.8% → 0.5% |   40.0ms → 10.0ms |   4 → 1 | `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `shift` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed |  -30.00ms | 1.3% → 0.0% |      30.0ms → 0ms |   3 → 0 | `maybe_empty_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed |  -30.00ms | 1.3% → 0.0% |      30.0ms → 0ms |   3 → 0 | `mark` (`/venv/lib/python3.11/site-packages/black/brackets.py`) ← `append` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |  -30.00ms | 1.3% → 0.0% |      30.0ms → 0ms |   3 → 0 | `__init__` (`/venv/lib/python3.11/site-packages/black/trans.py`) ← `transform_line` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed |  -30.00ms | 1.3% → 0.0% |      30.0ms → 0ms |   3 → 0 | `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |  -30.00ms | 1.3% → 0.0% |      30.0ms → 0ms |   3 → 0 | `_stringify_ast` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `_stringify_ast_with_new_parent` ← `_stringify_ast` ← `assert_equivalent` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed |  -30.00ms | 1.3% → 0.0% |      30.0ms → 0ms |   3 → 0 | `push` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `assert_stable` ← `check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |  -20.00ms | 0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `__init__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `convert` ← `pop` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`) ← `_addtoken` ← `addtoken` ← `parse_tokens` (`/venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py`) ← `parse_string` ← `lib2to3_parse` (`/venv/lib/python3.11/site-packages/black/parsing.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed |  -20.00ms | 0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `pre_order` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `pre_order` ← `pre_order` ← `pre_order` ← `pre_order` ← `pre_order` ← `pre_order` ← `pre_order` ← `pre_order` ← `pre_order` ← `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |  -20.00ms | 0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `convert_one_fmt_off_pair` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `normalize_fmt_off` ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed |  -20.00ms | 0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `changed` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `changed` ← `prefix` ← `normalize_trailing_prefix` (`/venv/lib/python3.11/site-packages/black/comments.py`) ← `generate_comments` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_power` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str` |
| removed |  -20.00ms | 0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `__init__` (`<string>`) ← `__init__` ← `line` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed |  -20.00ms | 0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `is_docstring` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `_maybe_empty_lines` ← `maybe_empty_lines` ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |  -20.00ms | 0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_simple_stmt` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_stmt` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit_suite` ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_funcdef` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `visit_default` ← `visit_default` (`/venv/lib/python3.11/site-packages/black/linegen.py`) ← `visit` (`/venv/lib/python3.11/site-packages/black/nodes.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |  -20.00ms | 0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `all_lines` (`/venv/lib/python3.11/site-packages/black/lines.py`) ← `_format_str_once` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |  -20.00ms | 0.9% → 0.0% |      20.0ms → 0ms |   2 → 0 | `pre_order` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`) ← `pre_order` ← `pre_order` ← `pre_order` ← `pre_order` ← `pre_order` ← `pre_order` ← `get_features_used` (`/venv/lib/python3.11/site-packages/black/__init__.py`) ← `detect_target_versions` ← `_format_str_once` ← `format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

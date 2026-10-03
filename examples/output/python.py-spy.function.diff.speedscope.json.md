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

Functions with the largest increase in time spent directly in the function body, excluding callees.

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

Functions with the largest decrease in time spent directly in the function body, excluding callees.

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

|  Change |    Delta |             % |         Time | Samples | Location                                                         |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------------------- |
|     new | +90.00ms | 0.0% → 100.0% | 0ms → 90.0ms |   0 → 9 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:386` |
| removed | -30.00ms | 100.0% → 0.0% | 30.0ms → 0ms |   3 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:398` |

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

|  Change |    Delta |             % |         Time | Samples | Location                                                         |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------------------- |
|     new | +80.00ms | 0.0% → 100.0% | 0ms → 80.0ms |   0 → 8 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:374` |
| removed | -60.00ms | 100.0% → 0.0% | 60.0ms → 0ms |   6 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:386` |

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

|  Change |    Delta |             % |         Time | Samples | Location                                                         |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------------------- |
|     new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:361` |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:373` |

##### `visit_power` (`/venv/lib/python3.11/site-packages/black/linegen.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                  |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/black/linegen.py:341` |

##### `prev_sibling` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                    |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------- |
|     new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:196` |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:207` |

##### `check_stability_and_equivalence` (`/venv/lib/python3.11/site-packages/black/__init__.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                    |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/black/__init__.py:1042` |

##### `get_string_prefix` (`/venv/lib/python3.11/site-packages/black/strings.py`)

| Change |    Delta |             % |         Time | Samples | Location                                                 |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/black/strings.py:89` |

##### `is_comment` (`/venv/lib/python3.11/site-packages/black/lines.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------- |
|     new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/black/lines.py:113` |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |   1 → 0 | `/venv/lib/python3.11/site-packages/black/lines.py:124` |

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

|  Change |    Delta |             % |         Time | Samples | Location                                                    |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------- |
| removed | -60.00ms |  75.0% → 0.0% | 60.0ms → 0ms |   6 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:400` |
| removed | -20.00ms |  25.0% → 0.0% | 20.0ms → 0ms |   2 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:248` |
|     new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:389` |

##### `__new__` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                   |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------------------------------- |
| removed | -90.00ms | 100.0% → 0.0% | 90.0ms → 0ms |   9 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:81` |
|     new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:70` |

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

|  Change |     Delta |             % |          Time | Samples | Location                                                         |
| ------: | --------: | ------------: | ------------: | ------: | ---------------------------------------------------------------- |
| removed | -310.00ms | 100.0% → 0.0% | 310.0ms → 0ms |  31 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:290` |
|     new | +290.00ms | 0.0% → 100.0% | 0ms → 290.0ms |  0 → 29 | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:278` |

##### `pre_order` (`/venv/lib/python3.11/site-packages/blib2to3/pytree.py`)

|  Change |    Delta |             % |         Time | Samples | Location                                                    |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------- |
| removed | -40.00ms | 100.0% → 0.0% | 40.0ms → 0ms |   4 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:314` |
|     new | +20.00ms | 0.0% → 100.0% | 0ms → 20.0ms |   0 → 2 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:303` |

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

|  Change |    Delta |             % |         Time | Samples | Location                                                    |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------------------------------- |
| removed | -30.00ms | 100.0% → 0.0% | 30.0ms → 0ms |   3 → 0 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:486` |
|     new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |   0 → 1 | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py:475` |

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

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

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

Functions with the largest decrease in total time spent in the function and all its callees.

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

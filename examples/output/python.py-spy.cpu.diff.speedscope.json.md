# Sampling profile diff

Took 1.79s → 1.90s (+110.00ms, +6.1%) over 179 samples → 190 samples (10.0ms per sample).

| Category    |  Change |    Delta |             % |              Time |   Samples |
| ----------- | ------: | -------: | ------------: | ----------------: | --------: |
| third-party |   +3.0% | +50.00ms | 92.2% → 89.5% |     1.65s → 1.70s | 165 → 170 |
| stdlib      |  +15.4% | +20.00ms |   7.3% → 7.9% | 130.0ms → 150.0ms |   13 → 15 |
| ours        | +400.0% | +40.00ms |   0.6% → 2.6% |   10.0ms → 50.0ms |     1 → 5 |

Hidden functions account for 99.4% of time spent, so the hottest are also shown.

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |    Delta |           % |              Time | Samples | Function            | Location                                                        |
| ------: | -------: | ----------: | ----------------: | ------: | ------------------- | --------------------------------------------------------------- |
|  +85.7% | +60.00ms | 3.9% → 6.8% |  70.0ms → 130.0ms |  7 → 13 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py`          |
| +133.3% | +40.00ms | 1.7% → 3.7% |   30.0ms → 70.0ms |   3 → 7 | `__init__`          | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| +400.0% | +40.00ms | 0.6% → 2.6% |   10.0ms → 50.0ms |   1 → 5 | `__init__`          | `<string>`                                                      |
|  +75.0% | +30.00ms | 2.2% → 3.7% |   40.0ms → 70.0ms |   4 → 7 | `mark`              | `/venv/lib/python3.11/site-packages/black/brackets.py`          |
|  +75.0% | +30.00ms | 2.2% → 3.7% |   40.0ms → 70.0ms |   4 → 7 | `(anonymous)`       | `<unknown>`                                                     |
|  +15.4% | +20.00ms | 7.3% → 7.9% | 130.0ms → 150.0ms | 13 → 15 | `generate_tokens`   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|  +33.3% | +20.00ms | 3.4% → 4.2% |   60.0ms → 80.0ms |   6 → 8 | `visit`             | `/venv/lib/python3.11/site-packages/black/nodes.py`             |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

| Change |    Delta |            % |              Time | Samples | Function        | Location                                                     |
| -----: | -------: | -----------: | ----------------: | ------: | --------------- | ------------------------------------------------------------ |
| -36.8% | -70.00ms | 10.6% → 6.3% | 190.0ms → 120.0ms | 19 → 12 | `_addtoken`     | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
| -50.0% | -40.00ms |  4.5% → 2.1% |   80.0ms → 40.0ms |   8 → 4 | `<genexpr>`     | `/venv/lib/python3.11/site-packages/black/lines.py`          |
| -37.5% | -30.00ms |  4.5% → 2.6% |   80.0ms → 50.0ms |   8 → 5 | `pop`           | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
| -18.2% | -20.00ms |  6.1% → 4.7% |  110.0ms → 90.0ms |  11 → 9 | `visit_default` | `/venv/lib/python3.11/site-packages/black/linegen.py`        |
| -22.2% | -20.00ms |  5.0% → 3.7% |   90.0ms → 70.0ms |   9 → 7 | `parse`         | `/usr/lib/python3.11/ast.py`                                 |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time | Samples | Function            | Location                                                        |
| ------: | -------: | ------------: | ----------------: | ------: | ------------------- | --------------------------------------------------------------- |
|  +40.0% | +60.00ms |  8.4% → 11.1% | 150.0ms → 210.0ms | 15 → 21 | `generate_comments` | `/venv/lib/python3.11/site-packages/black/comments.py`          |
|   +6.9% | +50.00ms | 40.2% → 40.5% | 720.0ms → 770.0ms | 72 → 77 | `visit_default`     | `/venv/lib/python3.11/site-packages/black/linegen.py`           |
|   +6.9% | +50.00ms | 40.2% → 40.5% | 720.0ms → 770.0ms | 72 → 77 | `visit`             | `/venv/lib/python3.11/site-packages/black/nodes.py`             |
| +133.3% | +40.00ms |   1.7% → 3.7% |   30.0ms → 70.0ms |   3 → 7 | `__init__`          | `/venv/lib/python3.11/site-packages/blib2to3/pytree.py`         |
| +400.0% | +40.00ms |   0.6% → 2.6% |   10.0ms → 50.0ms |   1 → 5 | `__init__`          | `<string>`                                                      |
|  +75.0% | +30.00ms |   2.2% → 3.7% |   40.0ms → 70.0ms |   4 → 7 | `(anonymous)`       | `<unknown>`                                                     |
|  +13.3% | +20.00ms |   8.4% → 8.9% | 150.0ms → 170.0ms | 15 → 17 | `generate_tokens`   | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py` |
|  +16.7% | +20.00ms |   6.7% → 7.4% | 120.0ms → 140.0ms | 12 → 14 | `pop`               | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py`    |
|  +33.3% | +20.00ms |   3.4% → 4.2% |   60.0ms → 80.0ms |   6 → 8 | `mark`              | `/venv/lib/python3.11/site-packages/black/brackets.py`          |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |    Delta |             % |              Time | Samples | Function    | Location                                                     |
| -----: | -------: | ------------: | ----------------: | ------: | ----------- | ------------------------------------------------------------ |
| -11.6% | -50.00ms | 24.0% → 20.0% | 430.0ms → 380.0ms | 43 → 38 | `_addtoken` | `/venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py` |
| -50.0% | -40.00ms |   4.5% → 2.1% |   80.0ms → 40.0ms |   8 → 4 | `<genexpr>` | `/venv/lib/python3.11/site-packages/black/lines.py`          |
| -22.2% | -20.00ms |   5.0% → 3.7% |   90.0ms → 70.0ms |   9 → 7 | `parse`     | `/usr/lib/python3.11/ast.py`                                 |

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

##### Ours

|  Change |    Delta |           % |            Time | Samples | Function   | Location   |
| ------: | -------: | ----------: | --------------: | ------: | ---------- | ---------- |
| +400.0% | +40.00ms | 0.6% → 2.6% | 10.0ms → 50.0ms |   1 → 5 | `__init__` | `<string>` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

##### Ours

|  Change |    Delta |           % |            Time | Samples | Function   | Location   |
| ------: | -------: | ----------: | --------------: | ------: | ---------- | ---------- |
| +400.0% | +40.00ms | 0.6% → 2.6% | 10.0ms → 50.0ms |   1 → 5 | `__init__` | `<string>` |

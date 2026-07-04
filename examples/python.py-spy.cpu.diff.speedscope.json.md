# Sampling profile diff

Took 1.75s → 1.83s (+80.0ms, +4.6%) over 175 samples → 183 samples (10.0ms per sample).

| Category    |  Change |   Delta |             % |            Time |   Samples |
| ----------- | ------: | ------: | ------------: | --------------: | --------: |
| third-party |   +3.0% | +50.0ms | 94.3% → 92.9% |   1.65s → 1.70s | 165 → 170 |
| stdlib      |  -11.1% | -10.0ms |   5.1% → 4.4% | 90.0ms → 80.0ms |     9 → 8 |
| ours        | +400.0% | +40.0ms |   0.6% → 2.7% | 10.0ms → 50.0ms |     1 → 5 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |   Delta |           % |            Time | Samples | Function   | Location |
| ------: | ------: | ----------: | --------------: | ------: | ---------- | -------- |
| +400.0% | +40.0ms | 0.6% → 2.7% | 10.0ms → 50.0ms |   1 → 5 | `__init__` | <string> |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |   Delta |           % |            Time | Samples | Function   | Location |
| ------: | ------: | ----------: | --------------: | ------: | ---------- | -------- |
| +400.0% | +40.0ms | 0.6% → 2.7% | 10.0ms → 50.0ms |   1 → 5 | `__init__` | <string> |

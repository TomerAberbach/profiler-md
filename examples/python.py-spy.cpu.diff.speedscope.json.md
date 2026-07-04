# Sampling profile diff

Took 1.79s → 1.90s (+0.11s, +6.1%) over 179 samples → 190 samples (10.0ms per sample).

| Category    |  Change |   Delta |             % |              Time |   Samples |
| ----------- | ------: | ------: | ------------: | ----------------: | --------: |
| third-party |   +3.0% | +50.0ms | 92.2% → 89.5% |     1.65s → 1.70s | 165 → 170 |
| stdlib      |  +15.4% | +20.0ms |   7.3% → 7.9% | 130.0ms → 150.0ms |   13 → 15 |
| ours        | +400.0% | +40.0ms |   0.6% → 2.6% |   10.0ms → 50.0ms |     1 → 5 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |   Delta |           % |            Time | Samples | Function   | Location |
| ------: | ------: | ----------: | --------------: | ------: | ---------- | -------- |
| +400.0% | +40.0ms | 0.6% → 2.6% | 10.0ms → 50.0ms |   1 → 5 | `__init__` | <string> |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |   Delta |           % |            Time | Samples | Function   | Location |
| ------: | ------: | ----------: | --------------: | ------: | ---------- | -------- |
| +400.0% | +40.0ms | 0.6% → 2.6% | 10.0ms → 50.0ms |   1 → 5 | `__init__` | <string> |

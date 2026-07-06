# Sampling profile

Took 1.90s over 190 samples (10.0ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| third-party | 89.5% |   1.70s |     170 |
| stdlib      |  7.9% | 150.0ms |      15 |
| ours        |  2.6% |  50.0ms |       5 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function   | Location   |
| ---: | -----: | ------: | ---------- | ---------- |
| 2.6% | 50.0ms |       5 | `__init__` | `<string>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `__init__` (`<string>`)

|      % |   Time | Samples | Location     |
| -----: | -----: | ------: | ------------ |
| 100.0% | 50.0ms |       5 | `<string>:7` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|    % |   Time | Samples | Function   | Location   |
| ---: | -----: | ------: | ---------- | ---------- |
| 2.6% | 50.0ms |       5 | `__init__` | `<string>` |

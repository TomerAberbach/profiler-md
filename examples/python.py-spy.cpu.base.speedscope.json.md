# Sampling profile

Took 1.79s over 179 samples (10.0ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| third-party | 92.2% |   1.65s |     165 |
| stdlib      |  7.3% | 130.0ms |      13 |
| ours        |  0.6% |  10.0ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function   | Location |
| ---: | -----: | ------: | ---------- | -------- |
| 0.6% | 10.0ms |       1 | `__init__` | <string> |

#### Lines

Lines ranked by contribution to each function's self time.

##### `__init__` (<string>)

|      % |   Time | Samples | Location   |
| -----: | -----: | ------: | ---------- |
| 100.0% | 10.0ms |       1 | <string>:7 |

### Total time

Functions ranked by total time spent in the function and all its callees.

|    % |   Time | Samples | Function   | Location |
| ---: | -----: | ------: | ---------- | -------- |
| 0.6% | 10.0ms |       1 | `__init__` | <string> |

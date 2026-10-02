# Wall time profile diff

Took 19.8ms.

| Category         | Change | Delta |     % |   Time |
| ---------------- | -----: | ----: | ----: | -----: |
| Standard library |   0.0% |   0ms | 99.7% | 19.7ms |
| Ours             |   0.0% |   0ms |  0.2% | 31.0µs |
| Idle             |   0.0% |   0ms |  0.1% | 20.0µs |

## Hottest functions

### Self time

No function differed in wall time spent directly in the function body, excluding callees.

### Total time

#### Improvements

Functions with the largest decrease in total wall time spent in the function and all its callees.

##### Standard library

| Change |   Delta |     % |  Time | Function                | Location |
| -----: | ------: | ----: | ----: | ----------------------- | -------- |
|  -0.1% | -2.00µs | 10.3% | 2.0ms | `escape_binary_ascii/5` | `json`   |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `escape_binary_ascii/5` (`json`)

|  Change |   Delta |           % |        Time | Callee  | Location    |
| ------: | ------: | ----------: | ----------: | ------- | ----------- |
| removed | -2.00µs | 0.1% → 0.0% | 2.0µs → 0ms | `sleep` | `<unknown>` |

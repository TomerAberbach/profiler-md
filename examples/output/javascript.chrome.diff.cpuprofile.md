# CPU profile diff

Took 415.8ms → 420.7ms (+4.92ms, +1.2%) over 281 samples → 282 samples (1.5ms per sample).

| Category          | Change |   Delta |             % |              Time |   Samples |
| ----------------- | -----: | ------: | ------------: | ----------------: | --------: |
| ours              |  +0.1% | +0.17ms | 54.2% → 53.7% | 225.5ms → 225.7ms | 154 → 152 |
| program           |  -0.2% | -0.17ms | 16.7% → 16.5% |   69.6ms → 69.4ms |        46 |
| regexp            | +10.9% | +4.87ms | 10.7% → 11.8% |   44.7ms → 49.5ms |   30 → 33 |
| stdlib            |  -7.9% | -3.63ms | 11.0% → 10.1% |   45.9ms → 42.3ms |   31 → 29 |
| garbage collector | +11.4% | +2.37ms |   5.0% → 5.5% |   20.9ms → 23.2ms |   14 → 15 |
| idle              | +14.1% | +1.29ms |   2.2% → 2.5% |    9.2ms → 10.5ms |     6 → 7 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

| Change |   Delta |             % |              Time |   Samples | Function                       | Location             |
| -----: | ------: | ------------: | ----------------: | --------: | ------------------------------ | -------------------- |
| +10.9% | +4.87ms | 10.7% → 11.8% |   44.7ms → 49.5ms |   30 → 33 | `RegExp: \s+`                  | `<unknown>`          |
| +11.4% | +2.37ms |   5.0% → 5.5% |   20.9ms → 23.2ms |   14 → 15 | `(garbage collector)`          | `<unknown>`          |
| +12.3% | +1.83ms |   3.6% → 4.0% |   15.0ms → 16.8ms |   10 → 11 | `tokenize`                     | `workload.mjs:10:20` |
| +14.1% | +1.29ms |   2.2% → 2.5% |    9.2ms → 10.5ms |     6 → 7 | `(idle)`                       | `<unknown>`          |
|    ~0% | +0.09ms | 48.1% → 47.6% | 200.0ms → 200.1ms | 137 → 135 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |   Delta |             % |            Time | Samples | Function        | Location             |
| ------: | ------: | ------------: | --------------: | ------: | --------------- | -------------------- |
|   -7.9% | -3.63ms | 11.0% → 10.1% | 45.9ms → 42.3ms | 31 → 29 | `createElement` | `<unknown>`          |
| removed | -1.50ms |   0.4% → 0.0% |     1.5ms → 0ms |   1 → 0 | `scoreStatus`   | `workload.mjs:11:23` |
|   -2.8% | -0.25ms |   2.2% → 2.1% |   9.1ms → 8.8ms |       6 | `(anonymous)`   | `run.mjs:1:1`        |
|   -0.2% | -0.17ms | 16.7% → 16.5% | 69.6ms → 69.4ms |      46 | `(program)`     | `<unknown>`          |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |   Delta |             % |              Time |   Samples | Function                       | Location             |
| -----: | ------: | ------------: | ----------------: | --------: | ------------------------------ | -------------------- |
| +11.2% | +6.71ms | 14.3% → 15.8% |   59.6ms → 66.3ms |   40 → 44 | `tokenize`                     | `workload.mjs:10:20` |
|  +8.5% | +5.21ms | 14.7% → 15.8% |   61.1ms → 66.3ms |   41 → 44 | `scoreStatus`                  | `workload.mjs:11:23` |
| +10.9% | +4.87ms | 10.7% → 11.8% |   44.7ms → 49.5ms |   30 → 33 | `RegExp: \s+`                  | `<unknown>`          |
| +11.4% | +2.37ms |   5.0% → 5.5% |   20.9ms → 23.2ms |   14 → 15 | `(garbage collector)`          | `<unknown>`          |
|  +0.5% | +1.67ms | 73.9% → 73.4% | 307.0ms → 308.7ms | 209 → 208 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
|  +0.4% | +1.42ms | 76.0% → 75.5% | 316.1ms → 317.5ms | 215 → 214 | `(anonymous)`                  | `run.mjs:1:1`        |
| +14.1% | +1.29ms |   2.2% → 2.5% |    9.2ms → 10.5ms |     6 → 7 | `(idle)`                       | `<unknown>`          |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |   Delta |             % |            Time | Samples | Function        | Location    |
| -----: | ------: | ------------: | --------------: | ------: | --------------- | ----------- |
|  -7.9% | -3.63ms | 11.0% → 10.1% | 45.9ms → 42.3ms | 31 → 29 | `createElement` | `<unknown>` |
|  -0.2% | -0.17ms | 16.7% → 16.5% | 69.6ms → 69.4ms |      46 | `(program)`     | `<unknown>` |

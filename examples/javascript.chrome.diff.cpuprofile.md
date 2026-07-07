# CPU profile diff

Took 428.0ms → 422.0ms (-5.96ms, -1.4%) over 342 samples → 337 samples (1.3ms per sample).

| Category          | Change |    Delta |             % |              Time |   Samples |
| ----------------- | -----: | -------: | ------------: | ----------------: | --------: |
| ours              |  -7.8% | -17.82ms | 53.5% → 50.1% | 229.0ms → 211.2ms | 183 → 169 |
| stdlib            | +17.4% | +16.20ms | 21.7% → 25.9% |  93.0ms → 109.2ms |   75 → 87 |
| program           | -10.5% |  -8.21ms | 18.2% → 16.5% |   77.9ms → 69.7ms |   62 → 56 |
| garbage collector |  +7.4% |  +1.41ms |   4.4% → 4.8% |   19.0ms → 20.4ms |   15 → 16 |
| idle              | +27.3% |  +2.46ms |   2.1% → 2.7% |    9.0ms → 11.5ms |     7 → 9 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

| Change |    Delta |             % |            Time |   Samples | Function              | Location                   |
| -----: | -------: | ------------: | --------------: | --------: | --------------------- | -------------------------- |
|    new | +12.75ms |   0.0% → 3.0% |    0ms → 12.7ms |    0 → 10 | `tokenize`            | `<unknown>`                |
| +16.5% |  +7.46ms | 10.6% → 12.5% | 45.3ms → 52.7ms |   37 → 42 | `createElement`       | `<unknown>`                |
| +77.5% |  +3.87ms |   1.2% → 2.1% |   5.0ms → 8.9ms |     5 → 7 | `(anonymous)`         | `chrome-workload.mjs:1:1`  |
| +27.3% |  +2.46ms |   2.1% → 2.7% |  9.0ms → 11.5ms |     7 → 9 | `(idle)`              | `<unknown>`                |
|  +7.4% |  +1.41ms |   4.4% → 4.8% | 19.0ms → 20.4ms |   15 → 16 | `(garbage collector)` | `<unknown>`                |
| +93.5% |  +1.21ms |   0.3% → 0.6% |   1.3ms → 2.5ms |     1 → 2 | `scoreStatus`         | `chrome-workload.mjs:7:23` |
|    ~0% |  +0.05ms | 46.7% → 47.4% |         199.8ms | 159 → 160 | `(anonymous)`         | `chrome-workload.mjs:1:2`  |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |             % |            Time | Samples | Function      | Location                   |
| ------: | -------: | ------------: | --------------: | ------: | ------------- | -------------------------- |
| removed | -22.96ms |   5.4% → 0.0% |    23.0ms → 0ms |  18 → 0 | `tokenize`    | `chrome-workload.mjs:6:20` |
|  -10.5% |  -8.21ms | 18.2% → 16.5% | 77.9ms → 69.7ms | 62 → 56 | `(program)`   | `<unknown>`                |
|   -8.4% |  -4.00ms | 11.2% → 10.4% | 47.8ms → 43.7ms | 38 → 35 | `RegExp: \s+` | `<unknown>`                |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |    Delta |             % |            Time | Samples | Function              | Location    |
| -----: | -------: | ------------: | --------------: | ------: | --------------------- | ----------- |
|    new | +56.50ms |  0.0% → 13.4% |    0ms → 56.5ms |  0 → 45 | `tokenize`            | `<unknown>` |
| +16.5% |  +7.46ms | 10.6% → 12.5% | 45.3ms → 52.7ms | 37 → 42 | `createElement`       | `<unknown>` |
| +27.3% |  +2.46ms |   2.1% → 2.7% |  9.0ms → 11.5ms |   7 → 9 | `(idle)`              | `<unknown>` |
|  +7.4% |  +1.41ms |   4.4% → 4.8% | 19.0ms → 20.4ms | 15 → 16 | `(garbage collector)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time |   Samples | Function      | Location                   |
| ------: | -------: | ------------: | ----------------: | --------: | ------------- | -------------------------- |
| removed | -70.71ms |  16.5% → 0.0% |      70.7ms → 0ms |    56 → 0 | `tokenize`    | `chrome-workload.mjs:6:20` |
|  -18.1% | -13.00ms | 16.8% → 14.0% |   72.0ms → 59.0ms |   57 → 47 | `scoreStatus` | `chrome-workload.mjs:7:23` |
|  -10.5% |  -8.21ms | 18.2% → 16.5% |   77.9ms → 69.7ms |   62 → 56 | `(program)`   | `<unknown>`                |
|   -1.7% |  -5.50ms | 74.1% → 73.8% | 317.1ms → 311.6ms | 253 → 249 | `(anonymous)` | `chrome-workload.mjs:1:2`  |
|   -8.4% |  -4.00ms | 11.2% → 10.4% |   47.8ms → 43.7ms |   38 → 35 | `RegExp: \s+` | `<unknown>`                |
|   -0.5% |  -1.62ms | 75.3% → 75.9% | 322.1ms → 320.5ms | 258 → 256 | `(anonymous)` | `chrome-workload.mjs:1:1`  |

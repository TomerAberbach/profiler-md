# CPU profile diff

Took 461.2ms → 415.7ms (-45.46ms, -9.9%) over 368 samples → 332 samples (1.3ms per sample).

| Category           | Change |    Delta |             % |              Time |   Samples |
| ------------------ | -----: | -------: | ------------: | ----------------: | --------: |
| Ours               |  -0.8% |  -1.79ms | 50.2% → 55.2% | 231.3ms → 229.5ms | 185 → 184 |
| Native             | -22.6% | -36.17ms | 34.7% → 29.8% | 160.0ms → 123.9ms |  128 → 98 |
| Regular expression | -21.1% |  -9.04ms |   9.3% → 8.1% |   42.9ms → 33.9ms |   34 → 27 |
| Garbage collector  |  +5.5% |  +1.00ms |   3.9% → 4.6% |   18.0ms → 19.0ms |   14 → 15 |
| Idle               |  +6.1% |  +0.54ms |   1.9% → 2.3% |     8.9ms → 9.5ms |     7 → 8 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

| Change |    Delta |             % |              Time |   Samples | Function                       | Location            |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------ | ------------------- |
| +34.1% | +14.21ms |  9.0% → 13.4% |   41.7ms → 55.9ms |   33 → 45 | `createElement`                | `<unknown>`         |
|  +6.8% | +13.34ms | 42.3% → 50.1% | 195.1ms → 208.5ms | 156 → 167 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |
|  +5.5% |  +1.00ms |   3.9% → 4.6% |   18.0ms → 19.0ms |   14 → 15 | `(garbage collector)`          | `<unknown>`         |
|  +9.5% |  +0.96ms |   2.2% → 2.7% |   10.1ms → 11.0ms |     8 → 9 | `(anonymous)`                  | `run.mjs:1:1`       |
|  +6.1% |  +0.54ms |   1.9% → 2.3% |     8.9ms → 9.5ms |     7 → 8 | `(idle)`                       | `<unknown>`         |

##### Ours

| Change |    Delta |             % |              Time |   Samples | Function                       | Location            |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------ | ------------------- |
|  +6.8% | +13.34ms | 42.3% → 50.1% | 195.1ms → 208.5ms | 156 → 167 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |
|  +9.5% |  +0.96ms |   2.2% → 2.7% |   10.1ms → 11.0ms |     8 → 9 | `(anonymous)`                  | `run.mjs:1:1`       |

##### Native

| Change |    Delta |            % |            Time | Samples | Function        | Location    |
| -----: | -------: | -----------: | --------------: | ------: | --------------- | ----------- |
| +34.1% | +14.21ms | 9.0% → 13.4% | 41.7ms → 55.9ms | 33 → 45 | `createElement` | `<unknown>` |

##### Garbage collector

| Change |   Delta |           % |            Time | Samples | Function              | Location    |
| -----: | ------: | ----------: | --------------: | ------: | --------------------- | ----------- |
|  +5.5% | +1.00ms | 3.9% → 4.6% | 18.0ms → 19.0ms | 14 → 15 | `(garbage collector)` | `<unknown>` |

##### Idle

| Change |   Delta |           % |          Time | Samples | Function | Location    |
| -----: | ------: | ----------: | ------------: | ------: | -------- | ----------- |
|  +6.1% | +0.54ms | 1.9% → 2.3% | 8.9ms → 9.5ms |   7 → 8 | `(idle)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

| Change |    Delta |             % |             Time | Samples | Function      | Location             |
| -----: | -------: | ------------: | ---------------: | ------: | ------------- | -------------------- |
| -42.6% | -50.38ms | 25.7% → 16.4% | 118.4ms → 68.0ms | 95 → 53 | `(program)`   | `<unknown>`          |
| -64.7% | -13.79ms |   4.6% → 1.8% |   21.3ms → 7.5ms |  17 → 6 | `tokenize`    | `workload.mjs:10:20` |
| -21.1% |  -9.04ms |   9.3% → 8.1% |  42.9ms → 33.9ms | 34 → 27 | `RegExp: \s+` | `<unknown>`          |
| -48.3% |  -2.29ms |   1.0% → 0.6% |    4.8ms → 2.5ms |   4 → 2 | `scoreStatus` | `workload.mjs:11:23` |

##### Ours

| Change |    Delta |           % |           Time | Samples | Function      | Location             |
| -----: | -------: | ----------: | -------------: | ------: | ------------- | -------------------- |
| -64.7% | -13.79ms | 4.6% → 1.8% | 21.3ms → 7.5ms |  17 → 6 | `tokenize`    | `workload.mjs:10:20` |
| -48.3% |  -2.29ms | 1.0% → 0.6% |  4.8ms → 2.5ms |   4 → 2 | `scoreStatus` | `workload.mjs:11:23` |

##### Native

| Change |    Delta |             % |             Time | Samples | Function    | Location    |
| -----: | -------: | ------------: | ---------------: | ------: | ----------- | ----------- |
| -42.6% | -50.38ms | 25.7% → 16.4% | 118.4ms → 68.0ms | 95 → 53 | `(program)` | `<unknown>` |

##### Regular expression

| Change |   Delta |           % |            Time | Samples | Function      | Location    |
| -----: | ------: | ----------: | --------------: | ------: | ------------- | ----------- |
| -21.1% | -9.04ms | 9.3% → 8.1% | 42.9ms → 33.9ms | 34 → 27 | `RegExp: \s+` | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |    Delta |             % |              Time |   Samples | Function                       | Location            |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------ | ------------------- |
| +34.1% | +14.21ms |  9.0% → 13.4% |   41.7ms → 55.9ms |   33 → 45 | `createElement`                | `<unknown>`         |
|  +1.1% |  +3.38ms | 68.5% → 76.8% | 315.9ms → 319.3ms | 252 → 256 | `(anonymous)`                  | `run.mjs:1:1`       |
|  +0.8% |  +2.42ms | 66.3% → 74.1% | 305.8ms → 308.2ms | 244 → 247 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |
|  +5.5% |  +1.00ms |   3.9% → 4.6% |   18.0ms → 19.0ms |   14 → 15 | `(garbage collector)`          | `<unknown>`         |
|  +6.1% |  +0.54ms |   1.9% → 2.3% |     8.9ms → 9.5ms |     7 → 8 | `(idle)`                       | `<unknown>`         |

##### Ours

| Change |   Delta |             % |              Time |   Samples | Function                       | Location            |
| -----: | ------: | ------------: | ----------------: | --------: | ------------------------------ | ------------------- |
|  +1.1% | +3.38ms | 68.5% → 76.8% | 315.9ms → 319.3ms | 252 → 256 | `(anonymous)`                  | `run.mjs:1:1`       |
|  +0.8% | +2.42ms | 66.3% → 74.1% | 305.8ms → 308.2ms | 244 → 247 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### Native

| Change |    Delta |            % |            Time | Samples | Function        | Location    |
| -----: | -------: | -----------: | --------------: | ------: | --------------- | ----------- |
| +34.1% | +14.21ms | 9.0% → 13.4% | 41.7ms → 55.9ms | 33 → 45 | `createElement` | `<unknown>` |

##### Garbage collector

| Change |   Delta |           % |            Time | Samples | Function              | Location    |
| -----: | ------: | ----------: | --------------: | ------: | --------------------- | ----------- |
|  +5.5% | +1.00ms | 3.9% → 4.6% | 18.0ms → 19.0ms | 14 → 15 | `(garbage collector)` | `<unknown>` |

##### Idle

| Change |   Delta |           % |          Time | Samples | Function | Location    |
| -----: | ------: | ----------: | ------------: | ------: | -------- | ----------- |
|  +6.1% | +0.54ms | 1.9% → 2.3% | 8.9ms → 9.5ms |   7 → 8 | `(idle)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |    Delta |             % |             Time | Samples | Function      | Location             |
| -----: | -------: | ------------: | ---------------: | ------: | ------------- | -------------------- |
| -42.6% | -50.38ms | 25.7% → 16.4% | 118.4ms → 68.0ms | 95 → 53 | `(program)`   | `<unknown>`          |
| -39.4% | -25.34ms |  13.9% → 9.4% |  64.3ms → 38.9ms | 51 → 31 | `tokenize`    | `workload.mjs:10:20` |
| -36.4% | -25.13ms | 15.0% → 10.6% |  69.0ms → 43.9ms | 55 → 35 | `scoreStatus` | `workload.mjs:11:23` |
| -21.1% |  -9.04ms |   9.3% → 8.1% |  42.9ms → 33.9ms | 34 → 27 | `RegExp: \s+` | `<unknown>`          |

##### Ours

| Change |    Delta |             % |            Time | Samples | Function      | Location             |
| -----: | -------: | ------------: | --------------: | ------: | ------------- | -------------------- |
| -39.4% | -25.34ms |  13.9% → 9.4% | 64.3ms → 38.9ms | 51 → 31 | `tokenize`    | `workload.mjs:10:20` |
| -36.4% | -25.13ms | 15.0% → 10.6% | 69.0ms → 43.9ms | 55 → 35 | `scoreStatus` | `workload.mjs:11:23` |

##### Native

| Change |    Delta |             % |             Time | Samples | Function    | Location    |
| -----: | -------: | ------------: | ---------------: | ------: | ----------- | ----------- |
| -42.6% | -50.38ms | 25.7% → 16.4% | 118.4ms → 68.0ms | 95 → 53 | `(program)` | `<unknown>` |

##### Regular expression

| Change |   Delta |           % |            Time | Samples | Function      | Location    |
| -----: | ------: | ----------: | --------------: | ------: | ------------- | ----------- |
| -21.1% | -9.04ms | 9.3% → 8.1% | 42.9ms → 33.9ms | 34 → 27 | `RegExp: \s+` | `<unknown>` |

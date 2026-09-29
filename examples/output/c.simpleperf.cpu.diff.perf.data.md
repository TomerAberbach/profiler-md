# CPU profile diff

Took 1.88s → 1.60s (-279.28ms, -14.8%) over 1,887 samples → 1,608 samples (1.0ms per sample).

| Category |  Change |     Delta |           % |          Time |       Samples |
| -------- | ------: | --------: | ----------: | ------------: | ------------: |
| Ours     |  -14.8% | -278.28ms |       99.8% | 1.88s → 1.60s | 1,883 → 1,605 |
| Kernel   | +100.0% |   +1.00ms |        0.1% | 1.0ms → 2.0ms |         1 → 2 |
| Native   |  -66.7% |   -2.00ms | 0.2% → 0.1% | 3.0ms → 1.0ms |         3 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

##### Ours

| Change |     Delta |            % |          Time | Samples | Function  | Location |
| -----: | --------: | -----------: | ------------: | ------: | --------- | -------- |
|    new | +278.28ms | 0.0% → 17.3% | 0ms → 278.3ms | 0 → 278 | `0x60980` | `zstd`   |
|    new | +277.28ms | 0.0% → 17.2% | 0ms → 277.3ms | 0 → 277 | `0x609c8` | `zstd`   |
|    new | +225.23ms | 0.0% → 14.0% | 0ms → 225.2ms | 0 → 225 | `0x60c38` | `zstd`   |
|    new | +218.22ms | 0.0% → 13.6% | 0ms → 218.2ms | 0 → 218 | `0x60c5c` | `zstd`   |
|    new |  +57.06ms |  0.0% → 3.5% |  0ms → 57.1ms |  0 → 57 | `0x609b8` | `zstd`   |
|    new |  +48.05ms |  0.0% → 3.0% |  0ms → 48.0ms |  0 → 48 | `0x5a65c` | `zstd`   |
|    new |  +43.04ms |  0.0% → 2.7% |  0ms → 43.0ms |  0 → 43 | `0x60c90` | `zstd`   |
|    new |  +30.03ms |  0.0% → 1.9% |  0ms → 30.0ms |  0 → 30 | `0x5a7c0` | `zstd`   |
|    new |  +28.03ms |  0.0% → 1.7% |  0ms → 28.0ms |  0 → 28 | `0x5a85c` | `zstd`   |
|    new |  +23.02ms |  0.0% → 1.4% |  0ms → 23.0ms |  0 → 23 | `0x5a78c` | `zstd`   |
|    new |  +19.02ms |  0.0% → 1.2% |  0ms → 19.0ms |  0 → 19 | `0x60a08` | `zstd`   |
|    new |  +19.02ms |  0.0% → 1.2% |  0ms → 19.0ms |  0 → 19 | `0x609ec` | `zstd`   |
|    new |  +16.02ms |  0.0% → 1.0% |  0ms → 16.0ms |  0 → 16 | `0x5a838` | `zstd`   |
|    new |  +14.01ms |  0.0% → 0.9% |  0ms → 14.0ms |  0 → 14 | `0x609bc` | `zstd`   |
|    new |  +12.01ms |  0.0% → 0.7% |  0ms → 12.0ms |  0 → 12 | `0x60978` | `zstd`   |
|    new |  +10.01ms |  0.0% → 0.6% |  0ms → 10.0ms |  0 → 10 | `0x5a770` | `zstd`   |
|    new |  +10.01ms |  0.0% → 0.6% |  0ms → 10.0ms |  0 → 10 | `0x5a874` | `zstd`   |
|    new |  +10.01ms |  0.0% → 0.6% |  0ms → 10.0ms |  0 → 10 | `0x609d4` | `zstd`   |
|    new |   +9.01ms |  0.0% → 0.6% |   0ms → 9.0ms |   0 → 9 | `0x5a7a8` | `zstd`   |
|    new |   +8.01ms |  0.0% → 0.5% |   0ms → 8.0ms |   0 → 8 | `0x60acc` | `zstd`   |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

##### Ours

|  Change |     Delta |            % |          Time | Samples | Function  | Location |
| ------: | --------: | -----------: | ------------: | ------: | --------- | -------- |
| removed | -296.30ms | 15.7% → 0.0% | 296.3ms → 0ms | 296 → 0 | `0x5f800` | `zstd`   |
| removed | -296.30ms | 15.7% → 0.0% | 296.3ms → 0ms | 296 → 0 | `0x5f848` | `zstd`   |
| removed | -292.29ms | 15.5% → 0.0% | 292.3ms → 0ms | 292 → 0 | `0x5fab8` | `zstd`   |
| removed | -249.25ms | 13.2% → 0.0% | 249.2ms → 0ms | 249 → 0 | `0x5fadc` | `zstd`   |
| removed |  -99.10ms |  5.2% → 0.0% |  99.1ms → 0ms |  99 → 0 | `0x5f838` | `zstd`   |
| removed |  -52.05ms |  2.8% → 0.0% |  52.1ms → 0ms |  52 → 0 | `0x5fb10` | `zstd`   |
| removed |  -43.04ms |  2.3% → 0.0% |  43.0ms → 0ms |  43 → 0 | `0x594d8` | `zstd`   |
| removed |  -42.04ms |  2.2% → 0.0% |  42.0ms → 0ms |  42 → 0 | `0x59640` | `zstd`   |
| removed |  -33.03ms |  1.7% → 0.0% |  33.0ms → 0ms |  33 → 0 | `0x596dc` | `zstd`   |
| removed |  -32.03ms |  1.7% → 0.0% |  32.0ms → 0ms |  32 → 0 | `0x5f86c` | `zstd`   |
| removed |  -25.03ms |  1.3% → 0.0% |  25.0ms → 0ms |  25 → 0 | `0x5960c` | `zstd`   |
| removed |  -20.02ms |  1.1% → 0.0% |  20.0ms → 0ms |  20 → 0 | `0x596b8` | `zstd`   |
| removed |  -18.02ms |  1.0% → 0.0% |  18.0ms → 0ms |  18 → 0 | `0x5f7e0` | `zstd`   |
| removed |  -15.02ms |  0.8% → 0.0% |  15.0ms → 0ms |  15 → 0 | `0x591d0` | `zstd`   |
| removed |  -15.02ms |  0.8% → 0.0% |  15.0ms → 0ms |  15 → 0 | `0x5f888` | `zstd`   |
| removed |  -13.01ms |  0.7% → 0.0% |  13.0ms → 0ms |  13 → 0 | `0x577d4` | `zstd`   |
| removed |  -13.01ms |  0.7% → 0.0% |  13.0ms → 0ms |  13 → 0 | `0x596f4` | `zstd`   |
| removed |  -13.01ms |  0.7% → 0.0% |  13.0ms → 0ms |  13 → 0 | `0x5f854` | `zstd`   |
| removed |  -13.01ms |  0.7% → 0.0% |  13.0ms → 0ms |  13 → 0 | `0x5fb08` | `zstd`   |
| removed |  -11.01ms |  0.6% → 0.0% |  11.0ms → 0ms |  11 → 0 | `0x5f820` | `zstd`   |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

##### Ours

| Change |     Delta |            % |          Time |   Samples | Function  | Location |
| -----: | --------: | -----------: | ------------: | --------: | --------- | -------- |
|    new |   +1.607s | 0.0% → 99.9% |   0ms → 1.60s | 0 → 1,606 | `0x9f1e`  | `zstd`   |
|    new |   +1.596s | 0.0% → 99.2% |   0ms → 1.59s | 0 → 1,595 | `0x1162e` | `zstd`   |
|    new |   +1.596s | 0.0% → 99.2% |   0ms → 1.59s | 0 → 1,595 | `0x1671e` | `zstd`   |
|    new |   +1.332s | 0.0% → 82.8% |   0ms → 1.33s | 0 → 1,331 | `0x62a5e` | `zstd`   |
|    new |   +1.279s | 0.0% → 79.5% |   0ms → 1.27s | 0 → 1,278 | `0x5a3f2` | `zstd`   |
|    new | +278.28ms | 0.0% → 17.3% | 0ms → 278.3ms |   0 → 278 | `0x60980` | `zstd`   |
|    new | +277.28ms | 0.0% → 17.2% | 0ms → 277.3ms |   0 → 277 | `0x609c8` | `zstd`   |
|    new | +274.27ms | 0.0% → 17.0% | 0ms → 274.3ms |   0 → 274 | `0x17e36` | `zstd`   |
|    new | +274.27ms | 0.0% → 17.0% | 0ms → 274.3ms |   0 → 274 | `0x62d32` | `zstd`   |
|    new | +225.23ms | 0.0% → 14.0% | 0ms → 225.2ms |   0 → 225 | `0x60c38` | `zstd`   |
|    new | +218.22ms | 0.0% → 13.6% | 0ms → 218.2ms |   0 → 218 | `0x60c5c` | `zstd`   |
|    new |  +57.06ms |  0.0% → 3.5% |  0ms → 57.1ms |    0 → 57 | `0x609b8` | `zstd`   |
|    new |  +48.05ms |  0.0% → 3.0% |  0ms → 48.0ms |    0 → 48 | `0x5a65c` | `zstd`   |
|    new |  +43.04ms |  0.0% → 2.7% |  0ms → 43.0ms |    0 → 43 | `0x60c90` | `zstd`   |
|    new |  +30.03ms |  0.0% → 1.9% |  0ms → 30.0ms |    0 → 30 | `0x5a7c0` | `zstd`   |
|    new |  +28.03ms |  0.0% → 1.7% |  0ms → 28.0ms |    0 → 28 | `0x5a85c` | `zstd`   |
|    new |  +23.02ms |  0.0% → 1.4% |  0ms → 23.0ms |    0 → 23 | `0x5a78c` | `zstd`   |
|    new |  +20.02ms |  0.0% → 1.2% |  0ms → 20.0ms |    0 → 20 | `0x61b3e` | `zstd`   |
|    new |  +19.02ms |  0.0% → 1.2% |  0ms → 19.0ms |    0 → 19 | `0x60a08` | `zstd`   |
|    new |  +19.02ms |  0.0% → 1.2% |  0ms → 19.0ms |    0 → 19 | `0x609ec` | `zstd`   |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |     Delta |             % |          Time |       Samples | Function  | Location                               |
| ------: | --------: | ------------: | ------------: | ------------: | --------- | -------------------------------------- |
| removed |   -1.885s |  99.8% → 0.0% |   1.88s → 0ms |     1,884 → 0 | `0x9cee`  | `zstd`                                 |
| removed |   -1.867s |  98.9% → 0.0% |   1.86s → 0ms |     1,866 → 0 | `0x1601e` | `zstd`                                 |
| removed |   -1.866s |  98.8% → 0.0% |   1.86s → 0ms |     1,865 → 0 | `0x1108e` | `zstd`                                 |
| removed |   -1.577s |  83.5% → 0.0% |   1.57s → 0ms |     1,576 → 0 | `0x61402` | `zstd`                                 |
| removed |   -1.492s |  79.0% → 0.0% |   1.49s → 0ms |     1,491 → 0 | `0x59272` | `zstd`                                 |
| removed | -306.31ms |  16.2% → 0.0% | 306.3ms → 0ms |       306 → 0 | `0x17766` | `zstd`                                 |
| removed | -306.31ms |  16.2% → 0.0% | 306.3ms → 0ms |       306 → 0 | `0x616b6` | `zstd`                                 |
| removed | -296.30ms |  15.7% → 0.0% | 296.3ms → 0ms |       296 → 0 | `0x5f800` | `zstd`                                 |
| removed | -296.30ms |  15.7% → 0.0% | 296.3ms → 0ms |       296 → 0 | `0x5f848` | `zstd`                                 |
| removed | -292.29ms |  15.5% → 0.0% | 292.3ms → 0ms |       292 → 0 | `0x5fab8` | `zstd`                                 |
|  -14.8% | -278.28ms | 99.8% → 99.9% | 1.88s → 1.60s | 1,884 → 1,606 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -14.8% | -278.28ms | 99.8% → 99.9% | 1.88s → 1.60s | 1,884 → 1,606 | `0xebf5a` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -249.25ms |  13.2% → 0.0% | 249.2ms → 0ms |       249 → 0 | `0x5fadc` | `zstd`                                 |
| removed |  -99.10ms |   5.2% → 0.0% |  99.1ms → 0ms |        99 → 0 | `0x5f838` | `zstd`                                 |
| removed |  -52.05ms |   2.8% → 0.0% |  52.1ms → 0ms |        52 → 0 | `0x5fb10` | `zstd`                                 |
| removed |  -43.04ms |   2.3% → 0.0% |  43.0ms → 0ms |        43 → 0 | `0x594d8` | `zstd`                                 |
| removed |  -42.04ms |   2.2% → 0.0% |  42.0ms → 0ms |        42 → 0 | `0x59640` | `zstd`                                 |
| removed |  -33.03ms |   1.7% → 0.0% |  33.0ms → 0ms |        33 → 0 | `0x596dc` | `zstd`                                 |
| removed |  -32.03ms |   1.7% → 0.0% |  32.0ms → 0ms |        32 → 0 | `0x5f86c` | `zstd`                                 |
| removed |  -25.03ms |   1.3% → 0.0% |  25.0ms → 0ms |        25 → 0 | `0x5960c` | `zstd`                                 |

##### Ours

|  Change |     Delta |            % |          Time |   Samples | Function  | Location |
| ------: | --------: | -----------: | ------------: | --------: | --------- | -------- |
| removed |   -1.885s | 99.8% → 0.0% |   1.88s → 0ms | 1,884 → 0 | `0x9cee`  | `zstd`   |
| removed |   -1.867s | 98.9% → 0.0% |   1.86s → 0ms | 1,866 → 0 | `0x1601e` | `zstd`   |
| removed |   -1.866s | 98.8% → 0.0% |   1.86s → 0ms | 1,865 → 0 | `0x1108e` | `zstd`   |
| removed |   -1.577s | 83.5% → 0.0% |   1.57s → 0ms | 1,576 → 0 | `0x61402` | `zstd`   |
| removed |   -1.492s | 79.0% → 0.0% |   1.49s → 0ms | 1,491 → 0 | `0x59272` | `zstd`   |
| removed | -306.31ms | 16.2% → 0.0% | 306.3ms → 0ms |   306 → 0 | `0x17766` | `zstd`   |
| removed | -306.31ms | 16.2% → 0.0% | 306.3ms → 0ms |   306 → 0 | `0x616b6` | `zstd`   |
| removed | -296.30ms | 15.7% → 0.0% | 296.3ms → 0ms |   296 → 0 | `0x5f800` | `zstd`   |
| removed | -296.30ms | 15.7% → 0.0% | 296.3ms → 0ms |   296 → 0 | `0x5f848` | `zstd`   |
| removed | -292.29ms | 15.5% → 0.0% | 292.3ms → 0ms |   292 → 0 | `0x5fab8` | `zstd`   |
| removed | -249.25ms | 13.2% → 0.0% | 249.2ms → 0ms |   249 → 0 | `0x5fadc` | `zstd`   |
| removed |  -99.10ms |  5.2% → 0.0% |  99.1ms → 0ms |    99 → 0 | `0x5f838` | `zstd`   |
| removed |  -52.05ms |  2.8% → 0.0% |  52.1ms → 0ms |    52 → 0 | `0x5fb10` | `zstd`   |
| removed |  -43.04ms |  2.3% → 0.0% |  43.0ms → 0ms |    43 → 0 | `0x594d8` | `zstd`   |
| removed |  -42.04ms |  2.2% → 0.0% |  42.0ms → 0ms |    42 → 0 | `0x59640` | `zstd`   |
| removed |  -33.03ms |  1.7% → 0.0% |  33.0ms → 0ms |    33 → 0 | `0x596dc` | `zstd`   |
| removed |  -32.03ms |  1.7% → 0.0% |  32.0ms → 0ms |    32 → 0 | `0x5f86c` | `zstd`   |
| removed |  -25.03ms |  1.3% → 0.0% |  25.0ms → 0ms |    25 → 0 | `0x5960c` | `zstd`   |
| removed |  -20.02ms |  1.1% → 0.0% |  20.0ms → 0ms |    20 → 0 | `0x596b8` | `zstd`   |
| removed |  -19.02ms |  1.0% → 0.0% |  19.0ms → 0ms |    19 → 0 | `0x609be` | `zstd`   |

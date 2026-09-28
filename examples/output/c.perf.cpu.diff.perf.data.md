# CPU profile diff

Took 1.14s → 1.22s (+75.08ms, +6.6%) over 1,144 samples → 1,219 samples (1.0ms per sample).

| Category | Change |    Delta |             % |          Time |       Samples |
| -------- | -----: | -------: | ------------: | ------------: | ------------: |
| Ours     |  +6.5% | +74.07ms | 99.6% → 99.5% | 1.14s → 1.21s | 1,139 → 1,213 |
| Kernel   | -40.0% |  -2.00ms |   0.4% → 0.2% | 5.0ms → 3.0ms |         5 → 3 |
| Native   |    new |  +3.00ms |   0.0% → 0.2% |   0ms → 3.0ms |         0 → 3 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

##### Ours

| Change |     Delta |            % |          Time | Samples | Function  | Location |
| -----: | --------: | -----------: | ------------: | ------: | --------- | -------- |
|    new | +183.18ms | 0.0% → 15.0% | 0ms → 183.2ms | 0 → 183 | `0x60980` | `zstd`   |
|    new | +170.17ms | 0.0% → 13.9% | 0ms → 170.2ms | 0 → 170 | `0x609c8` | `zstd`   |
|    new | +145.15ms | 0.0% → 11.9% | 0ms → 145.1ms | 0 → 145 | `0x60c38` | `zstd`   |
|    new | +143.14ms | 0.0% → 11.7% | 0ms → 143.1ms | 0 → 143 | `0x60c5c` | `zstd`   |
|    new |  +44.04ms |  0.0% → 3.6% |  0ms → 44.0ms |  0 → 44 | `0x609b8` | `zstd`   |
|    new |  +44.04ms |  0.0% → 3.6% |  0ms → 44.0ms |  0 → 44 | `0x5a65c` | `zstd`   |
|    new |  +40.04ms |  0.0% → 3.3% |  0ms → 40.0ms |  0 → 40 | `0x5a7c0` | `zstd`   |
|    new |  +27.03ms |  0.0% → 2.2% |  0ms → 27.0ms |  0 → 27 | `0x5a85c` | `zstd`   |
|    new |  +23.02ms |  0.0% → 1.9% |  0ms → 23.0ms |  0 → 23 | `0x5a78c` | `zstd`   |
|    new |  +21.02ms |  0.0% → 1.7% |  0ms → 21.0ms |  0 → 21 | `0x60c90` | `zstd`   |
|    new |  +19.02ms |  0.0% → 1.6% |  0ms → 19.0ms |  0 → 19 | `0x5a838` | `zstd`   |
|    new |  +16.02ms |  0.0% → 1.3% |  0ms → 16.0ms |  0 → 16 | `0x60978` | `zstd`   |
|    new |  +15.02ms |  0.0% → 1.2% |  0ms → 15.0ms |  0 → 15 | `0x60a08` | `zstd`   |
|    new |  +15.02ms |  0.0% → 1.2% |  0ms → 15.0ms |  0 → 15 | `0x5a7a8` | `zstd`   |
|    new |  +14.01ms |  0.0% → 1.1% |  0ms → 14.0ms |  0 → 14 | `0x609ec` | `zstd`   |
|    new |  +11.01ms |  0.0% → 0.9% |  0ms → 11.0ms |  0 → 11 | `0x60c60` | `zstd`   |
|    new |  +11.01ms |  0.0% → 0.9% |  0ms → 11.0ms |  0 → 11 | `0x609d4` | `zstd`   |
|    new |  +11.01ms |  0.0% → 0.9% |  0ms → 11.0ms |  0 → 11 | `0x609a0` | `zstd`   |
|    new |  +10.01ms |  0.0% → 0.8% |  0ms → 10.0ms |  0 → 10 | `0x58908` | `zstd`   |
|    new |   +9.01ms |  0.0% → 0.7% |   0ms → 9.0ms |   0 → 9 | `0x5a860` | `zstd`   |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

##### Ours

|  Change |     Delta |            % |          Time | Samples | Function  | Location |
| ------: | --------: | -----------: | ------------: | ------: | --------- | -------- |
| removed | -170.17ms | 14.9% → 0.0% | 170.2ms → 0ms | 170 → 0 | `0x5f848` | `zstd`   |
| removed | -166.17ms | 14.5% → 0.0% | 166.2ms → 0ms | 166 → 0 | `0x5f800` | `zstd`   |
| removed | -142.14ms | 12.4% → 0.0% | 142.1ms → 0ms | 142 → 0 | `0x5fab8` | `zstd`   |
| removed | -129.13ms | 11.3% → 0.0% | 129.1ms → 0ms | 129 → 0 | `0x5fadc` | `zstd`   |
| removed |  -41.04ms |  3.6% → 0.0% |  41.0ms → 0ms |  41 → 0 | `0x594d8` | `zstd`   |
| removed |  -35.04ms |  3.1% → 0.0% |  35.0ms → 0ms |  35 → 0 | `0x5f838` | `zstd`   |
| removed |  -31.03ms |  2.7% → 0.0% |  31.0ms → 0ms |  31 → 0 | `0x59640` | `zstd`   |
| removed |  -30.03ms |  2.6% → 0.0% |  30.0ms → 0ms |  30 → 0 | `0x5fb10` | `zstd`   |
| removed |  -23.02ms |  2.0% → 0.0% |  23.0ms → 0ms |  23 → 0 | `0x5960c` | `zstd`   |
| removed |  -22.02ms |  1.9% → 0.0% |  22.0ms → 0ms |  22 → 0 | `0x596dc` | `zstd`   |
| removed |  -18.02ms |  1.6% → 0.0% |  18.0ms → 0ms |  18 → 0 | `0x596b8` | `zstd`   |
| removed |  -13.01ms |  1.1% → 0.0% |  13.0ms → 0ms |  13 → 0 | `0x5fae0` | `zstd`   |
| removed |  -13.01ms |  1.1% → 0.0% |  13.0ms → 0ms |  13 → 0 | `0x577d4` | `zstd`   |
| removed |  -13.01ms |  1.1% → 0.0% |  13.0ms → 0ms |  13 → 0 | `0x5f888` | `zstd`   |
| removed |  -13.01ms |  1.1% → 0.0% |  13.0ms → 0ms |  13 → 0 | `0x59628` | `zstd`   |
| removed |  -12.01ms |  1.0% → 0.0% |  12.0ms → 0ms |  12 → 0 | `0x591d0` | `zstd`   |
| removed |  -11.01ms |  1.0% → 0.0% |  11.0ms → 0ms |  11 → 0 | `0x5f7f8` | `zstd`   |
| removed |  -11.01ms |  1.0% → 0.0% |  11.0ms → 0ms |  11 → 0 | `0x5f854` | `zstd`   |
| removed |  -10.01ms |  0.9% → 0.0% |  10.0ms → 0ms |  10 → 0 | `0x595f0` | `zstd`   |
| removed |  -10.01ms |  0.9% → 0.0% |  10.0ms → 0ms |  10 → 0 | `0x596b4` | `zstd`   |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |     Delta |            % |          Time |       Samples | Function  | Location                               |
| -----: | --------: | -----------: | ------------: | ------------: | --------- | -------------------------------------- |
|    new |   +1.218s | 0.0% → 99.8% |   0ms → 1.21s |     0 → 1,217 | `0x9f20`  | `zstd`                                 |
|    new |   +1.204s | 0.0% → 98.7% |   0ms → 1.20s |     0 → 1,203 | `0x11630` | `zstd`                                 |
|    new |   +1.204s | 0.0% → 98.7% |   0ms → 1.20s |     0 → 1,203 | `0x16720` | `zstd`                                 |
|    new | +973.97ms | 0.0% → 79.8% | 0ms → 974.0ms |       0 → 973 | `0x62a60` | `zstd`                                 |
|    new | +880.88ms | 0.0% → 72.2% | 0ms → 880.9ms |       0 → 880 | `0x5a3f4` | `zstd`                                 |
|    new | +241.24ms | 0.0% → 19.8% | 0ms → 241.2ms |       0 → 241 | `0x17e38` | `zstd`                                 |
|    new | +241.24ms | 0.0% → 19.8% | 0ms → 241.2ms |       0 → 241 | `0x62d34` | `zstd`                                 |
|    new | +183.18ms | 0.0% → 15.0% | 0ms → 183.2ms |       0 → 183 | `0x60980` | `zstd`                                 |
|    new | +170.17ms | 0.0% → 13.9% | 0ms → 170.2ms |       0 → 170 | `0x609c8` | `zstd`                                 |
|    new | +145.15ms | 0.0% → 11.9% | 0ms → 145.1ms |       0 → 145 | `0x60c38` | `zstd`                                 |
|    new | +143.14ms | 0.0% → 11.7% | 0ms → 143.1ms |       0 → 143 | `0x60c5c` | `zstd`                                 |
|  +6.6% |  +75.08ms |        99.8% | 1.14s → 1.21s | 1,142 → 1,217 | `0x82030` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +6.6% |  +75.08ms |        99.8% | 1.14s → 1.21s | 1,142 → 1,217 | `0xebf5c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +44.04ms |  0.0% → 3.6% |  0ms → 44.0ms |        0 → 44 | `0x609b8` | `zstd`                                 |
|    new |  +44.04ms |  0.0% → 3.6% |  0ms → 44.0ms |        0 → 44 | `0x5a65c` | `zstd`                                 |
|    new |  +40.04ms |  0.0% → 3.3% |  0ms → 40.0ms |        0 → 40 | `0x5a7c0` | `zstd`                                 |
|    new |  +27.03ms |  0.0% → 2.2% |  0ms → 27.0ms |        0 → 27 | `0x5a85c` | `zstd`                                 |
|    new |  +23.02ms |  0.0% → 1.9% |  0ms → 23.0ms |        0 → 23 | `0x5a78c` | `zstd`                                 |
|    new |  +21.02ms |  0.0% → 1.7% |  0ms → 21.0ms |        0 → 21 | `0x60c90` | `zstd`                                 |
|    new |  +19.02ms |  0.0% → 1.6% |  0ms → 19.0ms |        0 → 19 | `0x5a838` | `zstd`                                 |

##### Ours

| Change |     Delta |            % |          Time |   Samples | Function  | Location |
| -----: | --------: | -----------: | ------------: | --------: | --------- | -------- |
|    new |   +1.218s | 0.0% → 99.8% |   0ms → 1.21s | 0 → 1,217 | `0x9f20`  | `zstd`   |
|    new |   +1.204s | 0.0% → 98.7% |   0ms → 1.20s | 0 → 1,203 | `0x11630` | `zstd`   |
|    new |   +1.204s | 0.0% → 98.7% |   0ms → 1.20s | 0 → 1,203 | `0x16720` | `zstd`   |
|    new | +973.97ms | 0.0% → 79.8% | 0ms → 974.0ms |   0 → 973 | `0x62a60` | `zstd`   |
|    new | +880.88ms | 0.0% → 72.2% | 0ms → 880.9ms |   0 → 880 | `0x5a3f4` | `zstd`   |
|    new | +241.24ms | 0.0% → 19.8% | 0ms → 241.2ms |   0 → 241 | `0x17e38` | `zstd`   |
|    new | +241.24ms | 0.0% → 19.8% | 0ms → 241.2ms |   0 → 241 | `0x62d34` | `zstd`   |
|    new | +183.18ms | 0.0% → 15.0% | 0ms → 183.2ms |   0 → 183 | `0x60980` | `zstd`   |
|    new | +170.17ms | 0.0% → 13.9% | 0ms → 170.2ms |   0 → 170 | `0x609c8` | `zstd`   |
|    new | +145.15ms | 0.0% → 11.9% | 0ms → 145.1ms |   0 → 145 | `0x60c38` | `zstd`   |
|    new | +143.14ms | 0.0% → 11.7% | 0ms → 143.1ms |   0 → 143 | `0x60c5c` | `zstd`   |
|    new |  +44.04ms |  0.0% → 3.6% |  0ms → 44.0ms |    0 → 44 | `0x609b8` | `zstd`   |
|    new |  +44.04ms |  0.0% → 3.6% |  0ms → 44.0ms |    0 → 44 | `0x5a65c` | `zstd`   |
|    new |  +40.04ms |  0.0% → 3.3% |  0ms → 40.0ms |    0 → 40 | `0x5a7c0` | `zstd`   |
|    new |  +27.03ms |  0.0% → 2.2% |  0ms → 27.0ms |    0 → 27 | `0x5a85c` | `zstd`   |
|    new |  +23.02ms |  0.0% → 1.9% |  0ms → 23.0ms |    0 → 23 | `0x5a78c` | `zstd`   |
|    new |  +21.02ms |  0.0% → 1.7% |  0ms → 21.0ms |    0 → 21 | `0x60c90` | `zstd`   |
|    new |  +19.02ms |  0.0% → 1.6% |  0ms → 19.0ms |    0 → 19 | `0x5a838` | `zstd`   |
|    new |  +16.02ms |  0.0% → 1.3% |  0ms → 16.0ms |    0 → 16 | `0x61b40` | `zstd`   |
|    new |  +16.02ms |  0.0% → 1.3% |  0ms → 16.0ms |    0 → 16 | `0x60978` | `zstd`   |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

##### Ours

|  Change |     Delta |            % |          Time |   Samples | Function  | Location |
| ------: | --------: | -----------: | ------------: | --------: | --------- | -------- |
| removed |   -1.143s | 99.8% → 0.0% |   1.14s → 0ms | 1,142 → 0 | `0x9cf0`  | `zstd`   |
| removed |   -1.127s | 98.4% → 0.0% |   1.12s → 0ms | 1,126 → 0 | `0x11090` | `zstd`   |
| removed |   -1.127s | 98.4% → 0.0% |   1.12s → 0ms | 1,126 → 0 | `0x16020` | `zstd`   |
| removed | -945.95ms | 82.6% → 0.0% | 945.9ms → 0ms |   945 → 0 | `0x61404` | `zstd`   |
| removed | -794.79ms | 69.4% → 0.0% | 794.8ms → 0ms |   794 → 0 | `0x59274` | `zstd`   |
| removed | -193.19ms | 16.9% → 0.0% | 193.2ms → 0ms |   193 → 0 | `0x17768` | `zstd`   |
| removed | -193.19ms | 16.9% → 0.0% | 193.2ms → 0ms |   193 → 0 | `0x616b8` | `zstd`   |
| removed | -170.17ms | 14.9% → 0.0% | 170.2ms → 0ms |   170 → 0 | `0x5f848` | `zstd`   |
| removed | -166.17ms | 14.5% → 0.0% | 166.2ms → 0ms |   166 → 0 | `0x5f800` | `zstd`   |
| removed | -142.14ms | 12.4% → 0.0% | 142.1ms → 0ms |   142 → 0 | `0x5fab8` | `zstd`   |
| removed | -129.13ms | 11.3% → 0.0% | 129.1ms → 0ms |   129 → 0 | `0x5fadc` | `zstd`   |
| removed |  -41.04ms |  3.6% → 0.0% |  41.0ms → 0ms |    41 → 0 | `0x594d8` | `zstd`   |
| removed |  -35.04ms |  3.1% → 0.0% |  35.0ms → 0ms |    35 → 0 | `0x5f838` | `zstd`   |
| removed |  -31.03ms |  2.7% → 0.0% |  31.0ms → 0ms |    31 → 0 | `0x59640` | `zstd`   |
| removed |  -30.03ms |  2.6% → 0.0% |  30.0ms → 0ms |    30 → 0 | `0x5fb10` | `zstd`   |
| removed |  -23.02ms |  2.0% → 0.0% |  23.0ms → 0ms |    23 → 0 | `0x5960c` | `zstd`   |
| removed |  -22.02ms |  1.9% → 0.0% |  22.0ms → 0ms |    22 → 0 | `0x596dc` | `zstd`   |
| removed |  -18.02ms |  1.6% → 0.0% |  18.0ms → 0ms |    18 → 0 | `0x596b8` | `zstd`   |
| removed |  -16.02ms |  1.4% → 0.0% |  16.0ms → 0ms |    16 → 0 | `0x609c0` | `zstd`   |
| removed |  -13.01ms |  1.1% → 0.0% |  13.0ms → 0ms |    13 → 0 | `0x5fae0` | `zstd`   |

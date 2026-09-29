# CPU profile diff

Took 501.5ms → 539.5ms (+38.04ms, +7.6%) over 501 samples → 539 samples (1.0ms per sample).

| Category |  Change |    Delta |             % |              Time |   Samples |
| -------- | ------: | -------: | ------------: | ----------------: | --------: |
| Ours     |  +10.4% | +42.04ms | 80.8% → 82.9% | 405.4ms → 447.4ms | 405 → 447 |
| Native   |   -3.2% |  -3.00ms | 19.0% → 17.1% |   95.1ms → 92.1ms |   95 → 92 |
| Kernel   | removed |  -1.00ms |   0.2% → 0.0% |       1.0ms → 0ms |     1 → 0 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

| Change |    Delta |           % |            Time | Samples | Function  | Location                                 |
| -----: | -------: | ----------: | --------------: | ------: | --------- | ---------------------------------------- |
|    new | +25.03ms | 0.0% → 4.6% |    0ms → 25.0ms |  0 → 25 | `0x4f24`  | `binary`                                 |
|    new | +14.01ms | 0.0% → 2.6% |    0ms → 14.0ms |  0 → 14 | `0x46f0`  | `binary`                                 |
|    new | +13.01ms | 0.0% → 2.4% |    0ms → 13.0ms |  0 → 13 | `0x4ee4`  | `binary`                                 |
|    new |  +8.01ms | 0.0% → 1.5% |     0ms → 8.0ms |   0 → 8 | `0x4e78`  | `binary`                                 |
|    new |  +7.01ms | 0.0% → 1.3% |     0ms → 7.0ms |   0 → 7 | `0x12954` | `binary`                                 |
|    new |  +7.01ms | 0.0% → 1.3% |     0ms → 7.0ms |   0 → 7 | `0x12bbc` | `binary`                                 |
|    new |  +7.01ms | 0.0% → 1.3% |     0ms → 7.0ms |   0 → 7 | `0x13644` | `binary`                                 |
|    new |  +7.01ms | 0.0% → 1.3% |     0ms → 7.0ms |   0 → 7 | `0x4750`  | `binary`                                 |
|    new |  +7.01ms | 0.0% → 1.3% |     0ms → 7.0ms |   0 → 7 | `0x4cf0`  | `binary`                                 |
|    new |  +7.01ms | 0.0% → 1.3% |     0ms → 7.0ms |   0 → 7 | `0x4300`  | `binary`                                 |
|    new |  +6.01ms | 0.0% → 1.1% |     0ms → 6.0ms |   0 → 6 | `0x12b30` | `binary`                                 |
| +45.5% |  +5.01ms | 2.2% → 3.0% | 11.0ms → 16.0ms | 11 → 16 | `0x9d100` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +5.01ms | 0.0% → 0.9% |     0ms → 5.0ms |   0 → 5 | `0x134a8` | `binary`                                 |
|    new |  +5.01ms | 0.0% → 0.9% |     0ms → 5.0ms |   0 → 5 | `0x13490` | `binary`                                 |
|    new |  +5.01ms | 0.0% → 0.9% |     0ms → 5.0ms |   0 → 5 | `0xb50c`  | `binary`                                 |
|    new |  +5.01ms | 0.0% → 0.9% |     0ms → 5.0ms |   0 → 5 | `0x13a8c` | `binary`                                 |
|    new |  +5.01ms | 0.0% → 0.9% |     0ms → 5.0ms |   0 → 5 | `0x4cf8`  | `binary`                                 |
|    new |  +5.01ms | 0.0% → 0.9% |     0ms → 5.0ms |   0 → 5 | `0x12990` | `binary`                                 |
|    new |  +5.01ms | 0.0% → 0.9% |     0ms → 5.0ms |   0 → 5 | `0x13734` | `binary`                                 |
|    new |  +5.01ms | 0.0% → 0.9% |     0ms → 5.0ms |   0 → 5 | `0x4f00`  | `binary`                                 |

##### Ours

| Change |    Delta |           % |         Time | Samples | Function  | Location |
| -----: | -------: | ----------: | -----------: | ------: | --------- | -------- |
|    new | +25.03ms | 0.0% → 4.6% | 0ms → 25.0ms |  0 → 25 | `0x4f24`  | `binary` |
|    new | +14.01ms | 0.0% → 2.6% | 0ms → 14.0ms |  0 → 14 | `0x46f0`  | `binary` |
|    new | +13.01ms | 0.0% → 2.4% | 0ms → 13.0ms |  0 → 13 | `0x4ee4`  | `binary` |
|    new |  +8.01ms | 0.0% → 1.5% |  0ms → 8.0ms |   0 → 8 | `0x4e78`  | `binary` |
|    new |  +7.01ms | 0.0% → 1.3% |  0ms → 7.0ms |   0 → 7 | `0x12954` | `binary` |
|    new |  +7.01ms | 0.0% → 1.3% |  0ms → 7.0ms |   0 → 7 | `0x12bbc` | `binary` |
|    new |  +7.01ms | 0.0% → 1.3% |  0ms → 7.0ms |   0 → 7 | `0x13644` | `binary` |
|    new |  +7.01ms | 0.0% → 1.3% |  0ms → 7.0ms |   0 → 7 | `0x4750`  | `binary` |
|    new |  +7.01ms | 0.0% → 1.3% |  0ms → 7.0ms |   0 → 7 | `0x4cf0`  | `binary` |
|    new |  +7.01ms | 0.0% → 1.3% |  0ms → 7.0ms |   0 → 7 | `0x4300`  | `binary` |
|    new |  +6.01ms | 0.0% → 1.1% |  0ms → 6.0ms |   0 → 6 | `0x12b30` | `binary` |
|    new |  +5.01ms | 0.0% → 0.9% |  0ms → 5.0ms |   0 → 5 | `0x134a8` | `binary` |
|    new |  +5.01ms | 0.0% → 0.9% |  0ms → 5.0ms |   0 → 5 | `0x13490` | `binary` |
|    new |  +5.01ms | 0.0% → 0.9% |  0ms → 5.0ms |   0 → 5 | `0xb50c`  | `binary` |
|    new |  +5.01ms | 0.0% → 0.9% |  0ms → 5.0ms |   0 → 5 | `0x13a8c` | `binary` |
|    new |  +5.01ms | 0.0% → 0.9% |  0ms → 5.0ms |   0 → 5 | `0x4cf8`  | `binary` |
|    new |  +5.01ms | 0.0% → 0.9% |  0ms → 5.0ms |   0 → 5 | `0x12990` | `binary` |
|    new |  +5.01ms | 0.0% → 0.9% |  0ms → 5.0ms |   0 → 5 | `0x13734` | `binary` |
|    new |  +5.01ms | 0.0% → 0.9% |  0ms → 5.0ms |   0 → 5 | `0x4f00`  | `binary` |
|    new |  +5.01ms | 0.0% → 0.9% |  0ms → 5.0ms |   0 → 5 | `0x7904`  | `binary` |

##### Native

|  Change |   Delta |           % |            Time | Samples | Function   | Location                                           |
| ------: | ------: | ----------: | --------------: | ------: | ---------- | -------------------------------------------------- |
|  +45.5% | +5.01ms | 2.2% → 3.0% | 11.0ms → 16.0ms | 11 → 16 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new | +4.00ms | 0.0% → 0.7% |     0ms → 4.0ms |   0 → 4 | `0x137f3c` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|     new | +3.00ms | 0.0% → 0.6% |     0ms → 3.0ms |   0 → 3 | `0x137f94` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  +22.2% | +2.00ms | 1.8% → 2.0% |  9.0ms → 11.0ms |  9 → 11 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|     new | +2.00ms | 0.0% → 0.4% |     0ms → 2.0ms |   0 → 2 | `0x92a58`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new | +2.00ms | 0.0% → 0.4% |     0ms → 2.0ms |   0 → 2 | `0x9d11c`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new | +2.00ms | 0.0% → 0.4% |     0ms → 2.0ms |   0 → 2 | `0x9d1b0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  +16.7% | +1.00ms | 1.2% → 1.3% |   6.0ms → 7.0ms |   6 → 7 | `0xa0cb0`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| +100.0% | +1.00ms | 0.2% → 0.4% |   1.0ms → 2.0ms |   1 → 2 | `0xa2c9c`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|     new | +1.00ms | 0.0% → 0.2% |     0ms → 1.0ms |   0 → 1 | `0x9d114`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new | +1.00ms | 0.0% → 0.2% |     0ms → 1.0ms |   0 → 1 | `0x9e6f8`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new | +1.00ms | 0.0% → 0.2% |     0ms → 1.0ms |   0 → 1 | `0x92aa4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |           % |          Time | Samples | Function  | Location                                 |
| ------: | -------: | ----------: | ------------: | ------: | --------- | ---------------------------------------- |
| removed | -12.01ms | 2.4% → 0.0% |  12.0ms → 0ms |  12 → 0 | `0x4c30`  | `binary`                                 |
| removed | -10.01ms | 2.0% → 0.0% |  10.0ms → 0ms |  10 → 0 | `0x5464`  | `binary`                                 |
| removed |  -8.01ms | 1.6% → 0.0% |   8.0ms → 0ms |   8 → 0 | `0x120b0` | `binary`                                 |
| removed |  -8.01ms | 1.6% → 0.0% |   8.0ms → 0ms |   8 → 0 | `0x5424`  | `binary`                                 |
| removed |  -8.01ms | 1.6% → 0.0% |   8.0ms → 0ms |   8 → 0 | `0x75f4`  | `binary`                                 |
| removed |  -7.01ms | 1.4% → 0.0% |   7.0ms → 0ms |   7 → 0 | `0xe5a4`  | `binary`                                 |
| removed |  -6.01ms | 1.2% → 0.0% |   6.0ms → 0ms |   6 → 0 | `0x4c20`  | `binary`                                 |
| removed |  -6.01ms | 1.2% → 0.0% |   6.0ms → 0ms |   6 → 0 | `0x12128` | `binary`                                 |
| removed |  -6.01ms | 1.2% → 0.0% |   6.0ms → 0ms |   6 → 0 | `0x11268` | `binary`                                 |
| removed |  -6.01ms | 1.2% → 0.0% |   6.0ms → 0ms |   6 → 0 | `0xe134`  | `binary`                                 |
| removed |  -6.01ms | 1.2% → 0.0% |   6.0ms → 0ms |   6 → 0 | `0x5230`  | `binary`                                 |
| removed |  -5.01ms | 1.0% → 0.0% |   5.0ms → 0ms |   5 → 0 | `0x11a44` | `binary`                                 |
| removed |  -5.01ms | 1.0% → 0.0% |   5.0ms → 0ms |   5 → 0 | `0x4840`  | `binary`                                 |
| removed |  -5.01ms | 1.0% → 0.0% |   5.0ms → 0ms |   5 → 0 | `0x11eb8` | `binary`                                 |
| removed |  -5.01ms | 1.0% → 0.0% |   5.0ms → 0ms |   5 → 0 | `0x112a0` | `binary`                                 |
| removed |  -5.01ms | 1.0% → 0.0% |   5.0ms → 0ms |   5 → 0 | `0x4c90`  | `binary`                                 |
|  -62.5% |  -5.01ms | 1.6% → 0.6% | 8.0ms → 3.0ms |   8 → 3 | `0x8faf4` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -4.00ms | 0.8% → 0.0% |   4.0ms → 0ms |   4 → 0 | `0xe5d0`  | `binary`                                 |
| removed |  -4.00ms | 0.8% → 0.0% |   4.0ms → 0ms |   4 → 0 | `0x4b78`  | `binary`                                 |
| removed |  -4.00ms | 0.8% → 0.0% |   4.0ms → 0ms |   4 → 0 | `0x11b00` | `binary`                                 |

##### Ours

|  Change |    Delta |           % |         Time | Samples | Function  | Location |
| ------: | -------: | ----------: | -----------: | ------: | --------- | -------- |
| removed | -12.01ms | 2.4% → 0.0% | 12.0ms → 0ms |  12 → 0 | `0x4c30`  | `binary` |
| removed | -10.01ms | 2.0% → 0.0% | 10.0ms → 0ms |  10 → 0 | `0x5464`  | `binary` |
| removed |  -8.01ms | 1.6% → 0.0% |  8.0ms → 0ms |   8 → 0 | `0x120b0` | `binary` |
| removed |  -8.01ms | 1.6% → 0.0% |  8.0ms → 0ms |   8 → 0 | `0x5424`  | `binary` |
| removed |  -8.01ms | 1.6% → 0.0% |  8.0ms → 0ms |   8 → 0 | `0x75f4`  | `binary` |
| removed |  -7.01ms | 1.4% → 0.0% |  7.0ms → 0ms |   7 → 0 | `0xe5a4`  | `binary` |
| removed |  -6.01ms | 1.2% → 0.0% |  6.0ms → 0ms |   6 → 0 | `0x4c20`  | `binary` |
| removed |  -6.01ms | 1.2% → 0.0% |  6.0ms → 0ms |   6 → 0 | `0x12128` | `binary` |
| removed |  -6.01ms | 1.2% → 0.0% |  6.0ms → 0ms |   6 → 0 | `0x11268` | `binary` |
| removed |  -6.01ms | 1.2% → 0.0% |  6.0ms → 0ms |   6 → 0 | `0xe134`  | `binary` |
| removed |  -6.01ms | 1.2% → 0.0% |  6.0ms → 0ms |   6 → 0 | `0x5230`  | `binary` |
| removed |  -5.01ms | 1.0% → 0.0% |  5.0ms → 0ms |   5 → 0 | `0x11a44` | `binary` |
| removed |  -5.01ms | 1.0% → 0.0% |  5.0ms → 0ms |   5 → 0 | `0x4840`  | `binary` |
| removed |  -5.01ms | 1.0% → 0.0% |  5.0ms → 0ms |   5 → 0 | `0x11eb8` | `binary` |
| removed |  -5.01ms | 1.0% → 0.0% |  5.0ms → 0ms |   5 → 0 | `0x112a0` | `binary` |
| removed |  -5.01ms | 1.0% → 0.0% |  5.0ms → 0ms |   5 → 0 | `0x4c90`  | `binary` |
| removed |  -4.00ms | 0.8% → 0.0% |  4.0ms → 0ms |   4 → 0 | `0xe5d0`  | `binary` |
| removed |  -4.00ms | 0.8% → 0.0% |  4.0ms → 0ms |   4 → 0 | `0x4b78`  | `binary` |
| removed |  -4.00ms | 0.8% → 0.0% |  4.0ms → 0ms |   4 → 0 | `0x11b00` | `binary` |
| removed |  -4.00ms | 0.8% → 0.0% |  4.0ms → 0ms |   4 → 0 | `0x4da0`  | `binary` |

##### Native

|  Change |   Delta |           % |            Time | Samples | Function   | Location                                           |
| ------: | ------: | ----------: | --------------: | ------: | ---------- | -------------------------------------------------- |
|  -62.5% | -5.01ms | 1.6% → 0.6% |   8.0ms → 3.0ms |   8 → 3 | `0x8faf4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -21.4% | -3.00ms | 2.8% → 2.0% | 14.0ms → 11.0ms | 14 → 11 | `0x9e6c0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -3.00ms | 0.6% → 0.0% |     3.0ms → 0ms |   3 → 0 | `0x92274`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x923f0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -66.7% | -2.00ms | 0.6% → 0.2% |   3.0ms → 1.0ms |   3 → 1 | `0x137f84` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x9d234`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x92aa0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -11.1% | -1.00ms | 1.8% → 1.5% |   9.0ms → 8.0ms |   9 → 8 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -25.0% | -1.00ms | 0.8% → 0.6% |   4.0ms → 3.0ms |   4 → 3 | `0x929e0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0xa2cac`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x9d190`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x9d138`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x929c4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x9d150`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x9e6e8`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x8fb44`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |     Delta |             % |              Time |   Samples | Function  | Location                                 |
| -----: | --------: | ------------: | ----------------: | --------: | --------- | ---------------------------------------- |
|    new | +403.40ms |  0.0% → 74.8% |     0ms → 403.4ms |   0 → 403 | `0x13b80` | `binary`                                 |
|    new | +238.24ms |  0.0% → 44.2% |     0ms → 238.2ms |   0 → 238 | `0x1364c` | `binary`                                 |
|    new |  +65.07ms |  0.0% → 12.1% |      0ms → 65.1ms |    0 → 65 | `0x13620` | `binary`                                 |
|    new |  +54.05ms |  0.0% → 10.0% |      0ms → 54.1ms |    0 → 54 | `0x13b38` | `binary`                                 |
|    new |  +49.05ms |   0.0% → 9.1% |      0ms → 49.0ms |    0 → 49 | `0x1388c` | `binary`                                 |
|    new |  +47.05ms |   0.0% → 8.7% |      0ms → 47.0ms |    0 → 47 | `0x115dc` | `binary`                                 |
|  +9.6% |  +39.04ms | 81.2% → 82.7% | 407.4ms → 446.4ms | 407 → 446 | `0x1ab4`  | `binary`                                 |
|  +7.6% |  +38.04ms |        100.0% | 501.5ms → 539.5ms | 501 → 539 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +7.6% |  +38.04ms |        100.0% | 501.5ms → 539.5ms | 501 → 539 | `0x27818` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +7.6% |  +38.04ms |        100.0% | 501.5ms → 539.5ms | 501 → 539 | `0x1c30`  | `binary`                                 |
|    new |  +34.03ms |   0.0% → 6.3% |      0ms → 34.0ms |    0 → 34 | `0x13b70` | `binary`                                 |
|    new |  +28.03ms |   0.0% → 5.2% |      0ms → 28.0ms |    0 → 28 | `0x115ac` | `binary`                                 |
|    new |  +25.03ms |   0.0% → 4.6% |      0ms → 25.0ms |    0 → 25 | `0x4f24`  | `binary`                                 |
|    new |  +15.02ms |   0.0% → 2.8% |      0ms → 15.0ms |    0 → 15 | `0xa9a8`  | `binary`                                 |
|    new |  +14.01ms |   0.0% → 2.6% |      0ms → 14.0ms |    0 → 14 | `0x46f0`  | `binary`                                 |
| +22.8% |  +13.01ms | 11.4% → 13.0% |   57.1ms → 70.1ms |   57 → 70 | `0x1a6c`  | `binary`                                 |
|    new |  +13.01ms |   0.0% → 2.4% |      0ms → 13.0ms |    0 → 13 | `0x4ee4`  | `binary`                                 |
|    new |  +13.01ms |   0.0% → 2.4% |      0ms → 13.0ms |    0 → 13 | `0x487c`  | `binary`                                 |
|    new |  +10.01ms |   0.0% → 1.9% |      0ms → 10.0ms |    0 → 10 | `0xa97c`  | `binary`                                 |
|    new |   +8.01ms |   0.0% → 1.5% |       0ms → 8.0ms |     0 → 8 | `0x4e78`  | `binary`                                 |

##### Ours

| Change |     Delta |             % |              Time |   Samples | Function  | Location |
| -----: | --------: | ------------: | ----------------: | --------: | --------- | -------- |
|    new | +403.40ms |  0.0% → 74.8% |     0ms → 403.4ms |   0 → 403 | `0x13b80` | `binary` |
|    new | +238.24ms |  0.0% → 44.2% |     0ms → 238.2ms |   0 → 238 | `0x1364c` | `binary` |
|    new |  +65.07ms |  0.0% → 12.1% |      0ms → 65.1ms |    0 → 65 | `0x13620` | `binary` |
|    new |  +54.05ms |  0.0% → 10.0% |      0ms → 54.1ms |    0 → 54 | `0x13b38` | `binary` |
|    new |  +49.05ms |   0.0% → 9.1% |      0ms → 49.0ms |    0 → 49 | `0x1388c` | `binary` |
|    new |  +47.05ms |   0.0% → 8.7% |      0ms → 47.0ms |    0 → 47 | `0x115dc` | `binary` |
|  +9.6% |  +39.04ms | 81.2% → 82.7% | 407.4ms → 446.4ms | 407 → 446 | `0x1ab4`  | `binary` |
|  +7.6% |  +38.04ms |        100.0% | 501.5ms → 539.5ms | 501 → 539 | `0x1c30`  | `binary` |
|    new |  +34.03ms |   0.0% → 6.3% |      0ms → 34.0ms |    0 → 34 | `0x13b70` | `binary` |
|    new |  +28.03ms |   0.0% → 5.2% |      0ms → 28.0ms |    0 → 28 | `0x115ac` | `binary` |
|    new |  +25.03ms |   0.0% → 4.6% |      0ms → 25.0ms |    0 → 25 | `0x4f24`  | `binary` |
|    new |  +15.02ms |   0.0% → 2.8% |      0ms → 15.0ms |    0 → 15 | `0xa9a8`  | `binary` |
|    new |  +14.01ms |   0.0% → 2.6% |      0ms → 14.0ms |    0 → 14 | `0x46f0`  | `binary` |
| +22.8% |  +13.01ms | 11.4% → 13.0% |   57.1ms → 70.1ms |   57 → 70 | `0x1a6c`  | `binary` |
|    new |  +13.01ms |   0.0% → 2.4% |      0ms → 13.0ms |    0 → 13 | `0x4ee4`  | `binary` |
|    new |  +13.01ms |   0.0% → 2.4% |      0ms → 13.0ms |    0 → 13 | `0x487c`  | `binary` |
|    new |  +10.01ms |   0.0% → 1.9% |      0ms → 10.0ms |    0 → 10 | `0xa97c`  | `binary` |
|    new |   +8.01ms |   0.0% → 1.5% |       0ms → 8.0ms |     0 → 8 | `0x4e78`  | `binary` |
|    new |   +8.01ms |   0.0% → 1.5% |       0ms → 8.0ms |     0 → 8 | `0x4b98`  | `binary` |
|    new |   +7.01ms |   0.0% → 1.3% |       0ms → 7.0ms |     0 → 7 | `0x12954` | `binary` |

##### Native

|  Change |    Delta |           % |              Time |   Samples | Function   | Location                                           |
| ------: | -------: | ----------: | ----------------: | --------: | ---------- | -------------------------------------------------- |
|   +7.6% | +38.04ms |      100.0% | 501.5ms → 539.5ms | 501 → 539 | `0x27744`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   +7.6% | +38.04ms |      100.0% | 501.5ms → 539.5ms | 501 → 539 | `0x27818`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  +45.5% |  +5.01ms | 2.2% → 3.0% |   11.0ms → 16.0ms |   11 → 16 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new |  +4.00ms | 0.0% → 0.7% |       0ms → 4.0ms |     0 → 4 | `0x137f3c` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|     new |  +3.00ms | 0.0% → 0.6% |       0ms → 3.0ms |     0 → 3 | `0x137f94` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  +22.2% |  +2.00ms | 1.8% → 2.0% |    9.0ms → 11.0ms |    9 → 11 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|     new |  +2.00ms | 0.0% → 0.4% |       0ms → 2.0ms |     0 → 2 | `0x92a58`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new |  +2.00ms | 0.0% → 0.4% |       0ms → 2.0ms |     0 → 2 | `0x9d11c`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new |  +2.00ms | 0.0% → 0.4% |       0ms → 2.0ms |     0 → 2 | `0x9d1b0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  +16.7% |  +1.00ms | 1.2% → 1.3% |     6.0ms → 7.0ms |     6 → 7 | `0xa0cb0`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| +100.0% |  +1.00ms | 0.2% → 0.4% |     1.0ms → 2.0ms |     1 → 2 | `0xa2c9c`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|     new |  +1.00ms | 0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `0x9d114`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new |  +1.00ms | 0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `0x9e6f8`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new |  +1.00ms | 0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `0x92aa4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

##### Ours

|  Change |     Delta |            % |           Time | Samples | Function  | Location |
| ------: | --------: | -----------: | -------------: | ------: | --------- | -------- |
| removed | -373.37ms | 74.5% → 0.0% |  373.4ms → 0ms | 373 → 0 | `0x12150` | `binary` |
| removed | -318.32ms | 63.5% → 0.0% |  318.3ms → 0ms | 318 → 0 | `0x11cd0` | `binary` |
| removed | -225.23ms | 44.9% → 0.0% |  225.2ms → 0ms | 225 → 0 | `0x11b44` | `binary` |
| removed |  -86.09ms | 17.2% → 0.0% |   86.1ms → 0ms |  86 → 0 | `0x112e0` | `binary` |
| removed |  -66.07ms | 13.2% → 0.0% |   66.1ms → 0ms |  66 → 0 | `0x11b08` | `binary` |
| removed |  -47.05ms |  9.4% → 0.0% |   47.0ms → 0ms |  47 → 0 | `0x10f78` | `binary` |
| removed |  -44.04ms |  8.8% → 0.0% |   44.0ms → 0ms |  44 → 0 | `0x12108` | `binary` |
| removed |  -38.04ms |  7.6% → 0.0% |   38.0ms → 0ms |  38 → 0 | `0x11ec0` | `binary` |
| removed |  -26.03ms |  5.2% → 0.0% |   26.0ms → 0ms |  26 → 0 | `0x10f48` | `binary` |
| removed |  -20.02ms |  4.0% → 0.0% |   20.0ms → 0ms |  20 → 0 | `0x12140` | `binary` |
| removed |  -13.01ms |  2.6% → 0.0% |   13.0ms → 0ms |  13 → 0 | `0x50d8`  | `binary` |
| removed |  -12.01ms |  2.4% → 0.0% |   12.0ms → 0ms |  12 → 0 | `0x4c30`  | `binary` |
| removed |  -10.01ms |  2.0% → 0.0% |   10.0ms → 0ms |  10 → 0 | `0xc9c4`  | `binary` |
| removed |  -10.01ms |  2.0% → 0.0% |   10.0ms → 0ms |  10 → 0 | `0x5464`  | `binary` |
| removed |   -9.01ms |  1.8% → 0.0% |    9.0ms → 0ms |   9 → 0 | `0xc86c`  | `binary` |
| removed |   -8.01ms |  1.6% → 0.0% |    8.0ms → 0ms |   8 → 0 | `0x4dbc`  | `binary` |
|  -57.1% |   -8.01ms |  2.8% → 1.1% | 14.0ms → 6.0ms |  14 → 6 | `0x1b18`  | `binary` |
| removed |   -8.01ms |  1.6% → 0.0% |    8.0ms → 0ms |   8 → 0 | `0x120b0` | `binary` |
| removed |   -8.01ms |  1.6% → 0.0% |    8.0ms → 0ms |   8 → 0 | `0x5424`  | `binary` |
| removed |   -8.01ms |  1.6% → 0.0% |    8.0ms → 0ms |   8 → 0 | `0x75f4`  | `binary` |

##### Native

|  Change |   Delta |           % |            Time | Samples | Function   | Location                                           |
| ------: | ------: | ----------: | --------------: | ------: | ---------- | -------------------------------------------------- |
|  -50.0% | -6.01ms | 2.4% → 1.1% |  12.0ms → 6.0ms |  12 → 6 | `0xa2cac`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -60.0% | -6.01ms | 2.0% → 0.7% |  10.0ms → 4.0ms |  10 → 4 | `0x92a9c`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -62.5% | -5.01ms | 1.6% → 0.6% |   8.0ms → 3.0ms |   8 → 3 | `0x8faf4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -21.4% | -3.00ms | 2.8% → 2.0% | 14.0ms → 11.0ms | 14 → 11 | `0x9e6c0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -3.00ms | 0.6% → 0.0% |     3.0ms → 0ms |   3 → 0 | `0x92274`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x923f0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -66.7% | -2.00ms | 0.6% → 0.2% |   3.0ms → 1.0ms |   3 → 1 | `0x137f84` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x9d234`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x92aa0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -11.1% | -1.00ms | 1.8% → 1.5% |   9.0ms → 8.0ms |   9 → 8 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -25.0% | -1.00ms | 0.8% → 0.6% |   4.0ms → 3.0ms |   4 → 3 | `0x929e0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x9d190`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x9d138`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x929c4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x9d150`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x9e6e8`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x8fb44`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |

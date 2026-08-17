# CPU profile diff

Took 499.5ms → 519.5ms (+20.02ms, +4.0%) over 499 samples → 519 samples (1.0ms per sample).

| Category | Change |    Delta |             % |              Time |   Samples |
| -------- | -----: | -------: | ------------: | ----------------: | --------: |
| Ours     |  +5.0% | +20.02ms | 79.6% → 80.3% | 397.4ms → 417.4ms | 397 → 417 |
| Native   |   0.0% |      0ms | 20.4% → 19.7% |           102.1ms |       102 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |    Delta |           % |            Time | Samples | Function   | Location                                           |
| ------: | -------: | ----------: | --------------: | ------: | ---------- | -------------------------------------------------- |
|  +76.9% | +10.01ms | 2.6% → 4.4% | 13.0ms → 23.0ms | 13 → 23 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new |  +9.01ms | 0.0% → 1.7% |     0ms → 9.0ms |   0 → 9 | `0xe134`   | `binary`                                           |
| +300.0% |  +6.01ms | 0.4% → 1.5% |   2.0ms → 8.0ms |   2 → 8 | `0xe5a4`   | `binary`                                           |
| +500.0% |  +5.01ms | 0.2% → 1.2% |   1.0ms → 6.0ms |   1 → 6 | `0x11eb8`  | `binary`                                           |
|     new |  +5.01ms | 0.0% → 1.0% |     0ms → 5.0ms |   0 → 5 | `0x45c8`   | `binary`                                           |
| +133.3% |  +4.00ms | 0.6% → 1.3% |   3.0ms → 7.0ms |   3 → 7 | `0x5440`   | `binary`                                           |
|  +33.3% |  +4.00ms | 2.4% → 3.1% | 12.0ms → 16.0ms | 12 → 16 | `0x4c30`   | `binary`                                           |
| +200.0% |  +4.00ms | 0.4% → 1.2% |   2.0ms → 6.0ms |   2 → 6 | `0x11bc8`  | `binary`                                           |
| +133.3% |  +4.00ms | 0.6% → 1.3% |   3.0ms → 7.0ms |   3 → 7 | `0x11a14`  | `binary`                                           |
| +400.0% |  +4.00ms | 0.2% → 1.0% |   1.0ms → 5.0ms |   1 → 5 | `0x10294`  | `binary`                                           |
|  +66.7% |  +4.00ms | 1.2% → 1.9% |  6.0ms → 10.0ms |  6 → 10 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| +400.0% |  +4.00ms | 0.2% → 1.0% |   1.0ms → 5.0ms |   1 → 5 | `0x11cf8`  | `binary`                                           |
| +400.0% |  +4.00ms | 0.2% → 1.0% |   1.0ms → 5.0ms |   1 → 5 | `0xca60`   | `binary`                                           |
|     new |  +4.00ms | 0.0% → 0.8% |     0ms → 4.0ms |   0 → 4 | `0x4b34`   | `binary`                                           |
|     new |  +4.00ms | 0.0% → 0.8% |     0ms → 4.0ms |   0 → 4 | `0x9e6e8`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new |  +4.00ms | 0.0% → 0.8% |     0ms → 4.0ms |   0 → 4 | `0xc91c`   | `binary`                                           |
|  +75.0% |  +3.00ms | 0.8% → 1.3% |   4.0ms → 7.0ms |   4 → 7 | `0x120b0`  | `binary`                                           |
| +100.0% |  +3.00ms | 0.6% → 1.2% |   3.0ms → 6.0ms |   3 → 6 | `0xe5d0`   | `binary`                                           |
| +300.0% |  +3.00ms | 0.2% → 0.8% |   1.0ms → 4.0ms |   1 → 4 | `0x11a44`  | `binary`                                           |
| +150.0% |  +3.00ms | 0.4% → 1.0% |   2.0ms → 5.0ms |   2 → 5 | `0x11b00`  | `binary`                                           |

##### Ours

|  Change |   Delta |           % |            Time | Samples | Function  | Location |
| ------: | ------: | ----------: | --------------: | ------: | --------- | -------- |
|     new | +9.01ms | 0.0% → 1.7% |     0ms → 9.0ms |   0 → 9 | `0xe134`  | `binary` |
| +300.0% | +6.01ms | 0.4% → 1.5% |   2.0ms → 8.0ms |   2 → 8 | `0xe5a4`  | `binary` |
| +500.0% | +5.01ms | 0.2% → 1.2% |   1.0ms → 6.0ms |   1 → 6 | `0x11eb8` | `binary` |
|     new | +5.01ms | 0.0% → 1.0% |     0ms → 5.0ms |   0 → 5 | `0x45c8`  | `binary` |
| +133.3% | +4.00ms | 0.6% → 1.3% |   3.0ms → 7.0ms |   3 → 7 | `0x5440`  | `binary` |
|  +33.3% | +4.00ms | 2.4% → 3.1% | 12.0ms → 16.0ms | 12 → 16 | `0x4c30`  | `binary` |
| +200.0% | +4.00ms | 0.4% → 1.2% |   2.0ms → 6.0ms |   2 → 6 | `0x11bc8` | `binary` |
| +133.3% | +4.00ms | 0.6% → 1.3% |   3.0ms → 7.0ms |   3 → 7 | `0x11a14` | `binary` |
| +400.0% | +4.00ms | 0.2% → 1.0% |   1.0ms → 5.0ms |   1 → 5 | `0x10294` | `binary` |
| +400.0% | +4.00ms | 0.2% → 1.0% |   1.0ms → 5.0ms |   1 → 5 | `0x11cf8` | `binary` |
| +400.0% | +4.00ms | 0.2% → 1.0% |   1.0ms → 5.0ms |   1 → 5 | `0xca60`  | `binary` |
|     new | +4.00ms | 0.0% → 0.8% |     0ms → 4.0ms |   0 → 4 | `0x4b34`  | `binary` |
|     new | +4.00ms | 0.0% → 0.8% |     0ms → 4.0ms |   0 → 4 | `0xc91c`  | `binary` |
|  +75.0% | +3.00ms | 0.8% → 1.3% |   4.0ms → 7.0ms |   4 → 7 | `0x120b0` | `binary` |
| +100.0% | +3.00ms | 0.6% → 1.2% |   3.0ms → 6.0ms |   3 → 6 | `0xe5d0`  | `binary` |
| +300.0% | +3.00ms | 0.2% → 0.8% |   1.0ms → 4.0ms |   1 → 4 | `0x11a44` | `binary` |
| +150.0% | +3.00ms | 0.4% → 1.0% |   2.0ms → 5.0ms |   2 → 5 | `0x11b00` | `binary` |
| +300.0% | +3.00ms | 0.2% → 0.8% |   1.0ms → 4.0ms |   1 → 4 | `0x12134` | `binary` |
| +300.0% | +3.00ms | 0.2% → 0.8% |   1.0ms → 4.0ms |   1 → 4 | `0x494c`  | `binary` |
|     new | +3.00ms | 0.0% → 0.6% |     0ms → 3.0ms |   0 → 3 | `0x51c4`  | `binary` |

##### Native

| Change |    Delta |           % |            Time | Samples | Function   | Location                                           |
| -----: | -------: | ----------: | --------------: | ------: | ---------- | -------------------------------------------------- |
| +76.9% | +10.01ms | 2.6% → 4.4% | 13.0ms → 23.0ms | 13 → 23 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +66.7% |  +4.00ms | 1.2% → 1.9% |  6.0ms → 10.0ms |  6 → 10 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|    new |  +4.00ms | 0.0% → 0.8% |     0ms → 4.0ms |   0 → 4 | `0x9e6e8`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|    new |  +3.00ms | 0.0% → 0.6% |     0ms → 3.0ms |   0 → 3 | `0x9a8f4`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| +50.0% |  +2.00ms | 0.8% → 1.2% |   4.0ms → 6.0ms |   4 → 6 | `0x929e0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +50.0% |  +2.00ms | 0.8% → 1.2% |   4.0ms → 6.0ms |   4 → 6 | `0x8faf4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +50.0% |  +1.00ms | 0.4% → 0.6% |   2.0ms → 3.0ms |   2 → 3 | `0x92284`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|    new |  +1.00ms | 0.0% → 0.2% |     0ms → 1.0ms |   0 → 1 | `0x9a104`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|    new |  +1.00ms | 0.0% → 0.2% |     0ms → 1.0ms |   0 → 1 | `0x9d11c`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|    new |  +1.00ms | 0.0% → 0.2% |     0ms → 1.0ms |   0 → 1 | `0x8fae0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|    new |  +1.00ms | 0.0% → 0.2% |     0ms → 1.0ms |   0 → 1 | `0xa2c9c`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|    new |  +1.00ms | 0.0% → 0.2% |     0ms → 1.0ms |   0 → 1 | `0x137f3c` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|    new |  +1.00ms | 0.0% → 0.2% |     0ms → 1.0ms |   0 → 1 | `0x92aa4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |           % |           Time | Samples | Function  | Location                                           |
| ------: | -------: | ----------: | -------------: | ------: | --------- | -------------------------------------------------- |
|  -61.1% | -11.01ms | 3.6% → 1.3% | 18.0ms → 7.0ms |  18 → 7 | `0x5464`  | `binary`                                           |
|  -40.0% |  -6.01ms | 3.0% → 1.7% | 15.0ms → 9.0ms |  15 → 9 | `0x9e6c0` | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -85.7% |  -6.01ms | 1.4% → 0.2% |  7.0ms → 1.0ms |   7 → 1 | `0x4c90`  | `binary`                                           |
|  -71.4% |  -5.01ms | 1.4% → 0.4% |  7.0ms → 2.0ms |   7 → 2 | `0x11a30` | `binary`                                           |
| removed |  -4.00ms | 0.8% → 0.0% |    4.0ms → 0ms |   4 → 0 | `0xa2cac` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -66.7% |  -4.00ms | 1.2% → 0.4% |  6.0ms → 2.0ms |   6 → 2 | `0x112c4` | `binary`                                           |
| removed |  -4.00ms | 0.8% → 0.0% |    4.0ms → 0ms |   4 → 0 | `0x5114`  | `binary`                                           |
|  -80.0% |  -4.00ms | 1.0% → 0.2% |  5.0ms → 1.0ms |   5 → 1 | `0x4934`  | `binary`                                           |
|  -80.0% |  -4.00ms | 1.0% → 0.2% |  5.0ms → 1.0ms |   5 → 1 | `0x9d234` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -60.0% |  -3.00ms | 1.0% → 0.4% |  5.0ms → 2.0ms |   5 → 2 | `0xe214`  | `binary`                                           |
|  -75.0% |  -3.00ms | 0.8% → 0.2% |  4.0ms → 1.0ms |   4 → 1 | `0x9e6f8` | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -60.0% |  -3.00ms | 1.0% → 0.4% |  5.0ms → 2.0ms |   5 → 2 | `0x120a0` | `binary`                                           |
|  -60.0% |  -3.00ms | 1.0% → 0.4% |  5.0ms → 2.0ms |   5 → 2 | `0x4b4c`  | `binary`                                           |
|  -60.0% |  -3.00ms | 1.0% → 0.4% |  5.0ms → 2.0ms |   5 → 2 | `0xe17c`  | `binary`                                           |
|  -75.0% |  -3.00ms | 0.8% → 0.2% |  4.0ms → 1.0ms |   4 → 1 | `0x458c`  | `binary`                                           |
|  -60.0% |  -3.00ms | 1.0% → 0.4% |  5.0ms → 2.0ms |   5 → 2 | `0x5230`  | `binary`                                           |
|  -75.0% |  -3.00ms | 0.8% → 0.2% |  4.0ms → 1.0ms |   4 → 1 | `0xc5d4`  | `binary`                                           |
| removed |  -3.00ms | 0.6% → 0.0% |    3.0ms → 0ms |   3 → 0 | `0x1130c` | `binary`                                           |
| removed |  -2.00ms | 0.4% → 0.0% |    2.0ms → 0ms |   2 → 0 | `0x9d114` | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -50.0% |  -2.00ms | 0.8% → 0.4% |  4.0ms → 2.0ms |   4 → 2 | `0x7cb4`  | `binary`                                           |

##### Ours

|  Change |    Delta |           % |           Time | Samples | Function  | Location |
| ------: | -------: | ----------: | -------------: | ------: | --------- | -------- |
|  -61.1% | -11.01ms | 3.6% → 1.3% | 18.0ms → 7.0ms |  18 → 7 | `0x5464`  | `binary` |
|  -85.7% |  -6.01ms | 1.4% → 0.2% |  7.0ms → 1.0ms |   7 → 1 | `0x4c90`  | `binary` |
|  -71.4% |  -5.01ms | 1.4% → 0.4% |  7.0ms → 2.0ms |   7 → 2 | `0x11a30` | `binary` |
|  -66.7% |  -4.00ms | 1.2% → 0.4% |  6.0ms → 2.0ms |   6 → 2 | `0x112c4` | `binary` |
| removed |  -4.00ms | 0.8% → 0.0% |    4.0ms → 0ms |   4 → 0 | `0x5114`  | `binary` |
|  -80.0% |  -4.00ms | 1.0% → 0.2% |  5.0ms → 1.0ms |   5 → 1 | `0x4934`  | `binary` |
|  -60.0% |  -3.00ms | 1.0% → 0.4% |  5.0ms → 2.0ms |   5 → 2 | `0xe214`  | `binary` |
|  -60.0% |  -3.00ms | 1.0% → 0.4% |  5.0ms → 2.0ms |   5 → 2 | `0x120a0` | `binary` |
|  -60.0% |  -3.00ms | 1.0% → 0.4% |  5.0ms → 2.0ms |   5 → 2 | `0x4b4c`  | `binary` |
|  -60.0% |  -3.00ms | 1.0% → 0.4% |  5.0ms → 2.0ms |   5 → 2 | `0xe17c`  | `binary` |
|  -75.0% |  -3.00ms | 0.8% → 0.2% |  4.0ms → 1.0ms |   4 → 1 | `0x458c`  | `binary` |
|  -60.0% |  -3.00ms | 1.0% → 0.4% |  5.0ms → 2.0ms |   5 → 2 | `0x5230`  | `binary` |
|  -75.0% |  -3.00ms | 0.8% → 0.2% |  4.0ms → 1.0ms |   4 → 1 | `0xc5d4`  | `binary` |
| removed |  -3.00ms | 0.6% → 0.0% |    3.0ms → 0ms |   3 → 0 | `0x1130c` | `binary` |
|  -50.0% |  -2.00ms | 0.8% → 0.4% |  4.0ms → 2.0ms |   4 → 2 | `0x7cb4`  | `binary` |
| removed |  -2.00ms | 0.4% → 0.0% |    2.0ms → 0ms |   2 → 0 | `0x1774`  | `binary` |
| removed |  -2.00ms | 0.4% → 0.0% |    2.0ms → 0ms |   2 → 0 | `0x10260` | `binary` |
| removed |  -2.00ms | 0.4% → 0.0% |    2.0ms → 0ms |   2 → 0 | `0x11208` | `binary` |
| removed |  -2.00ms | 0.4% → 0.0% |    2.0ms → 0ms |   2 → 0 | `0xc834`  | `binary` |
|  -40.0% |  -2.00ms | 1.0% → 0.6% |  5.0ms → 3.0ms |   5 → 3 | `0x7624`  | `binary` |

##### Native

|  Change |   Delta |           % |            Time | Samples | Function   | Location                                           |
| ------: | ------: | ----------: | --------------: | ------: | ---------- | -------------------------------------------------- |
|  -40.0% | -6.01ms | 3.0% → 1.7% |  15.0ms → 9.0ms |  15 → 9 | `0x9e6c0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -4.00ms | 0.8% → 0.0% |     4.0ms → 0ms |   4 → 0 | `0xa2cac`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -80.0% | -4.00ms | 1.0% → 0.2% |   5.0ms → 1.0ms |   5 → 1 | `0x9d234`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -75.0% | -3.00ms | 0.8% → 0.2% |   4.0ms → 1.0ms |   4 → 1 | `0x9e6f8`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x9d114`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x923f0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x929c4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -12.5% | -2.00ms | 3.2% → 2.7% | 16.0ms → 14.0ms | 16 → 14 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x92a58`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x92aa0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -16.7% | -1.00ms | 1.2% → 1.0% |   6.0ms → 5.0ms |   6 → 5 | `0xa0cb0`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x137f94` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x8fb44`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x92260`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time |   Samples | Function  | Location                                 |
| ------: | -------: | ------------: | ----------------: | --------: | --------- | ---------------------------------------- |
|   +6.0% | +22.02ms | 73.5% → 75.0% | 367.4ms → 389.4ms | 367 → 389 | `0x12150` | `binary`                                 |
|   +4.0% | +20.02ms |        100.0% | 499.5ms → 519.5ms | 499 → 519 | `0x27744` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   +4.0% | +20.02ms |        100.0% | 499.5ms → 519.5ms | 499 → 519 | `0x27818` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|   +4.0% | +20.02ms |        100.0% | 499.5ms → 519.5ms | 499 → 519 | `0x1c30`  | `binary`                                 |
|  +25.0% | +16.02ms | 12.8% → 15.4% |   64.1ms → 80.1ms |   64 → 80 | `0x1a6c`  | `binary`                                 |
|  +76.9% | +10.01ms |   2.6% → 4.4% |   13.0ms → 23.0ms |   13 → 23 | `0x9d100` | `../usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |  +9.01ms |   0.0% → 1.7% |       0ms → 9.0ms |     0 → 9 | `0xe134`  | `binary`                                 |
|  +60.0% |  +6.01ms |   2.0% → 3.1% |   10.0ms → 16.0ms |   10 → 16 | `0x1b18`  | `binary`                                 |
| +300.0% |  +6.01ms |   0.4% → 1.5% |     2.0ms → 8.0ms |     2 → 8 | `0xe5a4`  | `binary`                                 |
|   +1.2% |  +5.01ms | 81.0% → 78.8% | 404.4ms → 409.4ms | 404 → 409 | `0x1ab4`  | `binary`                                 |
|  +10.0% |  +5.01ms | 10.0% → 10.6% |   50.1ms → 55.1ms |   50 → 55 | `0x11ec0` | `binary`                                 |
|  +10.4% |  +5.01ms |  9.6% → 10.2% |   48.0ms → 53.1ms |   48 → 53 | `0x10f78` | `binary`                                 |
|  +83.3% |  +5.01ms |   1.2% → 2.1% |    6.0ms → 11.0ms |    6 → 11 | `0x4dbc`  | `binary`                                 |
| +500.0% |  +5.01ms |   0.2% → 1.2% |     1.0ms → 6.0ms |     1 → 6 | `0x11eb8` | `binary`                                 |
|     new |  +5.01ms |   0.0% → 1.0% |       0ms → 5.0ms |     0 → 5 | `0x45c8`  | `binary`                                 |
|   +1.9% |  +4.00ms | 41.7% → 40.8% | 208.2ms → 212.2ms | 208 → 212 | `0x11b44` | `binary`                                 |
|   +8.2% |  +4.00ms |  9.8% → 10.2% |   49.0ms → 53.1ms |   49 → 53 | `0x12108` | `binary`                                 |
| +133.3% |  +4.00ms |   0.6% → 1.3% |     3.0ms → 7.0ms |     3 → 7 | `0x5440`  | `binary`                                 |
|  +33.3% |  +4.00ms |   2.4% → 3.1% |   12.0ms → 16.0ms |   12 → 16 | `0x4c30`  | `binary`                                 |
| +200.0% |  +4.00ms |   0.4% → 1.2% |     2.0ms → 6.0ms |     2 → 6 | `0x11bc8` | `binary`                                 |

##### Ours

|  Change |    Delta |             % |              Time |   Samples | Function  | Location |
| ------: | -------: | ------------: | ----------------: | --------: | --------- | -------- |
|   +6.0% | +22.02ms | 73.5% → 75.0% | 367.4ms → 389.4ms | 367 → 389 | `0x12150` | `binary` |
|   +4.0% | +20.02ms |        100.0% | 499.5ms → 519.5ms | 499 → 519 | `0x1c30`  | `binary` |
|  +25.0% | +16.02ms | 12.8% → 15.4% |   64.1ms → 80.1ms |   64 → 80 | `0x1a6c`  | `binary` |
|     new |  +9.01ms |   0.0% → 1.7% |       0ms → 9.0ms |     0 → 9 | `0xe134`  | `binary` |
|  +60.0% |  +6.01ms |   2.0% → 3.1% |   10.0ms → 16.0ms |   10 → 16 | `0x1b18`  | `binary` |
| +300.0% |  +6.01ms |   0.4% → 1.5% |     2.0ms → 8.0ms |     2 → 8 | `0xe5a4`  | `binary` |
|   +1.2% |  +5.01ms | 81.0% → 78.8% | 404.4ms → 409.4ms | 404 → 409 | `0x1ab4`  | `binary` |
|  +10.0% |  +5.01ms | 10.0% → 10.6% |   50.1ms → 55.1ms |   50 → 55 | `0x11ec0` | `binary` |
|  +10.4% |  +5.01ms |  9.6% → 10.2% |   48.0ms → 53.1ms |   48 → 53 | `0x10f78` | `binary` |
|  +83.3% |  +5.01ms |   1.2% → 2.1% |    6.0ms → 11.0ms |    6 → 11 | `0x4dbc`  | `binary` |
| +500.0% |  +5.01ms |   0.2% → 1.2% |     1.0ms → 6.0ms |     1 → 6 | `0x11eb8` | `binary` |
|     new |  +5.01ms |   0.0% → 1.0% |       0ms → 5.0ms |     0 → 5 | `0x45c8`  | `binary` |
|   +1.9% |  +4.00ms | 41.7% → 40.8% | 208.2ms → 212.2ms | 208 → 212 | `0x11b44` | `binary` |
|   +8.2% |  +4.00ms |  9.8% → 10.2% |   49.0ms → 53.1ms |   49 → 53 | `0x12108` | `binary` |
| +133.3% |  +4.00ms |   0.6% → 1.3% |     3.0ms → 7.0ms |     3 → 7 | `0x5440`  | `binary` |
|  +33.3% |  +4.00ms |   2.4% → 3.1% |   12.0ms → 16.0ms |   12 → 16 | `0x4c30`  | `binary` |
| +200.0% |  +4.00ms |   0.4% → 1.2% |     2.0ms → 6.0ms |     2 → 6 | `0x11bc8` | `binary` |
| +200.0% |  +4.00ms |   0.4% → 1.2% |     2.0ms → 6.0ms |     2 → 6 | `0xc86c`  | `binary` |
| +133.3% |  +4.00ms |   0.6% → 1.3% |     3.0ms → 7.0ms |     3 → 7 | `0x11a14` | `binary` |
| +400.0% |  +4.00ms |   0.2% → 1.0% |     1.0ms → 5.0ms |     1 → 5 | `0x10294` | `binary` |

##### Native

| Change |    Delta |           % |              Time |   Samples | Function   | Location                                           |
| -----: | -------: | ----------: | ----------------: | --------: | ---------- | -------------------------------------------------- |
|  +4.0% | +20.02ms |      100.0% | 499.5ms → 519.5ms | 499 → 519 | `0x27744`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  +4.0% | +20.02ms |      100.0% | 499.5ms → 519.5ms | 499 → 519 | `0x27818`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +76.9% | +10.01ms | 2.6% → 4.4% |   13.0ms → 23.0ms |   13 → 23 | `0x9d100`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +66.7% |  +4.00ms | 1.2% → 1.9% |    6.0ms → 10.0ms |    6 → 10 | `0x137f80` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|    new |  +4.00ms | 0.0% → 0.8% |       0ms → 4.0ms |     0 → 4 | `0x9e6e8`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|    new |  +3.00ms | 0.0% → 0.6% |       0ms → 3.0ms |     0 → 3 | `0x9a8f4`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| +50.0% |  +2.00ms | 0.8% → 1.2% |     4.0ms → 6.0ms |     4 → 6 | `0x929e0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +50.0% |  +2.00ms | 0.8% → 1.2% |     4.0ms → 6.0ms |     4 → 6 | `0x8faf4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +28.6% |  +2.00ms | 1.4% → 1.7% |     7.0ms → 9.0ms |     7 → 9 | `0x92a9c`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +50.0% |  +1.00ms | 0.4% → 0.6% |     2.0ms → 3.0ms |     2 → 3 | `0x92284`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|    new |  +1.00ms | 0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `0x9a104`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|    new |  +1.00ms | 0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `0x9d11c`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|    new |  +1.00ms | 0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `0x8fae0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|    new |  +1.00ms | 0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `0xa2c9c`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|    new |  +1.00ms | 0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `0x137f3c` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|    new |  +1.00ms | 0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `0x92aa4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |             % |            Time | Samples | Function  | Location                                           |
| ------: | -------: | ------------: | --------------: | ------: | --------- | -------------------------------------------------- |
|  -61.1% | -11.01ms |   3.6% → 1.3% |  18.0ms → 7.0ms |  18 → 7 | `0x5464`  | `binary`                                           |
|  -27.6% |  -8.01ms |   5.8% → 4.0% | 29.0ms → 21.0ms | 29 → 21 | `0x10f48` | `binary`                                           |
|  -10.6% |  -7.01ms | 13.2% → 11.4% | 66.1ms → 59.1ms | 66 → 59 | `0x11b08` | `binary`                                           |
|  -26.9% |  -7.01ms |   5.2% → 3.7% | 26.0ms → 19.0ms | 26 → 19 | `0x12140` | `binary`                                           |
|  -60.0% |  -6.01ms |   2.0% → 0.8% |  10.0ms → 4.0ms |  10 → 4 | `0xa2cac` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -40.0% |  -6.01ms |   3.0% → 1.7% |  15.0ms → 9.0ms |  15 → 9 | `0x9e6c0` | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -85.7% |  -6.01ms |   1.4% → 0.2% |   7.0ms → 1.0ms |   7 → 1 | `0x4c90`  | `binary`                                           |
|  -85.7% |  -6.01ms |   1.4% → 0.2% |   7.0ms → 1.0ms |   7 → 1 | `0x120fc` | `binary`                                           |
|  -60.0% |  -6.01ms |   2.0% → 0.8% |  10.0ms → 4.0ms |  10 → 4 | `0x4e50`  | `binary`                                           |
|  -71.4% |  -5.01ms |   1.4% → 0.4% |   7.0ms → 2.0ms |   7 → 2 | `0x11a30` | `binary`                                           |
|  -50.0% |  -5.01ms |   2.0% → 1.0% |  10.0ms → 5.0ms |  10 → 5 | `0x50d8`  | `binary`                                           |
|  -66.7% |  -4.00ms |   1.2% → 0.4% |   6.0ms → 2.0ms |   6 → 2 | `0x112c4` | `binary`                                           |
| removed |  -4.00ms |   0.8% → 0.0% |     4.0ms → 0ms |   4 → 0 | `0x5114`  | `binary`                                           |
|  -80.0% |  -4.00ms |   1.0% → 0.2% |   5.0ms → 1.0ms |   5 → 1 | `0x4934`  | `binary`                                           |
|  -80.0% |  -4.00ms |   1.0% → 0.2% |   5.0ms → 1.0ms |   5 → 1 | `0x9d234` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -80.0% |  -4.00ms |   1.0% → 0.2% |   5.0ms → 1.0ms |   5 → 1 | `0x1ad0`  | `binary`                                           |
|  -60.0% |  -3.00ms |   1.0% → 0.4% |   5.0ms → 2.0ms |   5 → 2 | `0xe214`  | `binary`                                           |
|  -75.0% |  -3.00ms |   0.8% → 0.2% |   4.0ms → 1.0ms |   4 → 1 | `0x9e6f8` | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -60.0% |  -3.00ms |   1.0% → 0.4% |   5.0ms → 2.0ms |   5 → 2 | `0x120a0` | `binary`                                           |
|  -60.0% |  -3.00ms |   1.0% → 0.4% |   5.0ms → 2.0ms |   5 → 2 | `0x4b4c`  | `binary`                                           |

##### Ours

|  Change |    Delta |             % |            Time | Samples | Function  | Location |
| ------: | -------: | ------------: | --------------: | ------: | --------- | -------- |
|  -61.1% | -11.01ms |   3.6% → 1.3% |  18.0ms → 7.0ms |  18 → 7 | `0x5464`  | `binary` |
|  -27.6% |  -8.01ms |   5.8% → 4.0% | 29.0ms → 21.0ms | 29 → 21 | `0x10f48` | `binary` |
|  -10.6% |  -7.01ms | 13.2% → 11.4% | 66.1ms → 59.1ms | 66 → 59 | `0x11b08` | `binary` |
|  -26.9% |  -7.01ms |   5.2% → 3.7% | 26.0ms → 19.0ms | 26 → 19 | `0x12140` | `binary` |
|  -85.7% |  -6.01ms |   1.4% → 0.2% |   7.0ms → 1.0ms |   7 → 1 | `0x4c90`  | `binary` |
|  -85.7% |  -6.01ms |   1.4% → 0.2% |   7.0ms → 1.0ms |   7 → 1 | `0x120fc` | `binary` |
|  -60.0% |  -6.01ms |   2.0% → 0.8% |  10.0ms → 4.0ms |  10 → 4 | `0x4e50`  | `binary` |
|  -71.4% |  -5.01ms |   1.4% → 0.4% |   7.0ms → 2.0ms |   7 → 2 | `0x11a30` | `binary` |
|  -50.0% |  -5.01ms |   2.0% → 1.0% |  10.0ms → 5.0ms |  10 → 5 | `0x50d8`  | `binary` |
|  -66.7% |  -4.00ms |   1.2% → 0.4% |   6.0ms → 2.0ms |   6 → 2 | `0x112c4` | `binary` |
| removed |  -4.00ms |   0.8% → 0.0% |     4.0ms → 0ms |   4 → 0 | `0x5114`  | `binary` |
|  -80.0% |  -4.00ms |   1.0% → 0.2% |   5.0ms → 1.0ms |   5 → 1 | `0x4934`  | `binary` |
|  -80.0% |  -4.00ms |   1.0% → 0.2% |   5.0ms → 1.0ms |   5 → 1 | `0x1ad0`  | `binary` |
|  -60.0% |  -3.00ms |   1.0% → 0.4% |   5.0ms → 2.0ms |   5 → 2 | `0xe214`  | `binary` |
|  -60.0% |  -3.00ms |   1.0% → 0.4% |   5.0ms → 2.0ms |   5 → 2 | `0x120a0` | `binary` |
|  -60.0% |  -3.00ms |   1.0% → 0.4% |   5.0ms → 2.0ms |   5 → 2 | `0x4b4c`  | `binary` |
|  -30.0% |  -3.00ms |   2.0% → 1.3% |  10.0ms → 7.0ms |  10 → 7 | `0xc9c4`  | `binary` |
|  -60.0% |  -3.00ms |   1.0% → 0.4% |   5.0ms → 2.0ms |   5 → 2 | `0xe17c`  | `binary` |
|  -75.0% |  -3.00ms |   0.8% → 0.2% |   4.0ms → 1.0ms |   4 → 1 | `0x458c`  | `binary` |
|  -60.0% |  -3.00ms |   1.0% → 0.4% |   5.0ms → 2.0ms |   5 → 2 | `0x5230`  | `binary` |

##### Native

|  Change |   Delta |           % |            Time | Samples | Function   | Location                                           |
| ------: | ------: | ----------: | --------------: | ------: | ---------- | -------------------------------------------------- |
|  -60.0% | -6.01ms | 2.0% → 0.8% |  10.0ms → 4.0ms |  10 → 4 | `0xa2cac`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -40.0% | -6.01ms | 3.0% → 1.7% |  15.0ms → 9.0ms |  15 → 9 | `0x9e6c0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -80.0% | -4.00ms | 1.0% → 0.2% |   5.0ms → 1.0ms |   5 → 1 | `0x9d234`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -75.0% | -3.00ms | 0.8% → 0.2% |   4.0ms → 1.0ms |   4 → 1 | `0x9e6f8`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x9d114`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x923f0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x929c4`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -12.5% | -2.00ms | 3.2% → 2.7% | 16.0ms → 14.0ms | 16 → 14 | `0x137f20` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x92a58`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x92aa0`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -16.7% | -1.00ms | 1.2% → 1.0% |   6.0ms → 5.0ms |   6 → 5 | `0xa0cb0`  | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x137f94` | `../usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x8fb44`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x92260`  | `../usr/lib/aarch64-linux-gnu/libc.so.6`           |
